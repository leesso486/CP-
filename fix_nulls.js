const fs = require('fs');
function fixErrors(file) {
    let txt = fs.readFileSync(file, 'utf8');
    
    // Replace document.getElementById('...') with (document.getElementById('...') as HTMLElement)
    txt = txt.replace(/document\.getElementById\('([^']+)'\)/g, "(document.getElementById('$1') as HTMLElement)");
    
    // Replace document.querySelector('...') with (document.querySelector('...') as HTMLElement)
    txt = txt.replace(/document\.querySelector\('([^']+)'\)/g, "(document.querySelector('$1') as HTMLElement)");
    
    // Also optional chaining for .style etc won't happen because we cast to HTMLElement, but just in case
    // some elements aren't casted.
    
    fs.writeFileSync(file, txt);
}
fixErrors('app/anthology/page.tsx');
fixErrors('app/sudanbi/page.tsx');
console.log('Done fixing nulls.');
