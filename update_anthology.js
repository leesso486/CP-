const fs = require('fs');

let html = fs.readFileSync('../anthology.html', 'utf8');

// The file has 4 sections.
const parts = html.split('<section');
let pre = parts[0];
let s1 = '<section' + parts[1];
let s2 = '<section' + parts[2];
let s3 = '<section' + parts[3];
let s4 = '<section' + parts[4];

// Section 3: Make it Dark
s3 = s3.replace('background: #FFFFFF;', 'background: #090E17; color: white;');
s3 = s3.replace(/color: #0F172A;/g, 'color: #FFFFFF;');
s3 = s3.replace(/color:#0F172A/g, 'color:#FFFFFF');
s3 = s3.replace(/color: #64748B;/g, 'color: #94A3B8;');
s3 = s3.replace(/border: 1px solid #E2E8F0/g, 'border: 1px solid rgba(255,255,255,0.1)');
s3 = s3.replace(/background: #F8FAFC/g, 'background: rgba(255,255,255,0.03); backdrop-filter: blur(10px)');

// Section 4: Make it Darker
s4 = s4.replace('background: #0F172A;', 'background: #040B16;');

// Inject some Santa Toeic glowing elements into the page
const authStyles = `
<style>
.dark-card-hover { transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); border: 1px solid rgba(255,255,255,0.05); }
.dark-card-hover:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0,0,0,0.4), 0 0 20px rgba(96,165,250,0.15); border-color: rgba(96,165,250,0.3); }
</style>
`;
s3 = s3.replace('position: relative;', 'position: relative;\n' + authStyles);
// Also apply the hover class to existing cards in s3 if any
s3 = s3.replace(/background: rgba\(255,255,255,0\.03\); backdrop-filter: blur\(10px\)/g, 'background: rgba(255,255,255,0.03); backdrop-filter: blur(10px);" class="dark-card-hover');

const newHTML = pre + s1 + s2 + s3 + s4;
fs.writeFileSync('../anthology.html', newHTML, 'utf8');
console.log('Re-themed Anthology');
