const fs = require('fs');

let indexHtml = fs.readFileSync('../index.html', 'utf8');

const s3Pattern = /<section style="padding:120px 4%;background:#F1F5F9;border-top:1px solid #E2E8F0;border-bottom:1px solid #E2E8F0">[\s\S]*?<\/section>/;
const s3Match = indexHtml.match(s3Pattern);

if (!s3Match) {
    console.log("Could not find S3");
    process.exit(1);
}

const newS3 = `
<style>
/* Bento Box App Layout */
.bento-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(240px, auto);
    gap: 24px;
    max-width: 1200px;
    margin: 60px auto 0;
}
.bento-card {
    background: #FFFFFF;
    border-radius: 32px;
    padding: 40px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.05);
    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.bento-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 30px 60px -12px rgba(37,99,235,0.15), inset 0 0 0 1px rgba(37,99,235,0.1);
}

/* Specific Sizes */
.bento-wide { grid-column: span 2; }
.bento-tall { grid-row: span 2; }

/* Timeline UI */
.modern-timeline {
    width: 100%;
    height: 120px;
    background: #F8FAFC;
    border-radius: 24px;
    margin-top: auto;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 40px;
    gap: 20px;
    overflow: hidden;
}
.mt-bar {
    position: absolute;
    top: 50%; left: 40px; right: 40px; height: 4px;
    background: #E2E8F0;
    transform: translateY(-50%);
    border-radius: 4px;
    z-index: 1;
}
.mt-progress {
    position: absolute;
    top: 50%; left: 40px; width: 60%; height: 4px;
    background: linear-gradient(90deg, #3B82F6, #8B5CF6);
    transform: translateY(-50%);
    border-radius: 4px;
    z-index: 2;
    box-shadow: 0 0 10px rgba(59,130,246,0.5);
}
.mt-node {
    position: relative; z-index: 3;
    display: flex; flex-direction: column; align-items: center;
    flex: 1; text-align: center;
}
.mt-dot {
    width: 20px; height: 20px; border-radius: 50%; background: #FFFFFF;
    border: 4px solid #E2E8F0; margin-bottom: 12px; transition: all 0.3s;
}
.mt-node.active .mt-dot {
    border-color: #3B82F6;
    box-shadow: 0 0 0 4px rgba(59,130,246,0.2);
}
.mt-year { font-weight: 800; font-size: 1.1rem; color: #0F172A; }
.mt-desc { font-size: 0.85rem; color: #64748B; font-weight: 500; margin-top: 4px; white-space: nowrap; }

/* Dark Bento Specific */
.bento-dark {
    background: #0F172A;
    color: #FFFFFF;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
}
.bento-dark:hover {
    box-shadow: 0 30px 60px -12px rgba(139,92,246,0.3), inset 0 0 0 1px rgba(139,92,246,0.3);
}

.b-icon {
    width: 60px; height: 60px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
}
.b-blue { background: #EFF6FF; color: #3B82F6; }
.b-purple { background: #F5F3FF; color: #8B5CF6; }
.b-green { background: #ECFDF5; color: #10B981; }

@media (max-width: 900px) {
    .bento-container { grid-template-columns: 1fr; }
    .bento-wide, .bento-tall { grid-column: span 1; grid-row: span 1; }
    .modern-timeline { padding: 20px; height: auto; flex-direction: column; gap: 40px; }
    .mt-bar { top: 40px; bottom: 40px; left: 50%; width: 4px; height: auto; transform: translateX(-50%); }
    .mt-progress { top: 40px; left: 50%; width: 4px; height: 60%; transform: translateX(-50%); background: linear-gradient(180deg, #3B82F6, #8B5CF6); }
    .mt-node { flex-direction: row; text-align: left; gap: 20px; width: 100%; justify-content: center; }
    .mt-dot { margin-bottom: 0; }
}
</style>

<section style="padding:120px 4%;background:#F1F5F9;border-bottom:1px solid #E2E8F0">
    <div style="text-align:center;">
        <span style="font-size:0.85rem;font-weight:800;color:#3B82F6;letter-spacing:2px;margin:0 auto 12px;display:block">KNS INFRASTRUCTURE</span>
        <h2 style="font-size:3rem;font-weight:900;color:#0F172A;letter-spacing:-1.5px">가장 완벽한 학원 운영 생태계</h2>
    </div>

    <div class="bento-container reveal">
        
        <!-- Bento 1: Publishing (Wide) -->
        <div class="bento-card bento-wide">
            <div style="display:flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                <div class="b-icon b-purple">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                <!-- Abstract Deco -->
                <div style="width: 120px; height: 60px; background: linear-gradient(90deg, #F3F4F6, #E5E7EB); border-radius: 16px; opacity: 0.5;"></div>
            </div>
            <h3 style="font-size:1.8rem; font-weight:800; color:#0F172A; margin-bottom:12px; letter-spacing:-0.5px">교재 출판 & 퍼블리싱 센터</h3>
            <p style="color:#64748B; font-size:1.05rem; line-height:1.6; max-width:80%;">초정밀 콘텐츠 기획 및 조판. 매년 수능과 최상위 내신의 최신 기출 트렌드를 즉시 교재 라인업에 반영하는 거대한 지식 공장입니다.</p>
        </div>

        <!-- Bento 2: R&D (Tall) -->
        <div class="bento-card bento-tall bento-dark">
            <div class="b-icon" style="background:rgba(255,255,255,0.1); color:#60A5FA;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3 style="font-size:1.8rem; font-weight:800; margin-bottom:12px; letter-spacing:-0.5px">디지털 R&D 허브</h3>
            <p style="color:#94A3B8; font-size:1.05rem; line-height:1.6; margin-bottom: 40px">누적된 오답률 데이터를 분석해 치명적 오개념을 선제적으로 방어합니다.</p>
            
            <!-- Graphic Element inside card -->
            <div style="margin-top: auto; padding: 20px; background: rgba(0,0,0,0.2); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
                <div style="display:flex; justify-content: space-between; margin-bottom: 12px;">
                    <span style="font-size:0.85rem; color:#60A5FA; font-weight:700">Data Processed</span>
                    <span style="font-size:0.85rem; color:#FFFFFF; font-weight:700">92%</span>
                </div>
                <div style="width:100%; height:8px; background:rgba(255,255,255,0.1); border-radius:4px; overflow:hidden;">
                    <div style="width:92%; height:100%; background:#60A5FA; border-radius:4px;"></div>
                </div>
            </div>
        </div>

        <!-- Bento 3: Timeline (Wide) -->
        <div class="bento-card bento-wide">
            <h3 style="font-size:1.4rem; font-weight:800; color:#0F172A; margin-bottom:8px; letter-spacing:-0.5px">대치동 최상위 선도 20년</h3>
            <p style="color:#64748B; font-size:1rem; margin-bottom: 30px;">수백만 시간의 현장 노하우가 집약된 KNS의 발자취</p>
            
            <div class="modern-timeline">
                <div class="mt-bar"></div>
                <div class="mt-progress"></div>
                
                <div class="mt-node active">
                    <div class="mt-dot"></div>
                    <div>
                        <div class="mt-year">2005</div>
                        <div class="mt-desc">KNS어학원 설립</div>
                    </div>
                </div>
                <div class="mt-node active">
                    <div class="mt-dot"></div>
                    <div>
                        <div class="mt-year">2013</div>
                        <div class="mt-desc">고입전략연구소 개설</div>
                    </div>
                </div>
                <div class="mt-node active">
                    <div class="mt-dot"></div>
                    <div>
                        <div class="mt-year">2021</div>
                        <div class="mt-desc">라인업 다각화</div>
                    </div>
                </div>
                <div class="mt-node">
                    <div class="mt-dot"></div>
                    <div>
                        <div class="mt-year">2026</div>
                        <div class="mt-desc">초연결 AI 플랫폼</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
`;

indexHtml = indexHtml.replace(s3Match[0], newS3);
fs.writeFileSync('../index.html', indexHtml, 'utf8');
console.log('Replaced S3 with Bento Box UI');
