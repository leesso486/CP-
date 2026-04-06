const fs = require('fs');

let indexHtml = fs.readFileSync('../index.html', 'utf8');

// Find first section
const startIdx = indexHtml.indexOf('<section');
const endIdx = indexHtml.indexOf('</section>', startIdx) + '</section>'.length;
const oldHero = indexHtml.substring(startIdx, endIdx);

const newHero = `
<section style="position:relative;width:100%;height:100vh;min-height:800px;background:#FFFFFF;overflow:hidden;display:flex;align-items:center;border-bottom:1px solid #F1F5F9;">
    <!-- Light Background Accents -->
    <div id="mouseOrb" style="position:absolute;width:800px;height:800px;background:radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(147,51,234,0.05) 40%, transparent 70%);border-radius:50%;pointer-events:none;transform:translate(-50%, -50%);transition:opacity 0.2s;z-index:1;opacity:1"></div>
    <div style="position:absolute;top:0;left:0;right:0;bottom:0;background-image:linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px);background-size:4rem 4rem;z-index:0"></div>
    
    <div style="max-width:1400px;margin:0 auto;width:100%;padding:0 4%;position:relative;z-index:10;display:grid;grid-template-columns:1.2fr 1fr;gap:60px;align-items:center" class="reveal">
        <div>
            <div style="display:inline-block;padding:8px 24px;background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.2);color:#2563EB;border-radius:100px;font-size:0.9rem;font-weight:800;letter-spacing:2px;margin-bottom:30px;">
                PREMIUM PUBLISHING
            </div>
            <h1 style="font-size:clamp(3.5rem, 5vw, 5rem);font-weight:900;color:#0F172A;line-height:1.15;letter-spacing:-2px;margin-bottom:24px">
                대치동 20년 현장을<br/>
                <span style="background:linear-gradient(135deg, #2563EB, #7C3AED);-webkit-background-clip:text;-webkit-text-fill-color:transparent">완벽히 텍스트에 담다.</span>
            </h1>
            <p style="font-size:1.25rem;color:#475569;max-width:600px;line-height:1.6;word-break:keep-all;font-weight:500;margin-bottom:40px">
                압도적인 깊이의 원서형 독해와 빈틈없는 어휘 로드맵.<br/>최상의 결과를 증명하는 프리미엄 프랜차이즈 전용 특화 교재를 만나보세요.
            </p>
            <div style="display:flex;gap:16px;">
                <a href="#about" style="display:inline-block;background:#0F172A;color:white;padding:16px 32px;border-radius:12px;font-weight:700;text-decoration:none;transition:all 0.3s;box-shadow:0 10px 20px rgba(15,23,42,0.15)">시스템 알아보기 &darr;</a>
            </div>
        </div>
        
<style>
.light-book-showcase {
    position: relative; width: 100%; height: 500px;
    display: flex; justify-content: center; align-items: center;
    perspective: 1200px;
}
.book-wrap {
    position: absolute; width: 190px; height: 270px;
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer; transform-style: preserve-3d; border-radius: 6px;
    box-shadow: 0 30px 60px rgba(15,23,42,0.15), 0 0 0 1px rgba(15,23,42,0.05) inset;
    background: white; /* to ensure clean edges */
}
.book-wrap img {
    width: 100%; height: 100%; object-fit: contain; border-radius: 6px;
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.book-wrap::after {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.7) 25%, transparent 30%);
    background-size: 200% 200%; background-position: 100% 100%;
    opacity: 0; transition: opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); border-radius: 6px; pointer-events: none;
}
.book-wrap:hover::after { opacity: 1; animation: shineLight 1.5s infinite; }
.book-wrap:nth-child(1) { transform: translateX(-160px) translateZ(-60px) rotateY(15deg) rotateX(4deg); z-index: 10; animation: floatB1 5s ease-in-out infinite; --tx: -200px; }
.book-wrap:nth-child(2) { transform: translateX(-50px) translateZ(10px) rotateY(5deg) rotateX(2deg); z-index: 20; animation: floatB2 4.5s ease-in-out infinite 0.5s; --tx: -100px; }
.book-wrap:nth-child(3) { transform: translateX(50px) translateZ(20px) rotateY(-5deg) rotateX(2deg); z-index: 30; animation: floatB3 6s ease-in-out infinite 1s; --tx: 100px; }
.book-wrap:nth-child(4) { transform: translateX(160px) translateZ(-40px) rotateY(-15deg) rotateX(4deg); z-index: 15; animation: floatB4 5.5s ease-in-out infinite 1.5s; --tx: 200px; }
.light-book-showcase:hover .book-wrap { filter: blur(3px) opacity(0.6); transform: translateX(var(--tx)) translateZ(-150px) rotateY(0deg) rotateX(0deg); }
.light-book-showcase .book-wrap:hover { filter: blur(0px) opacity(1); transform: translateX(0) translateZ(130px) translateY(-30px) rotateY(0deg) scale(1.15); z-index: 60; box-shadow: 0 40px 80px rgba(37,99,235,0.25), 0 0 0 1px rgba(37,99,235,0.1) inset; }
@keyframes floatB1 { 0%, 100% { margin-top: 0; } 50% { margin-top: -12px; } }
@keyframes floatB2 { 0%, 100% { margin-top: 0; } 50% { margin-top: -8px; } }
@keyframes floatB3 { 0%, 100% { margin-top: 0; } 50% { margin-top: -15px; } }
@keyframes floatB4 { 0%, 100% { margin-top: 0; } 50% { margin-top: -10px; } }
@keyframes shineLight { 0% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }
</style>
        <div class="light-book-showcase">
            <div class="book-wrap"><img src="images/anthology_L6.png" alt="Anthology L6" /></div>
            <div class="book-wrap"><img src="images/sudanbi_purple.png" alt="Sudanbi Purple" /></div>
            <div class="book-wrap"><img src="images/sudanbi_green.png" alt="Sudanbi Green" /></div>
            <div class="book-wrap"><img src="images/anthology_L0.png" alt="Anthology L0" /></div>
        </div>
    </div>
    <script>
      const lightOrb = document.getElementById('mouseOrb');
      if (lightOrb) {
        document.addEventListener('mousemove', (e) => {
          lightOrb.style.left = e.clientX + 'px';
          lightOrb.style.top = e.clientY + 'px';
        });
      }
    </script>
</section>
`;

indexHtml = indexHtml.replace(oldHero, newHero);
fs.writeFileSync('../index.html', indexHtml, 'utf8');
console.log('Replaced Hero section');
