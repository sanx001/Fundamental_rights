import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { Calendar } from 'lucide-react';

const milestones = [
  {
    year: '1928',
    title: 'Nehru Report',
    desc: 'First attempt by Indians to draft a constitutional framework, demanding dominion status and fundamental rights.',
  },
  {
    year: '1931',
    title: 'Karachi Resolution',
    desc: 'Congress session resolved to include fundamental rights in the future Constitution of India.',
  },
  {
    year: '1946',
    title: 'Constituent Assembly Formed',
    desc: 'Under the Cabinet Mission Plan, the Constituent Assembly was constituted with 389 members.',
  },
  {
    year: '1947',
    title: 'Independence',
    desc: 'India gains independence on August 15. Constituent Assembly becomes a fully sovereign body.',
  },
  {
    year: '1948',
    title: 'Draft Constitution',
    desc: 'Drafting Committee under Dr. Ambedkar presents the Draft Constitution for deliberation.',
  },
  {
    year: '1949',
    title: 'Constitution Adopted',
    desc: 'Constitution adopted on November 26, 1949. Celebrated as Constitution Day (Samvidhan Divas).',
  },
  {
    year: '1950',
    title: 'Constitution Enforced',
    desc: 'Constitution came into effect on January 26, 1950. India became a Republic. Republic Day!',
  },
  {
    year: '1976',
    title: '42nd Amendment',
    desc: 'Fundamental Duties added (Part IV-A, Art. 51A) and Socialist, Secular added to Preamble.',
  },
  {
    year: '1978',
    title: '44th Amendment',
    desc: 'Right to Property removed as a Fundamental Right. Made a legal right under Article 300A.',
  },
  {
    year: '2002',
    title: '86th Amendment',
    desc: 'Right to Education added as Fundamental Right (Art. 21A). Free education for children 6-14.',
  },
];

export default function TimelineSection() {
  return (
    <SectionWrapper id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#FF9933] text-xs tracking-widest uppercase">Constitutional Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Timeline of Milestones
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Key moments in the making and evolution of the Indian Constitution
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              className={`relative flex mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#FF9933] border-2 border-[#0a0a0f] z-10 mt-1.5" />

              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#FF9933]/20 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-[#FF9933]" />
                    <span className="text-[#FF9933] font-bold text-sm">{m.year}</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1">{m.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
