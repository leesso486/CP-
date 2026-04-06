const fs = require('fs');

let js = fs.readFileSync('../apply_sudanbi.js', 'utf8');

// The original S4 section starts with:
// <section style="padding: 120px 0; background: radial-gradient(circle at top left, #F0FDF4 0%, #FFFFFF 100%); border-top: 1px solid #E2E8F0; position: relative;">
const oldHeader = '<section style="padding: 120px 0; background: radial-gradient(circle at top left, #F0FDF4 0%, #FFFFFF 100%); border-top: 1px solid #E2E8F0; position: relative;">';
const newHeader = '<section style="padding: 120px 0; background: #0A0F1C; border-top: 1px solid rgba(255,255,255,0.05); position: relative;">';

// Left Magnifier Box:
// <div style="position: sticky; top: 120px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.08); border: 1px solid #E2E8F0; padding: 30px; display: flex; flex-direction: column; align-items: center;">
const oldLeftBox = '<div style="position: sticky; top: 120px; background: #FFFFFF; border-radius: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.08); border: 1px solid #E2E8F0; padding: 30px; display: flex; flex-direction: column; align-items: center;">';
const newLeftBox = '<div style="position: sticky; top: 120px; background: rgba(255,255,255,0.02); border-radius: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08); padding: 30px; display: flex; flex-direction: column; align-items: center; backdrop-filter: blur(10px);">';

// Update Header Texts
js = js.replace(oldHeader, newHeader);
js = js.replace(oldLeftBox, newLeftBox);

// <h2 style="font-size: clamp(2rem, 4vw, 3rem); font-weight: 900; margin-bottom: 1.5rem; letter-spacing: -1.5px; line-height: 1.3; color: #0F172A;">
js = js.replace('color: #0F172A;">\n               단어 하나에 담긴', 'color: #FFFFFF;">\n               단어 하나에 담긴');

// Right buttons (Point 1~7)
// class="sd-mag-btn" ... style="background: #FFFFFF; border: 2px solid #E2E8F0; ... color: #0F172A
js = js.replace(/background: #FFFFFF; border: 2px solid #E2E8F0;/g, 'background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08);');
js = js.replace(/color: #0F172A;/g, 'color: #FFFFFF;');
js = js.replace(/color: #475569;/g, 'color: #94A3B8;');
js = js.replace(/background: #F1F5F9; color: #64748B;/g, 'background: rgba(255,255,255,0.1); color: #FFFFFF;');
js = js.replace(/background: #EFF6FF; color: #3B82F6;/g, 'background: rgba(59,130,246,0.1); color: #60A5FA;');
js = js.replace(/background: #F5F3FF; color: #8B5CF6;/g, 'background: rgba(139,92,246,0.1); color: #A78BFA;');

// CSS .sd-mag-btn:hover handling
js = js.replace(/background: #F0FDF4 !important;/g, 'background: rgba(16,185,129,0.1) !important;');

// 📖 공식 매뉴얼로
js = js.replace('color: #0F172A; margin-bottom: 16px;">\n                📖 공식', 'color: #FFFFFF; margin-bottom: 16px;">\n                📖 공식');

// Gallery Cards Box Shadow
js = js.replace(/background: #FFF;/g, 'background: #0A0F1C;');

fs.writeFileSync('../apply_sudanbi.js', js, 'utf8');
console.log('Upgraded S4 Magnifier to Dark Mode!');
