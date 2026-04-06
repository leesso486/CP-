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
      <style dangerouslySetInnerHTML={{ __html: "\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body { \n            background: #F8FAFC; color: white; min-height: 100vh; \n            font-family: 'Pretendard', 'Inter', sans-serif; \n            overflow-x: hidden; -webkit-font-smoothing: antialiased;\n        }\n        .container { max-width: 1400px; margin: 0 auto; padding: 0 4%; position: relative; z-index: 10; }\n        \n        /* Unified White Header (Light Mode) */\n        header { \n            position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; \n            padding: 20px 4%; transition: all 0.4s ease; \n            background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); \n            border-bottom: 1px solid rgba(0,0,0,0.05); \n        }\n        header.scrolled { padding: 12px 4%; box-shadow: 0 4px 20px rgba(0,0,0,0.05); background: rgba(255,255,255,0.98); }\n        .nav-wrapper { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; }\n        .logo { font-size: 1.6rem; font-weight: 900; text-decoration: none; color: #0F172A; letter-spacing: -0.5px; font-family: 'Inter', sans-serif; }\n        .logo span { color: #3B82F6; }\n        .nav-links { display: flex; gap: 2.5rem; align-items: center; }\n        .nav-links a { text-decoration: none; color: #64748B; font-weight: 600; font-size: 0.95rem; transition: color 0.3s; }\n        .nav-links a:hover, .nav-links a.active { color: #0F172A; }\n        .btn-partner { \n            display: inline-block; padding: 10px 24px; background: #3B82F6; color: #FFFFFF !important; \n            border-radius: 30px; font-weight: 700; font-size: 0.95rem; \n            transition: all 0.3s; text-decoration: none; border: none; box-shadow: 0 4px 14px rgba(59,130,246,0.3);\n        }\n        .btn-partner:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(59,130,246,0.4); }\n\n        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%) scale(1.3); } }\n        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }\n        \n        main a { text-decoration: none; color: inherit; }\n        @media (max-width: 900px) { .nav-links { display: none; } }\n    \n\n        .reveal { opacity: 0; transform: translateY(20px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1); }\n        .reveal.active { opacity: 1; transform: translateY(0); }\n        \n        .kns-hero { position: relative; width: 100%; background: #020617; padding: 180px 4% 160px; text-align: center; overflow: hidden; color: white; }\n        .kns-hero::before { content: ''; position: absolute; top: 50%; left: 50%; width: 1200px; height: 1200px; background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(2,6,23,0) 60%); transform: translate(-50%, -50%); pointer-events: none; }\n        .kns-hero::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 150px; background: linear-gradient(to top, #FFFFFF, transparent); pointer-events: none; }\n        .hero-title-massive { font-size: clamp(4rem, 8vw, 8rem); font-weight: 900; line-height: 1; letter-spacing: -3px; margin-bottom: 24px; color: #0F172A; font-family: 'Inter', sans-serif; text-transform: uppercase; background: linear-gradient(to right, #ffffff, #94a3b8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }\n        .hero-subtitle { font-size: clamp(1.5rem, 3vw, 2.5rem); font-weight: 700; color: #38BDF8; margin-bottom: 30px; letter-spacing: -1px; }\n        \n        .kns-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; max-width: 900px; margin: 60px auto 0; text-align: center; position: relative; z-index: 10; border-top: 1px solid #E2E8F0; padding-top: 50px; }\n        .kns-stat-num { font-size: 3rem; font-weight: 900; color: #0F172A; font-family: 'Inter', sans-serif; margin-bottom: 8px; letter-spacing: -1px; }\n        .kns-stat-text { font-size: 1.1rem; color: #475569; font-weight: 600; word-break: keep-all; }\n        \n        .g-card { background: #F8FAFC; border-radius: 16px; padding: 40px; display: flex; flex-direction: column; align-items: flex-start; text-decoration: none; border: 1px solid #E2E8F0; transition: all 0.2s; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02); cursor: pointer; }\n        .g-card:hover { transform: translateY(-4px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); border-color: #93C5FD; }\n        .g-icon-wrap { width: 56px; height: 56px; border-radius: 12px; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; }\n        \n        .g-card.anthology .g-icon-wrap { background: #DBEAFE; color: #1D4ED8; }\n        .g-card.sudanbi .g-icon-wrap { background: #D1FAE5; color: #047857; }\n        .g-card.katch .g-icon-wrap { background: #F3E8FF; color: #6D28D9; }\n        \n        .g-title { font-size: 1.4rem; font-weight: 800; color: #0F172A; margin-bottom: 12px; letter-spacing: -0.5px; }\n        .g-desc { font-size: 1rem; color: #475569; line-height: 1.6; margin-bottom: 30px; word-break: keep-all; flex-grow: 1; }\n        .g-link { font-weight: 700; font-size: 0.95rem; color: #2563EB; display: flex; align-items: center; gap: 8px; transition: gap 0.2s; }\n        .g-card:hover .g-link { gap: 12px; }\n        \n        @media (max-width: 900px) { .innovation-grid { grid-template-columns: 1fr; max-width: 400px; } }\n\n        /* Timeline SaaS */\n        .timeline-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-top: 40px; }\n        @media (max-width: 1000px) { .timeline-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; } }\n        @media (max-width: 600px) { .timeline-grid { grid-template-columns: repeat(2, 1fr); } }\n        \n        .tl-card { background: #F8FAFC; border: 1px solid #E2E8F0; padding: 24px; border-radius: 12px; transition: border-color 0.2s; position: relative; overflow: hidden; }\n        .tl-card:hover { border-color: #2563EB; }\n        .tl-card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: #E2E8F0; transition: background 0.2s; }\n        .tl-card:hover::before { background: #2563EB; }\n        .tl-year { font-size: 1.5rem; font-weight: 900; color: #0F172A; margin-bottom: 8px; font-family: 'Inter', sans-serif; letter-spacing: -0.5px; }\n        .tl-desc { font-size: 0.9rem; color: #475569; line-height: 1.5; font-weight: 500; word-break: keep-all; }\n\n        /* Infrastructure Grid */\n        .beautiful-quad-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; max-width: 1300px; margin: 60px auto 0; }\n        @media (max-width: 1000px) { .beautiful-quad-grid { grid-template-columns: repeat(2, 1fr); } }\n        .bq-card { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 16px; padding: 40px 30px; text-align: left; transition: all 0.2s; }\n        .bq-card:hover { background: #F8FAFC; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); transform: translateY(-4px); }\n        .bq-icon { width: 48px; height: 48px; border-radius: 12px; background: #F8FAFC; border: 1px solid #E2E8F0; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; color: #475569; }\n        .bq-card:hover .bq-icon { border-color: var(--base-color); color: var(--base-color); }\n        .bq-icon svg { width: 24px; height: 24px; stroke-width: 2; fill: none; stroke: currentColor; }\n        .bq-title { font-size: 1.25rem; font-weight: 800; color: #0F172A; margin-bottom: 12px; letter-spacing: -0.5px; }\n        .bq-desc { font-size: 1rem; color: #475569; line-height: 1.6; font-weight: 500; word-break: keep-all; }\n\n        /* Curriculum Tracks (Pixel-Perfect Grid matching user image) */\n        .curriculum-tracks { max-width: 1000px; margin: 0 auto; background: #F8FAFC; padding: 40px; }\n        @media (max-width: 768px) { .curriculum-tracks { padding: 20px; overflow-x: auto; } }\n        .ct-header { display: grid; grid-template-columns: 80px repeat(7, 1fr); gap: 4px; padding-bottom: 8px; min-width: 800px; }\n        .ct-h-col { font-weight: 700; font-size: 0.95rem; color: #64748B; text-align: center; display: flex; align-items: center; justify-content: center; }\n        .ct-track { display: grid; grid-template-columns: 120px 1fr; gap: 24px; align-items: center; padding: 8px 0; min-width: 800px; }\n        .ct-label-wrapper { position: relative; cursor: pointer; display: flex; align-items: center; justify-content: flex-end; }\n        .ct-label-title { font-size: 1.15rem; font-weight: 800; color: #0F172A; transition: all 0.2s; padding: 6px 12px; border-radius: 8px; font-family: 'Pretendard', sans-serif; letter-spacing: -0.5px; }\n        .ct-label-wrapper:hover .ct-label-title { background: #F8FAFC; color: var(--track-color); transform: translateX(-4px); }\n        \n        .ct-tooltip { position: absolute; right: 100%; top: 50%; transform: translate(-10px, -50%); width: 320px; background: white; border: 3px solid var(--track-color); border-radius: 12px; opacity: 0; visibility: hidden; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); z-index: 100; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1); display: flex; flex-direction: column; overflow: hidden; pointer-events: none; }\n        .ct-label-wrapper:hover .ct-tooltip { opacity: 1; visibility: visible; transform: translate(-20px, -50%); }\n        .ct-tooltip::after { content: ''; position: absolute; right: -9px; top: 50%; transform: translateY(-50%); border-width: 8px 0 8px 8px; border-style: solid; border-color: transparent transparent transparent var(--track-color); }\n        .ct-tooltip-head { background: var(--track-color); color: white; padding: 14px; text-align: center; font-weight: 900; font-size: 1.3rem; letter-spacing: 4px; }\n        .ct-tooltip-body { padding: 20px; font-size: 1.05rem; color: #334155; line-height: 1.6; font-weight: 600; text-align: center; word-break: keep-all; }\n\n        .ct-cells { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; align-items: stretch; width: 100%; border-radius: 4px; padding: 0 4px; min-height: 52px; }\n        .ct-pill { padding: 0 6px; font-weight: 700; font-size: 0.9rem; text-align: center; word-break: keep-all; display: flex; align-items: center; justify-content: center; position: relative; letter-spacing: -0.5px; transition: transform 0.2s; }\n        .ct-pill:hover { transform: scale(1.02); z-index: 10; cursor: default; }\n        .ct-pill.filled { background: var(--track-color); color: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }\n        .ct-span-2 { grid-column: span 2; }\n        .ct-span-3 { grid-column: span 3; }\n        .ct-span-4 { grid-column: span 4; }\n        .ct-span-5 { grid-column: span 5; }\n        .ct-span-7 { grid-column: span 7; }\n        .ct-bottom-axis { display: grid; grid-template-columns: 120px repeat(7, 1fr); gap: 6px; padding-top: 20px; min-width: 800px; margin-top: 24px; border-top: 1px solid #F1F5F9; }\n      \n\n.light-book-showcase {\n    position: relative; width: 100%; height: 500px;\n    display: flex; justify-content: center; align-items: center;\n    perspective: 1200px;\n}\n.book-wrap {\n    position: absolute; width: 190px; height: 270px;\n    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n    cursor: pointer; transform-style: preserve-3d; border-radius: 6px;\n    box-shadow: 0 30px 60px rgba(15,23,42,0.15), 0 0 0 1px rgba(15,23,42,0.05) inset;\n    background: white; /* to ensure clean edges */\n}\n.book-wrap img {\n    width: 100%; height: 100%; object-fit: contain; border-radius: 6px;\n    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n}\n.book-wrap::after {\n    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;\n    background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.7) 25%, transparent 30%);\n    background-size: 200% 200%; background-position: 100% 100%;\n    opacity: 0; transition: opacity 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); border-radius: 6px; pointer-events: none;\n}\n.book-wrap:hover::after { opacity: 1; animation: shineLight 1.5s infinite; }\n.book-wrap:nth-child(1) { transform: translateX(-160px) translateZ(-60px) rotateY(15deg) rotateX(4deg); z-index: 10; animation: floatB1 5s ease-in-out infinite; --tx: -200px; }\n.book-wrap:nth-child(2) { transform: translateX(-50px) translateZ(10px) rotateY(5deg) rotateX(2deg); z-index: 20; animation: floatB2 4.5s ease-in-out infinite 0.5s; --tx: -100px; }\n.book-wrap:nth-child(3) { transform: translateX(50px) translateZ(20px) rotateY(-5deg) rotateX(2deg); z-index: 30; animation: floatB3 6s ease-in-out infinite 1s; --tx: 100px; }\n.book-wrap:nth-child(4) { transform: translateX(160px) translateZ(-40px) rotateY(-15deg) rotateX(4deg); z-index: 15; animation: floatB4 5.5s ease-in-out infinite 1.5s; --tx: 200px; }\n.light-book-showcase:hover .book-wrap { filter: blur(3px) opacity(0.6); transform: translateX(var(--tx)) translateZ(-150px) rotateY(0deg) rotateX(0deg); }\n.light-book-showcase .book-wrap:hover { filter: blur(0px) opacity(1); transform: translateX(0) translateZ(130px) translateY(-30px) rotateY(0deg) scale(1.15); z-index: 60; box-shadow: 0 40px 80px rgba(37,99,235,0.25), 0 0 0 1px rgba(37,99,235,0.1) inset; }\n@keyframes floatB1 { 0%, 100% { margin-top: 0; } 50% { margin-top: -12px; } }\n@keyframes floatB2 { 0%, 100% { margin-top: 0; } 50% { margin-top: -8px; } }\n@keyframes floatB3 { 0%, 100% { margin-top: 0; } 50% { margin-top: -15px; } }\n@keyframes floatB4 { 0%, 100% { margin-top: 0; } 50% { margin-top: -10px; } }\n@keyframes shineLight { 0% { background-position: 100% 100%; } 100% { background-position: 0% 0%; } }\n\n\n/* Santa Toeic Style About KNS */\n.santa-about-section {\n    padding: 140px 4%;\n    background: #090E17; /* Deep midnight blue */\n    position: relative;\n    overflow: hidden;\n    color: white;\n}\n.santa-orb-1 {\n    position: absolute; top: -10%; left: -10%; width: 50vw; height: 50vw;\n    background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);\n    border-radius: 50%; filter: blur(60px); pointer-events: none; z-index: 1;\n}\n.santa-orb-2 {\n    position: absolute; bottom: -20%; right: -10%; width: 60vw; height: 60vw;\n    background: radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%);\n    border-radius: 50%; filter: blur(80px); pointer-events: none; z-index: 1;\n}\n.santa-title-badge {\n    display: inline-block; padding: 8px 24px; border-radius: 100px;\n    background: #FFFFFF; border: 1px solid #E2E8F0;\n    color: #2563EB; font-weight: 800; font-size: 0.9rem; letter-spacing: 2px;\n    margin-bottom: 24px; text-transform: uppercase;\n    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);\n}\n.santa-main-title {\n    font-size: 3rem; font-weight: 900; line-height: 1.25; letter-spacing: -1.5px; margin-bottom: 24px;\n}\n.santa-gradient-text {\n    background: linear-gradient(135deg, #60A5FA 0%, #A855F7 100%);\n    -webkit-background-clip: text; -webkit-text-fill-color: transparent;\n}\n.santa-grid {\n    display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;\n    position: relative; z-index: 10; margin-top: 80px; text-align: left;\n}\n.santa-card {\n    background: #FFFFFF;\n    border: 1px solid rgba(255,255,255,0.08);\n    border-radius: 24px; padding: 40px;\n    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);\n    position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.2);\n}\n.santa-card::before {\n    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;\n    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 100%);\n    opacity: 0; transition: opacity 0.4s; z-index: 0; pointer-events: none;\n}\n.santa-card:hover {\n    transform: translateY(-10px);\n    border-color: rgba(96,165,250,0.3);\n    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 40px rgba(96,165,250,0.15);\n}\n.santa-card:hover::before { opacity: 1; }\n.santa-card > * { position: relative; z-index: 1; }\n.santa-icon-wrapper {\n    width: 60px; height: 60px; border-radius: 16px; margin-bottom: 24px;\n    display: flex; align-items: center; justify-content: center;\n    background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,51,234,0.15));\n    border: 1px solid #E2E8F0;\n}\n.santa-icon { font-size: 1.4rem; font-weight: 900; background: linear-gradient(135deg, #93C5FD, #D8B4FE); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }\n.santa-card h3 { font-size: 1.45rem; font-weight: 800; color: #0F172A; margin-bottom: 16px; letter-spacing: -0.5px; }\n.santa-card p { color: #475569; line-height: 1.7; font-size: 1.05rem; word-break: keep-all; font-weight: 500; }\n.santa-number-bg {\n    position: absolute; bottom: -10px; right: 10px; font-size: 9rem; font-weight: 900;\n    color: rgba(255,255,255,0.02); line-height: 1; z-index: 0; pointer-events: none;\n    transition: color 0.4s, transform 0.4s; letter-spacing: -5px; font-style: italic;\n}\n.santa-card:hover .santa-number-bg { color: rgba(255,255,255,0.04); transform: scale(1.05) translateX(-10px); }\n@media (max-width: 768px) {\n    .santa-main-title { font-size: 2.2rem; }\n    .santa-about-section { padding: 80px 4%; }\n}\n\n\n.tech-hover { border-radius: 20px; border: 1px solid rgba(0,0,0,0.05); transition: all 0.3s; background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); }\n.tech-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(37,99,235,0.1); border-color: rgba(37,99,235,0.2) !important; }\n.dark-glass {\n    background: rgba(255,255,255,0.02) !important;\n    border: 1px solid rgba(255,255,255,0.05) !important;\n    border-radius: 24px !important;\n    backdrop-filter: blur(20px);\n    transition: all 0.4s;\n}\n.dark-glass:hover {\n    background: rgba(255,255,255,0.05) !important;\n    border-color: rgba(96,165,250,0.3) !important;\n    transform: translateY(-10px);\n    box-shadow: 0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(96,165,250,0.1);\n}\n.dark-glass .g-desc { color: #94A3B8 !important; }\n.dark-glass .g-link { color: #60A5FA !important; }\n\n\n/* Bento Box App Layout */\n.bento-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-auto-rows: minmax(240px, auto);\n    gap: 24px;\n    max-width: 1200px;\n    margin: 60px auto 0;\n}\n.bento-card {\n    background: #F8FAFC;\n    border-radius: 32px;\n    padding: 40px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(0,0,0,0.05);\n    transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n}\n.bento-card:hover {\n    transform: translateY(-8px) scale(1.01);\n    box-shadow: 0 30px 60px -12px rgba(37,99,235,0.15), inset 0 0 0 1px rgba(37,99,235,0.1);\n}\n\n/* Specific Sizes */\n.bento-wide { grid-column: span 2; }\n.bento-tall { grid-row: span 2; }\n\n/* Timeline UI */\n.modern-timeline {\n    width: 100%;\n    height: 120px;\n    background: #F8FAFC;\n    border-radius: 24px;\n    margin-top: auto;\n    position: relative;\n    display: flex;\n    align-items: center;\n    padding: 0 40px;\n    gap: 20px;\n    overflow: hidden;\n}\n.mt-bar {\n    position: absolute;\n    top: 50%; left: 40px; right: 40px; height: 4px;\n    background: #E2E8F0;\n    transform: translateY(-50%);\n    border-radius: 4px;\n    z-index: 1;\n}\n.mt-progress {\n    position: absolute;\n    top: 50%; left: 40px; width: 60%; height: 4px;\n    background: linear-gradient(90deg, #3B82F6, #8B5CF6);\n    transform: translateY(-50%);\n    border-radius: 4px;\n    z-index: 2;\n    box-shadow: 0 0 10px rgba(59,130,246,0.5);\n}\n.mt-node {\n    position: relative; z-index: 3;\n    display: flex; flex-direction: column; align-items: center;\n    flex: 1; text-align: center;\n}\n.mt-dot {\n    width: 20px; height: 20px; border-radius: 50%; background: #F8FAFC;\n    border: 4px solid #E2E8F0; margin-bottom: 12px; transition: all 0.3s;\n}\n.mt-node.active .mt-dot {\n    border-color: #3B82F6;\n    box-shadow: 0 0 0 4px rgba(59,130,246,0.2);\n}\n.mt-year { font-weight: 800; font-size: 1.1rem; color: #0F172A; }\n.mt-desc { font-size: 0.85rem; color: #64748B; font-weight: 500; margin-top: 4px; white-space: nowrap; }\n\n/* Dark Bento Specific */\n.bento-dark {\n    background: #0F172A;\n    color: #0F172A;\n    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);\n}\n.bento-dark:hover {\n    box-shadow: 0 30px 60px -12px rgba(139,92,246,0.3), inset 0 0 0 1px rgba(139,92,246,0.3);\n}\n\n.b-icon {\n    width: 60px; height: 60px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px;\n}\n.b-blue { background: #EFF6FF; color: #3B82F6; }\n.b-purple { background: #F5F3FF; color: #8B5CF6; }\n.b-green { background: #ECFDF5; color: #059669; }\n\n@media (max-width: 900px) {\n    .bento-container { grid-template-columns: 1fr; }\n    .bento-wide, .bento-tall { grid-column: span 1; grid-row: span 1; }\n    .modern-timeline { padding: 20px; height: auto; flex-direction: column; gap: 40px; }\n    .mt-bar { top: 40px; bottom: 40px; left: 50%; width: 4px; height: auto; transform: translateX(-50%); }\n    .mt-progress { top: 40px; left: 50%; width: 4px; height: 60%; transform: translateX(-50%); background: linear-gradient(180deg, #3B82F6, #8B5CF6); }\n    .mt-node { flex-direction: row; text-align: left; gap: 20px; width: 100%; justify-content: center; }\n    .mt-dot { margin-bottom: 0; }\n}\n\n\n/* Cyber Neural Curriculum Board */\n.neural-board {\n    max-width: 1200px; margin: 0 auto;\n    background: #090E17; /* Sinking into dark tech early */\n    border-radius: 32px;\n    padding: 60px;\n    box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 2px 20px rgba(255,255,255,0.05);\n    position: relative; overflow: hidden;\n    color: white;\n}\n.neural-board::before {\n    content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;\n    background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);\n    background-size: 30px 30px; pointer-events: none;\n}\n.nt-track {\n    display: flex; align-items: center; margin-bottom: 24px; position: relative; z-index: 10;\n}\n.nt-label {\n    width: 140px; font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; gap: 12px;\n}\n.nt-label-dot { width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px currentColor; }\n.nt-bar-container {\n    flex: 1; height: 50px; background: rgba(0,0,0,0.4); border-radius: 12px;\n    box-shadow: inset 0 4px 10px rgba(0,0,0,0.5); position: relative;\n    display: flex; gap: 4px; padding: 4px;\n}\n.nt-pill {\n    background: #FFFFFF; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);\n    display: flex; align-items: center; justify-content: center;\n    font-size: 0.9rem; font-weight: 700; color: #475569; transition: all 0.3s;\n    user-select: none;\n}\n.nt-pill:hover {\n    background: var(--track-color); color: #FFF; box-shadow: 0 0 20px var(--track-color); transform: scale(1.02); z-index: 20; border-color: transparent;\n}\n.nt-span-1 { flex: 1; } .nt-span-2 { flex: 2; } .nt-span-3 { flex: 3; } .nt-span-4 { flex: 4; } .nt-span-7 { flex: 7; }\n\n/* Dynamic Glow Lines */\n.nt-glow-line {\n    position: absolute; left: 140px; right: 0; top: 25px; height: 2px;\n    background: linear-gradient(90deg, transparent, var(--track-color), transparent);\n    opacity: 0.3; z-index: 0; pointer-events: none;\n}\n@media (max-width: 768px) {\n    .neural-board { padding: 30px 20px; border-radius: 20px; }\n    .nt-track { flex-direction: column; align-items: flex-start; gap: 12px; height: auto; }\n    .nt-glow-line { display: none; }\n    .nt-bar-container { width: 100%; height: auto; flex-direction: column; background: transparent; box-shadow: none; padding: 0; gap: 8px; }\n    .nt-pill { padding: 12px; border-radius: 12px; background: #FFFFFF; }\n}\n\n\n/* Holographic Gateway Cards */\n.holo-grid {\n    max-width: 1300px; margin: 0 auto;\n    display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;\n    perspective: 1500px;\n}\n.holo-card {\n    background: #F8FAFC;\n    border: 1px solid rgba(255,255,255,0.08);\n    border-radius: 32px; padding: 50px 40px; text-decoration: none;\n    position: relative; overflow: hidden;\n    display: flex; flex-direction: column; justify-content: space-between;\n    min-height: 450px;\n    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);\n    transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);\n    transform-style: preserve-3d;\n}\n.holo-card::before {\n    content: ''; position: absolute; inset: 0;\n    background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);\n    opacity: 0; transition: opacity 0.6s; z-index: 0; pointer-events: none;\n}\n/* Cyber Light Overlay */\n.holo-card::after {\n    content: ''; position: absolute; left: -50%; top: -50%; width: 200%; height: 200%;\n    background: radial-gradient(circle, var(--hc-color) 0%, transparent 40%);\n    opacity: 0; transition: all 0.6s; z-index: 0; pointer-events: none; mix-blend-mode: screen;\n}\n.holo-card:hover {\n    transform: translateY(-15px) translateZ(30px) rotateX(2deg) rotateY(-2deg);\n    border-color: rgba(255,255,255,0.2);\n    box-shadow: 0 40px 80px rgba(0,0,0,0.6), 0 0 60px var(--hc-glow);\n}\n.holo-card:hover::before { opacity: 1; }\n.holo-card:hover::after { opacity: 0.2; transform: translate(10%, 10%); }\n\n.hc-content { position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%; }\n.hc-visual {\n    height: 160px; display: flex; align-items: center; justify-content: center; margin-bottom: 30px;\n}\n.hc-visual img {\n    height: 100%; width: auto; object-fit: contain; filter: drop-shadow(0 20px 30px rgba(0,0,0,0.5));\n    transition: transform 0.6s;\n}\n.holo-card:hover .hc-visual img { transform: translateY(-10px) scale(1.05); }\n\n.hc-title {\n    font-size: 2rem; font-weight: 800; color: #0F172A; margin-bottom: 16px; letter-spacing: -0.5px;\n}\n.hc-desc {\n    color: #475569; font-size: 1.1rem; line-height: 1.6; word-break: keep-all; flex: 1;\n}\n.hc-arrow {\n    display: inline-flex; align-items: center; gap: 8px; margin-top: 30px;\n    font-weight: 800; color: var(--hc-color); font-size: 1.2rem;\n    transition: gap 0.3s;\n}\n.holo-card:hover .hc-arrow { gap: 16px; }\n\n@media (max-width: 768px) {\n    .holo-grid { grid-template-columns: 1fr; gap: 24px; }\n    .holo-card { min-height: 380px; padding: 40px 30px; }\n}\n\n" }} />

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
        <div style={{"backgroundColor":"#FFFFFF","color":"#0F172A","minHeight":"100vh","fontFamily":"Pretendard, Inter, sans-serif"} as any}>
<section style={{"position":"relative","width":"100%","height":"100vh","minHeight":"800px","background":"#FFFFFF","overflow":"hidden","display":"flex","alignItems":"center","borderBottom":"1px solid #F1F5F9"} as any}>
    
    <div id="mouseOrb" style={{"position":"absolute","width":"800px","height":"800px","background":"radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(147,51,234,0.05) 40%, transparent 70%)","borderRadius":"50%","pointerEvents":"none","transform":"translate(-50%, -50%)","transition":"opacity 0.2s","zIndex":"1","opacity":"1"} as any}></div>
    <div style={{"position":"absolute","top":"0","left":"0","right":"0","bottom":"0","backgroundImage":"linear-gradient(to right, rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.03) 1px, transparent 1px)","backgroundSize":"4rem 4rem","zIndex":"0"} as any}></div>
    
    <div style={{"maxWidth":"1400px","margin":"0 auto","width":"100%","padding":"0 4%","position":"relative","zIndex":"10","display":"grid","gridTemplateColumns":"1.2fr 1fr","gap":"60px","alignItems":"center"} as any} className="reveal">
        <div>
            <div style={{"display":"inline-block","padding":"8px 24px","background":"rgba(59,130,246,0.1)","border":"1px solid rgba(59,130,246,0.2)","color":"#2563EB","borderRadius":"100px","fontSize":"0.9rem","fontWeight":"800","letterSpacing":"2px","marginBottom":"30px"} as any}>
                PREMIUM PUBLISHING
            </div>
            <h1 style={{"fontSize":"clamp(3.5rem, 5vw, 5rem)","fontWeight":"900","color":"#0F172A","lineHeight":"1.15","letterSpacing":"-2px","marginBottom":"24px"} as any}>
                대치동 20년 현장을<br/>
                <span style={{"background":"linear-gradient(135deg, #2563EB, #7C3AED)","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent"} as any}>완벽히 텍스트에 담다.</span>
            </h1>
            <p style={{"fontSize":"1.25rem","color":"#475569","maxWidth":"600px","lineHeight":"1.6","wordBreak":"keep-all","fontWeight":"500","marginBottom":"40px"} as any}>
                압도적인 깊이의 원서형 독해와 빈틈없는 어휘 로드맵.<br/>최상의 결과를 증명하는 프리미엄 프랜차이즈 전용 특화 교재를 만나보세요.
            </p>
            <div style={{"display":"flex","gap":"16px"} as any}>
                <Link href={"/#about"}  style={{"display":"inline-block","background":"#0F172A","color":"white","padding":"16px 32px","borderRadius":"12px","fontWeight":"700","textDecoration":"none","transition":"all 0.3s","boxShadow":"0 10px 20px rgba(15,23,42,0.15)"} as any}>시스템 알아보기 &darr;</Link>
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







<section style={{"padding":"120px 4%","background":"#F1F5F9","borderBottom":"1px solid #E2E8F0"} as any}>
    <div style={{"textAlign":"center"} as any}>
        <span style={{"fontSize":"0.85rem","fontWeight":"800","color":"#3B82F6","letterSpacing":"2px","margin":"0 auto 12px","display":"block"} as any}>KNS INFRASTRUCTURE</span>
        <h2 style={{"fontSize":"3rem","fontWeight":"900","color":"#0F172A","letterSpacing":"-1.5px"} as any}>가장 완벽한 학원 운영 생태계</h2>
    </div>

    <div className="bento-container reveal">
        
        
        <div className="bento-card bento-wide">
            <div style={{"display":"flex","justifyContent":"space-between","alignItems":"flex-start","marginBottom":"24px"} as any}>
                <div className="b-icon b-purple">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
                </div>
                
                <div style={{"width":"120px","height":"60px","background":"linear-gradient(90deg, #F3F4F6, #E5E7EB)","borderRadius":"16px","opacity":"0.5"} as any}></div>
            </div>
            <h3 style={{"fontSize":"1.8rem","fontWeight":"800","color":"#0F172A","marginBottom":"12px","letterSpacing":"-0.5px"} as any}>교재 출판 & 퍼블리싱 센터</h3>
            <p style={{"color":"#64748B","fontSize":"1.05rem","lineHeight":"1.6","maxWidth":"80%"} as any}>초정밀 콘텐츠 기획 및 조판. 매년 수능과 최상위 내신의 최신 기출 트렌드를 즉시 교재 라인업에 반영하는 거대한 지식 공장입니다.</p>
        </div>

        
        <div className="bento-card bento-tall bento-dark">
            <div className="b-icon" style={{"background":"rgba(255,255,255,0.1)","color":"#60A5FA"} as any}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <h3 style={{"fontSize":"1.8rem","fontWeight":"800","marginBottom":"12px","letterSpacing":"-0.5px"} as any}>디지털 R&D 허브</h3>
            <p style={{"color":"#94A3B8","fontSize":"1.05rem","lineHeight":"1.6","marginBottom":"40px"} as any}>누적된 오답률 데이터를 분석해 치명적 오개념을 선제적으로 방어합니다.</p>
            
            
            <div style={{"marginTop":"auto","padding":"20px","background":"rgba(0,0,0,0.2)","borderRadius":"20px","border":"1px solid rgba(255,255,255,0.05)"} as any}>
                <div style={{"display":"flex","justifyContent":"space-between","marginBottom":"12px"} as any}>
                    <span style={{"fontSize":"0.85rem","color":"#60A5FA","fontWeight":"700"} as any}>Data Processed</span>
                    <span style={{"fontSize":"0.85rem","color":"#FFFFFF","fontWeight":"700"} as any}>92%</span>
                </div>
                <div style={{"width":"100%","height":"8px","background":"rgba(255,255,255,0.1)","borderRadius":"4px","overflow":"hidden"} as any}>
                    <div style={{"width":"92%","height":"100%","background":"#60A5FA","borderRadius":"4px"} as any}></div>
                </div>
            </div>
        </div>

        
        <div className="bento-card bento-wide">
            <h3 style={{"fontSize":"1.4rem","fontWeight":"800","color":"#0F172A","marginBottom":"8px","letterSpacing":"-0.5px"} as any}>대치동 최상위 선도 20년</h3>
            <p style={{"color":"#64748B","fontSize":"1rem","marginBottom":"30px"} as any}>수백만 시간의 현장 노하우가 집약된 KNS의 발자취</p>
            
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



<section style={{"padding":"100px 4% 140px","background":"#E2E8F0"} as any}>
    <div className="container reveal">
        <div style={{"textAlign":"center","marginBottom":"60px"} as any}>
            <span style={{"fontSize":"0.85rem","fontWeight":"800","color":"#64748B","letterSpacing":"2px","margin":"0 auto 12px","display":"block"} as any}>NEURAL CURRICULUM</span>
            <h2 style={{"fontSize":"2.8rem","fontWeight":"900","color":"#0F172A","letterSpacing":"-1.5px"} as any}>데이터가 직조하는 초정밀 라인업</h2>
            <p style={{"color":"#475569","fontSize":"1.15rem","marginTop":"16px","fontWeight":"500"} as any}>마우스를 올려 영역별 세부 훈련 목표를 확인하세요.</p>
        </div>

        <div className="neural-board">
            
            <div style={{"display":"flex","paddingLeft":"140px","marginBottom":"20px","fontWeight":"800","color":"#60A5FA","fontSize":"0.9rem","textTransform":"uppercase","letterSpacing":"1px","position":"relative","zIndex":"10"} as any}>
                <div style={{"flex":"2","textAlign":"center"} as any}>Beginner (초등)</div>
                <div style={{"flex":"2","textAlign":"center"} as any}>Intermediate (중등)</div>
                <div style={{"flex":"3","textAlign":"center"} as any}>Advanced (특목/대입)</div>
            </div>

            
            
            <div className="nt-track" style={{"--track-color":"#60A5FA"} as any}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#60A5FA"} as any}></div><span style={{"color":"#60A5FA"} as any}>독해 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-pill nt-span-7" style={{"display":"grid","gridTemplateColumns":"repeat(7,1fr)","gap":"4px","padding":"0","background":"transparent","border":"none"} as any}>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.1)","color":"#60A5FA"} as any}>Lv.0</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.15)","color":"#60A5FA"} as any}>Lv.1</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.2)","color":"#93C5FD"} as any}>Lv.2</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.25)","color":"#93C5FD"} as any}>Lv.3</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.3)","color":"#BFDBFE"} as any}>Lv.4</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.4)","color":"#DBEAFE"} as any}>Lv.5</div>
                        <div className="nt-pill nt-span-1" style={{"background":"rgba(96,165,250,0.5)","color":"#FFFFFF","boxShadow":"0 0 15px rgba(96,165,250,0.3)"} as any}>Lv.6</div>
                    </div>
                </div>
            </div>

            
            <div className="nt-track" style={{"--track-color":"#A855F7"} as any}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#A855F7"} as any}></div><span style={{"color":"#A855F7"} as any}>문법 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-pill nt-span-2">기본문법</div>
                    <div className="nt-pill nt-span-1">중등내신</div>
                    <div className="nt-pill nt-span-2">고등내신</div>
                    <div className="nt-pill nt-span-2">TEPS 문법</div>
                </div>
            </div>

            
            <div className="nt-track" style={{"--track-color":"#F43F5E"} as any}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#F43F5E"} as any}></div><span style={{"color":"#F43F5E"} as any}>논리 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-span-3"></div>
                    <div className="nt-pill nt-span-4" style={{"background":"rgba(244,63,94,0.15)","borderColor":"rgba(244,63,94,0.3)","color":"#FDA4AF"} as any}>수능 고난도 빈칸 추론 & GRE 기반 논리 분석</div>
                </div>
            </div>

            
            <div className="nt-track" style={{"--track-color":"#10B981"} as any}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#10B981"} as any}></div><span style={{"color":"#10B981"} as any}>구문 파이프라인</span></div>
                <div className="nt-glow-line"></div>
                <div className="nt-bar-container">
                    <div className="nt-span-1"></div>
                    <div className="nt-pill nt-span-5" style={{"background":"rgba(16,185,129,0.15)","borderColor":"rgba(16,185,129,0.3)","color":"#6EE7B7"} as any}>복잡 구조 집중 구조화 훈련</div>
                    <div className="nt-span-1"></div>
                </div>
            </div>

            
            <div className="nt-track" style={{"--track-color":"#F59E0B"} as any}>
                <div className="nt-label"><div className="nt-label-dot" style={{"background":"#F59E0B"} as any}></div><span style={{"color":"#F59E0B"} as any}>어휘 파이프라인</span></div>
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
    <div style={{"maxWidth":"1200px","margin":"0 auto","position":"relative","zIndex":"10","textAlign":"center"} as any}>
        <div className="santa-title-badge">AI Data-Driven Education</div>
        <h2 className="santa-main-title">
            <span style={{"color":"#0F172A"} as any}>대치동 20년 현장 노하우,</span><br/>
            <span className="santa-gradient-text">이제 압도적 에듀테크 솔루션으로.</span>
        </h2>
        <p style={{"fontSize":"1.15rem","color":"#475569","maxWidth":"700px","margin":"0 auto","lineHeight":"1.7","wordBreak":"keep-all","fontWeight":"500"} as any}>
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


<section style={{"padding":"140px 4%","background":"#040B16","borderTop":"1px solid rgba(255,255,255,0.05)","position":"relative","overflow":"hidden"} as any}>
    
    <div style={{"position":"absolute","inset":"0","backgroundImage":"linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)","backgroundSize":"50px 50px","zIndex":"0","pointerEvents":"none"} as any}></div>
    
    <div style={{"textAlign":"center","marginBottom":"80px","position":"relative","zIndex":"10"} as any} className="reveal">
        <span style={{"fontSize":"0.85rem","fontWeight":"800","color":"#60A5FA","letterSpacing":"2px","marginBottom":"12px","display":"inline-block","padding":"6px 16px","borderRadius":"100px","background":"rgba(96,165,250,0.1)"} as any}>ENTER THE HUB</span>
        <h2 style={{"fontSize":"3rem","fontWeight":"900","color":"#FFFFFF","letterSpacing":"-1px"} as any}>성공적인 학원 운영을 위한<br/>단 하나의 통합 생태계</h2>
    </div>

    <div className="holo-grid reveal">
        
        <a className="holo-card" href="/anthology" style={{"--hc-color":"rgba(59,130,246,0.8)","--hc-glow":"rgba(59,130,246,0.2)"} as any}>
            <div className="hc-content">
                <div className="hc-visual"><img src="/images/anthology_L6.png" alt="Anthology" /></div>
                <div>
                    <h3 className="hc-title">Anthology <span style={{"fontSize":"1rem","color":"#60A5FA","fontWeight":"600","verticalAlign":"middle","border":"1px solid #60A5FA","padding":"2px 8px","borderRadius":"6px","marginLeft":"8px"} as any}>독해</span></h3>
                    <p className="hc-desc">원서부터 수능 기출까지, 가장 완벽한 논리 전개 훈련. 학년이 아닌 철저한 평가 레벨 중심의 7단계 도약 프로그램입니다.</p>
                    <div className="hc-arrow">커리큘럼 보기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>

        
        <a className="holo-card" href="/sudanbi" style={{"--hc-color":"rgba(16,185,129,0.8)","--hc-glow":"rgba(16,185,129,0.2)"} as any}>
            <div className="hc-content">
                <div className="hc-visual"><img src="/images/sudanbi_green.png" alt="Sudanbi" /></div>
                <div>
                    <h3 className="hc-title">Sudanbi <span style={{"fontSize":"1rem","color":"#34D399","fontWeight":"600","verticalAlign":"middle","border":"1px solid #34D399","padding":"2px 8px","borderRadius":"6px","marginLeft":"8px"} as any}>어휘</span></h3>
                    <p className="hc-desc">문맥 추론과 어원 학습의 극의. 내신 1등급과 수능 만점을 위한 압도적 강도의 프리미엄 어휘 마스터 클래스입니다.</p>
                    <div className="hc-arrow">어휘 로드맵 보기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>

        
        <a className="holo-card" href="/katch" style={{"--hc-color":"rgba(168,85,247,0.8)","--hc-glow":"rgba(168,85,247,0.2)"} as any}>
            <div className="hc-content">
                <div className="hc-visual">
                    <div style={{"width":"120px","height":"120px","background":"linear-gradient(135deg, #60A5FA, #A855F7)","borderRadius":"24px","border":"2px solid rgba(255,255,255,0.2)","color":"white","display":"flex","alignItems":"center","justifyContent":"center","fontSize":"4rem","fontWeight":"900","boxShadow":"0 20px 40px rgba(0,0,0,0.5)"} as any}>K</div>
                </div>
                <div>
                    <h3 className="hc-title">KATCH Platform <span style={{"fontSize":"1rem","color":"#A855F7","fontWeight":"600","verticalAlign":"middle","border":"1px solid #A855F7","padding":"2px 8px","borderRadius":"6px","marginLeft":"8px"} as any}>SaaS</span></h3>
                    <p className="hc-desc">원장 전용 차세대 B2B 솔루션. 레벨테스트, 실시간 수강생 오답률 취합, 문제은행 생성 및 AI 경영 리포트를 제공합니다.</p>
                    <div className="hc-arrow">플랫폼 접속하기 <span>&rarr;</span></div>
                </div>
            </div>
        </a>
    </div>
</section>
</div>
    </main>

    <footer id="contact" style={{"background":"#F8FAFC","color":"#94a3b8","padding":"100px 4% 60px","borderTop":"1px solid rgba(255,255,255,0.05)","position":"relative","overflow":"hidden","marginTop":"80px"} as any}>
        <div style={{"position":"absolute","bottom":"-200px","right":"-200px","width":"600px","height":"600px","background":"radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)","borderRadius":"50%","pointerEvents":"none"} as any}></div>
        <div className="container" style={{"maxWidth":"1400px","margin":"0 auto","position":"relative","zIndex":"10"} as any}>
            <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit, minmax(250px, 1fr))","gap":"60px","marginBottom":"80px"} as any}>
                <div>
                    <h2 style={{"color":"#fff","fontSize":"1.8rem","fontWeight":"900","marginBottom":"20px","letterSpacing":"-0.5px","fontFamily":"'Inter', sans-serif"} as any}>
                        KNS BOOKS<span style={{"color":"#3B82F6"} as any}>.</span>
                    </h2>
                    <p style={{"lineHeight":"1.8","marginBottom":"30px","wordBreak":"keep-all","color":"#64748B"} as any}>
                        대한민국 1% 최상위권 교육의 기준. 대치동 20년의 압도적 노하우를 집대성한 B2B 프리미엄 평가 및 리소스 플랫폼입니다.
                    </p>
                </div>
                <div>
                    <h4 style={{"color":"#fff","fontSize":"1.1rem","fontWeight":"700","marginBottom":"25px"} as any}>Brand Portfolio</h4>
                    <ul style={{"listStyle":"none","padding":"0"} as any}>
                        <li style={{"marginBottom":"16px"} as any}><Link href={"/anthology"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"} as any}>수능 앤솔로지 (7단계 독해)</Link></li>
                        <li style={{"marginBottom":"16px"} as any}><Link href={"/sudanbi"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"} as any}>수단비 (프리미엄 어휘)</Link></li>
                        <li style={{"marginBottom":"16px"} as any}><Link href={"/katch"}  style={{"color":"#94a3b8","textDecoration":"none","transition":"color 0.3s"} as any}>KATCH (통합 평가 시스템)</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{"color":"#fff","fontSize":"1.1rem","fontWeight":"700","marginBottom":"25px"} as any}>Partnership</h4>
                    <ul style={{"listStyle":"none","padding":"0"} as any}>
                        <li style={{"marginBottom":"16px","color":"#64748B"} as any}>제휴 문의 <br/><span style={{"color":"#e2e8f0","fontWeight":"600"} as any}>02-555-5555</span></li>
                        <li style={{"marginBottom":"16px","color":"#64748B"} as any}>이메일 상담 <br/><span style={{"color":"#3B82F6"} as any}>b2b@knsbooks.co.kr</span></li>
                        <li style={{"color":"#64748B"} as any}>본사 주소 <br/>서울특별시 강남구 대치동</li>
                    </ul>
                </div>
            </div>
            <div style={{"paddingTop":"40px","borderTop":"1px solid rgba(255,255,255,0.05)","display":"flex","flexWrap":"wrap","justifyContent":"space-between","alignItems":"center","gap":"20px","fontSize":"0.9rem","color":"#64748B"} as any}>
                <div><p>&copy; 2026 KNS BOOKS. All Rights Reserved.</p></div>
                <div style={{"display":"flex","gap":"30px"} as any}><span style={{"cursor":"pointer"} as any}>이용약관</span><span style={{"cursor":"pointer"} as any}>개인정보처리방침</span></div>
            </div>
        </div>
    </footer>

    

    </main>
  );
}
