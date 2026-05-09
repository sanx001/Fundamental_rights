import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-64 h-64 rounded-full opacity-15"
      style={{
        background: 'radial-gradient(circle, rgba(255,153,51,0.3) 0%, transparent 70%)',
        left: pos.x - 128,
        top: pos.y - 128,
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
      }}
    />
  );
}
