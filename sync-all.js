const fs = require('fs');
const path = require('path');

const pages = [
  { html: '../index.html', dir: '' },
  { html: '../anthology.html', dir: 'anthology' },
  { html: '../sudanbi.html', dir: 'sudanbi' },
  { html: '../katch.html', dir: 'katch' },
];

pages.forEach(page => {
  const indexPath = path.join(__dirname, page.html);
  if (!fs.existsSync(indexPath)) return;
  const indexHtml = fs.readFileSync(indexPath, 'utf8');

  // 1. Extract styles
  let globalCSS = '';
  const styleRegex = /<style>([\s\S]*?)<\/style>/g;
  let match;
  while ((match = styleRegex.exec(indexHtml)) !== null) {
    globalCSS += match[1] + '\n';
  }

  // Extract Main Content
  const mainRegex = /<body[^>]*>([\s\S]*?)<\/body>/;
  const mainMatch = indexHtml.match(mainRegex);
  let mainHTML = mainMatch ? mainMatch[1] : '';

  // Convert HTML to JSX
  mainHTML = mainHTML.replace(/class=/g, 'className=');
  mainHTML = mainHTML.replace(/<br>/g, '<br/>');
  mainHTML = mainHTML.replace(/<style>[\s\S]*?<\/style>/g, ''); // Remove style blocks
  mainHTML = mainHTML.replace(/<script>[\s\S]*?<\/script>/g, ''); // Remove hardcoded script blocks

  mainHTML = mainHTML.replace(/(['"])images\//g, '$1/images/'); // Convert relative image paths
  // Fix inline styles
  mainHTML = mainHTML.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(s => {
      if (!s.trim()) return;
      let sep = s.indexOf(':');
      if (sep === -1) return;
      let key = s.substring(0, sep);
      let value = s.substring(sep + 1);
      if (!key || !value) return;
      const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      styleObj[camelKey] = value.trim();
    });
    return `style={${JSON.stringify(styleObj)}}`;
  });
  // Clean up a hrefs for Next.js Link
  mainHTML = mainHTML.replace(/<a href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/g, '<Link href={"/$1"} $2>$3</Link>');
  mainHTML = mainHTML.replace(/href={"\/#([^"]+)"}/g, 'href={"/#$1"}');
  mainHTML = mainHTML.replace(/href={"\/(?:index\.html)?"}/g, 'href={"/"}');
  mainHTML = mainHTML.replace(/href={"\/([^"]+)\.html"}/g, 'href={"/$1"}');
  
  // Script loader
  let scriptImport = '';
  if (page.html.includes('sudanbi')) {
      scriptImport = `
    const script = document.createElement('script');
    script.src = "/apply_sudanbi.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch(e){} }
`;
  }

  const pageTsxContent = `"use client";
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
${scriptImport}
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>
      <style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(globalCSS)} }} />
${mainHTML}
    </main>
  );
}
`;

  const outDir = path.join(__dirname, 'app', page.dir);
  if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, {recursive: true}); }
  const pageTsxPath = path.join(outDir, 'page.tsx');
  fs.writeFileSync(pageTsxPath, pageTsxContent);
  console.log(`Synced ${page.html} -> app/${page.dir}/page.tsx`);
});
