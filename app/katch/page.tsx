"use client";
import React, { useEffect } from 'react';

export default function KatchPage() {
  useEffect(() => {
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
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div style={{ background: '#FFFFFF', color: '#0F172A', minHeight: '100vh', fontFamily: 'Pretendard, Inter, sans-serif' }}>
      {/* Dynamic Global Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .feature-img-wrap { overflow: hidden; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); border: 1px solid #E2E8F0; background: #F8FAFC; padding: 20px; }
        .feature-img-wrap img { width: 100%; height: auto; display: block; object-fit: contain; border-radius: 8px; border: 1px solid #E2E8F0; }
        .katch-btn { display: inline-block; padding: 16px 40px; border-radius: 8px; font-weight: 700; font-size: 1.05rem; text-decoration: none; transition: all 0.2s; background: #2563EB; color: white; border: 1px solid #1D4ED8; }
        .katch-btn:hover { background: #1D4ED8; transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(37,99,235,0.2); }
      `}} />

      {/* Hero Header */}
      <section style={{ padding: '160px 4% 120px', textAlign: 'center', background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', position: 'relative' }}>
        <div className="container reveal" style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', background: '#DBEAFE', color: '#1D4ED8', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '24px', border: '1px solid #BFDBFE', letterSpacing: '1px' }}>
            KNS BOOKS B2B Platform
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1.5px', lineHeight: 1.2, color: '#0F172A' }}>
            압도적인 상위 1% 기술,<br/>
            <span style={{ color: '#2563EB' }}>KATCH 통합 솔루션</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '750px', margin: '0 auto 50px', lineHeight: 1.6, wordBreak: 'keep-all' }}>
            KNS BOOKS가 자랑하는 6대 프리미엄 통합 평가 및 원생 관리 리소스 시스템입니다.<br/>
            초격차를 만드는 체계적인 학원 운영 시스템을 귀원에 완벽하게 이식해 드립니다.
          </p>
          <a href="#features" className="katch-btn">솔루션 기능 살펴보기 ↓</a>
        </div>
      </section>

      {/* 6 Features Layout */}
      <section id="features" style={{ padding: '120px 4%', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Feature 1 */}
          <div id="diagnostic" className="reveal" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px', marginBottom: '140px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#2563EB', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', padding: '6px 14px', background: '#DBEAFE', borderRadius: '6px', marginBottom: '20px', letterSpacing: '1px' }}>CORE 01</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-1px', color: '#0F172A' }}>KATCH 기초 진단테스트</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#3B82F6', marginBottom: '1.5rem' }}>수강 전 강력한 약점 분석</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all' }}>대치동 최상위권 데이터베이스 10만 건을 바탕으로 학생의 취약점과 강점을 진단하는 최고수준의 평가 시스템입니다. 단순한 어휘 정답률에 그치지 않고, <strong style={{color:'#0F172A'}}>어휘/구문 이해/추론 능력</strong>을 세밀하게 분석합니다.</p>
            </div>
            <div style={{ flex: '1.2 1 500px' }} className="feature-img-wrap">
              <img src="/images/katch_diag.png" alt="KATCH 기초 진단테스트" />
            </div>
          </div>

          {/* Feature 2 */}
          <div id="level" className="reveal" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '80px', marginBottom: '140px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#7E22CE', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', padding: '6px 14px', background: '#F3E8FF', borderRadius: '6px', marginBottom: '20px', letterSpacing: '1px' }}>CORE 02</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-1px', color: '#0F172A' }}>KATCH 입학 레벨테스트</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#9333EA', marginBottom: '1.5rem' }}>차원이 다른 반편성 기준</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all' }}>정규반 입학 커트라인을 판별하는 고도화된 레벨테스트입니다. OMR 스캔 기반의 빠르고 정확한 채점 시스템과 누적 백분위를 통해 학생을 가장 적합한 학습 반에 한 치의 오차 없이 배정합니다.</p>
            </div>
            <div style={{ flex: '1.2 1 500px' }} className="feature-img-wrap">
              <img src="/images/katch_level.png" alt="KATCH 입학 레벨테스트" />
            </div>
          </div>

          {/* Feature 3 */}
          <div id="bank" className="reveal" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px', marginBottom: '140px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#047857', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', padding: '6px 14px', background: '#D1FAE5', borderRadius: '6px', marginBottom: '20px', letterSpacing: '1px' }}>CORE 03</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-1px', color: '#0F172A' }}>기출 & 내신 문제은행</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#059669', marginBottom: '1.5rem' }}>클릭 몇 번으로 완성하는 시험지</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all' }}>수십만 문항의 기출 및 변형 문제 빅데이터 DB를 탑재했습니다. 강사가 원하는 교재별, 수능 유형별, 난이도별 상세 필터를 통해 완벽한 시험지를 조립하고 고품질 PDF로 즉시 출력합니다.</p>
            </div>
            <div style={{ flex: '1.2 1 500px' }} className="feature-img-wrap">
              <img src="/images/katch_bank.png" alt="기출 & 내신 문제은행" />
            </div>
          </div>

          {/* Feature 4 */}
          <div id="vod" className="reveal" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '80px', marginBottom: '140px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#BE185D', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', padding: '6px 14px', background: '#FCE7F3', borderRadius: '6px', marginBottom: '20px', letterSpacing: '1px' }}>CORE 04</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-1px', color: '#0F172A' }}>프리미엄 VOD 인강</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#DB2777', marginBottom: '1.5rem' }}>공간의 제약이 없는 맞춤 직강</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all' }}>수능 앤솔로지 및 수단비 교재에 대한 4K 해설 강의를 비대면으로 제공합니다. 오답 지문만 골라서 효율적으로 학습할 수 있는 지능형 VOD 인덱스 플레이어를 지원합니다.</p>
            </div>
            <div style={{ flex: '1.2 1 500px' }} className="feature-img-wrap">
              <img src="/images/katch_vod.png" alt="수능 프리미엄 VOD 인강" />
            </div>
          </div>

          {/* Feature 5 */}
          <div id="store" className="reveal" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px', marginBottom: '140px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#B45309', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', padding: '6px 14px', background: '#FEF3C7', borderRadius: '6px', marginBottom: '20px', letterSpacing: '1px' }}>CORE 05</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-1px', color: '#0F172A' }}>파트너스 전용 교재 스토어</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#D97706', marginBottom: '1.5rem' }}>간편 발주 및 실시간 배송 관리</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all' }}>KNS BOOKS 제휴 학원만을 위한 B2B 폐쇄몰입니다. 원생 수에 맞춰 간편하게 대량 주문하고, 파트너 특판 포인트 혜택을 실시간 적용받을 수 있습니다.</p>
            </div>
            <div style={{ flex: '1.2 1 500px' }} className="feature-img-wrap">
              <img src="/images/katch_store.png" alt="제휴 파트너스 전용 교재 스토어" />
            </div>
          </div>

          {/* Feature 6 */}
          <div id="lounge" className="reveal" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#0F766E', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', padding: '6px 14px', background: '#CCFBF1', borderRadius: '6px', marginBottom: '20px', letterSpacing: '1px' }}>CORE 06</span>
              <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3, letterSpacing: '-1px', color: '#0F172A' }}>원장 전용 대시보드 (Lounge)</h2>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0D9488', marginBottom: '1.5rem' }}>학원 운영 지표를 꿰뚫는 데이터</h3>
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, wordBreak: 'keep-all' }}>입퇴원 원생 지표, 레벨 테스트 평균, 강사별 VOD 수강률 등 학원 경영의 주요 지표를 시각화된 차트로 실시간 구독하는 최고급 데이터 애널리틱스 센터입니다.</p>
            </div>
            <div style={{ flex: '1.2 1 500px' }} className="feature-img-wrap">
              <img src="/images/katch_lounge.png" alt="원장 전용 VIP 라운지" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer Wrapper */}
      <section style={{ padding: '120px 4%', textAlign: 'center', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '24px', letterSpacing: '-1.5px', color: '#0F172A' }}>
            기술이 만드는 진정한 격차
          </h2>
          <p style={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '40px' }}>
            단순한 교육 콘텐츠 그 너머를 제공합니다.<br/>
            지금 KNS BOOKS B2B 시스템을 도입하시고 운영 효율을 극대화하세요.
          </p>
          <a href="#contact" className="katch-btn">B2B 솔루션 도입 문의</a>
        </div>
      </section>
    </div>
  );
}
