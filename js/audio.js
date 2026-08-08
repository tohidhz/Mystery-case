/* The Calloway Files — procedural sound.
   No audio files: the game is a folder you open, so every sound here is
   synthesized. A quiet room tone per case, and short cues for the things
   that matter (a minute spent, an exhibit logged, a deduction closing).
   Everything is optional, remembered, and fails silently if Web Audio
   is unavailable or blocked. */
window.CallowayAudio = (function () {
  "use strict";

  var MUTE_KEY = "calloway_muted_v1";
  var ctx = null, master = null, bed = null, ready = false, dead = false;
  var muted = false;
  var noiseBuf = null;
  var lastKey = 0;
  var beds = {};   // per-case ambient nodes

  try { muted = localStorage.getItem(MUTE_KEY) === "1"; } catch (e) { /* private mode */ }

  function now() { return ctx ? ctx.currentTime : 0; }

  /* ---------- graph ---------- */
  function init() {
    if (ctx || dead) return;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) { dead = true; return; }
    try {
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = muted ? 0 : 1;
      master.connect(ctx.destination);
      bed = ctx.createGain();
      bed.gain.value = 0;
      bed.connect(master);
      ready = true;
    } catch (e) { dead = true; }
  }

  // browsers hold the context suspended until a real gesture
  function unlock() {
    init();
    if (!ctx) return;
    if (ctx.state === "suspended") ctx.resume().catch(function () {});
  }

  function noise() {
    if (noiseBuf) return noiseBuf;
    var len = ctx.sampleRate * 2;
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0);
    // brown-ish: integrated white, gentler and warmer than raw hiss
    var last = 0;
    for (var i = 0; i < len; i++) {
      var w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.5;
    }
    return noiseBuf;
  }

  function src(loop) {
    var s = ctx.createBufferSource();
    s.buffer = noise();
    s.loop = !!loop;
    return s;
  }

  function filt(type, freq, q) {
    var f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    if (q) f.Q.value = q;
    return f;
  }

  // one-shot amplitude envelope
  function env(peak, attack, decay) {
    var g = ctx.createGain();
    var t = now();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    return g;
  }

  function tone(freq, peak, attack, decay, type) {
    var o = ctx.createOscillator();
    o.type = type || "sine";
    o.frequency.value = freq;
    var g = env(peak, attack, decay);
    o.connect(g); g.connect(master);
    o.start();
    o.stop(now() + attack + decay + 0.05);
  }

  function burst(peak, attack, decay, fType, fFreq, q) {
    var s = src(false);
    var f = filt(fType, fFreq, q);
    var g = env(peak, attack, decay);
    s.connect(f); f.connect(g); g.connect(master);
    s.start();
    s.stop(now() + attack + decay + 0.05);
  }

  /* ---------- the cues ---------- */
  var cues = {
    // a minute leaving: the desk clock
    tick: function () {
      burst(0.055, 0.001, 0.035, "bandpass", 2200, 9);
      tone(1400, 0.012, 0.001, 0.03, "square");
    },
    // an exhibit logged: paper handled
    paper: function () {
      burst(0.05, 0.006, 0.19, "highpass", 900);
      burst(0.03, 0.002, 0.07, "bandpass", 2600, 2);
    },
    // a deduction closing: a struck string on the board
    chime: function () {
      tone(196.00, 0.075, 0.004, 1.30);          // G3
      tone(293.66, 0.055, 0.006, 1.10);          // D4
      tone(392.00, 0.030, 0.010, 0.85);          // G4
      burst(0.020, 0.001, 0.06, "bandpass", 1800, 3);
    },
    // something you can't get into yet
    thunk: function () {
      tone(104, 0.16, 0.002, 0.14);
      burst(0.05, 0.001, 0.07, "lowpass", 320);
    },
    // crossing the house
    step: function () {
      burst(0.035, 0.02, 0.28, "lowpass", 700);
    },
    // a document coming up in front of you
    open: function () {
      burst(0.03, 0.03, 0.24, "highpass", 700);
    },
    // the warrant, the verdict
    stamp: function () {
      tone(84, 0.30, 0.001, 0.20);
      burst(0.16, 0.001, 0.10, "bandpass", 520, 1.2);
      tone(150, 0.10, 0.001, 0.09);
    },
    // the typewriter, at a whisper
    key: function () {
      var t = Date.now();
      if (t - lastKey < 38) return;
      lastKey = t;
      burst(0.022, 0.0008, 0.018, "bandpass", 3100, 6);
    },
  };

  /* ---------- ambient bed, one per case ---------- */
  function stopBed() {
    Object.keys(beds).forEach(function (k) {
      try { beds[k].stop ? beds[k].stop() : beds[k].disconnect(); } catch (e) {}
    });
    beds = {};
  }

  // Each case gets its own room: rain on manor glass, the hush of an empty
  // house, mains hum in a radio studio, wind against a stalled train.
  var ROOMS = {
    blackwood: { air: 300, airGain: 0.030, rain: 1500, rainGain: 0.045, hum: 0 },
    orpheum:   { air: 260, airGain: 0.034, rain: 0,    rainGain: 0,     hum: 0 },
    deadair:   { air: 340, airGain: 0.026, rain: 0,    rainGain: 0,     hum: 60 },
    meridian:  { air: 420, airGain: 0.040, rain: 900,  rainGain: 0.030, hum: 0 },
  };

  function room(caseId) {
    init();
    if (!ready) return;
    stopBed();
    var r = ROOMS[caseId] || ROOMS.orpheum;

    var air = src(true), airF = filt("lowpass", r.air), airG = ctx.createGain();
    airG.gain.value = r.airGain;
    air.connect(airF); airF.connect(airG); airG.connect(bed);
    air.start();
    beds.air = air;

    if (r.rainGain) {
      var rn = src(true), rnF = filt("bandpass", r.rain, 0.7), rnG = ctx.createGain();
      rnG.gain.value = r.rainGain;
      rn.connect(rnF); rnF.connect(rnG); rnG.connect(bed);
      // the weather breathes instead of sitting still
      var lfo = ctx.createOscillator(), lfoG = ctx.createGain();
      lfo.frequency.value = 0.055;
      lfoG.gain.value = r.rainGain * 0.45;
      lfo.connect(lfoG); lfoG.connect(rnG.gain);
      rn.start(); lfo.start();
      beds.rain = rn; beds.lfo = lfo;
    }

    if (r.hum) {
      var h = ctx.createOscillator(), hG = ctx.createGain();
      h.type = "sine"; h.frequency.value = r.hum;
      hG.gain.value = 0.014;
      h.connect(hG); hG.connect(bed);
      var h2 = ctx.createOscillator(), h2G = ctx.createGain();
      h2.type = "sine"; h2.frequency.value = r.hum * 2;
      h2G.gain.value = 0.006;
      h2.connect(h2G); h2G.connect(bed);
      h.start(); h2.start();
      beds.hum = h; beds.hum2 = h2;
    }

    bed.gain.cancelScheduledValues(now());
    bed.gain.setValueAtTime(bed.gain.value, now());
    bed.gain.linearRampToValueAtTime(1, now() + 2.2);   // fade the room in
  }

  function leaveRoom() {
    if (!ready) return;
    bed.gain.cancelScheduledValues(now());
    bed.gain.setValueAtTime(bed.gain.value, now());
    bed.gain.linearRampToValueAtTime(0, now() + 0.8);
    setTimeout(stopBed, 900);
  }

  return {
    unlock: unlock,
    play: function (name) {
      if (muted || dead) return;
      init();
      if (!ready || !cues[name]) return;
      if (ctx.state === "suspended") return;   // no gesture yet; stay quiet
      try { cues[name](); } catch (e) { /* never break the game for a noise */ }
    },
    room: function (caseId) { if (!muted && !dead) { try { room(caseId); } catch (e) {} } },
    leaveRoom: function () { if (!dead) { try { leaveRoom(); } catch (e) {} } },
    isMuted: function () { return muted; },
    setMuted: function (m) {
      muted = !!m;
      try { localStorage.setItem(MUTE_KEY, muted ? "1" : "0"); } catch (e) {}
      if (!ready) { if (!muted) init(); return; }
      master.gain.cancelScheduledValues(now());
      master.gain.setValueAtTime(master.gain.value, now());
      master.gain.linearRampToValueAtTime(muted ? 0 : 1, now() + 0.25);
    },
  };
})();
