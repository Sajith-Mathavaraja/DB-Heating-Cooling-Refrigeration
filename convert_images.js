import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const assetsDir = './src/assets';

fs.readdirSync(assetsDir).forEach(async (file) => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    const inputPath = path.join(assetsDir, file);
    const outputPath = path.join(assetsDir, file.replace(/\.(jpg|jpeg)$/, '.webp'));
    
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
      
    console.log(`Converted ${file} -> ${path.basename(outputPath)}`);
  }
});
