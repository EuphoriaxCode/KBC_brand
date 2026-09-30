# Prompt: naam-pop-ups (lower thirds) voor een ander bedrijf

Plak dit in de andere chat. Die chat kent het bedrijf en de data (namen, huisstijl); vul niets zelf in.

---

Maak voor **[het bedrijf uit deze chat]** pop-ups met de namen van ons team, om in een video te plakken (die ik monteer in **CapCut**). Doe hetzelfde als in het KBC-voorbeeld hieronder, maar dan in de huisstijl van dit bedrijf.

## Wat ik wil
- Per persoon één **transparante clip** (1920x1080, 30 fps, 5,5 s), naam in de huisstijl van het bedrijf: hun echte kleuren, hun lettertype (of de dichtstbijzijnde Google Font als het gelicentieerd is), hun vorm (afgeronde hoeken/pill/rechthoek zoals hun UI). Zoek de huisstijl online of in de data van deze chat; verzin geen kleuren.
- Alleen de naam, **geen logo**. Wij zijn een hackathon-team en zijn niet het bedrijf; niets dat suggereert dat we bij hen werken of dat het officieel is.
- Positie in beeld per persoon: **links / midden / rechts** (zoals ik in de video sta). De animatie start vanaf die kant: links = van links, midden = vanuit het midden naar beide kanten, rechts = van rechts.
- Animatie rustig en clean (geen bounce, één beweging per element, ease-in-out `cubic-bezier(.65,0,.35,1)`):
  1. accentlijn onderaan groeit vanaf de ankerkant (0-0,5 s)
  2. kaart/pill opent met een wipe (clip-path) vanaf dat punt, naam fadet 10 px omhoog in
  3. stilstand tot ±4 s
  4. accentkleur vult de pill van onderaf (naam zit eronder, volledig gekleurde pill)
  5. de gekleurde pill veegt weg naar de ankerkant (wipe, geen fade)
- Uitvoer: transparante **`.mov` (ProRes 4444)** per persoon, plus `.webm` met alpha en een **greenscreen `.mp4`** (#00FF00, voor chroma key) als CapCut de alpha niet pakt. Ook een still `.png` (1920x1080, transparant) per persoon.

## Werkwijze die werkte
1. Eén HTML-pagina met CSS-animaties (template onder). Parameters via querystring: `?n=Naam&pos=left|center|right`. Zet kleuren, font, radius in CSS-variabelen en pas ze aan naar het bedrijf. Font lokaal embedden (`@font-face` met een gedownload .ttf), anders valt Chromium terug op Arial.
2. Render met **Playwright (Chromium)**: viewport 1920x1080, `page.screenshot({omitBackground:true})`. Voor de animatie per frame `document.getAnimations().forEach(a=>{a.pause();a.currentTime=frame/30*1000})` en screenshot: 165 frames.
3. Encode met een ffmpeg die PNG en ProRes kent: `pip install imageio-ffmpeg` (de ffmpeg van Playwright kan dat NIET). Commando's:
   - `ffmpeg -framerate 30 -i %04d.png -c:v prores_ks -profile:v 4444 -pix_fmt yuva444p10le naam-alpha.mov`
   - `ffmpeg -framerate 30 -i %04d.png -c:v libvpx-vp9 -pix_fmt yuva420p -b:v 6M -auto-alt-ref 0 naam-alpha.webm`
   - `ffmpeg -f lavfi -i color=c=0x00FF00:s=1920x1080:r=30 -framerate 30 -i %04d.png -filter_complex "[0][1]overlay=shortest=1,format=yuv420p" -c:v libx264 -crf 12 naam-greenscreen.mp4`
4. Stuur alles per persoon. Uploadlimiet is 30 MB: zip met `ZIP_DEFLATED` (3 mov's = ±25 MB) of verstuur ze apart. Controleer een tussenframe en de still visueel voor je ze stuurt.

## Template (KBC-versie, pas kleuren/font/radius aan)
De kleuren `#0D2A50` (tekst) en `#0097DB` (accent/lijn/vulling), radius `56px` (pill) en Nunito Sans zijn KBC-specifiek; vervang ze door die van het nieuwe bedrijf.

```html
<!doctype html><meta charset="utf-8">
<style>@font-face{font-family:"Nunito Sans";src:url(n700.ttf);font-weight:700}
html,body{margin:0;background:transparent;width:1920px;height:1080px;overflow:hidden}
:root{--e:cubic-bezier(.65,0,.35,1)}
.pop{position:absolute;bottom:96px;display:flex;align-items:center;justify-content:center;height:112px;padding:0 72px;background:#fff;border-radius:56px;
 box-shadow:0 4px 16px rgba(0,54,101,.16);font-family:"Nunito Sans",sans-serif;color:#0D2A50;overflow:hidden;animation:card 5.5s var(--e) both}
.name{position:relative;font-weight:700;font-size:48px;line-height:56px;white-space:nowrap;letter-spacing:-.2px;animation:name 5.5s var(--e) both}
.bar{position:absolute;left:0;bottom:0;height:5px;width:100%;background:#0097DB;animation:bar 5.5s var(--e) both}
.fill{position:absolute;inset:0;background:#0097DB;transform-origin:bottom;animation:fill 5.5s var(--e) both}
.left{left:96px;--from:inset(-40px 100% -40px 0)}.left .bar{transform-origin:left}
.center{left:50%;translate:-50% 0;--from:inset(-40px 50% -40px 50%)}.center .bar{transform-origin:center}
.right{right:96px;--from:inset(-40px 0 -40px 100%)}.right .bar{transform-origin:right}
@keyframes card{0%,2.7%{clip-path:var(--from)}11.8%,83.6%{clip-path:inset(-40px)}94.5%,100%{clip-path:var(--from)}}
@keyframes bar{0%{transform:scaleX(0)}9.1%,100%{transform:scaleX(1)}}
@keyframes name{0%,7.3%{opacity:0;transform:translateY(10px)}14.5%,100%{opacity:1;transform:none}}
@keyframes fill{0%,72.7%{transform:scaleY(0)}83.6%,100%{transform:scaleY(1)}}
body.still *{animation:none!important}body.still .fill{display:none}
</style>
<div class="pop" id="p"><div class="name" id="n"></div><div class="bar"></div><div class="fill"></div></div>
<script>const q=new URLSearchParams(location.search);document.getElementById('n').textContent=q.get('n');document.getElementById('p').classList.add(q.get('pos'));if(q.get('still'))document.body.className='still'</script>
```

Render-loop (Node, Playwright): per persoon `[naam,pos]` openen op `page.html?pos=..&n=..`, `await document.fonts.ready`, 165 frames zoals hierboven, dan de ffmpeg-commando's.
