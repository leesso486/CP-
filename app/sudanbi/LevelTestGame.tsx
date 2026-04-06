"use client";
import React, { useState, useEffect } from 'react';

// 단어 DB (Pre-Test A, B 혼합)
const ALL_WORDS = [
  // Pre-Test A
  { en: 'effect', ko: '효과, 영향' },
  { en: 'process', ko: '과정, 처리하다' },
  { en: 'response', ko: '응답, 반응' },
  { en: 'various', ko: '다양한, 여러 가지의' },
  { en: 'attitude', ko: '태도, 사고방식' },
  { en: 'observe', ko: '관찰하다, 준수하다' },
  { en: 'issue', ko: '문제, 쟁점' },
  { en: 'reveal', ko: '드러내다' },
  { en: 'current', ko: '현재의, 흐름' },
  { en: 'feature', ko: '특징' },
  { en: 'interaction', ko: '상호작용' },
  { en: 'moral', ko: '도덕적인' },
  { en: 'concept', ko: '개념' },
  { en: 'perspective', ko: '관점, 전망' },
  { en: 'consequence', ko: '결과, 중요성' },
  { en: 'accurate', ko: '정확한, 정밀한' },
  { en: 'consistent', ko: '일관된, 변함없는' },
  { en: 'diversity', ko: '다양성' },
  { en: 'permanent', ko: '영구적인' },
  
  // Pre-Test B
  { en: 'ingredient', ko: '재료, 구성요소' },
  { en: 'devote', ko: '헌신하다' },
  { en: 'resistance', ko: '저항, 반대' },
  { en: 'excessive', ko: '지나친' },
  { en: 'composition', ko: '구성, 작품' },
  { en: 'admire', ko: '감탄하다' },
  { en: 'reputation', ko: '평판, 명성' },
  { en: 'acknowledge', ko: '인정하다' },
  { en: 'deliberate', ko: '심사숙고하다, 고의적인' },
  { en: 'hypothesis', ko: '가설, 추정' },
  { en: 'reservation', ko: '예약, 의구심' },
  { en: 'endure', ko: '견디다' },
  { en: 'isolation', ko: '고립' },
  { en: 'genuine', ko: '진짜의, 진실한' },
  { en: 'manipulate', ko: '조작하다' },
  { en: 'subtle', ko: '미묘한' },
  { en: 'declare', ko: '선언하다' },
  { en: 'consciousness', ko: '의식' },
  { en: 'molecule', ko: '분자' },
  { en: 'submission', ko: '항복, 제출' }
];

export default function LevelTestGame() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'result' | 'leaderboard'>('start');
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 랜덤으로 배열 섞기
  const shuffle = (array: any[]) => array.sort(() => 0.5 - Math.random());

  // 게임 시작 시 문제 10개 세팅
  const startGame = () => {
    const shuffledWords = shuffle([...ALL_WORDS]);
    const selectedWords = shuffledWords.slice(0, 10);
    
    const generatedQuestions = selectedWords.map((word) => {
      // 오답 보기 3개 추출
      const wrongAnswers = shuffle(
        ALL_WORDS.filter(w => w.en !== word.en).map(w => w.ko)
      ).slice(0, 3);
      
      const options = shuffle([word.ko, ...wrongAnswers]);
      
      return {
        word: word.en,
        correct: word.ko,
        options
      };
    });

    setQuestions(generatedQuestions);
    setScore(0);
    setCurrentIndex(0);
    setGameState('playing');
  };

  const handleAnswer = (selectedOption: string) => {
    const currentQ = questions[currentIndex];
    if (selectedOption === currentQ.correct) {
      setScore(prev => prev + 1);
    }

    if (currentIndex < 9) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setGameState('result');
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!email) return;
    setIsSubmitting(true);
    
    // 이메일 제출 페이크 딜레이
    setTimeout(() => {
      setIsSubmitting(false);
      setGameState('leaderboard');
    }, 800);
  };

  const getResultBadge = () => {
    if (score >= 8) return { level: '실력편', color: '#8B5CF6', text: '상위 10% 최상위권의 정점! 만점을 향한 어휘 학습이 필요합니다.' };
    if (score >= 6) return { level: '핵심편', color: '#3B82F6', text: '꾸준한 1등급의 뼈대를 세워야 할 때! 고빈출 핵심 어휘에 집중하세요.' };
    return { level: '필수편', color: '#10B981', text: '수능 영어의 첫 단추! 흔들림 없는 기본기를 위한 필수 어휘부터 시작하세요.' };
  };

  // ---------------- UI 파트 ----------------
  
  if (gameState === 'start') {
    return (
      <section style={{ padding: '80px 4%', background: '#F8FAFC', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '30px', padding: '60px 40px', maxWidth: '800px', width: '100%', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
          
          <div style={{ position: 'relative', zIndex: 10 }}>
            <span style={{ display: 'inline-block', color: '#3B82F6', fontWeight: 800, background: '#EFF6FF', padding: '10px 24px', borderRadius: '40px', marginBottom: '20px', letterSpacing: '1px' }}>
              MINI GAME
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-1px' }}>
              나의 수능 어휘력은 전국 몇 등일까?
            </h2>
            <p style={{ fontSize: '1.2rem', color: '#64748B', marginBottom: '40px', lineHeight: '1.6' }}>
              과거 수능 모의고사에 출제되었던 <b>Pre-Test 데이터</b>를 기반으로 한<br/>
              10개의 단어를 맞추고, 나의 정확한 레벨을 확인해보세요.
            </p>
            
            <button 
              onClick={startGame}
              style={{ background: 'linear-gradient(135deg, #10B981, #059669)', color: 'white', padding: '20px 60px', borderRadius: '50px', fontSize: '1.3rem', fontWeight: 800, border: 'none', cursor: 'pointer', boxShadow: '0 10px 25px rgba(16,185,129,0.3)', transition: 'all 0.3s' }}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(16,185,129,0.4)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(16,185,129,0.3)'; }}
            >
              레벨 진단 테스트 시작하기 (1분)
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (gameState === 'playing') {
    const q = questions[currentIndex];
    const progress = ((currentIndex) / 10) * 100;

    return (
      <section style={{ padding: '80px 4%', background: '#F8FAFC', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '30px', padding: '50px', maxWidth: '800px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#94A3B8' }}>Question {currentIndex + 1} / 10</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#10B981' }}>현재 점수: {score}점</span>
          </div>

          {/* Progress Bar */}
          <div style={{ width: '100%', height: '8px', background: '#F1F5F9', borderRadius: '10px', marginBottom: '50px', overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: '#10B981', transition: 'width 0.4s ease-out' }}></div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h3 style={{ fontSize: '3.5rem', fontWeight: 900, color: '#0F172A', letterSpacing: '1px', textShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              {q.word}
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {q.options.map((opt: string, i: number) => (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                style={{ background: '#F8FAFC', border: '2px solid #E2E8F0', padding: '24px', borderRadius: '16px', fontSize: '1.25rem', fontWeight: 700, color: '#475569', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'center' }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor = '#3B82F6'; e.currentTarget.style.color = '#1E293B'; e.currentTarget.style.background = '#EFF6FF'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = '#F8FAFC'; }}
              >
                {opt}
              </button>
            ))}
          </div>

        </div>
      </section>
    );
  }

  if (gameState === 'result') {
    const badge = getResultBadge();
    return (
      <section style={{ padding: '80px 4%', background: '#F8FAFC', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '30px', padding: '60px', maxWidth: '800px', width: '100%', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
          
          <div style={{ fontSize: '5rem', marginBottom: '10px' }}>🎯</div>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>테스트 완료!</h2>
          <div style={{ fontSize: '4rem', fontWeight: 900, color: badge.color, marginBottom: '20px' }}>
            {score * 10}점
          </div>

          <div style={{ background: '#F8FAFC', border: `2px solid ${badge.color}40`, borderRadius: '20px', padding: '30px', marginBottom: '40px' }}>
            <span style={{ display: 'inline-block', background: badge.color, color: 'white', padding: '8px 20px', borderRadius: '30px', fontWeight: 800, marginBottom: '15px' }}>
              수단비 {badge.level} 추천
            </span>
            <p style={{ fontSize: '1.2rem', color: '#475569', fontWeight: 600, lineHeight: '1.6', margin: 0 }}>
              {badge.text}
            </p>
          </div>

          <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0F172A', marginBottom: '15px' }}>주간 랭킹에 내 점수 등록하기</h3>
            <p style={{ color: '#64748B', marginBottom: '25px' }}>이메일을 입력하고 내가 전국 상위 몇 %인지 확인하세요!</p>
            
            <form onSubmit={handleEmailSubmit} style={{ display: 'flex', gap: '15px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
              <input 
                type="email" 
                required 
                placeholder="이메일을 입력해주세요" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, padding: '16px 24px', borderRadius: '12px', border: '2px solid #E2E8F0', fontSize: '1.1rem', outline: 'none' }}
                onFocus={(e) => e.target.style.borderColor = '#10B981'}
                onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                style={{ background: '#0F172A', color: 'white', fontWeight: 800, padding: '0 30px', borderRadius: '12px', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer', fontSize: '1.1rem' }}
              >
                {isSubmitting ? '등록 중...' : '순위 확인'}
              </button>
            </form>
          </div>

        </div>
      </section>
    );
  }

  if (gameState === 'leaderboard') {
    // 목업 데이터
    const mockRankings = [
      { rank: 1, email: 'sky***@gmail.com', score: 100, badge: '🥇' },
      { rank: 2, email: 'kns_***@naver.com', score: 100, badge: '🥈' },
      { rank: 3, email: 'jh9***@daum.net', score: 90, badge: '🥉' },
      { rank: 142, email: email, score: score * 10, badge: '⭐' }, // 본인 (가짜 등수)
    ];

    return (
      <section style={{ padding: '80px 4%', background: '#F8FAFC', display: 'flex', justifyContent: 'center' }}>
        <div style={{ background: '#FFFFFF', borderRadius: '30px', padding: '60px', maxWidth: '800px', width: '100%', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', border: '1px solid #E2E8F0' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ display: 'inline-block', color: '#F59E0B', fontWeight: 800, background: '#FEF3C7', padding: '10px 24px', borderRadius: '40px', marginBottom: '15px' }}>
              🏆 주간 명예의 전당
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A' }}>실시간 전국 랭킹 보드</h2>
          </div>

          <div style={{ background: '#F8FAFC', borderRadius: '20px', overflow: 'hidden', border: '1px solid #E2E8F0' }}>
            {/* Header */}
            <div style={{ display: 'flex', padding: '20px', background: '#0F172A', color: 'white', fontWeight: 800 }}>
              <div style={{ width: '80px', textAlign: 'center' }}>순위</div>
              <div style={{ flex: 1 }}>참여자</div>
              <div style={{ width: '100px', textAlign: 'center' }}>점수</div>
            </div>
            
            {/* Rows */}
            {mockRankings.map((u, i) => {
              const isMe = u.email === email;
              return (
                <div key={i} style={{ display: 'flex', padding: '20px', borderBottom: i !== mockRankings.length -1 ? '1px solid #E2E8F0' : 'none', alignItems: 'center', background: isMe ? '#F0FDF4' : 'transparent', fontWeight: isMe ? 800 : 600 }}>
                  <div style={{ width: '80px', textAlign: 'center', fontSize: '1.2rem', color: isMe ? '#10B981' : '#475569' }}>
                    {u.badge} {u.rank}
                  </div>
                  <div style={{ flex: 1, color: isMe ? '#10B981' : '#1E293B', fontSize: '1.1rem' }}>
                    {u.email}
                    {isMe && <span style={{ marginLeft: '10px', fontSize: '0.8rem', background: '#10B981', color: 'white', padding: '4px 8px', borderRadius: '10px', verticalAlign: 'middle' }}>ME</span>}
                  </div>
                  <div style={{ width: '100px', textAlign: 'center', fontSize: '1.2rem', color: isMe ? '#10B981' : '#0F172A', fontWeight: 800 }}>
                    {u.score}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={() => setGameState('start')}
              style={{ background: 'transparent', color: '#64748B', fontWeight: 800, padding: '15px 30px', borderRadius: '12px', border: '2px solid #E2E8F0', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981'; }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.color = '#64748B'; }}
            >
              다시 도전하기
            </button>
          </div>

        </div>
      </section>
    );
  }

  return null;
}
