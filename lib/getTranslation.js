import fs from 'fs';
import path from 'path';

export async function getTranslations(locale, namespace) {
    // 1. Détermination du chemin absolu
    const filePath = path.join(process.cwd(), 'public', 'locales', locale, `${namespace}.json`);

    // 2. Lecture physique du fichier
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // 3. Conversion en objet JS
    return JSON.parse(fileContent);
}
