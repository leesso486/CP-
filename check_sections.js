const fs = require('fs');
const txt = fs.readFileSync('../index.html', 'utf8');

const regex = /<section[^>]*>(.*?)<\/section>/gs;
let match;
let count = 1;
while ((match = regex.exec(txt)) !== null) {
    const secTag = match[0].match(/<section[^>]*>/)[0];
    const snippet = match[1].substring(0, 150).replace(/\n/g, ' ');
    console.log(`Section ${count}: ${secTag}`);
    console.log(`Snippet: ${snippet}\n`);
    count++;
}
