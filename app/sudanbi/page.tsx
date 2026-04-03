'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import InteractiveVocabulary from './InteractiveVocabulary';

export default function SudanbiPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fadeInUp = { 
    hidden: { opacity: 0, y: 80 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 1 } } 
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const levelBooks = [
    { name: 'ESSENTIAL', target: '고1 ~ 고2 필수', color: '#10B981', desc: '수능 절대평가 2등급 확보를 위한 코어 어휘 정복. 내신과 수능의 교집합을 완벽히 잡습니다.', img: '/images/sudanbi_essential.png' },
    { name: 'CORE', target: '고2 ~ 고3 모의고사', color: '#3B82F6', desc: '최근 7개년 평가원 기출에 등장한 핵심 단어를 빈출도에 따라 체화하는 메인 베이스 라인.', img: '/images/sudanbi_core.png' },
    { name: 'ADVANCED', target: '고3 최상위 (킬러)', color: '#8B5CF6', desc: '오답률 1위 장문/빈칸 추론을 돌파하기 위한 고난도 어휘 및 마이너스(부정) 어휘 심화 학습.', img: '/images/sudanbi_advanced.png' }
  ];

  const features = [
    { title: '어휘의 확장성 (유추)', subt: '단어의 1차원적 암기를 넘어 논리적 사고 연계', img: '/images/sudanbi_real_1.png', tag: 'Feature 01' },
    { title: '문맥 적합성 (추론)', subt: '빈칸 추론형 고난도 뉘앙스 파악 집중 훈련', img: '/images/sudanbi_real_2.png', tag: 'Feature 02' },
    { title: '입체적 본문 분석 표본', subt: '자동사/타동사 구분 및 유의어/반의어 오름차순 배치', img1: '/images/sudanbi_sample_1.png', img2: '/images/sudanbi_real_3.png', tag: 'Feature 03' },
    { title: '실력편 프리미엄 내지', subt: '살아있는 어휘 데이터베이스를 지금 바로 호버해서 체험해보세요.', tag: 'Feature 04', isInteractive: true }
  ];

  if (!mounted) return null;

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: "'Pretendard', sans-serif", color: '#0F172A', overflowX: 'hidden' }}>
      
      {/* 1. 하이엔드 히어로 (Hero) 섹션 */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, #F0FDF4 0%, #FFFFFF 100%)', paddingTop: '100px', overflow: 'hidden' }}>
        
        {/* Background Mesh/Glow Elements */}
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'rgba(16,185,129,0.06)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '0%', right: '10%', width: '600px', height: '600px', background: 'rgba(59,130,246,0.04)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }} />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ zIndex: 10, textAlign: 'center', width: '100%', maxWidth: '1400px', padding: '0 4%' }}>
          
          <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(16,185,129,0.2)', padding: '10px 28px', borderRadius: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
            <span style={{ fontWeight: 900, color: '#10B981', letterSpacing: '2px' }}>VOCABULARY MASTER</span>
            <span style={{ width: '4px', height: '4px', background: '#CBD5E1', borderRadius: '50%' }} />
            <span style={{ fontWeight: 700, color: '#64748B' }}>수능 영단어의 알파와 오메가</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-3px', marginBottom: '30px', color: '#0F172A' }}>
            수단비<br/>
            <span style={{ background: 'linear-gradient(90deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>수능 단어의 비밀</span>
          </motion.h1>

          <motion.p variants={fadeInUp} style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#475569', maxWidth: '800px', margin: '0 auto', wordBreak: 'keep-all', lineHeight: '1.7', fontWeight: 500 }}>
            대치동 최상위권의 압도적 선택. 기존 단순 암기형 어휘집의 한계를 뛰어넘어, 수능형 논리 확장과 빈칸 추론까지 한 번에 대비하는 마스터 클래스.
          </motion.p>
        </motion.div>

        {/* 대형 브로슈어 패럴랙스 (왜 수단비인가?) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          style={{ width: '100%', maxWidth: '1300px', margin: '60px auto 0', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center' }}
        >
          <motion.img 
            animate={{ y: [-15, 15] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            src="/images/sudanbi_covers.png" 
            alt="WHY Sudanbi Brochure" 
            style={{ width: '110%', minWidth: '800px', maxWidth: '1500px', objectFit: 'contain', filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.15))' }}
          />
        </motion.div>

      </section>

      {/* 2. 트로이카 시리즈 소개 (3 Levels) */}
      <section style={{ padding: '200px 4%', background: '#FFFFFF', position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: '120px' }}>
             <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#3B82F6', letterSpacing: '4px', display: 'block', marginBottom: '20px' }}>CURRICULUM LINE-UP</span>
             <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-2px', marginBottom: '20px' }}>
               완벽한 3단계 코어 라인업
             </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '50px' }}>
            {levelBooks.map((book, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#F8FAFC', borderRadius: '24px', padding: '60px 40px', border: '1px solid #E2E8F0', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', transition: 'transform 0.4s ease' }}
                onMouseOver={(e)=>e.currentTarget.style.transform='translateY(-10px)'}
                onMouseOut={(e)=>e.currentTarget.style.transform='translateY(0)'}
              >
                <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '60px', perspective: '1000px' }}>
                  <img src={book.img} alt={book.name} style={{ height: '400px', objectFit: 'contain', filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.2))', transform: 'rotateY(-15deg) translateZ(20px)', transition: 'transform 0.5s' }} />
                </div>
                
                <div style={{ textAlign: 'center', width: '100%' }}>
                  <span style={{ display: 'inline-block', padding: '8px 20px', background: '#FFFFFF', color: book.color, fontWeight: 900, fontSize: '1rem', borderRadius: '50px', border: `2px solid ${book.color}`, marginBottom: '20px' }}>
                    {book.target}
                  </span>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', marginBottom: '20px' }}>{book.name}</h3>
                  <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.7', wordBreak: 'keep-all' }}>{book.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. 리얼 내지 하이젠드 매거진 (Actual Content) */}
      <section style={{ padding: '150px 0', background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '150px', padding: '0 4%' }}>
          <span style={{ fontSize: '1.3rem', fontWeight: 900, color: '#8B5CF6', letterSpacing: '4px', display: 'block', marginBottom: '20px' }}>ACTUAL PREVIEW</span>
          <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-2px', color: '#0F172A' }}>
            프리미엄 내지 디테일
          </h2>
          <p style={{ fontSize: '1.4rem', color: '#475569', maxWidth: '800px', margin: '20px auto 0', wordBreak: 'keep-all' }}>대치동 1등급이 열광하는 압도적인 4단계 분석/추론 포맷을 원본 그대로 체감하세요.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh' }}>
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20%" }}
              variants={staggerContainer}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 4%', position: 'relative' }}
            >
              <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', textAlign: 'center', fontSize: '14vw', fontWeight: 900, color: 'rgba(226,232,240,0.6)', zIndex: 0, whiteSpace: 'nowrap', pointerEvents: 'none', transform: 'translateY(-40%)' }}>
                {feat.tag}
              </div>

              <motion.div variants={fadeInUp} style={{ textAlign: 'center', zIndex: 10, marginBottom: '80px' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1.5px', marginBottom: '20px' }}>{feat.title}</h3>
                <p style={{ fontSize: '1.4rem', color: '#475569', fontWeight: 600 }}>{feat.subt}</p>
              </motion.div>

              {/* 겹치는 레이아웃 연출 */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '1500px', minHeight: '500px' }}>
                {feat.img1 ? (
                  // 입체적 본문 분석 (이미지 2개 겹침)
                  <>
                    <motion.img 
                      variants={{ hidden: { opacity: 0, y: 100, rotateY: -10 }, visible: { opacity: 1, y: 0, rotateY: -10, transition: { duration: 1.2 } } }}
                      src={feat.img1} alt="Sample" 
                      style={{ height: '700px', objectFit: 'contain', zIndex: 1, borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid rgba(0,0,0,0.05)', marginLeft: '-200px' }} 
                    />
                    <motion.img 
                      variants={{ hidden: { opacity: 0, y: 100, rotateY: 10, x: 100 }, visible: { opacity: 1, y: 0, rotateY: 10, x: 0, transition: { duration: 1.2, delay: 0.2 } } }}
                      src={feat.img2} alt="Real" 
                      style={{ height: '650px', objectFit: 'contain', zIndex: 2, borderRadius: '12px', boxShadow: '20px 30px 60px rgba(0,0,0,0.15)', border: '1px solid rgba(0,0,0,0.05)', marginLeft: '-200px', marginTop: '100px' }} 
                    />
                  </>
                ) : feat.isInteractive ? (
                  <motion.div variants={{ hidden: { opacity: 0, y: 150 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2 } } }} style={{ width: '100%', maxWidth: '1200px' }}>
                    <InteractiveVocabulary />
                  </motion.div>
                ) : (
                  // 단일 와이드 이미지 로드
                  <motion.img 
                    variants={{ hidden: { opacity: 0, y: 150, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.2 } } }}
                    src={feat.img as string} 
                    alt={feat.title} 
                    style={{ width: '100%', maxWidth: '1200px', objectFit: 'contain', borderRadius: '16px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0' }} 
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ background: '#0F172A', color: 'white', padding: '120px 4%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '40px', letterSpacing: '-1px' }}>수능 영단어, 유일무이한 마스터키</h2>
        <a href="#contact" style={{ display: 'inline-block', padding: '24px 60px', background: '#10B981', color: '#fff', fontWeight: 900, fontSize: '1.3rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 20px 40px rgba(16,185,129,0.4)', transition: 'all 0.3s' }} onMouseOver={(e)=>e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={(e)=>e.currentTarget.style.transform='translateY(0)'}>
          프리미엄 파트너십 문의하기
        </a>
      </section>

    </div>
  );
}
