const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src/assets/web');
const outputDir = path.join(__dirname, 'src/assets/web');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach((file) => {
  const extname = path.extname(file).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(extname)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(extname, '.webp'));

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath, (err, info) => {
        if (err) {
          console.error('Error al convertir la imagen:', err);
        } else {
          console.log(`Imagen convertida: ${info}`);
        }
      });
  }
});
