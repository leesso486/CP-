"use client";
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container hero__container">
          <div className="hero__content" style={{ animation: 'fadeInUp 1s ease-out forwards' }}>
            <span className="badge mb-3" style={{ background: '#e2e8f0', color: '#334155' }}>대한민국 입시의 중심</span>
            <h1 className="hero__title" style={{ color: '#0f172a' }}>
              수능 절대평가 1등급의<br />새로운 기준 <span style={{ color: '#1F6A56' }}>KNS EDU</span>
            </h1>
            <p className="hero__subtitle" style={{ color: '#475569' }}>
              대치동 최상위권의 압도적 데이터를 기반으로 완성된<br />
              프리미엄 B2B 교육 솔루션을 귀원의 원생들에게 제공하세요.
            </p>
            <div className="hero__cta">
              <Link href="/anthology" className="btn btn--primary btn--large">솔루션 투어 시작하기</Link>
              <a href="#contact" className="btn btn--outline btn--large">도입 문의</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Calm and Clean */}
      <section className="about section-padding bg-white">
        <div className="container text-center">
          <h2 className="section-title" style={{ color: '#0f172a' }}>About <span style={{ color: '#1F6A56' }}>KNS 20년</span></h2>
          <p className="section-subtitle" style={{ color: '#64748b' }}>"입시의 중심, 수능 영어의 새로운 기준을 제시합니다."</p>
          <p className="about__intro" style={{ color: '#334155', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: '1.8' }}>
            KNS EDU는 대한민국 입시의 최전선 대치동에서 시작하여 오로지 영어교육에만 힘써 왔습니다.<br />
            빠르게 변화하는 입시 제도 안에서 최상위권 학생과 학부모님의 니즈를 파악하고 그 해결책을 제시합니다.
          </p>
          
          <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="feature-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '3rem 2rem', borderRadius: '12px' }}>
              <div className="feature-card__number" style={{ color: '#1F6A56', opacity: 0.2, fontSize: '4rem', fontWeight: 900 }}>1</div>
              <h3 className="feature-card__title" style={{ color: '#0f172a', marginTop: '-2rem' }}>성공으로 증명된 데이터</h3>
              <p className="feature-card__desc" style={{ color: '#475569' }}>대치동 20년간의 성공 데이터와 깊이 있는 통찰을 바탕으로 입시 교육의 다음 20년을 새롭게 정의합니다.</p>
            </div>
            <div className="feature-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '3rem 2rem', borderRadius: '12px' }}>
              <div className="feature-card__number" style={{ color: '#1F6A56', opacity: 0.2, fontSize: '4rem', fontWeight: 900 }}>2</div>
              <h3 className="feature-card__title" style={{ color: '#0f172a', marginTop: '-2rem' }}>최상위권 R&D 연구소</h3>
              <p className="feature-card__desc" style={{ color: '#475569' }}>외고, 자사고 및 일반고 최상위권 학생들을 기반으로 누적된 데이터를 분석하여 새로운 교재를 지속 개발합니다.</p>
            </div>
            <div className="feature-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: '3rem 2rem', borderRadius: '12px' }}>
              <div className="feature-card__number" style={{ color: '#1F6A56', opacity: 0.2, fontSize: '4rem', fontWeight: 900 }}>3</div>
              <h3 className="feature-card__title" style={{ color: '#0f172a', marginTop: '-2rem' }}>프리미엄 콘텐츠</h3>
              <p className="feature-card__desc" style={{ color: '#475569' }}>모든 지문과 단어에 데이터라는 객관적 이력을 부여하여 역대 최강의 적중률을 가진 콘텐츠를 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Quick Links */}
      <section className="section-padding" style={{ background: '#f1f5f9' }}>
        <div className="container text-center">
          <h2 className="section-title mb-5" style={{ color: '#0f172a' }}>Explore Our <span>Core Solutions</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <Link href="/anthology" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#1e3a8a', padding: '4rem 2rem', borderRadius: '16px', color: 'white', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>수능 앤솔로지</h3>
                <p style={{ color: '#bfdbfe' }}>프리미엄 독해 지침서</p>
              </div>
            </Link>
            <Link href="/sudanbi" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#006b3f', padding: '4rem 2rem', borderRadius: '16px', color: 'white', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>수단비</h3>
                <p style={{ color: '#bbf7d0' }}>데이터 기반 1등급 어휘집</p>
              </div>
            </Link>
            <Link href="/katch" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#0f172a', padding: '4rem 2rem', borderRadius: '16px', color: 'white', transition: 'transform 0.3s', border: '1px solid #334155' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: '#38bdf8' }}>KATCH 플랫폼</h3>
                <p style={{ color: '#94a3b8' }}>문제은행 및 진단 LMS</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
