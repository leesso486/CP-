const fs = require('fs');

const path = '../apply_sudanbi.js';
let txt = fs.readFileSync(path, 'utf8');

const NEW_MINIGAME_HTML = `
<!-- Level Test Minigame Section (Enhanced & Relocated) -->
<section id="level-test-minigame" style="padding: 100px 4%; background: radial-gradient(circle at 50% 0%, rgba(16,185,129,0.05) 0%, rgba(59,130,246,0.03) 50%, transparent 100%); display: flex; justify-content: center; font-family: 'Pretendard', sans-serif; position: relative; overflow: hidden; margin-bottom: 80px;">
    <!-- Decorative Orbs -->
    <div style="position: absolute; top: -100px; left: -100px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%); border-radius: 50%; filter: blur(40px);"></div>
    <div style="position: absolute; bottom: -100px; right: -100px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%); border-radius: 50%; filter: blur(50px);"></div>
    
    <div id="sd-game-container" style="background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-radius: 40px; padding: 60px 50px; max-width: 850px; width: 100%; text-align: center; box-shadow: 0 30px 60px -15px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5); border: 1px solid rgba(226, 232, 240, 0.8); position: relative; z-index: 10;">
        <!-- Inject Views Here via JS -->
    </div>
</section>

<style>
.sd-game-btn { background: #FFFFFF; border: 2px solid #E2E8F0; padding: 24px; border-radius: 20px; font-size: 1.3rem; font-weight: 700; color: #334155; cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); text-align: center; width: 100%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }
.sd-game-btn:hover { border-color: #3B82F6 !important; color: #1E293B !important; background: #F0F9FF !important; transform: translateY(-5px); box-shadow: 0 15px 25px -5px rgba(59,130,246,0.15); }
.sd-game-btn:active { transform: translateY(0px); box-shadow: none; }
.sd-game-start-btn:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 25px 50px -12px rgba(16,185,129,0.5) !important; filter: brightness(1.1); }
@keyframes sdTimerPulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
.sd-timer-warning { color: #EF4444 !important; animation: sdTimerPulse 1s infinite; }
</style>

<script>
(function() {
    const ALL_WORDS = [
      { en: 'effect', ko: '효과, 영향' }, { en: 'process', ko: '과정, 처리하다' }, { en: 'response', ko: '응답, 반응' },
      { en: 'various', ko: '다양한, 여러 가지의' }, { en: 'attitude', ko: '태도, 사고방식' }, { en: 'observe', ko: '관찰하다, 준수하다' },
      { en: 'issue', ko: '문제, 쟁점' }, { en: 'reveal', ko: '드러내다' }, { en: 'current', ko: '현재의, 흐름' },
      { en: 'feature', ko: '특징' }, { en: 'interaction', ko: '상호작용' }, { en: 'moral', ko: '도덕적인' },
      { en: 'concept', ko: '개념' }, { en: 'perspective', ko: '관점, 전망' }, { en: 'consequence', ko: '결과, 중요성' },
      { en: 'accurate', ko: '정확한, 정밀한' }, { en: 'consistent', ko: '일관된, 변함없는' }, { en: 'diversity', ko: '다양성' },
      { en: 'permanent', ko: '영구적인' }, { en: 'ingredient', ko: '재료, 구성요소' }, { en: 'devote', ko: '헌신하다' },
      { en: 'resistance', ko: '저항, 반대' }, { en: 'excessive', ko: '지나친' }, { en: 'composition', ko: '구성, 작품' },
      { en: 'admire', ko: '감탄하다' }, { en: 'reputation', ko: '평판, 명성' }, { en: 'acknowledge', ko: '인정하다' },
      { en: 'deliberate', ko: '심사숙고하다, 고의적인' }, { en: 'hypothesis', ko: '가설, 추정' }, { en: 'reservation', ko: '예약, 의구심' },
      { en: 'endure', ko: '견디다' }, { en: 'isolation', ko: '고립' }, { en: 'genuine', ko: '진짜의, 진실한' },
      { en: 'manipulate', ko: '조작하다' }, { en: 'subtle', ko: '미묘한' }, { en: 'declare', ko: '선언하다' },
      { en: 'consciousness', ko: '의식' }, { en: 'molecule', ko: '분자' }, { en: 'submission', ko: '항복, 제출' }
    ];

    let gameState = 'start';
    let questions = [];
    let currentIndex = 0;
    let score = 0;
    let userEmail = '';
    
    // Timer Variables
    let timeLeft = 60;
    let timerInterval = null;

    const container = document.getElementById('sd-game-container');

    function shuffle(array) { return array.sort(() => 0.5 - Math.random()); }

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return '0' + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function startTimer() {
        timeLeft = 60;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            timeLeft--;
            const timeEl = document.getElementById('sd-time-display');
            if(timeEl) {
                timeEl.innerText = formatTime(timeLeft);
                if(timeLeft <= 10) timeEl.classList.add('sd-timer-warning');
            }
            if(timeLeft <= 0) {
                clearInterval(timerInterval);
                setGameState('result');
            }
        }, 1000);
    }

    window.sdStartGame = function() {
        const shuffled = shuffle([...ALL_WORDS]);
        const selected = shuffled.slice(0, 10);
        questions = selected.map(word => {
            const wrong = shuffle(ALL_WORDS.filter(w => w.en !== word.en).map(w => w.ko)).slice(0, 3);
            return { word: word.en, correct: word.ko, options: shuffle([word.ko, ...wrong]) };
        });
        score = 0;
        currentIndex = 0;
        setGameState('playing');
        startTimer();
    };

    window.sdHandleAnswer = function(selectedOptionStr) {
        if(timeLeft <= 0) return;
        const currentQ = questions[currentIndex];
        if(selectedOptionStr === currentQ.correct) score++;
        
        if(currentIndex < 9) {
            currentIndex++;
            renderPlaying();
        } else {
            clearInterval(timerInterval);
            setGameState('result');
        }
    };

    window.sdHandleEmailSubmit = function(e) {
        e.preventDefault();
        const input = document.getElementById('sd-email-input').value;
        if(!input) return;
        userEmail = input;
        const btn = document.getElementById('sd-email-submit');
        btn.innerText = '등록 중...';
        btn.disabled = true;
        setTimeout(() => setGameState('leaderboard'), 800);
    };

    window.sdSetGameState = function(state) { setGameState(state); }

    function setGameState(state) {
        gameState = state;
        if(state === 'start') renderStart();
        else if(state === 'playing') renderPlaying();
        else if(state === 'result') renderResult();
        else if(state === 'leaderboard') renderLeaderboard();
    }

    function renderStart() {
        container.innerHTML = \`
            <div style="position: relative; z-index: 10; padding: 20px 0;">
                <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 25px;">
                    <span style="display: inline-block; color: #3B82F6; font-weight: 800; background: rgba(59,130,246,0.1); padding: 8px 20px; border-radius: 40px; font-size: 0.95rem; letter-spacing: 1px;">MINI GAME</span>
                    <span style="display: inline-block; color: #EF4444; font-weight: 800; background: rgba(239,68,68,0.1); padding: 8px 20px; border-radius: 40px; font-size: 0.95rem; letter-spacing: 1px;">⏱ 1분 제약구간</span>
                </div>
                <h2 style="font-size: 2.8rem; font-weight: 900; color: #0F172A; margin-bottom: 20px; letter-spacing: -1px; text-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                    나의 수능 어휘력은 전국 몇 등일까?
                </h2>
                <p style="font-size: 1.25rem; color: #475569; margin-bottom: 50px; line-height: 1.7; font-weight: 500;">
                    과거 수능 모의고사에 출제되었던 <b style="color: #0F172A;">Pre-Test 프리미엄 데이터</b>를 기반으로 한<br/>
                    10개의 단어를 1분 안에 맞추고, 나의 <strong style="color: #10B981;">정확한 수준</strong>을 진단해보세요.
                </p>
                <div style="display: flex; justify-content: center; position: relative;">
                    <button class="sd-game-start-btn" onclick="sdStartGame()" style="background: linear-gradient(135deg, #10B981, #047857); color: white; padding: 22px 70px; border-radius: 50px; font-size: 1.4rem; font-weight: 800; border: none; cursor: pointer; box-shadow: 0 15px 35px rgba(16,185,129,0.35); transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); display: flex; align-items: center; gap: 15px;">
                        <span>진단 시작히기</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </button>
                    <!-- Highlight Ping -->
                    <div style="position: absolute; top:0; bottom:0; left:50%; width: 300px; transform: translateX(-50%); border-radius: 50px; box-shadow: 0 0 0 0 rgba(16,185,129, 0.7); animation: pulse 2s infinite; pointer-events: none; z-index: -1;"></div>
                </div>
                <style>@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(16,185,129, 0.4); } 70% { box-shadow: 0 0 0 20px rgba(16,185,129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16,185,129, 0); } }</style>
            </div>
        \`;
    }

    function renderPlaying() {
        const q = questions[currentIndex];
        const progress = (currentIndex / 10) * 100;
        
        let optionsHtml = '';
        q.options.forEach((opt) => {
            const safeOpt = opt.replace(/'/g, "\\\\'").replace(/"/g, '\\\\"');
            // FIX: Don't use unescaped backslashes and double quotes properly
            optionsHtml += \`
                <button class="sd-game-btn" onclick="sdHandleAnswer('\${safeOpt}')">
                    \${opt}
                </button>
            \`;
        });

        container.innerHTML = \`
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 20px;">
                <div style="text-align: left;">
                    <div style="font-size: 0.9rem; font-weight: 800; color: #94A3B8; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Progress</div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: #0F172A;">\${currentIndex + 1}&nbsp;<span style="font-size: 1.1rem; color: #94A3B8; font-weight: 700;">/ 10</span></div>
                </div>
                
                <div style="background: #F8FAFC; border: 2px solid #E2E8F0; padding: 10px 25px; border-radius: 100px; display: flex; align-items: center; gap: 10px;">
                    <span style="font-size: 1.2rem;">⏱</span>
                    <span id="sd-time-display" style="font-size: 1.5rem; font-weight: 900; color: #0F172A; font-variant-numeric: tabular-nums;">
                        \${formatTime(timeLeft)}
                    </span>
                </div>

                <div style="text-align: right;">
                    <div style="font-size: 0.9rem; font-weight: 800; color: #94A3B8; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Score</div>
                    <div style="font-size: 1.5rem; font-weight: 900; color: #10B981;">\${score}&nbsp;<span style="font-size: 1.1rem; color: #94A3B8; font-weight: 700;">pts</span></div>
                </div>
            </div>

            <div style="width: 100%; height: 6px; background: #E2E8F0; border-radius: 10px; margin-bottom: 60px; overflow: hidden;">
                <div style="width: \${progress}%; height: 100%; background: linear-gradient(90deg, #3B82F6, #10B981); transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);"></div>
            </div>
            
            <div style="text-align: center; margin-bottom: 60px;">
                <h3 style="font-size: 4.5rem; font-weight: 900; color: #0F172A; letter-spacing: -1px; text-shadow: 0 10px 30px rgba(0,0,0,0.05); margin: 0; line-height: 1;">
                    \${q.word}
                </h3>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                \${optionsHtml}
            </div>
        \`;
    }

REPLACE_WITH_UPDATED_RESULT

    function renderLeaderboard() {
        const mockRankings = [
            { rank: 1, email: 'sky***@gmail.com', score: 100, badge: '🥇', bg: '#FEF3C7' },
            { rank: 2, email: 'kns_***@naver.com', score: 100, badge: '🥈', bg: '#F1F5F9' },
            { rank: 3, email: 'jh9***@daum.net', score: 90, badge: '🥉', bg: '#FFEDD5' },
            { rank: 142, email: userEmail, score: score * 10, badge: '⭐', bg: 'transparent' }
        ];

        let rowsHtml = '';
        mockRankings.forEach((u, i) => {
            const isMe = u.email === userEmail;
            rowsHtml += \`
                <div style="display: flex; padding: 22px; border-bottom: \${i !== mockRankings.length -1 ? '1px solid #E2E8F0' : 'none'}; align-items: center; background: \${isMe ? '#ECFDF5' : u.bg}; font-weight: \${isMe ? 800 : 700}; transition: all 0.2s; border-radius: \${isMe ? '12px' : '0'}; transform: \${isMe ? 'scale(1.02)' : 'none'}; box-shadow: \${isMe ? '0 10px 20px -5px rgba(16,185,129,0.1)' : 'none'}; z-index: \${isMe ? 10 : 1}; position: relative;">
                    <div style="width: 80px; text-align: center; font-size: 1.3rem; color: \${isMe ? '#10B981' : '#475569'};">
                        \${u.badge} \${u.rank}
                    </div>
                    <div style="flex: 1; color: \${isMe ? '#065F46' : '#1E293B'}; font-size: 1.15rem; text-align: left; padding-left: 20px;">
                        \${u.email}
                        \${isMe ? '<span style="margin-left: 12px; font-size: 0.8rem; background: #10B981; color: white; padding: 4px 10px; border-radius: 20px; vertical-align: middle; font-weight: 900; letter-spacing: 1px;">MY RANK</span>' : ''}
                    </div>
                    <div style="width: 100px; text-align: center; font-size: 1.4rem; color: \${isMe ? '#10B981' : '#0F172A'}; font-weight: 900;">
                        \${u.score}
                    </div>
                </div>
            \`;
        });

        container.innerHTML = \`
            <div style="text-align: center; margin-bottom: 40px;">
                <span style="display: inline-block; color: #B45309; font-weight: 800; background: #FEF3C7; padding: 10px 24px; border-radius: 40px; margin-bottom: 20px; font-size: 0.95rem; letter-spacing: 1px;">
                    🏆 주간 명예의 전당
                </span>
                <h2 style="font-size: 2.8rem; font-weight: 900; color: #0F172A; margin: 0; letter-spacing: -1px;">실시간 전국 랭킹 보드</h2>
            </div>
            <div style="background: #FFFFFF; border-radius: 24px; padding: 10px; border: 2px solid #E2E8F0; margin-bottom: 40px;">
                <div style="background: #F8FAFC; border-radius: 16px; overflow: hidden;">
                    <div style="display: flex; padding: 20px; background: #0F172A; color: white; font-weight: 800; font-size: 1.1rem; border-radius: 16px 16px 0 0;">
                        <div style="width: 80px; text-align: center;">순위</div>
                        <div style="flex: 1; text-align: left; padding-left: 20px;">참여자</div>
                        <div style="width: 100px; text-align: center;">점수</div>
                    </div>
                    \${rowsHtml}
                </div>
            </div>
            <div style="text-align: center;">
                <button onclick="sdSetGameState('start')" style="background: transparent; color: #64748B; font-weight: 800; padding: 16px 40px; border-radius: 16px; border: 2px solid #CBD5E1; cursor: pointer; transition: all 0.3s; font-size: 1.1rem;" onmouseover="this.style.borderColor='#10B981'; this.style.color='#10B981'; this.style.background='#F0FDF4'" onmouseout="this.style.borderColor='#CBD5E1'; this.style.color='#64748B'; this.style.background='transparent'">
                    다시 진단하기
                </button>
            </div>
        \`;
    }

    if(container) setGameState('start');
})();
</script>
`;

let resultUi = fs.readFileSync('new_render_result.txt', 'utf8');
// Fix escape characters for injecting into a template string inside a javascript file
// new_render_result uses ` ` internally, but wait, we are assembling a string to replace!
// Actually, I can just replace `REPLACE_WITH_UPDATED_RESULT` in the string above with `resultUi`
// BUT `resultUi` contains \`... so if `NEW_MINIGAME_HTML` is a standard string, its literal ` is fine.

let finalMinigameStr = NEW_MINIGAME_HTML.replace('REPLACE_WITH_UPDATED_RESULT', resultUi);

// Now finalMinigameStr contains the RAW HTML and JS string.
// We must insert it into `apply_sudanbi.js` !
// `apply_sudanbi.js` has a huge template string `const mainHtml = \`...\`;`
// I need to insert `finalMinigameStr` right before `<!-- NEW: Sudanbi Vertical Stack Roadmap -->` within THAT template string.

if (!txt.includes('id="level-test-minigame"')) {
    // Escape backticks and $ inside finalMinigameStr because it will reside INSIDE a javascript template string!
    let escapedForTemplate = finalMinigameStr.replace(/\\/g, '\\\\').replace(/\`/g, '\\`').replace(/\$/g, '\\$');
    txt = txt.replace('<!-- NEW: Sudanbi Vertical Stack Roadmap -->', escapedForTemplate + '\\n\\n      <!-- NEW: Sudanbi Vertical Stack Roadmap -->');
    fs.writeFileSync(path, txt, 'utf8');
    console.log('Injected Minigame into apply_sudanbi.js');
} else {
    console.log('Minigame already in apply_sudanbi.js');
}
