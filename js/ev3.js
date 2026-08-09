/* Exhibit plates for CASE No. 003 — "Dead Air", WQXT, March 1947.
   One photographic close-up per clue. Single objects, so the material is
   rendered properly: modelled form under one upper-left key light, specular
   highlights, soft cast shadow, dust, wear, and a dark vignette for depth.
   Language-neutral — no <text> anywhere. Documents are ruled lines, ink
   strokes and typed-looking dashes: the LOOK of a page, never its words. */
window.CLUE_ART = window.CLUE_ART || {};
window.CLUE_ART.deadair = {

  /* The ribbon microphone: chromed cage, scorch shadows up the grille, and
     under the stand the ground strap snipped clean, copper still bright. */
  c3_mic: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-mic-bg" x1="0.15" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2a26"/><stop offset="0.55" stop-color="#161611"/><stop offset="1" stop-color="#0a0a08"/>
  </linearGradient>
  <radialGradient id="ev3-mic-pool" cx="0.26" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#e8cf9a" stop-opacity="0.24"/><stop offset="1" stop-color="#e8cf9a" stop-opacity="0"/>
  </radialGradient>
  <pattern id="ev3-mic-cork" width="26" height="22" patternUnits="userSpaceOnUse">
    <rect width="26" height="22" fill="#3a2f22"/>
    <ellipse cx="7" cy="6" rx="5" ry="3.4" fill="#4a3c2a" opacity="0.6"/>
    <ellipse cx="19" cy="15" rx="6" ry="3.8" fill="#2e2519" opacity="0.7"/>
    <ellipse cx="21" cy="4" rx="3" ry="2" fill="#544636" opacity="0.5"/>
  </pattern>
  <linearGradient id="ev3-mic-body" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a2d31"/><stop offset="0.13" stop-color="#7e858c"/>
    <stop offset="0.28" stop-color="#b9c1c6"/><stop offset="0.46" stop-color="#6d747a"/>
    <stop offset="0.72" stop-color="#3b4045"/><stop offset="0.9" stop-color="#5a6167"/>
    <stop offset="1" stop-color="#1d2023"/>
  </linearGradient>
  <linearGradient id="ev3-mic-chrome" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3c4147"/><stop offset="0.16" stop-color="#dfe6ea"/>
    <stop offset="0.3" stop-color="#9aa2a8"/><stop offset="0.55" stop-color="#f4f8fa"/>
    <stop offset="0.74" stop-color="#565d63"/><stop offset="1" stop-color="#23272b"/>
  </linearGradient>
  <linearGradient id="ev3-mic-grille" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#101317"/><stop offset="0.3" stop-color="#3e454c"/>
    <stop offset="0.55" stop-color="#22282d"/><stop offset="1" stop-color="#0a0c0e"/>
  </linearGradient>
  <pattern id="ev3-mic-mesh" width="8" height="8" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="2.1" fill="#04060a" opacity="0.85"/>
    <circle cx="6" cy="6" r="2.1" fill="#04060a" opacity="0.85"/>
    <circle cx="2.7" cy="1.2" r="0.7" fill="#aeb6bc" opacity="0.35"/>
    <circle cx="6.7" cy="5.2" r="0.7" fill="#aeb6bc" opacity="0.35"/>
  </pattern>
  <linearGradient id="ev3-mic-tube" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1b1e21"/><stop offset="0.2" stop-color="#a9b1b7"/>
    <stop offset="0.4" stop-color="#5c6369"/><stop offset="0.62" stop-color="#e2e9ed"/>
    <stop offset="0.85" stop-color="#464c51"/><stop offset="1" stop-color="#15181a"/>
  </linearGradient>
  <linearGradient id="ev3-mic-strap" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a6236"/><stop offset="0.35" stop-color="#c98f4c"/>
    <stop offset="0.7" stop-color="#6f4a26"/><stop offset="1" stop-color="#3c2714"/>
  </linearGradient>
  <linearGradient id="ev3-mic-copper" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffe6b8"/><stop offset="0.4" stop-color="#f0a95c"/>
    <stop offset="1" stop-color="#a8632a"/>
  </linearGradient>
  <radialGradient id="ev3-mic-scorch" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000000" stop-opacity="0.72"/><stop offset="1" stop-color="#000000" stop-opacity="0"/>
  </radialGradient>
  <filter id="ev3-mic-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="11"/>
  </filter>
  <radialGradient id="ev3-mic-vig" cx="0.42" cy="0.4" r="0.78">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-mic-bg)"/>
<rect width="640" height="520" fill="url(#ev3-mic-cork)" opacity="0.5"/>
<rect width="640" height="520" fill="url(#ev3-mic-pool)"/>

<!-- studio table the stand rests on -->
<path d="M0 424 L640 398 L640 520 L0 520 Z" fill="#241d14"/>
<path d="M0 424 L640 398 L640 412 L0 438 Z" fill="#5b4a31" opacity="0.55"/>
<g stroke="#6e5a3c" stroke-width="0.8" opacity="0.18">
  <path d="M0 452 L640 428"/><path d="M0 478 L640 456"/><path d="M0 504 L640 484"/>
</g>
<ellipse cx="300" cy="472" rx="176" ry="30" fill="#000" opacity="0.6" filter="url(#ev3-mic-soft)"/>

<!-- stand column behind the mic -->
<rect x="286" y="300" width="26" height="164" fill="url(#ev3-mic-tube)"/>
<rect x="290" y="300" width="3.4" height="164" fill="#ffffff" opacity="0.4"/>
<rect x="303" y="300" width="1.6" height="164" fill="#0a0c0e" opacity="0.5"/>
<rect x="280" y="330" width="38" height="13" rx="3" fill="url(#ev3-mic-chrome)"/>
<rect x="280" y="330" width="38" height="3" fill="#ffffff" opacity="0.45"/>
<path d="M240 466 L360 466 L376 486 L224 486 Z" fill="#2f3439"/>
<path d="M240 466 L360 466 L358 471 L242 471 Z" fill="#8d949a" opacity="0.7"/>
<path d="M224 486 L376 486 L376 494 L224 494 Z" fill="#15181b"/>

<!-- yoke arms -->
<path d="M196 214 q -22 -6 -24 22 q -2 30 22 34" fill="none" stroke="#20242a" stroke-width="15" stroke-linecap="round"/>
<path d="M196 214 q -22 -6 -24 22 q -2 30 22 34" fill="none" stroke="url(#ev3-mic-chrome)" stroke-width="11" stroke-linecap="round"/>
<path d="M404 214 q 22 -6 24 22 q 2 30 -22 34" fill="none" stroke="#20242a" stroke-width="15" stroke-linecap="round"/>
<path d="M404 214 q 22 -6 24 22 q 2 30 -22 34" fill="none" stroke="url(#ev3-mic-chrome)" stroke-width="11" stroke-linecap="round"/>
<circle cx="186" cy="232" r="13" fill="url(#ev3-mic-chrome)"/><circle cx="186" cy="232" r="5" fill="#171a1d"/>
<circle cx="183" cy="228" r="3.4" fill="#ffffff" opacity="0.6"/>
<circle cx="414" cy="232" r="13" fill="url(#ev3-mic-chrome)"/><circle cx="414" cy="232" r="5" fill="#171a1d"/>
<circle cx="411" cy="228" r="3" fill="#ffffff" opacity="0.45"/>

<!-- microphone body: rounded lozenge cage -->
<path d="M204 128 Q 204 52 300 50 Q 396 52 396 128 L396 268 Q 396 322 300 326 Q 204 322 204 268 Z" fill="#0d0f12"/>
<path d="M210 130 Q 210 60 300 58 Q 390 60 390 130 L390 266 Q 390 314 300 318 Q 210 314 210 266 Z" fill="url(#ev3-mic-body)"/>
<path d="M226 132 Q 226 76 300 74 Q 374 76 374 132 L374 258 Q 374 300 300 304 Q 226 300 226 258 Z" fill="url(#ev3-mic-grille)"/>
<path d="M226 132 Q 226 76 300 74 Q 374 76 374 132 L374 258 Q 374 300 300 304 Q 226 300 226 258 Z" fill="url(#ev3-mic-mesh)"/>
<path d="M226 132 Q 226 76 300 74 Q 374 76 374 132 L374 258 Q 374 300 300 304 Q 226 300 226 258 Z" fill="none" stroke="#0a0c0e" stroke-width="3"/>
<!-- grille cross-wires -->
<g stroke="#8e969d" stroke-width="1" opacity="0.22">
  <path d="M272 76 L272 303"/><path d="M300 74 L300 304"/><path d="M328 76 L328 303"/>
</g>
<g stroke="#8e969d" stroke-width="0.9" opacity="0.16">
  <path d="M226 160 L374 160"/><path d="M226 244 L374 244"/>
</g>
<!-- chromed side rails and cap bands -->
<path d="M210 130 Q 210 60 300 58 L300 74 Q 226 76 226 132 Z" fill="url(#ev3-mic-chrome)" opacity="0.95"/>
<path d="M390 130 Q 390 60 300 58 L300 74 Q 374 76 374 132 Z" fill="url(#ev3-mic-chrome)" opacity="0.8"/>
<rect x="210" y="130" width="16" height="136" fill="url(#ev3-mic-chrome)"/>
<rect x="374" y="130" width="16" height="128" fill="url(#ev3-mic-chrome)" opacity="0.85"/>
<path d="M210 266 Q 210 314 300 318 L300 304 Q 226 300 226 258 Z" fill="url(#ev3-mic-chrome)" opacity="0.9"/>
<path d="M390 258 Q 390 314 300 318 L300 304 Q 374 300 374 258 Z" fill="url(#ev3-mic-chrome)" opacity="0.7"/>
<rect x="214" y="132" width="3.6" height="132" fill="#ffffff" opacity="0.55"/>
<rect x="378" y="134" width="2.4" height="120" fill="#ffffff" opacity="0.3"/>
<path d="M232 66 Q 300 54 368 66" fill="none" stroke="#ffffff" stroke-width="3.2" opacity="0.5"/>
<!-- station badge plate on the cage, blank -->
<rect x="266" y="178" width="68" height="34" rx="5" fill="#1c2126"/>
<rect x="266" y="178" width="68" height="34" rx="5" fill="none" stroke="url(#ev3-mic-chrome)" stroke-width="3.4"/>
<rect x="270" y="181" width="60" height="5" rx="2" fill="#ffffff" opacity="0.22"/>
<g stroke="#7b848b" stroke-width="2.4" opacity="0.45">
  <path d="M278 196 h 14"/><path d="M298 196 h 22"/><path d="M282 204 h 30"/>
</g>
<!-- neck and yoke pin -->
<rect x="286" y="318" width="28" height="18" rx="4" fill="url(#ev3-mic-chrome)"/>
<rect x="286" y="318" width="28" height="3.4" fill="#ffffff" opacity="0.5"/>

<!-- SCORCH: soot shadows crawling up the grille where the arc jumped -->
<ellipse cx="262" cy="270" rx="58" ry="52" fill="url(#ev3-mic-scorch)"/>
<ellipse cx="318" cy="288" rx="48" ry="34" fill="url(#ev3-mic-scorch)" opacity="0.9"/>
<path d="M248 302 q 10 -50 4 -80 q 4 6 6 16 q 4 30 10 64 z" fill="#050505" opacity="0.5"/>
<path d="M276 304 q 6 -44 16 -68 q 1 8 -1 18 q -6 26 -3 50 z" fill="#050505" opacity="0.42"/>
<path d="M306 300 q 3 -30 12 -48 q 0 8 -2 16 q -5 18 -3 32 z" fill="#050505" opacity="0.3"/>
<ellipse cx="272" cy="254" rx="26" ry="7" fill="#0a0a0a" opacity="0.45"/>
<path d="M236 292 q 44 18 96 6" fill="none" stroke="#c9a05a" stroke-width="2.4" opacity="0.26"/>

<!-- THE CUT: flat braided ground strap down the stand, snipped clean through -->
<rect x="280" y="336" width="22" height="12" rx="3" fill="url(#ev3-mic-chrome)"/>
<circle cx="291" cy="342" r="3.4" fill="#15181b"/>
<path d="M283 350 L303 350 L302 392 Q 293 398 281 394 Z" fill="#241a10"/>
<path d="M284 350 L302 350 L301 390 Q 293 396 283 392 Z" fill="url(#ev3-mic-strap)"/>
<g stroke="#3d2714" stroke-width="1.4" opacity="0.6">
  <path d="M284 356 l 17 8"/><path d="M284 368 l 17 8"/><path d="M284 380 l 17 8"/>
  <path d="M301 356 l -17 8"/><path d="M301 368 l -17 8"/><path d="M301 380 l -17 8"/>
</g>
<path d="M287 352 L289 388" fill="none" stroke="#ffd79a" stroke-width="3" opacity="0.3"/>
<!-- the severed lower half, sprung outward, a clean gap between -->
<path d="M296 414 Q 306 412 314 416 L316 458 L296 458 Z" fill="#241a10"/>
<path d="M297 416 Q 306 414 313 418 L314 456 L297 456 Z" fill="url(#ev3-mic-strap)"/>
<g stroke="#3d2714" stroke-width="1.4" opacity="0.55">
  <path d="M298 424 l 16 8"/><path d="M298 436 l 16 8"/><path d="M298 448 l 16 8"/>
  <path d="M314 424 l -16 8"/><path d="M314 436 l -16 8"/>
</g>
<!-- bright cut faces, the copper still raw where the nips went through -->
<path d="M281 394 Q 293 400 302 392 L303 386 Q 293 393 282 388 Z" fill="url(#ev3-mic-copper)"/>
<path d="M283 391 Q 292 396 300 390" fill="none" stroke="#fff6df" stroke-width="2" opacity="0.9"/>
<path d="M296 414 Q 306 411 314 416 L315 422 Q 306 417 297 420 Z" fill="url(#ev3-mic-copper)"/>
<path d="M298 417 Q 306 414 313 418" fill="none" stroke="#fff6df" stroke-width="2" opacity="0.85"/>
<g stroke="#f8cf88" stroke-width="1.2" opacity="0.7">
  <path d="M285 390 l 2 5"/><path d="M295 393 l 1 5"/><path d="M303 418 l -2 5"/>
</g>

<!-- dust on the table and a fallen fleck of copper braid -->
<g fill="#c9b48c" opacity="0.26">
  <ellipse cx="360" cy="452" rx="14" ry="3"/><ellipse cx="196" cy="474" rx="18" ry="3.4"/>
</g>
<path d="M372 460 q 10 -4 18 1" fill="none" stroke="#d3a05a" stroke-width="2.4" opacity="0.55" stroke-linecap="round"/>

<rect width="640" height="520" fill="url(#ev3-mic-vig)"/>
`,
  },

  /* The patch bay: a field of jacks, and one cord that has no business
     being where it is — the mic line jumped across to the plate feed. */
  c3_patch: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-pat-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#22242a"/><stop offset="0.6" stop-color="#111318"/><stop offset="1" stop-color="#07080a"/>
  </linearGradient>
  <radialGradient id="ev3-pat-pool" cx="0.24" cy="0.12" r="0.8">
    <stop offset="0" stop-color="#f0dca8" stop-opacity="0.22"/><stop offset="1" stop-color="#f0dca8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-pat-panel" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#454a51"/><stop offset="0.35" stop-color="#2c3035"/>
    <stop offset="1" stop-color="#171a1e"/>
  </linearGradient>
  <linearGradient id="ev3-pat-rail" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8d949b"/><stop offset="0.3" stop-color="#4a5057"/><stop offset="1" stop-color="#1e2226"/>
  </linearGradient>
  <radialGradient id="ev3-pat-bez" cx="0.34" cy="0.28" r="0.8">
    <stop offset="0" stop-color="#e6ecef"/><stop offset="0.42" stop-color="#8f979e"/>
    <stop offset="0.8" stop-color="#3b4147"/><stop offset="1" stop-color="#20242a"/>
  </radialGradient>
  <radialGradient id="ev3-pat-hole" cx="0.4" cy="0.32" r="0.7">
    <stop offset="0" stop-color="#25292e"/><stop offset="0.6" stop-color="#0a0c0e"/><stop offset="1" stop-color="#000"/>
  </radialGradient>
  <pattern id="ev3-pat-far" width="46" height="40" patternUnits="userSpaceOnUse">
    <circle cx="12" cy="12" r="8" fill="#1c2025"/><circle cx="12" cy="12" r="8" fill="none" stroke="#5b6169" stroke-width="2"/>
    <circle cx="10" cy="9" r="2.4" fill="#a7aeb4" opacity="0.5"/>
    <circle cx="34" cy="28" r="8" fill="#1c2025"/><circle cx="34" cy="28" r="8" fill="none" stroke="#5b6169" stroke-width="2"/>
    <circle cx="32" cy="25" r="2.4" fill="#a7aeb4" opacity="0.45"/>
  </pattern>
  <linearGradient id="ev3-pat-cordA" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5d5346"/><stop offset="0.3" stop-color="#3a332a"/><stop offset="1" stop-color="#1a1712"/>
  </linearGradient>
  <linearGradient id="ev3-pat-cordB" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b98a4e"/><stop offset="0.28" stop-color="#8a6033"/><stop offset="1" stop-color="#3d2a16"/>
  </linearGradient>
  <linearGradient id="ev3-pat-plug" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2f6f8"/><stop offset="0.3" stop-color="#9aa2a9"/>
    <stop offset="0.62" stop-color="#4c5259"/><stop offset="1" stop-color="#1c2024"/>
  </linearGradient>
  <linearGradient id="ev3-pat-red" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d24a3a"/><stop offset="0.45" stop-color="#8e2a1e"/><stop offset="1" stop-color="#421009"/>
  </linearGradient>
  <filter id="ev3-pat-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-pat-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-pat-bg)"/>
<rect width="640" height="520" fill="url(#ev3-pat-pool)"/>

<!-- rack panel -->
<rect x="24" y="40" width="592" height="440" rx="6" fill="url(#ev3-pat-panel)"/>
<rect x="24" y="40" width="592" height="7" fill="#7d848b" opacity="0.5"/>
<rect x="24" y="473" width="592" height="7" fill="#000" opacity="0.5"/>
<rect x="24" y="40" width="8" height="440" fill="#000" opacity="0.28"/>
<g fill="#0a0b0d" opacity="0.5">
  <rect x="24" y="150" width="592" height="3"/><rect x="24" y="286" width="592" height="3"/>
</g>
<!-- rack ears with screws -->
<rect x="24" y="40" width="46" height="440" fill="#2a2e33"/>
<rect x="570" y="40" width="46" height="440" fill="#22262a"/>
<g>
  <circle cx="47" cy="72" r="9" fill="url(#ev3-pat-bez)"/><path d="M41 72 h12" stroke="#14171a" stroke-width="2.2"/>
  <circle cx="47" cy="448" r="9" fill="url(#ev3-pat-bez)"/><path d="M41 448 h12" stroke="#14171a" stroke-width="2.2"/>
  <circle cx="593" cy="72" r="9" fill="url(#ev3-pat-bez)" opacity="0.8"/><path d="M587 72 h12" stroke="#14171a" stroke-width="2.2"/>
</g>
<!-- far rows, receding into the dark -->
<rect x="76" y="52" width="488" height="92" fill="url(#ev3-pat-far)" opacity="0.55"/>
<rect x="76" y="52" width="488" height="92" fill="#000" opacity="0.42"/>
<!-- engraved designation strips, blank -->
<rect x="76" y="158" width="488" height="14" rx="2" fill="#c8c2b2" opacity="0.16"/>
<rect x="76" y="294" width="488" height="14" rx="2" fill="#c8c2b2" opacity="0.14"/>
<g stroke="#e8e3d4" stroke-width="1.6" opacity="0.16" stroke-dasharray="30 26 22 34 34 24 26 32 20 36">
  <path d="M92 166 h 440"/><path d="M92 302 h 440"/>
</g>

<!-- upper jack row, in focus: chromed bezels, black bores -->
<g stroke="#0f1215" stroke-width="1.6">
  <circle cx="104" cy="212" r="21" fill="url(#ev3-pat-bez)"/><circle cx="164" cy="212" r="21" fill="url(#ev3-pat-bez)"/>
  <circle cx="224" cy="212" r="21" fill="url(#ev3-pat-bez)"/><circle cx="284" cy="212" r="21" fill="url(#ev3-pat-bez)"/>
  <circle cx="344" cy="212" r="21" fill="url(#ev3-pat-bez)"/><circle cx="404" cy="212" r="21" fill="url(#ev3-pat-bez)"/>
  <circle cx="464" cy="212" r="21" fill="url(#ev3-pat-bez)"/><circle cx="524" cy="212" r="21" fill="url(#ev3-pat-bez)"/>
</g>
<g fill="url(#ev3-pat-hole)" stroke="#c9d0d5" stroke-width="1" stroke-opacity="0.3">
  <circle cx="104" cy="212" r="12"/><circle cx="164" cy="212" r="12"/><circle cx="224" cy="212" r="12"/>
  <circle cx="284" cy="212" r="12"/><circle cx="344" cy="212" r="12"/><circle cx="404" cy="212" r="12"/>
  <circle cx="464" cy="212" r="12"/><circle cx="524" cy="212" r="12"/>
</g>
<!-- lower jack row -->
<g stroke="#0f1215" stroke-width="1.6">
  <circle cx="104" cy="350" r="21" fill="url(#ev3-pat-bez)"/><circle cx="164" cy="350" r="21" fill="url(#ev3-pat-bez)"/>
  <circle cx="224" cy="350" r="21" fill="url(#ev3-pat-bez)"/><circle cx="284" cy="350" r="21" fill="url(#ev3-pat-bez)"/>
  <circle cx="344" cy="350" r="21" fill="url(#ev3-pat-bez)"/><circle cx="404" cy="350" r="21" fill="url(#ev3-pat-bez)"/>
  <circle cx="464" cy="350" r="21" fill="url(#ev3-pat-bez)"/><circle cx="524" cy="350" r="21" fill="url(#ev3-pat-bez)"/>
</g>
<g fill="url(#ev3-pat-hole)" stroke="#c9d0d5" stroke-width="1" stroke-opacity="0.28">
  <circle cx="104" cy="350" r="12"/><circle cx="164" cy="350" r="12"/><circle cx="224" cy="350" r="12"/>
  <circle cx="284" cy="350" r="12"/><circle cx="344" cy="350" r="12"/><circle cx="404" cy="350" r="12"/>
  <circle cx="464" cy="350" r="12"/><circle cx="524" cy="350" r="12"/>
</g>

<!-- two ordinary house cords, short and tidy, left side -->
<path d="M104 212 q 30 66 60 138" fill="none" stroke="#000" stroke-width="16" opacity="0.35" filter="url(#ev3-pat-soft)"/>
<path d="M104 212 q 30 66 60 138" fill="none" stroke="url(#ev3-pat-cordA)" stroke-width="12" stroke-linecap="round"/>
<g stroke="#6b6154" stroke-width="1.2" opacity="0.5">
  <path d="M113 240 l 10 -3"/><path d="M143 310 l 10 -3"/>
</g>
<path d="M224 212 q 6 70 0 138" fill="none" stroke="url(#ev3-pat-cordA)" stroke-width="12" stroke-linecap="round"/>
<g stroke="#6b6154" stroke-width="1.2" opacity="0.45">
  <path d="M220 250 l 10 -2"/><path d="M219 300 l 10 -2"/>
</g>

<!-- THE WRONG PATCH: mic line dragged clear across to a spare jack, in a
     brighter, newer cord that does not match the house cords -->
<path d="M284 212 C 340 268 440 258 524 350" fill="none" stroke="#000" stroke-width="20" opacity="0.45" filter="url(#ev3-pat-soft)"/>
<path d="M284 212 C 340 268 440 258 524 350" fill="none" stroke="#1d1408" stroke-width="16" stroke-linecap="round"/>
<path d="M284 212 C 340 268 440 258 524 350" fill="none" stroke="url(#ev3-pat-cordB)" stroke-width="12" stroke-linecap="round"/>
<g stroke="#4a3319" stroke-width="1.4" opacity="0.65">
  <path d="M310 236 l 6 -10"/><path d="M344 252 l 4 -10"/><path d="M386 256 l 2 -11"/>
  <path d="M428 268 l 0 -11"/><path d="M470 298 l -5 -9"/><path d="M502 328 l -7 -8"/>
</g>
<path d="M290 216 C 342 266 438 256 518 344" fill="none" stroke="#f3d49a" stroke-width="2.6" opacity="0.32"/>
<!-- the two plugs, chrome, seated hard -->
<g>
  <rect x="272" y="188" width="24" height="30" rx="5" fill="url(#ev3-pat-plug)"/>
  <rect x="275" y="190" width="4" height="26" fill="#ffffff" opacity="0.6"/>
  <rect x="268" y="212" width="32" height="12" rx="4" fill="#23282d"/>
  <rect x="268" y="212" width="32" height="3" fill="#9aa2a8" opacity="0.6"/>
</g>
<g>
  <rect x="512" y="326" width="24" height="30" rx="5" fill="url(#ev3-pat-plug)"/>
  <rect x="515" y="328" width="4" height="26" fill="#ffffff" opacity="0.55"/>
  <rect x="508" y="350" width="32" height="12" rx="4" fill="#23282d"/>
  <rect x="508" y="350" width="32" height="3" fill="#9aa2a8" opacity="0.55"/>
</g>
<!-- warning tag hanging off the spare jack, blank card, red edge -->
<path d="M524 362 q 4 20 -6 34" fill="none" stroke="#c8bda4" stroke-width="2" opacity="0.7"/>
<g transform="rotate(9 520 424)">
  <rect x="492" y="392" width="58" height="42" rx="4" fill="#cfc4a8"/>
  <rect x="492" y="392" width="58" height="6" fill="url(#ev3-pat-red)"/>
  <circle cx="521" cy="400" r="4" fill="#6b5f46"/>
  <g stroke="#5c5340" stroke-width="1.5" opacity="0.55">
    <path d="M500 412 h 42" stroke-dasharray="9 4 6 5 12"/>
    <path d="M500 420 h 34" stroke-dasharray="7 4 11 5"/>
  </g>
  <path d="M492 392 h58 v42 h-58 z" fill="none" stroke="#6b5f46" stroke-width="1.2" opacity="0.6"/>
</g>
<!-- dust and a fingerprint on the panel face -->
<g opacity="0.14" fill="none" stroke="#e6e9ec" stroke-width="1.1">
  <path d="M420 400 q 11 9 0 19"/><path d="M427 396 q 16 13 0 27"/><path d="M434 392 q 21 17 0 35"/>
</g>

<rect width="640" height="520" fill="url(#ev3-pat-vig)"/>
`,
  },

  /* The cue sheet on its clipboard: a producer's hand, timed to the second,
     and one line ruled twice and boxed — the sixty seconds of silence. */
  c3_cuesheet: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-cue-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2721"/><stop offset="0.6" stop-color="#15130f"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev3-cue-pool" cx="0.24" cy="0.1" r="0.82">
    <stop offset="0" stop-color="#ffe9b8" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-cue-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4b3a26"/><stop offset="0.5" stop-color="#33271a"/><stop offset="1" stop-color="#1c1610"/>
  </linearGradient>
  <linearGradient id="ev3-cue-board" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6f5636"/><stop offset="0.45" stop-color="#54402a"/><stop offset="1" stop-color="#33261a"/>
  </linearGradient>
  <linearGradient id="ev3-cue-paper" x1="0.1" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#f4ecd6"/><stop offset="0.4" stop-color="#e5d9bd"/>
    <stop offset="0.78" stop-color="#cfc0a0"/><stop offset="1" stop-color="#ab9b7c"/>
  </linearGradient>
  <linearGradient id="ev3-cue-clip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eef2f4"/><stop offset="0.28" stop-color="#a2a9af"/>
    <stop offset="0.6" stop-color="#4e545a"/><stop offset="1" stop-color="#202428"/>
  </linearGradient>
  <linearGradient id="ev3-cue-pen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5d5a55"/><stop offset="0.2" stop-color="#211f1c"/>
    <stop offset="0.55" stop-color="#0d0c0b"/><stop offset="1" stop-color="#2a2724"/>
  </linearGradient>
  <filter id="ev3-cue-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-cue-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-cue-bg)"/>
<rect width="640" height="520" fill="url(#ev3-cue-pool)"/>
<rect y="120" width="640" height="400" fill="url(#ev3-cue-desk)"/>
<g stroke="#6a5236" stroke-width="0.9" opacity="0.2">
  <path d="M0 190 q 320 -14 640 4"/><path d="M0 264 q 320 -12 640 6"/>
  <path d="M0 340 q 320 -12 640 6"/><path d="M0 424 q 320 -12 640 6"/>
</g>
<ellipse cx="330" cy="452" rx="216" ry="34" fill="#000" opacity="0.62" filter="url(#ev3-cue-soft)"/>

<!-- the clipboard, tilted -->
<g transform="rotate(-4 320 280)">
  <rect x="98" y="60" width="440" height="404" rx="8" fill="#1a1410" opacity="0.7"/>
  <rect x="94" y="56" width="440" height="404" rx="8" fill="url(#ev3-cue-board)"/>
  <rect x="94" y="56" width="440" height="6" fill="#8d7048" opacity="0.6"/>
  <g fill="#3d2e1e" opacity="0.35">
    <ellipse cx="160" cy="120" rx="30" ry="7"/><ellipse cx="410" cy="230" rx="42" ry="8"/>
    <ellipse cx="230" cy="392" rx="36" ry="7"/>
  </g>

  <!-- the sheet -->
  <rect x="112" y="84" width="404" height="358" fill="#2a2118" opacity="0.5"/>
  <path d="M110 80 L514 80 L516 438 L112 440 Z" fill="url(#ev3-cue-paper)"/>
  <path d="M110 80 L514 80 L514 92 L110 92 Z" fill="#ffffff" opacity="0.22"/>
  <!-- ruled column grid -->
  <g stroke="#8c7f63" stroke-width="1" opacity="0.5">
    <path d="M188 80 L190 440"/><path d="M256 80 L258 440"/><path d="M412 80 L414 440"/>
  </g>
  <path d="M110 118 L514 118" stroke="#6d6046" stroke-width="2" opacity="0.6"/>
  <path d="M110 124 L514 124" stroke="#6d6046" stroke-width="1" opacity="0.4"/>
  <g stroke="#a2977c" stroke-width="0.9" opacity="0.55">
    <path d="M114 148 L512 148"/><path d="M114 176 L512 176"/><path d="M114 204 L512 204"/>
    <path d="M114 232 L512 232"/><path d="M114 260 L512 260"/><path d="M114 288 L512 288"/>
    <path d="M114 316 L512 316"/><path d="M114 344 L512 344"/><path d="M114 372 L512 372"/>
    <path d="M114 400 L512 400"/><path d="M114 428 L512 428"/>
  </g>
  <!-- printed header rules, blank -->
  <g stroke="#4d4433" stroke-width="2.4" opacity="0.5">
    <path d="M126 104 h 44"/><path d="M204 104 h 40"/><path d="M276 104 h 118"/><path d="M428 104 h 66"/>
  </g>
  <!-- typed body: dash-broken rules read as type without being words -->
  <g stroke="#3a3327" stroke-width="2.1" opacity="0.72" stroke-linecap="butt">
    <path d="M124 140 h 56" stroke-dasharray="14 5 22 6 9"/>
    <path d="M200 140 h 46" stroke-dasharray="10 4 16 5"/>
    <path d="M270 140 h 130" stroke-dasharray="18 5 26 6 34 5 12"/>
    <path d="M124 168 h 56" stroke-dasharray="14 5 20 6 11"/>
    <path d="M200 168 h 44" stroke-dasharray="8 4 22 5"/>
    <path d="M270 168 h 118" stroke-dasharray="22 5 14 6 40"/>
    <path d="M124 196 h 56" stroke-dasharray="16 5 18 6 9"/>
    <path d="M200 196 h 48" stroke-dasharray="12 4 18 5 6"/>
    <path d="M270 196 h 136" stroke-dasharray="14 5 30 6 22 5 18"/>
    <path d="M124 224 h 56" stroke-dasharray="13 5 21 6 10"/>
    <path d="M200 224 h 42" stroke-dasharray="9 4 20 5"/>
    <path d="M270 224 h 108" stroke-dasharray="26 5 18 6 30"/>
    <path d="M124 252 h 56" stroke-dasharray="15 5 19 6 11"/>
    <path d="M200 252 h 46" stroke-dasharray="11 4 17 5 5"/>
    <path d="M270 252 h 124" stroke-dasharray="20 5 24 6 16 5 24"/>
  </g>
  <!-- THE LINE: 12:02:49 dead air, all mics open — set apart, boxed, ruled -->
  <rect x="118" y="272" width="390" height="34" fill="#c9b98f" opacity="0.35"/>
  <rect x="118" y="272" width="390" height="34" fill="none" stroke="#2f2a1f" stroke-width="2.2"/>
  <g stroke="#211d15" stroke-width="3" opacity="0.9" stroke-linecap="butt">
    <path d="M126 288 h 54" stroke-dasharray="16 4 20 5 8"/>
    <path d="M200 288 h 44" stroke-dasharray="10 4 24"/>
    <path d="M270 288 h 172" stroke-dasharray="30 5 24 6 40 5 46"/>
  </g>
  <path d="M124 300 L448 300" stroke="#231e15" stroke-width="1.6" opacity="0.85"/>
  <path d="M124 304 L448 304" stroke="#231e15" stroke-width="1.6" opacity="0.7"/>
  <!-- continuing typed rows below -->
  <g stroke="#3a3327" stroke-width="2.1" opacity="0.66" stroke-linecap="butt">
    <path d="M124 336 h 56" stroke-dasharray="14 5 20 6 9"/>
    <path d="M200 336 h 44" stroke-dasharray="10 4 18 5"/>
    <path d="M270 336 h 120" stroke-dasharray="22 5 18 6 34"/>
    <path d="M124 364 h 56" stroke-dasharray="16 5 18 6 10"/>
    <path d="M200 364 h 40" stroke-dasharray="8 4 20 5"/>
    <path d="M270 364 h 100" stroke-dasharray="18 5 26 6 22"/>
    <path d="M124 392 h 56" stroke-dasharray="13 5 22 6 8"/>
    <path d="M200 392 h 46" stroke-dasharray="12 4 16 5"/>
    <path d="M270 392 h 132" stroke-dasharray="24 5 20 6 30 5 16"/>
  </g>
  <!-- the producer's hand: neat rounded ink in the right-hand column -->
  <g fill="none" stroke="#1e2a4a" stroke-width="1.9" stroke-linecap="round" opacity="0.86">
    <path d="M422 144 c 4 -12 10 -2 12 2 c 3 -12 9 -4 12 1 c 5 -10 9 -1 13 3 c 6 -6 10 -2 14 2 c 5 -8 10 -2 13 1"/>
    <path d="M422 172 c 5 -10 9 -1 11 3 c 5 -13 10 -3 13 2 c 4 -9 9 0 12 4 c 5 -11 11 -3 15 1 c 4 -6 9 -1 12 2"/>
    <path d="M422 200 c 3 -11 9 -3 12 1 c 5 -11 11 -2 13 3 c 4 -12 9 -3 12 2 c 6 -8 10 -1 14 3 c 5 -7 9 -2 12 1"/>
    <path d="M422 228 c 5 -12 10 -2 12 2 c 4 -10 9 -2 12 2 c 5 -12 10 -2 13 2 c 4 -9 10 -1 13 3 c 5 -8 10 -2 13 1"/>
    <path d="M422 256 c 4 -10 9 -2 12 3 c 5 -12 10 -3 12 1 c 4 -10 10 -1 13 3 c 5 -11 10 -2 14 2 c 4 -7 8 -2 11 1"/>
    <path d="M422 342 c 4 -12 10 -2 12 2 c 3 -12 9 -4 12 1 c 5 -10 9 -1 13 3 c 6 -6 10 -2 14 2 c 5 -8 10 -2 13 1"/>
    <path d="M422 370 c 5 -10 9 -1 11 3 c 5 -13 10 -3 13 2 c 4 -9 9 0 12 4 c 5 -11 11 -3 15 1 c 4 -6 9 -1 12 2"/>
    <path d="M422 398 c 3 -11 9 -3 12 1 c 5 -11 11 -2 13 3 c 4 -12 9 -3 12 2 c 6 -8 10 -1 14 3"/>
  </g>
  <path d="M422 292 c 5 -14 11 -3 13 2 c 4 -15 11 -4 14 2 c 5 -12 11 -1 15 4 c 6 -9 12 -2 16 3 c 5 -10 11 -3 14 1" fill="none" stroke="#151f38" stroke-width="2.8" stroke-linecap="round" opacity="0.95"/>
  <!-- coffee ring and a thumb smudge on the sheet -->
  <ellipse cx="392" cy="424" rx="34" ry="9" fill="none" stroke="#8d6a3c" stroke-width="3" opacity="0.3"/>
  <ellipse cx="392" cy="424" rx="34" ry="9" fill="#8d6a3c" opacity="0.07"/>
  <g opacity="0.13" fill="none" stroke="#4a3d2a" stroke-width="1.1">
    <path d="M156 412 q 10 8 0 17"/><path d="M162 408 q 15 12 0 25"/><path d="M168 404 q 20 16 0 33"/>
  </g>
  <!-- dog-eared lower corner -->
  <path d="M516 438 L482 440 L514 410 Z" fill="#b3a281"/>
  <path d="M516 438 L482 440 L514 410 Z" fill="none" stroke="#8a7a5c" stroke-width="1"/>

  <!-- the clip -->
  <rect x="248" y="40" width="132" height="46" rx="7" fill="url(#ev3-cue-clip)"/>
  <rect x="252" y="43" width="124" height="8" rx="4" fill="#ffffff" opacity="0.5"/>
  <rect x="248" y="76" width="132" height="10" rx="4" fill="#181c20" opacity="0.7"/>
  <circle cx="272" cy="62" r="7" fill="#2b3036"/><circle cx="270" cy="60" r="2.6" fill="#dfe5e9" opacity="0.6"/>
  <circle cx="356" cy="62" r="7" fill="#2b3036"/><circle cx="354" cy="60" r="2.6" fill="#dfe5e9" opacity="0.5"/>
  <path d="M262 34 q 52 -14 104 0" fill="none" stroke="#8e969c" stroke-width="5" stroke-linecap="round"/>
  <path d="M262 32 q 52 -13 104 1" fill="none" stroke="#eef3f6" stroke-width="1.8" opacity="0.7"/>
</g>

<!-- the producer's pen laid across the desk, capped -->
<g transform="rotate(-14 470 470)">
  <rect x="378" y="462" width="192" height="17" rx="8" fill="#000" opacity="0.4" filter="url(#ev3-cue-soft)"/>
  <rect x="374" y="458" width="192" height="17" rx="8" fill="url(#ev3-cue-pen)"/>
  <rect x="378" y="461" width="180" height="3.4" rx="2" fill="#ffffff" opacity="0.28"/>
  <rect x="374" y="458" width="64" height="17" rx="8" fill="#15130f"/>
  <rect x="430" y="458" width="8" height="17" fill="#b79a54"/>
  <path d="M566 458 q 16 8 0 17 z" fill="#cbb066"/>
  <path d="M566 462 q 10 4 0 9 z" fill="#f0e0a8" opacity="0.7"/>
</g>

<rect width="640" height="520" fill="url(#ev3-cue-vig)"/>
`,
  },

  /* The key sign-out sheet: hooks on the shop wall, one hook bare, and on the
     sheet a signature written round and slow where the others are all spikes. */
  c3_keylog: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-key-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#33342e"/><stop offset="0.55" stop-color="#1b1c18"/><stop offset="1" stop-color="#0a0a09"/>
  </linearGradient>
  <radialGradient id="ev3-key-pool" cx="0.22" cy="0.1" r="0.82">
    <stop offset="0" stop-color="#f5e2ac" stop-opacity="0.26"/><stop offset="1" stop-color="#f5e2ac" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-key-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5d5f52"/><stop offset="0.6" stop-color="#3d3f35"/><stop offset="1" stop-color="#232419"/>
  </linearGradient>
  <linearGradient id="ev3-key-paper" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f6efd9"/><stop offset="0.42" stop-color="#e3d7ba"/>
    <stop offset="0.8" stop-color="#c5b694" stop-opacity="1"/><stop offset="1" stop-color="#a2926f"/>
  </linearGradient>
  <linearGradient id="ev3-key-brass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f3dc9c"/><stop offset="0.34" stop-color="#c9a54f"/>
    <stop offset="0.7" stop-color="#8a6c2c"/><stop offset="1" stop-color="#4d3a16"/>
  </linearGradient>
  <linearGradient id="ev3-key-hook" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1f2225"/><stop offset="0.35" stop-color="#b3bac0"/>
    <stop offset="0.7" stop-color="#5b6167"/><stop offset="1" stop-color="#15181a"/>
  </linearGradient>
  <linearGradient id="ev3-key-tag" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d9cfae"/><stop offset="1" stop-color="#a3977a"/>
  </linearGradient>
  <filter id="ev3-key-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev3-key-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-key-bg)"/>
<rect width="640" height="520" fill="url(#ev3-key-wall)" opacity="0.55"/>
<rect width="640" height="520" fill="url(#ev3-key-pool)"/>
<!-- painted board planks -->
<g stroke="#20211a" stroke-width="2" opacity="0.5">
  <path d="M0 96 h640"/><path d="M0 300 h640"/><path d="M0 470 h640"/>
</g>
<g stroke="#6f7161" stroke-width="1" opacity="0.18">
  <path d="M0 100 h640"/><path d="M0 304 h640"/><path d="M0 474 h640"/>
</g>

<!-- key rail across the top with hooks -->
<rect x="52" y="58" width="536" height="20" rx="4" fill="#2c2e28"/>
<rect x="52" y="58" width="536" height="5" fill="#8e9184" opacity="0.5"/>
<rect x="52" y="72" width="536" height="6" fill="#000" opacity="0.45"/>
<g>
  <path d="M108 78 q 0 22 -13 24" fill="none" stroke="url(#ev3-key-hook)" stroke-width="7" stroke-linecap="round"/>
  <path d="M212 78 q 0 22 -13 24" fill="none" stroke="url(#ev3-key-hook)" stroke-width="7" stroke-linecap="round"/>
  <path d="M316 78 q 0 22 -13 24" fill="none" stroke="url(#ev3-key-hook)" stroke-width="7" stroke-linecap="round"/>
  <path d="M420 78 q 0 22 -13 24" fill="none" stroke="url(#ev3-key-hook)" stroke-width="7" stroke-linecap="round"/>
  <path d="M524 78 q 0 22 -13 24" fill="none" stroke="url(#ev3-key-hook)" stroke-width="7" stroke-linecap="round"/>
</g>
<!-- keys hanging: brass, with fibre tags -->
<g>
  <ellipse cx="99" cy="112" rx="13" ry="13" fill="none" stroke="url(#ev3-key-brass)" stroke-width="6"/>
  <rect x="95" y="122" width="8" height="52" fill="url(#ev3-key-brass)"/>
  <rect x="95" y="156" width="16" height="7" fill="url(#ev3-key-brass)"/>
  <rect x="95" y="168" width="12" height="6" fill="url(#ev3-key-brass)"/>
  <rect x="96" y="124" width="2.4" height="48" fill="#ffeec0" opacity="0.5"/>
  <path d="M110 118 q 20 16 14 40" fill="none" stroke="#9a8f74" stroke-width="1.6"/>
  <rect x="112" y="156" width="42" height="26" rx="3" fill="url(#ev3-key-tag)" transform="rotate(7 133 169)"/>
  <g stroke="#6a6047" stroke-width="1.5" opacity="0.6" transform="rotate(7 133 169)">
    <path d="M118 166 h 30" stroke-dasharray="8 4 12"/><path d="M118 174 h 22" stroke-dasharray="6 4 8"/>
  </g>
</g>
<g>
  <ellipse cx="203" cy="112" rx="13" ry="13" fill="none" stroke="url(#ev3-key-brass)" stroke-width="6"/>
  <rect x="199" y="122" width="8" height="48" fill="url(#ev3-key-brass)"/>
  <rect x="199" y="152" width="15" height="7" fill="url(#ev3-key-brass)"/>
  <rect x="200" y="124" width="2.2" height="44" fill="#ffeec0" opacity="0.45"/>
</g>
<!-- THE EMPTY HOOK: nothing hanging, only the bright unfaded paint ghost -->
<rect x="286" y="100" width="38" height="78" rx="4" fill="#8e9182" opacity="0.13"/>
<rect x="286" y="100" width="38" height="78" rx="4" fill="none" stroke="#9aa08d" stroke-width="1.2" opacity="0.22" stroke-dasharray="6 5"/>
<g>
  <ellipse cx="407" cy="112" rx="13" ry="13" fill="none" stroke="url(#ev3-key-brass)" stroke-width="6"/>
  <rect x="403" y="122" width="8" height="50" fill="url(#ev3-key-brass)"/>
  <rect x="403" y="155" width="15" height="7" fill="url(#ev3-key-brass)"/>
  <rect x="404" y="124" width="2.2" height="46" fill="#ffeec0" opacity="0.4"/>
</g>
<g>
  <ellipse cx="511" cy="112" rx="13" ry="13" fill="none" stroke="url(#ev3-key-brass)" stroke-width="6" opacity="0.85"/>
  <rect x="507" y="122" width="8" height="46" fill="url(#ev3-key-brass)" opacity="0.85"/>
  <rect x="507" y="150" width="14" height="7" fill="url(#ev3-key-brass)" opacity="0.85"/>
</g>

<!-- the log sheet on its board, hung below the rail -->
<ellipse cx="322" cy="450" rx="200" ry="24" fill="#000" opacity="0.55" filter="url(#ev3-key-soft)"/>
<g transform="rotate(-2 320 320)">
  <rect x="98" y="182" width="446" height="258" rx="4" fill="#241d13" opacity="0.65"/>
  <rect x="94" y="178" width="446" height="258" rx="4" fill="#5b4830"/>
  <path d="M104 190 L534 190 L536 428 L106 430 Z" fill="url(#ev3-key-paper)"/>
  <path d="M104 190 L534 190 L534 200 L104 200 Z" fill="#ffffff" opacity="0.2"/>
  <!-- printed rules -->
  <path d="M104 224 L534 224" stroke="#5c5340" stroke-width="2.2" opacity="0.65"/>
  <g stroke="#8d8266" stroke-width="1" opacity="0.55">
    <path d="M108 254 L532 254"/><path d="M108 284 L532 284"/><path d="M108 314 L532 314"/>
    <path d="M108 344 L532 344"/><path d="M108 374 L532 374"/><path d="M108 404 L532 404"/>
  </g>
  <g stroke="#8d8266" stroke-width="1" opacity="0.5">
    <path d="M228 190 L228 428"/><path d="M320 190 L320 428"/><path d="M412 190 L412 428"/>
  </g>
  <g stroke="#4b4232" stroke-width="2.4" opacity="0.55">
    <path d="M124 210 h 66"/><path d="M244 210 h 52"/><path d="M336 210 h 46"/><path d="M428 210 h 74"/>
  </g>
  <!-- earlier entries: the engineer's hand, a cardiogram of spikes -->
  <g stroke="#20242f" stroke-width="2" fill="none" opacity="0.8" stroke-linecap="round">
    <path d="M118 246 h 92" stroke-dasharray="14 5 24 6 18"/>
    <path d="M238 246 h 62" stroke-dasharray="12 4 18"/>
    <path d="M330 246 h 66" stroke-dasharray="16 5 22"/>
  </g>
  <path d="M424 248 l 8 -18 l 6 22 l 7 -26 l 6 24 l 8 -20 l 6 22 l 9 -16 l 7 18 l 8 -14" fill="none" stroke="#1a1f2c" stroke-width="2.4" stroke-linecap="round"/>
  <g stroke="#20242f" stroke-width="2" fill="none" opacity="0.8" stroke-linecap="round">
    <path d="M118 276 h 88" stroke-dasharray="12 5 20 6 22"/>
    <path d="M238 276 h 58" stroke-dasharray="10 4 20"/>
    <path d="M330 276 h 70" stroke-dasharray="18 5 20"/>
  </g>
  <path d="M424 278 l 7 -20 l 7 24 l 6 -24 l 7 22 l 7 -18 l 7 20 l 8 -18 l 8 20 l 7 -12" fill="none" stroke="#1a1f2c" stroke-width="2.4" stroke-linecap="round"/>
  <g stroke="#20242f" stroke-width="2" fill="none" opacity="0.8" stroke-linecap="round">
    <path d="M118 306 h 94" stroke-dasharray="16 5 18 6 20"/>
    <path d="M238 306 h 60" stroke-dasharray="12 4 16"/>
    <path d="M330 306 h 62" stroke-dasharray="14 5 24"/>
  </g>
  <path d="M424 308 l 8 -19 l 6 23 l 7 -25 l 7 23 l 6 -19 l 8 21 l 8 -17 l 7 19 l 8 -13" fill="none" stroke="#1a1f2c" stroke-width="2.4" stroke-linecap="round"/>

  <!-- THE 6:15 ENTRY: same name, written round and slow, and a shade darker -->
  <rect x="108" y="318" width="424" height="30" fill="#c6b48a" opacity="0.3"/>
  <g stroke="#171c28" stroke-width="2.3" fill="none" opacity="0.9" stroke-linecap="round">
    <path d="M118 336 h 96" stroke-dasharray="16 5 26 6 16"/>
    <path d="M238 336 h 64" stroke-dasharray="14 4 20"/>
    <path d="M330 336 h 68" stroke-dasharray="18 5 26"/>
  </g>
  <path d="M424 340 q 6 -20 14 -4 q 6 14 12 -2 q 5 -14 11 0 q 5 14 12 -1 q 6 -13 12 1 q 4 10 10 -2" fill="none" stroke="#141926" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M424 340 q 6 -20 14 -4 q 6 14 12 -2" fill="none" stroke="#141926" stroke-width="1.2" opacity="0.5"/>
  <!-- the detective's own pencil ring around it -->
  <ellipse cx="466" cy="334" rx="58" ry="20" fill="none" stroke="#8d2a1c" stroke-width="2.6" opacity="0.75"/>
  <ellipse cx="466" cy="334" rx="61" ry="23" fill="none" stroke="#8d2a1c" stroke-width="1.4" opacity="0.4"/>

  <!-- later blank rows and an erasure -->
  <g stroke="#20242f" stroke-width="2" fill="none" opacity="0.7" stroke-linecap="round">
    <path d="M118 366 h 84" stroke-dasharray="14 5 22 6 12"/>
    <path d="M238 366 h 56" stroke-dasharray="10 4 18"/>
  </g>
  <ellipse cx="330" cy="366" rx="34" ry="10" fill="#efe6cc" opacity="0.6"/>
  <g stroke="#8a7f66" stroke-width="1.2" opacity="0.4">
    <path d="M304 362 q 26 8 52 -2"/><path d="M304 370 q 26 6 52 -4"/>
  </g>
  <!-- pencil resting on the sheet -->
  <g transform="rotate(11 300 412)">
    <rect x="196" y="404" width="206" height="13" rx="2" fill="#000" opacity="0.35" filter="url(#ev3-key-soft)"/>
    <rect x="192" y="400" width="206" height="13" rx="2" fill="#b8912f"/>
    <rect x="192" y="400" width="206" height="4" fill="#f0d47c" opacity="0.7"/>
    <rect x="192" y="409" width="206" height="4" fill="#6d5316" opacity="0.6"/>
    <path d="M398 400 l 26 6.5 l -26 6.5 z" fill="#e2c9a0"/>
    <path d="M418 404.6 l 8 1.9 l -8 1.9 z" fill="#2a2724"/>
    <rect x="176" y="400" width="16" height="13" fill="#9aa3a8"/>
    <rect x="166" y="401" width="12" height="11" rx="3" fill="#c4685c"/>
  </g>
  <!-- thumb grime at the sheet edge -->
  <g opacity="0.16" fill="none" stroke="#4a3f2c" stroke-width="1.2">
    <path d="M128 396 q 11 9 0 19"/><path d="M135 392 q 16 13 0 27"/><path d="M142 388 q 21 17 0 35"/>
  </g>
  <path d="M536 428 L502 430 L534 400 Z" fill="#ab9a78"/>
</g>

<rect width="640" height="520" fill="url(#ev3-key-vig)"/>
`,
  },

  /* The shadow board: every tool on its painted outline, and one outline
     holding nothing but paint and a clean rectangle of unfaded pegboard. */
  c3_tools: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-tol-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#3a4038"/><stop offset="0.55" stop-color="#1f231d"/><stop offset="1" stop-color="#0b0d0a"/>
  </linearGradient>
  <radialGradient id="ev3-tol-pool" cx="0.2" cy="0.1" r="0.85">
    <stop offset="0" stop-color="#ffeec0" stop-opacity="0.24"/><stop offset="1" stop-color="#ffeec0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-tol-board" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6d6a55"/><stop offset="0.5" stop-color="#4c4a3a"/><stop offset="1" stop-color="#2b2a20"/>
  </linearGradient>
  <pattern id="ev3-tol-peg" width="30" height="30" patternUnits="userSpaceOnUse">
    <circle cx="9" cy="9" r="3.2" fill="#8e8b71" opacity="0.3"/><circle cx="8.6" cy="8.6" r="3" fill="#0a0b08"/>
    <circle cx="24" cy="24" r="3.2" fill="#8e8b71" opacity="0.26"/><circle cx="23.6" cy="23.6" r="3" fill="#0a0b08"/>
  </pattern>
  <linearGradient id="ev3-tol-steel" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e7edf1"/><stop offset="0.3" stop-color="#9aa2a8"/>
    <stop offset="0.62" stop-color="#4f555b"/><stop offset="1" stop-color="#22262a"/>
  </linearGradient>
  <linearGradient id="ev3-tol-red" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d05a44"/><stop offset="0.35" stop-color="#9b3323"/><stop offset="1" stop-color="#4a1610"/>
  </linearGradient>
  <linearGradient id="ev3-tol-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c9a05c"/><stop offset="0.4" stop-color="#96702f"/><stop offset="1" stop-color="#4d3616"/>
  </linearGradient>
  <linearGradient id="ev3-tol-bak" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a4634"/><stop offset="0.22" stop-color="#3a2a1c"/>
    <stop offset="0.65" stop-color="#1c130c"/><stop offset="1" stop-color="#2c2015"/>
  </linearGradient>
  <filter id="ev3-tol-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="6"/>
  </filter>
  <radialGradient id="ev3-tol-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-tol-bg)"/>
<rect x="16" y="16" width="608" height="488" rx="4" fill="url(#ev3-tol-board)"/>
<rect x="16" y="16" width="608" height="488" fill="url(#ev3-tol-peg)"/>
<rect width="640" height="520" fill="url(#ev3-tol-pool)"/>
<rect x="16" y="16" width="608" height="10" fill="#8b8870" opacity="0.35"/>
<rect x="16" y="16" width="10" height="488" fill="#8b8870" opacity="0.2"/>
<rect x="16" y="494" width="608" height="10" fill="#000" opacity="0.4"/>
<!-- grain and grime -->
<g stroke="#2a291f" stroke-width="1" opacity="0.35">
  <path d="M16 130 q 300 -8 608 4"/><path d="M16 300 q 300 -8 608 4"/><path d="M16 430 q 300 -8 608 4"/>
</g>
<g fill="#12130e" opacity="0.35">
  <ellipse cx="120" cy="470" rx="90" ry="24"/><ellipse cx="520" cy="460" rx="80" ry="20"/>
</g>

<!-- painted outlines (the shadows) -->
<g fill="none" stroke="#e8e2c4" stroke-width="3" opacity="0.55" stroke-linejoin="round">
  <path d="M74 62 q 14 -16 28 0 l 6 122 q -20 12 -40 0 z"/>
  <path d="M170 58 l 26 0 l 4 40 l -8 148 l -18 0 l -8 -148 z"/>
  <path d="M258 58 l 22 0 l 3 36 l -6 152 l -16 0 l -6 -152 z"/>
  <path d="M338 60 l 20 0 l 3 32 l -5 136 l -16 0 l -5 -136 z"/>
  <path d="M424 306 q 16 -20 34 -2 l 44 62 q -22 20 -46 6 z"/>
  <path d="M70 300 l 130 0 l 8 22 l -138 0 z"/>
  <path d="M232 300 q 26 -14 52 4 l 46 44 q -22 24 -52 8 z"/>
</g>

<!-- tools hanging on their outlines -->
<!-- long-nose pliers -->
<g>
  <path d="M76 66 q 12 -14 24 0 l 6 118 q -18 10 -34 0 z" fill="#000" opacity="0.4" filter="url(#ev3-tol-soft)"/>
  <path d="M78 108 l 8 -46 q 4 -10 10 0 l 6 46 z" fill="url(#ev3-tol-steel)"/>
  <path d="M82 108 l 4 -42 q 2 -6 5 0 l 3 42 z" fill="#f2f6f8" opacity="0.35"/>
  <circle cx="88" cy="112" r="7" fill="#5a6167"/><circle cx="88" cy="112" r="2.6" fill="#1a1d20"/>
  <path d="M78 118 q -6 40 -2 66 q 4 12 12 8 q 6 -4 4 -18 l -4 -56 z" fill="url(#ev3-tol-red)"/>
  <path d="M98 118 q 6 40 2 66 q -4 12 -12 8 q -6 -4 -4 -18 l 4 -56 z" fill="url(#ev3-tol-red)"/>
  <path d="M80 124 q -4 34 -1 58" fill="none" stroke="#e88f74" stroke-width="2.2" opacity="0.5"/>
  <g stroke="#4d1710" stroke-width="1.1" opacity="0.55">
    <path d="M78 144 h 24"/><path d="M78 158 h 24"/><path d="M79 172 h 23"/><path d="M80 186 h 22"/>
  </g>
</g>
<!-- two screwdrivers -->
<g>
  <rect x="176" y="60" width="16" height="4" fill="#000" opacity="0.4"/>
  <path d="M172 62 q 12 -8 24 0 l 4 40 q -16 8 -32 0 z" fill="url(#ev3-tol-bak)"/>
  <path d="M176 66 q 8 -5 16 0 l 2 32 q -10 5 -20 0 z" fill="#6a5138" opacity="0.35"/>
  <path d="M177 64 q 5 -3 10 0 l 1 34" fill="none" stroke="#c9a273" stroke-width="2.6" opacity="0.5"/>
  <rect x="178" y="102" width="12" height="130" fill="url(#ev3-tol-steel)"/>
  <rect x="180" y="102" width="3" height="130" fill="#ffffff" opacity="0.5"/>
  <path d="M178 232 l 12 0 l 4 14 l -20 0 z" fill="url(#ev3-tol-steel)"/>
</g>
<g>
  <path d="M260 62 q 11 -8 22 0 l 3 34 q -14 7 -28 0 z" fill="url(#ev3-tol-bak)"/>
  <path d="M262 64 q 5 -3 10 0 l 1 30" fill="none" stroke="#c9a273" stroke-width="2.4" opacity="0.45"/>
  <rect x="265" y="96" width="10" height="138" fill="url(#ev3-tol-steel)"/>
  <rect x="266.5" y="96" width="2.6" height="138" fill="#ffffff" opacity="0.45"/>
  <path d="M265 234 q 5 12 10 0 z" fill="#9aa2a8"/>
</g>
<!-- soldering iron on its hook, cord coiled -->
<g>
  <path d="M340 64 q 10 -8 18 0 l 2 30 q -12 7 -24 0 z" fill="url(#ev3-tol-bak)"/>
  <path d="M342 66 q 4 -3 8 0 l 1 26" fill="none" stroke="#c9a273" stroke-width="2.2" opacity="0.42"/>
  <rect x="344" y="94" width="10" height="96" fill="#8d7a55"/>
  <rect x="345.5" y="94" width="2.6" height="96" fill="#e0cda0" opacity="0.5"/>
  <path d="M344 190 l 10 0 l -2 30 l -6 0 z" fill="#b47a3a"/>
  <path d="M346 220 l 6 0 l -3 12 z" fill="#e0a45c"/>
  <path d="M358 70 q 34 12 22 44 q -12 30 12 46" fill="none" stroke="#2a241c" stroke-width="7" stroke-linecap="round"/>
  <path d="M358 70 q 34 12 22 44 q -12 30 12 46" fill="none" stroke="#4d443a" stroke-width="4" stroke-linecap="round"/>
  <g stroke="#241f18" stroke-width="1" opacity="0.6">
    <path d="M368 78 l 4 -5"/><path d="M378 92 l 5 -3"/><path d="M378 112 l 6 2"/><path d="M372 132 l 5 4"/><path d="M382 150 l 4 5"/>
  </g>
</g>
<!-- THE EMPTY OUTLINE: bright paint, unfaded board inside, no tool -->
<path d="M424 306 q 16 -20 34 -2 l 44 62 q -22 20 -46 6 z" fill="#8f8d72" opacity="0.28"/>
<path d="M424 306 q 16 -20 34 -2 l 44 62 q -22 20 -46 6 z" fill="none" stroke="#f6f0d2" stroke-width="4" opacity="0.9"/>
<path d="M424 306 q 16 -20 34 -2 l 44 62 q -22 20 -46 6 z" fill="none" stroke="#1a1b14" stroke-width="1.2" opacity="0.5"/>
<!-- the little nips outline detail: two jaws and two handles, drawn in paint -->
<g fill="none" stroke="#f6f0d2" stroke-width="2.4" opacity="0.7">
  <path d="M434 314 l 16 20"/><path d="M448 308 l 12 24"/>
  <path d="M456 336 l 34 26"/><path d="M450 344 l 32 24"/>
</g>
<!-- the bare hook it hung on, a scratch of bright metal -->
<path d="M441 300 q 0 -14 -10 -16" fill="none" stroke="url(#ev3-tol-steel)" stroke-width="5" stroke-linecap="round"/>
<circle cx="431" cy="284" r="4" fill="#c8ced3"/>
<!-- claw hammer on the lower left outline -->
<g>
  <rect x="72" y="302" width="132" height="20" rx="5" fill="#000" opacity="0.4" filter="url(#ev3-tol-soft)"/>
  <rect x="96" y="300" width="108" height="16" rx="6" fill="url(#ev3-tol-wood)"/>
  <rect x="96" y="302" width="108" height="4" rx="2" fill="#e8c184" opacity="0.5"/>
  <g stroke="#6b4c1d" stroke-width="0.9" opacity="0.45">
    <path d="M112 300 q 20 8 0 16"/><path d="M136 300 q 22 8 0 16"/><path d="M164 300 q 20 8 0 16"/>
  </g>
  <path d="M96 296 q -22 -6 -30 6 q -6 8 2 18 q 10 10 28 4 z" fill="url(#ev3-tol-steel)"/>
  <path d="M66 302 q -12 8 -6 20 q 4 8 12 4 q -8 -12 -2 -22 z" fill="#3e444a"/>
  <path d="M92 296 q -18 -4 -24 6" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.5"/>
</g>
<!-- side-cutters on the lower middle outline -->
<g>
  <path d="M236 302 q 24 -12 48 4 l 42 40 q -20 20 -46 6 z" fill="#000" opacity="0.35" filter="url(#ev3-tol-soft)"/>
  <path d="M240 306 q 12 -10 24 0 l 22 22 l -18 16 z" fill="url(#ev3-tol-steel)"/>
  <path d="M244 310 q 8 -6 14 0 l 16 16 l -12 10 z" fill="#f0f4f7" opacity="0.3"/>
  <circle cx="276" cy="336" r="7" fill="#5a6167"/><circle cx="276" cy="336" r="2.6" fill="#191c1f"/>
  <path d="M282 340 l 42 20 q 10 6 4 14 q -6 8 -16 2 l -38 -24 z" fill="url(#ev3-tol-red)"/>
  <path d="M272 348 l 40 26 q 8 6 2 13 q -8 7 -16 0 l -36 -28 z" fill="url(#ev3-tol-red)"/>
  <path d="M286 344 l 36 18" fill="none" stroke="#ec9c80" stroke-width="2.2" opacity="0.45"/>
  <g stroke="#4d1710" stroke-width="1.1" opacity="0.5">
    <path d="M294 348 l -6 8"/><path d="M306 355 l -6 8"/><path d="M316 362 l -6 8"/>
  </g>
</g>
<!-- solder spool and a jar of screws on a small shelf -->
<rect x="520" y="150" width="96" height="10" rx="3" fill="#3d3a2c"/>
<rect x="520" y="150" width="96" height="3" fill="#8d8a70" opacity="0.5"/>
<g>
  <ellipse cx="556" cy="124" rx="30" ry="26" fill="#5c6167"/>
  <ellipse cx="556" cy="124" rx="30" ry="26" fill="none" stroke="#2a2e32" stroke-width="2"/>
  <g stroke="#98a0a6" stroke-width="2" opacity="0.7" fill="none">
    <ellipse cx="556" cy="124" rx="25" ry="21"/><ellipse cx="556" cy="124" rx="19" ry="16"/><ellipse cx="556" cy="124" rx="13" ry="11"/>
  </g>
  <ellipse cx="548" cy="114" rx="8" ry="5" fill="#e3e9ed" opacity="0.35"/>
  <circle cx="556" cy="124" r="7" fill="#241f18"/>
  <path d="M584 132 q 14 10 8 18" fill="none" stroke="#b9c1c6" stroke-width="2.4"/>
</g>
<!-- dust motes in the light -->
<g fill="#f2e6c2" opacity="0.18">
  <circle cx="392" cy="180" r="1.6"/><circle cx="480" cy="250" r="2.2"/>
</g>

<rect width="640" height="520" fill="url(#ev3-tol-vig)"/>
`,
  },

  /* The missing nips, found in the thunder-sheet crate: felt, rope, and a
     pair of jaws still copper-bright from cutting something an hour ago. */
  c3_cutters: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-cut-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#3b3226"/><stop offset="0.55" stop-color="#1c1811"/><stop offset="1" stop-color="#090807"/>
  </linearGradient>
  <radialGradient id="ev3-cut-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe9b6" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b6" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-cut-crate" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a6c42"/><stop offset="0.35" stop-color="#5d472a"/><stop offset="1" stop-color="#2c2114"/>
  </linearGradient>
  <linearGradient id="ev3-cut-felt" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6e6a5e"/><stop offset="0.45" stop-color="#4a4740"/><stop offset="1" stop-color="#232120"/>
  </linearGradient>
  <linearGradient id="ev3-cut-rope" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#cbaa6e"/><stop offset="0.4" stop-color="#9a7c46"/><stop offset="1" stop-color="#4f3d20"/>
  </linearGradient>
  <linearGradient id="ev3-cut-sheet" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#4e565c"/><stop offset="0.28" stop-color="#98a3aa"/>
    <stop offset="0.5" stop-color="#5d666d"/><stop offset="0.78" stop-color="#aab4ba"/><stop offset="1" stop-color="#333a40"/>
  </linearGradient>
  <linearGradient id="ev3-cut-steel" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f3f7fa"/><stop offset="0.28" stop-color="#a5adb4"/>
    <stop offset="0.58" stop-color="#565d64"/><stop offset="1" stop-color="#1d2126"/>
  </linearGradient>
  <linearGradient id="ev3-cut-grip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d75f45"/><stop offset="0.3" stop-color="#a13525"/>
    <stop offset="0.75" stop-color="#5c1a12"/><stop offset="1" stop-color="#31100c"/>
  </linearGradient>
  <linearGradient id="ev3-cut-cu" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#ffeec4"/><stop offset="0.35" stop-color="#f0ab5c"/><stop offset="1" stop-color="#9d5b26"/>
  </linearGradient>
  <filter id="ev3-cut-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-cut-vig" cx="0.44" cy="0.42" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-cut-bg)"/>
<rect width="640" height="520" fill="url(#ev3-cut-pool)"/>

<!-- crate walls, looking down into the box -->
<path d="M0 0 L640 0 L640 96 L0 128 Z" fill="url(#ev3-cut-crate)"/>
<path d="M0 128 L640 96 L640 106 L0 138 Z" fill="#1a1409" opacity="0.7"/>
<path d="M0 0 L96 0 L134 520 L0 520 Z" fill="#3d2e1b"/>
<path d="M96 0 L134 520 L152 520 L110 0 Z" fill="#12100a" opacity="0.65"/>
<path d="M552 0 L640 0 L640 520 L510 520 Z" fill="#332616" opacity="0.85"/>
<path d="M552 0 L510 520 L494 520 L536 0 Z" fill="#12100a" opacity="0.6"/>
<g stroke="#7a6038" stroke-width="1" opacity="0.22">
  <path d="M0 40 L640 12"/><path d="M0 78 L640 50"/>
  <path d="M28 0 L58 520"/><path d="M60 0 L92 520"/>
</g>
<!-- crate interior floor, in shadow -->
<rect y="128" width="640" height="392" fill="#191510"/>
<rect y="128" width="640" height="392" fill="url(#ev3-cut-pool)" opacity="0.5"/>

<!-- the thunder sheet leaning at the back -->
<path d="M150 118 L520 96 L534 232 L160 258 Z" fill="url(#ev3-cut-sheet)"/>
<g stroke="#0f1316" stroke-width="1.4" opacity="0.35">
  <path d="M186 114 L196 254"/><path d="M262 110 L270 248"/><path d="M340 106 L346 244"/><path d="M420 102 L424 240"/>
</g>
<g stroke="#dce4e9" stroke-width="2" opacity="0.3">
  <path d="M170 138 L520 116"/><path d="M164 190 L528 168"/>
</g>
<path d="M150 118 L520 96 L520 104 L150 126 Z" fill="#e6eef3" opacity="0.4"/>
<path d="M160 258 L534 232 L534 244 L162 270 Z" fill="#0a0d10" opacity="0.75"/>

<!-- felt padding, heaped in folds -->
<path d="M96 300 Q 200 240 320 268 Q 460 300 560 262 L580 520 L110 520 Z" fill="url(#ev3-cut-felt)"/>
<path d="M96 300 Q 200 240 320 268 Q 460 300 560 262 L562 288 Q 456 322 318 292 Q 198 266 100 326 Z" fill="#7e7a6c" opacity="0.28"/>
<g fill="none" stroke="#151412" stroke-width="3" opacity="0.4">
  <path d="M150 320 Q 210 388 176 470"/><path d="M282 296 Q 320 380 296 480"/>
  <path d="M410 306 Q 452 384 434 496"/><path d="M508 292 Q 540 366 528 470"/>
</g>
<g fill="none" stroke="#8b8677" stroke-width="1.6" opacity="0.22">
  <path d="M164 326 Q 224 392 190 474"/><path d="M296 302 Q 334 384 310 484"/><path d="M424 312 Q 466 388 448 498"/>
</g>
<g fill="#9c9583" opacity="0.1">
  <ellipse cx="240" cy="360" rx="70" ry="16"/><ellipse cx="470" cy="400" rx="60" ry="14"/>
</g>

<!-- coiled rope handle, shoved to one side -->
<g>
  <ellipse cx="140" cy="418" rx="86" ry="46" fill="#000" opacity="0.45" filter="url(#ev3-cut-soft)"/>
  <ellipse cx="132" cy="408" rx="82" ry="42" fill="none" stroke="url(#ev3-cut-rope)" stroke-width="20"/>
  <ellipse cx="132" cy="408" rx="58" ry="28" fill="none" stroke="url(#ev3-cut-rope)" stroke-width="18"/>
  <g stroke="#5b451f" stroke-width="1.5" opacity="0.6">
    <path d="M62 396 l 8 -8"/><path d="M78 378 l 10 -6"/><path d="M104 368 l 8 -8"/><path d="M136 364 l 6 -9"/>
    <path d="M170 372 l 4 -10"/><path d="M198 392 l 0 -11"/><path d="M204 424 l -6 -9"/><path d="M182 444 l -8 -8"/>
    <path d="M146 452 l -6 -10"/><path d="M104 448 l -4 -10"/><path d="M74 430 l -1 -11"/>
  </g>
  <path d="M62 398 q 60 -42 138 -18" fill="none" stroke="#e5c68a" stroke-width="3" opacity="0.35"/>
</g>

<!-- THE NIPS: small flush cutters, dropped in among the felt -->
<g transform="rotate(-19 396 372)">
  <path d="M300 350 L516 350 L516 408 L300 408 Z" fill="#000" opacity="0.4" filter="url(#ev3-cut-soft)"/>
  <!-- lower handle -->
  <path d="M382 372 L500 386 q 22 4 20 18 q -2 14 -24 10 L376 388 Z" fill="url(#ev3-cut-grip)"/>
  <path d="M392 378 L496 391 q 14 2 13 9" fill="none" stroke="#f0917a" stroke-width="3" opacity="0.42"/>
  <g stroke="#48120c" stroke-width="1.4" opacity="0.55">
    <path d="M410 378 l -3 12"/><path d="M432 381 l -3 12"/><path d="M454 384 l -3 12"/><path d="M476 387 l -3 12"/>
  </g>
  <!-- upper handle -->
  <path d="M382 366 L502 348 q 22 -4 24 10 q 2 14 -20 18 L378 382 Z" fill="url(#ev3-cut-grip)"/>
  <path d="M392 366 L498 352 q 16 -2 17 6" fill="none" stroke="#f6a68d" stroke-width="3.4" opacity="0.5"/>
  <g stroke="#48120c" stroke-width="1.4" opacity="0.5">
    <path d="M412 366 l 2 12"/><path d="M434 363 l 2 12"/><path d="M456 360 l 2 12"/><path d="M478 357 l 2 12"/>
  </g>
  <!-- head and jaws -->
  <path d="M384 358 q 18 -6 26 6 q 6 12 -4 20 q -14 10 -28 -2 z" fill="url(#ev3-cut-steel)"/>
  <circle cx="392" cy="376" r="6.4" fill="#4c5359"/><circle cx="392" cy="376" r="2.4" fill="#171a1d"/>
  <path d="M386 356 L332 336 q -12 -4 -12 4 q 0 8 12 10 l 54 14 z" fill="url(#ev3-cut-steel)"/>
  <path d="M386 392 L332 378 q -12 -2 -12 6 q 0 8 12 6 l 54 -12 z" fill="url(#ev3-cut-steel)"/>
  <path d="M382 360 L336 344 q -8 -2 -8 2" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.55"/>
  <path d="M382 388 L336 376" fill="none" stroke="#ffffff" stroke-width="1.8" opacity="0.3"/>
  <!-- the cutting edges, wiped bright by fresh copper -->
  <path d="M320 340 L360 350 L358 356 L318 346 Z" fill="url(#ev3-cut-cu)"/>
  <path d="M320 384 L360 374 L358 368 L318 378 Z" fill="url(#ev3-cut-cu)"/>
  <path d="M320 341 L358 351" fill="none" stroke="#fff3d8" stroke-width="1.8" opacity="0.9"/>
  <path d="M320 383 L358 373" fill="none" stroke="#fff3d8" stroke-width="1.4" opacity="0.7"/>
  <ellipse cx="322" cy="362" rx="5" ry="12" fill="url(#ev3-cut-cu)" opacity="0.8"/>
</g>

<!-- copper crumbs and swarf shaken into the felt -->
<g fill="#e2a45c">
  <ellipse cx="268" cy="440" rx="5" ry="2.4" opacity="0.9" transform="rotate(24 268 440)"/>
  <ellipse cx="300" cy="464" rx="4" ry="1.8" opacity="0.8" transform="rotate(-40 300 464)"/>
  <ellipse cx="356" cy="452" rx="6" ry="2" opacity="0.85" transform="rotate(12 356 452)"/>
  <ellipse cx="422" cy="470" rx="3.4" ry="1.6" opacity="0.7" transform="rotate(-18 422 470)"/>
</g>
<path d="M258 470 q 16 -10 34 -4" fill="none" stroke="#c98a44" stroke-width="2.4" opacity="0.6" stroke-linecap="round"/>
<g fill="#efe3c4" opacity="0.14">
  <circle cx="196" cy="200" r="2"/><circle cx="470" cy="180" r="1.7"/><circle cx="560" cy="330" r="2.1"/>
</g>

<rect width="640" height="520" fill="url(#ev3-cut-vig)"/>
`,
  },

  /* The Orchard Farm file: 1927 newsprint gone the colour of tea, a four-line
     wire item from 1939 clipped behind it, and one red-pencil word beneath. */
  c3_orchard: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-orc-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#332920"/><stop offset="0.55" stop-color="#191410"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev3-orc-pool" cx="0.22" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe6ad" stop-opacity="0.28"/><stop offset="1" stop-color="#ffe6ad" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-orc-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4a3722"/><stop offset="0.55" stop-color="#2e2317"/><stop offset="1" stop-color="#171109"/>
  </linearGradient>
  <linearGradient id="ev3-orc-folder" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#d8b775"/><stop offset="0.45" stop-color="#bb9a5c"/>
    <stop offset="0.82" stop-color="#93763f"/><stop offset="1" stop-color="#6b5529"/>
  </linearGradient>
  <linearGradient id="ev3-orc-news" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#e5dcc0"/><stop offset="0.4" stop-color="#d3c49f"/>
    <stop offset="0.78" stop-color="#b6a37a"/><stop offset="1" stop-color="#8f7c56"/>
  </linearGradient>
  <linearGradient id="ev3-orc-slip" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f2ecd6"/><stop offset="0.55" stop-color="#ddd2b4"/><stop offset="1" stop-color="#a99b78"/>
  </linearGradient>
  <linearGradient id="ev3-orc-red" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d4604a"/><stop offset="0.35" stop-color="#9e2f21"/><stop offset="1" stop-color="#4a130d"/>
  </linearGradient>
  <linearGradient id="ev3-orc-clip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eef2f5"/><stop offset="0.4" stop-color="#8e969c"/><stop offset="1" stop-color="#2b3034"/>
  </linearGradient>
  <filter id="ev3-orc-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-orc-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-orc-bg)"/>
<rect width="640" height="520" fill="url(#ev3-orc-desk)" opacity="0.85"/>
<rect width="640" height="520" fill="url(#ev3-orc-pool)"/>
<g stroke="#6a5030" stroke-width="1" opacity="0.16">
  <path d="M0 96 q 320 -12 640 6"/><path d="M0 246 q 320 -12 640 6"/><path d="M0 400 q 320 -12 640 6"/>
</g>
<ellipse cx="330" cy="462" rx="250" ry="34" fill="#000" opacity="0.6" filter="url(#ev3-orc-soft)"/>

<!-- the manila folder, opened -->
<g transform="rotate(-3 320 280)">
  <path d="M60 96 L586 82 L594 452 L66 464 Z" fill="url(#ev3-orc-folder)"/>
  <path d="M60 96 L586 82 L586 94 L60 108 Z" fill="#f0d9a4" opacity="0.5"/>
  <path d="M66 464 L594 452 L594 462 L66 474 Z" fill="#3d3018" opacity="0.6"/>
  <path d="M322 88 L328 458" fill="none" stroke="#8f7440" stroke-width="4" opacity="0.55"/>
  <path d="M326 88 L332 458" fill="none" stroke="#e2c894" stroke-width="1.6" opacity="0.4"/>
  <!-- index tab -->
  <path d="M400 82 L500 79 L502 60 L402 63 Z" fill="#c9a75f"/>
  <path d="M402 63 L500 60 L500 66 L402 69 Z" fill="#eed9a6" opacity="0.6"/>
  <g stroke="#4a3a1c" stroke-width="2.6" opacity="0.6">
    <path d="M414 72 h 30" stroke-dasharray="12 5 10"/><path d="M452 71 h 36" stroke-dasharray="16 5 12"/>
  </g>
  <!-- brass fastener -->
  <rect x="150" y="104" width="42" height="9" rx="3" fill="#b6912f"/>
  <rect x="150" y="104" width="42" height="3" rx="1.5" fill="#f0d68c" opacity="0.7"/>
  <path d="M164 113 q 4 22 -6 34" fill="none" stroke="#b6912f" stroke-width="5"/>
  <path d="M178 113 q -2 24 8 34" fill="none" stroke="#9c7a24" stroke-width="5"/>

  <!-- 1927 newsprint page, pasted in on the left -->
  <path d="M84 124 L306 116 L312 438 L90 446 Z" fill="#241c10" opacity="0.4"/>
  <path d="M80 120 L302 112 L308 434 L86 442 Z" fill="url(#ev3-orc-news)"/>
  <path d="M80 120 L302 112 L302 122 L80 130 Z" fill="#ffffff" opacity="0.2"/>
  <!-- masthead rule and headline blocks -->
  <path d="M88 148 L296 141" stroke="#4b402b" stroke-width="3" opacity="0.7"/>
  <path d="M88 154 L296 147" stroke="#4b402b" stroke-width="1.2" opacity="0.5"/>
  <g stroke="#241e14" stroke-width="9" opacity="0.82" stroke-linecap="butt">
    <path d="M92 176 h 200" stroke-dasharray="46 9 62 10 54"/>
    <path d="M92 198 h 168" stroke-dasharray="38 9 50 10 46"/>
  </g>
  <g stroke="#3a3222" stroke-width="4" opacity="0.6">
    <path d="M92 220 h 132" stroke-dasharray="26 7 34 8 30"/>
  </g>
  <path d="M88 236 L296 229" stroke="#4b402b" stroke-width="1.4" opacity="0.5"/>
  <!-- two columns of body type, with a column rule between -->
  <path d="M194 240 L198 428" stroke="#6b5f45" stroke-width="1" opacity="0.5"/>
  <g stroke="#463c29" stroke-width="2.1" opacity="0.62" stroke-linecap="butt">
    <path d="M90 254 h 96" stroke-dasharray="18 4 26 5 14 4 20"/>
    <path d="M90 268 h 96" stroke-dasharray="22 4 16 5 30 4 12"/>
    <path d="M90 282 h 96" stroke-dasharray="14 4 32 5 18 4 22"/>
    <path d="M90 296 h 96" stroke-dasharray="26 4 20 5 22 4 16"/>
    <path d="M91 310 h 95" stroke-dasharray="16 4 28 5 24 4 14"/>
    <path d="M91 324 h 95" stroke-dasharray="24 4 18 5 16 4 30"/>
    <path d="M91 338 h 95" stroke-dasharray="20 4 24 5 28 4 12"/>
    <path d="M91 352 h 95" stroke-dasharray="18 4 30 5 14 4 24"/>
    <path d="M92 366 h 94" stroke-dasharray="28 4 16 5 22 4 18"/>
    <path d="M92 380 h 94" stroke-dasharray="14 4 26 5 30 4 14"/>
    <path d="M92 394 h 62" stroke-dasharray="20 4 18 5 14"/>
    <path d="M206 252 h 94" stroke-dasharray="22 4 18 5 26 4 16"/>
    <path d="M206 266 h 94" stroke-dasharray="16 4 30 5 14 4 24"/>
    <path d="M206 280 h 94" stroke-dasharray="28 4 14 5 24 4 18"/>
    <path d="M206 294 h 94" stroke-dasharray="18 4 24 5 20 4 22"/>
    <path d="M207 308 h 93" stroke-dasharray="24 4 20 5 16 4 28"/>
    <path d="M207 322 h 93" stroke-dasharray="14 4 28 5 22 4 20"/>
    <path d="M207 336 h 93" stroke-dasharray="26 4 16 5 30 4 12"/>
    <path d="M207 350 h 93" stroke-dasharray="20 4 22 5 18 4 26"/>
    <path d="M208 364 h 92" stroke-dasharray="16 4 26 5 28 4 14"/>
    <path d="M208 378 h 92" stroke-dasharray="30 4 14 5 20 4 22"/>
    <path d="M208 392 h 74" stroke-dasharray="18 4 24 5 16"/>
  </g>
  <!-- foxing stains and a crease across the newsprint -->
  <g fill="#8d6d3a" opacity="0.16">
    <ellipse cx="132" cy="330" rx="30" ry="18"/><ellipse cx="266" cy="200" rx="22" ry="14"/>
    <ellipse cx="180" cy="418" rx="40" ry="12"/>
  </g>
  <path d="M80 300 L306 292" stroke="#8a7550" stroke-width="1.6" opacity="0.4"/>
  <path d="M80 303 L306 295" stroke="#f5eed6" stroke-width="1.2" opacity="0.3"/>

  <!-- the 1939 wire slip, clipped on the right leaf -->
  <path d="M352 168 L562 160 L570 306 L360 314 Z" fill="#241c10" opacity="0.4"/>
  <path d="M348 164 L558 156 L566 302 L356 310 Z" fill="url(#ev3-orc-slip)"/>
  <path d="M348 164 L558 156 L558 166 L348 174 Z" fill="#ffffff" opacity="0.28"/>
  <path d="M356 190 L556 183" stroke="#5a5138" stroke-width="2.4" opacity="0.6"/>
  <g stroke="#3b3423" stroke-width="2.6" opacity="0.78" stroke-linecap="butt">
    <path d="M358 212 h 190" stroke-dasharray="34 6 46 7 40 6 44"/>
    <path d="M358 234 h 190" stroke-dasharray="42 6 30 7 52 6 36"/>
    <path d="M358 256 h 190" stroke-dasharray="28 6 50 7 34 6 48"/>
    <path d="M358 278 h 124" stroke-dasharray="38 6 42 7 26"/>
  </g>
  <path d="M566 302 L534 304 L564 276 Z" fill="#b0a17c"/>
  <!-- paper clip holding it -->
  <g transform="translate(424 142) rotate(-6)" fill="none" stroke="url(#ev3-orc-clip)" stroke-width="3.6" stroke-linecap="round">
    <path d="M0 0 V30 A7 7 0 0 0 14 30 V-8 A9 9 0 0 1 32 -8 V26 A6 6 0 0 1 20 26 V2"/>
  </g>

  <!-- HERRICK'S RED PENCIL: one word, twice underlined, pressed hard -->
  <g stroke="url(#ev3-orc-red)" stroke-width="7" stroke-linecap="round" fill="none">
    <path d="M372 356 c 6 -22 14 -6 17 4 c 6 -24 15 -8 18 4 c 7 -20 15 -4 19 6 c 8 -18 16 -6 20 4 c 7 -16 15 -6 19 2"/>
  </g>
  <path d="M368 380 L494 372" stroke="#9e2f21" stroke-width="5" opacity="0.9" stroke-linecap="round"/>
  <path d="M370 392 L488 384" stroke="#9e2f21" stroke-width="4" opacity="0.8" stroke-linecap="round"/>
  <path d="M374 352 c 6 -20 13 -5 16 4" fill="none" stroke="#e8836a" stroke-width="2" opacity="0.5"/>
  <!-- the red pencil itself, laid across the file -->
  <g transform="rotate(13 470 424)">
    <rect x="368" y="418" width="196" height="15" rx="2" fill="#000" opacity="0.35" filter="url(#ev3-orc-soft)"/>
    <rect x="364" y="414" width="196" height="15" rx="2" fill="url(#ev3-orc-red)"/>
    <rect x="364" y="415" width="196" height="4" rx="2" fill="#f0a08a" opacity="0.5"/>
    <path d="M364 414 l -28 7.5 l 28 7.5 z" fill="#e0c6a0"/>
    <path d="M348 419.5 l -10 2 l 10 2 z" fill="#8e2418"/>
    <rect x="556" y="414" width="8" height="15" fill="#7d2016"/>
  </g>
</g>

<rect width="640" height="520" fill="url(#ev3-orc-vig)"/>
`,
  },

  /* The letter kept seven years: soft as cloth at the folds, fountain-pen ink,
     and a signature of two initials pressed hard enough to emboss the sheet. */
  c3_letter: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-let-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2f2b24"/><stop offset="0.55" stop-color="#171410"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev3-let-pool" cx="0.22" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffe9bb" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9bb" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-let-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#42311f"/><stop offset="0.55" stop-color="#2a2015"/><stop offset="1" stop-color="#140f0a"/>
  </linearGradient>
  <linearGradient id="ev3-let-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#f6f0dc"/><stop offset="0.32" stop-color="#e9e0c6"/>
    <stop offset="0.66" stop-color="#d5c9a8"/><stop offset="1" stop-color="#a89a78"/>
  </linearGradient>
  <linearGradient id="ev3-let-env" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#cfc0a0"/><stop offset="0.5" stop-color="#b3a382"/><stop offset="1" stop-color="#7c6f53"/>
  </linearGradient>
  <linearGradient id="ev3-let-fold" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7c705a" stop-opacity="0.55"/><stop offset="0.5" stop-color="#7c705a" stop-opacity="0"/>
    <stop offset="0.52" stop-color="#fffaea" stop-opacity="0.5"/><stop offset="1" stop-color="#fffaea" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ev3-let-pen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5b5a58"/><stop offset="0.22" stop-color="#1d1c1b"/>
    <stop offset="0.6" stop-color="#0b0b0a"/><stop offset="1" stop-color="#2b2a28"/>
  </linearGradient>
  <linearGradient id="ev3-let-nib" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f7e2a8"/><stop offset="0.45" stop-color="#c9a94f"/><stop offset="1" stop-color="#8a6c26"/>
  </linearGradient>
  <filter id="ev3-let-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-let-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-let-bg)"/>
<rect width="640" height="520" fill="url(#ev3-let-desk)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-let-pool)"/>
<g stroke="#6a5030" stroke-width="1" opacity="0.14">
  <path d="M0 120 q 320 -12 640 6"/><path d="M0 300 q 320 -12 640 6"/><path d="M0 456 q 320 -12 640 6"/>
</g>

<!-- the envelope it lived in, behind and to the right -->
<g transform="rotate(7 470 150)">
  <path d="M330 74 L604 62 L612 214 L338 226 Z" fill="#1c150d" opacity="0.5"/>
  <path d="M326 70 L600 58 L608 210 L334 222 Z" fill="url(#ev3-let-env)"/>
  <path d="M326 70 L600 58 L470 156 Z" fill="#c4b491"/>
  <path d="M326 70 L600 58 L470 156 Z" fill="none" stroke="#8b7d5e" stroke-width="1.4"/>
  <path d="M326 70 L600 58 L600 66 L326 78 Z" fill="#ffffff" opacity="0.25"/>
  <!-- postmark: a ring of ticks, no letters -->
  <circle cx="546" cy="102" r="30" fill="none" stroke="#4b4536" stroke-width="2.4" opacity="0.55"/>
  <circle cx="546" cy="102" r="22" fill="none" stroke="#4b4536" stroke-width="1.4" opacity="0.4"/>
  <g stroke="#4b4536" stroke-width="2" opacity="0.45">
    <path d="M524 96 h 44"/><path d="M526 108 h 40"/><path d="M530 116 h 32"/>
  </g>
  <rect x="486" y="70" width="44" height="34" fill="#8d6b4a" opacity="0.6"/>
  <rect x="486" y="70" width="44" height="34" fill="none" stroke="#5e4830" stroke-width="1.2" stroke-dasharray="3 3"/>
  <g stroke="#3b3327" stroke-width="2" opacity="0.5">
    <path d="M356 176 h 96" stroke-dasharray="20 5 34 6 22"/>
    <path d="M356 192 h 118" stroke-dasharray="28 5 24 6 36"/>
  </g>
</g>

<!-- the letter itself, opened flat, worn soft along the folds -->
<ellipse cx="292" cy="450" rx="230" ry="30" fill="#000" opacity="0.6" filter="url(#ev3-let-soft)"/>
<g transform="rotate(-2 300 300)">
  <path d="M62 128 L520 112 L534 452 L76 470 Z" fill="#251c12" opacity="0.5"/>
  <path d="M58 124 L516 108 L530 448 L72 466 Z" fill="url(#ev3-let-paper)"/>
  <path d="M58 124 L516 108 L516 120 L58 136 Z" fill="#ffffff" opacity="0.3"/>
  <!-- horizontal and vertical fold bands, softened by seven years of handling -->
  <rect x="58" y="226" width="474" height="14" fill="url(#ev3-let-fold)"/>
  <rect x="58" y="338" width="474" height="14" fill="url(#ev3-let-fold)"/>
  <path d="M290 116 L298 456" stroke="#7c705a" stroke-width="3" opacity="0.35"/>
  <path d="M294 116 L302 456" stroke="#fffaea" stroke-width="2" opacity="0.45"/>
  <!-- soft, furred edges and one small tear -->
  <path d="M58 124 L516 108" fill="none" stroke="#b7a983" stroke-width="2" opacity="0.5"/>
  <path d="M72 466 L530 448" fill="none" stroke="#8f8264" stroke-width="2" opacity="0.5"/>
  <path d="M516 200 l -18 10 l 18 8 z" fill="#2a2016" opacity="0.35"/>
  <!-- the date line, top right -->
  <path d="M382 168 c 5 -11 10 -2 12 2 c 5 -12 10 -3 13 2 c 5 -10 10 -1 13 3 c 5 -9 11 -2 14 2" fill="none" stroke="#20304e" stroke-width="2.2" stroke-linecap="round" opacity="0.85"/>
  <!-- body: fountain-pen cursive, uneven baselines, ink varying in weight -->
  <g fill="none" stroke="#1b2a48" stroke-width="2.6" stroke-linecap="round" opacity="0.9">
    <path d="M92 208 c 8 -16 15 -3 19 4 c 8 -18 17 -5 22 3 c 9 -16 18 -2 23 6 c 10 -14 19 -4 24 4 c 9 -16 18 -3 23 5 c 10 -14 20 -3 25 4 c 9 -12 17 -3 22 3 c 10 -13 19 -2 24 5 c 9 -14 18 -3 23 4 c 8 -11 16 -2 21 4"/>
    <path d="M90 244 c 9 -17 16 -3 20 5 c 8 -16 18 -4 23 4 c 9 -18 17 -3 22 5 c 10 -15 20 -3 25 5 c 9 -13 17 -2 22 4 c 10 -16 19 -4 24 3 c 9 -14 19 -2 24 6 c 10 -12 18 -3 23 3 c 9 -15 18 -3 22 5 c 8 -12 16 -2 22 4 c 9 -14 17 -3 22 4"/>
    <path d="M90 280 c 8 -15 16 -4 21 4 c 9 -17 18 -3 23 5 c 8 -14 17 -3 22 4 c 10 -16 19 -2 24 6 c 9 -14 18 -4 23 3 c 10 -13 19 -2 24 5 c 8 -15 17 -3 22 4 c 10 -12 19 -3 24 4 c 9 -16 18 -2 23 6 c 9 -13 17 -3 22 3"/>
    <path d="M90 316 c 9 -16 17 -3 21 5 c 8 -15 17 -4 22 3 c 10 -17 19 -3 24 5 c 9 -13 18 -2 23 5 c 10 -15 19 -4 24 3 c 8 -12 17 -2 22 5 c 10 -16 19 -3 24 4 c 9 -14 17 -2 22 5 c 9 -13 18 -4 23 3"/>
    <path d="M90 352 c 8 -16 16 -3 21 5 c 9 -15 18 -4 23 3 c 9 -16 18 -2 23 6 c 10 -14 19 -3 24 4 c 9 -15 18 -3 23 5 c 9 -12 18 -2 23 4 c 10 -16 18 -3 23 5 c 9 -13 17 -3 22 4 c 8 -12 16 -2 21 4 c 9 -14 17 -3 22 4"/>
    <path d="M90 388 c 9 -15 17 -4 21 4 c 8 -16 18 -3 23 5 c 9 -14 18 -3 23 4 c 10 -16 19 -2 24 6 c 9 -13 18 -4 23 3 c 9 -14 18 -2 23 5"/>
  </g>
  <!-- the last line falls short, then the em-dash and the two initials -->
  <path d="M320 424 L370 421" stroke="#1b2a48" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
  <g fill="none" stroke="#141f38" stroke-width="4" stroke-linecap="round">
    <path d="M382 424 c -4 -22 10 -30 18 -16 c 6 12 -2 24 -12 22"/>
    <path d="M414 404 c 2 18 -2 26 6 24 c 8 -2 10 -10 8 -16"/>
  </g>
  <path d="M378 434 q 40 10 68 -6" fill="none" stroke="#1b2a48" stroke-width="2.4" opacity="0.6" stroke-linecap="round"/>
  <!-- blotting: where the pen paused, the ink pooled -->
  <g fill="#16223c" opacity="0.45">
    <ellipse cx="140" cy="246" rx="4.4" ry="3"/><ellipse cx="286" cy="318" rx="3.6" ry="2.6"/>
    <ellipse cx="392" cy="425" rx="5" ry="3.4"/>
  </g>
  <!-- handling: thumb-worn corners, a grease shadow where it was held -->
  <g fill="#8b7a56" opacity="0.2">
    <ellipse cx="88" cy="440" rx="34" ry="20"/><ellipse cx="500" cy="140" rx="26" ry="16"/>
  </g>
  <g opacity="0.14" fill="none" stroke="#4a3d2a" stroke-width="1.2">
    <path d="M96 424 q 11 9 0 19"/><path d="M103 420 q 16 13 0 27"/><path d="M110 416 q 21 17 0 35"/>
  </g>
  <path d="M530 448 L496 450 L528 420 Z" fill="#ab9c78"/>
</g>

<!-- the dead man's fountain pen, capped, set aside -->
<g transform="rotate(-9 500 400)">
  <rect x="406" y="392" width="196" height="19" rx="9" fill="#000" opacity="0.4" filter="url(#ev3-let-soft)"/>
  <rect x="402" y="388" width="196" height="19" rx="9" fill="url(#ev3-let-pen)"/>
  <rect x="408" y="391" width="180" height="4" rx="2" fill="#ffffff" opacity="0.24"/>
  <rect x="402" y="388" width="70" height="19" rx="9" fill="#131211"/>
  <rect x="466" y="388" width="9" height="19" fill="#b79a54"/>
  <path d="M474 384 q 6 12 0 26" fill="none" stroke="#d9bd72" stroke-width="3"/>
  <path d="M598 388 q 18 9 0 19 z" fill="#c9a94f"/>
  <path d="M598 392 q 11 5 0 11 z" fill="#f2e2ab" opacity="0.7"/>
</g>

<rect width="640" height="520" fill="url(#ev3-let-vig)"/>
`,
  },

  /* The personnel application under the lamp: a bed of correction fluid over
     the surname, and the ghost of the letters it was painted over rising. */
  c3_personnel: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-per-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2a26"/><stop offset="0.55" stop-color="#141310"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-per-lamp" cx="0.3" cy="0.1" r="0.72">
    <stop offset="0" stop-color="#fff0c4" stop-opacity="0.62"/><stop offset="0.45" stop-color="#ffdfa0" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#ffdfa0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-per-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#3d3428"/><stop offset="0.55" stop-color="#241f18"/><stop offset="1" stop-color="#100e0b"/>
  </linearGradient>
  <linearGradient id="ev3-per-card" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fdf7e6"/><stop offset="0.34" stop-color="#f0e7cd"/>
    <stop offset="0.7" stop-color="#d6c9a6"/><stop offset="1" stop-color="#a89972"/>
  </linearGradient>
  <linearGradient id="ev3-per-fluid" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.4" stop-color="#f4f2e6"/>
    <stop offset="0.75" stop-color="#e2ddc8"/><stop offset="1" stop-color="#c9c2a8"/>
  </linearGradient>
  <linearGradient id="ev3-per-folder" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b79a5e"/><stop offset="0.5" stop-color="#8d7442"/><stop offset="1" stop-color="#54452a"/>
  </linearGradient>
  <linearGradient id="ev3-per-clip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eff3f6"/><stop offset="0.45" stop-color="#8d959b"/><stop offset="1" stop-color="#2a2f33"/>
  </linearGradient>
  <filter id="ev3-per-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-per-vig" cx="0.42" cy="0.4" r="0.78">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-per-bg)"/>
<rect width="640" height="520" fill="url(#ev3-per-desk)" opacity="0.9"/>
<g stroke="#6a5b3c" stroke-width="1" opacity="0.14">
  <path d="M0 110 q 320 -12 640 6"/><path d="M0 300 q 320 -12 640 6"/><path d="M0 470 q 320 -12 640 6"/>
</g>
<rect width="640" height="520" fill="url(#ev3-per-lamp)"/>

<!-- the folder the card came out of, underneath -->
<g transform="rotate(4 330 320)">
  <path d="M46 138 L604 116 L614 462 L56 484 Z" fill="url(#ev3-per-folder)"/>
  <path d="M46 138 L604 116 L604 128 L46 150 Z" fill="#e0c48a" opacity="0.45"/>
  <path d="M56 484 L614 462 L614 472 L56 494 Z" fill="#2f2617" opacity="0.6"/>
  <g stroke="#6f5c34" stroke-width="1.4" opacity="0.4">
    <path d="M50 220 L608 198"/><path d="M52 340 L610 318"/>
  </g>
</g>
<ellipse cx="326" cy="452" rx="240" ry="30" fill="#000" opacity="0.55" filter="url(#ev3-per-soft)"/>

<!-- the application card, lifted and tilted to the lamp -->
<g transform="rotate(-5 320 290)">
  <path d="M96 106 L556 90 L570 436 L110 452 Z" fill="#241d13" opacity="0.45"/>
  <path d="M92 102 L552 86 L566 432 L106 448 Z" fill="url(#ev3-per-card)"/>
  <path d="M92 102 L552 86 L552 100 L92 116 Z" fill="#ffffff" opacity="0.4"/>
  <!-- the sheet cups slightly where it is held: a soft sheen band -->
  <path d="M92 180 L554 164 L556 236 L94 252 Z" fill="#ffffff" opacity="0.1"/>
  <!-- printed form: rules, boxes and a heading bar -->
  <path d="M104 140 L544 124" stroke="#5d5540" stroke-width="3.4" opacity="0.7"/>
  <path d="M104 148 L544 132" stroke="#5d5540" stroke-width="1.3" opacity="0.5"/>
  <g stroke="#4b4432" stroke-width="4" opacity="0.55">
    <path d="M140 126 h 74" stroke-dasharray="24 6 34"/><path d="M300 121 h 106" stroke-dasharray="30 6 26 6 32"/>
  </g>
  <g stroke="#a3987a" stroke-width="1.2" opacity="0.65">
    <path d="M104 214 L544 198"/><path d="M104 252 L544 236"/><path d="M104 290 L546 274"/>
    <path d="M104 328 L546 312"/><path d="M104 366 L548 350"/><path d="M104 404 L548 388"/>
  </g>
  <g stroke="#a3987a" stroke-width="1.2" opacity="0.5">
    <path d="M226 100 L238 444"/><path d="M400 94 L412 438"/>
  </g>
  <!-- printed field captions in the left column -->
  <g stroke="#4b4432" stroke-width="2.4" opacity="0.6">
    <path d="M112 190 h 82" stroke-dasharray="22 5 30 5 18"/>
    <path d="M112 228 h 68" stroke-dasharray="18 5 26 5 12"/>
    <path d="M112 266 h 90" stroke-dasharray="26 5 22 5 30"/>
    <path d="M112 304 h 74" stroke-dasharray="20 5 32 5 10"/>
    <path d="M112 342 h 86" stroke-dasharray="24 5 18 5 32"/>
    <path d="M112 380 h 62" stroke-dasharray="16 5 28 5"/>
  </g>
  <!-- typed entries in the middle and right columns -->
  <g stroke="#2f2a20" stroke-width="2.4" opacity="0.78" stroke-linecap="butt">
    <path d="M248 226 h 138" stroke-dasharray="30 6 42 7 34"/>
    <path d="M424 222 h 108" stroke-dasharray="22 6 38 7 26"/>
    <path d="M248 264 h 122" stroke-dasharray="38 6 26 7 32"/>
    <path d="M424 260 h 96" stroke-dasharray="30 6 24 7 20"/>
    <path d="M248 302 h 146" stroke-dasharray="26 6 46 7 38"/>
    <path d="M424 298 h 112" stroke-dasharray="34 6 30 7 24"/>
    <path d="M248 340 h 118" stroke-dasharray="42 6 22 7 30"/>
    <path d="M424 336 h 88" stroke-dasharray="24 6 34 7 12"/>
    <path d="M248 378 h 134" stroke-dasharray="28 6 40 7 26"/>
  </g>

  <!-- THE SURNAME FIELD: a bed of correction fluid, thick, faintly ridged -->
  <path d="M244 172 L438 165 L440 200 L246 207 Z" fill="url(#ev3-per-fluid)"/>
  <path d="M244 172 L438 165 L440 200 L246 207 Z" fill="none" stroke="#bdb69c" stroke-width="1.2"/>
  <path d="M246 176 L436 169" stroke="#ffffff" stroke-width="3" opacity="0.85"/>
  <path d="M248 203 L438 196" stroke="#b0a88c" stroke-width="2" opacity="0.6"/>
  <g fill="none" stroke="#cfc8ae" stroke-width="1.4" opacity="0.7">
    <path d="M252 180 q 40 8 84 -2 q 44 -10 96 0"/><path d="M252 192 q 46 -8 92 2 q 42 8 88 -4"/>
  </g>
  <ellipse cx="300" cy="182" rx="26" ry="6" fill="#ffffff" opacity="0.5"/>
  <!-- the ghost rising through: pressure marks of the letters underneath -->
  <path d="M250 174 L434 167 L436 202 L252 209 Z" fill="#8d8974" opacity="0.14"/>
  <g fill="none" stroke="#8d8974" stroke-width="3.6" opacity="0.36" stroke-linecap="round">
    <path d="M258 194 l 1 -17"/><path d="M272 195 l -1 -14"/><path d="M286 194 l 1 -18"/>
    <path d="M300 194 l -1 -13"/><path d="M316 193 l 1 -17"/><path d="M330 193 l -1 -15"/>
    <path d="M346 192 l 1 -18"/><path d="M362 192 l -1 -13"/><path d="M378 191 l 1 -16"/>
    <path d="M394 191 l -1 -14"/><path d="M410 190 l 1 -17"/>
  </g>
  <g fill="none" stroke="#8d8974" stroke-width="3" opacity="0.28" stroke-linecap="round">
    <path d="M264 188 q 7 -6 14 -1"/><path d="M292 187 q 8 5 15 -2"/><path d="M322 186 q 7 -7 14 0"/>
    <path d="M354 185 q 8 6 15 -3"/><path d="M386 184 q 7 -6 14 1"/>
  </g>
  <g fill="none" stroke="#f6f2e2" stroke-width="1.2" opacity="0.42" stroke-linecap="round">
    <path d="M260 192 l 1 -14"/><path d="M288 191 l 1 -15"/><path d="M348 189 l 1 -15"/><path d="M396 188 l -1 -12"/>
  </g>
  <!-- the typed name that was put ON TOP of the fluid, sitting proud -->
  <path d="M256 188 h 172" stroke="#332d22" stroke-width="3" opacity="0.5" stroke-dasharray="34 8 52 9 44"/>

  <!-- staple and punch holes -->
  <rect x="120" y="118" width="26" height="4" rx="1" fill="#9aa2a8"/>
  <rect x="120" y="118" width="26" height="1.6" rx="0.8" fill="#e8eef2"/>
  <circle cx="132" cy="266" r="9" fill="#5c5241" opacity="0.45"/>
  <circle cx="134" cy="268" r="7" fill="#2a2419"/>
  <!-- a bent corner and a coffee halo -->
  <path d="M566 432 L528 434 L562 402 Z" fill="#b3a480"/>
  <ellipse cx="470" cy="410" rx="42" ry="12" fill="none" stroke="#8d6a3c" stroke-width="3" opacity="0.22"/>
</g>

<!-- the paper clip that held the file together, dropped on the desk -->
<g transform="translate(96 424) rotate(64)" fill="none" stroke="url(#ev3-per-clip)" stroke-width="4.4" stroke-linecap="round">
  <path d="M0 0 V36 A8 8 0 0 0 16 36 V-9 A10 10 0 0 1 36 -9 V31 A7 7 0 0 1 22 31 V3"/>
</g>

<rect width="640" height="520" fill="url(#ev3-per-vig)"/>
`,
  },

  /* The studio clock at 12:03:11 and the dead ON AIR sign above it: the
     eleventh second of a silence that was supposed to run a full minute. */
  c3_confession: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-con-bg" x1="0.2" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#2c2620"/><stop offset="0.5" stop-color="#151210"/><stop offset="1" stop-color="#070606"/>
  </linearGradient>
  <radialGradient id="ev3-con-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe7b4" stop-opacity="0.22"/><stop offset="1" stop-color="#ffe7b4" stop-opacity="0"/>
  </radialGradient>
  <pattern id="ev3-con-cork" width="24" height="20" patternUnits="userSpaceOnUse">
    <rect width="24" height="20" fill="#3b3124"/>
    <ellipse cx="6" cy="6" rx="5" ry="3.2" fill="#4b3d2b" opacity="0.6"/>
    <ellipse cx="17" cy="14" rx="6" ry="3.6" fill="#2d2519" opacity="0.7"/>
  </pattern>
  <linearGradient id="ev3-con-case" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#4b5157"/><stop offset="0.2" stop-color="#2b3035"/>
    <stop offset="0.6" stop-color="#181c20"/><stop offset="1" stop-color="#0b0d0f"/>
  </linearGradient>
  <linearGradient id="ev3-con-bezel" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f0f5f8"/><stop offset="0.24" stop-color="#a7aeb4"/>
    <stop offset="0.52" stop-color="#4e545a"/><stop offset="0.78" stop-color="#c7ced3"/><stop offset="1" stop-color="#1c2024"/>
  </linearGradient>
  <radialGradient id="ev3-con-dial" cx="0.34" cy="0.26" r="0.86">
    <stop offset="0" stop-color="#fdf8e8"/><stop offset="0.5" stop-color="#eae2ca"/>
    <stop offset="0.85" stop-color="#c7bda0"/><stop offset="1" stop-color="#9e9578"/>
  </radialGradient>
  <radialGradient id="ev3-con-glass" cx="0.3" cy="0.2" r="0.8">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.34"/><stop offset="0.42" stop-color="#ffffff" stop-opacity="0.06"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.18"/>
  </radialGradient>
  <linearGradient id="ev3-con-sign" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5c1f18"/><stop offset="0.4" stop-color="#3a110d"/><stop offset="1" stop-color="#1b0806"/>
  </linearGradient>
  <filter id="ev3-con-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-con-vig" cx="0.44" cy="0.46" r="0.74">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-con-bg)"/>
<rect width="640" height="520" fill="url(#ev3-con-cork)" opacity="0.55"/>
<rect width="640" height="520" fill="url(#ev3-con-pool)"/>
<g stroke="#1a150f" stroke-width="2" opacity="0.45">
  <path d="M0 86 h640"/><path d="M0 400 h640"/>
</g>

<!-- the ON AIR sign above, unlit: dark ruby glass in a black box -->
<g>
  <rect x="146" y="20" width="348" height="76" rx="6" fill="#000" opacity="0.5" filter="url(#ev3-con-soft)"/>
  <rect x="150" y="16" width="340" height="72" rx="6" fill="#14161a"/>
  <rect x="150" y="16" width="340" height="7" rx="3" fill="#6b7278" opacity="0.5"/>
  <rect x="162" y="28" width="150" height="48" rx="3" fill="url(#ev3-con-sign)"/>
  <rect x="328" y="28" width="150" height="48" rx="3" fill="url(#ev3-con-sign)"/>
  <rect x="164" y="30" width="146" height="7" rx="3" fill="#8d3a2c" opacity="0.35"/>
  <rect x="330" y="30" width="146" height="7" rx="3" fill="#8d3a2c" opacity="0.3"/>
  <g stroke="#7a2c20" stroke-width="6" opacity="0.32" stroke-linecap="round">
    <path d="M186 54 h 34"/><path d="M236 54 h 20"/><path d="M272 54 h 24"/>
    <path d="M350 54 h 26"/><path d="M392 54 h 18"/><path d="M426 54 h 34"/>
  </g>
  <rect x="150" y="82" width="340" height="6" fill="#000" opacity="0.55"/>
  <path d="M150 16 L490 16 L490 22 L150 22 Z" fill="#ffffff" opacity="0.1"/>
</g>

<!-- the studio clock -->
<ellipse cx="322" cy="472" rx="150" ry="24" fill="#000" opacity="0.6" filter="url(#ev3-con-soft)"/>
<circle cx="318" cy="288" r="156" fill="url(#ev3-con-case)"/>
<circle cx="318" cy="288" r="156" fill="none" stroke="#0a0c0e" stroke-width="4"/>
<circle cx="318" cy="288" r="142" fill="none" stroke="url(#ev3-con-bezel)" stroke-width="16"/>
<circle cx="318" cy="288" r="130" fill="url(#ev3-con-dial)"/>
<circle cx="318" cy="288" r="122" fill="none" stroke="#b3a988" stroke-width="1.6" opacity="0.6"/>
<!-- minute ticks -->
<g stroke="#3a3428" stroke-width="2.2" opacity="0.75">
  <path d="M318 166 v 10"/><path d="M355 170 l -3 10"/><path d="M390 182 l -5 9"/><path d="M420 202 l -6 8"/>
  <path d="M444 230 l -8 6"/><path d="M436 322 l 8 6"/><path d="M414 366 l 6 8"/><path d="M385 394 l 5 9"/>
  <path d="M352 406 l 3 10"/><path d="M281 406 l -3 10"/><path d="M248 394 l -5 9"/><path d="M219 366 l -6 8"/>
  <path d="M200 322 l -8 6"/><path d="M192 244 l 8 6"/><path d="M216 202 l 6 8"/><path d="M246 182 l 5 9"/>
</g>
<!-- hour batons -->
<g fill="#1e1a13">
  <rect x="313" y="172" width="10" height="26" rx="2"/>
  <rect x="313" y="378" width="10" height="26" rx="2"/>
  <rect x="188" y="283" width="26" height="10" rx="2"/>
  <rect x="422" y="283" width="26" height="10" rx="2"/>
  <rect x="368" y="188" width="9" height="22" rx="2" transform="rotate(30 372 199)"/>
  <rect x="410" y="230" width="9" height="22" rx="2" transform="rotate(60 414 241)"/>
  <rect x="410" y="324" width="9" height="22" rx="2" transform="rotate(120 414 335)"/>
  <rect x="368" y="366" width="9" height="22" rx="2" transform="rotate(150 372 377)"/>
  <rect x="259" y="366" width="9" height="22" rx="2" transform="rotate(210 263 377)"/>
  <rect x="217" y="324" width="9" height="22" rx="2" transform="rotate(240 221 335)"/>
  <rect x="217" y="230" width="9" height="22" rx="2" transform="rotate(300 221 241)"/>
  <rect x="259" y="188" width="9" height="22" rx="2" transform="rotate(330 263 199)"/>
</g>
<!-- age: the enamel has gone warm and slightly stained near the rim -->
<g fill="#8d7a4c" opacity="0.12">
  <ellipse cx="236" cy="216" rx="44" ry="26"/><ellipse cx="398" cy="356" rx="38" ry="22"/>
</g>
<!-- hands: three minutes past twelve, and the sweep at eleven seconds -->
<path d="M318 288 L322 200" stroke="#15120c" stroke-width="11" stroke-linecap="round"/>
<path d="M318 288 L360 214" stroke="#15120c" stroke-width="8" stroke-linecap="round"/>
<path d="M318 288 L318 196" stroke="#191510" stroke-width="4" opacity="0.35"/>
<path d="M318 288 L390 248" stroke="#8e2a1c" stroke-width="3.4" stroke-linecap="round"/>
<path d="M318 288 L300 298" stroke="#8e2a1c" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="318" cy="288" r="11" fill="#15120c"/>
<circle cx="318" cy="288" r="5" fill="#8e2a1c"/>
<circle cx="315" cy="285" r="2.6" fill="#e0c9a0" opacity="0.5"/>
<!-- glass: one broad reflection of the studio window, and dust -->
<circle cx="318" cy="288" r="130" fill="url(#ev3-con-glass)"/>
<path d="M212 200 q 70 -46 148 -30 q -80 22 -120 76 q -34 46 -30 108 q -32 -80 2 -154 z" fill="#ffffff" opacity="0.12"/>
<path d="M228 198 q 56 -34 116 -26" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.2"/>
<g fill="#efe6cc" opacity="0.12">
  <circle cx="262" cy="330" r="2"/><circle cx="374" cy="242" r="1.6"/><circle cx="340" cy="382" r="2.2"/>
</g>
<!-- the mounting bracket and its shadow on the cork -->
<rect x="300" y="122" width="36" height="18" rx="3" fill="#22262a"/>
<rect x="300" y="122" width="36" height="4" rx="2" fill="#8d949a" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev3-con-vig)"/>
`,
  },

  /* The wiring binder, cracked open at the grounding-fault page: the exact
     diagram of tonight's trap, and a corner a thumb kept coming back to. */
  c3_schematic: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-sch-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#302f28"/><stop offset="0.55" stop-color="#171712"/><stop offset="1" stop-color="#080807"/>
  </linearGradient>
  <radialGradient id="ev3-sch-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffeec2" stop-opacity="0.28"/><stop offset="1" stop-color="#ffeec2" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-sch-bench" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4c4132"/><stop offset="0.5" stop-color="#2c261d"/><stop offset="1" stop-color="#141210"/>
  </linearGradient>
  <linearGradient id="ev3-sch-page" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#f6f2e2"/><stop offset="0.34" stop-color="#e9e3cd"/>
    <stop offset="0.72" stop-color="#d0c7ab"/><stop offset="1" stop-color="#a89e82"/>
  </linearGradient>
  <linearGradient id="ev3-sch-page2" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#e6e0cb"/><stop offset="0.5" stop-color="#cfc6ab"/><stop offset="1" stop-color="#948b71"/>
  </linearGradient>
  <linearGradient id="ev3-sch-cover" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4b3226"/><stop offset="0.35" stop-color="#331f16"/><stop offset="1" stop-color="#180e0a"/>
  </linearGradient>
  <linearGradient id="ev3-sch-ring" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eef2f5"/><stop offset="0.4" stop-color="#8c949a"/><stop offset="1" stop-color="#292e32"/>
  </linearGradient>
  <filter id="ev3-sch-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-sch-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-sch-bg)"/>
<rect width="640" height="520" fill="url(#ev3-sch-bench)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-sch-pool)"/>
<g stroke="#6b5c3c" stroke-width="1" opacity="0.14">
  <path d="M0 118 q 320 -12 640 6"/><path d="M0 302 q 320 -12 640 6"/><path d="M0 466 q 320 -12 640 6"/>
</g>
<ellipse cx="322" cy="462" rx="264" ry="32" fill="#000" opacity="0.6" filter="url(#ev3-sch-soft)"/>

<!-- binder covers splayed open, spine cracked -->
<path d="M8 128 L316 108 L316 452 L14 470 Z" fill="url(#ev3-sch-cover)"/>
<path d="M324 108 L632 128 L626 470 L324 452 Z" fill="url(#ev3-sch-cover)"/>
<path d="M8 128 L316 108 L316 118 L8 138 Z" fill="#7a5236" opacity="0.4"/>
<path d="M316 108 L324 108 L324 452 L316 452 Z" fill="#120a07"/>
<!-- page block edges -->
<path d="M28 140 L314 122 L314 444 L34 460 Z" fill="url(#ev3-sch-page2)"/>
<path d="M326 122 L612 140 L606 460 L326 444 Z" fill="url(#ev3-sch-page2)"/>
<g stroke="#9c937a" stroke-width="1" opacity="0.5">
  <path d="M30 146 L314 128"/><path d="M31 152 L314 134"/><path d="M326 128 L610 146"/><path d="M326 134 L610 152"/>
</g>

<!-- the open page: left leaf, text; right leaf, the diagram -->
<path d="M40 148 L312 130 L312 438 L46 454 Z" fill="url(#ev3-sch-page)"/>
<path d="M328 130 L600 148 L594 454 L328 438 Z" fill="url(#ev3-sch-page)"/>
<path d="M296 133 L312 132 L312 437 L298 436 Z" fill="#8a8267" opacity="0.35"/>
<path d="M328 132 L344 133 L342 437 L328 437 Z" fill="#8a8267" opacity="0.3"/>

<!-- left leaf: running body type and a section rule -->
<path d="M52 176 L306 160" stroke="#5c5440" stroke-width="2.6" opacity="0.6"/>
<g stroke="#484130" stroke-width="2.1" opacity="0.6" stroke-linecap="butt">
  <path d="M52 200 h 244" stroke-dasharray="22 5 34 6 26 5 40 6 30"/>
  <path d="M52 220 h 244" stroke-dasharray="30 5 24 6 42 5 22 6 32"/>
  <path d="M52 240 h 244" stroke-dasharray="18 5 40 6 28 5 34 6 24"/>
  <path d="M52 260 h 244" stroke-dasharray="36 5 22 6 30 5 44 6 18"/>
  <path d="M52 280 h 244" stroke-dasharray="24 5 38 6 20 5 32 6 36"/>
  <path d="M52 300 h 180" stroke-dasharray="28 5 30 6 26 5 20"/>
  <path d="M52 336 h 244" stroke-dasharray="20 5 44 6 24 5 30 6 28"/>
  <path d="M52 356 h 244" stroke-dasharray="34 5 26 6 38 5 20 6 26"/>
  <path d="M52 376 h 244" stroke-dasharray="26 5 32 6 22 5 40 6 22"/>
  <path d="M52 396 h 244" stroke-dasharray="40 5 20 6 34 5 26 6 20"/>
  <path d="M52 416 h 148" stroke-dasharray="22 5 30 6 24"/>
</g>
<!-- a numbered clause block with hanging indents -->
<g stroke="#6d6349" stroke-width="1.6" opacity="0.5">
  <path d="M52 318 h 14"/><path d="M52 190 h 14"/>
</g>

<!-- right leaf: the grounding-fault diagram -->
<path d="M344 172 L588 188" stroke="#5c5440" stroke-width="3" opacity="0.6"/>
<g stroke="#4b4432" stroke-width="4.6" opacity="0.6">
  <path d="M352 162 h 96" stroke-dasharray="30 7 40"/><path d="M470 168 h 82" stroke-dasharray="26 7 32"/>
</g>
<!-- chassis outline, dashed -->
<path d="M368 214 L570 228 L562 400 L362 386 Z" fill="#cfc7ab" opacity="0.18"/>
<path d="M368 214 L570 228 L562 400 L362 386 Z" fill="none" stroke="#443e2e" stroke-width="1.8" stroke-dasharray="9 6" opacity="0.75"/>
<!-- transformer: two coils and a core -->
<g stroke="#2e2a20" stroke-width="2.6" fill="none">
  <path d="M394 246 q 10 -9 0 -18 q -10 -9 0 -18"/>
  <path d="M394 282 q 10 -9 0 -18 q -10 -9 0 -18"/>
  <path d="M430 246 q -10 -9 0 -18 q 10 -9 0 -18"/>
  <path d="M430 282 q -10 -9 0 -18 q 10 -9 0 -18"/>
</g>
<g stroke="#2e2a20" stroke-width="2.2">
  <path d="M408 208 v 82"/><path d="M416 208 v 82"/>
</g>
<path d="M394 210 L370 210" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M394 290 L370 290" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M430 210 L466 210" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M430 290 L466 290" stroke="#2e2a20" stroke-width="2.2"/>
<!-- valve: envelope with plate, grid and cathode -->
<circle cx="500" cy="252" r="30" fill="none" stroke="#2e2a20" stroke-width="2.4"/>
<path d="M486 240 h 28" stroke="#2e2a20" stroke-width="3"/>
<path d="M486 252 h 28" stroke="#2e2a20" stroke-width="2" stroke-dasharray="5 5"/>
<path d="M490 266 q 10 8 20 0" fill="none" stroke="#2e2a20" stroke-width="2.6"/>
<path d="M500 222 v -12" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M500 282 v 12" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M466 210 L500 210" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M466 290 L500 294" stroke="#2e2a20" stroke-width="2.2"/>
<!-- resistor and capacitor in the return leg -->
<path d="M396 340 l 8 -12 l 12 24 l 12 -24 l 12 24 l 12 -24 l 8 12" fill="none" stroke="#2e2a20" stroke-width="2.4"/>
<path d="M370 340 h 26" stroke="#2e2a20" stroke-width="2.2"/>
<path d="M460 340 h 36" stroke="#2e2a20" stroke-width="2.2"/>
<g stroke="#2e2a20" stroke-width="3">
  <path d="M496 326 v 28"/><path d="M508 326 v 28"/>
</g>
<path d="M508 340 h 40" stroke="#2e2a20" stroke-width="2.2"/>
<!-- THE GROUND SYMBOL, and the fault: a cross through the return path -->
<path d="M548 340 v 30" stroke="#2e2a20" stroke-width="2.4"/>
<g stroke="#2e2a20" stroke-width="3">
  <path d="M530 370 h 36"/><path d="M536 378 h 24"/><path d="M542 386 h 12"/>
</g>
<path d="M418 324 l 20 32" stroke="#8e2a1c" stroke-width="3.4" opacity="0.85"/>
<path d="M438 324 l -20 32" stroke="#8e2a1c" stroke-width="3.4" opacity="0.85"/>
<circle cx="428" cy="340" r="20" fill="none" stroke="#8e2a1c" stroke-width="2" opacity="0.5"/>
<!-- leader lines out to blank callout rules -->
<g stroke="#5c5440" stroke-width="1.4" opacity="0.6">
  <path d="M500 222 L536 200"/><path d="M428 320 L392 300"/><path d="M548 386 L580 400"/>
</g>
<g stroke="#4b4432" stroke-width="2.4" opacity="0.55">
  <path d="M536 198 h 46" stroke-dasharray="14 5 22"/>
  <path d="M340 296 h 50" stroke-dasharray="18 5 16"/>
  <path d="M556 404 h 38" stroke-dasharray="12 5 18"/>
</g>

<!-- THE THUMB: a dog-eared corner, and the grease of repeated handling -->
<path d="M594 454 L536 448 L590 400 Z" fill="#b5ab8c"/>
<path d="M594 454 L536 448 L590 400 Z" fill="none" stroke="#8d846a" stroke-width="1.2"/>
<path d="M590 400 L560 430" stroke="#9a9078" stroke-width="1.4" opacity="0.6"/>
<g fill="#8a7a52" opacity="0.24">
  <ellipse cx="566" cy="428" rx="34" ry="22"/><ellipse cx="356" cy="410" rx="24" ry="16"/>
</g>
<g opacity="0.16" fill="none" stroke="#4d4230" stroke-width="1.2">
  <path d="M548 414 q 11 9 0 19"/><path d="M555 410 q 16 13 0 27"/><path d="M562 406 q 21 17 0 35"/>
</g>

<!-- the rings, holding the block open at this page -->
<g>
  <path d="M320 176 q -22 -12 -22 -30 q 0 -18 22 -26" fill="none" stroke="url(#ev3-sch-ring)" stroke-width="7"/>
  <path d="M320 306 q -22 -12 -22 -30 q 0 -18 22 -26" fill="none" stroke="url(#ev3-sch-ring)" stroke-width="7"/>
  <path d="M320 424 q -22 -12 -22 -30 q 0 -18 22 -26" fill="none" stroke="url(#ev3-sch-ring)" stroke-width="7"/>
</g>

<rect width="640" height="520" fill="url(#ev3-sch-vig)"/>
`,
  },

  /* Tonight's script under its bulldog clip, and clipped behind it the notes
     for next week, ringed and starred in the dead man's red pencil. */
  c3_script: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-scr-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2e2820"/><stop offset="0.55" stop-color="#161310"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev3-scr-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe9b8" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-scr-table" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4a3826"/><stop offset="0.55" stop-color="#2b2117"/><stop offset="1" stop-color="#14100b"/>
  </linearGradient>
  <linearGradient id="ev3-scr-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fbf5e4"/><stop offset="0.34" stop-color="#eee6cd"/>
    <stop offset="0.72" stop-color="#d5cbac"/><stop offset="1" stop-color="#a99e7e"/>
  </linearGradient>
  <linearGradient id="ev3-scr-under" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#e9e0c6"/><stop offset="0.6" stop-color="#cfc4a4"/><stop offset="1" stop-color="#948a6e"/>
  </linearGradient>
  <linearGradient id="ev3-scr-clip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3d434a"/><stop offset="0.24" stop-color="#12161a"/>
    <stop offset="0.68" stop-color="#080a0c"/><stop offset="1" stop-color="#232930"/>
  </linearGradient>
  <linearGradient id="ev3-scr-lever" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0f4f7"/><stop offset="0.42" stop-color="#8d959b"/><stop offset="1" stop-color="#2a2f34"/>
  </linearGradient>
  <linearGradient id="ev3-scr-red" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d4604a"/><stop offset="0.35" stop-color="#9e2f21"/><stop offset="1" stop-color="#4a130d"/>
  </linearGradient>
  <filter id="ev3-scr-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-scr-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-scr-bg)"/>
<rect width="640" height="520" fill="url(#ev3-scr-table)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-scr-pool)"/>
<g stroke="#6a5030" stroke-width="1" opacity="0.15">
  <path d="M0 118 q 320 -12 640 6"/><path d="M0 306 q 320 -12 640 6"/><path d="M0 470 q 320 -12 640 6"/>
</g>
<ellipse cx="330" cy="454" rx="248" ry="34" fill="#000" opacity="0.6" filter="url(#ev3-scr-soft)"/>

<!-- the sheets below, fanned -->
<g transform="rotate(5 330 300)">
  <path d="M118 116 L556 96 L570 448 L132 468 Z" fill="url(#ev3-scr-under)"/>
  <path d="M118 116 L556 96 L556 106 L118 126 Z" fill="#ffffff" opacity="0.2"/>
</g>
<g transform="rotate(2 330 300)">
  <path d="M108 112 L546 92 L560 444 L122 464 Z" fill="url(#ev3-scr-under)"/>
  <path d="M108 112 L546 92 L546 102 L108 122 Z" fill="#ffffff" opacity="0.22"/>
</g>

<!-- the top sheet: tonight's script, typed with a wide left margin -->
<g transform="rotate(-2 320 292)">
  <path d="M98 104 L536 88 L550 440 L112 456 Z" fill="url(#ev3-scr-paper)"/>
  <path d="M98 104 L536 88 L536 100 L98 116 Z" fill="#ffffff" opacity="0.34"/>
  <!-- the typed body: character-width dashes with ragged right edges -->
  <g stroke="#332e22" stroke-width="2.5" opacity="0.8" stroke-linecap="butt">
    <path d="M188 152 h 128" stroke-dasharray="36 8 52 9 30"/>
    <path d="M188 178 h 300" stroke-dasharray="26 7 44 8 38 7 56 8 34"/>
    <path d="M188 202 h 316" stroke-dasharray="42 7 30 8 50 7 34 8 44"/>
    <path d="M188 226 h 292" stroke-dasharray="30 7 46 8 26 7 52 8 38"/>
    <path d="M188 250 h 218" stroke-dasharray="38 7 32 8 44 7 28"/>
    <path d="M188 296 h 308" stroke-dasharray="28 7 50 8 34 7 42 8 30"/>
    <path d="M188 320 h 322" stroke-dasharray="46 7 26 8 40 7 36 8 48"/>
    <path d="M188 344 h 284" stroke-dasharray="32 7 42 8 28 7 50 8 26"/>
    <path d="M188 368 h 310" stroke-dasharray="40 7 28 8 46 7 32 8 42"/>
    <path d="M188 392 h 176" stroke-dasharray="34 7 38 8 30"/>
  </g>
  <!-- speaker cues, capitalised and set left in the margin -->
  <g stroke="#332e22" stroke-width="3.6" opacity="0.85" stroke-linecap="butt">
    <path d="M124 152 h 52" stroke-dasharray="20 6 26"/>
    <path d="M124 296 h 52" stroke-dasharray="24 6 22"/>
  </g>
  <!-- direction lines in parentheses, indented and underscored -->
  <path d="M188 272 h 168" stroke="#3d372a" stroke-width="2.2" opacity="0.65" stroke-dasharray="30 8 40 9 44"/>
  <path d="M188 278 L356 275" stroke="#3d372a" stroke-width="1.2" opacity="0.5"/>
  <!-- the margin rule and the punch holes -->
  <path d="M180 100 L192 448" stroke="#8f2c1e" stroke-width="1.6" opacity="0.35"/>
  <g fill="#2a2419" opacity="0.55">
    <ellipse cx="130" cy="186" rx="8" ry="8"/><ellipse cx="134" cy="284" rx="8" ry="8"/><ellipse cx="138" cy="382" rx="8" ry="8"/>
  </g>

  <!-- RED PENCIL: next week's note, ringed hard, with a marginal star -->
  <path d="M196 414 h 236" stroke="#9e2f21" stroke-width="4" opacity="0.9" stroke-linecap="round" stroke-dasharray="34 9 46 10 40"/>
  <ellipse cx="316" cy="412" rx="132" ry="30" fill="none" stroke="url(#ev3-scr-red)" stroke-width="4.4" opacity="0.9"/>
  <ellipse cx="316" cy="412" rx="138" ry="35" fill="none" stroke="#9e2f21" stroke-width="2" opacity="0.45"/>
  <g stroke="#9e2f21" stroke-width="3.4" opacity="0.9" stroke-linecap="round">
    <path d="M150 404 l 26 16"/><path d="M150 420 l 26 -16"/><path d="M163 398 l 0 28"/>
  </g>
  <path d="M196 434 L400 429" stroke="#9e2f21" stroke-width="3.4" opacity="0.8" stroke-linecap="round"/>
  <!-- a smudge where the pencil dragged -->
  <path d="M420 396 q 30 8 54 -2" fill="none" stroke="#9e2f21" stroke-width="7" opacity="0.14"/>
  <path d="M550 440 L514 442 L546 412 Z" fill="#ac9f7c"/>
</g>

<!-- the bulldog clip biting the top of the stack -->
<g transform="rotate(-2 320 110)">
  <rect x="238" y="66" width="150" height="52" rx="5" fill="#000" opacity="0.45" filter="url(#ev3-scr-soft)"/>
  <path d="M232 62 L388 56 L392 112 L236 118 Z" fill="url(#ev3-scr-clip)"/>
  <path d="M232 62 L388 56 L388 68 L232 74 Z" fill="#79828a" opacity="0.5"/>
  <path d="M236 108 L392 102 L392 118 L236 124 Z" fill="#05070a" opacity="0.7"/>
  <path d="M252 60 q 6 -34 34 -34" fill="none" stroke="url(#ev3-scr-lever)" stroke-width="7" stroke-linecap="round"/>
  <path d="M368 56 q 6 -34 -22 -32" fill="none" stroke="url(#ev3-scr-lever)" stroke-width="7" stroke-linecap="round"/>
  <path d="M286 26 L346 24" stroke="url(#ev3-scr-lever)" stroke-width="7" stroke-linecap="round"/>
  <path d="M290 22 L344 20" stroke="#ffffff" stroke-width="2" opacity="0.55"/>
</g>

<!-- the red pencil, worn to a stub, resting on the table -->
<g transform="rotate(-19 520 300)">
  <rect x="440" y="284" width="164" height="15" rx="2" fill="#000" opacity="0.4" filter="url(#ev3-scr-soft)"/>
  <rect x="436" y="280" width="164" height="15" rx="2" fill="url(#ev3-scr-red)"/>
  <rect x="436" y="281" width="164" height="4" rx="2" fill="#f0a08a" opacity="0.5"/>
  <path d="M436 280 l -26 7.5 l 26 7.5 z" fill="#e0c6a0"/>
  <path d="M420 285.5 l -10 2 l 10 2 z" fill="#8e2418"/>
  <rect x="594" y="280" width="6" height="15" fill="#6f1c13"/>
</g>

<rect width="640" height="520" fill="url(#ev3-scr-vig)"/>
`,
  },

  /* The coffee: black, cold, with the dull skin that only forms on a cup
     nobody touched. Tested, and only coffee. */
  c3_coffee: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-cof-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2c2822"/><stop offset="0.55" stop-color="#151310"/><stop offset="1" stop-color="#070606"/>
  </linearGradient>
  <radialGradient id="ev3-cof-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe9bb" stop-opacity="0.28"/><stop offset="1" stop-color="#ffe9bb" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-cof-table" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4b3927"/><stop offset="0.55" stop-color="#2b2118"/><stop offset="1" stop-color="#14100b"/>
  </linearGradient>
  <linearGradient id="ev3-cof-cup" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8f8a80"/><stop offset="0.13" stop-color="#ded9cd"/>
    <stop offset="0.34" stop-color="#faf7ee"/><stop offset="0.62" stop-color="#cdc7ba"/>
    <stop offset="0.86" stop-color="#8b857a"/><stop offset="1" stop-color="#57534b"/>
  </linearGradient>
  <linearGradient id="ev3-cof-rim" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#b3ada1"/><stop offset="0.28" stop-color="#ffffff"/>
    <stop offset="0.6" stop-color="#d9d3c6"/><stop offset="1" stop-color="#7a756c"/>
  </linearGradient>
  <radialGradient id="ev3-cof-brew" cx="0.36" cy="0.3" r="0.82">
    <stop offset="0" stop-color="#4a3320"/><stop offset="0.42" stop-color="#2b1c11"/>
    <stop offset="0.82" stop-color="#160d08"/><stop offset="1" stop-color="#0a0604"/>
  </radialGradient>
  <linearGradient id="ev3-cof-skin" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6b563c" stop-opacity="0.55"/><stop offset="0.5" stop-color="#4c3a26" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#2a1d12" stop-opacity="0.5"/>
  </linearGradient>
  <linearGradient id="ev3-cof-spoon" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f4f7f9"/><stop offset="0.35" stop-color="#a8b0b6"/>
    <stop offset="0.7" stop-color="#5a6067"/><stop offset="1" stop-color="#262b30"/>
  </linearGradient>
  <filter id="ev3-cof-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="11"/>
  </filter>
  <radialGradient id="ev3-cof-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-cof-bg)"/>
<rect width="640" height="520" fill="url(#ev3-cof-table)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-cof-pool)"/>
<g stroke="#6d5333" stroke-width="1" opacity="0.16">
  <path d="M0 150 q 320 -14 640 6"/><path d="M0 300 q 320 -14 640 6"/><path d="M0 448 q 320 -14 640 6"/>
</g>

<!-- a cold ring where the cup stood before it was moved an inch -->
<ellipse cx="256" cy="404" rx="112" ry="30" fill="none" stroke="#6d4a24" stroke-width="4" opacity="0.28"/>
<ellipse cx="256" cy="404" rx="112" ry="30" fill="#6d4a24" opacity="0.05"/>

<!-- the saucer -->
<ellipse cx="316" cy="416" rx="188" ry="52" fill="#000" opacity="0.55" filter="url(#ev3-cof-soft)"/>
<ellipse cx="316" cy="404" rx="172" ry="46" fill="url(#ev3-cof-cup)"/>
<ellipse cx="316" cy="398" rx="172" ry="46" fill="url(#ev3-cof-rim)" opacity="0.9"/>
<ellipse cx="316" cy="396" rx="124" ry="32" fill="#c3bcae"/>
<ellipse cx="316" cy="394" rx="124" ry="32" fill="none" stroke="#8e887c" stroke-width="1.6" opacity="0.6"/>
<ellipse cx="316" cy="392" rx="86" ry="22" fill="#ddd6c8"/>
<path d="M186 384 q 60 -30 130 -30" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.5"/>
<path d="M446 386 q -50 -28 -110 -30" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.22"/>
<!-- a dark chip in the saucer glaze -->
<path d="M470 396 q 10 -6 16 2 q -8 6 -16 -2 z" fill="#5b5349" opacity="0.7"/>

<!-- the handle, behind the body -->
<path d="M414 262 q 62 -6 60 42 q -2 46 -60 42" fill="none" stroke="#3f3a33" stroke-width="30" stroke-linecap="round"/>
<path d="M414 262 q 62 -6 60 42 q -2 46 -60 42" fill="none" stroke="url(#ev3-cof-cup)" stroke-width="24" stroke-linecap="round"/>
<path d="M424 268 q 44 0 44 34" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.4"/>

<!-- the mug: thick diner ware -->
<path d="M186 218 L446 218 L430 358 Q 424 386 316 388 Q 208 386 202 358 Z" fill="url(#ev3-cof-cup)"/>
<path d="M186 218 L446 218 L442 246 L190 246 Z" fill="#ffffff" opacity="0.12"/>
<path d="M206 300 q 110 26 220 0" fill="none" stroke="#8e887c" stroke-width="1.6" opacity="0.3"/>
<path d="M204 322 q 112 26 224 0" fill="none" stroke="#8e887c" stroke-width="1.6" opacity="0.25"/>
<!-- a broad soft specular down the left of the barrel -->
<path d="M216 236 q -12 70 4 132" fill="none" stroke="#ffffff" stroke-width="22" opacity="0.3" stroke-linecap="round"/>
<path d="M228 240 q -10 66 2 124" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.4" stroke-linecap="round"/>
<path d="M414 246 q 12 58 0 110" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.14" stroke-linecap="round"/>
<!-- the base shadow the mug throws on itself -->
<path d="M202 344 Q 316 380 430 344 L426 366 Q 316 396 206 366 Z" fill="#2a251d" opacity="0.3"/>

<!-- the rim, and the coffee inside it -->
<ellipse cx="316" cy="218" rx="130" ry="34" fill="url(#ev3-cof-rim)"/>
<ellipse cx="316" cy="218" rx="130" ry="34" fill="none" stroke="#7a756c" stroke-width="1.4" opacity="0.6"/>
<ellipse cx="316" cy="222" rx="116" ry="29" fill="#3a342b"/>
<ellipse cx="316" cy="226" rx="112" ry="27" fill="url(#ev3-cof-brew)"/>
<!-- the SKIN: a dull matte film, wrinkled at the edge, no steam, no shine -->
<ellipse cx="316" cy="226" rx="112" ry="27" fill="url(#ev3-cof-skin)"/>
<path d="M210 222 q 42 16 106 15 q 66 -1 106 -17 q -38 24 -106 25 q -68 1 -106 -23 z" fill="#7a6244" opacity="0.28"/>
<g fill="none" stroke="#8a7050" stroke-width="1.4" opacity="0.35">
  <path d="M226 214 q 34 12 76 10"/><path d="M254 238 q 50 8 96 -6"/><path d="M300 208 q 46 4 86 -6"/>
</g>
<!-- the lamp's reflection, broken by the film instead of mirrored -->
<ellipse cx="266" cy="214" rx="30" ry="7" fill="#c8b38a" opacity="0.16"/>
<ellipse cx="262" cy="213" rx="15" ry="3.4" fill="#e2d0aa" opacity="0.2"/>
<!-- a tide line on the inside wall where the level dropped as it cooled -->
<path d="M212 214 q 104 -18 206 0" fill="none" stroke="#6a5236" stroke-width="2.4" opacity="0.4"/>
<!-- dust that settled on a surface nobody disturbed -->
<g fill="#d8c9a8" opacity="0.3">
  <circle cx="286" cy="230" r="1.8"/><circle cx="342" cy="218" r="1.4"/><circle cx="308" cy="240" r="1.5"/>
  <circle cx="368" cy="232" r="1.2"/>
</g>

<!-- the spoon, dry, never used -->
<g transform="rotate(-24 508 402)">
  <ellipse cx="470" cy="400" rx="26" ry="15" fill="#000" opacity="0.35" filter="url(#ev3-cof-soft)"/>
  <ellipse cx="466" cy="396" rx="26" ry="15" fill="url(#ev3-cof-spoon)"/>
  <ellipse cx="462" cy="392" rx="16" ry="8" fill="#ffffff" opacity="0.4"/>
  <path d="M490 396 L590 402 q 10 1 10 5 q 0 4 -10 4 L490 402 Z" fill="url(#ev3-cof-spoon)"/>
  <path d="M494 398 L586 403" fill="none" stroke="#ffffff" stroke-width="1.6" opacity="0.5"/>
</g>
<!-- an untouched sugar cube beside it -->
<g>
  <path d="M132 428 L172 424 L178 448 L138 452 Z" fill="#efe9dc"/>
  <path d="M132 428 L172 424 L166 414 L128 418 Z" fill="#fdfaf2"/>
  <path d="M172 424 L178 448 L172 440 L166 414 Z" fill="#cdc6b6"/>
  <g fill="#d6cfbf" opacity="0.7">
    <circle cx="146" cy="436" r="1.6"/><circle cx="160" cy="432" r="1.4"/><circle cx="152" cy="444" r="1.3"/>
  </g>
</g>

<rect width="640" height="520" fill="url(#ev3-cof-vig)"/>
`,
  },

  /* The engineer's slate: the trap drawn in chalk by the man who would
     never have needed to look it up, with the chalk stub still in the tray. */
  c3_expertread: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-exp-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2f2f2b"/><stop offset="0.55" stop-color="#161715"/><stop offset="1" stop-color="#070807"/>
  </linearGradient>
  <radialGradient id="ev3-exp-pool" cx="0.24" cy="0.1" r="0.86">
    <stop offset="0" stop-color="#ffeec6" stop-opacity="0.22"/><stop offset="1" stop-color="#ffeec6" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-exp-slate" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#3c443f"/><stop offset="0.35" stop-color="#2a312d"/>
    <stop offset="0.75" stop-color="#1c211e"/><stop offset="1" stop-color="#121614"/>
  </linearGradient>
  <linearGradient id="ev3-exp-frame" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8b6b3c"/><stop offset="0.28" stop-color="#5f4726"/><stop offset="1" stop-color="#2c2013"/>
  </linearGradient>
  <linearGradient id="ev3-exp-tray" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a5c31"/><stop offset="0.4" stop-color="#4e3a1e"/><stop offset="1" stop-color="#241a0d"/>
  </linearGradient>
  <linearGradient id="ev3-exp-chalk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.45" stop-color="#e6e4da"/><stop offset="1" stop-color="#a8a69c"/>
  </linearGradient>
  <filter id="ev3-exp-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev3-exp-vig" cx="0.44" cy="0.42" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-exp-bg)"/>
<!-- slate in its wooden frame -->
<rect x="12" y="12" width="616" height="452" rx="4" fill="url(#ev3-exp-frame)"/>
<rect x="12" y="12" width="616" height="9" fill="#b08a4c" opacity="0.45"/>
<rect x="34" y="34" width="572" height="408" fill="url(#ev3-exp-slate)"/>
<rect x="34" y="34" width="572" height="408" fill="url(#ev3-exp-pool)"/>
<!-- the ghosts of ten thousand erasures, wiped in arcs -->
<g fill="#c9cdc4" opacity="0.055">
  <ellipse cx="180" cy="150" rx="140" ry="70"/><ellipse cx="430" cy="300" rx="160" ry="80"/>
  <ellipse cx="300" cy="410" rx="180" ry="50"/>
</g>
<g fill="none" stroke="#d6dad2" stroke-width="12" opacity="0.04">
  <path d="M60 120 q 140 60 280 -10 q 120 -60 240 10"/><path d="M60 260 q 160 70 300 -10 q 110 -56 220 6"/>
</g>
<rect x="34" y="34" width="572" height="12" fill="#000" opacity="0.35"/>

<!-- THE CHALK TALK: mic, cut ground, cross-patch, board switch -->
<!-- the microphone, drawn as a circle on a stand -->
<g fill="none" stroke="#eceade" stroke-width="4.6" stroke-linecap="round" opacity="0.9">
  <ellipse cx="132" cy="132" rx="40" ry="48"/>
  <path d="M132 180 v 44"/><path d="M104 224 h 56"/>
</g>
<g fill="none" stroke="#eceade" stroke-width="2.4" opacity="0.45">
  <path d="M104 116 h 56"/><path d="M100 132 h 64"/><path d="M104 148 h 56"/>
</g>
<!-- the signal line, running right -->
<path d="M172 132 L336 132" fill="none" stroke="#eceade" stroke-width="4.4" stroke-linecap="round" opacity="0.9"/>
<!-- the ground return, running down and left, and CUT -->
<path d="M132 224 L132 316 L60 316" fill="none" stroke="#eceade" stroke-width="4.4" stroke-linecap="round" opacity="0.88"/>
<g stroke="#eceade" stroke-width="4.4" opacity="0.88" stroke-linecap="round">
  <path d="M42 316 h 36"/><path d="M48 328 h 24"/><path d="M54 340 h 12"/>
</g>
<!-- the cut mark, drawn twice as hard, with a slash and a small chalk cross -->
<g stroke="#f6f3e6" stroke-width="6" stroke-linecap="round">
  <path d="M116 268 L150 244"/><path d="M116 244 L150 268"/>
</g>
<ellipse cx="133" cy="256" rx="30" ry="24" fill="none" stroke="#f6f3e6" stroke-width="3" opacity="0.6"/>
<!-- the patch bay, a box with two jacks -->
<rect x="336" y="100" width="120" height="64" fill="none" stroke="#eceade" stroke-width="4.4"/>
<circle cx="368" cy="132" r="10" fill="none" stroke="#eceade" stroke-width="3.4"/>
<circle cx="424" cy="132" r="10" fill="none" stroke="#eceade" stroke-width="3.4"/>
<path d="M368 122 q 28 -30 56 0" fill="none" stroke="#eceade" stroke-width="4" opacity="0.85"/>
<!-- the plate supply, a battery symbol with a heavy arrow down -->
<path d="M456 132 L544 132 L544 208" fill="none" stroke="#eceade" stroke-width="4.4" stroke-linecap="round"/>
<g stroke="#eceade" stroke-width="4.4">
  <path d="M524 208 h 40"/><path d="M532 220 h 24"/><path d="M524 232 h 40"/><path d="M532 244 h 24"/>
</g>
<path d="M544 258 L544 300" fill="none" stroke="#eceade" stroke-width="4.4"/>
<path d="M544 314 l -11 -18 l 22 0 z" fill="#eceade"/>
<!-- the board switch: an open contact on the studio channel -->
<path d="M336 340 L406 340" fill="none" stroke="#eceade" stroke-width="4.4" stroke-linecap="round"/>
<path d="M406 340 L456 314" fill="none" stroke="#eceade" stroke-width="5.4" stroke-linecap="round"/>
<circle cx="406" cy="340" r="6" fill="#eceade"/>
<circle cx="462" cy="340" r="6" fill="#eceade"/>
<path d="M462 340 L544 340" fill="none" stroke="#eceade" stroke-width="4.4" stroke-linecap="round"/>
<path d="M336 132 L336 340" fill="none" stroke="#eceade" stroke-width="4.4" opacity="0.85"/>
<!-- the fatal instant, circled twice and arrowed -->
<ellipse cx="432" cy="330" rx="72" ry="46" fill="none" stroke="#f6f3e6" stroke-width="3.4" opacity="0.8"/>
<ellipse cx="432" cy="330" rx="80" ry="53" fill="none" stroke="#f6f3e6" stroke-width="2" opacity="0.45"/>
<path d="M392 404 L420 372" fill="none" stroke="#f6f3e6" stroke-width="4" stroke-linecap="round"/>
<path d="M420 372 l -3 16 l 15 -6 z" fill="#f6f3e6"/>
<!-- chalk texture: the strokes are dusty and break up on the slate -->
<g stroke="#0f1311" stroke-width="1.4" opacity="0.28">
  <path d="M180 130 h 150" stroke-dasharray="4 13"/><path d="M132 226 v 88" stroke-dasharray="5 15"/>
  <path d="M340 136 v 200" stroke-dasharray="4 16"/><path d="M462 342 h 80" stroke-dasharray="5 12"/>
</g>
<!-- chalk dust hanging in the light and settled on the tray -->
<g fill="#e8e6da" opacity="0.1">
  <circle cx="230" cy="200" r="26"/><circle cx="470" cy="250" r="20"/><circle cx="150" cy="300" r="18"/>
</g>

<!-- the tray, a chalk stub, and a felt eraser furred with dust -->
<rect x="12" y="452" width="616" height="30" rx="3" fill="url(#ev3-exp-tray)"/>
<rect x="12" y="452" width="616" height="6" fill="#a37f45" opacity="0.5"/>
<rect x="12" y="474" width="616" height="10" fill="#150f07" opacity="0.6"/>
<ellipse cx="330" cy="492" rx="240" ry="18" fill="#000" opacity="0.5" filter="url(#ev3-exp-soft)"/>
<g transform="rotate(-4 176 468)">
  <rect x="140" y="458" width="74" height="17" rx="3" fill="url(#ev3-exp-chalk)"/>
  <rect x="140" y="459" width="74" height="5" rx="2" fill="#ffffff" opacity="0.7"/>
  <path d="M214 458 q 8 8 0 17 z" fill="#cfcdc2"/>
</g>
<g transform="rotate(3 452 464)">
  <rect x="390" y="450" width="126" height="24" rx="3" fill="#3f3a33"/>
  <rect x="390" y="450" width="126" height="8" rx="3" fill="#6d6459"/>
  <rect x="390" y="466" width="126" height="8" rx="2" fill="#cfccc0"/>
  <g fill="#eae7db" opacity="0.5">
    <ellipse cx="412" cy="470" rx="14" ry="4"/><ellipse cx="466" cy="471" rx="18" ry="4"/>
  </g>
</g>
<g fill="#e6e3d6" opacity="0.35">
  <ellipse cx="270" cy="470" rx="30" ry="4"/><ellipse cx="560" cy="468" rx="24" ry="3.4"/>
</g>

<rect width="640" height="520" fill="url(#ev3-exp-vig)"/>
`,
  },

  /* The aircheck: a 1927 shellac disc on the turntable, the arm down, played
     over and over in the dark — and the cue watch that timed it. */
  c3_aircheck: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-air-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#26262a"/><stop offset="0.55" stop-color="#121214"/><stop offset="1" stop-color="#060607"/>
  </linearGradient>
  <radialGradient id="ev3-air-pool" cx="0.26" cy="0.1" r="0.8">
    <stop offset="0" stop-color="#ffe3a8" stop-opacity="0.2"/><stop offset="1" stop-color="#ffe3a8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-air-deck" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#4a4740"/><stop offset="0.45" stop-color="#2c2a26"/><stop offset="1" stop-color="#141312"/>
  </linearGradient>
  <radialGradient id="ev3-air-felt" cx="0.36" cy="0.3" r="0.8">
    <stop offset="0" stop-color="#6d5c3f"/><stop offset="0.6" stop-color="#4a3d28"/><stop offset="1" stop-color="#2a2216"/>
  </radialGradient>
  <radialGradient id="ev3-air-disc" cx="0.34" cy="0.26" r="0.86">
    <stop offset="0" stop-color="#4a4238"/><stop offset="0.3" stop-color="#26221d"/>
    <stop offset="0.7" stop-color="#141210"/><stop offset="1" stop-color="#0a0908"/>
  </radialGradient>
  <radialGradient id="ev3-air-label" cx="0.34" cy="0.28" r="0.82">
    <stop offset="0" stop-color="#e8d6a8"/><stop offset="0.5" stop-color="#c9ab6c"/>
    <stop offset="0.88" stop-color="#96793f"/><stop offset="1" stop-color="#6b5528"/>
  </radialGradient>
  <linearGradient id="ev3-air-arm" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#eaf0f4"/><stop offset="0.32" stop-color="#98a0a7"/>
    <stop offset="0.68" stop-color="#4c5259"/><stop offset="1" stop-color="#1d2126"/>
  </linearGradient>
  <linearGradient id="ev3-air-bak" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4e392a"/><stop offset="0.25" stop-color="#2c1e14"/>
    <stop offset="0.7" stop-color="#150e09"/><stop offset="1" stop-color="#291c12"/>
  </linearGradient>
  <linearGradient id="ev3-air-watch" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f4f7f9"/><stop offset="0.35" stop-color="#a9b1b7"/>
    <stop offset="0.72" stop-color="#575d63"/><stop offset="1" stop-color="#22262a"/>
  </linearGradient>
  <filter id="ev3-air-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-air-vig" cx="0.44" cy="0.44" r="0.74">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-air-bg)"/>
<rect width="640" height="520" fill="url(#ev3-air-deck)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-air-pool)"/>
<!-- the deck plate, its brushed grain and a screw at each corner -->
<g stroke="#5e5a52" stroke-width="0.8" opacity="0.16">
  <path d="M0 96 h640"/><path d="M0 178 h640"/><path d="M0 262 h640"/><path d="M0 346 h640"/><path d="M0 430 h640"/>
</g>
<g>
  <circle cx="52" cy="60" r="10" fill="#3b4046"/><circle cx="52" cy="60" r="10" fill="none" stroke="#8d949a" stroke-width="2"/>
  <path d="M46 60 h12" stroke="#14171a" stroke-width="2.4"/>
  <circle cx="588" cy="60" r="10" fill="#3b4046"/><circle cx="588" cy="60" r="10" fill="none" stroke="#8d949a" stroke-width="2"/>
  <path d="M582 60 h12" stroke="#14171a" stroke-width="2.4"/>
</g>

<!-- platter and felt -->
<ellipse cx="286" cy="304" rx="222" ry="200" fill="#000" opacity="0.55" filter="url(#ev3-air-soft)"/>
<circle cx="282" cy="288" r="208" fill="#2a2d31"/>
<circle cx="282" cy="288" r="208" fill="none" stroke="#0b0d0f" stroke-width="3"/>
<circle cx="282" cy="288" r="200" fill="url(#ev3-air-felt)"/>
<circle cx="282" cy="288" r="200" fill="none" stroke="#7a6642" stroke-width="1.6" opacity="0.4"/>

<!-- the shellac disc: thick, matte, and worn grey at the played grooves -->
<circle cx="282" cy="288" r="186" fill="url(#ev3-air-disc)"/>
<circle cx="282" cy="288" r="186" fill="none" stroke="#0a0908" stroke-width="4"/>
<circle cx="282" cy="288" r="180" fill="none" stroke="#5b5348" stroke-width="1.4" opacity="0.5"/>
<g fill="none" stroke="#6e6558" stroke-width="1" opacity="0.32">
  <circle cx="282" cy="288" r="172"/><circle cx="282" cy="288" r="164"/><circle cx="282" cy="288" r="156"/>
  <circle cx="282" cy="288" r="148"/><circle cx="282" cy="288" r="140"/><circle cx="282" cy="288" r="132"/>
  <circle cx="282" cy="288" r="124"/><circle cx="282" cy="288" r="116"/><circle cx="282" cy="288" r="108"/>
  <circle cx="282" cy="288" r="100"/>
</g>
<g fill="none" stroke="#0a0908" stroke-width="2" opacity="0.5">
  <circle cx="282" cy="288" r="168"/><circle cx="282" cy="288" r="128"/><circle cx="282" cy="288" r="96"/>
</g>
<!-- a broad sheen sweeping across the shellac, and the grey of over-playing -->
<path d="M124 172 q 96 -76 220 -46 q -122 22 -196 118 q -70 92 -46 210 q -80 -140 22 -282 z" fill="#e8e0cc" opacity="0.09"/>
<path d="M140 186 q 84 -60 184 -40" fill="none" stroke="#f0e8d2" stroke-width="6" opacity="0.13"/>
<g fill="#a89c86" opacity="0.11">
  <ellipse cx="196" cy="200" rx="52" ry="30" transform="rotate(-40 196 200)"/>
  <ellipse cx="374" cy="392" rx="48" ry="26" transform="rotate(-40 374 392)"/>
</g>
<!-- a scuff and a hairline scratch from a needle set down badly, often -->
<path d="M180 174 q 74 42 128 118" fill="none" stroke="#b7ab92" stroke-width="1.4" opacity="0.35"/>
<path d="M330 168 q -22 60 -8 118" fill="none" stroke="#b7ab92" stroke-width="1" opacity="0.22"/>

<!-- the label: printed rules and an arc, no words -->
<circle cx="282" cy="288" r="86" fill="url(#ev3-air-label)"/>
<circle cx="282" cy="288" r="86" fill="none" stroke="#5d4a20" stroke-width="2"/>
<circle cx="282" cy="288" r="78" fill="none" stroke="#5d4a20" stroke-width="1.4" opacity="0.6"/>
<path d="M216 262 q 66 -30 132 0" fill="none" stroke="#4b3a18" stroke-width="3.4" opacity="0.75"/>
<g stroke="#4b3a18" stroke-width="3" opacity="0.7" stroke-linecap="butt">
  <path d="M228 296 h 108" stroke-dasharray="22 6 34 7 26"/>
  <path d="M238 312 h 88" stroke-dasharray="18 6 26 7 20"/>
</g>
<path d="M226 332 q 56 24 112 0" fill="none" stroke="#4b3a18" stroke-width="2" opacity="0.5"/>
<g stroke="#4b3a18" stroke-width="2.4" opacity="0.55">
  <path d="M244 344 h 30"/><path d="M292 344 h 42"/>
</g>
<ellipse cx="248" cy="256" rx="26" ry="12" fill="#ffffff" opacity="0.16"/>
<!-- spindle -->
<circle cx="282" cy="288" r="9" fill="#12100e"/>
<circle cx="282" cy="288" r="16" fill="none" stroke="#8d949a" stroke-width="3"/>
<circle cx="282" cy="288" r="5" fill="#7a8086"/>
<circle cx="280" cy="285" r="2" fill="#e6ebef" opacity="0.7"/>

<!-- the tonearm, down and tracking, coming in from upper right -->
<circle cx="596" cy="146" r="42" fill="url(#ev3-air-bak)"/>
<circle cx="596" cy="146" r="42" fill="none" stroke="#0d0906" stroke-width="2"/>
<circle cx="596" cy="146" r="26" fill="#221710"/>
<path d="M572 122 q 22 -16 46 -6" fill="none" stroke="#a98a68" stroke-width="4" opacity="0.35"/>
<path d="M596 146 L360 350" fill="none" stroke="#0b0d0f" stroke-width="20" stroke-linecap="round"/>
<path d="M596 146 L360 350" fill="none" stroke="url(#ev3-air-arm)" stroke-width="14" stroke-linecap="round"/>
<path d="M588 142 L364 336" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.4"/>
<!-- the head shell and the needle in the groove -->
<g transform="rotate(-41 356 356)">
  <rect x="316" y="336" width="76" height="40" rx="6" fill="url(#ev3-air-bak)"/>
  <rect x="320" y="339" width="68" height="7" rx="3" fill="#8a6a4a" opacity="0.4"/>
  <rect x="330" y="376" width="46" height="12" rx="3" fill="#1a1410"/>
  <path d="M352 388 l 4 14 l -8 0 z" fill="#c8ced3"/>
</g>
<ellipse cx="352" cy="372" rx="16" ry="7" fill="#000" opacity="0.4"/>
<!-- the rest post the arm is NOT sitting on -->
<rect x="600" y="238" width="18" height="46" rx="4" fill="#2f3439"/>
<rect x="602" y="240" width="4" height="42" fill="#9aa2a8" opacity="0.5"/>
<path d="M596 238 q 13 -8 26 0" fill="none" stroke="#4c5259" stroke-width="5"/>

<!-- the cue watch, face up on the deck, sweep stopped -->
<g transform="rotate(11 110 424)">
  <ellipse cx="110" cy="432" rx="62" ry="58" fill="#000" opacity="0.5" filter="url(#ev3-air-soft)"/>
  <circle cx="106" cy="424" r="58" fill="url(#ev3-air-watch)"/>
  <circle cx="106" cy="424" r="48" fill="#efe9d8"/>
  <circle cx="106" cy="424" r="48" fill="none" stroke="#8a857a" stroke-width="1.4"/>
  <g stroke="#2c281f" stroke-width="2.4">
    <path d="M106 380 v 9"/><path d="M150 424 h -9"/><path d="M106 468 v -9"/><path d="M62 424 h 9"/>
  </g>
  <g stroke="#2c281f" stroke-width="1.4" opacity="0.7">
    <path d="M137 393 l -6 6"/><path d="M137 455 l -6 -6"/><path d="M75 455 l 6 -6"/><path d="M75 393 l 6 6"/>
  </g>
  <path d="M106 424 L106 388" stroke="#1a1712" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M106 424 L134 442" stroke="#8e2a1c" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="106" cy="424" r="4" fill="#1a1712"/>
  <rect x="98" y="358" width="16" height="12" rx="3" fill="#8d949a"/>
  <rect x="100" y="360" width="12" height="4" rx="2" fill="#e2e8ec" opacity="0.6"/>
  <path d="M74 396 q 26 -22 60 -16" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.22"/>
</g>

<rect width="640" height="520" fill="url(#ev3-air-vig)"/>
`,
  },

  /* The studio-mic channel on the board: one bakelite knob, opened, and the
     shadow of the hand that opened it lying across the panel. */
  c3_boardaccess: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-brd-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2b2d"/><stop offset="0.55" stop-color="#141517"/><stop offset="1" stop-color="#070808"/>
  </linearGradient>
  <radialGradient id="ev3-brd-pool" cx="0.22" cy="0.08" r="0.82">
    <stop offset="0" stop-color="#ffe6ae" stop-opacity="0.24"/><stop offset="1" stop-color="#ffe6ae" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-brd-panel" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#57534a"/><stop offset="0.3" stop-color="#3a3731"/>
    <stop offset="0.72" stop-color="#23211d"/><stop offset="1" stop-color="#131211"/>
  </linearGradient>
  <radialGradient id="ev3-brd-knob" cx="0.32" cy="0.24" r="0.85">
    <stop offset="0" stop-color="#6b503a"/><stop offset="0.28" stop-color="#3c2a1c"/>
    <stop offset="0.68" stop-color="#1d1309"/><stop offset="1" stop-color="#0c0805"/>
  </radialGradient>
  <radialGradient id="ev3-brd-knob2" cx="0.32" cy="0.24" r="0.85">
    <stop offset="0" stop-color="#584130"/><stop offset="0.3" stop-color="#2f2116"/>
    <stop offset="0.72" stop-color="#170f08"/><stop offset="1" stop-color="#0a0604"/>
  </radialGradient>
  <linearGradient id="ev3-brd-ring" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f2f6f8"/><stop offset="0.3" stop-color="#9aa2a8"/>
    <stop offset="0.68" stop-color="#4a5057"/><stop offset="1" stop-color="#1c2024"/>
  </linearGradient>
  <linearGradient id="ev3-brd-plate" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c9c2ac"/><stop offset="0.5" stop-color="#a49c86"/><stop offset="1" stop-color="#6f6957"/>
  </linearGradient>
  <filter id="ev3-brd-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="14"/>
  </filter>
  <radialGradient id="ev3-brd-vig" cx="0.42" cy="0.44" r="0.74">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-brd-bg)"/>
<rect width="640" height="520" fill="url(#ev3-brd-panel)"/>
<rect width="640" height="520" fill="url(#ev3-brd-pool)"/>
<!-- the sloped console face: a seam, a screw line, brushed grain -->
<g stroke="#6e695c" stroke-width="0.8" opacity="0.14">
  <path d="M0 60 h640"/><path d="M0 132 h640"/><path d="M0 210 h640"/><path d="M0 300 h640"/><path d="M0 396 h640"/>
</g>
<path d="M0 108 L640 96 L640 106 L0 118 Z" fill="#0d0c0b" opacity="0.55"/>
<path d="M0 100 L640 88 L640 96 L0 108 Z" fill="#7b7568" opacity="0.28"/>
<g>
  <circle cx="52" cy="72" r="8" fill="#3a3e42"/><path d="M46 72 h12" stroke="#14171a" stroke-width="2.2"/>
  <circle cx="588" cy="66" r="8" fill="#3a3e42"/><path d="M582 66 h12" stroke="#14171a" stroke-width="2.2"/>
</g>

<!-- neighbouring channels, closed, receding to the right -->
<g>
  <circle cx="500" cy="270" r="52" fill="#0e0c0a" opacity="0.6"/>
  <circle cx="498" cy="266" r="50" fill="url(#ev3-brd-ring)"/>
  <circle cx="498" cy="266" r="43" fill="url(#ev3-brd-knob2)"/>
  <path d="M498 266 L470 288" stroke="#c9bda4" stroke-width="5" stroke-linecap="round" opacity="0.75"/>
  <path d="M470 232 q 26 -14 54 -4" fill="none" stroke="#a8875f" stroke-width="5" opacity="0.22"/>
  <g stroke="#8f887a" stroke-width="2" opacity="0.5">
    <path d="M440 226 l -8 -8"/><path d="M498 206 v -11"/><path d="M556 226 l 8 -8"/><path d="M568 266 h 11"/>
  </g>
</g>
<g>
  <circle cx="600" cy="400" r="46" fill="#0e0c0a" opacity="0.6"/>
  <circle cx="598" cy="396" r="44" fill="url(#ev3-brd-ring)" opacity="0.8"/>
  <circle cx="598" cy="396" r="38" fill="url(#ev3-brd-knob2)"/>
  <path d="M598 396 L572 414" stroke="#c9bda4" stroke-width="4.4" stroke-linecap="round" opacity="0.6"/>
</g>

<!-- THE CHANNEL: the studio mic pot, opened -->
<circle cx="248" cy="286" r="122" fill="#0c0a08" opacity="0.65"/>
<!-- engraved arc of ticks around it, with a longer tick at the open position -->
<g stroke="#b7b0a0" stroke-width="3" opacity="0.55" stroke-linecap="round">
  <path d="M164 370 l -12 12"/><path d="M148 330 l -16 6"/><path d="M144 286 l -17 0"/>
  <path d="M150 240 l -16 -6"/><path d="M166 202 l -12 -12"/><path d="M200 174 l -7 -15"/>
  <path d="M244 164 l 0 -17"/><path d="M292 172 l 7 -16"/><path d="M330 198 l 12 -13"/>
</g>
<path d="M356 236 l 20 -8" stroke="#f0ead8" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
<path d="M368 216 h 60" stroke="#c9c2ac" stroke-width="3" opacity="0.4"/>
<circle cx="248" cy="286" r="116" fill="url(#ev3-brd-ring)"/>
<circle cx="248" cy="286" r="104" fill="#151312"/>
<circle cx="248" cy="286" r="98" fill="url(#ev3-brd-knob)"/>
<!-- the knurled skirt of the bakelite knob -->
<g stroke="#0d0906" stroke-width="4" opacity="0.55">
  <path d="M248 188 v 18"/><path d="M317 217 l 13 -13"/><path d="M346 286 h 18"/>
  <path d="M317 355 l 13 13"/><path d="M248 384 v 18"/><path d="M179 355 l -13 13"/>
  <path d="M150 286 h -18"/><path d="M179 217 l -13 -13"/>
</g>
<!-- bakelite: a broad, soft, slightly waxy highlight, not a chrome glint -->
<path d="M180 218 q 62 -44 132 -18 q -78 6 -124 62 q -44 54 -30 122 q -44 -84 22 -166 z" fill="#c69a68" opacity="0.16"/>
<path d="M192 224 q 52 -34 108 -18" fill="none" stroke="#e0b782" stroke-width="9" opacity="0.2"/>
<ellipse cx="212" cy="240" rx="30" ry="16" fill="#f0c893" opacity="0.14" transform="rotate(-38 212 240)"/>
<circle cx="248" cy="286" r="98" fill="none" stroke="#0a0705" stroke-width="2"/>
<!-- the pointer, turned well past centre: the channel is OPEN -->
<path d="M248 286 L326 224" stroke="#0a0705" stroke-width="12" stroke-linecap="round"/>
<path d="M248 286 L326 224" stroke="#efe6cf" stroke-width="7" stroke-linecap="round"/>
<path d="M258 278 L320 229" stroke="#ffffff" stroke-width="2.4" opacity="0.6"/>
<circle cx="248" cy="286" r="20" fill="#1b120b"/>
<circle cx="248" cy="286" r="20" fill="none" stroke="url(#ev3-brd-ring)" stroke-width="3"/>
<circle cx="240" cy="278" r="6" fill="#c69a68" opacity="0.3"/>
<!-- the little engraved designation plate under it, blank -->
<rect x="182" y="422" width="132" height="26" rx="3" fill="url(#ev3-brd-plate)"/>
<rect x="182" y="422" width="132" height="6" rx="3" fill="#e2dbc4" opacity="0.5"/>
<g stroke="#4a4638" stroke-width="2.6" opacity="0.65">
  <path d="M194 436 h 34" stroke-dasharray="14 5 12"/><path d="M240 436 h 60" stroke-dasharray="20 5 16 5 12"/>
</g>
<g fill="#0f0d0b" opacity="0.5">
  <circle cx="188" cy="428" r="3"/><circle cx="308" cy="428" r="3"/>
</g>

<!-- THE HAND: not the hand, its shadow, thrown across the panel by the
     lamp behind the operator, fingers reaching for this one knob -->
<g filter="url(#ev3-brd-soft)" opacity="0.5">
  <path d="M-60 46 q 96 -30 168 30 q 44 34 52 92 q 6 46 -34 62 q -46 18 -96 -22 q -52 -42 -110 -66 z" fill="#000"/>
  <g stroke="#000" stroke-linecap="round" fill="none">
    <path d="M60 100 q 92 22 156 84" stroke-width="42"/>
    <path d="M52 148 q 96 30 146 100" stroke-width="40"/>
    <path d="M44 198 q 92 34 134 108" stroke-width="38"/>
    <path d="M40 246 q 80 34 112 106" stroke-width="34"/>
    <path d="M18 92 q 42 -14 86 34" stroke-width="46"/>
  </g>
</g>
<!-- the panel dust, disturbed in one arc where a sleeve swept it -->
<path d="M96 402 q 90 -34 178 -12" fill="none" stroke="#cfc7b0" stroke-width="7" opacity="0.06"/>
<g opacity="0.1" fill="none" stroke="#e8e4d8" stroke-width="1.2">
  <path d="M392 322 q 11 9 0 19"/><path d="M399 318 q 16 13 0 27"/><path d="M406 314 q 21 17 0 35"/>
</g>

<rect width="640" height="520" fill="url(#ev3-brd-vig)"/>
`,
  },

  /* Spikes against curves: the engineer's real signature and the 6:15 entry,
     laid side by side under the glass. */
  c3_forgery: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-frg-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2d2a23"/><stop offset="0.55" stop-color="#151310"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-frg-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#fff0c8" stop-opacity="0.34"/><stop offset="1" stop-color="#fff0c8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-frg-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#453626"/><stop offset="0.55" stop-color="#291f17"/><stop offset="1" stop-color="#120f0b"/>
  </linearGradient>
  <linearGradient id="ev3-frg-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#f8f2df"/><stop offset="0.36" stop-color="#eae2c8"/>
    <stop offset="0.74" stop-color="#cfc4a4"/><stop offset="1" stop-color="#a1977a"/>
  </linearGradient>
  <linearGradient id="ev3-frg-paper2" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#efe8d2"/><stop offset="0.5" stop-color="#dcd2b4"/><stop offset="1" stop-color="#948b70"/>
  </linearGradient>
  <radialGradient id="ev3-frg-lens" cx="0.32" cy="0.24" r="0.86">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.4"/><stop offset="0.32" stop-color="#ffffff" stop-opacity="0.1"/>
    <stop offset="0.72" stop-color="#c9d2d8" stop-opacity="0.14"/><stop offset="1" stop-color="#2a3036" stop-opacity="0.4"/>
  </radialGradient>
  <linearGradient id="ev3-frg-rim" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f4f8fa"/><stop offset="0.26" stop-color="#a3abb1"/>
    <stop offset="0.58" stop-color="#4e545b"/><stop offset="0.82" stop-color="#c6cdd2"/><stop offset="1" stop-color="#1e2226"/>
  </linearGradient>
  <linearGradient id="ev3-frg-handle" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5b3f26"/><stop offset="0.28" stop-color="#3a2716"/>
    <stop offset="0.72" stop-color="#1e140b"/><stop offset="1" stop-color="#33230f"/>
  </linearGradient>
  <filter id="ev3-frg-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-frg-vig" cx="0.42" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-frg-bg)"/>
<rect width="640" height="520" fill="url(#ev3-frg-desk)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-frg-pool)"/>
<g stroke="#6b5334" stroke-width="1" opacity="0.15">
  <path d="M0 132 q 320 -12 640 6"/><path d="M0 320 q 320 -12 640 6"/><path d="M0 480 q 320 -12 640 6"/>
</g>

<!-- SPECIMEN ONE: an older page of the log, the engineer's true hand -->
<ellipse cx="234" cy="212" rx="210" ry="34" fill="#000" opacity="0.5" filter="url(#ev3-frg-soft)"/>
<g transform="rotate(-4 250 148)">
  <path d="M48 56 L466 42 L472 214 L54 228 Z" fill="url(#ev3-frg-paper2)"/>
  <path d="M48 56 L466 42 L466 54 L48 68 Z" fill="#ffffff" opacity="0.26"/>
  <g stroke="#a0977c" stroke-width="1" opacity="0.6">
    <path d="M56 96 L468 82"/><path d="M56 136 L468 122"/><path d="M58 176 L470 162"/>
  </g>
  <path d="M300 44 L306 224" stroke="#a0977c" stroke-width="1" opacity="0.5"/>
  <g stroke="#3a3427" stroke-width="2.1" opacity="0.6" stroke-linecap="butt">
    <path d="M64 88 h 96" stroke-dasharray="18 5 26 6 14"/>
    <path d="M180 84 h 96" stroke-dasharray="22 5 20 6 22"/>
    <path d="M64 128 h 96" stroke-dasharray="24 5 18 6 20"/>
    <path d="M180 124 h 96" stroke-dasharray="16 5 28 6 16"/>
    <path d="M64 168 h 96" stroke-dasharray="20 5 24 6 18"/>
    <path d="M180 164 h 96" stroke-dasharray="26 5 16 6 24"/>
  </g>
  <!-- the seismograph: hard spikes, sharp reversals, ink pressure varying -->
  <path d="M318 96 l 12 -30 l 10 38 l 11 -44 l 10 40 l 12 -34 l 10 36 l 13 -26 l 11 30 l 12 -22" fill="none" stroke="#1a1f2c" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M318 136 l 11 -32 l 11 40 l 10 -42 l 12 38 l 10 -30 l 12 34 l 12 -28 l 12 32 l 11 -20" fill="none" stroke="#1a1f2c" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M318 176 l 12 -28 l 10 36 l 12 -42 l 10 38 l 11 -32 l 11 34 l 12 -24 l 12 28 l 11 -18" fill="none" stroke="#1a1f2c" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M318 96 l 12 -30 l 10 38" fill="none" stroke="#39456a" stroke-width="1.2" opacity="0.6"/>
  <path d="M470 214 L440 216 L468 190 Z" fill="#a2997c"/>
</g>

<!-- SPECIMEN TWO: tonight's sheet, the 6:15 entry, laid over the first -->
<ellipse cx="360" cy="424" rx="240" ry="34" fill="#000" opacity="0.55" filter="url(#ev3-frg-soft)"/>
<g transform="rotate(3 350 360)">
  <path d="M110 246 L588 232 L596 424 L118 438 Z" fill="url(#ev3-frg-paper)"/>
  <path d="M110 246 L588 232 L588 246 L110 260 Z" fill="#ffffff" opacity="0.32"/>
  <g stroke="#a0977c" stroke-width="1.1" opacity="0.6">
    <path d="M118 292 L594 278"/><path d="M118 336 L594 322"/><path d="M120 380 L596 366"/>
  </g>
  <path d="M368 234 L376 434" stroke="#a0977c" stroke-width="1.1" opacity="0.5"/>
  <g stroke="#3a3427" stroke-width="2.2" opacity="0.62" stroke-linecap="butt">
    <path d="M128 284 h 106" stroke-dasharray="20 5 28 6 16"/>
    <path d="M252 280 h 100" stroke-dasharray="24 5 22 6 20"/>
    <path d="M128 328 h 106" stroke-dasharray="26 5 20 6 22"/>
    <path d="M252 324 h 100" stroke-dasharray="18 5 30 6 14"/>
    <path d="M128 372 h 106" stroke-dasharray="22 5 24 6 18"/>
    <path d="M252 368 h 100" stroke-dasharray="28 5 18 6 24"/>
  </g>
  <!-- two ordinary entries, then THE ONE: round, slow, evenly pressured -->
  <path d="M392 288 l 12 -26 l 10 34 l 11 -38 l 10 34 l 12 -28 l 10 30 l 12 -22" fill="none" stroke="#1a1f2c" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M392 332 l 11 -28 l 11 36 l 10 -38 l 12 34 l 10 -26 l 12 30 l 12 -24" fill="none" stroke="#1a1f2c" stroke-width="2.6" stroke-linecap="round"/>
  <rect x="380" y="352" width="196" height="38" fill="#c9b98f" opacity="0.28"/>
  <path d="M392 376 q 8 -26 18 -8 q 8 16 16 -2 q 7 -20 15 -2 q 7 18 16 -1 q 8 -18 16 0 q 6 14 14 -2 q 7 -14 14 0" fill="none" stroke="#141926" stroke-width="3" stroke-linecap="round"/>
  <path d="M392 376 q 8 -26 18 -8 q 8 16 16 -2" fill="none" stroke="#4a5578" stroke-width="1.2" opacity="0.55"/>
  <path d="M596 424 L562 426 L592 398 Z" fill="#a2997c"/>
</g>

<!-- the magnifier, held over the boundary between the two hands -->
<g transform="rotate(-16 430 300)">
  <ellipse cx="404" cy="330" rx="140" ry="140" fill="#000" opacity="0.4" filter="url(#ev3-frg-soft)"/>
  <circle cx="396" cy="304" r="136" fill="url(#ev3-frg-lens)"/>
  <circle cx="396" cy="304" r="136" fill="none" stroke="url(#ev3-frg-rim)" stroke-width="16"/>
  <circle cx="396" cy="304" r="126" fill="none" stroke="#0e1114" stroke-width="3" opacity="0.5"/>
  <circle cx="396" cy="304" r="145" fill="none" stroke="#0b0d0f" stroke-width="3" opacity="0.6"/>
  <!-- the lens sheen -->
  <path d="M300 208 q 74 -54 168 -30 q -94 12 -152 74 q -56 60 -44 138 q -52 -96 28 -182 z" fill="#ffffff" opacity="0.18"/>
  <path d="M316 216 q 62 -40 132 -22" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.3"/>
  <ellipse cx="452" cy="392" rx="46" ry="22" fill="#ffffff" opacity="0.07" transform="rotate(-38 452 392)"/>
  <!-- the ferrule and the turned wooden handle -->
  <path d="M498 400 L556 458 L522 492 L464 434 Z" fill="url(#ev3-frg-rim)"/>
  <path d="M502 404 L552 454" stroke="#ffffff" stroke-width="3.4" opacity="0.5"/>
  <path d="M540 476 L616 552 L570 596 L494 520 Z" fill="url(#ev3-frg-handle)"/>
  <path d="M546 480 L610 546" stroke="#a3763f" stroke-width="5" opacity="0.4"/>
  <path d="M528 464 L586 522" stroke="#c8ced3" stroke-width="9"/>
  <path d="M530 462 L584 516" stroke="#eef3f6" stroke-width="2.4" opacity="0.6"/>
</g>

<rect width="640" height="520" fill="url(#ev3-frg-vig)"/>
`,
  },

  /* Iris's pocket diary, open on the organ bench, and the diner check that
     backs it up: six to seven, three blocks away, split the pie. */
  c3_dinner: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-din-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2e2a22"/><stop offset="0.55" stop-color="#161310"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev3-din-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe9b8" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-din-bench" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#6a4c2c"/><stop offset="0.45" stop-color="#452f1a"/><stop offset="1" stop-color="#1e150c"/>
  </linearGradient>
  <linearGradient id="ev3-din-leather" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6e4a34"/><stop offset="0.3" stop-color="#4a2d1e"/>
    <stop offset="0.75" stop-color="#2c1911"/><stop offset="1" stop-color="#170d08"/>
  </linearGradient>
  <linearGradient id="ev3-din-page" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fbf6e6"/><stop offset="0.36" stop-color="#efe7cf"/>
    <stop offset="0.74" stop-color="#d6cbaa"/><stop offset="1" stop-color="#a99e7c"/>
  </linearGradient>
  <linearGradient id="ev3-din-check" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#f6ead4"/><stop offset="0.5" stop-color="#e2d3b0"/><stop offset="1" stop-color="#a8987a"/>
  </linearGradient>
  <linearGradient id="ev3-din-ribbon" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#a83e33"/><stop offset="0.4" stop-color="#78241c"/><stop offset="1" stop-color="#3e0f0a"/>
  </linearGradient>
  <filter id="ev3-din-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-din-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-din-bg)"/>
<rect width="640" height="520" fill="url(#ev3-din-bench)" opacity="0.85"/>
<rect width="640" height="520" fill="url(#ev3-din-pool)"/>
<g stroke="#8a6636" stroke-width="1.2" opacity="0.18">
  <path d="M0 108 q 320 -14 640 6"/><path d="M0 246 q 320 -14 640 6"/>
  <path d="M0 384 q 320 -14 640 6"/><path d="M0 490 q 320 -14 640 6"/>
</g>
<!-- sheet music slid half under the diary -->
<g transform="rotate(6 470 190)">
  <path d="M330 60 L622 44 L634 274 L342 290 Z" fill="#e8dfc4"/>
  <path d="M330 60 L622 44 L622 56 L330 72 Z" fill="#ffffff" opacity="0.28"/>
  <g stroke="#575039" stroke-width="1.2" opacity="0.75">
    <path d="M346 106 L616 92"/><path d="M346 116 L616 102"/><path d="M346 126 L616 112"/><path d="M346 136 L616 122"/><path d="M346 146 L616 132"/>
    <path d="M348 186 L618 172"/><path d="M348 196 L618 182"/><path d="M348 206 L618 192"/><path d="M348 216 L618 202"/><path d="M348 226 L618 212"/>
  </g>
  <g fill="#2f2a1e">
    <ellipse cx="382" cy="128" rx="6" ry="4.4" transform="rotate(-18 382 128)"/>
    <ellipse cx="424" cy="115" rx="6" ry="4.4" transform="rotate(-18 424 115)"/>
    <ellipse cx="470" cy="122" rx="6" ry="4.4" transform="rotate(-18 470 122)"/>
    <ellipse cx="520" cy="106" rx="6" ry="4.4" transform="rotate(-18 520 106)"/>
    <ellipse cx="404" cy="208" rx="6" ry="4.4" transform="rotate(-18 404 208)"/>
    <ellipse cx="456" cy="196" rx="6" ry="4.4" transform="rotate(-18 456 196)"/>
    <ellipse cx="512" cy="202" rx="6" ry="4.4" transform="rotate(-18 512 202)"/>
  </g>
  <g stroke="#2f2a1e" stroke-width="1.8">
    <path d="M388 128 v -26"/><path d="M430 115 v -26"/><path d="M476 122 v -26"/><path d="M526 106 v -26"/>
    <path d="M410 208 v -26"/><path d="M462 196 v -26"/><path d="M518 202 v -26"/>
  </g>
  <path d="M352 92 q -12 24 0 48 q 10 20 -2 40" fill="none" stroke="#2f2a1e" stroke-width="4"/>
</g>

<!-- the diary, open, small and thick, soft leather covers curling -->
<ellipse cx="286" cy="446" rx="220" ry="32" fill="#000" opacity="0.6" filter="url(#ev3-din-soft)"/>
<g transform="rotate(-4 290 320)">
  <path d="M46 168 L288 152 L286 452 L44 468 Z" fill="url(#ev3-din-leather)"/>
  <path d="M296 152 L540 168 L538 468 L294 452 Z" fill="url(#ev3-din-leather)"/>
  <path d="M46 168 L288 152 L288 162 L46 178 Z" fill="#a06b4a" opacity="0.35"/>
  <path d="M288 152 L296 152 L294 452 L286 452 Z" fill="#150c07"/>
  <!-- page block edges -->
  <path d="M58 180 L286 164 L284 442 L56 458 Z" fill="#d6ccae"/>
  <path d="M298 164 L528 180 L526 458 L296 442 Z" fill="#d6ccae"/>
  <g stroke="#a89d7d" stroke-width="1" opacity="0.6">
    <path d="M58 186 L286 170"/><path d="M298 170 L528 186"/>
  </g>
  <!-- the two open leaves -->
  <path d="M66 186 L284 170 L282 436 L64 452 Z" fill="url(#ev3-din-page)"/>
  <path d="M300 170 L518 186 L516 452 L298 436 Z" fill="url(#ev3-din-page)"/>
  <path d="M272 172 L284 170 L282 436 L272 435 Z" fill="#8c8266" opacity="0.35"/>
  <path d="M300 170 L312 172 L312 435 L302 436 Z" fill="#8c8266" opacity="0.3"/>
  <!-- printed date rules and day headings -->
  <g stroke="#a89d7d" stroke-width="1" opacity="0.65">
    <path d="M74 232 L282 217"/><path d="M74 262 L282 247"/><path d="M74 292 L282 277"/>
    <path d="M74 322 L282 307"/><path d="M74 352 L282 337"/><path d="M74 382 L282 367"/>
    <path d="M306 217 L514 232"/><path d="M306 247 L514 262"/><path d="M306 277 L514 292"/>
    <path d="M306 307 L514 322"/><path d="M306 337 L514 352"/><path d="M306 367 L514 382"/>
  </g>
  <path d="M70 204 L284 189" stroke="#5f5740" stroke-width="2.4" opacity="0.6"/>
  <path d="M306 189 L516 204" stroke="#5f5740" stroke-width="2.4" opacity="0.6"/>
  <g stroke="#4d4634" stroke-width="3" opacity="0.6">
    <path d="M80 196 h 56" stroke-dasharray="18 5 22"/><path d="M320 198 h 60" stroke-dasharray="20 5 24"/>
  </g>
  <!-- her hand: round, quick, cheerful, running a little uphill -->
  <g fill="none" stroke="#243a5e" stroke-width="2.4" stroke-linecap="round" opacity="0.9">
    <path d="M80 226 c 6 -12 12 -2 15 3 c 6 -13 13 -3 16 2 c 6 -11 12 -1 16 4 c 7 -10 13 -2 17 3 c 6 -12 13 -2 16 3 c 7 -10 13 -1 17 4"/>
    <path d="M80 256 c 7 -13 13 -2 16 3 c 6 -12 13 -3 16 3 c 7 -12 13 -1 17 4 c 6 -11 13 -2 17 3 c 7 -13 14 -2 17 4 c 6 -9 12 -1 16 3 c 7 -11 13 -2 17 3"/>
    <path d="M80 286 c 6 -12 13 -3 16 2 c 7 -12 13 -1 16 4 c 6 -11 13 -2 17 3 c 7 -12 13 -2 17 4 c 6 -10 12 -1 16 3"/>
    <path d="M312 232 c 6 -12 13 -2 16 3 c 7 -13 13 -3 17 2 c 6 -11 13 -1 17 4 c 7 -10 13 -2 17 3 c 6 -12 13 -2 17 3 c 7 -10 13 -1 17 4 c 6 -11 12 -2 16 3"/>
    <path d="M312 262 c 7 -12 13 -2 17 3 c 6 -12 13 -3 16 3 c 7 -12 14 -1 17 4 c 6 -11 13 -2 17 3 c 7 -13 13 -2 17 4"/>
    <path d="M312 292 c 6 -11 13 -3 16 2 c 7 -12 13 -1 17 4 c 6 -11 13 -2 17 3 c 7 -12 14 -2 17 4 c 6 -10 12 -1 16 3 c 6 -11 13 -2 17 3"/>
    <path d="M312 322 c 7 -12 13 -2 17 3 c 6 -13 13 -2 16 3 c 7 -11 13 -1 17 4"/>
  </g>
  <!-- a small drawn heart-ish flourish and an underline she gave the hour -->
  <path d="M88 312 q 26 12 54 2" fill="none" stroke="#243a5e" stroke-width="2" opacity="0.7"/>
  <!-- the silk place-ribbon -->
  <path d="M292 440 q 4 40 -14 62 q -8 10 -18 8 l 22 -70 z" fill="url(#ev3-din-ribbon)"/>
  <path d="M292 440 q 2 34 -10 54" fill="none" stroke="#c96a58" stroke-width="2" opacity="0.4"/>
</g>

<!-- the diner check, spiked and kept: pencil figures and a thumb of grease -->
<g transform="rotate(13 480 400)">
  <path d="M400 316 L568 328 L560 470 L392 458 Z" fill="#000" opacity="0.4" filter="url(#ev3-din-soft)"/>
  <path d="M396 312 L564 324 L556 466 L388 454 Z" fill="url(#ev3-din-check)"/>
  <path d="M396 312 L564 324 L564 334 L396 322 Z" fill="#ffffff" opacity="0.3"/>
  <path d="M400 348 L560 360" stroke="#6b6047" stroke-width="2" opacity="0.6"/>
  <g stroke="#3f3829" stroke-width="2.2" opacity="0.7" stroke-linecap="butt">
    <path d="M404 372 h 92" stroke-dasharray="20 5 28 6 16"/><path d="M516 374 h 34" stroke-dasharray="12 5 10"/>
    <path d="M404 396 h 92" stroke-dasharray="26 5 20 6 22"/><path d="M516 398 h 34" stroke-dasharray="10 5 14"/>
    <path d="M404 420 h 74" stroke-dasharray="18 5 24 6 12"/><path d="M516 422 h 34" stroke-dasharray="14 5 12"/>
  </g>
  <path d="M400 436 L556 448" stroke="#3f3829" stroke-width="1.6" opacity="0.7"/>
  <g stroke="#2f2a20" stroke-width="3" opacity="0.85" stroke-linecap="butt">
    <path d="M498 452 h 52" stroke-dasharray="18 6 22"/>
  </g>
  <!-- the spike hole and a grease shadow -->
  <ellipse cx="480" cy="330" rx="7" ry="5" fill="#3a3226" opacity="0.7"/>
  <ellipse cx="432" cy="440" rx="26" ry="16" fill="#8d7a4c" opacity="0.2"/>
</g>

<rect width="640" height="520" fill="url(#ev3-din-vig)"/>
`,
  },

  /* Vellum's cancellation: an engraved letterhead, a typed paragraph of
     arithmetic, and a packet of the product on the blotter beside it. */
  c3_sponsor: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-spo-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2d2a24"/><stop offset="0.55" stop-color="#151310"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-spo-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffedc6" stop-opacity="0.3"/><stop offset="1" stop-color="#ffedc6" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-spo-blot" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#3c4a4a"/><stop offset="0.5" stop-color="#243030"/><stop offset="1" stop-color="#111818"/>
  </linearGradient>
  <linearGradient id="ev3-spo-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fdfaf0"/><stop offset="0.36" stop-color="#f2ecda"/>
    <stop offset="0.74" stop-color="#d9d0b6"/><stop offset="1" stop-color="#a99f85"/>
  </linearGradient>
  <linearGradient id="ev3-spo-pack" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#8b2d24"/><stop offset="0.22" stop-color="#c2503c"/>
    <stop offset="0.55" stop-color="#8e2f22"/><stop offset="1" stop-color="#4a1310"/>
  </linearGradient>
  <linearGradient id="ev3-spo-foil" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8c9298"/><stop offset="0.3" stop-color="#e6ecf0"/>
    <stop offset="0.6" stop-color="#9aa1a7"/><stop offset="1" stop-color="#5b6167"/>
  </linearGradient>
  <filter id="ev3-spo-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-spo-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-spo-bg)"/>
<rect width="640" height="520" fill="url(#ev3-spo-blot)" opacity="0.75"/>
<rect width="640" height="520" fill="url(#ev3-spo-pool)"/>
<!-- desk blotter: a felted rectangle with leather corners -->
<rect x="18" y="34" width="604" height="452" rx="3" fill="#2b3735"/>
<rect x="18" y="34" width="604" height="9" fill="#5d706d" opacity="0.4"/>
<g fill="#3d2b1c">
  <path d="M18 34 L120 34 L18 128 Z"/><path d="M622 34 L520 34 L622 128 Z"/>
  <path d="M18 486 L120 486 L18 392 Z"/><path d="M622 486 L520 486 L622 392 Z"/>
</g>
<g fill="#6a4c30" opacity="0.4">
  <path d="M18 34 L120 34 L112 42 L26 42 Z"/><path d="M18 486 L120 486 L112 478 L26 478 Z"/>
</g>
<g fill="#0f1514" opacity="0.35">
  <ellipse cx="180" cy="440" rx="80" ry="16"/><ellipse cx="470" cy="90" rx="70" ry="14"/>
</g>

<!-- the letter -->
<ellipse cx="300" cy="446" rx="230" ry="30" fill="#000" opacity="0.55" filter="url(#ev3-spo-soft)"/>
<g transform="rotate(-3 300 270)">
  <path d="M74 68 L482 52 L494 452 L86 468 Z" fill="url(#ev3-spo-paper)"/>
  <path d="M74 68 L482 52 L482 66 L74 82 Z" fill="#ffffff" opacity="0.38"/>
  <!-- engraved letterhead: an emblem, a rule, and a blank address block -->
  <g transform="translate(258 108)">
    <path d="M0 -34 L30 0 L0 34 L-30 0 Z" fill="none" stroke="#2e3a4a" stroke-width="3.4"/>
    <path d="M0 -20 L18 0 L0 20 L-18 0 Z" fill="none" stroke="#2e3a4a" stroke-width="2"/>
    <path d="M0 -8 L8 0 L0 8 L-8 0 Z" fill="#2e3a4a"/>
  </g>
  <path d="M92 156 L470 142" stroke="#2e3a4a" stroke-width="2.6" opacity="0.8"/>
  <path d="M92 162 L470 148" stroke="#2e3a4a" stroke-width="1.1" opacity="0.5"/>
  <g stroke="#2e3a4a" stroke-width="3.4" opacity="0.6">
    <path d="M206 178 h 130" stroke-dasharray="30 8 44 9 30"/>
    <path d="M232 194 h 78" stroke-dasharray="20 7 24 8 18"/>
  </g>
  <!-- typed body: an even block, one short paragraph, then a closing -->
  <g stroke="#332e24" stroke-width="2.5" opacity="0.8" stroke-linecap="butt">
    <path d="M104 234 h 122" stroke-dasharray="28 8 40 9 28"/>
    <path d="M104 262 h 348" stroke-dasharray="34 7 52 8 40 7 58 8 44"/>
    <path d="M104 286 h 356" stroke-dasharray="46 7 30 8 56 7 38 8 50"/>
    <path d="M104 310 h 340" stroke-dasharray="30 7 48 8 34 7 54 8 38"/>
    <path d="M104 334 h 210" stroke-dasharray="40 7 34 8 46 7 24"/>
    <path d="M104 372 h 352" stroke-dasharray="36 7 44 8 30 7 52 8 46"/>
    <path d="M104 396 h 174" stroke-dasharray="28 7 38 8 42"/>
  </g>
  <!-- the phrase in quotes, given its own line and underscored by a typist -->
  <path d="M104 348 h 176" stroke="#332e24" stroke-width="1.3" opacity="0.7"/>
  <!-- the account man's signature, then his typed name below it -->
  <path d="M300 428 c 10 -26 22 -6 27 5 c 10 -28 22 -8 27 6 c 11 -24 22 -4 28 8 c 12 -20 24 -8 30 4" fill="none" stroke="#1c2a44" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M296 436 q 62 14 108 -4" fill="none" stroke="#1c2a44" stroke-width="2.2" opacity="0.6"/>
  <path d="M300 448 h 108" stroke="#332e24" stroke-width="2.2" opacity="0.7" stroke-dasharray="24 7 34 8 20"/>
  <!-- fold quarters, because it came in a pocket -->
  <path d="M78 264 L490 250" stroke="#8f866c" stroke-width="1.6" opacity="0.35"/>
  <path d="M78 268 L490 254" stroke="#fffaea" stroke-width="1.2" opacity="0.4"/>
  <path d="M282 56 L292 462" stroke="#8f866c" stroke-width="1.6" opacity="0.3"/>
  <path d="M286 56 L296 462" stroke="#fffaea" stroke-width="1.2" opacity="0.35"/>
  <path d="M494 452 L458 454 L490 424 Z" fill="#ada387"/>
</g>

<!-- the product itself, a packet on the blotter: no words, just livery -->
<g transform="rotate(9 508 356)">
  <path d="M448 268 L590 282 L578 442 L436 428 Z" fill="#000" opacity="0.45" filter="url(#ev3-spo-soft)"/>
  <path d="M444 262 L586 276 L574 436 L432 422 Z" fill="url(#ev3-spo-pack)"/>
  <path d="M444 262 L586 276 L582 300 L440 286 Z" fill="url(#ev3-spo-foil)"/>
  <path d="M444 262 L586 276 L586 284 L444 270 Z" fill="#ffffff" opacity="0.28"/>
  <path d="M448 304 L578 317" stroke="#f0d9a0" stroke-width="3.4" opacity="0.8"/>
  <path d="M446 412 L576 425" stroke="#f0d9a0" stroke-width="2.4" opacity="0.6"/>
  <g transform="translate(510 358)">
    <ellipse cx="0" cy="0" rx="42" ry="30" fill="none" stroke="#f0d9a0" stroke-width="3"/>
    <ellipse cx="0" cy="0" rx="30" ry="20" fill="none" stroke="#f0d9a0" stroke-width="1.8" opacity="0.7"/>
    <path d="M-16 0 L0 -14 L16 0 L0 14 Z" fill="#f0d9a0" opacity="0.85"/>
  </g>
  <path d="M452 268 L466 424" stroke="#ffffff" stroke-width="6" opacity="0.12"/>
  <!-- torn foil corner and one cigarette showing -->
  <path d="M556 274 L586 276 L582 300 L552 296 Z" fill="#cfd6da"/>
  <path d="M560 262 L578 264 L576 288 L558 286 Z" fill="#efe9d8"/>
  <path d="M560 262 L578 264 L577 272 L559 270 Z" fill="#c9a45c"/>
</g>

<rect width="640" height="520" fill="url(#ev3-spo-vig)"/>
`,
  },

  /* The termination memo, and under it the carbon: the same four lines
     struck through a sheet of blue-black tissue, backwards and shining. */
  c3_memo: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-mem-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2c2a25"/><stop offset="0.55" stop-color="#141311"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-mem-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffeec6" stop-opacity="0.3"/><stop offset="1" stop-color="#ffeec6" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-mem-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#453626"/><stop offset="0.55" stop-color="#281f16"/><stop offset="1" stop-color="#120f0b"/>
  </linearGradient>
  <linearGradient id="ev3-mem-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fcf8e9"/><stop offset="0.36" stop-color="#f0e9d2"/>
    <stop offset="0.74" stop-color="#d5ccae"/><stop offset="1" stop-color="#a59b7c"/>
  </linearGradient>
  <linearGradient id="ev3-mem-carbon" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#3a3a52"/><stop offset="0.22" stop-color="#22233a"/>
    <stop offset="0.52" stop-color="#161628"/><stop offset="0.78" stop-color="#2a2b44"/>
    <stop offset="1" stop-color="#0d0d18"/>
  </linearGradient>
  <linearGradient id="ev3-mem-sheen" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#8f9bd0" stop-opacity="0.34"/><stop offset="0.4" stop-color="#8f9bd0" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#8f9bd0" stop-opacity="0"/>
  </linearGradient>
  <filter id="ev3-mem-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-mem-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-mem-bg)"/>
<rect width="640" height="520" fill="url(#ev3-mem-desk)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-mem-pool)"/>
<g stroke="#6b5334" stroke-width="1" opacity="0.15">
  <path d="M0 130 q 320 -12 640 6"/><path d="M0 320 q 320 -12 640 6"/><path d="M0 486 q 320 -12 640 6"/>
</g>

<!-- the carbon tissue, slid out from under: blue-black, limp, faintly oily -->
<ellipse cx="420" cy="404" rx="200" ry="34" fill="#000" opacity="0.55" filter="url(#ev3-mem-soft)"/>
<g transform="rotate(9 420 300)">
  <path d="M244 116 L618 138 L600 424 L226 402 Z" fill="url(#ev3-mem-carbon)"/>
  <path d="M244 116 L618 138 L616 150 L244 128 Z" fill="#5b5f86" opacity="0.4"/>
  <path d="M244 116 L470 130 L300 402 L226 402 Z" fill="url(#ev3-mem-sheen)"/>
  <!-- the curl of a sheet that has been through a platen many times -->
  <path d="M226 402 q 90 -22 186 -14 q 100 8 188 36" fill="none" stroke="#0a0a12" stroke-width="6" opacity="0.5"/>
  <path d="M232 396 q 90 -20 184 -12" fill="none" stroke="#6d74a0" stroke-width="2" opacity="0.25"/>
  <!-- the impression the type left, backwards and darker -->
  <g stroke="#b9c0e4" stroke-width="2.6" opacity="0.5" stroke-linecap="butt">
    <path d="M280 190 h 122" stroke-dasharray="26 8 38 9 26"/>
    <path d="M280 222 h 292" stroke-dasharray="34 7 50 8 38 7 56 8 40"/>
    <path d="M282 254 h 300" stroke-dasharray="44 7 28 8 52 7 36 8 46"/>
    <path d="M284 286 h 178" stroke-dasharray="30 7 44 8 32"/>
  </g>
  <g stroke="#05050c" stroke-width="1.4" opacity="0.65" stroke-linecap="butt">
    <path d="M280 194 h 122" stroke-dasharray="26 8 38 9 26"/>
    <path d="M280 226 h 292" stroke-dasharray="34 7 50 8 38 7 56 8 40"/>
    <path d="M282 258 h 300" stroke-dasharray="44 7 28 8 52 7 36 8 46"/>
    <path d="M284 290 h 178" stroke-dasharray="30 7 44 8 32"/>
  </g>
  <!-- the signature came through too, in reverse -->
  <path d="M470 336 c 10 -24 22 -4 27 6 c 10 -26 22 -6 27 6 c 11 -22 22 -2 28 9" fill="none" stroke="#aab1d8" stroke-width="3.4" stroke-linecap="round" opacity="0.55"/>
  <!-- fingerprints: carbon takes them beautifully -->
  <g opacity="0.3" fill="none" stroke="#9aa2cd" stroke-width="1.3">
    <path d="M300 350 q 12 10 0 21"/><path d="M308 346 q 18 15 0 30"/><path d="M316 342 q 24 19 0 39"/>
  </g>
  <g fill="#8d95c4" opacity="0.16">
    <ellipse cx="540" cy="200" rx="34" ry="20" transform="rotate(-20 540 200)"/>
  </g>
</g>

<!-- the memo on top: a short official form, four lines and initials -->
<ellipse cx="272" cy="430" rx="210" ry="30" fill="#000" opacity="0.55" filter="url(#ev3-mem-soft)"/>
<g transform="rotate(-5 260 250)">
  <path d="M40 62 L410 44 L424 400 L54 418 Z" fill="url(#ev3-mem-paper)"/>
  <path d="M40 62 L410 44 L410 58 L40 76 Z" fill="#ffffff" opacity="0.4"/>
  <!-- the printed form head: two rules and four short caption blocks -->
  <path d="M56 108 L400 91" stroke="#514936" stroke-width="3" opacity="0.7"/>
  <path d="M56 114 L400 97" stroke="#514936" stroke-width="1.2" opacity="0.5"/>
  <g stroke="#443d2d" stroke-width="3.2" opacity="0.62">
    <path d="M64 138 h 44" stroke-dasharray="16 6 18"/><path d="M64 164 h 44" stroke-dasharray="18 6 14"/>
    <path d="M64 190 h 44" stroke-dasharray="14 6 20"/><path d="M64 216 h 44" stroke-dasharray="20 6 16"/>
  </g>
  <g stroke="#8f866c" stroke-width="1.1" opacity="0.6">
    <path d="M120 142 L398 128"/><path d="M120 168 L398 154"/><path d="M120 194 L398 180"/><path d="M120 220 L400 206"/>
  </g>
  <g stroke="#332e24" stroke-width="2.5" opacity="0.82" stroke-linecap="butt">
    <path d="M128 136 h 120" stroke-dasharray="28 8 44 9 30"/>
    <path d="M128 162 h 92" stroke-dasharray="22 8 34 9 20"/>
    <path d="M128 188 h 156" stroke-dasharray="34 8 40 9 52"/>
    <path d="M128 214 h 104" stroke-dasharray="26 8 30 9 28"/>
  </g>
  <path d="M56 246 L406 229" stroke="#514936" stroke-width="2" opacity="0.6"/>
  <!-- the body: two short sentences, the second very short indeed -->
  <g stroke="#332e24" stroke-width="2.5" opacity="0.82" stroke-linecap="butt">
    <path d="M68 282 h 306" stroke-dasharray="34 7 48 8 40 7 56 8 42"/>
    <path d="M68 306 h 290" stroke-dasharray="44 7 30 8 52 7 34 8 48"/>
    <path d="M68 330 h 128" stroke-dasharray="30 8 36 9 24"/>
    <path d="M68 358 h 84" stroke-dasharray="26 8 32"/>
  </g>
  <!-- the initials, in ink, small and impatient -->
  <path d="M288 378 c 8 -22 18 -4 23 6 c 9 -24 19 -6 24 5 c 9 -20 19 -3 24 8" fill="none" stroke="#1c2a44" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M284 388 q 48 14 80 -8" fill="none" stroke="#1c2a44" stroke-width="2.4" opacity="0.65"/>
  <!-- the fresh-typed look: a slightly heavier first character each line -->
  <g fill="#332e24" opacity="0.7">
    <rect x="128" y="132" width="6" height="7"/><rect x="128" y="158" width="6" height="7"/>
    <rect x="68" y="278" width="6" height="7"/><rect x="68" y="302" width="6" height="7"/>
  </g>
  <path d="M424 400 L388 402 L420 372 Z" fill="#a99f80"/>
</g>

<rect width="640" height="520" fill="url(#ev3-mem-vig)"/>
`,
  },

  /* The visitor book, closed off at 4:40, and the keys all present and
     accounted for on the desk beside it. Nobody came in. Nobody left. */
  c3_visitors: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-vis-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2c2921"/><stop offset="0.55" stop-color="#151310"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-vis-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffe9bb" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9bb" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-vis-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4a3624"/><stop offset="0.55" stop-color="#2a2016"/><stop offset="1" stop-color="#130f0a"/>
  </linearGradient>
  <linearGradient id="ev3-vis-cover" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#3f5450"/><stop offset="0.35" stop-color="#283835"/>
    <stop offset="0.8" stop-color="#16211f"/><stop offset="1" stop-color="#0c1211"/>
  </linearGradient>
  <linearGradient id="ev3-vis-page" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fcf7e7"/><stop offset="0.36" stop-color="#f0e8d0"/>
    <stop offset="0.74" stop-color="#d6cdaf"/><stop offset="1" stop-color="#a69c7c"/>
  </linearGradient>
  <linearGradient id="ev3-vis-brass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f6e0a2"/><stop offset="0.34" stop-color="#cca752"/>
    <stop offset="0.7" stop-color="#8b6d2b"/><stop offset="1" stop-color="#4d3a15"/>
  </linearGradient>
  <linearGradient id="ev3-vis-ring" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f0f4f7"/><stop offset="0.35" stop-color="#a1a9af"/>
    <stop offset="0.7" stop-color="#525860"/><stop offset="1" stop-color="#22262b"/>
  </linearGradient>
  <filter id="ev3-vis-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-vis-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-vis-bg)"/>
<rect width="640" height="520" fill="url(#ev3-vis-desk)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-vis-pool)"/>
<g stroke="#6b5334" stroke-width="1" opacity="0.15">
  <path d="M0 120 q 320 -12 640 6"/><path d="M0 300 q 320 -12 640 6"/><path d="M0 476 q 320 -12 640 6"/>
</g>

<!-- the register, open, a heavy ledger with a cloth cover -->
<ellipse cx="300" cy="452" rx="252" ry="32" fill="#000" opacity="0.6" filter="url(#ev3-vis-soft)"/>
<path d="M18 96 L318 76 L318 448 L26 466 Z" fill="url(#ev3-vis-cover)"/>
<path d="M326 76 L622 96 L618 466 L326 448 Z" fill="url(#ev3-vis-cover)"/>
<path d="M18 96 L318 76 L318 88 L18 108 Z" fill="#6f8a85" opacity="0.35"/>
<path d="M318 76 L326 76 L326 448 L318 448 Z" fill="#0a0f0e"/>
<path d="M30 108 L316 88 L316 440 L38 456 Z" fill="#cdc3a4"/>
<path d="M328 88 L610 108 L606 456 L328 440 Z" fill="#cdc3a4"/>
<g stroke="#a5987a" stroke-width="1" opacity="0.6">
  <path d="M30 116 L316 96"/><path d="M328 96 L610 116"/>
</g>
<path d="M40 116 L314 96 L314 432 L46 448 Z" fill="url(#ev3-vis-page)"/>
<path d="M326 96 L600 116 L596 448 L328 432 Z" fill="url(#ev3-vis-page)"/>
<path d="M302 98 L314 96 L314 432 L302 431 Z" fill="#8c8266" opacity="0.35"/>
<path d="M326 96 L338 98 L338 431 L326 432 Z" fill="#8c8266" opacity="0.3"/>
<!-- the ruled columns -->
<g stroke="#a5987a" stroke-width="1.1" opacity="0.65">
  <path d="M46 160 L314 142"/><path d="M46 196 L314 178"/><path d="M46 232 L314 214"/>
  <path d="M46 268 L314 250"/><path d="M46 304 L314 286"/><path d="M46 340 L314 322"/>
  <path d="M46 376 L314 358"/><path d="M46 412 L314 394"/>
  <path d="M330 142 L596 160"/><path d="M330 178 L596 196"/><path d="M330 214 L596 232"/>
  <path d="M330 250 L596 268"/><path d="M330 286 L596 304"/><path d="M330 322 L596 340"/>
  <path d="M330 358 L596 376"/><path d="M330 394 L596 412"/>
</g>
<g stroke="#a5987a" stroke-width="1.1" opacity="0.55">
  <path d="M150 106 L146 440"/><path d="M232 100 L228 436"/>
  <path d="M418 104 L422 438"/><path d="M506 110 L510 442"/>
</g>
<path d="M42 130 L314 112" stroke="#5f5740" stroke-width="2.6" opacity="0.65"/>
<path d="M330 112 L598 130" stroke="#5f5740" stroke-width="2.6" opacity="0.65"/>
<g stroke="#4d4634" stroke-width="3" opacity="0.6">
  <path d="M56 122 h 62" stroke-dasharray="20 6 26"/><path d="M166 116 h 46" stroke-dasharray="16 6 18"/>
  <path d="M344 118 h 50" stroke-dasharray="18 6 20"/><path d="M436 124 h 56" stroke-dasharray="22 6 22"/>
</g>
<!-- the day's entries, in the receptionist's hand, and then nothing -->
<g fill="none" stroke="#243553" stroke-width="2.3" stroke-linecap="round" opacity="0.88">
  <path d="M56 154 c 6 -12 12 -2 15 3 c 6 -13 13 -3 16 3 c 6 -11 12 -1 16 4 c 7 -10 13 -2 17 3"/>
  <path d="M160 148 c 6 -11 12 -2 15 3 c 6 -12 13 -2 16 3 c 6 -10 13 -1 16 4"/>
  <path d="M242 142 c 6 -12 13 -2 16 3 c 6 -11 12 -1 16 4"/>
  <path d="M56 190 c 7 -13 13 -2 16 3 c 6 -12 13 -3 16 3 c 7 -11 13 -1 17 4 c 6 -10 13 -2 16 3"/>
  <path d="M160 184 c 6 -12 13 -3 16 2 c 7 -11 13 -1 16 4"/>
  <path d="M242 178 c 7 -12 13 -2 16 3 c 6 -10 12 -1 16 4"/>
  <path d="M56 226 c 6 -12 12 -2 15 3 c 7 -13 13 -3 17 3 c 6 -11 12 -1 16 4 c 6 -10 13 -2 16 3"/>
  <path d="M160 220 c 7 -12 13 -2 16 3 c 6 -11 13 -2 16 4"/>
  <path d="M242 214 c 6 -11 13 -2 16 3 c 6 -10 12 -1 16 4"/>
  <path d="M56 262 c 6 -12 13 -2 16 3 c 6 -12 12 -3 16 3 c 7 -11 13 -1 16 4"/>
  <path d="M160 256 c 6 -12 13 -3 16 3 c 6 -10 13 -1 16 4"/>
</g>
<!-- the last line, ruled off with a heavy diagonal: closed at five -->
<path d="M50 288 L312 270" stroke="#243553" stroke-width="3" opacity="0.85"/>
<path d="M52 296 L312 278" stroke="#243553" stroke-width="1.6" opacity="0.5"/>
<path d="M56 300 L308 424" stroke="#243553" stroke-width="3.4" opacity="0.7" stroke-linecap="round"/>
<path d="M308 300 L58 424" stroke="#243553" stroke-width="3.4" opacity="0.7" stroke-linecap="round"/>
<!-- the facing page is untouched, and the light lies flat on it -->
<path d="M330 120 L598 138 L596 300 L330 282 Z" fill="#ffffff" opacity="0.07"/>
<!-- the receptionist's dip pen laid in the gutter -->
<g transform="rotate(-71 322 300)">
  <rect x="238" y="292" width="180" height="12" rx="4" fill="#000" opacity="0.35" filter="url(#ev3-vis-soft)"/>
  <rect x="234" y="288" width="180" height="12" rx="4" fill="#1c1a17"/>
  <rect x="238" y="290" width="166" height="3.4" rx="2" fill="#8e867a" opacity="0.5"/>
  <path d="M414 288 q 20 6 0 12 z" fill="#c8ced3"/>
  <path d="M414 291 q 12 3 0 6 z" fill="#eef3f6"/>
</g>

<!-- the keys, all of them, on the desk in front: none missing -->
<g transform="rotate(-8 470 470)">
  <ellipse cx="470" cy="480" rx="86" ry="26" fill="#000" opacity="0.5" filter="url(#ev3-vis-soft)"/>
  <ellipse cx="464" cy="470" rx="42" ry="18" fill="none" stroke="url(#ev3-vis-ring)" stroke-width="7"/>
  <g>
    <ellipse cx="418" cy="450" rx="11" ry="11" fill="none" stroke="url(#ev3-vis-brass)" stroke-width="5"/>
    <rect x="414" y="458" width="7" height="42" fill="url(#ev3-vis-brass)"/>
    <rect x="414" y="484" width="13" height="6" fill="url(#ev3-vis-brass)"/>
  </g>
  <g transform="rotate(20 448 452)">
    <ellipse cx="448" cy="446" rx="11" ry="11" fill="none" stroke="url(#ev3-vis-brass)" stroke-width="5"/>
    <rect x="444" y="454" width="7" height="40" fill="url(#ev3-vis-brass)"/>
    <rect x="444" y="478" width="12" height="6" fill="url(#ev3-vis-brass)"/>
  </g>
  <g transform="rotate(-16 500 452)">
    <ellipse cx="500" cy="446" rx="11" ry="11" fill="none" stroke="url(#ev3-vis-brass)" stroke-width="5"/>
    <rect x="496" y="454" width="7" height="44" fill="url(#ev3-vis-brass)"/>
    <rect x="496" y="480" width="13" height="6" fill="url(#ev3-vis-brass)"/>
  </g>
  <path d="M416 460 v 34" stroke="#ffeec0" stroke-width="1.8" opacity="0.5"/>
  <path d="M446 458 v 32" stroke="#ffeec0" stroke-width="1.6" opacity="0.4"/>
</g>

<rect width="640" height="520" fill="url(#ev3-vis-vig)"/>
`,
  },

  /* The threat that was never sent: crumpled at five past four, thrown, and
     retrieved from the wastebasket with the last sentence unfinished. */
  c3_note: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-not-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2a26"/><stop offset="0.55" stop-color="#141311"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-not-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffeec4" stop-opacity="0.3"/><stop offset="1" stop-color="#ffeec4" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-not-floor" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#3c3a33"/><stop offset="0.55" stop-color="#221f1a"/><stop offset="1" stop-color="#100e0c"/>
  </linearGradient>
  <linearGradient id="ev3-not-mesh" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5c5f63"/><stop offset="0.35" stop-color="#33373b"/><stop offset="1" stop-color="#14171a"/>
  </linearGradient>
  <linearGradient id="ev3-not-p1" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fdf9ec"/><stop offset="1" stop-color="#d8cfb4"/>
  </linearGradient>
  <linearGradient id="ev3-not-p2" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#efe7cf"/><stop offset="1" stop-color="#b3a889"/>
  </linearGradient>
  <linearGradient id="ev3-not-p3" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#cfc5a6"/><stop offset="1" stop-color="#8b8168"/>
  </linearGradient>
  <linearGradient id="ev3-not-p4" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#a89e80"/><stop offset="1" stop-color="#6d6551"/>
  </linearGradient>
  <filter id="ev3-not-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="11"/>
  </filter>
  <radialGradient id="ev3-not-vig" cx="0.44" cy="0.42" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-not-bg)"/>
<rect width="640" height="520" fill="url(#ev3-not-floor)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-not-pool)"/>
<g stroke="#6a655a" stroke-width="1" opacity="0.14">
  <path d="M0 356 h640"/><path d="M0 430 h640"/><path d="M0 496 h640"/>
</g>

<!-- the wastebasket: expanded metal mesh, tipped toward us -->
<ellipse cx="330" cy="470" rx="230" ry="42" fill="#000" opacity="0.6" filter="url(#ev3-not-soft)"/>
<path d="M132 176 L516 176 L474 448 Q 324 476 174 448 Z" fill="url(#ev3-not-mesh)"/>
<g stroke="#7d838a" stroke-width="2.4" opacity="0.3">
  <path d="M180 178 L206 448"/><path d="M228 178 L246 456"/><path d="M276 178 L288 462"/>
  <path d="M324 178 L328 464"/><path d="M372 178 L368 462"/><path d="M420 178 L410 456"/><path d="M468 178 L450 448"/>
</g>
<g stroke="#7d838a" stroke-width="2.4" opacity="0.22">
  <path d="M138 216 L510 216"/><path d="M146 264 L502 264"/><path d="M154 312 L494 312"/>
  <path d="M162 360 L486 360"/><path d="M170 408 L478 408"/>
</g>
<g stroke="#05070a" stroke-width="2" opacity="0.5">
  <path d="M140 220 L508 220"/><path d="M148 268 L500 268"/><path d="M156 316 L492 316"/><path d="M164 364 L484 364"/>
</g>
<!-- the rolled rim -->
<ellipse cx="324" cy="176" rx="192" ry="42" fill="none" stroke="#0b0e11" stroke-width="14"/>
<ellipse cx="324" cy="176" rx="192" ry="42" fill="none" stroke="url(#ev3-not-mesh)" stroke-width="10"/>
<path d="M148 158 q 130 -44 300 -12" fill="none" stroke="#c2c8ce" stroke-width="3" opacity="0.45"/>
<ellipse cx="324" cy="184" rx="178" ry="36" fill="#07090b" opacity="0.75"/>
<!-- other rubbish, in the dark down there -->
<g fill="#4a4535" opacity="0.5">
  <ellipse cx="230" cy="212" rx="46" ry="16" transform="rotate(-14 230 212)"/>
  <ellipse cx="420" cy="206" rx="38" ry="13" transform="rotate(11 420 206)"/>
</g>

<!-- THE NOTE: crumpled, then half-opened again, facets catching the light -->
<g transform="rotate(-6 324 236)">
  <path d="M186 268 L288 122 L446 138 L488 268 L370 316 L242 306 Z" fill="#000" opacity="0.45" filter="url(#ev3-not-soft)"/>
  <path d="M182 262 L284 116 L442 132 L484 262 L366 310 L238 300 Z" fill="url(#ev3-not-p2)"/>
  <!-- the facets, each a plane of the crushed sheet -->
  <path d="M284 116 L360 128 L326 210 L246 190 Z" fill="url(#ev3-not-p1)"/>
  <path d="M360 128 L442 132 L420 206 L326 210 Z" fill="url(#ev3-not-p2)"/>
  <path d="M246 190 L326 210 L300 268 L212 244 Z" fill="url(#ev3-not-p3)"/>
  <path d="M326 210 L420 206 L406 258 L300 268 Z" fill="url(#ev3-not-p1)"/>
  <path d="M420 206 L442 132 L484 262 L406 258 Z" fill="url(#ev3-not-p3)"/>
  <path d="M212 244 L300 268 L238 300 L182 262 Z" fill="url(#ev3-not-p4)"/>
  <path d="M300 268 L406 258 L366 310 L238 300 Z" fill="url(#ev3-not-p2)"/>
  <path d="M284 116 L246 190 L212 244 L182 262 Z" fill="url(#ev3-not-p4)"/>
  <!-- crease lines: sharp where the paper folded, soft where it bowed -->
  <g stroke="#6f664f" stroke-width="1.6" opacity="0.55" fill="none">
    <path d="M284 116 L326 210 L406 258"/><path d="M360 128 L326 210 L300 268 L238 300"/>
    <path d="M442 132 L420 206 L406 258"/><path d="M246 190 L212 244"/><path d="M182 262 L300 268"/>
  </g>
  <g stroke="#fffaea" stroke-width="1.4" opacity="0.5" fill="none">
    <path d="M286 118 L328 208"/><path d="M362 130 L328 208"/><path d="M248 192 L214 246"/><path d="M422 208 L408 256"/>
  </g>
  <!-- the writing, angry: pressed hard, tilted, running off the fold -->
  <g fill="none" stroke="#1b2338" stroke-width="3" stroke-linecap="round" opacity="0.9">
    <path d="M262 158 c 9 -14 16 -2 20 5 c 9 -16 18 -4 22 4 c 9 -14 18 -2 22 6"/>
    <path d="M256 184 c 10 -15 17 -3 21 5 c 9 -17 19 -4 23 4 c 8 -13 17 -2 21 5"/>
    <path d="M370 152 c 9 -15 17 -3 21 5 c 10 -16 19 -3 23 5 c 8 -12 16 -2 20 4"/>
    <path d="M364 180 c 9 -14 18 -3 22 5 c 9 -16 18 -3 22 5"/>
    <path d="M240 234 c 10 -14 18 -2 22 5 c 9 -16 18 -4 22 4 c 9 -13 18 -2 22 6"/>
    <path d="M334 232 c 9 -15 17 -3 21 5 c 10 -15 19 -3 23 5"/>
  </g>
  <!-- the sentence that stops: a stroke, then a long torn-off dash -->
  <g fill="none" stroke="#1b2338" stroke-width="3.4" stroke-linecap="round">
    <path d="M248 284 c 10 -15 18 -3 22 5 c 9 -16 18 -3 22 5"/>
    <path d="M300 286 L344 282"/>
  </g>
  <!-- the pen dug through the paper at the end -->
  <path d="M348 280 l 16 -3 l 2 8 l -17 3 z" fill="#3a3426" opacity="0.6"/>
  <path d="M348 280 l 16 -3" stroke="#1b2338" stroke-width="2" opacity="0.7"/>
  <!-- ink pooled where he stopped, and a smear from the heel of his hand -->
  <ellipse cx="346" cy="284" rx="5" ry="3.4" fill="#16203a" opacity="0.7"/>
  <path d="M290 244 q 34 10 62 -4" fill="none" stroke="#1b2338" stroke-width="8" opacity="0.09"/>
  <!-- shadow inside the deepest fold -->
  <path d="M300 268 L406 258 L366 310 L238 300 Z" fill="#000" opacity="0.16"/>
  <path d="M182 262 L212 244 L238 300 Z" fill="#000" opacity="0.22"/>
</g>

<rect width="640" height="520" fill="url(#ev3-not-vig)"/>
`,
  },

  /* Six o'clock: the handkerchief she was wiping her hands on, grey with
     shop grime and one thread of copper, and the lobby clock behind it. */
  c3_sixoclock: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-six-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2b28"/><stop offset="0.55" stop-color="#141412"/><stop offset="1" stop-color="#070707"/>
  </linearGradient>
  <radialGradient id="ev3-six-pool" cx="0.24" cy="0.08" r="0.85">
    <stop offset="0" stop-color="#ffe9bb" stop-opacity="0.28"/><stop offset="1" stop-color="#ffe9bb" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-six-table" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#453626"/><stop offset="0.55" stop-color="#271f16"/><stop offset="1" stop-color="#12100b"/>
  </linearGradient>
  <linearGradient id="ev3-six-linen" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fdfaf2"/><stop offset="0.3" stop-color="#f2ece0"/>
    <stop offset="0.68" stop-color="#d8d2c4"/><stop offset="1" stop-color="#a49e91"/>
  </linearGradient>
  <linearGradient id="ev3-six-shade" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8d8778" stop-opacity="0.5"/><stop offset="1" stop-color="#8d8778" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ev3-six-clock" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#5a5148"/><stop offset="0.35" stop-color="#332d27"/><stop offset="1" stop-color="#161311"/>
  </linearGradient>
  <radialGradient id="ev3-six-face" cx="0.34" cy="0.28" r="0.84">
    <stop offset="0" stop-color="#e6ddc4"/><stop offset="0.62" stop-color="#c6bb9c"/><stop offset="1" stop-color="#8e856c"/>
  </radialGradient>
  <filter id="ev3-six-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-six-vig" cx="0.42" cy="0.44" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-six-bg)"/>
<rect width="640" height="520" fill="url(#ev3-six-table)" opacity="0.85"/>
<rect width="640" height="520" fill="url(#ev3-six-pool)"/>
<g stroke="#6b5334" stroke-width="1" opacity="0.14">
  <path d="M0 316 q 320 -12 640 6"/><path d="M0 410 q 320 -12 640 6"/><path d="M0 494 q 320 -12 640 6"/>
</g>
<path d="M0 268 L640 250 L640 300 L0 318 Z" fill="#0e0c0a" opacity="0.5"/>

<!-- the lobby clock on the wall behind, in shadow, standing at six -->
<g opacity="0.8">
  <circle cx="486" cy="132" r="94" fill="url(#ev3-six-clock)"/>
  <circle cx="486" cy="132" r="94" fill="none" stroke="#0a0908" stroke-width="3"/>
  <circle cx="486" cy="132" r="80" fill="url(#ev3-six-face)"/>
  <circle cx="486" cy="132" r="72" fill="none" stroke="#9a9078" stroke-width="1.4" opacity="0.6"/>
  <g fill="#241f18">
    <rect x="482" y="60" width="8" height="18" rx="2"/><rect x="482" y="186" width="8" height="18" rx="2"/>
    <rect x="414" y="128" width="18" height="8" rx="2"/><rect x="540" y="128" width="18" height="8" rx="2"/>
  </g>
  <g stroke="#3a3428" stroke-width="2" opacity="0.7">
    <path d="M523 74 l -5 6"/><path d="M544 185 l -6 -5"/><path d="M428 185 l 6 -5"/><path d="M449 74 l 5 6"/>
  </g>
  <path d="M486 132 L486 74" stroke="#191510" stroke-width="6" stroke-linecap="round"/>
  <path d="M486 132 L486 200" stroke="#191510" stroke-width="4.4" stroke-linecap="round"/>
  <circle cx="486" cy="132" r="6" fill="#191510"/>
  <path d="M424 78 q 46 -32 100 -18" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.14"/>
  <circle cx="486" cy="132" r="80" fill="#000" opacity="0.18"/>
</g>

<!-- the handkerchief, dropped and half-open, linen with a rolled hem -->
<ellipse cx="286" cy="428" rx="230" ry="42" fill="#000" opacity="0.6" filter="url(#ev3-six-soft)"/>
<!-- a square of linen: four corners, hemmed edges, one corner turned back -->
<path d="M62 342 Q 176 300 296 262 Q 402 296 512 330 Q 396 386 288 434 Q 172 392 62 342 Z" fill="url(#ev3-six-linen)"/>
<path d="M62 342 Q 176 300 296 262 Q 402 296 512 330 L 508 342 Q 400 308 296 274 Q 178 312 66 354 Z" fill="url(#ev3-six-shade)"/>
<!-- rolled hem, stitched a little in from each edge -->
<g fill="none" stroke="#c4bdad" stroke-width="4.6">
  <path d="M62 342 Q 176 300 296 262 Q 402 296 512 330 Q 396 386 288 434 Q 172 392 62 342 Z"/>
</g>
<g fill="none" stroke="#fffdf6" stroke-width="2" opacity="0.75">
  <path d="M62 340 Q 176 298 296 260 Q 402 294 512 328"/>
</g>
<g fill="none" stroke="#b0a99a" stroke-width="1.3" opacity="0.7" stroke-dasharray="6 5">
  <path d="M76 342 Q 182 304 296 270 Q 396 302 498 332"/>
  <path d="M498 332 Q 392 382 288 424 Q 180 386 76 342"/>
</g>
<!-- the crushed folds: ridges lit on top, troughs shaded beneath -->
<g fill="none" stroke="#8f8a7c" stroke-width="4" opacity="0.4">
  <path d="M132 336 Q 208 372 268 350 Q 336 324 400 350"/>
  <path d="M112 358 Q 196 400 262 380 Q 344 354 424 380"/>
  <path d="M226 296 Q 268 336 254 384 Q 244 414 258 428"/>
  <path d="M366 296 Q 340 342 356 384"/>
</g>
<g fill="none" stroke="#fffdf6" stroke-width="2.6" opacity="0.7">
  <path d="M132 331 Q 208 367 268 345 Q 336 319 400 345"/>
  <path d="M112 353 Q 196 395 262 375 Q 344 349 424 375"/>
  <path d="M222 296 Q 264 336 250 384 Q 240 414 254 428"/>
  <path d="M362 296 Q 336 342 352 384"/>
</g>
<!-- one corner turned back, showing the underside and the hem seam -->
<path d="M512 330 Q 452 316 424 288 Q 470 296 512 306 Z" fill="#cec8ba"/>
<path d="M512 330 Q 452 316 424 288 Q 470 296 512 306 Z" fill="none" stroke="#a49e90" stroke-width="2"/>
<path d="M430 292 Q 470 302 508 310" fill="none" stroke="#fffdf6" stroke-width="1.6" opacity="0.6"/>
<!-- an embroidered corner mark, a knot of stitches, no letters -->
<g stroke="#8fa0b8" stroke-width="2.4" fill="none" opacity="0.6">
  <path d="M448 348 q 14 -16 26 -2 q 10 12 -4 20"/><path d="M452 366 q 16 -6 26 4"/>
</g>

<!-- THE GRIME: shop dirt wiped off in streaks, and one copper thread -->
<g fill="none" stroke="#4c4740" stroke-linecap="round" opacity="0.45">
  <path d="M154 346 q 62 26 118 6" stroke-width="14"/>
  <path d="M180 372 q 70 28 132 4" stroke-width="10"/>
  <path d="M136 328 q 46 18 88 4" stroke-width="7"/>
</g>
<g fill="none" stroke="#241f1a" stroke-linecap="round" opacity="0.5">
  <path d="M196 352 q 48 20 92 4" stroke-width="6"/>
  <path d="M232 380 q 40 16 76 2" stroke-width="4"/>
</g>
<g fill="none" stroke="#5c564c" stroke-width="2.2" opacity="0.4">
  <path d="M118 336 q 70 32 140 8"/><path d="M164 392 q 66 24 128 2"/>
</g>
<!-- a smear of black insulating varnish and a bright copper filament -->
<path d="M322 340 q 26 -8 46 4 q -24 14 -46 -4 z" fill="#17140f" opacity="0.6"/>
<path d="M340 364 q 22 -8 40 6" fill="none" stroke="#d79a4c" stroke-width="2.8" stroke-linecap="round"/>
<path d="M342 363 q 20 -7 36 6" fill="none" stroke="#f8d79a" stroke-width="1" opacity="0.85"/>
<g fill="#d79a4c" opacity="0.85">
  <ellipse cx="266" cy="402" rx="4.4" ry="1.8" transform="rotate(18 266 402)"/>
  <ellipse cx="400" cy="330" rx="3.4" ry="1.5" transform="rotate(-24 400 330)"/>
</g>
<!-- the weave, where the light rakes across the one clean corner -->
<g stroke="#cfc9bb" stroke-width="0.8" opacity="0.4">
  <path d="M282 276 L318 292"/><path d="M300 270 L336 286"/><path d="M318 264 L354 280"/>
  <path d="M296 266 L280 292"/><path d="M314 270 L298 296"/><path d="M332 276 L316 302"/>
</g>

<rect width="640" height="520" fill="url(#ev3-six-vig)"/>
`,
  },

  /* Handed back: the forged sheet squared to the desk edge, the reading
     glasses folded on top, the key untouched. Not one question asked. */
  c3_neverasked: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-nev-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2a26"/><stop offset="0.55" stop-color="#141311"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-nev-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffeec4" stop-opacity="0.3"/><stop offset="1" stop-color="#ffeec4" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-nev-desk" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4b3a26"/><stop offset="0.5" stop-color="#2c2117"/><stop offset="1" stop-color="#13100b"/>
  </linearGradient>
  <linearGradient id="ev3-nev-edge" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a6a42"/><stop offset="0.4" stop-color="#4e3a22"/><stop offset="1" stop-color="#191108"/>
  </linearGradient>
  <linearGradient id="ev3-nev-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#faf4e2"/><stop offset="0.36" stop-color="#eee6cc"/>
    <stop offset="0.74" stop-color="#d4caa9"/><stop offset="1" stop-color="#a49a7a"/>
  </linearGradient>
  <linearGradient id="ev3-nev-wire" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f5e6b4"/><stop offset="0.35" stop-color="#c9a856"/>
    <stop offset="0.72" stop-color="#8a6f2e"/><stop offset="1" stop-color="#4d3d16"/>
  </linearGradient>
  <linearGradient id="ev3-nev-lens" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.34"/><stop offset="0.5" stop-color="#cfd8de" stop-opacity="0.1"/>
    <stop offset="1" stop-color="#2b3238" stop-opacity="0.24"/>
  </linearGradient>
  <filter id="ev3-nev-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-nev-vig" cx="0.42" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-nev-bg)"/>
<rect width="640" height="520" fill="url(#ev3-nev-desk)" opacity="0.92"/>
<rect width="640" height="520" fill="url(#ev3-nev-pool)"/>
<g stroke="#7a5c36" stroke-width="1" opacity="0.16">
  <path d="M0 96 q 320 -10 640 4"/><path d="M0 210 q 320 -10 640 4"/><path d="M0 316 q 320 -10 640 4"/>
</g>
<!-- the desk edge, dead straight, and the sheet squared exactly to it -->
<path d="M0 402 L640 388 L640 404 L0 418 Z" fill="url(#ev3-nev-edge)"/>
<path d="M0 402 L640 388 L640 393 L0 407 Z" fill="#b28c56" opacity="0.45"/>
<rect y="418" width="640" height="102" fill="#100c08"/>
<path d="M0 418 L640 404 L640 424 L0 438 Z" fill="#2a1f12"/>

<ellipse cx="300" cy="386" rx="230" ry="22" fill="#000" opacity="0.5" filter="url(#ev3-nev-soft)"/>
<path d="M92 96 L520 86 L524 386 L96 396 Z" fill="url(#ev3-nev-paper)"/>
<path d="M92 96 L520 86 L520 100 L92 110 Z" fill="#ffffff" opacity="0.36"/>
<!-- ruled log, columns, entries -->
<path d="M100 140 L516 130" stroke="#5c5340" stroke-width="2.6" opacity="0.65"/>
<g stroke="#a2977c" stroke-width="1.1" opacity="0.6">
  <path d="M100 178 L516 168"/><path d="M100 216 L518 206"/><path d="M100 254 L518 244"/>
  <path d="M100 292 L520 282"/><path d="M100 330 L520 320"/><path d="M100 368 L522 358"/>
</g>
<g stroke="#a2977c" stroke-width="1.1" opacity="0.5">
  <path d="M212 90 L216 392"/><path d="M300 88 L304 390"/><path d="M394 86 L398 388"/>
</g>
<g stroke="#4b4232" stroke-width="3" opacity="0.55">
  <path d="M114 122 h 62" stroke-dasharray="20 6 26"/><path d="M226 120 h 46" stroke-dasharray="16 6 18"/>
  <path d="M314 118 h 50" stroke-dasharray="18 6 20"/><path d="M410 116 h 66" stroke-dasharray="22 6 26"/>
</g>
<g stroke="#20242f" stroke-width="2.1" opacity="0.75" stroke-linecap="round">
  <path d="M110 170 h 88" stroke-dasharray="16 5 24 6 18"/>
  <path d="M224 168 h 62" stroke-dasharray="12 4 20"/>
  <path d="M312 166 h 66" stroke-dasharray="18 5 22"/>
  <path d="M110 208 h 94" stroke-dasharray="20 5 20 6 22"/>
  <path d="M224 206 h 58" stroke-dasharray="14 4 18"/>
  <path d="M312 204 h 70" stroke-dasharray="16 5 26"/>
</g>
<path d="M408 172 l 8 -18 l 6 22 l 7 -26 l 6 24 l 8 -20 l 7 22 l 9 -16 l 7 18 l 8 -14" fill="none" stroke="#1a1f2c" stroke-width="2.4" stroke-linecap="round"/>
<path d="M408 210 l 7 -20 l 7 24 l 6 -24 l 7 22 l 7 -18 l 8 20 l 8 -18 l 8 20 l 7 -12" fill="none" stroke="#1a1f2c" stroke-width="2.4" stroke-linecap="round"/>
<!-- THE ENTRY: round, careful, and left exactly where it lay -->
<rect x="100" y="228" width="418" height="32" fill="#c6b48a" opacity="0.28"/>
<g stroke="#171c28" stroke-width="2.3" opacity="0.88" stroke-linecap="round">
  <path d="M110 246 h 92" stroke-dasharray="16 5 26 6 16"/>
  <path d="M224 244 h 62" stroke-dasharray="14 4 20"/>
  <path d="M312 242 h 66" stroke-dasharray="18 5 24"/>
</g>
<path d="M408 248 q 6 -20 14 -4 q 6 14 12 -2 q 5 -14 11 0 q 5 14 12 -1 q 6 -13 12 1 q 4 10 10 -2" fill="none" stroke="#141926" stroke-width="2.8" stroke-linecap="round"/>
<g stroke="#20242f" stroke-width="2.1" opacity="0.7" stroke-linecap="round">
  <path d="M110 284 h 84" stroke-dasharray="14 5 22 6 12"/>
  <path d="M224 282 h 56" stroke-dasharray="10 4 18"/>
</g>

<!-- the reading glasses, folded and set down square on the sheet -->
<g transform="rotate(-3 300 322)">
  <ellipse cx="300" cy="336" rx="150" ry="26" fill="#000" opacity="0.4" filter="url(#ev3-nev-soft)"/>
  <circle cx="228" cy="316" r="42" fill="url(#ev3-nev-lens)"/>
  <circle cx="228" cy="316" r="42" fill="none" stroke="url(#ev3-nev-wire)" stroke-width="5"/>
  <path d="M198 288 q 26 -18 56 -6" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.35"/>
  <circle cx="342" cy="312" r="42" fill="url(#ev3-nev-lens)"/>
  <circle cx="342" cy="312" r="42" fill="none" stroke="url(#ev3-nev-wire)" stroke-width="5"/>
  <path d="M312 284 q 26 -18 56 -6" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.28"/>
  <path d="M269 313 q 16 -12 32 -1" fill="none" stroke="url(#ev3-nev-wire)" stroke-width="4.4"/>
  <path d="M384 310 q 42 6 56 30 q 8 14 -4 20" fill="none" stroke="url(#ev3-nev-wire)" stroke-width="4"/>
  <path d="M188 320 q -40 12 -52 36 q -6 14 6 18" fill="none" stroke="url(#ev3-nev-wire)" stroke-width="4"/>
  <path d="M190 322 q -36 12 -48 34" fill="none" stroke="#ffeec0" stroke-width="1.4" opacity="0.5"/>
</g>

<!-- the master key: put down beside it, never picked up again -->
<g transform="rotate(16 500 424)">
  <ellipse cx="500" cy="432" rx="80" ry="18" fill="#000" opacity="0.45" filter="url(#ev3-nev-soft)"/>
  <ellipse cx="444" cy="422" rx="16" ry="16" fill="none" stroke="url(#ev3-nev-wire)" stroke-width="7"/>
  <rect x="458" y="418" width="88" height="9" fill="url(#ev3-nev-wire)"/>
  <rect x="516" y="427" width="8" height="14" fill="url(#ev3-nev-wire)"/>
  <rect x="534" y="427" width="12" height="11" fill="url(#ev3-nev-wire)"/>
  <rect x="460" y="419" width="84" height="2.6" fill="#ffeec0" opacity="0.55"/>
  <ellipse cx="438" cy="416" rx="5" ry="4" fill="#fff3cf" opacity="0.5"/>
</g>
<!-- and the smallest thing in the room: no fingerprints on the sheet at all -->
<path d="M120 372 q 74 -14 148 -4" fill="none" stroke="#cfc4a4" stroke-width="6" opacity="0.08"/>

<rect width="640" height="520" fill="url(#ev3-nev-vig)"/>
`,
  },

  /* The locket she has worn for six years: a small portrait of a man in a
     picker's hat, and the name she took off along with his. */
  c3_admitname: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-adm-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2822"/><stop offset="0.55" stop-color="#131210"/><stop offset="1" stop-color="#070606"/>
  </linearGradient>
  <radialGradient id="ev3-adm-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffe9b4" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b4" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-adm-cloth" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#3f3a4e"/><stop offset="0.5" stop-color="#262336"/><stop offset="1" stop-color="#12111a"/>
  </linearGradient>
  <linearGradient id="ev3-adm-gold" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fff0bc"/><stop offset="0.28" stop-color="#d8b258"/>
    <stop offset="0.62" stop-color="#9a7629"/><stop offset="1" stop-color="#54400f"/>
  </linearGradient>
  <linearGradient id="ev3-adm-gold2" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#e8cf90"/><stop offset="0.4" stop-color="#ab8635"/><stop offset="1" stop-color="#40300c"/>
  </linearGradient>
  <radialGradient id="ev3-adm-photo" cx="0.36" cy="0.28" r="0.86">
    <stop offset="0" stop-color="#c9b590"/>
    <stop offset="0.6" stop-color="#9d8a68"/><stop offset="1" stop-color="#5d5240"/>
  </radialGradient>
  <linearGradient id="ev3-adm-glass" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.4"/><stop offset="0.42" stop-color="#ffffff" stop-opacity="0.06"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.2"/>
  </linearGradient>
  <filter id="ev3-adm-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-adm-vig" cx="0.44" cy="0.42" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-adm-bg)"/>
<rect width="640" height="520" fill="url(#ev3-adm-cloth)" opacity="0.85"/>
<rect width="640" height="520" fill="url(#ev3-adm-pool)"/>
<!-- the cloth it lies on, in soft folds -->
<g fill="none" stroke="#4e4a62" stroke-width="18" opacity="0.28">
  <path d="M-20 152 q 180 60 340 -10 q 160 -70 340 4"/>
  <path d="M-20 340 q 190 66 350 -6 q 150 -66 330 8"/>
</g>
<g fill="none" stroke="#5f5b78" stroke-width="4" opacity="0.22">
  <path d="M-20 142 q 180 60 340 -10 q 160 -70 340 4"/>
  <path d="M-20 330 q 190 66 350 -6 q 150 -66 330 8"/>
</g>

<!-- the chain, spilled in a loose S -->
<g fill="none" stroke="#7b5f1e" stroke-width="7" stroke-linecap="round">
  <path d="M46 118 q 90 40 150 12 q 66 -32 122 4 q 70 40 152 -2 q 60 -30 122 -2"/>
</g>
<g fill="none" stroke="url(#ev3-adm-gold2)" stroke-width="5" stroke-linecap="round">
  <path d="M46 118 q 90 40 150 12 q 66 -32 122 4 q 70 40 152 -2 q 60 -30 122 -2"/>
</g>
<g stroke="#fff0c0" stroke-width="1.6" opacity="0.5">
  <path d="M78 132 l 6 -6"/><path d="M122 140 l 5 -7"/><path d="M168 138 l 4 -8"/><path d="M214 126 l 2 -8"/>
  <path d="M262 124 l -1 -8"/><path d="M312 136 l -3 -8"/><path d="M360 146 l -4 -8"/><path d="M410 144 l -5 -8"/>
  <path d="M458 132 l -4 -8"/><path d="M506 122 l -2 -8"/><path d="M556 118 l -1 -8"/>
</g>

<!-- the locket, opened flat: two gold halves on a hinge -->
<ellipse cx="322" cy="352" rx="216" ry="46" fill="#000" opacity="0.6" filter="url(#ev3-adm-soft)"/>
<!-- left half: the case back, engine-turned -->
<g>
  <ellipse cx="182" cy="316" rx="112" ry="126" fill="url(#ev3-adm-gold2)"/>
  <ellipse cx="182" cy="316" rx="112" ry="126" fill="none" stroke="#3e2f0c" stroke-width="3"/>
  <ellipse cx="182" cy="316" rx="98" ry="112" fill="none" stroke="#4d3a10" stroke-width="2" opacity="0.6"/>
  <g fill="none" stroke="#5a4413" stroke-width="1.4" opacity="0.45">
    <ellipse cx="182" cy="316" rx="84" ry="96"/><ellipse cx="182" cy="316" rx="66" ry="76"/>
    <ellipse cx="182" cy="316" rx="48" ry="56"/><ellipse cx="182" cy="316" rx="30" ry="36"/>
  </g>
  <g stroke="#fff0c0" stroke-width="1.2" opacity="0.35">
    <path d="M182 190 L182 442"/><path d="M96 240 L268 392"/><path d="M268 240 L96 392"/>
  </g>
  <path d="M96 286 q 6 -70 62 -92 q 40 -16 78 -4 q -70 4 -104 44 q -30 34 -30 84 q 0 44 20 76 q -30 -46 -26 -108 z" fill="#fff6d8" opacity="0.28"/>
  <path d="M108 258 q 22 -46 66 -60" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.4"/>
</g>
<!-- right half: glass, and behind it the portrait -->
<g>
  <ellipse cx="446" cy="308" rx="112" ry="126" fill="url(#ev3-adm-gold)"/>
  <ellipse cx="446" cy="308" rx="112" ry="126" fill="none" stroke="#3e2f0c" stroke-width="3"/>
  <ellipse cx="446" cy="308" rx="92" ry="106" fill="#2a2318"/>
  <ellipse cx="446" cy="308" rx="88" ry="102" fill="url(#ev3-adm-photo)"/>
  <!-- the man in the picture: a picker in a soft hat, half in shadow -->
  <ellipse cx="446" cy="376" rx="66" ry="58" fill="#4a4030"/>
  <path d="M392 434 q 8 -66 54 -70 q 46 4 54 70 z" fill="#5d5140"/>
  <ellipse cx="446" cy="300" rx="38" ry="46" fill="#a8916c"/>
  <ellipse cx="446" cy="300" rx="38" ry="46" fill="url(#ev3-adm-photo)" opacity="0.5"/>
  <path d="M414 258 q 32 -20 64 0 q 22 8 26 14 q -60 12 -116 0 q 6 -8 26 -14 z" fill="#6d5f45"/>
  <path d="M410 262 q 36 -22 72 0" fill="none" stroke="#8a7a5a" stroke-width="4" opacity="0.6"/>
  <path d="M420 290 q 12 -8 24 -2 q -12 12 -24 2 z" fill="#4a4030" opacity="0.55"/>
  <path d="M452 288 q 12 -6 24 2 q -14 8 -24 -2 z" fill="#4a4030" opacity="0.55"/>
  <ellipse cx="431" cy="292" rx="4" ry="3" fill="#2e2820" opacity="0.85"/>
  <ellipse cx="463" cy="291" rx="4" ry="3" fill="#2e2820" opacity="0.85"/>
  <path d="M444 296 q 6 16 -2 22 q -6 4 -10 0" fill="none" stroke="#6d5f45" stroke-width="3" opacity="0.5"/>
  <path d="M430 328 q 16 6 30 -4" fill="none" stroke="#5d5140" stroke-width="4" opacity="0.5"/>
  <path d="M472 288 q 12 34 -8 62 q -18 24 -46 16" fill="#4a4030" opacity="0.28"/>
  <path d="M414 306 q -8 22 4 40" fill="none" stroke="#7a6a4e" stroke-width="5" opacity="0.35"/>
  <!-- collar and the light falling from the left -->
  <path d="M420 430 q 26 -22 52 0" fill="none" stroke="#8a7c5e" stroke-width="5" opacity="0.6"/>
  <path d="M384 262 q 40 -34 90 -30" fill="none" stroke="#e8dcbc" stroke-width="16" opacity="0.12"/>
  <!-- the cover glass -->
  <ellipse cx="446" cy="308" rx="92" ry="106" fill="url(#ev3-adm-glass)"/>
  <path d="M372 250 q 54 -46 118 -30 q -74 12 -108 66 q -32 52 -18 118 q -38 -68 8 -154 z" fill="#ffffff" opacity="0.14"/>
  <path d="M382 254 q 46 -34 100 -22" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.28"/>
</g>
<!-- the hinge and the little catch -->
<g>
  <rect x="288" y="286" width="52" height="20" rx="8" fill="url(#ev3-adm-gold)"/>
  <rect x="292" y="288" width="44" height="5" rx="2.4" fill="#fff3cf" opacity="0.6"/>
  <circle cx="300" cy="296" r="4" fill="#4d3a10"/><circle cx="328" cy="296" r="4" fill="#4d3a10"/>
</g>
<!-- the bail the chain runs through -->
<path d="M182 186 q 0 -22 22 -22 q 22 0 22 22" fill="none" stroke="url(#ev3-adm-gold)" stroke-width="8"/>
<!-- tarnish in the crevices, and a thumb-polished bright patch -->
<g fill="#2a2008" opacity="0.35">
  <ellipse cx="120" cy="400" rx="46" ry="24" transform="rotate(-24 120 400)"/>
  <ellipse cx="522" cy="392" rx="40" ry="22" transform="rotate(22 522 392)"/>
</g>
<ellipse cx="150" cy="252" rx="34" ry="20" fill="#fff6d8" opacity="0.18" transform="rotate(-32 150 252)"/>

<rect width="640" height="520" fill="url(#ev3-adm-vig)"/>
`,
  },

  /* The pupil's notebook: six years of Friday nights copied out in a neat
     round hand, circuit by circuit, on the engineer's own bench. */
  c3_student: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-stu-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2f2e27"/><stop offset="0.55" stop-color="#161613"/><stop offset="1" stop-color="#070807"/>
  </linearGradient>
  <radialGradient id="ev3-stu-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffeec2" stop-opacity="0.3"/><stop offset="1" stop-color="#ffeec2" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-stu-bench" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#4e4130"/><stop offset="0.5" stop-color="#2d251b"/><stop offset="1" stop-color="#14110c"/>
  </linearGradient>
  <linearGradient id="ev3-stu-cover" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#43526b"/><stop offset="0.4" stop-color="#2a3546"/><stop offset="1" stop-color="#141a24"/>
  </linearGradient>
  <linearGradient id="ev3-stu-page" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fbf7ea"/><stop offset="0.36" stop-color="#eee9d4"/>
    <stop offset="0.74" stop-color="#d3ccb0"/><stop offset="1" stop-color="#a29a80"/>
  </linearGradient>
  <linearGradient id="ev3-stu-steel" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f2f6f9"/><stop offset="0.35" stop-color="#a3abb1"/>
    <stop offset="0.7" stop-color="#525860"/><stop offset="1" stop-color="#21262b"/>
  </linearGradient>
  <linearGradient id="ev3-stu-bak" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#55402d"/><stop offset="0.25" stop-color="#33241a"/>
    <stop offset="0.7" stop-color="#180f0a"/><stop offset="1" stop-color="#2b1e14"/>
  </linearGradient>
  <filter id="ev3-stu-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-stu-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-stu-bg)"/>
<rect width="640" height="520" fill="url(#ev3-stu-bench)" opacity="0.9"/>
<rect width="640" height="520" fill="url(#ev3-stu-pool)"/>
<g stroke="#7a6038" stroke-width="1.2" opacity="0.16">
  <path d="M0 108 q 320 -12 640 6"/><path d="M0 254 q 320 -12 640 6"/>
  <path d="M0 390 q 320 -12 640 6"/><path d="M0 494 q 320 -12 640 6"/>
</g>
<!-- solder burns and flux stains on the bench top -->
<g fill="#1a1108" opacity="0.45">
  <ellipse cx="86" cy="140" rx="26" ry="9" transform="rotate(-12 86 140)"/>
  <ellipse cx="576" cy="452" rx="30" ry="10" transform="rotate(8 576 452)"/>
</g>
<g fill="#6d5a2c" opacity="0.2">
  <ellipse cx="128" cy="424" rx="52" ry="20"/><ellipse cx="548" cy="150" rx="44" ry="18"/>
</g>

<!-- the notebook, open, a cheap board cover with cloth spine -->
<ellipse cx="308" cy="452" rx="252" ry="32" fill="#000" opacity="0.6" filter="url(#ev3-stu-soft)"/>
<g transform="rotate(-3 310 280)">
  <path d="M30 84 L316 66 L316 434 L38 452 Z" fill="url(#ev3-stu-cover)"/>
  <path d="M324 66 L610 84 L602 452 L324 434 Z" fill="url(#ev3-stu-cover)"/>
  <path d="M30 84 L316 66 L316 78 L30 96 Z" fill="#6d809e" opacity="0.35"/>
  <path d="M312 66 L328 66 L328 434 L312 434 Z" fill="#0e1319"/>
  <path d="M42 96 L314 78 L314 424 L48 442 Z" fill="#cfc8ac"/>
  <path d="M326 78 L598 96 L592 442 L326 424 Z" fill="#cfc8ac"/>
  <path d="M52 104 L312 86 L312 418 L58 434 Z" fill="url(#ev3-stu-page)"/>
  <path d="M328 86 L588 104 L582 434 L328 418 Z" fill="url(#ev3-stu-page)"/>
  <path d="M300 88 L312 86 L312 418 L300 417 Z" fill="#8a8266" opacity="0.35"/>
  <path d="M328 86 L340 88 L340 417 L328 418 Z" fill="#8a8266" opacity="0.3"/>
  <!-- feint ruling on both leaves -->
  <g stroke="#9fbcc4" stroke-width="1" opacity="0.5">
    <path d="M60 132 L310 114"/><path d="M60 160 L310 142"/><path d="M60 188 L310 170"/>
    <path d="M60 216 L310 198"/><path d="M60 244 L310 226"/><path d="M60 272 L310 254"/>
    <path d="M60 300 L310 282"/><path d="M60 328 L310 310"/><path d="M60 356 L310 338"/>
    <path d="M60 384 L310 366"/><path d="M60 412 L310 394"/>
    <path d="M330 114 L580 132"/><path d="M330 142 L580 160"/><path d="M330 170 L580 188"/>
    <path d="M330 198 L580 216"/><path d="M330 226 L580 244"/><path d="M330 254 L580 272"/>
    <path d="M330 282 L580 300"/><path d="M330 310 L580 328"/><path d="M330 338 L580 356"/>
    <path d="M330 366 L580 384"/><path d="M330 394 L580 412"/>
  </g>
  <path d="M92 92 L98 420" stroke="#c26a5c" stroke-width="1.4" opacity="0.45"/>
  <path d="M348 90 L354 418" stroke="#c26a5c" stroke-width="1.4" opacity="0.4"/>

  <!-- left leaf: copied notes, neat, rounded, evenly spaced -->
  <g fill="none" stroke="#243a5e" stroke-width="2.2" stroke-linecap="round" opacity="0.88">
    <path d="M104 126 c 6 -12 12 -2 15 3 c 6 -13 13 -3 16 3 c 6 -11 12 -1 16 4 c 7 -10 13 -2 17 3 c 6 -12 13 -2 16 3 c 7 -10 13 -1 17 4 c 6 -11 12 -2 16 3"/>
    <path d="M104 154 c 7 -13 13 -2 16 3 c 6 -12 13 -3 16 3 c 7 -11 13 -1 17 4 c 6 -10 13 -2 16 3 c 7 -13 14 -2 17 4 c 6 -9 12 -1 16 3 c 7 -11 13 -2 17 3 c 6 -10 12 -1 16 4"/>
    <path d="M104 182 c 6 -12 13 -3 16 2 c 7 -12 13 -1 16 4 c 6 -11 13 -2 17 3 c 7 -12 13 -2 17 4 c 6 -10 12 -1 16 3 c 6 -11 13 -2 16 3"/>
    <path d="M104 210 c 7 -12 13 -2 16 3 c 6 -12 13 -3 16 3 c 7 -12 14 -1 17 4 c 6 -11 13 -2 17 3 c 7 -13 13 -2 17 4 c 6 -10 12 -1 16 3 c 6 -11 13 -2 17 3"/>
    <path d="M104 238 c 6 -11 12 -2 15 3 c 7 -13 13 -3 17 3 c 6 -11 12 -1 16 4 c 6 -10 13 -2 16 3 c 7 -12 13 -2 17 3"/>
  </g>
  <!-- a copied symbol block: coil, valve, ground, all in ink, by hand -->
  <g fill="none" stroke="#243a5e" stroke-width="2.4">
    <path d="M118 300 q 10 -9 0 -18 q -10 -9 0 -18"/>
    <path d="M118 336 q 10 -9 0 -18 q -10 -9 0 -18"/>
    <path d="M150 300 q -10 -9 0 -18 q 10 -9 0 -18"/>
    <path d="M150 336 q -10 -9 0 -18 q 10 -9 0 -18"/>
    <path d="M130 262 v 82"/><path d="M138 262 v 82"/>
    <path d="M118 268 L96 268"/><path d="M118 344 L96 344"/><path d="M150 268 L176 268"/><path d="M150 344 L176 344"/>
  </g>
  <circle cx="222" cy="304" r="28" fill="none" stroke="#243a5e" stroke-width="2.4"/>
  <path d="M208 292 h 28" stroke="#243a5e" stroke-width="3"/>
  <path d="M208 304 h 28" stroke="#243a5e" stroke-width="2" stroke-dasharray="5 5"/>
  <path d="M212 318 q 10 8 20 0" fill="none" stroke="#243a5e" stroke-width="2.6"/>
  <path d="M222 276 v -10" stroke="#243a5e" stroke-width="2.2"/>
  <path d="M222 332 v 12" stroke="#243a5e" stroke-width="2.2"/>
  <g stroke="#243a5e" stroke-width="2.8">
    <path d="M252 372 h 34"/><path d="M258 382 h 22"/><path d="M264 392 h 10"/>
  </g>
  <path d="M269 344 v 28" stroke="#243a5e" stroke-width="2.4"/>

  <!-- right leaf: the same again, and again, dated down the margin -->
  <g fill="none" stroke="#243a5e" stroke-width="2.2" stroke-linecap="round" opacity="0.88">
    <path d="M362 122 c 6 -12 13 -2 16 3 c 7 -13 13 -3 17 2 c 6 -11 13 -1 17 4 c 7 -10 13 -2 17 3 c 6 -12 13 -2 17 3 c 7 -10 13 -1 17 4"/>
    <path d="M362 150 c 7 -12 13 -2 17 3 c 6 -12 13 -3 16 3 c 7 -12 14 -1 17 4 c 6 -11 13 -2 17 3 c 7 -13 13 -2 17 4 c 6 -10 13 -1 17 3 c 6 -11 13 -2 17 3"/>
    <path d="M362 178 c 6 -11 13 -3 16 2 c 7 -12 13 -1 17 4 c 6 -11 13 -2 17 3 c 7 -12 14 -2 17 4 c 6 -10 12 -1 16 3"/>
    <path d="M362 206 c 7 -12 13 -2 17 3 c 6 -13 13 -2 16 3 c 7 -11 13 -1 17 4 c 6 -11 13 -2 17 3 c 7 -12 13 -2 17 4 c 6 -9 13 -1 17 3"/>
    <path d="M362 234 c 6 -12 13 -2 16 3 c 7 -12 13 -3 17 3 c 6 -11 13 -1 17 4 c 6 -10 13 -2 17 3"/>
    <path d="M362 290 c 7 -12 13 -2 17 3 c 6 -12 13 -3 16 3 c 7 -12 14 -1 17 4 c 6 -11 13 -2 17 3 c 7 -13 13 -2 17 4 c 6 -10 13 -1 17 3"/>
    <path d="M362 318 c 6 -11 13 -3 16 2 c 7 -12 13 -1 17 4 c 6 -11 13 -2 17 3 c 7 -12 14 -2 17 4"/>
    <path d="M362 346 c 7 -12 13 -2 17 3 c 6 -13 13 -2 16 3 c 7 -11 13 -1 17 4 c 6 -11 13 -2 17 3 c 7 -12 13 -2 17 4"/>
    <path d="M362 374 c 6 -12 13 -2 16 3 c 7 -12 13 -3 17 3 c 6 -11 13 -1 17 4"/>
  </g>
  <!-- one line double-underscored: she asked the right question -->
  <path d="M360 262 L520 273" stroke="#243a5e" stroke-width="1.8" opacity="0.85"/>
  <path d="M360 268 L520 279" stroke="#243a5e" stroke-width="1.8" opacity="0.7"/>
  <path d="M582 434 L548 432 L578 404 Z" fill="#a89f82"/>
</g>

<!-- the engineer's soldering iron, laid across the far corner, still warm -->
<g transform="rotate(-27 552 220)">
  <rect x="470" y="196" width="180" height="20" rx="9" fill="#000" opacity="0.4" filter="url(#ev3-stu-soft)"/>
  <rect x="466" y="192" width="112" height="20" rx="9" fill="url(#ev3-stu-bak)"/>
  <rect x="472" y="195" width="98" height="5" rx="2.4" fill="#a8825c" opacity="0.4"/>
  <rect x="578" y="196" width="52" height="12" rx="3" fill="#8d7a55"/>
  <path d="M630 198 l 26 4 l -26 4 z" fill="#b47a3a"/>
  <path d="M466 202 q -26 6 -34 24" fill="none" stroke="#2a241c" stroke-width="8" stroke-linecap="round"/>
</g>

<rect width="640" height="520" fill="url(#ev3-stu-vig)"/>
`,
  },

  /* Iris's station: the organ manual, the drawbars, and the watch she keeps
     on the music desk — because somebody around here is always on the clock. */
  c3_irisdoubt: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-iri-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2d2a24"/><stop offset="0.55" stop-color="#151310"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-iri-pool" cx="0.22" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffe9b8" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-iri-wood" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6b4a2c"/><stop offset="0.35" stop-color="#472e19"/>
    <stop offset="0.78" stop-color="#2a1a0e"/><stop offset="1" stop-color="#150c07"/>
  </linearGradient>
  <linearGradient id="ev3-iri-ivory" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fffdf2"/><stop offset="0.42" stop-color="#f2ecd8"/>
    <stop offset="0.86" stop-color="#d9d0b6"/><stop offset="1" stop-color="#a89f88"/>
  </linearGradient>
  <linearGradient id="ev3-iri-ebony" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a3630"/><stop offset="0.3" stop-color="#16140f"/>
    <stop offset="0.75" stop-color="#0b0a07"/><stop offset="1" stop-color="#26231d"/>
  </linearGradient>
  <linearGradient id="ev3-iri-bar" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d6d9dc"/><stop offset="0.35" stop-color="#8d9399"/>
    <stop offset="0.75" stop-color="#4b5157"/><stop offset="1" stop-color="#22262a"/>
  </linearGradient>
  <linearGradient id="ev3-iri-barb" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7d5c33"/><stop offset="0.35" stop-color="#4c3418"/><stop offset="1" stop-color="#22160a"/>
  </linearGradient>
  <linearGradient id="ev3-iri-chrome" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f4f7f9"/><stop offset="0.35" stop-color="#a7afb5"/>
    <stop offset="0.72" stop-color="#565c62"/><stop offset="1" stop-color="#22262a"/>
  </linearGradient>
  <filter id="ev3-iri-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-iri-vig" cx="0.42" cy="0.44" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-iri-bg)"/>
<rect width="640" height="520" fill="url(#ev3-iri-wood)" opacity="0.85"/>
<rect width="640" height="520" fill="url(#ev3-iri-pool)"/>
<g stroke="#8a6236" stroke-width="1.1" opacity="0.16">
  <path d="M0 44 q 320 -10 640 4"/><path d="M0 96 q 320 -10 640 4"/><path d="M0 470 q 320 -10 640 4"/>
</g>

<!-- the drawbar rail: two ranks of coloured bars, half pulled out -->
<rect x="26" y="46" width="588" height="126" rx="5" fill="#1c1811"/>
<rect x="26" y="46" width="588" height="8" rx="4" fill="#7a6242" opacity="0.45"/>
<rect x="26" y="164" width="588" height="8" fill="#000" opacity="0.5"/>
<g>
  <rect x="54" y="66" width="30" height="82" rx="4" fill="url(#ev3-iri-barb)"/>
  <rect x="56" y="68" width="8" height="78" rx="3" fill="#c99b5c" opacity="0.35"/>
  <rect x="98" y="66" width="30" height="60" rx="4" fill="url(#ev3-iri-barb)"/>
  <rect x="100" y="68" width="8" height="56" rx="3" fill="#c99b5c" opacity="0.35"/>
  <rect x="142" y="66" width="30" height="96" rx="4" fill="url(#ev3-iri-bar)"/>
  <rect x="144" y="68" width="8" height="92" rx="3" fill="#e8eef2" opacity="0.5"/>
  <rect x="186" y="66" width="30" height="44" rx="4" fill="url(#ev3-iri-bar)"/>
  <rect x="188" y="68" width="8" height="40" rx="3" fill="#e8eef2" opacity="0.5"/>
  <rect x="230" y="66" width="30" height="78" rx="4" fill="url(#ev3-iri-barb)"/>
  <rect x="232" y="68" width="8" height="74" rx="3" fill="#c99b5c" opacity="0.3"/>
  <rect x="274" y="66" width="30" height="102" rx="4" fill="url(#ev3-iri-bar)"/>
  <rect x="276" y="68" width="8" height="98" rx="3" fill="#e8eef2" opacity="0.45"/>
  <rect x="318" y="66" width="30" height="52" rx="4" fill="url(#ev3-iri-bar)"/>
  <rect x="320" y="68" width="8" height="48" rx="3" fill="#e8eef2" opacity="0.45"/>
  <rect x="362" y="66" width="30" height="88" rx="4" fill="url(#ev3-iri-barb)"/>
  <rect x="364" y="68" width="8" height="84" rx="3" fill="#c99b5c" opacity="0.3"/>
  <rect x="406" y="66" width="30" height="66" rx="4" fill="url(#ev3-iri-bar)"/>
  <rect x="450" y="66" width="30" height="94" rx="4" fill="url(#ev3-iri-barb)"/>
  <rect x="494" y="66" width="30" height="56" rx="4" fill="url(#ev3-iri-bar)"/>
  <rect x="538" y="66" width="30" height="84" rx="4" fill="url(#ev3-iri-barb)"/>
</g>
<g fill="#000" opacity="0.4">
  <rect x="54" y="140" width="30" height="10" rx="3"/><rect x="142" y="152" width="30" height="10" rx="3"/>
  <rect x="274" y="158" width="30" height="10" rx="3"/><rect x="450" y="150" width="30" height="10" rx="3"/>
</g>

<!-- the fall board and the keys -->
<rect x="10" y="180" width="620" height="26" rx="4" fill="url(#ev3-iri-wood)"/>
<rect x="10" y="180" width="620" height="6" rx="3" fill="#a3763f" opacity="0.4"/>
<rect x="10" y="200" width="620" height="8" fill="#000" opacity="0.5"/>
<ellipse cx="320" cy="446" rx="290" ry="34" fill="#000" opacity="0.5" filter="url(#ev3-iri-soft)"/>
<g>
  <rect x="16" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="86" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="156" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="226" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="296" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="366" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="436" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="506" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
  <rect x="576" y="208" width="66" height="210" rx="5" fill="url(#ev3-iri-ivory)"/>
</g>
<g fill="#9a917c" opacity="0.5">
  <rect x="82" y="208" width="4" height="210"/><rect x="152" y="208" width="4" height="210"/>
  <rect x="222" y="208" width="4" height="210"/><rect x="292" y="208" width="4" height="210"/>
  <rect x="362" y="208" width="4" height="210"/><rect x="432" y="208" width="4" height="210"/>
  <rect x="502" y="208" width="4" height="210"/><rect x="572" y="208" width="4" height="210"/>
</g>
<!-- key fronts, catching the lamp along the top third -->
<rect x="16" y="208" width="626" height="40" fill="#ffffff" opacity="0.22"/>
<rect x="16" y="392" width="626" height="26" fill="#7a715c" opacity="0.35"/>
<!-- the sharps -->
<g>
  <rect x="58" y="208" width="42" height="128" rx="3" fill="url(#ev3-iri-ebony)"/>
  <rect x="128" y="208" width="42" height="128" rx="3" fill="url(#ev3-iri-ebony)"/>
  <rect x="268" y="208" width="42" height="128" rx="3" fill="url(#ev3-iri-ebony)"/>
  <rect x="338" y="208" width="42" height="128" rx="3" fill="url(#ev3-iri-ebony)"/>
  <rect x="408" y="208" width="42" height="128" rx="3" fill="url(#ev3-iri-ebony)"/>
  <rect x="548" y="208" width="42" height="128" rx="3" fill="url(#ev3-iri-ebony)"/>
</g>
<g fill="#ffffff" opacity="0.2">
  <rect x="61" y="210" width="8" height="122" rx="3"/><rect x="131" y="210" width="8" height="122" rx="3"/>
  <rect x="271" y="210" width="8" height="122" rx="3"/><rect x="341" y="210" width="8" height="122" rx="3"/>
  <rect x="411" y="210" width="8" height="122" rx="3"/><rect x="551" y="210" width="8" height="122" rx="3"/>
</g>
<g fill="#000" opacity="0.35">
  <rect x="58" y="330" width="42" height="8" rx="3"/><rect x="128" y="330" width="42" height="8" rx="3"/>
  <rect x="268" y="330" width="42" height="8" rx="3"/><rect x="338" y="330" width="42" height="8" rx="3"/>
  <rect x="408" y="330" width="42" height="8" rx="3"/><rect x="548" y="330" width="42" height="8" rx="3"/>
</g>
<!-- ten years of hands: the ivory is worn yellow in the middle of the keys -->
<g fill="#b8a271" opacity="0.2">
  <ellipse cx="188" cy="368" rx="26" ry="16"/><ellipse cx="330" cy="372" rx="30" ry="17"/>
  <ellipse cx="470" cy="368" rx="26" ry="15"/>
</g>

<!-- THE WATCH: face up on the fall board, where she can always see it -->
<g transform="rotate(-8 484 132)">
  <ellipse cx="484" cy="142" rx="66" ry="60" fill="#000" opacity="0.5" filter="url(#ev3-iri-soft)"/>
  <circle cx="480" cy="132" r="58" fill="url(#ev3-iri-chrome)"/>
  <circle cx="480" cy="132" r="48" fill="#f2ecd8"/>
  <circle cx="480" cy="132" r="48" fill="none" stroke="#8a857a" stroke-width="1.4"/>
  <g stroke="#2c281f" stroke-width="2.6">
    <path d="M480 88 v 10"/><path d="M524 132 h -10"/><path d="M480 176 v -10"/><path d="M436 132 h 10"/>
  </g>
  <g stroke="#2c281f" stroke-width="1.4" opacity="0.7">
    <path d="M511 101 l -6 6"/><path d="M511 163 l -6 -6"/><path d="M449 163 l 6 -6"/><path d="M449 101 l 6 6"/>
  </g>
  <path d="M480 132 L480 96" stroke="#1a1712" stroke-width="3.6" stroke-linecap="round"/>
  <path d="M480 132 L508 148" stroke="#1a1712" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M480 132 L456 160" stroke="#8e2a1c" stroke-width="2" stroke-linecap="round"/>
  <circle cx="480" cy="132" r="4" fill="#1a1712"/>
  <rect x="472" y="66" width="16" height="12" rx="3" fill="#8d949a"/>
  <path d="M448 104 q 26 -22 60 -16" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.24"/>
</g>

<rect width="640" height="520" fill="url(#ev3-iri-vig)"/>
`,
  },

  /* The lobby: two chairs in each other's sight, a sponsor's hat on one and
     a fired man's carton by the other, and a groove worn in the linoleum. */
  c3_lobbyalibi: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-lob-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2b27"/><stop offset="0.55" stop-color="#151512"/><stop offset="1" stop-color="#070707"/>
  </linearGradient>
  <radialGradient id="ev3-lob-pool" cx="0.22" cy="0.04" r="0.88">
    <stop offset="0" stop-color="#ffe9bb" stop-opacity="0.26"/><stop offset="1" stop-color="#ffe9bb" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-lob-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a4438"/><stop offset="0.6" stop-color="#2c2822"/><stop offset="1" stop-color="#1a1714"/>
  </linearGradient>
  <linearGradient id="ev3-lob-floor" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#5a5140"/><stop offset="0.5" stop-color="#39332a"/><stop offset="1" stop-color="#1c1915"/>
  </linearGradient>
  <linearGradient id="ev3-lob-wood" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#8a6236"/><stop offset="0.35" stop-color="#5c3f21"/>
    <stop offset="0.8" stop-color="#331f10"/><stop offset="1" stop-color="#1b1009"/>
  </linearGradient>
  <linearGradient id="ev3-lob-felt" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6e6a5e"/><stop offset="0.35" stop-color="#4b483f"/>
    <stop offset="0.78" stop-color="#2c2a25"/><stop offset="1" stop-color="#1a1916"/>
  </linearGradient>
  <linearGradient id="ev3-lob-band" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3c352c"/><stop offset="0.4" stop-color="#221e19"/><stop offset="1" stop-color="#100e0c"/>
  </linearGradient>
  <linearGradient id="ev3-lob-card" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#c9a874"/><stop offset="0.5" stop-color="#9e8153"/><stop offset="1" stop-color="#5f4c2d"/>
  </linearGradient>
  <filter id="ev3-lob-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="12"/>
  </filter>
  <radialGradient id="ev3-lob-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-lob-bg)"/>
<rect width="640" height="248" fill="url(#ev3-lob-wall)"/>
<rect y="248" width="640" height="272" fill="url(#ev3-lob-floor)"/>
<rect width="640" height="520" fill="url(#ev3-lob-pool)"/>
<rect y="238" width="640" height="16" fill="#191712"/>
<rect y="238" width="640" height="4" fill="#7d7461" opacity="0.4"/>
<!-- linoleum, laid in squares, waxed and reflecting a little -->
<g stroke="#6e6450" stroke-width="1.2" opacity="0.2">
  <path d="M0 292 h640"/><path d="M0 340 h640"/><path d="M0 396 h640"/><path d="M0 460 h640"/>
  <path d="M96 254 L54 520"/><path d="M226 254 L206 520"/><path d="M356 254 L358 520"/>
  <path d="M486 254 L510 520"/><path d="M616 254 L662 520"/>
</g>
<!-- THE GROOVE: a track paced into the wax between the two chairs -->
<path d="M140 450 Q 320 422 512 446" fill="none" stroke="#0f0d0a" stroke-width="26" opacity="0.28"/>
<path d="M140 444 Q 320 416 512 440" fill="none" stroke="#d9cdae" stroke-width="7" opacity="0.1"/>

<!-- chair one: bentwood, with the sponsor's hat set on the seat -->
<g>
  <ellipse cx="188" cy="452" rx="128" ry="26" fill="#000" opacity="0.55" filter="url(#ev3-lob-soft)"/>
  <path d="M104 292 q 84 -34 168 0 l -8 26 q -76 -30 -152 0 z" fill="url(#ev3-lob-wood)"/>
  <path d="M108 296 q 80 -30 160 0" fill="none" stroke="#c08a4c" stroke-width="3" opacity="0.4"/>
  <path d="M112 318 q 76 -26 148 0 l 0 24 q -74 -24 -148 0 z" fill="url(#ev3-lob-wood)"/>
  <path d="M118 318 v -102 q 0 -34 34 -40" fill="none" stroke="#3d2814" stroke-width="14" stroke-linecap="round"/>
  <path d="M118 318 v -102 q 0 -34 34 -40" fill="none" stroke="url(#ev3-lob-wood)" stroke-width="10" stroke-linecap="round"/>
  <path d="M254 318 v -102 q 0 -34 -34 -40" fill="none" stroke="#3d2814" stroke-width="14" stroke-linecap="round"/>
  <path d="M254 318 v -102 q 0 -34 -34 -40" fill="none" stroke="url(#ev3-lob-wood)" stroke-width="10" stroke-linecap="round"/>
  <path d="M152 176 q 34 -10 68 0 q -34 22 -68 0 z" fill="url(#ev3-lob-wood)"/>
  <path d="M132 342 L118 460" stroke="url(#ev3-lob-wood)" stroke-width="11" stroke-linecap="round"/>
  <path d="M240 342 L258 460" stroke="url(#ev3-lob-wood)" stroke-width="11" stroke-linecap="round"/>
  <path d="M160 342 L156 440" stroke="#2f1f10" stroke-width="9" stroke-linecap="round"/>
  <path d="M216 342 L224 440" stroke="#2f1f10" stroke-width="9" stroke-linecap="round"/>
  <path d="M124 400 L252 402" stroke="url(#ev3-lob-wood)" stroke-width="7" stroke-linecap="round"/>
  <path d="M120 224 q 68 -20 136 0" fill="none" stroke="#c08a4c" stroke-width="2.4" opacity="0.3"/>
</g>
<!-- the hat, crown down, brim curled: a man who has been waiting a while -->
<g>
  <ellipse cx="188" cy="316" rx="94" ry="30" fill="#000" opacity="0.5" filter="url(#ev3-lob-soft)"/>
  <ellipse cx="186" cy="304" rx="92" ry="29" fill="url(#ev3-lob-felt)"/>
  <ellipse cx="186" cy="298" rx="92" ry="29" fill="url(#ev3-lob-felt)"/>
  <path d="M96 296 q 90 -34 180 0" fill="none" stroke="#8e897a" stroke-width="3" opacity="0.45"/>
  <path d="M120 286 q 66 34 132 0 l -6 -50 q -10 -34 -60 -34 q -50 0 -60 34 z" fill="url(#ev3-lob-felt)"/>
  <path d="M126 258 q 60 26 120 0 l -3 -22 q -8 -30 -57 -30 q -49 0 -57 30 z" fill="#5c584d" opacity="0.35"/>
  <path d="M186 202 q -22 4 -30 20 q 22 -12 30 -12 q 8 0 30 12 q -8 -16 -30 -20 z" fill="#26241f"/>
  <path d="M122 268 q 64 30 128 0 l 2 16 q -66 30 -132 0 z" fill="url(#ev3-lob-band)"/>
  <path d="M124 272 q 62 26 124 0" fill="none" stroke="#5c5348" stroke-width="1.6" opacity="0.5"/>
  <path d="M136 226 q 30 -22 66 -12" fill="none" stroke="#a49f90" stroke-width="7" opacity="0.28"/>
  <!-- a folded card tucked in the band -->
  <path d="M220 258 L256 250 L260 274 L224 282 Z" fill="url(#ev3-lob-card)"/>
  <g stroke="#4d3d22" stroke-width="1.6" opacity="0.6">
    <path d="M228 264 h 22" stroke-dasharray="8 4 8"/><path d="M228 272 h 16" stroke-dasharray="6 4 5"/>
  </g>
</g>

<!-- chair two, further off and half out of the light -->
<g opacity="0.85">
  <ellipse cx="500" cy="436" rx="104" ry="22" fill="#000" opacity="0.5" filter="url(#ev3-lob-soft)"/>
  <path d="M436 302 q 68 -28 136 0 l -6 22 q -62 -24 -124 0 z" fill="url(#ev3-lob-wood)"/>
  <path d="M444 324 v -92 q 0 -28 28 -34" fill="none" stroke="url(#ev3-lob-wood)" stroke-width="9" stroke-linecap="round"/>
  <path d="M562 324 v -92 q 0 -28 -28 -34" fill="none" stroke="url(#ev3-lob-wood)" stroke-width="9" stroke-linecap="round"/>
  <path d="M472 198 q 28 -8 56 0 q -28 18 -56 0 z" fill="url(#ev3-lob-wood)"/>
  <path d="M452 324 L442 444" stroke="url(#ev3-lob-wood)" stroke-width="9" stroke-linecap="round"/>
  <path d="M556 324 L570 444" stroke="url(#ev3-lob-wood)" stroke-width="9" stroke-linecap="round"/>
  <path d="M478 324 L474 424" stroke="#2f1f10" stroke-width="7" stroke-linecap="round"/>
  <path d="M528 324 L536 424" stroke="#2f1f10" stroke-width="7" stroke-linecap="round"/>
</g>
<!-- the carton of a career, on the floor between them -->
<g>
  <ellipse cx="418" cy="486" rx="120" ry="22" fill="#000" opacity="0.5" filter="url(#ev3-lob-soft)"/>
  <path d="M332 396 L508 396 L520 476 L322 476 Z" fill="#9a7a4e"/>
  <path d="M332 396 L508 396 L500 410 L340 410 Z" fill="#c2a06c"/>
  <path d="M322 476 L520 476 L520 488 L322 488 Z" fill="#6b5330"/>
  <path d="M508 396 L520 476 L500 476 L500 410 Z" fill="#7a5f37"/>
  <g stroke="#6b5330" stroke-width="2" opacity="0.5">
    <path d="M356 412 L352 476"/><path d="M446 412 L452 476"/>
  </g>
  <!-- a mug handle and a rolled photograph sticking out of the top -->
  <path d="M366 396 q -4 -30 22 -32 q 26 -2 24 26" fill="none" stroke="#c9c2b0" stroke-width="9"/>
  <path d="M368 392 q -2 -22 18 -24" fill="none" stroke="#fdfaf2" stroke-width="3" opacity="0.6"/>
  <path d="M458 396 L470 352 L490 356 L478 398 Z" fill="#e2d9c0"/>
  <path d="M458 396 L470 352 L476 353 L464 397 Z" fill="#fdf9ee"/>
  <g stroke="#8d8368" stroke-width="1.6" opacity="0.5">
    <path d="M468 364 l 16 3"/><path d="M466 374 l 16 3"/>
  </g>
</g>

<rect width="640" height="520" fill="url(#ev3-lob-vig)"/>
`,
  },

  /* The re-examination petition: eight years in a drawer, tied in tape gone
     pink with dust, and a seal nobody has broken since 1939. */
  c3_petition: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-pet-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2823"/><stop offset="0.55" stop-color="#131210"/><stop offset="1" stop-color="#070706"/>
  </linearGradient>
  <radialGradient id="ev3-pet-pool" cx="0.24" cy="0.04" r="0.88">
    <stop offset="0" stop-color="#ffe9b4" stop-opacity="0.3"/><stop offset="1" stop-color="#ffe9b4" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-pet-drawer" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5b4a33"/><stop offset="0.3" stop-color="#3a2e1f"/><stop offset="1" stop-color="#1a1510"/>
  </linearGradient>
  <linearGradient id="ev3-pet-inside" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0d0b08"/><stop offset="0.6" stop-color="#231c13"/><stop offset="1" stop-color="#3a2e1f"/>
  </linearGradient>
  <linearGradient id="ev3-pet-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#efe6c8"/><stop offset="0.34" stop-color="#ded1ac"/>
    <stop offset="0.72" stop-color="#bfae87"/><stop offset="1" stop-color="#8e805f"/>
  </linearGradient>
  <linearGradient id="ev3-pet-paper2" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#e4d9ba"/><stop offset="0.6" stop-color="#c4b48c"/><stop offset="1" stop-color="#82755a"/>
  </linearGradient>
  <linearGradient id="ev3-pet-tape" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c98a86"/><stop offset="0.35" stop-color="#a05a55"/>
    <stop offset="0.8" stop-color="#6b332f"/><stop offset="1" stop-color="#3d1b18"/>
  </linearGradient>
  <radialGradient id="ev3-pet-wax" cx="0.34" cy="0.28" r="0.84">
    <stop offset="0" stop-color="#c85a48"/><stop offset="0.5" stop-color="#8e2f24"/><stop offset="1" stop-color="#43120d"/>
  </radialGradient>
  <filter id="ev3-pet-soft" x="-30%" y="-50%" width="160%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev3-pet-vig" cx="0.42" cy="0.42" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-pet-bg)"/>
<rect width="640" height="520" fill="url(#ev3-pet-inside)"/>
<rect width="640" height="520" fill="url(#ev3-pet-pool)"/>
<!-- the open drawer: front panel low, sides running back into the dark -->
<path d="M0 92 L640 76 L640 96 L0 112 Z" fill="#0a0806"/>
<path d="M0 112 L640 96 L610 200 L26 214 Z" fill="#181309"/>
<path d="M0 214 L640 196 L640 236 L0 254 Z" fill="#100c08" opacity="0.6"/>
<path d="M0 430 L640 412 L640 520 L0 520 Z" fill="url(#ev3-pet-drawer)"/>
<path d="M0 430 L640 412 L640 424 L0 442 Z" fill="#8a6f42" opacity="0.45"/>
<g stroke="#6e5836" stroke-width="1" opacity="0.2">
  <path d="M0 466 q 320 -12 640 4"/><path d="M0 496 q 320 -12 640 4"/>
</g>
<!-- the drawer pull -->
<rect x="252" y="470" width="136" height="26" rx="8" fill="#2c2a24"/>
<rect x="256" y="473" width="128" height="7" rx="3.4" fill="#9a917c" opacity="0.5"/>
<circle cx="272" cy="483" r="6" fill="#171511"/><circle cx="368" cy="483" r="6" fill="#171511"/>
<!-- other files standing in the drawer behind, in shadow -->
<g fill="#3d3423">
  <path d="M18 196 L120 190 L128 400 L26 406 Z"/>
  <path d="M124 190 L216 186 L224 396 L132 400 Z"/>
  <path d="M512 178 L604 174 L600 386 L508 390 Z"/>
</g>
<g fill="#000" opacity="0.5">
  <path d="M18 196 L120 190 L120 208 L18 214 Z"/><path d="M124 190 L216 186 L216 204 L124 208 Z"/>
  <path d="M512 178 L604 174 L604 192 L512 196 Z"/>
</g>

<!-- the petition, lifted out and laid across the drawer front -->
<ellipse cx="330" cy="416" rx="242" ry="34" fill="#000" opacity="0.6" filter="url(#ev3-pet-soft)"/>
<g transform="rotate(-4 330 280)">
  <path d="M104 152 L534 134 L546 402 L116 420 Z" fill="url(#ev3-pet-paper2)"/>
  <path d="M100 146 L530 128 L542 396 L112 414 Z" fill="url(#ev3-pet-paper2)"/>
  <path d="M96 140 L526 122 L538 390 L108 408 Z" fill="url(#ev3-pet-paper)"/>
  <path d="M96 140 L526 122 L526 136 L96 154 Z" fill="#ffffff" opacity="0.24"/>
  <!-- a court caption block: two rules and a bracket -->
  <path d="M110 186 L512 169" stroke="#5a5138" stroke-width="3" opacity="0.7"/>
  <path d="M110 192 L512 175" stroke="#5a5138" stroke-width="1.2" opacity="0.5"/>
  <g stroke="#4b4330" stroke-width="4" opacity="0.6">
    <path d="M186 168 h 108" stroke-dasharray="34 8 44"/><path d="M318 164 h 84" stroke-dasharray="26 8 34"/>
  </g>
  <path d="M330 206 L330 268" stroke="#4b4330" stroke-width="2" opacity="0.55"/>
  <path d="M330 206 q -12 0 -12 12" fill="none" stroke="#4b4330" stroke-width="2" opacity="0.55"/>
  <path d="M330 268 q -12 0 -12 -12" fill="none" stroke="#4b4330" stroke-width="2" opacity="0.55"/>
  <g stroke="#3a3427" stroke-width="2.4" opacity="0.72" stroke-linecap="butt">
    <path d="M124 212 h 176" stroke-dasharray="30 7 44 8 34"/>
    <path d="M124 238 h 160" stroke-dasharray="26 7 38 8 30"/>
    <path d="M124 264 h 184" stroke-dasharray="40 7 30 8 46"/>
    <path d="M352 214 h 152" stroke-dasharray="34 7 40 8 26"/>
    <path d="M352 240 h 138" stroke-dasharray="28 7 34 8 32"/>
  </g>
  <!-- the body, in double-spaced legal type -->
  <g stroke="#3a3427" stroke-width="2.4" opacity="0.7" stroke-linecap="butt">
    <path d="M124 302 h 388" stroke-dasharray="36 8 52 9 42 8 60 9 46"/>
    <path d="M124 328 h 396" stroke-dasharray="48 8 34 9 58 8 40 9 52"/>
    <path d="M124 354 h 372" stroke-dasharray="32 8 50 9 36 8 56 9 40"/>
    <path d="M124 380 h 220" stroke-dasharray="42 8 36 9 48"/>
  </g>
  <!-- dust: it has lain flat in the dark since 1939 -->
  <path d="M96 140 L526 122 L530 220 L100 238 Z" fill="#b3a67f" opacity="0.14"/>
  <g fill="#a2977a" opacity="0.18">
    <ellipse cx="200" cy="330" rx="60" ry="20"/><ellipse cx="420" cy="360" rx="52" ry="18"/>
  </g>
  <path d="M538 390 L504 392 L534 362 Z" fill="#9a8d6c"/>
  <!-- foxing along the exposed edge -->
  <g fill="#8a6b38" opacity="0.2">
    <ellipse cx="126" cy="398" rx="30" ry="9"/><ellipse cx="300" cy="404" rx="44" ry="8"/>
  </g>
</g>

<!-- the legal tape, tied round the bundle and never untied -->
<path d="M232 128 Q 262 268 246 424" fill="none" stroke="#2c1310" stroke-width="24" opacity="0.4"/>
<path d="M232 128 Q 262 268 246 424" fill="none" stroke="url(#ev3-pet-tape)" stroke-width="19"/>
<path d="M228 132 Q 256 268 242 420" fill="none" stroke="#e2a49c" stroke-width="3.4" opacity="0.35"/>
<path d="M104 244 Q 320 216 540 250" fill="none" stroke="#2c1310" stroke-width="24" opacity="0.4"/>
<path d="M104 244 Q 320 216 540 250" fill="none" stroke="url(#ev3-pet-tape)" stroke-width="19"/>
<path d="M108 238 Q 320 210 538 244" fill="none" stroke="#e2a49c" stroke-width="3.4" opacity="0.3"/>
<!-- the knot, and its two dead ends -->
<ellipse cx="246" cy="236" rx="30" ry="24" fill="#6b332f"/>
<path d="M222 224 q 26 -16 50 2 q -22 22 -50 -2 z" fill="url(#ev3-pet-tape)"/>
<path d="M226 246 q 24 18 48 -2 q -22 -20 -48 2 z" fill="#8e4a44"/>
<path d="M228 230 q 22 -12 40 2" fill="none" stroke="#e2a49c" stroke-width="2.4" opacity="0.4"/>
<path d="M258 254 q 34 32 30 74 l -22 -6 q 2 -34 -22 -60 z" fill="url(#ev3-pet-tape)"/>
<path d="M232 256 q -32 30 -34 70 l 22 -4 q 0 -34 26 -58 z" fill="#7c3b36"/>
<!-- the wax seal, unbroken, dulled with dust -->
<ellipse cx="248" cy="238" rx="26" ry="24" fill="url(#ev3-pet-wax)"/>
<ellipse cx="248" cy="238" rx="26" ry="24" fill="none" stroke="#43120d" stroke-width="2"/>
<ellipse cx="248" cy="238" rx="17" ry="15" fill="none" stroke="#5f1d15" stroke-width="2.4" opacity="0.8"/>
<g stroke="#5f1d15" stroke-width="2.6" opacity="0.7">
  <path d="M240 232 l 16 12"/><path d="M256 232 l -16 12"/><path d="M248 226 v 24"/>
</g>
<ellipse cx="240" cy="230" rx="8" ry="5" fill="#e08a72" opacity="0.35"/>
<ellipse cx="248" cy="238" rx="26" ry="24" fill="#b3a67f" opacity="0.14"/>

<rect width="640" height="520" fill="url(#ev3-pet-vig)"/>
`,
  },

  /* The strip from under the blotter: memo-pad paper furred at the folds,
     four figures in red pencil with two rules under them. Marks, never words. */
  c3_combo: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-cmb-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2e2820"/><stop offset="0.55" stop-color="#171310"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev3-cmb-pool" cx="0.24" cy="0.08" r="0.84">
    <stop offset="0" stop-color="#ffe3a8" stop-opacity="0.28"/><stop offset="1" stop-color="#ffe3a8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-cmb-wood" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6d4e2d"/><stop offset="0.5" stop-color="#432f1b"/><stop offset="1" stop-color="#1e150b"/>
  </linearGradient>
  <linearGradient id="ev3-cmb-hide" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#4e3120"/><stop offset="0.45" stop-color="#321e12"/><stop offset="1" stop-color="#170c06"/>
  </linearGradient>
  <linearGradient id="ev3-cmb-back" x1="0" y1="0" x2="1" y2="0.7">
    <stop offset="0" stop-color="#8a5f38"/><stop offset="0.42" stop-color="#5a3b21"/><stop offset="1" stop-color="#2b1a0e"/>
  </linearGradient>
  <linearGradient id="ev3-cmb-paper" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#fbf3dc"/><stop offset="0.4" stop-color="#eee2bf"/>
    <stop offset="0.78" stop-color="#d2c39a"/><stop offset="1" stop-color="#a49470"/>
  </linearGradient>
  <linearGradient id="ev3-cmb-lead" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e0685a"/><stop offset="0.5" stop-color="#9c2c20"/><stop offset="1" stop-color="#571310"/>
  </linearGradient>
  <filter id="ev3-cmb-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-cmb-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-cmb-bg)"/>
<rect width="640" height="520" fill="url(#ev3-cmb-wood)" opacity="0.75"/>
<rect width="640" height="520" fill="url(#ev3-cmb-pool)"/>
<!-- the desk itself: quarter-sawn oak, waxed and ringed -->
<g fill="none" stroke="#241708" stroke-width="2.6" opacity="0.4">
  <path d="M0 62 q 200 -14 380 4 q 160 16 260 2"/><path d="M0 128 q 220 -10 400 8 q 140 14 240 0"/>
  <path d="M0 448 q 180 16 360 -4 q 160 -18 280 -2"/><path d="M0 496 q 200 12 380 -8 q 150 -16 260 0"/>
</g>
<g fill="none" stroke="#8b6537" stroke-width="1.1" opacity="0.16">
  <path d="M0 68 q 200 -14 380 4 q 160 16 260 2"/><path d="M0 454 q 180 16 360 -4 q 160 -18 280 -2"/>
</g>
<ellipse cx="96" cy="82" rx="54" ry="14" fill="none" stroke="#20150a" stroke-width="3" opacity="0.35"/>

<!-- the blotter, its near corner turned back -->
<path d="M-20 150 L470 118 L520 470 L-20 520 Z" fill="#000" opacity="0.5" filter="url(#ev3-cmb-soft)"/>
<path d="M-20 140 L462 108 L516 462 L-20 512 Z" fill="url(#ev3-cmb-hide)"/>
<path d="M-20 140 L462 108 L464 122 L-20 154 Z" fill="#6b432a" opacity="0.55"/>
<g fill="#7a5030" opacity="0.13">
  <ellipse cx="120" cy="220" rx="60" ry="26" transform="rotate(-8 120 220)"/>
  <ellipse cx="300" cy="330" rx="76" ry="30" transform="rotate(-8 300 330)"/>
  <ellipse cx="90" cy="400" rx="52" ry="22" transform="rotate(-8 90 400)"/>
</g>
<g fill="none" stroke="#0d0703" stroke-width="1.4" opacity="0.4">
  <path d="M20 176 q 90 22 176 4"/><path d="M40 268 q 120 26 220 2"/><path d="M10 372 q 110 24 210 -2"/>
</g>
<g fill="none" stroke="#8a5c36" stroke-width="1" opacity="0.12">
  <path d="M24 182 q 90 22 176 4"/><path d="M14 378 q 110 24 210 -2"/>
</g>
<!-- ink blots and a blotted crescent of red -->
<path d="M180 300 q 30 -22 54 -4 q 16 20 -8 34 q -34 12 -46 -10 z" fill="#0e0a12" opacity="0.5"/>
<path d="M244 246 q 22 -12 34 2 q 6 16 -14 20 q -22 2 -20 -22 z" fill="#5a1912" opacity="0.35"/>

<!-- the turned-back corner: hide underside, paler and unworn -->
<path d="M462 108 L636 168 L586 468 L516 462 Z" fill="url(#ev3-cmb-back)"/>
<path d="M462 108 L636 168 L634 182 L464 124 Z" fill="#b4834f" opacity="0.4"/>
<path d="M516 462 L586 468 L584 478 L514 472 Z" fill="#150b05" opacity="0.6"/>
<path d="M462 108 L516 462" fill="none" stroke="#1c0f07" stroke-width="7" opacity="0.55"/>
<path d="M468 112 L522 462" fill="none" stroke="#c39258" stroke-width="2" opacity="0.28"/>
<g fill="none" stroke="#2b1a0e" stroke-width="1.6" opacity="0.35">
  <path d="M506 152 q 40 16 78 26"/><path d="M512 232 q 42 14 82 22"/><path d="M520 328 q 40 12 78 18"/>
</g>

<!-- THE STRIP: torn off a memo pad, carried in a pocket, folded and unfolded -->
<g transform="rotate(-7 320 300)">
  <path d="M120 236 L472 210 L482 386 L128 400 Z" fill="#000" opacity="0.5" filter="url(#ev3-cmb-soft)"/>
  <path d="M112 226 q 60 -10 118 -8 q 62 2 122 -6 q 58 -8 112 -2 l 8 158 q -56 8 -114 4 q -62 -4 -122 4 q -58 8 -116 2 z" fill="url(#ev3-cmb-paper)"/>
  <path d="M112 226 q 60 -10 118 -8 q 62 2 122 -6 q 58 -8 112 -2 l 2 12 q -54 -6 -112 2 q -60 8 -122 6 q -58 -2 -118 8 z" fill="#ffffff" opacity="0.28"/>
  <!-- the pad's torn head: perforation nibs -->
  <g fill="#c9b98f" opacity="0.75">
    <path d="M126 224 l 10 -8 l 8 8 z"/><path d="M166 221 l 10 -8 l 8 8 z"/><path d="M206 219 l 10 -8 l 8 8 z"/>
    <path d="M246 218 l 10 -8 l 8 8 z"/><path d="M286 216 l 10 -8 l 8 8 z"/><path d="M326 214 l 10 -8 l 8 8 z"/>
    <path d="M366 213 l 10 -8 l 8 8 z"/><path d="M406 212 l 10 -8 l 8 8 z"/>
  </g>
  <!-- two fold lines, gone furry from being carried -->
  <path d="M226 220 L232 396" fill="none" stroke="#b9a67c" stroke-width="4" opacity="0.55"/>
  <path d="M228 220 L234 396" fill="none" stroke="#fdf8e6" stroke-width="1.6" opacity="0.5"/>
  <path d="M348 214 L356 390" fill="none" stroke="#b9a67c" stroke-width="4" opacity="0.5"/>
  <path d="M350 214 L358 390" fill="none" stroke="#fdf8e6" stroke-width="1.6" opacity="0.45"/>
  <!-- the pad's faint printed rule -->
  <path d="M124 268 q 170 -12 340 -8" fill="none" stroke="#9ba07f" stroke-width="1.4" opacity="0.4"/>
  <path d="M126 348 q 170 -10 340 -6" fill="none" stroke="#9ba07f" stroke-width="1.4" opacity="0.34"/>

  <!-- FOUR FIGURES in red pencil: pressure, grain, and a doubled stroke -->
  <g fill="none" stroke="#9c2c20" stroke-width="9" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
    <path d="M148 288 q 30 -18 40 6 q 8 24 -18 28 q -22 2 -18 -16 M142 302 l 48 -12"/>
    <path d="M222 278 q 36 -2 30 22 q -6 20 -30 16 q -20 -6 -12 -24 M230 296 q 12 24 -2 44"/>
    <path d="M298 284 q 36 -2 34 22 q -2 24 -30 20 q -24 -6 -18 -26 M318 308 q 16 8 26 -4"/>
    <path d="M370 278 q 26 -14 46 6 M394 272 q -8 28 -2 54 M378 322 l 30 -8"/>
  </g>
  <g fill="none" stroke="#d1584a" stroke-width="3" stroke-linecap="round" opacity="0.5">
    <path d="M150 286 q 26 -14 34 4"/><path d="M228 278 q 30 2 24 20"/>
    <path d="M300 280 q 32 -4 32 20"/><path d="M372 276 q 22 -12 40 6"/>
  </g>
  <g fill="none" stroke="#5c130e" stroke-width="2.4" stroke-linecap="round" opacity="0.5">
    <path d="M156 318 q 16 8 28 -4"/><path d="M232 324 q 14 6 26 -4"/>
    <path d="M290 316 q 18 12 34 0"/><path d="M386 320 q 10 4 18 0"/>
  </g>
  <!-- underscored twice, the second rule bearing down harder -->
  <path d="M144 348 q 140 -8 288 -6" fill="none" stroke="#9c2c20" stroke-width="6" stroke-linecap="round" opacity="0.85"/>
  <path d="M146 344 q 140 -8 284 -6" fill="none" stroke="#d1584a" stroke-width="1.8" opacity="0.5"/>
  <path d="M150 364 q 136 -8 278 -6" fill="none" stroke="#8b2419" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
  <path d="M152 360 q 136 -8 274 -6" fill="none" stroke="#c14a3c" stroke-width="2" opacity="0.45"/>
  <!-- the pencil's grain: waxy skips where the paper's tooth won -->
  <g fill="#efe4c4" opacity="0.4">
    <ellipse cx="212" cy="347" rx="9" ry="2"/><ellipse cx="300" cy="345" rx="7" ry="1.8"/>
    <ellipse cx="366" cy="344" rx="10" ry="2"/><ellipse cx="256" cy="363" rx="8" ry="2"/><ellipse cx="344" cy="362" rx="9" ry="2"/>
  </g>
  <!-- pocket wear: a grey bloom along the lower edge, and a thumb crease -->
  <path d="M120 374 q 178 -12 356 -6 l 4 20 q -178 -6 -356 6 z" fill="#8d8262" opacity="0.2"/>
  <path d="M164 232 q 14 74 -4 158" fill="none" stroke="#b2a37b" stroke-width="2" opacity="0.35"/>
  <path d="M440 218 q -10 80 6 164" fill="none" stroke="#b2a37b" stroke-width="2" opacity="0.28"/>
  <path d="M474 220 l 12 12 l -6 156 l -10 -8 z" fill="#9b8b66" opacity="0.5"/>
</g>

<!-- the red pencil that wrote it, stub-short, lying where it was dropped -->
<g transform="rotate(15 470 452)">
  <rect x="352" y="450" width="176" height="16" rx="3" fill="#000" opacity="0.45" filter="url(#ev3-cmb-soft)"/>
  <rect x="348" y="444" width="176" height="16" rx="3" fill="url(#ev3-cmb-lead)"/>
  <rect x="348" y="444" width="176" height="4.5" fill="#f0a094" opacity="0.55"/>
  <rect x="348" y="455" width="176" height="5" fill="#4c110c" opacity="0.6"/>
  <path d="M524 444 l 30 8 l -30 8 z" fill="#e6cfa8"/>
  <path d="M546 450 l 10 2 l -10 2 z" fill="#8b2419"/>
  <rect x="336" y="444" width="12" height="16" fill="#96999a"/>
</g>

<!-- dust, and the lamp's edge falling off the desk -->
<g fill="#f3e6c4" opacity="0.13">
  <circle cx="98" cy="126" r="2"/><circle cx="556" cy="96" r="1.6"/><circle cx="600" cy="330" r="2.2"/><circle cx="60" cy="452" r="1.8"/>
</g>
<rect width="640" height="520" fill="url(#ev3-cmb-vig)"/>
`,
  },

  /* Inside the transcription cabinet: the master disc-cutting key on its brass
     tag, and the engineer's spare acetate sleeve with his initials in the corner. */
  c3_cabinetkey: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-cab-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2d2c"/><stop offset="0.55" stop-color="#141615"/><stop offset="1" stop-color="#070808"/>
  </linearGradient>
  <radialGradient id="ev3-cab-pool" cx="0.2" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffe3a8" stop-opacity="0.24"/><stop offset="1" stop-color="#ffe3a8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-cab-steel" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#22241f"/><stop offset="0.16" stop-color="#7d8177"/>
    <stop offset="0.38" stop-color="#42453d"/><stop offset="0.62" stop-color="#8b8f84"/>
    <stop offset="0.84" stop-color="#3a3d36"/><stop offset="1" stop-color="#16180f"/>
  </linearGradient>
  <linearGradient id="ev3-cab-inner" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a5b50"/><stop offset="0.5" stop-color="#31322a"/><stop offset="1" stop-color="#131410"/>
  </linearGradient>
  <linearGradient id="ev3-cab-brass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f7e2a6"/><stop offset="0.32" stop-color="#cda854"/>
    <stop offset="0.68" stop-color="#8a6c2c"/><stop offset="1" stop-color="#463314"/>
  </linearGradient>
  <linearGradient id="ev3-cab-tag" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#e6d9b4"/><stop offset="0.6" stop-color="#b6a682"/><stop offset="1" stop-color="#7d7053"/>
  </linearGradient>
  <linearGradient id="ev3-cab-hook" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1d2022"/><stop offset="0.34" stop-color="#b6bcc1"/>
    <stop offset="0.7" stop-color="#5a6065"/><stop offset="1" stop-color="#14171a"/>
  </linearGradient>
  <linearGradient id="ev3-cab-sleeve" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#c6b489"/><stop offset="0.45" stop-color="#a08e66"/>
    <stop offset="0.82" stop-color="#6f6144"/><stop offset="1" stop-color="#463c28"/>
  </linearGradient>
  <radialGradient id="ev3-cab-dial" cx="0.34" cy="0.28" r="0.85">
    <stop offset="0" stop-color="#9ea299"/><stop offset="0.42" stop-color="#585c53"/>
    <stop offset="0.82" stop-color="#2a2c26"/><stop offset="1" stop-color="#43463e"/>
  </radialGradient>
  <filter id="ev3-cab-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-cab-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-cab-bg)"/>
<rect width="640" height="520" fill="url(#ev3-cab-pool)"/>

<!-- the cabinet's inside: a shallow steel box, painted grey, shelf-lipped -->
<rect x="72" y="44" width="496" height="440" rx="6" fill="url(#ev3-cab-inner)"/>
<rect x="72" y="44" width="496" height="440" rx="6" fill="none" stroke="#0a0b08" stroke-width="6"/>
<path d="M72 44 L568 44 L540 84 L100 84 Z" fill="#0a0b08" opacity="0.65"/>
<path d="M72 484 L568 484 L540 444 L100 444 Z" fill="#000" opacity="0.35"/>
<path d="M72 44 L100 84 L100 444 L72 484 Z" fill="#000" opacity="0.4"/>
<rect x="100" y="84" width="440" height="360" fill="#282a21"/>
<g stroke="#6f7367" stroke-width="1" opacity="0.3">
  <path d="M100 152 h440"/><path d="M100 236 h440"/><path d="M100 320 h440"/><path d="M100 402 h440"/>
</g>
<!-- back-panel seams and the rivets holding them -->
<path d="M320 84 v360" stroke="#0c0d0a" stroke-width="3" opacity="0.6"/>
<path d="M323 84 v360" stroke="#5b5f54" stroke-width="1" opacity="0.18"/>
<g fill="#787c72" opacity="0.5">
  <circle cx="114" cy="98" r="3.4"/><circle cx="526" cy="98" r="3.4"/><circle cx="114" cy="430" r="3.4"/><circle cx="526" cy="430" r="3.4"/>
  <circle cx="320" cy="98" r="3"/><circle cx="320" cy="430" r="3"/>
</g>

<!-- the door, swung open at the right, dial outward -->
<path d="M540 40 L640 6 L640 512 L540 488 Z" fill="#000" opacity="0.5" filter="url(#ev3-cab-soft)"/>
<path d="M534 40 L636 4 L636 508 L534 484 Z" fill="url(#ev3-cab-steel)"/>
<path d="M534 40 L636 4 L636 20 L534 54 Z" fill="#c8cdc2" opacity="0.3"/>
<path d="M534 484 L636 508 L636 494 L534 470 Z" fill="#000" opacity="0.5"/>
<path d="M548 78 L622 52 L622 462 L548 448 Z" fill="none" stroke="#1c1e19" stroke-width="4"/>
<circle cx="586" cy="262" r="42" fill="#111310"/>
<circle cx="584" cy="258" r="38" fill="url(#ev3-cab-dial)"/>
<circle cx="584" cy="258" r="38" fill="none" stroke="#82877c" stroke-width="2"/>
<circle cx="584" cy="258" r="27" fill="#2a2c26"/>
<circle cx="584" cy="258" r="27" fill="none" stroke="#9aa094" stroke-width="1.4" opacity="0.7"/>
<g stroke="#b6bcae" stroke-width="2" opacity="0.55">
  <path d="M584 224 v 8"/><path d="M618 258 h -8"/><path d="M584 292 v -8"/><path d="M550 258 h 8"/>
</g>
<g stroke="#8d9386" stroke-width="1.2" opacity="0.4">
  <path d="M608 234 l -6 6"/><path d="M608 282 l -6 -6"/><path d="M560 282 l 6 -6"/><path d="M560 234 l 6 6"/>
</g>
<path d="M584 258 L584 232" stroke="#e6ebe0" stroke-width="3" stroke-linecap="round"/>
<circle cx="584" cy="258" r="6" fill="#161812"/>
<path d="M556 232 q 26 -20 56 -12" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.16"/>
<rect x="556" y="352" width="56" height="18" rx="4" fill="#5c6157"/>
<rect x="558" y="354" width="52" height="5" rx="2" fill="#a8ada1" opacity="0.5"/>

<!-- the hook, and the master key on its brass tag -->
<rect x="228" y="104" width="26" height="12" rx="3" fill="#3d403a"/>
<path d="M241 116 q 0 26 -16 30" fill="none" stroke="url(#ev3-cab-hook)" stroke-width="9" stroke-linecap="round"/>
<ellipse cx="222" cy="164" rx="20" ry="20" fill="none" stroke="url(#ev3-cab-brass)" stroke-width="9"/>
<ellipse cx="222" cy="164" rx="20" ry="20" fill="none" stroke="#4b3616" stroke-width="1.4" opacity="0.6"/>
<path d="M208 150 q 14 -10 28 -2" fill="none" stroke="#ffeec0" stroke-width="3" opacity="0.5"/>
<rect x="214" y="182" width="16" height="118" fill="url(#ev3-cab-brass)"/>
<rect x="215" y="185" width="4.4" height="112" fill="#ffeec0" opacity="0.5"/>
<rect x="214" y="252" width="34" height="13" fill="url(#ev3-cab-brass)"/>
<rect x="214" y="274" width="26" height="12" fill="url(#ev3-cab-brass)"/>
<rect x="214" y="292" width="30" height="12" fill="url(#ev3-cab-brass)"/>
<path d="M214 300 l 16 0 l 0 12 l -8 8 l -8 -8 z" fill="#9e7c33"/>
<g fill="#3b2c12" opacity="0.4">
  <rect x="216" y="212" width="12" height="4"/><rect x="216" y="236" width="12" height="4"/>
</g>
<!-- the fibre tag wired to the bow, stamped and inked, hanging askew -->
<path d="M238 176 q 34 12 40 40" fill="none" stroke="#9aa094" stroke-width="2.4"/>
<g transform="rotate(9 316 246)">
  <rect x="266" y="212" width="112" height="70" rx="6" fill="#000" opacity="0.45" filter="url(#ev3-cab-soft)"/>
  <rect x="262" y="206" width="112" height="70" rx="6" fill="url(#ev3-cab-tag)"/>
  <rect x="262" y="206" width="112" height="5" rx="2" fill="#fbf3dc" opacity="0.5"/>
  <circle cx="278" cy="222" r="8" fill="#8f8262"/>
  <circle cx="278" cy="222" r="5" fill="#191a15"/>
  <circle cx="278" cy="222" r="8" fill="none" stroke="#d8cba6" stroke-width="1.4"/>
  <g stroke="#4c4331" stroke-width="3" opacity="0.75" stroke-linecap="round">
    <path d="M296 226 h 62" stroke-dasharray="14 5 22 6 12"/>
    <path d="M274 246 h 84" stroke-dasharray="18 5 26 6 20"/>
    <path d="M274 262 h 62" stroke-dasharray="12 5 18 6 16"/>
  </g>
  <path d="M266 210 q 52 -6 104 2" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.2"/>
  <path d="M366 268 l 8 8 l -12 0 z" fill="#7a6e51"/>
</g>

<!-- the spare acetate sleeve, standing on the cabinet floor, leaning -->
<g transform="rotate(-4 210 380)">
  <path d="M108 244 L316 244 L322 452 L104 452 Z" fill="#000" opacity="0.45" filter="url(#ev3-cab-soft)"/>
  <rect x="98" y="232" width="212" height="212" rx="3" fill="url(#ev3-cab-sleeve)"/>
  <rect x="98" y="232" width="212" height="6" rx="2" fill="#e8d9ac" opacity="0.4"/>
  <rect x="98" y="232" width="8" height="212" fill="#4c4230" opacity="0.5"/>
  <circle cx="204" cy="336" r="66" fill="none" stroke="#5f5439" stroke-width="2.4" opacity="0.75"/>
  <circle cx="204" cy="336" r="66" fill="#2a2620" opacity="0.28"/>
  <circle cx="204" cy="336" r="14" fill="#191713"/>
  <circle cx="204" cy="336" r="14" fill="none" stroke="#6e6244" stroke-width="2"/>
  <path d="M148 300 q 56 -34 112 -6" fill="none" stroke="#ded0a6" stroke-width="4" opacity="0.22"/>
  <path d="M110 244 q 96 -6 190 2" fill="none" stroke="#efe2b8" stroke-width="2" opacity="0.28"/>
  <!-- the engineer's initials, inked small in the corner: two marks, no more -->
  <g fill="none" stroke="#1c2333" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M112 414 q 12 -30 24 -8 q 7 16 -8 18 M108 400 l 40 -8"/>
    <path d="M132 416 q 6 -30 20 -20 q 9 7 -3 16 q -10 7 -17 -3"/>
  </g>
  <path d="M110 388 q 30 -6 54 2" fill="none" stroke="#1c2333" stroke-width="1.4" opacity="0.3"/>
  <!-- dust on the sleeve, and where a second hand wiped it away -->
  <path d="M100 234 q 106 -4 208 4 l 0 208 q -104 -6 -208 2 z" fill="#cdc3a4" opacity="0.1"/>
  <path d="M226 268 q 40 40 30 96 q -8 44 -46 62 q 46 -46 40 -94 q -6 -46 -24 -64 z" fill="#0d0b08" opacity="0.16"/>
  <g fill="none" stroke="#0f0d09" stroke-width="2.6" opacity="0.24">
    <path d="M238 296 q 22 22 18 52"/><path d="M252 302 q 20 22 16 50"/><path d="M266 310 q 16 20 12 44"/>
  </g>
</g>

<!-- floor of the cabinet: shadowed lip, dust, and one loose brass washer -->
<path d="M100 430 L540 430 L540 444 L100 444 Z" fill="#000" opacity="0.45"/>
<ellipse cx="424" cy="424" rx="46" ry="9" fill="#000" opacity="0.4"/>
<circle cx="428" cy="418" r="12" fill="none" stroke="url(#ev3-cab-brass)" stroke-width="5"/>
<g fill="#cdc3a4" opacity="0.12">
  <ellipse cx="180" cy="436" rx="60" ry="7"/><ellipse cx="466" cy="434" rx="46" ry="6"/>
</g>
<g fill="#f3e6c4" opacity="0.13">
  <circle cx="404" cy="140" r="2"/><circle cx="150" cy="120" r="1.6"/><circle cx="480" cy="300" r="2.2"/>
</g>
<rect width="640" height="520" fill="url(#ev3-cab-vig)"/>
`,
  },

  /* The 1927 masters: sleeves on edge in the chest, thumb-notches worn grey,
     and one sleeve ruled into two columns of timings by a small level hand. */
  c3_masters: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev3-mas-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2823"/><stop offset="0.55" stop-color="#151412"/><stop offset="1" stop-color="#070707"/>
  </linearGradient>
  <radialGradient id="ev3-mas-pool" cx="0.24" cy="0.06" r="0.86">
    <stop offset="0" stop-color="#ffe3a8" stop-opacity="0.24"/><stop offset="1" stop-color="#ffe3a8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev3-mas-chest" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0" stop-color="#23241f"/><stop offset="0.2" stop-color="#6e7269"/>
    <stop offset="0.5" stop-color="#3b3e37"/><stop offset="0.8" stop-color="#797d73"/>
    <stop offset="1" stop-color="#181a15"/>
  </linearGradient>
  <linearGradient id="ev3-mas-kraft" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#8f7c53"/><stop offset="0.42" stop-color="#6d5c3c"/>
    <stop offset="0.8" stop-color="#453a26"/><stop offset="1" stop-color="#241d13"/>
  </linearGradient>
  <linearGradient id="ev3-mas-front" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#e2d1a4"/><stop offset="0.4" stop-color="#c6b183"/>
    <stop offset="0.78" stop-color="#94805a"/><stop offset="1" stop-color="#5d4e35"/>
  </linearGradient>
  <radialGradient id="ev3-mas-disc" cx="0.34" cy="0.26" r="0.86">
    <stop offset="0" stop-color="#443c33"/><stop offset="0.32" stop-color="#231f1b"/>
    <stop offset="0.72" stop-color="#12100e"/><stop offset="1" stop-color="#0a0908"/>
  </radialGradient>
  <filter id="ev3-mas-soft" x="-40%" y="-60%" width="180%" height="240%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev3-mas-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev3-mas-bg)"/>
<rect width="640" height="520" fill="url(#ev3-mas-pool)"/>

<!-- looking down into the chest: banded steel rim, then dark -->
<rect x="16" y="26" width="608" height="470" rx="8" fill="url(#ev3-mas-chest)"/>
<rect x="16" y="26" width="608" height="470" rx="8" fill="none" stroke="#0a0b08" stroke-width="5"/>
<rect x="16" y="26" width="608" height="14" rx="6" fill="#b9beb2" opacity="0.28"/>
<rect x="44" y="58" width="552" height="424" rx="4" fill="#0e0e0c"/>
<path d="M44 58 L596 58 L568 96 L72 96 Z" fill="#000" opacity="0.6"/>
<path d="M44 58 L72 96 L72 482 L44 482 Z" fill="#000" opacity="0.45"/>
<path d="M596 58 L568 96 L568 482 L596 482 Z" fill="#000" opacity="0.45"/>
<g fill="#8f948a" opacity="0.45">
  <circle cx="32" cy="46" r="4"/><circle cx="608" cy="46" r="4"/><circle cx="32" cy="476" r="4"/><circle cx="608" cy="476" r="4"/>
</g>
<rect x="140" y="26" width="26" height="470" fill="#5f645b" opacity="0.35"/>
<rect x="140" y="26" width="7" height="470" fill="#b9beb2" opacity="0.2"/>
<rect x="476" y="26" width="26" height="470" fill="#5f645b" opacity="0.35"/>
<rect x="476" y="26" width="7" height="470" fill="#b9beb2" opacity="0.2"/>

<!-- sleeve after sleeve, filed on edge, ranked back into the dark -->
<g>
  <path d="M72 106 L560 96 L560 330 L72 340 Z" fill="#151310"/>
  <g fill="url(#ev3-mas-kraft)">
    <path d="M80 114 L104 113 L104 330 L80 332 Z"/>
    <path d="M110 113 L138 112 L138 329 L110 330 Z"/>
    <path d="M144 112 L166 111 L166 328 L144 329 Z"/>
    <path d="M172 111 L202 110 L202 327 L172 328 Z"/>
    <path d="M208 110 L232 109 L232 326 L208 327 Z"/>
    <path d="M238 109 L268 108 L268 325 L238 326 Z"/>
    <path d="M274 108 L296 107 L296 324 L274 325 Z"/>
    <path d="M302 107 L332 106 L332 323 L302 324 Z"/>
    <path d="M338 106 L362 105 L362 322 L338 323 Z"/>
    <path d="M368 105 L398 104 L398 321 L368 322 Z"/>
    <path d="M404 104 L426 103 L426 320 L404 321 Z"/>
    <path d="M432 103 L462 102 L462 319 L432 320 Z"/>
    <path d="M468 102 L492 101 L492 318 L468 319 Z"/>
    <path d="M498 101 L528 100 L528 317 L498 318 Z"/>
  </g>
  <g fill="#0b0a08" opacity="0.6">
    <path d="M104 113 l 6 0 l 0 217 l -6 0 z"/><path d="M138 112 l 6 0 l 0 217 l -6 0 z"/>
    <path d="M166 111 l 6 0 l 0 217 l -6 0 z"/><path d="M202 110 l 6 0 l 0 217 l -6 0 z"/>
    <path d="M232 109 l 6 0 l 0 217 l -6 0 z"/><path d="M268 108 l 6 0 l 0 217 l -6 0 z"/>
    <path d="M296 107 l 6 0 l 0 217 l -6 0 z"/><path d="M332 106 l 6 0 l 0 217 l -6 0 z"/>
    <path d="M362 105 l 6 0 l 0 217 l -6 0 z"/><path d="M398 104 l 6 0 l 0 217 l -6 0 z"/>
    <path d="M426 103 l 6 0 l 0 217 l -6 0 z"/><path d="M462 102 l 6 0 l 0 217 l -6 0 z"/>
    <path d="M492 101 l 6 0 l 0 217 l -6 0 z"/>
  </g>
  <!-- the thumb-notch bitten out of every sleeve mouth -->
  <g fill="#100e0b">
    <ellipse cx="92" cy="115" rx="10" ry="15"/><ellipse cx="124" cy="114" rx="12" ry="15"/>
    <ellipse cx="155" cy="113" rx="9" ry="15"/><ellipse cx="187" cy="112" rx="13" ry="15"/>
    <ellipse cx="220" cy="111" rx="10" ry="15"/><ellipse cx="253" cy="110" rx="13" ry="15"/>
    <ellipse cx="285" cy="109" rx="9" ry="15"/><ellipse cx="317" cy="108" rx="13" ry="15"/>
    <ellipse cx="350" cy="107" rx="10" ry="15"/><ellipse cx="383" cy="106" rx="13" ry="15"/>
    <ellipse cx="415" cy="105" rx="9" ry="15"/><ellipse cx="447" cy="104" rx="13" ry="15"/>
    <ellipse cx="480" cy="103" rx="10" ry="15"/><ellipse cx="513" cy="102" rx="13" ry="15"/>
  </g>
  <!-- and the grey the thumbs have rubbed into the kraft below it -->
  <g fill="#cfc3a2" opacity="0.16">
    <ellipse cx="106" cy="150" rx="28" ry="26"/><ellipse cx="188" cy="148" rx="30" ry="26"/>
    <ellipse cx="270" cy="145" rx="28" ry="26"/><ellipse cx="352" cy="142" rx="30" ry="26"/>
    <ellipse cx="434" cy="139" rx="28" ry="26"/><ellipse cx="506" cy="137" rx="24" ry="26"/>
  </g>
  <path d="M72 210 L560 200 L560 340 L72 348 Z" fill="#000" opacity="0.45"/>
</g>

<!-- ONE SLEEVE DRAWN FORWARD: the annotated one, its disc standing proud of the mouth -->
<g transform="rotate(-3 310 340)">
  <path d="M70 300 L586 272 L598 518 L82 534 Z" fill="#000" opacity="0.55" filter="url(#ev3-mas-soft)"/>
  <circle cx="322" cy="272" r="166" fill="url(#ev3-mas-disc)"/>
  <circle cx="322" cy="272" r="166" fill="none" stroke="#090807" stroke-width="3"/>
  <g fill="none" stroke="#6e6558" stroke-width="1" opacity="0.26">
    <circle cx="322" cy="272" r="156"/><circle cx="322" cy="272" r="138"/><circle cx="322" cy="272" r="120"/>
  </g>
  <path d="M200 168 q 76 -62 178 -36 q -100 20 -158 96 q -58 74 -36 168 q -66 -114 16 -228 z" fill="#e8e0cc" opacity="0.1"/>
  <path d="M218 178 q 66 -46 144 -32" fill="none" stroke="#f0e8d2" stroke-width="5" opacity="0.14"/>
  <path d="M62 292 L578 264 L590 512 L74 528 Z" fill="url(#ev3-mas-front)"/>
  <path d="M62 292 L578 264 L578 276 L62 304 Z" fill="#fbf3dc" opacity="0.3"/>
  <path d="M74 528 L590 512 L588 522 L72 538 Z" fill="#2c2417" opacity="0.6"/>
  <path d="M276 284 q 48 -6 88 -4 q -6 40 -44 42 q -38 2 -44 -38 z" fill="#0c0b08" opacity="0.55"/>
  <path d="M282 288 q 42 -5 78 -3 q -6 30 -38 32 q -34 0 -40 -29 z" fill="#8a7754" opacity="0.45"/>
  <g fill="#8a7448" opacity="0.26">
    <ellipse cx="150" cy="380" rx="30" ry="20" transform="rotate(-12 150 380)"/>
    <ellipse cx="522" cy="430" rx="24" ry="15" transform="rotate(-12 522 430)"/>
    <ellipse cx="206" cy="486" rx="34" ry="13" transform="rotate(-5 206 486)"/>
  </g>
  <path d="M62 452 q 262 -22 528 -14 l 2 26 q -262 -10 -528 16 z" fill="#8d8262" opacity="0.2"/>
  <path d="M70 300 q 8 122 4 226" fill="none" stroke="#7a6a48" stroke-width="3" opacity="0.4"/>
  <path d="M568 268 q -6 122 12 240" fill="none" stroke="#7a6a48" stroke-width="2.4" opacity="0.3"/>
  <!-- THE ANNOTATION: the margin ruled into two columns of timings, in pencil -->
  <path d="M400 300 L410 508" fill="none" stroke="#3f4552" stroke-width="2" opacity="0.75"/>
  <path d="M472 296 L482 504" fill="none" stroke="#3f4552" stroke-width="1.6" opacity="0.6"/>
  <path d="M398 318 q 72 -5 84 -5" fill="none" stroke="#3f4552" stroke-width="1.6" opacity="0.55"/>
  <g stroke="#343b47" stroke-width="2.8" opacity="0.85" stroke-linecap="round">
    <path d="M414 344 h 52" stroke-dasharray="12 5 8 5 18"/>
    <path d="M415 374 h 52" stroke-dasharray="16 5 10 5 12"/>
    <path d="M416 404 h 52" stroke-dasharray="10 5 16 5 12"/>
    <path d="M417 434 h 52" stroke-dasharray="18 5 8 5 14"/>
    <path d="M418 464 h 52" stroke-dasharray="12 5 12 5 14"/>
    <path d="M419 494 h 52" stroke-dasharray="14 5 10 5 16"/>
  </g>
  <g stroke="#343b47" stroke-width="2.8" opacity="0.85" stroke-linecap="round">
    <path d="M488 342 h 42" stroke-dasharray="12 5 8 5 10"/>
    <path d="M489 372 h 42" stroke-dasharray="10 5 12 5 8"/>
    <path d="M490 402 h 42" stroke-dasharray="14 5 8 5 8"/>
    <path d="M491 432 h 40" stroke-dasharray="10 5 10 5 8"/>
  </g>
  <path d="M486 456 q 22 8 42 0" fill="none" stroke="#8d2a1c" stroke-width="3.6" opacity="0.7"/>
  <g fill="none" stroke="#343b47" stroke-width="2" opacity="0.45">
    <path d="M108 340 q 30 -10 50 2"/><path d="M108 360 q 38 -8 64 4"/><path d="M108 380 q 26 -8 44 2"/>
  </g>
  <ellipse cx="430" cy="404" rx="52" ry="126" fill="#ffffff" opacity="0.05"/>
</g>

<!-- dust risen off the sleeves, caught in the lamp -->
<g fill="#f3e6c4" opacity="0.14">
  <circle cx="120" cy="92" r="2.2"/><circle cx="560" cy="380" r="2.4"/>
</g>
<rect width="640" height="520" fill="url(#ev3-mas-vig)"/>
`,
  },
};
