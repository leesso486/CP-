const fs = require('fs');

let html = fs.readFileSync('../anthology.html', 'utf8');

const sections = html.split('<section');
let pre = sections[0];
let s1 = '<section' + sections[1];
let s2 = '<section' + sections[2]; // Level Theatre
let s3 = '<section' + sections[3]; // 3-Stage Architecture
let s4 = '<section' + sections[4]; // Footer

// --- S2: Convert Premium Showcase Box to Bento Style ---
s2 = s2.replace('background: #FFFFFF; border-radius: 30px; padding: 60px 50px; box-shadow: 0 40px 80px -10px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.04);', 
                'background: #FFFFFF; border-radius: 32px; padding: 60px 50px; box-shadow: 0 30px 60px -12px rgba(37,99,235,0.15), inset 0 0 0 1px rgba(37,99,235,0.1); transition: all 0.4s;');

// --- S3: Convert from vertical sticky to Netflix Horizontal Gallery ---
// Right now S3 has 3 STAGEs. I will parse out the images and text and create a Netflix row.
s3 = `
<style>
/* Bento & Netflix Gallery Styles */
.netflix-gallery {
    display: flex; gap: 40px; overflow-x: auto; padding: 40px 0 80px;
    scroll-snap-type: x mandatory; scroll-behavior: smooth;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
.netflix-gallery::-webkit-scrollbar { display: none; }
.netflix-card {
    flex: 0 0 80%; max-width: 700px; scroll-snap-align: center;
    background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 32px;
    padding: 50px; backdrop-filter: blur(20px);
    display: flex; flex-direction: column; gap: 30px; transition: transform 0.4s;
}
.netflix-card:hover { transform: translateY(-10px); border-color: rgba(96,165,250,0.3); box-shadow: 0 40px 80px rgba(0,0,0,0.4); }
.nc-img-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
}
.nc-img-grid img { width: 100%; height: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 20px 40px rgba(0,0,0,0.3); transition: transform 0.3s; cursor: pointer; }
.nc-img-grid img:hover { transform: scale(1.05); }

@media (max-width: 768px) {
    .netflix-card { flex: 0 0 90%; padding: 30px; }
    .nc-img-grid { grid-template-columns: 1fr; }
}
</style>

<section style="padding: 120px 4%; background: #090E17; color: white; position: relative; overflow:hidden;">
    <div style="position:absolute; width:60vw; height:60vw; top:-10%; left:-10%; background:radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 60%); border-radius:50%; filter:blur(60px); pointer-events:none;"></div>
    
    <div class="container" style="max-width: 1400px; margin: 0 auto; position:relative; z-index:10;">
        <div style="text-align: center; margin-bottom: 60px;">
            <span style="display: inline-block; color: #10B981; font-weight: 900; letter-spacing: 1px; margin-bottom: 24px; background: rgba(16,185,129,0.1); padding: 12px 36px; border-radius: 50px; font-size: 1.2rem; border: 1px solid rgba(16,185,129,0.2);">
              3. 앤솔로지 교재 설계
            </span>
            <h2 style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; color: #FFFFFF; margin-bottom: 1rem; letter-spacing: -1px;">
              독해 완성을 위한 <span style="color: #10B981;">3단계 아키텍처</span>
            </h2>
            <p style="color: #94A3B8; font-size: 1.2rem;">가로로 스크롤하여 체계적인 교재 구성을 확인하세요.</p>
        </div>

        <div class="netflix-gallery">
            <!-- Stage 1 -->
            <div class="netflix-card">
                <div>
                    <h3 style="font-size: 2.2rem; font-weight: 900; color: #F59E0B; margin-bottom: 20px; letter-spacing: -1px;">01. 읽기 전 활동</h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">배경지식 & 흥미 유발</h4>
                            <p style="color: #94A3B8; font-size: 1rem; line-height: 1.6;">단원 도입부에서 질문을 던져 인지 에너지를 끌어올리고 세밀한 학술 배경지식을 제공.</p>
                        </div>
                        <div>
                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">핵심어휘 & 다의어</h4>
                            <p style="color: #94A3B8; font-size: 1rem; line-height: 1.6;">1등급을 위한 필수 요소인 다의어를 직관적인 인포그래픽으로 즉각 체화.</p>
                        </div>
                    </div>
                </div>
                <div class="nc-img-grid">
                    <img src="images/new_anthology_step_1.png" />
                    <img src="images/new_anthology_step_2.png" />
                    <img src="images/new_anthology_step_3.png" />
                    <img src="images/new_anthology_step_4.png" />
                </div>
            </div>

            <!-- Stage 2 -->
            <div class="netflix-card">
                <div>
                    <h3 style="font-size: 2.2rem; font-weight: 900; color: #10B981; margin-bottom: 20px; letter-spacing: -1px;">02. 본문과 분석</h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">구조화 및 심층 분석</h4>
                            <p style="color: #94A3B8; font-size: 1rem; line-height: 1.6;">텍스트를 논증 체계에 따라 다이어그램으로 구조화하고 맥락 추론 훈련.</p>
                        </div>
                        <div>
                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">미시적 구문 분석</h4>
                            <p style="color: #94A3B8; font-size: 1rem; line-height: 1.6;">가장 번역이 까다로운 킬러 문장을 발췌해 구문 독해 정확도를 방어.</p>
                        </div>
                    </div>
                </div>
                <div class="nc-img-grid">
                    <img src="images/new_anthology_step_5.png" />
                    <img src="images/new_anthology_step_6.png" />
                    <img src="images/new_anthology_step_7.png" />
                    <img src="images/new_anthology_step_8.png" />
                </div>
            </div>

            <!-- Stage 3 -->
            <div class="netflix-card">
                <div>
                    <h3 style="font-size: 2.2rem; font-weight: 900; color: #8B5CF6; margin-bottom: 20px; letter-spacing: -1px;">03. 연습문제 및 정비</h3>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">실전 훈련 및 체크</h4>
                            <p style="color: #94A3B8; font-size: 1rem; line-height: 1.6;">배운 개념을 즉각적으로 적용하여 수능 유형에 대한 실전 감각을 향상.</p>
                        </div>
                        <div>
                            <h4 style="font-size: 1.2rem; font-weight: 800; color: #FFFFFF; margin-bottom: 8px;">내용 체화 및 확장</h4>
                            <p style="color: #94A3B8; font-size: 1rem; line-height: 1.6;">지문의 내용을 자신의 언어로 요약하고 에세이를 작성하는 논리 전개.</p>
                        </div>
                    </div>
                </div>
                <div class="nc-img-grid">
                    <img src="images/new_anthology_step_9.png" />
                    <img src="images/new_anthology_step_10.png" />
                    <img src="images/new_anthology_step_11.png" style="grid-column: span 2; width: 50%; justify-self: center;" />
                </div>
            </div>
        </div>
    </div>
</section>
`;

const finalHtml = pre + s1 + s2 + s3 + s4;
fs.writeFileSync('../anthology.html', finalHtml, 'utf8');
console.log('Replaced Anthology Bento & Gallery');
