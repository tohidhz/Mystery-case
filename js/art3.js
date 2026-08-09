/* Scene plates for CASE No. 003 — Dead Air, Radio Station WQXT, 1947.
   Engineered interiors: cork acoustic tile, rack panels, dials, jack fields,
   cable runs, and the warm orange of heater filaments behind glass.
   Language-neutral: no text anywhere in the art. */
window.CASE_ART = window.CASE_ART || {};
window.CASE_ART.deadair = {

  studioA: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_mic: { x: 35, y: 39 },
      h_script: { x: 50, y: 66 },
      h_cup: { x: 61, y: 69 },
    },
    svg: `
<defs>
  <linearGradient id="da-studio-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3b2f22"/><stop offset="1" stop-color="#191309"/>
  </linearGradient>
  <linearGradient id="da-studio-cork" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#54422d"/><stop offset="0.5" stop-color="#3c2f20"/><stop offset="1" stop-color="#251c12"/>
  </linearGradient>
  <pattern id="da-studio-corkpat" x="6" y="10" width="90" height="74" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="84" height="68" fill="url(#da-studio-cork)"/>
    <path d="M0 0 L84 0 L84 3.5 L3.5 3.5 L3.5 68 L0 68 Z" fill="#7a6242" opacity="0.45"/>
    <path d="M84 0 L84 68 L0 68 L0 64.5 L80.5 64.5 L80.5 0 Z" fill="#0f0b06" opacity="0.6"/>
    <g fill="#635036" opacity="0.3"><ellipse cx="18" cy="13" rx="6" ry="3.2"/><ellipse cx="53" cy="29" rx="7" ry="3.6"/><ellipse cx="29" cy="49" rx="5" ry="2.8"/><ellipse cx="68" cy="56" rx="6" ry="3"/></g>
    <g fill="#191207" opacity="0.42"><ellipse cx="37" cy="21" rx="5" ry="2.6"/><ellipse cx="66" cy="15" rx="4" ry="2.2"/><ellipse cx="21" cy="41" rx="5.5" ry="2.8"/><ellipse cx="57" cy="52" rx="4.5" ry="2.4"/><ellipse cx="12" cy="60" rx="4" ry="2.2"/></g>
  </pattern>
  <linearGradient id="da-studio-glass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#33424e"/><stop offset="0.45" stop-color="#1d2a35"/><stop offset="1" stop-color="#101922"/>
  </linearGradient>
  <linearGradient id="da-studio-table" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5c4931"/><stop offset="0.35" stop-color="#46371f"/><stop offset="1" stop-color="#2a2016"/>
  </linearGradient>
  <linearGradient id="da-studio-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2b2116"/><stop offset="0.4" stop-color="#1e170e"/><stop offset="1" stop-color="#120d07"/>
  </linearGradient>
  <linearGradient id="da-studio-chrome" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#241c11"/><stop offset="0.14" stop-color="#8e7442"/>
    <stop offset="0.3" stop-color="#cbab6a"/><stop offset="0.5" stop-color="#6a5530"/>
    <stop offset="0.74" stop-color="#3a2d1c"/><stop offset="0.88" stop-color="#7e6739"/>
    <stop offset="1" stop-color="#1d1710"/>
  </linearGradient>
  <linearGradient id="da-studio-bake" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#191308"/><stop offset="0.22" stop-color="#4a3a24"/>
    <stop offset="0.42" stop-color="#2c2214"/><stop offset="0.72" stop-color="#1c1509"/>
    <stop offset="1" stop-color="#100c05"/>
  </linearGradient>
  <linearGradient id="da-studio-brass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a3617"/><stop offset="0.28" stop-color="#c19a4e"/>
    <stop offset="0.55" stop-color="#7e6229"/><stop offset="1" stop-color="#3a2b12"/>
  </linearGradient>
  <linearGradient id="da-studio-enamel" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#8d7345"/><stop offset="0.4" stop-color="#5b4830"/><stop offset="1" stop-color="#2e2416"/>
  </linearGradient>
  <radialGradient id="da-studio-dial" cx="0.66" cy="0.3" r="0.85">
    <stop offset="0" stop-color="#f4ecd4"/><stop offset="0.55" stop-color="#d6c69c"/><stop offset="1" stop-color="#8b7c58"/>
  </radialGradient>
  <radialGradient id="da-studio-glow" cx="0.35" cy="0.24" r="0.66">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.30"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-studio-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.46"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-studio-vig" cx="0.44" cy="0.46" r="0.8">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#da-studio-wall)"/>
<rect width="1000" height="620" fill="url(#da-studio-glow)"/>

<!-- cork acoustic tiling, wall left of the glass -->
<rect x="6" y="10" width="624" height="438" fill="url(#da-studio-corkpat)"/>
<g fill="url(#da-studio-cork)">
  <rect x="648" y="356" width="84" height="68"/><rect x="738" y="356" width="84" height="68"/><rect x="828" y="356" width="84" height="68"/><rect x="918" y="356" width="76" height="68"/>
</g>
<g fill="#0f0b06" opacity="0.55">
  <rect x="726" y="356" width="6" height="68"/><rect x="816" y="356" width="6" height="68"/><rect x="906" y="356" width="6" height="68"/><rect x="988" y="356" width="6" height="68"/>
  <rect x="648" y="418" width="346" height="6"/>
</g>
<g fill="#7a6242" opacity="0.3">
  <rect x="648" y="356" width="346" height="3"/>
</g>
<!-- pin-holes and thumbtack scars in the cork -->
<g fill="#14110d" opacity="0.5">
  <circle cx="40" cy="44" r="2.5"/><circle cx="130" cy="120" r="2.5"/><circle cx="220" cy="52" r="2.5"/><circle cx="310" cy="196" r="2.5"/>
  <circle cx="400" cy="60" r="2.5"/><circle cx="490" cy="130" r="2.5"/><circle cx="580" cy="200" r="2.5"/><circle cx="66" cy="270" r="2.5"/>
  <circle cx="160" cy="340" r="2.5"/><circle cx="250" cy="270" r="2.5"/><circle cx="342" cy="342" r="2.5"/><circle cx="432" cy="272" r="2.5"/>
  <circle cx="522" cy="344" r="2.5"/><circle cx="600" cy="278" r="2.5"/><circle cx="88" cy="410" r="2.5"/><circle cx="240" cy="414" r="2.5"/>
  <circle cx="480" cy="416" r="2.5"/><circle cx="700" cy="390" r="2.5"/><circle cx="880" cy="392" r="2.5"/>
</g>
<!-- distance falloff: the wall darkens away from the pendant -->
<path d="M630 0 L1000 0 L1000 460 L630 460 Z" fill="#0b0803" opacity="0.34"/>
<path d="M0 0 L120 0 L120 460 L0 460 Z" fill="#0b0803" opacity="0.26"/>
<path d="M0 300 L1000 300 L1000 460 L0 460 Z" fill="#0b0803" opacity="0.22"/>

<!-- conduit and a stapled cable run down to the skirting -->
<g>
  <rect x="612" y="10" width="9" height="434" fill="#2a2016"/>
  <rect x="612" y="10" width="3" height="434" fill="#57452e" opacity="0.7"/>
  <g fill="#4a3b28"><rect x="608" y="96" width="17" height="7" rx="2"/><rect x="608" y="212" width="17" height="7" rx="2"/><rect x="608" y="330" width="17" height="7" rx="2"/></g>
  <path d="M604 12 q-10 46 6 92 q14 44 -4 92 q-16 46 2 94 q16 46 0 146" fill="none" stroke="#1b140d" stroke-width="5"/>
  <path d="M604 12 q-10 46 6 92 q14 44 -4 92" fill="none" stroke="#41331f" stroke-width="1.6" opacity="0.6"/>
</g>

<!-- floor: boards, skirting, and the pendant's pool of light -->
<rect x="0" y="448" width="1000" height="172" fill="url(#da-studio-floor)"/>
<rect x="0" y="444" width="1000" height="8" fill="#3d2f1e"/>
<rect x="0" y="444" width="1000" height="3" fill="#6a5433" opacity="0.6"/>
<rect x="0" y="452" width="1000" height="5" fill="#0d0904" opacity="0.7"/>
<g stroke="#241b12" stroke-width="2.5">
  <line x1="0" y1="486" x2="1000" y2="486"/><line x1="0" y1="528" x2="1000" y2="528"/><line x1="0" y1="578" x2="1000" y2="578"/>
</g>
<g stroke="#4a3b28" stroke-width="1" opacity="0.4">
  <line x1="0" y1="483" x2="1000" y2="483"/><line x1="0" y1="525" x2="1000" y2="525"/><line x1="0" y1="575" x2="1000" y2="575"/>
</g>
<g stroke="#1b140d" stroke-width="2" opacity="0.7">
  <line x1="188" y1="452" x2="188" y2="486"/><line x1="452" y1="486" x2="452" y2="528"/><line x1="742" y1="452" x2="742" y2="486"/><line x1="316" y1="528" x2="316" y2="578"/><line x1="866" y1="528" x2="866" y2="578"/>
</g>
<ellipse cx="360" cy="546" rx="340" ry="92" fill="#d9a441" opacity="0.06"/>
<ellipse cx="360" cy="542" rx="256" ry="70" fill="#d9a441" opacity="0.05"/>
<ellipse cx="360" cy="536" rx="168" ry="46" fill="#ffd98a" opacity="0.045"/>
<!-- cable stapled along the skirting -->
<g>
  <path d="M0 470 q120 8 244 2 q140 -6 268 6 q150 10 300 -4 q100 -8 188 4" fill="none" stroke="#14110d" stroke-width="6"/>
  <path d="M0 468 q120 8 244 2 q140 -6 268 6" fill="none" stroke="#3b2f22" stroke-width="1.6" opacity="0.6"/>
  <g fill="#33271a"><rect x="126" y="462" width="6" height="14" rx="2"/><rect x="404" y="466" width="6" height="14" rx="2"/><rect x="756" y="462" width="6" height="14" rx="2"/></g>
  <rect x="836" y="452" width="30" height="26" rx="3" fill="#2a2016"/>
  <rect x="840" y="456" width="22" height="18" rx="2" fill="#14110d"/>
  <g fill="#6b5326"><circle cx="851" cy="461" r="2"/><circle cx="846" cy="470" r="2"/><circle cx="856" cy="470" r="2"/></g>
</g>

<!-- the studio clock he stared down every Friday: 12:03 -->
<g>
  <ellipse cx="156" cy="176" rx="62" ry="58" fill="#0d0904" opacity="0.4"/>
  <ellipse cx="150" cy="182" rx="56" ry="50" fill="#0d0904" opacity="0.3"/>
  <circle cx="168" cy="158" r="58" fill="#241b12"/>
  <circle cx="168" cy="158" r="55" fill="url(#da-studio-brass)"/>
  <circle cx="168" cy="158" r="52" fill="#6b5326"/>
  <circle cx="168" cy="158" r="52" fill="url(#da-studio-brass)" opacity="0.7"/>
  <path d="M168 103 a55 55 0 0 1 44 22 l-5 4 a49 49 0 0 0 -39 -20 z" fill="#e0c07a" opacity="0.55"/>
  <path d="M124 191 a55 55 0 0 0 44 22 l0 -6 a49 49 0 0 1 -39 -20 z" fill="#0f0b06" opacity="0.5"/>
  <circle cx="168" cy="158" r="46" fill="#1b140d"/>
  <circle cx="168" cy="158" r="45" fill="url(#da-studio-dial)"/>
  <circle cx="168" cy="158" r="45" fill="#14110d" opacity="0.14"/>
  <path d="M168 113 a45 45 0 0 0 -32 77 l-4 -4 a45 45 0 0 1 36 -73 z" fill="#0f0b06" opacity="0.14"/>
  <g stroke="#3b2f22" stroke-width="3" stroke-linecap="round">
    <line x1="168" y1="118" x2="168" y2="126"/><line x1="188" y1="123" x2="185" y2="131"/>
    <line x1="203" y1="138" x2="196" y2="142"/><line x1="208" y1="158" x2="200" y2="158"/>
    <line x1="203" y1="178" x2="196" y2="174"/><line x1="188" y1="193" x2="185" y2="185"/>
    <line x1="168" y1="198" x2="168" y2="190"/><line x1="148" y1="193" x2="151" y2="185"/>
    <line x1="133" y1="178" x2="140" y2="174"/><line x1="128" y1="158" x2="136" y2="158"/>
    <line x1="133" y1="138" x2="140" y2="142"/><line x1="148" y1="123" x2="151" y2="131"/>
  </g>
  <g opacity="0.28" stroke="#14110d" stroke-linecap="round">
    <line x1="165" y1="161" x2="168" y2="135" stroke-width="6"/><line x1="165" y1="161" x2="177" y2="125" stroke-width="4"/>
  </g>
  <line x1="168" y1="158" x2="171" y2="132" stroke="#241b12" stroke-width="6" stroke-linecap="round"/>
  <line x1="169" y1="152" x2="171" y2="134" stroke="#6b5326" stroke-width="1.6" stroke-linecap="round" opacity="0.7"/>
  <line x1="168" y1="158" x2="180" y2="122" stroke="#241b12" stroke-width="4" stroke-linecap="round"/>
  <line x1="168" y1="158" x2="196" y2="176" stroke="#a8352a" stroke-width="2" stroke-linecap="round"/>
  <circle cx="168" cy="158" r="4.5" fill="#a8352a"/>
  <circle cx="166.6" cy="156.6" r="1.4" fill="#ffd98a" opacity="0.6"/>
  <path d="M126 120 q42 -22 84 0 l0 6 q-42 -20 -84 0 z" fill="#f0e7ce" opacity="0.07"/>
  <path d="M196 130 q22 34 -6 66 l-8 -3 q26 -30 6 -62 z" fill="#f0e7ce" opacity="0.05"/>
</g>

<!-- the ON AIR lozenge, unlit -->
<g>
  <rect x="694" y="40" width="252" height="62" rx="31" fill="#0d0904" opacity="0.42"/>
  <rect x="686" y="30" width="248" height="62" rx="31" fill="url(#da-studio-bake)"/>
  <rect x="686" y="30" width="248" height="62" rx="31" fill="none" stroke="#0f0b06" stroke-width="2"/>
  <path d="M717 30 q-31 0 -31 31 l4 0 q0 -27 27 -27 z" fill="#8d7345" opacity="0.5"/>
  <rect x="694" y="38" width="232" height="46" rx="23" fill="#2c1a16"/>
  <rect x="702" y="44" width="216" height="34" rx="17" fill="#3a201c"/>
  <rect x="702" y="44" width="216" height="34" rx="17" fill="none" stroke="#1b0e0b" stroke-width="1.5"/>
  <path d="M712 48 q98 -12 196 0 l0 8 q-98 -12 -196 0 z" fill="#5d1f18" opacity="0.5"/>
  <path d="M706 56 q10 -10 26 -11 l0 22 q-16 -1 -26 -11 z" fill="#7a2a20" opacity="0.35"/>
  <g fill="#8e8e88" opacity="0.75">
    <circle cx="700" cy="42" r="3"/><circle cx="920" cy="42" r="3"/><circle cx="700" cy="80" r="3"/><circle cx="920" cy="80" r="3"/>
  </g>
  <g stroke="#3b2f22" stroke-width="1" opacity="0.9">
    <line x1="698" y1="42" x2="702" y2="42"/><line x1="918" y1="42" x2="922" y2="42"/><line x1="698" y1="80" x2="702" y2="80"/><line x1="918" y1="80" x2="922" y2="80"/>
  </g>
  <rect x="676" y="52" width="12" height="20" rx="4" fill="#4a3b28"/>
  <rect x="676" y="52" width="4" height="20" rx="2" fill="#7a6440" opacity="0.6"/>
  <rect x="932" y="52" width="12" height="20" rx="4" fill="#2a2016"/>
  <line x1="810" y1="30" x2="810" y2="16" stroke="#3b2f22" stroke-width="5"/>
  <line x1="808" y1="30" x2="808" y2="16" stroke="#6b5326" stroke-width="1.4" opacity="0.6"/>
  <path d="M700 32 q110 -6 220 0 l0 3 q-110 -5 -220 1 z" fill="#c9bda0" opacity="0.14"/>
</g>

<!-- the control-room window: the aquarium -->
<g>
  <rect x="634" y="96" width="352" height="248" fill="#241b12"/>
  <rect x="646" y="108" width="328" height="224" fill="url(#da-studio-glass)"/>
  <rect x="658" y="120" width="304" height="200" fill="#16222c"/>
  <g fill="#1c2a34">
    <rect x="674" y="132" width="74" height="118"/><rect x="756" y="140" width="58" height="110"/>
  </g>
  <g stroke="#2b3b46" stroke-width="2">
    <line x1="680" y1="150" x2="742" y2="150"/><line x1="680" y1="168" x2="742" y2="168"/><line x1="680" y1="186" x2="742" y2="186"/>
    <line x1="680" y1="204" x2="742" y2="204"/><line x1="680" y1="222" x2="742" y2="222"/>
  </g>
  <g fill="#d9a441" opacity="0.55">
    <circle cx="690" cy="141" r="3"/><circle cx="704" cy="141" r="3" class="fx-blink" style="--d:.6s"/><circle cx="718" cy="141" r="3"/>
    <circle cx="770" cy="152" r="3"/><circle cx="786" cy="152" r="3" class="fx-blink" style="--d:2.15s"/><circle cx="802" cy="152" r="3" class="fx-blink" style="--d:1.3s"/>
  </g>
  <path d="M666 320 L954 320 L920 246 L700 246 Z" fill="#101a22"/>
  <path d="M666 320 L954 320 L954 332 L666 332 Z" fill="#0c141b"/>
  <g fill="#d9a441" opacity="0.4">
    <rect x="716" y="262" width="26" height="9" rx="3"/><rect x="756" y="262" width="26" height="9" rx="3"/>
    <rect x="796" y="262" width="26" height="9" rx="3"/><rect x="836" y="262" width="26" height="9" rx="3"/>
  </g>
  <g fill="#0e161e">
    <path d="M826 250 q34 -44 74 0 z"/>
    <ellipse cx="863" cy="206" rx="21" ry="25"/>
    <path d="M842 196 q21 -26 42 0 q4 -26 -21 -26 q-25 0 -21 26 z"/>
  </g>
  <!-- atmosphere: the room beyond sits back behind two panes of dusty glass -->
  <rect x="658" y="120" width="304" height="200" fill="#5a6d7e" opacity="0.16"/>
  <rect x="658" y="120" width="304" height="104" fill="#6d8090" opacity="0.09"/>
  <rect x="658" y="120" width="304" height="52" fill="#7d8f9d" opacity="0.07"/>
  <rect x="806" y="108" width="10" height="224" fill="#3a2d1e"/>
  <rect x="806" y="108" width="3" height="224" fill="#6b5326" opacity="0.6"/>
  <path d="M646 108 L716 108 L646 240 Z" fill="#f0e7ce" opacity="0.05"/>
  <path d="M842 108 L906 108 L842 226 Z" fill="#f0e7ce" opacity="0.04"/>
  <!-- the studio pendant, reflected back off the near pane -->
  <ellipse cx="700" cy="188" rx="30" ry="9" fill="#ffd98a" opacity="0.07"/>
  <ellipse cx="700" cy="188" rx="13" ry="4" fill="#ffd98a" opacity="0.09"/>
  <path d="M660 306 q150 -18 300 -6 l0 12 q-150 -12 -300 6 z" fill="#cbd6e4" opacity="0.05"/>
  <rect x="634" y="96" width="352" height="248" fill="none" stroke="url(#da-studio-enamel)" stroke-width="10"/>
  <rect x="646" y="108" width="328" height="224" fill="none" stroke="#1b140d" stroke-width="4"/>
  <path d="M634 96 L986 96 L986 101 L634 101 Z" fill="#9b7f4e" opacity="0.4"/>
  <path d="M634 96 L639 96 L639 344 L634 344 Z" fill="#8d7345" opacity="0.35"/>
  <path d="M981 96 L986 96 L986 344 L981 344 Z" fill="#0f0b06" opacity="0.5"/>
  <g fill="#8e8e88" opacity="0.6">
    <circle cx="640" cy="104" r="2.6"/><circle cx="980" cy="104" r="2.6"/><circle cx="640" cy="336" r="2.6"/><circle cx="980" cy="336" r="2.6"/><circle cx="811" cy="104" r="2.6"/>
  </g>
  <rect x="628" y="338" width="364" height="16" fill="#4a3b28"/>
  <rect x="628" y="338" width="364" height="4" fill="#8a6f43" opacity="0.65"/>
  <rect x="628" y="350" width="364" height="4" fill="#120d07" opacity="0.6"/>
  <g fill="#c9bda0" opacity="0.1">
    <rect x="646" y="339" width="86" height="2.5"/><rect x="760" y="339" width="52" height="2.5"/><rect x="856" y="339" width="112" height="2.5"/>
  </g>
  <!-- chipped paint along the sill nose -->
  <g fill="#241b12" opacity="0.8">
    <path d="M694 338 l14 0 l-3 5 l-9 0 z"/><path d="M842 338 l10 0 l-2 4 l-7 0 z"/>
  </g>
</g>

<!-- Herrick's chair, shoved back and aside, still where he came out of it -->
<ellipse cx="206" cy="502" rx="112" ry="24" fill="#0d0904" opacity="0.5"/>
<ellipse cx="190" cy="510" rx="86" ry="17" fill="#0d0904" opacity="0.34"/>
<g transform="rotate(-13 232 340)">
  <rect x="164" y="268" width="136" height="15" rx="6" fill="#5b4830"/>
  <rect x="164" y="268" width="136" height="5" rx="2" fill="#9b7a3f" opacity="0.55"/>
  <rect x="170" y="283" width="124" height="98" fill="#2a2016"/>
  <g fill="#3f3223">
    <rect x="180" y="292" width="18" height="82"/><rect x="208" y="292" width="18" height="82"/>
    <rect x="236" y="292" width="18" height="82"/><rect x="264" y="292" width="18" height="82"/>
  </g>
  <g fill="#57452e" opacity="0.6">
    <rect x="180" y="292" width="4" height="82"/><rect x="208" y="292" width="4" height="82"/>
    <rect x="236" y="292" width="4" height="82"/><rect x="264" y="292" width="4" height="82"/>
  </g>
  <rect x="152" y="381" width="160" height="20" rx="7" fill="#4a3b28"/>
  <rect x="152" y="381" width="160" height="6" rx="3" fill="#6b5326" opacity="0.7"/>
  <rect x="160" y="401" width="13" height="86" fill="#241b12"/>
  <rect x="292" y="401" width="13" height="86" fill="#241b12"/>
  <rect x="158" y="440" width="150" height="8" fill="#2a2016"/>
</g>

<!-- the broadcast table -->
<g>
  <path d="M150 378 L648 378 L706 462 L98 462 Z" fill="url(#da-studio-table)"/>
  <ellipse cx="368" cy="418" rx="230" ry="42" fill="#ffd98a" opacity="0.08"/>
  <ellipse cx="362" cy="414" rx="140" ry="26" fill="#ffd98a" opacity="0.06"/>
  <g stroke="#2c2115" stroke-width="1.2" opacity="0.5">
    <path d="M158 392 q160 6 320 -2 q100 -4 200 4"/><path d="M140 412 q180 8 360 -4 q110 -6 210 6"/>
    <path d="M124 436 q190 10 380 -6 q120 -6 214 8"/>
  </g>
  <g stroke="#7a6440" stroke-width="0.9" opacity="0.22">
    <path d="M158 396 q160 6 320 -2 q100 -4 200 4"/><path d="M124 440 q190 10 380 -6 q120 -6 214 8"/>
  </g>
  <path d="M150 378 L648 378 L652 386 L146 386 Z" fill="#6b5638"/>
  <path d="M150 378 L648 378 L649 381 L149 381 Z" fill="#9b8055" opacity="0.6"/>
  <!-- the ring a cup left, months back -->
  <ellipse cx="286" cy="436" rx="21" ry="7" fill="none" stroke="#2a1c10" stroke-width="2.5" opacity="0.55"/>
  <ellipse cx="286" cy="436" rx="21" ry="7" fill="#3d2a17" opacity="0.16"/>
  <ellipse cx="238" cy="450" rx="9" ry="3.5" fill="#2a1c10" opacity="0.35"/>
  <path d="M98 462 L706 462 L706 478 L98 478 Z" fill="#33271a"/>
  <path d="M98 462 L706 462 L706 466 L98 466 Z" fill="#7a6440" opacity="0.6"/>
  <path d="M98 478 L706 478 L700 486 L104 486 Z" fill="#160f08"/>
  <g fill="#3b2f22" opacity="0.5">
    <path d="M180 386 L640 386 L644 392 L176 392 Z"/><path d="M140 424 L676 424 L678 428 L138 428 Z"/>
  </g>
  <rect x="152" y="478" width="16" height="104" fill="#241b12"/>
  <rect x="152" y="478" width="5" height="104" fill="#57452e" opacity="0.65"/>
  <rect x="644" y="478" width="16" height="104" fill="#1e1710"/>
  <rect x="644" y="478" width="4" height="104" fill="#4a3b28" opacity="0.5"/>
  <rect x="146" y="578" width="28" height="10" rx="3" fill="#14110d"/>
  <rect x="638" y="578" width="28" height="10" rx="3" fill="#14110d"/>
  <ellipse cx="400" cy="470" rx="290" ry="20" fill="#14110d" opacity="0.35"/>
  <ellipse cx="386" cy="586" rx="290" ry="22" fill="#0d0904" opacity="0.26"/>
</g>

<!-- THE MICROPHONE: ribbon mic on a scorched stand, unplugged -->
<rect x="192" y="150" width="330" height="330" fill="url(#da-studio-lamp)"/>
<g>
  <ellipse cx="344" cy="416" rx="66" ry="16" fill="#0d0904" opacity="0.5"/>
  <ellipse cx="352" cy="406" rx="52" ry="14" fill="#241b12"/>
  <ellipse cx="352" cy="400" rx="46" ry="12" fill="url(#da-studio-bake)"/>
  <ellipse cx="352" cy="396" rx="34" ry="9" fill="#4a3b28"/>
  <ellipse cx="352" cy="395" rx="34" ry="9" fill="url(#da-studio-chrome)" opacity="0.55"/>
  <path d="M320 393 q32 -12 64 0 l0 3 q-32 -10 -64 0 z" fill="#cbab6a" opacity="0.4"/>
  <rect x="345" y="300" width="14" height="100" fill="url(#da-studio-chrome)"/>
  <rect x="347.5" y="300" width="3" height="100" fill="#e0c07a" opacity="0.55"/>
  <rect x="340" y="338" width="24" height="16" rx="4" fill="url(#da-studio-brass)"/>
  <circle cx="368" cy="346" r="7" fill="#9b7a3f"/>
  <circle cx="366" cy="344" r="2.4" fill="#e0c07a" opacity="0.8"/>
  <path d="M320 300 q-8 -40 12 -52 l6 10 q-14 10 -6 42 z" fill="#4a3b28"/>
  <path d="M384 300 q8 -40 -12 -52 l-6 10 q14 10 6 42 z" fill="#4a3b28"/>
  <rect x="316" y="216" width="72" height="96" rx="34" fill="url(#da-studio-chrome)"/>
  <rect x="322" y="222" width="60" height="84" rx="28" fill="#3b2f22"/>
  <rect x="322" y="222" width="60" height="84" rx="28" fill="url(#da-studio-bake)" opacity="0.6"/>
  <ellipse cx="352" cy="258" rx="24" ry="34" fill="#1b140d"/>
  <g stroke="#6b5326" stroke-width="2" opacity="0.9">
    <line x1="330" y1="234" x2="374" y2="234"/><line x1="328" y1="244" x2="376" y2="244"/>
    <line x1="328" y1="254" x2="376" y2="254"/><line x1="328" y1="264" x2="376" y2="264"/>
    <line x1="328" y1="274" x2="376" y2="274"/><line x1="330" y1="284" x2="374" y2="284"/>
  </g>
  <line x1="352" y1="224" x2="352" y2="298" stroke="#6b5326" stroke-width="2.5" opacity="0.8"/>
  <rect x="316" y="216" width="72" height="96" rx="34" fill="none" stroke="#7d6432" stroke-width="2.5"/>
  <path d="M331 224 q-11 8 -11 26 l0 40" fill="none" stroke="#e6d6ab" stroke-width="2.4" opacity="0.45" stroke-linecap="round"/>
  <path d="M374 228 q9 8 9 24" fill="none" stroke="#e6d6ab" stroke-width="1.6" opacity="0.25" stroke-linecap="round"/>
  <path d="M330 306 q22 -8 44 0 l0 6 q-22 8 -44 0 z" fill="#241b12"/>
  <g fill="#14110d" opacity="0.62">
    <ellipse cx="344" cy="242" rx="16" ry="22"/><ellipse cx="360" cy="272" rx="12" ry="18"/>
    <ellipse cx="352" cy="300" rx="20" ry="10"/>
  </g>
  <g fill="#14110d" opacity="0.45">
    <ellipse cx="352" cy="344" rx="11" ry="26"/><ellipse cx="352" cy="392" rx="26" ry="9"/>
  </g>
  <path d="M338 212 q14 -10 28 0 l0 4 q-14 -8 -28 0 z" fill="#ffd98a" opacity="0.35"/>
  <!-- the ground strap, snipped clean, copper still bright -->
  <path d="M330 404 q-24 12 -34 26" fill="none" stroke="#3b2f22" stroke-width="5" stroke-linecap="round"/>
  <path d="M296 430 l10 8" stroke="#c98a3a" stroke-width="4" stroke-linecap="round"/>
  <path d="M314 442 l12 6" stroke="#c98a3a" stroke-width="4" stroke-linecap="round"/>
  <circle cx="308" cy="437" r="2.4" fill="#ffd98a"/>
  <!-- the cable, pulled from its socket and left lying -->
  <path d="M372 404 q64 24 92 56 q26 28 96 34" fill="none" stroke="#1b140d" stroke-width="7" stroke-linecap="round"/>
  <rect x="558" y="486" width="30" height="16" rx="5" fill="#3b2f22"/>
  <circle cx="586" cy="494" r="7" fill="#6b5326"/>
</g>

<!-- the script, with next week's notes clipped behind it -->
<ellipse cx="490" cy="440" rx="76" ry="16" fill="#0d0904" opacity="0.4"/>
<g transform="rotate(-5 500 414)">
  <rect x="440" y="392" width="126" height="46" fill="#cdbc93"/>
  <rect x="436" y="386" width="126" height="46" fill="#e3d5ac"/>
  <rect x="432" y="380" width="126" height="46" fill="#f0e7ce"/>
  <rect x="432" y="380" width="126" height="46" fill="#ffd98a" opacity="0.13"/>
  <path d="M498 380 l60 0 l0 46 l-60 0 z" fill="#6b5a3c" opacity="0.14"/>
  <path d="M432 380 l126 0 l0 3 l-126 0 z" fill="#fffaea" opacity="0.5"/>
  <g stroke="#8d7c62" stroke-width="1.5" opacity="0.9">
    <line x1="442" y1="390" x2="536" y2="390"/><line x1="442" y1="397" x2="546" y2="397"/>
    <line x1="442" y1="404" x2="528" y2="404"/><line x1="442" y1="411" x2="544" y2="411"/>
    <line x1="442" y1="418" x2="512" y2="418"/>
  </g>
  <g stroke="#a8352a" stroke-width="2.4" stroke-linecap="round" opacity="0.95">
    <line x1="440" y1="401" x2="500" y2="400"/><line x1="504" y1="408" x2="546" y2="407"/>
    <path d="M520 386 l14 10" fill="none"/>
  </g>
  <path d="M470 378 l0 -10 q6 -4 12 0 l0 12" fill="none" stroke="#8e8e88" stroke-width="3"/>
  <rect x="482" y="430" width="72" height="7" rx="3" fill="#a8352a"/>
  <ellipse cx="556" cy="433" rx="5" ry="3.5" fill="#3b2f22"/>
</g>

<!-- black coffee, gone cold, untouched -->
<g>
  <ellipse cx="626" cy="442" rx="46" ry="12" fill="#0d0904" opacity="0.42"/>
  <ellipse cx="612" cy="436" rx="34" ry="11" fill="#cdbc93"/>
  <ellipse cx="612" cy="433" rx="28" ry="9" fill="#e3d5ac"/>
  <path d="M584 433 q12 -7 28 -7 l0 3 q-15 0 -25 6 z" fill="#fffaea" opacity="0.55"/>
  <path d="M592 404 l40 0 l-5 26 q-15 8 -30 0 z" fill="#f0e7ce"/>
  <path d="M618 404 l14 0 l-5 26 q-6 3 -12 3 z" fill="#7d6e50" opacity="0.28"/>
  <path d="M593 405 l6 0 l-2 24 q-3 -2 -4 -5 z" fill="#fffaea" opacity="0.6"/>
  <path d="M592 404 l40 0 l-1 6 q-19 6 -38 0 z" fill="#cdbc93"/>
  <ellipse cx="612" cy="405" rx="20" ry="6" fill="#100c05"/>
  <ellipse cx="612" cy="405" rx="20" ry="6" fill="#3b2f22" opacity="0.42"/>
  <path d="M598 403 q12 -4 24 -1 l0 2 q-12 -3 -23 2 z" fill="#c9ad74" opacity="0.35"/>
  <path d="M634 410 q16 4 10 16 q-4 6 -12 4" fill="none" stroke="#f0e7ce" stroke-width="5"/>
  <path d="M635 411 q13 4 9 14" fill="none" stroke="#fffaea" stroke-width="1.6" opacity="0.5"/>
  <path d="M600 402 q12 -3 24 0" fill="none" stroke="#ffd98a" stroke-width="1.5" opacity="0.5"/>
</g>

<!-- his headphones, taken off and left on the table -->
<ellipse cx="228" cy="440" rx="52" ry="12" fill="#0d0904" opacity="0.4"/>
<g transform="rotate(8 232 424)">
  <path d="M198 424 q34 -34 68 0" fill="none" stroke="#241b12" stroke-width="9" stroke-linecap="round"/>
  <path d="M200 421 q32 -30 64 0" fill="none" stroke="#4a3b28" stroke-width="3" stroke-linecap="round"/>
  <path d="M204 418 q28 -24 56 0" fill="none" stroke="#8d7345" stroke-width="1.2" stroke-linecap="round" opacity="0.55"/>
  <ellipse cx="196" cy="430" rx="15" ry="11" fill="#2a2016"/>
  <ellipse cx="196" cy="430" rx="15" ry="11" fill="url(#da-studio-bake)" opacity="0.7"/>
  <ellipse cx="196" cy="430" rx="9" ry="6" fill="#14110d"/>
  <path d="M186 426 q10 -6 20 -1" fill="none" stroke="#8d7345" stroke-width="1.4" opacity="0.4"/>
  <ellipse cx="268" cy="430" rx="15" ry="11" fill="#2a2016"/>
  <ellipse cx="268" cy="430" rx="15" ry="11" fill="url(#da-studio-bake)" opacity="0.7"/>
  <ellipse cx="268" cy="430" rx="9" ry="6" fill="#14110d"/>
  <path d="M268 438 q22 18 8 34" fill="none" stroke="#1b140d" stroke-width="5"/>
  <path d="M268 438 q22 18 8 34" fill="none" stroke="#3b2f22" stroke-width="1.6" stroke-dasharray="3 4" opacity="0.6"/>
</g>

<!-- floor: the coiled spare cable and a flight case shoved out of the way -->
<g>
  <ellipse cx="800" cy="552" rx="76" ry="18" fill="#0d0904" opacity="0.42"/>
  <g fill="none" stroke="#1b140d" stroke-width="6">
    <ellipse cx="806" cy="536" rx="58" ry="20"/><ellipse cx="808" cy="546" rx="44" ry="14"/>
  </g>
  <g fill="none" stroke="#3b2f22" stroke-width="1.6" opacity="0.55">
    <ellipse cx="805" cy="534" rx="58" ry="20"/><ellipse cx="807" cy="544" rx="44" ry="14"/>
  </g>
  <path d="M760 548 q-30 10 -44 30" fill="none" stroke="#1b140d" stroke-width="6" stroke-linecap="round"/>
  <path d="M760 547 q-30 10 -44 30" fill="none" stroke="#3b2f22" stroke-width="1.4" stroke-dasharray="4 5" opacity="0.5"/>
  <rect x="856" y="470" width="128" height="86" rx="6" fill="url(#da-studio-bake)"/>
  <rect x="856" y="470" width="128" height="10" rx="4" fill="#3b2f22"/>
  <rect x="856" y="470" width="128" height="3" rx="1.5" fill="#7a6440" opacity="0.4"/>
  <g fill="none" stroke="#4a3b28" stroke-width="3">
    <rect x="868" y="488" width="104" height="54"/>
  </g>
  <path d="M868 488 l104 0 l0 2 l-104 0 z" fill="#8d7345" opacity="0.3"/>
  <rect x="900" y="464" width="40" height="8" rx="3" fill="#6b5326"/>
  <g fill="#6b5326">
    <rect x="862" y="546" width="14" height="10"/><rect x="964" y="546" width="14" height="10"/>
  </g>
  <g fill="#8e8e88" opacity="0.4">
    <rect x="880" y="504" width="16" height="14" rx="2"/><rect x="944" y="504" width="16" height="14" rx="2"/>
    <circle cx="861" cy="475" r="2"/><circle cx="979" cy="475" r="2"/><circle cx="861" cy="551" r="2"/><circle cx="979" cy="551" r="2"/>
  </g>
  <!-- dust, undisturbed, on the lid -->
  <path d="M858 470 l124 0 l0 4 q-62 4 -124 0 z" fill="#c9bda0" opacity="0.11"/>
  <ellipse cx="920" cy="562" rx="76" ry="12" fill="#14110d" opacity="0.5"/>
</g>

<!-- the pendant, the one warm thing burning over the table -->
<g>
  <line x1="352" y1="0" x2="352" y2="54" stroke="#33271a" stroke-width="5"/>
  <line x1="350.5" y1="0" x2="350.5" y2="54" stroke="#6b5326" stroke-width="1.4" opacity="0.6"/>
  <path d="M300 100 L404 100 L378 54 L326 54 Z" fill="url(#da-studio-enamel)"/>
  <path d="M300 100 L326 54 L340 54 L312 100 Z" fill="#a58a56" opacity="0.35"/>
  <path d="M382 100 L404 100 L378 54 L368 54 Z" fill="#110c06" opacity="0.45"/>
  <path d="M300 100 L404 100 L400 92 L304 92 Z" fill="#241b12"/>
  <path d="M326 54 L378 54 L370 66 L334 66 Z" fill="#5b4830"/>
  <path d="M326 54 L378 54 L376 58 L328 58 Z" fill="#9b8055" opacity="0.55"/>
  <ellipse cx="352" cy="100" rx="52" ry="12" fill="#6b5326"/>
  <ellipse cx="352" cy="100" rx="52" ry="12" fill="url(#da-studio-brass)" opacity="0.55"/>
  <ellipse cx="352" cy="99" rx="40" ry="8" fill="#ffd06a" opacity="0.35"/>
  <ellipse cx="352" cy="106" rx="14" ry="17" fill="#ffd98a"/>
  <ellipse cx="352" cy="106" rx="7" ry="9" fill="#fff3d0" class="fx-ember" style="--d:.75s"/>
  <g class="fx-glow" style="--d:0s"><ellipse cx="352" cy="112" rx="92" ry="40" fill="#d9a441" opacity="0.16"/></g>
  <g class="fx-glow" style="--d:1.9s"><path d="M302 104 L402 104 L520 462 L188 462 Z" fill="#ffd98a" opacity="0.05"/></g>
</g>

<!-- roped off: stanchions and a velvet rope across the foreground -->
<g>
  <ellipse cx="196" cy="596" rx="44" ry="13" fill="#241b12"/>
  <rect x="188" y="474" width="16" height="122" fill="#33271a"/>
  <rect x="190" y="474" width="5" height="122" fill="#6b5326"/>
  <circle cx="196" cy="468" r="12" fill="#9b7a3f"/>
  <ellipse cx="604" cy="576" rx="40" ry="12" fill="#241b12"/>
  <rect x="597" y="462" width="15" height="114" fill="#33271a"/>
  <rect x="599" y="462" width="5" height="114" fill="#6b5326"/>
  <circle cx="604" cy="456" r="11" fill="#9b7a3f"/>
  <path d="M196 480 Q 400 578 604 470" fill="none" stroke="#3a1512" stroke-width="12" stroke-linecap="round"/>
  <path d="M196 476 Q 400 572 604 466" fill="none" stroke="#5d1f18" stroke-width="8" stroke-linecap="round"/>
  <path d="M240 500 Q 400 566 560 494" fill="none" stroke="#7a2a20" stroke-width="2" opacity="0.5"/>
</g>

<!-- foreground jamb, its paint worn through where hands and carts go past -->
<rect x="0" y="0" width="44" height="620" fill="#0c0905"/>
<rect x="36" y="0" width="8" height="620" fill="#171008" opacity="0.9"/>
<rect x="44" y="0" width="6" height="620" fill="#33271a" opacity="0.6"/>
<rect x="44" y="0" width="2" height="620" fill="#6b5326" opacity="0.35"/>
<g fill="#4a3b28" opacity="0.3">
  <path d="M40 190 l4 0 l0 46 l-4 0 z"/><path d="M40 388 l4 0 l0 72 l-4 0 z"/><path d="M40 496 l4 0 l0 34 l-4 0 z"/>
</g>
<g fill="#241b12" opacity="0.5">
  <path d="M28 300 l8 0 l0 18 l-8 0 z"/><path d="M30 452 l6 0 l0 26 l-6 0 z"/>
</g>

<rect width="1000" height="620" fill="url(#da-studio-vig)"/>
`,
  },

  control: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_patchbay: { x: 87, y: 30 },
      h_cuesheet: { x: 73, y: 63 },
      h_transcabinet: { x: 22, y: 85 },
    },
    svg: `
<defs>
  <linearGradient id="da-ctrl-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#332a1f"/><stop offset="1" stop-color="#15110b"/>
  </linearGradient>
  <linearGradient id="da-ctrl-board" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3b28"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="da-ctrl-studio" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a2c1d"/><stop offset="1" stop-color="#1c1610"/>
  </linearGradient>
  <linearGradient id="da-ctrl-rack" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f2519"/><stop offset="1" stop-color="#1b140d"/>
  </linearGradient>
  <linearGradient id="da-ctrl-alum" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0" stop-color="#191308"/><stop offset="0.1" stop-color="#4a3d28"/>
    <stop offset="0.26" stop-color="#33291a"/><stop offset="0.5" stop-color="#5c4c31"/>
    <stop offset="0.72" stop-color="#2b2214"/><stop offset="0.9" stop-color="#41341f"/>
    <stop offset="1" stop-color="#150f07"/>
  </linearGradient>
  <radialGradient id="da-ctrl-knob" cx="0.33" cy="0.26" r="0.85">
    <stop offset="0" stop-color="#5a4a30"/><stop offset="0.35" stop-color="#2c2315"/>
    <stop offset="0.8" stop-color="#14100a"/><stop offset="1" stop-color="#241c11"/>
  </radialGradient>
  <radialGradient id="da-ctrl-jack" cx="0.36" cy="0.3" r="0.8">
    <stop offset="0" stop-color="#2e2618"/><stop offset="0.5" stop-color="#0d0a05"/><stop offset="1" stop-color="#050402"/>
  </radialGradient>
  <linearGradient id="da-ctrl-meter" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#f2d590"/><stop offset="0.45" stop-color="#d9a441"/><stop offset="1" stop-color="#9a7127"/>
  </linearGradient>
  <radialGradient id="da-ctrl-disc" cx="0.42" cy="0.3" r="0.78">
    <stop offset="0" stop-color="#3d3428"/><stop offset="0.34" stop-color="#191309"/>
    <stop offset="0.72" stop-color="#0c0904"/><stop offset="1" stop-color="#221a10"/>
  </radialGradient>
  <linearGradient id="da-ctrl-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#292014"/><stop offset="0.45" stop-color="#1a140c"/><stop offset="1" stop-color="#0f0b06"/>
  </linearGradient>
  <linearGradient id="da-ctrl-haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a94a0" stop-opacity="0.3"/><stop offset="0.5" stop-color="#6d7784" stop-opacity="0.18"/>
    <stop offset="1" stop-color="#4c5460" stop-opacity="0.1"/>
  </linearGradient>
  <linearGradient id="da-ctrl-steel" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2b2a26"/><stop offset="0.24" stop-color="#b7b0a0"/>
    <stop offset="0.5" stop-color="#6a6558"/><stop offset="0.78" stop-color="#d5cdba"/>
    <stop offset="1" stop-color="#3a3730"/>
  </linearGradient>
  <radialGradient id="da-ctrl-glow" cx="0.62" cy="0.52" r="0.68">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-ctrl-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-ctrl-vig" cx="0.5" cy="0.46" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#da-ctrl-wall)"/>
<rect width="1000" height="620" fill="url(#da-ctrl-glow)"/>

<!-- back wall panelling and cable trunking -->
<g fill="#241b12">
  <rect x="0" y="0" width="1000" height="26"/><rect x="0" y="316" width="1000" height="14"/>
</g>
<rect x="0" y="0" width="1000" height="4" fill="#5b4830" opacity="0.5"/>
<rect x="0" y="316" width="1000" height="3" fill="#5b4830" opacity="0.45"/>
<rect x="0" y="327" width="1000" height="3" fill="#0d0904" opacity="0.6"/>
<g fill="#2a2016">
  <rect x="0" y="26" width="1000" height="10"/>
</g>
<rect x="0" y="26" width="1000" height="3" fill="#4a3b28" opacity="0.55"/>
<g stroke="#2a2016" stroke-width="4" fill="none">
  <path d="M40 36 l0 280"/><path d="M712 36 l0 32 l32 0"/><path d="M986 36 l0 280"/>
</g>
<g stroke="#4a3b28" stroke-width="1.2" fill="none" opacity="0.5">
  <path d="M38 36 l0 280"/><path d="M710 36 l0 30 l34 0"/><path d="M984 36 l0 280"/>
</g>
<!-- braided cloth-covered feeds dropping out of the trunking -->
<g fill="none" stroke="#14110d" stroke-width="5" stroke-linecap="round">
  <path d="M726 68 q-16 42 4 84 q18 38 -6 84"/><path d="M736 68 q10 46 -6 90 q-14 40 8 78"/>
</g>
<g fill="none" stroke="#3b2f22" stroke-width="1.4" stroke-dasharray="3 4" opacity="0.6">
  <path d="M726 68 q-16 42 4 84 q18 38 -6 84"/><path d="M736 68 q10 46 -6 90 q-14 40 8 78"/>
</g>
<rect x="716" y="238" width="30" height="26" rx="3" fill="#2a2016"/>
<rect x="719" y="241" width="24" height="20" rx="2" fill="#14110d"/>
<g fill="#6b5326" opacity="0.7"><circle cx="722" cy="240" r="1.8"/><circle cx="740" cy="240" r="1.8"/><circle cx="722" cy="262" r="1.8"/><circle cx="740" cy="262" r="1.8"/></g>
<g fill="#1b140d">
  <rect x="0" y="330" width="1000" height="290"/>
</g>
<rect x="0" y="330" width="1000" height="290" fill="url(#da-ctrl-floor)"/>
<g stroke="#241b12" stroke-width="3">
  <line x1="0" y1="520" x2="1000" y2="520"/><line x1="0" y1="566" x2="1000" y2="566"/>
</g>
<g stroke="#3f3122" stroke-width="1" opacity="0.4">
  <line x1="0" y1="517" x2="1000" y2="517"/><line x1="0" y1="563" x2="1000" y2="563"/>
</g>
<g stroke="#120d07" stroke-width="2" opacity="0.6">
  <line x1="220" y1="482" x2="220" y2="520"/><line x1="612" y1="520" x2="612" y2="566"/><line x1="880" y1="482" x2="880" y2="520"/><line x1="330" y1="566" x2="330" y2="620"/>
</g>
<ellipse cx="760" cy="530" rx="300" ry="90" fill="#d9a441" opacity="0.05"/>
<ellipse cx="740" cy="518" rx="190" ry="56" fill="#ffd98a" opacity="0.04"/>

<!-- the glass: Studio A, empty, on the other side -->
<g>
  <rect x="98" y="56" width="614" height="266" fill="#241b12"/>
  <rect x="110" y="68" width="590" height="242" fill="url(#da-ctrl-studio)"/>
  <g fill="#3f3122">
    <rect x="120" y="78" width="86" height="66"/><rect x="212" y="78" width="86" height="66"/><rect x="304" y="78" width="86" height="66"/>
    <rect x="396" y="78" width="86" height="66"/><rect x="488" y="78" width="86" height="66"/><rect x="580" y="78" width="86" height="66"/>
    <rect x="120" y="150" width="86" height="66"/><rect x="212" y="150" width="86" height="66"/><rect x="304" y="150" width="86" height="66"/>
    <rect x="396" y="150" width="86" height="66"/><rect x="488" y="150" width="86" height="66"/><rect x="580" y="150" width="86" height="66"/>
  </g>
  <path d="M330 90 L406 90 L392 60 L344 60 Z" fill="#33271a"/>
  <ellipse cx="368" cy="90" rx="38" ry="9" fill="#6b5326"/>
  <ellipse cx="368" cy="96" rx="10" ry="12" fill="#ffd98a"/>
  <ellipse cx="368" cy="102" rx="66" ry="30" fill="#d9a441" opacity="0.16"/>
  <path d="M336 94 L400 94 L470 254 L266 254 Z" fill="#ffd98a" opacity="0.06"/>
  <!-- the roped-off microphone, small and far away -->
  <path d="M200 250 L560 250 L594 292 L166 292 Z" fill="#3b2f22"/>
  <path d="M200 250 L560 250 L562 256 L198 256 Z" fill="#5b4830"/>
  <ellipse cx="368" cy="252" rx="26" ry="7" fill="#241b12"/>
  <rect x="363" y="206" width="10" height="46" fill="#33271a"/>
  <rect x="348" y="164" width="42" height="54" rx="20" fill="#2a2016"/>
  <rect x="352" y="168" width="34" height="46" rx="16" fill="#3b2f22"/>
  <ellipse cx="369" cy="190" rx="13" ry="18" fill="#14110d"/>
  <g transform="rotate(-12 250 236)">
    <rect x="206" y="196" width="90" height="10" rx="4" fill="#4a3b28"/>
    <rect x="212" y="206" width="78" height="52" fill="#2a2016"/>
  </g>
  <g>
    <rect x="228" y="284" width="9" height="34" fill="#33271a"/><rect x="510" y="284" width="9" height="30" fill="#33271a"/>
    <path d="M232 288 Q 372 330 514 286" fill="none" stroke="#5d1f18" stroke-width="7" stroke-linecap="round"/>
  </g>
  <!-- depth: two panes of glass and the air between them put that room away -->
  <rect x="110" y="68" width="590" height="242" fill="url(#da-ctrl-haze)"/>
  <rect x="110" y="68" width="590" height="110" fill="#7c8794" opacity="0.1"/>
  <rect x="110" y="68" width="590" height="46" fill="#8b95a1" opacity="0.08"/>
  <!-- glass: reflection streaks and the double pane -->
  <rect x="400" y="68" width="10" height="242" fill="#33271a"/>
  <rect x="400" y="68" width="3" height="242" fill="#6b5326" opacity="0.5"/>
  <path d="M110 68 L188 68 L110 232 Z" fill="#cbd6e4" opacity="0.06"/>
  <path d="M470 68 L540 68 L470 200 Z" fill="#cbd6e4" opacity="0.05"/>
  <path d="M600 68 L700 68 L700 130 Z" fill="#cbd6e4" opacity="0.04"/>
  <!-- the control room, reflected faintly back at us off the near pane -->
  <path d="M112 274 q150 -14 296 -8 q148 6 290 -4 l0 20 q-142 12 -290 6 q-146 -6 -296 8 z" fill="#d9a441" opacity="0.06"/>
  <ellipse cx="612" cy="196" rx="26" ry="8" fill="#ffd98a" opacity="0.07"/>
  <rect x="98" y="56" width="614" height="266" fill="none" stroke="#33271a" stroke-width="12"/>
  <path d="M92 50 L718 50 L718 56 L92 56 Z" fill="#7a6440" opacity="0.4"/>
  <path d="M92 322 L718 322 L718 328 L92 328 Z" fill="#0d0904" opacity="0.55"/>
  <rect x="110" y="68" width="590" height="242" fill="none" stroke="#14110d" stroke-width="4"/>
  <g fill="#8e8e88" opacity="0.45">
    <circle cx="106" cy="64" r="2.6"/><circle cx="704" cy="64" r="2.6"/><circle cx="106" cy="314" r="2.6"/><circle cx="704" cy="314" r="2.6"/><circle cx="405" cy="64" r="2.6"/><circle cx="405" cy="314" r="2.6"/>
  </g>
</g>

<!-- THE PATCH BAY: the station's nervous system, and one cord in the wrong hole -->
<g>
  <rect x="760" y="70" width="238" height="254" rx="4" fill="#0d0904" opacity="0.42"/>
  <rect x="752" y="60" width="234" height="252" rx="4" fill="url(#da-ctrl-rack)"/>
  <rect x="752" y="60" width="234" height="252" rx="4" fill="none" stroke="#4a3b28" stroke-width="4"/>
  <path d="M752 60 L986 60 L986 65 L752 65 Z" fill="#8a6f43" opacity="0.4"/>
  <path d="M981 60 L986 60 L986 312 L981 312 Z" fill="#0d0904" opacity="0.5"/>
  <!-- dust, thick on the top rail -->
  <path d="M754 60 l230 0 l0 4 q-115 5 -230 0 z" fill="#c9bda0" opacity="0.1"/>
  <!-- rack ears, and the screws that hold every panel in -->
  <g fill="#1b140d">
    <rect x="752" y="60" width="12" height="252"/><rect x="974" y="60" width="12" height="252"/>
  </g>
  <g fill="#3b2f22"><rect x="752" y="60" width="3" height="252"/><rect x="974" y="60" width="2" height="252"/></g>
  <g fill="#8e8e88" opacity="0.55">
    <circle cx="758" cy="80" r="3"/><circle cx="980" cy="80" r="3"/><circle cx="758" cy="120" r="3"/><circle cx="980" cy="120" r="3"/>
    <circle cx="758" cy="142" r="3"/><circle cx="980" cy="142" r="3"/><circle cx="758" cy="182" r="3"/><circle cx="980" cy="182" r="3"/>
    <circle cx="758" cy="204" r="3"/><circle cx="980" cy="204" r="3"/><circle cx="758" cy="244" r="3"/><circle cx="980" cy="244" r="3"/>
    <circle cx="758" cy="296" r="3"/><circle cx="980" cy="296" r="3"/>
  </g>
  <g fill="url(#da-ctrl-alum)">
    <rect x="764" y="74" width="210" height="52"/><rect x="764" y="136" width="210" height="52"/><rect x="764" y="198" width="210" height="52"/>
  </g>
  <g fill="#c9bda0" opacity="0.16">
    <rect x="764" y="74" width="210" height="2"/><rect x="764" y="136" width="210" height="2"/><rect x="764" y="198" width="210" height="2"/>
  </g>
  <g fill="#080602" opacity="0.5">
    <rect x="764" y="124" width="210" height="2"/><rect x="764" y="186" width="210" height="2"/><rect x="764" y="248" width="210" height="2"/>
  </g>
  <g fill="url(#da-ctrl-jack)" stroke="#9b7a3f" stroke-width="1.6">
    <circle cx="780" cy="88" r="6"/><circle cx="806" cy="88" r="6"/><circle cx="832" cy="88" r="6"/><circle cx="858" cy="88" r="6"/><circle cx="884" cy="88" r="6"/><circle cx="910" cy="88" r="6"/><circle cx="936" cy="88" r="6"/><circle cx="962" cy="88" r="6"/>
    <circle cx="780" cy="112" r="6"/><circle cx="806" cy="112" r="6"/><circle cx="832" cy="112" r="6"/><circle cx="858" cy="112" r="6"/><circle cx="884" cy="112" r="6"/><circle cx="910" cy="112" r="6"/><circle cx="936" cy="112" r="6"/><circle cx="962" cy="112" r="6"/>
    <circle cx="780" cy="150" r="6"/><circle cx="806" cy="150" r="6"/><circle cx="832" cy="150" r="6"/><circle cx="858" cy="150" r="6"/><circle cx="884" cy="150" r="6"/><circle cx="910" cy="150" r="6"/><circle cx="936" cy="150" r="6"/><circle cx="962" cy="150" r="6"/>
    <circle cx="780" cy="174" r="6"/><circle cx="806" cy="174" r="6"/><circle cx="832" cy="174" r="6"/><circle cx="858" cy="174" r="6"/><circle cx="884" cy="174" r="6"/><circle cx="910" cy="174" r="6"/><circle cx="936" cy="174" r="6"/><circle cx="962" cy="174" r="6"/>
    <circle cx="780" cy="212" r="6"/><circle cx="806" cy="212" r="6"/><circle cx="832" cy="212" r="6"/><circle cx="858" cy="212" r="6"/><circle cx="884" cy="212" r="6"/><circle cx="910" cy="212" r="6"/><circle cx="936" cy="212" r="6"/><circle cx="962" cy="212" r="6"/>
    <circle cx="780" cy="236" r="6"/><circle cx="806" cy="236" r="6"/><circle cx="832" cy="236" r="6"/><circle cx="858" cy="236" r="6"/><circle cx="884" cy="236" r="6"/><circle cx="910" cy="236" r="6"/><circle cx="936" cy="236" r="6"/><circle cx="962" cy="236" r="6"/>
  </g>
  <g fill="none" stroke="#1b140d" stroke-width="7" stroke-linecap="round">
    <path d="M806 88 q6 34 26 24"/><path d="M884 112 q10 40 26 38"/>
    <path d="M780 150 q12 40 26 24"/><path d="M936 150 q-6 38 26 24"/>
    <path d="M832 212 q14 44 52 24"/>
  </g>
  <g fill="none" stroke="#3b2f22" stroke-width="4" stroke-linecap="round">
    <path d="M806 90 q6 32 26 22"/><path d="M884 114 q10 38 26 36"/>
    <path d="M780 152 q12 38 26 22"/><path d="M936 152 q-6 36 26 22"/>
    <path d="M832 214 q14 42 52 22"/>
  </g>
  <!-- the wrong patch: studio mic line jumped across to the plate feed -->
  <path d="M806 88 Q 800 200 962 236" fill="none" stroke="#5d1f18" stroke-width="9" stroke-linecap="round"/>
  <path d="M806 88 Q 800 200 962 236" fill="none" stroke="#a8352a" stroke-width="5" stroke-linecap="round"/>
  <circle cx="806" cy="88" r="9" fill="#a8352a"/><circle cx="962" cy="236" r="9" fill="#a8352a"/>
  <circle cx="806" cy="88" r="4" fill="#ffd98a"/><circle cx="962" cy="236" r="4" fill="#ffd98a"/>
  <rect x="764" y="262" width="210" height="38" fill="#241b12"/>
  <g fill="#6f8a45" opacity="0.8">
    <circle cx="790" cy="281" r="7" class="fx-blink" style="--d:.35s"/><circle cx="822" cy="281" r="7"/>
  </g>
  <g fill="#d9a441" opacity="0.75">
    <circle cx="854" cy="281" r="7"/><circle cx="886" cy="281" r="7" class="fx-blink" style="--d:1.85s"/><circle cx="918" cy="281" r="7" class="fx-blink" style="--d:2.7s"/>
  </g>
  <circle cx="950" cy="281" r="7" fill="#5d1f18"/>
</g>

<!-- two turntables, still turning with nothing to play -->
<g>
  <ellipse cx="170" cy="486" rx="176" ry="22" fill="#0d0904" opacity="0.45"/>
  <rect x="24" y="342" width="300" height="18" rx="4" fill="#4a3b28"/>
  <rect x="24" y="342" width="300" height="4" rx="2" fill="#8a6f43" opacity="0.5"/>
  <rect x="30" y="360" width="288" height="110" fill="#2a2016"/>
  <rect x="30" y="360" width="288" height="110" fill="url(#da-ctrl-rack)" opacity="0.55"/>
  <g>
    <ellipse cx="106" cy="352" rx="62" ry="21" fill="#1b140d"/>
    <ellipse cx="106" cy="348" rx="58" ry="19" fill="#33271a"/>
    <ellipse cx="106" cy="348" rx="40" ry="13" fill="url(#da-ctrl-disc)"/>
    <path d="M74 344 q30 -10 62 -2" fill="none" stroke="#8f8776" stroke-width="1.6" opacity="0.22"/>
    <ellipse cx="106" cy="348" rx="15" ry="5" fill="#a8352a"/>
    <circle cx="106" cy="348" r="2.5" fill="#e3d5ac"/>
    <g fill="none" stroke="#4a3b28" stroke-width="1.4" opacity="0.7">
      <ellipse cx="106" cy="348" rx="52" ry="17"/><ellipse cx="106" cy="348" rx="46" ry="15"/><ellipse cx="106" cy="348" rx="30" ry="10"/>
    </g>
    <g transform="translate(106 348) scale(1 0.33)">
      <path class="fx-spin" style="--d:.25s" d="M-33 0 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 M26 0 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0" fill="#9b7a3f" opacity="0.6"/>
    </g>
    <path d="M158 330 l-42 16" stroke="url(#da-ctrl-steel)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="160" cy="329" r="7" fill="#6b5326"/>
    <rect x="110" y="342" width="12" height="9" rx="2" fill="#241b12"/>
  </g>
  <g>
    <ellipse cx="246" cy="382" rx="62" ry="21" fill="#1b140d"/>
    <ellipse cx="246" cy="378" rx="58" ry="19" fill="#33271a"/>
    <ellipse cx="246" cy="378" rx="40" ry="13" fill="url(#da-ctrl-disc)"/>
    <path d="M214 374 q30 -10 62 -2" fill="none" stroke="#8f8776" stroke-width="1.6" opacity="0.22"/>
    <ellipse cx="246" cy="378" rx="15" ry="5" fill="#6f8a45"/>
    <circle cx="246" cy="378" r="2.5" fill="#e3d5ac"/>
    <g fill="none" stroke="#4a3b28" stroke-width="1.4" opacity="0.7">
      <ellipse cx="246" cy="378" rx="52" ry="17"/><ellipse cx="246" cy="378" rx="46" ry="15"/><ellipse cx="246" cy="378" rx="30" ry="10"/>
    </g>
    <g transform="translate(246 378) scale(1 0.33)">
      <path class="fx-spin" style="--d:1.7s" d="M-33 0 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0 M26 0 a3.5 3.5 0 1 0 7 0 a3.5 3.5 0 1 0 -7 0" fill="#9b7a3f" opacity="0.6"/>
    </g>
    <path d="M298 360 l-42 16" stroke="url(#da-ctrl-steel)" stroke-width="4" stroke-linecap="round"/>
    <circle cx="300" cy="359" r="7" fill="#6b5326"/>
    <rect x="250" y="372" width="12" height="9" rx="2" fill="#241b12"/>
  </g>
  <rect x="30" y="470" width="288" height="12" fill="#1b140d"/>
</g>

<!-- THE TRANSCRIPTION CABINET, bolted under the turntables: a dial where a keyhole ought to be -->
<ellipse cx="226" cy="572" rx="106" ry="13" fill="#0d0904" opacity="0.5"/>
<rect x="128" y="482" width="194" height="88" fill="url(#da-ctrl-rack)"/>
<rect x="128" y="482" width="194" height="7" fill="#5b4830" opacity="0.6"/>
<rect x="140" y="494" width="170" height="64" fill="#241b12"/>
<rect x="144" y="498" width="162" height="56" fill="none" stroke="#4a3b28" stroke-width="3"/>
<path d="M144 498 l46 0 l-46 46 z" fill="#ffd98a" opacity="0.06"/>
<rect x="158" y="518" width="46" height="10" rx="3" fill="#9b7a3f"/>
<circle cx="276" cy="526" r="17" fill="url(#da-ctrl-steel)" opacity="0.55"/>
<circle cx="276" cy="526" r="11" fill="url(#da-ctrl-knob)" stroke="#8a6f39" stroke-width="1.5"/>
<line x1="276" y1="526" x2="276" y2="512" stroke="#e3d5ac" stroke-width="2.2"/>

<!-- the board: meter bridge, Bakelite knobs, faders -->
<g>
  <rect x="332" y="290" width="622" height="64" rx="5" fill="url(#da-ctrl-alum)"/>
  <rect x="332" y="290" width="622" height="8" rx="3" fill="#5b4830"/>
  <rect x="332" y="290" width="622" height="2.5" rx="1" fill="#a08a5c" opacity="0.5"/>
  <rect x="332" y="351" width="622" height="3" fill="#0d0904" opacity="0.5"/>
  <g>
    <rect x="356" y="304" width="92" height="42" rx="4" fill="#1b140d"/>
    <rect x="362" y="310" width="80" height="30" rx="3" fill="url(#da-ctrl-meter)" opacity="0.85"/>
    <path d="M364 312 q40 -6 76 2 l0 6 q-38 -8 -76 -1 z" fill="#fff3d0" opacity="0.3"/>
    <path d="M368 336 q34 -20 68 0" fill="none" stroke="#14110d" stroke-width="1.6"/>
    <path d="M420 334 l-14 -20" stroke="#14110d" stroke-width="2.4" stroke-linecap="round" class="fx-needle" style="--d:0s"/>
    <path d="M424 314 l14 4" stroke="#a8352a" stroke-width="3"/>
    <rect x="470" y="304" width="92" height="42" rx="4" fill="#1b140d"/>
    <rect x="476" y="310" width="80" height="30" rx="3" fill="url(#da-ctrl-meter)" opacity="0.85"/>
    <path d="M478 312 q40 -6 76 2 l0 6 q-38 -8 -76 -1 z" fill="#fff3d0" opacity="0.3"/>
    <path d="M482 336 q34 -20 68 0" fill="none" stroke="#14110d" stroke-width="1.6"/>
    <path d="M528 334 l-8 -22" stroke="#14110d" stroke-width="2.4" stroke-linecap="round" class="fx-needle" style="--d:.65s"/>
    <path d="M538 314 l14 4" stroke="#a8352a" stroke-width="3"/>
    <rect x="726" y="304" width="92" height="42" rx="4" fill="#1b140d"/>
    <rect x="732" y="310" width="80" height="30" rx="3" fill="url(#da-ctrl-meter)" opacity="0.62"/>
    <path d="M734 312 q40 -6 76 2 l0 6 q-38 -8 -76 -1 z" fill="#fff3d0" opacity="0.26"/>
    <path d="M738 336 q34 -20 68 0" fill="none" stroke="#14110d" stroke-width="1.6"/>
    <path d="M772 334 l-24 -14" stroke="#14110d" stroke-width="2.4" stroke-linecap="round" class="fx-needle" style="--d:1.45s"/>
    <path d="M794 314 l14 4" stroke="#a8352a" stroke-width="3"/>
    <rect x="840" y="304" width="92" height="42" rx="4" fill="#1b140d"/>
    <rect x="846" y="310" width="80" height="30" rx="3" fill="url(#da-ctrl-meter)" opacity="0.62"/>
    <path d="M848 312 q40 -6 76 2 l0 6 q-38 -8 -76 -1 z" fill="#fff3d0" opacity="0.26"/>
    <path d="M852 336 q34 -20 68 0" fill="none" stroke="#14110d" stroke-width="1.6"/>
    <path d="M886 334 l-24 -14" stroke="#14110d" stroke-width="2.4" stroke-linecap="round" class="fx-needle" style="--d:2.3s"/>
    <path d="M908 314 l14 4" stroke="#a8352a" stroke-width="3"/>
  </g>
  <path d="M336 354 L950 354 L982 452 L306 452 Z" fill="url(#da-ctrl-board)"/>
  <path d="M336 354 L950 354 L952 362 L334 362 Z" fill="#6b5326"/>
  <path d="M336 354 L950 354 L951 357 L335 357 Z" fill="#a08a5c" opacity="0.5"/>
  <ellipse cx="748" cy="404" rx="250" ry="56" fill="#ffd98a" opacity="0.07"/>
  <ellipse cx="742" cy="398" rx="150" ry="34" fill="#ffd98a" opacity="0.05"/>
  <path d="M306 452 L982 452 L982 474 L306 474 Z" fill="#241b12"/>
  <path d="M306 474 L982 474 L974 486 L314 486 Z" fill="#14110d"/>
  <g fill="url(#da-ctrl-knob)" stroke="#8a6f39" stroke-width="1.5">
    <circle cx="360" cy="380" r="10"/><circle cx="396" cy="380" r="10"/><circle cx="432" cy="380" r="10"/><circle cx="468" cy="380" r="10"/><circle cx="504" cy="380" r="10"/><circle cx="540" cy="380" r="10"/><circle cx="576" cy="380" r="10"/><circle cx="612" cy="380" r="10"/><circle cx="648" cy="380" r="10"/><circle cx="684" cy="380" r="10"/><circle cx="720" cy="380" r="10"/><circle cx="756" cy="380" r="10"/><circle cx="792" cy="380" r="10"/><circle cx="828" cy="380" r="10"/><circle cx="864" cy="380" r="10"/><circle cx="900" cy="380" r="10"/>
    <circle cx="356" cy="412" r="11"/><circle cx="394" cy="412" r="11"/><circle cx="432" cy="412" r="11"/><circle cx="470" cy="412" r="11"/><circle cx="508" cy="412" r="11"/><circle cx="546" cy="412" r="11"/><circle cx="584" cy="412" r="11"/><circle cx="622" cy="412" r="11"/><circle cx="660" cy="412" r="11"/><circle cx="698" cy="412" r="11"/><circle cx="736" cy="412" r="11"/><circle cx="774" cy="412" r="11"/><circle cx="812" cy="412" r="11"/><circle cx="850" cy="412" r="11"/><circle cx="888" cy="412" r="11"/><circle cx="926" cy="412" r="11"/>
  </g>
  <g stroke="#e3d5ac" stroke-width="2" stroke-linecap="round" opacity="0.8">
    <line x1="360" y1="380" x2="354" y2="372"/><line x1="396" y1="380" x2="402" y2="372"/><line x1="432" y1="380" x2="426" y2="373"/><line x1="468" y1="380" x2="474" y2="372"/>
    <line x1="504" y1="380" x2="498" y2="372"/><line x1="540" y1="380" x2="546" y2="373"/><line x1="576" y1="380" x2="570" y2="372"/><line x1="612" y1="380" x2="618" y2="372"/>
    <line x1="648" y1="380" x2="642" y2="373"/><line x1="684" y1="380" x2="690" y2="372"/><line x1="720" y1="380" x2="714" y2="372"/><line x1="756" y1="380" x2="762" y2="373"/>
    <line x1="792" y1="380" x2="786" y2="372"/><line x1="828" y1="380" x2="834" y2="372"/><line x1="864" y1="380" x2="858" y2="373"/><line x1="900" y1="380" x2="906" y2="372"/>
    <line x1="356" y1="412" x2="350" y2="403"/><line x1="394" y1="412" x2="400" y2="403"/><line x1="432" y1="412" x2="426" y2="404"/><line x1="470" y1="412" x2="476" y2="403"/>
    <line x1="508" y1="412" x2="502" y2="403"/><line x1="546" y1="412" x2="552" y2="404"/><line x1="584" y1="412" x2="578" y2="403"/><line x1="622" y1="412" x2="628" y2="403"/>
    <line x1="660" y1="412" x2="654" y2="404"/><line x1="698" y1="412" x2="704" y2="403"/><line x1="736" y1="412" x2="730" y2="403"/><line x1="774" y1="412" x2="780" y2="404"/>
    <line x1="812" y1="412" x2="806" y2="403"/><line x1="850" y1="412" x2="856" y2="403"/><line x1="888" y1="412" x2="882" y2="404"/><line x1="926" y1="412" x2="932" y2="403"/>
  </g>
  <g fill="#14110d">
    <rect x="374" y="430" width="14" height="34" rx="4"/><rect x="424" y="430" width="14" height="34" rx="4"/>
    <rect x="474" y="430" width="14" height="34" rx="4"/><rect x="524" y="430" width="14" height="34" rx="4"/>
    <rect x="574" y="430" width="14" height="34" rx="4"/><rect x="624" y="430" width="14" height="34" rx="4"/>
  </g>
  <g fill="#a8894a">
    <rect x="368" y="440" width="26" height="9" rx="3"/><rect x="418" y="446" width="26" height="9" rx="3"/>
    <rect x="468" y="436" width="26" height="9" rx="3"/><rect x="518" y="444" width="26" height="9" rx="3"/>
    <rect x="568" y="438" width="26" height="9" rx="3"/><rect x="618" y="448" width="26" height="9" rx="3"/>
  </g>
</g>

<!-- THE CUE SHEET on its clipboard, timed to the second -->
<rect x="600" y="300" width="330" height="230" fill="url(#da-ctrl-lamp)"/>
<g transform="rotate(-7 730 396)">
  <rect x="688" y="348" width="108" height="128" rx="4" fill="#0d0904" opacity="0.42"/>
  <rect x="678" y="336" width="108" height="128" rx="4" fill="#33271a"/>
  <rect x="678" y="336" width="108" height="4" rx="2" fill="#7a6440" opacity="0.5"/>
  <rect x="684" y="344" width="96" height="114" fill="#f0e7ce"/>
  <rect x="684" y="344" width="96" height="114" fill="#d9a441" opacity="0.12"/>
  <g stroke="#8d7c62" stroke-width="1.5">
    <line x1="692" y1="358" x2="748" y2="358"/><line x1="692" y1="368" x2="770" y2="368"/>
    <line x1="692" y1="378" x2="742" y2="378"/><line x1="692" y1="388" x2="770" y2="388"/>
    <line x1="692" y1="398" x2="754" y2="398"/><line x1="692" y1="408" x2="770" y2="408"/>
    <line x1="692" y1="418" x2="736" y2="418"/><line x1="692" y1="428" x2="766" y2="428"/>
    <line x1="692" y1="438" x2="750" y2="438"/><line x1="692" y1="448" x2="770" y2="448"/>
  </g>
  <line x1="726" y1="350" x2="726" y2="454" stroke="#b9a87e" stroke-width="1.2"/>
  <rect x="688" y="404" width="84" height="12" fill="#a8352a" opacity="0.25"/>
  <line x1="690" y1="410" x2="774" y2="410" stroke="#a8352a" stroke-width="2.4"/>
  <rect x="710" y="330" width="46" height="16" rx="4" fill="#8e8e88"/>
  <rect x="718" y="326" width="30" height="8" rx="3" fill="#6b6558"/>
</g>

<!-- Dorothy Lange, at her board, upright, watching the empty studio -->
<g>
  <path d="M452 470 L452 356 q8 -34 42 -38 l84 0 q34 4 42 38 l0 114 z" fill="#2a2016"/>
  <path d="M462 466 L462 362 q6 -26 34 -30 l80 0 q28 4 34 30 l0 104 z" fill="#3b2f22"/>
  <g fill="none" stroke="#2a2016" stroke-width="3" opacity="0.9">
    <path d="M478 384 l84 0"/><path d="M472 412 l96 0"/><path d="M472 440 l96 0"/>
  </g>
  <rect x="522" y="470" width="30" height="56" fill="#241b12"/>
  <ellipse cx="537" cy="534" rx="60" ry="16" fill="#1b140d"/>
  <ellipse cx="537" cy="528" rx="46" ry="11" fill="#2a2016"/>
  <path d="M468 486 L476 414 q7 -24 32 -32 l58 0 q25 8 32 32 L604 486 z" fill="#2b2f2c"/>
  <path d="M476 414 q7 -24 32 -32 l58 0 q25 8 32 32 l-4 12 q-10 -26 -30 -32 l-54 0 q-20 6 -30 32 z" fill="#3a423b"/>
  <path d="M506 384 q30 -12 60 0 l-6 16 q-24 -10 -48 0 z" fill="#e3d5ac"/>
  <path d="M512 398 q24 -9 48 0 l-4 10 q-20 -8 -40 0 z" fill="#cdbc93"/>
  <rect x="518" y="342" width="38" height="48" fill="#a08e73"/>
  <rect x="518" y="342" width="13" height="48" fill="#7d6d55" opacity="0.7"/>
  <rect x="518" y="342" width="38" height="12" fill="#14110d" opacity="0.35"/>
  <path d="M508 300 q-14 44 2 66 l16 -6 q-12 -26 -6 -58 z" fill="#241b12"/>
  <path d="M566 300 q14 44 -2 66 l-16 -6 q12 -26 6 -58 z" fill="#241b12"/>
  <ellipse cx="537" cy="308" rx="33" ry="37" fill="#241b12"/>
  <path d="M506 296 q31 -32 62 0 q6 -36 -31 -36 q-37 0 -31 36 z" fill="#33271a"/>
  <ellipse cx="537" cy="348" rx="26" ry="16" fill="#2f2417"/>
  <ellipse cx="537" cy="346" rx="17" ry="10" fill="#3f3223"/>
  <g fill="none" stroke="#4a3b28" stroke-width="2" opacity="0.75">
    <path d="M514 280 q23 -14 46 0"/><path d="M509 294 q28 -16 56 0"/>
  </g>
  <path d="M506 322 q31 18 62 0" fill="none" stroke="#14110d" stroke-width="3" opacity="0.6"/>
  <!-- arms down to the board; her hands rest flat where they always rest -->
  <path d="M486 414 q-30 22 -26 58 l28 4 q0 -34 22 -48 z" fill="#2b2f2c"/>
  <path d="M588 414 q30 22 26 58 l-28 4 q0 -34 -22 -48 z" fill="#2b2f2c"/>
  <ellipse cx="478" cy="466" rx="21" ry="10" fill="#b3a184"/>
  <ellipse cx="596" cy="466" rx="21" ry="10" fill="#b3a184"/>
  <g stroke="#8d7c62" stroke-width="1.4" stroke-linecap="round">
    <line x1="466" y1="468" x2="488" y2="472"/><line x1="468" y1="463" x2="490" y2="466"/>
    <line x1="584" y1="468" x2="606" y2="472"/><line x1="586" y1="463" x2="608" y2="466"/>
  </g>
</g>

<!-- the gooseneck over the board: the only lamp anyone left burning -->
<g>
  <rect x="622" y="278" width="32" height="14" rx="4" fill="#3b2f22"/>
  <path d="M638 278 q4 -46 52 -52" fill="none" stroke="#4a3b28" stroke-width="6"/>
  <path d="M690 226 q26 -2 32 14" fill="none" stroke="#4a3b28" stroke-width="6"/>
  <path d="M700 232 q30 -14 42 16 l-20 12 q-12 -22 -28 -14 z" fill="#5f6b4a"/>
  <path d="M700 232 q30 -14 42 16 l-6 4 q-12 -20 -32 -12 z" fill="#7d8a62"/>
  <path d="M704 231 q24 -10 34 12" fill="none" stroke="#a8b48b" stroke-width="1.8" opacity="0.55"/>
  <path d="M712 254 q14 -6 26 4" fill="none" stroke="#ffd98a" stroke-width="2" opacity="0.5"/>
  <g class="fx-glow" style="--d:.9s"><ellipse cx="726" cy="256" rx="18" ry="7" fill="#ffd98a" opacity="0.65"/></g>
  <g class="fx-glow" style="--d:2.4s"><ellipse cx="742" cy="352" rx="110" ry="76" fill="#ffd98a" opacity="0.09"/></g>
</g>

<!-- her cue watch, face up on the board -->
<g>
  <ellipse cx="862" cy="454" rx="20" ry="9" fill="#0d0904" opacity="0.45"/>
  <circle cx="856" cy="446" r="17" fill="#241b12"/>
  <circle cx="856" cy="446" r="17" fill="url(#da-ctrl-steel)" opacity="0.4"/>
  <circle cx="856" cy="446" r="12" fill="#e3d5ac"/>
  <circle cx="856" cy="446" r="12" fill="#14110d" opacity="0.2"/>
  <line x1="856" y1="446" x2="856" y2="437" stroke="#241b12" stroke-width="2"/>
  <line x1="856" y1="446" x2="864" y2="450" stroke="#a8352a" stroke-width="1.6"/>
  <rect x="852" y="426" width="8" height="6" rx="2" fill="#9b7a3f"/>
  <path d="M868 442 q26 -8 44 4" fill="none" stroke="#9b7a3f" stroke-width="2.5"/>
  <path d="M847 438 q9 -5 18 0" fill="none" stroke="#fff3d0" stroke-width="1.6" opacity="0.4"/>
</g>

<!-- foreground: floor cable run and the corner of a floor rack -->
<g>
  <path d="M0 556 q160 -40 300 -6 q140 34 300 -8 q160 -42 400 4" fill="none" stroke="#241b12" stroke-width="9"/>
  <path d="M0 570 q180 -34 340 4 q150 36 340 -14" fill="none" stroke="#2f2519" stroke-width="7"/>
  <path d="M0 558 q160 -40 300 -6" fill="none" stroke="#3b2f22" stroke-width="2" opacity="0.7"/>
  <rect x="0" y="486" width="120" height="134" fill="#181209"/>
  <rect x="0" y="486" width="120" height="134" fill="url(#da-ctrl-rack)" opacity="0.6"/>
  <rect x="0" y="486" width="120" height="10" fill="#2f2519"/>
  <rect x="0" y="486" width="120" height="3" fill="#6b5326" opacity="0.45"/>
  <rect x="108" y="486" width="12" height="134" fill="#0d0904" opacity="0.5"/>
  <g fill="#8e8e88" opacity="0.4"><circle cx="8" cy="510" r="2.6"/><circle cx="8" cy="546" r="2.6"/><circle cx="8" cy="590" r="2.6"/></g>
  <g fill="none" stroke="#33271a" stroke-width="3">
    <rect x="14" y="506" width="92" height="34"/><rect x="14" y="550" width="92" height="34"/>
  </g>
  <g fill="#d9a441" opacity="0.5">
    <circle cx="34" cy="523" r="5"/><circle cx="54" cy="523" r="5"/>
  </g>
  <rect x="880" y="500" width="120" height="120" fill="#181209"/>
  <rect x="880" y="500" width="120" height="120" fill="url(#da-ctrl-rack)" opacity="0.55"/>
  <rect x="880" y="500" width="120" height="4" fill="#5b4830" opacity="0.45"/>
  <rect x="880" y="500" width="10" height="120" fill="#3b2f22" opacity="0.4"/>
  <g fill="#8e8e88" opacity="0.35"><circle cx="886" cy="524" r="2.6"/><circle cx="886" cy="574" r="2.6"/></g>
  <g fill="none" stroke="#2f2519" stroke-width="3">
    <rect x="896" y="516" width="90" height="40"/><rect x="896" y="566" width="90" height="40"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#da-ctrl-vig)"/>
`,
  },

  shop: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_toolwall: { x: 43, y: 29 },
      h_keylog: { x: 82, y: 41 },
      h_schematics: { x: 64, y: 63 },
    },
    svg: `
<defs>
  <linearGradient id="da-shop-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#382c1f"/><stop offset="1" stop-color="#171209"/>
  </linearGradient>
  <linearGradient id="da-shop-board" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3b28"/><stop offset="1" stop-color="#2f2519"/>
  </linearGradient>
  <linearGradient id="da-shop-bench" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5b4830"/><stop offset="1" stop-color="#33271a"/>
  </linearGradient>
  <linearGradient id="da-shop-tube" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#161d21"/><stop offset="0.14" stop-color="#63767c"/>
    <stop offset="0.26" stop-color="#9fb2b8"/><stop offset="0.42" stop-color="#39474d"/>
    <stop offset="0.68" stop-color="#232c31"/><stop offset="0.86" stop-color="#54666c"/>
    <stop offset="1" stop-color="#131a1e"/>
  </linearGradient>
  <linearGradient id="da-shop-base" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#120d07"/><stop offset="0.2" stop-color="#3e3120"/>
    <stop offset="0.45" stop-color="#241b12"/><stop offset="0.8" stop-color="#14100a"/>
    <stop offset="1" stop-color="#2b2116"/>
  </linearGradient>
  <linearGradient id="da-shop-ply" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#5b4830"/><stop offset="0.45" stop-color="#453521"/><stop offset="1" stop-color="#2a2014"/>
  </linearGradient>
  <linearGradient id="da-shop-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2115"/><stop offset="0.4" stop-color="#1a140d"/><stop offset="1" stop-color="#0f0b06"/>
  </linearGradient>
  <linearGradient id="da-shop-steel" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2f2f2a"/><stop offset="0.22" stop-color="#b0a998"/>
    <stop offset="0.48" stop-color="#5f5b50"/><stop offset="0.76" stop-color="#cfc7b4"/>
    <stop offset="1" stop-color="#38352e"/>
  </linearGradient>
  <linearGradient id="da-shop-door" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#413425"/><stop offset="0.3" stop-color="#2f2519"/>
    <stop offset="0.7" stop-color="#241b12"/><stop offset="1" stop-color="#170f08"/>
  </linearGradient>
  <linearGradient id="da-shop-brass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a3617"/><stop offset="0.3" stop-color="#c9a256"/>
    <stop offset="0.6" stop-color="#7e6229"/><stop offset="1" stop-color="#3a2b12"/>
  </linearGradient>
  <linearGradient id="da-shop-enamel" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#f4ecd4"/><stop offset="0.5" stop-color="#d7c8a0"/><stop offset="1" stop-color="#8f8160"/>
  </linearGradient>
  <radialGradient id="da-shop-glow" cx="0.47" cy="0.46" r="0.66">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.30"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-shop-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.44"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-shop-vig" cx="0.48" cy="0.46" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#da-shop-wall)"/>
<rect width="1000" height="620" fill="url(#da-shop-glow)"/>

<!-- back wall boards and floor -->
<g stroke="#2a2016" stroke-width="3">
  <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="200" x2="1000" y2="200"/><line x1="0" y1="340" x2="1000" y2="340"/>
</g>
<g stroke="#4e3d28" stroke-width="1.1" opacity="0.42">
  <line x1="0" y1="57" x2="1000" y2="57"/><line x1="0" y1="197" x2="1000" y2="197"/><line x1="0" y1="337" x2="1000" y2="337"/>
</g>
<g stroke="#241b12" stroke-width="2" opacity="0.55">
  <line x1="164" y1="0" x2="164" y2="60"/><line x1="466" y1="60" x2="466" y2="200"/><line x1="756" y1="0" x2="756" y2="60"/>
  <line x1="290" y1="200" x2="290" y2="340"/><line x1="612" y1="340" x2="612" y2="462"/><line x1="884" y1="200" x2="884" y2="340"/>
</g>
<!-- conduit down the far wall, with a junction box -->
<g>
  <rect x="946" y="0" width="8" height="90" fill="#2a2016"/>
  <rect x="946" y="0" width="2.5" height="90" fill="#57452e" opacity="0.6"/>
  <rect x="932" y="20" width="36" height="30" rx="3" fill="#33271a"/>
  <rect x="936" y="24" width="28" height="22" rx="2" fill="#1b140d"/>
  <g fill="#6b5326" opacity="0.7"><circle cx="938" cy="23" r="1.8"/><circle cx="962" cy="23" r="1.8"/><circle cx="938" cy="47" r="1.8"/><circle cx="962" cy="47" r="1.8"/></g>
</g>
<!-- the far corners lose contrast and go hazy -->
<path d="M0 0 L96 0 L96 470 L0 470 Z" fill="#0b0803" opacity="0.3"/>
<path d="M0 0 L1000 0 L1000 62 L0 62 Z" fill="#0b0803" opacity="0.24"/>
<rect x="0" y="470" width="1000" height="150" fill="url(#da-shop-floor)"/>
<rect x="0" y="462" width="1000" height="10" fill="#3d2f1e"/>
<rect x="0" y="462" width="1000" height="3" fill="#6a5433" opacity="0.55"/>
<rect x="0" y="470" width="1000" height="4" fill="#0d0904" opacity="0.6"/>
<g stroke="#241b12" stroke-width="2.5">
  <line x1="0" y1="508" x2="1000" y2="508"/><line x1="0" y1="552" x2="1000" y2="552"/><line x1="0" y1="600" x2="1000" y2="600"/>
</g>
<g stroke="#4a3b28" stroke-width="1" opacity="0.35">
  <line x1="0" y1="505" x2="1000" y2="505"/><line x1="0" y1="549" x2="1000" y2="549"/><line x1="0" y1="597" x2="1000" y2="597"/>
</g>
<g stroke="#120d07" stroke-width="2" opacity="0.6">
  <line x1="242" y1="474" x2="242" y2="508"/><line x1="688" y1="508" x2="688" y2="552"/><line x1="410" y1="552" x2="410" y2="600"/><line x1="884" y1="474" x2="884" y2="508"/>
</g>
<ellipse cx="546" cy="546" rx="330" ry="92" fill="#d9a441" opacity="0.06"/>
<ellipse cx="546" cy="536" rx="200" ry="56" fill="#ffd98a" opacity="0.045"/>
<!-- cable stapled along the skirting, and a floor outlet -->
<g>
  <path d="M0 486 q140 10 276 2 q150 -8 288 6 q160 12 300 -6 q70 -8 136 2" fill="none" stroke="#14110d" stroke-width="5"/>
  <path d="M0 484 q140 10 276 2 q150 -8 288 6" fill="none" stroke="#3b2f22" stroke-width="1.4" opacity="0.55"/>
  <g fill="#33271a"><rect x="158" y="479" width="6" height="13" rx="2"/><rect x="520" y="483" width="6" height="13" rx="2"/><rect x="860" y="479" width="6" height="13" rx="2"/></g>
</g>

<!-- shelves of spare valves, filaments still warm -->
<g>
  <rect x="24" y="60" width="254" height="272" fill="#241b12"/>
  <rect x="24" y="60" width="254" height="272" fill="url(#da-shop-floor)" opacity="0.5"/>
  <rect x="24" y="60" width="14" height="272" fill="#0d0904" opacity="0.45"/>
  <rect x="264" y="60" width="14" height="272" fill="#0d0904" opacity="0.3"/>
  <rect x="24" y="60" width="254" height="10" fill="#4a3b28"/>
  <rect x="24" y="60" width="254" height="3" fill="#7a6440" opacity="0.55"/>
  <rect x="24" y="70" width="254" height="5" fill="#100c06" opacity="0.6"/>
  <!-- valves standing on the shelf boards, each with its own footprint -->
  <g fill="#0d0904" opacity="0.5">
    <ellipse cx="59" cy="147" rx="19" ry="4"/><ellipse cx="109" cy="147" rx="22" ry="4.5"/><ellipse cx="160" cy="147" rx="18" ry="4"/><ellipse cx="208" cy="147" rx="20" ry="4.2"/><ellipse cx="253" cy="147" rx="17" ry="3.8"/>
    <ellipse cx="60" cy="233" rx="20" ry="4.2"/><ellipse cx="110" cy="233" rx="18" ry="4"/><ellipse cx="163" cy="233" rx="22" ry="4.5"/><ellipse cx="137" cy="318" rx="19" ry="4"/>
  </g>
  <g fill="#3b2f22">
    <rect x="28" y="146" width="246" height="10"/><rect x="28" y="232" width="246" height="10"/><rect x="28" y="318" width="246" height="14"/>
  </g>
  <g fill="#7a6440" opacity="0.45">
    <rect x="28" y="146" width="246" height="2.5"/><rect x="28" y="232" width="246" height="2.5"/><rect x="28" y="318" width="246" height="3"/>
  </g>
  <g fill="#0d0904" opacity="0.55">
    <rect x="28" y="154" width="246" height="4"/><rect x="28" y="240" width="246" height="4"/><rect x="28" y="330" width="246" height="4"/>
  </g>
  <g>
    <rect x="44" y="98" width="30" height="48" rx="13" fill="url(#da-shop-tube)"/>
    <ellipse cx="59" cy="104" rx="9.9" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M51.2 107 l0 28" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="44" y="132" width="30" height="16" rx="4" fill="url(#da-shop-base)"/>
    <line x1="59" y1="108" x2="59" y2="132" stroke="#d9a441" stroke-width="3"/>
    <ellipse cx="59" cy="122" rx="11" ry="16" fill="#ffd98a" opacity="0.35"/>
    <circle cx="59" cy="94" r="4" fill="#4a5a5f"/>
    <rect x="92" y="86" width="34" height="60" rx="15" fill="url(#da-shop-tube)"/>
    <ellipse cx="109" cy="92" rx="11.22" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M100.16 95 l0 40" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="92" y="130" width="34" height="18" rx="4" fill="url(#da-shop-base)"/>
    <g class="fx-ember" style="--d:.95s">
      <line x1="109" y1="98" x2="109" y2="130" stroke="#d9a441" stroke-width="3"/>
      <ellipse cx="109" cy="116" rx="13" ry="20" fill="#ffd98a" opacity="0.4"/>
    </g>
    <circle cx="109" cy="82" r="4" fill="#4a5a5f"/>
    <rect x="146" y="100" width="28" height="46" rx="12" fill="url(#da-shop-tube)"/>
    <ellipse cx="160" cy="106" rx="9.24" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M152.72 109 l0 26" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="146" y="132" width="28" height="16" rx="4" fill="url(#da-shop-base)"/>
    <line x1="160" y1="110" x2="160" y2="132" stroke="#d9a441" stroke-width="3"/>
    <ellipse cx="160" cy="122" rx="10" ry="15" fill="#ffd98a" opacity="0.3"/>
    <rect x="192" y="92" width="32" height="54" rx="14" fill="url(#da-shop-tube)"/>
    <ellipse cx="208" cy="98" rx="10.56" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M199.68 101 l0 34" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="192" y="130" width="32" height="18" rx="4" fill="url(#da-shop-base)"/>
    <line x1="208" y1="102" x2="208" y2="130" stroke="#d9a441" stroke-width="3"/>
    <ellipse cx="208" cy="118" rx="12" ry="18" fill="#ffd98a" opacity="0.38"/>
    <rect x="240" y="104" width="26" height="42" rx="12" fill="url(#da-shop-tube)"/>
    <ellipse cx="253" cy="110" rx="8.58" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M246.24 113 l0 22" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="240" y="132" width="26" height="15" rx="4" fill="url(#da-shop-base)"/>
    <line x1="253" y1="114" x2="253" y2="132" stroke="#d9a441" stroke-width="2.5"/>
  </g>
  <g>
    <rect x="44" y="182" width="32" height="50" rx="14" fill="url(#da-shop-tube)"/>
    <ellipse cx="60" cy="188" rx="10.56" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M51.68 191 l0 30" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="44" y="216" width="32" height="18" rx="4" fill="url(#da-shop-base)"/>
    <line x1="60" y1="192" x2="60" y2="216" stroke="#d9a441" stroke-width="3"/>
    <ellipse cx="60" cy="206" rx="12" ry="17" fill="#ffd98a" opacity="0.36"/>
    <rect x="96" y="190" width="28" height="42" rx="12" fill="url(#da-shop-tube)"/>
    <ellipse cx="110" cy="196" rx="9.24" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M102.72 199 l0 22" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="96" y="218" width="28" height="16" rx="4" fill="url(#da-shop-base)"/>
    <line x1="110" y1="200" x2="110" y2="218" stroke="#d9a441" stroke-width="2.5"/>
    <rect x="146" y="176" width="34" height="56" rx="15" fill="url(#da-shop-tube)"/>
    <ellipse cx="163" cy="182" rx="11.22" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M154.16 185 l0 36" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="146" y="216" width="34" height="18" rx="4" fill="url(#da-shop-base)"/>
    <g class="fx-ember" style="--d:2.1s">
      <line x1="163" y1="188" x2="163" y2="216" stroke="#d9a441" stroke-width="3"/>
      <ellipse cx="163" cy="204" rx="13" ry="19" fill="#ffd98a" opacity="0.42"/>
    </g>
    <rect x="200" y="196" width="66" height="36" fill="#33271a"/>
    <rect x="206" y="202" width="54" height="24" fill="#241b12"/>
    <g stroke="#4a3b28" stroke-width="2"><line x1="216" y1="202" x2="216" y2="226"/><line x1="234" y1="202" x2="234" y2="226"/><line x1="250" y1="202" x2="250" y2="226"/></g>
  </g>
  <g>
    <rect x="40" y="272" width="70" height="46" fill="#33271a"/>
    <rect x="46" y="278" width="58" height="34" fill="#241b12"/>
    <rect x="122" y="266" width="30" height="52" rx="13" fill="url(#da-shop-tube)"/>
    <ellipse cx="137" cy="272" rx="9.9" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M129.2 275 l0 32" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <rect x="122" y="302" width="30" height="16" rx="4" fill="url(#da-shop-base)"/>
    <line x1="137" y1="278" x2="137" y2="302" stroke="#d9a441" stroke-width="3"/>
    <ellipse cx="137" cy="290" rx="11" ry="16" fill="#ffd98a" opacity="0.34"/>
    <rect x="170" y="280" width="96" height="38" fill="#2f2519"/>
    <g stroke="#4a3b28" stroke-width="2.5"><line x1="170" y1="292" x2="266" y2="292"/><line x1="170" y1="306" x2="266" y2="306"/></g>
  </g>
</g>

<!-- THE SHADOW BOARD: an outline painted for every tool. One outline is empty. -->
<g>
  <rect x="308" y="80" width="424" height="268" fill="#0d0904" opacity="0.4"/>
  <rect x="300" y="72" width="424" height="268" fill="url(#da-shop-ply)"/>
  <rect x="300" y="72" width="424" height="4" fill="#8a6f43" opacity="0.45"/>
  <rect x="300" y="332" width="424" height="8" fill="#0d0904" opacity="0.45"/>
  <rect x="716" y="72" width="8" height="268" fill="#0d0904" opacity="0.4"/>
  <rect x="300" y="72" width="424" height="268" fill="none" stroke="#241b12" stroke-width="6"/>
  <g stroke="#241b12" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 22" opacity="0.85">
    <line x1="314" y1="92" x2="712" y2="92"/><line x1="314" y1="114" x2="712" y2="114"/><line x1="314" y1="136" x2="712" y2="136"/>
    <line x1="314" y1="158" x2="712" y2="158"/><line x1="314" y1="180" x2="712" y2="180"/><line x1="314" y1="202" x2="712" y2="202"/>
    <line x1="314" y1="224" x2="712" y2="224"/><line x1="314" y1="246" x2="712" y2="246"/><line x1="314" y1="268" x2="712" y2="268"/>
    <line x1="314" y1="290" x2="712" y2="290"/><line x1="314" y1="312" x2="712" y2="312"/>
  </g>
  <!-- painted outlines -->
  <g fill="#6f5c3c" opacity="0.55">
    <path d="M322 106 l44 0 l0 16 l-14 0 l0 84 l-14 0 l0 -84 l-16 0 z"/>
    <path d="M382 108 l30 0 l6 34 l-8 60 l-26 0 l-8 -60 z"/>
    <path d="M556 104 l16 0 l0 22 l6 0 l0 76 l-28 0 l0 -76 l6 0 z"/>
    <path d="M598 104 l16 0 l0 22 l6 0 l0 76 l-28 0 l0 -76 l6 0 z"/>
    <path d="M640 104 l16 0 l0 22 l6 0 l0 76 l-28 0 l0 -76 l6 0 z"/>
    <path d="M686 108 l24 0 l0 96 l-24 0 z"/>
    <path d="M330 244 l72 0 l0 62 l-72 0 z"/>
    <path d="M424 244 l60 0 l0 62 l-60 0 z"/>
    <path d="M508 246 l58 0 l0 58 l-58 0 z"/>
    <path d="M594 244 l52 0 l0 62 l-52 0 z"/>
  </g>
  <!-- the tools, hanging where they belong -->
  <g>
    <rect x="337" y="122" width="14" height="84" rx="4" fill="#5b4830"/>
    <path d="M322 106 l44 0 l0 18 l-16 0 l-4 -8 l-8 0 l-4 8 l-12 0 z" fill="#3a3a34"/>
    <rect x="337" y="122" width="5" height="84" fill="#7a6440" opacity="0.7"/>
  </g>
  <g>
    <path d="M382 110 l30 0 l5 32 l-7 58 l-26 0 l-7 -58 z" fill="#4a4a44"/>
    <path d="M389 118 l16 0 l3 24 l-4 50 l-14 0 l-4 -50 z" fill="#33332e"/>
    <rect x="386" y="168" width="22" height="26" rx="6" fill="#5d1f18"/>
  </g>
  <g fill="url(#da-shop-steel)">
    <rect x="560" y="106" width="8" height="24"/><rect x="556" y="130" width="16" height="72" rx="4"/>
    <rect x="602" y="106" width="8" height="24"/><rect x="598" y="130" width="16" height="72" rx="4"/>
    <rect x="644" y="106" width="8" height="24"/><rect x="640" y="130" width="16" height="72" rx="4"/>
  </g>
  <g fill="#5d1f18">
    <rect x="556" y="156" width="16" height="46" rx="4"/><rect x="598" y="156" width="16" height="46" rx="4"/><rect x="640" y="156" width="16" height="46" rx="4"/>
  </g>
  <g>
    <rect x="688" y="110" width="20" height="92" rx="6" fill="#4a4a44"/>
    <rect x="688" y="110" width="7" height="92" fill="#6b6b62" opacity="0.7"/>
    <rect x="684" y="150" width="28" height="16" rx="4" fill="#33332e"/>
  </g>
  <g>
    <rect x="334" y="248" width="64" height="54" rx="4" fill="#4a4a44"/>
    <rect x="342" y="256" width="48" height="38" rx="3" fill="#33332e"/>
    <circle cx="366" cy="275" r="10" fill="#5b4830"/>
  </g>
  <g>
    <path d="M428 250 l52 0 l0 20 l-20 0 l0 32 l-14 0 l0 -32 l-18 0 z" fill="#4a4a44"/>
    <rect x="446" y="270" width="14" height="32" fill="#5b4830"/>
  </g>
  <g>
    <ellipse cx="537" cy="276" rx="26" ry="26" fill="none" stroke="#9b7a3f" stroke-width="9"/>
    <ellipse cx="537" cy="276" rx="26" ry="26" fill="none" stroke="#c98a3a" stroke-width="3"/>
    <path d="M512 268 l50 0" stroke="#9b7a3f" stroke-width="4"/>
  </g>
  <g>
    <rect x="600" y="250" width="40" height="52" rx="5" fill="#3a3a34"/>
    <rect x="608" y="258" width="24" height="36" rx="3" fill="#4a4a44"/>
    <rect x="614" y="242" width="12" height="10" fill="#5b4830"/>
  </g>
  <!-- ONE OUTLINE EMPTY: the close-work nips, gone for a walk -->
  <g>
    <path d="M430 112 L442 112 L452 146 L464 200 L448 206 L436 158 L424 206 L408 200 L420 146 Z" fill="#2a2016"/>
    <path d="M430 112 L442 112 L452 146 L464 200 L448 206 L436 158 L424 206 L408 200 L420 146 Z" fill="none" stroke="#f0e7ce" stroke-width="3"/>
    <circle cx="436" cy="150" r="7" fill="none" stroke="#f0e7ce" stroke-width="2.4"/>
    <path d="M432 114 l0 26" stroke="#f0e7ce" stroke-width="1.6" opacity="0.55"/>
    <path d="M440 114 l0 26" stroke="#f0e7ce" stroke-width="1.6" opacity="0.55"/>
    <path d="M412 100 q24 -14 48 0" fill="none" stroke="#9b7a3f" stroke-width="4"/>
    <circle cx="436" cy="96" r="4" fill="#9b7a3f"/>
    <ellipse cx="436" cy="180" rx="52" ry="52" fill="#ffd98a" opacity="0.07"/>
  </g>
</g>

<!-- the door, and the key sign-out sheet beside it -->
<g>
  <rect x="852" y="88" width="148" height="382" fill="#241b12"/>
  <rect x="864" y="100" width="130" height="370" fill="url(#da-shop-door)"/>
  <rect x="864" y="100" width="130" height="3" fill="#6b5638" opacity="0.45"/>
  <g fill="none" stroke="#241b12" stroke-width="4">
    <rect x="878" y="118" width="100" height="130"/><rect x="878" y="272" width="100" height="176"/>
  </g>
  <g fill="none" stroke="#5b4830" stroke-width="1.2" opacity="0.45">
    <rect x="880" y="120" width="96" height="126"/><rect x="880" y="274" width="96" height="172"/>
  </g>
  <ellipse cx="886" cy="326" rx="16" ry="12" fill="#0d0904" opacity="0.4"/>
  <circle cx="884" cy="320" r="9" fill="url(#da-shop-brass)"/>
  <circle cx="881.5" cy="317.5" r="2.6" fill="#f0dca6" opacity="0.7"/>
  <rect x="876" y="336" width="16" height="22" rx="3" fill="#6b5326"/>
  <rect x="877" y="336" width="4" height="22" rx="2" fill="#a8894a" opacity="0.6"/>
  <rect x="844" y="88" width="12" height="382" fill="#4a3b28"/>
  <rect x="844" y="88" width="3" height="382" fill="#8a6f43" opacity="0.5"/>
  <g fill="#241b12" opacity="0.75">
    <path d="M856 300 l6 0 l0 42 l-6 0 z"/><path d="M856 388 l6 0 l0 26 l-6 0 z"/><path d="M990 210 l4 0 l0 54 l-4 0 z"/>
  </g>
</g>
<g>
  <rect x="776" y="196" width="106" height="140" rx="4" fill="#0d0904" opacity="0.42"/>
  <rect x="768" y="188" width="106" height="140" rx="4" fill="#33271a"/>
  <rect x="768" y="188" width="106" height="3" rx="1.5" fill="#7a6440" opacity="0.5"/>
  <rect x="774" y="196" width="94" height="126" fill="#e3d5ac"/>
  <rect x="774" y="196" width="94" height="3" fill="#fffaea" opacity="0.5"/>
  <path d="M838 196 l30 0 l0 126 l-30 0 z" fill="#7d6e50" opacity="0.14"/>
  <rect x="774" y="196" width="94" height="126" fill="#d9a441" opacity="0.1"/>
  <g stroke="#8d7c62" stroke-width="1.5">
    <line x1="782" y1="210" x2="854" y2="210"/><line x1="782" y1="222" x2="862" y2="222"/>
    <line x1="782" y1="234" x2="846" y2="234"/><line x1="782" y1="246" x2="860" y2="246"/>
    <line x1="782" y1="258" x2="850" y2="258"/><line x1="782" y1="282" x2="858" y2="282"/>
    <line x1="782" y1="294" x2="842" y2="294"/><line x1="782" y1="306" x2="860" y2="306"/>
  </g>
  <g stroke="#3b2f22" stroke-width="2.2" fill="none">
    <path d="M800 206 l6 -8 l5 10 l6 -12 l5 10 l6 -8"/>
    <path d="M800 230 l6 -9 l5 11 l6 -12 l5 9 l6 -8"/>
  </g>
  <rect x="778" y="264" width="86" height="14" fill="#a8352a" opacity="0.2"/>
  <path d="M800 272 q7 -12 14 0 q7 -12 14 0 q7 -12 14 0" fill="none" stroke="#3b2f22" stroke-width="2.4"/>
  <rect x="798" y="182" width="46" height="14" rx="4" fill="#8e8e88"/>
  <rect x="808" y="176" width="26" height="8" rx="3" fill="#6b6558"/>
  <line x1="820" y1="176" x2="820" y2="164" stroke="#4a3b28" stroke-width="3"/>
  <rect x="762" y="344" width="118" height="12" rx="3" fill="#3b2f22"/>
  <g fill="#9b7a3f">
    <path d="M778 356 l0 22 l-6 6 l6 4 l-6 4 l6 6 l0 6 l8 0 l0 -48 z"/>
    <path d="M806 356 l0 20 l-6 6 l6 4 l-6 4 l6 6 l0 8 l8 0 l0 -48 z"/>
    <path d="M834 356 l0 24 l-6 4 l6 4 l-6 4 l6 6 l0 6 l8 0 l0 -48 z"/>
    <path d="M862 356 l0 18 l-6 6 l6 4 l-6 4 l6 6 l0 10 l8 0 l0 -48 z"/>
  </g>
  <g fill="none" stroke="#9b7a3f" stroke-width="3">
    <circle cx="782" cy="352" r="6"/><circle cx="810" cy="352" r="6"/><circle cx="838" cy="352" r="6"/><circle cx="866" cy="352" r="6"/>
  </g>
</g>

<!-- the bench, orderly as a surgery -->
<rect x="300" y="240" width="520" height="300" fill="url(#da-shop-lamp)"/>
<g>
  <rect x="86" y="356" width="736" height="26" rx="4" fill="url(#da-shop-bench)"/>
  <ellipse cx="560" cy="368" rx="250" ry="24" fill="#ffd98a" opacity="0.09"/>
  <ellipse cx="562" cy="366" rx="150" ry="16" fill="#ffd98a" opacity="0.07"/>
  <g stroke="#2c2115" stroke-width="1.1" opacity="0.5">
    <path d="M96 364 q220 5 440 -2 q140 -4 280 3"/><path d="M96 374 q240 6 470 -3 q130 -4 250 4"/>
  </g>
  <g fill="#1b1209" opacity="0.55">
    <ellipse cx="330" cy="372" rx="14" ry="4"/><ellipse cx="640" cy="376" rx="9" ry="3"/><ellipse cx="470" cy="366" rx="6" ry="2.4"/>
  </g>
  <ellipse cx="682" cy="370" rx="17" ry="5" fill="none" stroke="#2a1c10" stroke-width="2.2" opacity="0.5"/>
  <rect x="86" y="356" width="736" height="7" rx="3" fill="#7a6440"/>
  <rect x="86" y="356" width="736" height="2.5" rx="1" fill="#a8895a" opacity="0.5"/>
  <rect x="86" y="382" width="736" height="12" fill="#2a2016"/>
  <ellipse cx="454" cy="492" rx="380" ry="24" fill="#0d0904" opacity="0.42"/>
  <rect x="104" y="394" width="18" height="90" fill="#33271a"/>
  <rect x="104" y="394" width="5" height="90" fill="#57452e" opacity="0.6"/>
  <rect x="786" y="394" width="18" height="90" fill="#2a2016"/>
  <rect x="786" y="394" width="4" height="90" fill="#4a3b28" opacity="0.5"/>
  <rect x="104" y="440" width="700" height="10" fill="#2a2016"/>
  <g fill="url(#da-shop-base)">
    <rect x="140" y="394" width="120" height="46"/><rect x="276" y="394" width="120" height="46"/>
  </g>
  <g fill="#6b5638" opacity="0.4"><rect x="140" y="394" width="120" height="2.5"/><rect x="276" y="394" width="120" height="2.5"/></g>
  <g fill="none" stroke="#3b2f22" stroke-width="2.5">
    <rect x="152" y="404" width="96" height="26"/><rect x="288" y="404" width="96" height="26"/>
  </g>
  <g fill="#9b7a3f">
    <circle cx="200" cy="417" r="4"/><circle cx="336" cy="417" r="4"/>
  </g>
  <g fill="#2f2519">
    <rect x="430" y="450" width="90" height="34"/><rect x="540" y="450" width="90" height="34"/><rect x="650" y="450" width="90" height="34"/>
  </g>
</g>

<!-- on the bench: a chassis half-built, solder, the iron still in its stand -->
<g>
  <ellipse cx="256" cy="358" rx="86" ry="9" fill="#0d0904" opacity="0.4"/>
  <rect x="180" y="316" width="150" height="40" fill="#33271a"/>
  <rect x="180" y="316" width="150" height="8" fill="#4a3b28"/>
  <rect x="180" y="316" width="150" height="2.5" fill="#8a6f43" opacity="0.5"/>
  <g fill="#8e8e88" opacity="0.4"><circle cx="186" cy="320" r="2"/><circle cx="324" cy="320" r="2"/><circle cx="186" cy="350" r="2"/><circle cx="324" cy="350" r="2"/></g>
  <g>
    <rect x="196" y="292" width="24" height="30" rx="10" fill="url(#da-shop-tube)"/>
    <ellipse cx="208" cy="298" rx="7.92" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M201.76 301 l0 10" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <g class="fx-ember" style="--d:.3s">
      <line x1="208" y1="300" x2="208" y2="318" stroke="#d9a441" stroke-width="3"/>
      <ellipse cx="208" cy="308" rx="9" ry="12" fill="#ffd98a" opacity="0.45"/>
    </g>
    <rect x="234" y="288" width="26" height="34" rx="11" fill="url(#da-shop-tube)"/>
    <ellipse cx="247" cy="294" rx="8.58" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M240.24 297 l0 14" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <g class="fx-ember" style="--d:1.55s">
      <line x1="247" y1="296" x2="247" y2="318" stroke="#d9a441" stroke-width="3"/>
      <ellipse cx="247" cy="306" rx="10" ry="14" fill="#ffd98a" opacity="0.5"/>
    </g>
    <rect x="274" y="296" width="22" height="26" rx="9" fill="url(#da-shop-tube)"/>
    <ellipse cx="285" cy="302" rx="7.26" ry="3.4" fill="#26343a" opacity="0.85"/>
    <path d="M279.28 305 l0 6" stroke="#d6e6ec" stroke-width="2" opacity="0.3" stroke-linecap="round"/>
    <line x1="285" y1="302" x2="285" y2="318" stroke="#d9a441" stroke-width="2.5" class="fx-ember" style="--d:2.6s"/>
  </g>
  <g fill="none" stroke="#1b140d" stroke-width="3">
    <path d="M196 336 q20 14 40 0 q20 -14 40 0 q18 12 34 2"/>
  </g>
  <g>
    <ellipse cx="392" cy="348" rx="34" ry="10" fill="#3b2f22"/>
    <g fill="none" stroke="url(#da-shop-steel)" stroke-width="3">
      <ellipse cx="392" cy="342" rx="26" ry="8"/><ellipse cx="392" cy="334" rx="22" ry="7"/><ellipse cx="392" cy="327" rx="17" ry="6"/>
    </g>
  </g>
  <g>
    <path d="M440 350 q22 -8 44 0" fill="none" stroke="#3a3a34" stroke-width="6"/>
    <rect x="446" y="330" width="18" height="22" rx="5" fill="#33332e"/>
    <path d="M462 336 l58 -22" stroke="#5d1f18" stroke-width="9" stroke-linecap="round"/>
    <path d="M518 316 l26 -10" stroke="#8e8e88" stroke-width="5" stroke-linecap="round"/>
    <circle cx="548" cy="304" r="4" fill="#ffd98a" class="fx-ember" style="--d:1.75s"/>
    <path d="M550 298 q10 -22 -2 -40" fill="none" stroke="#cbd6e4" stroke-width="2.5" opacity="0.3"/>
    <path d="M552 294 q16 -18 8 -38" fill="none" stroke="#cbd6e4" stroke-width="2" opacity="0.22"/>
  </g>
  <g>
    <ellipse cx="748" cy="358" rx="52" ry="8" fill="#0d0904" opacity="0.4"/>
    <rect x="700" y="300" width="86" height="56" rx="5" fill="#2f2519"/>
    <rect x="700" y="300" width="86" height="3" rx="1.5" fill="#7a6440" opacity="0.5"/>
    <rect x="708" y="308" width="70" height="30" rx="3" fill="url(#da-shop-enamel)"/>
    <path d="M710 310 q34 -6 66 2 l0 6 q-32 -8 -66 -1 z" fill="#fffaea" opacity="0.45"/>
    <path d="M714 334 q29 -18 58 0" fill="none" stroke="#3b2f22" stroke-width="1.6"/>
    <path d="M744 332 l-16 -16" stroke="#a8352a" stroke-width="2.4" class="fx-needle" style="--d:1.2s"/>
    <circle cx="722" cy="348" r="5" fill="#9b7a3f"/><circle cx="764" cy="348" r="5" fill="#9b7a3f"/>
    <circle cx="743" cy="348" r="6" fill="#5f6b4a" class="fx-blink" style="--d:2.35s"/>
  </g>
</g>

<!-- THE WIRING BINDER, cracked open at the page someone kept coming back to -->
<g transform="rotate(-3 640 328)">
  <ellipse cx="642" cy="360" rx="92" ry="12" fill="#0d0904" opacity="0.4"/>
  <path d="M560 356 L640 344 L720 356 L720 300 L640 288 L560 300 Z" fill="#33271a"/>
  <path d="M566 352 L638 341 L638 294 L566 304 Z" fill="#f0e7ce"/>
  <path d="M642 341 L714 352 L714 304 L642 294 Z" fill="#e3d5ac"/>
  <path d="M566 352 L638 341 L638 294 L566 304 Z" fill="#d9a441" opacity="0.12"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="574" y1="310" x2="628" y2="303"/><line x1="574" y1="318" x2="632" y2="311"/>
    <line x1="574" y1="326" x2="620" y2="320"/><line x1="574" y1="334" x2="630" y2="327"/>
    <line x1="574" y1="342" x2="616" y2="336"/>
  </g>
  <g fill="none" stroke="#3b2f22" stroke-width="2">
    <rect x="652" y="304" width="26" height="18"/>
    <path d="M678 313 l14 0"/><path d="M652 313 l-8 0"/>
    <path d="M692 313 l0 18"/>
  </g>
  <g stroke="#3b2f22" stroke-width="2.4" stroke-linecap="round">
    <line x1="684" y1="332" x2="700" y2="332"/><line x1="687" y1="338" x2="697" y2="338"/><line x1="690" y1="344" x2="694" y2="344"/>
  </g>
  <path d="M652 330 q8 -10 16 0 q8 -10 16 0" fill="none" stroke="#3b2f22" stroke-width="2.2"/>
  <path d="M700 296 l14 8 l-14 6 z" fill="#cdbc93"/>
  <ellipse cx="666" cy="348" rx="18" ry="6" fill="#5d1f18" opacity="0.25"/>
  <rect x="556" y="352" width="168" height="10" rx="3" fill="#241b12"/>
</g>

<!-- the bench lamp: green shade, the one warm cone in the room -->
<g>
  <ellipse cx="536" cy="356" rx="30" ry="9" fill="#3b2f22"/>
  <rect x="530" y="292" width="12" height="64" fill="#4a3b28"/>
  <rect x="531" y="292" width="3" height="64" fill="#8a6f43" opacity="0.55"/>
  <path d="M536 296 q4 -50 60 -58" fill="none" stroke="#4a3b28" stroke-width="7"/>
  <path d="M566 226 q30 -10 46 12 l-26 22 q-14 -18 -32 -12 z" fill="#5f6b4a"/>
  <path d="M566 226 q30 -10 46 12 l-7 6 q-14 -16 -35 -10 z" fill="#7d8a62"/>
  <path d="M571 225 q26 -8 38 13" fill="none" stroke="#aab68d" stroke-width="2" opacity="0.55"/>
  <path d="M574 252 q16 -7 30 4" fill="none" stroke="#ffd98a" stroke-width="2.2" opacity="0.5"/>
  <g class="fx-glow" style="--d:.15s"><ellipse cx="590" cy="256" rx="20" ry="8" fill="#ffd98a" opacity="0.7"/></g>
  <g class="fx-glow" style="--d:1.95s"><path d="M566 258 L616 258 L700 452 L470 452 Z" fill="#ffd98a" opacity="0.06"/></g>
</g>

<!-- foreground: the stool, a coil of wire, the tool chest -->
<g>
  <ellipse cx="212" cy="608" rx="86" ry="16" fill="#0d0904" opacity="0.42"/>
  <ellipse cx="214" cy="516" rx="66" ry="18" fill="#3b2f22"/>
  <ellipse cx="214" cy="508" rx="62" ry="16" fill="#5b4830"/>
  <ellipse cx="214" cy="506" rx="46" ry="11" fill="#4a3b28"/>
  <path d="M170 503 q44 -14 88 0" fill="none" stroke="#8a6f43" stroke-width="2" opacity="0.4"/>
  <ellipse cx="214" cy="510" rx="30" ry="7" fill="#2a2016" opacity="0.5"/>
  <path d="M172 518 l-16 92" stroke="#33271a" stroke-width="10" stroke-linecap="round"/>
  <path d="M256 518 l16 92" stroke="#33271a" stroke-width="10" stroke-linecap="round"/>
  <path d="M214 522 l0 96" stroke="#2a2016" stroke-width="10" stroke-linecap="round"/>
  <path d="M166 566 q48 16 96 0" fill="none" stroke="#3b2f22" stroke-width="6"/>
</g>
<g fill="none" stroke="#5b4830" stroke-width="5">
  <ellipse cx="392" cy="556" rx="46" ry="16"/><ellipse cx="392" cy="564" rx="34" ry="11"/>
</g>
<path d="M356 566 q-26 8 -34 30" fill="none" stroke="#5b4830" stroke-width="5"/>
<g>
  <ellipse cx="924" cy="614" rx="110" ry="16" fill="#0d0904" opacity="0.42"/>
  <rect x="836" y="486" width="180" height="134" rx="6" fill="url(#da-shop-base)"/>
  <rect x="836" y="486" width="180" height="14" rx="5" fill="#4a3b28"/>
  <rect x="836" y="486" width="180" height="3.5" rx="1.5" fill="#8a6f43" opacity="0.5"/>
  <path d="M838 486 l176 0 l0 4 q-88 4 -176 0 z" fill="#c9bda0" opacity="0.1"/>
  <g fill="#0d0904" opacity="0.45"><rect x="836" y="556" width="180" height="5"/><rect x="836" y="610" width="180" height="5"/></g>
  <g fill="none" stroke="#3b2f22" stroke-width="4">
    <rect x="852" y="512" width="148" height="42"/><rect x="852" y="566" width="148" height="42"/>
  </g>
  <g fill="#9b7a3f">
    <rect x="900" y="528" width="52" height="10" rx="4"/><rect x="900" y="582" width="52" height="10" rx="4"/>
  </g>
  <rect x="900" y="474" width="52" height="12" rx="5" fill="#6b5326"/>
</g>

<rect width="1000" height="620" fill="url(#da-shop-vig)"/>
`,
  },

  effects: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_thunder: { x: 37, y: 74 },
      h_organ: { x: 63, y: 81 },
      h_discchest: { x: 91, y: 87 },
    },
    svg: `
<defs>
  <linearGradient id="da-fx-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#372b1e"/><stop offset="1" stop-color="#171208"/>
  </linearGradient>
  <linearGradient id="da-fx-sheet" x1="1" y1="0" x2="0.05" y2="0.9">
    <stop offset="0" stop-color="#8e969b"/><stop offset="0.22" stop-color="#5d666d"/>
    <stop offset="0.55" stop-color="#333c44"/><stop offset="1" stop-color="#1a2027"/>
  </linearGradient>
  <linearGradient id="da-fx-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5b4830"/><stop offset="1" stop-color="#2f2519"/>
  </linearGradient>
  <linearGradient id="da-fx-organ" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#5b4229"/><stop offset="0.4" stop-color="#3b2a1b"/><stop offset="1" stop-color="#1e160e"/>
  </linearGradient>
  <linearGradient id="da-fx-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c2318"/><stop offset="0.4" stop-color="#1c1610"/><stop offset="1" stop-color="#100c07"/>
  </linearGradient>
  <linearGradient id="da-fx-metal" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2c2c28"/><stop offset="0.22" stop-color="#b3ac9c"/>
    <stop offset="0.48" stop-color="#5e5a50"/><stop offset="0.75" stop-color="#d2cab7"/>
    <stop offset="1" stop-color="#35322c"/>
  </linearGradient>
  <linearGradient id="da-fx-brass" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#4a3617"/><stop offset="0.26" stop-color="#d0a95d"/>
    <stop offset="0.52" stop-color="#8a6a2c"/><stop offset="0.8" stop-color="#c19a4e"/>
    <stop offset="1" stop-color="#3a2b12"/>
  </linearGradient>
  <linearGradient id="da-fx-ivory" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f3e9cd"/><stop offset="0.55" stop-color="#ddceA4"/><stop offset="1" stop-color="#b0a077"/>
  </linearGradient>
  <linearGradient id="da-fx-doorwood" x1="0" y1="0" x2="1" y2="0.15">
    <stop offset="0" stop-color="#4b3b27"/><stop offset="0.35" stop-color="#382b1c"/>
    <stop offset="0.75" stop-color="#2a2015"/><stop offset="1" stop-color="#1a120a"/>
  </linearGradient>
  <linearGradient id="da-fx-crate" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#6b5537"/><stop offset="0.45" stop-color="#4a3a24"/><stop offset="1" stop-color="#291f14"/>
  </linearGradient>
  <radialGradient id="da-fx-glow" cx="0.46" cy="0.3" r="0.68">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-fx-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.4"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-fx-vig" cx="0.48" cy="0.48" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#da-fx-wall)"/>
<rect width="1000" height="620" fill="url(#da-fx-glow)"/>

<!-- cork panels and the hanging rail -->
<g fill="#41331f" opacity="0.55">
  <rect x="470" y="70" width="100" height="80"/><rect x="578" y="70" width="100" height="80"/>
  <rect x="470" y="158" width="100" height="80"/><rect x="578" y="158" width="100" height="80"/>
  <rect x="686" y="70" width="100" height="80"/><rect x="794" y="70" width="100" height="80"/>
</g>
<g fill="#6d5734" opacity="0.28">
  <rect x="470" y="70" width="100" height="3"/><rect x="578" y="70" width="100" height="3"/><rect x="470" y="158" width="100" height="3"/>
  <rect x="578" y="158" width="100" height="3"/><rect x="686" y="70" width="100" height="3"/><rect x="794" y="70" width="100" height="3"/>
</g>
<g fill="#100c06" opacity="0.5">
  <rect x="470" y="146" width="100" height="4"/><rect x="578" y="146" width="100" height="4"/><rect x="470" y="234" width="100" height="4"/>
  <rect x="578" y="234" width="100" height="4"/><rect x="686" y="146" width="100" height="4"/><rect x="794" y="146" width="100" height="4"/>
  <rect x="566" y="70" width="4" height="168"/><rect x="674" y="70" width="4" height="80"/><rect x="782" y="70" width="4" height="80"/><rect x="890" y="70" width="4" height="80"/>
</g>
<g fill="#5b4830" opacity="0.2">
  <ellipse cx="500" cy="96" rx="8" ry="4"/><ellipse cx="540" cy="126" rx="7" ry="3.5"/><ellipse cx="612" cy="104" rx="9" ry="4"/><ellipse cx="650" cy="190" rx="8" ry="3.6"/>
  <ellipse cx="512" cy="196" rx="7" ry="3.4"/><ellipse cx="722" cy="112" rx="8" ry="4"/><ellipse cx="836" cy="128" rx="7" ry="3.4"/>
</g>
<!-- board joints down the plaster, and the far corners going hazy -->
<g stroke="#241b12" stroke-width="2" opacity="0.5">
  <line x1="320" y1="0" x2="320" y2="62"/><line x1="120" y1="238" x2="120" y2="470"/><line x1="962" y1="62" x2="962" y2="470"/><line x1="418" y1="238" x2="418" y2="470"/>
</g>
<path d="M0 0 L1000 0 L1000 56 L0 56 Z" fill="#0b0803" opacity="0.26"/>
<path d="M962 56 L1000 56 L1000 470 L962 470 Z" fill="#0b0803" opacity="0.3"/>
<rect x="440" y="62" width="520" height="10" fill="#4a3b28"/>
<rect x="440" y="62" width="520" height="3" fill="#7d6540" opacity="0.55"/>
<rect x="440" y="70" width="520" height="4" fill="#0f0b06" opacity="0.55"/>
<g fill="#33271a"><rect x="452" y="58" width="10" height="18" rx="3"/><rect x="742" y="58" width="10" height="18" rx="3"/><rect x="944" y="58" width="10" height="18" rx="3"/></g>
<rect x="0" y="470" width="1000" height="150" fill="url(#da-fx-floor)"/>
<rect x="0" y="462" width="1000" height="10" fill="#42341f"/>
<rect x="0" y="462" width="1000" height="3" fill="#6f5936" opacity="0.55"/>
<rect x="0" y="470" width="1000" height="4" fill="#0d0904" opacity="0.6"/>
<g stroke="#241b12" stroke-width="2.5">
  <line x1="0" y1="512" x2="1000" y2="512"/><line x1="0" y1="556" x2="1000" y2="556"/><line x1="0" y1="602" x2="1000" y2="602"/>
</g>
<g stroke="#4d3d28" stroke-width="1" opacity="0.35">
  <line x1="0" y1="509" x2="1000" y2="509"/><line x1="0" y1="553" x2="1000" y2="553"/><line x1="0" y1="599" x2="1000" y2="599"/>
</g>
<g stroke="#120d07" stroke-width="2" opacity="0.6">
  <line x1="176" y1="474" x2="176" y2="512"/><line x1="626" y1="512" x2="626" y2="556"/><line x1="382" y1="556" x2="382" y2="602"/><line x1="852" y1="474" x2="852" y2="512"/>
</g>
<ellipse cx="524" cy="548" rx="340" ry="94" fill="#d9a441" opacity="0.055"/>
<ellipse cx="524" cy="536" rx="210" ry="58" fill="#ffd98a" opacity="0.04"/>

<!-- the door that slams, in its own frame, standing free -->
<g>
  <rect x="34" y="96" width="242" height="392" fill="#33271a"/>
  <rect x="34" y="96" width="242" height="5" fill="#7d6540" opacity="0.4"/>
  <rect x="34" y="96" width="6" height="392" fill="#5b4830" opacity="0.4"/>
  <rect x="52" y="112" width="206" height="358" fill="#14110d"/>
  <path d="M62 112 L246 112 L238 470 L70 470 Z" fill="url(#da-fx-doorwood)"/>
  <path d="M62 112 L246 112 L245 117 L63 117 Z" fill="#7d6540" opacity="0.35"/>
  <path d="M236 112 L246 112 L238 470 L229 470 Z" fill="#0d0904" opacity="0.4"/>
  <g fill="none" stroke="#2a2016" stroke-width="5">
    <rect x="80" y="132" width="70" height="120"/><rect x="160" y="132" width="70" height="120"/>
    <rect x="80" y="278" width="70" height="160"/><rect x="160" y="278" width="70" height="160"/>
  </g>
  <path d="M246 112 L276 96 L276 488 L238 470 Z" fill="#241b12"/>
  <ellipse cx="225" cy="306" rx="18" ry="13" fill="#0d0904" opacity="0.4"/>
  <circle cx="222" cy="300" r="11" fill="url(#da-fx-brass)"/>
  <circle cx="219" cy="297" r="3" fill="#f0dca6" opacity="0.65"/>
  <rect x="212" y="316" width="20" height="26" rx="3" fill="url(#da-fx-brass)"/>
  <path d="M196 214 q18 -16 36 0 l0 8 q-18 -12 -36 0 z" fill="url(#da-fx-brass)"/>
  <circle cx="214" cy="204" r="9" fill="none" stroke="url(#da-fx-brass)" stroke-width="5"/>
  <g fill="#241b12" opacity="0.7"><path d="M70 340 l6 0 l0 40 l-6 0 z"/><path d="M232 380 l5 0 l0 30 l-5 0 z"/></g>
  <g fill="#6b5326">
    <rect x="56" y="160" width="16" height="30" rx="3"/><rect x="56" y="380" width="16" height="30" rx="3"/>
  </g>
  <ellipse cx="156" cy="576" rx="150" ry="18" fill="#0d0904" opacity="0.4"/>
  <rect x="20" y="488" width="272" height="18" rx="4" fill="#2a2016"/>
  <rect x="20" y="488" width="272" height="6" rx="3" fill="#4a3b28"/>
  <rect x="20" y="488" width="272" height="2.5" rx="1" fill="#7d6540" opacity="0.45"/>
  <path d="M60 506 l-16 62 l24 0 l10 -62 z" fill="#241b12"/>
  <path d="M256 506 l16 62 l-24 0 l-10 -62 z" fill="#241b12"/>
</g>

<!-- the thunder sheet, hanging from the rail -->
<g>
  <rect x="300" y="52" width="150" height="10" rx="4" fill="#4a3b28"/>
  <g stroke="#8e8e88" stroke-width="3">
    <line x1="318" y1="62" x2="308" y2="104"/><line x1="432" y1="62" x2="440" y2="100"/>
  </g>
  <path d="M300 104 Q 374 92 446 100 L452 372 Q 376 396 296 380 Z" fill="url(#da-fx-sheet)"/>
  <g fill="none" stroke="#aab3ba" stroke-width="2.5" opacity="0.4">
    <path d="M326 116 q-10 130 2 258"/><path d="M366 110 q-6 132 4 260"/><path d="M408 112 q8 128 0 258"/>
  </g>
  <g fill="none" stroke="#0f1418" stroke-width="3" opacity="0.5">
    <path d="M346 114 q-8 130 2 260"/><path d="M388 110 q4 130 -2 260"/>
  </g>
  <path d="M424 108 q10 132 6 262 l-10 3 q6 -132 -4 -264 z" fill="#e2eaef" opacity="0.16"/>
  <path d="M436 106 q10 130 6 258" fill="none" stroke="#fff3d0" stroke-width="2.4" opacity="0.18"/>
  <path d="M304 108 q6 130 -4 264" fill="none" stroke="#0a0e12" stroke-width="5" opacity="0.35"/>
  <ellipse cx="428" cy="212" rx="9" ry="34" fill="#ffd98a" opacity="0.09"/>
  <path d="M300 104 q76 -16 146 -6 l2 22 q-72 -14 -150 4 z" fill="#c3ccd2" opacity="0.28"/>
  <path d="M302 106 q74 -15 143 -6" fill="none" stroke="#f2f6f8" stroke-width="1.8" opacity="0.28"/>
  <circle cx="312" cy="112" r="5" fill="#1b140d"/><circle cx="436" cy="106" r="5" fill="#1b140d"/>
  <path d="M304 386 q70 22 140 -2 l0 10 q-70 24 -140 2 z" fill="#0f1418" opacity="0.55"/>
</g>

<!-- props on the rail: coconut shells, bell, chain, ratchet, whistle -->
<g>
  <g stroke="#6b5326" stroke-width="3">
    <line x1="486" y1="72" x2="486" y2="96"/><line x1="524" y1="72" x2="524" y2="96"/>
  </g>
  <path d="M474 100 q18 -14 36 0 q-4 30 -18 32 q-14 -2 -18 -32 z" fill="#0d0904" opacity="0.35"/>
  <path d="M468 96 q18 -14 36 0 q-4 30 -18 32 q-14 -2 -18 -32 z" fill="#4a3524"/>
  <path d="M506 96 q18 -14 36 0 q-4 30 -18 32 q-14 -2 -18 -32 z" fill="#3b2a1c"/>
  <path d="M470 98 q10 -9 20 -5" fill="none" stroke="#8a6b45" stroke-width="2.4" opacity="0.45"/>
  <path d="M472 100 q14 -8 28 0" fill="none" stroke="#7a6440" stroke-width="2"/>
  <g>
    <line x1="580" y1="72" x2="580" y2="92" stroke="#6b5326" stroke-width="3"/>
    <path d="M562 144 q0 -46 24 -48 q24 2 24 48 z" fill="#0d0904" opacity="0.32"/>
    <path d="M556 140 q0 -46 24 -48 q24 2 24 48 z" fill="url(#da-fx-brass)"/>
    <path d="M562 138 q0 -40 16 -44" fill="none" stroke="#f0dca6" stroke-width="2.6" opacity="0.4"/>
    <path d="M556 140 l48 0 l0 8 l-48 0 z" fill="#6b5326"/>
    <circle cx="580" cy="156" r="7" fill="url(#da-fx-brass)"/>
    <path d="M564 100 q16 -12 32 0" fill="none" stroke="#c98a3a" stroke-width="2" opacity="0.7"/>
  </g>
  <g fill="none" stroke="#0d0904" stroke-width="4" opacity="0.3">
    <path d="M646 78 q10 16 -2 26"/><path d="M644 104 q-12 14 2 26"/><path d="M646 130 q12 14 -2 26"/>
    <path d="M644 156 q-12 14 2 26"/><path d="M646 182 q12 14 -2 26"/>
  </g>
  <g fill="none" stroke="url(#da-fx-metal)" stroke-width="4">
    <path d="M640 74 q10 16 -2 26"/><path d="M638 100 q-12 14 2 26"/><path d="M640 126 q12 14 -2 26"/>
    <path d="M638 152 q-12 14 2 26"/><path d="M640 178 q12 14 -2 26"/>
  </g>
  <g>
    <line x1="700" y1="72" x2="700" y2="96" stroke="#6b5326" stroke-width="3"/>
    <rect x="682" y="100" width="48" height="34" rx="4" fill="#0d0904" opacity="0.3"/>
    <rect x="676" y="96" width="48" height="34" rx="4" fill="#4a3524"/>
    <rect x="676" y="96" width="48" height="3" rx="1.5" fill="#7d6540" opacity="0.45"/>
    <g stroke="#2a2016" stroke-width="3"><line x1="686" y1="96" x2="686" y2="130"/><line x1="700" y1="96" x2="700" y2="130"/><line x1="714" y1="96" x2="714" y2="130"/></g>
    <rect x="694" y="130" width="12" height="30" rx="4" fill="#5b4830"/>
  </g>
  <g>
    <line x1="770" y1="72" x2="770" y2="92" stroke="#6b5326" stroke-width="3"/>
    <rect x="762" y="96" width="28" height="16" rx="4" fill="#0d0904" opacity="0.3"/>
    <rect x="756" y="92" width="28" height="16" rx="4" fill="url(#da-fx-metal)"/>
    <rect x="764" y="108" width="12" height="44" rx="5" fill="url(#da-fx-metal)"/>
    <circle cx="770" cy="156" r="9" fill="#6b6558"/>
    <circle cx="767" cy="153" r="2.4" fill="#e8e2d4" opacity="0.5"/>
  </g>
  <g>
    <line x1="836" y1="72" x2="836" y2="90" stroke="#6b5326" stroke-width="3"/>
    <path d="M818 94 l48 0 l-10 46 l-28 0 z" fill="#0d0904" opacity="0.3"/>
    <path d="M812 90 l48 0 l-10 46 l-28 0 z" fill="#3b2f22"/>
    <path d="M818 98 l36 0 l-6 30 l-24 0 z" fill="#5b4830"/>
    <path d="M820 99 l8 0 l-5 28 l-6 0 z" fill="#8a6f43" opacity="0.4"/>
  </g>
</g>

<!-- the bare bulb over the working floor -->
<g>
  <line x1="524" y1="0" x2="524" y2="120" stroke="#33271a" stroke-width="4"/>
  <path d="M486 168 L562 168 L548 122 L500 122 Z" fill="#3b2f22"/>
  <path d="M486 168 L562 168 L558 160 L490 160 Z" fill="#241b12"/>
  <path d="M486 168 L500 122 L512 122 L498 168 Z" fill="#8a7048" opacity="0.35"/>
  <path d="M548 122 L562 168 L550 168 L538 122 Z" fill="#0d0904" opacity="0.4"/>
  <ellipse cx="524" cy="168" rx="38" ry="9" fill="#6b5326"/>
  <ellipse cx="524" cy="167" rx="30" ry="6" fill="#ffd06a" opacity="0.35"/>
  <ellipse cx="524" cy="174" rx="12" ry="15" fill="#ffd98a"/>
  <ellipse cx="524" cy="174" rx="6" ry="8" fill="#fff3d0" class="fx-ember" style="--d:.4s"/>
  <g class="fx-glow" style="--d:1.6s"><ellipse cx="524" cy="180" rx="76" ry="34" fill="#d9a441" opacity="0.15"/></g>
  <g class="fx-glow" style="--d:.2s"><path d="M488 172 L560 172 L660 486 L370 486 Z" fill="#ffd98a" opacity="0.05"/></g>
</g>

<!-- THE THUNDER-SHEET CRATE: felt, rope handles, and something bright inside -->
<rect x="240" y="360" width="330" height="230" fill="url(#da-fx-lamp)" class="fx-glow" style="--d:2.7s"/>
<g>
  <path d="M280 418 L470 402 L470 520 L280 536 Z" fill="url(#da-fx-crate)"/>
  <path d="M262 402 L452 386 L470 402 L280 418 Z" fill="#54432c"/>
  <path d="M262 402 L452 386 L454 390 L264 406 Z" fill="#836a44" opacity="0.5"/>
  <path d="M262 402 L280 418 L280 536 L262 520 Z" fill="#1a130b"/>
  <g stroke="#2b2115" stroke-width="1.2" opacity="0.5">
    <path d="M284 432 L468 416"/><path d="M284 466 L468 450"/><path d="M284 502 L468 486"/>
  </g>
  <g fill="#8e8e88" opacity="0.35"><circle cx="290" cy="424" r="2.2"/><circle cx="462" cy="408" r="2.2"/><circle cx="290" cy="528" r="2.2"/><circle cx="462" cy="512" r="2.2"/></g>
  <g fill="none" stroke="#2a2016" stroke-width="3">
    <path d="M282 448 L470 432"/><path d="M282 484 L470 468"/>
  </g>
  <path d="M290 424 L462 408 L462 424 L290 440 Z" fill="#14110d"/>
  <path d="M296 428 q34 -14 68 -6 q36 8 66 -8 l0 12 q-30 16 -66 8 q-34 -8 -68 6 z" fill="#5f6b4a"/>
  <path d="M300 434 q30 -12 62 -4 q34 8 60 -8" fill="none" stroke="#4b553b" stroke-width="3"/>
  <!-- the engineer's missing nips, jaws still copper-bright -->
  <g transform="rotate(-9 372 426)">
    <ellipse cx="374" cy="428" rx="52" ry="14" fill="#14110d" opacity="0.6"/>
    <path d="M340 418 l10 -8 l30 10 l34 8 l-3 11 l-34 -8 l-34 -5 z" fill="#8e8e88"/>
    <path d="M340 434 l10 8 l30 -9 l34 -10 l-3 -11 l-34 10 l-34 5 z" fill="#6b6b62"/>
    <circle cx="368" cy="426" r="7" fill="#c3ccd2"/>
    <circle cx="368" cy="426" r="3" fill="#3a3a34"/>
    <path d="M412 436 l22 6 l2 12 l-22 -6 z" fill="#5d1f18"/>
    <path d="M412 416 l22 -6 l2 -12 l-22 6 z" fill="#5d1f18"/>
    <path d="M338 416 l-14 -4 l0 30 l14 -4 z" fill="#c98a3a"/>
    <path d="M324 412 l-10 12 l10 14 z" fill="#ffd98a"/>
    <path d="M330 420 l-6 6 l6 6" fill="none" stroke="#fff3d0" stroke-width="2"/>
  </g>
  <g fill="none" stroke="#6b5326" stroke-width="6">
    <path d="M270 456 q-20 14 -2 30"/>
  </g>
  <path d="M470 402 L512 396 L512 512 L470 520 Z" fill="#2a2016"/>
  <g transform="rotate(9 500 440)">
    <path d="M478 380 L520 372 L536 500 L494 508 Z" fill="#4a3b28"/>
    <g fill="none" stroke="#2a2016" stroke-width="3"><path d="M486 420 L528 412"/><path d="M490 462 L532 454"/></g>
  </g>
  <ellipse cx="380" cy="540" rx="120" ry="18" fill="#14110d" opacity="0.5"/>
</g>

<!-- gravel boxes, worn shallow -->
<g>
  <ellipse cx="552" cy="566" rx="94" ry="12" fill="#0d0904" opacity="0.4"/>
  <path d="M470 512 L618 506 L634 556 L474 566 Z" fill="#3b2f22"/>
  <path d="M478 516 L610 510 L622 550 L484 558 Z" fill="#1e170e"/>
  <g fill="#6b6558">
    <circle cx="500" cy="530" r="5"/><circle cx="520" cy="524" r="4"/><circle cx="540" cy="532" r="6"/><circle cx="562" cy="526" r="4.5"/>
    <circle cx="584" cy="534" r="5"/><circle cx="504" cy="546" r="4"/><circle cx="528" cy="544" r="5.5"/><circle cx="552" cy="548" r="4"/>
    <circle cx="576" cy="546" r="5"/><circle cx="598" cy="540" r="4"/>
  </g>
  <g fill="#4a463e">
    <circle cx="512" cy="536" r="4"/><circle cx="548" cy="522" r="3.5"/><circle cx="570" cy="538" r="4.5"/><circle cx="592" cy="524" r="3.5"/>
    <circle cx="518" cy="552" r="4"/><circle cx="564" cy="556" r="3.5"/>
  </g>
  <path d="M470 512 L618 506 L620 514 L472 520 Z" fill="#5b4830"/>
</g>

<!-- the Hammond organ -->
<g>
  <ellipse cx="846" cy="500" rx="180" ry="20" fill="#0d0904" opacity="0.4"/>
  <rect x="690" y="286" width="308" height="16" rx="4" fill="#5b4830"/>
  <rect x="690" y="286" width="308" height="4" rx="2" fill="#8a6f43" opacity="0.5"/>
  <rect x="702" y="302" width="288" height="176" fill="url(#da-fx-organ)"/>
  <rect x="702" y="302" width="288" height="10" fill="#6b5326" opacity="0.7"/>
  <rect x="722" y="312" width="248" height="46" fill="#241b12"/>
  <rect x="736" y="316" width="112" height="40" fill="#e3d5ac"/>
  <g stroke="#8d7c62" stroke-width="1.2">
    <line x1="742" y1="324" x2="842" y2="324"/><line x1="742" y1="329" x2="842" y2="329"/><line x1="742" y1="334" x2="842" y2="334"/>
    <line x1="742" y1="344" x2="842" y2="344"/><line x1="742" y1="349" x2="842" y2="349"/>
  </g>
  <g fill="#3b2f22">
    <circle cx="758" cy="331" r="2.5"/><circle cx="776" cy="327" r="2.5"/><circle cx="794" cy="333" r="2.5"/><circle cx="812" cy="329" r="2.5"/>
    <circle cx="766" cy="347" r="2.5"/><circle cx="790" cy="345" r="2.5"/><circle cx="820" cy="348" r="2.5"/>
  </g>
  <g>
    <rect x="866" y="322" width="14" height="30" rx="3" fill="#e3d5ac"/><rect x="884" y="322" width="14" height="30" rx="3" fill="#5d1f18"/>
    <rect x="902" y="322" width="14" height="30" rx="3" fill="#e3d5ac"/><rect x="920" y="322" width="14" height="30" rx="3" fill="#6f8a45"/>
    <rect x="938" y="322" width="14" height="30" rx="3" fill="#e3d5ac"/>
    <g fill="#fffaea" opacity="0.4"><rect x="867" y="323" width="4" height="28"/><rect x="903" y="323" width="4" height="28"/><rect x="939" y="323" width="4" height="28"/></g>
    <g fill="#e7b58a" opacity="0.3"><rect x="885" y="323" width="4" height="28"/><rect x="921" y="323" width="4" height="28"/></g>
  </g>
  <rect x="712" y="360" width="268" height="34" fill="#33271a"/>
  <rect x="718" y="364" width="256" height="26" fill="url(#da-fx-ivory)"/>
  <rect x="718" y="364" width="256" height="3" fill="#100c06" opacity="0.35"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="734" y1="364" x2="734" y2="390"/><line x1="750" y1="364" x2="750" y2="390"/><line x1="766" y1="364" x2="766" y2="390"/><line x1="782" y1="364" x2="782" y2="390"/>
    <line x1="798" y1="364" x2="798" y2="390"/><line x1="814" y1="364" x2="814" y2="390"/><line x1="830" y1="364" x2="830" y2="390"/><line x1="846" y1="364" x2="846" y2="390"/>
    <line x1="862" y1="364" x2="862" y2="390"/><line x1="878" y1="364" x2="878" y2="390"/><line x1="894" y1="364" x2="894" y2="390"/><line x1="910" y1="364" x2="910" y2="390"/>
    <line x1="926" y1="364" x2="926" y2="390"/><line x1="942" y1="364" x2="942" y2="390"/><line x1="958" y1="364" x2="958" y2="390"/>
  </g>
  <g fill="#1b140d">
    <rect x="729" y="364" width="9" height="16"/><rect x="745" y="364" width="9" height="16"/><rect x="777" y="364" width="9" height="16"/>
    <rect x="793" y="364" width="9" height="16"/><rect x="809" y="364" width="9" height="16"/><rect x="841" y="364" width="9" height="16"/>
    <rect x="857" y="364" width="9" height="16"/><rect x="889" y="364" width="9" height="16"/><rect x="905" y="364" width="9" height="16"/>
    <rect x="921" y="364" width="9" height="16"/><rect x="953" y="364" width="9" height="16"/>
  </g>
  <rect x="712" y="398" width="268" height="34" fill="#33271a"/>
  <rect x="718" y="402" width="256" height="26" fill="url(#da-fx-ivory)" opacity="0.85"/>
  <rect x="718" y="402" width="256" height="3" fill="#100c06" opacity="0.4"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="734" y1="402" x2="734" y2="428"/><line x1="750" y1="402" x2="750" y2="428"/><line x1="766" y1="402" x2="766" y2="428"/><line x1="782" y1="402" x2="782" y2="428"/>
    <line x1="798" y1="402" x2="798" y2="428"/><line x1="814" y1="402" x2="814" y2="428"/><line x1="830" y1="402" x2="830" y2="428"/><line x1="846" y1="402" x2="846" y2="428"/>
    <line x1="862" y1="402" x2="862" y2="428"/><line x1="878" y1="402" x2="878" y2="428"/><line x1="894" y1="402" x2="894" y2="428"/><line x1="910" y1="402" x2="910" y2="428"/>
    <line x1="926" y1="402" x2="926" y2="428"/><line x1="942" y1="402" x2="942" y2="428"/><line x1="958" y1="402" x2="958" y2="428"/>
  </g>
  <g fill="#1b140d">
    <rect x="729" y="402" width="9" height="16"/><rect x="745" y="402" width="9" height="16"/><rect x="777" y="402" width="9" height="16"/>
    <rect x="793" y="402" width="9" height="16"/><rect x="809" y="402" width="9" height="16"/><rect x="841" y="402" width="9" height="16"/>
    <rect x="857" y="402" width="9" height="16"/><rect x="889" y="402" width="9" height="16"/><rect x="905" y="402" width="9" height="16"/>
    <rect x="921" y="402" width="9" height="16"/><rect x="953" y="402" width="9" height="16"/>
  </g>
  <rect x="702" y="436" width="288" height="42" fill="#2f2519"/>
  <g fill="none" stroke="#4a3b28" stroke-width="3">
    <rect x="720" y="446" width="110" height="24"/><rect x="850" y="446" width="110" height="24"/>
  </g>
  <rect x="714" y="478" width="264" height="14" fill="#241b12"/>
  <g fill="#33271a">
    <rect x="724" y="492" width="240" height="10"/>
  </g>
  <g stroke="#4a3b28" stroke-width="2">
    <line x1="750" y1="492" x2="750" y2="502"/><line x1="790" y1="492" x2="790" y2="502"/><line x1="830" y1="492" x2="830" y2="502"/>
    <line x1="870" y1="492" x2="870" y2="502"/><line x1="910" y1="492" x2="910" y2="502"/>
  </g>
  <!-- the little lamp clipped to the music rack -->
  <rect x="716" y="300" width="20" height="10" rx="3" fill="#3b2f22"/>
  <path d="M726 300 q-4 -34 26 -42" fill="none" stroke="#4a3b28" stroke-width="5"/>
  <path d="M746 254 q24 -6 30 12 l-22 10 q-6 -14 -16 -10 z" fill="#5f6b4a"/>
  <path d="M749 253 q21 -5 26 11" fill="none" stroke="#a2ae86" stroke-width="1.8" opacity="0.5"/>
  <g class="fx-glow" style="--d:2.1s"><ellipse cx="762" cy="276" rx="14" ry="6" fill="#ffd98a" opacity="0.6"/></g>
  <g class="fx-glow" style="--d:1.1s"><ellipse cx="790" cy="340" rx="90" ry="60" fill="#ffd98a" opacity="0.08"/></g>
</g>

<!-- the organ bench, and Iris Bell, not playing -->
<g>
  <rect x="588" y="492" width="216" height="20" rx="5" fill="#4a3b28"/>
  <rect x="588" y="492" width="216" height="6" rx="3" fill="#6b5326"/>
  <rect x="596" y="512" width="200" height="14" fill="#33271a"/>
  <rect x="602" y="526" width="14" height="52" fill="#2a2016"/>
  <rect x="776" y="526" width="14" height="52" fill="#2a2016"/>
  <path d="M608 556 l176 0" stroke="#33271a" stroke-width="6"/>
  <ellipse cx="694" cy="580" rx="120" ry="16" fill="#14110d" opacity="0.45"/>
</g>
<g>
  <ellipse cx="700" cy="574" rx="62" ry="12" fill="#0d0904" opacity="0.34"/>
  <path d="M708 502 L726 500 L732 558 L710 558 Z" fill="#3d4632"/>
  <path d="M702 556 l34 -2 l6 14 l-44 2 z" fill="#1b140d"/>
  <path d="M646 498 L646 466 q32 -12 64 -4 l18 40 q-42 10 -82 -2 z" fill="#4b553b"/>
  <path d="M646 470 q32 -12 64 -4 l4 10 q-34 -10 -68 2 z" fill="#5f6b4a"/>
  <path d="M650 476 L654 406 q6 -24 30 -24 q24 0 30 24 l6 68 q-34 10 -70 2 z" fill="#5f6b4a"/>
  <path d="M654 406 q6 -24 30 -24 q24 0 30 24 l-3 11 q-8 -22 -27 -22 q-19 0 -27 22 z" fill="#6f8a45"/>
  <path d="M656 434 q28 -8 54 0" fill="none" stroke="#4b553b" stroke-width="2.5"/>
  <path d="M700 400 q18 26 12 50 q-4 14 -18 16 l-8 -12 q12 -6 8 -20 q-4 -16 -12 -26 z" fill="#5f6b4a"/>
  <ellipse cx="686" cy="470" rx="17" ry="9" fill="#b3a184"/>
  <ellipse cx="700" cy="466" rx="14" ry="8" fill="#c0ae90"/>
  <g stroke="#8d7c62" stroke-width="1.3" stroke-linecap="round">
    <line x1="676" y1="470" x2="694" y2="468"/><line x1="678" y1="475" x2="694" y2="473"/>
  </g>
  <rect x="672" y="358" width="22" height="26" fill="#b3a184"/>
  <rect x="672" y="358" width="22" height="8" fill="#8d7c62" opacity="0.5"/>
  <ellipse cx="682" cy="338" rx="23" ry="26" fill="#b3a184"/>
  <path d="M700 334 l9 7 l-9 6 z" fill="#a89178"/>
  <path d="M660 340 q4 -32 26 -30 q24 2 22 28 q6 -38 -26 -38 q-30 0 -22 40 z" fill="#3b2f22"/>
  <path d="M658 334 q-12 30 2 50 l16 -6 q-14 -16 -8 -42 z" fill="#33271a"/>
  <ellipse cx="660" cy="372" rx="14" ry="12" fill="#2f2519"/>
  <line x1="690" y1="334" x2="700" y2="334" stroke="#4a3f31" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M689 326 q7 -4 13 0" fill="none" stroke="#4a3f31" stroke-width="2" opacity="0.8"/>
</g>

<!-- THE DISC STORAGE CHEST: banded steel, padlocked, standing hard by the organ -->
<g>
  <ellipse cx="908" cy="598" rx="98" ry="16" fill="#0d0904" opacity="0.45"/>
  <path d="M834 508 L982 496 L988 512 L840 524 Z" fill="#4a4740"/>
  <path d="M834 508 L982 496 L984 501 L836 513 Z" fill="#8f8b7e" opacity="0.45"/>
  <path d="M840 524 L988 512 L984 588 L836 594 Z" fill="#33322c"/>
  <path d="M840 524 L988 512 L988 519 L840 531 Z" fill="#1a1916" opacity="0.7"/>
  <path d="M836 594 L984 588 L982 600 L838 606 Z" fill="#15140f"/>
  <path d="M844 528 l16 -1 l0 65 l-16 1 z" fill="#5b5a52"/>
  <path d="M844 528 l5 0 l0 65 l-5 0 z" fill="#a3a094" opacity="0.4"/>
  <path d="M962 517 l16 -1 l0 64 l-16 1 z" fill="#5b5a52"/>
  <path d="M962 517 l5 0 l0 64 l-5 0 z" fill="#a3a094" opacity="0.4"/>
  <path d="M878 526 l10 -1 l0 66 l-10 1 z" fill="#4a493f"/>
  <path d="M934 521 l10 -1 l0 65 l-10 1 z" fill="#4a493f"/>
  <path d="M836 505 l18 -2 l0 15 l-18 2 z" fill="#6b6a60"/>
  <path d="M964 494 l18 -2 l0 15 l-18 2 z" fill="#6b6a60"/>
  <g fill="#8e8e88" opacity="0.5">
    <circle cx="849" cy="536" r="2.6"/><circle cx="849" cy="584" r="2.6"/>
    <circle cx="970" cy="526" r="2.6"/><circle cx="970" cy="572" r="2.6"/>
  </g>
  <path d="M896 542 q26 -3 42 -2 l0 7 q-18 -1 -42 2 z" fill="#7c7a6c" opacity="0.3"/>
  <path d="M852 562 q22 -4 40 -3" fill="none" stroke="#6f6d60" stroke-width="3" opacity="0.28"/>
  <path d="M900 578 q30 -5 56 -4" fill="none" stroke="#6f6d60" stroke-width="2" opacity="0.2"/>
  <rect x="898" y="518" width="34" height="26" rx="3" fill="#5b5a52"/>
  <rect x="898" y="518" width="34" height="5" rx="2" fill="#a3a094" opacity="0.45"/>
  <rect x="906" y="536" width="19" height="23" rx="4" fill="url(#da-fx-brass)"/>
  <path d="M910 536 l0 -9 q5 -8 11 0 l0 9" fill="none" stroke="#8d949a" stroke-width="4"/>
  <circle cx="915" cy="548" r="3" fill="#241b12"/>
  <path d="M902 541 q5 -3 9 -1" fill="none" stroke="#f0dca6" stroke-width="1.6" opacity="0.5"/>
  <ellipse cx="908" cy="510" rx="62" ry="8" fill="#ffd98a" opacity="0.05"/>
</g>

<!-- foreground: rope coil and a pair of shells left on the boards -->
<ellipse cx="146" cy="586" rx="86" ry="16" fill="#0d0904" opacity="0.38"/>
<g fill="none" stroke="#6b5326" stroke-width="7">
  <ellipse cx="150" cy="566" rx="66" ry="20"/><ellipse cx="152" cy="578" rx="48" ry="14"/>
</g>
<g fill="none" stroke="#9b7c4a" stroke-width="1.6" opacity="0.4">
  <ellipse cx="150" cy="564" rx="66" ry="20"/><ellipse cx="152" cy="576" rx="48" ry="14"/>
</g>
<path d="M92 578 q-40 12 -56 34" fill="none" stroke="#6b5326" stroke-width="7"/>
<g>
  <ellipse cx="316" cy="606" rx="34" ry="7" fill="#0d0904" opacity="0.38"/>
  <ellipse cx="364" cy="612" rx="30" ry="6" fill="#0d0904" opacity="0.34"/>
  <path d="M290 578 q22 -18 44 0 q-4 24 -22 26 q-18 -2 -22 -26 z" fill="#4a3524"/>
  <path d="M340 586 q20 -16 40 0 q-4 22 -20 24 q-16 -2 -20 -24 z" fill="#3b2a1c"/>
  <path d="M296 582 q16 -10 32 0" fill="none" stroke="#7a6440" stroke-width="2"/>
</g>

<rect width="1000" height="620" fill="url(#da-fx-vig)"/>
`,
  },

  office: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_casefile: { x: 40, y: 67 },
      h_letters: { x: 21, y: 84 },
      h_contracts: { x: 79, y: 85 },
      h_blotter: { x: 19, y: 69 },
    },
    svg: `
<defs>
  <linearGradient id="da-off-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#33281c"/><stop offset="1" stop-color="#161009"/>
  </linearGradient>
  <linearGradient id="da-off-panel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3b2f22"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="da-off-desk" x1="0.85" y1="0" x2="0.05" y2="1">
    <stop offset="0" stop-color="#6d5637"/><stop offset="0.35" stop-color="#4e3d27"/>
    <stop offset="0.7" stop-color="#3a2d1c"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="da-off-gilt" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#3f2f12"/><stop offset="0.22" stop-color="#c9a256"/>
    <stop offset="0.45" stop-color="#7d6129"/><stop offset="0.72" stop-color="#e0bc72"/>
    <stop offset="1" stop-color="#3a2b12"/>
  </linearGradient>
  <linearGradient id="da-off-brass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6b4a17"/><stop offset="0.24" stop-color="#f0c878"/>
    <stop offset="0.5" stop-color="#a87c2c"/><stop offset="0.78" stop-color="#e0b565"/>
    <stop offset="1" stop-color="#5a3f13"/>
  </linearGradient>
  <linearGradient id="da-off-shade" x1="0" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#8fa07a"/><stop offset="0.3" stop-color="#5f6b4a"/>
    <stop offset="0.72" stop-color="#3e4732"/><stop offset="1" stop-color="#28301f"/>
  </linearGradient>
  <linearGradient id="da-off-bake" x1="0" y1="0" x2="1" y2="0.35">
    <stop offset="0" stop-color="#100c05"/><stop offset="0.2" stop-color="#3d3121"/>
    <stop offset="0.42" stop-color="#20190f"/><stop offset="0.75" stop-color="#12100a"/>
    <stop offset="1" stop-color="#2a2116"/>
  </linearGradient>
  <linearGradient id="da-off-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2117"/><stop offset="0.4" stop-color="#1a140d"/><stop offset="1" stop-color="#0f0b06"/>
  </linearGradient>
  <linearGradient id="da-off-paper" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#fdf4dd"/><stop offset="0.55" stop-color="#e6d8b0"/><stop offset="1" stop-color="#b3a37c"/>
  </linearGradient>
  <radialGradient id="da-off-glow" cx="0.72" cy="0.56" r="0.7">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.30"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-off-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.44"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-off-vig" cx="0.5" cy="0.46" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#da-off-wall)"/>
<rect width="1000" height="620" fill="url(#da-off-glow)"/>

<!-- panelled wall and picture rail -->
<rect x="0" y="0" width="1000" height="22" fill="#241b12"/>
<rect x="0" y="0" width="1000" height="4" fill="#5b4830" opacity="0.5"/>
<rect x="0" y="22" width="1000" height="8" fill="#4a3b28"/>
<rect x="0" y="22" width="1000" height="2.5" fill="#8a6f43" opacity="0.5"/>
<rect x="0" y="30" width="1000" height="4" fill="#0f0b06" opacity="0.5"/>
<rect x="0" y="46" width="1000" height="5" fill="#33271a"/>
<rect x="0" y="46" width="1000" height="1.6" fill="#7a6440" opacity="0.5"/>
<!-- the far end of the room falls away from the lamp -->
<path d="M0 0 L280 0 L280 450 L0 450 Z" fill="#0b0803" opacity="0.28"/>
<path d="M0 0 L120 0 L120 450 L0 450 Z" fill="#0b0803" opacity="0.2"/>
<rect x="0" y="330" width="1000" height="120" fill="url(#da-off-panel)"/>
<rect x="0" y="330" width="1000" height="7" fill="#5b4830"/>
<rect x="0" y="330" width="1000" height="2.5" fill="#8a6f43" opacity="0.5"/>
<g fill="none" stroke="#2a2016" stroke-width="3">
  <rect x="24" y="352" width="120" height="74"/><rect x="164" y="352" width="120" height="74"/>
  <rect x="304" y="352" width="120" height="74"/><rect x="584" y="352" width="120" height="74"/>
  <rect x="724" y="352" width="120" height="74"/><rect x="864" y="352" width="112" height="74"/>
</g>
<g fill="#6b5638" opacity="0.28">
  <rect x="24" y="352" width="120" height="2"/><rect x="164" y="352" width="120" height="2"/><rect x="304" y="352" width="120" height="2"/>
  <rect x="584" y="352" width="120" height="2"/><rect x="724" y="352" width="120" height="2"/><rect x="864" y="352" width="112" height="2"/>
</g>
<g fill="#0f0b06" opacity="0.42">
  <rect x="24" y="424" width="120" height="2.5"/><rect x="164" y="424" width="120" height="2.5"/><rect x="304" y="424" width="120" height="2.5"/>
  <rect x="584" y="424" width="120" height="2.5"/><rect x="724" y="424" width="120" height="2.5"/><rect x="864" y="424" width="112" height="2.5"/>
</g>
<rect x="0" y="444" width="1000" height="176" fill="url(#da-off-floor)"/>
<rect x="0" y="440" width="1000" height="8" fill="#3d2f1e"/>
<rect x="0" y="440" width="1000" height="2.5" fill="#6f5936" opacity="0.5"/>
<g stroke="#241b12" stroke-width="2.5" opacity="0.7">
  <line x1="0" y1="486" x2="1000" y2="486"/><line x1="0" y1="540" x2="1000" y2="540"/>
</g>
<ellipse cx="800" cy="500" rx="300" ry="80" fill="#d9a441" opacity="0.05"/>

<!-- the gallery of framed clippings -->
<g>
  <rect x="33" y="79" width="128" height="104" fill="#0d0904" opacity="0.38"/>
  <rect x="40" y="72" width="128" height="104" fill="url(#da-off-gilt)"/>
  <rect x="40" y="72" width="128" height="3" fill="#f0d79a" opacity="0.3"/>
  <rect x="40" y="173" width="128" height="3" fill="#150f06" opacity="0.45"/>
  <rect x="47" y="79" width="114" height="90" fill="#241b12"/>
  <rect x="53" y="85" width="102" height="78" fill="#cdbc93"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="59" y1="94" x2="101" y2="94"/><line x1="59" y1="100" x2="101" y2="100"/><line x1="59" y1="106" x2="101" y2="106"/>
    <line x1="59" y1="112" x2="101" y2="112"/><line x1="59" y1="118" x2="95" y2="118"/><line x1="59" y1="132" x2="101" y2="132"/>
    <line x1="59" y1="138" x2="101" y2="138"/><line x1="59" y1="144" x2="97" y2="144"/><line x1="59" y1="150" x2="101" y2="150"/>
  </g>
  <rect x="109" y="92" width="40" height="44" fill="#8e8e88"/>
  <rect x="109" y="142" width="40" height="6" fill="#8d7c62"/>
  <path d="M47 79 l40 0 l-40 52 z" fill="#f0e7ce" opacity="0.06"/>
</g>
<g>
  <rect x="179" y="103" width="104" height="130" fill="#0d0904" opacity="0.38"/>
  <rect x="186" y="96" width="104" height="130" fill="url(#da-off-gilt)"/>
  <rect x="186" y="96" width="104" height="3" fill="#f0d79a" opacity="0.3"/>
  <rect x="186" y="223" width="104" height="3" fill="#150f06" opacity="0.45"/>
  <rect x="193" y="103" width="90" height="116" fill="#241b12"/>
  <rect x="199" y="109" width="78" height="104" fill="#e3d5ac"/>
  <rect x="205" y="116" width="66" height="42" fill="#8e8e88"/>
  <path d="M205 158 l0 -14 q16 -18 32 0 q16 -14 34 2 l0 12 z" fill="#6b6558"/>
  <circle cx="228" cy="132" r="8" fill="#6b6558"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="205" y1="170" x2="271" y2="170"/><line x1="205" y1="177" x2="271" y2="177"/>
    <line x1="205" y1="184" x2="263" y2="184"/><line x1="205" y1="191" x2="271" y2="191"/><line x1="205" y1="198" x2="257" y2="198"/>
  </g>
</g>
<g>
  <rect x="301" y="71" width="180" height="150" fill="#0d0904" opacity="0.38"/>
  <rect x="308" y="64" width="180" height="150" fill="url(#da-off-gilt)"/>
  <rect x="308" y="64" width="180" height="3" fill="#f0d79a" opacity="0.3"/>
  <rect x="308" y="211" width="180" height="3" fill="#150f06" opacity="0.45"/>
  <rect x="317" y="73" width="162" height="132" fill="#6b5326"/>
  <rect x="326" y="82" width="144" height="114" fill="#2b2b22"/>
  <path d="M326 196 l144 0 l0 -40 q-72 -34 -144 0 z" fill="#26221c"/>
  <ellipse cx="386" cy="132" rx="26" ry="30" fill="#b3a184"/>
  <path d="M360 128 q26 -32 52 0 q6 -32 -26 -32 q-32 0 -26 32 z" fill="#3b2f22"/>
  <g stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round">
    <line x1="372" y1="130" x2="382" y2="130"/><line x1="390" y1="130" x2="400" y2="130"/>
  </g>
  <path d="M372 160 l28 0 l6 36 l-40 0 z" fill="#e3d5ac"/>
  <path d="M382 160 l8 0 l-2 36 l-4 0 z" fill="#5d1f18"/>
  <rect x="428" y="120" width="24" height="40" rx="11" fill="#2a2016"/>
  <rect x="436" y="160" width="8" height="36" fill="#33271a"/>
  <ellipse cx="440" cy="196" rx="20" ry="6" fill="#241b12"/>
  <g stroke="#6b5326" stroke-width="1.6">
    <line x1="432" y1="128" x2="448" y2="128"/><line x1="432" y1="136" x2="448" y2="136"/><line x1="432" y1="144" x2="448" y2="144"/>
  </g>
  <path d="M317 73 l52 0 l-52 66 z" fill="#f0e7ce" opacity="0.07"/>
</g>
<g>
  <rect x="53" y="203" width="112" height="96" fill="#0d0904" opacity="0.38"/>
  <rect x="60" y="196" width="112" height="96" fill="url(#da-off-gilt)"/>
  <rect x="60" y="196" width="112" height="3" fill="#f0d79a" opacity="0.3"/>
  <rect x="60" y="289" width="112" height="3" fill="#150f06" opacity="0.45"/>
  <rect x="67" y="203" width="98" height="82" fill="#241b12"/>
  <rect x="73" y="209" width="86" height="70" fill="#cdbc93"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="79" y1="218" x2="153" y2="218"/><line x1="79" y1="225" x2="153" y2="225"/><line x1="79" y1="232" x2="145" y2="232"/>
    <line x1="79" y1="246" x2="153" y2="246"/><line x1="79" y1="253" x2="149" y2="253"/><line x1="79" y1="260" x2="153" y2="260"/><line x1="79" y1="267" x2="139" y2="267"/>
  </g>
  <rect x="79" y="236" width="74" height="5" fill="#3b2f22"/>
</g>
<g>
  <rect x="189" y="251" width="106" height="82" fill="#0d0904" opacity="0.38"/>
  <rect x="196" y="244" width="106" height="82" fill="url(#da-off-gilt)"/>
  <rect x="196" y="244" width="106" height="3" fill="#f0d79a" opacity="0.3"/>
  <rect x="196" y="323" width="106" height="3" fill="#150f06" opacity="0.45"/>
  <rect x="203" y="251" width="92" height="68" fill="#241b12"/>
  <rect x="209" y="257" width="80" height="56" fill="#e3d5ac"/>
  <rect x="215" y="264" width="34" height="42" fill="#8e8e88"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="255" y1="266" x2="283" y2="266"/><line x1="255" y1="273" x2="283" y2="273"/><line x1="255" y1="280" x2="277" y2="280"/>
    <line x1="255" y1="287" x2="283" y2="287"/><line x1="255" y1="294" x2="279" y2="294"/><line x1="255" y1="301" x2="283" y2="301"/>
  </g>
</g>
<g>
  <rect x="311" y="241" width="140" height="88" fill="#0d0904" opacity="0.38"/>
  <rect x="318" y="234" width="140" height="88" fill="url(#da-off-gilt)"/>
  <rect x="318" y="234" width="140" height="3" fill="#f0d79a" opacity="0.3"/>
  <rect x="318" y="319" width="140" height="3" fill="#150f06" opacity="0.45"/>
  <rect x="326" y="242" width="124" height="72" fill="#241b12"/>
  <rect x="333" y="249" width="110" height="58" fill="#cdbc93"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="340" y1="258" x2="436" y2="258"/><line x1="340" y1="265" x2="436" y2="265"/><line x1="340" y1="272" x2="424" y2="272"/>
    <line x1="340" y1="286" x2="436" y2="286"/><line x1="340" y1="293" x2="428" y2="293"/><line x1="340" y1="300" x2="436" y2="300"/>
  </g>
  <line x1="388" y1="252" x2="388" y2="304" stroke="#b9a87e" stroke-width="1.2"/>
  <rect x="340" y="276" width="96" height="6" fill="#3b2f22"/>
</g>

<!-- the key to the city, mounted -->
<g>
  <rect x="513" y="103" width="150" height="170" rx="5" fill="#0d0904" opacity="0.38"/>
  <rect x="520" y="96" width="150" height="170" rx="5" fill="#3b2f22"/>
  <rect x="520" y="96" width="150" height="3" rx="1.5" fill="#7a6440" opacity="0.45"/>
  <rect x="528" y="104" width="134" height="154" rx="4" fill="#241b12"/>
  <rect x="528" y="104" width="134" height="154" rx="4" fill="none" stroke="#6b5326" stroke-width="3"/>
  <g>
    <circle cx="599" cy="149" r="30" fill="none" stroke="#0d0904" stroke-width="11" opacity="0.4"/>
    <circle cx="596" cy="146" r="30" fill="none" stroke="url(#da-off-brass)" stroke-width="11"/>
    <circle cx="596" cy="146" r="14" fill="#241b12"/>
    <path d="M580 124 l32 0" stroke="#c98a3a" stroke-width="6"/>
    <rect x="590" y="174" width="13" height="72" fill="url(#da-off-brass)"/>
    <rect x="590" y="174" width="4" height="72" fill="#f4d99a" opacity="0.6"/>
    <path d="M603 218 l26 0 l0 12 l-26 0 z" fill="#c98a3a"/>
    <path d="M603 236 l18 0 l0 12 l-18 0 z" fill="#c98a3a"/>
    <circle cx="596" cy="146" r="34" fill="#ffd98a" opacity="0.1"/>
  </g>
  <rect x="562" y="252" width="72" height="10" rx="3" fill="#6b5326"/>
</g>

<!-- twenty years of the show, bound in leather -->
<g>
  <rect x="687" y="77" width="288" height="222" fill="#0d0904" opacity="0.35"/>
  <rect x="694" y="70" width="288" height="222" fill="#241b12"/>
  <rect x="694" y="70" width="288" height="222" fill="url(#da-off-floor)" opacity="0.5"/>
  <rect x="694" y="70" width="288" height="10" fill="#4a3b28"/>
  <rect x="694" y="70" width="288" height="3" fill="#7a6440" opacity="0.5"/>
  <rect x="694" y="80" width="288" height="6" fill="#0d0904" opacity="0.55"/>
  <rect x="698" y="172" width="280" height="11" fill="#3b2f22"/>
  <rect x="698" y="172" width="280" height="2.5" fill="#7a6440" opacity="0.4"/>
  <rect x="698" y="183" width="280" height="6" fill="#0d0904" opacity="0.5"/>
  <rect x="698" y="278" width="280" height="14" fill="#3b2f22"/>
  <rect x="698" y="278" width="280" height="2.5" fill="#7a6440" opacity="0.4"/>
  <path d="M700 70 l276 0 l0 5 q-138 5 -276 0 z" fill="#c9bda0" opacity="0.09"/>
  <g>
    <rect x="706" y="92" width="20" height="80" fill="#5d1f18"/><rect x="728" y="88" width="18" height="84" fill="#4a3524"/>
    <rect x="748" y="92" width="22" height="80" fill="#5d1f18"/><rect x="772" y="86" width="18" height="86" fill="#3b2f22"/>
    <rect x="792" y="92" width="20" height="80" fill="#5d1f18"/><rect x="814" y="90" width="18" height="82" fill="#4a3524"/>
    <rect x="834" y="92" width="22" height="80" fill="#5d1f18"/><rect x="858" y="88" width="18" height="84" fill="#3b2f22"/>
    <rect x="878" y="92" width="20" height="80" fill="#5d1f18"/><rect x="900" y="90" width="18" height="82" fill="#4a3524"/>
    <rect x="920" y="92" width="22" height="80" fill="#5d1f18"/><rect x="944" y="88" width="18" height="84" fill="#3b2f22"/>
  </g>
  <g fill="#c98a3a" opacity="0.85">
    <rect x="706" y="112" width="20" height="4"/><rect x="748" y="112" width="22" height="4"/><rect x="792" y="112" width="20" height="4"/>
    <rect x="834" y="112" width="22" height="4"/><rect x="878" y="112" width="20" height="4"/><rect x="920" y="112" width="22" height="4"/>
    <rect x="706" y="146" width="20" height="4"/><rect x="748" y="146" width="22" height="4"/><rect x="792" y="146" width="20" height="4"/>
    <rect x="834" y="146" width="22" height="4"/><rect x="878" y="146" width="20" height="4"/><rect x="920" y="146" width="22" height="4"/>
  </g>
  <g>
    <rect x="706" y="198" width="22" height="80" fill="#4a3524"/><rect x="730" y="196" width="18" height="82" fill="#5d1f18"/>
    <rect x="750" y="200" width="20" height="78" fill="#3b2f22"/><rect x="772" y="194" width="22" height="84" fill="#4a3524"/>
    <rect x="796" y="198" width="18" height="80" fill="#5d1f18"/><rect x="816" y="196" width="20" height="82" fill="#3b2f22"/>
    <rect x="838" y="200" width="22" height="78" fill="#4a3524"/><rect x="862" y="194" width="18" height="84" fill="#5d1f18"/>
    <path d="M884 278 l40 -74 l14 8 l-38 66 z" fill="#4a3524"/>
    <rect x="930" y="240" width="48" height="38" fill="#33271a"/>
    <rect x="936" y="248" width="36" height="26" fill="#241b12"/>
  </g>
  <g fill="#c98a3a" opacity="0.8">
    <rect x="706" y="220" width="22" height="4"/><rect x="750" y="220" width="20" height="4"/><rect x="796" y="220" width="18" height="4"/>
    <rect x="838" y="220" width="22" height="4"/>
  </g>
</g>

<!-- the desk -->
<g>
  <path d="M112 388 L888 388 L954 462 L46 462 Z" fill="url(#da-off-desk)"/>
  <ellipse cx="800" cy="428" rx="230" ry="42" fill="#ffd98a" opacity="0.11"/>
  <ellipse cx="798" cy="424" rx="140" ry="26" fill="#ffd98a" opacity="0.08"/>
  <g stroke="#2b2115" stroke-width="1.2" opacity="0.45">
    <path d="M118 400 q240 6 480 -2 q160 -5 300 5"/><path d="M104 422 q250 8 500 -4 q160 -6 310 7"/>
    <path d="M88 446 q260 9 520 -6 q170 -6 316 9"/>
  </g>
  <g stroke="#8a6f43" stroke-width="0.9" opacity="0.16">
    <path d="M118 404 q240 6 480 -2 q160 -5 300 5"/><path d="M88 450 q260 9 520 -6 q170 -6 316 9"/>
  </g>
  <ellipse cx="722" cy="446" rx="20" ry="7" fill="none" stroke="#2a1c10" stroke-width="2.4" opacity="0.45"/>
  <path d="M112 388 L888 388 L892 396 L108 396 Z" fill="#7a6440"/>
  <path d="M112 388 L888 388 L889 391 L111 391 Z" fill="#a8895a" opacity="0.55"/>
  <path d="M46 462 L954 462 L954 482 L46 482 Z" fill="#3a2d1d"/>
  <path d="M46 462 L954 462 L954 466 L46 466 Z" fill="#8a6f43" opacity="0.45"/>
  <path d="M46 482 L954 482 L946 494 L54 494 Z" fill="#1a130b"/>
  <rect x="72" y="494" width="240" height="126" fill="#2f2519"/>
  <rect x="688" y="494" width="240" height="126" fill="#2f2519"/>
  <g fill="none" stroke="#3b2f22" stroke-width="3">
    <rect x="86" y="576" width="212" height="38"/><rect x="702" y="576" width="212" height="38"/>
  </g>
  <g fill="#9b7a3f">
    <rect x="166" y="592" width="52" height="8" rx="3"/><rect x="782" y="592" width="52" height="8" rx="3"/>
  </g>
  <rect x="330" y="494" width="340" height="102" fill="#241b12"/>
  <g fill="none" stroke="#33271a" stroke-width="3">
    <rect x="348" y="506" width="304" height="34"/>
  </g>
</g>

<!-- the banker's lamp: the room's one lit corner -->
<rect x="560" y="240" width="440" height="330" fill="url(#da-off-lamp)" class="fx-glow" style="--d:2.4s"/>
<g>
  <ellipse cx="784" cy="394" rx="46" ry="11" fill="#0d0904" opacity="0.4"/>
  <ellipse cx="796" cy="386" rx="34" ry="9" fill="url(#da-off-brass)"/>
  <ellipse cx="796" cy="384" rx="26" ry="6" fill="#f0c878" opacity="0.3"/>
  <rect x="790" y="330" width="12" height="56" fill="url(#da-off-brass)"/>
  <path d="M748 318 q48 -30 96 0 l0 20 q-48 14 -96 0 z" fill="url(#da-off-shade)"/>
  <path d="M748 318 q48 -30 96 0 l0 6 q-48 -24 -96 0 z" fill="#5f6b4a"/>
  <path d="M754 316 q22 -12 46 -12 l0 5 q-22 0 -42 11 z" fill="#b0c096" opacity="0.4"/>
  <path d="M752 334 q44 12 88 0" fill="none" stroke="#ffd98a" stroke-width="2.4" opacity="0.4"/>
  <g class="fx-glow" style="--d:.35s"><ellipse cx="796" cy="338" rx="44" ry="10" fill="#ffd98a" opacity="0.5"/></g>
  <g class="fx-glow" style="--d:1.7s"><ellipse cx="796" cy="390" rx="76" ry="13" fill="#ffd98a" opacity="0.12"/></g>
</g>

<!-- the telephone that rang all week, and an ashtray -->
<g>
  <ellipse cx="636" cy="440" rx="60" ry="12" fill="#0d0904" opacity="0.42"/>
  <path d="M596 434 L688 434 L676 406 L608 406 Z" fill="url(#da-off-bake)"/>
  <path d="M600 430 L684 430 L674 410 L610 410 Z" fill="#2a2016"/>
  <path d="M604 428 L616 410 L622 410 L610 428 Z" fill="#7d6a4a" opacity="0.28"/>
  <circle cx="642" cy="420" r="17" fill="#14110d"/>
  <circle cx="642" cy="420" r="12" fill="#3b2f22"/>
  <g fill="#14110d">
    <circle cx="634" cy="412" r="2.6"/><circle cx="643" cy="410" r="2.6"/><circle cx="651" cy="414" r="2.6"/>
    <circle cx="653" cy="423" r="2.6"/><circle cx="646" cy="429" r="2.6"/><circle cx="636" cy="428" r="2.6"/>
  </g>
  <path d="M598 402 L690 402 L686 394 L602 394 Z" fill="#241b12"/>
  <rect x="600" y="380" width="88" height="16" rx="8" fill="url(#da-off-bake)"/>
  <path d="M608 382 q36 -4 72 0 l0 3 q-36 -4 -72 0 z" fill="#a08e6a" opacity="0.3"/>
  <ellipse cx="606" cy="388" rx="12" ry="11" fill="#2a2016"/>
  <ellipse cx="682" cy="388" rx="12" ry="11" fill="#2a2016"/>
  <path d="M688 424 q34 12 26 34" fill="none" stroke="#14110d" stroke-width="4"/>
  <g>
    <ellipse cx="540" cy="410" rx="36" ry="10" fill="#0d0904" opacity="0.38"/>
    <ellipse cx="546" cy="404" rx="30" ry="10" fill="#33271a"/>
    <path d="M520 401 q26 -10 52 0 l0 3 q-26 -8 -52 0 z" fill="#c9bda0" opacity="0.22"/>
    <ellipse cx="546" cy="401" rx="23" ry="7" fill="#151009"/>
    <path d="M552 398 l26 -10" stroke="#e3d5ac" stroke-width="5" stroke-linecap="round"/>
    <path d="M578 388 l8 -3" stroke="#4a463e" stroke-width="5" stroke-linecap="round"/>
  </g>
</g>

<!-- THE ORCHARD FARM FILE, open on the blotter -->
<g>
  <rect x="268" y="386" width="290" height="62" fill="#3a2418"/>
  <rect x="268" y="386" width="290" height="3" fill="#6e4a30" opacity="0.45"/>
  <rect x="276" y="392" width="274" height="50" fill="#2f1d14"/>
  <ellipse cx="404" cy="440" rx="120" ry="14" fill="#0d0904" opacity="0.35"/>
</g>
<g transform="rotate(-3 400 412)">
  <path d="M292 434 L400 424 L508 434 L508 380 L400 370 L292 380 Z" fill="#8a6c30"/>
  <path d="M298 430 L398 421 L398 376 L298 384 Z" fill="url(#da-off-paper)"/>
  <path d="M402 421 L502 430 L502 384 L402 376 Z" fill="url(#da-off-paper)"/>
  <path d="M402 421 L502 430 L502 384 L402 376 Z" fill="#ffd98a" opacity="0.14"/>
  <path d="M298 430 L398 421 L398 376 L298 384 Z" fill="#5f523a" opacity="0.12"/>
  <rect x="310" y="386" width="42" height="32" fill="#8e8e88"/>
  <path d="M310 418 l0 -10 q10 -12 21 0 q10 -10 21 2 l0 8 z" fill="#6b6558"/>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="360" y1="388" x2="392" y2="386"/><line x1="360" y1="395" x2="392" y2="393"/><line x1="360" y1="402" x2="386" y2="400"/>
    <line x1="360" y1="409" x2="392" y2="407"/><line x1="310" y1="424" x2="390" y2="418"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.4">
    <line x1="412" y1="386" x2="492" y2="392"/><line x1="412" y1="393" x2="492" y2="399"/><line x1="412" y1="400" x2="480" y2="406"/>
    <line x1="412" y1="407" x2="492" y2="413"/><line x1="412" y1="414" x2="486" y2="420"/>
  </g>
  <path d="M424 380 l72 6 l-2 12 l-72 -6 z" fill="#cdbc93"/>
  <g stroke="#a8352a" stroke-width="3" stroke-linecap="round">
    <line x1="428" y1="424" x2="482" y2="428"/>
    <path d="M436 416 l16 8" fill="none"/>
  </g>
  <path d="M290 434 l220 0 l0 8 l-220 0 z" fill="#6b5326"/>
  <rect x="440" y="440" width="76" height="7" rx="3" fill="#a8352a"/>
  <ellipse cx="520" cy="443" rx="6" ry="3.5" fill="#3b2f22"/>
</g>

<!-- THE DESK BLOTTER: its near corner turned back, and what was lying under it -->
<g>
  <path d="M268 390 L268 448 L226 442 L232 396 Z" fill="#4a2f1e"/>
  <path d="M268 390 L268 448 L262 447 L262 391 Z" fill="#1c1109"/>
  <path d="M232 396 L268 390 L268 396 L233 402 Z" fill="#8a5a34" opacity="0.45"/>
  <path d="M226 442 L268 448 L268 454 L228 448 Z" fill="#140c06" opacity="0.6"/>
  <path d="M244 394 q10 26 4 50" fill="none" stroke="#2f1d14" stroke-width="2" opacity="0.5"/>
  <ellipse cx="212" cy="450" rx="66" ry="8" fill="#0d0904" opacity="0.45"/>
  <path d="M140 412 q54 -12 100 -6 l6 34 q-52 8 -108 -2 z" fill="#efe4c6"/>
  <path d="M140 412 q54 -12 100 -6 l1 6 q-48 -6 -100 6 z" fill="#fdf6e2"/>
  <path d="M136 436 q56 10 108 2 l1 6 q-54 8 -110 -2 z" fill="#b3a37c" opacity="0.35"/>
  <path d="M178 408 l4 38" fill="none" stroke="#c8b990" stroke-width="3" opacity="0.6"/>
  <path d="M180 408 l4 38" fill="none" stroke="#fdf6e2" stroke-width="1.2" opacity="0.5"/>
  <path d="M212 406 l4 38" fill="none" stroke="#c8b990" stroke-width="3" opacity="0.5"/>
  <g fill="#d6c8a0" opacity="0.8">
    <path d="M146 411 l6 -5 l5 5 z"/><path d="M166 408 l6 -5 l5 5 z"/><path d="M186 406 l6 -5 l5 5 z"/>
    <path d="M206 405 l6 -5 l5 5 z"/><path d="M226 404 l6 -5 l5 5 z"/>
  </g>
  <g fill="none" stroke="#a8352a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M150 421 q7 -8 10 1 q2 8 -6 8"/><path d="M170 419 q8 -3 7 5 q-1 6 -7 5"/>
    <path d="M190 418 q7 -7 10 1 q2 8 -7 8"/><path d="M210 416 q-2 6 8 5 l-4 -8"/>
  </g>
  <path d="M148 434 q46 -6 84 -4" fill="none" stroke="#a8352a" stroke-width="2.4" opacity="0.8"/>
  <path d="M150 439 q44 -6 80 -4" fill="none" stroke="#8b2419" stroke-width="2" opacity="0.6"/>
</g>

<!-- the correspondence drawer, pulled out -->
<g>
  <path d="M108 486 L318 486 L336 566 L96 566 Z" fill="#3b2f22"/>
  <path d="M108 486 L318 486 L320 494 L106 494 Z" fill="#5b4830"/>
  <path d="M108 486 L318 486 L318 489 L108 489 Z" fill="#8a6f43" opacity="0.45"/>
  <path d="M112 494 L316 494 L322 512 L108 512 Z" fill="#0d0904" opacity="0.4"/>
  <path d="M96 566 L336 566 L336 596 L96 596 Z" fill="#2a2016"/>
  <path d="M96 596 L336 596 L332 606 L100 606 Z" fill="#1b140d"/>
  <rect x="182" y="576" width="66" height="10" rx="4" fill="#9b7a3f"/>
  <g>
    <path d="M120 494 L172 492 L176 548 L120 550 Z" fill="#e3d5ac"/>
    <path d="M150 493 L206 491 L212 546 L152 548 Z" fill="#f0e7ce"/>
    <path d="M186 492 L242 490 L248 544 L190 546 Z" fill="#cdbc93"/>
    <path d="M222 491 L278 489 L286 542 L228 544 Z" fill="#e3d5ac"/>
    <path d="M258 490 L314 488 L322 540 L266 542 Z" fill="#f0e7ce"/>
    <g stroke="#8d7c62" stroke-width="1.3">
      <line x1="128" y1="506" x2="166" y2="505"/><line x1="128" y1="514" x2="170" y2="513"/>
      <line x1="196" y1="504" x2="238" y2="502"/><line x1="196" y1="512" x2="236" y2="510"/>
      <line x1="268" y1="502" x2="312" y2="500"/><line x1="268" y1="510" x2="308" y2="508"/>
    </g>
  </g>
  <!-- the one letter kept apart, worn soft from seven years of handling -->
  <g transform="rotate(-7 220 464)">
    <path d="M168 440 q60 -8 118 2 q4 26 -2 44 q-60 8 -118 -2 z" fill="#e3d5ac"/>
    <path d="M168 440 q60 -8 118 2 l0 6 q-60 -8 -118 0 z" fill="#cdbc93"/>
    <g stroke="#8d7c62" stroke-width="1.4">
      <line x1="180" y1="454" x2="256" y2="456"/><line x1="180" y1="462" x2="272" y2="464"/>
      <line x1="180" y1="470" x2="248" y2="472"/><line x1="216" y1="478" x2="274" y2="480"/>
    </g>
    <path d="M176 442 q26 22 8 42" fill="none" stroke="#b9a87e" stroke-width="1.6"/>
    <path d="M250 440 q-14 24 6 44" fill="none" stroke="#b9a87e" stroke-width="1.6"/>
  </g>
</g>

<!-- the contracts drawer, two fresh documents -->
<g>
  <path d="M700 492 L906 492 L920 570 L682 570 Z" fill="#3b2f22"/>
  <path d="M700 492 L906 492 L908 500 L698 500 Z" fill="#5b4830"/>
  <path d="M700 492 L906 492 L906 495 L700 495 Z" fill="#8a6f43" opacity="0.45"/>
  <path d="M704 500 L904 500 L910 518 L700 518 Z" fill="#0d0904" opacity="0.38"/>
  <path d="M682 570 L920 570 L920 598 L682 598 Z" fill="#2a2016"/>
  <path d="M682 598 L920 598 L916 608 L686 608 Z" fill="#1b140d"/>
  <rect x="766" y="578" width="66" height="10" rx="4" fill="#9b7a3f"/>
  <g transform="rotate(4 760 520)">
    <rect x="704" y="486" width="112" height="72" fill="#f0e7ce"/>
    <g stroke="#8d7c62" stroke-width="1.4">
      <line x1="714" y1="500" x2="796" y2="500"/><line x1="714" y1="508" x2="806" y2="508"/><line x1="714" y1="516" x2="788" y2="516"/>
      <line x1="714" y1="524" x2="806" y2="524"/><line x1="714" y1="532" x2="778" y2="532"/>
    </g>
    <circle cx="782" cy="542" r="16" fill="none" stroke="#a8352a" stroke-width="3.5" opacity="0.85"/>
    <path d="M770 542 l24 0" stroke="#a8352a" stroke-width="3" opacity="0.85"/>
  </g>
  <g transform="rotate(-5 856 524)">
    <rect x="810" y="492" width="106" height="70" fill="#e3d5ac"/>
    <g stroke="#8d7c62" stroke-width="1.4">
      <line x1="820" y1="506" x2="896" y2="506"/><line x1="820" y1="514" x2="906" y2="514"/><line x1="820" y1="522" x2="884" y2="522"/>
      <line x1="820" y1="530" x2="900" y2="530"/>
    </g>
    <path d="M822 548 q10 -14 20 0 q8 -16 18 2 q10 -12 20 -2" fill="none" stroke="#1b2436" stroke-width="2.6"/>
    <line x1="820" y1="556" x2="896" y2="556" stroke="#b9a87e" stroke-width="1.4"/>
  </g>
</g>

<!-- foreground: the visitor's chair, its back to us -->
<g>
  <path d="M368 620 L636 620 L620 522 q-126 -26 -238 -2 Z" fill="#1b140d"/>
  <path d="M540 524 q46 2 80 -2 l16 98 l-72 0 z" fill="#2c2116" opacity="0.65"/>
  <path d="M382 528 q120 -22 238 0" fill="none" stroke="#4a3524" stroke-width="6"/>
  <path d="M420 524 q104 -16 200 2" fill="none" stroke="#7a5c3a" stroke-width="1.8" opacity="0.4"/>
  <path d="M392 566 q112 -18 216 0" fill="none" stroke="#33271a" stroke-width="4"/>
  <g fill="#2b1f14">
    <circle cx="440" cy="552" r="5"/><circle cx="502" cy="546" r="5"/><circle cx="564" cy="552" r="5"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#da-off-vig)"/>
`,
  },

  lobby: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_visitorbook: { x: 54, y: 60 },
      h_chetdesk: { x: 14, y: 84 },
      h_personnel: { x: 89, y: 48 },
    },
    svg: `
<defs>
  <linearGradient id="da-lob-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#37301f"/><stop offset="1" stop-color="#171208"/>
  </linearGradient>
  <linearGradient id="da-lob-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b2436"/><stop offset="1" stop-color="#0d1119"/>
  </linearGradient>
  <linearGradient id="da-lob-counter" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5b4830"/><stop offset="1" stop-color="#2f2519"/>
  </linearGradient>
  <linearGradient id="da-lob-steel" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#22221e"/><stop offset="0.12" stop-color="#5e5e55"/>
    <stop offset="0.3" stop-color="#43433c"/><stop offset="0.6" stop-color="#56564d"/>
    <stop offset="0.86" stop-color="#2e2e29"/><stop offset="1" stop-color="#1a1a17"/>
  </linearGradient>
  <radialGradient id="da-lob-jack" cx="0.36" cy="0.3" r="0.8">
    <stop offset="0" stop-color="#2e2618"/><stop offset="0.5" stop-color="#0d0a05"/><stop offset="1" stop-color="#050402"/>
  </radialGradient>
  <linearGradient id="da-lob-alum" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0" stop-color="#171106"/><stop offset="0.12" stop-color="#463a25"/>
    <stop offset="0.3" stop-color="#2e2517"/><stop offset="0.55" stop-color="#544527"/>
    <stop offset="0.78" stop-color="#28200f"/><stop offset="1" stop-color="#130e05"/>
  </linearGradient>
  <linearGradient id="da-lob-brass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a3617"/><stop offset="0.26" stop-color="#d0a95d"/>
    <stop offset="0.55" stop-color="#8a6a2c"/><stop offset="1" stop-color="#3a2b12"/>
  </linearGradient>
  <linearGradient id="da-lob-lino" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#38322a"/><stop offset="0.4" stop-color="#2a251e"/><stop offset="1" stop-color="#191510"/>
  </linearGradient>
  <radialGradient id="da-lob-dial" cx="0.62" cy="0.28" r="0.86">
    <stop offset="0" stop-color="#f4ecd4"/><stop offset="0.55" stop-color="#d6c69c"/><stop offset="1" stop-color="#8b7c58"/>
  </radialGradient>
  <linearGradient id="da-lob-shade" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f6efd8"/><stop offset="0.45" stop-color="#dccfa6"/><stop offset="1" stop-color="#9a8a61"/>
  </linearGradient>
  <radialGradient id="da-lob-glow" cx="0.46" cy="0.34" r="0.68">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-lob-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.4"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="da-lob-vig" cx="0.48" cy="0.46" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#da-lob-wall)"/>
<rect width="1000" height="620" fill="url(#da-lob-glow)"/>

<!-- wall, rail and the linoleum -->
<rect x="0" y="0" width="1000" height="18" fill="#241b12"/>
<rect x="0" y="0" width="1000" height="3" fill="#5b4830" opacity="0.5"/>
<rect x="0" y="18" width="1000" height="7" fill="#4a3b28"/>
<rect x="0" y="18" width="1000" height="2" fill="#8a6f43" opacity="0.5"/>
<path d="M0 25 L230 25 L230 470 L0 470 Z" fill="#0b0803" opacity="0.26"/>
<path d="M980 25 L1000 25 L1000 470 L980 470 Z" fill="#0b0803" opacity="0.24"/>
<rect x="0" y="392" width="1000" height="82" fill="#2f2519"/>
<rect x="0" y="392" width="1000" height="6" fill="#5b4830"/>
<rect x="0" y="392" width="1000" height="2" fill="#8a6f43" opacity="0.45"/>
<rect x="0" y="398" width="1000" height="5" fill="#0f0b06" opacity="0.5"/>
<rect x="0" y="466" width="1000" height="8" fill="#241b12"/>
<rect x="0" y="474" width="1000" height="146" fill="url(#da-lob-lino)"/>
<g stroke="#1e1a15" stroke-width="2">
  <line x1="0" y1="504" x2="1000" y2="504"/><line x1="0" y1="540" x2="1000" y2="540"/><line x1="0" y1="582" x2="1000" y2="582"/>
  <line x1="120" y1="474" x2="60" y2="620"/><line x1="260" y1="474" x2="238" y2="620"/><line x1="400" y1="474" x2="404" y2="620"/>
  <line x1="540" y1="474" x2="570" y2="620"/><line x1="680" y1="474" x2="736" y2="620"/><line x1="820" y1="474" x2="902" y2="620"/>
</g>
<g fill="#242019">
  <path d="M260 504 L400 504 L404 540 L250 540 Z"/><path d="M540 504 L680 504 L700 540 L554 540 Z"/>
  <path d="M100 540 L250 540 L238 582 L78 582 Z"/><path d="M404 540 L554 540 L570 582 L410 582 Z"/>
  <path d="M700 540 L850 540 L880 582 L718 582 Z"/>
</g>
<ellipse cx="560" cy="546" rx="330" ry="88" fill="#d9a441" opacity="0.05"/>
<ellipse cx="566" cy="528" rx="180" ry="46" fill="#ffd98a" opacity="0.045"/>
<path d="M560 476 q-30 70 -66 144" fill="none" stroke="#fff3d0" stroke-width="26" opacity="0.02"/>
<path d="M594 476 q26 70 60 144" fill="none" stroke="#fff3d0" stroke-width="20" opacity="0.016"/>
<g fill="#3a352c" opacity="0.32">
  <ellipse cx="300" cy="560" rx="140" ry="34"/><ellipse cx="620" cy="586" rx="160" ry="30"/>
</g>

<!-- the street doors, locked at five -->
<g>
  <rect x="16" y="86" width="196" height="306" fill="#33271a"/>
  <rect x="16" y="86" width="196" height="3" fill="#7a6440" opacity="0.45"/>
  <rect x="204" y="86" width="8" height="306" fill="#0d0904" opacity="0.4"/>
  <rect x="28" y="98" width="172" height="294" fill="#241b12"/>
  <rect x="36" y="106" width="76" height="180" fill="url(#da-lob-night)"/>
  <rect x="120" y="106" width="72" height="180" fill="url(#da-lob-night)"/>
  <g stroke="#8fa4c0" stroke-width="1.3" opacity="0.28">
    <line x1="50" y1="120" x2="42" y2="152"/><line x1="78" y1="134" x2="70" y2="168" class="fx-drift-slow" style="--d:.2s"/><line x1="98" y1="114" x2="90" y2="146"/>
    <line x1="136" y1="126" x2="128" y2="158"/><line x1="164" y1="140" x2="156" y2="172" class="fx-drift-slow" style="--d:2.9s"/><line x1="182" y1="112" x2="174" y2="144"/>
    <line x1="60" y1="188" x2="52" y2="220"/><line x1="146" y1="196" x2="138" y2="228"/>
  </g>
  <g fill="none" stroke="#3b2f22" stroke-width="3">
    <line x1="36" y1="196" x2="112" y2="196"/><line x1="120" y1="196" x2="192" y2="196"/>
  </g>
  <rect x="36" y="296" width="76" height="86" fill="#2f2519"/>
  <rect x="120" y="296" width="72" height="86" fill="#2f2519"/>
  <rect x="108" y="86" width="12" height="306" fill="#4a3b28"/>
  <g fill="url(#da-lob-brass)">
    <rect x="92" y="230" width="10" height="42" rx="4"/><rect x="126" y="230" width="10" height="42" rx="4"/>
  </g>
  <g fill="#f0dca6" opacity="0.45"><rect x="93" y="231" width="3" height="40" rx="1.5"/><rect x="127" y="231" width="3" height="40" rx="1.5"/></g>
  <path d="M36 106 q38 24 76 0 l0 176 l-76 0 z" fill="#5f7ba8" opacity="0.05"/>
  <path d="M120 106 q36 22 72 0 l0 176 l-72 0 z" fill="#5f7ba8" opacity="0.04"/>
  <path d="M100 274 l28 0 l0 10 l-28 0 z" fill="#6b5326"/>
  <rect x="4" y="76" width="220" height="14" rx="4" fill="#4a3b28"/>
</g>

<!-- the switchboard, dark and unattended -->
<g>
  <rect x="246" y="158" width="192" height="246" fill="#0d0904" opacity="0.35"/>
  <rect x="238" y="150" width="192" height="246" fill="#33271a"/>
  <rect x="238" y="150" width="192" height="3" fill="#7a6440" opacity="0.45"/>
  <path d="M240 150 l188 0 l0 4 q-94 4 -188 0 z" fill="#c9bda0" opacity="0.1"/>
  <rect x="246" y="158" width="176" height="200" fill="url(#da-lob-alum)"/>
  <rect x="246" y="158" width="176" height="2" fill="#c9bda0" opacity="0.14"/>
  <g fill="url(#da-lob-jack)" stroke="#9b7a3f" stroke-width="1.5">
    <circle cx="266" cy="178" r="6"/><circle cx="292" cy="178" r="6"/><circle cx="318" cy="178" r="6"/><circle cx="344" cy="178" r="6"/><circle cx="370" cy="178" r="6"/><circle cx="396" cy="178" r="6"/>
    <circle cx="266" cy="202" r="6"/><circle cx="292" cy="202" r="6"/><circle cx="318" cy="202" r="6"/><circle cx="344" cy="202" r="6"/><circle cx="370" cy="202" r="6"/><circle cx="396" cy="202" r="6"/>
    <circle cx="266" cy="226" r="6"/><circle cx="292" cy="226" r="6"/><circle cx="318" cy="226" r="6"/><circle cx="344" cy="226" r="6"/><circle cx="370" cy="226" r="6"/><circle cx="396" cy="226" r="6"/>
    <circle cx="266" cy="250" r="6"/><circle cx="292" cy="250" r="6"/><circle cx="318" cy="250" r="6"/><circle cx="344" cy="250" r="6"/><circle cx="370" cy="250" r="6"/><circle cx="396" cy="250" r="6"/>
  </g>
  <g fill="#2a2016" stroke="#4a3b28" stroke-width="1.4">
    <circle cx="272" cy="278" r="7"/><circle cx="302" cy="278" r="7"/><circle cx="332" cy="278" r="7"/><circle cx="362" cy="278" r="7"/><circle cx="392" cy="278" r="7"/>
    <circle cx="272" cy="302" r="7"/><circle cx="302" cy="302" r="7"/><circle cx="332" cy="302" r="7"/><circle cx="362" cy="302" r="7"/><circle cx="392" cy="302" r="7"/>
  </g>
  <g class="fx-blink" style="--d:.4s"><circle cx="332" cy="302" r="7" fill="#d9a441" opacity="0.8"/></g>
  <g class="fx-blink" style="--d:2.45s"><circle cx="392" cy="278" r="7" fill="#6f8a45" opacity="0.7"/></g>
  <rect x="238" y="330" width="192" height="34" fill="#3b2f22"/>
  <g fill="#241b12">
    <rect x="252" y="338" width="20" height="18" rx="3"/><rect x="282" y="338" width="20" height="18" rx="3"/><rect x="312" y="338" width="20" height="18" rx="3"/>
    <rect x="342" y="338" width="20" height="18" rx="3"/><rect x="372" y="338" width="20" height="18" rx="3"/><rect x="400" y="338" width="20" height="18" rx="3"/>
  </g>
  <g fill="none" stroke="#1b140d" stroke-width="6" stroke-linecap="round">
    <path d="M266 250 q-14 48 12 78"/><path d="M318 226 q16 60 -6 100"/><path d="M370 250 q22 44 -4 78"/>
  </g>
  <g fill="none" stroke="#3b2f22" stroke-width="3" stroke-linecap="round">
    <path d="M266 250 q-14 48 12 78"/><path d="M318 226 q16 60 -6 100"/><path d="M370 250 q22 44 -4 78"/>
  </g>
  <rect x="238" y="364" width="192" height="14" fill="#2a2016"/>
  <ellipse cx="334" cy="474" rx="120" ry="14" fill="#0d0904" opacity="0.38"/>
  <path d="M244 396 l16 74" stroke="#33271a" stroke-width="10"/>
  <path d="M424 396 l-16 74" stroke="#33271a" stroke-width="10"/>
  <g>
    <path d="M198 210 q-16 26 2 46" fill="none" stroke="#241b12" stroke-width="5"/>
    <ellipse cx="196" cy="206" rx="12" ry="9" fill="#2a2016"/>
    <ellipse cx="202" cy="256" rx="12" ry="9" fill="#2a2016"/>
    <line x1="202" y1="264" x2="214" y2="330" stroke="#1b140d" stroke-width="4"/>
  </g>
</g>

<!-- the station mark on the wall: a mast and its carrier waves -->
<g>
  <path d="M572 122 l14 0 l10 86 l-34 0 z" fill="#0d0904" opacity="0.3"/>
  <path d="M568 118 l14 0 l10 86 l-34 0 z" fill="#4a3b28"/>
  <path d="M568 118 l5 0 l-5 86 l-6 0 z" fill="#8a6f43" opacity="0.4"/>
  <g stroke="#4a3b28" stroke-width="3">
    <line x1="562" y1="152" x2="588" y2="152"/><line x1="558" y1="176" x2="592" y2="176"/>
  </g>
  <g fill="none" stroke="#6b5326" stroke-width="4" opacity="0.85">
    <path d="M604 112 q22 22 22 50"/><path d="M624 100 q34 32 34 62"/>
    <path d="M546 112 q-22 22 -22 50"/><path d="M526 100 q-34 32 -34 62"/>
  </g>
  <circle cx="575" cy="112" r="7" fill="#d9a441" class="fx-ember" style="--d:1.35s"/>
</g>

<!-- the wall clock, half past midnight -->
<g>
  <ellipse cx="736" cy="158" rx="44" ry="42" fill="#0d0904" opacity="0.38"/>
  <circle cx="744" cy="146" r="42" fill="#241b12"/>
  <circle cx="744" cy="146" r="38" fill="url(#da-lob-brass)"/>
  <circle cx="744" cy="146" r="36" fill="#6b5326"/>
  <circle cx="744" cy="146" r="36" fill="url(#da-lob-brass)" opacity="0.65"/>
  <circle cx="744" cy="146" r="31" fill="#1b140d"/>
  <circle cx="744" cy="146" r="30" fill="url(#da-lob-dial)"/>
  <circle cx="744" cy="146" r="30" fill="#14110d" opacity="0.16"/>
  <path d="M744 116 a30 30 0 0 0 -21 51 l-3 -3 a30 30 0 0 1 24 -48 z" fill="#0f0b06" opacity="0.14"/>
  <g stroke="#3b2f22" stroke-width="2.4" stroke-linecap="round">
    <line x1="744" y1="120" x2="744" y2="126"/><line x1="770" y1="146" x2="764" y2="146"/>
    <line x1="744" y1="172" x2="744" y2="166"/><line x1="718" y1="146" x2="724" y2="146"/>
    <line x1="762" y1="128" x2="758" y2="132"/><line x1="762" y1="164" x2="758" y2="160"/>
    <line x1="726" y1="164" x2="730" y2="160"/><line x1="726" y1="128" x2="730" y2="132"/>
  </g>
  <line x1="744" y1="146" x2="736" y2="130" stroke="#241b12" stroke-width="4" stroke-linecap="round"/>
  <line x1="744" y1="146" x2="762" y2="156" stroke="#241b12" stroke-width="3" stroke-linecap="round"/>
  <circle cx="744" cy="146" r="3.5" fill="#a8352a"/>
  <path d="M718 130 q26 -16 52 0 l0 5 q-26 -14 -52 0 z" fill="#f0e7ce" opacity="0.09"/>
</g>

<!-- THE FILING CABINETS: every soul who ever worked here -->
<g>
  <ellipse cx="884" cy="474" rx="118" ry="14" fill="#0d0904" opacity="0.4"/>
  <rect x="792" y="194" width="94" height="276" fill="url(#da-lob-steel)"/>
  <rect x="890" y="194" width="94" height="276" fill="url(#da-lob-steel)"/>
  <rect x="792" y="194" width="192" height="10" fill="#5a5a52"/>
  <rect x="792" y="194" width="192" height="3" fill="#8e8e84" opacity="0.5"/>
  <path d="M794 194 l188 0 l0 4 q-94 4 -188 0 z" fill="#c9bda0" opacity="0.1"/>
  <rect x="884" y="194" width="6" height="276" fill="#131311" opacity="0.6"/>
  <rect x="978" y="194" width="6" height="276" fill="#131311" opacity="0.5"/>
  <g fill="none" stroke="#1e1e1a" stroke-width="3">
    <rect x="800" y="212" width="78" height="60"/><rect x="800" y="278" width="78" height="60"/>
    <rect x="800" y="344" width="78" height="60"/><rect x="800" y="410" width="78" height="52"/>
    <rect x="898" y="212" width="78" height="60"/><rect x="898" y="344" width="78" height="60"/><rect x="898" y="410" width="78" height="52"/>
  </g>
  <g fill="url(#da-lob-brass)">
    <rect x="820" y="238" width="38" height="8" rx="3"/><rect x="820" y="304" width="38" height="8" rx="3"/>
    <rect x="820" y="370" width="38" height="8" rx="3"/><rect x="820" y="432" width="38" height="8" rx="3"/>
    <rect x="918" y="238" width="38" height="8" rx="3"/><rect x="918" y="370" width="38" height="8" rx="3"/><rect x="918" y="432" width="38" height="8" rx="3"/>
  </g>
  <g fill="#e3d5ac" opacity="0.55">
    <rect x="812" y="222" width="22" height="8"/><rect x="812" y="288" width="22" height="8"/>
    <rect x="812" y="354" width="22" height="8"/><rect x="910" y="222" width="22" height="8"/><rect x="910" y="354" width="22" height="8"/>
  </g>
  <!-- one drawer standing open, files raised like teeth -->
  <g>
    <path d="M896 278 L978 278 L994 336 L888 336 Z" fill="#3a3a34"/>
    <path d="M896 278 L978 278 L980 286 L894 286 Z" fill="#5a5a52"/>
    <path d="M888 336 L994 336 L994 352 L888 352 Z" fill="#2a2a26"/>
    <rect x="918" y="338" width="46" height="9" rx="3" fill="#9b7a3f"/>
    <g fill="#e3d5ac">
      <path d="M902 284 L926 282 L930 322 L904 324 Z"/><path d="M928 282 L952 280 L958 320 L932 322 Z"/>
      <path d="M954 281 L978 279 L986 318 L960 320 Z"/>
    </g>
    <g fill="#cdbc93">
      <path d="M914 280 L938 278 L940 286 L916 288 Z"/><path d="M944 279 L968 277 L972 285 L946 287 Z"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.3">
      <line x1="908" y1="296" x2="926" y2="295"/><line x1="908" y1="304" x2="928" y2="303"/>
      <line x1="936" y1="294" x2="954" y2="293"/><line x1="936" y1="302" x2="956" y2="301"/>
      <line x1="964" y1="292" x2="982" y2="291"/><line x1="964" y1="300" x2="984" y2="299"/>
    </g>
  </g>
</g>

<!-- the reception counter, the visitor book still open on it -->
<rect x="380" y="290" width="400" height="280" fill="url(#da-lob-lamp)" class="fx-glow" style="--d:.95s"/>
<g>
  <path d="M446 372 L716 372 L744 400 L418 400 Z" fill="url(#da-lob-counter)"/>
  <ellipse cx="530" cy="386" rx="120" ry="16" fill="#ffd98a" opacity="0.08"/>
  <g stroke="#2b2115" stroke-width="1.1" opacity="0.4">
    <path d="M452 380 q140 4 262 -2"/><path d="M436 392 q150 5 290 -3"/>
  </g>
  <path d="M446 372 L716 372 L718 379 L444 379 Z" fill="#7a6440"/>
  <path d="M446 372 L716 372 L716 375 L446 375 Z" fill="#a8895a" opacity="0.5"/>
  <path d="M418 400 L744 400 L744 406 L418 406 Z" fill="#0d0904" opacity="0.42"/>
  <path d="M418 400 L744 400 L744 470 L418 470 Z" fill="#2f2519"/>
  <g fill="none" stroke="#4a3b28" stroke-width="3">
    <rect x="436" y="412" width="140" height="46"/><rect x="588" y="412" width="140" height="46"/>
  </g>
  <path d="M418 470 L744 470 L740 480 L422 480 Z" fill="#1b140d"/>
  <g>
    <path d="M486 372 L540 366 L594 372 L594 348 L540 342 L486 348 Z" fill="#3a2418"/>
    <ellipse cx="540" cy="374" rx="58" ry="8" fill="#0d0904" opacity="0.35"/>
    <path d="M492 369 L538 364 L538 346 L492 351 Z" fill="#f0e7ce"/>
    <path d="M542 364 L588 369 L588 351 L542 346 Z" fill="#e3d5ac"/>
    <path d="M492 369 L538 364 L538 346 L492 351 Z" fill="#ffd98a" opacity="0.15"/>
    <path d="M562 366 L588 369 L588 351 L562 348 Z" fill="#7d6e50" opacity="0.14"/>
    <g stroke="#8d7c62" stroke-width="1.3">
      <line x1="498" y1="352" x2="532" y2="349"/><line x1="498" y1="357" x2="532" y2="354"/><line x1="498" y1="362" x2="528" y2="359"/>
      <line x1="548" y1="350" x2="582" y2="353"/><line x1="548" y1="355" x2="582" y2="358"/><line x1="548" y1="360" x2="578" y2="363"/>
    </g>
    <line x1="540" y1="343" x2="540" y2="365" stroke="#b9a87e" stroke-width="1.2"/>
    <path d="M556 356 q10 -6 18 2" fill="none" stroke="#1b2436" stroke-width="1.8"/>
  </g>
  <g>
    <ellipse cx="638" cy="368" rx="16" ry="5" fill="#6b5326"/>
    <path d="M636 366 l4 -34" stroke="#9b7a3f" stroke-width="3"/>
    <path d="M640 332 l16 -22" stroke="#1b140d" stroke-width="4" stroke-linecap="round"/>
  </g>
  <g>
    <rect x="676" y="344" width="34" height="26" rx="4" fill="#33271a"/>
    <rect x="682" y="336" width="22" height="10" rx="3" fill="#9b7a3f"/>
    <circle cx="693" cy="357" r="7" fill="#5d1f18"/>
  </g>
  <g>
    <path d="M456 344 q22 -14 44 0 l0 6 q-22 -10 -44 0 z" fill="#4a3b28"/>
    <rect x="470" y="350" width="16" height="20" fill="#33271a"/>
    <ellipse cx="478" cy="344" rx="24" ry="7" fill="#5f6b4a"/>
    <path d="M458 342 q20 -7 40 0" fill="none" stroke="#9fae83" stroke-width="1.8" opacity="0.5"/>
    <g class="fx-glow" style="--d:2.65s"><ellipse cx="478" cy="352" rx="16" ry="5" fill="#ffd98a" opacity="0.5"/></g>
  </g>
</g>

<!-- Chet Morrow, pacing a groove in the linoleum -->
<g>
  <ellipse cx="352" cy="578" rx="74" ry="13" fill="#14110d" opacity="0.45"/>
  <path d="M334 446 l-8 62 l-26 56 l20 8 l34 -60 l4 -60 z" fill="#33271a"/>
  <path d="M362 446 l12 60 l24 54 l-20 10 l-32 -58 l-6 -62 z" fill="#2f2519"/>
  <path d="M292 562 l26 10 l-6 12 l-28 -10 z" fill="#14110d"/>
  <path d="M378 570 l28 -8 l6 12 l-30 8 z" fill="#14110d"/>
  <path d="M324 350 L390 348 q14 8 16 32 l6 74 q-42 12 -84 0 l4 -74 q2 -24 -8 -32 z" fill="#4a3524"/>
  <path d="M336 348 l20 0 l-2 46 l-14 0 z" fill="#e3d5ac"/>
  <path d="M356 348 q22 4 26 30 l-14 -2 q-4 -18 -16 -22 z" fill="#4a3524"/>
  <path d="M338 348 q-16 8 -18 30 l14 -2 q2 -18 12 -22 z" fill="#4a3524"/>
  <path d="M344 350 l10 0 l-2 40 l-6 0 z" fill="#5d1f18"/>
  <path d="M322 356 q-24 26 -18 68 l18 4 q-4 -40 12 -58 z" fill="#4a3524"/>
  <path d="M392 356 q26 26 20 68 l-18 4 q4 -40 -14 -58 z" fill="#4a3524"/>
  <ellipse cx="316" cy="430" rx="12" ry="9" fill="#b3a184"/>
  <ellipse cx="400" cy="430" rx="12" ry="9" fill="#b3a184"/>
  <rect x="348" y="328" width="18" height="22" fill="#a89178"/>
  <ellipse cx="357" cy="308" rx="21" ry="24" fill="#b3a184"/>
  <path d="M336 302 q21 -26 42 0 q6 -30 -21 -30 q-27 0 -21 30 z" fill="#5a5a52"/>
  <path d="M376 306 q6 20 -4 32 l-8 -6 q6 -12 4 -24 z" fill="#a89178"/>
  <line x1="342" y1="308" x2="350" y2="308" stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="364" y1="308" x2="372" y2="308" stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="352" y1="326" x2="364" y2="326" stroke="#8d7c62" stroke-width="2" opacity="0.7"/>
</g>

<!-- Sam Ostrow, waiting for a train already derailed, hat on his knee -->
<g>
  <ellipse cx="778" cy="572" rx="84" ry="13" fill="#14110d" opacity="0.4"/>
  <path d="M812 388 L840 386 L844 500 L816 500 Z" fill="#3b2f22"/>
  <path d="M818 396 L836 395 L838 486 L820 486 Z" fill="#4a3b28"/>
  <rect x="736" y="492" width="112" height="16" rx="4" fill="#4a3b28"/>
  <rect x="736" y="492" width="112" height="5" rx="2" fill="#6b5326"/>
  <path d="M746 508 l10 0 l-8 64 l-12 0 z" fill="#33271a"/>
  <path d="M830 508 l10 0 l6 64 l-12 0 z" fill="#33271a"/>
  <path d="M760 566 l84 0" stroke="#33271a" stroke-width="5"/>
  <path d="M738 518 L764 516 L760 566 L734 566 Z" fill="#2b3040"/>
  <path d="M728 562 l34 0 l6 12 l-44 0 z" fill="#14110d"/>
  <path d="M708 520 L734 518 L730 564 L704 564 Z" fill="#33384a"/>
  <path d="M698 560 l34 0 l6 12 l-44 0 z" fill="#14110d"/>
  <path d="M760 494 L764 400 q6 -24 28 -24 q22 0 28 24 l6 92 q-32 10 -66 2 z" fill="#3b3f4a"/>
  <path d="M764 400 q6 -24 28 -24 q22 0 28 24 l-3 11 q-7 -20 -25 -20 q-18 0 -25 20 z" fill="#4a4f5c"/>
  <path d="M780 378 l20 0 l0 40 l-24 0 z" fill="#e3d5ac"/>
  <path d="M786 378 l8 0 l-2 38 l-5 0 z" fill="#1b2436"/>
  <path d="M796 380 q20 6 24 26 l-14 4 q-4 -16 -14 -20 z" fill="#3b3f4a"/>
  <path d="M782 380 q-16 6 -18 26 l14 4 q2 -16 10 -20 z" fill="#3b3f4a"/>
  <path d="M766 404 q-22 28 -14 74 l20 -2 q-4 -40 10 -58 z" fill="#3b3f4a"/>
  <path d="M818 404 q20 28 14 74 l-20 -2 q4 -40 -10 -58 z" fill="#3b3f4a"/>
  <path d="M712 484 L818 476 L822 514 L716 524 Z" fill="#464b58"/>
  <path d="M712 484 L818 476 L819 486 L713 495 Z" fill="#565c6b"/>
  <path d="M716 508 q52 -10 104 -14" fill="none" stroke="#33384a" stroke-width="3"/>
  <ellipse cx="828" cy="482" rx="13" ry="9" fill="#b3a184"/>
  <rect x="784" y="356" width="18" height="22" fill="#a89178"/>
  <ellipse cx="792" cy="338" rx="20" ry="23" fill="#b3a184"/>
  <path d="M772 332 q20 -26 40 0 q6 -28 -20 -28 q-26 0 -20 28 z" fill="#3b2f22"/>
  <line x1="778" y1="338" x2="786" y2="338" stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="798" y1="338" x2="806" y2="338" stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round"/>
  <line x1="788" y1="354" x2="800" y2="354" stroke="#8d7c62" stroke-width="2" opacity="0.7"/>
  <ellipse cx="734" cy="484" rx="38" ry="11" fill="#2a2016"/>
  <ellipse cx="734" cy="482" rx="30" ry="8" fill="#33271a"/>
  <path d="M714 480 q20 -30 42 0 q-21 9 -42 0 z" fill="#3b2f22"/>
  <path d="M716 474 q19 -9 38 0" fill="none" stroke="#241b12" stroke-width="4"/>
  <ellipse cx="752" cy="474" rx="13" ry="9" fill="#b3a184"/>
  <g stroke="#8d7c62" stroke-width="1.3" stroke-linecap="round">
    <line x1="742" y1="476" x2="760" y2="472"/><line x1="744" y1="480" x2="760" y2="477"/>
  </g>
</g>

<!-- CHET'S CLEARED DESK: a box, a mug, and a wastebasket with the rest of it -->
<g>
  <path d="M-10 502 L276 486 L316 540 L-10 560 Z" fill="url(#da-lob-counter)"/>
  <g stroke="#2b2115" stroke-width="1.1" opacity="0.4">
    <path d="M-8 518 q150 -9 300 -18"/><path d="M-8 536 q160 -10 312 -20"/>
  </g>
  <path d="M-10 502 L276 486 L278 494 L-10 510 Z" fill="#7a6440"/>
  <path d="M-10 502 L276 486 L277 489 L-10 505 Z" fill="#a8895a" opacity="0.5"/>
  <path d="M-10 560 L316 540 L316 568 L-10 588 Z" fill="#33271a"/>
  <path d="M-10 588 L316 568 L316 620 L-10 620 Z" fill="#241b12"/>
  <g fill="none" stroke="#3b2f22" stroke-width="3">
    <rect x="30" y="586" width="120" height="30"/>
  </g>
  <rect x="70" y="596" width="44" height="8" rx="3" fill="#9b7a3f"/>
  <g>
    <ellipse cx="118" cy="556" rx="94" ry="12" fill="#0d0904" opacity="0.38"/>
    <path d="M40 496 L188 486 L196 542 L44 552 Z" fill="#8a6c30"/>
    <path d="M40 496 L188 486 L196 542 L44 552 Z" fill="#3b2f22" opacity="0.35"/>
    <path d="M40 496 L114 490 L114 500 L40 506 Z" fill="#a07f3c"/>
    <path d="M36 470 L110 464 L114 490 L40 496 Z" fill="#9b7a3f"/>
    <path d="M118 464 L190 470 L188 486 L114 490 Z" fill="#8a6c30"/>
    <g stroke="#6b5326" stroke-width="2">
      <line x1="46" y1="514" x2="188" y2="504"/>
    </g>
    <g>
      <path d="M60 452 l40 -4 l4 22 l-42 4 z" fill="#e3d5ac"/>
      <path d="M104 448 l38 4 l-2 20 l-40 -2 z" fill="#cdbc93"/>
      <rect x="70" y="458" width="20" height="12" fill="#8e8e88"/>
      <rect x="112" y="456" width="20" height="12" fill="#8e8e88"/>
    </g>
    <g>
      <path d="M150 452 l30 0 l-4 30 l-24 0 z" fill="#f0e7ce"/>
      <path d="M180 458 q14 4 8 16 q-4 6 -10 4" fill="none" stroke="#f0e7ce" stroke-width="5"/>
      <ellipse cx="165" cy="452" rx="15" ry="5" fill="#cdbc93"/>
    </g>
  </g>
  <g>
    <ellipse cx="268" cy="612" rx="46" ry="10" fill="#0d0904" opacity="0.36"/>
    <path d="M234 530 q34 14 70 -6 l-12 82 q-24 10 -48 2 z" fill="#3a3a34"/>
    <path d="M238 534 q10 6 20 8 l-8 76 q-9 -2 -14 -6 z" fill="#5f5f57" opacity="0.5"/>
    <ellipse cx="269" cy="528" rx="36" ry="12" fill="#5a5a52"/>
    <path d="M236 524 q30 -12 62 -2" fill="none" stroke="#9c9c90" stroke-width="1.8" opacity="0.4"/>
    <ellipse cx="269" cy="529" rx="29" ry="9" fill="#1b1b18"/>
    <g stroke="#2a2a26" stroke-width="2.5" fill="none">
      <path d="M246 546 l-6 56"/><path d="M268 552 l-2 56"/><path d="M292 546 l4 54"/>
    </g>
    <path d="M234 536 q34 14 70 -6" fill="none" stroke="#6b6b62" stroke-width="2" opacity="0.5"/>
    <path d="M252 516 q14 -16 30 -6 q16 -8 20 8 q6 14 -10 18 q-14 10 -26 0 q-18 2 -14 -20 z" fill="#f0e7ce"/>
    <g stroke="#b9a87e" stroke-width="1.6" fill="none">
      <path d="M262 512 q10 6 20 0"/><path d="M258 524 q14 8 30 0"/><path d="M272 508 l-2 22"/>
    </g>
  </g>
</g>

<!-- the hanging fixture over reception -->
<g>
  <line x1="580" y1="18" x2="580" y2="66" stroke="#33271a" stroke-width="4"/>
  <path d="M544 104 q36 22 72 0 q-6 -40 -36 -40 q-30 0 -36 40 z" fill="url(#da-lob-shade)" opacity="0.62"/>
  <path d="M552 96 q10 -26 28 -28 l0 5 q-14 3 -23 25 z" fill="#fffaea" opacity="0.4"/>
  <path d="M544 104 q36 22 72 0 l0 -8 q-36 20 -72 0 z" fill="#9b7a3f" opacity="0.6"/>
  <ellipse cx="580" cy="90" rx="18" ry="14" fill="#ffd98a" class="fx-glow" style="--d:.55s"/>
  <g class="fx-glow" style="--d:1.8s"><ellipse cx="580" cy="102" rx="86" ry="34" fill="#d9a441" opacity="0.12"/></g>
</g>

<rect width="1000" height="620" fill="url(#da-lob-vig)"/>
`,
  },
};
