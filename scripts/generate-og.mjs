import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(process.cwd(), "public", "placeholders");
const outputPath = path.join(outputDir, "og-default.svg");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" rx="32" fill="#F5F2E9"/>
  <rect x="46" y="46" width="1108" height="538" rx="28" fill="url(#surface)"/>
  <circle cx="986" cy="126" r="220" fill="url(#halo)" opacity="0.8"/>
  <path d="M91 491C182 373 282 314 391 314C519 314 592 402 704 402C804 402 896 332 1004 210" stroke="#0E5E57" stroke-width="18" stroke-linecap="round"/>
  <path d="M91 534C182 416 282 357 391 357C519 357 592 445 704 445C804 445 896 375 1004 253" stroke="#91C5BD" stroke-width="10" stroke-linecap="round"/>
  <text x="94" y="162" fill="#0F2A26" font-family="Fraunces, Georgia, serif" font-size="72" font-weight="600">UK Campaign</text>
  <text x="94" y="244" fill="#0F2A26" font-family="Fraunces, Georgia, serif" font-size="72" font-weight="600">Site Starter</text>
  <text x="94" y="332" fill="#3C4B47" font-family="'Public Sans', Arial, sans-serif" font-size="28">
    Reusable Astro starter for advocacy and campaign websites.
  </text>
  <defs>
    <linearGradient id="surface" x1="46" y1="46" x2="1154" y2="584" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FFFFFF"/>
      <stop offset="1" stop-color="#E7F0ED"/>
    </linearGradient>
    <radialGradient id="halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(986 126) rotate(90) scale(220)">
      <stop stop-color="#A7D8CF"/>
      <stop offset="1" stop-color="#A7D8CF" stop-opacity="0"/>
    </radialGradient>
  </defs>
</svg>
`;

await mkdir(outputDir, { recursive: true });
await writeFile(outputPath, svg, "utf8");

console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
