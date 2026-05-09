import { motion } from 'framer-motion';
import { Scale, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Scale className="w-8 h-8 text-[#FF9933] mx-auto mb-4" />
          <p className="text-gray-400 text-sm italic max-w-lg mx-auto leading-relaxed">
            "Rights are protected not by laws alone, but by the awareness of citizens."
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          {[
            { icon: <Github className="w-5 h-5" />, label: 'GitHub' },
            { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
            { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
          ].map((s, i) => (
            <motion.button
              key={i}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              aria-label={s.label}
            >
              {s.icon}
            </motion.button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 text-xs">
            Know Your Fundamental Rights &bull; Indian Studies LAB-FAT Presentation
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Made with dedication to the Indian Constitution
          </p>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#FF9933]/30 to-transparent" />
    </footer>
  );
}
