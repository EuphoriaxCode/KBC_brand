# KBC-stijl: instructies voor Claude

Deze repo is een brand kit. **Bouw elk UI-onderdeel (site, app, slides, dashboard) in KBC-stijl** volgens onderstaande regels.
Details staan in `docs/`, tokens in `tokens/kbc-tokens.css`, kant-en-klare componenten in `starter/kbc.css` en een startpagina in `starter/index.html`. **Begin altijd vanuit `starter/`** en hergebruik `kbc.css` in plaats van eigen styling te verzinnen.

## Kernregels (leidend)
- **Kleur:** tekst navy `#0D2A50` (nooit zwart). Accent KBC-blauw `#0097DB` (link/hover `#007AB1`). Lichte vlakken `#F2FAFF`, randen `#BFDAFF`, achtergrond wit. CTA-groen `#008571`. Status: succes `#5BA215`, waarschuwing `#DC7507`, fout `#D64040`.
- **Verhouding:** ±70% wit/lichtblauw, 20% navy, 10% accent. Particulier = blauw accent; zakelijk = navy als anker.
- **Font:** MuseoSans → fallback `"Nunito Sans"`. Body weight **300**, 16/24 px. Koppen weight **700**: H1 30/36 (mobiel 24/28), H2 20, H3 18, H4 16. Sentence case.
- **Knoppen:** pill (`border-radius:100px`), één primaire CTA per sectie. Secundair = blauwe rand, hover gevuld.
- **Kaarten:** wit, radius 8 px, schaduw `0 4px 16px rgba(0,54,101,.08)`, veel witruimte.
- **Iconen:** lijniconen (Lucide/Phosphor), navy of accent.
- **Toon:** Nederlands, informeel **je/jouw**, korte koppen (vaak vraag/belofte), concreet, geen jargon. Digitale assistent heet **Kate**. Schrijf "KBC" in hoofdletters.
- **Layout:** mobile-first, breakpoints 576/768/992/1200/1440. Hero → tegels "Waarmee kunnen we je helpen?" → USP-blokken (beeld + tekst) → contactblok → footer.
- **Toegankelijkheid:** tekstcontrast ≥ 4.5:1 (wit op `#0097DB` alleen voor grote/vette tekst), zichtbare focus (dashed outline, offset 4 px).
- **Logo & hackathon (belangrijk):** dit is een hackathon-project. Wij zijn **niet KBC** en spreken niet namens KBC. Stijl volgen = ja; KBC-identiteit claimen = nee. Gebruik dus **geen KBC-logo** (`assets/logos/`) op ons eigen werk: niet op video-pop-ups met onze namen, niet bij teamleden, niet als ons eigen merk. Geen tekst of layout die suggereert dat wij bij KBC werken of dat het een officieel KBC-product is. Het logo alleen tonen als het bewust over KBC zelf gaat, en dan vermelden dat het een niet-officiële demo is. Onze namen (Aeon Bonjé, Rune Vanhoucke, Arno Cuyvers) staan in KBC-stijl (kleur, font, kaart, pill) maar zonder logo.

## Werkwijze
1. Lees deze file, daarna `starter/index.html` en `starter/kbc.css`.
2. Kopieer `starter/` + `tokens/` + `assets/` naar het project en pas inhoud aan; pas de stijl niet aan.
3. Gebruik tokens (`var(--kdl-color-…)`) i.p.v. hardcoded hex waar mogelijk.
4. Check tegen de checklist in `docs/07-implementation-guide.md`.
