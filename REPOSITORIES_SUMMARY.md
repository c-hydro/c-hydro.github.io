# C‑Hy(drology)Dro(ught)

A curated entry point to the **c-hydro** open‑source ecosystem maintained by **CIMA Research Foundation** (Departments of Hydrology & Hydraulics, and Drought).

## Classification rule

Repositories are classified by declared tags/topics.
Any repository **without** the tag `#hydrology` or `#drought` is listed under **Other tools** by default.

---

This repository index is organized by **area**:
- **Hydrology & Forecasting**
- **Drought**
- **Other tools**

> The authoritative documentation, installation instructions, and licenses live in each repository.

---

## Hydrology & Forecasting

- **HMC (Next Generation)** — Hydrological Model Continuum (core model implementation)  
  Repo: https://github.com/c-hydro/hmc  
  Related: legacy/Fortran sources https://github.com/c-hydro/hmc-dev

- **fp-hmc** — Flood‑PROOFS forecasting chain component: Python wrapper to configure and run HMC  
  Repo: https://github.com/c-hydro/fp-hmc

- **S3M (s3m-dev)** — Spatially explicit, hydrology‑oriented cryospheric model for seasonal snow and glacier evolution; designed for coupling with distributed hydrologic models  
  Repo: https://github.com/c-hydro/s3m-dev

- **fp-s3m** — Python wrapper package for running S3M in operational modelling systems  
  Repo: https://github.com/c-hydro/fp-s3m

Reference example (external to c-hydro): **airGR** (R rainfall–runoff modelling suite)  
Docs: https://hydrogr.github.io/airGR/

---

## Drought

- **DRYES** — DRought intensitY Evaluation System: Python package for drought analysis & monitoring workflows  
  Repo: https://github.com/c-hydro/dryes

- **DAM** — Data Analysis Middleware used in the drought toolchain (designed to work with DRYES and DOOR)  
  Repo: https://github.com/c-hydro/dam

- **D3Tools** — Shared, general‑purpose utilities used across DOOR/DAM/DRYES repositories  
  Repo: https://github.com/c-hydro/d3tools

---

## Other tools

- **Head** — HSAF Engines for Analyzing Datasets  
  Repo: https://github.com/c-hydro/head

- **Flomart** — FLOod MAp in Real Time: near real‑time flood hazard mapping integrated into an operational chain  
  Repo: https://github.com/c-hydro/flomart

- **RULER** — RUntime anaLyzER  
  Repo: https://github.com/c-hydro/ruler

---

## Website

A static GitHub Pages site (HTML/CSS/JS) is available in the `c-hydro.github.io` repository.  
Suggested IA:
- Home: summary + navigation by area  
- Area pages: Hydrology, Drought, Other  
- Workflows: reference workflows linking back to repositories

