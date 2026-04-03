'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DAY_DATA = {
  day: '01',
  words: [
    {
      id: '001',
      word: 'aesthetic',
      pronunciation: "[i:s'θetik]",
      pos: 'adj.',
      synonyms: 'artistic, decorative, tasteful, pleasing',
      antonyms: 'unattractive, unappealing, ugly, unaesthetic',
      stats: { evaluation: 16, yonsei: 149 },
      history: ['25', '24', '22', '19', '18'],
      meanings: [
        {
          num: 1,
          kor: '미학, 미적인, 심미적인',
          eng: 'The classical music reflects his highly unique aesthetic.',
          translation: '그 고전 음악은 그의 매우 독특한 미학을 반영한다.'
        },
        {
          num: 2,
          kor: '미적인 가치',
          eng: 'This modern museum design possesses high aesthetic value.',
          translation: '이 현대적인 박물관 설계는 높은 미적 가치를 지닌다.'
        }
      ]
    },
    {
      id: '002',
      word: 'hemisphere',
      pronunciation: "['hemisfiər]",
      pos: 'n.',
      synonyms: 'half-sphere, half',
      stats: { evaluation: 24, yonsei: 116 },
      history: ['25', '23', '21', '20', '17'],
      meanings: [
        {
          num: 3,
          kor: '반구',
          eng: 'Most of human populations live in the northern hemisphere.',
          translation: '인구의 대부분은 북반구에 거주한다.'
        }
      ]
    },
    {
      id: '003',
      word: 'expectancy',
      pronunciation: "[ik'spektənsi]",
      pos: 'n.',
      synonyms: 'anticipation, prospect, outlook',
      stats: { evaluation: 12, yonsei: 109 },
      history: ['24', '22', '21', '19', '18', '17'],
      meanings: [
        {
          num: 4,
          kor: '예상 수명, 기대, 예상',
          eng: 'Medical advancements have increased human life expectancy.',
          translation: '의학의 발전이 인간의 예상 수명을 증가시켰다.'
        },
        {
          num: 5,
          kor: '기대 속에',
          eng: 'The anxious students waited for the results in expectancy.',
          translation: '그 불안한 학생들은 기대 속에 결과를 기다렸다.'
        }
      ]
    },
    {
      id: '004',
      word: 'individuality',
      pronunciation: "[,indi_vidʒu'æləti]",
      pos: 'n.',
      synonyms: 'uniqueness, distinctiveness, identity, character',
      stats: { evaluation: 14, yonsei: 121 },
      history: ['25', '23', '20', '19'],
      meanings: [
        {
          num: 6,
          kor: '개성, 특성, 개별성',
          eng: 'Smart investors express individuality in their portfolios.',
          translation: '현명한 투자자는 포트폴리오를 통해 개성을 드러낸다.'
        },
        {
          num: 7,
          kor: '살아있는 모든 생명체는',
          eng: 'Every living creature possesses a distinct individuality.',
          translation: '살아있는 모든 생명체는 뚜렷한 개별성을 지닌다.'
        }
      ]
    },
    {
      id: '005',
      word: 'fatigue',
      pronunciation: "[fə'ti:g]",
      pos: 'n. / v.',
      synonyms: 'tiredness, exhaustion, weariness, lethargy',
      antonyms: 'energy, vitality, vigor, liveliness',
      stats: { evaluation: 14, yonsei: 107 },
      history: ['25', '24', '22', '18', '17'],
      meanings: [
        {
          num: 8,
          kor: '피로, 피로감, ~를 피로하게 하다',
          eng: 'Continuous study for the exam causes severe mental fatigue.',
          translation: '시험을 앞두고 계속 공부하면 심각한 정신적 피로가 쌓인다.'
        },
        {
          num: 9,
          kor: '육체로 피로하게 하다',
          eng: 'Designing a complex business survey will fatigue the team.',
          translation: '복잡한 비즈니스 설문조사를 설계하는 일은 팀원들을 피곤하게 할 것이다.'
        }
      ]
    },
    {
      id: '006',
      word: 'subordinate',
      pronunciation: "[sə'bɔ:rdinət]",
      pos: 'n. / adj. / vt.',
      synonyms: 'underling, secondary, subjugate, dominate',
      stats: { evaluation: 12, yonsei: 104 },
      history: ['24', '23', '21', '20', '19'],
      meanings: [
        {
          num: 10,
          kor: '부하 직원, 하급자, ~를 종속시키다, 종속된',
          eng: 'Competent engineers never subordinate safety to schedules.',
          translation: '유능한 엔지니어는 절대 안전을 일정에 종속시키지 않는다.'
        },
        {
          num: 11,
          kor: '종속된 위치',
          eng: 'Short-term gains remain subordinate to long-term strategy.',
          translation: '단기의 이익은 장기 전략에 있어 종속된 채로 남는다.'
        }
      ]
    },
    {
      id: '007',
      word: 'autonomy',
      pronunciation: "[ɔ:'tɑ:nəmi]",
      pos: 'n.',
      synonyms: 'independence, self-rule, sovereignty',
      stats: { evaluation: 14, yonsei: 104 },
      history: ['25', '24', '22', '21', '18', '17'],
      meanings: [
        {
          num: 12,
          kor: '자율성, 자치권',
          eng: 'Employees need high autonomy to boost their productivity.',
          translation: '직원이 생산성을 높이려면 상당한 수준의 자율성이 필요하다.'
        },
        {
          num: 13,
          kor: '정치적 자치권',
          eng: 'The regional government demanded full political autonomy.',
          translation: '지역 정부는 완전한 정치적 자치권을 요구했다.'
        }
      ]
    }
  ]
};

const ALL_YEARS = ['25', '24', '23', '22', '21', '20', '19', '18', '17'];

export default function InteractiveVocabulary() {
  const [hoveredSentence, setHoveredSentence] = useState<number | null>(null);

  return (
    <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', background: '#FFFFFF', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <div style={{ background: '#6D28D9', padding: '20px 40px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <span style={{ fontSize: '1.2rem', color: '#DDD6FE', fontWeight: 600, letterSpacing: '2px' }}>DAY</span>
        <span style={{ fontSize: '3.5rem', color: '#FFFFFF', fontWeight: 900, lineHeight: 1 }}>{DAY_DATA.day}</span>
        <div style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '50px', color: '#FFFFFF', fontWeight: 700, fontSize: '1rem', letterSpacing: '1px' }}>
          실력편 (ADVANCED) 내지 프리뷰
        </div>
      </div>

      {/* Grid Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', padding: '40px' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {DAY_DATA.words.slice(0, 4).map(word => (
            <WordCard key={word.id} word={word} hoveredSentence={hoveredSentence} setHoveredSentence={setHoveredSentence} />
          ))}
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {DAY_DATA.words.slice(4).map(word => (
            <WordCard key={word.id} word={word} hoveredSentence={hoveredSentence} setHoveredSentence={setHoveredSentence} />
          ))}

          {/* Translation Box at Bottom Right */}
          <div style={{ marginTop: 'auto', background: '#F8FAFC', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#64748B', marginBottom: '12px' }}>해석 보드 (문장 호버 시 강조됨)</div>
            <div style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.8, wordBreak: 'keep-all' }}>
              {DAY_DATA.words.flatMap(w => w.meanings).map((m, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    transition: 'all 0.3s',
                    background: hoveredSentence === m.num ? '#FEF08A' : 'transparent',
                    color: hoveredSentence === m.num ? '#000' : 'inherit',
                    padding: hoveredSentence === m.num ? '2px 4px' : '0',
                    borderRadius: '4px',
                    marginRight: '6px'
                  }}
                >
                  <strong style={{ color: '#8B5CF6' }}>{m.num}.</strong> {m.translation}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function WordCard({ word, hoveredSentence, setHoveredSentence }: any) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      
      {/* Top Meta Bar */}
      <div style={{ display: 'flex', alignItems: 'center', background: '#F1F5F9', borderRadius: '12px', padding: '8px 16px', gap: '12px', fontSize: '0.85rem', fontWeight: 700, color: '#475569' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#8B5CF6' }}>평가원</span>
          <span>{word.stats.evaluation}</span>
        </div>
        <div style={{ width: '1px', height: '12px', background: '#CBD5E1' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: '#10B981' }}>연대</span>
          <span>{word.stats.yonsei}</span>
        </div>
        <div style={{ width: '1px', height: '12px', background: '#CBD5E1' }} />
        
        {/* History Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginLeft: 'auto' }}>
            <span style={{ marginRight: '6px', fontSize: '0.8rem', opacity: 0.7 }}>수능평가원</span>
            {ALL_YEARS.map(yr => {
                const isActive = word.history.includes(yr);
                return (
                    <div key={yr} style={{ 
                        width: '20px', height: '20px', 
                        borderRadius: '50%', 
                        background: isActive ? '#8B5CF6' : '#E2E8F0', 
                        color: isActive ? '#FFFFFF' : '#94A3B8',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '0.65rem'
                    }}>
                        '{yr}
                    </div>
                );
            })}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#CBD5E1', marginTop: '6px' }}>
              {word.id}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              {/* Word Title & Pronunciation */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0F172A', letterSpacing: '-1px', margin: 0 }}>{word.word}</h3>
                  <span style={{ fontSize: '1.2rem', color: '#64748B', fontWeight: 500 }}>{word.pronunciation}</span>
              </div>

              {/* Synonyms / Antonyms */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.9rem', color: '#475569', fontWeight: 600 }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#8B5CF6', background: '#EDE9FE', padding: '2px 6px', borderRadius: '4px' }}>유</span>
                      <span>{word.synonyms}</span>
                  </div>
                  {word.antonyms && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <span style={{ color: '#EF4444', background: '#FEE2E2', padding: '2px 6px', borderRadius: '4px' }}>반</span>
                        <span>{word.antonyms}</span>
                    </div>
                  )}
              </div>

              {/* Sentences */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                  {word.meanings.map((m: any) => (
                      <div 
                        key={m.num} 
                        style={{ display: 'flex', gap: '12px', cursor: 'pointer', padding: '8px', borderRadius: '8px', transition: 'background 0.2s', background: hoveredSentence === m.num ? '#F8FAFC' : 'transparent' }}
                        onMouseEnter={() => setHoveredSentence(m.num)}
                        onMouseLeave={() => setHoveredSentence(null)}
                      >
                          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#8B5CF6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800, flexShrink: 0 }}>
                              {m.num}
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>{m.kor}</strong>
                              <span style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.5 }}>
                                  {m.eng}
                              </span>
                          </div>
                      </div>
                  ))}
              </div>

          </div>
      </div>
      
      {/* Divider */}
      <div style={{ height: '1px', background: '#E2E8F0', marginTop: '10px' }} />
    </div>
  );
}
