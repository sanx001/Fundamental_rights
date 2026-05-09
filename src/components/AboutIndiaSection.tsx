import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { Flag, Scroll } from 'lucide-react';

const preamble = `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`;

const keywords = ['SOVEREIGN', 'SOCIALIST', 'SECULAR', 'DEMOCRATIC', 'REPUBLIC', 'JUSTICE', 'LIBERTY', 'EQUALITY', 'FRATERNITY'];

export default function AboutIndiaSection() {
  const highlightText = (text: string) => {
    let result = text;
    keywords.forEach((kw) => {
      result = result.replace(kw, `<span class="text-[#FF9933] font-bold">${kw}</span>`);
    });
    return result;
  };

  return (
    <SectionWrapper id="about-india" className="bg-gradient-to-b from-transparent via-[#FF9933]/[0.02] to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#FF9933] text-xs tracking-widest uppercase">Our Nation</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            About India
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            The world's largest democracy, built on the foundation of justice, liberty, equality, and fraternity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { icon: <Flag className="w-7 h-7" />, label: 'Largest Democracy', value: '1.4B+ Citizens' },
            { icon: <Scroll className="w-7 h-7" />, label: 'Constitution', value: '395 Articles, 8 Schedules' },
            { icon: <Flag className="w-7 h-7" />, label: 'Republic Since', value: '26 January 1950' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center">
                <div className="text-[#FF9933] mb-3 flex justify-center">{item.icon}</div>
                <p className="text-white font-semibold text-lg">{item.value}</p>
                <p className="text-gray-500 text-xs mt-1">{item.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard hover={false} className="relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
            <h3 className="text-center text-[#FF9933] font-semibold text-lg mb-6">
              The Preamble
            </h3>
            <div className="max-w-2xl mx-auto text-center">
              {preamble.split('\n\n').map((para, i) => (
                <motion.p
                  key={i}
                  className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 last:mb-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  dangerouslySetInnerHTML={{ __html: highlightText(para) }}
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
