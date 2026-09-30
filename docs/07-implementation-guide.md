# 7. Implementatiegids

## Snelstart
```html
<link rel="stylesheet" href="tokens/kbc-tokens.css">
<style>
  body { margin:0; font-family:"MuseoSans","Nunito Sans",system-ui,sans-serif; font-weight:300;
         font-size:16px; line-height:24px; color:var(--kdl-color-primary-main); background:var(--kdl-color-background-default); }
  h1,h2,h3 { font-weight:700; }
  a { color:var(--kdl-color-primary-accent-600); }
  .btn { display:inline-block; padding:12px 24px; border-radius:100px; font-weight:500; text-decoration:none; }
  .btn--cta { background:var(--kdl-color-secondary-01); color:#fff; }
  .btn--secondary { border:1px solid var(--kdl-color-primary-accent); color:var(--kdl-color-primary-accent-600); }
  .card { background:#fff; border-radius:8px; box-shadow:0 4px 16px rgba(0,54,101,.08); padding:24px; }
</style>
```
Dark mode: zet klasse `kdl-theme-dark` op `<html>`. Zakelijk: gebruik `--kdl-color-env-business` als hoofdaccent.

## Tailwind (voorbeeld)
```js
theme.extend.colors = {
  kbc: { blue:'#0097DB', 'blue-600':'#007AB1', navy:'#0D2A50', 'navy-600':'#021E43',
         teal:'#008571', sky:'#F2FAFF', line:'#BFDAFF' },
  status: { ok:'#5BA215', warn:'#DC7507', err:'#D64040' }
}
theme.extend.borderRadius = { pill:'100px', card:'8px' }
```

## Checklist "in KBC-stijl"
- [ ] Tekst navy `#0D2A50`, body weight 300, koppen 700
- [ ] MuseoSans (of goedgekeurd alternatief)
- [ ] Pill-knoppen, één primaire CTA per sectie
- [ ] Kaarten 8 px radius + zachte schaduw (`0 4px 16px rgba(0,54,101,.08)`)
- [ ] Veel witruimte, lichtblauwe vlakken `#F2FAFF`
- [ ] Contrast ≥ 4.5:1 voor tekst (WCAG AA)
- [ ] Je/jouw-toon, sentence case, korte koppen
- [ ] Mensgerichte fotografie, lijniconen
- [ ] Particulier = blauw accent; Ondernemen = navy als anker
- [ ] Focus-states zichtbaar (dashed outline, offset 4 px)
- [ ] Mobile-first, breakpoints 576/768/992/1200/1440

## Openstaande punten / te vragen aan KBC
1. Officiële brand guidelines + logo-pakket (varianten, negatief, vrije ruimte).
2. Licentie MuseoSans voor het project.
3. Toestemming voor gebruik van logo, Kate-mascotte en beeldmateriaal.
4. Toegankelijkheidsvereisten voor het project.
5. Bevestiging welke tokens (nieuw vs. legacy `#00AEEF/#003665`) voor het project gelden.
