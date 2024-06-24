// validateTokens.ts
import * as fs from 'fs';
import * as path from 'path';
import { tokenPath } from './tokensconfig';

const requiredFiles = ['Color${token}Dark.ts', 'Color${token}Light.ts', 'Component${token}.ts', 'Sizes${token}.ts'];

function validateTokens() {
  const tokensDir = path.resolve(__dirname, tokenPath);
  if (!fs.existsSync(tokensDir)) {
    console.error(`Token directory does not exist: ${tokensDir}`);
    process.exit(1);
  }

  const projects = fs.readdirSync(tokensDir);
  projects.forEach(project => {
    const projectPath = path.join(tokensDir, project);
    if (fs.lstatSync(projectPath).isDirectory()) {
      requiredFiles.forEach(fileTemplate => {
        const fileName = fileTemplate.replace('${token}', project);
        const filePath = path.join(projectPath, fileName);
        if (!fs.existsSync(filePath)) {
          console.error(`Missing required token file: ${filePath}`);
          process.exit(1);
        }
      });
    }
  });

  console.log('All tokens are valid!');
}

validateTokens();
