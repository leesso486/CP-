"use client";
import React, { useState } from 'react';

export default function AnthologyPage() {
  const [activeTab, setActiveTab] = useState('design-1');
  const [activeBook, setActiveBook] = useState(0);

  const bookData = [
    { id: 0, img: '/images/anthology_lv0.png', lv: 'Level 0', theme: '#0ea5e9', bg: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)', target: '초5 하 / 초4 중하', title: '수능 유형 Basic 이해', desc: '지시어, 문장 의미 등 정확한 세부 정보 파악을 위한 기초 연습 과정입니다. 수능 영어가 요구하는 핵심 정보 탐색 능력을 기릅니다.' },
    { id: 1, img: '/images/anthology_lv1.png', lv: 'Level 1', theme: '#eab308', bg: 'linear-gradient(135deg, #eab308 0%, #a16207 100%)', target: '초6 하 / 초5 중 / 초4 상', title: '수능 유형 Basic 이해 (심화)', desc: '지시어 파악, 사실 여부 판별, 세부 정보 일치 등 좀 더 정교한 팩트 체크와 구문 분석 능력을 강화하는 단계입니다.' },
    { id: 2, img: '/images/anthology_lv2.png', lv: 'Level 2', theme: '#10b981', bg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', target: '중3 하 / 중2 중 / 중1 상', title: '중심 내용 및 전개 파악', desc: '단편적인 정보를 넘어 글 전체의 전개 방식과 중심 내용(Main Idea), 요지, 그리고 맥락의 흐름을 이해하는 훈련을 본격 시작합니다.' },
    { id: 3, img: '/images/anthology_lv3.png', lv: 'Level 3', theme: '#8b5cf6', bg: 'linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)', target: '중3 중상 / 중2 상', title: '유추 및 수사법 이해', desc: '중심 내용 파악을 무탈하게 완수하고, 비로소 고차적 사고력을 요구하는 유추, 수사법 이해 트레이닝을 도입합니다.' },
    { id: 4, img: '/images/anthology_lv4.png', lv: 'Level 4', theme: '#f97316', bg: 'linear-gradient(135deg, #f97316 0%, #c2410c 100%)', target: '중3 상 / 중2 최상', title: '기출 원서 + 내신 융합형', desc: '본격 심화 사고력 집중 훈련 코스입니다. 글 속에 내포된 비유, 상징, 추론, 함축적 의미 파악을 기출 원서를 통해 마스터합니다.' },
    { id: 6, img: '/images/anthology_lv6.png', lv: 'Level 6', theme: '#1e3a8a', bg: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)', target: '고2 / 고1 / 중3 최상', title: '기출 원서 + 실전 모의고사', desc: '수능 1등급 대비를 위한 완벽 실전 대비 코스입니다. 통합적 독해력의 완성과 함께 시간을 통제하며 최고난도 문항 해결력을 극대화합니다.' }
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '80px' }}>
      {/* Hero Header with Anthology Branding */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 100%)', color: 'white', padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        <div className="container relative x-z-10">
          <span style={{ color: '#d4af37', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Core Solution 01</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>진짜 수능 독해의 시작,<br/><span style={{ color: '#bfdbfe' }}>수능 앤솔로지</span></h1>
          <p style={{ color: '#e0e7ff', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>수능의 흐름을 가장 앞에서 추적하고 대치동 최상위권 데이터를 통해 완성된 프리미엄 독해 콘텐츠 라인업</p>
        </div>
      </div>

      {/* Dynamic Masonry Editorial Layout for Why Anthology */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            
            {/* Editorial Card 1 - Dark Blue */}
            <div style={{ background: '#1e3a8a', padding: '3.5rem', borderRadius: '24px', color: 'white', boxShadow: '0 20px 40px rgba(30,58,138,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#93c5fd', letterSpacing: '2px', marginBottom: '1rem' }}>THE PROBLEM</div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: '1.3' }}>학습자 수준에 맞지 않는<br/>고등 교재 무단택</h3>
              <p style={{ color: '#bfdbfe', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                문해력 저하와 수능 난도 상승, 하지만 여전히 초·중 학생들을 위한 수능형 전용 교재는 부재합니다. '일치' 능력이 추론 능력으로 바로 이어지지 않습니다.
              </p>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                <strong style={{ color: '#f87171', display: 'block', marginBottom: '0.5rem' }}>빈칸, 추론 정답률 급락</strong>
                중2(98%) ➔ 중3(24%) ➔ 고3(8%)
              </div>
            </div>

            {/* Editorial Card 2 - Gold/Warm */}
            <div style={{ background: '#fef3c7', padding: '3.5rem', borderRadius: '24px', color: '#451a03', boxShadow: '0 20px 40px rgba(251,191,36,0.1)', border: '1px solid #fde68a', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#b45309', letterSpacing: '2px', marginBottom: '1rem' }}>THE SOLUTION</div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: '1.3' }}>체계적 수능 학습을<br/>조기에 시작하라</h3>
              <p style={{ color: '#78350f', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                앤솔로지는 인지 격차를 줄이기 위해 단계별로 고차원적 사고력(추론, 함의)을 선제적으로 훈련시키는 전략적 독해 지침서입니다.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['인문학적 사고 조기 함양', '숨어 있는 패턴 학습 기법', '논리 기반의 주관식 연계 독해'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', fontWeight: 700, fontSize: '1.05rem' }}>
                    <span style={{ background: '#d97706', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Curriculum & Lineup (Interactive Book Selection) - Solbook Cute Aesthetic */}
      <section className="section-padding" style={{ background: '#f0f4f8', position: 'relative', overflow: 'hidden' }}>
        {/* Soft decorative background blobs */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }}></div>

        <div className="container relative z-10">
          <div className="text-center mb-5">
            <span style={{ display: 'inline-block', background: '#e0f2fe', color: '#0284c7', padding: '0.6rem 1.2rem', borderRadius: '30px', fontWeight: 800, fontSize: '0.95rem', marginBottom: '1rem', boxShadow: '0 4px 10px rgba(2,132,199,0.1)' }}>독해력 맞춤 라인업 📚</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>우리아이 딱 맞춤 <span style={{ color: '#0ea5e9' }}>앤솔로지 교재</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b' }}>아래 표지를 콕! 눌러서 단계별 학습 목표를 확인해보세요</p>
          </div>
          
          <div style={{ maxWidth: '1000px', margin: '0 auto', marginBottom: '4rem' }}>
            {/* Cute Book Rack */}
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem', marginTop: '2rem', padding: '2rem', background: '#ffffff', borderRadius: '30px', boxShadow: '0 10px 40px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
              {bookData.map((book, index) => (
                <button 
                  key={book.id}
                  onClick={() => setActiveBook(index)}
                  style={{
                    cursor: 'pointer', background: 'transparent',
                    border: 'none', padding: 0,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transform: activeBook === index ? 'scale(1.1) translateY(-15px)' : 'scale(1)',
                    opacity: activeBook === index ? 1 : 0.6,
                    position: 'relative'
                  }}
                >
                  <div style={{
                    position: 'absolute', top: -10, right: -10, width: 28, height: 28, background: book.theme, color: 'white', borderRadius: '50%', display: activeBook === index ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1rem', zIndex: 10, boxShadow: `0 4px 10px ${book.theme}60`
                  }}>✓</div>
                  <img src={book.img} alt={`Level ${book.id}`} style={{ 
                    width: '100px', borderRadius: '6px', display: 'block', 
                    boxShadow: activeBook === index ? `0 15px 30px ${book.theme}40` : '0 5px 15px rgba(0,0,0,0.08)',
                    border: activeBook === index ? `3px solid ${book.theme}` : '3px solid transparent'
                  }} />
                </button>
              ))}
            </div>

            {/* Cute Book Details Pane */}
            <div style={{ 
              background: 'white', 
              borderRadius: '30px', 
              padding: '4rem 3.5rem', 
              color: '#0f172a', 
              boxShadow: `0 20px 50px rgba(0,0,0,0.06)`,
              borderTop: `8px solid ${bookData[activeBook].theme}`,
              display: 'flex', gap: '3.5rem', alignItems: 'center', position: 'relative', overflow: 'hidden',
              transition: 'all 0.4s ease'
            }}>
              {/* Soft decorative background matching the theme color */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', background: `linear-gradient(to bottom right, white 60%, ${bookData[activeBook].theme}15 100%)`, pointerEvents: 'none' }}></div>
              
              <div style={{ flex: '0 0 220px', position: 'relative', zIndex: 2 }}>
                <img src={bookData[activeBook].img} alt="Current Level Cover" style={{ width: '100%', borderRadius: '12px', boxShadow: `0 25px 40px ${bookData[activeBook].theme}30` }} />
              </div>
              
              <div style={{ flex: 1, textAlign: 'left', position: 'relative', zIndex: 2 }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                  <span style={{ background: `${bookData[activeBook].theme}15`, color: bookData[activeBook].theme, padding: '0.6rem 1.4rem', fontSize: '1rem', borderRadius: '30px', fontWeight: 800 }}>{bookData[activeBook].lv}</span>
                  <span style={{ background: '#f1f5f9', color: '#475569', padding: '0.6rem 1.4rem', borderRadius: '30px', fontWeight: 700, fontSize: '0.95rem' }}>🎯 권장: {bookData[activeBook].target}</span>
                </div>
                <h3 style={{ fontSize: '2.4rem', margin: '0 0 1.5rem 0', fontWeight: 900, color: '#1e293b', letterSpacing: '-0.5px' }}>{bookData[activeBook].title}</h3>
                
                <div style={{ background: `${bookData[activeBook].theme}08`, padding: '1.8rem', borderRadius: '20px', borderLeft: `5px solid ${bookData[activeBook].theme}` }}>
                  <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: '#334155', margin: 0, fontWeight: 600, wordBreak: 'keep-all' }}>{bookData[activeBook].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Textbook Design Structure - Interactive Tabs */}
      <section className="section-padding" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>독해력 향상의 마스터키, <span style={{ color: '#d4af37' }}>교재 설계</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>글을 어떻게 읽고 왜 쓰였는지 사고의 방향을 길러주는 4단계 설계</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['1. 읽기 전 활동', '2. 본문 및 분석', '3. 읽기 후 연습', '4. 지원 시스템'].map((t, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(`design-${i+1}`)}
                style={{
                  padding: '1rem 2rem', border: 'none', borderRadius: '30px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s',
                  background: activeTab === `design-${i+1}` ? '#1e3a8a' : '#fff',
                  color: activeTab === `design-${i+1}` ? 'white' : '#64748b',
                  boxShadow: activeTab === `design-${i+1}` ? '0 10px 20px rgba(30,58,138,0.2)' : '0 4px 6px rgba(0,0,0,0.05)'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ background: 'white', padding: '4rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', minHeight: '300px', display: 'flex', alignItems: 'center' }}>
            {activeTab === 'design-1' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1.5rem' }}>읽기 전 활동 & 배경지식</h3>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>단순히 지문을 해석하기 전, 학생들이 글의 주제에 친숙해지고 깊이 이해할 수 있도록 사전 지식을 빌드업합니다.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}><strong>영상 시청:</strong> 흥미 유발 질문 제시</div>
                  <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}><strong>배경지식:</strong> 실제 사례 및 확장 배경 제시</div>
                  <div style={{ padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}><strong>필수 어휘:</strong> 영영풀이 및 다의어 활용</div>
                </div>
              </div>
            )}
            {activeTab === 'design-2' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1.5rem' }}>본문 및 심층 질문 분석</h3>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>글의 논리적 흐름을 파악하고, 상징과 은유 속에 내재된 필자의 진짜 의도를 추론하는 훈련입니다.</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <span style={{ padding: '0.8rem 1.5rem', background: '#e0e7ff', color: '#3730a3', borderRadius: '8px', fontWeight: 700 }}>구조화 매핑</span>
                  <span style={{ padding: '0.8rem 1.5rem', background: '#e0e7ff', color: '#3730a3', borderRadius: '8px', fontWeight: 700 }}>은유/상징 해설</span>
                  <span style={{ padding: '0.8rem 1.5rem', background: '#e0e7ff', color: '#3730a3', borderRadius: '8px', fontWeight: 700 }}>핵심 구문 분석</span>
                </div>
              </div>
            )}
            {activeTab === 'design-3' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1.5rem' }}>수능 유형 연습 & 독해 후</h3>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>분석한 내용과 전략을 실전 수능 유형에 맞게 적용하며, 레벨별로 상이한 전략 훈련을 가능하게 합니다.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}><strong>Lv 1:</strong> 정확히 읽고 의미 파악</div>
                  <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}><strong>Lv 2:</strong> 핵심 내용 대의 파악 및 구조</div>
                  <div style={{ padding: '1.5rem', background: '#fffbeb', borderRadius: '12px', borderLeft: '4px solid #f59e0b' }}><strong>Lv 3+:</strong> 고차 추론 및 빈칸/함의 분석</div>
                </div>
              </div>
            )}
            {activeTab === 'design-4' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#1e3a8a', marginBottom: '1.5rem' }}>학원 맞춤 지원 시스템</h3>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>원활한 수업 진행과 확실한 성적 향상을 보장하기 위해 강력한 부가 자료와 테스트를 제공합니다.</p>
                <ul className="check-list" style={{ columns: 2 }}>
                  <li style={{ marginBottom: '1rem' }}>완벽한 교사용 가이드 (발문)</li>
                  <li style={{ marginBottom: '1rem' }}>단원별 내신/수능 리뷰 테스트</li>
                  <li style={{ marginBottom: '1rem' }}>레벨 진단 테스트 제공</li>
                  <li style={{ marginBottom: '1rem' }}>KATCH 플랫폼 자동 연동</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
