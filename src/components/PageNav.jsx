import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const order = [
  { to: '/about', label: 'About' },
  { to: '/timeline', label: 'Timeline' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/awards', label: 'Awards' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
];

export default function PageNav({ current }) {
  const idx = order.findIndex((o) => o.to === current);
  const prev = idx > 0 ? order[idx - 1] : null;
  const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto px-6 md:px-16 pb-24 grid grid-cols-2 gap-4"
    >
      {prev ? (
        <Link
          to={prev.to}
          className="card-glow group rounded-2xl p-5 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-muted group-hover:text-pink transition-colors">
            ← prev
          </span>
          <span className="font-serif text-lg text-ink group-hover:text-pink transition-colors">
            {prev.label}
          </span>
        </Link>
      ) : (
        <Link
          to="/"
          className="card-glow group rounded-2xl p-5 flex items-center gap-4"
        >
          <span className="font-mono text-xs text-muted group-hover:text-pink transition-colors">
            ← back
          </span>
          <span className="font-serif text-lg text-ink group-hover:text-pink transition-colors">
            Home
          </span>
        </Link>
      )}
      {next ? (
        <Link
          to={next.to}
          className="card-glow group rounded-2xl p-5 flex items-center justify-end gap-4 text-right"
        >
          <span className="font-serif text-lg text-ink group-hover:text-pink transition-colors">
            {next.label}
          </span>
          <span className="font-mono text-xs text-muted group-hover:text-pink transition-colors">
            next →
          </span>
        </Link>
      ) : (
        <Link
          to="/"
          className="card-glow group rounded-2xl p-5 flex items-center justify-end gap-4 text-right"
        >
          <span className="font-serif text-lg text-ink group-hover:text-pink transition-colors">
            Home
          </span>
          <span className="font-mono text-xs text-muted group-hover:text-pink transition-colors">
            ↑
          </span>
        </Link>
      )}
    </motion.div>
  );
}
