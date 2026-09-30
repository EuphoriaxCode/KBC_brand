# 3. Typografie

## Lettertypes
| Rol | Font | Gewichten | Bron |
|---|---|---|---|
| Alles (UI, koppen, body) | **MuseoSans** | 300 (light), 500 (medium), 700 (bold) | `wcmassets.kbc.be/.../museo/resources/font/museosans-{300,500,700}-webfont.woff2` |
| Iconen | **iconskbc** (icon-font) | – | KBC icon set |
| Fallback | `sans-serif` (aanbevolen: `system-ui, "Segoe UI", Arial`) | | |

MuseoSans is een gelicentieerd lettertype (exljbris/KBC). **Niet meegeleverd.** Voor projecten zonder licentie: gebruik
een geometrisch/humanistisch alternatief met vergelijkbare ronde vormen, bv. **Nunito Sans** of **Mulish** (Google Fonts).

```css
@font-face { font-family: "MuseoSans"; src: url("museosans-300-webfont.woff2") format("woff2"); font-weight: 300; font-display: swap; }
@font-face { font-family: "MuseoSans"; src: url("museosans-500-webfont.woff2") format("woff2"); font-weight: 500; font-display: swap; }
@font-face { font-family: "MuseoSans"; src: url("museosans-700-webfont.woff2") format("woff2"); font-weight: 700; font-display: swap; }
body { font-family: "MuseoSans", "Nunito Sans", system-ui, sans-serif; color: var(--kdl-color-primary-main); }
```

## Typeschaal (uit de site-CSS)
| Klasse | Gebruik | Mobiel | Desktop (≥768px) | Gewicht |
|---|---|---|---|---|
| `alpha` (H1) | Paginatitel/hero | 24 / 28 px | **30 / 36 px** | 700 |
| `beta` (H2) | Sectietitel | 1.25em (20px) / 1.40 | idem | 700 |
| `gamma` (H3) | Subtitel | 1.125em (18px) / 1.32 | idem | 700 |
| `delta` (H4) | Kleine titel | 1em (16px) / 1.485 | idem | 700 |
| Body `p` | Lopende tekst | **16 / 24 px** | idem | **300 (light)** |
| Klein | Labels, meta | 14 px | | 500 |
| Caption | Voetnoten, disclaimer | 12 px | | 300 |
| Knop | CTA | 16 px | | 500–700 |

Meest gebruikte groottes op de site: 16 (76×), 14 (46×), 12, 18, 20, 24, 30 px.

## Regels
- Koppen **bold 700**, body **light 300**; benadrukking via 500/700, nooit cursief als stijlmiddel.
- Kleur: navy `#0D2A50`; secundair `#45658F`.
- Zin-hoofdletters (sentence case) in koppen, geen Title Case, geen ALL CAPS.
- Regellengte 45–75 tekens; `hyphens:auto`, `overflow-wrap:break-word` (zoals op de site).
- `orphans/widows: 3` voor print.
- Korte koppen (≤ 8 woorden), vaak als vraag ("Zorgeloos je wagen verzekeren?").
