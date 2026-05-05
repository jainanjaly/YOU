import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const NAME = 'Anjaly Jain';

function PixelAvatar() {
  return (
    <svg
      viewBox="0 0 160 160"
      className="w-full h-full"
      shapeRendering="crispEdges"
      aria-label="Pixel avatar"
    >
      <defs>
        <linearGradient id="frame2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#e879a0" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="hair2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="skin2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#fde0ec" />
          <stop offset="100%" stopColor="#f4a7c3" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="148" height="148" rx="20" fill="url(#frame2)" opacity="0.9" />
      <rect x="14" y="14" width="132" height="132" rx="14" fill="#1a1326" />
      <rect x="36" y="40" width="88" height="56" fill="url(#hair2)" />
      <rect x="32" y="52" width="8" height="44" fill="url(#hair2)" />
      <rect x="120" y="52" width="8" height="44" fill="url(#hair2)" />
      <rect x="48" y="58" width="64" height="48" fill="url(#skin2)" />
      <rect x="48" y="58" width="64" height="10" fill="url(#hair2)" />
      <rect x="56" y="68" width="14" height="4" fill="url(#hair2)" />
      <rect x="92" y="68" width="14" height="4" fill="url(#hair2)" />
      <rect x="60" y="78" width="8" height="8" fill="#1a1326" />
      <rect x="92" y="78" width="8" height="8" fill="#1a1326" />
      <rect x="62" y="80" width="3" height="3" fill="#f4a7c3" />
      <rect x="94" y="80" width="3" height="3" fill="#f4a7c3" />
      <rect x="54" y="92" width="6" height="3" fill="#e879a0" opacity="0.7" />
      <rect x="100" y="92" width="6" height="3" fill="#e879a0" opacity="0.7" />
      <rect x="74" y="96" width="12" height="3" fill="#7c3aed" />
      <rect x="74" y="99" width="3" height="2" fill="#7c3aed" />
      <rect x="83" y="99" width="3" height="2" fill="#7c3aed" />
      <rect x="40" y="110" width="80" height="36" fill="#1f1430" />
      <rect x="44" y="114" width="72" height="4" fill="#7c3aed" />
      <rect x="56" y="120" width="48" height="2" fill="#a855f7" opacity="0.6" />
      <rect x="22" y="30" width="3" height="3" fill="#f4a7c3" />
      <rect x="134" y="36" width="3" height="3" fill="#a855f7" />
      <rect x="130" y="118" width="3" height="3" fill="#f4a7c3" />
      <rect x="22" y="120" width="3" height="3" fill="#a855f7" />
    </svg>
  );
}

function FlipPortrait() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  // 0 -> photo, 180 -> avatar. Past hero stays at 180.
  const rotateY = useTransform(scrollYProgress, [0, 0.9], [0, 180], {
    clamp: true,
  });
  const smoothRotate = useSpring(rotateY, { stiffness: 80, damping: 20 });

  const frontOpacity = useTransform(smoothRotate, (v) => (v > 90 ? 0 : 1));
  const backOpacity = useTransform(smoothRotate, (v) => (v > 90 ? 1 : 0));
  const backRotate = useTransform(smoothRotate, (v) => v - 180);

  return (
    <div
      ref={ref}
      className="relative w-[260px] h-[320px] md:w-[320px] md:h-[400px]"
      style={{ perspective: 1200 }}
    >
      {/* ambient glow */}
      <div
        className="absolute -inset-8 rounded-[2rem] blur-3xl opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.45), rgba(232,121,160,0.3), transparent 70%)',
        }}
      />

      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          rotateY: smoothRotate,
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* FRONT — outlined / stylized photo */}
        <motion.div
          className="absolute inset-0 rounded-[2rem] overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            opacity: frontOpacity,
            background:
              'linear-gradient(135deg, rgba(232,121,160,0.6), rgba(124,58,237,0.6))',
            padding: '3px',
            boxShadow: '0 30px 80px -30px rgba(232,121,160,0.5)',
          }}
        >
          <div className="relative w-full h-full rounded-[calc(2rem-3px)] overflow-hidden bg-card">
            <img
              src="/me.jpeg"
              alt="Anjaly Jain"
              className="w-full h-full object-cover"
              style={{
                filter:
                  'grayscale(40%) contrast(1.05) brightness(0.95) saturate(1.1)',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* pink/violet wash */}
            <div
              className="absolute inset-0 mix-blend-soft-light pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(232,121,160,0.45), rgba(124,58,237,0.35))',
              }}
            />
            {/* film grain */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '3px 3px',
              }}
            />
            {/* tag */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-pink-soft">
              <span>· in frame</span>
              <span>2026</span>
            </div>
          </div>
        </motion.div>

        {/* BACK — pixel avatar */}
        <motion.div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            opacity: backOpacity,
            rotateY: backRotate,
          }}
        >
          <PixelAvatar />
        </motion.div>
      </motion.div>

      {/* always-visible pixel sticker in the corner */}
      <motion.div
        className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 z-10"
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-2xl p-[2px]"
          style={{
            background:
              'linear-gradient(135deg, rgba(232,121,160,0.9), rgba(124,58,237,0.9))',
            boxShadow: '0 10px 30px -10px rgba(232,121,160,0.7)',
          }}
        >
          <div className="w-full h-full rounded-[14px] bg-card overflow-hidden">
            <PixelAvatar />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState('');

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(NAME.slice(0, i));
      if (i >= NAME.length) clearInterval(id);
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-24 pb-16 overflow-hidden"
    >
      {/* sparkles */}
      <motion.div
        className="absolute top-[60%] left-[14%] w-1 h-1 rounded-full bg-violet-soft"
        animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.6, 1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.6 }}
      />
      <motion.div
        className="absolute top-[30%] right-[10%] w-1 h-1 rounded-full bg-pink-soft"
        animate={{ opacity: [0.2, 0.8, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center relative">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/5 text-emerald-300 text-xs font-mono mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          <p className="eyebrow mb-4">// hello, world</p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] text-ink">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-pink to-violet-soft bg-clip-text text-transparent">
              {typed}
            </span>
            <span className="inline-block w-[3px] h-[0.9em] bg-pink ml-1 align-middle animate-blink" />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.6 }}
            className="mt-6 text-muted text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Software engineer who still gets a small thrill every time a test goes green.
            {/* TODO: replace with real content */}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4 items-center"
          >
            <Link
              to="/projects"
              className="px-5 py-3 rounded-full text-sm font-medium text-ink bg-gradient-to-r from-pink to-violet shadow-[0_8px_30px_-10px_rgba(232,121,160,0.6)] hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.7)] transition-shadow"
            >
              See what I&apos;ve built
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-full text-sm font-medium text-ink/80 border border-white/10 hover:border-pink/50 hover:text-ink transition-colors"
            >
              Say Hi!
            </Link>
          </motion.div>

          {/* quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-muted"
          >
            <span>
              <span className="text-pink">●</span> based in Gurugram, IN
            </span>
            <span>
              <span className="text-pink">●</span> currently @ BCG
            </span>
            <span>
              <span className="text-pink">●</span> probably on coffee #2
            </span>
          </motion.div>
        </div>

        <div className="flex md:justify-end justify-center">
          <FlipPortrait />
        </div>
      </div>

      <motion.a
        href="#explore"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-muted hover:text-pink transition-colors"
      >
        <span className="inline-block animate-bounceSoft">scroll down ↓</span>
      </motion.a>
    </section>
  );
}
