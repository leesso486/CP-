const fs = require('fs');
const paths = [
    '../sudanbi.html',
    'public/sudanbi.html'
];

for(let p of paths) {
    if(!fs.existsSync(p)) {
        console.log('Not found:', p);
        continue;
    }
    let txt = fs.readFileSync(p, 'utf8');
    
    // remove backslashes
    txt = txt.replace(/optionsHtml \+\= \\`/g, "optionsHtml += `");
    txt = txt.replace(/\\`\s*;/g, "`;");
    txt = txt.replace(/\\\$\{safeOpt\}/g, "${safeOpt}");
    txt = txt.replace(/\\\$\{opt\}/g, "${opt}");
    
    fs.writeFileSync(p, txt, 'utf8');
    console.log('Fixed:', p);
}
