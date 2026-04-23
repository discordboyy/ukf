// src/data/kurs-images.js
// ─────────────────────────────────────────────────────────────────────────────
// ALL image references live here as plain URL strings.
//
// WHY THIS MATTERS FOR PERFORMANCE:
//   Static `import img from "../../assets/..."` causes Vite/Rollup to:
//     1. Inline small images as base64 (bloats JS bundle)
//     2. Hash + emit large images as separate files — BUT the import statement
//        itself adds module graph overhead and forces Vite to process every
//        single file at build time.
//   With 55 image imports the module-evaluation cost at runtime is non-trivial.
//
//   Plain URL strings:
//     • Zero module overhead — just string literals
//     • Browser decides fetch priority (lazy carousel images stay low-priority)
//     • Works with any CDN / image service swap without rebuild
//     • Carousel can set loading="lazy" on non-active slides trivially
//
// SETUP:
//   Option A — Public folder (simplest):
//     Copy /assets/kurs-bilder/** → /public/images/kurs-bilder/**
//     Vite serves /public/* at root; URLs below work as-is.
//
//   Option B — Keep in /assets but use ?url import suffix (Vite feature):
//     import img1Url from "../assets/kurs-bilder/Motanka-dukke/Motanka-dukke-1.JPG?url"
//     Then export { img1Url } — still avoids base64 inlining for large files.
//
//   Option C — CDN / object storage (best for production):
//     Replace BASE_URL with your CDN origin.
// ─────────────────────────────────────────────────────────────────────────────

const BASE = ""; // Change to your CDN URL for production

// ─── UI / decorative SVGs ────────────────────────────────────────────────────
// These are tiny SVG icons used repeatedly. They CAN stay as static imports,
// but grouping them here keeps Kurs.jsx clean and avoids 15 separate imports.
//
// For SVG files you can also use ?url to get the URL without inlining:
//   import vector1Url from "../assets/kurs/Vector-1.svg?url"
//
// For now we keep them as imports collected in one place:
import _vector1         from "../assets/kurs/Vector-1.svg";
import _romberKnapp     from "../assets/kurs/romber_knapp.svg";
import _romberKnappRed  from "../assets/kurs/romber_knapp-red.svg";
import _romberKnapp2    from "../assets/kurs/romber_knapp2-2.svg";
import _romberKnappYellow from "../assets/kurs/romber_knapp-yellow.svg";
import _pileFullBla     from "../assets/kurs/pile_full_bla.svg";
import _pileFullBla1    from "../assets/kurs/pile_full_bla-1.svg";
import _rombeRed        from "../assets/rombe-red.svg";
import _rombeBlue       from "../assets/rombe-blue.svg";
import _rombeYellow     from "../assets/rombe-yellow.svg";
import _emptyrombe      from "../assets/kurs/rombe-empty.svg";
import _polygon         from "../assets/Polygon-1-5.svg";
import _polygon1        from "../assets/Polygon-1-1.svg";
import _polygon2        from "../assets/Polygon-1-2.svg";
import _navLeft         from "../assets/nav-left.svg";
import _navRight        from "../assets/nav-right.svg";

export const UI = {
  vector1:          _vector1,
  romberKnapp:      _romberKnapp,
  romberKnappRed:   _romberKnappRed,
  romberKnapp2:     _romberKnapp2,
  romberKnappYellow: _romberKnappYellow,
  pileFullBla:      _pileFullBla,
  pileFullBla1:     _pileFullBla1,
  rombeRed:         _rombeRed,
  rombeBlue:        _rombeBlue,
  rombeYellow:      _rombeYellow,
  emptyrombe:       _emptyrombe,
  polygon:          _polygon,
  polygon1:         _polygon1,
  polygon2:         _polygon2,
  navLeft:          _navLeft,
  navRight:         _navRight,
};

// ─── Course photo arrays — plain URL strings ─────────────────────────────────
// Vite will NOT process these as modules. The browser fetches them on demand.

export const MOTANKA_DUKKE = [
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-1.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-6.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-7.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-9.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-10.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-11.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-12.JPG`,
  `${BASE}/kurs-bilder/Motanka-dukke/motanka-dukke-5.jpg`,
  `${BASE}/kurs-bilder/Motanka-dukke/motanka-dukke-3.jpg`,
  `${BASE}/kurs-bilder/Motanka-dukke/Motanka-dukke-4.jpg`,
];

export const SKJERF = [
  `${BASE}/kurs-bilder/Skjerf-og-pulsvarmere/img-3.JPG`,
  `${BASE}/kurs-bilder/Skjerf-og-pulsvarmere/img-1.JPG`,
  `${BASE}/kurs-bilder/Skjerf-og-pulsvarmere/img-2.JPG`,
];

export const BLOKK = [
  `${BASE}/kurs-bilder/Blokktrykk-og-broderi/Blokktrykk-og-broderi-1.jpg`,
  `${BASE}/kurs-bilder/Blokktrykk-og-broderi/Blokktrykk-og-broderi-2.jpg`,
];

export const MINI = [
  `${BASE}/kurs-bilder/Miniatyrby/bilde-1.jpg`,
  `${BASE}/kurs-bilder/Miniatyrby/bilde-2.jpg`,
  `${BASE}/kurs-bilder/Miniatyrby/bilde-3.jpg`,
  `${BASE}/kurs-bilder/Miniatyrby/bilde-4.jpg`,
  `${BASE}/kurs-bilder/Miniatyrby/bilde-5.jpg`,
  `${BASE}/kurs-bilder/Miniatyrby/bilde-6.jpg`,
  `${BASE}/kurs-bilder/Miniatyrby/bilde-7.jpg`,
];

export const GLASS = [
  `${BASE}/kurs-bilder/Glasslysholder/img-1.jpg`,
  `${BASE}/kurs-bilder/Glasslysholder/img-2.jpg`,
  `${BASE}/kurs-bilder/Glasslysholder/img-3.jpg`,
  `${BASE}/kurs-bilder/Glasslysholder/img-4.jpg`,
  `${BASE}/kurs-bilder/Glasslysholder/img-5.jpg`,
  `${BASE}/kurs-bilder/Glasslysholder/img-6.jpg`,
];

export const FARSDAG = [
  `${BASE}/kurs-bilder/Farsdag/img-1.JPG`,
  `${BASE}/kurs-bilder/Farsdag/img-2.JPG`,
  `${BASE}/kurs-bilder/Farsdag/img-3.JPG`,
  `${BASE}/kurs-bilder/Farsdag/img-4.JPG`,
];

export const JULEGLASS = [
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-1.avif`,
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-2.avif`,
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-3.avif`,
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-4.avif`,
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-5.avif`,
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-6.avif`,
  `${BASE}/kurs-bilder/Glasslysholder-Juleverksted/img-7.avif`,
];

export const MOTANKA_ENGEL = [
  `${BASE}/kurs-bilder/Motanka-engel/img-1.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-2.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-3.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-4.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-5.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-6.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-7.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-8.JPG`,
  `${BASE}/kurs-bilder/Motanka-engel/img-9.JPG`,
];

export const NISSE = [
  `${BASE}/kurs-bilder/Nissefjes/img-1.JPG`,
  `${BASE}/kurs-bilder/Nissefjes/img-2.JPG`,
  `${BASE}/kurs-bilder/Nissefjes/img-3.JPG`,
];

export const JULEPYNT = [
  `${BASE}/kurs-bilder/Julepynt/img-1.JPG`,
  `${BASE}/kurs-bilder/Julepynt/img-2.JPG`,
  `${BASE}/kurs-bilder/Julepynt/img-3.JPG`,
  `${BASE}/kurs-bilder/Julepynt/img-4.JPG`,
  `${BASE}/kurs-bilder/Julepynt/img-5.JPG`,
  `${BASE}/kurs-bilder/Julepynt/img-6.JPG`,
  `${BASE}/kurs-bilder/Julepynt/img-7.JPG`,
];

export const SMYKKER = [
  `${BASE}/kurs-bilder/Smykker/img-1.JPG`,
  `${BASE}/kurs-bilder/Smykker/img-2.JPG`,
  `${BASE}/kurs-bilder/Smykker/img-3.JPG`,
  `${BASE}/kurs-bilder/Smykker/img-4.JPG`,
  `${BASE}/kurs-bilder/Smykker/img-5.JPG`,
];