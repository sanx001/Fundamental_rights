import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Scale } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Introduction', href: '#introduction' },
  { label: 'Equality', href: '#equality' },
  { label: 'Freedom', href: '#freedom' },
  { label: 'Exploitation', href: '#exploitation' },
  { label: 'Religion', href: '#religion' },
  { label: 'Cultural', href: '#cultural' },
  { label: 'Remedies', href: '#remedies' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Timeline', href: '#timeline' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 group">
          <Scale className="w-6 h-6 text-[#FF9933] group-hover:rotate-12 transition-transform" />
          <span className="text-sm md:text-base font-bold bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent">
            Know Your Rights
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-xs text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden text-gray-400 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          className="lg:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
