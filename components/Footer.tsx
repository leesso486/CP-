import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0f1c', color: '#94a3b8', padding: '100px 4% 60px', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-200px', right: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)', borderRadius: '50%', pointerEvents: 'none' }}></div>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '80px' }}>
          
          {/* Brand Info */}
          <div>
            <h2 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px', letterSpacing: '-0.5px', fontFamily: 'Inter, sans-serif' }}>
              KNS BOOKS<span style={{ color: '#3B82F6' }}>.</span>
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '30px', wordBreak: 'keep-all', color: '#64748b' }}>
              대한민국 1% 최상위권 교육의 기준. 대치동 20년의 압도적 노하우를 집대성한 B2B 프리미엄 평가 및 리소스 플랫폼입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '25px' }}>Brand Portfolio</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '16px' }}>
                <Link href="/anthology" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }}>
                  수능 앤솔로지 (7단계 독해)
                </Link>
              </li>
              <li style={{ marginBottom: '16px' }}>
                <Link href="/sudanbi" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }}>
                  수단비 (프리미엄 어휘)
                </Link>
              </li>
              <li style={{ marginBottom: '16px' }}>
                <Link href="/katch" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.3s' }}>
                  KATCH (통합 평가 시스템)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700, marginBottom: '25px' }}>Partnership</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '16px', color: '#64748b' }}>
                제휴 문의 <br/><span style={{ color: '#e2e8f0', fontWeight: 600 }}>02-555-5555</span>
              </li>
              <li style={{ marginBottom: '16px', color: '#64748b' }}>
                이메일 상담 <br/>
                <span style={{ color: '#3B82F6' }}>b2b@knsbooks.co.kr</span>
              </li>
              <li style={{ color: '#64748b' }}>
                본사 주소 <br/>
                서울특별시 강남구 대치동
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div style={{ paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', fontSize: '0.9rem', color: '#64748b' }}>
          <div>
            <p>&copy; 2026 KNS BOOKS. All Rights Reserved. Built for Top 1% Innovation.</p>
          </div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>서비스 이용약관</span>
            <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>개인정보처리방침</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
