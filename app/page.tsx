'use client';

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, MotionValue, useMotionTemplate } from 'framer-motion';

// --- 1. PARALLAX HERO GALAXY COMPONENT ---
function ParallaxBook({ img, baseX, baseY, baseRot, zDepth, mouseX, mouseY, delay }: {
  img: string; baseX: number; baseY: number; baseRot: number; zDepth: number; mouseX: MotionValue<number>; mouseY: MotionValue<number>; delay: number;
}) {
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  
  // 패럴랙스 역산 (Z-depth에 따라 전면 책은 마우스 반대로 크게 움직임)
  const moveX = useTransform(smoothX, [0, 1], [`${zDepth * 120}px`, `${-zDepth * 120}px`]);
  const moveY = useTransform(smoothY, [0, 1], [`${zDepth * 80}px`, `${-zDepth * 80}px`]);
  
  // 입체 비틀림
  const rotateX = useTransform(smoothY, [0, 1], [`${baseRot/2 + 15}deg`, `${baseRot/2 - 15}deg`]);
  const rotateY = useTransform(smoothX, [0, 1], [`${baseRot - 25}deg`, `${baseRot + 25}deg`]);

  return (
    <motion.img 
      src={img} 
      initial={{ opacity: 0, scale: 0.5, y: baseY + 150 }}
      animate={{ opacity: 1, scale: 1, y: baseY }}
      transition={{ duration: 1.2, delay, ease: "easeOut" }}
      style={{ 
        position: 'absolute', 
        width: '240px', 
        height: 'auto', 
        objectFit: 'contain', 
        left: '50%',
        top: '50%',
        marginLeft: baseX,
        marginTop: baseY,
        x: moveX,
        y: moveY,
        rotateX,
        rotateY,
        zIndex: Math.floor(zDepth * 10),
        boxShadow: '0 40px 80px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.02)',
        borderRadius: '8px',
        transformOrigin: 'center center'
      } as any}
    />
  );
}

// --- 2. VVIP GLARE TILT CARD COMPONENT ---
function GlareTiltCard({ href, title, desc, img, color, shadowColor, badge, glow }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], ["15deg", "-15deg"]);
  const rotateY = useTransform(springX, [0, 1], ["-15deg", "15deg"]);
  
  const px = useTransform(springX, [0, 1], [0, 100]);
  const py = useTransform(springY, [0, 1], [0, 100]);
  const background = useMotionTemplate`radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const handleMouseLeave = () => { x.set(0.5); y.set(0.5); };

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <motion.div 
        ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, rotateX: 20, y: 50 }} 
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }} 
        viewport={{ once: true }} transition={{ duration: 0.8 }} 
        whileHover={{ scale: 1.05, y: -20, boxShadow: `0 40px 100px ${shadowColor}` }} 
        style={{ 
          background: '#0F172A', borderRadius: '32px', 
          display: 'flex', flexDirection: 'column', border: '1px solid rgba(255,255,255,0.08)', 
          position: 'relative', overflow: 'hidden', rotateX, rotateY,
          transformStyle: "preserve-3d", perspective: 1500
        } as any}
      >
        <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background, pointerEvents: 'none', zIndex: 5, borderRadius: '32px', mixBlendMode: 'overlay' } as any} />
        
        {/* Full-bleed 3D Image Header */}
        <div style={{ width: '100%', height: '300px', position: 'relative', background: 'radial-gradient(circle at top, #1E293B 0%, #0F172A 100%)', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingTop: '40px', overflow: 'hidden' }}>
           {/* Glowing Aura Behind Image */}
           <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: glow, filter: 'blur(80px)', opacity: 0.3 }} />
           {img}
        </div>
        
        {/* Card Content */}
        <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', flexGrow: 1, position: 'relative', zIndex: 10, transform: 'translateZ(40px)' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#FFFFFF', marginBottom: '12px', letterSpacing: '-1px' }}>{title} <span style={{ color: glow, fontWeight: 700, fontSize: '1.1rem', verticalAlign: 'middle', marginLeft: '8px' }}>({badge})</span></h3>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '30px', flexGrow: 1, wordBreak: 'keep-all' }}>{desc}</p>
          <div style={{ color: glow, fontWeight: 900, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>포털 게이트웨이 열기 <span>→</span></div>
        </div>
      </motion.div>
    </Link>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  const fadeInUp: any = { 
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } 
  };
  
  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#0F172A', minHeight: '100vh', fontFamily: "'Pretendard', sans-serif", overflowX: 'hidden' }}>
      
      {/* 1. BRIGHT PREMIUM HERO WITH PARALLAX GALAXY */}
      <section onMouseMove={handleHeroMouseMove} style={{ position: 'relative', width: '100%', minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'radial-gradient(circle at center, #F8FAFC 0%, #FFFFFF 100%)', overflow: 'hidden', perspective: '2000px' }}>
        
        {/* Abstract Mesh Background */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '60vw', height: '60vw', background: 'rgba(37,99,235,0.04)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0 }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '80vw', height: '80vw', background: 'rgba(139,92,246,0.03)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 }} />
        
        {/* Subtle Grid */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'linear-gradient(to right, rgba(15,23,42,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.02) 1px, transparent 1px)', backgroundSize: '4rem 4rem', zIndex: 0 }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '0 4%', position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left: Typography */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ zIndex: 10 }}>
            <motion.div variants={fadeInUp} style={{ display: 'inline-flex', padding: '8px 24px', background: '#FFFFFF', border: '1px solid #E2E8F0', color: '#2563EB', borderRadius: '30px', fontSize: '0.9rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.03)' }}>
              THE NEXT STANDARD
            </motion.div>
            
            <motion.h1 variants={fadeInUp} style={{ fontSize: 'clamp(4rem, 6vw, 5.5rem)', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, letterSpacing: '-2.5px', marginBottom: '24px' }}>
              상위 1%를 치밀하게,<br/>
              <span style={{ background: 'linear-gradient(90deg, #2563EB, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>KNS BOOKS</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} style={{ fontSize: '1.3rem', color: '#475569', maxWidth: '600px', lineHeight: 1.7, wordBreak: 'keep-all', fontWeight: 500, marginBottom: '50px' }}>
              어둠 속에서 길을 밝히는 압도적 데이터베이스.<br/>
              가장 완벽한 초·중·고 연계 커리큘럼으로 당신의 학원을 지역 최상위권의 중심으로 견인합니다.
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px' }}>
              <Link href="/anthology" style={{ display: 'inline-block', padding: '18px 40px', background: '#0F172A', color: '#fff', fontWeight: 800, fontSize: '1.1rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 20px rgba(15,23,42,0.2)', transition: 'all 0.3s' }}>
                앤솔로지 보기
              </Link>
              <Link href="/sudanbi" style={{ display: 'inline-block', padding: '18px 40px', background: '#FFFFFF', color: '#0F172A', border: '1px solid #E2E8F0', fontWeight: 800, fontSize: '1.1rem', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.03)', transition: 'all 0.3s' }}>
                수단비 보기
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Parallax Mouse-Reactive Book Galaxy */}
          <div style={{ position: 'relative', height: '600px', display: 'flex', transformStyle: 'preserve-3d' }}>
            <ParallaxBook img="/images/anthology_lv6_cover.png" baseX={-220} baseY={-60} baseRot={-12} zDepth={1.1} mouseX={mouseX} mouseY={mouseY} delay={0.2} />
            <ParallaxBook img="/images/sudanbi_advanced.png" baseX={-80} baseY={40} baseRot={-5} zDepth={1.8} mouseX={mouseX} mouseY={mouseY} delay={0.3} />
            <ParallaxBook img="/images/sudanbi_essential.png" baseX={40} baseY={80} baseRot={5} zDepth={2.4} mouseX={mouseX} mouseY={mouseY} delay={0.4} />
            <ParallaxBook img="/images/anthology_lv0_cover.png" baseX={180} baseY={-40} baseRot={12} zDepth={0.8} mouseX={mouseX} mouseY={mouseY} delay={0.5} />
          </div>

        </div>
      </section>

      {/* 2. ABOUT KNS - Staggered Fade Up */}
      <section style={{ padding: '150px 4%', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.span variants={fadeInUp} style={{ fontSize: '0.9rem', fontWeight: 800, color: '#3B82F6', letterSpacing: '3px', marginBottom: '16px', display: 'block' }}>ABOUT KNS</motion.span>
            <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1.5px', marginBottom: '24px' }}>대치동 20년 노하우가 증명하는 최상위 솔루션</motion.h2>
            <motion.p variants={fadeInUp} style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7, wordBreak: 'keep-all' }}>
              빠르게 변화하는 입시 제도 안에서도 최상위권 학생과 학부모님의 니즈를 파악하고, 그 압도적인 해결책을 현장에서 증명해 왔습니다.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {[
              { num: '1', title: '대치동 현장 20년', desc: '강남, 서초, 송파 등 최상위권 교육의 중심지에서 오랜 기간 검증된 교육 로드맵입니다.' },
              { num: '2', title: '최상위권 데이터 확보', desc: '자사고 및 특목고 최상위권 학생들의 내신과 수능 점수 분포를 기반으로 한 정밀한 DB입니다.' },
              { num: '3', title: '초·중·고 완벽 연계성', desc: '상위 호환 커리큘럼을 역으로 디코딩하여, 초중등 단계에서 반드시 채워야 할 필수 뼈대를 구축합니다.' }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }} style={{ background: '#F8FAFC', padding: '50px 40px', borderRadius: '24px', border: '1px solid #E2E8F0', transition: 'all 0.3s ease' }}>
                <div style={{ width: '50px', height: '50px', background: '#DBEAFE', color: '#2563EB', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900, marginBottom: '24px' }}>{item.num}</div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.5px' }}>{item.title}</h3>
                <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.1rem', wordBreak: 'keep-all' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. KNS INFRASTRUCTURE */}
      <section style={{ padding: '150px 4%', background: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: '80px' }}>
            <motion.span variants={fadeInUp} style={{ fontSize: '0.9rem', fontWeight: 800, color: '#8B5CF6', letterSpacing: '3px', margin: '0 auto 16px', display: 'block' }}>KNS INFRASTRUCTURE</motion.span>
            <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1.5px' }}>체계적인 본사 R&D 및 에듀테크 시스템</motion.h2>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '80px' }}>
            {[
              { year: '2005', desc: 'KNS어학원 설립, 대치 최상위 선도' },
              { year: '2013', desc: '고입전략연구소 개설 및 실적 달성' },
              { year: '2016', desc: '국제학부 론칭 (국제계열 석권)' },
              { year: '2021', desc: '확장 이전 및 프리미엄 라인업 다각화' },
              { year: '2025', desc: 'AI KATCH 플랫폼 고도화 완료' },
              { year: '2026', desc: '전국 파트너십 확장 및 모의제휴' }
            ].map((tl, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -5, borderColor: '#2563EB' }} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '30px 24px', borderRadius: '16px', position: 'relative', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', transition: 'all 0.2s' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: i > 3 ? '#2563EB' : '#E2E8F0' }} />
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '12px', letterSpacing: '-1px' }}>{tl.year}</div>
                <div style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, fontWeight: 600, wordBreak: 'keep-all' }}>{tl.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { title: '거점 학원 관리본부', desc: '현장 중심의 원생 밀착 관리와 전문 입시 컨설팅 등 대치동 1등 오프라인 운영체제', color: '#2563EB', icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
              { title: '교재 출판 & 퍼블리싱', desc: '초정밀 콘텐츠 기획 및 조판. 매년 수능과 내신의 최신 기출 트렌드를 즉각 담아냅니다.', color: '#8B5CF6', icon: <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> },
              { title: '영어 R&D 전문 센터', desc: '누적된 백만 건의 오답률 데이터를 분석하여 치명적 오개념을 방어하는 교재 모듈 개발', color: '#10B981', icon: <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> },
              { title: '디지털 SaaS 전환', desc: '기존 종이 시험의 한계를 탈피한, AI 기반의 에듀테크 KATCH 플랫폼 파트너 허브 제공', color: '#F59E0B', icon: <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> }
            ].map((q, i) => (
              <motion.div key={i} variants={fadeInUp} whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '24px', padding: '50px 40px', transition: 'all 0.3s' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: '#F8FAFC', border: '1px solid #E2E8F0', marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: q.color }}>
                  <div style={{ width: '28px', height: '28px', strokeWidth: 2, fill: 'none', stroke: 'currentColor' }}>{q.icon}</div>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.5px' }}>{q.title}</h3>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.6, fontWeight: 500, wordBreak: 'keep-all' }}>{q.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Curriculum Tracks CSS (Scoped to this file) */}
      <style dangerouslySetInnerHTML={{ __html: `
        .curriculum-tracks { max-width: 1000px; margin: 0 auto; background: #FFFFFF; padding: 40px; border-radius: 24px; border: 1px solid #E2E8F0; box-shadow: 0 20px 40px rgba(0,0,0,0.03); }
        @media (max-width: 768px) { .curriculum-tracks { padding: 20px; overflow-x: auto; } }
        .ct-header { display: grid; grid-template-columns: 80px repeat(7, 1fr); gap: 4px; padding-bottom: 8px; min-width: 800px; }
        .ct-h-col { font-weight: 700; font-size: 0.95rem; color: #64748B; text-align: center; display: flex; align-items: center; justify-content: center; }
        .ct-track { display: grid; grid-template-columns: 120px 1fr; gap: 24px; align-items: center; padding: 8px 0; min-width: 800px; }
        .ct-label-wrapper { position: relative; cursor: pointer; display: flex; align-items: center; justify-content: flex-end; }
        .ct-label-title { font-size: 1.15rem; font-weight: 800; color: #0F172A; transition: all 0.2s; padding: 6px 12px; border-radius: 8px; font-family: 'Pretendard', sans-serif; letter-spacing: -0.5px; }
        .ct-label-wrapper:hover .ct-label-title { background: #F8FAFC; color: var(--track-color); transform: translateX(-4px); }
        
        .ct-tooltip { position: absolute; right: 100%; top: 50%; transform: translate(-10px, -50%); width: 320px; background: white; border: 3px solid var(--track-color); border-radius: 12px; opacity: 0; visibility: hidden; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); z-index: 100; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden; pointer-events: none; }
        .ct-label-wrapper:hover .ct-tooltip { opacity: 1; visibility: visible; transform: translate(-20px, -50%); }
        .ct-tooltip::after { content: ''; position: absolute; right: -9px; top: 50%; transform: translateY(-50%); border-width: 8px 0 8px 8px; border-style: solid; border-color: transparent transparent transparent var(--track-color); }
        .ct-tooltip-head { background: var(--track-color); color: white; padding: 14px; text-align: center; font-weight: 900; font-size: 1.3rem; letter-spacing: 4px; }
        .ct-tooltip-body { padding: 20px; font-size: 1.05rem; color: #334155; line-height: 1.6; font-weight: 600; text-align: center; word-break: keep-all; }

        .ct-cells { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; align-items: stretch; width: 100%; border-radius: 4px; padding: 0 4px; min-height: 52px; }
        .ct-pill { padding: 0 6px; font-weight: 700; font-size: 0.9rem; text-align: center; word-break: keep-all; display: flex; align-items: center; justify-content: center; position: relative; letter-spacing: -0.5px; transition: transform 0.2s; }
        .ct-pill:hover { transform: scale(1.02); z-index: 10; cursor: default; }
        .ct-pill.filled { background: var(--track-color); color: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
        .ct-span-2 { grid-column: span 2; }
        .ct-span-3 { grid-column: span 3; }
        .ct-span-4 { grid-column: span 4; }
        .ct-span-5 { grid-column: span 5; }
        .ct-span-7 { grid-column: span 7; }
        .ct-bottom-axis { display: grid; grid-template-columns: 120px repeat(7, 1fr); gap: 6px; padding-top: 20px; min-width: 800px; margin-top: 24px; border-top: 1px solid #F1F5F9; }
      `}} />

      {/* 3.5 Curriculum Lineup (Interactive Hover Label Data Table Style) */}
      <section style={{ padding: '120px 4%', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: '60px' }}>
            <motion.span variants={fadeInUp} style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', letterSpacing: '2px', margin: '0 auto 12px', display: 'block' }}>CURRICULUM ARCHITECTURE</motion.span>
            <motion.h2 variants={fadeInUp} style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px' }}>정밀하게 타겟팅된 KNS Premium Lineup</motion.h2>
            <motion.p variants={fadeInUp} style={{ color: '#475569', fontSize: '1.2rem', marginTop: '16px' }}>각 영역 명칭에 마우스를 올리면 다각화된 훈련 목표를 확인할 수 있습니다.</motion.p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="curriculum-tracks">
              
              <div className="ct-track" style={{ '--track-color': '#1E3A8A' } as React.CSSProperties}>
                  <div className="ct-label-wrapper">
                      <div className="ct-label-title">독해</div>
                      <div className="ct-tooltip">
                          <div className="ct-tooltip-head">독해</div>
                          <div className="ct-tooltip-body">수능 원전과 수준별 텍스트를 활용한 깊이 있는 훈련을 통해 핵심을 꿰뚫는 독해력을 기르고 고난도 유형을 완벽히 정복할 수 있습니다.</div>
                      </div>
                  </div>
                  <div className="ct-cells">
                      <div className="ct-pill filled ct-span-7" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', padding: 0 }}>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.0</div>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.1</div>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.2</div>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.3</div>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.4</div>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.5</div>
                         <div className="ct-pill filled" style={{minHeight:'52px'}}>Lv.6</div>
                      </div>
                  </div>
              </div>
              
              <div className="ct-track" style={{ '--track-color': '#7C3AED' } as React.CSSProperties}>
                  <div className="ct-label-wrapper">
                      <div className="ct-label-title">문법</div>
                      <div className="ct-tooltip">
                          <div className="ct-tooltip-head">문법</div>
                          <div className="ct-tooltip-body">해석을 위한 실용 문법부터 내신 고득점에 필요한 문법 능력을 키우고 나아가 특목고나 최상위권을 위한 TEPS 기반의 최고 수준 문법 실력까지 완성시켜 줍니다.</div>
                      </div>
                  </div>
                  <div className="ct-cells">
                      <div className="ct-pill filled ct-span-2">기본문법</div>
                      <div className="ct-pill filled">중등내신문법</div>
                      <div className="ct-pill filled ct-span-2">고등내신문법</div>
                      <div className="ct-pill filled ct-span-2">TEPS 문법</div>
                  </div>
              </div>
              
              <div className="ct-track" style={{ '--track-color': '#E11D48' } as React.CSSProperties}>
                  <div className="ct-label-wrapper">
                      <div className="ct-label-title">논리</div>
                      <div className="ct-tooltip">
                          <div className="ct-tooltip-head">논리</div>
                          <div className="ct-tooltip-body">수능 고난도 빈칸 추론 문제 정복을 위해 GRE 문제 유형을 활용하여 문맥의 논리적 흐름 파악과 추론 능력을 극대화하고 문제의 핵심을 파악하는 사고력을 기릅니다.</div>
                      </div>
                  </div>
                  <div className="ct-cells">
                      <div className="ct-span-3"></div>
                      <div className="ct-pill filled ct-span-4" style={{ width: '105%', zIndex: 10 }}></div>
                  </div>
              </div>
              
              <div className="ct-track" style={{ '--track-color': '#059669' } as React.CSSProperties}>
                  <div className="ct-label-wrapper">
                      <div className="ct-label-title">구문</div>
                      <div className="ct-tooltip">
                          <div className="ct-tooltip-head">구문</div>
                          <div className="ct-tooltip-body">복잡한 문장 구조를 집중적으로 학습하여 단어의 의미만으로는 파악하기 어려운 문장의 의미를 명확하게 이해하고 해석의 정확도를 높입니다.</div>
                      </div>
                  </div>
                  <div className="ct-cells">
                      <div className="ct-span-1"></div>
                      <div className="ct-pill filled ct-span-5"></div>
                      <div className="ct-span-1"></div>
                  </div>
              </div>
              
              <div className="ct-track" style={{ '--track-color': '#D97706' } as React.CSSProperties}>
                  <div className="ct-label-wrapper">
                      <div className="ct-label-title">어휘</div>
                      <div className="ct-tooltip">
                          <div className="ct-tooltip-head">어휘</div>
                          <div className="ct-tooltip-body">단순 암기를 넘어 수능, 교과서, 평가원 데이터를 기반으로 빈출 최우선 어휘를 학습하여 빈틈없는 어휘력과 탄탄한 기본기를 완성합니다.</div>
                      </div>
                  </div>
                  <div className="ct-cells">
                      <div className="ct-span-2"></div>
                      <div className="ct-pill filled ct-span-1" style={{ color: '#0F172A', fontWeight: 800 }}>기본</div>
                      <div className="ct-pill filled ct-span-1" style={{ color: '#0F172A', fontWeight: 800 }}>필수</div>
                      <div className="ct-pill filled ct-span-1" style={{ color: '#0F172A', fontWeight: 800 }}>핵심</div>
                      <div className="ct-pill filled ct-span-1" style={{ color: '#0F172A', fontWeight: 800 }}>실력</div>
                      <div className="ct-pill filled ct-span-1" style={{ color: '#0F172A', fontWeight: 800 }}>특목고</div>
                  </div>
              </div>

              <div className="ct-bottom-axis">
                  <div></div>
                  <div className="ct-h-col ct-span-2" style={{ color: '#0F172A', fontSize: '1.05rem', fontWeight: 800 }}>Lv.하 (초등)</div>
                  <div className="ct-h-col ct-span-2" style={{ color: '#0F172A', fontSize: '1.05rem', fontWeight: 800 }}>Lv.중 (중등)</div>
                  <div className="ct-h-col ct-span-3" style={{ color: '#0F172A', fontSize: '1.05rem', fontWeight: 800 }}>Lv.상 (특목)</div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* 4. ULTIMATE HIGH-END PRODUCTS GATEWAY (VVIP 3D Glare Tilt Cards) */}
      <section style={{ padding: '150px 4%', background: '#0F172A', color: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '0.9rem', fontWeight: 800, color: '#60A5FA', letterSpacing: '3px', marginBottom: '16px', display: 'block' }}>KNS VVIP PRODUCTS</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 900, letterSpacing: '-1.5px' }}>
            압도적인 운영을 위한<br/>궁극의 솔루션 포털
          </motion.h2>
        </div>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <GlareTiltCard 
            href="/anthology" title="Anthology" badge="독해" glow="#60A5FA" shadowColor="rgba(37,99,235,0.4)"
            img={<img src="/images/anthology_lv6_cover.png" alt="Anthology" style={{ height: '110%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', transform: 'translateZ(60px) translateY(10px)' }} />}
            desc="원서부터 수능 기출까지, 가장 완벽한 논리 전개 훈련. 학년이 아닌 철저한 평가 레벨 중심의 7단계 도약 프로그램입니다."
          />
          <GlareTiltCard 
            href="/sudanbi" title="Sudanbi" badge="어휘" glow="#34D399" shadowColor="rgba(16,185,129,0.4)"
            img={<img src="/images/sudanbi_advanced.png" alt="Sudanbi" style={{ height: '110%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', transform: 'translateZ(60px) translateY(10px)' }} />}
            desc="단순 텍스트 암기를 넘어선 문맥 추론과 어원 학습. 내신 1등급과 수능 만점을 위한 압도적 강도의 어휘 마스터 클래스."
          />
          <GlareTiltCard 
            href="/katch" title="KATCH Platform" badge="SaaS" glow="#A78BFA" shadowColor="rgba(139,92,246,0.4)"
            img={<div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', borderRadius: '32px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem', fontWeight: 900, color: '#FFFFFF', boxShadow: '0 20px 40px rgba(139,92,246,0.4)', transform: 'translateZ(60px)' }}>K</div>}
            desc="파트너 학원을 위한 차세대 B2B 솔루션. 레벨테스트 성적, 수강생 오답률 취합, 문제은행 생성 및 실시간 경영 리포트 제공."
          />
        </div>
      </section>

    </div>
  );
}
