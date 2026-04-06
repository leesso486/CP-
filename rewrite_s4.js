const fs = require('fs');

let indexHtml = fs.readFileSync('../index.html', 'utf8');

const s4Pattern = /<section style="padding:60px 4% 120px;background:#E2E8F0; padding-bottom:140px;">[\s\S]*?<\/section>/;
const s4Match = indexHtml.match(s4Pattern);

if (!s4Match) {
    console.log("Could not find S4");
    process.exit(1);
}

const newS4 = `
<style>
/* Cyber Neural Curriculum Board */
.neural-board {
    max-width: 1200px; margin: 0 auto;
    background: #090E17; /* Sinking into dark tech early */
    border-radius: 32px;
    padding: 60px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 2px 20px rgba(255,255,255,0.05);
    position: relative; overflow: hidden;
    color: white;
}
.neural-board::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 30px 30px; pointer-events: none;
}
.nt-track {
    display: flex; align-items: center; margin-bottom: 24px; position: relative; z-index: 10;
}
.nt-label {
    width: 140px; font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; gap: 12px;
}
.nt-label-dot { width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px currentColor; }
.nt-bar-container {
    flex: 1; height: 50px; background: rgba(0,0,0,0.4); border-radius: 12px;
    box-shadow: inset 0 4px 10px rgba(0,0,0,0.5); position: relative;
    display: flex; gap: 4px; padding: 4px;
}
.nt-pill {
    background: rgba(255,255,255,0.05); border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);
    display: flex; align-items: center; justify-content: center;
    font-size: 0.9rem; font-weight: 700; color: #94A3B8; transition: all 0.3s;
    user-select: none;
}
.nt-pill:hover {
    background: var(--track-color); color: #FFF; box-shadow: 0 0 20px var(--track-color); transform: scale(1.02); z-index: 20; border-color: transparent;
}
.nt-span-1 { flex: 1; } .nt-span-2 { flex: 2; } .nt-span-3 { flex: 3; } .nt-span-4 { flex: 4; } .nt-span-7 { flex: 7; }

/* Dynamic Glow Lines */
.nt-glow-line {
    position: absolute; left: 140px; right: 0; top: 25px; height: 2px;
    background: linear-gradient(90deg, transparent, var(--track-color), transparent);
    opacity: 0.3; z-index: 0; pointer-events: none;
}
@media (max-width: 768px) {
    .neural-board { padding: 30px 20px; border-radius: 20px; }
    .nt-track { flex-direction: column; align-items: flex-start; gap: 12px; height: auto; }
    .nt-glow-line { display: none; }
    .nt-bar-container { width: 100%; height: auto; flex-direction: column; background: transparent; box-shadow: none; padding: 0; gap: 8px; }
    .nt-pill { padding: 12px; border-radius: 12px; background: rgba(255,255,255,0.03); }
}
</style>

<section style="padding:100px 4% 140px;background:#E2E8F0;">
    <div class="container reveal">
        <div style="text-align:center;margin-bottom:60px">
            <span style="font-size:0.85rem;font-weight:800;color:#64748B;letter-spacing:2px;margin:0 auto 12px;display:block">NEURAL CURRICULUM</span>
            <h2 style="font-size:2.8rem;font-weight:900;color:#0F172A;letter-spacing:-1.5px">데이터가 직조하는 초정밀 라인업</h2>
            <p style="color:#475569;font-size:1.15rem;margin-top:16px;font-weight:500;">마우스를 올려 영역별 세부 훈련 목표를 확인하세요.</p>
        </div>

        <div class="neural-board">
            <!-- Axis -->
            <div style="display:flex; padding-left:140px; margin-bottom:20px; font-weight:800; color:#60A5FA; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px; position:relative; z-index:10;">
                <div style="flex:2; text-align:center;">Beginner (초등)</div>
                <div style="flex:2; text-align:center;">Intermediate (중등)</div>
                <div style="flex:3; text-align:center;">Advanced (특목/대입)</div>
            </div>

            <!-- Tracks -->
            <!-- Reading -->
            <div class="nt-track" style="--track-color:#60A5FA">
                <div class="nt-label"><div class="nt-label-dot" style="background:#60A5FA"></div><span style="color:#60A5FA">독해 파이프라인</span></div>
                <div class="nt-glow-line"></div>
                <div class="nt-bar-container">
                    <div class="nt-pill nt-span-7" style="display:grid; grid-template-columns:repeat(7,1fr); gap:4px; padding:0; background:transparent; border:none;">
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.1);color:#60A5FA;">Lv.0</div>
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.15);color:#60A5FA;">Lv.1</div>
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.2);color:#93C5FD;">Lv.2</div>
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.25);color:#93C5FD;">Lv.3</div>
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.3);color:#BFDBFE;">Lv.4</div>
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.4);color:#DBEAFE;">Lv.5</div>
                        <div class="nt-pill nt-span-1" style="background:rgba(96,165,250,0.5);color:#FFFFFF;box-shadow:0 0 15px rgba(96,165,250,0.3)">Lv.6</div>
                    </div>
                </div>
            </div>

            <!-- Grammar -->
            <div class="nt-track" style="--track-color:#A855F7">
                <div class="nt-label"><div class="nt-label-dot" style="background:#A855F7"></div><span style="color:#A855F7">문법 파이프라인</span></div>
                <div class="nt-glow-line"></div>
                <div class="nt-bar-container">
                    <div class="nt-pill nt-span-2">기본문법</div>
                    <div class="nt-pill nt-span-1">중등내신</div>
                    <div class="nt-pill nt-span-2">고등내신</div>
                    <div class="nt-pill nt-span-2">TEPS 문법</div>
                </div>
            </div>

            <!-- Logic -->
            <div class="nt-track" style="--track-color:#F43F5E">
                <div class="nt-label"><div class="nt-label-dot" style="background:#F43F5E"></div><span style="color:#F43F5E">논리 파이프라인</span></div>
                <div class="nt-glow-line"></div>
                <div class="nt-bar-container">
                    <div class="nt-span-3"></div>
                    <div class="nt-pill nt-span-4" style="background:rgba(244,63,94,0.15); border-color:rgba(244,63,94,0.3); color:#FDA4AF;">수능 고난도 빈칸 추론 & GRE 기반 논리 분석</div>
                </div>
            </div>

            <!-- Syntax -->
            <div class="nt-track" style="--track-color:#10B981">
                <div class="nt-label"><div class="nt-label-dot" style="background:#10B981"></div><span style="color:#10B981">구문 파이프라인</span></div>
                <div class="nt-glow-line"></div>
                <div class="nt-bar-container">
                    <div class="nt-span-1"></div>
                    <div class="nt-pill nt-span-5" style="background:rgba(16,185,129,0.15); border-color:rgba(16,185,129,0.3); color:#6EE7B7;">복잡 구조 집중 구조화 훈련</div>
                    <div class="nt-span-1"></div>
                </div>
            </div>

            <!-- Vocab -->
            <div class="nt-track" style="--track-color:#F59E0B">
                <div class="nt-label"><div class="nt-label-dot" style="background:#F59E0B"></div><span style="color:#F59E0B">어휘 파이프라인</span></div>
                <div class="nt-glow-line"></div>
                <div class="nt-bar-container">
                    <div class="nt-span-2"></div>
                    <div class="nt-pill nt-span-1">기본</div>
                    <div class="nt-pill nt-span-1">필수</div>
                    <div class="nt-pill nt-span-1">핵심</div>
                    <div class="nt-pill nt-span-1">실력</div>
                    <div class="nt-pill nt-span-1">특목고</div>
                </div>
            </div>

        </div>
    </div>
</section>
`;

indexHtml = indexHtml.replace(s4Match[0], newS4);
fs.writeFileSync('../index.html', indexHtml, 'utf8');
console.log('Replaced S4 Curriculum');
