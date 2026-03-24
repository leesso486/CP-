const fs = require('fs');
const path = require('path');

const legacyPath = path.join(__dirname, '..', '.legacy', 'css', 'styles.css');
const targetPath = path.join(__dirname, 'app', 'globals.css');

let legacyCss = '';
try {
    legacyCss = fs.readFileSync(legacyPath, 'utf8');
} catch(e) { console.log("No legacy css"); }

// Write fresh globals.css with tailwind directives + legacy css in pure UTF-8
const freshGlobals = `
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Legacy Styles Migrated */
${legacyCss}
`;

fs.writeFileSync(targetPath, freshGlobals, 'utf8');
console.log('Successfully fixed globals.css encoding!');
