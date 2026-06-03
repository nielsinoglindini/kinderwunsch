import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFile = path.resolve(__dirname, '../dist/index.html');

if (!fs.existsSync(targetFile)) {
  console.error(`Fehler: ${targetFile} wurde nicht gefunden. Bitte führe zuerst "npm run build" aus.`);
  process.exit(1);
}

const password = process.env.STATICRYPT_PASSWORD;

if (!password) {
  console.warn('\n⚠️  WARNUNG: Die Umgebungsvariable STATICRYPT_PASSWORD ist nicht gesetzt!');
  console.warn('Der Build verwendet das Standard-Passwort: "kinderwunsch"');
  console.warn('Um ein eigenes Passwort zu setzen, führe folgenden Befehl aus:');
  console.warn('  STATICRYPT_PASSWORD="dein-passwort" npm run build\n');
}

const buildPassword = password || 'kinderwunsch';

console.log('🔐 Verschlüssele dist/index.html mit StatiCrypt...');

const args = [
  'staticrypt',
  'dist/index.html',
  '-p', `"${buildPassword}"`,
  '--short',
  '--directory', 'dist',
  '--template-title', '"Kinderwunsch"',
  '--template-color-primary', '"#D4B8B1"',
  '--template-color-secondary', '"#FAF9F6"',
  '--template-instructions', '"Bitte gib das Passwort ein, um auf die Seite zuzugreifen."',
  '--template-placeholder', '"Passwort"',
  '--template-button', '"Entsperren"',
  '--template-error', '"Ungültiges Passwort!"',
  '--remember', '30',
  '--template-remember', '"Passwort merken"'
];

try {
  execSync(`npx --yes ${args.join(' ')}`, { stdio: 'inherit' });
  console.log('✅ dist/index.html wurde erfolgreich verschlüsselt!\n');
} catch (error) {
  console.error('❌ Verschlüsselung fehlgeschlagen:', error);
  process.exit(1);
}
