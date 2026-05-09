import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { User } from 'lucide-react';

const members = [
  { name: 'Member 1', role: 'Research & Content', initials: 'M1' },
  { name: 'Member 2', role: 'Design & UI', initials: 'M2' },
  { name: 'Member 3', role: 'Development', initials: 'M3' },
  { name: 'Member 4', role: 'Presentation', initials: 'M4' },
];

export default function TeamSection() {
  return (
    <SectionWrapper id="team">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#3b82f6] text-xs tracking-widest uppercase">Our Team</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            The Team
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            The people behind this presentation
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <GlassCard className="text-center group">
                <motion.div
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF9933]/20 to-[#138808]/20 border border-white/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <User className="w-8 h-8 text-gray-500 group-hover:text-[#FF9933] transition-colors" />
                </motion.div>
                <h4 className="text-white font-semibold text-sm">{m.name}</h4>
                <p className="text-gray-500 text-xs mt-1">{m.role}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-gray-600 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Replace placeholders with your team member names and details
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
