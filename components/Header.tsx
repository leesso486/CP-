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
    <header className={`header ${isScrolled || pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container header__inner" style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" className="logo" style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.5px', textDecoration: 'none' }}>
          KNS BOOKS<span style={{ color: '#3B82F6' }}>.</span>
        </Link>
        <nav className="nav">
          <ul className="nav__links" style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }}>
            <li><Link href="/#about" style={{ fontSize: '0.95rem', fontWeight: 600, color: pathname === '/about' ? '#0F172A' : '#64748B', textDecoration: 'none', transition: 'color 0.3s' }}>ABOUT KNS</Link></li>
            <li><Link href="/anthology" style={{ fontSize: '0.95rem', fontWeight: 600, color: pathname === '/anthology' ? '#0F172A' : '#64748B', textDecoration: 'none', transition: 'color 0.3s' }}>수능 앤솔로지</Link></li>
            <li><Link href="/sudanbi" style={{ fontSize: '0.95rem', fontWeight: 600, color: pathname === '/sudanbi' ? '#0F172A' : '#64748B', textDecoration: 'none', transition: 'color 0.3s' }}>수단비</Link></li>
            <li><Link href="/katch" style={{ fontSize: '0.95rem', fontWeight: 600, color: pathname === '/katch' ? '#0F172A' : '#64748B', textDecoration: 'none', transition: 'color 0.3s' }}>KATCH 플랫폼</Link></li>
            <li><a href="#contact" style={{ display: 'inline-block', padding: '10px 24px', background: '#3B82F6', color: '#FFFFFF', borderRadius: '30px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', transition: 'all 0.3s', boxShadow: '0 4px 14px rgba(59,130,246,0.3)' }}>도입 및 제휴</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

