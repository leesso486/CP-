const fs = require('fs');

const data = fs.readFileSync('public/images/sudanbi_test_page.png');

console.log("length: ", data.length);
// magic bytes for png: 89 50 4E 47 0D 0A 1A 0A
// IHDR chunk: length (4 bytes), type (4 bytes), width (4 bytes), height (4 bytes)
const width = data.readUInt32BE(16);
const height = data.readUInt32BE(20);

console.log(`Dimensions: ${width}x${height}`);
