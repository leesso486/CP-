const fs = require('fs');

function finalizeLight(filePath) {
   if(!fs.existsSync(filePath)) return;
   let html = fs.readFileSync(filePath, 'utf8');

   html = html.replace(/background: #090E17; color: white;/g, 'background: #F8FAFC; color: #0F172A;');
   
   // KATCH specific dashboard dark backgrounds
   // If KATCH has `#0a0f1c` base (wait, I replaced #0a0f1c with #F8FAFC in previous script? Actually I replaced #0A0F1C with #F8FAFC but only uppercase!).
   html = html.replace(/background: #0a0f1c;/g, 'background: #FFFFFF;');
   html = html.replace(/background:#0a0f1c;/g, 'background:#FFFFFF;');
   html = html.replace(/background: #111827;/g, 'background: #F1F5F9;');
   html = html.replace(/background: #1F2937;/g, 'background: #E2E8F0;');
   html = html.replace(/background: rgba\(17,24,39,0\.8\);/g, 'background: rgba(255,255,255,0.8);');
   
   html = html.replace(/color: white;/g, 'color: #0F172A;'); // CAREFUL! There are legit white text
   // Let's not blindly replace color: white globally without checks.
   // I will selectively replace the section 3 in Anthology via JS string replace.

   fs.writeFileSync(filePath, html, 'utf8');
   console.log(filePath + ' - Final light tweaks applied!');
}

let antho = fs.readFileSync('../anthology.html', 'utf8');
antho = antho.replace('<section style="padding: 120px 4%; background: #090E17; color: white; position: relative; overflow:hidden;">', '<section style="padding: 120px 4%; background: #F8FAFC; color: #0F172A; position: relative; overflow:hidden;">');
fs.writeFileSync('../anthology.html', antho, 'utf8');

let katch = fs.readFileSync('../katch.html', 'utf8');
// Fix katch hero / base to light
katch = katch.replace(/background: #0a0f1c;/ig, 'background: #F8FAFC;');
katch = katch.replace(/background:#0a0f1c;/ig, 'background:#F8FAFC;');
fs.writeFileSync('../katch.html', katch, 'utf8');

let index = fs.readFileSync('../index.html', 'utf8');
index = index.replace(/background: #0a0f1c;/ig, 'background: #FFFFFF;');
// index hero was Dark: `<section class="hero" id="home" style="... background: #0A0F1C;">`
index = index.replace(/background: #0A0F1C;/g, 'background: radial-gradient(circle at center, #F8FAFC 0%, #FFFFFF 100%);');
fs.writeFileSync('../index.html', index, 'utf8');

console.log('Fixed Anthology S3 and KATCH / Index base backgrounds!');
