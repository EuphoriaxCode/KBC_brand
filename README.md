# KBC Brand Kit

Volledig overzicht van de KBC-huisstijl, bedoeld als referentie wanneer we een project **in de stijl van KBC** maken.

> **Bron & disclaimer** – Alles hier is afgeleid van de publieke websites
> [kbc.be/particulieren](https://www.kbc.be/particulieren/nl.html) en
> [kbc.be/ondernemen](https://www.kbc.be/ondernemen/nl.html) (design tokens, CSS, HTML, logo-SVG's), opgehaald op 2026-09-30.
> Het is **geen officiële brand guideline** van KBC. Logo's en merknaam zijn eigendom van KBC Groep NV; gebruik ze
> alleen met toestemming van de opdrachtgever. Het lettertype MuseoSans is commercieel (exljbris) en zit niet in deze repo.

## Gebruik in een nieuw project / hackathon
1. Voeg deze repo toe aan je project (kopieer de map of laat Claude ze clonen).
2. **`CLAUDE.md`** wordt automatisch gelezen en bevat de kernregels van de stijl; Claude weet dan meteen hoe te stylen.
3. Start vanuit [`starter/index.html`](starter/index.html) + [`starter/kbc.css`](starter/kbc.css) (header, hero, tegels, USP-blokken, contact, footer, knoppen, formulieren, alerts).

Prompt om te plakken: *"Lees CLAUDE.md in de KBC_brand repo en bouw <ons idee> in die stijl, vertrekkend vanuit starter/."*

## Inhoud

| Bestand | Wat |
|---|---|
| [`docs/01-brand-overview.md`](docs/01-brand-overview.md) | Merk, positionering, particulieren vs. ondernemen, toon |
| [`docs/02-colors.md`](docs/02-colors.md) | Volledig kleurenpalet + gebruiksregels + contrast |
| [`docs/03-typography.md`](docs/03-typography.md) | Lettertype, schaal, regels |
| [`docs/04-logo-iconography-imagery.md`](docs/04-logo-iconography-imagery.md) | Logo, iconen, beeldtaal |
| [`docs/05-layout-components.md`](docs/05-layout-components.md) | Grid, breakpoints, spacing, radius, schaduw, knoppen, componenten |
| [`docs/06-voice-and-tone.md`](docs/06-voice-and-tone.md) | Taal, schrijfstijl, voorbeeldteksten |
| [`docs/07-implementation-guide.md`](docs/07-implementation-guide.md) | Praktisch: hoe gebruik je dit in een project + checklist |
| [`tokens/kbc-tokens.css`](tokens/kbc-tokens.css) / [`.json`](tokens/kbc-tokens.json) | Alle echte KBC design tokens (4 thema's) |
| [`CLAUDE.md`](CLAUDE.md) | Compacte stijlregels, auto-geladen door Claude Code |
| [`starter/`](starter) | `kbc.css` (componenten) + `index.html` (voorbeeldpagina) |
| [`brand-preview.html`](brand-preview.html) | Visuele preview: kleuren, typografie, knoppen, kaarten |
| [`assets/logos/`](assets/logos) | KBC-logo (SVG) |

Open `brand-preview.html` in een browser voor een snelle visuele check.
