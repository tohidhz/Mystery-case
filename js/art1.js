/* Scene plates for CASE No. 001 — Blackwood Manor.
   Each location gets an illustration; every searchable detail carries a pin
   placed as a percentage of the frame. Language-neutral: no text in the art. */
window.CASE_ART = window.CASE_ART || {};
window.CASE_ART.blackwood = {

  hall: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_body: { x: 39, y: 45 },
      h_table: { x: 64, y: 63 },
      h_waistcoat: { x: 45, y: 57 },
    },
    svg: `
<defs>
  <linearGradient id="bw-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2b2119"/><stop offset="0.5" stop-color="#251c14"/><stop offset="1" stop-color="#191309"/>
  </linearGradient>
  <linearGradient id="bw-cloth" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#cfc09a"/><stop offset="0.28" stop-color="#efe4c6"/>
    <stop offset="0.72" stop-color="#dbcda6"/><stop offset="1" stop-color="#b4a37b"/>
  </linearGradient>
  <radialGradient id="bw-glow" cx="0.5" cy="0.32" r="0.55">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.30"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.72"/>
  </radialGradient>
  <linearGradient id="bw-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b2436"/><stop offset="0.55" stop-color="#151d2c"/><stop offset="1" stop-color="#0d1119"/>
  </linearGradient>
  <linearGradient id="bw-hall-wain" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3d3021"/><stop offset="0.22" stop-color="#2b2116"/><stop offset="1" stop-color="#191208"/>
  </linearGradient>
  <linearGradient id="bw-hall-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2f2519"/><stop offset="0.22" stop-color="#241b12"/><stop offset="1" stop-color="#130f09"/>
  </linearGradient>
  <linearGradient id="bw-hall-haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7d879b" stop-opacity="0.16"/><stop offset="1" stop-color="#7d879b" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="bw-hall-drape" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1e1216"/><stop offset="0.28" stop-color="#4b2d33"/>
    <stop offset="0.52" stop-color="#2c1b20"/><stop offset="0.76" stop-color="#40272c"/><stop offset="1" stop-color="#170e12"/>
  </linearGradient>
  <linearGradient id="bw-hall-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7d6029"/><stop offset="0.28" stop-color="#d9b45e"/>
    <stop offset="0.5" stop-color="#7c6029"/><stop offset="0.78" stop-color="#b18f45"/><stop offset="1" stop-color="#3c2e15"/>
  </linearGradient>
  <radialGradient id="bw-hall-pool" cx="0.5" cy="0.24" r="0.62">
    <stop offset="0" stop-color="#f2c473" stop-opacity="0.42"/>
    <stop offset="0.55" stop-color="#e0ad57" stop-opacity="0.15"/>
    <stop offset="1" stop-color="#e0ad57" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-hall-cand" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-hall-sh" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.6"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bw-hall-chair" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#241b11"/><stop offset="0.38" stop-color="#3f3120"/>
    <stop offset="0.72" stop-color="#2c2115"/><stop offset="1" stop-color="#17110a"/>
  </linearGradient>
</defs>

<!-- the back wall, warm near the chandelier and cooler out at the corners -->
<rect width="1000" height="620" fill="url(#bw-wall)"/>
<rect width="1000" height="620" fill="url(#bw-glow)"/>
<g opacity="0.14" stroke="#5c4a33" stroke-width="1" fill="none">
  <path d="M0 138 Q 250 132 500 140 Q 750 148 1000 140"/>
  <path d="M0 214 Q 260 222 520 214 Q 760 206 1000 214"/>
  <path d="M0 286 Q 300 280 620 288 Q 820 292 1000 286"/>
</g>
<g opacity="0.10" fill="#0a0703">
  <path d="M258 96 Q 300 150 276 236 Q 250 168 258 96 Z"/>
  <path d="M712 110 Q 748 172 726 248 Q 700 180 712 110 Z"/>
</g>

<!-- cornice, and the picture rail the portraits hang from -->
<rect x="0" y="0" width="1000" height="18" fill="#100c06"/>
<rect x="0" y="18" width="1000" height="8" fill="#3a2d1f"/>
<rect x="0" y="26" width="1000" height="5" fill="#4a3a26" opacity="0.7"/>
<rect x="0" y="31" width="1000" height="9" fill="#1a1309"/>
<rect x="0" y="72" width="1000" height="7" fill="#33271a"/>
<rect x="0" y="72" width="1000" height="2" fill="#5a462d" opacity="0.75"/>
<rect x="0" y="79" width="1000" height="5" fill="#0f0b06" opacity="0.55"/>

<!-- ancestors on the wall, dim and low in contrast -->
<g opacity="0.62">
  <rect x="268" y="182" width="104" height="128" rx="3" fill="#0e0a06"/>
  <rect x="268" y="182" width="104" height="128" rx="3" fill="none" stroke="url(#bw-hall-brass)" stroke-width="7"/>
  <rect x="280" y="194" width="80" height="104" fill="#241a15"/>
  <ellipse cx="320" cy="232" rx="19" ry="23" fill="#4a3a2c"/>
  <path d="M296 298 q24 -46 48 0 z" fill="#191317"/>
  <path d="M268 182 l104 0 l-4 5 l-96 0 z" fill="#e6c883" opacity="0.35"/>
  <path d="M268 310 l104 0 l-4 -5 l-96 0 z" fill="#000" opacity="0.4"/>
</g>
<g opacity="0.55">
  <rect x="632" y="192" width="96" height="118" rx="3" fill="#0e0a06"/>
  <rect x="632" y="192" width="96" height="118" rx="3" fill="none" stroke="url(#bw-hall-brass)" stroke-width="6"/>
  <rect x="643" y="203" width="74" height="96" fill="#221a13"/>
  <ellipse cx="680" cy="238" rx="17" ry="21" fill="#463629"/>
  <path d="M659 299 q21 -42 42 0 z" fill="#171214"/>
  <path d="M632 192 l96 0 l-4 5 l-88 0 z" fill="#e6c883" opacity="0.3"/>
</g>
<g stroke="#4a3a26" stroke-width="1.6" opacity="0.5">
  <path d="M320 182 L306 80"/><path d="M320 182 L334 80"/>
  <path d="M680 192 L668 84"/><path d="M680 192 L692 84"/>
</g>

<!-- tall windows: reveal, sill, cold glass, rain outside -->
<g>
  <rect x="46" y="78" width="178" height="256" rx="4" fill="#1d1610"/>
  <rect x="776" y="78" width="178" height="256" rx="4" fill="#1d1610"/>
  <rect x="46" y="78" width="178" height="6" fill="#4c3b26" opacity="0.8"/>
  <rect x="776" y="78" width="178" height="6" fill="#4c3b26" opacity="0.8"/>
  <rect x="60" y="90" width="150" height="235" rx="4" fill="url(#bw-night)" stroke="#3a2d1e" stroke-width="7"/>
  <rect x="790" y="90" width="150" height="235" rx="4" fill="url(#bw-night)" stroke="#3a2d1e" stroke-width="7"/>
  <!-- moonlit haze in the top of each pane -->
  <g opacity="0.5">
    <rect x="64" y="94" width="142" height="120" fill="url(#bw-hall-haze)"/>
    <rect x="794" y="94" width="142" height="120" fill="url(#bw-hall-haze)"/>
  </g>
  <g stroke="#3a2d1e" stroke-width="5">
    <line x1="135" y1="90" x2="135" y2="325"/><line x1="60" y1="200" x2="210" y2="200"/>
    <line x1="865" y1="90" x2="865" y2="325"/><line x1="790" y1="200" x2="940" y2="200"/>
  </g>
  <!-- the lit edge of each glazing bar, and the shadowed one -->
  <g opacity="0.5">
    <line x1="132" y1="92" x2="132" y2="323" stroke="#6e573a" stroke-width="1.6"/>
    <line x1="862" y1="92" x2="862" y2="323" stroke="#6e573a" stroke-width="1.6"/>
    <line x1="62" y1="198" x2="208" y2="198" stroke="#6e573a" stroke-width="1.4"/>
    <line x1="792" y1="198" x2="938" y2="198" stroke="#6e573a" stroke-width="1.4"/>
  </g>
  <!-- room light caught on the inside of the panes -->
  <g opacity="0.16" fill="#cfd8e6">
    <path d="M70 300 L128 214 L128 246 L82 306 Z"/><path d="M142 306 L204 220 L204 250 L154 312 Z"/>
    <path d="M800 300 L858 214 L858 246 L812 306 Z"/><path d="M872 306 L934 220 L934 250 L884 312 Z"/>
  </g>
  <g opacity="0.4">
    <g stroke="#8fa4c0" stroke-width="1.4" class="fx-drift-slow" style="--d:.5s">
      <line x1="78" y1="110" x2="66" y2="150"/><line x1="112" y1="128" x2="100" y2="172"/>
      <line x1="160" y1="104" x2="148" y2="146"/><line x1="192" y1="150" x2="180" y2="196"/>
      <line x1="88" y1="226" x2="76" y2="266"/><line x1="170" y1="238" x2="158" y2="280"/>
    </g>
    <g stroke="#8fa4c0" stroke-width="1.4" class="fx-drift-slow" style="--d:2.4s">
      <line x1="808" y1="120" x2="796" y2="162"/><line x1="846" y1="100" x2="834" y2="142"/>
      <line x1="892" y1="140" x2="880" y2="184"/><line x1="924" y1="110" x2="912" y2="154"/>
      <line x1="818" y1="232" x2="806" y2="274"/><line x1="900" y1="244" x2="888" y2="286"/>
    </g>
  </g>
  <!-- rain beading and running down the inside face -->
  <g opacity="0.28" fill="#c2d0e2">
    <ellipse cx="96" cy="268" rx="2" ry="3"/><ellipse cx="118" cy="292" rx="1.6" ry="2.4"/>
    <ellipse cx="182" cy="276" rx="2.2" ry="3.2"/><ellipse cx="828" cy="284" rx="2" ry="3"/>
    <ellipse cx="906" cy="262" rx="1.8" ry="2.6"/>
  </g>
  <!-- stone sills, lit on top, dark beneath -->
  <rect x="44" y="326" width="182" height="12" rx="2" fill="#4a3a26"/>
  <rect x="44" y="326" width="182" height="4" fill="#6d573a"/>
  <rect x="50" y="338" width="170" height="9" fill="#120d07" opacity="0.8"/>
  <rect x="774" y="326" width="182" height="12" rx="2" fill="#4a3a26"/>
  <rect x="774" y="326" width="182" height="4" fill="#6d573a"/>
  <rect x="780" y="338" width="170" height="9" fill="#120d07" opacity="0.8"/>
</g>

<!-- heavy drapes either side of each window, folded and shadowed -->
<g>
  <path d="M12 74 L58 74 L64 336 L18 336 Q 30 210 12 74 Z" fill="url(#bw-hall-drape)"/>
  <path d="M212 74 L258 74 L262 336 L216 336 Q 226 208 212 74 Z" fill="url(#bw-hall-drape)"/>
  <path d="M742 74 L788 74 L792 336 L746 336 Q 756 208 742 74 Z" fill="url(#bw-hall-drape)"/>
  <path d="M942 74 L988 74 L992 336 L946 336 Q 956 210 942 74 Z" fill="url(#bw-hall-drape)"/>
  <g opacity="0.34" stroke="#7d4a54" stroke-width="2" fill="none">
    <path d="M24 82 Q 32 210 28 330"/><path d="M46 80 Q 52 208 50 332"/>
    <path d="M226 82 Q 232 210 230 332"/><path d="M248 80 Q 252 208 252 332"/>
    <path d="M756 82 Q 762 210 760 332"/><path d="M778 80 Q 782 208 782 332"/>
    <path d="M954 82 Q 962 210 958 330"/><path d="M976 80 Q 982 208 980 332"/>
  </g>
  <g opacity="0.45" stroke="#0d0709" stroke-width="3" fill="none">
    <path d="M36 84 Q 42 208 38 330"/><path d="M238 84 Q 242 208 241 332"/>
    <path d="M768 84 Q 772 208 770 332"/><path d="M966 84 Q 972 208 969 330"/>
  </g>
  <!-- pelmet across the top -->
  <rect x="8" y="62" width="256" height="20" rx="4" fill="#2c1b20"/>
  <rect x="8" y="62" width="256" height="5" fill="#5a3740" opacity="0.7"/>
  <rect x="738" y="62" width="256" height="20" rx="4" fill="#2c1b20"/>
  <rect x="738" y="62" width="256" height="5" fill="#5a3740" opacity="0.7"/>
</g>

<!-- wainscot: chair rail above, recessed panels, skirting and its shadow gap -->
<rect x="0" y="330" width="1000" height="120" fill="url(#bw-hall-wain)"/>
<rect x="0" y="330" width="1000" height="6" fill="#4a3a26"/>
<rect x="0" y="336" width="1000" height="3" fill="#5c4830" opacity="0.6"/>
<rect x="0" y="339" width="1000" height="4" fill="#0f0a05" opacity="0.6"/>
<g>
  <g fill="#1d1509">
    <rect x="30" y="352" width="120" height="76"/><rect x="180" y="352" width="120" height="76"/>
    <rect x="330" y="352" width="120" height="76"/><rect x="550" y="352" width="120" height="76"/>
    <rect x="700" y="352" width="120" height="76"/><rect x="850" y="352" width="120" height="76"/>
  </g>
  <g fill="none" stroke="#4a3a26" stroke-width="2" opacity="0.75">
    <path d="M30 428 L30 352 L150 352"/><path d="M180 428 L180 352 L300 352"/>
    <path d="M330 428 L330 352 L450 352"/><path d="M550 428 L550 352 L670 352"/>
    <path d="M700 428 L700 352 L820 352"/><path d="M850 428 L850 352 L970 352"/>
  </g>
  <g fill="none" stroke="#0c0804" stroke-width="2.4" opacity="0.85">
    <path d="M30 428 L150 428 L150 352"/><path d="M180 428 L300 428 L300 352"/>
    <path d="M330 428 L450 428 L450 352"/><path d="M550 428 L670 428 L670 352"/>
    <path d="M700 428 L820 428 L820 352"/><path d="M850 428 L970 428 L970 352"/>
  </g>
  <g fill="#2e2317" opacity="0.55">
    <rect x="40" y="362" width="100" height="56"/><rect x="190" y="362" width="100" height="56"/>
    <rect x="340" y="362" width="100" height="56"/><rect x="560" y="362" width="100" height="56"/>
    <rect x="710" y="362" width="100" height="56"/><rect x="860" y="362" width="100" height="56"/>
  </g>
</g>
<rect x="0" y="434" width="1000" height="16" fill="#2a2015"/>
<rect x="0" y="434" width="1000" height="3" fill="#4b3a26" opacity="0.8"/>
<rect x="0" y="447" width="1000" height="6" fill="#080503" opacity="0.75"/>

<!-- floor: boards, grain, the cool haze at the far edge, scuffs near the door line -->
<rect x="0" y="450" width="1000" height="170" fill="url(#bw-hall-floor)"/>
<rect x="0" y="450" width="1000" height="40" fill="url(#bw-hall-haze)" opacity="0.55"/>
<g stroke="#0c0805" stroke-width="2.4" opacity="0.8">
  <line x1="0" y1="486" x2="1000" y2="486"/><line x1="0" y1="524" x2="1000" y2="524"/>
  <line x1="0" y1="566" x2="1000" y2="566"/>
</g>
<g stroke="#4a3a24" stroke-width="1.2" opacity="0.28">
  <line x1="0" y1="489" x2="1000" y2="489"/><line x1="0" y1="527" x2="1000" y2="527"/>
  <line x1="0" y1="569" x2="1000" y2="569"/>
</g>
<g stroke="#3a2c1c" stroke-width="1" opacity="0.3" fill="none">
  <path d="M0 466 Q 180 462 360 468 Q 620 474 1000 466"/>
  <path d="M0 505 Q 220 500 470 507 Q 700 512 1000 504"/>
  <path d="M0 545 Q 240 539 500 547 Q 760 553 1000 543"/>
  <path d="M0 594 Q 260 588 540 597 Q 780 602 1000 592"/>
</g>
<g stroke="#100b07" stroke-width="2" opacity="0.45">
  <line x1="128" y1="450" x2="118" y2="486"/><line x1="342" y1="450" x2="336" y2="486"/>
  <line x1="662" y1="450" x2="668" y2="486"/><line x1="884" y1="450" x2="892" y2="486"/>
  <line x1="76" y1="486" x2="60" y2="524"/><line x1="256" y1="486" x2="244" y2="524"/>
  <line x1="758" y1="486" x2="772" y2="524"/><line x1="930" y1="486" x2="946" y2="524"/>
  <line x1="150" y1="524" x2="130" y2="566"/><line x1="850" y1="524" x2="872" y2="566"/>
  <line x1="86" y1="566" x2="60" y2="620"/><line x1="912" y1="566" x2="940" y2="620"/>
</g>
<g opacity="0.1" fill="#7d6b4a">
  <ellipse cx="180" cy="596" rx="48" ry="3.5"/><ellipse cx="826" cy="588" rx="40" ry="3"/>
  <ellipse cx="120" cy="540" rx="30" ry="2.4"/>
</g>
<!-- candlelight thrown back off the boards -->
<rect x="0" y="450" width="1000" height="170" fill="url(#bw-hall-pool)"/>
<g opacity="0.5"><ellipse cx="500" cy="612" rx="320" ry="52" fill="url(#bw-hall-cand)"/></g>

<!-- chandelier: chain, brass hoops, wax, and the dust in its cone -->
<g>
  <g opacity="0.05"><path d="M500 92 L300 620 L700 620 Z" fill="#e6b45e"/></g>
  <g stroke="#4a3a26" stroke-width="3" opacity="0.5" fill="none">
    <path d="M498 0 L498 40"/><path d="M502 0 L502 40"/>
  </g>
  <line x1="500" y1="0" x2="500" y2="70" stroke="#3a2d1e" stroke-width="4"/>
  <g fill="none" stroke="url(#bw-hall-brass)" stroke-width="5">
    <path d="M500 40 Q 442 46 424 68"/><path d="M500 40 Q 468 44 466 62"/>
    <path d="M500 40 Q 532 44 534 62"/><path d="M500 40 Q 558 46 576 68"/>
  </g>
  <ellipse cx="500" cy="86" rx="86" ry="15" fill="none" stroke="url(#bw-hall-brass)" stroke-width="6"/>
  <ellipse cx="500" cy="83" rx="86" ry="15" fill="none" stroke="#f0d48f" stroke-width="1.4" opacity="0.5"/>
  <ellipse cx="500" cy="60" rx="52" ry="10" fill="none" stroke="url(#bw-hall-brass)" stroke-width="4"/>
  <ellipse cx="500" cy="42" rx="12" ry="5" fill="#8a6a2c"/>
  <!-- drops hung off the outer hoop -->
  <g fill="#e8e4d2" opacity="0.42">
    <path d="M420 96 l4 12 l-4 8 l-4 -8 z"/><path d="M452 100 l4 12 l-4 8 l-4 -8 z"/>
    <path d="M500 101 l4 12 l-4 8 l-4 -8 z"/><path d="M548 100 l4 12 l-4 8 l-4 -8 z"/>
    <path d="M580 96 l4 12 l-4 8 l-4 -8 z"/>
  </g>
  <!-- bobeches and candles, each with its run of wax -->
  <g fill="#8a6a2c" opacity="0.9">
    <ellipse cx="427" cy="88" rx="13" ry="4"/><ellipse cx="469" cy="86" rx="13" ry="4"/>
    <ellipse cx="500" cy="86" rx="13" ry="4"/><ellipse cx="531" cy="86" rx="13" ry="4"/>
    <ellipse cx="572" cy="88" rx="13" ry="4"/>
  </g>
  <g fill="#f0e7ce">
    <rect x="424" y="66" width="7" height="22" rx="2"/><rect x="466" y="60" width="7" height="26" rx="2"/>
    <rect x="497" y="56" width="7" height="30" rx="2"/><rect x="528" y="60" width="7" height="26" rx="2"/>
    <rect x="569" y="66" width="7" height="22" rx="2"/>
  </g>
  <g fill="#b8ac8c" opacity="0.7">
    <rect x="429" y="66" width="2" height="22"/><rect x="471" y="60" width="2" height="26"/>
    <rect x="502" y="56" width="2" height="30"/><rect x="533" y="60" width="2" height="26"/>
    <rect x="574" y="66" width="2" height="22"/>
  </g>
  <g fill="#fbf5e4" opacity="0.85">
    <path d="M424 68 q3 10 0 20 z"/><path d="M466 62 q3 12 0 24 z"/>
    <path d="M497 58 q3 14 0 28 z"/><path d="M528 62 q3 12 0 24 z"/><path d="M569 68 q3 10 0 20 z"/>
  </g>
  <g fill="#ffd98a" opacity="0.2">
    <ellipse cx="427" cy="62" rx="15" ry="20"/><ellipse cx="469" cy="55" rx="15" ry="20"/>
    <ellipse cx="500" cy="50" rx="17" ry="22"/><ellipse cx="531" cy="55" rx="15" ry="20"/>
    <ellipse cx="572" cy="62" rx="15" ry="20"/>
  </g>
  <g fill="#ffd98a">
    <ellipse cx="427" cy="62" rx="5" ry="9" class="fx-flame" style="--d:.2s"/>
    <ellipse cx="469" cy="55" rx="5" ry="9" class="fx-flame" style="--d:1.9s"/>
    <ellipse cx="500" cy="50" rx="5.5" ry="10" class="fx-flame" style="--d:.8s"/>
    <ellipse cx="531" cy="55" rx="5" ry="9" class="fx-flame" style="--d:2.6s"/>
    <ellipse cx="572" cy="62" rx="5" ry="9" class="fx-flame" style="--d:1.3s"/>
  </g>
  <g fill="#fff3cf" opacity="0.8">
    <ellipse cx="427" cy="60" rx="1.8" ry="3"/><ellipse cx="469" cy="53" rx="1.8" ry="3"/>
    <ellipse cx="500" cy="48" rx="2" ry="3.4"/><ellipse cx="531" cy="53" rx="1.8" ry="3"/>
    <ellipse cx="572" cy="60" rx="1.8" ry="3"/>
  </g>
  <g opacity="0.15"><ellipse cx="500" cy="70" rx="150" ry="60" fill="#d9a441" class="fx-glow" style="--d:.6s"/></g>
  <!-- dust turning in the light -->
  <g fill="#f3dca8" opacity="0.3">
    <circle cx="446" cy="182" r="1.6"/><circle cx="540" cy="214" r="1.4"/><circle cx="482" cy="252" r="1.8"/>
    <circle cx="576" cy="166" r="1.3"/><circle cx="418" cy="238" r="1.5"/><circle cx="522" cy="300" r="1.6"/>
    <circle cx="466" cy="330" r="1.3"/><circle cx="592" cy="290" r="1.4"/>
  </g>
</g>

<!-- bunting, still hung -->
<g class="fx-sway" style="--d:1.6s">
  <path d="M0 108 Q 250 168 500 118 Q 750 168 1000 108" fill="none" stroke="#6b5326" stroke-width="3"/>
  <path d="M0 106 Q 250 166 500 116 Q 750 166 1000 106" fill="none" stroke="#a2823f" stroke-width="1" opacity="0.55"/>
  <g opacity="0.9">
    <path d="M60 128 l22 0 l-11 26 z" fill="#7a5a6e"/><path d="M140 146 l22 0 l-11 26 z" fill="#5f6b4a"/>
    <path d="M220 158 l22 0 l-11 26 z" fill="#9b7a3f"/><path d="M300 162 l22 0 l-11 26 z" fill="#7a5a6e"/>
    <path d="M380 150 l22 0 l-11 26 z" fill="#5f6b4a"/><path d="M460 130 l22 0 l-11 26 z" fill="#9b7a3f"/>
    <path d="M560 132 l22 0 l-11 26 z" fill="#5f6b4a"/><path d="M640 152 l22 0 l-11 26 z" fill="#7a5a6e"/>
    <path d="M720 162 l22 0 l-11 26 z" fill="#9b7a3f"/><path d="M800 156 l22 0 l-11 26 z" fill="#5f6b4a"/>
    <path d="M880 142 l22 0 l-11 26 z" fill="#7a5a6e"/>
  </g>
  <g opacity="0.4" fill="#000">
    <path d="M71 128 l11 0 l-11 26 z"/><path d="M151 146 l11 0 l-11 26 z"/>
    <path d="M231 158 l11 0 l-11 26 z"/><path d="M311 162 l11 0 l-11 26 z"/>
    <path d="M391 150 l11 0 l-11 26 z"/><path d="M471 130 l11 0 l-11 26 z"/>
    <path d="M571 132 l11 0 l-11 26 z"/><path d="M651 152 l11 0 l-11 26 z"/>
    <path d="M731 162 l11 0 l-11 26 z"/><path d="M811 156 l11 0 l-11 26 z"/>
    <path d="M891 142 l11 0 l-11 26 z"/>
  </g>
</g>

<!-- the long table, running away from the viewer -->
<g>
  <!-- the shadow it lays across the boards -->
  <ellipse cx="500" cy="560" rx="330" ry="90" fill="url(#bw-hall-sh)" opacity="0.75"/>
  <path d="M300 620 L700 620 L616 372 L384 372 Z" fill="url(#bw-cloth)"/>
  <path d="M300 620 L700 620 L616 372 L384 372 Z" fill="url(#bw-hall-pool)"/>
  <!-- linen weave, running with the perspective -->
  <g stroke="#a8946c" stroke-width="0.9" opacity="0.3">
    <path d="M330 620 L398 372"/><path d="M380 620 L415 372"/><path d="M430 620 L432 372"/>
    <path d="M480 620 L449 372"/><path d="M530 620 L466 372"/><path d="M580 620 L483 372"/>
    <path d="M630 620 L500 372"/><path d="M670 620 L513 372"/>
  </g>
  <g stroke="#b4a077" stroke-width="0.8" opacity="0.24">
    <path d="M389 392 L611 392"/><path d="M396 424 L604 424"/><path d="M404 460 L596 460"/>
    <path d="M414 502 L586 502"/><path d="M424 548 L576 548"/><path d="M436 600 L564 600"/>
  </g>
  <!-- the long crease where it was folded away -->
  <g opacity="0.3">
    <path d="M470 372 L440 620 L452 620 L478 372 Z" fill="#8f7f5c"/>
    <path d="M478 372 L452 620 L458 620 L482 372 Z" fill="#fdf4de"/>
  </g>
  <path d="M300 620 L700 620 L688 604 L312 604 Z" fill="#a8946c" opacity="0.5"/>
  <path d="M384 372 L616 372 L612 384 L388 384 Z" fill="#cbb98f"/>
  <path d="M384 372 L616 372 L615 375 L385 375 Z" fill="#f7eed6" opacity="0.7"/>
  <!-- the cloth hanging over each long side -->
  <path d="M300 620 L384 372 L376 372 L288 620 Z" fill="#8d7c5b" opacity="0.75"/>
  <path d="M700 620 L616 372 L624 372 L712 620 Z" fill="#6f6046" opacity="0.75"/>
  <!-- place settings receding down both sides -->
  <g fill="#f4ecd6" stroke="#9a8a63" stroke-width="1.5">
    <ellipse cx="360" cy="576" rx="26" ry="9"/><ellipse cx="640" cy="576" rx="26" ry="9"/>
    <ellipse cx="378" cy="522" rx="22" ry="8"/><ellipse cx="622" cy="522" rx="22" ry="8"/>
    <ellipse cx="394" cy="476" rx="18" ry="6.5"/><ellipse cx="606" cy="476" rx="18" ry="6.5"/>
    <ellipse cx="408" cy="438" rx="15" ry="5.5"/><ellipse cx="592" cy="438" rx="15" ry="5.5"/>
    <ellipse cx="419" cy="408" rx="12" ry="4.5"/><ellipse cx="581" cy="408" rx="12" ry="4.5"/>
  </g>
  <g fill="#000" opacity="0.22">
    <ellipse cx="356" cy="581" rx="27" ry="7"/><ellipse cx="644" cy="581" rx="27" ry="7"/>
    <ellipse cx="374" cy="526" rx="23" ry="6"/><ellipse cx="626" cy="526" rx="23" ry="6"/>
    <ellipse cx="391" cy="479" rx="19" ry="5"/><ellipse cx="609" cy="479" rx="19" ry="5"/>
    <ellipse cx="406" cy="441" rx="15" ry="4"/><ellipse cx="594" cy="441" rx="15" ry="4"/>
  </g>
  <g fill="none" stroke="#fffaea" stroke-width="1.4" opacity="0.6">
    <path d="M340 572 q20 -8 40 0"/><path d="M620 572 q20 -8 40 0"/>
    <path d="M361 519 q17 -6 34 0"/><path d="M605 519 q17 -6 34 0"/>
    <path d="M379 473 q15 -5 30 0"/><path d="M591 473 q15 -5 30 0"/>
  </g>
  <g fill="none" stroke="#c3b48d" stroke-width="1" opacity="0.55">
    <ellipse cx="360" cy="576" rx="16" ry="5.4"/><ellipse cx="640" cy="576" rx="16" ry="5.4"/>
    <ellipse cx="378" cy="522" rx="13" ry="4.6"/><ellipse cx="622" cy="522" rx="13" ry="4.6"/>
    <ellipse cx="394" cy="476" rx="11" ry="3.8"/><ellipse cx="606" cy="476" rx="11" ry="3.8"/>
  </g>
  <!-- knives and folded napkins laid alongside -->
  <g fill="#cbbf9c" opacity="0.8">
    <path d="M394 570 l22 -3 l1 4 l-22 3 z"/><path d="M606 570 l-22 -3 l-1 4 l22 3 z"/>
    <path d="M406 518 l18 -2 l1 3 l-18 2 z"/><path d="M594 518 l-18 -2 l-1 3 l18 2 z"/>
  </g>
  <g fill="#e9dfc2" opacity="0.85">
    <path d="M322 566 l24 -6 l4 14 l-24 6 z"/><path d="M678 566 l-24 -6 l-4 14 l24 6 z"/>
    <path d="M346 514 l20 -5 l3 11 l-20 5 z"/><path d="M654 514 l-20 -5 l-3 11 l20 5 z"/>
  </g>
  <!-- coupes: the guests' champagne, untouched -->
  <g fill="#e8dcbb" opacity="0.92">
    <path d="M332 560 l14 0 l-4 12 l-3 10 l-4 0 l-3 -10 z"/><path d="M668 560 l-14 0 l4 12 l3 10 l4 0 l3 -10 z"/>
    <path d="M352 512 l12 0 l-3 10 l-3 8 l-3 0 l-3 -8 z"/><path d="M648 512 l-12 0 l3 10 l3 8 l3 0 l3 -8 z"/>
    <path d="M372 470 l10 0 l-3 8 l-2 7 l-3 0 l-2 -7 z"/><path d="M628 470 l-10 0 l3 8 l2 7 l3 0 l2 -7 z"/>
    <path d="M390 434 l9 0 l-2 7 l-2 6 l-3 0 l-2 -6 z"/><path d="M610 434 l-9 0 l2 7 l2 6 l3 0 l2 -6 z"/>
  </g>
  <g fill="#fffdf4" opacity="0.7">
    <path d="M334 560 l3 0 l-2 11 l-2 0 z"/><path d="M666 560 l-3 0 l2 11 l2 0 z"/>
    <path d="M354 512 l2.5 0 l-2 9 l-2 0 z"/><path d="M646 512 l-2.5 0 l2 9 l2 0 z"/>
  </g>
  <g fill="#000" opacity="0.2">
    <ellipse cx="339" cy="583" rx="9" ry="3"/><ellipse cx="661" cy="583" rx="9" ry="3"/>
    <ellipse cx="358" cy="531" rx="7" ry="2.4"/><ellipse cx="642" cy="531" rx="7" ry="2.4"/>
  </g>
  <!-- candles down the centre, each with wax run and a pool of light -->
  <g>
    <ellipse cx="500" cy="572" rx="88" ry="26" fill="url(#bw-hall-cand)"/>
    <ellipse cx="500" cy="500" rx="66" ry="20" fill="url(#bw-hall-cand)"/>
    <ellipse cx="500" cy="444" rx="48" ry="15" fill="url(#bw-hall-cand)"/>
    <g fill="#000" opacity="0.24">
      <ellipse cx="500" cy="572" rx="16" ry="5"/><ellipse cx="500" cy="500" rx="13" ry="4"/>
      <ellipse cx="500" cy="444" rx="10" ry="3.4"/>
    </g>
    <g fill="#8a6a2c">
      <ellipse cx="500" cy="570" rx="14" ry="4.5"/><ellipse cx="500" cy="498" rx="11" ry="3.6"/>
      <ellipse cx="500" cy="442" rx="9" ry="3"/>
    </g>
    <rect x="494" y="536" width="12" height="34" fill="#efe4c6"/>
    <rect x="502" y="536" width="4" height="34" fill="#b3a684" opacity="0.7"/>
    <path d="M494 540 q3 14 0 30 z" fill="#fdf7e6" opacity="0.85"/>
    <ellipse cx="500" cy="532" rx="7" ry="3" fill="#ded1ae"/>
    <ellipse cx="500" cy="532" rx="14" ry="18" fill="#ffd98a" opacity="0.22"/>
    <ellipse cx="500" cy="532" rx="5" ry="9" fill="#ffd98a" class="fx-flame" style="--d:.45s"/>
    <ellipse cx="500" cy="530" rx="1.8" ry="3.2" fill="#fff6d8"/>
    <rect x="495" y="470" width="10" height="28" fill="#efe4c6"/>
    <rect x="502" y="470" width="3" height="28" fill="#b3a684" opacity="0.7"/>
    <ellipse cx="500" cy="466" rx="12" ry="15" fill="#ffd98a" opacity="0.2"/>
    <ellipse cx="500" cy="466" rx="4" ry="8" fill="#ffd98a" class="fx-flame" style="--d:2.2s"/>
    <rect x="496" y="420" width="8" height="22" fill="#efe4c6"/>
    <rect x="502" y="420" width="2.5" height="22" fill="#b3a684" opacity="0.7"/>
    <ellipse cx="500" cy="417" rx="10" ry="13" fill="#ffd98a" opacity="0.18"/>
    <ellipse cx="500" cy="417" rx="3.5" ry="7" fill="#ffd98a" class="fx-flame" style="--d:1.05s"/>
  </g>
  <!-- THE MASTER'S GLASS, standing apart: heavy crystal, dark dregs -->
  <g>
    <ellipse cx="608" cy="616" rx="40" ry="10" fill="url(#bw-hall-sh)"/>
    <path d="M596 556 l30 0 l-6 26 q-9 12 -9 22 l0 10 l-6 0 l0 -10 q0 -10 -9 -22 z" fill="#efe8d2" opacity="0.95"/>
    <path d="M601 566 l20 0 l-4 14 q-6 6 -6 8 l-4 0 q0 -2 -6 -8 z" fill="#5d1f18"/>
    <path d="M602 568 q9 4 18 0 q-9 3 -18 0 z" fill="#8f2c22" opacity="0.7"/>
    <ellipse cx="611" cy="614" rx="14" ry="4" fill="#cbb98f"/>
    <ellipse cx="611" cy="612" rx="14" ry="4" fill="none" stroke="#fffaea" stroke-width="1.2" opacity="0.6"/>
    <ellipse cx="611" cy="583" rx="7" ry="2.5" fill="#6f8a45" opacity="0.75"/>
    <path d="M599 558 q-3 14 2 26" fill="none" stroke="#ffffff" stroke-width="2.6" opacity="0.45" stroke-linecap="round"/>
    <path d="M623 558 q3 12 -1 24" fill="none" stroke="#0d0a06" stroke-width="1.4" opacity="0.3"/>
    <path d="M596 556 l30 0" stroke="#fffdf4" stroke-width="1.6" opacity="0.7"/>
  </g>
</g>

<!-- head of the table: the heavy chair and Edmund Blackwood -->
<g>
  <ellipse cx="500" cy="452" rx="120" ry="26" fill="url(#bw-hall-sh)" opacity="0.7"/>
  <rect x="452" y="300" width="96" height="96" rx="6" fill="url(#bw-hall-chair)"/>
  <rect x="452" y="300" width="96" height="5" rx="2" fill="#5a4529" opacity="0.7"/>
  <rect x="462" y="310" width="76" height="70" rx="4" fill="#3d2f1e"/>
  <rect x="466" y="314" width="68" height="62" rx="3" fill="#2a2013"/>
  <path d="M466 314 L534 314 L531 318 L469 318 Z" fill="#0c0805" opacity="0.7"/>
  <path d="M466 376 L534 376 L531 372 L469 372 Z" fill="#6a5230" opacity="0.4"/>
  <g fill="none" stroke="#54401f" stroke-width="1.4" opacity="0.45">
    <path d="M476 324 q24 -8 48 0"/><path d="M476 344 q24 -8 48 0"/><path d="M476 364 q24 -8 48 0"/>
  </g>
  <rect x="448" y="296" width="10" height="10" rx="3" fill="#4a3a22"/>
  <rect x="542" y="296" width="10" height="10" rx="3" fill="#31261a"/>
  <rect x="444" y="392" width="112" height="12" rx="4" fill="#2a2014"/>
  <rect x="444" y="392" width="112" height="3" rx="1" fill="#5c4729" opacity="0.65"/>
  <!-- slumped figure, head fallen to one side -->
  <g>
    <path d="M452 396 q48 -40 96 0 l0 -10 q-48 -44 -96 0 z" fill="#100d14"/>
    <path d="M460 390 q40 -34 80 0 l0 20 l-80 0 z" fill="#171320"/>
    <path d="M466 386 q34 -28 68 0 l0 6 q-34 -26 -68 0 z" fill="#2a2436" opacity="0.6"/>
    <path d="M474 400 q26 -20 52 0 l0 8 l-52 0 z" fill="#0a080e" opacity="0.6"/>
    <g transform="rotate(-16 500 336)">
      <ellipse cx="502" cy="334" rx="29" ry="32" fill="#9d8b70"/>
      <ellipse cx="497" cy="329" rx="25" ry="28" fill="#c0ac8c"/>
      <ellipse cx="493" cy="320" rx="15" ry="15" fill="#d6c3a2" opacity="0.55"/>
      <path d="M471 328 q29 -29 58 0 q-6 -26 -29 -26 q-23 0 -29 26 z" fill="#8e8e88"/>
      <path d="M473 326 q27 -26 54 0 q-6 -22 -27 -22 q-21 0 -27 22 z" fill="#a9a9a1" opacity="0.6"/>
      <path d="M481 330 l13 0" stroke="#4a3f31" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M506 330 l13 0" stroke="#4a3f31" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M481 336 q6 4 13 0" fill="none" stroke="#8a7860" stroke-width="1.6" opacity="0.7"/>
      <path d="M506 336 q6 4 13 0" fill="none" stroke="#8a7860" stroke-width="1.6" opacity="0.7"/>
      <ellipse cx="500" cy="352" rx="8" ry="4" fill="#3a1c17"/>
      <path d="M492 350 q8 -3 16 0" fill="none" stroke="#7d6753" stroke-width="1.4" opacity="0.6"/>
      <path d="M506 355 q7 9 5 19" fill="none" stroke="#4a2018" stroke-width="3.4" stroke-linecap="round" opacity=".9"/>
      <path d="M472 342 q-4 10 4 16" fill="none" stroke="#6f5f4b" stroke-width="2" opacity="0.5"/>
    </g>
    <!-- shirt front and waistcoat, fingers clawed into it -->
    <path d="M480 366 l40 0 l-7 32 l-26 0 z" fill="#ded3b8"/>
    <path d="M480 366 l14 0 l-4 32 l-3 0 z" fill="#fbf5e6" opacity="0.6"/>
    <path d="M513 370 l7 -4 l-7 32 l-3 0 z" fill="#9a8f76" opacity="0.6"/>
    <path d="M485 372 l30 0 l-5 24 l-20 0 z" fill="#26221c"/>
    <path d="M485 372 l10 0 l-3 24 l-7 0 z" fill="#3c3730" opacity="0.7"/>
    <path d="M497 376 q13 -5 19 5 q-8 10 -19 5 z" fill="#b3a184"/>
    <path d="M498 377 q10 -4 15 3 q-7 3 -15 -3 z" fill="#c9b795" opacity="0.7"/>
    <g stroke="#8d7c62" stroke-width="1.6" stroke-linecap="round">
      <path d="M502 378 l1 10"/><path d="M507 377 l1 11"/><path d="M512 379 l0 9"/>
    </g>
    <g stroke="#6a5b45" stroke-width="1" stroke-linecap="round" opacity="0.6">
      <path d="M504 379 l1 9"/><path d="M509 378 l1 10"/>
    </g>
    <circle cx="510" cy="390" r="2" fill="#9b7a3f"/>
    <circle cx="509.4" cy="389.4" r="0.8" fill="#e0c07a"/>
  </g>
  <!-- the hand still curled where a glass was -->
  <ellipse cx="570" cy="404" rx="24" ry="7" fill="#000" opacity="0.3"/>
  <path d="M556 396 q16 -10 26 2 q-12 12 -26 2 z" fill="#cbb392"/>
  <path d="M558 394 q13 -7 21 2 q-10 5 -21 -2 z" fill="#ddc7a5" opacity="0.7"/>
  <g stroke="#8f7a5c" stroke-width="1" opacity="0.6">
    <path d="M566 392 l2 8"/><path d="M572 393 l1 8"/>
  </g>
</g>

<!-- knocked-over chair, foreground: nearer, so warmer and higher in contrast -->
<g>
  <ellipse cx="256" cy="600" rx="82" ry="16" fill="url(#bw-hall-sh)"/>
  <g transform="rotate(-14 250 540)">
    <rect x="214" y="486" width="72" height="12" rx="4" fill="#2a2014"/>
    <rect x="214" y="486" width="72" height="3" rx="1" fill="#5f4a2b" opacity="0.7"/>
    <rect x="222" y="498" width="56" height="60" rx="4" fill="url(#bw-hall-chair)"/>
    <rect x="228" y="504" width="44" height="48" rx="3" fill="#241a10"/>
    <path d="M228 504 L272 504 L269 508 L231 508 Z" fill="#0b0704" opacity="0.7"/>
    <path d="M228 552 L272 552 L269 548 L231 548 Z" fill="#68512e" opacity="0.35"/>
    <rect x="218" y="556" width="10" height="42" fill="#2a2014"/><rect x="272" y="556" width="10" height="42" fill="#2a2014"/>
    <rect x="218" y="556" width="3" height="42" fill="#4e3c22" opacity="0.6"/>
    <rect x="279" y="556" width="3" height="42" fill="#100b06" opacity="0.7"/>
  </g>
  <!-- the napkin he dropped going down -->
  <path d="M300 592 q26 -18 52 -4 q-14 20 -44 20 q-10 -6 -8 -16 z" fill="#d9cdaa" opacity="0.85"/>
  <path d="M308 592 q20 -12 38 -2 q-16 4 -38 2 z" fill="#f2e9cd" opacity="0.6"/>
  <path d="M300 592 q26 -18 52 -4" fill="none" stroke="#8f8265" stroke-width="1.2" opacity="0.6"/>
</g>

<rect width="1000" height="620" fill="url(#bw-vig)"/>
`,
  },

  study: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_fireplace: { x: 17, y: 67 },
      h_desk: { x: 45, y: 76 },
      h_sideboard: { x: 66, y: 47 },
    },
    svg: `
<defs>
  <linearGradient id="bw-study-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2118"/><stop offset="1" stop-color="#16110b"/>
  </linearGradient>
  <linearGradient id="bw-study-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b2436"/><stop offset="1" stop-color="#0d1119"/>
  </linearGradient>
  <linearGradient id="bw-study-leather" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#523b27"/><stop offset="0.55" stop-color="#332518"/><stop offset="1" stop-color="#1c140d"/>
  </linearGradient>
  <radialGradient id="bw-study-glow" cx="0.4" cy="0.56" r="0.74">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-study-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-study-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.45" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.72"/>
  </radialGradient>
  <linearGradient id="bw-study-panel" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#372b1e"/><stop offset="1" stop-color="#180f08"/>
  </linearGradient>
  <linearGradient id="bw-study-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c2318"/><stop offset="1" stop-color="#120e09"/>
  </linearGradient>
  <linearGradient id="bw-study-rug" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#31200f"/><stop offset="1" stop-color="#4b2f1e"/>
  </linearGradient>
  <linearGradient id="bw-study-marble" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#57483a"/><stop offset="1" stop-color="#241c16"/>
  </linearGradient>
  <linearGradient id="bw-study-desk" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#54432f"/><stop offset="1" stop-color="#2a2018"/>
  </linearGradient>
  <linearGradient id="bw-study-brass" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#75591f"/><stop offset="0.3" stop-color="#d0ab54"/><stop offset="1" stop-color="#3a2c12"/>
  </linearGradient>
  <linearGradient id="bw-study-drape" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#25150f"/><stop offset="0.34" stop-color="#5b3327"/><stop offset="1" stop-color="#1c100c"/>
  </linearGradient>
  <linearGradient id="bw-study-cool" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6c7a92" stop-opacity="0"/><stop offset="1" stop-color="#6c7a92" stop-opacity="0.13"/>
  </linearGradient>
  <radialGradient id="bw-study-sh" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.6"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bw-study-shade" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8d9a6e"/><stop offset="1" stop-color="#39422c"/>
  </linearGradient>
</defs>

<rect width="1000" height="620" fill="url(#bw-study-wall)"/>
<rect width="1000" height="620" fill="url(#bw-study-glow)"/>
<!-- the far corner, away from the lamp, goes cool and low in contrast -->
<rect x="500" y="0" width="500" height="620" fill="url(#bw-study-cool)"/>

<!-- cornice, picture rail -->
<rect x="0" y="0" width="1000" height="20" fill="#241b12"/>
<rect x="0" y="20" width="1000" height="7" fill="#3b2f22"/>
<rect x="0" y="27" width="1000" height="5" fill="#100b06" opacity="0.6"/>
<rect x="0" y="64" width="1000" height="5" fill="#33271a"/>
<rect x="0" y="64" width="1000" height="1.6" fill="#5b4830" opacity="0.8"/>

<!-- wainscot along the back wall -->
<rect x="0" y="376" width="1000" height="96" fill="url(#bw-study-panel)"/>
<rect x="0" y="376" width="1000" height="6" fill="#3b2f22"/>
<rect x="0" y="376" width="1000" height="2" fill="#5b4830" opacity="0.75"/>
<rect x="0" y="382" width="1000" height="3" fill="#0d0904" opacity="0.55"/>
<g fill="#1c140b">
  <rect x="332" y="394" width="94" height="58"/><rect x="446" y="394" width="94" height="58"/>
  <rect x="560" y="394" width="94" height="58"/><rect x="674" y="394" width="94" height="58"/>
  <rect x="788" y="394" width="94" height="58"/><rect x="902" y="394" width="84" height="58"/>
</g>
<g fill="none" stroke="#4a3a25" stroke-width="2" opacity="0.7">
  <path d="M332 452 L332 394 L426 394"/><path d="M446 452 L446 394 L540 394"/>
  <path d="M560 452 L560 394 L654 394"/><path d="M674 452 L674 394 L768 394"/>
  <path d="M788 452 L788 394 L882 394"/><path d="M902 452 L902 394 L986 394"/>
</g>
<g fill="none" stroke="#0b0703" stroke-width="2.4" opacity="0.85">
  <path d="M332 452 L426 452 L426 394"/><path d="M446 452 L540 452 L540 394"/>
  <path d="M560 452 L654 452 L654 394"/><path d="M674 452 L768 452 L768 394"/>
  <path d="M788 452 L882 452 L882 394"/><path d="M902 452 L986 452 L986 394"/>
</g>
<g fill="#2b2116" opacity="0.5">
  <rect x="340" y="402" width="78" height="42"/><rect x="454" y="402" width="78" height="42"/>
  <rect x="568" y="402" width="78" height="42"/><rect x="682" y="402" width="78" height="42"/>
  <rect x="796" y="402" width="78" height="42"/><rect x="910" y="402" width="68" height="42"/>
</g>
<rect x="0" y="456" width="1000" height="16" fill="#291f14"/>
<rect x="0" y="456" width="1000" height="3" fill="#4b3a25" opacity="0.75"/>
<rect x="0" y="464" width="1000" height="9" fill="#1b140d"/>
<rect x="0" y="470" width="1000" height="5" fill="#070503" opacity="0.7"/>

<!-- floor and turkey rug -->
<rect x="0" y="472" width="1000" height="148" fill="url(#bw-study-floor)"/>
<g stroke="#0b0805" stroke-width="2.4" opacity="0.8">
  <line x1="0" y1="502" x2="1000" y2="502"/><line x1="0" y1="540" x2="1000" y2="540"/>
  <line x1="0" y1="584" x2="1000" y2="584"/>
</g>
<g stroke="#3c2e1d" stroke-width="1" opacity="0.3" fill="none">
  <path d="M0 486 Q 260 481 540 489 Q 780 493 1000 485"/>
  <path d="M0 522 Q 240 517 500 525 Q 760 530 1000 520"/>
  <path d="M0 562 Q 280 556 560 565 Q 800 570 1000 560"/>
</g>
<g stroke="#100b07" stroke-width="2" opacity="0.4">
  <line x1="120" y1="472" x2="112" y2="502"/><line x1="700" y1="472" x2="708" y2="502"/><line x1="60" y1="502" x2="46" y2="540"/>
</g>
<!-- rug: pile, worn border, and the shade it takes at the far edge -->
<path d="M96 620 L904 620 L772 508 L228 508 Z" fill="url(#bw-study-rug)"/>
<path d="M96 620 L904 620 L772 508 L228 508 Z" fill="#000" opacity="0.18"/>
<path d="M228 508 L772 508 L790 524 L210 524 Z" fill="#000" opacity="0.22"/>
<g stroke="#5a3a24" stroke-width="1" opacity="0.32">
  <path d="M228 508 L96 620"/><path d="M364 508 L328 620"/><path d="M500 508 L560 620"/>
  <path d="M636 508 L792 620"/><path d="M704 508 L860 620"/>
</g>
<g stroke="#2a1a0e" stroke-width="1.2" opacity="0.35">
  <path d="M196 552 L804 552"/><path d="M176 576 L824 576"/><path d="M152 602 L848 602"/>
</g>
<path d="M150 620 L850 620 L744 522 L256 522 Z" fill="none" stroke="#5d1f18" stroke-width="9" opacity="0.8"/>
<g fill="#6b5326" opacity="0.55">
  <path d="M340 566 l22 -14 l22 14 l-22 14 z"/><path d="M440 566 l22 -14 l22 14 l-22 14 z"/>
  <path d="M540 566 l22 -14 l22 14 l-22 14 z"/><path d="M640 566 l22 -14 l22 14 l-22 14 z"/>
  <path d="M290 606 l20 -13 l20 13 l-20 13 z"/><path d="M690 606 l20 -13 l20 13 l-20 13 z"/>
</g>
<!-- lamplight thrown down onto the rug -->
<ellipse cx="380" cy="596" rx="300" ry="70" fill="url(#bw-study-lamp)" opacity="0.28"/>

<!-- chimney breast and the cold fireplace -->
<g>
  <rect x="40" y="26" width="274" height="446" fill="#2a2118"/>
  <rect x="40" y="26" width="8" height="446" fill="#3b2f22"/>
  <rect x="26" y="282" width="302" height="16" fill="url(#bw-study-marble)"/>
  <rect x="26" y="282" width="302" height="3" fill="#7a6753" opacity="0.75"/>
  <rect x="32" y="298" width="290" height="9" fill="#241b12"/>
  <rect x="32" y="298" width="290" height="3" fill="#0a0703" opacity="0.7"/>
  <rect x="64" y="307" width="226" height="165" fill="#33271a"/>
  <rect x="78" y="307" width="16" height="165" fill="#3f3223"/>
  <rect x="78" y="307" width="5" height="165" fill="#5a4830" opacity="0.6"/>
  <rect x="260" y="307" width="16" height="165" fill="#241b12"/>
  <rect x="271" y="307" width="5" height="165" fill="#0b0704" opacity="0.6"/>
  <rect x="96" y="322" width="162" height="150" fill="#100c08"/>
  <rect x="102" y="328" width="150" height="144" fill="#171208"/>
  <!-- sooted firebrick, courses fading into the dark -->
  <g stroke="#241c12" stroke-width="1.4" opacity="0.55">
    <line x1="102" y1="352" x2="252" y2="352"/><line x1="102" y1="378" x2="252" y2="378"/>
    <line x1="102" y1="404" x2="252" y2="404"/><line x1="102" y1="430" x2="252" y2="430"/>
    <line x1="140" y1="328" x2="140" y2="352"/><line x1="172" y1="352" x2="172" y2="378"/>
  </g>
  <rect x="102" y="328" width="150" height="60" fill="#080604" opacity="0.6"/>
  <!-- cold ashes heaped on the grate -->
  <path d="M104 466 q28 -30 74 -26 q46 -4 74 26 z" fill="#4a463e"/>
  <path d="M120 466 q22 -20 52 -17 q34 -3 52 17 z" fill="#5b564b" opacity="0.75"/>
  <g fill="#6b6558" opacity="0.5">
    <ellipse cx="140" cy="458" rx="12" ry="5"/><ellipse cx="192" cy="452" rx="14" ry="6"/>
    <ellipse cx="228" cy="460" rx="10" ry="4"/>
  </g>
  <!-- the half-burned draft, caught in the bars -->
  <g transform="rotate(-9 176 440)">
    <ellipse cx="178" cy="468" rx="52" ry="9" fill="#000" opacity="0.4"/>
    <path d="M140 430 l70 -6 l4 34 l-72 4 z" fill="#e3d5ac"/>
    <path d="M140 430 q16 8 34 -2 q18 10 36 -4 l4 -8 l-72 6 z" fill="#2a2118"/>
    <path d="M144 434 q16 8 34 -2 q18 10 36 -4" fill="none" stroke="#5d3a1c" stroke-width="2.4" opacity="0.9"/>
    <g stroke="#6b5a45" stroke-width="1.8" stroke-linecap="round">
      <line x1="146" y1="446" x2="200" y2="442"/><line x1="146" y1="452" x2="206" y2="448"/>
      <line x1="146" y1="458" x2="188" y2="455"/><line x1="146" y1="464" x2="196" y2="461"/>
    </g>
  </g>
  <!-- grate bars -->
  <g stroke="#1b140d" stroke-width="5" stroke-linecap="round">
    <line x1="108" y1="470" x2="248" y2="470"/><line x1="112" y1="460" x2="244" y2="460"/>
  </g>
  <g stroke="#241b12" stroke-width="4">
    <line x1="122" y1="446" x2="122" y2="472"/><line x1="150" y1="442" x2="150" y2="472"/>
    <line x1="178" y1="440" x2="178" y2="472"/><line x1="206" y1="442" x2="206" y2="472"/>
    <line x1="234" y1="446" x2="234" y2="472"/>
  </g>
  <rect x="56" y="470" width="242" height="14" fill="#2f2b26"/>
  <rect x="56" y="470" width="242" height="4" fill="#4a453c" opacity="0.8"/>
  <rect x="56" y="482" width="242" height="4" fill="#080604" opacity="0.7"/>
  <!-- fire irons, unused -->
  <g stroke="#3b2f22" stroke-width="5" stroke-linecap="round">
    <line x1="292" y1="472" x2="276" y2="368"/><line x1="304" y1="472" x2="296" y2="366"/>
  </g>
  <circle cx="275" cy="362" r="6" fill="url(#bw-study-brass)"/><circle cx="296" cy="360" r="6" fill="url(#bw-study-brass)"/>
  <!-- mantel: candlesticks, both dead, each casting back onto the breast -->
  <g fill="url(#bw-study-brass)">
    <rect x="72" y="256" width="9" height="26"/><ellipse cx="76" cy="284" rx="14" ry="4"/>
    <rect x="268" y="256" width="9" height="26"/><ellipse cx="272" cy="284" rx="14" ry="4"/>
  </g>
  <rect x="70" y="238" width="13" height="20" fill="#e3d5ac"/><rect x="266" y="238" width="13" height="20" fill="#e3d5ac"/>
  <rect x="150" y="262" width="56" height="20" fill="#3b2f22"/>
  <rect x="150" y="262" width="56" height="3" fill="#5e4a30" opacity="0.7"/>
  <ellipse cx="178" cy="262" rx="20" ry="7" fill="url(#bw-study-brass)"/>
  <ellipse cx="178" cy="261" rx="20" ry="7" fill="none" stroke="#e6c887" stroke-width="1" opacity="0.5"/>
</g>

<!-- Margaret's portrait, above the cold hearth -->
<g>
  <path d="M262 82 l14 8 l0 196 l-14 -8 z" fill="#000" opacity="0.35"/>
  <rect x="94" y="82" width="168" height="196" fill="#6b5326"/>
  <rect x="102" y="90" width="152" height="180" fill="#8a6c30"/>
  <rect x="112" y="100" width="132" height="160" fill="#241b12"/>
  <rect x="112" y="100" width="132" height="160" fill="#2b2b22"/>
  <path d="M112 260 l132 0 l0 -44 q-66 -34 -132 0 z" fill="#5f6b4a"/>
  <path d="M112 260 l50 0 l0 -30 q-26 -6 -50 8 z" fill="#71805a" opacity="0.5"/>
  <path d="M146 232 q32 -22 64 0 l-8 28 l-48 0 z" fill="#4b553b"/>
  <path d="M162 214 l32 0 l6 22 l-44 0 z" fill="#e3d5ac"/>
  <rect x="170" y="196" width="16" height="22" fill="#b3a184"/>
  <ellipse cx="178" cy="168" rx="24" ry="28" fill="#b3a184"/>
  <ellipse cx="172" cy="162" rx="16" ry="19" fill="#c6b494" opacity="0.55"/>
  <path d="M152 166 q26 -34 52 0 q4 -34 -26 -34 q-30 0 -26 34 z" fill="#241b12"/>
  <path d="M150 160 q-8 34 6 52 l8 -8 q-12 -20 -6 -42 z" fill="#241b12"/>
  <path d="M206 160 q8 34 -6 52 l-8 -8 q12 -20 6 -42 z" fill="#241b12"/>
  <path d="M156 158 q22 -26 44 -2 q-22 -16 -44 2 z" fill="#4a3a24" opacity="0.45"/>
  <g stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round">
    <line x1="164" y1="166" x2="174" y2="166"/><line x1="182" y1="166" x2="192" y2="166"/>
  </g>
  <line x1="171" y1="188" x2="185" y2="188" stroke="#6b5a45" stroke-width="2" stroke-linecap="round"/>
  <circle cx="178" cy="222" r="4" fill="#9b7a3f"/>
  <circle cx="177" cy="221" r="1.4" fill="#e2c384"/>
  <!-- craquelure and the sheen of old varnish -->
  <path d="M112 100 l58 0 l-58 76 z" fill="#f0e7ce" opacity="0.08"/>
</g>

<!-- bookcase of ledgers -->
<g>
  <rect x="326" y="100" width="228" height="278" fill="#241b12"/>
  <rect x="326" y="100" width="228" height="10" fill="#3b2f22"/>
  <rect x="326" y="100" width="228" height="3" fill="#584428" opacity="0.7"/>
  <rect x="326" y="100" width="8" height="278" fill="#3b2f22" opacity="0.6"/>
  <rect x="546" y="100" width="8" height="278" fill="#0c0804" opacity="0.6"/>
  <g fill="#3b2f22">
    <rect x="330" y="168" width="220" height="9"/><rect x="330" y="236" width="220" height="9"/>
    <rect x="330" y="304" width="220" height="9"/><rect x="330" y="370" width="220" height="9"/>
  </g>
  <!-- shelves throw a line of shade over the books beneath -->
  <g fill="#000" opacity="0.4">
    <rect x="330" y="110" width="220" height="12"/><rect x="330" y="177" width="220" height="12"/>
    <rect x="330" y="245" width="220" height="12"/><rect x="330" y="313" width="220" height="12"/>
  </g>
  <g>
    <rect x="336" y="116" width="16" height="52" fill="#5d1f18"/><rect x="354" y="112" width="13" height="56" fill="#3b2f22"/>
    <rect x="369" y="118" width="18" height="50" fill="#5f6b4a"/><rect x="389" y="114" width="12" height="54" fill="#6b5326"/>
    <rect x="403" y="120" width="15" height="48" fill="#4a3524"/><rect x="420" y="112" width="17" height="56" fill="#5d1f18"/>
    <rect x="439" y="118" width="12" height="50" fill="#7a5a6e"/><rect x="453" y="114" width="16" height="54" fill="#3b2f22"/>
    <rect x="471" y="120" width="13" height="48" fill="#5f6b4a"/><rect x="486" y="112" width="18" height="56" fill="#6b5326"/>
    <path d="M506 168 l26 -50 l12 6 l-24 44 z" fill="#4a3524"/>
  </g>
  <g>
    <rect x="336" y="184" width="18" height="52" fill="#3b2f22"/><rect x="356" y="188" width="13" height="48" fill="#5d1f18"/>
    <rect x="371" y="182" width="16" height="54" fill="#6b5326"/><rect x="389" y="186" width="12" height="50" fill="#5f6b4a"/>
    <rect x="403" y="184" width="17" height="52" fill="#4a3524"/><rect x="422" y="188" width="14" height="48" fill="#3b2f22"/>
    <rect x="438" y="182" width="12" height="54" fill="#5d1f18"/>
    <rect x="456" y="216" width="90" height="10" fill="#4a3524"/><rect x="456" y="226" width="90" height="10" fill="#6b5326"/>
    <rect x="462" y="206" width="80" height="10" fill="#3b2f22"/>
  </g>
  <g>
    <rect x="336" y="252" width="14" height="52" fill="#5f6b4a"/><rect x="352" y="256" width="17" height="48" fill="#4a3524"/>
    <rect x="371" y="250" width="12" height="54" fill="#5d1f18"/><rect x="385" y="254" width="16" height="50" fill="#6b5326"/>
    <rect x="403" y="250" width="13" height="54" fill="#3b2f22"/><rect x="418" y="256" width="18" height="48" fill="#5f6b4a"/>
    <rect x="438" y="252" width="12" height="52" fill="#7a5a6e"/><rect x="452" y="254" width="15" height="50" fill="#4a3524"/>
    <rect x="469" y="250" width="17" height="54" fill="#5d1f18"/><rect x="488" y="256" width="12" height="48" fill="#6b5326"/>
    <rect x="502" y="252" width="16" height="52" fill="#3b2f22"/>
  </g>
  <g>
    <rect x="336" y="320" width="17" height="50" fill="#4a3524"/><rect x="355" y="316" width="13" height="54" fill="#6b5326"/>
    <rect x="370" y="322" width="16" height="48" fill="#5d1f18"/><rect x="388" y="318" width="12" height="52" fill="#3b2f22"/>
    <rect x="402" y="320" width="18" height="50" fill="#5f6b4a"/>
    <rect x="428" y="348" width="112" height="11" fill="#4a3524"/><rect x="428" y="359" width="112" height="11" fill="#5d1f18"/>
    <rect x="436" y="337" width="98" height="11" fill="#3b2f22"/>
  </g>
  <!-- the lamp side of every spine catches light; the far side does not -->
  <g fill="#ffffff" opacity="0.11">
    <rect x="336" y="116" width="4" height="52"/><rect x="403" y="120" width="4" height="48"/>
    <rect x="336" y="184" width="4" height="52"/><rect x="403" y="184" width="4" height="52"/>
    <rect x="336" y="252" width="3" height="52"/><rect x="403" y="250" width="3" height="54"/>
    <rect x="469" y="250" width="4" height="54"/><rect x="336" y="320" width="4" height="50"/>
  </g>
  <g fill="#000" opacity="0.3">
    <rect x="348" y="116" width="4" height="52"/><rect x="414" y="120" width="4" height="48"/>
    <rect x="350" y="184" width="4" height="52"/><rect x="416" y="184" width="4" height="52"/>
    <rect x="346" y="252" width="4" height="52"/><rect x="482" y="250" width="4" height="54"/>
  </g>
  <g fill="#9b7a3f" opacity="0.55">
    <rect x="337" y="130" width="14" height="2"/><rect x="421" y="128" width="15" height="2"/>
    <rect x="337" y="200" width="16" height="2"/><rect x="337" y="268" width="12" height="2"/>
    <rect x="470" y="266" width="15" height="2"/><rect x="337" y="336" width="15" height="2"/>
  </g>
</g>

<!-- the window, rain outside; heavy drapes -->
<g>
  <rect x="536" y="54" width="322" height="22" fill="#4a2a20"/>
  <rect x="574" y="70" width="236" height="242" fill="#1b140d"/>
  <rect x="586" y="82" width="212" height="216" rx="3" fill="url(#bw-study-night)" stroke="#3a2d1e" stroke-width="8"/>
  <g stroke="#3a2d1e" stroke-width="5">
    <line x1="692" y1="82" x2="692" y2="298"/><line x1="586" y1="190" x2="798" y2="190"/>
  </g>
  <g opacity="0.5">
    <line x1="689" y1="84" x2="689" y2="296" stroke="#6b5539" stroke-width="1.5"/>
    <line x1="588" y1="188" x2="796" y2="188" stroke="#6b5539" stroke-width="1.3"/>
  </g>
  <circle cx="762" cy="118" r="15" fill="#cbd6e4" opacity="0.14"/>
  <circle cx="762" cy="118" r="30" fill="#cbd6e4" opacity="0.05"/>
  <g opacity="0.34">
    <g stroke="#8fa4c0" stroke-width="1.3" class="fx-drift-slow" style="--d:1.4s">
      <line x1="604" y1="98" x2="594" y2="134"/><line x1="640" y1="112" x2="630" y2="150"/>
      <line x1="668" y1="94" x2="658" y2="132"/><line x1="712" y1="140" x2="702" y2="178"/>
      <line x1="746" y1="160" x2="736" y2="198"/><line x1="778" y1="106" x2="768" y2="144"/>
    </g>
  </g>
  <!-- the lit room reflected faintly back off the glass -->
  <g opacity="0.1" fill="#dbe3ee">
    <path d="M600 282 L668 196 L668 224 L614 290 Z"/><path d="M706 288 L780 198 L780 226 L720 294 Z"/>
  </g>
  <rect x="576" y="300" width="232" height="12" fill="#4a3a26"/>
  <rect x="576" y="300" width="232" height="4" fill="#6b5539"/>
  <rect x="582" y="312" width="220" height="7" fill="#100c07" opacity="0.75"/>
  <path d="M540 76 l52 0 l-6 226 q-24 12 -48 4 z" fill="url(#bw-study-drape)"/>
  <path d="M794 76 l58 0 l6 230 q-28 12 -54 4 z" fill="url(#bw-study-drape)"/>
  <g fill="none" stroke="#2f1a14" stroke-width="3" opacity="0.9">
    <path d="M556 80 l-4 220"/><path d="M572 80 l-4 222"/>
    <path d="M812 80 l4 224"/><path d="M832 80 l6 222"/>
  </g>
  <g fill="none" stroke="#7d4633" stroke-width="1.6" opacity="0.4">
    <path d="M548 80 l-4 220"/><path d="M580 80 l-3 220"/>
    <path d="M804 80 l4 224"/><path d="M844 80 l6 220"/>
  </g>
</g>

<!-- sideboard by the window: THE DECANTER -->
<g>
  <ellipse cx="682" cy="474" rx="180" ry="18" fill="url(#bw-study-sh)" opacity="0.8"/>
  <rect x="548" y="314" width="266" height="15" fill="url(#bw-study-desk)"/>
  <rect x="548" y="314" width="266" height="4" fill="#7a6244" opacity="0.65"/>
  <rect x="548" y="326" width="266" height="4" fill="#0d0904" opacity="0.7"/>
  <rect x="560" y="329" width="242" height="108" fill="#2a2118"/>
  <g fill="none" stroke="#3b2f22" stroke-width="3">
    <rect x="572" y="340" width="106" height="38"/><rect x="686" y="340" width="104" height="38"/>
    <rect x="572" y="388" width="106" height="38"/><rect x="686" y="388" width="104" height="38"/>
  </g>
  <g fill="none" stroke="#5a4629" stroke-width="1.2" opacity="0.55">
    <path d="M572 378 L572 340 L678 340"/><path d="M686 378 L686 340 L790 340"/>
    <path d="M572 426 L572 388 L678 388"/><path d="M686 426 L686 388 L790 388"/>
  </g>
  <g fill="none" stroke="#090604" stroke-width="1.6" opacity="0.7">
    <path d="M572 378 L678 378 L678 340"/><path d="M686 378 L790 378 L790 340"/>
    <path d="M572 426 L678 426 L678 388"/><path d="M686 426 L790 426 L790 388"/>
  </g>
  <g fill="url(#bw-study-brass)">
    <ellipse cx="625" cy="359" rx="10" ry="4"/><ellipse cx="738" cy="359" rx="10" ry="4"/>
    <ellipse cx="625" cy="407" rx="10" ry="4"/><ellipse cx="738" cy="407" rx="10" ry="4"/>
  </g>
  <rect x="566" y="437" width="14" height="34" fill="#241b12"/><rect x="782" y="437" width="14" height="34" fill="#241b12"/>
  <!-- crystal decanter, nearly full, stopper set neatly beside -->
  <g>
    <ellipse cx="660" cy="318" rx="58" ry="9" fill="#000" opacity="0.45"/>
    <path d="M634 278 q-16 16 -16 30 l0 3 q0 5 6 5 l72 0 q6 0 6 -5 l0 -3 q0 -14 -16 -30 z" fill="#efe8d2" opacity="0.95"/>
    <path d="M640 288 q-12 12 -12 22 l0 3 l60 0 l0 -3 q0 -10 -12 -22 z" fill="#5d1f18"/>
    <path d="M642 290 q14 6 32 0 q-16 5 -32 0 z" fill="#8f2c22" opacity="0.6"/>
    <rect x="652" y="248" width="16" height="32" fill="#efe8d2" opacity="0.9"/>
    <rect x="652" y="248" width="4" height="32" fill="#ffffff" opacity="0.45"/>
    <ellipse cx="660" cy="248" rx="12" ry="5" fill="#efe8d2" opacity="0.95"/>
    <ellipse cx="660" cy="246" rx="12" ry="5" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.55"/>
    <path d="M628 290 l0 24" stroke="#ffffff" stroke-width="3" opacity="0.35"/>
    <path d="M694 292 q3 10 0 20" fill="none" stroke="#0d0a06" stroke-width="1.6" opacity="0.3"/>
    <path d="M634 278 l52 0" stroke="#fffdf4" stroke-width="1.6" opacity="0.6"/>
    <ellipse cx="660" cy="316" rx="46" ry="6" fill="#14110d" opacity="0.4"/>
    <g>
      <ellipse cx="716" cy="316" rx="14" ry="4" fill="#000" opacity="0.4"/>
      <ellipse cx="716" cy="306" rx="11" ry="5" fill="#efe8d2" opacity="0.95"/>
      <path d="M709 306 l14 0 l-3 9 l-8 0 z" fill="#efe8d2" opacity="0.9"/>
      <ellipse cx="716" cy="298" rx="8" ry="7" fill="#f4ecd6" opacity="0.9"/>
      <ellipse cx="713" cy="296" rx="3" ry="2.4" fill="#ffffff" opacity="0.7"/>
    </g>
    <g fill="#e8dcbb" opacity="0.9">
      <path d="M748 288 l14 0 l-4 12 l-2 10 l-3 0 l-2 -10 z"/>
      <path d="M772 288 l14 0 l-4 12 l-2 10 l-3 0 l-2 -10 z"/>
    </g>
    <g fill="#ffffff" opacity="0.5">
      <path d="M749 288 l3 0 l-3 11 l-1 0 z"/><path d="M773 288 l3 0 l-3 11 l-1 0 z"/>
    </g>
    <ellipse cx="755" cy="313" rx="9" ry="3" fill="#cbb98f"/><ellipse cx="779" cy="313" rx="9" ry="3" fill="#cbb98f"/>
    <g fill="#000" opacity="0.35"><ellipse cx="752" cy="316" rx="10" ry="3"/><ellipse cx="776" cy="316" rx="10" ry="3"/></g>
  </g>
</g>

<!-- Dr. Hale, very still, in the corner armchair -->
<g>
  <ellipse cx="898" cy="548" rx="130" ry="22" fill="url(#bw-study-sh)" opacity="0.85"/>
  <path d="M822 476 l0 -98 q0 -60 60 -64 l40 0 q60 4 60 64 l0 98 z" fill="url(#bw-study-leather)"/>
  <path d="M840 470 l0 -86 q0 -46 46 -50 l32 0 q46 4 46 50 l0 86 z" fill="#3b2f22"/>
  <path d="M840 470 l0 -86 q0 -46 46 -50 l10 0 q-38 10 -38 50 l0 86 z" fill="#4d3c28" opacity="0.6"/>
  <path d="M964 470 l0 -86 q0 -40 -34 -49 l12 -1 q42 6 42 50 l0 86 z" fill="#1a120b" opacity="0.7"/>
  <g fill="none" stroke="#2b1f14" stroke-width="2" opacity="0.8">
    <path d="M856 400 l108 0"/><path d="M856 428 l108 0"/><path d="M890 384 l0 86"/><path d="M930 384 l0 86"/>
  </g>
  <!-- the doctor -->
  <path d="M846 470 q0 -66 44 -72 q46 6 46 72 z" fill="#1e1a16" class="fx-breathe" style="--d:2.8s"/>
  <path d="M866 412 q26 -22 52 0 l-6 58 l-40 0 z" fill="#26221c"/>
  <path d="M866 412 q14 -12 28 -8 l-4 66 l-18 0 z" fill="#332e26" opacity="0.6"/>
  <path d="M882 410 l22 0 l-5 30 l-12 0 z" fill="#e3d5ac"/>
  <path d="M882 410 l8 0 l-2 30 l-3 0 z" fill="#f6efd8" opacity="0.6"/>
  <path d="M890 412 l7 0 l-3 40 l-3 0 z" fill="#5d1f18"/>
  <ellipse cx="892" cy="378" rx="25" ry="29" fill="#b3a184"/>
  <ellipse cx="886" cy="373" rx="18" ry="22" fill="#c4b294" opacity="0.5"/>
  <path d="M867 374 q25 -30 50 0 q4 -30 -25 -30 q-29 0 -25 30 z" fill="#8e8e88"/>
  <path d="M869 372 q23 -26 46 0 q4 -26 -23 -26 q-27 0 -23 26 z" fill="#a5a59d" opacity="0.55"/>
  <path d="M864 372 q-4 18 4 28 l6 -6 q-6 -10 -4 -22 z" fill="#8e8e88"/>
  <g stroke="#4a3f31" stroke-width="2.3" stroke-linecap="round">
    <line x1="875" y1="374" x2="887" y2="374"/><line x1="898" y1="374" x2="910" y2="374"/>
  </g>
  <g fill="none" stroke="url(#bw-study-brass)" stroke-width="1.6" opacity="0.9">
    <circle cx="881" cy="378" r="9"/><circle cx="904" cy="378" r="9"/><line x1="890" y1="378" x2="895" y2="378"/>
    <line x1="872" y1="376" x2="864" y2="373"/><line x1="913" y1="376" x2="921" y2="373"/>
  </g>
  <g fill="#cfd8e0" opacity="0.16"><circle cx="881" cy="378" r="8"/><circle cx="904" cy="378" r="8"/></g>
  <line x1="892" y1="382" x2="890" y2="392" stroke="#8d7c62" stroke-width="2" stroke-linecap="round"/>
  <line x1="883" y1="398" x2="901" y2="398" stroke="#6b5a45" stroke-width="2.4" stroke-linecap="round"/>
  <!-- hands folded, motionless -->
  <path d="M852 464 q40 -18 84 0 l0 24 l-84 0 z" fill="#1e1a16"/>
  <ellipse cx="878" cy="466" rx="16" ry="8" fill="#b3a184"/>
  <ellipse cx="906" cy="464" rx="16" ry="8" fill="#c0ae90"/>
  <g stroke="#8d7c62" stroke-width="1.3" stroke-linecap="round">
    <line x1="870" y1="466" x2="884" y2="470"/><line x1="874" y1="461" x2="888" y2="465"/>
    <line x1="900" y1="462" x2="914" y2="466"/>
  </g>
  <rect x="816" y="428" width="32" height="52" rx="14" fill="#4a3524"/>
  <rect x="944" y="428" width="32" height="52" rx="14" fill="#4a3524"/>
  <path d="M856 488 q40 -12 76 0 l0 44 l-76 0 z" fill="#1e1a16"/>
  <path d="M856 488 q20 -8 38 -5 l0 49 l-38 0 z" fill="#272117" opacity="0.55"/>
  <ellipse cx="872" cy="540" rx="18" ry="8" fill="#14110d"/><ellipse cx="916" cy="540" rx="18" ry="8" fill="#14110d"/>
  <rect x="836" y="476" width="12" height="52" fill="#241b12"/><rect x="950" y="476" width="12" height="52" fill="#241b12"/>
</g>

<!-- the desk, locked -->
<rect x="150" y="266" width="340" height="336" fill="url(#bw-study-lamp)" class="fx-glow" style="--d:.3s"/>
<g>
  <ellipse cx="456" cy="584" rx="250" ry="34" fill="url(#bw-study-sh)" opacity="0.7"/>
  <rect x="236" y="414" width="440" height="24" rx="3" fill="url(#bw-study-desk)"/>
  <rect x="236" y="414" width="440" height="4" rx="2" fill="#7d6446" opacity="0.7"/>
  <rect x="236" y="434" width="440" height="8" fill="#2b2118"/>
  <rect x="236" y="440" width="440" height="4" fill="#0a0704" opacity="0.7"/>
  <!-- the sheen the lamp lays along the polished top -->
  <rect x="252" y="416" width="200" height="7" fill="#c9a86a" opacity="0.16"/>
  <rect x="252" y="416" width="120" height="4" fill="#e8cd96" opacity="0.14"/>
  <rect x="258" y="442" width="396" height="134" fill="#2a2118"/>
  <g fill="none" stroke="#3b2f22" stroke-width="2.5">
    <rect x="272" y="452" width="112" height="36"/><rect x="272" y="494" width="112" height="36"/><rect x="272" y="536" width="112" height="34"/>
    <rect x="528" y="452" width="112" height="36"/><rect x="528" y="494" width="112" height="36"/><rect x="528" y="536" width="112" height="34"/>
  </g>
  <g fill="none" stroke="#5c4829" stroke-width="1.2" opacity="0.55">
    <path d="M272 488 L272 452 L384 452"/><path d="M272 530 L272 494 L384 494"/><path d="M272 570 L272 536 L384 536"/>
    <path d="M528 488 L528 452 L640 452"/><path d="M528 530 L528 494 L640 494"/><path d="M528 570 L528 536 L640 536"/>
  </g>
  <g fill="none" stroke="#080503" stroke-width="1.8" opacity="0.75">
    <path d="M272 488 L384 488 L384 452"/><path d="M272 530 L384 530 L384 494"/><path d="M272 570 L384 570 L384 536"/>
    <path d="M528 488 L640 488 L640 452"/><path d="M528 530 L640 530 L640 494"/><path d="M528 570 L640 570 L640 536"/>
  </g>
  <g fill="url(#bw-study-brass)">
    <ellipse cx="328" cy="470" rx="12" ry="4"/><ellipse cx="328" cy="512" rx="12" ry="4"/><ellipse cx="328" cy="553" rx="12" ry="4"/>
    <ellipse cx="584" cy="470" rx="12" ry="4"/><ellipse cx="584" cy="512" rx="12" ry="4"/><ellipse cx="584" cy="553" rx="12" ry="4"/>
  </g>
  <g fill="#000" opacity="0.3">
    <ellipse cx="328" cy="475" rx="12" ry="3"/><ellipse cx="328" cy="517" rx="12" ry="3"/><ellipse cx="328" cy="558" rx="12" ry="3"/>
    <ellipse cx="584" cy="475" rx="12" ry="3"/><ellipse cx="584" cy="517" rx="12" ry="3"/><ellipse cx="584" cy="558" rx="12" ry="3"/>
  </g>
  <rect x="396" y="490" width="120" height="86" fill="#14110d"/>
  <rect x="396" y="450" width="120" height="38" fill="#33271a" stroke="#4f3d28" stroke-width="2.5"/>
  <rect x="398" y="452" width="116" height="4" fill="#5f4a2d" opacity="0.6"/>
  <rect x="398" y="482" width="116" height="4" fill="#0b0704" opacity="0.7"/>
  <ellipse cx="456" cy="469" rx="9" ry="11" fill="url(#bw-study-brass)"/>
  <ellipse cx="456" cy="469" rx="9" ry="11" fill="none" stroke="#e6c887" stroke-width="0.9" opacity="0.5"/>
  <circle cx="456" cy="466" r="3.2" fill="#14110d"/>
  <path d="M454 468 l4 0 l1 8 l-6 0 z" fill="#14110d"/>
  <rect x="258" y="576" width="396" height="12" fill="#1b140d"/>
  <rect x="258" y="576" width="396" height="3" fill="#4a3a25" opacity="0.6"/>
  <!-- green-shaded desk lamp: the only warm thing in the room -->
  <ellipse cx="312" cy="418" rx="46" ry="9" fill="#000" opacity="0.35"/>
  <ellipse cx="312" cy="412" rx="30" ry="8" fill="url(#bw-study-brass)"/>
  <rect x="307" y="364" width="9" height="48" fill="url(#bw-study-brass)"/>
  <rect x="307" y="364" width="3" height="48" fill="#e2c07a" opacity="0.45"/>
  <path d="M270 352 q42 -24 84 0 l0 16 q-42 12 -84 0 z" fill="url(#bw-study-shade)"/>
  <path d="M270 352 q42 -24 84 0 l0 5 q-42 -20 -84 0 z" fill="#7d8a62"/>
  <path d="M272 351 q40 -22 80 0" fill="none" stroke="#a8b585" stroke-width="1.6" opacity="0.5"/>
  <path d="M276 366 q36 10 72 0 l0 2 q-36 12 -72 0 z" fill="#ffd08a" opacity="0.5"/>
  <g opacity="0.6"><ellipse cx="312" cy="370" rx="38" ry="10" fill="#ffd98a" class="fx-glow" style="--d:1.7s"/></g>
  <g opacity="0.16"><ellipse cx="312" cy="414" rx="76" ry="14" fill="#ffd98a" class="fx-glow" style="--d:2.5s"/></g>
  <!-- open ledger, blotter, ink; each casting away from the lamp -->
  <ellipse cx="470" cy="432" rx="90" ry="8" fill="#000" opacity="0.3"/>
  <path d="M370 414 q40 -14 74 0 q34 -14 74 0 l0 12 q-40 -12 -74 2 q-34 -14 -74 -2 z" fill="#f0e7ce"/>
  <path d="M370 414 q40 -14 74 0 l0 3 q-34 -12 -74 2 z" fill="#fffaea" opacity="0.7"/>
  <path d="M470 415 q26 -8 48 -1 l0 11 q-24 -8 -48 3 z" fill="#d8ceb2" opacity="0.7"/>
  <path d="M444 414 l0 14" stroke="#9a8a63" stroke-width="2"/>
  <g stroke="#8d7c62" stroke-width="1.4" opacity="0.85">
    <line x1="384" y1="418" x2="432" y2="414"/><line x1="386" y1="422" x2="434" y2="418"/>
    <line x1="456" y1="414" x2="504" y2="418"/><line x1="456" y1="418" x2="500" y2="422"/>
  </g>
  <rect x="536" y="404" width="70" height="12" fill="#5d1f18" opacity="0.85"/>
  <rect x="540" y="398" width="62" height="8" fill="#3a2418"/>
  <path d="M606 412 l14 6 l-70 0 l-14 -6 z" fill="#000" opacity="0.3"/>
  <rect x="618" y="396" width="24" height="20" fill="#1b2436"/>
  <rect x="618" y="396" width="6" height="20" fill="#2e3d52" opacity="0.7"/>
  <ellipse cx="630" cy="396" rx="12" ry="4" fill="#2f3a4e"/>
  <ellipse cx="642" cy="418" rx="20" ry="4" fill="#000" opacity="0.3"/>
  <line x1="634" y1="396" x2="656" y2="368" stroke="#cbb98f" stroke-width="3" stroke-linecap="round"/>
  <g fill="#e3d5ac">
    <path d="M486 406 l52 -4 l2 10 l-52 4 z"/><path d="M492 398 l52 -4 l2 8 l-52 4 z"/>
  </g>
</g>

<!-- foreground: the back of the other leather chair, nearest and highest in contrast -->
<path d="M-10 620 L214 620 L206 526 q-102 -34 -216 -6 Z" fill="#1b140d"/>
<path d="M-10 620 L60 620 L58 532 q-36 -6 -68 6 Z" fill="#2a2015" opacity="0.7"/>
<path d="M-10 534 q108 -26 210 0" fill="none" stroke="#3b2f22" stroke-width="5"/>
<path d="M-10 531 q108 -26 210 0" fill="none" stroke="#61492e" stroke-width="1.6" opacity="0.6"/>
<g fill="#2b1f14">
  <circle cx="46" cy="556" r="4"/><circle cx="98" cy="548" r="4"/><circle cx="150" cy="552" r="4"/>
</g>

<rect width="1000" height="620" fill="url(#bw-study-vig)"/>
`,
  },

  cellar: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_vault: { x: 17, y: 62 },
      h_ledger: { x: 66, y: 68 },
      h_bench: { x: 87, y: 71 },
      h_cage: { x: 37, y: 45 },
    },
    svg: `
<defs>
  <linearGradient id="bw-cellar-stone" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2b2620"/><stop offset="1" stop-color="#14110d"/>
  </linearGradient>
  <radialGradient id="bw-cellar-punt" cx="0.62" cy="0.34" r="0.72">
    <stop offset="0" stop-color="#6b6047"/><stop offset="0.45" stop-color="#3a3025"/><stop offset="1" stop-color="#171309"/>
  </radialGradient>
  <radialGradient id="bw-cellar-punt2" cx="0.6" cy="0.34" r="0.72">
    <stop offset="0" stop-color="#5c5340"/><stop offset="0.45" stop-color="#332c22"/><stop offset="1" stop-color="#14110b"/>
  </radialGradient>
  <linearGradient id="bw-cellar-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a251e"/><stop offset="1" stop-color="#141109"/>
  </linearGradient>
  <linearGradient id="bw-cellar-bench" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a563c"/><stop offset="1" stop-color="#3a2e1f"/>
  </linearGradient>
  <linearGradient id="bw-cellar-bottle" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#44523a"/><stop offset="0.4" stop-color="#2f3a28"/><stop offset="1" stop-color="#141a10"/>
  </linearGradient>
  <linearGradient id="bw-cellar-damp" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6e7d8c" stop-opacity="0.15"/><stop offset="1" stop-color="#6e7d8c" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="bw-cellar-sh" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.62"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bw-cellar-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3b2f22"/><stop offset="1" stop-color="#241b12"/>
  </linearGradient>
  <radialGradient id="bw-cellar-glow" cx="0.74" cy="0.34" r="0.66">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-cellar-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-cellar-deep" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bw-cellar-iron" x1="0" y1="0" x2="1" y2="0.4">
    <stop offset="0" stop-color="#221f1a"/><stop offset="0.6" stop-color="#453f35"/><stop offset="1" stop-color="#6a6252"/>
  </linearGradient>
  <radialGradient id="bw-cellar-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.78"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#bw-cellar-stone)"/>

<!-- barrel vault receding -->
<path d="M0 342 Q500 14 1000 342 L1000 0 L0 0 Z" fill="#221d17"/>
<g fill="none" stroke-linecap="round">
  <path d="M36 344 Q500 18 964 344" stroke="#191410" stroke-width="26"/>
  <path d="M112 328 Q500 66 888 328" stroke="#2a241c" stroke-width="20"/>
  <path d="M180 314 Q500 108 820 314" stroke="#1d1813" stroke-width="16"/>
  <path d="M240 302 Q500 146 760 302" stroke="#2a241c" stroke-width="13"/>
  <path d="M292 292 Q500 180 708 292" stroke="#1d1813" stroke-width="10"/>
</g>
<g fill="none" stroke="#4b4335" stroke-width="2.5" opacity="0.4" stroke-linecap="round">
  <path d="M500 24 Q 740 96 962 340"/><path d="M500 70 Q 720 142 886 326"/><path d="M500 112 Q 700 182 818 312"/>
</g>
<g fill="none" stroke="#0d0b08" stroke-width="4" opacity="0.5" stroke-linecap="round">
  <path d="M42 348 Q 280 118 498 30"/><path d="M118 332 Q 320 158 498 74"/>
</g>
<rect x="0" y="0" width="420" height="470" fill="url(#bw-cellar-damp)"/>
<g stroke="#191410" stroke-width="3" opacity="0.7">
  <line x1="74" y1="336" x2="150" y2="322"/><line x1="146" y1="234" x2="212" y2="238"/>
  <line x1="300" y1="120" x2="336" y2="152"/><line x1="500" y1="80" x2="500" y2="124"/>
  <line x1="700" y1="120" x2="664" y2="152"/><line x1="854" y1="234" x2="788" y2="238"/>
  <line x1="926" y1="336" x2="850" y2="322"/>
</g>

<!-- the far end of the cellar, one lamp burning somewhere out of sight -->
<path d="M418 302 q82 -118 164 0 l0 168 l-164 0 z" fill="#100d0a"/>
<rect x="380" y="180" width="240" height="300" fill="url(#bw-cellar-deep)" class="fx-glow" style="--d:2.7s"/>
<g fill="none" stroke="#2a241c" stroke-width="4" opacity="0.7">
  <path d="M446 300 q54 -78 108 0"/><path d="M468 300 q32 -46 64 0"/>
</g>

<!-- stone courses on the lower walls -->
<g stroke="#241f18" stroke-width="2" opacity="0.85">
  <line x1="0" y1="336" x2="420" y2="322"/><line x1="0" y1="372" x2="418" y2="364"/>
  <line x1="0" y1="410" x2="418" y2="406"/><line x1="0" y1="446" x2="418" y2="446"/>
  <line x1="580" y1="322" x2="1000" y2="336"/><line x1="582" y1="364" x2="1000" y2="372"/>
  <line x1="582" y1="406" x2="1000" y2="410"/><line x1="582" y1="446" x2="1000" y2="446"/>
  <line x1="60" y1="322" x2="62" y2="372"/><line x1="180" y1="326" x2="182" y2="372"/>
  <line x1="300" y1="330" x2="302" y2="372"/><line x1="120" y1="372" x2="122" y2="410"/>
  <line x1="240" y1="372" x2="242" y2="410"/><line x1="360" y1="372" x2="362" y2="410"/>
  <line x1="700" y1="326" x2="698" y2="372"/><line x1="820" y1="330" x2="818" y2="372"/>
  <line x1="940" y1="334" x2="938" y2="372"/><line x1="760" y1="372" x2="758" y2="410"/>
  <line x1="880" y1="372" x2="878" y2="410"/>
</g>
<g stroke="#42392c" stroke-width="1.2" opacity="0.45">
  <line x1="582" y1="324" x2="1000" y2="338"/><line x1="584" y1="366" x2="1000" y2="374"/>
  <line x1="584" y1="408" x2="1000" y2="412"/><line x1="0" y1="374" x2="418" y2="366"/>
  <line x1="0" y1="412" x2="418" y2="408"/>
</g>
<g fill="#3e463f" opacity="0.13">
  <path d="M640 340 q30 22 22 60 q-26 -26 -22 -60 z"/>
  <path d="M120 400 q26 26 16 62 q-24 -30 -16 -62 z"/>
  <path d="M900 388 q22 20 16 48 q-20 -22 -16 -48 z"/>
</g>

<!-- flagstone floor -->
<rect x="0" y="470" width="1000" height="150" fill="url(#bw-cellar-floor)"/>
<rect x="0" y="470" width="360" height="150" fill="url(#bw-cellar-damp)" opacity="0.7"/>
<g stroke="#2c261d" stroke-width="2">
  <line x1="500" y1="470" x2="-140" y2="620"/><line x1="500" y1="470" x2="130" y2="620"/>
  <line x1="500" y1="470" x2="340" y2="620"/><line x1="500" y1="470" x2="660" y2="620"/>
  <line x1="500" y1="470" x2="870" y2="620"/><line x1="500" y1="470" x2="1140" y2="620"/>
  <line x1="0" y1="502" x2="1000" y2="502"/><line x1="0" y1="544" x2="1000" y2="544"/>
  <line x1="0" y1="594" x2="1000" y2="594"/>
</g>
<g stroke="#453d30" stroke-width="1.1" opacity="0.4">
  <line x1="0" y1="505" x2="1000" y2="505"/><line x1="0" y1="547" x2="1000" y2="547"/><line x1="0" y1="597" x2="1000" y2="597"/>
</g>
<g fill="#0a0806" opacity="0.45">
  <path d="M0 502 L1000 502 L1000 508 L0 508 Z"/><path d="M0 544 L1000 544 L1000 551 L0 551 Z"/>
</g>
<!-- the lamp lies along the damp flags -->
<g opacity="0.16" fill="#e8bd6c">
  <path d="M700 474 L640 620 L960 620 L900 474 Z"/>
</g>
<g opacity="0.1" fill="#f2d79a">
  <ellipse cx="800" cy="560" rx="150" ry="34"/><ellipse cx="770" cy="600" rx="110" ry="18"/>
</g>

<!-- ten thousand sleeping bottles: rack, left, receding -->
<g>
  <rect x="296" y="248" width="148" height="222" fill="#1b1712"/>
  <g fill="#3b2f22">
    <rect x="296" y="248" width="8" height="222"/><rect x="368" y="252" width="7" height="218"/><rect x="436" y="256" width="8" height="214"/>
    <rect x="298" y="248" width="146" height="7"/><rect x="298" y="302" width="146" height="7"/>
    <rect x="298" y="356" width="146" height="7"/><rect x="298" y="410" width="146" height="7"/>
    <rect x="298" y="462" width="146" height="8"/>
  </g>
  <g fill="#584734" opacity="0.55">
    <rect x="298" y="302" width="146" height="2"/><rect x="298" y="356" width="146" height="2"/>
    <rect x="298" y="410" width="146" height="2"/>
  </g>
  <g fill="#000" opacity="0.4">
    <rect x="298" y="309" width="146" height="8"/><rect x="298" y="363" width="146" height="8"/>
    <rect x="298" y="417" width="146" height="8"/>
  </g>
  <g fill="url(#bw-cellar-punt2)">
    <circle cx="314" cy="272" r="7"/><circle cx="330" cy="272" r="7"/><circle cx="346" cy="272" r="7"/><circle cx="362" cy="272" r="7"/>
    <circle cx="384" cy="274" r="6.5"/><circle cx="399" cy="274" r="6.5"/><circle cx="414" cy="274" r="6.5"/><circle cx="429" cy="274" r="6.5"/>
    <circle cx="314" cy="326" r="7"/><circle cx="330" cy="326" r="7"/><circle cx="346" cy="326" r="7"/><circle cx="362" cy="326" r="7"/>
    <circle cx="384" cy="328" r="6.5"/><circle cx="399" cy="328" r="6.5"/><circle cx="414" cy="328" r="6.5"/><circle cx="429" cy="328" r="6.5"/>
    <circle cx="314" cy="380" r="7"/><circle cx="330" cy="380" r="7"/><circle cx="346" cy="380" r="7"/><circle cx="362" cy="380" r="7"/>
    <circle cx="384" cy="382" r="6.5"/><circle cx="399" cy="382" r="6.5"/><circle cx="414" cy="382" r="6.5"/><circle cx="429" cy="382" r="6.5"/>
    <circle cx="314" cy="434" r="7"/><circle cx="330" cy="434" r="7"/><circle cx="346" cy="434" r="7"/><circle cx="362" cy="434" r="7"/>
    <circle cx="384" cy="436" r="6.5"/><circle cx="399" cy="436" r="6.5"/><circle cx="414" cy="436" r="6.5"/><circle cx="429" cy="436" r="6.5"/>
  </g>
  <g fill="#6b5a45" opacity="0.5">
    <circle cx="312" cy="270" r="2.5"/><circle cx="344" cy="270" r="2.5"/><circle cx="397" cy="326" r="2.5"/>
    <circle cx="328" cy="378" r="2.5"/><circle cx="412" cy="380" r="2.5"/><circle cx="344" cy="432" r="2.5"/>
  </g>
</g>

<!-- the master's private bin: an iron lattice door, padlocked across the hasp -->
<g>
  <rect x="296" y="248" width="148" height="222" fill="#0a0906" opacity="0.34"/>
  <g fill="url(#bw-cellar-iron)">
    <rect x="288" y="240" width="164" height="10"/><rect x="288" y="466" width="164" height="10"/>
    <rect x="288" y="240" width="10" height="236"/><rect x="442" y="240" width="10" height="236"/>
  </g>
  <path d="M308 252 L308 464 M326 252 L326 464 M344 252 L344 464 M362 252 L362 464 M380 252 L380 464 M398 252 L398 464 M416 252 L416 464 M434 252 L434 464" fill="none" stroke="#2b2822" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M300 300 L440 300 M300 356 L440 356 M300 412 L440 412" fill="none" stroke="#2b2822" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M310 252 L310 464 M346 252 L346 464 M400 252 L400 464 M302 302 L442 302" fill="none" stroke="#8b8272" stroke-width="0.9" opacity="0.4"/>
  <rect x="300" y="252" width="140" height="212" fill="none" stroke="#3d382f" stroke-width="5"/>
  <g fill="#4b463c">
    <rect x="292" y="292" width="18" height="13" rx="3"/><rect x="292" y="410" width="18" height="13" rx="3"/>
  </g>
  <rect x="430" y="342" width="26" height="14" rx="3" fill="#57503f"/>
  <path d="M440 346 l14 0" fill="none" stroke="#211e18" stroke-width="3"/>
  <path d="M446 358 q0 -12 8 -12 q8 0 8 12" fill="none" stroke="#9a9180" stroke-width="4.5"/>
  <rect x="440" y="356" width="28" height="24" rx="5" fill="#6d6455"/>
  <rect x="442" y="358" width="24" height="7" rx="3" fill="#b3a892" opacity="0.55"/>
  <circle cx="454" cy="369" r="3.4" fill="#161310"/>
  <ellipse cx="370" cy="474" rx="88" ry="8" fill="#000" opacity="0.42"/>
</g>

<!-- rack wall, right, above the bench -->
<g>
  <rect x="612" y="212" width="376" height="238" fill="#1b1712"/>
  <g fill="#3b2f22">
    <rect x="612" y="212" width="8" height="238"/><rect x="704" y="212" width="8" height="238"/>
    <rect x="796" y="212" width="8" height="238"/><rect x="888" y="212" width="8" height="238"/><rect x="980" y="212" width="8" height="238"/>
    <rect x="612" y="212" width="376" height="8"/><rect x="612" y="270" width="376" height="8"/>
    <rect x="612" y="328" width="376" height="8"/><rect x="612" y="386" width="376" height="8"/><rect x="612" y="442" width="376" height="8"/>
  </g>
  <g fill="#6b5844" opacity="0.6">
    <rect x="612" y="270" width="376" height="2"/><rect x="612" y="328" width="376" height="2"/>
    <rect x="612" y="386" width="376" height="2"/>
  </g>
  <g fill="#000" opacity="0.42">
    <rect x="612" y="278" width="376" height="9"/><rect x="612" y="336" width="376" height="9"/>
    <rect x="612" y="394" width="376" height="9"/>
  </g>
  <g fill="url(#bw-cellar-punt)">
    <circle cx="632" cy="240" r="8"/><circle cx="652" cy="240" r="8"/><circle cx="672" cy="240" r="8"/><circle cx="692" cy="240" r="8"/>
    <circle cx="724" cy="240" r="8"/><circle cx="744" cy="240" r="8"/><circle cx="764" cy="240" r="8"/><circle cx="784" cy="240" r="8"/>
    <circle cx="816" cy="240" r="8"/><circle cx="836" cy="240" r="8"/><circle cx="856" cy="240" r="8"/><circle cx="876" cy="240" r="8"/>
    <circle cx="908" cy="240" r="8"/><circle cx="928" cy="240" r="8"/><circle cx="948" cy="240" r="8"/><circle cx="968" cy="240" r="8"/>
    <circle cx="632" cy="298" r="8"/><circle cx="652" cy="298" r="8"/><circle cx="672" cy="298" r="8"/><circle cx="692" cy="298" r="8"/>
    <circle cx="724" cy="298" r="8"/><circle cx="744" cy="298" r="8"/><circle cx="764" cy="298" r="8"/><circle cx="784" cy="298" r="8"/>
    <circle cx="816" cy="298" r="8"/><circle cx="836" cy="298" r="8"/><circle cx="856" cy="298" r="8"/><circle cx="876" cy="298" r="8"/>
    <circle cx="908" cy="298" r="8"/><circle cx="928" cy="298" r="8"/><circle cx="948" cy="298" r="8"/><circle cx="968" cy="298" r="8"/>
    <circle cx="632" cy="356" r="8"/><circle cx="652" cy="356" r="8"/><circle cx="672" cy="356" r="8"/><circle cx="692" cy="356" r="8"/>
    <circle cx="724" cy="356" r="8"/><circle cx="744" cy="356" r="8"/><circle cx="764" cy="356" r="8"/><circle cx="784" cy="356" r="8"/>
    <circle cx="816" cy="356" r="8"/><circle cx="836" cy="356" r="8"/><circle cx="856" cy="356" r="8"/><circle cx="876" cy="356" r="8"/>
    <circle cx="908" cy="356" r="8"/><circle cx="928" cy="356" r="8"/><circle cx="948" cy="356" r="8"/><circle cx="968" cy="356" r="8"/>
    <circle cx="632" cy="414" r="8"/><circle cx="652" cy="414" r="8"/><circle cx="672" cy="414" r="8"/><circle cx="692" cy="414" r="8"/>
    <circle cx="724" cy="414" r="8"/><circle cx="744" cy="414" r="8"/><circle cx="764" cy="414" r="8"/><circle cx="784" cy="414" r="8"/>
    <circle cx="816" cy="414" r="8"/><circle cx="836" cy="414" r="8"/><circle cx="856" cy="414" r="8"/><circle cx="876" cy="414" r="8"/>
    <circle cx="908" cy="414" r="8"/><circle cx="928" cy="414" r="8"/><circle cx="948" cy="414" r="8"/><circle cx="968" cy="414" r="8"/>
  </g>
  <g fill="#9b7a3f" opacity="0.45">
    <circle cx="629" cy="237" r="3"/><circle cx="741" cy="237" r="3"/><circle cx="853" cy="237" r="3"/><circle cx="945" cy="237" r="3"/>
    <circle cx="669" cy="295" r="3"/><circle cx="781" cy="295" r="3"/><circle cx="925" cy="295" r="3"/>
    <circle cx="649" cy="353" r="3"/><circle cx="833" cy="353" r="3"/><circle cx="965" cy="353" r="3"/>
    <circle cx="689" cy="411" r="3"/><circle cx="873" cy="411" r="3"/>
  </g>
</g>

<!-- cobwebs in the corners nothing has touched in years -->
<g fill="none" stroke="#8f8b7c" stroke-width="0.8" opacity="0.13">
  <path d="M0 22 L62 0"/><path d="M0 48 L62 0"/><path d="M0 74 L62 0"/><path d="M0 100 L62 0"/>
  <path d="M6 92 Q 30 58 50 8"/><path d="M16 84 Q 38 54 56 16"/>
  <path d="M1000 26 L942 0"/><path d="M1000 56 L942 0"/><path d="M1000 86 L942 0"/>
  <path d="M994 78 Q 970 46 954 10"/>
</g>
<g fill="none" stroke="#8f8b7c" stroke-width="0.8" opacity="0.16">
  <path d="M296 248 L344 288"/><path d="M344 248 L296 288"/><path d="M300 268 Q 320 258 340 268"/>
</g>
<rect width="1000" height="620" fill="url(#bw-cellar-glow)"/>
<g fill="#f0d9a5" opacity="0.26">
  <circle cx="700" cy="252" r="1.5"/><circle cx="812" cy="300" r="1.3"/><circle cx="742" cy="344" r="1.7"/>
  <circle cx="880" cy="266" r="1.2"/><circle cx="664" cy="380" r="1.4"/><circle cx="836" cy="410" r="1.5"/>
  <circle cx="770" cy="222" r="1.2"/><circle cx="906" cy="352" r="1.3"/>
</g>

<!-- the 1898 Reserve bin: a stone niche, five bottles, thirty years of dust -->
<g>
  <path d="M36 474 l0 -112 q112 -84 224 0 l0 112 z" fill="#2a241c"/>
  <path d="M52 474 l0 -104 q96 -72 192 0 l0 104 z" fill="#0f0d0a"/>
  <path d="M36 474 l0 -112 q112 -84 224 0 l0 112" fill="none" stroke="#3b2f22" stroke-width="9"/>
  <path d="M30 362 q118 -90 236 0" fill="none" stroke="#453d30" stroke-width="14" opacity="0.75"/>
  <g stroke="#211c15" stroke-width="2.2" opacity="0.8">
    <line x1="48" y1="366" x2="42" y2="352"/><line x1="86" y1="336" x2="80" y2="322"/>
    <line x1="130" y1="320" x2="128" y2="304"/><line x1="176" y1="322" x2="180" y2="306"/>
    <line x1="220" y1="340" x2="226" y2="326"/><line x1="252" y1="368" x2="260" y2="356"/>
  </g>
  <path d="M52 474 l0 -104 q96 -72 192 0 l0 20 q-96 -66 -192 0 z" fill="#000" opacity="0.45"/>
  <rect x="30" y="466" width="238" height="12" fill="#3b2f22"/>
  <!-- iron grille, swung open -->
  <g stroke="#2f2921" stroke-width="5">
    <line x1="34" y1="368" x2="34" y2="470"/><line x1="22" y1="376" x2="22" y2="470"/>
    <line x1="10" y1="386" x2="10" y2="470"/>
    <line x1="6" y1="400" x2="38" y2="396"/><line x1="6" y1="440" x2="38" y2="438"/>
  </g>
  <!-- shelf boards -->
  <g fill="#3b2f22">
    <rect x="56" y="404" width="184" height="7"/><rect x="56" y="452" width="184" height="7"/>
  </g>
  <!-- five bottles on their sides -->
  <g>
    <g fill="url(#bw-cellar-bottle)">
      <rect x="68" y="376" width="118" height="26" rx="8"/><rect x="186" y="382" width="34" height="14" rx="5"/><rect x="218" y="382" width="10" height="14" rx="3"/>
      <rect x="68" y="424" width="118" height="26" rx="8"/><rect x="186" y="430" width="34" height="14" rx="5"/><rect x="218" y="430" width="10" height="14" rx="3"/>
    </g>
    <g fill="url(#bw-cellar-bottle)">
      <rect x="64" y="348" width="112" height="24" rx="8"/><rect x="176" y="353" width="32" height="13" rx="5"/><rect x="206" y="353" width="9" height="13" rx="3"/>
    </g>
    <g fill="url(#bw-cellar-bottle)">
      <rect x="66" y="402" width="60" height="0.5"/>
    </g>
    <!-- two more, ends toward you, deeper in the bin -->
    <circle cx="212" cy="418" r="13" fill="#2a3324"/><circle cx="212" cy="418" r="5" fill="#6b5a45"/>
    <circle cx="212" cy="358" r="12" fill="#2a3324"/><circle cx="212" cy="358" r="4.5" fill="#6b5a45"/>
  </g>
  <!-- three labels feel NEW: fresh glue, wrong dust -->
  <g>
    <rect x="86" y="380" width="40" height="18" rx="2" fill="#e3d5ac"/>
    <rect x="86" y="428" width="40" height="18" rx="2" fill="#e3d5ac"/>
    <rect x="84" y="352" width="38" height="16" rx="2" fill="#6b5a45" opacity="0.9"/>
    <g stroke="#8d7c62" stroke-width="1.4">
      <line x1="92" y1="386" x2="120" y2="386"/><line x1="92" y1="391" x2="114" y2="391"/>
      <line x1="92" y1="434" x2="120" y2="434"/><line x1="92" y1="439" x2="114" y2="439"/>
    </g>
    <rect x="100" y="376" width="12" height="26" fill="#a8352a" opacity="0.55"/>
    <rect x="100" y="424" width="12" height="26" fill="#a8352a" opacity="0.55"/>
  </g>
  <!-- dust, lying wrong -->
  <g fill="#7f8a74" opacity="0.28">
    <path d="M68 378 l118 0 l0 3 l-118 0 z"/><path d="M68 426 l118 0 l0 3 l-118 0 z"/>
  </g>
  <g fill="#000" opacity="0.4">
    <path d="M68 396 l118 0 l0 6 l-118 0 z"/><path d="M68 444 l118 0 l0 6 l-118 0 z"/>
    <path d="M64 366 l112 0 l0 6 l-112 0 z"/>
  </g>
  <g fill="#6b6558" opacity="0.35">
    <path d="M64 348 l112 0 l0 6 l-112 0 z"/><path d="M56 404 l184 0 l0 5 l-184 0 z"/>
  </g>
  <g stroke="#6b6558" stroke-width="1" opacity="0.3" fill="none">
    <path d="M52 366 q26 12 8 34"/><path d="M52 366 q16 22 -2 32"/><path d="M52 366 l14 30"/>
  </g>
</g>

<!-- Celeste Moreau, polishing a glass that is already clean -->
<g>
  <ellipse cx="496" cy="600" rx="110" ry="22" fill="url(#bw-cellar-sh)"/>
  <path d="M436 620 q-6 -128 60 -136 q66 8 60 136 z" fill="#1a1610"/>
  <path d="M528 620 q10 -120 -32 -136 q54 4 60 136 z" fill="#241d14" opacity="0.55"/>
  <path d="M452 470 q-4 -96 44 -102 q48 6 44 102 z" fill="#241b12"/>
  <path d="M470 348 q26 -26 52 0 l10 122 l-72 0 z" fill="#20191a"/>
  <path d="M478 352 l36 0 l6 118 l-48 0 z" fill="#e3d5ac"/>
  <path d="M478 352 l36 0 l2 16 l-40 0 z" fill="#f0e7ce"/>
  <path d="M506 352 l8 0 l6 118 l-9 0 z" fill="#fbf5e2" opacity="0.55"/>
  <path d="M478 352 l7 0 l-3 118 l-4 0 z" fill="#a89b7b" opacity="0.5"/>
  <path d="M484 340 l24 0 l4 14 l-32 0 z" fill="#cbb98f"/>
  <ellipse cx="496" cy="308" rx="22" ry="26" fill="#a3907a"/>
  <ellipse cx="502" cy="304" rx="17" ry="21" fill="#bfad8f"/>
  <path d="M474 306 q22 -28 44 0 q4 -28 -22 -28 q-26 0 -22 28 z" fill="#241b12"/>
  <circle cx="521" cy="308" r="12" fill="#241b12"/>
  <g stroke="#4a3f31" stroke-width="2.1" stroke-linecap="round">
    <line x1="481" y1="306" x2="491" y2="306"/><line x1="501" y1="306" x2="511" y2="306"/>
  </g>
  <line x1="496" y1="312" x2="494" y2="320" stroke="#8d7c62" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="488" y1="328" x2="504" y2="328" stroke="#6b5a45" stroke-width="2.2" stroke-linecap="round"/>
  <!-- arms raised to the glass -->
  <path d="M470 366 q-24 30 -14 62 l14 -4 q-8 -28 12 -50 z" fill="#20191a"/>
  <path d="M522 366 q24 26 18 56 l-14 -2 q4 -26 -14 -46 z" fill="#20191a"/>
  <ellipse cx="462" cy="432" rx="13" ry="9" fill="#b3a184"/>
  <ellipse cx="528" cy="424" rx="12" ry="9" fill="#b3a184"/>
  <path d="M446 420 q26 -14 44 6 q-20 24 -46 12 z" fill="#f0e7ce"/>
  <g>
    <path d="M472 384 l30 0 l-6 22 q-8 10 -8 18 l0 8 l-4 0 l0 -8 q0 -8 -8 -18 z" fill="#efe8d2" opacity="0.9"/>
    <ellipse cx="487" cy="434" rx="12" ry="3.5" fill="#efe8d2" opacity="0.85"/>
    <line x1="478" y1="390" x2="474" y2="406" stroke="#ffffff" stroke-width="2.5" opacity="0.5"/>
  </g>
</g>

<!-- the single lamp over the decanting bench -->
<g class="fx-sway" style="--d:.9s;transform-origin:50% 0">
  <line x1="762" y1="0" x2="762" y2="122" stroke="#2f2921" stroke-width="3"/>
  <path d="M716 156 l92 0 l-30 -34 l-32 0 z" fill="#3b2f22"/>
  <path d="M716 156 l92 0 l-6 6 l-80 0 z" fill="#241b12"/>
  <ellipse cx="762" cy="166" rx="10" ry="13" fill="#ffd98a" class="fx-glow" style="--d:.15s"/>
  <ellipse cx="762" cy="164" rx="4" ry="6" fill="#fff6e0" class="fx-glow" style="--d:1.8s"/>
</g>
<g opacity="0.11"><path d="M726 168 L540 620 L992 620 L798 168 Z" fill="#d9a441" class="fx-glow" style="--d:.15s"/></g>
<g opacity="0.62"><rect x="562" y="140" width="400" height="380" fill="url(#bw-cellar-lamp)" class="fx-glow" style="--d:2.2s"/></g>

<!-- the decanting bench -->
<g>
  <ellipse cx="760" cy="600" rx="290" ry="34" fill="url(#bw-cellar-sh)" opacity="0.8"/>
  <rect x="508" y="448" width="492" height="18" fill="url(#bw-cellar-bench)"/>
  <rect x="508" y="448" width="492" height="6" fill="#6b5a45"/>
  <rect x="640" y="450" width="300" height="4" fill="#c7a469" opacity="0.2"/>
  <g stroke="#2f2519" stroke-width="1" opacity="0.4">
    <path d="M508 458 L1000 456"/><path d="M508 462 L1000 461"/>
  </g>
  <rect x="508" y="462" width="492" height="4" fill="#0a0805" opacity="0.55"/>
  <rect x="520" y="466" width="472" height="26" fill="#2f2519"/>
  <rect x="520" y="466" width="472" height="3" fill="#5a4a33" opacity="0.5"/>
  <g stroke="#4a3c2a" stroke-width="1" opacity="0.35">
    <path d="M560 472 q4 8 0 16"/><path d="M700 470 q-4 10 0 18"/><path d="M880 472 q5 8 0 16"/>
  </g>
  <rect x="534" y="492" width="18" height="106" fill="#241b12"/>
  <rect x="928" y="492" width="18" height="106" fill="#241b12"/>
  <rect x="534" y="546" width="412" height="10" fill="#2a2118"/>
  <g fill="#2a3324">
    <rect x="580" y="500" width="18" height="46" rx="5"/><rect x="606" y="500" width="18" height="46" rx="5"/>
    <rect x="632" y="500" width="18" height="46" rx="5"/><rect x="828" y="502" width="18" height="44" rx="5"/>
    <rect x="854" y="502" width="18" height="44" rx="5"/>
  </g>
  <g fill="#000" opacity="0.35">
    <ellipse cx="596" cy="546" rx="26" ry="5"/><ellipse cx="848" cy="546" rx="22" ry="5"/>
  </g>
  <g fill="#6b5a45">
    <rect x="583" y="494" width="12" height="8"/><rect x="609" y="494" width="12" height="8"/>
    <rect x="635" y="494" width="12" height="8"/><rect x="831" y="496" width="12" height="8"/><rect x="857" y="496" width="12" height="8"/>
  </g>
  <!-- the cellar ledger, open, one page razored and rewritten -->
  <g>
    <ellipse cx="684" cy="452" rx="96" ry="8" fill="#000" opacity="0.35"/>
    <path d="M600 448 q42 -22 84 -2 q42 -20 84 2 l-8 6 q-38 -18 -76 2 q-38 -20 -76 -2 z" fill="#cbb98f"/>
    <path d="M606 444 q40 -22 78 -2 q40 -20 78 2 l0 -30 q-38 -20 -78 0 q-38 -20 -78 0 z" fill="#f0e7ce"/>
    <path d="M690 442 q38 -20 72 2 l0 -30 q-34 -18 -72 0 z" fill="#fffaea" opacity="0.5"/>
    <path d="M606 444 q40 -22 78 -2 l0 -6 q-38 -18 -78 -2 z" fill="#d3c7a4" opacity="0.5"/>
    <path d="M684 412 l0 30" stroke="#9a8a63" stroke-width="2"/>
    <g stroke="#8d7c62" stroke-width="1.5">
      <line x1="616" y1="422" x2="674" y2="418"/><line x1="616" y1="428" x2="674" y2="424"/>
      <line x1="616" y1="434" x2="674" y2="430"/><line x1="694" y1="418" x2="752" y2="422"/>
      <line x1="694" y1="424" x2="752" y2="428"/>
    </g>
    <g stroke="#a8352a" stroke-width="1.8" opacity="0.9">
      <line x1="694" y1="430" x2="748" y2="434"/><line x1="694" y1="436" x2="740" y2="440"/>
    </g>
    <path d="M692 414 l60 4" stroke="#5d1f18" stroke-width="1.2" stroke-dasharray="5 4"/>
    <path d="M756 404 l14 -6 l4 8 l-14 6 z" fill="#8e8e88"/>
  </g>
  <!-- Celeste's service card -->
  <g transform="rotate(-6 862 434)">
    <rect x="826" y="416" width="86" height="42" rx="2" fill="#000" opacity="0.35"/>
    <rect x="822" y="410" width="86" height="42" rx="2" fill="#f0e7ce"/>
    <rect x="822" y="410" width="86" height="4" rx="2" fill="#fffaea" opacity="0.6"/>
    <rect x="822" y="410" width="86" height="7" fill="#cbb98f"/>
    <g stroke="#8d7c62" stroke-width="1.4">
      <line x1="830" y1="424" x2="892" y2="424"/><line x1="830" y1="430" x2="898" y2="430"/>
      <line x1="830" y1="436" x2="886" y2="436"/><line x1="830" y1="442" x2="894" y2="442"/>
    </g>
    <rect x="884" y="416" width="18" height="12" fill="#a8352a" opacity="0.8"/>
  </g>
  <!-- tools of the trade -->
  <g>
    <ellipse cx="778" cy="450" rx="20" ry="5" fill="#000" opacity="0.4"/>
    <path d="M780 448 q-10 -12 -10 -20 l0 -16 l22 0 l0 16 q0 8 -10 20 z" fill="#efe8d2" opacity="0.9"/>
    <path d="M788 414 q4 12 2 20 q-4 -10 -4 -20 z" fill="#ffffff" opacity="0.45"/>
    <ellipse cx="781" cy="412" rx="11" ry="4" fill="#efe8d2" opacity="0.9"/>
    <path d="M776 424 l12 0 l-2 12 l-8 0 z" fill="#5d1f18"/>
    <g fill="#9b7a3f">
      <rect x="932" y="424" width="8" height="24" rx="2"/><path d="M928 424 q8 -14 16 0 z"/>
      <line x1="936" y1="418" x2="936" y2="404" stroke="#9b7a3f" stroke-width="3"/>
    </g>
    <path d="M568 448 q22 -18 46 -4 q-16 12 -46 4 z" fill="#e3d5ac"/>
  </g>
</g>

<!-- foreground: barrels, and a crate of empty bottles -->
<g>
  <ellipse cx="70" cy="612" rx="120" ry="18" fill="url(#bw-cellar-sh)"/>
  <path d="M-20 620 l0 -92 q80 -26 156 0 l0 92 z" fill="#1b140d"/>
  <path d="M100 534 q22 4 36 -6 l0 92 l-36 0 z" fill="#2b2016" opacity="0.6"/>
  <g stroke="#0a0805" stroke-width="1.6" opacity="0.5">
    <path d="M14 530 L14 620"/><path d="M50 526 L50 620"/><path d="M86 526 L86 620"/><path d="M118 530 L118 620"/>
  </g>
  <g fill="none" stroke="#332a1e" stroke-width="6">
    <path d="M-20 552 q80 -22 156 0"/><path d="M-20 596 q80 -20 156 0"/>
  </g>
  <g fill="none" stroke="#5f5340" stroke-width="1.6" opacity="0.5">
    <path d="M-20 549 q80 -22 156 0"/><path d="M-20 593 q80 -20 156 0"/>
  </g>
  <path d="M-20 528 q80 -26 156 0 l-6 8 q-72 -22 -144 0 z" fill="#3b2f22"/>
  <circle cx="58" cy="574" r="12" fill="#2a2118"/><circle cx="58" cy="574" r="5" fill="#14110d"/>
</g>
<g>
  <ellipse cx="256" cy="616" rx="90" ry="12" fill="url(#bw-cellar-sh)"/>
  <rect x="196" y="546" width="120" height="74" fill="#241b12"/>
  <rect x="196" y="546" width="120" height="9" fill="#3b2f22"/>
  <rect x="196" y="546" width="120" height="2" fill="#5c4a33" opacity="0.6"/>
  <g stroke="#150f0a" stroke-width="1.6" opacity="0.6">
    <line x1="196" y1="584" x2="316" y2="584"/><line x1="236" y1="555" x2="236" y2="620"/><line x1="276" y1="555" x2="276" y2="620"/>
  </g>
  <g fill="url(#bw-cellar-punt2)">
    <circle cx="220" cy="572" r="10"/><circle cx="244" cy="572" r="10"/><circle cx="268" cy="572" r="10"/><circle cx="292" cy="572" r="10"/>
    <circle cx="232" cy="596" r="10"/><circle cx="256" cy="596" r="10"/><circle cx="280" cy="596" r="10"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#bw-cellar-vig)"/>
`,
  },

  conservatory: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_foxglove: { x: 22, y: 79 },
      h_settee: { x: 86, y: 75 },
    },
    svg: `
<defs>
  <linearGradient id="bw-cons-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b2436"/><stop offset="0.5" stop-color="#141c2a"/><stop offset="1" stop-color="#0b0f16"/>
  </linearGradient>
  <linearGradient id="bw-cons-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#282a21"/><stop offset="1" stop-color="#14150f"/>
  </linearGradient>
  <linearGradient id="bw-cons-soil" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#33291f"/><stop offset="1" stop-color="#1a150f"/>
  </linearGradient>
  <linearGradient id="bw-cons-terra" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3f2a1d"/><stop offset="0.4" stop-color="#7a5238"/><stop offset="1" stop-color="#39251a"/>
  </linearGradient>
  <linearGradient id="bw-cons-cush" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f2e8c8"/><stop offset="1" stop-color="#bda87e"/>
  </linearGradient>
  <linearGradient id="bw-cons-haze" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a99ac" stop-opacity="0"/><stop offset="1" stop-color="#8a99ac" stop-opacity="0.18"/>
  </linearGradient>
  <radialGradient id="bw-cons-sh" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.6"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bw-cons-iron" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2a2620"/><stop offset="1" stop-color="#16130f"/>
  </linearGradient>
  <linearGradient id="bw-cons-wicker" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a7040"/><stop offset="1" stop-color="#5a482c"/>
  </linearGradient>
  <radialGradient id="bw-cons-glow" cx="0.47" cy="0.36" r="0.68">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-cons-lamp" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-cons-moon" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#cbd6e4" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#cbd6e4" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-cons-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.42" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#bw-cons-night)"/>
<rect x="20" y="-60" width="320" height="320" fill="url(#bw-cons-moon)" class="fx-drift-slow" style="--d:1.8s"/>
<circle cx="180" cy="100" r="32" fill="#cbd6e4" opacity="0.2"/>
<circle cx="172" cy="94" r="27" fill="#0e1520" opacity="0.35"/>
<g fill="#cbd6e4" opacity="0.28">
  <circle cx="352" cy="76" r="1.8"/><circle cx="420" cy="128" r="1.4"/><circle cx="560" cy="60" r="1.6"/>
  <circle cx="676" cy="112" r="1.5"/><circle cx="748" cy="66" r="1.8"/><circle cx="880" cy="140" r="1.4"/>
  <circle cx="924" cy="82" r="1.6"/><circle cx="300" cy="164" r="1.3"/>
</g>
<!-- the valley, black beyond the glass -->
<path d="M0 356 q90 -46 176 -12 q84 -40 168 -4 q96 -50 190 -8 q104 -46 204 -6 q86 -34 262 -2 l0 120 l-1000 0 z" fill="#0d131c"/>
<path d="M0 386 q140 -30 260 4 q140 -34 268 2 q160 -32 300 6 q90 -22 172 -4 l0 88 l-1000 0 z" fill="#0a0e15"/>
<rect x="0" y="300" width="1000" height="170" fill="url(#bw-cons-haze)"/>
<g fill="#9aa8bc" opacity="0.055">
  <ellipse cx="200" cy="402" rx="260" ry="9"/><ellipse cx="640" cy="416" rx="300" ry="8"/><ellipse cx="900" cy="394" rx="200" ry="7"/>
</g>
<g fill="#cbd6e4" opacity="0.2">
  <circle cx="248" cy="52" r="1.2"/><circle cx="470" cy="42" r="1.4"/><circle cx="600" cy="140" r="1.1"/>
  <circle cx="820" cy="100" r="1.2"/><circle cx="960" cy="52" r="1.3"/><circle cx="120" cy="192" r="1.1"/>
  <circle cx="392" cy="168" r="1.2"/><circle cx="712" cy="176" r="1.1"/>
</g>

<!-- the glasshouse: vaulted ribs and glazing bars -->
<g fill="none">
  <path d="M6 250 Q500 6 994 250" stroke="#1e1a16" stroke-width="16"/>
  <path d="M96 240 Q500 58 904 240" stroke="#272220" stroke-width="12"/>
  <path d="M176 232 Q500 106 824 232" stroke="#1e1a16" stroke-width="9"/>
  <path d="M248 226 Q500 148 752 226" stroke="#272220" stroke-width="7"/>
</g>
<g stroke="#1e1a16" stroke-width="4" opacity="0.85">
  <line x1="50" y1="228" x2="130" y2="222"/><line x1="136" y1="176" x2="212" y2="184"/>
  <line x1="248" y1="120" x2="304" y2="146"/><line x1="380" y1="76" x2="410" y2="118"/>
  <line x1="500" y1="60" x2="500" y2="112"/><line x1="620" y1="76" x2="590" y2="118"/>
  <line x1="752" y1="120" x2="696" y2="146"/><line x1="864" y1="176" x2="788" y2="184"/>
  <line x1="950" y1="228" x2="870" y2="222"/>
</g>
<g stroke="#221e18" stroke-width="5">
  <line x1="44" y1="240" x2="44" y2="470"/><line x1="124" y1="234" x2="124" y2="470"/>
  <line x1="204" y1="230" x2="204" y2="470"/><line x1="284" y1="226" x2="284" y2="470"/>
  <line x1="364" y1="224" x2="364" y2="470"/><line x1="444" y1="222" x2="444" y2="470"/>
  <line x1="524" y1="222" x2="524" y2="470"/><line x1="604" y1="224" x2="604" y2="470"/>
  <line x1="684" y1="226" x2="684" y2="470"/><line x1="764" y1="230" x2="764" y2="470"/>
  <line x1="844" y1="234" x2="844" y2="470"/><line x1="924" y1="240" x2="924" y2="470"/>
</g>
<g stroke="#221e18" stroke-width="4">
  <line x1="0" y1="292" x2="1000" y2="292"/><line x1="0" y1="360" x2="1000" y2="360"/><line x1="0" y1="428" x2="1000" y2="428"/>
</g>
<g fill="none" stroke="#6b5a3a" stroke-width="3" opacity="0.35">
  <path d="M250 128 Q500 22 750 128"/><path d="M300 152 Q500 74 700 152"/>
</g>
<g fill="none" stroke="#e0b667" stroke-width="2" opacity="0.22">
  <path d="M330 176 Q500 116 670 176"/>
</g>
<g stroke="#e8c27c" stroke-width="3" opacity="0.13">
  <line x1="364" y1="230" x2="364" y2="470"/><line x1="444" y1="228" x2="444" y2="470"/>
  <line x1="524" y1="228" x2="524" y2="470"/><line x1="604" y1="230" x2="604" y2="470"/>
</g>
<g stroke="#cbd6e4" stroke-width="2" opacity="0.07">
  <line x1="60" y1="300" x2="110" y2="424"/><line x1="300" y1="240" x2="352" y2="356"/>
  <line x1="620" y1="300" x2="672" y2="424"/><line x1="850" y1="248" x2="900" y2="360"/>
</g>
<g fill="#cbd6e4" opacity="0.1">
  <circle cx="96" cy="330" r="2"/><circle cx="106" cy="348" r="1.5"/><circle cx="240" cy="316" r="2"/>
  <circle cx="720" cy="340" r="2"/><circle cx="732" cy="368" r="1.6"/><circle cx="880" cy="320" r="1.8"/>
</g>
<!-- condensation running down the cold panes -->
<g fill="none" stroke="#cbd6e4" stroke-width="1.2" opacity="0.11">
  <path d="M96 300 q6 26 -2 54"/><path d="M240 300 q-5 30 3 58"/><path d="M330 370 q6 24 -2 50"/>
  <path d="M720 300 q-6 28 2 56"/><path d="M880 300 q5 26 -3 52"/><path d="M628 370 q-5 26 3 52"/>
</g>
<g fill="#cbd6e4" opacity="0.05">
  <path d="M52 296 L116 296 L116 356 L52 356 Z"/><path d="M612 364 L680 364 L680 424 L612 424 Z"/>
  <path d="M772 296 L836 296 L836 356 L772 356 Z"/>
</g>

<rect width="1000" height="620" fill="url(#bw-cons-glow)"/>

<!-- the hanging lantern -->
<g class="fx-sway" style="--d:.4s;transform-origin:50% 0">
  <line x1="470" y1="118" x2="470" y2="176" stroke="#2a2620" stroke-width="3"/>
  <path d="M448 182 l44 0 l0 44 l-44 0 z" fill="#1a1712" stroke="#6b5326" stroke-width="3"/>
  <path d="M444 182 l52 0 l-26 -16 z" fill="#3b2f22"/>
  <ellipse cx="470" cy="206" rx="9" ry="13" fill="#ffd98a" class="fx-glow" style="--d:1.1s"/>
  <ellipse cx="470" cy="204" rx="4" ry="6" fill="#fff6e0" class="fx-glow" style="--d:2.4s"/>
  <g opacity="0.78"><rect x="330" y="76" width="280" height="280" fill="url(#bw-cons-lamp)" class="fx-glow" style="--d:.2s"/></g>
</g>

<!-- a hundred plants: hanging baskets and vines -->
<g>
  <g class="fx-sway" style="--d:2.6s;transform-origin:50% 0">
    <path d="M290 190 l44 0 l-6 24 l-32 0 z" fill="#5a482c"/>
    <g stroke="#3f4a30" stroke-width="3" fill="none">
      <path d="M296 214 q-10 40 6 66"/><path d="M312 216 q6 44 -8 74"/><path d="M326 214 q14 36 4 58"/>
    </g>
    <g fill="#5f6b4a">
      <ellipse cx="298" cy="238" rx="7" ry="4"/><ellipse cx="304" cy="262" rx="7" ry="4"/><ellipse cx="300" cy="278" rx="6" ry="3.5"/>
      <ellipse cx="316" cy="244" rx="7" ry="4"/><ellipse cx="312" cy="270" rx="7" ry="4"/><ellipse cx="306" cy="288" rx="6" ry="3.5"/>
      <ellipse cx="330" cy="236" rx="7" ry="4"/><ellipse cx="332" cy="258" rx="6" ry="3.5"/>
    </g>
  </g>
  <g class="fx-sway" style="--d:1.3s;transform-origin:50% 0">
    <path d="M660 176 l46 0 l-6 24 l-34 0 z" fill="#5a482c"/>
    <g stroke="#3f4a30" stroke-width="3" fill="none">
      <path d="M668 200 q-12 46 4 78"/><path d="M684 202 q4 50 -10 82"/><path d="M698 200 q16 40 6 64"/>
    </g>
    <g fill="#4b553b">
      <ellipse cx="668" cy="228" rx="7" ry="4"/><ellipse cx="672" cy="254" rx="7" ry="4"/><ellipse cx="668" cy="274" rx="6" ry="3.5"/>
      <ellipse cx="686" cy="232" rx="7" ry="4"/><ellipse cx="682" cy="262" rx="7" ry="4"/><ellipse cx="676" cy="282" rx="6" ry="3.5"/>
      <ellipse cx="702" cy="226" rx="7" ry="4"/><ellipse cx="704" cy="250" rx="6" ry="3.5"/>
    </g>
  </g>
</g>

<!-- floor -->
<rect x="0" y="466" width="1000" height="154" fill="url(#bw-cons-floor)"/>
<g stroke="#2b2c22" stroke-width="2">
  <line x1="0" y1="500" x2="1000" y2="500"/><line x1="0" y1="544" x2="1000" y2="544"/><line x1="0" y1="596" x2="1000" y2="596"/>
  <line x1="500" y1="466" x2="180" y2="620"/><line x1="500" y1="466" x2="380" y2="620"/>
  <line x1="500" y1="466" x2="620" y2="620"/><line x1="500" y1="466" x2="820" y2="620"/>
</g>
<g stroke="#3c3e30" stroke-width="1.1" opacity="0.45">
  <line x1="0" y1="503" x2="1000" y2="503"/><line x1="0" y1="547" x2="1000" y2="547"/><line x1="0" y1="599" x2="1000" y2="599"/>
</g>
<g fill="#0a0b07" opacity="0.45">
  <path d="M0 500 L1000 500 L1000 506 L0 506 Z"/><path d="M0 544 L1000 544 L1000 551 L0 551 Z"/>
</g>
<!-- lantern light on the wet flags -->
<g opacity="0.13" fill="#e8bd6c">
  <path d="M410 470 L300 620 L680 620 L546 470 Z"/>
</g>
<g opacity="0.09" fill="#f2d79a">
  <ellipse cx="480" cy="560" rx="180" ry="36"/><ellipse cx="474" cy="604" rx="130" ry="20"/>
</g>

<!-- staging of pots along the back -->
<g>
  <rect x="404" y="432" width="230" height="8" fill="#3b2f22"/>
  <rect x="412" y="440" width="10" height="30" fill="#2a2118"/><rect x="616" y="440" width="10" height="30" fill="#2a2118"/>
  <rect x="404" y="432" width="230" height="3" fill="#5f4b31" opacity="0.6"/>
  <g fill="#000" opacity="0.35">
    <ellipse cx="431" cy="432" rx="18" ry="4"/><ellipse cx="475" cy="432" rx="16" ry="3.5"/>
    <ellipse cx="523" cy="432" rx="18" ry="4"/><ellipse cx="573" cy="432" rx="16" ry="3.5"/>
    <ellipse cx="616" cy="432" rx="17" ry="4"/>
  </g>
  <g fill="url(#bw-cons-terra)">
    <path d="M418 432 l-4 -26 l34 0 l-4 26 z"/><path d="M464 432 l-4 -22 l30 0 l-4 22 z"/>
    <path d="M510 432 l-4 -26 l34 0 l-4 26 z"/><path d="M562 432 l-4 -22 l30 0 l-4 22 z"/>
    <path d="M604 432 l-4 -24 l32 0 l-4 24 z"/>
  </g>
  <g fill="#8f6242" opacity="0.75">
    <rect x="413" y="404" width="36" height="4"/><rect x="459" y="408" width="32" height="4"/>
    <rect x="505" y="404" width="36" height="4"/><rect x="557" y="408" width="32" height="4"/>
    <rect x="599" y="406" width="34" height="4"/>
  </g>
  <g fill="#4b553b">
    <ellipse cx="431" cy="398" rx="20" ry="12"/><ellipse cx="475" cy="402" rx="17" ry="10"/>
    <ellipse cx="523" cy="396" rx="21" ry="13"/><ellipse cx="573" cy="402" rx="17" ry="10"/>
    <ellipse cx="616" cy="398" rx="19" ry="11"/>
  </g>
  <g fill="#5f6b4a">
    <ellipse cx="425" cy="390" rx="12" ry="7"/><ellipse cx="519" cy="388" rx="12" ry="7"/><ellipse cx="612" cy="390" rx="11" ry="6"/>
  </g>
  <g fill="#7d8a62" opacity="0.55">
    <ellipse cx="424" cy="386" rx="7" ry="4"/><ellipse cx="518" cy="384" rx="7" ry="4"/><ellipse cx="611" cy="386" rx="6" ry="3.4"/>
  </g>
  <g fill="#000" opacity="0.3">
    <ellipse cx="440" cy="404" rx="14" ry="6"/><ellipse cx="532" cy="402" rx="14" ry="6"/>
  </g>
</g>

<!-- a great palm, left -->
<g>
  <ellipse cx="112" cy="612" rx="96" ry="16" fill="url(#bw-cons-sh)"/>
  <path d="M62 620 l0 -74 l100 0 l0 74 z" fill="url(#bw-cons-terra)"/>
  <path d="M56 546 l112 0 l-6 14 l-100 0 z" fill="#7d543a"/>
  <path d="M56 546 l112 0 l-2 5 l-108 0 z" fill="#9b6b48" opacity="0.7"/>
  <path d="M140 560 l22 0 l0 60 l-22 0 z" fill="#2a1a11" opacity="0.5"/>
  <rect x="104" y="410" width="16" height="138" fill="#4a3524"/>
  <g fill="#3f4a30" class="fx-breathe" style="--d:.9s">
    <path d="M112 412 q-70 -22 -104 -76 q56 20 104 56 z"/>
    <path d="M112 412 q-56 -50 -60 -114 q40 46 60 100 z"/>
    <path d="M112 412 q-8 -66 26 -114 q6 60 -16 110 z"/>
    <path d="M112 412 q54 -34 116 -34 q-52 30 -110 46 z"/>
    <path d="M112 412 q60 -60 74 -110 q-24 66 -62 116 z"/>
  </g>
  <g fill="#5f6b4a" opacity="0.85" class="fx-breathe" style="--d:2.9s">
    <path d="M112 412 q-42 -26 -68 -62 q42 22 70 50 z"/>
    <path d="M112 412 q46 -22 96 -18 q-46 20 -92 32 z"/>
    <path d="M112 412 q-6 -50 18 -86 q4 46 -10 82 z"/>
  </g>
</g>

<!-- THE FOXGLOVE BED, trampled -->
<g>
  <ellipse cx="220" cy="576" rx="220" ry="26" fill="url(#bw-cons-sh)" opacity="0.7"/>
  <path d="M36 566 L410 566 L376 470 L74 470 Z" fill="#4a3226"/>
  <path d="M36 566 L410 566 L376 470 L74 470 Z" fill="url(#bw-cons-terra)" opacity="0.4"/>
  <path d="M36 566 L410 566 L406 552 L40 552 Z" fill="#3a2418"/>
  <g stroke="#5f3f2c" stroke-width="2">
    <line x1="120" y1="470" x2="102" y2="566"/><line x1="200" y1="470" x2="192" y2="566"/>
    <line x1="280" y1="470" x2="290" y2="566"/><line x1="350" y1="470" x2="368" y2="566"/>
  </g>
  <path d="M74 470 L376 470 L376 476 L74 476 Z" fill="#7d543a" opacity="0.6"/>
  <path d="M74 470 L376 470 L360 494 L88 494 Z" fill="#2a2118"/>
  <path d="M88 494 L360 494 L350 548 L96 548 Z" fill="url(#bw-cons-soil)"/>
  <path d="M88 494 L360 494 L356 508 L92 508 Z" fill="#000" opacity="0.4"/>
  <g fill="#332920">
    <ellipse cx="140" cy="518" rx="30" ry="11"/><ellipse cx="250" cy="530" rx="34" ry="12"/><ellipse cx="318" cy="512" rx="24" ry="9"/>
  </g>
  <g fill="#4a3d2d" opacity="0.6">
    <ellipse cx="134" cy="514" rx="18" ry="5"/><ellipse cx="242" cy="525" rx="20" ry="5"/><ellipse cx="313" cy="509" rx="14" ry="4"/>
  </g>
  <g fill="#0e0b07" opacity="0.5">
    <ellipse cx="148" cy="524" rx="20" ry="5"/><ellipse cx="260" cy="537" rx="22" ry="5"/><ellipse cx="325" cy="517" rx="15" ry="4"/>
  </g>
  <g fill="#6f6a52" opacity="0.16">
    <ellipse cx="180" cy="506" rx="26" ry="5"/><ellipse cx="296" cy="534" rx="22" ry="4"/>
  </g>
  <!-- boot marks in the wet soil -->
  <g fill="#16120d" opacity="0.85">
    <ellipse cx="186" cy="524" rx="15" ry="8" transform="rotate(-18 186 524)"/>
    <ellipse cx="204" cy="540" rx="9" ry="6" transform="rotate(-18 204 540)"/>
    <ellipse cx="272" cy="508" rx="14" ry="7" transform="rotate(12 272 508)"/>
    <ellipse cx="256" cy="522" rx="8" ry="5" transform="rotate(12 256 522)"/>
  </g>
  <!-- spikes still standing -->
  <g>
    <path d="M104 512 q-8 -70 4 -130" fill="none" stroke="#5f6b4a" stroke-width="5"/>
    <g fill="#7a5a6e">
      <ellipse cx="98" cy="400" rx="8" ry="11" transform="rotate(-24 98 400)"/>
      <ellipse cx="114" cy="418" rx="8" ry="11" transform="rotate(24 114 418)"/>
      <ellipse cx="97" cy="438" rx="9" ry="12" transform="rotate(-24 97 438)"/>
      <ellipse cx="114" cy="458" rx="9" ry="12" transform="rotate(24 114 458)"/>
      <ellipse cx="99" cy="478" rx="9" ry="12" transform="rotate(-24 99 478)"/>
    </g>
    <g fill="#9b8494" opacity="0.8">
      <ellipse cx="106" cy="386" rx="6" ry="8"/><ellipse cx="108" cy="372" rx="4" ry="6"/>
    </g>
  </g>
  <g>
    <path d="M338 508 q10 -66 0 -124" fill="none" stroke="#5f6b4a" stroke-width="5"/>
    <g fill="#7a5a6e">
      <ellipse cx="330" cy="404" rx="8" ry="11" transform="rotate(-24 330 404)"/>
      <ellipse cx="346" cy="422" rx="8" ry="11" transform="rotate(24 346 422)"/>
      <ellipse cx="330" cy="442" rx="9" ry="12" transform="rotate(-24 330 442)"/>
      <ellipse cx="347" cy="462" rx="9" ry="12" transform="rotate(24 347 462)"/>
      <ellipse cx="331" cy="482" rx="9" ry="12" transform="rotate(-24 331 482)"/>
    </g>
    <g fill="#9b8494" opacity="0.8">
      <ellipse cx="338" cy="390" rx="6" ry="8"/><ellipse cx="339" cy="376" rx="4" ry="6"/>
    </g>
  </g>
  <!-- snapped, not cut: stems broken and bent flat -->
  <g>
    <path d="M180 514 l16 -52 l-38 -30" fill="none" stroke="#5f6b4a" stroke-width="5" stroke-linejoin="round"/>
    <path d="M196 462 l-4 -10" fill="none" stroke="#cbb98f" stroke-width="4"/>
    <g fill="#6b5568">
      <ellipse cx="150" cy="424" rx="8" ry="11" transform="rotate(-62 150 424)"/>
      <ellipse cx="166" cy="440" rx="8" ry="11" transform="rotate(-62 166 440)"/>
      <ellipse cx="182" cy="452" rx="7" ry="10" transform="rotate(-62 182 452)"/>
    </g>
  </g>
  <g>
    <path d="M240 522 l-6 -46 l58 -22" fill="none" stroke="#4b553b" stroke-width="5" stroke-linejoin="round"/>
    <path d="M234 476 l4 -10" fill="none" stroke="#cbb98f" stroke-width="4"/>
    <g fill="#6b5568">
      <ellipse cx="272" cy="462" rx="8" ry="11" transform="rotate(72 272 462)"/>
      <ellipse cx="288" cy="456" rx="8" ry="11" transform="rotate(72 288 456)"/>
    </g>
  </g>
  <g>
    <path d="M296 530 q40 -18 84 -8" fill="none" stroke="#4b553b" stroke-width="5"/>
    <g fill="#5b4a58">
      <ellipse cx="352" cy="520" rx="8" ry="10" transform="rotate(84 352 520)"/>
      <ellipse cx="374" cy="520" rx="7" ry="9" transform="rotate(84 374 520)"/>
    </g>
  </g>
  <g>
    <path d="M126 540 q46 -10 78 8" fill="none" stroke="#4b553b" stroke-width="4"/>
    <ellipse cx="196" cy="546" rx="7" ry="9" transform="rotate(100 196 546)" fill="#5b4a58"/>
  </g>
  <!-- broad basal leaves -->
  <g fill="#3f4a30">
    <path d="M96 528 q-38 -8 -48 12 q38 12 52 -4 z"/><path d="M356 520 q38 -10 50 10 q-38 12 -54 -2 z"/>
    <path d="M212 552 q-40 -6 -52 12 q40 12 56 -4 z"/><path d="M290 544 q34 -12 50 4 q-32 16 -52 6 z"/>
  </g>
</g>

<!-- the wicker settee, and Julian among his mother's flowers -->
<g>
  <ellipse cx="778" cy="566" rx="250" ry="28" fill="url(#bw-cons-sh)" opacity="0.85"/>
  <path d="M596 486 l0 -70 q0 -32 36 -32 l290 0 q36 0 36 32 l0 70 z" fill="url(#bw-cons-wicker)"/>
  <path d="M860 384 l62 0 q36 0 36 32 l0 70 l-98 0 z" fill="#0d0a06" opacity="0.28"/>
  <g stroke="#4a3a22" stroke-width="1.6" opacity="0.85">
    <line x1="606" y1="392" x2="606" y2="486"/><line x1="632" y1="386" x2="632" y2="486"/>
    <line x1="658" y1="384" x2="658" y2="486"/><line x1="684" y1="384" x2="684" y2="486"/>
    <line x1="710" y1="384" x2="710" y2="486"/><line x1="736" y1="384" x2="736" y2="486"/>
    <line x1="762" y1="384" x2="762" y2="486"/><line x1="788" y1="384" x2="788" y2="486"/>
    <line x1="814" y1="384" x2="814" y2="486"/><line x1="840" y1="384" x2="840" y2="486"/>
    <line x1="866" y1="384" x2="866" y2="486"/><line x1="892" y1="384" x2="892" y2="486"/>
    <line x1="918" y1="386" x2="918" y2="486"/><line x1="944" y1="392" x2="944" y2="486"/>
    <line x1="600" y1="400" x2="954" y2="400"/><line x1="598" y1="418" x2="956" y2="418"/>
    <line x1="596" y1="436" x2="958" y2="436"/><line x1="596" y1="454" x2="958" y2="454"/>
    <line x1="596" y1="472" x2="958" y2="472"/>
  </g>
  <path d="M596 486 l0 -70 q0 -32 36 -32 l290 0 q36 0 36 32 l0 70" fill="none" stroke="#3b2f22" stroke-width="6"/>
  <rect x="588" y="482" width="378" height="24" rx="9" fill="#8a7040"/>
  <rect x="588" y="482" width="378" height="7" rx="3" fill="#a08650"/>
  <path d="M580 486 q-8 -46 18 -50 l14 0 l0 54 z" fill="#7a6540"/>
  <path d="M974 486 q8 -46 -18 -50 l-14 0 l0 54 z" fill="#7a6540"/>
  <g fill="#241b12">
    <rect x="600" y="506" width="13" height="58"/><rect x="944" y="506" width="13" height="58"/>
    <rect x="676" y="506" width="11" height="48"/><rect x="874" y="506" width="11" height="48"/>
  </g>
  <g fill="#5a482c" opacity="0.5">
    <rect x="600" y="506" width="4" height="58"/><rect x="944" y="506" width="4" height="58"/>
    <rect x="676" y="506" width="3" height="48"/><rect x="874" y="506" width="3" height="48"/>
  </g>
  <g fill="#000" opacity="0.4">
    <ellipse cx="600" cy="566" rx="20" ry="5"/><ellipse cx="944" cy="566" rx="20" ry="5"/>
    <ellipse cx="678" cy="556" rx="16" ry="4"/><ellipse cx="876" cy="556" rx="16" ry="4"/>
  </g>
  <!-- cushions, pressed flat in two places, close together -->
  <path d="M786 484 q0 -30 20 -30 l128 0 q20 0 20 30 z" fill="url(#bw-cons-cush)"/>
  <path d="M786 484 q0 -30 20 -30 l16 0 q-16 6 -18 30 z" fill="#fff6d9" opacity="0.4"/>
  <path d="M792 480 q0 -22 18 -22 l122 0 q18 0 18 22 z" fill="#cbb98f"/>
  <path d="M812 462 q42 -8 84 2 q-40 10 -84 -2 z" fill="#a8956e" opacity="0.7"/>
  <path d="M810 466 q40 -10 84 0" fill="none" stroke="#a89572" stroke-width="3"/>
  <path d="M628 484 q0 -30 20 -30 l122 0 q20 0 20 30 z" fill="url(#bw-cons-cush)"/>
  <path d="M648 458 q36 -6 74 0 q-34 10 -74 0 z" fill="#b5a37b" opacity="0.6"/>
  <path d="M628 484 q0 -30 20 -30 l14 0 q-14 8 -16 30 z" fill="#fff6d9" opacity="0.35"/>
  <!-- the cufflink, down behind the cushion, and one sea-green thread -->
  <ellipse cx="864" cy="466" rx="8" ry="3" fill="#000" opacity="0.4"/>
  <circle cx="862" cy="462" r="6" fill="#9b7a3f"/>
  <circle cx="860" cy="460" r="2.4" fill="#ffd98a"/>
  <path d="M868 464 q18 -6 30 4" fill="none" stroke="#7f9a86" stroke-width="2" opacity="0.9"/>
  <path d="M898 468 q12 6 8 16" fill="none" stroke="#7f9a86" stroke-width="1.6" opacity="0.75"/>
  <!-- Julian, and a cigarette he is not smoking -->
  <g>
    <ellipse cx="686" cy="562" rx="70" ry="12" fill="#000" opacity="0.4"/>
    <path d="M636 506 l92 0 l10 42 l-22 0 l-8 -24 l-56 0 l-2 24 l-22 0 z" fill="#232a3a"/>
    <path d="M636 506 l26 0 l-4 42 l-22 0 z" fill="#2d364a" opacity="0.6"/>
    <ellipse cx="646" cy="556" rx="18" ry="8" fill="#14110d"/><ellipse cx="726" cy="556" rx="18" ry="8" fill="#14110d"/>
    <path d="M642 506 q-2 -78 42 -84 q44 6 42 84 z" fill="#2a3042"/>
    <path d="M642 506 q-2 -78 42 -84 q-22 22 -20 84 z" fill="#343d52" opacity="0.6"/>
    <path d="M706 424 q22 24 20 82 l-24 0 q8 -50 -6 -80 z" fill="#1b2130" opacity="0.55"/>
    <path d="M662 430 q22 -14 44 0 l-8 76 l-28 0 z" fill="#1b2130"/>
    <path d="M672 428 l24 0 l-4 34 l-16 0 z" fill="#e3d5ac"/>
    <path d="M676 430 l6 0 l-2 32 l-4 0 z" fill="#5d1f18"/>
    <path d="M660 428 l16 4 l-8 22 z" fill="#1b2130"/>
    <path d="M708 428 l-16 4 l8 22 z" fill="#1b2130"/>
    <g transform="rotate(-9 684 396)">
      <ellipse cx="684" cy="396" rx="22" ry="26" fill="#a2907a"/>
      <ellipse cx="679" cy="392" rx="17" ry="21" fill="#bfad8f"/>
      <path d="M662 394 q22 -30 44 0 q6 -30 -22 -30 q-28 0 -22 30 z" fill="#241b12"/>
      <path d="M660 390 q-6 -18 8 -28 l6 6 q-10 8 -8 22 z" fill="#241b12"/>
      <g stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round">
        <line x1="669" y1="394" x2="679" y2="393"/><line x1="689" y1="393" x2="699" y2="394"/>
      </g>
      <line x1="684" y1="398" x2="682" y2="408" stroke="#8d7c62" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="675" y1="416" x2="693" y2="416" stroke="#6b5a45" stroke-width="2.2" stroke-linecap="round"/>
    </g>
    <path d="M714 442 q28 22 26 54 l-14 2 q0 -28 -20 -44 z" fill="#2a3042"/>
    <ellipse cx="736" cy="500" rx="13" ry="9" fill="#b3a184"/>
    <g stroke="#8d7c62" stroke-width="1.3" stroke-linecap="round">
      <line x1="730" y1="498" x2="742" y2="502"/><line x1="732" y1="493" x2="744" y2="497"/>
    </g>
    <g transform="rotate(-14 754 494)">
      <rect x="742" y="491" width="26" height="5" rx="2" fill="#f0e7ce"/>
      <rect x="762" y="491" width="7" height="5" fill="#9b7a3f"/>
    </g>
    <path d="M652 442 q-22 24 -16 60 l14 -2 q-4 -30 14 -46 z" fill="#2a3042"/>
    <ellipse cx="644" cy="502" rx="12" ry="8" fill="#b3a184"/>
  </g>
</g>

<!-- foreground: a fern in a big pot, framing the right corner -->
<g>
  <ellipse cx="940" cy="614" rx="110" ry="14" fill="url(#bw-cons-sh)"/>
  <path d="M880 620 l0 -60 l120 0 l0 60 z" fill="url(#bw-cons-terra)"/>
  <path d="M872 560 l136 0 l-8 16 l-120 0 z" fill="#6b4632"/>
  <path d="M872 560 l136 0 l-2 5 l-132 0 z" fill="#8f6242" opacity="0.7"/>
  <g fill="#2f3a26" class="fx-breathe" style="--d:1.7s">
    <path d="M940 560 q-58 -18 -80 -66 q54 16 88 50 z"/>
    <path d="M940 560 q-40 -52 -30 -110 q30 48 42 100 z"/>
    <path d="M940 560 q22 -60 74 -86 q-32 50 -54 96 z"/>
    <path d="M940 560 q54 -26 100 -18 q-48 22 -88 36 z"/>
  </g>
  <g fill="#4b553b" opacity="0.9">
    <path d="M940 560 q-34 -30 -44 -70 q34 34 52 66 z"/>
    <path d="M940 560 q10 -44 46 -70 q-20 42 -32 74 z"/>
  </g>
  <g fill="none" stroke="#8f9a6c" stroke-width="1.4" opacity="0.3">
    <path d="M940 560 q-58 -18 -80 -66"/><path d="M940 560 q-40 -52 -30 -110"/>
  </g>
</g>
<g>
  <ellipse cx="32" cy="616" rx="82" ry="12" fill="url(#bw-cons-sh)"/>
  <path d="M-10 620 l0 -50 l86 0 l0 50 z" fill="url(#bw-cons-terra)"/>
  <path d="M-14 570 l98 0 l-6 14 l-86 0 z" fill="#6b4632"/>
  <path d="M-14 570 l98 0 l-2 5 l-94 0 z" fill="#8f6242" opacity="0.7"/>
  <g fill="#2f3a26" class="fx-breathe" style="--d:2.2s">
    <path d="M32 570 q-46 -20 -58 -60 q42 18 68 46 z"/>
    <path d="M32 570 q-16 -46 6 -84 q14 44 8 80 z"/>
    <path d="M32 570 q44 -22 84 -14 q-42 20 -74 30 z"/>
  </g>
</g>

<rect width="1000" height="620" fill="url(#bw-cons-vig)"/>
`,
  },

  kitchen: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_dumbwaiter: { x: 72, y: 44 },
      h_tray: { x: 90, y: 59 },
      h_keyboard: { x: 54, y: 57 },
    },
    svg: `
<defs>
  <linearGradient id="bw-kit-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2b2620"/><stop offset="1" stop-color="#171310"/>
  </linearGradient>
  <linearGradient id="bw-kit-copper" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#6b4a22"/><stop offset="0.35" stop-color="#9b7a3f"/>
    <stop offset="0.6" stop-color="#d9a441"/><stop offset="1" stop-color="#5c3f1e"/>
  </linearGradient>
  <linearGradient id="bw-kit-wood" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8a7550"/><stop offset="1" stop-color="#4a3c2a"/>
  </linearGradient>
  <radialGradient id="bw-kit-glow" cx="0.5" cy="0.4" r="0.72">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.28"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-kit-bulb" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.5"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-kit-fire" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.55"/>
    <stop offset="0.5" stop-color="#a8352a" stop-opacity="0.18"/>
    <stop offset="1" stop-color="#a8352a" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="bw-kit-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c261e"/><stop offset="1" stop-color="#151009"/>
  </linearGradient>
  <radialGradient id="bw-kit-sh" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.6"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-kit-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.74"/>
  </radialGradient>
</defs>

<rect width="1000" height="620" fill="url(#bw-kit-wall)"/>

<!-- glazed brick, scrubbed thirty years -->
<g stroke="#332c24" stroke-width="1.4" opacity="0.85">
  <line x1="0" y1="60" x2="1000" y2="60"/><line x1="0" y1="98" x2="1000" y2="98"/>
  <line x1="0" y1="136" x2="1000" y2="136"/><line x1="0" y1="174" x2="1000" y2="174"/>
  <line x1="0" y1="212" x2="1000" y2="212"/><line x1="0" y1="250" x2="1000" y2="250"/>
  <line x1="0" y1="288" x2="1000" y2="288"/><line x1="0" y1="326" x2="1000" y2="326"/>
  <line x1="0" y1="364" x2="1000" y2="364"/><line x1="0" y1="402" x2="1000" y2="402"/>
  <line x1="30" y1="60" x2="30" y2="98"/><line x1="190" y1="60" x2="190" y2="98"/><line x1="350" y1="60" x2="350" y2="98"/>
  <line x1="510" y1="60" x2="510" y2="98"/><line x1="670" y1="60" x2="670" y2="98"/><line x1="830" y1="60" x2="830" y2="98"/>
  <line x1="70" y1="98" x2="70" y2="136"/><line x1="230" y1="98" x2="230" y2="136"/><line x1="390" y1="98" x2="390" y2="136"/>
  <line x1="550" y1="98" x2="550" y2="136"/><line x1="710" y1="98" x2="710" y2="136"/><line x1="870" y1="98" x2="870" y2="136"/>
  <line x1="30" y1="136" x2="30" y2="174"/><line x1="190" y1="136" x2="190" y2="174"/><line x1="350" y1="136" x2="350" y2="174"/>
  <line x1="510" y1="136" x2="510" y2="174"/><line x1="670" y1="136" x2="670" y2="174"/><line x1="830" y1="136" x2="830" y2="174"/>
  <line x1="70" y1="288" x2="70" y2="326"/><line x1="230" y1="288" x2="230" y2="326"/><line x1="390" y1="288" x2="390" y2="326"/>
  <line x1="550" y1="288" x2="550" y2="326"/><line x1="870" y1="288" x2="870" y2="326"/><line x1="950" y1="288" x2="950" y2="326"/>
  <line x1="30" y1="326" x2="30" y2="364"/><line x1="510" y1="326" x2="510" y2="364"/><line x1="590" y1="326" x2="590" y2="364"/>
  <line x1="910" y1="326" x2="910" y2="364"/><line x1="150" y1="364" x2="150" y2="402"/><line x1="470" y1="364" x2="470" y2="402"/>
</g>
<path d="M0 178 L300 178 L268 30 L0 30 Z" fill="#0d0a07" opacity="0.3"/>
<rect x="0" y="0" width="1000" height="30" fill="#1b1712"/>
<rect x="0" y="30" width="1000" height="8" fill="#3b2f22"/>
<rect width="1000" height="620" fill="url(#bw-kit-glow)"/>

<!-- floor -->
<rect x="0" y="404" width="1000" height="216" fill="url(#bw-kit-floor)"/>
<rect x="0" y="396" width="1000" height="10" fill="#332a1e"/>
<rect x="0" y="404" width="1000" height="5" fill="#080604" opacity="0.7"/>
<g fill="#2b241c">
  <rect x="0" y="404" width="1000" height="7"/>
  <path d="M60 620 l60 -216 l64 0 l-88 216 z" opacity="0.5"/>
  <path d="M320 620 l24 -216 l64 0 l-40 216 z" opacity="0.5"/>
  <path d="M620 620 l-18 -216 l64 0 l36 216 z" opacity="0.5"/>
  <path d="M880 620 l-70 -216 l64 0 l96 216 z" opacity="0.5"/>
</g>
<g stroke="#191410" stroke-width="2" opacity="0.7">
  <line x1="0" y1="452" x2="1000" y2="452"/><line x1="0" y1="512" x2="1000" y2="512"/><line x1="0" y1="584" x2="1000" y2="584"/>
</g>
<g opacity="0.1" fill="#f0c67e">
  <ellipse cx="540" cy="586" rx="300" ry="44"/>
</g>
<g opacity="0.13" fill="#c9603a">
  <ellipse cx="110" cy="530" rx="180" ry="46"/>
</g>

<!-- the great range, still warm -->
<g>
  <path d="M6 316 L300 316 L272 178 L44 178 Z" fill="#2a2118"/>
  <path d="M6 316 L300 316 L296 302 L14 302 Z" fill="#3b2f22"/>
  <path d="M14 304 L296 304 L295 307 L15 307 Z" fill="#7d6543" opacity="0.6"/>
  <path d="M44 178 L272 178 L268 190 L48 190 Z" fill="#3b2f22"/>
  <rect x="10" y="302" width="290" height="20" fill="#241b12"/>
  <rect x="18" y="322" width="272" height="212" fill="#241b12"/>
  <rect x="18" y="322" width="272" height="12" fill="#4a3c2a"/>
  <rect x="18" y="322" width="272" height="3" fill="#7d6543" opacity="0.65"/>
  <rect x="24" y="334" width="260" height="200" fill="#1d1812"/>
  <!-- firebox, open, banked low -->
  <rect x="52" y="386" width="96" height="86" fill="#0f0c09"/>
  <rect x="52" y="386" width="96" height="86" fill="none" stroke="#3b2f22" stroke-width="5"/>
  <g stroke="#241b12" stroke-width="4">
    <line x1="52" y1="452" x2="148" y2="452"/><line x1="70" y1="452" x2="70" y2="472"/>
    <line x1="100" y1="452" x2="100" y2="472"/><line x1="130" y1="452" x2="130" y2="472"/>
  </g>
  <path d="M62 452 q10 -34 20 -12 q8 -40 22 -8 q10 -30 20 -6 q8 -16 14 26 z" fill="#a8352a" class="fx-ember" style="--d:.3s"/>
  <path d="M70 452 q8 -26 16 -8 q8 -28 18 -6 q8 -20 16 14 z" fill="#d9a441" class="fx-flame" style="--d:1.5s"/>
  <path d="M84 450 q6 -18 12 -4 q6 -14 10 4 z" fill="#ffd98a" class="fx-flame" style="--d:2.7s"/>
  <g fill="#5d1f18" class="fx-ember" style="--d:2.1s">
    <ellipse cx="72" cy="466" rx="12" ry="5"/><ellipse cx="104" cy="468" rx="14" ry="5"/><ellipse cx="134" cy="466" rx="11" ry="4"/>
  </g>
  <rect x="-60" y="330" width="320" height="270" fill="url(#bw-kit-fire)" class="fx-ember" style="--d:.9s"/>
  <!-- oven doors -->
  <rect x="168" y="378" width="112" height="66" fill="#2a2118" stroke="#3b2f22" stroke-width="4"/>
  <rect x="168" y="452" width="112" height="66" fill="#2a2118" stroke="#3b2f22" stroke-width="4"/>
  <g fill="#6b5326">
    <rect x="186" y="404" width="76" height="8" rx="4"/><rect x="186" y="478" width="76" height="8" rx="4"/>
    <circle cx="270" cy="392" r="5"/><circle cx="270" cy="466" r="5"/>
  </g>
  <!-- stockpot and kettle on the plate -->
  <g>
    <path d="M40 302 l0 -46 l84 0 l0 46 z" fill="url(#bw-kit-copper)"/>
    <rect x="34" y="248" width="96" height="10" rx="3" fill="#b58a45"/>
    <ellipse cx="82" cy="248" rx="48" ry="8" fill="#6b4a22"/>
    <path d="M34 262 q-14 14 0 28" fill="none" stroke="#6b5326" stroke-width="5"/>
    <path d="M130 262 q14 14 0 28" fill="none" stroke="#6b5326" stroke-width="5"/>
    <path d="M52 260 l0 40" stroke="#d9a441" stroke-width="5" opacity="0.6"/>
  </g>
  <g>
    <path d="M172 302 q-12 -16 -12 -30 q0 -14 34 -14 q34 0 34 14 q0 14 -12 30 z" fill="url(#bw-kit-copper)"/>
    <ellipse cx="194" cy="258" rx="34" ry="7" fill="#b58a45"/>
    <path d="M170 268 q24 -30 48 0" fill="none" stroke="#6b5326" stroke-width="5"/>
    <path d="M226 272 q22 4 16 22" fill="none" stroke="#9b7a3f" stroke-width="6"/>
    <path d="M180 268 l-4 32" stroke="#d9a441" stroke-width="4" opacity="0.6"/>
  </g>
</g>

<!-- the bare bulb over the table -->
<g>
  <line x1="560" y1="0" x2="560" y2="92" stroke="#332c24" stroke-width="3"/>
  <path d="M522 126 l76 0 l-24 -34 l-28 0 z" fill="#3b2f22"/>
  <path d="M522 126 l76 0 l-6 6 l-64 0 z" fill="#241b12"/>
  <ellipse cx="560" cy="138" rx="10" ry="13" fill="#ffd98a" class="fx-flicker" style="--d:1.2s"/>
  <ellipse cx="560" cy="136" rx="4" ry="6" fill="#fff6e0" class="fx-flicker" style="--d:1.2s"/>
</g>
<rect x="300" y="110" width="520" height="440" fill="url(#bw-kit-bulb)" class="fx-glow" style="--d:2.4s"/>

<g fill="#f2d9a4" opacity="0.24">
  <circle cx="500" cy="200" r="1.5"/><circle cx="596" cy="236" r="1.3"/><circle cx="540" cy="288" r="1.6"/>
  <circle cx="640" cy="200" r="1.2"/><circle cx="470" cy="266" r="1.4"/><circle cx="614" cy="322" r="1.3"/>
</g>

<!-- the batterie de cuisine, hanging -->
<g>
  <rect x="306" y="168" width="330" height="9" rx="4" fill="#4a3c2a"/>
  <rect x="306" y="168" width="330" height="3" fill="#6b5a45"/>
  <g fill="none" stroke="#6b5326" stroke-width="3">
    <path d="M348 168 q0 12 0 16"/><path d="M408 168 q0 12 0 16"/><path d="M462 168 q0 12 0 16"/>
    <path d="M516 168 q0 12 0 16"/><path d="M570 168 q0 12 0 16"/><path d="M612 168 q0 12 0 16"/>
  </g>
  <g>
    <path d="M318 200 l60 0 l-7 52 q-23 8 -46 0 z" fill="url(#bw-kit-copper)"/>
    <rect x="316" y="194" width="64" height="9" rx="3" fill="#b58a45"/>
    <path d="M326 190 q22 -24 44 0" fill="none" stroke="#6b5326" stroke-width="4"/>
    <path d="M330 206 l-4 42" stroke="#d9a441" stroke-width="5" opacity="0.65"/>
    <path d="M366 206 l2 42" stroke="#6b4a22" stroke-width="4" opacity="0.8"/>
  </g>
  <g>
    <path d="M382 200 l52 0 l-6 44 q-20 7 -40 0 z" fill="url(#bw-kit-copper)"/>
    <rect x="380" y="194" width="56" height="8" rx="3" fill="#b58a45"/>
    <path d="M388 190 q20 -22 40 0" fill="none" stroke="#6b5326" stroke-width="4"/>
    <path d="M392 206 l-3 34" stroke="#d9a441" stroke-width="4" opacity="0.65"/>
  </g>
  <g>
    <path d="M439 200 l46 0 l-5 38 q-18 6 -36 0 z" fill="url(#bw-kit-copper)"/>
    <rect x="437" y="194" width="50" height="8" rx="3" fill="#b58a45"/>
    <path d="M444 190 q18 -20 36 0" fill="none" stroke="#6b5326" stroke-width="4"/>
    <path d="M448 206 l-3 30" stroke="#d9a441" stroke-width="4" opacity="0.65"/>
  </g>
  <g>
    <path d="M488 200 l56 0 l-7 58 q-21 8 -42 0 z" fill="url(#bw-kit-copper)"/>
    <rect x="486" y="194" width="60" height="9" rx="3" fill="#b58a45"/>
    <path d="M494 190 q22 -24 44 0" fill="none" stroke="#6b5326" stroke-width="4"/>
    <path d="M498 206 l-4 48" stroke="#d9a441" stroke-width="5" opacity="0.65"/>
    <path d="M534 206 l2 46" stroke="#6b4a22" stroke-width="4" opacity="0.8"/>
  </g>
  <g>
    <ellipse cx="570" cy="216" rx="22" ry="24" fill="url(#bw-kit-copper)"/>
    <ellipse cx="570" cy="216" rx="14" ry="16" fill="#6b4a22" opacity="0.6"/>
    <path d="M570 240 l0 26" stroke="#6b5326" stroke-width="6"/>
    <path d="M560 200 q10 -8 20 0" fill="none" stroke="#d9a441" stroke-width="3" opacity="0.7"/>
  </g>
  <g>
    <path d="M596 198 l34 0 l-4 32 q-13 5 -26 0 z" fill="url(#bw-kit-copper)"/>
    <rect x="594" y="192" width="38" height="7" rx="3" fill="#b58a45"/>
    <path d="M600 204 l-2 24" stroke="#d9a441" stroke-width="3" opacity="0.65"/>
  </g>
  <g fill="#2e2013" opacity="0.4">
    <path d="M320 232 l56 0 l-2 14 q-24 8 -50 0 z"/><path d="M384 228 l48 0 l-2 12 q-20 7 -44 0 z"/>
    <path d="M441 224 l42 0 l-2 10 q-18 6 -38 0 z"/><path d="M490 236 l52 0 l-3 16 q-22 8 -47 0 z"/>
    <path d="M597 220 l32 0 l-2 8 q-14 5 -28 0 z"/>
  </g>
  <g fill="#ffe0a3" opacity="0.28">
    <path d="M336 204 l8 0 l-3 40 l-7 0 z"/><path d="M398 204 l7 0 l-3 32 l-6 0 z"/>
    <path d="M452 204 l6 0 l-2 28 l-6 0 z"/><path d="M506 204 l8 0 l-4 46 l-7 0 z"/>
  </g>
  <!-- ladles and a sieve, on their own hooks -->
  <g stroke="#8e8e88" stroke-width="4" stroke-linecap="round">
    <line x1="336" y1="262" x2="340" y2="300"/><line x1="466" y1="248" x2="470" y2="286"/>
  </g>
  <path d="M330 300 q12 20 22 0 z" fill="#8e8e88"/>
  <ellipse cx="470" cy="292" rx="16" ry="7" fill="#6b6558"/>
</g>

<!-- the key board by the back door: a dozen brass hooks, one of them wiped clean -->
<g>
  <rect x="495" y="319" width="94" height="78" fill="#0e0b07" opacity="0.45"/>
  <rect x="490" y="314" width="94" height="78" rx="2" fill="url(#bw-kit-wood)"/>
  <rect x="490" y="314" width="94" height="5" fill="#6b5a45"/>
  <ellipse cx="557" cy="352" rx="17" ry="21" fill="#ffe0a3" opacity="0.14"/>
  <g fill="#cbb98f" opacity="0.32">
    <path d="M498 328 l15 0 l0 5 l-15 0 z M522 328 l15 0 l0 5 l-15 0 z M546 328 l15 0 l0 5 l-15 0 z M570 328 l12 0 l0 5 l-12 0 z M498 360 l15 0 l0 5 l-15 0 z M522 360 l15 0 l0 5 l-15 0 z M546 360 l15 0 l0 5 l-15 0 z M570 360 l12 0 l0 5 l-12 0 z"/>
  </g>
  <g fill="none" stroke="#b58a45" stroke-width="2.4" stroke-linecap="round">
    <path d="M503 337 q0 6 5 7 M527 337 q0 6 5 7 M551 337 q0 6 5 7 M575 337 q0 6 5 7 M503 369 q0 6 5 7 M527 369 q0 6 5 7 M551 369 q0 6 5 7 M575 369 q0 6 5 7"/>
  </g>
  <g fill="#7d6432">
    <path d="M505 343 q6 0 6 5 q0 4 -3 5 l0 12 l4 0 l0 3 l-4 0 l0 4 l3 0 l0 3 l-6 0 l0 -22 q-3 -1 -3 -5 q0 -5 6 -5 z"/>
    <path d="M529 343 q6 0 6 5 q0 4 -3 5 l0 16 l4 0 l0 3 l-4 0 l0 5 l-3 0 l0 -24 q-3 -1 -3 -5 q0 -5 6 -5 z"/>
    <path d="M577 343 q6 0 6 5 q0 4 -3 5 l0 18 l4 0 l0 3 l-7 0 l0 -21 q-3 -1 -3 -5 q0 -5 6 -5 z"/>
    <path d="M505 375 q6 0 6 5 q0 4 -3 5 l0 11 l4 0 l0 3 l-7 0 l0 -14 q-3 -1 -3 -5 q0 -5 6 -5 z"/>
  </g>
  <path d="M553 342 q7 0 7 6 q0 5 -4 6 l0 13 l5 0 l0 3 l-5 0 l0 4 l4 0 l0 3 l-7 0 l0 -23 q-4 -1 -4 -6 q0 -6 7 -6 z" fill="#e8d4a0"/>
  <rect x="490" y="314" width="4" height="78" fill="#ffe0a3" opacity="0.18"/>
</g>

<!-- the dumbwaiter: the house's ear -->
<g>
  <!-- recess cut into the chimney wall, heavy timber lintel -->
  <rect x="640" y="200" width="176" height="176" fill="#33271a"/>
  <rect x="648" y="208" width="160" height="168" fill="#241b12"/>
  <rect x="648" y="208" width="160" height="14" fill="#0a0705" opacity="0.6"/>
  <rect x="632" y="182" width="192" height="22" fill="#4a3c2a"/>
  <rect x="632" y="182" width="192" height="6" fill="#6b5a45"/>
  <rect x="632" y="182" width="192" height="2" fill="#9a8360" opacity="0.7"/>
  <rect x="632" y="204" width="192" height="6" fill="#191410"/>
  <!-- the hatch board, hoisted and held -->
  <rect x="656" y="210" width="144" height="46" fill="#3a2e1f"/>
  <rect x="656" y="210" width="144" height="4" fill="#4f4029"/>
  <rect x="656" y="252" width="144" height="4" fill="#191410"/>
  <g stroke="#241b12" stroke-width="2">
    <line x1="656" y1="226" x2="800" y2="226"/><line x1="656" y1="240" x2="800" y2="240"/>
  </g>
  <g fill="#2f2921">
    <path d="M664 212 l40 0 l0 8 l-32 0 l0 36 l-8 0 z"/><path d="M792 212 l-40 0 l0 8 l32 0 l0 36 l8 0 z"/>
  </g>
  <g fill="#4a463e">
    <circle cx="670" cy="216" r="2.5"/><circle cx="700" cy="216" r="2.5"/>
    <circle cx="756" cy="216" r="2.5"/><circle cx="786" cy="216" r="2.5"/>
  </g>
  <!-- the shaft itself, open, going up past the study -->
  <rect x="662" y="256" width="132" height="112" fill="#080706"/>
  <path d="M662 256 L794 256 L776 274 L680 274 Z" fill="#171310"/>
  <path d="M662 256 L680 274 L680 368 L662 368 Z" fill="#12100c"/>
  <path d="M794 256 L776 274 L776 368 L794 368 Z" fill="#12100c"/>
  <circle cx="728" cy="270" r="11" fill="#4a463e"/>
  <circle cx="728" cy="270" r="4.5" fill="#191410"/>
  <g stroke="#8a7550" stroke-width="4">
    <line x1="706" y1="268" x2="706" y2="330"/><line x1="750" y1="268" x2="750" y2="330"/>
  </g>
  <!-- the car, halted halfway, still holding a covered dish -->
  <rect x="678" y="330" width="100" height="38" fill="#4a3c2a"/>
  <path d="M678 330 L778 330 L766 318 L690 318 Z" fill="#6b5a45"/>
  <g stroke="#3f3223" stroke-width="2">
    <line x1="704" y1="330" x2="704" y2="368"/><line x1="730" y1="330" x2="730" y2="368"/><line x1="756" y1="330" x2="756" y2="368"/>
  </g>
  <path d="M708 318 q20 -26 40 0 z" fill="#9b7a3f"/>
  <path d="M714 316 q14 -16 28 0" fill="none" stroke="#d9a441" stroke-width="2.5" opacity="0.7"/>
  <circle cx="728" cy="292" r="3.5" fill="#6b5326"/>
  <ellipse cx="728" cy="368" rx="54" ry="7" fill="#000" opacity="0.5"/>
  <!-- hoist rope and its wall cleat -->
  <line x1="812" y1="212" x2="812" y2="340" stroke="#8a7550" stroke-width="4"/>
  <path d="M804 344 l18 0 l0 8 l-18 0 z" fill="#6b5326"/>
  <path d="M812 340 q-8 12 0 20" fill="none" stroke="#8a7550" stroke-width="3"/>
  <!-- speaking tube and the service bell -->
  <g>
    <path d="M610 252 q-14 20 -2 38" fill="none" stroke="#6b5326" stroke-width="6"/>
    <ellipse cx="610" cy="250" rx="12" ry="6" fill="#9b7a3f"/>
    <path d="M614 308 q10 -22 22 0 z" fill="#9b7a3f"/>
    <circle cx="625" cy="312" r="3" fill="#d9a441"/>
  </g>
</g>

<!-- dresser and the counter that keeps the tonic tray -->
<g>
  <rect x="826" y="150" width="178" height="240" fill="#2f2519"/>
  <rect x="818" y="150" width="194" height="12" fill="#4a3c2a"/>
  <g fill="#4a3c2a">
    <rect x="826" y="214" width="178" height="9"/><rect x="826" y="286" width="178" height="9"/>
  </g>
  <g fill="#cbb98f">
    <ellipse cx="856" cy="200" rx="22" ry="14"/><ellipse cx="900" cy="200" rx="22" ry="14"/>
    <ellipse cx="944" cy="200" rx="22" ry="14"/><ellipse cx="988" cy="200" rx="22" ry="14"/>
    <ellipse cx="856" cy="272" rx="22" ry="14"/><ellipse cx="900" cy="272" rx="22" ry="14"/>
    <ellipse cx="944" cy="272" rx="22" ry="14"/><ellipse cx="988" cy="272" rx="22" ry="14"/>
  </g>
  <g fill="#000" opacity="0.35">
    <ellipse cx="858" cy="208" rx="22" ry="8"/><ellipse cx="902" cy="208" rx="22" ry="8"/>
    <ellipse cx="946" cy="208" rx="22" ry="8"/><ellipse cx="858" cy="280" rx="22" ry="8"/>
    <ellipse cx="902" cy="280" rx="22" ry="8"/><ellipse cx="946" cy="280" rx="22" ry="8"/>
  </g>
  <g fill="#8a7550">
    <ellipse cx="856" cy="200" rx="12" ry="7"/><ellipse cx="900" cy="200" rx="12" ry="7"/>
    <ellipse cx="944" cy="200" rx="12" ry="7"/><ellipse cx="988" cy="200" rx="12" ry="7"/>
    <ellipse cx="856" cy="272" rx="12" ry="7"/><ellipse cx="900" cy="272" rx="12" ry="7"/>
    <ellipse cx="944" cy="272" rx="12" ry="7"/><ellipse cx="988" cy="272" rx="12" ry="7"/>
  </g>
  <g fill="#6b5a45">
    <rect x="838" y="298" width="16" height="42" rx="4"/><rect x="860" y="302" width="14" height="38" rx="4"/>
    <rect x="880" y="298" width="18" height="42" rx="4"/>
  </g>
  <ellipse cx="912" cy="522" rx="130" ry="20" fill="url(#bw-kit-sh)"/>
  <rect x="812" y="386" width="196" height="18" fill="url(#bw-kit-wood)"/>
  <rect x="812" y="386" width="196" height="5" fill="#a08a62"/>
  <rect x="812" y="404" width="196" height="5" fill="#0b0806" opacity="0.7"/>
  <rect x="822" y="404" width="180" height="110" fill="#241b12"/>
  <g fill="none" stroke="#3b2f22" stroke-width="3">
    <rect x="834" y="414" width="76" height="40"/><rect x="920" y="414" width="74" height="40"/>
    <rect x="834" y="462" width="160" height="44"/>
  </g>
  <g fill="#9b7a3f">
    <ellipse cx="872" cy="434" rx="9" ry="4"/><ellipse cx="957" cy="434" rx="9" ry="4"/><ellipse cx="914" cy="484" rx="9" ry="4"/>
  </g>
</g>

<!-- the tonic tray, prepared at seven, never collected -->
<g>
  <ellipse cx="906" cy="392" rx="76" ry="8" fill="#000" opacity="0.4"/>
  <rect x="838" y="366" width="132" height="24" rx="4" fill="#6b5326"/>
  <rect x="844" y="368" width="120" height="18" rx="3" fill="#9b7a3f"/>
  <rect x="848" y="370" width="112" height="12" rx="2" fill="#4a3c2a"/>
  <path d="M832 372 q-8 8 0 14" fill="none" stroke="#6b5326" stroke-width="5"/>
  <path d="M976 372 q8 8 0 14" fill="none" stroke="#6b5326" stroke-width="5"/>
  <path d="M856 366 l0 -34 l26 0 l0 34 z" fill="#efe8d2" opacity="0.9"/>
  <path d="M858 348 l22 0 l0 18 l-22 0 z" fill="#f0e7ce" opacity="0.55"/>
  <ellipse cx="869" cy="332" rx="13" ry="4" fill="#f4ecd6" opacity="0.9"/>
  <g>
    <rect x="898" y="336" width="24" height="30" rx="3" fill="#7a4a20"/>
    <rect x="902" y="326" width="16" height="12" rx="2" fill="#5c3f1e"/>
    <rect x="902" y="318" width="16" height="10" rx="3" fill="#1e1a16"/>
    <rect x="901" y="344" width="18" height="14" rx="1" fill="#f0e7ce"/>
    <g stroke="#8d7c62" stroke-width="1.2">
      <line x1="904" y1="348" x2="916" y2="348"/><line x1="904" y1="352" x2="913" y2="352"/>
    </g>
  </g>
  <g>
    <line x1="934" y1="366" x2="948" y2="344" stroke="#cbb98f" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="951" cy="339" rx="7" ry="5" fill="#cbb98f" transform="rotate(-32 951 339)"/>
  </g>
  <rect x="838" y="390" width="132" height="5" fill="#14110d" opacity="0.45"/>
  <path d="M968 358 q16 -6 26 6 q-14 10 -28 2 z" fill="#e3d5ac"/>
</g>

<!-- Mrs. Tilly, thirty years at these stoves -->
<g>
  <path d="M344 470 q-4 -104 60 -112 q64 8 60 112 z" fill="#332b22"/>
  <path d="M404 358 q64 8 60 112 l-30 0 q4 -92 -30 -112 z" fill="#221c15" opacity="0.6"/>
  <path d="M362 356 q42 -34 84 0 l6 106 l-96 0 z" fill="#3a3226"/>
  <path d="M368 358 q36 -26 72 0 l-6 18 l-60 0 z" fill="#2a241c"/>
  <path d="M380 366 l48 0 l14 106 l-76 0 z" fill="#f0e7ce"/>
  <path d="M380 366 l16 0 l-8 106 l-22 0 z" fill="#fffaea" opacity="0.5"/>
  <path d="M420 366 l8 0 l14 106 l-16 0 z" fill="#c6bb9a" opacity="0.6"/>
  <path d="M388 366 l32 0 l0 -20 l-32 0 z" fill="#f0e7ce"/>
  <g stroke="#cbb98f" stroke-width="2">
    <line x1="390" y1="392" x2="436" y2="392"/><line x1="384" y1="428" x2="440" y2="428"/>
  </g>
  <path d="M362 360 q-24 34 -18 74 l16 -2 q-4 -34 16 -58 z" fill="#3a3226"/>
  <path d="M446 360 q24 34 18 74 l-16 -2 q4 -34 -16 -58 z" fill="#3a3226"/>
  <path d="M346 412 q-6 20 0 34 l16 -2 q-4 -16 0 -30 z" fill="#b3a184"/>
  <path d="M462 412 q6 20 0 34 l-16 -2 q4 -16 0 -30 z" fill="#b3a184"/>
  <ellipse cx="386" cy="452" rx="15" ry="10" fill="#b3a184"/>
  <ellipse cx="424" cy="452" rx="15" ry="10" fill="#c0ae90"/>
  <path d="M370 444 q40 -18 72 4 q-34 20 -74 8 z" fill="#e3d5ac"/>
  <g stroke="#8d7c62" stroke-width="1.3" stroke-linecap="round">
    <line x1="378" y1="456" x2="392" y2="460"/><line x1="416" y1="456" x2="430" y2="460"/>
  </g>
  <rect x="396" y="322" width="18" height="22" fill="#b3a184"/>
  <ellipse cx="405" cy="298" rx="23" ry="27" fill="#a08e74"/>
  <ellipse cx="409" cy="294" rx="18" ry="22" fill="#bcab8d"/>
  <path d="M382 296 q23 -30 46 0 q4 -30 -23 -30 q-27 0 -23 30 z" fill="#8e8e88"/>
  <path d="M380 292 q-6 16 2 26 l6 -6 q-6 -10 -2 -20 z" fill="#8e8e88"/>
  <path d="M430 292 q6 16 -2 26 l-6 -6 q6 -10 2 -20 z" fill="#8e8e88"/>
  <path d="M384 280 q21 -22 42 0 q-21 -10 -42 0 z" fill="#f0e7ce"/>
  <g stroke="#4a3f31" stroke-width="2.2" stroke-linecap="round">
    <line x1="389" y1="294" x2="399" y2="294"/><line x1="411" y1="294" x2="421" y2="294"/>
  </g>
  <line x1="405" y1="300" x2="403" y2="308" stroke="#8d7c62" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="397" y1="316" x2="413" y2="316" stroke="#6b5a45" stroke-width="2.2" stroke-linecap="round"/>
</g>

<!-- the wreck of the birthday feast -->
<g>
  <ellipse cx="472" cy="590" rx="380" ry="46" fill="url(#bw-kit-sh)" opacity="0.85"/>
  <path d="M96 452 L848 452 L820 486 L124 486 Z" fill="url(#bw-kit-wood)"/>
  <g stroke="#6a5637" stroke-width="1" opacity="0.35" fill="none">
    <path d="M104 462 Q 460 458 838 462"/><path d="M110 470 Q 470 466 830 470"/><path d="M118 479 Q 476 475 824 479"/>
  </g>
  <path d="M380 452 L740 452 L732 462 L372 462 Z" fill="#e3c68c" opacity="0.16"/>
  <path d="M96 452 L848 452 L844 458 L100 458 Z" fill="#a08a62"/>
  <rect x="124" y="484" width="696" height="20" fill="#4a3c2a"/>
  <rect x="140" y="504" width="20" height="112" fill="#3b2f22"/>
  <rect x="782" y="504" width="20" height="112" fill="#3b2f22"/>
  <rect x="150" y="576" width="642" height="10" fill="#332a1e"/>
  <g fill="#000" opacity="0.3">
    <ellipse cx="306" cy="462" rx="116" ry="14"/><ellipse cx="526" cy="478" rx="54" ry="9"/>
    <ellipse cx="642" cy="460" rx="48" ry="9"/><ellipse cx="762" cy="474" rx="66" ry="8"/>
    <ellipse cx="124" cy="480" rx="18" ry="5"/><ellipse cx="568" cy="466" rx="16" ry="4"/>
  </g>
  <!-- the carved bird -->
  <g>
    <ellipse cx="300" cy="450" rx="112" ry="26" fill="#e3d5ac"/>
    <ellipse cx="300" cy="446" rx="96" ry="19" fill="#cbb98f"/>
    <path d="M250 444 q26 -34 66 -26 q40 8 34 30 q-46 14 -100 -4 z" fill="#7a5a30"/>
    <path d="M258 436 q22 -24 54 -20 q-30 -2 -54 20 z" fill="#9b7a3f"/>
    <g stroke="#e3d5ac" stroke-width="2.6" stroke-linecap="round" opacity="0.85">
      <line x1="272" y1="428" x2="276" y2="444"/><line x1="284" y1="424" x2="287" y2="442"/>
      <line x1="296" y1="422" x2="298" y2="441"/><line x1="308" y1="424" x2="309" y2="442"/>
    </g>
    <path d="M326 428 q22 -8 30 6 q-16 10 -32 4 z" fill="#cbb98f"/>
    <path d="M348 430 l24 -8 l4 8 l-24 8 z" fill="#e3d5ac"/>
    <g fill="#8a6a3c">
      <path d="M228 448 q22 -14 40 0 q-20 10 -40 0 z"/><path d="M212 442 l26 -6 l3 7 l-26 6 z"/>
    </g>
    <path d="M356 450 q26 -6 42 4 q-24 8 -44 2 z" fill="#5d1f18" opacity="0.7"/>
  </g>
  <!-- carving knife and fork, laid down mid-work -->
  <g transform="rotate(-8 430 456)">
    <path d="M392 452 l58 -6 l4 8 l-60 6 z" fill="#8e8e88"/>
    <rect x="450" y="444" width="34" height="10" rx="4" fill="#2a2118"/>
  </g>
  <g transform="rotate(6 430 470)">
    <rect x="396" y="466" width="52" height="5" fill="#8e8e88"/>
    <rect x="448" y="462" width="30" height="10" rx="4" fill="#2a2118"/>
    <g stroke="#8e8e88" stroke-width="3"><line x1="392" y1="462" x2="400" y2="468"/><line x1="392" y1="474" x2="400" y2="468"/></g>
  </g>
  <!-- stacked dirty plates -->
  <g>
    <ellipse cx="520" cy="470" rx="52" ry="14" fill="#cbb98f"/>
    <ellipse cx="520" cy="462" rx="52" ry="14" fill="#e3d5ac"/>
    <ellipse cx="520" cy="454" rx="50" ry="13" fill="#cbb98f"/>
    <ellipse cx="520" cy="446" rx="50" ry="13" fill="#f0e7ce"/>
    <ellipse cx="520" cy="444" rx="32" ry="8" fill="#cbb98f"/>
    <path d="M506 440 q14 -8 26 2 q-12 8 -26 -2 z" fill="#5d1f18" opacity="0.6"/>
  </g>
  <!-- the birthday cake, one wedge gone -->
  <g>
    <path d="M596 452 l0 -34 q40 -12 80 0 l0 34 q-40 12 -80 0 z" fill="#f0e7ce"/>
    <ellipse cx="636" cy="418" rx="40" ry="12" fill="#f4ecd6"/>
    <path d="M600 424 q6 12 0 20" fill="none" stroke="#e3d5ac" stroke-width="6"/>
    <path d="M672 424 q-6 12 0 20" fill="none" stroke="#e3d5ac" stroke-width="6"/>
    <path d="M636 418 l30 -8 l-2 34 l-28 -6 z" fill="#7a5a6e" opacity="0.35"/>
    <path d="M636 418 l30 -8 l-2 34 l-28 -6 z" fill="none" stroke="#cbb98f" stroke-width="2"/>
    <g fill="#5f6b4a">
      <rect x="608" y="404" width="4" height="16" rx="2"/><rect x="624" y="400" width="4" height="18" rx="2"/>
      <rect x="646" y="400" width="4" height="18" rx="2"/><rect x="662" y="404" width="4" height="16" rx="2"/>
    </g>
    <g fill="#241b12">
      <rect x="608" y="400" width="4" height="6"/><rect x="624" y="396" width="4" height="6"/>
      <rect x="646" y="396" width="4" height="6"/><rect x="662" y="400" width="4" height="6"/>
    </g>
    <path d="M690 448 l26 -10 l6 12 l-26 10 z" fill="#f0e7ce"/>
    <g fill="#f4ecd6" opacity="0.8">
      <circle cx="588" cy="456" r="3"/><circle cx="700" cy="462" r="3"/><circle cx="712" cy="452" r="2.5"/>
    </g>
  </g>
  <!-- toppled bottle, and what it left -->
  <g transform="rotate(9 760 462)">
    <path d="M700 466 q-4 -14 0 -26 l84 0 q6 12 0 26 z" fill="#2a3324"/>
    <rect x="784" y="448" width="28" height="14" rx="4" fill="#26301f"/>
    <rect x="810" y="448" width="10" height="14" rx="3" fill="#5d1f18"/>
    <rect x="716" y="444" width="34" height="24" rx="2" fill="#e3d5ac"/>
    <g stroke="#8d7c62" stroke-width="1.3">
      <line x1="722" y1="452" x2="744" y2="452"/><line x1="722" y1="458" x2="740" y2="458"/>
    </g>
  </g>
  <path d="M690 480 q40 -10 74 4 q-36 16 -80 6 z" fill="#5d1f18" opacity="0.55"/>
  <!-- crumpled napkins and abandoned coupes -->
  <g fill="#e3d5ac">
    <path d="M170 462 q26 -22 46 -4 q10 18 -12 24 q-30 6 -34 -20 z"/>
    <path d="M180 458 q14 -8 24 2" fill="none" stroke="#cbb98f" stroke-width="2"/>
    <path d="M452 476 q22 -18 40 -2 q8 16 -12 20 q-26 4 -28 -18 z"/>
  </g>
  <g fill="#e8dcbb" opacity="0.92">
    <path d="M112 444 l20 0 l-6 16 l-4 14 l-4 0 l-4 -14 z"/>
    <ellipse cx="122" cy="474" rx="12" ry="3.5" fill="#cbb98f"/>
    <path d="M556 434 l18 0 l-5 14 l-4 12 l-4 0 l-4 -12 z"/>
    <ellipse cx="565" cy="460" rx="11" ry="3" fill="#cbb98f"/>
  </g>
  <g transform="rotate(84 800 462)">
    <path d="M790 452 l18 0 l-5 14 l-4 12 l-4 0 l-4 -12 z" fill="#e8dcbb" opacity="0.9"/>
  </g>
  <!-- cutlery, heaped for the scullery -->
  <g stroke="#8e8e88" stroke-width="3" stroke-linecap="round" opacity="0.9">
    <line x1="240" y1="474" x2="288" y2="466"/><line x1="242" y1="480" x2="292" y2="474"/>
    <line x1="246" y1="486" x2="290" y2="482"/><line x1="332" y1="474" x2="376" y2="482"/>
  </g>
</g>

<!-- foreground: the scullery corner -->
<g>
  <path d="M-20 620 l0 -78 q54 -18 106 0 l0 78 z" fill="#1b140d"/>
  <path d="M-20 542 q54 -18 106 0 l-4 8 q-48 -14 -98 0 z" fill="#3b2f22"/>
  <g fill="#5f6b4a">
    <ellipse cx="16" cy="536" rx="20" ry="12"/><ellipse cx="52" cy="530" rx="18" ry="11"/><ellipse cx="34" cy="518" rx="16" ry="10"/>
  </g>
  <g fill="#4b553b">
    <ellipse cx="16" cy="534" rx="10" ry="6"/><ellipse cx="52" cy="528" rx="9" ry="5"/>
  </g>
</g>
<g>
  <path d="M872 620 l-10 -76 l70 0 l-8 76 z" fill="#1b140d"/>
  <ellipse cx="897" cy="544" rx="35" ry="10" fill="#3b2f22"/>
  <ellipse cx="897" cy="546" rx="27" ry="7" fill="#100d09"/>
  <path d="M932 548 q26 -4 32 14 l-10 6 q-8 -14 -24 -10 z" fill="#4a3c2a"/>
  <g fill="#2a2118">
    <ellipse cx="884" cy="540" rx="9" ry="4"/><ellipse cx="906" cy="542" rx="8" ry="4"/><ellipse cx="895" cy="534" rx="7" ry="3"/>
  </g>
  <path d="M948 620 l0 -46 q30 -10 56 0 l0 46 z" fill="#241b12"/>
  <g fill="#2a3324">
    <circle cx="962" cy="576" r="9"/><circle cx="984" cy="576" r="9"/><circle cx="1000" cy="578" r="9"/>
  </g>
</g>

<!-- under the table: the scullery's overflow -->
<g>
  <rect x="168" y="540" width="608" height="9" fill="#3b2f22"/>
  <g>
    <path d="M216 540 l0 -34 q30 -10 60 0 l0 34 z" fill="#4a3c2a"/>
    <g stroke="#3f3223" stroke-width="2">
      <line x1="216" y1="518" x2="276" y2="518"/><line x1="216" y1="528" x2="276" y2="528"/>
      <line x1="236" y1="506" x2="236" y2="540"/><line x1="256" y1="506" x2="256" y2="540"/>
    </g>
    <ellipse cx="246" cy="506" rx="30" ry="7" fill="#2a2118"/>
  </g>
  <g>
    <path d="M320 540 l6 -40 q26 -8 52 0 l6 40 z" fill="#2f2519"/>
    <ellipse cx="352" cy="500" rx="26" ry="7" fill="#4a3c2a"/>
    <ellipse cx="352" cy="500" rx="18" ry="4" fill="#141009"/>
  </g>
  <g>
    <path d="M600 540 l-8 -44 q34 -10 68 0 l-8 44 z" fill="#6b5a45"/>
    <ellipse cx="626" cy="496" rx="34" ry="8" fill="#8a7550"/>
    <ellipse cx="626" cy="496" rx="24" ry="5" fill="#241b12"/>
    <path d="M592 508 q34 -8 68 0" fill="none" stroke="#4a3c2a" stroke-width="3"/>
  </g>
  <g>
    <path d="M690 540 l0 -30 q22 -8 44 0 l0 30 z" fill="#4a3c2a"/>
    <ellipse cx="712" cy="510" rx="22" ry="6" fill="#332a1e"/>
  </g>
  <rect x="168" y="549" width="608" height="6" fill="#241b12"/>
</g>
<g>
  <rect x="380" y="504" width="90" height="12" fill="#3b2f22"/>
  <rect x="386" y="516" width="10" height="76" fill="#2f2519"/>
  <rect x="454" y="516" width="10" height="76" fill="#2f2519"/>
  <rect x="382" y="586" width="86" height="8" fill="#241b12"/>
</g>

<!-- herbs and onions, hung to dry from the beam -->
<g class="fx-sway" style="--d:.7s;transform-origin:50% 0">
  <line x1="86" y1="38" x2="86" y2="70" stroke="#6b5a45" stroke-width="3"/>
  <g fill="#5f6b4a">
    <path d="M86 68 q-26 26 -20 62 q20 14 40 0 q6 -36 -20 -62 z"/>
  </g>
  <g stroke="#4b553b" stroke-width="2">
    <line x1="76" y1="82" x2="72" y2="126"/><line x1="86" y1="80" x2="86" y2="130"/><line x1="96" y1="82" x2="100" y2="126"/>
  </g>
  <g fill="#8a7550">
    <ellipse cx="130" cy="86" rx="13" ry="16"/><ellipse cx="148" cy="100" rx="12" ry="15"/><ellipse cx="128" cy="116" rx="12" ry="15"/>
  </g>
  <line x1="138" y1="38" x2="136" y2="76" stroke="#6b5a45" stroke-width="3"/>
</g>
<g class="fx-sway" style="--d:2.5s;transform-origin:50% 0">
  <line x1="912" y1="38" x2="912" y2="72" stroke="#6b5a45" stroke-width="3"/>
  <path d="M912 70 q-24 24 -18 58 q18 12 36 0 q6 -34 -18 -58 z" fill="#4b553b"/>
  <g stroke="#3d4a30" stroke-width="2">
    <line x1="903" y1="82" x2="900" y2="122"/><line x1="912" y1="80" x2="912" y2="126"/><line x1="921" y1="82" x2="924" y2="122"/>
  </g>
  <g fill="#7a4a20">
    <ellipse cx="956" cy="92" rx="12" ry="15"/><ellipse cx="972" cy="108" rx="11" ry="14"/>
  </g>
  <line x1="960" y1="38" x2="958" y2="82" stroke="#6b5a45" stroke-width="3"/>
</g>

<path d="M0 620 L0 512 L138 620 Z" fill="#0f0c08" opacity="0.85"/>
<path d="M1000 620 L1000 512 L862 620 Z" fill="#0f0c08" opacity="0.85"/>
<rect width="1000" height="620" fill="url(#bw-kit-vig)"/>
`,
  },

  guestwing: {
    viewBox: "0 0 1000 620",
    hotspots: {
      h_valise: { x: 26, y: 62 },
      h_bag: { x: 74, y: 54 },
      h_jewelcase: { x: 36, y: 24 },
    },
    svg: `
<defs>
  <linearGradient id="bw-gw-wall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2b2119"/><stop offset="1" stop-color="#181209"/>
  </linearGradient>
  <linearGradient id="bw-gw-night" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#1b2436"/><stop offset="1" stop-color="#0d1119"/>
  </linearGradient>
  <linearGradient id="bw-gw-linen" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#f0e7ce"/><stop offset="1" stop-color="#cbb98f"/>
  </linearGradient>
  <linearGradient id="bw-gw-wain" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3c2f20"/><stop offset="1" stop-color="#180f08"/>
  </linearGradient>
  <linearGradient id="bw-gw-floor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#2c2218"/><stop offset="1" stop-color="#120e08"/>
  </linearGradient>
  <linearGradient id="bw-gw-runner" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#421611"/><stop offset="1" stop-color="#6d2a20"/>
  </linearGradient>
  <linearGradient id="bw-gw-doorL" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#1a130c"/><stop offset="1" stop-color="#3d3021"/>
  </linearGradient>
  <linearGradient id="bw-gw-doorR" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3d3021"/><stop offset="1" stop-color="#1a130c"/>
  </linearGradient>
  <linearGradient id="bw-gw-leather" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6a4d30"/><stop offset="1" stop-color="#33230f"/>
  </linearGradient>
  <radialGradient id="bw-gw-sh" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#000" stop-opacity="0.62"/><stop offset="1" stop-color="#000" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-gw-glow" cx="0.5" cy="0.36" r="0.7">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.26"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-gw-sconce" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd98a" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#ffd98a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-gw-warm" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#d9a441" stop-opacity="0.42"/>
    <stop offset="1" stop-color="#d9a441" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-gw-cold" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#8fa4c0" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#8fa4c0" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="bw-gw-vig" cx="0.5" cy="0.45" r="0.78">
    <stop offset="0.44" stop-color="#000" stop-opacity="0"/>
    <stop offset="1" stop-color="#000" stop-opacity="0.76"/>
  </radialGradient>
  <clipPath id="bw-gw-clipa"><rect x="118" y="136" width="264" height="334"/></clipPath>
  <clipPath id="bw-gw-clipb"><rect x="618" y="136" width="264" height="334"/></clipPath>
</defs>

<rect width="1000" height="620" fill="url(#bw-gw-wall)"/>
<rect width="1000" height="620" fill="url(#bw-gw-glow)"/>

<!-- corridor ceiling and cornice -->
<rect x="0" y="0" width="1000" height="46" fill="#191309"/>
<rect x="0" y="46" width="1000" height="9" fill="#3b2f22"/>
<rect x="0" y="46" width="1000" height="2.5" fill="#5e4a30" opacity="0.75"/>
<rect x="0" y="55" width="1000" height="5" fill="#0d0904" opacity="0.6"/>
<g stroke="#221a11" stroke-width="3" opacity="0.8">
  <line x1="0" y1="16" x2="1000" y2="16"/><line x1="150" y1="0" x2="176" y2="46"/>
  <line x1="440" y1="0" x2="452" y2="46"/><line x1="560" y1="0" x2="548" y2="46"/>
  <line x1="850" y1="0" x2="824" y2="46"/>
</g>
<rect x="0" y="92" width="1000" height="5" fill="#33271a"/>
<rect x="0" y="92" width="1000" height="1.6" fill="#5a4830" opacity="0.8"/>
<rect x="0" y="97" width="1000" height="4" fill="#0d0904" opacity="0.5"/>

<!-- wainscot on the piers -->
<g>
  <rect x="0" y="384" width="1000" height="88" fill="url(#bw-gw-wain)"/>
  <rect x="0" y="384" width="1000" height="6" fill="#3b2f22"/>
  <rect x="0" y="384" width="1000" height="2" fill="#5a4830" opacity="0.75"/>
  <rect x="0" y="390" width="1000" height="3" fill="#0c0804" opacity="0.55"/>
  <g fill="#1a1209">
    <rect x="20" y="400" width="62" height="54"/><rect x="412" y="400" width="80" height="54"/>
    <rect x="508" y="400" width="80" height="54"/><rect x="918" y="400" width="62" height="54"/>
  </g>
  <g fill="none" stroke="#4a3a25" stroke-width="2" opacity="0.7">
    <path d="M20 454 L20 400 L82 400"/><path d="M412 454 L412 400 L492 400"/>
    <path d="M508 454 L508 400 L588 400"/><path d="M918 454 L918 400 L980 400"/>
  </g>
  <g fill="none" stroke="#0a0703" stroke-width="2.4" opacity="0.85">
    <path d="M20 454 L82 454 L82 400"/><path d="M412 454 L492 454 L492 400"/>
    <path d="M508 454 L588 454 L588 400"/><path d="M918 454 L980 454 L980 400"/>
  </g>
  <g fill="#2c2116" opacity="0.5">
    <rect x="28" y="408" width="46" height="38"/><rect x="420" y="408" width="64" height="38"/>
    <rect x="516" y="408" width="64" height="38"/><rect x="926" y="408" width="46" height="38"/>
  </g>
  <rect x="0" y="458" width="1000" height="14" fill="#2a2015"/>
  <rect x="0" y="458" width="1000" height="3" fill="#4b3a25" opacity="0.75"/>
  <rect x="0" y="466" width="1000" height="8" fill="#1b140d"/>
  <rect x="0" y="470" width="1000" height="5" fill="#070503" opacity="0.7"/>
</g>

<!-- floor and the runner down the middle -->
<rect x="0" y="472" width="1000" height="148" fill="url(#bw-gw-floor)"/>
<g stroke="#271e14" stroke-width="2">
  <line x1="0" y1="498" x2="1000" y2="498"/><line x1="0" y1="530" x2="1000" y2="530"/>
  <line x1="0" y1="570" x2="1000" y2="570"/>
  <line x1="500" y1="472" x2="120" y2="620"/><line x1="500" y1="472" x2="880" y2="620"/>
  <line x1="500" y1="472" x2="-160" y2="620"/><line x1="500" y1="472" x2="1160" y2="620"/>
</g>
<g stroke="#4a3a24" stroke-width="1.1" opacity="0.25">
  <line x1="0" y1="501" x2="1000" y2="501"/><line x1="0" y1="533" x2="1000" y2="533"/><line x1="0" y1="573" x2="1000" y2="573"/>
</g>
<g stroke="#0a0705" stroke-width="2" opacity="0.55">
  <line x1="0" y1="496" x2="1000" y2="496"/><line x1="0" y1="528" x2="1000" y2="528"/><line x1="0" y1="568" x2="1000" y2="568"/>
</g>
<g stroke="#3a2c1c" stroke-width="1" opacity="0.28" fill="none">
  <path d="M0 486 Q 280 482 560 490 Q 800 494 1000 486"/>
  <path d="M0 550 Q 260 545 520 553 Q 780 558 1000 548"/>
</g>
<g opacity="0.05" fill="#f0c67e">
  <ellipse cx="500" cy="560" rx="330" ry="46"/><ellipse cx="500" cy="530" rx="230" ry="34"/>
</g>
<path d="M286 620 L714 620 L620 476 L380 476 Z" fill="url(#bw-gw-runner)" opacity="0.9"/>
<path d="M380 476 L620 476 L628 488 L372 488 Z" fill="#000" opacity="0.3"/>
<g stroke="#8a3a2a" stroke-width="1" opacity="0.2">
  <path d="M380 476 L286 620"/><path d="M440 476 L400 620"/><path d="M500 476 L500 620"/>
  <path d="M560 476 L600 620"/><path d="M620 476 L714 620"/>
</g>
<g stroke="#2c100c" stroke-width="1.4" opacity="0.35">
  <path d="M366 500 L634 500"/><path d="M348 528 L652 528"/><path d="M324 566 L676 566"/><path d="M300 604 L700 604"/>
</g>
<path d="M318 620 L682 620 L606 486 L394 486 Z" fill="none" stroke="#3a2418" stroke-width="7"/>
<g fill="#6b5326" opacity="0.5">
  <path d="M500 508 l16 -11 l16 11 l-16 11 z"/><path d="M468 508 l-16 -11 l-16 11 l16 11 z"/>
  <path d="M500 556 l20 -14 l20 14 l-20 14 z"/><path d="M460 556 l-20 -14 l-20 14 l20 14 z"/>
  <path d="M500 606 l24 -16 l24 16 l-24 16 z"/><path d="M452 606 l-24 -16 l-24 16 l24 16 z"/>
</g>

<!-- =============== GORDON'S ROOM: papers everywhere, and a packed valise -->
<g clip-path="url(#bw-gw-clipa)">
  <rect x="118" y="136" width="264" height="334" fill="#251d14"/>
  <g opacity="0.58"><rect x="118" y="136" width="264" height="334" fill="url(#bw-gw-warm)" class="fx-glow" style="--d:2.8s"/></g>
  <rect x="118" y="372" width="264" height="98" fill="#1c1610"/>
  <rect x="118" y="372" width="264" height="6" fill="#0a0704" opacity="0.6"/>
  <g stroke="#2f2418" stroke-width="1.4" opacity="0.55">
    <line x1="118" y1="404" x2="382" y2="404"/><line x1="118" y1="438" x2="382" y2="438"/>
  </g>
  <rect x="118" y="368" width="264" height="7" fill="#3b2f22"/>
  <!-- window, curtain shoved aside -->
  <rect x="200" y="168" width="76" height="108" fill="url(#bw-gw-night)" stroke="#3a2d1e" stroke-width="6"/>
  <line x1="238" y1="168" x2="238" y2="276" stroke="#3a2d1e" stroke-width="4"/>
  <line x1="200" y1="222" x2="276" y2="222" stroke="#3a2d1e" stroke-width="4"/>
  <g opacity="0.34">
    <g stroke="#8fa4c0" stroke-width="1.2" class="fx-drift-slow" style="--d:.6s">
      <line x1="210" y1="180" x2="204" y2="204"/><line x1="252" y1="192" x2="246" y2="216"/>
    </g>
  </g>
  <path d="M190 160 l26 0 l-4 122 q-12 6 -24 2 z" fill="#4a2a20"/>
  <path d="M276 160 l24 0 l-2 124 q-11 6 -22 2 z" fill="#4a2a20"/>
  <!-- the writing table, drowning -->
  <rect x="116" y="316" width="104" height="12" fill="#3b2f22"/>
  <rect x="124" y="328" width="88" height="46" fill="#2a2118"/>
  <rect x="120" y="328" width="9" height="46" fill="#241b12"/>
  <rect x="206" y="328" width="9" height="46" fill="#241b12"/>
  <g fill="none" stroke="#3b2f22" stroke-width="2"><rect x="136" y="338" width="64" height="26"/></g>
  <ellipse cx="168" cy="351" rx="8" ry="3" fill="#9b7a3f"/>
  <!-- table lamp: the room's motive for light -->
  <ellipse cx="166" cy="316" rx="19" ry="6" fill="#6b5326"/>
  <rect x="162" y="286" width="8" height="30" fill="#6b5326"/>
  <path d="M142 274 q24 -18 48 0 l0 12 q-24 8 -48 0 z" fill="#8a6c30"/>
  <path d="M142 274 q24 -18 48 0 l0 4 q-24 -14 -48 0 z" fill="#b08c42"/>
  <path d="M146 286 q20 6 40 0 l0 2 q-20 8 -40 0 z" fill="#ffd08a" opacity="0.5"/>
  <path d="M150 292 L118 372 L214 372 L182 292 Z" fill="#ffd98a" opacity="0.07"/>
  <g opacity="0.64"><ellipse cx="166" cy="290" rx="25" ry="8" fill="#ffd98a" class="fx-glow" style="--d:1.5s"/></g>
  <g opacity="0.58"><rect x="96" y="220" width="180" height="200" fill="url(#bw-gw-sconce)" class="fx-glow" style="--d:.4s"/></g>
  <!-- business papers, on the table and all over the floor -->
  <g fill="#e3d5ac">
    <path d="M126 314 l52 -8 l3 14 l-52 8 z"/>
    <path d="M138 306 l50 -6 l3 12 l-50 6 z"/>
    <path d="M180 316 l42 4 l-2 12 l-42 -4 z"/>
  </g>
  <g fill="#f0e7ce">
    <path d="M126 396 l52 -10 l6 22 l-52 10 z"/>
    <path d="M170 408 l50 6 l-3 22 l-50 -6 z"/>
    <path d="M132 428 l56 4 l-2 20 l-56 -4 z"/>
    <path d="M212 386 l46 -8 l5 18 l-46 8 z"/>
    <path d="M250 428 l48 8 l-4 20 l-48 -8 z"/>
    <path d="M188 452 l54 -4 l1 18 l-54 4 z"/>
    <path d="M300 400 l48 10 l-5 18 l-48 -10 z"/>
    <path d="M296 448 l52 2 l0 20 l-52 -2 z"/>
    <path d="M122 456 l40 6 l-2 16 l-40 -6 z"/>
  </g>
  <g fill="#000" opacity="0.28">
    <path d="M130 418 l52 -10 l4 8 l-52 10 z"/><path d="M174 430 l50 6 l-2 8 l-50 -6 z"/>
    <path d="M136 448 l56 4 l-1 8 l-56 -4 z"/><path d="M254 448 l48 8 l-2 8 l-48 -8 z"/>
    <path d="M304 418 l48 10 l-3 8 l-48 -10 z"/><path d="M300 468 l52 2 l0 8 l-52 -2 z"/>
  </g>
  <g stroke="#8d7c62" stroke-width="1.3" opacity="0.85">
    <line x1="132" y1="402" x2="176" y2="394"/><line x1="134" y1="408" x2="178" y2="400"/>
    <line x1="176" y1="416" x2="214" y2="420"/><line x1="177" y1="422" x2="215" y2="426"/>
    <line x1="138" y1="436" x2="184" y2="439"/><line x1="138" y1="442" x2="180" y2="445"/>
    <line x1="256" y1="436" x2="292" y2="442"/><line x1="255" y1="442" x2="291" y2="448"/>
    <line x1="306" y1="408" x2="342" y2="416"/><line x1="304" y1="414" x2="340" y2="422"/>
    <line x1="302" y1="456" x2="342" y2="457"/><line x1="302" y1="462" x2="338" y2="463"/>
  </g>
  <g fill="#a8352a" opacity="0.8">
    <rect x="163" y="390" width="12" height="9"/><rect x="282" y="434" width="11" height="9"/><rect x="335" y="404" width="11" height="9"/>
  </g>
  <!-- luggage rack and THE VALISE, packed and waiting -->
  <g transform="translate(34 0)">
    <g stroke="#3b2f22" stroke-width="7">
      <line x1="168" y1="404" x2="206" y2="358"/><line x1="206" y1="404" x2="168" y2="358"/>
      <line x1="252" y1="404" x2="290" y2="358"/><line x1="290" y1="404" x2="252" y2="358"/>
    </g>
    <rect x="160" y="352" width="138" height="10" fill="#4a3c2a"/>
    <!-- lid, thrown back -->
    <path d="M166 352 l124 0 l14 -50 l-152 0 z" fill="#3b2f22"/>
    <path d="M174 348 l108 0 l10 -40 l-128 0 z" fill="#5a4530"/>
    <path d="M164 308 l128 0 l-2 6 l-124 0 z" fill="#7d6244" opacity="0.6"/>
    <g stroke="#4a3524" stroke-width="2" opacity="0.9">
      <line x1="182" y1="340" x2="284" y2="340"/><line x1="186" y1="328" x2="288" y2="328"/><line x1="190" y1="316" x2="290" y2="316"/>
    </g>
    <!-- folded shirts -->
    <rect x="172" y="330" width="112" height="12" rx="2" fill="#e3d5ac"/>
    <rect x="170" y="340" width="116" height="12" rx="2" fill="#f0e7ce"/>
    <g stroke="#cbb98f" stroke-width="1.4">
      <line x1="228" y1="330" x2="228" y2="342"/><line x1="226" y1="340" x2="226" y2="352"/>
    </g>
    <!-- the broker's envelope, half under the linen -->
    <g transform="rotate(-7 236 330)">
      <rect x="200" y="312" width="74" height="34" rx="1.5" fill="#f4ecd6"/>
      <path d="M200 312 l74 0 l-37 20 z" fill="#e3d5ac"/>
      <path d="M200 312 l74 0 l-37 20 z" fill="none" stroke="#cbb98f" stroke-width="1.4"/>
      <g stroke="#8d7c62" stroke-width="1.3">
        <line x1="208" y1="336" x2="248" y2="336"/><line x1="208" y1="341" x2="240" y2="341"/>
      </g>
      <rect x="252" y="316" width="16" height="12" fill="#a8352a" opacity="0.85"/>
    </g>
    <!-- body of the valise -->
    <path d="M164 352 l132 0 l-6 52 l-120 0 z" fill="url(#bw-gw-leather)"/>
  <path d="M282 352 l14 0 l-6 52 l-16 0 z" fill="#241708" opacity="0.55"/>
    <path d="M164 352 l132 0 l-2 8 l-128 0 z" fill="#6b5326"/>
    <g fill="#3b2f22">
      <rect x="192" y="352" width="14" height="52"/><rect x="254" y="352" width="14" height="52"/>
    </g>
    <g fill="#9b7a3f">
      <rect x="190" y="374" width="18" height="10" rx="2"/><rect x="252" y="374" width="18" height="10" rx="2"/>
    </g>
    <path d="M216 352 q14 -20 28 0" fill="none" stroke="#2a2118" stroke-width="6"/>
    <ellipse cx="230" cy="408" rx="66" ry="7" fill="#14110d" opacity="0.45"/>
  </g>
  <!-- wardrobe, one door left standing open -->
  <g>
    <ellipse cx="342" cy="380" rx="60" ry="10" fill="#000" opacity="0.4"/>
    <rect x="304" y="172" width="76" height="204" fill="#2a2118"/>
    <rect x="300" y="162" width="84" height="12" fill="#3b2f22"/>
    <rect x="304" y="174" width="32" height="200" fill="#100d09"/>
    <path d="M336 174 l0 200 l-16 -6 l0 -188 z" fill="#1c1610"/>
    <g fill="#2a3042">
      <rect x="308" y="196" width="9" height="86" rx="3"/><rect x="320" y="192" width="8" height="92" rx="3"/>
    </g>
    <rect x="306" y="188" width="26" height="5" fill="#4a3c2a"/>
    <rect x="338" y="174" width="42" height="200" fill="#33271a"/>
    <rect x="338" y="174" width="6" height="200" fill="#4d3c26" opacity="0.6"/>
    <rect x="374" y="174" width="6" height="200" fill="#0e0a05" opacity="0.6"/>
    <rect x="345" y="188" width="28" height="80" fill="none" stroke="#241b12" stroke-width="3"/>
    <rect x="345" y="280" width="28" height="80" fill="none" stroke="#241b12" stroke-width="3"/>
    <ellipse cx="342" cy="272" rx="4" ry="8" fill="#9b7a3f"/>
  </g>
  <!-- put away on the top of the press: a lady's travelling jewel case, locked -->
  <g>
    <ellipse cx="348" cy="163" rx="33" ry="4" fill="#000" opacity="0.55"/>
    <rect x="317" y="145" width="62" height="18" rx="2" fill="url(#bw-gw-leather)"/>
    <path d="M317 146 q31 -13 62 0 z" fill="#54402a"/>
    <path d="M319 145 q29 -11 58 0" fill="none" stroke="#8f6f47" stroke-width="1.6" opacity="0.75"/>
    <rect x="317" y="150" width="62" height="3" fill="#1d140c" opacity="0.75"/>
    <rect x="319" y="154" width="58" height="3" fill="#7a5836" opacity="0.45"/>
    <g fill="#9b7a3f">
      <rect x="317" y="145" width="5" height="18"/><rect x="374" y="145" width="5" height="18"/>
      <rect x="341" y="148" width="12" height="10" rx="2"/>
    </g>
    <rect x="345" y="151" width="4" height="4" rx="1" fill="#e8dcbb"/>
    <rect x="317" y="160" width="62" height="3" fill="#120c07" opacity="0.6"/>
  </g>
</g>
<rect x="100" y="118" width="300" height="368" fill="none" stroke="#33271a" stroke-width="16"/>
<rect x="100" y="118" width="300" height="368" fill="none" stroke="#3b2f22" stroke-width="5"/>
<rect x="108" y="126" width="284" height="352" fill="none" stroke="#241b12" stroke-width="4"/>
<g fill="none" stroke="#5e4a30" stroke-width="2" opacity="0.55">
  <path d="M94 486 L94 112 L406 112"/>
</g>
<g fill="none" stroke="#0b0703" stroke-width="3" opacity="0.6">
  <path d="M406 112 L406 492 L94 492"/>
</g>

<!-- =============== DR. HALE'S ROOM: tidy as a hospital ward -->
<g clip-path="url(#bw-gw-clipb)">
  <rect x="618" y="136" width="264" height="334" fill="#221b14"/>
  <rect x="618" y="136" width="264" height="334" fill="url(#bw-gw-cold)" opacity="0.9"/>
  <rect x="618" y="376" width="264" height="94" fill="#1b1610"/>
  <rect x="618" y="376" width="264" height="6" fill="#0a0704" opacity="0.6"/>
  <g stroke="#2b241c" stroke-width="1.4" opacity="0.5">
    <line x1="618" y1="408" x2="882" y2="408"/><line x1="618" y1="442" x2="882" y2="442"/>
  </g>
  <rect x="618" y="372" width="264" height="7" fill="#3b2f22"/>
  <!-- window, blind drawn square to the sill -->
  <rect x="638" y="164" width="88" height="118" fill="url(#bw-gw-night)" stroke="#3a2d1e" stroke-width="6"/>
  <rect x="638" y="164" width="88" height="72" fill="#cbb98f"/>
  <rect x="638" y="164" width="88" height="20" fill="#e6d8b2" opacity="0.6"/>
  <rect x="638" y="220" width="88" height="16" fill="#a08f6c" opacity="0.5"/>
  <rect x="638" y="232" width="88" height="6" fill="#8a7550"/>
  <line x1="682" y1="238" x2="682" y2="252" stroke="#8a7550" stroke-width="2"/>
  <circle cx="682" cy="254" r="4" fill="#8a7550"/>
  <line x1="682" y1="238" x2="682" y2="282" stroke="#3a2d1e" stroke-width="3"/>
  <rect x="600" y="150" width="180" height="220" fill="url(#bw-gw-cold)"/>
  <!-- the narrow iron bed, squared to the wall -->
  <g>
    <rect x="632" y="286" width="10" height="132" fill="#4a463e"/>
    <rect x="626" y="278" width="22" height="10" rx="4" fill="#6b6558"/>
    <g fill="#4a463e">
      <rect x="652" y="296" width="6" height="34"/><rect x="668" y="296" width="6" height="34"/><rect x="684" y="296" width="6" height="34"/>
    </g>
    <rect x="632" y="292" width="62" height="7" fill="#6b6558"/>
    <rect x="862" y="316" width="9" height="102" fill="#4a463e"/>
    <rect x="856" y="310" width="20" height="9" rx="4" fill="#6b6558"/>
    <rect x="640" y="330" width="232" height="18" fill="#8a7550"/>
    <ellipse cx="756" cy="426" rx="180" ry="20" fill="url(#bw-gw-sh)" opacity="0.8"/>
    <path d="M638 348 l236 0 l6 44 l-248 0 z" fill="url(#bw-gw-linen)"/>
    <path d="M700 348 q10 24 4 44 l14 0 q6 -22 -4 -44 z" fill="#dccfa8" opacity="0.6"/>
    <path d="M812 348 q-8 24 -2 44 l-14 0 q-6 -22 4 -44 z" fill="#dccfa8" opacity="0.5"/>
    <path d="M638 348 l236 0 l2 12 l-240 0 z" fill="#f4ecd6"/>
    <g stroke="#cbb98f" stroke-width="2">
      <line x1="642" y1="372" x2="878" y2="372"/><line x1="640" y1="382" x2="880" y2="382"/>
    </g>
    <path d="M636 392 l248 0 l4 10 l-256 0 z" fill="#a89873"/>
    <ellipse cx="686" cy="336" rx="44" ry="6" fill="#000" opacity="0.35"/>
    <rect x="646" y="312" width="76" height="22" rx="6" fill="#f0e7ce"/>
    <rect x="650" y="314" width="68" height="8" rx="4" fill="#f4ecd6"/>
    <g fill="#4a463e">
      <rect x="644" y="402" width="9" height="20"/><rect x="860" y="402" width="9" height="20"/>
    </g>
  </g>
  <!-- THE BLACK MEDICAL BAG, open on the counterpane -->
  <g>
    <ellipse cx="742" cy="352" rx="56" ry="8" fill="#14110d" opacity="0.4"/>
    <path d="M700 350 l0 -18 q0 -26 42 -26 q42 0 42 26 l0 18 z" fill="#171310"/>
    <path d="M700 350 l0 -18 q0 -22 30 -25 q-18 8 -18 25 l0 18 z" fill="#272220" opacity="0.7"/>
    <path d="M770 308 q14 6 14 24 l0 18 l-10 0 l0 -18 q0 -16 -8 -22 z" fill="#0b0908" opacity="0.6"/>
    <path d="M700 332 q42 -20 84 0 l0 -6 q-42 -20 -84 0 z" fill="#2a2118"/>
    <path d="M698 320 q-16 -10 -12 -24 q28 -8 56 -8 q28 0 56 8 q4 14 -12 24 q-44 -14 -88 0 z" fill="#100d0a"/>
    <path d="M706 300 q36 -10 72 0 l0 8 q-36 -10 -72 0 z" fill="#3b2f22"/>
    <g fill="#9b7a3f">
      <rect x="684" y="294" width="116" height="6" rx="3"/>
      <rect x="736" y="290" width="14" height="12" rx="3"/>
    </g>
    <path d="M718 292 q24 -30 48 0" fill="none" stroke="#1e1a16" stroke-width="7"/>
    <path d="M718 292 q24 -30 48 0" fill="none" stroke="#3b2f22" stroke-width="2"/>
    <!-- ranked vials, catching the corridor light -->
    <g fill="#cbb98f">
      <rect x="708" y="304" width="9" height="20" rx="2"/><rect x="722" y="302" width="9" height="22" rx="2"/>
      <rect x="736" y="302" width="9" height="22" rx="2"/><rect x="750" y="302" width="9" height="22" rx="2"/>
      <rect x="764" y="304" width="9" height="20" rx="2"/>
    </g>
    <g fill="#5f6b4a">
      <rect x="722" y="308" width="9" height="16"/><rect x="750" y="308" width="9" height="16"/>
    </g>
    <g fill="#7a4a20"><rect x="736" y="306" width="9" height="18"/></g>
    <g fill="#e3d5ac" opacity="0.7">
      <rect x="708" y="302" width="9" height="4"/><rect x="764" y="302" width="9" height="4"/>
    </g>
    <path d="M700 350 l84 0 l0 6 l-84 0 z" fill="#0f0d0a"/>
    <path d="M706 336 l0 14" stroke="#3b2f22" stroke-width="2" opacity="0.8"/>
    <path d="M778 336 l0 14" stroke="#3b2f22" stroke-width="2" opacity="0.8"/>
  </g>
  <!-- stethoscope, folded exactly -->
  <g>
    <path d="M800 360 q22 -6 26 12 q-4 16 -22 12 q-16 -6 -4 -24 z" fill="none" stroke="#2a2118" stroke-width="4"/>
    <circle cx="818" cy="382" r="8" fill="#8e8e88"/>
    <circle cx="818" cy="382" r="4" fill="#4a463e"/>
  </g>
  <!-- nightstand, everything squared -->
  <g>
    <ellipse cx="850" cy="472" rx="46" ry="9" fill="#000" opacity="0.4"/>
    <rect x="820" y="418" width="60" height="8" fill="#3b2f22"/>
    <rect x="820" y="418" width="60" height="2" fill="#5c4a30" opacity="0.6"/>
    <rect x="826" y="426" width="48" height="44" fill="#2a2118"/>
    <rect x="832" y="434" width="36" height="14" fill="none" stroke="#3b2f22" stroke-width="2"/>
    <ellipse cx="850" cy="441" rx="6" ry="3" fill="#9b7a3f"/>
    <path d="M834 418 l0 -20 l16 0 l0 20 z" fill="#efe8d2" opacity="0.85"/>
    <path d="M836 406 l12 0 l0 12 l-12 0 z" fill="#cbd6e4" opacity="0.5"/>
    <g fill="none" stroke="#9b7a3f" stroke-width="1.8">
      <circle cx="860" cy="410" r="7"/><circle cx="874" cy="410" r="7"/><line x1="867" y1="410" x2="867" y2="410"/>
    </g>
  </g>
  <!-- coat folded on the chair, no fold out of place -->
  <g>
    <rect x="626" y="418" width="8" height="52" fill="#3b2f22"/>
    <rect x="620" y="420" width="70" height="10" fill="#3b2f22"/>
    <path d="M622 420 l66 0 l-4 -30 q-30 -8 -58 0 z" fill="#1e1a16"/>
    <path d="M628 396 l54 0 l0 6 l-54 0 z" fill="#2a2118"/>
    <rect x="636" y="404" width="38" height="6" fill="#e3d5ac" opacity="0.5"/>
  </g>
  <g stroke="#241b12" stroke-width="2" opacity="0.7">
    <line x1="618" y1="430" x2="882" y2="430"/><line x1="618" y1="456" x2="882" y2="456"/>
  </g>
</g>
<rect x="600" y="118" width="300" height="368" fill="none" stroke="#33271a" stroke-width="16"/>
<rect x="600" y="118" width="300" height="368" fill="none" stroke="#3b2f22" stroke-width="5"/>
<rect x="608" y="126" width="284" height="352" fill="none" stroke="#241b12" stroke-width="4"/>
<g fill="none" stroke="#5e4a30" stroke-width="2" opacity="0.55">
  <path d="M594 486 L594 112 L906 112"/>
</g>
<g fill="none" stroke="#0b0703" stroke-width="3" opacity="0.6">
  <path d="M906 112 L906 492 L594 492"/>
</g>

<!-- both doors standing open into the corridor -->
<g>
  <path d="M22 512 L100 476 L150 620 L20 620 Z" fill="#000" opacity="0.3"/>
  <path d="M100 122 L22 88 L22 512 L100 476 Z" fill="url(#bw-gw-doorL)"/>
  <path d="M100 122 L22 88 L22 100 L100 132 Z" fill="#3b2f22"/>
  <g fill="none" stroke="#3b2f22" stroke-width="4">
    <path d="M92 156 L34 130 L34 268 L92 282 Z"/><path d="M92 316 L34 306 L34 442 L92 440 Z"/>
  </g>
  <ellipse cx="90" cy="306" rx="8" ry="10" fill="#9b7a3f"/>
  <ellipse cx="88.5" cy="303" rx="3" ry="3.6" fill="#e0c07a" opacity="0.7"/>
  <g fill="#6b5326">
    <rect x="20" y="160" width="6" height="20" rx="2"/><rect x="20" y="410" width="6" height="20" rx="2"/>
  </g>
  <path d="M100 122 L100 476 L96 474 L96 126 Z" fill="#5c4830" opacity="0.5"/>
</g>
<g>
  <path d="M978 512 L900 476 L850 620 L980 620 Z" fill="#000" opacity="0.3"/>
  <path d="M900 122 L978 88 L978 512 L900 476 Z" fill="url(#bw-gw-doorR)"/>
  <path d="M900 122 L978 88 L978 100 L900 132 Z" fill="#3b2f22"/>
  <g fill="none" stroke="#3b2f22" stroke-width="4">
    <path d="M908 156 L966 130 L966 268 L908 282 Z"/><path d="M908 316 L966 306 L966 442 L908 440 Z"/>
  </g>
  <ellipse cx="910" cy="306" rx="8" ry="10" fill="#9b7a3f"/>
  <ellipse cx="908.5" cy="303" rx="3" ry="3.6" fill="#e0c07a" opacity="0.7"/>
  <g fill="#6b5326">
    <rect x="974" y="160" width="6" height="20" rx="2"/><rect x="974" y="410" width="6" height="20" rx="2"/>
  </g>
  <path d="M900 122 L900 476 L904 474 L904 126 Z" fill="#5c4830" opacity="0.5"/>
</g>

<!-- the corridor sconce, and what little it can do -->
<rect x="340" y="60" width="320" height="380" fill="url(#bw-gw-sconce)" class="fx-glow" style="--d:2.1s"/>
<g>
  <path d="M486 246 l28 0 l-6 -28 l-16 0 z" fill="#3b2f22"/>
  <rect x="492" y="212" width="16" height="10" fill="#6b5326"/>
  <path d="M462 212 q38 -30 76 0 l-6 8 q-32 -22 -64 0 z" fill="#9b7a3f"/>
  <path d="M464 210 q36 -26 72 0" fill="none" stroke="#e2c384" stroke-width="1.6" opacity="0.55"/>
  <path d="M486 246 l28 0 l-2 -6 l-24 0 z" fill="#14100a" opacity="0.6"/>
  <g fill="#f0e7ce">
    <rect x="474" y="176" width="9" height="34" rx="2"/><rect x="496" y="170" width="9" height="40" rx="2"/>
    <rect x="518" y="176" width="9" height="34" rx="2"/>
  </g>
  <g fill="#ffd98a">
    <ellipse cx="478" cy="172" rx="5" ry="9" class="fx-flame" style="--d:.25s"/>
    <ellipse cx="500" cy="166" rx="5.5" ry="10" class="fx-flame" style="--d:1.85s"/>
    <ellipse cx="522" cy="172" rx="5" ry="9" class="fx-flame" style="--d:1.1s"/>
  </g>
  <g opacity="0.16"><ellipse cx="500" cy="182" rx="70" ry="34" fill="#d9a441" class="fx-glow" style="--d:.95s"/></g>
  <g fill="#f3dca8" opacity="0.24">
    <circle cx="466" cy="238" r="1.4"/><circle cx="534" cy="256" r="1.2"/><circle cx="500" cy="290" r="1.5"/>
    <circle cx="452" cy="300" r="1.2"/><circle cx="548" cy="322" r="1.3"/><circle cx="490" cy="352" r="1.2"/>
  </g>
</g>

<!-- the dark landscape over the console; nobody has looked at it in years -->
<g>
  <path d="M548 98 l8 5 l0 58 l-8 -5 z" fill="#000" opacity="0.35"/>
  <path d="M452 156 l96 0 l8 5 l-104 0 z" fill="#000" opacity="0.35"/>
  <rect x="452" y="98" width="96" height="58" fill="#5a4526"/>
  <rect x="452" y="98" width="96" height="3" fill="#8f7038" opacity="0.6"/>
  <rect x="458" y="104" width="84" height="46" fill="#1c1610"/>
  <path d="M458 138 q22 -16 42 -4 q20 12 42 -6 l0 22 l-84 0 z" fill="#161e2c"/>
  <path d="M458 132 q18 -22 40 -8 q18 10 44 -14 l0 12 q-24 20 -44 8 q-22 -12 -40 8 z" fill="#22261d"/>
  <path d="M458 104 l40 0 l-40 40 z" fill="#f0e7ce" opacity="0.04"/>
</g>

<!-- console table between the doors -->
<g>
  <ellipse cx="500" cy="480" rx="120" ry="18" fill="url(#bw-gw-sh)" opacity="0.8"/>
  <rect x="428" y="378" width="146" height="12" fill="#3b2f22"/>
  <rect x="428" y="378" width="146" height="3" fill="#6b5539" opacity="0.7"/>
  <rect x="428" y="387" width="146" height="4" fill="#0b0704" opacity="0.6"/>
  <rect x="436" y="390" width="130" height="30" fill="#2a2118"/>
  <rect x="440" y="420" width="10" height="52" fill="#241b12"/>
  <rect x="552" y="420" width="10" height="52" fill="#241b12"/>
  <rect x="444" y="452" width="114" height="7" fill="#2a2118"/>
  <ellipse cx="500" cy="396" rx="9" ry="4" fill="#9b7a3f"/>
  <ellipse cx="500" cy="380" rx="22" ry="5" fill="#000" opacity="0.35"/>
  <path d="M486 378 l0 -30 q0 -8 14 -8 q14 0 14 8 l0 30 z" fill="#5f6b4a"/>
  <path d="M488 376 l0 -28 q0 -6 8 -7 q-4 6 -4 12 l0 23 z" fill="#7d8a62" opacity="0.65"/>
  <path d="M510 342 q4 3 4 8 l0 28 l-6 0 l0 -28 q0 -5 2 -8 z" fill="#39422c" opacity="0.6"/>
  <path d="M490 348 q10 -6 20 0 l0 6 q-10 -5 -20 0 z" fill="#7d8a62"/>
  <g stroke="#8a7550" stroke-width="2.4" stroke-linecap="round">
    <line x1="496" y1="344" x2="480" y2="308"/><line x1="500" y1="344" x2="502" y2="300"/>
    <line x1="506" y1="344" x2="522" y2="310"/><line x1="498" y1="344" x2="488" y2="316"/>
  </g>
  <g fill="#6b5a45">
    <ellipse cx="479" cy="306" rx="5" ry="8"/><ellipse cx="502" cy="298" rx="5" ry="8"/><ellipse cx="523" cy="308" rx="5" ry="8"/>
  </g>
</g>

<!-- foreground: a hall chair nobody has sat in tonight -->
<g>
  <ellipse cx="60" cy="614" rx="130" ry="16" fill="url(#bw-gw-sh)"/>
  <path d="M-20 620 l0 -108 q72 -24 152 -4 l0 112 z" fill="#151009"/>
  <path d="M96 511 q22 3 36 -3 l0 112 l-36 0 z" fill="#221a10" opacity="0.6"/>
  <path d="M-20 512 q72 -24 152 -4 l-4 11 q-72 -19 -148 4 z" fill="#332a1e"/>
  <g fill="#241b12"><circle cx="26" cy="548" r="5"/><circle cx="76" cy="542" r="5"/><circle cx="112" cy="546" r="5"/></g>
</g>
<path d="M0 620 L0 540 L120 620 Z" fill="#100d09" opacity="0.7"/>
<path d="M1000 620 L1000 528 L858 620 Z" fill="#100d09"/>
<rect x="0" y="0" width="1000" height="14" fill="#0f0c08"/>

<rect width="1000" height="620" fill="url(#bw-gw-vig)"/>
`,
  },
};
