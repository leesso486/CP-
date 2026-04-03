'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AnthologyPage() {
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

  const levelsData = [
    { level: 'Level 0', target: '중3 ~ 고1', title: '문장 해체 시스템', desc: '8품사, 5형식을 완전히 내려놓고 명명백백한 논리적 수식어구 해체와 뼈대 잡기를 훈련합니다.', color: '#0F172A', mainCov: '/images/anthology_lv0_cover.png', mainIn: '/images/anthology_lv0_inner.png', sub1: '/images/anthology_real_1.png', sub2: '/images/anthology_sample_1.png' },
    { level: 'Level 1', target: '고1 ~ 고2', title: '거시적/미시적 뼈대 잡기', desc: '하나의 긴 문장을 넘어, 단락 전체의 논리를 거시적으로 읽고 다이어그램으로 도식화하는 체화.', color: '#2563EB', mainCov: '/images/anthology_lv1.png', mainIn: '/images/anthology_real_2.png', sub1: '/images/anthology_real_3.png', sub2: '/images/anthology_sample_2.png' },
    { level: 'Level 2', target: '고2 상위권', title: '구문 다이어그램 체화', desc: '모의고사 고난도 킬러 문항의 구조를 한 눈에 파악하기 위해 문장 간의 유기적 관계성을 그립니다.', color: '#059669', mainCov: '/images/anthology_lv2_cover.png', mainIn: '/images/anthology_lv2_inner.png', sub1: '/images/anthology_real_4.png', sub2: '/images/anthology_sample_3.png' },
    { level: 'Level 3', target: '고2 ~ 고3', title: '평가원 논리 전개 패턴', desc: '역대 평가원 기출의 논리 전개 패턴(나열, 대조, 비유, 인과)을 공식화하여 즉각적으로 정답을 도출합니다.', color: '#7C3AED', mainCov: '/images/anthology_lv3_cover.png', mainIn: '/images/anthology_lv3_inner.png', sub1: '/images/anthology_real_5.png', sub2: '/images/anthology_sample_4.png' },
    { level: 'Level 4', target: '고3 (정답률 40% 미만)', title: '블랭크(빈칸) 추론 완성', desc: '오답률 1위 빈칸 추론. 지문의 블랭크를 뚫고 들어가는 역발상 추론과 소거법의 극한을 훈련합니다.', color: '#DC2626', mainCov: '/images/anthology_lv4_cover.png', mainIn: '/images/anthology_lv4_inner.png', sub1: '/images/anthology_real_6.png', sub2: '/images/anthology_sample_5.png' },
    { level: 'Level 5', target: '고3 (킬러 문항)', title: '순서/삽입 마스터 코스', desc: '가장 많은 수험생이 시간 부족으로 찍는 순서와 삽입 문제. 지시어와 접속사의 숨겨진 시그널을 해독합니다.', color: '#EA580C', mainCov: '/images/anthology_lv5_cover.png', mainIn: '/images/anthology_lv5_inner.png', sub1: '/images/anthology_real_7.png', sub2: '/images/anthology_sample_6.png' },
    { level: 'Level 6', target: '고3 최상위 (만점)', title: '1등급 절대 방어 (파이널)', desc: '그 어떤 불수능 기조가 오더라도 흔들리지 않는 1등급, 영어 절대평가 시대의 완벽한 100점을 완성합니다.', color: '#1E293B', mainCov: '/images/anthology_lv6_cover.png', mainIn: '/images/anthology_lv6_inner.png', sub1: '/images/anthology_real_8.png', sub2: '/images/anthology_real_9.png' }
  ];

  if (!mounted) return null;

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', fontFamily: "'Pretendard', sans-serif", color: '#0F172A', overflowX: 'hidden' }}>
      
      {/* 1. 하이엔드 히어로 (Hero) 섹션 */}
      <section style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at top, #F8FAFC 0%, #FFFFFF 100%)', paddingTop: '100px', overflow: 'hidden' }}>
        
        {/* Background Mesh/Glow Elements */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(37,99,235,0.08)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '600px', height: '600px', background: 'rgba(124,58,237,0.05)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 }} />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ zIndex: 10, textAlign: 'center', width: '100%', maxWidth: '1400px', padding: '0 4%' }}>
          
          <motion.div variants={fadeInUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.8)', padding: '8px 24px', borderRadius: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
            <span style={{ fontWeight: 800, color: '#2563EB', letterSpacing: '2px' }}>KNS PLATFORM</span>
            <span style={{ width: '4px', height: '4px', background: '#CBD5E1', borderRadius: '50%' }} />
            <span style={{ fontWeight: 700, color: '#475569', letterSpacing: '0.5px' }}>수능 1등급의 정점</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-3px', marginBottom: '30px', color: '#0F172A' }}>
            수능 앤솔로지<br/>
            <span style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>완벽한 논리 독해</span>
          </motion.h1>

          <motion.p variants={fadeInUp} style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#475569', maxWidth: '800px', margin: '0 auto', wordBreak: 'keep-all', lineHeight: '1.7', fontWeight: 500 }}>
            수능 킬러 문항을 뛰어넘는 10-STEP 해체 시스템과 체계적인 7-Level 커리큘럼. 대치동 최상위권의 압도적 선택, 지금 그 거대한 스케일을 확인하세요.
          </motion.p>
        </motion.div>

        {/* 둥둥 떠다니는 기깔난 3D 팬 스프레드 (Cover Flow) 히어로 이미지 */}
        <motion.div 
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ width: '100%', height: '550px', margin: '40px auto 0', position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: '2000px' }}
        >
          <motion.div
            animate={{ y: [-15, 15] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
            style={{ position: 'relative', width: '300px', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', transformStyle: 'preserve-3d' }}
          >
            {[
              '/images/anthology_lv0_cover.png',
              '/images/anthology_lv1.png',
              '/images/anthology_lv2_cover.png',
              '/images/anthology_lv3_cover.png',
              '/images/anthology_lv4_cover.png',
              '/images/anthology_lv5_cover.png',
              '/images/anthology_lv6_cover.png'
            ].map((src, i) => {
              const offset = i - 3; // -3 to 3
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;

              // Cover Flow 로직 (중앙 집중형 3D 원근법)
              const rotateY = isCenter ? 0 : offset * -18; 
              const translateX = offset * 140; 
              const translateZ = isCenter ? 150 : -absOffset * 120;
              const zIndex = 10 - absOffset;
              const scale = isCenter ? 1.05 : 1 - (absOffset * 0.05);

              return (
                <motion.img 
                  key={i}
                  initial={{ x: 0, y: 100, rotateY: 0, rotateX: 50, scale: 0.6, opacity: 0 }}
                  animate={{ x: translateX, y: 0, z: translateZ, rotateY: rotateY, rotateX: 0, scale: scale, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.8 + (absOffset * 0.15) }}
                  src={src} 
                  alt={`Level ${i} Cover`} 
                  style={{ 
                    position: 'absolute', 
                    width: '300px', 
                    height: 'auto', 
                    objectFit: 'contain', 
                    boxShadow: isCenter ? '0 50px 100px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.15)', 
                    borderRadius: '8px',
                    filter: isCenter ? 'none' : `brightness(${1 - absOffset * 0.15})`,
                    zIndex: zIndex,
                    transformOrigin: '50% 50%',
                    WebkitBoxReflect: 'below 10px linear-gradient(transparent 70%, rgba(255,255,255,0.4))'
                  } as React.CSSProperties}
                />
              );
            })}
          </motion.div>
        </motion.div>

      </section>

      {/* 2. 초대형 스크롤 브로슈어 (Curriculum + User Images) */}
      <section style={{ padding: '200px 0', background: '#FFFFFF', position: 'relative' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '150px', padding: '0 4%' }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2563EB', letterSpacing: '4px', display: 'block', marginBottom: '16px' }}>MASTER PLAN</span>
          <h2 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-2px', color: '#0F172A' }}>
            7-LEVEL 정밀 타겟팅
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh' }}>
          {levelsData.map((data, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={staggerContainer}
              style={{ padding: '0 4%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}
            >
              
              {/* 장식용 초대형 백그라운드 텍스트 */}
              <div style={{ position: 'absolute', top: '10%', left: '0', width: '100%', textAlign: 'center', fontSize: '15vw', fontWeight: 900, color: 'rgba(241,245,249,0.5)', zIndex: 0, whiteSpace: 'nowrap', pointerEvents: 'none', letterSpacing: '-2px' }}>
                {data.level.toUpperCase()}
              </div>

              {/* 텍스트 컨테이너 */}
              <motion.div variants={fadeInUp} style={{ textAlign: 'center', zIndex: 10, maxWidth: '900px', marginBottom: '100px' }}>
                <div style={{ display: 'inline-flex', padding: '10px 30px', background: '#FFFFFF', color: data.color, fontWeight: 900, fontSize: '1.2rem', borderRadius: '50px', border: `2px solid ${data.color}`, marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                  {data.level} : {data.target}
                </div>
                <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '24px', lineHeight: 1.2 }}>
                  {data.title}
                </h3>
                <p style={{ fontSize: '1.4rem', color: '#475569', lineHeight: '1.8', wordBreak: 'keep-all' }}>
                  {data.desc}
                </p>
              </motion.div>

              {/* 하이엔드 겹침(Layered) 스태거 애니메이션 로드 */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', minHeight: '600px', zIndex: 10, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px', perspective: '2000px' }}>
                
                {data.mainCov && (
                  <motion.img 
                    variants={{ hidden: { opacity: 0, y: 100, rotateY: -10, rotateX: 20 }, visible: { opacity: 1, y: 0, rotateY: -10, rotateX: 0, transition: { duration: 1.2 } } }}
                    src={data.mainCov} 
                    alt="Cover" 
                    style={{ height: '700px', objectFit: 'contain', zIndex: 3, borderRadius: '8px', boxShadow: '20px 40px 80px rgba(0,0,0,0.15)', transformOrigin: 'center center' }}
                  />
                )}
                
                {data.mainIn && (
                  <motion.img 
                    variants={{ hidden: { opacity: 0, y: 100, rotateY: 5, rotateX: 10 }, visible: { opacity: 1, y: 0, rotateY: 5, rotateX: 0, transition: { duration: 1.2 } } }}
                    src={data.mainIn} 
                    alt="Inner" 
                    style={{ height: '650px', objectFit: 'contain', zIndex: 2, borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0', marginTop: '50px' }}
                  />
                )}

                {data.sub1 && (
                  <motion.img 
                    variants={{ hidden: { opacity: 0, scale: 0.8, x: -100 }, visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2 } } }}
                    src={data.sub1} 
                    alt="Detail 1" 
                    style={{ height: '400px', objectFit: 'contain', zIndex: 4, borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0', marginTop: '150px', marginLeft: '-150px' }}
                  />
                )}
                
                {data.sub2 && (
                  <motion.img 
                    variants={{ hidden: { opacity: 0, scale: 0.8, x: 100 }, visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2 } } }}
                    src={data.sub2} 
                    alt="Detail 2" 
                    style={{ height: '450px', objectFit: 'contain', zIndex: 1, borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', border: '1px solid #E2E8F0', marginTop: '-300px', opacity: 0.95, marginLeft: '50px' }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. 부가 자료 폭격 (Tests Gallery) */}
      <section style={{ padding: '150px 4%', background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)', borderTop: '1px solid #E2E8F0', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: '80px' }}>
             <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981', letterSpacing: '4px', display: 'block', marginBottom: '16px' }}>SUPPLEMENTARY MATERIALS</span>
             <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-2px', marginBottom: '20px' }}>
               빈틈없는 극강의 부가자료
             </h2>
             <p style={{ color: '#475569', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', wordBreak: 'keep-all', lineHeight: '1.6' }}>모의고사와 실전 내신 완벽 방어를 위한 리뷰테스트, 미니테스트, 하프/파이널 실전 모의고사 내지 원본입니다.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "0px" }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            
            {[
              { img: '/images/anthology_test_review_1.png', tag: '기본 다지기', title: '누적 리뷰테스트 1' },
              { img: '/images/anthology_test_review_2.png', tag: '단어/문맥 체화', title: '누적 리뷰테스트 2' },
              { img: '/images/anthology_test_mini_1.png', tag: '실전 속도 훈련', title: '실전 미니테스트 1' },
              { img: '/images/anthology_test_mini_2.png', tag: '실전 속도 훈련', title: '실전 미니테스트 2' },
              { img: '/images/anthology_test_mid_1.png', tag: '중간/기말 대비', title: '내신 평가 1' },
              { img: '/images/anthology_test_mid_2.png', tag: '중간/기말 대비', title: '내신 평가 2' },
            ].map((test, idx) => (
              <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }} style={{ background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '350px', background: '#F1F5F9', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                   <img src={test.img} alt={test.title} style={{ height: '100%', objectFit: 'contain', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '4px' }} />
                </div>
                <div style={{ padding: '30px', background: '#FFFFFF' }}>
                  <span style={{ display: 'inline-block', padding: '6px 14px', background: '#D1FAE5', color: '#047857', fontWeight: 800, fontSize: '0.9rem', borderRadius: '6px', marginBottom: '16px' }}>{test.tag}</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px' }}>{test.title}</h3>
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ background: '#0F172A', color: 'white', padding: '120px 4%', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, marginBottom: '40px', letterSpacing: '-1px' }}>수능 1등급을 예약하시겠습니까?</h2>
        <a href="#contact" style={{ display: 'inline-block', padding: '24px 60px', background: '#2563EB', color: '#fff', fontWeight: 900, fontSize: '1.3rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 20px 40px rgba(37,99,235,0.4)', transition: 'all 0.3s' }} onMouseOver={(e)=>e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={(e)=>e.currentTarget.style.transform='translateY(0)'}>
          프리미엄 파트너십 도입
        </a>
      </section>

    </div>
  );
}
