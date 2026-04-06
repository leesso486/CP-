const fs = require('fs');
let js = fs.readFileSync('../apply_sudanbi.js', 'utf8');

// The original S4 section starts with Dark Mode now because of rewrite_sudanbi_s4.js:
const darkHeader = '<section style="padding: 120px 0; background: #0A0F1C; border-top: 1px solid rgba(255,255,255,0.05); position: relative;">';
const lightHeader = '<section style="padding: 120px 0; background: radial-gradient(circle at top left, #F0FDF4 0%, #FFFFFF 100%); border-top: 1px solid #E2E8F0; position: relative;">';

const darkLeftBox = '<div style="position: sticky; top: 120px; background: rgba(255,255,255,0.02); border-radius: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); padding: 30px; display: flex; flex-direction: column; align-items: center; backdrop-filter: blur(10px);">';
const lightLeftBox = '<div style="position: sticky; top: 120px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.08); border: 1px solid #E2E8F0; padding: 30px; display: flex; flex-direction: column; align-items: center;">';

js = js.replace(darkHeader, lightHeader);
js = js.replace(darkLeftBox, lightLeftBox);

// S4 H2 text color
js = js.replace('color: #FFFFFF;">\\n               단어 하나에 담긴', 'color: #0F172A;">\\n               단어 하나에 담긴');

// Right buttons (Point 1~7)
js = js.replace(/background: rgba\(255,255,255,0\.03\); border: 1px solid rgba\(255,255,255,0\.08\);/g, 'background: #FFFFFF; border: 2px solid #E2E8F0;');
js = js.replace(/color: #FFFFFF;/g, 'color: #0F172A;');
js = js.replace(/color: #94A3B8;/g, 'color: #475569;');
js = js.replace(/background: rgba\(255,255,255,0\.1\); color: #0F172A;/g, 'background: #F1F5F9; color: #64748B;'); // Note: replaced #FFFFFF with #0F172A just above 
js = js.replace(/background: rgba\(59,130,246,0\.1\); color: #60A5FA;/g, 'background: #EFF6FF; color: #3B82F6;');
js = js.replace(/background: rgba\(139,92,246,0\.1\); color: #A78BFA;/g, 'background: #F5F3FF; color: #8B5CF6;');

// Hover 
js = js.replace(/background: rgba\(16,185,129,0\.1\) !important;/g, 'background: #F0FDF4 !important;');

// Official Guide title
js = js.replace('color: #0F172A; margin-bottom: 16px;">\\n                📖 공식', 'color: #0F172A; margin-bottom: 16px;">\\n                📖 공식');

// Gallery Cards Box Shadow
js = js.replace(/background: #0A0F1C;/g, 'background: #FFF;');

// IN THE TIMELINE GENERATOR (renderSDLevelTheatre & level navigation)
// Line ~840: document.getElementById('sd-level-theatre-bg').style.background = `radial-gradient(circle at 75% 50%, \${dataInfo.color}15 0%, #F8FAFC 60%)`;
// Wait, I didn't change it to dark in apply_sudanbi via script, I did it manually using replace_file_content!
// Let's directly replace timeline dark components!
js = js.replace(/background: rgba\(255,255,255,0\.05\)/g, 'background: #FFFFFF');
js = js.replace(/color: white/g, 'color: #0F172A');
js = js.replace(/border: 1px solid rgba\(255,255,255,0\.1\)/g, 'border: 2px solid transparent');

fs.writeFileSync('../apply_sudanbi.js', js, 'utf8');

// Now we need to manually fix apply_sudanbi.js Timeline if the regex messed up.
console.log('S4 Magnifier and Timeline reverted to Light Mode in apply_sudanbi.js!');
