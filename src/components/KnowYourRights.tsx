import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { HelpCircle, Eye } from 'lucide-react';

const scenarios = [
  {
    scenario: 'A private school refuses admission to a student because of their caste.',
    answer: 'Right to Equality (Art. 15)',
    explanation: 'Article 15 prohibits discrimination on grounds of caste, race, religion, or sex in access to public places and educational institutions.',
  },
  {
    scenario: 'A factory employs 12-year-old children to work in hazardous conditions.',
    answer: 'Right Against Exploitation (Art. 24)',
    explanation: 'Article 24 prohibits employment of children below 14 years in factories, mines, or hazardous work.',
  },
  {
    scenario: 'A person is arrested and detained for weeks without being told the reason.',
    answer: 'Right to Freedom (Art. 22)',
    explanation: 'Article 22 guarantees protection against arrest and detention -- the person must be informed of grounds of arrest and has the right to consult a lawyer.',
  },
  {
    scenario: 'A state government imposes a tax specifically for funding a particular religion.',
    answer: 'Right to Freedom of Religion (Art. 27)',
    explanation: 'Article 27 prohibits compelling any person to pay taxes for the promotion or maintenance of any particular religion.',
  },
  {
    scenario: 'A linguistic minority wants to start their own school in their mother tongue.',
    answer: 'Cultural & Educational Rights (Art. 30)',
    explanation: 'Article 30 gives minorities the right to establish and administer educational institutions of their choice.',
  },
  {
    scenario: "A citizen's fundamental right is violated and they want to approach the Supreme Court directly.",
    answer: 'Right to Constitutional Remedies (Art. 32)',
    explanation: 'Article 32 allows citizens to move the Supreme Court directly for enforcement of Fundamental Rights through appropriate writs.',
  },
];

export default function KnowYourRights() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const next = new Set(revealed);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setRevealed(next);
  };

  return (
    <SectionWrapper id="know-your-rights">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#f59e0b] text-xs tracking-widest uppercase">Real-Life Scenarios</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Know Your Rights
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Read each scenario and guess which Fundamental Right applies, then reveal the answer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-5 h-5 text-[#f59e0b]" />
                  <span className="text-xs text-gray-500">Scenario {i + 1}</span>
                </div>
                <p className="text-gray-300 text-sm mb-4 flex-1 leading-relaxed">{s.scenario}</p>

                {revealed.has(i) ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-t border-white/5 pt-3"
                  >
                    <p className="text-[#22c55e] font-semibold text-sm mb-1">{s.answer}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.explanation}</p>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => toggle(i)}
                    className="flex items-center gap-2 text-xs text-[#f59e0b] hover:text-[#fbbf24] transition-colors mt-auto"
                  >
                    <Eye className="w-4 h-4" />
                    Reveal Answer
                  </button>
                )}

                {revealed.has(i) && (
                  <button
                    onClick={() => toggle(i)}
                    className="text-xs text-gray-600 hover:text-gray-400 mt-2 transition-colors"
                  >
                    Hide
                  </button>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
