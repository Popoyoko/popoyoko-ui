import { tokenPath } from './tokensconfig';
import fs from 'fs';
import path from 'path';

const requiredFiles = [
  'ColorDark.ts',
  'ColorLight.ts',
  'Component.ts',
  'Sizes.ts'
];

export const validateTokenStructure = () => {
  const tokensDir = path.resolve(__dirname, tokenPath);
  requiredFiles.forEach(file => {
    const filePath = path.join(tokensDir, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing token file: ${filePath}`);
    }
  });
  console.log('All required token files are present.');
};

validateTokenStructure();
