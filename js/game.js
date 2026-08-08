/* The Calloway Files — game engine */
(function () {
  "use strict";

  const CASES = window.CASES || [];
  const UI = window.CALLOWAY_UI || {};
  const ART = window.CASE_ART || {};
  const TEXT = window.CASE_TEXT || {};
  const COST = { travel: 10, search: 20, ask: 10 };
  const SAVE_KEY = "calloway_save_v1";
  const RESULTS_KEY = "calloway_results_v1";
  const LANG_KEY = "calloway_lang_v1";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SFX = window.CallowayAudio || { play: function () {}, room: function () {}, leaveRoom: function () {}, unlock: function () {}, isMuted: function () { return true; }, setMuted: function () {} };

  let LANG = "en";
  let G = null;          // active game state
  let C = null;          // active case data, localized
  let warned120 = false, warned60 = false;
  let DEBUG = false;     // set by hash boot; disables saves

  /* ---------- tiny DOM helpers ---------- */
  const $ = (sel) => document.querySelector(sel);
  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /* ---------- language ---------- */
  const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  function digits(s) {
    if (LANG !== "fa") return String(s);
    return String(s).replace(/[0-9]/g, (d) => FA_DIGITS[+d]);
  }
  function L() { return UI[LANG] || UI.en || {}; }
  // T("key", a, b) — looks up an interface string and fills %1, %2 … (numbers localized)
  function T(key) {
    const args = Array.prototype.slice.call(arguments, 1);
    let s = L()[key];
    if (s === undefined) s = (UI.en || {})[key];
    if (s === undefined) return key;
    return String(s).replace(/%(\d)/g, (m, i) => digits(args[i - 1] !== undefined ? args[i - 1] : ""));
  }
  function numberWord(n) {
    const list = L().numbers || UI.en.numbers;
    return list[n] || digits(n);
  }
  function setLang(lang, rerender) {
    LANG = UI[lang] ? lang : "en";
    try { localStorage.setItem(LANG_KEY, LANG); } catch (e) { /* private mode */ }
    document.documentElement.lang = LANG;
    document.documentElement.dir = L().dir || "ltr";
    document.body.classList.toggle("lang-fa", LANG === "fa");
    // static chrome that lives in index.html
    $("#btn-desk").textContent = T("desk");
    $("#btn-desk").title = T("deskTitle");
    $("#btn-accuse").textContent = T("accuse");
    $("#btn-casefile").textContent = T("caseFile");
    const lb = $("#btn-lang");
    lb.textContent = T("otherLangName");
    lb.setAttribute("lang", LANG === "fa" ? "en" : "fa");
    lb.title = T("switchTo");
    document.querySelectorAll(".js-sound").forEach(syncSound);
    const pane = document.querySelector(".pane-label");
    if (pane) pane.textContent = T("premises");
    const tabNames = { evidence: "tabEvidence", people: "tabPeople", board: "tabBoard" };
    document.querySelectorAll(".jtab").forEach((tab) => {
      const countId = tab.dataset.tab === "evidence" ? "count-evidence" : tab.dataset.tab === "board" ? "count-board" : null;
      tab.textContent = T(tabNames[tab.dataset.tab]) + " ";
      if (countId) { const sp = el("span", "tab-count"); sp.id = countId; tab.appendChild(sp); }
    });
    if (!rerender) return;
    if (C) { C = localizeCase(baseCase(C.id)); }
    if (!$("#screen-game").hidden) { enterGame(); }
    else if (!$("#screen-briefing").hidden) { renderBriefing(); }
    else if (!$("#screen-verdict").hidden) { renderTitle(); }
    else { renderTitle(); }
  }

  /* Merge a Persian text pack over a case's English structure. Anything the
     pack omits falls back to the original, so a partial translation still runs. */
  function baseCase(id) { return CASES.find((c) => c.id === id); }
  function localizeCase(base) {
    if (!base) return base;
    const pack = TEXT[base.id + "_" + LANG];
    if (!pack) return base;
    const pick = (o, k, d) => (o && o[k] !== undefined ? o[k] : d);
    const out = Object.assign({}, base);
    ["title", "tagline", "place", "date", "deadlineLabel", "epigraph", "detectiveNote"].forEach((k) => {
      out[k] = pick(pack, k, base[k]);
    });
    out.briefing = pack.briefing || base.briefing;
    out.locations = base.locations.map((loc) => {
      const lp = (pack.locations || {})[loc.id] || {};
      return Object.assign({}, loc, {
        name: pick(lp, "name", loc.name),
        desc: pick(lp, "desc", loc.desc),
        hotspots: loc.hotspots.map((h) => {
          const hp = (lp.hotspots || {})[h.id] || {};
          return Object.assign({}, h, {
            name: pick(hp, "name", h.name),
            found: pick(hp, "found", h.found),
            lockedHint: pick(hp, "lockedHint", h.lockedHint),
          });
        }),
      });
    });
    out.suspects = base.suspects.map((s) => {
      const sp = (pack.suspects || {})[s.id] || {};
      return Object.assign({}, s, {
        name: pick(sp, "name", s.name),
        role: pick(sp, "role", s.role),
        blurb: pick(sp, "blurb", s.blurb),
        initials: pick(sp, "initials", s.initials),
        topics: s.topics.map((t) => {
          const tp = (sp.topics || {})[t.id] || {};
          return Object.assign({}, t, {
            label: pick(tp, "label", t.label),
            response: pick(tp, "response", t.response),
            note: pick(tp, "note", t.note),
          });
        }),
      });
    });
    out.clues = {};
    Object.keys(base.clues).forEach((cid) => {
      const cp = (pack.clues || {})[cid] || {};
      out.clues[cid] = {
        name: pick(cp, "name", base.clues[cid].name),
        desc: pick(cp, "desc", base.clues[cid].desc),
      };
    });
    out.deductions = base.deductions.map((d) => {
      const dp = (pack.deductions || {})[d.id] || {};
      return Object.assign({}, d, { name: pick(dp, "name", d.name), text: pick(dp, "text", d.text) });
    });
    out.motiveOptions = base.motiveOptions.map((m) => {
      const label = (pack.motives || {})[m.id];
      return Object.assign({}, m, { label: label !== undefined ? label : m.label });
    });
    out.epilogues = {};
    Object.keys(base.epilogues).forEach((k) => {
      out.epilogues[k] = (pack.epilogues || {})[k] || base.epilogues[k];
    });
    return out;
  }

  /* ---------- persistence ----------
     Every write is guarded: private-browsing and full-quota both throw on
     setItem, and an uncaught throw here would abort the action that triggered
     it (a search would spend time and then render nothing). Play continues in
     memory; the player is told once. */
  let storageWarned = false;
  function storageFailed() {
    if (storageWarned) return;
    storageWarned = true;
    toast("clock", T("saveFailed"), T("saveFailedBody"));
  }
  function saveGame() {
    if (!G || DEBUG) return;
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(G)); } catch (e) { storageFailed(); }
  }
  function loadGame() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { return null; }
  }
  function clearSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch (e) { /* nothing to clear */ }
  }
  function getResults() {
    try { return JSON.parse(localStorage.getItem(RESULTS_KEY)) || {}; } catch (e) { return {}; }
  }
  function setResult(caseId, res) {
    const r = getResults();
    const prev = r[caseId];
    const order = { perfect: 3, partial: 2, wrong: 1, timeout: 0 };
    if (!prev || order[res.tier] > order[prev.tier]) { r[caseId] = res; }
    try { localStorage.setItem(RESULTS_KEY, JSON.stringify(r)); } catch (e) { storageFailed(); }
  }

  /* ---------- time ---------- */
  function fmtClock(totalMin) {
    const m = ((totalMin % 1440) + 1440) % 1440;
    let h = Math.floor(m / 60), mm = m % 60;
    const pm = h >= 12;
    const ap = LANG === "fa" ? (pm ? "ب.ظ" : "ق.ظ") : (pm ? "PM" : "AM");
    h = h % 12; if (h === 0) h = 12;
    return digits(h + ":" + String(mm).padStart(2, "0")) + " " + ap;
  }
  function timeLeft() { return C.timeBudget - G.elapsed; }
  // "3h 20m" / "3h" / "20m" — never the awkward "3h 0m"
  function fmtSpan(base, mins) {
    const h = Math.floor(mins / 60), m = mins % 60;
    if (h && m) return T(base, h, m);
    if (h) return T(base + "H", h);
    return T(base + "M", m);
  }
  function renderClock() {
    const t = $("#clock-time"), d = $("#clock-deadline");
    t.textContent = fmtClock(C.startMinutes + G.elapsed);
    const left = timeLeft();
    d.textContent = left > 0 ? fmtSpan("untilDeadline", left) : T("timeUpShort");
    const clock = $("#topbar-clock");
    clock.classList.toggle("warn", left <= 120 && left > 60);
    clock.classList.toggle("danger", left <= 60);
    // the desk lamp loses to dawn as the budget drains — the resource, made ambient
    const burned = Math.max(0, Math.min(1, G.elapsed / C.timeBudget));
    document.documentElement.style.setProperty("--dawn", (burned * burned).toFixed(3));
  }
  function spend(min) {
    if (!G || G.over) return;
    G.elapsed = Math.min(C.timeBudget, G.elapsed + min);
    renderClock();
    costChip(min);
    SFX.play("tick");
    const left = timeLeft();
    if (left <= 120 && !warned120) { warned120 = true; toast("clock", T("toastNightOld"), T("toastNightOldBody")); }
    if (left <= 60 && !warned60) { warned60 = true; toast("clock", T("toastOneHour"), T("toastOneHourBody")); }
    saveGame();
    if (left <= 0) onTimeUp();
  }

  /* ---------- screens ---------- */
  function showScreen(id) {
    ["#screen-title", "#screen-briefing", "#screen-game", "#screen-verdict"].forEach((s) => {
      $(s).hidden = s !== id;
    });
    $("#topbar").hidden = id !== "#screen-game";
    window.scrollTo(0, 0);
  }

  /* ---------- typewriter ---------- */
  function typeInto(node, text, speed, done) {
    node.textContent = "";
    if (REDUCED || speed <= 0) { node.textContent = text; if (done) done(); return { skip: () => {} }; }
    let i = 0, stopped = false;
    const tick = () => {
      if (stopped) return;
      const step = 2;
      i = Math.min(text.length, i + step);
      node.textContent = text.slice(0, i);
      SFX.play("key");
      if (i < text.length) setTimeout(tick, speed);
      else if (done) done();
    };
    tick();
    return { skip: () => { stopped = true; node.textContent = text; if (done) done(); } };
  }

  /* ---------- feedback: the cost of a minute ----------
     The clock is the whole game, and it used to change in silence behind a
     modal. Spending now leaves a mark where the player is looking. */
  let ptr = { x: 0, y: 0 };
  document.addEventListener("pointerdown", (e) => { ptr = { x: e.clientX, y: e.clientY }; SFX.unlock(); }, true);
  document.addEventListener("keydown", () => SFX.unlock(), true);
  function costChip(min) {
    const chip = el("div", "cost-chip", "−" + T("minutesShort", min));
    const x = ptr.x || window.innerWidth / 2;
    const y = ptr.y || window.innerHeight / 2;
    chip.style.left = x + "px";
    chip.style.top = y + "px";
    document.body.appendChild(chip);
    setTimeout(() => chip.remove(), 1100);
    const clock = $("#topbar-clock");
    if (clock) { clock.classList.remove("ticked"); void clock.offsetWidth; clock.classList.add("ticked"); }
  }

  /* ---------- toasts ----------
     Queued: closing two deductions at once used to stack three notices in the
     same corner, all truncated, all expiring together. */
  const toastQ = [];
  let toastTimer = null;
  function toast(kind, title, body) {
    toastQ.push({ kind, title, body });
    if (!toastTimer) pumpToasts();
  }
  function pumpToasts() {
    const next = toastQ.shift();
    if (!next) { toastTimer = null; return; }
    const root = $("#toast-root");
    const t = el("div", "toast toast-" + next.kind);
    t.appendChild(el("div", "toast-title", esc(next.title)));
    if (next.body) t.appendChild(el("div", "toast-body", esc(next.body)));
    root.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 3800);
    toastTimer = setTimeout(pumpToasts, REDUCED ? 120 : 460);
  }

  /* ---------- modals ---------- */
  const FOCUSABLE = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  function openModal(cls) {
    const root = $("#modal-root");
    const overlay = el("div", "overlay");
    const box = el("div", "modal " + (cls || ""));
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("tabindex", "-1");
    overlay.appendChild(box);
    root.appendChild(overlay);
    const returnTo = document.activeElement;
    let closing = false;
    const close = () => {
      if (closing) return;
      closing = true;
      overlay.classList.add("is-closing");
      setTimeout(() => overlay.remove(), REDUCED ? 0 : 150);
      document.removeEventListener("keydown", keys, true);
      if (returnTo && returnTo.focus) returnTo.focus();
    };
    overlay.addEventListener("mousedown", (e) => { if (e.target === overlay && !overlay.dataset.locked) close(); });
    // Escape to dismiss (unless locked), and keep Tab inside the dialog
    const keys = (e) => {
      if (e.key === "Escape" && !overlay.dataset.locked) { e.preventDefault(); close(); return; }
      if (e.key !== "Tab") return;
      const items = Array.prototype.filter.call(box.querySelectorAll(FOCUSABLE), (n) => n.offsetParent !== null);
      if (!items.length) { e.preventDefault(); box.focus(); return; }
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === box)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", keys, true);
    SFX.play("open");
    requestAnimationFrame(() => {
      const first = box.querySelector(FOCUSABLE);
      (first || box).focus();
    });
    return { box, close, overlay };
  }

  // one control, two homes (topbar and desk); they stay in sync
  function syncSound(btn) {
    const off = SFX.isMuted();
    btn.textContent = off ? "♪̸" : "♪";
    btn.classList.toggle("is-muted", off);
    btn.setAttribute("aria-pressed", off ? "false" : "true");
    btn.setAttribute("aria-label", off ? T("soundOff") : T("soundOn"));
    btn.title = off ? T("soundOff") : T("soundOn");
  }
  function wireSound(btn) {
    syncSound(btn);
    btn.addEventListener("click", () => {
      const nowMuted = !SFX.isMuted();
      SFX.setMuted(nowMuted);
      if (!nowMuted) { SFX.unlock(); if (C && !$("#screen-game").hidden) SFX.room(C.id); SFX.play("paper"); }
      else { SFX.leaveRoom(); }
      document.querySelectorAll(".js-sound").forEach(syncSound);
    });
  }

  /* ---------- title screen ---------- */
  function renderTitle() {
    document.documentElement.style.setProperty("--dawn", "0");
    delete document.body.dataset.case;   // back to the agency's own rain
    SFX.leaveRoom();
    const s = $("#screen-title");
    s.innerHTML = "";

    const soundBtn = el("button", "btn btn-chip js-sound");
    wireSound(soundBtn);
    s.appendChild(soundBtn);

    const langBtn = el("button", "lang-toggle", esc(T("otherLangName")));
    langBtn.title = T("switchTo");
    langBtn.setAttribute("lang", LANG === "fa" ? "en" : "fa");
    langBtn.addEventListener("click", () => setLang(LANG === "fa" ? "en" : "fa", true));
    s.appendChild(langBtn);

    const head = el("header", "title-head");
    head.appendChild(el("div", "agency-line", T("agency")));
    head.appendChild(el("h1", "game-title", T("gameTitle")));
    head.appendChild(el("p", "title-sub", T("titleSub", numberWord(CASES.length))));
    s.appendChild(head);

    const save = loadGame();
    const results = getResults();
    const shelf = el("div", "dossier-shelf");
    CASES.forEach((baseCs) => {
      const cs = localizeCase(baseCs);
      const res = results[cs.id];
      const d = el("article", "dossier" + (res ? " dossier-" + res.tier : ""));
      d.setAttribute("tabindex", "0");
      d.setAttribute("role", "button");
      d.setAttribute("aria-label", T("openCaseAria", cs.fileNo, cs.title));
      const stars = "◆".repeat(cs.difficulty) + "◇".repeat(3 - cs.difficulty);
      d.innerHTML =
        '<div class="dossier-tab">' + T("fileNo", cs.fileNo) + "</div>" +
        '<div class="dossier-body">' +
        '<div class="dossier-meta">' + esc(cs.place) + " · " + esc(cs.date) + "</div>" +
        '<h2 class="dossier-title">' + esc(cs.title) + "</h2>" +
        '<p class="dossier-tag">' + esc(cs.tagline) + "</p>" +
        '<div class="dossier-foot"><span class="difficulty" title="' + T("difficulty") + '">' + stars + "</span>" +
        (save && save.caseId === cs.id && !save.over ? '<span class="resume-chip">' + T("resumeChip") + "</span>" : "") +
        "</div></div>" +
        (res ? '<div class="dossier-stamp stamp-' + res.tier + '">' + stampText(res.tier) + "</div>" : "");
      const open = () => {
        if (save && save.caseId === cs.id && !save.over) { resumeCase(save); }
        else startCase(cs.id);
      };
      d.addEventListener("click", open);
      d.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      shelf.appendChild(d);
    });
    s.appendChild(shelf);

    const foot = el("footer", "title-foot",
      T("footer", numberWord(CASES.length).toLowerCase()) +
      (Object.keys(results).length ? ' · <button class="linklike" id="btn-wipe">' + T("clearRecord") + "</button>" : ""));
    s.appendChild(foot);
    const wipe = $("#btn-wipe");
    if (wipe) wipe.addEventListener("click", () => {
      localStorage.removeItem(RESULTS_KEY); clearSave(); renderTitle();
    });
    showScreen("#screen-title");
  }
  function stampText(tier) {
    return T({ perfect: "stampPerfect", partial: "stampPartial", wrong: "stampWrong", timeout: "stampTimeout" }[tier] || "stampPartial");
  }

  /* ---------- briefing ---------- */
  function startCase(caseId) {
    C = localizeCase(baseCase(caseId));
    G = {
      caseId: caseId, elapsed: 0, loc: C.locations[0].id,
      clues: [], searched: [], asked: [], deductions: [], over: false,
    };
    warned120 = warned60 = false;
    saveGame();
    renderBriefing();
  }
  function resumeCase(save) {
    C = localizeCase(baseCase(save.caseId));
    if (!C) { clearSave(); renderTitle(); return; }
    G = save;
    warned120 = timeLeft() <= 120; warned60 = timeLeft() <= 60;
    enterGame();
    toast("clock", T("toastResumed"), T("toastResumedBody", fmtClock(C.startMinutes + G.elapsed)));
  }
  function renderBriefing() {
    const s = $("#screen-briefing");
    s.innerHTML = "";
    const sheet = el("div", "brief-sheet");
    sheet.appendChild(el("div", "brief-stamp", T("caseOpened")));
    sheet.appendChild(el("div", "brief-head",
      T("letterhead", C.fileNo) + "<br>" + esc(C.place) + " · " + esc(C.date)));
    sheet.appendChild(el("h2", "brief-title", esc(C.title)));
    sheet.appendChild(el("p", "brief-epigraph", esc(C.epigraph)));
    const paras = el("div", "brief-paras");
    sheet.appendChild(paras);
    const note = el("div", "brief-note");
    note.innerHTML = '<span class="note-label">' + T("pinnedNote") + "</span> " + esc(C.detectiveNote);
    note.style.visibility = "hidden";
    sheet.appendChild(note);
    const deadline = el("div", "brief-deadline", esc(C.deadlineLabel));
    deadline.style.visibility = "hidden";
    sheet.appendChild(deadline);
    const btn = el("button", "btn btn-primary brief-begin", T("beginInvestigation", fmtClock(C.startMinutes)));
    btn.style.visibility = "hidden";
    btn.addEventListener("click", enterGame);
    sheet.appendChild(btn);
    s.appendChild(sheet);
    showScreen("#screen-briefing");

    // type the briefing paragraphs one after another
    let idx = 0;
    let current = null;
    const typeNext = () => {
      if (idx >= C.briefing.length) {
        [note, deadline, btn].forEach((n) => { n.style.visibility = ""; n.classList.add("revealed"); });
        btn.focus();
        return;
      }
      const p = el("p", "brief-p");
      paras.appendChild(p);
      current = typeInto(p, C.briefing[idx], 14, () => { idx++; typeNext(); });
    };
    sheet.addEventListener("click", () => { if (current) current.skip(); });
    typeNext();
  }

  /* The briefing used to be destroyed the moment you pressed Begin — along
     with the pinned note telling you your first move. It is now always at
     hand, and reading it costs nothing. */
  function openCaseFile() {
    const m = openModal("modal-casefile");
    m.box.innerHTML =
      '<div class="disc-kicker">' + T("caseFileTitle") + "</div>" +
      '<h3 class="disc-title">' + esc(C.title) + "</h3>" +
      '<p class="brief-epigraph">' + esc(C.epigraph) + "</p>" +
      '<div class="brief-paras">' + C.briefing.map((p) => "<p class='brief-p'>" + esc(p) + "</p>").join("") + "</div>" +
      '<div class="brief-note"><span class="note-label">' + T("pinnedNote") + "</span> " + esc(C.detectiveNote) + "</div>" +
      '<div class="brief-deadline">' + esc(C.deadlineLabel) + "</div>" +
      '<div class="acc-actions"><span class="acc-count">' + T("caseFileFree") + "</span>" +
      '<button class="btn btn-primary modal-ok">' + T("noted") + "</button></div>";
    m.box.querySelector(".modal-ok").addEventListener("click", m.close);
  }

  /* ---------- main game ---------- */
  function enterGame() {
    document.body.dataset.case = C.id;
    document.body.classList.add("has-atmos");
    SFX.room(C.id);
    $("#topbar-file").textContent = T("fileNo", C.fileNo);
    $("#topbar-title").textContent = C.title;
    renderClock();
    renderMap();
    renderLocation();
    renderJournal();
    showScreen("#screen-game");
    saveGame();
  }

  function locById(id) { return C.locations.find((l) => l.id === id); }
  function suspectsAt(locId) { return C.suspects.filter((s) => s.location === locId); }

  function renderMap() {
    const map = $("#map");
    map.innerHTML = "";
    C.locations.forEach((loc) => {
      const here = loc.id === G.loc;
      const room = el("button", "room" + (here ? " here" : ""));
      room.style.gridColumn = loc.col;
      room.style.gridRow = loc.row;
      const unsearched = loc.hotspots.filter((h) => !G.searched.includes(h.id)).length;
      const people = suspectsAt(loc.id);
      room.innerHTML =
        '<span class="room-name">' + esc(loc.name) + "</span>" +
        '<span class="room-chips">' +
        people.map((p) => '<span class="chip" style="--chip:' + p.color + '" title="' + esc(p.name) + '">' + esc(p.initials) + "</span>").join("") +
        "</span>" +
        (unsearched ? '<span class="room-dots" title="' + T("placesLeft", unsearched) + '">' + "•".repeat(unsearched) + "</span>"
                    : '<span class="room-done" title="' + T("fullySearched") + '">✓</span>') +
        (here ? '<span class="you-are-here">' + T("youAreHere") + "</span>"
              : '<span class="travel-cost">' + T("minutesShort", COST.travel) + "</span>");
      room.setAttribute("aria-label", here ? T("currentLocation", loc.name) : T("travelAria", loc.name, COST.travel));
      room.addEventListener("click", () => travelTo(loc.id));
      map.appendChild(room);
    });
  }

  function travelTo(locId) {
    if (G.over || locId === G.loc) return;
    G.loc = locId;
    spend(COST.travel);
    if (G.over) return;
    renderMap();
    renderLocation();
    const panel = $("#location-panel");
    panel.classList.remove("swapping"); void panel.offsetWidth; panel.classList.add("swapping");
    SFX.play("step");
  }

  /* ---------- the scene: an illustrated room you can search by eye ---------- */
  function sceneFor(locId) {
    const set = ART[C.id];
    return set ? set[locId] : null;
  }
  function hotspotState(h) {
    if (G.searched.includes(h.id)) return "done";
    if (h.requiresClue && !G.clues.includes(h.requiresClue)) return "locked";
    return "open";
  }
  // Build the illustrated scene with a clickable pin over every searchable detail.
  function buildScene(loc, scene, big) {
    const fig = el("figure", "scene" + (big ? " scene-big" : ""));
    const frame = el("div", "scene-frame");
    const vb = String(scene.viewBox).trim().split(/\s+/);
    if (vb.length === 4 && +vb[3]) frame.style.setProperty("--ar", (+vb[2] / +vb[3]).toFixed(4));
    frame.innerHTML = '<svg class="scene-art" viewBox="' + scene.viewBox + '" preserveAspectRatio="xMidYMid meet" role="img" aria-label="' + esc(loc.name) + '">' + scene.svg + "</svg>";
    loc.hotspots.forEach((h) => {
      const pos = (scene.hotspots || {})[h.id];
      if (!pos) return;
      const state = hotspotState(h);
      const pin = el("button", "scene-pin pin-" + state);
      pin.dataset.hs = h.id;
      pin.style.left = pos.x + "%";
      pin.style.top = pos.y + "%";
      pin.innerHTML = '<span class="scene-pin-dot"></span><span class="scene-pin-label">' + esc(h.name) + "</span>";
      pin.setAttribute("aria-label", h.name + " — " +
        (state === "done" ? T("examined") : state === "locked" ? T("lockedShort") : T("searchCost", COST.search)));
      pin.title = h.name;
      pin.addEventListener("click", (e) => { e.stopPropagation(); searchHotspot(loc, h); });
      frame.appendChild(pin);
    });
    fig.appendChild(frame);
    return fig;
  }

  function openSceneViewer(loc, scene) {
    const m = openModal("modal-scene");
    m.box.innerHTML =
      '<header class="scene-head">' +
      '<div><span class="disc-kicker">' + esc(loc.name) + "</span>" +
      '<p class="scene-hint">' + T("sceneZoomHint") + "</p></div>" +
      '<div class="scene-tools">' +
      '<button class="btn btn-quiet" id="z-out" aria-label="' + T("zoomOut") + '">−</button>' +
      '<button class="btn btn-quiet" id="z-reset">' + T("zoomReset") + "</button>" +
      '<button class="btn btn-quiet" id="z-in" aria-label="' + T("zoomIn") + '">+</button>' +
      '<button class="btn btn-primary" id="z-close">' + T("sceneClose") + "</button>" +
      "</div></header>" +
      '<div class="scene-stage" id="scene-stage"></div>';
    const stage = m.box.querySelector("#scene-stage");
    const fig = buildScene(loc, scene, true);
    stage.appendChild(fig);

    let zoom = 1, ox = 0, oy = 0;
    const apply = () => {
      fig.style.transform = "translate(" + ox + "px," + oy + "px) scale(" + zoom + ")";
    };
    const setZoom = (z) => { zoom = Math.max(1, Math.min(5, z)); if (zoom === 1) { ox = oy = 0; } apply(); };
    m.box.querySelector("#z-in").addEventListener("click", () => setZoom(zoom * 1.4));
    m.box.querySelector("#z-out").addEventListener("click", () => setZoom(zoom / 1.4));
    m.box.querySelector("#z-reset").addEventListener("click", () => setZoom(1));
    m.box.querySelector("#z-close").addEventListener("click", m.close);
    stage.addEventListener("wheel", (e) => {
      e.preventDefault();
      setZoom(zoom * (e.deltaY < 0 ? 1.12 : 1 / 1.12));
    }, { passive: false });
    let dragging = false, sx = 0, sy = 0;
    stage.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".scene-pin")) return;
      dragging = true; sx = e.clientX - ox; sy = e.clientY - oy;
      stage.setPointerCapture(e.pointerId);
      stage.classList.add("dragging");
    });
    stage.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      ox = e.clientX - sx; oy = e.clientY - sy; apply();
    });
    const stop = () => { dragging = false; stage.classList.remove("dragging"); };
    stage.addEventListener("pointerup", stop);
    stage.addEventListener("pointercancel", stop);
    return m;
  }

  function renderLocation() {
    const loc = locById(G.loc);
    const panel = $("#location-panel");
    panel.innerHTML = "";
    panel.appendChild(el("div", "loc-kicker", "— " + esc(loc.name) + " —"));

    const scene = sceneFor(loc.id);
    if (scene) {
      const fig = buildScene(loc, scene, false);
      const cap = el("figcaption", "scene-cap");
      cap.innerHTML = '<span>' + T("sceneHint") + "</span>";
      const zoomBtn = el("button", "btn btn-quiet scene-zoom", T("sceneZoom"));
      zoomBtn.addEventListener("click", () => openSceneViewer(loc, scene));
      cap.appendChild(zoomBtn);
      fig.appendChild(cap);
      panel.appendChild(fig);
    }

    panel.appendChild(el("p", "loc-desc", esc(loc.desc)));

    const people = suspectsAt(loc.id);
    if (people.length) {
      panel.appendChild(el("div", "loc-subhead", T("present")));
      const row = el("div", "person-row");
      people.forEach((p) => {
        const card = el("button", "person-chip");
        card.innerHTML =
          '<span class="monogram" style="--chip:' + p.color + '">' + esc(p.initials) + "</span>" +
          '<span class="person-chip-text"><strong>' + esc(p.name) + "</strong><em>" + esc(p.role) + "</em></span>" +
          '<span class="chip-cost">' + T("questionCost", COST.ask) + "</span>";
        card.addEventListener("click", () => openInterrogation(p.id));
        row.appendChild(card);
      });
      panel.appendChild(row);
    }

    const doneCount = loc.hotspots.filter((h) => G.searched.includes(h.id)).length;
    const head = el("div", "loc-subhead");
    head.innerHTML = T("searchHead") +
      ' <span class="loc-progress">' + T("searchProgress", doneCount, loc.hotspots.length) + "</span>";
    panel.appendChild(head);
    const hs = el("div", "hotspot-list");
    loc.hotspots.forEach((h) => {
      const state = hotspotState(h);
      const b = el("button", "hotspot" + (state === "done" ? " searched" : "") + (state === "locked" ? " locked" : ""));
      b.dataset.hs = h.id;
      b.innerHTML =
        '<span class="hs-name">' + (state === "locked" ? "🔒 " : "") + esc(h.name) + "</span>" +
        '<span class="hs-state">' + (state === "done" ? T("examined") : state === "locked" ? T("lockedShort") : T("searchCost", COST.search)) + "</span>";
      b.addEventListener("click", () => searchHotspot(loc, h));
      hs.appendChild(b);
    });
    panel.appendChild(hs);
  }

  function searchHotspot(loc, h) {
    if (G.over) return;
    const done = G.searched.includes(h.id);
    if (h.requiresClue && !G.clues.includes(h.requiresClue) && !done) {
      SFX.play("thunk");
      const m = openModal("modal-discovery");
      m.box.innerHTML =
        '<div class="disc-kicker">' + esc(loc.name) + "</div>" +
        '<h3 class="disc-title">' + esc(h.name) + "</h3>" +
        '<p class="disc-text">' + esc(h.lockedHint || T("lockedFallback")) + "</p>" +
        '<button class="btn btn-primary modal-ok">' + T("stepBack") + "</button>";
      m.box.querySelector(".modal-ok").addEventListener("click", m.close);
      return;
    }
    if (done) { showDiscovery(loc, h, []); return; } // re-read, free
    G.searched.push(h.id);
    spend(COST.search);
    const fresh = grantClues(h.gives || []);
    renderMap();
    renderLocation();
    // renderLocation has already run; ping the freshly redrawn pin and row
    const pinEl = document.querySelector('.scene-pin[data-hs="' + h.id + '"]');
    if (pinEl) pinEl.classList.add("just-found");
    const rowEl = document.querySelector('.hotspot[data-hs="' + h.id + '"]');
    if (rowEl) rowEl.classList.add("settling");
    showDiscovery(loc, h, fresh);
    saveGame();
  }

  function showDiscovery(loc, h, freshClues) {
    const m = openModal("modal-discovery");
    m.box.innerHTML =
      '<div class="disc-kicker">' + esc(loc.name) + "</div>" +
      '<h3 class="disc-title">' + esc(h.name) + "</h3>" +
      '<p class="disc-text" id="disc-text"></p>' +
      '<div class="disc-clues" id="disc-clues"></div>' +
      '<button class="btn btn-primary modal-ok" id="disc-ok" style="visibility:hidden">' + T("noted") + "</button>";
    const okBtn = m.box.querySelector("#disc-ok");
    okBtn.addEventListener("click", m.close);
    const cluesBox = m.box.querySelector("#disc-clues");
    const showClues = () => {
      (h.gives || []).forEach((cid) => {
        const c = C.clues[cid];
        if (!c) return;
        const isNew = freshClues.includes(cid);
        const card = el("div", "clue-mini" + (isNew ? " fresh" : ""));
        card.style.setProperty("--i", cluesBox.children.length);
        card.innerHTML = '<span class="clue-mini-label">' + (isNew ? T("evidenceLoggedLabel") : T("inEvidenceLabel")) + "</span><strong>" + esc(c.name) + "</strong>";
        cluesBox.appendChild(card);
      });
      okBtn.style.visibility = "";
      okBtn.focus();
    };
    const t = typeInto(m.box.querySelector("#disc-text"), h.found, 8, showClues);
    m.box.addEventListener("click", (e) => { if (e.target.id !== "disc-ok") t.skip(); });
  }

  // clue ids logged since the player last looked at the Evidence tab
  let freshClues = [];
  function grantClues(ids) {
    const fresh = [];
    ids.forEach((cid) => {
      if (!G.clues.includes(cid)) { G.clues.push(cid); fresh.push(cid); }
    });
    if (fresh.length) {
      freshClues = freshClues.concat(fresh);
      SFX.play("paper");
      fresh.forEach((cid) => toast("clue", T("toastEvidence"), C.clues[cid] ? C.clues[cid].name : cid));
      checkDeductions();
      renderJournal();
      bump("count-evidence");
      flagTab("evidence");
    }
    return fresh;
  }
  function bump(id) {
    const n = $("#" + id);
    if (!n) return;
    n.classList.remove("bumped"); void n.offsetWidth; n.classList.add("bumped");
  }
  // mark a journal tab as holding something unread, unless it is already open
  function flagTab(name) {
    const tab = document.querySelector('.jtab[data-tab="' + name + '"]');
    if (tab && !tab.classList.contains("active")) tab.classList.add("flagged");
  }

  let newDeductions = [];   // revealed with the string-draw next time the board renders
  function checkDeductions() {
    C.deductions.forEach((d) => {
      if (G.deductions.includes(d.id)) return;
      if (d.requires.every((cid) => G.clues.includes(cid))) {
        G.deductions.push(d.id);
        newDeductions.push(d.id);
        SFX.play("chime");
        toast("deduction", T("toastDeduction", d.name), d.text.length > 110 ? d.text.slice(0, 107) + "…" : d.text);
        bump("count-board");
        flagTab("board");
      }
    });
  }

  /* ---------- interrogation ---------- */
  function openInterrogation(sid) {
    const p = C.suspects.find((s) => s.id === sid);
    const m = openModal("modal-interro");
    m.box.innerHTML =
      '<header class="interro-head">' +
      '<span class="monogram lg" style="--chip:' + p.color + '">' + esc(p.initials) + "</span>" +
      '<div class="interro-id"><h3>' + esc(p.name) + "</h3><em>" + esc(p.role) + " · " + digits(p.age) + "</em>" +
      (p.witness ? '<span class="witness-tag">' + T("witnessLong") + "</span>" : "") +
      "</div>" +
      '<button class="btn btn-quiet interro-close">' + T("done") + "</button>" +
      "</header>" +
      '<div class="interro-body">' +
      '<div class="dialogue" id="dialogue"><p class="dlg-blurb">' + esc(p.blurb) + "</p></div>" +
      '<div class="topics" id="topics"></div>' +
      "</div>";
    m.box.querySelector(".interro-close").addEventListener("click", m.close);
    renderTopics(p, m.box);
  }

  function topicAvailable(t) {
    if (t.requiresClue && !G.clues.includes(t.requiresClue)) return false;
    if (t.requiresClueAlso && !G.clues.includes(t.requiresClueAlso)) return false;
    if (t.requiresDeductions && !t.requiresDeductions.every((d) => G.deductions.includes(d))) return false;
    return true;
  }

  function renderTopics(p, box) {
    const wrap = box.querySelector("#topics");
    wrap.innerHTML = "";
    const avail = p.topics.filter(topicAvailable);
    const plain = avail.filter((t) => !t.confront);
    const confront = avail.filter((t) => t.confront);
    const addGroup = (label, list) => {
      if (!list.length) return;
      wrap.appendChild(el("div", "topics-label", label));
      list.forEach((t) => {
        const asked = G.asked.includes(t.id);
        const b = el("button", "topic" + (asked ? " asked" : "") + (t.climax ? " climax" : ""));
        b.innerHTML = "<span>" + esc(t.label) + "</span><span class='topic-cost'>" +
          (asked ? T("asked") : T("minutesShort", COST.ask)) + "</span>";
        b.addEventListener("click", () => askTopic(p, t, box));
        wrap.appendChild(b);
      });
    };
    addGroup(T("questionsGroup"), plain);
    addGroup(T("confrontGroup"), confront);
    const hidden = p.topics.length - avail.length;
    if (hidden > 0) {
      wrap.appendChild(el("div", "topics-hint", T(hidden > 1 ? "topicsHintMany" : "topicsHintOne", hidden)));
    }
  }

  function askTopic(p, t, box) {
    if (G.over) return;
    const dlg = box.querySelector("#dialogue");
    const first = !G.asked.includes(t.id);
    if (first) {
      G.asked.push(t.id);
      spend(COST.ask);
    }
    dlg.appendChild(el("p", "dlg-q", "— " + esc(t.label)));
    const a = el("div", "dlg-a" + (t.climax ? " dlg-climax" : ""));
    dlg.appendChild(a);
    dlg.scrollTop = dlg.scrollHeight;
    const paras = t.response.split("\n\n");
    let i = 0;
    let tw = null;
    const next = () => {
      if (i >= paras.length) {
        if (first) {
          grantClues(t.gives || []);
          renderTopics(p, box);
          saveGame();
        }
        return;
      }
      const pp = el("p", "dlg-a-p");
      a.appendChild(pp);
      tw = typeInto(pp, paras[i], first ? 8 : 0, () => { i++; dlg.scrollTop = dlg.scrollHeight; next(); });
      dlg.scrollTop = dlg.scrollHeight;
    };
    dlg.onclick = () => { if (tw) tw.skip(); };
    next();
    renderTopics(p, box);
  }

  /* ---------- journal ---------- */
  function renderJournal() {
    renderEvidenceTab();
    renderPeopleTab();
    renderBoardTab();
    const ce = $("#count-evidence"), cb = $("#count-board");
    if (ce) ce.textContent = G.clues.length ? "(" + digits(G.clues.length) + ")" : "";
    if (cb) cb.textContent = G.deductions.length ? "(" + digits(G.deductions.length) + ")" : "";
  }

  const FA_LETTERS = ["الف", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن", "و", "ه", "ی"];
  function exhibitLetter(i) {
    if (LANG === "fa") return FA_LETTERS[i] || digits(i + 1);
    let s = "", n = i;
    do { s = String.fromCharCode(65 + (n % 26)) + s; n = Math.floor(n / 26) - 1; } while (n >= 0);
    return s;
  }

  function renderEvidenceTab() {
    const t = $("#tab-evidence");
    t.innerHTML = "";
    if (!G.clues.length) {
      // an empty panel taught nothing; this is the only place the rules exist
      const intro = el("div", "evidence-empty");
      intro.innerHTML =
        '<p class="empty-note">' + T("noEvidenceYet") + "</p>" +
        '<div class="legend"><h5>' + T("legendTitle") + "</h5><ul>" +
        '<li><span class="legend-dot legend-open"></span>' + T("legendPin") + "</li>" +
        '<li><span class="legend-dot legend-done"></span>' + T("legendDone") + "</li>" +
        '<li><span class="legend-dot legend-chip">VB</span>' + T("legendChip") + "</li>" +
        "</ul>" +
        '<p class="legend-cost">' + T("legendCost", COST.search, COST.ask, COST.travel) + "</p></div>";
      t.appendChild(intro);
      return;
    }
    G.clues.forEach((cid, i) => {
      const c = C.clues[cid];
      if (!c) return;
      const card = el("article", "clue-card" + (freshClues.includes(cid) ? " is-fresh" : ""));
      card.innerHTML =
        '<span class="exhibit">' + T("exhibit", exhibitLetter(i)) + "</span>" +
        "<h4>" + esc(c.name) + "</h4>" +
        "<p>" + esc(c.desc) + "</p>";
      t.appendChild(card);
    });
  }

  function renderPeopleTab() {
    const t = $("#tab-people");
    t.innerHTML = "";
    C.suspects.forEach((p) => {
      const here = p.location === G.loc;
      const card = el("article", "person-card" + (p.witness ? " is-witness" : ""));
      const loc = locById(p.location);
      let notes = "";
      p.topics.forEach((tp) => {
        if (G.asked.includes(tp.id) && tp.note) notes += "<li>" + esc(tp.note) + "</li>";
      });
      card.innerHTML =
        '<header><span class="monogram" style="--chip:' + p.color + '">' + esc(p.initials) + "</span>" +
        "<div><h4>" + esc(p.name) + (p.witness ? ' <span class="witness-tag">' + T("witnessShort") + "</span>" : "") + "</h4>" +
        "<em>" + esc(p.role) + " · " + digits(p.age) + " · " + T("inRoom", esc(loc ? loc.name : "?")) + "</em></div></header>" +
        "<p>" + esc(p.blurb) + "</p>" +
        (notes ? '<ul class="person-notes">' + notes + "</ul>" : '<p class="empty-note">' + T("nothingOnRecord") + "</p>");
      // reading about someone should be a way to reach them
      const go = el("button", "btn btn-quiet person-go");
      if (here) {
        go.textContent = T("alreadyHere");
        go.disabled = true;
      } else {
        go.textContent = T("goToRoom", loc ? loc.name : "?", COST.travel);
        go.addEventListener("click", () => { travelTo(p.location); openTab("evidence"); });
      }
      card.appendChild(go);
      t.appendChild(card);
    });
  }

  function renderBoardTab() {
    const t = $("#tab-board");
    t.innerHTML = "";
    const board = el("div", "corkboard");
    board.id = "corkboard";
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "string-layer");
    board.appendChild(svg);

    const pinsWrap = el("div", "pin-field");
    const pinMap = {};
    G.clues.forEach((cid, i) => {
      const c = C.clues[cid];
      if (!c) return;
      const pin = el("div", "pin-card");
      pin.style.setProperty("--i", Math.min(i, 12));
      pin.innerHTML = '<span class="pin"></span><span class="pin-exhibit">' + exhibitLetter(i) + "</span><strong>" + esc(c.name) + "</strong>";
      pin.title = c.desc;
      // the description was title-only, so keyboard and touch never reached it
      pin.setAttribute("aria-label", c.name + " — " + c.desc);
      pinsWrap.appendChild(pin);
      pinMap[cid] = pin;
    });
    board.appendChild(pinsWrap);

    const dedWrap = el("div", "deduction-field");
    const dedMap = {};
    C.deductions.forEach((d) => {
      const made = G.deductions.includes(d.id);
      const card = el("div", "ded-card" + (made ? " made" : " unmade"));
      if (made) {
        if (newDeductions.includes(d.id)) card.classList.add("is-new");
        card.innerHTML = '<span class="pin pin-red"></span><span class="ded-label">' + T("deductionLabel") + '</span><h4>' + esc(d.name) + "</h4><p>" + esc(d.text) + "</p>";
        dedMap[d.id] = card;
      } else {
        const have = d.requires.filter((r) => G.clues.includes(r)).length;
        card.innerHTML = '<span class="ded-label">' + T("unformedLabel") + '</span><h4>' + T("unformedTitle") + '</h4><p class="empty-note">' +
          T("threads", have, d.requires.length) + "</p>";
      }
      dedWrap.appendChild(card);
    });
    board.appendChild(dedWrap);
    if (!G.clues.length) {
      board.appendChild(el("p", "empty-note board-empty", T("boardBare")));
    }
    t.appendChild(board);

    // draw strings after layout
    const draw = () => {
      const bb = board.getBoundingClientRect();
      svg.setAttribute("width", board.scrollWidth);
      svg.setAttribute("height", board.scrollHeight);
      svg.innerHTML = "";
      C.deductions.forEach((d) => {
        if (!G.deductions.includes(d.id)) return;
        const dc = dedMap[d.id];
        if (!dc) return;
        const dr = dc.getBoundingClientRect();
        const dx = dr.left - bb.left + dr.width / 2;
        const dy = dr.top - bb.top + 10;
        d.requires.forEach((cid) => {
          const pc = pinMap[cid];
          if (!pc) return;
          const pr = pc.getBoundingClientRect();
          const px = pr.left - bb.left + pr.width / 2;
          const py = pr.top - bb.top + 8;
          const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          const midY = (py + dy) / 2 + 14;
          path.setAttribute("d", "M" + px + "," + py + " Q" + (px + dx) / 2 + "," + midY + " " + dx + "," + dy);
          path.setAttribute("class", "string");
          svg.appendChild(path);
          // a newly-closed deduction ties its own string
          if (newDeductions.includes(d.id) && !REDUCED && path.getTotalLength) {
            const len = path.getTotalLength();
            path.style.setProperty("--len", len);
            path.style.strokeDasharray = len;
            path.classList.add("drawing");
          }
        });
      });
    };
    requestAnimationFrame(() => { draw(); newDeductions = []; });
    window.addEventListener("resize", draw, { passive: true });
  }

  /* ---------- accusation ---------- */
  function onTimeUp() {
    if (G.over) return;
    const m = openModal("modal-accuse");
    m.overlay.dataset.locked = "1";
    m.box.innerHTML =
      '<div class="acc-kicker">' + T("timeUpKicker") + "</div>" +
      "<h3 class='acc-title'>" + T("deadlineArrived") + "</h3>" +
      "<p class='disc-text'>" + T("deadlineBody", esc(C.deadlineLabel)) + "</p>" +
      '<div class="acc-actions"><button class="btn btn-primary" id="acc-now">' + T("nameKiller") + "</button>" +
      '<button class="btn btn-quiet" id="acc-give">' + T("surrenderCase") + "</button></div>";
    m.box.querySelector("#acc-now").addEventListener("click", () => { m.close(); openAccuse(true); });
    m.box.querySelector("#acc-give").addEventListener("click", () => { m.close(); finishCase("timeout", null, null, []); });
  }

  function openAccuse(forced, startStep) {
    if (G.over) return;
    const m = openModal("modal-accuse");
    if (forced) m.overlay.dataset.locked = "1";
    const state = { suspect: null, motive: null, evidence: [] };
    if (startStep > 1) {   // inspection entry: prefill so the step can render
      state.suspect = C.suspects.filter((x) => !x.witness)[0].id;
      state.motive = C.motiveOptions[0].id;
      if (startStep > 3) state.evidence = G.clues.slice(0, 3);
    }
    const render = (step) => {
      m.box.classList.remove("acc-step"); void m.box.offsetWidth; m.box.classList.add("acc-step");
      if (step === 1) {
        m.box.innerHTML =
          '<div class="acc-kicker">' + T("accStep1") + "</div>" +
          "<h3 class='acc-title'>" + T("whoDidIt") + "</h3>" +
          '<div class="acc-grid" id="acc-grid"></div>' +
          (forced ? "" : '<div class="acc-actions"><button class="btn btn-quiet" id="acc-cancel">' + T("notYet") + "</button></div>");
        const grid = m.box.querySelector("#acc-grid");
        C.suspects.filter((s) => !s.witness).forEach((s) => {
          const b = el("button", "acc-suspect");
          b.innerHTML = '<span class="monogram" style="--chip:' + s.color + '">' + esc(s.initials) + "</span><strong>" + esc(s.name) + "</strong><em>" + esc(s.role) + "</em>";
          b.addEventListener("click", () => { state.suspect = s.id; render(2); });
          grid.appendChild(b);
        });
        const cancel = m.box.querySelector("#acc-cancel");
        if (cancel) cancel.addEventListener("click", m.close);
      } else if (step === 2) {
        const s = C.suspects.find((x) => x.id === state.suspect);
        m.box.innerHTML =
          '<div class="acc-kicker">' + T("accStep2") + "</div>" +
          "<h3 class='acc-title'>" + T("whyDidThey", esc(s.name.split(" ")[0])) + "</h3>" +
          '<div class="acc-list" id="acc-list"></div>' +
          '<div class="acc-actions"><button class="btn btn-quiet" id="acc-back">' + T("back") + "</button></div>";
        const list = m.box.querySelector("#acc-list");
        C.motiveOptions.forEach((mo) => {
          const b = el("button", "acc-motive", esc(mo.label));
          b.addEventListener("click", () => { state.motive = mo.id; render(3); });
          list.appendChild(b);
        });
        m.box.querySelector("#acc-back").addEventListener("click", () => render(1));
      } else if (step === 3) {
        m.box.innerHTML =
          '<div class="acc-kicker">' + T("accStep3") + "</div>" +
          "<h3 class='acc-title'>" + T("whatProves") + " <span class='acc-sub'>" + T("chooseThree") + "</span></h3>" +
          '<div class="acc-evidence" id="acc-ev"></div>' +
          '<div class="acc-actions">' +
          '<span class="acc-count" id="acc-count" aria-live="polite"></span>' +
          '<button class="btn btn-quiet" id="acc-back">' + T("back") + "</button>" +
          '<button class="btn btn-accuse-final" id="acc-review">' + T("reviewCharge") + "</button></div>";
        const evBox = m.box.querySelector("#acc-ev");
        const reviewBtn = m.box.querySelector("#acc-review");
        const countEl = m.box.querySelector("#acc-count");
        // With no evidence at all the player may still proceed — otherwise the
        // deadline could strand them with no way to finish the case.
        const need = G.clues.length ? 1 : 0;
        const sync = () => {
          countEl.textContent = T("chosenCount", state.evidence.length, 3);
          reviewBtn.disabled = state.evidence.length < need;
        };
        if (!G.clues.length) evBox.appendChild(el("p", "empty-note", T("noEvidenceWarn")));
        G.clues.forEach((cid, i) => {
          const c = C.clues[cid];
          if (!c) return;
          const b = el("button", "acc-clue");
          b.setAttribute("aria-pressed", "false");
          b.innerHTML = "<span class='exhibit'>" + exhibitLetter(i) + "</span> " + esc(c.name);
          b.addEventListener("click", () => {
            const at = state.evidence.indexOf(cid);
            if (at >= 0) { state.evidence.splice(at, 1); b.classList.remove("picked"); b.setAttribute("aria-pressed", "false"); }
            else if (state.evidence.length < 3) { state.evidence.push(cid); b.classList.add("picked"); b.setAttribute("aria-pressed", "true"); }
            sync();
          });
          if (state.evidence.includes(cid)) { b.classList.add("picked"); b.setAttribute("aria-pressed", "true"); }
          evBox.appendChild(b);
        });
        sync();
        m.box.querySelector("#acc-back").addEventListener("click", () => render(2));
        reviewBtn.addEventListener("click", () => render(4));
      } else {
        // The charge sheet — the last reversible moment, written as a document.
        const s = C.suspects.find((x) => x.id === state.suspect);
        const mo = (C.motiveOptions.find((x) => x.id === state.motive) || {}).label || "";
        const exhibits = state.evidence
          .map((cid) => T("exhibit", exhibitLetter(G.clues.indexOf(cid))) + " — " + esc(C.clues[cid].name));
        m.box.innerHTML =
          '<div class="acc-kicker">' + T("chargeKicker") + "</div>" +
          "<h3 class='acc-title'>" + T("chargeTitle") + "</h3>" +
          '<div class="charge-sheet">' +
          "<p>" + T("chargeIntro", esc(s.name), esc(s.role)) + "</p>" +
          "<p>" + T("chargeMotive", esc(mo)) + "</p>" +
          (exhibits.length
            ? "<p>" + T("chargeEvidence") + "</p><ul class='charge-exhibits'><li>" + exhibits.join("</li><li>") + "</li></ul>"
            : "<p>" + T("chargeNoEvidence") + "</p>") +
          '<p class="charge-warn">' + T("chargeWarn") + "</p>" +
          "</div>" +
          '<div class="acc-actions">' +
          '<button class="btn btn-quiet" id="acc-back">' + T("goBack") + "</button>" +
          '<button class="btn btn-accuse-final" id="acc-final">' + T("signWarrant") + "</button></div>";
        m.box.querySelector("#acc-back").addEventListener("click", () => render(3));
        m.box.querySelector("#acc-final").addEventListener("click", () => { m.close(); resolveAccusation(state); });
      }
    };
    render(startStep || 1);
  }

  function resolveAccusation(state) {
    const sol = C.solution;
    const correct = state.suspect === sol.culprit;
    const keyCount = state.evidence.filter((id) => sol.keyEvidence.includes(id)).length;
    const hasConfession = state.evidence.some((id) => /_confession$/.test(id)) ||
      G.clues.some((id) => /_confession$/.test(id));
    let tier;
    if (!correct) tier = "wrong";
    else if ((state.motive === sol.motive && keyCount >= sol.minKeyEvidence) || (hasConfession && state.motive === sol.motive) || (hasConfession && keyCount >= 1)) tier = "perfect";
    else tier = "partial";
    finishCase(tier, state.suspect, state.motive, state.evidence);
  }

  function totalClueCount() { return Object.keys(C.clues).length; }

  function rankFor(tier) {
    const cluePct = G.clues.length / totalClueCount();
    const allDed = G.deductions.length === C.deductions.length;
    if (tier === "perfect") {
      if (cluePct >= 0.8 && allDed) return T("rankLegendary");
      if (cluePct >= 0.55) return T("rankSeasoned");
      return T("rankSharp");
    }
    if (tier === "partial") return T("rankBeat");
    if (tier === "wrong") return T("rankWrong");
    return T("rankSurrendered");
  }

  function finishCase(tier, accusedId, motiveId, evidence) {
    G.over = true;
    SFX.play("stamp");
    saveGame();
    const accused = accusedId ? C.suspects.find((s) => s.id === accusedId) : null;
    const rank = rankFor(tier);
    setResult(C.id, { tier: tier, rank: rank });
    clearSave();

    const s = $("#screen-verdict");
    s.innerHTML = "";
    const sheet = el("div", "verdict-sheet");
    sheet.appendChild(el("div", "verdict-stamp stamp-" + tier, stampText(tier)));
    sheet.appendChild(el("div", "brief-head", T("finalReport", C.fileNo)));
    sheet.appendChild(el("h2", "brief-title", esc(C.title)));
    if (accused) {
      const mo = (C.motiveOptions.find((m) => m.id === motiveId) || {}).label;
      sheet.appendChild(el("p", "verdict-accused",
        T("youAccused", esc(accused.name), mo ? T("accusedMotive", esc(mo)) : "")));
    }
    const paras = el("div", "brief-paras");
    (C.epilogues[tier] || []).forEach((p) => {
      paras.appendChild(el("p", "brief-p", esc(p.replace(/\{ACCUSED\}/g, accused ? accused.name : T("yourSuspect")))));
    });
    sheet.appendChild(paras);

    const truth = C.suspects.find((x) => x.id === C.solution.culprit);
    if (tier === "wrong" || tier === "timeout") {
      sheet.appendChild(el("div", "verdict-truth",
        "<span class='note-label'>" + T("forTheDrawer") + "</span> " + T("killerWas", esc(truth.name), esc(truth.role))));
    }

    const left = timeLeft();
    const stats = el("div", "verdict-stats");
    stats.innerHTML =
      "<span>" + T("rankLabel", rank) + "</span>" +
      "<span>" + T("evidenceStat", G.clues.length, totalClueCount()) + "</span>" +
      "<span>" + T("deductionsStat", G.deductions.length, C.deductions.length) + "</span>" +
      "<span>" + T("clockStat", left > 0 ? fmtSpan("toSpare", left) : T("ranDry")) + "</span>";
    sheet.appendChild(stats);

    const actions = el("div", "acc-actions");
    const again = el("button", "btn btn-quiet", T("reopenCase"));
    again.addEventListener("click", () => startCase(C.id));
    const desk = el("button", "btn btn-primary", T("returnDesk"));
    desk.addEventListener("click", renderTitle);
    actions.appendChild(again); actions.appendChild(desk);
    sheet.appendChild(actions);
    s.appendChild(sheet);
    showScreen("#screen-verdict");
  }

  /* ---------- wire chrome ---------- */
  function wire() {
    wireSound($("#btn-sound"));
    $("#btn-casefile").addEventListener("click", openCaseFile);
    $("#btn-lang").addEventListener("click", () => setLang(LANG === "fa" ? "en" : "fa", true));
    $("#btn-accuse").addEventListener("click", () => openAccuse(false));
    $("#btn-desk").addEventListener("click", () => { saveGame(); renderTitle(); });
    document.querySelectorAll(".jtab").forEach((tab) => {
      tab.addEventListener("click", () => openTab(tab.dataset.tab));
    });
    // 1 / 2 / 3 jump between journal tabs while playing
    document.addEventListener("keydown", (e) => {
      if ($("#screen-game").hidden) return;
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (document.querySelector(".overlay")) return;
      const t = e.target;
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return;
      const map = { "1": "evidence", "2": "people", "3": "board" };
      if (map[e.key]) { e.preventDefault(); openTab(map[e.key], true); }
    });
  }

  function openTab(name, focusTab) {
    const tab = document.querySelector('.jtab[data-tab="' + name + '"]');
    if (!tab) return;
    document.querySelectorAll(".jtab").forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    tab.classList.add("active");
    tab.classList.remove("flagged");
    tab.setAttribute("aria-selected", "true");
    document.querySelectorAll(".tab-panel").forEach((p) => { p.hidden = true; p.classList.remove("active"); });
    const panel = $("#tab-" + name);
    panel.hidden = false;
    panel.classList.add("active");
    if (name === "board") renderBoardTab();
    if (name === "evidence" && freshClues.length) {
      // the player has now seen them; retire the markers on the next render
      freshClues = [];
      setTimeout(renderEvidenceTab, 900);
    }
    if (focusTab) tab.focus();
  }

  /* ---------- boot ---------- */
  // Debug/test boot via URL hash, e.g. #case:blackwood,demo,board or #brief:orpheum
  // flags: demo, board, people, talk:<suspectId>, accuse, fa (force Persian)
  function bootFromHash() {
    const parts = location.hash.slice(1).split(",");
    // Gated behind an explicit token: a bare #case:… URL used to hand out every
    // clue in the mystery and silently disable saving.
    if (parts[0] !== "debug") return false;
    parts.shift();
    if (parts.includes("fa")) setLang("fa", false);
    if (parts.includes("en")) setLang("en", false);
    const head = (parts[0] || "").match(/^(case|brief):([a-z0-9]+)$/);
    if (!head) return false;
    const base = CASES.find((c) => c.id === head[2]);
    if (!base) return false;
    DEBUG = true;
    if (head[1] === "brief") { startCase(base.id); return true; }
    C = localizeCase(base);
    G = { caseId: base.id, elapsed: 0, loc: C.locations[0].id, clues: [], searched: [], asked: [], deductions: [], over: false };
    if (parts.includes("demo")) {
      C.locations.forEach((l) => l.hotspots.forEach((h) => {
        if (h.requiresClue && !G.clues.includes(h.requiresClue)) return;
        G.searched.push(h.id);
        (h.gives || []).forEach((cid) => { if (!G.clues.includes(cid)) G.clues.push(cid); });
      }));
      C.deductions.forEach((d) => { if (d.requires.every((cid) => G.clues.includes(cid))) G.deductions.push(d.id); });
      G.elapsed = 150;
    }
    enterGame();
    parts.forEach((f) => {
      if (f === "board" || f === "people") {
        const tab = document.querySelector('.jtab[data-tab="' + f + '"]');
        if (tab) tab.click();
      } else if (f.indexOf("talk:") === 0) {
        const p = C.suspects.find((s) => s.id === f.slice(5));
        if (p) openInterrogation(p.id);
      } else if (f === "accuse") {
        openAccuse(false);
      } else if (f.indexOf("acc:") === 0) {
        openAccuse(false, +f.slice(4) || 1);
      } else if (f.indexOf("t:") === 0) {
        G.elapsed = Math.min(C.timeBudget, +f.slice(2) || 0);
        renderClock();
      } else if (f === "casefile") {
        openCaseFile();
      } else if (f === "scene") {
        const loc = locById(G.loc), sc = sceneFor(G.loc);
        if (sc) openSceneViewer(loc, sc);
      }
    });
    return true;
  }

  document.body.classList.add("has-atmos");
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* ignore */ }
  setLang(saved || (navigator.language && /^fa/i.test(navigator.language) ? "fa" : "en"), false);
  wire();
  if (!bootFromHash()) renderTitle();
})();
