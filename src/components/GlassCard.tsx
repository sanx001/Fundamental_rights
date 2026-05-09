import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = true }: Props) {
  return (
    <motion.div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 ${className}`}
      whileHover={hover ? {
        scale: 1.03,
        borderColor: 'rgba(255,153,51,0.4)',
        boxShadow: '0 0 30px rgba(255,153,51,0.15), 0 0 60px rgba(255,153,51,0.05)',
      } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
