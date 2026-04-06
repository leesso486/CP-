const fs = require('fs');

function fixFile(file) {
    if (!fs.existsSync(file)) return;
    let txt = fs.readFileSync(file, 'utf8');
    
    // Replace something like src="images/..." or cover: 'images/...'
    // Ensure we don't duplicate slashes. We look for a quote character, then 'images/'
    
    // Pattern: capture a quote (single or double), then 'images/', replace with quote + '/images/'
    txt = txt.replace(/(['"])images\//g, '$1/images/');
    
    fs.writeFileSync(file, txt);
    console.log('Fixed ', file);
}

fixFile('app/sudanbi/page.tsx');
fixFile('app/anthology/page.tsx');
fixFile('app/katch/page.tsx');
fixFile('app/page.tsx');
