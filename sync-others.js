const fs = require('fs');
const path = require('path');

const pages = [
  { htmlFile: 'sudanbi.html', targetDir: ['app', 'sudanbi'] },
  { htmlFile: 'katch.html', targetDir: ['app', 'katch'] }
];

pages.forEach(page => {
  const htmlPath = path.join(__dirname, '..', page.htmlFile);
  if (!fs.existsSync(htmlPath)) {
    console.log(`Skipping ${page.htmlFile} (not found)`);
    return;
  }
  
  let indexHtml = fs.readFileSync(htmlPath, 'utf8');

  // Extract Main Content
  const mainRegex = /<main(?:[^>]*)>([\s\S]*?)<\/main>/i;
  const mainMatch = indexHtml.match(mainRegex);
  let mainHTML = mainMatch ? mainMatch[1] : '';

  if (!mainHTML) {
    console.log(`No <main> found in ${page.htmlFile}`);
    return;
  }

  // Extract Script Content
  let scriptContent = '';
  mainHTML = mainHTML.replace(/<script>([\s\S]*?)<\/script>/gi, (match, p1) => {
    scriptContent += p1 + '\n';
    return ''; // Remove script from HTML
  });

  // Clean up HTML for embedding
  mainHTML = mainHTML.replace(/`/g, '\\`');
  mainHTML = mainHTML.replace(/\$/g, '\\$');

  // Clean up Script for embedding
  scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded', \(\) => {/g, '');
  scriptContent = scriptContent.replace(/}\);[\s]*$/g, '');

  const pageTsxContent = `"use client";
import React, { useEffect } from 'react';

export default function ${page.htmlFile.replace('.html', '').replace(/^\w/, c => c.toUpperCase())}Page() {
  useEffect(() => {
    ${scriptContent}
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: \`${mainHTML}\` }} />
  );
}
`;

  const pagePath = path.join(__dirname, ...page.targetDir, 'page.tsx');
  
  // Ensure directory exists
  fs.mkdirSync(path.join(__dirname, ...page.targetDir), { recursive: true });
  
  fs.writeFileSync(pagePath, pageTsxContent, 'utf8');
  console.log(`Successfully synced ${page.htmlFile} to ${page.targetDir.join('/')}/page.tsx`);
});
