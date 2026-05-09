import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { Languages, GraduationCap, Palette, BookMarked } from 'lucide-react';

const rights = [
  {
    icon: <Languages className="w-8 h-8" />,
    article: 'Art. 29(1)',
    title: 'Protection of Language & Culture',
    desc: 'Any section of citizens with a distinct language, script, or culture has the right to conserve it.',
    color: '#f59e0b',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    article: 'Art. 29(2)',
    title: 'Access to State Education',
    desc: 'No citizen shall be denied admission to any educational institution maintained by the State on grounds of religion, race, caste, or language.',
    color: '#f59e0b',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    article: 'Art. 30(1)',
    title: 'Minority Educational Institutions',
    desc: 'All minorities, religious or linguistic, have the right to establish and administer educational institutions of their choice.',
    color: '#f59e0b',
  },
  {
    icon: <BookMarked className="w-8 h-8" />,
    article: 'Art. 30(2)',
    title: 'State Aid to Minority Institutions',
    desc: 'The State cannot discriminate against any educational institution on the ground that it is under minority management while granting aid.',
    color: '#f59e0b',
  },
];

const cultures = [
  { name: 'Bharatanatyam', region: 'Tamil Nadu', emoji: '\uD83D\uDC83' },
  { name: 'Kathak', region: 'North India', emoji: '\uD83C\uDFB5' },
  { name: 'Odissi', region: 'Odisha', emoji: '\uD83C\uDFA8' },
  { name: 'Bihu', region: 'Assam', emoji: '\uD83E\uDD4B' },
  { name: 'Ghoomar', region: 'Rajasthan', emoji: '\uD83C\uDF1F' },
  { name: 'Mohiniyattam', region: 'Kerala', emoji: '\uD83C\uDF3F' },
];

export default function CulturalAndEducationalRights() {
  return (
    <SectionWrapper id="cultural" className="bg-gradient-to-b from-transparent via-[#f59e0b]/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#f59e0b] text-xs tracking-widest uppercase">Articles 29-30</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Cultural & Educational Rights
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Preserving India's diverse cultural heritage and ensuring minorities can educate their children
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {cultures.map((c, i) => (
            <motion.div
              key={i}
              className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center hover:border-[#f59e0b]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <span className="text-2xl block mb-1">{c.emoji}</span>
              <p className="text-white text-sm font-medium">{c.name}</p>
              <p className="text-gray-500 text-xs">{c.region}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {rights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <GlassCard className="h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <div style={{ color: item.color }}>{item.icon}</div>
                  <span className="text-xs font-mono text-[#f59e0b]/70 bg-[#f59e0b]/10 px-2 py-0.5 rounded">
                    {item.article}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#f59e0b] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
