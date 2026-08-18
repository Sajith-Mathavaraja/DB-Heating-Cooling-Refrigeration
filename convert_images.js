import sharp from 'sharp';
import path from 'path';

const assetsDir = './src/assets';
const publicDir = './public';

// Target dimensions matched to actual display sizes on the website
// + quality 72 for aggressive but visually clean compression
const images = [
  // Service card images — displayed at ~662x494px on desktop
  { file: 'service_heating.jpg', width: 800, height: 500 },
  { file: 'service_ac.jpg',      width: 800, height: 500 },
  { file: 'service_hvac.jpg',    width: 800, height: 500 },
  // Residential + Commercial section cards — displayed at ~800x500px
  { file: 'residential_hvac.jpg', width: 900, height: 520 },
  { file: 'commercial_refrig.jpg', width: 900, height: 520 },
  // About section image — displayed at ~600px wide
  { file: 'about_technician.jpg', width: 800, height: 600 },
  // Hero image — displayed at ~900px wide on desktop
  { file: 'hero_male_tech.jpg',  width: 1000, height: 700 },
];

async function convertAll() {
  for (const { file, width, height } of images) {
    const inputPath  = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace(/\.(jpg|jpeg)$/, '.webp'));

    const info = await sharp(inputPath)
      .resize(width, height, { fit: 'cover', position: 'attention' })
      .webp({ quality: 72, effort: 6 })
      .toFile(outputPath);

    const kb = (info.size / 1024).toFixed(1);
    console.log(`✓ ${file} → ${path.basename(outputPath)} | ${width}x${height} | ${kb} kB`);
  }

  // Also re-compress the hero image into public/ for LCP preload
  const heroInput  = path.join(assetsDir, 'hero_male_tech.jpg');
  const heroOutput = path.join(publicDir, 'hero_male_tech.webp');

  const heroInfo = await sharp(heroInput)
    .resize(1000, 700, { fit: 'cover', position: 'attention' })
    .webp({ quality: 72, effort: 6 })
    .toFile(heroOutput);

  const heroKb = (heroInfo.size / 1024).toFixed(1);
  console.log(`✓ hero_male_tech.jpg → public/hero_male_tech.webp | 1000x700 | ${heroKb} kB`);
}

convertAll().catch(console.error);
