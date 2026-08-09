/* Exhibit plates for CASE No. 001 — Blackwood Manor.
   One close-up per clue. A single object at full frame can carry far more
   material detail than a room can, so these are rendered for realism:
   modelled form, specular highlights, cast shadow, surface texture.
   Language-neutral — no text anywhere. */
window.CLUE_ART = window.CLUE_ART || {};
window.CLUE_ART.blackwood = {

  /* The master's private Reserve glass: heavy cut crystal, dark dregs, and
     the fine greenish sediment that is the whole case. */
  c1_glass: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1g-bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#241c14"/><stop offset="1" stop-color="#0f0c08"/>
  </linearGradient>
  <radialGradient id="ev1g-pool" cx="0.5" cy="0.34" r="0.62">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1g-cloth" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#cdbc93"/><stop offset="1" stop-color="#8d7e5f"/>
  </linearGradient>
  <linearGradient id="ev1g-crystal" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#f3efe2" stop-opacity="0.30"/>
    <stop offset="0.18" stop-color="#ffffff" stop-opacity="0.16"/>
    <stop offset="0.42" stop-color="#cdd3cb" stop-opacity="0.10"/>
    <stop offset="0.66" stop-color="#ffffff" stop-opacity="0.20"/>
    <stop offset="1" stop-color="#e8e4d6" stop-opacity="0.34"/>
  </linearGradient>
  <linearGradient id="ev1g-wine" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a2119"/><stop offset="0.55" stop-color="#4d130f"/><stop offset="1" stop-color="#2a0a08"/>
  </linearGradient>
  <linearGradient id="ev1g-sed" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8fa257"/><stop offset="1" stop-color="#5c6b34"/>
  </linearGradient>
  <radialGradient id="ev1g-shadow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.55"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="ev1g-vig" cx="0.5" cy="0.44" r="0.75">
    <stop offset="0.5" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.70"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1g-bg)"/>
<rect width="640" height="520" fill="url(#ev1g-pool)"/>

<!-- the tablecloth it stands on, with weave and a fold -->
<path d="M0 388 L640 372 L640 520 L0 520 Z" fill="url(#ev1g-cloth)"/>
<g stroke="#a2916f" stroke-width="1" opacity="0.35">
  <path d="M0 404 L640 389"/><path d="M0 428 L640 413"/><path d="M0 452 L640 437"/>
  <path d="M0 476 L640 461"/><path d="M0 500 L640 485"/>
</g>
<g stroke="#b7a67f" stroke-width="0.6" opacity="0.22">
  <path d="M60 384 L60 520"/><path d="M150 382 L150 520"/><path d="M240 380 L240 520"/>
  <path d="M330 378 L330 520"/><path d="M420 376 L420 520"/><path d="M510 374 L510 520"/><path d="M600 372 L600 520"/>
</g>
<path d="M352 376 Q 392 430 372 520 L410 520 Q 424 428 392 374 Z" fill="#b3a17c" opacity="0.45"/>

<ellipse cx="316" cy="452" rx="150" ry="26" fill="url(#ev1g-shadow)"/>
<ellipse cx="352" cy="448" rx="74" ry="13" fill="#2a2114" opacity="0.5"/>

<!-- foot and stem -->
<ellipse cx="316" cy="446" rx="76" ry="15" fill="#cfcabb" opacity="0.30"/>
<ellipse cx="316" cy="443" rx="76" ry="15" fill="none" stroke="#f0ece0" stroke-width="2.2" opacity="0.55"/>
<path d="M300 443 Q 306 400 302 356 L330 356 Q 326 400 332 443 Z" fill="url(#ev1g-crystal)"/>
<path d="M305 440 Q 310 400 306 358" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.42"/>
<path d="M327 440 Q 322 400 326 358" fill="none" stroke="#0e0b07" stroke-width="1.6" opacity="0.35"/>
<ellipse cx="316" cy="352" rx="24" ry="9" fill="#e6e2d4" opacity="0.22"/>

<!-- the bowl: cut crystal, so the wall is a band of facets -->
<path d="M232 176 L400 176 L386 300 Q 372 350 316 354 Q 260 350 246 300 Z" fill="url(#ev1g-crystal)"/>
<g opacity="0.5">
  <path d="M258 178 L268 344" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
  <path d="M286 177 L290 352" stroke="#0d0a06" stroke-width="1.3" opacity="0.35"/>
  <path d="M316 176 L316 354" stroke="#ffffff" stroke-width="2.6" opacity="0.55"/>
  <path d="M346 177 L342 352" stroke="#0d0a06" stroke-width="1.3" opacity="0.35"/>
  <path d="M374 178 L364 344" stroke="#ffffff" stroke-width="2" opacity="0.5"/>
</g>
<g opacity="0.32" stroke="#f4f1e6" stroke-width="1.1">
  <path d="M236 214 L396 214"/><path d="M240 250 L392 250"/><path d="M246 286 L386 286"/>
</g>

<!-- the wine that is left, and the sediment under it -->
<path d="M250 286 L382 286 L372 322 Q 356 344 316 346 Q 276 344 260 322 Z" fill="url(#ev1g-wine)"/>
<ellipse cx="316" cy="288" rx="66" ry="11" fill="#5d1a14"/>
<ellipse cx="316" cy="288" rx="66" ry="11" fill="none" stroke="#8f2c22" stroke-width="1.4" opacity="0.7"/>
<ellipse cx="300" cy="286" rx="20" ry="4" fill="#a8493c" opacity="0.45"/>
<path d="M268 330 Q 316 348 366 330 Q 340 344 316 344 Q 292 344 268 330 Z" fill="url(#ev1g-sed)"/>
<g fill="#9fb063" opacity="0.85">
  <ellipse cx="298" cy="337" rx="7" ry="2.6"/><ellipse cx="322" cy="340" rx="9" ry="3"/>
  <ellipse cx="344" cy="335" rx="6" ry="2.2"/><ellipse cx="310" cy="333" rx="4" ry="1.6"/>
</g>
<!-- a tidemark where the level stood, and one run down the inside wall -->
<path d="M252 268 Q 316 280 380 268" fill="none" stroke="#6d2018" stroke-width="2" opacity="0.5"/>
<path d="M290 268 Q 286 292 292 312" fill="none" stroke="#5d1a14" stroke-width="3" opacity="0.55" stroke-linecap="round"/>

<!-- rim, and the specular the lamp puts on the glass -->
<ellipse cx="316" cy="176" rx="84" ry="16" fill="none" stroke="#f6f3e8" stroke-width="3" opacity="0.62"/>
<ellipse cx="316" cy="176" rx="84" ry="16" fill="#e9e5d8" opacity="0.08"/>
<path d="M256 190 Q 246 250 262 306" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.30" stroke-linecap="round"/>
<path d="M372 194 Q 382 246 368 296" fill="none" stroke="#ffffff" stroke-width="3.4" opacity="0.20" stroke-linecap="round"/>
<ellipse cx="268" cy="206" rx="9" ry="17" fill="#ffffff" opacity="0.34"/>

<!-- a fingerprint smudge, because someone held it -->
<g opacity="0.16" fill="none" stroke="#f0ece0" stroke-width="1.1">
  <path d="M344 232 q 10 8 0 17"/><path d="M350 228 q 15 12 0 25"/><path d="M356 224 q 20 16 0 33"/>
</g>

<rect width="640" height="520" fill="url(#ev1g-vig)"/>
`,
  },

  /* Edmund where he fell: pallid face, stained lips, the greenish crust at the
     mouth corner, one hand still clawed into his own shirtfront. */
  c1_body: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-body-floor" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#6b4c2c"/><stop offset="0.45" stop-color="#452f1a"/><stop offset="1" stop-color="#1a1109"/>
  </linearGradient>
  <radialGradient id="ev1-body-pool" cx="0.28" cy="0.16" r="0.85">
    <stop offset="0" stop-color="#f0c87e" stop-opacity="0.3"/><stop offset="1" stop-color="#f0c87e" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-body-skin" x1="0.1" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#e8d6bc"/><stop offset="0.38" stop-color="#c9ae90"/><stop offset="0.75" stop-color="#94795e"/><stop offset="1" stop-color="#5e4834"/>
  </linearGradient>
  <linearGradient id="ev1-body-shirt" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fbf7ea"/><stop offset="0.5" stop-color="#ded7c4"/><stop offset="1" stop-color="#8b8473"/>
  </linearGradient>
  <linearGradient id="ev1-body-coat" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#302c28"/><stop offset="1" stop-color="#0a0908"/>
  </linearGradient>
  <linearGradient id="ev1-body-stain" x1="0" y1="0" x2="0.6" y2="1">
    <stop offset="0" stop-color="#5e1d16"/><stop offset="0.55" stop-color="#3a100c"/><stop offset="1" stop-color="#1b0706"/>
  </linearGradient>
  <filter id="ev1-body-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="10"/></filter>
  <radialGradient id="ev1-body-vig" cx="0.42" cy="0.4" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-body-floor)"/>
<rect width="640" height="520" fill="url(#ev1-body-pool)"/>
<!-- parquet, waxed and scuffed -->
<g stroke="#170e07" stroke-width="5" opacity="0.7">
  <path d="M-10 96 L650 4"/><path d="M-10 226 L650 134"/><path d="M-10 356 L650 264"/><path d="M-10 486 L650 394"/>
</g>
<g stroke="#8a6338" stroke-width="1.6" opacity="0.28">
  <path d="M-10 104 L650 12"/><path d="M-10 234 L650 142"/><path d="M-10 364 L650 272"/><path d="M-10 494 L650 402"/>
</g>
<g fill="none" stroke="#2a1b0d" stroke-width="1.6" opacity="0.4">
  <path d="M-10 150 Q 160 138 330 128 Q 500 118 650 104"/>
  <path d="M-10 300 Q 180 286 350 274 Q 510 264 650 252"/>
  <path d="M-10 430 Q 170 418 340 406 Q 500 396 650 384"/>
  <path d="M-10 60 Q 200 46 380 32"/>
</g>
<g fill="none" stroke="#c9a06a" stroke-width="2" opacity="0.14">
  <path d="M40 190 Q 220 176 400 162"/><path d="M120 470 Q 300 456 480 442"/>
</g>
<g fill="#e8d9b8" opacity="0.13">
  <circle cx="72" cy="176" r="2.4"/><circle cx="586" cy="446" r="2"/><circle cx="520" cy="120" r="1.8"/>
  <circle cx="96" cy="420" r="1.6"/><circle cx="392" cy="470" r="2.2"/><circle cx="606" cy="230" r="1.5"/>
</g>

<!-- the dark bitter matter that came out of him, spread thin on the boards -->
<path d="M-10 264 Q 30 250 62 262 Q 88 250 110 274 Q 146 286 160 320 Q 190 340 174 372 Q 176 402 142 408 Q 118 428 84 414 Q 46 424 26 400 Q -2 396 -10 372 Z" fill="url(#ev1-body-stain)" opacity="0.94"/>
<path d="M-10 300 Q 40 288 84 306 Q 128 324 148 356" fill="none" stroke="#8a3222" stroke-width="3" opacity="0.35"/>
<path d="M20 292 Q 76 300 122 336" fill="none" stroke="#c07a58" stroke-width="5" opacity="0.3" stroke-linecap="round"/>
<path d="M30 296 Q 78 306 116 336" fill="none" stroke="#e5b28c" stroke-width="2" opacity="0.35" stroke-linecap="round"/>
<path d="M-10 262 Q 44 246 96 268 Q 150 288 176 330" fill="none" stroke="#71261a" stroke-width="3" opacity="0.5"/>
<g fill="#2a0b08" opacity="0.85">
  <ellipse cx="206" cy="316" rx="5" ry="3" transform="rotate(24 206 316)"/>
  <ellipse cx="222" cy="386" rx="4" ry="2.4" transform="rotate(24 222 386)"/>
  <ellipse cx="66" cy="470" rx="5" ry="3" transform="rotate(24 66 470)"/>
  <ellipse cx="14" cy="452" rx="7" ry="4" transform="rotate(24 14 452)"/>
  <ellipse cx="176" cy="284" rx="4" ry="2.4"/>
  <ellipse cx="196" cy="352" rx="12" ry="6" transform="rotate(24 196 352)"/>
  <ellipse cx="184" cy="404" rx="8" ry="4.4" transform="rotate(24 184 404)"/>
  <ellipse cx="152" cy="436" rx="14" ry="7" transform="rotate(24 152 436)"/>
  <ellipse cx="96" cy="450" rx="8" ry="4" transform="rotate(24 96 450)"/>
  <ellipse cx="40" cy="238" rx="10" ry="5" transform="rotate(-12 40 238)"/>
</g>
<!-- the greenish crust, dried at the rim -->
<path d="M118 282 Q 156 304 176 336 Q 190 360 184 380 Q 182 356 164 336 Q 142 306 110 290 Z" fill="#77813f" opacity="0.7"/>
<path d="M-10 384 Q 34 410 82 414 Q 122 416 148 402 Q 118 428 74 424 Q 26 418 -10 396 Z" fill="#6d7739" opacity="0.5"/>
<g fill="#59622e" opacity="0.9">
  <circle cx="140" cy="306" r="2.8"/><circle cx="166" cy="340" r="2.2"/><circle cx="178" cy="368" r="2.4"/>
  <circle cx="60" cy="410" r="2.2"/><circle cx="104" cy="418" r="1.8"/><circle cx="24" cy="396" r="2"/>
</g>
<g fill="#98a35a" opacity="0.55">
  <circle cx="152" cy="318" r="2"/><circle cx="86" cy="414" r="1.7"/><circle cx="172" cy="356" r="1.5"/><circle cx="38" cy="402" r="2.2"/>
</g>

<!-- the shoulder, out of the lamplight -->
<path d="M470 -10 Q 560 40 640 30 L640 -10 Z" fill="url(#ev1-body-coat)"/>
<!-- cast shadow of the arm and hand -->
<g filter="url(#ev1-body-soft)" opacity="0.6">
  <ellipse cx="330" cy="330" rx="120" ry="80" fill="#000"/>
  <ellipse cx="220" cy="356" rx="80" ry="46" fill="#000"/>
  <ellipse cx="500" cy="180" rx="110" ry="56" fill="#000"/>
</g>

<!-- sleeve of the dinner jacket -->
<path d="M640 44 L640 258 Q 520 268 434 238 Q 400 214 412 168 Q 470 96 640 44 Z" fill="url(#ev1-body-coat)"/>
<path d="M626 66 Q 520 106 452 168" fill="none" stroke="#4a443c" stroke-width="7" opacity="0.35"/>
<path d="M640 214 Q 540 240 452 224" fill="none" stroke="#4a443c" stroke-width="5" opacity="0.25"/>
<!-- shirt cuff -->
<path d="M424 156 Q 386 190 392 236 Q 420 258 458 254 Q 440 206 468 166 Z" fill="url(#ev1-body-shirt)"/>
<path d="M424 156 Q 392 188 396 232 Q 404 240 414 244 Q 404 198 434 162 Z" fill="#fdfaf0" opacity="0.6"/>
<path d="M392 236 Q 420 258 458 254 Q 424 252 400 232 Z" fill="#7e7767" opacity="0.6"/>
<ellipse cx="410" cy="200" rx="10" ry="9" fill="#b8912f"/>
<ellipse cx="407" cy="196" rx="4.6" ry="3.6" fill="#f6e6ab" opacity="0.9"/>
<ellipse cx="414" cy="206" rx="6" ry="4" fill="#4b3a12" opacity="0.5"/>

<!-- the hand, fallen on its side, fingers still clawed -->
<path d="M396 200 Q 356 190 314 200 Q 268 214 250 250 L238 300 Q 244 348 288 362 Q 344 374 386 340 Q 412 304 404 254 Z" fill="url(#ev1-body-skin)"/>
<path d="M404 254 Q 412 304 386 340 Q 356 366 314 366 Q 366 356 384 314 Q 396 276 388 234 Z" fill="#4e3a28" opacity="0.5"/>
<path d="M330 202 Q 288 212 264 240 Q 250 262 250 284 Q 258 246 292 224 Q 320 208 348 206 Z" fill="#f6ead6" opacity="0.35"/>
<g fill="none" stroke="#7d6247" stroke-width="2.6" opacity="0.4">
  <path d="M330 214 Q 322 260 330 306"/><path d="M356 214 Q 350 258 358 300"/><path d="M382 220 Q 378 258 384 294"/>
</g>
<!-- shadow the fingers sit in -->
<path d="M262 232 Q 200 258 168 306 Q 146 350 168 400 L246 404 Q 232 330 268 276 Z" fill="#241708" opacity="0.55"/>
<!-- four curled fingers -->
<g>
  <path d="M272 214 Q 212 222 172 252 Q 136 278 146 314 Q 160 342 194 332 Q 218 318 206 294 Q 204 266 236 250 Q 266 238 284 248 Z" fill="url(#ev1-body-skin)"/>
  <path d="M274 222 Q 218 230 180 258 Q 150 280 154 306" fill="none" stroke="#f7ecd8" stroke-width="6" opacity="0.45"/>
  <path d="M284 250 Q 258 240 232 252 Q 204 268 204 294" fill="none" stroke="#5a4530" stroke-width="5" opacity="0.5"/>
  <path d="M232 236 Q 240 258 230 274" fill="none" stroke="#6e5539" stroke-width="3" opacity="0.45"/>
  <path d="M182 268 Q 194 288 184 306" fill="none" stroke="#6e5539" stroke-width="2.6" opacity="0.4"/>
  <ellipse cx="168" cy="320" rx="15" ry="11" fill="#bfb1a2" transform="rotate(42 168 320)"/>
  <ellipse cx="166" cy="318" rx="10" ry="7" fill="#9b8f8a" transform="rotate(42 166 318)"/>
</g>
<g>
  <path d="M262 260 Q 206 270 168 298 Q 134 324 146 360 Q 160 388 194 376 Q 216 362 204 338 Q 202 312 234 296 Q 262 286 278 296 Z" fill="url(#ev1-body-skin)"/>
  <path d="M264 268 Q 212 278 176 304 Q 148 326 154 352" fill="none" stroke="#f7ecd8" stroke-width="5.6" opacity="0.4"/>
  <path d="M278 296 Q 254 288 230 298 Q 204 314 204 338" fill="none" stroke="#5a4530" stroke-width="5" opacity="0.5"/>
  <path d="M228 282 Q 236 304 226 320" fill="none" stroke="#6e5539" stroke-width="2.8" opacity="0.4"/>
  <ellipse cx="168" cy="364" rx="14" ry="10" fill="#b7a99b" transform="rotate(42 168 364)"/>
  <ellipse cx="166" cy="362" rx="9.4" ry="6.4" fill="#958a86" transform="rotate(42 166 362)"/>
</g>
<g>
  <path d="M266 304 Q 216 316 184 340 Q 154 362 166 394 Q 180 418 210 406 Q 230 392 218 372 Q 216 350 244 336 Q 268 328 282 338 Z" fill="#c2ad92"/>
  <path d="M268 312 Q 222 324 192 346 Q 168 364 172 388" fill="none" stroke="#eee0ca" stroke-width="5" opacity="0.33"/>
  <path d="M282 338 Q 260 330 240 338 Q 218 352 218 372" fill="none" stroke="#513d29" stroke-width="4.6" opacity="0.5"/>
  <ellipse cx="190" cy="398" rx="13" ry="9.4" fill="#ad9f91" transform="rotate(42 190 398)"/>
  <ellipse cx="188" cy="396" rx="8.6" ry="6" fill="#8c827e" transform="rotate(42 188 396)"/>
</g>
<g>
  <path d="M282 342 Q 242 354 216 374 Q 190 394 202 420 Q 216 440 240 428 Q 256 416 246 398 Q 246 380 268 370 Q 288 364 298 374 Z" fill="#ab937a"/>
  <path d="M284 350 Q 248 362 224 380 Q 206 394 210 414" fill="none" stroke="#e4d5be" stroke-width="4.4" opacity="0.28"/>
  <ellipse cx="222" cy="428" rx="11" ry="8" fill="#a2948a" transform="rotate(42 222 428)"/>
  <ellipse cx="220" cy="426" rx="7" ry="5" fill="#847b78" transform="rotate(42 220 426)"/>
</g>
<!-- thumb, fallen back against the boards -->
<path d="M310 200 Q 274 186 240 190 Q 210 196 200 216 Q 196 234 214 238 Q 232 238 238 222 Q 250 208 278 210 Q 300 212 312 218 Z" fill="url(#ev1-body-skin)"/>
<path d="M310 200 Q 276 188 244 192 Q 216 198 206 214" fill="none" stroke="#f7ecd8" stroke-width="4.4" opacity="0.45"/>
<path d="M312 218 Q 292 210 272 210 Q 246 212 238 224" fill="none" stroke="#5a4530" stroke-width="3.6" opacity="0.5"/>
<ellipse cx="207" cy="226" rx="13" ry="10" fill="#bdafa1" transform="rotate(-8 207 226)"/>
<ellipse cx="206" cy="224" rx="9" ry="6.4" fill="#9b8f8a" transform="rotate(-8 206 224)"/>
<!-- signet ring, and the small shadows the fingertips press out -->
<path d="M356 200 Q 344 236 356 274 L370 270 Q 360 234 370 202 Z" fill="#a8801f"/>
<path d="M357 204 Q 347 236 357 268" fill="none" stroke="#f4dd9c" stroke-width="2.6" opacity="0.75"/>
<ellipse cx="364" cy="236" rx="6" ry="11" fill="#6b5316" opacity="0.8"/>
<ellipse cx="362" cy="228" rx="3" ry="4" fill="#d8b44e" opacity="0.5"/>
<g fill="#1c1207" opacity="0.5">
  <ellipse cx="176" cy="324" rx="20" ry="8" transform="rotate(38 176 324)"/>
  <ellipse cx="178" cy="366" rx="19" ry="8" transform="rotate(38 178 366)"/>
  <ellipse cx="198" cy="400" rx="17" ry="7" transform="rotate(38 198 400)"/>
  <ellipse cx="234" cy="426" rx="15" ry="6" transform="rotate(38 234 426)"/>
</g>

<!-- the napkin he took down with him -->
<path d="M436 520 L508 436 L582 428 L640 470 L640 520 Z" fill="url(#ev1-body-shirt)"/>
<path d="M436 520 L508 436 L582 428 L640 470 L640 520 Z" fill="#1a1109" opacity="0.42"/>
<path d="M508 436 L544 470 L520 520 L462 520 Z" fill="#fdfaf0" opacity="0.55"/>
<path d="M582 428 L556 476 L586 520 L640 520 L640 470 Z" fill="#a9a290" opacity="0.45"/>
<path d="M544 470 L586 520" fill="none" stroke="#7e7767" stroke-width="2.6" opacity="0.55"/>
<path d="M508 436 L544 470 L582 428" fill="none" stroke="#fdfaf0" stroke-width="3.4" opacity="0.6"/>
<path d="M436 520 L508 436" fill="none" stroke="#fdfaf0" stroke-width="2.6" opacity="0.45"/>
<g stroke="#a9a290" stroke-width="1.3" opacity="0.5" fill="none">
  <path d="M470 500 L616 442"/><path d="M482 486 L610 434"/>
</g>

<rect width="640" height="520" fill="url(#ev1-body-vig)"/>
`,
  },

  /* The small brass desk key from the waistcoat pocket: worn bow, engraved
     cartouche, and thirty years of pocket polish. */
  c1_key: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-key-wood" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#4a3320"/><stop offset="0.55" stop-color="#2e2013"/><stop offset="1" stop-color="#150e08"/>
  </linearGradient>
  <radialGradient id="ev1-key-pool" cx="0.3" cy="0.2" r="0.8">
    <stop offset="0" stop-color="#f2cf80" stop-opacity="0.3"/><stop offset="1" stop-color="#f2cf80" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-key-brass" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#f6e3a4"/><stop offset="0.24" stop-color="#c99f45"/><stop offset="0.55" stop-color="#8a6321"/>
    <stop offset="0.8" stop-color="#5d4014"/><stop offset="1" stop-color="#9c7530"/>
  </linearGradient>
  <linearGradient id="ev1-key-shaft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#ffeeb6"/><stop offset="0.2" stop-color="#d0a749"/><stop offset="0.62" stop-color="#6d4c19"/>
    <stop offset="1" stop-color="#a67e33"/>
  </linearGradient>
  <linearGradient id="ev1-key-bit" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#e2c072"/><stop offset="0.6" stop-color="#7d5a1e"/><stop offset="1" stop-color="#4b3410"/>
  </linearGradient>
  <filter id="ev1-key-soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>
  <radialGradient id="ev1-key-vig" cx="0.45" cy="0.45" r="0.72">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-key-wood)"/>
<rect width="640" height="520" fill="url(#ev1-key-pool)"/>
<!-- desk grain -->
<g fill="none" stroke="#120c06" stroke-width="2.2" opacity="0.55">
  <path d="M0 62 Q 200 44 400 66 Q 540 82 640 68"/>
  <path d="M0 140 Q 230 116 420 142 Q 550 160 640 144"/>
  <path d="M0 252 Q 180 232 380 254 Q 530 270 640 250"/>
  <path d="M0 366 Q 220 344 410 368 Q 540 384 640 366"/>
  <path d="M0 470 Q 200 450 400 474 Q 540 490 640 470"/>
</g>
<g fill="none" stroke="#6b4b2b" stroke-width="1" opacity="0.3">
  <path d="M0 74 Q 210 56 410 78 Q 545 94 640 80"/>
  <path d="M0 264 Q 190 244 390 266 Q 535 282 640 262"/>
  <path d="M0 380 Q 220 358 410 382 Q 545 398 640 380"/>
</g>
<ellipse cx="470" cy="150" rx="48" ry="16" fill="#0f0a05" opacity="0.35"/>
<ellipse cx="470" cy="150" rx="30" ry="9" fill="#0f0a05" opacity="0.35"/>
<!-- dust -->
<g fill="#d8c9a8" opacity="0.16">
  <circle cx="96" cy="418" r="2.4"/><circle cx="150" cy="452" r="1.6"/><circle cx="520" cy="392" r="2.2"/>
  <circle cx="560" cy="440" r="1.4"/><circle cx="80" cy="126" r="1.8"/><circle cx="556" cy="120" r="2"/>
  <circle cx="300" cy="470" r="1.6"/><circle cx="212" cy="106" r="1.5"/>
</g>

<g transform="rotate(-9 320 280)">
  <!-- cast shadow -->
  <g transform="translate(14 18)" opacity="0.62" filter="url(#ev1-key-soft)">
    <ellipse cx="196" cy="280" rx="86" ry="80" fill="#000"/>
    <rect x="248" y="252" width="200" height="56" rx="20" fill="#000"/>
    <rect x="398" y="252" width="76" height="122" rx="10" fill="#000"/>
  </g>

  <!-- bow -->
  <path d="M196 196 Q 278 202 282 280 Q 278 358 196 364 Q 116 358 112 280 Q 116 202 196 196 Z" fill="url(#ev1-key-brass)"/>
  <path d="M196 202 Q 272 208 276 280 Q 272 352 196 358 Q 122 352 118 280 Q 122 208 196 202 Z" fill="none" stroke="#ffeeb8" stroke-width="2.6" opacity="0.45"/>
  <path d="M196 208 Q 246 214 258 250 Q 216 226 168 236 Q 132 248 126 286 Q 118 236 196 208 Z" fill="#ffeab0" opacity="0.4"/>
  <path d="M150 344 Q 216 366 268 322 Q 250 358 196 360 Q 164 358 150 344 Z" fill="#3d2a0c" opacity="0.55"/>
  <ellipse cx="196" cy="240" rx="30" ry="24" fill="#100b05"/>
  <ellipse cx="196" cy="240" rx="30" ry="24" fill="none" stroke="#6d4d17" stroke-width="3"/>
  <path d="M172 228 Q 196 216 220 228" fill="none" stroke="#ffe9ae" stroke-width="3" opacity="0.7"/>
  <path d="M176 254 Q 196 264 218 254" fill="none" stroke="#2a1c08" stroke-width="3" opacity="0.7"/>
  <!-- engraved cartouche, worn nearly smooth -->
  <ellipse cx="196" cy="308" rx="52" ry="28" fill="none" stroke="#4a340f" stroke-width="2.6" opacity="0.85"/>
  <ellipse cx="196" cy="306" rx="52" ry="28" fill="none" stroke="#ffe6a6" stroke-width="1.4" opacity="0.4"/>
  <g stroke="#3c2a0b" stroke-width="3" opacity="0.7" stroke-linecap="round" fill="none">
    <path d="M172 296 L166 320"/><path d="M182 298 L188 316"/><path d="M206 296 L204 320"/><path d="M218 300 L226 316"/>
  </g>
  <g stroke="#ffe9b4" stroke-width="1.2" opacity="0.35" stroke-linecap="round" fill="none">
    <path d="M171 294 L165 318"/><path d="M205 294 L203 318"/>
  </g>
  <!-- collar and shaft -->
  <rect x="272" y="248" width="26" height="66" rx="8" fill="url(#ev1-key-brass)"/>
  <rect x="274" y="250" width="8" height="60" rx="4" fill="#ffe7ac" opacity="0.55"/>
  <rect x="292" y="250" width="6" height="60" rx="3" fill="#2c1e08" opacity="0.5"/>
  <rect x="296" y="258" width="132" height="46" rx="16" fill="url(#ev1-key-shaft)"/>
  <rect x="300" y="264" width="122" height="8" rx="4" fill="#fff2c4" opacity="0.72"/>
  <rect x="300" y="294" width="122" height="6" rx="3" fill="#2a1c07" opacity="0.5"/>
  <rect x="404" y="252" width="22" height="60" rx="7" fill="url(#ev1-key-brass)"/>
  <rect x="406" y="256" width="7" height="52" rx="3" fill="#ffe7ac" opacity="0.5"/>
  <!-- bit with ward cuts -->
  <path d="M418 252 L470 252 L470 386 L440 386 L440 356 L418 356 L418 330 L446 330 L446 304 L418 304 Z" fill="url(#ev1-key-bit)"/>
  <path d="M420 254 L466 254 L466 268 L420 268 Z" fill="#ffeab4" opacity="0.5"/>
  <path d="M462 258 L462 382" fill="none" stroke="#fff0bc" stroke-width="3" opacity="0.55"/>
  <path d="M424 306 L444 306 M424 332 L444 332" stroke="#2b1d07" stroke-width="3" opacity="0.55"/>
  <path d="M440 356 L440 384 L468 384" fill="none" stroke="#2b1d07" stroke-width="3" opacity="0.5"/>
  <!-- wear: scratches, and a thumb smudge on the bow -->
  <g stroke="#fff4cf" stroke-width="1.2" opacity="0.4" fill="none">
    <path d="M318 276 L364 270"/><path d="M336 288 L390 284"/><path d="M144 268 L168 254"/><path d="M232 322 L256 336"/>
  </g>
  <g stroke="#3a280a" stroke-width="1" opacity="0.5" fill="none">
    <path d="M310 286 L358 280"/><path d="M156 306 L184 330"/>
  </g>
  <g opacity="0.2" fill="none" stroke="#fff6dc" stroke-width="1.3">
    <path d="M236 262 q 12 12 -2 24"/><path d="M244 254 q 20 20 -2 40"/><path d="M252 246 q 26 28 -2 54"/>
  </g>
</g>

<rect width="640" height="520" fill="url(#ev1-key-vig)"/>
`,
  },

  /* The draft Edmund threw in the fire and the fire did not finish: charred
     top edge, his hand in ink, one line struck through. */
  c1_letter: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-let-bg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1a1512"/><stop offset="1" stop-color="#080606"/>
  </linearGradient>
  <radialGradient id="ev1-let-pool" cx="0.32" cy="0.16" r="0.85">
    <stop offset="0" stop-color="#e9c27a" stop-opacity="0.22"/><stop offset="1" stop-color="#e9c27a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-let-ash" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6d675e"/><stop offset="0.5" stop-color="#413b35"/><stop offset="1" stop-color="#1d1917"/>
  </linearGradient>
  <linearGradient id="ev1-let-paper" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#efe6cd"/><stop offset="0.42" stop-color="#ddd0b0"/><stop offset="1" stop-color="#9c8f74"/>
  </linearGradient>
  <linearGradient id="ev1-let-char" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#100c0a"/><stop offset="0.45" stop-color="#3b2415"/><stop offset="1" stop-color="#8f7245" stop-opacity="0"/>
  </linearGradient>
  <filter id="ev1-let-soft" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-let-vig" cx="0.46" cy="0.46" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-let-bg)"/>
<rect width="640" height="520" fill="url(#ev1-let-pool)"/>
<!-- bed of cold ash and cinders in the grate -->
<path d="M0 232 Q 180 206 340 230 Q 500 252 640 222 L640 520 L0 520 Z" fill="url(#ev1-let-ash)"/>
<g fill="#0d0a09" opacity="0.85">
  <path d="M40 468 q 30 -22 60 -6 q 12 20 -16 28 q -38 4 -44 -22 z"/>
  <path d="M516 448 q 32 -22 62 -2 q 8 22 -20 28 q -38 2 -42 -26 z"/>
  <path d="M410 496 q 24 -16 48 -2 q 6 16 -16 22 q -30 2 -32 -20 z"/>
  <path d="M96 296 q 20 -14 36 -2 q 4 14 -12 18 q -24 2 -24 -16 z"/>
  <path d="M262 462 q 18 -12 34 -2 q 4 12 -12 16 q -22 2 -22 -14 z"/>
</g>
<g fill="#6e6459" opacity="0.5">
  <ellipse cx="150" cy="446" rx="52" ry="12"/><ellipse cx="478" cy="418" rx="56" ry="13"/>
  <ellipse cx="316" cy="498" rx="66" ry="14"/><ellipse cx="66" cy="356" rx="44" ry="11"/>
</g>
<g fill="#cdc4b4" opacity="0.2">
  <circle cx="188" cy="470" r="2.4"/><circle cx="396" cy="450" r="1.9"/><circle cx="560" cy="394" r="2.2"/>
  <circle cx="78" cy="408" r="1.8"/><circle cx="342" cy="332" r="1.6"/><circle cx="602" cy="472" r="2"/>
  <circle cx="240" cy="428" r="1.4"/><circle cx="452" cy="482" r="1.7"/>
</g>
<!-- grate bars -->
<g stroke="#0b0908" stroke-width="15" opacity="0.75" stroke-linecap="round">
  <path d="M-10 302 Q 320 270 650 298"/><path d="M-10 388 Q 320 356 650 382"/>
</g>
<g stroke="#5d554c" stroke-width="3" opacity="0.5">
  <path d="M-10 295 Q 320 263 650 291"/><path d="M-10 381 Q 320 349 650 375"/>
</g>

<ellipse cx="330" cy="418" rx="228" ry="46" fill="#000" opacity="0.55" filter="url(#ev1-let-soft)"/>

<g transform="rotate(-4 320 300)">
  <!-- what the fire left of the page -->
  <path d="M92 186 Q 118 152 140 176 Q 160 140 186 168 Q 204 196 228 174 Q 246 142 272 166 Q 292 190 314 164 Q 336 134 358 162 Q 380 190 404 168 Q 426 140 452 170 Q 474 196 496 172 Q 512 154 524 176 L536 408 Q 470 400 410 412 L318 404 Q 214 416 112 402 Z" fill="url(#ev1-let-paper)"/>
  <path d="M92 186 Q 118 152 140 176 Q 160 140 186 168 Q 204 196 228 174 Q 246 142 272 166 Q 292 190 314 164 Q 336 134 358 162 Q 380 190 404 168 Q 426 140 452 170 Q 474 196 496 172 Q 512 154 524 176 L528 236 Q 486 220 458 234 Q 420 214 384 232 Q 348 210 312 230 Q 276 208 240 230 Q 202 208 168 230 Q 132 212 100 228 Z" fill="url(#ev1-let-char)"/>
  <path d="M92 186 Q 118 152 140 176 Q 160 140 186 168 Q 204 196 228 174 Q 246 142 272 166 Q 292 190 314 164 Q 336 134 358 162 Q 380 190 404 168 Q 426 140 452 170 Q 474 196 496 172 Q 512 154 524 176" fill="none" stroke="#0a0705" stroke-width="8" stroke-linejoin="round"/>
  <path d="M98 192 Q 120 162 138 182 Q 162 148 186 176 Q 206 200 228 182 Q 250 150 272 174 Q 294 196 314 172 Q 338 144 358 170 Q 382 196 404 176 Q 428 150 452 178 Q 476 200 494 180 Q 512 164 520 184" fill="none" stroke="#5c3a1a" stroke-width="3.4" opacity="0.75"/>
  <g fill="#1a1008" opacity="0.8">
    <ellipse cx="206" cy="196" rx="13" ry="8" transform="rotate(-14 206 196)"/>
    <ellipse cx="346" cy="188" rx="10" ry="6" transform="rotate(10 346 188)"/>
    <ellipse cx="466" cy="200" rx="14" ry="7" transform="rotate(-8 466 200)"/>
  </g>
  <!-- fibre flecks, foxing, a tea ring -->
  <g fill="#8d7a58" opacity="0.35">
    <circle cx="184" cy="302" r="2"/><circle cx="394" cy="266" r="2.4"/><circle cx="290" cy="370" r="1.8"/>
    <circle cx="456" cy="344" r="2.2"/><circle cx="150" cy="356" r="1.6"/><circle cx="340" cy="302" r="1.4"/>
    <circle cx="228" cy="252" r="1.8"/><circle cx="500" cy="300" r="2"/>
  </g>
  <ellipse cx="452" cy="316" rx="46" ry="28" fill="none" stroke="#a2854f" stroke-width="5" opacity="0.22"/>
  <ellipse cx="184" cy="380" rx="52" ry="20" fill="#a89066" opacity="0.16"/>
  <!-- fold shadow -->
  <path d="M306 172 L318 404" fill="none" stroke="#7b6c50" stroke-width="8" opacity="0.28"/>
  <path d="M298 172 L310 404" fill="none" stroke="#fdf8e8" stroke-width="4" opacity="0.35"/>
  <!-- his hand, in ink -->
  <g fill="none" stroke="#2a2114" stroke-width="3.2" stroke-linecap="round" opacity="0.92">
  <g>
    <path d="M136 238 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0 q 6 7 13 0"/>
    <path d="M204 242 q 6 -11 13 0 q 6 6 13 0"/>
    <path d="M256 238 q 6 -9 13 0 q 6 5 13 0 q 6 -9 13 0 q 6 5 13 0 q 6 -9 13 0"/>
    <path d="M336 242 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0"/>
    <path d="M394 238 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0 q 6 6 13 0"/>
    <path d="M486 242 q 6 -8 13 0 q 6 4 13 0 q 6 -8 13 0"/>
  </g>
  <g>
    <path d="M130 274 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0"/>
    <path d="M190 270 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0"/>
    <path d="M276 274 q 6 -13 13 0 q 6 7 13 0"/>
    <path d="M328 274 q 6 -13 13 0 q 6 7 13 0 q 6 -13 13 0 q 6 7 13 0"/>
    <path d="M400 274 q 6 -14 13 0 q 6 8 13 0 q 6 -14 13 0"/>
    <path d="M458 270 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0"/>
    <path d="M538 274 q 6 -14 13 0 q 6 8 13 0"/>
  </g>
  <g>
    <path d="M128 306 q 6 -10 13 0 q 6 6 13 0 q 6 -10 13 0 q 6 6 13 0"/>
    <path d="M204 306 q 6 -8 13 0 q 6 4 13 0 q 6 -8 13 0"/>
    <path d="M258 302 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0 q 6 7 13 0"/>
    <path d="M326 306 q 6 -8 13 0 q 6 4 13 0 q 6 -8 13 0 q 6 4 13 0 q 6 -8 13 0"/>
    <path d="M410 306 q 6 -11 13 0 q 6 6 13 0"/>
    <path d="M462 302 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0"/>
  </g>
  <g>
    <path d="M126 338 q 6 -10 13 0 q 6 6 13 0 q 6 -10 13 0"/>
    <path d="M190 334 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0"/>
    <path d="M270 334 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0"/>
    <path d="M326 338 q 6 -13 13 0 q 6 7 13 0 q 6 -13 13 0 q 6 7 13 0"/>
    <path d="M398 334 q 6 -11 13 0 q 6 6 13 0"/>
    <path d="M448 338 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0 q 6 7 13 0"/>
  </g>
  <g>
    <path d="M124 368 q 6 -11 13 0 q 6 6 13 0 q 6 -11 13 0 q 6 6 13 0"/>
    <path d="M196 368 q 6 -12 13 0 q 6 7 13 0 q 6 -12 13 0"/>
    <path d="M254 368 q 6 -8 13 0 q 6 4 13 0 q 6 -8 13 0 q 6 4 13 0 q 6 -8 13 0"/>
    <path d="M338 368 q 6 -11 13 0 q 6 6 13 0"/>
  </g>
  </g>
  <g fill="none" stroke="#2a2114" stroke-width="2.6" stroke-linecap="round" opacity="0.85">
    <path d="M168 236 q 3 -22 -2 -30"/><path d="M286 264 q 4 -24 -2 -32"/><path d="M212 302 q -3 22 4 30"/>
    <path d="M404 330 q 4 -22 -2 -28"/><path d="M250 366 q -4 20 3 26"/><path d="M330 268 q 3 -20 -2 -26"/>
  </g>
  <!-- one line struck out, hard -->
  <path d="M126 306 Q 260 300 402 302" fill="none" stroke="#241c11" stroke-width="4.4" opacity="0.9"/>
  <path d="M130 312 Q 262 306 398 308" fill="none" stroke="#241c11" stroke-width="2" opacity="0.5"/>
  <!-- ink blot and a run -->
  <ellipse cx="462" cy="376" rx="14" ry="10" fill="#241c11" opacity="0.88"/>
  <ellipse cx="458" cy="373" rx="5" ry="3" fill="#6a5c40" opacity="0.4"/>
  <path d="M462 384 q 5 17 -2 27" fill="none" stroke="#241c11" stroke-width="3" opacity="0.6"/>
  <!-- torn lower edge, curled corner, soot smear -->
  <path d="M536 408 Q 504 388 476 402 Q 508 416 536 408 Z" fill="#cbbd99"/>
  <path d="M112 402 Q 214 418 318 404 Q 410 414 536 408" fill="none" stroke="#7d6f55" stroke-width="2.6" opacity="0.6"/>
  <path d="M112 398 Q 214 412 318 398 Q 410 408 536 402" fill="none" stroke="#fdf8e8" stroke-width="1.6" opacity="0.5"/>
  <path d="M154 390 Q 254 366 366 388" fill="none" stroke="#2b241e" stroke-width="18" opacity="0.14"/>
  <path d="M470 236 Q 466 300 476 366" fill="none" stroke="#fdf8e8" stroke-width="3" opacity="0.3"/>
</g>

<rect width="640" height="520" fill="url(#ev1-let-vig)"/>
`,
  },

  /* The telegram from the county records office: buff form, gummed tape strips
     of type pasted in rows, one thumbprint in the margin. */
  c1_telegram: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-tel-desk" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#3d2b1a"/><stop offset="0.6" stop-color="#241a10"/><stop offset="1" stop-color="#100b07"/>
  </linearGradient>
  <radialGradient id="ev1-tel-pool" cx="0.28" cy="0.16" r="0.85">
    <stop offset="0" stop-color="#f0cc86" stop-opacity="0.26"/><stop offset="1" stop-color="#f0cc86" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-tel-form" x1="0.08" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f2e6c4"/><stop offset="0.4" stop-color="#e2d3ab"/><stop offset="1" stop-color="#9d9070"/>
  </linearGradient>
  <linearGradient id="ev1-tel-tape" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fbf6e8"/><stop offset="0.55" stop-color="#eae2cc"/><stop offset="1" stop-color="#bdb497"/>
  </linearGradient>
  <filter id="ev1-tel-soft" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur stdDeviation="7"/></filter>
  <radialGradient id="ev1-tel-vig" cx="0.46" cy="0.44" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-tel-desk)"/>
<rect width="640" height="520" fill="url(#ev1-tel-pool)"/>
<g fill="none" stroke="#120c07" stroke-width="2" opacity="0.5">
  <path d="M0 46 Q 220 26 420 48 Q 550 62 640 46"/>
  <path d="M0 168 Q 210 148 400 170 Q 540 184 640 166"/>
  <path d="M0 300 Q 220 280 410 302 Q 545 316 640 300"/>
  <path d="M0 436 Q 200 416 400 438 Q 540 452 640 436"/>
  <path d="M0 500 Q 210 482 410 502"/>
</g>
<g fill="#cbb98f" opacity="0.13">
  <circle cx="62" cy="466" r="2.2"/><circle cx="588" cy="88" r="2"/><circle cx="592" cy="452" r="1.8"/><circle cx="46" cy="120" r="1.6"/>
</g>

<ellipse cx="330" cy="422" rx="252" ry="44" fill="#000" opacity="0.6" filter="url(#ev1-tel-soft)"/>

<g transform="rotate(-3 320 268)">
  <!-- the form -->
  <path d="M74 96 L566 84 L572 424 Q 460 434 316 428 Q 180 434 80 424 Z" fill="url(#ev1-tel-form)"/>
  <path d="M74 96 L566 84 L568 112 L74 124 Z" fill="#cbb98d" opacity="0.55"/>
  <!-- printed rules of the form -->
  <g stroke="#7c6d4c" stroke-width="2.6" opacity="0.8" fill="none">
    <path d="M92 140 L548 130"/><path d="M92 148 L548 138"/>
  </g>
  <g stroke="#8d7f5e" stroke-width="1.4" opacity="0.6" fill="none">
    <path d="M92 176 L300 172"/><path d="M92 200 L300 196"/>
    <path d="M348 176 L548 170"/><path d="M348 200 L548 194"/>
    <path d="M92 392 L548 380"/>
  </g>
  <rect x="416" y="102" width="128" height="52" fill="none" stroke="#7c6d4c" stroke-width="2" opacity="0.7"/>
  <circle cx="118" cy="116" r="18" fill="none" stroke="#7c6d4c" stroke-width="2.4" opacity="0.75"/>
  <circle cx="118" cy="116" r="10" fill="none" stroke="#7c6d4c" stroke-width="1.6" opacity="0.6"/>
  <path d="M104 108 L132 124 M132 108 L104 124" stroke="#7c6d4c" stroke-width="1.4" opacity="0.5"/>
  <!-- date stamp, smudged, over the form -->
  <ellipse cx="480" cy="128" rx="52" ry="26" fill="none" stroke="#4c4d76" stroke-width="3" opacity="0.45"/>
  <g stroke="#4c4d76" stroke-width="4" opacity="0.35" stroke-linecap="round">
    <path d="M450 122 L470 122"/><path d="M482 122 L508 122"/><path d="M456 136 L500 136"/>
  </g>
  <!-- gummed tape strips of type -->
  <g>
    <rect x="98" y="222" width="440" height="34" fill="url(#ev1-tel-tape)"/>
    <rect x="98" y="252" width="440" height="6" fill="#9d9578" opacity="0.5"/>
    <rect x="98" y="222" width="440" height="4" fill="#fffdf4" opacity="0.7"/>
    <rect x="106" y="278" width="424" height="34" fill="url(#ev1-tel-tape)"/>
    <rect x="106" y="308" width="424" height="6" fill="#9d9578" opacity="0.5"/>
    <rect x="106" y="278" width="424" height="4" fill="#fffdf4" opacity="0.7"/>
    <rect x="100" y="332" width="330" height="34" fill="url(#ev1-tel-tape)"/>
    <rect x="100" y="362" width="330" height="6" fill="#9d9578" opacity="0.5"/>
    <rect x="100" y="332" width="330" height="4" fill="#fffdf4" opacity="0.7"/>
    <path d="M430 332 l 12 8 l -12 8 l 12 10 l -12 8 z" fill="#e6dcc0"/>
  </g>
  <!-- the typing itself: uneven struck marks, never letters -->
  <g fill="#312a1e" opacity="0.88">
    <rect x="112" y="232" width="9" height="14"/><rect x="126" y="232" width="7" height="14"/><rect x="138" y="232" width="10" height="14"/>
    <rect x="162" y="232" width="8" height="14"/><rect x="175" y="232" width="11" height="14"/><rect x="191" y="232" width="7" height="14"/>
    <rect x="216" y="232" width="10" height="14"/><rect x="231" y="232" width="8" height="14"/><rect x="244" y="232" width="9" height="14"/><rect x="258" y="232" width="7" height="14"/>
    <rect x="284" y="232" width="11" height="14"/><rect x="300" y="232" width="8" height="14"/>
    <rect x="326" y="232" width="9" height="14"/><rect x="340" y="232" width="10" height="14"/><rect x="355" y="232" width="7" height="14"/>
    <rect x="382" y="232" width="8" height="14"/><rect x="395" y="232" width="11" height="14"/><rect x="411" y="232" width="7" height="14"/>
    <rect x="438" y="232" width="10" height="14"/><rect x="453" y="232" width="8" height="14"/><rect x="466" y="232" width="9" height="14"/>
    <rect x="492" y="232" width="7" height="14"/><rect x="504" y="232" width="10" height="14"/>
  </g>
  <g fill="#312a1e" opacity="0.84">
    <rect x="120" y="288" width="10" height="14"/><rect x="135" y="288" width="7" height="14"/><rect x="147" y="288" width="9" height="14"/>
    <rect x="172" y="288" width="8" height="14"/><rect x="185" y="288" width="10" height="14"/>
    <rect x="212" y="288" width="9" height="14"/><rect x="226" y="288" width="7" height="14"/><rect x="238" y="288" width="11" height="14"/><rect x="254" y="288" width="8" height="14"/>
    <rect x="280" y="288" width="10" height="14"/><rect x="295" y="288" width="8" height="14"/>
    <rect x="322" y="288" width="7" height="14"/><rect x="334" y="288" width="11" height="14"/><rect x="350" y="288" width="9" height="14"/>
    <rect x="376" y="288" width="8" height="14"/><rect x="389" y="288" width="10" height="14"/>
    <rect x="416" y="288" width="9" height="14"/><rect x="430" y="288" width="7" height="14"/><rect x="442" y="288" width="10" height="14"/>
    <rect x="470" y="288" width="8" height="14"/><rect x="483" y="288" width="9" height="14"/>
  </g>
  <g fill="#312a1e" opacity="0.8">
    <rect x="114" y="342" width="8" height="14"/><rect x="127" y="342" width="10" height="14"/><rect x="142" y="342" width="7" height="14"/>
    <rect x="168" y="342" width="11" height="14"/><rect x="184" y="342" width="8" height="14"/>
    <rect x="210" y="342" width="9" height="14"/><rect x="224" y="342" width="10" height="14"/><rect x="239" y="342" width="7" height="14"/>
    <rect x="266" y="342" width="8" height="14"/><rect x="279" y="342" width="11" height="14"/>
    <rect x="306" y="342" width="9" height="14"/><rect x="320" y="342" width="7" height="14"/><rect x="332" y="342" width="10" height="14"/>
    <rect x="360" y="342" width="8" height="14"/><rect x="373" y="342" width="9" height="14"/><rect x="387" y="342" width="11" height="14"/>
  </g>
  <!-- fold, thumbprint, pin hole, worn corner -->
  <path d="M320 88 L316 428" fill="none" stroke="#8d7f5e" stroke-width="7" opacity="0.22"/>
  <path d="M313 88 L309 428" fill="none" stroke="#fdf8e6" stroke-width="4" opacity="0.4"/>
  <g opacity="0.22" fill="none" stroke="#4a3f28" stroke-width="1.4">
    <path d="M528 402 q 14 10 0 20"/><path d="M536 396 q 22 16 0 32"/><path d="M544 390 q 30 22 0 44"/>
  </g>
  <circle cx="120" cy="410" r="4" fill="#241a10" opacity="0.7"/>
  <path d="M572 424 Q 546 404 520 418 Q 546 430 572 424 Z" fill="#c5b892"/>
  <path d="M80 424 Q 180 434 316 428 Q 460 434 572 424" fill="none" stroke="#7e7156" stroke-width="2.4" opacity="0.6"/>
</g>

<rect width="640" height="520" fill="url(#ev1-tel-vig)"/>
`,
  },

  /* Margaret's diary, open at the last entry: ruled pages, a hand that grew
     unsteady, a faded ribbon and six years of foxing. */
  c1_diary: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-dia-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#2a2018"/><stop offset="0.6" stop-color="#171009"/><stop offset="1" stop-color="#0a0705"/>
  </linearGradient>
  <radialGradient id="ev1-dia-pool" cx="0.3" cy="0.14" r="0.85">
    <stop offset="0" stop-color="#eec983" stop-opacity="0.25"/><stop offset="1" stop-color="#eec983" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-dia-leather" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6d2a27"/><stop offset="0.5" stop-color="#421817"/><stop offset="1" stop-color="#1c0909"/>
  </linearGradient>
  <linearGradient id="ev1-dia-pgl" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#f6efdb"/><stop offset="0.62" stop-color="#e6dcbf"/><stop offset="1" stop-color="#9e9276"/>
  </linearGradient>
  <linearGradient id="ev1-dia-pgr" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#a89c80"/><stop offset="0.22" stop-color="#f2ead2"/><stop offset="1" stop-color="#cfc3a3"/>
  </linearGradient>
  <linearGradient id="ev1-dia-ribbon" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6e7a4c"/><stop offset="0.5" stop-color="#414a29"/><stop offset="1" stop-color="#22280f"/>
  </linearGradient>
  <filter id="ev1-dia-soft" x="-25%" y="-25%" width="150%" height="150%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-dia-vig" cx="0.46" cy="0.44" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-dia-bg)"/>
<rect width="640" height="520" fill="url(#ev1-dia-pool)"/>
<g fill="none" stroke="#0d0906" stroke-width="2.4" opacity="0.5">
  <path d="M0 78 Q 220 56 420 78 Q 550 92 640 76"/>
  <path d="M0 176 Q 210 154 410 176 Q 545 190 640 174"/>
  <path d="M0 470 Q 210 448 410 470 Q 545 484 640 468"/>
</g>
<g fill="#d8c9a8" opacity="0.12">
  <circle cx="70" cy="120" r="2.2"/><circle cx="580" cy="130" r="1.8"/><circle cx="86" cy="470" r="2"/><circle cx="566" cy="486" r="1.6"/>
</g>

<ellipse cx="322" cy="432" rx="256" ry="42" fill="#000" opacity="0.62" filter="url(#ev1-dia-soft)"/>

<!-- boards of the little diary, splayed open on the desk -->
<path d="M46 214 Q 190 154 314 176 L316 424 Q 190 402 52 442 Z" fill="url(#ev1-dia-leather)"/>
<path d="M594 216 Q 452 154 326 176 L324 424 Q 452 402 588 444 Z" fill="url(#ev1-dia-leather)"/>
<g fill="#95463f" opacity="0.3">
  <ellipse cx="120" cy="418" rx="52" ry="9"/><ellipse cx="520" cy="420" rx="50" ry="9"/>
  <ellipse cx="96" cy="240" rx="26" ry="6"/><ellipse cx="548" cy="242" rx="26" ry="6"/>
</g>
<g stroke="#2a0d0c" stroke-width="1.2" opacity="0.45" fill="none">
  <path d="M60 268 Q 180 234 306 224"/><path d="M60 340 Q 180 316 306 306"/>
  <path d="M580 270 Q 460 236 334 224"/><path d="M580 342 Q 460 318 334 306"/>
</g>
<!-- gilt fore-edges -->
<path d="M52 442 Q 190 402 316 424 L316 434 Q 190 412 54 452 Z" fill="#c9a75a" opacity="0.75"/>
<path d="M588 444 Q 452 402 324 424 L324 434 Q 452 412 586 454 Z" fill="#a98c46" opacity="0.65"/>

<!-- the leaves -->
<path d="M70 224 Q 198 168 312 190 L314 412 Q 196 390 76 428 Z" fill="url(#ev1-dia-pgl)"/>
<path d="M570 226 Q 444 168 328 190 L326 412 Q 446 390 566 430 Z" fill="url(#ev1-dia-pgr)"/>
<g stroke="#cdc1a2" stroke-width="1.6" opacity="0.7" fill="none">
  <path d="M72 232 Q 198 176 312 198"/><path d="M74 240 Q 198 184 312 206"/>
  <path d="M568 234 Q 444 176 328 198"/><path d="M566 242 Q 444 184 328 206"/>
</g>
<!-- gutter shadow -->
<path d="M292 186 Q 300 300 296 410 L314 412 L312 190 Z" fill="#8a7c5f" opacity="0.45"/>
<path d="M348 186 Q 338 300 344 410 L326 412 L328 190 Z" fill="#8a7c5f" opacity="0.5"/>
<path d="M314 190 L316 412 L326 412 L328 190 Z" fill="#5f5340"/>
<!-- feint rules -->
<g stroke="#93a0ae" stroke-width="1.3" opacity="0.55" fill="none">
  <path d="M92 226 Q 200 186 306 202"/><path d="M94 258 Q 200 218 306 234"/><path d="M96 290 Q 202 250 306 266"/>
  <path d="M98 322 Q 202 282 306 298"/><path d="M100 352 Q 204 314 306 330"/><path d="M102 382 Q 204 344 306 360"/>
</g>
<g stroke="#93a0ae" stroke-width="1.3" opacity="0.5" fill="none">
  <path d="M334 202 Q 442 186 548 226"/><path d="M334 234 Q 442 218 548 258"/><path d="M334 266 Q 442 250 548 290"/>
  <path d="M334 298 Q 442 282 548 322"/><path d="M334 330 Q 442 314 546 352"/><path d="M334 360 Q 442 344 544 382"/>
</g>
<!-- her hand, six years old -->
<g fill="none" stroke="#2f3550" stroke-width="3" stroke-linecap="round" opacity="0.88">
  <g>
    <path d="M100 204 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6 q 6 -9.0 13 -0.6"/>
    <path d="M158 205 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
    <path d="M202 200 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M272 200 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6"/>
  </g>
  <g>
    <path d="M100 236 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M150 237 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
    <path d="M222 231 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M268 232 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6 q 6 -9.0 13 -0.6"/>
    <path d="M330 227 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
  </g>
  <g>
    <path d="M100 268 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
    <path d="M164 269 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M214 264 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M288 264 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
  </g>
  <g>
    <path d="M100 300 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6"/>
    <path d="M156 301 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
    <path d="M224 295 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
    <path d="M272 296 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6"/>
  </g>
  <g>
    <path d="M100 330 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M170 331 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
    <path d="M216 326 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6 q 6 -9.0 13 -0.6"/>
  </g>
  <g>
    <path d="M100 360 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6"/>
    <path d="M152 361 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6 q 6 -7.0 13 -0.6 q 6 3.9 13 -0.6"/>
    <path d="M216 356 q 6 -9.0 13 -0.6 q 6 5.0 13 -0.6"/>
  </g>
</g>
<g fill="none" stroke="#2f3550" stroke-width="3" stroke-linecap="round" opacity="0.82">
  <g>
    <path d="M348 194 q 6 -9.0 13 0.6 q 6 5.0 13 0.6 q 6 -9.0 13 0.6"/>
    <path d="M410 200 q 6 -7.0 13 0.6 q 6 3.9 13 0.6"/>
    <path d="M458 199 q 6 -7.0 13 0.6 q 6 3.9 13 0.6 q 6 -7.0 13 0.6 q 6 3.9 13 0.6"/>
    <path d="M530 205 q 6 -9.0 13 0.6 q 6 5.0 13 0.6"/>
  </g>
  <g>
    <path d="M348 226 q 6 -9.0 13 0.6 q 6 5.0 13 0.6 q 6 -9.0 13 0.6"/>
    <path d="M402 232 q 6 -9.0 13 0.6 q 6 5.0 13 0.6 q 6 -9.0 13 0.6 q 6 5.0 13 0.6"/>
    <path d="M472 232 q 6 -7.0 13 0.6 q 6 3.9 13 0.6"/>
    <path d="M516 237 q 6 -7.0 13 0.6 q 6 3.9 13 0.6 q 6 -7.0 13 0.6 q 6 3.9 13 0.6"/>
  </g>
  <g>
    <path d="M348 258 q 6 -7.0 13 0.6 q 6 3.9 13 0.6 q 6 -7.0 13 0.6 q 6 3.9 13 0.6"/>
    <path d="M416 264 q 6 -7.0 13 0.6 q 6 3.9 13 0.6 q 6 -7.0 13 0.6"/>
    <path d="M468 264 q 6 -7.0 13 0.6 q 6 3.9 13 0.6 q 6 -7.0 13 0.6"/>
  </g>
  <g>
    <path d="M348 290 q 6 -9.0 13 0.6 q 6 5.0 13 0.6"/>
    <path d="M398 296 q 6 -9.0 13 0.6 q 6 5.0 13 0.6 q 6 -9.0 13 0.6"/>
  </g>
</g>
<g fill="none" stroke="#2f3550" stroke-width="2.4" stroke-linecap="round" opacity="0.5">
  <path d="M120 200 q 4 -18 -2 -24"/><path d="M232 226 q -4 18 3 24"/><path d="M372 190 q 4 -18 -2 -24"/>
  <path d="M446 244 q -4 18 3 24"/><path d="M180 292 q 4 -16 -2 -22"/>
</g>
<!-- the entry stops here -->
<path d="M348 316 q 14 -10 26 2 q 10 10 22 0" fill="none" stroke="#2f3550" stroke-width="2.6" opacity="0.5" stroke-linecap="round"/>
<!-- foxing, thumbed corners -->
<g fill="#a98d5f" opacity="0.3">
  <circle cx="186" cy="306" r="3"/><circle cx="244" cy="356" r="2.2"/><circle cx="436" cy="248" r="2.6"/>
  <circle cx="498" cy="336" r="3.2"/><circle cx="144" cy="234" r="1.8"/><circle cx="392" cy="356" r="2"/>
  <circle cx="266" cy="248" r="1.6"/><circle cx="470" cy="300" r="2.4"/>
</g>
<ellipse cx="512" cy="392" rx="48" ry="22" fill="#9a8055" opacity="0.26"/>
<ellipse cx="126" cy="394" rx="42" ry="19" fill="#9a8055" opacity="0.2"/>
<path d="M70 224 Q 88 300 76 428" fill="none" stroke="#fdf8ea" stroke-width="3.4" opacity="0.45"/>
<path d="M570 226 Q 554 300 566 430" fill="none" stroke="#fdf8ea" stroke-width="2.6" opacity="0.3"/>
<!-- ribbon marker, lying where she left it -->
<path d="M440 180 L460 184 L472 396 Q 478 418 500 428 L508 414 Q 490 402 488 384 L478 186 Z" fill="url(#ev1-dia-ribbon)"/>
<path d="M436 182 L444 184 L456 388" fill="none" stroke="#b5c28a" stroke-width="2.4" opacity="0.45"/>
<path d="M500 430 L510 414 L516 428 Z" fill="#2c3318"/>
<path d="M470 396 Q 476 420 500 430 Q 480 424 468 404 Z" fill="#20260f" opacity="0.7"/>

<rect width="640" height="520" fill="url(#ev1-dia-vig)"/>
`,
  },
  /* The Reserve decanter, breathing alone in the study: crystal, dark wine to
     the shoulder, the stopper set neatly aside. */
  c1_decanter: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-dec-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#2c2016"/><stop offset="0.6" stop-color="#170f08"/><stop offset="1" stop-color="#090604"/>
  </linearGradient>
  <radialGradient id="ev1-dec-pool" cx="0.3" cy="0.14" r="0.86">
    <stop offset="0" stop-color="#f2cd83" stop-opacity="0.28"/><stop offset="1" stop-color="#f2cd83" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-dec-crystal" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#efe9da" stop-opacity="0.34"/><stop offset="0.16" stop-color="#ffffff" stop-opacity="0.18"/>
    <stop offset="0.45" stop-color="#c8cfc7" stop-opacity="0.1"/><stop offset="0.72" stop-color="#ffffff" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#e6e1d2" stop-opacity="0.36"/>
  </linearGradient>
  <linearGradient id="ev1-dec-wine" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#7d241a"/><stop offset="0.5" stop-color="#4a120e"/><stop offset="1" stop-color="#230807"/>
  </linearGradient>
  <radialGradient id="ev1-dec-caustic" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#c04a24" stop-opacity="0.45"/><stop offset="1" stop-color="#c04a24" stop-opacity="0"/>
  </radialGradient>
  <filter id="ev1-dec-soft" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-dec-vig" cx="0.45" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-dec-bg)"/>
<rect width="640" height="520" fill="url(#ev1-dec-pool)"/>
<path d="M0 372 L640 348 L640 520 L0 520 Z" fill="#25190e"/>
<g fill="none" stroke="#0e0905" stroke-width="2.4" opacity="0.6">
  <path d="M0 404 Q 200 392 400 402 Q 540 410 640 398"/>
  <path d="M0 452 Q 190 440 390 450 Q 530 458 640 446"/>
  <path d="M0 500 Q 200 488 400 498"/>
</g>
<g fill="none" stroke="#7a5834" stroke-width="1.2" opacity="0.25">
  <path d="M0 412 Q 200 400 400 410"/><path d="M0 460 Q 190 448 390 458"/>
</g>
<path d="M0 372 L640 348 L640 358 L0 382 Z" fill="#4d3620" opacity="0.6"/>

<ellipse cx="330" cy="452" rx="176" ry="34" fill="#000" opacity="0.62" filter="url(#ev1-dec-soft)"/>
<ellipse cx="452" cy="446" rx="96" ry="26" fill="url(#ev1-dec-caustic)"/>

<!-- the decanter -->
<path d="M300 452 Q 178 446 168 398 Q 154 316 198 240 Q 234 186 268 168 L332 168 Q 366 186 402 240 Q 446 316 432 398 Q 422 446 300 452 Z" fill="url(#ev1-dec-crystal)"/>
<path d="M268 172 Q 276 130 282 100 L318 100 Q 324 130 332 172 Z" fill="url(#ev1-dec-crystal)"/>
<ellipse cx="300" cy="100" rx="30" ry="9" fill="none" stroke="#f6f3e8" stroke-width="3.4" opacity="0.6"/>
<ellipse cx="300" cy="100" rx="30" ry="9" fill="#0d0a07" opacity="0.35"/>
<ellipse cx="300" cy="96" rx="22" ry="6" fill="#ffffff" opacity="0.18"/>
<!-- the wine to the shoulder -->
<path d="M186 296 L414 296 Q 442 356 430 398 Q 420 442 300 448 Q 180 442 170 398 Q 158 356 186 296 Z" fill="url(#ev1-dec-wine)"/>
<ellipse cx="300" cy="296" rx="114" ry="19" fill="#5d1a13"/>
<ellipse cx="300" cy="296" rx="114" ry="19" fill="none" stroke="#93301f" stroke-width="1.6" opacity="0.65"/>
<ellipse cx="262" cy="292" rx="34" ry="6" fill="#ab4a34" opacity="0.4"/>
<path d="M182 322 Q 300 344 418 322" fill="none" stroke="#8a2b1d" stroke-width="2.4" opacity="0.35"/>
<path d="M196 380 Q 300 410 406 380" fill="none" stroke="#2a0906" stroke-width="16" opacity="0.4"/>
<!-- tidemark where it was poured from -->
<path d="M188 288 Q 300 306 412 288" fill="none" stroke="#6f2013" stroke-width="2.6" opacity="0.55"/>
<path d="M232 292 Q 226 330 234 356" fill="none" stroke="#5d1a13" stroke-width="4" opacity="0.5" stroke-linecap="round"/>
<!-- cut facets and speculars -->
<g opacity="0.55">
  <path d="M206 240 Q 190 320 200 420" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.34" stroke-linecap="round"/>
  <path d="M228 214 Q 214 300 222 418" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.3"/>
  <path d="M392 244 Q 408 322 398 418" fill="none" stroke="#ffffff" stroke-width="3.6" opacity="0.22" stroke-linecap="round"/>
  <path d="M266 190 Q 258 280 262 442" fill="none" stroke="#0d0a06" stroke-width="1.6" opacity="0.3"/>
  <path d="M338 190 Q 346 280 342 442" fill="none" stroke="#0d0a06" stroke-width="1.6" opacity="0.3"/>
</g>
<path d="M272 104 Q 268 140 264 170" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.4" stroke-linecap="round"/>
<path d="M328 106 Q 332 140 336 170" fill="none" stroke="#0d0a06" stroke-width="2" opacity="0.35"/>
<path d="M170 398 Q 180 442 300 450 Q 420 442 430 398" fill="none" stroke="#f4f0e2" stroke-width="3" opacity="0.4"/>
<ellipse cx="300" cy="450" rx="118" ry="17" fill="none" stroke="#efe9d8" stroke-width="2" opacity="0.3"/>
<ellipse cx="214" cy="220" rx="10" ry="20" fill="#ffffff" opacity="0.3" transform="rotate(-14 214 220)"/>
<!-- dust on the shoulder, and the print of the hand that carried it -->
<g fill="#d8cdb4" opacity="0.16">
  <circle cx="252" cy="200" r="2.2"/><circle cx="330" cy="192" r="1.8"/><circle cx="372" cy="228" r="2"/><circle cx="290" cy="182" r="1.5"/>
</g>
<g opacity="0.17" fill="none" stroke="#f4efe0" stroke-width="1.3">
  <path d="M372 300 q 13 11 0 22"/><path d="M380 292 q 21 19 0 38"/><path d="M388 284 q 29 27 0 54"/>
</g>

<!-- the stopper, set neatly beside it -->
<ellipse cx="516" cy="440" rx="52" ry="14" fill="#000" opacity="0.5" filter="url(#ev1-dec-soft)"/>
<path d="M478 428 Q 470 396 488 380 Q 512 366 540 378 Q 560 394 552 428 Q 518 440 478 428 Z" fill="url(#ev1-dec-crystal)"/>
<path d="M486 384 Q 512 372 536 382" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.5"/>
<path d="M492 396 Q 494 418 490 430" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.35"/>
<path d="M528 394 Q 532 416 530 430" fill="none" stroke="#0d0a06" stroke-width="1.6" opacity="0.3"/>
<ellipse cx="516" cy="430" rx="38" ry="10" fill="#efe9d8" opacity="0.22"/>
<ellipse cx="516" cy="430" rx="38" ry="10" fill="none" stroke="#f4f0e2" stroke-width="2" opacity="0.4"/>
<path d="M500 436 Q 516 448 534 436 Q 518 444 500 436 Z" fill="#4a120e" opacity="0.6"/>
<ellipse cx="502" cy="392" rx="8" ry="12" fill="#ffffff" opacity="0.3" transform="rotate(-18 502 392)"/>

<rect width="640" height="520" fill="url(#ev1-dec-vig)"/>
`,
  },

  /* The tincture bottle from Dr. Hale's bag: brown pharmacy glass, a label three
     days old, and hardly anything left in it. */
  c1_tincture: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-tin-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#2b241b"/><stop offset="0.6" stop-color="#15100a"/><stop offset="1" stop-color="#080605"/>
  </linearGradient>
  <radialGradient id="ev1-tin-pool" cx="0.3" cy="0.14" r="0.86">
    <stop offset="0" stop-color="#f0cd8a" stop-opacity="0.3"/><stop offset="1" stop-color="#f0cd8a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-tin-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#a35f1c"/><stop offset="0.13" stop-color="#e2a558"/><stop offset="0.34" stop-color="#6d3a10"/>
    <stop offset="0.68" stop-color="#4a2409"/><stop offset="0.88" stop-color="#b06f26"/><stop offset="1" stop-color="#5c3210"/>
  </linearGradient>
  <linearGradient id="ev1-tin-label" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f6f1e2"/><stop offset="0.55" stop-color="#e4dcc6"/><stop offset="1" stop-color="#9e9683"/>
  </linearGradient>
  <linearGradient id="ev1-tin-cap" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#4a4238"/><stop offset="0.2" stop-color="#26211b"/><stop offset="0.65" stop-color="#0e0c0a"/><stop offset="1" stop-color="#3a332b"/>
  </linearGradient>
  <filter id="ev1-tin-soft" x="-35%" y="-35%" width="170%" height="170%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-tin-vig" cx="0.45" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-tin-bg)"/>
<rect width="640" height="520" fill="url(#ev1-tin-pool)"/>
<!-- the doctor's white cloth, laid over the table -->
<path d="M0 356 Q 200 336 400 350 Q 530 360 640 344 L640 520 L0 520 Z" fill="#cfc7b2"/>
<path d="M0 356 Q 200 336 400 350 Q 530 360 640 344 L640 366 Q 520 382 400 372 Q 200 358 0 378 Z" fill="#efe9d8" opacity="0.7"/>
<g stroke="#a89f88" stroke-width="1.2" opacity="0.4" fill="none">
  <path d="M0 400 Q 200 384 400 396 Q 530 404 640 390"/>
  <path d="M0 444 Q 200 428 400 440 Q 530 448 640 434"/>
  <path d="M0 488 Q 200 472 400 484"/>
</g>
<path d="M164 366 Q 196 430 176 520 L214 520 Q 230 428 196 364 Z" fill="#b3aa93" opacity="0.5"/>
<path d="M470 358 Q 500 430 486 520 L510 520 Q 522 428 492 356 Z" fill="#e6e0cf" opacity="0.4"/>

<ellipse cx="286" cy="432" rx="130" ry="26" fill="#000" opacity="0.45" filter="url(#ev1-tin-soft)"/>

<!-- the bottle -->
<path d="M212 176 L212 152 Q 212 140 226 140 L304 140 Q 318 140 318 152 L318 176 Q 348 196 352 232 L352 396 Q 352 424 322 428 L208 428 Q 178 424 178 396 L178 232 Q 182 196 212 176 Z" fill="url(#ev1-tin-glass)"/>
<path d="M196 210 Q 190 300 194 416" fill="none" stroke="#f5cf92" stroke-width="9" opacity="0.35" stroke-linecap="round"/>
<path d="M212 200 Q 206 300 210 418" fill="none" stroke="#ffe9c0" stroke-width="3" opacity="0.35"/>
<path d="M336 214 Q 342 300 338 414" fill="none" stroke="#f2c988" stroke-width="4" opacity="0.22" stroke-linecap="round"/>
<path d="M178 396 Q 178 424 208 428 L322 428 Q 352 424 352 396" fill="none" stroke="#2a1505" stroke-width="7" opacity="0.5"/>
<!-- what little is left in it -->
<path d="M182 372 L348 372 L348 396 Q 348 422 320 426 L210 426 Q 182 422 182 396 Z" fill="#22140a"/>
<ellipse cx="265" cy="372" rx="83" ry="8" fill="#3d2410"/>
<ellipse cx="265" cy="372" rx="83" ry="8" fill="none" stroke="#7b4d1e" stroke-width="1.4" opacity="0.6"/>
<ellipse cx="232" cy="370" rx="24" ry="3.4" fill="#9c6a2c" opacity="0.5"/>
<!-- a month of tidemarks, all above tonight's level -->
<g stroke="#3f2610" stroke-width="2" opacity="0.45" fill="none">
  <path d="M186 244 Q 264 252 344 244"/><path d="M186 286 Q 264 294 344 286"/><path d="M186 330 Q 264 338 344 330"/>
</g>
<!-- the label, three days old -->
<path d="M196 232 L336 226 L340 342 L198 348 Z" fill="url(#ev1-tin-label)"/>
<path d="M196 232 L336 226 L336 236 L196 242 Z" fill="#c3bba4" opacity="0.6"/>
<g stroke="#6f6851" stroke-width="2.4" opacity="0.8" fill="none">
  <path d="M210 254 L322 249"/><path d="M210 260 L322 255"/>
</g>
<g stroke="#8b8369" stroke-width="1.6" opacity="0.6" fill="none">
  <path d="M210 276 L300 272"/><path d="M210 288 L318 284"/><path d="M210 300 L288 296"/>
</g>
<rect x="238" y="310" width="94" height="26" fill="none" stroke="#6f6851" stroke-width="1.8" opacity="0.7"/>
<g stroke="#3d3a2c" stroke-width="3" opacity="0.75" stroke-linecap="round" fill="none">
  <path d="M248 322 L260 320"/><path d="M268 322 L272 320"/><path d="M282 321 L300 319"/><path d="M308 320 L318 319"/>
</g>
<path d="M212 268 q 12 10 0 20" fill="none" stroke="#8e8770" stroke-width="1.2" opacity="0.35"/>
<path d="M340 342 Q 322 326 306 340 Q 324 350 340 342 Z" fill="#bcb49c"/>
<path d="M198 348 L340 342" fill="none" stroke="#7d7660" stroke-width="2" opacity="0.55"/>
<ellipse cx="300" cy="330" rx="26" ry="12" fill="#8a7a4e" opacity="0.2"/>
<!-- a run of the tincture dried down the glass -->
<path d="M330 182 Q 340 260 336 340" fill="none" stroke="#1e1206" stroke-width="6" opacity="0.4" stroke-linecap="round"/>
<!-- cap -->
<path d="M206 178 L324 178 L324 140 Q 324 128 308 128 L222 128 Q 206 128 206 140 Z" fill="url(#ev1-tin-cap)"/>
<g stroke="#5a5147" stroke-width="2" opacity="0.5">
  <path d="M222 132 L222 176"/><path d="M240 130 L240 176"/><path d="M258 130 L258 176"/><path d="M276 130 L276 176"/><path d="M294 130 L294 176"/><path d="M312 132 L312 176"/>
</g>
<path d="M210 138 Q 216 130 232 130" fill="none" stroke="#8e8578" stroke-width="3" opacity="0.5"/>
<ellipse cx="265" cy="178" rx="59" ry="7" fill="#0d0b09" opacity="0.7"/>

<!-- the dropper, laid down beside it -->
<ellipse cx="470" cy="424" rx="90" ry="14" fill="#000" opacity="0.45" filter="url(#ev1-tin-soft)"/>
<path d="M392 406 L520 398 L522 414 L394 422 Z" fill="#b9b3a4" opacity="0.5"/>
<path d="M392 406 L520 398 L521 404 L393 412 Z" fill="#fbf8ef" opacity="0.75"/>
<path d="M520 398 Q 556 392 566 400 Q 574 412 562 420 Q 542 426 522 414 Z" fill="#2c2a26"/>
<path d="M528 400 Q 552 396 560 402" fill="none" stroke="#6c665c" stroke-width="3" opacity="0.6"/>
<path d="M392 406 L364 412 L366 420 L394 422 Z" fill="#d9d3c4" opacity="0.6"/>
<path d="M364 412 L344 416 L346 420 L366 420 Z" fill="#a49d8c"/>
<ellipse cx="430" cy="428" rx="9" ry="4" fill="#22140a" opacity="0.7"/>
<ellipse cx="452" cy="434" rx="5" ry="2.6" fill="#22140a" opacity="0.6"/>
<g fill="#22140a" opacity="0.5">
  <ellipse cx="378" cy="446" rx="4" ry="2.2"/><ellipse cx="404" cy="452" rx="3" ry="1.6"/>
</g>

<rect width="640" height="520" fill="url(#ev1-tin-vig)"/>
`,
  },

  /* The confession, written out and signed in the same steady hand that signed a
     false certificate: pen laid down, spectacles folded. */
  c1_confession: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-con-desk" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#3a2917"/><stop offset="0.6" stop-color="#1e1509"/><stop offset="1" stop-color="#0b0705"/>
  </linearGradient>
  <radialGradient id="ev1-con-pool" cx="0.3" cy="0.14" r="0.86">
    <stop offset="0" stop-color="#f0cd8a" stop-opacity="0.28"/><stop offset="1" stop-color="#f0cd8a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-con-paper" x1="0.1" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f8f3e3"/><stop offset="0.5" stop-color="#e6ddc4"/><stop offset="1" stop-color="#9d947c"/>
  </linearGradient>
  <linearGradient id="ev1-con-pen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4b4038"/><stop offset="0.3" stop-color="#181310"/><stop offset="0.75" stop-color="#0a0807"/><stop offset="1" stop-color="#332b25"/>
  </linearGradient>
  <linearGradient id="ev1-con-gold" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f7e3a6"/><stop offset="0.4" stop-color="#c69a37"/><stop offset="1" stop-color="#6d4f13"/>
  </linearGradient>
  <filter id="ev1-con-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7"/></filter>
  <radialGradient id="ev1-con-vig" cx="0.46" cy="0.44" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-con-desk)"/>
<rect width="640" height="520" fill="url(#ev1-con-pool)"/>
<g fill="none" stroke="#100a05" stroke-width="2.4" opacity="0.55">
  <path d="M0 60 Q 220 40 420 62 Q 550 76 640 60"/><path d="M0 200 Q 210 180 410 202 Q 545 216 640 200"/>
  <path d="M0 340 Q 220 320 420 342"/><path d="M0 470 Q 200 450 400 472 Q 540 486 640 470"/>
</g>
<g fill="#c9b98f" opacity="0.12">
  <circle cx="66" cy="132" r="2.2"/><circle cx="592" cy="420" r="2"/><circle cx="60" cy="452" r="1.7"/>
</g>

<ellipse cx="330" cy="440" rx="240" ry="42" fill="#000" opacity="0.6" filter="url(#ev1-con-soft)"/>

<g transform="rotate(-3 320 270)">
  <path d="M96 76 L544 66 L552 424 Q 440 434 314 428 Q 190 434 100 424 Z" fill="url(#ev1-con-paper)"/>
  <path d="M96 76 L544 66 L546 92 L96 102 Z" fill="#cec5aa" opacity="0.45"/>
  <path d="M320 68 L316 428" fill="none" stroke="#8d8265" stroke-width="8" opacity="0.22"/>
  <path d="M312 68 L308 428" fill="none" stroke="#fdf9ec" stroke-width="4" opacity="0.4"/>
  <g fill="none" stroke="#26221a" stroke-width="3" stroke-linecap="round" opacity="0.9">
  <g>
    <path d="M125 130 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M191 132 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M241 128 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M323 130 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M379 126 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M449 127 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
    <path d="M497 123 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M571 125 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
  </g>
  <g>
    <path d="M126 174 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M184 176 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M268 172 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M318 174 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
    <path d="M390 169 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M446 171 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M508 167 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M588 169 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
  </g>
  <g>
    <path d="M125 218 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M199 220 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M251 216 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M317 218 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M403 213 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M453 215 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M513 211 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
    <path d="M581 213 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
  </g>
  <g>
    <path d="M125 262 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M187 264 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M265 260 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M319 262 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M389 257 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
    <path d="M437 260 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
    <path d="M513 255 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M571 257 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
  </g>
  <g>
    <path d="M126 306 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M196 308 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M252 304 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2 q 6 -10.0 13 -0.2"/>
    <path d="M334 305 q 6 -10.0 13 -0.2 q 6 5.5 13 -0.2"/>
    <path d="M384 302 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
    <path d="M448 303 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2"/>
    <path d="M500 299 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2 q 6 -8.0 13 -0.2 q 6 4.4 13 -0.2"/>
  </g>
  </g>
  <g fill="none" stroke="#26221a" stroke-width="2.4" stroke-linecap="round" opacity="0.6">
    <path d="M162 124 l 5 -18"/><path d="M292 168 l 6 -18"/><path d="M206 214 l -4 -16"/><path d="M368 258 l 6 -18"/><path d="M244 302 l -5 -16"/>
  </g>
  <!-- and then his name, in the same steady hand -->
  <path d="M140 370 q 26 -34 44 -2 q 12 26 -6 32 q -18 4 -14 -18 q 6 -26 40 -22 q 30 4 46 -18" fill="none" stroke="#1e1a14" stroke-width="4" stroke-linecap="round"/>
  <path d="M268 350 q 30 -22 44 8 q 10 24 -8 28 q -16 2 -10 -18 q 8 -22 40 -18 q 26 4 40 -12" fill="none" stroke="#1e1a14" stroke-width="4" stroke-linecap="round"/>
  <path d="M136 386 Q 268 400 386 380" fill="none" stroke="#1e1a14" stroke-width="2.4" opacity="0.7"/>
  <path d="M424 344 L424 396" fill="none" stroke="#6f6852" stroke-width="1.6" opacity="0.6"/>
  <path d="M424 396 L520 392" fill="none" stroke="#6f6852" stroke-width="1.6" opacity="0.6"/>
  <!-- fibre, foxing, a thumb in ink -->
  <g fill="#8d7a58" opacity="0.3">
    <circle cx="190" cy="340" r="2"/><circle cx="470" cy="200" r="2.4"/><circle cx="360" cy="404" r="1.8"/>
    <circle cx="150" cy="252" r="1.6"/><circle cx="500" cy="316" r="2.2"/>
  </g>
  <g opacity="0.28" fill="none" stroke="#3e372a" stroke-width="1.4">
    <path d="M496 130 q 14 11 0 22"/><path d="M504 122 q 22 19 0 38"/><path d="M512 114 q 30 27 0 54"/>
  </g>
  <ellipse cx="440" cy="410" rx="9" ry="7" fill="#1e1a14" opacity="0.8"/>
  <path d="M552 424 Q 526 404 500 418 Q 526 430 552 424 Z" fill="#c8bfa4"/>
  <path d="M100 424 Q 190 434 314 428 Q 440 434 552 424" fill="none" stroke="#7e7660" stroke-width="2.4" opacity="0.6"/>
</g>

<!-- his pen, laid down -->
<ellipse cx="392" cy="470" rx="130" ry="12" fill="#000" opacity="0.5" filter="url(#ev1-con-soft)"/>
<path d="M268 468 L470 436 Q 486 434 488 444 Q 490 456 474 460 L272 492 Q 258 494 256 482 Q 254 472 268 468 Z" fill="url(#ev1-con-pen)"/>
<path d="M272 466 L470 434" fill="none" stroke="#6a5d52" stroke-width="3" opacity="0.55"/>
<path d="M274 488 L472 456" fill="none" stroke="#000" stroke-width="3" opacity="0.5"/>
<rect x="380" y="440" width="18" height="26" transform="rotate(-9 389 453)" fill="url(#ev1-con-gold)"/>
<path d="M256 482 L216 490 Q 200 494 204 502 L246 496 Z" fill="url(#ev1-con-gold)"/>
<path d="M232 486 L212 490 L214 498 L234 494 Z" fill="#1c1610" opacity="0.8"/>
<path d="M204 502 L218 498" fill="none" stroke="#fbf0c6" stroke-width="2" opacity="0.7"/>
<ellipse cx="212" cy="502" rx="7" ry="4" fill="#1e1a14" opacity="0.6"/>

<!-- his spectacles, folded -->
<ellipse cx="540" cy="130" rx="76" ry="26" fill="#000" opacity="0.45" filter="url(#ev1-con-soft)"/>
<circle cx="500" cy="112" r="34" fill="#cfd6cd" opacity="0.14"/>
<circle cx="500" cy="112" r="34" fill="none" stroke="url(#ev1-con-gold)" stroke-width="4"/>
<path d="M478 92 Q 496 82 514 92" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.35"/>
<circle cx="576" cy="102" r="32" fill="#cfd6cd" opacity="0.12"/>
<circle cx="576" cy="102" r="32" fill="none" stroke="url(#ev1-con-gold)" stroke-width="4"/>
<path d="M556 84 Q 574 74 590 84" fill="none" stroke="#ffffff" stroke-width="3.4" opacity="0.3"/>
<path d="M532 106 Q 544 96 546 102" fill="none" stroke="url(#ev1-con-gold)" stroke-width="4"/>
<path d="M470 130 Q 440 152 420 146" fill="none" stroke="url(#ev1-con-gold)" stroke-width="3.4"/>
<path d="M600 116 Q 626 136 634 158" fill="none" stroke="url(#ev1-con-gold)" stroke-width="3.4"/>
<circle cx="500" cy="112" r="34" fill="none" stroke="#fdf6d8" stroke-width="1.2" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev1-con-vig)"/>
`,
  },
  /* The cellar ledger: eleven years of immaculate columns, and three lines
     taken out with a razor and written again. */
  c1_ledger: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-led-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#312519"/><stop offset="0.6" stop-color="#19110a"/><stop offset="1" stop-color="#0a0705"/>
  </linearGradient>
  <radialGradient id="ev1-led-pool" cx="0.3" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#efcd8c" stop-opacity="0.3"/><stop offset="1" stop-color="#efcd8c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-led-paper" x1="0.08" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f2e9cf"/><stop offset="0.5" stop-color="#e0d5b6"/><stop offset="1" stop-color="#9c9276"/>
  </linearGradient>
  <linearGradient id="ev1-led-cover" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#3f4a34"/><stop offset="0.6" stop-color="#232a18"/><stop offset="1" stop-color="#0e120a"/>
  </linearGradient>
  <linearGradient id="ev1-led-steel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f4f6f8"/><stop offset="0.35" stop-color="#a9b1b8"/><stop offset="0.7" stop-color="#5d666e"/><stop offset="1" stop-color="#cfd6db"/>
  </linearGradient>
  <filter id="ev1-led-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-led-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-led-bg)"/>
<rect width="640" height="520" fill="url(#ev1-led-pool)"/>
<g fill="none" stroke="#0e0905" stroke-width="2.4" opacity="0.5">
  <path d="M0 54 Q 220 34 420 56 Q 550 70 640 54"/><path d="M0 470 Q 210 450 410 472 Q 545 486 640 470"/>
</g>
<ellipse cx="330" cy="446" rx="252" ry="40" fill="#000" opacity="0.6" filter="url(#ev1-led-soft)"/>

<!-- the ledger, open at the 1898 bin -->
<path d="M28 108 L610 84 L620 434 Q 340 458 34 438 Z" fill="url(#ev1-led-cover)"/>
<path d="M28 108 L610 84 L612 100 L28 124 Z" fill="#59674a" opacity="0.5"/>
<path d="M48 124 L596 102 L604 420 Q 336 442 54 424 Z" fill="url(#ev1-led-paper)"/>
<g stroke="#cfc3a2" stroke-width="1.6" opacity="0.6" fill="none">
  <path d="M50 132 L596 110"/><path d="M52 140 L596 118"/>
</g>
<!-- the gutter, and the leaves behind -->
<path d="M60 122 Q 74 270 66 424" fill="none" stroke="#8b7f61" stroke-width="14" opacity="0.35"/>
<path d="M78 120 Q 90 270 84 424" fill="none" stroke="#fdf8e8" stroke-width="4" opacity="0.4"/>
<!-- ruled columns -->
<g stroke="#8e2f24" stroke-width="1.8" opacity="0.55" fill="none">
  <path d="M320 116 L328 428"/><path d="M420 112 L428 428"/><path d="M520 108 L528 426"/>
  <path d="M108 120 L116 428"/>
</g>
<g stroke="#6b7d96" stroke-width="1.2" opacity="0.5" fill="none">
  <path d="M56 166 L598 144"/><path d="M58 200 L598 178"/><path d="M60 234 L598 212"/><path d="M62 268 L598 246"/>
  <path d="M64 302 L598 280"/><path d="M66 336 L598 314"/><path d="M68 370 L598 348"/><path d="M70 400 L598 378"/>
</g>
<!-- her hand, eleven years of it -->
<g fill="none" stroke="#2b3350" stroke-width="2.6" stroke-linecap="round" opacity="0.85">
  <g>
    <path d="M101 186 q 6 -8.0 13 0.1 q 6 4.4 13 0.1 q 6 -8.0 13 0.1 q 6 4.4 13 0.1"/>
    <path d="M167 190 q 6 -8.0 13 0.1 q 6 4.4 13 0.1"/>
  </g>
  <g>
    <path d="M96 220 q 6 -8.0 13 0.1 q 6 4.4 13 0.1 q 6 -8.0 13 0.1"/>
    <path d="M154 224 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1 q 6 3.3 13 0.1"/>
  </g>
  <g>
    <path d="M97 254 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1 q 6 3.3 13 0.1"/>
    <path d="M161 258 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1"/>
  </g>
  <g>
    <path d="M102 288 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1"/>
    <path d="M158 292 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1 q 6 3.3 13 0.1"/>
  </g>
  <g>
    <path d="M100 322 q 6 -8.0 13 0.1 q 6 4.4 13 0.1 q 6 -8.0 13 0.1 q 6 4.4 13 0.1"/>
    <path d="M170 326 q 6 -8.0 13 0.1 q 6 4.4 13 0.1"/>
  </g>
  <g>
    <path d="M92 356 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1"/>
    <path d="M144 360 q 6 -6.0 13 0.1 q 6 3.3 13 0.1 q 6 -6.0 13 0.1 q 6 3.3 13 0.1"/>
  </g>
</g>
<g fill="#2b3350" opacity="0.8">
  <rect x="342" y="176" width="8" height="12" transform="rotate(-2 346 182)"/><rect x="356" y="175" width="6" height="12" transform="rotate(-2 359 181)"/><rect x="368" y="175" width="9" height="12" transform="rotate(-2 372 181)"/>
  <rect x="446" y="172" width="7" height="12"/><rect x="458" y="172" width="9" height="12"/>
  <rect x="546" y="168" width="8" height="12"/><rect x="558" y="168" width="6" height="12"/>
  <rect x="344" y="244" width="9" height="12"/><rect x="358" y="244" width="7" height="12"/>
  <rect x="448" y="240" width="8" height="12"/><rect x="460" y="240" width="6" height="12"/><rect x="470" y="240" width="9" height="12"/>
  <rect x="548" y="236" width="7" height="12"/><rect x="560" y="236" width="8" height="12"/>
  <rect x="346" y="380" width="8" height="12"/><rect x="360" y="380" width="9" height="12"/>
  <rect x="450" y="376" width="7" height="12"/><rect x="462" y="376" width="8" height="12"/>
  <rect x="550" y="372" width="9" height="12"/>
</g>
<!-- three lines taken out with a razor: paper scraped thin and fibrous -->
<path d="M118 278 L594 256 L598 322 L122 344 Z" fill="#e9dfc0"/>
<path d="M118 278 L594 256 L598 322 L122 344 Z" fill="#c6bb98" opacity="0.35"/>
<g stroke="#b6a884" stroke-width="1" opacity="0.7" fill="none">
  <path d="M124 288 L590 266"/><path d="M126 300 L592 278"/><path d="M128 314 L594 292"/><path d="M130 330 L596 308"/>
</g>
<path d="M118 278 Q 200 274 280 272 Q 400 266 594 256" fill="none" stroke="#a29472" stroke-width="2.6" opacity="0.7"/>
<path d="M122 344 Q 240 338 360 332 Q 480 326 598 322" fill="none" stroke="#a29472" stroke-width="2.6" opacity="0.7"/>
<g fill="#cbbe9c" opacity="0.8">
  <path d="M180 274 l 8 -6 l 3 6 z"/><path d="M300 270 l 7 -7 l 4 7 z"/><path d="M470 262 l 9 -6 l 3 6 z"/>
  <path d="M240 340 l 8 6 l 3 -6 z"/><path d="M400 332 l 7 7 l 4 -7 z"/>
</g>
<!-- and written again, in fresher ink -->
<g fill="none" stroke="#141c33" stroke-width="3" stroke-linecap="round" opacity="0.95">
  <path d="M136 300 q 16 -12 30 2 q 14 12 28 -2 q 16 -12 30 2"/>
  <path d="M232 298 q 16 12 30 -2 q 14 -12 28 2 q 16 12 28 -2"/>
</g>
<g fill="#141c33">
  <rect x="348" y="292" width="9" height="13"/><rect x="362" y="292" width="7" height="13"/><rect x="374" y="291" width="9" height="13"/>
  <rect x="452" y="288" width="8" height="13"/><rect x="464" y="288" width="9" height="13"/>
  <rect x="552" y="284" width="9" height="13"/>
</g>
<!-- the razor she used, still on the page -->
<ellipse cx="440" cy="412" rx="88" ry="14" fill="#000" opacity="0.5" filter="url(#ev1-led-soft)"/>
<path d="M356 396 L520 378 Q 530 378 530 388 L532 410 Q 532 420 522 420 L358 438 Q 348 438 348 428 L346 406 Q 346 396 356 396 Z" fill="url(#ev1-led-steel)"/>
<path d="M358 400 L522 382" fill="none" stroke="#ffffff" stroke-width="3.4" opacity="0.8"/>
<path d="M358 434 L524 416" fill="none" stroke="#3a4148" stroke-width="3" opacity="0.8"/>
<path d="M392 406 L488 396 Q 494 396 494 402 Q 494 408 488 408 L392 418 Q 386 418 386 412 Q 386 406 392 406 Z" fill="#20262b"/>
<path d="M392 408 L488 398" fill="none" stroke="#8f989f" stroke-width="1.6" opacity="0.6"/>
<path d="M366 402 L370 430" fill="none" stroke="#5d666e" stroke-width="1.6" opacity="0.6"/>
<path d="M510 386 L514 414" fill="none" stroke="#5d666e" stroke-width="1.6" opacity="0.6"/>
<path d="M348 428 L358 438" fill="none" stroke="#eef3f6" stroke-width="2" opacity="0.6"/>
<!-- dust, foxing, a wine ring on the corner -->
<g fill="#a98d5f" opacity="0.28">
  <circle cx="200" cy="404" r="2.6"/><circle cx="520" cy="184" r="2.2"/><circle cx="150" cy="222" r="1.8"/><circle cx="410" cy="410" r="2"/>
</g>
<ellipse cx="556" cy="402" rx="40" ry="16" fill="none" stroke="#7c3a22" stroke-width="5" opacity="0.28"/>
<path d="M596 102 Q 584 260 604 420" fill="none" stroke="#fdf8e8" stroke-width="3" opacity="0.35"/>

<rect width="640" height="520" fill="url(#ev1-led-vig)"/>
`,
  },
  /* Celeste's service card, filled out as it is filled out every year: the two
     hours the decanter stood alone, written in her own precise hand. */
  c1_timeline: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-tim-zinc" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6a6a68"/><stop offset="0.45" stop-color="#3f4040"/><stop offset="1" stop-color="#1a1b1c"/>
  </linearGradient>
  <radialGradient id="ev1-tim-pool" cx="0.3" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#f2d493" stop-opacity="0.28"/><stop offset="1" stop-color="#f2d493" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-tim-card" x1="0.08" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f7f1de"/><stop offset="0.5" stop-color="#e7dec3"/><stop offset="1" stop-color="#a29881"/>
  </linearGradient>
  <linearGradient id="ev1-tim-pencil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0d489"/><stop offset="0.35" stop-color="#c79a2f"/><stop offset="0.8" stop-color="#6c4f14"/><stop offset="1" stop-color="#a8801f"/>
  </linearGradient>
  <filter id="ev1-tim-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-tim-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-tim-zinc)"/>
<rect width="640" height="520" fill="url(#ev1-tim-pool)"/>
<g stroke="#8f8f8c" stroke-width="1" opacity="0.3" fill="none">
  <path d="M0 96 Q 200 88 400 98 Q 540 106 640 96"/><path d="M0 150 Q 220 142 420 152"/>
  <path d="M0 300 Q 200 292 400 302 Q 540 310 640 300"/><path d="M0 430 Q 220 422 420 432"/>
  <path d="M60 20 L180 500"/><path d="M420 10 L520 500"/>
</g>
<g stroke="#c9cac6" stroke-width="1.4" opacity="0.22" fill="none">
  <path d="M0 104 Q 200 96 400 106"/><path d="M0 438 Q 220 430 420 440"/><path d="M100 0 L200 510"/>
</g>
<ellipse cx="120" cy="120" rx="66" ry="22" fill="none" stroke="#5c2418" stroke-width="7" opacity="0.3"/>
<ellipse cx="536" cy="452" rx="52" ry="18" fill="none" stroke="#5c2418" stroke-width="6" opacity="0.22"/>
<g fill="#d6d3c6" opacity="0.14">
  <circle cx="86" cy="360" r="2.2"/><circle cx="580" cy="180" r="1.8"/><circle cx="300" cy="60" r="2"/>
</g>

<ellipse cx="330" cy="430" rx="238" ry="36" fill="#000" opacity="0.55" filter="url(#ev1-tim-soft)"/>

<g transform="rotate(-2 320 270)">
  <path d="M92 118 L556 106 L562 420 Q 330 434 98 420 Z" fill="url(#ev1-tim-card)"/>
  <path d="M92 118 L556 106 L556 116 L92 128 Z" fill="#cfc5a8" opacity="0.5"/>
  <rect x="112" y="132" width="428" height="272" fill="none" stroke="#7d7358" stroke-width="2.4" opacity="0.8"/>
  <rect x="118" y="138" width="416" height="260" fill="none" stroke="#7d7358" stroke-width="1" opacity="0.5"/>
  <g stroke="#7d7358" stroke-width="1.6" opacity="0.65" fill="none">
    <path d="M112 196 L540 192"/><path d="M112 248 L540 244"/><path d="M112 300 L540 296"/><path d="M112 352 L540 348"/>
    <path d="M366 132 L370 404"/>
  </g>
  <g stroke="#9a9075" stroke-width="1" opacity="0.5" fill="none">
    <path d="M112 168 L540 164"/><path d="M478 132 L482 404"/>
  </g>
  <g fill="none" stroke="#2b3350" stroke-width="2.8" stroke-linecap="round" opacity="0.88">
    <path d="M140 176 q 18 -12 34 2 q 16 14 32 -2 q 18 -12 34 2 q 16 12 30 -4"/>
    <path d="M256 174 q 16 12 32 -2 q 18 -14 34 2"/>
  </g>
  <g fill="none" stroke="#2b3350" stroke-width="2.8" stroke-linecap="round" opacity="0.85">
  <g>
    <path d="M150 228 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
    <path d="M208 232 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M252 228 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M400 228 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M446 232 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
  </g>
  <g>
    <path d="M150 280 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
    <path d="M208 284 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M400 280 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M446 284 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
  </g>
  <g>
    <path d="M150 332 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
    <path d="M208 336 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M252 332 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M400 332 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M446 336 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
  </g>
  <g>
    <path d="M150 384 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
    <path d="M208 388 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M400 384 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M446 388 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
  </g>
  </g>
  <!-- pencil ticks, added later, in a harder hand -->
  <g fill="none" stroke="#3c3f45" stroke-width="3.4" stroke-linecap="round" opacity="0.75">
    <path d="M500 224 l 8 10 l 18 -22"/><path d="M500 276 l 8 10 l 18 -22"/>
    <path d="M500 328 l 8 10 l 18 -22"/><path d="M500 380 l 8 10 l 18 -22"/>
  </g>
  <!-- the two hours, ringed twice by a thumb that kept coming back -->
  <ellipse cx="418" cy="322" rx="52" ry="34" fill="none" stroke="#2b3350" stroke-width="2.6" opacity="0.5"/>
  <ellipse cx="420" cy="326" rx="58" ry="38" fill="none" stroke="#2b3350" stroke-width="1.8" opacity="0.35"/>
  <g fill="#a08a5c" opacity="0.28">
    <circle cx="180" cy="378" r="2.4"/><circle cx="470" cy="160" r="2"/><circle cx="300" cy="392" r="1.8"/><circle cx="146" cy="264" r="1.6"/>
  </g>
  <g opacity="0.22" fill="none" stroke="#4a4230" stroke-width="1.4">
    <path d="M528 372 q 14 11 0 22"/><path d="M536 364 q 22 19 0 38"/><path d="M544 356 q 30 27 0 54"/>
  </g>
  <path d="M562 420 Q 536 400 510 414 Q 536 426 562 420 Z" fill="#cdc3a6"/>
  <path d="M98 420 Q 330 434 562 420" fill="none" stroke="#80775f" stroke-width="2.4" opacity="0.6"/>
  <path d="M92 118 Q 86 270 98 420" fill="none" stroke="#fdf8ea" stroke-width="3" opacity="0.45"/>
</g>

<!-- her pencil, sharpened with a knife -->
<ellipse cx="392" cy="474" rx="120" ry="12" fill="#000" opacity="0.5" filter="url(#ev1-tim-soft)"/>
<path d="M280 466 L486 440 L488 458 L282 484 Z" fill="url(#ev1-tim-pencil)"/>
<path d="M280 466 L486 440 L487 446 L281 472 Z" fill="#fbe6ac" opacity="0.6"/>
<path d="M282 484 L488 458" fill="none" stroke="#4a3410" stroke-width="3" opacity="0.6"/>
<path d="M486 440 L516 436 L518 452 L488 458 Z" fill="#7d6a4f"/>
<path d="M280 466 L246 470 L248 488 L282 484 Z" fill="#e3d6b6"/>
<path d="M246 470 L222 474 L224 486 L248 488 Z" fill="#d8caa6"/>
<path d="M222 474 L206 478 L208 484 L224 486 Z" fill="#2b2b2e"/>
<path d="M246 470 L222 474" fill="none" stroke="#fdf6e2" stroke-width="2" opacity="0.6"/>
<g fill="#2b2b2e" opacity="0.5">
  <circle cx="212" cy="496" r="2"/><circle cx="228" cy="500" r="1.4"/>
</g>

<rect width="640" height="520" fill="url(#ev1-tim-vig)"/>
`,
  },

  /* The evening tonic tray, laid out at seven and never collected: glass, spoon,
     dropper bottle, and a film of kitchen dust over all three. */
  c1_tray: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-tray-deal" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#7d6238"/><stop offset="0.5" stop-color="#4e3a1f"/><stop offset="1" stop-color="#1d1409"/>
  </linearGradient>
  <radialGradient id="ev1-tray-pool" cx="0.28" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#f4d79a" stop-opacity="0.3"/><stop offset="1" stop-color="#f4d79a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-tray-silver" x1="0.1" y1="0" x2="0.85" y2="1">
    <stop offset="0" stop-color="#f2f4f2"/><stop offset="0.22" stop-color="#b9bdb8"/><stop offset="0.5" stop-color="#7e837f"/>
    <stop offset="0.72" stop-color="#c9cec8"/><stop offset="1" stop-color="#5a5f5c"/>
  </linearGradient>
  <linearGradient id="ev1-tray-glass" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#eef2ee" stop-opacity="0.4"/><stop offset="0.25" stop-color="#ffffff" stop-opacity="0.2"/>
    <stop offset="0.6" stop-color="#c6ccc6" stop-opacity="0.12"/><stop offset="1" stop-color="#e6eae6" stop-opacity="0.42"/>
  </linearGradient>
  <linearGradient id="ev1-tray-amber" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#a86420"/><stop offset="0.18" stop-color="#dfa155"/><stop offset="0.55" stop-color="#5c3110"/><stop offset="1" stop-color="#9c6524"/>
  </linearGradient>
  <filter id="ev1-tray-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-tray-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-tray-deal)"/>
<rect width="640" height="520" fill="url(#ev1-tray-pool)"/>
<g fill="none" stroke="#150e06" stroke-width="3" opacity="0.55">
  <path d="M0 96 Q 200 84 400 96 Q 540 104 640 92"/><path d="M0 246 Q 210 234 410 246 Q 545 254 640 242"/>
  <path d="M0 396 Q 200 384 400 396 Q 540 404 640 392"/>
</g>
<g fill="none" stroke="#a38050" stroke-width="1.2" opacity="0.25">
  <path d="M0 106 Q 200 94 400 106"/><path d="M0 256 Q 210 244 410 256"/><path d="M0 406 Q 200 394 400 406"/>
</g>
<g fill="none" stroke="#2c1e0e" stroke-width="1.4" opacity="0.4">
  <path d="M0 160 Q 180 150 360 158 Q 500 164 640 156"/><path d="M0 330 Q 190 320 380 328"/>
</g>

<ellipse cx="336" cy="392" rx="240" ry="52" fill="#000" opacity="0.6" filter="url(#ev1-tray-soft)"/>

<!-- the salver -->
<ellipse cx="320" cy="336" rx="250" ry="102" fill="url(#ev1-tray-silver)"/>
<ellipse cx="320" cy="330" rx="250" ry="102" fill="#8f948f"/>
<ellipse cx="320" cy="330" rx="250" ry="102" fill="url(#ev1-tray-silver)"/>
<ellipse cx="320" cy="330" rx="222" ry="84" fill="none" stroke="#5d625e" stroke-width="3" opacity="0.7"/>
<ellipse cx="320" cy="328" rx="222" ry="84" fill="none" stroke="#f4f7f4" stroke-width="1.6" opacity="0.5"/>
<ellipse cx="320" cy="330" rx="206" ry="72" fill="#9aa09a" opacity="0.5"/>
<ellipse cx="320" cy="330" rx="206" ry="72" fill="url(#ev1-tray-silver)" opacity="0.6"/>
<path d="M120 292 Q 230 254 400 268" fill="none" stroke="#ffffff" stroke-width="9" opacity="0.4" stroke-linecap="round"/>
<path d="M150 372 Q 300 404 480 380" fill="none" stroke="#2f3532" stroke-width="7" opacity="0.35" stroke-linecap="round"/>
<path d="M78 330 Q 96 288 140 262" fill="none" stroke="#fbfdfb" stroke-width="4" opacity="0.55"/>
<g stroke="#4d534f" stroke-width="1.4" opacity="0.45" fill="none">
  <path d="M108 306 Q 180 282 260 276"/><path d="M380 380 Q 460 372 520 350"/>
</g>
<!-- tarnish in the rim moulding -->
<path d="M96 372 Q 200 424 340 430 Q 460 432 546 392" fill="none" stroke="#3b403d" stroke-width="6" opacity="0.4"/>

<!-- the tumbler -->
<ellipse cx="212" cy="330" rx="52" ry="16" fill="#000" opacity="0.35"/>
<path d="M172 196 L252 196 L246 320 Q 212 332 178 320 Z" fill="url(#ev1-tray-glass)"/>
<ellipse cx="212" cy="196" rx="40" ry="12" fill="none" stroke="#f6f9f6" stroke-width="3" opacity="0.65"/>
<ellipse cx="212" cy="196" rx="40" ry="12" fill="#dfe4df" opacity="0.1"/>
<path d="M184 208 Q 176 262 184 310" fill="none" stroke="#ffffff" stroke-width="7" opacity="0.32" stroke-linecap="round"/>
<path d="M240 212 Q 246 260 238 306" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.2"/>
<ellipse cx="212" cy="320" rx="34" ry="10" fill="#eef2ee" opacity="0.2"/>
<ellipse cx="212" cy="320" rx="34" ry="10" fill="none" stroke="#f2f6f2" stroke-width="2" opacity="0.45"/>
<path d="M180 300 Q 212 312 244 300" fill="none" stroke="#c8cec8" stroke-width="2" opacity="0.35"/>

<!-- the dropper bottle -->
<ellipse cx="352" cy="336" rx="44" ry="14" fill="#000" opacity="0.35"/>
<path d="M322 244 L382 244 L386 316 Q 352 330 318 316 Z" fill="url(#ev1-tray-amber)"/>
<path d="M330 250 Q 326 288 330 314" fill="none" stroke="#f7d296" stroke-width="6" opacity="0.4" stroke-linecap="round"/>
<path d="M374 252 Q 378 288 374 312" fill="none" stroke="#f2c07a" stroke-width="2.6" opacity="0.25"/>
<path d="M320 286 L384 286 L386 316 Q 352 330 318 316 Z" fill="#2b1707" opacity="0.85"/>
<path d="M330 222 L374 222 L378 246 L326 246 Z" fill="url(#ev1-tray-amber)"/>
<path d="M334 190 L370 190 L372 224 L332 224 Z" fill="#171512"/>
<g stroke="#4b443a" stroke-width="1.8" opacity="0.5">
  <path d="M340 192 L340 222"/><path d="M352 192 L352 222"/><path d="M364 192 L364 222"/>
</g>
<path d="M336 192 Q 342 188 352 188" fill="none" stroke="#8e8578" stroke-width="2.6" opacity="0.5"/>
<path d="M330 256 L374 256 L376 272 L328 272 Z" fill="#efe8d4" opacity="0.85"/>
<g stroke="#8a8268" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M336 262 L368 262"/><path d="M336 267 L358 267"/>
</g>

<!-- the spoon -->
<ellipse cx="464" cy="366" rx="60" ry="12" fill="#000" opacity="0.3"/>
<ellipse cx="428" cy="352" rx="34" ry="20" fill="url(#ev1-tray-silver)" transform="rotate(-16 428 352)"/>
<ellipse cx="424" cy="348" rx="24" ry="12" fill="#5f6562" opacity="0.6" transform="rotate(-16 424 348)"/>
<ellipse cx="418" cy="344" rx="12" ry="6" fill="#fbfdfb" opacity="0.6" transform="rotate(-16 418 344)"/>
<path d="M452 344 L546 314 Q 556 312 558 320 Q 560 328 550 331 L456 360 Q 448 362 446 354 Q 444 346 452 344 Z" fill="url(#ev1-tray-silver)"/>
<path d="M454 346 L548 316" fill="none" stroke="#fbfdfb" stroke-width="2.4" opacity="0.7"/>
<path d="M456 358 L550 328" fill="none" stroke="#454b48" stroke-width="2" opacity="0.6"/>

<!-- dust: nobody has touched any of it since seven -->
<g fill="#e6dcc4" opacity="0.16">
  <circle cx="176" cy="284" r="2"/><circle cx="266" cy="252" r="1.6"/><circle cx="404" cy="300" r="2.2"/>
  <circle cx="486" cy="336" r="1.8"/><circle cx="140" cy="342" r="1.5"/><circle cx="344" cy="368" r="2"/>
  <circle cx="232" cy="368" r="1.4"/><circle cx="520" cy="300" r="1.7"/>
</g>
<ellipse cx="320" cy="330" rx="206" ry="72" fill="#d9cfae" opacity="0.07"/>

<rect width="640" height="520" fill="url(#ev1-tray-vig)"/>
`,
  },
  /* Three bottles of the 1898 that are not the 1898: new paper under old dust,
     and glue still glossy at the label's edge. */
  c1_corks: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-cork-stone" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4c4740"/><stop offset="0.5" stop-color="#2b2723"/><stop offset="1" stop-color="#100e0c"/>
  </linearGradient>
  <radialGradient id="ev1-cork-pool" cx="0.28" cy="0.14" r="0.86">
    <stop offset="0" stop-color="#eccd8f" stop-opacity="0.26"/><stop offset="1" stop-color="#eccd8f" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-cork-glass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f4a2c"/><stop offset="0.16" stop-color="#6f9060"/><stop offset="0.42" stop-color="#243b23"/>
    <stop offset="0.8" stop-color="#0e1a0e"/><stop offset="1" stop-color="#33512f"/>
  </linearGradient>
  <linearGradient id="ev1-cork-label" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b9ad91"/><stop offset="0.24" stop-color="#f6efdc"/><stop offset="0.72" stop-color="#e2d8bd"/><stop offset="1" stop-color="#8f8672"/>
  </linearGradient>
  <filter id="ev1-cork-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-cork-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-cork-stone)"/>
<rect width="640" height="520" fill="url(#ev1-cork-pool)"/>
<!-- the bin: cut stone and old timber -->
<g fill="none" stroke="#0c0a09" stroke-width="4" opacity="0.7">
  <path d="M0 92 L640 74"/><path d="M0 448 L640 424"/><path d="M196 0 L204 92"/><path d="M430 0 L438 78"/><path d="M120 448 L128 520"/><path d="M380 446 L390 520"/>
</g>
<g fill="none" stroke="#6d675e" stroke-width="1.6" opacity="0.3">
  <path d="M0 100 L640 82"/><path d="M0 456 L640 432"/>
</g>
<g fill="#5d574d" opacity="0.35">
  <ellipse cx="96" cy="44" rx="52" ry="18"/><ellipse cx="536" cy="40" rx="46" ry="16"/><ellipse cx="300" cy="486" rx="60" ry="18"/>
</g>
<g fill="#8f8779" opacity="0.16">
  <circle cx="60" cy="66" r="2.6"/><circle cx="330" cy="40" r="2"/><circle cx="600" cy="470" r="2.2"/><circle cx="180" cy="482" r="1.8"/>
</g>
<!-- the bottle behind, still asleep -->
<path d="M-10 128 L560 108 Q 604 116 640 138 L640 176 Q 590 190 548 182 L-10 200 Z" fill="#14200f"/>
<path d="M-10 136 L556 116" fill="none" stroke="#4a6440" stroke-width="4" opacity="0.35"/>
<g fill="#a89d84" opacity="0.22">
  <ellipse cx="120" cy="160" rx="90" ry="20"/><ellipse cx="380" cy="150" rx="110" ry="22"/>
</g>

<ellipse cx="330" cy="404" rx="270" ry="42" fill="#000" opacity="0.6" filter="url(#ev1-cork-soft)"/>

<!-- the bottle in your hand: shoulder, neck, and a label that is far too new -->
<g transform="rotate(-6 320 300)">
  <path d="M-20 224 L392 216 Q 448 222 480 244 L556 256 Q 584 262 584 280 Q 584 298 556 304 L480 316 Q 448 338 392 344 L-20 352 Z" fill="url(#ev1-cork-glass)"/>
  <path d="M-20 240 L392 232 Q 440 238 470 256 L556 266" fill="none" stroke="#9dc188" stroke-width="7" opacity="0.4" stroke-linecap="round"/>
  <path d="M-20 258 L392 250 Q 430 254 456 266" fill="none" stroke="#d6e8c8" stroke-width="2.6" opacity="0.3"/>
  <path d="M-20 336 L392 328 Q 442 322 476 306" fill="none" stroke="#04120a" stroke-width="8" opacity="0.55"/>
  <ellipse cx="578" cy="280" rx="10" ry="24" fill="#0b160a"/>
  <ellipse cx="574" cy="272" rx="4" ry="10" fill="#8fae7c" opacity="0.5"/>
  <!-- cork end, driven flush -->
  <ellipse cx="566" cy="280" rx="7" ry="20" fill="#a98553"/>
  <ellipse cx="566" cy="280" rx="7" ry="20" fill="none" stroke="#6d5230" stroke-width="1.6"/>
  <g fill="#75593a" opacity="0.7">
    <ellipse cx="565" cy="270" rx="2.6" ry="3.4"/><ellipse cx="568" cy="284" rx="2" ry="2.6"/><ellipse cx="563" cy="290" rx="1.6" ry="2"/>
  </g>
  <!-- the new label -->
  <path d="M92 238 Q 240 250 356 240 L358 330 Q 240 342 94 330 Z" fill="url(#ev1-cork-label)"/>
  <path d="M92 238 Q 240 250 356 240 L356 246 Q 240 256 94 244 Z" fill="#fffbf0" opacity="0.7"/>
  <path d="M94 330 Q 240 342 358 330" fill="none" stroke="#6f6653" stroke-width="2.4" opacity="0.6"/>
  <rect x="112" y="252" width="224" height="66" fill="none" stroke="#7d3a24" stroke-width="2.4" opacity="0.75"/>
  <rect x="118" y="258" width="212" height="54" fill="none" stroke="#7d3a24" stroke-width="1" opacity="0.5"/>
  <g stroke="#6f6653" stroke-width="2.6" opacity="0.75" fill="none">
    <path d="M140 272 L308 268"/><path d="M140 278 L308 274"/>
  </g>
  <g stroke="#8b8269" stroke-width="1.6" opacity="0.6" fill="none">
    <path d="M150 292 L296 289"/><path d="M164 302 L282 299"/>
  </g>
  <circle cx="224" cy="286" r="13" fill="none" stroke="#7d3a24" stroke-width="1.8" opacity="0.6"/>
  <!-- glue, still glossy, squeezed out under the edge -->
  <path d="M92 238 Q 240 250 356 240" fill="none" stroke="#d9c98f" stroke-width="4" opacity="0.6"/>
  <path d="M120 244 Q 200 252 280 248" fill="none" stroke="#fbf3cf" stroke-width="2" opacity="0.65"/>
  <path d="M356 240 Q 366 284 358 330" fill="none" stroke="#cbbb85" stroke-width="5" opacity="0.55"/>
  <path d="M358 250 Q 366 286 360 320" fill="none" stroke="#fdf6d6" stroke-width="1.8" opacity="0.6"/>
  <path d="M356 262 q 12 6 10 18 q -10 4 -12 -6 z" fill="#e8d9a2" opacity="0.7"/>
</g>

<!-- thirty years of dust, and the swipe of a thumb through it -->
<g fill="#b6ab90" opacity="0.2">
  <path d="M-10 236 Q 40 224 78 238 Q 112 250 104 282 Q 116 318 82 336 Q 40 350 -10 344 Z"/>
  <path d="M374 230 Q 424 232 462 252 Q 486 268 476 292 Q 452 328 396 336 Q 372 300 380 266 Z"/>
</g>
<g fill="#cdc2a4" opacity="0.14">
  <ellipse cx="40" cy="264" rx="44" ry="13" transform="rotate(-6 40 264)"/><ellipse cx="428" cy="258" rx="34" ry="11" transform="rotate(-6 428 258)"/>
  <ellipse cx="58" cy="320" rx="36" ry="9" transform="rotate(-6 58 320)"/><ellipse cx="418" cy="308" rx="28" ry="8" transform="rotate(-6 418 308)"/>
</g>
<path d="M400 238 Q 448 248 486 268" fill="none" stroke="#2a2a22" stroke-width="14" opacity="0.3" stroke-linecap="round"/>
<path d="M402 244 Q 448 254 484 274" fill="none" stroke="#cdc2a4" stroke-width="3" opacity="0.35"/>
<g fill="#d8ceb2" opacity="0.2">
  <circle cx="150" cy="380" r="2.4"/><circle cx="470" cy="366" r="2"/><circle cx="60" cy="400" r="1.8"/><circle cx="300" cy="386" r="1.6"/>
</g>
<path d="M40 176 Q 120 196 96 226" fill="none" stroke="#cfc7b4" stroke-width="1.4" opacity="0.28"/>
<path d="M60 172 Q 118 188 108 218" fill="none" stroke="#cfc7b4" stroke-width="1" opacity="0.2"/>

<rect width="640" height="520" fill="url(#ev1-cork-vig)"/>
`,
  },

  /* Down the back of the wicker settee: a man's cufflink and a long thread of
     sea-green silk, pressed into the weave. */
  c1_cufflink: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-cuff-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#3a2f1e"/><stop offset="0.6" stop-color="#1d1710"/><stop offset="1" stop-color="#0a0806"/>
  </linearGradient>
  <radialGradient id="ev1-cuff-pool" cx="0.3" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#f2d193" stop-opacity="0.3"/><stop offset="1" stop-color="#f2d193" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-cuff-wicker" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#d8b478"/><stop offset="0.45" stop-color="#a67e42"/><stop offset="1" stop-color="#5c421e"/>
  </linearGradient>
  <linearGradient id="ev1-cuff-gold" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fdf0bd"/><stop offset="0.2" stop-color="#dcb84e"/><stop offset="0.55" stop-color="#8f6a19"/>
    <stop offset="0.8" stop-color="#5d4310"/><stop offset="1" stop-color="#c9a239"/>
  </linearGradient>
  <linearGradient id="ev1-cuff-silk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#bfe0cc"/><stop offset="0.5" stop-color="#5f9c7e"/><stop offset="1" stop-color="#2c5644"/>
  </linearGradient>
  <filter id="ev1-cuff-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="7"/></filter>
  <radialGradient id="ev1-cuff-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-cuff-bg)"/>
<rect width="640" height="520" fill="url(#ev1-cuff-pool)"/>

<!-- the wicker: uprights first, then the weave over them -->
<g fill="url(#ev1-cuff-wicker)">
  <rect x="30" y="0" width="26" height="520" rx="12"/><rect x="106" y="0" width="26" height="520" rx="12"/>
  <rect x="182" y="0" width="26" height="520" rx="12"/><rect x="258" y="0" width="26" height="520" rx="12"/>
  <rect x="334" y="0" width="26" height="520" rx="12"/><rect x="410" y="0" width="26" height="520" rx="12"/>
  <rect x="486" y="0" width="26" height="520" rx="12"/><rect x="562" y="0" width="26" height="520" rx="12"/>
</g>
<g fill="#3b2a10" opacity="0.5">
  <rect x="68" y="0" width="38" height="520"/><rect x="144" y="0" width="38" height="520"/><rect x="220" y="0" width="38" height="520"/>
  <rect x="296" y="0" width="38" height="520"/><rect x="372" y="0" width="38" height="520"/><rect x="448" y="0" width="38" height="520"/>
  <rect x="524" y="0" width="38" height="520"/><rect x="600" y="0" width="40" height="520"/>
</g>
<g fill="url(#ev1-cuff-wicker)">
  <rect x="0" y="16" width="640" height="30" rx="14"/><rect x="0" y="92" width="640" height="30" rx="14"/>
  <rect x="0" y="168" width="640" height="30" rx="14"/><rect x="0" y="320" width="640" height="30" rx="14"/>
  <rect x="0" y="396" width="640" height="30" rx="14"/><rect x="0" y="472" width="640" height="30" rx="14"/>
</g>
<g fill="#fbe6b6" opacity="0.28">
  <rect x="0" y="18" width="640" height="6" rx="3"/><rect x="0" y="94" width="640" height="6" rx="3"/>
  <rect x="0" y="170" width="640" height="6" rx="3"/><rect x="0" y="322" width="640" height="6" rx="3"/>
  <rect x="0" y="398" width="640" height="6" rx="3"/><rect x="0" y="474" width="640" height="6" rx="3"/>
</g>
<g fill="#2b1d0a" opacity="0.55">
  <rect x="0" y="40" width="640" height="7"/><rect x="0" y="116" width="640" height="7"/>
  <rect x="0" y="192" width="640" height="7"/><rect x="0" y="344" width="640" height="7"/>
  <rect x="0" y="420" width="640" height="7"/><rect x="0" y="496" width="640" height="7"/>
</g>
<!-- the crack the cushion left open -->
<path d="M0 206 L640 198 L640 316 L0 324 Z" fill="#100b05"/>
<path d="M0 206 L640 198 L640 214 L0 222 Z" fill="#5b4223" opacity="0.7"/>
<path d="M0 310 L640 302 L640 316 L0 324 Z" fill="#6b4f2a" opacity="0.5"/>
<g fill="#d7b47c" opacity="0.12">
  <ellipse cx="120" cy="238" rx="70" ry="10"/><ellipse cx="470" cy="292" rx="90" ry="12"/>
</g>
<g fill="#e2d3b0" opacity="0.16">
  <circle cx="90" cy="278" r="2"/><circle cx="290" cy="248" r="1.6"/><circle cx="520" cy="264" r="2.2"/><circle cx="200" cy="300" r="1.4"/>
</g>

<ellipse cx="290" cy="288" rx="86" ry="22" fill="#000" opacity="0.65" filter="url(#ev1-cuff-soft)"/>

<!-- the cufflink -->
<ellipse cx="266" cy="264" rx="54" ry="38" fill="url(#ev1-cuff-gold)"/>
<ellipse cx="266" cy="262" rx="54" ry="38" fill="none" stroke="#fdf3ca" stroke-width="2.4" opacity="0.6"/>
<ellipse cx="266" cy="264" rx="40" ry="27" fill="#6d4f13" opacity="0.55"/>
<ellipse cx="266" cy="262" rx="40" ry="27" fill="url(#ev1-cuff-gold)" opacity="0.85"/>
<ellipse cx="266" cy="262" rx="40" ry="27" fill="none" stroke="#4a350c" stroke-width="1.6" opacity="0.7"/>
<path d="M238 246 Q 266 234 296 246" fill="none" stroke="#fff7d8" stroke-width="5" opacity="0.65" stroke-linecap="round"/>
<path d="M240 280 Q 268 292 294 280" fill="none" stroke="#3d2b08" stroke-width="4" opacity="0.6" stroke-linecap="round"/>
<g stroke="#4a350c" stroke-width="3" opacity="0.65" stroke-linecap="round" fill="none">
  <path d="M250 252 L244 274"/><path d="M258 254 L266 270"/><path d="M282 250 L276 274"/>
</g>
<g stroke="#fff3cc" stroke-width="1.2" opacity="0.4" fill="none">
  <path d="M249 250 L243 272"/><path d="M281 248 L275 272"/>
</g>
<ellipse cx="248" cy="248" rx="10" ry="6" fill="#fffbe4" opacity="0.6" transform="rotate(-24 248 248)"/>
<!-- the chain and the back of it, tipped into the dark -->
<path d="M310 274 Q 336 288 350 306" fill="none" stroke="#8f6a19" stroke-width="6" opacity="0.9"/>
<path d="M310 272 Q 334 286 348 302" fill="none" stroke="#f0d68a" stroke-width="2" opacity="0.6"/>
<ellipse cx="362" cy="314" rx="26" ry="15" fill="#7d5c15" transform="rotate(18 362 314)"/>
<ellipse cx="360" cy="310" rx="20" ry="11" fill="url(#ev1-cuff-gold)" opacity="0.8" transform="rotate(18 360 310)"/>
<ellipse cx="354" cy="306" rx="8" ry="4" fill="#fff3cc" opacity="0.5" transform="rotate(18 354 306)"/>
<!-- scratches, and a small nick on the rim -->
<g stroke="#fff7d8" stroke-width="1.1" opacity="0.4" fill="none">
  <path d="M226 268 L240 262"/><path d="M292 268 L306 264"/><path d="M262 288 L280 286"/>
</g>
<path d="M216 262 q 5 -6 9 0 q -4 5 -9 0 z" fill="#3d2b08" opacity="0.7"/>

<!-- the thread of sea-green silk, snagged in the weave -->
<path d="M92 236 Q 176 214 236 246 Q 300 282 380 264 Q 456 246 520 282 Q 566 308 612 296" fill="none" stroke="url(#ev1-cuff-silk)" stroke-width="6" stroke-linecap="round"/>
<path d="M92 234 Q 176 212 236 244 Q 300 280 380 262 Q 456 244 520 280 Q 566 306 612 294" fill="none" stroke="#d6f0e0" stroke-width="1.6" opacity="0.65"/>
<path d="M92 236 Q 66 244 52 262 Q 44 278 56 288" fill="none" stroke="url(#ev1-cuff-silk)" stroke-width="5" stroke-linecap="round"/>
<path d="M612 296 Q 626 306 622 320" fill="none" stroke="#4d8468" stroke-width="4" stroke-linecap="round"/>
<g stroke="#7fb99a" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M148 220 L156 208"/><path d="M330 274 L336 286"/><path d="M470 252 L476 240"/>
</g>

<rect width="640" height="520" fill="url(#ev1-cuff-vig)"/>
`,
  },
  /* Margaret's foxglove bed, trampled in the dark: stems snapped, not cut, and
     nothing at all harvested. */
  c1_foxglove: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-fox-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#14202a"/><stop offset="0.6" stop-color="#0d151a"/><stop offset="1" stop-color="#0a0e0c"/>
  </linearGradient>
  <radialGradient id="ev1-fox-pool" cx="0.28" cy="0.1" r="0.86">
    <stop offset="0" stop-color="#cfe3c0" stop-opacity="0.18"/><stop offset="1" stop-color="#cfe3c0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-fox-soil" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#4a3a26"/><stop offset="0.45" stop-color="#2c2115"/><stop offset="1" stop-color="#120d08"/>
  </linearGradient>
  <linearGradient id="ev1-fox-stem" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8aa15c"/><stop offset="0.4" stop-color="#5b7038"/><stop offset="1" stop-color="#2d3a1a"/>
  </linearGradient>
  <linearGradient id="ev1-fox-bell" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#e8bcd6"/><stop offset="0.35" stop-color="#c07fb0"/><stop offset="0.75" stop-color="#8b4f80"/><stop offset="1" stop-color="#4e2748"/>
  </linearGradient>
  <filter id="ev1-fox-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-fox-vig" cx="0.44" cy="0.4" r="0.76">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-fox-night)"/>
<rect width="640" height="520" fill="url(#ev1-fox-pool)"/>
<g fill="none" stroke="#2b3c46" stroke-width="3" opacity="0.5">
  <path d="M120 0 L120 300"/><path d="M340 0 L340 290"/><path d="M540 0 L540 296"/><path d="M0 130 L640 126"/>
</g>
<g fill="none" stroke="#5d7683" stroke-width="1.2" opacity="0.22">
  <path d="M126 0 L126 300"/><path d="M0 136 L640 132"/>
</g>
<path d="M20 40 L80 30 L96 120 L34 130 Z" fill="#7f9aa6" opacity="0.1"/>

<!-- the bed -->
<path d="M0 288 Q 160 262 330 282 Q 490 302 640 276 L640 520 L0 520 Z" fill="url(#ev1-fox-soil)"/>
<g fill="#5b482e" opacity="0.5">
  <ellipse cx="90" cy="352" rx="46" ry="16"/><ellipse cx="300" cy="386" rx="60" ry="18"/><ellipse cx="520" cy="344" rx="52" ry="16"/>
</g>
<g fill="#13100a" opacity="0.7">
  <ellipse cx="140" cy="392" rx="26" ry="10"/><ellipse cx="560" cy="410" rx="24" ry="9"/><ellipse cx="70" cy="440" rx="22" ry="8"/>
</g>
<!-- a bootheel, pressed in wet earth -->
<ellipse cx="356" cy="440" rx="72" ry="40" fill="#0f0c07" opacity="0.75" transform="rotate(-16 356 440)"/>
<ellipse cx="356" cy="434" rx="66" ry="35" fill="#2a2014" opacity="0.8" transform="rotate(-16 356 434)"/>
<g stroke="#0c0906" stroke-width="5" opacity="0.6" fill="none" transform="rotate(-16 356 434)">
  <path d="M310 420 L400 412"/><path d="M312 434 L402 426"/><path d="M314 448 L404 440"/>
</g>
<path d="M292 452 Q 356 486 420 448" fill="none" stroke="#6a5636" stroke-width="3" opacity="0.4"/>

<!-- what is left standing -->
<path d="M556 300 Q 546 216 552 118" fill="none" stroke="url(#ev1-fox-stem)" stroke-width="12" stroke-linecap="round"/>
<path d="M552 296 Q 543 216 549 122" fill="none" stroke="#a8bf7c" stroke-width="3" opacity="0.5"/>
<path d="M604 300 Q 598 232 606 166" fill="none" stroke="url(#ev1-fox-stem)" stroke-width="9" stroke-linecap="round"/>
<path d="M601 296 Q 596 232 603 170" fill="none" stroke="#a8bf7c" stroke-width="2.4" opacity="0.4"/>
<g transform="rotate(4 552 132)"><path d="M544 132 Q 532 153 534 172 Q 535 184 552 186 Q 569 184 570 172 Q 572 153 560 132 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="552" cy="183" rx="16" ry="6" fill="#4e2748"/><ellipse cx="549" cy="183" rx="9" ry="3" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="546" cy="182" r="2.4"/><circle cx="556" cy="184" r="1.9"/><circle cx="551" cy="179" r="1.6"/></g><path d="M538 147 Q 535 163 537 177" fill="none" stroke="#f6dcee" stroke-width="2.6" opacity="0.45"/><path d="M565 148 Q 568 163 566 177" fill="none" stroke="#3f2038" stroke-width="2.2" opacity="0.45"/><path d="M545 134 q 7 -6 14 0" fill="none" stroke="#5b7038" stroke-width="4.0" stroke-linecap="round"/></g>
<g transform="rotate(10 590 186)"><path d="M583 186 Q 572 205 574 222 Q 575 233 590 235 Q 605 233 606 222 Q 608 205 597 186 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="590" cy="232" rx="15" ry="5" fill="#4e2748"/><ellipse cx="588" cy="232" rx="8" ry="3" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="584" cy="231" r="2.2"/><circle cx="593" cy="233" r="1.7"/><circle cx="589" cy="228" r="1.4"/></g><path d="M578 199 Q 575 214 576 226" fill="none" stroke="#f6dcee" stroke-width="2.3" opacity="0.45"/><path d="M601 200 Q 605 214 603 226" fill="none" stroke="#3f2038" stroke-width="2.0" opacity="0.45"/><path d="M584 188 q 6 -5 13 0" fill="none" stroke="#5b7038" stroke-width="3.6" stroke-linecap="round"/></g>
<g transform="rotate(-6 540 206)"><path d="M533 206 Q 523 224 525 240 Q 525 250 540 252 Q 555 250 555 240 Q 557 224 547 206 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="540" cy="249" rx="14" ry="5" fill="#4e2748"/><ellipse cx="538" cy="249" rx="8" ry="3" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="535" cy="248" r="2.0"/><circle cx="543" cy="250" r="1.6"/><circle cx="539" cy="246" r="1.4"/></g><path d="M529 218 Q 525 233 527 244" fill="none" stroke="#f6dcee" stroke-width="2.2" opacity="0.45"/><path d="M551 219 Q 554 233 552 244" fill="none" stroke="#3f2038" stroke-width="1.9" opacity="0.45"/><path d="M534 208 q 6 -5 12 0" fill="none" stroke="#5b7038" stroke-width="3.4" stroke-linecap="round"/></g>
<g transform="rotate(14 600 250)"><path d="M594 250 Q 585 266 586 280 Q 587 289 600 291 Q 613 289 614 280 Q 615 266 606 250 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="600" cy="288" rx="12" ry="4" fill="#4e2748"/><ellipse cx="598" cy="288" rx="7" ry="2" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="595" cy="287" r="1.8"/><circle cx="603" cy="289" r="1.4"/><circle cx="599" cy="285" r="1.2"/></g><path d="M590 261 Q 587 273 589 284" fill="none" stroke="#f6dcee" stroke-width="2.0" opacity="0.45"/><path d="M609 262 Q 612 273 611 284" fill="none" stroke="#3f2038" stroke-width="1.7" opacity="0.45"/><path d="M595 252 q 5 -4 11 0" fill="none" stroke="#5b7038" stroke-width="3.0" stroke-linecap="round"/></g>

<!-- and what was walked through: snapped, hinged over, still attached -->
<path d="M168 300 Q 160 250 176 210" fill="none" stroke="url(#ev1-fox-stem)" stroke-width="13" stroke-linecap="round"/>
<path d="M176 210 Q 188 206 200 216" fill="none" stroke="#7b8f4e" stroke-width="7" stroke-linecap="round"/>
<path d="M176 206 Q 214 246 236 320" fill="none" stroke="url(#ev1-fox-stem)" stroke-width="12" stroke-linecap="round"/>
<g stroke="#c8d99a" stroke-width="2.4" opacity="0.55" fill="none">
  <path d="M172 210 q 8 -6 16 2"/><path d="M170 216 q 10 -4 20 6"/><path d="M174 222 q 12 -2 22 10"/>
</g>
<path d="M164 296 Q 158 252 172 214" fill="none" stroke="#a8bf7c" stroke-width="3" opacity="0.45"/>
<path d="M300 306 Q 264 274 220 268" fill="none" stroke="url(#ev1-fox-stem)" stroke-width="11" stroke-linecap="round"/>
<path d="M220 268 Q 200 262 190 270" fill="none" stroke="#4a5c2c" stroke-width="6" stroke-linecap="round"/>
<path d="M92 320 Q 128 300 190 302" fill="none" stroke="url(#ev1-fox-stem)" stroke-width="10" stroke-linecap="round"/>
<!-- bells crushed into the earth -->
<g transform="rotate(118 224 296)"><path d="M216 296 Q 205 316 207 334 Q 208 345 224 347 Q 240 345 241 334 Q 243 316 232 296 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="224" cy="344" rx="15" ry="5" fill="#4e2748"/><ellipse cx="221" cy="344" rx="9" ry="3" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="218" cy="343" r="2.3"/><circle cx="227" cy="345" r="1.8"/><circle cx="223" cy="340" r="1.5"/></g><path d="M211 310 Q 208 326 209 338" fill="none" stroke="#f6dcee" stroke-width="2.5" opacity="0.45"/><path d="M236 311 Q 239 326 238 338" fill="none" stroke="#3f2038" stroke-width="2.1" opacity="0.45"/><path d="M217 298 q 7 -6 14 0" fill="none" stroke="#5b7038" stroke-width="3.8" stroke-linecap="round"/></g>
<g transform="rotate(-126 300 326)"><path d="M293 326 Q 282 345 284 362 Q 285 373 300 375 Q 315 373 316 362 Q 318 345 307 326 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="300" cy="372" rx="15" ry="5" fill="#4e2748"/><ellipse cx="298" cy="372" rx="8" ry="3" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="294" cy="371" r="2.2"/><circle cx="303" cy="373" r="1.7"/><circle cx="299" cy="368" r="1.4"/></g><path d="M288 339 Q 285 354 286 366" fill="none" stroke="#f6dcee" stroke-width="2.3" opacity="0.45"/><path d="M311 340 Q 315 354 313 366" fill="none" stroke="#3f2038" stroke-width="2.0" opacity="0.45"/><path d="M294 328 q 6 -5 13 0" fill="none" stroke="#5b7038" stroke-width="3.6" stroke-linecap="round"/></g>
<g transform="rotate(74 120 330)"><path d="M114 330 Q 104 347 106 362 Q 106 372 120 373 Q 134 372 134 362 Q 136 347 126 330 Z" fill="url(#ev1-fox-bell)"/><ellipse cx="120" cy="371" rx="13" ry="5" fill="#4e2748"/><ellipse cx="118" cy="371" rx="7" ry="2" fill="#f0d2e6" opacity="0.35"/><g fill="#3d1c38" opacity="0.9"><circle cx="115" cy="370" r="1.9"/><circle cx="123" cy="372" r="1.5"/><circle cx="119" cy="367" r="1.3"/></g><path d="M109 342 Q 106 355 108 366" fill="none" stroke="#f6dcee" stroke-width="2.1" opacity="0.45"/><path d="M130 342 Q 133 355 132 366" fill="none" stroke="#3f2038" stroke-width="1.8" opacity="0.45"/><path d="M114 332 q 6 -5 12 0" fill="none" stroke="#5b7038" stroke-width="3.2" stroke-linecap="round"/></g>
<!-- torn leaves, bruised where a heel went through -->
<path d="M60 330 Q 118 306 168 330 Q 120 358 60 330 Z" fill="#4a5f2b"/>
<path d="M60 330 Q 118 312 168 330" fill="none" stroke="#93a95f" stroke-width="2.4" opacity="0.6"/>
<g stroke="#31401c" stroke-width="1.6" opacity="0.7" fill="none">
  <path d="M78 328 Q 92 336 96 346"/><path d="M104 324 Q 116 334 120 346"/><path d="M130 324 Q 140 332 144 342"/>
</g>
<path d="M404 344 Q 460 322 512 348 Q 458 372 404 344 Z" fill="#3f5426"/>
<path d="M404 344 Q 460 328 512 348" fill="none" stroke="#7d9450" stroke-width="2.2" opacity="0.5"/>
<path d="M448 336 L470 366 L488 340" fill="none" stroke="#1b2410" stroke-width="3" opacity="0.8"/>
<path d="M236 396 Q 268 382 300 396 Q 266 412 236 396 Z" fill="#2f3f1c" opacity="0.9"/>
<!-- petals knocked loose, lying in the dirt -->
<g fill="#a76a97" opacity="0.85">
  <ellipse cx="470" cy="430" rx="14" ry="7" transform="rotate(20 470 430)"/>
  <ellipse cx="196" cy="436" rx="12" ry="6" transform="rotate(-30 196 436)"/>
  <ellipse cx="118" cy="404" rx="10" ry="5" transform="rotate(46 118 404)"/>
</g>

<rect width="640" height="520" fill="url(#ev1-fox-vig)"/>
`,
  },

  /* The dumbwaiter hatch, standing open: a wooden throat from the kitchen to the
     study, and every word carried down with the soup. */
  c1_shaft: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-shaft-wall" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#b5ab92"/><stop offset="0.5" stop-color="#8a8069"/><stop offset="1" stop-color="#4a4436"/>
  </linearGradient>
  <radialGradient id="ev1-shaft-pool" cx="0.26" cy="0.1" r="0.86">
    <stop offset="0" stop-color="#f7dda0" stop-opacity="0.34"/><stop offset="1" stop-color="#f7dda0" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-shaft-frame" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#7d5a30"/><stop offset="0.45" stop-color="#4c3519"/><stop offset="1" stop-color="#22170a"/>
  </linearGradient>
  <radialGradient id="ev1-shaft-dark" cx="0.5" cy="0.9" r="0.9">
    <stop offset="0" stop-color="#2a2117"/><stop offset="0.55" stop-color="#0e0b07"/><stop offset="1" stop-color="#000000"/>
  </radialGradient>
  <linearGradient id="ev1-shaft-rope" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3a2f1c"/><stop offset="0.35" stop-color="#a18a58"/><stop offset="1" stop-color="#4a3d22"/>
  </linearGradient>
  <filter id="ev1-shaft-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-shaft-vig" cx="0.46" cy="0.44" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-shaft-wall)"/>
<rect width="640" height="520" fill="url(#ev1-shaft-pool)"/>
<!-- whitewashed brick, grimed by thirty years of kitchen -->
<g stroke="#5f5847" stroke-width="2.4" opacity="0.45" fill="none">
  <path d="M0 60 L640 54"/><path d="M0 124 L640 118"/><path d="M0 188 L640 182"/><path d="M0 380 L640 374"/><path d="M0 444 L640 438"/>
  <path d="M0 508 L640 502"/>
</g>
<g stroke="#5f5847" stroke-width="2" opacity="0.35" fill="none">
  <path d="M64 60 L64 124"/><path d="M192 60 L192 124"/><path d="M320 58 L320 122"/><path d="M448 56 L448 120"/><path d="M576 56 L576 118"/>
  <path d="M0 124 L0 188"/><path d="M128 122 L128 186"/><path d="M256 122 L256 186"/><path d="M384 120 L384 184"/><path d="M512 118 L512 182"/>
  <path d="M64 380 L64 444"/><path d="M192 378 L192 442"/><path d="M448 376 L448 440"/><path d="M576 374 L576 438"/>
  <path d="M128 444 L128 508"/><path d="M384 440 L384 504"/><path d="M512 438 L512 502"/>
</g>
<g fill="#c9c0a6" opacity="0.2">
  <ellipse cx="80" cy="90" rx="46" ry="16"/><ellipse cx="560" cy="88" rx="40" ry="14"/><ellipse cx="90" cy="470" rx="52" ry="16"/>
</g>
<g fill="#2f2a1e" opacity="0.25">
  <ellipse cx="330" cy="500" rx="180" ry="26"/><ellipse cx="60" cy="240" rx="40" ry="60"/><ellipse cx="600" cy="250" rx="36" ry="60"/>
</g>

<!-- the hatch frame -->
<path d="M84 132 L556 122 L560 420 L88 430 Z" fill="url(#ev1-shaft-frame)"/>
<path d="M84 132 L556 122 L556 140 L84 150 Z" fill="#9a7440" opacity="0.6"/>
<path d="M88 430 L560 420 L560 404 L88 414 Z" fill="#150e06" opacity="0.7"/>
<path d="M124 168 L516 160 L520 388 L128 396 Z" fill="url(#ev1-shaft-dark)"/>
<path d="M124 168 L516 160 L518 186 L126 194 Z" fill="#000" opacity="0.8"/>
<path d="M128 396 L520 388 L516 366 L132 374 Z" fill="#2c2115"/>
<path d="M128 396 L520 388 L520 380 L128 388 Z" fill="#6d5228" opacity="0.5"/>

<!-- the shaft itself: boards going up into nothing -->
<g stroke="#221a10" stroke-width="4" opacity="0.7" fill="none">
  <path d="M170 168 L182 366"/><path d="M250 166 L256 366"/><path d="M340 164 L340 364"/><path d="M430 162 L424 364"/>
</g>
<g stroke="#544430" stroke-width="1.4" opacity="0.35" fill="none">
  <path d="M176 168 L188 366"/><path d="M346 164 L346 364"/>
</g>
<path d="M124 168 L516 160 L500 240 L142 246 Z" fill="#000" opacity="0.55"/>
<!-- the car, waiting somewhere above -->
<path d="M146 196 L498 190 L496 214 L148 220 Z" fill="#3a2c1a"/>
<path d="M146 196 L498 190 L498 198 L146 204 Z" fill="#6f5630" opacity="0.7"/>
<path d="M148 220 L496 214 L494 226 L150 232 Z" fill="#120c06"/>
<!-- ropes -->
<path d="M212 190 L216 366" fill="none" stroke="url(#ev1-shaft-rope)" stroke-width="11"/>
<path d="M208 190 L212 366" fill="none" stroke="#d8c290" stroke-width="2.6" opacity="0.5"/>
<g stroke="#2a2213" stroke-width="1.6" opacity="0.6" fill="none">
  <path d="M207 210 L218 220"/><path d="M207 240 L218 250"/><path d="M208 270 L219 280"/><path d="M209 300 L220 310"/><path d="M210 330 L221 340"/>
</g>
<path d="M420 190 L414 368" fill="none" stroke="url(#ev1-shaft-rope)" stroke-width="9"/>
<path d="M417 190 L411 368" fill="none" stroke="#d8c290" stroke-width="2" opacity="0.4"/>
<g stroke="#2a2213" stroke-width="1.4" opacity="0.55" fill="none">
  <path d="M414 214 L424 224"/><path d="M413 254 L423 264"/><path d="M412 294 L422 304"/><path d="M411 334 L421 344"/>
</g>

<!-- the sill, worn to bare wood by thirty years of trays -->
<path d="M88 430 L560 420 L588 462 L62 474 Z" fill="#7a5a30"/>
<path d="M88 430 L560 420 L570 436 L80 448 Z" fill="#a67c42" opacity="0.8"/>
<g stroke="#4a3418" stroke-width="2" opacity="0.5" fill="none">
  <path d="M100 448 Q 320 438 570 430"/><path d="M96 460 Q 320 450 578 442"/>
</g>
<path d="M180 436 Q 320 428 470 424" fill="none" stroke="#d3a967" stroke-width="6" opacity="0.35"/>
<path d="M240 448 q 26 -8 44 2" fill="none" stroke="#2c1f0d" stroke-width="4" opacity="0.5"/>
<!-- brass catch, polished by use -->
<path d="M520 434 L562 430 L566 452 L524 456 Z" fill="#8f6a19"/>
<path d="M520 434 L562 430 L562 438 L520 442 Z" fill="#f2dc9a" opacity="0.7"/>
<circle cx="542" cy="444" r="7" fill="#4a350c"/>
<circle cx="540" cy="442" r="3" fill="#f7e6ae" opacity="0.7"/>
<!-- kitchen light spilling onto the near edge -->
<path d="M62 474 L588 462 L588 470 L62 482 Z" fill="#f3dfae" opacity="0.35"/>
<g fill="#e8dcbc" opacity="0.16">
  <circle cx="140" cy="458" r="2.2"/><circle cx="420" cy="446" r="1.8"/><circle cx="300" cy="466" r="2"/>
</g>

<rect width="640" height="520" fill="url(#ev1-shaft-vig)"/>
`,
  },
  /* Under folded shirts in Gordon's valise: a broker's envelope, and receipts
     for three bottles that should still be in the cellar. */
  c1_receipts: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-rec-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a4438"/><stop offset="0.55" stop-color="#231f18"/><stop offset="1" stop-color="#0c0a08"/>
  </linearGradient>
  <radialGradient id="ev1-rec-pool" cx="0.28" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#f3d79c" stop-opacity="0.3"/><stop offset="1" stop-color="#f3d79c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-rec-linen" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#efe9d8"/><stop offset="0.5" stop-color="#cfc7b0"/><stop offset="1" stop-color="#807a68"/>
  </linearGradient>
  <linearGradient id="ev1-rec-slip" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f8f2df"/><stop offset="0.55" stop-color="#e6dcc0"/><stop offset="1" stop-color="#a49a80"/>
  </linearGradient>
  <linearGradient id="ev1-rec-env" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#d9c69a"/><stop offset="0.5" stop-color="#bdaf80"/><stop offset="1" stop-color="#7c6f52"/>
  </linearGradient>
  <filter id="ev1-rec-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-rec-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-rec-bg)"/>
<rect width="640" height="520" fill="url(#ev1-rec-pool)"/>
<!-- folded shirts, packed in a hurry -->
<path d="M0 120 Q 180 92 360 118 Q 500 138 640 108 L640 520 L0 520 Z" fill="url(#ev1-rec-linen)"/>
<g fill="#b3ab94" opacity="0.55">
  <path d="M0 196 Q 180 170 360 194 Q 500 212 640 184 L640 208 Q 500 236 360 218 Q 180 194 0 220 Z"/>
  <path d="M0 330 Q 180 304 360 328 Q 500 346 640 318 L640 342 Q 500 370 360 352 Q 180 328 0 354 Z"/>
</g>
<g fill="#fbf7ea" opacity="0.5">
  <path d="M0 190 Q 180 164 360 188 Q 500 206 640 178 L640 186 Q 500 214 360 196 Q 180 172 0 198 Z"/>
  <path d="M0 324 Q 180 298 360 322 Q 500 340 640 312 L640 320 Q 500 348 360 330 Q 180 306 0 332 Z"/>
</g>
<g stroke="#9a927c" stroke-width="1" opacity="0.3" fill="none">
  <path d="M0 150 Q 320 122 640 140"/><path d="M0 260 Q 320 232 640 250"/><path d="M0 420 Q 320 392 640 410"/>
  <path d="M90 130 L110 520"/><path d="M280 116 L300 520"/><path d="M470 128 L490 520"/>
</g>

<ellipse cx="330" cy="404" rx="250" ry="46" fill="#000" opacity="0.5" filter="url(#ev1-rec-soft)"/>

<!-- the envelope they came in, torn open -->
<g transform="rotate(6 320 300)">
  <path d="M92 208 L520 176 L536 372 L108 404 Z" fill="url(#ev1-rec-env)"/>
  <path d="M92 208 L314 300 L520 176 L516 196 L314 314 L96 228 Z" fill="#a8946c" opacity="0.6"/>
  <path d="M92 208 L314 300 L520 176" fill="none" stroke="#6f6248" stroke-width="2" opacity="0.6"/>
  <path d="M108 404 L536 372" fill="none" stroke="#6f6248" stroke-width="2.4" opacity="0.55"/>
  <path d="M100 300 q 18 -10 30 6 q -14 14 -30 -6 z" fill="#8c7f5e"/>
  <circle cx="470" cy="316" r="20" fill="#7d2a20" opacity="0.5"/>
  <circle cx="470" cy="316" r="20" fill="none" stroke="#9c3527" stroke-width="3" opacity="0.7"/>
</g>

<!-- three receipts, fanned as they fell out -->
<g transform="rotate(-9 300 320)">
  <path d="M120 236 L448 216 L458 400 L130 420 Z" fill="url(#ev1-rec-slip)"/>
  <path d="M120 236 L448 216 L448 226 L120 246 Z" fill="#cec4a6" opacity="0.5"/>
  <g stroke="#7f7359" stroke-width="2.4" opacity="0.75" fill="none"><path d="M140 268 L430 250"/><path d="M140 276 L430 258"/></g>
  <g stroke="#8f8468" stroke-width="1.4" opacity="0.6" fill="none">
    <path d="M140 300 L330 288"/><path d="M140 320 L360 308"/><path d="M140 340 L300 330"/><path d="M140 360 L392 346"/>
  </g>
  <g fill="#2f2a1e" opacity="0.85">
    <rect x="150" y="296" width="9" height="12"/><rect x="164" y="295" width="7" height="12"/><rect x="176" y="295" width="10" height="12"/>
    <rect x="204" y="293" width="8" height="12"/><rect x="217" y="293" width="11" height="12"/>
    <rect x="150" y="316" width="8" height="12"/><rect x="163" y="315" width="10" height="12"/><rect x="178" y="315" width="7" height="12"/>
    <rect x="206" y="313" width="9" height="12"/><rect x="220" y="313" width="8" height="12"/><rect x="233" y="312" width="10" height="12"/>
    <rect x="150" y="356" width="9" height="12"/><rect x="164" y="355" width="8" height="12"/>
    <rect x="360" y="342" width="10" height="12"/><rect x="375" y="341" width="8" height="12"/><rect x="388" y="341" width="11" height="12"/>
  </g>
  <rect x="344" y="330" width="94" height="34" fill="none" stroke="#7f7359" stroke-width="1.8" opacity="0.7"/>
  <ellipse cx="392" cy="270" rx="46" ry="24" fill="none" stroke="#7d2a20" stroke-width="4" opacity="0.5" transform="rotate(-8 392 270)"/>
  <path d="M370 262 L416 258" fill="none" stroke="#7d2a20" stroke-width="5" opacity="0.4"/>
  <path d="M458 400 Q 432 382 406 396 Q 432 408 458 400 Z" fill="#cfc4a4"/>
</g>
<g transform="rotate(4 340 300)">
  <path d="M226 208 L544 190 L552 336 L234 356 Z" fill="url(#ev1-rec-slip)"/>
  <g stroke="#7f7359" stroke-width="2" opacity="0.7" fill="none"><path d="M246 236 L528 220"/></g>
  <g stroke="#8f8468" stroke-width="1.4" opacity="0.55" fill="none">
    <path d="M246 262 L440 250"/><path d="M246 284 L470 272"/><path d="M246 306 L400 296"/>
  </g>
  <g fill="#2f2a1e" opacity="0.8">
    <rect x="256" y="258" width="9" height="12"/><rect x="270" y="257" width="7" height="12"/><rect x="282" y="257" width="10" height="12"/>
    <rect x="310" y="255" width="8" height="12"/><rect x="323" y="255" width="10" height="12"/>
    <rect x="256" y="280" width="8" height="12"/><rect x="269" y="279" width="10" height="12"/>
    <rect x="470" y="244" width="9" height="12"/><rect x="484" y="243" width="11" height="12"/><rect x="499" y="243" width="8" height="12"/>
  </g>
  <path d="M552 336 Q 526 318 500 332 Q 526 344 552 336 Z" fill="#cfc4a4"/>
  <g fill="#a08a5c" opacity="0.25"><circle cx="300" cy="330" r="2.4"/><circle cx="480" cy="300" r="2"/></g>
</g>
<!-- a paperclip, and the shadow it prints on the linen -->
<path d="M486 372 Q 470 356 486 342 Q 504 330 518 344 Q 528 358 512 368 Q 500 374 494 364 Q 490 354 500 350" fill="none" stroke="#9aa2a6" stroke-width="5" stroke-linecap="round"/>
<path d="M486 370 Q 472 356 487 344 Q 503 333 516 345" fill="none" stroke="#eef2f4" stroke-width="1.8" opacity="0.7"/>

<rect width="640" height="520" fill="url(#ev1-rec-vig)"/>
`,
  },

  /* One bottle of the '98, one glass, one man: the house custom, laid out on the
     cellar bench as it is laid out every birthday. */
  c1_tradition: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-trad-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#3a332a"/><stop offset="0.55" stop-color="#1b160f"/><stop offset="1" stop-color="#090706"/>
  </linearGradient>
  <radialGradient id="ev1-trad-pool" cx="0.3" cy="0.1" r="0.82">
    <stop offset="0" stop-color="#f4d491" stop-opacity="0.32"/><stop offset="1" stop-color="#f4d491" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-trad-bench" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#6b4f2c"/><stop offset="0.5" stop-color="#3f2c16"/><stop offset="1" stop-color="#16100a"/>
  </linearGradient>
  <linearGradient id="ev1-trad-glassbot" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1d2f1b"/><stop offset="0.14" stop-color="#5d7c4e"/><stop offset="0.42" stop-color="#16240f"/>
    <stop offset="0.78" stop-color="#0b140a"/><stop offset="1" stop-color="#31492b"/>
  </linearGradient>
  <linearGradient id="ev1-trad-crystal" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#efe9da" stop-opacity="0.36"/><stop offset="0.2" stop-color="#ffffff" stop-opacity="0.18"/>
    <stop offset="0.55" stop-color="#c8cfc7" stop-opacity="0.1"/><stop offset="1" stop-color="#e6e1d2" stop-opacity="0.38"/>
  </linearGradient>
  <filter id="ev1-trad-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-trad-vig" cx="0.44" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-trad-bg)"/>
<rect width="640" height="520" fill="url(#ev1-trad-pool)"/>
<!-- the ordinary champagne, ranked in the dark behind -->
<g fill="#171a18" opacity="0.85">
  <path d="M470 210 L500 210 L504 250 Q 486 258 468 250 Z"/><path d="M516 206 L546 206 L550 246 Q 532 254 514 246 Z"/>
  <path d="M562 204 L592 204 L596 244 Q 578 252 560 244 Z"/><path d="M494 172 L522 172 L526 208 Q 508 216 492 208 Z"/>
  <path d="M540 170 L568 170 L572 206 Q 554 214 538 206 Z"/>
</g>
<g fill="#4d5450" opacity="0.35">
  <path d="M472 214 L478 250"/><path d="M518 210 L524 246"/><path d="M564 208 L570 244"/>
</g>
<!-- the bench -->
<path d="M0 300 L640 282 L640 520 L0 520 Z" fill="url(#ev1-trad-bench)"/>
<path d="M0 300 L640 282 L640 296 L0 314 Z" fill="#8a6538" opacity="0.6"/>
<g fill="none" stroke="#150e07" stroke-width="2.6" opacity="0.55">
  <path d="M0 356 Q 200 344 400 356 Q 540 364 640 350"/><path d="M0 424 Q 200 412 400 424 Q 540 432 640 418"/>
  <path d="M0 490 Q 200 478 400 490"/>
</g>
<g fill="none" stroke="#a07d4a" stroke-width="1.2" opacity="0.22">
  <path d="M0 364 Q 200 352 400 364"/><path d="M0 432 Q 200 420 400 432"/>
</g>
<ellipse cx="150" cy="404" rx="58" ry="18" fill="none" stroke="#5c2418" stroke-width="6" opacity="0.25"/>

<ellipse cx="300" cy="446" rx="180" ry="26" fill="#000" opacity="0.62" filter="url(#ev1-trad-soft)"/>
<ellipse cx="470" cy="440" rx="92" ry="20" fill="#000" opacity="0.55" filter="url(#ev1-trad-soft)"/>

<!-- the bottle -->
<path d="M232 434 L232 258 Q 232 224 254 202 L254 96 L292 96 L292 202 Q 314 224 314 258 L314 434 Q 274 446 232 434 Z" fill="url(#ev1-trad-glassbot)"/>
<path d="M246 262 Q 240 340 244 424" fill="none" stroke="#a8c496" stroke-width="8" opacity="0.35" stroke-linecap="round"/>
<path d="M258 250 Q 252 340 256 428" fill="none" stroke="#dcecd0" stroke-width="2.4" opacity="0.3"/>
<path d="M302 268 Q 306 344 302 426" fill="none" stroke="#8fae7c" stroke-width="3.4" opacity="0.2" stroke-linecap="round"/>
<path d="M260 104 Q 256 150 258 196" fill="none" stroke="#c4dcb4" stroke-width="4" opacity="0.35"/>
<path d="M232 434 Q 274 446 314 434" fill="none" stroke="#0a1108" stroke-width="8" opacity="0.6"/>
<ellipse cx="273" cy="434" rx="41" ry="10" fill="#0d1a0c"/>
<!-- wax capsule over the cork -->
<path d="M250 96 L296 96 L298 138 Q 274 148 248 138 Z" fill="#5e1c16"/>
<path d="M250 96 L296 96 L296 106 Q 274 114 250 106 Z" fill="#8c2d21"/>
<path d="M254 112 Q 274 122 292 112" fill="none" stroke="#3a0f0b" stroke-width="3" opacity="0.7"/>
<ellipse cx="266" cy="102" rx="8" ry="4" fill="#c9705a" opacity="0.5"/>
<path d="M248 138 Q 274 148 298 138 Q 274 154 248 138 Z" fill="#2e0b08"/>
<!-- the old label, darkened by thirty years of cellar -->
<path d="M240 268 Q 274 276 308 268 L310 356 Q 274 364 238 356 Z" fill="#c7b083"/>
<path d="M240 268 Q 274 276 308 268 L308 274 Q 274 282 240 274 Z" fill="#e2cea0" opacity="0.6"/>
<rect x="250" y="284" width="48" height="56" fill="none" stroke="#6b3a1c" stroke-width="2" opacity="0.7"/>
<g stroke="#6b3a1c" stroke-width="2.2" opacity="0.65" fill="none">
  <path d="M256 298 L292 297"/><path d="M256 303 L292 302"/>
</g>
<g stroke="#7d5a2c" stroke-width="1.4" opacity="0.5" fill="none">
  <path d="M258 316 L288 315"/><path d="M262 326 L284 325"/>
</g>
<path d="M238 356 Q 274 364 310 356" fill="none" stroke="#8f7a4e" stroke-width="2" opacity="0.6"/>
<g fill="#8a7448" opacity="0.4">
  <ellipse cx="252" cy="330" rx="10" ry="6"/><ellipse cx="300" cy="300" rx="7" ry="5"/>
</g>
<g fill="#cbbfa0" opacity="0.2">
  <ellipse cx="246" cy="230" rx="14" ry="7"/><ellipse cx="300" cy="240" rx="10" ry="5"/><ellipse cx="270" cy="180" rx="8" ry="16"/>
</g>

<!-- and one glass. Only ever one. -->
<ellipse cx="470" cy="436" rx="56" ry="13" fill="#dedac9" opacity="0.22"/>
<ellipse cx="470" cy="434" rx="56" ry="13" fill="none" stroke="#f0ece0" stroke-width="2" opacity="0.5"/>
<path d="M458 434 Q 464 396 460 366 L482 366 Q 478 396 484 434 Z" fill="url(#ev1-trad-crystal)"/>
<path d="M462 430 Q 466 396 463 368" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.4"/>
<path d="M406 246 L534 246 L522 330 Q 508 362 470 364 Q 432 362 418 330 Z" fill="url(#ev1-trad-crystal)"/>
<ellipse cx="470" cy="246" rx="64" ry="13" fill="none" stroke="#f6f3e8" stroke-width="3" opacity="0.6"/>
<ellipse cx="470" cy="246" rx="64" ry="13" fill="#e9e5d8" opacity="0.08"/>
<path d="M424 262 Q 414 306 428 342" fill="none" stroke="#ffffff" stroke-width="6" opacity="0.3" stroke-linecap="round"/>
<path d="M512 264 Q 522 306 508 338" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.2"/>
<g opacity="0.4">
  <path d="M442 250 L448 356" fill="none" stroke="#ffffff" stroke-width="1.8"/>
  <path d="M470 246 L470 364" fill="none" stroke="#ffffff" stroke-width="2.2"/>
  <path d="M498 250 L494 354" fill="none" stroke="#0d0a06" stroke-width="1.4"/>
</g>
<ellipse cx="432" cy="270" rx="7" ry="14" fill="#ffffff" opacity="0.3"/>

<rect width="640" height="520" fill="url(#ev1-trad-vig)"/>
`,
  },
  /* Two corks from the same bin: one that spent thirty years in the '98, and one
     that was driven home six weeks ago. */
  c1_counterfeit: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-cf-zinc" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6d6d6a"/><stop offset="0.45" stop-color="#3e4041"/><stop offset="1" stop-color="#171819"/>
  </linearGradient>
  <radialGradient id="ev1-cf-pool" cx="0.28" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#f4d79c" stop-opacity="0.3"/><stop offset="1" stop-color="#f4d79c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-cf-old" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#c9a06a"/><stop offset="0.22" stop-color="#9a7442"/><stop offset="0.72" stop-color="#5b421f"/><stop offset="1" stop-color="#8e6b3c"/>
  </linearGradient>
  <linearGradient id="ev1-cf-new" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0dcb4"/><stop offset="0.2" stop-color="#dcc294"/><stop offset="0.72" stop-color="#a58754"/><stop offset="1" stop-color="#d8bd8e"/>
  </linearGradient>
  <linearGradient id="ev1-cf-steel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2f5f7"/><stop offset="0.35" stop-color="#a7afb6"/><stop offset="0.72" stop-color="#565f66"/><stop offset="1" stop-color="#cbd2d7"/>
  </linearGradient>
  <filter id="ev1-cf-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-cf-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-cf-zinc)"/>
<rect width="640" height="520" fill="url(#ev1-cf-pool)"/>
<g stroke="#8d8d8a" stroke-width="1" opacity="0.28" fill="none">
  <path d="M0 110 Q 200 100 400 112 Q 540 120 640 108"/><path d="M0 262 Q 210 252 410 264"/>
  <path d="M0 408 Q 200 398 400 410 Q 540 418 640 406"/><path d="M120 0 L200 520"/><path d="M470 0 L540 520"/>
</g>
<g stroke="#c8cac6" stroke-width="1.4" opacity="0.2" fill="none">
  <path d="M0 118 Q 200 108 400 120"/><path d="M0 416 Q 200 406 400 418"/>
</g>
<path d="M108 176 Q 170 160 214 186 Q 250 210 226 236 Q 176 258 128 238 Q 92 210 108 176 Z" fill="#5c2418" opacity="0.35"/>
<path d="M120 186 Q 170 174 204 194" fill="none" stroke="#8a3a24" stroke-width="3" opacity="0.4"/>
<g fill="#d6d3c6" opacity="0.14">
  <circle cx="560" cy="150" r="2.2"/><circle cx="86" cy="440" r="1.8"/><circle cx="330" cy="120" r="2"/>
</g>

<ellipse cx="250" cy="382" rx="150" ry="34" fill="#000" opacity="0.55" filter="url(#ev1-cf-soft)"/>
<ellipse cx="470" cy="392" rx="132" ry="30" fill="#000" opacity="0.5" filter="url(#ev1-cf-soft)"/>

<!-- the old cork: wine-black at one end, cellar-mould at the other -->
<g transform="rotate(-7 250 330)">
  <path d="M136 288 L360 282 Q 372 282 372 300 L374 358 Q 374 376 362 376 L138 382 Q 126 382 126 364 L124 306 Q 124 288 136 288 Z" fill="url(#ev1-cf-old)"/>
  <path d="M138 294 L360 288" fill="none" stroke="#e0bb84" stroke-width="6" opacity="0.5"/>
  <path d="M140 372 L364 366" fill="none" stroke="#31210c" stroke-width="6" opacity="0.55"/>
  <path d="M136 288 Q 122 292 124 330 Q 124 370 138 382 Q 116 372 116 334 Q 116 296 136 288 Z" fill="#3f2c12"/>
  <path d="M330 282 Q 372 284 372 330 Q 372 372 336 376 Q 356 360 356 330 Q 356 300 330 282 Z" fill="#2b1c0a" opacity="0.7"/>
  <path d="M124 306 Q 124 288 136 288 L232 286 Q 216 316 220 380 L138 382 Q 126 382 126 364 Z" fill="#3d1710" opacity="0.75"/>
  <path d="M226 286 Q 210 320 214 380" fill="none" stroke="#5e2116" stroke-width="4" opacity="0.7"/>
  <g fill="#2a0d08" opacity="0.75">
    <ellipse cx="168" cy="316" rx="16" ry="9"/><ellipse cx="196" cy="352" rx="12" ry="7"/><ellipse cx="146" cy="356" rx="9" ry="5"/>
  </g>
  <g fill="#8f9a72" opacity="0.55">
    <ellipse cx="300" cy="306" rx="18" ry="8"/><ellipse cx="336" cy="340" rx="12" ry="6"/><ellipse cx="272" cy="352" rx="10" ry="5"/>
  </g>
  <g fill="#4a3418" opacity="0.7">
    <ellipse cx="250" cy="318" rx="4" ry="6"/><ellipse cx="288" cy="352" rx="3" ry="5"/><ellipse cx="200" cy="304" rx="3.4" ry="5"/><ellipse cx="320" cy="366" rx="3" ry="4"/>
  </g>
  <g stroke="#3d2a10" stroke-width="1.6" opacity="0.45" fill="none">
    <path d="M160 292 Q 156 330 162 376"/><path d="M270 288 Q 266 330 272 372"/>
  </g>
</g>

<!-- and the new one: pale, clean, and six weeks old -->
<g transform="rotate(5 470 356)">
  <path d="M366 320 L568 314 Q 580 314 580 330 L582 380 Q 582 396 570 396 L368 402 Q 356 402 356 386 L354 336 Q 354 320 366 320 Z" fill="url(#ev1-cf-new)"/>
  <path d="M368 326 L568 320" fill="none" stroke="#fdf0d2" stroke-width="6" opacity="0.65"/>
  <path d="M370 392 L572 386" fill="none" stroke="#7b6338" stroke-width="6" opacity="0.5"/>
  <path d="M366 320 Q 354 324 354 358 Q 354 392 368 402 Q 346 394 346 360 Q 346 328 366 320 Z" fill="#a8895a"/>
  <ellipse cx="470" cy="356" rx="42" ry="26" fill="none" stroke="#8b6f3e" stroke-width="2.4" opacity="0.5"/>
  <ellipse cx="470" cy="356" rx="28" ry="16" fill="none" stroke="#8b6f3e" stroke-width="2" opacity="0.4"/>
  <g fill="#a68a58" opacity="0.6">
    <ellipse cx="420" cy="340" rx="3" ry="5"/><ellipse cx="510" cy="374" rx="3.4" ry="5"/><ellipse cx="452" cy="382" rx="2.6" ry="4"/><ellipse cx="536" cy="336" rx="3" ry="4.4"/>
  </g>
  <path d="M366 330 q 12 6 6 18" fill="none" stroke="#5e2116" stroke-width="3" opacity="0.35"/>
</g>

<!-- the corkscrew that drew them both -->
<path d="M96 466 L300 434" fill="none" stroke="#3a2a16" stroke-width="18" stroke-linecap="round"/>
<path d="M96 460 L300 428" fill="none" stroke="#6d5230" stroke-width="5" opacity="0.6"/>
<path d="M300 434 L352 426" fill="none" stroke="url(#ev1-cf-steel)" stroke-width="10" stroke-linecap="round"/>
<path d="M352 426 q 20 -6 24 10 q 4 16 -16 20 q -20 2 -20 -14 q 2 -14 22 -10 q 22 4 18 22" fill="none" stroke="url(#ev1-cf-steel)" stroke-width="7" stroke-linecap="round"/>
<path d="M352 424 q 18 -6 22 8" fill="none" stroke="#f4f8fa" stroke-width="2.2" opacity="0.7"/>
<ellipse cx="240" cy="480" rx="120" ry="14" fill="#000" opacity="0.4" filter="url(#ev1-cf-soft)"/>

<rect width="640" height="520" fill="url(#ev1-cf-vig)"/>
`,
  },

  /* The office telephone, twice this week, and the receiver never quite put back:
     off the cradle, cord still swinging. */
  c1_calls: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-call-desk" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a3520"/><stop offset="0.55" stop-color="#241a0f"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <radialGradient id="ev1-call-pool" cx="0.28" cy="0.12" r="0.86">
    <stop offset="0" stop-color="#f4d79c" stop-opacity="0.42"/><stop offset="1" stop-color="#f4d79c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-call-japan" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#8b857a"/><stop offset="0.14" stop-color="#3e3a34"/><stop offset="0.52" stop-color="#151312"/>
    <stop offset="0.84" stop-color="#2e2a26"/><stop offset="1" stop-color="#6d675e"/>
  </linearGradient>
  <linearGradient id="ev1-call-cord" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a6258"/><stop offset="0.5" stop-color="#2e2a25"/><stop offset="1" stop-color="#14120f"/>
  </linearGradient>
  <filter id="ev1-call-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-call-vig" cx="0.44" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-call-desk)"/>
<rect width="640" height="520" fill="url(#ev1-call-pool)"/>
<g fill="none" stroke="#120c07" stroke-width="2.6" opacity="0.55">
  <path d="M0 120 Q 200 108 400 120 Q 540 128 640 114"/><path d="M0 300 Q 200 288 400 300 Q 540 308 640 294"/>
  <path d="M0 452 Q 200 440 400 452 Q 540 460 640 446"/>
</g>
<g fill="none" stroke="#9c7645" stroke-width="1.2" opacity="0.2">
  <path d="M0 128 Q 200 116 400 128"/><path d="M0 460 Q 200 448 400 460"/>
</g>
<g fill="#3a2a16" opacity="0.5">
  <ellipse cx="90" cy="200" rx="46" ry="14"/><ellipse cx="560" cy="380" rx="52" ry="16"/>
</g>

<ellipse cx="286" cy="446" rx="150" ry="30" fill="#000" opacity="0.62" filter="url(#ev1-call-soft)"/>
<ellipse cx="486" cy="424" rx="120" ry="24" fill="#000" opacity="0.55" filter="url(#ev1-call-soft)"/>

<!-- candlestick telephone -->
<ellipse cx="256" cy="430" rx="98" ry="26" fill="url(#ev1-call-japan)"/>
<ellipse cx="256" cy="424" rx="98" ry="26" fill="#191714"/>
<ellipse cx="256" cy="424" rx="98" ry="26" fill="url(#ev1-call-japan)"/>
<ellipse cx="256" cy="420" rx="74" ry="18" fill="#0c0b0a" opacity="0.6"/>
<path d="M180 412 Q 220 396 300 400" fill="none" stroke="#cfc8bc" stroke-width="6" opacity="0.5" stroke-linecap="round"/>
<ellipse cx="256" cy="410" rx="44" ry="12" fill="url(#ev1-call-japan)"/>
<path d="M214 406 Q 240 396 296 400" fill="none" stroke="#d8d1c4" stroke-width="3" opacity="0.45"/>
<path d="M240 408 L272 408 L268 200 L244 200 Z" fill="url(#ev1-call-japan)"/>
<path d="M245 404 L249 202" fill="none" stroke="#cbc4b8" stroke-width="5" opacity="0.6"/>
<path d="M252 404 L256 202" fill="none" stroke="#8b847a" stroke-width="2" opacity="0.35"/>
<path d="M266 404 L263 204" fill="none" stroke="#000" stroke-width="3" opacity="0.5"/>
<path d="M236 196 L276 196 L282 176 L230 176 Z" fill="url(#ev1-call-japan)"/>
<path d="M222 176 Q 256 156 290 176 Q 288 148 256 142 Q 224 148 222 176 Z" fill="#1c1a17"/>
<path d="M224 172 Q 256 152 288 172" fill="none" stroke="#d2cbc0" stroke-width="5" opacity="0.55"/>
<ellipse cx="256" cy="154" rx="26" ry="10" fill="#0a0908"/>
<ellipse cx="256" cy="152" rx="26" ry="10" fill="none" stroke="#6e6862" stroke-width="2.4" opacity="0.6"/>
<ellipse cx="248" cy="150" rx="9" ry="4" fill="#b6b0a6" opacity="0.4"/>
<!-- the hook, left up because nobody hung up properly -->
<path d="M240 250 L196 236 Q 184 232 184 222 L196 222 Q 198 228 206 230 L242 240 Z" fill="url(#ev1-call-japan)"/>
<path d="M240 248 L200 236" fill="none" stroke="#8e8880" stroke-width="2.4" opacity="0.4"/>
<circle cx="186" cy="218" r="8" fill="#1c1a17"/>
<circle cx="184" cy="216" r="3" fill="#9a938a" opacity="0.5"/>

<!-- the receiver, put down on the desk, not on the hook -->
<g transform="rotate(-12 470 400)">
  <path d="M368 394 Q 372 366 400 364 Q 428 364 434 388 L512 386 Q 518 362 546 362 Q 574 364 578 392 Q 580 418 552 422 Q 524 420 518 400 L430 402 Q 424 424 396 424 Q 368 420 368 394 Z" fill="url(#ev1-call-japan)"/>
  <path d="M376 384 Q 384 372 400 372 Q 416 372 424 386" fill="none" stroke="#cfc8bc" stroke-width="5" opacity="0.55"/>
  <path d="M524 382 Q 532 370 548 370 Q 564 370 570 384" fill="none" stroke="#9a938a" stroke-width="4" opacity="0.4"/>
  <path d="M436 390 L516 388" fill="none" stroke="#9a938a" stroke-width="4" opacity="0.35"/>
  <path d="M436 400 L516 398" fill="none" stroke="#000" stroke-width="3" opacity="0.5"/>
  <ellipse cx="400" cy="394" rx="20" ry="16" fill="#0a0908"/>
  <ellipse cx="400" cy="394" rx="20" ry="16" fill="none" stroke="#6e6862" stroke-width="2.2" opacity="0.55"/>
  <g fill="#2b2824"><circle cx="394" cy="390" r="2.4"/><circle cx="404" cy="388" r="2.4"/><circle cx="399" cy="398" r="2.4"/><circle cx="408" cy="396" r="2"/></g>
  <ellipse cx="548" cy="392" rx="17" ry="14" fill="#0a0908"/>
  <ellipse cx="548" cy="392" rx="17" ry="14" fill="none" stroke="#6e6862" stroke-width="2" opacity="0.5"/>
  <ellipse cx="392" cy="382" rx="10" ry="5" fill="#c2bbb0" opacity="0.35" transform="rotate(-20 392 382)"/>
</g>

<!-- the cord, still where it fell -->
<path d="M256 424 Q 300 470 366 468 Q 420 464 434 430 Q 442 408 420 400" fill="none" stroke="url(#ev1-call-cord)" stroke-width="11" stroke-linecap="round"/>
<path d="M256 422 Q 300 466 366 464 Q 418 460 431 428" fill="none" stroke="#8b8378" stroke-width="2.4" opacity="0.4"/>
<g stroke="#0f0d0b" stroke-width="1.8" opacity="0.6" fill="none">
  <path d="M290 448 L296 460"/><path d="M320 462 L324 474"/><path d="M352 466 L354 478"/><path d="M390 460 L396 472"/><path d="M420 442 L430 450"/>
</g>
<path d="M256 424 Q 224 458 176 470 Q 132 478 106 466" fill="none" stroke="url(#ev1-call-cord)" stroke-width="9" stroke-linecap="round"/>
<g stroke="#0f0d0b" stroke-width="1.6" opacity="0.55" fill="none">
  <path d="M222 452 L228 464"/><path d="M186 466 L190 478"/><path d="M144 470 L148 482"/>
</g>
<g fill="#e0d4b6" opacity="0.14">
  <circle cx="120" cy="352" r="2.2"/><circle cx="600" cy="470" r="1.8"/><circle cx="330" cy="330" r="2"/>
</g>

<rect width="640" height="520" fill="url(#ev1-call-vig)"/>
`,
  },

  /* Margaret's sickroom door, six years on: the chair the doctor set across it,
     and the tray that never got past it. */
  c1_barred: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-bar-wall" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#5a4c3a"/><stop offset="0.5" stop-color="#33291d"/><stop offset="1" stop-color="#150f0a"/>
  </linearGradient>
  <radialGradient id="ev1-bar-pool" cx="0.16" cy="0.1" r="0.9">
    <stop offset="0" stop-color="#f6dda6" stop-opacity="0.34"/><stop offset="1" stop-color="#f6dda6" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-bar-door" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#7e5c33"/><stop offset="0.35" stop-color="#4e3719"/><stop offset="0.8" stop-color="#2a1c0c"/><stop offset="1" stop-color="#43301a"/>
  </linearGradient>
  <linearGradient id="ev1-bar-chair" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#a87b42"/><stop offset="0.4" stop-color="#6d4c22"/><stop offset="1" stop-color="#2c1d0c"/>
  </linearGradient>
  <linearGradient id="ev1-bar-floor" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#5c452a"/><stop offset="0.5" stop-color="#33240f"/><stop offset="1" stop-color="#130d06"/>
  </linearGradient>
  <filter id="ev1-bar-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-bar-vig" cx="0.4" cy="0.42" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-bar-wall)"/>
<rect width="640" height="520" fill="url(#ev1-bar-pool)"/>
<g stroke="#241a11" stroke-width="2" opacity="0.4" fill="none">
  <path d="M40 0 L40 400"/><path d="M92 0 L92 400"/><path d="M596 0 L596 400"/>
</g>
<path d="M0 386 L640 372 L640 520 L0 520 Z" fill="url(#ev1-bar-floor)"/>
<g stroke="#100a04" stroke-width="3" opacity="0.6" fill="none">
  <path d="M0 424 Q 200 412 400 424 Q 540 432 640 418"/><path d="M0 476 Q 200 464 400 476 Q 540 484 640 470"/>
</g>
<path d="M0 386 L640 372 L640 382 L0 396 Z" fill="#8d6a3c" opacity="0.5"/>

<!-- the door -->
<path d="M120 30 L556 20 L560 392 L118 402 Z" fill="url(#ev1-bar-door)"/>
<path d="M120 30 L556 20 L556 40 L120 50 Z" fill="#9c7541" opacity="0.55"/>
<path d="M118 402 L560 392 L560 380 L118 390 Z" fill="#150e06" opacity="0.7"/>
<g fill="none" stroke="#22160a" stroke-width="6" opacity="0.7">
  <path d="M156 76 L522 66 L524 216 L158 226 Z"/><path d="M160 254 L524 244 L526 358 L162 368 Z"/>
</g>
<g fill="none" stroke="#a37c46" stroke-width="2.4" opacity="0.45">
  <path d="M158 82 L520 72"/><path d="M162 260 L522 250"/><path d="M160 82 L162 222"/><path d="M164 260 L166 364"/>
</g>
<path d="M176 92 L504 84 L506 202 L178 210 Z" fill="#3b2913" opacity="0.55"/>
<path d="M180 270 L506 262 L508 348 L182 356 Z" fill="#3b2913" opacity="0.5"/>
<g fill="#c99a58" opacity="0.14">
  <path d="M176 92 L504 84 L504 96 L176 104 Z"/><path d="M180 270 L506 262 L506 274 L180 282 Z"/>
</g>
<g stroke="#1c1207" stroke-width="1.4" opacity="0.4" fill="none">
  <path d="M220 92 L222 208"/><path d="M320 90 L322 206"/><path d="M420 88 L422 204"/>
  <path d="M260 268 L262 354"/><path d="M400 264 L402 350"/>
</g>
<!-- knob, escutcheon, keyhole -->
<ellipse cx="176" cy="238" rx="20" ry="22" fill="#8a6a26"/>
<ellipse cx="172" cy="232" rx="10" ry="11" fill="#e8ce88" opacity="0.7"/>
<ellipse cx="182" cy="248" rx="9" ry="9" fill="#3d2d0c" opacity="0.7"/>
<path d="M162 258 L196 256 L198 288 L164 290 Z" fill="#7d611f"/>
<path d="M162 258 L196 256 L196 264 L162 266 Z" fill="#e2c87e" opacity="0.6"/>
<circle cx="180" cy="270" r="5" fill="#0c0803"/>
<path d="M177 274 L183 274 L185 284 L175 284 Z" fill="#0c0803"/>

<!-- the chair he set across it -->
<ellipse cx="380" cy="452" rx="180" ry="26" fill="#000" opacity="0.6" filter="url(#ev1-bar-soft)"/>
<path d="M256 214 Q 254 190 288 186 L470 176 Q 502 176 504 200 Q 504 220 472 222 L290 232 Q 258 234 256 214 Z" fill="url(#ev1-bar-chair)"/>
<path d="M262 202 Q 300 190 468 182" fill="none" stroke="#dcb173" stroke-width="4" opacity="0.5"/>
<path d="M264 224 Q 320 216 476 208" fill="none" stroke="#150d05" stroke-width="4" opacity="0.5"/>
<path d="M270 258 Q 268 240 296 238 L462 230 Q 490 230 490 246 Q 490 262 462 264 L298 272 Q 272 274 270 258 Z" fill="url(#ev1-bar-chair)"/>
<path d="M276 248 Q 320 238 460 234" fill="none" stroke="#dcb173" stroke-width="3" opacity="0.4"/>
<path d="M276 228 L282 372" fill="none" stroke="#4e3719" stroke-width="16" stroke-linecap="round"/>
<path d="M270 230 L276 372" fill="none" stroke="#b0854c" stroke-width="4" opacity="0.4"/>
<path d="M484 216 L488 356" fill="none" stroke="#4e3719" stroke-width="14" stroke-linecap="round"/>
<path d="M480 218 L484 356" fill="none" stroke="#b0854c" stroke-width="3.4" opacity="0.35"/>
<path d="M266 372 Q 380 356 494 348 L496 386 Q 380 396 268 410 Z" fill="#6d4c22"/>
<path d="M266 372 Q 380 356 494 348 L494 358 Q 380 366 268 382 Z" fill="#c9995b" opacity="0.6"/>
<path d="M268 410 Q 380 396 496 386" fill="none" stroke="#150d05" stroke-width="5" opacity="0.6"/>
<path d="M290 408 L296 486" fill="none" stroke="#3f2c14" stroke-width="14" stroke-linecap="round"/>
<path d="M286 410 L292 486" fill="none" stroke="#9c7440" stroke-width="3.4" opacity="0.4"/>
<path d="M470 386 L476 458" fill="none" stroke="#3f2c14" stroke-width="12" stroke-linecap="round"/>
<path d="M466 388 L472 458" fill="none" stroke="#9c7440" stroke-width="3" opacity="0.35"/>
<path d="M296 452 L474 434" fill="none" stroke="#3f2c14" stroke-width="9" stroke-linecap="round"/>
<path d="M296 448 L474 430" fill="none" stroke="#9c7440" stroke-width="2.4" opacity="0.35"/>

<!-- and the tray Mrs Tilly was never allowed to carry in -->
<ellipse cx="128" cy="488" rx="104" ry="24" fill="#000" opacity="0.5" filter="url(#ev1-bar-soft)"/>
<ellipse cx="120" cy="478" rx="98" ry="26" fill="#8a8f8a"/>
<ellipse cx="120" cy="474" rx="98" ry="26" fill="#b6bcb6"/>
<ellipse cx="120" cy="474" rx="84" ry="20" fill="#7d827d"/>
<ellipse cx="120" cy="472" rx="84" ry="20" fill="#9ba09b"/>
<path d="M46 464 Q 104 448 190 462" fill="none" stroke="#f0f4f0" stroke-width="5" opacity="0.4" stroke-linecap="round"/>
<path d="M92 440 Q 92 424 118 424 Q 144 424 144 440 L140 470 Q 118 478 96 470 Z" fill="#e4e0d2"/>
<path d="M96 432 Q 118 426 140 432" fill="none" stroke="#fdfbf2" stroke-width="4" opacity="0.6"/>
<ellipse cx="118" cy="440" rx="22" ry="7" fill="#6d4a1c"/>
<ellipse cx="112" cy="438" rx="9" ry="3" fill="#a8763a" opacity="0.6"/>
<path d="M158 458 L206 448 L210 456 L162 466 Z" fill="#e8e4d6"/>
<path d="M158 458 L206 448" fill="none" stroke="#fdfbf2" stroke-width="2" opacity="0.6"/>

<rect width="640" height="520" fill="url(#ev1-bar-vig)"/>
`,
  },
  /* Your own notebook, open where you took it down: who went into that study,
     and when, in your own scrawl. */
  c1_witness: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-wit-marble" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4e4a44"/><stop offset="0.5" stop-color="#2b2823"/><stop offset="1" stop-color="#100e0c"/>
  </linearGradient>
  <radialGradient id="ev1-wit-pool" cx="0.28" cy="0.1" r="0.86">
    <stop offset="0" stop-color="#f2d69e" stop-opacity="0.3"/><stop offset="1" stop-color="#f2d69e" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-wit-cover" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#3c3a36"/><stop offset="0.5" stop-color="#211f1c"/><stop offset="1" stop-color="#0d0c0b"/>
  </linearGradient>
  <linearGradient id="ev1-wit-page" x1="0.1" y1="0" x2="0.9" y2="0.3">
    <stop offset="0" stop-color="#f7f2e2"/><stop offset="0.6" stop-color="#e5dcc3"/><stop offset="1" stop-color="#a29984"/>
  </linearGradient>
  <linearGradient id="ev1-wit-pencil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e6e2d6"/><stop offset="0.35" stop-color="#a29c8c"/><stop offset="0.8" stop-color="#57534a"/><stop offset="1" stop-color="#8d8779"/>
  </linearGradient>
  <filter id="ev1-wit-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-wit-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-wit-marble)"/>
<rect width="640" height="520" fill="url(#ev1-wit-pool)"/>
<g fill="none" stroke="#6e6a62" stroke-width="2" opacity="0.28">
  <path d="M0 96 Q 160 70 320 100 Q 480 130 640 96"/><path d="M0 402 Q 180 380 340 406 Q 500 430 640 400"/>
  <path d="M0 200 Q 200 186 400 210"/>
</g>
<g fill="none" stroke="#a29c90" stroke-width="1" opacity="0.16">
  <path d="M0 104 Q 160 78 320 108"/><path d="M0 410 Q 180 388 340 414"/>
</g>

<ellipse cx="330" cy="426" rx="240" ry="40" fill="#000" opacity="0.6" filter="url(#ev1-wit-soft)"/>

<g transform="rotate(-4 320 280)">
  <!-- the covers, bent right back the way a working notebook is -->
  <path d="M74 118 L318 100 L322 428 L78 442 Z" fill="url(#ev1-wit-cover)"/>
  <path d="M322 100 L566 118 L562 442 L318 428 Z" fill="url(#ev1-wit-cover)"/>
  <path d="M88 130 L316 114 L320 416 L92 428 Z" fill="url(#ev1-wit-page)"/>
  <path d="M324 114 L552 130 L548 428 L320 416 Z" fill="url(#ev1-wit-page)"/>
  <path d="M300 116 Q 310 270 306 416 L320 416 L316 114 Z" fill="#8c8267" opacity="0.45"/>
  <path d="M344 118 Q 334 270 338 418 L320 416 L324 114 Z" fill="#8c8267" opacity="0.5"/>
  <path d="M316 114 L320 416 L324 416 L328 114 Z" fill="#5d5442"/>
  <!-- the wire that holds it -->
  <g stroke="#9aa2a6" stroke-width="4" opacity="0.8" fill="none">
    <path d="M312 130 q 12 -10 22 2"/><path d="M312 176 q 12 -10 22 2"/><path d="M312 222 q 12 -10 22 2"/>
    <path d="M312 268 q 12 -10 22 2"/><path d="M312 314 q 12 -10 22 2"/><path d="M312 360 q 12 -10 22 2"/><path d="M312 400 q 12 -10 22 2"/>
  </g>
  <g stroke="#eef2f4" stroke-width="1.4" opacity="0.6" fill="none">
    <path d="M313 128 q 11 -9 20 1"/><path d="M313 220 q 11 -9 20 1"/><path d="M313 312 q 11 -9 20 1"/>
  </g>
  <!-- feint rules -->
  <g stroke="#98a3ad" stroke-width="1.2" opacity="0.5" fill="none">
    <path d="M100 190 L306 178"/><path d="M100 222 L306 210"/><path d="M100 254 L306 242"/><path d="M100 286 L306 274"/>
    <path d="M100 318 L306 306"/><path d="M100 350 L306 338"/><path d="M100 382 L306 370"/>
    <path d="M336 180 L540 192"/><path d="M336 212 L540 224"/><path d="M336 244 L540 256"/><path d="M336 276 L540 288"/>
    <path d="M336 308 L540 320"/><path d="M336 340 L540 352"/>
  </g>
  <!-- what you wrote down while she talked -->
  <g fill="none" stroke="#242a3c" stroke-width="2.8" stroke-linecap="round" opacity="0.9">
    <path d="M206 210 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0"/>
        <path d="M258 214 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
        <path d="M298 210 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M206 242 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
        <path d="M252 246 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0"/>
        <path d="M312 242 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M206 274 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0"/>
        <path d="M262 278 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
        <path d="M304 274 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
    <path d="M206 306 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
        <path d="M256 310 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M206 338 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
        <path d="M264 342 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
        <path d="M304 338 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0"/>
  </g>
  <g fill="none" stroke="#242a3c" stroke-width="2.8" stroke-linecap="round" opacity="0.85">
    <path d="M376 204 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
        <path d="M424 208 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
    <path d="M376 236 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
        <path d="M418 240 q 6 -8.0 13 0.0 q 6 4.4 13 0.0 q 6 -8.0 13 0.0"/>
    <path d="M376 268 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
        <path d="M426 272 q 6 -8.0 13 0.0 q 6 4.4 13 0.0"/>
    <path d="M376 300 q 6 -6.0 13 0.0 q 6 3.3 13 0.0"/>
        <path d="M420 304 q 6 -6.0 13 0.0 q 6 3.3 13 0.0 q 6 -6.0 13 0.0"/>
  </g>
  <!-- a hard rule under the last of it, and a question mark of a hook -->
  <g stroke="#242a3c" stroke-width="3" opacity="0.85" fill="none" stroke-linecap="round">
    <path d="M172 214 L196 213"/><path d="M172 246 L196 245"/><path d="M172 278 L196 277"/><path d="M172 310 L196 309"/><path d="M172 342 L196 341"/>
    <path d="M348 178 L364 179"/><path d="M348 210 L364 211"/><path d="M348 242 L364 243"/><path d="M348 274 L364 275"/>
  </g>
  <path d="M108 366 L300 356" fill="none" stroke="#242a3c" stroke-width="3.4" opacity="0.8"/>
  <path d="M418 316 q 20 -18 32 0 q 10 16 -8 22 q -12 4 -10 -8" fill="none" stroke="#242a3c" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M436 352 l 0 8" fill="none" stroke="#242a3c" stroke-width="4" stroke-linecap="round"/>
  <!-- thumbed corner, smudge, and the elastic -->
  <ellipse cx="520" cy="396" rx="42" ry="20" fill="#9a8f70" opacity="0.24"/>
  <ellipse cx="128" cy="398" rx="36" ry="16" fill="#9a8f70" opacity="0.18"/>
  <path d="M548 428 Q 526 410 502 422 Q 526 434 548 428 Z" fill="#cdc3a6"/>
  <path d="M566 118 Q 578 270 562 442" fill="none" stroke="#54514a" stroke-width="6" opacity="0.8"/>
  <path d="M74 118 Q 62 270 78 442" fill="none" stroke="#54514a" stroke-width="6" opacity="0.8"/>
  <g fill="#a08a5c" opacity="0.22"><circle cx="200" cy="392" r="2.4"/><circle cx="470" cy="356" r="2"/><circle cx="150" cy="176" r="1.8"/></g>
</g>

<!-- your pencil, blunt again -->
<ellipse cx="404" cy="474" rx="118" ry="12" fill="#000" opacity="0.5" filter="url(#ev1-wit-soft)"/>
<path d="M300 470 L496 442 L498 460 L302 488 Z" fill="url(#ev1-wit-pencil)"/>
<path d="M300 470 L496 442 L497 448 L301 476 Z" fill="#f4f1e8" opacity="0.6"/>
<path d="M302 488 L498 460" fill="none" stroke="#3c3931" stroke-width="3" opacity="0.6"/>
<path d="M496 442 L528 438 L530 456 L498 460 Z" fill="#7d3a2a"/>
<path d="M496 442 L528 438 L528 444 L496 448 Z" fill="#b9614a" opacity="0.6"/>
<path d="M300 470 L268 474 L270 492 L302 488 Z" fill="#e0d6bc"/>
<path d="M268 474 L246 478 L248 490 L270 492 Z" fill="#d2c6a6"/>
<path d="M246 478 L232 482 L234 488 L248 490 Z" fill="#2b2b2e"/>
<path d="M268 474 L246 478" fill="none" stroke="#fdf8ec" stroke-width="2" opacity="0.55"/>

<rect width="640" height="520" fill="url(#ev1-wit-vig)"/>
`,
  },

  /* Tomorrow's page on the desk block, and the luncheon card that goes with it:
     the reckoning Edmund promised, ringed twice in ink. */
  c1_reckoning: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-reck-desk" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#43301c"/><stop offset="0.55" stop-color="#221709"/><stop offset="1" stop-color="#0c0805"/>
  </linearGradient>
  <radialGradient id="ev1-reck-pool" cx="0.28" cy="0.1" r="0.86">
    <stop offset="0" stop-color="#f4d79c" stop-opacity="0.3"/><stop offset="1" stop-color="#f4d79c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-reck-leaf" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#fbf6e6"/><stop offset="0.55" stop-color="#e8e0c8"/><stop offset="1" stop-color="#a49b83"/>
  </linearGradient>
  <linearGradient id="ev1-reck-card" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#f6efdc"/><stop offset="0.5" stop-color="#e2d8bd"/><stop offset="1" stop-color="#9a9179"/>
  </linearGradient>
  <linearGradient id="ev1-reck-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2dc9c"/><stop offset="0.4" stop-color="#b78f2c"/><stop offset="1" stop-color="#5d4310"/>
  </linearGradient>
  <filter id="ev1-reck-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-reck-vig" cx="0.46" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-reck-desk)"/>
<rect width="640" height="520" fill="url(#ev1-reck-pool)"/>
<g fill="none" stroke="#120c06" stroke-width="2.6" opacity="0.55">
  <path d="M0 130 Q 200 118 400 130 Q 540 138 640 124"/><path d="M0 306 Q 200 294 400 306 Q 540 314 640 300"/>
  <path d="M0 462 Q 200 450 400 462"/>
</g>
<g fill="none" stroke="#9c7645" stroke-width="1.2" opacity="0.2">
  <path d="M0 138 Q 200 126 400 138"/><path d="M0 470 Q 200 458 400 470"/>
</g>
<g fill="#e0d4b6" opacity="0.12">
  <circle cx="86" cy="180" r="2.2"/><circle cx="580" cy="440" r="1.8"/>
</g>

<ellipse cx="286" cy="424" rx="200" ry="34" fill="#000" opacity="0.6" filter="url(#ev1-reck-soft)"/>

<!-- the desk block: a fat pad of days, most of them torn away -->
<path d="M96 300 L472 268 L488 402 Q 300 428 108 412 Z" fill="#8d7147"/>
<path d="M96 300 L472 268 L474 282 L98 314 Z" fill="#c2a06a" opacity="0.7"/>
<g stroke="#6a5231" stroke-width="1.4" opacity="0.6" fill="none">
  <path d="M100 320 L476 288"/><path d="M102 330 L478 298"/><path d="M104 340 L480 308"/><path d="M106 350 L482 318"/>
</g>
<path d="M92 292 L468 260 L484 388 Q 296 414 104 398 Z" fill="url(#ev1-reck-leaf)"/>
<path d="M92 292 L468 260 L468 272 L92 304 Z" fill="#cfc5a6" opacity="0.5"/>
<g stroke="#8e8468" stroke-width="1.6" opacity="0.55" fill="none">
  <path d="M120 336 L448 308"/><path d="M122 356 L452 328"/><path d="M124 376 L440 350"/>
</g>
<path d="M112 316 L444 288" fill="none" stroke="#6f6653" stroke-width="3" opacity="0.7"/>
<!-- the day's entry, and the ring drawn round it twice -->
<g fill="none" stroke="#232a3e" stroke-width="3" stroke-linecap="round" opacity="0.9">
  <path d="M150 342 q 16 -12 30 2 q 14 12 28 -2 q 16 -12 30 2"/>
  <path d="M248 340 q 16 12 30 -2 q 14 -12 28 2 q 16 12 28 -2"/>
  <path d="M156 366 q 16 -12 30 2 q 14 12 28 -2"/>
</g>
<ellipse cx="240" cy="354" rx="112" ry="42" fill="none" stroke="#232a3e" stroke-width="3.4" opacity="0.75" transform="rotate(-4 240 354)"/>
<ellipse cx="244" cy="358" rx="122" ry="48" fill="none" stroke="#232a3e" stroke-width="2.4" opacity="0.5" transform="rotate(-4 244 358)"/>
<!-- the torn stubs of the days already spent -->
<path d="M92 292 Q 140 286 172 296 Q 208 288 244 296 Q 282 286 318 296 Q 356 286 392 296 Q 430 286 468 260 L468 268 Q 430 294 392 304 Q 356 294 318 304 Q 282 294 244 304 Q 208 296 172 304 Q 140 294 92 302 Z" fill="#b7ab8b" opacity="0.7"/>
<g fill="#6e6551" opacity="0.5">
  <circle cx="180" cy="298" r="2.6"/><circle cx="300" cy="298" r="2.4"/><circle cx="420" cy="286" r="2.6"/>
</g>
<!-- the brass wire loops the pad hangs from -->
<path d="M150 302 q 4 -22 24 -20" fill="none" stroke="url(#ev1-reck-brass)" stroke-width="5"/>
<path d="M400 288 q 4 -22 24 -20" fill="none" stroke="url(#ev1-reck-brass)" stroke-width="5"/>

<!-- the luncheon card, propped where he left it -->
<ellipse cx="484" cy="322" rx="110" ry="20" fill="#000" opacity="0.5" filter="url(#ev1-reck-soft)"/>
<g transform="rotate(6 480 220)">
  <path d="M392 88 L580 76 L592 300 L404 314 Z" fill="url(#ev1-reck-card)"/>
  <path d="M392 88 L580 76 L580 88 L392 100 Z" fill="#cfc4a4" opacity="0.5"/>
  <rect x="410" y="106" width="158" height="188" fill="none" stroke="#8d7a44" stroke-width="2.4" opacity="0.7"/>
  <rect x="416" y="112" width="146" height="176" fill="none" stroke="#8d7a44" stroke-width="1" opacity="0.5"/>
  <g stroke="#6f6653" stroke-width="2.6" opacity="0.75" fill="none">
    <path d="M430 140 L548 133"/><path d="M430 147 L548 140"/>
  </g>
  <g stroke="#8b8269" stroke-width="1.6" opacity="0.6" fill="none">
    <path d="M430 174 L534 168"/><path d="M430 192 L548 186"/><path d="M430 210 L516 204"/>
    <path d="M430 244 L540 238"/><path d="M430 262 L500 257"/>
  </g>
  <circle cx="490" cy="226" r="15" fill="none" stroke="#8d7a44" stroke-width="2" opacity="0.6"/>
  <path d="M592 300 Q 570 282 548 294 Q 570 306 592 300 Z" fill="#cbc0a2"/>
  <path d="M404 314 Q 500 320 592 300" fill="none" stroke="#7e7660" stroke-width="2.4" opacity="0.55"/>
  <path d="M392 88 Q 384 200 404 314" fill="none" stroke="#fdf8ea" stroke-width="3" opacity="0.4"/>
</g>

<rect width="640" height="520" fill="url(#ev1-reck-vig)"/>
`,
  },
  /* The kitchen clock at twenty to nine, the hour the shouting came down the
     shaft — the soufflés went in at half past. */
  c1_argument: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-arg-wall" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#a89a7e"/><stop offset="0.5" stop-color="#6d6250"/><stop offset="1" stop-color="#332d24"/>
  </linearGradient>
  <radialGradient id="ev1-arg-pool" cx="0.2" cy="0.1" r="0.9">
    <stop offset="0" stop-color="#f9e3ae" stop-opacity="0.34"/><stop offset="1" stop-color="#f9e3ae" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-arg-case" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#8a5f30"/><stop offset="0.45" stop-color="#4e3417"/><stop offset="1" stop-color="#20150a"/>
  </linearGradient>
  <radialGradient id="ev1-arg-dial" cx="0.36" cy="0.3" r="0.8">
    <stop offset="0" stop-color="#fbf5e2"/><stop offset="0.6" stop-color="#e9dfc2"/><stop offset="1" stop-color="#b0a586"/>
  </radialGradient>
  <linearGradient id="ev1-arg-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#f7e3a8"/><stop offset="0.35" stop-color="#c39a34"/><stop offset="0.75" stop-color="#6d4f13"/><stop offset="1" stop-color="#b48c2c"/>
  </linearGradient>
  <filter id="ev1-arg-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-arg-vig" cx="0.42" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-arg-wall)"/>
<rect width="640" height="520" fill="url(#ev1-arg-pool)"/>
<g stroke="#4f4638" stroke-width="2.4" opacity="0.4" fill="none">
  <path d="M0 84 L640 76"/><path d="M0 176 L640 168"/><path d="M0 268 L640 260"/><path d="M0 360 L640 352"/><path d="M0 452 L640 444"/>
</g>
<g stroke="#4f4638" stroke-width="2" opacity="0.3" fill="none">
  <path d="M76 84 L76 176"/><path d="M228 82 L228 174"/><path d="M380 80 L380 172"/><path d="M532 78 L532 170"/>
  <path d="M0 176 L0 268"/><path d="M152 174 L152 266"/><path d="M304 172 L304 264"/><path d="M456 170 L456 262"/><path d="M608 168 L608 260"/>
  <path d="M76 360 L76 452"/><path d="M380 356 L380 448"/><path d="M532 354 L532 446"/>
</g>
<g fill="#2f2a20" opacity="0.22">
  <ellipse cx="600" cy="300" rx="60" ry="120"/><ellipse cx="40" cy="440" rx="60" ry="90"/>
</g>

<!-- steam, from something that went in at half past -->
<g fill="none" stroke="#fbf6e6" opacity="0.16">
  <path d="M486 470 q -18 -40 6 -70 q 20 -26 4 -56" stroke-width="16" stroke-linecap="round"/>
  <path d="M540 480 q -16 -34 4 -58 q 16 -20 4 -44" stroke-width="11" stroke-linecap="round"/>
</g>
<path d="M430 500 Q 470 462 530 460 Q 592 458 620 494 L620 520 L430 520 Z" fill="#7d4a24" opacity="0.55"/>
<path d="M440 498 Q 476 470 528 468 Q 578 466 606 494" fill="none" stroke="#e8a967" stroke-width="5" opacity="0.5"/>

<!-- the clock -->
<ellipse cx="286" cy="270" rx="200" ry="196" fill="#000" opacity="0.5" filter="url(#ev1-arg-soft)"/>
<circle cx="272" cy="250" r="192" fill="url(#ev1-arg-case)"/>
<circle cx="272" cy="250" r="192" fill="none" stroke="#a87c42" stroke-width="4" opacity="0.5"/>
<circle cx="272" cy="250" r="168" fill="url(#ev1-arg-brass)"/>
<circle cx="272" cy="250" r="156" fill="#2a1c0a"/>
<circle cx="272" cy="250" r="150" fill="url(#ev1-arg-dial)"/>
<circle cx="272" cy="250" r="150" fill="none" stroke="#8a7f60" stroke-width="2" opacity="0.5"/>
<circle cx="272" cy="250" r="132" fill="none" stroke="#8a7f60" stroke-width="1.4" opacity="0.45"/>
<!-- the minute track: batons only -->
<g stroke="#221d14" stroke-width="7" stroke-linecap="round">
  <path d="M272 106 L272 132"/><path d="M416 250 L390 250"/><path d="M272 394 L272 368"/><path d="M128 250 L154 250"/>
  <path d="M344 125 L331 148"/><path d="M397 178 L374 191"/><path d="M397 322 L374 309"/><path d="M344 375 L331 352"/>
  <path d="M200 375 L213 352"/><path d="M147 322 L170 309"/><path d="M147 178 L170 191"/><path d="M200 125 L213 148"/>
</g>
<g stroke="#3d3524" stroke-width="2.6" stroke-linecap="round" opacity="0.7">
  <path d="M300 110 L297 128"/><path d="M328 116 L322 133"/><path d="M368 143 L357 157"/><path d="M389 165 L375 176"/>
  <path d="M410 215 L392 219"/><path d="M414 230 L396 233"/><path d="M414 270 L396 267"/><path d="M410 285 L392 281"/>
  <path d="M389 335 L375 324"/><path d="M368 357 L357 343"/><path d="M328 384 L322 367"/><path d="M300 390 L297 372"/>
  <path d="M244 390 L247 372"/><path d="M216 384 L222 367"/><path d="M176 357 L187 343"/><path d="M155 335 L169 324"/>
  <path d="M134 285 L152 281"/><path d="M130 270 L148 267"/><path d="M130 230 L148 233"/><path d="M134 215 L152 219"/>
  <path d="M155 165 L169 176"/><path d="M176 143 L187 157"/><path d="M216 116 L222 133"/><path d="M244 110 L247 128"/>
</g>
<!-- twenty to nine -->
<path d="M272 250 L238 258 L188 292 L232 268 Z" fill="#181410"/>
<path d="M272 250 L236 254 L188 292" fill="none" stroke="#3f382c" stroke-width="2" opacity="0.6"/>
<path d="M272 250 L228 236 L156 296 L232 262 Z" fill="#181410"/>
<path d="M272 250 L226 240 L156 296" fill="none" stroke="#3f382c" stroke-width="2" opacity="0.5"/>
<circle cx="272" cy="250" r="12" fill="#181410"/>
<circle cx="269" cy="246" r="4" fill="#8a8272" opacity="0.6"/>
<!-- the glass over it -->
<path d="M150 176 Q 210 108 300 104 Q 240 140 208 200 Q 176 262 186 330 Q 138 264 150 176 Z" fill="#ffffff" opacity="0.14"/>
<path d="M330 112 Q 372 128 398 160 Q 350 150 320 128 Z" fill="#ffffff" opacity="0.1"/>
<circle cx="272" cy="250" r="156" fill="none" stroke="#fdf6df" stroke-width="3" opacity="0.35"/>
<path d="M140 250 Q 148 156 216 110" fill="none" stroke="#fdf6df" stroke-width="5" opacity="0.3"/>
<!-- brass winding holes and the case below -->
<circle cx="222" cy="316" r="7" fill="#4a3a18"/>
<circle cx="322" cy="316" r="7" fill="#4a3a18"/>
<circle cx="220" cy="314" r="2.6" fill="#e8ce88" opacity="0.6"/>
<path d="M196 440 L348 440 L336 520 L208 520 Z" fill="url(#ev1-arg-case)"/>
<path d="M196 440 L348 440 L346 452 L198 452 Z" fill="#a87c42" opacity="0.5"/>
<path d="M264 452 L280 452 L278 520 L266 520 Z" fill="#c9a04e" opacity="0.5"/>
<circle cx="272" cy="512" r="26" fill="url(#ev1-arg-brass)"/>
<circle cx="272" cy="512" r="18" fill="#6d4f13" opacity="0.5"/>
<path d="M256 500 Q 272 492 288 500" fill="none" stroke="#fbeeb8" stroke-width="4" opacity="0.6"/>

<rect width="640" height="520" fill="url(#ev1-arg-vig)"/>
`,
  },

  /* The sickroom as it was left: the dent still in the pillow, the medicine
     glass on the table, and six weeks of nobody allowed in. */
  c1_sickroom: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-sick-wall" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#6b6152"/><stop offset="0.5" stop-color="#3b352b"/><stop offset="1" stop-color="#171410"/>
  </linearGradient>
  <radialGradient id="ev1-sick-pool" cx="0.22" cy="0.1" r="0.9">
    <stop offset="0" stop-color="#f6e0ab" stop-opacity="0.3"/><stop offset="1" stop-color="#f6e0ab" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-sick-linen" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#f4f0e2"/><stop offset="0.5" stop-color="#d8d2be"/><stop offset="1" stop-color="#847e6c"/>
  </linearGradient>
  <linearGradient id="ev1-sick-brass" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#6d4f13"/><stop offset="0.2" stop-color="#e8c66e"/><stop offset="0.55" stop-color="#8f6a19"/><stop offset="1" stop-color="#4a350c"/>
  </linearGradient>
  <linearGradient id="ev1-sick-wood" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#6b4c28"/><stop offset="0.5" stop-color="#3d2a13"/><stop offset="1" stop-color="#16100a"/>
  </linearGradient>
  <filter id="ev1-sick-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-sick-vig" cx="0.42" cy="0.42" r="0.76">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-sick-wall)"/>
<rect width="640" height="520" fill="url(#ev1-sick-pool)"/>
<g stroke="#2b261e" stroke-width="1.6" opacity="0.35" fill="none">
  <path d="M60 0 L60 300"/><path d="M180 0 L180 300"/><path d="M300 0 L300 300"/><path d="M420 0 L420 300"/><path d="M540 0 L540 300"/>
</g>
<g stroke="#8b8371" stroke-width="1" opacity="0.16" fill="none">
  <path d="M66 0 L66 300"/><path d="M306 0 L306 300"/><path d="M546 0 L546 300"/>
</g>
<path d="M0 292 L640 284 L640 300 L0 308 Z" fill="#4c4436" opacity="0.7"/>

<!-- the bedhead -->
<rect x="87" y="92" width="18" height="212" rx="9" fill="url(#ev1-sick-brass)"/>
<rect x="411" y="84" width="18" height="210" rx="9" fill="url(#ev1-sick-brass)"/>
<rect x="96" y="110" width="324" height="15" rx="7" fill="url(#ev1-sick-brass)"/>
<rect x="96" y="158" width="324" height="10" rx="5" fill="url(#ev1-sick-brass)"/>
<g fill="url(#ev1-sick-brass)">
  <rect x="146" y="120" width="8" height="46" rx="4"/><rect x="200" y="120" width="8" height="46" rx="4"/>
  <rect x="254" y="119" width="8" height="46" rx="4"/><rect x="308" y="118" width="8" height="46" rx="4"/>
  <rect x="362" y="117" width="8" height="46" rx="4"/>
</g>
<circle cx="96" cy="90" r="17" fill="url(#ev1-sick-brass)"/>
<circle cx="420" cy="82" r="17" fill="url(#ev1-sick-brass)"/>
<circle cx="91" cy="84" r="6" fill="#fbeeb8" opacity="0.6"/>
<circle cx="415" cy="76" r="5" fill="#fbeeb8" opacity="0.5"/>
<rect x="90" y="120" width="4" height="180" fill="#fbeeb8" opacity="0.4"/>
<rect x="414" y="112" width="3" height="176" fill="#fbeeb8" opacity="0.3"/>
<rect x="100" y="112" width="316" height="4" fill="#fbeeb8" opacity="0.45"/>

<!-- the bed, turned down and never slept in since -->
<path d="M60 300 Q 260 268 470 296 L500 520 L40 520 Z" fill="url(#ev1-sick-linen)"/>
<path d="M60 300 Q 260 268 470 296 L474 330 Q 262 302 62 334 Z" fill="#fdfaf0" opacity="0.6"/>
<path d="M62 334 Q 262 302 474 330 L478 360 Q 264 332 64 364 Z" fill="#c2bca8" opacity="0.5"/>
<g fill="none" stroke="#9a9483" stroke-width="2.4" opacity="0.45">
  <path d="M120 372 Q 200 460 176 520"/><path d="M300 366 Q 350 440 344 520"/><path d="M420 372 Q 452 440 452 520"/>
</g>
<g fill="none" stroke="#fdfaf0" stroke-width="2.6" opacity="0.5">
  <path d="M128 372 Q 208 460 184 520"/><path d="M308 366 Q 358 440 352 520"/>
</g>
<!-- the pillow, with the dent still in it -->
<ellipse cx="248" cy="288" rx="150" ry="30" fill="#000" opacity="0.4" filter="url(#ev1-sick-soft)"/>
<path d="M112 274 Q 132 216 250 210 Q 370 214 386 272 Q 372 310 250 314 Q 128 310 112 274 Z" fill="url(#ev1-sick-linen)"/>
<path d="M120 258 Q 150 222 250 218 Q 348 222 378 258" fill="none" stroke="#fdfaf0" stroke-width="6" opacity="0.6"/>
<path d="M118 288 Q 160 312 250 314 Q 342 312 380 288" fill="none" stroke="#a09a88" stroke-width="5" opacity="0.5"/>
<ellipse cx="252" cy="272" rx="66" ry="30" fill="#a8a291" opacity="0.4"/>
<ellipse cx="252" cy="268" rx="52" ry="22" fill="#8f8a79" opacity="0.35"/>
<path d="M200 254 Q 250 240 306 254" fill="none" stroke="#7d7768" stroke-width="4" opacity="0.35"/>
<path d="M144 268 Q 158 288 152 306" fill="none" stroke="#9a9483" stroke-width="3" opacity="0.5"/>
<path d="M356 266 Q 344 288 350 306" fill="none" stroke="#9a9483" stroke-width="3" opacity="0.45"/>

<!-- the bedside table, and what was left on it -->
<ellipse cx="556" cy="446" rx="120" ry="26" fill="#000" opacity="0.6" filter="url(#ev1-sick-soft)"/>
<path d="M436 384 L640 366 L640 412 L436 430 Z" fill="url(#ev1-sick-wood)"/>
<path d="M436 384 L640 366 L640 378 L436 396 Z" fill="#9a7040" opacity="0.6"/>
<path d="M460 430 L474 430 L482 520 L466 520 Z" fill="#2d1f0e"/>
<path d="M604 412 L618 412 L626 520 L610 520 Z" fill="#2d1f0e"/>
<!-- medicine glass, half drunk, gone cloudy -->
<path d="M486 302 L534 302 L528 386 Q 506 394 490 386 Z" fill="#e9ece7" opacity="0.28"/>
<ellipse cx="510" cy="302" rx="24" ry="8" fill="none" stroke="#f4f7f2" stroke-width="2.6" opacity="0.6"/>
<path d="M494 350 L526 350 L528 386 Q 506 394 490 386 Z" fill="#b9b08c" opacity="0.6"/>
<ellipse cx="510" cy="350" rx="16" ry="5" fill="#d8cfa8" opacity="0.7"/>
<path d="M496 312 Q 492 348 496 380" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.35"/>
<!-- a spoon across it, and a small bottle -->
<path d="M540 328 L604 314 Q 612 312 613 318 Q 614 324 606 326 L542 340 Q 534 342 533 336 Q 532 330 540 328 Z" fill="#b6bcb6"/>
<ellipse cx="530" cy="336" rx="16" ry="10" fill="#b6bcb6" transform="rotate(-12 530 336)"/>
<ellipse cx="527" cy="333" rx="8" ry="4" fill="#f2f5f2" opacity="0.6" transform="rotate(-12 527 333)"/>
<path d="M572 344 L610 340 L612 384 Q 592 392 570 384 Z" fill="#5b3413"/>
<path d="M578 344 Q 574 366 578 382" fill="none" stroke="#c68f43" stroke-width="4" opacity="0.4"/>
<path d="M578 322 L604 322 L606 344 L576 344 Z" fill="#3a2a12"/>
<path d="M580 352 L606 350 L606 362 L580 364 Z" fill="#e6dfcb" opacity="0.8"/>
<!-- flowers that nobody changed -->
<path d="M448 330 L480 330 L476 386 Q 462 392 450 386 Z" fill="#d2d6d0" opacity="0.3"/>
<path d="M452 336 Q 448 364 452 384" fill="none" stroke="#ffffff" stroke-width="3" opacity="0.35"/>
<g stroke="#6d6a3c" stroke-width="3" fill="none" stroke-linecap="round">
  <path d="M462 330 Q 450 300 432 288"/><path d="M466 330 Q 470 296 486 280"/><path d="M470 332 Q 478 310 496 306"/>
</g>
<g fill="#7d6a4c" opacity="0.9">
  <ellipse cx="428" cy="284" rx="13" ry="8" transform="rotate(-30 428 284)"/>
  <ellipse cx="490" cy="276" rx="12" ry="7" transform="rotate(24 490 276)"/>
  <ellipse cx="500" cy="304" rx="10" ry="6" transform="rotate(10 500 304)"/>
</g>
<g fill="#5e5136" opacity="0.8">
  <ellipse cx="452" cy="404" rx="9" ry="4" transform="rotate(-14 452 404)"/><ellipse cx="500" cy="398" rx="7" ry="3.4"/>
</g>

<rect width="640" height="520" fill="url(#ev1-sick-vig)"/>
`,
  },
  /* The doctor's bag, exactly as tidy as the account he gives of it: closed,
     buckled, and thirty years of house calls in the leather. */
  c1_haleclaim: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-hc-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a4438"/><stop offset="0.55" stop-color="#241f18"/><stop offset="1" stop-color="#0c0a08"/>
  </linearGradient>
  <radialGradient id="ev1-hc-pool" cx="0.26" cy="0.1" r="0.88">
    <stop offset="0" stop-color="#f4d79c" stop-opacity="0.3"/><stop offset="1" stop-color="#f4d79c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-hc-quilt" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#ece6d4"/><stop offset="0.5" stop-color="#c8c2ad"/><stop offset="1" stop-color="#7c7665"/>
  </linearGradient>
  <linearGradient id="ev1-hc-leather" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#4c443c"/><stop offset="0.28" stop-color="#241f1b"/><stop offset="0.68" stop-color="#100d0b"/><stop offset="1" stop-color="#332c26"/>
  </linearGradient>
  <linearGradient id="ev1-hc-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#f4dfa2"/><stop offset="0.35" stop-color="#bd932e"/><stop offset="0.8" stop-color="#5d4310"/><stop offset="1" stop-color="#a8801f"/>
  </linearGradient>
  <filter id="ev1-hc-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-hc-vig" cx="0.44" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-hc-bg)"/>
<rect width="640" height="520" fill="url(#ev1-hc-pool)"/>
<!-- the counterpane, made up like a ward -->
<path d="M0 246 Q 180 220 360 244 Q 500 262 640 234 L640 520 L0 520 Z" fill="url(#ev1-hc-quilt)"/>
<g stroke="#9a9484" stroke-width="1.4" opacity="0.4" fill="none">
  <path d="M0 300 Q 200 276 400 298 Q 540 312 640 288"/><path d="M0 378 Q 200 354 400 376"/><path d="M0 456 Q 200 432 400 454 Q 540 468 640 444"/>
  <path d="M110 254 L128 520"/><path d="M300 246 L318 520"/><path d="M490 258 L508 520"/>
</g>
<g stroke="#fdfaf0" stroke-width="1.6" opacity="0.4" fill="none">
  <path d="M0 294 Q 200 270 400 292"/><path d="M0 450 Q 200 426 400 448"/>
</g>
<path d="M0 246 Q 180 220 360 244 Q 500 262 640 234 L640 258 Q 500 286 360 268 Q 180 244 0 270 Z" fill="#fdfaf0" opacity="0.45"/>

<ellipse cx="330" cy="416" rx="220" ry="42" fill="#000" opacity="0.6" filter="url(#ev1-hc-soft)"/>

<!-- the bag -->
<path d="M120 396 Q 106 300 154 244 Q 214 190 320 188 Q 428 190 488 244 Q 534 300 520 396 Q 320 424 120 396 Z" fill="url(#ev1-hc-leather)"/>
<path d="M154 244 Q 214 190 320 188 Q 388 190 440 216 Q 372 206 306 214 Q 216 226 168 268 Z" fill="#6a6058" opacity="0.35"/>
<path d="M140 340 Q 320 372 500 340 Q 320 388 140 340 Z" fill="#050404" opacity="0.6"/>
<g fill="#5e564e" opacity="0.22">
  <circle cx="180" cy="300" r="2.6"/><circle cx="230" cy="272" r="2.2"/><circle cx="288" cy="316" r="2.4"/><circle cx="350" cy="286" r="2"/>
  <circle cx="410" cy="322" r="2.6"/><circle cx="462" cy="286" r="2.2"/><circle cx="212" cy="352" r="2"/><circle cx="330" cy="358" r="2.4"/>
  <circle cx="440" cy="360" r="1.8"/><circle cx="150" cy="330" r="2"/>
</g>
<!-- the frame across the mouth of it -->
<path d="M126 234 Q 320 196 514 234 L510 262 Q 320 224 130 262 Z" fill="url(#ev1-hc-brass)"/>
<path d="M128 240 Q 320 202 512 240" fill="none" stroke="#fbeeb8" stroke-width="4" opacity="0.6"/>
<path d="M130 258 Q 320 220 510 258" fill="none" stroke="#3d2c08" stroke-width="3.4" opacity="0.6"/>
<!-- clasp -->
<path d="M292 210 L348 210 L352 258 L288 258 Z" fill="url(#ev1-hc-brass)"/>
<path d="M296 214 L344 214 L346 224 L294 224 Z" fill="#fbeeb8" opacity="0.55"/>
<path d="M300 232 L340 232 L342 250 L298 250 Z" fill="#3d2c08" opacity="0.7"/>
<circle cx="320" cy="241" r="7" fill="#f4dfa2" opacity="0.8"/>
<!-- handles -->
<path d="M232 214 Q 244 148 320 146 Q 396 148 408 214" fill="none" stroke="#191512" stroke-width="15" stroke-linecap="round"/>
<path d="M236 206 Q 250 158 320 156 Q 390 158 404 206" fill="none" stroke="#6a6058" stroke-width="4" opacity="0.45"/>
<path d="M254 190 Q 272 164 320 162" fill="none" stroke="#8e857a" stroke-width="3" opacity="0.35"/>
<ellipse cx="236" cy="212" rx="13" ry="10" fill="url(#ev1-hc-brass)"/>
<ellipse cx="404" cy="212" rx="13" ry="10" fill="url(#ev1-hc-brass)"/>
<!-- straps and buckles, worn pale at the fold -->
<path d="M176 268 L206 264 L214 404 L182 400 Z" fill="#241f1b"/>
<path d="M178 274 L206 270" fill="none" stroke="#6a6058" stroke-width="3" opacity="0.5"/>
<path d="M180 320 L210 316 L211 332 L181 336 Z" fill="url(#ev1-hc-brass)"/>
<path d="M181 322 L209 318" fill="none" stroke="#fbeeb8" stroke-width="2" opacity="0.6"/>
<path d="M434 264 L464 268 L458 402 L426 406 Z" fill="#241f1b"/>
<path d="M436 270 L464 274" fill="none" stroke="#6a6058" stroke-width="3" opacity="0.45"/>
<path d="M430 316 L460 312 L461 328 L431 332 Z" fill="url(#ev1-hc-brass)"/>
<!-- corners rubbed back to the hide -->
<path d="M120 396 Q 116 356 128 330 Q 128 372 144 396 Z" fill="#6e6156" opacity="0.5"/>
<path d="M520 396 Q 524 356 512 330 Q 512 372 496 396 Z" fill="#6e6156" opacity="0.4"/>
<path d="M150 386 Q 320 414 492 386" fill="none" stroke="#7d7268" stroke-width="3" opacity="0.35"/>
<g stroke="#8e857a" stroke-width="1.2" opacity="0.3" fill="none">
  <path d="M250 340 L290 334"/><path d="M370 344 L406 338"/><path d="M300 296 L332 292"/>
</g>

<rect width="640" height="520" fill="url(#ev1-hc-vig)"/>
`,
  },

  /* The pharmacy label under a lens: whatever the doctor says, the date on it is
     three days old. */
  c1_halelie: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-hl-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#3d3225"/><stop offset="0.55" stop-color="#1e1710"/><stop offset="1" stop-color="#0b0806"/>
  </linearGradient>
  <radialGradient id="ev1-hl-pool" cx="0.24" cy="0.1" r="0.88">
    <stop offset="0" stop-color="#f6dda6" stop-opacity="0.32"/><stop offset="1" stop-color="#f6dda6" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-hl-glassbot" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#8a5518"/><stop offset="0.12" stop-color="#dda158"/><stop offset="0.45" stop-color="#5f3410"/>
    <stop offset="0.82" stop-color="#3f2208"/><stop offset="1" stop-color="#a26c26"/>
  </linearGradient>
  <linearGradient id="ev1-hl-label" x1="0.1" y1="0" x2="0.9" y2="1">
    <stop offset="0" stop-color="#faf5e6"/><stop offset="0.5" stop-color="#e8e0c8"/><stop offset="1" stop-color="#a8a088"/>
  </linearGradient>
  <linearGradient id="ev1-hl-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#f7e3a8"/><stop offset="0.35" stop-color="#c39a34"/><stop offset="0.78" stop-color="#5d4310"/><stop offset="1" stop-color="#b48c2c"/>
  </linearGradient>
  <radialGradient id="ev1-hl-lens" cx="0.34" cy="0.28" r="0.85">
    <stop offset="0" stop-color="#ffffff" stop-opacity="0.28"/><stop offset="0.45" stop-color="#e8f0ea" stop-opacity="0.1"/>
    <stop offset="1" stop-color="#9fb0a6" stop-opacity="0.3"/>
  </radialGradient>
  <clipPath id="ev1-hl-clip"><circle cx="392" cy="256" r="146"/></clipPath>
  <filter id="ev1-hl-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-hl-vig" cx="0.44" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-hl-bg)"/>
<rect width="640" height="520" fill="url(#ev1-hl-pool)"/>
<g fill="none" stroke="#120c07" stroke-width="2.4" opacity="0.5">
  <path d="M0 78 Q 200 66 400 78 Q 540 86 640 72"/><path d="M0 470 Q 200 458 400 470"/>
</g>

<!-- the bottle, lying on its side under the lens -->
<ellipse cx="320" cy="404" rx="240" ry="40" fill="#000" opacity="0.6" filter="url(#ev1-hl-soft)"/>
<path d="M-10 148 L520 128 Q 566 136 570 176 L572 300 Q 568 340 522 348 L-10 368 Z" fill="url(#ev1-hl-glassbot)"/>
<path d="M-10 164 L516 144" fill="none" stroke="#f7d296" stroke-width="12" opacity="0.35"/>
<path d="M-10 186 L512 166" fill="none" stroke="#ffe9c0" stroke-width="4" opacity="0.3"/>
<path d="M-10 348 L520 328" fill="none" stroke="#2a1505" stroke-width="12" opacity="0.5"/>
<path d="M520 128 Q 566 136 570 176 L572 300 Q 568 340 522 348 Q 552 320 550 240 Q 548 160 520 128 Z" fill="#251306" opacity="0.6"/>

<!-- the label -->
<path d="M40 176 Q 300 164 540 178 L544 326 Q 300 340 44 330 Z" fill="url(#ev1-hl-label)"/>
<path d="M40 176 Q 300 164 540 178 L540 190 Q 300 176 42 188 Z" fill="#cec6a8" opacity="0.5"/>
<g stroke="#6f6851" stroke-width="3" opacity="0.8" fill="none">
  <path d="M72 216 L500 206"/><path d="M72 224 L500 214"/>
</g>
<g stroke="#8b8369" stroke-width="1.8" opacity="0.6" fill="none">
  <path d="M72 250 L380 242"/><path d="M72 268 L440 260"/>
</g>
<rect x="238" y="282" width="200" height="34" fill="none" stroke="#6f6851" stroke-width="2" opacity="0.7"/>
<g fill="#3d3a2c" opacity="0.8">
  <rect x="252" y="292" width="14" height="15"/><rect x="272" y="292" width="10" height="15"/>
  <rect x="300" y="292" width="12" height="15"/><rect x="318" y="292" width="14" height="15"/>
  <rect x="352" y="291" width="10" height="15"/><rect x="368" y="291" width="13" height="15"/><rect x="387" y="291" width="11" height="15"/>
</g>
<g fill="#a08a5c" opacity="0.25">
  <circle cx="120" cy="300" r="2.6"/><circle cx="470" cy="230" r="2.2"/><circle cx="200" cy="200" r="1.8"/>
</g>
<path d="M544 326 Q 520 310 496 322 Q 520 334 544 326 Z" fill="#cec6a8"/>
<path d="M44 330 Q 300 340 544 326" fill="none" stroke="#7e7660" stroke-width="2.4" opacity="0.55"/>

<!-- the lens, and what it does to the date -->
<ellipse cx="404" cy="278" rx="150" ry="146" fill="#000" opacity="0.5" filter="url(#ev1-hl-soft)"/>
<g clip-path="url(#ev1-hl-clip)">
  <circle cx="392" cy="256" r="146" fill="#f6efdc"/>
  <rect x="180" y="200" width="440" height="120" fill="none" stroke="#6f6851" stroke-width="5" opacity="0.7"/>
  <g fill="#2b2820">
    <rect x="222" y="232" width="34" height="52"/><rect x="272" y="232" width="24" height="52"/>
    <rect x="332" y="230" width="28" height="52"/><rect x="376" y="230" width="34" height="52"/>
    <rect x="452" y="228" width="24" height="52"/><rect x="492" y="228" width="32" height="52"/><rect x="540" y="228" width="26" height="52"/>
  </g>
  <g stroke="#8b8369" stroke-width="4" opacity="0.5" fill="none">
    <path d="M180 160 L620 148"/><path d="M180 348 L620 336"/>
  </g>
  <g fill="#a08a5c" opacity="0.22"><circle cx="300" cy="330" r="6"/><circle cx="520" cy="180" r="5"/></g>
  <circle cx="392" cy="256" r="146" fill="url(#ev1-hl-lens)"/>
  <path d="M300 140 Q 236 176 232 250 Q 232 300 258 338 Q 272 258 316 200 Q 350 158 300 140 Z" fill="#ffffff" opacity="0.3"/>
  <path d="M470 152 Q 520 178 536 220 Q 496 194 456 180 Z" fill="#ffffff" opacity="0.16"/>
</g>
<circle cx="392" cy="256" r="146" fill="none" stroke="url(#ev1-hl-brass)" stroke-width="16"/>
<circle cx="392" cy="256" r="146" fill="none" stroke="#fbeeb8" stroke-width="3" opacity="0.45"/>
<circle cx="392" cy="256" r="156" fill="none" stroke="#3d2c08" stroke-width="4" opacity="0.5"/>
<path d="M280 132 Q 330 106 392 104" fill="none" stroke="#fdf3cc" stroke-width="6" opacity="0.6"/>
<!-- the handle, turned from ebony -->
<path d="M498 358 L582 452 Q 596 470 580 484 Q 562 496 550 478 L468 388 Z" fill="#1c1815"/>
<path d="M502 364 L578 452" fill="none" stroke="#6e655c" stroke-width="4" opacity="0.5"/>
<path d="M556 424 L586 396" fill="none" stroke="url(#ev1-hl-brass)" stroke-width="12"/>
<path d="M556 420 L584 394" fill="none" stroke="#fbeeb8" stroke-width="2.4" opacity="0.5"/>
<ellipse cx="570" cy="478" rx="16" ry="13" fill="#100d0b"/>
<ellipse cx="564" cy="470" rx="6" ry="4" fill="#6e655c" opacity="0.5"/>
<!-- the bright coin of light the lens throws on the label -->
<ellipse cx="300" cy="360" rx="46" ry="16" fill="#fff3c8" opacity="0.3"/>
<ellipse cx="300" cy="360" rx="20" ry="7" fill="#fffbe6" opacity="0.4"/>

<rect width="640" height="520" fill="url(#ev1-hl-vig)"/>
`,
  },
  /* The kitchen garden path, last Tuesday: two people stood here a while, facing
     each other, and one of them was asking about wine. */
  c1_asked: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-ask-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1a2226"/><stop offset="0.55" stop-color="#131a18"/><stop offset="1" stop-color="#0a0d0b"/>
  </linearGradient>
  <radialGradient id="ev1-ask-lamp" cx="0.14" cy="0.16" r="0.9">
    <stop offset="0" stop-color="#f6d99a" stop-opacity="0.5"/><stop offset="1" stop-color="#f6d99a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-ask-earth" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7d6540"/><stop offset="0.45" stop-color="#3d2f1b"/><stop offset="1" stop-color="#15100a"/>
  </linearGradient>
  <linearGradient id="ev1-ask-hedge" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#49603a"/><stop offset="0.5" stop-color="#26341d"/><stop offset="1" stop-color="#0f150c"/>
  </linearGradient>
  <linearGradient id="ev1-ask-trug" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#d9b578"/><stop offset="0.45" stop-color="#a17c42"/><stop offset="1" stop-color="#4e3819"/>
  </linearGradient>
  <filter id="ev1-ask-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-ask-vig" cx="0.36" cy="0.38" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.84"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-ask-night)"/>
<rect width="640" height="520" fill="url(#ev1-ask-lamp)"/>
<!-- the box hedge, clipped square, black in the dark -->
<path d="M0 96 L640 82 L640 208 Q 320 226 0 212 Z" fill="url(#ev1-ask-hedge)"/>
<path d="M0 96 L640 82 L640 104 Q 320 122 0 118 Z" fill="#6d8a56" opacity="0.4"/>
<g fill="#0d130a" opacity="0.6">
  <ellipse cx="90" cy="170" rx="60" ry="26"/><ellipse cx="300" cy="182" rx="70" ry="26"/><ellipse cx="520" cy="168" rx="64" ry="24"/>
</g>
<g fill="#5e7a48" opacity="0.3">
  <ellipse cx="150" cy="120" rx="46" ry="14"/><ellipse cx="400" cy="112" rx="52" ry="14"/><ellipse cx="600" cy="106" rx="36" ry="12"/>
</g>
<path d="M0 208 Q 320 226 640 208 L640 224 Q 320 244 0 226 Z" fill="#0a0e07" opacity="0.7"/>

<!-- the path: raked earth, still damp -->
<path d="M0 214 Q 320 236 640 214 L640 520 L0 520 Z" fill="url(#ev1-ask-earth)"/>
<g fill="none" stroke="#241a0d" stroke-width="2.4" opacity="0.5">
  <path d="M0 268 Q 320 288 640 266"/><path d="M0 330 Q 320 352 640 328"/><path d="M0 400 Q 320 424 640 398"/><path d="M0 470 Q 320 494 640 468"/>
</g>
<g fill="none" stroke="#8d7145" stroke-width="1.4" opacity="0.22">
  <path d="M0 276 Q 320 296 640 274"/><path d="M0 408 Q 320 432 640 406"/>
</g>
<g fill="#8a6f45" opacity="0.3">
  <ellipse cx="70" cy="300" rx="34" ry="10"/><ellipse cx="560" cy="340" rx="40" ry="11"/><ellipse cx="330" cy="486" rx="52" ry="13"/>
</g>
<g fill="#16100a" opacity="0.7">
  <ellipse cx="120" cy="360" rx="20" ry="7"/><ellipse cx="470" cy="290" rx="18" ry="6"/><ellipse cx="250" cy="452" rx="22" ry="7"/>
</g>

<!-- his boots, standing where he stood, toes toward her -->
<g transform="rotate(-7 196 308)"><ellipse cx="196" cy="308" rx="54" ry="25" fill="#100b06" opacity="0.9"/><ellipse cx="122" cy="314" rx="27" ry="19" fill="#100b06" opacity="0.9"/><ellipse cx="196" cy="303" rx="52" ry="20" fill="#3d2f1b" opacity="0.55"/><path d="M144 302 Q 196 278 248 302" fill="none" stroke="#9c7d4c" stroke-width="4.0" opacity="0.45"/><path d="M96 310 Q 122 292 148 310" fill="none" stroke="#9c7d4c" stroke-width="3.4" opacity="0.4"/><path d="M160 294 L160 322" stroke="#54432a" stroke-width="4.0" opacity="0.5"/><path d="M184 294 L184 322" stroke="#54432a" stroke-width="4.0" opacity="0.5"/><path d="M208 294 L208 322" stroke="#54432a" stroke-width="4.0" opacity="0.5"/><path d="M232 294 L232 322" stroke="#54432a" stroke-width="4.0" opacity="0.5"/></g>
<g transform="rotate(-5 158 382)"><ellipse cx="158" cy="382" rx="54" ry="25" fill="#100b06" opacity="0.9"/><ellipse cx="84" cy="388" rx="27" ry="19" fill="#100b06" opacity="0.9"/><ellipse cx="158" cy="377" rx="52" ry="20" fill="#3d2f1b" opacity="0.55"/><path d="M106 376 Q 158 352 210 376" fill="none" stroke="#9c7d4c" stroke-width="4.0" opacity="0.45"/><path d="M58 384 Q 84 366 110 384" fill="none" stroke="#9c7d4c" stroke-width="3.4" opacity="0.4"/><path d="M122 368 L122 396" stroke="#54432a" stroke-width="4.0" opacity="0.5"/><path d="M146 368 L146 396" stroke="#54432a" stroke-width="4.0" opacity="0.5"/><path d="M170 368 L170 396" stroke="#54432a" stroke-width="4.0" opacity="0.5"/><path d="M194 368 L194 396" stroke="#54432a" stroke-width="4.0" opacity="0.5"/></g>
<!-- and hers, smaller, facing him -->
<g transform="rotate(6 456 322)"><ellipse cx="456" cy="322" rx="44" ry="20" fill="#100b06" opacity="0.9"/><ellipse cx="517" cy="327" rx="22" ry="16" fill="#100b06" opacity="0.9"/><ellipse cx="456" cy="318" rx="43" ry="16" fill="#3d2f1b" opacity="0.55"/><path d="M413 317 Q 456 297 499 317" fill="none" stroke="#9c7d4c" stroke-width="3.3" opacity="0.45"/><path d="M495 324 Q 517 309 538 324" fill="none" stroke="#9c7d4c" stroke-width="2.8" opacity="0.4"/><path d="M426 311 L426 333" stroke="#54432a" stroke-width="3.3" opacity="0.5"/><path d="M446 311 L446 333" stroke="#54432a" stroke-width="3.3" opacity="0.5"/><path d="M466 311 L466 333" stroke="#54432a" stroke-width="3.3" opacity="0.5"/><path d="M486 311 L486 333" stroke="#54432a" stroke-width="3.3" opacity="0.5"/></g>
<g transform="rotate(4 494 388)"><ellipse cx="494" cy="388" rx="44" ry="20" fill="#100b06" opacity="0.9"/><ellipse cx="555" cy="393" rx="22" ry="16" fill="#100b06" opacity="0.9"/><ellipse cx="494" cy="384" rx="43" ry="16" fill="#3d2f1b" opacity="0.55"/><path d="M451 383 Q 494 363 537 383" fill="none" stroke="#9c7d4c" stroke-width="3.3" opacity="0.45"/><path d="M533 390 Q 555 375 576 390" fill="none" stroke="#9c7d4c" stroke-width="2.8" opacity="0.4"/><path d="M464 377 L464 399" stroke="#54432a" stroke-width="3.3" opacity="0.5"/><path d="M484 377 L484 399" stroke="#54432a" stroke-width="3.3" opacity="0.5"/><path d="M504 377 L504 399" stroke="#54432a" stroke-width="3.3" opacity="0.5"/><path d="M524 377 L524 399" stroke="#54432a" stroke-width="3.3" opacity="0.5"/></g>

<!-- the trug she had set down, herbs cut and never used -->
<ellipse cx="300" cy="440" rx="118" ry="26" fill="#000" opacity="0.6" filter="url(#ev1-ask-soft)"/>
<path d="M212 386 Q 300 370 392 388 L378 434 Q 300 452 224 432 Z" fill="url(#ev1-ask-trug)"/>
<g stroke="#3f2c12" stroke-width="2.4" opacity="0.55" fill="none">
  <path d="M228 384 L238 436"/><path d="M262 378 L268 444"/><path d="M300 376 L302 448"/><path d="M338 378 L336 444"/><path d="M370 384 L364 434"/>
</g>
<g stroke="#e6c489" stroke-width="1.8" opacity="0.4" fill="none">
  <path d="M216 396 Q 300 380 388 398"/><path d="M220 414 Q 300 398 384 416"/>
</g>
<path d="M212 386 Q 300 370 392 388" fill="none" stroke="#f0d29a" stroke-width="4" opacity="0.5"/>
<path d="M232 384 Q 300 336 372 386" fill="none" stroke="#6d4c22" stroke-width="8" stroke-linecap="round"/>
<path d="M232 380 Q 300 334 372 382" fill="none" stroke="#c49a5c" stroke-width="2.4" opacity="0.5"/>
<g stroke="#4e6a35" stroke-width="5" fill="none" stroke-linecap="round">
  <path d="M248 388 Q 224 366 196 358"/><path d="M270 386 Q 258 356 236 340"/><path d="M330 386 Q 348 358 378 346"/><path d="M356 388 Q 384 372 412 372"/>
</g>
<g fill="#5e7c40" opacity="0.9">
  <ellipse cx="192" cy="354" rx="16" ry="8" transform="rotate(-28 192 354)"/>
  <ellipse cx="232" cy="336" rx="14" ry="7" transform="rotate(-52 232 336)"/>
  <ellipse cx="382" cy="342" rx="15" ry="7" transform="rotate(28 382 342)"/>
  <ellipse cx="416" cy="370" rx="13" ry="6" transform="rotate(12 416 370)"/>
</g>
<g fill="#8fae62" opacity="0.5">
  <ellipse cx="188" cy="350" rx="7" ry="3" transform="rotate(-28 188 350)"/><ellipse cx="378" cy="338" rx="6" ry="3" transform="rotate(28 378 338)"/>
</g>

<rect width="640" height="520" fill="url(#ev1-ask-vig)"/>
`,
  },

  /* Gordon's valise, strapped and standing by the door before anyone asked him
     to stay: a thief's luggage, packed early. */
  c1_gordonconfess: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-gc-bg" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#4a4032"/><stop offset="0.55" stop-color="#231d15"/><stop offset="1" stop-color="#0b0906"/>
  </linearGradient>
  <radialGradient id="ev1-gc-pool" cx="0.24" cy="0.1" r="0.88">
    <stop offset="0" stop-color="#f4d79c" stop-opacity="0.3"/><stop offset="1" stop-color="#f4d79c" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-gc-hide" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#a87a44"/><stop offset="0.3" stop-color="#75512a"/><stop offset="0.72" stop-color="#3f2b14"/><stop offset="1" stop-color="#6b4a26"/>
  </linearGradient>
  <linearGradient id="ev1-gc-strap" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6d4a24"/><stop offset="0.4" stop-color="#3d2911"/><stop offset="1" stop-color="#5b3d1c"/>
  </linearGradient>
  <linearGradient id="ev1-gc-brass" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#f4dfa2"/><stop offset="0.35" stop-color="#bd932e"/><stop offset="0.8" stop-color="#5d4310"/><stop offset="1" stop-color="#a8801f"/>
  </linearGradient>
  <linearGradient id="ev1-gc-felt" x1="0.1" y1="0" x2="0.8" y2="1">
    <stop offset="0" stop-color="#6d6455"/><stop offset="0.45" stop-color="#413a30"/><stop offset="1" stop-color="#1b1712"/>
  </linearGradient>
  <filter id="ev1-gc-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-gc-vig" cx="0.44" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-gc-bg)"/>
<rect width="640" height="520" fill="url(#ev1-gc-pool)"/>
<g stroke="#241c13" stroke-width="2" opacity="0.35" fill="none">
  <path d="M70 0 L70 300"/><path d="M250 0 L250 300"/><path d="M430 0 L430 300"/><path d="M600 0 L600 300"/>
</g>
<path d="M0 292 L640 282 L640 520 L0 520 Z" fill="#33260f"/>
<g stroke="#120c05" stroke-width="3" opacity="0.6" fill="none">
  <path d="M0 344 Q 200 332 400 344 Q 540 352 640 338"/><path d="M0 420 Q 200 408 400 420 Q 540 428 640 414"/>
  <path d="M0 494 Q 200 482 400 494"/>
</g>
<path d="M0 292 L640 282 L640 294 L0 304 Z" fill="#8d6a3c" opacity="0.5"/>

<ellipse cx="336" cy="452" rx="230" ry="38" fill="#000" opacity="0.62" filter="url(#ev1-gc-soft)"/>

<!-- the valise -->
<path d="M108 236 Q 108 214 132 212 L508 200 Q 532 200 534 222 L544 414 Q 544 436 520 438 L128 452 Q 104 452 102 430 Z" fill="url(#ev1-gc-hide)"/>
<path d="M108 236 Q 108 214 132 212 L508 200 Q 532 200 534 222 L536 246 L110 262 Z" fill="#c29155" opacity="0.4"/>
<path d="M102 430 Q 104 452 128 452 L520 438 Q 544 436 544 414 L542 392 L104 408 Z" fill="#1e1409" opacity="0.55"/>
<path d="M112 256 L538 240" fill="none" stroke="#54391a" stroke-width="4" opacity="0.6"/>
<path d="M112 250 L538 234" fill="none" stroke="#d9a969" stroke-width="2.4" opacity="0.4"/>
<g fill="#5e4222" opacity="0.25">
  <circle cx="180" cy="330" r="2.6"/><circle cx="250" cy="300" r="2.2"/><circle cx="330" cy="342" r="2.4"/><circle cx="420" cy="312" r="2"/>
  <circle cx="480" cy="352" r="2.6"/><circle cx="150" cy="388" r="2.2"/><circle cx="380" cy="392" r="2"/>
</g>
<!-- straps, buckled tight -->
<path d="M188 218 L232 216 L246 448 L202 450 Z" fill="url(#ev1-gc-strap)"/>
<path d="M192 222 L228 220" fill="none" stroke="#a8772f" stroke-width="3" opacity="0.4"/>
<path d="M196 340 L242 338 L244 366 L198 368 Z" fill="url(#ev1-gc-brass)"/>
<path d="M198 344 L240 342" fill="none" stroke="#fbeeb8" stroke-width="2.4" opacity="0.6"/>
<path d="M212 344 L214 364" fill="none" stroke="#3d2c08" stroke-width="4" opacity="0.7"/>
<path d="M404 210 L448 208 L462 440 L418 442 Z" fill="url(#ev1-gc-strap)"/>
<path d="M408 214 L444 212" fill="none" stroke="#a8772f" stroke-width="3" opacity="0.35"/>
<path d="M412 332 L458 330 L460 358 L414 360 Z" fill="url(#ev1-gc-brass)"/>
<path d="M428 336 L430 356" fill="none" stroke="#3d2c08" stroke-width="4" opacity="0.7"/>
<!-- locks and corners -->
<path d="M296 244 L356 240 L360 288 L300 292 Z" fill="url(#ev1-gc-brass)"/>
<path d="M300 248 L352 244 L352 256 L300 260 Z" fill="#fbeeb8" opacity="0.55"/>
<path d="M310 266 L346 264 L348 282 L312 284 Z" fill="#3d2c08" opacity="0.7"/>
<circle cx="328" cy="274" r="6" fill="#f4dfa2" opacity="0.8"/>
<path d="M102 412 Q 100 442 128 452 L172 448 Q 128 442 122 408 Z" fill="#8a6236" opacity="0.6"/>
<path d="M544 400 Q 546 430 520 438 L478 436 Q 520 430 526 398 Z" fill="#8a6236" opacity="0.5"/>
<!-- handle -->
<path d="M258 214 Q 268 158 336 156 Q 404 158 412 212" fill="none" stroke="#3d2911" stroke-width="17" stroke-linecap="round"/>
<path d="M262 206 Q 274 168 336 166 Q 398 168 408 204" fill="none" stroke="#a8772f" stroke-width="4" opacity="0.4"/>
<path d="M282 188 Q 298 172 336 170" fill="none" stroke="#d9a969" stroke-width="3" opacity="0.35"/>
<ellipse cx="262" cy="212" rx="13" ry="10" fill="url(#ev1-gc-brass)"/>
<ellipse cx="410" cy="210" rx="13" ry="10" fill="url(#ev1-gc-brass)"/>
<!-- the label tied on for a journey he had already decided to take -->
<path d="M414 234 Q 452 258 474 286" fill="none" stroke="#cfc5a4" stroke-width="3"/>
<path d="M470 276 L536 258 L552 320 L486 338 Z" fill="#e8dfc4"/>
<path d="M536 258 L552 320 L486 338 Q 522 320 536 258 Z" fill="#c9bf9e" opacity="0.55"/>
<path d="M470 276 L536 258 L537 264 L471 282 Z" fill="#fdf9ec" opacity="0.6"/>
<g stroke="#8b8269" stroke-width="2.2" opacity="0.6" fill="none">
  <path d="M486 294 L534 281"/><path d="M492 312 L538 299"/>
</g>
<circle cx="480" cy="284" r="5" fill="#8a7d5c"/>

<!-- his hat, set on top because there was no room inside -->
<path d="M132 208 Q 214 178 320 176 Q 300 158 300 138 Q 300 106 254 100 Q 206 102 200 138 Q 198 160 210 178 Q 166 186 132 208 Z" fill="url(#ev1-gc-felt)"/>
<path d="M200 138 Q 206 104 252 100 Q 288 102 298 128 Q 268 112 236 120 Q 208 128 200 138 Z" fill="#8a8070" opacity="0.35"/>
<path d="M204 156 Q 250 140 296 152" fill="none" stroke="#191510" stroke-width="12" opacity="0.7"/>
<path d="M204 150 Q 250 134 296 146" fill="none" stroke="#6d6455" stroke-width="3" opacity="0.4"/>
<path d="M132 208 Q 214 178 320 176" fill="none" stroke="#8a8070" stroke-width="4" opacity="0.3"/>
<path d="M140 210 Q 216 184 316 182" fill="none" stroke="#100d0a" stroke-width="5" opacity="0.5"/>

<rect width="640" height="520" fill="url(#ev1-gc-vig)"/>
`,
  },

  /* The little silver key on its black ribbon, lying where it lay under the
     diary: fine work, thumb-worn, and far too small for furniture. */
  c1_silverkey: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-sk-desk" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#3d2e1d"/><stop offset="0.5" stop-color="#241a10"/><stop offset="1" stop-color="#100b06"/>
  </linearGradient>
  <radialGradient id="ev1-sk-pool" cx="0.38" cy="0.24" r="0.82">
    <stop offset="0" stop-color="#f2cf80" stop-opacity="0.3"/><stop offset="1" stop-color="#f2cf80" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-sk-silver" x1="0" y1="0" x2="0.24" y2="1">
    <stop offset="0" stop-color="#f6f8fa"/><stop offset="0.2" stop-color="#c6ccd2"/><stop offset="0.52" stop-color="#7b838a"/>
    <stop offset="0.78" stop-color="#464d53"/><stop offset="1" stop-color="#9ba3aa"/>
  </linearGradient>
  <linearGradient id="ev1-sk-shaft" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#fdfefe"/><stop offset="0.24" stop-color="#d2d9df"/><stop offset="0.68" stop-color="#545b61"/><stop offset="1" stop-color="#aab2b8"/>
  </linearGradient>
  <linearGradient id="ev1-sk-ribbon" x1="0" y1="0" x2="0.35" y2="1">
    <stop offset="0" stop-color="#514d46"/><stop offset="0.45" stop-color="#2b2825"/><stop offset="1" stop-color="#131110"/>
  </linearGradient>
  <filter id="ev1-sk-soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>
  <radialGradient id="ev1-sk-vig" cx="0.44" cy="0.44" r="0.74">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-sk-desk)"/>
<rect width="640" height="520" fill="url(#ev1-sk-pool)"/>
<!-- desk leather, tooled and rubbed -->
<g fill="none" stroke="#120c06" stroke-width="2.4" opacity="0.5">
  <path d="M0 58 Q 190 42 388 62 Q 530 78 640 62"/>
  <path d="M0 152 Q 220 130 420 154 Q 552 170 640 152"/>
  <path d="M0 286 Q 200 264 396 288 Q 534 304 640 284"/>
  <path d="M0 402 Q 214 380 412 404 Q 546 420 640 402"/>
  <path d="M0 488 Q 196 468 398 492 Q 540 506 640 488"/>
</g>
<g fill="none" stroke="#6f4f2c" stroke-width="1" opacity="0.28">
  <path d="M0 68 Q 200 52 400 72 Q 540 88 640 72"/>
  <path d="M0 296 Q 200 276 400 298 Q 540 314 640 296"/>
  <path d="M0 414 Q 214 392 412 416 Q 546 430 640 414"/>
</g>
<g fill="none" stroke="#8a6537" stroke-width="1.6" opacity="0.22">
  <rect x="34" y="34" width="572" height="452" rx="6"/>
  <rect x="46" y="46" width="548" height="428" rx="4"/>
</g>
<g fill="#d8c9a8" opacity="0.15">
  <circle cx="88" cy="404" r="2.4"/><circle cx="142" cy="446" r="1.6"/><circle cx="524" cy="384" r="2.2"/>
  <circle cx="566" cy="438" r="1.4"/><circle cx="74" cy="118" r="1.8"/><circle cx="548" cy="112" r="2"/>
  <circle cx="296" cy="472" r="1.6"/><circle cx="206" cy="98" r="1.5"/><circle cx="392" cy="88" r="1.3"/>
</g>

<!-- the ribbon, gone grey, curling away to the right -->
<g transform="translate(10 12)" opacity="0.55" filter="url(#ev1-sk-soft)">
  <path d="M330 258 Q 430 226 512 268 Q 570 300 596 372" fill="none" stroke="#000" stroke-width="26"/>
</g>
<path d="M326 254 Q 428 220 510 264 Q 570 298 598 372" fill="none" stroke="url(#ev1-sk-ribbon)" stroke-width="24" stroke-linecap="round"/>
<path d="M328 246 Q 428 214 508 256 Q 566 288 594 358" fill="none" stroke="#6a655c" stroke-width="3.4" opacity="0.4"/>
<path d="M330 264 Q 430 232 512 274 Q 570 306 598 380" fill="none" stroke="#0a0908" stroke-width="4" opacity="0.55"/>
<path d="M446 234 Q 460 252 452 276" fill="none" stroke="#0a0908" stroke-width="6" opacity="0.35"/>
<path d="M544 288 Q 556 306 550 330" fill="none" stroke="#0a0908" stroke-width="6" opacity="0.3"/>
<g fill="none" stroke="#7c766b" stroke-width="1.4" opacity="0.35" stroke-linecap="round">
  <path d="M600 380 l16 20"/><path d="M606 372 l20 16"/><path d="M594 386 l10 26"/>
</g>

<g transform="rotate(-16 300 270)">
  <!-- cast shadow -->
  <g transform="translate(12 16)" opacity="0.6" filter="url(#ev1-sk-soft)">
    <ellipse cx="196" cy="268" rx="66" ry="60" fill="#000"/>
    <rect x="242" y="248" width="150" height="40" rx="16" fill="#000"/>
    <rect x="352" y="248" width="58" height="86" rx="8" fill="#000"/>
  </g>

  <!-- bow: a lozenge with a pierced heart, the way a lady's box key is cut -->
  <path d="M196 202 Q 262 210 266 268 Q 262 328 196 334 Q 130 328 126 268 Q 130 210 196 202 Z" fill="url(#ev1-sk-silver)"/>
  <path d="M196 208 Q 256 216 260 268 Q 256 322 196 328 Q 136 322 132 268 Q 136 216 196 208 Z" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.5"/>
  <path d="M196 212 Q 240 218 250 244 Q 214 226 176 234 Q 146 244 140 272 Q 134 232 196 212 Z" fill="#ffffff" opacity="0.34"/>
  <path d="M152 318 Q 214 338 258 302 Q 244 330 196 332 Q 168 330 152 318 Z" fill="#2c3238" opacity="0.6"/>
  <path d="M196 240 Q 214 224 224 240 Q 230 254 196 282 Q 162 254 168 240 Q 178 224 196 240 Z" fill="#0d0f11"/>
  <path d="M196 244 Q 212 230 220 244 Q 224 254 196 276 Q 168 254 172 244 Q 180 230 196 244 Z" fill="none" stroke="#e6ecf1" stroke-width="1.6" opacity="0.4"/>
  <path d="M176 240 Q 186 232 194 240" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.55"/>
  <ellipse cx="196" cy="304" rx="30" ry="16" fill="none" stroke="#3a4046" stroke-width="2.2" opacity="0.8"/>
  <ellipse cx="196" cy="302" rx="30" ry="16" fill="none" stroke="#eef3f7" stroke-width="1.2" opacity="0.35"/>

  <!-- collar and shaft -->
  <rect x="256" y="248" width="20" height="42" rx="6" fill="url(#ev1-sk-silver)"/>
  <rect x="258" y="250" width="6" height="38" rx="3" fill="#ffffff" opacity="0.5"/>
  <rect x="270" y="250" width="5" height="38" rx="2" fill="#242a2f" opacity="0.5"/>
  <rect x="274" y="252" width="94" height="34" rx="12" fill="url(#ev1-sk-shaft)"/>
  <rect x="278" y="257" width="86" height="6" rx="3" fill="#ffffff" opacity="0.72"/>
  <rect x="278" y="277" width="86" height="5" rx="2" fill="#242a2f" opacity="0.48"/>
  <rect x="352" y="246" width="17" height="46" rx="6" fill="url(#ev1-sk-silver)"/>
  <rect x="354" y="250" width="5" height="38" rx="2" fill="#ffffff" opacity="0.48"/>

  <!-- the bit: two small wards, no more than a jewel box wants -->
  <path d="M362 246 L404 246 L404 340 L382 340 L382 318 L362 318 L362 300 L388 300 L388 282 L362 282 Z" fill="url(#ev1-sk-silver)"/>
  <path d="M364 248 L400 248 L400 258 L364 258 Z" fill="#ffffff" opacity="0.48"/>
  <path d="M398 252 L398 336" fill="none" stroke="#ffffff" stroke-width="2.4" opacity="0.5"/>
  <path d="M366 284 L386 284 M366 302 L386 302" fill="none" stroke="#20262b" stroke-width="2.6" opacity="0.55"/>
  <path d="M382 318 L382 338 L402 338" fill="none" stroke="#20262b" stroke-width="2.6" opacity="0.5"/>

  <!-- wear: hairline scratches, and the tarnish a thumb leaves -->
  <g fill="none" stroke="#ffffff" stroke-width="1.1" opacity="0.4">
    <path d="M290 264 L330 258"/><path d="M304 274 L350 270"/><path d="M148 254 L172 242"/><path d="M228 300 L250 312"/>
  </g>
  <g fill="none" stroke="#2b3238" stroke-width="1" opacity="0.5">
    <path d="M286 274 L328 268"/><path d="M158 292 L182 314"/><path d="M212 226 L242 234"/>
  </g>
  <g fill="none" stroke="#b9a37a" stroke-width="1.4" opacity="0.22">
    <path d="M214 254 q 10 12 -2 22"/><path d="M222 246 q 18 20 -2 38"/><path d="M230 240 q 24 26 -2 50"/>
  </g>
</g>

<rect width="640" height="520" fill="url(#ev1-sk-vig)"/>
`,
  },

  /* Margaret's jewel case, opened: violet velvet, a thin gold band, and one
     foxglove bell pressed flat in a square of note-paper. */
  c1_keepsake: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-kp-wood" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#332617"/><stop offset="0.55" stop-color="#1e160d"/><stop offset="1" stop-color="#0d0906"/>
  </linearGradient>
  <radialGradient id="ev1-kp-pool" cx="0.44" cy="0.26" r="0.8">
    <stop offset="0" stop-color="#f0cd86" stop-opacity="0.28"/><stop offset="1" stop-color="#f0cd86" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-kp-moroc" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#7c5b38"/><stop offset="0.45" stop-color="#4a3320"/><stop offset="1" stop-color="#241708"/>
  </linearGradient>
  <radialGradient id="ev1-kp-velvet" cx="0.42" cy="0.34" r="0.78">
    <stop offset="0" stop-color="#53415c"/><stop offset="0.48" stop-color="#332639"/><stop offset="1" stop-color="#17111d"/>
  </radialGradient>
  <linearGradient id="ev1-kp-gold" x1="0" y1="0" x2="0.25" y2="1">
    <stop offset="0" stop-color="#ffeeb4"/><stop offset="0.24" stop-color="#d9ae4f"/><stop offset="0.56" stop-color="#8a6320"/>
    <stop offset="0.82" stop-color="#54390f"/><stop offset="1" stop-color="#c19a44"/>
  </linearGradient>
  <linearGradient id="ev1-kp-paper" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#efe3c2"/><stop offset="0.42" stop-color="#dccfa8"/><stop offset="1" stop-color="#a89a76"/>
  </linearGradient>
  <linearGradient id="ev1-kp-petal" x1="0" y1="0" x2="0.4" y2="1">
    <stop offset="0" stop-color="#a77f9a"/><stop offset="0.5" stop-color="#7d5a74"/><stop offset="1" stop-color="#4a3446"/>
  </linearGradient>
  <filter id="ev1-kp-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="8"/></filter>
  <radialGradient id="ev1-kp-vig" cx="0.46" cy="0.44" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-kp-wood)"/>
<rect width="640" height="520" fill="url(#ev1-kp-pool)"/>
<g fill="none" stroke="#0d0905" stroke-width="2.6" opacity="0.5">
  <path d="M0 46 Q 210 30 410 50 Q 546 64 640 48"/>
  <path d="M0 470 Q 200 452 400 474 Q 540 488 640 470"/>
  <path d="M0 500 Q 210 482 410 504 Q 546 516 640 500"/>
</g>

<!-- the lid, laid back -->
<g transform="translate(0 -4)">
  <path d="M104 116 L536 116 Q 548 118 548 130 L548 168 L92 168 L92 130 Q 92 118 104 116 Z" fill="url(#ev1-kp-moroc)"/>
  <path d="M104 120 L536 120 Q 542 122 542 130 L542 140 L98 140 L98 130 Q 98 122 104 120 Z" fill="#8f6a42" opacity="0.4"/>
  <rect x="92" y="160" width="456" height="10" fill="#1a1108"/>
  <rect x="118" y="146" width="404" height="14" rx="4" fill="#2b2036"/>
  <g fill="#9b7a3f">
    <rect x="92" y="120" width="14" height="48" rx="3"/><rect x="534" y="120" width="14" height="48" rx="3"/>
    <rect x="296" y="150" width="48" height="20" rx="4"/>
  </g>
  <rect x="312" y="156" width="16" height="10" rx="2" fill="#d8dee4"/>
  <circle cx="320" cy="161" r="2.6" fill="#14181c"/>
</g>

<!-- the body of the case, open to the room -->
<g transform="translate(12 20)" opacity="0.6" filter="url(#ev1-kp-soft)">
  <rect x="92" y="176" width="456" height="248" rx="10" fill="#000"/>
</g>
<rect x="92" y="176" width="456" height="244" rx="10" fill="url(#ev1-kp-moroc)"/>
<rect x="92" y="176" width="456" height="16" fill="#150d05" opacity="0.6"/>
<rect x="92" y="406" width="456" height="14" rx="6" fill="#0f0904" opacity="0.55"/>
<g fill="#9b7a3f">
  <rect x="92" y="176" width="16" height="244" rx="4"/><rect x="532" y="176" width="16" height="244" rx="4"/>
  <rect x="92" y="176" width="456" height="7"/>
</g>
<g fill="#ffe6ab" opacity="0.28">
  <rect x="94" y="180" width="4" height="238"/><rect x="94" y="178" width="452" height="3"/>
</g>
<!-- velvet bed, rubbed thin at the middle -->
<rect x="116" y="196" width="408" height="204" rx="6" fill="url(#ev1-kp-velvet)"/>
<g fill="#8a6c96" opacity="0.16">
  <ellipse cx="240" cy="256" rx="76" ry="34"/><ellipse cx="404" cy="330" rx="70" ry="30"/>
</g>
<g fill="none" stroke="#22182b" stroke-width="2" opacity="0.5">
  <path d="M116 232 Q 320 224 524 234"/><path d="M116 300 Q 320 292 524 302"/><path d="M116 366 Q 320 358 524 368"/>
</g>
<g fill="none" stroke="#a086ac" stroke-width="1.1" opacity="0.2">
  <path d="M140 210 L140 388"/><path d="M262 202 L262 392"/><path d="M386 202 L386 392"/><path d="M498 210 L498 386"/>
</g>
<rect x="116" y="196" width="408" height="204" rx="6" fill="none" stroke="#150e1c" stroke-width="6" opacity="0.6"/>

<!-- the ring: worn thin, engraved inside where nobody was meant to read it -->
<g transform="translate(8 12)" opacity="0.55" filter="url(#ev1-kp-soft)">
  <ellipse cx="234" cy="300" rx="62" ry="46" fill="#000"/>
</g>
<ellipse cx="230" cy="296" rx="62" ry="46" fill="url(#ev1-kp-gold)"/>
<ellipse cx="230" cy="298" rx="48" ry="34" fill="url(#ev1-kp-velvet)"/>
<ellipse cx="230" cy="298" rx="48" ry="34" fill="none" stroke="#3d2a0c" stroke-width="4" opacity="0.7"/>
<path d="M174 282 Q 186 254 230 250 Q 274 254 286 282" fill="none" stroke="#fff0c0" stroke-width="5" opacity="0.7"/>
<path d="M180 320 Q 200 342 230 344 Q 262 342 282 320" fill="none" stroke="#3d2a0c" stroke-width="5" opacity="0.55"/>
<path d="M188 268 Q 210 258 234 258" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.55"/>
<path d="M196 330 Q 216 340 240 340" fill="none" stroke="#ffe7ac" stroke-width="2" opacity="0.35"/>
<g fill="none" stroke="#6a4a16" stroke-width="1.4" opacity="0.55">
  <path d="M198 262 L204 274"/><path d="M252 258 L256 270"/><path d="M170 300 L184 304"/><path d="M288 302 L276 306"/>
</g>
<g fill="none" stroke="#2f2008" stroke-width="2.2" opacity="0.45">
  <path d="M206 322 q 24 10 48 0"/>
</g>

<!-- the note-paper, unfolded, with the pressed bell on it -->
<g transform="translate(10 14)" opacity="0.5" filter="url(#ev1-kp-soft)">
  <path d="M330 232 L502 244 L494 384 L322 372 Z" fill="#000"/>
</g>
<path d="M328 228 L500 240 L492 380 L320 368 Z" fill="url(#ev1-kp-paper)"/>
<path d="M328 228 L500 240 L498 262 L326 250 Z" fill="#f7edcf" opacity="0.5"/>
<g fill="none" stroke="#a89670" stroke-width="1.6" opacity="0.6">
  <path d="M406 232 L400 374"/><path d="M324 300 L496 310"/>
</g>
<g fill="none" stroke="#6f6248" stroke-width="1" opacity="0.4">
  <path d="M410 232 L404 374"/><path d="M324 306 L496 316"/>
</g>
<g fill="#8f8060" opacity="0.3">
  <path d="M320 368 L492 380 L490 386 L318 374 Z"/>
</g>
<!-- three words in his hand, rendered as ink only, no letters -->
<g fill="none" stroke="#3a2f1e" stroke-width="2.4" opacity="0.6" stroke-linecap="round">
  <path d="M344 344 q 14 -8 24 2 q 10 8 22 -2"/>
  <path d="M400 348 q 12 -8 22 2 q 8 8 18 -2"/>
  <path d="M450 350 q 10 -8 20 2"/>
</g>
<!-- the foxglove bell, pressed until it is more stain than flower -->
<g transform="rotate(-12 408 296)">
  <path d="M400 246 Q 388 282 372 318 Q 380 340 396 332 Q 408 346 422 330 Q 440 338 446 314 Q 428 280 416 246 Q 408 238 400 246 Z" fill="url(#ev1-kp-petal)" opacity="0.94"/>
  <path d="M403 252 Q 392 284 378 316 Q 386 334 398 327 Q 409 340 421 325 Q 436 332 441 312 Q 425 282 414 252 Q 408 245 403 252 Z" fill="none" stroke="#c6a3bd" stroke-width="1.5" opacity="0.38"/>
  <path d="M401 250 Q 392 282 380 312 Q 384 288 392 262 Q 395 250 401 250 Z" fill="#c9a8c2" opacity="0.34"/>
  <path d="M374 314 Q 410 336 444 310 Q 440 336 420 332 Q 406 346 394 331 Q 380 334 374 314 Z" fill="#241a28" opacity="0.62"/>
  <path d="M380 306 Q 410 326 440 302 Q 412 318 380 306 Z" fill="#100b13" opacity="0.55"/>
  <g fill="#33243a" opacity="0.8">
    <ellipse cx="398" cy="300" rx="4.6" ry="6.4"/><ellipse cx="414" cy="296" rx="4.2" ry="6"/>
    <ellipse cx="406" cy="314" rx="4" ry="5.6"/><ellipse cx="422" cy="308" rx="3.6" ry="5"/>
  </g>
  <path d="M408 242 q 4 -18 -6 -32" fill="none" stroke="#5f6b45" stroke-width="4" stroke-linecap="round"/>
  <path d="M406 240 q 2 -14 -6 -26" fill="none" stroke="#8b9663" stroke-width="1.6" opacity="0.5"/>
  <path d="M394 246 q -14 -4 -18 -16" fill="none" stroke="#5f6b45" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
  <g fill="none" stroke="#2c1f2e" stroke-width="1.2" opacity="0.38">
    <path d="M394 260 Q 384 292 380 314"/><path d="M420 262 Q 432 292 440 310"/>
  </g>
</g>
<!-- the brown halo the flower has printed into the paper over six years -->
<g fill="#8a6a4a" opacity="0.18">
  <ellipse cx="410" cy="298" rx="52" ry="58"/>
</g>
<g fill="#6a4a2c" opacity="0.14">
  <ellipse cx="410" cy="300" rx="40" ry="46"/>
</g>

<rect width="640" height="520" fill="url(#ev1-kp-vig)"/>
`,
  },

  /* The cage key on the one hook in thirty years of kitchen soot that
     somebody has been wiping clean. */
  c1_cagekey: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-ck-board" x1="0" y1="0" x2="0.22" y2="1">
    <stop offset="0" stop-color="#5b4830"/><stop offset="0.5" stop-color="#3a2d1c"/><stop offset="1" stop-color="#1c1409"/>
  </linearGradient>
  <radialGradient id="ev1-ck-pool" cx="0.5" cy="0.22" r="0.82">
    <stop offset="0" stop-color="#f2cf80" stop-opacity="0.3"/><stop offset="1" stop-color="#f2cf80" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="ev1-ck-clean" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#c9a86a" stop-opacity="0.4"/><stop offset="0.7" stop-color="#c9a86a" stop-opacity="0.12"/>
    <stop offset="1" stop-color="#c9a86a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="ev1-ck-brass" x1="0" y1="0" x2="0.2" y2="1">
    <stop offset="0" stop-color="#f8e6a8"/><stop offset="0.25" stop-color="#c99f45"/><stop offset="0.6" stop-color="#845d1e"/>
    <stop offset="1" stop-color="#a37b31"/>
  </linearGradient>
  <linearGradient id="ev1-ck-iron" x1="0" y1="0" x2="0.28" y2="1">
    <stop offset="0" stop-color="#a9a294"/><stop offset="0.22" stop-color="#6e675a"/><stop offset="0.58" stop-color="#3a352d"/>
    <stop offset="0.84" stop-color="#22201b"/><stop offset="1" stop-color="#5f594d"/>
  </linearGradient>
  <linearGradient id="ev1-ck-bright" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e3dcc9"/><stop offset="0.3" stop-color="#9d9585"/><stop offset="0.72" stop-color="#4a453a"/>
    <stop offset="1" stop-color="#847d6d"/>
  </linearGradient>
  <filter id="ev1-ck-soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="7"/></filter>
  <radialGradient id="ev1-ck-vig" cx="0.48" cy="0.42" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.8"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-ck-board)"/>
<rect width="640" height="520" fill="url(#ev1-ck-pool)"/>
<!-- deal boards, thirty years of range soot laid on even -->
<g fill="none" stroke="#171004" stroke-width="7" opacity="0.65">
  <path d="M172 0 L164 520"/><path d="M462 0 L472 520"/>
</g>
<g fill="none" stroke="#7a6141" stroke-width="2" opacity="0.3">
  <path d="M180 0 L172 520"/><path d="M470 0 L480 520"/>
</g>
<g fill="none" stroke="#221809" stroke-width="2.6" opacity="0.55">
  <path d="M0 74 Q 200 56 400 78 Q 540 92 640 74"/>
  <path d="M0 210 Q 210 190 410 212 Q 548 228 640 208"/>
  <path d="M0 356 Q 196 336 398 358 Q 540 372 640 354"/>
  <path d="M0 468 Q 210 448 410 470 Q 548 486 640 468"/>
</g>
<g fill="none" stroke="#8a6c42" stroke-width="1" opacity="0.24">
  <path d="M0 86 Q 200 68 400 90 Q 540 104 640 86"/>
  <path d="M0 368 Q 196 348 398 370 Q 540 384 640 366"/>
</g>
<g fill="#0c0803" opacity="0.2" filter="url(#ev1-ck-soft)">
  <ellipse cx="46" cy="96" rx="120" ry="96"/><ellipse cx="606" cy="128" rx="112" ry="102"/>
  <ellipse cx="60" cy="452" rx="130" ry="92"/><ellipse cx="600" cy="448" rx="118" ry="86"/>
</g>
<g fill="#0c0803" opacity="0.22">
  <ellipse cx="320" cy="496" rx="200" ry="50"/>
</g>
<!-- the one clean patch: soot wiped off by a sleeve, over and over -->
<ellipse cx="322" cy="272" rx="152" ry="176" fill="url(#ev1-ck-clean)"/>
<g fill="none" stroke="#c9a86a" stroke-width="2" opacity="0.16">
  <path d="M196 200 Q 320 172 448 206"/><path d="M188 340 Q 320 372 452 338"/>
</g>

<!-- a neighbouring hook, still furred with soot -->
<g opacity="0.75">
  <path d="M92 168 q 0 34 26 38" fill="none" stroke="#6b5326" stroke-width="11" stroke-linecap="round"/>
  <path d="M92 168 q 0 34 26 38" fill="none" stroke="#1b1204" stroke-width="5" opacity="0.5" stroke-linecap="round"/>
  <circle cx="92" cy="164" r="9" fill="#5c4a22"/>
</g>

<!-- the hook that has no dust on it, and what hangs from it -->
<g transform="translate(14 20)" opacity="0.6" filter="url(#ev1-ck-soft)">
  <path d="M320 158 q 0 40 30 44" fill="none" stroke="#000" stroke-width="16"/>
  <rect x="300" y="212" width="66" height="230" rx="24" fill="#000"/>
</g>
<circle cx="318" cy="150" r="15" fill="url(#ev1-ck-brass)"/>
<circle cx="318" cy="150" r="15" fill="none" stroke="#ffeeb8" stroke-width="2" opacity="0.4"/>
<circle cx="314" cy="146" r="5" fill="#fff2c8" opacity="0.5"/>
<path d="M318 152 q 0 40 30 46" fill="none" stroke="url(#ev1-ck-brass)" stroke-width="13" stroke-linecap="round"/>
<path d="M316 156 q 0 34 26 40" fill="none" stroke="#ffeab4" stroke-width="3" opacity="0.5" stroke-linecap="round"/>
<path d="M322 156 q 0 38 28 44" fill="none" stroke="#3d2a08" stroke-width="3" opacity="0.5" stroke-linecap="round"/>

<g transform="rotate(6 344 320)">
  <!-- bow: a plain iron ring, the sort a cellar padlock gets -->
  <ellipse cx="344" cy="212" rx="46" ry="44" fill="url(#ev1-ck-iron)"/>
  <ellipse cx="344" cy="212" rx="26" ry="25" fill="#241d10"/>
  <ellipse cx="344" cy="212" rx="26" ry="25" fill="none" stroke="#0d0a06" stroke-width="4"/>
  <path d="M306 194 Q 322 168 356 168" fill="none" stroke="#e6e0d0" stroke-width="4" opacity="0.5"/>
  <path d="M316 248 Q 348 264 380 240" fill="none" stroke="#15130f" stroke-width="5" opacity="0.6"/>
  <path d="M322 188 Q 336 178 352 178" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.35"/>
  <!-- collar -->
  <rect x="326" y="250" width="36" height="20" rx="7" fill="url(#ev1-ck-iron)"/>
  <rect x="329" y="252" width="30" height="6" rx="3" fill="#d5cfbe" opacity="0.5"/>
  <rect x="329" y="264" width="30" height="5" rx="2" fill="#100e0a" opacity="0.55"/>
  <!-- shaft, worn bright where a thumb turns it -->
  <rect x="330" y="266" width="28" height="140" rx="9" fill="url(#ev1-ck-bright)"/>
  <rect x="333" y="272" width="7" height="128" rx="3" fill="#f2ecdb" opacity="0.62"/>
  <rect x="350" y="272" width="6" height="128" rx="3" fill="#0f0d09" opacity="0.5"/>
  <ellipse cx="344" cy="316" rx="16" ry="26" fill="#efe8d4" opacity="0.22"/>
  <!-- bit: two heavy wards, cut for a padlock and nothing finer -->
  <path d="M330 400 L330 468 L392 468 L392 442 L360 442 L360 428 L386 428 L386 404 L360 404 L360 388 L330 388 Z" fill="url(#ev1-ck-bright)"/>
  <path d="M332 390 L358 390 L358 402 L332 402 Z" fill="#f4eedd" opacity="0.6"/>
  <path d="M334 404 L334 464" fill="none" stroke="#efe9d8" stroke-width="4" opacity="0.6"/>
  <path d="M330 388 L360 388 L360 404 L386 404 L386 428 L360 428 L360 442 L392 442 L392 468" fill="none" stroke="#0d0b08" stroke-width="2.6" opacity="0.6"/>
  <path d="M362 430 L384 430 M362 444 L390 444" fill="none" stroke="#100e0a" stroke-width="3" opacity="0.55"/>
  <path d="M330 464 L390 464" fill="none" stroke="#100e0a" stroke-width="4" opacity="0.5"/>
  <!-- rust in the ward cuts, polish everywhere a hand goes -->
  <g fill="#7a4a1e" opacity="0.35">
    <ellipse cx="374" cy="452" rx="12" ry="7"/><ellipse cx="352" cy="418" rx="8" ry="5"/><ellipse cx="330" cy="226" rx="9" ry="6"/>
  </g>
  <g fill="none" stroke="#fdf6e2" stroke-width="1.1" opacity="0.4">
    <path d="M336 292 L340 342"/><path d="M348 300 L350 356"/><path d="M318 200 L330 190"/>
  </g>
  <g fill="none" stroke="#14120d" stroke-width="1" opacity="0.5">
    <path d="M344 288 L346 340"/><path d="M356 314 L354 366"/>
  </g>
</g>

<!-- the label card under the hook, and what thirty years of soot did to it -->
<g transform="rotate(-3 250 176)">
  <rect x="196" y="160" width="108" height="32" rx="3" fill="#cbb98f" opacity="0.55"/>
  <rect x="196" y="160" width="108" height="9" rx="3" fill="#f0e4bd" opacity="0.4"/>
  <g fill="none" stroke="#2e2517" stroke-width="3" opacity="0.4" stroke-linecap="round">
    <path d="M208 180 q 12 -7 22 1 q 10 8 20 -1"/><path d="M258 180 q 10 -6 18 1"/>
  </g>
</g>
<g fill="#0c0803" opacity="0.35">
  <ellipse cx="250" cy="192" rx="66" ry="14"/>
</g>

<rect width="640" height="520" fill="url(#ev1-ck-vig)"/>
`,
  },

  /* Inside the cage: the master's stone cradle, cut for six, empty — and one
     slot where the dust has been dragged clean and recently. */
  c1_sixthbottle: {
    viewBox: "0 0 640 520",
    svg: `
<defs>
  <linearGradient id="ev1-sb-stone" x1="0" y1="0" x2="0.28" y2="1">
    <stop offset="0" stop-color="#544d42"/><stop offset="0.5" stop-color="#2e2923"/><stop offset="1" stop-color="#13100c"/>
  </linearGradient>
  <radialGradient id="ev1-sb-pool" cx="0.62" cy="0.16" r="0.86">
    <stop offset="0" stop-color="#eccd8f" stop-opacity="0.26"/><stop offset="1" stop-color="#eccd8f" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="ev1-sb-hole" cx="0.5" cy="0.34" r="0.72">
    <stop offset="0" stop-color="#2a251d"/><stop offset="0.5" stop-color="#150f0a"/><stop offset="1" stop-color="#050403"/>
  </radialGradient>
  <linearGradient id="ev1-sb-dust" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b3a281" stop-opacity="0.62"/><stop offset="1" stop-color="#b3a281" stop-opacity="0.14"/>
  </linearGradient>
  <linearGradient id="ev1-sb-scrape" x1="0" y1="0" x2="1" y2="0.2">
    <stop offset="0" stop-color="#d8cfb4" stop-opacity="0.1"/><stop offset="0.38" stop-color="#efe6c8" stop-opacity="0.78"/>
    <stop offset="1" stop-color="#cfc4a4" stop-opacity="0.3"/>
  </linearGradient>
  <linearGradient id="ev1-sb-iron" x1="0" y1="0" x2="1" y2="0.3">
    <stop offset="0" stop-color="#241f19"/><stop offset="0.62" stop-color="#4c453a"/><stop offset="1" stop-color="#736a58"/>
  </linearGradient>
  <filter id="ev1-sb-soft" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
  <radialGradient id="ev1-sb-vig" cx="0.5" cy="0.44" r="0.74">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.82"/>
  </radialGradient>
</defs>

<rect width="640" height="520" fill="url(#ev1-sb-stone)"/>
<rect width="640" height="520" fill="url(#ev1-sb-pool)"/>
<!-- courses of cut stone, and the mortar between them -->
<g fill="none" stroke="#0d0b09" stroke-width="5" opacity="0.7">
  <path d="M0 78 L640 62"/><path d="M0 396 L640 380"/><path d="M148 0 L156 78"/><path d="M400 0 L408 68"/>
  <path d="M96 396 L104 520"/><path d="M330 394 L340 520"/><path d="M540 392 L550 520"/>
</g>
<g fill="none" stroke="#6f695e" stroke-width="1.6" opacity="0.28">
  <path d="M0 86 L640 70"/><path d="M0 404 L640 388"/>
</g>
<g fill="#5f584c" opacity="0.28">
  <ellipse cx="76" cy="36" rx="60" ry="20"/><ellipse cx="500" cy="30" rx="52" ry="18"/><ellipse cx="250" cy="470" rx="72" ry="22"/>
</g>

<!-- the cradle: six bays cut in the stone shelf, every one of them empty -->
<rect x="20" y="112" width="600" height="42" rx="6" fill="#3f3931"/>
<rect x="20" y="112" width="600" height="10" rx="4" fill="#6b6355" opacity="0.55"/>
<rect x="20" y="146" width="600" height="10" fill="#0b0907" opacity="0.6"/>
<rect x="20" y="154" width="600" height="228" fill="#2b2620"/>
<g fill="url(#ev1-sb-hole)">
  <path d="M40 168 q 46 -18 92 0 l0 122 q-46 20 -92 0 z"/>
  <path d="M144 168 q 46 -18 92 0 l0 122 q-46 20 -92 0 z"/>
  <path d="M248 168 q 46 -18 92 0 l0 122 q-46 20 -92 0 z"/>
  <path d="M352 168 q 46 -18 92 0 l0 122 q-46 20 -92 0 z"/>
  <path d="M456 168 q 46 -18 92 0 l0 122 q-46 20 -92 0 z"/>
</g>
<path d="M552 168 q 44 -18 88 0 l0 122 q-44 20 -88 0 z" fill="url(#ev1-sb-hole)"/>
<g fill="none" stroke="#0a0806" stroke-width="5" opacity="0.7">
  <path d="M40 168 q 46 -18 92 0"/><path d="M144 168 q 46 -18 92 0"/><path d="M248 168 q 46 -18 92 0"/>
  <path d="M352 168 q 46 -18 92 0"/><path d="M456 168 q 46 -18 92 0"/><path d="M552 168 q 44 -18 88 0"/>
</g>
<g fill="none" stroke="#8b8272" stroke-width="2" opacity="0.3">
  <path d="M40 176 q 46 -18 92 0"/><path d="M144 176 q 46 -18 92 0"/><path d="M248 176 q 46 -18 92 0"/>
  <path d="M352 176 q 46 -18 92 0"/><path d="M456 176 q 46 -18 92 0"/><path d="M552 176 q 44 -18 88 0"/>
</g>
<g fill="#4a443a">
  <rect x="132" y="164" width="12" height="130" rx="4"/><rect x="236" y="164" width="12" height="130" rx="4"/>
  <rect x="340" y="164" width="12" height="130" rx="4"/><rect x="444" y="164" width="12" height="130" rx="4"/>
  <rect x="548" y="164" width="10" height="130" rx="4"/>
</g>
<g fill="#8b8272" opacity="0.22">
  <rect x="133" y="166" width="3" height="126"/><rect x="237" y="166" width="3" height="126"/>
  <rect x="341" y="166" width="3" height="126"/><rect x="445" y="166" width="3" height="126"/>
</g>

<!-- thirty years of dust, lying flat and undisturbed in five of the six -->
<g fill="url(#ev1-sb-dust)">
  <path d="M44 268 q 44 16 84 0 l0 22 q-42 18 -84 0 z"/>
  <path d="M148 268 q 44 16 84 0 l0 22 q-42 18 -84 0 z"/>
  <path d="M252 268 q 44 16 84 0 l0 22 q-42 18 -84 0 z"/>
  <path d="M460 268 q 44 16 84 0 l0 22 q-42 18 -84 0 z"/>
  <path d="M556 268 q 42 16 80 0 l0 22 q-40 18 -80 0 z"/>
</g>
<g fill="#c2b696" opacity="0.32">
  <ellipse cx="86" cy="280" rx="40" ry="9"/><ellipse cx="190" cy="280" rx="40" ry="9"/>
  <ellipse cx="294" cy="280" rx="40" ry="9"/><ellipse cx="502" cy="280" rx="40" ry="9"/>
  <ellipse cx="596" cy="280" rx="36" ry="8"/>
</g>

<!-- the sixth bay: dust dragged clean and bright, sideways, in a hurry -->
<path d="M356 262 q 44 18 84 0 l0 30 q-42 18 -84 0 z" fill="#171310"/>
<path d="M358 272 q 42 14 80 -2 l2 14 q-40 18 -82 2 z" fill="url(#ev1-sb-scrape)"/>
<g fill="none" stroke="#f4ecd2" stroke-width="2.6" opacity="0.55" stroke-linecap="round">
  <path d="M362 282 Q 400 292 438 278"/><path d="M364 290 Q 400 300 436 286"/>
</g>
<g fill="none" stroke="#fffaea" stroke-width="1.4" opacity="0.4" stroke-linecap="round">
  <path d="M366 276 Q 402 286 434 272"/><path d="M370 296 Q 402 306 430 294"/>
</g>
<g fill="#e8dcbb" opacity="0.5">
  <ellipse cx="440" cy="284" rx="10" ry="5"/><ellipse cx="452" cy="290" rx="6" ry="3"/><ellipse cx="462" cy="296" rx="4" ry="2"/>
</g>
<g fill="#9d8f6c" opacity="0.4">
  <ellipse cx="352" cy="300" rx="12" ry="4"/><ellipse cx="336" cy="308" rx="8" ry="3"/>
</g>
<!-- the shallow gouge the punt left when it was dragged over the lip -->
<path d="M356 264 Q 400 276 442 262" fill="none" stroke="#fbf3dc" stroke-width="3.4" opacity="0.5"/>
<path d="M356 268 Q 400 280 442 266" fill="none" stroke="#1a1611" stroke-width="2.4" opacity="0.5"/>

<!-- the cage stands between you and it: bars, throwing their shadow in -->
<g transform="translate(16 22)" opacity="0.5" filter="url(#ev1-sb-soft)">
  <path d="M104 0 L104 520 M264 0 L264 520 M424 0 L424 520 M584 0 L584 520" fill="none" stroke="#000" stroke-width="20"/>
</g>
<g fill="url(#ev1-sb-iron)">
  <rect x="90" y="-10" width="20" height="540"/><rect x="250" y="-10" width="20" height="540"/>
  <rect x="410" y="-10" width="20" height="540"/><rect x="570" y="-10" width="20" height="540"/>
</g>
<g fill="#a29885" opacity="0.28">
  <rect x="90" y="-10" width="4" height="540"/><rect x="250" y="-10" width="4" height="540"/>
  <rect x="410" y="-10" width="4" height="540"/><rect x="570" y="-10" width="4" height="540"/>
</g>
<g fill="#0a0806" opacity="0.5">
  <rect x="104" y="-10" width="6" height="540"/><rect x="264" y="-10" width="6" height="540"/>
  <rect x="424" y="-10" width="6" height="540"/><rect x="584" y="-10" width="6" height="540"/>
</g>
<g fill="#7a4a1e" opacity="0.3">
  <ellipse cx="100" cy="330" rx="9" ry="26"/><ellipse cx="260" cy="180" rx="9" ry="22"/><ellipse cx="420" cy="420" rx="9" ry="24"/>
</g>
<rect x="-10" y="330" width="660" height="18" fill="url(#ev1-sb-iron)"/>
<rect x="-10" y="330" width="660" height="4" fill="#a29885" opacity="0.3"/>
<rect x="-10" y="344" width="660" height="4" fill="#0a0806" opacity="0.55"/>

<!-- cobweb in the corner of the cage, and the dust that never settled again -->
<g fill="none" stroke="#8f8b7c" stroke-width="0.9" opacity="0.16">
  <path d="M0 20 L70 0"/><path d="M0 52 L70 0"/><path d="M0 84 L70 0"/>
  <path d="M8 76 Q 34 46 56 8"/><path d="M20 68 Q 44 42 62 14"/>
</g>
<g fill="#d8c9a8" opacity="0.16">
  <circle cx="480" cy="86" r="2.4"/><circle cx="196" cy="440" r="2"/><circle cx="600" cy="460" r="1.8"/><circle cx="330" cy="60" r="1.6"/>
</g>

<rect width="640" height="520" fill="url(#ev1-sb-vig)"/>
`,
  },
};
