/* Scene plates for CASE No. 004 — The Meridian Express, Larkspur Pass, 1953.
   Six compartments of a snowbound train: warm lit boxes inside a mountain night.
   Every searchable detail carries a pin placed as a percentage of the frame.
   Language-neutral: no text anywhere in the art. */
window.CASE_ART = window.CASE_ART || {};
window.CASE_ART.meridian = {

  comp7: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_body: { x: 40, y: 52 },
      h_doorchain: { x: 15, y: 47 },
      h_desk: { x: 66, y: 59 },
      h_commdoor: { x: 86, y: 49 },
    },
    svg: `
<defs>
  <linearGradient id="mx-comp7-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#17120c"/>
  </linearGradient>
  <linearGradient id="mx-comp7-side" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#100d09"/><stop offset="1" stop-color="#2a2118"/>
  </linearGradient>
  <linearGradient id="mx-comp7-side2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#100d09"/>
  </linearGradient>
  <linearGradient id="mx-comp7-drift" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4d5b70"/><stop offset="0.3" stop-color="#7d90a8"/><stop offset="1" stop-color="#a8b8c8"/>
  </linearGradient>
  <linearGradient id="mx-comp7-chair" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5f6b4a"/><stop offset="1" stop-color="#39422c"/>
  </linearGradient>
  <linearGradient id="mx-comp7-mahog" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3b2f22"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <radialGradient id="mx-comp7-glow" cx="0.63" cy="0.31" r="0.66">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.30"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-comp7-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-comp7-cold" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#8fa4c0" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#8fa4c0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-comp7-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#mx-comp7-wall)"/>

<!-- ceiling of the compartment, running back to the window wall -->
<path d="M0 0 L1000 0 L750 120 L250 120 Z" fill="#191309"/>
<g stroke="#241b12" stroke-width="3" opacity="0.9">
  <path d="M130 0 L285 120"/><path d="M330 0 L392 120"/><path d="M670 0 L608 120"/><path d="M870 0 L715 120"/>
</g>
<rect x="250" y="112" width="500" height="9" fill="#3b2f22"/>

<!-- side walls in veneer -->
<path d="M0 0 L250 120 L250 430 L0 620 Z" fill="url(#mx-comp7-side)"/>
<path d="M1000 0 L750 120 L750 430 L1000 620 Z" fill="url(#mx-comp7-side2)"/>
<g stroke="#33271a" stroke-width="2.4" opacity="0.85">
  <path d="M0 96 L250 176"/><path d="M0 250 L250 262"/><path d="M0 420 L250 356"/>
  <path d="M1000 96 L750 176"/><path d="M1000 250 L750 262"/><path d="M1000 420 L750 356"/>
</g>

<!-- back wall: mahogany veneer panels -->
<rect x="250" y="120" width="500" height="310" fill="#2a2118"/>
<g fill="none" stroke="#3b2f22" stroke-width="3">
  <rect x="264" y="136" width="70" height="276"/><rect x="666" y="136" width="70" height="276"/>
</g>
<rect x="250" y="416" width="500" height="14" fill="#3b2f22"/>
<rect x="250" y="430" width="500" height="6" fill="#1b140d"/>

<!-- floor and carpet -->
<path d="M0 620 L250 430 L750 430 L1000 620 Z" fill="#1a140e"/>
<path d="M118 620 L296 442 L704 442 L882 620 Z" fill="#3a2a1d"/>
<path d="M156 620 L312 456 L688 456 L844 620 Z" fill="none" stroke="#5a4128" stroke-width="4"/>
<g fill="#4a3524" opacity="0.7">
  <path d="M380 512 l18 -11 l18 11 l-18 11 z"/><path d="M500 512 l18 -11 l18 11 l-18 11 z"/>
  <path d="M620 512 l18 -11 l18 11 l-18 11 z"/>
  <path d="M330 580 l20 -13 l20 13 l-20 13 z"/><path d="M660 580 l20 -13 l20 13 l-20 13 z"/>
</g>

<!-- the sealed window: the drift pressing gray against the glass -->
<g>
  <rect x="330" y="158" width="232" height="168" rx="5" fill="#3b2f22"/>
  <rect x="340" y="168" width="212" height="148" fill="url(#mx-comp7-drift)"/>
  <!-- packed drift jammed against the pane, right to the top -->
  <path d="M340 186 q26 -14 50 -2 q26 -14 52 0 q28 -14 54 -2 q26 -10 56 -4 l0 138 l-212 0 z" fill="#b6c4d4"/>
  <path d="M340 222 q30 -12 56 0 q28 -12 58 2 q30 -10 56 0 l42 4 l0 88 l-212 0 z" fill="#c6d2e0"/>
  <path d="M340 262 q36 -12 68 0 q34 -10 68 4 q26 -6 44 -2 l0 52 l-180 0 z" fill="#d6dfe8"/>
  <g fill="#8fa4c0" opacity="0.55">
    <path d="M348 236 q28 -10 54 2 l-52 8 z"/><path d="M436 254 q30 -8 54 4 l-56 8 z"/>
    <path d="M356 288 q28 -8 50 2 l-48 8 z"/><path d="M462 292 q26 -6 46 2 l-46 8 z"/>
  </g>
  <g stroke="#eef3f8" stroke-width="1.6" opacity="0.55">
    <path d="M368 200 q22 -8 44 0"/><path d="M462 216 q24 -8 46 0"/><path d="M382 274 q26 -8 50 0"/>
  </g>
  <g stroke="#f0f4f8" stroke-width="1.4" opacity="0.45">
    <path d="M346 174 l12 12 l-7 11"/><path d="M544 178 l-13 10 l7 12"/>
    <path d="M348 302 l14 -8"/><path d="M540 308 l-16 -7"/>
  </g>
  <rect x="340" y="168" width="212" height="16" fill="#2b3548" opacity="0.85"/>
  <rect x="440" y="168" width="7" height="148" fill="#3b2f22"/>
  <rect x="330" y="158" width="232" height="8" fill="#6b5326"/>
  <rect x="330" y="318" width="232" height="10" fill="#6b5326"/>
  <rect x="322" y="326" width="248" height="12" fill="#4a3524"/>
  <!-- this window still has its lifting strap -->
  <path d="M418 328 l20 0 l-3 62 q-8 8 -16 2 z" fill="#4a3524"/>
  <g stroke="#6b5a45" stroke-width="1.2" opacity="0.85">
    <path d="M422 330 l-2 56"/><path d="M434 330 l-2 56"/>
  </g>
  <rect x="418" y="386" width="20" height="10" rx="3" fill="#9b7a3f"/>
</g>

<!-- his overcoat on the wall hook, the hat above it -->
<g>
  <rect x="272" y="150" width="46" height="9" rx="3" fill="#6b5326"/>
  <circle cx="282" cy="162" r="5" fill="#9b7a3f"/><circle cx="308" cy="162" r="5" fill="#9b7a3f"/>
  <path d="M282 164 q-22 26 -20 66 l6 96 q26 10 52 0 l6 -96 q2 -40 -20 -66 z" fill="#3d372c"/>
  <path d="M294 166 l0 158" stroke="#241f19" stroke-width="3"/>
  <path d="M282 164 q10 20 12 44 q4 -24 14 -44 z" fill="#4c4536"/>
  <g fill="#4a4234">
    <circle cx="296" cy="238" r="3"/><circle cx="296" cy="266" r="3"/><circle cx="296" cy="294" r="3"/>
  </g>
  <ellipse cx="295" cy="146" rx="30" ry="8" fill="#2b261f"/>
  <path d="M275 146 q20 -26 40 0 z" fill="#3a342a"/>
  <path d="M277 138 q18 -8 36 0" fill="none" stroke="#241f19" stroke-width="3"/>
</g>

<!-- ceiling vent and the folded upper berth -->
<rect x="452" y="126" width="96" height="16" rx="3" fill="#241b12"/>
<g stroke="#3b2f22" stroke-width="2">
  <path d="M462 128 L462 140"/><path d="M478 128 L478 140"/><path d="M494 128 L494 140"/>
  <path d="M510 128 L510 140"/><path d="M526 128 L526 140"/><path d="M540 128 L540 140"/>
</g>

<!-- berth lamp: the one warm thing in the room -->
<g>
  <rect x="606" y="176" width="220" height="200" fill="url(#mx-comp7-lamp)"/>
  <rect x="672" y="186" width="10" height="26" fill="#6b5326"/>
  <path d="M646 212 q31 -18 62 0 l-6 34 q-25 10 -50 0 z" fill="#8a6c30"/>
  <path d="M646 212 q31 -18 62 0 l-2 6 q-29 -14 -58 0 z" fill="#b28c3f"/>
  <ellipse cx="677" cy="248" rx="26" ry="8" fill="#ffd98a" opacity="0.75"/>
  <ellipse cx="677" cy="252" rx="72" ry="24" fill="#d9a441" opacity="0.12"/>
</g>
<rect width="1000" height="620" fill="url(#mx-comp7-glow)"/>

<!-- brass luggage racks on both walls -->
<g stroke="#6b5326" stroke-width="5" fill="none">
  <path d="M20 118 L246 176"/><path d="M20 148 L246 198"/>
  <path d="M980 118 L754 176"/><path d="M980 148 L754 198"/>
</g>
<g stroke="#6b5326" stroke-width="3">
  <path d="M78 132 L78 160"/><path d="M164 154 L164 180"/>
  <path d="M922 132 L922 160"/><path d="M836 154 L836 180"/>
</g>
<path d="M60 118 L182 150 L182 186 L60 156 Z" fill="#4a3524"/>
<path d="M60 118 L182 150 L182 158 L60 128 Z" fill="#5c4229"/>
<g stroke="#33271a" stroke-width="3">
  <path d="M92 128 L92 166"/><path d="M148 143 L148 178"/>
</g>

<!-- THE FORCED CORRIDOR DOOR, left wall: chain plate torn out, bolt bent -->
<g>
  <path d="M40 88 L190 137 L190 455 L40 560 Z" fill="#0b0906"/>
  <path d="M52 100 L182 142 L182 448 L52 546 Z" fill="#0e0b08"/>
  <path d="M120 122 L152 132 L152 452 L120 486 Z" fill="#d9a441" opacity="0.16"/>
  <path d="M132 126 L142 129 L142 456 L132 472 Z" fill="#ffd98a" opacity="0.18"/>
  <path d="M36 96 L124 124 L118 470 L34 552 Z" fill="url(#mx-comp7-mahog)"/>
  <path d="M46 122 L110 143 L106 300 L46 316 Z" fill="none" stroke="#4f3d28" stroke-width="3"/>
  <path d="M46 336 L106 328 L102 448 L44 500 Z" fill="none" stroke="#4f3d28" stroke-width="3"/>
  <g fill="#a08453">
    <path d="M124 208 l26 10 l-14 6 l16 10 l-30 -12 z"/>
    <path d="M120 250 l34 12 l-18 5 l22 12 l-40 -16 z"/>
    <path d="M122 300 l24 10 l-13 6 l17 9 l-30 -12 z"/>
    <path d="M126 344 l30 12 l-16 4 l18 10 l-34 -14 z"/>
  </g>
  <g fill="#6b5a45">
    <path d="M118 226 l20 8 l-20 4 z"/><path d="M116 276 l22 8 l-22 5 z"/><path d="M118 322 l18 7 l-18 4 z"/>
  </g>
  <!-- the chain plate: came away whole, four screws still in it -->
  <g>
    <path d="M150 244 l30 10 l0 40 l-30 -12 z" fill="#8a6c30"/>
    <path d="M154 250 l22 8 l0 30 l-22 -9 z" fill="#b28c3f"/>
    <g fill="#5c4229">
      <circle cx="160" cy="258" r="3.4"/><circle cx="171" cy="262" r="3.4"/>
      <circle cx="160" cy="278" r="3.4"/><circle cx="171" cy="282" r="3.4"/>
    </g>
    <g fill="#e8dcbb" opacity="0.6">
      <circle cx="160" cy="258" r="1.2"/><circle cx="171" cy="262" r="1.2"/>
    </g>
    <path d="M148 268 q-16 22 -22 44 q-4 16 6 26" fill="none" stroke="#9b7a3f" stroke-width="4" stroke-linecap="round"/>
    <g fill="none" stroke="#c8a75c" stroke-width="2">
      <ellipse cx="140" cy="286" rx="5" ry="4"/><ellipse cx="132" cy="304" rx="5" ry="4"/>
      <ellipse cx="128" cy="322" rx="5" ry="4"/><ellipse cx="132" cy="338" rx="5" ry="4"/>
    </g>
    <g fill="#cfc6b2" opacity="0.75">
      <ellipse cx="176" cy="252" rx="6" ry="3"/><ellipse cx="182" cy="288" rx="5" ry="3"/>
    </g>
  </g>
  <!-- the brass privacy bolt, bent in its torn keeper -->
  <g>
    <path d="M148 372 l30 10 l0 22 l-30 -10 z" fill="#8a6c30"/>
    <path d="M124 376 l28 8 l-2 14 l-28 -8 z" fill="#c8a75c"/>
    <path d="M150 382 l24 8 l-8 6 l-18 -6 z" fill="#e2c374"/>
    <path d="M176 388 l14 6 l-4 12 l-12 -8 z" fill="#6b5326"/>
  </g>
  <g fill="#8a7148">
    <path d="M172 500 l34 8 l-30 4 z"/><path d="M198 528 l28 6 l-26 5 z"/><path d="M154 546 l24 5 l-22 5 z"/>
  </g>
</g>

<!-- THE COMMUNICATING DOOR to compartment 8, right wall -->
<g>
  <path d="M806 132 L964 84 L964 566 L806 458 Z" fill="#33271a"/>
  <path d="M814 142 L956 98 L956 552 L814 450 Z" fill="url(#mx-comp7-mahog)"/>
  <path d="M826 162 L946 124 L946 288 L826 282 Z" fill="none" stroke="#4f3d28" stroke-width="3.5"/>
  <path d="M826 314 L946 316 L946 500 L826 424 Z" fill="none" stroke="#4f3d28" stroke-width="3.5"/>
  <path d="M814 142 L826 146 L826 452 L814 450 Z" fill="#1b140d"/>
  <g>
    <rect x="828" y="292" width="34" height="16" rx="4" fill="#8a6c30"/>
    <rect x="833" y="295" width="24" height="9" rx="3" fill="#c8a75c"/>
    <path d="M842 306 l14 0 l3 30 l-16 0 z" fill="#9b7a3f"/>
    <ellipse cx="850" cy="338" rx="9" ry="6" fill="#c8a75c"/>
    <path d="M820 296 l10 2 l0 10 l-10 -2 z" fill="#e8dcbb"/>
  </g>
  <ellipse cx="906" cy="306" rx="11" ry="9" fill="#9b7a3f"/>
  <ellipse cx="906" cy="304" rx="5" ry="4" fill="#e2c374"/>
  <path d="M814 146 L820 148 L820 450 L814 450 Z" fill="#8fa4c0" opacity="0.2"/>
</g>

<!-- the blood-settled stain under the chair, long dried -->
<ellipse cx="404" cy="512" rx="104" ry="28" fill="#2f1310" opacity="0.95"/>
<ellipse cx="398" cy="510" rx="74" ry="19" fill="#4a1a14" opacity="0.6"/>
<ellipse cx="372" cy="516" rx="30" ry="9" fill="#3a1512"/>

<!-- THE ARMCHAIR and Ambrose Keene, where the mountain found him -->
<g>
  <path d="M296 300 q104 -46 208 0 l0 176 l-208 0 z" fill="#2a2118"/>
  <path d="M312 316 q88 -38 176 0 l0 150 l-176 0 z" fill="url(#mx-comp7-chair)"/>
  <g fill="#39422c">
    <circle cx="352" cy="356" r="5"/><circle cx="400" cy="346" r="5"/><circle cx="448" cy="356" r="5"/>
    <circle cx="352" cy="404" r="5"/><circle cx="448" cy="404" r="5"/>
  </g>
  <path d="M286 396 q22 -24 44 -8 l0 76 l-44 0 z" fill="#33271a"/>
  <path d="M470 396 q22 -16 44 8 l0 68 l-44 0 z" fill="#33271a"/>
  <path d="M296 452 l208 0 l16 44 l-240 0 z" fill="#4a5539"/>
  <path d="M296 452 l208 0 l4 10 l-216 0 z" fill="#6e7b56"/>
  <rect x="292" y="494" width="18" height="34" fill="#241b12"/>
  <rect x="492" y="494" width="18" height="34" fill="#241b12"/>
  <g>
    <path d="M342 348 q58 -32 118 0 l4 96 l-126 0 z" fill="#1e1a16"/>
    <path d="M358 354 q42 -20 84 0 l-6 38 l-72 0 z" fill="#26221c"/>
    <!-- the throat, bared where the collar has gone slack -->
    <path d="M383 296 l34 0 l0 46 l-34 0 z" fill="#a08d70"/>
    <path d="M383 296 l10 0 l0 46 l-10 0 z" fill="#8c7a60"/>
    <g transform="rotate(-7 400 288)">
      <ellipse cx="400" cy="286" rx="25" ry="29" fill="#b3a184"/>
      <path d="M376 274 q24 -20 48 0 q2 -24 -24 -24 q-26 0 -24 24 z" fill="#6a625a"/>
      <path d="M376 274 q-3 14 1 24 l5 -4 q-3 -11 -1 -19 z" fill="#6a625a"/>
      <path d="M424 274 q3 14 -1 24 l-5 -4 q3 -11 1 -19 z" fill="#6a625a"/>
      <path d="M382 268 q18 -12 36 -1" fill="none" stroke="#8b8279" stroke-width="2" opacity="0.6"/>
      <g stroke="#4a3f31" stroke-width="2.6" stroke-linecap="round">
        <line x1="383" y1="288" x2="394" y2="288"/><line x1="406" y1="288" x2="417" y2="288"/>
      </g>
      <g stroke="#8d7c62" stroke-width="1.7" stroke-linecap="round" opacity="0.7">
        <line x1="382" y1="279" x2="394" y2="277"/><line x1="406" y1="277" x2="418" y2="279"/>
      </g>
      <line x1="391" y1="304" x2="409" y2="304" stroke="#6b5a45" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M380 294 q4 14 20 17" fill="none" stroke="#9c8a6d" stroke-width="1.5" opacity="0.6"/>
    </g>
    <!-- THE STRAP MARK: one broad band, stitching printed at both edges -->
    <path d="M381 314 l38 -2 l1 17 l-38 2 z" fill="#4e1a14"/>
    <path d="M381 314 l38 -2 l0.6 4 l-38 2 z" fill="#6b291f" opacity="0.8"/>
    <g fill="#8a4032" opacity="0.9">
      <circle cx="386" cy="317" r="1.5"/><circle cx="394" cy="316" r="1.5"/><circle cx="402" cy="316" r="1.5"/>
      <circle cx="410" cy="315" r="1.5"/><circle cx="417" cy="315" r="1.5"/>
      <circle cx="386" cy="328" r="1.5"/><circle cx="394" cy="328" r="1.5"/><circle cx="402" cy="327" r="1.5"/>
      <circle cx="410" cy="327" r="1.5"/><circle cx="417" cy="326" r="1.5"/>
    </g>
    <!-- the loose collar, the dark tie -->
    <path d="M370 338 l60 0 l8 24 l-76 0 z" fill="#e3d5ac"/>
    <path d="M386 338 l28 0 l-2 12 l-24 0 z" fill="#8c7a60"/>
    <path d="M374 340 l16 18 l-22 6 z" fill="#f0e7ce"/>
    <path d="M426 340 l-16 18 l22 6 z" fill="#f0e7ce"/>
    <path d="M394 356 l12 0 l5 48 l-22 0 z" fill="#39150f"/>
    <path d="M394 356 l12 0 l1 6 l-14 0 z" fill="#4d1c15"/>
    <path d="M364 366 l36 26 l-2 54 l-34 0 z" fill="#241f19"/>
    <path d="M436 366 l-36 26 l2 54 l34 0 z" fill="#2b251e"/>
    <g fill="#9b7a3f">
      <circle cx="400" cy="404" r="3"/><circle cx="400" cy="420" r="3"/><circle cx="400" cy="436" r="3"/>
    </g>
    <path d="M370 394 q22 18 30 4" fill="none" stroke="#9b7a3f" stroke-width="2.2"/>
    <path d="M312 400 q30 -12 50 6 l-6 26 l-44 0 z" fill="#1e1a16"/>
    <path d="M306 424 q16 -10 30 -2 q6 8 -2 14 q-18 6 -30 -2 z" fill="#a08d70"/>
    <g stroke="#8c7a60" stroke-width="1.3" stroke-linecap="round">
      <line x1="310" y1="430" x2="328" y2="432"/><line x1="311" y1="435" x2="327" y2="436"/>
    </g>
    <path d="M446 400 q32 -10 52 8 l-6 26 l-46 0 z" fill="#1e1a16"/>
    <path d="M474 424 q16 -10 30 -2 q6 8 -2 14 q-18 6 -30 -2 z" fill="#9c8869"/>
    <g stroke="#8c7a60" stroke-width="1.3" stroke-linecap="round">
      <line x1="478" y1="430" x2="496" y2="432"/><line x1="479" y1="435" x2="495" y2="436"/>
    </g>
    <!-- the lap, the knees at the front edge of the seat -->
    <path d="M352 434 l96 0 l16 56 l-128 0 z" fill="#1e1a16"/>
    <path d="M358 470 l84 0 l6 20 l-96 0 z" fill="#191510"/>
    <path d="M350 488 l46 0 l2 50 l-54 0 z" fill="#191510"/>
    <path d="M406 488 l46 0 l4 50 l-54 0 z" fill="#191510"/>
    <ellipse cx="370" cy="544" rx="27" ry="10" fill="#100d09"/>
    <ellipse cx="432" cy="544" rx="27" ry="10" fill="#100d09"/>
    <path d="M348 540 l44 0 l0 6 l-44 0 z" fill="#0b0906"/>
    <path d="M410 540 l44 0 l0 6 l-44 0 z" fill="#0b0906"/>
  </g>
</g>

<!-- side table: the ashtray, the cold Havana, the unstruck matches -->
<g>
  <ellipse cx="560" cy="462" rx="52" ry="15" fill="#4a3524"/>
  <ellipse cx="560" cy="456" rx="52" ry="15" fill="#5c4229"/>
  <rect x="554" y="466" width="13" height="62" fill="#3b2f22"/>
  <ellipse cx="560" cy="532" rx="27" ry="8" fill="#33271a"/>
  <ellipse cx="560" cy="450" rx="32" ry="11" fill="#a9a091"/>
  <ellipse cx="560" cy="447" rx="23" ry="7" fill="#6f6a61"/>
  <path d="M540 440 l20 -3 l0 7 l-20 3 z" fill="#cfc6b2"/>
  <!-- the cigar: gone out cold at two inches, ash unbroken -->
  <path d="M534 438 l32 -7 l2 9 l-32 7 z" fill="#4a3524"/>
  <path d="M564 431 l24 -5 l2 9 l-24 5 z" fill="#8e8e88"/>
  <path d="M584 427 l10 -2 l1 8 l-10 2 z" fill="#a9a091"/>
  <g stroke="#6b5a45" stroke-width="1" opacity="0.7">
    <path d="M540 438 l1 8"/><path d="M552 436 l1 8"/>
  </g>
  <!-- his matches, beside it, unstruck -->
  <g>
    <rect x="572" y="452" width="32" height="13" rx="2" fill="#e3d5ac"/>
    <rect x="572" y="452" width="32" height="4" rx="2" fill="#a8352a"/>
    <path d="M588 448 l24 -4 l1 4 l-24 4 z" fill="#e3d5ac"/>
    <circle cx="613" cy="444" r="3.2" fill="#a8352a"/>
    <path d="M584 456 l22 -5 l1 4 l-22 5 z" fill="#e3d5ac"/>
    <circle cx="607" cy="450" r="3.2" fill="#a8352a"/>
  </g>
</g>

<!-- THE WRITING DESK: the last column, the red pencil across it -->
<g>
  <path d="M566 350 L748 350 L764 378 L550 378 Z" fill="#5c4229"/>
  <path d="M566 350 L748 350 L750 356 L562 356 Z" fill="#7b5a35"/>
  <path d="M550 378 L764 378 L760 392 L554 392 Z" fill="#3b2f22"/>
  <rect x="566" y="392" width="12" height="60" fill="#33271a"/>
  <rect x="736" y="392" width="12" height="60" fill="#33271a"/>
  <path d="M556 392 L758 392 L754 400 L560 400 Z" fill="#241b12"/>
  <path d="M592 356 L726 356 L736 374 L582 374 Z" fill="#5f6b4a"/>
  <path d="M592 356 L726 356 L727 360 L590 360 Z" fill="#7d8a62"/>
  <path d="M604 356 L706 356 L714 372 L596 372 Z" fill="#f0e7ce"/>
  <g stroke="#3a3128" stroke-width="1.5" opacity="0.85">
    <path d="M608 360 L700 360"/><path d="M606 364 L704 364"/><path d="M604 368 L698 368"/>
    <path d="M612 371 L676 371"/>
  </g>
  <path d="M628 352 L698 352 L702 358 L624 358 Z" fill="#e3d5ac"/>
  <path d="M632 355 L692 355" stroke="#3a3128" stroke-width="1.3" opacity="0.7"/>
  <path d="M598 374 L716 358 L718 364 L600 380 Z" fill="#a8352a"/>
  <path d="M716 358 L724 357 L726 362 L718 364 Z" fill="#cbb98f"/>
  <path d="M724 357 L729 356 L730 360 L726 361 Z" fill="#3a3128"/>
  <ellipse cx="740" cy="366" rx="12" ry="5" fill="#33271a"/>
  <circle cx="740" cy="364" r="5" fill="#9b7a3f"/>
</g>

<!-- the ink bottle the 8:12 lurch threw across the carpet -->
<g>
  <path d="M606 480 q26 -14 46 0 q22 12 6 26 q-30 14 -52 0 q-16 -12 0 -26 z" fill="#11151f"/>
  <path d="M618 486 q18 -8 30 2 q10 10 -2 15 q-22 8 -34 -2 q-8 -8 6 -15 z" fill="#0b0e16"/>
  <g fill="#1d2536">
    <path d="M622 464 l16 -6 l9 11 l-15 8 z"/><path d="M660 490 l15 -4 l5 11 l-16 4 z"/>
    <path d="M594 500 l13 -8 l9 10 l-15 8 z"/><path d="M638 458 l12 -3 l5 9 l-12 5 z"/>
  </g>
  <g stroke="#3d4a63" stroke-width="1.2" opacity="0.7" fill="none">
    <path d="M626 466 l10 8"/><path d="M664 494 l8 4"/>
  </g>
  <!-- the spray, fanned crisp across the edge of the dried stain -->
  <g fill="#141a27">
    <path d="M598 496 L470 512 L470 516 L599 500 Z"/>
    <path d="M602 502 L486 526 L487 530 L604 508 Z"/>
    <path d="M600 509 L512 542 L513 545 L602 513 Z"/>
    <ellipse cx="470" cy="510" rx="9" ry="3.4"/><ellipse cx="444" cy="519" rx="6" ry="2.6"/>
    <ellipse cx="418" cy="528" rx="4.6" ry="2.2"/><ellipse cx="486" cy="534" rx="7" ry="2.8"/>
    <ellipse cx="452" cy="500" rx="4.4" ry="2"/><ellipse cx="392" cy="524" rx="3.4" ry="1.7"/>
    <ellipse cx="514" cy="492" rx="5.4" ry="2.4"/><ellipse cx="536" cy="520" rx="4.4" ry="2"/>
    <ellipse cx="466" cy="546" rx="4" ry="1.8"/><ellipse cx="368" cy="536" rx="3" ry="1.5"/>
  </g>
</g>

<!-- cold coming up through the floor by the window -->
<rect x="240" y="330" width="520" height="180" fill="url(#mx-comp7-cold)"/>

<!-- foreground: the berth edge with its baize blanket -->
<path d="M726 620 L1000 620 L1000 452 q-150 44 -274 168 Z" fill="#39422c"/>
<path d="M746 620 L1000 620 L1000 468 q-140 42 -254 152 Z" fill="#4a5539"/>
<g fill="none" stroke="#39422c" stroke-width="4" opacity="0.9">
  <path d="M792 620 q80 -84 208 -128"/><path d="M846 620 q70 -66 154 -100"/>
</g>
<path d="M726 620 L1000 620 L1000 596 q-140 6 -232 24 Z" fill="#2f3627"/>

<rect width="1000" height="620" fill="url(#mx-comp7-vig)"/>
`,
  },

  corridor8: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_comp8: { x: 17, y: 57 },
      h_jumpseat: { x: 59, y: 58 },
    },
    svg: `
<defs>
  <linearGradient id="mx-cor8-wall" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#191309"/>
  </linearGradient>
  <linearGradient id="mx-cor8-wall2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#161009"/><stop offset="1" stop-color="#2a2118"/>
  </linearGradient>
  <linearGradient id="mx-cor8-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#25304a"/><stop offset="0.55" stop-color="#4d5b70"/><stop offset="1" stop-color="#9fb0c4"/>
  </linearGradient>
  <linearGradient id="mx-cor8-mahog" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3b2f22"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <radialGradient id="mx-cor8-glow" cx="0.14" cy="0.5" r="0.6">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-cor8-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-cor8-cold" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#8fa4c0" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#8fa4c0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-cor8-vig" cx="0.5" cy="0.45" r="0.8">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="#14110d"/>

<!-- the swaying tunnel: ceiling, floor, two walls, one bulkhead -->
<path d="M0 0 L1000 0 L720 200 L520 200 Z" fill="#191309"/>
<g stroke="#241b12" stroke-width="3">
  <path d="M120 0 L536 200"/><path d="M360 0 L580 200"/><path d="M640 0 L662 200"/><path d="M880 0 L706 200"/>
</g>
<path d="M0 620 L1000 620 L720 420 L520 420 Z" fill="#1a140e"/>
<path d="M0 0 L520 200 L520 420 L0 620 Z" fill="url(#mx-cor8-wall)"/>
<path d="M1000 0 L720 200 L720 420 L1000 620 Z" fill="url(#mx-cor8-wall2)"/>

<!-- dado and skirting running away down both walls -->
<g stroke="#3b2f22" stroke-width="4" fill="none">
  <path d="M0 380 L520 340"/><path d="M1000 380 L720 340"/>
  <path d="M0 596 L520 416"/><path d="M1000 596 L720 416"/>
</g>
<g stroke="#33271a" stroke-width="2.5" fill="none" opacity="0.8">
  <path d="M0 150 L520 232"/><path d="M1000 150 L720 232"/>
</g>

<!-- carpet runner -->
<path d="M120 620 L760 620 L706 420 L546 420 Z" fill="#3a2a1d"/>
<path d="M168 620 L716 620 L692 428 L560 428 Z" fill="none" stroke="#5a4128" stroke-width="4"/>
<g stroke="#4a3524" stroke-width="3" opacity="0.7">
  <path d="M196 620 L604 420"/><path d="M672 620 L648 420"/>
</g>
<g stroke="#33271a" stroke-width="2" opacity="0.6">
  <path d="M150 620 L740 620"/><path d="M212 552 L714 552"/><path d="M264 496 L694 496"/>
  <path d="M306 452 L678 452"/><path d="M338 428 L668 428"/>
</g>

<!-- night-lights turned down to embers, receding along the ceiling -->
<g>
  <rect x="150" y="0" width="200" height="140" fill="url(#mx-cor8-lamp)"/>
  <ellipse cx="248" cy="56" rx="26" ry="12" fill="#8a6c30"/>
  <ellipse cx="248" cy="52" rx="20" ry="9" fill="#ffd98a" opacity="0.8"/>
  <ellipse cx="418" cy="120" rx="17" ry="8" fill="#8a6c30"/>
  <ellipse cx="418" cy="117" rx="12" ry="6" fill="#ffd98a" opacity="0.75"/>
  <ellipse cx="512" cy="160" rx="11" ry="5" fill="#8a6c30"/>
  <ellipse cx="512" cy="158" rx="8" ry="4" fill="#ffd98a" opacity="0.7"/>
  <ellipse cx="566" cy="184" rx="8" ry="4" fill="#8a6c30"/>
  <ellipse cx="566" cy="182" rx="5" ry="3" fill="#ffd98a" opacity="0.65"/>
</g>

<!-- the north-side windows, the drift hissing along them -->
<g>
  <path d="M995 126 L890 171 L890 365 L995 384 Z" fill="url(#mx-cor8-night)"/>
  <path d="M872 179 L800 210 L800 350 L872 362 Z" fill="url(#mx-cor8-night)"/>
  <path d="M786 216 L742 234 L742 340 L786 347 Z" fill="url(#mx-cor8-night)"/>
  <!-- packed snow climbing the lower panes -->
  <path d="M995 320 L890 314 L890 365 L995 384 Z" fill="#8fa4c0" opacity="0.85"/>
  <path d="M872 318 L800 312 L800 350 L872 362 Z" fill="#8fa4c0" opacity="0.8"/>
  <path d="M786 316 L742 312 L742 340 L786 347 Z" fill="#8fa4c0" opacity="0.75"/>
  <path d="M995 344 L890 336 L890 365 L995 384 Z" fill="#c6d2e0" opacity="0.9"/>
  <path d="M872 336 L800 330 L800 350 L872 362 Z" fill="#c6d2e0" opacity="0.85"/>
  <g stroke="#c6d2e0" stroke-width="1.6" opacity="0.4">
    <path d="M910 190 l64 -14"/><path d="M906 216 l72 -12"/><path d="M914 248 l62 -10"/>
    <path d="M818 222 l44 -8"/><path d="M814 250 l50 -6"/><path d="M752 240 l28 -4"/>
  </g>
  <g fill="#e8eef4" opacity="0.5">
    <ellipse cx="946" cy="206" rx="9" ry="3"/><ellipse cx="930" cy="272" rx="7" ry="2.5"/>
    <ellipse cx="840" cy="238" rx="6" ry="2.2"/><ellipse cx="766" cy="266" rx="5" ry="2"/>
  </g>
  <!-- brass frames and the intact lifting straps -->
  <g fill="none" stroke="#6b5326" stroke-width="7">
    <path d="M995 126 L890 171 L890 365 L995 384 Z"/>
    <path d="M872 179 L800 210 L800 350 L872 362 Z"/>
    <path d="M786 216 L742 234 L742 340 L786 347 Z"/>
  </g>
  <path d="M938 152 l22 -9 l0 62 q-11 8 -22 0 z" fill="#4a3524"/>
  <path d="M840 194 l16 -6 l0 46 q-8 6 -16 0 z" fill="#4a3524"/>
  <g stroke="#6b5a45" stroke-width="1.2" opacity="0.8">
    <path d="M944 152 l0 56"/><path d="M954 148 l0 58"/><path d="M845 194 l0 42"/>
  </g>
</g>
<rect x="700" y="120" width="300" height="400" fill="url(#mx-cor8-cold)"/>

<!-- heater grille running under the windows -->
<path d="M1000 470 L720 396 L720 420 L1000 500 Z" fill="#241b12"/>
<g stroke="#3b2f22" stroke-width="3">
  <path d="M986 468 L986 494"/><path d="M940 456 L940 482"/><path d="M894 444 L894 470"/>
  <path d="M848 432 L848 456"/><path d="M802 420 L802 442"/><path d="M756 406 L756 428"/>
</g>
<path d="M1000 466 L720 394 L720 400 L1000 474 Z" fill="#4a3524"/>

<!-- brass handrail down the window wall -->
<g stroke="#6b5326" stroke-width="6" fill="none" stroke-linecap="round">
  <path d="M1000 400 L720 348"/>
</g>
<g stroke="#8a6c30" stroke-width="4">
  <path d="M960 392 L958 372"/><path d="M868 374 L866 358"/><path d="M790 360 L789 348"/>
</g>

<!-- the far bulkhead and the door to the next car -->
<rect x="520" y="200" width="200" height="220" fill="#241b12"/>
<rect x="520" y="200" width="200" height="10" fill="#3b2f22"/>
<rect x="640" y="224" width="66" height="196" fill="#2f2417"/>
<rect x="648" y="238" width="50" height="86" fill="#1b2436"/>
<rect x="648" y="238" width="50" height="86" fill="#d9a441" opacity="0.18"/>
<g stroke="#6b5326" stroke-width="3">
  <path d="M673 238 L673 324"/><path d="M648 281 L698 281"/>
</g>
<circle cx="650" cy="342" r="6" fill="#9b7a3f"/>
<g fill="none" stroke="#3b2f22" stroke-width="3">
  <rect x="532" y="228" width="92" height="66"/><rect x="532" y="304" width="92" height="66"/>
</g>

<!-- THE PORTER'S JUMP SEAT: the whole sleeper in one sightline -->
<g>
  <path d="M540 300 L646 300 L642 316 L544 316 Z" fill="#4a3524"/>
  <path d="M540 300 L646 300 L645 304 L541 304 Z" fill="#6b5326"/>
  <path d="M548 316 L638 316 L634 328 L552 328 Z" fill="#33271a"/>
  <rect x="556" y="252" width="74" height="48" rx="4" fill="#3b2f22"/>
  <rect x="562" y="258" width="62" height="36" rx="3" fill="#4a3524"/>
  <g stroke="#5c4229" stroke-width="2">
    <path d="M576 258 L576 294"/><path d="M594 258 L594 294"/><path d="M612 258 L612 294"/>
  </g>
  <g stroke="#8a6c30" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M552 316 L560 300"/><path d="M634 316 L626 300"/>
  </g>
  <g stroke="#6b5326" stroke-width="4" fill="none">
    <path d="M556 328 L560 372"/><path d="M630 328 L626 372"/>
  </g>
  <rect x="552" y="368" width="84" height="7" rx="3" fill="#6b5326"/>
  <!-- his cloth, folded over the seat back -->
  <path d="M624 254 l24 4 l-4 26 l-22 -5 z" fill="#e3d5ac"/>
  <path d="M624 254 l24 4 l-1 6 l-23 -4 z" fill="#f0e7ce"/>
  <ellipse cx="592" cy="222" rx="16" ry="7" fill="#8a6c30"/>
  <ellipse cx="592" cy="220" rx="11" ry="5" fill="#ffd98a" opacity="0.8"/>
  <ellipse cx="592" cy="290" rx="120" ry="96" fill="#ffd98a" opacity="0.05"/>
</g>

<!-- COMPARTMENT 8: the secretary's room, standing open to the corridor -->
<g>
  <path d="M60 103 L250 156 L250 511 L60 580 Z" fill="#241b12"/>
  <path d="M74 122 L238 168 L238 498 L74 560 Z" fill="#2f2417"/>
  <rect x="40" y="100" width="230" height="490" fill="url(#mx-cor8-lamp)" opacity="0.7"/>
  <!-- its window: the drift outside, and the strap CUT OFF at the buckle -->
  <path d="M96 214 L222 240 L222 348 L96 364 Z" fill="url(#mx-cor8-night)"/>
  <path d="M96 306 L222 300 L222 348 L96 364 Z" fill="#8fa4c0" opacity="0.85"/>
  <path d="M96 326 L222 318 L222 348 L96 364 Z" fill="#c6d2e0" opacity="0.85"/>
  <g stroke="#c6d2e0" stroke-width="1.4" opacity="0.35">
    <path d="M112 258 l60 8"/><path d="M120 282 l64 8"/>
  </g>
  <path d="M96 214 L222 240 L222 348 L96 364 Z" fill="none" stroke="#6b5326" stroke-width="7"/>
  <path d="M156 226 L164 228 L164 356 L156 357 Z" fill="#4a3524" opacity="0.6"/>
  <path d="M92 352 L226 344 L226 360 L92 370 Z" fill="#4a3524"/>
  <!-- the buckle, and the two-inch stub of strap left in it -->
  <rect x="168" y="352" width="36" height="14" rx="3" fill="#9b7a3f"/>
  <rect x="174" y="355" width="24" height="8" rx="2" fill="#c8a75c"/>
  <path d="M172 366 l26 2 l-2 20 l-22 -2 z" fill="#4a3524"/>
  <path d="M172 384 l24 2 l-1 6 l-23 -2 z" fill="#e8dcbb"/>
  <g stroke="#6b5a45" stroke-width="1.3" opacity="0.85">
    <path d="M178 367 l-1 18"/><path d="M190 368 l-1 18"/>
  </g>
  <!-- eleven years of carbons, banded; the typewriter cased beside them -->
  <path d="M84 400 L232 386 L232 404 L84 420 Z" fill="#4a3524"/>
  <path d="M84 420 L232 404 L232 462 L84 482 Z" fill="#33271a"/>
  <path d="M104 356 L206 344 L212 380 L100 392 Z" fill="#26221c"/>
  <path d="M104 356 L206 344 L206 352 L104 364 Z" fill="#3a342a"/>
  <rect x="140" y="332" width="32" height="12" rx="5" fill="none" stroke="#6b5326" stroke-width="3.4"/>
  <g>
    <path d="M92 484 L162 476 L162 508 L92 518 Z" fill="#e3d5ac"/>
    <path d="M92 493 L162 485 L162 494 L92 502 Z" fill="#5d1f18" opacity="0.8"/>
    <path d="M170 474 L228 468 L228 498 L170 504 Z" fill="#f0e7ce"/>
    <path d="M170 483 L228 477 L228 485 L170 491 Z" fill="#5d1f18" opacity="0.8"/>
    <path d="M100 524 L176 514 L176 546 L100 558 Z" fill="#e3d5ac"/>
    <path d="M100 533 L176 523 L176 532 L100 542 Z" fill="#5d1f18" opacity="0.8"/>
    <g stroke="#b9ad91" stroke-width="1.3" opacity="0.8">
      <path d="M96 506 L158 499"/><path d="M174 494 L224 490"/><path d="M104 549 L172 540"/>
    </g>
  </g>
  <!-- the leaf of the door, swung back flat against the corridor wall -->
  <path d="M250 156 L272 163 L272 505 L250 511 Z" fill="url(#mx-cor8-mahog)"/>
  <path d="M40 96 L60 103 L60 580 L40 588 Z" fill="#1b140d"/>
  <rect x="256" y="318" width="9" height="26" rx="3" fill="#9b7a3f"/>
</g>

<!-- COMPARTMENT 7: the splintered door, chain plate hanging out of the frame -->
<g>
  <path d="M275 163 L375 190 L375 466 L275 502 Z" fill="url(#mx-cor8-mahog)"/>
  <path d="M285 184 L367 206 L367 318 L285 326 Z" fill="none" stroke="#4f3d28" stroke-width="3"/>
  <path d="M285 344 L367 340 L367 440 L285 474 Z" fill="none" stroke="#4f3d28" stroke-width="3"/>
  <path d="M275 163 L289 167 L289 498 L275 502 Z" fill="#0d0a07"/>
  <path d="M289 167 L301 171 L301 494 L289 498 Z" fill="#d9a441" opacity="0.14"/>
  <g fill="#a08453">
    <path d="M289 268 l24 8 l-13 5 l15 9 l-28 -11 z"/>
    <path d="M287 314 l30 10 l-16 4 l19 10 l-34 -13 z"/>
    <path d="M289 360 l22 9 l-12 5 l16 8 l-27 -11 z"/>
  </g>
  <path d="M311 300 l22 8 l0 30 l-22 -9 z" fill="#8a6c30"/>
  <path d="M315 306 l14 5 l0 20 l-14 -6 z" fill="#b28c3f"/>
  <g fill="#5c4229">
    <circle cx="319" cy="312" r="2.4"/><circle cx="326" cy="315" r="2.4"/>
    <circle cx="319" cy="325" r="2.4"/><circle cx="326" cy="328" r="2.4"/>
  </g>
  <path d="M310 320 q-12 16 -16 32 q-3 12 4 20" fill="none" stroke="#9b7a3f" stroke-width="3.4" stroke-linecap="round"/>
  <rect x="348" y="326" width="10" height="24" rx="3" fill="#9b7a3f"/>
  <g fill="#8a7148">
    <path d="M336 486 l22 6 l-20 4 z"/><path d="M362 500 l18 5 l-17 4 z"/>
  </g>
</g>

<!-- the seltzer tray, still standing where the porter set it down -->
<g>
  <ellipse cx="408" cy="490" rx="38" ry="12" fill="#8a6c30"/>
  <ellipse cx="408" cy="487" rx="32" ry="9" fill="#b28c3f"/>
  <path d="M390 446 q11 -9 22 0 l4 36 q-15 7 -30 0 z" fill="#7d8a80" opacity="0.85"/>
  <path d="M394 450 q9 -7 16 0 l2 29 q-11 5 -20 0 z" fill="#c6d2e0" opacity="0.5"/>
  <rect x="394" y="432" width="15" height="15" rx="3" fill="#9b7a3f"/>
  <path d="M409 436 l13 4 l-2 6 l-11 -4 z" fill="#c8a75c"/>
  <path d="M424 464 l19 0 l-2 20 l-15 0 z" fill="#e8f0f4" opacity="0.5"/>
  <ellipse cx="433" cy="464" rx="9.5" ry="3.2" fill="#f0f4f8" opacity="0.6"/>
  <ellipse cx="442" cy="500" rx="20" ry="6" fill="#3d4a63" opacity="0.5"/>
</g>

<!-- COMPARTMENT 6: Frances Dell in her own doorway, watching you work -->
<g>
  <path d="M396 196 L470 217 L470 431 L396 459 Z" fill="#100d09"/>
  <path d="M403 208 L463 225 L463 424 L403 448 Z" fill="#1c1710"/>
  <rect x="396" y="210" width="74" height="230" fill="url(#mx-cor8-lamp)" opacity="0.3"/>
  <g>
    <path d="M414 288 q18 -10 36 0 l5 96 l-46 0 z" fill="#3f4630"/>
    <path d="M426 288 l13 0 l3 92 l-19 0 z" fill="#e3d5ac"/>
    <path d="M414 294 l-5 68 l10 2 l5 -68 z" fill="#4a5539"/>
    <path d="M450 294 l5 68 l-10 2 l-5 -68 z" fill="#4a5539"/>
    <ellipse cx="412" cy="368" rx="7" ry="5" fill="#b3a184"/>
    <ellipse cx="452" cy="368" rx="7" ry="5" fill="#b3a184"/>
    <path d="M420 380 l26 0 l2 42 l-30 0 z" fill="#f0e7ce" opacity="0.85"/>
    <ellipse cx="424" cy="428" rx="10" ry="4.5" fill="#100d09"/>
    <ellipse cx="446" cy="428" rx="10" ry="4.5" fill="#100d09"/>
    <ellipse cx="433" cy="264" rx="15" ry="18" fill="#b3a184"/>
    <path d="M418 260 q15 -21 30 0 q3 -21 -15 -21 q-18 0 -15 21 z" fill="#3a2a1d"/>
    <path d="M446 254 q10 7 7 20 l-7 -3 z" fill="#3a2a1d"/>
    <g stroke="#4a3f31" stroke-width="1.7" stroke-linecap="round">
      <line x1="425" y1="264" x2="431" y2="264"/><line x1="436" y1="264" x2="442" y2="264"/>
    </g>
    <line x1="429" y1="276" x2="437" y2="276" stroke="#6b5a45" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M421 284 l24 0 l0 7 l-24 0 z" fill="#f0e7ce"/>
  </g>
</g>

<!-- further doors, dwindling toward the vestibule -->
<g>
  <path d="M486 221 L520 231 L520 413 L486 426 Z" fill="url(#mx-cor8-mahog)"/>
  <path d="M491 232 L515 240 L515 402 L491 414 Z" fill="none" stroke="#4f3d28" stroke-width="2.5"/>
  <rect x="508" y="308" width="7" height="18" rx="3" fill="#9b7a3f"/>
</g>

<!-- ceiling vents and the ventilator ducts -->
<g fill="#241b12">
  <path d="M292 70 L388 104 L378 118 L282 82 Z"/>
  <path d="M452 130 L520 156 L514 166 L446 138 Z"/>
  <path d="M538 170 L586 189 L582 196 L534 176 Z"/>
</g>
<g stroke="#3b2f22" stroke-width="2.6">
  <path d="M306 76 L298 90"/><path d="M330 84 L322 98"/><path d="M354 93 L346 106"/><path d="M376 101 L369 114"/>
  <path d="M466 136 L461 145"/><path d="M486 143 L481 152"/><path d="M506 151 L501 160"/>
  <path d="M552 176 L549 182"/><path d="M566 182 L563 188"/><path d="M578 187 L575 193"/>
</g>

<!-- brass fittings down the door wall: a sconce, a bell push, a coat hook -->
<g>
  <path d="M258 200 l24 6 l-4 22 l-22 -6 z" fill="#8a6c30"/>
  <path d="M262 206 l16 4 l-2 14 l-14 -4 z" fill="#ffd98a" opacity="0.55"/>
  <ellipse cx="270" cy="216" rx="30" ry="22" fill="#ffd98a" opacity="0.07"/>
  <circle cx="386" cy="238" r="6" fill="#9b7a3f"/><circle cx="386" cy="238" r="2.6" fill="#e2c374"/>
  <circle cx="478" cy="252" r="5" fill="#9b7a3f"/>
  <path d="M296 232 l14 4 l0 8 l-14 -4 z" fill="#6b5326"/>
</g>

<!-- pools of light and shadow the doors throw on the runner -->
<g fill="#0d0a07" opacity="0.45">
  <path d="M272 512 L336 492 L352 508 L286 532 Z"/>
  <path d="M470 442 L512 430 L520 440 L478 452 Z"/>
</g>
<path d="M250 520 L272 505 L292 520 L268 540 Z" fill="#d9a441" opacity="0.08"/>

<!-- the corridor's warm end, and the cold pouring off the glass -->
<rect width="1000" height="620" fill="url(#mx-cor8-glow)"/>
<path d="M720 420 L1000 620 L620 620 Z" fill="#8fa4c0" opacity="0.06"/>

<!-- foreground: the near door jamb we are standing in -->
<path d="M0 0 L0 620 L28 620 L28 0 Z" fill="#0d0a07"/>
<path d="M950 0 L1000 0 L1000 620 L962 620 Z" fill="#0d0a07"/>

<rect width="1000" height="620" fill="url(#mx-cor8-vig)"/>
`,
  },

  dining: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_keenetable: { x: 13, y: 76 },
      h_wexlercase: { x: 86, y: 82 },
      h_steward: { x: 50, y: 46 },
    },
    svg: `
<defs>
  <linearGradient id="mx-diner-wall" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#191309"/>
  </linearGradient>
  <linearGradient id="mx-diner-wall2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#191309"/><stop offset="1" stop-color="#2a2118"/>
  </linearGradient>
  <linearGradient id="mx-diner-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#212b42"/><stop offset="0.6" stop-color="#48566c"/><stop offset="1" stop-color="#9fb0c4"/>
  </linearGradient>
  <linearGradient id="mx-diner-linen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ddd5bd"/><stop offset="1" stop-color="#b3aa8f"/>
  </linearGradient>
  <radialGradient id="mx-diner-glow" cx="0.5" cy="0.45" r="0.62">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-diner-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-diner-vig" cx="0.5" cy="0.45" r="0.8">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="#14110d"/>

<!-- the car: ceiling, floor, two walls of windows, the pantry end -->
<path d="M0 0 L1000 0 L600 200 L400 200 Z" fill="#211a11"/>
<g stroke="#2b2118" stroke-width="3">
  <path d="M180 0 L436 200"/><path d="M420 0 L490 200"/><path d="M580 0 L510 200"/><path d="M820 0 L564 200"/>
</g>
<path d="M0 620 L1000 620 L600 400 L400 400 Z" fill="#1a140e"/>
<path d="M250 620 L750 620 L604 404 L396 404 Z" fill="#3a2a1d"/>
<path d="M300 620 L700 620 L594 414 L406 414 Z" fill="none" stroke="#5a4128" stroke-width="4"/>
<g stroke="#33271a" stroke-width="2" opacity="0.6">
  <path d="M268 596 L732 596"/><path d="M320 522 L680 522"/><path d="M360 468 L640 468"/><path d="M386 430 L614 430"/>
</g>
<path d="M0 0 L400 200 L400 400 L0 620 Z" fill="url(#mx-diner-wall)"/>
<path d="M1000 0 L600 200 L600 400 L1000 620 Z" fill="url(#mx-diner-wall2)"/>
<g stroke="#3b2f22" stroke-width="4" fill="none">
  <path d="M0 596 L400 396"/><path d="M1000 596 L600 396"/>
  <path d="M0 380 L400 348"/><path d="M1000 380 L600 348"/>
</g>

<!-- night windows both sides, snow packed along their sills -->
<g>
  <path d="M10 115 L130 152 L130 331 L10 340 Z" fill="url(#mx-diner-night)"/>
  <path d="M150 158 L250 189 L250 321 L150 329 Z" fill="url(#mx-diner-night)"/>
  <path d="M268 195 L350 220 L350 314 L268 320 Z" fill="url(#mx-diner-night)"/>
  <path d="M990 115 L870 152 L870 331 L990 340 Z" fill="url(#mx-diner-night)"/>
  <path d="M850 158 L750 189 L750 321 L850 329 Z" fill="url(#mx-diner-night)"/>
  <path d="M732 195 L650 220 L650 314 L732 320 Z" fill="url(#mx-diner-night)"/>
  <g fill="#8fa4c0" opacity="0.85">
    <path d="M10 300 L130 296 L130 331 L10 340 Z"/><path d="M150 296 L250 292 L250 321 L150 329 Z"/>
    <path d="M268 292 L350 290 L350 314 L268 320 Z"/>
    <path d="M990 300 L870 296 L870 331 L990 340 Z"/><path d="M850 296 L750 292 L750 321 L850 329 Z"/>
    <path d="M732 292 L650 290 L650 314 L732 320 Z"/>
  </g>
  <g fill="#c6d2e0" opacity="0.8">
    <path d="M10 322 L130 314 L130 331 L10 340 Z"/><path d="M990 322 L870 314 L870 331 L990 340 Z"/>
    <path d="M150 312 L250 308 L250 321 L150 329 Z"/><path d="M850 312 L750 308 L750 321 L850 329 Z"/>
  </g>
  <g stroke="#c6d2e0" stroke-width="1.5" opacity="0.35">
    <path d="M30 180 l70 12"/><path d="M26 218 l80 12"/><path d="M40 254 l64 10"/>
    <path d="M970 180 l-70 12"/><path d="M974 218 l-80 12"/><path d="M960 254 l-64 10"/>
    <path d="M170 210 l58 10"/><path d="M830 210 l-58 10"/>
  </g>
  <g fill="none" stroke="#6b5326" stroke-width="7">
    <path d="M10 115 L130 152 L130 331 L10 340 Z"/><path d="M150 158 L250 189 L250 321 L150 329 Z"/>
    <path d="M268 195 L350 220 L350 314 L268 320 Z"/>
    <path d="M990 115 L870 152 L870 331 L990 340 Z"/><path d="M850 158 L750 189 L750 321 L850 329 Z"/>
    <path d="M732 195 L650 220 L650 314 L732 320 Z"/>
  </g>
  <g fill="#3b2f22">
    <path d="M64 133 L74 136 L74 336 L64 337 Z"/><path d="M196 173 L204 176 L204 325 L196 326 Z"/>
    <path d="M936 133 L926 136 L926 336 L936 337 Z"/><path d="M804 173 L796 176 L796 325 L804 326 Z"/>
  </g>
</g>

<!-- low emergency lights down the centre of the ceiling -->
<g>
  <rect x="330" y="0" width="340" height="260" fill="url(#mx-diner-lamp)"/>
  <ellipse cx="500" cy="64" rx="46" ry="16" fill="#5c4229"/>
  <ellipse cx="500" cy="60" rx="38" ry="12" fill="#d9a441" opacity="0.7"/>
  <ellipse cx="500" cy="132" rx="30" ry="11" fill="#5c4229"/>
  <ellipse cx="500" cy="129" rx="24" ry="8" fill="#d9a441" opacity="0.62"/>
  <ellipse cx="500" cy="176" rx="20" ry="8" fill="#5c4229"/>
  <ellipse cx="500" cy="174" rx="15" ry="5" fill="#d9a441" opacity="0.55"/>
</g>
<rect width="1000" height="620" fill="url(#mx-diner-glow)"/>

<!-- the pantry end: coffee kept alive on a spirit burner -->
<g>
  <rect x="400" y="200" width="200" height="200" fill="#241b12"/>
  <rect x="400" y="200" width="200" height="10" fill="#3b2f22"/>
  <rect x="408" y="300" width="184" height="14" fill="#4a3524"/>
  <rect x="408" y="314" width="184" height="86" fill="#2a2118"/>
  <g fill="none" stroke="#3b2f22" stroke-width="2.5">
    <rect x="416" y="324" width="80" height="30"/><rect x="504" y="324" width="80" height="30"/>
    <rect x="416" y="360" width="80" height="30"/><rect x="504" y="360" width="80" height="30"/>
  </g>
  <g fill="#9b7a3f">
    <ellipse cx="456" cy="339" rx="8" ry="3"/><ellipse cx="544" cy="339" rx="8" ry="3"/>
    <ellipse cx="456" cy="375" rx="8" ry="3"/><ellipse cx="544" cy="375" rx="8" ry="3"/>
  </g>
  <!-- the urn, the burner's blue tongue -->
  <path d="M418 250 q22 -12 44 0 l4 44 l-52 0 z" fill="#8a6c30"/>
  <path d="M424 256 q16 -8 32 0 l2 32 l-36 0 z" fill="#b28c3f"/>
  <rect x="432" y="238" width="16" height="14" rx="4" fill="#6b5326"/>
  <path d="M462 272 l14 6 l-4 8 l-12 -6 z" fill="#6b5326"/>
  <rect x="422" y="294" width="44" height="8" rx="2" fill="#33271a"/>
  <path d="M436 296 q8 -12 16 0 q-8 8 -16 0 z" fill="#6fa2c8" opacity="0.85"/>
  <path d="M440 296 q4 -8 8 0 q-4 5 -8 0 z" fill="#c6e0f0" opacity="0.8"/>
  <!-- ranked cups and a stack of saucers -->
  <g fill="#e3d5ac">
    <rect x="540" y="284" width="14" height="12" rx="2"/><rect x="558" y="284" width="14" height="12" rx="2"/>
    <rect x="576" y="284" width="14" height="12" rx="2"/>
  </g>
  <g fill="#cfc6b2">
    <ellipse cx="516" cy="296" rx="16" ry="4"/><ellipse cx="516" cy="290" rx="16" ry="4"/><ellipse cx="516" cy="284" rx="16" ry="4"/>
  </g>
  <!-- THE STEWARD, keeping his seatings like scripture -->
  <g>
    <path d="M474 268 q26 -14 52 0 l6 106 l-64 0 z" fill="#e8e2d0"/>
    <path d="M474 268 q26 -14 52 0 l2 12 q-28 -12 -54 0 z" fill="#f4f0e2"/>
    <g fill="#9b7a3f">
      <circle cx="500" cy="292" r="2.6"/><circle cx="500" cy="308" r="2.6"/><circle cx="500" cy="324" r="2.6"/>
    </g>
    <path d="M468 282 l-8 62 l12 3 l10 -60 z" fill="#e8e2d0"/>
    <path d="M532 282 l8 62 l-12 3 l-10 -60 z" fill="#e8e2d0"/>
    <ellipse cx="464" cy="350" rx="8" ry="6" fill="#b3a184"/>
    <ellipse cx="536" cy="350" rx="8" ry="6" fill="#b3a184"/>
    <ellipse cx="500" cy="242" rx="17" ry="20" fill="#b3a184"/>
    <path d="M483 238 q17 -22 34 0 q3 -22 -17 -22 q-20 0 -17 22 z" fill="#4a4238"/>
    <g stroke="#4a3f31" stroke-width="1.8" stroke-linecap="round">
      <line x1="491" y1="242" x2="497" y2="242"/><line x1="503" y1="242" x2="509" y2="242"/>
    </g>
    <line x1="494" y1="254" x2="506" y2="254" stroke="#6b5a45" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M486 264 l28 0 l0 8 l-28 0 z" fill="#f0e7ce"/>
    <path d="M494 268 l12 0 l0 22 l-12 0 z" fill="#26221c"/>
    <!-- his seating book, open against his forearm -->
    <path d="M448 336 l34 -6 l2 24 l-34 6 z" fill="#f0e7ce"/>
    <path d="M448 336 l34 -6 l1 4 l-34 6 z" fill="#cfc6b2"/>
    <g stroke="#8d7c62" stroke-width="1.2" opacity="0.85">
      <path d="M452 342 l26 -5"/><path d="M452 347 l26 -5"/><path d="M452 352 l20 -4"/>
    </g>
    <path d="M462 374 l76 0 l4 30 l-84 0 z" fill="#26221c"/>
  </g>
</g>

<!-- far tables, dwindling toward the pantry -->
<g>
  <path d="M336 372 L398 364 L410 376 L346 386 Z" fill="url(#mx-diner-linen)"/>
  <path d="M346 386 L410 376 L410 402 L346 414 Z" fill="#b3aa8f"/>
  <path d="M664 372 L602 364 L590 376 L654 386 Z" fill="url(#mx-diner-linen)"/>
  <path d="M654 386 L590 376 L590 402 L654 414 Z" fill="#b3aa8f"/>
  <g fill="#33271a">
    <rect x="352" y="344" width="42" height="26" rx="4"/><rect x="606" y="344" width="42" height="26" rx="4"/>
  </g>
  <g fill="#5f6b4a">
    <rect x="356" y="348" width="34" height="20" rx="3"/><rect x="610" y="348" width="34" height="20" rx="3"/>
  </g>
</g>

<!-- Dr. Voss, very straight at a cleared table, hands folded -->
<g>
  <ellipse cx="330" cy="486" rx="120" ry="18" fill="#100d09" opacity="0.55"/>
  <path d="M256 408 L376 390 L400 412 L282 434 Z" fill="url(#mx-diner-linen)"/>
  <path d="M282 434 L400 412 L400 458 L282 484 Z" fill="#b3aa8f"/>
  <path d="M256 408 L376 390 L377 396 L258 414 Z" fill="#e8e0c8"/>
  <g>
    <path d="M296 316 q34 -16 68 0 l10 88 l-88 0 z" fill="#3a3a46"/>
    <path d="M312 322 q18 -8 36 0 l-4 34 l-28 0 z" fill="#e3d5ac"/>
    <path d="M296 326 l-12 66 l14 4 l12 -62 z" fill="#3a3a46"/>
    <path d="M364 326 l12 66 l-14 4 l-12 -62 z" fill="#3a3a46"/>
    <path d="M306 396 q26 -14 52 0 l0 14 l-52 0 z" fill="#2f2f39"/>
    <ellipse cx="322" cy="400" rx="14" ry="7" fill="#b3a184"/>
    <ellipse cx="342" cy="400" rx="14" ry="7" fill="#c0ae90"/>
    <g stroke="#8d7c62" stroke-width="1.2" stroke-linecap="round">
      <line x1="312" y1="400" x2="330" y2="404"/><line x1="334" y1="398" x2="352" y2="402"/>
    </g>
    <ellipse cx="330" cy="286" rx="20" ry="23" fill="#b3a184"/>
    <path d="M310 282 q20 -25 40 0 q3 -26 -20 -26 q-23 0 -20 26 z" fill="#6a625a"/>
    <path d="M308 280 q-6 22 4 34 l7 -6 q-7 -12 -5 -26 z" fill="#6a625a"/>
    <path d="M352 280 q6 22 -4 34 l-7 -6 q7 -12 5 -26 z" fill="#6a625a"/>
    <g stroke="#4a3f31" stroke-width="2" stroke-linecap="round">
      <line x1="320" y1="286" x2="327" y2="286"/><line x1="333" y1="286" x2="340" y2="286"/>
    </g>
    <line x1="324" y1="300" x2="336" y2="300" stroke="#6b5a45" stroke-width="2" stroke-linecap="round"/>
    <path d="M318 310 l24 0 l2 10 l-28 0 z" fill="#f0e7ce"/>
  </g>
  <rect x="238" y="428" width="46" height="30" rx="4" fill="#33271a"/>
  <rect x="242" y="432" width="38" height="22" rx="3" fill="#5f6b4a"/>
</g>

<!-- Harold Wexler and the wreckage of a working supper -->
<g>
  <ellipse cx="670" cy="486" rx="120" ry="18" fill="#100d09" opacity="0.55"/>
  <path d="M744 408 L624 390 L600 412 L718 434 Z" fill="url(#mx-diner-linen)"/>
  <path d="M718 434 L600 412 L600 458 L718 484 Z" fill="#b3aa8f"/>
  <g>
    <path d="M704 316 q34 -16 68 0 l10 88 l-88 0 z" fill="#4a4034"/>
    <path d="M722 322 q16 -8 32 0 l-2 34 l-28 0 z" fill="#e3d5ac"/>
    <path d="M734 324 l8 0 l2 30 l-12 0 z" fill="#5d1f18"/>
    <path d="M704 326 l-12 66 l14 4 l12 -62 z" fill="#4a4034"/>
    <path d="M772 326 l12 66 l-14 4 l-12 -62 z" fill="#4a4034"/>
    <ellipse cx="696" cy="396" rx="13" ry="7" fill="#b3a184"/>
    <ellipse cx="782" cy="396" rx="13" ry="7" fill="#b3a184"/>
    <ellipse cx="738" cy="286" rx="20" ry="23" fill="#b3a184"/>
    <path d="M718 280 q20 -22 40 0 q3 -24 -20 -24 q-23 0 -20 24 z" fill="#5b5148"/>
    <g stroke="#4a3f31" stroke-width="2" stroke-linecap="round">
      <line x1="728" y1="286" x2="735" y2="286"/><line x1="741" y1="286" x2="748" y2="286"/>
    </g>
    <line x1="732" y1="300" x2="744" y2="300" stroke="#6b5a45" stroke-width="2" stroke-linecap="round"/>
    <path d="M726 310 l24 0 l2 10 l-28 0 z" fill="#f0e7ce"/>
  </g>
  <!-- papers, ashtray, the rye he keeps checking -->
  <g>
    <path d="M622 404 l64 -8 l4 16 l-66 10 z" fill="#f0e7ce"/>
    <path d="M636 396 l60 -6 l3 12 l-60 8 z" fill="#e3d5ac"/>
    <g stroke="#8d7c62" stroke-width="1.3" opacity="0.85">
      <path d="M628 410 l52 -7"/><path d="M629 415 l50 -7"/><path d="M642 400 l48 -6"/>
    </g>
    <path d="M700 400 l30 0 l-3 26 q-6 6 -12 6 q-6 0 -12 -6 z" fill="#efe8d2" opacity="0.95"/>
    <path d="M704 406 l22 0 l-2 16 q-4 4 -9 4 q-5 0 -9 -4 z" fill="#8a5a24"/>
    <ellipse cx="744" cy="418" rx="18" ry="6" fill="#cfc6b2"/>
    <ellipse cx="744" cy="416" rx="12" ry="4" fill="#8e8e88"/>
  </g>
  <!-- HIS BRIEFCASE, left gaping while he fetched another rye -->
  <g>
    <path d="M800 470 L960 442 L978 500 L818 536 Z" fill="#4a3524"/>
    <path d="M800 470 L960 442 L962 452 L802 480 Z" fill="#5c4229"/>
    <path d="M812 452 L956 428 L960 444 L816 470 Z" fill="#3b2f22"/>
    <path d="M812 452 L956 428 L956 434 L812 458 Z" fill="#6b5a45"/>
    <g fill="#f0e7ce">
      <path d="M828 440 L936 422 L940 452 L832 472 Z"/>
      <path d="M840 428 L930 414 L932 430 L842 444 Z"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.4" opacity="0.85">
      <path d="M836 448 L920 434"/><path d="M837 455 L922 441"/><path d="M838 462 L900 452"/>
      <path d="M848 432 L916 421"/>
    </g>
    <!-- the decoded wire, initialled; and the draft nobody delivered -->
    <path d="M856 462 L946 446 L950 470 L860 488 Z" fill="#e3d5ac"/>
    <g stroke="#5b5148" stroke-width="1.5" opacity="0.9">
      <path d="M864 470 L936 458"/><path d="M865 476 L938 464"/><path d="M866 482 L916 473"/>
    </g>
    <path d="M930 452 q10 -6 16 2 q-6 8 -16 2 z" fill="#a8352a" opacity="0.9"/>
    <path d="M876 492 L958 478 L962 496 L880 512 Z" fill="#cfe0d0"/>
    <g stroke="#7d8a80" stroke-width="1.3">
      <path d="M884 498 L946 488"/><path d="M885 504 L926 497"/>
    </g>
    <ellipse cx="946" cy="486" rx="9" ry="4" fill="#5f6b4a" opacity="0.8"/>
    <g fill="#9b7a3f">
      <rect x="878" y="452" width="16" height="10" rx="3"/>
    </g>
  </g>
</g>

<!-- KEENE'S TABLE, still set apart by the steward's sentiment -->
<g>
  <path d="M30 448 L212 422 L248 452 L64 486 Z" fill="url(#mx-diner-linen)"/>
  <path d="M30 448 L212 422 L214 430 L32 456 Z" fill="#e8e0c8"/>
  <path d="M64 486 L248 452 L248 560 L64 600 Z" fill="#b3aa8f"/>
  <path d="M64 486 L248 452 L248 462 L64 496 Z" fill="#c6bda3"/>
  <g stroke="#9d947c" stroke-width="2" opacity="0.7">
    <path d="M104 490 L102 592"/><path d="M162 480 L160 578"/><path d="M214 470 L212 566"/>
  </g>
  <!-- one cover, one chair -->
  <ellipse cx="126" cy="452" rx="40" ry="13" fill="#f4ecd6"/>
  <ellipse cx="126" cy="450" rx="30" ry="9" fill="#e3d5ac"/>
  <ellipse cx="126" cy="449" rx="22" ry="6" fill="#cfc6b2"/>
  <path d="M120 446 q10 -10 20 -2 q-8 8 -20 2 z" fill="#8a7a5c" opacity="0.7"/>
  <g fill="#cfc6b2">
    <path d="M78 452 l4 -14 l3 0 l1 14 z"/><path d="M86 450 l2 -14 l3 0 l0 14 z"/>
    <path d="M170 446 l16 -4 l1 5 l-16 4 z"/>
  </g>
  <!-- the napkin, and the flat prescription tin folded in it -->
  <path d="M186 436 L240 428 L252 446 L196 456 Z" fill="#f4ecd6"/>
  <path d="M186 436 L240 428 L242 434 L188 442 Z" fill="#ffffff" opacity="0.35"/>
  <path d="M196 440 L232 434 L238 446 L202 452 Z" fill="#b9b2a4"/>
  <path d="M196 440 L232 434 L233 438 L197 444 Z" fill="#d8d2c6"/>
  <path d="M204 442 L226 438 L227 442 L205 446 Z" fill="#a8352a" opacity="0.85"/>
  <!-- the soup he did not finish -->
  <ellipse cx="112" cy="440" rx="22" ry="8" fill="#e8e0c8"/>
  <ellipse cx="112" cy="439" rx="15" ry="5" fill="#8a7a4c"/>
  <!-- his chair, put back square by somebody who cared -->
  <rect x="86" y="378" width="92" height="74" rx="5" fill="#3b2f22"/>
  <rect x="96" y="388" width="72" height="54" rx="4" fill="#5f6b4a"/>
  <g stroke="#4a5539" stroke-width="2">
    <path d="M116 388 L116 442"/><path d="M148 388 L148 442"/>
  </g>
  <rect x="82" y="450" width="100" height="10" rx="3" fill="#33271a"/>
</g>

<!-- foreground: the back of an empty chair, close to the eye -->
<path d="M300 620 L316 512 q120 -34 244 -2 l14 110 z" fill="#241b12"/>
<path d="M330 596 L342 528 q104 -28 210 -2 l10 68 z" fill="#3f4630"/>
<g stroke="#33271a" stroke-width="4">
  <path d="M392 524 L392 600"/><path d="M492 524 L492 600"/>
</g>
<path d="M312 522 q124 -36 252 -2 l2 -12 q-128 -34 -256 2 z" fill="#4a3524"/>

<rect width="1000" height="620" fill="url(#mx-diner-vig)"/>
`,
  },

  lounge: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_barchits: { x: 15, y: 55 },
      h_coat: { x: 89, y: 58 },
    },
    svg: `
<defs>
  <linearGradient id="mx-lounge-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#17120c"/>
  </linearGradient>
  <linearGradient id="mx-lounge-snow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#161d2c"/><stop offset="0.5" stop-color="#2c3a4e"/><stop offset="1" stop-color="#54637a"/>
  </linearGradient>
  <linearGradient id="mx-lounge-leather" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a3524"/><stop offset="1" stop-color="#2b1f14"/>
  </linearGradient>
  <linearGradient id="mx-lounge-camel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#a58a5c"/><stop offset="1" stop-color="#6f5c3c"/>
  </linearGradient>
  <radialGradient id="mx-lounge-glow" cx="0.72" cy="0.62" r="0.6">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-lounge-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-lounge-vig" cx="0.5" cy="0.45" r="0.8">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#mx-lounge-wall)"/>

<!-- ceiling cove and the panelled rear wall -->
<rect x="0" y="0" width="1000" height="86" fill="#191309"/>
<g>
  <rect x="176" y="0" width="10" height="20" fill="#6b5326"/>
  <ellipse cx="181" cy="34" rx="26" ry="18" fill="#e8dcbb" opacity="0.5"/>
  <ellipse cx="181" cy="30" rx="18" ry="12" fill="#ffd98a" opacity="0.55"/>
  <rect x="620" y="0" width="10" height="20" fill="#6b5326"/>
  <ellipse cx="625" cy="34" rx="26" ry="18" fill="#e8dcbb" opacity="0.4"/>
  <ellipse cx="625" cy="30" rx="18" ry="12" fill="#ffd98a" opacity="0.45"/>
</g>
<rect x="0" y="86" width="1000" height="8" fill="#3b2f22"/>
<g fill="none" stroke="#33271a" stroke-width="3">
  <rect x="330" y="104" width="120" height="46"/><rect x="880" y="104" width="100" height="46"/>
</g>
<rect x="0" y="404" width="1000" height="14" fill="#3b2f22"/>
<rect x="0" y="418" width="1000" height="202" fill="#1d160f"/>
<path d="M120 620 L920 620 L790 424 L250 424 Z" fill="#3a2a1d"/>
<path d="M186 620 L868 620 L768 436 L272 436 Z" fill="none" stroke="#5a4128" stroke-width="4"/>
<g fill="#4a3524" opacity="0.6">
  <path d="M420 520 l20 -12 l20 12 l-20 12 z"/><path d="M580 520 l20 -12 l20 12 l-20 12 z"/>
  <path d="M340 590 l22 -13 l22 13 l-22 13 z"/><path d="M636 590 l22 -13 l22 13 l-22 13 z"/>
</g>

<!-- THE FAMOUS TAIL WINDOW: only snow turning in the dark -->
<g>
  <path d="M420 168 q0 -52 60 -52 l300 0 q60 0 60 52 l0 206 l-420 0 z" fill="#3b2f22"/>
  <path d="M434 172 q0 -42 50 -42 l292 0 q50 0 50 42 l0 192 l-392 0 z" fill="#1b2436"/>
  <path d="M434 240 q60 -20 118 -6 q66 -18 128 4 q60 -16 146 -2 l0 128 l-392 0 z" fill="#2b3548"/>
  <path d="M434 300 q80 -18 150 -2 q70 -14 134 4 q56 -10 108 -2 l0 64 l-392 0 z" fill="#3d4a5e"/>
  <path d="M434 340 q92 -14 176 2 q84 -10 182 6 l0 16 l-358 0 z" fill="#54637a"/>
  <g fill="#c6d2e0" opacity="0.75">
    <ellipse cx="500" cy="188" rx="4" ry="4"/><ellipse cx="556" cy="212" rx="3" ry="3"/>
    <ellipse cx="618" cy="176" rx="4.5" ry="4.5"/><ellipse cx="676" cy="224" rx="3.4" ry="3.4"/>
    <ellipse cx="742" cy="184" rx="4" ry="4"/><ellipse cx="800" cy="230" rx="3" ry="3"/>
    <ellipse cx="472" cy="252" rx="3.6" ry="3.6"/><ellipse cx="584" cy="272" rx="3" ry="3"/>
    <ellipse cx="706" cy="288" rx="4" ry="4"/><ellipse cx="838" cy="264" rx="3.4" ry="3.4"/>
    <ellipse cx="530" cy="322" rx="3" ry="3"/><ellipse cx="650" cy="330" rx="3.6" ry="3.6"/>
    <ellipse cx="780" cy="316" rx="3" ry="3"/>
  </g>
  <g stroke="#8fa4c0" stroke-width="1.6" opacity="0.45">
    <path d="M462 200 q30 16 22 44"/><path d="M600 240 q28 18 18 46"/>
    <path d="M736 206 q30 18 20 46"/><path d="M846 300 q22 14 14 36"/>
  </g>
  <!-- the track that is not there anymore -->
  <g stroke="#8fa4c0" stroke-width="3" opacity="0.22">
    <path d="M556 364 L602 320"/><path d="M676 364 L630 320"/>
  </g>
  <!-- glazing bars and the brass grab rail across the glass -->
  <g stroke="#4a3524" stroke-width="7">
    <path d="M566 130 L566 364"/><path d="M694 130 L694 364"/>
  </g>
  <rect x="434" y="352" width="392" height="12" fill="#4a3524"/>
  <g stroke="#6b5326" stroke-width="6">
    <path d="M448 296 L812 296"/>
  </g>
  <g fill="#8a6c30">
    <rect x="470" y="290" width="10" height="16" rx="3"/><rect x="776" y="290" width="10" height="16" rx="3"/>
  </g>
</g>

<!-- heavy drapes drawn back from the tail glass -->
<g>
  <path d="M404 150 l40 0 l-8 232 q-18 8 -36 2 z" fill="#4a2a20"/>
  <path d="M856 150 l40 0 l8 232 q-18 8 -36 2 z" fill="#4a2a20"/>
  <g fill="none" stroke="#2f1a14" stroke-width="3">
    <path d="M416 154 l-6 224"/><path d="M430 154 l-6 226"/>
    <path d="M884 154 l6 224"/><path d="M870 154 l6 226"/>
  </g>
  <ellipse cx="422" cy="292" rx="16" ry="8" fill="#6b5326"/>
  <ellipse cx="878" cy="292" rx="16" ry="8" fill="#6b5326"/>
</g>

<!-- the barometer, and a shelf of unread magazines -->
<g>
  <circle cx="360" cy="196" r="34" fill="#6b5326"/>
  <circle cx="360" cy="196" r="26" fill="#e3d5ac"/>
  <circle cx="360" cy="196" r="20" fill="#f0e7ce"/>
  <g stroke="#8d7c62" stroke-width="1.6">
    <path d="M360 178 L360 182"/><path d="M378 196 L374 196"/><path d="M360 214 L360 210"/><path d="M342 196 L346 196"/>
  </g>
  <path d="M360 196 L372 186" stroke="#5d1f18" stroke-width="2.4"/>
  <circle cx="360" cy="196" r="3" fill="#4a3524"/>
  <rect x="900" y="230" width="86" height="10" fill="#4a3524"/>
  <g fill="#cfc6b2">
    <rect x="906" y="206" width="70" height="8"/><rect x="906" y="216" width="70" height="7"/>
    <rect x="910" y="196" width="62" height="8"/>
  </g>
</g>

<!-- MILES CORLISS at the window, with a brandy he is not drinking -->
<g>
  <path d="M596 302 q40 -22 80 0 l10 130 l-100 0 z" fill="#2b2f3a"/>
  <path d="M614 308 q22 -10 44 0 l-4 40 l-36 0 z" fill="#e3d5ac"/>
  <path d="M596 312 l-14 84 l16 6 l14 -80 z" fill="#2b2f3a"/>
  <path d="M676 312 l14 84 l-16 6 l-14 -80 z" fill="#2b2f3a"/>
  <path d="M632 316 l10 0 l2 34 l-14 0 z" fill="#39332c"/>
  <ellipse cx="636" cy="270" rx="21" ry="24" fill="#b3a184"/>
  <path d="M615 266 q21 -26 42 0 q3 -27 -21 -27 q-24 0 -21 27 z" fill="#4a443c"/>
  <path d="M613 264 q-5 20 3 30 l6 -6 q-5 -10 -3 -22 z" fill="#4a443c"/>
  <g stroke="#4a3f31" stroke-width="2.1" stroke-linecap="round">
    <line x1="625" y1="270" x2="632" y2="270"/><line x1="640" y1="270" x2="647" y2="270"/>
  </g>
  <line x1="629" y1="284" x2="643" y2="284" stroke="#6b5a45" stroke-width="2" stroke-linecap="round"/>
  <path d="M622 296 l28 0 l2 10 l-32 0 z" fill="#f0e7ce"/>
  <!-- the brandy, held level and untouched -->
  <path d="M596 322 q-22 26 -18 62 l18 4 q0 -34 16 -56 z" fill="#2b2f3a"/>
  <path d="M578 380 q16 -10 30 -2 q6 9 -3 15 q-18 6 -30 -3 z" fill="#a89073"/>
  <path d="M580 358 q12 -12 24 0 q0 14 -12 16 q-12 -2 -12 -16 z" fill="#efe8d2" opacity="0.92"/>
  <path d="M584 362 q8 -8 16 0 q0 9 -8 10 q-8 -1 -8 -10 z" fill="#8a5a24"/>
  <path d="M588 374 l8 0 l0 12 l-8 0 z" fill="#efe8d2" opacity="0.7"/>
  <path d="M604 428 q34 -12 68 0 l4 60 l-76 0 z" fill="#2b2f3a"/>
  <path d="M604 488 l32 0 l2 42 l-36 0 z" fill="#232730"/>
  <path d="M642 488 l32 0 l4 42 l-38 0 z" fill="#232730"/>
  <ellipse cx="618" cy="534" rx="20" ry="8" fill="#100d09"/>
  <ellipse cx="660" cy="534" rx="20" ry="8" fill="#100d09"/>
</g>

<!-- THE SHUTTERED BAR, and the lounge steward's timed chits -->
<g>
  <rect x="0" y="120" width="316" height="196" fill="#241b12"/>
  <rect x="0" y="120" width="316" height="12" fill="#3b2f22"/>
  <g stroke="#33271a" stroke-width="4">
    <path d="M0 146 L316 146"/><path d="M0 162 L316 162"/><path d="M0 178 L316 178"/>
    <path d="M0 194 L316 194"/><path d="M0 210 L316 210"/><path d="M0 226 L316 226"/>
  </g>
  <rect x="0" y="234" width="316" height="10" fill="#6b5326"/>
  <rect x="0" y="244" width="316" height="72" fill="#1b140d"/>
  <g fill="#4a5539" opacity="0.9">
    <rect x="24" y="256" width="16" height="52" rx="4"/><rect x="48" y="252" width="14" height="56" rx="4"/>
    <rect x="70" y="258" width="18" height="50" rx="5"/><rect x="96" y="250" width="13" height="58" rx="4"/>
  </g>
  <g fill="#5d1f18" opacity="0.9">
    <rect x="122" y="256" width="15" height="52" rx="4"/><rect x="146" y="252" width="17" height="56" rx="5"/>
  </g>
  <g fill="#8a5a24" opacity="0.9">
    <rect x="176" y="254" width="14" height="54" rx="4"/><rect x="200" y="258" width="16" height="50" rx="5"/>
    <rect x="228" y="252" width="13" height="56" rx="4"/>
  </g>
  <g fill="#cfc6b2" opacity="0.5">
    <rect x="258" y="268" width="10" height="40" rx="3"/><rect x="274" y="268" width="10" height="40" rx="3"/>
    <rect x="290" y="268" width="10" height="40" rx="3"/>
  </g>
  <!-- the counter -->
  <path d="M0 316 L330 316 L358 346 L0 346 Z" fill="#5c4229"/>
  <path d="M0 316 L330 316 L338 324 L0 324 Z" fill="#7b5a35"/>
  <rect x="0" y="346" width="352" height="74" fill="#33271a"/>
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="24" y="358" width="90" height="48"/><rect x="130" y="358" width="90" height="48"/>
    <rect x="236" y="358" width="90" height="48"/>
  </g>
  <!-- THE CHITS: spiked, and clipped along the rail, each with its time -->
  <g>
    <rect x="128" y="300" width="8" height="20" fill="#8a6c30"/>
    <path d="M128 296 l8 0 l-4 -14 z" fill="#c8a75c"/>
    <path d="M104 306 L160 300 L162 318 L106 324 Z" fill="#f0e7ce"/>
    <path d="M100 300 L156 294 L158 310 L102 316 Z" fill="#e3d5ac"/>
    <path d="M108 294 L162 288 L164 302 L110 308 Z" fill="#f4ecd6"/>
    <g stroke="#8d7c62" stroke-width="1.3" opacity="0.9">
      <path d="M112 296 L150 292"/><path d="M113 300 L146 296"/>
      <path d="M106 306 L150 301"/><path d="M108 312 L142 308"/>
      <path d="M110 318 L152 313"/>
    </g>
    <g stroke="#a8352a" stroke-width="1.6" opacity="0.85">
      <path d="M152 292 L160 291"/><path d="M148 302 L156 301"/><path d="M154 314 L160 313"/>
    </g>
    <!-- the rail of settled chits behind the counter -->
    <g stroke="#6b5326" stroke-width="3">
      <path d="M188 262 L300 258"/>
    </g>
    <g fill="#e3d5ac">
      <path d="M192 262 l18 0 l0 26 l-18 0 z"/><path d="M216 261 l18 0 l0 22 l-18 0 z"/>
      <path d="M240 260 l18 0 l0 28 l-18 0 z"/><path d="M264 259 l18 0 l0 24 l-18 0 z"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.1" opacity="0.85">
      <path d="M195 270 l12 0"/><path d="M195 276 l12 0"/><path d="M219 269 l12 0"/>
      <path d="M243 268 l12 0"/><path d="M243 275 l12 0"/><path d="M267 267 l12 0"/>
    </g>
  </g>
  <!-- a glass left drying, and the steward's pencil -->
  <path d="M232 292 l22 0 l-3 20 q-8 6 -16 0 z" fill="#efe8d2" opacity="0.85"/>
  <path d="M266 314 L306 304 L308 310 L268 320 Z" fill="#a8352a"/>
</g>

<!-- DANIEL CALLAHAN in the deepest chair, watching you cross the carpet -->
<g>
  <path d="M282 566 l0 -122 q0 -66 68 -70 l52 0 q68 4 68 70 l0 122 z" fill="url(#mx-lounge-leather)"/>
  <path d="M300 556 l0 -108 q0 -50 52 -54 l44 0 q52 4 52 54 l0 108 z" fill="#3b2f22"/>
  <g fill="none" stroke="#2b1f14" stroke-width="2" opacity="0.8">
    <path d="M316 470 l124 0"/><path d="M316 502 l124 0"/><path d="M356 442 l0 114"/><path d="M400 442 l0 114"/>
  </g>
  <path d="M312 556 q0 -78 62 -84 q64 6 64 84 z" fill="#2b261f"/>
  <path d="M336 486 q40 -24 78 0 l-6 70 l-66 0 z" fill="#3a342a"/>
  <path d="M362 484 l26 0 l-4 34 l-18 0 z" fill="#e3d5ac"/>
  <path d="M372 486 l8 0 l-2 30 l-6 0 z" fill="#5d1f18"/>
  <ellipse cx="375" cy="440" rx="27" ry="30" fill="#b3a184"/>
  <path d="M348 434 q27 -28 54 0 q4 -30 -27 -30 q-31 0 -27 30 z" fill="#5a4a3a"/>
  <g stroke="#4a3f31" stroke-width="2.6" stroke-linecap="round">
    <line x1="360" y1="440" x2="371" y2="440"/><line x1="380" y1="440" x2="391" y2="440"/>
  </g>
  <g stroke="#8d7c62" stroke-width="2" stroke-linecap="round" opacity="0.8">
    <line x1="358" y1="430" x2="371" y2="428"/><line x1="380" y1="428" x2="393" y2="430"/>
  </g>
  <line x1="366" y1="456" x2="384" y2="456" stroke="#6b5a45" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M364 466 l22 0 l2 12 l-26 0 z" fill="#a89073"/>
  <!-- hands on the arms, a big man's hands -->
  <rect x="272" y="486" width="42" height="60" rx="16" fill="#4a3524"/>
  <rect x="436" y="486" width="42" height="60" rx="16" fill="#4a3524"/>
  <path d="M276 494 q18 -10 34 0 q6 10 -4 16 q-20 6 -34 -2 z" fill="#a89073"/>
  <path d="M440 494 q18 -10 34 0 q6 10 -4 16 q-20 6 -34 -2 z" fill="#a89073"/>
  <g stroke="#8c7a60" stroke-width="1.3" stroke-linecap="round">
    <path d="M282 502 l24 2"/><path d="M282 508 l24 2"/><path d="M446 502 l24 2"/><path d="M446 508 l24 2"/>
  </g>
  <path d="M330 556 q46 -14 92 0 l0 42 l-92 0 z" fill="#2b261f"/>
  <ellipse cx="348" cy="600" rx="22" ry="9" fill="#100d09"/>
  <ellipse cx="404" cy="600" rx="22" ry="9" fill="#100d09"/>
</g>

<!-- a low table with the only lamp still burning at this end -->
<g>
  <rect x="700" y="380" width="230" height="200" fill="url(#mx-lounge-lamp)"/>
  <ellipse cx="792" cy="452" rx="66" ry="18" fill="#4a3524"/>
  <ellipse cx="792" cy="446" rx="66" ry="18" fill="#5c4229"/>
  <rect x="784" y="460" width="16" height="72" fill="#3b2f22"/>
  <ellipse cx="792" cy="536" rx="34" ry="10" fill="#33271a"/>
  <rect x="786" y="392" width="10" height="50" fill="#6b5326"/>
  <path d="M756 356 q36 -22 72 0 l-8 34 q-28 10 -56 0 z" fill="#8a5a24"/>
  <path d="M756 356 q36 -22 72 0 l-2 6 q-34 -16 -68 0 z" fill="#b3763a"/>
  <ellipse cx="792" cy="392" rx="30" ry="9" fill="#ffd98a" opacity="0.7"/>
  <ellipse cx="792" cy="404" rx="86" ry="30" fill="#d9a441" opacity="0.12"/>
  <path d="M726 440 l40 -4 l2 12 l-40 4 z" fill="#e3d5ac"/>
  <path d="M732 432 l38 -4 l1 8 l-38 4 z" fill="#f0e7ce"/>
</g>
<rect width="1000" height="620" fill="url(#mx-lounge-glow)"/>

<!-- CALLAHAN'S CAMEL OVERCOAT, on the brass hook by the door -->
<g>
  <rect x="856" y="196" width="66" height="12" rx="4" fill="#6b5326"/>
  <circle cx="870" cy="212" r="7" fill="#9b7a3f"/><circle cx="908" cy="212" r="7" fill="#9b7a3f"/>
  <path d="M868 214 q-40 40 -36 106 l10 154 q46 16 92 0 l10 -154 q4 -66 -36 -106 z" fill="url(#mx-lounge-camel)"/>
  <path d="M868 214 q18 32 22 68 q6 -38 26 -68 z" fill="#bda072"/>
  <path d="M890 216 l0 254" stroke="#6f5c3c" stroke-width="4"/>
  <g fill="#7e6a45">
    <circle cx="894" cy="316" r="5"/><circle cx="894" cy="360" r="5"/><circle cx="894" cy="404" r="5"/>
  </g>
  <path d="M840 330 q-16 30 -12 70 l6 40 l16 -2 l-6 -46 q-2 -36 6 -60 z" fill="#93794f"/>
  <path d="M940 330 q16 30 12 70 l-6 40 l-16 -2 l6 -46 q2 -36 -6 -60 z" fill="#93794f"/>
  <!-- the deep inside pocket, and the red-tabbed folder riding in it -->
  <path d="M902 336 l44 -6 l4 20 l-44 8 z" fill="#7e6a45"/>
  <path d="M906 328 l38 -6 l2 16 l-38 6 z" fill="#e3d5ac"/>
  <path d="M906 328 l38 -6 l1 5 l-38 6 z" fill="#f0e7ce"/>
  <path d="M936 322 l10 -2 l2 9 l-10 2 z" fill="#a8352a"/>
  <g stroke="#8d7c62" stroke-width="1.2" opacity="0.8">
    <path d="M910 334 l28 -4"/><path d="M911 339 l26 -4"/>
  </g>
  <!-- the cold still coming off it -->
  <g stroke="#8fa4c0" stroke-width="2" opacity="0.16" fill="none">
    <path d="M846 250 q-16 40 -6 84"/><path d="M944 260 q16 40 6 80"/>
  </g>
  <!-- the door to the rest of the train -->
  <path d="M960 150 L1000 150 L1000 470 L960 470 Z" fill="#241b12"/>
  <rect x="966" y="176" width="30" height="120" fill="#1b2436"/>
  <rect x="966" y="176" width="30" height="120" fill="#8fa4c0" opacity="0.1"/>
</g>

<!-- brass ashtray stand beside the deep chair -->
<g>
  <ellipse cx="512" cy="586" rx="26" ry="9" fill="#33271a"/>
  <rect x="506" y="486" width="12" height="100" fill="#6b5326"/>
  <ellipse cx="512" cy="484" rx="26" ry="9" fill="#8a6c30"/>
  <ellipse cx="512" cy="481" rx="18" ry="6" fill="#4a3524"/>
  <path d="M500 478 l16 -3 l0 5 l-16 3 z" fill="#cfc6b2"/>
</g>

<!-- foreground: the back of another club chair, close to the eye -->
<path d="M-10 620 L246 620 L236 486 q-130 -34 -256 -4 Z" fill="#1b140d"/>
<path d="M-10 496 q126 -30 244 -4" fill="none" stroke="#3b2f22" stroke-width="6"/>
<g fill="#2b1f14">
  <circle cx="44" cy="520" r="5"/><circle cx="110" cy="510" r="5"/><circle cx="176" cy="516" r="5"/>
</g>
<path d="M-10 620 L246 620 L244 596 q-130 -16 -256 0 Z" fill="#241b12"/>

<rect width="1000" height="620" fill="url(#mx-lounge-vig)"/>
`,
  },
  vestibule: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_callbook: { x: 24, y: 68 },
      h_trunk: { x: 76, y: 68 },
    },
    svg: `
<defs>
  <linearGradient id="mx-vest-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#17120c"/>
  </linearGradient>
  <linearGradient id="mx-vest-cold" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#243043"/><stop offset="1" stop-color="#141a26"/>
  </linearGradient>
  <linearGradient id="mx-vest-trunk" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#5c4229"/><stop offset="1" stop-color="#33271a"/>
  </linearGradient>
  <radialGradient id="mx-vest-glow" cx="0.22" cy="0.36" r="0.6">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-vest-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-vest-icelamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#c6d2e0" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#c6d2e0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-vest-vig" cx="0.5" cy="0.45" r="0.8">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#mx-vest-wall)"/>

<!-- the pantry: ceiling, wall, worn linoleum -->
<rect x="0" y="0" width="540" height="52" fill="#191309"/>
<rect x="0" y="52" width="540" height="8" fill="#3b2f22"/>
<rect x="0" y="470" width="540" height="12" fill="#3b2f22"/>
<rect x="0" y="482" width="540" height="138" fill="#241b12"/>
<g stroke="#33271a" stroke-width="3">
  <path d="M0 524 L540 524"/><path d="M0 566 L540 566"/><path d="M0 604 L540 604"/>
</g>
<g>
  <rect x="184" y="0" width="12" height="26" fill="#6b5326"/>
  <path d="M150 26 q40 -20 80 0 l-8 26 q-32 10 -64 0 z" fill="#8a6c30"/>
  <ellipse cx="190" cy="54" rx="30" ry="9" fill="#ffd98a" opacity="0.75"/>
  <rect x="20" y="30" width="340" height="330" fill="url(#mx-vest-lamp)"/>
</g>
<rect width="1000" height="620" fill="url(#mx-vest-glow)"/>

<!-- ranked siphons on their shelves -->
<g>
  <rect x="30" y="120" width="280" height="12" fill="#4a3524"/>
  <rect x="30" y="216" width="280" height="12" fill="#4a3524"/>
  <rect x="30" y="300" width="280" height="12" fill="#4a3524"/>
  <g>
    <path d="M44 152 q12 -12 24 0 l3 64 l-30 0 z" fill="#5f6b4a"/>
    <path d="M48 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#7d8a62" opacity="0.7"/>
    <rect x="50" y="138" width="12" height="16" rx="3" fill="#9b7a3f"/>
    <path d="M62 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  </g>
  <g>
    <path d="M92 152 q12 -12 24 0 l3 64 l-30 0 z" fill="#5f6b4a"/>
    <path d="M96 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#7d8a62" opacity="0.7"/>
    <rect x="98" y="138" width="12" height="16" rx="3" fill="#9b7a3f"/>
    <path d="M110 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  </g>
  <g>
    <path d="M140 152 q12 -12 24 0 l3 64 l-30 0 z" fill="#5f6b4a"/>
    <path d="M144 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#7d8a62" opacity="0.7"/>
    <rect x="146" y="138" width="12" height="16" rx="3" fill="#9b7a3f"/>
    <path d="M158 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  </g>
  <g>
    <path d="M188 152 q12 -12 24 0 l3 64 l-30 0 z" fill="#5f6b4a"/>
    <path d="M192 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#7d8a62" opacity="0.7"/>
    <rect x="194" y="138" width="12" height="16" rx="3" fill="#9b7a3f"/>
    <path d="M206 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  </g>
  <g>
    <path d="M236 152 q12 -12 24 0 l3 64 l-30 0 z" fill="#5f6b4a"/>
    <path d="M240 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#7d8a62" opacity="0.7"/>
    <rect x="242" y="138" width="12" height="16" rx="3" fill="#9b7a3f"/>
    <path d="M254 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  </g>
  <g>
    <path d="M284 152 q12 -12 24 0 l3 64 l-30 0 z" fill="#5f6b4a"/>
    <path d="M288 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#7d8a62" opacity="0.7"/>
    <rect x="290" y="138" width="12" height="16" rx="3" fill="#9b7a3f"/>
    <path d="M302 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  </g>
  <!-- polished glasses in their rank, and folded linen -->
  <g fill="#efe8d2" opacity="0.8">
    <path d="M44 248 l20 0 l-3 52 l-14 0 z"/><path d="M74 248 l20 0 l-3 52 l-14 0 z"/>
    <path d="M104 248 l20 0 l-3 52 l-14 0 z"/><path d="M134 248 l20 0 l-3 52 l-14 0 z"/>
    <path d="M164 248 l20 0 l-3 52 l-14 0 z"/>
  </g>
  <g fill="#e3d5ac">
    <rect x="208" y="262" width="46" height="16"/><rect x="208" y="280" width="46" height="16"/>
    <rect x="262" y="266" width="44" height="14"/><rect x="262" y="282" width="44" height="14"/>
  </g>
</g>

<!-- the call board: the drops that ring for every berth -->
<g>
  <rect x="352" y="112" width="160" height="164" rx="4" fill="#241b12"/>
  <rect x="358" y="118" width="148" height="152" rx="3" fill="#1b140d"/>
  <g fill="none" stroke="#6b5326" stroke-width="2.4">
    <circle cx="386" cy="146" r="12"/><circle cx="422" cy="146" r="12"/><circle cx="458" cy="146" r="12"/>
    <circle cx="386" cy="186" r="12"/><circle cx="422" cy="186" r="12"/><circle cx="458" cy="186" r="12"/>
    <circle cx="386" cy="226" r="12"/><circle cx="422" cy="226" r="12"/><circle cx="458" cy="226" r="12"/>
  </g>
  <g fill="#9b7a3f" opacity="0.6">
    <circle cx="386" cy="146" r="7"/><circle cx="458" cy="186" r="7"/><circle cx="422" cy="226" r="7"/>
  </g>
  <circle cx="422" cy="186" r="8" fill="#e8dcbb"/>
  <circle cx="486" cy="146" r="9" fill="#8a6c30"/>
  <rect x="358" y="248" width="148" height="8" fill="#33271a"/>
</g>

<!-- the shoe rack: thirty years of other people's shoes -->
<g>
  <rect x="30" y="360" width="280" height="10" fill="#4a3524"/>
  <g fill="#241b12">
    <path d="M44 348 q18 -10 34 -2 l4 12 l-40 0 z"/><path d="M88 348 q18 -10 34 -2 l4 12 l-40 0 z"/>
  </g>
  <g fill="#33271a">
    <path d="M140 348 q18 -10 34 -2 l4 12 l-40 0 z"/><path d="M184 348 q18 -10 34 -2 l4 12 l-40 0 z"/>
  </g>
  <g fill="#2b1f14">
    <path d="M236 348 q18 -10 34 -2 l4 12 l-40 0 z"/><path d="M276 348 q14 -8 28 -2 l3 12 l-33 0 z"/>
  </g>
  <g fill="#4a3524" opacity="0.7">
    <path d="M52 370 l30 0 l0 8 l-30 0 z"/><path d="M148 370 l30 0 l0 8 l-30 0 z"/><path d="M244 370 l30 0 l0 8 l-30 0 z"/>
  </g>
</g>

<!-- ELIAS POOLE, polishing glasses that are already clean -->
<g>
  <path d="M120 244 q34 -18 68 0 l10 132 l-88 0 z" fill="#232a33"/>
  <path d="M138 250 q16 -8 32 0 l-2 30 l-28 0 z" fill="#e3d5ac"/>
  <path d="M150 252 l8 0 l-2 26 l-6 0 z" fill="#2b1f14"/>
  <g fill="#c8a75c">
    <circle cx="154" cy="296" r="3"/><circle cx="154" cy="314" r="3"/><circle cx="154" cy="332" r="3"/>
  </g>
  <path d="M120 256 l-16 74 l16 6 l16 -70 z" fill="#232a33"/>
  <path d="M188 256 l16 74 l-16 6 l-16 -70 z" fill="#232a33"/>
  <ellipse cx="154" cy="216" rx="21" ry="24" fill="#6b4f3a"/>
  <path d="M133 212 q21 -24 42 0 q3 -25 -21 -25 q-24 0 -21 25 z" fill="#3a332c"/>
  <path d="M131 210 q-4 8 -1 16 l5 -3 q-3 -7 -1 -13 z" fill="#8e8e88" opacity="0.7"/>
  <path d="M177 210 q4 8 1 16 l-5 -3 q3 -7 1 -13 z" fill="#8e8e88" opacity="0.7"/>
  <g stroke="#3a2a22" stroke-width="2.1" stroke-linecap="round">
    <line x1="144" y1="216" x2="151" y2="216"/><line x1="158" y1="216" x2="165" y2="216"/>
  </g>
  <line x1="148" y1="230" x2="160" y2="230" stroke="#4a3529" stroke-width="2" stroke-linecap="round"/>
  <path d="M142 240 l24 0 l2 8 l-28 0 z" fill="#f0e7ce"/>
  <!-- his hands: the glass and the cloth -->
  <path d="M104 330 q16 -10 30 -2 q6 9 -3 15 q-18 6 -30 -3 z" fill="#6b4f3a"/>
  <path d="M176 326 q16 -10 30 -2 q6 9 -3 15 q-18 6 -30 -3 z" fill="#6b4f3a"/>
  <path d="M126 300 l24 0 l-4 40 l-16 0 z" fill="#efe8d2" opacity="0.85"/>
  <ellipse cx="138" cy="300" rx="12" ry="4" fill="#f4ecd6" opacity="0.9"/>
  <path d="M160 320 q22 -12 34 4 q-12 20 -34 10 z" fill="#f0e7ce"/>
  <g stroke="#cfc6b2" stroke-width="1.4" opacity="0.9">
    <path d="M166 326 q14 -6 22 4"/>
  </g>
</g>

<!-- the pantry counter, and THE CALL BOOK open on it -->
<g>
  <path d="M0 392 L500 392 L520 414 L0 414 Z" fill="#5c4229"/>
  <path d="M0 392 L500 392 L506 398 L0 398 Z" fill="#7b5a35"/>
  <rect x="0" y="414" width="512" height="70" fill="#33271a"/>
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="30" y="424" width="120" height="48"/><rect x="170" y="424" width="120" height="48"/>
    <rect x="310" y="424" width="120" height="48"/>
  </g>
  <!-- standing orders, in the porter's copperplate -->
  <path d="M176 386 L316 386 L332 410 L164 410 Z" fill="#f0e7ce"/>
  <path d="M246 386 L248 410" stroke="#b9ad91" stroke-width="2"/>
  <g stroke="#4a3f31" stroke-width="1.5" opacity="0.85">
    <path d="M186 391 q10 4 20 0 q10 -4 20 0 q8 4 16 0"/>
    <path d="M182 397 q10 4 20 0 q10 -4 20 0 q8 4 18 0"/>
    <path d="M178 403 q10 4 20 0 q10 -4 20 0 q8 4 14 0"/>
    <path d="M258 391 q10 4 20 0 q10 -4 20 0 q8 4 16 0"/>
    <path d="M258 397 q10 4 20 0 q10 -4 20 0 q8 4 18 0"/>
    <path d="M258 403 q10 4 20 0 q10 -4 18 0"/>
  </g>
  <path d="M300 380 L340 374 L344 388 L304 394 Z" fill="#a8352a" opacity="0.8"/>
  <path d="M336 396 L392 388 L394 394 L338 402 Z" fill="#4a3524"/>
  <!-- a tray of glasses waiting to go up the corridor -->
  <ellipse cx="440" cy="392" rx="52" ry="12" fill="#8a6c30"/>
  <ellipse cx="440" cy="389" rx="44" ry="9" fill="#b28c3f"/>
  <g fill="#efe8d2" opacity="0.85">
    <path d="M414 362 l18 0 l-3 26 l-12 0 z"/><path d="M440 362 l18 0 l-3 26 l-12 0 z"/>
    <path d="M466 366 l16 0 l-3 22 l-10 0 z"/>
  </g>
</g>

<!-- the vestibule floor: worn plate, a mat, the trap under it -->
<g>
  <path d="M0 484 L512 484 L512 620 L0 620 Z" fill="#1d160f"/>
  <path d="M40 512 L470 512 L470 596 L40 596 Z" fill="#2b2118"/>
  <g stroke="#3b2f22" stroke-width="3">
    <path d="M40 540 L470 540"/><path d="M40 568 L470 568"/>
    <path d="M154 512 L154 596"/><path d="M268 512 L268 596"/><path d="M382 512 L382 596"/>
  </g>
  <path d="M60 592 L300 592 L316 620 L44 620 Z" fill="#3a2a1d"/>
  <path d="M88 600 L286 600 L294 614 L80 614 Z" fill="none" stroke="#5a4128" stroke-width="3"/>
</g>

<!-- THROUGH THE GANGWAY: the baggage car, cold as a vault -->
<g>
  <rect x="540" y="40" width="460" height="560" fill="url(#mx-vest-cold)"/>
  <rect x="540" y="40" width="460" height="16" fill="#1b140d"/>
  <!-- roof lamps, cold and few -->
  <rect x="740" y="56" width="8" height="20" fill="#3b2f22"/>
  <path d="M722 76 q22 -12 44 0 l-6 18 q-16 6 -32 0 z" fill="#4a4a44"/>
  <ellipse cx="744" cy="96" rx="18" ry="6" fill="#c6d2e0" opacity="0.6"/>
  <rect x="620" y="60" width="260" height="300" fill="url(#mx-vest-icelamp)"/>
  <rect x="928" y="60" width="6" height="16" fill="#3b2f22"/>
  <ellipse cx="931" cy="82" rx="12" ry="5" fill="#c6d2e0" opacity="0.4"/>
  <!-- the far wall of trunks, stacked to the roof lamps -->
  <g>
    <rect x="560" y="150" width="96" height="70" fill="#2f2822"/><rect x="560" y="150" width="96" height="8" fill="#3d352c"/>
    <rect x="662" y="140" width="110" height="80" fill="#332a22"/><rect x="662" y="140" width="110" height="9" fill="#41372c"/>
    <rect x="778" y="156" width="88" height="64" fill="#2b2620"/><rect x="778" y="156" width="88" height="7" fill="#3a342c"/>
    <rect x="872" y="146" width="106" height="74" fill="#312a23"/><rect x="872" y="146" width="106" height="8" fill="#3f372e"/>
    <rect x="560" y="226" width="120" height="86" fill="#352c23"/><rect x="560" y="226" width="120" height="9" fill="#443a2f"/>
    <rect x="686" y="234" width="94" height="78" fill="#2c2620"/><rect x="686" y="234" width="94" height="8" fill="#3b342b"/>
    <rect x="786" y="228" width="112" height="84" fill="#332b23"/><rect x="786" y="228" width="112" height="9" fill="#42392e"/>
    <rect x="904" y="240" width="80" height="72" fill="#2a2420"/><rect x="904" y="240" width="80" height="8" fill="#39322a"/>
    <rect x="560" y="318" width="104" height="76" fill="#2e2721"/><rect x="920" y="318" width="70" height="76" fill="#302923"/>
  </g>
  <g stroke="#6b5326" stroke-width="3" opacity="0.65">
    <path d="M596 150 L596 220"/><path d="M700 140 L700 220"/><path d="M818 156 L818 220"/>
    <path d="M916 146 L916 220"/><path d="M600 226 L600 312"/><path d="M726 234 L726 312"/>
    <path d="M830 228 L830 312"/><path d="M944 240 L944 312"/>
  </g>
  <g fill="#8a6c30" opacity="0.7">
    <rect x="586" y="184" width="20" height="10"/><rect x="690" y="176" width="20" height="10"/>
    <rect x="808" y="188" width="20" height="10"/><rect x="590" y="266" width="20" height="10"/>
    <rect x="716" y="272" width="20" height="10"/><rect x="820" y="266" width="20" height="10"/>
  </g>
  <rect x="540" y="394" width="460" height="10" fill="#1b140d"/>
  <rect x="540" y="404" width="460" height="216" fill="#191f2a"/>
</g>

<!-- KEENE'S WARDROBE TRUNK, forced with the fire iron -->
<g>
  <ellipse cx="770" cy="562" rx="170" ry="20" fill="#0d0a07" opacity="0.6"/>
  <!-- the lid, swung open toward the door -->
  <path d="M886 322 L962 344 L962 566 L886 552 Z" fill="#3b2f22"/>
  <path d="M894 336 L954 354 L954 552 L894 540 Z" fill="#241b12"/>
  <g fill="#8a6c30">
    <path d="M886 356 L962 376 L962 388 L886 368 Z"/><path d="M886 492 L962 508 L962 520 L886 504 Z"/>
  </g>
  <!-- the body -->
  <rect x="614" y="330" width="278" height="230" fill="url(#mx-vest-trunk)"/>
  <rect x="614" y="330" width="278" height="16" fill="#7b5a35"/>
  <rect x="614" y="544" width="278" height="16" fill="#3b2f22"/>
  <g fill="#8a6c30">
    <rect x="610" y="362" width="286" height="12"/><rect x="610" y="500" width="286" height="12"/>
    <rect x="606" y="330" width="20" height="22"/><rect x="880" y="330" width="20" height="22"/>
    <rect x="606" y="538" width="20" height="22"/><rect x="880" y="538" width="20" height="22"/>
  </g>
  <rect x="614" y="330" width="80" height="230" fill="#4a3524"/>
  <g fill="#33271a">
    <rect x="626" y="346" width="56" height="86"/><rect x="626" y="452" width="56" height="86"/>
  </g>
  <!-- the interior, and the famous red tabs, alphabetical -->
  <rect x="700" y="348" width="176" height="196" fill="#1b140d"/>
  <rect x="700" y="348" width="176" height="10" fill="#33271a"/>
  <g fill="#e3d5ac">
    <rect x="710" y="382" width="12" height="146"/><rect x="724" y="380" width="11" height="148"/>
    <rect x="737" y="382" width="12" height="146"/><rect x="751" y="379" width="11" height="149"/>
    <rect x="778" y="381" width="12" height="147"/><rect x="792" y="380" width="11" height="148"/>
    <rect x="805" y="382" width="12" height="146"/><rect x="819" y="379" width="11" height="149"/>
    <rect x="832" y="381" width="12" height="147"/><rect x="846" y="383" width="11" height="145"/>
  </g>
  <g fill="#a8352a">
    <rect x="710" y="382" width="12" height="12"/><rect x="724" y="380" width="11" height="12"/>
    <rect x="737" y="382" width="12" height="12"/><rect x="751" y="379" width="11" height="12"/>
    <rect x="778" y="381" width="12" height="12"/><rect x="792" y="380" width="11" height="12"/>
    <rect x="805" y="382" width="12" height="12"/><rect x="819" y="379" width="11" height="12"/>
    <rect x="832" y="381" width="12" height="12"/><rect x="846" y="383" width="11" height="12"/>
  </g>
  <!-- the fresh gap where a folder was lifted out with a key -->
  <rect x="762" y="386" width="14" height="142" fill="#0b0806"/>
  <rect x="762" y="386" width="14" height="10" fill="#5d1f18"/>
  <!-- ignored on top: nine years of drafts to a widow in Dayton -->
  <path d="M712 356 L858 348 L862 382 L716 392 Z" fill="#cfe0d0"/>
  <path d="M712 356 L858 348 L859 355 L713 363 Z" fill="#e2eee2"/>
  <g stroke="#7d8a80" stroke-width="1.4" opacity="0.9">
    <path d="M722 368 L840 360"/><path d="M723 375 L842 367"/><path d="M724 382 L810 375"/>
  </g>
  <ellipse cx="842" cy="374" rx="11" ry="5" fill="#5f6b4a" opacity="0.75"/>
  <!-- the hasp, pried right off; oak splintered around the seam -->
  <g>
    <path d="M676 414 l32 10 l-4 40 l-30 -12 z" fill="#8a6c30"/>
    <path d="M681 421 l21 7 l-2 26 l-19 -8 z" fill="#c8a75c"/>
    <path d="M658 408 l20 5 l-2 11 l-20 -5 z" fill="#e8dcbb"/>
    <g fill="#a08453">
      <path d="M690 430 l28 10 l-15 5 l17 10 l-32 -13 z"/>
      <path d="M688 466 l32 12 l-17 5 l20 10 l-36 -15 z"/>
      <path d="M692 396 l24 8 l-13 4 l15 8 l-27 -10 z"/>
    </g>
  </g>
  <!-- the fire iron, dropped where it finished -->
  <g>
    <path d="M560 596 L748 566 L750 578 L562 608 Z" fill="#3a342c"/>
    <path d="M748 566 q22 -6 26 10 q-4 12 -22 6 z" fill="#4a443c"/>
    <path d="M560 596 l-16 3 l2 14 l16 -5 z" fill="#2b261f"/>
  </g>
</g>

<!-- the gangway: the diaphragm ribs framing the cold end -->
<g>
  <path d="M500 0 L560 44 L560 600 L500 620 Z" fill="#191309"/>
  <g stroke="#2b2118" stroke-width="6">
    <path d="M516 12 L516 612"/><path d="M532 24 L532 606"/><path d="M548 36 L548 602"/>
  </g>
  <path d="M980 0 L1000 0 L1000 620 L980 620 Z" fill="#191309"/>
  <path d="M540 600 L1000 600 L1000 620 L500 620 Z" fill="#241b12"/>
  <g fill="#33271a">
    <path d="M580 606 l14 -8 l14 8 l-14 8 z"/><path d="M640 606 l14 -8 l14 8 l-14 8 z"/>
    <path d="M700 606 l14 -8 l14 8 l-14 8 z"/><path d="M760 606 l14 -8 l14 8 l-14 8 z"/>
    <path d="M820 606 l14 -8 l14 8 l-14 8 z"/><path d="M880 606 l14 -8 l14 8 l-14 8 z"/>
    <path d="M940 606 l14 -8 l14 8 l-14 8 z"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#mx-vest-vig)"/>
`,
  },

  headend: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_guardlog: { x: 55, y: 58 },
      h_snowline: { x: 72, y: 82 },
    },
    svg: `
<defs>
  <linearGradient id="mx-head-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0d1119"/><stop offset="0.6" stop-color="#1b2436"/><stop offset="1" stop-color="#2f3d52"/>
  </linearGradient>
  <linearGradient id="mx-head-snow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8fa4c0"/><stop offset="1" stop-color="#c6d2e0"/>
  </linearGradient>
  <linearGradient id="mx-head-boiler" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#33383e"/><stop offset="1" stop-color="#14171b"/>
  </linearGradient>
  <radialGradient id="mx-head-head" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-head-lant" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="mx-head-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#mx-head-sky)"/>

<!-- the pass: mountain shoulders, and the snow going sideways -->
<path d="M0 250 L120 150 L210 236 L300 120 L430 260 L560 190 L700 268 L830 200 L1000 280 L1000 400 L0 400 Z" fill="#141b28"/>
<path d="M0 300 L160 226 L320 300 L470 244 L640 314 L810 258 L1000 330 L1000 420 L0 420 Z" fill="#1b2436"/>
<g stroke="#c6d2e0" stroke-width="1.6" opacity="0.28">
  <path d="M40 90 l52 -18"/><path d="M180 60 l56 -16"/><path d="M330 110 l50 -18"/>
  <path d="M520 70 l54 -16"/><path d="M690 120 l52 -18"/><path d="M860 60 l56 -16"/>
  <path d="M120 190 l50 -16"/><path d="M420 170 l52 -16"/><path d="M760 200 l50 -16"/>
  <path d="M240 300 l48 -14"/><path d="M600 330 l50 -14"/><path d="M900 270 l48 -14"/>
</g>
<g fill="#e8eef4" opacity="0.5">
  <circle cx="140" cy="120" r="2.4"/><circle cx="300" cy="70" r="2"/><circle cx="470" cy="140" r="2.6"/>
  <circle cx="640" cy="80" r="2.2"/><circle cx="820" cy="150" r="2.4"/><circle cx="950" cy="100" r="2"/>
  <circle cx="220" cy="230" r="2"/><circle cx="560" cy="250" r="2.4"/><circle cx="880" cy="230" r="2.2"/>
</g>

<!-- the pole line, marching off into the pass -->
<g stroke="#141b28" stroke-width="7">
  <path d="M700 210 L700 300"/>
</g>
<g stroke="#141b28" stroke-width="5">
  <path d="M866 226 L866 296"/><path d="M962 238 L962 292"/>
</g>
<g stroke="#141b28" stroke-width="5">
  <path d="M676 224 L724 224"/><path d="M846 238 L886 238"/><path d="M946 248 L978 248"/>
</g>
<g stroke="#24304a" stroke-width="2" fill="none" opacity="0.8">
  <path d="M700 226 q84 12 166 16"/><path d="M866 240 q48 4 96 10"/>
</g>

<!-- the section shack, a lit box away down the line -->
<g>
  <rect x="906" y="248" width="60" height="44" fill="#1b1f28"/>
  <path d="M900 248 L936 226 L972 248 Z" fill="#232a33"/>
  <rect x="920" y="262" width="18" height="16" fill="#ffd98a" opacity="0.5"/>
</g>

<!-- THE TRAIN: the sleepers running away to the right, lit boxes in the dark -->
<g>
  <path d="M636 240 L1000 268 L1000 470 L636 468 Z" fill="#241b12"/>
  <path d="M636 240 L1000 268 L1000 284 L636 258 Z" fill="#3b2f22"/>
  <path d="M636 300 L1000 322 L1000 336 L636 316 Z" fill="#4a3524"/>
  <g fill="#1b2436">
    <path d="M654 272 L710 276 L710 336 L654 332 Z"/><path d="M726 278 L782 282 L782 340 L726 337 Z"/>
    <path d="M798 284 L854 288 L854 344 L798 341 Z"/><path d="M870 290 L926 294 L926 348 L870 345 Z"/>
    <path d="M942 296 L992 300 L992 352 L942 349 Z"/>
  </g>
  <g fill="#d9a441" opacity="0.5">
    <path d="M654 272 L710 276 L710 336 L654 332 Z"/><path d="M798 284 L854 288 L854 344 L798 341 Z"/>
    <path d="M942 296 L992 300 L992 352 L942 349 Z"/>
  </g>
  <g fill="#ffd98a" opacity="0.35">
    <path d="M726 278 L782 282 L782 340 L726 337 Z"/><path d="M870 290 L926 294 L926 348 L870 345 Z"/>
  </g>
  <g stroke="#6b5326" stroke-width="4" fill="none">
    <path d="M654 272 L710 276 L710 336 L654 332 Z"/><path d="M726 278 L782 282 L782 340 L726 337 Z"/>
    <path d="M798 284 L854 288 L854 344 L798 341 Z"/><path d="M870 290 L926 294 L926 348 L870 345 Z"/>
    <path d="M942 296 L992 300 L992 352 L942 349 Z"/>
  </g>
  <!-- lanterns strung along the flank -->
  <g>
    <rect x="700" y="230" width="5" height="18" fill="#3b2f22"/>
    <path d="M694 248 l16 0 l-3 16 l-10 0 z" fill="#8a6c30"/>
    <circle cx="702" cy="256" r="9" fill="url(#mx-head-lant)"/>
    <rect x="836" y="240" width="5" height="18" fill="#3b2f22"/>
    <path d="M830 258 l16 0 l-3 16 l-10 0 z" fill="#8a6c30"/>
    <circle cx="838" cy="266" r="9" fill="url(#mx-head-lant)"/>
    <rect x="962" y="250" width="5" height="18" fill="#3b2f22"/>
    <path d="M956 268 l16 0 l-3 16 l-10 0 z" fill="#8a6c30"/>
    <circle cx="964" cy="276" r="9" fill="url(#mx-head-lant)"/>
  </g>
</g>

<!-- the conductor's van, and the official version of events -->
<g>
  <rect x="424" y="216" width="216" height="256" fill="#2a2118"/>
  <rect x="424" y="216" width="216" height="16" fill="#3b2f22"/>
  <rect x="424" y="300" width="216" height="12" fill="#4a3524"/>
  <rect x="436" y="244" width="56" height="52" fill="#1b2436"/>
  <rect x="436" y="244" width="56" height="52" fill="#d9a441" opacity="0.42"/>
  <rect x="436" y="244" width="56" height="52" fill="none" stroke="#6b5326" stroke-width="4"/>
  <!-- the door, standing open on a warm little office -->
  <rect x="504" y="240" width="112" height="228" fill="#100d09"/>
  <rect x="514" y="252" width="92" height="204" fill="#3a2b1a"/>
  <rect x="514" y="252" width="92" height="204" fill="#d9a441" opacity="0.3"/>
  <path d="M616 240 L646 232 L646 476 L616 468 Z" fill="#33271a"/>
  <rect x="622" y="340" width="8" height="22" rx="3" fill="#9b7a3f"/>
  <!-- the desk inside, and the log lying open on it -->
  <path d="M520 372 L604 372 L610 388 L514 388 Z" fill="#5c4229"/>
  <rect x="520" y="388" width="84" height="60" fill="#33271a"/>
  <path d="M528 358 L600 358 L606 374 L522 374 Z" fill="#f0e7ce"/>
  <path d="M564 358 L564 374" stroke="#b9ad91" stroke-width="2"/>
  <g stroke="#4a3f31" stroke-width="1.4" opacity="0.9">
    <path d="M532 363 L558 363"/><path d="M532 368 L556 368"/><path d="M570 363 L598 363"/>
    <path d="M570 368 L596 368"/><path d="M532 372 L552 372"/>
  </g>
  <path d="M596 352 L620 348 L622 356 L598 360 Z" fill="#a8352a" opacity="0.8"/>
  <ellipse cx="560" cy="322" rx="16" ry="6" fill="#8a6c30"/>
  <ellipse cx="560" cy="318" rx="11" ry="5" fill="#ffd98a" opacity="0.8"/>
  <!-- the conductor in the doorway, lantern down at his side -->
  <g>
    <path d="M528 268 q26 -14 52 0 l6 96 l-64 0 z" fill="#232a33"/>
    <path d="M544 274 q18 -8 36 0 l-2 26 l-32 0 z" fill="#e3d5ac"/>
    <path d="M556 276 l8 0 l-2 22 l-6 0 z" fill="#2b1f14"/>
    <g fill="#c8a75c">
      <circle cx="558" cy="310" r="2.6"/><circle cx="558" cy="326" r="2.6"/>
    </g>
    <path d="M528 278 l-14 60 l14 4 l14 -56 z" fill="#232a33"/>
    <path d="M580 278 l14 60 l-14 4 l-14 -56 z" fill="#232a33"/>
    <ellipse cx="554" cy="244" rx="18" ry="20" fill="#b3a184"/>
    <path d="M536 240 q18 -22 36 0 q3 -22 -18 -22 q-21 0 -18 22 z" fill="#232a33"/>
    <rect x="530" y="236" width="48" height="8" rx="3" fill="#232a33"/>
    <g stroke="#4a3f31" stroke-width="1.8" stroke-linecap="round">
      <line x1="545" y1="246" x2="551" y2="246"/><line x1="557" y1="246" x2="563" y2="246"/>
    </g>
    <line x1="548" y1="258" x2="560" y2="258" stroke="#6b5a45" stroke-width="1.8" stroke-linecap="round"/>
  </g>
</g>

<!-- THE MOUNTAIN-CLASS ENGINE, idling against the drift she could not beat -->
<g>
  <path d="M40 470 L40 260 q0 -84 96 -84 q96 0 96 84 l0 210 z" fill="url(#mx-head-boiler)"/>
  <ellipse cx="136" cy="270" rx="96" ry="86" fill="#232830"/>
  <ellipse cx="136" cy="270" rx="78" ry="70" fill="#1a1e24"/>
  <g fill="none" stroke="#3d444c" stroke-width="5">
    <path d="M136 200 L136 340"/><path d="M66 270 L206 270"/>
  </g>
  <circle cx="136" cy="270" r="18" fill="#3d444c"/>
  <circle cx="136" cy="270" r="9" fill="#20252b"/>
  <!-- the headlight, and its cone dying in the snow -->
  <rect x="108" y="140" width="56" height="46" rx="6" fill="#2b3037"/>
  <ellipse cx="136" cy="162" rx="18" ry="17" fill="#ffd98a"/>
  <ellipse cx="136" cy="162" rx="10" ry="9" fill="#fff4d6"/>
  <circle cx="136" cy="162" r="86" fill="url(#mx-head-head)"/>
  <path d="M136 162 L400 300 L360 420 L136 190 Z" fill="#ffd98a" opacity="0.06"/>
  <!-- stack and the steam torn flat by the wind -->
  <rect x="106" y="96" width="62" height="46" rx="4" fill="#2b3037"/>
  <rect x="98" y="88" width="78" height="14" rx="4" fill="#3d444c"/>
  <path d="M110 90 q60 -60 150 -46 q90 12 170 -14 q-60 46 -160 42 q-90 -4 -160 18 z" fill="#c6d2e0" opacity="0.16"/>
  <path d="M120 72 q70 -44 160 -34 q-70 26 -160 34 z" fill="#c6d2e0" opacity="0.1"/>
  <!-- boiler bands, handrail, and the cab -->
  <g fill="#3d444c">
    <rect x="40" y="356" width="196" height="10"/><rect x="40" y="410" width="196" height="10"/>
  </g>
  <path d="M232 232 L236 232 L236 470 L232 470 Z" fill="#2b3037"/>
  <rect x="232" y="228" width="176" height="242" fill="#20252b"/>
  <rect x="232" y="222" width="176" height="12" fill="#3d444c"/>
  <rect x="252" y="256" width="64" height="58" fill="#1b2436"/>
  <rect x="252" y="256" width="64" height="58" fill="#d9a441" opacity="0.5"/>
  <rect x="332" y="256" width="60" height="58" fill="#1b2436"/>
  <rect x="332" y="256" width="60" height="58" fill="#d9a441" opacity="0.34"/>
  <g fill="none" stroke="#3d444c" stroke-width="4">
    <rect x="252" y="256" width="64" height="58"/><rect x="332" y="256" width="60" height="58"/>
  </g>
  <!-- the fireman's silhouette at the open firebox -->
  <path d="M270 268 q16 -10 32 0 l4 46 l-40 0 z" fill="#14171b"/>
  <ellipse cx="286" cy="256" rx="11" ry="12" fill="#14171b"/>
  <rect x="252" y="356" width="156" height="70" fill="#191d22"/>
  <path d="M264 372 q34 -18 60 6 q-26 26 -60 8 z" fill="#d9a441" opacity="0.55"/>
  <path d="M272 380 q22 -12 40 4 q-18 16 -40 6 z" fill="#ffd98a" opacity="0.6"/>
  <!-- the drivers, most of them under the drift -->
  <g fill="#191d22">
    <circle cx="132" cy="452" r="52"/><circle cx="252" cy="452" r="52"/><circle cx="372" cy="452" r="46"/>
  </g>
  <g fill="none" stroke="#3d444c" stroke-width="4">
    <circle cx="132" cy="452" r="38"/><circle cx="252" cy="452" r="38"/><circle cx="372" cy="452" r="32"/>
  </g>
  <rect x="100" y="440" width="300" height="12" fill="#2b3037"/>
</g>

<!-- bell, handrails and marker lamp, all the engine keeps above the snow -->
<g>
  <rect x="196" y="176" width="12" height="20" fill="#8a6c30"/>
  <path d="M186 196 q16 -10 32 0 l-4 22 q-12 6 -24 0 z" fill="#b28c3f"/>
  <ellipse cx="202" cy="220" rx="14" ry="4" fill="#8a6c30"/>
  <rect x="52" y="330" width="180" height="6" rx="3" fill="#4d555e"/>
  <g fill="#4d555e">
    <rect x="70" y="330" width="6" height="18"/><rect x="150" y="330" width="6" height="18"/><rect x="220" y="330" width="6" height="18"/>
  </g>
  <rect x="46" y="200" width="20" height="26" rx="4" fill="#2b3037"/>
  <rect x="50" y="204" width="12" height="18" rx="3" fill="#ffd98a" opacity="0.7"/>
  <rect x="206" y="200" width="20" height="26" rx="4" fill="#2b3037"/>
  <rect x="210" y="204" width="12" height="18" rx="3" fill="#a8352a" opacity="0.6"/>
</g>

<!-- the drift she ran her nose into -->
<path d="M0 620 L0 372 q64 -46 150 -30 q76 14 128 62 q64 -22 128 8 q60 26 122 6 q76 -24 150 6 q66 26 148 8 q92 -20 174 22 L1000 620 Z" fill="url(#mx-head-snow)"/>
<path d="M0 620 L0 430 q78 -34 156 -6 q70 26 130 10 q72 -20 140 12 q70 30 138 6 q76 -26 152 4 q80 32 172 8 L1000 620 Z" fill="#d6e0ea"/>
<g fill="#8fa4c0" opacity="0.5">
  <path d="M60 452 q60 -22 120 4 l-124 16 z"/><path d="M330 470 q70 -20 132 8 l-136 14 z"/>
  <path d="M660 462 q70 -22 140 6 l-142 16 z"/>
</g>
<g stroke="#ffffff" stroke-width="2" opacity="0.35">
  <path d="M100 500 q80 -18 160 6"/><path d="M420 520 q90 -18 176 8"/><path d="M760 500 q80 -16 156 10"/>
</g>

<g stroke="#ffffff" stroke-width="1.6" opacity="0.22">
  <path d="M40 560 q120 -20 240 6"/><path d="M120 596 q140 -18 268 8"/>
  <path d="M520 566 q120 -16 236 8"/><path d="M600 604 q140 -16 280 10"/>
</g>

<!-- THE DUG PIT below the sleeper windows: where the strap came up -->
<g>
  <path d="M600 500 q64 -34 142 -8 q56 20 44 58 q-14 42 -104 40 q-92 -2 -100 -42 q-6 -30 18 -48 z" fill="#8fa4c0"/>
  <path d="M622 512 q56 -28 124 -6 q46 18 34 48 q-14 32 -92 30 q-80 -2 -84 -34 q-4 -24 18 -38 z" fill="#3d4a5e"/>
  <path d="M644 526 q46 -22 102 -4 q34 14 24 36 q-14 24 -76 22 q-64 -2 -66 -26 q-2 -18 16 -28 z" fill="#141a26"/>
  <!-- the strap, eighteen inches down, in the lantern's light -->
  <path d="M664 552 q34 -16 74 -2 l-2 14 q-38 -12 -70 4 z" fill="#4a3524"/>
  <g stroke="#8a7148" stroke-width="1.4" opacity="0.9">
    <path d="M666 552 q34 -14 72 -2"/><path d="M664 562 q34 -14 72 -2"/>
  </g>
  <path d="M732 548 l16 4 l-2 12 l-16 -4 z" fill="#e8dcbb"/>
  <!-- the lantern set in the snow, and the spade standing in it -->
  <g>
    <path d="M552 520 l40 0 l-4 -14 l-32 0 z" fill="#8a6c30"/>
    <rect x="556" y="470" width="32" height="42" rx="4" fill="#ffd98a"/>
    <rect x="560" y="474" width="24" height="34" rx="3" fill="#fff4d6"/>
    <path d="M556 470 l32 0 l-4 -14 l-24 0 z" fill="#6b5326"/>
    <rect x="566" y="446" width="12" height="12" rx="4" fill="none" stroke="#6b5326" stroke-width="3"/>
    <circle cx="572" cy="494" r="76" fill="url(#mx-head-lant)"/>
  </g>
  <g>
    <path d="M812 380 l10 -4 l52 148 l-10 4 z" fill="#5c4229"/>
    <path d="M862 522 q28 -8 40 22 q-14 26 -44 14 z" fill="#8e9298"/>
    <rect x="806" y="368" width="22" height="12" rx="5" fill="#3b2f22"/>
  </g>
  <!-- fresh spoil thrown up around the hole -->
  <g fill="#eef3f8" opacity="0.8">
    <path d="M586 512 q30 -20 56 -8 l-58 16 z"/><path d="M756 500 q30 -16 54 -2 l-56 14 z"/>
    <path d="M628 586 q40 -14 78 2 l-80 10 z"/>
  </g>
</g>

<!-- the crew, keeping their distance from the badge -->
<g>
  <path d="M228 512 q26 -16 52 0 l8 84 l-68 0 z" fill="#20252b"/>
  <ellipse cx="254" cy="492" rx="18" ry="19" fill="#8e8577"/>
  <path d="M236 488 q18 -20 36 0 q3 -20 -18 -20 q-21 0 -18 20 z" fill="#20252b"/>
  <rect x="230" y="484" width="48" height="8" rx="3" fill="#20252b"/>
  <g stroke="#4a3f31" stroke-width="1.7" stroke-linecap="round">
    <line x1="245" y1="494" x2="251" y2="494"/><line x1="257" y1="494" x2="263" y2="494"/>
  </g>
  <path d="M228 520 l-14 52 l14 4 l14 -50 z" fill="#20252b"/>
  <path d="M204 570 l24 0 l-2 26 l-20 0 z" fill="#8a6c30"/>
  <circle cx="216" cy="580" r="34" fill="url(#mx-head-lant)"/>
  <g fill="#c6d2e0" opacity="0.22">
    <path d="M272 480 q22 -12 34 -2 q-16 10 -34 2 z"/>
  </g>
</g>
<g>
  <path d="M336 502 q24 -16 48 0 l8 108 l-64 0 z" fill="#191d22"/>
  <ellipse cx="360" cy="480" rx="17" ry="18" fill="#8e8577"/>
  <path d="M343 476 q17 -19 34 0 q3 -19 -17 -19 q-20 0 -17 19 z" fill="#191d22"/>
  <rect x="338" y="472" width="45" height="7" rx="3" fill="#191d22"/>
  <g stroke="#4a3f31" stroke-width="1.6" stroke-linecap="round">
    <line x1="351" y1="482" x2="357" y2="482"/><line x1="363" y1="482" x2="369" y2="482"/>
  </g>
  <path d="M384 510 l16 56 l-14 5 l-15 -54 z" fill="#191d22"/>
  <path d="M336 510 l-16 56 l14 5 l15 -54 z" fill="#191d22"/>
  <g fill="#c6d2e0" opacity="0.2">
    <path d="M378 468 q20 -12 32 -2 q-16 10 -32 2 z"/>
  </g>
</g>

<!-- steam bleeding sideways along the ground -->
<g fill="#c6d2e0" opacity="0.14">
  <path d="M60 430 q90 -30 180 -6 q80 22 160 0 q-90 34 -180 18 q-90 -16 -160 -12 z"/>
  <path d="M120 470 q80 -20 150 -2 q-80 22 -150 2 z"/>
</g>
<g fill="#c6d2e0" opacity="0.1">
  <path d="M240 396 q110 -34 220 -4 q-110 28 -220 4 z"/>
</g>

<!-- boot tracks in the fresh snow -->
<g fill="#8fa4c0" opacity="0.45">
  <ellipse cx="300" cy="600" rx="13" ry="6"/><ellipse cx="332" cy="586" rx="12" ry="5"/>
  <ellipse cx="364" cy="600" rx="12" ry="5"/><ellipse cx="404" cy="588" rx="11" ry="5"/>
  <ellipse cx="444" cy="600" rx="11" ry="5"/><ellipse cx="486" cy="590" rx="10" ry="4"/>
  <ellipse cx="524" cy="602" rx="10" ry="4"/>
</g>

<rect width="1000" height="620" fill="url(#mx-head-vig)"/>
`,
  },
};
