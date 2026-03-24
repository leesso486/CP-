"use client";
import React, { useEffect } from 'react';

export default function KatchPage() {
  useEffect(() => {
    // Reveal animation logic
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

  const features = [
    {
      id: "diagnostic",
      title: "KATCH 기초 진단테스트",
      subtitle: "수강 전 가장 완벽한 약점 분석",
      desc: "대치동 최상위권 데이터베이스 10만 건을 바탕으로 학생의 취약점과 강점을 분석하는 최고급 딥러닝 진단 시스템입니다. 단순히 점수만 내는 것이 아니라 어휘력, 구문 독해력, 추론 능력을 다각도로 평가합니다.",
      img: "/images/katch_diag.png",
      color: "#38bdf8",
      reverse: false
    },
    {
      id: "level",
      title: "KATCH 입학 레벨테스트",
      subtitle: "전국 1%를 향한 첫 걸음",
      desc: "KNS EDU 정규반 입학을 위한 고도화된 레벨테스트입니다. OMR 기반의 빠르고 정확한 채점 시스템과 누적 백분위 데이터를 통해 학생들을 가장 적합한 학습 반에 배정합니다.",
      img: "/images/katch_level.png",
      color: "#818cf8",
      reverse: true
    },
    {
      id: "bank",
      title: "기출 & 내신 문제은행",
      subtitle: "버튼 한 번으로 완성되는 나만의 시험지",
      desc: "수만 문항의 기출 및 변형 문제 DB를 탑재했습니다. 교재별, 유형별, 난이도별 상세 필터링을 통해 원장님과 강사가 원하는 문제지를 즉석에서 조립하고 PDF로 다운로드할 수 있습니다.",
      img: "/images/katch_bank.png",
      color: "#34d399",
      reverse: false
    },
    {
      id: "vod",
      title: "수능 프리미엄 VOD 인강",
      subtitle: "시공간을 초월하는 대치동 직강",
      desc: "수능 앤솔로지 전 레벨과 수단비 교재에 대한 최고급 퀄리티의 해설 강의를 제공합니다. 학생들이 모르는 지문만 골라서 효율적으로 학습할 수 있는 맞춤형 VOD 플레이어 시스템입니다.",
      img: "/images/katch_vod.png",
      color: "#a78bfa",
      reverse: true
    },
    {
      id: "store",
      title: "제휴 파트너 전용 교재 스토어",
      subtitle: "원클릭 교재 주분 및 배송 관리",
      desc: "KNS EDU 제휴 학원 전용 B2B 폐쇄몰입니다. 원생 수에 맞춰 간편하게 교재를 대량 주문하고, 파트너십 등급에 따른 특별 할인 혜택(P Point)을 실시간으로 적용받을 수 있습니다.",
      img: "/images/katch_store.png",
      color: "#fbbf24",
      reverse: false
    },
    {
      id: "lounge",
      title: "원장 전용 VIP 라운지",
      subtitle: "모든 학원 지표를 한눈에 보는 통합 대시보드",
      desc: "학원의 원생 증가 추이, 테스트 평균 성적률, 강사별 VOD 수강 관리 등을 실시간으로 시각화하여 확인하는 경영자 전용 최고급 데이터 애널리틱스 센터입니다.",
      img: "/images/katch_lounge.png",
      color: "#fb923c",
      reverse: true
    }
  ];

  return (
    <div style={{ background: '#0a0f1c', color: 'white', minHeight: '100vh', fontFamily: 'Pretendard, sans-serif' }}>
      {/* Dynamic Global Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.active { opacity: 1; transform: translateY(0); }
        .feature-img-wrap { overflow: hidden; border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); }
        .feature-img-wrap img { width: 100%; height: auto; display: block; transition: transform 0.5s; object-fit: cover; }
        .feature-img-wrap:hover img { transform: scale(1.05); }
      `}} />

      {/* Hero Header */}
      <section style={{ padding: '150px 0 80px', textAlign: 'center', background: 'radial-gradient(circle at center 0%, #1e293b 0%, #0a0f1c 70%)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container reveal">
          <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(56,189,248,0.1)', color: '#38bdf8', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(56,189,248,0.2)' }}>Platform Outline</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            압도적인 교육의 상위 1% 기술,<br/>
            <strong style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>KATCH 플랫폼</strong>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            KNS EDU가 자랑하는 6대 프리미엄 통합 평가 및 리소스 관리 시스템입니다.<br/>
            대치동의 체계적인 관리를 귀원의 시스템에 그대로 입혀드립니다.
          </p>
        </div>
      </section>

      {/* 6 Features Layout */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          
          {/* Feature 1 */}
          <div id="diagnostic" className="reveal" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', marginBottom: '100px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.2rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Feature 01</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>KATCH 기초 진단테스트</h2>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem', opacity: 0.9 }}>"수강 전 가장 완벽한 약점 분석"</h3>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, wordBreak: 'keep-all' }}>대치동 최상위권 데이터베이스 10만 건을 바탕으로 학생의 취약점과 강점을 분석하는 최고급 딥러닝 진단 시스템입니다. 단순히 점수만 내는 것이 아니라 어휘력, 구문 독해력, 추론 능력을 다각도로 평가합니다.</p>
            </div>
            <div style={{ flex: '1 1 500px' }} className="feature-img-wrap">
              <img src="images/katch_diag.png" alt="KATCH 기초 진단테스트" />
            </div>
          </div>

          {/* Feature 2 */}
          <div id="level" className="reveal" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '60px', marginBottom: '100px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#818cf8', fontWeight: 700, fontSize: '1.2rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Feature 02</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>KATCH 입학 레벨테스트</h2>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem', opacity: 0.9 }}>"전국 1%를 향한 첫 걸음"</h3>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, wordBreak: 'keep-all' }}>KNS EDU 정규반 입학을 위한 고도화된 레벨테스트입니다. OMR 기반의 빠르고 정확한 채점 시스템과 누적 백분위 데이터를 통해 학생들을 가장 적합한 학습 반에 배정합니다.</p>
            </div>
            <div style={{ flex: '1 1 500px' }} className="feature-img-wrap">
              <img src="images/katch_level.png" alt="KATCH 입학 레벨테스트" />
            </div>
          </div>

          {/* Feature 3 */}
          <div id="bank" className="reveal" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', marginBottom: '100px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#34d399', fontWeight: 700, fontSize: '1.2rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Feature 03</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>기출 &amp; 내신 문제은행</h2>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem', opacity: 0.9 }}>"버튼 한 번으로 완성되는 나만의 시험지"</h3>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, wordBreak: 'keep-all' }}>수만 문항의 기출 및 변형 문제 DB를 탑재했습니다. 교재별, 유형별, 난이도별 상세 필터링을 통해 원장님과 강사가 원하는 문제지를 즉석에서 조립하고 PDF로 다운로드할 수 있습니다.</p>
            </div>
            <div style={{ flex: '1 1 500px' }} className="feature-img-wrap">
              <img src="images/katch_bank.png" alt="기출 & 내신 문제은행" />
            </div>
          </div>

          {/* Feature 4 */}
          <div id="vod" className="reveal" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '60px', marginBottom: '100px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#a78bfa', fontWeight: 700, fontSize: '1.2rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Feature 04</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>수능 프리미엄 VOD 인강</h2>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem', opacity: 0.9 }}>"시공간을 초월하는 대치동 직강"</h3>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, wordBreak: 'keep-all' }}>수능 앤솔로지 전 레벨과 수단비 교재에 대한 최고급 퀄리티의 해설 강의를 제공합니다. 학생들이 모르는 지문만 골라서 효율적으로 학습할 수 있는 맞춤형 VOD 플레이어 시스템입니다.</p>
            </div>
            <div style={{ flex: '1 1 500px' }} className="feature-img-wrap">
              <img src="images/katch_vod.png" alt="수능 프리미엄 VOD 인강" />
            </div>
          </div>

          {/* Feature 5 */}
          <div id="store" className="reveal" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', marginBottom: '100px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.2rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Feature 05</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>제휴 파트너 전용 교재 스토어</h2>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem', opacity: 0.9 }}>"원클릭 교재 주문 및 배송 관리"</h3>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, wordBreak: 'keep-all' }}>KNS EDU 제휴 학원 전용 B2B 폐쇄몰입니다. 원생 수에 맞춰 간편하게 교재를 대량 주문하고, 파트너십 등급에 따른 특별 할인 혜택(P Point)을 실시간으로 적용받을 수 있습니다.</p>
            </div>
            <div style={{ flex: '1 1 500px' }} className="feature-img-wrap">
              <img src="images/katch_store.png" alt="제휴 파트너 전용 교재 스토어" />
            </div>
          </div>

          {/* Feature 6 */}
          <div id="lounge" className="reveal" style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: '60px', marginBottom: '0', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <span style={{ color: '#fb923c', fontWeight: 700, fontSize: '1.2rem', display: 'block', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Core Feature 06</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>원장 전용 VIP 라운지</h2>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '1.5rem', opacity: 0.9 }}>"모든 학원 지표를 한눈에 보는 통합 대시보드"</h3>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.8, wordBreak: 'keep-all' }}>학원의 원생 증가 추이, 테스트 평균 성적률, 강사별 VOD 수강 관리 등을 실시간으로 시각화하여 확인하는 경영자 전용 최고급 데이터 애널리틱스 센터입니다.</p>
            </div>
            <div style={{ flex: '1 1 500px' }} className="feature-img-wrap">
              <img src="images/katch_lounge.png" alt="원장 전용 VIP 라운지" />
            </div>
          </div>

        </div>
      </section>

      {/* CTA Footer Wrapper */}
      <section style={{ padding: '80px 0 120px', textAlign: 'center', background: 'linear-gradient(to top, rgba(30,58,138,0.2) 0%, transparent 100%)' }}>
        <div className="container reveal">
          <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '20px' }}>진정한 교육의 차이는 데이터가 만듭니다.</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '40px' }}>지금 KATCH 플랫폼을 도입하고 프리미엄 학원 관리의 신세계를 경험하세요.</p>
          <a href="#contact" className="btn btn--primary btn--large" style={{ fontSize: '1.1rem', padding: '16px 40px', borderRadius: '30px' }}>KATCH 도입 상담하기</a>
        </div>
      </section>
    </div>
  );
}
