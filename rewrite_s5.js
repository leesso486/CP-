const fs = require('fs');

let indexHtml = fs.readFileSync('../index.html', 'utf8');

const s5Pattern = /<section style="padding:120px 4%;background:#0B1120;border-top:1px solid #E2E8F0">[\s\S]*?<\/section>/;
const s5Match = indexHtml.match(s5Pattern);

if (!s5Match) {
    console.log("Could not find S5");
    process.exit(1);
}

const newS5 = `
<style>
/* Holographic Gateway Cards */
.holo-grid {
    max-width: 1300px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;
    perspective: 1500px;
}
.holo-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 32px; padding: 50px 40px; text-decoration: none;
    position: relative; overflow: hidden;
    display: flex; flex-direction: column; justify-content: space-between;
    min-height: 450px;
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    transform-style: preserve-3d;
}
.holo-card::before {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
    opacity: 0; transition: opacity 0.6s; z-index: 0; pointer-events: none;
}
/* Cyber Light Overlay */
.holo-card::after {
    content: ''; position: absolute; left: -50%; top: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle, var(--hc-color) 0%, transparent 40%);
    opacity: 0; transition: all 0.6s; z-index: 0; pointer-events: none; mix-blend-mode: screen;
}
.holo-card:hover {
    transform: translateY(-15px) translateZ(30px) rotateX(2deg) rotateY(-2deg);
    border-color: rgba(255,255,255,0.2);
    box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 60px var(--hc-glow);
}
.holo-card:hover::before { opacity: 1; }
.holo-card:hover::after { opacity: 0.2; transform: translate(10%, 10%); }

.hc-content { position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%; }
.hc-visual {
    height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px;
}
.hc-visual img {
    height: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));
    transition: transform 0.6s;
}
.holo-card:hover .hc-visual img { transform: translateY(-10px) scale(1.05); }

.hc-title {
    font-size: 2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 16px; letter-spacing: -0.5px;
}
.hc-desc {
    color: #94A3B8; font-size: 1.1rem; line-height: 1.6; word-break: keep-all; flex: 1;
}
.hc-arrow {
    display: inline-flex; align-items: center; gap: 8px; margin-top: 30px;
    font-weight: 800; color: var(--hc-color); font-size: 1.2rem;
    transition: gap 0.3s;
}
.holo-card:hover .hc-arrow { gap: 16px; }

@media (max-width: 768px) {
    .holo-grid { grid-template-columns: 1fr; gap: 24px; }
    .holo-card { min-height: 380px; padding: 40px 30px; }
}
</style>

<section style="padding:140px 4%; background:#040B16; border-top:1px solid rgba(255,255,255,0.05); position:relative; overflow:hidden;">
    <!-- Deep Grid Background for Platform Area -->
    <div style="position:absolute; inset:0; background-image:linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size:50px 50px; z-index:0; pointer-events:none;"></div>
    
    <div style="text-align:center;margin-bottom:80px; position:relative; z-index:10;" class="reveal">
        <span style="font-size:0.85rem;font-weight:800;color:#60A5FA;letter-spacing:2px;margin-bottom:12px;display:inline-block; padding: 6px 16px; border-radius: 100px; background: rgba(96,165,250,0.1);">ENTER THE HUB</span>
        <h2 style="font-size:3rem;font-weight:900;color:#FFFFFF;letter-spacing:-1px">성공적인 학원 운영을 위한<br/>단 하나의 통합 생태계</h2>
    </div>

    <div class="holo-grid reveal">
        <!-- Anthology -->
        <a class="holo-card" href="/anthology" style="--hc-color:rgba(59,130,246,0.8); --hc-glow:rgba(59,130,246,0.2);">
            <div class="hc-content">
                <div class="hc-visual"><img src="images/anthology_L6.png" alt="Anthology" /></div>
                <div>
                    <h3 class="hc-title">Anthology <span style="font-size:1rem; color:#60A5FA; font-weight:600; vertical-align:middle; border:1px solid #60A5FA; padding:2px 8px; border-radius:6px; margin-left:8px;">독해</span></h3>
                    <p class="hc-desc">원서부터 수능 기출까지, 가장 완벽한 논리 전개 훈련. 학년이 아닌 철저한 평가 레벨 중심의 7단계 도약 프로그램입니다.</p>
                    <div class="hc-arrow">커리큘럼 보기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>

        <!-- Sudanbi -->
        <a class="holo-card" href="/sudanbi" style="--hc-color:rgba(16,185,129,0.8); --hc-glow:rgba(16,185,129,0.2);">
            <div class="hc-content">
                <div class="hc-visual"><img src="images/sudanbi_green.png" alt="Sudanbi" /></div>
                <div>
                    <h3 class="hc-title">Sudanbi <span style="font-size:1rem; color:#34D399; font-weight:600; vertical-align:middle; border:1px solid #34D399; padding:2px 8px; border-radius:6px; margin-left:8px;">어휘</span></h3>
                    <p class="hc-desc">문맥 추론과 어원 학습의 극의. 내신 1등급과 수능 만점을 위한 압도적 강도의 프리미엄 어휘 마스터 클래스입니다.</p>
                    <div class="hc-arrow">어휘 로드맵 보기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>

        <!-- KATCH -->
        <a class="holo-card" href="/katch" style="--hc-color:rgba(168,85,247,0.8); --hc-glow:rgba(168,85,247,0.2);">
            <div class="hc-content">
                <div class="hc-visual">
                    <div style="width:120px;height:120px;background:linear-gradient(135deg, #60A5FA, #A855F7);border-radius:24px;border:2px solid rgba(255,255,255,0.2);color:white;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;box-shadow:0 20px 40px rgba(0,0,0,0.5);">K</div>
                </div>
                <div>
                    <h3 class="hc-title">KATCH Platform <span style="font-size:1rem; color:#A855F7; font-weight:600; vertical-align:middle; border:1px solid #A855F7; padding:2px 8px; border-radius:6px; margin-left:8px;">SaaS</span></h3>
                    <p class="hc-desc">원장 전용 차세대 B2B 솔루션. 레벨테스트, 실시간 수강생 오답률 취합, 문제은행 생성 및 AI 경영 리포트를 제공합니다.</p>
                    <div class="hc-arrow">플랫폼 접속하기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>
    </div>
</section>
`;

indexHtml = indexHtml.replace(s5Match[0], newS5);
fs.writeFileSync('../index.html', indexHtml, 'utf8');
console.log('Replaced S5 Gateways');
