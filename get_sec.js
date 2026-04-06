const fs = require('fs');

const txt = fs.readFileSync('../index.html', 'utf8');

// Find the main sections
const sections = txt.split('<section');
const summary = sections.map((s, i) => {
    if (i === 0) return 'PRE-SECTION: ' + s.substring(0, 50);
    return 'SECTION ' + i + ': ' + s.substring(0, 100);
});

fs.writeFileSync('sections.json', JSON.stringify(summary, null, 2));
