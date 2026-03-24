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

      {/* About KNS - Elegant Redesign */}
      <section id="about" className="about section-padding" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container reveal">
          <div className="section-header text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '2.8rem', color: '#333' }}>
              About <span style={{ color: '#FA8072' }}>KNS</span>
            </h2>
            <p className="section-subtitle" style={{ color: '#888', fontStyle: 'italic', fontSize: '1.1rem', marginTop: '1rem' }}>
              "입시의 중심, 수능 영어의 새로운 기준을 제시합니다."
            </p>
            <p className="about__intro" style={{ color: '#555', lineHeight: 1.8, maxWidth: '700px', margin: '2rem auto 0', fontSize: '1.05rem' }}>
              KNS EDU는 대한민국 입시의 최전선 대치동에서 시작하여 오로지 영어교육에만 힘써 왔습니다.<br/>
              빠르게 변화하는 입시 제도 안에서 최상위권 학생과 학부모님의 니즈를 가장 먼저 파악합니다.
            </p>
          </div>
          
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="feature-card reveal" style={{ transitionDelay: '0.1s', backgroundColor: '#FDFBF7', border: 'none', borderRadius: '20px', padding: '3rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'center' }}>
              <div style={{ color: '#FA8072', fontSize: '2rem', marginBottom: '1rem', fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}>01</div>
              <h3 style={{ color: '#333', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>대치동 20년 성공 DNA</h3>
              <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>강남, 서초, 송파 학생들의 집결지!<br/>KNS의 지난 20년간 누적된 성공 데이터로 학원가의 다음 20년을 새롭게 정의합니다.</p>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.2s', backgroundColor: '#FDFBF7', border: 'none', borderRadius: '20px', padding: '3rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'center' }}>
              <div style={{ color: '#FA8072', fontSize: '2rem', marginBottom: '1rem', fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}>02</div>
              <h3 style={{ color: '#333', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>최상위권 R&D 연구소</h3>
              <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>외고, 자사고 및 일반고 최상위권 학생들의 데이터를 분석하여 새로운 교육 프로그램과 프리미엄 교재를 지속 개발합니다.</p>
            </div>
            <div className="feature-card reveal" style={{ transitionDelay: '0.3s', backgroundColor: '#FDFBF7', border: 'none', borderRadius: '20px', padding: '3rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'center' }}>
              <div style={{ color: '#FA8072', fontSize: '2rem', marginBottom: '1rem', fontFamily: '"Times New Roman", Times, serif', fontStyle: 'italic' }}>03</div>
              <h3 style={{ color: '#333', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem' }}>압도적 콘텐츠 파워</h3>
              <p style={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem' }}>역대 수능 빈출순으로 구성된 수단비부터 고난이도 앤솔로지까지, KNS만의 독보적 지적 자산을 파트너와 공유합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Quick Links - Soft Pastel Aesthetic */}
      <section className="section-padding text-center" style={{ backgroundColor: '#F8F6F0' }}>
        <div className="container pb-5">
          <h2 style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '2.5rem', color: '#333', marginBottom: '3rem' }}>Core Solutions</h2>
          <style dangerouslySetInnerHTML={{ __html: `
            .home-core-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
            .home-core-links a { text-decoration: none; padding: 4rem 2rem; border-radius: 24px; display: block; transition: all 0.4s ease; border: 1px solid rgba(0,0,0,0.05); }
            .home-core-links a:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
          `}} />
          <div className="home-core-links reveal">
            <Link href="/anthology" style={{ backgroundColor: '#FFF4F0' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#D9534F', fontWeight: 800 }}>수능 앤솔로지</h3>
              <p style={{ color: '#A0524F', fontWeight: 500 }}>프리미엄 독해 지침서</p>
            </Link>
            <Link href="/sudanbi" style={{ backgroundColor: '#F0F9F4' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#2E8B57', fontWeight: 800 }}>수단비</h3>
              <p style={{ color: '#4E7A60', fontWeight: 500 }}>데이터 기반 1등급 어휘집</p>
            </Link>
            <Link href="/katch" style={{ backgroundColor: '#F0F4F8' }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', color: '#4682B4', fontWeight: 800 }}>KATCH</h3>
              <p style={{ color: '#5A758D', fontWeight: 500 }}>최상위 솔루션 플랫폼</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
