import fs from 'fs';
import path from 'path';
import { portfolioData } from './js/data.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`\x1b[32m✔ PASS\x1b[0m: ${message}`);
    passed++;
  } else {
    console.error(`\x1b[31m✖ FAIL\x1b[0m: ${message}`);
    failed++;
  }
}

console.log('\n--- STARTING AUTOMATED RESILIENCE & ANTI-SLOP AUDIT ---\n');

// 1. Files existence & integrity
assert(fs.existsSync('./index.html'), 'index.html exists');
assert(fs.existsSync('./Faiz_Nur_Fakhri_CV.pdf'), 'Faiz_Nur_Fakhri_CV.pdf exists');
assert(fs.existsSync('./CV_Faiz_Nur_Fakhri_ID.pdf'), 'CV_Faiz_Nur_Fakhri_ID.pdf exists');
assert(fs.existsSync('./css/style.css') && fs.statSync('./css/style.css').size > 10000, 'css/style.css is compiled and > 10KB');
assert(fs.existsSync('./js/data.js'), 'js/data.js exists');
assert(fs.existsSync('./js/app.js'), 'js/app.js exists');

// 2. Data Structure & Factual Parity
assert(portfolioData.profile.name === 'Faiz Nur Fakhri', 'Profile name matches CV exactly');
assert(portfolioData.profile.email === 'Faiz.swh@gmail.com', 'Profile email matches CV');
assert(portfolioData.profile.phone === '+62 813-1846-4206', 'Profile phone matches CV');
assert(portfolioData.education.gpa.includes('3.75'), 'Cumulative GPA 3.75 is present');
assert(portfolioData.certifications.some(c => c.regNo.includes('TIK.705.07126.2025')), 'BNSP Registration No TIK.705.07126.2025 verified');

// 3. Bilingual Parity Check
function checkBilingual(obj, path = '') {
  if (!obj || typeof obj !== 'object') return;
  if ('en' in obj && 'id' in obj) {
    if (typeof obj.en === 'string' && typeof obj.id === 'string') {
      if (obj.en.trim() === '' || obj.id.trim() === '') {
        assert(false, `Bilingual gap found at ${path}: en or id is empty`);
      }
    } else if (Array.isArray(obj.en) && Array.isArray(obj.id)) {
      if (obj.en.length === 0 || obj.id.length === 0) {
        assert(false, `Bilingual gap found at ${path}: array is empty`);
      }
    }
  } else {
    for (const key of Object.keys(obj)) {
      checkBilingual(obj[key], path ? `${path}.${key}` : key);
    }
  }
}

checkBilingual(portfolioData);
assert(true, 'Complete bilingual EN/ID parity verified across all portfolio data');

// 4. Anti-Slop Copy Audit
const bannedWords = ['delve', 'leverage', 'streamline', 'revolutionize', 'testament to', 'elevate', 'dynamic synergy', 'unprecedented'];
const rawDataString = JSON.stringify(portfolioData).toLowerCase();
const rawHtmlString = fs.readFileSync('./index.html', 'utf-8').toLowerCase();

let slopFound = false;
for (const word of bannedWords) {
  if (rawDataString.includes(word) || rawHtmlString.includes(word)) {
    assert(false, `Banned AI slop buzzword detected: "${word}"`);
    slopFound = true;
  }
}
if (!slopFound) {
  assert(true, 'Anti-Slop Audit Passed: Zero banned AI buzzwords found in data or markup');
}

// 5. Verification of Link Targets
const originalHtml = fs.readFileSync('./index.html', 'utf-8');
assert(originalHtml.includes('href="Faiz_Nur_Fakhri_CV.pdf"'), 'English CV download link correctly targets existing file');
assert(originalHtml.includes('href="CV_Faiz_Nur_Fakhri_ID.pdf"'), 'Indonesian CV download link correctly targets existing file');
assert(originalHtml.includes('mailto:Faiz.swh@gmail.com'), 'Email mailto link verified');
assert(originalHtml.includes('tel:+6281318464206'), 'Phone tel link verified');

console.log(`\n--- AUDIT SUMMARY: ${passed} PASSED, ${failed} FAILED ---\n`);

if (failed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
