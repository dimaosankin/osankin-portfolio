# Hybrid Developer — personal portfolio

A hybrid-theme (dark hero and contact, light content) responsive bilingual (English / Ukrainian) frontend portfolio built with HTML, SCSS and vanilla JavaScript.

## Start
Open `index.html` in a browser. The ready-to-use CSS is in `assets/css/style.css`.

## Development
Edit `assets/scss/style.scss`. Compile it using your existing Sass/Gulp setup, or run `npx sass assets/scss/style.scss assets/css/style.css` if Sass is available. This initial stylesheet uses CSS-compatible SCSS syntax.

## Before publishing
- Replace `your-email@example.com` in `index.html`.
- Replace the generic LinkedIn and GitHub links with your profiles.
- Review the project descriptions and confirm the work you want to showcase.
- Optionally replace the decorative browser mockups with real project screenshots.
- Edit translations in `assets/js/main.js`.

## Notes
- Language preference is stored in `localStorage` when available.
- No external JavaScript dependencies, fonts or image requests.
- Contact links are placeholders, not functional personal contact details.

## Portrait and sticky header
The hero portrait is stored in `assets/images/portrait.webp` (derived from the supplied photograph). The header switches from dark to translucent light after scrolling. The headline uses a tighter line height with extra right-side padding to avoid clipping the gradient period.


Portrait: `assets/images/portrait-cutout.webp` has a transparent background. The original portrait file is preserved.


## CV update (November 2026)
Content is based on `CV_Osankin.pdf`: seven employment entries, education, technical stack and selected projects. Contact details were copied from the CV. React is explicitly marked basic. Current Starlit Group employment is shown as ongoing because the CV lists only a September 2025 start date. Project involvement does not imply sole authorship.


## Навігація та favicon
- Якірні посилання прокручують до секцій точно під sticky header (86px desktop / 72px mobile).
- Посилання «Нагору ↑» / «Back to top ↑» повертає сторінку на початок.
- `favicon.svg` і `favicon.png` використовують монограму DO.

## Portfolio project selection
Selected projects: Medik8 Ukraine, Apeer Ukraine, Allstate Canada, Ruinart and Adagio Aparthotels. Removed Celine and Condé Nast Abonnement from the public portfolio.


## SEO / publication
- `og-cover.png` — social preview (1200 × 630)
- `robots.txt`, `sitemap.xml` — search engine discovery
- Canonical and social metadata use `https://osankin.pages.dev/`. Update all URLs if a custom domain is connected.
- EN/UA is client-side language switching on a single URL; social crawlers see English metadata. Dedicated indexed Ukrainian pages would require separate URLs.
- Cloudflare Pages: Framework `None`, build command blank, output directory `.`.
