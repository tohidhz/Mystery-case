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
    <stop offset="0" stop-color="#080706"/><stop offset="0.45" stop-color="#161109"/><stop offset="1" stop-color="#2f2418"/>
  </linearGradient>
  <linearGradient id="mx-comp7-side2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#453522"/><stop offset="0.34" stop-color="#2c2217"/><stop offset="1" stop-color="#0a0806"/>
  </linearGradient>
  <linearGradient id="mx-comp7-drift" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4d5b70"/><stop offset="0.3" stop-color="#7d90a8"/><stop offset="1" stop-color="#a8b8c8"/>
  </linearGradient>
  <linearGradient id="mx-comp7-chair" x1="0.08" y1="0" x2="0.95" y2="0.7">
    <stop offset="0" stop-color="#333c26"/><stop offset="0.34" stop-color="#4c5637"/><stop offset="0.68" stop-color="#6a7749"/><stop offset="1" stop-color="#414a2e"/>
  </linearGradient>
  <linearGradient id="mx-comp7-mahog" x1="0" y1="0" x2="1" y2="0.25">
    <stop offset="0" stop-color="#1d160e"/><stop offset="0.44" stop-color="#372b1e"/><stop offset="0.76" stop-color="#4b3b26"/><stop offset="1" stop-color="#2a2015"/>
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
  <linearGradient id="mx-comp7-back" x1="0" y1="0.1" x2="1" y2="0.5">
    <stop offset="0" stop-color="#1a140d"/><stop offset="0.30" stop-color="#251d14"/>
    <stop offset="0.68" stop-color="#3a2d1d"/><stop offset="0.88" stop-color="#463523"/><stop offset="1" stop-color="#2b2116"/>
  </linearGradient>
  <linearGradient id="mx-comp7-ceil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0b0805"/><stop offset="0.65" stop-color="#150f09"/><stop offset="1" stop-color="#241b11"/>
  </linearGradient>
  <radialGradient id="mx-comp7-carpet" cx="0.62" cy="0.06" r="0.82">
    <stop offset="0" stop-color="#6a4b2c"/><stop offset="0.38" stop-color="#4a3520"/>
    <stop offset="0.72" stop-color="#312415"/><stop offset="1" stop-color="#1d150e"/>
  </radialGradient>
  <linearGradient id="mx-comp7-brass" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#4e3a17"/><stop offset="0.22" stop-color="#d6b468"/><stop offset="0.44" stop-color="#8a6c30"/>
    <stop offset="0.62" stop-color="#f0dca4"/><stop offset="0.8" stop-color="#7a5d27"/><stop offset="1" stop-color="#3d2d12"/>
  </linearGradient>
  <linearGradient id="mx-comp7-baize" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#5b6842"/><stop offset="0.45" stop-color="#414c30"/><stop offset="1" stop-color="#242b1b"/>
  </linearGradient>
  <linearGradient id="mx-comp7-coat" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#232019"/><stop offset="0.5" stop-color="#413b2f"/><stop offset="1" stop-color="#1d1a15"/>
  </linearGradient>
  <linearGradient id="mx-comp7-cdoor" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#241b12"/><stop offset="0.35" stop-color="#4a3924"/><stop offset="0.72" stop-color="#5e4829"/><stop offset="1" stop-color="#33271a"/>
  </linearGradient>
  <linearGradient id="mx-comp7-paper" x1="0" y1="0" x2="1" y2="0.6">
    <stop offset="0" stop-color="#cdc2a2"/><stop offset="0.5" stop-color="#efe6cd"/><stop offset="1" stop-color="#fbf5e2"/>
  </linearGradient>
  <filter id="mx-comp7-soft" x="-30%" y="-90%" width="160%" height="280%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
</defs>

<rect width="1000" height="620" fill="url(#mx-comp7-wall)"/>

<!-- ceiling of the compartment, running back to the window wall -->
<path d="M0 0 L1000 0 L750 120 L250 120 Z" fill="url(#mx-comp7-ceil)"/>
<!-- lamplight thrown up along the boards, weakest at the corridor end -->
<path d="M560 120 L830 120 L890 26 L520 30 Z" fill="#d9a441" opacity="0.045"/>
<path d="M604 120 L788 120 L830 58 L562 60 Z" fill="#ffd98a" opacity="0.035"/>
<path d="M130 0 L285 120 M330 0 L392 120 M670 0 L608 120 M870 0 L715 120" stroke="#241b12" stroke-width="3" opacity="0.9" fill="none"/>
<path d="M134 0 L289 120 M334 0 L396 120 M666 0 L604 120 M866 0 L711 120" stroke="#4a3a24" stroke-width="1" opacity="0.45" fill="none"/>
<rect x="250" y="112" width="500" height="9" fill="#3b2f22"/>
<rect x="250" y="112" width="500" height="2.4" fill="#6a5433" opacity="0.8"/>
<rect x="250" y="119" width="500" height="3" fill="#0c0906" opacity="0.7"/>

<!-- side walls in veneer, the near ends falling away into the dark -->
<path d="M0 0 L250 120 L250 430 L0 620 Z" fill="url(#mx-comp7-side)"/>
<path d="M1000 0 L750 120 L750 430 L1000 620 Z" fill="url(#mx-comp7-side2)"/>
<path d="M0 96 L250 176 M0 250 L250 262 M0 420 L250 356 M1000 96 L750 176 M1000 250 L750 262 M1000 420 L750 356" stroke="#33271a" stroke-width="2.4" opacity="0.85" fill="none"/>
<path d="M0 99 L250 179 M0 253 L250 265 M1000 99 L750 179 M1000 253 L750 265" stroke="#6a5433" stroke-width="1" opacity="0.35" fill="none"/>
<!-- figured veneer running the length of the right-hand wall, where the light is -->
<path d="M754 190 q60 12 122 34 q60 22 124 56 M754 216 q64 14 128 40 q56 22 118 52 M754 244 q66 12 130 38 q54 20 116 48 M754 274 q68 8 132 30 q52 18 114 42 M754 306 q70 4 134 22 q50 12 112 30" stroke="#6d5535" stroke-width="1.1" fill="none" opacity="0.26"/>
<path d="M754 202 q62 14 124 38 q58 22 122 54 M754 288 q68 6 132 26 q52 16 114 36" stroke="#2a2015" stroke-width="1.6" fill="none" opacity="0.4"/>
<path d="M4 200 q64 10 122 28 q60 18 124 40 M4 262 q66 4 124 16 q58 10 122 22 M4 330 q66 -6 124 -22 q58 -14 122 -32" stroke="#3d2f1e" stroke-width="1" fill="none" opacity="0.3"/>

<!-- back wall: mahogany veneer panels, French-polished, warmer toward the lamp -->
<rect x="250" y="120" width="500" height="310" fill="url(#mx-comp7-back)"/>
<path d="M252 150 q120 16 248 6 q120 -10 248 4 M252 196 q124 14 248 4 q118 -10 248 2 M252 244 q126 12 248 2 q116 -8 248 2 M252 292 q124 10 248 0 q118 -8 248 2 M252 344 q124 8 248 -2 q118 -6 248 0 M252 388 q124 6 248 -2 q118 -6 248 0" stroke="#4a3a24" stroke-width="1" fill="none" opacity="0.22"/>
<path d="M252 172 q124 14 248 4 q118 -10 248 2 M252 316 q124 10 248 0 q118 -8 248 2" stroke="#171008" stroke-width="1.6" fill="none" opacity="0.35"/>
<!-- the beading around the flanking panels: a shadow line and a lit arris -->
<path d="M264 136 h70 v276 h-70 z M666 136 h70 v276 h-70 z" fill="none" stroke="#150f08" stroke-width="4"/>
<path d="M266 138 h70 v276 h-70 z M668 138 h70 v276 h-70 z" fill="none" stroke="#5b4629" stroke-width="1.6"/>
<rect x="666" y="136" width="70" height="276" fill="#d9a441" opacity="0.05"/>
<rect x="250" y="416" width="500" height="14" fill="#3b2f22"/>
<rect x="250" y="416" width="500" height="3" fill="#7a5f38" opacity="0.7"/>
<rect x="250" y="427" width="500" height="4" fill="#120d08" opacity="0.8"/>
<rect x="250" y="430" width="500" height="6" fill="#1b140d"/>

<!-- floor and carpet, the pile taking the lamp on its right-hand side -->
<path d="M0 620 L250 430 L750 430 L1000 620 Z" fill="#160f0a"/>
<path d="M118 620 L296 442 L704 442 L882 620 Z" fill="url(#mx-comp7-carpet)"/>
<path d="M156 620 L312 456 L688 456 L844 620 Z" fill="none" stroke="#6b4d2d" stroke-width="4"/>
<path d="M156 620 L312 456 L688 456 L844 620 Z" fill="none" stroke="#20170e" stroke-width="1.2"/>
<path d="M380 512 l18 -11 l18 11 l-18 11 z M500 512 l18 -11 l18 11 l-18 11 z M620 512 l18 -11 l18 11 l-18 11 z M330 580 l20 -13 l20 13 l-20 13 z M660 580 l20 -13 l20 13 l-20 13 z" fill="#4a3524" opacity="0.7"/>
<path d="M436 512 l16 -10 l16 10 l-16 10 z M556 512 l16 -10 l16 10 l-16 10 z M396 580 l18 -12 l18 12 l-18 12 z M600 580 l18 -12 l18 12 l-18 12 z" stroke="#7a5731" stroke-width="1.1" fill="none" opacity="0.35"/>
<!-- pile direction: the sweep the corridor door has worn -->
<path d="M170 600 q120 -76 258 -122 M212 618 q130 -80 268 -128" stroke="#25190f" stroke-width="6" opacity="0.28" fill="none"/>
<path d="M118 620 L296 442 L360 442 L212 620 Z" fill="#0e0a07" opacity="0.42"/>

<!-- the sealed window: the drift pressing gray against the glass -->
<g>
  <rect x="330" y="158" width="232" height="168" rx="5" fill="#231a11"/>
  <rect x="333" y="161" width="226" height="162" rx="4" fill="#3b2f22"/>
  <rect x="333" y="161" width="226" height="3" fill="#6d5533" opacity="0.7"/>
  <rect x="340" y="168" width="212" height="148" fill="url(#mx-comp7-drift)"/>
  <!-- packed drift jammed against the pane, right to the top -->
  <path d="M340 186 q26 -14 50 -2 q26 -14 52 0 q28 -14 54 -2 q26 -10 56 -4 l0 138 l-212 0 z" fill="#b6c4d4"/>
  <path d="M340 222 q30 -12 56 0 q28 -12 58 2 q30 -10 56 0 l42 4 l0 88 l-212 0 z" fill="#c6d2e0"/>
  <path d="M340 262 q36 -12 68 0 q34 -10 68 4 q26 -6 44 -2 l0 52 l-180 0 z" fill="#d6dfe8"/>
  <!-- the drift is banked, not flat: shaded hollows where it has slumped -->
  <path d="M340 226 q30 -12 56 0 q-24 14 -56 12 z M452 232 q30 -10 56 0 q-26 14 -58 10 z" fill="#93a5bb" opacity="0.45"/>
  <path d="M376 268 q34 -10 66 2 q-32 12 -68 6 z" fill="#a8b8c8" opacity="0.45"/>
  <path d="M340 268 q34 -8 66 4 l0 6 q-34 -8 -66 -2 z M444 274 q28 -6 62 4 l0 6 q-30 -8 -62 -2 z" fill="#f2f6fa" opacity="0.45"/>
  <g class="fx-drift-slow" style="--d:-11s"><g fill="#8fa4c0" opacity="0.55">
    <path d="M348 236 q28 -10 54 2 l-52 8 z"/><path d="M436 254 q30 -8 54 4 l-56 8 z"/>
    <path d="M356 288 q28 -8 50 2 l-48 8 z"/><path d="M462 292 q26 -6 46 2 l-46 8 z"/>
  </g></g>
  <g class="fx-drift-slow"><g stroke="#eef3f8" stroke-width="1.6" opacity="0.55">
    <path d="M368 200 q22 -8 44 0"/><path d="M462 216 q24 -8 46 0"/><path d="M382 274 q26 -8 50 0"/>
  </g></g>
  <g class="fx-drift-slow" style="--d:-6s"><g stroke="#f0f4f8" stroke-width="1.4" opacity="0.45">
    <path d="M346 174 l12 12 l-7 11"/><path d="M544 178 l-13 10 l7 12"/>
    <path d="M348 302 l14 -8"/><path d="M540 308 l-16 -7"/>
  </g></g>
  <!-- frost feathering in from the corners of the pane, inside -->
  <path d="M340 168 l22 20 M344 168 l10 26 M340 180 l26 8 M552 168 l-24 22 M546 168 l-10 26 M552 182 l-28 8 M340 316 l20 -20 M354 316 l-8 -24 M552 316 l-22 -18 M534 316 l8 -22" stroke="#e6eef6" stroke-width="1.1" fill="none" opacity="0.5"/>
  <path d="M348 176 l8 8 l-4 8 M540 178 l-8 8 l4 8 M400 172 l6 10 M470 174 l-6 10" stroke="#ffffff" stroke-width="0.7" fill="none" opacity="0.35"/>
  <!-- condensation standing at the foot of the glass, and two runnels -->
  <rect x="340" y="292" width="212" height="24" fill="#cfdae6" opacity="0.30"/>
  <rect x="340" y="306" width="212" height="10" fill="#e8eef5" opacity="0.32"/>
  <path d="M372 268 q3 22 -1 46 M498 276 q4 20 0 40 M418 284 q2 16 0 32" stroke="#eef4fa" stroke-width="1.5" opacity="0.45" fill="none"/>
  <rect x="340" y="168" width="212" height="16" fill="#2b3548" opacity="0.85"/>
  <rect x="340" y="182" width="212" height="3" fill="#0e131d" opacity="0.6"/>
  <rect x="440" y="168" width="7" height="148" fill="#3b2f22"/>
  <rect x="440" y="168" width="2" height="148" fill="#6d5533" opacity="0.6"/>
  <!-- the lamp finding the brass frame beads -->
  <rect x="330" y="158" width="232" height="8" fill="url(#mx-comp7-brass)"/>
  <rect x="330" y="318" width="232" height="10" fill="url(#mx-comp7-brass)"/>
  <rect x="322" y="326" width="248" height="12" fill="#4a3524"/>
  <rect x="322" y="326" width="248" height="2.6" fill="#8a6a3c" opacity="0.8"/>
  <rect x="322" y="336" width="248" height="3" fill="#120d08" opacity="0.7"/>
  <!-- this window still has its lifting strap -->
  <path d="M418 328 l20 0 l-3 62 q-8 8 -16 2 z" fill="#4a3524"/>
  <path d="M418 328 l7 0 l-2 62 q-4 3 -8 0 z" fill="#6b4f2c"/>
  <path d="M422 330 l-2 56 M434 330 l-2 56" stroke="#6b5a45" stroke-width="1.2" opacity="0.85" fill="none"/>
  <path d="M419 342 l19 0 M419 358 l18 0 M420 374 l17 0" stroke="#241a10" stroke-width="0.9" opacity="0.7" fill="none"/>
  <rect x="418" y="386" width="20" height="10" rx="3" fill="url(#mx-comp7-brass)"/>
  <rect x="421" y="388" width="14" height="2" rx="1" fill="#f0dca4" opacity="0.6"/>
  <path d="M424 390 l8 0 l0 5 l-8 0 z" fill="#1b1409" opacity="0.7"/>
</g>
<!-- cold running down the wall out of the sealed frame -->
<rect x="322" y="336" width="248" height="96" fill="#8fa4c0" opacity="0.07"/>

<!-- his overcoat on the wall hook, the hat above it -->
<g>
  <path d="M262 176 q22 34 20 90 l6 96 l-14 6 l-6 -100 q-2 -56 -18 -88 z" fill="#0d0a06" opacity="0.5"/>
  <rect x="272" y="150" width="46" height="9" rx="3" fill="url(#mx-comp7-brass)"/>
  <circle cx="282" cy="162" r="5" fill="#9b7a3f"/><circle cx="308" cy="162" r="5" fill="#9b7a3f"/>
  <path d="M282 164 q-22 26 -20 66 l6 96 q26 10 52 0 l6 -96 q2 -40 -20 -66 z" fill="url(#mx-comp7-coat)"/>
  <path d="M294 166 l0 158" stroke="#1b1812" stroke-width="3"/>
  <path d="M296 166 l0 158" stroke="#544c3d" stroke-width="1.2" opacity="0.6"/>
  <path d="M282 164 q10 20 12 44 q4 -24 14 -44 z" fill="#514936"/>
  <path d="M296 208 q10 -22 12 -44 l6 6 q-6 22 -14 42 z" fill="#665c45" opacity="0.5"/>
  <path d="M266 250 q10 40 8 76 M320 254 q-8 38 -6 72 M304 220 q8 46 6 100" stroke="#171410" stroke-width="2" opacity="0.55" fill="none"/>
  <g fill="#4a4234">
    <circle cx="296" cy="238" r="3"/><circle cx="296" cy="266" r="3"/><circle cx="296" cy="294" r="3"/>
  </g>
  <path d="M262 320 q26 12 54 2 l0 8 q-28 10 -54 0 z" fill="#0f0d0a" opacity="0.5"/>
  <ellipse cx="295" cy="146" rx="30" ry="8" fill="#241f19"/>
  <ellipse cx="302" cy="144" rx="20" ry="4" fill="#463f32" opacity="0.6"/>
  <path d="M275 146 q20 -26 40 0 z" fill="#3a342a"/>
  <path d="M302 130 q13 4 13 16 l-8 0 q0 -10 -8 -14 z" fill="#544c3d" opacity="0.7"/>
  <path d="M277 138 q18 -8 36 0" fill="none" stroke="#1d1a14" stroke-width="3"/>
</g>

<!-- ceiling vent and the folded upper berth -->
<rect x="452" y="126" width="96" height="16" rx="3" fill="#241b12"/>
<rect x="452" y="126" width="96" height="2" rx="1" fill="#5d492c" opacity="0.6"/>
<path d="M462 128 L462 140 M478 128 L478 140 M494 128 L494 140 M510 128 L510 140 M526 128 L526 140 M540 128 L540 140" stroke="#3b2f22" stroke-width="2" fill="none"/>
<rect x="452" y="139" width="96" height="3" fill="#0c0906" opacity="0.7"/>

<!-- berth lamp: the one warm thing in the room -->
<g>
  <rect class="fx-glow" x="606" y="176" width="220" height="200" fill="url(#mx-comp7-lamp)"/>
  <rect x="672" y="186" width="10" height="26" fill="#6b5326"/>
  <rect x="672" y="186" width="3" height="26" fill="#c8a75c" opacity="0.7"/>
  <ellipse cx="677" cy="188" rx="16" ry="5" fill="#8a6c30"/>
  <ellipse cx="677" cy="186" rx="16" ry="4" fill="#c8a75c"/>
  <path d="M646 212 q31 -18 62 0 l-6 34 q-25 10 -50 0 z" fill="#8a6c30"/>
  <path d="M646 212 q31 -18 62 0 l-2 6 q-29 -14 -58 0 z" fill="#b28c3f"/>
  <path d="M700 216 q8 4 8 -4 l-6 34 q-4 3 -6 2 z" fill="#f0dca4" opacity="0.45"/>
  <path d="M650 218 q-4 2 -4 -6 l6 34 q3 2 5 1 z" fill="#3f2f11" opacity="0.5"/>
  <ellipse cx="677" cy="246" rx="25" ry="7" fill="#ffe9bd" opacity="0.9"/>
  <g class="fx-glow" style="--d:-1.2s"><ellipse cx="677" cy="248" rx="26" ry="8" fill="#ffd98a" opacity="0.75"/></g>
  <g class="fx-glow" style="--d:-2.6s"><ellipse cx="677" cy="252" rx="72" ry="24" fill="#d9a441" opacity="0.12"/></g>
</g>
<rect class="fx-glow" style="--d:-3.4s" width="1000" height="620" fill="url(#mx-comp7-glow)"/>

<!-- brass luggage racks on both walls, netting slung between the rails -->
<path d="M20 121 L246 179 M980 121 L754 179" stroke="#4a3718" stroke-width="6" fill="none"/>
<path d="M20 118 L246 176 M20 148 L246 198 M980 118 L754 176 M980 148 L754 198" stroke="#8a6c30" stroke-width="5" fill="none"/>
<path d="M20 116 L246 174 M980 116 L754 174 M980 146 L754 196" stroke="#d6b468" stroke-width="1.5" fill="none" opacity="0.7"/>
<path d="M26 130 L246 186 M40 128 L246 182 M980 130 L760 186 M966 128 L760 182" stroke="#7a5f2c" stroke-width="1" fill="none" opacity="0.5"/>
<path d="M40 126 L54 156 M70 134 L84 162 M100 142 L114 168 M130 149 L144 175 M160 157 L174 182 M190 164 L204 189 M220 172 L234 195 M960 126 L946 156 M930 134 L916 162 M900 142 L886 168 M870 149 L856 175 M840 157 L826 182 M810 164 L796 189 M780 172 L766 195" stroke="#5c4a2a" stroke-width="1.1" fill="none" opacity="0.55"/>
<path d="M78 132 L78 160 M164 154 L164 180 M922 132 L922 160 M836 154 L836 180" stroke="#8a6c30" stroke-width="3" fill="none"/>
<path d="M60 118 L182 150 L182 186 L60 156 Z" fill="#3a2a1b"/>
<path d="M60 118 L182 150 L182 158 L60 128 Z" fill="#5c4229"/>
<path d="M170 152 L182 155 L182 186 L170 183 Z" fill="#22190f" opacity="0.7"/>
<path d="M92 128 L92 166 M148 143 L148 178" stroke="#33271a" stroke-width="3" fill="none"/>
<path d="M94 129 L94 166 M150 144 L150 178" stroke="#7d6134" stroke-width="1" opacity="0.5" fill="none"/>

<!-- THE FORCED CORRIDOR DOOR, left wall: chain plate torn out, bolt bent -->
<g>
  <path d="M40 88 L190 137 L190 455 L40 560 Z" fill="#0b0906"/>
  <path d="M52 100 L182 142 L182 448 L52 546 Z" fill="#0e0b08"/>
  <path d="M120 122 L152 132 L152 452 L120 486 Z" fill="#d9a441" opacity="0.16"/>
  <path d="M132 126 L142 129 L142 456 L132 472 Z" fill="#ffd98a" opacity="0.18"/>
  <path d="M36 96 L124 124 L118 470 L34 552 Z" fill="url(#mx-comp7-mahog)"/>
  <path d="M38 130 q42 12 82 22 M38 196 q42 10 82 18 M38 262 q42 6 82 12 M37 330 q42 2 81 4 M36 400 q42 -4 81 -8 M35 468 q42 -8 81 -16" stroke="#5b4527" stroke-width="0.9" fill="none" opacity="0.26"/>
  <path d="M46 122 L110 143 L106 300 L46 316 Z M46 336 L106 328 L102 448 L44 500 Z" fill="none" stroke="#120d07" stroke-width="4"/>
  <path d="M48 124 L112 145 L108 302 L48 318 Z M48 338 L108 330 L104 450 L46 502 Z" fill="none" stroke="#5b4527" stroke-width="1.4"/>
  <path d="M110 143 L118 146 L114 468 L106 470 Z" fill="#d9a441" opacity="0.10"/>
  <path d="M124 208 l26 10 l-14 6 l16 10 l-30 -12 z M120 250 l34 12 l-18 5 l22 12 l-40 -16 z M122 300 l24 10 l-13 6 l17 9 l-30 -12 z M126 344 l30 12 l-16 4 l18 10 l-34 -14 z" fill="#a08453"/>
  <path d="M124 208 l26 10 l-6 2 l-22 -9 z M120 250 l34 12 l-8 2 l-28 -11 z M122 300 l24 10 l-6 3 l-20 -9 z M126 344 l30 12 l-7 2 l-25 -10 z" fill="#e2c88f" opacity="0.55"/>
  <path d="M118 226 l20 8 l-20 4 z M116 276 l22 8 l-22 5 z M118 322 l18 7 l-18 4 z" fill="#6b5a45"/>
  <!-- the chain plate: came away whole, four screws still in it -->
  <g>
    <path d="M152 248 l30 10 l0 40 l-30 -12 z" fill="#150f07" opacity="0.6"/>
    <path d="M150 244 l30 10 l0 40 l-30 -12 z" fill="#8a6c30"/>
    <path d="M154 250 l22 8 l0 30 l-22 -9 z" fill="#b28c3f"/>
    <path d="M154 250 l22 8 l0 5 l-22 -8 z" fill="#e6cf95" opacity="0.7"/>
    <path d="M172 256 l4 2 l0 30 l-4 -2 z" fill="#f0dca4" opacity="0.45"/>
    <g fill="#5c4229">
      <circle cx="160" cy="258" r="3.4"/><circle cx="171" cy="262" r="3.4"/>
      <circle cx="160" cy="278" r="3.4"/><circle cx="171" cy="282" r="3.4"/>
    </g>
    <g fill="#e8dcbb" opacity="0.6">
      <circle cx="160" cy="258" r="1.2"/><circle cx="171" cy="262" r="1.2"/>
    </g>
    <path d="M148 268 q-16 22 -22 44 q-4 16 6 26" fill="none" stroke="#9b7a3f" stroke-width="4" stroke-linecap="round"/>
    <path d="M147 269 q-16 22 -22 44 q-4 16 6 26" fill="none" stroke="#e2c374" stroke-width="1.2" stroke-linecap="round" opacity="0.6"/>
    <g fill="none" stroke="#c8a75c" stroke-width="2">
      <ellipse cx="140" cy="286" rx="5" ry="4"/><ellipse cx="132" cy="304" rx="5" ry="4"/>
      <ellipse cx="128" cy="322" rx="5" ry="4"/><ellipse cx="132" cy="338" rx="5" ry="4"/>
    </g>
    <path d="M137 283 q4 -2 6 1 M129 301 q4 -2 6 1 M125 319 q4 -2 6 1" fill="none" stroke="#f4e4b4" stroke-width="0.8" opacity="0.7"/>
    <g fill="#cfc6b2" opacity="0.75">
      <ellipse cx="176" cy="252" rx="6" ry="3"/><ellipse cx="182" cy="288" rx="5" ry="3"/>
    </g>
  </g>
  <!-- the brass privacy bolt, bent in its torn keeper -->
  <g>
    <path d="M148 372 l30 10 l0 22 l-30 -10 z" fill="#8a6c30"/>
    <path d="M124 376 l28 8 l-2 14 l-28 -8 z" fill="#c8a75c"/>
    <path d="M124 376 l28 8 l-1 4 l-28 -8 z" fill="#f0dca4" opacity="0.7"/>
    <path d="M150 382 l24 8 l-8 6 l-18 -6 z" fill="#e2c374"/>
    <path d="M176 388 l14 6 l-4 12 l-12 -8 z" fill="#6b5326"/>
    <path d="M146 396 l32 10 l0 4 l-32 -10 z" fill="#150f07" opacity="0.55"/>
  </g>
  <!-- splinters torn out of the jamb, on the carpet -->
  <path d="M172 500 l34 8 l-30 4 z M198 528 l28 6 l-26 5 z M154 546 l24 5 l-22 5 z" fill="#8a7148"/>
  <path d="M176 510 l30 4 l-4 4 l-28 -3 z M202 537 l26 5 l-4 3 l-24 -4 z M158 554 l22 5 l-3 3 l-20 -4 z" fill="#0d0906" opacity="0.5"/>
  <path d="M172 500 l34 8 l-8 1 l-26 -7 z M198 528 l28 6 l-7 1 l-22 -5 z" fill="#c2a874" opacity="0.5"/>
</g>

<!-- THE COMMUNICATING DOOR to compartment 8, right wall -->
<g>
  <path d="M806 132 L964 84 L964 566 L806 458 Z" fill="#33271a"/>
  <path d="M806 132 L964 84 L964 96 L806 144 Z" fill="#7a5f38" opacity="0.6"/>
  <path d="M814 142 L956 98 L956 552 L814 450 Z" fill="url(#mx-comp7-cdoor)"/>
  <path d="M818 168 q70 -18 136 -32 M818 230 q70 -14 136 -26 M818 292 q70 -8 136 -14 M818 356 q70 -2 136 -2 M818 420 q70 6 136 12" stroke="#7a5f38" stroke-width="1" fill="none" opacity="0.22"/>
  <path d="M826 162 L946 124 L946 288 L826 282 Z M826 314 L946 316 L946 500 L826 424 Z" fill="none" stroke="#1c1409" stroke-width="4.5"/>
  <path d="M828 164 L948 126 L948 290 L828 284 Z M828 316 L948 318 L948 502 L828 426 Z" fill="none" stroke="#8a6b3c" stroke-width="1.6"/>
  <path d="M830 166 L942 130 L942 284 L830 279 Z" fill="#d9a441" opacity="0.055"/>
  <path d="M814 142 L826 146 L826 452 L814 450 Z" fill="#120d08"/>
  <!-- escutcheon, handle and the little brass finger plate -->
  <g>
    <rect x="826" y="290" width="38" height="20" rx="5" fill="#171008" opacity="0.55"/>
    <rect x="828" y="292" width="34" height="16" rx="4" fill="url(#mx-comp7-brass)"/>
    <rect x="833" y="295" width="24" height="9" rx="3" fill="#c8a75c"/>
    <rect x="833" y="295" width="24" height="2.6" rx="1" fill="#f4e4b4" opacity="0.7"/>
    <path d="M842 306 l14 0 l3 30 l-16 0 z" fill="#9b7a3f"/>
    <path d="M842 306 l5 0 l1 30 l-6 0 z" fill="#e2c374" opacity="0.7"/>
    <ellipse cx="850" cy="338" rx="9" ry="6" fill="#c8a75c"/>
    <ellipse cx="848" cy="336" rx="4" ry="2.4" fill="#f8ecc4" opacity="0.8"/>
    <path d="M820 296 l10 2 l0 10 l-10 -2 z" fill="#e8dcbb"/>
    <path d="M866 300 l10 -3 l1 44 l-10 2 z" fill="#8a6c30" opacity="0.5"/>
  </g>
  <ellipse cx="906" cy="306" rx="11" ry="9" fill="#9b7a3f"/>
  <ellipse cx="906" cy="304" rx="5" ry="4" fill="#e2c374"/>
  <ellipse cx="904" cy="302" rx="2.2" ry="1.6" fill="#fff3d2" opacity="0.8"/>
  <path d="M814 146 L820 148 L820 450 L814 450 Z" fill="#8fa4c0" opacity="0.2"/>
  <path d="M950 100 L956 98 L956 552 L950 548 Z" fill="#0f0b06" opacity="0.6"/>
</g>

<!-- what the chair puts on the carpet: the lamp is to the right, so the shadow runs left -->
<ellipse cx="344" cy="540" rx="118" ry="24" fill="#0a0705" opacity="0.42" filter="url(#mx-comp7-soft)"/>

<!-- the blood-settled stain under the chair, long dried -->
<ellipse cx="404" cy="512" rx="104" ry="28" fill="#2f1310" opacity="0.95"/>
<ellipse cx="398" cy="510" rx="74" ry="19" fill="#4a1a14" opacity="0.6"/>
<ellipse cx="372" cy="516" rx="30" ry="9" fill="#3a1512"/>
<ellipse cx="430" cy="504" rx="34" ry="8" fill="#6b2a1e" opacity="0.35"/>

<!-- THE ARMCHAIR and Ambrose Keene, where the mountain found him -->
<g>
  <path d="M296 300 q104 -46 208 0 l0 176 l-208 0 z" fill="#221a12"/>
  <path d="M312 316 q88 -38 176 0 l0 150 l-176 0 z" fill="url(#mx-comp7-chair)"/>
  <path d="M312 316 q88 -38 176 0 l0 18 q-88 -34 -176 0 z" fill="#7a875a" opacity="0.35"/>
  <path d="M456 322 q18 6 32 -6 l0 150 l-32 0 z" fill="#7e8b57" opacity="0.22"/>
  <path d="M312 320 q14 -6 28 -10 l0 156 l-28 0 z" fill="#161a10" opacity="0.35"/>
  <!-- buttoned moquette: each button pulls a shadow above and a lit ridge below -->
  <g fill="#252c1a" opacity="0.55">
    <ellipse cx="352" cy="352" rx="12" ry="7"/><ellipse cx="400" cy="342" rx="12" ry="7"/><ellipse cx="448" cy="352" rx="12" ry="7"/>
    <ellipse cx="352" cy="400" rx="12" ry="7"/><ellipse cx="448" cy="400" rx="12" ry="7"/>
  </g>
  <g fill="#39422c">
    <circle cx="352" cy="356" r="5"/><circle cx="400" cy="346" r="5"/><circle cx="448" cy="356" r="5"/>
    <circle cx="352" cy="404" r="5"/><circle cx="448" cy="404" r="5"/>
  </g>
  <g fill="#8b9a66" opacity="0.55">
    <circle cx="351" cy="354.4" r="2"/><circle cx="399" cy="344.4" r="2"/><circle cx="447" cy="354.4" r="2"/>
    <circle cx="351" cy="402.4" r="2"/><circle cx="447" cy="402.4" r="2"/>
  </g>
  <path d="M352 356 q22 12 48 -10 q24 22 48 10 M352 404 q24 10 48 -6 q24 16 48 6 M352 356 q-6 26 0 48 M448 356 q6 26 0 48" stroke="#2b3220" stroke-width="1.6" fill="none" opacity="0.5"/>
  <path d="M286 396 q22 -24 44 -8 l0 76 l-44 0 z" fill="#241a11"/>
  <path d="M286 396 q22 -24 44 -8 l0 10 q-22 -14 -44 8 z" fill="#4a3a22" opacity="0.5"/>
  <path d="M470 396 q22 -16 44 8 l0 68 l-44 0 z" fill="#3d301f"/>
  <path d="M470 396 q22 -16 44 8 l0 10 q-22 -22 -44 -6 z" fill="#75603c" opacity="0.55"/>
  <path d="M296 452 l208 0 l16 44 l-240 0 z" fill="#4a5539"/>
  <path d="M296 452 l208 0 l4 10 l-216 0 z" fill="#7e8c5e"/>
  <path d="M440 452 l64 0 l16 44 l-70 0 z" fill="#6b7a4c" opacity="0.35"/>
  <path d="M280 452 l40 0 l-8 44 l-32 0 z" fill="#1e2416" opacity="0.4"/>
  <path d="M340 462 q8 20 4 34 M400 462 q0 20 0 34 M460 462 q-6 20 -4 34" stroke="#333c25" stroke-width="1.4" fill="none" opacity="0.5"/>
  <rect x="292" y="494" width="18" height="34" fill="#1d150d"/>
  <rect x="492" y="494" width="18" height="34" fill="#2c2115"/>
  <rect x="492" y="494" width="5" height="34" fill="#5b4529" opacity="0.6"/>
  <g>
    <path d="M342 348 q58 -32 118 0 l4 96 l-126 0 z" fill="#1a1714"/>
    <path d="M420 350 q24 4 40 -2 l4 96 l-40 0 z" fill="#2e2a24" opacity="0.7"/>
    <path d="M358 354 q42 -20 84 0 l-6 38 l-72 0 z" fill="#26221c"/>
    <!-- the throat, bared where the collar has gone slack -->
    <path d="M383 296 l34 0 l0 46 l-34 0 z" fill="#a08d70"/>
    <path d="M383 296 l10 0 l0 46 l-10 0 z" fill="#7d6c53"/>
    <path d="M410 296 l7 0 l0 46 l-7 0 z" fill="#c0aa88" opacity="0.7"/>
    <g transform="rotate(-7 400 288)">
      <ellipse cx="400" cy="286" rx="25" ry="29" fill="#a2906f"/>
      <ellipse cx="408" cy="284" rx="16" ry="25" fill="#c1ad8a" opacity="0.6"/>
      <ellipse cx="380" cy="292" rx="9" ry="20" fill="#6f6047" opacity="0.5"/>
      <path d="M376 274 q24 -20 48 0 q2 -24 -24 -24 q-26 0 -24 24 z" fill="#6a625a"/>
      <path d="M400 250 q24 0 24 24 l-8 -1 q0 -17 -18 -18 z" fill="#847b70" opacity="0.6"/>
      <path d="M376 274 q-3 14 1 24 l5 -4 q-3 -11 -1 -19 z" fill="#5c554e"/>
      <path d="M424 274 q3 14 -1 24 l-5 -4 q3 -11 1 -19 z" fill="#7d746a"/>
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
    <path d="M381 326 l38 -2 l0.4 4 l-38 2 z" fill="#2c0f0b" opacity="0.7"/>
    <g fill="#8a4032" opacity="0.9">
      <circle cx="386" cy="317" r="1.5"/><circle cx="394" cy="316" r="1.5"/><circle cx="402" cy="316" r="1.5"/>
      <circle cx="410" cy="315" r="1.5"/><circle cx="417" cy="315" r="1.5"/>
      <circle cx="386" cy="328" r="1.5"/><circle cx="394" cy="328" r="1.5"/><circle cx="402" cy="327" r="1.5"/>
      <circle cx="410" cy="327" r="1.5"/><circle cx="417" cy="326" r="1.5"/>
    </g>
    <!-- the loose collar, the dark tie -->
    <path d="M370 338 l60 0 l8 24 l-76 0 z" fill="#d8caa2"/>
    <path d="M404 338 l26 0 l8 24 l-34 0 z" fill="#f3ead1"/>
    <path d="M386 338 l28 0 l-2 12 l-24 0 z" fill="#7d6c53"/>
    <path d="M374 340 l16 18 l-22 6 z" fill="#e8dec4"/>
    <path d="M426 340 l-16 18 l22 6 z" fill="#fbf5e2"/>
    <path d="M394 356 l12 0 l5 48 l-22 0 z" fill="#39150f"/>
    <path d="M394 356 l12 0 l1 6 l-14 0 z" fill="#59211a"/>
    <path d="M400 362 l6 0 l3 42 l-8 0 z" fill="#5a221a" opacity="0.5"/>
    <path d="M364 366 l36 26 l-2 54 l-34 0 z" fill="#1f1c17"/>
    <path d="M436 366 l-36 26 l2 54 l34 0 z" fill="#332c23"/>
    <path d="M436 366 l-14 10 l1 70 l13 0 z" fill="#443b2e" opacity="0.6"/>
    <g fill="#9b7a3f">
      <circle cx="400" cy="404" r="3"/><circle cx="400" cy="420" r="3"/><circle cx="400" cy="436" r="3"/>
    </g>
    <path d="M370 394 q22 18 30 4" fill="none" stroke="#9b7a3f" stroke-width="2.2"/>
    <path d="M370 393 q22 18 30 4" fill="none" stroke="#e2c374" stroke-width="0.9" opacity="0.6"/>
    <path d="M312 400 q30 -12 50 6 l-6 26 l-44 0 z" fill="#1c1915"/>
    <path d="M348 404 q10 4 14 2 l-6 26 l-14 0 z" fill="#302a22" opacity="0.7"/>
    <path d="M306 424 q16 -10 30 -2 q6 8 -2 14 q-18 6 -30 -2 z" fill="#95836a"/>
    <path d="M322 422 q10 0 14 0 q6 8 -2 14 q-6 2 -12 1 z" fill="#b39d7d" opacity="0.6"/>
    <path d="M310 430 l18 2 M311 435 l16 1" stroke="#7d6c53" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <path d="M446 400 q32 -10 52 8 l-6 26 l-46 0 z" fill="#241f19"/>
    <path d="M476 402 q16 0 22 6 l-6 26 l-20 0 z" fill="#3a3229" opacity="0.7"/>
    <path d="M474 424 q16 -10 30 -2 q6 8 -2 14 q-18 6 -30 -2 z" fill="#b09b7a"/>
    <path d="M474 424 q10 -6 18 -4 q-8 8 -6 20 q-10 0 -14 -4 q-6 -6 2 -12 z" fill="#8d7b60" opacity="0.5"/>
    <path d="M478 430 l18 2 M479 435 l16 1" stroke="#7d6c53" stroke-width="1.3" stroke-linecap="round" fill="none"/>
    <!-- the lap, the knees at the front edge of the seat -->
    <path d="M352 434 l96 0 l16 56 l-128 0 z" fill="#1f1b17"/>
    <path d="M416 434 l32 0 l16 56 l-42 0 z" fill="#2e2820" opacity="0.75"/>
    <path d="M358 470 l84 0 l6 20 l-96 0 z" fill="#15120e"/>
    <path d="M350 488 l46 0 l2 50 l-54 0 z" fill="#16130f"/>
    <path d="M406 488 l46 0 l4 50 l-54 0 z" fill="#1d1914"/>
    <path d="M436 488 l16 0 l4 50 l-18 0 z" fill="#2b2620" opacity="0.7"/>
    <ellipse cx="366" cy="552" rx="30" ry="6" fill="#080605" opacity="0.6"/>
    <ellipse cx="428" cy="552" rx="30" ry="6" fill="#080605" opacity="0.6"/>
    <ellipse cx="370" cy="544" rx="27" ry="10" fill="#0e0b08"/>
    <ellipse cx="432" cy="544" rx="27" ry="10" fill="#14100c"/>
    <ellipse cx="440" cy="540" rx="14" ry="4" fill="#3a332a" opacity="0.55"/>
    <ellipse cx="376" cy="540" rx="12" ry="3.4" fill="#2c2620" opacity="0.4"/>
    <path d="M348 540 l44 0 l0 6 l-44 0 z M410 540 l44 0 l0 6 l-44 0 z" fill="#0b0906"/>
  </g>
</g>

<!-- side table: the ashtray, the cold Havana, the unstruck matches -->
<g>
  <ellipse cx="536" cy="544" rx="66" ry="16" fill="#0a0705" opacity="0.5"/>
  <ellipse cx="560" cy="462" rx="52" ry="15" fill="#3a2a1b"/>
  <ellipse cx="560" cy="456" rx="52" ry="15" fill="#5c4229"/>
  <path d="M560 441 q52 0 52 15 q0 6 -14 10 q10 -8 6 -14 q-8 -11 -44 -11 z" fill="#8a6539" opacity="0.6"/>
  <path d="M508 456 q0 -10 22 -13 q-14 5 -14 13 q0 8 14 12 q-22 -3 -22 -12 z" fill="#241a10" opacity="0.6"/>
  <rect x="554" y="466" width="13" height="62" fill="#3b2f22"/>
  <rect x="563" y="466" width="4" height="62" fill="#6b5030" opacity="0.7"/>
  <rect x="554" y="466" width="3" height="62" fill="#1c1409" opacity="0.7"/>
  <ellipse cx="560" cy="532" rx="27" ry="8" fill="#33271a"/>
  <ellipse cx="566" cy="530" rx="16" ry="3.4" fill="#5d4728" opacity="0.6"/>
  <ellipse cx="560" cy="450" rx="32" ry="11" fill="#8d857a"/>
  <ellipse cx="566" cy="448" rx="26" ry="8" fill="#bdb5a8"/>
  <ellipse cx="560" cy="447" rx="23" ry="7" fill="#6f6a61"/>
  <ellipse cx="566" cy="446" rx="14" ry="3.4" fill="#8a857c" opacity="0.7"/>
  <path d="M540 440 l20 -3 l0 7 l-20 3 z" fill="#cfc6b2"/>
  <!-- the cigar: gone out cold at two inches, ash unbroken -->
  <path d="M534 438 l32 -7 l2 9 l-32 7 z" fill="#4a3524"/>
  <path d="M534 438 l32 -7 l1 3 l-32 7 z" fill="#7a5b36" opacity="0.7"/>
  <path d="M564 431 l24 -5 l2 9 l-24 5 z" fill="#8e8e88"/>
  <path d="M564 431 l24 -5 l1 3 l-24 5 z" fill="#c2c2ba" opacity="0.6"/>
  <path d="M584 427 l10 -2 l1 8 l-10 2 z" fill="#a9a091"/>
  <path d="M540 438 l1 8 M552 436 l1 8" stroke="#6b5a45" stroke-width="1" opacity="0.7" fill="none"/>
  <path d="M568 431 l1 8 M576 429 l1 8 M584 428 l1 7" stroke="#4a4a45" stroke-width="0.8" opacity="0.6" fill="none"/>
  <!-- his matches, beside it, unstruck -->
  <g>
    <ellipse cx="588" cy="466" rx="20" ry="4" fill="#1a120b" opacity="0.5"/>
    <rect x="572" y="452" width="32" height="13" rx="2" fill="#d8caa2"/>
    <rect x="596" y="452" width="8" height="13" rx="2" fill="#f3ead1" opacity="0.7"/>
    <rect x="572" y="452" width="32" height="4" rx="2" fill="#a8352a"/>
    <rect x="572" y="452" width="32" height="1.4" rx="1" fill="#d1655a" opacity="0.7"/>
    <path d="M588 448 l24 -4 l1 4 l-24 4 z" fill="#e3d5ac"/>
    <circle cx="613" cy="444" r="3.2" fill="#a8352a"/>
    <path d="M584 456 l22 -5 l1 4 l-22 5 z" fill="#e3d5ac"/>
    <circle cx="607" cy="450" r="3.2" fill="#a8352a"/>
  </g>
</g>

<!-- THE WRITING DESK: the last column, the red pencil across it -->
<g>
  <ellipse cx="620" cy="470" rx="130" ry="26" fill="#0a0705" opacity="0.38"/>
  <path d="M566 350 L748 350 L764 378 L550 378 Z" fill="#5c4229"/>
  <path d="M660 350 L748 350 L764 378 L660 378 Z" fill="#7a5730" opacity="0.5"/>
  <path d="M566 350 L748 350 L750 356 L562 356 Z" fill="#8a6538"/>
  <path d="M566 350 L748 350 L749 352.6 L565 352.6 Z" fill="#c8a163" opacity="0.5"/>
  <path d="M550 378 L764 378 L760 392 L554 392 Z" fill="#3b2f22"/>
  <path d="M550 378 L764 378 L763 381 L551 381 Z" fill="#75593a" opacity="0.6"/>
  <rect x="566" y="392" width="12" height="60" fill="#241b12"/>
  <rect x="736" y="392" width="12" height="60" fill="#3d2f1e"/>
  <rect x="744" y="392" width="4" height="60" fill="#66502f" opacity="0.6"/>
  <path d="M556 392 L758 392 L754 400 L560 400 Z" fill="#1d150d"/>
  <path d="M592 356 L726 356 L736 374 L582 374 Z" fill="#4d573a"/>
  <path d="M660 356 L726 356 L736 374 L664 374 Z" fill="#66744a" opacity="0.6"/>
  <path d="M592 356 L726 356 L727 360 L590 360 Z" fill="#88976a"/>
  <path d="M604 356 L706 356 L714 372 L596 372 Z" fill="url(#mx-comp7-paper)"/>
  <path d="M604 356 L706 356 L707 358 L602 358 Z" fill="#ffffff" opacity="0.5"/>
  <path d="M608 360 L700 360 M606 364 L704 364 M604 368 L698 368 M612 371 L676 371" stroke="#3a3128" stroke-width="1.5" opacity="0.85" fill="none"/>
  <path d="M628 352 L698 352 L702 358 L624 358 Z" fill="#e3d5ac"/>
  <path d="M628 352 L698 352 L699 353.4 L627 353.4 Z" fill="#fbf5e2" opacity="0.7"/>
  <path d="M624 358 L702 358 L703 361 L623 361 Z" fill="#1e1a12" opacity="0.4"/>
  <path d="M598 374 L716 358 L718 364 L600 380 Z" fill="#a8352a"/>
  <path d="M598 374 L716 358 L716.6 360 L598.6 376 Z" fill="#d8655a" opacity="0.7"/>
  <path d="M600 380 L718 364 L718 366.6 L600 382.6 Z" fill="#5c1a13" opacity="0.6"/>
  <path d="M716 358 L724 357 L726 362 L718 364 Z" fill="#cbb98f"/>
  <path d="M724 357 L729 356 L730 360 L726 361 Z" fill="#3a3128"/>
  <ellipse cx="740" cy="366" rx="12" ry="5" fill="#241a10"/>
  <circle cx="740" cy="364" r="5" fill="#9b7a3f"/>
  <circle cx="739" cy="362.6" r="2" fill="#e8dcbb" opacity="0.7"/>
</g>

<!-- the ink bottle the 8:12 lurch threw across the carpet -->
<g>
  <ellipse cx="632" cy="504" rx="52" ry="14" fill="#080605" opacity="0.42"/>
  <path d="M606 480 q26 -14 46 0 q22 12 6 26 q-30 14 -52 0 q-16 -12 0 -26 z" fill="#11151f"/>
  <path d="M618 486 q18 -8 30 2 q10 10 -2 15 q-22 8 -34 -2 q-8 -8 6 -15 z" fill="#0b0e16"/>
  <path d="M640 478 q14 2 12 12 q-6 -8 -16 -10 z" fill="#5b6a86" opacity="0.5"/>
  <path d="M622 464 l16 -6 l9 11 l-15 8 z M660 490 l15 -4 l5 11 l-16 4 z M594 500 l13 -8 l9 10 l-15 8 z M638 458 l12 -3 l5 9 l-12 5 z" fill="#1d2536"/>
  <path d="M626 466 l10 8 M664 494 l8 4" stroke="#3d4a63" stroke-width="1.2" opacity="0.7" fill="none"/>
  <!-- the spray, fanned crisp across the edge of the dried stain -->
  <g fill="#141a27">
    <path d="M598 496 L470 512 L470 516 L599 500 Z M602 502 L486 526 L487 530 L604 508 Z M600 509 L512 542 L513 545 L602 513 Z"/>
    <ellipse cx="470" cy="510" rx="9" ry="3.4"/><ellipse cx="444" cy="519" rx="6" ry="2.6"/>
    <ellipse cx="418" cy="528" rx="4.6" ry="2.2"/><ellipse cx="486" cy="534" rx="7" ry="2.8"/>
    <ellipse cx="452" cy="500" rx="4.4" ry="2"/><ellipse cx="392" cy="524" rx="3.4" ry="1.7"/>
    <ellipse cx="514" cy="492" rx="5.4" ry="2.4"/><ellipse cx="536" cy="520" rx="4.4" ry="2"/>
    <ellipse cx="466" cy="546" rx="4" ry="1.8"/><ellipse cx="368" cy="536" rx="3" ry="1.5"/>
  </g>
  <g fill="#4a5876" opacity="0.4">
    <ellipse cx="468" cy="508.6" rx="5" ry="1.4"/><ellipse cx="484" cy="532.6" rx="4" ry="1.2"/>
  </g>
</g>

<!-- cold coming up through the floor by the window -->
<rect x="240" y="330" width="520" height="180" fill="url(#mx-comp7-cold)"/>

<!-- foreground: the berth edge with its baize blanket -->
<path d="M726 620 L1000 620 L1000 452 q-150 44 -274 168 Z" fill="#2b3220"/>
<path d="M746 620 L1000 620 L1000 468 q-140 42 -254 152 Z" fill="url(#mx-comp7-baize)"/>
<path d="M746 620 L1000 620 L1000 468 q-140 42 -254 152 Z" fill="#93a465" opacity="0.10"/>
<path d="M792 620 q80 -84 208 -128 M846 620 q70 -66 154 -100" fill="none" stroke="#2c3421" stroke-width="4" opacity="0.9"/>
<path d="M796 620 q80 -84 204 -126 M850 620 q70 -66 150 -98" fill="none" stroke="#788554" stroke-width="1.4" opacity="0.35"/>
<path d="M726 620 L1000 620 L1000 596 q-140 6 -232 24 Z" fill="#232a1a"/>
<path d="M726 620 L1000 620 L1000 604 q-136 5 -226 20 Z" fill="#131709" opacity="0.5"/>

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
    <stop offset="0" stop-color="#382b1e"/><stop offset="0.34" stop-color="#2a2118"/><stop offset="0.72" stop-color="#1c1610"/><stop offset="1" stop-color="#141009"/>
  </linearGradient>
  <linearGradient id="mx-cor8-wall2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#100c08"/><stop offset="0.4" stop-color="#1a140d"/><stop offset="1" stop-color="#2e2418"/>
  </linearGradient>
  <linearGradient id="mx-cor8-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#25304a"/><stop offset="0.55" stop-color="#4d5b70"/><stop offset="1" stop-color="#9fb0c4"/>
  </linearGradient>
  <linearGradient id="mx-cor8-mahog" x1="0" y1="0" x2="1" y2="0.15">
    <stop offset="0" stop-color="#1e1710"/><stop offset="0.4" stop-color="#3b2f22"/><stop offset="0.8" stop-color="#4b3a25"/><stop offset="1" stop-color="#241b12"/>
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
  <linearGradient id="mx-cor8-ceil" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="#0e0a06"/><stop offset="0.5" stop-color="#1a1309"/><stop offset="1" stop-color="#2a2015"/>
  </linearGradient>
  <radialGradient id="mx-cor8-runner" cx="0.34" cy="1" r="1.05">
    <stop offset="0" stop-color="#5a4028"/><stop offset="0.4" stop-color="#3d2c1c"/>
    <stop offset="0.78" stop-color="#281d12"/><stop offset="1" stop-color="#191209"/>
  </radialGradient>
  <linearGradient id="mx-cor8-floor" x1="0" y1="1" x2="0.5" y2="0">
    <stop offset="0" stop-color="#241a11"/><stop offset="0.6" stop-color="#170f0a"/><stop offset="1" stop-color="#100b07"/>
  </linearGradient>
  <linearGradient id="mx-cor8-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a3718"/><stop offset="0.24" stop-color="#d0ac60"/><stop offset="0.5" stop-color="#8a6c30"/>
    <stop offset="0.7" stop-color="#eed9a0"/><stop offset="1" stop-color="#3d2d12"/>
  </linearGradient>
  <linearGradient id="mx-cor8-bulk" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#2c2116"/><stop offset="0.5" stop-color="#22190f"/><stop offset="1" stop-color="#1a130b"/>
  </linearGradient>
  <radialGradient id="mx-cor8-haze" cx="0.62" cy="0.5" r="0.42">
    <stop offset="0" stop-color="#43566e" stop-opacity="0.20"/>
    <stop offset="0.62" stop-color="#33404f" stop-opacity="0.09"/>
    <stop offset="1" stop-color="#33404f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="mx-cor8-snow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7f93ac"/><stop offset="0.45" stop-color="#b3c1d1"/><stop offset="1" stop-color="#dde5ee"/>
  </linearGradient>
</defs>

<rect width="1000" height="620" fill="#14110d"/>

<!-- the stopped tunnel: ceiling, floor, two walls, one bulkhead -->
<path d="M0 0 L1000 0 L720 200 L520 200 Z" fill="url(#mx-cor8-ceil)"/>
<path d="M120 0 L536 200 M360 0 L580 200 M640 0 L662 200 M880 0 L706 200" stroke="#241b12" stroke-width="3" fill="none"/>
<path d="M124 0 L540 200 M364 0 L584 200 M636 0 L658 200 M876 0 L702 200" stroke="#4c3b25" stroke-width="1" fill="none" opacity="0.35"/>
<path d="M0 620 L1000 620 L720 420 L520 420 Z" fill="url(#mx-cor8-floor)"/>
<path d="M0 0 L520 200 L520 420 L0 620 Z" fill="url(#mx-cor8-wall)"/>
<path d="M1000 0 L720 200 L720 420 L1000 620 Z" fill="url(#mx-cor8-wall2)"/>

<!-- dado and skirting running away down both walls -->
<path d="M0 380 L520 340 M1000 380 L720 340 M0 596 L520 416 M1000 596 L720 416" stroke="#3b2f22" stroke-width="4" fill="none"/>
<path d="M0 376 L520 337 M1000 376 L720 337" stroke="#6d5533" stroke-width="1.2" fill="none" opacity="0.5"/>
<path d="M0 150 L520 232 M1000 150 L720 232" stroke="#33271a" stroke-width="2.5" fill="none" opacity="0.8"/>
<path d="M0 146 L520 229 M1000 146 L720 229" stroke="#6a5433" stroke-width="1" fill="none" opacity="0.35"/>
<!-- figured veneer along the near end of the left-hand wall, where the lamp reaches -->
<path d="M0 196 q120 22 246 46 M0 232 q122 18 248 38 M0 268 q124 12 250 28 M0 306 q124 6 250 16 M0 344 q124 -2 250 -6" stroke="#5f4a2c" stroke-width="1" fill="none" opacity="0.24"/>
<path d="M0 214 q120 20 246 42 M0 326 q124 2 250 4" stroke="#150f08" stroke-width="1.8" fill="none" opacity="0.35"/>

<!-- carpet runner: the pile takes the near lamp and loses it going aft -->
<path d="M120 620 L760 620 L706 420 L546 420 Z" fill="url(#mx-cor8-runner)"/>
<path d="M168 620 L716 620 L692 428 L560 428 Z" fill="none" stroke="#6b4d2d" stroke-width="4"/>
<path d="M168 620 L716 620 L692 428 L560 428 Z" fill="none" stroke="#1e150d" stroke-width="1.2"/>
<path d="M196 620 L604 420 M672 620 L648 420" stroke="#4a3524" stroke-width="3" opacity="0.6" fill="none"/>
<path d="M150 620 L740 620 M212 552 L714 552 M264 496 L694 496 M306 452 L678 452 M338 428 L668 428" stroke="#33271a" stroke-width="2" opacity="0.55" fill="none"/>
<path d="M214 549 L712 549 M266 493 L692 493" stroke="#6d4f2e" stroke-width="0.9" opacity="0.3" fill="none"/>
<!-- worn track down the middle where every passenger has walked -->
<path d="M300 620 L560 620 L622 440 L578 440 Z" fill="#6b4d2d" opacity="0.10"/>

<!-- night-lights turned down to embers, receding along the ceiling -->
<g>
  <rect class="fx-glow" x="150" y="0" width="200" height="140" fill="url(#mx-cor8-lamp)"/>
  <ellipse cx="248" cy="56" rx="26" ry="12" fill="#8a6c30"/>
  <ellipse cx="248" cy="53" rx="26" ry="10" fill="#b28c3f"/>
  <g class="fx-glow" style="--d:-1.1s"><ellipse cx="248" cy="52" rx="20" ry="9" fill="#ffd98a" opacity="0.8"/></g>
  <ellipse cx="418" cy="120" rx="17" ry="8" fill="#8a6c30"/>
  <g class="fx-glow" style="--d:-2.4s"><ellipse cx="418" cy="117" rx="12" ry="6" fill="#ffd98a" opacity="0.75"/></g>
  <ellipse cx="512" cy="160" rx="11" ry="5" fill="#8a6c30"/>
  <g class="fx-glow" style="--d:-3.6s"><ellipse cx="512" cy="158" rx="8" ry="4" fill="#ffd98a" opacity="0.7"/></g>
  <ellipse cx="566" cy="184" rx="8" ry="4" fill="#8a6c30"/>
  <g class="fx-glow" style="--d:-4.7s"><ellipse cx="566" cy="182" rx="5" ry="3" fill="#ffd98a" opacity="0.65"/></g>
</g>

<!-- the north-side windows, the drift hissing along them -->
<g>
  <path d="M995 126 L890 171 L890 365 L995 384 Z" fill="url(#mx-cor8-night)"/>
  <path d="M872 179 L800 210 L800 350 L872 362 Z" fill="url(#mx-cor8-night)"/>
  <path d="M786 216 L742 234 L742 340 L786 347 Z" fill="url(#mx-cor8-night)"/>
  <!-- packed snow climbing the lower panes, banked and hollowed -->
  <path d="M995 320 L890 314 L890 365 L995 384 Z" fill="#8fa4c0" opacity="0.85"/>
  <path d="M872 318 L800 312 L800 350 L872 362 Z" fill="#8fa4c0" opacity="0.8"/>
  <path d="M786 316 L742 312 L742 340 L786 347 Z" fill="#8fa4c0" opacity="0.75"/>
  <path d="M995 344 L890 336 L890 365 L995 384 Z" fill="url(#mx-cor8-snow)" opacity="0.9"/>
  <path d="M872 336 L800 330 L800 350 L872 362 Z" fill="url(#mx-cor8-snow)" opacity="0.85"/>
  <path d="M995 320 L890 314 L892 322 L995 330 Z M872 318 L800 312 L802 319 L872 326 Z" fill="#f0f5fa" opacity="0.45"/>
  <path d="M960 322 q-24 14 -50 -4 q26 -2 50 4 z M840 320 q-18 12 -38 -4 q20 -2 38 4 z" fill="#6f83a0" opacity="0.5"/>
  <g class="fx-drift-slow"><g stroke="#c6d2e0" stroke-width="1.6" opacity="0.4">
    <path d="M910 190 l64 -14"/><path d="M906 216 l72 -12"/><path d="M914 248 l62 -10"/>
    <path d="M818 222 l44 -8"/><path d="M814 250 l50 -6"/><path d="M752 240 l28 -4"/>
  </g></g>
  <g class="fx-drift-slow" style="--d:-8s"><g fill="#e8eef4" opacity="0.5">
    <ellipse cx="946" cy="206" rx="9" ry="3"/><ellipse cx="930" cy="272" rx="7" ry="2.5"/>
    <ellipse cx="840" cy="238" rx="6" ry="2.2"/><ellipse cx="766" cy="266" rx="5" ry="2"/>
  </g></g>
  <!-- frost creeping in at the corners, condensation standing at the foot -->
  <path d="M990 130 l-18 20 M978 136 l-6 24 M890 171 l16 18 M894 186 l14 -4 M872 182 l-14 14 M800 212 l12 14" stroke="#e6eef6" stroke-width="1" fill="none" opacity="0.42"/>
  <path d="M995 300 L890 296 L890 318 L995 324 Z" fill="#d7e2ec" opacity="0.20"/>
  <path d="M872 298 L800 294 L800 314 L872 320 Z" fill="#d7e2ec" opacity="0.18"/>
  <!-- brass frames and the intact lifting straps -->
  <g fill="none" stroke="#6b5326" stroke-width="7">
    <path d="M995 126 L890 171 L890 365 L995 384 Z"/>
    <path d="M872 179 L800 210 L800 350 L872 362 Z"/>
    <path d="M786 216 L742 234 L742 340 L786 347 Z"/>
  </g>
  <path d="M995 126 L890 171 M872 179 L800 210 M786 216 L742 234" fill="none" stroke="#d0ac60" stroke-width="2" opacity="0.55"/>
  <path d="M890 171 L890 365 M800 210 L800 350" fill="none" stroke="#2f2410" stroke-width="2.4" opacity="0.7"/>
  <path d="M938 152 l22 -9 l0 62 q-11 8 -22 0 z" fill="#4a3524"/>
  <path d="M938 152 l8 -3 l0 62 q-4 3 -8 1 z" fill="#6b4f2c"/>
  <path d="M840 194 l16 -6 l0 46 q-8 6 -16 0 z" fill="#4a3524"/>
  <path d="M944 152 l0 56 M954 148 l0 58 M845 194 l0 42" stroke="#6b5a45" stroke-width="1.2" opacity="0.8" fill="none"/>
  <rect x="938" y="212" width="22" height="9" rx="3" fill="url(#mx-cor8-brass)"/>
</g>
<rect x="700" y="120" width="300" height="400" fill="url(#mx-cor8-cold)"/>

<!-- panelling of the window wall: piers between the lights, beaded -->
<path d="M890 171 L890 365 L872 362 L872 179 Z M800 210 L800 350 L786 347 L786 216 Z" fill="#3b2f22"/>
<path d="M890 171 L890 365 L884 364 L884 173 Z M800 210 L800 350 L795 349 L795 212 Z" fill="#6b5333" opacity="0.55"/>
<path d="M872 179 L878 180 L878 363 L872 362 Z M786 216 L791 217 L791 348 L786 347 Z" fill="#120d08" opacity="0.6"/>
<path d="M1000 100 q-140 34 -260 82 M1000 132 q-142 30 -262 74 M1000 500 q-140 -30 -262 -70 M1000 536 q-140 -28 -262 -66" stroke="#4a3a24" stroke-width="1" fill="none" opacity="0.22"/>
<path d="M1000 420 L720 356 L720 372 L1000 440 Z" fill="#2a2015"/>
<path d="M1000 420 L720 356 L720 359 L1000 424 Z" fill="#5f4a2c" opacity="0.5"/>

<!-- heater grille running under the windows, cold and quiet -->
<path d="M1000 470 L720 396 L720 420 L1000 500 Z" fill="#241b12"/>
<path d="M986 468 L986 494 M940 456 L940 482 M894 444 L894 470 M848 432 L848 456 M802 420 L802 442 M756 406 L756 428" stroke="#3b2f22" stroke-width="3" fill="none"/>
<path d="M988 468 L988 494 M942 456 L942 482 M896 444 L896 470 M850 432 L850 456" stroke="#5c4a2a" stroke-width="0.9" fill="none" opacity="0.5"/>
<path d="M1000 466 L720 394 L720 400 L1000 474 Z" fill="#4a3524"/>
<path d="M1000 464 L720 392 L720 395 L1000 468 Z" fill="#8a6a3c" opacity="0.55"/>

<!-- brass handrail down the window wall -->
<path d="M1000 400 L720 348" stroke="#4a3718" stroke-width="7" fill="none" stroke-linecap="round"/>
<path d="M1000 399 L720 347" stroke="#8a6c30" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M1000 396 L720 345" stroke="#e0c47e" stroke-width="1.4" fill="none" opacity="0.6"/>
<path d="M960 392 L958 372 M868 374 L866 358 M790 360 L789 348" stroke="#8a6c30" stroke-width="4" fill="none"/>

<!-- the far bulkhead and the door to the next car -->
<rect x="520" y="200" width="200" height="220" fill="url(#mx-cor8-bulk)"/>
<rect x="520" y="200" width="200" height="10" fill="#3b2f22"/>
<rect x="520" y="200" width="200" height="2.4" fill="#5d4728" opacity="0.6"/>
<rect x="640" y="224" width="66" height="196" fill="#2b2116"/>
<rect x="640" y="224" width="5" height="196" fill="#4c3a24" opacity="0.7"/>
<rect x="648" y="238" width="50" height="86" fill="#1b2436"/>
<rect x="648" y="238" width="50" height="86" fill="#d9a441" opacity="0.16"/>
<rect x="648" y="238" width="50" height="10" fill="#0e131d" opacity="0.5"/>
<path d="M673 238 L673 324 M648 281 L698 281" stroke="#6b5326" stroke-width="3" fill="none"/>
<path d="M674 238 L674 324 M648 280 L698 280" stroke="#c0a05a" stroke-width="0.9" fill="none" opacity="0.5"/>
<circle cx="650" cy="342" r="6" fill="#9b7a3f"/>
<circle cx="649" cy="341" r="2.4" fill="#dcc07a" opacity="0.7"/>
<path d="M532 228 h92 v66 h-92 z M532 304 h92 v66 h-92 z" fill="none" stroke="#151009" stroke-width="3.4"/>
<path d="M533 229 h92 v66 h-92 z M533 305 h92 v66 h-92 z" fill="none" stroke="#4a3a24" stroke-width="1.2"/>
<!-- aerial haze: the far end of the car has lost its warmth and its contrast -->
<rect x="480" y="176" width="280" height="272" fill="url(#mx-cor8-haze)"/>

<!-- THE PORTER'S JUMP SEAT: the whole sleeper in one sightline -->
<g>
  <ellipse cx="592" cy="378" rx="72" ry="14" fill="#0a0705" opacity="0.20"/>
  <ellipse cx="592" cy="377" rx="58" ry="11" fill="#0a0705" opacity="0.24"/>
  <ellipse cx="592" cy="376" rx="42" ry="8" fill="#0a0705" opacity="0.28"/>
  <path d="M540 300 L646 300 L642 316 L544 316 Z" fill="#4a3524"/>
  <path d="M540 300 L646 300 L645 304 L541 304 Z" fill="#7b5f36"/>
  <path d="M548 316 L638 316 L634 328 L552 328 Z" fill="#2a2013"/>
  <rect x="556" y="252" width="74" height="48" rx="4" fill="#3b2f22"/>
  <rect x="562" y="258" width="62" height="36" rx="3" fill="#4a3524"/>
  <rect x="562" y="258" width="62" height="6" rx="3" fill="#6d5030" opacity="0.6"/>
  <rect x="562" y="288" width="62" height="6" rx="3" fill="#1d1409" opacity="0.6"/>
  <path d="M576 258 L576 294 M594 258 L594 294 M612 258 L612 294" stroke="#5c4229" stroke-width="2" fill="none"/>
  <path d="M578 258 L578 294 M596 258 L596 294 M614 258 L614 294" stroke="#8a6a3c" stroke-width="0.8" fill="none" opacity="0.45"/>
  <path d="M552 316 L560 300 M634 316 L626 300" stroke="#8a6c30" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M553 314 L561 299 M633 314 L625 299" stroke="#dcc07a" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M556 328 L560 372 M630 328 L626 372" stroke="#6b5326" stroke-width="4" fill="none"/>
  <rect x="552" y="368" width="84" height="7" rx="3" fill="url(#mx-cor8-brass)"/>
  <!-- his cloth, folded over the seat back -->
  <path d="M624 254 l24 4 l-4 26 l-22 -5 z" fill="#d5c79f"/>
  <path d="M624 254 l24 4 l-1 6 l-23 -4 z" fill="#f5ecd4"/>
  <path d="M638 258 l10 2 l-4 24 l-9 -2 z" fill="#ffffff" opacity="0.25"/>
  <ellipse cx="592" cy="222" rx="16" ry="7" fill="#8a6c30"/>
  <g class="fx-glow" style="--d:-2.9s"><ellipse cx="592" cy="220" rx="11" ry="5" fill="#ffd98a" opacity="0.8"/></g>
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
  <path d="M96 326 L222 318 L222 348 L96 364 Z" fill="url(#mx-cor8-snow)" opacity="0.85"/>
  <path d="M96 306 L222 300 L222 306 L96 313 Z" fill="#f0f5fa" opacity="0.4"/>
  <path d="M96 214 L222 240 L222 254 L96 230 Z" fill="#141c2c" opacity="0.6"/>
  <g class="fx-drift-slow" style="--d:-4s"><g stroke="#c6d2e0" stroke-width="1.4" opacity="0.35">
    <path d="M112 258 l60 8"/><path d="M120 282 l64 8"/>
  </g></g>
  <path d="M104 218 l14 16 M112 216 l4 22 M214 244 l-14 14 M206 242 l-4 20" stroke="#e6eef6" stroke-width="1" fill="none" opacity="0.4"/>
  <path d="M96 288 L222 284 L222 302 L96 308 Z" fill="#d7e2ec" opacity="0.18"/>
  <path d="M96 214 L222 240 L222 348 L96 364 Z" fill="none" stroke="#6b5326" stroke-width="7"/>
  <path d="M96 214 L222 240" fill="none" stroke="#d0ac60" stroke-width="2" opacity="0.5"/>
  <path d="M156 226 L164 228 L164 356 L156 357 Z" fill="#4a3524" opacity="0.6"/>
  <path d="M92 352 L226 344 L226 360 L92 370 Z" fill="#4a3524"/>
  <path d="M92 352 L226 344 L226 348 L92 356 Z" fill="#8a6a3c" opacity="0.6"/>
  <!-- the buckle, and the two-inch stub of strap left in it -->
  <rect x="168" y="352" width="36" height="14" rx="3" fill="url(#mx-cor8-brass)"/>
  <rect x="174" y="355" width="24" height="8" rx="2" fill="#c8a75c"/>
  <rect x="174" y="355" width="24" height="2.4" rx="1" fill="#f4e4b4" opacity="0.7"/>
  <path d="M172 366 l26 2 l-2 20 l-22 -2 z" fill="#4a3524"/>
  <path d="M172 366 l9 1 l-1 20 l-8 -1 z" fill="#6b4f2c"/>
  <path d="M172 384 l24 2 l-1 6 l-23 -2 z" fill="#e8dcbb"/>
  <path d="M178 367 l-1 18 M190 368 l-1 18" stroke="#6b5a45" stroke-width="1.3" opacity="0.85" fill="none"/>
  <!-- eleven years of carbons, banded; the typewriter cased beside them -->
  <path d="M84 400 L232 386 L232 404 L84 420 Z" fill="#4a3524"/>
  <path d="M84 400 L232 386 L232 390 L84 405 Z" fill="#7d5c33" opacity="0.7"/>
  <path d="M84 420 L232 404 L232 462 L84 482 Z" fill="#33271a"/>
  <path d="M180 411 L232 404 L232 462 L180 469 Z" fill="#452f1c" opacity="0.5"/>
  <path d="M104 356 L206 344 L212 380 L100 392 Z" fill="#26221c"/>
  <path d="M104 356 L206 344 L206 352 L104 364 Z" fill="#3f382d"/>
  <path d="M170 348 L206 344 L212 380 L176 384 Z" fill="#332e26" opacity="0.7"/>
  <rect x="140" y="332" width="32" height="12" rx="5" fill="none" stroke="#6b5326" stroke-width="3.4"/>
  <g>
    <path d="M92 484 L162 476 L162 508 L92 518 Z" fill="#d5c79f"/>
    <path d="M92 484 L162 476 L162 480 L92 489 Z" fill="#f8f0d9"/>
    <path d="M92 493 L162 485 L162 494 L92 502 Z" fill="#5d1f18" opacity="0.8"/>
    <path d="M170 474 L228 468 L228 498 L170 504 Z" fill="#e6dcbe"/>
    <path d="M170 474 L228 468 L228 472 L170 478 Z" fill="#fbf5e2"/>
    <path d="M170 483 L228 477 L228 485 L170 491 Z" fill="#5d1f18" opacity="0.8"/>
    <path d="M100 524 L176 514 L176 546 L100 558 Z" fill="#d5c79f"/>
    <path d="M100 524 L176 514 L176 518 L100 528 Z" fill="#f8f0d9"/>
    <path d="M100 533 L176 523 L176 532 L100 542 Z" fill="#5d1f18" opacity="0.8"/>
    <path d="M96 506 L158 499 M174 494 L224 490 M104 549 L172 540" stroke="#a99d83" stroke-width="1.3" opacity="0.8" fill="none"/>
    <path d="M92 514 L162 504 L162 508 L92 518 Z M100 554 L176 542 L176 546 L100 558 Z" fill="#25190f" opacity="0.5"/>
  </g>
  <!-- the leaf of the door, swung back flat against the corridor wall -->
  <path d="M250 156 L272 163 L272 505 L250 511 Z" fill="url(#mx-cor8-mahog)"/>
  <path d="M40 96 L60 103 L60 580 L40 588 Z" fill="#1b140d"/>
  <rect x="256" y="318" width="9" height="26" rx="3" fill="#9b7a3f"/>
</g>

<!-- COMPARTMENT 7: the splintered door, chain plate hanging out of the frame -->
<g>
  <path d="M275 163 L375 190 L375 466 L275 502 Z" fill="url(#mx-cor8-mahog)"/>
  <path d="M278 200 q48 12 94 22 M278 256 q48 8 94 16 M277 314 q48 4 94 6 M277 372 q48 -2 94 -6 M276 430 q48 -6 94 -14" stroke="#5b4527" stroke-width="0.9" fill="none" opacity="0.24"/>
  <path d="M285 184 L367 206 L367 318 L285 326 Z M285 344 L367 340 L367 440 L285 474 Z" fill="none" stroke="#140f08" stroke-width="4"/>
  <path d="M287 186 L369 208 L369 320 L287 328 Z M287 346 L369 342 L369 442 L287 476 Z" fill="none" stroke="#5b4527" stroke-width="1.4"/>
  <path d="M275 163 L289 167 L289 498 L275 502 Z" fill="#0d0a07"/>
  <path d="M289 167 L301 171 L301 494 L289 498 Z" fill="#d9a441" opacity="0.14"/>
  <path d="M289 268 l24 8 l-13 5 l15 9 l-28 -11 z M287 314 l30 10 l-16 4 l19 10 l-34 -13 z M289 360 l22 9 l-12 5 l16 8 l-27 -11 z" fill="#a08453"/>
  <path d="M289 268 l24 8 l-6 2 l-19 -7 z M287 314 l30 10 l-7 2 l-24 -9 z M289 360 l22 9 l-6 2 l-17 -8 z" fill="#e2c88f" opacity="0.5"/>
  <path d="M313 304 l22 8 l0 30 l-22 -9 z" fill="#150f07" opacity="0.6"/>
  <path d="M311 300 l22 8 l0 30 l-22 -9 z" fill="#8a6c30"/>
  <path d="M315 306 l14 5 l0 20 l-14 -6 z" fill="#b28c3f"/>
  <path d="M315 306 l14 5 l0 4 l-14 -5 z" fill="#e6cf95" opacity="0.65"/>
  <g fill="#5c4229">
    <circle cx="319" cy="312" r="2.4"/><circle cx="326" cy="315" r="2.4"/>
    <circle cx="319" cy="325" r="2.4"/><circle cx="326" cy="328" r="2.4"/>
  </g>
  <path d="M310 320 q-12 16 -16 32 q-3 12 4 20" fill="none" stroke="#9b7a3f" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M309 321 q-12 16 -16 32 q-3 12 4 20" fill="none" stroke="#e2c374" stroke-width="1" stroke-linecap="round" opacity="0.55"/>
  <rect x="348" y="326" width="10" height="24" rx="3" fill="#9b7a3f"/>
  <rect x="348" y="326" width="3" height="24" rx="1.5" fill="#dcc07a" opacity="0.6"/>
  <path d="M336 486 l22 6 l-20 4 z M362 500 l18 5 l-17 4 z" fill="#8a7148"/>
  <path d="M338 492 l20 2 l-2 3 l-18 -1 z M364 505 l16 3 l-2 3 l-15 -2 z" fill="#0d0906" opacity="0.5"/>
</g>

<!-- the seltzer tray, still standing where the porter set it down -->
<g>
  <ellipse cx="400" cy="502" rx="56" ry="14" fill="#0a0705" opacity="0.18"/>
  <ellipse cx="401" cy="501" rx="44" ry="11" fill="#0a0705" opacity="0.22"/>
  <ellipse cx="403" cy="499" rx="32" ry="8" fill="#0a0705" opacity="0.26"/>
  <ellipse cx="408" cy="490" rx="38" ry="12" fill="#6b5326"/>
  <ellipse cx="408" cy="487" rx="32" ry="9" fill="#b28c3f"/>
  <ellipse cx="404" cy="485" rx="20" ry="4.4" fill="#e0c47e" opacity="0.55"/>
  <path d="M390 446 q11 -9 22 0 l4 36 q-15 7 -30 0 z" fill="#7d8a80" opacity="0.85"/>
  <path d="M394 450 q9 -7 16 0 l2 29 q-11 5 -20 0 z" fill="#c6d2e0" opacity="0.5"/>
  <path d="M392 450 q3 -3 5 -3 l2 32 q-3 0 -5 -1 z" fill="#f0f6fa" opacity="0.55"/>
  <rect x="394" y="432" width="15" height="15" rx="3" fill="#9b7a3f"/>
  <rect x="394" y="432" width="5" height="15" rx="2" fill="#dcc07a" opacity="0.6"/>
  <path d="M409 436 l13 4 l-2 6 l-11 -4 z" fill="#c8a75c"/>
  <path d="M424 464 l19 0 l-2 20 l-15 0 z" fill="#e8f0f4" opacity="0.5"/>
  <path d="M424 464 l5 0 l-1 20 l-4 0 z" fill="#ffffff" opacity="0.35"/>
  <ellipse cx="433" cy="464" rx="9.5" ry="3.2" fill="#f0f4f8" opacity="0.6"/>
  <ellipse cx="442" cy="500" rx="20" ry="6" fill="#3d4a63" opacity="0.5"/>
  <ellipse cx="438" cy="498" rx="10" ry="2.4" fill="#93a8c4" opacity="0.4"/>
</g>

<!-- COMPARTMENT 6: Frances Dell in her own doorway, watching you work -->
<g>
  <path d="M396 196 L470 217 L470 431 L396 459 Z" fill="#100d09"/>
  <path d="M403 208 L463 225 L463 424 L403 448 Z" fill="#1c1710"/>
  <rect x="396" y="210" width="74" height="230" fill="url(#mx-cor8-lamp)" opacity="0.3"/>
  <g>
    <ellipse cx="428" cy="436" rx="34" ry="8" fill="#080605" opacity="0.5"/>
    <path d="M414 288 q18 -10 36 0 l5 96 l-46 0 z" fill="#3f4630"/>
    <path d="M434 288 q10 -4 16 0 l5 96 l-20 0 z" fill="#535c3d" opacity="0.7"/>
    <path d="M426 288 l13 0 l3 92 l-19 0 z" fill="#ded0a6"/>
    <path d="M434 288 l5 0 l3 92 l-8 0 z" fill="#f3ead1" opacity="0.7"/>
    <path d="M414 294 l-5 68 l10 2 l5 -68 z" fill="#3d452c"/>
    <path d="M450 294 l5 68 l-10 2 l-5 -68 z" fill="#586248"/>
    <ellipse cx="412" cy="368" rx="7" ry="5" fill="#a8977b"/>
    <ellipse cx="452" cy="368" rx="7" ry="5" fill="#c0ad8d"/>
    <path d="M420 380 l26 0 l2 42 l-30 0 z" fill="#e8dfc4" opacity="0.85"/>
    <path d="M434 380 l12 0 l2 42 l-14 0 z" fill="#f8f2df" opacity="0.6"/>
    <ellipse cx="424" cy="428" rx="10" ry="4.5" fill="#100d09"/>
    <ellipse cx="446" cy="428" rx="10" ry="4.5" fill="#100d09"/>
    <ellipse cx="433" cy="264" rx="15" ry="18" fill="#a8977b"/>
    <ellipse cx="440" cy="263" rx="9" ry="15" fill="#c6b391" opacity="0.6"/>
    <path d="M418 260 q15 -21 30 0 q3 -21 -15 -21 q-18 0 -15 21 z" fill="#3a2a1d"/>
    <path d="M446 254 q10 7 7 20 l-7 -3 z" fill="#3a2a1d"/>
    <path d="M436 243 q11 3 12 15 l-5 -2 q-1 -9 -8 -11 z" fill="#5c452e" opacity="0.6"/>
    <path d="M425 264 l6 0 M436 264 l6 0" stroke="#4a3f31" stroke-width="1.7" stroke-linecap="round" fill="none"/>
    <path d="M429 276 l8 0" stroke="#6b5a45" stroke-width="1.7" stroke-linecap="round" fill="none"/>
    <path d="M421 284 l24 0 l0 7 l-24 0 z" fill="#f0e7ce"/>
  </g>
</g>

<!-- further doors, dwindling toward the vestibule -->
<g>
  <path d="M486 221 L520 231 L520 413 L486 426 Z" fill="url(#mx-cor8-mahog)"/>
  <path d="M491 232 L515 240 L515 402 L491 414 Z" fill="none" stroke="#191208" stroke-width="2.8"/>
  <path d="M492 233 L516 241 L516 403 L492 415 Z" fill="none" stroke="#4c3b25" stroke-width="1"/>
  <rect x="508" y="308" width="7" height="18" rx="3" fill="#9b7a3f"/>
</g>

<!-- ceiling vents and the ventilator ducts -->
<g fill="#241b12">
  <path d="M292 70 L388 104 L378 118 L282 82 Z"/>
  <path d="M452 130 L520 156 L514 166 L446 138 Z"/>
  <path d="M538 170 L586 189 L582 196 L534 176 Z"/>
</g>
<path d="M292 70 L388 104 L386 108 L290 74 Z M452 130 L520 156 L519 159 L451 133 Z" fill="#5a4629" opacity="0.5"/>
<path d="M306 76 L298 90 M330 84 L322 98 M354 93 L346 106 M376 101 L369 114 M466 136 L461 145 M486 143 L481 152 M506 151 L501 160 M552 176 L549 182 M566 182 L563 188 M578 187 L575 193" stroke="#3b2f22" stroke-width="2.6" fill="none"/>

<!-- brass fittings down the door wall: a sconce, a bell push, a coat hook -->
<g>
  <path d="M258 200 l24 6 l-4 22 l-22 -6 z" fill="#8a6c30"/>
  <path d="M258 200 l24 6 l-1 5 l-23 -6 z" fill="#d6b468" opacity="0.7"/>
  <g class="fx-glow" style="--d:-1.8s"><path d="M262 206 l16 4 l-2 14 l-14 -4 z" fill="#ffd98a" opacity="0.55"/></g>
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
<!-- the near lamp laid along the runner, and the cold laid across it from the glass -->
<path d="M200 620 L332 620 L318 470 L268 470 Z" fill="#d9a441" opacity="0.07"/>
<path d="M600 620 L760 620 L706 424 L662 424 Z" fill="#8fa4c0" opacity="0.055"/>

<!-- the polished margin of the floor takes the night-lights back, dimmer each time -->
<path d="M96 620 L124 620 L268 452 L256 452 Z" fill="#d9a441" opacity="0.09"/>
<path d="M764 620 L790 620 L716 442 L708 442 Z" fill="#8fa4c0" opacity="0.05"/>

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
    <stop offset="0" stop-color="#33281c"/><stop offset="0.45" stop-color="#251d14"/><stop offset="1" stop-color="#171109"/>
  </linearGradient>
  <linearGradient id="mx-diner-wall2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#171109"/><stop offset="0.55" stop-color="#251d14"/><stop offset="1" stop-color="#33281c"/>
  </linearGradient>
  <linearGradient id="mx-diner-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#212b42"/><stop offset="0.6" stop-color="#48566c"/><stop offset="1" stop-color="#9fb0c4"/>
  </linearGradient>
  <linearGradient id="mx-diner-linen" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f2ecdb"/><stop offset="0.42" stop-color="#ddd5bd"/>
    <stop offset="0.78" stop-color="#bfb69a"/><stop offset="1" stop-color="#9a9179"/>
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
  <radialGradient id="mx-diner-ceil" cx="0.5" cy="0.1" r="0.8">
    <stop offset="0" stop-color="#3a2c1b"/><stop offset="0.45" stop-color="#261d12"/><stop offset="1" stop-color="#150f09"/>
  </radialGradient>
  <radialGradient id="mx-diner-carpet" cx="0.5" cy="1" r="0.9">
    <stop offset="0" stop-color="#4e3823"/><stop offset="0.42" stop-color="#3a2a1a"/>
    <stop offset="0.78" stop-color="#271c11"/><stop offset="1" stop-color="#1a120b"/>
  </radialGradient>
  <linearGradient id="mx-diner-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a3718"/><stop offset="0.22" stop-color="#d0ac60"/><stop offset="0.5" stop-color="#8a6c30"/>
    <stop offset="0.72" stop-color="#eed9a0"/><stop offset="1" stop-color="#3d2d12"/>
  </linearGradient>
  <linearGradient id="mx-diner-snow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8195ae"/><stop offset="0.4" stop-color="#b6c3d3"/><stop offset="1" stop-color="#e2e9f0"/>
  </linearGradient>
  <linearGradient id="mx-diner-panel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3d2f1f"/><stop offset="0.5" stop-color="#2a2015"/><stop offset="1" stop-color="#1a130c"/>
  </linearGradient>
  <radialGradient id="mx-diner-haze" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#3d4a5c" stop-opacity="0.16"/>
    <stop offset="1" stop-color="#3d4a5c" stop-opacity="0"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="#14110d"/>

<!-- the car: ceiling, floor, two walls of windows, the pantry end -->
<path d="M0 0 L1000 0 L600 200 L400 200 Z" fill="url(#mx-diner-ceil)"/>
<path d="M180 0 L436 200 M420 0 L490 200 M580 0 L510 200 M820 0 L564 200" stroke="#2b2118" stroke-width="3" fill="none"/>
<path d="M184 0 L440 200 M424 0 L494 200 M576 0 L506 200 M816 0 L560 200" stroke="#4c3a23" stroke-width="1" fill="none" opacity="0.35"/>
<path d="M0 620 L1000 620 L600 400 L400 400 Z" fill="#191309"/>
<path d="M250 620 L750 620 L604 404 L396 404 Z" fill="url(#mx-diner-carpet)"/>
<path d="M300 620 L700 620 L594 414 L406 414 Z" fill="none" stroke="#6b4d2d" stroke-width="4"/>
<path d="M300 620 L700 620 L594 414 L406 414 Z" fill="none" stroke="#1e150d" stroke-width="1.2"/>
<path d="M268 596 L732 596 M320 522 L680 522 M360 468 L640 468 M386 430 L614 430" stroke="#33271a" stroke-width="2" opacity="0.6" fill="none"/>
<path d="M270 593 L730 593 M322 519 L678 519 M362 465 L638 465" stroke="#6d4f2e" stroke-width="0.9" opacity="0.28" fill="none"/>
<path d="M0 0 L400 200 L400 400 L0 620 Z" fill="url(#mx-diner-wall)"/>
<path d="M1000 0 L600 200 L600 400 L1000 620 Z" fill="url(#mx-diner-wall2)"/>
<path d="M0 596 L400 396 M1000 596 L600 396 M0 380 L400 348 M1000 380 L600 348" stroke="#3b2f22" stroke-width="4" fill="none"/>
<path d="M0 376 L400 345 M1000 376 L600 345" stroke="#6d5533" stroke-width="1.2" fill="none" opacity="0.5"/>
<!-- veneer running away under the sills on both sides -->
<path d="M0 412 q200 -18 396 -32 M0 448 q200 -26 396 -46 M0 484 q200 -34 396 -60 M1000 412 q-200 -18 -396 -32 M1000 448 q-200 -26 -396 -46 M1000 484 q-200 -34 -396 -60" stroke="#4d3c25" stroke-width="1" fill="none" opacity="0.2"/>

<!-- night windows both sides, snow packed along their sills -->
<g>
  <path d="M10 115 L130 152 L130 331 L10 340 Z" fill="url(#mx-diner-night)"/>
  <path d="M150 158 L250 189 L250 321 L150 329 Z" fill="url(#mx-diner-night)"/>
  <path d="M268 195 L350 220 L350 314 L268 320 Z" fill="url(#mx-diner-night)"/>
  <path d="M990 115 L870 152 L870 331 L990 340 Z" fill="url(#mx-diner-night)"/>
  <path d="M850 158 L750 189 L750 321 L850 329 Z" fill="url(#mx-diner-night)"/>
  <path d="M732 195 L650 220 L650 314 L732 320 Z" fill="url(#mx-diner-night)"/>
  <!-- the dark of the mountain behind the falling snow -->
  <path d="M10 115 L130 152 L130 186 L10 154 Z M990 115 L870 152 L870 186 L990 154 Z M150 158 L250 189 L250 214 L150 187 Z M850 158 L750 189 L750 214 L850 187 Z" fill="#121a2a" opacity="0.6"/>
  <g fill="#8fa4c0" opacity="0.85">
    <path d="M10 300 L130 296 L130 331 L10 340 Z"/><path d="M150 296 L250 292 L250 321 L150 329 Z"/>
    <path d="M268 292 L350 290 L350 314 L268 320 Z"/>
    <path d="M990 300 L870 296 L870 331 L990 340 Z"/><path d="M850 296 L750 292 L750 321 L850 329 Z"/>
    <path d="M732 292 L650 290 L650 314 L732 320 Z"/>
  </g>
  <path d="M10 322 L130 314 L130 331 L10 340 Z M990 322 L870 314 L870 331 L990 340 Z M150 312 L250 308 L250 321 L150 329 Z M850 312 L750 308 L750 321 L850 329 Z" fill="url(#mx-diner-snow)" opacity="0.85"/>
  <!-- the drift is banked, and its crest catches the lamps through the glass -->
  <path d="M10 300 L130 296 L130 304 L10 309 Z M990 300 L870 296 L870 304 L990 309 Z M150 296 L250 292 L250 298 L150 303 Z M850 296 L750 292 L750 298 L850 303 Z" fill="#f2f6fa" opacity="0.45"/>
  <path d="M40 302 q34 14 74 -4 q-38 -4 -74 4 z M960 302 q-34 14 -74 -4 q38 -4 74 4 z" fill="#6f83a0" opacity="0.45"/>
  <!-- condensation standing on the inside of every lower pane -->
  <path d="M10 274 L130 272 L130 300 L10 306 Z M990 274 L870 272 L870 300 L990 306 Z M150 272 L250 270 L250 296 L150 300 Z M850 272 L750 270 L750 296 L850 300 Z" fill="#d7e2ec" opacity="0.16"/>
  <g class="fx-drift-slow"><g stroke="#c6d2e0" stroke-width="1.5" opacity="0.35">
    <path d="M30 180 l70 12"/><path d="M26 218 l80 12"/><path d="M40 254 l64 10"/>
    <path d="M170 210 l58 10"/>
  </g></g>
  <g class="fx-drift-slow" style="--d:-9s"><g stroke="#c6d2e0" stroke-width="1.5" opacity="0.35">
    <path d="M970 180 l-70 12"/><path d="M974 218 l-80 12"/><path d="M960 254 l-64 10"/>
    <path d="M830 210 l-58 10"/>
  </g></g>
  <!-- frost feathering the corners of the near lights -->
  <path d="M16 122 l20 16 M16 138 l24 8 M124 152 l-18 16 M124 168 l-22 6 M16 330 l20 -16 M124 328 l-18 -14" stroke="#e6eef6" stroke-width="1" fill="none" opacity="0.4"/>
  <path d="M984 122 l-20 16 M984 138 l-24 8 M876 152 l18 16 M876 168 l22 6 M984 330 l-20 -16 M876 328 l18 -14" stroke="#e6eef6" stroke-width="1" fill="none" opacity="0.4"/>
  <g fill="none" stroke="#6b5326" stroke-width="7">
    <path d="M10 115 L130 152 L130 331 L10 340 Z"/><path d="M150 158 L250 189 L250 321 L150 329 Z"/>
    <path d="M268 195 L350 220 L350 314 L268 320 Z"/>
    <path d="M990 115 L870 152 L870 331 L990 340 Z"/><path d="M850 158 L750 189 L750 321 L850 329 Z"/>
    <path d="M732 195 L650 220 L650 314 L732 320 Z"/>
  </g>
  <path d="M10 115 L130 152 M150 158 L250 189 M268 195 L350 220 M990 115 L870 152 M850 158 L750 189 M732 195 L650 220" fill="none" stroke="#d0ac60" stroke-width="2" opacity="0.5"/>
  <path d="M10 340 L130 331 M990 340 L870 331 M150 329 L250 321 M850 329 L750 321" fill="none" stroke="#2f2410" stroke-width="2.4" opacity="0.6"/>
  <path d="M64 133 L74 136 L74 336 L64 337 Z M196 173 L204 176 L204 325 L196 326 Z M936 133 L926 136 L926 336 L936 337 Z M804 173 L796 176 L796 325 L804 326 Z" fill="#3b2f22"/>
  <path d="M64 133 L69 134 L69 337 L64 337 Z M936 133 L931 134 L931 337 L936 337 Z" fill="#6d5533" opacity="0.5"/>
  <!-- the piers between the lights, and the sill board under them -->
  <path d="M130 152 L150 158 L150 329 L130 331 Z M250 189 L268 195 L268 320 L250 321 Z M870 152 L850 158 L850 329 L870 331 Z M750 189 L732 195 L732 320 L750 321 Z" fill="url(#mx-diner-panel)"/>
  <path d="M0 344 L400 316 L400 330 L0 360 Z M1000 344 L600 316 L600 330 L1000 360 Z" fill="#4a3524"/>
  <path d="M0 344 L400 316 L400 320 L0 349 Z M1000 344 L600 316 L600 320 L1000 349 Z" fill="#8a6a3c" opacity="0.55"/>
</g>
<!-- the cold coming off six square yards of glass -->
<path d="M0 340 L400 316 L400 400 L0 470 Z" fill="#8fa4c0" opacity="0.055"/>
<path d="M1000 340 L600 316 L600 400 L1000 470 Z" fill="#8fa4c0" opacity="0.055"/>

<!-- low emergency lights down the centre of the ceiling -->
<g>
  <rect class="fx-glow" x="330" y="0" width="340" height="260" fill="url(#mx-diner-lamp)"/>
  <ellipse cx="500" cy="64" rx="46" ry="16" fill="#5c4229"/>
  <ellipse cx="500" cy="61" rx="46" ry="14" fill="#8a6c30"/>
  <g class="fx-glow"><ellipse cx="500" cy="60" rx="38" ry="12" fill="#d9a441" opacity="0.7"/></g>
  <ellipse cx="500" cy="56" rx="26" ry="6" fill="#ffe9bd" opacity="0.55"/>
  <ellipse cx="500" cy="132" rx="30" ry="11" fill="#5c4229"/>
  <g class="fx-glow" style="--d:-1.8s"><ellipse cx="500" cy="129" rx="24" ry="8" fill="#d9a441" opacity="0.62"/></g>
  <ellipse cx="500" cy="176" rx="20" ry="8" fill="#5c4229"/>
  <g class="fx-glow" style="--d:-3.5s"><ellipse cx="500" cy="174" rx="15" ry="5" fill="#d9a441" opacity="0.55"/></g>
</g>
<rect class="fx-glow" style="--d:-2.4s" width="1000" height="620" fill="url(#mx-diner-glow)"/>

<!-- the pantry end: coffee kept alive on a spirit burner -->
<g>
  <rect x="400" y="200" width="200" height="200" fill="#241b12"/>
  <rect x="400" y="200" width="200" height="10" fill="#3b2f22"/>
  <rect x="400" y="200" width="200" height="2.4" fill="#5d4728" opacity="0.6"/>
  <path d="M404 226 q98 8 192 2 M404 262 q98 6 192 2" stroke="#4a3a24" stroke-width="1" fill="none" opacity="0.22"/>
  <rect x="408" y="300" width="184" height="14" fill="#4a3524"/>
  <rect x="408" y="300" width="184" height="3" fill="#836136" opacity="0.7"/>
  <rect x="408" y="311" width="184" height="3" fill="#150f08" opacity="0.7"/>
  <rect x="408" y="314" width="184" height="86" fill="#2a2118"/>
  <path d="M416 324 h80 v30 h-80 z M504 324 h80 v30 h-80 z M416 360 h80 v30 h-80 z M504 360 h80 v30 h-80 z" fill="none" stroke="#181109" stroke-width="3"/>
  <path d="M417 325 h80 v30 h-80 z M505 325 h80 v30 h-80 z M417 361 h80 v30 h-80 z M505 361 h80 v30 h-80 z" fill="none" stroke="#4a3a24" stroke-width="1.1"/>
  <g fill="#9b7a3f">
    <ellipse cx="456" cy="339" rx="8" ry="3"/><ellipse cx="544" cy="339" rx="8" ry="3"/>
    <ellipse cx="456" cy="375" rx="8" ry="3"/><ellipse cx="544" cy="375" rx="8" ry="3"/>
  </g>
  <!-- the urn, the burner's blue tongue -->
  <ellipse cx="442" cy="300" rx="34" ry="6" fill="#0e0a06" opacity="0.5"/>
  <path d="M418 250 q22 -12 44 0 l4 44 l-52 0 z" fill="#7d6129"/>
  <path d="M424 256 q16 -8 32 0 l2 32 l-36 0 z" fill="#b28c3f"/>
  <path d="M424 256 q8 -4 14 -4 l-3 36 l-9 0 z" fill="#e6cf95" opacity="0.6"/>
  <path d="M454 256 q4 2 4 4 l2 32 l-8 0 z" fill="#4e3a17" opacity="0.6"/>
  <rect x="432" y="238" width="16" height="14" rx="4" fill="#6b5326"/>
  <rect x="432" y="238" width="5" height="14" rx="2" fill="#c8a75c" opacity="0.6"/>
  <path d="M462 272 l14 6 l-4 8 l-12 -6 z" fill="#6b5326"/>
  <rect x="422" y="294" width="44" height="8" rx="2" fill="#33271a"/>
  <path d="M436 296 q8 -12 16 0 q-8 8 -16 0 z" fill="#6fa2c8" opacity="0.85"/>
  <path d="M440 296 q4 -8 8 0 q-4 5 -8 0 z" fill="#c6e0f0" opacity="0.8"/>
  <!-- ranked cups and a stack of saucers -->
  <g fill="#e3d5ac">
    <rect x="540" y="284" width="14" height="12" rx="2"/><rect x="558" y="284" width="14" height="12" rx="2"/>
    <rect x="576" y="284" width="14" height="12" rx="2"/>
  </g>
  <path d="M540 284 h4 v12 h-4 z M558 284 h4 v12 h-4 z M576 284 h4 v12 h-4 z" fill="#ffffff" opacity="0.4"/>
  <path d="M540 294 h50 v2 h-50 z" fill="#25190f" opacity="0.35"/>
  <g fill="#cfc6b2">
    <ellipse cx="516" cy="296" rx="16" ry="4"/><ellipse cx="516" cy="290" rx="16" ry="4"/><ellipse cx="516" cy="284" rx="16" ry="4"/>
  </g>
  <ellipse cx="512" cy="283" rx="9" ry="1.8" fill="#f4efe0" opacity="0.6"/>
  <!-- THE STEWARD, keeping his seatings like scripture -->
  <g>
    <path d="M474 268 q26 -14 52 0 l6 106 l-64 0 z" fill="#ded8c4"/>
    <path d="M474 268 q26 -14 52 0 l2 12 q-28 -12 -54 0 z" fill="#f8f5ea"/>
    <path d="M500 262 q14 0 26 6 l6 106 l-32 0 z" fill="#f2eddc" opacity="0.6"/>
    <path d="M474 272 q10 -6 16 -6 l-8 108 l-14 0 z" fill="#b8b19c" opacity="0.45"/>
    <g fill="#9b7a3f">
      <circle cx="500" cy="292" r="2.6"/><circle cx="500" cy="308" r="2.6"/><circle cx="500" cy="324" r="2.6"/>
    </g>
    <path d="M468 282 l-8 62 l12 3 l10 -60 z" fill="#cfc8b3"/>
    <path d="M532 282 l8 62 l-12 3 l-10 -60 z" fill="#eae5d5"/>
    <ellipse cx="464" cy="350" rx="8" ry="6" fill="#a29074"/>
    <ellipse cx="536" cy="350" rx="8" ry="6" fill="#bcaa8c"/>
    <ellipse cx="500" cy="242" rx="17" ry="20" fill="#ab9a7e"/>
    <ellipse cx="505" cy="240" rx="11" ry="16" fill="#c4b18f" opacity="0.6"/>
    <path d="M483 238 q17 -22 34 0 q3 -22 -17 -22 q-20 0 -17 22 z" fill="#4a4238"/>
    <path d="M504 217 q13 2 13 21 l-6 -2 q0 -15 -9 -18 z" fill="#655c50" opacity="0.6"/>
    <path d="M491 242 l6 0 M503 242 l6 0" stroke="#4a3f31" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M494 254 l12 0" stroke="#6b5a45" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M486 264 l28 0 l0 8 l-28 0 z" fill="#f0e7ce"/>
    <path d="M494 268 l12 0 l0 22 l-12 0 z" fill="#26221c"/>
    <!-- his seating book, open against his forearm -->
    <path d="M448 336 l34 -6 l2 24 l-34 6 z" fill="#e6ddc4"/>
    <path d="M448 336 l34 -6 l1 4 l-34 6 z" fill="#fbf6e6"/>
    <path d="M448 354 l34 -6 l0.6 6 l-34 6 z" fill="#8f866f" opacity="0.6"/>
    <path d="M452 342 l26 -5 M452 347 l26 -5 M452 352 l20 -4" stroke="#8d7c62" stroke-width="1.2" opacity="0.85" fill="none"/>
    <path d="M462 374 l76 0 l4 30 l-84 0 z" fill="#26221c"/>
  </g>
</g>
<!-- aerial haze softening the pantry end -->
<rect x="380" y="190" width="240" height="220" fill="url(#mx-diner-haze)"/>

<!-- far tables, dwindling toward the pantry -->
<g>
  <ellipse cx="374" cy="416" rx="46" ry="8" fill="#0a0705" opacity="0.4"/>
  <ellipse cx="626" cy="416" rx="46" ry="8" fill="#0a0705" opacity="0.4"/>
  <path d="M336 372 L398 364 L410 376 L346 386 Z" fill="url(#mx-diner-linen)"/>
  <path d="M346 386 L410 376 L410 402 L346 414 Z" fill="#a49b81"/>
  <path d="M336 372 L398 364 L399 368 L337 376 Z" fill="#f8f2e0"/>
  <path d="M664 372 L602 364 L590 376 L654 386 Z" fill="url(#mx-diner-linen)"/>
  <path d="M654 386 L590 376 L590 402 L654 414 Z" fill="#a49b81"/>
  <path d="M664 372 L602 364 L601 368 L663 376 Z" fill="#f8f2e0"/>
  <g fill="#33271a">
    <rect x="352" y="344" width="42" height="26" rx="4"/><rect x="606" y="344" width="42" height="26" rx="4"/>
  </g>
  <g class="fx-glow" style="--d:-4.4s" fill="#5f6b4a">
    <rect x="356" y="348" width="34" height="20" rx="3"/><rect x="610" y="348" width="34" height="20" rx="3"/>
  </g>
  <path d="M356 348 h34 v4 h-34 z M610 348 h34 v4 h-34 z" fill="#94a473" opacity="0.5"/>
</g>

<!-- Dr. Voss, very straight at a cleared table, hands folded -->
<g>
  <ellipse cx="330" cy="486" rx="126" ry="20" fill="#100d09" opacity="0.20"/>
  <ellipse cx="330" cy="485" rx="106" ry="16" fill="#100d09" opacity="0.24"/>
  <ellipse cx="330" cy="484" rx="82" ry="12" fill="#100d09" opacity="0.26"/>
  <path d="M256 408 L376 390 L400 412 L282 434 Z" fill="url(#mx-diner-linen)"/>
  <path d="M282 434 L400 412 L400 458 L282 484 Z" fill="#a89f85"/>
  <path d="M282 434 L400 412 L400 420 L282 442 Z" fill="#c8bfa5"/>
  <path d="M256 408 L376 390 L377 396 L258 414 Z" fill="#f4eed9"/>
  <!-- the cloth hangs in folds, and the near edge is lit along its crease -->
  <path d="M312 440 l-2 44 M348 434 l-1 44 M382 428 l-1 42" stroke="#8d846c" stroke-width="1.6" opacity="0.55" fill="none"/>
  <path d="M316 440 l-2 44 M352 434 l-1 44" stroke="#e2dac2" stroke-width="1.2" opacity="0.5" fill="none"/>
  <g>
    <path d="M296 316 q34 -16 68 0 l10 88 l-88 0 z" fill="#33333f"/>
    <path d="M330 310 q20 0 34 6 l10 88 l-44 0 z" fill="#43434f" opacity="0.75"/>
    <path d="M312 322 q18 -8 36 0 l-4 34 l-28 0 z" fill="#ded0a6"/>
    <path d="M330 318 q10 1 18 4 l-4 34 l-14 0 z" fill="#f3ead1" opacity="0.7"/>
    <path d="M296 326 l-12 66 l14 4 l12 -62 z" fill="#2e2e39"/>
    <path d="M364 326 l12 66 l-14 4 l-12 -62 z" fill="#45454f"/>
    <path d="M306 396 q26 -14 52 0 l0 14 l-52 0 z" fill="#2a2a33"/>
    <ellipse cx="322" cy="400" rx="14" ry="7" fill="#a8977b"/>
    <ellipse cx="342" cy="400" rx="14" ry="7" fill="#c0ae90"/>
    <path d="M312 400 l18 4 M334 398 l18 4" stroke="#8d7c62" stroke-width="1.2" stroke-linecap="round" fill="none"/>
    <ellipse cx="330" cy="286" rx="20" ry="23" fill="#a8977b"/>
    <ellipse cx="337" cy="284" rx="12" ry="18" fill="#c3b08d" opacity="0.6"/>
    <path d="M310 282 q20 -25 40 0 q3 -26 -20 -26 q-23 0 -20 26 z" fill="#6a625a"/>
    <path d="M334 257 q16 2 16 25 l-7 -2 q0 -18 -11 -21 z" fill="#847b70" opacity="0.55"/>
    <path d="M308 280 q-6 22 4 34 l7 -6 q-7 -12 -5 -26 z" fill="#5a534c"/>
    <path d="M352 280 q6 22 -4 34 l-7 -6 q7 -12 5 -26 z" fill="#7b7268"/>
    <path d="M320 286 l7 0 M333 286 l7 0" stroke="#4a3f31" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M324 300 l12 0" stroke="#6b5a45" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M318 310 l24 0 l2 10 l-28 0 z" fill="#f0e7ce"/>
  </g>
  <rect x="238" y="428" width="46" height="30" rx="4" fill="#33271a"/>
  <rect class="fx-glow" style="--d:-2.1s" x="242" y="432" width="38" height="22" rx="3" fill="#5f6b4a"/>
  <rect x="242" y="432" width="38" height="4" rx="2" fill="#94a473" opacity="0.5"/>
</g>

<!-- Harold Wexler and the wreckage of a working supper -->
<g>
  <ellipse cx="670" cy="486" rx="126" ry="20" fill="#100d09" opacity="0.20"/>
  <ellipse cx="670" cy="485" rx="106" ry="16" fill="#100d09" opacity="0.24"/>
  <ellipse cx="670" cy="484" rx="82" ry="12" fill="#100d09" opacity="0.26"/>
  <path d="M744 408 L624 390 L600 412 L718 434 Z" fill="url(#mx-diner-linen)"/>
  <path d="M718 434 L600 412 L600 458 L718 484 Z" fill="#a89f85"/>
  <path d="M718 434 L600 412 L600 420 L718 442 Z" fill="#c8bfa5"/>
  <path d="M744 408 L624 390 L623 396 L742 414 Z" fill="#f4eed9"/>
  <path d="M688 440 l2 44 M652 434 l1 44 M618 428 l1 42" stroke="#8d846c" stroke-width="1.6" opacity="0.55" fill="none"/>
  <g>
    <path d="M704 316 q34 -16 68 0 l10 88 l-88 0 z" fill="#42392e"/>
    <path d="M738 310 q20 0 34 6 l10 88 l-44 0 z" fill="#554a3c" opacity="0.75"/>
    <path d="M722 322 q16 -8 32 0 l-2 34 l-28 0 z" fill="#ded0a6"/>
    <path d="M738 318 q9 1 16 4 l-2 34 l-14 0 z" fill="#f3ead1" opacity="0.7"/>
    <path d="M734 324 l8 0 l2 30 l-12 0 z" fill="#5d1f18"/>
    <path d="M734 324 l3 0 l1 30 l-4 0 z" fill="#84332a" opacity="0.7"/>
    <path d="M704 326 l-12 66 l14 4 l12 -62 z" fill="#3b3329"/>
    <path d="M772 326 l12 66 l-14 4 l-12 -62 z" fill="#56493a"/>
    <ellipse cx="696" cy="396" rx="13" ry="7" fill="#a8977b"/>
    <ellipse cx="782" cy="396" rx="13" ry="7" fill="#c0ae90"/>
    <ellipse cx="738" cy="286" rx="20" ry="23" fill="#a8977b"/>
    <ellipse cx="745" cy="284" rx="12" ry="18" fill="#c3b08d" opacity="0.6"/>
    <path d="M718 280 q20 -22 40 0 q3 -24 -20 -24 q-23 0 -20 24 z" fill="#5b5148"/>
    <path d="M742 258 q16 3 16 22 l-7 -2 q0 -15 -11 -18 z" fill="#7a6f63" opacity="0.55"/>
    <path d="M728 286 l7 0 M741 286 l7 0" stroke="#4a3f31" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M732 300 l12 0" stroke="#6b5a45" stroke-width="2" stroke-linecap="round" fill="none"/>
    <path d="M726 310 l24 0 l2 10 l-28 0 z" fill="#f0e7ce"/>
  </g>
  <!-- papers, ashtray, the rye he keeps checking -->
  <g>
    <path d="M624 414 l64 -8 l4 12 l-66 8 z" fill="#26190f" opacity="0.35"/>
    <path d="M622 404 l64 -8 l4 16 l-66 10 z" fill="#e9e0c6"/>
    <path d="M622 404 l64 -8 l1 4 l-65 8 z" fill="#fbf6e6"/>
    <path d="M636 396 l60 -6 l3 12 l-60 8 z" fill="#ded0a6"/>
    <path d="M628 410 l52 -7 M629 415 l50 -7 M642 400 l48 -6" stroke="#8d7c62" stroke-width="1.3" opacity="0.85" fill="none"/>
    <ellipse cx="716" cy="432" rx="20" ry="5" fill="#26190f" opacity="0.35"/>
    <path d="M700 400 l30 0 l-3 26 q-6 6 -12 6 q-6 0 -12 -6 z" fill="#efe8d2" opacity="0.95"/>
    <path d="M704 406 l22 0 l-2 16 q-4 4 -9 4 q-5 0 -9 -4 z" fill="#8a5a24"/>
    <path d="M704 406 l5 0 l-1 18 q-3 -1 -5 -3 z" fill="#c08a3c" opacity="0.6"/>
    <path d="M702 400 l5 0 l-2 28 q-3 -2 -4 -4 z" fill="#ffffff" opacity="0.35"/>
    <ellipse cx="746" cy="424" rx="20" ry="6" fill="#26190f" opacity="0.35"/>
    <ellipse cx="744" cy="418" rx="18" ry="6" fill="#bab2a0"/>
    <ellipse cx="742" cy="416" rx="14" ry="4.4" fill="#ddd6c6"/>
    <ellipse cx="744" cy="416" rx="12" ry="4" fill="#8e8e88"/>
    <!-- crumbs and the shadow of a fork somebody carried away -->
    <g fill="#7a6c4e" opacity="0.6">
      <ellipse cx="664" cy="424" rx="2" ry="1.2"/><ellipse cx="676" cy="428" rx="1.6" ry="1"/>
      <ellipse cx="690" cy="422" rx="1.4" ry="0.9"/><ellipse cx="652" cy="430" rx="1.8" ry="1.1"/>
    </g>
  </g>
  <!-- HIS BRIEFCASE, left gaping while he fetched another rye -->
  <g>
    <ellipse cx="890" cy="540" rx="96" ry="16" fill="#080605" opacity="0.4"/>
    <path d="M800 470 L960 442 L978 500 L818 536 Z" fill="#3f2c1b"/>
    <path d="M880 456 L960 442 L978 500 L898 518 Z" fill="#5b4229" opacity="0.7"/>
    <path d="M800 470 L960 442 L962 452 L802 480 Z" fill="#7a5a34"/>
    <path d="M812 452 L956 428 L960 444 L816 470 Z" fill="#3b2f22"/>
    <path d="M812 452 L956 428 L956 434 L812 458 Z" fill="#7c6a51"/>
    <g fill="#e9e0c6">
      <path d="M828 440 L936 422 L940 452 L832 472 Z"/>
      <path d="M840 428 L930 414 L932 430 L842 444 Z"/>
    </g>
    <path d="M828 440 L936 422 L936 426 L828 444 Z M840 428 L930 414 L930 418 L840 432 Z" fill="#fbf6e6"/>
    <path d="M836 448 L920 434 M837 455 L922 441 M838 462 L900 452 M848 432 L916 421" stroke="#8d7c62" stroke-width="1.4" opacity="0.85" fill="none"/>
    <!-- the decoded wire, initialled; and the draft nobody delivered -->
    <path d="M856 462 L946 446 L950 470 L860 488 Z" fill="#ded0a6"/>
    <path d="M856 462 L946 446 L946 450 L856 466 Z" fill="#f6efdc"/>
    <path d="M864 470 L936 458 M865 476 L938 464 M866 482 L916 473" stroke="#5b5148" stroke-width="1.5" opacity="0.9" fill="none"/>
    <path d="M930 452 q10 -6 16 2 q-6 8 -16 2 z" fill="#a8352a" opacity="0.9"/>
    <path d="M876 492 L958 478 L962 496 L880 512 Z" fill="#c3d6c4"/>
    <path d="M876 492 L958 478 L958 482 L876 496 Z" fill="#e2eee2"/>
    <path d="M884 498 L946 488 M885 504 L926 497" stroke="#7d8a80" stroke-width="1.3" fill="none"/>
    <ellipse cx="946" cy="486" rx="9" ry="4" fill="#5f6b4a" opacity="0.8"/>
    <rect x="878" y="452" width="16" height="10" rx="3" fill="#9b7a3f"/>
    <rect x="878" y="452" width="16" height="3" rx="1.5" fill="#dcc07a" opacity="0.6"/>
  </g>
</g>

<!-- KEENE'S TABLE, still set apart by the steward's sentiment -->
<g>
  <ellipse cx="150" cy="600" rx="130" ry="22" fill="#080605" opacity="0.35"/>
  <path d="M30 448 L212 422 L248 452 L64 486 Z" fill="url(#mx-diner-linen)"/>
  <path d="M30 448 L212 422 L214 430 L32 456 Z" fill="#f6f0dd"/>
  <path d="M64 486 L248 452 L248 560 L64 600 Z" fill="#a89f85"/>
  <path d="M64 486 L248 452 L248 462 L64 496 Z" fill="#cdc4a9"/>
  <path d="M180 468 L248 456 L248 560 L180 578 Z" fill="#8d8570" opacity="0.4"/>
  <path d="M104 490 L102 592 M162 480 L160 578 M214 470 L212 566" stroke="#8f866f" stroke-width="2" opacity="0.6" fill="none"/>
  <path d="M107 490 L105 592 M165 480 L163 578" stroke="#e6ddc4" stroke-width="1.2" opacity="0.5" fill="none"/>
  <!-- one cover, one chair -->
  <ellipse cx="128" cy="458" rx="42" ry="12" fill="#7d7460" opacity="0.4"/>
  <ellipse cx="126" cy="452" rx="40" ry="13" fill="#f4ecd6"/>
  <ellipse cx="122" cy="450" rx="30" ry="9" fill="#e3d5ac"/>
  <ellipse cx="126" cy="449" rx="22" ry="6" fill="#cfc6b2"/>
  <ellipse cx="118" cy="447" rx="12" ry="2.6" fill="#f8f4e6" opacity="0.7"/>
  <path d="M120 446 q10 -10 20 -2 q-8 8 -20 2 z" fill="#8a7a5c" opacity="0.7"/>
  <g fill="#cfc6b2">
    <path d="M78 452 l4 -14 l3 0 l1 14 z"/><path d="M86 450 l2 -14 l3 0 l0 14 z"/>
    <path d="M170 446 l16 -4 l1 5 l-16 4 z"/>
  </g>
  <path d="M78 452 l1 -14 l1.4 0 l0.6 14 z M86 450 l0.6 -14 l1.4 0 l0 14 z" fill="#f4efe0" opacity="0.7"/>
  <path d="M80 452 l8 0 l2 4 l-10 0 z M170 450 l18 -4 l1 3 l-18 4 z" fill="#7d7460" opacity="0.45"/>
  <!-- the napkin, and the flat prescription tin folded in it -->
  <path d="M188 442 L242 434 L254 452 L198 462 Z" fill="#7d7460" opacity="0.4"/>
  <path d="M186 436 L240 428 L252 446 L196 456 Z" fill="#f4ecd6"/>
  <path d="M186 436 L240 428 L242 434 L188 442 Z" fill="#ffffff" opacity="0.4"/>
  <path d="M196 440 L232 434 L238 446 L202 452 Z" fill="#b9b2a4"/>
  <path d="M196 440 L232 434 L233 438 L197 444 Z" fill="#dcd6ca"/>
  <path d="M204 442 L226 438 L227 442 L205 446 Z" fill="#a8352a" opacity="0.85"/>
  <!-- the soup he did not finish -->
  <ellipse cx="114" cy="444" rx="23" ry="7" fill="#7d7460" opacity="0.4"/>
  <ellipse cx="112" cy="440" rx="22" ry="8" fill="#e8e0c8"/>
  <ellipse cx="110" cy="438" rx="18" ry="5" fill="#f8f2e2" opacity="0.6"/>
  <ellipse cx="112" cy="439" rx="15" ry="5" fill="#8a7a4c"/>
  <ellipse cx="108" cy="438" rx="7" ry="2" fill="#b09a5e" opacity="0.6"/>
  <!-- his chair, put back square by somebody who cared -->
  <rect x="86" y="378" width="92" height="74" rx="5" fill="#3b2f22"/>
  <rect x="86" y="378" width="92" height="4" rx="2" fill="#6d5533" opacity="0.7"/>
  <rect x="96" y="388" width="72" height="54" rx="4" fill="#5f6b4a"/>
  <rect x="96" y="388" width="72" height="7" rx="3" fill="#7f8d5e" opacity="0.6"/>
  <rect x="96" y="434" width="72" height="8" rx="3" fill="#3c452b" opacity="0.6"/>
  <path d="M116 388 L116 442 M148 388 L148 442" stroke="#4a5539" stroke-width="2" fill="none"/>
  <rect x="82" y="450" width="100" height="10" rx="3" fill="#33271a"/>
  <rect x="82" y="450" width="100" height="2.6" rx="1.3" fill="#6b5030" opacity="0.6"/>
</g>

<!-- foreground: the back of an empty chair, close to the eye -->
<path d="M300 620 L316 512 q120 -34 244 -2 l14 110 z" fill="#1c1509"/>
<path d="M330 596 L342 528 q104 -28 210 -2 l10 68 z" fill="#3f4630"/>
<path d="M330 596 L342 528 q104 -28 210 -2 l2 12 q-108 -26 -206 2 z" fill="#5b6444" opacity="0.6"/>
<path d="M392 524 L392 600 M492 524 L492 600" stroke="#33271a" stroke-width="4" fill="none"/>
<path d="M312 522 q124 -36 252 -2 l2 -12 q-128 -34 -256 2 z" fill="#4a3524"/>
<path d="M312 520 q124 -36 252 -2 l0.6 -4 q-128 -34 -253 2 z" fill="#8a6539" opacity="0.6"/>

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
  <linearGradient id="mx-lounge-leather" x1="0.1" y1="0" x2="0.95" y2="0.8">
    <stop offset="0" stop-color="#241910"/><stop offset="0.34" stop-color="#3b2a1b"/>
    <stop offset="0.7" stop-color="#553c26"/><stop offset="1" stop-color="#2b1e13"/>
  </linearGradient>
  <linearGradient id="mx-lounge-camel" x1="0.05" y1="0" x2="0.95" y2="0.5">
    <stop offset="0" stop-color="#65543a"/><stop offset="0.32" stop-color="#967d53"/>
    <stop offset="0.62" stop-color="#c0a575"/><stop offset="1" stop-color="#6b5839"/>
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
  <linearGradient id="mx-lounge-back" x1="0" y1="0.2" x2="1" y2="0.6">
    <stop offset="0" stop-color="#1c150e"/><stop offset="0.42" stop-color="#251d14"/>
    <stop offset="0.78" stop-color="#3a2c1c"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <radialGradient id="mx-lounge-carpet" cx="0.74" cy="0.18" r="0.9">
    <stop offset="0" stop-color="#553c21"/><stop offset="0.36" stop-color="#3b2919"/>
    <stop offset="0.72" stop-color="#261b11"/><stop offset="1" stop-color="#170f0a"/>
  </radialGradient>
  <linearGradient id="mx-lounge-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a3718"/><stop offset="0.22" stop-color="#d0ac60"/><stop offset="0.5" stop-color="#8a6c30"/>
    <stop offset="0.72" stop-color="#eed9a0"/><stop offset="1" stop-color="#3d2d12"/>
  </linearGradient>
  <linearGradient id="mx-lounge-bar" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#1a130c"/><stop offset="0.5" stop-color="#261d13"/><stop offset="1" stop-color="#3a2c1c"/>
  </linearGradient>
  <linearGradient id="mx-lounge-drape" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2c1710"/><stop offset="0.42" stop-color="#5a3225"/>
    <stop offset="0.72" stop-color="#3d2118"/><stop offset="1" stop-color="#6b3a2a"/>
  </linearGradient>
  <linearGradient id="mx-lounge-drape2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6b3a2a"/><stop offset="0.34" stop-color="#3d2118"/>
    <stop offset="0.66" stop-color="#5a3225"/><stop offset="1" stop-color="#2c1710"/>
  </linearGradient>
  <filter id="mx-lounge-soft" x="-40%" y="-160%" width="180%" height="420%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
</defs>

<rect width="1000" height="620" fill="url(#mx-lounge-wall)"/>
<rect x="0" y="86" width="1000" height="332" fill="url(#mx-lounge-back)"/>

<!-- ceiling cove and the panelled rear wall -->
<rect x="0" y="0" width="1000" height="86" fill="#150f09"/>
<path d="M560 86 L1000 86 L1000 22 L640 30 Z" fill="#d9a441" opacity="0.05"/>
<g>
  <rect x="176" y="0" width="10" height="20" fill="#6b5326"/>
  <g class="fx-glow" style="--d:-1.5s">
    <ellipse cx="181" cy="34" rx="26" ry="18" fill="#e8dcbb" opacity="0.5"/>
    <ellipse cx="181" cy="30" rx="18" ry="12" fill="#ffd98a" opacity="0.55"/>
  </g>
  <rect x="620" y="0" width="10" height="20" fill="#6b5326"/>
  <g class="fx-glow" style="--d:-3.7s">
    <ellipse cx="625" cy="34" rx="26" ry="18" fill="#e8dcbb" opacity="0.4"/>
    <ellipse cx="625" cy="30" rx="18" ry="12" fill="#ffd98a" opacity="0.45"/>
  </g>
</g>
<rect x="0" y="86" width="1000" height="8" fill="#3b2f22"/>
<rect x="0" y="86" width="1000" height="2.4" fill="#6d5533" opacity="0.7"/>
<rect x="0" y="93" width="1000" height="3" fill="#0d0a06" opacity="0.6"/>
<!-- veneer figure across the rear panelling -->
<path d="M330 128 q168 14 336 4 q166 -10 334 6 M330 176 q168 12 336 2 q166 -8 334 4 M330 224 q168 10 336 0 q166 -8 334 4 M330 272 q168 8 336 -2 q166 -6 334 2 M330 320 q168 6 336 -2 q166 -6 334 2" stroke="#4a3a24" stroke-width="1" fill="none" opacity="0.2"/>
<path d="M330 104 h120 v46 h-120 z M880 104 h100 v46 h-100 z" fill="none" stroke="#161009" stroke-width="3.6"/>
<path d="M331 105 h120 v46 h-120 z M881 105 h100 v46 h-100 z" fill="none" stroke="#4d3c25" stroke-width="1.2"/>
<rect x="0" y="404" width="1000" height="14" fill="#3b2f22"/>
<rect x="0" y="404" width="1000" height="3" fill="#7a5f38" opacity="0.7"/>
<rect x="0" y="415" width="1000" height="3" fill="#0d0a06" opacity="0.7"/>
<rect x="0" y="418" width="1000" height="202" fill="#170f0a"/>
<path d="M120 620 L920 620 L790 424 L250 424 Z" fill="url(#mx-lounge-carpet)"/>
<path d="M186 620 L868 620 L768 436 L272 436 Z" fill="none" stroke="#6b4d2d" stroke-width="4"/>
<path d="M186 620 L868 620 L768 436 L272 436 Z" fill="none" stroke="#1e150d" stroke-width="1.2"/>
<path d="M420 520 l20 -12 l20 12 l-20 12 z M580 520 l20 -12 l20 12 l-20 12 z M340 590 l22 -13 l22 13 l-22 13 z M636 590 l22 -13 l22 13 l-22 13 z" fill="#4a3524" opacity="0.6"/>
<path d="M500 520 l18 -11 l18 11 l-18 11 z M488 590 l20 -12 l20 12 l-20 12 z" stroke="#7a5731" stroke-width="1.1" fill="none" opacity="0.3"/>

<!-- THE FAMOUS TAIL WINDOW: only snow turning in the dark -->
<g>
  <path d="M420 168 q0 -52 60 -52 l300 0 q60 0 60 52 l0 206 l-420 0 z" fill="#241b12"/>
  <path d="M424 168 q0 -48 56 -48 l300 0 q56 0 56 48 l0 202 l-412 0 z" fill="#4a3a24"/>
  <path d="M434 172 q0 -42 50 -42 l292 0 q50 0 50 42 l0 192 l-392 0 z" fill="#1b2436"/>
  <path d="M434 240 q60 -20 118 -6 q66 -18 128 4 q60 -16 146 -2 l0 128 l-392 0 z" fill="#2b3548"/>
  <path d="M434 300 q80 -18 150 -2 q70 -14 134 4 q56 -10 108 -2 l0 64 l-392 0 z" fill="#3d4a5e"/>
  <path d="M434 340 q92 -14 176 2 q84 -10 182 6 l0 16 l-358 0 z" fill="#54637a"/>
  <path d="M434 340 q92 -14 176 2 q84 -10 182 6 l0 5 q-92 -14 -180 -4 q-88 -12 -178 2 z" fill="#8fa4c0" opacity="0.45"/>
  <g class="fx-drift-slow"><g fill="#c6d2e0" opacity="0.75">
    <ellipse cx="500" cy="188" rx="4" ry="4"/><ellipse cx="556" cy="212" rx="3" ry="3"/>
    <ellipse cx="618" cy="176" rx="4.5" ry="4.5"/><ellipse cx="676" cy="224" rx="3.4" ry="3.4"/>
    <ellipse cx="742" cy="184" rx="4" ry="4"/><ellipse cx="800" cy="230" rx="3" ry="3"/>
    <ellipse cx="472" cy="252" rx="3.6" ry="3.6"/><ellipse cx="584" cy="272" rx="3" ry="3"/>
    <ellipse cx="706" cy="288" rx="4" ry="4"/><ellipse cx="838" cy="264" rx="3.4" ry="3.4"/>
    <ellipse cx="530" cy="322" rx="3" ry="3"/><ellipse cx="650" cy="330" rx="3.6" ry="3.6"/>
    <ellipse cx="780" cy="316" rx="3" ry="3"/>
  </g></g>
  <g class="fx-drift-slow" style="--d:-7s"><g stroke="#8fa4c0" stroke-width="1.6" opacity="0.45">
    <path d="M462 200 q30 16 22 44"/><path d="M600 240 q28 18 18 46"/>
    <path d="M736 206 q30 18 20 46"/><path d="M846 300 q22 14 14 36"/>
  </g></g>
  <!-- the track that is not there anymore -->
  <g stroke="#8fa4c0" stroke-width="3" opacity="0.22">
    <path d="M556 364 L602 320"/><path d="M676 364 L630 320"/>
  </g>
  <!-- condensation standing along the foot of the glass, and frost in the corners -->
  <path d="M434 322 l392 0 l0 42 l-392 0 z" fill="#cfdae6" opacity="0.16"/>
  <path d="M434 344 l392 0 l0 20 l-392 0 z" fill="#e2eaf2" opacity="0.16"/>
  <path d="M470 296 q4 34 0 66 M598 306 q4 30 1 58 M714 300 q4 32 1 62 M790 312 q3 26 1 52" stroke="#eef4fa" stroke-width="1.4" opacity="0.3" fill="none"/>
  <path d="M440 160 q10 -20 30 -26 M436 186 q12 -26 32 -34 M820 160 q-10 -20 -30 -26 M824 186 q-12 -26 -32 -34" stroke="#dce6f0" stroke-width="1.2" fill="none" opacity="0.35"/>
  <!-- glazing bars and the brass grab rail across the glass -->
  <g stroke="#4a3524" stroke-width="7">
    <path d="M566 130 L566 364"/><path d="M694 130 L694 364"/>
  </g>
  <path d="M563 130 L563 364 M691 130 L691 364" stroke="#7a5c36" stroke-width="1.4" fill="none" opacity="0.5"/>
  <rect x="434" y="352" width="392" height="12" fill="#4a3524"/>
  <rect x="434" y="352" width="392" height="2.6" fill="#8a6a3c" opacity="0.7"/>
  <rect x="448" y="292" width="364" height="8" rx="4" fill="url(#mx-lounge-brass)"/>
  <rect x="448" y="293" width="364" height="2" rx="1" fill="#f2e0aa" opacity="0.5"/>
  <g fill="#8a6c30">
    <rect x="470" y="290" width="10" height="16" rx="3"/><rect x="776" y="290" width="10" height="16" rx="3"/>
  </g>
</g>

<!-- heavy drapes drawn back from the tail glass -->
<g>
  <path d="M404 150 l40 0 l-8 232 q-18 8 -36 2 z" fill="url(#mx-lounge-drape)"/>
  <path d="M856 150 l40 0 l8 232 q-18 8 -36 2 z" fill="url(#mx-lounge-drape2)"/>
  <path d="M416 154 l-6 224 M430 154 l-6 226 M884 154 l6 224 M870 154 l6 226" fill="none" stroke="#26120d" stroke-width="3"/>
  <path d="M419 154 l-6 224 M433 154 l-6 226 M881 154 l6 224 M867 154 l6 226" fill="none" stroke="#7d4633" stroke-width="1" opacity="0.5"/>
  <ellipse cx="422" cy="292" rx="16" ry="8" fill="#6b5326"/>
  <ellipse cx="420" cy="290" rx="9" ry="3.4" fill="#c8a75c" opacity="0.7"/>
  <ellipse cx="878" cy="292" rx="16" ry="8" fill="#6b5326"/>
  <ellipse cx="876" cy="290" rx="9" ry="3.4" fill="#c8a75c" opacity="0.7"/>
</g>

<!-- the barometer, and a shelf of unread magazines -->
<g>
  <circle cx="362" cy="198" r="34" fill="#120d08" opacity="0.5"/>
  <circle cx="360" cy="196" r="34" fill="#7d6129"/>
  <path d="M360 162 a34 34 0 0 1 30 18 l-8 4 a26 26 0 0 0 -22 -14 z" fill="#d6b468" opacity="0.7"/>
  <circle cx="360" cy="196" r="26" fill="#ddd0a4"/>
  <circle cx="360" cy="196" r="20" fill="#f4ecd6"/>
  <path d="M360 178 L360 182 M378 196 L374 196 M360 214 L360 210 M342 196 L346 196" stroke="#8d7c62" stroke-width="1.6" fill="none"/>
  <path d="M360 196 L372 186" stroke="#5d1f18" stroke-width="2.4"/>
  <circle cx="360" cy="196" r="3" fill="#4a3524"/>
  <rect x="900" y="230" width="86" height="10" fill="#4a3524"/>
  <rect x="900" y="230" width="86" height="2.4" fill="#8a6a3c" opacity="0.6"/>
  <g fill="#cfc6b2">
    <rect x="906" y="206" width="70" height="8"/><rect x="906" y="216" width="70" height="7"/>
    <rect x="910" y="196" width="62" height="8"/>
  </g>
  <path d="M906 206 h70 v2 h-70 z M906 216 h70 v2 h-70 z M910 196 h62 v2 h-62 z" fill="#f2ece0" opacity="0.6"/>
</g>

<!-- MILES CORLISS at the window, with a brandy he is not drinking -->
<g>
  <ellipse cx="636" cy="540" rx="70" ry="12" fill="#080605" opacity="0.4"/>
  <path d="M596 302 q40 -22 80 0 l10 130 l-100 0 z" fill="#262a34"/>
  <path d="M636 296 q24 0 40 6 l10 130 l-50 0 z" fill="#343945" opacity="0.75"/>
  <path d="M614 308 q22 -10 44 0 l-4 40 l-36 0 z" fill="#ded0a6"/>
  <path d="M636 304 q12 1 22 4 l-4 40 l-18 0 z" fill="#f3ead1" opacity="0.65"/>
  <path d="M596 312 l-14 84 l16 6 l14 -80 z" fill="#22262f"/>
  <path d="M676 312 l14 84 l-16 6 l-14 -80 z" fill="#333845"/>
  <path d="M632 316 l10 0 l2 34 l-14 0 z" fill="#39332c"/>
  <ellipse cx="636" cy="270" rx="21" ry="24" fill="#a8977b"/>
  <ellipse cx="643" cy="269" rx="12" ry="18" fill="#c3b08d" opacity="0.6"/>
  <path d="M615 266 q21 -26 42 0 q3 -27 -21 -27 q-24 0 -21 27 z" fill="#4a443c"/>
  <path d="M640 240 q17 3 17 26 l-7 -2 q0 -18 -12 -21 z" fill="#6a635a" opacity="0.55"/>
  <path d="M613 264 q-5 20 3 30 l6 -6 q-5 -10 -3 -22 z" fill="#413c35"/>
  <path d="M625 270 l7 0 M640 270 l7 0" stroke="#4a3f31" stroke-width="2.1" stroke-linecap="round" fill="none"/>
  <path d="M629 284 l14 0" stroke="#6b5a45" stroke-width="2" stroke-linecap="round" fill="none"/>
  <path d="M622 296 l28 0 l2 10 l-32 0 z" fill="#f0e7ce"/>
  <!-- the brandy, held level and untouched -->
  <path d="M596 322 q-22 26 -18 62 l18 4 q0 -34 16 -56 z" fill="#22262f"/>
  <path d="M578 380 q16 -10 30 -2 q6 9 -3 15 q-18 6 -30 -3 z" fill="#a89073"/>
  <path d="M592 378 q10 0 16 0 q6 9 -3 15 q-6 2 -11 1 z" fill="#c1a887" opacity="0.6"/>
  <path d="M580 358 q12 -12 24 0 q0 14 -12 16 q-12 -2 -12 -16 z" fill="#efe8d2" opacity="0.92"/>
  <path d="M584 362 q8 -8 16 0 q0 9 -8 10 q-8 -1 -8 -10 z" fill="#8a5a24"/>
  <path d="M596 358 q6 2 8 6 q-1 9 -7 11 q4 -8 -1 -17 z" fill="#ffffff" opacity="0.4"/>
  <path d="M588 374 l8 0 l0 12 l-8 0 z" fill="#efe8d2" opacity="0.7"/>
  <path d="M604 428 q34 -12 68 0 l4 60 l-76 0 z" fill="#262a34"/>
  <path d="M640 424 q20 0 32 4 l4 60 l-38 0 z" fill="#333845" opacity="0.7"/>
  <path d="M604 488 l32 0 l2 42 l-36 0 z" fill="#1d2028"/>
  <path d="M642 488 l32 0 l4 42 l-38 0 z" fill="#282c36"/>
  <ellipse cx="618" cy="534" rx="20" ry="8" fill="#0d0b09"/>
  <ellipse cx="660" cy="534" rx="20" ry="8" fill="#141210"/>
  <ellipse cx="664" cy="531" rx="10" ry="3" fill="#38332c" opacity="0.55"/>
</g>

<!-- THE SHUTTERED BAR, and the lounge steward's timed chits -->
<g>
  <rect x="0" y="120" width="316" height="196" fill="url(#mx-lounge-bar)"/>
  <rect x="0" y="120" width="316" height="12" fill="#3b2f22"/>
  <rect x="0" y="120" width="316" height="2.6" fill="#6d5533" opacity="0.7"/>
  <!-- the roller shutter: every slat has a lit edge and a shadow under it -->
  <path d="M0 146 L316 146 M0 162 L316 162 M0 178 L316 178 M0 194 L316 194 M0 210 L316 210 M0 226 L316 226" stroke="#1a130b" stroke-width="4" fill="none"/>
  <path d="M0 148 L316 148 M0 164 L316 164 M0 180 L316 180 M0 196 L316 196 M0 212 L316 212 M0 228 L316 228" stroke="#5b4629" stroke-width="1.2" fill="none" opacity="0.55"/>
  <rect x="0" y="234" width="316" height="10" fill="url(#mx-lounge-brass)"/>
  <rect x="0" y="244" width="316" height="72" fill="#181109"/>
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
  <!-- the little that reaches the bottles from the far lamp -->
  <path d="M36 256 h4 v52 h-4 z M58 252 h4 v56 h-4 z M84 258 h4 v50 h-4 z M105 250 h4 v58 h-4 z M133 256 h4 v52 h-4 z M159 252 h4 v56 h-4 z M186 254 h4 v54 h-4 z M212 258 h4 v50 h-4 z M237 252 h4 v56 h-4 z" fill="#e8dcbb" opacity="0.22"/>
  <!-- the counter -->
  <path d="M0 316 L330 316 L358 346 L0 346 Z" fill="#5c4229"/>
  <path d="M180 316 L330 316 L358 346 L180 346 Z" fill="#78552f" opacity="0.5"/>
  <path d="M0 316 L330 316 L338 324 L0 324 Z" fill="#8a6538"/>
  <path d="M0 316 L330 316 L332 318.6 L0 318.6 Z" fill="#c8a163" opacity="0.5"/>
  <rect x="0" y="346" width="352" height="74" fill="#2b2116"/>
  <rect x="0" y="346" width="352" height="3" fill="#0e0a06" opacity="0.7"/>
  <path d="M24 358 h90 v48 h-90 z M130 358 h90 v48 h-90 z M236 358 h90 v48 h-90 z" fill="none" stroke="#170f08" stroke-width="3.4"/>
  <path d="M25 359 h90 v48 h-90 z M131 359 h90 v48 h-90 z M237 359 h90 v48 h-90 z" fill="none" stroke="#54402a" stroke-width="1.2"/>
  <!-- THE CHITS: spiked, and clipped along the rail, each with its time -->
  <g>
    <path d="M104 318 L164 311 L166 326 L106 333 Z" fill="#1a1109" opacity="0.45"/>
    <rect x="128" y="300" width="8" height="20" fill="#8a6c30"/>
    <rect x="128" y="300" width="2.6" height="20" fill="#d6b468" opacity="0.7"/>
    <path d="M128 296 l8 0 l-4 -14 z" fill="#c8a75c"/>
    <path d="M104 306 L160 300 L162 318 L106 324 Z" fill="#ece2c6"/>
    <path d="M104 306 L160 300 L160.6 304 L104.6 310 Z" fill="#fbf6e6"/>
    <path d="M100 300 L156 294 L158 310 L102 316 Z" fill="#ded0a6"/>
    <path d="M100 300 L156 294 L156.6 297 L100.6 303 Z" fill="#f6efdc"/>
    <path d="M108 294 L162 288 L164 302 L110 308 Z" fill="#f4ecd6"/>
    <path d="M108 294 L162 288 L162.6 291 L108.6 297 Z" fill="#ffffff" opacity="0.5"/>
    <path d="M112 296 L150 292 M113 300 L146 296 M106 306 L150 301 M108 312 L142 308 M110 318 L152 313" stroke="#8d7c62" stroke-width="1.3" opacity="0.9" fill="none"/>
    <path d="M152 292 L160 291 M148 302 L156 301 M154 314 L160 313" stroke="#a8352a" stroke-width="1.6" opacity="0.85" fill="none"/>
    <!-- the rail of settled chits behind the counter -->
    <path d="M188 262 L300 258" stroke="#6b5326" stroke-width="3" fill="none"/>
    <path d="M188 261 L300 257" stroke="#c0a05a" stroke-width="0.9" fill="none" opacity="0.5"/>
    <g fill="#ded0a6">
      <path d="M192 262 l18 0 l0 26 l-18 0 z"/><path d="M216 261 l18 0 l0 22 l-18 0 z"/>
      <path d="M240 260 l18 0 l0 28 l-18 0 z"/><path d="M264 259 l18 0 l0 24 l-18 0 z"/>
    </g>
    <path d="M192 262 h6 v26 h-6 z M216 261 h6 v22 h-6 z M240 260 h6 v28 h-6 z M264 259 h6 v24 h-6 z" fill="#f8f2e0" opacity="0.6"/>
    <path d="M195 270 l12 0 M195 276 l12 0 M219 269 l12 0 M243 268 l12 0 M243 275 l12 0 M267 267 l12 0" stroke="#8d7c62" stroke-width="1.1" opacity="0.85" fill="none"/>
  </g>
  <!-- a glass left drying, and the steward's pencil -->
  <ellipse cx="243" cy="314" rx="14" ry="4" fill="#1a1109" opacity="0.4"/>
  <path d="M232 292 l22 0 l-3 20 q-8 6 -16 0 z" fill="#efe8d2" opacity="0.85"/>
  <path d="M232 292 l6 0 l-2 21 q-3 -1 -5 -3 z" fill="#ffffff" opacity="0.4"/>
  <path d="M266 318 L306 308 L308 313 L268 323 Z" fill="#1a1109" opacity="0.4"/>
  <path d="M266 314 L306 304 L308 310 L268 320 Z" fill="#a8352a"/>
  <path d="M266 314 L306 304 L306.6 306 L266.6 316 Z" fill="#d8655a" opacity="0.6"/>
</g>

<!-- DANIEL CALLAHAN in the deepest chair, watching you cross the carpet -->
<g>
  <ellipse cx="392" cy="600" rx="140" ry="24" fill="#080605" opacity="0.35" filter="url(#mx-lounge-soft)"/>
  <path d="M282 566 l0 -122 q0 -66 68 -70 l52 0 q68 4 68 70 l0 122 z" fill="url(#mx-lounge-leather)"/>
  <path d="M300 556 l0 -108 q0 -50 52 -54 l44 0 q52 4 52 54 l0 108 z" fill="#3b2f22"/>
  <path d="M396 442 q52 4 52 54 l0 108 l-40 0 l0 -108 q0 -44 -12 -54 z" fill="#553d26" opacity="0.55"/>
  <path d="M352 442 q-52 4 -52 54 l0 108 l30 0 l0 -108 q0 -44 22 -54 z" fill="#1e150d" opacity="0.45"/>
  <g fill="none" stroke="#241a10" stroke-width="2.4" opacity="0.8">
    <path d="M316 470 l124 0"/><path d="M316 502 l124 0"/><path d="M356 442 l0 114"/><path d="M400 442 l0 114"/>
  </g>
  <g fill="none" stroke="#6d5030" stroke-width="0.9" opacity="0.4">
    <path d="M316 473 l124 0"/><path d="M316 505 l124 0"/><path d="M358 442 l0 114"/><path d="M402 442 l0 114"/>
  </g>
  <path d="M312 556 q0 -78 62 -84 q64 6 64 84 z" fill="#26211b"/>
  <path d="M336 486 q40 -24 78 0 l-6 70 l-66 0 z" fill="#3a342a"/>
  <path d="M376 478 q24 2 38 8 l-6 70 l-32 0 z" fill="#484137" opacity="0.7"/>
  <path d="M362 484 l26 0 l-4 34 l-18 0 z" fill="#ded0a6"/>
  <path d="M376 484 l12 0 l-4 34 l-8 0 z" fill="#f3ead1" opacity="0.7"/>
  <path d="M372 486 l8 0 l-2 30 l-6 0 z" fill="#5d1f18"/>
  <path d="M376 486 l4 0 l-2 30 l-3 0 z" fill="#84332a" opacity="0.7"/>
  <ellipse cx="375" cy="440" rx="27" ry="30" fill="#a8977b"/>
  <ellipse cx="384" cy="438" rx="16" ry="23" fill="#c3b08d" opacity="0.6"/>
  <path d="M348 434 q27 -28 54 0 q4 -30 -27 -30 q-31 0 -27 30 z" fill="#5a4a3a"/>
  <path d="M382 405 q20 4 20 29 l-9 -3 q0 -19 -14 -23 z" fill="#7b6752" opacity="0.6"/>
  <path d="M360 440 l11 0 M380 440 l11 0" stroke="#4a3f31" stroke-width="2.6" stroke-linecap="round" fill="none"/>
  <path d="M358 430 l13 -2 M380 428 l13 2" stroke="#8d7c62" stroke-width="2" stroke-linecap="round" opacity="0.8" fill="none"/>
  <path d="M366 456 l18 0" stroke="#6b5a45" stroke-width="2.6" stroke-linecap="round" fill="none"/>
  <path d="M364 466 l22 0 l2 12 l-26 0 z" fill="#a89073"/>
  <!-- hands on the arms, a big man's hands -->
  <rect x="272" y="486" width="42" height="60" rx="16" fill="#3d2b1b"/>
  <rect x="436" y="486" width="42" height="60" rx="16" fill="#5a4028"/>
  <rect x="466" y="486" width="12" height="60" rx="6" fill="#75542f" opacity="0.6"/>
  <path d="M276 494 q18 -10 34 0 q6 10 -4 16 q-20 6 -34 -2 z" fill="#95836a"/>
  <path d="M440 494 q18 -10 34 0 q6 10 -4 16 q-20 6 -34 -2 z" fill="#b39d7d"/>
  <path d="M282 502 l24 2 M282 508 l24 2 M446 502 l24 2 M446 508 l24 2" stroke="#8c7a60" stroke-width="1.3" stroke-linecap="round" fill="none"/>
  <path d="M330 556 q46 -14 92 0 l0 42 l-92 0 z" fill="#26211b"/>
  <path d="M386 552 q22 0 36 4 l0 42 l-36 0 z" fill="#332d25" opacity="0.7"/>
  <ellipse cx="348" cy="600" rx="22" ry="9" fill="#0f0c0a"/>
  <ellipse cx="404" cy="600" rx="22" ry="9" fill="#161310"/>
  <ellipse cx="410" cy="597" rx="11" ry="3" fill="#3a332b" opacity="0.5"/>
</g>

<!-- a low table with the only lamp still burning at this end -->
<g>
  <rect class="fx-glow" x="700" y="380" width="230" height="200" fill="url(#mx-lounge-lamp)"/>
  <ellipse cx="784" cy="560" rx="70" ry="14" fill="#080605" opacity="0.4"/>
  <ellipse cx="792" cy="452" rx="66" ry="18" fill="#3d2b1b"/>
  <ellipse cx="792" cy="446" rx="66" ry="18" fill="#5c4229"/>
  <path d="M792 428 q66 0 66 18 q0 7 -18 12 q12 -9 8 -17 q-10 -13 -56 -13 z" fill="#8a6539" opacity="0.6"/>
  <path d="M726 446 q0 -12 26 -16 q-16 6 -16 16 q0 10 18 14 q-28 -4 -28 -14 z" fill="#241a10" opacity="0.6"/>
  <rect x="784" y="460" width="16" height="72" fill="#3b2f22"/>
  <rect x="795" y="460" width="5" height="72" fill="#6d5030" opacity="0.7"/>
  <ellipse cx="792" cy="536" rx="34" ry="10" fill="#33271a"/>
  <ellipse cx="798" cy="534" rx="20" ry="4" fill="#5d4728" opacity="0.6"/>
  <rect x="786" y="392" width="10" height="50" fill="#6b5326"/>
  <path d="M756 356 q36 -22 72 0 l-8 34 q-28 10 -56 0 z" fill="#8a5a24"/>
  <path d="M756 356 q36 -22 72 0 l-2 6 q-34 -16 -68 0 z" fill="#b3763a"/>
  <path d="M820 360 q8 3 8 -4 l-8 34 q-5 3 -8 2 z" fill="#d99a53" opacity="0.5"/>
  <path d="M760 362 q-5 2 -4 -6 l8 34 q4 2 6 1 z" fill="#4f2f10" opacity="0.5"/>
  <ellipse cx="792" cy="390" rx="29" ry="8" fill="#ffe9bd" opacity="0.9"/>
  <g class="fx-glow" style="--d:-1.2s"><ellipse cx="792" cy="392" rx="30" ry="9" fill="#ffd98a" opacity="0.7"/></g>
  <g class="fx-glow" style="--d:-2.8s"><ellipse cx="792" cy="404" rx="86" ry="30" fill="#d9a441" opacity="0.12"/></g>
  <path d="M728 446 l40 -4 l2 8 l-40 4 z" fill="#241a10" opacity="0.4"/>
  <path d="M726 440 l40 -4 l2 12 l-40 4 z" fill="#ded0a6"/>
  <path d="M732 432 l38 -4 l1 8 l-38 4 z" fill="#f6efdc"/>
</g>
<rect class="fx-glow" style="--d:-4s" width="1000" height="620" fill="url(#mx-lounge-glow)"/>

<!-- CALLAHAN'S CAMEL OVERCOAT, on the brass hook by the door -->
<g>
  <path d="M846 220 q-34 42 -30 102 l10 152 l-18 -4 l-10 -148 q-4 -62 30 -104 z" fill="#0d0a06" opacity="0.45"/>
  <rect x="856" y="196" width="66" height="12" rx="4" fill="url(#mx-lounge-brass)"/>
  <circle cx="870" cy="212" r="7" fill="#9b7a3f"/><circle cx="908" cy="212" r="7" fill="#9b7a3f"/>
  <circle cx="868" cy="210" r="2.6" fill="#e8dcbb" opacity="0.7"/><circle cx="906" cy="210" r="2.6" fill="#e8dcbb" opacity="0.7"/>
  <path d="M868 214 q-40 40 -36 106 l10 154 q46 16 92 0 l10 -154 q4 -66 -36 -106 z" fill="url(#mx-lounge-camel)"/>
  <path d="M868 214 q18 32 22 68 q6 -38 26 -68 z" fill="#c6ac7d"/>
  <path d="M894 214 q12 26 22 46 l-8 4 q-10 -22 -20 -44 z" fill="#dcc496" opacity="0.5"/>
  <path d="M890 216 l0 254" stroke="#5b4a2f" stroke-width="4"/>
  <path d="M893 216 l0 254" stroke="#c4a978" stroke-width="1.2" opacity="0.5"/>
  <g stroke="#61502f" stroke-width="2.4" opacity="0.5" fill="none">
    <path d="M852 280 q10 60 8 118"/><path d="M932 288 q-8 56 -6 112"/><path d="M912 250 q10 74 8 150"/>
  </g>
  <g stroke="#c9b184" stroke-width="1.1" opacity="0.35" fill="none">
    <path d="M856 282 q10 60 8 118"/><path d="M936 290 q-8 56 -6 112"/>
  </g>
  <g fill="#6b5836">
    <circle cx="894" cy="316" r="5"/><circle cx="894" cy="360" r="5"/><circle cx="894" cy="404" r="5"/>
  </g>
  <g fill="#c4a978" opacity="0.6">
    <circle cx="893" cy="314.4" r="2"/><circle cx="893" cy="358.4" r="2"/><circle cx="893" cy="402.4" r="2"/>
  </g>
  <path d="M840 330 q-16 30 -12 70 l6 40 l16 -2 l-6 -46 q-2 -36 6 -60 z" fill="#7e6743"/>
  <path d="M940 330 q16 30 12 70 l-6 40 l-16 -2 l6 -46 q2 -36 -6 -60 z" fill="#a68a5c"/>
  <path d="M832 460 q46 16 92 0 l-1 14 q-46 16 -90 0 z" fill="#0f0c08" opacity="0.45"/>
  <!-- the deep inside pocket, and the red-tabbed folder riding in it -->
  <path d="M902 336 l44 -6 l4 20 l-44 8 z" fill="#6f5c3c"/>
  <path d="M902 336 l44 -6 l0.6 4 l-44 6 z" fill="#22190f" opacity="0.5"/>
  <path d="M906 328 l38 -6 l2 16 l-38 6 z" fill="#ded0a6"/>
  <path d="M906 328 l38 -6 l1 5 l-38 6 z" fill="#f8f2e0"/>
  <path d="M936 322 l10 -2 l2 9 l-10 2 z" fill="#a8352a"/>
  <path d="M936 322 l10 -2 l0.6 3 l-10 2 z" fill="#d8655a" opacity="0.7"/>
  <path d="M910 334 l28 -4 M911 339 l26 -4" stroke="#8d7c62" stroke-width="1.2" opacity="0.8" fill="none"/>
  <!-- the cold still coming off it -->
  <g stroke="#8fa4c0" stroke-width="2" opacity="0.16" fill="none">
    <path d="M846 250 q-16 40 -6 84"/><path d="M944 260 q16 40 6 80"/>
  </g>
  <!-- the door to the rest of the train -->
  <path d="M960 150 L1000 150 L1000 470 L960 470 Z" fill="#241b12"/>
  <path d="M960 150 L968 150 L968 470 L960 470 Z" fill="#4a3a24" opacity="0.7"/>
  <rect x="966" y="176" width="30" height="120" fill="#1b2436"/>
  <rect x="966" y="176" width="30" height="120" fill="#8fa4c0" opacity="0.1"/>
  <rect x="966" y="176" width="30" height="12" fill="#0e131d" opacity="0.5"/>
  <rect x="966" y="278" width="30" height="18" fill="#d7e2ec" opacity="0.18"/>
</g>

<!-- brass ashtray stand beside the deep chair -->
<g>
  <ellipse cx="506" cy="592" rx="34" ry="9" fill="#080605" opacity="0.4"/>
  <ellipse cx="512" cy="586" rx="26" ry="9" fill="#33271a"/>
  <ellipse cx="516" cy="584" rx="15" ry="3.4" fill="#5d4728" opacity="0.6"/>
  <rect x="506" y="486" width="12" height="100" fill="#6b5326"/>
  <rect x="514" y="486" width="4" height="100" fill="#c8a75c" opacity="0.6"/>
  <rect x="506" y="486" width="3" height="100" fill="#3d2d12" opacity="0.7"/>
  <ellipse cx="512" cy="484" rx="26" ry="9" fill="#8a6c30"/>
  <ellipse cx="514" cy="482" rx="18" ry="4.4" fill="#d6b468" opacity="0.6"/>
  <ellipse cx="512" cy="481" rx="18" ry="6" fill="#4a3524"/>
  <path d="M500 478 l16 -3 l0 5 l-16 3 z" fill="#cfc6b2"/>
</g>

<!-- foreground: the back of another club chair, close to the eye -->
<path d="M-10 620 L246 620 L236 486 q-130 -34 -256 -4 Z" fill="#171009"/>
<path d="M-10 500 q126 -30 244 -4 l4 42 q-124 -28 -248 2 z" fill="#241a11" opacity="0.7"/>
<path d="M-10 496 q126 -30 244 -4" fill="none" stroke="#3b2f22" stroke-width="6"/>
<path d="M-10 492 q126 -30 244 -4" fill="none" stroke="#6d5030" stroke-width="1.2" opacity="0.45"/>
<g fill="#2b1f14">
  <circle cx="44" cy="520" r="5"/><circle cx="110" cy="510" r="5"/><circle cx="176" cy="516" r="5"/>
</g>
<g fill="#5e452b" opacity="0.5">
  <circle cx="43" cy="518.6" r="2"/><circle cx="109" cy="508.6" r="2"/><circle cx="175" cy="514.6" r="2"/>
</g>
<path d="M-10 620 L246 620 L244 596 q-130 -16 -256 0 Z" fill="#241b12"/>
<path d="M-10 620 L246 620 L245 604 q-130 -14 -255 0 Z" fill="#120c07" opacity="0.5"/>

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
  <linearGradient id="mx-vest-trunk" x1="0" y1="0" x2="1" y2="0.12">
    <stop offset="0" stop-color="#6b4d2d"/><stop offset="0.3" stop-color="#543c25"/>
    <stop offset="0.72" stop-color="#3a2b1c"/><stop offset="1" stop-color="#241a11"/>
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
  <radialGradient id="mx-vest-pantry" cx="0.36" cy="0.14" r="0.86">
    <stop offset="0" stop-color="#463522"/><stop offset="0.38" stop-color="#302518"/>
    <stop offset="0.74" stop-color="#1f1810"/><stop offset="1" stop-color="#140f0a"/>
  </radialGradient>
  <linearGradient id="mx-vest-counter" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#8a6538"/><stop offset="0.3" stop-color="#6a4a2a"/><stop offset="1" stop-color="#3f2d1b"/>
  </linearGradient>
  <linearGradient id="mx-vest-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a3718"/><stop offset="0.22" stop-color="#d0ac60"/><stop offset="0.5" stop-color="#8a6c30"/>
    <stop offset="0.72" stop-color="#eed9a0"/><stop offset="1" stop-color="#3d2d12"/>
  </linearGradient>
  <linearGradient id="mx-vest-siphon" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#39422c"/><stop offset="0.3" stop-color="#69784b"/>
    <stop offset="0.55" stop-color="#4d5836"/><stop offset="1" stop-color="#2b3220"/>
  </linearGradient>
  <linearGradient id="mx-vest-lino" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#332619"/><stop offset="0.5" stop-color="#241b12"/><stop offset="1" stop-color="#170f0a"/>
  </linearGradient>
  <linearGradient id="mx-vest-case" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#443b31"/><stop offset="0.16" stop-color="#3a322a"/><stop offset="1" stop-color="#221d19"/>
  </linearGradient>
  <radialGradient id="mx-vest-vault" cx="0.44" cy="0.12" r="0.9">
    <stop offset="0" stop-color="#2c3a50"/><stop offset="0.44" stop-color="#1e2837"/>
    <stop offset="0.8" stop-color="#141a26"/><stop offset="1" stop-color="#0d1119"/>
  </radialGradient>
  <filter id="mx-vest-soft" x="-30%" y="-160%" width="160%" height="420%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
</defs>

<rect width="1000" height="620" fill="url(#mx-vest-wall)"/>

<!-- the pantry: ceiling, wall, worn linoleum -->
<rect x="0" y="0" width="540" height="620" fill="url(#mx-vest-pantry)"/>
<rect x="0" y="0" width="540" height="52" fill="#150f09"/>
<path d="M60 52 L340 52 L300 8 L110 10 Z" fill="#d9a441" opacity="0.07"/>
<rect x="0" y="52" width="540" height="8" fill="#3b2f22"/>
<rect x="0" y="52" width="540" height="2.4" fill="#7a5f38" opacity="0.7"/>
<rect x="0" y="59" width="540" height="3" fill="#0d0a06" opacity="0.6"/>
<path d="M0 92 q270 14 540 4 M0 156 q270 12 540 2 M0 228 q270 10 540 2 M0 300 q270 8 540 0 M0 372 q270 6 540 0" stroke="#5a4629" stroke-width="1" fill="none" opacity="0.2"/>
<rect x="0" y="470" width="540" height="12" fill="#3b2f22"/>
<rect x="0" y="470" width="540" height="3" fill="#7a5f38" opacity="0.7"/>
<rect x="0" y="482" width="540" height="138" fill="url(#mx-vest-lino)"/>
<path d="M0 524 L540 524 M0 566 L540 566 M0 604 L540 604" stroke="#33271a" stroke-width="3" fill="none"/>
<path d="M0 521 L540 521 M0 563 L540 563" stroke="#5f4a2c" stroke-width="0.9" fill="none" opacity="0.35"/>
<g>
  <rect x="184" y="0" width="12" height="26" fill="#6b5326"/>
  <rect x="184" y="0" width="4" height="26" fill="#c8a75c" opacity="0.6"/>
  <path d="M150 26 q40 -20 80 0 l-8 26 q-32 10 -64 0 z" fill="#8a6c30"/>
  <path d="M150 26 q40 -20 80 0 l-2 6 q-38 -16 -76 0 z" fill="#c8a75c" opacity="0.7"/>
  <path d="M222 32 q8 4 8 -6 l-8 26 q-6 4 -8 3 z" fill="#f0dca4" opacity="0.4"/>
  <ellipse cx="190" cy="52" rx="29" ry="8" fill="#ffe9bd" opacity="0.85"/>
  <g class="fx-glow"><ellipse cx="190" cy="54" rx="30" ry="9" fill="#ffd98a" opacity="0.75"/></g>
  <rect class="fx-glow" style="--d:-2.2s" x="20" y="30" width="340" height="330" fill="url(#mx-vest-lamp)"/>
</g>
<rect width="1000" height="620" fill="url(#mx-vest-glow)"/>

<!-- ranked siphons on their shelves -->
<g>
  <rect x="30" y="120" width="280" height="12" fill="#4a3524"/>
  <rect x="30" y="120" width="280" height="2.6" fill="#8a6a3c" opacity="0.7"/>
  <rect x="30" y="130" width="280" height="10" fill="#0e0a06" opacity="0.45"/>
  <rect x="30" y="216" width="280" height="12" fill="#4a3524"/>
  <rect x="30" y="216" width="280" height="2.6" fill="#8a6a3c" opacity="0.7"/>
  <rect x="30" y="226" width="280" height="10" fill="#0e0a06" opacity="0.45"/>
  <rect x="30" y="300" width="280" height="12" fill="#4a3524"/>
  <rect x="30" y="300" width="280" height="2.6" fill="#8a6a3c" opacity="0.7"/>
  <rect x="30" y="310" width="280" height="10" fill="#0e0a06" opacity="0.45"/>
  <path d="M44 152 q12 -12 24 0 l3 64 l-30 0 z M92 152 q12 -12 24 0 l3 64 l-30 0 z M140 152 q12 -12 24 0 l3 64 l-30 0 z M188 152 q12 -12 24 0 l3 64 l-30 0 z M236 152 q12 -12 24 0 l3 64 l-30 0 z M284 152 q12 -12 24 0 l3 64 l-30 0 z" fill="url(#mx-vest-siphon)"/>
  <path d="M48 158 q8 -7 16 0 l1 24 l-18 0 z M96 158 q8 -7 16 0 l1 24 l-18 0 z M144 158 q8 -7 16 0 l1 24 l-18 0 z M192 158 q8 -7 16 0 l1 24 l-18 0 z M240 158 q8 -7 16 0 l1 24 l-18 0 z M288 158 q8 -7 16 0 l1 24 l-18 0 z" fill="#93a26c" opacity="0.6"/>
  <path d="M48 156 q3 -4 6 -4 l-2 62 l-6 0 z M96 156 q3 -4 6 -4 l-2 62 l-6 0 z M144 156 q3 -4 6 -4 l-2 62 l-6 0 z M192 156 q3 -4 6 -4 l-2 62 l-6 0 z M240 156 q3 -4 6 -4 l-2 62 l-6 0 z M288 156 q3 -4 6 -4 l-2 62 l-6 0 z" fill="#dff0c4" opacity="0.35"/>
  <path d="M64 154 q5 2 6 6 l2 56 l-6 0 z M112 154 q5 2 6 6 l2 56 l-6 0 z M160 154 q5 2 6 6 l2 56 l-6 0 z M208 154 q5 2 6 6 l2 56 l-6 0 z M256 154 q5 2 6 6 l2 56 l-6 0 z M304 154 q5 2 6 6 l2 56 l-6 0 z" fill="#1f2617" opacity="0.5"/>
  <g fill="url(#mx-vest-brass)">
    <rect x="50" y="138" width="12" height="16" rx="3"/><rect x="98" y="138" width="12" height="16" rx="3"/>
    <rect x="146" y="138" width="12" height="16" rx="3"/><rect x="194" y="138" width="12" height="16" rx="3"/>
    <rect x="242" y="138" width="12" height="16" rx="3"/><rect x="290" y="138" width="12" height="16" rx="3"/>
  </g>
  <path d="M62 142 l12 4 l-2 6 l-10 -4 z M110 142 l12 4 l-2 6 l-10 -4 z M158 142 l12 4 l-2 6 l-10 -4 z M206 142 l12 4 l-2 6 l-10 -4 z M254 142 l12 4 l-2 6 l-10 -4 z M302 142 l12 4 l-2 6 l-10 -4 z" fill="#c8a75c"/>
  <path d="M44 212 l30 0 l0 5 l-30 0 z M92 212 l30 0 l0 5 l-30 0 z M140 212 l30 0 l0 5 l-30 0 z M188 212 l30 0 l0 5 l-30 0 z M236 212 l30 0 l0 5 l-30 0 z M284 212 l30 0 l0 5 l-30 0 z" fill="#14180f" opacity="0.5"/>
  <!-- polished glasses in their rank, and folded linen -->
  <g fill="#efe8d2" opacity="0.8">
    <path d="M44 248 l20 0 l-3 52 l-14 0 z"/><path d="M74 248 l20 0 l-3 52 l-14 0 z"/>
    <path d="M104 248 l20 0 l-3 52 l-14 0 z"/><path d="M134 248 l20 0 l-3 52 l-14 0 z"/>
    <path d="M164 248 l20 0 l-3 52 l-14 0 z"/>
  </g>
  <path d="M46 248 l5 0 l-2 52 l-4 0 z M76 248 l5 0 l-2 52 l-4 0 z M106 248 l5 0 l-2 52 l-4 0 z M136 248 l5 0 l-2 52 l-4 0 z M166 248 l5 0 l-2 52 l-4 0 z" fill="#ffffff" opacity="0.5"/>
  <path d="M44 296 l18 0 l-0.6 4 l-17 0 z M74 296 l18 0 l-0.6 4 l-17 0 z M104 296 l18 0 l-0.6 4 l-17 0 z M134 296 l18 0 l-0.6 4 l-17 0 z M164 296 l18 0 l-0.6 4 l-17 0 z" fill="#7d7460" opacity="0.5"/>
  <g fill="#ded0a6">
    <rect x="208" y="262" width="46" height="16"/><rect x="208" y="280" width="46" height="16"/>
    <rect x="262" y="266" width="44" height="14"/><rect x="262" y="282" width="44" height="14"/>
  </g>
  <path d="M208 262 h46 v3 h-46 z M208 280 h46 v3 h-46 z M262 266 h44 v3 h-44 z M262 282 h44 v3 h-44 z" fill="#f8f2e0" opacity="0.7"/>
  <path d="M208 275 h46 v3 h-46 z M208 293 h46 v3 h-46 z M262 277 h44 v3 h-44 z" fill="#6f6857" opacity="0.5"/>
</g>

<!-- the call board: the drops that ring for every berth -->
<g>
  <rect x="356" y="116" width="160" height="164" rx="4" fill="#0d0a06" opacity="0.5"/>
  <rect x="352" y="112" width="160" height="164" rx="4" fill="#241b12"/>
  <rect x="352" y="112" width="160" height="4" rx="2" fill="#5f4a2c" opacity="0.7"/>
  <rect x="358" y="118" width="148" height="152" rx="3" fill="#150f0a"/>
  <g fill="none" stroke="#6b5326" stroke-width="2.4">
    <circle cx="386" cy="146" r="12"/><circle cx="422" cy="146" r="12"/><circle cx="458" cy="146" r="12"/>
    <circle cx="386" cy="186" r="12"/><circle cx="422" cy="186" r="12"/><circle cx="458" cy="186" r="12"/>
    <circle cx="386" cy="226" r="12"/><circle cx="422" cy="226" r="12"/><circle cx="458" cy="226" r="12"/>
  </g>
  <path d="M377 139 a12 12 0 0 1 10 -5 M413 139 a12 12 0 0 1 10 -5 M449 139 a12 12 0 0 1 10 -5 M377 179 a12 12 0 0 1 10 -5 M413 179 a12 12 0 0 1 10 -5 M449 179 a12 12 0 0 1 10 -5 M377 219 a12 12 0 0 1 10 -5 M413 219 a12 12 0 0 1 10 -5 M449 219 a12 12 0 0 1 10 -5" stroke="#d0ac60" stroke-width="1.1" fill="none" opacity="0.6"/>
  <g fill="#9b7a3f" opacity="0.6">
    <circle cx="386" cy="146" r="7"/><circle cx="458" cy="186" r="7"/><circle cx="422" cy="226" r="7"/>
  </g>
  <circle cx="422" cy="186" r="8" fill="#e8dcbb"/>
  <circle cx="420" cy="184" r="3" fill="#fffaea" opacity="0.85"/>
  <circle cx="486" cy="146" r="9" fill="#8a6c30"/>
  <circle cx="484" cy="144" r="3.4" fill="#e2c374" opacity="0.7"/>
  <rect x="358" y="248" width="148" height="8" fill="#33271a"/>
  <rect x="358" y="248" width="148" height="2" fill="#5f4a2c" opacity="0.6"/>
</g>

<!-- the shoe rack: thirty years of other people's shoes -->
<g>
  <rect x="30" y="360" width="280" height="10" fill="#4a3524"/>
  <rect x="30" y="360" width="280" height="2.4" fill="#8a6a3c" opacity="0.7"/>
  <rect x="30" y="368" width="280" height="9" fill="#0e0a06" opacity="0.4"/>
  <path d="M44 348 q18 -10 34 -2 l4 12 l-40 0 z M88 348 q18 -10 34 -2 l4 12 l-40 0 z" fill="#241b12"/>
  <path d="M140 348 q18 -10 34 -2 l4 12 l-40 0 z M184 348 q18 -10 34 -2 l4 12 l-40 0 z" fill="#33271a"/>
  <path d="M236 348 q18 -10 34 -2 l4 12 l-40 0 z M276 348 q14 -8 28 -2 l3 12 l-33 0 z" fill="#2b1f14"/>
  <path d="M50 344 q14 -6 26 0 l1 4 q-14 -6 -27 0 z M94 344 q14 -6 26 0 l1 4 q-14 -6 -27 0 z M146 344 q14 -6 26 0 l1 4 q-14 -6 -27 0 z M190 344 q14 -6 26 0 l1 4 q-14 -6 -27 0 z M242 344 q14 -6 26 0 l1 4 q-14 -6 -27 0 z" fill="#6d5a41" opacity="0.55"/>
  <path d="M52 370 l30 0 l0 8 l-30 0 z M148 370 l30 0 l0 8 l-30 0 z M244 370 l30 0 l0 8 l-30 0 z" fill="#4a3524" opacity="0.7"/>
</g>

<!-- ELIAS POOLE, polishing glasses that are already clean -->
<g>
  <path d="M120 244 q34 -18 68 0 l10 132 l-88 0 z" fill="#1f252e"/>
  <path d="M154 238 q22 0 34 6 l10 132 l-44 0 z" fill="#2b333e" opacity="0.8"/>
  <path d="M138 250 q16 -8 32 0 l-2 30 l-28 0 z" fill="#ded0a6"/>
  <path d="M154 246 q10 1 16 4 l-2 30 l-14 0 z" fill="#f3ead1" opacity="0.7"/>
  <path d="M150 252 l8 0 l-2 26 l-6 0 z" fill="#2b1f14"/>
  <g fill="#c8a75c">
    <circle cx="154" cy="296" r="3"/><circle cx="154" cy="314" r="3"/><circle cx="154" cy="332" r="3"/>
  </g>
  <path d="M120 256 l-16 74 l16 6 l16 -70 z" fill="#1c222a"/>
  <path d="M188 256 l16 74 l-16 6 l-16 -70 z" fill="#2c343f"/>
  <ellipse cx="154" cy="216" rx="21" ry="24" fill="#6b4f3a"/>
  <ellipse cx="161" cy="215" rx="12" ry="18" fill="#846043" opacity="0.6"/>
  <path d="M133 212 q21 -24 42 0 q3 -25 -21 -25 q-24 0 -21 25 z" fill="#3a332c"/>
  <path d="M158 187 q17 3 17 25 l-7 -2 q0 -18 -12 -20 z" fill="#544c42" opacity="0.6"/>
  <path d="M131 210 q-4 8 -1 16 l5 -3 q-3 -7 -1 -13 z" fill="#8e8e88" opacity="0.7"/>
  <path d="M177 210 q4 8 1 16 l-5 -3 q3 -7 1 -13 z" fill="#a3a39c" opacity="0.75"/>
  <path d="M144 216 l7 0 M158 216 l7 0" stroke="#3a2a22" stroke-width="2.1" stroke-linecap="round" fill="none"/>
  <path d="M148 230 l12 0" stroke="#4a3529" stroke-width="2" stroke-linecap="round" fill="none"/>
  <path d="M142 240 l24 0 l2 8 l-28 0 z" fill="#f0e7ce"/>
  <!-- his hands: the glass and the cloth -->
  <path d="M104 330 q16 -10 30 -2 q6 9 -3 15 q-18 6 -30 -3 z" fill="#634733"/>
  <path d="M176 326 q16 -10 30 -2 q6 9 -3 15 q-18 6 -30 -3 z" fill="#7a5a41"/>
  <path d="M126 300 l24 0 l-4 40 l-16 0 z" fill="#efe8d2" opacity="0.85"/>
  <path d="M128 300 l6 0 l-2 40 l-4 0 z" fill="#ffffff" opacity="0.5"/>
  <ellipse cx="138" cy="300" rx="12" ry="4" fill="#f4ecd6" opacity="0.9"/>
  <path d="M160 320 q22 -12 34 4 q-12 20 -34 10 z" fill="#f0e7ce"/>
  <path d="M166 326 q14 -6 22 4" stroke="#cfc6b2" stroke-width="1.4" opacity="0.9" fill="none"/>
</g>

<!-- the pantry counter, and THE CALL BOOK open on it -->
<g>
  <path d="M0 392 L500 392 L520 414 L0 414 Z" fill="url(#mx-vest-counter)"/>
  <path d="M0 392 L500 392 L506 398 L0 398 Z" fill="#9b7440"/>
  <path d="M0 392 L500 392 L502 394.6 L0 394.6 Z" fill="#d5ab68" opacity="0.5"/>
  <path d="M0 410 L516 410 L520 414 L0 414 Z" fill="#150f08" opacity="0.6"/>
  <rect x="0" y="414" width="512" height="70" fill="#2b2116"/>
  <path d="M30 424 h120 v48 h-120 z M170 424 h120 v48 h-120 z M310 424 h120 v48 h-120 z" fill="none" stroke="#170f08" stroke-width="3.4"/>
  <path d="M31 425 h120 v48 h-120 z M171 425 h120 v48 h-120 z M311 425 h120 v48 h-120 z" fill="none" stroke="#54402a" stroke-width="1.2"/>
  <!-- standing orders, in the porter's copperplate -->
  <path d="M170 410 L330 410 L336 416 L164 416 Z" fill="#160f09" opacity="0.45"/>
  <path d="M176 386 L316 386 L332 410 L164 410 Z" fill="#ece2c6"/>
  <path d="M176 386 L316 386 L318 390 L174 390 Z" fill="#fbf6e6"/>
  <path d="M246 386 L248 410" stroke="#a99d83" stroke-width="2"/>
  <g stroke="#4a3f31" stroke-width="1.5" opacity="0.85">
    <path d="M186 391 q10 4 20 0 q10 -4 20 0 q8 4 16 0"/>
    <path d="M182 397 q10 4 20 0 q10 -4 20 0 q8 4 18 0"/>
    <path d="M178 403 q10 4 20 0 q10 -4 20 0 q8 4 14 0"/>
    <path d="M258 391 q10 4 20 0 q10 -4 20 0 q8 4 16 0"/>
    <path d="M258 397 q10 4 20 0 q10 -4 20 0 q8 4 18 0"/>
    <path d="M258 403 q10 4 20 0 q10 -4 18 0"/>
  </g>
  <path d="M300 380 L340 374 L344 388 L304 394 Z" fill="#a8352a" opacity="0.8"/>
  <path d="M300 380 L340 374 L340.6 377 L300.6 383 Z" fill="#d8655a" opacity="0.6"/>
  <path d="M336 396 L392 388 L394 394 L338 402 Z" fill="#4a3524"/>
  <path d="M336 396 L392 388 L392.4 390 L336.4 398 Z" fill="#8a6a3c" opacity="0.6"/>
  <!-- a tray of glasses waiting to go up the corridor -->
  <ellipse cx="440" cy="396" rx="54" ry="10" fill="#150f08" opacity="0.4"/>
  <ellipse cx="440" cy="392" rx="52" ry="12" fill="#7d6129"/>
  <ellipse cx="440" cy="389" rx="44" ry="9" fill="#b28c3f"/>
  <ellipse cx="432" cy="387" rx="26" ry="4" fill="#e0c47e" opacity="0.5"/>
  <g fill="#efe8d2" opacity="0.85">
    <path d="M414 362 l18 0 l-3 26 l-12 0 z"/><path d="M440 362 l18 0 l-3 26 l-12 0 z"/>
    <path d="M466 366 l16 0 l-3 22 l-10 0 z"/>
  </g>
  <path d="M416 362 l5 0 l-2 26 l-3 0 z M442 362 l5 0 l-2 26 l-3 0 z M468 366 l5 0 l-2 22 l-3 0 z" fill="#ffffff" opacity="0.5"/>
</g>

<!-- the vestibule floor: worn plate, a mat, the trap under it -->
<g>
  <path d="M0 484 L512 484 L512 620 L0 620 Z" fill="#1a140d"/>
  <path d="M40 512 L470 512 L470 596 L40 596 Z" fill="#2b2118"/>
  <path d="M40 512 L470 512 L470 518 L40 518 Z" fill="#42331f" opacity="0.7"/>
  <path d="M40 540 L470 540 M40 568 L470 568 M154 512 L154 596 M268 512 L268 596 M382 512 L382 596" stroke="#3b2f22" stroke-width="3" fill="none"/>
  <path d="M40 537 L470 537 M40 565 L470 565" stroke="#5f4a2c" stroke-width="0.9" fill="none" opacity="0.4"/>
  <path d="M60 592 L300 592 L316 620 L44 620 Z" fill="#3a2a1d"/>
  <path d="M60 592 L300 592 L301 596 L59 596 Z" fill="#6b4d2d" opacity="0.6"/>
  <path d="M88 600 L286 600 L294 614 L80 614 Z" fill="none" stroke="#5a4128" stroke-width="3"/>
</g>

<!-- THROUGH THE GANGWAY: the baggage car, cold as a vault -->
<g>
  <rect x="540" y="40" width="460" height="560" fill="url(#mx-vest-vault)"/>
  <rect x="540" y="40" width="460" height="16" fill="#1b140d"/>
  <!-- roof lamps, cold and few -->
  <rect x="740" y="56" width="8" height="20" fill="#3b2f22"/>
  <path d="M722 76 q22 -12 44 0 l-6 18 q-16 6 -32 0 z" fill="#4a4a44"/>
  <path d="M722 76 q22 -12 44 0 l-2 5 q-20 -10 -40 0 z" fill="#6f7070" opacity="0.7"/>
  <ellipse cx="744" cy="94" rx="17" ry="5" fill="#e2edf5" opacity="0.75"/>
  <g class="fx-glow" style="--d:-3.3s"><ellipse cx="744" cy="96" rx="18" ry="6" fill="#c6d2e0" opacity="0.6"/></g>
  <rect class="fx-glow" style="--d:-4.5s" x="620" y="60" width="260" height="300" fill="url(#mx-vest-icelamp)"/>
  <rect x="928" y="60" width="6" height="16" fill="#3b2f22"/>
  <ellipse cx="931" cy="82" rx="12" ry="5" fill="#c6d2e0" opacity="0.4"/>
  <!-- the far wall of trunks, stacked to the roof lamps -->
  <g fill="url(#mx-vest-case)">
    <rect x="560" y="150" width="96" height="70"/><rect x="662" y="140" width="110" height="80"/>
    <rect x="778" y="156" width="88" height="64"/><rect x="872" y="146" width="106" height="74"/>
    <rect x="560" y="226" width="120" height="86"/><rect x="686" y="234" width="94" height="78"/>
    <rect x="786" y="228" width="112" height="84"/><rect x="904" y="240" width="80" height="72"/>
    <rect x="560" y="318" width="104" height="76"/><rect x="920" y="318" width="70" height="76"/>
  </g>
  <path d="M560 150 h96 v3 h-96 z M662 140 h110 v3 h-110 z M778 156 h88 v3 h-88 z M872 146 h106 v3 h-106 z M560 226 h120 v3 h-120 z M686 234 h94 v3 h-94 z M786 228 h112 v3 h-112 z M904 240 h80 v3 h-80 z M560 318 h104 v3 h-104 z M920 318 h70 v3 h-70 z" fill="#7c8ea0" opacity="0.3"/>
  <path d="M646 150 h10 v70 h-10 z M760 140 h12 v80 h-12 z M854 156 h12 v64 h-12 z M964 146 h14 v74 h-14 z M666 226 h14 v86 h-14 z M766 234 h14 v78 h-14 z M884 228 h14 v84 h-14 z M970 240 h14 v72 h-14 z" fill="#0f1219" opacity="0.5"/>
  <path d="M560 212 h96 v8 h-96 z M662 210 h110 v10 h-110 z M778 210 h88 v10 h-88 z M872 208 h106 v12 h-106 z M560 300 h120 v12 h-120 z M686 300 h94 v12 h-94 z M786 300 h112 v12 h-112 z M904 300 h80 v12 h-80 z" fill="#080a0e" opacity="0.45"/>
  <g stroke="#6b5326" stroke-width="3" opacity="0.65">
    <path d="M596 150 L596 220"/><path d="M700 140 L700 220"/><path d="M818 156 L818 220"/>
    <path d="M916 146 L916 220"/><path d="M600 226 L600 312"/><path d="M726 234 L726 312"/>
    <path d="M830 228 L830 312"/><path d="M944 240 L944 312"/>
  </g>
  <path d="M594 150 L594 220 M698 140 L698 220 M816 156 L816 220 M598 226 L598 312 M724 234 L724 312 M828 228 L828 312" stroke="#c0a05a" stroke-width="0.9" fill="none" opacity="0.35"/>
  <g fill="url(#mx-vest-brass)">
    <rect x="586" y="184" width="20" height="10"/><rect x="690" y="176" width="20" height="10"/>
    <rect x="808" y="188" width="20" height="10"/><rect x="590" y="266" width="20" height="10"/>
    <rect x="716" y="272" width="20" height="10"/><rect x="820" y="266" width="20" height="10"/>
  </g>
  <!-- frost bloom on the lids nearest the roof lights -->
  <path d="M662 140 h110 v10 h-110 z M872 146 h106 v9 h-106 z" fill="#dbe6f0" opacity="0.14"/>
  <rect x="540" y="394" width="460" height="10" fill="#1b140d"/>
  <rect x="540" y="394" width="460" height="2.4" fill="#3a3020" opacity="0.6"/>
  <rect x="540" y="404" width="460" height="216" fill="#161c26"/>
  <path d="M540 404 h460 v6 h-460 z" fill="#2b3646" opacity="0.5"/>
</g>

<!-- KEENE'S WARDROBE TRUNK, forced with the fire iron -->
<g>
  <ellipse cx="770" cy="562" rx="180" ry="22" fill="#05070b" opacity="0.5" filter="url(#mx-vest-soft)"/>
  <!-- the lid, swung open toward the door -->
  <path d="M886 322 L962 344 L962 566 L886 552 Z" fill="#3b2f22"/>
  <path d="M886 322 L962 344 L962 356 L886 334 Z" fill="#75593a" opacity="0.6"/>
  <path d="M894 336 L954 354 L954 552 L894 540 Z" fill="#1d150d"/>
  <g fill="url(#mx-vest-brass)">
    <path d="M886 356 L962 376 L962 388 L886 368 Z"/><path d="M886 492 L962 508 L962 520 L886 504 Z"/>
  </g>
  <!-- the body -->
  <rect x="614" y="330" width="278" height="230" fill="url(#mx-vest-trunk)"/>
  <rect x="614" y="330" width="278" height="16" fill="#8a6538"/>
  <rect x="614" y="330" width="278" height="3.4" fill="#c8a163" opacity="0.6"/>
  <rect x="614" y="544" width="278" height="16" fill="#2e2116"/>
  <rect x="614" y="541" width="278" height="4" fill="#120c07" opacity="0.6"/>
  <path d="M618 366 q136 8 270 2 M618 420 q136 6 270 2 M618 474 q136 6 270 0 M618 526 q136 4 270 0" stroke="#8a6a3c" stroke-width="1" fill="none" opacity="0.16"/>
  <g fill="url(#mx-vest-brass)">
    <rect x="610" y="362" width="286" height="12"/><rect x="610" y="500" width="286" height="12"/>
    <rect x="606" y="330" width="20" height="22"/><rect x="880" y="330" width="20" height="22"/>
    <rect x="606" y="538" width="20" height="22"/><rect x="880" y="538" width="20" height="22"/>
  </g>
  <rect x="610" y="374" width="286" height="4" fill="#120c07" opacity="0.45"/>
  <rect x="610" y="512" width="286" height="4" fill="#120c07" opacity="0.45"/>
  <rect x="614" y="330" width="80" height="230" fill="#563d25"/>
  <rect x="614" y="330" width="14" height="230" fill="#78552f" opacity="0.6"/>
  <g fill="#2e2317">
    <rect x="626" y="346" width="56" height="86"/><rect x="626" y="452" width="56" height="86"/>
  </g>
  <path d="M626 346 h56 v4 h-56 z M626 452 h56 v4 h-56 z" fill="#0d0906" opacity="0.6"/>
  <path d="M626 428 h56 v4 h-56 z M626 534 h56 v4 h-56 z" fill="#6b5030" opacity="0.4"/>
  <!-- the interior, and the famous red tabs, alphabetical -->
  <rect x="700" y="348" width="176" height="196" fill="#150f0a"/>
  <rect x="700" y="348" width="176" height="10" fill="#33271a"/>
  <rect x="700" y="348" width="176" height="16" fill="#000000" opacity="0.4"/>
  <g fill="#ded0a6">
    <rect x="710" y="382" width="12" height="146"/><rect x="724" y="380" width="11" height="148"/>
    <rect x="737" y="382" width="12" height="146"/><rect x="751" y="379" width="11" height="149"/>
    <rect x="778" y="381" width="12" height="147"/><rect x="792" y="380" width="11" height="148"/>
    <rect x="805" y="382" width="12" height="146"/><rect x="819" y="379" width="11" height="149"/>
    <rect x="832" y="381" width="12" height="147"/><rect x="846" y="383" width="11" height="145"/>
  </g>
  <path d="M710 382 h3 v146 h-3 z M724 380 h3 v148 h-3 z M737 382 h3 v146 h-3 z M751 379 h3 v149 h-3 z M778 381 h3 v147 h-3 z M792 380 h3 v148 h-3 z M805 382 h3 v146 h-3 z M819 379 h3 v149 h-3 z M832 381 h3 v147 h-3 z M846 383 h3 v145 h-3 z" fill="#f8f2e0" opacity="0.55"/>
  <path d="M719 382 h3 v146 h-3 z M732 380 h3 v148 h-3 z M746 382 h3 v146 h-3 z M759 379 h3 v149 h-3 z M787 381 h3 v147 h-3 z M800 380 h3 v148 h-3 z M814 382 h3 v146 h-3 z M827 379 h3 v149 h-3 z M841 381 h3 v147 h-3 z" fill="#7d7460" opacity="0.5"/>
  <g fill="#a8352a">
    <rect x="710" y="382" width="12" height="12"/><rect x="724" y="380" width="11" height="12"/>
    <rect x="737" y="382" width="12" height="12"/><rect x="751" y="379" width="11" height="12"/>
    <rect x="778" y="381" width="12" height="12"/><rect x="792" y="380" width="11" height="12"/>
    <rect x="805" y="382" width="12" height="12"/><rect x="819" y="379" width="11" height="12"/>
    <rect x="832" y="381" width="12" height="12"/><rect x="846" y="383" width="11" height="12"/>
  </g>
  <path d="M710 382 h12 v3 h-12 z M724 380 h11 v3 h-11 z M737 382 h12 v3 h-12 z M751 379 h11 v3 h-11 z M778 381 h12 v3 h-12 z M792 380 h11 v3 h-11 z M805 382 h12 v3 h-12 z M819 379 h11 v3 h-11 z M832 381 h12 v3 h-12 z M846 383 h11 v3 h-11 z" fill="#d8655a" opacity="0.55"/>
  <!-- the fresh gap where a folder was lifted out with a key -->
  <rect x="762" y="386" width="14" height="142" fill="#0b0806"/>
  <rect x="762" y="386" width="14" height="10" fill="#5d1f18"/>
  <rect x="762" y="386" width="4" height="142" fill="#000000" opacity="0.5"/>
  <!-- ignored on top: nine years of drafts to a widow in Dayton -->
  <path d="M712 356 L858 348 L862 382 L716 392 Z" fill="#c3d6c4"/>
  <path d="M712 356 L858 348 L859 355 L713 363 Z" fill="#e6f0e6"/>
  <path d="M716 386 L862 376 L862 382 L716 392 Z" fill="#5c6a5c" opacity="0.5"/>
  <path d="M722 368 L840 360 M723 375 L842 367 M724 382 L810 375" stroke="#7d8a80" stroke-width="1.4" opacity="0.9" fill="none"/>
  <ellipse cx="842" cy="374" rx="11" ry="5" fill="#5f6b4a" opacity="0.75"/>
  <!-- the hasp, pried right off; oak splintered around the seam -->
  <g>
    <path d="M678 418 l32 10 l-4 40 l-30 -12 z" fill="#150f07" opacity="0.55"/>
    <path d="M676 414 l32 10 l-4 40 l-30 -12 z" fill="#8a6c30"/>
    <path d="M681 421 l21 7 l-2 26 l-19 -8 z" fill="#c8a75c"/>
    <path d="M681 421 l21 7 l-0.6 4 l-20 -7 z" fill="#f0dca4" opacity="0.6"/>
    <path d="M658 408 l20 5 l-2 11 l-20 -5 z" fill="#e8dcbb"/>
    <path d="M690 430 l28 10 l-15 5 l17 10 l-32 -13 z M688 466 l32 12 l-17 5 l20 10 l-36 -15 z M692 396 l24 8 l-13 4 l15 8 l-27 -10 z" fill="#a08453"/>
    <path d="M690 430 l28 10 l-7 2 l-22 -8 z M688 466 l32 12 l-8 2 l-25 -9 z M692 396 l24 8 l-6 2 l-19 -7 z" fill="#e2c88f" opacity="0.5"/>
  </g>
  <!-- the fire iron, dropped where it finished -->
  <g>
    <path d="M560 604 L748 574 L750 584 L562 614 Z" fill="#05070b" opacity="0.45"/>
    <path d="M560 596 L748 566 L750 578 L562 608 Z" fill="#3a342c"/>
    <path d="M560 596 L748 566 L748.6 570 L560.6 600 Z" fill="#6e675c" opacity="0.6"/>
    <path d="M748 566 q22 -6 26 10 q-4 12 -22 6 z" fill="#4a443c"/>
    <path d="M750 567 q16 -3 20 8 q-6 -6 -20 -4 z" fill="#7d766a" opacity="0.55"/>
    <path d="M560 596 l-16 3 l2 14 l16 -5 z" fill="#2b261f"/>
  </g>
</g>

<!-- the gangway: the diaphragm ribs framing the cold end -->
<g>
  <path d="M500 0 L560 44 L560 600 L500 620 Z" fill="#12100c"/>
  <path d="M500 0 L520 14 L520 614 L500 620 Z" fill="#241b12" opacity="0.7"/>
  <g stroke="#2b2118" stroke-width="6">
    <path d="M516 12 L516 612"/><path d="M532 24 L532 606"/><path d="M548 36 L548 602"/>
  </g>
  <path d="M513 12 L513 612 M529 24 L529 606 M545 36 L545 602" stroke="#4a3a24" stroke-width="1.2" fill="none" opacity="0.5"/>
  <path d="M980 0 L1000 0 L1000 620 L980 620 Z" fill="#12100c"/>
  <path d="M540 600 L1000 600 L1000 620 L500 620 Z" fill="#241b12"/>
  <path d="M540 600 L1000 600 L1000 604 L520 604 Z" fill="#4a3a24" opacity="0.6"/>
  <path d="M580 606 l14 -8 l14 8 l-14 8 z M640 606 l14 -8 l14 8 l-14 8 z M700 606 l14 -8 l14 8 l-14 8 z M760 606 l14 -8 l14 8 l-14 8 z M820 606 l14 -8 l14 8 l-14 8 z M880 606 l14 -8 l14 8 l-14 8 z M940 606 l14 -8 l14 8 l-14 8 z" fill="#33271a"/>
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
  <linearGradient id="mx-head-snow" x1="0.2" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#7e93b1"/><stop offset="0.34" stop-color="#9db0c8"/>
    <stop offset="0.7" stop-color="#c2cfdf"/><stop offset="1" stop-color="#dde5ee"/>
  </linearGradient>
  <linearGradient id="mx-head-boiler" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#161a1f"/><stop offset="0.24" stop-color="#3a4149"/>
    <stop offset="0.52" stop-color="#262b32"/><stop offset="0.78" stop-color="#171b20"/><stop offset="1" stop-color="#0e1114"/>
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
  <linearGradient id="mx-head-crust" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2f7fb"/><stop offset="0.42" stop-color="#d4dfeb"/><stop offset="1" stop-color="#9db0c8"/>
  </linearGradient>
  <linearGradient id="mx-head-cab" x1="0" y1="0" x2="1" y2="0.1">
    <stop offset="0" stop-color="#2e343c"/><stop offset="0.4" stop-color="#1e232a"/><stop offset="1" stop-color="#12151a"/>
  </linearGradient>
  <linearGradient id="mx-head-car" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#33271a"/><stop offset="0.44" stop-color="#241b12"/><stop offset="1" stop-color="#171009"/>
  </linearGradient>
  <radialGradient id="mx-head-far" cx="0.9" cy="0.6" r="0.6">
    <stop offset="0" stop-color="#3a4a63" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#3a4a63" stop-opacity="0"/>
  </radialGradient>
  <filter id="mx-head-soft" x="-40%" y="-200%" width="180%" height="500%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
</defs>

<rect width="1000" height="620" fill="url(#mx-head-sky)"/>

<!-- the pass: mountain shoulders, and the snow going sideways -->
<path d="M0 250 L120 150 L210 236 L300 120 L430 260 L560 190 L700 268 L830 200 L1000 280 L1000 400 L0 400 Z" fill="#141b28"/>
<path d="M120 150 L210 236 L190 240 L120 168 Z M300 120 L430 260 L406 264 L300 142 Z M560 190 L700 268 L678 272 L560 208 Z M830 200 L1000 280 L1000 288 L830 216 Z" fill="#26344a" opacity="0.55"/>
<path d="M0 300 L160 226 L320 300 L470 244 L640 314 L810 258 L1000 330 L1000 420 L0 420 Z" fill="#1b2436"/>
<path d="M160 226 L320 300 L300 306 L160 240 Z M470 244 L640 314 L620 320 L470 258 Z M810 258 L1000 330 L1000 338 L810 272 Z" fill="#2b3a52" opacity="0.5"/>
<!-- the far shoulder is lost in the weather -->
<rect x="400" y="120" width="600" height="300" fill="url(#mx-head-far)"/>
<g class="fx-drift-slow"><g stroke="#c6d2e0" stroke-width="1.6" opacity="0.28">
  <path d="M40 90 l52 -18"/><path d="M180 60 l56 -16"/><path d="M330 110 l50 -18"/>
  <path d="M520 70 l54 -16"/><path d="M690 120 l52 -18"/><path d="M860 60 l56 -16"/>
  <path d="M120 190 l50 -16"/><path d="M420 170 l52 -16"/><path d="M760 200 l50 -16"/>
  <path d="M240 300 l48 -14"/><path d="M600 330 l50 -14"/><path d="M900 270 l48 -14"/>
</g></g>
<g class="fx-drift" style="--d:-3s"><g fill="#e8eef4" opacity="0.5">
  <circle cx="140" cy="120" r="2.4"/><circle cx="300" cy="70" r="2"/><circle cx="470" cy="140" r="2.6"/>
  <circle cx="640" cy="80" r="2.2"/><circle cx="820" cy="150" r="2.4"/><circle cx="950" cy="100" r="2"/>
  <circle cx="220" cy="230" r="2"/><circle cx="560" cy="250" r="2.4"/><circle cx="880" cy="230" r="2.2"/>
</g></g>

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
<path d="M697 210 L697 300 M864 226 L864 296 M960 238 L960 292" stroke="#3d4c66" stroke-width="1.4" fill="none" opacity="0.5"/>
<path d="M676 222 L724 222 M846 236 L886 236 M946 246 L978 246" stroke="#8fa4c0" stroke-width="1.2" fill="none" opacity="0.35"/>
<g stroke="#24304a" stroke-width="2" fill="none" opacity="0.8">
  <path d="M700 226 q84 12 166 16"/><path d="M866 240 q48 4 96 10"/>
</g>

<!-- the section shack, a lit box away down the line -->
<g>
  <rect x="906" y="248" width="60" height="44" fill="#1b1f28"/>
  <path d="M900 248 L936 226 L972 248 Z" fill="#232a33"/>
  <path d="M900 248 L936 226 L940 230 L908 250 Z" fill="#c2cfdf" opacity="0.35"/>
  <rect x="920" y="262" width="18" height="16" fill="#ffd98a" opacity="0.5"/>
  <ellipse cx="929" cy="270" rx="26" ry="18" fill="#ffd98a" opacity="0.06"/>
</g>

<!-- THE TRAIN: the sleepers running away to the right, lit boxes in the dark -->
<g>
  <path d="M636 240 L1000 268 L1000 470 L636 468 Z" fill="url(#mx-head-car)"/>
  <path d="M636 240 L1000 268 L1000 284 L636 258 Z" fill="#3b2f22"/>
  <path d="M636 240 L1000 268 L1000 274 L636 246 Z" fill="#dfe8f2" opacity="0.35"/>
  <path d="M636 300 L1000 322 L1000 336 L636 316 Z" fill="#4a3524"/>
  <path d="M636 300 L1000 322 L1000 326 L636 304 Z" fill="#8a6a3c" opacity="0.6"/>
  <path d="M636 388 L1000 406 L1000 416 L636 400 Z" fill="#33271a"/>
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
  <!-- the shade half down in each, and the frost creeping up the outside -->
  <path d="M654 272 L710 276 L710 292 L654 288 Z M726 278 L782 282 L782 296 L726 293 Z M798 284 L854 288 L854 302 L798 299 Z M870 290 L926 294 L926 307 L870 304 Z" fill="#100c07" opacity="0.5"/>
  <path d="M654 320 L710 324 L710 336 L654 332 Z M726 326 L782 330 L782 340 L726 337 Z M798 332 L854 336 L854 344 L798 341 Z M870 337 L926 341 L926 348 L870 345 Z M942 342 L992 346 L992 352 L942 349 Z" fill="#dbe6f0" opacity="0.3"/>
  <g stroke="#6b5326" stroke-width="4" fill="none">
    <path d="M654 272 L710 276 L710 336 L654 332 Z"/><path d="M726 278 L782 282 L782 340 L726 337 Z"/>
    <path d="M798 284 L854 288 L854 344 L798 341 Z"/><path d="M870 290 L926 294 L926 348 L870 345 Z"/>
    <path d="M942 296 L992 300 L992 352 L942 349 Z"/>
  </g>
  <path d="M654 271 L710 275 M726 277 L782 281 M798 283 L854 287 M870 289 L926 293 M942 295 L992 299" stroke="#c0a05a" stroke-width="1.2" fill="none" opacity="0.5"/>
  <!-- lanterns strung along the flank -->
  <g>
    <rect x="700" y="230" width="5" height="18" fill="#3b2f22"/>
    <path d="M694 248 l16 0 l-3 16 l-10 0 z" fill="#8a6c30"/>
    <path d="M694 248 l16 0 l-0.6 4 l-15 0 z" fill="#d6b468" opacity="0.6"/>
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
  <rect x="424" y="216" width="40" height="256" fill="#3a2c1d" opacity="0.6"/>
  <rect x="424" y="216" width="216" height="16" fill="#3b2f22"/>
  <path d="M418 210 q108 -12 228 0 l0 8 q-114 -10 -228 0 z" fill="url(#mx-head-crust)" opacity="0.85"/>
  <rect x="424" y="300" width="216" height="12" fill="#4a3524"/>
  <rect x="424" y="300" width="216" height="3" fill="#8a6a3c" opacity="0.6"/>
  <rect x="436" y="244" width="56" height="52" fill="#1b2436"/>
  <rect x="436" y="244" width="56" height="52" fill="#d9a441" opacity="0.42"/>
  <rect x="436" y="282" width="56" height="14" fill="#dbe6f0" opacity="0.28"/>
  <rect x="436" y="244" width="56" height="52" fill="none" stroke="#6b5326" stroke-width="4"/>
  <path d="M436 243 L492 243" stroke="#c0a05a" stroke-width="1.2" fill="none" opacity="0.5"/>
  <!-- the door, standing open on a warm little office -->
  <rect x="504" y="240" width="112" height="228" fill="#0d0a07"/>
  <rect x="514" y="252" width="92" height="204" fill="#3a2b1a"/>
  <rect x="514" y="252" width="92" height="204" fill="#d9a441" opacity="0.3"/>
  <path d="M616 240 L646 232 L646 476 L616 468 Z" fill="#33271a"/>
  <path d="M616 240 L646 232 L646 244 L616 252 Z" fill="#6d5533" opacity="0.55"/>
  <rect x="622" y="340" width="8" height="22" rx="3" fill="#9b7a3f"/>
  <!-- the desk inside, and the log lying open on it -->
  <path d="M520 372 L604 372 L610 388 L514 388 Z" fill="#5c4229"/>
  <path d="M520 372 L604 372 L605 375 L519 375 Z" fill="#96703f" opacity="0.7"/>
  <rect x="520" y="388" width="84" height="60" fill="#2b2116"/>
  <path d="M522 388 L606 388 L606 392 L522 392 Z" fill="#120c07" opacity="0.6"/>
  <path d="M524 372 L610 372 L610 378 L524 378 Z" fill="#1a1109" opacity="0.35"/>
  <path d="M528 358 L600 358 L606 374 L522 374 Z" fill="#ece2c6"/>
  <path d="M528 358 L600 358 L601 361 L527 361 Z" fill="#fbf6e6"/>
  <path d="M564 358 L564 374" stroke="#a99d83" stroke-width="2"/>
  <g stroke="#4a3f31" stroke-width="1.4" opacity="0.9">
    <path d="M532 363 L558 363"/><path d="M532 368 L556 368"/><path d="M570 363 L598 363"/>
    <path d="M570 368 L596 368"/><path d="M532 372 L552 372"/>
  </g>
  <path d="M596 352 L620 348 L622 356 L598 360 Z" fill="#a8352a" opacity="0.8"/>
  <ellipse cx="560" cy="326" rx="16" ry="5" fill="#1a1109" opacity="0.4"/>
  <ellipse cx="560" cy="322" rx="16" ry="6" fill="#8a6c30"/>
  <ellipse cx="560" cy="318" rx="11" ry="5" fill="#ffd98a" opacity="0.8"/>
  <!-- the conductor in the doorway, lantern down at his side -->
  <g>
    <path d="M528 268 q26 -14 52 0 l6 96 l-64 0 z" fill="#1e242c"/>
    <path d="M554 262 q18 0 26 6 l6 96 l-32 0 z" fill="#2b333e" opacity="0.8"/>
    <path d="M544 274 q18 -8 36 0 l-2 26 l-32 0 z" fill="#ded0a6"/>
    <path d="M556 276 l8 0 l-2 22 l-6 0 z" fill="#2b1f14"/>
    <g fill="#c8a75c">
      <circle cx="558" cy="310" r="2.6"/><circle cx="558" cy="326" r="2.6"/>
    </g>
    <path d="M528 278 l-14 60 l14 4 l14 -56 z" fill="#1b2028"/>
    <path d="M580 278 l14 60 l-14 4 l-14 -56 z" fill="#2b333e"/>
    <ellipse cx="554" cy="244" rx="18" ry="20" fill="#a8977b"/>
    <ellipse cx="560" cy="243" rx="10" ry="15" fill="#c3b08d" opacity="0.55"/>
    <path d="M536 240 q18 -22 36 0 q3 -22 -18 -22 q-21 0 -18 22 z" fill="#232a33"/>
    <rect x="530" y="236" width="48" height="8" rx="3" fill="#232a33"/>
    <rect x="530" y="236" width="48" height="2.4" rx="1.2" fill="#4a545f" opacity="0.6"/>
    <path d="M545 246 l6 0 M557 246 l6 0" stroke="#4a3f31" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M548 258 l12 0" stroke="#6b5a45" stroke-width="1.8" stroke-linecap="round" fill="none"/>
  </g>
</g>

<!-- THE MOUNTAIN-CLASS ENGINE, idling against the drift she could not beat -->
<g>
  <path d="M40 470 L40 260 q0 -84 96 -84 q96 0 96 84 l0 210 z" fill="url(#mx-head-boiler)"/>
  <path d="M52 470 L52 262 q0 -70 40 -80 q-22 22 -22 80 l0 208 z" fill="#4d565f" opacity="0.35"/>
  <path d="M206 470 L206 262 q0 -60 -26 -78 q42 16 42 78 l0 208 z" fill="#080a0c" opacity="0.6"/>
  <ellipse cx="136" cy="270" rx="96" ry="86" fill="#232830"/>
  <path d="M136 184 a96 86 0 0 0 -84 130 l14 -6 a86 76 0 0 1 74 -116 z" fill="#4d565f" opacity="0.4"/>
  <ellipse cx="136" cy="270" rx="78" ry="70" fill="#1a1e24"/>
  <ellipse cx="120" cy="256" rx="52" ry="46" fill="#262c34" opacity="0.5"/>
  <g fill="none" stroke="#3d444c" stroke-width="5">
    <path d="M136 200 L136 340"/><path d="M66 270 L206 270"/>
  </g>
  <path d="M133 200 L133 340 M66 267 L206 267" stroke="#68727c" stroke-width="1.4" fill="none" opacity="0.5"/>
  <circle cx="136" cy="270" r="18" fill="#3d444c"/>
  <path d="M136 252 a18 18 0 0 0 -16 10 l6 4 a12 12 0 0 1 10 -8 z" fill="#79838d" opacity="0.6"/>
  <circle cx="136" cy="270" r="9" fill="#20252b"/>
  <!-- the headlight, and its cone dying in the snow -->
  <rect x="108" y="140" width="56" height="46" rx="6" fill="#2b3037"/>
  <rect x="108" y="140" width="10" height="46" rx="5" fill="#525b64" opacity="0.6"/>
  <ellipse cx="136" cy="162" rx="18" ry="17" fill="#ffd98a"/>
  <ellipse cx="136" cy="162" rx="10" ry="9" fill="#fff4d6"/>
  <circle class="fx-glow" cx="136" cy="162" r="86" fill="url(#mx-head-head)"/>
  <path d="M136 162 L400 300 L360 420 L136 190 Z" fill="#ffd98a" opacity="0.06"/>
  <!-- stack and the steam torn flat by the wind -->
  <rect x="106" y="96" width="62" height="46" rx="4" fill="#2b3037"/>
  <rect x="106" y="96" width="10" height="46" rx="4" fill="#525b64" opacity="0.55"/>
  <rect x="98" y="88" width="78" height="14" rx="4" fill="#3d444c"/>
  <rect x="98" y="88" width="78" height="3.4" rx="2" fill="#79838d" opacity="0.5"/>
  <g class="fx-drift-slow"><path d="M110 90 q60 -60 150 -46 q90 12 170 -14 q-60 46 -160 42 q-90 -4 -160 18 z" fill="#c6d2e0" opacity="0.16"/></g>
  <g class="fx-drift-slow" style="--d:-8s"><path d="M120 72 q70 -44 160 -34 q-70 26 -160 34 z" fill="#c6d2e0" opacity="0.1"/></g>
  <!-- boiler bands, handrail, and the cab -->
  <g fill="#3d444c">
    <rect x="40" y="356" width="196" height="10"/><rect x="40" y="410" width="196" height="10"/>
  </g>
  <path d="M40 356 h196 v2.4 h-196 z M40 410 h196 v2.4 h-196 z" fill="#79838d" opacity="0.5"/>
  <path d="M40 364 h196 v3 h-196 z M40 418 h196 v3 h-196 z" fill="#080a0c" opacity="0.5"/>
  <path d="M232 232 L236 232 L236 470 L232 470 Z" fill="#2b3037"/>
  <rect x="232" y="228" width="176" height="242" fill="url(#mx-head-cab)"/>
  <rect x="232" y="222" width="176" height="12" fill="#3d444c"/>
  <path d="M228 216 q90 -10 186 0 l0 7 q-94 -8 -186 0 z" fill="url(#mx-head-crust)" opacity="0.85"/>
  <rect x="252" y="256" width="64" height="58" fill="#1b2436"/>
  <rect x="252" y="256" width="64" height="58" fill="#d9a441" opacity="0.5"/>
  <rect x="252" y="300" width="64" height="14" fill="#dbe6f0" opacity="0.26"/>
  <rect x="332" y="256" width="60" height="58" fill="#1b2436"/>
  <rect x="332" y="256" width="60" height="58" fill="#d9a441" opacity="0.34"/>
  <rect x="332" y="302" width="60" height="12" fill="#dbe6f0" opacity="0.22"/>
  <g fill="none" stroke="#3d444c" stroke-width="4">
    <rect x="252" y="256" width="64" height="58"/><rect x="332" y="256" width="60" height="58"/>
  </g>
  <path d="M252 254 L316 254 M332 254 L392 254" stroke="#79838d" stroke-width="1.2" fill="none" opacity="0.45"/>
  <!-- the fireman's silhouette at the open firebox -->
  <path d="M270 268 q16 -10 32 0 l4 46 l-40 0 z" fill="#14171b"/>
  <ellipse cx="286" cy="256" rx="11" ry="12" fill="#14171b"/>
  <rect x="252" y="356" width="156" height="70" fill="#191d22"/>
  <rect x="252" y="356" width="156" height="3" fill="#3d444c" opacity="0.6"/>
  <g class="fx-ember"><path d="M264 372 q34 -18 60 6 q-26 26 -60 8 z" fill="#d9a441" opacity="0.55"/></g>
  <g class="fx-ember" style="--d:-1.4s"><path d="M272 380 q22 -12 40 4 q-18 16 -40 6 z" fill="#ffd98a" opacity="0.6"/></g>
  <!-- the drivers, most of them under the drift -->
  <g fill="#191d22">
    <circle cx="132" cy="452" r="52"/><circle cx="252" cy="452" r="52"/><circle cx="372" cy="452" r="46"/>
  </g>
  <path d="M132 400 a52 52 0 0 0 -46 28 l10 6 a42 42 0 0 1 36 -22 z M252 400 a52 52 0 0 0 -46 28 l10 6 a42 42 0 0 1 36 -22 z" fill="#3d444c" opacity="0.4"/>
  <g fill="none" stroke="#3d444c" stroke-width="4">
    <circle cx="132" cy="452" r="38"/><circle cx="252" cy="452" r="38"/><circle cx="372" cy="452" r="32"/>
  </g>
  <rect x="100" y="440" width="300" height="12" fill="#2b3037"/>
  <rect x="100" y="440" width="300" height="2.6" fill="#69727b" opacity="0.5"/>
</g>

<!-- bell, handrails and marker lamp, all the engine keeps above the snow -->
<g>
  <rect x="196" y="176" width="12" height="20" fill="#8a6c30"/>
  <rect x="196" y="176" width="4" height="20" fill="#d0ac60" opacity="0.6"/>
  <path d="M186 196 q16 -10 32 0 l-4 22 q-12 6 -24 0 z" fill="#b28c3f"/>
  <path d="M186 196 q16 -10 32 0 l-1 4 q-15 -8 -30 0 z" fill="#eed9a0" opacity="0.6"/>
  <path d="M212 200 q6 2 6 -4 l-4 22 q-4 3 -6 2 z" fill="#5e4718" opacity="0.55"/>
  <ellipse cx="202" cy="220" rx="14" ry="4" fill="#8a6c30"/>
  <rect x="52" y="330" width="180" height="6" rx="3" fill="#4d555e"/>
  <rect x="52" y="330" width="180" height="1.8" rx="1" fill="#8b959f" opacity="0.6"/>
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
<path d="M0 372 q64 -46 150 -30 q76 14 128 62 q64 -22 128 8 q60 26 122 6 q76 -24 150 6 q66 26 148 8 q92 -20 174 22 l0 10 q-92 -40 -178 -20 q-84 16 -150 -10 q-66 -26 -146 -2 q-78 22 -134 -6 q-62 -30 -124 -8 q-56 -46 -130 -60 q-84 -14 -138 30 z" fill="#f2f7fb" opacity="0.55"/>
<path d="M0 620 L0 430 q78 -34 156 -6 q70 26 130 10 q72 -20 140 12 q70 30 138 6 q76 -26 152 4 q80 32 172 8 L1000 620 Z" fill="#d6e0ea"/>
<path d="M0 430 q78 -34 156 -6 q70 26 130 10 q72 -20 140 12 q70 30 138 6 q76 -26 152 4 q80 32 172 8 l0 8 q-94 22 -176 -8 q-76 -28 -148 -4 q-70 26 -142 -6 q-72 -32 -136 -10 q-64 18 -134 -10 q-76 -28 -152 4 z" fill="#f6fafd" opacity="0.5"/>
<!-- hollows scoured out of the drift where the wind curls back -->
<g fill="#8fa4c0" opacity="0.5">
  <path d="M60 452 q60 -22 120 4 l-124 16 z"/><path d="M330 470 q70 -20 132 8 l-136 14 z"/>
  <path d="M660 462 q70 -22 140 6 l-142 16 z"/>
</g>
<g fill="#7a8fae" opacity="0.35">
  <path d="M180 496 q56 -18 108 4 l-112 14 z"/><path d="M480 508 q60 -18 116 6 l-120 14 z"/>
  <path d="M820 490 q54 -16 106 6 l-110 12 z"/>
</g>
<g stroke="#ffffff" stroke-width="2" opacity="0.35">
  <path d="M100 500 q80 -18 160 6"/><path d="M420 520 q90 -18 176 8"/><path d="M760 500 q80 -16 156 10"/>
</g>
<!-- sastrugi: the wind has combed the whole surface one way -->
<g stroke="#ffffff" stroke-width="1.2" opacity="0.2" fill="none">
  <path d="M20 470 q90 -16 180 4"/><path d="M240 458 q80 -14 158 6"/><path d="M540 468 q84 -14 164 8"/>
  <path d="M60 536 q100 -18 196 8"/><path d="M320 552 q100 -16 194 10"/><path d="M660 540 q100 -16 198 10"/>
</g>
<g stroke="#7a8fae" stroke-width="1.4" opacity="0.3" fill="none">
  <path d="M20 476 q90 -16 180 4"/><path d="M540 474 q84 -14 164 8"/>
  <path d="M60 542 q100 -18 196 8"/><path d="M320 558 q100 -16 194 10"/>
</g>

<g stroke="#ffffff" stroke-width="1.6" opacity="0.22">
  <path d="M40 560 q120 -20 240 6"/><path d="M120 596 q140 -18 268 8"/>
  <path d="M520 566 q120 -16 236 8"/><path d="M600 604 q140 -16 280 10"/>
</g>
<!-- the snow takes the lantern warm on one side and the night blue on the other -->
<path d="M420 620 q120 -60 250 -50 q120 10 200 62 z" fill="#d9a441" opacity="0.05"/>
<path d="M0 620 L0 430 q78 -34 156 -6 q40 15 76 14 l0 182 z" fill="#3d4a63" opacity="0.10"/>

<!-- THE DUG PIT below the sleeper windows: where the strap came up -->
<g>
  <path d="M600 500 q64 -34 142 -8 q56 20 44 58 q-14 42 -104 40 q-92 -2 -100 -42 q-6 -30 18 -48 z" fill="#8fa4c0"/>
  <path d="M600 500 q64 -34 142 -8 q22 8 34 22 l-10 6 q-14 -14 -32 -20 q-72 -24 -132 8 z" fill="#e6eef6" opacity="0.55"/>
  <path d="M622 512 q56 -28 124 -6 q46 18 34 48 q-14 32 -92 30 q-80 -2 -84 -34 q-4 -24 18 -38 z" fill="#3d4a5e"/>
  <path d="M644 526 q46 -22 102 -4 q34 14 24 36 q-14 24 -76 22 q-64 -2 -66 -26 q-2 -18 16 -28 z" fill="#141a26"/>
  <path d="M700 522 q40 0 66 16 q26 16 20 30 q0 -18 -26 -30 q-28 -14 -60 -16 z" fill="#4d5f7c" opacity="0.5"/>
  <!-- the strap, eighteen inches down, in the lantern's light -->
  <path d="M664 552 q34 -16 74 -2 l-2 14 q-38 -12 -70 4 z" fill="#4a3524"/>
  <path d="M664 552 q34 -16 74 -2 l-0.6 4 q-38 -12 -72 2 z" fill="#87643a" opacity="0.7"/>
  <g stroke="#8a7148" stroke-width="1.4" opacity="0.9">
    <path d="M666 552 q34 -14 72 -2"/><path d="M664 562 q34 -14 72 -2"/>
  </g>
  <path d="M732 548 l16 4 l-2 12 l-16 -4 z" fill="#e8dcbb"/>
  <path d="M732 548 l16 4 l-0.6 3 l-16 -4 z" fill="#fff8e4" opacity="0.7"/>
  <!-- the lantern set in the snow, and the spade standing in it -->
  <g>
    <ellipse cx="572" cy="520" rx="44" ry="9" fill="#39465e" opacity="0.4"/>
    <path d="M552 520 l40 0 l-4 -14 l-32 0 z" fill="#8a6c30"/>
    <rect x="556" y="470" width="32" height="42" rx="4" fill="#ffd98a"/>
    <rect class="fx-flame" x="560" y="474" width="24" height="34" rx="3" fill="#fff4d6"/>
    <path d="M556 470 l32 0 l-4 -14 l-24 0 z" fill="#6b5326"/>
    <path d="M556 470 l32 0 l-1 -3.4 l-30 0 z" fill="#c8a75c" opacity="0.6"/>
    <rect x="566" y="446" width="12" height="12" rx="4" fill="none" stroke="#6b5326" stroke-width="3"/>
    <circle class="fx-glow" style="--d:-1.9s" cx="572" cy="494" r="76" fill="url(#mx-head-lant)"/>
  </g>
  <g>
    <path d="M826 524 q52 -8 74 18 l-84 8 z" fill="#39465e" opacity="0.35"/>
    <path d="M812 380 l10 -4 l52 148 l-10 4 z" fill="#5c4229"/>
    <path d="M812 380 l4 -1.6 l52 148 l-4 1.6 z" fill="#8f6a3c" opacity="0.7"/>
    <path d="M862 522 q28 -8 40 22 q-14 26 -44 14 z" fill="#8e9298"/>
    <path d="M862 522 q20 -6 32 8 q-16 -6 -30 -3 z" fill="#c8cdd3" opacity="0.7"/>
    <rect x="806" y="368" width="22" height="12" rx="5" fill="#3b2f22"/>
  </g>
  <!-- fresh spoil thrown up around the hole -->
  <g fill="#eef3f8" opacity="0.8">
    <path d="M586 512 q30 -20 56 -8 l-58 16 z"/><path d="M756 500 q30 -16 54 -2 l-56 14 z"/>
    <path d="M628 586 q40 -14 78 2 l-80 10 z"/>
  </g>
  <g fill="#a8bacf" opacity="0.5">
    <path d="M586 520 q30 -12 56 -2 l-58 10 z"/><path d="M756 508 q30 -10 54 0 l-56 8 z"/>
  </g>
</g>

<!-- the crew, keeping their distance from the badge -->
<g>
  <ellipse cx="242" cy="600" rx="56" ry="10" fill="#39465e" opacity="0.4" filter="url(#mx-head-soft)"/>
  <path d="M228 512 q26 -16 52 0 l8 84 l-68 0 z" fill="#1c2128"/>
  <path d="M254 506 q18 0 26 6 l8 84 l-34 0 z" fill="#272d36" opacity="0.8"/>
  <ellipse cx="254" cy="492" rx="18" ry="19" fill="#8e8577"/>
  <ellipse cx="248" cy="491" rx="10" ry="14" fill="#a89e8c" opacity="0.55"/>
  <path d="M236 488 q18 -20 36 0 q3 -20 -18 -20 q-21 0 -18 20 z" fill="#20252b"/>
  <rect x="230" y="484" width="48" height="8" rx="3" fill="#20252b"/>
  <rect x="230" y="484" width="48" height="2.4" rx="1.2" fill="#454e58" opacity="0.6"/>
  <path d="M245 494 l6 0 M257 494 l6 0" stroke="#4a3f31" stroke-width="1.7" stroke-linecap="round" fill="none"/>
  <path d="M228 520 l-14 52 l14 4 l14 -50 z" fill="#1a1f25"/>
  <path d="M204 570 l24 0 l-2 26 l-20 0 z" fill="#8a6c30"/>
  <path d="M204 570 l7 0 l-1 26 l-6 0 z" fill="#d0ac60" opacity="0.6"/>
  <circle class="fx-flame" style="--d:-1.3s" cx="216" cy="580" r="34" fill="url(#mx-head-lant)"/>
  <g fill="#c6d2e0" opacity="0.22">
    <path d="M272 480 q22 -12 34 -2 q-16 10 -34 2 z"/>
  </g>
</g>
<g>
  <ellipse cx="352" cy="612" rx="54" ry="10" fill="#39465e" opacity="0.35"/>
  <path d="M336 502 q24 -16 48 0 l8 108 l-64 0 z" fill="#161a1f"/>
  <path d="M360 496 q16 0 24 6 l8 108 l-32 0 z" fill="#21262d" opacity="0.8"/>
  <ellipse cx="360" cy="480" rx="17" ry="18" fill="#8e8577"/>
  <ellipse cx="354" cy="479" rx="9" ry="13" fill="#a89e8c" opacity="0.55"/>
  <path d="M343 476 q17 -19 34 0 q3 -19 -17 -19 q-20 0 -17 19 z" fill="#191d22"/>
  <rect x="338" y="472" width="45" height="7" rx="3" fill="#191d22"/>
  <rect x="338" y="472" width="45" height="2.2" rx="1.1" fill="#3d444c" opacity="0.6"/>
  <path d="M351 482 l6 0 M363 482 l6 0" stroke="#4a3f31" stroke-width="1.6" stroke-linecap="round" fill="none"/>
  <path d="M384 510 l16 56 l-14 5 l-15 -54 z" fill="#21262d"/>
  <path d="M336 510 l-16 56 l14 5 l15 -54 z" fill="#141820"/>
  <g fill="#c6d2e0" opacity="0.2">
    <path d="M378 468 q20 -12 32 -2 q-16 10 -32 2 z"/>
  </g>
</g>

<!-- steam bleeding sideways along the ground -->
<g class="fx-drift-slow" style="--d:-5s"><g fill="#c6d2e0" opacity="0.14">
  <path d="M60 430 q90 -30 180 -6 q80 22 160 0 q-90 34 -180 18 q-90 -16 -160 -12 z"/>
  <path d="M120 470 q80 -20 150 -2 q-80 22 -150 2 z"/>
</g></g>
<g class="fx-drift" style="--d:-2s"><g fill="#c6d2e0" opacity="0.1">
  <path d="M240 396 q110 -34 220 -4 q-110 28 -220 4 z"/>
</g></g>

<!-- boot tracks in the fresh snow -->
<g fill="#8fa4c0" opacity="0.45">
  <ellipse cx="300" cy="600" rx="13" ry="6"/><ellipse cx="332" cy="586" rx="12" ry="5"/>
  <ellipse cx="364" cy="600" rx="12" ry="5"/><ellipse cx="404" cy="588" rx="11" ry="5"/>
  <ellipse cx="444" cy="600" rx="11" ry="5"/><ellipse cx="486" cy="590" rx="10" ry="4"/>
  <ellipse cx="524" cy="602" rx="10" ry="4"/>
</g>
<g fill="#eef3f8" opacity="0.4">
  <path d="M288 596 q12 -6 24 0 l-1 3 q-12 -5 -23 0 z"/><path d="M320 582 q11 -5 22 0 l-1 3 q-11 -4 -21 0 z"/>
  <path d="M352 596 q11 -5 22 0 l-1 3 q-11 -4 -21 0 z"/><path d="M393 584 q10 -5 20 0 l-1 3 q-10 -4 -19 0 z"/>
  <path d="M433 596 q10 -5 20 0 l-1 3 q-10 -4 -19 0 z"/>
</g>

<rect width="1000" height="620" fill="url(#mx-head-vig)"/>
`,
  },
};
