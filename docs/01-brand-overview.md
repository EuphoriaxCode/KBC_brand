# 1. Brand overview

## Wie is KBC
KBC is een Belgische **bank-verzekeraar** (Bank & Verzekering). Sitetitel: *"KBC Bank & Verzekering"*.
De merkbelofte draait om **dichtbij, digitaal, eenvoudig en duurzaam**: mens + app, met "Kate" als digitale assistent.

## Twee omgevingen, één merk
| | Particulieren | Ondernemen |
|---|---|---|
| URL | `kbc.be/particulieren` | `kbc.be/ondernemen` |
| Token | `--kdl-color-env-private` = **#0097DB** (accentblauw) | `--kdl-color-env-business` = **#0D2A50** (nachtblauw) |
| Doelgroep | Gezinnen, jongeren, spaarders, kopers | Zelfstandigen, starters, kmo's |
| Typische thema's | Zicht/spaarrekening, lening, hypotheek, beleggen, verzekeren, pensioen, KBC Mobile, Kate | Starten, zakelijke rekening, Business Budgetfaciliteit, overname, KBC Business |
| Hoofd-H1 voorbeeld | "Zorgeloos je wagen verzekeren?" | "Blijf cashflex met een Business Budgetfaciliteit" |
| Subkop voorbeeld | "No stress. Kate it." | "Ga tot 5.000 euro onder nul met je zakelijke rekening." |
| Sfeer | Warm, licht, alledaags, blauw accent | Zakelijker, donkerder, nachtblauw als anker |

Beide sites delen dezelfde componenten, typografie, iconen en tokens; alleen het accent (private blauw vs. business nachtblauw) en de beeldtaal/inhoud verschillen.
**Regel:** particulier = `primary-accent` domineert; zakelijk = `primary-main` (navy) domineert, accent blijft secundair.

## Merkpijlers (afgeleid uit de site)
1. **Mens & digitaal** – "Maak een afspraak" naast "Ga naar Kate" en "Download KBC Mobile"; altijd een persoonlijke én zelfservice-route.
2. **Eenvoud** – korte titels, één duidelijke CTA per blok, veel witruimte, lichte gewichten in bodytekst.
3. **Duurzaamheid** – vast onderwerp ("Samen bouwen we aan een duurzamere wereld"); eigen groen (`sustainability-green` #1DB955).
4. **Vertrouwen** – diep navy, rustige kleuren, duidelijke systeemkleuren, ruime contrasten.
5. **Nabijheid** – "Vind een KBC-kantoor in je buurt", "Contacteer ons waar en wanneer je maar wilt".

## Sitestructuur (homepage-patroon)
1. Top-navigatie (48 px) + hoofdnavigatie (88 px)
2. Hero: H1 + H2 + CTA + sfeerbeeld
3. "Waarmee kunnen we je helpen?" – tegels/snelkoppelingen
4. Visual USP-blokken (beeld + titel + tekst + CTA), bv. pensioen, duurzaamheid, starten
5. App-banner (KBC Mobile, ook zonder rekening)
6. Contact-blok (kantoor zoeken, afspraak, bellen, chat)
7. Footer + cookie (TrustArc)

## Do / Don't
- ✅ Navy tekst (#0D2A50) op wit of zeer lichtblauw (#F2FAFF).
- ✅ Ronde pill-knoppen (100 px radius) voor CTA's.
- ✅ Eén primaire actie per sectie.
- ❌ Geen zwarte tekst (`#000`): de merk-tekstkleur is navy.
- ❌ Geen willekeurige kleuren buiten palet; gebruik de `category`/`chart` reeksen voor data.
- ❌ Geen "Bank"-clichés met stockbeeld van muntjes; KBC gebruikt mensen en alledaagse situaties.
