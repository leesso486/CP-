const fs = require('fs');

let html = fs.readFileSync('../anthology.html', 'utf8');

// Header Dark Mode conversion
html = html.replace(/background: rgba\(255,255,255,0\.95\); backdrop-filter: blur\(12px\);/g, 'background: rgba(10,15,28,0.8); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05);');
html = html.replace(/background: rgba\(255,255,255,0\.98\);/g, 'background: rgba(10,15,28,0.95);');
html = html.replace(/color: #0F172A;/g, 'color: #FFFFFF;');
html = html.replace(/color: #475569;/g, 'color: #94A3B8;');
html = html.replace(/color: #64748B;/g, 'color: #cbd5e1;');
html = html.replace(/color: #334155;/g, 'color: #F1F5F9;');
html = html.replace(/color: #1E293B;/g, 'color: #FFFFFF;');

// Global Light Backgrounds to Dark
html = html.replace(/background: #f8fafc;/ig, 'background: #0A0F1C;');
html = html.replace(/background: #F8FAFC;/ig, 'background: #0A0F1C;');
html = html.replace(/background: #FFFFFF;/ig, 'background: #0A0F1C;');
html = html.replace(/border: 1px solid #E2E8F0;/ig, 'border: 1px solid rgba(255,255,255,0.1);');
html = html.replace(/border-bottom: 1px solid #E2E8F0;/ig, 'border-bottom: 1px solid rgba(255,255,255,0.1);');
html = html.replace(/border-top: 1px solid #E2E8F0;/ig, 'border-top: 1px solid rgba(255,255,255,0.1);');

// S1 Hero background
html = html.replace(/background: linear-gradient\(135deg, #F8FAFC 0%, #E2E8F0 100%\);/g, 'background: radial-gradient(circle at top right, #0F172A 0%, #0A0F1C 100%);');
html = html.replace(/border-bottom: 1px solid #CBD5E1;/g, 'border-bottom: 1px solid rgba(255,255,255,0.05);');

// Floating glass cards
html = html.replace(/background: rgba\(255,255,255,0\.8\);/g, 'background: rgba(255,255,255,0.03);');
html = html.replace(/border: 1px solid rgba\(255,255,255,0\.6\);/g, 'border: 1px solid rgba(255,255,255,0.1);');
html = html.replace(/background: rgba\(255,255,255,0\.9\);/g, 'background: rgba(255,255,255,0.05);');
html = html.replace(/color: #0EA5E9;/ig, 'color: #38BDF8;');
html = html.replace(/background: #E0F2FE;/ig, 'background: rgba(14,165,233,0.15);');
html = html.replace(/background: #0F172A;/ig, 'background: rgba(255,255,255,0.1);');

// Philosophy Proof Cards
html = html.replace(/background: #FEF2F2;/ig, 'background: rgba(220,38,38,0.1);');
html = html.replace(/border: 1px solid #FECACA;/ig, 'border: 1px solid rgba(220,38,38,0.3);');
html = html.replace(/color: #DC2626;/ig, 'color: #F87171;');
html = html.replace(/color: #991B1B;/ig, 'color: #FCA5A5;');
html = html.replace(/color: #7F1D1D;/ig, 'color: #FECACA;');

// Proof Table
html = html.replace(/background: #FDF2F2;/ig, 'background: rgba(220,38,38,0.15);');
html = html.replace(/background: #FCA5A5;/ig, 'background: rgba(220,38,38,0.3);');

// Supplements Cards
html = html.replace(/background: #F1F5F9;/ig, 'background: rgba(255,255,255,0.02);');
html = html.replace(/background: #EFF6FF;/ig, 'background: rgba(59,130,246,0.1);');
html = html.replace(/color: #2563EB;/ig, 'color: #60A5FA;');
html = html.replace(/background: #ECFDF5;/ig, 'background: rgba(16,185,129,0.1);');
html = html.replace(/color: #059669;/ig, 'color: #34D399;');
html = html.replace(/background: #F5F3FF;/ig, 'background: rgba(139,92,246,0.1);');
html = html.replace(/color: #7C3AED;/ig, 'color: #A78BFA;');


// Since global replace might have flipped things incorrectly, let's just make sure text isn't white-on-white.
html = html.replace(/color: #FFFFFF;/g, 'color: #FFFFFF;');

// Write back
fs.writeFileSync('../anthology.html', html, 'utf8');
console.log('Anthology Fully Dark Mode Converted!');
