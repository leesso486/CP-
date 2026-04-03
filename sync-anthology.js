const fs = require('fs');
const path = require('path');

const anthologyHtmlPath = path.join(__dirname, '..', 'anthology.html');
const indexHtml = fs.readFileSync(anthologyHtmlPath, 'utf8');

// 1. Extract Main Content
const mainRegex = /<main>([\s\S]*?)<\/main>/i;
const mainMatch = indexHtml.match(mainRegex);
let mainHTML = mainMatch ? mainMatch[1] : '';

// 2. Extract Script Content
const scriptRegex = /<script>([\s\S]*?)<\/script>/i;
const scriptMatch = mainHTML.match(scriptRegex);
let scriptContent = scriptMatch ? scriptMatch[1] : '';

// Remove script from HTML
mainHTML = mainHTML.replace(/<script>[\s\S]*?<\/script>/gi, '');

// Clean up HTML for embedding in template literal
mainHTML = mainHTML.replace(/`/g, '\\`');
mainHTML = mainHTML.replace(/\$/g, '\\$');

// Clean up Script for embedding
// Remove document.addEventListener('DOMContentLoaded'...) since we use useEffect
scriptContent = scriptContent.replace(/document\.addEventListener\('DOMContentLoaded', \(\) => {/g, '');
scriptContent = scriptContent.replace(/}\);[\s]*$/g, '');

const pageTsxContent = `"use client";
import React, { useEffect } from 'react';

export default function AnthologyPage() {
  useEffect(() => {
    ${scriptContent}
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: \`${mainHTML}\` }} />
  );
}
`;

const pagePath = path.join(__dirname, 'app', 'anthology', 'page.tsx');
fs.writeFileSync(pagePath, pageTsxContent, 'utf8');
console.log('Successfully wrote to app/anthology/page.tsx');
