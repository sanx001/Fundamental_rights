import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function AshokaChakra() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-[0.06]"
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <circle cx="100" cy="100" r="95" fill="none" stroke="#FF9933" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="15" fill="none" stroke="#FF9933" strokeWidth="1" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x1 = 100 + 18 * Math.cos(angle);
          const y1 = 100 + 18 * Math.sin(angle);
          const x2 = 100 + 90 * Math.cos(angle);
          const y2 = 100 + 90 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FF9933" strokeWidth="0.8" />
          );
        })}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const cx = 100 + 55 * Math.cos(angle);
          const cy = 100 + 55 * Math.sin(angle);
          return <circle key={`d${i}`} cx={cx} cy={cy} r="3" fill="none" stroke="#FF9933" strokeWidth="0.5" />;
        })}
      </svg>
    </motion.div>
  );
}

function FlagGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#FF9933]/10 to-transparent" />
      <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#138808]/10 to-transparent" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FlagGradient />
      <AshokaChakra />

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-[#FF9933]/10 to-transparent"
          style={{
            width: 80 + i * 40,
            height: 80 + i * 40,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.div
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#FF9933]/30 bg-[#FF9933]/5 text-[#FF9933] text-xs tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Indian Constitution &bull; Part III
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
            Know Your
          </span>
          <br />
          <span className="text-white">Fundamental Rights</span>
        </motion.h1>

        <motion.p
          className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          An Interactive Guide to the Fundamental Rights of the Indian Constitution
        </motion.p>

        <motion.blockquote
          className="text-gray-500 text-sm md:text-base italic mb-10 max-w-xl mx-auto border-l-2 border-[#FF9933]/40 pl-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
        >
          "Constitution is not a mere lawyer's document, it is a vehicle of Life."
          <br />
          <span className="text-[#FF9933] not-italic text-xs">-- Dr. B. R. Ambedkar</span>
        </motion.blockquote>

        <motion.a
          href="#introduction"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#FF9933] to-[#e88a2a] text-black font-semibold text-sm hover:shadow-[0_0_30px_rgba(255,153,51,0.4)] transition-shadow duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Rights
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </motion.div>
    </section>
  );
}
