const fs = require('fs');

const lines = fs.readFileSync('../index.html', 'utf8').split('\n');
const idx = lines.findIndex(l => l.includes('id="about"'));
console.log(lines.slice(idx, idx + 40).join('\n'));
