/* Exhibit plates for CASE No. 002 — The Orpheum Theatre, 1936.
   One photographic close-up per clue. Single objects, so they are rendered
   for material: modelled form under one upper-left light, specular
   highlights, cast shadow, wear and handling.
   Language-neutral — no text anywhere. Documents are ruled ink strokes and
   typed-looking marks only. */
window.CLUE_ART = window.CLUE_ART || {};
window.CLUE_ART.orpheum = {

  /* The murder weapon: pawnshop stock, blade cut down and blackened, the
     gummed price label scraped off but not entirely. */
  c2_dagger: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-dagger-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#23262c"/><stop offset="1" stop-color="#0a0b0e"/>
  </linearGradient>
  <radialGradient id="ev2-dagger-pool" cx="0.3" cy="0.2" r="0.72">
    <stop offset="0" stop-color="#d6c294" stop-opacity="0.20"/><stop offset="1" stop-color="#d6c294" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-dagger-cloth" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#3d3e3c"/><stop offset="0.55" stop-color="#262727"/><stop offset="1" stop-color="#141516"/>
  </linearGradient>
  <linearGradient id="ev2-dagger-up" x1="0.1" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#d3dae0"/><stop offset="0.3" stop-color="#7c848c"/><stop offset="1" stop-color="#3a3f45"/>
  </linearGradient>
  <linearGradient id="ev2-dagger-dn" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#3f444a"/><stop offset="0.55" stop-color="#1d2024"/><stop offset="1" stop-color="#0e1013"/>
  </linearGradient>
  <linearGradient id="ev2-dagger-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#efdba4"/><stop offset="0.22" stop-color="#c2a05a"/><stop offset="1" stop-color="#5e4a1e"/>
  </linearGradient>
  <linearGradient id="ev2-dagger-wood" x1="0" y1="0" x2="0.1" y2="1">
    <stop offset="0" stop-color="#7c5231"/><stop offset="0.4" stop-color="#4d3020"/><stop offset="1" stop-color="#241611"/>
  </linearGradient>
  <linearGradient id="ev2-dagger-label" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d9cfae"/><stop offset="1" stop-color="#a89a76"/>
  </linearGradient>
  <filter id="ev2-dagger-soft" x="-25%" y="-60%" width="150%" height="220%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev2-dagger-vig" cx="0.46" cy="0.44" r="0.76">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-dagger-bg)"/>
<path d="M0 150 L640 118 L640 520 L0 520 Z" fill="url(#ev2-dagger-cloth)"/>
<rect width="640" height="520" fill="url(#ev2-dagger-pool)"/>

<g stroke="#4a4b48" stroke-width="0.7" opacity="0.22">
  <path d="M0 190 L640 160"/><path d="M0 236 L640 206"/><path d="M0 282 L640 252"/>
  <path d="M0 328 L640 298"/><path d="M0 374 L640 344"/><path d="M0 420 L640 390"/><path d="M0 466 L640 436"/>
</g>
<g stroke="#565752" stroke-width="0.55" opacity="0.16">
  <path d="M70 146 L70 520"/><path d="M170 141 L170 520"/><path d="M270 136 L270 520"/>
  <path d="M370 131 L370 520"/><path d="M470 126 L470 520"/><path d="M570 121 L570 520"/>
</g>
<path d="M120 148 Q 168 300 132 520 L182 520 Q 214 296 168 146 Z" fill="#4a4b47" opacity="0.20"/>

<g filter="url(#ev2-dagger-soft)" opacity="0.72">
  <path d="M118 306 L300 300 L586 292 L600 306 L296 322 L120 330 Z" fill="#000"/>
  <ellipse cx="196" cy="322" rx="86" ry="22" fill="#000"/>
</g>

<!-- blade: upper lit bevel, lower shadow bevel, central ridge -->
<path d="M292 232 L520 240 L586 262 L292 262 Z" fill="url(#ev2-dagger-up)"/>
<path d="M292 262 L586 262 L520 284 L292 292 Z" fill="url(#ev2-dagger-dn)"/>
<path d="M292 262 L586 262" stroke="#aeb6bd" stroke-width="1.5" opacity="0.5"/>
<path d="M292 258 L580 261" stroke="#12151a" stroke-width="1.2" opacity="0.45"/>
<path d="M292 232 L520 240 L586 262" fill="none" stroke="#e6ecef" stroke-width="1.9" opacity="0.72"/>
<path d="M586 262 L520 284 L292 292" fill="none" stroke="#9fa8ae" stroke-width="1.3" opacity="0.45"/>
<path d="M300 236 L516 244 L578 261" fill="none" stroke="#ffffff" stroke-width="0.9" opacity="0.3"/>

<!-- the blackening, unevenly taken, and the grinder's striations -->
<path d="M330 238 Q 420 250 500 246 Q 470 268 380 264 Q 344 258 330 238 Z" fill="#191b1f" opacity="0.34"/>
<path d="M356 268 Q 440 280 528 272 Q 452 292 372 288 Z" fill="#0f1115" opacity="0.3"/>
<g stroke="#c9d1d6" stroke-width="0.6" opacity="0.18">
  <path d="M318 240 L340 260"/><path d="M352 241 L376 261"/><path d="M388 243 L412 261"/>
  <path d="M424 244 L448 261"/><path d="M462 246 L486 262"/><path d="M498 247 L520 262"/>
</g>
<g stroke="#0c0e12" stroke-width="0.7" opacity="0.3">
  <path d="M336 266 L316 288"/><path d="M372 266 L354 289"/><path d="M410 266 L392 288"/>
  <path d="M448 265 L432 286"/><path d="M486 264 L472 283"/></g>
<path d="M470 252 L510 254" stroke="#f2f6f8" stroke-width="1.1" opacity="0.35"/>
<path d="M540 258 Q 560 254 578 260" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.45" stroke-linecap="round"/>

<!-- where the blade was cut down: a fresh unblackened grind at the point -->
<path d="M520 240 L586 262 L520 284 L536 262 Z" fill="#8a9299" opacity="0.42"/>
<path d="M544 250 L582 261 L544 274" fill="none" stroke="#f4f8fa" stroke-width="0.8" opacity="0.4"/>

<!-- the cutlers' stamp, impressed near the ricasso: shape only -->
<g opacity="0.85">
  <path d="M310 244 L336 244 L336 258 L323 266 L310 258 Z" fill="#14171b" opacity="0.55"/>
  <path d="M310 244 L336 244 L336 258 L323 266 L310 258 Z" fill="none" stroke="#b9c1c7" stroke-width="0.8" opacity="0.5"/>
  <path d="M314 249 L322 254 L330 249" fill="none" stroke="#c8d0d5" stroke-width="1" opacity="0.45"/>
  <circle cx="318" cy="258" r="1.5" fill="#0d0f13" opacity="0.6"/>
  <circle cx="328" cy="258" r="1.5" fill="#0d0f13" opacity="0.6"/>
</g>

<!-- the gummed pawnshop label, scraped at but not off -->
<path d="M392 234 L470 238 L468 254 L390 250 Z" fill="url(#ev2-dagger-label)" opacity="0.55"/>
<path d="M392 234 L470 238 L468 254 L390 250 Z" fill="none" stroke="#e8dfc0" stroke-width="0.6" opacity="0.35"/>
<path d="M404 236 L404 252 M418 237 L417 253 M434 237 L433 253 M450 238 L449 254" stroke="#8a7f5f" stroke-width="0.5" opacity="0.4"/>
<path d="M392 234 L436 236 L430 252 L390 250 Z" fill="#0f1115" opacity="0.35"/>
<g stroke="#e4dbbb" stroke-width="0.7" opacity="0.5">
  <path d="M396 240 L466 243"/><path d="M398 246 L464 249"/><path d="M400 236 L470 240"/>
</g>
<path d="M466 238 q 12 3 6 12 q -6 5 -8 -1 q 6 -4 -1 -9 Z" fill="#cdc2a0" opacity="0.7"/>
<path d="M466 238 q 12 3 6 12" fill="none" stroke="#f0e7c6" stroke-width="0.7" opacity="0.6"/>

<!-- brass guard -->
<path d="M276 208 L296 206 L300 316 L278 318 Z" fill="url(#ev2-dagger-brass)"/>
<path d="M276 208 L296 206 L297 232 L277 234 Z" fill="#f6e6b0" opacity="0.4"/>
<path d="M279 280 L299 278 L300 316 L278 318 Z" fill="#3d2f13" opacity="0.45"/>
<path d="M281 210 L281 316" stroke="#fff3c8" stroke-width="1.6" opacity="0.5"/>
<path d="M294 208 L296 316" stroke="#2b2109" stroke-width="1.2" opacity="0.5"/>
<ellipse cx="286" cy="250" rx="7" ry="4" fill="#fff8d8" opacity="0.35"/>
<path d="M276 250 L300 249" stroke="#7b6224" stroke-width="0.8" opacity="0.45"/>

<!-- ferrule, grip, pommel -->
<path d="M258 226 L278 222 L280 300 L260 296 Z" fill="url(#ev2-dagger-brass)"/>
<path d="M260 228 L260 296" stroke="#ffeeb8" stroke-width="1.4" opacity="0.45"/>
<path d="M275 224 L277 298" stroke="#33280d" stroke-width="1.1" opacity="0.5"/>
<path d="M158 226 L258 222 L260 298 L160 294 Z" fill="url(#ev2-dagger-wood)"/>
<path d="M158 226 L258 222 L259 244 L159 248 Z" fill="#9a6a41" opacity="0.35"/>
<path d="M160 276 L259 272 L260 298 L160 294 Z" fill="#160d09" opacity="0.4"/>
<g stroke="#2a1a11" stroke-width="0.8" opacity="0.55" fill="none">
  <path d="M160 240 Q 208 234 258 238"/><path d="M160 254 Q 206 250 259 252"/>
  <path d="M161 268 Q 210 262 259 266"/><path d="M162 282 Q 208 278 259 280"/>
</g>
<g stroke="#a07248" stroke-width="0.5" opacity="0.3" fill="none">
  <path d="M160 234 Q 206 230 258 232"/><path d="M161 248 Q 210 244 258 246"/><path d="M162 262 Q 206 258 259 260"/>
</g>
<path d="M172 230 Q 206 226 244 228" fill="none" stroke="#d2a273" stroke-width="3" opacity="0.28" stroke-linecap="round"/>
<path d="M196 244 q 8 -3 12 4 q -3 8 -13 5 q -4 -6 1 -9 Z" fill="#2b1a10" opacity="0.5"/>
<path d="M224 272 L238 284" stroke="#c79a6c" stroke-width="1.2" opacity="0.35"/>
<path d="M132 224 L160 224 L162 296 L134 296 Z" fill="url(#ev2-dagger-brass)"/>
<path d="M132 224 L160 224 L161 242 L133 242 Z" fill="#fdefbe" opacity="0.42"/>
<path d="M134 274 L162 274 L162 296 L134 296 Z" fill="#3a2c11" opacity="0.5"/>
<ellipse cx="144" cy="252" rx="7" ry="10" fill="#fff8dc" opacity="0.32"/>
<path d="M132 224 L134 296" stroke="#fff2c4" stroke-width="1.5" opacity="0.5"/>
<path d="M158 226 L160 294" stroke="#2c2209" stroke-width="1" opacity="0.45"/>
<path d="M132 258 L162 258" stroke="#6d5620" stroke-width="0.9" opacity="0.4"/>

<!-- a thumbprint smear left in the blackening -->
<g opacity="0.16" fill="none" stroke="#dfe6ea" stroke-width="1">
  <path d="M348 246 q 9 10 -1 20"/><path d="M354 242 q 15 14 -1 28"/><path d="M360 239 q 20 17 -2 34"/>
</g>
<!-- dust settled on the cloth around it -->
<g fill="#cdc6b4" opacity="0.1">
  <circle cx="380" cy="360" r="1.4"/><circle cx="446" cy="342" r="1"/><circle cx="228" cy="378" r="1.2"/>
  <circle cx="512" cy="330" r="1.1"/><circle cx="150" cy="352" r="1"/><circle cx="300" cy="392" r="1.3"/>
</g>
<rect width="640" height="520" fill="url(#ev2-dagger-vig)"/>
`,
  },

  /* The true prop, pushed down into the sand of a fire bucket. */
  c2_propdagger: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-prop-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241f1a"/><stop offset="1" stop-color="#0a0908"/>
  </linearGradient>
  <radialGradient id="ev2-prop-pool" cx="0.32" cy="0.16" r="0.74">
    <stop offset="0" stop-color="#e0c58c" stop-opacity="0.24"/><stop offset="1" stop-color="#e0c58c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-prop-paint" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#a83a26"/><stop offset="0.4" stop-color="#7b2416"/><stop offset="1" stop-color="#3c110b"/>
  </linearGradient>
  <radialGradient id="ev2-prop-sand" cx="0.36" cy="0.3" r="0.82">
    <stop offset="0" stop-color="#cfae74"/><stop offset="0.55" stop-color="#9c7d4d"/><stop offset="1" stop-color="#4e3b23"/>
  </radialGradient>
  <linearGradient id="ev2-prop-steel" x1="0.1" y1="0" x2="0.5" y2="1">
    <stop offset="0" stop-color="#e9eef1"/><stop offset="0.45" stop-color="#98a1a8"/><stop offset="1" stop-color="#4d5259"/>
  </linearGradient>
  <linearGradient id="ev2-prop-hilt" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#6b4a2c"/><stop offset="0.45" stop-color="#3d2818"/><stop offset="1" stop-color="#1b110b"/>
  </linearGradient>
  <linearGradient id="ev2-prop-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0dda6"/><stop offset="0.3" stop-color="#b99447"/><stop offset="1" stop-color="#54401a"/>
  </linearGradient>
  <filter id="ev2-prop-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-prop-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-prop-bg)"/>
<path d="M0 120 L640 96 L640 520 L0 520 Z" fill="#191412"/>
<g stroke="#332a24" stroke-width="1.2" opacity="0.5">
  <path d="M0 176 L640 152"/><path d="M0 264 L640 240"/><path d="M0 352 L640 328"/><path d="M0 440 L640 416"/>
</g>
<rect width="640" height="520" fill="url(#ev2-prop-pool)"/>

<g filter="url(#ev2-prop-soft)" opacity="0.8">
  <ellipse cx="356" cy="446" rx="216" ry="46" fill="#000"/>
</g>

<!-- bucket body, seen from just above the rim -->
<path d="M118 168 Q 320 118 528 172 L494 424 Q 320 470 150 420 Z" fill="url(#ev2-prop-paint)"/>
<path d="M118 168 Q 320 118 528 172 L520 218 Q 320 168 126 214 Z" fill="#c1543a" opacity="0.4"/>
<path d="M420 190 L496 182 L470 420 Q 424 436 388 440 Z" fill="#210806" opacity="0.42"/>
<path d="M150 200 Q 168 320 176 414" fill="none" stroke="#e08d6d" stroke-width="7" opacity="0.22" stroke-linecap="round"/>
<path d="M196 190 Q 208 316 214 424" fill="none" stroke="#f0a684" stroke-width="3" opacity="0.16" stroke-linecap="round"/>
<g stroke="#33100a" stroke-width="1.4" opacity="0.4" fill="none">
  <path d="M130 262 Q 320 300 518 258"/><path d="M136 330 Q 320 368 508 326"/>
</g>
<!-- chips and rust in the enamel -->
<path d="M228 396 q 12 -6 20 3 q -8 10 -22 5 Z" fill="#6a5a3a" opacity="0.55"/>
<path d="M462 300 q 10 -4 12 6 q -10 6 -14 -2 Z" fill="#6e5232" opacity="0.5"/>
<path d="M172 288 q 8 -5 12 2 q -6 7 -13 3 Z" fill="#5c4a2e" opacity="0.45"/>
<g fill="#2a0c07" opacity="0.5">
  <circle cx="300" cy="418" r="3"/><circle cx="360" cy="428" r="2.2"/><circle cx="252" cy="352" r="1.8"/>
</g>

<!-- galvanised rim -->
<ellipse cx="322" cy="176" rx="206" ry="60" fill="#8f9298"/>
<ellipse cx="322" cy="176" rx="206" ry="60" fill="none" stroke="#dfe4e8" stroke-width="3" opacity="0.55"/>
<path d="M116 176 Q 190 118 322 116" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.4"/>
<path d="M452 128 Q 524 148 528 176" fill="none" stroke="#22262a" stroke-width="3" opacity="0.4"/>
<ellipse cx="322" cy="180" rx="190" ry="52" fill="#2a2620"/>
<ellipse cx="322" cy="180" rx="190" ry="52" fill="none" stroke="#1a1713" stroke-width="2"/>

<!-- the sand -->
<ellipse cx="322" cy="192" rx="186" ry="50" fill="url(#ev2-prop-sand)"/>
<path d="M136 192 Q 200 152 322 146 Q 452 150 508 192 Q 440 168 322 164 Q 206 168 136 192 Z" fill="#e0c48a" opacity="0.4"/>
<path d="M180 224 Q 320 262 470 220 Q 380 244 320 244 Q 254 244 180 224 Z" fill="#3a2c19" opacity="0.5"/>
<g fill="#f0dcae" opacity="0.35">
  <circle cx="220" cy="184" r="1.6"/><circle cx="256" cy="200" r="1.2"/><circle cx="300" cy="172" r="1.4"/>
  <circle cx="344" cy="196" r="1.3"/><circle cx="392" cy="178" r="1.5"/><circle cx="430" cy="200" r="1.2"/>
  <circle cx="188" cy="204" r="1.3"/><circle cx="466" cy="188" r="1.1"/><circle cx="272" cy="222" r="1.2"/>
  <circle cx="360" cy="226" r="1.4"/><circle cx="410" cy="214" r="1"/><circle cx="240" cy="164" r="1.1"/>
</g>
<g fill="#4a3820" opacity="0.4">
  <circle cx="234" cy="196" r="1.4"/><circle cx="286" cy="212" r="1.2"/><circle cx="330" cy="186" r="1.3"/>
  <circle cx="378" cy="208" r="1.1"/><circle cx="424" cy="184" r="1.3"/><circle cx="200" cy="216" r="1.2"/>
</g>
<!-- the hurried scoop that buried it -->
<path d="M226 212 Q 300 178 386 194 Q 320 196 258 224 Z" fill="#5c4426" opacity="0.45"/>
<path d="M232 210 Q 300 180 380 194" fill="none" stroke="#e3c894" stroke-width="2" opacity="0.4"/>
<path d="M254 168 Q 300 156 348 164" fill="none" stroke="#6a5030" stroke-width="3" opacity="0.35" stroke-linecap="round"/>
<path d="M262 234 q 22 -12 44 -4 q -20 12 -46 8 Z" fill="#33260f" opacity="0.35"/>
<!-- the trick dagger, lying in the sand where it was pushed under -->
<g filter="url(#ev2-prop-soft)" opacity="0.55">
  <ellipse cx="330" cy="216" rx="128" ry="26" fill="#000"/>
</g>
<g transform="translate(184,164) rotate(13) scale(1.06)">
  <!-- pommel and grip -->
  <path d="M-10 -15 L8 -16 L8 15 L-10 14 Q -16 0 -10 -15 Z" fill="url(#ev2-prop-brass)"/>
  <path d="M-10 -15 L8 -16 L8 -6 L-13 -5 Z" fill="#fdf0bd" opacity="0.45"/>
  <path d="M-13 6 L8 6 L8 15 L-10 14 Z" fill="#3a2c11" opacity="0.5"/>
  <path d="M8 -13 L92 -12 L92 12 L8 13 Z" fill="url(#ev2-prop-hilt)"/>
  <path d="M8 -13 L92 -12 L92 -4 L8 -5 Z" fill="#9b6f42" opacity="0.4"/>
  <path d="M8 5 L92 4 L92 12 L8 13 Z" fill="#150d07" opacity="0.45"/>
  <g stroke="#20140c" stroke-width="1.1" opacity="0.5" fill="none">
    <path d="M24 -12 L20 12"/><path d="M44 -12 L40 12"/><path d="M64 -12 L60 12"/><path d="M84 -12 L80 12"/>
  </g>
  <g stroke="#b78352" stroke-width="0.7" opacity="0.35" fill="none">
    <path d="M16 -12 L12 12"/><path d="M36 -12 L32 12"/><path d="M56 -12 L52 12"/><path d="M76 -12 L72 12"/>
  </g>
  <path d="M14 -9 L88 -8" stroke="#d3a271" stroke-width="3" opacity="0.28" stroke-linecap="round"/>
  <path d="M92 -15 L106 -15 L106 15 L92 15 Z" fill="url(#ev2-prop-brass)"/>
  <path d="M92 -15 L106 -15 L106 -5 L92 -5 Z" fill="#ffeeb4" opacity="0.45"/>
  <!-- crossguard, worn bright where the hand rides it -->
  <path d="M104 -30 L120 -30 L120 30 L104 30 Z" fill="url(#ev2-prop-brass)"/>
  <path d="M104 -30 L120 -30 L120 -8 L104 -8 Z" fill="#fff3c2" opacity="0.5"/>
  <path d="M104 14 L120 14 L120 30 L104 30 Z" fill="#3a2c11" opacity="0.5"/>
  <ellipse cx="110" cy="-14" rx="4" ry="9" fill="#fffbe2" opacity="0.4"/>
  <path d="M104 0 L120 0" stroke="#6f5820" stroke-width="1" opacity="0.4"/>
  <!-- the blade: sprung most of the way out, blunt round tip, dull edges -->
  <path d="M120 -11 L214 -9 L246 -3 Q 254 0 246 3 L214 9 L120 11 Z" fill="url(#ev2-prop-steel)"/>
  <path d="M120 -11 L214 -9 L246 -3 L120 -1 Z" fill="#ffffff" opacity="0.26"/>
  <path d="M120 1 L246 3 L214 9 L120 11 Z" fill="#232830" opacity="0.4"/>
  <path d="M120 0 L248 0" stroke="#dfe7ec" stroke-width="1.4" opacity="0.5"/>
  <path d="M122 -9 L212 -7 L244 -2" fill="none" stroke="#f8fbfd" stroke-width="1.8" opacity="0.6"/>
  <path d="M122 9 L212 7 L244 2" fill="none" stroke="#171b21" stroke-width="1.4" opacity="0.45"/>
  <path d="M160 -6 L188 -5" stroke="#ffffff" stroke-width="2.6" opacity="0.3" stroke-linecap="round"/>
  <!-- the retraction slot at the guard, sprung open, with sand packed in it -->
  <path d="M120 -8 L142 -8 L142 8 L120 8 Z" fill="#0d0f12" opacity="0.75"/>
  <path d="M124 -6 q 6 4 -3 6 q 9 3 1 6" fill="none" stroke="#c3ccd2" stroke-width="1.2" opacity="0.45"/>
  <g fill="#d6b57c" opacity="0.7">
    <circle cx="132" cy="-3" r="1.7"/><circle cx="138" cy="3" r="1.4"/><circle cx="128" cy="5" r="1.2"/>
  </g>
  <!-- greasepaint worked into the guard by two hundred performances -->
  <path d="M112 20 q 9 3 6 10 q -10 1 -10 -7 Z" fill="#c98f7a" opacity="0.42"/>
  <path d="M96 -18 q 8 -4 12 3 q -8 6 -14 0 Z" fill="#c98f7a" opacity="0.3"/>
</g>
<!-- sand pushed back over it: a mound across the blade and grains on the steel -->
<path d="M350 212 Q 400 200 444 214 Q 452 224 428 230 Q 386 236 352 226 Q 340 218 350 212 Z" fill="url(#ev2-prop-sand)" opacity="0.95"/>
<path d="M356 214 Q 400 203 440 215" fill="none" stroke="#e6cb95" stroke-width="2.4" opacity="0.45"/>
<path d="M362 228 Q 398 236 428 229 Q 396 242 360 234 Z" fill="#3f3018" opacity="0.5"/>
<path d="M206 176 Q 234 166 258 174 Q 236 184 208 184 Z" fill="url(#ev2-prop-sand)" opacity="0.85"/>
<path d="M209 176 Q 234 169 255 175" fill="none" stroke="#e6cb95" stroke-width="1.8" opacity="0.4"/>
<g fill="#e2c48c" opacity="0.75">
  <circle cx="322" cy="196" r="1.7"/><circle cx="340" cy="204" r="1.3"/><circle cx="300" cy="188" r="1.5"/>
  <circle cx="358" cy="200" r="1.2"/><circle cx="278" cy="182" r="1.4"/><circle cx="252" cy="192" r="1.1"/>
  <circle cx="212" cy="172" r="1.3"/><circle cx="404" cy="210" r="1.4"/>
</g>
<g fill="#5a4425" opacity="0.5">
  <circle cx="312" cy="204" r="1.3"/><circle cx="286" cy="196" r="1.1"/><circle cx="348" cy="192" r="1.2"/>
</g>

<rect width="640" height="520" fill="url(#ev2-prop-vig)"/>
`,
  },

  /* Lillian's curtain speech, the bottom half torn away in a hand. */
  c2_speech: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-speech-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#2a251d"/><stop offset="1" stop-color="#0b0906"/>
  </linearGradient>
  <radialGradient id="ev2-speech-pool" cx="0.3" cy="0.18" r="0.76">
    <stop offset="0" stop-color="#e7cf99" stop-opacity="0.26"/><stop offset="1" stop-color="#e7cf99" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-speech-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#4a3626"/><stop offset="0.6" stop-color="#2b1f15"/><stop offset="1" stop-color="#150f0a"/>
  </linearGradient>
  <linearGradient id="ev2-speech-paper" x1="0.05" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#f4ecd6"/><stop offset="0.45" stop-color="#e2d6b8"/><stop offset="1" stop-color="#b6a888"/>
  </linearGradient>
  <linearGradient id="ev2-speech-tear" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#cfc2a2"/><stop offset="1" stop-color="#8e8163"/>
  </linearGradient>
  <filter id="ev2-speech-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-speech-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-speech-bg)"/>
<path d="M0 106 L640 78 L640 520 L0 520 Z" fill="url(#ev2-speech-desk)"/>
<g stroke="#5b432e" stroke-width="1" opacity="0.3" fill="none">
  <path d="M0 158 Q 320 142 640 126"/><path d="M0 214 Q 320 200 640 182"/><path d="M0 276 Q 320 258 640 240"/>
  <path d="M0 340 Q 320 322 640 302"/><path d="M0 408 Q 320 388 640 368"/><path d="M0 474 Q 320 454 640 434"/>
</g>
<g stroke="#1d140d" stroke-width="0.7" opacity="0.35" fill="none">
  <path d="M0 186 Q 320 170 640 152"/><path d="M0 312 Q 320 292 640 272"/><path d="M0 440 Q 320 420 640 400"/>
</g>
<rect width="640" height="520" fill="url(#ev2-speech-pool)"/>

<g filter="url(#ev2-speech-soft)" opacity="0.75">
  <path d="M120 96 L520 82 L536 372 L136 396 Z" fill="#000"/>
</g>

<!-- the surviving top half of the sheet, torn raggedly across the bottom -->
<path d="M112 74 L512 62 L518 278 L504 268 L492 282 L478 266 L464 280 L450 268 L436 284 L422 270 L408 286 L394 272 L380 288 L366 274 L352 290 L338 276 L324 292 L310 278 L296 294 L282 280 L268 296 L254 282 L240 298 L226 284 L212 300 L198 286 L184 302 L170 288 L156 304 L142 290 L128 306 L114 292 Z" fill="url(#ev2-speech-paper)"/>
<path d="M112 74 L512 62 L514 96 L114 108 Z" fill="#fbf5e4" opacity="0.35"/>
<path d="M470 66 L512 62 L518 278 L492 282 L478 266 Z" fill="#9a8d6f" opacity="0.3"/>
<!-- the raw torn edge, brighter fibre where the sheet gave way -->
<path d="M518 278 L504 268 L492 282 L478 266 L464 280 L450 268 L436 284 L422 270 L408 286 L394 272 L380 288 L366 274 L352 290 L338 276 L324 292 L310 278 L296 294 L282 280 L268 296 L254 282 L240 298 L226 284 L212 300 L198 286 L184 302 L170 288 L156 304 L142 290 L128 306 L114 292" fill="none" stroke="#fdf8ea" stroke-width="2.6" opacity="0.7"/>
<path d="M514 272 L502 263 L490 276 L476 261 L462 274 L448 263 L434 278 L420 265 L406 280 L392 267 L378 282 L364 269 L350 284 L336 271 L322 286 L308 273 L294 288 L280 275 L266 290 L252 277 L238 292 L224 279 L210 294 L196 281 L182 296 L168 283 L154 298 L140 285 L126 300" fill="none" stroke="#a2947a" stroke-width="1" opacity="0.4"/>
<g stroke="#c9bb9a" stroke-width="0.7" opacity="0.5" fill="none">
  <path d="M170 288 L166 296"/><path d="M240 298 L244 306"/><path d="M310 278 L306 286"/>
  <path d="M380 288 L384 296"/><path d="M450 268 L446 276"/><path d="M128 306 L124 313"/>
  <path d="M198 286 L202 293"/><path d="M268 296 L264 304"/><path d="M340 277 L344 284"/>
</g>

<!-- a hard crease where the grabbing hand crushed it -->
<path d="M348 66 Q 372 172 338 290" fill="none" stroke="#a3957a" stroke-width="3" opacity="0.4"/>
<path d="M352 66 Q 376 172 342 288" fill="none" stroke="#fbf6e6" stroke-width="1.6" opacity="0.5"/>
<path d="M228 70 Q 246 176 222 292" fill="none" stroke="#ab9d81" stroke-width="2" opacity="0.28"/>
<path d="M232 70 Q 250 176 226 290" fill="none" stroke="#f8f2e0" stroke-width="1" opacity="0.35"/>
<path d="M300 250 q 40 -8 74 6 q -36 14 -78 4 Z" fill="#b0a284" opacity="0.28"/>

<!-- fold shadow across the middle -->
<path d="M114 180 L516 168 L516 176 L114 188 Z" fill="#a4977c" opacity="0.35"/>
<path d="M114 176 L516 164" stroke="#fdf9ec" stroke-width="1.4" opacity="0.45"/>

<!-- ink: her hand, as strokes only. Uneven word lengths, ascenders,
     descenders, a drifting baseline — the shape of writing, never writing. -->
<g stroke="#26304a" stroke-width="2.1" opacity="0.82" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M366 118 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M394 117 q4 -8 8 0 q3 6 7 -3 M418 116 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2"/>
  <path d="M132 152 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 q3 7 7 -3 M180 151 q4 -8 8 0 q3 6 7 -3 M204 150 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M244 149 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M280 148 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 q3 7 8 -3 M326 146 q4 -8 8 0 q3 6 7 -3 M350 145 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M390 144 q4 -8 8 0 q3 6 7 -3 M416 143 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1"/>
  <path d="M132 186 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M176 185 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 M216 184 q4 -8 8 0 q3 6 7 -3 M248 183 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M288 181 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 q3 7 8 -3 M334 180 q4 -8 8 0 q3 6 7 -3 M366 179 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M406 178 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 M440 177 q4 -8 8 0 q3 6 7 -3"/>
  <path d="M130 220 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M166 219 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 q3 7 8 -3 M212 218 q4 -8 8 0 q3 6 7 -3 M242 217 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M286 215 q4 -8 8 0 q3 6 7 -3 M320 214 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 M366 213 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M400 212 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M438 211 q4 -8 8 0 q3 6 7 -3"/>
  <path d="M130 252 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 q3 7 8 -3 M176 251 q4 -8 8 0 q3 6 7 -3 M206 250 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M248 249 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 M282 248 q4 -8 8 0 q3 6 7 -3 M310 247 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 M362 246 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M406 245 q5 -8 9 -1 q3 7 8 -2"/>
</g>
<!-- the last line before the tear, pressed hard and underscored twice -->
<g stroke="#141c31" stroke-width="3.2" opacity="0.92" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M166 282 q5 -11 10 -1 q4 8 9 -2 q5 -9 10 1 q4 7 8 -3 M214 281 q5 -10 10 0 q4 8 9 -4 M244 280 q-4 -22 5 -21 q6 4 0 19 q3 7 9 -1 q5 -9 10 1 q4 7 9 -3 q5 -10 10 0 M310 278 q5 -10 10 -1 q4 9 10 -3 q5 -9 9 1 q1 10 -3 15 M356 277 q5 -11 10 -1 q4 8 9 -2 q5 -9 10 1"/>
</g>
<path d="M162 294 L400 284" stroke="#1a2340" stroke-width="2.4" opacity="0.75"/>
<path d="M164 300 L398 290" stroke="#1a2340" stroke-width="1.5" opacity="0.55"/>
<!-- an ink blot where the nib stopped, and its halo in the fibre -->
<path d="M404 276 q11 -4 13 5 q-4 9 -14 4 q-5 -6 1 -9 Z" fill="#1b2440" opacity="0.75"/>
<circle cx="408" cy="272" r="4.5" fill="#3d4a6d" opacity="0.25"/>
<circle cx="420" cy="286" r="2" fill="#1b2440" opacity="0.5"/>

<!-- paper fibre and foxing -->
<g fill="#a3906c" opacity="0.28">
  <circle cx="200" cy="130" r="1.4"/><circle cx="420" cy="172" r="1.8"/><circle cx="286" cy="222" r="1.2"/>
  <circle cx="470" cy="246" r="2"/><circle cx="150" cy="264" r="1.5"/><circle cx="380" cy="98" r="1.3"/>
  <circle cx="330" cy="182" r="1.1"/><circle cx="240" cy="286" r="1.6"/>
</g>
<g stroke="#c0b090" stroke-width="0.5" opacity="0.3" fill="none">
  <path d="M130 120 L166 118"/><path d="M420 220 L456 216"/><path d="M250 168 L286 166"/>
</g>
<path d="M436 226 q 26 -8 48 4 q -24 12 -50 2 Z" fill="#b8a271" opacity="0.22"/>

<rect width="640" height="520" fill="url(#ev2-speech-vig)"/>
`,
  },

  /* Seven years of letters from a dead man, tied in a faded ribbon. */
  c2_letters: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-letters-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#26211a"/><stop offset="1" stop-color="#0a0806"/>
  </linearGradient>
  <radialGradient id="ev2-letters-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e4cd97" stop-opacity="0.26"/><stop offset="1" stop-color="#e4cd97" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-letters-drawer" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#42301f"/><stop offset="0.6" stop-color="#241a11"/><stop offset="1" stop-color="#100b07"/>
  </linearGradient>
  <linearGradient id="ev2-letters-paper" x1="0.05" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#f0e4c6"/><stop offset="0.5" stop-color="#dbcba6"/><stop offset="1" stop-color="#ab9b76"/>
  </linearGradient>
  <linearGradient id="ev2-letters-paper2" x1="0.05" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#e7d9b6"/><stop offset="0.5" stop-color="#cbbb95"/><stop offset="1" stop-color="#968765"/>
  </linearGradient>
  <linearGradient id="ev2-letters-ribbon" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#b6708a"/><stop offset="0.35" stop-color="#8a4560"/><stop offset="1" stop-color="#43202f"/>
  </linearGradient>
  <filter id="ev2-letters-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-letters-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-letters-bg)"/>
<path d="M0 96 L640 74 L640 520 L0 520 Z" fill="url(#ev2-letters-drawer)"/>
<g stroke="#54402a" stroke-width="1" opacity="0.28" fill="none">
  <path d="M0 150 L640 128"/><path d="M0 210 L640 188"/><path d="M0 274 L640 250"/>
  <path d="M0 340 L640 316"/><path d="M0 408 L640 382"/><path d="M0 474 L640 448"/>
</g>
<g stroke="#160f09" stroke-width="0.8" opacity="0.4" fill="none">
  <path d="M0 178 L640 156"/><path d="M0 306 L640 282"/><path d="M0 442 L640 416"/>
</g>
<rect width="640" height="520" fill="url(#ev2-letters-pool)"/>

<g filter="url(#ev2-letters-soft)" opacity="0.78">
  <path d="M96 168 L520 130 L556 402 L132 440 Z" fill="#000"/>
</g>

<!-- the stack: several letters, edges offset -->
<path d="M108 350 L508 306 L516 356 L118 400 Z" fill="#8e805f"/>
<path d="M104 336 L504 292 L512 344 L114 388 Z" fill="#a3946f"/>
<path d="M110 322 L510 278 L516 328 L118 372 Z" fill="#b9a97f"/>
<path d="M102 306 L502 262 L510 314 L110 358 Z" fill="#cbba8d"/>
<g stroke="#7d704f" stroke-width="0.6" opacity="0.55" fill="none">
  <path d="M108 350 L508 306"/><path d="M104 336 L504 292"/><path d="M110 322 L510 278"/><path d="M102 306 L502 262"/>
</g>

<!-- the top letter, unfolded, its fold creases still standing -->
<path d="M96 148 L500 108 L514 320 L112 362 Z" fill="url(#ev2-letters-paper)"/>
<path d="M96 148 L500 108 L502 140 L98 180 Z" fill="#fbf3dd" opacity="0.32"/>
<path d="M452 112 L500 108 L514 320 L468 326 Z" fill="#8b7d5c" opacity="0.28"/>
<path d="M96 148 L500 108 L514 320 L112 362 Z" fill="none" stroke="#f6eed6" stroke-width="1.4" opacity="0.45"/>
<!-- horizontal fold, with the light catching its ridge -->
<path d="M100 218 L506 176 L506 186 L100 228 Z" fill="#9b8d6a" opacity="0.4"/>
<path d="M100 214 L506 172" stroke="#fdf7e4" stroke-width="1.6" opacity="0.55"/>
<path d="M102 282 L510 240 L510 248 L102 290 Z" fill="#9b8d6a" opacity="0.3"/>
<path d="M102 278 L510 236" stroke="#fdf7e4" stroke-width="1.2" opacity="0.4"/>
<path d="M290 122 Q 300 226 306 340" fill="none" stroke="#9d8f6c" stroke-width="2.4" opacity="0.3"/>
<path d="M294 122 Q 304 226 310 340" fill="none" stroke="#fbf4e0" stroke-width="1.1" opacity="0.4"/>

<!-- ink: a dated header top-right, body lines, then the signature -->
<g stroke="#43381f" stroke-width="2" opacity="0.75" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M362 148 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M394 145 q4 -8 8 0 q3 6 7 -3 M420 142 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1"/>
  <path d="M130 180 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 q3 7 7 -3 M174 176 q4 -8 8 0 q3 6 7 -3 M214 172 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M252 168 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M296 164 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 M336 160 q4 -8 8 0 q3 6 7 -3 M374 156 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M414 152 q5 -8 9 -1 q3 7 8 -2"/>
  <path d="M126 212 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M168 208 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M208 204 q4 -8 8 0 q3 6 7 -3 M246 200 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 M288 196 q4 -8 8 0 q3 6 7 -3 M328 192 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M368 188 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 M410 184 q4 -8 8 0 q3 6 7 -3"/>
  <path d="M124 244 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M166 240 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M202 236 q4 -8 8 0 q3 6 7 -3 M244 232 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 q3 7 8 -3 M286 228 q4 -8 8 0 q3 6 7 -3 M324 224 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M366 220 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 M404 216 q4 -8 8 0 q3 6 7 -3"/>
</g>
<!-- the line about the title, pressed harder and underscored -->
<g stroke="#221c0e" stroke-width="2.9" opacity="0.88" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M122 278 q5 -10 10 -1 q4 8 9 -2 q5 -9 10 1 q4 7 8 -3 M168 273 q5 -10 10 0 q4 8 9 -4 M212 269 q-4 -21 5 -20 q6 4 0 18 q3 7 9 -1 q5 -9 10 1 q4 7 9 -3 M262 265 q5 -10 10 -1 q4 9 10 -3 q5 -9 9 1 q1 10 -3 15 M306 261 q5 -10 10 0 q4 8 9 -3 q5 -9 10 1"/>
</g>
<path d="M118 290 L344 268" stroke="#2a2211" stroke-width="2" opacity="0.6"/>
<!-- the signature, larger, looping, pressed into the paper -->
<g stroke="#2c2412" stroke-width="3.2" opacity="0.88" fill="none" stroke-linecap="round">
  <path d="M300 320 q-6 -30 8 -30 q10 2 2 26 q-2 12 6 12 q8 0 10 -12 q3 -12 10 -4 q4 6 10 -2"/>
  <path d="M348 306 q-4 -26 8 -25 q9 2 1 22 q-1 10 7 9 q7 -1 9 -10 q3 -10 9 -2 q4 6 10 -3 q6 -8 12 4"/>
  <path d="M300 322 q56 16 108 -12"/>
</g>
<circle cx="418" cy="292" r="2.2" fill="#2c2412" opacity="0.6"/>

<!-- foxing and fibre -->
<g fill="#9b8355" opacity="0.3">
  <circle cx="180" cy="160" r="2"/><circle cx="410" cy="242" r="2.4"/><circle cx="268" cy="300" r="1.6"/>
  <circle cx="470" cy="150" r="1.8"/><circle cx="140" cy="316" r="1.4"/><circle cx="330" cy="212" r="1.2"/>
  <circle cx="220" cy="130" r="1.3"/><circle cx="452" cy="290" r="1.7"/>
</g>
<path d="M420 244 q 28 -10 52 4 q -26 14 -54 2 Z" fill="#a98d55" opacity="0.22"/>
<path d="M150 320 q 22 -8 40 2 q -20 10 -42 2 Z" fill="#a98d55" opacity="0.2"/>

<!-- the ribbon that held them, worn shiny at the fold -->
<path d="M240 96 L300 90 L336 380 L272 388 Z" fill="url(#ev2-letters-ribbon)"/>
<path d="M240 96 L300 90 L306 118 L246 126 Z" fill="#d18ba6" opacity="0.35"/>
<path d="M318 260 L336 380 L272 388 L262 268 Z" fill="#341823" opacity="0.35"/>
<path d="M254 100 Q 276 240 292 384" fill="none" stroke="#e6a5bd" stroke-width="4" opacity="0.28" stroke-linecap="round"/>
<path d="M286 96 Q 306 236 322 382" fill="none" stroke="#2d141d" stroke-width="2.4" opacity="0.4"/>
<g stroke="#5c2c3f" stroke-width="0.7" opacity="0.45" fill="none">
  <path d="M244 140 L302 134"/><path d="M252 200 L310 194"/><path d="M260 262 L318 256"/><path d="M268 324 L326 318"/>
</g>
<!-- the bow: two flattened loops, a tail, and the knot over them -->
<path d="M300 224 q52 -34 78 -6 q14 16 -12 20 q-30 4 -62 -4 Z" fill="#7c3d56"/>
<path d="M304 222 q46 -26 68 -6" fill="none" stroke="#dd9db6" stroke-width="2.6" opacity="0.3" stroke-linecap="round"/>
<path d="M334 234 q30 4 44 -2 q-18 8 -46 6 Z" fill="#3c1b28" opacity="0.55"/>
<path d="M264 232 q-56 4 -74 40 q26 -6 50 -18 q18 -8 26 -12 Z" fill="#6d3549"/>
<path d="M260 236 q-46 8 -62 34" fill="none" stroke="#c78ba1" stroke-width="2.2" opacity="0.26" stroke-linecap="round"/>
<path d="M196 258 q-8 8 -6 14 q14 -4 26 -12 Z" fill="#371924" opacity="0.5"/>
<!-- the tail, hanging over the stack edge -->
<path d="M282 244 q-16 42 -38 60 q10 -50 26 -62 Z" fill="#5e2d40"/>
<path d="M278 248 q-14 36 -30 52" fill="none" stroke="#c78ba1" stroke-width="1.8" opacity="0.22"/>
<g stroke="#8e4a66" stroke-width="1" opacity="0.6" fill="none">
  <path d="M246 302 L240 312"/><path d="M252 300 L248 310"/><path d="M258 296 L254 306"/>
</g>
<!-- the knot itself, pinched and shiny at the crown -->
<path d="M258 208 q34 -14 54 0 q12 10 4 26 q-32 12 -60 -2 q-10 -14 2 -24 Z" fill="url(#ev2-letters-ribbon)"/>
<path d="M266 208 q28 -10 44 2" fill="none" stroke="#eeb0c6" stroke-width="3.4" opacity="0.4" stroke-linecap="round"/>
<path d="M258 228 q30 14 58 4" fill="none" stroke="#31161f" stroke-width="3" opacity="0.55"/>
<path d="M272 206 q-4 16 2 28" fill="none" stroke="#4a2131" stroke-width="1.4" opacity="0.5"/>
<path d="M298 206 q4 16 -2 28" fill="none" stroke="#4a2131" stroke-width="1.4" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev2-letters-vig)"/>
`,
  },

  /* The canceled 1931 playbill, and the obituary from the same August. */
  c2_playbill: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-bill-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241f19"/><stop offset="1" stop-color="#090807"/>
  </linearGradient>
  <radialGradient id="ev2-bill-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e2cc98" stop-opacity="0.24"/><stop offset="1" stop-color="#e2cc98" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-bill-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3f2d1e"/><stop offset="0.6" stop-color="#221810"/><stop offset="1" stop-color="#0f0a07"/>
  </linearGradient>
  <linearGradient id="ev2-bill-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f2e2b8"/><stop offset="0.45" stop-color="#dcc999"/><stop offset="1" stop-color="#a89468"/>
  </linearGradient>
  <linearGradient id="ev2-bill-news" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#e2ddcc"/><stop offset="0.5" stop-color="#c6bfa9"/><stop offset="1" stop-color="#918a75"/>
  </linearGradient>
  <linearGradient id="ev2-bill-stamp" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#a8262a"/><stop offset="0.5" stop-color="#7d1a1e"/><stop offset="1" stop-color="#5a1215"/>
  </linearGradient>
  <filter id="ev2-bill-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-bill-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-bill-bg)"/>
<path d="M0 82 L640 60 L640 520 L0 520 Z" fill="url(#ev2-bill-desk)"/>
<g stroke="#523c28" stroke-width="1" opacity="0.26" fill="none">
  <path d="M0 140 L640 118"/><path d="M0 206 L640 182"/><path d="M0 276 L640 250"/>
  <path d="M0 348 L640 322"/><path d="M0 420 L640 392"/><path d="M0 490 L640 462"/>
</g>
<rect width="640" height="520" fill="url(#ev2-bill-pool)"/>

<!-- the newspaper obituary column, tucked half under the playbill -->
<g filter="url(#ev2-bill-soft)" opacity="0.7">
  <path d="M366 138 L588 122 L602 424 L380 442 Z" fill="#000"/>
</g>
<path d="M362 130 L580 114 L594 418 L376 436 Z" fill="url(#ev2-bill-news)"/>
<path d="M362 130 L580 114 L582 146 L364 162 Z" fill="#f0ece0" opacity="0.3"/>
<path d="M540 118 L580 114 L594 418 L556 422 Z" fill="#7d7663" opacity="0.3"/>
<path d="M372 142 L572 128 L584 408 L384 424 Z" fill="none" stroke="#2a281f" stroke-width="3.5" opacity="0.75"/>
<path d="M378 148 L566 134" stroke="#2a281f" stroke-width="1.2" opacity="0.5"/>
<!-- the head: heavy short rules, then a rule, then column type -->
<g fill="#23211a" opacity="0.85">
  <rect x="398" y="164" width="52" height="9" rx="1"/><rect x="458" y="162" width="34" height="9" rx="1"/>
  <rect x="500" y="160" width="46" height="9" rx="1"/>
  <rect x="414" y="182" width="40" height="7" rx="1"/><rect x="462" y="180" width="58" height="7" rx="1"/>
</g>
<path d="M392 200 L560 188" stroke="#2a281f" stroke-width="1.6" opacity="0.6"/>
<path d="M470 208 L482 207" stroke="#2a281f" stroke-width="2" opacity="0.5"/>
<g stroke="#3a372c" stroke-width="4.4" opacity="0.72">
  <path d="M390 224 L556 212" stroke-dasharray="30 6 46 6 26 6 52"/>
  <path d="M390 238 L556 226" stroke-dasharray="44 6 24 6 50 6 38"/>
  <path d="M390 252 L556 240" stroke-dasharray="26 6 54 6 30 6 44"/>
  <path d="M390 266 L556 254" stroke-dasharray="48 6 28 6 42 6 34"/>
  <path d="M390 280 L556 268" stroke-dasharray="34 6 50 6 26 6 44"/>
  <path d="M390 294 L556 282" stroke-dasharray="52 6 30 6 46 6 26"/>
  <path d="M390 308 L556 296" stroke-dasharray="28 6 44 6 34 6 48"/>
  <path d="M390 322 L556 310" stroke-dasharray="46 6 26 6 52 6 30"/>
  <path d="M390 336 L556 324" stroke-dasharray="32 6 48 6 28 6 46"/>
  <path d="M390 350 L556 338" stroke-dasharray="50 6 28 6 40 6 32"/>
  <path d="M390 364 L556 352" stroke-dasharray="30 6 52 6 34 6 38"/>
  <path d="M390 378 L556 366" stroke-dasharray="44 6 24 6 50 6 28"/>
</g>
<!-- newsprint tone and a scissors edge -->
<g fill="#8f886f" opacity="0.25">
  <circle cx="430" cy="200" r="1.4"/><circle cx="520" cy="240" r="1.6"/><circle cx="466" cy="396" r="1.5"/>
</g>
<path d="M362 130 L376 436" fill="none" stroke="#f3efe4" stroke-width="1.2" opacity="0.4"/>

<!-- the playbill itself, aged and foxed, lying over it -->
<g filter="url(#ev2-bill-soft)" opacity="0.78">
  <path d="M62 78 L392 62 L412 452 L84 470 Z" fill="#000"/>
</g>
<path d="M56 66 L384 50 L402 446 L76 462 Z" fill="url(#ev2-bill-paper)"/>
<path d="M56 66 L384 50 L386 92 L58 108 Z" fill="#fbf0cf" opacity="0.34"/>
<path d="M344 52 L384 50 L402 446 L362 450 Z" fill="#8e7c54" opacity="0.28"/>
<path d="M56 66 L384 50 L402 446 L76 462 Z" fill="none" stroke="#f5e9c6" stroke-width="1.4" opacity="0.4"/>
<!-- ornamental double rule border -->
<path d="M74 84 L368 70 L384 428 L92 442 Z" fill="none" stroke="#5c4a26" stroke-width="2.4" opacity="0.6"/>
<path d="M82 92 L360 78 L375 420 L99 434 Z" fill="none" stroke="#5c4a26" stroke-width="0.9" opacity="0.45"/>
<!-- the theatre name block, then the title, then the authors -->
<g fill="#4a3a1c" opacity="0.8">
  <rect x="132" y="106" width="180" height="7" rx="1" transform="rotate(-2.7 222 109)"/>
  <rect x="164" y="122" width="116" height="5" rx="1" transform="rotate(-2.7 222 124)"/>
</g>
<path d="M104 142 L354 130" stroke="#5c4a26" stroke-width="1.4" opacity="0.5"/>
<g fill="#332812" opacity="0.88">
  <rect x="102" y="158" width="66" height="20" rx="2" transform="rotate(-2.7 135 168)"/>
  <rect x="176" y="154" width="98" height="20" rx="2" transform="rotate(-2.7 225 164)"/>
  <rect x="282" y="150" width="60" height="20" rx="2" transform="rotate(-2.7 312 160)"/>
</g>
<g fill="#4a3a1c" opacity="0.7">
  <rect x="150" y="192" width="24" height="7" rx="1" transform="rotate(-2.7 162 195)"/>
  <rect x="182" y="190" width="86" height="7" rx="1" transform="rotate(-2.7 225 193)"/>
  <rect x="276" y="186" width="30" height="7" rx="1" transform="rotate(-2.7 291 189)"/>
</g>
<g fill="#4a3a1c" opacity="0.7">
  <rect x="150" y="208" width="18" height="7" rx="1" transform="rotate(-2.7 159 211)"/>
  <rect x="176" y="206" width="62" height="7" rx="1" transform="rotate(-2.7 207 209)"/>
  <rect x="246" y="204" width="52" height="7" rx="1" transform="rotate(-2.7 272 207)"/>
</g>
<path d="M112 234 L346 222" stroke="#5c4a26" stroke-width="1" opacity="0.45"/>
<!-- cast list: paired short and long marks with leader dots -->
<g fill="#514021" opacity="0.62">
  <rect x="104" y="252" width="54" height="5"/><rect x="248" y="246" width="88" height="5"/>
  <rect x="106" y="272" width="66" height="5"/><rect x="252" y="266" width="80" height="5"/>
  <rect x="107" y="292" width="46" height="5"/><rect x="250" y="286" width="90" height="5"/>
  <rect x="109" y="312" width="62" height="5"/><rect x="254" y="306" width="76" height="5"/>
  <rect x="110" y="332" width="50" height="5"/><rect x="252" y="326" width="86" height="5"/>
  <rect x="112" y="352" width="58" height="5"/><rect x="256" y="346" width="72" height="5"/>
  <rect x="113" y="372" width="44" height="5"/><rect x="250" y="366" width="88" height="5"/>
</g>
<g stroke="#6a5730" stroke-width="1.4" stroke-dasharray="1.6 8" opacity="0.4">
  <path d="M166 255 L242 252"/><path d="M180 275 L246 272"/><path d="M160 295 L244 292"/>
  <path d="M178 315 L248 312"/><path d="M168 335 L246 332"/><path d="M176 355 L250 352"/><path d="M164 375 L244 372"/>
</g>
<path d="M116 396 L342 384" stroke="#5c4a26" stroke-width="1" opacity="0.4"/>
<g fill="#514021" opacity="0.5">
  <rect x="150" y="408" width="40" height="5"/><rect x="198" y="406" width="70" height="5"/><rect x="276" y="404" width="28" height="5"/>
</g>

<!-- the cancellation: a rubber stamp struck across the bill, ink broken and off-register -->
<g transform="rotate(-15 226 250)" opacity="0.82">
  <rect x="86" y="222" width="284" height="58" rx="4" fill="none" stroke="url(#ev2-bill-stamp)" stroke-width="6"/>
  <rect x="98" y="234" width="260" height="34" fill="url(#ev2-bill-stamp)" opacity="0.16"/>
  <g fill="url(#ev2-bill-stamp)" opacity="0.9">
    <rect x="112" y="240" width="34" height="20" rx="2"/><rect x="154" y="240" width="20" height="20" rx="2"/>
    <rect x="182" y="240" width="30" height="20" rx="2"/><rect x="220" y="240" width="24" height="20" rx="2"/>
    <rect x="252" y="240" width="36" height="20" rx="2"/><rect x="296" y="240" width="46" height="20" rx="2"/>
  </g>
  <g fill="#e6d6b4" opacity="0.5">
    <rect x="120" y="246" width="26" height="2.4"/><rect x="188" y="250" width="20" height="2"/>
    <rect x="258" y="244" width="30" height="2.2"/><rect x="302" y="252" width="34" height="2"/>
    <rect x="90" y="240" width="6" height="22"/><rect x="240" y="226" width="60" height="4"/>
  </g>
</g>

<!-- age: foxing, a dog-eared corner, a rust ring from a paperclip -->
<g fill="#a0844c" opacity="0.3">
  <circle cx="120" cy="180" r="2.4"/><circle cx="330" cy="260" r="2"/><circle cx="200" cy="420" r="1.8"/>
  <circle cx="88" cy="330" r="1.6"/><circle cx="300" cy="120" r="1.4"/><circle cx="250" cy="400" r="2.2"/>
</g>
<path d="M300 108 q 26 -8 46 6 q -24 12 -48 2 Z" fill="#a4884e" opacity="0.22"/>
<path d="M76 462 L120 458 L84 428 Z" fill="#c0ad80"/>
<path d="M76 462 L120 458 L84 428 Z" fill="none" stroke="#f0e3bf" stroke-width="1" opacity="0.5"/>
<path d="M84 428 L120 458" stroke="#7d6a44" stroke-width="1.6" opacity="0.5"/>
<circle cx="212" cy="88" r="9" fill="none" stroke="#8a6b3a" stroke-width="2.4" opacity="0.35"/>
<circle cx="212" cy="88" r="4" fill="#8a6b3a" opacity="0.18"/>

<rect width="640" height="520" fill="url(#ev2-bill-vig)"/>
`,
  },

  /* Abel's typescript, with Victor's blue pencil through the author's name. */
  c2_manuscript: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-ms-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#232019"/><stop offset="1" stop-color="#090807"/>
  </linearGradient>
  <radialGradient id="ev2-ms-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e3cd9a" stop-opacity="0.24"/><stop offset="1" stop-color="#e3cd9a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-ms-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3a2a1c"/><stop offset="0.6" stop-color="#1f160f"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <linearGradient id="ev2-ms-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f5ecd6"/><stop offset="0.45" stop-color="#e0d3b4"/><stop offset="1" stop-color="#ab9f7f"/>
  </linearGradient>
  <linearGradient id="ev2-ms-under" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#ded1b0"/><stop offset="1" stop-color="#93876a"/>
  </linearGradient>
  <linearGradient id="ev2-ms-blue" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#4d76bd"/><stop offset="0.5" stop-color="#2f4f8c"/><stop offset="1" stop-color="#1e3661"/>
  </linearGradient>
  <linearGradient id="ev2-ms-clip" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#e6ecef"/><stop offset="0.5" stop-color="#8d959c"/><stop offset="1" stop-color="#42484e"/>
  </linearGradient>
  <filter id="ev2-ms-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-ms-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-ms-bg)"/>
<path d="M0 76 L640 52 L640 520 L0 520 Z" fill="url(#ev2-ms-desk)"/>
<g stroke="#4d3924" stroke-width="1" opacity="0.26" fill="none">
  <path d="M0 132 L640 108"/><path d="M0 200 L640 174"/><path d="M0 272 L640 244"/>
  <path d="M0 344 L640 316"/><path d="M0 418 L640 388"/><path d="M0 490 L640 458"/>
</g>
<rect width="640" height="520" fill="url(#ev2-ms-pool)"/>

<g filter="url(#ev2-ms-soft)" opacity="0.75">
  <path d="M108 82 L546 62 L568 470 L128 490 Z" fill="#000"/>
</g>

<!-- the pages beneath -->
<path d="M120 92 L544 72 L562 466 L136 484 Z" fill="url(#ev2-ms-under)"/>
<path d="M112 86 L536 66 L556 462 L130 480 Z" fill="#cfc2a0"/>
<path d="M106 80 L530 60 L550 458 L124 476 Z" fill="#ddd0ae"/>
<g stroke="#8e8265" stroke-width="0.6" opacity="0.5" fill="none">
  <path d="M120 92 L544 72"/><path d="M112 86 L536 66"/><path d="M136 484 L562 466"/>
</g>

<!-- the top page -->
<path d="M96 70 L520 50 L542 452 L118 472 Z" fill="url(#ev2-ms-paper)"/>
<path d="M96 70 L520 50 L522 92 L98 112 Z" fill="#fdf7e6" opacity="0.34"/>
<path d="M478 52 L520 50 L542 452 L500 456 Z" fill="#8f8467" opacity="0.28"/>
<path d="M96 70 L520 50 L542 452 L118 472 Z" fill="none" stroke="#faf3df" stroke-width="1.3" opacity="0.42"/>

<!-- typed title block, then the byline the blue pencil attacks -->
<g fill="#39352a" opacity="0.85">
  <rect x="212" y="112" width="42" height="10" rx="1" transform="rotate(-2.6 233 117)"/>
  <rect x="262" y="110" width="26" height="10" rx="1" transform="rotate(-2.6 275 115)"/>
  <rect x="296" y="108" width="56" height="10" rx="1" transform="rotate(-2.6 324 113)"/>
</g>
<g fill="#413c2f" opacity="0.8">
  <rect x="196" y="148" width="20" height="7" rx="1" transform="rotate(-2.6 206 151)"/>
  <rect x="224" y="147" width="58" height="7" rx="1" transform="rotate(-2.6 253 150)"/>
  <rect x="290" y="145" width="34" height="7" rx="1" transform="rotate(-2.6 307 148)"/>
  <rect x="332" y="143" width="48" height="7" rx="1" transform="rotate(-2.6 356 146)"/>
</g>
<!-- the blue pencil, struck twice through the author's name and looped -->
<g opacity="0.92">
  <path d="M186 158 Q 290 142 394 142" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="5" stroke-linecap="round"/>
  <path d="M186 158 Q 290 142 394 142" fill="none" stroke="#8fb0e6" stroke-width="1.4" opacity="0.45"/>
  <path d="M394 142 q 20 -2 14 -14" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="4" stroke-linecap="round"/>
  <path d="M188 168 Q 288 154 388 152" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="2.6" opacity="0.55" stroke-linecap="round"/>
</g>
<!-- the grain the pencil left on the paper tooth -->
<g stroke="#3a5b9c" stroke-width="0.7" opacity="0.35">
  <path d="M210 152 L216 158"/><path d="M258 150 L264 156"/><path d="M306 148 L312 154"/><path d="M354 146 L360 152"/>
</g>

<path d="M120 184 L500 166" stroke="#877b5c" stroke-width="1" opacity="0.4"/>

<!-- the typed body: character cue at left, dialogue block, all as struck marks -->
<g fill="#3f3a2d" opacity="0.78">
  <rect x="180" y="208" width="46" height="5"/><rect x="232" y="207" width="28" height="5"/>
  <rect x="128" y="234" width="50" height="5"/><rect x="184" y="233" width="30" height="5"/><rect x="220" y="232" width="62" height="5"/><rect x="288" y="231" width="26" height="5"/><rect x="320" y="230" width="44" height="5"/><rect x="370" y="229" width="34" height="5"/>
  <rect x="128" y="250" width="34" height="5"/><rect x="168" y="249" width="58" height="5"/><rect x="232" y="248" width="26" height="5"/><rect x="264" y="247" width="48" height="5"/><rect x="318" y="246" width="30" height="5"/><rect x="354" y="245" width="56" height="5"/>
  <rect x="128" y="266" width="44" height="5"/><rect x="178" y="265" width="26" height="5"/><rect x="210" y="264" width="52" height="5"/><rect x="268" y="263" width="34" height="5"/>
  <rect x="196" y="292" width="38" height="5"/><rect x="240" y="291" width="30" height="5"/>
  <rect x="130" y="318" width="28" height="5"/><rect x="164" y="317" width="52" height="5"/><rect x="222" y="316" width="34" height="5"/><rect x="262" y="315" width="44" height="5"/><rect x="312" y="314" width="26" height="5"/><rect x="344" y="313" width="58" height="5"/>
  <rect x="131" y="334" width="48" height="5"/><rect x="185" y="333" width="26" height="5"/><rect x="217" y="332" width="40" height="5"/><rect x="263" y="331" width="54" height="5"/><rect x="323" y="330" width="28" height="5"/>
  <rect x="132" y="350" width="34" height="5"/><rect x="172" y="349" width="46" height="5"/><rect x="224" y="348" width="30" height="5"/><rect x="260" y="347" width="50" height="5"/><rect x="316" y="346" width="36" height="5"/><rect x="358" y="345" width="44" height="5"/>
  <rect x="133" y="366" width="52" height="5"/><rect x="191" y="365" width="24" height="5"/><rect x="221" y="364" width="46" height="5"/><rect x="273" y="363" width="34" height="5"/>
  <rect x="200" y="392" width="42" height="5"/><rect x="248" y="391" width="26" height="5"/>
  <rect x="134" y="418" width="30" height="5"/><rect x="170" y="417" width="56" height="5"/><rect x="232" y="416" width="28" height="5"/><rect x="266" y="415" width="48" height="5"/><rect x="320" y="414" width="34" height="5"/>
  <rect x="135" y="434" width="44" height="5"/><rect x="185" y="433" width="30" height="5"/><rect x="221" y="432" width="52" height="5"/>
</g>
<!-- typewriter irregularity: some strikes heavier, one letter riding high -->
<g fill="#231f16" opacity="0.6">
  <rect x="232" y="207" width="28" height="5"/><rect x="264" y="247" width="48" height="5"/><rect x="344" y="313" width="58" height="5"/>
</g>
<g fill="#5a5442" opacity="0.5">
  <rect x="128" y="233" width="50" height="1.5"/><rect x="222" y="315" width="34" height="1.5"/>
</g>

<!-- blue pencil trimming lines in the margin -->
<g opacity="0.85">
  <path d="M120 314 Q 108 340 122 368" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="4" stroke-linecap="round"/>
  <path d="M126 330 L410 318" stroke="url(#ev2-ms-blue)" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M126 348 L406 336" stroke="url(#ev2-ms-blue)" stroke-width="3.2" stroke-linecap="round"/>
  <path d="M418 316 q 22 12 -4 24 q -18 8 -8 -6" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="2.6"/>
  <path d="M446 240 q 18 -10 26 6 q -20 16 -30 2" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="2.6"/>
  <path d="M452 262 L486 260" stroke="url(#ev2-ms-blue)" stroke-width="2.4"/>
</g>
<path d="M486 404 q 24 -18 40 4 q -18 20 -42 2 Z" fill="none" stroke="url(#ev2-ms-blue)" stroke-width="2.4" opacity="0.7"/>

<!-- paperclip at the top corner, and its rust ghost -->
<circle cx="150" cy="96" r="10" fill="none" stroke="#8a6b3a" stroke-width="2" opacity="0.3"/>
<path d="M134 66 L134 118 q 0 12 12 12 q 12 0 12 -12 L158 76" fill="none" stroke="url(#ev2-ms-clip)" stroke-width="4" stroke-linecap="round"/>
<path d="M142 62 L142 112 q 0 6 6 6 q 6 0 6 -6 L154 74" fill="none" stroke="url(#ev2-ms-clip)" stroke-width="3.4" stroke-linecap="round"/>
<path d="M135 70 L135 114" stroke="#ffffff" stroke-width="1.2" opacity="0.5"/>
<path d="M157 80 L157 100" stroke="#ffffff" stroke-width="1" opacity="0.35"/>

<!-- age, thumbing, a coffee ring -->
<g fill="#a08c60" opacity="0.28">
  <circle cx="420" cy="180" r="2.2"/><circle cx="300" cy="380" r="1.8"/><circle cx="160" cy="440" r="2"/>
  <circle cx="490" cy="330" r="1.6"/><circle cx="240" cy="120" r="1.4"/>
</g>
<ellipse cx="440" cy="392" rx="46" ry="30" fill="none" stroke="#9d7c46" stroke-width="3.2" opacity="0.25" transform="rotate(-3 440 392)"/>
<ellipse cx="440" cy="392" rx="40" ry="25" fill="#9d7c46" opacity="0.07" transform="rotate(-3 440 392)"/>
<path d="M118 472 L164 468 L124 436 Z" fill="#c4b795"/>
<path d="M118 472 L164 468 L124 436 Z" fill="none" stroke="#f4ecd6" stroke-width="1" opacity="0.5"/>
<path d="M124 436 L164 468" stroke="#7e7355" stroke-width="1.6" opacity="0.5"/>
<path d="M500 60 Q 512 250 520 452" fill="none" stroke="#9a8f70" stroke-width="2" opacity="0.3"/>

<rect width="640" height="520" fill="url(#ev2-ms-vig)"/>
`,
  },
  /* What is left of the letter she gave him: burned, but not early enough. */
  c2_ultimatum: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-ult-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241d18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-ult-pool" cx="0.3" cy="0.18" r="0.74">
    <stop offset="0" stop-color="#e8c68a" stop-opacity="0.24"/><stop offset="1" stop-color="#e8c68a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-ult-stone" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#5b544c"/><stop offset="0.55" stop-color="#3a352f"/><stop offset="1" stop-color="#1c1a17"/>
  </linearGradient>
  <linearGradient id="ev2-ult-paper" x1="0.1" y1="0" x2="0.72" y2="0.9">
    <stop offset="0" stop-color="#f2e8cc"/><stop offset="0.3" stop-color="#dfd0aa"/>
    <stop offset="0.58" stop-color="#a97f43"/><stop offset="0.78" stop-color="#5c3417"/><stop offset="1" stop-color="#1a120c"/>
  </linearGradient>
  <linearGradient id="ev2-ult-char" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#3a2a1c"/><stop offset="1" stop-color="#0d0b09"/>
  </linearGradient>
  <radialGradient id="ev2-ult-ash" cx="0.4" cy="0.4" r="0.6">
    <stop offset="0" stop-color="#b6b0a4" stop-opacity="0.5"/><stop offset="1" stop-color="#b6b0a4" stop-opacity="0"/>
  </radialGradient>
  <filter id="ev2-ult-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-ult-vig" cx="0.44" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-ult-bg)"/>
<path d="M0 118 L640 92 L640 520 L0 520 Z" fill="url(#ev2-ult-stone)"/>
<g stroke="#6d665c" stroke-width="1" opacity="0.28" fill="none">
  <path d="M0 208 Q 200 196 400 190 Q 520 186 640 178"/>
  <path d="M0 330 Q 220 316 420 306 Q 540 300 640 294"/>
  <path d="M0 452 Q 200 440 400 428 Q 530 422 640 414"/>
</g>
<g stroke="#221f1b" stroke-width="1.4" opacity="0.4" fill="none">
  <path d="M164 96 Q 178 300 168 520"/><path d="M446 88 Q 462 300 452 520"/>
</g>
<rect width="640" height="520" fill="url(#ev2-ult-pool)"/>
<ellipse cx="316" cy="326" rx="252" ry="112" fill="url(#ev2-ult-ash)"/>

<g filter="url(#ev2-ult-soft)" opacity="0.7">
  <path d="M110 118 L470 96 L500 300 L340 388 L150 350 Z" fill="#000"/>
</g>

<!-- the surviving corner of the sheet: cream at the fold, scorched to char -->
<path d="M104 106 L458 84 L484 206 L470 240 L452 222 L432 262 L412 236 L392 282 L366 254 L348 300 L322 272 L308 312 L282 280 L268 322 L240 290 L226 330 L200 296 L182 326 L158 292 L142 322 L124 284 L114 302 Z" fill="url(#ev2-ult-paper)"/>
<path d="M104 106 L458 84 L462 122 L106 144 Z" fill="#fbf4e0" opacity="0.3"/>
<!-- the char line itself, crumbling and blacker than the scorch -->
<path d="M484 206 L470 240 L452 222 L432 262 L412 236 L392 282 L366 254 L348 300 L322 272 L308 312 L282 280 L268 322 L240 290 L226 330 L200 296 L182 326 L158 292 L142 322 L124 284 L114 302" fill="none" stroke="#120d09" stroke-width="7" stroke-linejoin="round"/>
<path d="M480 198 L466 234 L448 216 L428 256 L408 230 L388 276 L362 248 L344 294 L318 266 L304 306 L278 274 L264 316 L236 284 L222 324 L196 290 L178 320 L154 286 L138 316 L120 278" fill="none" stroke="#4a3018" stroke-width="3" opacity="0.7"/>
<!-- ragged flakes about to fall off the burnt edge -->
<g fill="url(#ev2-ult-char)">
  <path d="M356 260 L372 274 L348 278 Z"/><path d="M244 316 L262 326 L238 330 Z"/>
  <path d="M170 294 L184 308 L160 310 Z"/><path d="M420 250 L436 262 L414 266 Z"/>
</g>
<!-- a curl of blackened paper lifting away -->
<path d="M300 300 q 34 22 74 10 q -30 26 -70 12 q -14 -12 -4 -22 Z" fill="url(#ev2-ult-char)"/>
<path d="M306 304 q 30 18 62 10" fill="none" stroke="#6b5238" stroke-width="1.6" opacity="0.5"/>

<!-- her hand, surviving on the cool half of the sheet -->
<g stroke="#26304a" stroke-width="2.2" opacity="0.8" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M140 156 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 M190 153 q4 -8 8 0 q3 6 7 -3 M216 152 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M258 149 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M298 147 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 M344 144 q4 -8 8 0 q3 6 7 -3 M372 142 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M136 190 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M178 187 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M218 185 q4 -8 8 0 q3 6 7 -3 M248 183 q-3 -18 4 -17 q5 3 0 15 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 q4 -8 8 0 M300 180 q4 -8 8 0 q3 6 7 -3 M330 178 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2"/>
  <path d="M134 224 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 M170 222 q4 -9 8 -1 q3 7 7 -2 l2 -16 l1 17 q3 5 7 -2 q4 -8 8 0 M216 219 q4 -8 8 0 q3 6 7 -3 M246 217 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M290 215 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2"/>
</g>
<!-- the deadline line: pressed hard, underscored, and it runs into the burn -->
<g stroke="#141c31" stroke-width="3.2" opacity="0.9" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M132 256 q5 -11 10 -1 q4 8 9 -2 q5 -9 10 1 q4 7 8 -3 M180 254 q5 -10 10 0 q4 8 9 -4 M212 252 q-4 -22 5 -21 q6 4 0 19 q3 7 9 -1 q5 -9 10 1 q4 7 9 -3 M268 250 q5 -10 10 -1 q4 9 10 -3"/>
</g>
<path d="M128 270 L300 262" stroke="#1a2340" stroke-width="2.4" opacity="0.7"/>
<path d="M130 276 L296 268" stroke="#1a2340" stroke-width="1.4" opacity="0.5"/>
<!-- ink gone brown where the heat reached it -->
<path d="M300 262 L352 258" stroke="#5a3b1c" stroke-width="2.4" opacity="0.55"/>
<g stroke="#5a3b1c" stroke-width="2.1" opacity="0.55" fill="none" stroke-linecap="round">
  <path d="M360 214 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M398 210 q4 -8 8 0 q3 6 7 -3"/>
</g>

<!-- ash, on the sheet and around it -->
<g fill="#9a9385" opacity="0.4">
  <circle cx="520" cy="300" r="3"/><circle cx="548" cy="268" r="2"/><circle cx="90" cy="340" r="2.4"/>
  <circle cx="146" cy="368" r="1.8"/><circle cx="392" cy="336" r="2.6"/><circle cx="462" cy="290" r="1.6"/>
  <circle cx="230" cy="356" r="2"/><circle cx="76" cy="270" r="1.6"/><circle cx="556" cy="212" r="1.8"/>
</g>
<g fill="#1a1512" opacity="0.55">
  <path d="M508 262 l 14 6 l -12 8 Z"/><path d="M182 358 l 16 5 l -13 9 Z"/><path d="M436 322 l 12 8 l -14 5 Z"/>
</g>
<path d="M528 240 q 26 8 34 26 q -30 -6 -40 -20 Z" fill="url(#ev2-ult-char)" opacity="0.8"/>
<g fill="#cfc7b6" opacity="0.18">
  <circle cx="220" cy="130" r="1.4"/><circle cx="380" cy="120" r="1.2"/><circle cx="160" cy="240" r="1.3"/>
</g>

<rect width="640" height="520" fill="url(#ev2-ult-vig)"/>
`,
  },

  /* The confession: the ghost light standing over the chalk mark he put her on. */
  c2_confession: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <radialGradient id="ev2-conf-bg" cx="0.44" cy="0.36" r="0.72">
    <stop offset="0" stop-color="#332a1e"/><stop offset="0.55" stop-color="#14100b"/><stop offset="1" stop-color="#050403"/>
  </radialGradient>
  <radialGradient id="ev2-conf-glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff3c8" stop-opacity="0.95"/><stop offset="0.28" stop-color="#f5d488" stop-opacity="0.4"/>
    <stop offset="0.62" stop-color="#c88f3a" stop-opacity="0.12"/><stop offset="1" stop-color="#c88f3a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-conf-board" x1="0" y1="0" x2="0.15" y2="1">
    <stop offset="0" stop-color="#6a5233"/><stop offset="0.5" stop-color="#3d2e1c"/><stop offset="1" stop-color="#1a1309"/>
  </linearGradient>
  <linearGradient id="ev2-conf-bulb" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#fffdf2" stop-opacity="0.95"/><stop offset="0.5" stop-color="#ffe8a8" stop-opacity="0.7"/>
    <stop offset="1" stop-color="#c8912f" stop-opacity="0.5"/>
  </linearGradient>
  <linearGradient id="ev2-conf-pipe" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#2a2c2e"/><stop offset="0.28" stop-color="#8b9096"/><stop offset="0.6" stop-color="#4a4e53"/><stop offset="1" stop-color="#1a1c1f"/>
  </linearGradient>
  <filter id="ev2-conf-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="11"/>
  </filter>
  <radialGradient id="ev2-conf-vig" cx="0.46" cy="0.4" r="0.78">
    <stop offset="0.38" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.85"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-conf-bg)"/>

<!-- stage boards, running away from the light -->
<path d="M0 236 L640 236 L640 520 L0 520 Z" fill="url(#ev2-conf-board)"/>
<g stroke="#100b06" stroke-width="2.2" opacity="0.75" fill="none">
  <path d="M318 236 L306 520"/><path d="M356 236 L392 520"/><path d="M282 236 L222 520"/>
  <path d="M394 236 L482 520"/><path d="M246 236 L134 520"/><path d="M430 236 L570 520"/>
  <path d="M212 236 L48 520"/><path d="M466 236 L640 500"/><path d="M176 236 L0 484"/>
</g>
<g stroke="#8f7448" stroke-width="0.9" opacity="0.18" fill="none">
  <path d="M320 236 L308 520"/><path d="M358 236 L394 520"/><path d="M284 236 L224 520"/>
  <path d="M396 236 L484 520"/><path d="M248 236 L136 520"/>
</g>
<g stroke="#0a0704" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M0 292 L640 292"/><path d="M0 360 L640 360"/><path d="M0 448 L640 448"/>
</g>
<g stroke="#5d4a2c" stroke-width="0.7" opacity="0.22" fill="none">
  <path d="M0 268 L640 268"/><path d="M0 322 L640 322"/><path d="M0 400 L640 400"/>
</g>
<!-- scuffs and two hundred and eleven nights of shoe polish -->
<path d="M200 400 q 100 -30 240 -6 q -120 34 -244 12 Z" fill="#0d0904" opacity="0.35"/>
<path d="M126 466 q 140 -22 300 4" fill="none" stroke="#0c0805" stroke-width="6" opacity="0.28"/>
<path d="M420 300 q 60 -12 116 4" fill="none" stroke="#8d7245" stroke-width="3" opacity="0.12"/>

<!-- the pool of light the bulb lays on the boards -->
<ellipse cx="318" cy="380" rx="230" ry="112" fill="url(#ev2-conf-glow)" opacity="0.35"/>
<ellipse cx="318" cy="368" rx="128" ry="58" fill="#f2d08a" opacity="0.1"/>

<!-- the chalk mark: her mark, an arc and a cross -->
<g stroke="#e8e2d0" stroke-width="5" opacity="0.72" fill="none" stroke-linecap="round">
  <path d="M258 402 L378 398"/><path d="M316 372 L318 430"/>
</g>
<g stroke="#ffffff" stroke-width="1.8" opacity="0.45" fill="none" stroke-linecap="round">
  <path d="M264 400 L372 397"/><path d="M317 376 L318 426"/>
</g>
<path d="M230 428 Q 318 470 408 424" fill="none" stroke="#ded8c4" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
<path d="M236 426 Q 318 464 402 422" fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.3"/>
<!-- chalk dust dragged out of the mark by a heel -->
<g fill="#ddd7c4" opacity="0.28">
  <circle cx="352" cy="416" r="2.4"/><circle cx="372" cy="424" r="1.8"/><circle cx="292" cy="436" r="2"/>
  <circle cx="256" cy="414" r="1.6"/><circle cx="386" cy="408" r="1.4"/>
</g>
<path d="M330 412 q 34 12 56 22 q -40 -4 -60 -16 Z" fill="#e2dcca" opacity="0.14"/>

<!-- the ghost light: a weighted base, a pipe, a caged bare lamp -->
<g filter="url(#ev2-conf-soft)" opacity="0.7">
  <ellipse cx="318" cy="372" rx="86" ry="20" fill="#000"/>
</g>
<ellipse cx="318" cy="366" rx="74" ry="17" fill="#241c12"/>
<ellipse cx="318" cy="360" rx="74" ry="17" fill="#3a2f1e"/>
<ellipse cx="318" cy="360" rx="74" ry="17" fill="none" stroke="#8e7a50" stroke-width="2" opacity="0.5"/>
<path d="M262 354 Q 300 340 318 340" fill="none" stroke="#d8c08a" stroke-width="3" opacity="0.35"/>
<ellipse cx="318" cy="354" rx="46" ry="10" fill="#4b3d26"/>
<ellipse cx="318" cy="352" rx="46" ry="10" fill="none" stroke="#a08a58" stroke-width="1.4" opacity="0.4"/>
<path d="M308 350 L328 350 L326 174 L310 174 Z" fill="url(#ev2-conf-pipe)"/>
<path d="M311 348 L311 176" stroke="#e2e8ec" stroke-width="1.6" opacity="0.4"/>
<path d="M325 348 L325 176" stroke="#0d0f11" stroke-width="1.2" opacity="0.5"/>
<path d="M306 262 L330 262 L330 272 L306 272 Z" fill="url(#ev2-conf-pipe)"/>
<path d="M307 264 L307 270" stroke="#eef3f6" stroke-width="1.4" opacity="0.4"/>
<!-- the lamp socket -->
<path d="M300 174 L336 174 L332 148 L304 148 Z" fill="url(#ev2-conf-pipe)"/>
<g stroke="#0e1113" stroke-width="1.2" opacity="0.5">
  <path d="M301 168 L335 168"/><path d="M302 160 L334 160"/><path d="M303 154 L333 154"/>
</g>
<path d="M304 172 L306 150" stroke="#e6ebee" stroke-width="1.6" opacity="0.42"/>

<!-- the bulb, and its filament -->
<ellipse cx="318" cy="382" rx="150" ry="66" fill="url(#ev2-conf-glow)" opacity="0.12"/>
<circle cx="318" cy="112" r="86" fill="url(#ev2-conf-glow)"/>
<path d="M304 148 Q 288 128 292 108 Q 296 74 318 68 Q 340 74 344 108 Q 348 128 332 148 Z" fill="url(#ev2-conf-bulb)"/>
<path d="M300 138 Q 288 116 294 96 Q 300 80 310 76" fill="none" stroke="#fffdf0" stroke-width="3" opacity="0.7"/>
<path d="M338 136 Q 348 116 342 96" fill="none" stroke="#a9782a" stroke-width="2" opacity="0.4"/>
<path d="M310 142 L310 118 q 4 -14 8 0 q 4 -14 8 0 L326 142" fill="none" stroke="#fffbe8" stroke-width="2" opacity="0.9"/>
<circle cx="318" cy="110" r="17" fill="#fffdf4" opacity="0.75"/>
<circle cx="308" cy="98" r="7" fill="#ffffff" opacity="0.8"/>

<!-- the cage, thin against the glare -->
<g stroke="#1c1a16" stroke-width="2.4" opacity="0.8" fill="none">
  <path d="M292 156 Q 262 100 302 56 Q 318 46 334 56 Q 374 100 344 156"/>
  <path d="M318 50 L318 156"/><path d="M276 108 L360 108"/>
  <path d="M282 84 L354 84"/><path d="M280 134 L356 134"/>
</g>
<g stroke="#7d766a" stroke-width="0.8" opacity="0.5" fill="none">
  <path d="M294 154 Q 264 100 303 58"/><path d="M277 108 L359 108"/>
</g>
<ellipse cx="318" cy="158" rx="30" ry="7" fill="none" stroke="#1c1a16" stroke-width="2.6" opacity="0.8"/>

<!-- dust hanging in the beam -->
<g fill="#f6e6bc" opacity="0.2">
  <circle cx="252" cy="206" r="1.6"/><circle cx="392" cy="176" r="1.2"/><circle cx="360" cy="250" r="1.4"/>
  <circle cx="230" cy="278" r="1.3"/><circle cx="418" cy="300" r="1.5"/><circle cx="286" cy="230" r="1"/>
  <circle cx="200" cy="330" r="1.2"/><circle cx="450" cy="242" r="1.1"/>
</g>

<rect width="640" height="520" fill="url(#ev2-conf-vig)"/>
`,
  },

  /* One fresh handprint in the dust of the under-stage ladder. */
  c2_trap: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <radialGradient id="ev2-trap-bg" cx="0.3" cy="0.14" r="0.8">
    <stop offset="0" stop-color="#3a3226"/><stop offset="0.5" stop-color="#14110c"/><stop offset="1" stop-color="#050403"/>
  </radialGradient>
  <linearGradient id="ev2-trap-shaft" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#ffeec2" stop-opacity="0.28"/><stop offset="1" stop-color="#ffeec2" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ev2-trap-wood" x1="0" y1="0" x2="1" y2="0.1">
    <stop offset="0" stop-color="#9a7748"/><stop offset="0.3" stop-color="#6b5130"/><stop offset="0.75" stop-color="#3c2c1a"/><stop offset="1" stop-color="#1d150d"/>
  </linearGradient>
  <linearGradient id="ev2-trap-rung" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b08954"/><stop offset="0.35" stop-color="#775a34"/><stop offset="1" stop-color="#2a1f12"/>
  </linearGradient>
  <linearGradient id="ev2-trap-dust" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#cdc2a6" stop-opacity="0.5"/><stop offset="1" stop-color="#8d8168" stop-opacity="0.3"/>
  </linearGradient>
  <filter id="ev2-trap-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-trap-vig" cx="0.42" cy="0.36" r="0.78">
    <stop offset="0.36" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-trap-bg)"/>
<!-- the underside of the stage, and the shaft of light through the open trap -->
<path d="M0 0 L640 0 L640 84 L0 110 Z" fill="#0c0a07"/>
<g stroke="#241d13" stroke-width="3" opacity="0.7" fill="none">
  <path d="M0 32 L640 14"/><path d="M0 66 L640 46"/>
</g>
<path d="M96 0 L318 0 L520 520 L20 520 Z" fill="url(#ev2-trap-shaft)"/>
<path d="M96 0 L152 0 L214 520 L46 520 Z" fill="#ffeec2" opacity="0.05"/>
<!-- brick and joists behind, barely lit -->
<g stroke="#241c14" stroke-width="1.4" opacity="0.55" fill="none">
  <path d="M0 176 L640 158"/><path d="M0 244 L640 224"/><path d="M0 312 L640 292"/><path d="M0 380 L640 358"/><path d="M0 448 L640 426"/>
</g>
<g stroke="#2e251a" stroke-width="1" opacity="0.35" fill="none">
  <path d="M88 160 L92 520"/><path d="M244 152 L252 520"/><path d="M400 144 L412 520"/><path d="M556 136 L570 520"/>
</g>

<g filter="url(#ev2-trap-soft)" opacity="0.72">
  <path d="M188 0 L316 0 L364 520 L232 520 Z" fill="#000"/>
</g>

<!-- the ladder: two stiles and the rungs, seen close -->
<path d="M166 0 L214 0 L262 520 L206 520 Z" fill="url(#ev2-trap-wood)"/>
<path d="M166 0 L182 0 L226 520 L206 520 Z" fill="#c39a62" opacity="0.22"/>
<path d="M204 0 L214 0 L262 520 L250 520 Z" fill="#100b06" opacity="0.5"/>
<path d="M398 0 L444 0 L468 520 L414 520 Z" fill="url(#ev2-trap-wood)"/>
<path d="M398 0 L410 0 L430 520 L414 520 Z" fill="#b28c58" opacity="0.2"/>
<path d="M436 0 L444 0 L468 520 L456 520 Z" fill="#0f0a06" opacity="0.55"/>
<!-- grain -->
<g stroke="#2b1f12" stroke-width="1.1" opacity="0.5" fill="none">
  <path d="M176 0 Q 190 260 218 520"/><path d="M190 0 Q 204 260 234 520"/><path d="M200 0 Q 214 260 246 520"/>
  <path d="M410 0 Q 420 260 434 520"/><path d="M424 0 Q 434 260 448 520"/>
</g>
<g stroke="#b18a55" stroke-width="0.6" opacity="0.25" fill="none">
  <path d="M172 0 Q 186 260 212 520"/><path d="M196 0 Q 210 260 240 520"/><path d="M418 0 Q 428 260 442 520"/>
</g>

<!-- rungs, with the light picking out their top edges -->
<path d="M200 132 L436 122 L440 158 L204 168 Z" fill="url(#ev2-trap-rung)"/>
<path d="M200 132 L436 122 L437 133 L201 143 Z" fill="#e0b87c" opacity="0.4"/>
<path d="M203 158 L439 148 L440 158 L204 168 Z" fill="#150f08" opacity="0.6"/>
<path d="M214 296 L452 286 L456 324 L218 334 Z" fill="url(#ev2-trap-rung)"/>
<path d="M214 296 L452 286 L453 298 L215 308 Z" fill="#e8c288" opacity="0.45"/>
<path d="M217 324 L455 314 L456 324 L218 334 Z" fill="#150f08" opacity="0.6"/>
<path d="M230 460 L468 450 L472 490 L234 500 Z" fill="url(#ev2-trap-rung)"/>
<path d="M230 460 L468 450 L469 462 L231 472 Z" fill="#d8b078" opacity="0.35"/>
<path d="M233 490 L471 480 L472 490 L234 500 Z" fill="#120c07" opacity="0.6"/>
<!-- nail heads in the stiles -->
<g fill="#2a2118">
  <circle cx="222" cy="150" r="4"/><circle cx="424" cy="140" r="4"/>
  <circle cx="236" cy="314" r="4.4"/><circle cx="440" cy="304" r="4.4"/>
</g>
<g fill="#c8b48c" opacity="0.4">
  <circle cx="220" cy="148" r="1.6"/><circle cx="422" cy="138" r="1.6"/>
  <circle cx="234" cy="312" r="1.8"/><circle cx="438" cy="302" r="1.8"/>
</g>

<!-- years of dust laid over everything -->
<path d="M200 132 L436 122 L437 138 L201 148 Z" fill="url(#ev2-trap-dust)"/>
<path d="M214 296 L452 286 L454 304 L215 314 Z" fill="url(#ev2-trap-dust)"/>
<path d="M230 460 L468 450 L470 468 L231 478 Z" fill="url(#ev2-trap-dust)"/>
<path d="M166 0 L182 0 L226 520 L206 520 Z" fill="#cdc2a6" opacity="0.1"/>
<g fill="#d6cbae" opacity="0.16">
  <circle cx="300" cy="220" r="1.6"/><circle cx="380" cy="380" r="1.4"/><circle cx="250" cy="420" r="1.8"/>
  <circle cx="410" cy="200" r="1.2"/><circle cx="330" cy="440" r="1.3"/>
</g>

<!-- ONE handprint, wiped clean through the dust: palm and four fingers -->
<g fill="#33250f" opacity="0.78">
  <path d="M244 318 q 42 -16 84 -4 q 22 8 18 30 q -6 26 -44 30 q -44 4 -60 -22 q -10 -22 2 -34 Z"/>
  <path d="M254 300 q -4 -46 8 -50 q 14 2 12 30 q -1 16 -2 28 Z"/>
  <path d="M282 290 q -2 -60 12 -62 q 14 4 10 36 q -2 18 -4 30 Z"/>
  <path d="M312 292 q 4 -58 18 -56 q 12 6 4 36 q -4 16 -8 26 Z"/>
  <path d="M340 306 q 16 -42 28 -36 q 10 8 -4 32 q -8 14 -14 18 Z"/>
  <path d="M242 356 q -34 12 -44 34 q -4 14 10 14 q 20 -6 40 -30 Z"/>
</g>
<g fill="#5a4526" opacity="0.45">
  <path d="M252 328 q 40 -12 72 -2 q -34 16 -74 8 Z"/>
  <path d="M258 296 q -3 -32 5 -36 M288 288 q -2 -42 8 -46"/>
</g>
<!-- the dust it shoved into a ridge at the edge of the print -->
<g stroke="#e2d8bc" stroke-width="2.2" opacity="0.42" fill="none" stroke-linecap="round">
  <path d="M246 316 q 42 -18 84 -4"/><path d="M244 352 q 44 24 90 4"/>
  <path d="M252 300 q -4 -44 8 -48"/><path d="M338 306 q 16 -40 28 -36"/>
  <path d="M240 358 q -34 14 -42 34"/>
</g>
<g fill="#e8ddbe" opacity="0.32">
  <circle cx="236" cy="366" r="2"/><circle cx="352" cy="336" r="1.6"/><circle cx="300" cy="370" r="2.2"/>
  <circle cx="222" cy="396" r="1.4"/>
</g>
<!-- the ridges of the palm, only just there -->
<g stroke="#7d6236" stroke-width="1" opacity="0.3" fill="none">
  <path d="M256 330 q 36 -8 70 2"/><path d="M258 340 q 34 -6 66 2"/><path d="M262 350 q 30 -6 58 2"/>
</g>

<!-- cobweb in the corner, and one thread hanging in the light -->
<g stroke="#cdc4ae" stroke-width="0.8" opacity="0.25" fill="none">
  <path d="M444 0 Q 520 40 560 8"/><path d="M444 0 Q 512 74 556 60"/><path d="M470 20 Q 512 30 528 22"/>
  <path d="M488 42 Q 524 48 540 40"/>
</g>
<path d="M330 60 Q 336 200 328 340" fill="none" stroke="#ded4b8" stroke-width="0.7" opacity="0.2"/>

<rect width="640" height="520" fill="url(#ev2-trap-vig)"/>
`,
  },

  /* The prop log: a pencil entry written over an erasure, on a page of ink. */
  c2_log: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-log-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#231e18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-log-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e5cd98" stop-opacity="0.24"/><stop offset="1" stop-color="#e5cd98" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-log-board" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#8a6b42"/><stop offset="0.45" stop-color="#5b4529"/><stop offset="1" stop-color="#2a1f12"/>
  </linearGradient>
  <linearGradient id="ev2-log-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f6f0dc"/><stop offset="0.45" stop-color="#e2dabf"/><stop offset="1" stop-color="#ada58a"/>
  </linearGradient>
  <linearGradient id="ev2-log-clip" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#eef3f6"/><stop offset="0.35" stop-color="#98a0a7"/><stop offset="1" stop-color="#3c4046"/>
  </linearGradient>
  <linearGradient id="ev2-log-pencil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e0c04a"/><stop offset="0.35" stop-color="#b8901f"/><stop offset="1" stop-color="#5c460e"/>
  </linearGradient>
  <filter id="ev2-log-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-log-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-log-bg)"/>
<path d="M0 90 L640 66 L640 520 L0 520 Z" fill="#1d1611"/>
<g stroke="#382a1d" stroke-width="1.2" opacity="0.5" fill="none">
  <path d="M0 168 L640 144"/><path d="M0 268 L640 242"/><path d="M0 368 L640 340"/><path d="M0 468 L640 438"/>
</g>
<rect width="640" height="520" fill="url(#ev2-log-pool)"/>

<g filter="url(#ev2-log-soft)" opacity="0.75">
  <path d="M78 68 L556 48 L578 484 L96 504 Z" fill="#000"/>
</g>

<!-- the clipboard -->
<path d="M70 58 L548 38 L568 476 L88 496 Z" fill="url(#ev2-log-board)"/>
<path d="M70 58 L548 38 L549 62 L71 82 Z" fill="#c29c66" opacity="0.35"/>
<path d="M512 40 L548 38 L568 476 L532 478 Z" fill="#1c1409" opacity="0.4"/>
<g stroke="#3d2d1a" stroke-width="1" opacity="0.4" fill="none">
  <path d="M76 88 Q 300 78 560 66"/><path d="M80 220 Q 300 210 566 198"/><path d="M84 356 Q 300 344 570 332"/>
</g>

<!-- the page -->
<path d="M92 96 L528 78 L546 458 L110 476 Z" fill="url(#ev2-log-paper)"/>
<path d="M92 96 L528 78 L529 112 L93 130 Z" fill="#fdf9ec" opacity="0.32"/>
<path d="M494 80 L528 78 L546 458 L512 460 Z" fill="#8f8a71" opacity="0.28"/>
<path d="M92 96 L528 78 L546 458 L110 476 Z" fill="none" stroke="#fbf6e6" stroke-width="1.2" opacity="0.4"/>

<!-- ruling: a heavy head rule, faint blue lines, two column rules -->
<path d="M100 142 L534 124" stroke="#5c5744" stroke-width="2.2" opacity="0.6"/>
<path d="M100 150 L534 132" stroke="#5c5744" stroke-width="1" opacity="0.4"/>
<g stroke="#7d90a8" stroke-width="1" opacity="0.45" fill="none">
  <path d="M98 178 L534 160"/><path d="M99 208 L535 190"/><path d="M100 238 L536 220"/><path d="M101 268 L537 250"/>
  <path d="M102 298 L538 280"/><path d="M103 328 L539 310"/><path d="M104 358 L540 340"/><path d="M105 388 L541 370"/>
  <path d="M106 418 L542 400"/><path d="M107 448 L543 430"/>
</g>
<g stroke="#b06a70" stroke-width="1.2" opacity="0.4" fill="none">
  <path d="M148 100 L166 470"/><path d="M356 92 L374 462"/>
</g>

<!-- head of the columns, typed -->
<g fill="#4a4436" opacity="0.7">
  <rect x="106" y="118" width="30" height="6" transform="rotate(-2.4 121 121)"/>
  <rect x="180" y="116" width="66" height="6" transform="rotate(-2.4 213 119)"/>
  <rect x="390" y="106" width="52" height="6" transform="rotate(-2.4 416 109)"/>
</g>

<!-- the ink entries: a clerk's hand, small and even -->
<g stroke="#2a3450" stroke-width="1.8" opacity="0.78" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M110 172 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M180 170 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M226 168 q4 -8 8 0 q3 6 7 -3 M254 167 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 M296 165 q4 -8 8 0 q3 6 7 -3 M384 161 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M111 202 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M182 200 q-3 -16 4 -15 q5 3 0 13 q2 6 7 -1 q4 -7 8 1 q3 6 7 -2 M228 198 q4 -8 8 0 q3 6 7 -3 M258 197 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M302 195 q4 -8 8 0 q3 6 7 -3 M386 191 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M112 232 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M184 230 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M222 228 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M266 226 q4 -8 8 0 q3 6 7 -3 M294 225 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M388 221 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M113 262 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M186 260 q4 -8 8 0 q3 6 7 -3 M216 258 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M260 256 q-3 -16 4 -15 q5 3 0 13 q2 6 7 -1 q4 -7 8 1 M304 255 q4 -8 8 0 q3 6 7 -3 M390 251 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M115 322 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M188 320 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M232 318 q4 -8 8 0 q3 6 7 -3 M262 316 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 M304 315 q4 -8 8 0 q3 6 7 -3 M394 311 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M116 352 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M190 350 q4 -8 8 0 q3 6 7 -3 M220 348 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M264 346 q4 -8 8 0 q3 6 7 -3 M294 345 q-3 -16 4 -15 q5 3 0 13 q2 6 7 -1 q4 -7 8 1 M396 341 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M117 382 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M192 380 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M230 378 q4 -8 8 0 q3 6 7 -3 M260 377 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 q3 6 6 -2 M398 371 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M118 412 q3 -6 7 -1 q3 5 6 -2 q3 -6 7 1 M194 410 q4 -8 8 0 q3 6 7 -3 M224 408 q5 -8 9 -1 q3 7 8 -2 q4 -7 7 1 q1 8 -2 12 q-4 3 -6 -2 M268 406 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M400 401 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
</g>

<!-- THE line: rubbed out first, then written again in pencil -->
<path d="M176 276 L346 268 L348 300 L178 308 Z" fill="#c9c0a4" opacity="0.5"/>
<path d="M176 276 L346 268 L348 300 L178 308 Z" fill="#f6f1e0" opacity="0.25"/>
<g stroke="#b3aa8e" stroke-width="0.7" opacity="0.55" fill="none">
  <path d="M182 282 L342 274"/><path d="M182 292 L344 284"/><path d="M180 300 L344 292"/>
</g>
<!-- the ghost of the ink that was scrubbed off -->
<g stroke="#8d8ea0" stroke-width="1.6" opacity="0.3" fill="none" stroke-linecap="round">
  <path d="M186 288 q4 -6 8 -1 q3 5 7 -2 M212 286 q4 -6 8 0 q3 5 7 -3 M244 285 q4 -6 8 -1 q3 5 7 -2 M280 283 q4 -6 8 0 q3 5 7 -3"/>
</g>
<!-- eraser crumbs, still on the page -->
<g fill="#d9d0b4" opacity="0.7">
  <path d="M352 296 q 9 -3 12 3 q -7 6 -13 1 Z"/><path d="M338 308 q 7 -2 9 2 q -6 5 -10 1 Z"/>
  <circle cx="366" cy="288" r="2.4"/><circle cx="330" cy="302" r="1.8"/>
</g>
<!-- the pencil entry: soft, grey, silvered where the graphite catches light -->
<g stroke="#4e4e52" stroke-width="2.8" opacity="0.82" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M184 292 q5 -10 10 -1 q4 8 9 -2 q5 -9 10 1 q4 7 8 -3 M232 290 q5 -10 10 0 q4 8 9 -4 M264 288 q-4 -20 5 -19 q6 4 0 17 q3 7 9 -1 q5 -9 10 1 M310 287 q5 -10 10 -1 q4 9 10 -3"/>
</g>
<g stroke="#9a9aa0" stroke-width="0.9" opacity="0.4" fill="none" stroke-linecap="round">
  <path d="M184 291 q5 -10 10 -1 q4 8 9 -2 M264 287 q-4 -20 5 -19"/>
</g>
<!-- the initialling in the right-hand column: pencil, and hurried -->
<g stroke="#4e4e52" stroke-width="2.8" opacity="0.82" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M392 284 q-5 -22 6 -21 q7 4 0 19 q3 7 10 -2"/>
  <path d="M420 282 q6 -12 12 -1 q5 9 11 -4 q5 -8 10 3"/>
</g>
<g stroke="#9a9aa0" stroke-width="0.9" opacity="0.42" fill="none" stroke-linecap="round">
  <path d="M392 283 q-5 -21 6 -20"/>
</g>

<!-- the pencil that wrote it, blunt, lying on the board -->
<g filter="url(#ev2-log-soft)" opacity="0.6">
  <path d="M124 498 L470 480 L472 508 L128 520 Z" fill="#000"/>
</g>
<path d="M148 486 L466 468 L468 492 L150 508 Z" fill="url(#ev2-log-pencil)"/>
<path d="M148 486 L466 468 L466 476 L148 494 Z" fill="#f6e089" opacity="0.5"/>
<path d="M150 500 L468 482 L468 492 L150 508 Z" fill="#3d2f09" opacity="0.5"/>
<path d="M466 468 L500 476 L500 486 L468 492 Z" fill="#d8c8a8"/>
<path d="M466 468 L500 476 L500 480 L468 476 Z" fill="#f4ecd6" opacity="0.6"/>
<path d="M496 477 L512 480 L496 486 Z" fill="#3a3a3e"/>
<path d="M114 490 L148 486 L150 508 L116 510 Z" fill="#b8563f"/>
<path d="M114 490 L148 486 L148 494 L114 498 Z" fill="#e08a70" opacity="0.5"/>
<path d="M142 488 L146 506" stroke="#8d9298" stroke-width="6" opacity="0.8"/>
<path d="M142 488 L143 496" stroke="#e6ebee" stroke-width="2" opacity="0.5"/>

<!-- the clip -->
<path d="M236 40 L392 34 L396 88 L240 94 Z" fill="url(#ev2-log-clip)"/>
<path d="M236 40 L392 34 L392 52 L237 58 Z" fill="#ffffff" opacity="0.4"/>
<path d="M240 76 L394 70 L396 88 L240 94 Z" fill="#22262a" opacity="0.45"/>
<path d="M258 50 L372 46" stroke="#2a2e33" stroke-width="1.6" opacity="0.4"/>
<circle cx="314" cy="66" r="9" fill="#5a6067"/>
<circle cx="311" cy="63" r="4" fill="#e0e6ea" opacity="0.6"/>
<path d="M252 94 Q 314 106 382 92" fill="none" stroke="#1c2024" stroke-width="3" opacity="0.4"/>

<!-- thumbing and grime -->
<g fill="#a89772" opacity="0.25">
  <circle cx="500" cy="200" r="2.2"/><circle cx="480" cy="356" r="1.8"/><circle cx="140" cy="440" r="2"/>
</g>
<path d="M498 400 q 26 -10 46 4 q -24 14 -50 2 Z" fill="#9e8a5e" opacity="0.22"/>

<rect width="640" height="520" fill="url(#ev2-log-vig)"/>
`,
  },

  /* The call board by the stage door: twenty minutes chalked up and gone. */
  c2_interval: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-int-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#28221a"/><stop offset="1" stop-color="#0a0806"/>
  </linearGradient>
  <radialGradient id="ev2-int-pool" cx="0.28" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#e8cc94" stop-opacity="0.26"/><stop offset="1" stop-color="#e8cc94" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-int-wall" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#5a4a34"/><stop offset="0.5" stop-color="#34291c"/><stop offset="1" stop-color="#171208"/>
  </linearGradient>
  <linearGradient id="ev2-int-wood" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#9c7a4c"/><stop offset="0.4" stop-color="#644a2b"/><stop offset="1" stop-color="#2b1f11"/>
  </linearGradient>
  <linearGradient id="ev2-int-slate" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#3d4348"/><stop offset="0.35" stop-color="#252a2e"/><stop offset="1" stop-color="#0e1113"/>
  </linearGradient>
  <filter id="ev2-int-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-int-vig" cx="0.44" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-int-bg)"/>
<path d="M0 0 L640 0 L640 520 L0 520 Z" fill="url(#ev2-int-wall)"/>
<g stroke="#1a140c" stroke-width="2.4" opacity="0.6" fill="none">
  <path d="M0 62 L640 50"/><path d="M0 156 L640 142"/><path d="M0 250 L640 234"/>
  <path d="M0 344 L640 326"/><path d="M0 438 L640 418"/>
</g>
<g stroke="#6d5636" stroke-width="0.9" opacity="0.2" fill="none">
  <path d="M0 70 L640 58"/><path d="M0 164 L640 150"/><path d="M0 258 L640 242"/><path d="M0 352 L640 334"/>
</g>
<rect width="640" height="520" fill="url(#ev2-int-pool)"/>

<g filter="url(#ev2-int-soft)" opacity="0.72">
  <path d="M74 66 L578 46 L594 452 L92 472 Z" fill="#000"/>
</g>

<!-- the board's wooden frame -->
<path d="M62 54 L568 34 L586 442 L82 462 Z" fill="url(#ev2-int-wood)"/>
<path d="M62 54 L568 34 L570 60 L64 80 Z" fill="#c69a60" opacity="0.4"/>
<path d="M540 36 L568 34 L586 442 L558 444 Z" fill="#1d1409" opacity="0.45"/>
<path d="M66 428 L580 410 L586 442 L82 462 Z" fill="#150f07" opacity="0.4"/>
<g stroke="#33240f" stroke-width="1" opacity="0.5" fill="none">
  <path d="M70 66 Q 320 54 578 44"/><path d="M76 448 Q 320 432 584 424"/>
</g>

<!-- the slate itself -->
<path d="M92 84 L540 66 L556 412 L110 430 Z" fill="url(#ev2-int-slate)"/>
<path d="M92 84 L540 66 L541 108 L93 126 Z" fill="#4e565c" opacity="0.3"/>
<path d="M508 68 L540 66 L556 412 L524 414 Z" fill="#05070a" opacity="0.4"/>
<path d="M92 84 L540 66 L556 412 L110 430 Z" fill="none" stroke="#5c646a" stroke-width="1.4" opacity="0.5"/>
<!-- the greasy sheen of a slate wiped a thousand times -->
<path d="M120 100 Q 260 150 200 420 L110 428 L94 96 Z" fill="#7d868c" opacity="0.07"/>
<path d="M300 90 Q 380 200 340 410" fill="none" stroke="#8d969c" stroke-width="34" opacity="0.05"/>

<!-- old chalk never quite erased: broad smears -->
<g fill="#c6c9c2" opacity="0.1">
  <path d="M110 150 Q 300 130 540 120 L542 172 Q 300 184 112 200 Z"/>
  <path d="M116 300 Q 320 284 552 274 L554 320 Q 320 334 118 348 Z"/>
</g>
<path d="M120 240 Q 340 224 548 214" fill="none" stroke="#b9bdb6" stroke-width="18" opacity="0.06"/>

<!-- ruled chalk columns and a header rule -->
<g stroke="#dcded6" stroke-width="2.6" opacity="0.6" fill="none" stroke-linecap="round">
  <path d="M106 128 L546 110"/>
  <path d="M258 92 L272 420"/><path d="M406 86 L420 416"/>
</g>
<g stroke="#ffffff" stroke-width="0.9" opacity="0.3" fill="none">
  <path d="M108 126 L546 108"/><path d="M259 96 L272 416"/>
</g>

<!-- the stage manager's chalk hand: broken, dusty strokes, never letters -->
<g stroke="#e8eae2" stroke-width="4.2" opacity="0.76" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M126 114 q6 -11 12 -1 q5 9 11 -3 q6 -10 12 1 M172 111 q6 -9 12 1 M198 109 q6 -10 12 0 q5 8 11 -4 q6 -9 12 2"/>
  <path d="M288 106 q6 -10 12 -1 q5 9 11 -3 M322 104 q6 -9 12 1 q5 8 11 -4 q6 -9 12 2 q5 8 11 -3"/>
  <path d="M436 100 q6 -10 12 -1 M462 99 q6 -9 12 1 q5 8 11 -4 q6 -9 12 2"/>
</g>
<g stroke="#e2e5dd" stroke-width="5" opacity="0.7" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M124 176 q7 -12 14 -1 q6 10 13 -4 q7 -11 14 2 M182 173 q7 -11 14 1 q6 10 13 -5"/>
  <path d="M290 170 q7 -12 14 -1 M320 168 q7 -11 14 1 q6 10 13 -5 q7 -10 14 3 M378 165 q7 -11 14 1"/>
  <path d="M438 164 q7 -12 14 -1 q6 10 13 -4 q7 -11 14 2 M496 160 q7 -11 14 1"/>
</g>
<g stroke="#dfe2da" stroke-width="4.4" opacity="0.62" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M126 240 q7 -12 14 -1 M156 238 q7 -11 14 1 q6 10 13 -5 q7 -10 14 3 M214 235 q7 -11 14 1 q6 10 13 -5"/>
  <path d="M292 232 q7 -12 14 -1 q6 10 13 -4 q7 -11 14 2 q6 9 13 -4"/>
  <path d="M440 226 q7 -12 14 -1 q6 10 13 -4 M486 223 q7 -11 14 1 q6 10 13 -5"/>
</g>
<!-- THE interval line, chalked twice as hard, and boxed round -->
<g stroke="#ffffff" stroke-width="6" opacity="0.92" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M128 304 q8 -15 16 -1 q7 13 15 -5 q8 -14 16 2 M188 300 q8 -13 16 1 q7 12 15 -6 M240 297 q8 -14 16 0"/>
  <path d="M294 294 q8 -15 16 -1 q7 13 15 -5 M342 291 q8 -13 16 1 q7 12 15 -6"/>
  <path d="M444 288 q8 -15 16 -1 q7 13 15 -5 M492 285 q8 -13 16 1"/>
</g>
<path d="M114 272 L546 254 L550 330 L118 348 Z" fill="none" stroke="#f4f6f0" stroke-width="4" opacity="0.7" stroke-linejoin="round"/>
<path d="M116 276 L544 258" stroke="#ffffff" stroke-width="1.2" opacity="0.35"/>
<g stroke="#e0e3db" stroke-width="4.2" opacity="0.56" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M130 374 q7 -12 14 -1 q6 10 13 -4 M176 371 q7 -11 14 1 q6 10 13 -5 q7 -10 14 3"/>
  <path d="M296 366 q7 -12 14 -1 M326 364 q7 -11 14 1 q6 10 13 -5"/>
  <path d="M446 360 q7 -12 14 -1 q6 10 13 -4 q7 -11 14 2 M504 356 q7 -11 14 1"/>
</g>
<!-- one entry struck out, and a chalked tick beside another -->
<path d="M290 240 L392 234" stroke="#e6e9e1" stroke-width="3.4" opacity="0.6"/>
<path d="M508 178 l 10 12 l 22 -26" fill="none" stroke="#f2f4ee" stroke-width="4" opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
<!-- the heel of a hand, dragged through the chalk -->
<path d="M180 336 q 90 -20 180 4 q -80 26 -184 8 Z" fill="#e6e8e0" opacity="0.1"/>
<g fill="#eef0e8" opacity="0.18">
  <circle cx="220" cy="352" r="2.6"/><circle cx="300" cy="358" r="2"/><circle cx="392" cy="344" r="2.2"/>
</g>

<!-- the chalk shelf, its stub and the felt wiper -->
<path d="M78 424 L582 406 L586 440 L82 458 Z" fill="url(#ev2-int-wood)"/>
<path d="M78 424 L582 406 L582 416 L78 434 Z" fill="#d0a469" opacity="0.45"/>
<path d="M82 448 L586 430 L586 440 L82 458 Z" fill="#150f07" opacity="0.5"/>
<path d="M156 414 L212 412 L214 428 L158 430 Z" fill="#f2f2ea"/>
<path d="M156 414 L212 412 L212 418 L156 420 Z" fill="#ffffff" opacity="0.7"/>
<path d="M158 424 L214 422 L214 428 L158 430 Z" fill="#a8a89e" opacity="0.6"/>
<path d="M206 412 q 10 6 4 16 q -8 2 -6 -8 Z" fill="#c9c9c0"/>
<path d="M330 408 L432 404 L436 430 L334 434 Z" fill="#4a3c2a"/>
<path d="M330 408 L432 404 L432 414 L330 418 Z" fill="#7d6a4c" opacity="0.7"/>
<path d="M334 424 L436 420 L436 430 L334 434 Z" fill="#d8d6cc" opacity="0.5"/>
<g fill="#e8e8e0" opacity="0.35">
  <circle cx="252" cy="432" r="2.4"/><circle cx="286" cy="436" r="1.8"/><circle cx="470" cy="426" r="2"/>
  <circle cx="126" cy="436" r="1.6"/><circle cx="508" cy="422" r="1.4"/>
</g>
<path d="M240 428 q 60 -6 96 6 q -60 8 -100 0 Z" fill="#eceee6" opacity="0.14"/>

<rect width="640" height="520" fill="url(#ev2-int-vig)"/>
`,
  },

  /* The prop table: every square filled but the one that mattered. */
  c2_window: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-win-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#1e1c19"/><stop offset="1" stop-color="#060605"/>
  </linearGradient>
  <radialGradient id="ev2-win-pool" cx="0.26" cy="0.12" r="0.8">
    <stop offset="0" stop-color="#d8c391" stop-opacity="0.26"/><stop offset="1" stop-color="#d8c391" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-win-table" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#3c3a35"/><stop offset="0.4" stop-color="#232220"/><stop offset="1" stop-color="#0e0e0d"/>
  </linearGradient>
  <linearGradient id="ev2-win-tape" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#cfc9b6"/><stop offset="0.6" stop-color="#a9a392"/><stop offset="1" stop-color="#7c776a"/>
  </linearGradient>
  <linearGradient id="ev2-win-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0dda6"/><stop offset="0.3" stop-color="#b99447"/><stop offset="1" stop-color="#4e3c17"/>
  </linearGradient>
  <linearGradient id="ev2-win-paper" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#efe6cc"/><stop offset="1" stop-color="#a99f82"/>
  </linearGradient>
  <filter id="ev2-win-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev2-win-vig" cx="0.42" cy="0.38" r="0.78">
    <stop offset="0.38" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-win-bg)"/>
<!-- the black of the wings behind, and one flat's edge catching the work light -->
<path d="M0 0 L640 0 L640 148 L0 172 Z" fill="#0a0a09"/>
<path d="M96 0 L118 0 L112 160 L90 162 Z" fill="#2e2b25" opacity="0.7"/>
<path d="M96 0 L104 0 L100 160 L92 161 Z" fill="#6d6656" opacity="0.35"/>
<path d="M462 0 L486 0 L494 154 L470 156 Z" fill="#26241f" opacity="0.6"/>
<g stroke="#1a1916" stroke-width="2" opacity="0.7" fill="none">
  <path d="M0 60 L640 46"/><path d="M0 116 L640 100"/>
</g>
<rect width="640" height="520" fill="url(#ev2-win-pool)"/>

<!-- the table top, black-painted deal, seen from above and in front -->
<path d="M0 152 L640 128 L640 520 L0 520 Z" fill="url(#ev2-win-table)"/>
<path d="M0 152 L640 128 L640 158 L0 182 Z" fill="#57544c" opacity="0.5"/>
<g stroke="#0a0a09" stroke-width="2" opacity="0.7" fill="none">
  <path d="M0 236 L640 210"/><path d="M0 330 L640 300"/><path d="M0 428 L640 396"/>
</g>
<g stroke="#4e4b43" stroke-width="0.8" opacity="0.22" fill="none">
  <path d="M0 244 L640 218"/><path d="M0 338 L640 308"/><path d="M0 436 L640 404"/>
</g>
<!-- paint worn off along the front edge by two hundred exits -->
<path d="M0 470 L640 436 L640 460 L0 496 Z" fill="#6a6255" opacity="0.2"/>
<path d="M120 466 q 120 -14 240 -4" fill="none" stroke="#8d8574" stroke-width="4" opacity="0.14"/>

<!-- tape squares: the stage manager's grid -->
<g fill="url(#ev2-win-tape)" opacity="0.78">
  <path d="M46 218 L200 208 L202 216 L48 226 Z"/><path d="M52 306 L206 294 L208 302 L54 314 Z"/>
  <path d="M46 218 L54 218 L60 310 L52 310 Z"/><path d="M194 208 L202 208 L208 302 L200 302 Z"/>
  <path d="M242 202 L396 192 L398 200 L244 210 Z"/><path d="M248 290 L402 278 L404 286 L250 298 Z"/>
  <path d="M242 202 L250 202 L256 294 L248 294 Z"/><path d="M390 192 L398 192 L404 286 L396 286 Z"/>
  <path d="M438 186 L592 176 L594 184 L440 194 Z"/><path d="M444 274 L598 262 L600 270 L602 278 L446 290 Z"/>
  <path d="M438 186 L446 186 L452 278 L444 278 Z"/><path d="M586 176 L594 176 L600 270 L592 270 Z"/>
  <path d="M60 348 L214 338 L216 346 L62 356 Z"/><path d="M66 436 L220 424 L222 432 L68 444 Z"/>
  <path d="M60 348 L68 348 L74 440 L66 440 Z"/><path d="M208 338 L216 338 L222 432 L214 432 Z"/>
</g>
<!-- the tape is old: greyed, curling, torn at the ends -->
<g fill="#6d6759" opacity="0.5">
  <path d="M150 210 L200 208 L202 216 L152 218 Z"/><path d="M340 194 L396 192 L398 200 L342 202 Z"/>
  <path d="M540 178 L592 176 L594 184 L542 186 Z"/>
</g>
<path d="M46 218 q -14 -4 -18 4 q 10 4 18 2 Z" fill="#e6e0d2" opacity="0.7"/>
<path d="M242 202 q -12 -4 -16 4 q 10 4 16 2 Z" fill="#e6e0d2" opacity="0.6"/>
<path d="M594 184 q 14 4 12 12 q -10 -2 -14 -8 Z" fill="#d8d2c2" opacity="0.6"/>
<g stroke="#e0dac8" stroke-width="0.8" opacity="0.22" fill="none">
  <path d="M46 214 L200 204"/><path d="M242 198 L396 188"/><path d="M438 182 L592 172"/><path d="M60 344 L214 334"/>
</g>

<!-- square one: a pewter goblet, on its mark -->
<g filter="url(#ev2-win-soft)" opacity="0.7">
  <ellipse cx="128" cy="292" rx="48" ry="14" fill="#000"/>
</g>
<ellipse cx="124" cy="288" rx="34" ry="9" fill="#585a58"/>
<ellipse cx="124" cy="284" rx="34" ry="9" fill="#7d807d"/>
<ellipse cx="124" cy="284" rx="34" ry="9" fill="none" stroke="#c2c6c2" stroke-width="1.4" opacity="0.5"/>
<path d="M114 282 L134 282 L132 244 L116 244 Z" fill="#6c706c"/>
<path d="M116 280 L118 246" stroke="#d6dad6" stroke-width="2.4" opacity="0.5"/>
<path d="M131 280 L129 246" stroke="#2c2f2c" stroke-width="1.4" opacity="0.5"/>
<path d="M96 178 L152 178 L146 232 Q 124 248 102 232 Z" fill="#767a76"/>
<path d="M100 180 L106 228 Q 112 238 118 240" fill="none" stroke="#dfe3df" stroke-width="4" opacity="0.4"/>
<path d="M146 182 L142 228" fill="none" stroke="#232623" stroke-width="3" opacity="0.5"/>
<ellipse cx="124" cy="178" rx="28" ry="7" fill="#8e928e"/>
<ellipse cx="124" cy="178" rx="28" ry="7" fill="none" stroke="#dde1dd" stroke-width="1.8" opacity="0.6"/>
<ellipse cx="124" cy="180" rx="24" ry="5" fill="#33362f"/>
<path d="M104 198 q 40 6 40 -2" fill="none" stroke="#4a4d47" stroke-width="1.4" opacity="0.5"/>

<!-- square two: a folded letter prop, tied -->
<g filter="url(#ev2-win-soft)" opacity="0.65">
  <path d="M270 246 L386 234 L392 276 L276 288 Z" fill="#000"/>
</g>
<path d="M264 232 L378 220 L384 268 L270 280 Z" fill="url(#ev2-win-paper)"/>
<path d="M264 232 L378 220 L379 234 L265 246 Z" fill="#faf3e0" opacity="0.4"/>
<path d="M356 222 L378 220 L384 268 L362 270 Z" fill="#8d8469" opacity="0.3"/>
<path d="M268 250 L380 238" stroke="#a49a7c" stroke-width="2" opacity="0.5"/>
<path d="M268 246 L380 234" stroke="#fbf5e4" stroke-width="1" opacity="0.5"/>
<path d="M302 222 Q 308 250 310 278" fill="none" stroke="#a49a7c" stroke-width="1.6" opacity="0.4"/>
<path d="M316 236 q 16 -10 30 2 q -14 12 -32 4 Z" fill="#7d1f1c" opacity="0.85"/>
<path d="M318 236 q 14 -8 26 2" fill="none" stroke="#c4564a" stroke-width="1.6" opacity="0.45"/>
<g stroke="#2a3450" stroke-width="1.6" opacity="0.6" fill="none" stroke-linecap="round">
  <path d="M276 258 q4 -6 8 -1 q3 5 7 -2 M298 256 q4 -6 8 0 M320 262 q4 -6 8 -1 q3 5 7 -2"/>
</g>

<!-- THE empty square: nothing on it but the shape the dagger kept the dust off -->
<path d="M446 186 L586 178 L592 268 L452 278 Z" fill="#0c0c0b" opacity="0.5"/>
<path d="M462 236 L560 202 L566 210 L468 244 Z" fill="#5e5a4e" opacity="0.35"/>
<path d="M462 236 L560 202 L566 210 L468 244 Z" fill="none" stroke="#8d8878" stroke-width="0.8" opacity="0.35"/>
<path d="M556 204 L578 198 L580 206 L560 212 Z" fill="#5e5a4e" opacity="0.32"/>
<path d="M466 240 L446 250 L448 258 L470 248 Z" fill="#5e5a4e" opacity="0.3"/>
<!-- the dust that has begun to settle back into it -->
<g fill="#9a9484" opacity="0.14">
  <circle cx="500" cy="222" r="1.6"/><circle cx="530" cy="212" r="1.3"/><circle cx="480" cy="234" r="1.4"/>
  <circle cx="548" cy="204" r="1.1"/><circle cx="512" cy="240" r="1.2"/>
</g>
<!-- and a fresh streak where a sleeve went across it in the dark -->
<path d="M440 262 q 80 -22 156 -10" fill="none" stroke="#7d7768" stroke-width="7" opacity="0.16"/>

<!-- square four: a pair of white gloves, laid one across the other -->
<g filter="url(#ev2-win-soft)" opacity="0.6">
  <path d="M86 396 L212 380 L216 414 L90 430 Z" fill="#000"/>
</g>
<path d="M84 402 q 26 -22 58 -22 q 10 -14 18 -2 q 10 -12 18 0 q 10 -10 16 4 q 6 16 -12 22 q -34 12 -76 6 q -26 -4 -22 -8 Z" fill="#cec7b2"/>
<path d="M84 402 q 26 -22 58 -22 q 10 -14 18 -2 q 10 -12 18 0" fill="none" stroke="#efe9d8" stroke-width="2.4" opacity="0.7"/>
<path d="M100 410 q 44 12 84 0 q -40 12 -88 4 Z" fill="#6e695a" opacity="0.55"/>
<g stroke="#8c8676" stroke-width="1.1" opacity="0.6" fill="none">
  <path d="M142 380 q 2 12 -2 20"/><path d="M160 378 q 2 12 -2 20"/><path d="M178 378 q 2 10 -2 18"/>
</g>
<path d="M92 396 q 18 -14 42 -16" fill="none" stroke="#f2ecdc" stroke-width="3" opacity="0.4" stroke-linecap="round"/>
<path d="M96 420 q 32 -20 76 -12 q 22 4 22 14 q -6 12 -30 12 q -46 2 -68 -8 q -10 -6 0 -6 Z" fill="#bdb6a2"/>
<path d="M96 420 q 32 -20 76 -12 q 22 4 22 14" fill="none" stroke="#e6dfcd" stroke-width="2.2" opacity="0.6"/>
<path d="M110 434 q 46 12 84 -4 q -34 18 -88 8 Z" fill="#635e51" opacity="0.6"/>
<g stroke="#847e70" stroke-width="1" opacity="0.55" fill="none">
  <path d="M148 408 q 2 10 -2 16"/><path d="M166 410 q 2 10 -2 16"/></g>
<path d="M120 448 q 30 6 60 -2" fill="none" stroke="#100e0b" stroke-width="5" opacity="0.4"/>

<!-- dust in the air of the wings -->
<g fill="#e8dcbc" opacity="0.12">
  <circle cx="300" cy="120" r="1.6"/><circle cx="430" cy="80" r="1.2"/><circle cx="180" cy="70" r="1.4"/>
  <circle cx="540" cy="120" r="1.3"/><circle cx="360" cy="52" r="1"/>
</g>

<rect width="640" height="520" fill="url(#ev2-win-vig)"/>
`,
  },

  /* Her dressing table, gone through by someone hunting paper. */
  c2_ransack: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-rans-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#2a2019"/><stop offset="1" stop-color="#0a0806"/>
  </linearGradient>
  <radialGradient id="ev2-rans-pool" cx="0.28" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#f0d59c" stop-opacity="0.28"/><stop offset="1" stop-color="#f0d59c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-rans-wood" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7d5a34"/><stop offset="0.5" stop-color="#4a341d"/><stop offset="1" stop-color="#1e1409"/>
  </linearGradient>
  <linearGradient id="ev2-rans-felt" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#3e5a44"/><stop offset="0.45" stop-color="#263c2c"/><stop offset="1" stop-color="#101c14"/>
  </linearGradient>
  <linearGradient id="ev2-rans-leather" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#8a5f36"/><stop offset="0.5" stop-color="#57381e"/><stop offset="1" stop-color="#28180c"/>
  </linearGradient>
  <linearGradient id="ev2-rans-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f6efdc"/><stop offset="0.5" stop-color="#ded5ba"/><stop offset="1" stop-color="#a89f85"/>
  </linearGradient>
  <filter id="ev2-rans-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-rans-vig" cx="0.44" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-rans-bg)"/>
<path d="M0 108 L640 84 L640 520 L0 520 Z" fill="url(#ev2-rans-wood)"/>
<g stroke="#33240f" stroke-width="1.4" opacity="0.45" fill="none">
  <path d="M0 172 Q 320 158 640 146"/><path d="M0 268 Q 320 252 640 238"/>
  <path d="M0 366 Q 320 348 640 332"/><path d="M0 464 Q 320 444 640 426"/>
</g>
<g stroke="#a67d4a" stroke-width="0.7" opacity="0.18" fill="none">
  <path d="M0 200 Q 320 186 640 174"/><path d="M0 300 Q 320 282 640 268"/><path d="M0 400 Q 320 380 640 364"/>
</g>
<rect width="640" height="520" fill="url(#ev2-rans-pool)"/>

<!-- papers thrown clear of the drawer, face down and every way up -->
<g filter="url(#ev2-rans-soft)" opacity="0.6">
  <path d="M40 128 L214 108 L232 210 L58 232 Z" fill="#000"/>
  <path d="M456 152 L620 132 L636 232 L470 252 Z" fill="#000"/>
</g>
<path d="M34 118 L206 98 L222 196 L50 218 Z" fill="#cdc4a8"/>
<path d="M34 118 L206 98 L207 122 L35 142 Z" fill="#f2ecd8" opacity="0.4"/>
<g stroke="#8d8570" stroke-width="1" opacity="0.4" fill="none">
  <path d="M44 148 L212 128"/><path d="M46 168 L214 148"/>
</g>
<path d="M452 142 L616 122 L630 218 L466 238 Z" fill="#dcd3b6"/>
<path d="M452 142 L616 122 L617 148 L453 168 Z" fill="#f8f2de" opacity="0.4"/>
<path d="M568 126 L616 122 L630 218 L586 222 Z" fill="#8f8770" opacity="0.3"/>
<g stroke="#2a3450" stroke-width="1.7" opacity="0.5" fill="none" stroke-linecap="round">
  <path d="M466 176 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M506 172 q4 -8 8 0 q3 6 7 -3 M540 168 q4 -7 8 -1 q3 6 7 -2"/>
  <path d="M468 200 q4 -7 8 -1 q3 6 7 -2 M500 196 q4 -8 8 0 q3 6 7 -3 M536 192 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
</g>

<!-- the blotter, dragged crooked and lifted at one corner -->
<g filter="url(#ev2-rans-soft)" opacity="0.72">
  <path d="M126 210 L506 178 L526 412 L146 446 Z" fill="#000"/>
</g>
<path d="M118 200 L498 168 L516 400 L136 434 Z" fill="url(#ev2-rans-felt)"/>
<path d="M118 200 L498 168 L500 200 L120 232 Z" fill="#5e8468" opacity="0.28"/>
<path d="M468 170 L498 168 L516 400 L486 402 Z" fill="#0c1710" opacity="0.4"/>
<g stroke="#4e7259" stroke-width="0.6" opacity="0.18" fill="none">
  <path d="M126 250 L506 218"/><path d="M130 300 L510 268"/><path d="M134 350 L514 318"/>
</g>
<!-- ink blots and pen-wipes soaked into the felt -->
<path d="M300 250 q 36 -12 60 6 q -30 22 -66 8 q -12 -10 6 -14 Z" fill="#141c30" opacity="0.4"/>
<path d="M212 340 q 22 -8 34 4 q -18 12 -38 4 Z" fill="#1a2338" opacity="0.32"/>
<circle cx="392" cy="308" r="7" fill="#141c30" opacity="0.3"/>
<circle cx="404" cy="322" r="3" fill="#141c30" opacity="0.25"/>
<!-- leather corners -->
<path d="M118 200 L176 195 L122 244 Z" fill="url(#ev2-rans-leather)"/>
<path d="M118 200 L176 195 L148 219 Z" fill="#a5763f" opacity="0.35"/>
<path d="M498 168 L496 224 L446 172 Z" fill="url(#ev2-rans-leather)"/>
<path d="M498 168 L497 198 L470 170 Z" fill="#a5763f" opacity="0.3"/>
<path d="M136 434 L140 380 L190 430 Z" fill="url(#ev2-rans-leather)"/>
<path d="M516 400 L466 405 L514 352 Z" fill="url(#ev2-rans-leather)"/>
<g stroke="#2a180b" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M123 242 L173 196"/><path d="M495 222 L448 174"/><path d="M141 382 L188 428"/><path d="M470 402 L512 358"/>
</g>
<!-- papers pulled out and dropped across it, every way up -->
<g filter="url(#ev2-rans-soft)" opacity="0.55">
  <path d="M186 248 L354 226 L370 314 L202 336 Z" fill="#000"/>
  <path d="M300 300 L444 276 L462 350 L318 374 Z" fill="#000"/>
</g>
<path d="M178 238 L344 216 L360 302 L194 324 Z" fill="url(#ev2-rans-paper)" transform="rotate(-6 268 270)"/>
<path d="M178 238 L344 216 L346 240 L180 262 Z" fill="#fdfaee" opacity="0.35" transform="rotate(-6 268 270)"/>
<g stroke="#2a3450" stroke-width="1.8" opacity="0.6" fill="none" stroke-linecap="round" transform="rotate(-6 268 270)">
  <path d="M192 268 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M232 264 q4 -8 8 0 q3 6 7 -3 M266 261 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1"/>
  <path d="M194 292 q4 -7 8 -1 q3 6 7 -2 M226 288 q4 -8 8 0 q3 6 7 -3 M260 285 q4 -7 8 -1 q3 6 7 -2 q4 -7 8 1 M304 281 q4 -8 8 0"/>
</g>
<path d="M296 292 L438 268 L454 340 L312 364 Z" fill="#e8e0c6" transform="rotate(9 374 316)"/>
<path d="M296 292 L438 268 L440 288 L298 312 Z" fill="#fbf6e6" opacity="0.4" transform="rotate(9 374 316)"/>
<g stroke="#8d8570" stroke-width="1" opacity="0.45" fill="none" transform="rotate(9 374 316)">
  <path d="M306 318 L432 296"/><path d="M308 334 L434 312"/>
</g>
<path d="M414 270 q 20 -6 30 6 q -20 10 -34 2 Z" fill="#7d1f1c" opacity="0.5" transform="rotate(9 374 316)"/>

<!-- the lifted corner, and the scrap of a torn letter under it -->
<path d="M336 406 L462 396 L470 372 L378 380 Z" fill="#e6dcbe"/>
<path d="M336 406 L462 396 L470 372 L378 380 Z" fill="none" stroke="#f8f2de" stroke-width="1" opacity="0.5"/>
<path d="M348 400 L458 391 L446 384 L370 390 Z" fill="#b3a883" opacity="0.5"/>
<g stroke="#2a3450" stroke-width="1.8" opacity="0.7" fill="none" stroke-linecap="round">
  <path d="M360 396 q4 -7 8 -1 q3 6 7 -2 M392 394 q4 -8 8 0 q3 6 7 -3 M424 391 q4 -7 8 -1 q3 6 7 -2"/>
</g>
<path d="M336 406 L378 380 L370 372 L326 400 Z" fill="#f2ead0"/>
<path d="M336 406 L378 380 L370 372 L326 400 Z" fill="none" stroke="#fdf8e8" stroke-width="1" opacity="0.6"/>
<path d="M320 412 L336 406 L326 400 L312 408 Z" fill="#8f8770"/>
<path d="M462 396 L516 400 L486 402 L470 372 Z" fill="#101a12" opacity="0.5"/>

<!-- the drawer, out and dropped, its face toward us -->
<g filter="url(#ev2-rans-soft)" opacity="0.7">
  <path d="M158 452 L470 424 L482 520 L170 520 Z" fill="#000"/>
</g>
<path d="M152 444 L462 416 L474 512 L164 520 Z" fill="url(#ev2-rans-wood)"/>
<path d="M152 444 L462 416 L463 444 L153 472 Z" fill="#c1935a" opacity="0.4"/>
<path d="M430 418 L462 416 L474 512 L442 514 Z" fill="#160f07" opacity="0.45"/>
<g stroke="#2a1c0d" stroke-width="1.2" opacity="0.5" fill="none">
  <path d="M160 480 Q 310 468 468 456"/><path d="M164 502 Q 310 490 472 478"/>
</g>
<path d="M280 452 q 40 -8 76 4 q 8 22 -34 26 q -46 2 -50 -16 q 0 -12 8 -14 Z" fill="url(#ev2-rans-leather)"/>
<path d="M284 454 q 38 -6 68 6" fill="none" stroke="#c99958" stroke-width="2.4" opacity="0.45"/>
<circle cx="278" cy="462" r="5" fill="#c8a05c"/><circle cx="358" cy="458" r="5" fill="#c8a05c"/>
<circle cx="276" cy="460" r="1.8" fill="#f6e2b0" opacity="0.7"/>

<!-- hairpins and a spilled scent bottle: what they did not care about -->
<g stroke="#2e2b26" stroke-width="2.4" opacity="0.8" fill="none" stroke-linecap="round">
  <path d="M540 288 q 18 -6 34 2 q -4 8 -18 6 q -12 -2 -16 -8"/>
  <path d="M556 320 q 20 -4 36 6"/><path d="M520 340 q 16 -8 30 -2"/>
</g>
<g stroke="#9aa0a6" stroke-width="0.9" opacity="0.5" fill="none">
  <path d="M540 286 q 18 -6 34 2"/><path d="M556 318 q 20 -4 36 6"/>
</g>
<path d="M60 260 L100 254 L104 300 Q 82 312 58 300 Z" fill="#7d9aa8" opacity="0.55"/>
<path d="M60 260 L74 258 L76 302 Q 66 302 58 300 Z" fill="#d6e8f0" opacity="0.4"/>
<path d="M72 254 L90 252 L92 240 L74 242 Z" fill="#b8a05c"/>
<path d="M72 254 L80 253 L80 241 L74 242 Z" fill="#f2dfa0" opacity="0.6"/>
<path d="M100 300 q 44 22 96 8 q -50 26 -104 6 Z" fill="#8fa5a8" opacity="0.22"/>

<rect width="640" height="520" fill="url(#ev2-rans-vig)"/>
`,
  },

  /* Adele's telegram: the same six words, every closing night for six years. */
  c2_telegramA: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-tel-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241f18"/><stop offset="1" stop-color="#090807"/>
  </linearGradient>
  <radialGradient id="ev2-tel-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e4cd97" stop-opacity="0.26"/><stop offset="1" stop-color="#e4cd97" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-tel-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#4a3524"/><stop offset="0.6" stop-color="#271c12"/><stop offset="1" stop-color="#100b07"/>
  </linearGradient>
  <linearGradient id="ev2-tel-form" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f6ecc4"/><stop offset="0.45" stop-color="#e2d3a2"/><stop offset="1" stop-color="#ab9d72"/>
  </linearGradient>
  <linearGradient id="ev2-tel-tape" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fdf8ea"/><stop offset="0.35" stop-color="#eee6cf"/><stop offset="1" stop-color="#bdb49a"/>
  </linearGradient>
  <linearGradient id="ev2-tel-env" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#d9cfae"/><stop offset="1" stop-color="#8f8567"/>
  </linearGradient>
  <filter id="ev2-tel-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-tel-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-tel-bg)"/>
<path d="M0 96 L640 72 L640 520 L0 520 Z" fill="url(#ev2-tel-desk)"/>
<g stroke="#5a4229" stroke-width="1" opacity="0.28" fill="none">
  <path d="M0 156 L640 132"/><path d="M0 224 L640 198"/><path d="M0 296 L640 268"/>
  <path d="M0 370 L640 340"/><path d="M0 444 L640 412"/>
</g>
<rect width="640" height="520" fill="url(#ev2-tel-pool)"/>

<!-- the envelope it came in, opened along the top with a thumb -->
<g filter="url(#ev2-tel-soft)" opacity="0.6">
  <path d="M330 300 L604 274 L618 408 L344 434 Z" fill="#000"/>
</g>
<path d="M326 292 L596 266 L610 396 L340 422 Z" fill="url(#ev2-tel-env)"/>
<path d="M326 292 L596 266 L597 296 L327 322 Z" fill="#f4ecd0" opacity="0.35"/>
<path d="M326 292 L462 322 L596 266" fill="none" stroke="#8f8567" stroke-width="1.6" opacity="0.6"/>
<path d="M330 296 L462 326 L592 270" fill="none" stroke="#f8f2dc" stroke-width="1" opacity="0.4"/>
<g stroke="#7d745a" stroke-width="0.9" opacity="0.5" fill="none">
  <path d="M338 344 L470 356"/><path d="M340 366 L474 378"/>
</g>
<path d="M556 288 q 24 -8 34 8 q -20 16 -40 4 Z" fill="#8a2a24" opacity="0.75"/>
<path d="M558 290 q 20 -6 30 8" fill="none" stroke="#c8574a" stroke-width="1.6" opacity="0.4"/>

<!-- the telegram form -->
<g filter="url(#ev2-tel-soft)" opacity="0.75">
  <path d="M52 88 L482 62 L500 336 L70 364 Z" fill="#000"/>
</g>
<path d="M44 78 L474 52 L492 322 L62 350 Z" fill="url(#ev2-tel-form)"/>
<path d="M44 78 L474 52 L476 90 L46 118 Z" fill="#fdf6d8" opacity="0.34"/>
<path d="M444 54 L474 52 L492 322 L462 324 Z" fill="#8f8462" opacity="0.28"/>
<path d="M44 78 L474 52 L492 322 L62 350 Z" fill="none" stroke="#fbf3d8" stroke-width="1.2" opacity="0.42"/>

<!-- the company's printed band across the head, and its rules -->
<path d="M52 94 L468 68 L472 118 L56 144 Z" fill="#2e2a20" opacity="0.88"/>
<g fill="#e8dcae" opacity="0.85">
  <rect x="88" y="98" width="56" height="14" rx="1" transform="rotate(-3.4 116 105)"/>
  <rect x="154" y="94" width="30" height="14" rx="1" transform="rotate(-3.4 169 101)"/>
  <rect x="194" y="92" width="72" height="14" rx="1" transform="rotate(-3.4 230 99)"/>
  <rect x="276" y="87" width="44" height="14" rx="1" transform="rotate(-3.4 298 94)"/>
</g>
<g fill="#c8bc92" opacity="0.6">
  <rect x="88" y="120" width="120" height="5" transform="rotate(-3.4 148 122)"/>
  <rect x="216" y="112" width="76" height="5" transform="rotate(-3.4 254 114)"/>
  <rect x="300" y="107" width="98" height="5" transform="rotate(-3.4 349 109)"/>
</g>
<path d="M52 154 L474 128" stroke="#6d6244" stroke-width="1.6" opacity="0.6"/>
<!-- the form's boxed fields, filled with a clerk's small typing -->
<g fill="none" stroke="#8a7d58" stroke-width="1.1" opacity="0.55">
  <path d="M58 166 L226 156 L228 194 L60 204 Z"/><path d="M244 155 L466 141 L470 179 L248 193 Z"/>
</g>
<g fill="#4a4432" opacity="0.7">
  <rect x="68" y="176" width="34" height="5"/><rect x="108" y="174" width="52" height="5"/><rect x="166" y="172" width="26" height="5"/>
  <rect x="256" y="164" width="46" height="5"/><rect x="308" y="162" width="28" height="5"/><rect x="342" y="160" width="58" height="5"/><rect x="406" y="158" width="34" height="5"/>
</g>

<!-- the message: gummed tape strips, pasted on slightly out of true -->
<g filter="url(#ev2-tel-soft)" opacity="0.5">
  <path d="M76 226 L426 202 L430 250 L80 274 Z" fill="#000"/>
</g>
<path d="M72 216 L438 190 L441 214 L75 240 Z" fill="url(#ev2-tel-tape)"/>
<path d="M72 216 L438 190 L438 198 L72 224 Z" fill="#ffffff" opacity="0.45"/>
<path d="M74 234 L440 208 L441 214 L75 240 Z" fill="#a89e84" opacity="0.5"/>
<g fill="#33302a" opacity="0.85">
  <rect x="86" y="222" width="30" height="7" transform="rotate(-4 101 225)"/>
  <rect x="124" y="219" width="18" height="7" transform="rotate(-4 133 222)"/>
  <rect x="150" y="217" width="48" height="7" transform="rotate(-4 174 220)"/>
  <rect x="206" y="213" width="26" height="7" transform="rotate(-4 219 216)"/>
  <rect x="240" y="211" width="40" height="7" transform="rotate(-4 260 214)"/>
  <rect x="288" y="207" width="22" height="7" transform="rotate(-4 299 210)"/>
  <rect x="318" y="205" width="52" height="7" transform="rotate(-4 344 208)"/>
  <rect x="378" y="201" width="30" height="7" transform="rotate(-4 393 204)"/>
</g>
<path d="M78 262 L444 236 L447 260 L81 286 Z" fill="url(#ev2-tel-tape)"/>
<path d="M78 262 L444 236 L444 244 L78 270 Z" fill="#ffffff" opacity="0.42"/>
<path d="M80 280 L446 254 L447 260 L81 286 Z" fill="#a89e84" opacity="0.5"/>
<g fill="#33302a" opacity="0.85">
  <rect x="92" y="268" width="42" height="7" transform="rotate(-4 113 271)"/>
  <rect x="142" y="265" width="24" height="7" transform="rotate(-4 154 268)"/>
  <rect x="174" y="263" width="36" height="7" transform="rotate(-4 192 266)"/>
  <rect x="218" y="259" width="52" height="7" transform="rotate(-4 244 262)"/>
  <rect x="278" y="255" width="20" height="7" transform="rotate(-4 288 258)"/>
  <rect x="306" y="253" width="44" height="7" transform="rotate(-4 328 256)"/>
  <rect x="358" y="250" width="28" height="7" transform="rotate(-4 372 253)"/>
</g>
<path d="M84 302 L282 288 L284 312 L86 326 Z" fill="url(#ev2-tel-tape)"/>
<path d="M84 302 L282 288 L282 296 L84 310 Z" fill="#ffffff" opacity="0.4"/>
<path d="M86 320 L284 306 L284 312 L86 326 Z" fill="#a89e84" opacity="0.5"/>
<g fill="#33302a" opacity="0.85">
  <rect x="98" y="308" width="34" height="7" transform="rotate(-4 115 311)"/>
  <rect x="140" y="306" width="20" height="7" transform="rotate(-4 150 309)"/>
  <rect x="168" y="304" width="48" height="7" transform="rotate(-4 192 307)"/>
  <rect x="224" y="301" width="26" height="7" transform="rotate(-4 237 304)"/>
</g>
<!-- the paste showing at the tape ends, and one corner already lifting -->
<path d="M438 190 q 14 4 12 14 q -12 0 -14 -8 Z" fill="#e6ddc2" opacity="0.8"/>
<path d="M438 190 q 14 4 12 14" fill="none" stroke="#fdf8ea" stroke-width="0.9" opacity="0.6"/>
<g fill="#c4b894" opacity="0.35">
  <path d="M74 214 L438 188 L438 192 L74 218 Z"/><path d="M80 260 L444 234 L444 238 L80 264 Z"/>
</g>

<!-- the receiving clerk's date stamp, in purple, off-centre and half over the tape -->
<g opacity="0.5">
  <circle cx="400" cy="290" r="42" fill="none" stroke="#5c3d78" stroke-width="4"/>
  <circle cx="400" cy="290" r="30" fill="none" stroke="#5c3d78" stroke-width="2"/>
  <g fill="#5c3d78">
    <rect x="374" y="284" width="24" height="6" rx="1"/><rect x="404" y="284" width="16" height="6" rx="1"/>
    <rect x="382" y="266" width="34" height="5" rx="1"/><rect x="384" y="304" width="30" height="5" rx="1"/>
  </g>
</g>
<g fill="#5c3d78" opacity="0.22">
  <circle cx="440" cy="252" r="3"/><circle cx="366" cy="330" r="2.4"/>
</g>

<!-- fold, fibre, and the thumb that opened it -->
<path d="M254 60 Q 264 190 272 336" fill="none" stroke="#a89a6e" stroke-width="2.4" opacity="0.3"/>
<path d="M258 60 Q 268 190 276 336" fill="none" stroke="#fcf5da" stroke-width="1.1" opacity="0.4"/>
<g fill="#a08f5e" opacity="0.28">
  <circle cx="130" cy="160" r="1.8"/><circle cx="410" cy="130" r="1.5"/><circle cx="200" cy="332" r="1.6"/>
  <circle cx="470" cy="300" r="1.4"/>
</g>
<g opacity="0.14" fill="none" stroke="#4a4130" stroke-width="1.1">
  <path d="M112 320 q 10 9 0 18"/><path d="M118 316 q 15 13 0 26"/><path d="M124 312 q 20 17 -1 34"/>
</g>

<rect width="640" height="520" fill="url(#ev2-tel-vig)"/>
`,
  },

  /* The production policy: it pays on a principal's death, and Braff is named. */
  c2_insurance: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-ins-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#231e18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-ins-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e5cd98" stop-opacity="0.24"/><stop offset="1" stop-color="#e5cd98" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-ins-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3c2c1e"/><stop offset="0.6" stop-color="#20170f"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <linearGradient id="ev2-ins-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f8f3e4"/><stop offset="0.45" stop-color="#e6dec8"/><stop offset="1" stop-color="#b0a892"/>
  </linearGradient>
  <linearGradient id="ev2-ins-seal" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#f6e4a8"/><stop offset="0.4" stop-color="#c2a05a"/><stop offset="1" stop-color="#7a5c18"/>
  </linearGradient>
  <linearGradient id="ev2-ins-ribbon" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#9d3a34"/><stop offset="0.5" stop-color="#6e211d"/><stop offset="1" stop-color="#37100e"/>
  </linearGradient>
  <filter id="ev2-ins-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-ins-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-ins-bg)"/>
<path d="M0 78 L640 54 L640 520 L0 520 Z" fill="url(#ev2-ins-desk)"/>
<g stroke="#4e3925" stroke-width="1" opacity="0.26" fill="none">
  <path d="M0 140 L640 116"/><path d="M0 214 L640 188"/><path d="M0 292 L640 264"/>
  <path d="M0 372 L640 342"/><path d="M0 452 L640 420"/>
</g>
<rect width="640" height="520" fill="url(#ev2-ins-pool)"/>

<g filter="url(#ev2-ins-soft)" opacity="0.76">
  <path d="M74 62 L564 42 L586 486 L96 506 Z" fill="#000"/>
</g>

<path d="M66 52 L556 32 L578 476 L88 496 Z" fill="url(#ev2-ins-paper)"/>
<path d="M66 52 L556 32 L558 76 L68 96 Z" fill="#fdfaf0" opacity="0.34"/>
<path d="M522 34 L556 32 L578 476 L544 478 Z" fill="#948d78" opacity="0.28"/>
<path d="M66 52 L556 32 L578 476 L88 496 Z" fill="none" stroke="#fcf8ec" stroke-width="1.3" opacity="0.42"/>

<!-- the engraved border, double-ruled with corner rosettes -->
<path d="M86 74 L536 56 L556 458 L106 476 Z" fill="none" stroke="#4a5a4a" stroke-width="2.6" opacity="0.55"/>
<path d="M96 84 L526 66 L545 448 L115 466 Z" fill="none" stroke="#4a5a4a" stroke-width="1" opacity="0.4"/>
<g fill="none" stroke="#4a5a4a" stroke-width="1.6" opacity="0.45">
  <circle cx="96" cy="82" r="9"/><circle cx="527" cy="64" r="9"/><circle cx="116" cy="458" r="9"/><circle cx="546" cy="440" r="9"/>
</g>
<g stroke="#4a5a4a" stroke-width="0.7" opacity="0.22" fill="none">
  <path d="M90 78 L532 60"/><path d="M92 100 L534 82"/><path d="M110 466 L550 448"/>
</g>

<!-- the head: a heavy engraved line, a rule, then the class of policy -->
<g fill="#2d3a2f" opacity="0.85">
  <rect x="176" y="106" width="66" height="17" rx="2" transform="rotate(-2.3 209 114)"/>
  <rect x="252" y="103" width="40" height="17" rx="2" transform="rotate(-2.3 272 111)"/>
  <rect x="302" y="101" width="94" height="17" rx="2" transform="rotate(-2.3 349 109)"/>
</g>
<path d="M140 142 L490 128" stroke="#4a5a4a" stroke-width="1.8" opacity="0.5"/>
<g fill="#4e5b4c" opacity="0.6">
  <rect x="200" y="156" width="42" height="7" transform="rotate(-2.3 221 159)"/>
  <rect x="250" y="154" width="70" height="7" transform="rotate(-2.3 285 157)"/>
  <rect x="330" y="151" width="34" height="7" transform="rotate(-2.3 347 154)"/>
</g>

<!-- clauses: dense small print, set as dashed rules -->
<g stroke="#4c4a3e" stroke-width="4" opacity="0.6">
  <path d="M112 194 L512 178" stroke-dasharray="34 6 52 6 28 6 60 6 40"/>
  <path d="M113 212 L513 196" stroke-dasharray="48 6 26 6 56 6 34 6 50"/>
  <path d="M114 230 L514 214" stroke-dasharray="28 6 60 6 32 6 48 6 30"/>
  <path d="M115 248 L515 232" stroke-dasharray="54 6 30 6 42 6 26 6 58"/>
</g>
<!-- THE clause, ruled off and marked in the margin -->
<path d="M110 268 L516 252 L520 320 L114 336 Z" fill="#d6cfae" opacity="0.3"/>
<path d="M110 268 L516 252 L520 320 L114 336 Z" fill="none" stroke="#4a5a4a" stroke-width="1.4" opacity="0.45"/>
<g stroke="#2b2a22" stroke-width="5" opacity="0.8">
  <path d="M124 288 L502 272" stroke-dasharray="40 7 60 7 32 7 70 7 44"/>
  <path d="M125 310 L503 294" stroke-dasharray="56 7 34 7 64 7 40"/>
</g>
<path d="M96 266 Q 82 300 98 336" fill="none" stroke="#8e2622" stroke-width="4" opacity="0.7" stroke-linecap="round"/>
<path d="M92 296 L110 296" stroke="#8e2622" stroke-width="3" opacity="0.6"/>

<!-- the schedule: a boxed table, the benefit figure ringed in red ink -->
<g fill="none" stroke="#4a5a4a" stroke-width="1.4" opacity="0.5">
  <path d="M118 358 L512 342 L516 428 L122 444 Z"/>
  <path d="M118 386 L514 370"/><path d="M300 350 L306 436"/>
</g>
<g fill="#4e5b4c" opacity="0.65">
  <rect x="132" y="366" width="60" height="6"/><rect x="200" y="365" width="34" height="6"/>
  <rect x="318" y="358" width="46" height="6"/><rect x="372" y="357" width="28" height="6"/>
  <rect x="134" y="404" width="44" height="6"/><rect x="186" y="403" width="52" height="6"/>
</g>
<g fill="#2b2a22" opacity="0.85">
  <rect x="330" y="396" width="20" height="14" rx="1"/><rect x="356" y="395" width="16" height="14" rx="1"/>
  <rect x="378" y="394" width="16" height="14" rx="1"/><rect x="400" y="393" width="16" height="14" rx="1"/>
</g>
<ellipse cx="368" cy="402" rx="62" ry="24" fill="none" stroke="#8e2622" stroke-width="3.4" opacity="0.72" transform="rotate(-2.3 368 402)"/>
<path d="M310 424 Q 372 442 434 420" fill="none" stroke="#8e2622" stroke-width="2.4" opacity="0.55"/>

<!-- premiums-paid stamp, and the beneficiary's signature -->
<g transform="rotate(-9 190 300)" opacity="0.55">
  <rect x="128" y="180" width="126" height="40" rx="3" fill="none" stroke="#2f5a8c" stroke-width="4"/>
  <g fill="#2f5a8c">
    <rect x="140" y="192" width="30" height="14" rx="1"/><rect x="176" y="192" width="18" height="14" rx="1"/>
    <rect x="200" y="192" width="42" height="14" rx="1"/>
  </g>
</g>
<g stroke="#1f2740" stroke-width="3" opacity="0.85" fill="none" stroke-linecap="round">
  <path d="M330 462 q-6 -28 8 -28 q10 2 2 24 q-2 12 6 12 q8 0 10 -12 q3 -12 10 -4 q4 6 10 -2"/>
  <path d="M378 456 q-4 -24 8 -23 q9 2 1 20 q-1 10 7 9 q7 -1 9 -10 q3 -10 9 -2 q4 6 10 -3"/>
  <path d="M328 466 q54 14 106 -10"/>
</g>
<path d="M320 452 L470 446" stroke="#4a5a4a" stroke-width="1" opacity="0.45"/>

<!-- the seal: gold foil, embossed, with two ribbon tails under it -->
<path d="M182 464 q -34 24 -52 42 q 34 -8 60 -28 Z" fill="url(#ev2-ins-ribbon)"/>
<path d="M212 466 q 26 30 30 54 q -34 -18 -46 -44 Z" fill="url(#ev2-ins-ribbon)"/>
<path d="M186 468 q -28 20 -44 34" fill="none" stroke="#c46a5e" stroke-width="1.8" opacity="0.28"/>
<circle cx="196" cy="450" r="32" fill="url(#ev2-ins-seal)"/>
<circle cx="196" cy="450" r="32" fill="none" stroke="#f8ecc0" stroke-width="1.6" opacity="0.6"/>
<circle cx="196" cy="450" r="23" fill="none" stroke="#8a6a1e" stroke-width="1.6" opacity="0.6"/>
<path d="M196 428 l 7 15 l 16 2 l -12 12 l 3 16 l -14 -8 l -14 8 l 3 -16 l -12 -12 l 16 -2 Z" fill="#e8d18a"/>
<path d="M196 428 l 7 15 l 16 2 l -12 12" fill="none" stroke="#fdf4d0" stroke-width="1.2" opacity="0.7"/>
<path d="M196 470 l -14 -8 l 3 -16" fill="none" stroke="#7a5c18" stroke-width="1.4" opacity="0.6"/>
<ellipse cx="184" cy="436" rx="9" ry="6" fill="#fffbe4" opacity="0.4"/>
<g stroke="#8a6a1e" stroke-width="0.8" opacity="0.35" fill="none">
  <circle cx="196" cy="450" r="28"/>
</g>

<!-- age and handling -->
<g fill="#a09578" opacity="0.26">
  <circle cx="480" cy="180" r="2.2"/><circle cx="150" cy="330" r="1.8"/><circle cx="500" cy="330" r="2"/>
  <circle cx="260" cy="120" r="1.4"/>
</g>
<path d="M470 200 q 26 -10 46 4 q -24 14 -50 2 Z" fill="#a08c5e" opacity="0.2"/>
<path d="M88 496 L132 492 L94 462 Z" fill="#c7bfa6"/>
<path d="M94 462 L132 492" stroke="#807a66" stroke-width="1.6" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev2-ins-vig)"/>
`,
  },

  /* Four thousand dollars owed to the Marberry Club, and a date on it. */
  c2_debts: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-debt-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#221d17"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-debt-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e2cb95" stop-opacity="0.24"/><stop offset="1" stop-color="#e2cb95" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-debt-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3a2b1d"/><stop offset="0.6" stop-color="#1f160e"/><stop offset="1" stop-color="#0c0806"/>
  </linearGradient>
  <linearGradient id="ev2-debt-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#fbf7ec"/><stop offset="0.45" stop-color="#e8e1cf"/><stop offset="1" stop-color="#b2ab97"/>
  </linearGradient>
  <linearGradient id="ev2-debt-under" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#e0d8c4"/><stop offset="1" stop-color="#958f7c"/>
  </linearGradient>
  <linearGradient id="ev2-debt-emboss" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.75"/><stop offset="0.55" stop-color="#c4bda8" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#6e6857" stop-opacity="0.5"/>
  </linearGradient>
  <filter id="ev2-debt-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-debt-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-debt-bg)"/>
<path d="M0 84 L640 60 L640 520 L0 520 Z" fill="url(#ev2-debt-desk)"/>
<g stroke="#4e3925" stroke-width="1" opacity="0.24" fill="none">
  <path d="M0 148 L640 122"/><path d="M0 224 L640 196"/><path d="M0 302 L640 272"/>
  <path d="M0 382 L640 350"/><path d="M0 462 L640 428"/>
</g>
<rect width="640" height="520" fill="url(#ev2-debt-pool)"/>

<g filter="url(#ev2-debt-soft)" opacity="0.74">
  <path d="M88 92 L556 62 L582 456 L114 486 Z" fill="#000"/>
</g>

<!-- the ones underneath: this is not the first letter -->
<path d="M104 122 L546 92 L568 442 L126 472 Z" fill="url(#ev2-debt-under)"/>
<path d="M96 108 L538 78 L560 430 L118 460 Z" fill="#cfc8b4"/>
<path d="M88 94 L530 64 L552 418 L110 448 Z" fill="#ddd6c2"/>
<g stroke="#8d8672" stroke-width="0.6" opacity="0.5" fill="none">
  <path d="M104 122 L546 92"/><path d="M96 108 L538 78"/><path d="M126 472 L568 442"/>
</g>

<!-- the top letter -->
<path d="M76 80 L518 50 L540 404 L98 434 Z" fill="url(#ev2-debt-paper)"/>
<path d="M76 80 L518 50 L520 96 L78 126 Z" fill="#fefcf4" opacity="0.34"/>
<path d="M484 52 L518 50 L540 404 L506 406 Z" fill="#948e7b" opacity="0.26"/>
<path d="M76 80 L518 50 L540 404 L98 434 Z" fill="none" stroke="#fefaee" stroke-width="1.3" opacity="0.42"/>

<!-- the club's blind-embossed crest at the head: relief, no ink -->
<path d="M264 96 q 26 -4 44 12 q 10 26 -8 44 q -22 14 -44 -2 q -14 -22 -2 -42 Z" fill="url(#ev2-debt-emboss)"/>
<path d="M266 100 q 24 -6 42 12" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.9"/>
<path d="M262 138 q 22 16 44 2" fill="none" stroke="#6e6857" stroke-width="2.6" opacity="0.75"/>
<path d="M278 108 L286 130 L296 106 L306 128" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.85"/>
<path d="M280 112 L288 134 L298 110 L308 132" fill="none" stroke="#726c5a" stroke-width="2" opacity="0.7"/>
<path d="M270 148 L306 146" stroke="#ffffff" stroke-width="2" opacity="0.45"/>
<path d="M270 151 L306 149" stroke="#837d69" stroke-width="1.2" opacity="0.4"/>
<g fill="none" stroke="#ffffff" stroke-width="1.4" opacity="0.4">
  <path d="M236 130 q 20 -22 26 -6"/><path d="M336 124 q -20 -22 -26 -6"/>
</g>

<path d="M110 176 L500 150" stroke="#8d8672" stroke-width="1.2" opacity="0.5"/>

<!-- the letter, typed and short -->
<g stroke="#3f3a2d" stroke-width="4.6" opacity="0.75">
  <path d="M112 208 L332 194" stroke-dasharray="30 7 46 7 26 7 52"/>
  <path d="M113 232 L482 208" stroke-dasharray="44 7 24 7 50 7 32 7 60 7 38"/>
  <path d="M114 256 L486 232" stroke-dasharray="26 7 54 7 30 7 44 7 40 7 56"/>
  <path d="M115 280 L488 256" stroke-dasharray="48 7 28 7 42 7 34 7 50"/>
</g>
<!-- THE figure: struck twice as hard, ringed and underscored in red ink -->
<g fill="#241f16" opacity="0.9">
  <rect x="150" y="304" width="22" height="16" rx="1" transform="rotate(-3.7 161 312)"/>
  <rect x="178" y="302" width="18" height="16" rx="1" transform="rotate(-3.7 187 310)"/>
  <rect x="202" y="300" width="18" height="16" rx="1" transform="rotate(-3.7 211 308)"/>
  <rect x="226" y="298" width="18" height="16" rx="1" transform="rotate(-3.7 235 306)"/>
  <rect x="122" y="306" width="14" height="16" rx="1" transform="rotate(-3.7 129 314)"/>
</g>
<ellipse cx="184" cy="310" rx="76" ry="26" fill="none" stroke="#96261f" stroke-width="3.6" opacity="0.75" transform="rotate(-3.7 184 310)"/>
<path d="M112 342 L272 332" stroke="#96261f" stroke-width="3" opacity="0.7"/>
<path d="M114 350 L270 340" stroke="#96261f" stroke-width="1.8" opacity="0.55"/>
<!-- the date it falls due, underscored by the same pen -->
<g stroke="#3f3a2d" stroke-width="4.6" opacity="0.78">
  <path d="M290 328 L494 314" stroke-dasharray="36 7 28 7 54 7 44"/>
</g>
<path d="M292 344 L474 332" stroke="#96261f" stroke-width="2.6" opacity="0.65"/>
<!-- and a line under that which stops short -->
<g stroke="#3f3a2d" stroke-width="4.4" opacity="0.7">
  <path d="M118 374 L420 354" stroke-dasharray="28 7 50 7 34 7 44 7 30"/>
</g>

<!-- the secretary's signature, and the club's ink stamp beside it -->
<g stroke="#1f2740" stroke-width="3" opacity="0.85" fill="none" stroke-linecap="round">
  <path d="M136 412 q-6 -28 8 -28 q10 2 2 24 q-2 12 6 12 q8 0 10 -12 q3 -12 10 -4 q4 6 10 -2"/>
  <path d="M184 408 q-4 -24 8 -23 q9 2 1 20 q-1 10 7 9 q7 -1 9 -10 q3 -10 9 -2 q4 6 10 -3 q6 -8 12 4"/>
  <path d="M134 414 q56 14 108 -10"/>
</g>
<g transform="rotate(-11 400 384)" opacity="0.42">
  <circle cx="400" cy="384" r="38" fill="none" stroke="#2f4a7a" stroke-width="3.4"/>
  <circle cx="400" cy="384" r="27" fill="none" stroke="#2f4a7a" stroke-width="1.6"/>
  <g fill="#2f4a7a">
    <rect x="378" y="378" width="24" height="6" rx="1"/><rect x="406" y="378" width="14" height="6" rx="1"/>
    <rect x="384" y="362" width="30" height="5" rx="1"/><rect x="386" y="398" width="26" height="5" rx="1"/>
  </g>
</g>

<!-- fold, foxing, and a whisky ring -->
<path d="M290 58 Q 300 224 310 418" fill="none" stroke="#a49d88" stroke-width="2.4" opacity="0.3"/>
<path d="M294 58 Q 304 224 314 418" fill="none" stroke="#fdfaf0" stroke-width="1.1" opacity="0.42"/>
<ellipse cx="440" cy="150" rx="48" ry="30" fill="none" stroke="#9d7c46" stroke-width="3.4" opacity="0.28" transform="rotate(-4 440 150)"/>
<ellipse cx="440" cy="150" rx="42" ry="25" fill="#9d7c46" opacity="0.07" transform="rotate(-4 440 150)"/>
<g fill="#a09578" opacity="0.26">
  <circle cx="470" cy="286" r="2"/><circle cx="140" cy="130" r="1.6"/><circle cx="500" cy="378" r="2.2"/>
</g>
<path d="M98 434 L142 430 L104 400 Z" fill="#cbc4b0"/>
<path d="M104 400 L142 430" stroke="#867f6c" stroke-width="1.6" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev2-debt-vig)"/>
`,
  },

  /* The hotel pad: what the caller wrote is gone, but the pencil found it. */
  c2_phonecall: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-pho-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#221e19"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-pho-pool" cx="0.28" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#e8d09c" stop-opacity="0.26"/><stop offset="1" stop-color="#e8d09c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-pho-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3e2e1f"/><stop offset="0.6" stop-color="#211810"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <linearGradient id="ev2-pho-pad" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f6f0dc"/><stop offset="0.45" stop-color="#e2dabf"/><stop offset="1" stop-color="#a9a288"/>
  </linearGradient>
  <linearGradient id="ev2-pho-graph" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#7e8087"/><stop offset="0.4" stop-color="#54565c"/><stop offset="1" stop-color="#2e3035"/>
  </linearGradient>
  <linearGradient id="ev2-pho-bake" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#3c3a38"/><stop offset="0.35" stop-color="#1e1d1c"/><stop offset="1" stop-color="#090909"/>
  </linearGradient>
  <linearGradient id="ev2-pho-pencil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e2c24c"/><stop offset="0.35" stop-color="#b8901f"/><stop offset="1" stop-color="#5a440e"/>
  </linearGradient>
  <filter id="ev2-pho-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-pho-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-pho-bg)"/>
<path d="M0 92 L640 68 L640 520 L0 520 Z" fill="url(#ev2-pho-desk)"/>
<g stroke="#54402a" stroke-width="1" opacity="0.26" fill="none">
  <path d="M0 158 L640 132"/><path d="M0 236 L640 208"/><path d="M0 316 L640 286"/>
  <path d="M0 398 L640 366"/><path d="M0 478 L640 444"/>
</g>
<rect width="640" height="520" fill="url(#ev2-pho-pool)"/>

<!-- the corner of the telephone, off to the side, its cord slack -->
<path d="M470 90 L640 70 L640 210 L488 232 Z" fill="url(#ev2-pho-bake)"/>
<path d="M470 90 L640 70 L640 92 L472 112 Z" fill="#6e6c68" opacity="0.4"/>
<path d="M488 208 L640 190 L640 210 L488 232 Z" fill="#000" opacity="0.4"/>
<ellipse cx="566" cy="146" rx="52" ry="40" fill="#141312"/>
<ellipse cx="566" cy="146" rx="52" ry="40" fill="none" stroke="#5e5c58" stroke-width="2.4" opacity="0.6"/>
<ellipse cx="566" cy="146" rx="34" ry="26" fill="#0a0a09"/>
<g fill="#2a2926">
  <circle cx="566" cy="118" r="7"/><circle cx="594" cy="132" r="7"/><circle cx="596" cy="162" r="7"/>
  <circle cx="570" cy="176" r="7"/><circle cx="542" cy="168" r="7"/><circle cx="538" cy="136" r="7"/>
</g>
<path d="M524 112 Q 566 100 606 116" fill="none" stroke="#7d7b76" stroke-width="2" opacity="0.4"/>
<path d="M470 232 q -60 26 -102 12 q -46 -16 -84 4" fill="none" stroke="#151413" stroke-width="12" opacity="0.85"/>
<g stroke="#4a4844" stroke-width="1.4" opacity="0.45" fill="none">
  <path d="M452 240 q -2 8 4 12"/><path d="M424 248 q -2 8 4 12"/><path d="M396 250 q -2 8 4 12"/>
  <path d="M368 248 q -2 8 4 12"/><path d="M340 244 q -2 8 4 12"/><path d="M312 246 q -2 8 4 12"/>
</g>

<g filter="url(#ev2-pho-soft)" opacity="0.72">
  <path d="M64 158 L448 128 L470 448 L86 478 Z" fill="#000"/>
</g>

<!-- the pad: cardboard back, wire spiral, one sheet left on top -->
<path d="M52 148 L440 118 L462 438 L74 468 Z" fill="#7d6a4c"/>
<path d="M56 152 L436 122 L456 430 L78 460 Z" fill="url(#ev2-pho-pad)"/>
<path d="M56 152 L436 122 L438 160 L58 190 Z" fill="#fdf9ec" opacity="0.34"/>
<path d="M404 124 L436 122 L456 430 L424 432 Z" fill="#8f8a71" opacity="0.28"/>
<path d="M56 152 L436 122 L456 430 L78 460 Z" fill="none" stroke="#fbf6e6" stroke-width="1.2" opacity="0.4"/>
<!-- the hotel's printed rule and a faint device at the head -->
<path d="M74 178 L420 152" stroke="#8d8161" stroke-width="1.6" opacity="0.5"/>
<g fill="#8d8161" opacity="0.4">
  <rect x="188" y="158" width="40" height="6" rx="1" transform="rotate(-4.4 208 161)"/>
  <rect x="236" y="154" width="24" height="6" rx="1" transform="rotate(-4.4 248 157)"/>
  <rect x="268" y="152" width="52" height="6" rx="1" transform="rotate(-4.4 294 155)"/>
</g>
<!-- ruled lines to write on -->
<g stroke="#8fa0b4" stroke-width="1" opacity="0.4" fill="none">
  <path d="M66 216 L436 188"/><path d="M68 254 L438 226"/><path d="M70 292 L440 264"/>
  <path d="M72 330 L442 302"/><path d="M74 368 L444 340"/><path d="M76 406 L446 378"/>
</g>

<!-- the graphite: the detective's shading, laid across the top half -->
<path d="M62 190 L440 160 L452 366 L74 396 Z" fill="url(#ev2-pho-graph)" opacity="0.68"/>
<g stroke="#3c3e44" stroke-width="2.6" opacity="0.35" fill="none" stroke-linecap="round">
  <path d="M78 196 L64 220"/><path d="M112 194 L98 218"/><path d="M146 191 L132 215"/><path d="M180 188 L166 212"/>
  <path d="M214 186 L200 210"/><path d="M248 183 L234 207"/><path d="M282 180 L268 204"/><path d="M316 178 L302 202"/>
  <path d="M350 175 L336 199"/><path d="M384 172 L370 196"/><path d="M418 170 L404 194"/>
  <path d="M86 300 L72 324"/><path d="M120 297 L106 321"/><path d="M154 295 L140 319"/><path d="M188 292 L174 316"/>
  <path d="M222 289 L208 313"/><path d="M256 287 L242 311"/><path d="M290 284 L276 308"/><path d="M324 281 L310 305"/>
  <path d="M358 279 L344 303"/><path d="M392 276 L378 300"/><path d="M426 273 L412 297"/>
</g>
<g stroke="#a2a7ad" stroke-width="3.6" opacity="0.3" fill="none" stroke-linecap="round">
  <path d="M64 210 L444 180"/><path d="M66 232 L446 202"/><path d="M68 254 L448 224"/>
  <path d="M70 276 L450 246"/><path d="M72 298 L452 268"/><path d="M74 320 L452 290"/><path d="M76 342 L452 312"/>
</g>
<g stroke="#232529" stroke-width="3" opacity="0.45" fill="none" stroke-linecap="round">
  <path d="M64 200 L444 170"/><path d="M68 244 L448 214"/><path d="M72 288 L452 258"/><path d="M76 332 L452 302"/>
</g>
<!-- the pressure of the shading is uneven: darker where the hand bore down -->
<path d="M180 210 Q 300 190 400 200 Q 300 300 180 320 Z" fill="#22242a" opacity="0.28"/>
<path d="M78 340 L444 312 L452 366 L74 396 Z" fill="#3a3c42" opacity="0.35"/>

<!-- and what the shading found: the indented strokes stand out pale -->
<g stroke="#efe8d4" stroke-width="2.6" opacity="0.72" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M92 218 q5 -9 10 -1 q4 8 9 -2 q5 -9 10 1 M132 215 q5 -8 10 0 q4 7 9 -3 M170 212 q5 -9 10 -1 q4 8 9 -2 q5 -9 10 1 q4 7 8 -3 M222 208 q5 -8 10 0"/>
  <path d="M94 256 q-4 -19 5 -18 q6 3 0 16 q3 6 9 -1 q5 -8 10 1 M140 252 q5 -8 10 0 q4 7 9 -3 M178 249 q5 -9 10 -1 q4 8 9 -2 M212 246 q5 -8 10 0 q4 7 9 -3 q5 -8 10 1 M262 242 q5 -9 10 -1"/>
  <path d="M96 294 q5 -9 10 -1 q4 8 9 -2 M130 291 q5 -8 10 0 q4 7 9 -3 q5 -8 10 1 M180 287 q5 -9 10 -1 q4 8 9 -2 q5 -9 10 1 M228 283 q5 -8 10 0"/>
</g>
<!-- the line that broke off mid-word when he was interrupted -->
<g stroke="#f6efdc" stroke-width="3" opacity="0.82" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M98 332 q6 -11 12 -1 q5 10 11 -3 q6 -10 12 1 M154 328 q6 -9 12 1 q5 9 11 -4 M200 324 q6 -11 12 -1 q5 10 11 -3 M246 320 q6 -9 12 1 q5 9 11 -4 M292 316 q6 -11 12 -1 q4 6 6 4"/>
</g>
<path d="M312 314 L336 312" stroke="#f6efdc" stroke-width="3" opacity="0.5" stroke-linecap="round"/>
<!-- one deep score where the nib went through the sheet above -->
<path d="M96 372 L340 352" stroke="#efe8d4" stroke-width="2" opacity="0.4"/>

<!-- the pencil that did the rubbing, laid down on the slant -->
<g filter="url(#ev2-pho-soft)" opacity="0.55">
  <path d="M330 452 L616 424 L620 452 L334 480 Z" fill="#000"/>
</g>
<path d="M336 440 L588 418 L590 442 L338 464 Z" fill="url(#ev2-pho-pencil)"/>
<path d="M336 440 L588 418 L588 426 L336 448 Z" fill="#f8e493" opacity="0.5"/>
<path d="M338 454 L590 432 L590 442 L338 464 Z" fill="#3d2f09" opacity="0.5"/>
<path d="M588 418 L618 426 L620 436 L590 442 Z" fill="#d8c8a8"/>
<path d="M588 418 L618 426 L618 430 L588 426 Z" fill="#f4ecd6" opacity="0.6"/>
<path d="M614 427 L630 431 L614 437 Z" fill="#3a3a3e"/>
<path d="M304 444 L336 440 L338 464 L306 466 Z" fill="#a8a49a"/>
<path d="M304 444 L336 440 L336 450 L304 452 Z" fill="#e0dcd2" opacity="0.5"/>
<path d="M330 442 L334 462" stroke="#8d9298" stroke-width="7" opacity="0.85"/>
<path d="M330 442 L331 450" stroke="#e6ebee" stroke-width="2" opacity="0.5"/>

<!-- graphite dust rubbed off onto the desk -->
<g fill="#5c5e64" opacity="0.3">
  <circle cx="120" cy="480" r="2.4"/><circle cx="180" cy="492" r="1.8"/><circle cx="250" cy="486" r="2"/>
  <circle cx="90" cy="452" r="1.6"/>
</g>
<path d="M100 470 q 90 -14 176 6 q -96 12 -180 -2 Z" fill="#4e5056" opacity="0.16"/>

<rect width="640" height="520" fill="url(#ev2-pho-vig)"/>
`,
  },

  /* Delacroix's opera glasses, still focused on the wings. */
  c2_glasses: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-gls-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#2a1c1c"/><stop offset="1" stop-color="#0a0707"/>
  </linearGradient>
  <radialGradient id="ev2-gls-pool" cx="0.3" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#f0d6a0" stop-opacity="0.26"/><stop offset="1" stop-color="#f0d6a0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-gls-velvet" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#8a2320"/><stop offset="0.4" stop-color="#521312"/><stop offset="1" stop-color="#1e0807"/>
  </linearGradient>
  <linearGradient id="ev2-gls-pearl" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#fdfaf2"/><stop offset="0.22" stop-color="#e4e8ea"/><stop offset="0.42" stop-color="#f2e6ec"/>
    <stop offset="0.62" stop-color="#d8e2d8"/><stop offset="0.82" stop-color="#efe2cc"/><stop offset="1" stop-color="#9a9488"/>
  </linearGradient>
  <linearGradient id="ev2-gls-brass" x1="0" y1="0" x2="0.15" y2="1">
    <stop offset="0" stop-color="#fbeeb8"/><stop offset="0.2" stop-color="#d6ae56"/><stop offset="0.5" stop-color="#8a6a22"/>
    <stop offset="0.72" stop-color="#c49c46"/><stop offset="1" stop-color="#4a3610"/>
  </linearGradient>
  <radialGradient id="ev2-gls-lens" cx="0.34" cy="0.3" r="0.8">
    <stop offset="0" stop-color="#8fb6c8"/><stop offset="0.35" stop-color="#2e4a5a"/><stop offset="0.8" stop-color="#0e1a22"/><stop offset="1" stop-color="#050a0d"/>
  </radialGradient>
  <filter id="ev2-gls-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-gls-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-gls-bg)"/>
<path d="M0 130 L640 104 L640 520 L0 520 Z" fill="url(#ev2-gls-velvet)"/>
<!-- velvet: deep nap with a sheen where the light rakes it -->
<g stroke="#a83a33" stroke-width="14" opacity="0.1" fill="none">
  <path d="M0 190 Q 200 170 420 176 Q 540 180 640 168"/>
  <path d="M0 330 Q 220 306 440 312 Q 560 316 640 304"/>
</g>
<g stroke="#2a0b0a" stroke-width="9" opacity="0.3" fill="none">
  <path d="M0 250 Q 200 230 420 236 Q 540 240 640 228"/>
  <path d="M0 410 Q 220 384 440 392 Q 560 396 640 384"/>
  <path d="M0 486 Q 220 460 440 468 Q 560 472 640 460"/>
</g>
<g stroke="#c04c40" stroke-width="1" opacity="0.1" fill="none">
  <path d="M40 132 Q 60 320 30 520"/><path d="M180 128 Q 200 320 170 520"/><path d="M320 124 Q 340 316 310 520"/>
  <path d="M460 120 Q 480 312 450 520"/><path d="M600 116 Q 620 308 590 520"/>
</g>
<rect width="640" height="520" fill="url(#ev2-gls-pool)"/>
<!-- the box front's brass rail, behind -->
<path d="M0 118 L640 92 L640 116 L0 142 Z" fill="url(#ev2-gls-brass)" opacity="0.7"/>
<path d="M0 118 L640 92 L640 100 L0 126 Z" fill="#fdf0c0" opacity="0.35"/>

<g filter="url(#ev2-gls-soft)" opacity="0.7">
  <ellipse cx="330" cy="382" rx="212" ry="46" fill="#000"/>
</g>

<!-- the two barrels, seen from three-quarters, eyepieces toward us -->
<g transform="translate(0,0)">
  <!-- left barrel -->
  <path d="M156 216 L288 208 L292 322 L160 330 Z" fill="url(#ev2-gls-pearl)"/>
  <path d="M156 216 L288 208 L289 240 L157 248 Z" fill="#ffffff" opacity="0.35"/>
  <path d="M262 210 L288 208 L292 322 L266 324 Z" fill="#6e6a60" opacity="0.35"/>
  <g stroke="#c8ccd0" stroke-width="0.9" opacity="0.5" fill="none">
    <path d="M176 214 Q 186 268 178 328"/><path d="M206 212 Q 216 268 208 326"/><path d="M238 210 Q 248 266 240 324"/>
  </g>
  <g stroke="#f6eef4" stroke-width="2" opacity="0.35" fill="none">
    <path d="M166 216 Q 176 268 168 330"/><path d="M222 211 Q 232 266 224 325"/>
  </g>
  <path d="M168 234 q 44 -8 92 2 q -46 12 -96 2 Z" fill="#ffffff" opacity="0.26"/>
<path d="M156 290 L292 282 L292 322 L160 330 Z" fill="#5e5a52" opacity="0.34"/>
<path d="M156 300 L292 292" stroke="#8d8a80" stroke-width="2" opacity="0.3"/>
<path d="M186 214 Q 196 268 188 328" fill="none" stroke="#f0d8e8" stroke-width="6" opacity="0.22"/>
<path d="M248 210 Q 258 266 250 324" fill="none" stroke="#d2e8dc" stroke-width="5" opacity="0.2"/>
  <!-- right barrel -->
  <path d="M348 202 L480 194 L486 308 L354 316 Z" fill="url(#ev2-gls-pearl)"/>
  <path d="M348 202 L480 194 L481 226 L349 234 Z" fill="#ffffff" opacity="0.32"/>
  <path d="M454 196 L480 194 L486 308 L460 310 Z" fill="#6e6a60" opacity="0.35"/>
  <g stroke="#c8ccd0" stroke-width="0.9" opacity="0.5" fill="none">
    <path d="M368 200 Q 378 254 370 314"/><path d="M398 198 Q 408 252 400 312"/><path d="M430 196 Q 440 250 432 310"/>
  </g>
  <path d="M360 220 q 44 -8 92 2 q -46 12 -96 2 Z" fill="#ffffff" opacity="0.24"/>
<path d="M348 276 L486 268 L486 308 L354 316 Z" fill="#5e5a52" opacity="0.34"/>
<path d="M348 286 L486 278" stroke="#8d8a80" stroke-width="2" opacity="0.3"/>
<path d="M378 200 Q 388 254 380 314" fill="none" stroke="#f0d8e8" stroke-width="6" opacity="0.2"/>
<path d="M440 196 Q 450 250 442 310" fill="none" stroke="#d2e8dc" stroke-width="5" opacity="0.18"/>
</g>

<!-- the brass bridge and the focus screw between them -->
<path d="M288 234 L348 230 L352 296 L292 300 Z" fill="url(#ev2-gls-brass)"/>
<path d="M288 234 L348 230 L349 250 L289 254 Z" fill="#fdf2c4" opacity="0.5"/>
<path d="M291 284 L351 280 L352 296 L292 300 Z" fill="#3a2a0a" opacity="0.5"/>
<path d="M294 236 L296 298" stroke="#fff6d2" stroke-width="2" opacity="0.5"/>
<path d="M344 231 L348 294" stroke="#2c2008" stroke-width="1.6" opacity="0.5"/>
<ellipse cx="318" cy="264" rx="20" ry="17" fill="url(#ev2-gls-brass)"/>
<ellipse cx="318" cy="264" rx="20" ry="17" fill="none" stroke="#fdf2c4" stroke-width="1.4" opacity="0.5"/>
<g stroke="#4a3610" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M300 258 L336 256"/><path d="M300 264 L336 262"/><path d="M301 270 L337 268"/>
</g>
<ellipse cx="311" cy="256" rx="6" ry="4" fill="#fffbe0" opacity="0.5"/>

<!-- brass rings at each end of each barrel -->
<path d="M148 212 L164 210 L168 334 L152 336 Z" fill="url(#ev2-gls-brass)"/>
<path d="M148 212 L164 210 L165 232 L149 234 Z" fill="#fdf2c4" opacity="0.5"/>
<path d="M282 206 L296 204 L300 326 L286 328 Z" fill="url(#ev2-gls-brass)"/>
<path d="M340 200 L356 198 L360 320 L344 322 Z" fill="url(#ev2-gls-brass)"/>
<path d="M340 200 L356 198 L357 220 L341 222 Z" fill="#fdf2c4" opacity="0.5"/>
<path d="M472 192 L490 190 L496 312 L478 314 Z" fill="url(#ev2-gls-brass)"/>
<path d="M472 192 L490 190 L491 212 L473 214 Z" fill="#fdf2c4" opacity="0.5"/>

<!-- the objective lenses, still pointed where he left them -->
<ellipse cx="158" cy="272" rx="17" ry="62" fill="#3a2c0e"/>
<ellipse cx="158" cy="272" rx="13" ry="56" fill="url(#ev2-gls-lens)"/>
<path d="M150 224 Q 142 268 150 316" fill="none" stroke="#bfe0ec" stroke-width="3" opacity="0.5"/>
<ellipse cx="152" cy="244" rx="4" ry="12" fill="#ffffff" opacity="0.5"/>
<ellipse cx="484" cy="252" rx="18" ry="62" fill="#3a2c0e"/>
<ellipse cx="484" cy="252" rx="14" ry="56" fill="url(#ev2-gls-lens)"/>
<path d="M476 204 Q 468 248 476 296" fill="none" stroke="#bfe0ec" stroke-width="3" opacity="0.5"/>
<ellipse cx="478" cy="222" rx="4" ry="12" fill="#ffffff" opacity="0.5"/>
<!-- the eyepiece cups, nearest us, catching the lamp hardest -->
<ellipse cx="292" cy="266" rx="10" ry="62" fill="#4a3610" opacity="0"/>
<path d="M296 206 L318 204 L322 328 L300 330 Z" fill="url(#ev2-gls-brass)" opacity="0"/>

<!-- the neck cord, coiled where it fell -->
<path d="M160 330 Q 120 396 200 412 Q 300 428 372 400 Q 430 378 484 312" fill="none" stroke="#2a1c0c" stroke-width="9" opacity="0.85"/>
<path d="M160 330 Q 122 394 200 410 Q 300 426 372 398 Q 430 376 484 312" fill="none" stroke="#7d6432" stroke-width="3" opacity="0.4"/>
<g stroke="#1c1207" stroke-width="1.2" opacity="0.5" fill="none">
  <path d="M180 404 q 4 8 -2 12"/><path d="M232 416 q 4 8 -2 12"/><path d="M290 418 q 4 8 -2 12"/>
  <path d="M348 408 q 4 8 -2 12"/><path d="M404 386 q 4 8 -2 12"/>
</g>

<!-- his thumbprint on the pearl, and dust in the brass knurling -->
<g opacity="0.2" fill="none" stroke="#6e6a60" stroke-width="1.2">
  <path d="M400 246 q 10 11 -1 21"/><path d="M407 241 q 16 16 -1 31"/><path d="M414 236 q 22 21 -2 41"/>
</g>
<g fill="#8d8674" opacity="0.3">
  <circle cx="300" cy="292" r="1.6"/><circle cx="336" cy="288" r="1.3"/><circle cx="318" cy="282" r="1.1"/>
</g>
<path d="M196 322 q 40 8 78 0" fill="none" stroke="#3e2f16" stroke-width="2" opacity="0.35"/>

<rect width="640" height="520" fill="url(#ev2-gls-vig)"/>
`,
  },

  /* Posted on the company board yesterday: New York, if the run holds. */
  c2_transfer: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-trf-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241f18"/><stop offset="1" stop-color="#0a0806"/>
  </linearGradient>
  <radialGradient id="ev2-trf-pool" cx="0.28" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#e8cf9a" stop-opacity="0.26"/><stop offset="1" stop-color="#e8cf9a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-trf-baize" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#3e5844"/><stop offset="0.4" stop-color="#26392c"/><stop offset="1" stop-color="#0e1a13"/>
  </linearGradient>
  <linearGradient id="ev2-trf-frame" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#9c7a4c"/><stop offset="0.4" stop-color="#5e4527"/><stop offset="1" stop-color="#241a0d"/>
  </linearGradient>
  <linearGradient id="ev2-trf-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#fbf6e6"/><stop offset="0.45" stop-color="#e6ddc4"/><stop offset="1" stop-color="#aca48c"/>
  </linearGradient>
  <linearGradient id="ev2-trf-old" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#ddd2b2"/><stop offset="1" stop-color="#8f8770"/>
  </linearGradient>
  <linearGradient id="ev2-trf-tack" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#ffeeb4"/><stop offset="0.45" stop-color="#c49a3e"/><stop offset="1" stop-color="#4e3a10"/>
  </linearGradient>
  <filter id="ev2-trf-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev2-trf-vig" cx="0.44" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-trf-bg)"/>
<path d="M0 0 L640 0 L640 520 L0 520 Z" fill="#1c150e"/>
<g stroke="#0e0a06" stroke-width="2.4" opacity="0.6" fill="none">
  <path d="M0 96 L640 84"/><path d="M0 262 L640 248"/><path d="M0 430 L640 414"/>
</g>
<rect width="640" height="520" fill="url(#ev2-trf-pool)"/>

<!-- the company board: baize in a wooden frame -->
<path d="M28 26 L610 12 L622 500 L44 512 Z" fill="url(#ev2-trf-frame)"/>
<path d="M28 26 L610 12 L612 46 L30 60 Z" fill="#cfa367" opacity="0.4"/>
<path d="M578 14 L610 12 L622 500 L590 502 Z" fill="#1c1409" opacity="0.45"/>
<path d="M32 476 L616 462 L622 500 L44 512 Z" fill="#170f07" opacity="0.4"/>
<path d="M58 56 L582 42 L594 470 L72 482 Z" fill="url(#ev2-trf-baize)"/>
<path d="M58 56 L582 42 L583 84 L59 98 Z" fill="#4e7259" opacity="0.24"/>
<!-- the baize is pricked all over from years of tacks -->
<g fill="#0d1710" opacity="0.5">
  <circle cx="120" cy="120" r="2"/><circle cx="196" cy="98" r="1.6"/><circle cx="286" cy="130" r="2.2"/>
  <circle cx="392" cy="96" r="1.8"/><circle cx="490" cy="128" r="2"/><circle cx="140" cy="300" r="1.8"/>
  <circle cx="330" cy="360" r="2"/><circle cx="520" cy="290" r="1.6"/><circle cx="230" cy="430" r="2.2"/>
  <circle cx="440" cy="420" r="1.8"/><circle cx="546" cy="380" r="1.6"/><circle cx="90" cy="220" r="1.4"/>
</g>
<g stroke="#4e7259" stroke-width="0.6" opacity="0.14" fill="none">
  <path d="M60 160 L584 146"/><path d="M62 260 L586 246"/><path d="M64 360 L588 346"/>
</g>

<!-- older notices, curling, half under the new one -->
<g filter="url(#ev2-trf-soft)" opacity="0.55">
  <path d="M84 320 L268 306 L280 452 L96 466 Z" fill="#000"/>
  <path d="M382 300 L560 286 L572 424 L394 438 Z" fill="#000"/>
</g>
<path d="M78 312 L260 298 L272 442 L90 456 Z" fill="url(#ev2-trf-old)"/>
<path d="M78 312 L260 298 L261 326 L79 340 Z" fill="#f2ecd6" opacity="0.3"/>
<g stroke="#8d8570" stroke-width="3.4" opacity="0.5">
  <path d="M92 350 L246 338" stroke-dasharray="26 6 40 6 30"/>
  <path d="M93 372 L247 360" stroke-dasharray="36 6 24 6 44"/>
  <path d="M94 394 L248 382" stroke-dasharray="22 6 46 6 28"/>
  <path d="M95 416 L214 407" stroke-dasharray="40 6 26 6 30"/>
</g>
<path d="M260 298 q 20 12 14 26 q -12 -4 -14 -14 Z" fill="#c4bc9e"/>
<path d="M376 292 L552 278 L564 414 L388 428 Z" fill="url(#ev2-trf-old)"/>
<path d="M376 292 L552 278 L553 306 L377 320 Z" fill="#f2ecd6" opacity="0.28"/>
<g stroke="#8d8570" stroke-width="3.4" opacity="0.45">
  <path d="M390 330 L540 318" stroke-dasharray="30 6 38 6 24"/>
  <path d="M391 352 L541 340" stroke-dasharray="42 6 22 6 34"/>
  <path d="M392 374 L500 365" stroke-dasharray="24 6 44 6 20"/>
</g>
<path d="M388 428 L440 424 L392 396 Z" fill="#c4bc9e"/>
<path d="M392 396 L440 424" stroke="#7d7660" stroke-width="1.4" opacity="0.5"/>

<!-- the new one, dead centre, freshly tacked at four corners -->
<g filter="url(#ev2-trf-soft)" opacity="0.7">
  <path d="M158 96 L490 82 L504 328 L172 344 Z" fill="#000"/>
</g>
<path d="M150 84 L482 70 L496 316 L164 332 Z" fill="url(#ev2-trf-paper)"/>
<path d="M150 84 L482 70 L483 114 L151 128 Z" fill="#fefbf0" opacity="0.34"/>
<path d="M452 72 L482 70 L496 316 L466 318 Z" fill="#948d78" opacity="0.26"/>
<path d="M150 84 L482 70 L496 316 L164 332 Z" fill="none" stroke="#fefaee" stroke-width="1.2" opacity="0.42"/>
<!-- the management's heading, a rule, and the notice under it -->
<g fill="#2f2b22" opacity="0.85">
  <rect x="208" y="106" width="58" height="14" rx="1" transform="rotate(-2.4 237 113)"/>
  <rect x="276" y="103" width="34" height="14" rx="1" transform="rotate(-2.4 293 110)"/>
  <rect x="320" y="101" width="76" height="14" rx="1" transform="rotate(-2.4 358 108)"/>
</g>
<path d="M172 138 L466 126" stroke="#6d6650" stroke-width="1.6" opacity="0.55"/>
<g stroke="#423e32" stroke-width="4.6" opacity="0.7">
  <path d="M172 168 L462 156" stroke-dasharray="34 7 50 7 26 7 56"/>
  <path d="M173 194 L463 182" stroke-dasharray="46 7 24 7 54 7 34"/>
  <path d="M174 220 L464 208" stroke-dasharray="26 7 58 7 30 7 46"/>
  <path d="M175 246 L465 234" stroke-dasharray="52 7 28 7 44 7 32"/>
  <path d="M176 272 L400 262" stroke-dasharray="30 7 48 7 26"/>
</g>
<!-- the date it was posted, boxed off at the foot -->
<path d="M180 288 L308 282 L310 308 L182 314 Z" fill="none" stroke="#6d6650" stroke-width="1.2" opacity="0.5"/>
<g fill="#423e32" opacity="0.75">
  <rect x="190" y="294" width="30" height="7"/><rect x="226" y="293" width="18" height="7"/><rect x="250" y="292" width="44" height="7"/>
</g>
<!-- somebody has drawn a hard pencil line beside it -->
<path d="M472 152 Q 486 220 476 296" fill="none" stroke="#4e4e52" stroke-width="4" opacity="0.7" stroke-linecap="round"/>
<path d="M466 178 L488 177" stroke="#4e4e52" stroke-width="3" opacity="0.6"/>
<g stroke="#4e4e52" stroke-width="3" opacity="0.68" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M336 296 q5 -10 10 -1 q4 9 10 -3 q5 -9 10 1 M382 293 q5 -9 10 1 q4 8 10 -4"/>
</g>

<!-- brass thumbtacks, each with its own little shadow -->
<g filter="url(#ev2-trf-soft)" opacity="0.6">
  <circle cx="166" cy="98" r="9"/><circle cx="470" cy="86" r="9"/><circle cx="180" cy="320" r="9"/><circle cx="484" cy="306" r="9"/>
</g>
<circle cx="162" cy="94" r="10" fill="url(#ev2-trf-tack)"/>
<circle cx="159" cy="91" r="4" fill="#fff6cc" opacity="0.7"/>
<circle cx="466" cy="82" r="10" fill="url(#ev2-trf-tack)"/>
<circle cx="463" cy="79" r="4" fill="#fff6cc" opacity="0.65"/>
<circle cx="176" cy="318" r="10" fill="url(#ev2-trf-tack)"/>
<circle cx="173" cy="315" r="4" fill="#fff6cc" opacity="0.6"/>
<circle cx="480" cy="304" r="10" fill="url(#ev2-trf-tack)"/>
<circle cx="477" cy="301" r="4" fill="#fff6cc" opacity="0.6"/>
<!-- one empty tack hole where a notice was pulled down in a hurry -->
<circle cx="300" cy="76" r="3" fill="#0d1710" opacity="0.7"/>
<path d="M292 78 q 14 6 20 -2" fill="none" stroke="#c4bc9e" stroke-width="1.6" opacity="0.3"/>

<rect width="640" height="520" fill="url(#ev2-trf-vig)"/>
`,
  },

  /* The property plot: the prop's measurements, typed in triplicate. */
  c2_plot: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-plot-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#221e18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-plot-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e2cb95" stop-opacity="0.24"/><stop offset="1" stop-color="#e2cb95" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-plot-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3a2b1d"/><stop offset="0.6" stop-color="#1f160e"/><stop offset="1" stop-color="#0c0806"/>
  </linearGradient>
  <linearGradient id="ev2-plot-top" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f8f3e2"/><stop offset="0.45" stop-color="#e4ddc6"/><stop offset="1" stop-color="#aea792"/>
  </linearGradient>
  <linearGradient id="ev2-plot-flimsy" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#e8f0ee"/><stop offset="0.5" stop-color="#cfd8d8"/><stop offset="1" stop-color="#8e9698"/>
  </linearGradient>
  <linearGradient id="ev2-plot-flimsy2" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f2ecd6"/><stop offset="1" stop-color="#9a9382"/>
  </linearGradient>
  <filter id="ev2-plot-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-plot-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-plot-bg)"/>
<path d="M0 86 L640 62 L640 520 L0 520 Z" fill="url(#ev2-plot-desk)"/>
<g stroke="#4e3925" stroke-width="1" opacity="0.24" fill="none">
  <path d="M0 152 L640 126"/><path d="M0 230 L640 202"/><path d="M0 310 L640 280"/>
  <path d="M0 392 L640 360"/><path d="M0 472 L640 438"/>
</g>
<rect width="640" height="520" fill="url(#ev2-plot-pool)"/>

<g filter="url(#ev2-plot-soft)" opacity="0.7">
  <path d="M92 82 L600 56 L620 470 L112 496 Z" fill="#000"/>
</g>

<!-- the third copy: flimsy, and so faint you can see the sheet through it -->
<path d="M242 82 L588 62 L604 452 L258 472 Z" fill="url(#ev2-plot-flimsy2)"/>
<g stroke="#8d8674" stroke-width="3" opacity="0.35">
  <path d="M416 118 L578 108" stroke-dasharray="24 6 38 6 26"/>
  <path d="M418 146 L580 136" stroke-dasharray="34 6 22 6 40"/>
  <path d="M420 174 L582 164" stroke-dasharray="22 6 44 6 24"/>
  <path d="M422 202 L584 192" stroke-dasharray="40 6 20 6 32"/>
  <path d="M424 230 L586 220" stroke-dasharray="26 6 36 6 28"/>
</g>
<!-- the second copy: a carbon, in that dead violet-blue -->
<path d="M166 78 L522 58 L540 462 L184 482 Z" fill="url(#ev2-plot-flimsy)"/>
<path d="M166 78 L522 58 L523 100 L167 120 Z" fill="#f6fbfa" opacity="0.35"/>
<g stroke="#4a4a72" stroke-width="3.4" opacity="0.42">
  <path d="M348 122 L518 112" stroke-dasharray="28 6 42 6 24"/>
  <path d="M350 152 L520 142" stroke-dasharray="38 6 22 6 44"/>
  <path d="M352 182 L522 172" stroke-dasharray="24 6 46 6 26"/>
  <path d="M354 212 L524 202" stroke-dasharray="44 6 24 6 34"/>
  <path d="M356 242 L526 232" stroke-dasharray="26 6 40 6 30"/>
  <path d="M358 272 L528 262" stroke-dasharray="36 6 22 6 42"/>
</g>
<!-- carbon smudge along the edge where a hand dragged it -->
<path d="M172 400 q 60 -18 120 -6 q -56 24 -122 14 Z" fill="#3a3a5c" opacity="0.18"/>

<!-- the top copy, typed black -->
<path d="M84 68 L448 48 L466 470 L102 490 Z" fill="url(#ev2-plot-top)"/>
<path d="M84 68 L448 48 L449 96 L85 116 Z" fill="#fefcf2" opacity="0.34"/>
<path d="M416 50 L448 48 L466 470 L434 472 Z" fill="#948d78" opacity="0.26"/>
<path d="M84 68 L448 48 L466 470 L102 490 Z" fill="none" stroke="#fefaee" stroke-width="1.2" opacity="0.42"/>
<!-- head, and a rule -->
<g fill="#2f2b22" opacity="0.85">
  <rect x="140" y="100" width="52" height="13" rx="1" transform="rotate(-3.1 166 106)"/>
  <rect x="202" y="97" width="30" height="13" rx="1" transform="rotate(-3.1 217 103)"/>
  <rect x="242" y="95" width="68" height="13" rx="1" transform="rotate(-3.1 276 101)"/>
</g>
<path d="M104 130 L436 112" stroke="#6d6650" stroke-width="1.6" opacity="0.55"/>

<!-- the drawing: the prop, in elevation, with dimension lines -->
<path d="M118 200 L182 196 L186 214 L122 218 Z" fill="#3a3a3e" opacity="0.7"/>
<path d="M118 200 L182 196 L183 204 L119 208 Z" fill="#8e9298" opacity="0.5"/>
<path d="M182 190 L196 189 L200 224 L186 225 Z" fill="#3a3a3e" opacity="0.75"/>
<path d="M196 198 L336 192 L360 206 L336 220 L198 224 Z" fill="none" stroke="#2f2b22" stroke-width="2.4" opacity="0.8"/>
<path d="M198 206 L358 206" stroke="#2f2b22" stroke-width="1" opacity="0.5"/>
<path d="M196 198 L336 192 L360 206 L336 220 L198 224 Z" fill="#7d818a" opacity="0.18"/>
<!-- dimension lines with arrowheads and witness ticks, no figures -->
<g stroke="#2f2b22" stroke-width="1.2" opacity="0.7" fill="none">
  <path d="M118 176 L118 246"/><path d="M196 172 L196 246"/><path d="M360 166 L360 246"/>
  <path d="M120 248 L358 240"/>
  <path d="M120 248 l 10 -5 l 0 10 Z" fill="#2f2b22"/>
  <path d="M358 240 l -10 -5 l 0 10 Z" fill="#2f2b22"/>
  <path d="M122 262 L194 258"/>
  <path d="M122 262 l 10 -5 l 0 10 Z" fill="#2f2b22"/>
  <path d="M194 258 l -10 -5 l 0 10 Z" fill="#2f2b22"/>
</g>
<g stroke="#2f2b22" stroke-width="1.2" opacity="0.6" fill="none">
  <path d="M382 194 L420 192"/><path d="M382 220 L420 218"/>
  <path d="M400 194 L400 218"/>
  <path d="M400 194 l -5 10 l 10 0 Z" fill="#2f2b22"/>
  <path d="M400 218 l -5 -10 l 10 0 Z" fill="#2f2b22"/>
</g>
<!-- a hatched section through the blade -->
<g stroke="#2f2b22" stroke-width="0.8" opacity="0.5">
  <path d="M240 198 L232 218"/><path d="M252 197 L244 217"/><path d="M264 197 L256 217"/>
  <path d="M276 196 L268 216"/><path d="M288 196 L280 216"/><path d="M300 195 L292 215"/>
</g>

<!-- the schedule below: ruled rows of typed figures -->
<g fill="none" stroke="#6d6650" stroke-width="1.2" opacity="0.5">
  <path d="M104 296 L440 278 L446 424 L110 442 Z"/>
  <path d="M104 326 L442 308"/><path d="M106 366 L444 348"/><path d="M108 406 L446 388"/>
  <path d="M296 288 L302 434"/>
</g>
<g fill="#3f3b30" opacity="0.75">
  <rect x="118" y="308" width="54" height="6"/><rect x="180" y="307" width="30" height="6"/><rect x="312" y="300" width="20" height="6"/><rect x="338" y="299" width="16" height="6"/>
  <rect x="120" y="348" width="42" height="6"/><rect x="170" y="347" width="46" height="6"/><rect x="314" y="340" width="18" height="6"/><rect x="338" y="339" width="20" height="6"/>
  <rect x="122" y="388" width="60" height="6"/><rect x="190" y="387" width="26" height="6"/><rect x="316" y="380" width="22" height="6"/><rect x="344" y="379" width="16" height="6"/>
  <rect x="124" y="420" width="36" height="6"/><rect x="168" y="419" width="52" height="6"/><rect x="318" y="412" width="18" height="6"/>
</g>

<!-- rusted staple at the corner, and the ghost of a removed one -->
<path d="M100 82 L136 80 L136 86 L100 88 Z" fill="#8d9298"/>
<path d="M100 82 L136 80 L136 83 L100 85 Z" fill="#e2e8ec" opacity="0.6"/>
<path d="M100 88 L104 100" stroke="#8d9298" stroke-width="4"/>
<path d="M132 86 L136 98" stroke="#8d9298" stroke-width="4"/>
<circle cx="118" cy="120" r="8" fill="none" stroke="#8a6b3a" stroke-width="2" opacity="0.3"/>

<!-- thumbing, and a dog-eared corner -->
<g fill="#a09578" opacity="0.26">
  <circle cx="420" cy="160" r="2.2"/><circle cx="140" cy="452" r="1.8"/><circle cx="380" cy="440" r="2"/>
</g>
<path d="M102 490 L146 486 L108 456 Z" fill="#cbc4b0"/>
<path d="M108 456 L146 486" stroke="#867f6c" stroke-width="1.6" opacity="0.5"/>
<path d="M420 424 q 26 -10 46 4 q -24 14 -50 2 Z" fill="#a08c5e" opacity="0.2"/>

<rect width="640" height="520" fill="url(#ev2-plot-vig)"/>
`,
  },

  /* The parcel that came to his box on Tuesday: the wrong weight for books. */
  c2_parcel: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-par-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#2a1c1a"/><stop offset="1" stop-color="#090707"/>
  </linearGradient>
  <radialGradient id="ev2-par-pool" cx="0.28" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#efd6a0" stop-opacity="0.26"/><stop offset="1" stop-color="#efd6a0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-par-plush" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#7d2320"/><stop offset="0.4" stop-color="#4a1312"/><stop offset="1" stop-color="#1a0706"/>
  </linearGradient>
  <linearGradient id="ev2-par-kraft" x1="0.08" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#c39a63"/><stop offset="0.35" stop-color="#9a7442"/><stop offset="0.75" stop-color="#6a4d28"/><stop offset="1" stop-color="#33230f"/>
  </linearGradient>
  <linearGradient id="ev2-par-string" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e8dcb8"/><stop offset="0.5" stop-color="#b2a37a"/><stop offset="1" stop-color="#6e6446"/>
  </linearGradient>
  <linearGradient id="ev2-par-label" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f4eeda"/><stop offset="1" stop-color="#b6ae94"/>
  </linearGradient>
  <filter id="ev2-par-soft" x="-25%" y="-30%" width="150%" height="170%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-par-vig" cx="0.44" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-par-bg)"/>
<path d="M0 122 L640 98 L640 520 L0 520 Z" fill="url(#ev2-par-plush)"/>
<g stroke="#9c2f28" stroke-width="16" opacity="0.1" fill="none">
  <path d="M0 190 Q 220 168 440 176 Q 560 180 640 168"/>
  <path d="M0 350 Q 220 324 440 332 Q 560 336 640 324"/>
</g>
<g stroke="#280a09" stroke-width="10" opacity="0.3" fill="none">
  <path d="M0 262 Q 220 238 440 246 Q 560 250 640 238"/>
  <path d="M0 440 Q 220 412 440 420 Q 560 424 640 412"/>
</g>
<!-- the button-tufting of the box seat -->
<g fill="#2a0c0a" opacity="0.55">
  <circle cx="96" cy="216" r="6"/><circle cx="272" cy="204" r="6"/><circle cx="450" cy="196" r="6"/><circle cx="596" cy="188" r="6"/>
  <circle cx="120" cy="390" r="6"/><circle cx="300" cy="378" r="6"/><circle cx="478" cy="368" r="6"/>
</g>
<g fill="#b8443a" opacity="0.16">
  <circle cx="94" cy="212" r="2.4"/><circle cx="270" cy="200" r="2.4"/><circle cx="448" cy="192" r="2.4"/>
  <circle cx="118" cy="386" r="2.4"/><circle cx="298" cy="374" r="2.4"/>
</g>
<rect width="640" height="520" fill="url(#ev2-par-pool)"/>

<g filter="url(#ev2-par-soft)" opacity="0.75">
  <path d="M74 288 L560 246 L578 372 L92 414 Z" fill="#000"/>
</g>

<!-- the parcel: long, narrow, and wrapped tighter than books need -->
<path d="M72 246 L552 208 L566 336 L86 374 Z" fill="url(#ev2-par-kraft)"/>
<path d="M72 246 L552 208 L554 246 L74 284 Z" fill="#dcb079" opacity="0.4"/>
<path d="M520 210 L552 208 L566 336 L534 338 Z" fill="#26190a" opacity="0.45"/>
<path d="M78 316 L558 278 L566 336 L86 374 Z" fill="#241708" opacity="0.35"/>
<!-- the ends, folded and creased the way a parcels clerk folds them -->
<path d="M72 246 L86 374 L44 366 L36 262 Z" fill="url(#ev2-par-kraft)"/>
<path d="M72 246 L44 262 L36 262 Z" fill="#e0b57e" opacity="0.35"/>
<path d="M44 262 L52 366" stroke="#33230f" stroke-width="1.8" opacity="0.6"/>
<path d="M36 262 L72 246 L86 374 L44 366 Z" fill="none" stroke="#3f2c12" stroke-width="1.4" opacity="0.5"/>
<path d="M552 208 L566 336 L600 328 L590 224 Z" fill="url(#ev2-par-kraft)"/>
<path d="M552 208 L590 224 L600 328" fill="none" stroke="#3f2c12" stroke-width="1.4" opacity="0.5"/>
<path d="M578 226 L588 328" stroke="#33230f" stroke-width="1.8" opacity="0.55"/>
<!-- the long fold down the back, and the creases of the wrapping -->
<path d="M74 282 L556 244" fill="none" stroke="#3f2c12" stroke-width="2" opacity="0.5"/>
<path d="M74 278 L556 240" fill="none" stroke="#e0b57e" stroke-width="1.2" opacity="0.4"/>
<g stroke="#33230f" stroke-width="1.2" opacity="0.4" fill="none">
  <path d="M160 240 Q 168 300 172 366"/><path d="M310 228 Q 318 288 322 354"/><path d="M452 216 Q 460 276 464 342"/>
</g>
<g stroke="#d3a973" stroke-width="0.8" opacity="0.22" fill="none">
  <path d="M156 240 Q 164 300 168 366"/><path d="M306 228 Q 314 288 318 354"/>
</g>
<!-- kraft fibre and one scuff where it was carried under an arm -->
<g fill="#3f2c12" opacity="0.3">
  <circle cx="220" cy="290" r="1.6"/><circle cx="384" cy="264" r="1.4"/><circle cx="140" cy="320" r="1.8"/>
  <circle cx="470" cy="290" r="1.5"/><circle cx="300" cy="330" r="1.3"/>
</g>
<path d="M356 300 q 60 -16 108 -4 q -56 22 -112 8 Z" fill="#c9a26c" opacity="0.16"/>
<path d="M196 340 q 40 -10 74 2 q -40 14 -78 2 Z" fill="#2a1c0a" opacity="0.28"/>

<!-- the string: two turns the long way, three across, and a hard knot -->
<g stroke="url(#ev2-par-string)" stroke-width="7" fill="none">
  <path d="M40 292 Q 300 262 596 250"/><path d="M46 340 Q 306 310 600 298"/>
</g>
<g stroke="#5e5538" stroke-width="1.6" opacity="0.5" fill="none">
  <path d="M40 296 Q 300 266 596 254"/><path d="M46 344 Q 306 314 600 302"/>
</g>
<g stroke="url(#ev2-par-string)" stroke-width="7" fill="none">
  <path d="M148 240 Q 156 306 162 372"/><path d="M330 226 Q 338 292 344 358"/><path d="M486 214 Q 494 280 500 346"/>
</g>
<g stroke="#5e5538" stroke-width="1.6" opacity="0.5" fill="none">
  <path d="M152 240 Q 160 306 166 372"/><path d="M334 226 Q 342 292 348 358"/><path d="M490 214 Q 498 280 504 346"/>
</g>
<!-- the string has bitten into the paper -->
<g stroke="#33230f" stroke-width="3" opacity="0.35" fill="none">
  <path d="M40 300 Q 300 270 596 258"/><path d="M156 240 Q 164 306 170 372"/><path d="M338 226 Q 346 292 352 358"/>
</g>
<!-- the knot -->
<path d="M318 274 q 26 -18 48 -2 q 14 12 -4 22 q -26 12 -46 -2 q -10 -12 2 -18 Z" fill="url(#ev2-par-string)"/>
<path d="M324 274 q 22 -12 38 0" fill="none" stroke="#f2e8c4" stroke-width="2.4" opacity="0.5"/>
<path d="M320 290 q 24 10 44 0" fill="none" stroke="#5e5538" stroke-width="2.4" opacity="0.6"/>
<path d="M362 276 q 34 -14 52 4 q -32 4 -50 4 Z" fill="#b2a37a"/>
<path d="M322 292 q -30 12 -40 30 q 26 -8 44 -22 Z" fill="#a2946e"/>
<g stroke="#8a7f5a" stroke-width="1.2" opacity="0.6" fill="none">
  <path d="M286 320 L278 328"/><path d="M292 316 L284 324"/><path d="M410 280 L420 278"/>
</g>

<!-- the label, gummed on square, and blank of anything a witness could read -->
<path d="M196 258 L306 250 L312 314 L202 322 Z" fill="url(#ev2-par-label)"/>
<path d="M196 258 L306 250 L307 268 L197 276 Z" fill="#fdf8ea" opacity="0.4"/>
<path d="M196 258 L306 250 L312 314 L202 322 Z" fill="none" stroke="#fdf8ea" stroke-width="1" opacity="0.4"/>
<g stroke="#4a4636" stroke-width="4" opacity="0.62">
  <path d="M206 272 L296 266" stroke-dasharray="22 6 34 6 18"/>
  <path d="M207 288 L297 282" stroke-dasharray="30 6 20 6 28"/>
  <path d="M208 304 L272 300" stroke-dasharray="18 6 32"/>
</g>
<path d="M282 296 q 18 -6 26 6 q -18 10 -30 0 Z" fill="#8a2a24" opacity="0.6"/>
<!-- and the gummed edge is lifting on the left -->
<path d="M196 258 q -14 -4 -18 4 q 10 6 18 4 Z" fill="#e2dac0"/>

<rect width="640" height="520" fill="url(#ev2-par-vig)"/>
`,
  },

  /* The switchboard: his whole interval sits on one patched cord. */
  c2_braffcall: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-brf-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241f19"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-brf-pool" cx="0.3" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#e6cd96" stop-opacity="0.24"/><stop offset="1" stop-color="#e6cd96" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-brf-panel" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#3e3830"/><stop offset="0.4" stop-color="#252118"/><stop offset="1" stop-color="#100e0a"/>
  </linearGradient>
  <linearGradient id="ev2-brf-wood" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#8a6335"/><stop offset="0.4" stop-color="#563d1f"/><stop offset="1" stop-color="#21170b"/>
  </linearGradient>
  <linearGradient id="ev2-brf-brass" x1="0.2" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#ffeeb4"/><stop offset="0.4" stop-color="#c49a3e"/><stop offset="1" stop-color="#42310c"/>
  </linearGradient>
  <radialGradient id="ev2-brf-lamp" cx="0.36" cy="0.32" r="0.72">
    <stop offset="0" stop-color="#fff6d0"/><stop offset="0.4" stop-color="#f0b840"/><stop offset="1" stop-color="#7a4a08"/>
  </radialGradient>
  <linearGradient id="ev2-brf-cord" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4038"/><stop offset="0.35" stop-color="#40211c"/><stop offset="1" stop-color="#180b09"/>
  </linearGradient>
  <filter id="ev2-brf-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-brf-vig" cx="0.44" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-brf-bg)"/>
<path d="M0 0 L640 0 L640 520 L0 520 Z" fill="#161210"/>
<rect width="640" height="520" fill="url(#ev2-brf-pool)"/>

<!-- the board's oak surround -->
<path d="M28 18 L612 6 L620 448 L38 462 Z" fill="url(#ev2-brf-wood)"/>
<path d="M28 18 L612 6 L613 42 L29 54 Z" fill="#c19353" opacity="0.4"/>
<path d="M582 8 L612 6 L620 448 L590 450 Z" fill="#1a1207" opacity="0.5"/>
<path d="M32 420 L616 408 L620 448 L38 462 Z" fill="#160f07" opacity="0.45"/>
<g stroke="#2e2010" stroke-width="1.2" opacity="0.5" fill="none">
  <path d="M36 30 Q 320 20 610 12"/><path d="M42 436 Q 320 424 618 416"/>
</g>
<!-- the face of the board -->
<path d="M58 46 L584 34 L592 418 L70 430 Z" fill="url(#ev2-brf-panel)"/>
<path d="M58 46 L584 34 L585 82 L59 94 Z" fill="#5c554a" opacity="0.3"/>
<path d="M552 36 L584 34 L592 418 L560 420 Z" fill="#080705" opacity="0.5"/>
<path d="M58 46 L584 34 L592 418 L70 430 Z" fill="none" stroke="#6a6155" stroke-width="1.4" opacity="0.45"/>
<g stroke="#0c0b08" stroke-width="1.4" opacity="0.55" fill="none">
  <path d="M64 168 L588 156"/><path d="M68 300 L590 288"/>
</g>

<!-- three rows of jacks, brass ringed, most of them empty -->
<g>
  <g fill="#0a0908">
    <circle cx="104" cy="112" r="16"/><circle cx="164" cy="110" r="16"/><circle cx="224" cy="109" r="16"/>
    <circle cx="284" cy="107" r="16"/><circle cx="344" cy="106" r="16"/><circle cx="404" cy="104" r="16"/>
    <circle cx="464" cy="103" r="16"/><circle cx="524" cy="101" r="16"/>
    <circle cx="110" cy="244" r="16"/><circle cx="170" cy="242" r="16"/><circle cx="230" cy="241" r="16"/>
    <circle cx="290" cy="239" r="16"/><circle cx="350" cy="238" r="16"/><circle cx="410" cy="236" r="16"/>
    <circle cx="470" cy="235" r="16"/><circle cx="530" cy="233" r="16"/>
    <circle cx="116" cy="376" r="16"/><circle cx="176" cy="374" r="16"/><circle cx="236" cy="373" r="16"/>
    <circle cx="296" cy="371" r="16"/><circle cx="356" cy="370" r="16"/><circle cx="416" cy="368" r="16"/>
    <circle cx="476" cy="367" r="16"/><circle cx="536" cy="365" r="16"/>
  </g>
  <g fill="none" stroke="url(#ev2-brf-brass)" stroke-width="4">
    <circle cx="104" cy="112" r="16"/><circle cx="164" cy="110" r="16"/><circle cx="224" cy="109" r="16"/>
    <circle cx="284" cy="107" r="16"/><circle cx="344" cy="106" r="16"/><circle cx="404" cy="104" r="16"/>
    <circle cx="464" cy="103" r="16"/><circle cx="524" cy="101" r="16"/>
    <circle cx="110" cy="244" r="16"/><circle cx="170" cy="242" r="16"/><circle cx="230" cy="241" r="16"/>
    <circle cx="290" cy="239" r="16"/><circle cx="350" cy="238" r="16"/><circle cx="410" cy="236" r="16"/>
    <circle cx="470" cy="235" r="16"/><circle cx="530" cy="233" r="16"/>
    <circle cx="116" cy="376" r="16"/><circle cx="176" cy="374" r="16"/><circle cx="236" cy="373" r="16"/>
    <circle cx="296" cy="371" r="16"/><circle cx="356" cy="370" r="16"/><circle cx="416" cy="368" r="16"/>
    <circle cx="476" cy="367" r="16"/><circle cx="536" cy="365" r="16"/>
  </g>
  <g fill="#fff0be" opacity="0.4">
    <circle cx="97" cy="105" r="3"/><circle cx="157" cy="103" r="3"/><circle cx="217" cy="102" r="3"/>
    <circle cx="277" cy="100" r="3"/><circle cx="337" cy="99" r="3"/><circle cx="397" cy="97" r="3"/>
    <circle cx="103" cy="237" r="3"/><circle cx="163" cy="235" r="3"/><circle cx="223" cy="234" r="3"/>
    <circle cx="283" cy="232" r="3"/>
    <circle cx="109" cy="369" r="3"/>
  </g>
</g>
<!-- the annunciator lamps above each row, one of them burning -->
<g fill="#161512">
  <circle cx="104" cy="70" r="9"/><circle cx="164" cy="68" r="9"/><circle cx="284" cy="65" r="9"/>
  <circle cx="344" cy="64" r="9"/><circle cx="464" cy="61" r="9"/>
</g>
<circle cx="224" cy="67" r="20" fill="#f0b840" opacity="0.18"/>
<circle cx="224" cy="67" r="11" fill="url(#ev2-brf-lamp)"/>
<circle cx="220" cy="63" r="4" fill="#fffdf0" opacity="0.8"/>

<!-- two cords patched across: the call that was still up at 9:32 -->
<path d="M232 118 Q 240 240 268 300 Q 300 372 420 348 Q 500 330 512 244" fill="none" stroke="url(#ev2-brf-cord)" stroke-width="11"/>
<path d="M234 120 Q 242 240 270 300 Q 302 370 420 346 Q 498 328 510 244" fill="none" stroke="#8a5c4e" stroke-width="2.6" opacity="0.35"/>
<g stroke="#150a08" stroke-width="1.4" opacity="0.55" fill="none">
  <path d="M244 190 q 8 3 10 -3"/><path d="M258 258 q 8 4 11 -2"/><path d="M320 336 q 6 7 12 4"/>
  <path d="M392 356 q 4 8 11 6"/><path d="M470 330 q 8 4 11 -2"/><path d="M508 280 q 8 2 10 -4"/>
</g>
<path d="M112 254 Q 120 340 168 384 Q 220 424 300 400" fill="none" stroke="url(#ev2-brf-cord)" stroke-width="10" opacity="0.7"/>
<path d="M114 256 Q 122 340 170 384" fill="none" stroke="#8a5c4e" stroke-width="2.2" opacity="0.25"/>
<!-- the plugs, seated in their jacks -->
<path d="M216 96 L240 95 L242 128 L218 129 Z" fill="url(#ev2-brf-brass)"/>
<path d="M216 96 L240 95 L241 106 L217 107 Z" fill="#fff6cc" opacity="0.55"/>
<path d="M220 84 L236 83 L237 97 L221 98 Z" fill="#2a2620"/>
<path d="M218 122 L242 121 L242 128 L218 129 Z" fill="#3a2b0c" opacity="0.6"/>
<path d="M500 224 L524 223 L526 256 L502 257 Z" fill="url(#ev2-brf-brass)"/>
<path d="M500 224 L524 223 L525 234 L501 235 Z" fill="#fff6cc" opacity="0.5"/>
<path d="M504 212 L520 211 L521 225 L505 226 Z" fill="#2a2620"/>
<path d="M104 232 L126 231 L128 262 L106 263 Z" fill="url(#ev2-brf-brass)" opacity="0.85"/>
<path d="M104 232 L126 231 L127 242 L105 243 Z" fill="#fff6cc" opacity="0.45"/>

<!-- the operator's toll ticket, spiked on a nail at the side -->
<g filter="url(#ev2-brf-soft)" opacity="0.6">
  <path d="M420 396 L568 386 L574 470 L426 480 Z" fill="#000"/>
</g>
<path d="M416 388 L560 378 L566 458 L422 468 Z" fill="#e8dfc4"/>
<path d="M416 388 L560 378 L561 400 L417 410 Z" fill="#faf5e6" opacity="0.4"/>
<g stroke="#5a5442" stroke-width="3.4" opacity="0.6">
  <path d="M428 414 L550 406" stroke-dasharray="20 6 30 6 24"/>
  <path d="M429 430 L551 422" stroke-dasharray="28 6 18 6 32"/>
  <path d="M430 446 L512 440" stroke-dasharray="16 6 28"/>
</g>
<circle cx="490" cy="392" r="4" fill="#2a2620"/>
<path d="M486 386 L494 386 L494 392 L486 392 Z" fill="#8d9298"/>
<path d="M486 386 L490 386 L490 392 L486 392 Z" fill="#dfe4e8" opacity="0.6"/>

<!-- dust in the jack rings, and a scratch across the panel -->
<g fill="#8d8674" opacity="0.22">
  <circle cx="196" cy="180" r="1.8"/><circle cx="380" cy="176" r="1.4"/><circle cx="300" cy="312" r="1.6"/>
  <circle cx="480" cy="304" r="1.3"/>
</g>
<path d="M80 200 Q 300 186 570 172" fill="none" stroke="#6d6558" stroke-width="1" opacity="0.2"/>

<rect width="640" height="520" fill="url(#ev2-brf-vig)"/>
`,
  },

  /* 'A glass of water at the wings' — and the ring it left where he set it down. */
  c2_victorback: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <radialGradient id="ev2-vic-bg" cx="0.3" cy="0.14" r="0.82">
    <stop offset="0" stop-color="#332a1e"/><stop offset="0.55" stop-color="#151109"/><stop offset="1" stop-color="#050403"/>
  </radialGradient>
  <radialGradient id="ev2-vic-pool" cx="0.28" cy="0.12" r="0.72">
    <stop offset="0" stop-color="#f0d49a" stop-opacity="0.3"/><stop offset="1" stop-color="#f0d49a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-vic-stool" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7d5c34"/><stop offset="0.45" stop-color="#4a351d"/><stop offset="1" stop-color="#1c1409"/>
  </linearGradient>
  <linearGradient id="ev2-vic-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#eef4f2" stop-opacity="0.34"/><stop offset="0.16" stop-color="#ffffff" stop-opacity="0.2"/>
    <stop offset="0.44" stop-color="#c8d4d0" stop-opacity="0.1"/><stop offset="0.7" stop-color="#ffffff" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#e2eae6" stop-opacity="0.38"/>
  </linearGradient>
  <linearGradient id="ev2-vic-water" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#cfe2e0" stop-opacity="0.5"/><stop offset="0.5" stop-color="#8ea8a8" stop-opacity="0.45"/>
    <stop offset="1" stop-color="#4a5c5e" stop-opacity="0.5"/>
  </linearGradient>
  <linearGradient id="ev2-vic-door" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#f0d49a" stop-opacity="0.22"/><stop offset="1" stop-color="#f0d49a" stop-opacity="0"/>
  </linearGradient>
  <filter id="ev2-vic-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-vic-vig" cx="0.42" cy="0.4" r="0.78">
    <stop offset="0.38" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-vic-bg)"/>
<!-- the pass door standing ajar behind, and the light off the house side of it -->
<path d="M470 20 L560 12 L566 300 L474 308 Z" fill="#0d0a07"/>
<path d="M560 12 L586 34 L592 290 L566 300 Z" fill="url(#ev2-vic-door)"/>
<path d="M560 12 L586 34 L592 290 L566 300 Z" fill="#f0d49a" opacity="0.1"/>
<path d="M560 12 L566 300" stroke="#f6e2b4" stroke-width="2.4" opacity="0.35"/>
<path d="M470 20 L474 308" stroke="#2e2620" stroke-width="2" opacity="0.6"/>
<g stroke="#241d15" stroke-width="1.6" opacity="0.6" fill="none">
  <path d="M478 90 L558 84"/><path d="M480 200 L560 194"/>
</g>
<circle cx="492" cy="164" r="7" fill="#8a6b30"/>
<circle cx="490" cy="162" r="2.6" fill="#f2dca8" opacity="0.6"/>
<rect width="640" height="520" fill="url(#ev2-vic-pool)"/>

<!-- the stool in the wings it was set down on -->
<path d="M0 306 L430 282 L440 520 L0 520 Z" fill="url(#ev2-vic-stool)"/>
<path d="M0 306 L430 282 L432 320 L0 344 Z" fill="#c39a5e" opacity="0.35"/>
<g stroke="#2a1c0d" stroke-width="1.8" opacity="0.55" fill="none">
  <path d="M0 372 L436 348"/><path d="M0 444 L440 418"/>
</g>
<g stroke="#a67d46" stroke-width="0.8" opacity="0.2" fill="none">
  <path d="M0 386 L436 362"/><path d="M0 458 L440 432"/>
</g>
<path d="M120 286 Q 138 400 130 520 L172 520 Q 178 396 160 284 Z" fill="#2a1c0d" opacity="0.2"/>
<!-- scars: this is where the company sets things down -->
<path d="M250 400 q 60 -16 110 -2 q -56 22 -114 8 Z" fill="#241708" opacity="0.32"/>
<path d="M60 460 q 50 -12 92 0" fill="none" stroke="#c39a5e" stroke-width="3" opacity="0.14"/>

<!-- the ring the glass left the first time he set it down -->
<ellipse cx="196" cy="404" rx="70" ry="20" fill="none" stroke="#2a1c0d" stroke-width="4" opacity="0.4"/>
<ellipse cx="196" cy="404" rx="70" ry="20" fill="#8ea8a8" opacity="0.06"/>
<ellipse cx="196" cy="404" rx="70" ry="20" fill="none" stroke="#c8d8d4" stroke-width="1.4" opacity="0.22"/>
<!-- and a second, half-overlapping it: he set it down twice -->
<ellipse cx="244" cy="428" rx="62" ry="18" fill="none" stroke="#2a1c0d" stroke-width="3.4" opacity="0.3"/>
<ellipse cx="244" cy="428" rx="62" ry="18" fill="none" stroke="#c8d8d4" stroke-width="1.2" opacity="0.16"/>
<!-- a run of spilled water still standing on the wood -->
<path d="M300 434 q 40 -12 76 4 q -26 22 -62 12 q -24 -8 -14 -16 Z" fill="#8ea8a8" opacity="0.14"/>
<path d="M306 432 q 36 -10 66 4" fill="none" stroke="#dcecea" stroke-width="1.6" opacity="0.3"/>

<!-- the tumbler: plain, thick-bottomed, half drunk -->
<g filter="url(#ev2-vic-soft)" opacity="0.7">
  <ellipse cx="330" cy="356" rx="76" ry="20" fill="#000"/>
</g>
<ellipse cx="316" cy="350" rx="56" ry="15" fill="#1e1509" opacity="0.6"/>
<path d="M266 158 L366 156 L360 340 Q 316 356 272 340 Z" fill="url(#ev2-vic-glass)"/>
<!-- the water in it -->
<path d="M276 240 L356 238 L353 336 Q 316 350 279 336 Z" fill="url(#ev2-vic-water)"/>
<ellipse cx="316" cy="240" rx="40" ry="9" fill="#b6cccc" opacity="0.42"/>
<ellipse cx="316" cy="240" rx="40" ry="9" fill="none" stroke="#e4f2f0" stroke-width="1.6" opacity="0.6"/>
<ellipse cx="302" cy="239" rx="12" ry="3" fill="#f6fcfa" opacity="0.4"/>
<!-- the meniscus climbing the wall, and a bead run down the outside -->
<path d="M278 238 Q 316 248 354 238" fill="none" stroke="#dcecea" stroke-width="1.4" opacity="0.4"/>
<path d="M288 244 Q 284 290 290 330" fill="none" stroke="#cfe2e0" stroke-width="2.4" opacity="0.3"/>
<path d="M352 186 q 4 26 -2 48 q -4 -24 2 -48 Z" fill="#eaf4f2" opacity="0.28"/>
<!-- the heavy base, and the light bending through it -->
<path d="M272 314 L360 312 L360 340 Q 316 356 272 340 Z" fill="#c2d4d2" opacity="0.2"/>
<ellipse cx="316" cy="340" rx="44" ry="12" fill="#dfeceb" opacity="0.22"/>
<ellipse cx="316" cy="340" rx="44" ry="12" fill="none" stroke="#f2fbf9" stroke-width="2" opacity="0.5"/>
<ellipse cx="316" cy="336" rx="30" ry="8" fill="#8ea8a8" opacity="0.2"/>
<!-- rim, and the two speculars the work light puts on the glass -->
<ellipse cx="316" cy="158" rx="50" ry="12" fill="none" stroke="#f4fbf9" stroke-width="2.6" opacity="0.62"/>
<ellipse cx="316" cy="158" rx="50" ry="12" fill="#e4eeec" opacity="0.07"/>
<path d="M282 170 Q 274 250 284 328" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.28" stroke-linecap="round"/>
<path d="M350 176 Q 358 244 348 320" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.18" stroke-linecap="round"/>
<ellipse cx="290" cy="182" rx="7" ry="14" fill="#ffffff" opacity="0.3"/>
<!-- greasepaint off a made-up face, and a print where he gripped it -->
<path d="M330 168 q 22 -4 30 6 q -22 8 -32 -2 Z" fill="#c98f7a" opacity="0.3"/>
<g opacity="0.18" fill="none" stroke="#eef6f4" stroke-width="1.1">
  <path d="M338 216 q 10 9 0 18"/><path d="M344 212 q 15 13 0 26"/><path d="M350 208 q 20 17 -1 34"/>
</g>
<!-- dust on the stool, disturbed where the glass went down -->
<g fill="#cdc0a0" opacity="0.14">
  <circle cx="120" cy="376" r="1.6"/><circle cx="410" cy="366" r="1.4"/><circle cx="70" cy="420" r="1.8"/>
  <circle cx="396" cy="452" r="1.5"/>
</g>

<rect width="640" height="520" fill="url(#ev2-vic-vig)"/>
`,
  },

  /* Her mourning locket: a lock of hair and a pressed flower, worn to the silver. */
  c2_spoken: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-spk-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#241d1c"/><stop offset="1" stop-color="#080606"/>
  </linearGradient>
  <radialGradient id="ev2-spk-pool" cx="0.3" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#f0d9a8" stop-opacity="0.28"/><stop offset="1" stop-color="#f0d9a8" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-spk-silk" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#4a4256"/><stop offset="0.4" stop-color="#2c2736"/><stop offset="1" stop-color="#12101a"/>
  </linearGradient>
  <linearGradient id="ev2-spk-silver" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#fbfcfd"/><stop offset="0.22" stop-color="#c8ced4"/><stop offset="0.5" stop-color="#7d848c"/>
    <stop offset="0.74" stop-color="#b6bcc2"/><stop offset="1" stop-color="#3e434a"/>
  </linearGradient>
  <linearGradient id="ev2-spk-tarnish" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#6a6558" stop-opacity="0.6"/><stop offset="1" stop-color="#2e2b26" stop-opacity="0.8"/>
  </linearGradient>
  <linearGradient id="ev2-spk-hair" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#c69a5e"/><stop offset="0.4" stop-color="#8a6234"/><stop offset="1" stop-color="#3e2a14"/>
  </linearGradient>
  <linearGradient id="ev2-spk-petal" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#9a86ac"/><stop offset="0.5" stop-color="#6e5a82"/><stop offset="1" stop-color="#3e3050"/>
  </linearGradient>
  <filter id="ev2-spk-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="9"/>
  </filter>
  <radialGradient id="ev2-spk-vig" cx="0.44" cy="0.4" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-spk-bg)"/>
<path d="M0 96 L640 72 L640 520 L0 520 Z" fill="url(#ev2-spk-silk)"/>
<!-- crumpled silk lining: creases that catch the lamp -->
<g stroke="#6e6482" stroke-width="6" opacity="0.14" fill="none">
  <path d="M0 170 Q 160 140 320 176 Q 480 210 640 168"/>
  <path d="M0 300 Q 170 268 340 304 Q 500 336 640 296"/>
  <path d="M0 430 Q 160 400 330 434 Q 490 464 640 424"/>
</g>
<g stroke="#100e18" stroke-width="5" opacity="0.4" fill="none">
  <path d="M0 210 Q 160 180 320 216 Q 480 250 640 208"/>
  <path d="M0 348 Q 170 316 340 352 Q 500 384 640 344"/>
</g>
<rect width="640" height="520" fill="url(#ev2-spk-pool)"/>

<!-- the chain, fallen in a loose figure -->
<g stroke="#7d848c" stroke-width="5" fill="none" opacity="0.85" stroke-linecap="round">
  <path d="M96 156 Q 40 300 132 396 Q 240 490 396 452 Q 540 418 578 300"/>
</g>
<g stroke="#e8eef2" stroke-width="4" fill="none" opacity="0.5" stroke-dasharray="5 4">
  <path d="M96 155 Q 40 299 132 395 Q 240 489 396 451 Q 540 417 578 299"/>
</g>
<g stroke="#20242a" stroke-width="1.6" fill="none" opacity="0.5" stroke-dasharray="2 7">
  <path d="M96 158 Q 40 302 132 398 Q 240 492 396 454 Q 540 420 578 302"/>
</g>
<g stroke="#2c3036" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M60 244 q 8 4 10 -3"/><path d="M84 330 q 9 4 11 -3"/><path d="M164 414 q 6 8 13 6"/>
  <path d="M266 462 q 3 9 10 9"/><path d="M370 462 q 2 9 9 8"/><path d="M472 434 q 7 6 13 1"/>
  <path d="M548 372 q 9 3 11 -4"/>
</g>

<g filter="url(#ev2-spk-soft)" opacity="0.72">
  <ellipse cx="330" cy="326" rx="176" ry="46" fill="#000"/>
</g>

<!-- the locket, open: two halves hinged at the centre -->
<!-- left half: the glazed compartment with a lock of hair -->
<path d="M132 148 Q 200 108 264 148 L272 268 Q 202 314 130 268 Z" fill="url(#ev2-spk-silver)"/>
<path d="M132 148 Q 200 108 264 148 L266 178 Q 200 142 133 178 Z" fill="#ffffff" opacity="0.35"/>
<path d="M240 132 L264 148 L272 268 Q 248 284 232 288 Z" fill="#2a2e34" opacity="0.4"/>
<path d="M132 148 Q 200 108 264 148 L272 268 Q 202 314 130 268 Z" fill="none" stroke="#f2f6f8" stroke-width="1.6" opacity="0.55"/>
<path d="M148 160 Q 200 130 250 160 L256 258 Q 202 292 146 258 Z" fill="#1e1c18"/>
<path d="M148 160 Q 200 130 250 160 L256 258 Q 202 292 146 258 Z" fill="none" stroke="#5e646a" stroke-width="2" opacity="0.6"/>
<!-- the hair, coiled and tied -->
<path d="M164 208 q 30 -34 62 -8 q 26 22 -2 44 q -32 22 -58 0 q -18 -18 -2 -36 Z" fill="url(#ev2-spk-hair)"/>
<g stroke="#e0b478" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M170 208 q 28 -28 54 -6"/><path d="M166 220 q 30 -26 58 -4"/><path d="M170 234 q 30 -22 54 -2"/>
  <path d="M176 246 q 26 -16 46 -2"/>
</g>
<g stroke="#2e1c0c" stroke-width="1.2" opacity="0.5" fill="none">
  <path d="M168 214 q 28 -26 56 -4"/><path d="M172 240 q 28 -20 50 -2"/>
</g>
<path d="M188 200 q 22 -8 32 6 q -20 8 -34 0 Z" fill="#8a2a3c" opacity="0.8"/>
<path d="M190 200 q 18 -6 28 6" fill="none" stroke="#c85a6c" stroke-width="1.4" opacity="0.4"/>
<!-- the glass over it -->
<path d="M148 160 Q 200 130 250 160 L256 258 Q 202 292 146 258 Z" fill="#dfe8ec" opacity="0.1"/>
<path d="M158 172 Q 186 154 206 160 Q 176 190 162 250" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.16"/>
<path d="M232 178 Q 244 216 238 254" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.12"/>

<!-- right half: the pressed flower under glass -->
<path d="M300 142 Q 368 102 432 142 L440 262 Q 370 308 298 262 Z" fill="url(#ev2-spk-silver)"/>
<path d="M300 142 Q 368 102 432 142 L434 172 Q 368 136 301 172 Z" fill="#ffffff" opacity="0.32"/>
<path d="M408 126 L432 142 L440 262 Q 416 278 400 282 Z" fill="#2a2e34" opacity="0.4"/>
<path d="M300 142 Q 368 102 432 142 L440 262 Q 370 308 298 262 Z" fill="none" stroke="#f2f6f8" stroke-width="1.6" opacity="0.55"/>
<path d="M316 154 Q 368 124 418 154 L424 252 Q 370 286 314 252 Z" fill="#e8e0cc"/>
<path d="M316 154 Q 368 124 418 154 L424 252 Q 370 286 314 252 Z" fill="none" stroke="#5e646a" stroke-width="2" opacity="0.6"/>
<!-- the flower: flattened, and the colour half gone out of it -->
<g fill="url(#ev2-spk-petal)">
  <path d="M368 176 q 22 -12 26 8 q -12 16 -28 6 Z"/>
  <path d="M398 200 q 18 16 -2 26 q -18 2 -18 -14 Z"/>
  <path d="M368 236 q -22 12 -28 -8 q 12 -16 28 -6 Z"/>
  <path d="M338 204 q -18 -16 2 -26 q 18 -2 18 14 Z"/>
</g>
<g fill="#b6a2c6" opacity="0.4">
  <path d="M370 178 q 18 -8 22 6"/><path d="M340 206 q -14 -12 2 -20"/>
</g>
<circle cx="368" cy="206" r="7" fill="#b08a2e"/>
<circle cx="366" cy="204" r="2.6" fill="#f0d68a" opacity="0.7"/>
<path d="M368 240 q 6 26 -6 40" fill="none" stroke="#6a6a44" stroke-width="2.4" opacity="0.7"/>
<path d="M362 258 q -18 -8 -22 -20 q 18 2 24 14 Z" fill="#6a6a44" opacity="0.7"/>
<!-- the flower has stained the paper it lay against -->
<path d="M336 190 q 46 -20 74 8 q -44 26 -80 6 Z" fill="#8a7a5c" opacity="0.18"/>
<path d="M316 154 Q 368 124 418 154 L424 252 Q 370 286 314 252 Z" fill="#dfe8ec" opacity="0.09"/>
<path d="M326 166 Q 354 148 374 154 Q 344 184 330 244" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.14"/>

<!-- the hinge, worn bright, and the catch -->
<path d="M266 178 L302 176 L306 236 L270 238 Z" fill="url(#ev2-spk-silver)"/>
<path d="M266 178 L302 176 L303 194 L267 196 Z" fill="#ffffff" opacity="0.45"/>
<path d="M270 224 L306 222 L306 236 L270 238 Z" fill="#333940" opacity="0.5"/>
<g stroke="#3a4046" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M268 194 L304 192"/><path d="M269 208 L305 206"/>
</g>
<circle cx="286" cy="200" r="5" fill="#9aa2a8"/>
<circle cx="284" cy="198" r="2" fill="#f2f6f8" opacity="0.8"/>
<!-- tarnish in the chasing round the rims, and one deep scratch -->
<path d="M132 250 Q 200 300 272 250 L272 268 Q 202 314 130 268 Z" fill="url(#ev2-spk-tarnish)"/>
<path d="M300 244 Q 368 294 440 244 L440 262 Q 370 308 298 262 Z" fill="url(#ev2-spk-tarnish)"/>
<path d="M318 122 L410 132" stroke="#ffffff" stroke-width="1.4" opacity="0.4"/>
<path d="M150 138 L246 128" stroke="#ffffff" stroke-width="1.2" opacity="0.35"/>
<g fill="#4a5056" opacity="0.4">
  <circle cx="180" cy="286" r="1.8"/><circle cx="240" cy="292" r="1.4"/><circle cx="352" cy="284" r="1.6"/>
</g>

<rect width="640" height="520" fill="url(#ev2-spk-vig)"/>
`,
  },

  /* From September she drilled the understudy: the sides, blocked in her own hand. */
  c2_foreknew: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-fkn-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#231e18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-fkn-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e4cd97" stop-opacity="0.24"/><stop offset="1" stop-color="#e4cd97" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-fkn-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3c2c1e"/><stop offset="0.6" stop-color="#20170f"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <linearGradient id="ev2-fkn-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f6f1de"/><stop offset="0.45" stop-color="#e2dabe"/><stop offset="1" stop-color="#a9a288"/>
  </linearGradient>
  <linearGradient id="ev2-fkn-cover" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#8a5a3a"/><stop offset="0.45" stop-color="#5a3722"/><stop offset="1" stop-color="#241409"/>
  </linearGradient>
  <linearGradient id="ev2-fkn-blue" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#4d76bd"/><stop offset="0.5" stop-color="#2f4f8c"/><stop offset="1" stop-color="#1e3661"/>
  </linearGradient>
  <filter id="ev2-fkn-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-fkn-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-fkn-bg)"/>
<path d="M0 84 L640 60 L640 520 L0 520 Z" fill="url(#ev2-fkn-desk)"/>
<g stroke="#4e3925" stroke-width="1" opacity="0.24" fill="none">
  <path d="M0 148 L640 122"/><path d="M0 226 L640 198"/><path d="M0 306 L640 276"/>
  <path d="M0 388 L640 356"/><path d="M0 468 L640 434"/>
</g>
<rect width="640" height="520" fill="url(#ev2-fkn-pool)"/>

<g filter="url(#ev2-fkn-soft)" opacity="0.74">
  <path d="M62 74 L580 48 L602 482 L84 508 Z" fill="#000"/>
</g>

<!-- the sides: a limp card cover folded back, sewn at the spine -->
<path d="M54 64 L300 52 L310 470 L64 486 Z" fill="url(#ev2-fkn-cover)"/>
<path d="M54 64 L300 52 L301 92 L55 104 Z" fill="#c2865a" opacity="0.35"/>
<path d="M274 54 L300 52 L310 470 L284 472 Z" fill="#1c1008" opacity="0.45"/>
<g stroke="#2e1a0c" stroke-width="1" opacity="0.45" fill="none">
  <path d="M62 140 L306 128"/><path d="M66 280 L310 268"/><path d="M70 420 L312 408"/>
</g>
<!-- the page, open -->
<path d="M296 56 L572 44 L588 460 L312 476 Z" fill="url(#ev2-fkn-paper)"/>
<path d="M296 56 L572 44 L573 96 L297 108 Z" fill="#fdf9ec" opacity="0.32"/>
<path d="M540 46 L572 44 L588 460 L556 462 Z" fill="#8f8a71" opacity="0.28"/>
<path d="M296 56 L572 44 L588 460 L312 476 Z" fill="none" stroke="#fbf6e6" stroke-width="1.2" opacity="0.4"/>
<path d="M296 56 Q 306 260 312 476" fill="none" stroke="#8f8a71" stroke-width="4" opacity="0.4"/>
<g fill="#6a6250" opacity="0.6">
  <circle cx="302" cy="120" r="2.6"/><circle cx="304" cy="200" r="2.6"/><circle cx="306" cy="280" r="2.6"/>
  <circle cx="308" cy="360" r="2.6"/><circle cx="310" cy="440" r="2.6"/>
</g>
<g stroke="#c8bc9c" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M302 122 L304 198"/><path d="M306 282 L308 358"/>
</g>

<!-- the cue lines: typed, with the cue words struck heavier at the left -->
<g fill="#3f3a2d" opacity="0.78">
  <rect x="330" y="112" width="40" height="6"/><rect x="378" y="111" width="24" height="6"/>
  <rect x="330" y="132" width="30" height="5"/><rect x="368" y="131" width="52" height="5"/><rect x="428" y="130" width="26" height="5"/><rect x="462" y="129" width="44" height="5"/>
  <rect x="332" y="180" width="46" height="6"/><rect x="386" y="179" width="20" height="6"/>
  <rect x="332" y="200" width="52" height="5"/><rect x="392" y="199" width="26" height="5"/><rect x="426" y="198" width="48" height="5"/>
  <rect x="333" y="216" width="30" height="5"/><rect x="371" y="215" width="54" height="5"/><rect x="433" y="214" width="28" height="5"/>
  <rect x="334" y="264" width="36" height="6"/><rect x="378" y="263" width="28" height="6"/>
  <rect x="334" y="284" width="48" height="5"/><rect x="390" y="283" width="24" height="5"/><rect x="422" y="282" width="52" height="5"/>
  <rect x="336" y="348" width="42" height="6"/><rect x="386" y="347" width="22" height="6"/>
  <rect x="336" y="368" width="28" height="5"/><rect x="372" y="367" width="50" height="5"/><rect x="430" y="366" width="30" height="5"/>
  <rect x="337" y="384" width="46" height="5"/><rect x="391" y="383" width="26" height="5"/>
</g>

<!-- her blocking, written in pencil over the type -->
<g stroke="#4e4e52" stroke-width="2.6" opacity="0.82" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path d="M470 176 q5 -10 10 -1 q4 9 10 -3 q5 -9 10 1 M512 173 q5 -9 10 1 q4 8 10 -4"/>
  <path d="M472 258 q-4 -20 5 -19 q6 4 0 17 q3 7 9 -1 q5 -9 10 1 M518 254 q5 -9 10 1"/>
  <path d="M476 342 q5 -10 10 -1 q4 9 10 -3 M508 339 q5 -9 10 1 q4 8 10 -4 q5 -8 10 2"/>
</g>
<!-- and the moves, drawn as a stage plan: a line, marks, arrows -->
<path d="M330 404 L560 392" stroke="#4e4e52" stroke-width="2.4" opacity="0.75"/>
<path d="M340 440 Q 444 458 552 428" fill="none" stroke="#4e4e52" stroke-width="2.4" opacity="0.7"/>
<g stroke="#4e4e52" stroke-width="2.2" opacity="0.75" fill="none">
  <path d="M366 428 L366 410"/><path d="M366 410 l -5 8 l 10 0 Z" fill="#4e4e52"/>
  <path d="M448 432 L448 410"/><path d="M448 410 l -5 8 l 10 0 Z" fill="#4e4e52"/>
  <path d="M366 428 Q 406 448 448 432"/>
</g>
<circle cx="366" cy="432" r="9" fill="none" stroke="#4e4e52" stroke-width="2.4" opacity="0.8"/>
<circle cx="448" cy="436" r="9" fill="none" stroke="#4e4e52" stroke-width="2.4" opacity="0.8"/>
<path d="M444 432 l 8 8 M452 432 l -8 8" stroke="#4e4e52" stroke-width="2.2" opacity="0.8"/>
<path d="M508 424 L536 420" stroke="#4e4e52" stroke-width="2.2" opacity="0.7"/>
<path d="M536 420 l -8 -5 l 0 10 Z" fill="#4e4e52" opacity="0.7"/>

<!-- the blue pencil she used to mark where the new run of it starts -->
<path d="M318 240 Q 306 268 320 296" fill="none" stroke="url(#ev2-fkn-blue)" stroke-width="4.4" stroke-linecap="round"/>
<path d="M322 322 Q 310 356 324 392" fill="none" stroke="url(#ev2-fkn-blue)" stroke-width="4.4" stroke-linecap="round"/>
<path d="M330 156 L560 144" stroke="url(#ev2-fkn-blue)" stroke-width="3" opacity="0.7"/>
<path d="M562 142 q 18 -2 12 -14" fill="none" stroke="url(#ev2-fkn-blue)" stroke-width="3" stroke-linecap="round"/>

<!-- the pages are thumbed black at the outer edge, and one corner is gone -->
<path d="M566 46 Q 578 254 586 458" fill="none" stroke="#7d7660" stroke-width="7" opacity="0.35"/>
<path d="M568 46 Q 580 254 588 458" fill="none" stroke="#4e4a3c" stroke-width="2.4" opacity="0.4"/>
<path d="M312 476 L358 472 L318 442 Z" fill="#c4b795"/>
<path d="M318 442 L358 472" stroke="#7e7355" stroke-width="1.6" opacity="0.5"/>
<g fill="#a09578" opacity="0.28">
  <circle cx="530" cy="200" r="2.2"/><circle cx="400" cy="320" r="1.8"/><circle cx="560" cy="380" r="2"/>
  <circle cx="350" cy="90" r="1.4"/>
</g>
<path d="M496 300 q 26 -10 46 4 q -24 14 -50 2 Z" fill="#a08c5e" opacity="0.2"/>

<!-- an elastic band, perished, still round the cover -->
<path d="M132 50 Q 122 268 144 496" fill="none" stroke="#7d6a52" stroke-width="7" opacity="0.85"/>
<path d="M132 50 Q 122 268 144 496" fill="none" stroke="#c2a888" stroke-width="2" opacity="0.35"/>

<rect width="640" height="520" fill="url(#ev2-fkn-vig)"/>
`,
  },

  /* The wings, and the wicker skip somebody was standing behind. */
  c2_gossip: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <radialGradient id="ev2-gos-bg" cx="0.7" cy="0.2" r="0.9">
    <stop offset="0" stop-color="#3a3024"/><stop offset="0.45" stop-color="#16120c"/><stop offset="1" stop-color="#040403"/>
  </radialGradient>
  <linearGradient id="ev2-gos-shaft" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#ffedbe" stop-opacity="0.3"/><stop offset="1" stop-color="#ffedbe" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="ev2-gos-wick" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#c69a5c"/><stop offset="0.32" stop-color="#8a6534"/><stop offset="0.7" stop-color="#4e381c"/><stop offset="1" stop-color="#20160a"/>
  </linearGradient>
  <linearGradient id="ev2-gos-lid" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#dcb073"/><stop offset="0.4" stop-color="#9a7340"/><stop offset="1" stop-color="#3a2914"/>
  </linearGradient>
  <linearGradient id="ev2-gos-satin" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f0e2c0"/><stop offset="0.4" stop-color="#c8ac7c"/><stop offset="1" stop-color="#6a563a"/>
  </linearGradient>
  <linearGradient id="ev2-gos-velvet" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#6a2438"/><stop offset="0.45" stop-color="#3e1220"/><stop offset="1" stop-color="#170610"/>
  </linearGradient>
  <filter id="ev2-gos-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="10"/>
  </filter>
  <radialGradient id="ev2-gos-vig" cx="0.5" cy="0.42" r="0.78">
    <stop offset="0.36" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.88"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-gos-bg)"/>
<!-- the black of the wings, a masking flat, and one crack of stage light -->
<path d="M0 0 L200 0 L188 520 L0 520 Z" fill="#080706"/>
<path d="M200 0 L214 0 L202 520 L188 520 Z" fill="#2e281f" opacity="0.7"/>
<path d="M200 0 L206 0 L194 520 L188 520 Z" fill="#7d7156" opacity="0.3"/>
<path d="M214 0 L282 0 L360 520 L202 520 Z" fill="url(#ev2-gos-shaft)"/>
<path d="M214 0 L236 0 L268 520 L202 520 Z" fill="#ffedbe" opacity="0.05"/>
<g stroke="#1a150e" stroke-width="2.4" opacity="0.6" fill="none">
  <path d="M214 130 L640 112"/><path d="M220 290 L640 268"/><path d="M226 452 L640 428"/>
</g>
<!-- a rope on a cleat, off in the dark -->
<path d="M562 0 Q 568 120 552 214 Q 540 286 556 340" fill="none" stroke="#5a4a30" stroke-width="6" opacity="0.5"/>
<path d="M560 0 Q 566 120 550 214" fill="none" stroke="#9a8258" stroke-width="1.8" opacity="0.25"/>

<g filter="url(#ev2-gos-soft)" opacity="0.8">
  <ellipse cx="382" cy="452" rx="222" ry="42" fill="#000"/>
</g>

<!-- the wicker skip -->
<path d="M182 246 L578 216 L558 456 L206 480 Z" fill="url(#ev2-gos-wick)"/>
<!-- the weave: horizontal withies over vertical stakes -->
<g stroke="#2e2010" stroke-width="2" opacity="0.55" fill="none">
  <path d="M184 276 L576 246"/><path d="M186 306 L574 276"/><path d="M188 336 L572 306"/>
  <path d="M190 366 L570 336"/><path d="M193 396 L568 366"/><path d="M196 426 L565 396"/><path d="M200 456 L562 426"/>
</g>
<g stroke="#c9a068" stroke-width="1.2" opacity="0.28" fill="none">
  <path d="M184 270 L576 240"/><path d="M188 330 L572 300"/><path d="M193 390 L568 360"/><path d="M200 450 L562 420"/>
</g>
<g stroke="#241809" stroke-width="1.4" opacity="0.45" fill="none">
  <path d="M240 242 L258 476"/><path d="M310 236 L324 470"/><path d="M380 230 L390 464"/>
  <path d="M450 224 L456 458"/><path d="M520 219 L520 452"/>
</g>
<!-- the light rakes the near ribs -->
<path d="M244 242 L262 476" stroke="#e0b478" stroke-width="2.4" opacity="0.18"/>
<path d="M314 236 L328 470" stroke="#e0b478" stroke-width="2" opacity="0.14"/>
<!-- leather straps and a hasp -->
<path d="M270 236 L296 234 L308 474 L282 476 Z" fill="#3a2412"/>
<path d="M270 236 L280 235 L292 475 L282 476 Z" fill="#7d5230" opacity="0.4"/>
<path d="M414 228 L440 226 L446 466 L420 468 Z" fill="#3a2412"/>
<path d="M414 228 L424 227 L430 467 L420 468 Z" fill="#7d5230" opacity="0.35"/>
<g fill="#8d9298">
  <rect x="276" y="300" width="24" height="10" rx="2"/><rect x="420" y="292" width="24" height="10" rx="2"/>
</g>
<g fill="#dfe4e8" opacity="0.55">
  <rect x="276" y="300" width="24" height="4" rx="2"/><rect x="420" y="292" width="24" height="4" rx="2"/>
</g>
<!-- rope handles at the ends -->
<path d="M186 300 q -34 26 -4 54" fill="none" stroke="#7d6440" stroke-width="8" opacity="0.9"/>
<path d="M186 300 q -34 26 -4 54" fill="none" stroke="#c2a06a" stroke-width="2.4" opacity="0.3"/>
<path d="M572 274 q 32 24 4 52" fill="none" stroke="#7d6440" stroke-width="8" opacity="0.85"/>

<!-- the lid, tipped back and standing open -->
<path d="M170 246 L570 216 L596 156 L200 186 Z" fill="url(#ev2-gos-lid)"/>
<path d="M170 246 L570 216 L572 202 L172 232 Z" fill="#f0c084" opacity="0.32"/>
<g stroke="#3a2914" stroke-width="1.8" opacity="0.5" fill="none">
  <path d="M180 232 L578 202"/><path d="M190 214 L586 184"/>
</g>
<g stroke="#2a1c0c" stroke-width="1.2" opacity="0.4" fill="none">
  <path d="M262 240 L288 180"/><path d="M356 233 L378 173"/><path d="M450 226 L468 166"/><path d="M544 219 L558 159"/>
</g>
<path d="M170 246 L200 186 L212 188 L182 248 Z" fill="#2a1c0c" opacity="0.4"/>

<!-- costumes spilling over the front lip: satin, and a velvet sleeve -->
<path d="M236 232 q 56 -30 116 -12 q 26 8 14 30 q -6 44 -20 92 q -18 22 -30 -6 q -14 30 -30 4 q -16 26 -28 -4 q -14 -46 -26 -76 q -10 -24 4 -28 Z" fill="url(#ev2-gos-satin)"/>
<path d="M248 236 q 50 -24 100 -8" fill="none" stroke="#fdf2d8" stroke-width="5" opacity="0.5" stroke-linecap="round"/>
<path d="M262 264 q 52 20 100 -6 q -8 46 -18 82 q -18 22 -30 -6 q -14 30 -30 4 q -16 26 -28 -4 Z" fill="#7d6440" opacity="0.35"/>
<g stroke="#8a6e46" stroke-width="2" opacity="0.5" fill="none">
  <path d="M272 246 q 12 52 6 100"/><path d="M304 240 q 10 56 4 106"/><path d="M336 244 q 6 50 2 96"/>
</g>
<g stroke="#fbeed2" stroke-width="1.8" opacity="0.35" fill="none">
  <path d="M286 242 q 12 52 6 100"/><path d="M320 240 q 8 54 2 102"/>
</g>
<path d="M414 226 q 62 -26 116 -4 q 24 10 12 32 q -8 40 -22 84 q -18 20 -30 -6 q -16 28 -30 2 q -14 -48 -30 -78 q -12 -22 -16 -30 Z" fill="url(#ev2-gos-velvet)"/>
<path d="M426 230 q 54 -20 102 -2" fill="none" stroke="#b0546c" stroke-width="5" opacity="0.24" stroke-linecap="round"/>
<path d="M436 258 q 50 20 96 -6 q -6 42 -18 78 q -18 20 -30 -6 q -16 28 -30 2 Z" fill="#180610" opacity="0.5"/>
<g stroke="#8a3450" stroke-width="2.4" opacity="0.22" fill="none">
  <path d="M450 240 q 12 50 6 98"/><path d="M484 234 q 10 52 4 100"/><path d="M516 238 q 6 46 2 90"/>
</g>
<!-- a hanger hook and a bead of paste jewellery catching the crack of light -->
<path d="M382 246 q 10 -22 24 -12 q 8 8 -2 14" fill="none" stroke="#9aa2a8" stroke-width="3" stroke-linecap="round"/>
<circle cx="404" cy="290" r="5" fill="#e8e2c4" opacity="0.65"/>
<circle cx="402" cy="288" r="2" fill="#ffffff" opacity="0.85"/>
<circle cx="368" cy="308" r="3.4" fill="#d8cfa8" opacity="0.5"/>

<!-- dust hanging in the crack of light -->
<g fill="#f2e0b4" opacity="0.18">
  <circle cx="248" cy="120" r="1.6"/><circle cx="286" cy="200" r="1.3"/><circle cx="230" cy="60" r="1.4"/>
  <circle cx="308" cy="300" r="1.2"/><circle cx="266" cy="380" r="1.5"/><circle cx="332" cy="430" r="1.1"/>
</g>

<rect width="640" height="520" fill="url(#ev2-gos-vig)"/>
`,
  },

  /* The transfer contract, and the pen she did not pick up. */
  c2_stalling: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-stl-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#231e18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-stl-pool" cx="0.3" cy="0.16" r="0.76">
    <stop offset="0" stop-color="#e5cd98" stop-opacity="0.24"/><stop offset="1" stop-color="#e5cd98" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-stl-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3c2c1e"/><stop offset="0.6" stop-color="#20170f"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <linearGradient id="ev2-stl-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#fbf7ea"/><stop offset="0.45" stop-color="#e8e0c8"/><stop offset="1" stop-color="#aca48c"/>
  </linearGradient>
  <linearGradient id="ev2-stl-ebonite" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#4e463c"/><stop offset="0.3" stop-color="#221e19"/><stop offset="1" stop-color="#0a0908"/>
  </linearGradient>
  <linearGradient id="ev2-stl-nib" x1="0.1" y1="0" x2="0.7" y2="1">
    <stop offset="0" stop-color="#ffeeb4"/><stop offset="0.4" stop-color="#c49a3e"/><stop offset="1" stop-color="#4a3610"/>
  </linearGradient>
  <filter id="ev2-stl-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-stl-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-stl-bg)"/>
<path d="M0 82 L640 58 L640 520 L0 520 Z" fill="url(#ev2-stl-desk)"/>
<g stroke="#4e3925" stroke-width="1" opacity="0.24" fill="none">
  <path d="M0 146 L640 120"/><path d="M0 224 L640 196"/><path d="M0 304 L640 274"/>
  <path d="M0 386 L640 354"/><path d="M0 466 L640 432"/>
</g>
<rect width="640" height="520" fill="url(#ev2-stl-pool)"/>

<g filter="url(#ev2-stl-soft)" opacity="0.74">
  <path d="M76 76 L548 52 L570 476 L98 500 Z" fill="#000"/>
</g>
<path d="M84 96 L544 72 L562 460 L102 484 Z" fill="#cfc8b2"/>
<path d="M68 68 L536 44 L556 452 L88 476 Z" fill="url(#ev2-stl-paper)"/>
<path d="M68 68 L536 44 L538 112 L70 136 Z" fill="#fefcf4" opacity="0.34"/>
<path d="M502 46 L536 44 L556 452 L522 454 Z" fill="#948e7b" opacity="0.26"/>
<path d="M68 68 L536 44 L556 452 L88 476 Z" fill="none" stroke="#fefaee" stroke-width="1.3" opacity="0.42"/>

<!-- head, rule, and the body of the agreement -->
<g fill="#2f2b22" opacity="0.85">
  <rect x="180" y="98" width="60" height="14" rx="1" transform="rotate(-2.9 210 105)"/>
  <rect x="250" y="94" width="34" height="14" rx="1" transform="rotate(-2.9 267 101)"/>
  <rect x="294" y="92" width="84" height="14" rx="1" transform="rotate(-2.9 336 99)"/>
</g>
<path d="M96 132 L520 110" stroke="#6d6650" stroke-width="1.6" opacity="0.55"/>
<g stroke="#423e32" stroke-width="4.4" opacity="0.68">
  <path d="M96 166 L516 144" stroke-dasharray="32 7 48 7 26 7 56 7 40"/>
  <path d="M97 190 L517 168" stroke-dasharray="46 7 24 7 54 7 32 7 48"/>
  <path d="M98 214 L518 192" stroke-dasharray="26 7 56 7 30 7 44 7 52"/>
  <path d="M99 238 L519 216" stroke-dasharray="50 7 28 7 42 7 34 7 44"/>
  <path d="M100 262 L520 240" stroke-dasharray="30 7 52 7 26 7 58 7 30"/>
  <path d="M101 286 L521 264" stroke-dasharray="44 7 26 7 50 7 36 7 40"/>
  <path d="M102 310 L440 292" stroke-dasharray="28 7 46 7 32 7 54"/>
</g>
<!-- the schedule of terms, boxed -->
<g fill="none" stroke="#6d6650" stroke-width="1.2" opacity="0.5">
  <path d="M104 334 L522 312 L526 384 L108 406 Z"/><path d="M104 360 L524 338"/><path d="M330 322 L334 394"/>
</g>
<g fill="#4a4636" opacity="0.7">
  <rect x="118" y="342" width="52" height="6"/><rect x="178" y="341" width="28" height="6"/>
  <rect x="348" y="331" width="20" height="6"/><rect x="374" y="330" width="16" height="6"/><rect x="396" y="329" width="20" height="6"/>
  <rect x="120" y="370" width="40" height="6"/><rect x="168" y="369" width="48" height="6"/>
  <rect x="350" y="359" width="18" height="6"/><rect x="374" y="358" width="22" height="6"/>
</g>

<!-- the signature block: the theatre's side signed, hers empty -->
<path d="M112 426 L292 416" stroke="#4a4636" stroke-width="1.4" opacity="0.6"/>
<g stroke="#1f2740" stroke-width="2.8" opacity="0.85" fill="none" stroke-linecap="round">
  <path d="M128 414 q-6 -26 8 -26 q10 2 2 22 q-2 11 6 11 q8 0 10 -11 q3 -12 10 -4 q4 6 10 -2"/>
  <path d="M176 410 q-4 -22 8 -21 q9 2 1 18 q-1 10 7 9 q7 -1 9 -10 q3 -9 9 -2 q4 6 10 -3"/>
  <path d="M126 418 q56 12 104 -10"/>
</g>
<g fill="#4a4636" opacity="0.6">
  <rect x="118" y="440" width="42" height="5"/><rect x="168" y="439" width="26" height="5"/><rect x="202" y="438" width="48" height="5"/>
</g>
<!-- and this one, blank: the whole exhibit -->
<path d="M320 414 L508 404" stroke="#4a4636" stroke-width="1.4" opacity="0.6"/>
<g fill="#4a4636" opacity="0.6">
  <rect x="326" y="428" width="38" height="5"/><rect x="372" y="427" width="24" height="5"/><rect x="404" y="426" width="44" height="5"/>
</g>
<!-- a pencilled cross where she was meant to sign, and nothing on the rule -->
<path d="M300 402 l 12 14 M312 402 l -12 14" stroke="#8e2622" stroke-width="3" opacity="0.7" stroke-linecap="round"/>
<path d="M330 390 q 40 -10 66 2" fill="none" stroke="#8e2622" stroke-width="2.4" opacity="0.4"/>

<!-- the pen, uncapped and laid across the page: it has not been used -->
<g filter="url(#ev2-stl-soft)" opacity="0.6">
  <path d="M356 232 L580 194 L588 236 L364 274 Z" fill="#000"/>
</g>
<path d="M368 216 L544 186 L548 212 L372 242 Z" fill="url(#ev2-stl-ebonite)"/>
<path d="M368 216 L544 186 L545 196 L369 226 Z" fill="#6e675c" opacity="0.5"/>
<path d="M370 232 L546 202 L548 212 L372 242 Z" fill="#000" opacity="0.5"/>
<path d="M396 211 L520 190" stroke="#8d8478" stroke-width="2.4" opacity="0.28"/>
<path d="M462 200 L474 198 L478 224 L466 226 Z" fill="#c49a3e"/>
<path d="M462 200 L470 199 L474 225 L466 226 Z" fill="#ffeeb4" opacity="0.5"/>
<path d="M544 186 L586 178 L590 202 L548 212 Z" fill="url(#ev2-stl-ebonite)"/>
<path d="M544 186 L586 178 L587 186 L545 194 Z" fill="#6e675c" opacity="0.45"/>
<!-- the section and the nib, dry -->
<path d="M340 224 L368 216 L372 242 L344 250 Z" fill="url(#ev2-stl-ebonite)"/>
<path d="M340 224 L368 216 L368 224 L340 232 Z" fill="#6e675c" opacity="0.4"/>
<path d="M310 232 L342 224 L346 248 L314 256 Z" fill="url(#ev2-stl-nib)"/>
<path d="M310 232 L342 224 L342 232 L310 240 Z" fill="#fff6cc" opacity="0.55"/>
<path d="M310 232 L296 238 L298 250 L314 256 Z" fill="url(#ev2-stl-nib)"/>
<path d="M296 240 L326 232" stroke="#4a3610" stroke-width="1.6" opacity="0.7"/>
<circle cx="322" cy="240" r="4" fill="#2a2008" opacity="0.7"/>
<path d="M300 240 L310 238" stroke="#fff6cc" stroke-width="1.4" opacity="0.6"/>
<!-- the cap, laid separately, which is how you know it was offered -->
<path d="M416 288 L520 270 L524 300 L420 318 Z" fill="url(#ev2-stl-ebonite)"/>
<path d="M416 288 L520 270 L521 280 L417 298 Z" fill="#6e675c" opacity="0.45"/>
<path d="M418 306 L522 288 L524 300 L420 318 Z" fill="#000" opacity="0.5"/>
<path d="M498 273 L512 271 L516 297 L502 299 Z" fill="#c49a3e"/>
<path d="M498 273 L506 272 L510 298 L502 299 Z" fill="#ffeeb4" opacity="0.5"/>
<path d="M480 276 q 6 20 2 30 q 8 -14 4 -32 Z" fill="#c49a3e"/>

<!-- a coffee ring, and a corner already turned back to read the last page -->
<ellipse cx="470" cy="356" rx="46" ry="28" fill="none" stroke="#9d7c46" stroke-width="3.2" opacity="0.26" transform="rotate(-3 470 356)"/>
<ellipse cx="470" cy="356" rx="40" ry="23" fill="#9d7c46" opacity="0.06" transform="rotate(-3 470 356)"/>
<path d="M88 476 L136 472 L96 442 Z" fill="#cbc4b0"/>
<path d="M96 442 L136 472" stroke="#867f6c" stroke-width="1.6" opacity="0.5"/>
<g fill="#a09578" opacity="0.24">
  <circle cx="140" cy="120" r="1.8"/><circle cx="480" cy="128" r="2"/><circle cx="120" cy="452" r="1.6"/>
</g>

<rect width="640" height="520" fill="url(#ev2-stl-vig)"/>
`,
  },

  /* The boy's account, taken down at the stage door in shorthand. */
  c2_pip: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-pip-bg" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#221d18"/><stop offset="1" stop-color="#080706"/>
  </linearGradient>
  <radialGradient id="ev2-pip-pool" cx="0.3" cy="0.14" r="0.78">
    <stop offset="0" stop-color="#e8cf9c" stop-opacity="0.26"/><stop offset="1" stop-color="#e8cf9c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-pip-desk" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#3a2b1d"/><stop offset="0.6" stop-color="#1f160e"/><stop offset="1" stop-color="#0c0806"/>
  </linearGradient>
  <linearGradient id="ev2-pip-cover" x1="0.1" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#4a4038"/><stop offset="0.4" stop-color="#26201b"/><stop offset="1" stop-color="#0d0b09"/>
  </linearGradient>
  <linearGradient id="ev2-pip-paper" x1="0.05" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#f8f4e6"/><stop offset="0.45" stop-color="#e4dcc6"/><stop offset="1" stop-color="#aaa390"/>
  </linearGradient>
  <linearGradient id="ev2-pip-wire" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#eef3f6"/><stop offset="0.4" stop-color="#98a0a7"/><stop offset="1" stop-color="#3c4046"/>
  </linearGradient>
  <linearGradient id="ev2-pip-pencil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#5e6a56"/><stop offset="0.35" stop-color="#3a4434"/><stop offset="1" stop-color="#1a2016"/>
  </linearGradient>
  <filter id="ev2-pip-soft" x="-25%" y="-25%" width="150%" height="150%">
    <feGaussianBlur stdDeviation="8"/>
  </filter>
  <radialGradient id="ev2-pip-vig" cx="0.46" cy="0.42" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-pip-bg)"/>
<path d="M0 88 L640 64 L640 520 L0 520 Z" fill="url(#ev2-pip-desk)"/>
<g stroke="#4e3925" stroke-width="1" opacity="0.24" fill="none">
  <path d="M0 152 L640 126"/><path d="M0 232 L640 204"/><path d="M0 314 L640 284"/>
  <path d="M0 396 L640 364"/><path d="M0 478 L640 444"/>
</g>
<rect width="640" height="520" fill="url(#ev2-pip-pool)"/>

<g filter="url(#ev2-pip-soft)" opacity="0.74">
  <path d="M96 74 L470 46 L500 480 L126 508 Z" fill="#000"/>
</g>

<!-- the notebook, cover folded right back under the pages -->
<path d="M86 62 L456 34 L484 470 L114 498 Z" fill="url(#ev2-pip-cover)"/>
<path d="M86 62 L456 34 L457 62 L87 90 Z" fill="#6e6459" opacity="0.4"/>
<path d="M426 36 L456 34 L484 470 L454 472 Z" fill="#070606" opacity="0.5"/>
<g stroke="#6e6459" stroke-width="0.7" opacity="0.2" fill="none">
  <path d="M92 140 L462 112"/><path d="M98 260 L468 232"/><path d="M104 380 L474 352"/>
</g>
<!-- the leaves under the top one -->
<path d="M96 74 L452 48 L478 458 L122 484 Z" fill="#b8b09a"/>
<path d="M92 68 L448 42 L474 452 L118 478 Z" fill="#cdc5ae"/>
<!-- the page being read -->
<path d="M88 60 L444 34 L470 446 L114 472 Z" fill="url(#ev2-pip-paper)"/>
<path d="M88 60 L444 34 L446 96 L90 122 Z" fill="#fefbf2" opacity="0.32"/>
<path d="M412 36 L444 34 L470 446 L438 448 Z" fill="#948e7b" opacity="0.26"/>
<path d="M88 60 L444 34 L470 446 L114 472 Z" fill="none" stroke="#fefaee" stroke-width="1.2" opacity="0.4"/>
<!-- ruled lines and the margin rule -->
<g stroke="#8fa0b4" stroke-width="1" opacity="0.42" fill="none">
  <path d="M94 140 L448 114"/><path d="M97 178 L451 152"/><path d="M100 216 L454 190"/>
  <path d="M103 254 L457 228"/><path d="M106 292 L460 266"/><path d="M109 330 L463 304"/>
  <path d="M112 368 L466 342"/><path d="M115 406 L469 380"/>
</g>
<path d="M134 44 Q 148 250 158 460" fill="none" stroke="#b06a70" stroke-width="1.2" opacity="0.4"/>

<!-- the time, at the head of the entry, in figures underscored twice -->
<g stroke="#1f2740" stroke-width="3.6" opacity="0.88" fill="none" stroke-linecap="round">
  <path d="M166 112 l 22 -16"/><path d="M200 106 q16 14 -2 20"/><path d="M236 100 l 10 22"/>
  <path d="M262 96 q-14 12 4 18"/>
</g>
<path d="M164 124 L262 118" stroke="#1f2740" stroke-width="2.2" opacity="0.7"/>
<path d="M166 130 L260 124" stroke="#1f2740" stroke-width="1.4" opacity="0.55"/>

<!-- and the account itself, taken down in shorthand: hooks, strokes, dots -->
<g stroke="#1f2740" stroke-width="3" opacity="0.82" fill="none" stroke-linecap="round">
  <path d="M164 172 q14 -16 22 2"/><path d="M198 170 l 20 -12"/><path d="M228 166 q-12 12 4 16"/>
  <path d="M258 160 l 6 18"/><path d="M282 158 q16 -6 14 10"/><path d="M312 154 l -14 12"/>
  <path d="M364 148 l 22 -8"/><path d="M398 144 q-10 14 6 16"/>
</g>
<g fill="#1f2740" opacity="0.75">
  <circle cx="192" cy="158" r="2.4"/><circle cx="326" cy="142" r="2.4"/>
</g>
<g stroke="#1f2740" stroke-width="3" opacity="0.8" fill="none" stroke-linecap="round">
  <path d="M162 210 l 18 -14"/><path d="M194 206 q14 14 -2 18"/><path d="M226 202 l 8 20"/>
  <path d="M256 198 q-14 8 -2 18"/><path d="M288 194 l 22 -10"/><path d="M320 190 q12 -14 20 2"/>
  <path d="M354 186 l -12 14"/>
</g>
<g fill="#1f2740" opacity="0.7">
  <circle cx="218" cy="192" r="2.2"/><circle cx="284" cy="184" r="2.2"/>
</g>
<g stroke="#1f2740" stroke-width="3" opacity="0.8" fill="none" stroke-linecap="round">
  <path d="M164 248 q16 -14 22 4"/><path d="M200 244 l -14 14"/><path d="M228 240 l 10 18"/>
  <path d="M290 232 l 24 -10"/><path d="M356 224 l 18 -12"/>
</g>
<g stroke="#1f2740" stroke-width="3" opacity="0.78" fill="none" stroke-linecap="round">
  <path d="M166 286 l 20 -12"/><path d="M202 282 q14 12 -2 18"/><path d="M234 278 l 6 20"/>
  <path d="M264 274 q16 -8 14 10"/><path d="M298 270 l -16 12"/><path d="M358 262 l 22 -10"/>
</g>
<!-- the line he was made to repeat, ringed by the officer -->
<g stroke="#1f2740" stroke-width="3.2" opacity="0.86" fill="none" stroke-linecap="round">
  <path d="M170 328 q16 -16 24 4"/><path d="M208 324 l -16 14"/><path d="M240 320 l 10 20"/>
  <path d="M272 316 q-14 10 2 18"/><path d="M304 312 l 26 -12"/><path d="M342 308 q14 12 -6 18"/>
</g>
<ellipse cx="262" cy="322" rx="112" ry="30" fill="none" stroke="#8e2622" stroke-width="3" opacity="0.7" transform="rotate(-4 262 322)"/>
<path d="M148 300 Q 132 322 150 346" fill="none" stroke="#8e2622" stroke-width="3" opacity="0.6" stroke-linecap="round"/>
<g stroke="#1f2740" stroke-width="3" opacity="0.72" fill="none" stroke-linecap="round">
  <path d="M170 366 l 20 -12"/><path d="M206 362 q12 12 -4 16"/><path d="M266 354 q-12 10 4 16"/>
</g>
<g stroke="#1f2740" stroke-width="3" opacity="0.68" fill="none" stroke-linecap="round">
  <path d="M172 404 q16 -14 22 4"/><path d="M238 396 l 10 18"/>
</g>
<!-- his mark at the foot, made with a shaking hand -->
<path d="M330 424 l 18 20 M348 424 l -18 20" stroke="#1f2740" stroke-width="3.4" opacity="0.85" stroke-linecap="round"/>
<path d="M300 448 L420 440" stroke="#4a4636" stroke-width="1.4" opacity="0.55"/>

<!-- the wire spiral down the spine -->
<g stroke="url(#ev2-pip-wire)" stroke-width="5" fill="none" stroke-linecap="round">
  <path d="M84 84 q -20 8 -4 20"/><path d="M88 144 q -20 8 -4 20"/><path d="M92 204 q -20 8 -4 20"/>
  <path d="M96 264 q -20 8 -4 20"/><path d="M104 384 q -20 8 -4 20"/><path d="M108 444 q -20 8 -4 20"/>
</g>
<g stroke="#ffffff" stroke-width="1.4" opacity="0.4" fill="none">
  <path d="M84 82 q -18 8 -4 18"/><path d="M92 202 q -18 8 -4 18"/><path d="M104 382 q -18 8 -4 18"/>
</g>
<g fill="#2a2620" opacity="0.7">
  <circle cx="90" cy="90" r="3"/><circle cx="94" cy="150" r="3"/><circle cx="98" cy="210" r="3"/>
  <circle cx="102" cy="270" r="3"/><circle cx="110" cy="390" r="3"/>
</g>

<!-- the copying pencil that took it down, laid across the corner -->
<g filter="url(#ev2-pip-soft)" opacity="0.55">
  <path d="M420 462 L620 442 L622 470 L424 490 Z" fill="#000"/>
</g>
<path d="M414 452 L588 434 L590 458 L416 476 Z" fill="url(#ev2-pip-pencil)"/>
<path d="M414 452 L588 434 L588 442 L414 460 Z" fill="#8a9880" opacity="0.4"/>
<path d="M416 468 L590 450 L590 458 L416 476 Z" fill="#0e1209" opacity="0.5"/>
<path d="M588 434 L618 442 L620 452 L590 458 Z" fill="#d8c8a8"/>
<path d="M588 434 L618 442 L618 446 L588 442 Z" fill="#f4ecd6" opacity="0.6"/>
<path d="M614 443 L630 447 L614 453 Z" fill="#2e3a56"/>
<path d="M386 456 L414 452 L416 476 L388 478 Z" fill="#3a4434"/>
<path d="M386 456 L400 454 L402 476 L388 478 Z" fill="#6e7c64" opacity="0.4"/>
<g fill="#a09578" opacity="0.24">
  <circle cx="430" cy="160" r="2"/><circle cx="150" cy="430" r="1.6"/><circle cx="400" cy="410" r="1.8"/>
</g>

<rect width="640" height="520" fill="url(#ev2-pip-vig)"/>
`,
  },

  /* The passkey: a long-shanked dressing-room key on a pine board, hung under
     a tag that was written for something else, on string that is far too new. */
  c2_passkey: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev2-pass-bg" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#3a2c1d"/><stop offset="0.55" stop-color="#1d150d"/><stop offset="1" stop-color="#0a0705"/>
  </linearGradient>
  <radialGradient id="ev2-pass-pool" cx="0.32" cy="0.16" r="0.78">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.22"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev2-pass-plank" x1="0" y1="0" x2="1" y2="0.1">
    <stop offset="0" stop-color="#7c5c36"/><stop offset="0.4" stop-color="#4e3a22"/><stop offset="1" stop-color="#241a0f"/>
  </linearGradient>
  <linearGradient id="ev2-pass-brass" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f4dfa4"/><stop offset="0.24" stop-color="#c9a961"/><stop offset="0.6" stop-color="#8a6f3c"/><stop offset="1" stop-color="#3d2f16"/>
  </linearGradient>
  <linearGradient id="ev2-pass-brasslip" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fff2cd"/><stop offset="0.5" stop-color="#d9bb74"/><stop offset="1" stop-color="#6b552b"/>
  </linearGradient>
  <linearGradient id="ev2-pass-iron" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#8c8a80"/><stop offset="0.45" stop-color="#4a473f"/><stop offset="1" stop-color="#1a1815"/>
  </linearGradient>
  <linearGradient id="ev2-pass-card" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#f6ecd0"/><stop offset="0.6" stop-color="#ddcea6"/><stop offset="1" stop-color="#a3946f"/>
  </linearGradient>
  <filter id="ev2-pass-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev2-pass-vig" cx="0.4" cy="0.34" r="0.8">
    <stop offset="0.34" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-pass-bg)"/>
<!-- the pine board behind: four planks, the light dying to the right -->
<rect width="640" height="520" fill="url(#ev2-pass-plank)" opacity="0.85"/>
<g stroke="#1a1209" stroke-width="4" opacity="0.6" fill="none">
  <path d="M148 0 L154 520"/><path d="M336 0 L344 520"/><path d="M508 0 L520 520"/>
</g>
<g stroke="#9a7442" stroke-width="1.2" opacity="0.28" fill="none">
  <path d="M153 0 L159 520"/><path d="M341 0 L349 520"/><path d="M513 0 L525 520"/>
</g>
<g stroke="#33240f" stroke-width="1.6" opacity="0.45" fill="none">
  <path d="M40 0 Q 62 250 44 520"/><path d="M92 0 Q 74 250 96 520"/>
  <path d="M212 0 Q 236 250 220 520"/><path d="M268 0 Q 250 250 276 520"/>
  <path d="M398 0 Q 418 250 404 520"/><path d="M452 0 Q 436 250 460 520"/>
  <path d="M566 0 Q 586 250 574 520"/>
</g>
<g stroke="#8e6c3d" stroke-width="0.8" opacity="0.22" fill="none">
  <path d="M46 0 Q 68 250 50 520"/><path d="M218 0 Q 242 250 226 520"/><path d="M404 0 Q 424 250 410 520"/>
</g>
<ellipse cx="112" cy="360" rx="16" ry="26" fill="#2a1c0c" opacity="0.6"/>
<ellipse cx="112" cy="360" rx="8" ry="14" fill="#43301a" opacity="0.7"/>
<ellipse cx="470" cy="120" rx="12" ry="19" fill="#241809" opacity="0.55"/>
<rect width="640" height="520" fill="url(#ev2-pass-pool)"/>

<!-- the iron hook, screwed to the board -->
<g filter="url(#ev2-pass-soft)" opacity="0.6">
  <path d="M214 40 L292 40 L308 116 L228 118 Z" fill="#000"/>
</g>
<path d="M222 24 L262 24 L262 74 q0 26 26 26 l0 22 q-48 0 -48 -46 z" fill="url(#ev2-pass-iron)"/>
<path d="M222 24 L234 24 L234 76 q0 16 10 24 l-8 14 q-14 -14 -14 -36 z" fill="#b0aca0" opacity="0.4"/>
<path d="M252 24 L262 24 L262 74 q0 20 16 24 l-2 20 q-30 -8 -30 -42 z" fill="#0f0e0c" opacity="0.55"/>
<ellipse cx="242" cy="24" rx="20" ry="7" fill="#5b584e"/>
<ellipse cx="242" cy="22" rx="12" ry="3" fill="#a8a498" opacity="0.6"/>

<!-- the passkey, hanging: bow, collar, long shank, wards -->
<g filter="url(#ev2-pass-soft)" opacity="0.62">
  <path d="M238 128 q78 0 78 66 q0 44 -40 60 l16 176 l72 4 l-4 44 l-118 -6 l-16 -216 q-40 -18 -40 -62 q0 -66 52 -66 Z" fill="#000"/>
</g>
<path d="M228 96 q66 0 66 62 q0 62 -66 62 q-66 0 -66 -62 q0 -62 66 -62 z" fill="url(#ev2-pass-brass)"/>
<path d="M228 128 q34 0 34 30 q0 30 -34 30 q-34 0 -34 -30 q0 -30 34 -30 z" fill="#160f08"/>
<path d="M228 130 q32 0 32 28 q0 6 -2 11 q-6 -26 -30 -33 q-24 -7 -32 8 q4 -14 32 -14 z" fill="#0a0705" opacity="0.7"/>
<path d="M180 118 q18 -14 48 -14 q30 0 48 14 l-8 8 q-18 -12 -40 -12 q-22 0 -40 12 z" fill="#ffefc0" opacity="0.55"/>
<path d="M172 176 q16 24 56 24 q40 0 56 -24 l6 8 q-18 26 -62 26 q-44 0 -62 -26 z" fill="#2a1f0c" opacity="0.55"/>
<path d="M166 140 q-2 30 12 48 l10 -8 q-12 -16 -10 -40 z" fill="#f7e6b4" opacity="0.35"/>
<path d="M282 138 q4 30 -10 50 l-10 -8 q12 -18 8 -42 z" fill="#1d1508" opacity="0.5"/>
<path d="M214 216 l30 0 l3 22 l-36 0 z" fill="url(#ev2-pass-brasslip)"/>
<path d="M214 216 l8 0 l1 22 l-9 0 z" fill="#fff3cf" opacity="0.5"/>
<path d="M238 216 l6 0 l3 22 l-7 0 z" fill="#241a08" opacity="0.5"/>
<path d="M216 238 l28 0 l10 176 l-32 0 z" fill="url(#ev2-pass-brass)"/>
<path d="M216 238 l8 0 l6 176 l-8 0 z" fill="#ffefc0" opacity="0.4"/>
<path d="M238 238 l6 0 l10 176 l-7 0 z" fill="#221808" opacity="0.55"/>
<path d="M220 274 l26 0 l1 8 l-27 0 z M222 320 l26 0 l1 8 l-27 0 z" fill="#3d2f16" opacity="0.4"/>
<path d="M222 414 l32 0 l4 66 l-42 0 z" fill="url(#ev2-pass-brasslip)"/>
<path d="M254 414 l84 0 l6 30 l-88 0 z" fill="url(#ev2-pass-brass)"/>
<path d="M254 414 l84 0 l2 9 l-85 0 z" fill="#fff3cf" opacity="0.45"/>
<path d="M258 444 l88 0 l4 20 l-90 0 z" fill="#241a08" opacity="0.45"/>
<path d="M258 448 l56 0 l3 34 l-58 0 z" fill="url(#ev2-pass-brass)"/>
<path d="M258 448 l10 0 l2 34 l-10 0 z" fill="#f4dfa4" opacity="0.4"/>
<path d="M282 448 l10 0 l3 22 l-11 0 z" fill="#100b05"/>
<path d="M300 448 l8 0 l2 34 l-9 0 z" fill="#100b05"/>
<path d="M222 414 l10 0 l2 66 l-11 0 z" fill="#ffefc0" opacity="0.35"/>
<path d="M246 414 l8 0 l4 66 l-9 0 z" fill="#1d1508" opacity="0.5"/>
<!-- handling: the brass is worn bright where fingers take it, dull elsewhere -->
<g fill="#f6e2ae" opacity="0.2">
  <ellipse cx="196" cy="150" rx="14" ry="30"/><ellipse cx="230" cy="330" rx="7" ry="44"/>
</g>
<g fill="#2a2010" opacity="0.35">
  <ellipse cx="268" cy="186" rx="12" ry="16"/><ellipse cx="248" cy="392" rx="6" ry="28"/>
</g>
<g fill="#4a3a1c" opacity="0.5">
  <circle cx="204" cy="196" r="3"/><circle cx="236" cy="300" r="2.4"/><circle cx="286" cy="428" r="3"/>
  <circle cx="176" cy="132" r="2.2"/>
</g>

<!-- the tag: buff card on string that has not been on this board a week -->
<g transform="rotate(7 452 250)">
  <g filter="url(#ev2-pass-soft)" opacity="0.55">
    <path d="M370 176 L570 168 L578 322 L378 330 Z" fill="#000"/>
  </g>
  <path d="M362 162 L556 154 L564 300 L370 308 Z" fill="url(#ev2-pass-card)"/>
  <path d="M362 162 L556 154 L557 166 L363 174 Z" fill="#fffaea" opacity="0.6"/>
  <path d="M366 296 L562 288 L564 300 L370 308 Z" fill="#6e6045" opacity="0.5"/>
  <path d="M362 162 L556 154 L558 176 L364 184 Z" fill="#8c7c58" opacity="0.14"/>
  <circle cx="396" cy="196" r="13" fill="#7f6d4c"/>
  <circle cx="396" cy="196" r="9" fill="#120d07"/>
  <circle cx="396" cy="193" r="7" fill="#a8946a" opacity="0.5"/>
  <g stroke="#2f3a4e" stroke-width="5" opacity="0.85" stroke-linecap="round">
    <path d="M424 200 L520 196"/><path d="M392 240 L534 234"/><path d="M392 266 L470 262"/>
  </g>
  <g stroke="#4a5468" stroke-width="2" opacity="0.5" stroke-linecap="round">
    <path d="M424 208 L512 204"/><path d="M392 248 L520 243"/>
  </g>
  <g fill="#9a8a64" opacity="0.35">
    <path d="M470 160 q34 44 8 88 q-18 30 -40 54 l-18 1 q34 -34 46 -68 q18 -44 -12 -74 z"/>
  </g>
  <g fill="#7d6a48" opacity="0.3">
    <ellipse cx="520" cy="272" rx="26" ry="16"/><ellipse cx="404" cy="288" rx="18" ry="10"/>
  </g>
</g>
<path d="M242 116 q40 -34 108 -6 q52 22 96 42" fill="none" stroke="#efe3c2" stroke-width="6" stroke-linecap="round"/>
<path d="M242 116 q40 -34 108 -6 q52 22 96 42" fill="none" stroke="#fffaea" stroke-width="2" opacity="0.6"/>
<path d="M248 122 q40 -30 104 -4 q50 22 94 42" fill="none" stroke="#3a2c17" stroke-width="2.4" opacity="0.35"/>

<g fill="#d6c9a6" opacity="0.16">
  <circle cx="520" cy="90" r="2"/><circle cx="96" cy="256" r="1.6"/><circle cx="600" cy="400" r="1.8"/>
  <circle cx="140" cy="466" r="1.4"/><circle cx="352" cy="66" r="1.5"/>
</g>
<rect width="640" height="520" fill="url(#ev2-pass-vig)"/>
`,
  },

  /* The letterbox key: small, flat, brass, the bow stamped with a hotel crest —
     and the torn claim stub that came out of the drawer beside it. */
  c2_boxkey: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <radialGradient id="ev2-bkey-bg" cx="0.34" cy="0.2" r="0.82">
    <stop offset="0" stop-color="#2e2a24"/><stop offset="0.55" stop-color="#14120e"/><stop offset="1" stop-color="#050403"/>
  </radialGradient>
  <linearGradient id="ev2-bkey-felt" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a3d2c"/><stop offset="0.5" stop-color="#2a2118"/><stop offset="1" stop-color="#120e09"/>
  </linearGradient>
  <linearGradient id="ev2-bkey-brass" x1="0.05" y1="0" x2="0.95" y2="1">
    <stop offset="0" stop-color="#ffeeba"/><stop offset="0.22" stop-color="#d9bb74"/><stop offset="0.58" stop-color="#96793f"/><stop offset="1" stop-color="#40311a"/>
  </linearGradient>
  <linearGradient id="ev2-bkey-edge" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f6e3ae"/><stop offset="1" stop-color="#5d4a24"/>
  </linearGradient>
  <linearGradient id="ev2-bkey-stub" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#f2e7cb"/><stop offset="0.6" stop-color="#d6c8a2"/><stop offset="1" stop-color="#95886a"/>
  </linearGradient>
  <filter id="ev2-bkey-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="6"/>
  </filter>
  <radialGradient id="ev2-bkey-vig" cx="0.42" cy="0.38" r="0.78">
    <stop offset="0.34" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.88"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-bkey-bg)"/>
<!-- the drawer bottom the key came out of: old baize, pressed flat -->
<rect width="640" height="520" fill="url(#ev2-bkey-felt)" opacity="0.9"/>
<g fill="#6b5a40" opacity="0.10">
  <ellipse cx="180" cy="130" rx="150" ry="90"/><ellipse cx="470" cy="380" rx="140" ry="80"/>
</g>
<g stroke="#5c4c36" stroke-width="0.8" opacity="0.2" fill="none">
  <path d="M0 96 Q 320 82 640 100"/><path d="M0 210 Q 320 196 640 214"/>
  <path d="M0 330 Q 320 318 640 336"/><path d="M0 446 Q 320 432 640 450"/>
</g>
<g fill="#8a7a5c" opacity="0.14">
  <circle cx="86" cy="180" r="2.4"/><circle cx="300" cy="120" r="1.8"/><circle cx="560" cy="230" r="2.2"/>
  <circle cx="150" cy="420" r="2"/><circle cx="420" cy="466" r="1.6"/><circle cx="596" cy="132" r="1.8"/>
</g>

<!-- the claim stub, torn across, lying behind -->
<g transform="rotate(-11 420 330)">
  <g filter="url(#ev2-bkey-soft)" opacity="0.6">
    <path d="M310 268 L580 250 L590 396 L320 414 Z" fill="#000"/>
  </g>
  <path d="M300 256 L566 238 L576 380 L310 398 Z" fill="url(#ev2-bkey-stub)"/>
  <path d="M300 256 L566 238 L567 250 L301 268 Z" fill="#fffaea" opacity="0.6"/>
  <path d="M306 368 L572 350 L576 380 L310 398 Z" fill="#6b6047" opacity="0.45"/>
  <path d="M300 256 L316 262 L302 272 L318 280 L304 290 L320 298 L306 308 L322 316 L308 326 L324 334 L310 344 L310 398 L300 398 Z" fill="#15110b"/>
  <path d="M304 258 L318 264 L306 272 L320 280 L308 288 L322 296 L310 306 L324 314 L312 324 L326 332 L314 342" fill="none" stroke="#fffaea" stroke-width="1.6" opacity="0.35"/>
  <g stroke="#3b4256" stroke-width="5" opacity="0.8" stroke-linecap="round">
    <path d="M348 292 L500 282"/><path d="M348 322 L458 314"/>
  </g>
  <g stroke="#5b6274" stroke-width="2.2" opacity="0.45" stroke-linecap="round">
    <path d="M348 302 L482 293"/><path d="M348 332 L436 325"/>
  </g>
  <g stroke="#7d2a22" stroke-width="4" opacity="0.65" stroke-linecap="round">
    <path d="M470 336 L546 330"/>
  </g>
  <path d="M494 258 q28 40 6 78 q-14 24 -34 42 l-16 1 q28 -28 40 -58 q16 -38 -12 -62 z" fill="#9a8c68" opacity="0.28"/>
  <g fill="#8a7c58" opacity="0.3">
    <ellipse cx="530" cy="300" rx="22" ry="12"/><ellipse cx="360" cy="360" rx="16" ry="9"/>
  </g>
</g>

<!-- the key itself: flat brass, a hotel bow, a short bit -->
<g transform="rotate(-16 260 250)">
  <g filter="url(#ev2-bkey-soft)" opacity="0.6">
    <path d="M118 224 q0 -78 78 -78 q78 0 78 78 q0 44 -30 64 l142 17 l32 4 l-6 54 l-32 -4 l-146 -18 q-116 -2 -116 -117 Z" fill="#000"/>
  </g>
  <path d="M104 210 q0 -76 76 -76 q76 0 76 76 q0 76 -76 76 q-76 0 -76 -76 z" fill="url(#ev2-bkey-brass)"/>
  <path d="M180 152 q58 0 58 58 q0 58 -58 58 q-58 0 -58 -58 q0 -58 58 -58 z" fill="#3a2e18"/>
  <path d="M180 164 q46 0 46 46 q0 46 -46 46 q-46 0 -46 -46 q0 -46 46 -46 z" fill="url(#ev2-bkey-brass)"/>
  <path d="M180 174 q36 0 36 36 q0 36 -36 36 q-36 0 -36 -36 q0 -36 36 -36 z" fill="#5d4a24" opacity="0.55"/>
  <!-- the crest: two crossed keys struck into the bow, shallow and worn -->
  <g stroke="#f2dda6" stroke-width="6" stroke-linecap="round" opacity="0.75">
    <path d="M158 190 L204 232"/><path d="M204 190 L158 232"/>
  </g>
  <g stroke="#33280f" stroke-width="3" stroke-linecap="round" opacity="0.85">
    <path d="M160 193 L202 231"/><path d="M202 193 L160 231"/>
  </g>
  <g fill="none" stroke="#f2dda6" stroke-width="4" opacity="0.6">
    <circle cx="156" cy="187" r="7"/><circle cx="206" cy="187" r="7"/>
  </g>
  <g fill="none" stroke="#33280f" stroke-width="2" opacity="0.7">
    <circle cx="157" cy="189" r="7"/><circle cx="207" cy="189" r="7"/>
  </g>
  <path d="M198 228 l10 6 M166 228 l-10 6" stroke="#33280f" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
  <path d="M112 174 q22 -32 68 -32 q46 0 68 32 l-12 12 q-20 -26 -56 -26 q-36 0 -56 26 z" fill="#fff3cf" opacity="0.5"/>
  <path d="M114 250 q22 32 66 32 q44 0 66 -32 l10 10 q-24 36 -76 36 q-52 0 -76 -36 z" fill="#241a08" opacity="0.5"/>
  <path d="M252 196 l150 18 l-4 34 l-150 -18 z" fill="url(#ev2-bkey-brass)"/>
  <path d="M252 196 l150 18 l-1 9 l-150 -18 z" fill="#ffeeba" opacity="0.55"/>
  <path d="M250 240 l150 18 l-2 10 l-150 -18 z" fill="#241a08" opacity="0.5"/>
  <path d="M398 214 l30 4 l-6 52 l-30 -4 z" fill="url(#ev2-bkey-edge)"/>
  <path d="M398 214 l8 1 l-6 52 l-8 -1 z" fill="#fff3cf" opacity="0.45"/>
  <path d="M404 232 l16 2 l-1 10 l-16 -2 z" fill="#0e0a05"/>
  <path d="M406 252 l14 2 l-1 9 l-14 -2 z" fill="#0e0a05"/>
  <path d="M420 218 l8 1 l-6 52 l-8 -1 z" fill="#241a08" opacity="0.45"/>
  <!-- the thumb has polished one face of the bow bright -->
  <ellipse cx="140" cy="196" rx="16" ry="30" fill="#ffeeba" opacity="0.22"/>
  <ellipse cx="224" cy="240" rx="12" ry="20" fill="#241a08" opacity="0.3"/>
  <g fill="#4a3a1c" opacity="0.45">
    <circle cx="130" cy="238" r="2.6"/><circle cx="300" cy="228" r="2.2"/><circle cx="352" cy="236" r="2"/>
    <circle cx="196" cy="150" r="2"/>
  </g>
</g>

<g fill="#d8cba8" opacity="0.15">
  <circle cx="92" cy="76" r="2"/><circle cx="590" cy="106" r="1.6"/><circle cx="70" cy="446" r="1.8"/>
  <circle cx="560" cy="470" r="1.5"/>
</g>
<rect width="640" height="520" fill="url(#ev2-bkey-vig)"/>
`,
  },

  /* Five years of a dead man's royalties, forwarded and refused: a taped bundle,
     every sheet struck across the face with the same returning stamp. */
  c2_royalties: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <radialGradient id="ev2-roy-bg" cx="0.3" cy="0.16" r="0.84">
    <stop offset="0" stop-color="#33302a"/><stop offset="0.55" stop-color="#161310"/><stop offset="1" stop-color="#060505"/>
  </radialGradient>
  <linearGradient id="ev2-roy-paper" x1="0" y1="0" x2="0.22" y2="1">
    <stop offset="0" stop-color="#f6eed6"/><stop offset="0.45" stop-color="#e2d6b4"/><stop offset="1" stop-color="#a2967a"/>
  </linearGradient>
  <linearGradient id="ev2-roy-under" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#ded0ac"/><stop offset="1" stop-color="#7e735a"/>
  </linearGradient>
  <linearGradient id="ev2-roy-tape" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#c8b487"/><stop offset="0.5" stop-color="#9c8a63"/><stop offset="1" stop-color="#4f4630"/>
  </linearGradient>
  <linearGradient id="ev2-roy-edge" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fffaea"/><stop offset="1" stop-color="#8d8067"/>
  </linearGradient>
  <filter id="ev2-roy-soft" x="-30%" y="-30%" width="160%" height="160%">
    <feGaussianBlur stdDeviation="7"/>
  </filter>
  <radialGradient id="ev2-roy-vig" cx="0.4" cy="0.34" r="0.8">
    <stop offset="0.34" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.86"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev2-roy-bg)"/>
<g fill="#6a5f4c" opacity="0.1">
  <ellipse cx="200" cy="120" rx="180" ry="100"/>
</g>
<g stroke="#3a332a" stroke-width="2" opacity="0.5" fill="none">
  <path d="M0 128 L640 104"/><path d="M0 300 L640 274"/><path d="M0 470 L640 442"/>
</g>

<!-- the bundle: the sheets below, fanned by five years of handling -->
<g filter="url(#ev2-roy-soft)" opacity="0.68">
  <path d="M96 156 L560 116 L586 448 L122 490 Z" fill="#000"/>
</g>
<path d="M92 176 L544 136 L562 428 L110 470 Z" fill="url(#ev2-roy-under)"/>
<path d="M86 166 L540 126 L558 420 L104 462 Z" fill="url(#ev2-roy-under)"/>
<path d="M80 158 L536 118 L554 414 L98 456 Z" fill="url(#ev2-roy-under)"/>
<g stroke="#7c705a" stroke-width="1.6" opacity="0.6" fill="none">
  <path d="M92 176 L544 136"/><path d="M86 166 L540 126"/>
</g>
<g stroke="#fffaea" stroke-width="1.2" opacity="0.35" fill="none">
  <path d="M92 172 L544 132"/><path d="M86 162 L540 122"/><path d="M80 154 L536 114"/>
</g>
<!-- the top sheet -->
<path d="M74 150 L530 110 L548 408 L92 450 Z" fill="url(#ev2-roy-paper)"/>
<path d="M74 150 L530 110 L531 124 L75 164 Z" fill="#fffaea" opacity="0.65"/>
<path d="M88 436 L544 394 L548 408 L92 450 Z" fill="#7b6f57" opacity="0.45"/>
<path d="M74 150 L88 148 L106 448 L92 450 Z" fill="#fffaea" opacity="0.28"/>
<!-- the mill's laid lines, and the fold it has been kept in -->
<path d="M292 130 L310 428" stroke="#8d8167" stroke-width="3" opacity="0.35"/>
<path d="M294 130 L312 428" stroke="#fffaea" stroke-width="1.4" opacity="0.4"/>
<!-- foxing, and where a thumb has come back to the same corner for years -->
<g fill="#a8895c" opacity="0.22">
  <ellipse cx="150" cy="400" rx="34" ry="22"/><ellipse cx="500" cy="170" rx="26" ry="16"/>
  <ellipse cx="420" cy="392" rx="20" ry="13"/>
</g>
<g fill="#8d6f42" opacity="0.3">
  <circle cx="180" cy="220" r="3"/><circle cx="384" cy="176" r="2.4"/><circle cx="260" cy="360" r="2.8"/>
  <circle cx="470" cy="290" r="2.2"/><circle cx="120" cy="300" r="2.6"/>
</g>

<!-- a royalty statement is a ruled account: heading, columns, a rule, a total -->
<g stroke="#2f3a4e" stroke-width="6" opacity="0.85" stroke-linecap="round">
  <path d="M110 190 L300 174"/>
</g>
<g stroke="#4a5468" stroke-width="3" opacity="0.6" stroke-linecap="round">
  <path d="M110 206 L242 195"/>
</g>
<g stroke="#3b4356" stroke-width="4" opacity="0.7" stroke-linecap="round">
  <path d="M112 246 L268 232"/><path d="M114 274 L286 259"/><path d="M116 302 L252 289"/>
  <path d="M118 330 L276 316"/><path d="M120 358 L240 347"/>
</g>
<g stroke="#3b4356" stroke-width="4" opacity="0.7" stroke-linecap="round">
  <path d="M380 232 L468 224"/><path d="M382 259 L470 251"/><path d="M384 287 L472 279"/>
  <path d="M386 314 L474 306"/><path d="M388 342 L476 334"/>
</g>
<path d="M330 224 L344 412" stroke="#5a6273" stroke-width="1.6" opacity="0.5"/>
<path d="M368 220 L382 410" stroke="#5a6273" stroke-width="1.6" opacity="0.5"/>
<path d="M120 376 L482 344" stroke="#2f3a4e" stroke-width="2.4" opacity="0.7"/>
<g stroke="#2f3a4e" stroke-width="6" opacity="0.85" stroke-linecap="round">
  <path d="M392 372 L482 364"/>
</g>
<path d="M120 392 L486 360" stroke="#2f3a4e" stroke-width="2" opacity="0.55"/>
<path d="M124 400 L486 368" stroke="#2f3a4e" stroke-width="2" opacity="0.55"/>

<!-- THE STAMP: struck across the face, over the figures, in tired violet ink -->
<g transform="rotate(-9 320 300)">
  <g fill="none" stroke="#5c3f72" stroke-width="7" opacity="0.62">
    <rect x="126" y="248" width="380" height="104" rx="8"/>
  </g>
  <g stroke="#5c3f72" stroke-width="16" opacity="0.6" stroke-linecap="square">
    <path d="M158 288 L290 282"/><path d="M320 282 L346 281"/><path d="M376 280 L470 276"/>
  </g>
  <g stroke="#5c3f72" stroke-width="12" opacity="0.5" stroke-linecap="square">
    <path d="M158 322 L246 318"/><path d="M272 318 L354 314"/><path d="M380 314 L468 310"/>
  </g>
  <g stroke="#7b5c94" stroke-width="4" opacity="0.35" stroke-linecap="square">
    <path d="M160 280 L288 274"/><path d="M160 314 L244 310"/><path d="M382 306 L466 302"/>
  </g>
  <g fill="#f2e6d0" opacity="0.4">
    <path d="M196 276 l6 26 M244 274 l5 26 M330 272 l5 26 M410 270 l6 26 M206 312 l5 22 M300 308 l5 22 M420 304 l5 22"/>
    <rect x="196" y="276" width="4" height="26"/><rect x="252" y="274" width="3" height="26"/>
    <rect x="336" y="272" width="4" height="26"/><rect x="412" y="270" width="3" height="26"/>
    <rect x="208" y="312" width="3" height="22"/><rect x="304" y="308" width="4" height="22"/>
    <rect x="424" y="304" width="3" height="22"/>
  </g>
</g>

<!-- the tape that ties the bundle, and the knot pulled tight -->
<path d="M212 119 L248 115 L270 454 L234 458 Z" fill="url(#ev2-roy-tape)" opacity="0.95"/>
<path d="M212 119 L222 118 L244 456 L234 458 Z" fill="#e0cda0" opacity="0.4"/>
<path d="M240 116 L248 115 L270 454 L262 455 Z" fill="#2c2618" opacity="0.5"/>
<path d="M56 276 L556 232 L559 260 L59 304 Z" fill="url(#ev2-roy-tape)"/>
<path d="M56 276 L556 232 L557 240 L57 284 Z" fill="#e0cda0" opacity="0.45"/>
<path d="M58 296 L558 252 L559 260 L59 304 Z" fill="#2c2618" opacity="0.5"/>
<g filter="url(#ev2-roy-soft)" opacity="0.42">
  <path d="M228 252 L292 246 L298 296 L234 302 Z" fill="#000"/>
</g>
<path d="M222 254 q22 -10 40 -2 q13 7 3 19 q-13 12 -28 6 q-16 -7 -15 -23 z" fill="url(#ev2-roy-tape)"/>
<path d="M226 256 q20 -8 36 -2 q-19 3 -36 2 z" fill="#f0dcac" opacity="0.5"/>
<path d="M230 276 q20 8 34 -5 q-9 16 -28 13 z" fill="#241f14" opacity="0.55"/>
<path d="M262 264 q34 6 54 -6" fill="none" stroke="#9c8a63" stroke-width="8"/>
<path d="M262 260 q34 6 54 -6" fill="none" stroke="#e0cda0" stroke-width="2.2" opacity="0.45"/>
<path d="M244 282 q6 34 -6 54" fill="none" stroke="#9c8a63" stroke-width="7"/>
<path d="M240 282 q6 34 -6 54" fill="none" stroke="#e0cda0" stroke-width="2" opacity="0.4"/>

<g fill="#d8cba8" opacity="0.15">
  <circle cx="580" cy="120" r="2"/><circle cx="70" cy="120" r="1.6"/><circle cx="596" cy="470" r="1.8"/>
  <circle cx="52" cy="466" r="1.4"/>
</g>
<rect width="640" height="520" fill="url(#ev2-roy-vig)"/>
`,
  },

/*BATCHEND*/
};
