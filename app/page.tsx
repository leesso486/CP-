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

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>

    <header id="header" className="scrolled">
        <div className="nav-wrapper">
            <div className="logo"><Link href={"/"}  className="logo">KNS BOOKS<span>.</span></Link></div>
            <nav className="nav-links">
                <Link href={"/index.html#about"}  className="">ABOUT KNS</Link>
                <Link href={"/anthology"}  className="">수능 앤솔로지</Link>
                <Link href={"/sudanbi"}  className="">수단비</Link>
                <Link href={"/katch"}  className="">KATCH 플랫폼</Link>
                <Link href={"/#contact"}  className="btn-partner">도입 및 제휴</Link>
            </nav>
        </div>
    </header>

    <main>
        <div style={{"backgroundColor":"#FFFFFF","color":"#0F172A","minHeight":"100vh","fontFamily":"Pretendard, Inter, sans-serif"}}>
<section style={{"position":"relative","width":"100%","height":"100vh","minHeight":"800px","background":"#FFFFFF","overflow":"hidden","display":"flex","alignItems":"center","borderBottom":"1px solid #F1F5F9"}}>
    <!-- Light Background Accents -->
    <div id="mouseOrb" style={{"position":"absolute","width":"800px","height":"800px","background":"radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(147,51,234,0.05) 40%, transparent 70%)","borderRadius":"50%","pointerEvents":"none","transform":"translate(-50%, -50%)","transition":"opacity 0.2s","zIndex":"1","opacity":"1"}}></div>
    <div style={{"position":"absolute","top":"0","left":"0","right":"0","bottom":"0","backgroundImage":"linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)","backgroundSize":"4rem 4rem","zIndex":"0"}}></div>
    
    <div style={{"maxWidth":"1400px","margin":"0 auto","width":"100%","padding":"0 4%","position":"relative","zIndex":"10","display":"grid","gridTemplateColumns":"1.2fr 1fr","gap":"60px","alignItems":"center"}} className="reveal">
        <div>
            <div style={{"display":"inline-block","padding":"8px 24px","background":"rgba(59,130,246,0.1)","border":"1px solid rgba(59,130,246,0.2)","color":"#2563EB","borderRadius":"100px","fontSize":"0.9rem","fontWeight":"800","letterSpacing":"2px","marginBottom":"30px"}}>
                PREMIUM PUBLISHING
            </div>
            <h1 style={{"fontSize":"clamp(3.5rem, 5vw, 5rem)","fontWeight":"900","color":"#0F172A","lineHeight":"1.15","letterSpacing":"-2px","marginBottom":"24px"}}>
                대치동 20년 현장을<br/>
                <span style={{"background":"linear-gradient(135deg, #2563EB, #7C3AED)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"}}>완벽히 텍스트에 담다.</span>
            </h1>
            <p style={{"fontSize":"1.25rem","color":"#475569","maxWidth":"600px","lineHeight":"1.6","wordBreak":"keep-all","fontWeight":"500","marginBottom":"40px"}}>
                압도적인 깊이의 원서형 독해와 빈틈없는 어휘 로드맵.<br/>최상의 결과를 증명하는 프리미엄 프랜차이즈 전용 특화 교재를 만나보세요.
            </p>
            <div style={{"display":"flex","gap":"16px"}}>
                <Link href={"/#about"}  style={{"display":"inline-block","background":"#0F172A","color":"white","padding":"16px 32px","borderRadius":"12px","fontWeight":"700","textDecoration":"none","transition":"all 0.3s","boxShadow":"0 10px 20px rgba(15,23,42,0.15)"}}>시스템 알아보기 &darr;</Link>
            </div>
        </div>
        

        <div className="light-book-showcase">
            <div className="book-wrap"><img src="/images/anthology_L6.png" alt="Anthology L6" /></div>
            <div className="book-wrap"><img src="/images/sudanbi_purple.png" alt="Sudanbi Purple" /></div>
            <div className="book-wrap"><img src="/images/sudanbi_green.png" alt="Sudanbi Green" /></div>
            <div className="book-wrap"><img src="/images/anthology_L0.png" alt="Anthology L0" /></div>
        </div>
    </div>
    
</section>







<section style={{"padding":"120px 4%","background":"#F1F5F9","borderBottom":"1px solid #E2E8F0"}}>
    <div style={{"textAlign":"center"}}>
        <span style={{"fontSize":"0.85rem","fontWeight":"800","color":"#3B82F6","letterSpacing":"2px","margin":"0 auto 12px","display":"block"}}>KNS INFRASTRUCTURE</span>
        <h2 style={{"fontSize":"3rem","fontWeight":"900","color":"#0F172A","letterSpacing":"-1.5px"}}>가장 완벽한 학원 운영 생태계</h2>
    </div>

    <div className="bento-container reveal">
        
        <!-- Bento 1: Publishing (Wide) -->
        <div className="bento-card bento-wide">
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","marginBottom":"24px"}}>
                <div className="b-icon b-purple">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                <!-- Abstract Deco -->
                <div style={{"width":"120px","height":"60px","background":"linear-gradient(90deg, #F3F4F6, #E5E7EB)","borderRadius":"16px","opacity":"0.5"}}></div>
            </div>
            <h3 style={{"fontSize":"1.8rem","fontWeight":"800","color":"#0F172A","marginBottom":"12px","letterSpacing":"-0.5px"}}>교재 출판 & 퍼블리싱 센터</h3>
            <p style={{"color":"#64748B","fontSize":"1.05rem","lineHeight":"1.6","maxWidth":"80%"}}>초정밀 콘텐츠 기획 및 조판. 매년 수능과 최상위 내신의 최신 기출 트렌드를 즉시 교재 라인업에 반영하는 거대한 지식 공장입니다.</p>
        </div>

        <!-- Bento 2: R&D (Tall) -->
        <div className="bento-card bento-tall bento-dark">
            <div className="b-icon" style={{"background":"rgba(255,255,255,0.1)","color":"#60A5FA"}}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3 style={{"fontSize":"1.8rem","fontWeight":"800","marginBottom":"12px","letterSpacing":"-0.5px"}}>디지털 R&D 허브</h3>
            <p style={{"color":"#94A3B8","fontSize":"1.05rem","lineHeight":"1.6","marginBottom":"40px"}}>누적된 오답률 데이터를 분석해 치명적 오개념을 선제적으로 방어합니다.</p>
            
            <!-- Graphic Element inside card -->
            <div style={{"marginTop":"auto","padding":"20px","background":"rgba(0,0,0,0.2)","borderRadius":"20px","border":"1px solid rgba(255,255,255,0.05)"}}>
                <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"12px"}}>
                    <span style={{"fontSize":"0.85rem","color":"#60A5FA","fontWeight":"700"}}>Data Processed</span>
                    <span style={{"fontSize":"0.85rem","color":"#FFFFFF","fontWeight":"700"}}>92%</span>
                </div>
                <div style={{"width":"100%","height":"8px","background":"rgba(255,255,255,0.1)","borderRadius":"4px","overflow":"hidden"}}>
                    <div style={{"width":"92%","height":"100%","background":"#60A5FA","borderRadius":"4px"}}></div>
                </div>
            </div>
        </div>

        <!-- Bento 3: Timeline (Wide) -->
        <div className="bento-card bento-wide">
            <h3 style={{"fontSize":"1.4rem","fontWeight":"800","color":"#0F172A","marginBottom":"8px","letterSpacing":"-0.5px"}}>대치동 최상위 선도 20년</h3>
            <p style={{"color":"#64748B","fontSize":"1rem","marginBottom":"30px"}}>수백만 시간의 현장 노하우가 집약된 KNS의 발자취</p>
            
            <div className="modern-timeline">
                <div className="mt-bar"></div>
                <div className="mt-progress"></div>
                
                <div className="mt-node active">
                    <div className="mt-dot"></div>
                    <div>
                        <div className="mt-year">2005</div>
                        <div className="mt-desc">KNS어학원 설립</div>
                    </div>
                </div>
                <div className="mt-node active">
                    <div className="mt-dot"></div>
                    <div>
                        <div className="mt-year">2013</div>
                        <div className="mt-desc">고입전략연구소 개설</div>
                    </div>
                </div>
                <div className="mt-node active">
                    <div className="mt-dot"></div>
                    <div>
                        <div className="mt-year">2021</div>
                        <div className="mt-desc">라인업 다각화</div>
                    </div>
                </div>
                <div className="mt-node">
                    <div className="mt-dot"></div>
                    <div>
                        <div className="mt-year">2026</div>
                        <div className="mt-desc">초연결 AI 플랫폼</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>



<section style={{"padding":"100px 4% 140px","background":"#E2E8F0"}}>
    <div className="container reveal">
        <div style={{"textAlign":"center","marginBottom":"60px"}}>
            <span style={{"fontSize":"0.85rem","fontWeight":"800","color":"#64748B","letterSpacing":"2px","margin":"0 auto 12px","display":"block"}}>NEURAL CURRICULUM</span>
            <h2 style={{"fontSize":"2.8rem","fontWeight":"900","color":"#0F172A","letterSpacing":"-1.5px"}}>데이터가 직조하는 초정밀 라인업</h2>
            <p style={{"color":"#475569","fontSize":"1.15rem","marginTop":"16px","fontWeight":"500"}}>마우스를 올려 영역별 세부 훈련 목표를 확인하세요.</p>
        </div>

        <div className="neural-board">
            <!-- Axis -->
            <div style={{"display":"flex","paddingLeft":"140px","marginBottom":"20px","fontWeight":"800","color":"#60A5FA","fontSize":"0.9rem","textTransform":"uppercase","letterSpacing":"1px","position":"relative","zIndex":"10"}}>
                <div style={{"flex":"2","textAlign":"center"}}>Beginner (초등)</div>
                <div style={{"flex":"2","textAlign":"center"}}>Intermediate (중등)</div>
                <div style={{"flex":"3","textAlign":"center"}}>Advanced (특목/대입)</div>
            </div>

            <!-- Tracks -->
            <!-- Reading -->
            <div className="nt-track" style={{"-TrackColor":"#60A5FA"}}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#60A5FA"}}></div><span style={{"color":"#60A5FA"}}>독해 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-pill nt-span-7" style={{"display":"grid","gridTemplateColumns":"repeat(7,1fr)","gap":"4px","padding":"0","background":"transparent","border":"none"}}>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.1)","color":"#60A5FA"}}>Lv.0</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.15)","color":"#60A5FA"}}>Lv.1</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.2)","color":"#93C5FD"}}>Lv.2</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.25)","color":"#93C5FD"}}>Lv.3</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.3)","color":"#BFDBFE"}}>Lv.4</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.4)","color":"#DBEAFE"}}>Lv.5</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.5)","color":"#FFFFFF","boxShadow":"0 0 15px rgba(96,165,250,0.3)"}}>Lv.6</div>
                    </div>
                </div>
            </div>

            <!-- Grammar -->
            <div className="nt-track" style={{"-TrackColor":"#A855F7"}}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#A855F7"}}></div><span style={{"color":"#A855F7"}}>문법 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-pill nt-span-2">기본문법</div>
                    <div className="nt-pill nt-span-1">중등내신</div>
                    <div className="nt-pill nt-span-2">고등내신</div>
                    <div className="nt-pill nt-span-2">TEPS 문법</div>
                </div>
            </div>

            <!-- Logic -->
            <div className="nt-track" style={{"-TrackColor":"#F43F5E"}}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#F43F5E"}}></div><span style={{"color":"#F43F5E"}}>논리 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-span-3"></div>
                    <div className="nt-pill nt-span-4" style={{"background":"rgba(244,63,94,0.15)","borderColor":"rgba(244,63,94,0.3)","color":"#FDA4AF"}}>수능 고난도 빈칸 추론 & GRE 기반 논리 분석</div>
                </div>
            </div>

            <!-- Syntax -->
            <div className="nt-track" style={{"-TrackColor":"#10B981"}}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#10B981"}}></div><span style={{"color":"#10B981"}}>구문 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-span-1"></div>
                    <div className="nt-pill nt-span-5" style={{"background":"rgba(16,185,129,0.15)","borderColor":"rgba(16,185,129,0.3)","color":"#6EE7B7"}}>복잡 구조 집중 구조화 훈련</div>
                    <div className="nt-span-1"></div>
                </div>
            </div>

            <!-- Vocab -->
            <div className="nt-track" style={{"-TrackColor":"#F59E0B"}}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#F59E0B"}}></div><span style={{"color":"#F59E0B"}}>어휘 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-span-2"></div>
                    <div className="nt-pill nt-span-1">기본</div>
                    <div className="nt-pill nt-span-1">필수</div>
                    <div className="nt-pill nt-span-1">핵심</div>
                    <div className="nt-pill nt-span-1">실력</div>
                    <div className="nt-pill nt-span-1">특목고</div>
                </div>
            </div>

        </div>
    </div>
</section>
<section className="santa-about-section reveal" id="about">
    <div className="santa-orb-1"></div>
    <div className="santa-orb-2"></div>
    <div style={{"maxWidth":"1200px","margin":"0 auto","position":"relative","zIndex":"10","textAlign":"center"}}>
        <div className="santa-title-badge">AI Data-Driven Education</div>
        <h2 className="santa-main-title">
            <span style={{"color":"#0F172A"}}>대치동 20년 현장 노하우,</span><br/>
            <span className="santa-gradient-text">이제 압도적 에듀테크 솔루션으로.</span>
        </h2>
        <p style={{"fontSize":"1.15rem","color":"#475569","maxWidth":"700px","margin":"0 auto","lineHeight":"1.7","wordBreak":"keep-all","fontWeight":"500"}}>
            빠르게 변화하는 입시 제도. 감에 의존하는 티칭을 넘어, 수백만 건의 최상위권 오답 데이터가 증명하는 예측 불허의 정밀한 로드맵을 경험하세요.
        </p>

        <div className="santa-grid">
            <div className="santa-card">
                <div className="santa-number-bg">01</div>
                <div className="santa-icon-wrapper">
                    <span className="santa-icon">20</span>
                </div>
                <h3>대치동 현장 20년</h3>
                <p>강남, 서초, 송파 등 최상위권 교육의 1번지 트렌드를 실시간으로 반영하여 설계된 독보적인 오프라인 운영체제를 시스템화했습니다.</p>
            </div>
            <div className="santa-card">
                <div className="santa-number-bg">02</div>
                <div className="santa-icon-wrapper">
                    <span className="santa-icon">DB</span>
                </div>
                <h3>최상위권 데이터 확보</h3>
                <p>알고리즘 기반 정밀 진단! 자사고 및 특목고 최상위 학생들의 문항별 오답률과 점수 분포를 바탕으로 취약점을 즉각 타겟팅합니다.</p>
            </div>
            <div className="santa-card">
                <div className="santa-number-bg">03</div>
                <div className="santa-icon-wrapper">
                    <span className="santa-icon">∞</span>
                </div>
                <h3>초·중·고 완벽 연계성</h3>
                <p>상위 호환 커리큘럼을 역으로 디코딩하여, 초중등 단계에서 반드시 도달해야 할 필수 뼈대를 과학적인 빈도로 반복 학습시킵니다.</p>
            </div>
        </div>
    </div>
</section>


<section style={{"padding":"140px 4%","background":"#040B16","borderTop":"1px solid rgba(255,255,255,0.05)","position":"relative","overflow":"hidden"}}>
    <!-- Deep Grid Background for Platform Area -->
    <div style={{"position":"absolute","inset":"0","backgroundImage":"linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)","backgroundSize":"50px 50px","zIndex":"0","pointerEvents":"none"}}></div>
    
    <div style={{"textAlign":"center","marginBottom":"80px","position":"relative","zIndex":"10"}} className="reveal">
        <span style={{"fontSize":"0.85rem","fontWeight":"800","color":"#60A5FA","letterSpacing":"2px","marginBottom":"12px","display":"inline-block","padding":"6px 16px","borderRadius":"100px","background":"rgba(96,165,250,0.1)"}}>ENTER THE HUB</span>
        <h2 style={{"fontSize":"3rem","fontWeight":"900","color":"#FFFFFF","letterSpacing":"-1px"}}>성공적인 학원 운영을 위한<br/>단 하나의 통합 생태계</h2>
    </div>

    <div className="holo-grid reveal">
        <!-- Anthology -->
        <a className="holo-card" href="/anthology" style={{"-HcColor":"rgba(59,130,246,0.8)","-HcGlow":"rgba(59,130,246,0.2)"}}>
            <div className="hc-content">
                <div className="hc-visual"><img src="/images/anthology_L6.png" alt="Anthology" /></div>
                <div>
                    <h3 className="hc-title">Anthology <span style={{"fontSize":"1rem","color":"#60A5FA","fontWeight":"600","verticalAlign":"middle","border":"1px solid #60A5FA","padding":"2px 8px","borderRadius":"6px","marginLeft":"8px"}}>독해</span></h3>
                    <p className="hc-desc">원서부터 수능 기출까지, 가장 완벽한 논리 전개 훈련. 학년이 아닌 철저한 평가 레벨 중심의 7단계 도약 프로그램입니다.</p>
                    <div className="hc-arrow">커리큘럼 보기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>

        <!-- Sudanbi -->
        <a className="holo-card" href="/sudanbi" style={{"-HcColor":"rgba(16,185,129,0.8)","-HcGlow":"rgba(16,185,129,0.2)"}}>
            <div className="hc-content">
                <div className="hc-visual"><img src="/images/sudanbi_green.png" alt="Sudanbi" /></div>
                <div>
                    <h3 className="hc-title">Sudanbi <span style={{"fontSize":"1rem","color":"#34D399","fontWeight":"600","verticalAlign":"middle","border":"1px solid #34D399","padding":"2px 8px","borderRadius":"6px","marginLeft":"8px"}}>어휘</span></h3>
                    <p className="hc-desc">문맥 추론과 어원 학습의 극의. 내신 1등급과 수능 만점을 위한 압도적 강도의 프리미엄 어휘 마스터 클래스입니다.</p>
                    <div className="hc-arrow">어휘 로드맵 보기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>

        <!-- KATCH -->
        <a className="holo-card" href="/katch" style={{"-HcColor":"rgba(168,85,247,0.8)","-HcGlow":"rgba(168,85,247,0.2)"}}>
            <div className="hc-content">
                <div className="hc-visual">
                    <div style={{"width":"120px","height":"120px","background":"linear-gradient(135deg, #60A5FA, #A855F7)","borderRadius":"24px","border":"2px solid rgba(255,255,255,0.2)","color":"white","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"4rem","fontWeight":"900","boxShadow":"0 20px 40px rgba(0,0,0,0.5)"}}>K</div>
                </div>
                <div>
                    <h3 className="hc-title">KATCH Platform <span style={{"fontSize":"1rem","color":"#A855F7","fontWeight":"600","verticalAlign":"middle","border":"1px solid #A855F7","padding":"2px 8px","borderRadius":"6px","marginLeft":"8px"}}>SaaS</span></h3>
                    <p className="hc-desc">원장 전용 차세대 B2B 솔루션. 레벨테스트, 실시간 수강생 오답률 취합, 문제은행 생성 및 AI 경영 리포트를 제공합니다.</p>
                    <div className="hc-arrow">플랫폼 접속하기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>
    </div>
</section>
</div><!--$--><!--/$-->
    </main>

    <footer id="contact" style={{"background":"#F8FAFC","color":"#94a3b8","padding":"100px 4% 60px","borderTop":"1px solid rgba(255,255,255,0.05)","position":"relative","overflow":"hidden","marginTop":"80px"}}>
        <div style={{"position":"absolute","bottom":"-200px","right":"-200px","width":"600px","height":"600px","background":"radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)","borderRadius":"50%","pointerEvents":"none"}}></div>
        <div className="container" style={{"maxWidth":"1400px","margin":"0 auto","position":"relative","zIndex":"10"}}>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"60px","marginBottom":"80px"}}>
                <div>
                    <h2 style={{"color":"#fff","fontSize":"1.8rem","fontWeight":"900","marginBottom":"20px","letterSpacing":"-0.5px","fontFamily":"'Inter', sans-serif"}}>
                        KNS BOOKS<span style={{"color":"#3B82F6"}}>.</span>
                    </h2>
                    <p style={{"lineHeight":"1.8","marginBottom":"30px","wordBreak":"keep-all","color":"#64748B"}}>
                        대한민국 1% 최상위권 교육의 기준. 대치동 20년의 압도적 노하우를 집대성한 B2B 프리미엄 평가 및 리소스 플랫폼입니다.
                    </p>
                </div>
                <div>
                    <h4 style={{"color":"#fff","fontSize":"1.1rem","fontWeight":"700","marginBottom":"25px"}}>Brand Portfolio</h4>
                    <ul style={{"listStyle":"none","padding":"0"}}>
                        <li style={{"marginBottom":"16px"}}><Link href={"/anthology"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"}}>수능 앤솔로지 (7단계 독해)</Link></li>
                        <li style={{"marginBottom":"16px"}}><Link href={"/sudanbi"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"}}>수단비 (프리미엄 어휘)</Link></li>
                        <li style={{"marginBottom":"16px"}}><Link href={"/katch"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"}}>KATCH (통합 평가 시스템)</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{"color":"#fff","fontSize":"1.1rem","fontWeight":"700","marginBottom":"25px"}}>Partnership</h4>
                    <ul style={{"listStyle":"none","padding":"0"}}>
                        <li style={{"marginBottom":"16px","color":"#64748B"}}>제휴 문의 <br/><span style={{"color":"#e2e8f0","fontWeight":"600"}}>02-555-5555</span></li>
                        <li style={{"marginBottom":"16px","color":"#64748B"}}>이메일 상담 <br/><span style={{"color":"#3B82F6"}}>b2b@knsbooks.co.kr</span></li>
                        <li style={{"color":"#64748B"}}>본사 주소 <br/>서울특별시 강남구 대치동</li>
                    </ul>
                </div>
            </div>
            <div style={{"paddingTop":"40px","borderTop":"1px solid rgba(255,255,255,0.05)","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"20px","fontSize":"0.9rem","color":"#64748B"}}>
                <div><p>&copy; 2026 KNS BOOKS. All Rights Reserved.</p></div>
                <div style={{"display":"flex","gap":"30px"}}><span style={{"cursor":"pointer"}}>이용약관</span><span style={{"cursor":"pointer"}}>개인정보처리방침</span></div>
            </div>
        </div>
    </footer>

    

    </main>
  );
}
