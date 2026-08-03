/* The Calloway Files — game engine */
(function () {
  "use strict";

  const CASES = window.CASES || [];
  const COST = { travel: 10, search: 20, ask: 10 };
  const SAVE_KEY = "calloway_save_v1";
  const RESULTS_KEY = "calloway_results_v1";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let G = null;          // active game state
  let C = null;          // active case data
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
  function numberWord(n) {
    return ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"][n] || String(n);
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  /* ---------- persistence ---------- */
  function saveGame() {
    if (G && !DEBUG) localStorage.setItem(SAVE_KEY, JSON.stringify(G));
  }
  function loadGame() {
    try { return JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { return null; }
  }
  function clearSave() { localStorage.removeItem(SAVE_KEY); }
  function getResults() {
    try { return JSON.parse(localStorage.getItem(RESULTS_KEY)) || {}; } catch (e) { return {}; }
  }
  function setResult(caseId, res) {
    const r = getResults();
    const prev = r[caseId];
    const order = { perfect: 3, partial: 2, wrong: 1, timeout: 0 };
    if (!prev || order[res.tier] > order[prev.tier]) { r[caseId] = res; }
    localStorage.setItem(RESULTS_KEY, JSON.stringify(r));
  }

  /* ---------- time ---------- */
  function fmtClock(totalMin) {
    const m = ((totalMin % 1440) + 1440) % 1440;
    let h = Math.floor(m / 60), mm = m % 60;
    const ap = h >= 12 ? "PM" : "AM";
    h = h % 12; if (h === 0) h = 12;
    return h + ":" + String(mm).padStart(2, "0") + " " + ap;
  }
  function timeLeft() { return C.timeBudget - G.elapsed; }
  function renderClock() {
    const t = $("#clock-time"), d = $("#clock-deadline");
    t.textContent = fmtClock(C.startMinutes + G.elapsed);
    const left = timeLeft();
    d.textContent = left > 0 ? "· " + Math.floor(left / 60) + "h " + (left % 60) + "m until deadline" : "· TIME IS UP";
    const clock = $("#topbar-clock");
    clock.classList.toggle("warn", left <= 120 && left > 60);
    clock.classList.toggle("danger", left <= 60);
  }
  function spend(min) {
    if (!G || G.over) return;
    G.elapsed = Math.min(C.timeBudget, G.elapsed + min);
    renderClock();
    const left = timeLeft();
    if (left <= 120 && !warned120) { warned120 = true; toast("clock", "The night is getting old", "Two hours remain."); }
    if (left <= 60 && !warned60) { warned60 = true; toast("clock", "One hour remains", "Time to start thinking about a name."); }
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
      if (i < text.length) setTimeout(tick, speed);
      else if (done) done();
    };
    tick();
    return { skip: () => { stopped = true; node.textContent = text; if (done) done(); } };
  }

  /* ---------- toasts ---------- */
  function toast(kind, title, body) {
    const root = $("#toast-root");
    const t = el("div", "toast toast-" + kind);
    t.appendChild(el("div", "toast-title", esc(title)));
    if (body) t.appendChild(el("div", "toast-body", esc(body)));
    root.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 3800);
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
    const close = () => {
      overlay.remove();
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
    requestAnimationFrame(() => {
      const first = box.querySelector(FOCUSABLE);
      (first || box).focus();
    });
    return { box, close, overlay };
  }

  /* ---------- title screen ---------- */
  function renderTitle() {
    const s = $("#screen-title");
    s.innerHTML = "";
    const head = el("header", "title-head");
    head.appendChild(el("div", "agency-line", "CALLOWAY &amp; ASSOCIATES · CONFIDENTIAL INQUIRIES · EST. 1924"));
    head.appendChild(el("h1", "game-title", "The <span>Calloway</span> Files"));
    head.appendChild(el("p", "title-sub", numberWord(CASES.length) + " unsolved nights from the agency archive. Search the rooms. Question everyone. Watch the clock. Then put a name on the warrant — and be right."));
    s.appendChild(head);

    const save = loadGame();
    const results = getResults();
    const shelf = el("div", "dossier-shelf");
    CASES.forEach((cs) => {
      const res = results[cs.id];
      const d = el("article", "dossier" + (res ? " dossier-" + res.tier : ""));
      d.setAttribute("tabindex", "0");
      d.setAttribute("role", "button");
      d.setAttribute("aria-label", "Open case file " + cs.fileNo + ": " + cs.title);
      const stars = "◆".repeat(cs.difficulty) + "◇".repeat(3 - cs.difficulty);
      d.innerHTML =
        '<div class="dossier-tab">FILE No. ' + cs.fileNo + "</div>" +
        '<div class="dossier-body">' +
        '<div class="dossier-meta">' + esc(cs.place) + " · " + esc(cs.date) + "</div>" +
        '<h2 class="dossier-title">' + esc(cs.title) + "</h2>" +
        '<p class="dossier-tag">' + esc(cs.tagline) + "</p>" +
        '<div class="dossier-foot"><span class="difficulty" title="Difficulty">' + stars + "</span>" +
        (save && save.caseId === cs.id && !save.over ? '<span class="resume-chip">IN PROGRESS — RESUME</span>' : "") +
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
      "A tale of deduction in " + numberWord(CASES.length).toLowerCase() + " nights · progress is kept in this browser" +
      (Object.keys(results).length ? ' · <button class="linklike" id="btn-wipe">clear the record</button>' : ""));
    s.appendChild(foot);
    const wipe = $("#btn-wipe");
    if (wipe) wipe.addEventListener("click", () => {
      localStorage.removeItem(RESULTS_KEY); clearSave(); renderTitle();
    });
    showScreen("#screen-title");
  }
  function stampText(tier) {
    return { perfect: "SOLVED", partial: "CLOSED", wrong: "COLD CASE", timeout: "SURRENDERED" }[tier] || "";
  }

  /* ---------- briefing ---------- */
  function startCase(caseId) {
    C = CASES.find((c) => c.id === caseId);
    G = {
      caseId: caseId, elapsed: 0, loc: C.locations[0].id,
      clues: [], searched: [], asked: [], deductions: [], over: false,
    };
    warned120 = warned60 = false;
    saveGame();
    renderBriefing();
  }
  function resumeCase(save) {
    C = CASES.find((c) => c.id === save.caseId);
    if (!C) { clearSave(); renderTitle(); return; }
    G = save;
    warned120 = timeLeft() <= 120; warned60 = timeLeft() <= 60;
    enterGame();
    toast("clock", "Case resumed", "The clock reads " + fmtClock(C.startMinutes + G.elapsed) + ".");
  }
  function renderBriefing() {
    const s = $("#screen-briefing");
    s.innerHTML = "";
    const sheet = el("div", "brief-sheet");
    sheet.appendChild(el("div", "brief-stamp", "CASE OPENED"));
    sheet.appendChild(el("div", "brief-head",
      "CALLOWAY &amp; ASSOCIATES — CASE FILE No. " + C.fileNo +
      "<br>" + esc(C.place).toUpperCase() + " · " + esc(C.date).toUpperCase()));
    sheet.appendChild(el("h2", "brief-title", esc(C.title)));
    sheet.appendChild(el("p", "brief-epigraph", esc(C.epigraph)));
    const paras = el("div", "brief-paras");
    sheet.appendChild(paras);
    const note = el("div", "brief-note");
    note.innerHTML = '<span class="note-label">Pinned to the file, in your own hand:</span> ' + esc(C.detectiveNote);
    note.style.visibility = "hidden";
    sheet.appendChild(note);
    const deadline = el("div", "brief-deadline", esc(C.deadlineLabel));
    deadline.style.visibility = "hidden";
    sheet.appendChild(deadline);
    const btn = el("button", "btn btn-primary brief-begin", "Begin the Investigation — " + fmtClock(C.startMinutes));
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
        note.style.visibility = ""; deadline.style.visibility = ""; btn.style.visibility = "";
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

  /* ---------- main game ---------- */
  function enterGame() {
    $("#topbar-file").textContent = "FILE No. " + C.fileNo;
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
        (unsearched ? '<span class="room-dots" title="' + unsearched + ' place(s) left to search">' + "•".repeat(unsearched) + "</span>" : '<span class="room-done" title="Fully searched">✓</span>') +
        (here ? '<span class="you-are-here">YOU ARE HERE</span>' : '<span class="travel-cost">' + COST.travel + "m</span>");
      room.setAttribute("aria-label", loc.name + (here ? " (current location)" : " — travel, " + COST.travel + " minutes"));
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
  }

  function renderLocation() {
    const loc = locById(G.loc);
    const panel = $("#location-panel");
    panel.innerHTML = "";
    panel.appendChild(el("div", "loc-kicker", "— " + esc(loc.name).toUpperCase() + " —"));
    panel.appendChild(el("p", "loc-desc", esc(loc.desc)));

    const people = suspectsAt(loc.id);
    if (people.length) {
      const pk = el("div", "loc-subhead", "PRESENT");
      panel.appendChild(pk);
      const row = el("div", "person-row");
      people.forEach((p) => {
        const card = el("button", "person-chip");
        card.innerHTML =
          '<span class="monogram" style="--chip:' + p.color + '">' + esc(p.initials) + "</span>" +
          '<span class="person-chip-text"><strong>' + esc(p.name) + "</strong><em>" + esc(p.role) + "</em></span>" +
          '<span class="chip-cost">question · ' + COST.ask + "m</span>";
        card.addEventListener("click", () => openInterrogation(p.id));
        row.appendChild(card);
      });
      panel.appendChild(row);
    }

    panel.appendChild(el("div", "loc-subhead", "SEARCH"));
    const hs = el("div", "hotspot-list");
    loc.hotspots.forEach((h) => {
      const done = G.searched.includes(h.id);
      const locked = h.requiresClue && !G.clues.includes(h.requiresClue);
      const b = el("button", "hotspot" + (done ? " searched" : "") + (locked ? " locked" : ""));
      b.innerHTML =
        '<span class="hs-name">' + (locked ? "🔒 " : "") + esc(h.name) + "</span>" +
        '<span class="hs-state">' + (done ? "examined ✓" : locked ? "locked" : "search · " + COST.search + "m") + "</span>";
      b.addEventListener("click", () => searchHotspot(loc, h));
      hs.appendChild(b);
    });
    panel.appendChild(hs);
  }

  function searchHotspot(loc, h) {
    if (G.over) return;
    const done = G.searched.includes(h.id);
    if (h.requiresClue && !G.clues.includes(h.requiresClue) && !done) {
      const m = openModal("modal-discovery");
      m.box.innerHTML =
        '<div class="disc-kicker">' + esc(loc.name).toUpperCase() + "</div>" +
        '<h3 class="disc-title">' + esc(h.name) + "</h3>" +
        '<p class="disc-text">' + esc(h.lockedHint || "You can't get into this yet.") + "</p>" +
        '<button class="btn btn-primary modal-ok">Step back</button>';
      m.box.querySelector(".modal-ok").addEventListener("click", m.close);
      return;
    }
    if (done) { showDiscovery(loc, h, []); return; } // re-read, free
    G.searched.push(h.id);
    spend(COST.search);
    const fresh = grantClues(h.gives || []);
    renderMap();
    renderLocation();
    if (!G.over || true) showDiscovery(loc, h, fresh);
    saveGame();
  }

  function showDiscovery(loc, h, freshClues) {
    const m = openModal("modal-discovery");
    let html =
      '<div class="disc-kicker">' + esc(loc.name).toUpperCase() + "</div>" +
      '<h3 class="disc-title">' + esc(h.name) + "</h3>" +
      '<p class="disc-text" id="disc-text"></p>' +
      '<div class="disc-clues" id="disc-clues"></div>' +
      '<button class="btn btn-primary modal-ok" id="disc-ok" style="visibility:hidden">Noted</button>';
    m.box.innerHTML = html;
    const okBtn = m.box.querySelector("#disc-ok");
    okBtn.addEventListener("click", m.close);
    const cluesBox = m.box.querySelector("#disc-clues");
    const showClues = () => {
      (h.gives || []).forEach((cid) => {
        const c = C.clues[cid];
        if (!c) return;
        const isNew = freshClues.includes(cid);
        const card = el("div", "clue-mini" + (isNew ? " fresh" : ""));
        card.innerHTML = '<span class="clue-mini-label">' + (isNew ? "EVIDENCE LOGGED" : "IN EVIDENCE") + "</span><strong>" + esc(c.name) + "</strong>";
        cluesBox.appendChild(card);
      });
      okBtn.style.visibility = "";
      okBtn.focus();
    };
    const t = typeInto(m.box.querySelector("#disc-text"), h.found, 8, showClues);
    m.box.addEventListener("click", (e) => { if (e.target.id !== "disc-ok") t.skip(); });
  }

  function grantClues(ids) {
    const fresh = [];
    ids.forEach((cid) => {
      if (!G.clues.includes(cid)) { G.clues.push(cid); fresh.push(cid); }
    });
    if (fresh.length) {
      fresh.forEach((cid) => toast("clue", "Evidence logged", C.clues[cid] ? C.clues[cid].name : cid));
      checkDeductions();
      renderJournal();
    }
    return fresh;
  }

  function checkDeductions() {
    C.deductions.forEach((d) => {
      if (G.deductions.includes(d.id)) return;
      if (d.requires.every((cid) => G.clues.includes(cid))) {
        G.deductions.push(d.id);
        toast("deduction", "DEDUCTION — " + d.name, d.text.length > 110 ? d.text.slice(0, 107) + "…" : d.text);
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
      '<div class="interro-id"><h3>' + esc(p.name) + "</h3><em>" + esc(p.role) + " · " + p.age + "</em>" +
      (p.witness ? '<span class="witness-tag">WITNESS — NOT A SUSPECT</span>' : "") +
      "</div>" +
      '<button class="btn btn-quiet interro-close">Done</button>' +
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
        b.innerHTML = '<span>' + esc(t.label) + "</span><span class='topic-cost'>" +
          (asked ? "asked ✓" : COST.ask + "m") + "</span>";
        b.addEventListener("click", () => askTopic(p, t, box));
        wrap.appendChild(b);
      });
    };
    addGroup("QUESTIONS", plain);
    addGroup("PRESENT EVIDENCE", confront);
    const hiddenCount = p.topics.length - avail.length;
    if (hiddenCount > 0) {
      wrap.appendChild(el("div", "topics-hint", hiddenCount + " line" + (hiddenCount > 1 ? "s" : "") + " of inquiry may open as evidence surfaces."));
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
    const q = el("p", "dlg-q", "— " + esc(t.label));
    dlg.appendChild(q);
    const a = el("div", "dlg-a" + (t.climax ? " dlg-climax" : ""));
    dlg.appendChild(a);
    dlg.scrollTop = dlg.scrollHeight;
    const paras = t.response.split("\n\n");
    let i = 0;
    let tw = null;
    const next = () => {
      if (i >= paras.length) {
        if (first) {
          const fresh = grantClues(t.gives || []);
          if (fresh.length || t.gives) renderTopics(p, box);
          else renderTopics(p, box);
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
    $("#count-evidence").textContent = G.clues.length ? "(" + G.clues.length + ")" : "";
    $("#count-board").textContent = G.deductions.length ? "(" + G.deductions.length + ")" : "";
  }

  function exhibitLetter(i) {
    let s = "", n = i;
    do { s = String.fromCharCode(65 + (n % 26)) + s; n = Math.floor(n / 26) - 1; } while (n >= 0);
    return s;
  }

  function renderEvidenceTab() {
    const t = $("#tab-evidence");
    t.innerHTML = "";
    if (!G.clues.length) {
      t.appendChild(el("p", "empty-note", "No evidence yet. Search the rooms; question the people. Everything you log lands here."));
      return;
    }
    G.clues.forEach((cid, i) => {
      const c = C.clues[cid];
      if (!c) return;
      const card = el("article", "clue-card");
      card.innerHTML =
        '<span class="exhibit">EXHIBIT ' + exhibitLetter(i) + "</span>" +
        "<h4>" + esc(c.name) + "</h4>" +
        "<p>" + esc(c.desc) + "</p>";
      t.appendChild(card);
    });
  }

  function renderPeopleTab() {
    const t = $("#tab-people");
    t.innerHTML = "";
    C.suspects.forEach((p) => {
      const card = el("article", "person-card" + (p.witness ? " is-witness" : ""));
      const loc = locById(p.location);
      let notes = "";
      p.topics.forEach((tp) => {
        if (G.asked.includes(tp.id) && tp.note) notes += "<li>" + esc(tp.note) + "</li>";
      });
      card.innerHTML =
        '<header><span class="monogram" style="--chip:' + p.color + '">' + esc(p.initials) + "</span>" +
        "<div><h4>" + esc(p.name) + (p.witness ? ' <span class="witness-tag">WITNESS</span>' : "") + "</h4>" +
        "<em>" + esc(p.role) + " · " + p.age + " · in " + esc(loc ? loc.name : "?") + "</em></div></header>" +
        "<p>" + esc(p.blurb) + "</p>" +
        (notes ? '<ul class="person-notes">' + notes + "</ul>" : '<p class="empty-note">Nothing on record yet — go and ask.</p>');
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
      pin.innerHTML = '<span class="pin"></span><span class="pin-exhibit">' + exhibitLetter(i) + "</span><strong>" + esc(c.name) + "</strong>";
      pin.title = c.desc;
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
        card.innerHTML = '<span class="pin pin-red"></span><span class="ded-label">DEDUCTION</span><h4>' + esc(d.name) + "</h4><p>" + esc(d.text) + "</p>";
        dedMap[d.id] = card;
      } else {
        const have = d.requires.filter((r) => G.clues.includes(r)).length;
        card.innerHTML = '<span class="ded-label">UNFORMED</span><h4>? ? ?</h4><p class="empty-note">' +
          have + " of " + d.requires.length + " threads in hand. Keep pulling.</p>";
      }
      dedWrap.appendChild(card);
    });
    board.appendChild(dedWrap);
    if (!G.clues.length) {
      board.appendChild(el("p", "empty-note board-empty", "The board is bare. It won't stay that way."));
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
        });
      });
    };
    requestAnimationFrame(draw);
    window.addEventListener("resize", draw, { passive: true });
  }

  /* ---------- accusation ---------- */
  function onTimeUp() {
    if (G.over) return;
    const m = openModal("modal-accuse");
    m.overlay.dataset.locked = "1";
    m.box.innerHTML =
      '<div class="acc-kicker">TIME IS UP</div>' +
      "<h3 class='acc-title'>The deadline has arrived</h3>" +
      "<p class='disc-text'>" + esc(C.deadlineLabel) + " Whatever you believe, it must be said now — or the case passes out of your hands forever.</p>" +
      '<div class="acc-actions"><button class="btn btn-primary" id="acc-now">Name the killer</button>' +
      '<button class="btn btn-quiet" id="acc-give">Surrender the case</button></div>';
    m.box.querySelector("#acc-now").addEventListener("click", () => { m.close(); openAccuse(true); });
    m.box.querySelector("#acc-give").addEventListener("click", () => { m.close(); finishCase("timeout", null, null, []); });
  }

  function openAccuse(forced) {
    if (G.over) return;
    const m = openModal("modal-accuse");
    if (forced) m.overlay.dataset.locked = "1";
    const state = { suspect: null, motive: null, evidence: [] };
    const render = (step) => {
      if (step === 1) {
        m.box.innerHTML =
          '<div class="acc-kicker">THE ACCUSATION · I of III</div>' +
          "<h3 class='acc-title'>Who did it?</h3>" +
          '<div class="acc-grid" id="acc-grid"></div>' +
          (forced ? "" : '<div class="acc-actions"><button class="btn btn-quiet" id="acc-cancel">Not yet — keep digging</button></div>');
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
          '<div class="acc-kicker">THE ACCUSATION · II of III</div>' +
          "<h3 class='acc-title'>Why did " + esc(s.name.split(" ")[0]) + " do it?</h3>" +
          '<div class="acc-list" id="acc-list"></div>' +
          '<div class="acc-actions"><button class="btn btn-quiet" id="acc-back">Back</button></div>';
        const list = m.box.querySelector("#acc-list");
        C.motiveOptions.forEach((mo) => {
          const b = el("button", "acc-motive", esc(mo.label));
          b.addEventListener("click", () => { state.motive = mo.id; render(3); });
          list.appendChild(b);
        });
        m.box.querySelector("#acc-back").addEventListener("click", () => render(1));
      } else {
        const s = C.suspects.find((x) => x.id === state.suspect);
        m.box.innerHTML =
          '<div class="acc-kicker">THE ACCUSATION · III of III</div>' +
          "<h3 class='acc-title'>What proves it? <span class='acc-sub'>Choose up to three exhibits.</span></h3>" +
          '<div class="acc-evidence" id="acc-ev"></div>' +
          '<div class="acc-actions">' +
          '<button class="btn btn-quiet" id="acc-back">Back</button>' +
          '<button class="btn btn-accuse-final" id="acc-final" disabled>Accuse ' + esc(s.name) + "</button></div>";
        const evBox = m.box.querySelector("#acc-ev");
        const finalBtn = m.box.querySelector("#acc-final");
        if (!G.clues.length) evBox.appendChild(el("p", "empty-note", "You hold no evidence. This will not go well — but you may still point a finger."));
        G.clues.forEach((cid, i) => {
          const c = C.clues[cid];
          if (!c) return;
          const b = el("button", "acc-clue");
          b.innerHTML = "<span class='exhibit'>" + exhibitLetter(i) + "</span> " + esc(c.name);
          b.addEventListener("click", () => {
            const at = state.evidence.indexOf(cid);
            if (at >= 0) { state.evidence.splice(at, 1); b.classList.remove("picked"); }
            else if (state.evidence.length < 3) { state.evidence.push(cid); b.classList.add("picked"); }
            finalBtn.disabled = false;
          });
          evBox.appendChild(b);
        });
        finalBtn.disabled = false;
        m.box.querySelector("#acc-back").addEventListener("click", () => render(2));
        finalBtn.addEventListener("click", () => {
          m.close();
          resolveAccusation(state);
        });
      }
    };
    render(1);
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
      if (cluePct >= 0.8 && allDed) return "LEGENDARY SLEUTH";
      if (cluePct >= 0.55) return "SEASONED INSPECTOR";
      return "SHARP-EYED DETECTIVE";
    }
    if (tier === "partial") return "BEAT DETECTIVE";
    if (tier === "wrong") return "WRONG MAN'S BANE";
    return "CASE SURRENDERED";
  }

  function finishCase(tier, accusedId, motiveId, evidence) {
    G.over = true;
    saveGame();
    const accused = accusedId ? C.suspects.find((s) => s.id === accusedId) : null;
    const rank = rankFor(tier);
    setResult(C.id, { tier: tier, rank: rank });
    clearSave();

    const s = $("#screen-verdict");
    s.innerHTML = "";
    const sheet = el("div", "verdict-sheet");
    sheet.appendChild(el("div", "verdict-stamp stamp-" + tier, stampText(tier)));
    sheet.appendChild(el("div", "brief-head", "CASE FILE No. " + C.fileNo + " — FINAL REPORT"));
    sheet.appendChild(el("h2", "brief-title", esc(C.title)));
    if (accused) {
      sheet.appendChild(el("p", "verdict-accused",
        "You accused <strong>" + esc(accused.name) + "</strong>" +
        (motiveId ? " — " + esc((C.motiveOptions.find((m) => m.id === motiveId) || {}).label || "").toLowerCase() : "") + "."));
    }
    const paras = el("div", "brief-paras");
    (C.epilogues[tier] || []).forEach((p) => {
      paras.appendChild(el("p", "brief-p", esc(p.replace(/\{ACCUSED\}/g, accused ? accused.name : "your suspect"))));
    });
    sheet.appendChild(paras);

    const truth = C.suspects.find((x) => x.id === C.solution.culprit);
    if (tier === "wrong" || tier === "timeout") {
      sheet.appendChild(el("div", "verdict-truth",
        "<span class='note-label'>For the drawer no one opens:</span> the killer was <strong>" + esc(truth.name) + "</strong>, " + esc(truth.role.toLowerCase()) + "."));
    }

    const stats = el("div", "verdict-stats");
    stats.innerHTML =
      "<span>RANK — <strong>" + rank + "</strong></span>" +
      "<span>Evidence — " + G.clues.length + " / " + totalClueCount() + "</span>" +
      "<span>Deductions — " + G.deductions.length + " / " + C.deductions.length + "</span>" +
      "<span>Clock — " + (timeLeft() > 0 ? Math.floor(timeLeft() / 60) + "h " + (timeLeft() % 60) + "m to spare" : "ran dry") + "</span>";
    sheet.appendChild(stats);

    const actions = el("div", "acc-actions");
    const again = el("button", "btn btn-quiet", "Reopen this case");
    again.addEventListener("click", () => startCase(C.id));
    const desk = el("button", "btn btn-primary", "Return to the desk");
    desk.addEventListener("click", renderTitle);
    actions.appendChild(again); actions.appendChild(desk);
    sheet.appendChild(actions);
    s.appendChild(sheet);
    showScreen("#screen-verdict");
  }

  /* ---------- wire chrome ---------- */
  function wire() {
    $("#btn-accuse").addEventListener("click", () => openAccuse(false));
    $("#btn-desk").addEventListener("click", () => { saveGame(); renderTitle(); });
    document.querySelectorAll(".jtab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".jtab").forEach((t) => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        document.querySelectorAll(".tab-panel").forEach((p) => { p.hidden = true; p.classList.remove("active"); });
        const panel = $("#tab-" + tab.dataset.tab);
        panel.hidden = false;
        panel.classList.add("active");
        if (tab.dataset.tab === "board") renderBoardTab();
      });
    });
  }

  /* ---------- boot ---------- */
  // Debug/test boot via URL hash, e.g. #case:blackwood,demo,board or #brief:orpheum
  // flags: demo (pre-search open hotspots), board / people (journal tab), talk:<suspectId>, accuse
  function bootFromHash() {
    const parts = location.hash.slice(1).split(",");
    const head = (parts[0] || "").match(/^(case|brief):([a-z0-9]+)$/);
    if (!head) return false;
    const cs = CASES.find((c) => c.id === head[2]);
    if (!cs) return false;
    DEBUG = true;
    if (head[1] === "brief") { startCase(cs.id); return true; }
    C = cs;
    G = { caseId: cs.id, elapsed: 0, loc: cs.locations[0].id, clues: [], searched: [], asked: [], deductions: [], over: false };
    if (parts.includes("demo")) {
      cs.locations.forEach((l) => l.hotspots.forEach((h) => {
        if (h.requiresClue && !G.clues.includes(h.requiresClue)) return;
        G.searched.push(h.id);
        (h.gives || []).forEach((cid) => { if (!G.clues.includes(cid)) G.clues.push(cid); });
      }));
      cs.deductions.forEach((d) => { if (d.requires.every((cid) => G.clues.includes(cid))) G.deductions.push(d.id); });
      G.elapsed = 150;
    }
    enterGame();
    parts.forEach((f) => {
      if (f === "board" || f === "people") {
        const tab = document.querySelector('.jtab[data-tab="' + f + '"]');
        if (tab) tab.click();
      } else if (f.indexOf("talk:") === 0) {
        const p = cs.suspects.find((s) => s.id === f.slice(5));
        if (p) openInterrogation(p.id);
      } else if (f === "accuse") {
        openAccuse(false);
      }
    });
    return true;
  }
  wire();
  if (!bootFromHash()) renderTitle();
})();
