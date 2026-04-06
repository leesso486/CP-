const fs = require('fs');
const out = {};
['../anthology.html', '../sudanbi.html', '../katch.html'].forEach(f => {
    try {
        const t = fs.readFileSync(f, 'utf8');
        const m = t.match(/<section[^>]*>(.*?)<\/section>/gs);
        if(m) {
            out[f] = m.map(s => s.match(/<section[^>]*>/)[0]);
        }
    }catch(e){}
});
fs.writeFileSync('pages.json', JSON.stringify(out, null, 2));
