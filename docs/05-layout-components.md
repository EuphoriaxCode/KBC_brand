# 5. Layout & componenten

## Breakpoints (uit de site-CSS)
| Naam | Bereik |
|---|---|
| xs | ≤ 575 px |
| sm | 576–767 px |
| md | ≥ 768 px (meest gebruikte omslagpunt) |
| lg | ≥ 992 px |
| xl | ≥ 1200 px |
| xxl | ≥ 1440 px |

Mobile-first; layout wisselt vooral op 768 en 992 px. Print-stylesheet aanwezig.

## Navigatie
- Topbalk hoogte **48 px** (`--top-navigation-height`), hoofdnavigatie **88 px** (`--main-navigation-height`).
- Zoekbalk met autocompleter; omgevingsswitch Particulieren / Ondernemen.

## Radius
| Waarde | Gebruik |
|---|---|
| **100 px (pill)** | Knoppen (CTA + secondary) |
| 8 px | Kaarten, afbeeldingen, inputs, modals |
| 4–5 px | Kleine elementen, tags, oudere componenten |
| 50 % | Avatars, icoonbolletjes |

## Schaduw
`0 4px 16px rgba(0,54,101,.08)` (standaard kaart) · `0 4px 16px rgba(0,54,101,.16)` (hover/verheven). Verder vlak, met 1 px randen `#BFDAFF`.

## Spacing
**Aanbeveling (niet als token gepubliceerd):** 4/8 px-ritme (4, 8, 12, 16, 24, 32, 48, 64). Koppen: `margin-bottom` ≈ 0.4–1 em (uit CSS). Sectie-padding desktop 48–64 px, mobiel 32 px. Veel witruimte.

## Knoppen
| Type | Stijl |
|---|---|
| **CTA (primair)** | Pill, vulling groen `#009985` (nieuw: `secondary-01` `#008571`), witte tekst, optioneel icoon links met scheidingslijn; hover donkerder (`#007A6A`), focus: gestippelde outline 1 px, offset 4 px |
| **Secundair** | Pill, transparant, rand + tekst accentblauw, hover: gevuld blauw met witte tekst |
| **Default/neutraal** | Achtergrond `#F2F2F2`, blauwe tekst |
| **Disabled** | Bg `#F2FAFF`, tekst `#7394C2`, `cursor:not-allowed` |
| **Mini-button** | Compacte variant in kaarten/tabellen |
Knopteksten: werkwoord/bestemming, kort – "Ontdek nu", "Maak een afspraak", "Ga naar Kate", "Download KBC Mobile", "Naar je toekomstplan".

## Componenten in de site (CSS-klassen)
`chaptertitle` (kop-blok) · `visual-usp` (beeld + titel + tekst + CTA) · `layoutcontainer` · `cta-button` · `mini-button` · `app-banner` · `searchbar` + `autocompleter` · `conditional-container` · `disclaimer-buttons` · cookie-loader (TrustArc) · icon-font `iconskbc`.

### Patronen
- **Hero:** H1 (alpha) + H2 (beta) links uitgelijnd, CTA, sfeerbeeld rechts/achter; tekstkolom smal (aanbeveling: ≤ 560 px).
- **Tegels "Waarmee kunnen we je helpen?":** gecentreerde H2, 3–4 kolommen desktop, 1–2 mobiel, kaart 8 px radius met icoon + label.
- **Visual USP:** 50/50 beeld/tekst, wisselend links/rechts.
- **App-banner:** QR/stores + kort voordeel.
- **Contact-blok:** vier ingangen (kantoor, afspraak, bellen, chat).
- **Formulieren:** labels boven veld, 1 px rand `#BFDAFF`, focus accentblauw, foutstatus `#D64040` + icoon + tekst.
