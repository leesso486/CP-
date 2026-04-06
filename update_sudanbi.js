const fs = require('fs');

let html = fs.readFileSync('../sudanbi.html', 'utf8');

const parts = html.split('<section');
let pre = parts[0];
let s1 = '<section' + parts[1]; // Hero
let s2 = '<section' + parts[2]; // Minigame
let s3 = '<section' + parts[3]; // Timeline
let s4 = '<section' + parts[4]; // Magnifier
let s5 = '<section' + parts[5]; // Footer

// Transition S3 to grey
s3 = s3.replace('background: #FFFFFF;', 'background: #F8FAFC;');

// S4 Magnifier Dark Tech 
s4 = s4.replace('background: radial-gradient(circle at top left, #F0FDF4 0%, #FFFFFF 100%);', 'background: #090E17; color: white;');
s4 = s4.replace('color: #0F172A;', 'color: #FFFFFF;');
// Any text color #475569 to #94A3B8 in S4
s4 = s4.replace(/color: #475569;/g, 'color: #94A3B8;');
s4 = s4.replace(/color:#475569/g, 'color:#94A3B8');
s4 = s4.replace(/color: #10B981;/g, 'color: #34D399;'); // Make green brighter for dark mode
s4 = s4.replace(/color: #059669;/g, 'color: #A7F3D0;'); 

// The magnifier container styling if it's there
s4 = s4.replace(/background: white/g, 'background: rgba(255,255,255,0.03)');
s4 = s4.replace(/background:#FFFFFF/g, 'background:rgba(255,255,255,0.03)');
s4 = s4.replace(/box-shadow:.*?;/g, 'box-shadow: 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(16,185,129,0.2) inset;');

// Add dark glass to the point buttons and active states
s4 = s4.replace('<style>', '<style>\n.sd-point-btn { background: rgba(255,255,255,0.05); color: #94A3B8; border: 1px solid rgba(255,255,255,0.1); }\n.sd-point-btn.active { background: rgba(16,185,129,0.1) !important; color: #34D399 !important; border-color: rgba(16,185,129,0.5) !important; box-shadow: 0 0 15px rgba(16,185,129,0.2) !important; }\n.sd-image-container { border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; }\n');

// Make sure the manual panel text gets lightened
s4 = s4.replace(/id="sdManualTitle" style="font-size: 1.4rem; font-weight: 800; color: #0F172A;/g, 'id="sdManualTitle" style="font-size: 1.4rem; font-weight: 800; color: #FFFFFF;');
s4 = s4.replace(/id="sdManualDesc" style="color: #475569;/g, 'id="sdManualDesc" style="color: #94A3B8;');

// Also apply for apply_sudanbi.js because it injects the UI!
// I must run a separate patch for apply_sudanbi.js to ensure the dynamic DOM elements match the dark mode.

// S5 Darker
s5 = s5.replace('background: #0F172A;', 'background: #040B16;');

const finalHtml = pre + s1 + s2 + s3 + s4 + s5;
fs.writeFileSync('../sudanbi.html', finalHtml, 'utf8');
console.log('Re-themed Sudanbi');
