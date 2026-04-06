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
      <style dangerouslySetInnerHTML={{ __html: "\n        * { margin: 0; padding: 0; box-sizing: border-box; }\n        body { \n            background: #F8FAFC; color: white; min-height: 100vh; \n            font-family: 'Pretendard', 'Inter', sans-serif; \n            overflow-x: hidden; -webkit-font-smoothing: antialiased;\n        }\n        .container { max-width: 1400px; margin: 0 auto; padding: 0 4%; position: relative; z-index: 10; }\n        \n        /* Unified White Header (Light Mode) */\n        header { \n            position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; \n            padding: 20px 4%; transition: all 0.4s ease; \n            background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.05); \n            border-bottom: 1px solid rgba(0,0,0,0.05); \n        }\n        header.scrolled { padding: 12px 4%; box-shadow: 0 4px 20px rgba(0,0,0,0.05); background: rgba(255,255,255,0.98); }\n        .nav-wrapper { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 1400px; margin: 0 auto; }\n        .logo { font-size: 1.6rem; font-weight: 900; text-decoration: none; color: #0F172A; letter-spacing: -0.5px; font-family: 'Inter', sans-serif; }\n        .logo span { color: #3B82F6; }\n        .nav-links { display: flex; gap: 2.5rem; align-items: center; }\n        .nav-links a { text-decoration: none; color: #64748B; font-weight: 600; font-size: 0.95rem; transition: color 0.3s; }\n        .nav-links a:hover, .nav-links a.active { color: #0F172A; }\n        .btn-partner { \n            display: inline-block; padding: 10px 24px; background: #3B82F6; color: #FFFFFF !important; \n            border-radius: 30px; font-weight: 700; font-size: 0.95rem; \n            transition: all 0.3s; text-decoration: none; border: none; box-shadow: 0 4px 14px rgba(59,130,246,0.3);\n        }\n        .btn-partner:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(59,130,246,0.4); }\n\n        @keyframes pulse { 0% { transform: translate(-50%, -50%) scale(1); } 100% { transform: translate(-50%, -50%) scale(1.3); } }\n        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }\n        \n        main a { text-decoration: none; color: inherit; }\n        @media (max-width: 900px) { .nav-links { display: none; } }\n    \n\n          @keyframes floatBubble { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }\n        \n\n/* Bento & Netflix Gallery Styles */\n.netflix-gallery {\n    display: flex; gap: 40px; overflow-x: auto; padding: 40px 0 80px;\n    scroll-snap-type: x mandatory; scroll-behavior: smooth;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none;  /* Firefox */\n}\n.netflix-gallery::-webkit-scrollbar { display: none; }\n.netflix-card {\n    flex: 0 0 80%; max-width: 700px; scroll-snap-align: center;\n    background: #FFFFFF; border: 1px solid rgba(255,255,255,0.08); border-radius: 32px;\n    padding: 50px; backdrop-filter: blur(20px);\n    display: flex; flex-direction: column; gap: 30px; transition: transform 0.4s;\n}\n.netflix-card:hover { transform: translateY(-10px); border-color: rgba(96,165,250,0.3); box-shadow: 0 40px 80px rgba(0,0,0,0.08); }\n.nc-img-grid {\n    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;\n}\n.nc-img-grid img { width: 100%; height: auto; border-radius: 12px; border: 1px solid #E2E8F0; box-shadow: 0 20px 40px rgba(0,0,0,0.3); transition: transform 0.3s; cursor: pointer; }\n.nc-img-grid img:hover { transform: scale(1.05); }\n\n@media (max-width: 768px) {\n    .netflix-card { flex: 0 0 90%; padding: 30px; }\n    .nc-img-grid { grid-template-columns: 1fr; }\n}\n\n" }} />

    </main>
  );
}
