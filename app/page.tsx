"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  useEffect(() => {
    // Reveal animation logic to mimic the original HTML functionality
    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <>
      {/* PeachBeach Style Hero Section */}
      <section style={{ backgroundColor: '#F8F6F0', overflow: 'hidden' }}>
        {/* Horizontal Image Gallery */}
        <div style={{ display: 'flex', width: '100%', height: '400px', gap: '4px', overflow: 'hidden', padding: '0 4px', paddingTop: '4px' }}>
          <img src="/images/anthology_lv1.png" alt="Anthology 1" style={{ flex: 1, objectFit: 'cover', minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.flex = '1.6'} onMouseOut={(e) => e.currentTarget.style.flex = '1'} />
          <img src="/images/sudanbi_core.png" alt="Sudanbi Core" style={{ flex: 1, objectFit: 'cover', minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.flex = '1.6'} onMouseOut={(e) => e.currentTarget.style.flex = '1'} />
          <img src="/images/katch_diag.png" alt="Katch Diagnostic" style={{ flex: 1, objectFit: 'cover', minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.flex = '1.6'} onMouseOut={(e) => e.currentTarget.style.flex = '1'} />
          <img src="/images/anthology_lv6.png" alt="Anthology 6" style={{ flex: 1, objectFit: 'cover', minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.flex = '1.6'} onMouseOut={(e) => e.currentTarget.style.flex = '1'} />
          <img src="/images/katch_vod.png" alt="Katch VOD" style={{ flex: 1, objectFit: 'cover', minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.flex = '1.6'} onMouseOut={(e) => e.currentTarget.style.flex = '1'} />
          <img src="/images/sudanbi_advanced.png" alt="Sudanbi Advanced" style={{ flex: 1, objectFit: 'cover', minWidth: 0, transition: 'flex 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.flex = '1.6'} onMouseOut={(e) => e.currentTarget.style.flex = '1'} />
        </div>

        {/* Elegant Typography */}
        <div style={{ textAlign: 'center', marginTop: '5rem', padding: '0 2rem' }} className="reveal">
          <p style={{ fontSize: '0.95rem', color: '#64748b', letterSpacing: '0.05em', lineHeight: 1.6, marginBottom: '2rem' }}>
            대치동 1위 영어의 모든 것, 하나의 플랫폼에 담았습니다.<br/>
            수능 앤솔로지, 어휘 수단비, KATCH 플랫폼까지 압도적 성장을 경험하세요.
          </p>
          <h1 style={{ 
            fontSize: 'min(17vw, 160px)', 
            fontWeight: 400, 
            color: '#FA8072', 
            letterSpacing: '-0.05em', 
            fontFamily: '"Times New Roman", Times, serif',
            margin: 0,
            lineHeight: 0.9,
            paddingBottom: '3rem'
          }}>
            KNSEdu
          </h1>
        </div>
      </section>

      {/* About KNS */}
      <section id="about" className="about section-padding bg-light">
        <div className="container reveal">
          <div className="section-header text-center">
            <h2 className="section-title">About <span>KNS 20년</span></h2>
            <p className="section-subtitle">"입시의 중심, 수능 영어의 새로운 기준을 제시합니다."</p>
            <p className="about__intro">
              KNS EDU는 대한민국 입시의 최전선 대치동에서 시작하여 오로지 영어교육에만 힘써 왔습니다.<br/>
              빠르게 변화하는 입시 제도 안에서 최상위권 학생과 학부모님의 니즈를 파악하고 그 해결책을 제시합니다.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="feature-card__number">1</div>
              <h3 className="feature-card__title">성공으로 증명된 대치동 20년 DNA</h3>
              <p className="feature-card__desc">강남, 서초, 송파 학생들의 집결지, 대치!<br/>KNS의 이름으로 지난 20년간의 성공 데이터와 깊이 있는 통찰을 바탕으로 입시 교육의 다음 20년을 새롭게 정의합니다.</p>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="feature-card__number">2</div>
              <h3 className="feature-card__title">최상위권 전문 및 R&D 연구소</h3>
              <p className="feature-card__desc">외고, 자사고 및 일반고 최상위권 학생들을 기반으로 누적된 테이터를 분석하여 R&D 연구소에서 새로운 교육 프로그램과 교재를 지속 개발합니다.</p>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.3s' }}>
              <div className="feature-card__number">3</div>
              <h3 className="feature-card__title">초·중·고 연계 프리미엄 수단비</h3>
              <p className="feature-card__desc">모든 단어에 데이터라는 객관적 이력을 부여하여 역대 평가원/수능 총 출제 횟수와 빈출순으로 학습을 구성한 압도적 1위 수단비 시리즈를 자체 개발하였습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Quick Links */}
      <section className="section-padding bg-light text-center">
        <div className="container pb-5">
          <style dangerouslySetInnerHTML={{ __html: `
            .home-core-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
            .home-core-links a { text-decoration: none; padding: 4rem 2rem; border-radius: 16px; color: white; display: block; transition: transform 0.3s; }
            .home-core-links a:hover { transform: translateY(-10px); }
          `}} />
          <div className="home-core-links">
            <Link href="/anthology" style={{ background: '#1e3a8a' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>수능 앤솔로지</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>프리미엄 독해 지침서</p>
            </Link>
            <Link href="/sudanbi" style={{ background: '#006b3f' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>수단비</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>데이터 기반 1등급 어휘집</p>
            </Link>
            <Link href="/katch" style={{ background: '#0f172a', border: '1px solid #334155' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#38bdf8' }}>KATCH</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>문제은행 및 진단 LMS</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
