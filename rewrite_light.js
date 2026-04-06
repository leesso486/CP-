const fs = require('fs');

function revertToSantaLight(filePath) {
   if(!fs.existsSync(filePath)) return;
   let html = fs.readFileSync(filePath, 'utf8');

   // Revert Header
   html = html.replace(/background: rgba\(10,15,28,0\.8\); backdrop-filter: blur\(12px\); border-bottom: 1px solid rgba\(255,255,255,0\.05\);/g, 'background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.05);');
   html = html.replace(/background: rgba\(10,15,28,0\.8\);/g, 'background: rgba(255,255,255,0.95);');
   html = html.replace(/background: rgba\(10,15,28,0\.95\);/g, 'background: rgba(255,255,255,0.98);');
   
   // We must be careful replacing #FFFFFF back to #0F172A globally. 
   // However, since I blindly replaced #0F172A with #FFFFFF earlier, I'll reverse it.
   // But wait, there were legitimate #FFFFFF in buttons!
   // So I'll use more targeted regex based on my previous script `rewrite_all_dark.js`

   // Global Backgrounds
   html = html.replace(/background: #0A0F1C;/ig, 'background: #F8FAFC;');
   // The problem is that there were #f8fafc AND #FFFFFF originally. Now they are both #0A0F1C.
   // So turning #0A0F1C to #F8FAFC makes everything slightly grey. I'll make #F8FAFC the main, and let inner cards be #FFFFFF.

   // Revert borders
   html = html.replace(/border: 1px solid rgba\(255,255,255,0\.1\);/g, 'border: 1px solid #E2E8F0;');
   html = html.replace(/border-bottom: 1px solid rgba\(255,255,255,0\.1\);/g, 'border-bottom: 1px solid #E2E8F0;');
   html = html.replace(/border-top: 1px solid rgba\(255,255,255,0\.1\);/g, 'border-top: 1px solid #E2E8F0;');
   html = html.replace(/border: 2px solid rgba\(255,255,255,0\.1\);/g, 'border: 2px solid #E2E8F0;');
   html = html.replace(/border-bottom: 1px solid rgba\(255,255,255,0\.05\);/g, 'border-bottom: 1px solid #CBD5E1;');

   // Revert S1 Hero backgrounds
   html = html.replace(/background: radial-gradient\(circle at top right, #0F172A 0%, #0A0F1C 100%\);/g, 'background: linear-gradient(135deg, #F8FAFC 0%, #EEF2F6 100%);');
   
   // Glass cards & boxes
   // We had: 'background: rgba(255,255,255,0.03);' -> back to #FFFFFF
   html = html.replace(/background: rgba\(255,255,255,0\.03\);/g, 'background: #FFFFFF;');
   html = html.replace(/background: rgba\(255,255,255,0\.05\);/g, 'background: #FFFFFF;');
   html = html.replace(/background: rgba\(255,255,255,0\.02\);/g, 'background: #F8FAFC;');
   
   // Text color flips (I did color: #0F172A; -> color: #FFFFFF;)
   html = html.replace(/color: #FFFFFF;/g, 'color: #0F172A;');
   html = html.replace(/color: #94A3B8;/g, 'color: #475569;');
   html = html.replace(/color: #cbd5e1;/g, 'color: #64748B;');
   html = html.replace(/color: #F1F5F9;/g, 'color: #334155;');
   
   // Now, we need to FIX the inverted #FFFFFF inside buttons or spans that truly SHOULD be white.
   // Example: <span style="... color: #0F172A; background: #0F172A; ..."> -> Background: #0F172A, Color: #FFFFFF!
   // In my script, I did: html = html.replace(/background: #0F172A;/ig, 'background: rgba(255,255,255,0.1);');
   html = html.replace(/background: rgba\(255,255,255,0\.1\);/g, 'background: #0F172A;');
   
   // And now let's fix color: #0F172A on buttons
   html = html.replace(/color: #0F172A; background: #0F172A;/g, 'color: #FFFFFF; background: #0F172A;');
   html = html.replace(/color: #0F172A !important; background: #3B82F6;/g, 'color: #FFFFFF !important; background: #3B82F6;');
   
   // Anthology Philosophy Proof Cards 
   html = html.replace(/background: rgba\(220,38,38,0\.1\);/g, 'background: #FEF2F2;');
   html = html.replace(/border: 1px solid rgba\(220,38,38,0\.3\);/g, 'border: 1px solid #FECACA;');
   html = html.replace(/color: #F87171;/g, 'color: #DC2626;');
   html = html.replace(/color: #FCA5A5;/g, 'color: #991B1B;');
   html = html.replace(/color: #FECACA;/g, 'color: #7F1D1D;');

   // Proof Table
   html = html.replace(/background: rgba\(220,38,38,0\.15\);/g, 'background: #FDF2F2;');
   html = html.replace(/background: rgba\(220,38,38,0\.3\);/g, 'background: #FCA5A5;');

   // Supplements Cards
   html = html.replace(/background: rgba\(59,130,246,0\.1\);/g, 'background: #EFF6FF;');
   html = html.replace(/color: #60A5FA;/g, 'color: #2563EB;');
   html = html.replace(/background: rgba\(16,185,129,0\.1\);/g, 'background: #ECFDF5;');
   html = html.replace(/color: #34D399;/g, 'color: #059669;');
   html = html.replace(/background: rgba\(139,92,246,0\.1\);/g, 'background: #F5F3FF;');
   html = html.replace(/color: #A78BFA;/g, 'color: #7C3AED;');

   // Re-add correct box-shadows to Bento cards to make them pop on white!
   html = html.replace(/box-shadow: 0 40px 80px rgba\(0,0,0,0\.4\);/g, 'box-shadow: 0 40px 80px rgba(0,0,0,0.08);');
   
   // KATCH specific Hero overrides
   // To ensure KATCH is also sleek light
   html = html.replace(/background: radial-gradient\(circle at top right, #0F172A 0%, #0A0F1C 100%\);/g, 'background: radial-gradient(circle at top right, #FFFFFF 0%, #F8FAFC 100%);');

   fs.writeFileSync(filePath, html, 'utf8');
   console.log(filePath + ' converted to Light Mode!');
}

revertToSantaLight('../anthology.html');
revertToSantaLight('../sudanbi.html');
revertToSantaLight('../katch.html');
revertToSantaLight('../index.html');
