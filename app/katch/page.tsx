"use client";
import React from 'react';

export default function KatchPage() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* 1. KATCH 진단테스트 (Dark Theme) */}
      <section style={{ background: '#0a0f1c', position: 'relative', overflow: 'hidden', padding: '120px 0 80px', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '3px', height: '3px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }}></div>
        <div style={{ position: 'absolute', top: '50%', right: '20%', width: '2px', height: '2px', background: 'white', borderRadius: '50%', boxShadow: '0 0 10px white' }}></div>
        <div style={{ position: 'absolute', top: '70%', left: '30%', width: '4px', height: '4px', background: 'rgba(255,255,255,0.5)', borderRadius: '50%' }}></div>
        
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(139, 92, 246, 0.5)', borderRadius: '30px', padding: '0.5rem 1.5rem', marginBottom: '2rem', background: 'rgba(139, 92, 246, 0.1)' }}>
            <span style={{ fontSize: '1.2rem' }}>📡</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '2px', color: '#c4b5fd' }}>DEEP DIAGNOSTIC CORE</span>
          </div>
          
          <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            <span style={{ color: 'white', textShadow: '0 0 30px rgba(255,255,255,0.4)' }}>KATCH </span> 
            <span style={{ color: '#38bdf8', textShadow: '0 0 40px rgba(56,189,248,0.6)' }}>진단테스트</span>
          </h1>
          
          <p style={{ color: '#94a3b8', fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '3rem' }}>
            20년간 축적된 입시 데이터로 완성한<br/>
            KATCH 학습 진단 시스템!
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '5rem' }}>
            <button style={{ padding: '1rem 2.5rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.3s' }} onMouseOver={e=>e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseOut={e=>e.currentTarget.style.background='transparent'}>
              지금 바로 접수하기 🖋️
            </button>
            <button style={{ padding: '1rem 2.5rem', borderRadius: '30px', border: 'none', background: 'linear-gradient(90deg, #0ea5e9, #6366f1)', color: 'white', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', boxShadow: '0 10px 20px rgba(99,102,241,0.3)', transition: 'all 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
              시험보러 가기 →
            </button>
          </div>
          
          <div style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.8), rgba(30,27,75,0.8))', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '24px', padding: '3rem 2rem', display: 'flex', justifyContent: 'space-around', backdropFilter: 'blur(10px)', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#38bdf8', marginBottom: '0.5rem' }}>20<span style={{ fontSize: '1.5rem', color: 'white' }}>년+</span></div>
              <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem' }}>대치동 교육 노하우</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#38bdf8', marginBottom: '0.5rem' }}>2만<span style={{ fontSize: '1.5rem', color: 'white' }}>건+</span></div>
              <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem' }}>누적 성적 분석 데이터</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#38bdf8', marginBottom: '0.5rem' }}>1000<span style={{ fontSize: '1.5rem', color: 'white' }}>명+</span></div>
              <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem' }}>특목고 합격생 배출</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: '#38bdf8', marginBottom: '0.5rem' }}>95<span style={{ fontSize: '1.5rem', color: 'white' }}>%</span></div>
              <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.9rem' }}>실제 합격생 만족도</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. KATCH 입학 레벨테스트 (Light Theme) */}
      <section style={{ background: '#faf5f5', padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(217, 119, 6, 0.2)', borderRadius: '30px', padding: '0.6rem 2rem', marginBottom: '2.5rem', background: 'white', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '1rem', color: '#d97706' }}>💎</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '2px', color: '#d97706' }}>PLATINUM ADMISSION 2026</span>
          </div>
          
          <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#1e293b', marginBottom: '0.5rem', letterSpacing: '-1.5px' }}>
            최상위 1%를 위한 독보적 관문.
          </h2>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, color: '#eab308', marginBottom: '2.5rem', letterSpacing: '-1px' }}>
            KATCH 입학 레벨테스트
          </h2>
          <div style={{ width: '60px', height: '4px', background: '#eab308', margin: '0 auto 2.5rem' }}></div>
          
          <p style={{ color: '#64748b', fontSize: '1.25rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            단순한 레벨 측정이 아닙니다. 대치동 극상위권 데이터를 바탕으로 약점을 정밀하게 해부하고,<br/>단기간에 가장 확실한 성적 도약을 이뤄낼 V.I.P 맞춤 솔루션을 설계합니다.
          </p>
        </div>
      </section>

      {/* 3. 문제은행 UI Mockup (Light Dashboard Theme) */}
      <section style={{ background: '#0f172a', padding: '80px 0', borderTop: '1px solid #1e293b' }}>
        <div className="container text-center mb-5">
          <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>KATCH 강사용 문제은행·시험지 제작</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>학년·시험종류·영역·유형·난이도·출처 필터로 원하는 문항을 즉시 검색하고 시험지를 구성하세요.</p>
        </div>
        
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ background: '#f8fafc', borderRadius: '16px', overflow: 'hidden', display: 'flex', minHeight: '600px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            
            {/* Sidebar */}
            <div style={{ width: '250px', background: 'white', borderRight: '1px solid #e2e8f0', padding: '1.5rem' }}>
              <div style={{ fontWeight: 800, color: '#334155', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#3b82f6' }}>⎈</span> 상세 필터
              </div>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 700, color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>🎓 학년 / 대상</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                  <div><input type="checkbox" className="mr-2"/>고3·N수</div>
                  <div><input type="checkbox" className="mr-2"/>고2</div>
                  <div><input type="checkbox" className="mr-2"/>고1</div>
                  <div><input type="checkbox" className="mr-2"/>중3</div>
                  <div><input type="checkbox" className="mr-2"/>중2</div>
                  <div><input type="checkbox" className="mr-2"/>중1</div>
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 700, color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>📑 시험 종류</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                  <div><input type="checkbox" className="mr-2" defaultChecked/>수능(CSAT)</div>
                  <div><input type="checkbox" className="mr-2"/>6월 모의</div>
                  <div><input type="checkbox" className="mr-2"/>EBS 연계</div>
                  <div><input type="checkbox" className="mr-2"/>사설(KATCH)</div>
                </div>
              </div>
            </div>

            {/* Main Area */}
            <div style={{ flex: 1, padding: '2rem', background: '#f1f5f9' }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <input type="text" placeholder="문항 ID 또는 키워드 검색..." style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                <button style={{ background: '#4f46e5', color: 'white', border: 'none', padding: '0 2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>검색</button>
              </div>

              {/* Problem Card 1 */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', borderLeft: '4px solid #3b82f6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>[고3] 수능</span>
                    <span style={{ background: '#f8fafc', color: '#475569', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>빈칸(구/절)</span>
                    <span style={{ background: '#fee2e2', color: '#dc2626', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>🔥 오답률 88%</span>
                  </div>
                  <span style={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 'bold', background: '#fef2f2', padding: '4px 8px', borderRadius: '12px' }}>난이도 킬러</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>[ID: KNS-2501] · 2024년</div>
                <h4 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 'bold', marginBottom: '1.5rem' }}>다음 빈칸에 들어갈 말로 가장 적절한 것은? (2024 수능 34번)</h4>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #e2e8f0', paddingTop: '1rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.9rem' }}>정답률 12% &nbsp;|&nbsp; 출제 312회</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontSize: '0.9rem', cursor: 'pointer' }}>👁️ 지문</button>
                    <button style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontSize: '0.9rem', cursor: 'pointer' }}>💡 해설</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#ec4899', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer' }}>+ 시험지에 담기</button>
                  </div>
                </div>
              </div>
              
              {/* Problem Card 2 */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', borderLeft: '4px solid #3b82f6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ background: '#eff6ff', color: '#2563eb', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>[고3] 6월</span>
                    <span style={{ background: '#f8fafc', color: '#475569', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>순서배열</span>
                    <span style={{ background: '#fee2e2', color: '#dc2626', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>🔥 오답률 74%</span>
                  </div>
                  <span style={{ color: '#f97316', fontSize: '0.8rem', fontWeight: 'bold', background: '#fff7ed', padding: '4px 8px', borderRadius: '12px' }}>난이도 최상</span>
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>[ID: KNS-2502] · 2024년</div>
                <h4 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: 'bold', marginBottom: '1.5rem' }}>주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은? (2024 6월 모의)</h4>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #e2e8f0', paddingTop: '1rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.9rem' }}>정답률 26% &nbsp;|&nbsp; 출제 198회</div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontSize: '0.9rem', cursor: 'pointer' }}>👁️ 지문</button>
                    <button style={{ padding: '0.5rem 1rem', background: 'white', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontSize: '0.9rem', cursor: 'pointer' }}>💡 해설</button>
                    <button style={{ padding: '0.5rem 1rem', background: '#ec4899', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer' }}>+ 시험지에 담기</button>
                  </div>
                </div>
              </div>

            </div>

            {/* Cart Sidebar */}
            <div style={{ width: '280px', background: 'white', borderLeft: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
              <div style={{ background: '#1e293b', color: 'white', padding: '1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>📋 내 시험지</span>
                <span style={{ background: '#ec4899', padding: '2px 8px', borderRadius: '12px', fontSize: '0.8rem' }}>0 문항</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗃️</div>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>담긴 문제가 없습니다.<br/>좌측에서 문제를 담아주세요.</div>
              </div>
              <div style={{ padding: '1.5rem', borderTop: '1px solid #e2e8f0', background: '#f8fafc' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '0.5rem' }}>시험지 이름</label>
                  <input type="text" placeholder="예: GVR-25년 3월 빈칸 10제" style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569', marginBottom: '1rem' }}>
                  <div style={{ marginBottom: '0.5rem' }}><input type="checkbox" className="mr-2" defaultChecked /> 정답·해설 포함 인쇄</div>
                  <div><input type="checkbox" className="mr-2" /> 학생별 OMR 생성</div>
                </div>
                <button style={{ width: '100%', padding: '1rem', background: '#0f172a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', marginBottom: '0.5rem', cursor: 'pointer' }}>💾 세트로 저장하기</button>
                <button style={{ width: '100%', padding: '1rem', background: 'white', color: '#0f172a', border: '1px solid #cbd5e1', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>🖨️ PDF 즉시 출력</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. VOD 인강 & 5. 교재 스토어 (Light Content) */}
      <section style={{ background: 'white', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          {/* VOD Section */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e293b', marginBottom: '0.5rem' }}>👑 VIP 수능 앤솔로지 VOD</h2>
            <p style={{ color: '#64748b', marginBottom: '3rem', fontSize: '1.1rem' }}>대치동 최상위권의 비밀노트, 수능 앤솔로지 인강 시리즈 📺</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
              
              {/* VOD Card 0 */}
              <div style={{ background: '#ecfeff', borderRadius: '20px', padding: '2rem', textAlign: 'center', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '60px', height: '60px', background: '#0ea5e9', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>0</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>수능 Basic</h3>
                <div style={{ background: '#334155', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontWeight: 'bold' }}>총 12강</div>
              </div>
              
              {/* VOD Card 1 */}
              <div style={{ background: '#fef3c7', borderRadius: '20px', padding: '2rem', textAlign: 'center', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '60px', height: '60px', background: '#f59e0b', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>1</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>세부정보 파악</h3>
                <div style={{ background: '#334155', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontWeight: 'bold' }}>총 15강</div>
              </div>

              {/* VOD Card 2 */}
              <div style={{ background: '#d1fae5', borderRadius: '20px', padding: '2rem', textAlign: 'center', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '60px', height: '60px', background: '#10b981', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>2</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>중심내용 파악</h3>
                <div style={{ background: '#334155', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontWeight: 'bold' }}>총 16강</div>
              </div>

              {/* VOD Card 3 */}
              <div style={{ background: '#ede9fe', borderRadius: '20px', padding: '2rem', textAlign: 'center', position: 'relative', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ width: '60px', height: '60px', background: '#8b5cf6', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem' }}>3</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '2rem' }}>유추 / 수사법</h3>
                <div style={{ background: '#334155', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', position: 'absolute', bottom: '1.5rem', right: '1.5rem', fontWeight: 'bold' }}>총 18강</div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
              <div style={{ paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Level 0: 수능 Basic 전과과정</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>초5하~중1 타겟 🎯</div>
                <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem', background: '#fee2e2', display: 'inline-block', padding: '4px 12px', borderRadius: '20px' }}>200 P 로 1개월 구독</div>
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Level 1: 세부정보 파악 훈련</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>초6하~중2 타겟 🎯</div>
                <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem', background: '#fee2e2', display: 'inline-block', padding: '4px 12px', borderRadius: '20px' }}>250 P 로 1개월 구독</div>
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Level 2: 중심내용 파악 전략</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>초5상~중3 타겟 🎯</div>
                <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem', background: '#fee2e2', display: 'inline-block', padding: '4px 12px', borderRadius: '20px' }}>300 P 로 1개월 구독</div>
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <div style={{ fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>Level 3: 유추 및 수사법 집중</div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '1rem' }}>초5최상~중3상 🎯</div>
                <div style={{ color: '#ef4444', fontWeight: 'bold', fontSize: '0.9rem', background: '#fee2e2', display: 'inline-block', padding: '4px 12px', borderRadius: '20px' }}>350 P 로 1개월 구독</div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '4rem 0' }} />

          {/* Store Section */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e293b', marginBottom: '0.5rem' }}>👑 VIP 교재 스토어 (앤솔로지 시리즈)</h2>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>대치동 최상위권의 비밀노트, 앤솔로지 파생 과제 및 자료입니다.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
              
              {/* Book 1 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', background: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '350px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '12px solid #16a34a' }}>
                  <div style={{ width: '80%', height: '80%', background: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '1rem', fontSize: '0.8rem' }}>필수편 PART 1</div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', lineHeight: '1.2', borderBottom: '2px solid black', paddingBottom: '10px' }}>수능 단어<br/>비밀노트</h3>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>어휘로 푸는 1등급 공식</div>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📘 필수편 (중3~고1)</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>고등 첫 단추, 중학 어휘의 완성</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '80px' }}>고1 3월 모의고사 1등급을 향한 확실한 연결고리. 중3 필수 어휘부터 고1 첫 모의고사를 결정짓는 핵심 어휘로 진입장벽을 낮춥니다.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ef4444' }}>📚 300 P</span>
                  </div>
                  <button style={{ width: '100%', padding: '1rem', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>포인트 구매 (교재배송)</button>
                </div>
              </div>

              {/* Book 2 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', background: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '350px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '12px solid #2563eb' }}>
                  <div style={{ width: '80%', height: '80%', background: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ color: '#2563eb', fontWeight: 'bold', marginBottom: '1rem', fontSize: '0.8rem' }}>핵심편</div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', lineHeight: '1.2', borderBottom: '2px solid black', paddingBottom: '10px' }}>수능 단어<br/>비밀노트</h3>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>어휘로 푸는 1등급 공식</div>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📘 핵심편 (고1~고2)</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>꾸준한 1등급 핵심 뼈대 세우기</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '80px' }}>고1 6월 모의고사 이후 처음 나오는 빈출 어휘 선별. 수능까지 흔들림 없는 1등급을 받기 위한 가장 중요한 핵심 어휘 라인업입니다.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ef4444' }}>📚 350 P</span>
                  </div>
                  <button style={{ width: '100%', padding: '1rem', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>포인트 구매 (교재배송)</button>
                </div>
              </div>

              {/* Book 3 */}
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', overflow: 'hidden', background: 'white', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '350px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderBottom: '12px solid #7c3aed' }}>
                  <div style={{ width: '80%', height: '80%', background: 'white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ color: '#7c3aed', fontWeight: 'bold', marginBottom: '1rem', fontSize: '0.8rem' }}>실력편</div>
                    <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '2rem', lineHeight: '1.2', borderBottom: '2px solid black', paddingBottom: '10px' }}>수능 단어<br/>비밀노트</h3>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>어휘로 푸는 1등급 공식</div>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <div style={{ color: '#7c3aed', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem' }}>📘 실력편 (고2~고3 최상위)</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>수능 만점의 정점, 최고난도 어휘</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '80px' }}>정확하고 안정적인 최상위권을 위한 수능 기출 최고급 어휘 정리! 만점으로 가는 가장 빠른 지름길을 완성합니다.</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: '#ef4444' }}>📚 400 P</span>
                  </div>
                  <button style={{ width: '100%', padding: '1rem', background: '#7c3aed', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>포인트 구매 (교재배송)</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VIP 라운지 (Soft Serif Theme) */}
      <section style={{ background: '#fdfbfb', padding: '150px 0', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(217, 119, 6, 0.2)', borderRadius: '30px', padding: '0.6rem 2rem', marginBottom: '2.5rem', background: '#fef3c7', color: '#b45309' }}>
            <span style={{ fontSize: '1rem' }}>💎</span>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, letterSpacing: '1px' }}>프리미엄 멤버십 전용관</span>
          </div>
          
          <h2 style={{ fontFamily: '"Georgia", serif', fontSize: '6rem', fontWeight: 400, color: '#111827', marginBottom: '0', lineHeight: '1.1' }}>
            The Masterpiece of
          </h2>
          <h2 style={{ fontFamily: '"Georgia", serif', fontSize: '6.5rem', fontWeight: 400, color: '#111827', marginBottom: '2.5rem', lineHeight: '1.1' }}>
            College Admission
          </h2>
          
          <p style={{ color: '#64748b', fontSize: '1.4rem', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto', fontWeight: 500 }}>
            KATCH 최상위권 데이터가 모인 독보적 입시 전략 허브 라운지.<br/>단 1%만을 위해 설계된 프리미엄 정보와 통찰을 경험하세요.
          </p>
        </div>
      </section>

    </div>
  );
}
