import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { CheckCircle, XCircle, Trophy, RotateCcw } from 'lucide-react';

const questions = [
  {
    question: 'Which Part of the Indian Constitution contains Fundamental Rights?',
    options: ['Part II', 'Part III', 'Part IV', 'Part V'],
    correct: 1,
  },
  {
    question: 'Article 17 of the Constitution deals with:',
    options: ['Right to Equality', 'Abolition of Untouchability', 'Freedom of Speech', 'Right to Education'],
    correct: 1,
  },
  {
    question: 'Which Article is called the "Heart and Soul" of the Constitution by Dr. Ambedkar?',
    options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
    correct: 3,
  },
  {
    question: 'How many types of writs can the Supreme Court issue under Article 32?',
    options: ['3', '4', '5', '6'],
    correct: 2,
  },
  {
    question: 'Right to Education was added as a Fundamental Right by which Amendment?',
    options: ['42nd Amendment', '44th Amendment', '86th Amendment', '92nd Amendment'],
    correct: 2,
  },
  {
    question: 'Which writ means "Produce the body"?',
    options: ['Mandamus', 'Habeas Corpus', 'Certiorari', 'Quo Warranto'],
    correct: 1,
  },
  {
    question: 'Article 19 guarantees how many freedoms?',
    options: ['4', '5', '6', '7'],
    correct: 2,
  },
  {
    question: 'Fundamental Duties were added by which Amendment?',
    options: ['42nd Amendment', '44th Amendment', '52nd Amendment', '73rd Amendment'],
    correct: 0,
  },
];

function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[200]">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-10px',
            backgroundColor: ['#FF9933', '#138808', '#3b82f6', '#f59e0b', '#ef4444', '#ffffff'][
              Math.floor(Math.random() * 6)
            ],
          }}
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
            x: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 0.5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

export default function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[current].correct) {
      setScore((s) => s + 1);
    }
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
      if (score >= questions.length * 0.7) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      }
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setFinished(false);
  };

  return (
    <SectionWrapper id="quiz" className="bg-gradient-to-b from-transparent via-[#3b82f6]/[0.02] to-transparent">
      <div className="max-w-2xl mx-auto">
        <motion.div className="text-center mb-10">
          <span className="text-[#3b82f6] text-xs tracking-widest uppercase">Test Yourself</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Quiz Time!
          </h2>
          <p className="text-gray-400 text-sm">
            How well do you know your Fundamental Rights?
          </p>
        </motion.div>

        {showConfetti && <Confetti />}

        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div key="quiz" exit={{ opacity: 0, y: -20 }}>
              <GlassCard hover={false}>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-gray-500">
                    Question {current + 1} of {questions.length}
                  </span>
                  <span className="text-xs text-[#3b82f6] font-semibold">
                    Score: {score}
                  </span>
                </div>

                <div className="w-full h-1 bg-white/5 rounded-full mb-6">
                  <motion.div
                    className="h-full bg-[#3b82f6] rounded-full"
                    animate={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>

                <h3 className="text-white text-lg font-semibold mb-6">
                  {questions[current].question}
                </h3>

                <div className="space-y-3">
                  {questions[current].options.map((opt, i) => {
                    const isCorrect = i === questions[current].correct;
                    const isSelected = i === selected;
                    let borderColor = 'border-white/10';
                    let bgColor = 'bg-white/[0.02]';
                    if (showResult) {
                      if (isCorrect) {
                        borderColor = 'border-[#22c55e]/50';
                        bgColor = 'bg-[#22c55e]/10';
                      } else if (isSelected && !isCorrect) {
                        borderColor = 'border-[#ef4444]/50';
                        bgColor = 'bg-[#ef4444]/10';
                      }
                    }

                    return (
                      <motion.button
                        key={i}
                        className={`w-full text-left p-4 rounded-xl border ${borderColor} ${bgColor} transition-all duration-300 flex items-center gap-3`}
                        onClick={() => handleSelect(i)}
                        whileHover={!showResult ? { scale: 1.01, borderColor: 'rgba(59,130,246,0.3)' } : {}}
                        disabled={showResult}
                      >
                        <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 shrink-0">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-gray-300 text-sm flex-1">{opt}</span>
                        {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-[#22c55e] shrink-0" />}
                        {showResult && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-[#ef4444] shrink-0" />}
                      </motion.button>
                    );
                  })}
                </div>

                {showResult && (
                  <motion.div
                    className="mt-6 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <button
                      onClick={nextQuestion}
                      className="px-6 py-2 rounded-full bg-[#3b82f6] text-white text-sm font-medium hover:bg-[#2563eb] transition-colors"
                    >
                      {current < questions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                  </motion.div>
                )}
              </GlassCard>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <GlassCard hover={false}>
                <Trophy className="w-16 h-16 text-[#f59e0b] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
                <p className="text-gray-400 mb-4">
                  You scored <span className="text-[#3b82f6] font-bold text-xl">{score}</span> out of{' '}
                  <span className="text-white font-bold text-xl">{questions.length}</span>
                </p>
                <div className="w-full h-3 bg-white/5 rounded-full mb-6 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      width: `${(score / questions.length) * 100}%`,
                      background:
                        score >= questions.length * 0.7
                          ? 'linear-gradient(to right, #22c55e, #16a34a)'
                          : score >= questions.length * 0.4
                          ? 'linear-gradient(to right, #f59e0b, #d97706)'
                          : 'linear-gradient(to right, #ef4444, #dc2626)',
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(score / questions.length) * 100}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-gray-500 text-sm mb-6">
                  {score >= questions.length * 0.7
                    ? 'Excellent! You really know your Fundamental Rights!'
                    : score >= questions.length * 0.4
                    ? 'Good effort! Review the sections above to improve.'
                    : 'Keep learning! Go through the sections again for a better score.'}
                </p>
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Try Again
                </button>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
