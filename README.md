# CODO landing page

Static, single-page site for **CODO by Constellation Chargers** (resident-focused EV charging for condominiums), built from the CODO one-pager. No build step: plain HTML, CSS and a few lines of JavaScript.

Live site: https://loharatech.github.io/codo-landing-page/

## Structure

```
index.html                 page markup, SEO / Open Graph / Twitter tags, JSON-LD
404.html                   custom not-found page
assets/css/style.css       styles (palette and type from the one-pager)
assets/js/main.js          mobile nav, scroll reveal, active nav link
assets/img/                logo, product shots (WebP + JPEG), favicons, social preview
assets/docs/               the CODO one-pager PDF offered for download
robots.txt, sitemap.xml    crawler hints
site.webmanifest           app icons and theme color
.github/workflows/pages.yml GitHub Pages deployment
```

## Deploying on GitHub Pages

1. Push to `main`.
2. In the repository go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The `Deploy to GitHub Pages` workflow publishes the repository root on every push to `main`.

If you prefer the branch option instead, set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`. The `.nojekyll` file keeps Pages from running Jekyll on the files.

### Custom domain

The absolute URLs for the canonical link, Open Graph image, sitemap and 404 page are set to the GitHub Pages address. If you attach a custom domain, replace `https://loharatech.github.io/codo-landing-page/` in these files:

- `index.html` (canonical, `og:url`, `og:image`, `twitter:image`, JSON-LD)
- `sitemap.xml`, `robots.txt`, `404.html`

Then add a `CNAME` file containing the domain.

## Editing content

All copy lives in `index.html`. Contact details: the one-pager only lists the office address, so the contact card has a commented placeholder for an email and phone number. Add them there when ready.

## Local preview

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Social preview image

`assets/img/og-image.png` (1200×630) is what Facebook, LinkedIn, X, Viber and Messenger show when the link is shared. Regenerate it from the one-pager assets if the headline or branding changes.
