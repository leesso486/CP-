"use client";
import React, { useState } from 'react';

export default function SudanbiPage() {
  const [activeTab, setActiveTab] = useState('drill-1');

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      
      {/* 1. Hero Header */}
      <div style={{ background: 'linear-gradient(135deg, #064e3b 0%, #166534 100%)', color: 'white', padding: '6rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-150px', left: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(74,222,128,0.2) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        <div className="container relative z-10">
          <span style={{ color: '#86efac', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Core Solution 02</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem', textShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>어휘로 푸는 1등급 공식,<br/><span style={{ color: '#4ade80' }}>수단비</span></h1>
          <p style={{ color: '#dcfce7', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>수능 1등급은 '단어의 양'이 아니라 '암기 순서'에서 갈립니다.<br/>데이터 기반 빈출도 1위 어휘 학습 전략.</p>
        </div>
      </div>

      {/* 2. Why Sudanbi (Editorial Style matching Anthology) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            
            <div style={{ background: '#0f172a', padding: '3.5rem', borderRadius: '24px', color: 'white', boxShadow: '0 20px 40px rgba(15,23,42,0.15)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#4ade80', letterSpacing: '2px', marginBottom: '1rem' }}>THE PROBLEM</div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: '1.3' }}>수능에 맞지 않는<br/>광범위한 어휘 암기</h3>
              <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', wordBreak: 'keep-all' }}>
                다양한 난이도의 어휘를 공부하는 것은 중요하지만, 기존 어휘 시장은 수능에 걸맞는 레벨링이 되어있지 않으며 모의고사 전략으로 접근하지 못하고 있습니다. 
                수능 필수단어라는 시중 교재의 수준은 중1에 불과했습니다.
              </p>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #ef4444' }}>
                <strong style={{ color: '#f87171', display: 'block', marginBottom: '0.5rem' }}>Check! 이런 학생에게 필요합니다</strong>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#e2e8f0', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <li>- 단어장은 샀지만 앞부분만 새까만 학생</li>
                  <li>- 아는 단어는 많은데 해석이 안 되는 학생</li>
                  <li>- 당장 점수가 급해 '나올 단어'부터 외워야 하는 학생</li>
                </ul>
              </div>
            </div>

            <div style={{ background: '#f0fdf4', padding: '3.5rem', borderRadius: '24px', color: '#064e3b', boxShadow: '0 20px 40px rgba(6,78,59,0.05)', border: '1px solid #bbf7d0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#16a34a', letterSpacing: '2px', marginBottom: '1rem' }}>THE SOLUTION</div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: '1.3' }}>데이터로 증명하는<br/>압도적 모의고사 정합률</h3>
              <p style={{ color: '#047857', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                수단비는 역대 수능+평가원 데이터를 전수 분석하여, 빈출도가 높은 순서대로 우선순위를 부여한 가장 과학적인 어휘 베이스입니다.
              </p>
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', border: '1px solid #86efac' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>N사 (고교 필수) 일치율</span>
                  <strong style={{ color: '#ef4444' }}>8% (12개)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#64748b', fontWeight: 600 }}>M사 (수능 필수) 일치율</span>
                  <strong style={{ color: '#ef4444' }}>12% (18개)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#16a34a', fontSize: '1.1rem' }}>수단비 (필수편) 일치율</strong>
                  <strong style={{ color: '#16a34a', fontSize: '1.4rem' }}>35% (52개)</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Curriculum Lineup (Books & 3 Steps) */}
      <section className="section-padding bg-slate-50" style={{ borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>프리미엄 전체 라인업 <span style={{ color: '#16a34a' }}>필수 / 핵심 / 실력</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b' }}>학습자의 어휘 수준과 수능 목표 단계에 맞춘 체계적 구성</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {/* Book 1 */}
            <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '20px', borderTop: '6px solid #387550', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <img src="/images/sudanbi_essential.png" alt="필수편" style={{ width: '150px', height: 'auto', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.12)', marginBottom: '1.5rem', display: 'inline-block' }} />
              <h4 style={{ color: '#387550', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 900 }}>필수편 <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>고등 첫 단추</span></h4>
              <p style={{ color: '#475569', fontWeight: 700, marginBottom: '1rem' }}>Target: 중3 ~ 고1</p>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>고1 3월 모의고사 1등급을 향한 첫 관문. 고교 영문 진입장벽을 낮추는 핵심 어휘.</p>
            </div>
            {/* Book 2 */}
            <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '20px', borderTop: '6px solid #4A6C9B', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <img src="/images/sudanbi_core.png" alt="핵심편" style={{ width: '150px', height: 'auto', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.12)', marginBottom: '1.5rem', display: 'inline-block' }} />
              <h4 style={{ color: '#4A6C9B', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 900 }}>핵심편 <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>꾸준한 1등급</span></h4>
              <p style={{ color: '#475569', fontWeight: 700, marginBottom: '1rem' }}>Target: 고1 ~ 고2</p>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>고1 6월 이후 처음 등장하는 빈출 어휘 선별. 수능까지 흔들림 없는 1등급 뼈대 구축.</p>
            </div>
            {/* Book 3 */}
            <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '20px', borderTop: '6px solid #6D5591', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
              <img src="/images/sudanbi_advanced.png" alt="실력편" style={{ width: '150px', height: 'auto', objectFit: 'contain', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.12)', marginBottom: '1.5rem', display: 'inline-block' }} />
              <h4 style={{ color: '#6D5591', fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: 900 }}>실력편 <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>만점의 정점</span></h4>
              <p style={{ color: '#475569', fontWeight: 700, marginBottom: '1rem' }}>Target: 고2 ~ 고3 최상위권</p>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.6', wordBreak: 'keep-all' }}>안정적인 최상위권 도약을 위한 수능 기출 최고난이도 만점 어휘 묶음.</p>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '24px', padding: '3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
            <h4 className="text-center mb-5" style={{ color: '#0f172a', fontSize: '1.8rem', fontWeight: 900 }}>수단비만의 3가지 혁신적 특징</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#e0f2fe', color: '#0284c7', width: '60px', height: '60px', borderRadius: '16px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900 }}>1</div>
                <h5 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>객관적 데이터 분석</h5>
                <p style={{ color: '#64748b', lineHeight: '1.6', wordBreak: 'keep-all', fontSize: '0.95rem' }}>역대 수능 및 2006년 이후 교육청 평가원 데이터를 완벽히 분석하여 방향성을 증명합니다.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#fef9c3', color: '#ca8a04', width: '60px', height: '60px', borderRadius: '16px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900 }}>2</div>
                <h5 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>확실한 빈출 우선순위</h5>
                <p style={{ color: '#64748b', lineHeight: '1.6', wordBreak: 'keep-all', fontSize: '0.95rem' }}>당장 시험에 '나올 단어'부터 앞쪽부터 집중 암기할 수 있도록 빈출도 기반으로 구성됩니다.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ background: '#dcfce7', color: '#16a34a', width: '60px', height: '60px', borderRadius: '16px', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900 }}>3</div>
                <h5 style={{ color: '#0f172a', fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>실전 최적화 (Drill)</h5>
                <p style={{ color: '#64748b', lineHeight: '1.6', wordBreak: 'keep-all', fontSize: '0.95rem' }}>단순 뜻 암기를 넘어 수능 독해로 직결되도록 유추 능력을 훈련하는 압도적 Drill 문항 제공.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Methodology & Interactive Drill 훈련 (Tabs) */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '1rem' }}>어휘력 향상의 마스터키, <span style={{ color: '#16a34a' }}>교재 설계</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b' }}>단어의 평면적 암기에서 벗어나 입체적 문맥 추론을 길러주는 4단계 설계</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {['1. 유추 훈련', '2. 빈칸 적합성', '3. 어법 체화', '4. 마이너스 어휘'].map((t, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(`drill-${i+1}`)}
                style={{
                  padding: '1rem 2rem', border: 'none', borderRadius: '30px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s',
                  background: activeTab === `drill-${i+1}` ? '#16a34a' : '#fff',
                  color: activeTab === `drill-${i+1}` ? 'white' : '#64748b',
                  boxShadow: activeTab === `drill-${i+1}` ? '0 10px 20px rgba(22, 163, 74, 0.2)' : '0 4px 6px rgba(0,0,0,0.05)'
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div style={{ background: 'white', padding: '4rem', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', minHeight: '380px', display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0' }}>
            
            {activeTab === 'drill-1' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out', width: '100%', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#16a34a', marginBottom: '1.5rem' }}>어휘의 확장성 (유추 훈련)</h3>
                  <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>단순 암기를 넘어 생각 구조를 확장하는 훈련으로, 스스로 분석하는 논리적 사고력을 기릅니다.</p>
                </div>
                <div style={{ flex: 1, minWidth: '300px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '2rem' }}>
                  <p style={{ fontWeight: 800, color: '#0f172a', marginBottom: '1rem', fontSize: '1.1rem' }}>21. stress : behavior = ________________ : judgement</p>
                  <ul style={{ listStyle: 'none', paddingLeft: '1rem', color: '#475569', fontSize: '1.05rem', lineHeight: '1.8' }}>
                    <li>a) adaptation</li>
                    <li>b) trait</li>
                    <li style={{ color: '#16a34a', fontWeight: 'bold' }}>c) bias</li>
                    <li>d) respondent</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'drill-2' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out', width: '100%', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#ea580c', marginBottom: '1.5rem' }}>문맥 적합성 (빈칸 훈련)</h3>
                  <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>빈칸에 어떤 종류의 단어가 들어가야 할지 일차적인 논리적 추론 능력을 극대화하여 추론을 강화합니다.</p>
                </div>
                <div style={{ flex: 1, minWidth: '300px', background: '#fffbeb', border: '1px solid #fcd34d', borderRadius: '16px', padding: '2rem' }}>
                  <p style={{ fontWeight: 800, color: '#92400e', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>25. His answer was so _________________ that no one could understand his true intentions.</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', color: '#b45309', fontSize: '1.05rem' }}>
                    <span>a) magnificent</span>
                    <span>b) conservative</span>
                    <span>c) knowledgeable</span>
                    <span style={{ fontWeight: 900, color: '#ea580c' }}>d) ambiguous</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'drill-3' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out', width: '100%', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#2563eb', marginBottom: '1.5rem' }}>어법 개념 체화</h3>
                  <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>예문에서 자동사와 타동사를 명확히 구분하여 문법 개념을 독해로 체화할 수 있게 설계했습니다.</p>
                </div>
                <div style={{ flex: 1, minWidth: '300px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '16px', padding: '2rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#1e3a8a', marginBottom: '1rem' }}>derive</div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <span style={{ background: '#1d4ed8', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '2px' }}>자</span>
                    <div>
                      <span style={{ color: '#1e3a8a', fontWeight: 800, display: 'block' }}>유래하다</span>
                      <span style={{ color: '#64748b', fontStyle: 'italic' }}>The word derives from...</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ background: '#1d4ed8', color: 'white', borderRadius: '6px', padding: '2px 8px', fontSize: '0.8rem', fontWeight: 'bold', marginTop: '2px' }}>타</span>
                    <div>
                      <span style={{ color: '#1e3a8a', fontWeight: 800, display: 'block' }}>~을 끌어내다</span>
                      <span style={{ color: '#64748b', fontStyle: 'italic' }}>We derive energy from the sun...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'drill-4' && (
              <div style={{ animation: 'fadeInUp 0.4s ease-out', width: '100%', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, color: '#7c3aed', marginBottom: '1.5rem' }}>별책 부록 (다양한 테마)</h3>
                  <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.8', marginBottom: '2rem' }}>동작, 소리, 기하, 마이너스 어휘 등 수능에 자주 등장하는 특정 맥락의 어휘를 테마별로 정리합니다.</p>
                </div>
                <div style={{ flex: 1, minWidth: '300px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                    <tbody>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', color: '#64748b', fontWeight: 600 }}>
                        <td style={{ padding: '1rem' }}>테마</td>
                        <td style={{ padding: '1rem' }}>어휘</td>
                        <td style={{ padding: '1rem' }}>의미</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '1rem', color: '#7c3aed', fontWeight: 800 }}>마이너스</td>
                        <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>restrict</td>
                        <td style={{ padding: '1rem', color: '#475569' }}>~을 제한하다</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '1rem', color: '#7c3aed', fontWeight: 800 }}>별사탕</td>
                        <td style={{ padding: '1rem', fontWeight: 700, color: '#0f172a' }}>cognitive</td>
                        <td style={{ padding: '1rem', color: '#475569' }}>인지적인</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
