// Renders kaarten-pakketten.html to kaarten-pakketten.mp4 (10 s, 30 fps, 1920×1080).
// Usage: node render.js   (needs playwright + an ffmpeg binary; set FFMPEG=/path/to/ffmpeg)
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

const FPS = 30, DURATION = 10, W = 1920, H = 1080;
const ffmpegBin = process.env.FFMPEG || 'ffmpeg';
const out = path.join(__dirname, 'kaarten-pakketten.mp4');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.goto('file://' + path.join(__dirname, 'kaarten-pakketten.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const ff = spawn(ffmpegBin, ['-y', '-f', 'image2pipe', '-framerate', String(FPS), '-i', '-',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'slow', '-movflags', '+faststart', out],
    { stdio: ['pipe', 'inherit', 'inherit'] });

  for (let i = 0; i < FPS * DURATION; i++) {
    const t = (i / FPS) * 1000;
    await page.evaluate(t => document.getAnimations().forEach(a => { a.pause(); a.currentTime = t; }), t);
    ff.stdin.write(await page.screenshot({ type: 'png' }));
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  await browser.close();
  console.log('Wrote', out);
})();
