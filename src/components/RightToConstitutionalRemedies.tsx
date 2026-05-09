import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { Gavel, ArrowRight, ChevronDown } from 'lucide-react';

const writs = [
  {
    name: 'Habeas Corpus',
    meaning: '"Produce the body"',
    desc: 'A court order requiring a person who has detained another to bring the detainee before the court and prove the detention is lawful.',
    color: '#FF9933',
  },
  {
    name: 'Mandamus',
    meaning: '"We command"',
    desc: 'A judicial writ issued as a command to an inferior court or public authority to perform a duty they are legally obligated to do.',
    color: '#3b82f6',
  },
  {
    name: 'Prohibition',
    meaning: '"To forbid"',
    desc: 'Issued by a higher court to prevent a lower court from exceeding its jurisdiction or usurping jurisdiction it does not possess.',
    color: '#22c55e',
  },
  {
    name: 'Certiorari',
    meaning: '"To be certified"',
    desc: 'Issued by a higher court to quash the order of a lower court or tribunal on grounds of excess jurisdiction or error of law.',
    color: '#f59e0b',
  },
  {
    name: 'Quo Warranto',
    meaning: '"By what authority"',
    desc: 'Issued to inquire into the legality of a person holding a public office. Prevents unlawful assumption of public office.',
    color: '#ef4444',
  },
];

function WritCard({ writ, index }: { writ: typeof writs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassCard className="group">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: `${writ.color}20`, color: writ.color }}
            >
              {writ.name[0]}
            </div>
            <div>
              <h4 className="text-white font-semibold">{writ.name}</h4>
              <p className="text-xs text-gray-500 italic">{writ.meaning}</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 pt-3 border-t border-white/5"
          >
            <p className="text-gray-400 text-sm leading-relaxed">{writ.desc}</p>
          </motion.div>
        )}
      </GlassCard>
    </motion.div>
  );
}

export default function RightToConstitutionalRemedies() {
  return (
    <SectionWrapper id="remedies" className="bg-gradient-to-b from-transparent via-[#FF9933]/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#FF9933] text-xs tracking-widest uppercase">Article 32</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Right to Constitutional Remedies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            The right that makes all other rights enforceable
          </p>
        </motion.div>

        <motion.div
          className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-[#FF9933]/10 to-transparent border border-[#FF9933]/20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Gavel className="w-8 h-8 text-[#FF9933] mx-auto mb-3" />
          <p className="text-white text-lg font-semibold mb-2">
            "Heart and Soul of the Constitution"
          </p>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Dr. B. R. Ambedkar called Article 32 the most important article of the Constitution --
            without it, all other Fundamental Rights would be meaningless as there would be no way to enforce them.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="px-6 py-3 rounded-xl bg-[#FF9933]/10 border border-[#FF9933]/30 text-[#FF9933] font-semibold text-sm mb-2">
            Right Violated?
          </div>
          <ArrowRight className="w-5 h-5 text-gray-600 rotate-90 my-1" />
          <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm mb-2">
            Approach Supreme Court (Art. 32) or High Court (Art. 226)
          </div>
          <ArrowRight className="w-5 h-5 text-gray-600 rotate-90 my-1" />
          <div className="px-6 py-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] font-semibold text-sm">
            Court Issues a Writ
          </div>
        </motion.div>

        <h3 className="text-xl font-semibold text-center text-white mb-8">The Five Writs</h3>
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {writs.map((w, i) => (
            <WritCard key={i} writ={w} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
