# 2. Kleuren

Bron: `kdl-design-tokens` (KBC Design Language). Volledige lijst in [`../tokens/kbc-tokens.css`](../tokens/kbc-tokens.css).
Thema's: **light** (standaard), **dark** (`.kdl-theme-dark`), **high-contrast**, **private-banking**.

> Let op: de oudere CSS op de sites gebruikt nog een vorige generatie (`#00AEEF` / `#003665`). De **nieuwe tokens** (`#0097DB` / `#0D2A50`) zijn leidend voor nieuw werk.

## 2.1 Kernpalet
| Rol | Token | Waarde | Gebruik |
|---|---|---|---|
| **Primary accent (KBC-blauw)** | `primary-accent` | `#0097DB` | Logo, links, actieve states, particuliere omgeving |
| Accent 600 (hover/donker) | `primary-accent-600` | `#007AB1` | Hover, tekst-link op wit (betere contrast) |
| Accent 100 | `primary-accent-100` | `#E5F4FF` | Achtergrond highlights |
| Accent 25 | `primary-accent-25` | `#F2FAFF` | Dashboard/sectieachtergrond |
| Accent gradient base | `primary-accent-gradient-base` | `#46ADE0` | Start van gradiënten |
| **Primary main (navy)** | `primary-main` | `#0D2A50` | **Tekst**, koppen, logo-woordmerk, zakelijke omgeving |
| Main 600 | `primary-main-600` | `#021E43` | Pressed/diepste navy |
| Main 300 | `primary-main-300` | `#45658F` | Secundaire tekst (`func-text-light`) |
| Main 200 | `primary-main-200` | `#7394C2` | Disabled tekst |
| Main 150 | `primary-main-150` | `#91B3E3` | |
| Main 100 | `primary-main-100` | `#BFDAFF` | Randen, dividers |
| Main 25 | `primary-main-25` | `#EFF6FF` | Zeer lichte tint |
| Wit | `base-white` | `#FFFFFF` | Achtergrond |

## 2.2 Secundair & tertiair
| Token | Waarde | Voorbeeld |
|---|---|---|
| `secondary-01` | `#008571` (600: `#007462`) | Groen-teal; positieve CTA (`#009985` op de site voor CTA-knop) |
| `secondary-02` | `#E9C100` | Geel |
| `secondary-03` | `#EE7079` | Koraal/roze-rood |
| `tertiary-01` | `#74C8ED` | Lichtblauw |
| `tertiary-02` | `#F69D14` | Oranje |
| `tertiary-03` | `#F6B1BD` | Roze |
| `tertiary-04` | `#9FC95F` | Lichtgroen |
| `tertiary-05` | `#D1DDE7` | Blauwgrijs |
| `tertiary-06` | `#F5A790` | Zalm |

## 2.3 Systeemkleuren
| Status | Basis | 25 (bg) | 300 | 600 (hover/tekst) |
|---|---|---|---|---|
| Info | `#0D2A50` | `#EFF6FF` | `#45658F` | `#021E43` |
| Succes | `#5BA215` | `#EEFFE4` | `#8CD656` | `#478400` |
| Waarschuwing | `#DC7507` | `#FFF7F1` | `#FFA663` | `#B35D00` |
| Fout | `#D64040` | `#FFF6F5` | `#EB5552` | `#B92028` |
| Duurzaamheid | `#1DB955` | `#F0FFF2` | – | `#00903D` |

## 2.4 Achtergronden, oppervlakken, overlays
| Token | Waarde |
|---|---|
| `background-default` / `elevation-01/02` | `#FFFFFF` |
| `surface-100`, `surface-element` | `#F2FAFF` |
| `surface-background` | `#F2F2F2` |
| `shadow-default` | `rgba(0,0,0,.16)` |
| `overlay-default` / `-200` | `rgba(13,42,80,.4)` / `.24` |
| `overlay-fade` / `-white` | `rgba(255,255,255,.9)` / `.6` |
| `backdrop-default` | `rgba(69,101,143,.5)` |

## 2.5 Functionele aliassen (gebruik deze in code)
`func-text` → navy · `func-text-light` → main-300 · `func-text-disabled` → main-200 · `func-border`/`func-divider` → main-100 · `func-background-dashboard` → accent-25 · `func-private` → accent · `func-business` → main.

## 2.6 Data-visualisatie
- **Chart-reeks (10 kleuren, in volgorde):** `#008571`, `#E9C100`, `#EE7079`, `#0D2A50`, `#74C8ED`, `#F69D14`, `#F6B1BD`, `#9FC95F`, `#D1DDE7`, `#F5A790` (`func-chart-01…10`).
- **Categorieën** (uitgaven e.d., `category-01…20`): 01 `#0097DB`, 02 `#D28308`, 03 `#F06B42`, 04 `#7C45B6`, 05 `#838A92`, 06 `#7F4E06`, 07 `#009985`, 08 `#EE6880`, 09 `#015CA6`, 10 `#7897B5`, 11 `#4893CC`, 12 `#E2001A`, 13 `#C88304`, 14 `#76A136`, 15 `#AD9000`, 16-18 `#8C978C`, 19 `#5B9F9F`, 20 `#009037`.
- **Energiescores (EPC):** A++ `#1AABE3`, A+ `#009036`, A `#58AB27`, B `#8ACE18`, C `#B9C800`, D `#F4E100`, E `#FECC00`, F `#F29400`, G `#E2001A`.

## 2.7 Kaarten & sub-merken
- Debetkaart particulier `#0097DB`, zakelijk `#0D2A50` (gradient `#0097DB → #004F88`), Bancontact `#005AB9`.
- Kredietkaart `#003767`, prepaid `#247D9E`, silver `#74767B`, gold `#A2896B`, platinum `#333333`; business gradient `#003767 → #0B121E`.
- Kate-familie: Kate `#55C7DF`, Mobile `#1FADC1`, Live `#1DA594`, Visit `#5387C5`.

## 2.8 Dark mode (`.kdl-theme-dark`)
Achtergrond `#0F1010`, elevatie `#1C1E20`, tekst `#E8E8E8` (primary-main wordt licht), accent `#1A9FE4`, accent-600 `#3DB6FC`. Statuskleuren blijven gelijk.

## 2.9 Legacy-waarden op de sites (voor vergelijking)
`#00AEEF` (oud accent), `#003665` (oud navy), `#009985` (CTA-groen), `#F3F8FA`, `#F5F5F5`, `#F2F2F2`.

## 2.10 Gebruiksregels
1. Tekst = `#0D2A50` op wit/`#F2FAFF`. Contrast 14.3:1 (AAA).
2. Accentblauw `#0097DB` op wit haalt 3.3:1 → **alleen voor grote tekst, iconen, vlakken**; voor lopende linktekst gebruik `#007AB1` (4.8:1).
3. Witte tekst op `#0097DB` = 3.3:1 → enkel groot/vet (≥18px bold). Gebruik `#007AB1` voor kleine witte tekst.
4. Verhouding: ±70% wit/lichtblauw, 20% navy, 10% accent + statuskleuren.
5. Nooit statuskleur als enige informatiedrager (voeg icoon/tekst toe).
6. Witte tekst op de CTA-groen `#009985` haalt slechts 3.6:1; gebruik `#008571` (`secondary-01`, 4.6:1) voor kleine tekst in nieuwe projecten.
