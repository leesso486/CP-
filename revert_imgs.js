const fs = require('fs');

function revert(f) {
    if(fs.existsSync(f)) {
        let txt = fs.readFileSync(f, 'utf8');
        // Look for something like ="/images/ or ='/images/
        // And replace with ="images/
        txt = txt.replace(/([^/])(['"])\/images\//g, '$1$2images/');
        fs.writeFileSync(f, txt);
        console.log('Reverted', f);
    }
}

revert('../index.html');
revert('../katch.html');
revert('../sudanbi.html');
revert('../anthology.html');
revert('../apply_sudanbi.js');
revert('../apply_anthology.js');
