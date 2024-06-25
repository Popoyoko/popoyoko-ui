import * as fs from 'fs';
import * as path from 'path';

const tokensDir = path.resolve(__dirname, 'build-tokens/web'); 
const BrandName = "Popoyoko"; 

const expectedFiles = [
  `Color${BrandName}Dark.ts`,
  `Color${BrandName}Light.ts`,
  `Component${BrandName}.ts`,
  `Sizes${BrandName}.ts`
];

function checkTokens() {
  const missingFiles = expectedFiles.filter(filename => {
    const filePath = path.join(tokensDir, filename);
    return !fs.existsSync(filePath);
  });

  if (missingFiles.length > 0) {
    console.error('Certains fichiers de tokens sont manquants :');
    missingFiles.forEach(filename => {
      console.error(filename);
    });
    process.exit(1);
  } else {
    console.log('Tous les fichiers de tokens sont présents.');
  }
}

checkTokens();
