const fs = require('fs');

function makeDark(filePath) {
   if(!fs.existsSync(filePath)) return;
   let html = fs.readFileSync(filePath, 'utf8');

   // Header modifications
   html = html.replace(/background: rgba\(255,255,255,0\.95\);/g, 'background: rgba(10,15,28,0.8);');
   html = html.replace(/background: rgba\(255,255,255,0\.98\);/g, 'background: rgba(10,15,28,0.95);');
   
   // Text color flips
   html = html.replace(/color: #0F172A;/ig, 'color: #FFFFFF;');
   html = html.replace(/color: #475569;/ig, 'color: #94A3B8;');
   html = html.replace(/color: #64748B;/ig, 'color: #cbd5e1;');
   html = html.replace(/color: #334155;/ig, 'color: #F1F5F9;');
   html = html.replace(/color: #1E293B;/ig, 'color: #FFFFFF;');

   // Universal Backgrounds
   html = html.replace(/background: #f8fafc;/ig, 'background: #0A0F1C;');
   html = html.replace(/background: #FFFFFF;/ig, 'background: #0A0F1C;');
   html = html.replace(/background: #FEF2F2;/ig, 'background: rgba(220,38,38,0.05);');

   // Borders
   html = html.replace(/border: 1px solid #E2E8F0;/ig, 'border: 1px solid rgba(255,255,255,0.1);');
   html = html.replace(/border-bottom: 1px solid #E2E8F0;/ig, 'border-bottom: 1px solid rgba(255,255,255,0.1);');
   html = html.replace(/border-top: 1px solid #E2E8F0;/ig, 'border-top: 1px solid rgba(255,255,255,0.1);');
   html = html.replace(/border: 2px solid #E2E8F0;/ig, 'border: 2px solid rgba(255,255,255,0.1);');

   // Sudanbi Hero
   html = html.replace(/background: radial-gradient\(circle at top right, #F0FDF4 0%, #FFFFFF 60%, #F8FAFC 100%\);/g, 'background: radial-gradient(circle at top right, #0F172A 0%, #0A0F1C 100%);');
   
   // Glass cards & boxes
   html = html.replace(/background: rgba\(255,255,255,0\.8\);/g, 'background: rgba(255,255,255,0.03);');
   html = html.replace(/border: 1px solid rgba\(255,255,255,0\.6\);/g, 'border: 1px solid rgba(255,255,255,0.1);');
   html = html.replace(/background: rgba\(255,255,255,0\.9\);/g, 'background: rgba(255,255,255,0.05);');

   // Colors specific to Sudanbi / KATCH
   html = html.replace(/color: #10B981;/ig, 'color: #34D399;'); // Green boost
   html = html.replace(/background: #F1F5F9;/ig, 'background: rgba(255,255,255,0.03);');
   
   // Keep #0A0F1C components from bugging
   html = html.replace(/background: #0A0F1C;/g, 'background: #0A0F1C;');

   fs.writeFileSync(filePath, html, 'utf8');
   console.log(filePath + ' converted to Dark Mode!');
}

makeDark('../sudanbi.html');
makeDark('../katch.html');
makeDark('../index.html');
