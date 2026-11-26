const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

// 1. Logo SVG
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E53935"/>
      <stop offset="100%" stop-color="#C62828"/>
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="url(#logoGrad)" />
  <circle cx="50" cy="50" r="42" fill="none" stroke="#FFD54F" stroke-width="2" stroke-dasharray="4,2"/>
  <!-- Bowl -->
  <path d="M26 48 C26 70 74 70 74 48 Z" fill="#FFF8E1" stroke="#FFB300" stroke-width="2"/>
  <ellipse cx="50" cy="48" rx="24" ry="7" fill="#FFE082"/>
  <!-- Noodles & Chicken -->
  <path d="M32 46 Q40 40 48 46 Q56 52 68 46" fill="none" stroke="#FFA000" stroke-width="3" stroke-linecap="round"/>
  <path d="M36 43 Q46 38 54 44 Q62 48 64 42" fill="none" stroke="#FFB300" stroke-width="2.5" stroke-linecap="round"/>
  <rect x="42" y="41" width="6" height="5" rx="1.5" fill="#8D6E63"/>
  <rect x="50" y="40" width="7" height="6" rx="1.5" fill="#6D4C41"/>
  <rect x="45" y="46" width="5" height="5" rx="1" fill="#795548"/>
  <circle cx="37" cy="46" r="2.5" fill="#43A047"/>
  <circle cx="61" cy="46" r="2" fill="#43A047"/>
  <!-- Chopsticks & Fork -->
  <line x1="28" y1="26" x2="48" y2="44" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
  <line x1="34" y1="23" x2="52" y2="42" stroke="#FFF" stroke-width="3" stroke-linecap="round"/>
  <!-- Steam -->
  <path d="M44 32 Q41 27 45 22" fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  <path d="M52 30 Q56 25 53 19" fill="none" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
</svg>`;

// 2. Hero Image SVG (Luscious Mie Ayam Bowl)
const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="100%" height="100%">
  <defs>
    <radialGradient id="tableLight" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFFDF9"/>
      <stop offset="100%" stop-color="#F5EFE6"/>
    </radialGradient>
    <linearGradient id="bowlGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="70%" stop-color="#F1F1F1"/>
      <stop offset="100%" stop-color="#D7CCC8"/>
    </linearGradient>
    <linearGradient id="chickenGlaze" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8D4925"/>
      <stop offset="50%" stop-color="#6B3012"/>
      <stop offset="100%" stop-color="#4A1E0B"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="15" stdDeviation="18" flood-color="#3E2723" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="600" height="500" rx="24" fill="url(#tableLight)"/>
  
  <!-- Subtle background plate/coaster -->
  <circle cx="300" cy="275" r="210" fill="#EFEBE9" opacity="0.6"/>
  <circle cx="300" cy="275" r="190" fill="#E8E0D9" opacity="0.8"/>

  <!-- Chopsticks on side -->
  <line x1="110" y1="360" x2="490" y2="400" stroke="#5D4037" stroke-width="9" stroke-linecap="round" opacity="0.85"/>
  <line x1="110" y1="375" x2="490" y2="420" stroke="#4E342E" stroke-width="8" stroke-linecap="round" opacity="0.85"/>
  <!-- Gold tip on chopsticks -->
  <line x1="110" y1="360" x2="150" y2="364" stroke="#FFD54F" stroke-width="9" stroke-linecap="round"/>
  <line x1="110" y1="375" x2="150" y2="379" stroke="#FFD54F" stroke-width="8" stroke-linecap="round"/>

  <!-- Bowl Shadow and Body -->
  <g filter="url(#softShadow)">
    <path d="M140 230 C140 375 460 375 460 230 Z" fill="url(#bowlGradient)"/>
  </g>
  <!-- Traditional Rooster / Flower line on ceramic bowl -->
  <path d="M190 270 Q300 310 410 270" fill="none" stroke="#D32F2F" stroke-width="6" stroke-linecap="round"/>
  <path d="M210 285 Q300 325 390 285" fill="none" stroke="#388E3C" stroke-width="4" stroke-linecap="round"/>
  
  <!-- Top Ellipse Rim of Bowl -->
  <ellipse cx="300" cy="230" rx="160" ry="46" fill="#FFFFFF" stroke="#D7CCC8" stroke-width="4"/>
  <!-- Inner Broth Layer -->
  <ellipse cx="300" cy="234" rx="148" ry="40" fill="#FFE082"/>

  <!-- Rich savory gravy / broth highlights -->
  <ellipse cx="300" cy="236" rx="140" ry="36" fill="#FBC02D" opacity="0.7"/>

  <!-- NOODLE STRANDS (curly authentic Indonesian mie) -->
  <g stroke="#F5B041" stroke-width="5" fill="none" stroke-linecap="round">
    <path d="M190 230 C220 210, 240 260, 280 230 C320 200, 360 250, 410 225"/>
    <path d="M180 240 C210 265, 250 215, 300 245 C350 270, 390 220, 420 240"/>
    <path d="M200 220 C230 240, 270 230, 310 220 C350 210, 380 245, 400 220"/>
    <path d="M210 250 C250 225, 290 260, 340 235 C380 215, 410 250, 425 235"/>
    <path d="M220 235 C240 215, 280 240, 320 225 C360 215, 390 235, 415 220" stroke="#F8C471" stroke-width="4"/>
  </g>

  <!-- SAWI HIJAU / CAISIM (Fresh greens) -->
  <g>
    <!-- Left leafy green -->
    <path d="M170 210 Q190 190 225 215 Q210 245 175 240 Z" fill="#2E7D32"/>
    <path d="M180 215 Q200 200 220 218" stroke="#81C784" stroke-width="2.5" fill="none"/>
    <path d="M165 225 Q185 205 210 235 Q195 255 168 245 Z" fill="#388E3C"/>
    <!-- Stem -->
    <path d="M175 238 Q200 245 220 235" stroke="#C8E6C9" stroke-width="4" stroke-linecap="round" fill="none"/>
    
    <!-- Top right green -->
    <path d="M370 195 Q405 185 425 215 Q400 235 375 220 Z" fill="#2E7D32"/>
    <path d="M380 200 Q400 195 415 215" stroke="#81C784" stroke-width="2" fill="none"/>
  </g>

  <!-- SAVORY SWEET-SOY CHICKEN (Topping Ayam Semur Gurih) -->
  <g fill="url(#chickenGlaze)" stroke="#3E2723" stroke-width="1">
    <rect x="250" y="205" width="22" height="18" rx="4" transform="rotate(-5 260 215)"/>
    <rect x="275" y="198" width="25" height="20" rx="5" transform="rotate(8 285 208)"/>
    <rect x="305" y="202" width="24" height="21" rx="4" transform="rotate(-10 315 212)"/>
    <rect x="260" y="222" width="26" height="20" rx="4" transform="rotate(4 270 230)"/>
    <rect x="290" y="220" width="28" height="22" rx="5" transform="rotate(-3 300 230)"/>
    <rect x="320" y="218" width="24" height="19" rx="4" transform="rotate(12 330 225)"/>
    <rect x="240" y="218" width="20" height="18" rx="4" transform="rotate(-8 250 225)"/>
    <rect x="272" y="238" width="24" height="17" rx="4" transform="rotate(6 280 245)"/>
  </g>
  <!-- Glossy glaze reflections on chicken -->
  <g fill="#FFF" opacity="0.35">
    <ellipse cx="260" cy="210" rx="4" ry="2"/>
    <ellipse cx="285" cy="204" rx="5" ry="2"/>
    <ellipse cx="315" cy="208" rx="5" ry="2"/>
    <ellipse cx="270" cy="226" rx="6" ry="2"/>
    <ellipse cx="300" cy="225" rx="5" ry="2.5"/>
  </g>

  <!-- BAKSO DAGING SAPI (Meatballs) -->
  <g filter="url(#softShadow)">
    <!-- Bakso 1 -->
    <circle cx="230" cy="200" r="23" fill="#A1887F"/>
    <circle cx="228" cy="198" r="22" fill="#8D6E63"/>
    <path d="M220 190 Q228 198 222 205" stroke="#5D4037" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M228 188 Q236 196 232 206" stroke="#4E342E" stroke-width="2" fill="none" stroke-linecap="round"/>
    <!-- Bakso highlight -->
    <circle cx="222" cy="192" r="5" fill="#BCAAA4" opacity="0.6"/>

    <!-- Bakso 2 -->
    <circle cx="370" cy="210" r="22" fill="#8D6E63"/>
    <path d="M362 202 Q370 210 365 218" stroke="#4E342E" stroke-width="2" fill="none" stroke-linecap="round"/>
    <circle cx="364" cy="204" r="4" fill="#BCAAA4" opacity="0.6"/>
  </g>

  <!-- PANGSIT GORENG CRISPY (Crispy Wonton Cracker) -->
  <g>
    <polygon points="340,165 425,185 390,230 325,195" fill="#FFE082" stroke="#FFB300" stroke-width="1.5"/>
    <polygon points="345,170 415,188 385,225 330,198" fill="#FFCA28"/>
    <!-- Crispy bubbles & crust lines -->
    <circle cx="365" cy="190" r="3" fill="#FFA000"/>
    <circle cx="380" cy="195" r="4" fill="#FFA000"/>
    <circle cx="355" cy="180" r="2.5" fill="#FF8F00"/>
    <circle cx="395" cy="205" r="3" fill="#FF8F00"/>
    <line x1="345" y1="185" x2="385" y2="200" stroke="#FFA000" stroke-width="1.5" stroke-dasharray="3,3"/>
  </g>

  <!-- GARNISH: Scallions (Daun Bawang) & Bawang Goreng -->
  <g fill="#2E7D32">
    <ellipse cx="250" cy="235" rx="3.5" ry="2" transform="rotate(30 250 235)"/>
    <ellipse cx="270" cy="215" rx="4" ry="2" transform="rotate(-20 270 215)"/>
    <ellipse cx="295" cy="215" rx="3.5" ry="2" transform="rotate(45 295 215)"/>
    <ellipse cx="325" cy="235" rx="4" ry="2.5" transform="rotate(-15 325 235)"/>
    <ellipse cx="305" cy="245" rx="4" ry="2" transform="rotate(10 305 245)"/>
    <ellipse cx="235" cy="225" rx="3" ry="1.5" transform="rotate(60 235 225)"/>
    <ellipse cx="350" cy="228" rx="3.5" ry="2" transform="rotate(-35 350 228)"/>
  </g>
  <!-- Crispy Fried Shallots (Bawang Goreng) -->
  <g fill="#A04000">
    <ellipse cx="280" cy="225" rx="3" ry="1" transform="rotate(15 280 225)"/>
    <ellipse cx="290" cy="235" rx="3.5" ry="1.2" transform="rotate(-40 290 235)"/>
    <ellipse cx="310" cy="225" rx="3" ry="1" transform="rotate(25 310 225)"/>
  </g>

  <!-- STEAM VAPOR ANIMATION/LINES (Aroma Panas Segar) -->
  <g stroke="#FFF" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6">
    <path d="M260 170 Q245 130 265 95 Q285 60 270 25"/>
    <path d="M300 160 Q320 125 305 90 Q290 55 310 20"/>
    <path d="M345 168 Q330 135 350 100 Q370 65 355 30"/>
  </g>
</svg>`;

// 3. Menu 1: Mie Ayam Original
const menuOriginalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" rx="16" fill="#FDFBF7"/>
  <!-- Bowl Outer -->
  <path d="M80 140 C80 245 320 245 320 140 Z" fill="#FFFFFF" stroke="#E0D7D0" stroke-width="3"/>
  <path d="M120 170 Q200 195 280 170" stroke="#D32F2F" stroke-width="4" fill="none"/>
  <ellipse cx="200" cy="140" rx="120" ry="32" fill="#FFF9C4" stroke="#D7CCC8" stroke-width="2"/>
  <ellipse cx="200" cy="143" rx="110" ry="27" fill="#FBC02D" opacity="0.75"/>
  <!-- Curly Noodles -->
  <g stroke="#F5B041" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M120 140 Q150 125 180 145 Q210 165 240 140 Q270 120 280 140"/>
    <path d="M130 150 Q160 165 190 140 Q220 120 250 150 Q270 145 280 135"/>
    <path d="M140 135 Q180 150 220 135 Q250 145 270 130"/>
  </g>
  <!-- Greens (Sawi) -->
  <path d="M105 125 Q125 105 145 130 Q130 150 105 140 Z" fill="#2E7D32"/>
  <path d="M115 130 Q130 118 140 132" stroke="#A5D6A7" stroke-width="2" fill="none"/>
  <!-- Chicken Topping -->
  <g fill="#6D3216">
    <rect x="175" y="125" width="18" height="15" rx="3" transform="rotate(-8 184 132)"/>
    <rect x="195" y="120" width="20" height="16" rx="3" transform="rotate(5 205 128)"/>
    <rect x="185" y="138" width="19" height="15" rx="3" transform="rotate(3 194 145)"/>
    <rect x="210" y="132" width="18" height="14" rx="3" transform="rotate(-6 219 139)"/>
  </g>
  <ellipse cx="188" cy="128" rx="3" ry="1.5" fill="#FFF" opacity="0.4"/>
  <ellipse cx="205" cy="124" rx="4" ry="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Scallions -->
  <ellipse cx="160" cy="140" rx="3" ry="1.5" fill="#388E3C"/>
  <ellipse cx="225" cy="142" rx="3" ry="1.5" fill="#388E3C"/>
  <ellipse cx="200" cy="152" rx="3" ry="1.5" fill="#388E3C"/>
  <!-- Steam -->
  <path d="M185 105 Q175 80 190 60" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M215 100 Q225 75 210 55" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
</svg>`;

// 4. Menu 2: Mie Ayam Bakso
const menuBaksoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" rx="16" fill="#FDFBF7"/>
  <!-- Bowl Outer -->
  <path d="M80 140 C80 245 320 245 320 140 Z" fill="#FFFFFF" stroke="#E0D7D0" stroke-width="3"/>
  <path d="M120 170 Q200 195 280 170" stroke="#D32F2F" stroke-width="4" fill="none"/>
  <ellipse cx="200" cy="140" rx="120" ry="32" fill="#FFF9C4" stroke="#D7CCC8" stroke-width="2"/>
  <ellipse cx="200" cy="143" rx="110" ry="27" fill="#FBC02D" opacity="0.75"/>
  <!-- Curly Noodles -->
  <g stroke="#F5B041" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M120 140 Q150 125 180 145 Q210 165 240 140 Q270 120 280 140"/>
    <path d="M130 150 Q160 165 190 140 Q220 120 250 150 Q270 145 280 135"/>
  </g>
  <!-- Greens (Sawi) -->
  <path d="M105 125 Q125 105 145 130 Q130 150 105 140 Z" fill="#2E7D32"/>
  <!-- Chicken Topping -->
  <g fill="#6D3216">
    <rect x="170" y="130" width="18" height="15" rx="3" transform="rotate(-8 179 137)"/>
    <rect x="190" y="135" width="19" height="15" rx="3" transform="rotate(3 199 142)"/>
  </g>
  <!-- BAKSO SAPI (Meatballs) -->
  <g>
    <!-- Bakso 1 -->
    <circle cx="215" cy="120" r="18" fill="#8D6E63"/>
    <path d="M210 114 Q216 120 212 126" stroke="#4E342E" stroke-width="2" fill="none"/>
    <circle cx="210" cy="116" r="3.5" fill="#BCAAA4" opacity="0.6"/>
    <!-- Bakso 2 -->
    <circle cx="250" cy="125" r="17" fill="#795548"/>
    <path d="M245 120 Q250 125 247 131" stroke="#3E2723" stroke-width="2" fill="none"/>
    <circle cx="246" cy="121" r="3" fill="#BCAAA4" opacity="0.6"/>
  </g>
  <!-- Scallions -->
  <ellipse cx="155" cy="140" rx="3" ry="1.5" fill="#388E3C"/>
  <ellipse cx="230" cy="145" rx="3" ry="1.5" fill="#388E3C"/>
  <!-- Steam -->
  <path d="M190 95 Q180 70 195 50" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M225 90 Q235 65 220 45" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
</svg>`;

// 5. Menu 3: Mie Ayam Pangsit
const menuPangsitSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" rx="16" fill="#FDFBF7"/>
  <!-- Bowl Outer -->
  <path d="M80 140 C80 245 320 245 320 140 Z" fill="#FFFFFF" stroke="#E0D7D0" stroke-width="3"/>
  <path d="M120 170 Q200 195 280 170" stroke="#D32F2F" stroke-width="4" fill="none"/>
  <ellipse cx="200" cy="140" rx="120" ry="32" fill="#FFF9C4" stroke="#D7CCC8" stroke-width="2"/>
  <ellipse cx="200" cy="143" rx="110" ry="27" fill="#FBC02D" opacity="0.75"/>
  <!-- Noodles -->
  <g stroke="#F5B041" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M120 140 Q150 125 180 145 Q210 165 240 140 Q270 120 280 140"/>
    <path d="M130 150 Q160 165 190 140 Q220 120 250 150"/>
  </g>
  <!-- Greens -->
  <path d="M105 125 Q125 105 145 130 Q130 150 105 140 Z" fill="#2E7D32"/>
  <!-- Chicken -->
  <g fill="#6D3216">
    <rect x="165" y="130" width="18" height="15" rx="3" transform="rotate(-6 174 137)"/>
    <rect x="185" y="135" width="19" height="15" rx="3" transform="rotate(4 194 142)"/>
  </g>
  <!-- Pangsit Goreng Crispy 1 & 2 -->
  <g>
    <!-- Pangsit 1 -->
    <polygon points="220,95 275,115 250,145 205,120" fill="#FFCA28" stroke="#FFA000" stroke-width="1.5"/>
    <circle cx="235" cy="115" r="2.5" fill="#E65100"/>
    <circle cx="245" cy="125" r="3" fill="#E65100"/>
    <!-- Pangsit Rebus Soft Wonton -->
    <path d="M245 130 C265 120 285 135 275 150 C260 160 235 155 245 130 Z" fill="#FFF9C4" stroke="#FFE082" stroke-width="1.5"/>
    <ellipse cx="260" cy="140" rx="6" ry="4" fill="#D7CCC8"/>
  </g>
  <!-- Scallions -->
  <ellipse cx="155" cy="140" rx="3" ry="1.5" fill="#388E3C"/>
  <ellipse cx="205" cy="148" rx="3" ry="1.5" fill="#388E3C"/>
  <!-- Steam -->
  <path d="M185 105 Q175 80 190 60" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M215 100 Q225 75 210 55" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
</svg>`;

// 6. Menu 4: Mie Ayam Komplit
const menuKomplitSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <rect width="400" height="300" rx="16" fill="#FDFBF7"/>
  <!-- Bowl Outer -->
  <path d="M80 140 C80 245 320 245 320 140 Z" fill="#FFFFFF" stroke="#E0D7D0" stroke-width="3"/>
  <path d="M120 170 Q200 195 280 170" stroke="#D32F2F" stroke-width="4" fill="none"/>
  <ellipse cx="200" cy="140" rx="120" ry="32" fill="#FFF9C4" stroke="#D7CCC8" stroke-width="2"/>
  <ellipse cx="200" cy="143" rx="110" ry="27" fill="#FBC02D" opacity="0.75"/>
  <!-- Noodles -->
  <g stroke="#F5B041" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M120 140 Q150 125 180 145 Q210 165 240 140 Q270 120 280 140"/>
    <path d="M130 150 Q160 165 190 140 Q220 120 250 150"/>
  </g>
  <!-- Greens -->
  <path d="M105 125 Q125 105 145 130 Q130 150 105 140 Z" fill="#2E7D32"/>
  <!-- Chicken Topping -->
  <g fill="#6D3216">
    <rect x="160" y="130" width="18" height="15" rx="3" transform="rotate(-6 169 137)"/>
    <rect x="180" y="135" width="18" height="15" rx="3" transform="rotate(4 189 142)"/>
  </g>
  <!-- Bakso -->
  <circle cx="215" cy="122" r="16" fill="#8D6E63"/>
  <path d="M210 118 Q215 122 212 127" stroke="#4E342E" stroke-width="2" fill="none"/>
  <circle cx="211" cy="119" r="3" fill="#BCAAA4" opacity="0.6"/>
  <!-- Pangsit Goreng Crispy -->
  <polygon points="230,95 285,115 260,145 215,125" fill="#FFCA28" stroke="#FFA000" stroke-width="1.5"/>
  <!-- Half Boiled Marinated Egg (Telur Kecap) -->
  <g>
    <ellipse cx="145" cy="140" rx="16" ry="12" fill="#FFF8E1" stroke="#8D6E63" stroke-width="2"/>
    <circle cx="145" cy="140" r="7" fill="#FF9800"/>
  </g>
  <!-- Scallions & Bawang Goreng -->
  <ellipse cx="185" cy="148" rx="3" ry="1.5" fill="#388E3C"/>
  <ellipse cx="205" cy="142" rx="3" ry="1.5" fill="#388E3C"/>
  <!-- Steam -->
  <path d="M185 105 Q175 80 190 60" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
  <path d="M215 100 Q225 75 210 55" stroke="#BBB" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
</svg>`;

// 7. Map Placeholder Graphic
const mapSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="100%" height="100%">
  <defs>
    <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E8ECE9"/>
      <stop offset="100%" stop-color="#DADFD9"/>
    </linearGradient>
  </defs>
  <rect width="600" height="400" rx="16" fill="url(#mapBg)"/>
  <!-- Map Roads and Blocks -->
  <path d="M-20 120 Q180 140 320 80 T620 100" stroke="#FFF" stroke-width="28" fill="none"/>
  <path d="M-20 280 Q220 240 400 300 T620 270" stroke="#FFF" stroke-width="22" fill="none"/>
  <path d="M220 -20 L240 420" stroke="#FFF" stroke-width="32" fill="none"/>
  <path d="M420 -20 L400 420" stroke="#FFF" stroke-width="20" fill="none"/>
  <!-- River/Water body -->
  <path d="M-20 40 Q150 70 300 20 T620 60" stroke="#B3E5FC" stroke-width="16" fill="none"/>
  <!-- Green Parks -->
  <rect x="50" y="160" width="130" height="90" rx="12" fill="#C8E6C9" opacity="0.8"/>
  <rect x="280" y="120" width="100" height="130" rx="12" fill="#DCEDC8" opacity="0.8"/>
  <rect x="450" y="140" width="120" height="100" rx="12" fill="#C8E6C9" opacity="0.7"/>

  <!-- Location Pin for Mie Ayam Jawir -->
  <g transform="translate(260, 160)">
    <!-- Radar ripple -->
    <circle cx="20" cy="50" r="30" fill="#E53935" opacity="0.18">
      <animate attributeName="r" values="15;40;15" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
    </circle>
    <ellipse cx="20" cy="52" rx="14" ry="6" fill="#37474F" opacity="0.25"/>
    <!-- Pin -->
    <path d="M20 50 C10 35 2 24 2 14 A18 18 0 1 1 38 14 C38 24 30 35 20 50 Z" fill="#E53935" stroke="#B71C1C" stroke-width="2"/>
    <circle cx="20" cy="15" r="7" fill="#FFFFFF"/>
    <!-- Bowl/Fork mini icon in pin -->
    <circle cx="20" cy="15" r="4" fill="#E53935"/>
    <!-- Pin Label Card -->
    <rect x="-45" y="-36" width="130" height="32" rx="8" fill="#1E293B" opacity="0.95"/>
    <text x="20" y="-16" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#FFFFFF" text-anchor="middle">Mie Ayam Jawir - Pusat</text>
    <polygon points="15,-4 25,-4 20,2" fill="#1E293B"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(assetsDir, 'logo.svg'), logoSvg);
fs.writeFileSync(path.join(assetsDir, 'hero-mie-ayam.svg'), heroSvg);
fs.writeFileSync(path.join(assetsDir, 'menu-original.svg'), menuOriginalSvg);
fs.writeFileSync(path.join(assetsDir, 'menu-bakso.svg'), menuBaksoSvg);
fs.writeFileSync(path.join(assetsDir, 'menu-pangsit.svg'), menuPangsitSvg);
fs.writeFileSync(path.join(assetsDir, 'menu-komplit.svg'), menuKomplitSvg);
fs.writeFileSync(path.join(assetsDir, 'map-placeholder.svg'), mapSvg);

console.log('Successfully generated all SVG assets!');
