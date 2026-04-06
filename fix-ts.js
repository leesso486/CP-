const fs = require('fs');

let pageTsx = fs.readFileSync('app/page.tsx', 'utf8');

pageTsx = pageTsx.replace(/style=\{\{"--(base|track)-color":"(#[A-F0-9a-f]+)"\}\}/gi, (match, type, color) => {
  return 'style={{ "--' + type + '-color": "' + color + '" } as React.CSSProperties}';
});

fs.writeFileSync('app/page.tsx', pageTsx, 'utf8');
console.log('Fixed TS casting in app/page.tsx');
