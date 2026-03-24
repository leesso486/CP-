import React from 'react';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white" style={{ padding: '4rem 0', background: '#0a0f1c' }}>
      <div className="container">
        <div className="footer__inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="footer__brand">
            <h2 className="logo" style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 800 }}>
              Anthology <span style={{ color: '#a0ebd5', fontWeight: 300 }}>by KNS EDU</span>
            </h2>
            <p style={{ marginTop: '0.5rem', color: '#94a3b8' }}>본 사이트는 B2B 전용 학원 제휴 및 프랜차이즈 도입 안내를 위한 페이지입니다.</p>
          </div>
          <div className="footer__copyright" style={{ textAlign: 'right' }}>
            <p style={{ color: '#64748b' }}>&copy; 2026 KNS EDU. All Rights Reserved. | Designed with KATCH & Sudanbi Data.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
