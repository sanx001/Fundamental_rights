import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { BookOpen, Shield, Landmark } from 'lucide-react';

const timeline = [
  { year: '1946', event: 'Constituent Assembly formed' },
  { year: '1947', event: 'Independence of India' },
  { year: '1948', event: 'Draft Constitution prepared' },
  { year: '1949', event: 'Constitution adopted on Nov 26' },
  { year: '1950', event: 'Constitution came into effect on Jan 26' },
];

export default function IntroductionSection() {
  return (
    <SectionWrapper id="introduction">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#FF9933] to-white bg-clip-text text-transparent">
              What are Fundamental Rights?
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The cornerstone of Indian democracy, guaranteeing civil liberties to every citizen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <BookOpen className="w-8 h-8" />,
              title: 'Part III',
              desc: 'Fundamental Rights are enshrined in Part III (Articles 12-35) of the Indian Constitution, inspired by the US Bill of Rights.',
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: 'Why They Matter',
              desc: 'They protect citizens from arbitrary state action, ensure equality, and empower individuals to live with dignity and freedom.',
            },
            {
              icon: <Landmark className="w-8 h-8" />,
              title: 'Justiciable',
              desc: 'Unlike Directive Principles, Fundamental Rights are enforceable by courts. Any law violating them can be declared void.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <GlassCard className="h-full text-center">
                <div className="text-[#FF9933] mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <h3 className="text-xl font-semibold text-center text-white mb-10">
            Journey of the Constitution
          </h3>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`w-1/2 ${i % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="text-[#FF9933] font-bold text-lg">{item.year}</span>
                  <p className="text-gray-400 text-sm">{item.event}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#FF9933] border-2 border-[#0a0a0f] z-10" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
