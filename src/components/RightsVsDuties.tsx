import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Scale } from 'lucide-react';

const rights = [
  'Right to Equality',
  'Right to Freedom',
  'Right against Exploitation',
  'Right to Freedom of Religion',
  'Cultural & Educational Rights',
  'Right to Constitutional Remedies',
];

const duties = [
  'Abide by the Constitution',
  'Cherish National Freedom',
  'Uphold Sovereignty & Integrity',
  'Defend the Country',
  'Promote Harmony',
  'Preserve Natural Environment',
];

export default function RightsVsDuties() {
  return (
    <SectionWrapper id="rights-vs-duties">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#3b82f6] text-xs tracking-widest uppercase">Part III vs Part IV-A</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Rights vs Duties
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Rights and duties are two sides of the same coin -- one cannot exist without the other
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#FF9933]/10 to-transparent border border-[#FF9933]/20 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-5 h-5 text-[#FF9933]" />
                <h3 className="text-[#FF9933] font-semibold text-lg">Fundamental Rights</h3>
              </div>
              <p className="text-gray-500 text-xs mb-4">Part III | Articles 12-35 | Justiciable</p>
              <div className="space-y-3">
                {rights.map((r, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ borderColor: 'rgba(255,153,51,0.3)', x: 4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF9933]" />
                    <span className="text-white text-sm">{r}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#138808]/10 to-transparent border border-[#138808]/20 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Scale className="w-5 h-5 text-[#138808]" />
                <h3 className="text-[#138808] font-semibold text-lg">Fundamental Duties</h3>
              </div>
              <p className="text-gray-500 text-xs mb-4">Part IV-A | Article 51A | Non-Justiciable</p>
              <div className="space-y-3">
                {duties.map((d, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ borderColor: 'rgba(19,136,8,0.3)', x: -4 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#138808]" />
                    <span className="text-white text-sm">{d}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-left text-gray-500 font-medium">Feature</th>
                <th className="py-3 px-4 text-left text-[#FF9933] font-medium">Rights</th>
                <th className="py-3 px-4 text-left text-[#138808] font-medium">Duties</th>
              </tr>
            </thead>
            <tbody className="text-gray-400">
              {[
                ['Part', 'Part III', 'Part IV-A'],
                ['Enforceable', 'Yes, by courts', 'No, moral obligation'],
                ['Added by', 'Original Constitution', '42nd Amendment (1976)'],
                ['Nature', 'Negative (restricts State)', 'Positive (expects action)'],
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  {row.map((cell, j) => (
                    <td key={j} className="py-3 px-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
