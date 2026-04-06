const fs = require('fs');

const txt = fs.readFileSync('public/sudanbi.html', 'utf8');
const lines = txt.split('\n');

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("if(sdMagMode === 'crop5')") || lines[i].includes("if(sdMagMode === 'crop6')")) {
        console.log(lines.slice(i, i+15).join('\n'));
        break;
    }
}
