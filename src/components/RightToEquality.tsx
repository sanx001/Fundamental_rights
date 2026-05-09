import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { Scale, Ban, Briefcase, Hand, Award } from 'lucide-react';

const rights = [
  {
    icon: <Scale className="w-7 h-7" />,
    article: 'Art. 14',
    title: 'Equality Before Law',
    desc: 'The State shall not deny any person equality before the law or equal protection of the laws within India.',
    example: 'A rich businessman and a poor farmer are both equally subject to the same traffic laws.',
  },
  {
    icon: <Ban className="w-7 h-7" />,
    article: 'Art. 15',
    title: 'Prohibition of Discrimination',
    desc: 'No citizen shall be discriminated on grounds of religion, race, caste, sex, or place of birth.',
    example: 'A school cannot refuse admission to a student based on their caste or religion.',
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    article: 'Art. 16',
    title: 'Equality of Opportunity',
    desc: 'Equal opportunity in matters of public employment. No discrimination in government jobs.',
    example: 'All eligible candidates can apply for civil services regardless of their background.',
  },
  {
    icon: <Hand className="w-7 h-7" />,
    article: 'Art. 17',
    title: 'Abolition of Untouchability',
    desc: 'Untouchability is abolished and its practice in any form is forbidden. Punishable by law.',
    example: 'Denying entry to a temple based on caste is a punishable offense under the law.',
  },
  {
    icon: <Award className="w-7 h-7" />,
    article: 'Art. 18',
    title: 'Abolition of Titles',
    desc: 'No citizen can accept a title from a foreign state. No military or academic titles can be used as prefixes.',
    example: 'An Indian citizen cannot use "Sir" from a British knighthood as a title.',
  },
];

export default function RightToEquality() {
  return (
    <SectionWrapper id="equality" className="bg-gradient-to-b from-transparent via-[#FF9933]/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#FF9933] text-xs tracking-widest uppercase">Articles 14-18</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Right to Equality
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            The most fundamental of all rights -- ensuring every citizen is treated equally by the law and the State
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#FF9933]">{item.icon}</div>
                  <span className="text-xs font-mono text-[#FF9933]/70 bg-[#FF9933]/10 px-2 py-0.5 rounded">
                    {item.article}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#FF9933] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{item.desc}</p>
                <div className="border-t border-white/5 pt-3">
                  <p className="text-xs text-gray-500">
                    <span className="text-[#FF9933] font-medium">Example: </span>
                    {item.example}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
