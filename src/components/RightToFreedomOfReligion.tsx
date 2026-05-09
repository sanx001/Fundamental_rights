import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { Church, Globe, BookOpen, HandHeart } from 'lucide-react';

const articles = [
  {
    icon: <Church className="w-7 h-7" />,
    article: 'Art. 25',
    title: 'Freedom of Conscience',
    desc: 'Freedom of conscience and right to freely profess, practice, and propagate religion, subject to public order, morality, and health.',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    article: 'Art. 26',
    title: 'Religious Denominations',
    desc: 'Every religious denomination can manage its own affairs in matters of religion, establish institutions, and own property.',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    article: 'Art. 27',
    title: 'No Religious Tax',
    desc: 'No person shall be compelled to pay any taxes for the promotion or maintenance of any particular religion.',
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    article: 'Art. 28',
    title: 'No Religious Instruction in State Schools',
    desc: 'No religious instruction shall be provided in any educational institution wholly maintained out of State funds.',
  },
];

const faiths = [
  { symbol: '\u0950', name: 'Hinduism' },
  { symbol: '\u262F', name: 'Buddhism' },
  { symbol: '\u2626', name: 'Christianity' },
  { symbol: '\u262A', name: 'Islam' },
  { symbol: '\u2721', name: 'Judaism' },
  { symbol: '\u0965', name: 'Jainism' },
  { symbol: '\u2638', name: 'Sikhism' },
];

export default function RightToFreedomOfReligion() {
  return (
    <SectionWrapper id="religion" className="bg-gradient-to-b from-transparent via-[#22c55e]/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#22c55e] text-xs tracking-widest uppercase">Articles 25-28</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Right to Freedom of Religion
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            India is secular -- the State treats all religions equally and every citizen is free to follow their faith
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {faiths.map((f, i) => (
            <motion.div
              key={i}
              className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1 hover:border-[#22c55e]/40 hover:bg-[#22c55e]/5 transition-all duration-300"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
            >
              <span className="text-2xl">{f.symbol}</span>
              <span className="text-[10px] text-gray-500">{f.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlassCard className="h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[#22c55e]">{item.icon}</div>
                  <span className="text-xs font-mono text-[#22c55e]/70 bg-[#22c55e]/10 px-2 py-0.5 rounded">
                    {item.article}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#22c55e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#22c55e]/5 to-transparent border border-[#22c55e]/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            <span className="text-[#22c55e] font-semibold">Secularism in India</span> means the State has no official religion.
            It treats all faiths equally -- neither promoting nor interfering with any religion.
            This is part of the Basic Structure of the Constitution.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
