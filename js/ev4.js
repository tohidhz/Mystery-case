/* Exhibit plates for CASE No. 004 — The Meridian Express, Larkspur Pass, 1953.
   One close-up per clue. Photographic intent: modelled form under a single
   upper-left lamp, specular highlights keyed to the material, a soft cast
   shadow, a dark vignette for depth. Language-neutral — no text anywhere;
   every document is ruled lines, ink strokes and typed-looking marks. */
window.CLUE_ART = window.CLUE_ART || {};
window.CLUE_ART.meridian = {

  /* THE MECHANISM, part one: the band printed in the skin. Two inches wide,
     a double line of stitching pressed in at both edges. Not rope. Not hands. */
  c4_strapmark: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-mark-bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#241f18"/><stop offset="0.6" stop-color="#141109"/><stop offset="1" stop-color="#080705"/>
  </linearGradient>
  <radialGradient id="ev4-mark-lamp" cx="0.24" cy="0.14" r="0.82">
    <stop offset="0" stop-color="#e8c88c" stop-opacity="0.30"/><stop offset="1" stop-color="#e8c88c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev4-mark-skin" x1="0.05" y1="0" x2="1" y2="0.15">
    <stop offset="0" stop-color="#8a6a55"/>
    <stop offset="0.14" stop-color="#bd9a7c"/>
    <stop offset="0.34" stop-color="#c9a887"/>
    <stop offset="0.62" stop-color="#a3805f"/>
    <stop offset="0.85" stop-color="#6d4e39"/>
    <stop offset="1" stop-color="#412e22"/>
  </linearGradient>
  <linearGradient id="ev4-mark-jaw" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#c8a684"/><stop offset="0.55" stop-color="#a17c5d"/><stop offset="1" stop-color="#5b3f2d"/>
  </linearGradient>
  <linearGradient id="ev4-mark-congest" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0" stop-color="#7d3a3f" stop-opacity="0.55"/><stop offset="1" stop-color="#7d3a3f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ev4-mark-furrow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6d3128" stop-opacity="0.85"/>
    <stop offset="0.28" stop-color="#43201c" stop-opacity="0.92"/>
    <stop offset="0.52" stop-color="#8a4a35" stop-opacity="0.70"/>
    <stop offset="0.76" stop-color="#3b1c19" stop-opacity="0.92"/>
    <stop offset="1" stop-color="#6b3327" stop-opacity="0.82"/>
  </linearGradient>
  <linearGradient id="ev4-mark-linen" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f0ece0"/><stop offset="0.5" stop-color="#cec8b7"/><stop offset="1" stop-color="#8d8879"/>
  </linearGradient>
  <linearGradient id="ev4-mark-tie" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#4a2f33"/><stop offset="0.4" stop-color="#6e474a"/><stop offset="1" stop-color="#291a1d"/>
  </linearGradient>
  <filter id="ev4-mark-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-mark-vig" cx="0.42" cy="0.4" r="0.78">
    <stop offset="0.48" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.80"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-mark-bg)"/>
<rect width="640" height="520" fill="url(#ev4-mark-lamp)"/>

<!-- the dark of the compartment behind the shoulder -->
<path d="M0 366 Q 120 342 176 300 L176 520 L0 520 Z" fill="#16120c"/>
<path d="M470 300 Q 540 350 640 372 L640 520 L470 520 Z" fill="#16120c"/>

<!-- chest and shoulders in the good dark suit -->
<path d="M92 520 Q 118 402 214 356 L430 350 Q 528 396 556 520 Z" fill="#221c1a"/>
<path d="M118 520 Q 146 418 224 376" fill="none" stroke="#3a322d" stroke-width="3" opacity="0.7"/>
<path d="M520 520 Q 496 414 424 372" fill="none" stroke="#2e2724" stroke-width="3" opacity="0.6"/>
<g opacity="0.35" stroke="#4a403a" stroke-width="0.8">
  <path d="M140 520 Q 168 436 232 392"/><path d="M162 520 Q 190 444 246 404"/>
  <path d="M498 520 Q 476 430 416 388"/>
</g>

<!-- the neck: a cylinder, lit hard from the upper left, flaring to the shoulders -->
<path d="M208 40 Q 182 226 172 380 Q 318 424 476 380 Q 466 226 440 40 Z" fill="url(#ev4-mark-skin)"/>
<path d="M208 40 Q 182 226 172 380 Q 210 394 238 396 Q 232 226 246 40 Z" fill="#e8c9a6" opacity="0.20"/>
<path d="M404 40 Q 418 228 414 398 Q 448 390 476 380 Q 466 226 440 40 Z" fill="#2b1c13" opacity="0.45"/>
<ellipse cx="250" cy="232" rx="24" ry="146" fill="#ffe0bb" opacity="0.12"/>
<path d="M172 380 Q 138 396 106 434" fill="none" stroke="#6b4a35" stroke-width="12" opacity="0.35"/>
<path d="M476 380 Q 510 396 542 434" fill="none" stroke="#412d20" stroke-width="12" opacity="0.42"/>

<!-- sternomastoid, the swallow of the throat, the notch above the collar -->
<path d="M262 118 Q 292 250 318 344" fill="none" stroke="#8d6549" stroke-width="7" opacity="0.30"/>
<path d="M266 122 Q 296 250 320 340" fill="none" stroke="#efcda4" stroke-width="3" opacity="0.22"/>
<path d="M382 120 Q 358 244 340 342" fill="none" stroke="#6a452f" stroke-width="8" opacity="0.34"/>
<path d="M300 300 Q 322 316 348 300" fill="none" stroke="#7e563c" stroke-width="4" opacity="0.35"/>
<path d="M318 158 q 14 12 0 26 q -14 -14 0 -26" fill="#c99672" opacity="0.5"/>

<!-- congestion above the ligature, the way a stopped throat goes -->
<path d="M206 40 Q 186 200 182 248 Q 320 312 466 244 Q 458 196 438 40 Z" fill="url(#ev4-mark-congest)"/>
<g fill="#84353a" opacity="0.5">
  <circle cx="240" cy="178" r="2.2"/><circle cx="266" cy="160" r="1.6"/><circle cx="288" cy="190" r="2.6"/>
  <circle cx="312" cy="170" r="1.8"/><circle cx="334" cy="196" r="2.2"/><circle cx="360" cy="172" r="2.6"/>
  <circle cx="386" cy="192" r="1.9"/><circle cx="406" cy="176" r="2.3"/><circle cx="224" cy="204" r="1.7"/>
  <circle cx="278" cy="216" r="2"/><circle cx="352" cy="222" r="1.7"/><circle cx="404" cy="212" r="2.1"/>
  <circle cx="248" cy="230" r="1.5"/><circle cx="316" cy="234" r="1.4"/><circle cx="382" cy="230" r="1.6"/>
</g>

<!-- THE BAND: one broad furrow, two inches, dipping across the front -->
<path d="M180 244 Q 320 308 468 240 L468 312 Q 320 380 180 316 Z" fill="url(#ev4-mark-furrow)"/>
<path d="M180 244 Q 320 308 468 240" fill="none" stroke="#37191a" stroke-width="3.4" opacity="0.85"/>
<path d="M180 316 Q 320 380 468 312" fill="none" stroke="#37191a" stroke-width="3.4" opacity="0.85"/>
<!-- the compressed floor of the furrow catches almost no light -->
<path d="M184 272 Q 320 336 464 266" fill="none" stroke="#2a1211" stroke-width="13" opacity="0.45"/>
<path d="M186 288 Q 320 352 462 282" fill="none" stroke="#a75e40" stroke-width="4" opacity="0.28"/>

<!-- the double line of stitching, printed at BOTH edges of the band -->
<g stroke="#40191a" stroke-width="3.2" stroke-linecap="round" opacity="0.9">
  <path d="M188 250 Q 320 314 462 246" stroke-dasharray="7 8" fill="none"/>
  <path d="M188 260 Q 320 324 462 256" stroke-dasharray="7 8" fill="none"/>
  <path d="M188 298 Q 320 362 462 294" stroke-dasharray="7 8" fill="none"/>
  <path d="M188 308 Q 320 372 462 304" stroke-dasharray="7 8" fill="none"/>
</g>
<g stroke="#c08a63" stroke-width="1.2" stroke-linecap="round" opacity="0.45">
  <path d="M188 248 Q 320 312 462 244" stroke-dasharray="7 8" fill="none"/>
  <path d="M188 296 Q 320 360 462 292" stroke-dasharray="7 8" fill="none"/>
</g>

<!-- abraded skin at the upper margin where the strap dragged once, from behind -->
<g stroke="#9c4b33" stroke-width="1.5" opacity="0.5">
  <path d="M218 244 l 7 -13"/><path d="M252 256 l 6 -14"/><path d="M288 268 l 5 -13"/>
  <path d="M332 274 l 4 -14"/><path d="M378 268 l 5 -13"/><path d="M418 252 l 7 -13"/>
</g>
<path d="M424 246 Q 452 260 464 278" fill="none" stroke="#7d3327" stroke-width="5" opacity="0.5"/>

<!-- the collar it was tailored for, loose now, and the pulled-down knot -->
<path d="M136 520 Q 146 406 200 372 L276 396 Q 236 452 230 520 Z" fill="url(#ev4-mark-linen)"/>
<path d="M512 520 Q 502 408 448 370 L372 396 Q 412 452 418 520 Z" fill="url(#ev4-mark-linen)"/>
<path d="M448 370 L372 396 Q 412 452 418 520 L456 520 Q 462 428 448 370 Z" fill="#6f6a5c" opacity="0.45"/>
<path d="M200 372 L276 396 Q 236 452 230 520 L194 520 Q 188 428 200 372 Z" fill="#ffffff" opacity="0.20"/>
<path d="M200 374 Q 240 382 278 398" fill="none" stroke="#fbf7ea" stroke-width="2.6" opacity="0.75"/>
<path d="M446 372 Q 408 382 370 398" fill="none" stroke="#b3ad9c" stroke-width="2.2" opacity="0.6"/>
<g stroke="#a9a392" stroke-width="0.8" opacity="0.4">
  <path d="M170 520 Q 178 446 210 396"/><path d="M200 520 Q 208 456 240 412"/>
  <path d="M482 520 Q 474 448 442 398"/><path d="M452 520 Q 446 458 414 414"/>
</g>
<ellipse cx="286" cy="404" rx="10" ry="8" fill="#efe9d9" stroke="#9c9684" stroke-width="1.2"/>
<ellipse cx="284" cy="401" rx="3.4" ry="2.6" fill="#8e8877"/>

<path d="M290 414 Q 334 402 372 420 L364 472 Q 330 492 300 468 Z" fill="url(#ev4-mark-tie)"/>
<path d="M300 468 L364 472 L382 520 L288 520 Z" fill="#3a2528"/>
<path d="M298 420 Q 330 410 360 424" fill="none" stroke="#8b5c5e" stroke-width="2.8" opacity="0.6"/>
<path d="M312 430 Q 330 444 318 464" fill="none" stroke="#1d1214" stroke-width="3" opacity="0.5"/>
<g opacity="0.28" stroke="#a1737a" stroke-width="1">
  <path d="M298 488 L338 520"/><path d="M316 484 L358 518"/><path d="M336 480 L372 508"/>
</g>

<!-- shadow of the jaw falling down the throat -->
<ellipse cx="330" cy="126" rx="210" ry="40" fill="#1c120c" opacity="0.66" filter="url(#ev4-mark-soft)"/>
<path d="M-20 0 L660 0 L654 22 Q 588 68 500 92 Q 412 118 322 120 Q 232 118 146 92 Q 58 68 -14 22 Z" fill="url(#ev4-mark-jaw)"/>
<path d="M256 108 Q 322 146 390 106 Q 362 134 322 134 Q 282 134 256 108 Z" fill="url(#ev4-mark-jaw)"/>
<path d="M-20 0 L318 0 L318 120 Q 232 118 146 92 Q 58 68 -14 22 Z" fill="#f2dcc0" opacity="0.20"/>
<path d="M430 0 L660 0 L654 22 Q 588 68 500 92 Q 466 102 434 110 Q 434 60 430 0 Z" fill="#33200f" opacity="0.34"/>
<path d="M146 92 Q 232 118 322 120 Q 412 118 500 92" fill="none" stroke="#3a2519" stroke-width="7" opacity="0.5"/>
<path d="M120 76 Q 224 132 322 134 Q 424 132 528 76 L534 96 Q 428 156 322 158 Q 218 156 114 96 Z" fill="#150d08" opacity="0.5" filter="url(#ev4-mark-soft)"/>
<path d="M262 112 Q 322 144 384 110" fill="none" stroke="#4f3323" stroke-width="3" opacity="0.5"/>
<g fill="#463024" opacity="0.42">
  <circle cx="150" cy="80" r="1.7"/><circle cx="196" cy="96" r="1.5"/><circle cx="244" cy="108" r="1.7"/>
  <circle cx="292" cy="116" r="1.5"/><circle cx="348" cy="116" r="1.5"/><circle cx="398" cy="108" r="1.7"/>
  <circle cx="446" cy="96" r="1.5"/><circle cx="492" cy="80" r="1.7"/><circle cx="106" cy="62" r="1.4"/>
  <circle cx="536" cy="62" r="1.4"/><circle cx="172" cy="66" r="1.3"/><circle cx="470" cy="66" r="1.3"/>
  <circle cx="270" cy="94" r="1.3"/><circle cx="374" cy="94" r="1.3"/><circle cx="322" cy="102" r="1.4"/>
  <circle cx="66" cy="42" r="1.3"/><circle cx="576" cy="42" r="1.3"/><circle cx="220" cy="80" r="1.2"/>
  <circle cx="424" cy="80" r="1.2"/><circle cx="318" cy="130" r="1.2"/>
</g>

<rect width="640" height="520" fill="url(#ev4-mark-vig)"/>
`,
  },

  /* THE MECHANISM, part two: the chain plate came away WHOLE — four screws
     still in it, oak and plaster in the threads. It was fastened. */
  c4_chain: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-chain-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2117"/><stop offset="0.55" stop-color="#150f0a"/><stop offset="1" stop-color="#080605"/>
  </linearGradient>
  <linearGradient id="ev4-chain-oak" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#7a5330"/><stop offset="0.32" stop-color="#5c3c22"/>
    <stop offset="0.7" stop-color="#3f2716"/><stop offset="1" stop-color="#22150c"/>
  </linearGradient>
  <linearGradient id="ev4-chain-raw" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#e0c08c"/><stop offset="0.45" stop-color="#b8935f"/><stop offset="1" stop-color="#755128"/>
  </linearGradient>
  <linearGradient id="ev4-chain-brass" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#6a5220"/>
    <stop offset="0.16" stop-color="#d9bb62"/>
    <stop offset="0.3" stop-color="#fdf0b8"/>
    <stop offset="0.46" stop-color="#b08f38"/>
    <stop offset="0.64" stop-color="#e8ce7c"/>
    <stop offset="0.82" stop-color="#7d6226"/>
    <stop offset="1" stop-color="#463415"/>
  </linearGradient>
  <linearGradient id="ev4-chain-steelish" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#c8b47a"/><stop offset="0.5" stop-color="#8a7238"/><stop offset="1" stop-color="#4c3a16"/>
  </linearGradient>
  <linearGradient id="ev4-chain-plaster" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#e6e0cd"/><stop offset="0.6" stop-color="#b4ad98"/><stop offset="1" stop-color="#7c7563"/>
  </linearGradient>
  <filter id="ev4-chain-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-chain-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-chain-bg)"/>

<!-- the door frame, in raking light: oak with the varnish gone amber -->
<path d="M0 0 L392 0 L392 520 L0 520 Z" fill="url(#ev4-chain-oak)"/>
<g opacity="0.4" stroke="#8a6136" stroke-width="1.2" fill="none">
  <path d="M40 0 Q 34 160 44 330 Q 38 440 46 520"/>
  <path d="M96 0 Q 104 170 92 340 Q 100 450 90 520"/>
  <path d="M236 0 Q 244 180 232 350 Q 240 450 230 520"/>
  <path d="M364 0 Q 372 176 360 348 Q 368 452 358 520"/>
</g>
<g opacity="0.22" stroke="#2a190c" stroke-width="2.4" fill="none">
  <path d="M68 0 Q 76 190 64 380 Q 72 460 66 520"/>
  <path d="M198 0 Q 190 200 202 388 Q 194 470 200 520"/>
</g>
<rect x="380" y="0" width="16" height="520" fill="#160e07" opacity="0.7"/>

<!-- THE WOUND IN THE FRAME: the plate did not unscrew, it tore out -->
<!-- the wound in the frame: one jagged hole where the oak let go -->
<path d="M112 222 L138 190 L154 214 L176 176 L198 210 L222 172 L246 206 L268 178 L292 214 L316 196
         L320 268 L306 300 L286 276 L268 318 L242 288 L216 322 L192 290 L166 320 L142 288 L120 302 Z"
      fill="#0a0503"/>
<path d="M126 224 L146 202 L160 222 L180 194 L200 220 L222 190 L244 216 L266 194 L288 222 L306 210
         L308 262 L296 284 L280 266 L262 300 L240 276 L216 304 L194 280 L170 302 L148 278 L130 288 Z"
      fill="#1d1207"/>
<path d="M126 224 L146 202 L160 222 L180 194 L200 220 L222 190 L244 216 L266 194 L288 222 L306 210
         L306 232 L280 216 L252 240 L224 214 L196 240 L168 216 L142 240 L128 246 Z"
      fill="url(#ev4-chain-raw)" opacity="0.5"/>
<!-- long splinters torn free and standing out of the frame -->
<g fill="url(#ev4-chain-raw)" stroke="#37200e" stroke-width="0.9">
  <path d="M138 190 L152 186 L142 244 Z"/>
  <path d="M176 176 L192 180 L178 254 L172 214 Z"/>
  <path d="M222 172 L238 178 L226 238 Z"/>
  <path d="M268 178 L282 186 L268 246 L264 210 Z"/>
  <path d="M316 196 L326 214 L306 258 L308 218 Z"/>
  <path d="M142 288 L156 296 L136 336 Z"/>
  <path d="M192 290 L206 296 L194 348 L188 316 Z"/>
  <path d="M242 288 L256 298 L242 340 Z"/>
  <path d="M286 276 L300 288 L292 336 L284 308 Z"/>
</g>
<g stroke="#f3dbab" stroke-width="1.3" opacity="0.5" fill="none">
  <path d="M139 192 L150 188"/><path d="M177 178 L190 182"/><path d="M223 174 L236 179"/>
  <path d="M143 290 L154 297"/><path d="M243 290 L254 299"/>
</g>
<g stroke="#2f1c0b" stroke-width="0.9" opacity="0.65" fill="none">
  <path d="M145 194 L143 238"/><path d="M183 182 L179 248"/><path d="M274 186 L269 240"/>
  <path d="M197 294 L194 342"/>
</g>
<!-- plaster and lath, powdered off the frame where it went -->
<g fill="#cdc6b1" opacity="0.45">
  <path d="M158 232 L174 228 L170 250 L160 248 Z"/>
  <path d="M232 226 L250 232 L244 250 L230 246 Z"/>
  <path d="M290 250 L304 256 L298 272 L286 268 Z"/>
</g>
<!-- torn plaster and lath dust below the hole -->
<g fill="url(#ev4-chain-plaster)" opacity="0.42" stroke="#4a4438" stroke-width="0.8">
  <path d="M124 358 L150 348 L160 362 L146 376 L128 372 Z"/>
  <path d="M192 370 L216 358 L228 372 L214 388 L196 384 Z"/>
  <path d="M260 356 L282 350 L290 364 L276 374 L262 370 Z"/>
</g>
<g fill="#2a2116" opacity="0.5">
  <path d="M146 376 L160 362 L162 368 L148 382 Z"/>
  <path d="M214 388 L228 372 L230 378 L216 394 Z"/>
</g>
<g fill="#000" opacity="0.4">
  <ellipse cx="146" cy="382" rx="20" ry="5"/><ellipse cx="212" cy="396" rx="22" ry="5"/>
  <ellipse cx="278" cy="382" rx="18" ry="4"/>
</g>
<g fill="#ddd6c1" opacity="0.6">
  <circle cx="152" cy="392" r="3.4"/><circle cx="178" cy="404" r="5"/><circle cx="248" cy="396" r="4.2"/>
  <circle cx="122" cy="386" r="2.4"/><circle cx="200" cy="420" r="3"/><circle cx="316" cy="398" r="2"/>
</g>

<!-- cast shadow of the hanging plate -->
<path d="M320 200 Q 470 226 520 330 Q 460 392 372 356 Q 322 280 320 200 Z" fill="#000" opacity="0.55" filter="url(#ev4-chain-soft)"/>

<!-- THE PLATE ITSELF, whole, hanging by its chain, all four screws in it -->
<g>
  <path d="M330 194 L452 176 L470 300 L348 320 Z" fill="url(#ev4-chain-brass)" stroke="#3b2c10" stroke-width="2"/>
  <path d="M336 202 L446 185 L450 206 L340 224 Z" fill="#fff4c6" opacity="0.40"/>
  <path d="M346 306 L462 288 L466 298 L350 316 Z" fill="#2b2009" opacity="0.55"/>
  <!-- the slot the chain button rides in -->
  <path d="M362 226 L438 216 L440 244 L364 254 Z" fill="#150f04"/>
  <path d="M362 226 L438 216 L438 222 L362 232 Z" fill="#5c4718"/>
  <path d="M366 250 L438 240 L438 244 L366 254 Z" fill="#f2e2a6" opacity="0.35"/>
  <circle cx="428" cy="230" r="13" fill="#100b03"/>
  <circle cx="428" cy="230" r="13" fill="none" stroke="#c9a94e" stroke-width="1.4" opacity="0.6"/>
</g>
<!-- four screws, still seated, oak and plaster wound into the threads -->
<g>
  <circle cx="352" cy="212" r="13" fill="url(#ev4-chain-steelish)" stroke="#2e2209" stroke-width="1.6"/>
  <path d="M344 208 L360 205" stroke="#191202" stroke-width="3.4"/>
  <path d="M343 205 L359 202" stroke="#ffeeae" stroke-width="1.2" opacity="0.7"/>
  <circle cx="450" cy="196" r="13" fill="url(#ev4-chain-steelish)" stroke="#2e2209" stroke-width="1.6"/>
  <path d="M443 192 L458 190" stroke="#191202" stroke-width="3.4"/>
  <path d="M442 189 L457 187" stroke="#ffeeae" stroke-width="1.2" opacity="0.7"/>
  <circle cx="360" cy="296" r="13" fill="url(#ev4-chain-steelish)" stroke="#2e2209" stroke-width="1.6"/>
  <path d="M353 292 L368 290" stroke="#191202" stroke-width="3.4"/>
  <path d="M352 289 L367 287" stroke="#ffeeae" stroke-width="1.2" opacity="0.7"/>
  <circle cx="458" cy="282" r="13" fill="url(#ev4-chain-steelish)" stroke="#2e2209" stroke-width="1.6"/>
  <path d="M451 278 L466 276" stroke="#191202" stroke-width="3.4"/>
  <path d="M450 275 L465 273" stroke="#ffeeae" stroke-width="1.2" opacity="0.7"/>
</g>
<!-- the shanks standing out of the back of the plate, packed with wood -->
<g>
  <path d="M356 218 L372 216 L370 262 L362 262 Z" fill="#6d5a26"/>
  <path d="M454 202 L470 200 L468 246 L460 246 Z" fill="#6d5a26"/>
  <g stroke="#3a2d0e" stroke-width="1.2" opacity="0.8" fill="none">
    <path d="M356 226 L372 222"/><path d="M357 234 L371 230"/><path d="M358 242 L371 238"/><path d="M359 250 L370 246"/>
    <path d="M454 210 L470 206"/><path d="M455 218 L469 214"/><path d="M456 226 L469 222"/><path d="M457 234 L468 230"/>
  </g>
  <path d="M358 230 q 8 4 12 -2 q -2 10 -12 8 Z" fill="#c8a367"/>
  <path d="M457 222 q 8 4 12 -2 q -2 10 -12 8 Z" fill="#d8cdb2"/>
  <path d="M360 250 q 9 3 11 -3 q 0 12 -11 9 Z" fill="#b78f52"/>
</g>

<!-- the chain, still running to its slide, links catching the lamp -->
<g fill="none" stroke="#5f4a18" stroke-width="7" stroke-linecap="round">
  <path d="M424 232 L512 258"/>
</g>
<g fill="none" stroke="url(#ev4-chain-brass)" stroke-width="5.5" stroke-linecap="round">
  <path d="M424 232 L512 258"/>
</g>
<g fill="none" stroke="#2c2109" stroke-width="2.4">
  <ellipse cx="440" cy="236" rx="12" ry="7" transform="rotate(16 440 236)"/>
  <ellipse cx="462" cy="243" rx="12" ry="7" transform="rotate(16 462 243)"/>
  <ellipse cx="484" cy="249" rx="12" ry="7" transform="rotate(16 484 249)"/>
  <ellipse cx="506" cy="256" rx="12" ry="7" transform="rotate(16 506 256)"/>
</g>
<g fill="none" stroke="#f6e5a8" stroke-width="1.6" opacity="0.75">
  <path d="M432 232 q 8 -6 16 -3"/><path d="M454 239 q 8 -6 16 -3"/>
  <path d="M476 245 q 8 -6 16 -3"/><path d="M498 252 q 8 -6 16 -3"/>
</g>
<path d="M520 250 L560 246 L566 280 L524 284 Z" fill="url(#ev4-chain-brass)" stroke="#31250c" stroke-width="1.8"/>
<path d="M524 256 L556 252 L557 262 L525 266 Z" fill="#fff2c0" opacity="0.42"/>
<circle cx="542" cy="268" r="6" fill="#100b03"/>

<!-- the little brass privacy bolt, torn out of its keeper and bent -->
<path d="M92 402 Q 200 388 288 404 L292 448 Q 196 432 96 446 Z" fill="#1a1108" opacity="0.6" filter="url(#ev4-chain-soft)"/>
<path d="M100 412 L196 404 Q 226 402 240 416 L268 442 L250 458 L220 432 Q 208 422 194 424 L104 432 Z" fill="url(#ev4-chain-brass)" stroke="#33260d" stroke-width="1.8"/>
<path d="M104 414 L194 407 L194 415 L105 422 Z" fill="#fff3c2" opacity="0.45"/>
<path d="M108 430 L196 423" stroke="#241a06" stroke-width="2.4" opacity="0.6"/>
<path d="M236 418 L262 442" stroke="#fff0b6" stroke-width="2" opacity="0.6"/>
<rect x="72" y="398" width="34" height="52" rx="4" fill="url(#ev4-chain-brass)" stroke="#33260d" stroke-width="1.8"/>
<rect x="76" y="404" width="26" height="10" fill="#fff3c2" opacity="0.35"/>
<rect x="80" y="414" width="18" height="22" rx="3" fill="#0e0903"/>
<path d="M262 430 q 20 6 26 24" fill="none" stroke="#7d6226" stroke-width="9" stroke-linecap="round"/>
<path d="M262 430 q 20 6 26 24" fill="none" stroke="#e7cd7e" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
<path d="M120 408 L178 404" fill="none" stroke="#f6ecc4" stroke-width="1.2" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev4-chain-vig)"/>
`,
  },

  /* THE MECHANISM, part three: the communicating door's bolt tongue, filed off
     flush. Bright new stub, gray filings still in the mortise like frost. */
  c4_filedbolt: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-fbolt-bg" x1="0.1" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#241a10"/><stop offset="0.6" stop-color="#120c07"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-fbolt-mahog" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#8a4d2a"/><stop offset="0.25" stop-color="#6a3720"/>
    <stop offset="0.6" stop-color="#4a2515"/><stop offset="1" stop-color="#2a140c"/>
  </linearGradient>
  <linearGradient id="ev4-fbolt-edge" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#c88c52"/><stop offset="0.35" stop-color="#8d5528"/><stop offset="1" stop-color="#3d2010"/>
  </linearGradient>
  <linearGradient id="ev4-fbolt-brass" x1="0" y1="0" x2="1" y2="0.8">
    <stop offset="0" stop-color="#5f4a1c"/><stop offset="0.18" stop-color="#d4b65e"/>
    <stop offset="0.34" stop-color="#fbefbb"/><stop offset="0.55" stop-color="#a98a35"/>
    <stop offset="0.78" stop-color="#e2c877"/><stop offset="1" stop-color="#493615"/>
  </linearGradient>
  <linearGradient id="ev4-fbolt-oldsteel" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#9a978f"/><stop offset="0.32" stop-color="#726f68"/>
    <stop offset="0.7" stop-color="#4c4a45"/><stop offset="1" stop-color="#2c2a26"/>
  </linearGradient>
  <linearGradient id="ev4-fbolt-newsteel" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#fbfbfa"/><stop offset="0.22" stop-color="#dcdedd"/>
    <stop offset="0.5" stop-color="#a9adaf"/><stop offset="0.78" stop-color="#dfe2e2"/><stop offset="1" stop-color="#7c8082"/>
  </linearGradient>
  <linearGradient id="ev4-fbolt-mortise" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0a0705"/><stop offset="1" stop-color="#1c150e"/>
  </linearGradient>
  <filter id="ev4-fbolt-soft" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-fbolt-vig" cx="0.5" cy="0.46" r="0.86">
    <stop offset="0.5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.72"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-fbolt-bg)"/>

<!-- the dark of compartment 8 through the opened door -->
<path d="M500 0 L640 0 L640 520 L500 520 Z" fill="#0a0705"/>
<path d="M544 78 L620 60 L620 320 L544 336 Z" fill="#191310" opacity="0.55"/>

<!-- the door, swung toward us: a sliver of face at left, EDGE to the lamp -->
<path d="M0 0 L300 0 L300 520 L0 520 Z" fill="url(#ev4-fbolt-mahog)"/>
<g opacity="0.35" stroke="#a1613a" stroke-width="1.3" fill="none">
  <path d="M30 0 Q 22 170 34 350 Q 26 450 36 520"/>
  <path d="M84 0 Q 92 180 80 360 Q 88 460 78 520"/>
  <path d="M140 0 Q 132 160 142 340 Q 134 440 144 520"/>
  <path d="M202 0 Q 210 190 198 370 Q 206 460 196 520"/>
  <path d="M262 0 Q 254 170 264 356 Q 256 456 266 520"/>
</g>
<g opacity="0.28" stroke="#2c1509" stroke-width="2.6" fill="none">
  <path d="M56 0 Q 64 200 52 400 Q 60 470 54 520"/>
  <path d="M176 0 Q 168 210 180 410"/>
  <path d="M238 0 Q 246 180 234 372"/>
</g>
<!-- a raised panel and its moulding, to say 'paneled connecting door' -->
<path d="M30 52 L252 52 L252 468 L30 468 Z" fill="none" stroke="#33190c" stroke-width="6"/>
<path d="M30 52 L252 52 L244 64 L40 64 Z" fill="#c08853" opacity="0.32"/>
<path d="M30 52 L40 64 L40 456 L30 468 Z" fill="#c08853" opacity="0.26"/>
<path d="M252 52 L252 468 L242 456 L242 64 Z" fill="#180b05" opacity="0.55"/>
<path d="M30 468 L252 468 L242 456 L40 456 Z" fill="#180b05" opacity="0.5"/>
<rect x="46" y="70" width="190" height="380" fill="#5a2e1a" opacity="0.55"/>
<rect x="46" y="70" width="190" height="18" fill="#a86c3f" opacity="0.25"/>

<!-- THE EDGE OF THE DOOR, turned broadside to us: this is the exhibit -->
<path d="M300 0 L522 44 L522 476 L300 520 Z" fill="url(#ev4-fbolt-edge)"/>
<path d="M300 0 L522 44 L522 78 L300 34 Z" fill="#e8b070" opacity="0.35"/>
<path d="M300 486 L522 442 L522 476 L300 520 Z" fill="#1c0d06" opacity="0.55"/>
<g opacity="0.22" stroke="#2d1408" stroke-width="2.2" fill="none">
  <path d="M300 92 Q 400 118 522 134"/><path d="M300 448 Q 400 436 522 414"/>
  <path d="M300 156 Q 402 178 522 194"/>
</g>
<g opacity="0.16" stroke="#e0a869" stroke-width="1.4" fill="none">
  <path d="M300 118 Q 400 142 522 160"/><path d="M300 420 Q 400 410 522 388"/>
</g>
<path d="M510 42 L522 44 L522 476 L510 478 Z" fill="#22110a" opacity="0.75"/>

<!-- the mortise: a slot cut down into the edge of the door -->
<path d="M306 220 L512 260 L512 358 L306 318 Z" fill="url(#ev4-fbolt-mortise)"/>
<path d="M306 220 L512 260 L512 274 L306 234 Z" fill="#000" opacity="0.85"/>
<path d="M306 306 L512 346 L512 358 L306 318 Z" fill="#000" opacity="0.45"/>
<!-- the brass faceplate, top and bottom, screwed in years ago -->
<path d="M300 200 L522 244 L522 268 L300 224 Z" fill="url(#ev4-fbolt-brass)" stroke="#2d2109" stroke-width="1.6"/>
<path d="M300 314 L522 358 L522 382 L300 338 Z" fill="url(#ev4-fbolt-brass)" stroke="#2d2109" stroke-width="1.6"/>
<path d="M302 204 L520 248 L520 254 L302 210 Z" fill="#fff5c9" opacity="0.55"/>
<path d="M302 318 L520 362 L520 368 L302 324 Z" fill="#fff5c9" opacity="0.42"/>
<path d="M302 220 L520 264 L520 268 L302 224 Z" fill="#241a06" opacity="0.55"/>
<circle cx="328" cy="216" r="8" fill="#8f7433" stroke="#241a06" stroke-width="1.4"/>
<path d="M322 214 L334 216" stroke="#171003" stroke-width="2.4"/>
<path d="M322 211 L334 213" stroke="#ffeeae" stroke-width="1" opacity="0.6"/>
<circle cx="492" cy="249" r="8" fill="#8f7433" stroke="#241a06" stroke-width="1.4"/>
<path d="M486 247 L498 249" stroke="#171003" stroke-width="2.4"/>
<circle cx="328" cy="330" r="8" fill="#8f7433" stroke="#241a06" stroke-width="1.4"/>
<path d="M322 328 L334 330" stroke="#171003" stroke-width="2.4"/>
<circle cx="492" cy="363" r="8" fill="#8f7433" stroke="#241a06" stroke-width="1.4"/>
<path d="M486 361 L498 363" stroke="#171003" stroke-width="2.4"/>

<!-- THE TONGUE: blued steel that should stand four inches out of this
     mortise, cut off level with the plate and going nowhere. -->
<path d="M312 240 L498 276 L498 342 L312 306 Z" fill="url(#ev4-fbolt-oldsteel)"/>
<path d="M312 240 L498 276 L498 288 L312 252 Z" fill="#c8c5bc" opacity="0.45"/>
<path d="M312 296 L498 332 L498 342 L312 306 Z" fill="#100f0e" opacity="0.8"/>
<path d="M312 306 L498 342 L498 350 L312 314 Z" fill="#000" opacity="0.7"/>
<g stroke="#26251f" stroke-width="1.2" opacity="0.55" fill="none">
  <path d="M348 248 L348 314"/><path d="M400 258 L400 324"/><path d="M448 268 L448 334"/>
</g>
<!-- corrosion and old grease where this bolt was never worked -->
<g fill="#6b5f4c" opacity="0.4">
  <ellipse cx="356" cy="278" rx="16" ry="9"/><ellipse cx="410" cy="300" rx="13" ry="7"/>
  <ellipse cx="456" cy="292" rx="11" ry="6"/><ellipse cx="384" cy="266" rx="9" ry="5"/>
</g>

<!-- THE STUB: the bright sawn face, flush with the plate, new as a dime -->
<path d="M492 274 L522 280 L522 350 L492 344 Z" fill="url(#ev4-fbolt-newsteel)" stroke="#3a3d3f" stroke-width="2"/>
<path d="M492 274 L492 344" stroke="#22262a" stroke-width="3" opacity="0.85"/>
<path d="M492 274 L522 280 L522 288 L492 282 Z" fill="#ffffff" opacity="0.9"/>
<g stroke="#787d80" stroke-width="1" opacity="0.6" fill="none">
  <path d="M493 290 L521 296"/><path d="M493 300 L521 306"/><path d="M493 310 L521 316"/>
  <path d="M493 320 L521 326"/><path d="M493 330 L521 336"/>
</g>
<g stroke="#ffffff" stroke-width="1.5" opacity="0.8" fill="none">
  <path d="M494 294 L520 300"/><path d="M494 314 L520 320"/><path d="M494 334 L519 340"/>
</g>
<path d="M492 344 L522 350" stroke="#3d4143" stroke-width="2" opacity="0.8"/>
<!-- bright file scars running back off the stub onto the old steel -->
<g stroke="#d4d7d9" stroke-width="1.3" opacity="0.55" fill="none">
  <path d="M430 262 L490 274"/><path d="M424 280 L490 293"/><path d="M436 300 L490 311"/>
  <path d="M418 310 L488 325"/><path d="M444 326 L490 336"/>
</g>

<!-- the filings: fine gray dust drifted down in the mortise, like frost -->
<path d="M316 296 Q 394 334 494 336 L494 348 Q 392 348 316 310 Z" fill="#9b9a96" opacity="0.5"/>
<g fill="#c9c8c4" opacity="0.75">
  <circle cx="332" cy="306" r="2"/><circle cx="356" cy="318" r="2.6"/><circle cx="382" cy="328" r="1.8"/>
  <circle cx="410" cy="336" r="2.4"/><circle cx="438" cy="342" r="1.6"/><circle cx="464" cy="344" r="2.2"/>
  <circle cx="486" cy="344" r="1.5"/><circle cx="396" cy="344" r="1.7"/><circle cx="368" cy="312" r="1.3"/>
</g>
<g fill="#d6d5d0" opacity="0.45">
  <circle cx="330" cy="400" r="1.8"/><circle cx="358" cy="414" r="2.4"/><circle cx="432" cy="432" r="2"/>
  <circle cx="466" cy="428" r="1.4"/><circle cx="372" cy="446" r="1.2"/>
</g>
<path d="M322 394 Q 400 430 492 420" fill="none" stroke="#b9b8b3" stroke-width="3" opacity="0.26"/>

<!-- the bolt HANDLE on the face of the door, standing at 'fastened' and
     weightless: a brass knob on a plate, thrown hard over. -->
<ellipse cx="196" cy="272" rx="62" ry="58" fill="#000" opacity="0.55" filter="url(#ev4-fbolt-soft)"/>
<rect x="148" y="200" width="66" height="146" rx="9" fill="url(#ev4-fbolt-brass)" stroke="#2f2309" stroke-width="2"/>
<rect x="154" y="206" width="54" height="16" rx="6" fill="#fff5c8" opacity="0.42"/>
<rect x="154" y="328" width="54" height="12" rx="5" fill="#241a06" opacity="0.5"/>
<rect x="168" y="226" width="26" height="94" rx="12" fill="#120c04"/>
<rect x="171" y="230" width="8" height="86" rx="4" fill="#6e5721" opacity="0.7"/>
<circle cx="158" cy="210" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<circle cx="204" cy="210" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<circle cx="158" cy="336" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<circle cx="204" cy="336" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<rect x="172" y="296" width="18" height="26" rx="7" fill="url(#ev4-fbolt-brass)" stroke="#2f2309" stroke-width="1.6"/>
<ellipse cx="181" cy="308" rx="22" ry="15" fill="url(#ev4-fbolt-brass)" stroke="#2f2309" stroke-width="2"/>
<ellipse cx="176" cy="303" rx="9" ry="5" fill="#fff8d4" opacity="0.65"/>
<path d="M164 314 Q 182 322 200 313" fill="none" stroke="#2a1f08" stroke-width="2" opacity="0.6"/>
<g opacity="0.2" fill="none" stroke="#fff3c8" stroke-width="1.1">
  <path d="M192 290 q 10 8 2 18"/><path d="M199 287 q 13 11 2 24"/>
</g>

<rect width="640" height="520" fill="url(#ev4-fbolt-vig)"/>
`,
  },

  /* THE WEAPON'S SOURCE: compartment 8's window strap, cut off at the buckle,
     the stub's knife edge fresh and bright against weathered leather. */
  c4_strapstub: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-stub-bg" x1="0.2" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2a2018"/><stop offset="0.6" stop-color="#130e09"/><stop offset="1" stop-color="#070605"/>
  </linearGradient>
  <linearGradient id="ev4-stub-mahog" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#95552d"/><stop offset="0.3" stop-color="#6d3a1f"/>
    <stop offset="0.7" stop-color="#472314"/><stop offset="1" stop-color="#26120a"/>
  </linearGradient>
  <linearGradient id="ev4-stub-glass" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#8b939a"/><stop offset="0.35" stop-color="#aeb6ba"/>
    <stop offset="0.7" stop-color="#6d757c"/><stop offset="1" stop-color="#3f464c"/>
  </linearGradient>
  <linearGradient id="ev4-stub-leather" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#7a5330"/><stop offset="0.2" stop-color="#5d3d22"/>
    <stop offset="0.5" stop-color="#452c18"/><stop offset="0.8" stop-color="#5a3a20"/><stop offset="1" stop-color="#241609"/>
  </linearGradient>
  <linearGradient id="ev4-stub-cut" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#d5a86e"/><stop offset="0.4" stop-color="#b3854c"/>
    <stop offset="0.75" stop-color="#8c6335"/><stop offset="1" stop-color="#4e3418"/>
  </linearGradient>
  <linearGradient id="ev4-stub-brass" x1="0" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d8ba61"/>
    <stop offset="0.36" stop-color="#fdf2be"/><stop offset="0.58" stop-color="#a9893a"/>
    <stop offset="0.8" stop-color="#e3c979"/><stop offset="1" stop-color="#44330f"/>
  </linearGradient>
  <filter id="ev4-stub-soft" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-stub-vig" cx="0.46" cy="0.44" r="0.76">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-stub-bg)"/>

<!-- the window: night glass with the drift packed dead against the outside -->
<rect x="96" y="24" width="452" height="252" fill="url(#ev4-stub-glass)"/>
<path d="M96 152 Q 200 120 300 138 Q 410 158 548 128 L548 276 L96 276 Z" fill="#dfe4e6" opacity="0.85"/>
<path d="M96 152 Q 200 120 300 138 Q 410 158 548 128" fill="none" stroke="#f6f8f8" stroke-width="4" opacity="0.7"/>
<g fill="#ffffff" opacity="0.5">
  <path d="M104 200 Q 148 172 194 198 Q 168 214 132 212 Z"/>
  <path d="M204 224 Q 254 190 306 220 Q 268 240 226 236 Z"/>
  <path d="M320 202 Q 366 172 412 200 Q 376 220 336 214 Z"/>
  <path d="M428 218 Q 476 190 520 216 Q 484 236 446 230 Z"/>
</g>
<g fill="#9aa4aa" opacity="0.4">
  <path d="M104 200 Q 148 172 194 198 Q 172 210 150 226 Q 128 214 104 200 Z" opacity="0.35"/>
  <path d="M162 240 Q 214 224 260 246 Q 214 258 162 240 Z"/>
  <path d="M282 256 Q 340 240 388 260 Q 336 272 282 256 Z"/>
  <path d="M410 248 Q 468 232 516 252 Q 462 264 410 248 Z"/>
</g>
<g fill="#6f7b82" opacity="0.3">
  <path d="M120 262 Q 210 246 300 266 Q 208 282 120 262 Z"/>
  <path d="M330 262 Q 424 246 522 268 Q 424 282 330 262 Z"/>
</g>
<g stroke="#ffffff" stroke-width="1.6" opacity="0.5" fill="none">
  <path d="M110 214 Q 152 194 196 214"/><path d="M212 238 Q 258 216 306 238"/>
  <path d="M326 216 Q 370 194 414 216"/><path d="M434 232 Q 478 210 520 232"/>
</g>
<path d="M96 24 L300 24 L200 276 L96 276 Z" fill="#ffffff" opacity="0.07"/>
<g opacity="0.22" stroke="#eef3f4" stroke-width="1.4" fill="none">
  <path d="M120 44 Q 148 90 132 150"/><path d="M420 40 Q 452 96 434 146"/>
  <path d="M270 30 Q 296 84 278 134"/>
</g>
<g opacity="0.5" stroke="#c9d2d6" stroke-width="1" fill="none">
  <path d="M110 60 q 18 -14 34 2 q 16 -18 30 0"/>
  <path d="M330 52 q 20 -16 36 2 q 14 -16 28 2"/>
  <path d="M480 70 q 16 -14 32 2"/>
</g>

<!-- the mahogany frame and the sill the strap hangs against -->
<rect x="72" y="0" width="30" height="300" fill="url(#ev4-stub-mahog)"/>
<rect x="542" y="0" width="34" height="300" fill="url(#ev4-stub-mahog)"/>
<rect x="72" y="0" width="504" height="30" fill="url(#ev4-stub-mahog)"/>
<path d="M60 268 L588 268 L602 340 L46 340 Z" fill="url(#ev4-stub-mahog)"/>
<path d="M60 268 L588 268 L590 282 L60 282 Z" fill="#c98950" opacity="0.4"/>
<path d="M46 340 L602 340 L604 356 L44 356 Z" fill="#1c0d06"/>
<path d="M44 356 L604 356 L620 520 L28 520 Z" fill="#3a2013"/>
<g opacity="0.3" stroke="#8e4f2b" stroke-width="1.4" fill="none">
  <path d="M60 380 Q 300 372 604 384"/><path d="M52 424 Q 300 414 610 428"/>
  <path d="M44 470 Q 300 460 616 476"/><path d="M36 508 Q 300 498 620 512"/>
</g>
<g opacity="0.22" stroke="#26120a" stroke-width="2.6" fill="none">
  <path d="M58 400 Q 300 392 606 404"/><path d="M48 450 Q 300 440 614 454"/>
</g>

<!-- cast shadow of buckle and stub on the sill -->
<ellipse cx="286" cy="318" rx="96" ry="34" fill="#000" opacity="0.6" filter="url(#ev4-stub-soft)"/>

<!-- the buckle plate screwed to the frame, and the buckle itself -->
<rect x="222" y="196" width="86" height="42" rx="6" fill="url(#ev4-stub-brass)" stroke="#2e2209" stroke-width="2"/>
<rect x="228" y="202" width="72" height="10" rx="4" fill="#fff5c8" opacity="0.45"/>
<rect x="228" y="228" width="72" height="6" rx="3" fill="#231903" opacity="0.5"/>
<circle cx="234" cy="208" r="6" fill="#9c8130" stroke="#241a06" stroke-width="1.2"/>
<path d="M230 206 L238 210" stroke="#171003" stroke-width="2"/>
<circle cx="296" cy="208" r="6" fill="#9c8130" stroke="#241a06" stroke-width="1.2"/>
<path d="M292 206 L300 210" stroke="#171003" stroke-width="2"/>
<circle cx="234" cy="228" r="6" fill="#9c8130" stroke="#241a06" stroke-width="1.2"/>
<path d="M230 226 L238 230" stroke="#171003" stroke-width="2"/>
<circle cx="296" cy="228" r="6" fill="#9c8130" stroke="#241a06" stroke-width="1.2"/>
<path d="M292 226 L300 230" stroke="#171003" stroke-width="2"/>

<rect x="234" y="234" width="62" height="76" rx="12" fill="none" stroke="url(#ev4-stub-brass)" stroke-width="16"/>
<rect x="234" y="234" width="62" height="76" rx="12" fill="none" stroke="#2b2007" stroke-width="1.6"/>
<path d="M240 240 Q 240 258 240 300" fill="none" stroke="#fff6cc" stroke-width="4" opacity="0.6"/>
<path d="M292 244 Q 292 268 292 302" fill="none" stroke="#241a04" stroke-width="3" opacity="0.5"/>
<rect x="228" y="264" width="76" height="12" rx="5" fill="url(#ev4-stub-brass)" stroke="#2b2007" stroke-width="1.4"/>
<path d="M231 266 L301 266" stroke="#fff6cc" stroke-width="2" opacity="0.6"/>
<path d="M264 270 L322 286" stroke="#8d7128" stroke-width="9" stroke-linecap="round"/>
<path d="M264 270 L322 286" stroke="#e9d189" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
<ellipse cx="266" cy="270" rx="7" ry="6" fill="url(#ev4-stub-brass)" stroke="#2b2007" stroke-width="1.2"/>

<!-- THE STUB: three inches of thick harness leather, and then a knife -->
<path d="M244 246 L292 246 L296 300 L282 344 Q 268 356 254 344 L242 300 Z" fill="url(#ev4-stub-leather)"/>
<path d="M244 246 L262 246 L258 300 L256 340 Q 248 336 246 322 L242 300 Z" fill="#a9784a" opacity="0.28"/>
<path d="M284 246 L292 246 L296 300 L282 344 Q 276 348 272 348 L282 300 Z" fill="#150c04" opacity="0.5"/>
<!-- the double row of stitching that printed itself into a man's throat -->
<g stroke="#c9a677" stroke-width="2.6" stroke-linecap="round" opacity="0.85" fill="none">
  <path d="M252 250 L258 336" stroke-dasharray="8 7"/>
  <path d="M284 250 L280 336" stroke-dasharray="8 7"/>
</g>
<g stroke="#1c1006" stroke-width="1" stroke-linecap="round" opacity="0.7" fill="none">
  <path d="M254 252 L260 338" stroke-dasharray="8 7"/>
  <path d="M286 252 L282 338" stroke-dasharray="8 7"/>
</g>
<!-- grain, and the burnished shine that comes off twenty years of hands -->
<g opacity="0.3" stroke="#8a5f38" stroke-width="0.8" fill="none">
  <path d="M266 250 L266 336"/><path d="M272 250 L271 338"/><path d="M260 250 L262 336"/><path d="M278 250 L276 336"/>
</g>
<path d="M264 258 Q 258 300 262 330" fill="none" stroke="#d0a877" stroke-width="5" opacity="0.22"/>
<g fill="#2a1a0c" opacity="0.4">
  <circle cx="270" cy="272" r="1.4"/><circle cx="262" cy="292" r="1.2"/><circle cx="276" cy="308" r="1.5"/>
  <circle cx="266" cy="318" r="1.1"/><circle cx="274" cy="258" r="1.2"/>
</g>

<!-- THE CUT: a clean bright slice, fibres standing, no dirt in it yet -->
<path d="M254 344 Q 268 356 282 344 L286 356 Q 268 370 250 356 Z" fill="url(#ev4-stub-cut)"/>
<path d="M254 344 Q 268 356 282 344" fill="none" stroke="#f0cf9c" stroke-width="2.6" opacity="0.9"/>
<g stroke="#e7c48d" stroke-width="1.2" opacity="0.75" fill="none">
  <path d="M257 354 l -2 5"/><path d="M263 359 l -1 5"/><path d="M270 361 l 0 5"/>
  <path d="M277 359 l 2 5"/><path d="M283 354 l 2 4"/>
</g>
<path d="M250 356 Q 268 370 286 356" fill="none" stroke="#3a2410" stroke-width="2" opacity="0.6"/>
<!-- two false starts: the knife caught and skipped before it went through -->
<path d="M246 330 Q 262 338 274 332" fill="none" stroke="#e0bd88" stroke-width="1.6" opacity="0.75"/>
<path d="M248 322 Q 258 328 266 325" fill="none" stroke="#e0bd88" stroke-width="1.3" opacity="0.6"/>

<!-- the sound half of the story: an intact strap two windows down, hanging -->
<!-- two windows down, a strap that still has its strap -->
<g opacity="0.62">
  <rect x="454" y="192" width="58" height="30" rx="5" fill="#7d6427" stroke="#241a06" stroke-width="1.4"/>
  <rect x="458" y="196" width="50" height="8" rx="3" fill="#e8d089" opacity="0.5"/>
  <circle cx="462" cy="216" r="4" fill="#4c3d13"/><circle cx="504" cy="216" r="4" fill="#4c3d13"/>
  <rect x="464" y="220" width="40" height="52" rx="8" fill="none" stroke="#8d7128" stroke-width="10"/>
  <rect x="458" y="242" width="52" height="8" rx="3" fill="#8d7128" stroke="#2b2007" stroke-width="1"/>
  <path d="M470 250 L502 250 L508 380 Q 498 402 484 404 Q 470 402 462 380 Z" fill="#3c2715"/>
  <path d="M470 250 L480 250 L476 380 Q 470 396 466 386 Q 462 340 470 250 Z" fill="#7a5330" opacity="0.45"/>
  <path d="M496 250 L502 250 L508 380 Q 502 398 494 402 Q 502 330 496 250 Z" fill="#150c04" opacity="0.5"/>
  <g stroke="#9a7448" stroke-width="2.2" stroke-linecap="round" opacity="0.65" fill="none">
    <path d="M478 256 L474 386" stroke-dasharray="7 7"/><path d="M496 256 L500 386" stroke-dasharray="7 7"/>
  </g>
  <ellipse cx="485" cy="392" rx="24" ry="14" fill="#33210f"/>
  <ellipse cx="479" cy="386" rx="9" ry="5" fill="#8a6038" opacity="0.4"/>
</g>
<ellipse cx="486" cy="420" rx="34" ry="11" fill="#000" opacity="0.45" filter="url(#ev4-stub-soft)"/>

<rect width="640" height="520" fill="url(#ev4-stub-vig)"/>
`,
  },

  /* THE CLOCK: the Havana lit at 7:07 and set down for good. Two inches of
     ash, unbroken along its whole length. The matches beside it, unstruck. */
  c4_cigar: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-cig-bg" x1="0.15" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2c241a"/><stop offset="0.6" stop-color="#141009"/><stop offset="1" stop-color="#080604"/>
  </linearGradient>
  <linearGradient id="ev4-cig-table" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7f4b28"/><stop offset="0.35" stop-color="#5b331b"/>
    <stop offset="0.75" stop-color="#3a1f11"/><stop offset="1" stop-color="#1d0f08"/>
  </linearGradient>
  <linearGradient id="ev4-cig-tray" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#7a7f84"/><stop offset="0.16" stop-color="#d2d8dc"/>
    <stop offset="0.34" stop-color="#f4f7f8"/><stop offset="0.52" stop-color="#8f979d"/>
    <stop offset="0.74" stop-color="#c8cfd4"/><stop offset="1" stop-color="#4a5055"/>
  </linearGradient>
  <linearGradient id="ev4-cig-well" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#3f454a"/><stop offset="0.5" stop-color="#6d757b"/><stop offset="1" stop-color="#252a2e"/>
  </linearGradient>
  <linearGradient id="ev4-cig-wrap" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a5a2c"/><stop offset="0.22" stop-color="#6d4220"/>
    <stop offset="0.6" stop-color="#4b2b13"/><stop offset="1" stop-color="#24140a"/>
  </linearGradient>
  <linearGradient id="ev4-cig-ash" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#efece5"/><stop offset="0.25" stop-color="#cfcbc2"/>
    <stop offset="0.62" stop-color="#9d9890"/><stop offset="1" stop-color="#585450"/>
  </linearGradient>
  <linearGradient id="ev4-cig-band" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e9cf78"/><stop offset="0.4" stop-color="#c1a041"/><stop offset="1" stop-color="#6c561b"/>
  </linearGradient>
  <linearGradient id="ev4-cig-box" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#c6b394"/><stop offset="0.4" stop-color="#9d8a6c"/><stop offset="1" stop-color="#5d5140"/>
  </linearGradient>
  <filter id="ev4-cig-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-cig-vig" cx="0.45" cy="0.44" r="0.76">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-cig-bg)"/>

<!-- the little writing desk: mahogany, polished, one long reflection -->
<path d="M0 244 L640 214 L640 520 L0 520 Z" fill="url(#ev4-cig-table)"/>
<path d="M0 244 L640 214 L640 232 L0 262 Z" fill="#c58a51" opacity="0.35"/>
<g opacity="0.28" stroke="#9b5a30" stroke-width="1.5" fill="none">
  <path d="M0 300 Q 320 282 640 268"/><path d="M0 348 Q 320 328 640 314"/>
  <path d="M0 400 Q 320 378 640 362"/><path d="M0 456 Q 320 432 640 414"/>
  <path d="M0 502 Q 320 478 640 458"/>
</g>
<g opacity="0.2" stroke="#20110a" stroke-width="3" fill="none">
  <path d="M0 322 Q 320 302 640 288"/><path d="M0 428 Q 320 404 640 386"/>
</g>
<path d="M0 250 Q 200 300 640 262 L640 300 Q 220 340 0 288 Z" fill="#ffd9a4" opacity="0.10"/>

<!-- soft cast shadow under the tray -->
<ellipse cx="300" cy="392" rx="196" ry="52" fill="#000" opacity="0.6" filter="url(#ev4-cig-soft)"/>

<!-- the heavy pressed-glass ashtray, seen a little from above -->
<ellipse cx="292" cy="356" rx="196" ry="72" fill="url(#ev4-cig-tray)"/>
<ellipse cx="292" cy="352" rx="196" ry="72" fill="url(#ev4-cig-tray)" opacity="0.9"/>
<ellipse cx="292" cy="352" rx="196" ry="72" fill="none" stroke="#f6fafb" stroke-width="2.4" opacity="0.5"/>
<ellipse cx="292" cy="358" rx="150" ry="50" fill="url(#ev4-cig-well)"/>
<ellipse cx="292" cy="358" rx="150" ry="50" fill="none" stroke="#20262a" stroke-width="2" opacity="0.7"/>
<ellipse cx="292" cy="366" rx="128" ry="40" fill="#1b1f23" opacity="0.55"/>
<path d="M150 340 Q 230 306 330 312" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.35"/>
<path d="M410 330 Q 442 350 428 380" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.22"/>
<g opacity="0.32" stroke="#e9f0f2" stroke-width="1.4" fill="none">
  <path d="M112 330 L138 302"/><path d="M156 316 L176 292"/><path d="M420 302 L444 326"/>
  <path d="M456 316 L474 340"/><path d="M100 372 L124 396"/><path d="M470 366 L448 392"/>
</g>
<!-- the four rest grooves cut into the rim -->
<path d="M212 292 L236 306 L212 316 L188 302 Z" fill="#2c3237"/>
<path d="M212 292 L236 306 L232 309 L210 296 Z" fill="#f2f7f8" opacity="0.55"/>
<path d="M352 288 L376 300 L352 312 L328 298 Z" fill="#2c3237"/>
<path d="M352 288 L376 300 L372 303 L350 292 Z" fill="#f2f7f8" opacity="0.5"/>
<path d="M180 404 L206 418 L180 428 L156 414 Z" fill="#22272b"/>
<path d="M390 400 L414 414 L390 424 L366 410 Z" fill="#22272b"/>

<!-- a dusting of grey where the ash has already shed a little -->
<g fill="#b8b4ac" opacity="0.35">
  <ellipse cx="250" cy="380" rx="30" ry="9"/><ellipse cx="316" cy="392" rx="24" ry="7"/>
  <ellipse cx="360" cy="374" rx="18" ry="6"/>
</g>

<!-- THE HAVANA, lying in the near groove: two inches of unbroken ash -->
<path d="M182 300 L262 288 L268 306 L188 320 Z" fill="#000" opacity="0.35" filter="url(#ev4-cig-soft)"/>
<!-- the tobacco half, still wrapped, glossy, and quite dead -->
<path d="M256 292 Q 340 282 436 274 L440 306 Q 344 314 258 320 Z" fill="url(#ev4-cig-wrap)"/>
<path d="M256 292 Q 340 282 436 274 L437 286 Q 342 294 257 302 Z" fill="#c88a4c" opacity="0.35"/>
<path d="M258 312 Q 344 306 439 298 L440 306 Q 344 314 258 320 Z" fill="#150b04" opacity="0.55"/>
<g opacity="0.4" stroke="#3c2210" stroke-width="1" fill="none">
  <path d="M284 288 Q 288 300 284 318"/><path d="M330 284 Q 334 296 330 314"/>
  <path d="M378 279 Q 382 292 378 309"/><path d="M414 276 Q 418 288 414 305"/>
</g>
<path d="M290 289 Q 350 284 420 277" fill="none" stroke="#e2ac6e" stroke-width="2.6" opacity="0.3"/>
<!-- the cut end, and the band -->
<ellipse cx="438" cy="290" rx="7" ry="17" fill="#2f1a0b"/>
<ellipse cx="438" cy="290" rx="7" ry="17" fill="none" stroke="#8a5c2c" stroke-width="1.6" opacity="0.7"/>
<ellipse cx="438" cy="290" rx="3.4" ry="9" fill="#1a0e05"/>
<path d="M382 279 L404 277 L408 308 L386 310 Z" fill="url(#ev4-cig-band)" stroke="#5b4715" stroke-width="1"/>
<path d="M383 281 L403 279 L403 286 L384 288 Z" fill="#fff3c0" opacity="0.5"/>
<path d="M386 304 L407 302 L408 308 L386 310 Z" fill="#4a3910" opacity="0.6"/>

<!-- THE ASH: a single grey column, still holding its exact shape -->
<path d="M136 300 Q 196 292 258 290 L260 320 Q 198 324 138 322 Z" fill="url(#ev4-cig-ash)"/>
<path d="M136 300 Q 196 292 258 290 L258 300 Q 197 302 137 310 Z" fill="#faf8f3" opacity="0.55"/>
<path d="M138 316 Q 198 314 259 310 L260 320 Q 198 324 138 322 Z" fill="#4c4844" opacity="0.55"/>
<!-- the fine cracked rings of an ash that has NOT been tapped -->
<g stroke="#7d7871" stroke-width="1.2" opacity="0.75" fill="none">
  <path d="M158 296 Q 162 306 158 320"/><path d="M176 294 Q 180 306 176 321"/>
  <path d="M194 293 Q 198 305 194 321"/><path d="M212 292 Q 216 304 212 321"/>
  <path d="M230 291 Q 234 303 230 320"/><path d="M246 290 Q 250 302 246 320"/>
</g>
<g stroke="#efece6" stroke-width="0.8" opacity="0.5" fill="none">
  <path d="M156 296 Q 160 305 156 318"/><path d="M192 293 Q 196 304 192 318"/><path d="M228 291 Q 232 302 228 318"/>
</g>
<!-- the burned tip, cold: a grey crater with a dead black eye -->
<ellipse cx="137" cy="311" rx="8" ry="16" fill="#8d8981"/>
<ellipse cx="137" cy="311" rx="8" ry="16" fill="none" stroke="#d8d5ce" stroke-width="1.2" opacity="0.6"/>
<ellipse cx="136" cy="311" rx="4.6" ry="10" fill="#2a2724"/>
<ellipse cx="135" cy="309" rx="2.2" ry="5" fill="#100f0e"/>
<!-- not one flake shed under the ash column -->
<g fill="#a5a099" opacity="0.25">
  <circle cx="170" cy="330" r="1.4"/><circle cx="216" cy="332" r="1.1"/>
</g>

<!-- the matches, beside it, unstruck: a box and three heads still red -->
<path d="M462 380 Q 560 366 596 392 Q 556 424 468 414 Z" fill="#000" opacity="0.5" filter="url(#ev4-cig-soft)"/>
<path d="M456 336 L582 320 L594 380 L468 398 Z" fill="url(#ev4-cig-box)" stroke="#3a3126" stroke-width="1.6"/>
<path d="M456 336 L582 320 L584 334 L458 350 Z" fill="#e7dcc2" opacity="0.5"/>
<path d="M468 386 L592 368 L594 380 L468 398 Z" fill="#3d3427" opacity="0.6"/>
<path d="M474 344 L568 332 L574 364 L480 376 Z" fill="#7d6c52" opacity="0.55"/>
<path d="M474 344 L568 332 L569 338 L475 350 Z" fill="#cabb9c" opacity="0.4"/>
<!-- the striker strip, unmarked -->
<path d="M462 366 L586 350 L588 360 L464 376 Z" fill="#4a4034"/>
<g opacity="0.4" stroke="#6d6152" stroke-width="0.7" fill="none">
  <path d="M470 368 L580 353"/><path d="M470 372 L582 357"/>
</g>
<!-- three matches spilled out, heads perfect -->
<g>
  <path d="M496 404 L602 388 L604 396 L498 412 Z" fill="#d9c9a6" stroke="#6b5c42" stroke-width="0.9"/>
  <path d="M496 404 L602 388 L602 391 L497 407 Z" fill="#f4ead1" opacity="0.6"/>
  <ellipse cx="496" cy="408" rx="11" ry="8" fill="#9c2d22"/>
  <ellipse cx="493" cy="405" rx="4" ry="3" fill="#d9705c" opacity="0.8"/>
  <path d="M508 428 L610 410 L612 418 L510 436 Z" fill="#cfbf9c" stroke="#6b5c42" stroke-width="0.9"/>
  <ellipse cx="508" cy="432" rx="11" ry="8" fill="#8d271e"/>
  <ellipse cx="505" cy="429" rx="4" ry="3" fill="#cd6a56" opacity="0.75"/>
  <path d="M524 452 L618 436 L620 444 L526 460 Z" fill="#c7b795" stroke="#6b5c42" stroke-width="0.9"/>
  <ellipse cx="524" cy="456" rx="10" ry="7.5" fill="#84241b"/>
  <ellipse cx="521" cy="453" rx="3.6" ry="2.8" fill="#c0624f" opacity="0.7"/>
</g>

<rect width="640" height="520" fill="url(#ev4-cig-vig)"/>
`,
  },

  /* THE OTHER CLOCK: the 8:12 lurch threw the ink across a stain that had
     already finished drying. Crisp ink, unmixed, sitting ON the blood. */
  c4_inkline: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-ink-bg" x1="0.2" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2a2419"/><stop offset="0.65" stop-color="#120f09"/><stop offset="1" stop-color="#070604"/>
  </linearGradient>
  <linearGradient id="ev4-ink-carpet" x1="0.05" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#4e5a3c"/><stop offset="0.28" stop-color="#3c4630"/>
    <stop offset="0.62" stop-color="#2a3222"/><stop offset="1" stop-color="#151a11"/>
  </linearGradient>
  <radialGradient id="ev4-ink-blood" cx="0.42" cy="0.4" r="0.62">
    <stop offset="0" stop-color="#5d2018"/><stop offset="0.45" stop-color="#43170f"/>
    <stop offset="0.8" stop-color="#31110b"/><stop offset="1" stop-color="#2a0f0a" stop-opacity="0.9"/>
  </radialGradient>
  <radialGradient id="ev4-ink-inkpool" cx="0.35" cy="0.32" r="0.7">
    <stop offset="0" stop-color="#28324e"/><stop offset="0.4" stop-color="#151c30"/><stop offset="1" stop-color="#080b16"/>
  </radialGradient>
  <linearGradient id="ev4-ink-glass" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#c9d7cf" stop-opacity="0.85"/><stop offset="0.4" stop-color="#7d8f87" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#3d4a45" stop-opacity="0.85"/>
  </linearGradient>
  <filter id="ev4-ink-soft" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="6"/>
  </filter>
  <radialGradient id="ev4-ink-vig" cx="0.44" cy="0.44" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-ink-bg)"/>

<!-- the compartment carpet: a close, hard-wearing pile in green -->
<rect width="640" height="520" fill="url(#ev4-ink-carpet)"/>
<g opacity="0.3" stroke="#66744e" stroke-width="1" fill="none">
  <path d="M0 40 Q 160 30 320 44 Q 480 58 640 44"/><path d="M0 96 Q 160 86 320 100 Q 480 114 640 100"/>
  <path d="M0 152 Q 160 142 320 156 Q 480 170 640 156"/><path d="M0 208 Q 160 198 320 212 Q 480 226 640 212"/>
  <path d="M0 264 Q 160 254 320 268 Q 480 282 640 268"/><path d="M0 320 Q 160 310 320 324 Q 480 338 640 324"/>
  <path d="M0 376 Q 160 366 320 380 Q 480 394 640 380"/><path d="M0 432 Q 160 422 320 436 Q 480 450 640 436"/>
  <path d="M0 488 Q 160 478 320 492 Q 480 506 640 492"/>
</g>
<g opacity="0.22" stroke="#1b2116" stroke-width="1.4" fill="none">
  <path d="M56 0 L44 520"/><path d="M148 0 L138 520"/><path d="M240 0 L232 520"/><path d="M332 0 L326 520"/>
  <path d="M424 0 L420 520"/><path d="M516 0 L514 520"/><path d="M608 0 L608 520"/>
</g>
<g opacity="0.18" fill="#7d8b62">
  <circle cx="90" cy="70" r="2.4"/><circle cx="210" cy="130" r="2"/><circle cx="360" cy="90" r="2.6"/>
  <circle cx="500" cy="150" r="2.2"/><circle cx="150" cy="300" r="2.4"/><circle cx="420" cy="330" r="2"/>
  <circle cx="560" cy="420" r="2.4"/><circle cx="80" cy="450" r="2"/><circle cx="300" cy="470" r="2.2"/>
</g>
<!-- the chair leg and its shadow, top-left, to place us under the desk -->
<path d="M0 0 L120 0 L98 92 Q 74 116 44 108 L0 74 Z" fill="#1a1d13" opacity="0.85"/>
<path d="M84 26 L112 22 L106 128 Q 92 140 78 128 Z" fill="#2c2418"/>
<path d="M86 30 L96 28 L92 126" fill="none" stroke="#6a5535" stroke-width="3" opacity="0.5"/>
<ellipse cx="96" cy="140" rx="34" ry="12" fill="#000" opacity="0.5" filter="url(#ev4-ink-soft)"/>

<!-- THE STAIN: blood that settled, soaked and dried hours ago. Matte,
     with a hard dark tide-ring where it stopped spreading. -->
<path d="M146 178 Q 176 128 232 134 Q 282 106 332 138 Q 390 130 430 174 Q 488 190 490 254 Q 514 308 462 350 Q 436 406 370 398 Q 316 440 256 410 Q 198 420 174 372 Q 122 350 132 292 Q 114 228 146 178 Z" fill="url(#ev4-ink-blood)"/>
<path d="M146 178 Q 176 128 232 134 Q 282 106 332 138 Q 390 130 430 174 Q 488 190 490 254 Q 514 308 462 350 Q 436 406 370 398 Q 316 440 256 410 Q 198 420 174 372 Q 122 350 132 292 Q 114 228 146 178 Z" fill="none" stroke="#24100b" stroke-width="5" opacity="0.7"/>
<path d="M158 182 Q 186 142 234 146 Q 282 122 328 150 Q 382 144 420 184 Q 472 200 474 256 Q 496 304 452 342 Q 428 392 370 386 Q 318 424 262 398 Q 210 406 188 364 Q 142 344 150 292 Q 134 234 158 182 Z" fill="none" stroke="#6b2a1c" stroke-width="2.4" opacity="0.55"/>
<!-- serum ring: the pale halo dried blood leaves at its margin -->
<path d="M140 176 Q 172 122 232 128 Q 284 100 336 132 Q 396 124 436 170 Q 496 188 496 254 Q 522 310 466 356" fill="none" stroke="#8a5a3c" stroke-width="3.4" opacity="0.30"/>
<path d="M118 292 Q 108 226 142 172" fill="none" stroke="#8a5a3c" stroke-width="2.6" opacity="0.22"/>
<!-- the matte, cracked, mud-flat surface of a stain that finished drying -->
<g stroke="#7a3423" stroke-width="1.2" opacity="0.45" fill="none">
  <path d="M200 210 Q 250 230 246 288 Q 240 340 288 356"/>
  <path d="M280 168 Q 300 226 356 236 Q 412 244 420 300"/>
  <path d="M180 300 Q 244 300 268 342"/>
  <path d="M330 350 Q 372 330 392 288 Q 410 250 452 244"/>
  <path d="M226 180 Q 214 232 172 258"/>
  <path d="M380 176 Q 404 214 452 208"/>
</g>
<g stroke="#1d0a07" stroke-width="1" opacity="0.5" fill="none">
  <path d="M206 216 Q 254 236 250 292"/><path d="M286 174 Q 306 230 360 240"/>
  <path d="M336 354 Q 378 334 396 292"/><path d="M186 304 Q 248 304 272 346"/>
</g>
<!-- the pile still shows through: blood dried INTO the wool -->
<g opacity="0.2" stroke="#7e8a5f" stroke-width="0.8" fill="none">
  <path d="M170 208 Q 300 194 452 216"/><path d="M156 268 Q 300 252 484 274"/>
  <path d="M172 328 Q 300 316 460 330"/><path d="M212 380 Q 320 372 412 384"/>
</g>
<!-- two boot-scuff drag marks in the dried surface, dull, not wet -->
<path d="M244 402 Q 288 418 336 406" fill="none" stroke="#5c2418" stroke-width="7" opacity="0.4" stroke-linecap="round"/>

<!-- THE INK, thrown ACROSS it: crisp, beaded, sitting ON TOP, unmixed -->
<path d="M504 358 Q 448 340 408 312 Q 360 276 318 240 Q 272 200 234 172 Q 210 152 188 136 L182 146 Q 202 168 226 194 Q 264 232 310 272 Q 356 310 404 342 Q 450 374 488 404 Z" fill="url(#ev4-ink-inkpool)" opacity="0.96"/>
<path d="M504 358 Q 448 340 408 312 Q 360 276 318 240 Q 272 200 234 172 Q 210 152 188 136 L185 141 Q 206 160 232 184 Q 270 220 316 260 Q 362 298 410 330 Q 456 362 494 390 Z" fill="#4a5a80" opacity="0.35"/>
<!-- where the throw first hit and pooled, and the scallops it tore -->
<path d="M470 344 Q 502 366 512 398 Q 486 408 458 392 Q 442 368 470 344 Z" fill="#0e1424"/>
<path d="M394 302 q 14 -12 24 4 q -10 12 -24 -4 Z" fill="#111726"/>
<path d="M312 238 q 12 -14 22 2 q -8 14 -22 -2 Z" fill="#111726"/>
<path d="M236 176 q 10 -12 20 2 q -8 12 -20 -2 Z" fill="#111726"/>
<path d="M348 268 q -12 12 -2 22 q 14 -6 2 -22 Z" fill="#0f1524"/>
<path d="M262 206 q -12 12 -2 20 q 14 -6 2 -20 Z" fill="#0f1524"/>
<!-- the fan of the spray, each drop with a wet-looking specular -->
<g fill="#111726">
  <ellipse cx="156" cy="112" rx="19" ry="10" transform="rotate(37 156 112)"/>
  <ellipse cx="124" cy="86" rx="13" ry="8" transform="rotate(37 124 86)"/>
  <ellipse cx="96" cy="60" rx="9" ry="6" transform="rotate(37 96 60)"/>
  <ellipse cx="234" cy="122" rx="17" ry="9" transform="rotate(31 234 122)"/>
  <ellipse cx="304" cy="172" rx="20" ry="10" transform="rotate(33 304 172)"/>
  <ellipse cx="376" cy="216" rx="16" ry="9" transform="rotate(30 376 216)"/>
  <ellipse cx="446" cy="264" rx="18" ry="10" transform="rotate(33 446 264)"/>
  <ellipse cx="508" cy="304" rx="12" ry="7" transform="rotate(32 508 304)"/>
  <ellipse cx="170" cy="200" rx="15" ry="9" transform="rotate(41 170 200)"/>
  <ellipse cx="240" cy="256" rx="18" ry="10" transform="rotate(40 240 256)"/>
  <ellipse cx="312" cy="312" rx="14" ry="8" transform="rotate(42 312 312)"/>
  <ellipse cx="384" cy="360" rx="17" ry="9" transform="rotate(39 384 360)"/>
  <ellipse cx="452" cy="410" rx="12" ry="7" transform="rotate(41 452 410)"/>
  <ellipse cx="206" cy="308" rx="11" ry="7" transform="rotate(45 206 308)"/>
  <ellipse cx="276" cy="374" rx="9" ry="6" transform="rotate(45 276 374)"/>
</g>
<g fill="#7f93bd" opacity="0.55">
  <ellipse cx="152" cy="107" rx="6" ry="3" transform="rotate(37 152 107)"/>
  <ellipse cx="300" cy="167" rx="6" ry="2.8" transform="rotate(33 300 167)"/>
  <ellipse cx="442" cy="259" rx="5.4" ry="2.6" transform="rotate(33 442 259)"/>
  <ellipse cx="236" cy="251" rx="5.4" ry="2.6" transform="rotate(40 236 251)"/>
  <ellipse cx="380" cy="355" rx="5" ry="2.4" transform="rotate(39 380 355)"/>
  <ellipse cx="166" cy="195" rx="4.4" ry="2.2" transform="rotate(41 166 195)"/>
  <ellipse cx="230" cy="117" rx="4.6" ry="2.2" transform="rotate(31 230 117)"/>
</g>
<!-- the finest of the spatter, needle-fine, still perfectly edged -->
<g fill="#0f1422">
  <circle cx="120" cy="176" r="2.6"/><circle cx="196" cy="146" r="2.2"/><circle cx="268" cy="152" r="2.8"/>
  <circle cx="412" cy="238" r="3"/><circle cx="480" cy="286" r="2.4"/><circle cx="140" cy="248" r="2.2"/>
  <circle cx="286" cy="266" r="2.4"/><circle cx="418" cy="352" r="2.6"/><circle cx="180" cy="352" r="2.4"/>
  <circle cx="322" cy="394" r="2.6"/><circle cx="88" cy="130" r="2"/><circle cx="546" cy="342" r="2.2"/>
</g>

<!-- the bottle itself, shattered where the mountain put it -->
<ellipse cx="524" cy="428" rx="86" ry="30" fill="#000" opacity="0.55" filter="url(#ev4-ink-soft)"/>
<path d="M472 402 Q 494 356 526 352 Q 566 350 584 384 L588 424 Q 534 444 476 430 Z" fill="url(#ev4-ink-glass)"/>
<path d="M480 402 Q 500 366 526 362 Q 558 360 574 388 L578 418 Q 532 434 484 424 Z" fill="#12182a" opacity="0.75"/>
<path d="M478 396 Q 498 360 524 356" fill="none" stroke="#eef5f1" stroke-width="3.4" opacity="0.6"/>
<path d="M576 392 Q 584 406 584 420" fill="none" stroke="#eef5f1" stroke-width="2" opacity="0.35"/>
<path d="M520 348 L546 344 L550 322 L526 324 Z" fill="url(#ev4-ink-glass)"/>
<path d="M522 348 L530 346 L528 324" fill="none" stroke="#f2f8f4" stroke-width="2" opacity="0.5"/>
<!-- shards, thrown clear, each with a bright broken edge -->
<g fill="#26302c" stroke="#8fa39a" stroke-width="0.8">
  <path d="M596 340 L628 328 L620 366 Z" opacity="0.85"/>
  <path d="M446 452 L484 442 L470 476 Z" opacity="0.8"/>
  <path d="M560 466 L602 456 L588 490 Z" opacity="0.8"/>
  <path d="M406 430 L432 424 L424 448 Z" opacity="0.75"/>
  <path d="M614 402 L640 396 L636 424 Z" opacity="0.7"/>
</g>
<g fill="#0d1220" opacity="0.8">
  <path d="M600 344 L622 336 L616 358 Z"/><path d="M452 452 L476 446 L468 468 Z"/>
  <path d="M566 468 L594 460 L586 482 Z"/><path d="M410 430 L428 426 L423 443 Z"/>
</g>
<g stroke="#e6efe9" stroke-width="1.4" opacity="0.7" fill="none">
  <path d="M596 340 L628 328"/><path d="M446 452 L484 442"/><path d="M560 466 L602 456"/>
  <path d="M614 402 L640 396"/><path d="M406 430 L432 424"/>
</g>
<path d="M556 428 Q 590 448 606 486" fill="none" stroke="#141a2c" stroke-width="9" opacity="0.8" stroke-linecap="round"/>
<path d="M558 430 Q 588 448 602 480" fill="none" stroke="#465577" stroke-width="2.4" opacity="0.4" stroke-linecap="round"/>

<rect width="640" height="520" fill="url(#ev4-ink-vig)"/>
`,
  },

  /* THE WEAPON, recovered: eighteen inches down in a drift the wind only
     began building after 8:12, under compartment 8's window. */
  c4_strap: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-drift-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a3244"/><stop offset="0.55" stop-color="#141a26"/><stop offset="1" stop-color="#070a10"/>
  </linearGradient>
  <radialGradient id="ev4-drift-lantern" cx="0.3" cy="0.16" r="0.8">
    <stop offset="0" stop-color="#ffe0a4" stop-opacity="0.44"/><stop offset="0.55" stop-color="#ffd090" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#ffd090" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev4-drift-snow" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f6f7fa"/><stop offset="0.3" stop-color="#dfe5ef"/>
    <stop offset="0.66" stop-color="#a9b4c6"/><stop offset="1" stop-color="#6b768c"/>
  </linearGradient>
  <linearGradient id="ev4-drift-hole" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#8b98ae"/><stop offset="0.4" stop-color="#59647a"/>
    <stop offset="0.75" stop-color="#333c4d"/><stop offset="1" stop-color="#1a2130"/>
  </linearGradient>
  <linearGradient id="ev4-drift-leather" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#8a6039"/><stop offset="0.22" stop-color="#68452a"/>
    <stop offset="0.55" stop-color="#432a19"/><stop offset="0.82" stop-color="#5d3c23"/><stop offset="1" stop-color="#20140b"/>
  </linearGradient>
  <linearGradient id="ev4-drift-cut" x1="0" y1="0" x2="1" y2="0.5">
    <stop offset="0" stop-color="#dcb079"/><stop offset="0.5" stop-color="#a97c47"/><stop offset="1" stop-color="#5a3c1e"/>
  </linearGradient>
  <filter id="ev4-drift-soft" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev4-drift-vig" cx="0.42" cy="0.4" r="0.8">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.80"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-drift-bg)"/>

<!-- the drift, wind-packed in layers, cut open by a spade -->
<path d="M0 96 Q 120 60 250 74 Q 400 92 520 62 Q 590 46 640 58 L640 520 L0 520 Z" fill="url(#ev4-drift-snow)"/>
<g opacity="0.35" stroke="#8e9aae" stroke-width="1.6" fill="none">
  <path d="M0 138 Q 130 106 258 120 Q 402 138 522 108 Q 592 92 640 104"/>
  <path d="M0 178 Q 130 148 258 162 Q 402 180 522 150 Q 592 134 640 146"/>
  <path d="M0 222 Q 130 192 258 206 Q 402 224 522 194 Q 592 178 640 190"/>
</g>
<g opacity="0.5" stroke="#ffffff" stroke-width="1.4" fill="none">
  <path d="M0 128 Q 130 96 258 110 Q 402 128 522 98 Q 592 82 640 94"/>
  <path d="M0 210 Q 130 180 258 194 Q 402 212 522 182 Q 592 166 640 178"/>
</g>
<rect width="640" height="520" fill="url(#ev4-drift-lantern)"/>

<!-- the pit: a spade-cut shaft, layered walls, going down into blue dark -->
<path d="M104 190 Q 200 150 322 158 Q 458 168 546 214 Q 566 300 512 384 Q 420 468 300 462 Q 176 456 118 372 Q 84 282 104 190 Z" fill="url(#ev4-drift-hole)"/>
<path d="M104 190 Q 200 150 322 158 Q 458 168 546 214 Q 520 246 420 250 Q 280 256 176 234 Q 122 222 104 190 Z" fill="#eef2f8" opacity="0.55"/>
<path d="M126 232 Q 250 274 420 268 Q 500 264 540 244" fill="none" stroke="#c3ccdc" stroke-width="3" opacity="0.5"/>
<path d="M136 286 Q 258 326 424 318 Q 492 314 528 296" fill="none" stroke="#9fabbf" stroke-width="2.6" opacity="0.45"/>
<path d="M150 340 Q 266 378 420 368 Q 478 364 512 348" fill="none" stroke="#7a869c" stroke-width="2.4" opacity="0.45"/>
<!-- spade scars down the wall -->
<g opacity="0.4" stroke="#ffffff" stroke-width="2" fill="none">
  <path d="M170 236 Q 178 320 200 400"/><path d="M242 254 Q 246 340 262 428"/>
  <path d="M360 258 Q 364 344 356 442"/><path d="M452 246 Q 462 330 444 414"/>
</g>
<g opacity="0.35" stroke="#37415a" stroke-width="2" fill="none">
  <path d="M204 240 Q 212 324 232 406"/><path d="M300 258 Q 302 346 300 444"/>
  <path d="M410 254 Q 416 340 404 432"/>
</g>
<!-- the floor of the pit, in the lantern's cone -->
<ellipse cx="330" cy="392" rx="176" ry="70" fill="#252e40"/>
<ellipse cx="316" cy="384" rx="150" ry="58" fill="#3b465c"/>
<ellipse cx="300" cy="374" rx="112" ry="42" fill="#5a6980" opacity="0.7"/>
<ellipse cx="284" cy="364" rx="70" ry="26" fill="#8b99ae" opacity="0.5"/>

<!-- THE STRAP, half out of the snow, lantern light along its length -->
<ellipse cx="330" cy="416" rx="140" ry="34" fill="#0d1220" opacity="0.6" filter="url(#ev4-drift-soft)"/>
<path d="M182 348 Q 244 396 316 400 Q 396 404 460 366 L468 412 Q 398 452 314 448 Q 232 442 174 394 Z" fill="url(#ev4-drift-leather)"/>
<path d="M182 348 Q 244 396 316 400 Q 396 404 460 366 L462 380 Q 396 418 314 414 Q 236 410 178 362 Z" fill="#b48555" opacity="0.32"/>
<path d="M176 396 Q 234 442 314 448 Q 398 452 468 412 L466 420 Q 396 458 314 454 Q 230 448 174 402 Z" fill="#120a05" opacity="0.6"/>
<!-- the two rows of stitching that match a dead man's throat -->
<g stroke="#c9a374" stroke-width="2.8" stroke-linecap="round" opacity="0.85" fill="none">
  <path d="M186 356 Q 246 402 316 406 Q 394 410 458 374" stroke-dasharray="9 8"/>
  <path d="M180 388 Q 240 434 314 438 Q 396 442 464 404" stroke-dasharray="9 8"/>
</g>
<g stroke="#1d1108" stroke-width="1.1" stroke-linecap="round" opacity="0.7" fill="none">
  <path d="M187 359 Q 247 405 317 409 Q 395 413 459 377" stroke-dasharray="9 8"/>
  <path d="M181 391 Q 241 437 315 441 Q 397 445 465 407" stroke-dasharray="9 8"/>
</g>
<!-- grain and the polish of a hand-rail strap -->
<g opacity="0.25" stroke="#95693f" stroke-width="0.9" fill="none">
  <path d="M184 366 Q 244 412 316 416 Q 394 420 460 384"/>
  <path d="M182 376 Q 242 422 315 426 Q 395 430 462 394"/>
</g>
<path d="M230 380 Q 300 414 380 410" fill="none" stroke="#d3a973" stroke-width="6" opacity="0.16"/>
<g fill="#24170c" opacity="0.4">
  <circle cx="256" cy="392" r="1.6"/><circle cx="308" cy="404" r="1.4"/><circle cx="358" cy="402" r="1.7"/>
  <circle cx="404" cy="392" r="1.3"/><circle cx="216" cy="376" r="1.4"/>
</g>
<!-- the cut end, at the buckle: bright, unweathered, clean through -->
<path d="M460 366 L468 412 Q 486 400 490 376 Q 480 360 460 366 Z" fill="url(#ev4-drift-cut)"/>
<path d="M460 366 Q 480 360 490 376" fill="none" stroke="#f0cf9c" stroke-width="2.4" opacity="0.85"/>
<g stroke="#e3c088" stroke-width="1.2" opacity="0.7" fill="none">
  <path d="M466 372 l 8 -3"/><path d="M468 384 l 9 -2"/><path d="M468 396 l 8 -3"/>
</g>
<path d="M468 412 Q 486 400 490 376" fill="none" stroke="#3a2410" stroke-width="1.8" opacity="0.6"/>
<!-- the buckle end, still folded, with its worn hole -->
<path d="M182 348 Q 158 340 148 356 Q 144 380 160 396 Q 172 404 176 396 Z" fill="url(#ev4-drift-leather)"/>
<ellipse cx="166" cy="370" rx="9" ry="12" fill="#150c05"/>
<ellipse cx="166" cy="370" rx="9" ry="12" fill="none" stroke="#a3764a" stroke-width="1.6" opacity="0.7"/>
<ellipse cx="163" cy="366" rx="3" ry="4" fill="#c49766" opacity="0.5"/>
<path d="M150 356 Q 146 380 160 394" fill="none" stroke="#c8a06c" stroke-width="1.6" opacity="0.4"/>

<!-- snow still packed into the stitching, and thrown up on the rim -->
<g fill="#eaf0f8" opacity="0.75">
  <ellipse cx="212" cy="366" rx="12" ry="5" transform="rotate(20 212 366)"/>
  <ellipse cx="286" cy="398" rx="16" ry="6" transform="rotate(10 286 398)"/>
  <ellipse cx="368" cy="404" rx="13" ry="5" transform="rotate(-8 368 404)"/>
  <ellipse cx="436" cy="384" rx="10" ry="4" transform="rotate(-22 436 384)"/>
  <ellipse cx="248" cy="430" rx="14" ry="5" transform="rotate(14 248 430)"/>
  <ellipse cx="392" cy="436" rx="12" ry="4" transform="rotate(-12 392 436)"/>
</g>
<g fill="#ffffff" opacity="0.6">
  <circle cx="196" cy="352" r="3"/><circle cx="270" cy="380" r="2.4"/><circle cx="340" cy="392" r="2.8"/>
  <circle cx="412" cy="378" r="2.2"/><circle cx="228" cy="420" r="2.6"/><circle cx="356" cy="440" r="2.2"/>
  <circle cx="452" cy="398" r="2"/><circle cx="168" cy="404" r="2.2"/>
</g>
<!-- the spade, leaning at the rim, and the lantern's edge of light -->
<path d="M556 96 L586 90 L604 300 L578 306 Z" fill="#3d4658"/>
<path d="M558 100 L568 98 L586 300" fill="none" stroke="#8c97ad" stroke-width="3" opacity="0.5"/>
<path d="M574 300 L610 294 L620 372 Q 596 388 570 374 Z" fill="#98a2b4"/>
<path d="M576 304 L606 299 L612 358 Q 594 370 576 360 Z" fill="#cfd7e4" opacity="0.6"/>
<path d="M578 306 Q 596 320 610 306" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.5"/>

<!-- the near lip of the pit, thrown up by the spade, close to the lens -->
<path d="M0 470 Q 96 444 176 468 Q 254 492 336 500 Q 434 508 522 484 Q 592 464 640 476 L640 520 L0 520 Z" fill="url(#ev4-drift-snow)"/>
<path d="M0 470 Q 96 444 176 468 Q 254 492 336 500 Q 434 508 522 484 Q 592 464 640 476 L640 490 Q 562 476 504 498 Q 424 522 330 514 Q 240 506 168 486 Q 90 466 0 488 Z" fill="#ffffff" opacity="0.45"/>
<g opacity="0.3" stroke="#7d8a9e" stroke-width="2" fill="none">
  <path d="M0 508 Q 130 490 230 508 Q 344 526 452 512 Q 552 496 640 510"/>
</g>
<g fill="#ffffff" opacity="0.5">
  <ellipse cx="88" cy="490" rx="28" ry="9"/><ellipse cx="252" cy="510" rx="32" ry="9"/>
  <ellipse cx="430" cy="506" rx="28" ry="8"/><ellipse cx="570" cy="490" rx="24" ry="7"/>
</g>
<rect width="640" height="520" fill="url(#ev4-drift-vig)"/>
`,
  },

  /* THE SEALED TUBE: the porter's folding jump seat at the corridor's end,
     commanding every door from 4 to 9 in one unbroken sightline. */
  c4_corridor: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-corr-bg" x1="0.3" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#2b2117"/><stop offset="0.6" stop-color="#150f0a"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-corr-wall" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#7b4b28"/><stop offset="0.35" stop-color="#59341c"/>
    <stop offset="0.72" stop-color="#3a2011"/><stop offset="1" stop-color="#1c0f08"/>
  </linearGradient>
  <linearGradient id="ev4-corr-floor" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#4b4232"/><stop offset="0.5" stop-color="#332c20"/><stop offset="1" stop-color="#161209"/>
  </linearGradient>
  <linearGradient id="ev4-corr-seat" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6d5236"/><stop offset="0.24" stop-color="#4c3722"/>
    <stop offset="0.62" stop-color="#332314"/><stop offset="1" stop-color="#241708"/>
  </linearGradient>
  <linearGradient id="ev4-corr-leather" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#5f4a2e"/><stop offset="0.3" stop-color="#42311c"/>
    <stop offset="0.7" stop-color="#2c2013"/><stop offset="1" stop-color="#171008"/>
  </linearGradient>
  <linearGradient id="ev4-corr-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d5b75f"/>
    <stop offset="0.4" stop-color="#faeeb9"/><stop offset="0.62" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <radialGradient id="ev4-corr-lamp" cx="0.2" cy="0.14" r="0.7">
    <stop offset="0" stop-color="#ffce7c" stop-opacity="0.4"/><stop offset="1" stop-color="#ffce7c" stop-opacity="0"/>
  </radialGradient>
  <filter id="ev4-corr-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-corr-vig" cx="0.4" cy="0.44" r="0.8">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-corr-bg)"/>

<!-- the corridor running away to a vanishing point: mahogany both sides -->
<path d="M0 0 L206 0 L470 190 L470 316 L206 520 L0 520 Z" fill="url(#ev4-corr-wall)"/>
<path d="M640 0 L508 0 L472 188 L472 318 L508 520 L640 520 Z" fill="#22140c"/>
<path d="M206 0 L470 190 L470 316 L206 520 Z" fill="#120b06"/>
<path d="M0 434 Q 220 470 470 316 L472 318 L508 520 L0 520 Z" fill="url(#ev4-corr-floor)"/>
<g opacity="0.25" stroke="#6d5a3a" stroke-width="1.4" fill="none">
  <path d="M0 460 Q 240 486 476 346"/><path d="M0 492 Q 250 516 486 400"/>
</g>
<rect width="640" height="520" fill="url(#ev4-corr-lamp)"/>

<!-- the ranked doors down the near wall, shrinking into the dark -->
<g>
  <path d="M18 40 L118 112 L118 452 L18 500 Z" fill="#4a2a16" stroke="#1e1108" stroke-width="3"/>
  <path d="M30 66 L106 122 L106 428 L30 470 Z" fill="#5c3319" opacity="0.8"/>
  <path d="M30 66 L106 122 L106 136 L30 82 Z" fill="#a4693b" opacity="0.35"/>
  <ellipse cx="110" cy="278" rx="7" ry="12" fill="url(#ev4-corr-brass)"/>
  <rect x="98" y="152" width="14" height="22" rx="3" fill="url(#ev4-corr-brass)" stroke="#241a06" stroke-width="1"/>
</g>
<g>
  <path d="M140 128 L226 190 L226 406 L140 448 Z" fill="#452715" stroke="#1e1108" stroke-width="2.6"/>
  <path d="M150 148 L216 198 L216 392 L150 424 Z" fill="#55301a" opacity="0.8"/>
  <path d="M150 148 L216 198 L216 208 L150 160 Z" fill="#9c6237" opacity="0.32"/>
  <ellipse cx="219" cy="290" rx="6" ry="10" fill="url(#ev4-corr-brass)"/>
  <rect x="209" y="206" width="12" height="18" rx="3" fill="url(#ev4-corr-brass)" stroke="#241a06" stroke-width="0.9"/>
</g>
<g>
  <path d="M246 190 L312 238 L312 372 L246 404 Z" fill="#3f2413" stroke="#1e1108" stroke-width="2.2"/>
  <path d="M254 206 L304 244 L304 362 L254 386 Z" fill="#4e2c17" opacity="0.8"/>
  <ellipse cx="306" cy="300" rx="5" ry="8" fill="url(#ev4-corr-brass)"/>
  <rect x="298" y="250" width="10" height="15" rx="2" fill="url(#ev4-corr-brass)" stroke="#241a06" stroke-width="0.8"/>
</g>
<g>
  <path d="M328 236 L378 272 L378 348 L328 372 Z" fill="#38200f" stroke="#1e1108" stroke-width="1.8"/>
  <path d="M334 248 L372 276 L372 342 L334 360 Z" fill="#472715" opacity="0.8"/>
  <ellipse cx="374" cy="306" rx="4" ry="6" fill="url(#ev4-corr-brass)"/>
</g>
<g>
  <path d="M390 270 L424 296 L424 330 L390 348 Z" fill="#301b0d" stroke="#1e1108" stroke-width="1.4"/>
  <ellipse cx="421" cy="312" rx="3" ry="5" fill="url(#ev4-corr-brass)"/>
</g>
<!-- night-lights turned down to embers along the ceiling -->
<g>
  <ellipse cx="150" cy="34" rx="20" ry="12" fill="#ffcf86" opacity="0.35"/>
  <ellipse cx="150" cy="34" rx="9" ry="6" fill="#ffe6b6" opacity="0.75"/>
  <ellipse cx="290" cy="118" rx="14" ry="8" fill="#ffcf86" opacity="0.28"/>
  <ellipse cx="290" cy="118" rx="6" ry="4" fill="#ffe6b6" opacity="0.6"/>
  <ellipse cx="384" cy="176" rx="10" ry="6" fill="#ffcf86" opacity="0.22"/>
  <ellipse cx="440" cy="212" rx="7" ry="4" fill="#ffcf86" opacity="0.18"/>
</g>

<!-- THE JUMP SEAT, folded down at the corridor's end, close to us -->
<ellipse cx="516" cy="472" rx="140" ry="34" fill="#000" opacity="0.6" filter="url(#ev4-corr-soft)"/>
<path d="M596 128 L636 122 L640 470 L600 476 Z" fill="#3c2415"/>
<path d="M598 132 L610 130 L614 466" fill="none" stroke="#8a5a33" stroke-width="3" opacity="0.4"/>
<!-- the hinge brackets bolted to the panelling -->
<rect x="560" y="286" width="52" height="26" rx="4" fill="url(#ev4-corr-brass)" stroke="#2d2109" stroke-width="1.6"/>
<rect x="564" y="290" width="44" height="7" rx="3" fill="#fff3c0" opacity="0.45"/>
<circle cx="570" cy="306" r="4.4" fill="#8d7330" stroke="#241a06" stroke-width="1"/>
<circle cx="602" cy="306" r="4.4" fill="#8d7330" stroke="#241a06" stroke-width="1"/>
<circle cx="562" cy="298" r="9" fill="url(#ev4-corr-brass)" stroke="#2d2109" stroke-width="1.6"/>
<circle cx="562" cy="298" r="3.4" fill="#191203"/>
<!-- the folding leg, dropped -->
<path d="M552 306 L568 302 L522 476 L502 474 Z" fill="#4a3a1e"/>
<path d="M553 308 L560 306 L516 472" fill="none" stroke="#c6a45c" stroke-width="2.4" opacity="0.55"/>

<!-- the seat itself: hard leather over a frame, worn to a shine in the middle -->
<path d="M368 300 L582 274 L604 316 L392 348 Z" fill="url(#ev4-corr-seat)"/>
<path d="M368 300 L582 274 L586 284 L370 312 Z" fill="#a8804d" opacity="0.35"/>
<path d="M368 300 L392 348 L392 372 L368 326 Z" fill="#2a1a0c"/>
<path d="M392 348 L604 316 L606 342 L392 372 Z" fill="#241708"/>
<path d="M380 306 L578 280 L598 314 L398 344 Z" fill="url(#ev4-corr-leather)"/>
<ellipse cx="490" cy="312" rx="86" ry="20" fill="#7a5f38" opacity="0.32"/>
<ellipse cx="486" cy="310" rx="54" ry="12" fill="#96784a" opacity="0.28"/>
<path d="M394 306 Q 486 292 580 282" fill="none" stroke="#c4a068" stroke-width="2" opacity="0.35"/>
<!-- studded edge and the two creases thirty years of sitting put in it -->
<g fill="url(#ev4-corr-brass)" stroke="#2d2109" stroke-width="0.8">
  <circle cx="400" cy="318" r="4.4"/><circle cx="432" cy="314" r="4.4"/><circle cx="464" cy="310" r="4.4"/>
  <circle cx="496" cy="305" r="4.4"/><circle cx="528" cy="300" r="4.4"/><circle cx="560" cy="295" r="4.4"/>
  <circle cx="588" cy="291" r="4.4"/>
</g>
<g stroke="#1d1409" stroke-width="2" opacity="0.5" fill="none">
  <path d="M424 336 Q 486 322 552 306"/><path d="M414 328 Q 480 314 544 298"/>
</g>
<path d="M432 340 Q 494 326 560 310" fill="none" stroke="#8a6c40" stroke-width="1.4" opacity="0.35"/>
<!-- a folded white cloth over one arm of it: thirty years of habit -->
<path d="M386 292 Q 412 278 442 284 Q 430 302 400 308 Z" fill="#ded7c4"/>
<path d="M386 292 Q 412 278 442 284 Q 424 290 400 292 Z" fill="#f6f2e4" opacity="0.7"/>
<path d="M392 296 Q 414 288 436 288" fill="none" stroke="#a9a28e" stroke-width="1.2" opacity="0.7"/>

<rect width="640" height="520" fill="url(#ev4-corr-vig)"/>
`,
  },

  /* THE VOICE: what the porter actually had — a panelled door at knuckle
     height, and the seltzer tray he set down and nobody ever took in. */
  c4_voice: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-voice-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2b2116"/><stop offset="0.6" stop-color="#150f09"/><stop offset="1" stop-color="#080604"/>
  </linearGradient>
  <linearGradient id="ev4-voice-door" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#8b5029"/><stop offset="0.3" stop-color="#63371d"/>
    <stop offset="0.7" stop-color="#412313"/><stop offset="1" stop-color="#23130a"/>
  </linearGradient>
  <linearGradient id="ev4-voice-floor" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4c4231"/><stop offset="0.5" stop-color="#332c1f"/><stop offset="1" stop-color="#171208"/>
  </linearGradient>
  <linearGradient id="ev4-voice-tray" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#7e8489"/><stop offset="0.14" stop-color="#d8dee2"/>
    <stop offset="0.32" stop-color="#f7fafb"/><stop offset="0.52" stop-color="#939a9f"/>
    <stop offset="0.76" stop-color="#c6ccd1"/><stop offset="1" stop-color="#484d51"/>
  </linearGradient>
  <linearGradient id="ev4-voice-siphon" x1="0.05" y1="0" x2="0.95" y2="0.6">
    <stop offset="0" stop-color="#4e6b60"/><stop offset="0.18" stop-color="#9ec4b4"/>
    <stop offset="0.36" stop-color="#e6f4ee"/><stop offset="0.58" stop-color="#6d9184"/>
    <stop offset="0.8" stop-color="#bcd9cd"/><stop offset="1" stop-color="#2c433b"/>
  </linearGradient>
  <linearGradient id="ev4-voice-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#eef3f2" stop-opacity="0.42"/><stop offset="0.3" stop-color="#ffffff" stop-opacity="0.18"/>
    <stop offset="0.7" stop-color="#cdd6d3" stop-opacity="0.14"/><stop offset="1" stop-color="#e9efed" stop-opacity="0.44"/>
  </linearGradient>
  <linearGradient id="ev4-voice-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d5b75f"/>
    <stop offset="0.4" stop-color="#faeeb9"/><stop offset="0.64" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <filter id="ev4-voice-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-voice-vig" cx="0.42" cy="0.4" r="0.8">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-voice-bg)"/>

<!-- the door, seen from the corridor, cropped at the lower panel -->
<rect x="0" y="0" width="640" height="352" fill="url(#ev4-voice-door)"/>
<g opacity="0.32" stroke="#a3663a" stroke-width="1.5" fill="none">
  <path d="M40 0 Q 32 120 42 260 Q 36 320 44 352"/>
  <path d="M132 0 Q 142 130 130 270 Q 138 330 128 352"/>
  <path d="M244 0 Q 236 120 246 262 Q 240 322 248 352"/>
  <path d="M356 0 Q 366 140 354 280 Q 362 330 352 352"/>
  <path d="M472 0 Q 464 120 474 264 Q 468 324 476 352"/>
  <path d="M584 0 Q 594 132 582 272 Q 590 326 580 352"/>
</g>
<g opacity="0.22" stroke="#26130a" stroke-width="3" fill="none">
  <path d="M86 0 Q 94 140 82 290"/><path d="M300 0 Q 292 150 302 300"/><path d="M528 0 Q 536 140 524 292"/>
</g>
<!-- two raised panels: the one at knuckle height is where the voice came from -->
<path d="M56 26 L292 26 L292 300 L56 300 Z" fill="none" stroke="#2c160b" stroke-width="7"/>
<path d="M56 26 L292 26 L282 40 L66 40 Z" fill="#c07f4c" opacity="0.3"/>
<path d="M56 26 L66 40 L66 286 L56 300 Z" fill="#c07f4c" opacity="0.24"/>
<path d="M292 26 L292 300 L282 286 L282 40 Z" fill="#180b05" opacity="0.55"/>
<path d="M56 300 L292 300 L282 286 L66 286 Z" fill="#180b05" opacity="0.5"/>
<rect x="72" y="46" width="204" height="234" fill="#5c3018" opacity="0.5"/>
<path d="M348 26 L584 26 L584 300 L348 300 Z" fill="none" stroke="#2c160b" stroke-width="7"/>
<path d="M348 26 L584 26 L574 40 L358 40 Z" fill="#c07f4c" opacity="0.24"/>
<path d="M584 26 L584 300 L574 286 L574 40 Z" fill="#180b05" opacity="0.55"/>
<rect x="364" y="46" width="204" height="234" fill="#5c3018" opacity="0.42"/>
<!-- the kick rail and the threshold -->
<rect x="0" y="308" width="640" height="20" fill="#2e1a0d"/>
<rect x="0" y="308" width="640" height="6" fill="#a9713f" opacity="0.3"/>
<rect x="0" y="330" width="640" height="24" fill="url(#ev4-voice-brass)"/>
<rect x="0" y="332" width="640" height="6" fill="#fff3c0" opacity="0.4"/>
<rect x="0" y="348" width="640" height="6" fill="#2b2007" opacity="0.6"/>
<g opacity="0.25" stroke="#2b2007" stroke-width="1" fill="none">
  <path d="M60 332 L60 352"/><path d="M180 332 L180 352"/><path d="M300 332 L300 352"/>
  <path d="M420 332 L420 352"/><path d="M540 332 L540 352"/>
</g>
<!-- knuckle marks: where thirty years of knocking has taken off the varnish -->
<g opacity="0.2" fill="#d8a068">
  <ellipse cx="160" cy="150" rx="30" ry="20"/><ellipse cx="196" cy="164" rx="18" ry="12"/>
</g>

<!-- the corridor carpet, and the tray standing where it was set down -->
<rect x="0" y="352" width="640" height="168" fill="url(#ev4-voice-floor)"/>
<g opacity="0.25" stroke="#6e5f42" stroke-width="1.4" fill="none">
  <path d="M0 386 Q 320 396 640 384"/><path d="M0 428 Q 320 440 640 426"/>
  <path d="M0 472 Q 320 486 640 470"/><path d="M0 512 Q 320 518 640 510"/>
</g>
<g opacity="0.16" stroke="#2a2416" stroke-width="2.4" fill="none">
  <path d="M110 352 L96 520"/><path d="M300 352 L294 520"/><path d="M500 352 L510 520"/>
</g>

<ellipse cx="322" cy="470" rx="212" ry="42" fill="#000" opacity="0.6" filter="url(#ev4-voice-soft)"/>
<ellipse cx="320" cy="446" rx="206" ry="56" fill="url(#ev4-voice-tray)"/>
<ellipse cx="320" cy="440" rx="206" ry="56" fill="url(#ev4-voice-tray)" opacity="0.9"/>
<ellipse cx="320" cy="440" rx="206" ry="56" fill="none" stroke="#f8fbfc" stroke-width="2.4" opacity="0.45"/>
<ellipse cx="320" cy="444" rx="172" ry="42" fill="#5d666c"/>
<ellipse cx="320" cy="442" rx="172" ry="42" fill="none" stroke="#20262a" stroke-width="1.8" opacity="0.6"/>
<path d="M164 424 Q 244 400 334 404" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.3"/>
<path d="M448 414 Q 486 434 470 462" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.2"/>
<g opacity="0.28" stroke="#e9f0f2" stroke-width="1.4" fill="none">
  <path d="M126 428 L152 402"/><path d="M488 402 L514 428"/>
</g>

<!-- the siphon: full, its charge never drawn -->
<ellipse cx="238" cy="428" rx="46" ry="14" fill="#000" opacity="0.4"/>
<path d="M198 420 Q 194 352 216 320 L262 320 Q 284 352 280 420 Q 240 436 198 420 Z" fill="url(#ev4-voice-siphon)"/>
<path d="M204 416 Q 200 356 220 328 L232 328 Q 214 358 216 418 Z" fill="#f2fbf6" opacity="0.45"/>
<path d="M272 418 Q 276 356 258 328 L250 328 Q 268 358 264 418 Z" fill="#0e1c17" opacity="0.4"/>
<path d="M200 386 Q 240 396 280 386" fill="none" stroke="#2b453c" stroke-width="2" opacity="0.4"/>
<g opacity="0.3" stroke="#b8dccd" stroke-width="1" fill="none">
  <path d="M206 400 Q 240 408 274 400"/><path d="M204 370 Q 240 380 276 370"/>
</g>
<rect x="212" y="292" width="54" height="30" rx="5" fill="url(#ev4-voice-brass)" stroke="#2d2109" stroke-width="1.6"/>
<rect x="216" y="296" width="46" height="8" rx="3" fill="#fff3c0" opacity="0.45"/>
<path d="M266 300 L308 306 L312 318 L266 312 Z" fill="url(#ev4-voice-brass)" stroke="#2d2109" stroke-width="1.4"/>
<path d="M268 302 L306 308 L306 311 L268 305 Z" fill="#fff3c0" opacity="0.5"/>
<rect x="222" y="272" width="34" height="22" rx="6" fill="url(#ev4-voice-brass)" stroke="#2d2109" stroke-width="1.6"/>
<rect x="226" y="276" width="26" height="7" rx="3" fill="#fff8d4" opacity="0.55"/>
<ellipse cx="239" cy="270" rx="19" ry="7" fill="url(#ev4-voice-brass)" stroke="#2d2109" stroke-width="1.4"/>
<ellipse cx="234" cy="268" rx="7" ry="3" fill="#fff8d4" opacity="0.6"/>

<!-- the glass: dry. Not a drop taken. -->
<ellipse cx="398" cy="440" rx="34" ry="11" fill="#000" opacity="0.35"/>
<path d="M370 434 L374 348 L424 348 L428 434 Q 400 446 370 434 Z" fill="url(#ev4-voice-glass)"/>
<ellipse cx="399" cy="348" rx="25" ry="8" fill="none" stroke="#f6faf9" stroke-width="2.6" opacity="0.6"/>
<ellipse cx="399" cy="436" rx="29" ry="9" fill="none" stroke="#dfe8e5" stroke-width="1.8" opacity="0.4"/>
<path d="M378 354 Q 374 396 378 430" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.3"/>
<path d="M420 356 Q 424 396 420 428" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.18"/>

<!-- the ice, melted hours ago to a cold ring of water on the tray -->
<ellipse cx="470" cy="452" rx="52" ry="17" fill="#93a0a6" opacity="0.5"/>
<ellipse cx="470" cy="450" rx="52" ry="17" fill="none" stroke="#e8eef0" stroke-width="1.8" opacity="0.55"/>
<ellipse cx="458" cy="446" rx="20" ry="6" fill="#ffffff" opacity="0.35"/>
<ellipse cx="486" cy="456" rx="14" ry="4" fill="#ffffff" opacity="0.2"/>
<path d="M424 456 Q 448 468 480 466" fill="none" stroke="#cfd8db" stroke-width="1.4" opacity="0.4"/>
<!-- tongs, laid down and never used -->
<path d="M120 452 Q 168 440 208 452 Q 172 460 120 452 Z" fill="#a8b0b5"/>
<path d="M120 452 Q 168 440 208 452" fill="none" stroke="#eef3f5" stroke-width="2" opacity="0.6"/>
<path d="M120 452 Q 160 466 206 460" fill="none" stroke="#7d868c" stroke-width="4" opacity="0.7"/>
<ellipse cx="118" cy="454" rx="7" ry="6" fill="#c3cacf" stroke="#5f676c" stroke-width="1"/>

<rect width="640" height="520" fill="url(#ev4-voice-vig)"/>
`,
  },

  /* 'THE ACCOUNTING': the last column, longhand on foolscap, the red pencil
     still lying across it where he put it down. */
  c4_accounting: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-acct-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2c2418"/><stop offset="0.6" stop-color="#150f09"/><stop offset="1" stop-color="#080604"/>
  </linearGradient>
  <linearGradient id="ev4-acct-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7c4a28"/><stop offset="0.4" stop-color="#54301a"/><stop offset="1" stop-color="#20110a"/>
  </linearGradient>
  <linearGradient id="ev4-acct-paper" x1="0.06" y1="0" x2="0.94" y2="1">
    <stop offset="0" stop-color="#fbf6e4"/><stop offset="0.24" stop-color="#f0e8d0"/>
    <stop offset="0.62" stop-color="#d6cbac"/><stop offset="1" stop-color="#a99d80"/>
  </linearGradient>
  <linearGradient id="ev4-acct-under" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e5dcc0"/><stop offset="1" stop-color="#9c9174"/>
  </linearGradient>
  <linearGradient id="ev4-acct-pencil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d0554a"/><stop offset="0.3" stop-color="#a5322a"/>
    <stop offset="0.72" stop-color="#6f1d18"/><stop offset="1" stop-color="#3d0f0c"/>
  </linearGradient>
  <filter id="ev4-acct-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-acct-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-acct-bg)"/>
<rect width="640" height="520" fill="url(#ev4-acct-desk)" opacity="0.9"/>
<g opacity="0.24" stroke="#a3623a" stroke-width="1.5" fill="none">
  <path d="M0 40 Q 320 24 640 44"/><path d="M0 130 Q 320 112 640 132"/><path d="M0 236 Q 320 218 640 240"/>
  <path d="M0 350 Q 320 330 640 352"/><path d="M0 460 Q 320 440 640 462"/>
</g>
<g opacity="0.18" stroke="#22120a" stroke-width="3" fill="none">
  <path d="M0 88 Q 320 70 640 92"/><path d="M0 300 Q 320 280 640 302"/>
</g>

<!-- the sheet under it, and the shadow the top sheet throws -->
<path d="M62 96 L556 62 L588 466 L92 494 Z" fill="#000" opacity="0.5" filter="url(#ev4-acct-soft)"/>
<path d="M74 76 L560 44 L580 452 L96 480 Z" fill="url(#ev4-acct-under)"/>
<path d="M54 88 L546 54 L570 462 L80 492 Z" fill="url(#ev4-acct-paper)"/>
<path d="M54 88 L546 54 L548 90 L56 124 Z" fill="#ffffff" opacity="0.35"/>
<path d="M540 400 L570 462 L80 492 L72 452 Z" fill="#8e8368" opacity="0.28"/>
<!-- a crease where it was folded into a pocket -->
<path d="M300 70 L322 478" fill="none" stroke="#b6a988" stroke-width="2.6" opacity="0.5"/>
<path d="M304 70 L326 478" fill="none" stroke="#fffbee" stroke-width="1.4" opacity="0.55"/>

<!-- the heading: three heavy blocked strokes, ruled twice underneath -->
<g stroke="#1e1a14" stroke-linecap="round" fill="none">
  <path d="M92 128 L206 120" stroke-width="9"/>
  <path d="M226 118 L318 111" stroke-width="9"/>
  <path d="M340 110 L470 101" stroke-width="9"/>
</g>
<path d="M88 148 L500 118" fill="none" stroke="#2a241b" stroke-width="2.6"/>
<path d="M88 156 L500 126" fill="none" stroke="#2a241b" stroke-width="1.6"/>
<!-- a subheading in a lighter hand -->
<g stroke="#2a2419" stroke-linecap="round" fill="none" opacity="0.9">
  <path d="M92 182 q 22 -8 42 -1 q 26 8 50 -3 q 22 -8 40 0" stroke-width="3.4"/>
  <path d="M234 176 q 26 -8 50 -1 q 24 8 46 -4" stroke-width="3.4"/>
</g>

<!-- the body: line after line of longhand, ranged left, ragged right -->
<g stroke="#211c14" stroke-width="2.6" stroke-linecap="round" fill="none" opacity="0.88">
  <path d="M90 218 q 20 -9 36 -2 q 20 9 40 0 q 22 -9 42 -1 q 24 9 46 -2 q 20 -8 38 -1 q 22 8 44 -2 q 20 -8 36 -1 q 20 8 40 -2"/>
  <path d="M90 250 q 22 -9 40 -1 q 22 9 44 -1 q 20 -8 38 0 q 24 9 46 -2 q 22 -8 40 -1 q 24 9 48 -2 q 20 -8 36 0"/>
  <path d="M90 282 q 20 -9 38 -1 q 24 9 46 -1 q 22 -8 40 0 q 20 8 40 -2 q 24 -8 44 0 q 22 8 42 -2"/>
  <path d="M90 314 q 24 -9 44 -1 q 20 8 40 -1 q 24 -8 44 0 q 22 9 44 -2 q 20 -8 38 0 q 22 8 44 -2 q 22 -8 40 0"/>
  <path d="M90 346 q 20 -9 38 -1 q 22 9 42 -1 q 24 -8 44 0 q 20 8 40 -2 q 24 -8 46 0"/>
  <path d="M90 378 q 22 -9 42 -1 q 22 8 42 -1 q 22 -8 42 0 q 24 9 46 -2 q 20 -8 38 0 q 22 8 42 -2 q 20 -8 38 0"/>
  <path d="M90 410 q 20 -9 38 -1 q 24 9 44 -1 q 20 -8 40 0 q 22 8 42 -2"/>
</g>
<!-- the list: a hanging indent, each entry ruled off, one struck through -->
<g stroke="#211c14" stroke-width="2.4" stroke-linecap="round" fill="none" opacity="0.8">
  <path d="M120 440 q 20 -8 36 -1 q 20 8 38 -1 q 20 -8 38 0"/>
  <path d="M120 462 q 22 -8 40 -1 q 20 8 38 -1"/>
</g>
<g stroke="#2b2419" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M96 428 L520 400"/><path d="M96 452 L520 424"/>
</g>

<!-- the red pencil, lying across the sheet where a dying man set it down -->
<path d="M182 452 Q 340 424 502 388 L520 424 Q 356 462 196 490 Z" fill="#000" opacity="0.42" filter="url(#ev4-acct-soft)"/>
<path d="M168 424 L508 348 L516 380 L176 456 Z" fill="url(#ev4-acct-pencil)"/>
<path d="M168 424 L508 348 L510 358 L170 434 Z" fill="#f3958a" opacity="0.5"/>
<path d="M174 448 L514 372 L516 380 L176 456 Z" fill="#2c0a08" opacity="0.6"/>
<g opacity="0.35" stroke="#f3a196" stroke-width="1" fill="none">
  <path d="M172 436 L512 360"/>
</g>
<path d="M508 348 L516 380 L556 372 L544 340 Z" fill="#c9a878"/>
<path d="M508 348 L544 340 L546 348 L510 356 Z" fill="#efd7ad" opacity="0.6"/>
<path d="M544 340 L556 372 L578 368 L562 336 Z" fill="#8f7250"/>
<path d="M562 336 L578 368 L590 366 L572 334 Z" fill="#241c14"/>
<path d="M572 334 L590 366 L596 364 L578 332 Z" fill="#0e0b08"/>
<!-- shavings, from a pencil sharpened on this desk -->
<g fill="#c9a878" opacity="0.6">
  <path d="M600 400 q 16 -8 22 4 q -12 10 -22 -4 Z"/>
  <path d="M574 424 q 14 -8 20 4 q -10 10 -20 -4 Z"/>
</g>
<g fill="#8f2b22" opacity="0.55">
  <circle cx="606" cy="398" r="2.4"/><circle cx="580" cy="424" r="2"/><circle cx="618" cy="420" r="1.6"/>
</g>

<rect width="640" height="520" fill="url(#ev4-acct-vig)"/>
`,
  },

  /* ELEVEN YEARS OF CARBONS: banded stacks of flimsies in compartment 8,
     typed here, with only the lightest of red-pencil passes over them. */
  c4_ghostwriter: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-ghost-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2419"/><stop offset="0.6" stop-color="#14100a"/><stop offset="1" stop-color="#080605"/>
  </linearGradient>
  <linearGradient id="ev4-ghost-shelf" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#7a4a2a"/><stop offset="0.4" stop-color="#52301b"/><stop offset="1" stop-color="#1d1009"/>
  </linearGradient>
  <linearGradient id="ev4-ghost-flimsy" x1="0.05" y1="0" x2="0.95" y2="0.8">
    <stop offset="0" stop-color="#f4ecd6"/><stop offset="0.3" stop-color="#e6dbbe"/>
    <stop offset="0.7" stop-color="#c4b795"/><stop offset="1" stop-color="#948a6d"/>
  </linearGradient>
  <linearGradient id="ev4-ghost-edge" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#efe6cd"/><stop offset="0.5" stop-color="#c9bd9c"/><stop offset="1" stop-color="#8c8266"/>
  </linearGradient>
  <linearGradient id="ev4-ghost-band" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#c8a86a"/><stop offset="0.4" stop-color="#9c7f47"/><stop offset="1" stop-color="#5c4a26"/>
  </linearGradient>
  <filter id="ev4-ghost-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-ghost-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-ghost-bg)"/>
<path d="M0 316 L640 288 L640 520 L0 520 Z" fill="url(#ev4-ghost-shelf)"/>
<path d="M0 316 L640 288 L640 304 L0 332 Z" fill="#c78a52" opacity="0.35"/>
<g opacity="0.24" stroke="#96562f" stroke-width="1.4" fill="none">
  <path d="M0 372 Q 320 352 640 336"/><path d="M0 436 Q 320 412 640 394"/><path d="M0 498 Q 320 472 640 452"/>
</g>
<path d="M0 0 L640 0 L640 296 L0 320 Z" fill="#150e08" opacity="0.6"/>

<!-- the back stack, in shadow: years of it -->
<path d="M338 152 L604 122 L616 258 L350 292 Z" fill="#000" opacity="0.5" filter="url(#ev4-ghost-soft)"/>
<path d="M330 150 L596 120 L604 246 L338 280 Z" fill="url(#ev4-ghost-flimsy)" opacity="0.8"/>
<g opacity="0.5">
  <path d="M330 150 L596 120 L596 128 L330 158 Z" fill="#fffbec"/>
  <path d="M334 262 L600 232 L604 246 L338 280 Z" fill="#5f5741"/>
</g>
<g stroke="#847b60" stroke-width="1" opacity="0.55" fill="none">
  <path d="M332 168 L598 138"/><path d="M333 186 L599 156"/><path d="M334 204 L600 174"/>
  <path d="M335 222 L601 192"/><path d="M336 240 L602 210"/><path d="M337 258 L603 228"/>
</g>

<!-- the near stack: a banded brick of tissue paper, edge-on and face-on -->
<path d="M28 300 L316 268 L344 448 L58 486 Z" fill="#000" opacity="0.55" filter="url(#ev4-ghost-soft)"/>
<path d="M24 208 L308 174 L330 302 L46 340 Z" fill="url(#ev4-ghost-flimsy)"/>
<path d="M24 208 L308 174 L310 186 L26 220 Z" fill="#fffdf0" opacity="0.55"/>
<!-- the edge of the stack: hundreds of leaves, each catching a hair of light -->
<path d="M46 340 L330 302 L338 456 L54 494 Z" fill="url(#ev4-ghost-edge)"/>
<g stroke="#fdf7e4" stroke-width="1.1" opacity="0.55" fill="none">
  <path d="M48 352 L332 314"/><path d="M49 366 L333 328"/><path d="M50 380 L334 342"/>
  <path d="M51 394 L335 356"/><path d="M52 408 L336 370"/><path d="M53 422 L337 384"/>
  <path d="M54 436 L338 398"/><path d="M55 450 L338 412"/><path d="M56 464 L338 426"/>
  <path d="M57 478 L338 440"/>
</g>
<g stroke="#6f6750" stroke-width="1.5" opacity="0.5" fill="none">
  <path d="M48 358 L332 320"/><path d="M50 386 L334 348"/><path d="M52 414 L336 376"/>
  <path d="M54 442 L338 404"/><path d="M56 470 L338 432"/>
</g>

<!-- the typing on the top flimsy: ranks of struck characters, no words -->
<g fill="#4b4438" opacity="0.85">
  <rect x="52" y="228" width="34" height="5" rx="1.4" transform="rotate(-6.6 52 228)"/>
  <rect x="94" y="223" width="52" height="5" rx="1.4" transform="rotate(-6.6 94 223)"/>
  <rect x="154" y="216" width="28" height="5" rx="1.4" transform="rotate(-6.6 154 216)"/>
  <rect x="190" y="212" width="46" height="5" rx="1.4" transform="rotate(-6.6 190 212)"/>
  <rect x="244" y="205" width="36" height="5" rx="1.4" transform="rotate(-6.6 244 205)"/>
  <rect x="56" y="246" width="46" height="5" rx="1.4" transform="rotate(-6.6 56 246)"/>
  <rect x="110" y="240" width="30" height="5" rx="1.4" transform="rotate(-6.6 110 240)"/>
  <rect x="148" y="235" width="56" height="5" rx="1.4" transform="rotate(-6.6 148 235)"/>
  <rect x="212" y="228" width="34" height="5" rx="1.4" transform="rotate(-6.6 212 228)"/>
  <rect x="254" y="223" width="42" height="5" rx="1.4" transform="rotate(-6.6 254 223)"/>
  <rect x="58" y="264" width="38" height="5" rx="1.4" transform="rotate(-6.6 58 264)"/>
  <rect x="104" y="258" width="48" height="5" rx="1.4" transform="rotate(-6.6 104 258)"/>
  <rect x="160" y="252" width="26" height="5" rx="1.4" transform="rotate(-6.6 160 252)"/>
  <rect x="194" y="248" width="54" height="5" rx="1.4" transform="rotate(-6.6 194 248)"/>
  <rect x="62" y="282" width="52" height="5" rx="1.4" transform="rotate(-6.6 62 282)"/>
  <rect x="122" y="275" width="34" height="5" rx="1.4" transform="rotate(-6.6 122 275)"/>
  <rect x="164" y="271" width="44" height="5" rx="1.4" transform="rotate(-6.6 164 271)"/>
  <rect x="216" y="265" width="30" height="5" rx="1.4" transform="rotate(-6.6 216 265)"/>
  <rect x="254" y="260" width="40" height="5" rx="1.4" transform="rotate(-6.6 254 260)"/>
</g>
<!-- carbon, not ribbon: the strike is soft, grey-violet, and doubled -->
<g fill="#6b6478" opacity="0.35">
  <rect x="53" y="230" width="34" height="4" rx="1.4" transform="rotate(-6.6 53 230)"/>
  <rect x="149" y="237" width="56" height="4" rx="1.4" transform="rotate(-6.6 149 237)"/>
  <rect x="105" y="260" width="48" height="4" rx="1.4" transform="rotate(-6.6 105 260)"/>
  <rect x="63" y="284" width="52" height="4" rx="1.4" transform="rotate(-6.6 63 284)"/>
</g>
<!-- the red pencil's lightest possible pass: two marks in a whole column -->
<path d="M148 244 q 26 -6 48 -3" fill="none" stroke="#a5322a" stroke-width="2.6" opacity="0.8"/>
<path d="M240 216 q 14 8 2 16" fill="none" stroke="#a5322a" stroke-width="2.2" opacity="0.75"/>

<!-- the paper band around the stack, and the knot of string over it -->
<path d="M120 194 L172 188 L196 470 L142 480 Z" fill="url(#ev4-ghost-band)"/>
<path d="M120 194 L172 188 L173 200 L121 206 Z" fill="#e8cd94" opacity="0.5"/>
<path d="M186 400 L196 470 L142 480 L134 410 Z" fill="#4d3d1f" opacity="0.4"/>
<path d="M120 340 L176 332" fill="none" stroke="#3d3116" stroke-width="1.6" opacity="0.5"/>
<g stroke="#d8c69a" stroke-width="3" opacity="0.8" fill="none">
  <path d="M126 210 L180 340"/>
</g>
<g stroke="#6d5a2e" stroke-width="4" opacity="0.85" fill="none">
  <path d="M116 268 Q 150 258 200 256"/>
  <path d="M120 300 Q 152 292 202 290"/>
</g>
<g stroke="#e2cf9e" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M118 265 Q 152 255 200 253"/><path d="M122 297 Q 154 289 202 287"/>
</g>

<!-- a single flimsy slid loose from under the band -->
<path d="M354 320 L620 292 L634 402 L368 434 Z" fill="url(#ev4-ghost-flimsy)"/>
<path d="M354 320 L620 292 L621 302 L355 330 Z" fill="#fffdf0" opacity="0.5"/>
<g fill="#4b4438" opacity="0.7">
  <rect x="374" y="340" width="42" height="4.4" rx="1.2" transform="rotate(-6 374 340)"/>
  <rect x="424" y="334" width="60" height="4.4" rx="1.2" transform="rotate(-6 424 334)"/>
  <rect x="492" y="327" width="32" height="4.4" rx="1.2" transform="rotate(-6 492 327)"/>
  <rect x="532" y="323" width="52" height="4.4" rx="1.2" transform="rotate(-6 532 323)"/>
  <rect x="378" y="360" width="54" height="4.4" rx="1.2" transform="rotate(-6 378 360)"/>
  <rect x="440" y="353" width="36" height="4.4" rx="1.2" transform="rotate(-6 440 353)"/>
  <rect x="484" y="348" width="48" height="4.4" rx="1.2" transform="rotate(-6 484 348)"/>
  <rect x="382" y="380" width="38" height="4.4" rx="1.2" transform="rotate(-6 382 380)"/>
  <rect x="428" y="375" width="56" height="4.4" rx="1.2" transform="rotate(-6 428 375)"/>
  <rect x="492" y="368" width="34" height="4.4" rx="1.2" transform="rotate(-6 492 368)"/>
  <rect x="386" y="400" width="46" height="4.4" rx="1.2" transform="rotate(-6 386 400)"/>
  <rect x="440" y="394" width="42" height="4.4" rx="1.2" transform="rotate(-6 440 394)"/>
</g>

<rect width="640" height="520" fill="url(#ev4-ghost-vig)"/>
`,
  },

  /* THE NINE O'CLOCK ORDER: the porter's call book open on the pantry
     counter — standing orders in copperplate, ruled in columns. */
  c4_nineorder: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-call-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2318"/><stop offset="0.6" stop-color="#140f09"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-call-counter" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#6f4b2c"/><stop offset="0.4" stop-color="#4b301b"/><stop offset="1" stop-color="#1c1108"/>
  </linearGradient>
  <linearGradient id="ev4-call-page" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#fbf5e3"/><stop offset="0.3" stop-color="#efe6cd"/>
    <stop offset="0.7" stop-color="#cfc2a2"/><stop offset="1" stop-color="#a1947a"/>
  </linearGradient>
  <linearGradient id="ev4-call-cloth" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#4a3320"/><stop offset="0.4" stop-color="#33220f"/><stop offset="1" stop-color="#180f06"/>
  </linearGradient>
  <linearGradient id="ev4-call-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.22" stop-color="#d5b75f"/>
    <stop offset="0.42" stop-color="#faeeb9"/><stop offset="0.66" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <filter id="ev4-call-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-call-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-call-bg)"/>
<rect width="640" height="520" fill="url(#ev4-call-counter)" opacity="0.92"/>
<g opacity="0.2" stroke="#9a5f34" stroke-width="1.5" fill="none">
  <path d="M0 60 Q 320 42 640 62"/><path d="M0 180 Q 320 160 640 182"/>
  <path d="M0 400 Q 320 378 640 402"/><path d="M0 490 Q 320 468 640 492"/>
</g>
<!-- the pantry's brass counter lip, at the bottom of frame -->
<rect x="0" y="470" width="640" height="18" fill="url(#ev4-call-brass)"/>
<rect x="0" y="472" width="640" height="5" fill="#fff3c0" opacity="0.4"/>
<rect x="0" y="484" width="640" height="6" fill="#2b2007" opacity="0.6"/>
<rect x="0" y="490" width="640" height="30" fill="#150d06"/>

<!-- the book: cloth boards, opened flat, spine toward us -->
<path d="M44 128 Q 320 92 604 132 L620 452 Q 320 496 32 448 Z" fill="#000" opacity="0.55" filter="url(#ev4-call-soft)"/>
<path d="M34 120 Q 320 82 600 122 L612 438 Q 320 480 26 434 Z" fill="url(#ev4-call-cloth)"/>
<path d="M34 120 Q 320 82 600 122 L601 136 Q 320 96 35 134 Z" fill="#7c5a35" opacity="0.4"/>
<!-- left page and right page, with the gutter between -->
<path d="M52 138 Q 190 116 312 128 L318 434 Q 190 452 46 420 Z" fill="url(#ev4-call-page)"/>
<path d="M328 128 Q 452 116 588 138 L594 420 Q 452 452 322 434 Z" fill="url(#ev4-call-page)"/>
<path d="M52 138 Q 190 116 312 128 L312 146 Q 190 134 53 156 Z" fill="#fffdf2" opacity="0.5"/>
<path d="M328 128 Q 452 116 588 138 L588 156 Q 452 134 328 146 Z" fill="#fffdf2" opacity="0.42"/>
<path d="M312 128 Q 320 280 318 434 Q 320 280 322 128 Z" fill="#6a5c42"/>
<path d="M300 130 Q 310 280 306 434 L318 434 Q 320 280 312 128 Z" fill="#8f8267" opacity="0.5"/>
<path d="M326 128 Q 334 280 330 434 L322 434 Q 320 280 322 128 Z" fill="#8f8267" opacity="0.4"/>
<!-- the page block's edges, showing under the open leaves -->
<g stroke="#b6a988" stroke-width="1" opacity="0.6" fill="none">
  <path d="M48 424 Q 190 456 316 438"/><path d="M46 430 Q 190 462 316 444"/>
  <path d="M324 438 Q 452 456 592 424"/><path d="M324 444 Q 452 462 594 430"/>
</g>

<!-- the ruling: two columns on each page, and a heading rule -->
<g stroke="#9aa4b4" stroke-width="1.1" opacity="0.65" fill="none">
  <path d="M62 186 Q 190 166 306 178"/><path d="M62 212 Q 190 192 306 204"/>
  <path d="M62 238 Q 190 218 306 230"/><path d="M62 264 Q 190 244 306 256"/>
  <path d="M62 290 Q 190 270 306 282"/><path d="M62 316 Q 190 296 306 308"/>
  <path d="M62 342 Q 190 322 306 334"/><path d="M62 368 Q 190 348 306 360"/>
  <path d="M62 394 Q 190 374 306 386"/>
  <path d="M334 178 Q 452 166 582 186"/><path d="M334 204 Q 452 192 582 212"/>
  <path d="M334 230 Q 452 218 582 238"/><path d="M334 256 Q 452 244 582 264"/>
  <path d="M334 282 Q 452 270 582 290"/><path d="M334 308 Q 452 296 582 316"/>
  <path d="M334 334 Q 452 322 582 342"/><path d="M334 360 Q 452 348 582 368"/>
  <path d="M334 386 Q 452 374 582 394"/>
</g>
<g stroke="#b6553f" stroke-width="1.4" opacity="0.55" fill="none">
  <path d="M104 148 L110 410"/><path d="M368 150 L372 402"/><path d="M492 156 L498 400"/>
</g>
<path d="M60 166 Q 190 146 306 158" fill="none" stroke="#3b3428" stroke-width="2.2" opacity="0.7"/>
<path d="M334 158 Q 452 146 582 166" fill="none" stroke="#3b3428" stroke-width="2.2" opacity="0.7"/>

<!-- copperplate: looping strokes in the wide column, short marks in the narrow -->
<g stroke="#232028" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.85">
  <path d="M118 202 q 18 -10 32 -3 q 18 9 34 -1 q 16 -8 30 0 q 18 8 34 -2 q 16 -8 30 -1"/>
  <path d="M118 228 q 20 -10 36 -2 q 18 8 34 -2 q 18 -8 34 0 q 16 8 32 -2"/>
  <path d="M118 254 q 18 -10 34 -2 q 18 9 32 -1 q 18 -8 34 0 q 18 8 34 -2 q 14 -7 26 -1"/>
  <path d="M118 280 q 20 -10 36 -2 q 16 8 32 -2 q 18 -8 34 0"/>
  <path d="M118 306 q 18 -10 34 -2 q 18 8 34 -2 q 16 -8 30 0 q 18 8 34 -2"/>
  <path d="M118 332 q 20 -10 36 -2 q 18 9 34 -1 q 16 -8 30 0"/>
  <path d="M118 358 q 18 -10 34 -2 q 18 8 34 -2 q 18 -8 34 0 q 16 8 30 -2"/>
  <path d="M118 384 q 20 -10 36 -2 q 16 8 32 -2"/>
</g>
<g stroke="#232028" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.8">
  <path d="M66 196 q 12 -8 24 -2"/><path d="M66 222 q 14 -8 26 -1"/><path d="M66 248 q 12 -8 24 -2"/>
  <path d="M66 274 q 14 -8 26 -1"/><path d="M66 300 q 12 -8 24 -2"/><path d="M66 326 q 14 -8 26 -1"/>
  <path d="M66 352 q 12 -8 24 -2"/><path d="M66 378 q 14 -8 26 -1"/>
</g>
<!-- the right page: the standing orders, two of them ruled heavily around -->
<g stroke="#232028" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.85">
  <path d="M382 196 q 18 -8 34 -1 q 18 8 34 -2 q 16 -7 30 1 q 18 7 34 -2 q 16 -7 30 1"/>
  <path d="M382 222 q 20 -8 36 -1 q 18 8 34 -2 q 18 -7 34 1"/>
  <path d="M382 274 q 18 -8 34 -1 q 18 8 34 -2 q 16 -7 30 1 q 18 7 34 -2"/>
  <path d="M382 300 q 20 -8 36 -1 q 18 8 34 -2 q 18 -7 34 1 q 16 7 30 -2"/>
  <path d="M382 352 q 18 -8 34 -1 q 18 8 34 -2"/>
  <path d="M382 378 q 20 -8 36 -1 q 18 8 34 -2 q 16 -7 30 1"/>
</g>
<g stroke="#344056" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.8">
  <path d="M340 190 q 12 -7 24 -1"/><path d="M340 216 q 14 -7 26 0"/>
  <path d="M340 268 q 12 -7 24 -1"/><path d="M340 294 q 14 -7 26 0"/>
  <path d="M340 346 q 12 -7 24 -1"/><path d="M340 372 q 14 -7 26 0"/>
</g>
<!-- the entry that mattered, boxed twice in the same red pencil -->
<path d="M336 258 L586 274 L584 320 L334 306 Z" fill="none" stroke="#a5322a" stroke-width="3" opacity="0.85"/>
<path d="M340 264 L582 280 L580 314 L338 300 Z" fill="none" stroke="#a5322a" stroke-width="1.6" opacity="0.6"/>
<path d="M596 282 q -18 12 -6 26" fill="none" stroke="#a5322a" stroke-width="3" opacity="0.8"/>

<!-- the pencil in the gutter, and the porter's cloth folded beside -->
<path d="M228 452 L470 434 L472 448 L230 466 Z" fill="#000" opacity="0.4" filter="url(#ev4-call-soft)"/>
<path d="M220 436 L448 418 L450 432 L222 450 Z" fill="#6b6a58"/>
<path d="M220 436 L448 418 L448 423 L220 441 Z" fill="#b6b5a0" opacity="0.6"/>
<path d="M448 418 L450 432 L474 430 L470 416 Z" fill="#c9a878"/>
<path d="M470 416 L474 430 L488 428 L482 414 Z" fill="#2a2118"/>
<ellipse cx="219" cy="443" rx="5" ry="8" fill="#9c9a86"/>
<path d="M496 388 Q 570 366 618 380 Q 596 414 520 424 Z" fill="#ddd6c2"/>
<path d="M496 388 Q 570 366 618 380 Q 570 386 520 400 Z" fill="#f6f2e4" opacity="0.7"/>
<path d="M508 396 Q 560 382 608 384" fill="none" stroke="#a9a28e" stroke-width="1.2" opacity="0.6"/>

<rect width="640" height="520" fill="url(#ev4-call-vig)"/>
`,
  },

  /* THE SYNDICATE WIRE: decoded, initialled, and a cashier's draft for the
     sum, unsigned and undelivered, in the bottom of a briefcase. */
  c4_buyout: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-wire-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2117"/><stop offset="0.6" stop-color="#130f09"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-wire-case" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6a4526"/><stop offset="0.3" stop-color="#4a2e18"/>
    <stop offset="0.7" stop-color="#2f1d0f"/><stop offset="1" stop-color="#160d07"/>
  </linearGradient>
  <linearGradient id="ev4-wire-form" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#f7f0dd"/><stop offset="0.28" stop-color="#e9e0c6"/>
    <stop offset="0.68" stop-color="#c9bd9c"/><stop offset="1" stop-color="#9c9174"/>
  </linearGradient>
  <linearGradient id="ev4-wire-tape" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fdfaf0"/><stop offset="0.55" stop-color="#e8e0cb"/><stop offset="1" stop-color="#b7ad91"/>
  </linearGradient>
  <linearGradient id="ev4-wire-draft" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#e6f0e6"/><stop offset="0.3" stop-color="#d2e0d2"/>
    <stop offset="0.7" stop-color="#a8b8a8"/><stop offset="1" stop-color="#7c8a7c"/>
  </linearGradient>
  <filter id="ev4-wire-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-wire-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-wire-bg)"/>

<!-- the open briefcase: pebbled leather, a gusset, the lining below -->
<rect width="640" height="520" fill="url(#ev4-wire-case)"/>
<path d="M0 0 L640 0 L640 84 Q 320 108 0 76 Z" fill="#1a1008"/>
<path d="M0 76 Q 320 108 640 84 L640 100 Q 320 124 0 92 Z" fill="#7a5330" opacity="0.35"/>
<g opacity="0.22" fill="#8a6038">
  <circle cx="60" cy="140" r="2.4"/><circle cx="140" cy="180" r="2"/><circle cx="230" cy="146" r="2.6"/>
  <circle cx="330" cy="192" r="2.2"/><circle cx="430" cy="150" r="2.4"/><circle cx="530" cy="190" r="2"/>
  <circle cx="90" cy="420" r="2.4"/><circle cx="210" cy="466" r="2.2"/><circle cx="420" cy="470" r="2.6"/>
  <circle cx="560" cy="430" r="2"/><circle cx="600" cy="330" r="2.2"/><circle cx="30" cy="300" r="2.4"/>
</g>
<path d="M0 440 Q 320 476 640 436 L640 520 L0 520 Z" fill="#150d06"/>
<path d="M0 440 Q 320 476 640 436 L640 448 Q 320 488 0 452 Z" fill="#7a5330" opacity="0.28"/>

<!-- the cashier's draft, underneath: engraved guilloche, unsigned -->
<path d="M258 262 L616 226 L634 400 L276 442 Z" fill="#000" opacity="0.5" filter="url(#ev4-wire-soft)"/>
<path d="M250 252 L608 216 L622 384 L264 426 Z" fill="url(#ev4-wire-draft)"/>
<path d="M250 252 L608 216 L609 228 L251 264 Z" fill="#ffffff" opacity="0.5"/>
<path d="M262 266 L596 232 L608 372 L276 412 Z" fill="none" stroke="#5e7060" stroke-width="2.4"/>
<path d="M270 274 L588 241 L598 364 L284 402 Z" fill="none" stroke="#5e7060" stroke-width="1"/>
<g stroke="#7d9080" stroke-width="0.8" opacity="0.6" fill="none">
  <path d="M276 288 q 24 -10 48 -2 q 24 8 48 -3 q 24 -10 48 -2 q 24 8 48 -3 q 24 -10 48 -2 q 24 8 46 -3"/>
  <path d="M280 320 q 24 -10 48 -2 q 24 8 48 -3 q 24 -10 48 -2 q 24 8 48 -3 q 24 -10 48 -2 q 24 8 46 -3"/>
  <path d="M284 352 q 24 -10 48 -2 q 24 8 48 -3 q 24 -10 48 -2 q 24 8 48 -3 q 24 -10 48 -2"/>
</g>
<!-- the amount panel, and the signature line that never got a signature -->
<rect x="470" y="252" width="112" height="40" rx="3" fill="#f2f7f2" opacity="0.6" transform="rotate(-5.5 470 252)"/>
<rect x="470" y="252" width="112" height="40" rx="3" fill="none" stroke="#4f6252" stroke-width="1.6" transform="rotate(-5.5 470 252)"/>
<g fill="#2f3f33" opacity="0.85">
  <rect x="484" y="266" width="18" height="9" rx="1.6" transform="rotate(-5.5 484 266)"/>
  <rect x="508" y="264" width="14" height="9" rx="1.6" transform="rotate(-5.5 508 264)"/>
  <rect x="528" y="262" width="18" height="9" rx="1.6" transform="rotate(-5.5 528 262)"/>
  <rect x="552" y="260" width="14" height="9" rx="1.6" transform="rotate(-5.5 552 260)"/>
</g>
<path d="M292 372 L470 353" fill="none" stroke="#3f5044" stroke-width="1.6"/>
<g stroke="#3f5044" stroke-width="2" opacity="0.7" fill="none">
  <path d="M292 344 q 20 -8 38 -1 q 20 8 38 -2 q 18 -7 34 0"/>
  <path d="M292 322 q 22 -8 40 -1 q 18 7 34 -2"/>
</g>

<!-- THE WIRE: a flimsy telegram form, pasted with strips of tape -->
<path d="M24 132 L400 96 L424 336 L46 380 Z" fill="#000" opacity="0.5" filter="url(#ev4-wire-soft)"/>
<path d="M18 120 L394 84 L414 320 L38 364 Z" fill="url(#ev4-wire-form)"/>
<path d="M18 120 L394 84 L395 98 L19 134 Z" fill="#ffffff" opacity="0.5"/>
<path d="M380 296 L414 320 L38 364 L34 336 Z" fill="#8a8067" opacity="0.25"/>
<!-- the printed rules of the form: header block and boxes -->
<path d="M32 142 L380 108" fill="none" stroke="#8d5040" stroke-width="3.4" opacity="0.7"/>
<path d="M32 152 L380 118" fill="none" stroke="#8d5040" stroke-width="1.4" opacity="0.55"/>
<path d="M32 176 L380 142" fill="none" stroke="#9c9077" stroke-width="1.2" opacity="0.7"/>
<g stroke="#9c9077" stroke-width="1" opacity="0.6" fill="none">
  <path d="M120 108 L124 176"/><path d="M240 97 L244 165"/><path d="M320 89 L324 157"/>
</g>
<g fill="#8d5040" opacity="0.55">
  <rect x="38" y="160" width="40" height="6" rx="1.6" transform="rotate(-5.5 38 160)"/>
  <rect x="130" y="152" width="52" height="6" rx="1.6" transform="rotate(-5.5 130 152)"/>
  <rect x="250" y="140" width="34" height="6" rx="1.6" transform="rotate(-5.5 250 140)"/>
  <rect x="330" y="132" width="30" height="6" rx="1.6" transform="rotate(-5.5 330 132)"/>
</g>
<!-- the pasted tape: four strips of ticker tape, gummed on crooked -->
<g>
  <path d="M34 196 L378 164 L380 190 L36 222 Z" fill="url(#ev4-wire-tape)" stroke="#a89d82" stroke-width="0.8"/>
  <path d="M36 232 L376 200 L378 226 L38 258 Z" fill="url(#ev4-wire-tape)" stroke="#a89d82" stroke-width="0.8"/>
  <path d="M38 268 L374 236 L376 262 L40 294 Z" fill="url(#ev4-wire-tape)" stroke="#a89d82" stroke-width="0.8"/>
  <path d="M40 304 L296 280 L298 306 L42 330 Z" fill="url(#ev4-wire-tape)" stroke="#a89d82" stroke-width="0.8"/>
</g>
<g fill="#3b3830" opacity="0.9">
  <rect x="46" y="203" width="30" height="7" rx="1.6" transform="rotate(-5.4 46 203)"/>
  <rect x="84" y="199" width="18" height="7" rx="1.6" transform="rotate(-5.4 84 199)"/>
  <rect x="110" y="197" width="44" height="7" rx="1.6" transform="rotate(-5.4 110 197)"/>
  <rect x="162" y="192" width="26" height="7" rx="1.6" transform="rotate(-5.4 162 192)"/>
  <rect x="196" y="189" width="52" height="7" rx="1.6" transform="rotate(-5.4 196 189)"/>
  <rect x="256" y="183" width="22" height="7" rx="1.6" transform="rotate(-5.4 256 183)"/>
  <rect x="286" y="181" width="38" height="7" rx="1.6" transform="rotate(-5.4 286 181)"/>
  <rect x="48" y="239" width="42" height="7" rx="1.6" transform="rotate(-5.4 48 239)"/>
  <rect x="98" y="235" width="24" height="7" rx="1.6" transform="rotate(-5.4 98 235)"/>
  <rect x="130" y="232" width="34" height="7" rx="1.6" transform="rotate(-5.4 130 232)"/>
  <rect x="172" y="228" width="46" height="7" rx="1.6" transform="rotate(-5.4 172 228)"/>
  <rect x="226" y="223" width="20" height="7" rx="1.6" transform="rotate(-5.4 226 223)"/>
  <rect x="254" y="221" width="56" height="7" rx="1.6" transform="rotate(-5.4 254 221)"/>
  <rect x="50" y="275" width="28" height="7" rx="1.6" transform="rotate(-5.4 50 275)"/>
  <rect x="86" y="272" width="50" height="7" rx="1.6" transform="rotate(-5.4 86 272)"/>
  <rect x="144" y="266" width="22" height="7" rx="1.6" transform="rotate(-5.4 144 266)"/>
  <rect x="174" y="264" width="36" height="7" rx="1.6" transform="rotate(-5.4 174 264)"/>
  <rect x="218" y="260" width="44" height="7" rx="1.6" transform="rotate(-5.4 218 260)"/>
  <rect x="270" y="255" width="26" height="7" rx="1.6" transform="rotate(-5.4 270 255)"/>
  <rect x="52" y="311" width="36" height="7" rx="1.6" transform="rotate(-5.4 52 311)"/>
  <rect x="96" y="307" width="46" height="7" rx="1.6" transform="rotate(-5.4 96 307)"/>
  <rect x="150" y="302" width="28" height="7" rx="1.6" transform="rotate(-5.4 150 302)"/>
  <rect x="186" y="299" width="60" height="7" rx="1.6" transform="rotate(-5.4 186 299)"/>
</g>
<!-- the initialling: two ink strokes and a date rule, in a hard blue hand -->
<g stroke="#1f3352" stroke-width="3.4" stroke-linecap="round" fill="none">
  <path d="M312 320 q 12 -22 20 -2 q 8 20 18 -6"/>
  <path d="M348 312 q 16 -20 22 0 q 4 16 -6 18"/>
</g>
<path d="M306 336 L382 328" fill="none" stroke="#1f3352" stroke-width="1.8" opacity="0.7"/>

<rect width="640" height="520" fill="url(#ev4-wire-vig)"/>
`,
  },

  /* THE TIMED BAR CHITS: the lounge steward's spike, every slip stamped with
     the minute it was poured. One of them is the first drink of a man's night. */
  c4_barchits: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-chit-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2015"/><stop offset="0.6" stop-color="#140e08"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-chit-bar" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#5e3a22"/><stop offset="0.35" stop-color="#3f2614"/><stop offset="1" stop-color="#170d06"/>
  </linearGradient>
  <linearGradient id="ev4-chit-paper" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#fbf6e6"/><stop offset="0.3" stop-color="#ece2c8"/>
    <stop offset="0.72" stop-color="#c8bb99"/><stop offset="1" stop-color="#9a8f72"/>
  </linearGradient>
  <linearGradient id="ev4-chit-steel" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e6e9ea"/><stop offset="0.3" stop-color="#a9aeb1"/>
    <stop offset="0.65" stop-color="#6d7275"/><stop offset="1" stop-color="#33383b"/>
  </linearGradient>
  <linearGradient id="ev4-chit-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.22" stop-color="#d5b75f"/>
    <stop offset="0.44" stop-color="#faeeb9"/><stop offset="0.68" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <filter id="ev4-chit-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-chit-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-chit-bg)"/>
<path d="M0 236 L640 208 L640 520 L0 520 Z" fill="url(#ev4-chit-bar)"/>
<path d="M0 236 L640 208 L640 224 L0 252 Z" fill="#b47a48" opacity="0.35"/>
<g opacity="0.2" stroke="#8e5530" stroke-width="1.4" fill="none">
  <path d="M0 300 Q 320 278 640 262"/><path d="M0 380 Q 320 354 640 334"/><path d="M0 466 Q 320 436 640 414"/>
</g>
<path d="M0 250 Q 220 300 640 264 L640 306 Q 240 344 0 292 Z" fill="#ffd9a4" opacity="0.08"/>
<!-- a ring where a glass stood on the bar all evening -->
<ellipse cx="536" cy="424" rx="58" ry="19" fill="none" stroke="#9c7a52" stroke-width="4" opacity="0.28"/>
<ellipse cx="536" cy="424" rx="58" ry="19" fill="#a98254" opacity="0.08"/>

<!-- the chits: a drift of small slips, each stamped and timed -->
<g>
  <path d="M64 200 L246 176 L262 306 L80 332 Z" fill="#000" opacity="0.45" filter="url(#ev4-chit-soft)"/>
  <path d="M52 188 L234 164 L248 292 L66 318 Z" fill="url(#ev4-chit-paper)"/>
  <path d="M52 188 L234 164 L235 176 L53 200 Z" fill="#fffdf2" opacity="0.5"/>
  <path d="M64 204 L222 183" fill="none" stroke="#9b7a4f" stroke-width="2.4" opacity="0.6"/>
  <g fill="#3f3a2e" opacity="0.85">
    <rect x="66" y="218" width="42" height="6" rx="1.6" transform="rotate(-7.5 66 218)"/>
    <rect x="118" y="211" width="26" height="6" rx="1.6" transform="rotate(-7.5 118 211)"/>
    <rect x="66" y="240" width="30" height="6" rx="1.6" transform="rotate(-7.5 66 240)"/>
    <rect x="106" y="235" width="48" height="6" rx="1.6" transform="rotate(-7.5 106 235)"/>
    <rect x="68" y="262" width="36" height="6" rx="1.6" transform="rotate(-7.5 68 262)"/>
  </g>
  <rect x="160" y="228" width="66" height="30" rx="3" fill="none" stroke="#2b4a72" stroke-width="2.6" opacity="0.75" transform="rotate(-7.5 160 228)"/>
  <g fill="#2b4a72" opacity="0.85">
    <rect x="168" y="238" width="14" height="9" rx="1.4" transform="rotate(-7.5 168 238)"/>
    <rect x="186" y="236" width="8" height="9" rx="1.4" transform="rotate(-7.5 186 236)"/>
    <rect x="198" y="234" width="14" height="9" rx="1.4" transform="rotate(-7.5 198 234)"/>
  </g>
</g>
<g>
  <path d="M226 236 L406 208 L424 334 L242 364 Z" fill="#000" opacity="0.45" filter="url(#ev4-chit-soft)"/>
  <path d="M216 224 L396 196 L412 320 L230 350 Z" fill="url(#ev4-chit-paper)"/>
  <path d="M216 224 L396 196 L397 208 L217 236 Z" fill="#fffdf2" opacity="0.45"/>
  <path d="M228 240 L384 216" fill="none" stroke="#9b7a4f" stroke-width="2.4" opacity="0.6"/>
  <g fill="#3f3a2e" opacity="0.85">
    <rect x="230" y="256" width="36" height="6" rx="1.6" transform="rotate(-8.8 230 256)"/>
    <rect x="276" y="249" width="44" height="6" rx="1.6" transform="rotate(-8.8 276 249)"/>
    <rect x="232" y="278" width="52" height="6" rx="1.6" transform="rotate(-8.8 232 278)"/>
    <rect x="294" y="268" width="24" height="6" rx="1.6" transform="rotate(-8.8 294 268)"/>
    <rect x="234" y="300" width="30" height="6" rx="1.6" transform="rotate(-8.8 234 300)"/>
  </g>
  <rect x="322" y="264" width="66" height="30" rx="3" fill="none" stroke="#2b4a72" stroke-width="2.6" opacity="0.75" transform="rotate(-8.8 322 264)"/>
  <g fill="#2b4a72" opacity="0.85">
    <rect x="330" y="274" width="14" height="9" rx="1.4" transform="rotate(-8.8 330 274)"/>
    <rect x="348" y="271" width="8" height="9" rx="1.4" transform="rotate(-8.8 348 271)"/>
    <rect x="360" y="269" width="14" height="9" rx="1.4" transform="rotate(-8.8 360 269)"/>
  </g>
</g>
<g>
  <path d="M356 330 L544 300 L562 428 L374 458 Z" fill="#000" opacity="0.45" filter="url(#ev4-chit-soft)"/>
  <path d="M346 318 L534 288 L550 414 L362 444 Z" fill="url(#ev4-chit-paper)"/>
  <path d="M346 318 L534 288 L535 300 L347 330 Z" fill="#fffdf2" opacity="0.45"/>
  <path d="M358 334 L522 308" fill="none" stroke="#9b7a4f" stroke-width="2.4" opacity="0.6"/>
  <g fill="#3f3a2e" opacity="0.85">
    <rect x="360" y="350" width="44" height="6" rx="1.6" transform="rotate(-9 360 350)"/>
    <rect x="414" y="342" width="28" height="6" rx="1.6" transform="rotate(-9 414 342)"/>
    <rect x="362" y="372" width="34" height="6" rx="1.6" transform="rotate(-9 362 372)"/>
    <rect x="406" y="365" width="50" height="6" rx="1.6" transform="rotate(-9 406 365)"/>
    <rect x="364" y="394" width="26" height="6" rx="1.6" transform="rotate(-9 364 394)"/>
  </g>
  <rect x="452" y="358" width="70" height="32" rx="3" fill="none" stroke="#8d2f26" stroke-width="3" opacity="0.85" transform="rotate(-9 452 358)"/>
  <g fill="#8d2f26" opacity="0.9">
    <rect x="460" y="369" width="15" height="10" rx="1.4" transform="rotate(-9 460 369)"/>
    <rect x="479" y="366" width="8" height="10" rx="1.4" transform="rotate(-9 479 366)"/>
    <rect x="492" y="364" width="15" height="10" rx="1.4" transform="rotate(-9 492 364)"/>
  </g>
</g>

<!-- the spike itself, a bill file, most of the night's chits driven onto it -->
<ellipse cx="520" cy="212" rx="72" ry="20" fill="#000" opacity="0.5" filter="url(#ev4-chit-soft)"/>
<ellipse cx="518" cy="200" rx="64" ry="20" fill="url(#ev4-chit-brass)"/>
<ellipse cx="518" cy="194" rx="64" ry="20" fill="url(#ev4-chit-brass)"/>
<ellipse cx="518" cy="194" rx="64" ry="20" fill="none" stroke="#2d2109" stroke-width="1.6"/>
<ellipse cx="504" cy="187" rx="26" ry="7" fill="#fff6cc" opacity="0.45"/>
<path d="M512 40 L524 40 L522 190 L514 190 Z" fill="url(#ev4-chit-steel)"/>
<path d="M513 44 L517 44 L516 188" fill="none" stroke="#ffffff" stroke-width="1.6" opacity="0.6"/>
<path d="M512 40 L524 40 L518 20 Z" fill="#dfe4e6"/>
<!-- the impaled chits, seen edge on, a season of them -->
<g>
  <path d="M448 148 L594 132 L598 166 L452 182 Z" fill="url(#ev4-chit-paper)" stroke="#a2977c" stroke-width="0.8"/>
  <path d="M446 116 L590 100 L594 132 L450 148 Z" fill="url(#ev4-chit-paper)" stroke="#a2977c" stroke-width="0.8"/>
  <path d="M450 88 L588 74 L590 100 L452 116 Z" fill="url(#ev4-chit-paper)" stroke="#a2977c" stroke-width="0.8"/>
  <path d="M454 66 L584 54 L586 74 L456 88 Z" fill="url(#ev4-chit-paper)" stroke="#a2977c" stroke-width="0.8"/>
</g>
<g fill="#3f3a2e" opacity="0.6">
  <rect x="462" y="156" width="46" height="5" rx="1.4" transform="rotate(-6 462 156)"/>
  <rect x="520" y="150" width="30" height="5" rx="1.4" transform="rotate(-6 520 150)"/>
  <rect x="460" y="124" width="34" height="5" rx="1.4" transform="rotate(-6 460 124)"/>
  <rect x="504" y="120" width="46" height="5" rx="1.4" transform="rotate(-6 504 120)"/>
  <rect x="462" y="96" width="40" height="5" rx="1.4" transform="rotate(-6 462 96)"/>
  <rect x="466" y="72" width="28" height="5" rx="1.4" transform="rotate(-6 466 72)"/>
</g>
<circle cx="518" cy="160" r="5" fill="#1a1408"/>
<circle cx="518" cy="128" r="4.6" fill="#1a1408"/>
<circle cx="518" cy="100" r="4.2" fill="#1a1408"/>

<!-- the steward's pencil, laid across the bar -->
<path d="M96 428 L322 402 L324 418 L98 444 Z" fill="#6e6a4e"/>
<path d="M96 428 L322 402 L322 407 L96 433 Z" fill="#b6b088" opacity="0.6"/>
<path d="M322 402 L324 418 L350 414 L344 398 Z" fill="#c9a878"/>
<path d="M344 398 L350 414 L364 411 L356 396 Z" fill="#2a2118"/>
<ellipse cx="95" cy="436" rx="6" ry="9" fill="#9c9a70"/>

<rect width="640" height="520" fill="url(#ev4-chit-vig)"/>
`,
  },

  /* THE MISSING 'C' FOLDER: the trunk's index rail, alphabetical, with a
     fresh gap two folders past the fighter's — and the tab stub left in it. */
  c4_emptyslot: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-slot-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#241c14"/><stop offset="0.6" stop-color="#110d08"/><stop offset="1" stop-color="#060504"/>
  </linearGradient>
  <linearGradient id="ev4-slot-trunk" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#5d4326"/><stop offset="0.35" stop-color="#3f2c18"/><stop offset="1" stop-color="#170f07"/>
  </linearGradient>
  <linearGradient id="ev4-slot-folder" x1="0.06" y1="0" x2="0.94" y2="1">
    <stop offset="0" stop-color="#e8cf9e"/><stop offset="0.3" stop-color="#d5b881"/>
    <stop offset="0.7" stop-color="#ab8d5c"/><stop offset="1" stop-color="#7a6238"/>
  </linearGradient>
  <linearGradient id="ev4-slot-tab" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#b6413a"/><stop offset="0.4" stop-color="#8d2c26"/><stop offset="1" stop-color="#4e1512"/>
  </linearGradient>
  <linearGradient id="ev4-slot-rail" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#d8dde0"/><stop offset="0.3" stop-color="#9aa0a4"/>
    <stop offset="0.7" stop-color="#5d6467"/><stop offset="1" stop-color="#2c3134"/>
  </linearGradient>
  <filter id="ev4-slot-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-slot-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-slot-bg)"/>

<!-- inside the wardrobe trunk: the drawer well, looking down the file rank -->
<path d="M0 60 L640 40 L640 520 L0 520 Z" fill="url(#ev4-slot-trunk)"/>
<path d="M0 60 L640 40 L640 62 L0 82 Z" fill="#9a7444" opacity="0.35"/>
<path d="M0 82 L640 62 L636 128 L4 152 Z" fill="#120c06" opacity="0.75"/>
<g opacity="0.22" stroke="#8a6134" stroke-width="1.4" fill="none">
  <path d="M0 178 Q 320 158 640 142"/><path d="M0 470 Q 320 442 640 420"/>
</g>
<!-- the steel index rail the tabs ride on -->
<path d="M22 150 L620 122 L624 150 L26 178 Z" fill="url(#ev4-slot-rail)"/>
<path d="M22 150 L620 122 L620 130 L22 158 Z" fill="#f0f4f6" opacity="0.6"/>
<path d="M26 170 L624 142 L624 150 L26 178 Z" fill="#191d1f" opacity="0.7"/>
<g stroke="#2c3134" stroke-width="1" opacity="0.5" fill="none">
  <path d="M120 146 L120 172"/><path d="M300 138 L300 164"/><path d="M480 129 L480 155"/>
</g>

<!-- the ranked folders, seen from above and behind, tabs staggered -->
<g>
  <path d="M28 196 L146 190 L150 470 L32 480 Z" fill="url(#ev4-slot-folder)" stroke="#5e4a26" stroke-width="1.4"/>
  <path d="M28 196 L146 190 L146 206 L28 212 Z" fill="#f6e3b8" opacity="0.5"/>
  <path d="M30 156 L86 153 L88 194 L32 197 Z" fill="url(#ev4-slot-tab)" stroke="#3d100e" stroke-width="1.2"/>
  <path d="M32 158 L84 155 L84 166 L32 169 Z" fill="#e07a6c" opacity="0.4"/>
  <g stroke="#2e0c0a" stroke-width="2" opacity="0.7" fill="none">
    <path d="M40 178 q 10 -6 18 -1 q 8 5 16 -2"/>
  </g>
</g>
<g>
  <path d="M150 190 L268 184 L272 464 L154 474 Z" fill="url(#ev4-slot-folder)" stroke="#5e4a26" stroke-width="1.4"/>
  <path d="M150 190 L268 184 L268 200 L150 206 Z" fill="#f6e3b8" opacity="0.45"/>
  <path d="M180 150 L236 147 L238 188 L182 191 Z" fill="url(#ev4-slot-tab)" stroke="#3d100e" stroke-width="1.2"/>
  <path d="M182 152 L234 149 L234 160 L182 163 Z" fill="#e07a6c" opacity="0.4"/>
  <g stroke="#2e0c0a" stroke-width="2" opacity="0.7" fill="none">
    <path d="M190 172 q 10 -6 18 -1 q 8 5 16 -2"/>
  </g>
</g>
<!-- THE GAP: the folder that was here is not here, and the rail shows -->
<path d="M272 186 L336 182 L340 462 L276 468 Z" fill="#0d0904"/>
<path d="M272 186 L336 182 L338 220 L274 226 Z" fill="#241906" opacity="0.9"/>
<path d="M276 226 L338 220 L340 462 L276 468 Z" fill="#160f06"/>
<g stroke="#4a3a1e" stroke-width="1" opacity="0.5" fill="none">
  <path d="M282 250 L336 244"/><path d="M282 300 L336 294"/><path d="M282 350 L336 344"/><path d="M282 400 L336 394"/>
</g>
<!-- the tab stub, torn out of the rail, still in his own hand -->
<path d="M292 148 L322 146 L324 186 L294 188 Z" fill="url(#ev4-slot-tab)" stroke="#3d100e" stroke-width="1.2"/>
<path d="M294 150 L320 148 L320 158 L294 160 Z" fill="#e07a6c" opacity="0.4"/>
<path d="M322 146 L324 186 L340 180 L332 158 Z" fill="#5d1a15"/>
<path d="M322 152 L332 160 L326 168 L336 176" fill="none" stroke="#f0b7ac" stroke-width="1.4" opacity="0.65"/>
<g stroke="#2e0c0a" stroke-width="2" opacity="0.75" fill="none">
  <path d="M298 172 q 8 -6 15 -1"/>
</g>
<!-- torn fibres of the folder that was pulled out of here -->
<g stroke="#e0c894" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M276 192 l 8 10"/><path d="M290 190 l 6 12"/><path d="M306 188 l 8 10"/><path d="M322 186 l 6 12"/>
</g>

<g>
  <path d="M344 182 L462 176 L466 456 L348 466 Z" fill="url(#ev4-slot-folder)" stroke="#5e4a26" stroke-width="1.4"/>
  <path d="M344 182 L462 176 L462 192 L344 198 Z" fill="#f6e3b8" opacity="0.45"/>
  <path d="M374 142 L430 139 L432 180 L376 183 Z" fill="url(#ev4-slot-tab)" stroke="#3d100e" stroke-width="1.2"/>
  <path d="M376 144 L428 141 L428 152 L376 155 Z" fill="#e07a6c" opacity="0.4"/>
  <g stroke="#2e0c0a" stroke-width="2" opacity="0.7" fill="none">
    <path d="M384 164 q 10 -6 18 -1 q 8 5 16 -2"/>
  </g>
</g>
<g>
  <path d="M466 176 L584 170 L588 450 L470 460 Z" fill="url(#ev4-slot-folder)" stroke="#5e4a26" stroke-width="1.4"/>
  <path d="M466 176 L584 170 L584 186 L466 192 Z" fill="#f6e3b8" opacity="0.4"/>
  <path d="M520 136 L576 133 L578 174 L522 177 Z" fill="url(#ev4-slot-tab)" stroke="#3d100e" stroke-width="1.2"/>
  <path d="M522 138 L574 135 L574 146 L522 149 Z" fill="#e07a6c" opacity="0.4"/>
  <g stroke="#2e0c0a" stroke-width="2" opacity="0.7" fill="none">
    <path d="M530 158 q 10 -6 18 -1 q 8 5 16 -2"/>
  </g>
</g>
<path d="M588 172 L634 168 L638 448 L592 452 Z" fill="#7a6238"/>
<path d="M588 172 L634 168 L634 184 L588 188 Z" fill="#c8ab74" opacity="0.4"/>

<!-- the lamp raking the tops of the folders -->
<path d="M28 196 Q 320 178 634 168" fill="none" stroke="#fff0cc" stroke-width="3" opacity="0.28"/>
<ellipse cx="200" cy="330" rx="240" ry="180" fill="#ffe0a4" opacity="0.05"/>

<rect width="640" height="520" fill="url(#ev4-slot-vig)"/>
`,
  },

  /* THE PRIED TRUNK: a lock worth more than the porter's month, and the hasp
     taken off with a fire iron. The red tabs, and the folder nobody wanted. */
  c4_trunk: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-trunk-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#221a12"/><stop offset="0.6" stop-color="#100c07"/><stop offset="1" stop-color="#060403"/>
  </linearGradient>
  <linearGradient id="ev4-trunk-body" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6b4b2a"/><stop offset="0.3" stop-color="#4a3219"/>
    <stop offset="0.7" stop-color="#2e1e0f"/><stop offset="1" stop-color="#150e06"/>
  </linearGradient>
  <linearGradient id="ev4-trunk-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d5b75f"/>
    <stop offset="0.38" stop-color="#faeeb9"/><stop offset="0.62" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <linearGradient id="ev4-trunk-raw" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#e2c491"/><stop offset="0.5" stop-color="#b5905c"/><stop offset="1" stop-color="#6f5228"/>
  </linearGradient>
  <linearGradient id="ev4-trunk-iron" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#6e6c68"/><stop offset="0.3" stop-color="#464440"/>
    <stop offset="0.7" stop-color="#2a2825"/><stop offset="1" stop-color="#141312"/>
  </linearGradient>
  <linearGradient id="ev4-trunk-file" x1="0.06" y1="0" x2="0.94" y2="1">
    <stop offset="0" stop-color="#e8cf9e"/><stop offset="0.35" stop-color="#cfb27c"/><stop offset="1" stop-color="#8b6f42"/>
  </linearGradient>
  <linearGradient id="ev4-trunk-tab" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#b6413a"/><stop offset="0.4" stop-color="#8d2c26"/><stop offset="1" stop-color="#4e1512"/>
  </linearGradient>
  <filter id="ev4-trunk-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-trunk-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-trunk-bg)"/>

<!-- the baggage car floor: planks, cold as a vault -->
<path d="M0 380 L640 356 L640 520 L0 520 Z" fill="#241a11"/>
<g opacity="0.3" stroke="#5e4326" stroke-width="1.6" fill="none">
  <path d="M0 420 Q 320 402 640 392"/><path d="M0 462 Q 320 440 640 428"/><path d="M0 504 Q 320 480 640 466"/>
</g>
<g opacity="0.22" stroke="#0f0a05" stroke-width="2.6" fill="none">
  <path d="M120 380 L104 520"/><path d="M330 372 L326 520"/><path d="M520 364 L534 520"/>
</g>

<!-- the trunk, standing open, the lid tipped back into the dark -->
<path d="M56 130 L560 96 L582 384 L74 424 Z" fill="url(#ev4-trunk-body)"/>
<path d="M56 130 L560 96 L562 118 L58 152 Z" fill="#a8783f" opacity="0.35"/>
<path d="M74 424 L582 384 L578 400 L76 440 Z" fill="#0d0803" opacity="0.8"/>
<!-- bound corners and battens in brass -->
<path d="M56 130 L96 127 L110 420 L74 424 Z" fill="url(#ev4-trunk-brass)" opacity="0.85"/>
<path d="M60 134 L88 132 L90 148 L62 150 Z" fill="#fff3c0" opacity="0.4"/>
<path d="M520 99 L560 96 L582 384 L546 388 Z" fill="url(#ev4-trunk-brass)" opacity="0.75"/>
<path d="M524 103 L554 101 L556 117 L526 119 Z" fill="#fff3c0" opacity="0.35"/>
<path d="M56 232 L560 200 L562 226 L58 258 Z" fill="url(#ev4-trunk-brass)" opacity="0.65"/>
<path d="M58 236 L558 204 L558 212 L58 244 Z" fill="#fff3c0" opacity="0.35"/>
<g fill="#8d7330" stroke="#241a06" stroke-width="1">
  <circle cx="76" cy="176" r="5"/><circle cx="76" cy="300" r="5"/><circle cx="76" cy="392" r="5"/>
  <circle cx="562" cy="146" r="5"/><circle cx="566" cy="268" r="5"/><circle cx="572" cy="356" r="5"/>
</g>

<!-- the interior: red-tabbed files stood on edge, rifled and leaning -->
<path d="M104 156 L534 128 L548 358 L118 396 Z" fill="#150e07"/>
<g>
  <path d="M120 186 L184 182 L192 372 L128 380 Z" fill="url(#ev4-trunk-file)"/>
  <path d="M120 186 L184 182 L184 196 L120 200 Z" fill="#f6e3b8" opacity="0.45"/>
  <path d="M126 160 L162 158 L164 186 L128 188 Z" fill="url(#ev4-trunk-tab)"/>
  <path d="M186 180 L246 176 L256 366 L194 374 Z" fill="url(#ev4-trunk-file)"/>
  <path d="M186 180 L246 176 L246 190 L186 194 Z" fill="#f6e3b8" opacity="0.4"/>
  <path d="M196 154 L230 152 L232 180 L198 182 Z" fill="url(#ev4-trunk-tab)"/>
  <path d="M250 172 L306 168 L318 358 L258 366 Z" fill="url(#ev4-trunk-file)"/>
  <path d="M256 146 L292 144 L294 172 L258 174 Z" fill="url(#ev4-trunk-tab)"/>
  <path d="M316 164 L370 160 L382 350 L326 358 Z" fill="url(#ev4-trunk-file)" transform="rotate(4 340 250)"/>
  <path d="M322 138 L358 136 L360 164 L324 166 Z" fill="url(#ev4-trunk-tab)" transform="rotate(4 340 150)"/>
  <path d="M386 158 L442 154 L452 344 L396 352 Z" fill="url(#ev4-trunk-file)"/>
  <path d="M392 132 L428 130 L430 158 L394 160 Z" fill="url(#ev4-trunk-tab)"/>
  <path d="M456 152 L516 148 L526 338 L466 346 Z" fill="url(#ev4-trunk-file)"/>
  <path d="M462 126 L498 124 L500 152 L464 154 Z" fill="url(#ev4-trunk-tab)"/>
</g>
<g stroke="#7c6238" stroke-width="1" opacity="0.5" fill="none">
  <path d="M124 214 L188 210"/><path d="M126 262 L190 258"/><path d="M128 310 L192 306"/>
  <path d="M190 208 L250 204"/><path d="M192 256 L252 252"/><path d="M254 200 L312 196"/>
  <path d="M390 186 L448 182"/><path d="M460 180 L520 176"/>
</g>
<!-- the gap where a folder was pried out, and the leaning stack -->
<path d="M306 168 L318 358 L326 358 L316 164 Z" fill="#0c0803"/>

<!-- the plain folder of bank drafts, sitting on top, ignored by the thief -->
<path d="M170 288 L494 258 L508 344 L184 380 Z" fill="#000" opacity="0.45" filter="url(#ev4-trunk-soft)"/>
<path d="M162 272 L486 242 L498 328 L174 364 Z" fill="#cfc3a3"/>
<path d="M162 272 L486 242 L487 256 L163 288 Z" fill="#f2ead2" opacity="0.6"/>
<path d="M480 306 L498 328 L174 364 L170 342 Z" fill="#8d8367" opacity="0.35"/>
<g stroke="#8d8367" stroke-width="1.2" opacity="0.6" fill="none">
  <path d="M182 300 L466 274"/><path d="M184 318 L468 292"/><path d="M186 336 L400 316"/>
</g>
<path d="M198 282 L318 271" fill="none" stroke="#4a6a58" stroke-width="3" opacity="0.5"/>
<g fill="#4a6a58" opacity="0.5">
  <rect x="200" y="292" width="46" height="6" rx="1.6" transform="rotate(-5.3 200 292)"/>
  <rect x="256" y="287" width="30" height="6" rx="1.6" transform="rotate(-5.3 256 287)"/>
</g>

<!-- THE VIOLENCE: the hasp torn clean off, and the wood under it -->
<path d="M236 96 L346 88 L352 132 L242 142 Z" fill="url(#ev4-trunk-raw)"/>
<path d="M236 96 L346 88 L346 100 L236 110 Z" fill="#f4dcae" opacity="0.5"/>
<g fill="url(#ev4-trunk-raw)" stroke="#4e3618" stroke-width="0.9">
  <path d="M244 100 L262 96 L252 140 Z"/><path d="M276 96 L292 94 L282 138 Z"/>
  <path d="M310 92 L326 90 L316 134 Z"/>
</g>
<g stroke="#422c12" stroke-width="1" opacity="0.7" fill="none">
  <path d="M252 100 L250 136"/><path d="M284 96 L282 134"/><path d="M318 92 L316 130"/>
</g>
<!-- the hasp itself, bent, hanging by one screw -->
<path d="M352 96 L420 90 L426 132 L358 140 Z" fill="url(#ev4-trunk-brass)" stroke="#2d2109" stroke-width="1.6"/>
<path d="M356 100 L416 95 L416 106 L356 111 Z" fill="#fff3c0" opacity="0.45"/>
<path d="M420 104 Q 452 106 462 130 Q 450 148 424 140 Z" fill="url(#ev4-trunk-brass)" stroke="#2d2109" stroke-width="1.4"/>
<path d="M424 108 Q 448 110 456 128" fill="none" stroke="#fff6cc" stroke-width="2" opacity="0.55"/>
<circle cx="366" cy="106" r="6" fill="#8d7330" stroke="#241a06" stroke-width="1.2"/>
<path d="M361 104 L371 106" stroke="#171003" stroke-width="2"/>
<circle cx="412" cy="126" r="6" fill="#8d7330" stroke="#241a06" stroke-width="1.2"/>
<!-- the big trunk lock, still locked, and now pointless -->
<path d="M256 152 L330 146 L336 200 L262 208 Z" fill="url(#ev4-trunk-brass)" stroke="#2d2109" stroke-width="1.8"/>
<path d="M260 156 L326 151 L326 164 L260 169 Z" fill="#fff3c0" opacity="0.42"/>
<ellipse cx="296" cy="180" rx="9" ry="12" fill="#150f04"/>
<path d="M292 174 L300 174 L302 190 L290 190 Z" fill="#0a0702"/>

<!-- the fire iron, dropped where it did the work -->
<path d="M96 448 Q 300 400 528 424 L534 452 Q 300 430 100 476 Z" fill="#000" opacity="0.5" filter="url(#ev4-trunk-soft)"/>
<path d="M88 432 Q 296 384 520 408 L516 426 Q 296 404 92 452 Z" fill="url(#ev4-trunk-iron)"/>
<path d="M88 432 Q 296 384 520 408 L519 414 Q 296 391 90 439 Z" fill="#9a9791" opacity="0.5"/>
<path d="M520 408 Q 556 412 566 434 Q 552 452 522 444 L516 426 Z" fill="url(#ev4-trunk-iron)"/>
<path d="M524 412 Q 552 416 560 432" fill="none" stroke="#b2afa8" stroke-width="2.4" opacity="0.55"/>
<ellipse cx="86" cy="442" rx="12" ry="11" fill="#3a3835"/>
<ellipse cx="83" cy="438" rx="5" ry="4" fill="#a6a39c" opacity="0.6"/>
<!-- splinters and paint chips where the iron went in -->
<g fill="#c9a86e" opacity="0.6">
  <path d="M180 404 q 12 -6 16 4 q -10 8 -16 -4 Z"/><path d="M246 414 q 10 -6 14 4 q -8 8 -14 -4 Z"/>
  <path d="M330 400 q 12 -6 16 4 q -10 8 -16 -4 Z"/>
</g>

<rect width="640" height="520" fill="url(#ev4-trunk-vig)"/>
`,
  },

  /* THE ARENA FILE: a dead man's red-tabbed folder in the inside pocket of a
     camel overcoat, its edge scuffed brass-bright by a fire iron. */
  c4_stolenfile: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-file-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#241d14"/><stop offset="0.6" stop-color="#110d08"/><stop offset="1" stop-color="#060403"/>
  </linearGradient>
  <linearGradient id="ev4-file-camel" x1="0.05" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#c9a878"/><stop offset="0.24" stop-color="#a8875b"/>
    <stop offset="0.6" stop-color="#7d6440"/><stop offset="1" stop-color="#453626"/>
  </linearGradient>
  <linearGradient id="ev4-file-silk" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6a5a3e"/><stop offset="0.3" stop-color="#4a3d28"/>
    <stop offset="0.72" stop-color="#2c2317"/><stop offset="1" stop-color="#171208"/>
  </linearGradient>
  <linearGradient id="ev4-file-manila" x1="0.06" y1="0" x2="0.94" y2="1">
    <stop offset="0" stop-color="#eed6a6"/><stop offset="0.3" stop-color="#d7ba84"/>
    <stop offset="0.72" stop-color="#ac8e5c"/><stop offset="1" stop-color="#7b6339"/>
  </linearGradient>
  <linearGradient id="ev4-file-tab" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#c04a41"/><stop offset="0.4" stop-color="#93302a"/><stop offset="1" stop-color="#511714"/>
  </linearGradient>
  <linearGradient id="ev4-file-photo" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#c9c6bc"/><stop offset="0.4" stop-color="#8e8b82"/><stop offset="1" stop-color="#4c4a45"/>
  </linearGradient>
  <filter id="ev4-file-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-file-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-file-bg)"/>

<!-- the coat: heavy camel hair, hanging, one lapel turned back -->
<rect width="640" height="520" fill="url(#ev4-file-camel)"/>
<g opacity="0.22" stroke="#e0c093" stroke-width="1.6" fill="none">
  <path d="M0 40 Q 160 60 300 30 Q 460 0 640 26"/>
  <path d="M0 140 Q 160 162 300 130 Q 460 100 640 128"/>
  <path d="M0 260 Q 160 284 300 250 Q 460 218 640 248"/>
  <path d="M0 380 Q 160 404 300 370 Q 460 338 640 368"/>
  <path d="M0 490 Q 160 514 300 480 Q 460 448 640 478"/>
</g>
<g opacity="0.18" stroke="#3d3020" stroke-width="2.6" fill="none">
  <path d="M0 90 Q 160 112 300 80 Q 460 50 640 78"/>
  <path d="M0 320 Q 160 344 300 310 Q 460 278 640 308"/>
</g>
<!-- the fibres of the cloth, a soft broad specular from the upper left -->
<ellipse cx="150" cy="120" rx="240" ry="170" fill="#f0d5a8" opacity="0.12"/>
<g opacity="0.14" stroke="#f4dcb2" stroke-width="0.8" fill="none">
  <path d="M40 60 l 14 -10"/><path d="M120 130 l 14 -10"/><path d="M210 90 l 14 -10"/>
  <path d="M300 180 l 14 -10"/><path d="M400 120 l 14 -10"/><path d="M480 220 l 14 -10"/>
  <path d="M80 260 l 14 -10"/><path d="M240 320 l 14 -10"/><path d="M420 400 l 14 -10"/>
  <path d="M540 340 l 14 -10"/><path d="M160 430 l 14 -10"/><path d="M330 470 l 14 -10"/>
</g>

<!-- the turned-back facing, and the deep inside pocket -->
<path d="M0 0 L228 0 Q 268 200 236 520 L0 520 Z" fill="url(#ev4-file-silk)"/>
<path d="M0 0 L228 0 Q 244 78 248 160 L0 160 Z" fill="#7d6a49" opacity="0.3"/>
<g opacity="0.35" stroke="#8e7a54" stroke-width="1" fill="none">
  <path d="M20 0 Q 40 260 24 520"/><path d="M70 0 Q 92 260 74 520"/><path d="M124 0 Q 146 260 126 520"/>
  <path d="M176 0 Q 200 260 178 520"/>
</g>
<path d="M228 0 Q 268 200 236 520" fill="none" stroke="#241c10" stroke-width="6"/>
<path d="M234 0 Q 274 200 242 520" fill="none" stroke="#a08b60" stroke-width="1.6" opacity="0.5"/>
<!-- the pocket mouth: bound, stitched deep, and gaping -->
<path d="M46 196 Q 150 176 230 190 L226 232 Q 146 216 44 238 Z" fill="#120d07"/>
<path d="M46 196 Q 150 176 230 190" fill="none" stroke="#8d7a52" stroke-width="4"/>
<path d="M48 204 Q 150 184 228 198" fill="none" stroke="#c0a878" stroke-width="1.6" stroke-dasharray="6 6" opacity="0.75"/>
<path d="M44 238 Q 146 216 226 232" fill="none" stroke="#0a0704" stroke-width="3" opacity="0.7"/>

<!-- THE FOLDER, half drawn out of the pocket -->
<path d="M96 244 L470 196 L510 466 L136 520 Z" fill="#000" opacity="0.5" filter="url(#ev4-file-soft)"/>
<path d="M84 226 L458 178 L494 446 L120 502 Z" fill="url(#ev4-file-manila)"/>
<path d="M84 226 L458 178 L460 196 L86 244 Z" fill="#f8e6bb" opacity="0.5"/>
<path d="M486 396 L494 446 L120 502 L114 452 Z" fill="#8c7143" opacity="0.35"/>
<!-- the fold at the spine, and the papers standing proud of it -->
<path d="M92 280 L462 232" fill="none" stroke="#9a7c4a" stroke-width="2" opacity="0.6"/>
<path d="M100 256 L448 210 L452 236 L104 284 Z" fill="#f3e6c6" opacity="0.55"/>
<g stroke="#a58a58" stroke-width="1.2" opacity="0.6" fill="none">
  <path d="M104 300 L456 254"/><path d="M108 326 L460 280"/><path d="M112 352 L464 306"/>
  <path d="M116 378 L468 332"/><path d="M120 404 L472 358"/>
</g>
<!-- the red index tab in a dead man's hand -->
<path d="M340 166 L448 152 L454 194 L346 208 Z" fill="url(#ev4-file-tab)" stroke="#3f100d" stroke-width="1.4"/>
<path d="M344 170 L444 157 L444 170 L344 183 Z" fill="#e58272" opacity="0.4"/>
<g stroke="#380f0c" stroke-width="2.4" stroke-linecap="round" fill="none" opacity="0.8">
  <path d="M356 190 q 14 -8 26 -2 q 12 6 24 -3 q 12 -6 22 0"/>
</g>

<!-- clippings and two photographs, sliding out of the folder -->
<path d="M156 288 L376 258 L396 384 L176 418 Z" fill="#e8e0c8"/>
<path d="M156 288 L376 258 L377 272 L157 302 Z" fill="#fbf6e6" opacity="0.6"/>
<g fill="#4c4638" opacity="0.7">
  <rect x="170" y="306" width="52" height="6" rx="1.6" transform="rotate(-7.8 170 306)"/>
  <rect x="232" y="298" width="30" height="6" rx="1.6" transform="rotate(-7.8 232 298)"/>
  <rect x="272" y="292" width="44" height="6" rx="1.6" transform="rotate(-7.8 272 292)"/>
  <rect x="174" y="330" width="38" height="6" rx="1.6" transform="rotate(-7.8 174 330)"/>
  <rect x="222" y="324" width="56" height="6" rx="1.6" transform="rotate(-7.8 222 324)"/>
  <rect x="178" y="354" width="46" height="6" rx="1.6" transform="rotate(-7.8 178 354)"/>
  <rect x="234" y="346" width="32" height="6" rx="1.6" transform="rotate(-7.8 234 346)"/>
  <rect x="182" y="378" width="60" height="6" rx="1.6" transform="rotate(-7.8 182 378)"/>
</g>
<!-- the photograph: two men shaking hands, in silver-print grey -->
<path d="M300 336 L470 314 L488 424 L318 448 Z" fill="#efeade"/>
<path d="M310 350 L462 330 L476 414 L324 436 Z" fill="url(#ev4-file-photo)"/>
<path d="M310 350 L462 330 L464 344 L312 364 Z" fill="#e2ded4" opacity="0.4"/>
<path d="M330 434 Q 350 386 342 356 Q 358 348 366 372 Q 372 396 366 430 Z" fill="#3a3833"/>
<path d="M470 414 Q 452 372 456 344 Q 440 338 430 360 Q 422 386 428 424 Z" fill="#3a3833"/>
<path d="M366 384 Q 396 372 428 380 Q 400 396 366 392 Z" fill="#5f5c55"/>
<ellipse cx="352" cy="348" rx="12" ry="14" fill="#6d6a62"/>
<ellipse cx="446" cy="338" rx="12" ry="14" fill="#6d6a62"/>
<path d="M314 356 Q 388 344 470 332" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.25"/>

<!-- THE SCUFFS: fresh brass-bright scratches along the folder's edge -->
<g stroke="#f6e2b4" stroke-width="2.4" opacity="0.85" fill="none">
  <path d="M112 458 L146 452"/><path d="M162 448 L204 442"/><path d="M222 440 L252 435"/>
  <path d="M272 432 L318 426"/><path d="M336 422 L370 417"/>
</g>
<g stroke="#8a6c3c" stroke-width="1.4" opacity="0.7" fill="none">
  <path d="M114 464 L148 458"/><path d="M226 446 L256 441"/><path d="M338 428 L372 423"/>
</g>
<path d="M120 470 q 22 -8 42 -2" fill="none" stroke="#5c4626" stroke-width="3" opacity="0.5"/>
<g fill="#f2e0b0" opacity="0.6">
  <circle cx="152" cy="456" r="2"/><circle cx="256" cy="438" r="1.7"/><circle cx="376" cy="420" r="1.9"/>
</g>

<rect width="640" height="520" fill="url(#ev4-file-vig)"/>
`,
  },

  /* THE MORPHINE TIN: quarter-grain tablets, half gone, left in the fold of
     an untouched napkin at a table set for one. */
  c4_pilltin: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-tin-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#282218"/><stop offset="0.6" stop-color="#12100a"/><stop offset="1" stop-color="#070605"/>
  </linearGradient>
  <linearGradient id="ev4-tin-linen" x1="0.05" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f6f2e4"/><stop offset="0.3" stop-color="#e2ddcc"/>
    <stop offset="0.68" stop-color="#b8b2a0"/><stop offset="1" stop-color="#7e7969"/>
  </linearGradient>
  <linearGradient id="ev4-tin-metal" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#6e747a"/><stop offset="0.14" stop-color="#c2cace"/>
    <stop offset="0.32" stop-color="#eff4f5"/><stop offset="0.54" stop-color="#848b90"/>
    <stop offset="0.76" stop-color="#b7bfc3"/><stop offset="1" stop-color="#41474b"/>
  </linearGradient>
  <linearGradient id="ev4-tin-inside" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#3d4348"/><stop offset="0.5" stop-color="#5e666b"/><stop offset="1" stop-color="#23282c"/>
  </linearGradient>
  <linearGradient id="ev4-tin-label" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#f4efdd"/><stop offset="0.4" stop-color="#e2dbc4"/><stop offset="1" stop-color="#b3ac95"/>
  </linearGradient>
  <radialGradient id="ev4-tin-pill" cx="0.35" cy="0.3" r="0.75">
    <stop offset="0" stop-color="#ffffff"/><stop offset="0.55" stop-color="#e4e2da"/><stop offset="1" stop-color="#a9a79e"/>
  </radialGradient>
  <filter id="ev4-tin-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-tin-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-tin-bg)"/>

<!-- white linen going grey under the low emergency lights -->
<rect width="640" height="520" fill="url(#ev4-tin-linen)" opacity="0.92"/>
<g opacity="0.2" stroke="#a8a291" stroke-width="1" fill="none">
  <path d="M0 30 L640 22"/><path d="M0 66 L640 58"/><path d="M0 102 L640 94"/><path d="M0 138 L640 130"/>
  <path d="M0 174 L640 166"/><path d="M0 210 L640 202"/><path d="M0 246 L640 238"/><path d="M0 282 L640 274"/>
  <path d="M0 318 L640 310"/><path d="M0 354 L640 346"/><path d="M0 390 L640 382"/><path d="M0 426 L640 418"/>
  <path d="M0 462 L640 454"/><path d="M0 498 L640 490"/>
</g>
<g opacity="0.16" stroke="#b6b0a0" stroke-width="0.8" fill="none">
  <path d="M40 0 L44 520"/><path d="M112 0 L116 520"/><path d="M184 0 L188 520"/><path d="M256 0 L260 520"/>
  <path d="M328 0 L332 520"/><path d="M400 0 L404 520"/><path d="M472 0 L476 520"/><path d="M544 0 L548 520"/>
  <path d="M616 0 L620 520"/>
</g>
<!-- the napkin, folded open, its two heavy pressed creases -->
<path d="M40 148 L560 116 L604 470 L84 508 Z" fill="url(#ev4-tin-linen)"/>
<path d="M40 148 L560 116 L562 138 L42 170 Z" fill="#ffffff" opacity="0.55"/>
<path d="M590 400 L604 470 L84 508 L78 448 Z" fill="#8f8a78" opacity="0.28"/>
<path d="M298 130 L338 490" fill="none" stroke="#9e988a" stroke-width="3" opacity="0.5"/>
<path d="M304 130 L344 490" fill="none" stroke="#fffdf4" stroke-width="2" opacity="0.7"/>
<path d="M56 300 L586 268" fill="none" stroke="#9e988a" stroke-width="3" opacity="0.45"/>
<path d="M56 294 L586 262" fill="none" stroke="#fffdf4" stroke-width="2" opacity="0.65"/>
<!-- the fold of the napkin turned back, so the tin lies in a trough -->
<path d="M124 260 Q 320 226 512 252 Q 470 320 320 336 Q 176 340 124 260 Z" fill="#c9c3b1" opacity="0.6"/>
<path d="M124 260 Q 320 226 512 252" fill="none" stroke="#fffdf4" stroke-width="3.4" opacity="0.7"/>
<path d="M140 286 Q 320 258 494 280" fill="none" stroke="#8f8a78" stroke-width="2" opacity="0.4"/>

<!-- the tin: flat, hinged, chromed, its lid stood open on the linen -->
<ellipse cx="316" cy="410" rx="180" ry="42" fill="#000" opacity="0.4" filter="url(#ev4-tin-soft)"/>
<!-- the open lid, laid back, catching the whole lamp -->
<path d="M150 240 L438 216 L456 300 L166 328 Z" fill="url(#ev4-tin-metal)"/>
<path d="M150 240 L438 216 L440 228 L152 254 Z" fill="#ffffff" opacity="0.6"/>
<path d="M448 282 L456 300 L166 328 L162 310 Z" fill="#2a3035" opacity="0.55"/>
<path d="M186 254 L410 234 L420 288 L196 310 Z" fill="url(#ev4-tin-label)"/>
<path d="M186 254 L410 234 L411 244 L187 264 Z" fill="#fffdf2" opacity="0.6"/>
<path d="M194 268 L404 249" fill="none" stroke="#7d3a34" stroke-width="3" opacity="0.7"/>
<g fill="#3f3a30" opacity="0.8">
  <rect x="196" y="276" width="52" height="6" rx="1.6" transform="rotate(-5 196 276)"/>
  <rect x="258" y="270" width="34" height="6" rx="1.6" transform="rotate(-5 258 270)"/>
  <rect x="302" y="266" width="46" height="6" rx="1.6" transform="rotate(-5 302 266)"/>
  <rect x="200" y="292" width="38" height="6" rx="1.6" transform="rotate(-5 200 292)"/>
  <rect x="248" y="288" width="58" height="6" rx="1.6" transform="rotate(-5 248 288)"/>
  <rect x="316" y="282" width="28" height="6" rx="1.6" transform="rotate(-5 316 282)"/>
</g>
<path d="M188 300 L360 285" fill="none" stroke="#7d3a34" stroke-width="1.6" opacity="0.5"/>

<!-- the hinge, and the body of the tin, half its ration gone -->
<path d="M166 328 L456 300 L458 316 L168 344 Z" fill="#4e5459"/>
<g fill="#c6ced2" opacity="0.7">
  <rect x="200" y="326" width="30" height="12" rx="4" transform="rotate(-5.5 200 326)"/>
  <rect x="300" y="316" width="30" height="12" rx="4" transform="rotate(-5.5 300 316)"/>
  <rect x="400" y="306" width="30" height="12" rx="4" transform="rotate(-5.5 400 306)"/>
</g>
<path d="M168 344 L458 316 L472 424 L182 456 Z" fill="url(#ev4-tin-metal)"/>
<path d="M168 344 L458 316 L459 328 L169 356 Z" fill="#ffffff" opacity="0.5"/>
<path d="M464 402 L472 424 L182 456 L178 434 Z" fill="#2a3035" opacity="0.55"/>
<path d="M184 358 L444 332 L456 414 L196 442 Z" fill="url(#ev4-tin-inside)"/>
<path d="M184 358 L444 332 L445 342 L185 368 Z" fill="#0f1315" opacity="0.6"/>

<!-- the tablets: half the tin, all pushed to one end -->
<g>
  <ellipse cx="222" cy="392" rx="21" ry="15" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="216" cy="387" rx="8" ry="5" fill="#ffffff" opacity="0.85"/>
  <ellipse cx="264" cy="386" rx="21" ry="15" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="258" cy="381" rx="8" ry="5" fill="#ffffff" opacity="0.8"/>
  <ellipse cx="306" cy="380" rx="21" ry="15" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="300" cy="375" rx="8" ry="5" fill="#ffffff" opacity="0.75"/>
  <ellipse cx="244" cy="416" rx="21" ry="15" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="238" cy="411" rx="8" ry="5" fill="#ffffff" opacity="0.8"/>
  <ellipse cx="288" cy="410" rx="21" ry="15" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="282" cy="405" rx="8" ry="5" fill="#ffffff" opacity="0.75"/>
  <ellipse cx="332" cy="404" rx="20" ry="14" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="326" cy="399" rx="7" ry="4.5" fill="#ffffff" opacity="0.7"/>
  <ellipse cx="348" cy="376" rx="20" ry="14" fill="url(#ev4-tin-pill)"/>
  <ellipse cx="342" cy="371" rx="7" ry="4.5" fill="#ffffff" opacity="0.7"/>
</g>
<g stroke="#8e8c84" stroke-width="1" opacity="0.6" fill="none">
  <path d="M212 392 q 10 5 20 0"/><path d="M254 386 q 10 5 20 0"/><path d="M296 380 q 10 5 20 0"/>
  <path d="M234 416 q 10 5 20 0"/><path d="M278 410 q 10 5 20 0"/>
</g>
<!-- and the empty half, where the ration has been spent -->
<g fill="#161a1d" opacity="0.6">
  <ellipse cx="404" cy="374" rx="34" ry="20"/><ellipse cx="420" cy="404" rx="28" ry="16"/>
</g>
<path d="M372 356 Q 400 396 386 434" fill="none" stroke="#7c848a" stroke-width="2" opacity="0.4"/>
<!-- one tablet out on the linen, dropped and not picked up -->
<ellipse cx="540" cy="356" rx="22" ry="16" fill="#000" opacity="0.25" filter="url(#ev4-tin-soft)"/>
<ellipse cx="536" cy="348" rx="20" ry="14" fill="url(#ev4-tin-pill)"/>
<ellipse cx="530" cy="343" rx="7" ry="4.5" fill="#ffffff" opacity="0.85"/>
<path d="M526 348 q 10 5 20 0" fill="none" stroke="#8e8c84" stroke-width="1" opacity="0.6"/>

<rect width="640" height="520" fill="url(#ev4-tin-vig)"/>
`,
  },

  /* THE STEWARD'S CLOCK: railroad time. The open-face watch he keeps his
     seatings by, the cutter that clipped the Havana, the one spent match. */
  c4_dinnertimes: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-watch-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#292418"/><stop offset="0.6" stop-color="#13100a"/><stop offset="1" stop-color="#070605"/>
  </linearGradient>
  <linearGradient id="ev4-watch-linen" x1="0.05" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#efeade"/><stop offset="0.3" stop-color="#d8d3c2"/>
    <stop offset="0.68" stop-color="#aaa595"/><stop offset="1" stop-color="#726d5f"/>
  </linearGradient>
  <linearGradient id="ev4-watch-case" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#6d5a24"/><stop offset="0.14" stop-color="#dcc06a"/>
    <stop offset="0.32" stop-color="#fdf3c4"/><stop offset="0.54" stop-color="#a68a38"/>
    <stop offset="0.78" stop-color="#e5cd80"/><stop offset="1" stop-color="#463514"/>
  </linearGradient>
  <radialGradient id="ev4-watch-dial" cx="0.34" cy="0.28" r="0.8">
    <stop offset="0" stop-color="#fdfaf0"/><stop offset="0.55" stop-color="#eee7d4"/><stop offset="1" stop-color="#c0b9a4"/>
  </radialGradient>
  <linearGradient id="ev4-watch-steel" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#eef1f2"/><stop offset="0.3" stop-color="#b0b6b9"/>
    <stop offset="0.68" stop-color="#6c7276"/><stop offset="1" stop-color="#30363a"/>
  </linearGradient>
  <filter id="ev4-watch-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-watch-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-watch-bg)"/>
<rect width="640" height="520" fill="url(#ev4-watch-linen)" opacity="0.9"/>
<g opacity="0.2" stroke="#9a9484" stroke-width="1" fill="none">
  <path d="M0 34 L640 26"/><path d="M0 74 L640 66"/><path d="M0 114 L640 106"/><path d="M0 154 L640 146"/>
  <path d="M0 194 L640 186"/><path d="M0 234 L640 226"/><path d="M0 274 L640 266"/><path d="M0 314 L640 306"/>
  <path d="M0 354 L640 346"/><path d="M0 394 L640 386"/><path d="M0 434 L640 426"/><path d="M0 474 L640 466"/>
</g>
<g opacity="0.14" stroke="#a8a292" stroke-width="0.8" fill="none">
  <path d="M56 0 L60 520"/><path d="M144 0 L148 520"/><path d="M232 0 L236 520"/><path d="M320 0 L324 520"/>
  <path d="M408 0 L412 520"/><path d="M496 0 L500 520"/><path d="M584 0 L588 520"/>
</g>
<path d="M0 60 Q 200 96 380 74 Q 520 56 640 76 L640 120 Q 500 100 372 118 Q 190 142 0 106 Z" fill="#8d8878" opacity="0.2"/>
<path d="M0 400 Q 220 434 420 412 Q 540 398 640 414 L640 446 Q 530 430 420 444 Q 216 468 0 436 Z" fill="#8d8878" opacity="0.18"/>

<!-- the watch: open-face, railroad grade, lying dial up -->
<ellipse cx="252" cy="330" rx="150" ry="42" fill="#000" opacity="0.45" filter="url(#ev4-watch-soft)"/>
<circle cx="246" cy="268" r="146" fill="url(#ev4-watch-case)"/>
<circle cx="246" cy="268" r="146" fill="none" stroke="#3b2c10" stroke-width="2.4"/>
<circle cx="246" cy="268" r="132" fill="#2e2409"/>
<circle cx="246" cy="268" r="126" fill="url(#ev4-watch-dial)"/>
<path d="M140 168 Q 190 132 254 130" fill="none" stroke="#fffbea" stroke-width="10" opacity="0.5"/>
<path d="M356 210 Q 384 262 366 322" fill="none" stroke="#fffbea" stroke-width="5" opacity="0.25"/>
<!-- the chapter ring: minute ticks, and heavier hour marks. No numerals. -->
<g stroke="#2c281f" stroke-width="2" opacity="0.8">
  <path d="M246 148 L246 164"/><path d="M366 268 L350 268"/><path d="M246 388 L246 372"/><path d="M126 268 L142 268"/>
  <path d="M306 164 L298 178"/><path d="M350 208 L336 216"/><path d="M350 328 L336 320"/><path d="M306 372 L298 358"/>
  <path d="M186 372 L194 358"/><path d="M142 328 L156 320"/><path d="M142 208 L156 216"/><path d="M186 164 L194 178"/>
</g>
<g stroke="#2c281f" stroke-width="5.4" opacity="0.9">
  <path d="M246 146 L246 170"/><path d="M368 268 L344 268"/><path d="M246 390 L246 366"/><path d="M124 268 L148 268"/>
</g>
<g stroke="#4a463b" stroke-width="1.1" opacity="0.7">
  <path d="M270 150 L268 160"/><path d="M292 156 L288 166"/><path d="M328 182 L321 190"/><path d="M344 202 L336 208"/>
  <path d="M360 240 L350 242"/><path d="M364 254 L354 256"/><path d="M364 282 L354 280"/><path d="M360 296 L350 294"/>
  <path d="M344 334 L336 328"/><path d="M328 354 L321 346"/><path d="M292 380 L288 370"/><path d="M270 386 L268 376"/>
  <path d="M222 386 L224 376"/><path d="M200 380 L204 370"/><path d="M164 354 L171 346"/><path d="M148 334 L156 328"/>
  <path d="M132 296 L142 294"/><path d="M128 282 L138 280"/><path d="M128 254 L138 256"/><path d="M132 240 L142 242"/>
  <path d="M148 202 L156 208"/><path d="M164 182 L171 190"/><path d="M200 156 L204 166"/><path d="M222 150 L224 160"/>
</g>
<circle cx="246" cy="330" r="26" fill="none" stroke="#4a463b" stroke-width="1.2" opacity="0.6"/>
<g stroke="#4a463b" stroke-width="1.4" opacity="0.6">
  <path d="M246 306 L246 312"/><path d="M270 330 L264 330"/><path d="M246 354 L246 348"/><path d="M222 330 L228 330"/>
</g>
<!-- the hands, at five past seven, and the sweep second -->
<path d="M246 268 L188 200 L200 190 L252 262 Z" fill="#242018"/>
<path d="M246 268 L282 154 L292 158 L254 270 Z" fill="#242018"/>
<path d="M246 330 L258 314 L262 316 L250 332 Z" fill="#8d2f26"/>
<circle cx="246" cy="268" r="8" fill="#3a352a"/>
<circle cx="244" cy="266" r="3" fill="#8f887a"/>
<!-- crown and bow, at twelve -->
<rect x="234" y="102" width="24" height="24" rx="5" fill="url(#ev4-watch-case)" stroke="#3b2c10" stroke-width="1.4"/>
<circle cx="246" cy="94" r="20" fill="none" stroke="url(#ev4-watch-case)" stroke-width="10"/>
<circle cx="246" cy="94" r="20" fill="none" stroke="#3b2c10" stroke-width="1.2"/>
<path d="M232 82 Q 240 74 252 76" fill="none" stroke="#fff6cc" stroke-width="2.6" opacity="0.6"/>
<!-- the chain, running off the linen -->
<g stroke="#8d7128" stroke-width="6" fill="none" stroke-linecap="round">
  <path d="M226 86 Q 150 62 60 74"/>
</g>
<g stroke="#e9d189" stroke-width="2.4" fill="none" stroke-linecap="round" opacity="0.75">
  <path d="M226 84 Q 150 60 60 72"/>
</g>
<g fill="none" stroke="#2c2109" stroke-width="1.6">
  <ellipse cx="198" cy="78" rx="10" ry="6" transform="rotate(-12 198 78)"/>
  <ellipse cx="160" cy="70" rx="10" ry="6" transform="rotate(-6 160 70)"/>
  <ellipse cx="120" cy="68" rx="10" ry="6" transform="rotate(2 120 68)"/>
  <ellipse cx="82" cy="70" rx="10" ry="6" transform="rotate(8 82 70)"/>
</g>

<!-- the cigar cutter: two steel blades, an oval frame, the clipped cap in it -->
<ellipse cx="500" cy="228" rx="86" ry="26" fill="#000" opacity="0.35" filter="url(#ev4-watch-soft)"/>
<ellipse cx="496" cy="200" rx="80" ry="44" fill="url(#ev4-watch-steel)"/>
<ellipse cx="496" cy="196" rx="80" ry="44" fill="url(#ev4-watch-steel)"/>
<ellipse cx="496" cy="196" rx="80" ry="44" fill="none" stroke="#2b3134" stroke-width="2"/>
<ellipse cx="496" cy="196" rx="40" ry="26" fill="#1c2124"/>
<ellipse cx="496" cy="196" rx="40" ry="26" fill="none" stroke="#dfe4e6" stroke-width="2" opacity="0.6"/>
<path d="M456 196 L536 196" stroke="#eef2f3" stroke-width="3" opacity="0.85"/>
<path d="M456 200 L536 200" stroke="#3a4144" stroke-width="2" opacity="0.7"/>
<path d="M430 168 Q 470 152 512 156" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.4"/>
<path d="M560 186 Q 574 198 562 214" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.25"/>
<ellipse cx="486" cy="190" rx="15" ry="9" fill="#4a2c15"/>
<ellipse cx="484" cy="188" rx="6" ry="3.4" fill="#8a5a2c" opacity="0.7"/>

<!-- the one spent match, laid straight, the way a careful man leaves it -->
<path d="M406 380 L586 356 L588 370 L408 394 Z" fill="#000" opacity="0.3" filter="url(#ev4-watch-soft)"/>
<path d="M398 366 L578 342 L580 354 L400 378 Z" fill="#d9c9a6"/>
<path d="M398 366 L578 342 L578 346 L398 370 Z" fill="#f6ecd4" opacity="0.7"/>
<path d="M398 366 L432 362 L434 374 L400 378 Z" fill="#4a3a24"/>
<ellipse cx="398" cy="372" rx="12" ry="9" fill="#2a221a"/>
<ellipse cx="394" cy="368" rx="5" ry="3.4" fill="#5c5044" opacity="0.7"/>
<g fill="#1a1512" opacity="0.55">
  <circle cx="418" cy="386" r="2"/><circle cx="440" cy="384" r="1.5"/>
</g>

<rect width="640" height="520" fill="url(#ev4-watch-vig)"/>
`,
  },

  /* THE BRAKEMAN'S STOWAWAY: the guard's lantern set down on the log, and
     beyond it the flank of the train and snow nobody has walked on. */
  c4_brakeman: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-lant-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#1c2231"/><stop offset="0.6" stop-color="#0e1219"/><stop offset="1" stop-color="#05070a"/>
  </linearGradient>
  <linearGradient id="ev4-lant-snow" x1="0.15" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#e6ecf6"/><stop offset="0.35" stop-color="#c2cbdb"/>
    <stop offset="0.72" stop-color="#8d99ae"/><stop offset="1" stop-color="#5b6679"/>
  </linearGradient>
  <linearGradient id="ev4-lant-car" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#3c4152"/><stop offset="0.4" stop-color="#262b38"/><stop offset="1" stop-color="#111520"/>
  </linearGradient>
  <linearGradient id="ev4-lant-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d5b75f"/>
    <stop offset="0.4" stop-color="#faeeb9"/><stop offset="0.64" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <radialGradient id="ev4-lant-flame" cx="0.5" cy="0.6" r="0.6">
    <stop offset="0" stop-color="#fff6d2"/><stop offset="0.35" stop-color="#ffcf72"/>
    <stop offset="0.75" stop-color="#e08a2a" stop-opacity="0.7"/><stop offset="1" stop-color="#a75812" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="ev4-lant-glow" cx="0.42" cy="0.52" r="0.62">
    <stop offset="0" stop-color="#ffd591" stop-opacity="0.55"/><stop offset="1" stop-color="#ffd591" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev4-lant-plank" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#5b4128"/><stop offset="0.4" stop-color="#3c2917"/><stop offset="1" stop-color="#181008"/>
  </linearGradient>
  <filter id="ev4-lant-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev4-lant-vig" cx="0.42" cy="0.44" r="0.8">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-lant-bg)"/>

<!-- the flank of the car, and under it the drift, unbroken from end to end -->
<path d="M0 0 L640 0 L640 214 L0 240 Z" fill="url(#ev4-lant-car)"/>
<g opacity="0.35" stroke="#4d5468" stroke-width="2" fill="none">
  <path d="M0 60 L640 40"/><path d="M0 120 L640 98"/><path d="M0 180 L640 156"/>
</g>
<g opacity="0.3" fill="#5b6379">
  <circle cx="60" cy="30" r="3"/><circle cx="180" cy="26" r="3"/><circle cx="300" cy="20" r="3"/>
  <circle cx="420" cy="16" r="3"/><circle cx="540" cy="12" r="3"/>
  <circle cx="60" cy="150" r="3"/><circle cx="180" cy="146" r="3"/><circle cx="300" cy="140" r="3"/>
  <circle cx="420" cy="134" r="3"/><circle cx="540" cy="130" r="3"/>
</g>
<!-- a sleeper window above, lit dim, the drift climbing at it -->
<rect x="376" y="42" width="180" height="94" rx="4" fill="#3a3a2e"/>
<rect x="384" y="50" width="164" height="78" rx="3" fill="#5d5642" opacity="0.7"/>
<path d="M384 108 Q 440 92 500 104 Q 530 110 548 102 L548 128 L384 128 Z" fill="#d8dfe9" opacity="0.75"/>
<rect x="376" y="42" width="180" height="94" rx="4" fill="none" stroke="#20242c" stroke-width="3"/>
<path d="M392 54 Q 412 78 400 110" fill="none" stroke="#e8eef4" stroke-width="2" opacity="0.25"/>

<!-- the drift: wind-packed, climbing the flank, and NOT walked on -->
<path d="M0 240 Q 140 200 300 216 Q 460 234 640 200 L640 400 L0 430 Z" fill="url(#ev4-lant-snow)"/>
<path d="M0 240 Q 140 200 300 216 Q 460 234 640 200" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.6"/>
<g opacity="0.4" stroke="#8d99ae" stroke-width="2" fill="none">
  <path d="M0 288 Q 150 254 306 268 Q 466 286 640 252"/>
  <path d="M0 336 Q 150 304 306 318 Q 466 336 640 302"/>
  <path d="M0 384 Q 150 352 306 366 Q 466 384 640 350"/>
</g>
<g opacity="0.45" stroke="#ffffff" stroke-width="1.6" fill="none">
  <path d="M0 264 Q 150 230 306 244 Q 466 262 640 228"/>
  <path d="M0 360 Q 150 328 306 342 Q 466 360 640 326"/>
</g>
<!-- wind ripples: the only marks in it -->
<g opacity="0.35" fill="#ffffff">
  <ellipse cx="90" cy="300" rx="46" ry="8"/><ellipse cx="250" cy="286" rx="52" ry="8"/>
  <ellipse cx="420" cy="300" rx="48" ry="8"/><ellipse cx="570" cy="272" rx="42" ry="7"/>
  <ellipse cx="160" cy="356" rx="50" ry="8"/><ellipse cx="350" cy="356" rx="54" ry="8"/>
  <ellipse cx="530" cy="336" rx="46" ry="7"/>
</g>

<!-- the plank end of the guard's van, and the log book laid on it -->
<path d="M0 396 Q 320 424 640 384 L640 520 L0 520 Z" fill="url(#ev4-lant-plank)"/>
<path d="M0 396 Q 320 424 640 384 L640 402 Q 320 442 0 414 Z" fill="#8d6238" opacity="0.35"/>
<g opacity="0.25" stroke="#7d5530" stroke-width="1.6" fill="none">
  <path d="M0 452 Q 320 480 640 440"/><path d="M0 500 Q 320 518 640 486"/>
</g>
<path d="M60 434 L360 414 L372 502 L72 520 Z" fill="#e6dfc9"/>
<path d="M60 434 L360 414 L361 426 L61 446 Z" fill="#fbf7e8" opacity="0.6"/>
<g stroke="#9aa4b4" stroke-width="1.1" opacity="0.6" fill="none">
  <path d="M74 456 L352 437"/><path d="M76 474 L354 455"/><path d="M78 492 L356 473"/><path d="M80 510 L358 491"/>
</g>
<path d="M104 428 L112 516" fill="none" stroke="#b6553f" stroke-width="1.4" opacity="0.5"/>
<g stroke="#232028" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.85">
  <path d="M122 452 q 18 -8 34 -1 q 16 7 32 -2 q 16 -7 30 1 q 18 7 34 -2"/>
  <path d="M124 470 q 20 -8 36 -1 q 16 7 32 -2 q 16 -7 30 1"/>
  <path d="M126 488 q 18 -8 34 -1 q 16 7 32 -2 q 18 -7 34 1 q 16 7 30 -2"/>
</g>
<g stroke="#344056" stroke-width="2.2" stroke-linecap="round" fill="none" opacity="0.8">
  <path d="M80 448 q 12 -7 22 -1"/><path d="M82 466 q 12 -7 22 -1"/><path d="M84 484 q 12 -7 22 -1"/>
</g>

<!-- the lantern, set on the log, throwing the only warm light on the mountain -->
<ellipse cx="470" cy="500" rx="130" ry="34" fill="#000" opacity="0.55" filter="url(#ev4-lant-soft)"/>
<ellipse cx="470" cy="470" rx="150" ry="90" fill="url(#ev4-lant-glow)"/>
<path d="M406 462 L534 452 L546 500 L396 512 Z" fill="url(#ev4-lant-brass)"/>
<path d="M406 462 L534 452 L535 464 L407 474 Z" fill="#fff3c0" opacity="0.5"/>
<path d="M400 488 L542 476 L546 500 L396 512 Z" fill="#3b2c10" opacity="0.6"/>
<path d="M414 262 L526 254 L532 300 L410 308 Z" fill="url(#ev4-lant-brass)"/>
<path d="M414 262 L526 254 L526 266 L414 274 Z" fill="#fff3c0" opacity="0.45"/>
<path d="M420 306 L522 298 L534 460 L408 470 Z" fill="#221806" opacity="0.6"/>
<!-- the globe: ribbed glass with the flame behind it -->
<path d="M436 306 L508 300 L520 452 L426 460 Z" fill="url(#ev4-lant-flame)"/>
<path d="M436 306 L508 300 L520 452 L426 460 Z" fill="#ffd9a0" opacity="0.25"/>
<g stroke="#fff2cc" stroke-width="2" opacity="0.4" fill="none">
  <path d="M452 302 L460 456"/><path d="M472 300 L478 454"/><path d="M492 299 L498 453"/>
</g>
<ellipse cx="470" cy="392" rx="20" ry="42" fill="url(#ev4-lant-flame)"/>
<ellipse cx="470" cy="392" rx="9" ry="24" fill="#fff8de"/>
<path d="M470 358 Q 480 384 470 420 Q 460 384 470 358 Z" fill="#ffffff" opacity="0.85"/>
<!-- the guards and the bail -->
<g stroke="#8d7128" stroke-width="8" fill="none">
  <path d="M424 306 L418 460"/><path d="M520 300 L526 452"/>
</g>
<g stroke="#e9d189" stroke-width="2.6" fill="none" opacity="0.7">
  <path d="M423 308 L417 458"/><path d="M519 302 L525 450"/>
</g>
<path d="M420 178 Q 470 140 524 176" fill="none" stroke="#8d7128" stroke-width="9"/>
<path d="M420 178 Q 470 140 524 176" fill="none" stroke="#e9d189" stroke-width="3.4" opacity="0.75"/>
<path d="M414 262 Q 420 216 420 178" fill="none" stroke="#8d7128" stroke-width="7"/>
<path d="M526 254 Q 522 214 524 176" fill="none" stroke="#8d7128" stroke-width="7"/>
<ellipse cx="470" cy="252" rx="34" ry="10" fill="url(#ev4-lant-brass)" stroke="#3b2c10" stroke-width="1.4"/>
<ellipse cx="462" cy="249" rx="12" ry="4" fill="#fff6cc" opacity="0.55"/>

<rect width="640" height="520" fill="url(#ev4-lant-vig)"/>
`,
  },

  /* ONE ROOM, TWO NUMBERS: the connecting door standing open the way it
     stood open all day, and the single key that opens both. */
  c4_bothrooms: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-two-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2015"/><stop offset="0.6" stop-color="#140e09"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-two-mahog" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#8f532c"/><stop offset="0.3" stop-color="#68391e"/>
    <stop offset="0.7" stop-color="#442414"/><stop offset="1" stop-color="#24130a"/>
  </linearGradient>
  <linearGradient id="ev4-two-far" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#5a4a2c"/><stop offset="0.4" stop-color="#3a2f1a"/><stop offset="1" stop-color="#170f07"/>
  </linearGradient>
  <linearGradient id="ev4-two-baize" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#4c5a3c"/><stop offset="0.5" stop-color="#33402a"/><stop offset="1" stop-color="#1a2116"/>
  </linearGradient>
  <linearGradient id="ev4-two-glass" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#9fa9b0"/><stop offset="0.4" stop-color="#c2cbd0"/><stop offset="1" stop-color="#5f696f"/>
  </linearGradient>
  <linearGradient id="ev4-two-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d5b75f"/>
    <stop offset="0.4" stop-color="#faeeb9"/><stop offset="0.64" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <linearGradient id="ev4-two-fob" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#7a5330"/><stop offset="0.35" stop-color="#54371f"/><stop offset="1" stop-color="#251708"/>
  </linearGradient>
  <filter id="ev4-two-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-two-vig" cx="0.44" cy="0.44" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-two-bg)"/>

<!-- this room's wall: green baize above a mahogany dado -->
<rect width="640" height="520" fill="url(#ev4-two-baize)"/>
<g opacity="0.18" stroke="#6d7d54" stroke-width="1" fill="none">
  <path d="M0 40 L640 34"/><path d="M0 96 L640 90"/><path d="M0 152 L640 146"/><path d="M0 208 L640 202"/>
  <path d="M0 264 L640 258"/><path d="M0 320 L640 314"/><path d="M0 376 L640 370"/><path d="M0 432 L640 426"/>
</g>
<rect x="0" y="418" width="640" height="102" fill="url(#ev4-two-mahog)"/>
<rect x="0" y="418" width="640" height="12" fill="#c4834d" opacity="0.35"/>
<g opacity="0.2" stroke="#95582f" stroke-width="1.4" fill="none">
  <path d="M0 460 L640 454"/><path d="M0 500 L640 494"/>
</g>

<!-- the doorway between the two rooms, and the door standing wide open -->
<rect x="112" y="24" width="332" height="430" fill="#100a06"/>
<rect x="112" y="24" width="332" height="430" fill="none" stroke="#2c160b" stroke-width="14"/>
<rect x="122" y="34" width="312" height="410" fill="url(#ev4-two-far)"/>
<!-- the other compartment, seen through: its window, its berth, its lamp -->
<rect x="164" y="86" width="230" height="150" rx="4" fill="#2f2a1e"/>
<rect x="174" y="96" width="210" height="130" rx="3" fill="url(#ev4-two-glass)" opacity="0.7"/>
<path d="M174 158 Q 232 138 292 152 Q 344 164 384 148 L384 226 L174 226 Z" fill="#d3dae2" opacity="0.8"/>
<path d="M174 158 Q 232 138 292 152 Q 344 164 384 148" fill="none" stroke="#f2f6f9" stroke-width="3" opacity="0.6"/>
<rect x="164" y="86" width="230" height="150" rx="4" fill="none" stroke="#1b1710" stroke-width="5"/>
<path d="M132 252 L424 244 L430 330 L128 340 Z" fill="#4a3c22"/>
<path d="M132 252 L424 244 L424 258 L132 266 Z" fill="#8a7040" opacity="0.4"/>
<path d="M128 340 L430 330 L432 402 L126 414 Z" fill="#33290f"/>
<g opacity="0.28" stroke="#7d6438" stroke-width="1.2" fill="none">
  <path d="M138 300 L422 292"/><path d="M136 366 L430 356"/>
</g>
<ellipse cx="286" cy="66" rx="30" ry="14" fill="#ffcf86" opacity="0.32"/>
<ellipse cx="286" cy="66" rx="13" ry="7" fill="#ffe6b6" opacity="0.7"/>
<!-- a typewriter case standing in the far room: the secretary's trade -->
<path d="M296 268 L410 262 L416 322 L300 330 Z" fill="#241a10"/>
<path d="M296 268 L410 262 L410 274 L296 280 Z" fill="#5c4830" opacity="0.6"/>
<path d="M320 262 L386 258 L388 268 L322 272 Z" fill="#3a2c1a"/>

<!-- THE DOOR, hinged back against this wall, flat to us -->
<path d="M446 20 L636 8 L640 470 L452 456 Z" fill="url(#ev4-two-mahog)"/>
<g opacity="0.3" stroke="#a3663a" stroke-width="1.4" fill="none">
  <path d="M470 16 Q 462 180 472 340 Q 466 420 474 458"/>
  <path d="M520 13 Q 530 190 518 350 Q 526 424 516 460"/>
  <path d="M572 10 Q 564 180 574 344 Q 568 424 576 462"/>
  <path d="M620 8 Q 630 190 618 352"/>
</g>
<path d="M462 52 L622 42 L626 434 L468 424 Z" fill="none" stroke="#2c160b" stroke-width="7"/>
<path d="M462 52 L622 42 L614 58 L472 66 Z" fill="#c07f4c" opacity="0.3"/>
<path d="M622 42 L626 434 L616 418 L614 58 Z" fill="#180b05" opacity="0.5"/>
<rect x="478" y="72" width="128" height="342" fill="#5c3018" opacity="0.5"/>
<!-- its bolt, standing OPEN: the handle lies flat along the stile -->
<rect x="452" y="212" width="26" height="86" rx="6" fill="url(#ev4-two-brass)" stroke="#2f2309" stroke-width="1.6"/>
<rect x="456" y="216" width="18" height="10" rx="4" fill="#fff5c8" opacity="0.45"/>
<rect x="458" y="228" width="14" height="60" rx="6" fill="#120c04"/>
<ellipse cx="465" cy="240" rx="14" ry="10" fill="url(#ev4-two-brass)" stroke="#2f2309" stroke-width="1.6"/>
<ellipse cx="461" cy="237" rx="6" ry="3.4" fill="#fff8d4" opacity="0.6"/>

<!-- ONE KEY. On a leather fob, hanging in this door's lock. -->
<ellipse cx="86" cy="332" rx="54" ry="20" fill="#000" opacity="0.5" filter="url(#ev4-two-soft)"/>
<rect x="34" y="212" width="76" height="106" rx="6" fill="url(#ev4-two-brass)" stroke="#2f2309" stroke-width="2"/>
<rect x="40" y="218" width="64" height="14" rx="5" fill="#fff5c8" opacity="0.45"/>
<rect x="40" y="302" width="64" height="10" rx="4" fill="#241a06" opacity="0.5"/>
<circle cx="44" cy="222" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<circle cx="100" cy="222" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<circle cx="44" cy="308" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<circle cx="100" cy="308" r="5" fill="#a3862f" stroke="#241a06" stroke-width="1"/>
<path d="M64 254 L80 254 L84 276 L60 276 Z" fill="#0e0903"/>
<circle cx="72" cy="252" r="9" fill="#0e0903"/>
<!-- the key in the lock, its bow and its single bit -->
<circle cx="72" cy="252" r="7" fill="url(#ev4-two-brass)"/>
<path d="M66 252 L78 252 L80 300 L64 300 Z" fill="url(#ev4-two-brass)" stroke="#2f2309" stroke-width="1.2"/>
<path d="M67 254 L71 254 L72 298" fill="none" stroke="#fff6cc" stroke-width="2" opacity="0.6"/>
<circle cx="72" cy="318" r="22" fill="none" stroke="url(#ev4-two-brass)" stroke-width="11"/>
<circle cx="72" cy="318" r="22" fill="none" stroke="#2f2309" stroke-width="1.2"/>
<path d="M56 306 Q 66 296 80 300" fill="none" stroke="#fff6cc" stroke-width="2.6" opacity="0.6"/>
<!-- the leather tag: one tag, on one key, for two doors -->
<path d="M62 340 Q 72 334 84 340 L96 424 Q 72 438 50 424 Z" fill="url(#ev4-two-fob)"/>
<path d="M62 340 Q 72 334 84 340 L88 424 Q 76 430 68 428 L58 356 Z" fill="#a3764a" opacity="0.25"/>
<g stroke="#a3764a" stroke-width="2" stroke-linecap="round" opacity="0.6" fill="none">
  <path d="M60 352 L52 420" stroke-dasharray="6 6"/><path d="M86 352 L94 420" stroke-dasharray="6 6"/>
</g>
<ellipse cx="73" cy="346" rx="7" ry="5" fill="#140c05"/>
<ellipse cx="73" cy="346" rx="7" ry="5" fill="none" stroke="#c49766" stroke-width="1.4" opacity="0.6"/>
<path d="M62 384 L88 381" fill="none" stroke="#241608" stroke-width="2" opacity="0.5"/>
<path d="M64 398 L90 395" fill="none" stroke="#241608" stroke-width="2" opacity="0.4"/>

<rect width="640" height="520" fill="url(#ev4-two-vig)"/>
`,
  },

  /* THE ENVELOPE AT 7:15: thick, gummed, and carried away again unopened.
     The last confirmed sight of Ambrose Keene alive. */
  c4_vossvisit: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-env-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2117"/><stop offset="0.6" stop-color="#140f09"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-env-door" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#7e4926"/><stop offset="0.3" stop-color="#5b331b"/>
    <stop offset="0.7" stop-color="#3c2112"/><stop offset="1" stop-color="#1f1109"/>
  </linearGradient>
  <linearGradient id="ev4-env-ledge" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#9a5c31"/><stop offset="0.3" stop-color="#68391e"/><stop offset="1" stop-color="#251409"/>
  </linearGradient>
  <linearGradient id="ev4-env-paper" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#f8f3e2"/><stop offset="0.26" stop-color="#e9e1c9"/>
    <stop offset="0.66" stop-color="#c6ba9a"/><stop offset="1" stop-color="#948a6f"/>
  </linearGradient>
  <linearGradient id="ev4-env-flap" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#efe8d2"/><stop offset="0.5" stop-color="#d4c9aa"/><stop offset="1" stop-color="#a4997c"/>
  </linearGradient>
  <radialGradient id="ev4-env-night" cx="0.68" cy="0.08" r="0.6">
    <stop offset="0" stop-color="#ffcf86" stop-opacity="0.45"/><stop offset="1" stop-color="#ffcf86" stop-opacity="0"/>
  </radialGradient>
  <filter id="ev4-env-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-env-vig" cx="0.46" cy="0.44" r="0.78">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-env-bg)"/>

<!-- the corridor door, at night, with the night-light above it -->
<rect x="0" y="0" width="640" height="352" fill="url(#ev4-env-door)"/>
<rect width="640" height="360" fill="url(#ev4-env-night)"/>
<g opacity="0.3" stroke="#a3663a" stroke-width="1.5" fill="none">
  <path d="M46 0 Q 38 130 48 270 Q 42 326 50 352"/>
  <path d="M148 0 Q 158 140 146 280 Q 154 330 144 352"/>
  <path d="M268 0 Q 260 130 270 272"/>
  <path d="M392 0 Q 402 150 390 290"/>
  <path d="M512 0 Q 504 130 514 274"/>
  <path d="M604 0 Q 614 140 602 282"/>
</g>
<path d="M64 34 L288 34 L288 296 L64 296 Z" fill="none" stroke="#2c160b" stroke-width="7"/>
<path d="M64 34 L288 34 L278 48 L74 48 Z" fill="#c07f4c" opacity="0.28"/>
<path d="M288 34 L288 296 L278 282 L278 48 Z" fill="#180b05" opacity="0.5"/>
<rect x="80" y="54" width="192" height="222" fill="#5c3018" opacity="0.45"/>
<path d="M352 34 L576 34 L576 296 L352 296 Z" fill="none" stroke="#2c160b" stroke-width="7"/>
<path d="M352 34 L576 34 L566 48 L362 48 Z" fill="#c07f4c" opacity="0.22"/>
<rect x="368" y="54" width="192" height="222" fill="#5c3018" opacity="0.4"/>
<!-- the brass night-light shade, throwing a wedge down the door -->
<path d="M392 0 L484 0 L502 30 L374 30 Z" fill="#6d5721"/>
<path d="M392 0 L484 0 L488 8 L390 8 Z" fill="#e3c979" opacity="0.5"/>
<ellipse cx="438" cy="32" rx="52" ry="12" fill="#ffe6b6" opacity="0.5"/>
<ellipse cx="438" cy="30" rx="22" ry="7" fill="#fff6d8" opacity="0.8"/>
<path d="M374 30 Q 438 44 502 30 L604 352 L280 352 Z" fill="#ffd591" opacity="0.09"/>

<!-- the mahogany hand-ledge that runs the corridor -->
<rect x="0" y="308" width="640" height="24" fill="#2c1a0d"/>
<path d="M0 330 L640 330 L640 388 L0 396 Z" fill="url(#ev4-env-ledge)"/>
<path d="M0 330 L640 330 L640 344 L0 350 Z" fill="#d09354" opacity="0.4"/>
<path d="M0 380 L640 372 L640 388 L0 396 Z" fill="#150c05" opacity="0.7"/>
<path d="M0 396 L640 388 L640 520 L0 520 Z" fill="#1a1109"/>
<g opacity="0.22" stroke="#7d4a28" stroke-width="1.4" fill="none">
  <path d="M0 440 L640 430"/><path d="M0 482 L640 470"/>
</g>

<!-- THE ENVELOPE, laid on the ledge: thick, gummed, never opened -->
<path d="M136 306 L520 288 L534 384 L150 406 Z" fill="#000" opacity="0.5" filter="url(#ev4-env-soft)"/>
<path d="M128 292 L512 274 L524 366 L140 388 Z" fill="url(#ev4-env-paper)"/>
<path d="M128 292 L512 274 L513 288 L129 306 Z" fill="#fffcf0" opacity="0.55"/>
<path d="M516 342 L524 366 L140 388 L136 364 Z" fill="#8a8067" opacity="0.3"/>
<!-- the flap, gummed down, its two seams showing through -->
<path d="M128 292 L320 322 L512 274" fill="none" stroke="#a89d80" stroke-width="2.2" opacity="0.7"/>
<path d="M128 292 L320 322 L512 274 L512 280 L320 328 L128 298 Z" fill="url(#ev4-env-flap)"/>
<path d="M128 292 L320 322 L320 328 L128 298 Z" fill="#fffdf2" opacity="0.5"/>
<path d="M134 300 L318 330" fill="none" stroke="#c8bd9c" stroke-width="1.2" opacity="0.6"/>
<!-- it is fat: the banknotes inside push the paper into ridges -->
<g opacity="0.35" stroke="#a3987c" stroke-width="1.6" fill="none">
  <path d="M152 340 L500 322"/><path d="M154 356 L502 338"/>
</g>
<path d="M144 330 Q 320 318 508 306" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.2"/>
<ellipse cx="330" cy="352" rx="150" ry="14" fill="#8a8067" opacity="0.2"/>
<!-- a thumb has been pressed on this corner, more than once -->
<g opacity="0.16" fill="none" stroke="#7a6f56" stroke-width="1.2">
  <path d="M188 336 q 12 10 0 20"/><path d="M196 332 q 17 14 0 28"/><path d="M204 328 q 22 18 0 36"/>
</g>
<!-- the doctor's glove, set down beside it, still holding her hand's shape -->
<path d="M540 328 Q 590 312 626 330 Q 636 356 610 372 Q 566 384 538 366 Q 526 344 540 328 Z" fill="#2a2b30"/>
<path d="M540 328 Q 590 312 626 330 Q 600 336 570 344 Q 548 350 538 366 Q 528 344 540 328 Z" fill="#4d4f57" opacity="0.6"/>
<g stroke="#15161a" stroke-width="2" opacity="0.7" fill="none">
  <path d="M566 340 Q 578 356 566 372"/><path d="M590 336 Q 602 352 590 370"/><path d="M612 334 Q 622 348 612 364"/>
</g>
<path d="M544 332 Q 584 320 618 332" fill="none" stroke="#7e828c" stroke-width="1.6" opacity="0.45"/>

<rect width="640" height="520" fill="url(#ev4-env-vig)"/>
`,
  },

  /* THE PAYMENT REFUSED: the envelope opened at last, the banded notes all
     present, on the lid of a surgeon's instrument case. */
  c4_refused: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-ref-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#241d15"/><stop offset="0.6" stop-color="#110d08"/><stop offset="1" stop-color="#060403"/>
  </linearGradient>
  <linearGradient id="ev4-ref-case" x1="0.05" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#4e3826"/><stop offset="0.24" stop-color="#372618"/>
    <stop offset="0.62" stop-color="#23180f"/><stop offset="1" stop-color="#100a06"/>
  </linearGradient>
  <linearGradient id="ev4-ref-paper" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#f8f3e2"/><stop offset="0.28" stop-color="#e9e1c9"/>
    <stop offset="0.68" stop-color="#c4b898"/><stop offset="1" stop-color="#918770"/>
  </linearGradient>
  <linearGradient id="ev4-ref-note" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#d8e2cf"/><stop offset="0.3" stop-color="#bccdb2"/>
    <stop offset="0.7" stop-color="#93a68c"/><stop offset="1" stop-color="#6a7a66"/>
  </linearGradient>
  <linearGradient id="ev4-ref-band" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#e0d7bc"/><stop offset="0.5" stop-color="#c2b795"/><stop offset="1" stop-color="#8e846a"/>
  </linearGradient>
  <linearGradient id="ev4-ref-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.22" stop-color="#d5b75f"/>
    <stop offset="0.44" stop-color="#faeeb9"/><stop offset="0.68" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <filter id="ev4-ref-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-ref-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-ref-bg)"/>

<!-- the surgeon's case: black grained leather, brass corners, a strap -->
<path d="M0 118 L640 82 L640 520 L0 520 Z" fill="url(#ev4-ref-case)"/>
<path d="M0 118 L640 82 L640 104 L0 140 Z" fill="#7a5f42" opacity="0.35"/>
<g opacity="0.14" fill="#8a6f4c">
  <circle cx="70" cy="190" r="2.6"/><circle cx="180" cy="230" r="2.2"/><circle cx="300" cy="180" r="2.8"/>
  <circle cx="420" cy="240" r="2.4"/><circle cx="540" cy="190" r="2.6"/><circle cx="120" cy="400" r="2.4"/>
  <circle cx="260" cy="450" r="2.2"/><circle cx="470" cy="430" r="2.8"/><circle cx="590" cy="360" r="2.4"/>
</g>
<path d="M0 158 L640 122 L642 176 L0 212 Z" fill="#191108" opacity="0.5"/>
<!-- the case's strap and its brass buckle running down the right -->
<path d="M496 96 L560 92 L578 520 L512 520 Z" fill="#2e2115"/>
<path d="M496 96 L520 95 L534 520 L512 520 Z" fill="#6b5236" opacity="0.35"/>
<g stroke="#8d7350" stroke-width="2" stroke-linecap="round" opacity="0.5" fill="none">
  <path d="M506 104 L522 516" stroke-dasharray="8 8"/><path d="M552 100 L570 516" stroke-dasharray="8 8"/>
</g>
<rect x="490" y="300" width="88" height="54" rx="7" fill="none" stroke="url(#ev4-ref-brass)" stroke-width="14"/>
<rect x="490" y="300" width="88" height="54" rx="7" fill="none" stroke="#2d2109" stroke-width="1.4"/>
<path d="M498 306 L498 348" fill="none" stroke="#fff6cc" stroke-width="4" opacity="0.55"/>
<rect x="484" y="318" width="102" height="14" rx="5" fill="url(#ev4-ref-brass)" stroke="#2d2109" stroke-width="1.2"/>
<path d="M488 322 L582 322" stroke="#fff6cc" stroke-width="2" opacity="0.6"/>

<!-- THE ENVELOPE, slit open at the top now, its flap standing up -->
<path d="M46 224 L432 190 L452 424 L66 462 Z" fill="#000" opacity="0.5" filter="url(#ev4-ref-soft)"/>
<path d="M38 210 L424 176 L442 406 L56 444 Z" fill="url(#ev4-ref-paper)"/>
<path d="M38 210 L424 176 L425 192 L39 226 Z" fill="#fffcf0" opacity="0.55"/>
<path d="M434 380 L442 406 L56 444 L52 418 Z" fill="#8a8067" opacity="0.3"/>
<path d="M30 186 L416 152 L424 176 L38 210 Z" fill="url(#ev4-ref-band)"/>
<path d="M30 186 L416 152 L416 160 L30 194 Z" fill="#fffdf2" opacity="0.55"/>
<g stroke="#a89d80" stroke-width="1.2" opacity="0.6" fill="none">
  <path d="M46 240 L418 206"/><path d="M50 288 L422 254"/>
</g>
<!-- the slit edge, torn a little raggedly by a steady hand in a hurry -->
<g stroke="#b7ab8b" stroke-width="1.6" opacity="0.7" fill="none">
  <path d="M40 208 l 10 6"/><path d="M96 202 l 8 7"/><path d="M164 196 l 10 6"/>
  <path d="M240 190 l 8 7"/><path d="M320 182 l 10 6"/><path d="M392 176 l 8 7"/>
</g>

<!-- the banded notes, standing out of it, every one of them still there -->
<g>
  <path d="M92 244 L378 218 L390 336 L104 366 Z" fill="url(#ev4-ref-note)"/>
  <path d="M92 244 L378 218 L379 230 L93 258 Z" fill="#eef4e8" opacity="0.6"/>
  <path d="M96 268 L376 242" fill="none" stroke="#5e7060" stroke-width="1.6" opacity="0.6"/>
  <path d="M100 312 L380 286" fill="none" stroke="#5e7060" stroke-width="1.6" opacity="0.5"/>
  <ellipse cx="238" cy="292" rx="52" ry="34" fill="none" stroke="#5e7060" stroke-width="2.4" opacity="0.5"/>
  <ellipse cx="238" cy="292" rx="34" ry="22" fill="#a8bba0" opacity="0.4"/>
  <g stroke="#5e7060" stroke-width="0.9" opacity="0.5" fill="none">
    <path d="M104 254 q 22 -8 44 -1 q 22 8 44 -2 q 22 -8 44 -1 q 22 8 44 -2 q 22 -8 44 -1"/>
    <path d="M110 350 q 22 -8 44 -1 q 22 8 44 -2 q 22 -8 44 -1 q 22 8 44 -2"/>
  </g>
  <g fill="#3f5245" opacity="0.75">
    <rect x="118" y="278" width="34" height="9" rx="2" transform="rotate(-5.2 118 278)"/>
    <rect x="316" y="260" width="34" height="9" rx="2" transform="rotate(-5.2 316 260)"/>
    <rect x="120" y="316" width="26" height="8" rx="2" transform="rotate(-5.2 120 316)"/>
    <rect x="322" y="298" width="26" height="8" rx="2" transform="rotate(-5.2 322 298)"/>
  </g>
</g>
<!-- the edges of the rest of the bundle, and the paper band round it -->
<g stroke="#7f8f79" stroke-width="1.2" opacity="0.6" fill="none">
  <path d="M100 350 L386 324"/><path d="M102 358 L388 332"/><path d="M104 366 L390 340"/>
</g>
<path d="M180 232 L232 227 L246 372 L194 378 Z" fill="url(#ev4-ref-band)"/>
<path d="M180 232 L232 227 L233 240 L181 245 Z" fill="#fffdf2" opacity="0.55"/>
<path d="M238 336 L246 372 L194 378 L188 342 Z" fill="#8e846a" opacity="0.35"/>
<path d="M182 288 L236 283" fill="none" stroke="#8e846a" stroke-width="1.4" opacity="0.6"/>

<!-- her spectacles, folded, laid on the case beside it -->
<path d="M300 428 L560 400 L566 440 L306 468 Z" fill="#000" opacity="0.35" filter="url(#ev4-ref-soft)"/>
<circle cx="356" cy="424" r="36" fill="none" stroke="#8d7128" stroke-width="6"/>
<circle cx="356" cy="424" r="36" fill="#cfd8dc" opacity="0.14"/>
<circle cx="356" cy="424" r="36" fill="none" stroke="#e9d189" stroke-width="1.6" opacity="0.6"/>
<circle cx="452" cy="414" r="36" fill="none" stroke="#8d7128" stroke-width="6"/>
<circle cx="452" cy="414" r="36" fill="#cfd8dc" opacity="0.12"/>
<circle cx="452" cy="414" r="36" fill="none" stroke="#e9d189" stroke-width="1.6" opacity="0.6"/>
<path d="M392 420 Q 404 410 416 418" fill="none" stroke="#8d7128" stroke-width="5"/>
<path d="M392 418 Q 404 408 416 416" fill="none" stroke="#e9d189" stroke-width="1.6" opacity="0.6"/>
<path d="M488 410 Q 540 402 566 418" fill="none" stroke="#8d7128" stroke-width="5"/>
<path d="M488 408 Q 540 400 566 416" fill="none" stroke="#e9d189" stroke-width="1.4" opacity="0.55"/>
<path d="M330 404 Q 348 392 372 396" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.35"/>
<path d="M426 394 Q 444 382 468 386" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.3"/>

<rect width="640" height="520" fill="url(#ev4-ref-vig)"/>
`,
  },

  /* 'HE CALLED ME PORTER': thirty years of the same tunic. Brass buttons,
     white gloves, the cloth that is always in his hand. */
  c4_wrongname: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-tunic-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#241d16"/><stop offset="0.6" stop-color="#110d08"/><stop offset="1" stop-color="#060403"/>
  </linearGradient>
  <linearGradient id="ev4-tunic-cloth" x1="0.06" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#4c4a3f"/><stop offset="0.22" stop-color="#37362d"/>
    <stop offset="0.6" stop-color="#232219"/><stop offset="1" stop-color="#100f0b"/>
  </linearGradient>
  <linearGradient id="ev4-tunic-collar" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#5e5b4d"/><stop offset="0.4" stop-color="#403e33"/><stop offset="1" stop-color="#1e1d16"/>
  </linearGradient>
  <linearGradient id="ev4-tunic-brass" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#6a5220"/><stop offset="0.18" stop-color="#dcbe66"/>
    <stop offset="0.36" stop-color="#fdf4c8"/><stop offset="0.6" stop-color="#a98b38"/>
    <stop offset="0.82" stop-color="#e6cd7e"/><stop offset="1" stop-color="#453314"/>
  </linearGradient>
  <linearGradient id="ev4-tunic-glove" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fdfbf2"/><stop offset="0.32" stop-color="#eee9d8"/>
    <stop offset="0.72" stop-color="#c8c2ae"/><stop offset="1" stop-color="#948e7c"/>
  </linearGradient>
  <filter id="ev4-tunic-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-tunic-vig" cx="0.42" cy="0.4" r="0.78">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-tunic-bg)"/>

<!-- the pantry shelf behind, with a ranked siphon in the dark -->
<path d="M0 380 L640 356 L640 520 L0 520 Z" fill="#241a11"/>
<path d="M0 380 L640 356 L640 372 L0 396 Z" fill="#8d6238" opacity="0.3"/>
<g opacity="0.2" stroke="#7d5530" stroke-width="1.4" fill="none">
  <path d="M0 440 Q 320 420 640 402"/><path d="M0 496 Q 320 472 640 452"/>
</g>

<!-- THE TUNIC: the front of it, buttoned to the throat, cropped close -->
<path d="M96 0 Q 150 88 156 520 L520 520 Q 528 84 570 0 Z" fill="url(#ev4-tunic-cloth)"/>
<path d="M96 0 Q 150 88 156 520 L240 520 Q 232 92 196 0 Z" fill="#5e5c4e" opacity="0.30"/>
<path d="M470 0 Q 500 96 486 520 L520 520 Q 528 84 570 0 Z" fill="#0d0c09" opacity="0.5"/>
<!-- the button placket, lit down one edge -->
<path d="M282 0 L376 0 Q 372 260 372 520 L286 520 Q 286 260 282 0 Z" fill="#3f3d33"/>
<path d="M282 0 L306 0 Q 306 260 306 520 L286 520 Q 286 260 282 0 Z" fill="#6d6a58" opacity="0.5"/>
<path d="M356 0 L376 0 Q 372 260 372 520 L354 520 Q 356 260 356 0 Z" fill="#131209" opacity="0.6"/>
<path d="M278 0 Q 278 260 282 520" fill="none" stroke="#1a1913" stroke-width="3"/>
<path d="M380 0 Q 376 260 376 520" fill="none" stroke="#1a1913" stroke-width="3"/>
<g stroke="#6d6a58" stroke-width="1.2" stroke-dasharray="7 7" opacity="0.55" fill="none">
  <path d="M290 6 Q 290 262 292 514"/><path d="M366 6 Q 364 262 364 514"/>
</g>

<!-- the collar, high and closed, the way a man wears it for thirty years -->
<path d="M96 0 Q 150 88 156 132 Q 254 178 330 180 Q 412 178 508 130 Q 528 84 570 0 Z" fill="url(#ev4-tunic-collar)"/>
<path d="M96 0 Q 150 88 156 132 Q 200 152 250 166 Q 214 92 196 0 Z" fill="#75725f" opacity="0.35"/>
<path d="M156 132 Q 254 178 330 180 Q 412 178 508 130" fill="none" stroke="#0e0d09" stroke-width="4" opacity="0.7"/>
<path d="M164 118 Q 256 162 330 164 Q 410 162 500 116" fill="none" stroke="#8e8b74" stroke-width="2" opacity="0.4"/>
<!-- the collar devices: two plain brass ovals, no letters on them -->
<path d="M168 88 L212 106 L206 128 L162 108 Z" fill="url(#ev4-tunic-brass)" stroke="#33260d" stroke-width="1.6"/>
<path d="M170 92 L208 108 L207 114 L169 98 Z" fill="#fff8d4" opacity="0.55"/>
<path d="M176 100 L200 110" stroke="#5c4718" stroke-width="1.4" opacity="0.7"/>
<path d="M496 86 L452 104 L458 126 L502 106 Z" fill="url(#ev4-tunic-brass)" stroke="#33260d" stroke-width="1.6"/>
<path d="M494 90 L456 106 L457 112 L495 96 Z" fill="#fff8d4" opacity="0.45"/>
<path d="M488 98 L464 108" stroke="#5c4718" stroke-width="1.4" opacity="0.6"/>

<!-- the buttons: five of them, polished tonight as they are every night -->
<g>
  <circle cx="330" cy="212" r="27" fill="url(#ev4-tunic-brass)" stroke="#33260d" stroke-width="2"/>
  <circle cx="330" cy="212" r="19" fill="none" stroke="#6d5620" stroke-width="2" opacity="0.7"/>
  <ellipse cx="320" cy="202" rx="10" ry="6" fill="#fff8d4" opacity="0.7"/>
  <circle cx="330" cy="212" r="7" fill="#8a6e28" opacity="0.6"/>
  <circle cx="330" cy="288" r="27" fill="url(#ev4-tunic-brass)" stroke="#33260d" stroke-width="2"/>
  <circle cx="330" cy="288" r="19" fill="none" stroke="#6d5620" stroke-width="2" opacity="0.7"/>
  <ellipse cx="320" cy="278" rx="10" ry="6" fill="#fff8d4" opacity="0.65"/>
  <circle cx="330" cy="288" r="7" fill="#8a6e28" opacity="0.6"/>
  <circle cx="330" cy="364" r="27" fill="url(#ev4-tunic-brass)" stroke="#33260d" stroke-width="2"/>
  <circle cx="330" cy="364" r="19" fill="none" stroke="#6d5620" stroke-width="2" opacity="0.7"/>
  <ellipse cx="320" cy="354" rx="10" ry="6" fill="#fff8d4" opacity="0.6"/>
  <circle cx="330" cy="364" r="7" fill="#8a6e28" opacity="0.6"/>
  <circle cx="330" cy="440" r="27" fill="url(#ev4-tunic-brass)" stroke="#33260d" stroke-width="2"/>
  <circle cx="330" cy="440" r="19" fill="none" stroke="#6d5620" stroke-width="2" opacity="0.7"/>
  <ellipse cx="320" cy="430" rx="10" ry="6" fill="#fff8d4" opacity="0.55"/>
  <circle cx="330" cy="440" r="7" fill="#8a6e28" opacity="0.6"/>
</g>
<!-- the wear the years put in: a shine at the elbowline, a mended seam -->
<ellipse cx="180" cy="330" rx="46" ry="90" fill="#7a7765" opacity="0.14"/>
<g stroke="#5e5b4d" stroke-width="1.2" stroke-dasharray="5 5" opacity="0.4" fill="none">
  <path d="M462 200 Q 470 330 466 470"/>
</g>
<path d="M150 246 Q 168 330 158 430" fill="none" stroke="#0f0e0a" stroke-width="3" opacity="0.5"/>

<!-- the white gloves, folded over the pocket, and the cloth in the hand -->
<path d="M420 300 Q 502 272 574 300 Q 588 348 540 372 Q 464 388 418 356 Q 404 322 420 300 Z" fill="#000" opacity="0.45" filter="url(#ev4-tunic-soft)"/>
<path d="M414 288 Q 496 258 570 288 Q 584 336 534 360 Q 458 376 412 344 Q 398 310 414 288 Z" fill="url(#ev4-tunic-glove)"/>
<path d="M414 288 Q 496 258 570 288 Q 508 292 456 308 Q 420 320 412 344 Q 398 310 414 288 Z" fill="#fffdf4" opacity="0.55"/>
<g stroke="#a8a290" stroke-width="2" opacity="0.6" fill="none">
  <path d="M466 306 Q 476 332 462 356"/><path d="M500 300 Q 512 326 498 352"/>
  <path d="M534 298 Q 546 322 532 346"/>
</g>
<path d="M418 320 Q 490 296 566 306" fill="none" stroke="#8f8a78" stroke-width="1.6" opacity="0.4"/>
<path d="M424 340 Q 494 320 560 330" fill="none" stroke="#fffdf4" stroke-width="1.6" opacity="0.5"/>

<!-- the polishing cloth, folded in four, that is always somewhere on him -->
<path d="M64 336 Q 140 306 216 334 Q 208 396 130 412 Q 66 400 64 336 Z" fill="#e2ddcb"/>
<path d="M64 336 Q 140 306 216 334 Q 154 344 108 362 Q 74 376 66 400 Q 60 366 64 336 Z" fill="#fdfbf0" opacity="0.6"/>
<path d="M72 352 Q 140 328 208 348" fill="none" stroke="#a8a290" stroke-width="1.8" opacity="0.6"/>
<path d="M76 374 Q 142 352 204 370" fill="none" stroke="#a8a290" stroke-width="1.6" opacity="0.5"/>
<path d="M120 314 Q 128 358 122 408" fill="none" stroke="#a8a290" stroke-width="1.4" opacity="0.45"/>

<rect width="640" height="520" fill="url(#ev4-tunic-vig)"/>
`,
  },

  /* THREE MONTHS, LIKELY LESS: a chest film up against the lamp, and the
     shadow in it that made an honest man of Ambrose Keene. */
  c4_diagnosis: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-xray-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#1a1d22"/><stop offset="0.6" stop-color="#0c0e11"/><stop offset="1" stop-color="#050607"/>
  </linearGradient>
  <linearGradient id="ev4-xray-lamp" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4f8fb"/><stop offset="0.45" stop-color="#dbe4ec"/><stop offset="1" stop-color="#9fb0be"/>
  </linearGradient>
  <linearGradient id="ev4-xray-film" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#3d4c56"/><stop offset="0.4" stop-color="#28343c"/><stop offset="1" stop-color="#141b21"/>
  </linearGradient>
  <radialGradient id="ev4-xray-chest" cx="0.5" cy="0.46" r="0.58">
    <stop offset="0" stop-color="#cfdae2" stop-opacity="0.55"/>
    <stop offset="0.55" stop-color="#9fb0bd" stop-opacity="0.4"/>
    <stop offset="1" stop-color="#5d6d79" stop-opacity="0.15"/>
  </radialGradient>
  <radialGradient id="ev4-xray-lung" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#0d1319" stop-opacity="0.85"/><stop offset="1" stop-color="#1c262e" stop-opacity="0.4"/>
  </radialGradient>
  <radialGradient id="ev4-xray-mass" cx="0.42" cy="0.4" r="0.6">
    <stop offset="0" stop-color="#eef4f8" stop-opacity="0.92"/>
    <stop offset="0.45" stop-color="#c3d1da" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#8ea0ad" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev4-xray-clip" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#e2e7ea"/><stop offset="0.35" stop-color="#a6adb2"/>
    <stop offset="0.72" stop-color="#666d72"/><stop offset="1" stop-color="#31373b"/>
  </linearGradient>
  <filter id="ev4-xray-soft" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev4-xray-vig" cx="0.46" cy="0.46" r="0.8">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-xray-bg)"/>

<!-- the viewing lamp, its ground glass, its bright rim -->
<rect x="40" y="26" width="560" height="470" rx="10" fill="#2b3237"/>
<rect x="40" y="26" width="560" height="470" rx="10" fill="none" stroke="#525b61" stroke-width="3"/>
<rect x="46" y="32" width="548" height="18" rx="6" fill="#7d868c" opacity="0.5"/>
<rect x="58" y="46" width="524" height="430" fill="url(#ev4-xray-lamp)"/>
<g opacity="0.25" stroke="#ffffff" stroke-width="1" fill="none">
  <path d="M58 100 L582 100"/><path d="M58 200 L582 200"/><path d="M58 300 L582 300"/><path d="M58 400 L582 400"/>
</g>
<ellipse cx="200" cy="150" rx="220" ry="150" fill="#ffffff" opacity="0.35"/>

<!-- the film, hung on the lamp: a chest, posteroanterior -->
<rect x="92" y="60" width="452" height="404" fill="url(#ev4-xray-film)"/>
<rect x="92" y="60" width="452" height="404" fill="none" stroke="#0d1114" stroke-width="3"/>
<path d="M92 60 L544 60 L544 84 L92 84 Z" fill="#5d6d79" opacity="0.4"/>
<!-- the thorax: ribs, spine, the heart's shadow, both lung fields -->
<path d="M318 82 Q 236 96 200 178 Q 174 268 194 366 Q 214 440 318 452 Q 424 440 444 366 Q 464 268 438 178 Q 402 96 318 82 Z" fill="url(#ev4-xray-chest)"/>
<ellipse cx="252" cy="262" rx="66" ry="128" fill="url(#ev4-xray-lung)"/>
<ellipse cx="392" cy="262" rx="66" ry="128" fill="url(#ev4-xray-lung)"/>
<path d="M300 96 L336 96 L340 400 L296 400 Z" fill="#b9c7d2" opacity="0.45"/>
<g stroke="#5f707c" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M300 132 L336 132"/><path d="M300 164 L336 164"/><path d="M300 196 L336 196"/>
  <path d="M300 228 L336 228"/><path d="M300 260 L336 260"/><path d="M300 292 L336 292"/>
  <path d="M300 324 L336 324"/><path d="M300 356 L336 356"/>
</g>
<path d="M300 250 Q 268 300 276 372 Q 296 414 356 410 Q 398 400 396 356 Q 380 300 340 258 Z" fill="#8fa2af" opacity="0.42"/>
<!-- the ribs, both sides, in receding arcs -->
<g stroke="#c8d6df" stroke-width="4" opacity="0.5" fill="none">
  <path d="M296 128 Q 224 132 194 190"/><path d="M296 164 Q 216 168 188 232"/>
  <path d="M296 200 Q 210 206 186 274"/><path d="M296 236 Q 208 244 188 314"/>
  <path d="M296 272 Q 210 282 194 350"/><path d="M296 308 Q 216 320 204 382"/>
  <path d="M298 344 Q 226 358 218 408"/>
  <path d="M340 128 Q 412 132 442 190"/><path d="M340 164 Q 420 168 448 232"/>
  <path d="M340 200 Q 426 206 450 274"/><path d="M340 236 Q 428 244 448 314"/>
  <path d="M340 272 Q 426 282 442 350"/><path d="M340 308 Q 420 320 432 382"/>
  <path d="M338 344 Q 410 358 418 408"/>
</g>
<g stroke="#0f1519" stroke-width="1.6" opacity="0.4" fill="none">
  <path d="M296 146 Q 220 150 190 210"/><path d="M296 218 Q 208 226 186 294"/>
  <path d="M340 146 Q 416 150 446 210"/><path d="M340 218 Q 428 226 450 294"/>
</g>
<!-- the clavicles and the shoulder girdle at the top -->
<path d="M196 132 Q 250 108 300 116" fill="none" stroke="#d8e4ec" stroke-width="7" opacity="0.55"/>
<path d="M440 132 Q 386 108 336 116" fill="none" stroke="#d8e4ec" stroke-width="7" opacity="0.55"/>
<ellipse cx="182" cy="150" rx="34" ry="24" fill="#b9c7d2" opacity="0.3"/>
<ellipse cx="454" cy="150" rx="34" ry="24" fill="#b9c7d2" opacity="0.3"/>
<!-- the diaphragm, and the dark of the belly beneath -->
<path d="M194 366 Q 250 400 300 396 L336 396 Q 392 400 444 366 L444 452 L194 452 Z" fill="#1a2329" opacity="0.75"/>
<path d="M194 366 Q 250 400 300 396" fill="none" stroke="#cfdae2" stroke-width="4" opacity="0.45"/>
<path d="M336 396 Q 392 400 444 366" fill="none" stroke="#cfdae2" stroke-width="4" opacity="0.45"/>

<!-- THE SHADOW: a dense mass in the right upper field, with spicules -->
<ellipse cx="240" cy="212" rx="62" ry="52" fill="url(#ev4-xray-mass)" filter="url(#ev4-xray-soft)"/>
<ellipse cx="240" cy="212" rx="40" ry="34" fill="#e6eef4" opacity="0.8"/>
<ellipse cx="232" cy="204" rx="18" ry="14" fill="#ffffff" opacity="0.75"/>
<g stroke="#dbe6ee" stroke-width="3" opacity="0.6" fill="none">
  <path d="M240 168 q 6 -18 -4 -30"/><path d="M280 190 q 20 -8 34 -2"/>
  <path d="M276 240 q 22 8 34 22"/><path d="M212 250 q -10 20 -24 28"/>
  <path d="M198 200 q -20 -8 -32 -22"/><path d="M256 258 q 6 20 2 34"/>
</g>
<!-- and the small satellites, which is what 'advanced' looks like -->
<g fill="#dbe6ee" opacity="0.6">
  <ellipse cx="196" cy="304" rx="14" ry="11"/><ellipse cx="278" cy="330" rx="10" ry="8"/>
  <ellipse cx="220" cy="356" rx="8" ry="6"/><ellipse cx="404" cy="220" rx="9" ry="7"/>
  <ellipse cx="418" cy="300" rx="7" ry="5.4"/>
</g>
<path d="M240 260 Q 250 300 244 340" fill="none" stroke="#cfdae2" stroke-width="2" opacity="0.35"/>

<!-- the two clips holding the film to the lamp -->
<rect x="148" y="46" width="60" height="34" rx="5" fill="url(#ev4-xray-clip)" stroke="#262b2e" stroke-width="1.6"/>
<rect x="152" y="50" width="52" height="9" rx="3" fill="#ffffff" opacity="0.55"/>
<rect x="164" y="72" width="28" height="14" rx="3" fill="#3a4145"/>
<rect x="430" y="46" width="60" height="34" rx="5" fill="url(#ev4-xray-clip)" stroke="#262b2e" stroke-width="1.6"/>
<rect x="434" y="50" width="52" height="9" rx="3" fill="#ffffff" opacity="0.5"/>
<rect x="446" y="72" width="28" height="14" rx="3" fill="#3a4145"/>

<rect width="640" height="520" fill="url(#ev4-xray-vig)"/>
`,
  },

  /* CALLAHAN'S FORTY MINUTES: coal dust on a baggage car floor, and the
     prints of a big man in a tan coat, going in and coming back. */
  c4_breakin: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-dust-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#221c15"/><stop offset="0.6" stop-color="#100c08"/><stop offset="1" stop-color="#060403"/>
  </linearGradient>
  <linearGradient id="ev4-dust-floor" x1="0.06" y1="0" x2="0.86" y2="1">
    <stop offset="0" stop-color="#6a5a44"/><stop offset="0.26" stop-color="#4d4131"/>
    <stop offset="0.66" stop-color="#332b20"/><stop offset="1" stop-color="#1a1610"/>
  </linearGradient>
  <linearGradient id="ev4-dust-crate" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#8a6438"/><stop offset="0.3" stop-color="#5f4526"/>
    <stop offset="0.7" stop-color="#3c2b17"/><stop offset="1" stop-color="#1d150b"/>
  </linearGradient>
  <linearGradient id="ev4-dust-leather" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#a07a4c"/><stop offset="0.3" stop-color="#7b5a34"/>
    <stop offset="0.72" stop-color="#4e3820"/><stop offset="1" stop-color="#251a0e"/>
  </linearGradient>
  <radialGradient id="ev4-dust-lamp" cx="0.28" cy="0.1" r="0.8">
    <stop offset="0" stop-color="#ffd48f" stop-opacity="0.34"/><stop offset="1" stop-color="#ffd48f" stop-opacity="0"/>
  </radialGradient>
  <filter id="ev4-dust-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-dust-vig" cx="0.42" cy="0.42" r="0.8">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-dust-bg)"/>

<!-- the baggage car floor: planks under a hard film of coal dust -->
<rect width="640" height="520" fill="url(#ev4-dust-floor)"/>
<g opacity="0.3" stroke="#7d6b50" stroke-width="1.6" fill="none">
  <path d="M0 152 Q 320 168 640 148"/><path d="M0 250 Q 320 268 640 244"/>
  <path d="M0 352 Q 320 372 640 344"/><path d="M0 452 Q 320 474 640 444"/>
</g>
<g opacity="0.22" stroke="#181309" stroke-width="3" fill="none">
  <path d="M0 200 Q 320 218 640 196"/><path d="M0 402 Q 320 422 640 394"/>
</g>
<rect width="640" height="520" fill="url(#ev4-dust-lamp)"/>
<g opacity="0.3" fill="#191510">
  <ellipse cx="90" cy="180" rx="46" ry="16"/><ellipse cx="300" cy="150" rx="60" ry="18"/>
  <ellipse cx="520" cy="200" rx="50" ry="16"/><ellipse cx="180" cy="330" rx="56" ry="18"/>
  <ellipse cx="430" cy="360" rx="52" ry="16"/><ellipse cx="590" cy="440" rx="44" ry="14"/>
</g>

<!-- the corner of a crate, at the edge of frame, where a big man crouched -->
<path d="M-10 0 L232 0 L268 92 L262 240 L-10 262 Z" fill="url(#ev4-dust-crate)"/>
<path d="M-10 0 L232 0 L242 26 L-10 34 Z" fill="#c08a4e" opacity="0.3"/>
<path d="M232 0 L268 92 L262 240 L232 232 L226 88 Z" fill="#120c06" opacity="0.55"/>
<g opacity="0.3" stroke="#a8763f" stroke-width="1.6" fill="none">
  <path d="M-10 62 L238 52"/><path d="M-10 128 L246 120"/><path d="M-10 194 L254 188"/>
</g>
<path d="M-10 84 L244 74 L246 100 L-10 110 Z" fill="#3d2b16"/>
<path d="M-10 86 L242 76 L242 82 L-10 92 Z" fill="#c08a4e" opacity="0.3"/>
<g fill="#8d7330" stroke="#241a06" stroke-width="1">
  <circle cx="40" cy="96" r="5"/><circle cx="140" cy="92" r="5"/><circle cx="228" cy="86" r="5"/>
</g>
<ellipse cx="140" cy="270" rx="180" ry="34" fill="#000" opacity="0.55" filter="url(#ev4-dust-soft)"/>

<!-- THE PRINTS: a big shoe, going in, and coming back out again heavier -->
<g fill="#241d14" opacity="0.85">
  <path d="M300 200 Q 322 190 344 200 Q 352 226 344 254 Q 322 264 302 254 Q 292 226 300 200 Z"/>
  <path d="M304 264 Q 324 258 342 264 Q 346 282 340 292 Q 322 298 306 292 Q 300 280 304 264 Z"/>
  <path d="M404 254 Q 426 244 448 254 Q 456 280 448 308 Q 426 318 406 308 Q 396 280 404 254 Z"/>
  <path d="M408 318 Q 428 312 446 318 Q 450 336 444 346 Q 426 352 410 346 Q 404 334 408 318 Z"/>
  <path d="M320 346 Q 342 336 364 346 Q 372 372 364 400 Q 342 410 322 400 Q 312 372 320 346 Z"/>
  <path d="M324 410 Q 344 404 362 410 Q 366 428 360 438 Q 342 444 326 438 Q 320 426 324 410 Z"/>
  <path d="M436 402 Q 458 392 480 402 Q 488 428 480 456 Q 458 466 438 456 Q 428 428 436 402 Z"/>
  <path d="M440 466 Q 460 460 478 466 Q 482 484 476 494 Q 458 500 442 494 Q 436 482 440 466 Z"/>
</g>
<!-- the tread bars, and the dust dragged out of each print's heel -->
<g stroke="#6d6047" stroke-width="2.4" opacity="0.6" fill="none">
  <path d="M304 212 L342 212"/><path d="M304 228 L342 228"/><path d="M304 244 L342 244"/>
  <path d="M408 266 L446 266"/><path d="M408 282 L446 282"/><path d="M408 298 L446 298"/>
  <path d="M324 358 L362 358"/><path d="M324 374 L362 374"/><path d="M324 390 L362 390"/>
  <path d="M440 414 L478 414"/><path d="M440 430 L478 430"/><path d="M440 446 L478 446"/>
</g>
<g fill="#8d7f62" opacity="0.4">
  <ellipse cx="322" cy="300" rx="34" ry="10"/><ellipse cx="426" cy="354" rx="34" ry="10"/>
  <ellipse cx="342" cy="446" rx="34" ry="10"/><ellipse cx="458" cy="502" rx="34" ry="10"/>
</g>
<!-- a scuff where he turned in a hurry -->
<path d="M368 320 Q 420 336 452 372" fill="none" stroke="#8d7f62" stroke-width="9" opacity="0.3" stroke-linecap="round"/>

<!-- splinters of trunk-wood, thrown clear, still pale on their broken faces -->
<g fill="url(#ev4-dust-leather)" stroke="#2f2010" stroke-width="0.9">
  <path d="M84 306 L146 292 L138 320 Z"/>
  <path d="M170 344 L222 330 L212 358 Z"/>
  <path d="M108 388 L154 380 L146 404 Z"/>
  <path d="M224 400 L268 388 L258 414 Z"/>
  <path d="M60 434 L112 424 L102 450 Z"/>
  <path d="M176 452 L216 442 L206 466 Z"/>
</g>
<g stroke="#e6c896" stroke-width="1.6" opacity="0.6" fill="none">
  <path d="M86 306 L144 293"/><path d="M172 344 L220 331"/><path d="M110 388 L152 381"/>
  <path d="M226 400 L266 389"/><path d="M62 434 L110 425"/>
</g>
<g fill="#c9a86e" opacity="0.5">
  <circle cx="130" cy="330" r="2.6"/><circle cx="196" cy="372" r="2.2"/><circle cx="88" cy="410" r="2.4"/>
  <circle cx="244" cy="428" r="2"/><circle cx="150" cy="466" r="2.2"/>
</g>

<!-- his glove, dropped where forty minutes of splinters made it useless -->
<ellipse cx="524" cy="180" rx="86" ry="26" fill="#000" opacity="0.5" filter="url(#ev4-dust-soft)"/>
<path d="M452 128 Q 512 106 574 122 Q 604 140 592 166 Q 546 182 490 174 Q 448 160 452 128 Z" fill="url(#ev4-dust-leather)"/>
<path d="M452 128 Q 512 106 574 122 Q 526 130 486 146 Q 456 156 452 168 Q 444 144 452 128 Z" fill="#c49a63" opacity="0.35"/>
<path d="M574 122 Q 604 140 592 166 Q 566 174 540 176 Q 578 156 574 122 Z" fill="#1f150b" opacity="0.4"/>
<g stroke="#2a1d0e" stroke-width="2" opacity="0.65" fill="none">
  <path d="M494 130 Q 502 152 492 172"/><path d="M524 122 Q 534 146 524 174"/><path d="M556 120 Q 566 142 556 172"/>
</g>
<path d="M458 146 Q 516 126 578 138" fill="none" stroke="#d3aa72" stroke-width="1.6" opacity="0.4"/>
<!-- and the coal dust it left on everything it touched -->
<g fill="#141009" opacity="0.5">
  <ellipse cx="470" cy="186" rx="24" ry="8"/><ellipse cx="540" cy="192" rx="30" ry="8"/>
  <ellipse cx="596" cy="176" rx="18" ry="6"/>
</g>

<rect width="640" height="520" fill="url(#ev4-dust-vig)"/>
`,
  },

  /* 'THE COLUMN IS HANDLED, HAROLD': the tail window of the observation
     lounge, the snow it was said to, and the drink nobody finished. */
  c4_handled: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-tail-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2117"/><stop offset="0.6" stop-color="#130f09"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-tail-mahog" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#8a4f2a"/><stop offset="0.3" stop-color="#63371d"/>
    <stop offset="0.7" stop-color="#402214"/><stop offset="1" stop-color="#21120a"/>
  </linearGradient>
  <linearGradient id="ev4-tail-night" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#2b3348"/><stop offset="0.4" stop-color="#1a2130"/>
    <stop offset="0.8" stop-color="#0e131d"/><stop offset="1" stop-color="#070a10"/>
  </linearGradient>
  <linearGradient id="ev4-tail-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.2" stop-color="#d5b75f"/>
    <stop offset="0.42" stop-color="#faeeb9"/><stop offset="0.66" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <linearGradient id="ev4-tail-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#eef3f2" stop-opacity="0.44"/><stop offset="0.28" stop-color="#ffffff" stop-opacity="0.18"/>
    <stop offset="0.72" stop-color="#cdd6d3" stop-opacity="0.14"/><stop offset="1" stop-color="#e9efed" stop-opacity="0.46"/>
  </linearGradient>
  <linearGradient id="ev4-tail-brandy" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c07a2c"/><stop offset="0.45" stop-color="#8a4d16"/><stop offset="1" stop-color="#4e2909"/>
  </linearGradient>
  <filter id="ev4-tail-soft" x="-35%" y="-35%" width="170%" height="170%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev4-tail-vig" cx="0.44" cy="0.42" r="0.8">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-tail-bg)"/>

<!-- the famous curved tail window, looking back down a track that is gone -->
<path d="M40 0 L600 0 L604 306 Q 320 350 36 306 Z" fill="url(#ev4-tail-night)"/>
<!-- snow turning in the dark: near flakes big and soft, far ones fine -->
<g fill="#ffffff" opacity="0.7">
  <ellipse cx="110" cy="70" rx="9" ry="7"/><ellipse cx="238" cy="128" rx="11" ry="8"/>
  <ellipse cx="392" cy="86" rx="10" ry="7"/><ellipse cx="512" cy="164" rx="9" ry="7"/>
  <ellipse cx="176" cy="220" rx="10" ry="7"/><ellipse cx="330" cy="248" rx="11" ry="8"/>
  <ellipse cx="470" cy="242" rx="9" ry="6"/><ellipse cx="80" cy="176" rx="8" ry="6"/>
  <ellipse cx="566" cy="70" rx="8" ry="6"/><ellipse cx="284" cy="46" rx="9" ry="6"/>
</g>
<g fill="#dfe8f2" opacity="0.5">
  <circle cx="150" cy="118" r="4"/><circle cx="298" cy="94" r="4.4"/><circle cx="440" cy="140" r="4"/>
  <circle cx="546" cy="224" r="4.4"/><circle cx="220" cy="180" r="4"/><circle cx="380" cy="196" r="4.4"/>
  <circle cx="96" cy="248" r="4"/><circle cx="500" cy="60" r="4"/><circle cx="256" cy="272" r="4.2"/>
  <circle cx="606" cy="128" r="3.6"/><circle cx="60" cy="118" r="3.6"/><circle cx="420" cy="286" r="4"/>
</g>
<g fill="#b8c6d8" opacity="0.4">
  <circle cx="128" cy="158" r="2.2"/><circle cx="196" cy="66" r="2"/><circle cx="266" cy="212" r="2.4"/>
  <circle cx="348" cy="140" r="2"/><circle cx="418" cy="46" r="2.2"/><circle cx="488" cy="120" r="2"/>
  <circle cx="556" cy="286" r="2.4"/><circle cx="586" cy="192" r="2"/><circle cx="72" cy="292" r="2.2"/>
  <circle cx="182" cy="292" r="2"/><circle cx="312" cy="308" r="2.2"/><circle cx="464" cy="196" r="2"/>
  <circle cx="600" cy="52" r="2"/><circle cx="102" cy="42" r="2.2"/><circle cx="340" cy="20" r="2"/>
</g>
<!-- the rails, going away into it, already half filled in -->
<path d="M232 306 Q 300 210 316 132 Q 330 210 402 306" fill="none" stroke="#59647a" stroke-width="4" opacity="0.4"/>
<g stroke="#59647a" stroke-width="3" opacity="0.28">
  <path d="M244 292 L392 292"/><path d="M258 268 L378 268"/><path d="M270 244 L364 244"/>
  <path d="M282 218 L352 218"/><path d="M292 194 L342 194"/>
</g>
<path d="M36 260 Q 320 300 604 260 L604 306 Q 320 350 36 306 Z" fill="#c6d0dd" opacity="0.5"/>
<path d="M36 260 Q 320 300 604 260" fill="none" stroke="#eef3f9" stroke-width="3" opacity="0.5"/>
<!-- frost creeping in from the corners of the glass -->
<g opacity="0.3" stroke="#e8eff6" stroke-width="1.6" fill="none">
  <path d="M40 20 q 26 18 22 46 q 20 -12 34 8"/><path d="M596 24 q -26 18 -22 46 q -20 -12 -34 8"/>
  <path d="M46 232 q 30 -14 40 10"/><path d="M594 236 q -30 -14 -40 10"/>
</g>
<rect x="36" y="0" width="568" height="310" fill="url(#ev4-tail-glass)" opacity="0.5"/>

<!-- the window frame and the brass rail beneath it -->
<path d="M0 0 L46 0 L42 316 L0 322 Z" fill="url(#ev4-tail-mahog)"/>
<path d="M594 0 L640 0 L640 322 L598 316 Z" fill="url(#ev4-tail-mahog)"/>
<path d="M0 0 L640 0 L640 22 L0 22 Z" fill="url(#ev4-tail-mahog)"/>
<path d="M0 306 Q 320 350 640 306 L640 360 Q 320 404 0 360 Z" fill="url(#ev4-tail-mahog)"/>
<path d="M0 306 Q 320 350 640 306 L640 320 Q 320 364 0 320 Z" fill="#d09354" opacity="0.4"/>
<path d="M0 372 Q 320 416 640 372 L640 396 Q 320 440 0 396 Z" fill="url(#ev4-tail-brass)"/>
<path d="M0 376 Q 320 420 640 376 L640 384 Q 320 428 0 384 Z" fill="#fff3c0" opacity="0.45"/>
<path d="M0 396 Q 320 440 640 396 L640 520 L0 520 Z" fill="#2c1a0e"/>
<g opacity="0.22" stroke="#8d5730" stroke-width="1.6" fill="none">
  <path d="M0 452 Q 320 490 640 448"/><path d="M0 502 Q 320 518 640 496"/>
</g>

<!-- the sill, and the brandy nobody finished, standing where he left it -->
<ellipse cx="466" cy="470" rx="94" ry="26" fill="#000" opacity="0.55" filter="url(#ev4-tail-soft)"/>
<ellipse cx="462" cy="452" rx="66" ry="18" fill="#e9efed" opacity="0.22"/>
<path d="M398 340 Q 396 412 434 442 Q 462 456 490 442 Q 528 412 526 340 Q 462 366 398 340 Z" fill="url(#ev4-tail-glass)"/>
<path d="M410 388 Q 462 412 514 388 Q 512 418 486 436 Q 462 448 438 436 Q 412 418 410 388 Z" fill="url(#ev4-tail-brandy)"/>
<ellipse cx="462" cy="390" rx="52" ry="14" fill="#a75e1c"/>
<ellipse cx="462" cy="390" rx="52" ry="14" fill="none" stroke="#d99b46" stroke-width="1.6" opacity="0.7"/>
<ellipse cx="440" cy="388" rx="16" ry="4" fill="#e6ad63" opacity="0.5"/>
<path d="M398 340 Q 462 366 526 340" fill="none" stroke="#f6faf9" stroke-width="3.4" opacity="0.6"/>
<path d="M410 350 Q 404 402 428 432" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.28"/>
<path d="M514 352 Q 520 400 498 430" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.18"/>
<ellipse cx="462" cy="446" rx="34" ry="9" fill="#d6a05c" opacity="0.3"/>
<!-- and the ring of a glass that stood beside it and was taken away -->
<ellipse cx="576" cy="464" rx="46" ry="14" fill="none" stroke="#a9803f" stroke-width="3.4" opacity="0.3"/>

<!-- the arm of a club chair, close and unlit, at the left edge -->
<path d="M0 380 Q 76 350 148 372 Q 176 412 158 470 Q 92 506 20 490 Q -16 440 0 380 Z" fill="#3a2416"/>
<path d="M0 380 Q 76 350 148 372 Q 90 380 46 398 Q 12 414 4 444 Q -8 408 0 380 Z" fill="#6d4527" opacity="0.5"/>
<path d="M18 442 Q 84 418 152 428" fill="none" stroke="#22140b" stroke-width="4" opacity="0.6"/>
<g fill="#8d7330" stroke="#241a06" stroke-width="1">
  <circle cx="40" cy="470" r="6"/><circle cx="96" cy="482" r="6"/><circle cx="146" cy="466" r="6"/>
</g>

<rect width="640" height="520" fill="url(#ev4-tail-vig)"/>
`,
  },

  /* THE CHRISTMAS POSSESSION: what is left on a banquet table after the whole
     room has roared, and one man has stopped laughing. */
  c4_impression: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-xmas-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2318"/><stop offset="0.6" stop-color="#13100a"/><stop offset="1" stop-color="#070605"/>
  </linearGradient>
  <linearGradient id="ev4-xmas-linen" x1="0.05" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f3eee0"/><stop offset="0.3" stop-color="#ded8c6"/>
    <stop offset="0.68" stop-color="#aea898"/><stop offset="1" stop-color="#726d5f"/>
  </linearGradient>
  <linearGradient id="ev4-xmas-crown" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#d9564a"/><stop offset="0.35" stop-color="#a83a30"/>
    <stop offset="0.75" stop-color="#75241d"/><stop offset="1" stop-color="#421110"/>
  </linearGradient>
  <linearGradient id="ev4-xmas-cracker" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#e0a24c"/><stop offset="0.35" stop-color="#b87a2c"/>
    <stop offset="0.75" stop-color="#835117"/><stop offset="1" stop-color="#4a2c0c"/>
  </linearGradient>
  <linearGradient id="ev4-xmas-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#f2f6f5" stop-opacity="0.44"/><stop offset="0.3" stop-color="#ffffff" stop-opacity="0.18"/>
    <stop offset="0.72" stop-color="#cdd6d3" stop-opacity="0.14"/><stop offset="1" stop-color="#eaf0ee" stop-opacity="0.46"/>
  </linearGradient>
  <linearGradient id="ev4-xmas-wax" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#fbf6e6"/><stop offset="0.4" stop-color="#e5dcc2"/><stop offset="1" stop-color="#a99f84"/>
  </linearGradient>
  <linearGradient id="ev4-xmas-brass" x1="0" y1="0" x2="1" y2="0.9">
    <stop offset="0" stop-color="#5e4a1d"/><stop offset="0.22" stop-color="#d5b75f"/>
    <stop offset="0.46" stop-color="#faeeb9"/><stop offset="0.7" stop-color="#a5873a"/><stop offset="1" stop-color="#443212"/>
  </linearGradient>
  <filter id="ev4-xmas-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-xmas-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-xmas-bg)"/>
<rect width="640" height="520" fill="url(#ev4-xmas-linen)" opacity="0.92"/>
<g opacity="0.18" stroke="#9a9484" stroke-width="1" fill="none">
  <path d="M0 40 L640 32"/><path d="M0 88 L640 80"/><path d="M0 136 L640 128"/><path d="M0 184 L640 176"/>
  <path d="M0 232 L640 224"/><path d="M0 280 L640 272"/><path d="M0 328 L640 320"/><path d="M0 376 L640 368"/>
  <path d="M0 424 L640 416"/><path d="M0 472 L640 464"/>
</g>
<g opacity="0.13" stroke="#a8a292" stroke-width="0.8" fill="none">
  <path d="M64 0 L68 520"/><path d="M168 0 L172 520"/><path d="M272 0 L276 520"/><path d="M376 0 L380 520"/>
  <path d="M480 0 L484 520"/><path d="M584 0 L588 520"/>
</g>
<path d="M0 128 Q 200 164 400 140 Q 530 126 640 146 L640 186 Q 520 168 400 182 Q 196 206 0 172 Z" fill="#8d8878" opacity="0.16"/>

<!-- the cracker, snapped, its two halves lying where they fell -->
<path d="M52 296 L294 262 L308 348 L66 384 Z" fill="#000" opacity="0.4" filter="url(#ev4-xmas-soft)"/>
<path d="M44 244 Q 74 224 106 240 L112 306 Q 78 322 48 302 Z" fill="url(#ev4-xmas-cracker)"/>
<path d="M44 244 Q 74 224 106 240 L108 258 Q 76 244 48 264 Z" fill="#f2c583" opacity="0.4"/>
<path d="M106 240 L232 224 L240 292 L112 306 Z" fill="url(#ev4-xmas-cracker)"/>
<path d="M106 240 L232 224 L233 240 L107 256 Z" fill="#f2c583" opacity="0.42"/>
<path d="M226 278 L240 292 L112 306 L110 292 Z" fill="#3d2308" opacity="0.5"/>
<g stroke="#f6dcae" stroke-width="1.6" opacity="0.5" fill="none">
  <path d="M126 236 L132 302"/><path d="M156 232 L162 298"/><path d="M186 229 L192 295"/><path d="M214 226 L220 292"/>
</g>
<!-- the torn end, frilled and split -->
<path d="M232 224 L240 292 L268 288 L282 262 L262 234 Z" fill="#8b5518"/>
<g stroke="#f0c37c" stroke-width="1.8" opacity="0.7" fill="none">
  <path d="M240 236 L262 232"/><path d="M242 254 L272 250"/><path d="M244 272 L268 268"/>
</g>
<g fill="url(#ev4-xmas-cracker)" stroke="#4a2c0c" stroke-width="0.8">
  <path d="M282 262 L318 254 L306 280 Z"/><path d="M290 236 L322 230 L310 254 Z"/>
</g>
<!-- the other half, further off, blown open -->
<path d="M338 300 Q 372 282 406 300 L412 366 Q 376 384 344 362 Z" fill="url(#ev4-xmas-cracker)"/>
<path d="M338 300 Q 372 282 406 300 L408 318 Q 374 302 342 322 Z" fill="#f2c583" opacity="0.35"/>
<path d="M406 300 L470 292 L474 356 L412 366 Z" fill="url(#ev4-xmas-cracker)"/>
<path d="M406 300 L470 292 L471 306 L407 316 Z" fill="#f2c583" opacity="0.35"/>
<g stroke="#f6dcae" stroke-width="1.4" opacity="0.45" fill="none">
  <path d="M424 298 L428 362"/><path d="M448 295 L452 358"/>
</g>
<path d="M470 292 L474 356 L500 348 L508 322 L492 300 Z" fill="#8b5518"/>
<!-- the snap: a strip of card with two burnt spots -->
<path d="M312 322 Q 372 336 434 326" fill="none" stroke="#c9bda0" stroke-width="5"/>
<path d="M312 322 Q 372 336 434 326" fill="none" stroke="#f6f0dd" stroke-width="2" opacity="0.7"/>
<circle cx="352" cy="331" r="5" fill="#2c2118"/>
<circle cx="404" cy="330" r="4.4" fill="#3a2d20"/>

<!-- the paper crown, unfolded and dropped -->
<path d="M118 400 L306 372 L318 452 L132 486 Z" fill="#000" opacity="0.35" filter="url(#ev4-xmas-soft)"/>
<path d="M100 402 L126 344 L150 396 L178 336 L204 390 L232 330 L258 384 L286 326 L312 380 L318 440 Q 210 462 108 462 Z" fill="url(#ev4-xmas-crown)"/>
<path d="M100 402 L126 344 L150 396 L178 336 L204 390 L232 330 L258 384 L286 326 L312 380 L313 396 Q 208 418 102 418 Z" fill="#f08e7e" opacity="0.3"/>
<path d="M304 424 L318 440 Q 210 462 108 462 L106 442 Q 208 442 304 424 Z" fill="#3d0f0d" opacity="0.45"/>
<path d="M104 412 Q 208 430 314 392" fill="none" stroke="#f0a294" stroke-width="2" opacity="0.4"/>
<path d="M104 430 Q 208 448 316 412" fill="none" stroke="#5e1a15" stroke-width="1.6" opacity="0.45"/>
<g stroke="#5e1a15" stroke-width="1.4" opacity="0.4" fill="none">
  <path d="M126 348 L130 414"/><path d="M178 340 L182 424"/><path d="M232 334 L236 424"/><path d="M286 330 L290 412"/>
</g>

<!-- two glasses: one drained, one never touched -->
<ellipse cx="522" cy="252" rx="52" ry="16" fill="#000" opacity="0.35" filter="url(#ev4-xmas-soft)"/>
<path d="M480 106 Q 476 176 508 208 L510 232 Q 480 244 480 250 L562 244 Q 562 236 534 228 L532 204 Q 566 172 564 102 Q 522 122 480 106 Z" fill="url(#ev4-xmas-glass)"/>
<path d="M480 106 Q 522 122 564 102" fill="none" stroke="#f6faf9" stroke-width="3" opacity="0.6"/>
<path d="M490 118 Q 486 172 512 202" fill="none" stroke="#ffffff" stroke-width="4.4" opacity="0.3"/>
<path d="M556 116 Q 560 168 536 198" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.18"/>
<ellipse cx="521" cy="248" rx="41" ry="10" fill="none" stroke="#dee6e3" stroke-width="2" opacity="0.5"/>
<ellipse cx="524" cy="188" rx="26" ry="7" fill="#a9752c" opacity="0.35"/>
<ellipse cx="404" cy="204" rx="44" ry="14" fill="#000" opacity="0.3" filter="url(#ev4-xmas-soft)"/>
<path d="M370 78 Q 366 140 394 168 L396 188 Q 370 198 370 204 L440 198 Q 440 192 416 184 L414 164 Q 444 136 442 74 Q 406 92 370 78 Z" fill="url(#ev4-xmas-glass)"/>
<path d="M370 118 Q 406 134 442 114 L440 150 Q 406 168 372 152 Z" fill="#a85e1e" opacity="0.55"/>
<ellipse cx="406" cy="120" rx="36" ry="10" fill="#c07a2c" opacity="0.6"/>
<ellipse cx="390" cy="118" rx="12" ry="3.4" fill="#e6ad63" opacity="0.5"/>
<path d="M370 78 Q 406 92 442 74" fill="none" stroke="#f6faf9" stroke-width="2.8" opacity="0.6"/>
<path d="M380 88 Q 376 136 398 162" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.28"/>

<!-- the candle, guttered out in its brass stick, the wax run down cold -->
<ellipse cx="576" cy="446" rx="66" ry="20" fill="#000" opacity="0.45" filter="url(#ev4-xmas-soft)"/>
<ellipse cx="572" cy="428" rx="58" ry="18" fill="url(#ev4-xmas-brass)"/>
<ellipse cx="572" cy="422" rx="58" ry="18" fill="url(#ev4-xmas-brass)"/>
<ellipse cx="572" cy="422" rx="58" ry="18" fill="none" stroke="#2d2109" stroke-width="1.4"/>
<ellipse cx="558" cy="416" rx="22" ry="6" fill="#fff6cc" opacity="0.5"/>
<path d="M550 340 L594 340 L600 418 L544 418 Z" fill="url(#ev4-xmas-brass)"/>
<path d="M550 340 L562 340 L556 418 L544 418 Z" fill="#fff3c0" opacity="0.4"/>
<ellipse cx="572" cy="340" rx="22" ry="8" fill="url(#ev4-xmas-brass)" stroke="#2d2109" stroke-width="1.2"/>
<path d="M556 292 L588 292 L590 344 L554 344 Z" fill="url(#ev4-xmas-wax)"/>
<path d="M556 292 L566 292 L564 344 L554 344 Z" fill="#fffcf0" opacity="0.6"/>
<path d="M556 292 Q 572 284 588 292 Q 578 300 566 300 Q 558 298 556 292 Z" fill="#efe6cd"/>
<path d="M562 296 Q 556 320 560 344" fill="none" stroke="#fffcf0" stroke-width="4" opacity="0.6"/>
<path d="M582 298 Q 590 320 586 342" fill="none" stroke="#c9bfa4" stroke-width="3" opacity="0.5"/>
<path d="M570 288 L574 274" fill="none" stroke="#2a241a" stroke-width="3"/>
<ellipse cx="574" cy="272" rx="3.4" ry="4.4" fill="#171310"/>
<g fill="#3a332a" opacity="0.35">
  <ellipse cx="590" cy="266" rx="10" ry="5"/><ellipse cx="604" cy="248" rx="7" ry="4"/>
</g>

<rect width="640" height="520" fill="url(#ev4-xmas-vig)"/>
`,
  },

  /* CORLISS'S CONFESSION: the inspector's notebook, the page of shorthand
     it took, and the brandy he set down before he stopped being useful. */
  c4_confession: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev4-conf-bg" x1="0.2" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#2a2117"/><stop offset="0.6" stop-color="#130f09"/><stop offset="1" stop-color="#070504"/>
  </linearGradient>
  <linearGradient id="ev4-conf-table" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7a4926"/><stop offset="0.4" stop-color="#512d17"/><stop offset="1" stop-color="#1e1008"/>
  </linearGradient>
  <linearGradient id="ev4-conf-cover" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#3e3a33"/><stop offset="0.3" stop-color="#2a2721"/>
    <stop offset="0.7" stop-color="#1a1814"/><stop offset="1" stop-color="#0d0c0a"/>
  </linearGradient>
  <linearGradient id="ev4-conf-page" x1="0.05" y1="0" x2="0.95" y2="0.9">
    <stop offset="0" stop-color="#fbf6e6"/><stop offset="0.28" stop-color="#eee6cf"/>
    <stop offset="0.68" stop-color="#cec1a1"/><stop offset="1" stop-color="#9e937a"/>
  </linearGradient>
  <linearGradient id="ev4-conf-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#f2f6f5" stop-opacity="0.44"/><stop offset="0.3" stop-color="#ffffff" stop-opacity="0.18"/>
    <stop offset="0.72" stop-color="#cdd6d3" stop-opacity="0.14"/><stop offset="1" stop-color="#eaf0ee" stop-opacity="0.46"/>
  </linearGradient>
  <linearGradient id="ev4-conf-pen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a4640"/><stop offset="0.3" stop-color="#26231f"/>
    <stop offset="0.72" stop-color="#141210"/><stop offset="1" stop-color="#070606"/>
  </linearGradient>
  <linearGradient id="ev4-conf-nib" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#f8e9b6"/><stop offset="0.4" stop-color="#c8a94e"/><stop offset="1" stop-color="#6d5620"/>
  </linearGradient>
  <filter id="ev4-conf-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev4-conf-vig" cx="0.44" cy="0.42" r="0.78">
    <stop offset="0.46" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev4-conf-bg)"/>
<rect width="640" height="520" fill="url(#ev4-conf-table)" opacity="0.92"/>
<g opacity="0.24" stroke="#a3623a" stroke-width="1.5" fill="none">
  <path d="M0 50 Q 320 32 640 54"/><path d="M0 160 Q 320 140 640 162"/>
  <path d="M0 300 Q 320 278 640 302"/><path d="M0 430 Q 320 406 640 432"/>
</g>
<g opacity="0.18" stroke="#22120a" stroke-width="3" fill="none">
  <path d="M0 106 Q 320 88 640 110"/><path d="M0 366 Q 320 344 640 368"/>
</g>
<path d="M0 60 Q 200 116 640 74 L640 122 Q 220 164 0 106 Z" fill="#ffd9a4" opacity="0.09"/>

<!-- the notebook, opened flat and pressed down, its cover curling back -->
<path d="M52 132 L456 96 L488 452 L84 496 Z" fill="#000" opacity="0.5" filter="url(#ev4-conf-soft)"/>
<path d="M28 118 Q 240 92 448 82 L474 440 Q 250 470 46 470 Z" fill="url(#ev4-conf-cover)"/>
<path d="M28 118 Q 240 92 448 82 L450 100 Q 240 110 30 136 Z" fill="#5d574c" opacity="0.45"/>
<path d="M40 130 Q 246 104 442 96 L466 430 Q 250 458 56 458 Z" fill="url(#ev4-conf-page)"/>
<path d="M40 130 Q 246 104 442 96 L443 114 Q 246 122 41 148 Z" fill="#fffdf2" opacity="0.5"/>
<path d="M456 380 L466 430 Q 250 458 56 458 L52 412 Q 250 412 456 380 Z" fill="#8f8468" opacity="0.28"/>
<!-- the wire spiral down the top edge, and the page's ruled lines -->
<g stroke="#8f959a" stroke-width="5" fill="none" stroke-linecap="round">
  <path d="M66 116 q 8 -18 20 -2"/><path d="M126 110 q 8 -18 20 -2"/><path d="M186 104 q 8 -18 20 -2"/>
  <path d="M246 100 q 8 -18 20 -2"/><path d="M306 96 q 8 -18 20 -2"/><path d="M366 92 q 8 -18 20 -2"/>
  <path d="M420 89 q 8 -18 20 -2"/>
</g>
<g stroke="#e2e7ea" stroke-width="1.8" fill="none" opacity="0.6" stroke-linecap="round">
  <path d="M67 114 q 8 -16 19 -2"/><path d="M187 102 q 8 -16 19 -2"/><path d="M307 94 q 8 -16 19 -2"/>
  <path d="M421 87 q 8 -16 19 -2"/>
</g>
<g stroke="#9aa4b4" stroke-width="1.1" opacity="0.55" fill="none">
  <path d="M56 168 Q 250 144 452 132"/><path d="M58 202 Q 252 178 454 166"/>
  <path d="M60 236 Q 254 212 456 200"/><path d="M62 270 Q 256 246 458 234"/>
  <path d="M64 304 Q 258 280 460 268"/><path d="M66 338 Q 260 314 462 302"/>
  <path d="M68 372 Q 262 348 464 336"/><path d="M70 406 Q 264 382 466 370"/>
</g>
<path d="M98 108 Q 106 280 110 452" fill="none" stroke="#b6553f" stroke-width="1.6" opacity="0.5"/>

<!-- the shorthand: fast, hooked strokes, taken down as it was spoken -->
<g stroke="#1d2a3d" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.9">
  <path d="M122 160 q 14 -14 20 2 q 14 -12 24 4 q 12 -14 24 0 q 12 12 26 -4 q 14 -12 24 4"/>
  <path d="M256 150 q 16 -12 22 4 q 12 -14 26 0 q 14 12 28 -6 q 12 -10 22 4"/>
  <path d="M124 194 q 12 -12 22 2 q 16 -14 26 4 q 12 -12 22 2 q 14 12 28 -6"/>
  <path d="M240 182 q 14 -12 24 4 q 12 -14 24 0 q 14 12 26 -6 q 14 -10 24 4 q 12 10 24 -6"/>
  <path d="M126 228 q 16 -14 24 2 q 12 -12 22 4 q 14 -14 26 0 q 12 12 24 -4"/>
  <path d="M250 218 q 12 -12 22 2 q 16 -14 28 4 q 12 -12 22 2"/>
  <path d="M128 262 q 14 -12 22 4 q 14 -14 26 0 q 12 12 24 -6 q 14 -10 24 4 q 12 12 26 -6"/>
  <path d="M270 250 q 14 -12 24 4 q 12 -14 24 0 q 14 12 26 -6"/>
  <path d="M130 296 q 12 -12 22 2 q 16 -14 26 4 q 14 -14 26 0 q 12 12 24 -4 q 14 -12 24 4"/>
  <path d="M262 284 q 14 -12 24 4 q 12 -14 26 0"/>
  <path d="M132 330 q 16 -14 24 2 q 12 -12 22 4 q 14 -14 26 0 q 12 12 24 -4"/>
  <path d="M134 364 q 14 -12 22 4 q 14 -14 26 0 q 12 12 24 -6 q 14 -10 24 4"/>
  <path d="M256 352 q 12 -12 22 2 q 16 -14 28 4 q 12 -12 22 2 q 14 12 26 -6"/>
</g>
<!-- one line underscored twice, hard, by a man who has just been told -->
<path d="M120 388 L336 366" fill="none" stroke="#8d2f26" stroke-width="3.4" opacity="0.85"/>
<path d="M120 398 L336 376" fill="none" stroke="#8d2f26" stroke-width="2" opacity="0.7"/>
<g stroke="#1d2a3d" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.9">
  <path d="M136 398 q 16 -14 24 2 q 12 -12 22 4 q 14 -14 26 0 q 12 12 24 -4 q 12 -10 22 2"/>
</g>
<!-- a thumbprint in the margin, in fountain-pen ink -->
<g opacity="0.22" fill="none" stroke="#1d2a3d" stroke-width="1.2">
  <path d="M410 400 q 12 10 0 20"/><path d="M418 396 q 17 14 0 28"/><path d="M426 392 q 22 18 0 36"/>
</g>

<!-- the fountain pen, capped and laid down across the gutter -->
<path d="M234 448 L560 410 L564 434 L238 472 Z" fill="#000" opacity="0.4" filter="url(#ev4-conf-soft)"/>
<path d="M224 428 L520 392 L524 424 L228 460 Z" fill="url(#ev4-conf-pen)"/>
<path d="M224 428 L520 392 L521 400 L225 436 Z" fill="#6f6a5f" opacity="0.55"/>
<path d="M228 452 L522 416 L524 424 L228 460 Z" fill="#000" opacity="0.5"/>
<path d="M338 414 L354 412 L358 444 L342 446 Z" fill="url(#ev4-conf-nib)"/>
<path d="M339 416 L346 415 L349 443" fill="none" stroke="#fff2c4" stroke-width="1.6" opacity="0.6"/>
<path d="M520 392 Q 552 390 560 406 Q 552 424 522 424 Z" fill="url(#ev4-conf-nib)"/>
<path d="M524 396 Q 548 394 555 406" fill="none" stroke="#fff2c4" stroke-width="2" opacity="0.6"/>
<path d="M528 404 L556 404" stroke="#5d4a17" stroke-width="1.6" opacity="0.7"/>
<ellipse cx="223" cy="444" rx="8" ry="16" fill="#1d1b18"/>
<ellipse cx="220" cy="436" rx="3" ry="6" fill="#6f6a5f" opacity="0.6"/>

<!-- the brandy he set down, and did not pick up again -->
<ellipse cx="546" cy="288" rx="80" ry="24" fill="#000" opacity="0.5" filter="url(#ev4-conf-soft)"/>
<ellipse cx="542" cy="272" rx="58" ry="16" fill="#e9efed" opacity="0.18"/>
<path d="M480 160 Q 478 224 514 258 Q 542 272 570 258 Q 606 224 604 160 Q 542 186 480 160 Z" fill="url(#ev4-conf-glass)"/>
<path d="M492 208 Q 542 230 592 208 Q 590 236 566 252 Q 542 264 518 252 Q 494 236 492 208 Z" fill="#8a4d16"/>
<ellipse cx="542" cy="210" rx="50" ry="13" fill="#a75e1c"/>
<ellipse cx="542" cy="210" rx="50" ry="13" fill="none" stroke="#d99b46" stroke-width="1.6" opacity="0.7"/>
<ellipse cx="520" cy="208" rx="16" ry="4" fill="#e6ad63" opacity="0.5"/>
<path d="M480 160 Q 542 186 604 160" fill="none" stroke="#f6faf9" stroke-width="3.4" opacity="0.6"/>
<path d="M492 170 Q 486 220 508 250" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.28"/>
<path d="M592 172 Q 598 218 578 248" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.18"/>
<ellipse cx="542" cy="264" rx="32" ry="9" fill="#d6a05c" opacity="0.3"/>

<rect width="640" height="520" fill="url(#ev4-conf-vig)"/>
`,
  },

};
