const fs = require('fs');

let indexHtml = fs.readFileSync('../index.html', 'utf8');

// Find the start of the section
const startTag = '<section style="padding:120px 4%;background:#FFFFFF" class="reveal" id="about">';
const startIdx = indexHtml.indexOf(startTag);

if (startIdx === -1) {
    console.log("Could not find about section");
    process.exit();
}

// Find the corresponding closing section tag
let endIdx = -1;
let tagStack = 0;
let pos = startIdx;

// Extremely naive approach: find </section> right after the end of this grid.
// Let's just find the first </section> after startIdx
const nextSecEnd = indexHtml.indexOf('</section>', startIdx);
if (nextSecEnd !== -1) {
    endIdx = nextSecEnd + '</section>'.length;
}

const originalBlock = indexHtml.substring(startIdx, endIdx);

const newSantaBlock = `
<style>
/* Santa Toeic Style About KNS */
.santa-about-section {
    padding: 140px 4%;
    background: #090E17; /* Deep midnight blue */
    position: relative;
    overflow: hidden;
    color: white;
}
.santa-orb-1 {
    position: absolute; top: -10%; left: -10%; width: 50vw; height: 50vw;
    background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
    border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;
}
.santa-orb-2 {
    position: absolute; bottom: -20%; right: -10%; width: 60vw; height: 60vw;
    background: radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%);
    border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 1;
}
.santa-title-badge {
    display: inline-block; padding: 8px 24px; border-radius: 100px;
    background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
    color: #60A5FA; font-weight: 800; font-size: 0.9rem; letter-spacing: 2px;
    margin-bottom: 24px; text-transform: uppercase;
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
}
.santa-main-title {
    font-size: 3rem; font-weight: 900; line-height: 1.25; letter-spacing: -1.5px; margin-bottom: 24px;
}
.santa-gradient-text {
    background: linear-gradient(135deg, #60A5FA 0%, #A855F7 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.santa-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;
    position: relative; z-index: 10; margin-top: 80px; text-align: left;
}
.santa-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 24px; padding: 40px;
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
.santa-card::before {
    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%);
    opacity: 0; transition: opacity 0.4s; z-index: 0; pointer-events: none;
}
.santa-card:hover {
    transform: translateY(-10px);
    border-color: rgba(96,165,250,0.3);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(96,165,250,0.15);
}
.santa-card:hover::before { opacity: 1; }
.santa-card > * { position: relative; z-index: 1; }
.santa-icon-wrapper {
    width: 60px; height: 60px; border-radius: 16px; margin-bottom: 24px;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,51,234,0.15));
    border: 1px solid rgba(255,255,255,0.1);
}
.santa-icon { font-size: 1.4rem; font-weight: 900; background: linear-gradient(135deg, #93C5FD, #D8B4FE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.santa-card h3 { font-size: 1.45rem; font-weight: 800; color: #FFFFFF; margin-bottom: 16px; letter-spacing: -0.5px; }
.santa-card p { color: #94A3B8; line-height: 1.7; font-size: 1.05rem; word-break: keep-all; font-weight: 500; }
.santa-number-bg {
    position: absolute; bottom: -10px; right: 10px; font-size: 9rem; font-weight: 900;
    color: rgba(255,255,255,0.02); line-height: 1; z-index: 0; pointer-events: none;
    transition: color 0.4s, transform 0.4s; letter-spacing: -5px; font-style: italic;
}
.santa-card:hover .santa-number-bg { color: rgba(255,255,255,0.04); transform: scale(1.05) translateX(-10px); }
@media (max-width: 768px) {
    .santa-main-title { font-size: 2.2rem; }
    .santa-about-section { padding: 80px 4%; }
}
</style>
<section class="santa-about-section reveal" id="about">
    <div class="santa-orb-1"></div>
    <div class="santa-orb-2"></div>
    <div style="max-width: 1200px; margin: 0 auto; position: relative; z-index: 10; text-align: center;">
        <div class="santa-title-badge">AI Data-Driven Education</div>
        <h2 class="santa-main-title">
            <span style="color: #FFFFFF;">대치동 20년 현장 노하우,</span><br/>
            <span class="santa-gradient-text">이제 압도적 에듀테크 솔루션으로.</span>
        </h2>
        <p style="font-size: 1.15rem; color: #94A3B8; max-width: 700px; margin: 0 auto; line-height: 1.7; word-break: keep-all; font-weight: 500;">
            빠르게 변화하는 입시 제도. 감에 의존하는 티칭을 넘어, 수백만 건의 최상위권 오답 데이터가 증명하는 예측 불허의 정밀한 로드맵을 경험하세요.
        </p>

        <div class="santa-grid">
            <div class="santa-card">
                <div class="santa-number-bg">01</div>
                <div class="santa-icon-wrapper">
                    <span class="santa-icon">20</span>
                </div>
                <h3>대치동 현장 20년</h3>
                <p>강남, 서초, 송파 등 최상위권 교육의 1번지 트렌드를 실시간으로 반영하여 설계된 독보적인 오프라인 운영체제를 시스템화했습니다.</p>
            </div>
            <div class="santa-card">
                <div class="santa-number-bg">02</div>
                <div class="santa-icon-wrapper">
                    <span class="santa-icon">DB</span>
                </div>
                <h3>최상위권 데이터 확보</h3>
                <p>알고리즘 기반 정밀 진단! 자사고 및 특목고 최상위 학생들의 문항별 오답률과 점수 분포를 바탕으로 취약점을 즉각 타겟팅합니다.</p>
            </div>
            <div class="santa-card">
                <div class="santa-number-bg">03</div>
                <div class="santa-icon-wrapper">
                    <span class="santa-icon">∞</span>
                </div>
                <h3>초·중·고 완벽 연계성</h3>
                <p>상위 호환 커리큘럼을 역으로 디코딩하여, 초중등 단계에서 반드시 도달해야 할 필수 뼈대를 과학적인 빈도로 반복 학습시킵니다.</p>
            </div>
        </div>
    </div>
</section>`;

indexHtml = indexHtml.replace(originalBlock, newSantaBlock);
fs.writeFileSync('../index.html', indexHtml, 'utf8');
console.log('Replaced About section in index.html');
