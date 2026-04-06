const fs = require('fs');

function findLines(path) {
    if(!fs.existsSync(path)) return;
    const lines = fs.readFileSync(path, 'utf8').split('\n');
    let s = -1, e = -1;
    for(let i=0; i<lines.length; i++) {
        if(lines[i].includes('Level Test Minigame Section')) s = i + 1;
        if(lines[i].includes('id="contact"')) e = i + 1;
    }
    console.log(path + ' -> s:' + s + ' e:' + e);
}

findLines('../sudanbi.html');
findLines('public/sudanbi.html');
