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

## Live URLs & SEO
Canonical/sitemap/Open Graph URLs point to the GitHub Pages address
`https://skerdi459.github.io/Ilgusto/`. If you move to a custom domain,
search-and-replace that base URL in `index.html`, `menu.html`, `robots.txt`
and `sitemap.xml`, and add a `CNAME` file in `docs/`.

Real contact details (address Via Rossello 22, Pietra Ligure SV · phone
392 8080172 · email Ilgusto77@gmail.com · Instagram il.gusto1998) and the
Google Maps embed are already wired in.
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
