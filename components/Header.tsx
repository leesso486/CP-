"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled || pathname === '/katch' ? 'scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href="/" className="logo">
          Anthology <span style={{ color: "var(--color-primary-light)" }}>by KNS EDU</span>
        </Link>
        <nav className="nav">
          <ul className="nav__links" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li><Link href="/" className={pathname === '/' ? 'active' : ''}>KNS 20년</Link></li>
            <li><Link href="/anthology" className={pathname === '/anthology' ? 'active' : ''}>수능 앤솔로지</Link></li>
            <li><Link href="/sudanbi" className={pathname === '/sudanbi' ? 'active' : ''}>수단비</Link></li>
            <li><Link href="/katch" className={pathname === '/katch' ? 'active' : ''}>KATCH</Link></li>
          </ul>
        </nav>
        <a href="#contact" className="btn btn--primary header__cta">제휴 및 도입 문의</a>
      </div>
    </header>
  );
}
