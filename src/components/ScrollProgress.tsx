import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
