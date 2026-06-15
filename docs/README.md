# Il Gusto — Restaurant Website

A lightweight, fast, SEO-ready website for **Il Gusto · Ristorante & Pizzeria**.
Pure HTML/CSS/JS — no build step, no dependencies. Just upload the `site/` folder to any host.

## Structure
```
site/
├── index.html          Home (hero, story, specialities, gallery, contact)
├── menu.html           Full menu (antipasti, primi, secondi, pizza, cantina)
├── robots.txt          Search-engine crawl rules
├── sitemap.xml         Page list for Google
├── site.webmanifest    PWA / mobile icon metadata
└── assets/
    ├── style.css       All styling
    ├── main.js         Nav, scroll reveal, lightbox
    ├── logo.svg        Emblem
    ├── favicon.svg     Browser/tab icon
    └── img/            Optimised photos (from your originals)
```

## Preview locally
From the `site/` folder:
```bash
python3 -m http.server 8080
```
Then open http://localhost:8080

## ⚠️ Before going live — replace the placeholders
Search the project for these and swap in real values:

1. **Domain** — replace `https://www.ilgusto-ristorante.com` everywhere
   (in `index.html`, `menu.html`, `robots.txt`, `sitemap.xml`) with your real domain.
2. **Contact details** — in `index.html`, look for the `TODO` comments:
   - Address, phone (`+00 000 000 0000`), email
   - The `hours-list` opening hours
   - Social links (`#` for Instagram/Facebook, the WhatsApp number)
3. **Google Map** — the map currently uses a placeholder OpenStreetMap embed.
   Replace the `<iframe>` `src` with your Google Maps embed
   (Google Maps → your restaurant → Share → *Embed a map* → copy the `src`).
4. **Structured data (SEO)** — in the `<script type="application/ld+json">` block in
   `index.html`, update `telephone`, `email`, `address`, `geo` coordinates and `sameAs`
   social URLs so Google shows accurate rich results.
5. **Menu & prices** — `menu.html` contains a sample menu; adjust dishes and prices.

## SEO included
- Unique title + meta description per page
- Open Graph + Twitter Card tags (social previews use `assets/img/og-image.jpg`)
- Schema.org `Restaurant` + `BreadcrumbList` structured data (Google rich results)
- Canonical URLs, `robots.txt`, `sitemap.xml`
- Semantic headings, descriptive `alt` text, lazy-loaded images, mobile-friendly

After launch: submit the site to [Google Search Console](https://search.google.com/search-console)
and create a free [Google Business Profile](https://business.google.com) — the single
most important step for a restaurant showing up in local search and Maps.
