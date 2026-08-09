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
    <stop offset="0" stop-color="#2c2116"/><stop offset="0.34" stop-color="#41321f"/>
    <stop offset="0.74" stop-color="#5b452a"/><stop offset="1" stop-color="#6d5433"/>
  </linearGradient>
  <linearGradient id="or-stage-flatlift" x1="0.1" y1="1" x2="0.9" y2="0">
    <stop offset="0" stop-color="#ffcf86" stop-opacity="0.16"/>
    <stop offset="0.5" stop-color="#ffcf86" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#ffcf86" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-stage-rail" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4f30"/><stop offset="0.34" stop-color="#3d2e1e"/><stop offset="1" stop-color="#1a130d"/>
  </linearGradient>
  <linearGradient id="or-stage-timber" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2015"/><stop offset="0.58" stop-color="#4c3924"/><stop offset="1" stop-color="#7a5c36"/>
  </linearGradient>
  <linearGradient id="or-stage-iron" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#232019"/><stop offset="0.6" stop-color="#3e392f"/><stop offset="1" stop-color="#6a6252"/>
  </linearGradient>
  <linearGradient id="or-stage-tick" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#404a30"/><stop offset="0.55" stop-color="#63704b"/><stop offset="1" stop-color="#8a955f"/>
  </linearGradient>
  <linearGradient id="or-stage-nap" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#000000" stop-opacity="0.55"/>
    <stop offset="0.55" stop-color="#000000" stop-opacity="0.08"/>
    <stop offset="0.86" stop-color="#ffcf86" stop-opacity="0"/>
    <stop offset="1" stop-color="#ffcf86" stop-opacity="0.20"/>
  </linearGradient>
  <linearGradient id="or-stage-haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#9d8a6a" stop-opacity="0.20"/>
    <stop offset="0.62" stop-color="#9d8a6a" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#9d8a6a" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-stage-beam2" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffe6b4" stop-opacity="0.13"/>
    <stop offset="0.62" stop-color="#ffe6b4" stop-opacity="0.05"/>
    <stop offset="1" stop-color="#ffe6b4" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-stage-planks" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#000000" stop-opacity="0.5"/>
    <stop offset="0.35" stop-color="#000000" stop-opacity="0.18"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="or-stage-troughpool" cx="0.5" cy="1" r="0.9">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="or-stage-bulb" cx="0.5" cy="0.42" r="0.56">
    <stop offset="0" stop-color="#fffdf4"/><stop offset="0.3" stop-color="#fff0c4"/>
    <stop offset="0.66" stop-color="#ffd98a"/><stop offset="1" stop-color="#c98b2c"/>
  </radialGradient>
  <linearGradient id="or-stage-castfade" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="#0b0805" stop-opacity="0.42"/>
    <stop offset="0.55" stop-color="#0b0805" stop-opacity="0.16"/>
    <stop offset="1" stop-color="#0b0805" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="or-stage-moon" cx="0.36" cy="0.32" r="0.72">
    <stop offset="0" stop-color="#fbf5e0"/><stop offset="0.6" stop-color="#ddcfa4"/><stop offset="1" stop-color="#a89a72"/>
  </radialGradient>
  <linearGradient id="or-stage-sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#243049"/><stop offset="1" stop-color="#131a29"/>
  </linearGradient>
  <linearGradient id="or-stage-deck" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#241c14"/><stop offset="0.5" stop-color="#3a2d1f"/>
    <stop offset="0.85" stop-color="#503c28"/><stop offset="1" stop-color="#5c452c"/>
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

<!-- the painted backdrop: a Parisian garret, Act III.
     It is painted cloth on a timber frame, footlit from below, so it
     brightens toward the deck and the weave shows where the light rakes. -->
<g>
  <rect x="70" y="30" width="770" height="360" fill="url(#or-stage-wall)"/>
  <!-- the weave of the canvas, only legible in the footlight -->
  <path d="M84 200 L84 390 M112 190 L112 390 M140 186 L140 390 M168 182 L168 390 M196 178 L196 390 M224 174 L224 390 M252 170 L252 390 M280 166 L280 390 M308 162 L308 390 M336 156 L336 390 M364 152 L364 390 M392 30 L392 390 M420 30 L420 390 M448 30 L448 390 M476 30 L476 390 M504 30 L504 390 M532 30 L532 390 M560 30 L560 390 M588 30 L588 390 M616 30 L616 390 M644 30 L644 390 M672 30 L672 390 M700 30 L700 390 M728 30 L728 390 M756 30 L756 390 M784 30 L784 390 M812 30 L812 390" stroke="#8a6a3f" stroke-width="0.7" opacity="0.14"/>
  <path d="M70 226 L840 226 M70 250 L840 250 M70 274 L840 274 M70 298 L840 298 M70 322 L840 322 M70 346 L840 346 M70 202 L840 202 M70 178 L840 178" stroke="#17110a" stroke-width="0.7" opacity="0.16"/>
  <!-- the seams: three flats, lashed, each edge catching a hair of light -->
  <path d="M330 30 L330 390 M586 30 L586 390" stroke="#1c150d" stroke-width="3" opacity="0.5"/>
  <path d="M333 30 L333 390 M589 30 L589 390" stroke="#8f6f42" stroke-width="1.1" opacity="0.3"/>
  <!-- scumbled paint: a scene-painter's broad strokes, dragged dry -->
  <g fill="#6f5533" opacity="0.13">
    <path d="M78 296 q180 -22 356 -6 l0 16 q-176 -14 -356 8 z"/>
    <path d="M440 254 q190 -20 392 -4 l0 14 q-198 -12 -392 8 z"/>
    <path d="M92 148 q150 -18 268 -30 l0 13 q-120 12 -268 30 z"/>
  </g>
  <g fill="#1b140c" opacity="0.16">
    <path d="M120 224 q200 20 402 4 l0 12 q-206 16 -402 -4 z"/>
    <path d="M470 330 q160 16 342 2 l0 12 q-182 14 -342 -2 z"/>
  </g>
  <!-- the sloped garret ceiling, and its lit under-edge -->
  <path d="M70 30 L430 30 L430 152 L70 218 Z" fill="#231a13"/>
  <path d="M70 30 L430 30 L430 60 L70 116 Z" fill="#100c08" opacity="0.5"/>
  <path d="M70 218 L430 152" fill="none" stroke="#5c4830" stroke-width="4"/>
  <path d="M70 222 L430 156" fill="none" stroke="#a3814d" stroke-width="1.4" opacity="0.6"/>
  <g stroke="#453423" stroke-width="7" opacity="0.9">
    <line x1="118" y1="200" x2="150" y2="32"/>
    <line x1="198" y1="185" x2="222" y2="32"/>
    <line x1="282" y1="170" x2="298" y2="32"/>
    <line x1="364" y1="155" x2="372" y2="32"/>
  </g>
  <path d="M121 200 L153 32 M201 185 L225 32 M285 170 L301 32 M367 155 L375 32" stroke="#6c5334" stroke-width="1.6" opacity="0.5"/>
  <path d="M114 200 L146 32 M194 185 L218 32 M278 170 L294 32 M360 155 L368 32" stroke="#150f09" stroke-width="1.8" opacity="0.55"/>
  <g fill="#523f2a" opacity="0.45">
    <path d="M462 58 q42 -20 80 6 q32 24 4 46 q-44 24 -80 -8 z"/>
    <path d="M676 232 q34 -18 62 4 q24 22 -2 38 q-38 18 -64 -8 z"/>
    <path d="M112 262 q30 -14 54 4 q20 18 -2 32 q-34 16 -56 -6 z"/>
  </g>
  <path d="M466 88 q40 16 78 -8 M680 262 q30 12 58 -8 M116 292 q28 12 52 -8" fill="none" stroke="#8b6c40" stroke-width="1.6" opacity="0.35"/>
  <g fill="#1f170f" opacity="0.55">
    <path d="M540 130 q10 40 -6 78 l10 2 q18 -40 6 -80 z"/>
    <path d="M300 246 q6 42 -8 76 l9 3 q16 -38 8 -79 z"/>
  </g>
  <!-- footlight lifting the lower half of the cloth -->
  <rect x="70" y="30" width="770" height="360" fill="url(#or-stage-flatlift)"/>
  <!-- shadows the footlights throw UP the cloth: table, chair, cot.
       They spread and dissolve as they climb away from the lamps. -->
  <g fill="url(#or-stage-castfade)">
    <path d="M100 352 L320 352 L292 168 L124 168 Z"/>
    <path d="M36 352 L150 352 L118 150 L52 150 Z"/>
    <path d="M624 352 L836 352 L818 196 L644 196 Z"/>
  </g>
  <!-- chair rail and skirting board: lit top edge, dark face, footlight kick -->
  <rect x="70" y="352" width="770" height="14" fill="url(#or-stage-rail)"/>
  <path d="M70 352 L840 352" stroke="#a3814d" stroke-width="2" opacity="0.5"/>
  <rect x="70" y="366" width="770" height="24" fill="#1c150e"/>
  <rect x="70" y="380" width="770" height="10" fill="#6d5433" opacity="0.35"/>
  <path d="M70 366 L840 366" stroke="#000000" stroke-width="2" opacity="0.45"/>
  <path d="M154 366 L154 390 M296 366 L296 390 L296 390 M438 366 L438 390 M604 366 L604 390 M742 366 L742 390" stroke="#0d0906" stroke-width="1.6" opacity="0.5"/>
  <g>
    <rect x="494" y="86" width="216" height="180" fill="#2a2018"/>
    <rect x="504" y="96" width="196" height="160" fill="url(#or-stage-sky)"/>
    <circle cx="646" cy="140" r="46" fill="#e3d5ac" opacity="0.10"/>
    <circle cx="646" cy="140" r="38" fill="#e3d5ac" opacity="0.14"/>
    <circle cx="646" cy="140" r="34" fill="url(#or-stage-moon)" opacity="0.92"/>
    <g class="fx-glow" style="--d:2.1s"><circle cx="636" cy="134" r="30" fill="#f0e7ce" opacity="0.5"/></g>
    <circle cx="654" cy="150" r="7" fill="#cbb98f" opacity="0.35"/>
    <circle cx="632" cy="128" r="5" fill="#cbb98f" opacity="0.3"/>
    <circle cx="660" cy="126" r="4" fill="#cbb98f" opacity="0.22"/>
    <path d="M626 166 q22 10 44 -4" fill="none" stroke="#9a8f6c" stroke-width="3" opacity="0.3"/>
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
    <path d="M605 96 L605 256 M504 179 L700 179" stroke="#7a5f38" stroke-width="1.6" opacity="0.45"/>
    <path d="M599 96 L599 256 M504 173 L700 173" stroke="#100b07" stroke-width="1.8" opacity="0.5"/>
    <rect x="486" y="78" width="232" height="12" fill="url(#or-stage-timber)"/>
    <rect x="486" y="262" width="232" height="14" fill="url(#or-stage-timber)"/>
    <path d="M486 276 L718 276" stroke="#a3814d" stroke-width="1.6" opacity="0.45"/>
    <path d="M486 78 L718 78" stroke="#0d0906" stroke-width="1.6" opacity="0.5"/>
    <!-- the glass: a slab of reflected sky, and forty years of grime -->
    <path d="M508 254 L560 100 L586 100 L534 254 Z" fill="#f0e7ce" opacity="0.07"/>
    <path d="M614 254 L648 152 L662 152 L628 254 Z" fill="#f0e7ce" opacity="0.045"/>
    <path d="M504 240 q48 -10 96 -2 l0 16 l-96 0 z" fill="#0a0d16" opacity="0.4"/>
    <path d="M604 236 q48 -10 96 -2 l0 20 l-96 0 z" fill="#0a0d16" opacity="0.4"/>
    <path d="M504 96 l96 0 l0 12 q-48 8 -96 -2 z" fill="#0a0d16" opacity="0.35"/>
  </g>
  <g>
    <rect x="742" y="128" width="86" height="228" fill="#2e2418"/>
    <rect x="748" y="136" width="74" height="212" fill="url(#or-stage-timber)"/>
    <rect x="742" y="128" width="86" height="228" fill="url(#or-stage-planks)" opacity="0.5"/>
    <g fill="none" stroke="#2a2018" stroke-width="3">
      <rect x="758" y="150" width="54" height="80"/><rect x="758" y="248" width="54" height="86"/>
    </g>
    <path d="M758 232 L812 232 M758 336 L812 336 M760 150 L760 230 M760 248 L760 334" stroke="#8b6c40" stroke-width="1.4" opacity="0.45"/>
    <path d="M758 150 L812 150 M758 248 L812 248" stroke="#0d0906" stroke-width="1.6" opacity="0.5"/>
    <path d="M742 128 L748 136 L748 348 L742 356 Z" fill="#0a0705" opacity="0.5"/>
    <circle cx="756" cy="246" r="5" fill="#9b7a3f"/>
    <circle cx="755" cy="245" r="2" fill="#f0dba2" opacity="0.7"/>
    <ellipse cx="757" cy="252" rx="6" ry="3" fill="#0a0705" opacity="0.45"/>
    <path d="M748 340 q36 6 74 0 l0 8 l-74 0 z" fill="#0a0705" opacity="0.35"/>
  </g>
  <g fill="#241b12">
    <rect x="452" y="292" width="20" height="70"/>
    <path d="M452 292 l20 0 l0 -22 l38 0 l0 -16 l-38 0 q-20 0 -20 20 z"/>
  </g>
</g>

<!-- set dressing: the garret table, stage left -->
<g>
  <ellipse cx="208" cy="392" rx="118" ry="16" fill="#080605" opacity="0.5"/>
  <rect x="112" y="300" width="192" height="12" fill="url(#or-stage-timber)"/>
  <path d="M112 312 L304 312" stroke="#a3814d" stroke-width="1.6" opacity="0.5"/>
  <path d="M112 300 L304 300" stroke="#100b07" stroke-width="1.6" opacity="0.6"/>
  <rect x="120" y="312" width="176" height="7" fill="#2f2317"/>
  <rect x="126" y="319" width="12" height="72" fill="url(#or-stage-timber)"/>
  <rect x="278" y="319" width="12" height="72" fill="url(#or-stage-timber)"/>
  <path d="M136 319 L136 391 M288 319 L288 391" stroke="#0d0906" stroke-width="2" opacity="0.55"/>
  <rect x="126" y="352" width="164" height="7" fill="#33271a"/>
  <path d="M126 359 L290 359" stroke="#8b6c40" stroke-width="1.2" opacity="0.4"/>
  <path d="M144 300 q30 -6 62 -2 M220 302 q34 -5 66 -1" fill="none" stroke="#6a4d2c" stroke-width="1" opacity="0.35"/>
  <ellipse cx="209" cy="300" rx="24" ry="5" fill="#0a0705" opacity="0.5"/>
  <path d="M196 300 l0 -34 q0 -8 8 -8 l6 0 q8 0 8 8 l0 34 z" fill="#2f3a4e"/>
  <path d="M196 300 l0 -34 q0 -8 8 -8 l2 0 l0 42 z" fill="#0e1420" opacity="0.55"/>
  <path d="M215 300 l0 -32 q0 -6 -4 -8 l3 -2 q5 3 5 10 l0 32 z" fill="#8ea6c4" opacity="0.35"/>
  <path d="M199 274 q9 -4 18 0" fill="none" stroke="#7d93ad" stroke-width="1.2" opacity="0.3"/>
  <rect x="203" y="240" width="10" height="24" fill="#f0e7ce"/>
  <path d="M203 240 l3 0 l0 24 l-3 0 z" fill="#fffaea" opacity="0.7"/>
  <path d="M211 242 l2 0 l0 22 l-2 0 z" fill="#9a8f74" opacity="0.6"/>
  <path d="M203 248 q-4 8 0 14 M213 252 q4 6 0 10" fill="none" stroke="#fffaea" stroke-width="2" opacity="0.5" stroke-linecap="round"/>
  <ellipse cx="208" cy="236" rx="5" ry="10" fill="#ffd98a" class="fx-flame" style="--d:.3s"/>
  <ellipse cx="208" cy="234" rx="2" ry="5" fill="#fff8e2" opacity="0.85"/>
  <g class="fx-glow" style="--d:2.4s"><ellipse cx="208" cy="278" rx="34" ry="12" fill="#ffd98a" opacity="0.12"/></g>
  <ellipse cx="208" cy="238" rx="20" ry="26" fill="#ffd98a" opacity="0.07"/>
  <ellipse cx="208" cy="300" rx="56" ry="7" fill="#ffd98a" opacity="0.09"/>
  <g fill="#e3d5ac" opacity="0.9">
    <path d="M136 292 l52 -4 l2 10 l-52 4 z"/><path d="M142 284 l50 -4 l2 8 l-50 4 z"/>
  </g>
  <path d="M136 292 l52 -4 l1 4 l-52 4 z" fill="#fdf6de" opacity="0.5"/>
  <path d="M138 300 l52 -4 l2 4 l-54 4 z" fill="#0a0705" opacity="0.4"/>
  <path d="M150 288 l30 -3 M152 292 l28 -2" stroke="#9a8f74" stroke-width="0.8" opacity="0.5"/>
  <ellipse cx="259" cy="301" rx="16" ry="4" fill="#0a0705" opacity="0.5"/>
  <rect x="248" y="284" width="22" height="16" fill="#1b2436"/>
  <path d="M248 284 l5 0 l0 16 l-5 0 z" fill="#0a0e18" opacity="0.6"/>
  <path d="M266 286 l4 0 l0 14 l-4 0 z" fill="#7d93ad" opacity="0.3"/>
  <ellipse cx="259" cy="284" rx="11" ry="4" fill="#2f3a4e"/>
  <ellipse cx="259" cy="284" rx="7" ry="2.4" fill="#0a0e18"/>
  <line x1="262" y1="284" x2="280" y2="262" stroke="#cbb98f" stroke-width="3" stroke-linecap="round"/>
  <line x1="263" y1="283" x2="279" y2="264" stroke="#f0e7ce" stroke-width="1" stroke-linecap="round" opacity="0.6"/>
  <g transform="rotate(-6 90 350)">
    <ellipse cx="90" cy="396" rx="52" ry="11" fill="#080605" opacity="0.5"/>
    <rect x="58" y="252" width="12" height="104" fill="url(#or-stage-timber)"/>
    <rect x="112" y="252" width="12" height="104" fill="url(#or-stage-timber)"/>
    <path d="M68 252 L68 356 M122 252 L122 356" stroke="#0d0906" stroke-width="2" opacity="0.5"/>
    <rect x="54" y="258" width="74" height="9" fill="#4a3524"/>
    <rect x="54" y="284" width="74" height="9" fill="#4a3524"/>
    <path d="M54 267 L128 267 M54 293 L128 293" stroke="#8b6c40" stroke-width="1.2" opacity="0.45"/>
    <path d="M54 258 L128 258 M54 284 L128 284" stroke="#100b07" stroke-width="1.2" opacity="0.5"/>
    <rect x="48" y="330" width="88" height="12" fill="url(#or-stage-timber)"/>
    <path d="M48 342 L136 342" stroke="#a3814d" stroke-width="1.4" opacity="0.5"/>
    <rect x="52" y="342" width="10" height="54" fill="#33271a"/>
    <rect x="122" y="342" width="10" height="54" fill="#33271a"/>
    <path d="M53 350 L53 396 M123 350 L123 396" stroke="#7a5c36" stroke-width="1.2" opacity="0.4"/>
    <path d="M62 336 q28 -4 60 -1" fill="none" stroke="#100b07" stroke-width="1" opacity="0.4"/>
  </g>
</g>

<!-- set dressing: the iron cot, upstage right -->
<g>
  <ellipse cx="730" cy="388" rx="112" ry="14" fill="#080605" opacity="0.5"/>
  <rect x="640" y="326" width="180" height="12" fill="url(#or-stage-iron)"/>
  <path d="M640 338 L820 338" stroke="#8d8474" stroke-width="1.4" opacity="0.5"/>
  <path d="M640 326 L820 326" stroke="#0d0b08" stroke-width="1.4" opacity="0.55"/>
  <path d="M640 326 l0 -46 l6 0 l0 46 z" fill="url(#or-stage-iron)"/>
  <path d="M814 326 l0 -38 l6 0 l0 38 z" fill="url(#or-stage-iron)"/>
  <path d="M645 280 l0 46 M819 288 l0 38" stroke="#7d7565" stroke-width="1" opacity="0.5"/>
  <g stroke="#3a352d" stroke-width="4">
    <line x1="646" y1="282" x2="700" y2="282"/><line x1="658" y1="282" x2="658" y2="326"/>
    <line x1="674" y1="282" x2="674" y2="326"/><line x1="690" y1="284" x2="690" y2="326"/>
  </g>
  <path d="M660 284 L660 326 M676 284 L676 326 M692 286 L692 326 M646 284 L700 284" stroke="#6f6858" stroke-width="1" opacity="0.45"/>
  <!-- the ticking mattress: a soft roll of striped cloth, lit along the top -->
  <path d="M646 326 q86 -22 168 0 l0 16 q-84 -18 -168 0 z" fill="url(#or-stage-tick)"/>
  <path d="M646 340 q84 -18 168 0 l0 4 q-84 -18 -168 0 z" fill="#2a3120" opacity="0.6"/>
  <g stroke="#3d4629" stroke-width="1.1" opacity="0.5" fill="none">
    <path d="M676 320 q0 12 0 20"/><path d="M712 316 q0 13 0 21"/><path d="M748 316 q0 13 0 21"/><path d="M784 320 q0 12 0 20"/>
  </g>
  <path d="M652 330 q40 -12 74 -2 l-2 10 q-36 -8 -72 2 z" fill="#e3d5ac" opacity="0.55"/>
  <path d="M654 332 q38 -11 70 -2 l-1 4 q-34 -8 -68 2 z" fill="#fdf6de" opacity="0.4"/>
  <path d="M660 338 q34 -8 62 0 l0 4 q-30 -8 -62 2 z" fill="#0a0705" opacity="0.3"/>
  <rect x="644" y="338" width="10" height="46" fill="url(#or-stage-iron)"/>
  <rect x="808" y="338" width="10" height="46" fill="url(#or-stage-iron)"/>
  <path d="M645 344 l0 40 M809 344 l0 40" stroke="#8d8474" stroke-width="1" opacity="0.45"/>
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
<!-- the boards themselves: butt joints, worn crowns, and the grain that
     only shows where the footlights rake across it -->
<path d="M-100 620 L380 388 M60 620 L412 388 M220 620 L444 388 M380 620 L476 388 M540 620 L508 388 M700 620 L540 388 M860 620 L572 388 M1020 620 L604 388" stroke="#7d6039" stroke-width="1.1" opacity="0.28"/>
<g fill="#7d6039" opacity="0.10">
  <path d="M-20 620 L60 620 L412 388 L396 388 Z"/>
  <path d="M300 620 L380 620 L476 388 L460 388 Z"/>
  <path d="M620 620 L700 620 L540 388 L524 388 Z"/>
  <path d="M940 620 L1020 620 L604 388 L588 388 Z"/>
</g>
<path d="M-60 596 L900 462 M-40 540 L790 434 M0 500 L720 416 M120 470 L680 404" stroke="#1c150e" stroke-width="1.6" opacity="0.4"/>
<path d="M-60 599 L900 465 M-40 543 L790 437 M0 503 L720 419" stroke="#8b6c40" stroke-width="0.8" opacity="0.2"/>
<rect x="0" y="386" width="1000" height="10" fill="#4a3a28" opacity="0.5"/>
<!-- upstage haze: the far boards lose contrast in the dust -->
<rect x="0" y="386" width="1000" height="120" fill="url(#or-stage-haze)"/>
<rect x="0" y="440" width="1000" height="180" fill="url(#or-stage-foot)"/>
<!-- gaffer tape over a cable run, and the spike marks it hides -->
<g opacity="0.72">
  <path d="M60 560 L262 500 L272 512 L70 574 Z" fill="#17140f"/>
  <path d="M60 560 L262 500 L264 504 L62 564 Z" fill="#4a453a" opacity="0.6"/>
  <path d="M86 552 q60 -20 130 -38" fill="none" stroke="#0a0806" stroke-width="4" opacity="0.7"/>
</g>
<g opacity="0.6">
  <path d="M700 522 L880 486 L884 494 L704 532 Z" fill="#17140f"/>
  <path d="M700 522 L880 486 L881 489 L701 526 Z" fill="#4a453a" opacity="0.55"/>
</g>
<!-- scuffs, and the arc a heavy flat has been pivoted through -->
<g fill="none" stroke="#8b6c40" opacity="0.16" stroke-linecap="round">
  <path d="M300 540 q120 -34 240 -18" stroke-width="6"/>
  <path d="M560 470 q100 -18 190 -6" stroke-width="4"/>
  <path d="M120 500 q90 -22 170 -20" stroke-width="3"/>
</g>
<g fill="#0d0906" opacity="0.22">
  <ellipse cx="470" cy="580" rx="120" ry="14"/><ellipse cx="820" cy="540" rx="90" ry="11"/>
</g>

<!-- the raking beam from the front-of-house rail, thick with house dust -->
<path d="M646 0 L790 0 L520 620 L286 620 Z" fill="url(#or-stage-beam)" class="fx-glow" style="--d:.6s"/>
<path d="M672 0 L744 0 L470 620 L358 620 Z" fill="url(#or-stage-beam2)"/>
<path d="M700 0 L716 0 L436 620 L406 620 Z" fill="#fff0c8" opacity="0.05"/>
<path d="M646 0 L658 0 L302 620 L286 620 Z" fill="#ffe6b4" opacity="0.05"/>
<path d="M778 0 L790 0 L520 620 L506 620 Z" fill="#ffe6b4" opacity="0.045"/>
<g class="fx-drift" style="--d:1.2s" fill="#ffeec4">
  <circle cx="690" cy="70" r="1.6" opacity="0.5"/><circle cx="726" cy="130" r="1.2" opacity="0.4"/>
  <circle cx="662" cy="186" r="1.8" opacity="0.45"/><circle cx="708" cy="242" r="1.3" opacity="0.5"/>
  <circle cx="620" cy="300" r="1.7" opacity="0.4"/><circle cx="590" cy="410" r="2" opacity="0.5"/>
  <circle cx="540" cy="500" r="1.6" opacity="0.45"/><circle cx="500" cy="588" r="1.9" opacity="0.45"/>
  <circle cx="486" cy="440" r="1.5" opacity="0.35"/><circle cx="596" cy="248" r="1.4" opacity="0.35"/>
</g>

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
  <path d="M949 0 l-2 620 M965 0 l2 620 M981 0 l-2 620 M995 0 l2 620" stroke="#8e3b31" stroke-width="1.4" opacity="0.35"/>
  <rect x="944" y="0" width="66" height="620" fill="url(#or-stage-nap)"/>
  <path d="M944 604 q34 -8 66 -2 l0 18 l-66 0 z" fill="#c9b48a" opacity="0.12"/>
</g>

<!-- stage left leg curtain -->
<g class="fx-sway" style="--d:1.3s;transform-origin:top center">
  <rect x="-10" y="0" width="80" height="620" fill="url(#or-stage-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="4" opacity="0.9">
    <path d="M8 0 l4 620"/><path d="M26 0 l-2 620"/><path d="M44 0 l3 620"/><path d="M62 0 l-3 620"/>
  </g>
  <!-- the nap: each fold takes a sheen down its lit shoulder -->
  <path d="M3 0 l4 620 M21 0 l-2 620 M39 0 l3 620 M57 0 l-3 620" stroke="#9c4136" stroke-width="1.6" opacity="0.38"/>
  <path d="M14 0 l3 620 M33 0 l-2 620 M51 0 l3 620" stroke="#1c0a09" stroke-width="2.4" opacity="0.4"/>
  <rect x="-10" y="0" width="80" height="620" fill="url(#or-stage-nap)"/>
  <!-- the hem, dragging on the boards, grey with stage dust -->
  <path d="M-10 596 q40 -12 80 -4 l0 28 l-80 0 z" fill="#c9b48a" opacity="0.14"/>
  <path d="M-10 606 q40 -10 80 -3" fill="none" stroke="#d8c69d" stroke-width="1.4" opacity="0.2"/>
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
  <path d="M0 0 l0 34 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0 q31 46 62 0" fill="none" stroke="#0f0605" stroke-width="3" opacity="0.55"/>
  <path d="M6 30 q28 40 56 0 M130 30 q28 40 56 0 M254 30 q28 40 56 0 M378 30 q28 40 56 0 M502 30 q28 40 56 0 M626 30 q28 40 56 0 M750 30 q28 40 56 0 M874 30 q28 40 56 0" fill="none" stroke="#8e3b31" stroke-width="1.6" opacity="0.3"/>
  <rect x="0" y="0" width="1000" height="62" fill="#000000" opacity="0.28"/>
  <rect x="0" y="0" width="1000" height="12" fill="#14110d"/>
  <rect x="0" y="10" width="1000" height="3" fill="#3d3327" opacity="0.6"/>
</g>

<!-- FOREGROUND: the footlight trough, still burning -->
<g>
  <rect x="0" y="588" width="1000" height="32" fill="#191310"/>
  <rect x="0" y="584" width="1000" height="8" fill="url(#or-stage-timber)"/>
  <path d="M0 584 L1000 584" stroke="#0a0705" stroke-width="1.6" opacity="0.6"/>
  <!-- the trough is thirty years of spilled wax and scorched tin -->
  <rect x="0" y="600" width="1000" height="20" fill="#0c0907" opacity="0.6"/>
  <path d="M0 596 q120 6 240 0 q120 -6 240 0 q120 6 240 0 q120 -6 280 0" fill="none" stroke="#3a2f22" stroke-width="1.4" opacity="0.5"/>
  <!-- pressed-tin reflectors, scorched at the throat -->
  <path d="M20 592 q28 -30 56 0 z M116 592 q28 -30 56 0 z M212 592 q28 -30 56 0 z M308 592 q28 -30 56 0 z M404 592 q28 -30 56 0 z M500 592 q28 -30 56 0 z M596 592 q28 -30 56 0 z M692 592 q28 -30 56 0 z M788 592 q28 -30 56 0 z M884 592 q28 -30 56 0 z" fill="#241b12"/>
  <path d="M24 592 q24 -25 48 0 z M120 592 q24 -25 48 0 z M216 592 q24 -25 48 0 z M312 592 q24 -25 48 0 z M408 592 q24 -25 48 0 z M504 592 q24 -25 48 0 z M600 592 q24 -25 48 0 z M696 592 q24 -25 48 0 z M792 592 q24 -25 48 0 z M888 592 q24 -25 48 0 z" fill="#6b5735" opacity="0.5"/>
  <g>
    <ellipse cx="48" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="144" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="240" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="336" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="432" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="528" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)" class="fx-flicker" style="--d:1.9s"/>
    <ellipse cx="624" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="720" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="816" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
    <ellipse cx="912" cy="592" rx="17" ry="7" fill="url(#or-stage-bulb)"/>
  </g>
  <!-- the bloom each lamp puts into the air above it -->
  <g fill="url(#or-stage-troughpool)">
    <ellipse cx="96" cy="592" rx="112" ry="54"/><ellipse cx="288" cy="592" rx="112" ry="50"/>
    <ellipse cx="480" cy="592" rx="112" ry="54"/><ellipse cx="672" cy="592" rx="112" ry="50"/>
    <ellipse cx="864" cy="592" rx="112" ry="54"/>
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
      h_keyboard: { x: 43, y: 17 },
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
  <linearGradient id="or-wings-brickface" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#4a3a24" stop-opacity="0.5"/>
    <stop offset="0.45" stop-color="#3a2d1c" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.25"/>
  </linearGradient>
  <linearGradient id="or-wings-floor" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#5a4526"/><stop offset="0.42" stop-color="#2c2116"/>
    <stop offset="1" stop-color="#14100b"/>
  </linearGradient>
  <linearGradient id="or-wings-rail" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#77572e"/><stop offset="0.4" stop-color="#4a3524"/><stop offset="1" stop-color="#20180f"/>
  </linearGradient>
  <linearGradient id="or-wings-canvas" x1="1" y1="0.1" x2="0" y2="0.9">
    <stop offset="0" stop-color="#b9a067"/><stop offset="0.42" stop-color="#7d6a40"/><stop offset="1" stop-color="#38301c"/>
  </linearGradient>
  <linearGradient id="or-wings-enamel" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#d9553f"/><stop offset="0.3" stop-color="#a8352a"/>
    <stop offset="0.78" stop-color="#6d211a"/><stop offset="1" stop-color="#43130f"/>
  </linearGradient>
  <linearGradient id="or-wings-hamper" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#a8814a"/><stop offset="0.45" stop-color="#70512c"/><stop offset="1" stop-color="#33240f"/>
  </linearGradient>
  <linearGradient id="or-wings-shaft" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.3"/>
    <stop offset="0.5" stop-color="#ffd98a" stop-opacity="0.09"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-wings-castfade" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#080604" stop-opacity="0.55"/>
    <stop offset="0.65" stop-color="#080604" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#080604" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-wings-slatechalk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#4a4d54"/><stop offset="0.5" stop-color="#2b2d31"/><stop offset="1" stop-color="#191b1e"/>
  </linearGradient>
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
<!-- the mortar sits proud of the brick, so each course keeps a lit lower lip -->
<path d="M0 42 L900 42 M0 78 L900 78 M0 114 L900 114 M0 150 L900 150 M0 186 L900 186 M0 222 L900 222 M0 258 L900 258 M0 294 L900 294 M0 330 L900 330 M0 366 L900 366 M0 402 L900 402 M0 438 L900 438 M0 474 L900 474" stroke="#6a5333" stroke-width="1" opacity="0.28"/>
<!-- bricks fire unevenly; a few are darker or redder than their neighbours -->
<g opacity="0.3">
  <rect x="120" y="114" width="120" height="34" fill="#4a3a24"/><rect x="480" y="150" width="120" height="34" fill="#3f2b1c"/>
  <rect x="660" y="256" width="120" height="34" fill="#4a3a24"/><rect x="240" y="292" width="120" height="34" fill="#452a1e"/>
  <rect x="0" y="364" width="120" height="34" fill="#4a3a24"/><rect x="540" y="400" width="120" height="34" fill="#3a2718"/>
  <rect x="780" y="76" width="120" height="34" fill="#4a3a24"/><rect x="360" y="436" width="120" height="34" fill="#452a1e"/>
</g>
<g fill="#3b2f22" opacity="0.35">
  <path d="M40 180 q30 -20 66 -6 q28 14 4 34 q-40 20 -70 -8 z"/>
  <path d="M600 300 q34 -18 62 2 q24 20 -4 34 q-40 16 -62 -10 z"/>
</g>
<!-- efflorescence, and sixty years of soot up under the grid -->
<g fill="#8f7f5c" opacity="0.10">
  <path d="M96 400 q40 -14 74 6 q22 26 -14 44 q-52 12 -74 -18 z"/>
  <path d="M712 396 q34 -12 62 6 q18 22 -12 36 q-44 10 -62 -14 z"/>
</g>
<rect x="0" y="0" width="900" height="120" fill="#0a0705" opacity="0.4"/>
<!-- the whole wall turns away from the stage light -->
<rect x="0" y="0" width="900" height="500" fill="url(#or-wings-brickface)"/>

<!-- the floor -->
<rect x="0" y="486" width="1000" height="134" fill="url(#or-wings-floor)"/>
<g stroke="#241b12" stroke-width="2" opacity="0.9">
  <line x1="0" y1="516" x2="1000" y2="516"/><line x1="0" y1="552" x2="1000" y2="552"/>
  <line x1="0" y1="594" x2="1000" y2="594"/>
</g>
<path d="M0 519 L1000 519 M0 555 L1000 555 M0 597 L1000 597" stroke="#8a6a3f" stroke-width="0.9" opacity="0.2"/>
<path d="M180 486 L164 620 M420 486 L410 620 M640 486 L648 620 M860 486 L882 620" stroke="#14100b" stroke-width="1.6" opacity="0.5"/>
<!-- the wedge of stage light thrown across the boards -->
<path d="M1000 492 L1000 620 L120 620 L560 492 Z" fill="url(#or-wings-shaft)"/>
<g fill="#c9b48a" opacity="0.08">
  <ellipse cx="700" cy="560" rx="180" ry="30"/><ellipse cx="440" cy="600" rx="150" ry="22"/>
</g>
<rect x="0" y="482" width="1000" height="7" fill="#3b2f22" opacity="0.7"/>
<path d="M0 482 L1000 482" stroke="#6a5333" stroke-width="1.4" opacity="0.4"/>

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
<!-- sandbags: filled ticking, seized at the neck, seams whipped by hand -->
<g class="fx-sway" style="--d:.9s;transform-origin:top center">
  <path d="M300 220 q-22 8 -22 40 q0 34 22 42 q22 -8 22 -42 q0 -32 -22 -40 z" fill="#3b3220"/>
  <path d="M300 224 q-16 8 -16 36 q0 28 16 36 q16 -8 16 -36 q0 -28 -16 -36 z" fill="url(#or-wings-canvas)"/>
  <path d="M300 224 q16 8 16 36 q0 28 -16 36 q6 -14 6 -36 q0 -22 -6 -36 z" fill="#cbb185" opacity="0.32"/>
  <path d="M280 250 q20 8 40 0 M280 278 q20 8 40 0" fill="none" stroke="#3c2f1c" stroke-width="2.4" opacity="0.9"/>
  <path d="M281 252 q20 8 39 0 M281 280 q20 8 39 0" fill="none" stroke="#c2ab7c" stroke-width="0.9" opacity="0.35"/>
  <path d="M304 226 l0 74 M312 232 l0 60" stroke="#5d4c2c" stroke-width="1" opacity="0.45"/>
  <path d="M286 236 l6 6 M286 246 l6 6 M286 256 l6 6 M286 266 l6 6 M286 276 l6 6 M286 286 l6 6" stroke="#2c2416" stroke-width="1.2" opacity="0.5"/>
  <path d="M292 220 q8 -12 16 0" fill="none" stroke="#4a3524" stroke-width="4"/>
  <ellipse cx="300" cy="220" rx="9" ry="4" fill="#2c2416" opacity="0.6"/>
</g>
<g class="fx-sway" style="--d:2.2s;transform-origin:top center">
  <path d="M368 180 q-18 6 -18 32 q0 28 18 34 q18 -6 18 -34 q0 -26 -18 -32 z" fill="#332b1b"/>
  <path d="M368 184 q-13 6 -13 29 q0 22 13 28 q13 -6 13 -28 q0 -23 -13 -29 z" fill="url(#or-wings-canvas)"/>
  <path d="M368 184 q13 6 13 29 q0 22 -13 28 q5 -12 5 -28 q0 -18 -5 -29 z" fill="#c2a97c" opacity="0.26"/>
  <path d="M352 206 q16 6 32 0 M352 228 q16 6 32 0" fill="none" stroke="#3c2f1c" stroke-width="2" opacity="0.9"/>
  <path d="M356 190 l5 5 M356 200 l5 5 M356 212 l5 5 M356 224 l5 5 M356 234 l5 5" stroke="#2c2416" stroke-width="1.1" opacity="0.45"/>
</g>
<g>
  <path d="M484 140 q-15 6 -15 27 q0 23 15 28 q15 -5 15 -28 q0 -21 -15 -27 z" fill="#4a3d26"/>
  <path d="M484 143 q11 5 11 24 q0 19 -11 24 q4 -11 4 -24 q0 -14 -4 -24 z" fill="#a08b5c" opacity="0.3"/>
  <path d="M471 162 q13 5 26 0 M471 182 q13 5 26 0" fill="none" stroke="#332816" stroke-width="2" opacity="0.9"/>
  <path d="M474 150 l4 4 M474 162 l4 4 M474 176 l4 4 M474 186 l4 4" stroke="#241d11" stroke-width="1" opacity="0.4"/>
</g>
<g>
  <path d="M734 120 q-13 5 -13 24 q0 20 13 24 q13 -4 13 -24 q0 -19 -13 -24 z" fill="#403524"/>
  <path d="M734 123 q10 5 10 21 q0 17 -10 21 q4 -10 4 -21 q0 -12 -4 -21 z" fill="#8e7c53" opacity="0.28"/>
  <path d="M723 140 q11 4 22 0 M723 158 q11 4 22 0" fill="none" stroke="#2b2317" stroke-width="2"/>
</g>

<!-- THE FLY RAIL: pin rail, belaying pins, coiled rope -->
<g>
  <!-- the rail throws its shadow away from the stage, up the brick -->
  <path d="M-10 246 L290 246 L308 236 L308 288 L290 288 Z" fill="#080604" opacity="0.28"/>
  <rect x="-10" y="258" width="300" height="18" rx="4" fill="url(#or-wings-rail)"/>
  <rect x="-10" y="258" width="300" height="5" fill="#6a4d2a"/>
  <path d="M-10 260 L290 260" stroke="#a8814a" stroke-width="1.2" opacity="0.4"/>
  <path d="M-10 272 L290 272 M-10 267 L200 267" stroke="#241a0f" stroke-width="1.1" opacity="0.5"/>
  <rect x="-10" y="276" width="300" height="7" fill="#1b140d"/>
  <!-- oak split along the grain at the near end -->
  <path d="M120 258 q60 3 130 1 M40 264 q70 2 130 0" fill="none" stroke="#2f2314" stroke-width="1" opacity="0.45"/>
  <g fill="#3a352d">
    <rect x="24" y="272" width="9" height="42" rx="4"/><rect x="60" y="272" width="9" height="42" rx="4"/>
    <rect x="96" y="272" width="9" height="42" rx="4"/><rect x="132" y="272" width="9" height="42" rx="4"/>
    <rect x="168" y="272" width="9" height="42" rx="4"/><rect x="204" y="272" width="9" height="42" rx="4"/>
    <rect x="240" y="272" width="9" height="42" rx="4"/>
  </g>
  <path d="M31 276 l0 34 M67 276 l0 34 M103 276 l0 34 M139 276 l0 34 M175 276 l0 34 M211 276 l0 34 M247 276 l0 34" stroke="#8e8a7d" stroke-width="1.4" opacity="0.5"/>
  <g fill="#5b564b">
    <circle cx="28" cy="316" r="7"/><circle cx="64" cy="316" r="7"/><circle cx="100" cy="316" r="7"/>
    <circle cx="136" cy="316" r="7"/><circle cx="172" cy="316" r="7"/><circle cx="208" cy="316" r="7"/>
    <circle cx="244" cy="316" r="7"/>
  </g>
  <g fill="#95907f" opacity="0.55">
    <circle cx="30" cy="313" r="2.4"/><circle cx="66" cy="313" r="2.4"/><circle cx="102" cy="313" r="2.4"/>
    <circle cx="138" cy="313" r="2.4"/><circle cx="174" cy="313" r="2.4"/><circle cx="210" cy="313" r="2.4"/>
    <circle cx="246" cy="313" r="2.4"/>
  </g>
  <!-- hemp: three-strand lay, catching the stage light down one side -->
  <g fill="none" stroke="#5f5031" stroke-width="5.5" opacity="0.9">
    <path d="M28 290 q-22 24 -6 44 q16 20 -4 40" class="fx-sway" style="--d:.2s;transform-origin:top center"/>
    <path d="M100 292 q-24 22 -8 44 q18 22 -6 42" class="fx-sway" style="--d:1.5s;transform-origin:top center"/>
    <path d="M172 292 q22 24 4 46 q-18 22 2 40" class="fx-sway" style="--d:2.3s;transform-origin:top center"/>
    <path d="M244 290 q24 26 6 48 q-16 20 4 38" class="fx-sway" style="--d:2.9s;transform-origin:top center"/>
  </g>
  <g fill="none" stroke="#a89056" stroke-width="1.8" opacity="0.55">
    <path d="M30 290 q-22 24 -6 44 q16 20 -4 40"/><path d="M102 292 q-24 22 -8 44 q18 22 -6 42"/>
    <path d="M174 292 q22 24 4 46 q-18 22 2 40"/><path d="M246 290 q24 26 6 48 q-16 20 4 38"/>
  </g>
</g>

<!-- THE STAGE-DOOR KEY BOARD: numbered hooks, one ring missing, one key too many -->
<g>
  <path d="M378 64 L384 56 L384 152 L378 144 Z" fill="#080604" opacity="0.45"/>
  <rect x="384" y="56" width="82" height="96" rx="3" fill="url(#or-wings-wood)"/>
  <path d="M464 58 L464 150 M386 56 L464 56" stroke="#a8814a" stroke-width="1.6" opacity="0.4"/>
  <path d="M384 150 L466 150 M386 58 L386 150" stroke="#1b1209" stroke-width="1.6" opacity="0.6"/>
  <rect x="390" y="62" width="70" height="84" fill="url(#or-wings-rail)"/>
  <path d="M392 72 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M410 72 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M428 72 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M446 72 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M392 112 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M410 112 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M428 112 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z M446 112 l5 0 l0 9 q0 4 4 4 l0 4 q-9 0 -9 -8 z" fill="#3a352d"/>
  <path d="M393 73 l0 12 M411 73 l0 12 M429 73 l0 12 M447 73 l0 12 M393 113 l0 12 M411 113 l0 12 M429 113 l0 12 M447 113 l0 12" stroke="#8e8a7d" stroke-width="1.1" opacity="0.5"/>
  <path d="M393 93 a5.5 5.5 0 1 0 11 0 a5.5 5.5 0 1 0 -11 0 M398.5 98.5 L398.5 109 M411 93 a5.5 5.5 0 1 0 11 0 a5.5 5.5 0 1 0 -11 0 M416.5 98.5 L416.5 109 M447 93 a5.5 5.5 0 1 0 11 0 a5.5 5.5 0 1 0 -11 0 M452.5 98.5 L452.5 109 M393 133 a5.5 5.5 0 1 0 11 0 a5.5 5.5 0 1 0 -11 0 M398.5 138.5 L398.5 143 M411 132 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M417 138 L417 145" fill="none" stroke="#8a6f3c" stroke-width="2.2"/>
  <path d="M398.5 105 l5 0 l0 3 l-5 0 z M398.5 109 l4 0 l0 3 l-4 0 z M416.5 105 l5 0 l0 3 l-5 0 z M452.5 105 l4 0 l0 3 l-4 0 z M452.5 109 l5 0 l0 3 l-5 0 z M398.5 141 l4 0 l0 3 l-4 0 z M417 140 l6 0 l0 3 l-6 0 z M417 145 l5 0 l0 3 l-5 0 z" fill="#8a6f3c"/>
  <path d="M395 90 q4 -3 8 0 M413 90 q4 -3 8 0 M449 90 q4 -3 8 0 M395 130 q4 -3 8 0 M413 129 q5 -3 9 0" fill="none" stroke="#f0dba2" stroke-width="1.1" opacity="0.65"/>
  <path d="M423 134 L431 130" stroke="#8d7c62" stroke-width="1.2" opacity="0.9"/>
  <rect x="430" y="124" width="24" height="14" rx="2" fill="#e8dcb8" transform="rotate(-6 442 131)"/>
  <path d="M435 129 l14 0 M435 133 l11 0" stroke="#5b564b" stroke-width="1.4" opacity="0.75" transform="rotate(-6 442 131)"/>
  <rect x="384" y="56" width="82" height="96" rx="3" fill="url(#or-wings-brickface)" opacity="0.5"/>
</g>

<!-- THE CALL BOARD: chalked calls for the evening -->
<g>
  <path d="M600 68 L616 60 L616 244 L600 236 Z" fill="#080604" opacity="0.4"/>
  <rect x="612" y="60" width="228" height="176" rx="4" fill="url(#or-wings-rail)"/>
  <path d="M840 62 L840 234 M614 60 L838 60" stroke="#a8814a" stroke-width="1.6" opacity="0.4"/>
  <path d="M612 234 L840 234 M614 62 L614 234" stroke="#1b1209" stroke-width="1.6" opacity="0.6"/>
  <rect x="620" y="68" width="212" height="160" fill="url(#or-wings-slatechalk)"/>
  <rect x="620" y="68" width="212" height="6" fill="#4a4d54" opacity="0.5"/>
  <path d="M620 68 L620 228" stroke="#0e0f11" stroke-width="4" opacity="0.55"/>
  <!-- the ghosts of last week's calls, sponged off but never quite gone -->
  <g fill="#f0e7ce" opacity="0.05">
    <rect x="628" y="96" width="176" height="10"/><rect x="628" y="152" width="150" height="10"/>
    <rect x="644" y="208" width="160" height="10"/>
  </g>
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
  <path d="M646 190 q56 16 120 2" fill="none" stroke="#f0e7ce" stroke-width="9" opacity="0.07"/>
  <!-- chalk dust settled along the bottom rail -->
  <path d="M620 220 q106 -8 212 0 l0 8 l-212 0 z" fill="#f0e7ce" opacity="0.12"/>
  <g fill="#9b7a3f">
    <circle cx="622" cy="70" r="5"/><circle cx="830" cy="70" r="5"/>
    <circle cx="622" cy="226" r="5"/><circle cx="830" cy="226" r="5"/>
  </g>
  <g fill="#f0dba2" opacity="0.6">
    <circle cx="623" cy="68" r="1.8"/><circle cx="831" cy="68" r="1.8"/>
    <circle cx="623" cy="224" r="1.8"/><circle cx="831" cy="224" r="1.8"/>
  </g>
  <rect x="700" y="240" width="52" height="10" rx="4" fill="url(#or-wings-rail)"/>
  <rect x="716" y="244" width="18" height="12" rx="3" fill="#f0e7ce" opacity="0.85"/>
  <path d="M732 244 l2 0 l0 12 l-2 0 z" fill="#8d8371" opacity="0.7"/>
  <path d="M716 244 l3 0 l0 12 l-3 0 z" fill="#ffffff" opacity="0.4"/>
</g>

<!-- MABEL FINCH, guarding her table -->
<g>
  <ellipse cx="527" cy="424" rx="66" ry="10" fill="#080604" opacity="0.4"/>
  <path d="M470 424 q56 -14 112 0 l0 -66 q-6 -60 -56 -64 q-50 4 -56 64 z" fill="#2b2820"/>
  <!-- the stage light finds one shoulder and the edge of her jaw -->
  <path d="M582 424 l0 -66 q-4 -46 -32 -60 l-6 6 q26 16 30 56 l2 64 z" fill="#d9a441" opacity="0.22"/>
  <path d="M549 288 q10 6 12 20 l-6 2 q-2 -12 -10 -18 z" fill="#ffd98a" opacity="0.3"/>
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
  <ellipse cx="580" cy="474" rx="270" ry="16" fill="#080604" opacity="0.45"/>
  <rect x="352" y="396" width="470" height="16" rx="3" fill="url(#or-wings-rail)"/>
  <path d="M352 398 L822 398" stroke="#a8814a" stroke-width="1.4" opacity="0.4"/>
  <rect x="352" y="412" width="470" height="10" fill="#33271a"/>
  <path d="M352 412 L822 412 L840 470 L336 470 Z" fill="#4a3524"/>
  <path d="M352 412 L822 412 L830 436 L344 436 Z" fill="#584129"/>
  <!-- the top is scarred: forty years of props set down in the dark -->
  <path d="M370 428 q120 -6 240 -2 M400 448 q160 -8 320 -4 M360 440 q100 -5 200 -3" fill="none" stroke="#33240f" stroke-width="1.2" opacity="0.4"/>
  <path d="M372 424 q120 -6 240 -2 M402 444 q160 -8 320 -4" fill="none" stroke="#8a6a3f" stroke-width="0.9" opacity="0.28"/>
  <rect x="352" y="412" width="470" height="58" fill="url(#or-wings-castfade)" opacity="0.6"/>
  <g stroke="#3b2f22" stroke-width="2" opacity="0.8">
    <line x1="420" y1="412" x2="412" y2="470"/><line x1="500" y1="412" x2="496" y2="470"/>
    <line x1="580" y1="412" x2="582" y2="470"/><line x1="660" y1="412" x2="668" y2="470"/>
    <line x1="740" y1="412" x2="754" y2="470"/>
  </g>
  <!-- each place is taped out: the tape is dull, its torn ends fibrous -->
  <g fill="none" stroke="#e3d5ac" stroke-width="3" opacity="0.75">
    <rect x="378" y="420" width="52" height="34"/><rect x="446" y="420" width="52" height="34"/>
    <rect x="514" y="420" width="52" height="34"/><rect x="582" y="420" width="52" height="34"/>
    <rect x="650" y="420" width="52" height="34"/><rect x="718" y="420" width="52" height="34"/>
  </g>
  <g fill="none" stroke="#fdf6de" stroke-width="1" opacity="0.4">
    <path d="M378 419 L430 419"/><path d="M446 419 L498 419"/><path d="M514 419 L566 419"/>
    <path d="M582 419 L634 419"/><path d="M650 419 L702 419"/><path d="M718 419 L770 419"/>
  </g>
  <g fill="none" stroke="#0e0a06" stroke-width="1" opacity="0.45">
    <path d="M378 456 L430 456"/><path d="M446 456 L498 456"/><path d="M514 456 L566 456"/>
    <path d="M582 456 L634 456"/><path d="M650 456 L702 456"/><path d="M718 456 L770 456"/>
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
  <!-- every prop lays its own shadow away from the stage -->
  <g fill="#0a0705" opacity="0.4">
    <ellipse cx="462" cy="453" rx="16" ry="4"/><ellipse cx="536" cy="452" rx="20" ry="4"/>
    <ellipse cx="600" cy="461" rx="18" ry="4"/><ellipse cx="670" cy="451" rx="16" ry="4"/>
    <ellipse cx="740" cy="452" rx="18" ry="4"/>
  </g>
  <g>
    <path d="M456 448 l24 0 l-5 -14 q-7 -8 -14 0 z" fill="#9b7a3f"/>
    <path d="M470 448 l10 0 l-5 -14 q-3 -4 -7 -2 z" fill="#c8a45c" opacity="0.6"/>
    <path d="M456 448 l6 0 l1 -14 q2 -5 5 -6 q-6 3 -8 8 z" fill="#4e3c17" opacity="0.6"/>
    <rect x="464" y="448" width="8" height="4" fill="#9b7a3f"/>
    <ellipse cx="468" cy="452" rx="12" ry="3" fill="#7d6132"/>
  </g>
  <g>
    <path d="M520 450 q18 -30 44 -12 l-42 16 z" fill="#7a5a6e"/>
    <path d="M544 438 q12 -4 20 0 l-22 8 z" fill="#a888a0" opacity="0.5"/>
    <g stroke="#c2a9b6" stroke-width="1.4" opacity="0.7">
      <line x1="522" y1="448" x2="546" y2="432"/><line x1="526" y1="450" x2="552" y2="437"/>
    </g>
    <path d="M521 449 q16 -26 40 -12" fill="none" stroke="#3b2a36" stroke-width="1" opacity="0.6"/>
  </g>
  <g>
    <path d="M588 444 l30 0 l0 7 l-10 0 l-4 8 l-8 0 l0 -8 l-8 0 z" fill="#3a352d"/>
    <path d="M610 444 l8 0 l0 7 l-8 0 z" fill="#8e8a7d" opacity="0.5"/>
    <path d="M588 444 l30 0 l0 2 l-30 0 z" fill="#0e0c08" opacity="0.6"/>
    <rect x="616" y="442" width="14" height="6" rx="2" fill="#5b564b"/>
    <path d="M617 443 l12 0" stroke="#9b968a" stroke-width="1" opacity="0.6"/>
  </g>
  <g>
    <rect x="672" y="426" width="6" height="22" fill="#9b7a3f"/>
    <path d="M677 426 l1 22 l-1 0 z" fill="#d8b26a" opacity="0.6"/>
    <ellipse cx="675" cy="450" rx="12" ry="4" fill="#9b7a3f"/>
    <ellipse cx="675" cy="449" rx="7" ry="1.8" fill="#d8b26a" opacity="0.5"/>
    <rect x="671" y="416" width="8" height="12" fill="#f0e7ce"/>
    <path d="M677 416 l2 0 l0 12 l-2 0 z" fill="#9a9078" opacity="0.6"/>
  </g>
  <g>
    <rect x="732" y="436" width="26" height="14" rx="3" fill="#5d1f18"/>
    <rect x="732" y="436" width="26" height="5" rx="2" fill="#7d2d24"/>
    <path d="M754 437 l3 0 l0 12 l-3 0 z" fill="#b7473a" opacity="0.5"/>
    <path d="M733 448 l24 0" stroke="#320e0a" stroke-width="1.4" opacity="0.6"/>
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
  <path d="M282 548 L272 548 L200 560 L268 560 Z" fill="#080604" opacity="0.4"/>
  <path d="M272 466 l76 0 l-12 82 l-52 0 z" fill="url(#or-wings-enamel)"/>
  <path d="M272 466 l76 0 l-3 20 l-70 0 z" fill="#c04434"/>
  <!-- enamel: one hard specular down the lit side, and chips through to tin -->
  <path d="M332 470 q8 26 2 76 l-9 0 q7 -50 -1 -76 z" fill="#f0846c" opacity="0.4"/>
  <path d="M336 471 q7 24 1 74" fill="none" stroke="#ffd0c2" stroke-width="2" opacity="0.5"/>
  <path d="M276 470 q-2 30 6 76 l6 0 q-8 -46 -6 -76 z" fill="#2d0d0a" opacity="0.5"/>
  <g fill="#9b9384" opacity="0.3">
    <path d="M302 504 q4 -2 6 1 q-3 3 -7 1 z"/><path d="M322 526 q3 -1 5 1 q-3 3 -6 1 z"/>
    <path d="M290 532 q3 -1 4 1 q-2 2 -5 1 z"/>
  </g>
  <path d="M336 486 l-6 42 l-40 0 l-6 -42 z" fill="#8b291f" opacity="0.4"/>
  <ellipse cx="310" cy="466" rx="38" ry="11" fill="url(#or-wings-sand)"/>
  <ellipse cx="310" cy="466" rx="31" ry="8" fill="#b8a271"/>
  <!-- sand, heaped and pocked -->
  <g fill="#8a7648" opacity="0.7">
    <ellipse cx="296" cy="466" rx="10" ry="3"/><ellipse cx="322" cy="468" rx="9" ry="3"/>
  </g>
  <g fill="#e0cfa2" opacity="0.45">
    <ellipse cx="318" cy="462" rx="9" ry="2.4"/><ellipse cx="302" cy="470" rx="7" ry="2"/>
  </g>
  <g fill="#5f5030" opacity="0.5">
    <circle cx="292" cy="464" r="1.6"/><circle cx="330" cy="465" r="1.4"/><circle cx="308" cy="471" r="1.5"/>
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
  <rect x="62" y="452" width="180" height="118" rx="8" fill="url(#or-wings-hamper)"/>
  <rect x="62" y="452" width="180" height="14" rx="6" fill="#96703e"/>
  <path d="M64 454 L240 454" stroke="#c09456" stroke-width="1.4" opacity="0.4"/>
  <g fill="none" stroke="#523a1e" stroke-width="2.6" opacity="0.85">
    <path d="M66 480 l172 0"/><path d="M66 500 l172 0"/><path d="M66 520 l172 0"/><path d="M66 540 l172 0"/><path d="M66 558 l172 0"/>
  </g>
  <!-- willow: each row of weave takes the light on its upper round -->
  <path d="M66 478 l172 0 M66 498 l172 0 M66 518 l172 0 M66 538 l172 0 M66 556 l172 0" stroke="#c39558" stroke-width="0.9" opacity="0.3"/>
  <g stroke="#a8814a" stroke-width="2" opacity="0.6">
    <line x1="96" y1="466" x2="96" y2="568"/><line x1="150" y1="466" x2="150" y2="568"/><line x1="204" y1="466" x2="204" y2="568"/>
  </g>
  <rect x="62" y="452" width="180" height="118" rx="8" fill="url(#or-wings-castfade)" opacity="0.5"/>
  <rect x="128" y="446" width="44" height="12" rx="4" fill="#4a3524"/>
  <path d="M130 447 l40 0" stroke="#8a6a3f" stroke-width="1.2" opacity="0.5"/>
  <g fill="#3a352d">
    <rect x="72" y="500" width="12" height="20" rx="3"/><rect x="220" y="500" width="12" height="20" rx="3"/>
  </g>
  <path d="M229 502 l0 16 M81 502 l0 16" stroke="#8e8a7d" stroke-width="1.2" opacity="0.5"/>
  <!-- a corner stove in and re-lashed with cord -->
  <path d="M62 552 q14 8 10 18" fill="none" stroke="#33240f" stroke-width="3" opacity="0.7"/>
  <path d="M226 456 q10 12 8 26" fill="none" stroke="#c09456" stroke-width="1.6" opacity="0.35"/>
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
<!-- the air by the doorway is thick: dust off the flown scenery -->
<path d="M812 0 L1000 0 L1000 620 L760 620 Z" fill="#d9a441" opacity="0.05"/>
<g class="fx-drift-slow" style="--d:1.4s" fill="#ffeec4">
  <circle cx="880" cy="90" r="1.8" opacity="0.4"/><circle cx="932" cy="176" r="1.3" opacity="0.35"/>
  <circle cx="858" cy="254" r="1.6" opacity="0.4"/><circle cx="912" cy="330" r="1.2" opacity="0.3"/>
  <circle cx="872" cy="410" r="1.9" opacity="0.35"/><circle cx="946" cy="248" r="1.4" opacity="0.3"/>
  <circle cx="896" cy="146" r="1.2" opacity="0.3"/><circle cx="934" cy="470" r="1.5" opacity="0.3"/>
</g>

<rect width="1000" height="620" fill="url(#or-wings-vig)"/>
`,
  },

  dressing: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_door: { x: 20, y: 62 },
      h_vanity: { x: 43, y: 68 },
      h_compartment: { x: 59, y: 51 },
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
  <radialGradient id="or-dress-paperlit" cx="0.49" cy="0.32" r="0.58">
    <stop offset="0" stop-color="#a37b3f" stop-opacity="0.34"/>
    <stop offset="0.55" stop-color="#7a5a2c" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.22"/>
  </radialGradient>
  <radialGradient id="or-dress-pool" cx="0.49" cy="0" r="0.9">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.22"/>
    <stop offset="0.55" stop-color="#d9a441" stop-opacity="0.07"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="or-dress-woodlit" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7d5c33"/><stop offset="0.34" stop-color="#4a3524"/><stop offset="1" stop-color="#1d150d"/>
  </linearGradient>
  <linearGradient id="or-dress-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8ce8a"/><stop offset="0.28" stop-color="#b08d43"/><stop offset="1" stop-color="#5b451c"/>
  </linearGradient>
  <linearGradient id="or-dress-hidelit" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#7b5834"/><stop offset="0.42" stop-color="#54391f"/><stop offset="1" stop-color="#2a1c0f"/>
  </linearGradient>
  <linearGradient id="or-dress-wax" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fbf4de"/><stop offset="0.3" stop-color="#e3d5ac"/>
    <stop offset="0.72" stop-color="#b7a880"/><stop offset="1" stop-color="#7b7053"/>
  </linearGradient>
  <linearGradient id="or-dress-castL" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#080604" stop-opacity="0.5"/>
    <stop offset="0.7" stop-color="#080604" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#080604" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-dress-castR" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#080604" stop-opacity="0.5"/>
    <stop offset="0.7" stop-color="#080604" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#080604" stop-opacity="0"/>
  </linearGradient>
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
<!-- the paper is old and has taken damp above the skirting -->
<g fill="#0f0a06" opacity="0.22">
  <path d="M0 400 q60 -26 130 -8 q54 26 -8 62 q-80 22 -122 -14 z"/>
  <path d="M860 372 q54 -22 108 -2 q42 24 -12 50 q-70 18 -100 -14 z"/>
</g>
<g fill="#8a6a3f" opacity="0.08">
  <path d="M240 120 q50 -20 96 -4 q34 22 -14 42 q-64 16 -86 -14 z"/>
  <path d="M700 108 q44 -16 84 0 q30 20 -12 36 q-58 14 -76 -12 z"/>
</g>
<rect width="1000" height="480" fill="url(#or-dress-paperlit)"/>
<rect x="0" y="0" width="1000" height="26" fill="#241b12"/>
<rect x="0" y="26" width="1000" height="7" fill="#4a3524"/>
<path d="M0 26 L1000 26" stroke="#8a6a3f" stroke-width="1.4" opacity="0.4"/>
<path d="M0 33 L1000 33" stroke="#0a0705" stroke-width="2" opacity="0.5"/>
<rect x="0" y="452" width="1000" height="26" fill="#241b12"/>
<rect x="0" y="452" width="1000" height="6" fill="#4a3524"/>
<path d="M0 452 L1000 452" stroke="#8a6a3f" stroke-width="1.4" opacity="0.35"/>
<path d="M0 476 L1000 476" stroke="#000000" stroke-width="2.4" opacity="0.5"/>
<rect x="0" y="478" width="1000" height="142" fill="#1d160f"/>
<g stroke="#2a2016" stroke-width="2">
  <line x1="0" y1="506" x2="1000" y2="506"/><line x1="0" y1="544" x2="1000" y2="544"/>
  <line x1="0" y1="588" x2="1000" y2="588"/>
</g>
<path d="M0 509 L1000 509 M0 547 L1000 547 M0 591 L1000 591" stroke="#6a5333" stroke-width="0.9" opacity="0.22"/>
<path d="M170 478 L156 620 M420 478 L412 620 M620 478 L630 620 M840 478 L866 620" stroke="#120d08" stroke-width="1.6" opacity="0.6"/>
<!-- the pool the mirror lays on the boards, and its reflection of the frame -->
<rect x="0" y="478" width="1000" height="142" fill="url(#or-dress-pool)"/>
<g fill="#ffd98a" opacity="0.05">
  <path d="M372 478 L610 478 L672 620 L310 620 Z"/>
</g>
<g fill="#c9b48a" opacity="0.05">
  <ellipse cx="490" cy="536" rx="190" ry="26"/><ellipse cx="720" cy="600" rx="180" ry="22"/>
</g>
<rect width="1000" height="620" fill="url(#or-dress-glow)"/>

<!-- the door, standing open on a black corridor -->
<g>
  <rect x="10" y="46" width="132" height="424" fill="#14110d"/>
  <rect x="10" y="46" width="132" height="424" fill="#000000" opacity="0.55"/>
  <rect x="4" y="40" width="146" height="10" fill="#4a3524"/>
  <rect x="4" y="40" width="10" height="430" fill="#4a3524"/>
  <rect x="140" y="40" width="12" height="430" fill="#3b2f22"/>
  <path d="M148 42 L148 468" stroke="#8a6a3f" stroke-width="1.6" opacity="0.5"/>
  <path d="M5 42 L5 468" stroke="#241b12" stroke-width="1.4" opacity="0.6"/>
  <path d="M96 60 L142 46 L142 470 L96 458 Z" fill="url(#or-dress-hidelit)"/>
  <path d="M96 60 L142 46 L142 470 L96 458 Z" fill="url(#or-dress-castL)" opacity="0.7"/>
  <g fill="none" stroke="#2a2018" stroke-width="3">
    <path d="M108 92 L134 84 L134 200 L108 196 Z"/><path d="M108 232 L134 226 L134 356 L108 352 Z"/>
  </g>
  <path d="M136 84 L136 200 M136 226 L136 356" stroke="#a3814d" stroke-width="1.4" opacity="0.45"/>
  <path d="M108 92 L134 84 M108 232 L134 226" stroke="#100b07" stroke-width="1.6" opacity="0.55"/>
  <circle cx="104" cy="270" r="6" fill="url(#or-dress-brass)"/>
  <circle cx="103" cy="268" r="2.2" fill="#fbeec2" opacity="0.7"/>
  <ellipse cx="106" cy="277" rx="7" ry="3" fill="#0a0705" opacity="0.5"/>
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
  <ellipse cx="252" cy="476" rx="120" ry="14" fill="#080604" opacity="0.5"/>
  <rect x="162" y="312" width="180" height="16" rx="3" fill="url(#or-dress-woodlit)"/>
  <path d="M164 313 L340 313" stroke="#a3814d" stroke-width="1.4" opacity="0.5"/>
  <rect x="168" y="328" width="168" height="146" fill="#33271a"/>
  <rect x="168" y="328" width="168" height="146" fill="url(#or-dress-castL)" opacity="0.6"/>
  <!-- top drawer, gaping; the light finds only its front lip -->
  <path d="M148 340 L322 340 L322 384 L148 384 Z" fill="url(#or-dress-woodlit)"/>
  <path d="M148 340 L322 340 L314 332 L156 332 Z" fill="#5c4327"/>
  <path d="M156 333 L314 333" stroke="#a3814d" stroke-width="1.2" opacity="0.5"/>
  <path d="M148 382 L322 382" stroke="#100b07" stroke-width="2" opacity="0.6"/>
  <rect x="154" y="346" width="162" height="30" fill="#1b140d"/>
  <path d="M154 346 L316 346 L316 352 L154 352 Z" fill="#000000" opacity="0.5"/>
  <g fill="#e3d5ac">
    <path d="M170 344 l40 -6 l4 22 l-40 8 z"/><path d="M216 342 l38 -4 l3 20 l-38 6 z"/>
    <path d="M266 346 l40 -6 l4 20 l-40 6 z"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.5" opacity="0.9">
    <line x1="176" y1="350" x2="206" y2="346"/><line x1="177" y1="356" x2="207" y2="352"/>
    <line x1="222" y1="348" x2="250" y2="345"/><line x1="272" y1="352" x2="302" y2="348"/>
  </g>
  <ellipse cx="247" cy="338" rx="14" ry="4" fill="url(#or-dress-brass)"/>
  <ellipse cx="247" cy="337" rx="8" ry="1.6" fill="#fbeec2" opacity="0.5"/>
  <!-- second drawer, not quite shut -->
  <path d="M158 396 L340 396 L340 428 L158 428 Z" fill="url(#or-dress-woodlit)"/>
  <path d="M158 396 L340 396" stroke="#a3814d" stroke-width="1.4" opacity="0.45"/>
  <rect x="164" y="400" width="170" height="10" fill="#1b140d"/>
  <ellipse cx="249" cy="414" rx="14" ry="4" fill="url(#or-dress-brass)"/>
  <ellipse cx="249" cy="413" rx="8" ry="1.6" fill="#fbeec2" opacity="0.45"/>
  <!-- third drawer, closed -->
  <rect x="176" y="436" width="154" height="32" fill="url(#or-dress-woodlit)"/>
  <path d="M176 436 L330 436" stroke="#8a6a3f" stroke-width="1.2" opacity="0.4"/>
  <ellipse cx="253" cy="452" rx="14" ry="4" fill="url(#or-dress-brass)"/>
  <ellipse cx="253" cy="451" rx="8" ry="1.6" fill="#fbeec2" opacity="0.4"/>
  <!-- blotter on top, a torn corner still clamped under the bar -->
  <rect x="186" y="298" width="130" height="16" rx="2" fill="#5d1f18"/>
  <path d="M186 298 L316 298" stroke="#8e3327" stroke-width="1.4" opacity="0.6"/>
  <path d="M188 312 L314 312" stroke="#2c0d0a" stroke-width="1.4" opacity="0.6"/>
  <g fill="#3a0f0b" opacity="0.4">
    <path d="M206 302 q22 -4 42 2 q-20 6 -44 2 z"/><path d="M262 304 q18 -3 34 2 q-16 5 -36 1 z"/>
  </g>
  <rect x="192" y="292" width="118" height="8" fill="#3a2418"/>
  <path d="M244 288 l24 -3 l3 14 l-24 3 z" fill="#f0e7ce"/>
  <path d="M244 288 l24 -3 l1 5 l-24 3 z" fill="#cbb98f"/>
  <!-- the jewel case, unopened -->
  <g>
    <ellipse cx="314" cy="303" rx="30" ry="5" fill="#080604" opacity="0.45"/>
    <rect x="288" y="278" width="52" height="24" rx="4" fill="#5d1f18"/>
    <path d="M288 278 q26 -16 52 0 z" fill="#7d2d24"/>
    <path d="M292 274 q22 -12 44 0" fill="none" stroke="#c0705f" stroke-width="1.6" opacity="0.4"/>
    <path d="M288 296 l52 0 l0 4 q-26 3 -52 0 z" fill="#2c0d0a" opacity="0.5"/>
    <rect x="308" y="292" width="12" height="8" rx="2" fill="url(#or-dress-brass)"/>
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
  <rect x="358" y="58" width="266" height="280" rx="6" fill="#4a3524"/>
  <rect x="368" y="68" width="246" height="260" rx="4" fill="#7d5f34"/>
  <path d="M368 70 L614 70 M370 68 L370 328" stroke="#c49a52" stroke-width="2" opacity="0.45"/>
  <path d="M368 326 L614 326 M612 68 L612 328" stroke="#2a1c0d" stroke-width="2" opacity="0.5"/>
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
  <!-- the silvering has gone at the edges: black blooms and speckle -->
  <g fill="#0c0a08" opacity="0.55">
    <path d="M392 92 q26 12 22 40 q-8 26 -22 14 z"/>
    <path d="M590 304 q-30 -10 -28 -38 q6 -24 28 -12 z"/>
    <path d="M392 268 q18 -6 26 12 q-4 24 -26 18 z"/>
    <path d="M556 92 q22 6 20 26 q-8 16 -22 4 z"/>
  </g>
  <g fill="#0c0a08" opacity="0.35">
    <circle cx="440" cy="120" r="3"/><circle cx="470" cy="266" r="4"/><circle cx="524" cy="150" r="2.4"/>
    <circle cx="410" cy="196" r="2.6"/><circle cx="556" cy="240" r="3.2"/><circle cx="500" cy="292" r="2.2"/>
  </g>
  <g fill="#d8cfae" opacity="0.14">
    <path d="M420 176 q40 -14 76 4 q-38 16 -78 6 z"/>
  </g>
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
  <path d="M344 102 l38 -10 l8 30 l-38 10 z M340 144 l36 -8 l6 28 l-36 8 z M344 192 l36 -8 l6 26 l-36 8 z M338 242 l36 -8 l7 28 l-36 8 z M616 106 l38 8 l-6 30 l-38 -8 z M618 154 l36 8 l-5 26 l-36 -8 z M616 202 l36 8 l-6 28 l-36 -8 z M620 252 l34 8 l-5 26 l-34 -8 z M398 52 l40 -6 l4 22 l-40 6 z M476 46 l40 4 l-3 22 l-40 -4 z M552 52 l38 6 l-4 22 l-38 -6 z" fill="#0a0705" opacity="0.42"/>
  <g fill="#f0e7ce">
    <path d="M340 96 l38 -10 l8 30 l-38 10 z"/><path d="M336 138 l36 -8 l6 28 l-36 8 z"/>
    <path d="M340 186 l36 -8 l6 26 l-36 8 z"/><path d="M334 236 l36 -8 l7 28 l-36 8 z"/>
    <path d="M612 100 l38 8 l-6 30 l-38 -8 z"/><path d="M614 148 l36 8 l-5 26 l-36 -8 z"/>
    <path d="M612 196 l36 8 l-6 28 l-36 -8 z"/><path d="M616 246 l34 8 l-5 26 l-34 -8 z"/>
    <path d="M394 46 l40 -6 l4 22 l-40 6 z"/><path d="M472 40 l40 4 l-3 22 l-40 -4 z"/>
    <path d="M548 46 l38 6 l-4 22 l-38 -6 z"/>
  </g>
  <!-- the edge nearest the lamps burns out; the far edge goes to shadow -->
  <path d="M340 96 l38 -10 l1 5 l-38 10 z M336 138 l36 -8 l1 5 l-36 8 z M340 186 l36 -8 l1 5 l-36 8 z M334 236 l36 -8 l1 5 l-36 8 z M612 100 l38 8 l-1 5 l-38 -8 z M614 148 l36 8 l-1 5 l-36 -8 z M612 196 l36 8 l-1 5 l-36 -8 z M616 246 l34 8 l-1 5 l-34 -8 z M394 46 l40 -6 l1 5 l-40 6 z M472 40 l40 4 l-1 5 l-40 -4 z M548 46 l38 6 l-1 5 l-38 -6 z" fill="#fffaea" opacity="0.55"/>
  <path d="M346 118 l38 -10 l2 8 l-38 10 z M340 158 l36 -8 l2 8 l-36 8 z M344 204 l36 -8 l2 8 l-36 8 z M338 256 l36 -8 l3 8 l-36 8 z M606 122 l38 8 l-2 8 l-38 -8 z M609 166 l36 8 l-2 8 l-36 -8 z M606 216 l36 8 l-2 8 l-36 -8 z M611 264 l34 8 l-2 8 l-34 -8 z" fill="#7d735a" opacity="0.4"/>
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

<!-- THE LOCKED COMPARTMENT: a shallow drawer in the mirror's own frame -->
<g>
  <path d="M568 300 L614 300 L614 332 L568 332 Z" fill="#0d0906" opacity="0.55"/>
  <rect x="570" y="302" width="42" height="28" rx="2" fill="url(#or-dress-woodlit)"/>
  <path d="M571 303 L611 303" stroke="#c49a52" stroke-width="1.4" opacity="0.55"/>
  <path d="M570 328 L612 328 M610 304 L610 328" stroke="#120c07" stroke-width="1.4" opacity="0.6"/>
  <rect x="574" y="306" width="34" height="20" rx="2" fill="none" stroke="#4a3524" stroke-width="2"/>
  <path d="M574 306 L608 306" stroke="#7d5c33" stroke-width="1" opacity="0.5"/>
  <path d="M574 324 L608 324" stroke="#120c07" stroke-width="1.1" opacity="0.5"/>
  <ellipse cx="591" cy="316" rx="5.4" ry="6.4" fill="url(#or-dress-brass)"/>
  <ellipse cx="591" cy="313.6" rx="3.2" ry="1.4" fill="#fbeec2" opacity="0.55"/>
  <path d="M591 313 q2.2 0 2.2 2.2 q0 1.5 -1.5 2.2 l1.5 4 l-4.4 0 l1.5 -4 q-1.5 -0.7 -1.5 -2.2 q0 -2.2 2.2 -2.2 z" fill="#100b07"/>
  <path d="M584 311 l-5 -2 M583 320 l-6 3 M585 322 l-3 3 M598 312 l4 -2" stroke="#f4e6bc" stroke-width="0.9" opacity="0.38"/>
  <path d="M597 317 q4 1 6 -1 M582 315 q-3 -2 -6 -1" fill="none" stroke="#c9a961" stroke-width="0.8" opacity="0.3"/>
  <path d="M576 312 l6 0 M576 320 l5 0" stroke="#120c07" stroke-width="1" opacity="0.35"/>
  <path d="M570 302 L612 302 L612 330 L570 330 Z" fill="url(#or-dress-castR)" opacity="0.3"/>
</g>

<!-- THE VANITY: greasepaint, roses going brown, the drawer of letters -->
<g>
  <ellipse cx="520" cy="478" rx="230" ry="16" fill="#080604" opacity="0.5"/>
  <rect x="330" y="336" width="392" height="18" rx="3" fill="url(#or-dress-woodlit)"/>
  <path d="M332 337 L720 337" stroke="#c49a52" stroke-width="1.6" opacity="0.5"/>
  <path d="M330 352 L722 352" stroke="#120c07" stroke-width="1.6" opacity="0.6"/>
  <rect x="330" y="354" width="392" height="9" fill="#33271a"/>
  <rect x="700" y="363" width="14" height="106" fill="#3b2f22"/>
  <path d="M701 365 l0 102" stroke="#7d5c33" stroke-width="1.4" opacity="0.4"/>
  <rect x="344" y="363" width="294" height="106" fill="#3b2f22"/>
  <rect x="344" y="363" width="294" height="106" fill="url(#or-dress-castR)" opacity="0.45"/>
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="484" y="374" width="142" height="40"/><rect x="484" y="422" width="142" height="40"/>
  </g>
  <path d="M484 374 L626 374 M484 422 L626 422" stroke="#7d5c33" stroke-width="1.2" opacity="0.45"/>
  <path d="M484 414 L626 414 M484 462 L626 462" stroke="#120c07" stroke-width="1.4" opacity="0.55"/>
  <g fill="url(#or-dress-brass)">
    <ellipse cx="555" cy="394" rx="15" ry="4"/><ellipse cx="555" cy="442" rx="15" ry="4"/>
  </g>
  <g fill="#fbeec2" opacity="0.45">
    <ellipse cx="555" cy="393" rx="8" ry="1.5"/><ellipse cx="555" cy="441" rx="8" ry="1.5"/>
  </g>
  <rect x="344" y="469" width="294" height="10" fill="#241b12"/>
  <!-- the drawer, pulled right out and left that way -->
  <g>
    <path d="M336 380 L474 380 L474 438 L336 438 Z" fill="url(#or-dress-woodlit)"/>
    <path d="M336 380 L474 380 L466 370 L344 370 Z" fill="#5c4327"/>
    <path d="M344 371 L466 371" stroke="#c49a52" stroke-width="1.4" opacity="0.5"/>
    <path d="M336 436 L474 436" stroke="#120c07" stroke-width="2" opacity="0.6"/>
    <rect x="342" y="386" width="126" height="42" fill="#1b140d"/>
    <ellipse cx="405" cy="378" rx="16" ry="5" fill="url(#or-dress-brass)"/>
    <ellipse cx="405" cy="377" rx="9" ry="1.8" fill="#fbeec2" opacity="0.5"/>
    <!-- greasepaint sticks: waxy, thumb-worn, each with a soft top light -->
    <g>
      <rect x="352" y="416" width="106" height="16" rx="4" fill="url(#or-dress-wax)"/>
      <rect x="358" y="404" width="94" height="14" rx="4" fill="url(#or-dress-wax)"/>
      <rect x="366" y="394" width="80" height="12" rx="4" fill="url(#or-dress-wax)"/>
      <path d="M360 418 q46 -4 92 0 M366 406 q40 -3 80 0 M372 396 q34 -3 68 0" fill="none" stroke="#fffaea" stroke-width="1.6" opacity="0.5"/>
      <g fill="#8b7f60" opacity="0.5">
        <ellipse cx="398" cy="428" rx="18" ry="3"/><ellipse cx="404" cy="415" rx="14" ry="2.4"/>
      </g>
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
    <!-- nothing on this top floats: each pot sits in its own small shadow -->
    <g fill="#080604" opacity="0.42">
      <ellipse cx="676" cy="357" rx="24" ry="4"/><ellipse cx="481" cy="339" rx="13" ry="3"/>
      <ellipse cx="502" cy="339" rx="12" ry="3"/><ellipse cx="521" cy="339" rx="11" ry="3"/>
      <ellipse cx="548" cy="337" rx="26" ry="4"/>
    </g>
    <rect x="656" y="322" width="40" height="34" rx="5" fill="url(#or-dress-woodlit)"/>
    <ellipse cx="676" cy="322" rx="20" ry="6" fill="#7d5f34"/>
    <ellipse cx="676" cy="320" rx="12" ry="2.6" fill="#b58a52" opacity="0.5"/>
    <rect x="472" y="316" width="18" height="22" rx="3" fill="#a8352a"/>
    <path d="M474 317 l4 0 l0 20 l-4 0 z" fill="#d8695a" opacity="0.5"/>
    <rect x="494" y="320" width="16" height="18" rx="3" fill="#5f6b4a"/>
    <path d="M496 321 l3 0 l0 16 l-3 0 z" fill="#94a173" opacity="0.5"/>
    <rect x="514" y="314" width="14" height="24" rx="3" fill="#1b2436"/>
    <path d="M516 315 l3 0 l0 22 l-3 0 z" fill="#546683" opacity="0.5"/>
    <ellipse cx="546" cy="330" rx="24" ry="8" fill="#e3d5ac"/>
    <ellipse cx="546" cy="326" rx="18" ry="6" fill="#f4ecd6"/>
    <ellipse cx="542" cy="324" rx="9" ry="3" fill="#fffaea" opacity="0.7"/>
    <g fill="#f0e7ce" opacity="0.9">
      <path d="M398 320 l52 -6 l3 18 l-52 8 z"/><path d="M406 312 l48 -6 l3 12 l-48 6 z"/>
    </g>
    <g stroke="#8d7c62" stroke-width="1.4" opacity="0.85">
      <line x1="406" y1="326" x2="444" y2="322"/><line x1="406" y1="332" x2="440" y2="328"/>
    </g>
  </g>
  <!-- roses going brown -->
  <g transform="translate(-42 0)">
    <ellipse cx="716" cy="338" rx="20" ry="4" fill="#080604" opacity="0.28"/>
    <path d="M700 336 l30 0 l-5 -46 l-20 0 z" fill="#8fa4c0" opacity="0.35"/>
    <path d="M702 336 l6 0 l-2 -46 l-4 0 z" fill="#0d1218" opacity="0.4"/>
    <path d="M724 336 l6 0 l-4 -46 l-4 0 z" fill="#cfe0ee" opacity="0.35"/>
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
  <path d="M712 288 L952 262 L962 190 L722 216 Z" fill="url(#or-dress-hidelit)"/>
  <path d="M722 216 L962 190" stroke="#9a7245" stroke-width="1.6" opacity="0.4"/>
  <path d="M712 288 L952 262" stroke="#1b1109" stroke-width="1.8" opacity="0.55"/>
  <!-- pebbled hide, scuffed pale along the ribs -->
  <g fill="#3d2814" opacity="0.3">
    <path d="M740 232 q46 -12 92 -14 l2 12 q-48 4 -92 14 z"/>
    <path d="M840 224 q48 -8 96 -12 l2 12 q-50 4 -96 12 z"/>
  </g>
  <g fill="none" stroke="#241b12" stroke-width="6">
    <path d="M756 284 L766 210"/><path d="M896 268 L906 196"/>
  </g>
  <path d="M759 284 L769 210 M899 268 L909 196" stroke="#6b5231" stroke-width="1.4" opacity="0.4"/>
  <g fill="#e3d5ac" opacity="0.6">
    <path d="M780 268 l60 -8 l3 20 l-60 8 z"/><path d="M848 258 l50 -6 l3 18 l-50 8 z"/>
  </g>
  <path d="M780 268 l60 -8 l1 5 l-60 8 z M848 258 l50 -6 l1 5 l-50 6 z" fill="#fffaea" opacity="0.4"/>
  <!-- the body of the trunk -->
  <path d="M694 300 L964 300 L950 540 L708 540 Z" fill="url(#or-dress-hidelit)"/>
  <path d="M694 300 L964 300 L962 318 L696 318 Z" fill="#7d5c36"/>
  <path d="M696 302 L962 302" stroke="#b58a52" stroke-width="1.6" opacity="0.45"/>
  <path d="M696 316 L962 316" stroke="#1b1109" stroke-width="1.8" opacity="0.55"/>
  <g fill="#3d2814" opacity="0.26">
    <path d="M710 360 q60 -8 120 -6 l0 22 q-62 -2 -122 8 z"/>
    <path d="M712 440 q64 -8 128 -6 l0 24 q-66 -2 -130 8 z"/>
    <path d="M830 400 q58 -6 114 -4 l0 22 q-58 -2 -114 6 z"/>
  </g>
  <g fill="none" stroke="#241b12" stroke-width="9">
    <path d="M752 300 L746 540"/><path d="M906 300 L912 540"/>
  </g>
  <path d="M757 300 L751 540 M911 300 L917 540" stroke="#6b5231" stroke-width="1.6" opacity="0.4"/>
  <path d="M748 300 L742 540 M902 300 L908 540" stroke="#0e0906" stroke-width="1.6" opacity="0.5"/>
  <g fill="url(#or-dress-brass)">
    <rect x="736" y="356" width="30" height="16" rx="4"/><rect x="892" y="356" width="30" height="16" rx="4"/>
    <rect x="736" y="470" width="30" height="16" rx="4"/><rect x="892" y="470" width="30" height="16" rx="4"/>
  </g>
  <path d="M738 358 l26 0 M894 358 l26 0 M738 472 l26 0 M894 472 l26 0" stroke="#fbeec2" stroke-width="1.4" opacity="0.5"/>
  <path d="M736 370 l30 0 M892 370 l30 0 M736 484 l30 0 M892 484 l30 0" stroke="#3a2c0f" stroke-width="1.4" opacity="0.55"/>
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
  <!-- silk: the light runs along the crest of every fold and dies in the trough -->
  <path d="M718 398 q50 -20 102 4 q52 24 116 -2" fill="none" stroke="#c9a8bb" stroke-width="2" opacity="0.35"/>
  <g fill="none" stroke="#33262f" stroke-width="3" opacity="0.8">
    <path d="M726 404 q50 -18 98 6"/><path d="M842 414 q48 20 92 -2"/>
  </g>
  <path d="M728 407 q48 -17 96 6 M844 417 q46 19 88 -2" fill="none" stroke="#a98698" stroke-width="1.1" opacity="0.35"/>
  <path d="M716 396 q52 -22 106 4 q54 26 118 -2 l-4 44 q-58 26 -114 0 q-56 -26 -104 -4 z" fill="url(#or-dress-castR)" opacity="0.35"/>
  <path d="M726 446 q54 -20 108 6 q52 24 108 -4 l-6 62 q-52 26 -104 2 q-52 -24 -102 -4 z" fill="#5f6b4a"/>
  <path d="M728 448 q52 -19 104 6 q50 23 106 -4" fill="none" stroke="#8b9a68" stroke-width="2" opacity="0.35"/>
  <g fill="none" stroke="#454e36" stroke-width="3" opacity="0.85">
    <path d="M736 460 q50 -16 96 8"/><path d="M846 470 q46 18 88 -2"/>
  </g>
  <path d="M738 463 q48 -15 94 8 M848 473 q44 17 84 -2" fill="none" stroke="#7d8a5c" stroke-width="1.1" opacity="0.3"/>
  <path d="M726 446 q54 -20 108 6 q52 24 108 -4 l-6 62 q-52 26 -104 2 q-52 -24 -102 -4 z" fill="url(#or-dress-castR)" opacity="0.35"/>
  <path d="M760 508 q40 -14 80 4 q-38 24 -84 8 z" fill="#e3d5ac" opacity="0.55"/>
  <path d="M762 508 q38 -13 76 4" fill="none" stroke="#fffaea" stroke-width="1.6" opacity="0.4"/>
  <path d="M876 512 q30 -8 52 2 l-2 20 q-30 8 -54 -4 z" fill="#a8352a" opacity="0.55"/>
  <path d="M878 513 q28 -7 48 2" fill="none" stroke="#d8695a" stroke-width="1.4" opacity="0.4"/>
</g>

<!-- foreground: the vanity stool, shoved aside -->
<g transform="rotate(6 470 560)">
  <ellipse cx="474" cy="592" rx="86" ry="18" fill="#080604" opacity="0.5"/>
  <ellipse cx="470" cy="540" rx="72" ry="22" fill="#5d1f18"/>
  <ellipse cx="470" cy="534" rx="66" ry="18" fill="#7d2d24"/>
  <!-- buttoned plush: a broad soft highlight where the seat crowns -->
  <ellipse cx="466" cy="528" rx="40" ry="10" fill="#a04234" opacity="0.55"/>
  <ellipse cx="462" cy="524" rx="20" ry="5" fill="#c0705f" opacity="0.35"/>
  <ellipse cx="470" cy="534" rx="4" ry="2.4" fill="#3f1613" opacity="0.8"/>
  <path d="M410 546 q60 20 122 -2 l-4 16 q-58 22 -114 0 z" fill="#3f1613"/>
  <path d="M412 548 q58 19 118 -2" fill="none" stroke="#8e3327" stroke-width="1.4" opacity="0.4"/>
  <g fill="#33271a">
    <path d="M420 556 l12 0 l14 62 l-14 0 z"/><path d="M508 556 l12 0 l-12 62 l-14 0 z"/>
    <path d="M464 562 l12 0 l2 58 l-14 0 z"/>
  </g>
  <path d="M421 557 l10 0 l12 58 l-10 0 z M509 557 l10 0 l-10 58 l-11 0 z" fill="#6b5231" opacity="0.35"/>
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
      h_letterrack: { x: 17, y: 15 },
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
  <linearGradient id="or-green-cone" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.20"/>
    <stop offset="0.55" stop-color="#ffd98a" stop-opacity="0.07"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-green-panel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4e3a25"/><stop offset="0.4" stop-color="#33271a"/><stop offset="1" stop-color="#1a1209"/>
  </linearGradient>
  <linearGradient id="or-green-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e0c581"/><stop offset="0.3" stop-color="#a8873f"/><stop offset="1" stop-color="#54401a"/>
  </linearGradient>
  <linearGradient id="or-green-moq" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#000000" stop-opacity="0.36"/>
    <stop offset="0.42" stop-color="#000000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000000" stop-opacity="0.42"/>
  </linearGradient>
  <linearGradient id="or-green-rug" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5c3722"/><stop offset="0.5" stop-color="#4a2c1c"/><stop offset="1" stop-color="#2e1a11"/>
  </linearGradient>
  <linearGradient id="or-green-cork" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#8a7346"/><stop offset="0.5" stop-color="#6b5a3a"/><stop offset="1" stop-color="#43371f"/>
  </linearGradient>
  <linearGradient id="or-green-boards" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c2116"/><stop offset="1" stop-color="#160f0a"/>
  </linearGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-green-wall)"/>

<!-- panelling, rail, floor -->
<!-- distemper on plaster: brush drag, and a slow tide-mark of damp -->
<g fill="#4a4f2c" opacity="0.10">
  <path d="M60 60 q140 -18 280 -4 l0 22 q-142 -12 -280 6 z"/>
  <path d="M420 240 q160 -16 320 -2 l0 20 q-160 -12 -320 6 z"/>
  <path d="M140 180 q120 -14 236 -2 l0 16 q-118 -10 -236 4 z"/>
</g>
<g fill="#12140a" opacity="0.2">
  <path d="M0 250 q70 -30 148 -8 q60 30 -10 70 q-92 24 -140 -18 z"/>
  <path d="M900 190 q60 -24 100 -4 l0 76 q-70 18 -104 -18 z"/>
</g>
<rect x="0" y="0" width="1000" height="22" fill="#241b12"/>
<rect x="0" y="22" width="1000" height="7" fill="#4a3524"/>
<path d="M0 22 L1000 22" stroke="#8a6a3f" stroke-width="1.4" opacity="0.4"/>
<path d="M0 29 L1000 29" stroke="#0a0705" stroke-width="2.4" opacity="0.5"/>
<rect x="0" y="338" width="1000" height="100" fill="#241b12"/>
<rect x="0" y="338" width="1000" height="7" fill="#4a3524"/>
<path d="M0 338 L1000 338" stroke="#8a6a3f" stroke-width="1.6" opacity="0.4"/>
<!-- the dado: each panel sunk, its top edge lit and its sill in shadow -->
<g fill="url(#or-green-panel)">
  <rect x="24" y="356" width="94" height="62"/><rect x="140" y="356" width="94" height="62"/>
  <rect x="256" y="356" width="94" height="62"/><rect x="372" y="356" width="94" height="62"/>
  <rect x="488" y="356" width="94" height="62"/><rect x="604" y="356" width="94" height="62"/>
  <rect x="720" y="356" width="94" height="62"/><rect x="836" y="356" width="94" height="62"/>
</g>
<path d="M24 356 L118 356 M140 356 L234 356 M256 356 L350 356 M372 356 L466 356 M488 356 L582 356 M604 356 L698 356 M720 356 L814 356 M836 356 L930 356" stroke="#0d0906" stroke-width="2.4" opacity="0.65"/>
<path d="M24 418 L118 418 M140 418 L234 418 M256 418 L350 418 M372 418 L466 418 M488 418 L582 418 M604 418 L698 418 M720 418 L814 418 M836 418 L930 418" stroke="#755530" stroke-width="2" opacity="0.5"/>
<g fill="none" stroke="#33271a" stroke-width="3">
  <rect x="24" y="356" width="94" height="62"/><rect x="140" y="356" width="94" height="62"/>
  <rect x="256" y="356" width="94" height="62"/><rect x="372" y="356" width="94" height="62"/>
  <rect x="488" y="356" width="94" height="62"/><rect x="604" y="356" width="94" height="62"/>
  <rect x="720" y="356" width="94" height="62"/><rect x="836" y="356" width="94" height="62"/>
</g>
<rect x="0" y="430" width="1000" height="10" fill="#1b140d"/>
<rect x="0" y="440" width="1000" height="180" fill="url(#or-green-boards)"/>
<g stroke="#2a2016" stroke-width="2">
  <line x1="0" y1="470" x2="1000" y2="470"/><line x1="0" y1="512" x2="1000" y2="512"/>
  <line x1="0" y1="562" x2="1000" y2="562"/>
</g>
<path d="M0 473 L1000 473 M0 515 L1000 515 M0 565 L1000 565" stroke="#63492c" stroke-width="0.9" opacity="0.2"/>
<path d="M150 440 L134 620 M470 440 L464 620 M760 440 L780 620" stroke="#100b07" stroke-width="1.6" opacity="0.55"/>
<!-- the rug: worn to the weft down the middle, fringed at the near edge -->
<path d="M120 620 L880 620 L760 470 L240 470 Z" fill="url(#or-green-rug)"/>
<path d="M180 620 L820 620 L720 486 L280 486 Z" fill="none" stroke="#6b2a24" stroke-width="10" opacity="0.9"/>
<path d="M186 620 L814 620 L716 490 L284 490 Z" fill="none" stroke="#8e3b31" stroke-width="2" opacity="0.35"/>
<g fill="#6b5326" opacity="0.4">
  <path d="M360 566 l24 -15 l24 15 l-24 15 z"/><path d="M480 566 l24 -15 l24 15 l-24 15 z"/>
  <path d="M600 566 l24 -15 l24 15 l-24 15 z"/><path d="M300 608 l22 -14 l22 14 l-22 14 z"/>
  <path d="M660 608 l22 -14 l22 14 l-22 14 z"/>
</g>
<g fill="#8a6a4a" opacity="0.09">
  <path d="M330 620 L660 620 L616 512 L392 512 Z"/>
</g>
<path d="M330 500 q160 -8 340 0 M300 542 q200 -10 410 0" fill="none" stroke="#2a170f" stroke-width="6" opacity="0.25"/>
<path d="M120 618 l760 0" stroke="#8a7648" stroke-width="4" opacity="0.3"/>
<rect width="1000" height="620" fill="url(#or-green-glow)"/>

<!-- THE COMPANY LETTER RACK: sixteen pigeonholes, and one with a door on it -->
<g>
  <path d="M62 56 L70 46 L70 142 L62 132 Z" fill="#080604" opacity="0.4"/>
  <rect x="70" y="46" width="200" height="96" rx="4" fill="url(#or-green-panel)"/>
  <path d="M72 48 L268 48 M72 48 L72 140" stroke="#a3814d" stroke-width="1.6" opacity="0.45"/>
  <path d="M70 140 L270 140 M268 48 L268 140" stroke="#160f09" stroke-width="1.8" opacity="0.6"/>
  <rect x="78" y="54" width="184" height="80" fill="#1b140d"/>
  <path d="M124 54 l0 80 M170 54 l0 80 M216 54 l0 80 M78 74 l184 0 M78 94 l184 0 M78 114 l184 0" stroke="#3b2f22" stroke-width="4"/>
  <path d="M125 54 l0 80 M171 54 l0 80 M217 54 l0 80 M78 74 l184 0 M78 94 l184 0 M78 114 l184 0" stroke="#7d5c33" stroke-width="1.1" opacity="0.45"/>
  <path d="M78 56 l184 0 M78 76 l184 0 M78 96 l184 0 M78 116 l184 0" stroke="#0a0705" stroke-width="4" opacity="0.55"/>
  <g fill="#f0e7ce">
    <path d="M84 80 l32 -3 l1 13 l-32 3 z"/><path d="M90 82 l30 -4 l1 12 l-30 4 z"/>
    <path d="M130 100 l32 -2 l1 12 l-32 2 z"/><path d="M176 78 l32 -3 l1 13 l-32 3 z"/>
    <path d="M84 120 l30 -3 l1 13 l-30 3 z"/><path d="M222 100 l32 -3 l1 13 l-32 3 z"/>
    <path d="M132 122 l28 -2 l1 11 l-28 2 z"/>
  </g>
  <g fill="#c9b48a" opacity="0.75">
    <path d="M96 84 l28 -3 l1 11 l-28 3 z"/><path d="M136 102 l28 -2 l1 10 l-28 2 z"/>
    <path d="M182 82 l26 -3 l1 10 l-26 3 z"/><path d="M90 124 l26 -3 l1 11 l-26 3 z"/>
  </g>
  <path d="M84 80 l32 -3 l1 4 l-32 3 z M130 100 l32 -2 l1 4 l-32 2 z M176 78 l32 -3 l1 4 l-32 3 z M84 120 l30 -3 l1 4 l-30 3 z M222 100 l32 -3 l1 4 l-32 3 z" fill="#fffaea" opacity="0.5"/>
  <path d="M88 90 l26 -3 M92 86 l24 -3 M134 108 l26 -2 M180 88 l24 -3 M88 130 l24 -2" stroke="#8d7c62" stroke-width="1.1" opacity="0.75"/>
  <rect x="218" y="56" width="42" height="16" rx="2" fill="url(#or-green-brass)"/>
  <path d="M219 57 l40 0" stroke="#f6e5b0" stroke-width="1.2" opacity="0.6"/>
  <path d="M218 70 l42 0 M258 58 l0 12" stroke="#3d2f14" stroke-width="1.3" opacity="0.6"/>
  <circle cx="251" cy="64" r="4.6" fill="#5a4a1e"/>
  <path d="M251 61.6 q2 0 2 2 q0 1.4 -1.4 2 l1.4 3.2 l-4 0 l1.4 -3.2 q-1.4 -0.6 -1.4 -2 q0 -2 2 -2 z" fill="#0d0906"/>
  <path d="M219 58 l0 5 M219 65 l0 5" stroke="#4a3a14" stroke-width="2.4" opacity="0.7"/>
  <rect x="222" y="58" width="22" height="12" rx="1" fill="#6b5a2a"/>
  <rect x="223.5" y="59.5" width="19" height="9" fill="#f0e7ce"/>
  <path d="M226 64 l13 0" stroke="#5b564b" stroke-width="1.5" opacity="0.85"/>
  <path d="M70 46 L270 46 L270 142 L70 142 Z" fill="#0a0705" opacity="0.22"/>
</g>

<!-- bay one: the company's coats and costumes, on a rail -->
<g>
  <rect x="18" y="150" width="278" height="11" rx="4" fill="#5c4327"/>
  <path d="M20 151 L294 151" stroke="#a3814d" stroke-width="1.4" opacity="0.45"/>
  <path d="M18 160 L296 160" stroke="#160f09" stroke-width="1.6" opacity="0.6"/>
  <g fill="#3a352d">
    <rect x="50" y="161" width="8" height="16" rx="3"/><rect x="118" y="161" width="8" height="16" rx="3"/>
    <rect x="188" y="161" width="8" height="16" rx="3"/><rect x="252" y="161" width="8" height="16" rx="3"/>
  </g>
  <path d="M57 163 l0 12 M125 163 l0 12 M195 163 l0 12 M259 163 l0 12" stroke="#8e8a7d" stroke-width="1.2" opacity="0.5"/>
  <path d="M54 172 q34 -8 52 22 q16 62 6 122 l-96 0 q-10 -66 8 -122 q12 -26 30 -22 z" fill="#2b2537"/>
  <path d="M84 176 q22 4 32 26 q14 60 4 114 l-14 0 q10 -56 -4 -114 q-8 -22 -22 -26 z" fill="#3e3852" opacity="0.55"/>
  <g fill="none" stroke="#1e1a28" stroke-width="4" opacity="0.9">
    <path d="M34 200 q-8 60 -2 116"/><path d="M92 198 q10 60 4 112"/>
  </g>
  <path d="M37 200 q-8 60 -2 116 M95 198 q10 60 4 112" fill="none" stroke="#463f5c" stroke-width="1.3" opacity="0.4"/>
  <path d="M54 172 q34 -8 52 22 l-8 10 q-20 -24 -44 -18 z" fill="#3a3348"/>
  <path d="M124 174 q30 -8 46 20 q14 56 4 110 l-84 0 q-8 -58 6 -110 q10 -24 28 -20 z" fill="#5d1f18"/>
  <path d="M150 178 q18 4 26 24 q13 54 3 106 l-13 0 q9 -50 -3 -104 q-6 -20 -18 -24 z" fill="#7e2f26" opacity="0.55"/>
  <g fill="none" stroke="#3d130f" stroke-width="4" opacity="0.9">
    <path d="M110 202 q-6 54 0 102"/><path d="M156 200 q8 54 2 104"/>
  </g>
  <path d="M113 202 q-6 54 0 102 M159 200 q8 54 2 104" fill="none" stroke="#8e3b31" stroke-width="1.3" opacity="0.35"/>
  <path d="M194 176 q28 -6 42 18 q12 50 4 100 l-78 0 q-8 -52 6 -100 q10 -22 26 -18 z" fill="#5f6b4a"/>
  <path d="M216 180 q16 4 24 22 q11 48 3 96 l-12 0 q8 -46 -3 -94 q-6 -18 -16 -22 z" fill="#7f8e62" opacity="0.5"/>
  <g fill="none" stroke="#3c452e" stroke-width="4" opacity="0.9">
    <path d="M182 200 q-6 48 0 92"/><path d="M222 200 q6 48 0 92"/>
  </g>
  <path d="M185 200 q-6 48 0 92 M225 200 q6 48 0 92" fill="none" stroke="#8b9a68" stroke-width="1.3" opacity="0.35"/>
  <!-- the rail throws its row of shadows on the wall behind -->
  <path d="M12 316 L118 316 L112 194 L18 194 Z" fill="#080604" opacity="0.16"/>
  <ellipse cx="256" cy="196" rx="30" ry="10" fill="#241b12"/>
  <path d="M234 194 q22 -30 44 0 z" fill="#33271a"/>
  <path d="M242 184 q14 -10 28 0 l-4 5 q-10 -7 -20 0 z" fill="#6b5231" opacity="0.5"/>
  <ellipse cx="256" cy="198" rx="24" ry="5" fill="#0d0906" opacity="0.5"/>
  <path d="M234 190 q22 -8 44 0" fill="none" stroke="#5d1f18" stroke-width="5"/>
</g>

<!-- bay three: framed production photographs, and a clock -->
<g>
  <g>
    <path d="M656 102 L664 96 L664 216 L656 222 Z" fill="#080604" opacity="0.35"/>
    <rect x="662" y="96" width="96" height="120" fill="#5c4327"/>
    <path d="M664 98 L756 98" stroke="#a3814d" stroke-width="1.4" opacity="0.45"/>
    <path d="M662 214 L758 214" stroke="#1b1209" stroke-width="1.6" opacity="0.55"/>
    <rect x="670" y="104" width="80" height="104" fill="#241b12"/>
    <rect x="670" y="104" width="80" height="104" fill="#4a4a3c" opacity="0.6"/>
    <ellipse cx="694" cy="146" rx="14" ry="17" fill="#b3a184" opacity="0.55"/>
    <path d="M676 208 q18 -44 40 -6 q12 20 30 6 z" fill="#1d1b16" opacity="0.8"/>
    <ellipse cx="726" cy="152" rx="12" ry="15" fill="#b3a184" opacity="0.45"/>
    <path d="M670 208 L718 104 L740 104 L692 208 Z" fill="#f0e7ce" opacity="0.07"/>
  </g>
  <g>
    <path d="M768 78 L776 72 L776 180 L768 186 Z" fill="#080604" opacity="0.35"/>
    <rect x="774" y="72" width="86" height="108" fill="#5c4327"/>
    <path d="M776 74 L858 74" stroke="#a3814d" stroke-width="1.4" opacity="0.45"/>
    <rect x="782" y="80" width="70" height="92" fill="#3f4038"/>
    <path d="M782 172 q22 -56 40 -12 q12 28 30 12 z" fill="#1d1b16" opacity="0.75"/>
    <ellipse cx="812" cy="112" rx="13" ry="16" fill="#b3a184" opacity="0.5"/>
    <path d="M782 172 L826 80 L844 80 L800 172 Z" fill="#f0e7ce" opacity="0.06"/>
  </g>
  <g>
    <path d="M776 206 L784 200 L784 270 L776 276 Z" fill="#080604" opacity="0.35"/>
    <rect x="782" y="200" width="90" height="70" fill="#5c4327"/>
    <path d="M784 202 L870 202" stroke="#a3814d" stroke-width="1.4" opacity="0.45"/>
    <rect x="790" y="208" width="74" height="54" fill="#3a3a32"/>
    <g fill="#b3a184" opacity="0.45">
      <ellipse cx="806" cy="230" rx="9" ry="11"/><ellipse cx="828" cy="228" rx="9" ry="11"/><ellipse cx="850" cy="232" rx="9" ry="11"/>
    </g>
    <path d="M790 262 q36 -22 74 0 z" fill="#1d1b16" opacity="0.7"/>
    <path d="M790 262 L826 208 L842 208 L806 262 Z" fill="#f0e7ce" opacity="0.06"/>
  </g>
  <g>
    <ellipse cx="912" cy="184" rx="42" ry="8" fill="#080604" opacity="0.3"/>
    <circle cx="920" cy="140" r="42" fill="#5c4327"/>
    <path d="M886 112 q34 -22 68 0" fill="none" stroke="#a3814d" stroke-width="2" opacity="0.4"/>
    <path d="M886 168 q34 22 68 0" fill="none" stroke="#1b1209" stroke-width="2.4" opacity="0.5"/>
    <circle cx="920" cy="140" r="33" fill="#e3d5ac"/>
    <path d="M896 118 q26 -12 50 4 q-22 20 -50 -4 z" fill="#fffaea" opacity="0.4"/>
    <path d="M898 164 q24 10 46 -2" fill="none" stroke="#9a9078" stroke-width="3" opacity="0.35"/>
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
  <path d="M310 60 L318 52 L318 230 L310 238 Z" fill="#080604" opacity="0.35"/>
  <rect x="316" y="52" width="252" height="178" rx="4" fill="#5c4327"/>
  <path d="M318 54 L566 54" stroke="#a3814d" stroke-width="1.6" opacity="0.45"/>
  <path d="M316 228 L568 228" stroke="#1b1209" stroke-width="1.8" opacity="0.55"/>
  <rect x="326" y="62" width="232" height="158" fill="url(#or-green-cork)"/>
  <rect x="326" y="62" width="232" height="158" fill="#241b12" opacity="0.28"/>
  <!-- cork: pressed granules, and the constellation of old pin holes -->
  <g fill="#3d3220" opacity="0.4">
    <circle cx="352" cy="80" r="2"/><circle cx="410" cy="96" r="1.6"/><circle cx="470" cy="76" r="2.2"/>
    <circle cx="530" cy="104" r="1.8"/><circle cx="366" cy="148" r="2"/><circle cx="500" cy="160" r="1.6"/>
    <circle cx="440" cy="200" r="2.2"/><circle cx="544" cy="182" r="1.7"/><circle cx="392" cy="212" r="1.9"/>
    <circle cx="336" cy="120" r="1.5"/><circle cx="552" cy="132" r="1.5"/><circle cx="480" cy="216" r="1.8"/>
  </g>
  <rect x="326" y="62" width="232" height="10" fill="#0a0705" opacity="0.35"/>
  <!-- the closing notice, a month old and gone soft -->
  <g transform="rotate(-2 386 126)">
    <rect x="340" y="78" width="100" height="112" fill="#0a0705" opacity="0.4"/>
    <rect x="336" y="74" width="100" height="112" fill="#f0e7ce"/>
    <rect x="336" y="74" width="100" height="112" fill="url(#or-green-moq)" opacity="0.35"/>
    <rect x="336" y="74" width="100" height="15" fill="#e3d5ac"/>
    <path d="M336 74 L436 74" stroke="#fffaea" stroke-width="2" opacity="0.7"/>
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
    <rect x="452" y="84" width="102" height="96" fill="#0a0705" opacity="0.4"/>
    <rect x="448" y="80" width="102" height="96" fill="#e3d5ac"/>
    <rect x="448" y="80" width="102" height="96" fill="url(#or-green-moq)" opacity="0.3"/>
    <path d="M448 80 L550 80" stroke="#fffaea" stroke-width="2" opacity="0.6"/>
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
  <line x1="630" y1="0" x2="630" y2="66" stroke="#6b5230" stroke-width="1.2" opacity="0.5"/>
  <path d="M572 114 q56 -50 112 0 z" fill="#5f6b4a"/>
  <path d="M572 114 q56 -50 112 0 l0 6 q-56 -44 -112 0 z" fill="#7d8a62"/>
  <!-- enamel shade: a curved sheen along its shoulder, the rim dented -->
  <path d="M592 104 q36 -26 74 -2 l-6 6 q-32 -20 -62 0 z" fill="#a3b083" opacity="0.4"/>
  <path d="M572 114 q22 -22 46 -30" fill="none" stroke="#3f4a2c" stroke-width="3" opacity="0.6"/>
  <ellipse cx="628" cy="114" rx="56" ry="9" fill="#241b12"/>
  <ellipse cx="628" cy="112" rx="40" ry="5" fill="#c9b48a" opacity="0.18"/>
  <ellipse cx="628" cy="120" rx="18" ry="8" fill="#ffd98a" class="fx-glow" style="--d:.7s"/>
  <ellipse cx="628" cy="119" rx="9" ry="4" fill="#fffbee" opacity="0.85"/>
  <!-- the cone it drops into the room, thick with cigarette smoke -->
  <path d="M584 118 L672 118 L810 440 L446 440 Z" fill="url(#or-green-cone)" opacity="0.7"/>
  <path d="M596 118 L660 118 L756 440 L500 440 Z" fill="url(#or-green-cone)" opacity="0.55"/>
  <ellipse cx="628" cy="150" rx="126" ry="48" fill="url(#or-green-lamp)" class="fx-glow" style="--d:1.8s"/>
</g>

<!-- the sideboard and the tea urn -->
<g>
  <ellipse cx="448" cy="440" rx="130" ry="12" fill="#080604" opacity="0.45"/>
  <rect x="340" y="296" width="216" height="15" rx="3" fill="url(#or-green-panel)"/>
  <path d="M342 297 L554 297" stroke="#a3814d" stroke-width="1.6" opacity="0.5"/>
  <path d="M340 309 L556 309" stroke="#100b07" stroke-width="1.6" opacity="0.6"/>
  <rect x="352" y="311" width="192" height="122" fill="#3b2f22"/>
  <rect x="352" y="311" width="192" height="122" fill="url(#or-green-moq)" opacity="0.55"/>
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="364" y="322" width="78" height="44"/><rect x="454" y="322" width="78" height="44"/>
    <rect x="364" y="376" width="78" height="44"/><rect x="454" y="376" width="78" height="44"/>
  </g>
  <path d="M364 322 L442 322 M454 322 L532 322 M364 376 L442 376 M454 376 L532 376" stroke="#0d0906" stroke-width="1.6" opacity="0.55"/>
  <path d="M364 366 L442 366 M454 366 L532 366 M364 420 L442 420 M454 420 L532 420" stroke="#755530" stroke-width="1.4" opacity="0.45"/>
  <g fill="url(#or-green-brass)">
    <ellipse cx="403" cy="344" rx="11" ry="4"/><ellipse cx="493" cy="344" rx="11" ry="4"/>
    <ellipse cx="403" cy="398" rx="11" ry="4"/><ellipse cx="493" cy="398" rx="11" ry="4"/>
  </g>
  <g fill="#f6e5b0" opacity="0.45">
    <ellipse cx="403" cy="343" rx="6" ry="1.4"/><ellipse cx="493" cy="343" rx="6" ry="1.4"/>
    <ellipse cx="403" cy="397" rx="6" ry="1.4"/><ellipse cx="493" cy="397" rx="6" ry="1.4"/>
  </g>
  <rect x="352" y="433" width="192" height="9" fill="#241b12"/>
  <!-- the urn -->
  <g>
    <path d="M414 296 q-12 -14 -12 -34 q0 -30 46 -30 q46 0 46 30 q0 20 -12 34 z" fill="url(#or-green-nickel)"/>
    <!-- polished nickel: a bright vertical, a dark horizon where the room
         ends and the floor begins, and the lamp caught twice over -->
    <path d="M424 240 q-6 24 0 56 l10 0 q-6 -32 0 -56 z" fill="#f2eee0" opacity="0.55"/>
    <path d="M436 238 q-3 26 0 58 l4 0 q-3 -32 0 -58 z" fill="#ffffff" opacity="0.3"/>
    <path d="M404 266 q44 12 88 0 l0 8 q-44 12 -88 0 z" fill="#1e1c17" opacity="0.45"/>
    <path d="M470 240 q6 26 2 56 l-8 0 q5 -30 -2 -56 z" fill="#2b2822" opacity="0.5"/>
    <ellipse cx="482" cy="252" rx="5" ry="9" fill="#fff4d2" opacity="0.5"/>
    <path d="M404 288 q44 10 88 0 l-2 8 q-42 8 -84 0 z" fill="#c9c3ae" opacity="0.3"/>
    <ellipse cx="448" cy="232" rx="46" ry="10" fill="#a8a294"/>
    <ellipse cx="448" cy="230" rx="34" ry="5" fill="#e2ddcc" opacity="0.5"/>
    <ellipse cx="448" cy="229" rx="22" ry="6" fill="#5b564b"/>
    <rect x="441" y="216" width="14" height="14" rx="5" fill="#3a352d"/>
    <path d="M443 217 l3 0 l0 12 l-3 0 z" fill="#8e8a7d" opacity="0.6"/>
    <path d="M426 254 q22 -8 44 0" fill="none" stroke="#f0e7ce" stroke-width="3" opacity="0.35"/>
    <rect x="442" y="270" width="12" height="24" rx="3" fill="#4a453c"/>
    <path d="M443 271 l3 0 l0 22 l-3 0 z" fill="#9b968a" opacity="0.5"/>
    <path d="M442 278 l-20 0 l0 7 l20 0 z" fill="#5b564b"/>
    <path d="M424 278 l18 0" stroke="#a8a294" stroke-width="1.2" opacity="0.6"/>
    <ellipse cx="420" cy="282" rx="5" ry="7" fill="#3a352d"/>
    <path d="M494 248 q24 8 20 28 q-4 14 -18 16 l0 -9 q9 -4 9 -13 q0 -11 -11 -14 z" fill="#8e8e88"/>
    <path d="M496 251 q20 8 16 26" fill="none" stroke="#dcd7c6" stroke-width="1.6" opacity="0.5"/>
    <!-- tea has run down the tap and dried brown -->
    <path d="M424 286 q3 8 2 10" fill="none" stroke="#5a4326" stroke-width="2" opacity="0.5"/>
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
  <path d="M30 556 L362 556 L362 372 q0 -30 -30 -30 L60 342 q-30 0 -30 30 Z" fill="url(#or-green-moq)" opacity="0.5"/>
  <path d="M52 470 q144 -26 288 0 l0 -84 q-4 -22 -26 -22 L78 364 q-22 0 -26 22 z" fill="#7d332c"/>
  <!-- moquette: the nap catches the lamp along each roll and dies in the tuck -->
  <path d="M78 364 q120 -18 236 0" fill="none" stroke="#a8564a" stroke-width="3" opacity="0.4"/>
  <path d="M52 466 q144 -24 288 0" fill="none" stroke="#3a1512" stroke-width="4" opacity="0.5"/>
  <g fill="none" stroke="#4a1c18" stroke-width="3" opacity="0.85">
    <path d="M148 366 q6 50 0 100"/><path d="M244 366 q-6 50 0 100"/>
  </g>
  <path d="M151 366 q6 50 0 100 M247 366 q-6 50 0 100" fill="none" stroke="#95483f" stroke-width="1.2" opacity="0.4"/>
  <path d="M40 512 q152 -30 312 0 l0 44 l-312 0 z" fill="#5d2320"/>
  <path d="M46 508 q150 -28 300 0" fill="none" stroke="#8a423a" stroke-width="4" opacity="0.7"/>
  <path d="M40 544 q152 -20 312 0 l0 12 l-312 0 z" fill="#2a0f0d" opacity="0.5"/>
  <rect x="34" y="556" width="330" height="16" rx="4" fill="#331311"/>
  <path d="M36 557 L362 557" stroke="#6b2a24" stroke-width="1.4" opacity="0.5"/>
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
  <path d="M664 556 L964 556 L964 382 q0 -28 -28 -28 L692 354 q-28 0 -28 28 Z" fill="url(#or-green-moq)" opacity="0.5"/>
  <path d="M684 476 q128 -24 260 0 l0 -76 q-4 -20 -24 -20 L708 376 q-20 0 -24 20 z" fill="#6f7c55"/>
  <path d="M708 376 q108 -16 212 0" fill="none" stroke="#95a377" stroke-width="3" opacity="0.4"/>
  <path d="M684 472 q128 -22 260 0" fill="none" stroke="#2f3722" stroke-width="4" opacity="0.5"/>
  <g fill="none" stroke="#3c452e" stroke-width="3" opacity="0.85">
    <path d="M766 378 q6 46 0 92"/><path d="M856 378 q-6 46 0 92"/>
  </g>
  <path d="M769 378 q6 46 0 92 M859 378 q-6 46 0 92" fill="none" stroke="#8b9a68" stroke-width="1.2" opacity="0.35"/>
  <path d="M672 516 q140 -28 284 0 l0 40 l-284 0 z" fill="#4b5539"/>
  <path d="M672 546 q140 -18 284 0 l0 10 l-284 0 z" fill="#20261a" opacity="0.5"/>
  <rect x="668" y="556" width="298" height="16" rx="4" fill="#2b3122"/>
  <path d="M670 557 L964 557" stroke="#5f6b4a" stroke-width="1.4" opacity="0.5"/>
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
  <path d="M368 566 L640 566" stroke="#8a6a3f" stroke-width="1.6" opacity="0.45"/>
  <!-- the varnish is white-ringed and burnt: cigarettes left to go out on it -->
  <g fill="none" stroke="#c9b48a" stroke-width="2" opacity="0.22">
    <ellipse cx="470" cy="600" rx="24" ry="8"/><ellipse cx="574" cy="592" rx="20" ry="7"/>
    <ellipse cx="398" cy="606" rx="22" ry="7"/>
  </g>
  <g fill="#1b1109" opacity="0.65">
    <ellipse cx="608" cy="600" rx="11" ry="3.4"/><ellipse cx="440" cy="614" rx="10" ry="3"/>
    <ellipse cx="546" cy="608" rx="9" ry="2.8"/>
  </g>
  <g fill="#6b4a24" opacity="0.5">
    <ellipse cx="608" cy="599" rx="14" ry="4.4"/><ellipse cx="440" cy="613" rx="13" ry="4"/>
    <ellipse cx="546" cy="607" rx="12" ry="3.8"/>
  </g>
  <g fill="#080604" opacity="0.4">
    <ellipse cx="440" cy="600" rx="22" ry="5"/><ellipse cx="524" cy="596" rx="34" ry="6"/>
    <ellipse cx="596" cy="594" rx="30" ry="5"/>
  </g>
  <g fill="#f4ecd6">
    <path d="M420 578 l30 0 l-4 20 l-22 0 z"/><ellipse cx="435" cy="578" rx="15" ry="5"/>
  </g>
  <path d="M420 578 l6 0 l-2 20 l-4 0 z" fill="#fffaea" opacity="0.7"/>
  <path d="M446 580 l4 -2 l-4 20 l-3 0 z" fill="#9a9078" opacity="0.6"/>
  <ellipse cx="435" cy="578" rx="10" ry="3" fill="#3b2f22"/>
  <ellipse cx="437" cy="578" rx="5" ry="1.4" fill="#6b4a24" opacity="0.6"/>
  <ellipse cx="520" cy="588" rx="30" ry="10" fill="#3a352d"/>
  <ellipse cx="520" cy="586" rx="30" ry="9" fill="#5b564b" opacity="0.4"/>
  <ellipse cx="520" cy="586" rx="22" ry="6" fill="#241b12"/>
  <path d="M500 584 q20 -6 40 0" fill="none" stroke="#8e8a7d" stroke-width="1.4" opacity="0.45"/>
  <g fill="#3a2a18" opacity="0.7">
    <ellipse cx="514" cy="588" rx="7" ry="2.4"/><ellipse cx="528" cy="587" rx="5" ry="2"/>
  </g>
  <g fill="#cbb98f">
    <rect x="508" y="580" width="20" height="6" rx="3"/><rect x="524" y="586" width="18" height="5" rx="2"/>
  </g>
  <path d="M509 581 l18 0 M525 587 l16 0" stroke="#f4ecd6" stroke-width="1.2" opacity="0.6"/>
  <g fill="#e3d5ac" opacity="0.85">
    <path d="M566 576 l50 -4 l3 16 l-50 6 z"/>
  </g>
  <path d="M566 576 l50 -4 l1 5 l-50 4 z" fill="#fffaea" opacity="0.5"/>
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
  <linearGradient id="or-off-panel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4e3a25"/><stop offset="0.4" stop-color="#33271a"/><stop offset="1" stop-color="#1a1209"/>
  </linearGradient>
  <linearGradient id="or-off-boards" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c2116"/><stop offset="1" stop-color="#150f0a"/>
  </linearGradient>
  <linearGradient id="or-off-steel" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#5a5a4e"/><stop offset="0.28" stop-color="#43433a"/>
    <stop offset="0.72" stop-color="#33332c"/><stop offset="1" stop-color="#1f1f1a"/>
  </linearGradient>
  <linearGradient id="or-off-bake" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#7d7768"/><stop offset="0.3" stop-color="#4d4740"/>
    <stop offset="1" stop-color="#1e1b17"/>
  </linearGradient>
  <linearGradient id="or-off-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#e8b968" stop-opacity="0.55"/>
    <stop offset="0.22" stop-color="#f6dfa8" stop-opacity="0.7"/>
    <stop offset="0.6" stop-color="#8a5620" stop-opacity="0.6"/>
    <stop offset="1" stop-color="#4d2f10" stop-opacity="0.65"/>
  </linearGradient>
  <linearGradient id="or-off-deskwood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a5a33"/><stop offset="0.36" stop-color="#4a3524"/><stop offset="1" stop-color="#1d150d"/>
  </linearGradient>
  <linearGradient id="or-off-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e0c581"/><stop offset="0.3" stop-color="#a8873f"/><stop offset="1" stop-color="#54401a"/>
  </linearGradient>
  <linearGradient id="or-off-castR" x1="1" y1="0" x2="0" y2="0">
    <stop offset="0" stop-color="#0a0705" stop-opacity="0.5"/>
    <stop offset="0.7" stop-color="#0a0705" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#0a0705" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="or-off-pool" cx="0.34" cy="0.1" r="0.8">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.20"/>
    <stop offset="0.55" stop-color="#d9a441" stop-opacity="0.06"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#or-off-wall)"/>

<!-- cornice, picture rail, wainscot, floor -->
<!-- the paper above the rail: a fine repeating stripe, faded, water-marked -->
<path d="M40 71 L40 384 M92 71 L92 384 M144 71 L144 384 M196 71 L196 384 M248 71 L248 384 M300 71 L300 384 M352 71 L352 384 M404 71 L404 384 M456 71 L456 384 M508 71 L508 384 M560 71 L560 384 M612 71 L612 384 M664 71 L664 384 M716 71 L716 384 M768 71 L768 384 M820 71 L820 384 M872 71 L872 384 M924 71 L924 384 M976 71 L976 384" stroke="#5a4429" stroke-width="6" opacity="0.22"/>
<g fill="#12100a" opacity="0.2">
  <path d="M420 300 q70 -28 148 -6 q58 30 -12 66 q-92 22 -140 -18 z"/>
  <path d="M0 130 q56 -22 104 -2 q44 26 -12 50 q-72 16 -98 -14 z"/>
</g>
<rect x="0" y="0" width="1000" height="22" fill="#241b12"/>
<rect x="0" y="22" width="1000" height="7" fill="#4a3524"/>
<path d="M0 22 L1000 22" stroke="#8a6a3f" stroke-width="1.4" opacity="0.4"/>
<path d="M0 29 L1000 29" stroke="#0a0705" stroke-width="2.4" opacity="0.5"/>
<rect x="0" y="66" width="1000" height="5" fill="#33271a"/>
<path d="M0 66 L1000 66" stroke="#7d5c33" stroke-width="1.2" opacity="0.45"/>
<path d="M0 71 L1000 71" stroke="#0a0705" stroke-width="2" opacity="0.4"/>
<rect x="0" y="384" width="1000" height="96" fill="#241b12"/>
<rect x="0" y="384" width="1000" height="6" fill="#4a3524"/>
<path d="M0 384 L1000 384" stroke="#8a6a3f" stroke-width="1.6" opacity="0.4"/>
<g fill="url(#or-off-panel)">
  <rect x="20" y="400" width="90" height="60"/><rect x="130" y="400" width="90" height="60"/>
  <rect x="240" y="400" width="90" height="60"/><rect x="350" y="400" width="90" height="60"/>
  <rect x="460" y="400" width="90" height="60"/><rect x="570" y="400" width="90" height="60"/>
  <rect x="680" y="400" width="90" height="60"/><rect x="790" y="400" width="90" height="60"/>
  <rect x="900" y="400" width="86" height="60"/>
</g>
<path d="M20 400 L110 400 M130 400 L220 400 M240 400 L330 400 M350 400 L440 400 M460 400 L550 400 M570 400 L660 400 M680 400 L770 400 M790 400 L880 400 M900 400 L986 400" stroke="#0d0906" stroke-width="2.4" opacity="0.6"/>
<path d="M20 460 L110 460 M130 460 L220 460 M240 460 L330 460 M350 460 L440 460 M460 460 L550 460 M570 460 L660 460 M680 460 L770 460 M790 460 L880 460 M900 460 L986 460" stroke="#755530" stroke-width="2" opacity="0.45"/>
<g fill="none" stroke="#33271a" stroke-width="3">
  <rect x="20" y="400" width="90" height="60"/><rect x="130" y="400" width="90" height="60"/>
  <rect x="240" y="400" width="90" height="60"/><rect x="350" y="400" width="90" height="60"/>
  <rect x="460" y="400" width="90" height="60"/><rect x="570" y="400" width="90" height="60"/>
  <rect x="680" y="400" width="90" height="60"/><rect x="790" y="400" width="90" height="60"/>
  <rect x="900" y="400" width="86" height="60"/>
</g>
<rect x="0" y="472" width="1000" height="10" fill="#1b140d"/>
<rect x="0" y="482" width="1000" height="138" fill="url(#or-off-boards)"/>
<g stroke="#2a2016" stroke-width="2">
  <line x1="0" y1="512" x2="1000" y2="512"/><line x1="0" y1="552" x2="1000" y2="552"/>
  <line x1="0" y1="596" x2="1000" y2="596"/>
</g>
<path d="M0 515 L1000 515 M0 555 L1000 555 M0 599 L1000 599" stroke="#63492c" stroke-width="0.9" opacity="0.2"/>
<path d="M210 482 L196 620 M540 482 L536 620 M820 482 L840 620" stroke="#100b07" stroke-width="1.6" opacity="0.55"/>
<rect x="0" y="482" width="1000" height="138" fill="url(#or-off-pool)"/>
<rect width="1000" height="620" fill="url(#or-off-glow)" class="fx-glow" style="--d:2.6s"/>

<!-- posters of past triumphs: no letters, only ink and colour -->
<g>
  <path d="M182 92 L190 86 L190 298 L182 304 Z" fill="#080604" opacity="0.4"/>
  <rect x="34" y="86" width="150" height="212" fill="#5c4327"/>
  <path d="M36 88 L182 88 M36 88 L36 296" stroke="#a3814d" stroke-width="1.6" opacity="0.45"/>
  <path d="M34 296 L184 296 M182 88 L182 296" stroke="#1b1209" stroke-width="1.8" opacity="0.55"/>
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
  <path d="M42 290 L128 94 L154 94 L68 290 Z" fill="#f0e7ce" opacity="0.07"/>
  <path d="M42 94 L176 94 L176 108 q-66 8 -134 0 z" fill="#0a0705" opacity="0.22"/>
</g>
<g>
  <path d="M336 118 L344 112 L344 298 L336 304 Z" fill="#080604" opacity="0.4"/>
  <rect x="206" y="112" width="132" height="186" fill="#5c4327"/>
  <path d="M208 114 L336 114 M208 114 L208 296" stroke="#a3814d" stroke-width="1.6" opacity="0.45"/>
  <path d="M206 296 L338 296 M336 114 L336 296" stroke="#1b1209" stroke-width="1.8" opacity="0.55"/>
  <rect x="214" y="120" width="116" height="170" fill="#cbb98f"/>
  <path d="M214 290 L214 216 L246 216 L246 190 L280 190 L280 220 L312 220 L312 200 L330 200 L330 290 Z" fill="#1b2436"/>
  <circle cx="290" cy="158" r="24" fill="#d9a441" opacity="0.75"/>
  <g stroke="#5d1f18" stroke-width="5" opacity="0.8">
    <line x1="226" y1="136" x2="318" y2="136"/><line x1="240" y1="150" x2="304" y2="150"/>
  </g>
  <g stroke="#8d7c62" stroke-width="2.5" opacity="0.75">
    <line x1="226" y1="272" x2="318" y2="272"/><line x1="236" y1="282" x2="308" y2="282"/>
  </g>
  <path d="M214 290 L288 120 L310 120 L236 290 Z" fill="#f0e7ce" opacity="0.06"/>
  <path d="M214 120 L330 120 L330 132 q-58 8 -116 0 z" fill="#0a0705" opacity="0.22"/>
</g>
<g transform="rotate(-3 420 200)">
  <path d="M482 132 L490 126 L490 290 L482 296 Z" fill="#080604" opacity="0.4"/>
  <rect x="358" y="126" width="126" height="164" fill="#5c4327"/>
  <path d="M360 128 L482 128 M360 128 L360 288" stroke="#a3814d" stroke-width="1.6" opacity="0.45"/>
  <path d="M358 288 L484 288 M482 128 L482 288" stroke="#1b1209" stroke-width="1.8" opacity="0.55"/>
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
  <path d="M366 282 L436 134 L458 134 L388 282 Z" fill="#f0e7ce" opacity="0.06"/>
  <path d="M366 134 L476 134 L476 146 q-56 8 -110 0 z" fill="#0a0705" opacity="0.22"/>
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
  <!-- rain on the outside of the glass, and the city glow smeared through it -->
  <rect x="676" y="72" width="252" height="232" fill="#8fa4c0" opacity="0.05"/>
  <g fill="#c3d2e2" opacity="0.16">
    <ellipse cx="700" cy="160" rx="2.4" ry="5"/><ellipse cx="742" cy="212" rx="2" ry="4"/>
    <ellipse cx="784" cy="132" rx="2.6" ry="5.4"/><ellipse cx="836" cy="196" rx="2" ry="4.4"/>
    <ellipse cx="880" cy="236" rx="2.4" ry="5"/><ellipse cx="716" cy="252" rx="2" ry="4"/>
    <ellipse cx="908" cy="160" rx="2.2" ry="4.6"/><ellipse cx="762" cy="288" rx="2" ry="4"/>
  </g>
  <path d="M700 100 q4 40 -6 74 M812 118 q5 46 -4 84 M886 140 q4 40 -5 76" fill="none" stroke="#c3d2e2" stroke-width="1.2" opacity="0.14"/>
  <path d="M676 72 L928 72 L928 96 q-126 14 -252 0 z" fill="#0a0d16" opacity="0.4"/>
  <g stroke="#3a2d1e" stroke-width="6">
    <line x1="802" y1="72" x2="802" y2="304"/><line x1="676" y1="188" x2="928" y2="188"/>
  </g>
  <path d="M805 72 L805 304 M676 191 L928 191" stroke="#7d5c33" stroke-width="1.4" opacity="0.4"/>
  <path d="M799 72 L799 304 M676 185 L928 185" stroke="#100b07" stroke-width="1.6" opacity="0.5"/>
  <path d="M664 60 l278 0 l0 16 l-278 0 z" fill="#4a3524"/>
  <path d="M664 60 l278 0" stroke="#8a6a3f" stroke-width="1.6" opacity="0.45"/>
  <path d="M664 76 l278 0" stroke="#100b07" stroke-width="1.6" opacity="0.55"/>
  <!-- curtains: heavy cotton, the light falling off round each fold -->
  <path d="M660 62 l40 0 l-4 244 q-20 10 -38 2 z" fill="#4a2a20"/>
  <path d="M906 62 l42 0 l4 248 q-22 10 -42 2 z" fill="#4a2a20"/>
  <path d="M676 62 l10 0 l-3 242 l-9 2 z" fill="#6e4231" opacity="0.5"/>
  <path d="M926 62 l10 0 l4 244 l-10 2 z" fill="#6e4231" opacity="0.5"/>
  <g fill="none" stroke="#2f1a14" stroke-width="3" opacity="0.9">
    <path d="M672 66 l-4 238"/><path d="M686 66 l-3 240"/>
    <path d="M920 66 l3 240"/><path d="M936 66 l5 240"/>
  </g>
  <path d="M660 300 q20 10 38 0 l0 8 q-20 10 -38 0 z" fill="#0a0705" opacity="0.4"/>
  <path d="M910 302 q22 10 42 0 l0 8 q-22 10 -42 0 z" fill="#0a0705" opacity="0.4"/>
</g>

<!-- a filing cabinet and the safe, in the corner -->
<g>
  <path d="M640 264 L648 258 L648 472 L640 472 Z" fill="#080604" opacity="0.4"/>
  <rect x="512" y="256" width="128" height="216" fill="url(#or-off-steel)"/>
  <rect x="512" y="256" width="128" height="10" fill="#4d4d43"/>
  <path d="M512 257 L640 257" stroke="#9b968a" stroke-width="1.4" opacity="0.5"/>
  <path d="M512 266 L640 266" stroke="#16150f" stroke-width="1.6" opacity="0.6"/>
  <g fill="none" stroke="#242420" stroke-width="3">
    <rect x="522" y="274" width="108" height="60"/><rect x="522" y="342" width="108" height="60"/>
    <rect x="522" y="410" width="108" height="54"/>
  </g>
  <path d="M522 276 L630 276 M522 344 L630 344 M522 412 L630 412" stroke="#6a685c" stroke-width="1.2" opacity="0.45"/>
  <path d="M522 334 L630 334 M522 402 L630 402 M522 464 L630 464" stroke="#100f0c" stroke-width="1.6" opacity="0.6"/>
  <!-- steel takes a long soft highlight down its rolled front edge -->
  <path d="M526 268 q6 100 2 200 l-8 0 q-4 -100 -2 -200 z" fill="#8e8c80" opacity="0.22"/>
  <path d="M604 288 q4 6 -2 10 q-6 -2 -2 -9 z" fill="#16150f" opacity="0.5"/>
  <g fill="#8e8e88">
    <rect x="558" y="298" width="36" height="8" rx="3"/><rect x="558" y="366" width="36" height="8" rx="3"/>
    <rect x="558" y="432" width="36" height="8" rx="3"/>
  </g>
  <path d="M559 299 l34 0 M559 367 l34 0 M559 433 l34 0" stroke="#d5d0bf" stroke-width="1.2" opacity="0.55"/>
  <path d="M558 305 l36 0 M558 373 l36 0 M558 439 l36 0" stroke="#14130f" stroke-width="1.4" opacity="0.6"/>
  <g fill="#e3d5ac" opacity="0.9">
    <rect x="536" y="238" width="46" height="18"/><rect x="586" y="234" width="42" height="22"/>
  </g>
  <path d="M536 238 l46 0 l0 3 l-46 0 z M586 234 l42 0 l0 3 l-42 0 z" fill="#fffaea" opacity="0.6"/>
  <path d="M536 252 l46 0 l0 4 l-46 0 z M586 250 l42 0 l0 6 l-42 0 z" fill="#0a0705" opacity="0.35"/>
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
  <!-- the desk lamp is down and to his left; it edges that whole side -->
  <path d="M566 470 q0 -80 62 -91 l6 8 q-54 12 -54 83 z" fill="#ffd98a" opacity="0.16"/>
  <path d="M746 470 q0 -80 -62 -91 l-6 8 q54 12 54 83 z" fill="#0a0705" opacity="0.28"/>
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
  <path d="M632 328 q-6 22 6 38 l6 -4 q-10 -16 -5 -34 z" fill="#ffd98a" opacity="0.22"/>
  <path d="M688 330 q6 22 -6 38 l-6 -4 q10 -16 5 -34 z" fill="#0a0705" opacity="0.3"/>
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
  <rect x="104" y="470" width="712" height="26" rx="4" fill="url(#or-off-deskwood)"/>
  <path d="M106 471 L814 471" stroke="#a3814d" stroke-width="1.8" opacity="0.5"/>
  <path d="M104 494 L816 494" stroke="#100b07" stroke-width="1.8" opacity="0.6"/>
  <path d="M180 476 q140 -4 280 0 M500 484 q150 -4 296 0" fill="none" stroke="#6a4d2c" stroke-width="1" opacity="0.35"/>
  <rect x="104" y="492" width="712" height="10" fill="#33271a"/>
  <rect x="128" y="502" width="664" height="118" fill="#3b2f22"/>
  <rect x="128" y="502" width="664" height="118" fill="url(#or-off-castR)" opacity="0.55"/>
  <rect x="326" y="502" width="268" height="118" fill="#241b12"/>
  <!-- right pedestal, shut -->
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="616" y="514" width="152" height="34"/><rect x="616" y="556" width="152" height="34"/>
    <rect x="616" y="598" width="152" height="22"/>
  </g>
  <path d="M616 514 L768 514 M616 556 L768 556 M616 598 L768 598" stroke="#0d0906" stroke-width="1.6" opacity="0.55"/>
  <path d="M616 548 L768 548 M616 590 L768 590" stroke="#7d5c33" stroke-width="1.4" opacity="0.4"/>
  <g fill="url(#or-off-brass)">
    <ellipse cx="692" cy="531" rx="16" ry="5"/><ellipse cx="692" cy="573" rx="16" ry="5"/>
  </g>
  <g fill="#f6e5b0" opacity="0.4">
    <ellipse cx="692" cy="530" rx="9" ry="1.6"/><ellipse cx="692" cy="572" rx="9" ry="1.6"/>
  </g>
  <!-- LEFT PEDESTAL: the drawer standing open on its papers -->
  <g fill="none" stroke="#4a3524" stroke-width="3">
    <rect x="152" y="556" width="152" height="34"/><rect x="152" y="598" width="152" height="22"/>
  </g>
  <path d="M152 556 L304 556 M152 598 L304 598" stroke="#0d0906" stroke-width="1.6" opacity="0.55"/>
  <path d="M152 590 L304 590" stroke="#7d5c33" stroke-width="1.4" opacity="0.4"/>
  <ellipse cx="228" cy="573" rx="16" ry="5" fill="url(#or-off-brass)"/>
  <ellipse cx="228" cy="572" rx="9" ry="1.6" fill="#f6e5b0" opacity="0.4"/>
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
  <path d="M150 452 L330 452" stroke="#8e3327" stroke-width="1.6" opacity="0.6"/>
  <path d="M152 470 L328 470" stroke="#2c0d0a" stroke-width="1.6" opacity="0.6"/>
  <g fill="#3a0f0b" opacity="0.35">
    <path d="M180 458 q34 -5 66 2 q-32 7 -68 2 z"/><path d="M264 460 q26 -4 50 2 q-24 6 -52 2 z"/>
  </g>
  <rect x="156" y="444" width="168" height="10" fill="#3a2418"/>
  <path d="M156 444 L324 444" stroke="#7d5c33" stroke-width="1.2" opacity="0.4"/>
  <!-- the bottle of rye at low tide: glass, so it holds one hard specular
       and passes the lamp through what is left in it -->
  <ellipse cx="360" cy="470" rx="26" ry="5" fill="#080604" opacity="0.45"/>
  <g>
    <path d="M356 470 l0 -52 q0 -10 -8 -16 l0 -22 l24 0 l0 22 q-8 6 -8 16 l0 52 z" fill="#8a6636" opacity="0.55"/>
    <path d="M356 470 l0 -30 l8 0 l0 30 z" fill="url(#or-off-rye)"/>
    <path d="M348 442 l24 0 l0 28 l-24 0 z" fill="url(#or-off-glass)"/>
    <path d="M348 442 l24 0 l0 3 l-24 0 z" fill="#f6dfa8" opacity="0.7"/>
    <path d="M368 444 l4 0 l0 26 l-4 0 z" fill="#3a2208" opacity="0.55"/>
    <rect x="352" y="374" width="16" height="12" rx="3" fill="#241b12"/>
    <path d="M353 375 l4 0 l0 10 l-4 0 z" fill="#6b5a45" opacity="0.6"/>
    <rect x="348" y="404" width="24" height="20" fill="#a8352a" opacity="0.6"/>
    <path d="M348 404 l24 0 l0 3 l-24 0 z" fill="#d8695a" opacity="0.5"/>
    <g stroke="#e3d5ac" stroke-width="1.5" opacity="0.7">
      <line x1="352" y1="410" x2="368" y2="410"/><line x1="352" y1="416" x2="364" y2="416"/>
    </g>
    <path d="M354 424 l0 40" stroke="#ffffff" stroke-width="2.5" opacity="0.35"/>
    <path d="M351 390 l0 78" stroke="#ffffff" stroke-width="1.2" opacity="0.25"/>
    <path d="M370 392 l0 76" stroke="#100b04" stroke-width="1.4" opacity="0.4"/>
  </g>
  <ellipse cx="401" cy="470" rx="20" ry="4" fill="#080604" opacity="0.4"/>
  <g>
    <path d="M388 470 l0 -34 l26 0 l0 34 z" fill="#efe8d2" opacity="0.9"/>
    <path d="M388 470 l0 -14 l26 0 l0 14 z" fill="#8a5620"/>
    <path d="M388 456 l26 0 l0 3 l-26 0 z" fill="#e8b968" opacity="0.7"/>
    <path d="M389 438 l4 0 l0 30 l-4 0 z" fill="#ffffff" opacity="0.45"/>
    <path d="M410 438 l4 0 l0 30 l-4 0 z" fill="#4d3a1a" opacity="0.4"/>
    <ellipse cx="401" cy="436" rx="13" ry="4" fill="#f4ecd6" opacity="0.9"/>
    <ellipse cx="399" cy="436" rx="7" ry="1.8" fill="#ffffff" opacity="0.5"/>
  </g>
  <!-- an ashtray, over-used -->
  <ellipse cx="472" cy="470" rx="38" ry="6" fill="#080604" opacity="0.4"/>
  <ellipse cx="470" cy="462" rx="34" ry="11" fill="#3a352d"/>
  <ellipse cx="470" cy="460" rx="34" ry="10" fill="#6a6457" opacity="0.4"/>
  <ellipse cx="470" cy="459" rx="26" ry="7" fill="#241b12"/>
  <path d="M448 456 q22 -6 44 0" fill="none" stroke="#8e8a7d" stroke-width="1.4" opacity="0.4"/>
  <g fill="#3a2a18" opacity="0.7">
    <ellipse cx="462" cy="461" rx="8" ry="2.6"/><ellipse cx="480" cy="460" rx="6" ry="2.2"/>
  </g>
  <g fill="#cbb98f">
    <rect x="452" y="452" width="22" height="6" rx="3"/><rect x="470" y="458" width="20" height="6" rx="3"/>
    <rect x="460" y="446" width="18" height="5" rx="2"/>
  </g>
  <path d="M453 453 l20 0 M471 459 l18 0 M461 447 l16 0" stroke="#f4ecd6" stroke-width="1.1" opacity="0.6"/>
  <g fill="#1b1109" opacity="0.7">
    <rect x="470" y="452" width="5" height="6" rx="2"/><rect x="486" y="458" width="5" height="6" rx="2"/>
  </g>
  <!-- THE TELEPHONE and its pad -->
  <g transform="translate(-104 12)">
    <ellipse cx="862" cy="472" rx="54" ry="9" fill="#080604" opacity="0.4"/>
    <ellipse cx="856" cy="466" rx="48" ry="14" fill="#3a352d"/>
    <ellipse cx="856" cy="462" rx="40" ry="11" fill="url(#or-off-bake)"/>
    <ellipse cx="844" cy="458" rx="16" ry="4" fill="#9b968a" opacity="0.4"/>
    <path d="M832 452 q24 -16 48 0 l0 -10 q-24 -14 -48 0 z" fill="#5b564b"/>
    <path d="M834 444 q22 -12 44 0" fill="none" stroke="#a8a294" stroke-width="1.4" opacity="0.5"/>
    <rect x="848" y="376" width="16" height="70" fill="#4d4740"/>
    <rect x="852" y="376" width="5" height="70" fill="#7d7768"/>
    <path d="M862 378 l2 0 l0 66 l-2 0 z" fill="#16150f" opacity="0.6"/>
    <path d="M836 374 q20 -14 40 0 l0 10 q-20 -12 -40 0 z" fill="#6f6a5e"/>
    <ellipse cx="856" cy="372" rx="20" ry="7" fill="#8e8e88"/>
    <ellipse cx="850" cy="370" rx="8" ry="2.4" fill="#d5d0bf" opacity="0.6"/>
    <ellipse cx="856" cy="370" rx="11" ry="4" fill="#241b12"/>
    <!-- the receiver, set back on its fork askew -->
    <g transform="translate(0 20) rotate(-11 856 352)">
      <path d="M814 346 q42 -20 84 0 l-5 16 q-37 -18 -74 0 z" fill="url(#or-off-bake)"/>
      <path d="M814 346 q42 -20 84 0 l-2 6 q-40 -18 -80 0 z" fill="#6f6a5e"/>
      <path d="M818 344 q38 -16 76 0" fill="none" stroke="#c2bdae" stroke-width="1.4" opacity="0.5"/>
      <ellipse cx="812" cy="354" rx="15" ry="12" fill="#5b564b"/>
      <ellipse cx="900" cy="354" rx="15" ry="12" fill="#5b564b"/>
      <path d="M802 350 q4 -8 12 -8" fill="none" stroke="#b3aea0" stroke-width="2" opacity="0.4"/>
      <path d="M890 350 q4 -8 12 -8" fill="none" stroke="#b3aea0" stroke-width="2" opacity="0.4"/>
      <ellipse cx="812" cy="354" rx="8" ry="6" fill="#1b1814"/>
      <ellipse cx="900" cy="354" rx="8" ry="6" fill="#1b1814"/>
    </g>
    <path d="M818 468 q-30 8 -44 -6 q-14 -14 -2 -26" fill="none" stroke="#1b1814" stroke-width="4"/>
    <path d="M818 466 q-28 6 -42 -6" fill="none" stroke="#4d4740" stroke-width="1.5" opacity="0.6"/>
  </g>
  <!-- the pad: the top sheet torn off, the impression still there -->
  <g transform="translate(-64 34) rotate(4 726 428)">
    <rect x="680" y="414" width="100" height="52" rx="2" fill="#080604" opacity="0.4"/>
    <rect x="676" y="410" width="100" height="52" rx="2" fill="#cbb98f"/>
    <rect x="676" y="410" width="100" height="44" rx="2" fill="#f0e7ce"/>
    <path d="M676 410 l100 0 l0 3 l-100 0 z" fill="#fffaea" opacity="0.6"/>
    <path d="M676 448 l100 0 l0 6 l-100 0 z" fill="#a89a7c" opacity="0.4"/>
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
  <path d="M28 500 l76 0 l-10 84 l-56 0 z" fill="url(#or-off-steel)"/>
  <path d="M28 500 l76 0 l-2 14 l-72 0 z" fill="#6f6a5e"/>
  <path d="M28 500 l76 0" stroke="#b3aea0" stroke-width="1.4" opacity="0.5"/>
  <path d="M30 514 l72 0" stroke="#16150f" stroke-width="1.4" opacity="0.55"/>
  <!-- galvanised tin: one long soft highlight, then a hard dark rib -->
  <path d="M36 516 q-2 32 0 66 l10 0 q-3 -34 -1 -66 z" fill="#9b968a" opacity="0.28"/>
  <path d="M86 516 q3 32 2 66 l6 0 q-2 -34 -4 -66 z" fill="#100f0c" opacity="0.4"/>
  <g stroke="#2f2b26" stroke-width="3" opacity="0.8">
    <line x1="46" y1="516" x2="42" y2="578"/><line x1="66" y1="516" x2="66" y2="578"/>
    <line x1="86" y1="516" x2="90" y2="578"/>
  </g>
  <g fill="#e3d5ac">
    <path d="M36 496 q18 -20 38 -6 q16 12 -2 20 q-24 8 -36 -14 z"/>
    <path d="M74 494 q14 -16 30 -4 q12 10 -4 16 q-20 6 -26 -12 z"/>
  </g>
  <path d="M40 492 q16 -14 32 -4 M78 490 q12 -10 24 -2" fill="none" stroke="#fffaea" stroke-width="1.6" opacity="0.5"/>
  <path d="M44 506 q16 6 30 -2 M84 504 q12 4 22 -2" fill="none" stroke="#8d7c62" stroke-width="1.6" opacity="0.5"/>
  <ellipse cx="136" cy="588" rx="30" ry="5" fill="#080604" opacity="0.4"/>
  <path d="M112 570 q22 -20 44 -4 q14 12 -6 20 q-28 8 -38 -16 z" fill="#cbb98f"/>
  <path d="M116 568 q20 -16 38 -2" fill="none" stroke="#f4ecd6" stroke-width="1.6" opacity="0.6"/>
  <path d="M118 580 q18 6 32 -2" fill="none" stroke="#8d7c62" stroke-width="1.6" opacity="0.5"/>
</g>

<!-- foreground: the visitor's chair, seen from behind -->
<g>
  <path d="M754 620 L1010 620 L1010 500 q-136 -24 -270 4 Z" fill="#1b140d"/>
  <path d="M740 512 q136 -28 270 -4" fill="none" stroke="#4a3524" stroke-width="6"/>
  <path d="M742 516 q134 -26 268 -4" fill="none" stroke="#7d5c33" stroke-width="1.6" opacity="0.4"/>
  <path d="M754 620 L1010 620 L1010 500 q-136 -24 -270 4 Z" fill="url(#or-off-castR)" opacity="0.5"/>
  <g fill="#2b1f14">
    <circle cx="812" cy="546" r="5"/><circle cx="888" cy="538" r="5"/><circle cx="962" cy="536" r="5"/>
  </g>
</g>

<!-- the room's air: smoke off the ashtray, standing in the lamplight -->
<g class="fx-drift-slow" style="--d:1.1s" fill="#e6d3ae">
  <ellipse cx="486" cy="410" rx="26" ry="9" opacity="0.05"/>
  <ellipse cx="502" cy="360" rx="34" ry="11" opacity="0.045"/>
  <ellipse cx="480" cy="312" rx="42" ry="13" opacity="0.035"/>
  <ellipse cx="508" cy="262" rx="50" ry="15" opacity="0.028"/>
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
  <linearGradient id="or-box-nap" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#000000" stop-opacity="0.5"/>
    <stop offset="0.5" stop-color="#000000" stop-opacity="0.06"/>
    <stop offset="0.82" stop-color="#ffcf86" stop-opacity="0.06"/>
    <stop offset="1" stop-color="#ffcf86" stop-opacity="0.14"/>
  </linearGradient>
  <linearGradient id="or-box-haze" x1="0" y1="1" x2="0.55" y2="0">
    <stop offset="0" stop-color="#c39a56" stop-opacity="0.22"/>
    <stop offset="0.5" stop-color="#9d8a6a" stop-opacity="0.10"/>
    <stop offset="1" stop-color="#6d6c5a" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="or-box-giltroll" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a6a34"/><stop offset="0.2" stop-color="#f6dfa8"/>
    <stop offset="0.5" stop-color="#c0993f"/><stop offset="1" stop-color="#5c4327"/>
  </linearGradient>
  <linearGradient id="or-box-carpet" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5d1f18"/><stop offset="0.5" stop-color="#48160f"/><stop offset="1" stop-color="#2a0e0a"/>
  </linearGradient>
  <linearGradient id="or-box-castR" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#080604" stop-opacity="0"/>
    <stop offset="0.45" stop-color="#080604" stop-opacity="0.18"/>
    <stop offset="1" stop-color="#080604" stop-opacity="0.5"/>
  </linearGradient>
  <linearGradient id="or-box-nickel" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#a8a294"/><stop offset="0.3" stop-color="#6f6a5e"/>
    <stop offset="0.72" stop-color="#413c34"/><stop offset="1" stop-color="#26231e"/>
  </linearGradient>
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
<!-- the house is deep, and full of the dust the stage light throws up:
     everything past the proscenium loses contrast into it -->
<rect x="60" y="30" width="880" height="384" fill="url(#or-box-haze)"/>
<g fill="#c9a568" opacity="0.05">
  <ellipse cx="330" cy="310" rx="330" ry="130"/><ellipse cx="250" cy="366" rx="260" ry="80"/>
</g>
<g fill="#0c0907" opacity="0.28">
  <ellipse cx="880" cy="150" rx="240" ry="180"/>
</g>
<g fill="#7d7160" opacity="0.06">
  <ellipse cx="700" cy="250" rx="300" ry="150"/>
</g>
<rect width="1000" height="620" fill="url(#or-box-glow)"/>

<!-- the box: velvet walls left and right -->
<g>
  <path d="M-10 0 L128 0 L104 620 L-10 620 Z" fill="url(#or-box-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="5" opacity="0.9">
    <path d="M14 0 L2 620"/><path d="M46 0 L30 620"/><path d="M80 0 L58 620"/><path d="M112 0 L86 620"/>
  </g>
  <!-- the nap takes the stage light along the shoulder of each fold -->
  <path d="M8 0 L-4 620 M40 0 L24 620 M74 0 L52 620 M106 0 L80 620" stroke="#94382e" stroke-width="1.8" opacity="0.35"/>
  <path d="M-10 0 L128 0 L104 620 L-10 620 Z" fill="url(#or-box-nap)"/>
  <path d="M1010 0 L900 0 L924 620 L1010 620 Z" fill="url(#or-box-velvet)"/>
  <g fill="none" stroke="#2a100e" stroke-width="5" opacity="0.9">
    <path d="M986 0 L996 620"/><path d="M956 0 L972 620"/><path d="M926 0 L948 620"/>
  </g>
  <path d="M980 0 L990 620 M950 0 L966 620 M920 0 L942 620" stroke="#7d2d24" stroke-width="1.6" opacity="0.25"/>
  <path d="M1010 0 L900 0 L924 620 L1010 620 Z" fill="url(#or-box-nap)"/>
  <path d="M1010 0 L900 0 L924 620 L1010 620 Z" fill="url(#or-box-castR)" opacity="0.5"/>
  <!-- the gilt paterae: high-relief plaster, chipped through to red bole -->
  <g fill="url(#or-box-gilt)" opacity="0.9">
    <circle cx="58" cy="186" r="22"/><circle cx="952" cy="186" r="22"/>
  </g>
  <path d="M40 176 q18 -14 36 -2" fill="none" stroke="#fbeec2" stroke-width="2.4" opacity="0.55"/>
  <path d="M40 196 q18 12 36 2" fill="none" stroke="#4a3416" stroke-width="2.4" opacity="0.6"/>
  <path d="M934 176 q18 -14 36 -2" fill="none" stroke="#fbeec2" stroke-width="2" opacity="0.35"/>
  <g fill="#8e3327" opacity="0.7">
    <path d="M70 172 q7 -3 9 3 q-6 4 -10 -1 z"/><path d="M46 200 q6 -2 8 3 q-6 3 -9 -1 z"/>
    <path d="M962 196 q6 -2 8 3 q-6 3 -9 -1 z"/>
  </g>
  <g fill="#431916">
    <circle cx="58" cy="186" r="10"/><circle cx="952" cy="186" r="10"/>
  </g>
  <g fill="none" stroke="#a8873f" stroke-width="3" opacity="0.7">
    <circle cx="58" cy="186" r="33"/><circle cx="952" cy="186" r="33"/>
  </g>
  <path d="M32 164 q28 -22 56 -2" fill="none" stroke="#f0d492" stroke-width="1.6" opacity="0.45"/>
  <path d="M28 204 q30 24 60 4" fill="none" stroke="#3a2a10" stroke-width="1.8" opacity="0.5"/>
  <!-- the swagged pelmet overhead -->
  <path d="M-10 0 L1010 0 L1010 40 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -124 0 Z" fill="url(#or-box-velvet)"/>
  <path d="M1010 40 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -128 0 q-64 62 -124 0" fill="none" stroke="#8e3327" stroke-width="2" opacity="0.3"/>
  <path d="M-10 32 q30 50 60 4 M118 32 q30 50 60 4 M246 32 q30 50 60 4 M374 32 q30 50 60 4 M502 32 q30 50 60 4 M630 32 q30 50 60 4 M758 32 q30 50 60 4 M886 32 q30 50 60 4" fill="none" stroke="#1c0a09" stroke-width="4" opacity="0.4"/>
  <rect x="-10" y="0" width="1020" height="80" fill="#000000" opacity="0.24"/>
  <g fill="url(#or-box-gilt)">
    <circle cx="-10" cy="68" r="9"/><circle cx="118" cy="68" r="9"/><circle cx="246" cy="68" r="9"/>
    <circle cx="374" cy="68" r="9"/><circle cx="502" cy="68" r="9"/><circle cx="630" cy="68" r="9"/>
    <circle cx="758" cy="68" r="9"/><circle cx="886" cy="68" r="9"/><circle cx="1010" cy="68" r="9"/>
  </g>
  <g fill="#fbeec2" opacity="0.4">
    <circle cx="115" cy="65" r="3"/><circle cx="243" cy="65" r="3"/><circle cx="371" cy="65" r="3"/>
    <circle cx="499" cy="65" r="3"/><circle cx="627" cy="65" r="3"/><circle cx="755" cy="65" r="3"/>
    <circle cx="883" cy="65" r="3"/>
  </g>
  <rect x="-10" y="0" width="1020" height="14" fill="#14110d"/>
  <path d="M-10 14 L1010 14 L1010 22 L-10 22 Z" fill="url(#or-box-gilt)" opacity="0.5"/>
  <path d="M-10 14 L1010 14" stroke="#f0d492" stroke-width="1.4" opacity="0.35"/>
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
  <path d="M138 416 l7 0 l0 32 l-7 0 z M210 416 l7 0 l0 32 l-7 0 z M282 416 l7 0 l0 32 l-7 0 z M354 416 l7 0 l0 32 l-7 0 z M426 416 l7 0 l0 32 l-7 0 z M498 416 l7 0 l0 32 l-7 0 z M570 416 l7 0 l0 32 l-7 0 z M642 416 l7 0 l0 32 l-7 0 z M714 416 l7 0 l0 32 l-7 0 z M786 416 l7 0 l0 32 l-7 0 z M858 416 l7 0 l0 32 l-7 0 z" fill="#3a2a10" opacity="0.55"/>
  <path d="M133 416 l3 0 l0 32 l-3 0 z M205 416 l3 0 l0 32 l-3 0 z M277 416 l3 0 l0 32 l-3 0 z M349 416 l3 0 l0 32 l-3 0 z M421 416 l3 0 l0 32 l-3 0 z M493 416 l3 0 l0 32 l-3 0 z M565 416 l3 0 l0 32 l-3 0 z M637 416 l3 0 l0 32 l-3 0 z M709 416 l3 0 l0 32 l-3 0 z M781 416 l3 0 l0 32 l-3 0 z M853 416 l3 0 l0 32 l-3 0 z" fill="#fbeec2" opacity="0.4"/>
  <!-- the top roll of the rail: fifty years of forearms have worn the gilt
       through to the red bole under it -->
  <rect x="98" y="356" width="826" height="30" rx="10" fill="url(#or-box-giltroll)"/>
  <rect x="104" y="360" width="814" height="8" rx="4" fill="#f4dda0" opacity="0.65"/>
  <rect x="104" y="360" width="814" height="3" rx="2" fill="#fffaea" opacity="0.5"/>
  <path d="M98 382 L924 382" stroke="#3a2a10" stroke-width="2" opacity="0.5"/>
  <g fill="#8e3327" opacity="0.45">
    <path d="M242 366 q46 -6 90 2 q-44 8 -92 2 z"/><path d="M486 368 q54 -6 106 2 q-52 8 -110 2 z"/>
    <path d="M700 366 q40 -5 78 2 q-38 7 -80 2 z"/>
  </g>
  <g fill="#3a2a10" opacity="0.35">
    <path d="M330 374 q26 -3 50 1 q-24 5 -52 1 z"/><path d="M620 376 q22 -3 42 1 q-20 4 -44 1 z"/>
  </g>
  <rect x="98" y="386" width="826" height="12" fill="#7d6132"/>
  <path d="M98 386 L924 386" stroke="#c0993f" stroke-width="1.4" opacity="0.5"/>
  <path d="M98 396 L924 396" stroke="#2c2010" stroke-width="1.6" opacity="0.6"/>
  <rect x="98" y="398" width="826" height="16" fill="#5d1f18"/>
  <g fill="none" stroke="#d7b064" stroke-width="3" opacity="0.55">
    <path d="M150 404 q34 -12 68 0"/><path d="M242 404 q34 -12 68 0"/><path d="M334 404 q34 -12 68 0"/>
    <path d="M426 404 q34 -12 68 0"/><path d="M518 404 q34 -12 68 0"/><path d="M610 404 q34 -12 68 0"/>
    <path d="M702 404 q34 -12 68 0"/><path d="M794 404 q34 -12 68 0"/>
  </g>
  <path d="M150 406 q34 -12 68 0 M242 406 q34 -12 68 0 M334 406 q34 -12 68 0 M426 406 q34 -12 68 0 M518 406 q34 -12 68 0 M610 406 q34 -12 68 0 M702 406 q34 -12 68 0 M794 406 q34 -12 68 0" fill="none" stroke="#4a2a10" stroke-width="1.4" opacity="0.5"/>
  <path d="M96 414 L926 414 L936 448 L88 448 Z" fill="url(#or-box-castR)" opacity="0.6"/>
</g>

<!-- the floor of the box -->
<path d="M88 448 L936 448 L960 620 L64 620 Z" fill="#2b1d14"/>
<path d="M120 470 L904 470 L920 620 L104 620 Z" fill="url(#or-box-carpet)" opacity="0.6"/>
<g stroke="#7d2d24" stroke-width="4" opacity="0.35" fill="none">
  <path d="M260 620 L266 476"/><path d="M470 620 L470 476"/><path d="M680 620 L676 476"/>
</g>
<!-- carpet pile, walked flat down the middle of the box -->
<g fill="#8e3327" opacity="0.10">
  <path d="M330 620 L640 620 L604 480 L392 480 Z"/>
</g>
<path d="M180 500 q300 -8 640 0 M160 550 q320 -10 690 0" fill="none" stroke="#2a0e0a" stroke-width="7" opacity="0.25"/>
<path d="M88 448 L936 448 L960 620 L64 620 Z" fill="url(#or-box-castR)" opacity="0.45"/>

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
  <path d="M644 444 L760 444 L760 278 q0 -20 -26 -22 l-64 0 q-26 2 -26 22 Z" fill="url(#or-box-castR)" opacity="0.5"/>
  <g fill="none" stroke="#3f1613" stroke-width="3" opacity="0.85">
    <path d="M682 258 l0 186"/><path d="M722 258 l0 186"/>
  </g>
  <path d="M679 258 l0 186 M719 258 l0 186" fill="none" stroke="#8e3327" stroke-width="1.3" opacity="0.3"/>
  <path d="M628 256 q74 -36 148 0 l0 14 q-74 -32 -148 0 z" fill="url(#or-box-gilt)"/>
  <path d="M630 254 q74 -34 144 0" fill="none" stroke="#fbeec2" stroke-width="1.8" opacity="0.4"/>
  <!-- the coat, thrown over the back: wool, so the light on it is broad and soft -->
  <path d="M598 278 q76 -50 158 -18 q38 16 44 70 q10 84 -8 158 l-62 -6 q12 -90 -6 -150 q-46 -24 -96 6 q-24 46 -16 144 l-52 -6 q-16 -112 38 -198 z" fill="#1e1a28"/>
  <path d="M598 278 q40 -26 82 -26 l0 10 q-38 2 -74 26 z" fill="#3a3350" opacity="0.5"/>
  <path d="M604 306 q-24 42 -20 148 l-16 -2 q-14 -104 26 -156 z" fill="#3a3350" opacity="0.35"/>
  <path d="M756 260 q38 16 44 70 q10 84 -8 158 l-20 -2 q16 -80 6 -156 q-6 -48 -32 -62 z" fill="#0e0c16" opacity="0.5"/>
  <path d="M612 296 q64 -38 132 -14" fill="none" stroke="#2b2537" stroke-width="7"/>
  <path d="M614 293 q62 -36 128 -14" fill="none" stroke="#4a4260" stroke-width="1.8" opacity="0.4"/>
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
  <path d="M578 486 L742 486" stroke="#c09456" stroke-width="1.6" opacity="0.45"/>
  <!-- bridle hide: grained, and rubbed pale where it has been carried -->
  <g fill="#3d2a16" opacity="0.3">
    <path d="M586 512 q40 -6 80 -4 l0 12 q-42 -2 -82 6 z"/>
    <path d="M676 514 q34 -5 68 -3 l0 12 q-36 -2 -70 5 z"/>
  </g>
  <path d="M578 486 L742 486 L756 564 L568 564 Z" fill="url(#or-box-castR)" opacity="0.5"/>
  <path d="M568 564 L756 564 L754 574 L570 574 Z" fill="#241b12"/>
  <path d="M575 506 L745 506 L750 542 L570 542 Z" fill="#5a3f22"/>
  <path d="M575 506 L745 506" stroke="#a3814d" stroke-width="1.4" opacity="0.4"/>
  <path d="M570 542 L750 542 L749 550 L571 550 Z" fill="#3d2a16"/>
  <g fill="#a8926a" opacity="0.4">
    <path d="M572 552 q6 -12 4 -22 l-6 0 q0 12 -4 22 z"/><path d="M750 552 q-6 -12 -4 -22 l6 0 q0 12 4 22 z"/>
  </g>
  <g fill="#a8873f">
    <rect x="618" y="530" width="20" height="28" rx="4"/><rect x="684" y="530" width="20" height="28" rx="4"/>
  </g>
  <path d="M620 532 l0 24 M686 532 l0 24" stroke="#fbeec2" stroke-width="1.6" opacity="0.5"/>
  <path d="M636 532 l0 24 M702 532 l0 24" stroke="#3a2a10" stroke-width="1.6" opacity="0.55"/>
  <g fill="#3d2a16">
    <rect x="623" y="536" width="10" height="15" rx="3"/><rect x="689" y="536" width="10" height="15" rx="3"/>
  </g>
  <path d="M596 486 q34 -22 66 0" fill="none" stroke="#8a6636" stroke-width="9"/>
  <path d="M598 484 q33 -20 62 0" fill="none" stroke="#c09456" stroke-width="2" opacity="0.4"/>
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
  <!-- barrels covered in black morocco: a soft sheen down the lit side -->
  <path d="M212 316 q-2 26 0 50 l9 0 q-3 -26 0 -50 z" fill="#6b6156" opacity="0.4"/>
  <path d="M270 316 q-2 26 0 50 l8 0 q-3 -26 0 -50 z" fill="#6b6156" opacity="0.3"/>
  <path d="M248 314 q3 28 0 54 l6 0 q3 -28 0 -54 z" fill="#000000" opacity="0.4"/>
  <path d="M306 314 q3 28 0 54 l5 0 q3 -28 0 -54 z" fill="#000000" opacity="0.45"/>
  <rect x="208" y="318" width="48" height="17" fill="#3a352d"/>
  <rect x="266" y="318" width="48" height="17" fill="#3a352d"/>
  <path d="M208 319 l48 0 M266 319 l48 0" stroke="#8e8a7d" stroke-width="1.2" opacity="0.45"/>
  <rect x="252" y="324" width="20" height="38" rx="5" fill="#a8873f"/>
  <path d="M254 326 l0 34" stroke="#fbeec2" stroke-width="1.6" opacity="0.5"/>
  <ellipse cx="232" cy="308" rx="24" ry="9" fill="#a8873f"/>
  <ellipse cx="290" cy="308" rx="24" ry="9" fill="#a8873f"/>
  <path d="M212 306 q18 -8 38 0 M270 306 q18 -8 38 0" fill="none" stroke="#fbeec2" stroke-width="1.6" opacity="0.4"/>
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
  <ellipse cx="480" cy="384" rx="74" ry="12" fill="#0d0a07" opacity="0.4"/>
  <ellipse cx="474" cy="376" rx="70" ry="21" fill="#3a352d"/>
  <ellipse cx="474" cy="371" rx="62" ry="17" fill="url(#or-box-nickel)"/>
  <path d="M420 366 q40 -14 84 -4" fill="none" stroke="#d5d0bf" stroke-width="2.4" opacity="0.45"/>
  <ellipse cx="474" cy="371" rx="47" ry="12" fill="#1b1814"/>
  <path d="M434 368 q40 -10 80 -2" fill="none" stroke="#7d7768" stroke-width="1.4" opacity="0.4"/>
  <g fill="#5b564b">
    <path d="M412 362 l18 -7 l4 9 l-18 7 z"/><path d="M522 358 l18 7 l-4 9 l-18 -7 z"/>
  </g>
  <path d="M413 361 l18 -7 M523 357 l17 7" stroke="#a8a294" stroke-width="1.2" opacity="0.5"/>
  <ellipse cx="458" cy="371" rx="21" ry="7" fill="#6f6a5e" opacity="0.85"/>
  <ellipse cx="492" cy="373" rx="15" ry="5" fill="#5b564b" opacity="0.85"/>
  <g fill="#c2bdae" opacity="0.3">
    <ellipse cx="452" cy="369" rx="10" ry="2.4"/><ellipse cx="488" cy="371" rx="7" ry="1.8"/>
  </g>
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
