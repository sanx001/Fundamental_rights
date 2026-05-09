import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { MessageSquare, Pen, MapPin, Briefcase, ShieldCheck, ChevronDown } from 'lucide-react';

const freedoms = [
  {
    icon: <MessageSquare className="w-7 h-7" />,
    article: 'Art. 19(1)(a)',
    title: 'Freedom of Speech & Expression',
    desc: 'Every citizen has the right to express their views freely. This includes freedom of press and media.',
    detail: 'Subject to reasonable restrictions on grounds of sovereignty, security, public order, decency, or incitement to offense.',
  },
  {
    icon: <Pen className="w-7 h-7" />,
    article: 'Art. 19(1)(b)',
    title: 'Freedom to Assemble',
    desc: 'Right to assemble peacefully without arms. The foundation of democratic protests and gatherings.',
    detail: 'Can be restricted in the interest of public order. Meetings must be peaceful and unarmed.',
  },
  {
    icon: <MapPin className="w-7 h-7" />,
    article: 'Art. 19(1)(d)',
    title: 'Freedom of Movement',
    desc: 'Right to move freely throughout the territory of India without restrictions.',
    detail: 'Can be restricted in the interest of the general public or for protection of Scheduled Tribes.',
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    article: 'Art. 19(1)(g)',
    title: 'Freedom of Profession',
    desc: 'Right to practice any profession or carry on any trade, business, or occupation.',
    detail: 'Subject to professional/technical qualifications and licensing requirements.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    article: 'Art. 20-22',
    title: 'Protection in Criminal Law',
    desc: 'No retrospective criminal law, no double jeopardy, right against self-incrimination, and right to consult a lawyer.',
    detail: 'Article 20: Protection against ex post facto laws and double jeopardy. Article 21: Right to life and personal liberty. Article 22: Protection against arrest and detention.',
  },
];

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span>{displayed}<span className="animate-pulse">|</span></span>;
}

function ExpandableCard({ item, index }: { item: typeof freedoms[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <GlassCard className="h-full">
        <div className="flex items-start gap-3 mb-3">
          <div className="text-[#3b82f6]">{item.icon}</div>
          <div className="flex-1">
            <span className="text-xs font-mono text-[#3b82f6]/70 bg-[#3b82f6]/10 px-2 py-0.5 rounded">
              {item.article}
            </span>
            <h3 className="text-white font-semibold text-lg mt-1">{item.title}</h3>
          </div>
        </div>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed">{item.desc}</p>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 text-xs text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
        >
          {open ? 'Show less' : 'Read more'}
          <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 pt-3 border-t border-white/5"
          >
            <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
          </motion.div>
        )}
      </GlassCard>
    </motion.div>
  );
}

export default function RightToFreedom() {
  return (
    <SectionWrapper id="freedom" className="bg-gradient-to-b from-transparent via-[#3b82f6]/[0.02] to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14">
          <span className="text-[#3b82f6] text-xs tracking-widest uppercase">Articles 19-22</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Right to Freedom
          </h2>
          <div className="text-gray-400 max-w-xl mx-auto text-sm h-8">
            <TypingText text="The freedom that empowers every citizen to live, speak, and move freely" delay={500} />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freedoms.map((item, i) => (
            <ExpandableCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
