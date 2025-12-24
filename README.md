# CIMA GitHub Frontpage (c-hydro.github.io)

This repository hosts the **public GitHub Pages website** for the CIMA Research Foundation open-source ecosystem:

https://c-hydro.github.io/

The site is a curated entry point (“C-Hy(drology)Dro(ught)”) that groups repositories by **domain area** and links users to authoritative repository documentation.

---

## Classification rule (IMPORTANT)

Repositories are classified **only by declared tags/topics**:

- `#hydrology` → **Hydrology & Forecasting**
- `#drought` → **Drought**
- *(no tag)* → **Other tools** (default)

No implicit or subjective classification is applied.  
If a repository is not explicitly tagged `#hydrology` or `#drought`, it **must** be listed under **Other tools**.

---

## Website structure

Static pages (no build step required):

- `index.html` — landing page and navigation
- `hydrology.html` — Hydrology & Forecasting catalogue
- `drought.html` — Drought catalogue
- `other.html` — Default catalogue for untagged repos
- `workflows.html` — reference workflows and integration notes

Assets:

- `assets/styles.css` — CIMA-inspired palette and layout
- `assets/site.js` — client-side filtering/search
- `assets/` — logos/images

---

## How to create a new page

1. Duplicate an existing page (recommended starting point):
   - copy `hydrology.html` (or any existing page) and rename it, e.g. `mypage.html`

2. Edit the main content:
   - update the `<main id="content"> ... </main>` section

3. Update metadata and page title:
   - update `<title>...</title>` in `<head>`
   - update the hero title/description in the header area

4. Add the page to the navigation:
   - edit the `<nav class="nav"> ... </nav>` links in the header of the HTML pages

> Note: A legacy “template.html” approach can be used, but the current site is intentionally plain HTML pages for maximum portability and simplicity.

---

## How to add or update repositories in the catalogue

When adding a new repository card:

1. Decide the classification based on tags:
   - If it is tagged `#hydrology`, add it to `hydrology.html`
   - If it is tagged `#drought`, add it to `drought.html`
   - Otherwise add it to `other.html`

2. Ensure the page’s tag badge is respected:
   - Every card in `hydrology.html` must show `#hydrology`
   - Every card in `drought.html` must show `#drought`
   - Every card in `other.html` must show `#other`

3. Keep descriptions aligned with repository READMEs:
   - This website is a **catalogue**, not the source of truth.
   - Installation/usage details belong in each repository.

---

## GitHub API note (public vs private repositories)

GitHub API tokens are required to list **private** repositories, but:

- **GitHub Pages cannot securely store secrets for client-side usage**
- therefore this public site is intended to catalogue **public repositories only**

This avoids exposing credentials and keeps the site safe and reproducible.

---

## Deployment

GitHub Pages is served directly from this repository.

Typical setup:
- Branch: `main`
- Folder: `/ (root)`

Pushes to `main` update the website at:
https://c-hydro.github.io/

---

## Quality checks (GitHub Actions)

This repo includes a validation workflow that checks:
- correct tag badges per area page (`#hydrology`, `#drought`, `#other`)
- presence of the classification rule in `index.html`
- presence of the rule in `REPOSITORIES_SUMMARY.md`

The check runs on every push and pull request.
