const fs = require('fs');

let indexHtml = fs.readFileSync('../index.html', 'utf8');

// The file has 5 sections. Let's split by '<section'
const parts = indexHtml.split('<section');

// parts[0] is everything before the first section
const pre = parts[0];

// The actual sections
const s1 = '<section' + parts[1]; // Hero
const s2 = '<section' + parts[2]; // Dark About KNS
const s3 = '<section' + parts[3]; // Infra
const s4 = '<section' + parts[4]; // Curriculum
const s5 = '<section' + parts[5]; // Products

// Let's modify s3 (Infra) to be slightly more techy but still light/slate grey transition
let newS3 = s3;
newS3 = newS3.replace('background:#F8FAFC', 'background:#F1F5F9'); 
// ... I'll keep s3 mostly as is, maybe tune the quad cards to look a bit more "tech"
newS3 = newS3.replace('bq-card reveal', 'bq-card reveal tech-hover'); 

let newS4 = s4;
newS4 = newS4.replace('background:#FFFFFF', 'background:#E2E8F0; padding-bottom:140px;'); // Even darker grey transition

// Modify s5 (Products) to be Dark
let newS5 = s5;
newS5 = newS5.replace('background:#F8FAFC', 'background:#0B1120'); // Deep dark matching s2
newS5 = newS5.replace(/color:#0F172A/g, 'color:#FFFFFF');
newS5 = newS5.replace(/color:#64748B/g, 'color:#94A3B8');
newS5 = newS5.replace('g-card ', 'g-card dark-glass '); 

const extraStyles = `
<style>
.tech-hover { border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); }
.tech-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(37,99,235,0.1); border-color: rgba(37,99,235,0.2) !important; }
.dark-glass {
    background: rgba(255,255,255,0.02) !important;
    border: 1px solid rgba(255,255,255,0.05) !important;
    border-radius: 24px !important;
    backdrop-filter: blur(20px);
    transition: all 0.4s;
}
.dark-glass:hover {
    background: rgba(255,255,255,0.05) !important;
    border-color: rgba(96,165,250,0.3) !important;
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(96,165,250,0.1);
}
.dark-glass .g-desc { color: #94A3B8 !important; }
.dark-glass .g-link { color: #60A5FA !important; }
</style>
`;

// Reorder: Hero (s1) -> Infra (newS3) -> Curriculum (newS4) -> Dark About KATCH (s2) -> Dark Products (newS5)
// Wait, the user's narrative is: Publishing -> Edu -> Online (S2 is Online! It says "이제 압도적 에듀테크 솔루션으로")
// Let's combine them into a flawless HTML.

const newBody = pre + s1 + extraStyles + newS3 + newS4 + s2 + newS5;
fs.writeFileSync('../index.html', newBody, 'utf8');
console.log('Reordered and styled sections.');
