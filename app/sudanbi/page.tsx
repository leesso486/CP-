"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) reveal.classList.add('active');
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger immediately

    const script = document.createElement('script');
    script.src = "/apply_sudanbi.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch(e){} }

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: "\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body { \n            background: #F8FAFC; color: white; min-height: 100vh; \n            font-family: 'Pretendard', 'Inter', sans-serif; \n            overflow-x: hidden; -webkit-font-smoothing: antialiased;\n        }\n        .container { max-width: 1400px; margin: 0 auto; padding: 0 4%; position: relative; z-index: 10; }\n        \n        /* Unified White Header (Light Mode) */\n        header { \n            position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; \n            padding: 20px 4%; transition: all 0.4s ease; \n            background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); \n            border-bottom: 1px solid rgba(0,0,0,0.05); \n        }\n        header.scrolled { padding: 12px 4%; box-shadow: 0 4px 20px rgba(0,0,0,0.05); background: rgba(255,255,255,0.98); }\n        .nav-wrapper { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; }\n        .logo { font-size: 1.6rem; font-weight: 900; text-decoration: none; color: #0F172A; letter-spacing: -0.5px; font-family: 'Inter', sans-serif; }\n        .logo span { color: #3B82F6; }\n        .nav-links { display: flex; gap: 2.5rem; align-items: center; }\n        .nav-links a { text-decoration: none; color: #64748B; font-weight: 600; font-size: 0.95rem; transition: color 0.3s; }\n        .nav-links a:hover, .nav-links a.active { color: #0F172A; }\n        .btn-partner { \n            display: inline-block; padding: 10px 24px; background: #3B82F6; color: #FFFFFF !important; \n            border-radius: 30px; font-weight: 700; font-size: 0.95rem; \n            transition: all 0.3s; text-decoration: none; border: none; box-shadow: 0 4px 14px rgba(59,130,246,0.3);\n        }\n        .btn-partner:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(59,130,246,0.4); }\n\n        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%) scale(1.3); } }\n        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }\n        \n        main a { text-decoration: none; color: inherit; }\n        @media (max-width: 900px) { .nav-links { display: none; } }\n    \n\n          @keyframes sdFloat { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }\n          @keyframes sdFloatReverse { 0% { transform: translateY(0px); } 50% { transform: translateY(15px); } 100% { transform: translateY(0px); } }\n        \n\n.sd-game-btn { background: #FFFFFF; border: 2px solid #E2E8F0; padding: 24px; border-radius: 20px; font-size: 1.3rem; font-weight: 700; color: #334155; cursor: pointer; transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1); text-align: center; width: 100%; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); }\n.sd-game-btn:hover { border-color: #3B82F6 !important; color: #1E293B !important; background: #F0F9FF !important; transform: translateY(-5px); box-shadow: 0 15px 25px -5px rgba(59,130,246,0.15); }\n.sd-game-btn:active { transform: translateY(0px); box-shadow: none; }\n.sd-game-start-btn:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 25px 50px -12px rgba(16,185,129,0.5) !important; filter: brightness(1.1); }\n@keyframes sdTimerPulse { 0% { opacity: 1; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }\n.sd-timer-warning { color: #EF4444 !important; animation: sdTimerPulse 1s infinite; }\n\n@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(16,185,129, 0.4); } 70% { box-shadow: 0 0 0 20px rgba(16,185,129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16,185,129, 0); } }\n\n         @keyframes sdRadarPulse {\n           0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }\n           50% { opacity: 1; }\n           100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }\n         }\n         \n         .sd-mag-btn:hover {\n            border-color: #10B981 !important;\n            transform: translateY(-3px);\n            box-shadow: 0 15px 30px rgba(16,185,129,0.15) !important;\n            background: #F0FDF4 !important;\n         }\n         .sd-mag-btn:hover h4 span {\n            background: #10B981 !important;\n            color: #FFFFFF !important;\n         }\n\n         /* Hide scrollbar for gallery but keep functionality */\n         .sd-gallery-track::-webkit-scrollbar {\n            display: none;\n         }\n         .sd-gallery-track {\n            -ms-overflow-style: none;  /* IE and Edge */\n            scrollbar-width: none;  /* Firefox */\n         }\n         .sd-gallery-track.active {\n            scroll-snap-type: none; /* Disable snap when dragging */\n         }\n      \n" }} />

    <header id="header" className="scrolled">
        <div className="nav-wrapper">
            <div className="logo"><Link href={"/"}  className="logo">KNS BOOKS<span>.</span></Link></div>
            <nav className="nav-links">
                <Link href={"/index.html#about"}  className="">ABOUT KNS</Link>
                <Link href={"/anthology"}  className="">수능 앤솔로지</Link>
                <Link href={"/sudanbi"}  className="active">수단비</Link>
                <Link href={"/katch"}  className="">KATCH 플랫폼</Link>
                <Link href={"/#contact"}  className="btn-partner">도입 및 제휴</Link>
            </nav>
        </div>
    </header>

    
































<main>
    <div style={{"background":"#F8FAFC","minHeight":"100vh","paddingTop":"80px","paddingBottom":"0"} as any}>
      
      
      <div style={{"background":"radial-gradient(circle at top right, #F0FDF4 0%, #FFFFFF 60%, #F8FAFC 100%)","padding":"8rem 4% 10rem","position":"relative","overflow":"hidden","display":"flex","alignItems":"center","justifyContent":"center","borderBottom":"1px solid #E2E8F0"} as any}>
        
        
        <div style={{"position":"absolute","top":"10%","left":"-10%","width":"50%","height":"70%","background":"radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 70%)","borderRadius":"50%","filter":"blur(60px)","pointerEvents":"none"} as any}></div>
        <div style={{"position":"absolute","bottom":"-10%","right":"10%","width":"40%","height":"60%","background":"radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)","borderRadius":"50%","filter":"blur(60px)","pointerEvents":"none"} as any}></div>

        <div className="container" style={{"maxWidth":"1400px","width":"100%","display":"grid","gridTemplateColumns":"1.1fr 0.9fr","gap":"60px","alignItems":"center","position":"relative","zIndex":"10"} as any}>
          
          
          <div>
             <span style={{"display":"inline-flex","alignItems":"center","color":"#10B981","fontWeight":"800","letterSpacing":"2px","textTransform":"uppercase","marginBottom":"24px","border":"1px solid rgba(16,185,129,0.2)","padding":"8px 20px","borderRadius":"40px","background":"rgba(16,185,129,0.05)","fontSize":"0.9rem"} as any}>
                <span style={{"width":"8px","height":"8px","background":"#10B981","borderRadius":"50%","marginRight":"12px","boxShadow":"0 0 10px rgba(16,185,129,0.4)"} as any}></span>
                Sudanbi : The CSAT Database
             </span>
             <h1 style={{"fontSize":"clamp(2.8rem, 4vw, 4rem)","fontWeight":"900","marginBottom":"2rem","letterSpacing":"-1.5px","lineHeight":"1.25","color":"#0F172A","wordBreak":"keep-all"} as any}>
               수능 1등급은 '단어의 양'이 아니라 <br/> <span style={{"background":"linear-gradient(90deg, #34D399, #3B82F6)","WebkitBackgroundClip":"text","color":"transparent"} as any}>'암기 순서'에서 갈린다!</span>
             </h1>
             <div style={{"display":"flex","flexDirection":"column","gap":"12px","marginBottom":"45px","paddingLeft":"20px","borderLeft":"3px solid #10B981"} as any}>
               <div style={{"color":"#059669","fontSize":"1.25rem","fontWeight":"800"} as any}>"데이터 순서대로 외워야 점수가 빨리 오른다!"</div>
               <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all","fontWeight":"500"} as any}>
                 KNS 대치 본원 수강생들이 실제로 암기하는 바로 그 비밀 노트.<br/>
                 역대 수능 및 2026 대수능·평가원 분석표를 최초 수록하여 진짜 '나올 단어'부터 꿰뚫습니다.
               </p>
             </div>
             <div style={{"display":"flex","gap":"20px"} as any}>
               <Link href={"/#sudanbi-timeline"}  style={{"background":"linear-gradient(135deg, #10B981 0%, #059669 100%)","color":"#0F172A","fontWeight":"800","padding":"18px 36px","borderRadius":"50px","fontSize":"1.1rem","textDecoration":"none","transition":"all 0.3s ease","boxShadow":"0 10px 25px rgba(16,185,129,0.25)","display":"inline-flex","alignItems":"center","gap":"12px"} as any}  >
                 <span>어휘 데이터베이스 체험하기</span>
                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </Link>
             </div>
          </div>

          
          <div style={{"position":"relative","display":"flex","justifyContent":"center","alignItems":"center","paddingRight":"20px"} as any}>
             
             
             <div style={{"position":"absolute","top":"-10px","right":"-20px","width":"230px","background":"rgba(255, 255, 255, 0.9)","backdropFilter":"blur(16px)","border":"1px solid rgba(226,232,240,0.8)","borderRadius":"20px","padding":"20px","boxShadow":"0 20px 40px rgba(0,0,0,0.05)","zIndex":"10","animation":"sdFloat 6s ease-in-out infinite"} as any}>
                <div style={{"fontSize":"0.9rem","color":"#64748B","fontWeight":"700","marginBottom":"5px"} as any}>핵심편 모고 정합률</div>
                <div style={{"fontSize":"2.2rem","color":"#10B981","fontWeight":"900","letterSpacing":"-1px","textShadow":"0 0 20px rgba(16,185,129,0.2)"} as any}>81.9<span style={{"fontSize":"1.2rem"} as any}>%</span></div>
             </div>

             <div style={{"position":"absolute","bottom":"50px","left":"-40px","width":"190px","background":"rgba(255, 255, 255, 0.95)","backdropFilter":"blur(16px)","border":"1px solid rgba(226,232,240,0.8)","borderRadius":"20px","padding":"15px 20px","boxShadow":"0 20px 40px rgba(0,0,0,0.06)","zIndex":"10","animation":"sdFloatReverse 5s ease-in-out infinite"} as any}>
                <div style={{"display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <div style={{"width":"40px","height":"40px","background":"linear-gradient(135deg, #10B981, #059669)","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","color":"#0F172A","fontWeight":"900","fontSize":"1.2rem","boxShadow":"0 4px 10px rgba(16, 185, 129, 0.3)"} as any}>V</div>
                   <div style={{"fontSize":"1.1rem","color":"#0F172A","fontWeight":"800","letterSpacing":"-0.5px"} as any}>나올 단어 위주</div>
                </div>
             </div>

             
             <div style={{"position":"relative","zIndex":"2","width":"440px","height":"480px","display":"flex","alignItems":"center","justifyContent":"center","transformStyle":"preserve-3d","pointerEvents":"none"} as any}>
                
                <div style={{"position":"absolute","top":"15%","left":"10%","width":"80%","height":"70%","background":"linear-gradient(45deg, #10B981, #8B5CF6)","filter":"blur(90px)","opacity":"0.15","borderRadius":"50%"} as any}></div>
                
                
                <div style={{"position":"absolute","width":"230px","zIndex":"1","transform":"perspective(1200px) rotateY(15deg) translateX(-120px) translateY(-20px) scale(0.85)","transition":"all 0.5s ease","filter":"drop-shadow(-20px 20px 30px rgba(0,0,0,0.15))"} as any}>
                   <img src="/images/sudanbi_advanced.png" style={{"width":"100%","borderRadius":"14px","border":"1px solid rgba(0,0,0,0.05)"} as any} />
                </div>
                
                
                <div style={{"position":"absolute","width":"230px","zIndex":"2","transform":"perspective(1200px) rotateY(-15deg) translateX(120px) translateY(20px) scale(0.85)","transition":"all 0.5s ease","filter":"drop-shadow(20px 20px 30px rgba(0,0,0,0.15))"} as any}>
                   <img src="/images/sudanbi_essential.png" style={{"width":"100%","borderRadius":"14px","border":"1px solid rgba(0,0,0,0.05)"} as any} />
                </div>
                
                
                <div style={{"position":"absolute","width":"250px","zIndex":"3","transform":"perspective(1200px) rotateY(0deg) translateZ(40px) scale(1)","transition":"all 0.5s ease","filter":"drop-shadow(0 30px 50px rgba(0,0,0,0.25))","pointerEvents":"auto"} as any}  >
                   <img src="/images/sudanbi_core.png" style={{"width":"100%","borderRadius":"16px","border":"1px solid rgba(0,0,0,0.08)"} as any} />
                </div>
             </div>
          </div>
        </div>

        
      </div>

      
      <section style={{"padding":"100px 4% 80px","background":"#FFFFFF","position":"relative","overflow":"hidden","color":"#0F172A","fontFamily":"'Pretendard', sans-serif"} as any}>
        <div className="container" style={{"maxWidth":"1200px","margin":"0 auto","position":"relative","zIndex":"10"} as any}>
          
          <div style={{"textAlign":"center","marginBottom":"50px"} as any}>
            <span style={{"display":"inline-block","color":"#059669","fontWeight":"900","letterSpacing":"1px","marginBottom":"24px","background":"#D1FAE5","padding":"12px 36px","borderRadius":"50px","fontSize":"1.6rem","border":"2px solid rgba(16,185,129,0.2)"} as any}>
              1. 수단비 기획 의도
            </span>
            <h2 style={{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"900","marginBottom":"1.5rem","letterSpacing":"-1.5px","lineHeight":"1.3","color":"#0F172A"} as any}>
              1) 수치로 증명하는 <span style={{"color":"#10B981"} as any}>데이터의 신빙성</span>
            </h2>
          </div>

          
          <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"40px","margin":"0 auto 100px"} as any}>
            
            
            <div style={{"background":"#F8FAFC","border":"1px solid #E2E8F0","borderRadius":"20px","padding":"40px 35px","position":"relative","boxShadow":"0 10px 30px -10px rgba(0,0,0,0.05)","transition":"transform 0.3s"} as any}  >
               <h3 style={{"fontSize":"1.6rem","color":"#0F172A","fontWeight":"800","marginBottom":"30px","display":"inline-block","borderBottom":"3px solid #CBD5E1","paddingBottom":"10px"} as any}>Check! 이 책이 꼭 필요한 수험생</h3>
               <div style={{"fontSize":"4rem","position":"absolute","top":"30px","right":"40px","lineHeight":"1","textShadow":"0 4px 10px rgba(0,0,0,0.1)"} as any}>🙋</div>
               
               <ul style={{"listStyle":"none","padding":"0","margin":"0","display":"flex","flexDirection":"column","gap":"16px"} as any}>
                  <li style={{"fontSize":"1.15rem","fontWeight":"600","color":"#475569","display":"flex","alignItems":"flex-start","gap":"15px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#64748B","fontSize":"1.1rem","marginTop":"3px","flexShrink":"0"} as any}>○</span> 
                     <span>단어장은 샀지만 <strong style={{"color":"#0F172A"} as any}>앞부분만 새까만</strong> 학생</span>
                  </li>
                  <li style={{"fontSize":"1.15rem","fontWeight":"600","color":"#475569","display":"flex","alignItems":"flex-start","gap":"15px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#64748B","fontSize":"1.1rem","marginTop":"3px","flexShrink":"0"} as any}>○</span> 
                     <span>아는 단어는 많은데 정작 <strong style={{"color":"#0F172A"} as any}>해석이 안 되는</strong> 학생</span>
                  </li>
                  <li style={{"fontSize":"1.15rem","fontWeight":"600","color":"#475569","display":"flex","alignItems":"flex-start","gap":"15px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#64748B","fontSize":"1.1rem","marginTop":"3px","flexShrink":"0"} as any}>○</span> 
                     <span>당장 점수가 급해 <strong style={{"color":"#0F172A"} as any}>'나올 단어'부터</strong> 외워야 하는 학생</span>
                  </li>
                  <li style={{"fontSize":"1.15rem","fontWeight":"600","color":"#475569","display":"flex","alignItems":"flex-start","gap":"15px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#64748B","fontSize":"1.1rem","marginTop":"3px","flexShrink":"0"} as any}>○</span> 
                     <span>대치동 최상위권 1등급의 <strong style={{"color":"#0F172A"} as any}>학습 전략</strong>이 궁금한 학생</span>
                  </li>
               </ul>
            </div>

            
            <div style={{"background":"#F0FDF4","border":"1px solid #BBF7D0","borderRadius":"20px","padding":"40px 35px","position":"relative","boxShadow":"0 10px 30px -10px rgba(16,185,129,0.1)","transition":"transform 0.3s"} as any}  >
               <h3 style={{"fontSize":"1.6rem","color":"#065F46","fontWeight":"800","marginBottom":"30px","display":"inline-block","borderBottom":"3px solid #BBF7D0","paddingBottom":"10px"} as any}>데이터가 증명하는 암기의 순서</h3>
               <div style={{"fontSize":"4rem","color":"#059669","position":"absolute","top":"30px","right":"40px","lineHeight":"1","textShadow":"0 4px 10px rgba(16,185,129,0.2)"} as any}>💡</div>
               
               <ul style={{"listStyle":"none","padding":"0","margin":"0","display":"flex","flexDirection":"column","gap":"20px"} as any}>
                  <li style={{"fontSize":"1.17rem","fontWeight":"600","color":"#047857","display":"flex","alignItems":"flex-start","gap":"12px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#10B981","fontSize":"1.2rem","marginTop":"3px","flexShrink":"0"} as any}>✔</span> 
                     <span><strong style={{"color":"#065F46"} as any}>압도적 분석:</strong> 역대 수능(93-25년 실행) + 06년 이후 교육청 및 평가원(1~3학년) 전수분석 데이터 수록</span>
                  </li>
                  <li style={{"fontSize":"1.17rem","fontWeight":"600","color":"#047857","display":"flex","alignItems":"flex-start","gap":"12px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#10B981","fontSize":"1.2rem","marginTop":"3px","flexShrink":"0"} as any}>✔</span> 
                     <span><strong style={{"color":"#065F46"} as any}>확실한 우선순위:</strong> 빈출도와 트렌드 완벽 반영! 가장 시급한 점수 획득을 위해 시험에 '나올 단어'부터 암기</span>
                  </li>
                  <li style={{"fontSize":"1.17rem","fontWeight":"600","color":"#047857","display":"flex","alignItems":"flex-start","gap":"12px","lineHeight":"1.5","wordBreak":"keep-all"} as any}>
                     <span style={{"color":"#10B981","fontSize":"1.2rem","marginTop":"3px","flexShrink":"0"} as any}>✔</span> 
                     <span><strong style={{"color":"#065F46"} as any}>실전 최적화:</strong> 단순 암기를 넘어 독해로 지체없이 직결되는 실전 문제 유형 수록</span>
                  </li>
               </ul>
            </div>
          </div>
          
          
          <div style={{"textAlign":"center","marginBottom":"50px","paddingTop":"50px","borderTop":"1px solid #E2E8F0"} as any}>
            <h2 style={{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"900","marginBottom":"1.5rem","letterSpacing":"-1.5px","lineHeight":"1.3","color":"#0F172A"} as any}>
              2) 타사 어휘집 <span style={{"color":"#10B981"} as any}>적중률 비교 분석 결과</span>
            </h2>
          </div>

          
          <div style={{"marginBottom":"60px"} as any}>
             <div style={{"textAlign":"center","marginBottom":"40px"} as any}>
               <span style={{"display":"inline-block","color":"#10B981","fontWeight":"700","letterSpacing":"2px","textTransform":"uppercase","marginBottom":"10px","border":"1px solid #10B981","padding":"6px 16px","borderRadius":"20px","fontSize":"0.9rem"} as any}>
                 ACCURACY DATA ANALYTICS
               </span>
               <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","marginTop":"15px"} as any}>
                  * 분석 대상: 1등급 목표 교재 첫 150단어 기준.<br/>
                  수단비는 타사 대비 파괴적인 수준의 실제 <strong style={{"color":"#10B981","fontWeight":"800"} as any}>모의고사 출제 정합률</strong>을 보여줍니다.
               </p>
             </div>

             <div style={{"background":"#FFFFFF","border":"1px solid #E2E8F0","borderRadius":"16px","overflow":"hidden","boxShadow":"0 15px 40px -10px rgba(0,0,0,0.08)"} as any}>
                <div style={{"overflowX":"auto"} as any}>
                   <div style={{"minWidth":"900px"} as any}>
                      
                      <div style={{"display":"grid","gridTemplateColumns":"1.8fr repeat(3, 1fr)","gap":"2px","background":"#0F172A","color":"#0F172A","fontWeight":"700","fontSize":"1.15rem","textAlign":"center","padding":"22px 0"} as any}>
                         <div style={{"textAlign":"center","borderRight":"1px solid rgba(255,255,255,0.2)"} as any}>테스트 환경</div>
                         <div style={{"borderRight":"1px solid rgba(255,255,255,0.2)"} as any}>N사 고교필수</div>
                         <div style={{"borderRight":"1px solid rgba(255,255,255,0.2)"} as any}>M사 수능필수</div>
                         <div style={{"color":"#34D399","fontWeight":"900"} as any}>수단비 필수편</div>
                      </div>

                      
                      <div style={{"display":"grid","gridTemplateColumns":"1.8fr repeat(3, 1fr)","gap":"2px","background":"#FFFFFF","textAlign":"center","borderBottom":"1px solid #E2E8F0"} as any}>
                         <div style={{"padding":"24px","fontWeight":"800","fontSize":"1.25rem","color":"#1E293B","background":"#F8FAFC","borderRight":"1px solid #E2E8F0"} as any}>24년 고1 3월 모고 적중률</div>
                         <div style={{"padding":"24px","fontWeight":"600","fontSize":"1.15rem","color":"#475569","borderRight":"1px solid #E2E8F0"} as any}>12개 (8%)</div>
                         <div style={{"padding":"24px","fontWeight":"600","fontSize":"1.15rem","color":"#475569","borderRight":"1px solid #E2E8F0"} as any}>18개 (12%)</div>
                         <div style={{"padding":"24px","fontWeight":"900","fontSize":"1.5rem","color":"#10B981","background":"#EcFDF5"} as any}>52개 (35%)</div>
                      </div>
                      
                      
                      <div style={{"display":"grid","gridTemplateColumns":"1.8fr repeat(3, 1fr)","gap":"2px","background":"#FFFFFF","textAlign":"center","borderBottom":"1px solid #E2E8F0"} as any}>
                         <div style={{"padding":"24px","fontWeight":"800","fontSize":"1.25rem","color":"#1E293B","background":"#F8FAFC","borderRight":"1px solid #E2E8F0"} as any}>25년 고1 3월 모고 적중률</div>
                         <div style={{"padding":"24px","fontWeight":"600","fontSize":"1.15rem","color":"#475569","borderRight":"1px solid #E2E8F0"} as any}>-</div>
                         <div style={{"padding":"24px","fontWeight":"600","fontSize":"1.15rem","color":"#475569","borderRight":"1px solid #E2E8F0"} as any}>-</div>
                         <div style={{"padding":"24px","fontWeight":"900","fontSize":"1.5rem","color":"#10B981","background":"#EcFDF5"} as any}>63%</div>
                      </div>

                      
                      <div style={{"border":"4px solid #10B981","position":"relative","background":"#D1FAE5"} as any}>
                         <div style={{"display":"grid","gridTemplateColumns":"1.8fr repeat(3, 1fr)","gap":"2px","textAlign":"center"} as any}>
                            <div style={{"padding":"24px","fontWeight":"800","fontSize":"1.25rem","color":"#065F46","background":"#A7F3D0","borderRight":"1px solid #34D399"} as any}>수단비 핵심편 폭발적 적중</div>
                            <div style={{"padding":"24px","fontWeight":"700","fontSize":"1.15rem","color":"#0F172A","borderRight":"1px solid #34D399","display":"flex","alignItems":"center","justifyContent":"center"} as any}>24년 고1 9월 모고 적용</div>
                            <div style={{"padding":"24px","fontWeight":"900","fontSize":"1.5rem","color":"#DC2626","borderRight":"1px solid #34D399","display":"flex","alignItems":"center","justifyContent":"center"} as any}>-</div>
                            <div style={{"padding":"24px","fontWeight":"900","fontSize":"1.7rem","color":"#047857","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"} as any}>81.9% <span style={{"fontSize":"0.95rem","color":"#059669","fontWeight":"800","marginTop":"5px"} as any}>(핵심편 TOP 350)</span></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>



      

<section id="level-test-minigame" style={{"padding":"100px 4%","background":"radial-gradient(circle at 50% 0%, rgba(16,185,129,0.05) 0%, rgba(59,130,246,0.03) 50%, transparent 100%)","display":"flex","justifyContent":"center","fontFamily":"'Pretendard', sans-serif","position":"relative","overflow":"hidden","marginBottom":"80px"} as any}>
    
    <div style={{"position":"absolute","top":"-100px","left":"-100px","width":"300px","height":"300px","background":"radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)","borderRadius":"50%","filter":"blur(40px)"} as any}></div>
    <div style={{"position":"absolute","bottom":"-100px","right":"-100px","width":"400px","height":"400px","background":"radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)","borderRadius":"50%","filter":"blur(50px)"} as any}></div>
    
    <div id="sd-game-container" style={{"background":"rgba(255, 255, 255, 0.85)","backdropFilter":"blur(20px)","WebkitBackdropFilter":"blur(20px)","borderRadius":"40px","padding":"60px 50px","maxWidth":"850px","width":"100%","textAlign":"center","boxShadow":"0 30px 60px -15px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5)","border":"1px solid rgba(226, 232, 240, 0.8)","position":"relative","zIndex":"10"} as any}>
        
    </div>
</section>






      
      <section id="sudanbi-timeline" style={{"padding":"120px 0","background":"#FFF","fontFamily":"'Pretendard', sans-serif"} as any}>
        <div className="container" style={{"maxWidth":"1400px","margin":"0 auto","display":"flex","gap":"40px"} as any}>
          
          
          <div style={{"width":"280px","flexShrink":"0","position":"sticky","top":"120px","height":"fit-content","paddingLeft":"20px","zIndex":"50"} as any}>
             <div id="sd-level-buttons" style={{"position":"relative","zIndex":"50"} as any}></div>
          </div>

          
          <div style={{"flex":"1","borderRadius":"40px","overflow":"hidden","position":"relative"} as any}>
            
            
            <div id="sd-level-theatre-bg" style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"100%","background":"radial-gradient(circle at 75% 50%, rgba(16,185,129,0.05) 0%, #0A0F1C 60%)","transition":"background 0.8s ease"} as any}></div>
            
            <div style={{"position":"relative","zIndex":"5","padding":"60px","minHeight":"800px","display":"flex","flexDirection":"column"} as any}>
              
              <div style={{"textAlign":"left","marginBottom":"40px"} as any}>
                 <span id="sd-level-theatre-title-color" style={{"display":"inline-block","fontWeight":"900","letterSpacing":"1px","marginBottom":"12px","fontSize":"1.6rem","color":"#10B981","filter":"drop-shadow(0 0 10px rgba(16,185,129,0.5))"} as any}>
                   3. 수단비 컬러 로드맵
                 </span>
              </div>
              
              <div style={{"background":"rgba(255,255,255,0.02)","borderRadius":"32px","padding":"50px 60px","boxShadow":"0 40px 80px -10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)","position":"relative","overflow":"hidden","backdropFilter":"blur(20px)","flex":"1","display":"flex","flexDirection":"column","transition":"all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"} as any}>
                
                
                <div id="sd-level-accent-line" style={{"position":"absolute","top":"0","left":"0","width":"100%","height":"8px","background":"#10B981","transition":"background 0.5s","boxShadow":"0 0 20px #10B981"} as any}></div>
                
                
                <div id="sd-level-content-box" style={{"animation":"fadeInUp 0.5s ease-out","zIndex":"10","position":"relative","pointerEvents":"auto"} as any}>
                  <div style={{"marginBottom":"25px"} as any}>
                     <div id="sd-level-target-badge-container" style={{"display":"flex","gap":"12px","marginBottom":"25px","flexWrap":"wrap"} as any}></div>
                     <h3 id="sd-level-title" style={{"fontSize":"3rem","fontWeight":"900","color":"#0F172A","marginBottom":"25px","lineHeight":"1.3","letterSpacing":"-1.5px"} as any}></h3>
                     <p id="sd-level-desc" style={{"fontSize":"1.35rem","color":"#475569","lineHeight":"1.8","wordBreak":"keep-all","fontWeight":"500","minHeight":"120px"} as any}></p>
                  </div>
                </div>

                
                <div id="sd-level-image-box" style={{"position":"relative","marginTop":"40px","width":"100%","height":"380px","display":"flex","alignItems":"center","justifyContent":"center","zIndex":"2","pointerEvents":"none"} as any}>
                   
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      <section style={{"padding":"120px 0","background":"radial-gradient(circle at top left, #F0FDF4 0%, #FFFFFF 100%)","borderTop":"1px solid #E2E8F0","position":"relative"} as any}>
        <div className="container" style={{"maxWidth":"1400px","margin":"0 auto","padding":"0 4%"} as any}>
          
          <div style={{"textAlign":"center","marginBottom":"80px"} as any}>
             <span style={{"display":"inline-block","color":"#10B981","fontWeight":"900","letterSpacing":"1px","marginBottom":"24px","background":"#D1FAE5","padding":"12px 36px","borderRadius":"50px","fontSize":"1.6rem","border":"2px solid rgba(16,185,129,0.2)"} as any}>
               4. 수단비 단어장 해부
             </span>
             <h2 style={{"fontSize":"clamp(2rem, 4vw, 3rem)","fontWeight":"900","marginBottom":"1.5rem","letterSpacing":"-1.5px","lineHeight":"1.3","color":"#0F172A"} as any}>
               단어 하나에 담긴 <span style={{"color":"#10B981"} as any}>치밀한 빅데이터 분석</span>
             </h2>
             <p style={{"color":"#475569","fontSize":"1.25rem"} as any}>우측의 분석 포인트를 클릭/호버하여 단어장 내지를 자세히 들여다보세요.</p>
          </div>

          <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"60px","alignItems":"start"} as any}>
            
            
            <div style={{"position":"sticky","top":"120px","background":"#FFFFFF","borderRadius":"20px","boxShadow":"0 30px 60px rgba(0,0,0,0.08)","border":"1px solid #E2E8F0","padding":"30px","display":"flex","flexDirection":"column","alignItems":"center"} as any}>
               
               <div id="sd-mag-img-container" style={{"position":"relative","width":"100%","maxWidth":"550px","borderRadius":"12px","overflow":"hidden","cursor":"crosshair"} as any}>
                 
                 <img id="sd-mag-base-img" src="/images/sudanbi_guide_clean.png" style={{"width":"100%","display":"block"} as any} />
                 
                 
                 <div id="sd-mag-lens" style={{"position":"absolute","top":"50%","left":"50%","width":"180px","height":"180px","borderRadius":"50%","border":"4px solid #10B981","backgroundColor":"#fff","backgroundImage":"url('/images/sudanbi_guide_clean.png')","backgroundRepeat":"no-repeat","boxShadow":"0 20px 40px rgba(0,0,0,0.3), inset 0 5px 20px rgba(0,0,0,0.1)","transform":"translate(-50%, -50%) scale(0)","opacity":"0","transition":"all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)","pointerEvents":"none","zIndex":"10"} as any}>
                 </div>
                 
                 
                 <div id="sd-mag-radar" style={{"position":"absolute","top":"50%","left":"50%","width":"40px","height":"40px","borderRadius":"50%","border":"2px solid #10B981","transform":"translate(-50%, -50%)","opacity":"0","pointerEvents":"none","animation":"sdRadarPulse 1.5s infinite"} as any}></div>
               </div>
               
               <div style={{"marginTop":"20px","color":"#475569","fontWeight":"600","fontSize":"1rem","display":"flex","alignItems":"center","gap":"8px"} as any}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                 마우스를 올리거나 우측 메뉴를 선택하세요
               </div>
            </div>

            
            <div style={{"display":"flex","flexDirection":"column","gap":"24px"} as any}>
              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(65, 12, '/images/sudanbi_guide_clean.png')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#0F172A","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#F1F5F9","color":"#64748B","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>1</span>
                   단어의 첫 출제 연도 파악
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   표 상단에 적힌 연도는 해당 단어가 <b>대수능/평가원 모의평가</b>에 최초로 등장한 연도를 의미합니다. 기출 트렌드에 편입된 시기를 한눈에 알아볼 수 있습니다.
                 </p>
              </div>

              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(20, 12, '/images/sudanbi_guide_clean.png')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#0F172A","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#F1F5F9","color":"#64748B","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>2</span>
                   객관적인 출제 횟수 데이터
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   좌측 숫자는 평가원(6월, 9월, 수능)에서의 출제 횟수이며, 우측 숫자는 교육청을 포함한 역대 누적 출제 횟수입니다. 숫자가 클수록 <b>지금 당장 외워야 하는 1순위 단어</b>입니다.
                 </p>
              </div>

              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(15, 23, '/images/sudanbi_guide_clean.png')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#0F172A","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#F1F5F9","color":"#64748B","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>3</span>
                   유의어/반의어의 입체적 확장
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   단순 동의어 나열이 아닌, 수능 지문 내에서 패러프레이징(Paraphrasing) 되어 등장할 수 있는 <b>유의어와 반의어를 오름차순으로 배치</b>하여 단 1개의 단어로 3배의 학습 효과를 거둡니다.
                 </p>
              </div>
              
              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(45, 23, '/images/sudanbi_guide_clean.png')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#0F172A","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#F1F5F9","color":"#64748B","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>4</span>
                   타동사 / 자동사 구분을 통한 어법 체화
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   최근 수능의 트렌드인 타동사와 자동사를 엄격하게 구분하여 수록했습니다. <b>문맥적 의미 파악은 물론 문법 문제(어법 포인트)까지</b> 단어를 암기하며 자연스럽게 습득합니다.
                 </p>
              </div>

              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(0, 0, '/images/sudanbi_test_page.png', 'crop5')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#3B82F6","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#EFF6FF","color":"#3B82F6","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>5</span>
                   어휘의 확장성 (유추 훈련)
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   물리적인 1차원적 해석을 깨부수고 문맥적 접근을 통해 사고력을 키웁니다. 단순 암기를 넘어 <b>새로운 지식도 스스로 분석하고 유추하는 능력</b>을 길러줍니다.
                 </p>
              </div>

              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(0, 0, '/images/sudanbi_test_page.png', 'crop6')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#3B82F6","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#EFF6FF","color":"#3B82F6","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>6</span>
                   문맥 적합성 (빈칸 훈련)
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   오답률 1위 스팟인 빈칸 추론에 대비합니다. 빈칸에 왜 특정 단어가 들어갈 수밖에 없는지, <b>어떤 종류의 단어가 필요한지 일차적인 논리력을 강화</b>합니다.
                 </p>
              </div>

              
              <div className="sd-mag-btn" onClick={() => { eval(`sdFocusMagnifier(0, 0, '/images/sudanbi_theme_table.png', 'theme7')`) }}  style={{"background":"#FFFFFF","border":"2px solid #E2E8F0","padding":"30px","borderRadius":"16px","cursor":"pointer","transition":"all 0.3s"} as any}>
                 <h4 style={{"fontSize":"1.5rem","fontWeight":"800","color":"#8B5CF6","marginBottom":"12px","display":"flex","alignItems":"center","gap":"12px"} as any}>
                   <span style={{"background":"#F5F3FF","color":"#8B5CF6","width":"32px","height":"32px","borderRadius":"50%","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"1.1rem"} as any}>7</span>
                   다양한 테마 (별책 부록)
                 </h4>
                 <p style={{"color":"#475569","fontSize":"1.15rem","lineHeight":"1.6","margin":"0","wordBreak":"keep-all"} as any}>
                   과학, 경제, 철학뿐만 아니라 <b>동작, 소리, 기하와 같은 묘사적 어휘를 주제/카테고리별로 레벨링</b>하여 정리했으며 마이너스 어휘로 폭발적인 어휘력 확장을 돕습니다.
                 </p>
              </div>

            </div>
          </div>

          
          <div style={{"marginTop":"100px","paddingTop":"80px","borderTop":"1px solid #E2E8F0"} as any}>
            <div style={{"textAlign":"center","marginBottom":"50px"} as any}>
              <h3 style={{"fontSize":"2.2rem","fontWeight":"900","color":"#0F172A","marginBottom":"16px"} as any}>
                📖 공식 매뉴얼로 <span style={{"color":"#10B981"} as any}>더 깊게 알아보기</span>
              </h3>
              <p style={{"color":"#64748B","fontSize":"1.15rem"} as any}>마우스로 좌우로 스와이프하여 수단비의 입체적 구성을 확인하세요.</p>
            </div>
            
            <div className="sd-gallery-track" style={{"display":"flex","justifyContent":"center","gap":"30px","overflowX":"auto","paddingBottom":"40px","scrollSnapType":"x mandatory","paddingLeft":"20px","paddingRight":"20px"} as any}>
              
              <div style={{"flex":"0 0 auto","width":"clamp(280px, 80vw, 450px)","scrollSnapAlign":"center","borderRadius":"20px","overflow":"hidden","boxShadow":"0 20px 50px rgba(0,0,0,0.08)","border":"1px solid #E2E8F0","background":"#FFF","cursor":"grab","transition":"transform 0.3s"} as any}  >
                 <img src="/images/guide_system_1.png" style={{"width":"100%","display":"block"} as any} draggable="false" />
              </div>
              <div style={{"flex":"0 0 auto","width":"clamp(280px, 80vw, 450px)","scrollSnapAlign":"center","borderRadius":"20px","overflow":"hidden","boxShadow":"0 20px 50px rgba(0,0,0,0.08)","border":"1px solid #E2E8F0","background":"#FFF","cursor":"grab","transition":"transform 0.3s"} as any}  >
                 <img src="/images/guide_system_2.png" style={{"width":"100%","display":"block"} as any} draggable="false" />
              </div>
              <div style={{"flex":"0 0 auto","width":"clamp(280px, 80vw, 450px)","scrollSnapAlign":"center","borderRadius":"20px","overflow":"hidden","boxShadow":"0 20px 50px rgba(0,0,0,0.08)","border":"1px solid #E2E8F0","background":"#FFF","cursor":"grab","transition":"transform 0.3s"} as any}  >
                 <img src="/images/guide_system_3.png" style={{"width":"100%","display":"block"} as any} draggable="false" />
              </div>
              <div style={{"flex":"0 0 auto","width":"clamp(280px, 80vw, 450px)","scrollSnapAlign":"center","borderRadius":"20px","overflow":"hidden","boxShadow":"0 20px 50px rgba(0,0,0,0.08)","border":"1px solid #E2E8F0","background":"#FFF","cursor":"grab","transition":"transform 0.3s"} as any}  >
                 <img src="/images/guide_system_4.png" style={{"width":"100%","display":"block"} as any} draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      
      <section style={{"background":"#0F172A","color":"#0F172A","padding":"100px 4%","textAlign":"center"} as any}>
        <h2 style={{"fontSize":"2.5rem","fontWeight":"900","marginBottom":"20px"} as any}>수단비 정규 교보재 검토를 희망하십니까?</h2>
        <Link href={"/#contact"}  style={{"display":"inline-block","padding":"16px 45px","background":"#10B981","color":"#fff","fontWeight":"800","fontSize":"1.2rem","borderRadius":"40px","textDecoration":"none","transition":"transform 0.3s","marginTop":"20px"} as any}>
          엔터프라이즈 파트너십 문의
        </Link>
      </section>

    </div>
</main>





































































    <footer id="contact" style={{"background":"#F8FAFC","color":"#94a3b8","padding":"100px 4% 60px","borderTop":"1px solid rgba(255,255,255,0.05)","position":"relative","overflow":"hidden","marginTop":"80px"} as any}>
        <div style={{"position":"absolute","bottom":"-200px","right":"-200px","width":"600px","height":"600px","background":"radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)","borderRadius":"50%","pointerEvents":"none"} as any}></div>
        <div className="container" style={{"maxWidth":"1400px","margin":"0 auto","position":"relative","zIndex":"10"} as any}>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"60px","marginBottom":"80px"} as any}>
                <div>
                    <h2 style={{"color":"#fff","fontSize":"1.8rem","fontWeight":"900","marginBottom":"20px","letterSpacing":"-0.5px","fontFamily":"'Inter', sans-serif"} as any}>
                        KNS BOOKS<span style={{"color":"#3B82F6"} as any}>.</span>
                    </h2>
                    <p style={{"lineHeight":"1.8","marginBottom":"30px","wordBreak":"keep-all","color":"#64748B"} as any}>
                        대한민국 1% 최상위권 교육의 기준. 대치동 20년의 압도적 노하우를 집대성한 B2B 프리미엄 평가 및 리소스 플랫폼입니다.
                    </p>
                </div>
                <div>
                    <h4 style={{"color":"#fff","fontSize":"1.1rem","fontWeight":"700","marginBottom":"25px"} as any}>Brand Portfolio</h4>
                    <ul style={{"listStyle":"none","padding":"0"} as any}>
                        <li style={{"marginBottom":"16px"} as any}><Link href={"/anthology"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"} as any}>수능 앤솔로지 (7단계 독해)</Link></li>
                        <li style={{"marginBottom":"16px"} as any}><Link href={"/sudanbi"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"} as any}>수단비 (프리미엄 어휘)</Link></li>
                        <li style={{"marginBottom":"16px"} as any}><Link href={"/katch"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"} as any}>KATCH (통합 평가 시스템)</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{"color":"#fff","fontSize":"1.1rem","fontWeight":"700","marginBottom":"25px"} as any}>Partnership</h4>
                    <ul style={{"listStyle":"none","padding":"0"} as any}>
                        <li style={{"marginBottom":"16px","color":"#64748B"} as any}>제휴 문의 <br/><span style={{"color":"#e2e8f0","fontWeight":"600"} as any}>02-555-5555</span></li>
                        <li style={{"marginBottom":"16px","color":"#64748B"} as any}>이메일 상담 <br/><span style={{"color":"#3B82F6"} as any}>b2b@knsbooks.co.kr</span></li>
                        <li style={{"color":"#64748B"} as any}>본사 주소 <br/>서울특별시 강남구 대치동</li>
                    </ul>
                </div>
            </div>
            <div style={{"paddingTop":"40px","borderTop":"1px solid rgba(255,255,255,0.05)","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"20px","fontSize":"0.9rem","color":"#64748B"} as any}>
                <div><p>&copy; 2026 KNS BOOKS. All Rights Reserved.</p></div>
                <div style={{"display":"flex","gap":"30px"} as any}><span style={{"cursor":"pointer"} as any}>이용약관</span><span style={{"cursor":"pointer"} as any}>개인정보처리방침</span></div>
            </div>
        </div>
    </footer>

    

    </main>
  );
}
