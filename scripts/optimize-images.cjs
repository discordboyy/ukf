const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(
  process.cwd(),
  "public/hva-skjer/icons"
);

const outputDir = path.join(
  process.cwd(),
  "public/hva-skjer/icons-optimized"
);

const supportedExtensions = [".png", ".jpg", ".jpeg"];

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs.readdirSync(inputDir).filter((file) =>
    supportedExtensions.includes(path.extname(file).toLowerCase())
  );

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputName = path.basename(file, path.extname(file)) + ".webp";
    const outputPath = path.join(outputDir, outputName);

    await sharp(inputPath)
      .rotate()
      .resize({
        width: 500,
        height: 500,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80, effort: 5 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const saved = Math.round((1 - optimizedSize / originalSize) * 100);

    console.log(
      `${file}: ${(originalSize / 1024).toFixed(0)} KB → ` +
      `${(optimizedSize / 1024).toFixed(0)} KB (−${saved}%)`
    );
  }

  console.log(`\nDone! Optimized images: ${outputDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
