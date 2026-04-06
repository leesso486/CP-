const fs = require('fs');

let html = fs.readFileSync('../katch.html', 'utf8');

// Replace backgrounds
html = html.replace(/background:#F8FAFC/g, 'background:#040B16'); // Darker for 1 and 3
html = html.replace(/background:#FFFFFF/g, 'background:#090E17'); // Dark for 2

// Replace Texts
html = html.replace(/color:#0F172A/g, 'color:#FFFFFF');
html = html.replace(/color: #0F172A/g, 'color: #FFFFFF');
html = html.replace(/color:#475569/g, 'color:#94A3B8');
html = html.replace(/color: #475569/g, 'color: #94A3B8');
html = html.replace(/color:#64748B/g, 'color:#94A3B8');

// The Title in S1
html = html.replace(
    '<h1 style="font-size:clamp(3rem, 5vw, 4.5rem);font-weight:900;color:#0F172A;line-height:1.2;letter-spacing:-1.5px;margin-bottom:24px">KNS의 모든 것을 담은<br/>단 하나의 통합 플랫폼</h1>',
    '<h1 style="font-size:clamp(3rem, 5vw, 4.5rem);font-weight:900;color:#FFFFFF;line-height:1.2;letter-spacing:-1.5px;margin-bottom:24px">KNS의 모든 것을 담은<br/><span style="background:linear-gradient(135deg, #60A5FA, #A855F7);-webkit-background-clip:text;-webkit-text-fill-color:transparent">단 하나의 에듀테크 통합 플랫폼</span></h1>'
);

// S2 Feature grid items currently use #F8FAFC
html = html.replace(/background:#F8FAFC;border:1px solid #E2E8F0/g, 'background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);backdrop-filter:blur(20px);box-shadow:0 10px 30px rgba(0,0,0,0.3)');

// S3 borders
html = html.replace(/border-bottom:1px solid #E2E8F0/g, 'border-bottom:1px solid rgba(255,255,255,0.05)');
html = html.replace(/border-top:1px solid #E2E8F0/g, 'border-top:1px solid rgba(255,255,255,0.05)');

// Add hovering and glowing orbs to KATCH (S1 S2 S3)
let parts = html.split('<section');
let newS1 = '<section' + parts[1];
newS1 = newS1.replace('style="', 'style="overflow:hidden;');
newS1 = newS1.replace('<div class="container reveal">', '<div style="position:absolute;width:60vw;height:60vw;background:radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 60%);border-radius:50%;top:-20%;left:-20%;filter:blur(80px);pointer-events:none;z-index:0"></div><div class="container reveal" style="position:relative;z-index:10">');

let newS2 = '<section' + parts[2];
newS2 = newS2.replace('style="', 'style="position:relative;overflow:hidden;');
newS2 = newS2.replace('<div class="container reveal">', '<div style="position:absolute;width:50vw;height:50vw;background:radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 60%);border-radius:50%;bottom:-10%;right:-10%;filter:blur(80px);pointer-events:none;z-index:0"></div><div class="container reveal" style="position:relative;z-index:10">');

const finalHtml = parts[0] + newS1 + newS2 + '<section' + parts[3];
fs.writeFileSync('../katch.html', finalHtml, 'utf8');
console.log('Re-themed KATCH to Full Dark Tech Mode');
