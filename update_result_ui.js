const fs = require('fs');

const renderResultStr = fs.readFileSync('new_render_result.txt', 'utf8');
const paths = ['../sudanbi.html', 'public/sudanbi.html'];

paths.forEach(p => {
    if(!fs.existsSync(p)) return;
    let txt = fs.readFileSync(p, 'utf8');

    // extract everything before renderResult()
    const startIndex = txt.indexOf('function renderResult() {');
    // find end of renderResult() by looking for function renderLeaderboard()
    const endIndexStr = 'function renderLeaderboard() {';
    const endIndex = txt.indexOf(endIndexStr);

    if(startIndex !== -1 && endIndex !== -1) {
        const before = txt.substring(0, startIndex);
        const after = txt.substring(endIndex);
        
        txt = before + renderResultStr + '\n    ' + after;
        
        fs.writeFileSync(p, txt, 'utf8');
        console.log('Successfully updated renderResult design in', p);
    } else {
        console.log('Could not find renderResult or renderLeaderboard in', p);
    }
});
