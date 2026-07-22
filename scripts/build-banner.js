const fs = require("fs");
const { Resvg } = require("@resvg/resvg-js");

const logoBase64 = fs.readFileSync("assets/logo-cropped.png").toString("base64");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="360" viewBox="0 0 1200 360" fill="none">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="360" gradientUnits="userSpaceOnUse">
      <stop stop-color="#07090C"/>
      <stop offset="0.55" stop-color="#0B0F14"/>
      <stop offset="1" stop-color="#0A0E12"/>
    </linearGradient>
    <linearGradient id="glow" x1="200" y1="40" x2="980" y2="320" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3B82F6" stop-opacity="0.18"/>
      <stop offset="0.5" stop-color="#64748B" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#94A3B8" stop-opacity="0.04"/>
    </linearGradient>
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="#3B82F6" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#60A5FA" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#3B82F6" stop-opacity="0"/>
    </linearGradient>
    <radialGradient id="orb" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(980 90) rotate(90) scale(220 180)">
      <stop stop-color="#3B82F6" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="orb2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(180 280) rotate(90) scale(260 160)">
      <stop stop-color="#94A3B8" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#94A3B8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="logoGrad" x1="360" y1="0" x2="820" y2="0" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3CCF91"/>
      <stop offset="0.5" stop-color="#2EC4B6"/>
      <stop offset="1" stop-color="#29ABE2"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="360" fill="url(#bg)"/>
  <rect width="1200" height="360" fill="url(#glow)"/>
  <circle cx="980" cy="90" r="220" fill="url(#orb)"/>
  <circle cx="180" cy="280" r="220" fill="url(#orb2)"/>

  <g opacity="0.08" stroke="#94A3B8" stroke-width="1">
    <path d="M0 72H1200M0 144H1200M0 216H1200M0 288H1200"/>
    <path d="M150 0V360M300 0V360M450 0V360M600 0V360M750 0V360M900 0V360M1050 0V360"/>
  </g>

  <rect x="0" y="0" width="1200" height="1" fill="url(#line)"/>
  <rect x="0" y="359" width="1200" height="1" fill="url(#line)"/>

  <!-- Logo (cropped AF mark) -->
  <image href="data:image/png;base64,${logoBase64}" x="70" y="88" width="250" height="173" />

  <!-- Typography block -->
  <g font-family="Segoe UI, Helvetica, Arial, sans-serif">
    <text x="360" y="145" fill="#F8FAFC" font-size="56" font-weight="700" letter-spacing="-1.2">Armin Fatehi</text>
    <text x="360" y="202" fill="url(#logoGrad)" font-size="28" font-weight="700" letter-spacing="3.5">FRONTEND ENGINEER</text>
    <text x="360" y="252" fill="#E2E8F0" font-size="20" font-weight="500" letter-spacing="0.5">React  |  Next.js  |  TypeScript</text>
  </g>
</svg>`;

fs.writeFileSync("assets/banner.svg", svg);

const png = new Resvg(Buffer.from(svg), {
  fitTo: { mode: "width", value: 2400 },
  font: {
    loadSystemFonts: true,
  },
})
  .render()
  .asPng();

fs.writeFileSync("assets/banner.png", png);
console.log("banner.png", png.length);
