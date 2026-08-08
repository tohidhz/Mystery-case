/* Scene plates for CASE No. 002 — The Orpheum Theatre.
   1936 theatre noir: gaslight, greasepaint, velvet and working dark.
   Every searchable detail carries a pin placed as a percentage of the frame.
   Language-neutral: no text anywhere in the art. */
window.CASE_ART = window.CASE_ART || {};
window.CASE_ART.orpheum = {

  stage: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_mark: { x: 39, y: 76 },
      h_trap: { x: 70, y: 68 },
      h_dagger: { x: 22, y: 87 },
    },
    svg: `
<defs>
  <linearGradient id="or-stage-air" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1a1510"/><stop offset="1" stop-color="#0d0a07"/>
  </linearGradient>
  <linearGradient id="or-stage-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3a28"/><stop offset="1" stop-color="#2a2018"/>
  </linearGradient>
  <linearGradient id="or-stage-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#243049"/><stop offset="1" stop-color="#131a29"/>
  </linearGradient>
  <linearGradient id="or-stage-deck" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3b2f22"/><stop offset="1" stop-color="#191310"/>
  </linearGradient>
  <linearGradient id="or-stage-velvet" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6b2a24"/><stop offset="0.5" stop-color="#3f1613"/><stop offset="1" stop-color="#25100e"/>
  </linearGradient>
  <linearGradient id="or-stage-beam" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-stage-foot" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.36"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-stage-wicker" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a8814a"/><stop offset="1" stop-color="#5c4327"/>
  </linearGradient>
  <radialGradient id="or-stage-glow" cx="0.42" cy="0.62" r="0.66">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-stage-vig" cx="0.46" cy="0.5" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-stage-air)"/>
<rect width="1000" height="620" fill="url(#or-stage-glow)"/>

<!-- the painted backdrop: a Parisian garret, Act III -->
<g>
  <rect x="70" y="30" width="770" height="360" fill="url(#or-stage-wall)"/>
  <path d="M70 30 L430 30 L430 152 L70 218 Z" fill="#231a13"/>
  <path d="M70 218 L430 152" fill="none" stroke="#5c4830" stroke-width="4"/>
  <g stroke="#453423" stroke-width="7" opacity="0.9">
    <line x1="118" y1="200" x2="150" y2="32"/>
    <line x1="198" y1="185" x2="222" y2="32"/>
    <line x1="282" y1="170" x2="298" y2="32"/>
    <line x1="364" y1="155" x2="372" y2="32"/>
  </g>
  <g fill="#523f2a" opacity="0.45">
    <path d="M462 58 q42 -20 80 6 q32 24 4 46 q-44 24 -80 -8 z"/>
    <path d="M676 232 q34 -18 62 4 q24 22 -2 38 q-38 18 -64 -8 z"/>
    <path d="M112 262 q30 -14 54 4 q20 18 -2 32 q-34 16 -56 -6 z"/>
  </g>
  <g fill="#1f170f" opacity="0.55">
    <path d="M540 130 q10 40 -6 78 l10 2 q18 -40 6 -80 z"/>
    <path d="M300 246 q6 42 -8 76 l9 3 q16 -38 8 -79 z"/>
  </g>
  <rect x="70" y="352" width="770" height="14" fill="#241b12"/>
  <rect x="70" y="366" width="770" height="24" fill="#1c150e"/>
  <g>
    <rect x="494" y="86" width="216" height="180" fill="#2a2018"/>
    <rect x="504" y="96" width="196" height="160" fill="url(#or-stage-sky)"/>
    <circle cx="646" cy="140" r="34" fill="#e3d5ac" opacity="0.9"/>
    <g class="fx-glow" style="--d:2.1s"><circle cx="636" cy="134" r="30" fill="#f0e7ce" opacity="0.5"/></g>
    <circle cx="654" cy="150" r="7" fill="#cbb98f" opacity="0.35"/>
    <circle cx="632" cy="128" r="5" fill="#cbb98f" opacity="0.3"/>
    <path d="M504 256 L504 214 L536 214 L536 200 L570 200 L570 220 L604 220 L604 198 L638 198 L638 224 L672 224 L672 206 L700 206 L700 256 Z" fill="#161d2c"/>
    <g fill="#1b2436">
      <rect x="544" y="184" width="12" height="18"/><rect x="612" y="180" width="10" height="20"/>
      <rect x="678" y="190" width="11" height="18"/>
    </g>
    <g fill="#d9a441" opacity="0.5">
      <rect x="514" y="228" width="8" height="10"/><rect x="580" y="230" width="8" height="10"/>
      <rect x="648" y="236" width="8" height="10"/><rect x="684" y="222" width="7" height="10"/>
    </g>
    <g stroke="#2a2018" stroke-width="7">
      <line x1="602" y1="96" x2="602" y2="256"/><line x1="504" y1="176" x2="700" y2="176"/>
    </g>
    <rect x="486" y="78" width="232" height="12" fill="#3b2f22"/>
    <rect x="486" y="262" width="232" height="14" fill="#3b2f22"/>
    <path d="M508 254 L560 100 L586 100 L534 254 Z" fill="#f0e7ce" opacity="0.06"/>
  </g>
  <g>
    <rect x="742" y="128" width="86" height="228" fill="#2e2418"/>
    <rect x="748" y="136" width="74" height="212" fill="#3b2f22"/>
    <g fill="none" stroke="#2a2018" stroke-width="3">
      <rect x="758" y="150" width="54" height="80"/><rect x="758" y="248" width="54" height="86"/>
    </g>
    <circle cx="756" cy="246" r="5" fill="#9b7a3f"/>
  </g>
  <g fill="#241b12">
    <rect x="452" y="292" width="20" height="70"/>
    <path d="M452 292 l20 0 l0 -22 l38 0 l0 -16 l-38 0 q-20 0 -20 20 z"/>
  </g>
</g>

<!-- set dressing: the garret table, stage left -->
<g>
  <rect x="112" y="300" width="192" height="12" fill="#4a3524"/>
  <rect x="120" y="312" width="176" height="7" fill="#2f2317"/>
  <rect x="126" y="319" width="12" height="72" fill="#3b2f22"/>
  <rect x="278" y="319" width="12" height="72" fill="#3b2f22"/>
  <rect x="126" y="352" width="164" height="7" fill="#33271a"/>
  <path d="M196 300 l0 -34 q0 -8 8 -8 l6 0 q8 0 8 8 l0 34 z" fill="#2f3a4e"/>
  <rect x="203" y="240" width="10" height="24" fill="#f0e7ce"/>
  <ellipse cx="208" cy="236" rx="5" ry="10" fill="#ffd98a" class="fx-flame" style="--d:.3s"/>
  <g class="fx-glow" style="--d:2.4s"><ellipse cx="208" cy="278" rx="34" ry="12" fill="#ffd98a" opacity="0.12"/></g>
  <g fill="#e3d5ac" opacity="0.9">
    <path d="M136 292 l52 -4 l2 10 l-52 4 z"/><path d="M142 284 l50 -4 l2 8 l-50 4 z"/>
  </g>
  <rect x="248" y="284" width="22" height="16" fill="#1b2436"/>
  <ellipse cx="259" cy="284" rx="11" ry="4" fill="#2f3a4e"/>
  <line x1="262" y1="284" x2="280" y2="262" stroke="#cbb98f" stroke-width="3" stroke-linecap="round"/>
  <g transform="rotate(-6 90 350)">
    <rect x="58" y="252" width="12" height="104" fill="#3b2f22"/>
    <rect x="112" y="252" width="12" height="104" fill="#3b2f22"/>
    <rect x="54" y="258" width="74" height="9" fill="#4a3524"/>
    <rect x="54" y="284" width="74" height="9" fill="#4a3524"/>
    <rect x="48" y="330" width="88" height="12" fill="#4a3524"/>
    <rect x="52" y="342" width="10" height="54" fill="#33271a"/>
    <rect x="122" y="342" width="10" height="54" fill="#33271a"/>
  </g>
</g>

<!-- set dressing: the iron cot, upstage right -->
<g>
  <rect x="640" y="326" width="180" height="12" fill="#2f2b26"/>
  <path d="M640 326 l0 -46 l6 0 l0 46 z" fill="#3a352d"/>
  <path d="M814 326 l0 -38 l6 0 l0 38 z" fill="#3a352d"/>
  <g stroke="#3a352d" stroke-width="4">
    <line x1="646" y1="282" x2="700" y2="282"/><line x1="658" y1="282" x2="658" y2="326"/>
    <line x1="674" y1="282" x2="674" y2="326"/><line x1="690" y1="284" x2="690" y2="326"/>
  </g>
  <path d="M646 326 q86 -22 168 0 l0 16 q-84 -18 -168 0 z" fill="#5f6b4a"/>
  <path d="M652 330 q40 -12 74 -2 l-2 10 q-36 -8 -72 2 z" fill="#e3d5ac" opacity="0.55"/>
  <rect x="644" y="338" width="10" height="46" fill="#2f2b26"/>
  <rect x="808" y="338" width="10" height="46" fill="#2f2b26"/>
</g>

<!-- THE DECK -->
<rect x="0" y="386" width="1000" height="234" fill="url(#or-stage-deck)"/>
<g stroke="#2a2018" stroke-width="2" opacity="0.85">
  <line x1="-100" y1="620" x2="380" y2="388"/>
  <line x1="-20" y1="620" x2="396" y2="388"/>
  <line x1="60" y1="620" x2="412" y2="388"/>
  <line x1="140" y1="620" x2="428" y2="388"/>
  <line x1="220" y1="620" x2="444" y2="388"/>
  <line x1="300" y1="620" x2="460" y2="388"/>
  <line x1="380" y1="620" x2="476" y2="388"/>
  <line x1="460" y1="620" x2="492" y2="388"/>
  <line x1="540" y1="620" x2="508" y2="388"/>
  <line x1="620" y1="620" x2="524" y2="388"/>
  <line x1="700" y1="620" x2="540" y2="388"/>
  <line x1="780" y1="620" x2="556" y2="388"/>
  <line x1="860" y1="620" x2="572" y2="388"/>
  <line x1="940" y1="620" x2="588" y2="388"/>
  <line x1="1020" y1="620" x2="604" y2="388"/>
  <line x1="1100" y1="620" x2="620" y2="388"/>
</g>
<rect x="0" y="386" width="1000" height="10" fill="#4a3a28" opacity="0.5"/>
<rect x="0" y="440" width="1000" height="180" fill="url(#or-stage-foot)"/>

<!-- the raking beam from the front-of-house rail -->
<path d="M646 0 L790 0 L520 620 L286 620 Z" fill="url(#or-stage-beam)" class="fx-glow" style="--d:.6s"/>

<!-- THE TRAPDOOR -->
<g>
  <path d="M632 392 L784 392 L812 472 L610 472 Z" fill="#1b140d"/>
  <path d="M640 398 L776 398 L800 466 L622 466 Z" fill="#4d3c28"/>
  <g stroke="#2a2018" stroke-width="3">
    <line x1="670" y1="398" x2="658" y2="466"/><line x1="702" y1="398" x2="700" y2="466"/>
    <line x1="734" y1="398" x2="742" y2="466"/><line x1="764" y1="398" x2="782" y2="466"/>
  </g>
  <path d="M640 398 L776 398 L778 404 L638 404 Z" fill="#7a6142"/>
  <g fill="#5b564b">
    <rect x="658" y="388" width="34" height="11" rx="3"/><rect x="724" y="388" width="34" height="11" rx="3"/>
    <circle cx="668" cy="393" r="3" fill="#8e8e88"/><circle cx="682" cy="393" r="3" fill="#8e8e88"/>
    <circle cx="734" cy="393" r="3" fill="#8e8e88"/><circle cx="748" cy="393" r="3" fill="#8e8e88"/>
  </g>
  <!-- the bolt, thrown -->
  <rect x="694" y="424" width="46" height="12" rx="4" fill="#3a352d"/>
  <rect x="722" y="422" width="24" height="16" rx="4" fill="#8e8e88"/>
  <ellipse cx="700" cy="450" rx="20" ry="9" fill="none" stroke="#8e8e88" stroke-width="5"/>
  <!-- the downstage edge lifted a hair: black gap, one ladder rung below -->
  <path d="M610 472 L812 472 L810 484 L612 484 Z" fill="#080605"/>
  <path d="M646 476 l134 0 l0 6 l-134 0 z" fill="#6b5a3a" opacity="0.9"/>
  <path d="M652 480 l122 0 l0 3 l-122 0 z" fill="#241b12"/>
  <!-- dust, and one fresh handprint smeared through it -->
  <g fill="#c8c2ad" opacity="0.22">
    <ellipse cx="676" cy="452" rx="30" ry="11"/><ellipse cx="756" cy="440" rx="20" ry="8"/>
  </g>
  <path d="M642 452 q14 -12 30 -7 q12 5 7 14 q-19 7 -37 -7 z" fill="#e3d5ac" opacity="0.6"/>
  <g stroke="#e3d5ac" stroke-width="3" opacity="0.55" stroke-linecap="round">
    <line x1="646" y1="443" x2="650" y2="433"/><line x1="655" y1="440" x2="659" y2="429"/>
    <line x1="664" y1="440" x2="670" y2="431"/><line x1="673" y1="443" x2="678" y2="435"/>
  </g>
</g>

<!-- WHERE SHE FELL -->
<g>
  <ellipse cx="380" cy="470" rx="126" ry="52" fill="#0f0c08" opacity="0.45"/>
  <!-- the stain, under where the chest was -->
  <path d="M330 456 q42 -20 78 2 q30 18 2 34 q-48 22 -82 -4 q-18 -16 2 -32 z" fill="#5d1f18"/>
  <path d="M346 462 q30 -14 56 4 q18 12 -4 22 q-34 12 -56 -6 z" fill="#3d130f"/>
  <path d="M410 490 q26 8 32 24" fill="none" stroke="#5d1f18" stroke-width="5" stroke-linecap="round" opacity="0.8"/>
  <!-- THE CHALK LINE: head to the left, one arm flung, feet toward the wings -->
  <g fill="none" stroke="#f0e7ce" stroke-width="5" stroke-linecap="round" opacity="0.9">
    <circle cx="292" cy="442" r="25"/>
    <path d="M314 428 q56 6 106 24"/>
    <path d="M312 466 q56 18 104 28"/>
    <path d="M326 424 q10 -26 46 -36"/>
    <circle cx="378" cy="384" r="9"/>
    <path d="M322 470 q26 30 64 42"/>
    <circle cx="392" cy="516" r="9"/>
    <path d="M420 452 q46 0 78 -12"/>
    <path d="M416 494 q46 6 78 -2"/>
    <path d="M498 440 q14 -4 12 -14"/>
    <path d="M494 492 q14 0 16 -10"/>
  </g>
  <g fill="none" stroke="#e3d5ac" stroke-width="3" stroke-linecap="round" opacity="0.55">
    <path d="M288 418 q14 -10 30 -8"/>
    <path d="M300 470 q-14 8 -14 20"/>
  </g>
  <g stroke="#f0e7ce" stroke-width="4" stroke-linecap="round" opacity="0.7">
    <line x1="180" y1="418" x2="202" y2="418"/><line x1="191" y1="408" x2="191" y2="430"/>
  </g>
  <g transform="translate(0 66) rotate(14 566 470)">
    <path d="M508 440 q58 -16 116 0 l12 62 q-64 18 -140 0 z" fill="url(#or-stage-wicker)"/>
    <g fill="none" stroke="#3f2d18" stroke-width="2.4" opacity="0.85">
      <path d="M510 452 q60 -14 122 0"/><path d="M512 466 q62 -14 124 0"/>
      <path d="M514 480 q62 -14 126 0"/><path d="M516 494 q62 -14 128 0"/>
    </g>
    <g stroke="#7a5a32" stroke-width="2" opacity="0.7">
      <line x1="530" y1="440" x2="534" y2="504"/><line x1="566" y1="436" x2="568" y2="508"/>
      <line x1="602" y1="438" x2="606" y2="506"/>
    </g>
    <ellipse cx="508" cy="472" rx="16" ry="34" fill="#1a1208"/>
    <ellipse cx="508" cy="472" rx="10" ry="27" fill="#0c0805"/>
    <path d="M498 440 q-14 30 0 62" fill="none" stroke="#8a6636" stroke-width="7"/>
    <rect x="626" y="452" width="14" height="12" rx="4" fill="#5c4327"/>
  </g>
  <g transform="translate(0 54)">
    <path d="M474 508 q26 -14 50 -2 l-4 12 q-24 -8 -44 4 z" fill="#7a5a6e" opacity="0.85"/>
    <g stroke="#5f6b4a" stroke-width="4" stroke-linecap="round" opacity="0.9">
      <path d="M600 512 q24 10 40 2"/><path d="M604 522 q22 12 42 4"/>
    </g>
    <path d="M556 520 l40 -8 l6 16 l-40 10 z" fill="#a8352a" opacity="0.7"/>
  </g>
  <g transform="rotate(-9 452 516)">
    <path d="M424 500 l58 -6 l5 36 l-60 6 z" fill="#f0e7ce"/>
    <path d="M424 500 l58 -6 l2 8 l-58 6 z" fill="#e3d5ac"/>
    <path d="M429 530 q30 -10 58 -2 l0 8 l-60 6 z" fill="#c9b98f" opacity="0.6"/>
    <g stroke="#8d7c62" stroke-width="1.7" stroke-linecap="round">
      <line x1="430" y1="508" x2="474" y2="504"/><line x1="430" y1="514" x2="478" y2="510"/>
      <line x1="430" y1="520" x2="466" y2="517"/><line x1="430" y1="526" x2="472" y2="522"/>
    </g>
    <path d="M424 536 l16 -6 l12 8 l14 -8 l12 6 l6 -4" fill="none" stroke="#b6a67f" stroke-width="2"/>
  </g>
</g>

<!-- THE MURDER WEAPON, ringed in chalk on the boards -->
<g transform="translate(-420 0)">
  <ellipse cx="640" cy="540" rx="76" ry="32" fill="none" stroke="#f0e7ce" stroke-width="4.5" opacity="0.8"/>
  <ellipse cx="640" cy="548" rx="62" ry="18" fill="#0f0c08" opacity="0.5"/>
  <g transform="rotate(-20 640 540)">
    <path d="M572 532 l78 0 l0 18 l-78 0 q-14 -9 0 -18 z" fill="#d8d3c2"/>
    <path d="M572 532 l78 0 l0 6 l-78 0 z" fill="#f7f2e2"/>
    <path d="M578 548 l70 0 l0 3 l-70 0 z" fill="#8e8e88"/>
    <path d="M572 536 q-18 5 -18 5 q0 0 18 5 z" fill="#c8c2ad"/>
    <rect x="650" y="518" width="11" height="44" rx="4" fill="#7d7768"/>
    <rect x="661" y="527" width="44" height="24" rx="9" fill="#2b2620"/>
    <g stroke="#14110d" stroke-width="2" opacity="0.85">
      <line x1="672" y1="529" x2="672" y2="549"/><line x1="684" y1="529" x2="684" y2="549"/>
      <line x1="696" y1="529" x2="696" y2="549"/>
    </g>
    <ellipse cx="710" cy="539" rx="8" ry="12" fill="#4c463c"/>
    <!-- the ghost of a scraped-off gummed label -->
    <rect x="666" y="531" width="20" height="15" rx="2" fill="#cbb98f" opacity="0.55"/>
    <!-- maker's stamp at the ricasso, and a highlight down the blade -->
    <rect x="640" y="536" width="9" height="10" rx="2" fill="#8e8e88"/>
    <path d="M578 534 l68 0" stroke="#ffffff" stroke-width="2.5" opacity="0.5"/>
    <path d="M600 542 l34 0" stroke="#5d1f18" stroke-width="5" opacity="0.75" stroke-linecap="round"/>
  </g>
  <path d="M588 556 q20 -8 38 -2" fill="none" stroke="#5d1f18" stroke-width="4" stroke-linecap="round" opacity="0.6"/>
</g>

<!-- the wings, stage right: Victor Delacroix giving his statement -->
<g>
  <rect x="838" y="0" width="112" height="620" fill="#0e0b08"/>
  <path d="M844 0 l0 620" fill="none" stroke="#241b12" stroke-width="3"/>
  <ellipse cx="896" cy="440" rx="70" ry="200" fill="#d9a441" opacity="0.07"/>
  <g>
    <ellipse cx="896" cy="552" rx="52" ry="12" fill="#080605"/>
    <!-- long dark coat -->
    <path d="M858 548 q38 -12 76 0 l-4 -104 q-6 -62 -34 -64 q-28 2 -34 64 z" fill="#191623"/>
    <path d="M866 548 q30 -10 60 0 l-4 -100 q-4 -52 -26 -54 q-22 2 -26 54 z" fill="#221d2c"/>
    <!-- rim light from the stage, stage-left side -->
    <path d="M862 548 q-4 -110 12 -166 l7 3 q-14 56 -10 163 z" fill="#d9a441" opacity="0.28"/>
    <!-- lapels, collar, tie -->
    <path d="M882 384 q14 -10 28 0 l-4 34 l-20 0 z" fill="#ded3b8"/>
    <path d="M894 386 l6 0 l-2 34 l-3 0 z" fill="#6b2a24"/>
    <path d="M878 380 l14 12 l-8 44 l-10 -50 z" fill="#15121d"/>
    <path d="M914 380 l-14 12 l8 44 l10 -50 z" fill="#15121d"/>
    <ellipse cx="896" cy="352" rx="19" ry="22" fill="#b3a184"/>
    <path d="M877 348 q19 -24 38 0 q4 -25 -19 -25 q-23 0 -19 25 z" fill="#3a352d"/>
    <path d="M875 346 q-4 16 4 26 l5 -6 q-5 -8 -3 -20 z" fill="#3a352d"/>
    <path d="M915 346 q5 15 -1 26 l-5 -6 q4 -8 2 -20 z" fill="#3a352d"/>
    <g stroke="#4a3f31" stroke-width="2.1" stroke-linecap="round">
      <line x1="883" y1="348" x2="892" y2="348"/><line x1="901" y1="348" x2="910" y2="348"/>
    </g>
    <line x1="890" y1="366" x2="902" y2="366" stroke="#6b5a45" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M872 372 q-6 8 -4 16 l6 -2 q-2 -8 2 -12 z" fill="#d9a441" opacity="0.3"/>
    <!-- one hand raised, mid-phrase; the other holding the lapel -->
    <path d="M858 470 q-26 -26 -20 -66 l11 2 q-6 34 18 56 z" fill="#191623"/>
    <ellipse cx="840" cy="396" rx="13" ry="10" fill="#b3a184"/>
    <g stroke="#8d7c62" stroke-width="1.4" stroke-linecap="round">
      <line x1="831" y1="394" x2="847" y2="391"/><line x1="832" y1="400" x2="848" y2="397"/>
    </g>
    <path d="M934 470 q22 -18 20 -50 l-11 -2 q2 30 -18 42 z" fill="#191623"/>
    <ellipse cx="928" cy="428" rx="12" ry="9" fill="#a6957a"/>
    <ellipse cx="878" cy="552" rx="19" ry="9" fill="#0a0808"/>
    <ellipse cx="916" cy="552" rx="19" ry="9" fill="#0a0808"/>
    <path d="M868 492 q28 32 56 0" fill="none" stroke="#2b2537" stroke-width="3" opacity="0.9"/>
  </g>
  <rect x="944" y="0" width="66" height="620" fill="url(#or-stage-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="4" opacity="0.9">
    <path d="M954 0 l-2 620"/><path d="M970 0 l2 620"/><path d="M986 0 l-2 620"/><path d="M1000 0 l2 620"/>
  </g>
</g>

<!-- stage left leg curtain -->
<g class="fx-sway" style="--d:1.3s;transform-origin:top center">
  <rect x="-10" y="0" width="80" height="620" fill="url(#or-stage-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="4" opacity="0.9">
    <path d="M8 0 l4 620"/><path d="M26 0 l-2 620"/><path d="M44 0 l3 620"/><path d="M62 0 l-3 620"/>
  </g>
</g>

<!-- the border curtain, hung above -->
<g>
  <path d="M1000 0 L0 0 L0 34 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 L1000 34 Z" fill="url(#or-stage-velvet)"/>
  <g fill="#9b7a3f" opacity="0.6">
    <circle cx="31" cy="56" r="4"/><circle cx="93" cy="56" r="4"/><circle cx="155" cy="56" r="4"/>
    <circle cx="217" cy="56" r="4"/><circle cx="279" cy="56" r="4"/><circle cx="341" cy="56" r="4"/>
    <circle cx="403" cy="56" r="4"/><circle cx="465" cy="56" r="4"/><circle cx="527" cy="56" r="4"/>
    <circle cx="589" cy="56" r="4"/><circle cx="651" cy="56" r="4"/><circle cx="713" cy="56" r="4"/>
    <circle cx="775" cy="56" r="4"/><circle cx="837" cy="56" r="4"/><circle cx="899" cy="56" r="4"/>
    <circle cx="961" cy="56" r="4"/>
  </g>
  <rect x="0" y="0" width="1000" height="12" fill="#14110d"/>
</g>

<!-- FOREGROUND: the footlight trough, still burning -->
<g>
  <rect x="0" y="588" width="1000" height="32" fill="#191310"/>
  <rect x="0" y="584" width="1000" height="8" fill="#3b2f22"/>
  <g>
    <path d="M20 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="48" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M116 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="144" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M212 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="240" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M308 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="336" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M404 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="432" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M500 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="528" cy="592" rx="17" ry="7" fill="#ffd98a" class="fx-flicker" style="--d:1.9s"/>
    <path d="M596 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="624" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M692 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="720" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M788 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="816" cy="592" rx="17" ry="7" fill="#ffd98a"/>
    <path d="M884 592 q28 -30 56 0 z" fill="#241b12"/><ellipse cx="912" cy="592" rx="17" ry="7" fill="#ffd98a"/>
  </g>
  <g fill="#d9a441" opacity="0.16">
    <ellipse cx="48" cy="580" rx="52" ry="26" class="fx-glow" style="--d:.2s"/><ellipse cx="240" cy="580" rx="52" ry="26" class="fx-glow" style="--d:2.6s"/>
    <ellipse cx="432" cy="580" rx="52" ry="26" class="fx-glow" style="--d:1.1s"/><ellipse cx="624" cy="580" rx="52" ry="26" class="fx-glow" style="--d:2.9s"/>
    <ellipse cx="816" cy="580" rx="52" ry="26" class="fx-glow" style="--d:1.7s"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#or-stage-vig)"/>
`,
  },

  wings: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_callboard: { x: 72, y: 23 },
      h_proplog: { x: 45, y: 64 },
      h_firebucket: { x: 31, y: 81 },
    },
    svg: `
<defs>
  <linearGradient id="or-wings-air" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#17130e"/><stop offset="1" stop-color="#0b0906"/>
  </linearGradient>
  <linearGradient id="or-wings-brick" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#161009"/>
  </linearGradient>
  <linearGradient id="or-wings-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3524"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="or-wings-spill" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="0.5" stop-color="#d9a441" stop-opacity="0.14"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-wings-sand" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#cbb98f"/><stop offset="1" stop-color="#8a7648"/>
  </linearGradient>
  <linearGradient id="or-wings-slate" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#33353a"/><stop offset="1" stop-color="#1d1f22"/>
  </linearGradient>
  <radialGradient id="or-wings-glow" cx="0.82" cy="0.46" r="0.62">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-wings-vig" cx="0.5" cy="0.48" r="0.76">
    <stop offset="0.36" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.85"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-wings-air)"/>

<!-- the back wall of the theatre: old brick -->
<rect x="0" y="0" width="900" height="500" fill="url(#or-wings-brick)"/>
<g stroke="#1b140d" stroke-width="2" opacity="0.7">
  <line x1="0" y1="40" x2="900" y2="40"/><line x1="0" y1="76" x2="900" y2="76"/>
  <line x1="0" y1="112" x2="900" y2="112"/><line x1="0" y1="148" x2="900" y2="148"/>
  <line x1="0" y1="184" x2="900" y2="184"/><line x1="0" y1="220" x2="900" y2="220"/>
  <line x1="0" y1="256" x2="900" y2="256"/><line x1="0" y1="292" x2="900" y2="292"/>
  <line x1="0" y1="328" x2="900" y2="328"/><line x1="0" y1="364" x2="900" y2="364"/>
  <line x1="0" y1="400" x2="900" y2="400"/><line x1="0" y1="436" x2="900" y2="436"/>
  <line x1="0" y1="472" x2="900" y2="472"/>
</g>
<g stroke="#1b140d" stroke-width="2" opacity="0.45">
  <line x1="60" y1="4" x2="60" y2="40"/><line x1="180" y1="4" x2="180" y2="40"/>
  <line x1="300" y1="4" x2="300" y2="40"/><line x1="420" y1="4" x2="420" y2="40"/>
  <line x1="540" y1="4" x2="540" y2="40"/><line x1="660" y1="4" x2="660" y2="40"/>
  <line x1="780" y1="4" x2="780" y2="40"/>
  <line x1="120" y1="40" x2="120" y2="76"/><line x1="240" y1="40" x2="240" y2="76"/>
  <line x1="360" y1="40" x2="360" y2="76"/><line x1="480" y1="40" x2="480" y2="76"/>
  <line x1="600" y1="40" x2="600" y2="76"/><line x1="720" y1="40" x2="720" y2="76"/>
  <line x1="840" y1="40" x2="840" y2="76"/>
  <line x1="60" y1="112" x2="60" y2="148"/><line x1="300" y1="112" x2="300" y2="148"/>
  <line x1="540" y1="112" x2="540" y2="148"/><line x1="780" y1="112" x2="780" y2="148"/>
  <line x1="180" y1="220" x2="180" y2="256"/><line x1="420" y1="220" x2="420" y2="256"/>
  <line x1="660" y1="220" x2="660" y2="256"/>
  <line x1="120" y1="328" x2="120" y2="364"/><line x1="480" y1="328" x2="480" y2="364"/>
  <line x1="720" y1="328" x2="720" y2="364"/>
</g>
<g fill="#3b2f22" opacity="0.35">
  <path d="M40 180 q30 -20 66 -6 q28 14 4 34 q-40 20 -70 -8 z"/>
  <path d="M600 300 q34 -18 62 2 q24 20 -4 34 q-40 16 -62 -10 z"/>
</g>

<!-- the floor -->
<rect x="0" y="486" width="1000" height="134" fill="#191310"/>
<g stroke="#241b12" stroke-width="2" opacity="0.9">
  <line x1="0" y1="516" x2="1000" y2="516"/><line x1="0" y1="552" x2="1000" y2="552"/>
  <line x1="0" y1="594" x2="1000" y2="594"/>
</g>
<rect x="0" y="482" width="1000" height="7" fill="#3b2f22" opacity="0.7"/>

<!-- the gap to the stage: the only real light in the room -->
<rect x="820" y="0" width="180" height="620" fill="#2a2018"/>
<rect x="848" y="0" width="120" height="620" fill="#6b5326"/>
<g class="fx-glow" style="--d:.4s"><rect x="848" y="0" width="120" height="470" fill="#d9a441" opacity="0.5"/></g>
<rect x="848" y="470" width="120" height="150" fill="#7a5a32"/>
<g stroke="#8f6c3a" stroke-width="2" opacity="0.7">
  <line x1="872" y1="470" x2="862" y2="620"/><line x1="908" y1="470" x2="908" y2="620"/>
  <line x1="944" y1="470" x2="956" y2="620"/>
</g>
<rect x="848" y="56" width="120" height="190" fill="#a8823f" opacity="0.45"/>
<rect x="872" y="104" width="72" height="126" fill="#c49a4c" opacity="0.4"/>
<rect x="848" y="246" width="120" height="14" fill="#5c4327" opacity="0.7"/>
<rect x="600" y="0" width="400" height="620" fill="url(#or-wings-spill)" class="fx-glow" style="--d:1.6s"/>
<rect width="1000" height="620" fill="url(#or-wings-glow)" class="fx-glow" style="--d:2.8s"/>
<path d="M818 0 q-14 160 8 300 q22 150 -8 320 l-46 0 l0 -620 z" fill="#0e0b08" opacity="0.95"/>

<!-- the grid above: ropes coming down out of the dark -->
<g stroke="#8a7648" stroke-width="3" opacity="0.85">
  <line x1="42" y1="0" x2="46" y2="262"/><line x1="66" y1="0" x2="68" y2="262"/>
  <line x1="90" y1="0" x2="90" y2="262"/><line x1="114" y1="0" x2="112" y2="262"/>
  <line x1="138" y1="0" x2="134" y2="262"/><line x1="162" y1="0" x2="156" y2="262"/>
  <line x1="186" y1="0" x2="178" y2="262"/><line x1="210" y1="0" x2="200" y2="262"/>
  <line x1="234" y1="0" x2="222" y2="262"/><line x1="258" y1="0" x2="244" y2="262"/>
</g>
<g stroke="#6b5326" stroke-width="2" opacity="0.6">
  <line x1="300" y1="0" x2="316" y2="220"/><line x1="352" y1="0" x2="372" y2="180"/>
  <line x1="470" y1="0" x2="486" y2="140"/><line x1="720" y1="0" x2="736" y2="120"/>
</g>

<!-- sandbags hanging -->
<g class="fx-sway" style="--d:.9s;transform-origin:top center">
  <path d="M300 220 q-22 8 -22 40 q0 34 22 42 q22 -8 22 -42 q0 -32 -22 -40 z" fill="#6b5a3a"/>
  <path d="M300 224 q-16 8 -16 36 q0 28 16 36 q16 -8 16 -36 q0 -28 -16 -36 z" fill="#8a7648"/>
  <g stroke="#4a3524" stroke-width="2.4" opacity="0.9">
    <path d="M280 250 q20 8 40 0"/><path d="M280 278 q20 8 40 0"/>
  </g>
  <path d="M292 220 q8 -12 16 0" fill="none" stroke="#4a3524" stroke-width="4"/>
</g>
<g class="fx-sway" style="--d:2.2s;transform-origin:top center">
  <path d="M368 180 q-18 6 -18 32 q0 28 18 34 q18 -6 18 -34 q0 -26 -18 -32 z" fill="#6b5a3a"/>
  <path d="M368 184 q-13 6 -13 29 q0 22 13 28 q13 -6 13 -28 q0 -23 -13 -29 z" fill="#7d6c42"/>
  <g stroke="#4a3524" stroke-width="2" opacity="0.9">
    <path d="M352 206 q16 6 32 0"/><path d="M352 228 q16 6 32 0"/>
  </g>
</g>
<g>
  <path d="M484 140 q-15 6 -15 27 q0 23 15 28 q15 -5 15 -28 q0 -21 -15 -27 z" fill="#5c4c30"/>
  <g stroke="#3b2f22" stroke-width="2" opacity="0.9">
    <path d="M471 162 q13 5 26 0"/><path d="M471 182 q13 5 26 0"/>
  </g>
</g>
<g>
  <path d="M734 120 q-13 5 -13 24 q0 20 13 24 q13 -4 13 -24 q0 -19 -13 -24 z" fill="#4d4029"/>
  <g stroke="#332a1c" stroke-width="2">
    <path d="M723 140 q11 4 22 0"/><path d="M723 158 q11 4 22 0"/>
  </g>
</g>

<!-- THE FLY RAIL: pin rail, belaying pins, coiled rope -->
<g>
  <rect x="-10" y="258" width="300" height="18" rx="4" fill="url(#or-wings-wood)"/>
  <rect x="-10" y="258" width="300" height="5" fill="#5c4327"/>
  <rect x="-10" y="276" width="300" height="7" fill="#1b140d"/>
  <g fill="#3a352d">
    <rect x="24" y="272" width="9" height="42" rx="4"/><rect x="60" y="272" width="9" height="42" rx="4"/>
    <rect x="96" y="272" width="9" height="42" rx="4"/><rect x="132" y="272" width="9" height="42" rx="4"/>
    <rect x="168" y="272" width="9" height="42" rx="4"/><rect x="204" y="272" width="9" height="42" rx="4"/>
    <rect x="240" y="272" width="9" height="42" rx="4"/>
  </g>
  <g fill="#5b564b">
    <circle cx="28" cy="316" r="7"/><circle cx="64" cy="316" r="7"/><circle cx="100" cy="316" r="7"/>
    <circle cx="136" cy="316" r="7"/><circle cx="172" cy="316" r="7"/><circle cx="208" cy="316" r="7"/>
    <circle cx="244" cy="316" r="7"/>
  </g>
  <g fill="none" stroke="#8a7648" stroke-width="4" opacity="0.9">
    <path d="M28 290 q-22 24 -6 44 q16 20 -4 40" class="fx-sway" style="--d:.2s;transform-origin:top center"/>
    <path d="M100 292 q-24 22 -8 44 q18 22 -6 42" class="fx-sway" style="--d:1.5s;transform-origin:top center"/>
    <path d="M172 292 q22 24 4 46 q-18 22 2 40" class="fx-sway" style="--d:2.3s;transform-origin:top center"/>
    <path d="M244 290 q24 26 6 48 q-16 20 4 38" class="fx-sway" style="--d:2.9s;transform-origin:top center"/>
  </g>
</g>

<!-- THE CALL BOARD: chalked calls for the evening -->
<g>
  <rect x="612" y="60" width="228" height="176" rx="4" fill="#3b2f22"/>
  <rect x="620" y="68" width="212" height="160" fill="url(#or-wings-slate)"/>
  <rect x="620" y="68" width="212" height="6" fill="#4a4d54" opacity="0.5"/>
  <g stroke="#e3d5ac" stroke-width="4" stroke-linecap="round" opacity="0.85">
    <line x1="634" y1="90" x2="700" y2="90"/><line x1="756" y1="90" x2="800" y2="90"/>
    <line x1="634" y1="118" x2="712" y2="118"/><line x1="758" y1="118" x2="806" y2="118"/>
    <line x1="634" y1="146" x2="722" y2="146"/><line x1="748" y1="146" x2="812" y2="146"/>
    <line x1="634" y1="174" x2="734" y2="174"/><line x1="754" y1="174" x2="808" y2="174"/>
    <line x1="634" y1="202" x2="706" y2="202"/><line x1="746" y1="202" x2="804" y2="202"/>
  </g>
  <g stroke="#f0e7ce" stroke-width="2" opacity="0.5">
    <line x1="738" y1="82" x2="738" y2="212"/>
  </g>
  <path d="M628 158 q40 20 90 6" fill="none" stroke="#f0e7ce" stroke-width="7" opacity="0.16"/>
  <g fill="#9b7a3f">
    <circle cx="622" cy="70" r="5"/><circle cx="830" cy="70" r="5"/>
    <circle cx="622" cy="226" r="5"/><circle cx="830" cy="226" r="5"/>
  </g>
  <rect x="700" y="240" width="52" height="10" rx="4" fill="#4a3524"/>
  <rect x="716" y="244" width="18" height="12" rx="3" fill="#f0e7ce" opacity="0.85"/>
</g>

<!-- MABEL FINCH, guarding her table -->
<g>
  <path d="M470 424 q56 -14 112 0 l0 -66 q-6 -60 -56 -64 q-50 4 -56 64 z" fill="#2b2820"/>
  <path d="M486 340 q40 -26 80 0 l6 84 l-92 0 z" fill="#33302a"/>
  <path d="M498 336 q28 -18 56 0 l-4 22 l-48 0 z" fill="#5f6b4a"/>
  <path d="M516 330 l22 0 l-3 30 l-16 0 z" fill="#e3d5ac"/>
  <path d="M496 376 q30 -10 62 0 l4 48 l-70 0 z" fill="#cbb98f" opacity="0.3"/>
  <circle cx="527" cy="272" r="13" fill="#5e5b52"/>
  <ellipse cx="527" cy="302" rx="24" ry="27" fill="#b3a184"/>
  <path d="M503 300 q24 -30 48 0 q6 -32 -24 -32 q-30 0 -24 32 z" fill="#736f64"/>
  <path d="M501 296 q-8 22 2 36 l6 -6 q-8 -14 -2 -28 z" fill="#736f64"/>
  <path d="M553 296 q8 22 -2 36 l-6 -6 q8 -14 2 -28 z" fill="#736f64"/>
  <path d="M507 284 q20 -12 40 0" fill="none" stroke="#8e8e88" stroke-width="3" opacity="0.8"/>
  <g stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round">
    <line x1="512" y1="298" x2="522" y2="299"/><line x1="532" y1="299" x2="542" y2="298"/>
  </g>
  <line x1="519" y1="316" x2="535" y2="316" stroke="#6b5a45" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M478 384 q48 -18 98 0 l0 26 q-48 -16 -98 0 z" fill="#26231c"/>
  <ellipse cx="558" cy="392" rx="17" ry="9" fill="#b3a184"/>
  <ellipse cx="496" cy="396" rx="17" ry="9" fill="#a6957a"/>
  <g stroke="#8d7c62" stroke-width="1.4" stroke-linecap="round">
    <line x1="546" y1="390" x2="562" y2="394"/><line x1="548" y1="386" x2="564" y2="390"/>
    <line x1="486" y1="394" x2="502" y2="398"/>
  </g>
  <circle cx="527" cy="352" r="3.5" fill="#9b7a3f"/>
</g>

<!-- THE GREAT PROP TABLE: taped and labelled squares -->
<g>
  <rect x="352" y="396" width="470" height="16" rx="3" fill="#5c4327"/>
  <rect x="352" y="412" width="470" height="10" fill="#33271a"/>
  <path d="M352 412 L822 412 L840 470 L336 470 Z" fill="#4a3524"/>
  <path d="M352 412 L822 412 L830 436 L344 436 Z" fill="#584129"/>
  <g stroke="#3b2f22" stroke-width="2" opacity="0.8">
    <line x1="420" y1="412" x2="412" y2="470"/><line x1="500" y1="412" x2="496" y2="470"/>
    <line x1="580" y1="412" x2="582" y2="470"/><line x1="660" y1="412" x2="668" y2="470"/>
    <line x1="740" y1="412" x2="754" y2="470"/>
  </g>
  <g fill="none" stroke="#e3d5ac" stroke-width="3" opacity="0.75">
    <rect x="378" y="420" width="52" height="34"/><rect x="446" y="420" width="52" height="34"/>
    <rect x="514" y="420" width="52" height="34"/><rect x="582" y="420" width="52" height="34"/>
    <rect x="650" y="420" width="52" height="34"/><rect x="718" y="420" width="52" height="34"/>
  </g>
  <g fill="#e3d5ac" opacity="0.8">
    <rect x="384" y="456" width="40" height="8"/><rect x="452" y="456" width="40" height="8"/>
    <rect x="520" y="456" width="40" height="8"/><rect x="588" y="456" width="40" height="8"/>
    <rect x="656" y="456" width="40" height="8"/><rect x="724" y="456" width="40" height="8"/>
  </g>
  <g stroke="#4a3f31" stroke-width="1.6" opacity="0.9">
    <line x1="390" y1="460" x2="418" y2="460"/><line x1="458" y1="460" x2="486" y2="460"/>
    <line x1="526" y1="460" x2="554" y2="460"/><line x1="594" y1="460" x2="622" y2="460"/>
    <line x1="662" y1="460" x2="690" y2="460"/><line x1="730" y1="460" x2="758" y2="460"/>
  </g>
  <g>
    <path d="M456 448 l24 0 l-5 -14 q-7 -8 -14 0 z" fill="#9b7a3f"/>
    <rect x="464" y="448" width="8" height="4" fill="#9b7a3f"/>
    <ellipse cx="468" cy="452" rx="12" ry="3" fill="#7d6132"/>
  </g>
  <g>
    <path d="M520 450 q18 -30 44 -12 l-42 16 z" fill="#7a5a6e"/>
    <g stroke="#c2a9b6" stroke-width="1.4" opacity="0.7">
      <line x1="522" y1="448" x2="546" y2="432"/><line x1="526" y1="450" x2="552" y2="437"/>
    </g>
  </g>
  <g>
    <path d="M588 444 l30 0 l0 7 l-10 0 l-4 8 l-8 0 l0 -8 l-8 0 z" fill="#3a352d"/>
    <rect x="616" y="442" width="14" height="6" rx="2" fill="#5b564b"/>
  </g>
  <g>
    <rect x="672" y="426" width="6" height="22" fill="#9b7a3f"/>
    <ellipse cx="675" cy="450" rx="12" ry="4" fill="#9b7a3f"/>
    <rect x="671" y="416" width="8" height="12" fill="#f0e7ce"/>
  </g>
  <g>
    <rect x="732" y="436" width="26" height="14" rx="3" fill="#5d1f18"/>
    <rect x="732" y="436" width="26" height="5" rx="2" fill="#7d2d24"/>
  </g>
  <path d="M386 424 l44 26 M430 424 l-44 26" stroke="#5d1f18" stroke-width="2.5" opacity="0.5"/>
</g>

<!-- THE PROP TABLE LOG, open at the end of the table -->
<g transform="rotate(-4 442 400)">
  <path d="M366 384 q38 -12 74 4 q36 -16 74 -4 l6 30 q-38 -10 -74 6 q-36 -16 -74 -6 z" fill="#241b12"/>
  <path d="M370 380 q36 -12 70 4 q34 -16 70 -4 l5 28 q-36 -10 -70 6 q-34 -16 -70 -6 z" fill="#f0e7ce"/>
  <path d="M440 384 l4 28" stroke="#9a8a63" stroke-width="2.4"/>
  <g stroke="#2f3a4e" stroke-width="1.7" opacity="0.9">
    <line x1="380" y1="388" x2="430" y2="391"/><line x1="380" y1="394" x2="430" y2="397"/>
    <line x1="380" y1="400" x2="426" y2="403"/><line x1="380" y1="406" x2="428" y2="409"/>
    <line x1="452" y1="390" x2="502" y2="387"/><line x1="452" y1="396" x2="500" y2="393"/>
  </g>
  <rect x="450" y="399" width="52" height="12" fill="#cbb98f" opacity="0.5"/>
  <g stroke="#5b564b" stroke-width="2.4" opacity="0.95">
    <line x1="454" y1="404" x2="496" y2="401"/><line x1="454" y1="409" x2="484" y2="407"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.2" opacity="0.6">
    <line x1="452" y1="412" x2="500" y2="409"/>
  </g>
  <g transform="rotate(24 470 378)">
    <rect x="440" y="374" width="60" height="7" rx="3" fill="#1b2436"/>
    <rect x="496" y="374" width="18" height="7" rx="3" fill="#9b7a3f"/>
    <path d="M440 374 l-12 4 l12 3 z" fill="#c8c2ad"/>
  </g>
  <g fill="#c9b98f" opacity="0.7">
    <circle cx="510" cy="404" r="2"/><circle cx="516" cy="399" r="1.6"/><circle cx="506" cy="396" r="1.4"/>
  </g>
</g>

<!-- THE FIRE BUCKET by the fly rail -->
<g>
  <ellipse cx="310" cy="546" rx="52" ry="12" fill="#0d0a07" opacity="0.6"/>
  <path d="M272 466 l76 0 l-12 82 l-52 0 z" fill="#a8352a"/>
  <path d="M272 466 l76 0 l-3 20 l-70 0 z" fill="#c04434"/>
  <path d="M336 486 l-6 42 l-40 0 l-6 -42 z" fill="#8b291f" opacity="0.55"/>
  <ellipse cx="310" cy="466" rx="38" ry="11" fill="url(#or-wings-sand)"/>
  <ellipse cx="310" cy="466" rx="31" ry="8" fill="#b8a271"/>
  <g fill="#8a7648" opacity="0.7">
    <ellipse cx="296" cy="466" rx="10" ry="3"/><ellipse cx="322" cy="468" rx="9" ry="3"/>
  </g>
  <g transform="rotate(-18 316 460)">
    <rect x="294" y="448" width="42" height="15" rx="5" fill="#3d3830"/>
    <rect x="294" y="448" width="42" height="5" rx="2" fill="#5b564b"/>
    <rect x="334" y="444" width="10" height="22" rx="4" fill="#a8a294"/>
    <ellipse cx="292" cy="456" rx="8" ry="11" fill="#6f6a5e"/>
    <g stroke="#14110d" stroke-width="1.6" opacity="0.85">
      <line x1="304" y1="450" x2="304" y2="461"/><line x1="313" y1="450" x2="313" y2="461"/>
      <line x1="322" y1="450" x2="322" y2="461"/>
    </g>
    <path d="M344 450 l20 0 l0 9 l-20 0 z" fill="#e8e4d4"/>
    <path d="M344 450 l20 0 l0 3 l-20 0 z" fill="#ffffff" opacity="0.5"/>
  </g>
  <g fill="#cbb98f" opacity="0.8">
    <ellipse cx="352" cy="546" rx="16" ry="4"/><ellipse cx="272" cy="548" rx="12" ry="3.5"/>
    <circle cx="338" cy="540" r="2"/><circle cx="286" cy="542" r="2"/>
  </g>
  <path d="M266 486 q-14 6 -12 22" fill="none" stroke="#8b291f" stroke-width="6" stroke-linecap="round"/>
</g>

<!-- PIP, on the hamper by the rail, hugging his knees -->
<g>
  <ellipse cx="150" cy="576" rx="94" ry="16" fill="#0d0a07" opacity="0.6"/>
  <rect x="62" y="452" width="180" height="118" rx="8" fill="#7a5a32"/>
  <rect x="62" y="452" width="180" height="14" rx="6" fill="#96703e"/>
  <g fill="none" stroke="#523a1e" stroke-width="2.6" opacity="0.85">
    <path d="M66 480 l172 0"/><path d="M66 500 l172 0"/><path d="M66 520 l172 0"/><path d="M66 540 l172 0"/><path d="M66 558 l172 0"/>
  </g>
  <g stroke="#a8814a" stroke-width="2" opacity="0.6">
    <line x1="96" y1="466" x2="96" y2="568"/><line x1="150" y1="466" x2="150" y2="568"/><line x1="204" y1="466" x2="204" y2="568"/>
  </g>
  <rect x="128" y="446" width="44" height="12" rx="4" fill="#4a3524"/>
  <g fill="#3a352d">
    <rect x="72" y="500" width="12" height="20" rx="3"/><rect x="220" y="500" width="12" height="20" rx="3"/>
  </g>
  <g>
    <!-- back and shoulders, curved forward over his knees -->
    <path d="M112 452 q-14 -44 4 -70 q14 -22 34 -20 l14 4 l-2 86 z" fill="#3a4048"/>
    <path d="M124 452 q-12 -40 4 -62 q12 -18 28 -16 l0 78 z" fill="#454c56"/>
    <path d="M120 384 q22 -16 42 -2 l-2 16 q-20 -12 -40 0 z" fill="#ded3b8"/>
    <ellipse cx="146" cy="352" rx="19" ry="21" fill="#b3a184"/>
    <path d="M127 348 q19 -24 38 0 q4 -26 -19 -26 q-23 0 -19 26 z" fill="#3f3223"/>
    <path d="M125 348 q-4 12 2 20 l5 -5 q-4 -8 -2 -15 z" fill="#3f3223"/>
    <path d="M165 346 q5 12 -1 21 l-5 -5 q4 -8 2 -16 z" fill="#3f3223"/>
    <g stroke="#4a3f31" stroke-width="2" stroke-linecap="round">
      <line x1="134" y1="350" x2="142" y2="350"/><line x1="151" y1="350" x2="159" y2="350"/>
    </g>
    <line x1="140" y1="366" x2="152" y2="366" stroke="#6b5a45" stroke-width="2.2" stroke-linecap="round"/>
    <!-- knees drawn up to his chin -->
    <path d="M144 452 q-4 -50 30 -52 q30 -2 30 52 z" fill="#2f353d"/>
    <path d="M152 452 q-2 -42 24 -44 q24 -2 24 44 z" fill="#3a4048"/>
    <ellipse cx="176" cy="404" rx="26" ry="14" fill="#454c56"/>
    <!-- arms wrapped round the shins -->
    <path d="M124 424 q46 -20 84 4 l-4 16 q-40 -22 -78 -4 z" fill="#3a4048"/>
    <path d="M128 428 q44 -18 78 4" fill="none" stroke="#545c66" stroke-width="3" opacity="0.7"/>
    <ellipse cx="122" cy="432" rx="13" ry="9" fill="#b3a184"/>
    <ellipse cx="208" cy="432" rx="12" ry="9" fill="#a6957a"/>
    <g stroke="#8d7c62" stroke-width="1.3" stroke-linecap="round">
      <line x1="112" y1="430" x2="128" y2="434"/><line x1="114" y1="426" x2="130" y2="430"/>
    </g>
    <!-- boots on the hamper lid -->
    <path d="M186 452 q22 -6 30 4 l0 8 l-36 0 z" fill="#241b12"/>
    <path d="M158 452 q22 -6 30 4 l0 8 l-36 0 z" fill="#1b140d"/>
    <!-- stage light, edging him -->
    <g class="fx-glow" style="--d:2.1s"><path d="M204 400 q10 26 4 52 l-8 0 q6 -26 -4 -50 z" fill="#d9a441" opacity="0.3"/></g>
  </g>
</g>

<!-- foreground: a scenery flat leaning in, stage weights, a coil of rope -->
<g>
  <path d="M962 0 q-14 150 4 300 q18 150 -6 320 l54 0 l0 -620 z" fill="#25100e"/>
  <g fill="none" stroke="#160807" stroke-width="5" opacity="0.9">
    <path d="M974 0 q-12 150 4 300 q16 150 -4 320"/>
    <path d="M992 0 q-10 150 4 300 q14 150 -4 320"/>
  </g>
  <path d="M962 0 q-14 150 4 300 q18 150 -6 320" fill="none" stroke="#6b2a24" stroke-width="4" opacity="0.55"/>
</g>
<!-- taped cable running off toward the stage -->
<path d="M300 604 q220 -22 470 -34 q60 -4 96 -28" fill="none" stroke="#14110d" stroke-width="7" opacity="0.9"/>
<g fill="#e3d5ac" opacity="0.6">
  <rect x="412" y="592" width="18" height="8" rx="2"/><rect x="596" y="580" width="18" height="8" rx="2"/>
  <rect x="756" y="566" width="18" height="8" rx="2"/>
</g>
<g>
  <rect x="392" y="546" width="70" height="12" rx="3" fill="#3a352d"/>
  <rect x="396" y="534" width="62" height="12" rx="3" fill="#4a453c"/>
  <rect x="400" y="522" width="54" height="12" rx="3" fill="#3a352d"/>
  <circle cx="427" cy="528" r="4" fill="#14110d"/>
</g>
<g fill="none" stroke="#7d6c42" stroke-width="6" opacity="0.85">
  <ellipse cx="620" cy="570" rx="56" ry="18"/>
  <ellipse cx="620" cy="578" rx="46" ry="14"/>
  <ellipse cx="620" cy="586" rx="34" ry="10"/>
</g>
<path d="M676 566 q52 8 92 -14" fill="none" stroke="#7d6c42" stroke-width="6" opacity="0.8"/>

<rect width="1000" height="620" fill="url(#or-wings-vig)"/>
`,
  },

  dressing: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_door: { x: 20, y: 62 },
      h_vanity: { x: 43, y: 68 },
      h_trunk: { x: 80, y: 73 },
    },
    svg: `
<defs>
  <linearGradient id="or-dress-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a2c1f"/><stop offset="1" stop-color="#1b140d"/>
  </linearGradient>
  <linearGradient id="or-dress-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3524"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="or-dress-glass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2e2a24"/><stop offset="0.5" stop-color="#1d1a15"/><stop offset="1" stop-color="#26221c"/>
  </linearGradient>
  <linearGradient id="or-dress-hide" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6b4c2c"/><stop offset="1" stop-color="#332314"/>
  </linearGradient>
  <linearGradient id="or-dress-silk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8f6f80"/><stop offset="1" stop-color="#4a3743"/>
  </linearGradient>
  <radialGradient id="or-dress-bulb" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.6"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-dress-glow" cx="0.48" cy="0.32" r="0.62">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-dress-vig" cx="0.48" cy="0.46" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-dress-wall)"/>

<!-- striped paper, picture rail, skirting -->
<g stroke="#4a392a" stroke-width="7" opacity="0.35">
  <line x1="30" y1="26" x2="30" y2="470"/><line x1="82" y1="26" x2="82" y2="470"/>
  <line x1="134" y1="26" x2="134" y2="470"/><line x1="186" y1="26" x2="186" y2="470"/>
  <line x1="238" y1="26" x2="238" y2="470"/><line x1="290" y1="26" x2="290" y2="470"/>
  <line x1="342" y1="26" x2="342" y2="470"/><line x1="394" y1="26" x2="394" y2="470"/>
  <line x1="446" y1="26" x2="446" y2="470"/><line x1="498" y1="26" x2="498" y2="470"/>
  <line x1="550" y1="26" x2="550" y2="470"/><line x1="602" y1="26" x2="602" y2="470"/>
  <line x1="654" y1="26" x2="654" y2="470"/><line x1="706" y1="26" x2="706" y2="470"/>
  <line x1="758" y1="26" x2="758" y2="470"/><line x1="810" y1="26" x2="810" y2="470"/>
  <line x1="862" y1="26" x2="862" y2="470"/><line x1="914" y1="26" x2="914" y2="470"/>
  <line x1="966" y1="26" x2="966" y2="470"/>
</g>
<rect x="0" y="0" width="1000" height="26" fill="#241b12"/>
<rect x="0" y="26" width="1000" height="7" fill="#4a3524"/>
<rect x="0" y="452" width="1000" height="26" fill="#241b12"/>
<rect x="0" y="452" width="1000" height="6" fill="#4a3524"/>
<rect x="0" y="478" width="1000" height="142" fill="#1d160f"/>
<g stroke="#2a2016" stroke-width="2">
  <line x1="0" y1="506" x2="1000" y2="506"/><line x1="0" y1="544" x2="1000" y2="544"/>
  <line x1="0" y1="588" x2="1000" y2="588"/>
</g>
<rect width="1000" height="620" fill="url(#or-dress-glow)"/>

<!-- the door, standing open on a black corridor -->
<g>
  <rect x="10" y="46" width="132" height="424" fill="#14110d"/>
  <rect x="4" y="40" width="146" height="10" fill="#4a3524"/>
  <rect x="4" y="40" width="10" height="430" fill="#4a3524"/>
  <rect x="140" y="40" width="12" height="430" fill="#3b2f22"/>
  <path d="M96 60 L142 46 L142 470 L96 458 Z" fill="url(#or-dress-wood)"/>
  <g fill="none" stroke="#2a2018" stroke-width="3">
    <path d="M108 92 L134 84 L134 200 L108 196 Z"/><path d="M108 232 L134 226 L134 356 L108 352 Z"/>
  </g>
  <circle cx="104" cy="270" r="6" fill="#9b7a3f"/>
  <!-- a wrap on the door hook -->
  <g class="fx-sway" style="--d:1.2s;transform-origin:top center">
    <path d="M60 60 q26 -6 40 12 q12 60 -6 116 q-22 20 -42 -4 q-14 -66 8 -124 z" fill="url(#or-dress-silk)"/>
    <g fill="none" stroke="#31242c" stroke-width="3" opacity="0.8">
      <path d="M66 78 q14 60 4 106"/><path d="M84 72 q12 62 2 108"/>
    </g>
  </g>
  <circle cx="76" cy="54" r="6" fill="#9b7a3f"/>
</g>

<!-- THE RANSACKED BUREAU AND WRITING DESK -->
<g>
  <rect x="162" y="312" width="180" height="16" rx="3" fill="#5c4327"/>
  <rect x="168" y="328" width="168" height="146" fill="#33271a"/>
  <!-- top drawer, gaping -->
  <path d="M148 340 L322 340 L322 384 L148 384 Z" fill="#4a3524"/>
  <path d="M148 340 L322 340 L314 332 L156 332 Z" fill="#5c4327"/>
  <rect x="154" y="346" width="162" height="30" fill="#1b140d"/>
  <g fill="#e3d5ac">
    <path d="M170 344 l40 -6 l4 22 l-40 8 z"/><path d="M216 342 l38 -4 l3 20 l-38 6 z"/>
    <path d="M266 346 l40 -6 l4 20 l-40 6 z"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.5" opacity="0.9">
    <line x1="176" y1="350" x2="206" y2="346"/><line x1="177" y1="356" x2="207" y2="352"/>
    <line x1="222" y1="348" x2="250" y2="345"/><line x1="272" y1="352" x2="302" y2="348"/>
  </g>
  <ellipse cx="247" cy="338" rx="14" ry="4" fill="#9b7a3f"/>
  <!-- second drawer, not quite shut -->
  <path d="M158 396 L340 396 L340 428 L158 428 Z" fill="#4a3524"/>
  <rect x="164" y="400" width="170" height="10" fill="#1b140d"/>
  <ellipse cx="249" cy="414" rx="14" ry="4" fill="#9b7a3f"/>
  <!-- third drawer, closed -->
  <rect x="176" y="436" width="154" height="32" fill="#3b2f22"/>
  <ellipse cx="253" cy="452" rx="14" ry="4" fill="#9b7a3f"/>
  <!-- blotter on top, a torn corner still clamped under the bar -->
  <rect x="186" y="298" width="130" height="16" rx="2" fill="#5d1f18"/>
  <rect x="192" y="292" width="118" height="8" fill="#3a2418"/>
  <path d="M244 288 l24 -3 l3 14 l-24 3 z" fill="#f0e7ce"/>
  <path d="M244 288 l24 -3 l1 5 l-24 3 z" fill="#cbb98f"/>
  <!-- the jewel case, unopened -->
  <g>
    <rect x="288" y="278" width="52" height="24" rx="4" fill="#5d1f18"/>
    <path d="M288 278 q26 -16 52 0 z" fill="#7d2d24"/>
    <rect x="308" y="292" width="12" height="8" rx="2" fill="#9b7a3f"/>
  </g>
  <!-- papers thrown on the floor -->
  <g fill="#e3d5ac" opacity="0.9">
    <path d="M152 490 l54 -8 l5 20 l-54 10 z"/><path d="M214 500 l50 -6 l4 18 l-50 8 z"/>
    <path d="M170 522 l56 -8 l4 18 l-56 10 z"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.4" opacity="0.8">
    <line x1="158" y1="494" x2="200" y2="489"/><line x1="159" y1="500" x2="202" y2="495"/>
    <line x1="220" y1="504" x2="258" y2="500"/><line x1="176" y1="528" x2="222" y2="522"/>
  </g>
</g>

<!-- THE MIRROR, ringed in hot bulbs -->
<g>
  <rect x="358" y="58" width="266" height="280" rx="6" fill="#5c4327"/>
  <rect x="368" y="68" width="246" height="260" rx="4" fill="#7d5f34"/>
  <rect x="392" y="92" width="198" height="212" fill="url(#or-dress-glass)"/>
  <!-- what the glass gives back: the far wall, the open door, a costume on its rail -->
  <g opacity="0.5">
    <rect x="392" y="92" width="198" height="122" fill="#3a2c1f"/>
    <g stroke="#4a392a" stroke-width="5" opacity="0.5">
      <line x1="404" y1="92" x2="404" y2="214"/><line x1="438" y1="92" x2="438" y2="214"/>
      <line x1="472" y1="92" x2="472" y2="214"/><line x1="506" y1="92" x2="506" y2="214"/>
      <line x1="540" y1="92" x2="540" y2="214"/><line x1="574" y1="92" x2="574" y2="214"/>
    </g>
    <rect x="392" y="214" width="198" height="30" fill="#241b12"/>
    <rect x="392" y="244" width="198" height="60" fill="#1d160f"/>
    <rect x="410" y="110" width="46" height="134" fill="#100d09"/>
    <path d="M456 110 l16 -6 l0 140 l-16 -6 z" fill="#3b2f22"/>
    <path d="M516 118 q26 -8 40 10 q8 46 -2 90 l-44 0 q-8 -50 6 -100 z" fill="#4a3743"/>
    <ellipse cx="536" cy="112" rx="4" ry="5" fill="#9b7a3f"/>
  </g>
  <path d="M392 304 L470 92 L512 92 L434 304 Z" fill="#f0e7ce" opacity="0.09"/>
  <path d="M540 304 L578 200 L590 200 L590 304 Z" fill="#f0e7ce" opacity="0.05"/>
  <g>
    <g fill="#ffd98a">
      <circle cx="380" cy="80" r="9"/><circle cx="426" cy="80" r="9"/><circle cx="472" cy="80" r="9"/>
      <circle cx="518" cy="80" r="9"/><circle cx="564" cy="80" r="9"/><circle cx="610" cy="80" r="9"/>
      <circle cx="380" cy="130" r="9"/><circle cx="380" cy="180" r="9"/><circle cx="380" cy="230" r="9"/>
      <circle cx="380" cy="280" r="9"/><circle cx="380" cy="320" r="9"/>
      <circle cx="610" cy="130" r="9"/><circle cx="610" cy="180" r="9"/><circle cx="610" cy="230" r="9"/>
      <circle cx="610" cy="280" r="9" class="fx-flicker" style="--d:2.35s"/><circle cx="610" cy="320" r="9"/>
      <circle cx="426" cy="320" r="9"/><circle cx="472" cy="320" r="9"/>
      <circle cx="518" cy="320" r="9"/><circle cx="564" cy="320" r="9"/>
    </g>
    <g fill="#fff6dd">
      <circle cx="380" cy="80" r="4.5"/><circle cx="426" cy="80" r="4.5"/><circle cx="472" cy="80" r="4.5"/>
      <circle cx="518" cy="80" r="4.5"/><circle cx="564" cy="80" r="4.5"/><circle cx="610" cy="80" r="4.5"/>
      <circle cx="380" cy="180" r="4.5"/><circle cx="380" cy="280" r="4.5"/>
      <circle cx="610" cy="180" r="4.5"/><circle cx="610" cy="280" r="4.5" class="fx-flicker" style="--d:2.35s"/>
      <circle cx="472" cy="320" r="4.5"/><circle cx="518" cy="320" r="4.5"/>
    </g>
    <g fill="url(#or-dress-bulb)">
      <circle cx="380" cy="80" r="30" class="fx-glow" style="--d:.1s"/><circle cx="472" cy="80" r="30" class="fx-glow" style="--d:1.4s"/><circle cx="564" cy="80" r="30" class="fx-glow" style="--d:2.7s"/>
      <circle cx="380" cy="180" r="30" class="fx-glow" style="--d:.8s"/><circle cx="610" cy="180" r="30" class="fx-glow" style="--d:2.2s"/>
      <circle cx="380" cy="280" r="30" class="fx-glow" style="--d:1.9s"/><circle cx="610" cy="280" r="30" class="fx-flicker" style="--d:2.35s"/>
      <circle cx="472" cy="320" r="30" class="fx-glow" style="--d:.5s"/><circle cx="518" cy="320" r="30" class="fx-glow" style="--d:3s"/>
    </g>
  </g>
  <!-- two hundred telegrams, tucked all round the frame -->
  <g fill="#f0e7ce">
    <path d="M340 96 l38 -10 l8 30 l-38 10 z"/><path d="M336 138 l36 -8 l6 28 l-36 8 z"/>
    <path d="M340 186 l36 -8 l6 26 l-36 8 z"/><path d="M334 236 l36 -8 l7 28 l-36 8 z"/>
    <path d="M612 100 l38 8 l-6 30 l-38 -8 z"/><path d="M614 148 l36 8 l-5 26 l-36 -8 z"/>
    <path d="M612 196 l36 8 l-6 28 l-36 -8 z"/><path d="M616 246 l34 8 l-5 26 l-34 -8 z"/>
    <path d="M394 46 l40 -6 l4 22 l-40 6 z"/><path d="M472 40 l40 4 l-3 22 l-40 -4 z"/>
    <path d="M548 46 l38 6 l-4 22 l-38 -6 z"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.4" opacity="0.85">
    <line x1="346" y1="104" x2="374" y2="97"/><line x1="348" y1="112" x2="376" y2="105"/>
    <line x1="342" y1="146" x2="368" y2="140"/><line x1="346" y1="194" x2="372" y2="188"/>
    <line x1="340" y1="244" x2="368" y2="238"/>
    <line x1="618" y1="110" x2="644" y2="116"/><line x1="620" y1="158" x2="644" y2="164"/>
    <line x1="618" y1="206" x2="644" y2="212"/><line x1="622" y1="256" x2="646" y2="262"/>
    <line x1="400" y1="54" x2="430" y2="50"/><line x1="478" y1="50" x2="506" y2="53"/>
    <line x1="554" y1="56" x2="580" y2="60"/>
  </g>
  <g fill="#a8352a" opacity="0.85">
    <rect x="356" y="90" width="12" height="7"/><rect x="620" y="192" width="12" height="7"/>
    <rect x="400" y="42" width="11" height="7"/>
  </g>
</g>

<!-- THE VANITY: greasepaint, roses going brown, the drawer of letters -->
<g>
  <rect x="330" y="336" width="392" height="18" rx="3" fill="#5c4327"/>
  <rect x="330" y="354" width="392" height="9" fill="#33271a"/>
  <rect x="700" y="363" width="14" height="106" fill="#3b2f22"/>
  <rect x="344" y="363" width="294" height="106" fill="#3b2f22"/>
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="484" y="374" width="142" height="40"/><rect x="484" y="422" width="142" height="40"/>
  </g>
  <g fill="#9b7a3f">
    <ellipse cx="555" cy="394" rx="15" ry="4"/><ellipse cx="555" cy="442" rx="15" ry="4"/>
  </g>
  <rect x="344" y="469" width="294" height="10" fill="#241b12"/>
  <!-- the drawer, pulled right out and left that way -->
  <g>
    <path d="M336 380 L474 380 L474 438 L336 438 Z" fill="#4a3524"/>
    <path d="M336 380 L474 380 L466 370 L344 370 Z" fill="#5c4327"/>
    <rect x="342" y="386" width="126" height="42" fill="#1b140d"/>
    <ellipse cx="405" cy="378" rx="16" ry="5" fill="#9b7a3f"/>
    <!-- greasepaint sticks, and beneath them the bundle of letters -->
    <g>
      <rect x="352" y="416" width="106" height="16" rx="4" fill="#e3d5ac"/>
      <rect x="358" y="404" width="94" height="14" rx="4" fill="#f0e7ce"/>
      <rect x="366" y="394" width="80" height="12" rx="4" fill="#e3d5ac"/>
      <g stroke="#8d7c62" stroke-width="1.4" opacity="0.8">
        <line x1="360" y1="424" x2="452" y2="424"/><line x1="364" y1="411" x2="446" y2="411"/>
      </g>
      <path d="M398 390 q14 -12 26 0 q-4 32 -6 46 q-14 8 -20 -2 q-4 -22 0 -44 z" fill="#7a5a6e" opacity="0.9"/>
      <path d="M400 392 q12 -10 22 0" fill="none" stroke="#a8352a" stroke-width="4"/>
      <path d="M406 434 q10 -6 16 2" fill="none" stroke="#a8352a" stroke-width="4"/>
    </g>
    <g fill="#5f6b4a">
      <rect x="348" y="392" width="9" height="30" rx="3"/>
    </g>
    <g fill="#a8352a">
      <rect x="462" y="392" width="9" height="30" rx="3"/>
    </g>
  </g>
  <!-- on the vanity top -->
  <g>
    <rect x="656" y="322" width="40" height="34" rx="5" fill="#5c4327"/>
    <ellipse cx="676" cy="322" rx="20" ry="6" fill="#7d5f34"/>
    <rect x="472" y="316" width="18" height="22" rx="3" fill="#a8352a"/>
    <rect x="494" y="320" width="16" height="18" rx="3" fill="#5f6b4a"/>
    <rect x="514" y="314" width="14" height="24" rx="3" fill="#1b2436"/>
    <ellipse cx="546" cy="330" rx="24" ry="8" fill="#e3d5ac"/>
    <ellipse cx="546" cy="326" rx="18" ry="6" fill="#f4ecd6"/>
    <g fill="#f0e7ce" opacity="0.9">
      <path d="M398 320 l52 -6 l3 18 l-52 8 z"/><path d="M406 312 l48 -6 l3 12 l-48 6 z"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.4" opacity="0.85">
      <line x1="406" y1="326" x2="444" y2="322"/><line x1="406" y1="332" x2="440" y2="328"/>
    </g>
  </g>
  <!-- roses going brown -->
  <g transform="translate(-42 0)">
    <path d="M700 336 l30 0 l-5 -46 l-20 0 z" fill="#8fa4c0" opacity="0.35"/>
    <path d="M704 300 l22 0 l-3 -14 l-16 0 z" fill="#5d1f18" opacity="0.5"/>
    <g stroke="#4d4a2c" stroke-width="3">
      <line x1="712" y1="294" x2="700" y2="248"/><line x1="716" y1="294" x2="722" y2="238"/>
      <line x1="720" y1="294" x2="742" y2="256"/><line x1="714" y1="294" x2="686" y2="262"/>
    </g>
    <g fill="#7a3a2c">
      <circle cx="699" cy="244" r="13"/><circle cx="723" cy="234" r="14"/><circle cx="744" cy="252" r="12"/>
      <circle cx="683" cy="258" r="11"/>
    </g>
    <g fill="#5a2a20">
      <circle cx="697" cy="242" r="7"/><circle cx="722" cy="232" r="7"/><circle cx="744" cy="251" r="6"/>
      <circle cx="683" cy="257" r="5"/>
    </g>
    <g fill="#4d4a2c">
      <path d="M690 272 q-16 4 -20 16 q16 2 22 -12 z"/><path d="M736 268 q16 4 20 16 q-16 2 -22 -12 z"/>
    </g>
    <g fill="#6b3a28" opacity="0.9">
      <ellipse cx="682" cy="336" rx="8" ry="3"/><ellipse cx="754" cy="338" rx="7" ry="3"/>
    </g>
  </g>
</g>

<!-- THE TRAVEL TRUNK, tray askew -->
<g transform="translate(62 0)">
  <ellipse cx="828" cy="546" rx="146" ry="20" fill="#0d0a07" opacity="0.55"/>
  <!-- the lid, thrown back -->
  <path d="M700 296 L960 268 L972 176 L712 204 Z" fill="#3b2f22"/>
  <path d="M712 288 L952 262 L962 190 L722 216 Z" fill="url(#or-dress-hide)"/>
  <g fill="none" stroke="#241b12" stroke-width="6">
    <path d="M756 284 L766 210"/><path d="M896 268 L906 196"/>
  </g>
  <g fill="#e3d5ac" opacity="0.6">
    <path d="M780 268 l60 -8 l3 20 l-60 8 z"/><path d="M848 258 l50 -6 l3 18 l-50 8 z"/>
  </g>
  <!-- the body of the trunk -->
  <path d="M694 300 L964 300 L950 540 L708 540 Z" fill="url(#or-dress-hide)"/>
  <path d="M694 300 L964 300 L962 318 L696 318 Z" fill="#7d5c36"/>
  <g fill="none" stroke="#241b12" stroke-width="9">
    <path d="M752 300 L746 540"/><path d="M906 300 L912 540"/>
  </g>
  <g fill="#9b7a3f">
    <rect x="736" y="356" width="30" height="16" rx="4"/><rect x="892" y="356" width="30" height="16" rx="4"/>
    <rect x="736" y="470" width="30" height="16" rx="4"/><rect x="892" y="470" width="30" height="16" rx="4"/>
  </g>
  <!-- the tray, lifted and set down crooked -->
  <g transform="rotate(-7 828 344)">
    <path d="M710 320 L946 320 L940 372 L716 372 Z" fill="#4a3524"/>
    <path d="M710 320 L946 320 L944 332 L712 332 Z" fill="#6b4c2c"/>
    <g fill="none" stroke="#33271a" stroke-width="3">
      <line x1="790" y1="322" x2="788" y2="370"/><line x1="866" y1="322" x2="868" y2="370"/>
    </g>
    <g fill="#e3d5ac">
      <path d="M722 336 l52 -4 l3 30 l-52 4 z"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.5" opacity="0.85">
      <line x1="728" y1="342" x2="768" y2="339"/><line x1="728" y1="349" x2="770" y2="346"/>
      <line x1="728" y1="356" x2="762" y2="353"/>
    </g>
    <rect x="800" y="336" width="52" height="30" rx="3" fill="#cbb98f"/>
    <g stroke="#8d7c62" stroke-width="1.5" opacity="0.8">
      <line x1="806" y1="344" x2="846" y2="344"/><line x1="806" y1="352" x2="842" y2="352"/>
    </g>
    <rect x="806" y="330" width="42" height="7" fill="#a8352a" opacity="0.8"/>
    <path d="M878 338 q26 -8 44 6 q-20 22 -46 12 z" fill="#7a5a6e"/>
  </g>
  <!-- costumes, hauled up and dropped back -->
  <path d="M716 396 q52 -22 106 4 q54 26 118 -2 l-4 44 q-58 26 -114 0 q-56 -26 -104 -4 z" fill="url(#or-dress-silk)"/>
  <g fill="none" stroke="#33262f" stroke-width="3" opacity="0.8">
    <path d="M726 404 q50 -18 98 6"/><path d="M842 414 q48 20 92 -2"/>
  </g>
  <path d="M726 446 q54 -20 108 6 q52 24 108 -4 l-6 62 q-52 26 -104 2 q-52 -24 -102 -4 z" fill="#5f6b4a"/>
  <g fill="none" stroke="#454e36" stroke-width="3" opacity="0.85">
    <path d="M736 460 q50 -16 96 8"/><path d="M846 470 q46 18 88 -2"/>
  </g>
  <path d="M760 508 q40 -14 80 4 q-38 24 -84 8 z" fill="#e3d5ac" opacity="0.55"/>
  <path d="M876 512 q30 -8 52 2 l-2 20 q-30 8 -54 -4 z" fill="#a8352a" opacity="0.55"/>
</g>

<!-- foreground: the vanity stool, shoved aside -->
<g transform="rotate(6 470 560)">
  <ellipse cx="470" cy="540" rx="72" ry="22" fill="#5d1f18"/>
  <ellipse cx="470" cy="534" rx="66" ry="18" fill="#7d2d24"/>
  <path d="M410 546 q60 20 122 -2 l-4 16 q-58 22 -114 0 z" fill="#3f1613"/>
  <g fill="#33271a">
    <path d="M420 556 l12 0 l14 62 l-14 0 z"/><path d="M508 556 l12 0 l-12 62 l-14 0 z"/>
    <path d="M464 562 l12 0 l2 58 l-14 0 z"/>
  </g>
</g>

<!-- foreground: a costume on a rail, framing the shot -->
<g>
  <rect x="0" y="486" width="70" height="10" rx="4" fill="#5b564b"/>
  <path d="M-20 496 q56 -18 96 10 q22 60 6 114 l-108 0 z" fill="#4a3743"/>
  <g fill="none" stroke="#332531" stroke-width="4" opacity="0.9">
    <path d="M-6 508 q10 60 6 112"/><path d="M28 502 q12 60 8 118"/><path d="M62 512 q10 54 6 108"/>
  </g>
  <path d="M-20 496 q56 -18 96 10 l-4 12 q-46 -26 -94 -8 z" fill="#8f6f80" opacity="0.5"/>
</g>

<rect width="1000" height="620" fill="url(#or-dress-vig)"/>
`,
  },

  greenroom: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_teaurn: { x: 44, y: 22 },
      h_knitting: { x: 60, y: 85 },
    },
    svg: `
<defs>
  <linearGradient id="or-green-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#33361f"/><stop offset="1" stop-color="#181a10"/>
  </linearGradient>
  <linearGradient id="or-green-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3524"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="or-green-sofa" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6b2a24"/><stop offset="1" stop-color="#331311"/>
  </linearGradient>
  <linearGradient id="or-green-sofa2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5f6b4a"/><stop offset="1" stop-color="#2b3122"/>
  </linearGradient>
  <linearGradient id="or-green-nickel" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5b564b"/><stop offset="0.35" stop-color="#c8c2ad"/>
    <stop offset="0.7" stop-color="#8e8e88"/><stop offset="1" stop-color="#4a453c"/>
  </linearGradient>
  <radialGradient id="or-green-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-green-glow" cx="0.6" cy="0.26" r="0.72">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.32"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-green-vig" cx="0.5" cy="0.46" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-green-wall)"/>

<!-- panelling, rail, floor -->
<rect x="0" y="0" width="1000" height="22" fill="#241b12"/>
<rect x="0" y="22" width="1000" height="7" fill="#4a3524"/>
<rect x="0" y="338" width="1000" height="100" fill="#241b12"/>
<rect x="0" y="338" width="1000" height="7" fill="#4a3524"/>
<g fill="none" stroke="#33271a" stroke-width="3">
  <rect x="24" y="356" width="94" height="62"/><rect x="140" y="356" width="94" height="62"/>
  <rect x="256" y="356" width="94" height="62"/><rect x="372" y="356" width="94" height="62"/>
  <rect x="488" y="356" width="94" height="62"/><rect x="604" y="356" width="94" height="62"/>
  <rect x="720" y="356" width="94" height="62"/><rect x="836" y="356" width="94" height="62"/>
</g>
<rect x="0" y="430" width="1000" height="10" fill="#1b140d"/>
<rect x="0" y="440" width="1000" height="180" fill="#1d160f"/>
<g stroke="#2a2016" stroke-width="2">
  <line x1="0" y1="470" x2="1000" y2="470"/><line x1="0" y1="512" x2="1000" y2="512"/>
  <line x1="0" y1="562" x2="1000" y2="562"/>
</g>
<path d="M120 620 L880 620 L760 470 L240 470 Z" fill="#4a2c1c"/>
<path d="M180 620 L820 620 L720 486 L280 486 Z" fill="none" stroke="#6b2a24" stroke-width="10" opacity="0.9"/>
<g fill="#6b5326" opacity="0.4">
  <path d="M360 566 l24 -15 l24 15 l-24 15 z"/><path d="M480 566 l24 -15 l24 15 l-24 15 z"/>
  <path d="M600 566 l24 -15 l24 15 l-24 15 z"/><path d="M300 608 l22 -14 l22 14 l-22 14 z"/>
  <path d="M660 608 l22 -14 l22 14 l-22 14 z"/>
</g>
<rect width="1000" height="620" fill="url(#or-green-glow)"/>

<!-- bay one: the company's coats and costumes, on a rail -->
<g>
  <rect x="18" y="150" width="278" height="11" rx="4" fill="#5c4327"/>
  <g fill="#3a352d">
    <rect x="50" y="161" width="8" height="16" rx="3"/><rect x="118" y="161" width="8" height="16" rx="3"/>
    <rect x="188" y="161" width="8" height="16" rx="3"/><rect x="252" y="161" width="8" height="16" rx="3"/>
  </g>
  <path d="M54 172 q34 -8 52 22 q16 62 6 122 l-96 0 q-10 -66 8 -122 q12 -26 30 -22 z" fill="#2b2537"/>
  <g fill="none" stroke="#1e1a28" stroke-width="4" opacity="0.9">
    <path d="M34 200 q-8 60 -2 116"/><path d="M92 198 q10 60 4 112"/>
  </g>
  <path d="M54 172 q34 -8 52 22 l-8 10 q-20 -24 -44 -18 z" fill="#3a3348"/>
  <path d="M124 174 q30 -8 46 20 q14 56 4 110 l-84 0 q-8 -58 6 -110 q10 -24 28 -20 z" fill="#5d1f18"/>
  <g fill="none" stroke="#3d130f" stroke-width="4" opacity="0.9">
    <path d="M110 202 q-6 54 0 102"/><path d="M156 200 q8 54 2 104"/>
  </g>
  <path d="M194 176 q28 -6 42 18 q12 50 4 100 l-78 0 q-8 -52 6 -100 q10 -22 26 -18 z" fill="#5f6b4a"/>
  <g fill="none" stroke="#3c452e" stroke-width="4" opacity="0.9">
    <path d="M182 200 q-6 48 0 92"/><path d="M222 200 q6 48 0 92"/>
  </g>
  <ellipse cx="256" cy="196" rx="30" ry="10" fill="#241b12"/>
  <path d="M234 194 q22 -30 44 0 z" fill="#33271a"/>
  <path d="M234 190 q22 -8 44 0" fill="none" stroke="#5d1f18" stroke-width="5"/>
</g>

<!-- bay three: framed production photographs, and a clock -->
<g>
  <g>
    <rect x="662" y="96" width="96" height="120" fill="#5c4327"/>
    <rect x="670" y="104" width="80" height="104" fill="#241b12"/>
    <rect x="670" y="104" width="80" height="104" fill="#4a4a3c" opacity="0.6"/>
    <ellipse cx="694" cy="146" rx="14" ry="17" fill="#b3a184" opacity="0.55"/>
    <path d="M676 208 q18 -44 40 -6 q12 20 30 6 z" fill="#1d1b16" opacity="0.8"/>
    <ellipse cx="726" cy="152" rx="12" ry="15" fill="#b3a184" opacity="0.45"/>
  </g>
  <g>
    <rect x="774" y="72" width="86" height="108" fill="#5c4327"/>
    <rect x="782" y="80" width="70" height="92" fill="#3f4038"/>
    <path d="M782 172 q22 -56 40 -12 q12 28 30 12 z" fill="#1d1b16" opacity="0.75"/>
    <ellipse cx="812" cy="112" rx="13" ry="16" fill="#b3a184" opacity="0.5"/>
  </g>
  <g>
    <rect x="782" y="200" width="90" height="70" fill="#5c4327"/>
    <rect x="790" y="208" width="74" height="54" fill="#3a3a32"/>
    <g fill="#b3a184" opacity="0.45">
      <ellipse cx="806" cy="230" rx="9" ry="11"/><ellipse cx="828" cy="228" rx="9" ry="11"/><ellipse cx="850" cy="232" rx="9" ry="11"/>
    </g>
    <path d="M790 262 q36 -22 74 0 z" fill="#1d1b16" opacity="0.7"/>
  </g>
  <g>
    <circle cx="920" cy="140" r="42" fill="#5c4327"/>
    <circle cx="920" cy="140" r="33" fill="#e3d5ac"/>
    <g stroke="#4a3f31" stroke-width="3">
      <line x1="920" y1="112" x2="920" y2="118"/><line x1="948" y1="140" x2="942" y2="140"/>
      <line x1="920" y1="168" x2="920" y2="162"/><line x1="892" y1="140" x2="898" y2="140"/>
    </g>
    <g stroke="#241b12" stroke-width="4" stroke-linecap="round">
      <line x1="920" y1="140" x2="920" y2="120"/><line x1="920" y1="140" x2="936" y2="150"/>
    </g>
    <circle cx="920" cy="140" r="4" fill="#241b12"/>
  </g>
</g>

<!-- THE NOTICE BOARD -->
<g>
  <rect x="316" y="52" width="252" height="178" rx="4" fill="#5c4327"/>
  <rect x="326" y="62" width="232" height="158" fill="#6b5a3a"/>
  <rect x="326" y="62" width="232" height="158" fill="#241b12" opacity="0.3"/>
  <!-- the closing notice, a month old and gone soft -->
  <g transform="rotate(-2 386 126)">
    <rect x="336" y="74" width="100" height="112" fill="#f0e7ce"/>
    <rect x="336" y="74" width="100" height="15" fill="#e3d5ac"/>
    <g stroke="#4a3f31" stroke-width="2.6" opacity="0.9">
      <line x1="346" y1="102" x2="422" y2="102"/><line x1="346" y1="113" x2="412" y2="113"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.6" opacity="0.85">
      <line x1="346" y1="128" x2="426" y2="128"/><line x1="346" y1="136" x2="420" y2="136"/>
      <line x1="346" y1="144" x2="426" y2="144"/><line x1="346" y1="152" x2="406" y2="152"/>
      <line x1="346" y1="160" x2="424" y2="160"/><line x1="346" y1="168" x2="396" y2="168"/>
    </g>
    <rect x="364" y="176" width="44" height="6" fill="#5d1f18" opacity="0.8"/>
    <circle cx="386" cy="80" r="6" fill="#a8352a"/>
  </g>
  <!-- yesterday's addition, in the director's hand -->
  <g transform="rotate(4 500 128)">
    <rect x="448" y="80" width="102" height="96" fill="#e3d5ac"/>
    <g stroke="#1b2436" stroke-width="3" opacity="0.9" stroke-linecap="round">
      <path d="M458 102 q16 -8 28 2 q14 8 28 -2 q12 -8 26 0"/>
      <path d="M458 120 q16 -8 28 2 q14 8 24 -2"/>
      <path d="M458 138 q18 -8 32 2 q16 8 30 -2"/>
      <path d="M458 156 q14 -8 24 2"/>
    </g>
    <circle cx="498" cy="86" r="6" fill="#9b7a3f"/>
  </g>
  <!-- odds and ends pinned around -->
  <g>
    <rect x="340" y="192" width="68" height="24" fill="#f0e7ce" opacity="0.9"/>
    <g stroke="#8d7c62" stroke-width="1.5"><line x1="346" y1="200" x2="400" y2="200"/><line x1="346" y1="208" x2="390" y2="208"/></g>
    <rect x="422" y="190" width="50" height="28" fill="#cbb98f" opacity="0.9"/>
    <g stroke="#8d7c62" stroke-width="1.5"><line x1="428" y1="200" x2="464" y2="200"/><line x1="428" y1="208" x2="458" y2="208"/></g>
    <rect x="486" y="192" width="58" height="26" fill="#e3d5ac" opacity="0.85"/>
    <g stroke="#8d7c62" stroke-width="1.5"><line x1="492" y1="202" x2="536" y2="202"/><line x1="492" y1="210" x2="528" y2="210"/></g>
    <circle cx="374" cy="196" r="5" fill="#5f6b4a"/><circle cx="447" cy="194" r="5" fill="#a8352a"/>
    <circle cx="515" cy="196" r="5" fill="#1b2436"/>
  </g>
</g>

<!-- the hanging lamp: the only light that matters -->
<g class="fx-sway" style="--d:2.4s;transform-origin:top center">
  <line x1="628" y1="0" x2="628" y2="66" stroke="#3a2d1e" stroke-width="4"/>
  <path d="M572 114 q56 -50 112 0 z" fill="#5f6b4a"/>
  <path d="M572 114 q56 -50 112 0 l0 6 q-56 -44 -112 0 z" fill="#7d8a62"/>
  <ellipse cx="628" cy="114" rx="56" ry="9" fill="#241b12"/>
  <ellipse cx="628" cy="120" rx="18" ry="8" fill="#ffd98a" class="fx-glow" style="--d:.7s"/>
  <ellipse cx="628" cy="150" rx="126" ry="48" fill="url(#or-green-lamp)" class="fx-glow" style="--d:1.8s"/>
</g>

<!-- the sideboard and the tea urn -->
<g>
  <rect x="340" y="296" width="216" height="15" rx="3" fill="#5c4327"/>
  <rect x="352" y="311" width="192" height="122" fill="#3b2f22"/>
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="364" y="322" width="78" height="44"/><rect x="454" y="322" width="78" height="44"/>
    <rect x="364" y="376" width="78" height="44"/><rect x="454" y="376" width="78" height="44"/>
  </g>
  <g fill="#9b7a3f">
    <ellipse cx="403" cy="344" rx="11" ry="4"/><ellipse cx="493" cy="344" rx="11" ry="4"/>
    <ellipse cx="403" cy="398" rx="11" ry="4"/><ellipse cx="493" cy="398" rx="11" ry="4"/>
  </g>
  <rect x="352" y="433" width="192" height="9" fill="#241b12"/>
  <!-- the urn -->
  <g>
    <path d="M414 296 q-12 -14 -12 -34 q0 -30 46 -30 q46 0 46 30 q0 20 -12 34 z" fill="url(#or-green-nickel)"/>
    <ellipse cx="448" cy="232" rx="46" ry="10" fill="#a8a294"/>
    <ellipse cx="448" cy="229" rx="22" ry="6" fill="#5b564b"/>
    <rect x="441" y="216" width="14" height="14" rx="5" fill="#3a352d"/>
    <path d="M426 254 q22 -8 44 0" fill="none" stroke="#f0e7ce" stroke-width="3" opacity="0.35"/>
    <rect x="442" y="270" width="12" height="24" rx="3" fill="#4a453c"/>
    <path d="M442 278 l-20 0 l0 7 l20 0 z" fill="#5b564b"/>
    <ellipse cx="420" cy="282" rx="5" ry="7" fill="#3a352d"/>
    <path d="M494 248 q24 8 20 28 q-4 14 -18 16 l0 -9 q9 -4 9 -13 q0 -11 -11 -14 z" fill="#8e8e88"/>
    <ellipse cx="448" cy="296" rx="46" ry="7" fill="#241b12" opacity="0.5"/>
  </g>
  <!-- cups, one used -->
  <g fill="#f4ecd6">
    <path d="M512 300 l24 0 l-3 16 l-18 0 z"/><ellipse cx="524" cy="300" rx="12" ry="4"/>
    <path d="M542 302 l22 0 l-3 14 l-16 0 z"/><ellipse cx="553" cy="302" rx="11" ry="4"/>
  </g>
  <ellipse cx="524" cy="300" rx="8" ry="2.5" fill="#4a3524"/>
  <g fill="#e3d5ac">
    <ellipse cx="368" cy="304" rx="24" ry="6"/><ellipse cx="368" cy="298" rx="20" ry="5"/>
  </g>
</g>

<!-- ROLAND PIERCE, still in costume, staring at his own hands -->
<g>
  <ellipse cx="196" cy="562" rx="176" ry="24" fill="#0d0a07" opacity="0.5"/>
  <!-- the sofa, sagging -->
  <path d="M30 556 L362 556 L362 372 q0 -30 -30 -30 L60 342 q-30 0 -30 30 Z" fill="url(#or-green-sofa)"/>
  <path d="M52 470 q144 -26 288 0 l0 -84 q-4 -22 -26 -22 L78 364 q-22 0 -26 22 z" fill="#7d332c"/>
  <g fill="none" stroke="#4a1c18" stroke-width="3" opacity="0.85">
    <path d="M148 366 q6 50 0 100"/><path d="M244 366 q-6 50 0 100"/>
  </g>
  <path d="M40 512 q152 -30 312 0 l0 44 l-312 0 z" fill="#5d2320"/>
  <path d="M46 508 q150 -28 300 0" fill="none" stroke="#8a423a" stroke-width="4" opacity="0.7"/>
  <rect x="34" y="556" width="330" height="16" rx="4" fill="#331311"/>
  <g fill="#241b12">
    <rect x="46" y="572" width="18" height="26"/><rect x="332" y="572" width="18" height="26"/>
  </g>
  <!-- the man -->
  <g class="fx-breathe" style="--d:.4s">
    <path d="M150 520 q52 -14 104 0 l-6 -94 q-8 -60 -46 -62 q-38 2 -46 62 z" fill="#2b2537"/>
    <path d="M166 440 q36 -26 72 0 l6 82 l-84 0 z" fill="#3a3348"/>
    <!-- period shirt, laced, and the stain nobody will get out -->
    <path d="M186 432 l30 0 l-4 60 l-22 0 z" fill="#ded3b8"/>
    <g stroke="#8d7c62" stroke-width="1.6">
      <line x1="192" y1="446" x2="210" y2="446"/><line x1="192" y1="458" x2="210" y2="458"/>
      <line x1="192" y1="470" x2="210" y2="470"/>
    </g>
    <path d="M206 456 q22 6 26 30 q-16 12 -30 -4 z" fill="#5d1f18"/>
    <path d="M212 468 q12 6 14 18" fill="none" stroke="#3d130f" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="202" cy="392" rx="24" ry="27" fill="#b3a184"/>
    <path d="M180 382 q22 -26 44 0 q5 -29 -22 -29 q-27 0 -22 29 z" fill="#3f3223"/>
    <path d="M178 382 q-4 11 1 19 l5 -5 q-3 -8 -1 -14 z" fill="#3f3223"/>
    <path d="M226 382 q4 11 -1 19 l-5 -5 q3 -8 1 -14 z" fill="#3f3223"/>
    <path d="M186 366 q18 -10 34 -2" fill="none" stroke="#5b4831" stroke-width="4" opacity="0.7"/>
    <g stroke="#4a3f31" stroke-width="2.3" stroke-linecap="round">
      <line x1="187" y1="390" x2="197" y2="392"/><line x1="207" y1="392" x2="217" y2="390"/>
    </g>
    <line x1="194" y1="410" x2="210" y2="410" stroke="#6b5a45" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M186 372 q16 -8 32 0" fill="none" stroke="#2f2517" stroke-width="3" opacity="0.6"/>
    <!-- both hands held out in front of him, being looked at -->
    <path d="M156 452 q-16 30 -6 62 l14 -4 q-8 -26 4 -50 z" fill="#2b2537"/>
    <path d="M248 452 q16 30 6 62 l-14 -4 q8 -26 -4 -50 z" fill="#2b2537"/>
    <ellipse cx="172" cy="518" rx="18" ry="11" fill="#b3a184"/>
    <ellipse cx="238" cy="518" rx="18" ry="11" fill="#a6957a"/>
    <g stroke="#8d7c62" stroke-width="1.5" stroke-linecap="round">
      <line x1="160" y1="516" x2="180" y2="522"/><line x1="162" y1="510" x2="182" y2="516"/>
      <line x1="228" y1="516" x2="248" y2="522"/><line x1="230" y1="510" x2="250" y2="516"/>
    </g>
    <path d="M228 512 q10 4 14 10" fill="none" stroke="#5d1f18" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <path d="M162 528 q40 22 84 0" fill="none" stroke="#241f2e" stroke-width="4"/>
  </g>
</g>

<!-- ADELE WINTERS, her stage makeup cried into a Greek mask -->
<g>
  <ellipse cx="812" cy="562" rx="160" ry="24" fill="#0d0a07" opacity="0.5"/>
  <path d="M664 556 L964 556 L964 382 q0 -28 -28 -28 L692 354 q-28 0 -28 28 Z" fill="url(#or-green-sofa2)"/>
  <path d="M684 476 q128 -24 260 0 l0 -76 q-4 -20 -24 -20 L708 376 q-20 0 -24 20 z" fill="#6f7c55"/>
  <g fill="none" stroke="#3c452e" stroke-width="3" opacity="0.85">
    <path d="M766 378 q6 46 0 92"/><path d="M856 378 q-6 46 0 92"/>
  </g>
  <path d="M672 516 q140 -28 284 0 l0 40 l-284 0 z" fill="#4b5539"/>
  <rect x="668" y="556" width="298" height="16" rx="4" fill="#2b3122"/>
  <g fill="#241b12">
    <rect x="680" y="572" width="18" height="26"/><rect x="936" y="572" width="18" height="26"/>
  </g>
  <g class="fx-breathe" style="--d:2.6s">
    <path d="M778 522 q48 -14 96 0 l-4 -86 q-8 -56 -44 -58 q-36 2 -44 58 z" fill="#4a3743"/>
    <path d="M792 448 q34 -24 68 0 l4 74 l-76 0 z" fill="#5c4655"/>
    <path d="M810 440 l30 0 l-4 40 l-22 0 z" fill="#ded3b8"/>
    <path d="M814 444 l22 0 l-2 12 l-18 0 z" fill="#8f6f80"/>
    <ellipse cx="826" cy="402" rx="23" ry="26" fill="#c6b699"/>
    <path d="M804 396 q22 -28 44 0 q6 -31 -22 -31 q-28 0 -22 31 z" fill="#6b4a2e"/>
    <path d="M802 396 q-6 15 0 24 l5 -5 q-4 -9 -1 -18 z" fill="#6b4a2e"/>
    <path d="M850 396 q6 15 0 24 l-5 -5 q4 -9 1 -18 z" fill="#6b4a2e"/>
    <path d="M810 380 q16 -10 32 -2" fill="none" stroke="#8a6440" stroke-width="4" opacity="0.65"/>
    <!-- ruined greasepaint: two dark runs, and a mouth pulled down -->
    <g stroke="#4a3f31" stroke-width="2.3" stroke-linecap="round">
      <line x1="811" y1="399" x2="821" y2="399"/><line x1="831" y1="399" x2="841" y2="399"/>
    </g>
    <g stroke="#3a3038" stroke-width="5" stroke-linecap="round" opacity="0.85">
      <path d="M814 404 q-4 16 -2 26"/><path d="M838 404 q4 16 2 26"/>
    </g>
    <g stroke="#3a3038" stroke-width="3" stroke-linecap="round" opacity="0.5">
      <path d="M820 406 q-3 14 -1 22"/><path d="M832 406 q3 14 1 22"/>
    </g>
    <path d="M818 424 q8 -6 16 0" fill="none" stroke="#6b3a3a" stroke-width="3" stroke-linecap="round"/>
    <!-- head bowed into a handkerchief -->
    <path d="M786 462 q-14 26 -6 56 l14 -4 q-8 -24 4 -44 z" fill="#4a3743"/>
    <path d="M866 462 q14 26 6 56 l-14 -4 q8 -24 -4 -44 z" fill="#4a3743"/>
    <ellipse cx="800" cy="470" rx="16" ry="10" fill="#c6b699"/>
    <ellipse cx="856" cy="518" rx="16" ry="10" fill="#b8a78c"/>
    <path d="M786 456 q22 -14 40 -2 q-14 20 -40 12 z" fill="#f0e7ce"/>
    <path d="M792 458 q16 -8 28 -2" fill="none" stroke="#cbb98f" stroke-width="2"/>
    <g stroke="#8d7c62" stroke-width="1.5" stroke-linecap="round">
      <line x1="846" y1="516" x2="866" y2="522"/><line x1="848" y1="510" x2="868" y2="516"/>
    </g>
    <path d="M792 528 q34 20 74 0" fill="none" stroke="#3c2f38" stroke-width="4"/>
  </g>
</g>

<!-- ADELE'S KNITTING BAG, at the foot of the sofa -->
<g transform="translate(-104 16)">
  <ellipse cx="690" cy="562" rx="76" ry="16" fill="#0d0a07" opacity="0.6"/>
  <path d="M636 500 q54 -22 110 0 l-10 62 q-46 16 -92 0 z" fill="#7a5a6e"/>
  <path d="M636 500 q54 -22 110 0 l-2 12 q-52 -20 -106 0 z" fill="#9b7488"/>
  <g fill="none" stroke="#57404e" stroke-width="3" opacity="0.85">
    <path d="M646 516 q44 -14 88 0"/><path d="M644 534 q46 -14 90 0"/>
  </g>
  <path d="M660 498 q30 -34 62 0" fill="none" stroke="#57404e" stroke-width="7"/>
  <!-- wool and needles -->
  <circle cx="672" cy="486" r="24" fill="#a8352a"/>
  <g fill="none" stroke="#7d241c" stroke-width="2.5" opacity="0.9">
    <path d="M652 480 q22 14 40 -4"/><path d="M654 494 q22 -14 38 6"/><path d="M660 470 q10 22 4 40"/>
  </g>
  <g stroke="#cbb98f" stroke-width="4" stroke-linecap="round">
    <line x1="656" y1="500" x2="702" y2="452"/><line x1="666" y1="502" x2="714" y2="456"/>
  </g>
  <g fill="#e3d5ac"><circle cx="704" cy="450" r="5"/><circle cx="716" cy="454" r="5"/></g>
  <path d="M688 498 q30 -6 42 -22" fill="none" stroke="#a8352a" stroke-width="3"/>
  <!-- the dog-eared script, and a telegram folded into it -->
  <g transform="rotate(9 762 520)">
    <rect x="716" y="490" width="94" height="62" fill="#e3d5ac"/>
    <rect x="716" y="490" width="94" height="10" fill="#cbb98f"/>
    <path d="M796 490 l14 0 l0 14 z" fill="#b6a67f"/>
    <g stroke="#8d7c62" stroke-width="1.5" opacity="0.9">
      <line x1="726" y1="510" x2="782" y2="510"/><line x1="726" y1="518" x2="796" y2="518"/>
      <line x1="726" y1="526" x2="774" y2="526"/><line x1="726" y1="534" x2="792" y2="534"/>
      <line x1="726" y1="542" x2="766" y2="542"/>
    </g>
    <g stroke="#1b2436" stroke-width="2" opacity="0.85">
      <line x1="790" y1="524" x2="806" y2="524"/><line x1="786" y1="532" x2="806" y2="532"/>
    </g>
  </g>
  <g transform="rotate(-6 736 470)">
    <rect x="700" y="452" width="72" height="34" fill="#f0e7ce"/>
    <rect x="700" y="452" width="72" height="9" fill="#a8352a" opacity="0.85"/>
    <g stroke="#4a3f31" stroke-width="1.8" opacity="0.9">
      <line x1="708" y1="468" x2="762" y2="468"/><line x1="708" y1="475" x2="754" y2="475"/>
      <line x1="708" y1="481" x2="748" y2="481"/>
    </g>
  </g>
</g>

<!-- foreground: the low table, a cold cup, an ashtray -->
<g transform="translate(-160 0)">
  <path d="M368 566 L640 566 L664 620 L344 620 Z" fill="#4a3524"/>
  <path d="M368 566 L640 566 L642 576 L366 576 Z" fill="#5c4327"/>
  <g fill="#f4ecd6">
    <path d="M420 578 l30 0 l-4 20 l-22 0 z"/><ellipse cx="435" cy="578" rx="15" ry="5"/>
  </g>
  <ellipse cx="435" cy="578" rx="10" ry="3" fill="#3b2f22"/>
  <ellipse cx="520" cy="588" rx="30" ry="10" fill="#3a352d"/>
  <ellipse cx="520" cy="586" rx="22" ry="6" fill="#241b12"/>
  <g fill="#cbb98f">
    <rect x="508" y="580" width="20" height="6" rx="3"/><rect x="524" y="586" width="18" height="5" rx="2"/>
  </g>
  <g fill="#e3d5ac" opacity="0.85">
    <path d="M566 576 l50 -4 l3 16 l-50 6 z"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#or-green-vig)"/>
`,
  },

  office: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_deskdrawer: { x: 24, y: 79 },
      h_phonepad: { x: 66, y: 75 },
    },
    svg: `
<defs>
  <linearGradient id="or-off-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a2c1f"/><stop offset="1" stop-color="#1a130d"/>
  </linearGradient>
  <linearGradient id="or-off-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3524"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <linearGradient id="or-off-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b2436"/><stop offset="1" stop-color="#0d1119"/>
  </linearGradient>
  <linearGradient id="or-off-leather" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5a4128"/><stop offset="1" stop-color="#2b1f14"/>
  </linearGradient>
  <linearGradient id="or-off-rye" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c98a35"/><stop offset="1" stop-color="#8a5620"/>
  </linearGradient>
  <radialGradient id="or-off-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-off-glow" cx="0.36" cy="0.56" r="0.7">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-off-vig" cx="0.48" cy="0.48" r="0.76">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-off-wall)"/>

<!-- cornice, picture rail, wainscot, floor -->
<rect x="0" y="0" width="1000" height="22" fill="#241b12"/>
<rect x="0" y="22" width="1000" height="7" fill="#4a3524"/>
<rect x="0" y="66" width="1000" height="5" fill="#33271a"/>
<rect x="0" y="384" width="1000" height="96" fill="#241b12"/>
<rect x="0" y="384" width="1000" height="6" fill="#4a3524"/>
<g fill="none" stroke="#33271a" stroke-width="3">
  <rect x="20" y="400" width="90" height="60"/><rect x="130" y="400" width="90" height="60"/>
  <rect x="240" y="400" width="90" height="60"/><rect x="350" y="400" width="90" height="60"/>
  <rect x="460" y="400" width="90" height="60"/><rect x="570" y="400" width="90" height="60"/>
  <rect x="680" y="400" width="90" height="60"/><rect x="790" y="400" width="90" height="60"/>
  <rect x="900" y="400" width="86" height="60"/>
</g>
<rect x="0" y="472" width="1000" height="10" fill="#1b140d"/>
<rect x="0" y="482" width="1000" height="138" fill="#1d160f"/>
<g stroke="#2a2016" stroke-width="2">
  <line x1="0" y1="512" x2="1000" y2="512"/><line x1="0" y1="552" x2="1000" y2="552"/>
  <line x1="0" y1="596" x2="1000" y2="596"/>
</g>
<rect width="1000" height="620" fill="url(#or-off-glow)" class="fx-glow" style="--d:2.6s"/>

<!-- posters of past triumphs: no letters, only ink and colour -->
<g>
  <rect x="34" y="86" width="150" height="212" fill="#5c4327"/>
  <rect x="42" y="94" width="134" height="196" fill="#e3d5ac"/>
  <rect x="42" y="94" width="134" height="52" fill="#6b2a24"/>
  <g stroke="#f0e7ce" stroke-width="5" opacity="0.8">
    <line x1="56" y1="112" x2="162" y2="112"/><line x1="70" y1="128" x2="148" y2="128"/>
  </g>
  <path d="M56 262 q52 -78 104 0 z" fill="#5f6b4a"/>
  <ellipse cx="108" cy="196" rx="26" ry="30" fill="#b3a184"/>
  <path d="M84 194 q24 -30 48 0 q4 -32 -24 -32 q-28 0 -24 32 z" fill="#3f3223"/>
  <g stroke="#5c4327" stroke-width="3" opacity="0.8">
    <line x1="56" y1="272" x2="160" y2="272"/><line x1="66" y1="282" x2="150" y2="282"/>
  </g>
</g>
<g>
  <rect x="206" y="112" width="132" height="186" fill="#5c4327"/>
  <rect x="214" y="120" width="116" height="170" fill="#cbb98f"/>
  <path d="M214 290 L214 216 L246 216 L246 190 L280 190 L280 220 L312 220 L312 200 L330 200 L330 290 Z" fill="#1b2436"/>
  <circle cx="290" cy="158" r="24" fill="#d9a441" opacity="0.75"/>
  <g stroke="#5d1f18" stroke-width="5" opacity="0.8">
    <line x1="226" y1="136" x2="318" y2="136"/><line x1="240" y1="150" x2="304" y2="150"/>
  </g>
  <g stroke="#8d7c62" stroke-width="2.5" opacity="0.75">
    <line x1="226" y1="272" x2="318" y2="272"/><line x1="236" y1="282" x2="308" y2="282"/>
  </g>
</g>
<g transform="rotate(-3 420 200)">
  <rect x="358" y="126" width="126" height="164" fill="#5c4327"/>
  <rect x="366" y="134" width="110" height="148" fill="#f0e7ce"/>
  <path d="M366 282 q56 -96 110 0 z" fill="#7a5a6e"/>
  <g fill="#a8352a" opacity="0.85">
    <circle cx="398" cy="176" r="16"/><circle cx="444" cy="172" r="16"/>
  </g>
  <g stroke="#4a3f31" stroke-width="4" opacity="0.8">
    <line x1="378" y1="146" x2="464" y2="146"/><line x1="392" y1="158" x2="450" y2="158"/>
  </g>
  <g stroke="#8d7c62" stroke-width="2.4" opacity="0.7">
    <line x1="378" y1="256" x2="464" y2="256"/><line x1="386" y1="266" x2="456" y2="266"/>
  </g>
</g>

<!-- the window over the box office: Bay City at night -->
<g>
  <rect x="676" y="72" width="252" height="232" rx="4" fill="url(#or-off-night)" stroke="#3a2d1e" stroke-width="9"/>
  <g stroke="#3a2d1e" stroke-width="6">
    <line x1="802" y1="72" x2="802" y2="304"/><line x1="676" y1="188" x2="928" y2="188"/>
  </g>
  <path d="M676 304 L676 254 L712 254 L712 226 L748 226 L748 262 L788 262 L788 236 L826 236 L826 268 L866 268 L866 242 L900 242 L900 304 Z" fill="#131a29"/>
  <g fill="#d9a441" opacity="0.6">
    <rect x="686" y="266" width="8" height="11"/><rect x="702" y="284" width="8" height="11" class="fx-glow" style="--d:.9s"/>
    <rect x="722" y="240" width="8" height="11"/><rect x="756" y="274" width="8" height="11" class="fx-blink" style="--d:2.4s"/>
    <rect x="796" y="250" width="8" height="11"/><rect x="836" y="280" width="8" height="11" class="fx-glow" style="--d:1.7s"/>
    <rect x="872" y="256" width="8" height="11"/><rect x="886" y="286" width="8" height="11"/>
  </g>
  <g class="fx-drift-slow" style="--d:.3s">
    <g stroke="#8fa4c0" stroke-width="1.4" opacity="0.3">
      <line x1="694" y1="88" x2="682" y2="128"/><line x1="732" y1="104" x2="720" y2="146"/>
      <line x1="770" y1="86" x2="758" y2="126"/><line x1="828" y1="112" x2="816" y2="152"/>
      <line x1="872" y1="92" x2="860" y2="134"/><line x1="908" y1="126" x2="896" y2="166"/>
    </g>
  </g>
  <g class="fx-glow" style="--d:2.1s"><circle cx="880" cy="112" r="14" fill="#cbd6e4" opacity="0.13"/></g>
  <path d="M664 60 l278 0 l0 16 l-278 0 z" fill="#4a3524"/>
  <path d="M660 62 l40 0 l-4 244 q-20 10 -38 2 z" fill="#4a2a20"/>
  <path d="M906 62 l42 0 l4 248 q-22 10 -42 2 z" fill="#4a2a20"/>
  <g fill="none" stroke="#2f1a14" stroke-width="3" opacity="0.9">
    <path d="M672 66 l-4 238"/><path d="M686 66 l-3 240"/>
    <path d="M920 66 l3 240"/><path d="M936 66 l5 240"/>
  </g>
</g>

<!-- a filing cabinet and the safe, in the corner -->
<g>
  <rect x="512" y="256" width="128" height="216" fill="#3a3a32"/>
  <rect x="512" y="256" width="128" height="10" fill="#4d4d43"/>
  <g fill="none" stroke="#242420" stroke-width="3">
    <rect x="522" y="274" width="108" height="60"/><rect x="522" y="342" width="108" height="60"/>
    <rect x="522" y="410" width="108" height="54"/>
  </g>
  <g fill="#8e8e88">
    <rect x="558" y="298" width="36" height="8" rx="3"/><rect x="558" y="366" width="36" height="8" rx="3"/>
    <rect x="558" y="432" width="36" height="8" rx="3"/>
  </g>
  <g fill="#e3d5ac" opacity="0.9">
    <rect x="536" y="238" width="46" height="18"/><rect x="586" y="234" width="42" height="22"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.5"><line x1="542" y1="246" x2="576" y2="246"/><line x1="592" y1="244" x2="622" y2="244"/></g>
</g>

<!-- HUGO BRAFF, filling the chair -->
<g>
  <path d="M556 472 l0 -70 q0 -46 62 -50 l86 0 q62 4 62 50 l0 70 z" fill="url(#or-off-leather)"/>
  <path d="M576 468 l0 -60 q0 -34 48 -38 l68 0 q48 4 48 38 l0 60 z" fill="#3b2f22"/>
  <g fill="none" stroke="#2b1f14" stroke-width="2" opacity="0.8">
    <path d="M596 418 l120 0"/><path d="M596 444 l120 0"/><path d="M634 400 l0 68"/><path d="M676 400 l0 68"/>
  </g>
  <!-- the man himself: a checked suit at the end of a long night -->
  <path d="M566 470 q0 -84 68 -92 l44 0 q68 8 68 92 z" fill="#4a4232"/>
  <g stroke="#5f573f" stroke-width="2" opacity="0.65">
    <line x1="580" y1="400" x2="580" y2="470"/><line x1="608" y1="392" x2="608" y2="470"/>
    <line x1="636" y1="386" x2="636" y2="470"/><line x1="664" y1="384" x2="664" y2="470"/>
    <line x1="692" y1="386" x2="692" y2="470"/><line x1="720" y1="392" x2="720" y2="470"/>
    <line x1="748" y1="400" x2="748" y2="470"/>
    <line x1="570" y1="404" x2="746" y2="404"/><line x1="568" y1="428" x2="750" y2="428"/>
    <line x1="566" y1="452" x2="752" y2="452"/>
  </g>
  <path d="M614 396 q44 -34 92 0 l10 74 l-112 0 z" fill="#584f3a"/>
  <path d="M634 388 l52 0 l-6 82 l-40 0 z" fill="#ded3b8"/>
  <path d="M652 392 l16 0 l-3 22 l-10 0 z" fill="#5d1f18"/>
  <path d="M654 414 q8 30 4 56 l8 0 q4 -28 -4 -56 z" fill="#6b2a24"/>
  <path d="M628 386 l16 12 l-10 72 l-12 -74 z" fill="#3e3829"/>
  <path d="M692 386 l-16 12 l10 72 l12 -74 z" fill="#3e3829"/>
  <ellipse cx="660" cy="344" rx="31" ry="34" fill="#c0a888"/>
  <path d="M629 340 q31 -36 62 0 q4 -34 -31 -34 q-35 0 -31 34 z" fill="#5b564b"/>
  <path d="M627 340 q-5 14 1 24 l6 -6 q-4 -9 -1 -18 z" fill="#5b564b"/>
  <path d="M693 340 q5 14 -1 24 l-6 -6 q4 -9 1 -18 z" fill="#5b564b"/>
  <g stroke="#4a3f31" stroke-width="2.6" stroke-linecap="round">
    <line x1="642" y1="340" x2="655" y2="342"/><line x1="665" y1="342" x2="678" y2="340"/>
  </g>
  <line x1="650" y1="364" x2="670" y2="364" stroke="#6b5a45" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M636 374 q24 12 48 0 l0 12 q-24 10 -48 0 z" fill="#b39a7a"/>
  <ellipse cx="660" cy="322" rx="20" ry="6" fill="#4a453c" opacity="0.5"/>
  <!-- both hands flat on the desk, defending it -->
  <path d="M566 424 q-24 14 -26 34 l26 4 z" fill="#4a4232"/>
  <path d="M754 424 q24 14 26 34 l-26 4 z" fill="#4a4232"/>
  <ellipse cx="552" cy="458" rx="26" ry="12" fill="#c0a888"/>
  <ellipse cx="768" cy="458" rx="26" ry="12" fill="#b39a7a"/>
  <g stroke="#8d7c62" stroke-width="1.8" stroke-linecap="round">
    <line x1="534" y1="458" x2="562" y2="463"/><line x1="536" y1="451" x2="564" y2="456"/>
    <line x1="540" y1="464" x2="566" y2="468"/>
    <line x1="758" y1="458" x2="786" y2="463"/><line x1="756" y1="451" x2="784" y2="456"/>
    <line x1="754" y1="464" x2="780" y2="468"/>
  </g>
</g>

<!-- THE DESK -->
<rect x="120" y="300" width="420" height="320" fill="url(#or-off-lamp)" class="fx-flicker" style="--d:1.2s"/>
<g>
  <rect x="104" y="470" width="712" height="26" rx="4" fill="#5c4327"/>
  <rect x="104" y="492" width="712" height="10" fill="#33271a"/>
  <rect x="128" y="502" width="664" height="118" fill="#3b2f22"/>
  <rect x="326" y="502" width="268" height="118" fill="#241b12"/>
  <!-- right pedestal, shut -->
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="616" y="514" width="152" height="34"/><rect x="616" y="556" width="152" height="34"/>
    <rect x="616" y="598" width="152" height="22"/>
  </g>
  <g fill="#9b7a3f">
    <ellipse cx="692" cy="531" rx="16" ry="5"/><ellipse cx="692" cy="573" rx="16" ry="5"/>
  </g>
  <!-- LEFT PEDESTAL: the drawer standing open on its papers -->
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="152" y="556" width="152" height="34"/><rect x="152" y="598" width="152" height="22"/>
  </g>
  <ellipse cx="228" cy="573" rx="16" ry="5" fill="#9b7a3f"/>
  <g>
    <path d="M126 500 L330 500 L330 552 L126 552 Z" fill="#4a3524"/>
    <path d="M126 500 L330 500 L322 490 L134 490 Z" fill="#5c4327"/>
    <rect x="134" y="506" width="188" height="38" fill="#181310"/>
    <!-- the insurance policy, and three letters that get politer and worse -->
    <g transform="rotate(-3 200 518)">
      <rect x="146" y="498" width="98" height="46" fill="#f0e7ce"/>
      <rect x="146" y="498" width="98" height="12" fill="#e3d5ac"/>
      <g stroke="#4a3f31" stroke-width="2" opacity="0.9">
        <line x1="154" y1="518" x2="230" y2="518"/><line x1="154" y1="526" x2="222" y2="526"/>
        <line x1="154" y1="534" x2="228" y2="534"/>
      </g>
      <circle cx="228" cy="504" r="7" fill="#a8352a" opacity="0.85"/>
      <circle cx="228" cy="504" r="4" fill="#5d1f18" opacity="0.7"/>
    </g>
    <g transform="rotate(5 282 522)">
      <rect x="248" y="500" width="76" height="44" fill="#e3d5ac"/>
      <g stroke="#1b2436" stroke-width="1.8" opacity="0.9">
        <line x1="256" y1="514" x2="314" y2="514"/><line x1="256" y1="522" x2="308" y2="522"/>
        <line x1="256" y1="530" x2="316" y2="530"/><line x1="256" y1="538" x2="298" y2="538"/>
      </g>
      <rect x="256" y="504" width="26" height="6" fill="#5d1f18"/>
    </g>
    <path d="M158 544 l70 -4 l2 12 l-70 4 z" fill="#cbb98f"/>
  </g>
  <!-- top of the desk -->
  <rect x="150" y="452" width="180" height="20" rx="3" fill="#5d1f18" opacity="0.9"/>
  <rect x="156" y="444" width="168" height="10" fill="#3a2418"/>
  <!-- the bottle of rye at low tide, and a glass -->
  <g>
    <path d="M356 470 l0 -52 q0 -10 -8 -16 l0 -22 l24 0 l0 22 q-8 6 -8 16 l0 52 z" fill="#8a6636" opacity="0.55"/>
    <path d="M356 470 l0 -30 l8 0 l0 30 z" fill="url(#or-off-rye)"/>
    <path d="M348 442 l24 0 l0 28 l-24 0 z" fill="url(#or-off-rye)"/>
    <rect x="352" y="374" width="16" height="12" rx="3" fill="#241b12"/>
    <rect x="348" y="404" width="24" height="20" fill="#a8352a" opacity="0.6"/>
    <g stroke="#e3d5ac" stroke-width="1.5" opacity="0.7">
      <line x1="352" y1="410" x2="368" y2="410"/><line x1="352" y1="416" x2="364" y2="416"/>
    </g>
    <path d="M354 424 l0 40" stroke="#ffffff" stroke-width="2.5" opacity="0.3"/>
  </g>
  <g>
    <path d="M388 470 l0 -34 l26 0 l0 34 z" fill="#efe8d2" opacity="0.9"/>
    <path d="M388 470 l0 -14 l26 0 l0 14 z" fill="#8a5620"/>
    <ellipse cx="401" cy="436" rx="13" ry="4" fill="#f4ecd6" opacity="0.9"/>
  </g>
  <!-- an ashtray, over-used -->
  <ellipse cx="470" cy="462" rx="34" ry="11" fill="#3a352d"/>
  <ellipse cx="470" cy="459" rx="26" ry="7" fill="#241b12"/>
  <g fill="#cbb98f">
    <rect x="452" y="452" width="22" height="6" rx="3"/><rect x="470" y="458" width="20" height="6" rx="3"/>
    <rect x="460" y="446" width="18" height="5" rx="2"/>
  </g>
  <!-- THE TELEPHONE and its pad -->
  <g transform="translate(-104 12)">
    <ellipse cx="856" cy="466" rx="48" ry="14" fill="#3a352d"/>
    <ellipse cx="856" cy="462" rx="40" ry="11" fill="#4d4740"/>
    <path d="M832 452 q24 -16 48 0 l0 -10 q-24 -14 -48 0 z" fill="#5b564b"/>
    <rect x="848" y="376" width="16" height="70" fill="#4d4740"/>
    <rect x="852" y="376" width="5" height="70" fill="#7d7768"/>
    <path d="M836 374 q20 -14 40 0 l0 10 q-20 -12 -40 0 z" fill="#6f6a5e"/>
    <ellipse cx="856" cy="372" rx="20" ry="7" fill="#8e8e88"/>
    <ellipse cx="856" cy="370" rx="11" ry="4" fill="#241b12"/>
    <!-- the receiver, set back on its fork askew -->
    <g transform="translate(0 20) rotate(-11 856 352)">
      <path d="M814 346 q42 -20 84 0 l-5 16 q-37 -18 -74 0 z" fill="#4d4740"/>
      <path d="M814 346 q42 -20 84 0 l-2 6 q-40 -18 -80 0 z" fill="#6f6a5e"/>
      <ellipse cx="812" cy="354" rx="15" ry="12" fill="#5b564b"/>
      <ellipse cx="900" cy="354" rx="15" ry="12" fill="#5b564b"/>
      <ellipse cx="812" cy="354" rx="8" ry="6" fill="#1b1814"/>
      <ellipse cx="900" cy="354" rx="8" ry="6" fill="#1b1814"/>
    </g>
    <path d="M818 468 q-30 8 -44 -6 q-14 -14 -2 -26" fill="none" stroke="#1b1814" stroke-width="4"/>
    <path d="M818 466 q-28 6 -42 -6" fill="none" stroke="#4d4740" stroke-width="1.5" opacity="0.6"/>
  </g>
  <!-- the pad: the top sheet torn off, the impression still there -->
  <g transform="translate(-64 34) rotate(4 726 428)">
    <rect x="676" y="410" width="100" height="52" rx="2" fill="#cbb98f"/>
    <rect x="676" y="410" width="100" height="44" rx="2" fill="#f0e7ce"/>
    <path d="M676 410 l100 0 l0 5 l-100 0 z" fill="#a8352a" opacity="0.75"/>
    <path d="M760 410 l16 0 l0 16 z" fill="#e3d5ac"/>
    <g stroke="#a89a7c" stroke-width="2.4" opacity="0.95">
      <line x1="686" y1="426" x2="754" y2="426"/><line x1="686" y1="436" x2="744" y2="436"/>
    </g>
    <g stroke="#8d7c62" stroke-width="2.8" opacity="0.9">
      <line x1="686" y1="446" x2="740" y2="446"/>
    </g>
    <path d="M676 452 q26 6 52 -2 q24 -6 48 2" fill="none" stroke="#b6a67f" stroke-width="2"/>
  </g>
  <!-- pencil -->
  <g transform="translate(-100 40) rotate(-22 800 448)">
    <rect x="770" y="444" width="60" height="7" rx="3" fill="#9b7a3f"/>
    <path d="M770 444 l-12 4 l12 3 z" fill="#e3d5ac"/>
    <rect x="826" y="444" width="10" height="7" fill="#a8352a"/>
  </g>
</g>

<!-- a wastebasket of crumpled paper, beside the open drawer -->
<g>
  <ellipse cx="66" cy="586" rx="46" ry="12" fill="#0d0a07" opacity="0.6"/>
  <path d="M28 500 l76 0 l-10 84 l-56 0 z" fill="#4a453c"/>
  <path d="M28 500 l76 0 l-2 14 l-72 0 z" fill="#6f6a5e"/>
  <g stroke="#2f2b26" stroke-width="3" opacity="0.8">
    <line x1="46" y1="516" x2="42" y2="578"/><line x1="66" y1="516" x2="66" y2="578"/>
    <line x1="86" y1="516" x2="90" y2="578"/>
  </g>
  <g fill="#e3d5ac">
    <path d="M36 496 q18 -20 38 -6 q16 12 -2 20 q-24 8 -36 -14 z"/>
    <path d="M74 494 q14 -16 30 -4 q12 10 -4 16 q-20 6 -26 -12 z"/>
  </g>
  <path d="M112 570 q22 -20 44 -4 q14 12 -6 20 q-28 8 -38 -16 z" fill="#cbb98f"/>
</g>

<!-- foreground: the visitor's chair, seen from behind -->
<g>
  <path d="M754 620 L1010 620 L1010 500 q-136 -24 -270 4 Z" fill="#1b140d"/>
  <path d="M740 512 q136 -28 270 -4" fill="none" stroke="#4a3524" stroke-width="6"/>
  <g fill="#2b1f14">
    <circle cx="812" cy="546" r="5"/><circle cx="888" cy="538" r="5"/><circle cx="962" cy="536" r="5"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#or-off-vig)"/>
`,
  },

  box: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_glasses: { x: 26, y: 60 },
      h_ashtray: { x: 47, y: 60 },
      h_satchel: { x: 66, y: 84 },
    },
    svg: `
<defs>
  <linearGradient id="or-box-air" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a1315"/><stop offset="1" stop-color="#12090a"/>
  </linearGradient>
  <linearGradient id="or-box-velvet" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6b2a24"/><stop offset="0.45" stop-color="#431916"/><stop offset="1" stop-color="#25100e"/>
  </linearGradient>
  <linearGradient id="or-box-gilt" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8c072"/><stop offset="0.45" stop-color="#a8873f"/><stop offset="1" stop-color="#5c4327"/>
  </linearGradient>
  <linearGradient id="or-box-house" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2018"/><stop offset="1" stop-color="#0c0907"/>
  </linearGradient>
  <linearGradient id="or-box-hide" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7d5c36"/><stop offset="1" stop-color="#2f2114"/>
  </linearGradient>
  <linearGradient id="or-box-stage" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffe6ac"/><stop offset="1" stop-color="#c08c34"/>
  </linearGradient>
  <radialGradient id="or-box-flood" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-box-glow" cx="0.26" cy="0.42" r="0.72">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-box-vig" cx="0.44" cy="0.5" r="0.74">
    <stop offset="0.36" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-box-air)"/>

<!-- THE VIEW OVER THE RAIL: the house, and down to the left, the stage -->
<g>
  <rect x="60" y="30" width="880" height="384" fill="url(#or-box-house)"/>

  <!-- the far tiers of the auditorium, dim and empty -->
  <g>
    <path d="M520 66 L940 36 L940 300 L520 268 Z" fill="#150e09"/>
    <!-- dim brackets high on the far wall -->
    <g fill="#d9a441" opacity="0.28">
      <ellipse cx="600" cy="106" rx="26" ry="18" class="fx-glow" style="--d:.3s"/><ellipse cx="740" cy="90" rx="26" ry="18" class="fx-glow" style="--d:1.6s"/>
      <ellipse cx="880" cy="74" rx="26" ry="18" class="fx-glow" style="--d:2.7s"/>
    </g>
    <g fill="#ffd98a" opacity="0.5">
      <circle cx="600" cy="106" r="4"/><circle cx="740" cy="90" r="4"/><circle cx="880" cy="74" r="4"/>
    </g>
    <!-- the upper balcony, sweeping away -->
    <g>
      <path d="M520 138 Q730 96 940 76 L940 116 Q730 136 520 178 Z" fill="#0e0a07"/>
      <g fill="#241b12">
        <ellipse cx="576" cy="128" rx="18" ry="8"/><ellipse cx="646" cy="119" rx="18" ry="8"/>
        <ellipse cx="716" cy="110" rx="18" ry="8"/><ellipse cx="786" cy="102" rx="18" ry="8"/>
        <ellipse cx="856" cy="94" rx="18" ry="8"/><ellipse cx="922" cy="87" rx="18" ry="8"/>
      </g>
      <path d="M520 152 Q730 110 940 90 L940 126 Q730 146 520 188 Z" fill="#2b2118"/>
      <path d="M520 152 Q730 110 940 90 L940 98 Q730 118 520 160 Z" fill="#6b5326" opacity="0.45"/>
      <path d="M520 188 Q730 146 940 126 L940 156 Q730 176 520 218 Z" fill="#0c0806"/>
    </g>
    <!-- the tier below it -->
    <g>
      <g fill="#241b12">
        <ellipse cx="582" cy="222" rx="20" ry="9"/><ellipse cx="656" cy="214" rx="20" ry="9"/>
        <ellipse cx="730" cy="206" rx="20" ry="9"/><ellipse cx="804" cy="198" rx="20" ry="9"/>
        <ellipse cx="878" cy="190" rx="20" ry="9"/>
      </g>
      <path d="M520 246 Q730 210 940 192 L940 226 Q730 244 520 280 Z" fill="#2a2018"/>
      <path d="M520 246 Q730 210 940 192 L940 200 Q730 218 520 254 Z" fill="#6b5326" opacity="0.38"/>
      <path d="M520 280 Q730 244 940 226 L940 268 Q730 286 520 300 Z" fill="#0c0806"/>
    </g>
    <!-- a great chandelier hanging in the dark of the house -->
    <g class="fx-sway" style="--d:2.2s;transform-origin:top center">
    <g transform="translate(-90 84)">
      <line x1="620" y1="20" x2="620" y2="52" stroke="#5c4327" stroke-width="3"/>
      <ellipse cx="620" cy="62" rx="46" ry="10" fill="none" stroke="#a8873f" stroke-width="4"/>
      <ellipse cx="620" cy="48" rx="27" ry="7" fill="none" stroke="#a8873f" stroke-width="3"/>
      <g fill="#ffd98a" class="fx-glow" style="--d:1.1s">
        <circle cx="584" cy="60" r="5"/><circle cx="602" cy="56" r="5"/><circle cx="620" cy="54" r="5"/>
        <circle cx="638" cy="56" r="5"/><circle cx="656" cy="60" r="5"/>
      </g>
      <g fill="#e8c072" opacity="0.85">
        <rect x="596" y="62" width="4" height="16"/><rect x="618" y="62" width="4" height="20"/>
        <rect x="640" y="62" width="4" height="16"/>
      </g>
      <ellipse cx="620" cy="58" rx="76" ry="30" fill="#d9a441" opacity="0.14"/>
    </g>
    </g>
  </g>

  <!-- the proscenium, and the stage far below and to the left -->
  <g transform="translate(-10 -66)">
    <path d="M60 30 L500 62 L500 414 L60 414 Z" fill="#150f0b"/>
    <path d="M96 118 L444 142 L444 380 L96 380 Z" fill="#2a1a12"/>
    <path d="M96 118 L444 142 L444 158 L96 136 Z" fill="url(#or-box-gilt)" opacity="0.7"/>
    <path d="M112 152 L428 172 L428 366 L112 366 Z" fill="#1b1610"/>
    <path d="M124 170 L416 186 L416 358 L124 358 Z" fill="url(#or-box-stage)" opacity="0.62"/>
    <ellipse cx="270" cy="280" rx="170" ry="110" fill="url(#or-box-flood)" class="fx-glow" style="--d:.8s"/>
    <!-- the Act III set, a lit doll's house away -->
    <g>
      <path d="M140 302 L140 194 L268 202 L268 302 Z" fill="#b58947"/>
      <path d="M140 194 L212 198 L212 234 L140 250 Z" fill="#5c4327"/>
      <g stroke="#7d5c30" stroke-width="4" opacity="0.8">
        <line x1="164" y1="246" x2="172" y2="196"/><line x1="196" y1="240" x2="200" y2="198"/>
      </g>
      <rect x="284" y="204" width="70" height="9" fill="#4a3524"/>
      <rect x="288" y="213" width="62" height="56" fill="#1b2436"/>
      <circle cx="330" cy="234" r="15" fill="#f7f2e2"/>
      <rect x="288" y="256" width="62" height="13" fill="#131a29"/>
      <path d="M156 302 q30 -26 62 0 z" fill="#4a3524"/>
      <rect x="176" y="266" width="9" height="20" fill="#f0e7ce"/>
      <rect x="360" y="230" width="48" height="72" fill="#7d6132"/>
      <rect x="360" y="230" width="48" height="9" fill="#a8873f"/>
    </g>
    <path d="M124 300 L416 312 L416 358 L124 358 Z" fill="#e0b45c" opacity="0.85"/>
    <path d="M124 300 L416 312 L416 320 L124 308 Z" fill="#f4dda0" opacity="0.7"/>
    <!-- the chalk mark, a white scratch at this distance -->
    <ellipse cx="244" cy="332" rx="30" ry="12" fill="#5d1f18"/>
    <g stroke="#ffffff" stroke-width="4" opacity="0.95" fill="none">
      <circle cx="206" cy="324" r="10"/>
      <path d="M220 316 q32 -6 58 8"/><path d="M218 332 q32 4 58 14"/>
      <path d="M278 324 q20 -6 32 2"/><path d="M276 346 q20 -2 30 -8"/>
    </g>
    <!-- footlights, a row of sparks -->
    <g fill="#ffd98a" opacity="0.85" class="fx-glow" style="--d:1.9s">
      <circle cx="136" cy="352" r="5"/><circle cx="172" cy="353" r="5"/><circle cx="208" cy="354" r="5"/>
      <circle cx="244" cy="355" r="5"/><circle cx="280" cy="356" r="5"/><circle cx="316" cy="357" r="5"/>
      <circle cx="352" cy="358" r="5"/><circle cx="388" cy="359" r="5"/>
    </g>
    <!-- house curtain, drawn back at the sides -->
    <g class="fx-sway" style="--d:.9s;transform-origin:top center">
      <path d="M96 118 L164 122 L156 380 L96 380 Z" fill="url(#or-box-velvet)"/>
      <g fill="none" stroke="#2a100e" stroke-width="4" opacity="0.9">
        <path d="M112 124 l-4 254"/><path d="M136 126 l-3 252"/>
      </g>
    </g>
    <g class="fx-sway" style="--d:2.5s;transform-origin:top center">
      <path d="M382 138 L444 142 L444 380 L390 380 Z" fill="url(#or-box-velvet)"/>
      <g fill="none" stroke="#2a100e" stroke-width="4" opacity="0.9">
        <path d="M400 140 l3 238"/><path d="M424 142 l3 238"/>
      </g>
    </g>
    <!-- and beyond the curtain leg, the wings: the prop table he was watching -->
    <path d="M382 150 q-10 60 -2 120 l-38 -6 l0 -116 z" fill="#0c0907" opacity="0.92"/>
    <rect x="336" y="262" width="54" height="13" fill="#5c4327"/>
    <rect x="336" y="275" width="54" height="6" fill="#33271a"/>
    <g fill="#e3d5ac" opacity="0.6">
      <rect x="341" y="264" width="12" height="8"/><rect x="359" y="264" width="12" height="8"/>
      <rect x="377" y="264" width="10" height="8"/>
    </g>
  </g>

  <!-- the stalls below the stage, rows of empty seats -->
  <rect x="60" y="300" width="440" height="114" fill="#150f0b"/>
  <g fill="#241b12">
    <path d="M60 330 L500 318 L500 330 L60 342 Z"/>
    <path d="M60 358 L500 344 L500 358 L60 372 Z"/>
    <path d="M60 388 L500 372 L500 388 L60 404 Z"/>
  </g>
  <g fill="#2f2418">
    <ellipse cx="110" cy="330" rx="18" ry="9"/><ellipse cx="180" cy="327" rx="18" ry="9"/>
    <ellipse cx="250" cy="325" rx="18" ry="9"/><ellipse cx="320" cy="322" rx="18" ry="9"/>
    <ellipse cx="390" cy="320" rx="18" ry="9"/><ellipse cx="460" cy="318" rx="18" ry="9"/>
    <ellipse cx="146" cy="358" rx="20" ry="10"/><ellipse cx="222" cy="356" rx="20" ry="10"/>
    <ellipse cx="298" cy="353" rx="20" ry="10"/><ellipse cx="374" cy="350" rx="20" ry="10"/>
    <ellipse cx="450" cy="348" rx="20" ry="10"/>
    <ellipse cx="106" cy="388" rx="22" ry="11"/><ellipse cx="190" cy="385" rx="22" ry="11"/>
    <ellipse cx="274" cy="382" rx="22" ry="11"/><ellipse cx="358" cy="379" rx="22" ry="11"/>
    <ellipse cx="442" cy="376" rx="22" ry="11"/>
  </g>
</g>
<rect width="1000" height="620" fill="url(#or-box-glow)"/>

<!-- the box: velvet walls left and right -->
<g>
  <path d="M-10 0 L128 0 L104 620 L-10 620 Z" fill="url(#or-box-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="5" opacity="0.9">
    <path d="M14 0 L2 620"/><path d="M46 0 L30 620"/><path d="M80 0 L58 620"/><path d="M112 0 L86 620"/>
  </g>
  <path d="M1010 0 L900 0 L924 620 L1010 620 Z" fill="url(#or-box-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="5" opacity="0.9">
    <path d="M986 0 L996 620"/><path d="M956 0 L972 620"/><path d="M926 0 L948 620"/>
  </g>
  <g fill="url(#or-box-gilt)" opacity="0.9">
    <circle cx="58" cy="186" r="22"/><circle cx="952" cy="186" r="22"/>
  </g>
  <g fill="#431916">
    <circle cx="58" cy="186" r="10"/><circle cx="952" cy="186" r="10"/>
  </g>
  <g fill="none" stroke="#a8873f" stroke-width="3" opacity="0.7">
    <circle cx="58" cy="186" r="33"/><circle cx="952" cy="186" r="33"/>
  </g>
  <!-- the swagged pelmet overhead -->
  <path d="M-10 0 L1010 0 L1010 40 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -124 0 Z" fill="url(#or-box-velvet)"/>
  <g fill="url(#or-box-gilt)">
    <circle cx="-10" cy="68" r="9"/><circle cx="118" cy="68" r="9"/><circle cx="246" cy="68" r="9"/>
    <circle cx="374" cy="68" r="9"/><circle cx="502" cy="68" r="9"/><circle cx="630" cy="68" r="9"/>
    <circle cx="758" cy="68" r="9"/><circle cx="886" cy="68" r="9"/><circle cx="1010" cy="68" r="9"/>
  </g>
  <rect x="-10" y="0" width="1020" height="14" fill="#14110d"/>
  <path d="M-10 14 L1010 14 L1010 22 L-10 22 Z" fill="url(#or-box-gilt)" opacity="0.5"/>
</g>

<!-- THE GILT RAIL -->
<g>
  <path d="M96 414 L926 414 L936 448 L88 448 Z" fill="#431916"/>
  <g fill="url(#or-box-gilt)" opacity="0.9">
    <rect x="132" y="414" width="13" height="34"/><rect x="204" y="414" width="13" height="34"/>
    <rect x="276" y="414" width="13" height="34"/><rect x="348" y="414" width="13" height="34"/>
    <rect x="420" y="414" width="13" height="34"/><rect x="492" y="414" width="13" height="34"/>
    <rect x="564" y="414" width="13" height="34"/><rect x="636" y="414" width="13" height="34"/>
    <rect x="708" y="414" width="13" height="34"/><rect x="780" y="414" width="13" height="34"/>
    <rect x="852" y="414" width="13" height="34"/>
  </g>
  <rect x="98" y="356" width="826" height="30" rx="10" fill="url(#or-box-gilt)"/>
  <rect x="104" y="360" width="814" height="8" rx="4" fill="#f4dda0" opacity="0.65"/>
  <rect x="98" y="386" width="826" height="12" fill="#7d6132"/>
  <rect x="98" y="398" width="826" height="16" fill="#5d1f18"/>
  <g fill="none" stroke="#d7b064" stroke-width="3" opacity="0.55">
    <path d="M150 404 q34 -12 68 0"/><path d="M242 404 q34 -12 68 0"/><path d="M334 404 q34 -12 68 0"/>
    <path d="M426 404 q34 -12 68 0"/><path d="M518 404 q34 -12 68 0"/><path d="M610 404 q34 -12 68 0"/>
    <path d="M702 404 q34 -12 68 0"/><path d="M794 404 q34 -12 68 0"/>
  </g>
</g>

<!-- the floor of the box -->
<path d="M88 448 L936 448 L960 620 L64 620 Z" fill="#2b1d14"/>
<path d="M120 470 L904 470 L920 620 L104 620 Z" fill="#5d1f18" opacity="0.45"/>
<g stroke="#7d2d24" stroke-width="4" opacity="0.35" fill="none">
  <path d="M260 620 L266 476"/><path d="M470 620 L470 476"/><path d="M680 620 L676 476"/>
</g>

<!-- THE CHAIR, with his coat over it -->
<g>
  <ellipse cx="700" cy="590" rx="150" ry="24" fill="#0d0a07" opacity="0.5"/>
  <path d="M614 448 L790 448 L802 590 L604 590 Z" fill="#33271a"/>
  <path d="M624 448 L780 448 L786 468 L618 468 Z" fill="#5c4327"/>
  <g fill="#241b12">
    <rect x="614" y="590" width="22" height="30"/><rect x="772" y="590" width="22" height="30"/>
  </g>
  <path d="M628 448 L776 448 L776 260 q0 -28 -32 -30 l-84 0 q-32 2 -32 30 Z" fill="#3b2f22"/>
  <path d="M644 444 L760 444 L760 278 q0 -20 -26 -22 l-64 0 q-26 2 -26 22 Z" fill="#5d1f18"/>
  <g fill="none" stroke="#3f1613" stroke-width="3" opacity="0.85">
    <path d="M682 258 l0 186"/><path d="M722 258 l0 186"/>
  </g>
  <path d="M628 256 q74 -36 148 0 l0 14 q-74 -32 -148 0 z" fill="url(#or-box-gilt)"/>
  <!-- the coat, thrown over the back -->
  <path d="M598 278 q76 -50 158 -18 q38 16 44 70 q10 84 -8 158 l-62 -6 q12 -90 -6 -150 q-46 -24 -96 6 q-24 46 -16 144 l-52 -6 q-16 -112 38 -198 z" fill="#1e1a28"/>
  <path d="M612 296 q64 -38 132 -14" fill="none" stroke="#2b2537" stroke-width="7"/>
  <g fill="none" stroke="#15121d" stroke-width="4" opacity="0.9">
    <path d="M598 340 q-10 78 4 146"/><path d="M786 348 q12 70 2 138"/>
  </g>
  <path d="M660 278 q38 -18 74 -2 l-10 24 q-30 -14 -58 2 z" fill="#2b2537"/>
  <g fill="#4a4232">
    <circle cx="638" cy="368" r="6"/><circle cx="634" cy="414" r="6"/><circle cx="632" cy="458" r="6"/>
  </g>
  <!-- a silk scarf trailing out of the collar -->
  <path d="M688 272 q24 -10 38 6 q-14 84 -8 166 l-24 -2 q-12 -86 -6 -170 z" fill="#e3d5ac" opacity="0.7"/>
  <g fill="none" stroke="#c9b98f" stroke-width="2" opacity="0.7">
    <path d="M700 292 q-4 76 0 148"/>
  </g>
</g>

<!-- THE LEATHER SATCHEL, beneath the seat -->
<g>
  <ellipse cx="660" cy="574" rx="98" ry="20" fill="#0d0a07" opacity="0.65"/>
  <path d="M578 486 L742 486 L756 564 L568 564 Z" fill="url(#or-box-hide)"/>
  <path d="M578 486 L742 486 L745 506 L575 506 Z" fill="#8f6a3d"/>
  <path d="M568 564 L756 564 L754 574 L570 574 Z" fill="#241b12"/>
  <path d="M575 506 L745 506 L750 542 L570 542 Z" fill="#5a3f22"/>
  <path d="M570 542 L750 542 L749 550 L571 550 Z" fill="#3d2a16"/>
  <g fill="#a8873f">
    <rect x="618" y="530" width="20" height="28" rx="4"/><rect x="684" y="530" width="20" height="28" rx="4"/>
  </g>
  <g fill="#3d2a16">
    <rect x="623" y="536" width="10" height="15" rx="3"/><rect x="689" y="536" width="10" height="15" rx="3"/>
  </g>
  <path d="M596 486 q34 -22 66 0" fill="none" stroke="#8a6636" stroke-width="9"/>
  <!-- drafts riding up out of the top; under them, older paper, water-stained -->
  <g transform="rotate(-6 634 468)">
    <rect x="584" y="440" width="102" height="50" fill="#f0e7ce"/>
    <g stroke="#8d7c62" stroke-width="1.7" opacity="0.9">
      <line x1="594" y1="456" x2="676" y2="456"/><line x1="594" y1="465" x2="668" y2="465"/>
      <line x1="594" y1="474" x2="676" y2="474"/><line x1="594" y1="483" x2="656" y2="483"/>
    </g>
  </g>
  <g transform="rotate(8 700 464)">
    <rect x="652" y="438" width="96" height="52" fill="#d9c79a"/>
    <path d="M652 438 l96 0 l0 7 l-96 0 z" fill="#b6a67f"/>
    <path d="M652 470 q24 8 48 0 q24 -8 48 2 l0 20 l-96 0 z" fill="#c2ad7c" opacity="0.6"/>
    <g stroke="#6b5a45" stroke-width="1.6" opacity="0.9">
      <line x1="660" y1="454" x2="738" y2="454"/><line x1="660" y1="463" x2="730" y2="463"/>
      <line x1="660" y1="472" x2="738" y2="472"/><line x1="660" y1="481" x2="716" y2="481"/>
    </g>
    <g stroke="#2f4f8a" stroke-width="4" opacity="0.9">
      <line x1="666" y1="447" x2="722" y2="447"/><line x1="676" y1="472" x2="728" y2="472"/>
    </g>
    <path d="M706 438 q16 -14 34 -2" fill="none" stroke="#5a4630" stroke-width="2" opacity="0.6"/>
  </g>
</g>

<!-- THE OPERA GLASSES on the rail, pointing down and to the left -->
<g transform="rotate(-10 260 340)">
  <ellipse cx="260" cy="382" rx="56" ry="11" fill="#0d0a07" opacity="0.45"/>
  <rect x="208" y="308" width="48" height="64" rx="11" fill="#241b12"/>
  <rect x="266" y="308" width="48" height="64" rx="11" fill="#241b12"/>
  <rect x="208" y="318" width="48" height="17" fill="#3a352d"/>
  <rect x="266" y="318" width="48" height="17" fill="#3a352d"/>
  <rect x="252" y="324" width="20" height="38" rx="5" fill="#a8873f"/>
  <ellipse cx="232" cy="308" rx="24" ry="9" fill="#a8873f"/>
  <ellipse cx="290" cy="308" rx="24" ry="9" fill="#a8873f"/>
  <ellipse cx="232" cy="308" rx="16" ry="6" fill="#8fa4c0" opacity="0.65"/>
  <ellipse cx="290" cy="308" rx="16" ry="6" fill="#8fa4c0" opacity="0.65"/>
  <ellipse cx="228" cy="306" rx="6" ry="3" fill="#f7f2e2" opacity="0.8"/>
  <ellipse cx="286" cy="306" rx="6" ry="3" fill="#f7f2e2" opacity="0.8"/>
  <ellipse cx="232" cy="372" rx="21" ry="8" fill="#3a352d"/>
  <ellipse cx="290" cy="372" rx="21" ry="8" fill="#3a352d"/>
  <path d="M214 372 q46 22 92 0" fill="none" stroke="#5c4327" stroke-width="4"/>
  <rect x="254" y="360" width="16" height="13" rx="4" fill="#d7b064"/>
  <path d="M212 316 l0 50" stroke="#6f6a5e" stroke-width="3" opacity="0.7"/>
</g>

<!-- THE ASHTRAY on the rail: one cigar, one letter that did not burn enough -->
<g>
  <ellipse cx="474" cy="376" rx="70" ry="21" fill="#3a352d"/>
  <ellipse cx="474" cy="371" rx="62" ry="17" fill="#4d4740"/>
  <ellipse cx="474" cy="371" rx="47" ry="12" fill="#1b1814"/>
  <g fill="#5b564b">
    <path d="M412 362 l18 -7 l4 9 l-18 7 z"/><path d="M522 358 l18 7 l-4 9 l-18 -7 z"/>
  </g>
  <ellipse cx="458" cy="371" rx="21" ry="7" fill="#6f6a5e" opacity="0.85"/>
  <ellipse cx="492" cy="373" rx="15" ry="5" fill="#5b564b" opacity="0.85"/>
  <!-- the cigar, gone out -->
  <g transform="rotate(-14 506 362)">
    <rect x="470" y="356" width="76" height="16" rx="8" fill="#7d5c36"/>
    <rect x="470" y="356" width="76" height="5" rx="3" fill="#9b7a3f"/>
    <rect x="506" y="355" width="19" height="18" rx="3" fill="#a8873f"/>
    <ellipse cx="546" cy="364" rx="6" ry="8" fill="#4a3524"/>
    <ellipse cx="470" cy="364" rx="7" ry="8" fill="#4d4740"/>
    <ellipse cx="470" cy="364" rx="3.5" ry="4" fill="#241b12"/>
  </g>
  <!-- the half-burned fold of notepaper, in a woman's hand -->
  <g transform="rotate(7 438 330)">
    <path d="M400 300 l74 -6 l6 48 l-76 6 z" fill="#f0e7ce"/>
    <path d="M400 300 q18 12 36 -2 q20 12 40 -4 l-2 -8 l-74 6 z" fill="#241b12"/>
    <path d="M402 302 q18 12 36 -2 q20 12 40 -4" fill="none" stroke="#8a4520" stroke-width="3.5" opacity="0.95"/>
    <path d="M404 310 q18 10 36 -2 q20 10 38 -4" fill="none" stroke="#a8352a" stroke-width="2" opacity="0.5"/>
    <g stroke="#3f4a63" stroke-width="2" stroke-linecap="round" opacity="0.9">
      <path d="M406 322 q12 -6 24 0 q12 6 26 -2"/>
      <path d="M406 331 q12 -6 24 0 q12 6 22 -2"/>
      <path d="M406 340 q14 -6 26 0 q12 6 24 -2"/>
      <path d="M408 349 q12 -6 22 0"/>
    </g>
    <path d="M400 348 l76 -6 l1 6 l-76 6 z" fill="#cbb98f" opacity="0.7"/>
  </g>
  <g fill="#6f6a5e" opacity="0.5">
    <circle cx="424" cy="384" r="3"/><circle cx="508" cy="388" r="2.6"/><circle cx="452" cy="390" r="2.2"/>
  </g>
</g>

<!-- foreground: the second chair, seen from behind -->
<g>
  <path d="M108 620 L400 620 L376 500 q-124 -28 -252 0 Z" fill="#2b1512"/>
  <path d="M126 506 q124 -26 250 0" fill="none" stroke="#a8873f" stroke-width="6" opacity="0.7"/>
  <g fill="none" stroke="#431916" stroke-width="4" opacity="0.9">
    <path d="M172 512 l-4 108"/><path d="M250 508 l0 112"/><path d="M328 512 l6 108"/>
  </g>
  <g fill="#9b7a3f" opacity="0.55">
    <circle cx="172" cy="558" r="5"/><circle cx="250" cy="554" r="5"/><circle cx="330" cy="558" r="5"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#or-box-vig)"/>
`,
  },
};
