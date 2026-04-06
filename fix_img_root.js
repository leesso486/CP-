const fs = require('fs');

function fixFile(file) {
    if (!fs.existsSync(file)) return;
    let txt = fs.readFileSync(file, 'utf8');
    
    txt = txt.replace(/([^/])(['"])images\//g, '$1$2/images/');
    
    fs.writeFileSync(file, txt);
    console.log('Fixed ', file);
}

fixFile('../apply_sudanbi.js');
fixFile('../apply_anthology.js');
fixFile('../index.html');
fixFile('../katch.html');
fixFile('../update_sudanbi_tsx.js');
fixFile('../sudanbi.html');
fixFile('../anthology.html');
console.log('Done fixing parent paths.');
