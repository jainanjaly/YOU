import { motion } from 'framer-motion';

// TODO: add real certifications. These are illustrative placeholders.
const certs = [
    {
    name: 'Python Data Structures and Algorithms',
    issuer: 'Udemy - Scott Barrett  ',
    year: 'Ongoing',
    skills: ['DSA', 'Python'],
    color: 'from-pink to-violet',
  },
  {
    name: 'Cloud Computing: Understanding Core Concepts',
    issuer: 'LinkedIn Learning',
    year: 'Dec 2024',
    skills: ['AWS', 'Cloud Computing'],
    color: 'from-pink to-violet',
  },
  {
    name: 'Intermediate SQL for Data Scientists',
    issuer: 'LinkedIn Learning',
    year: 'Sep 2024',
    skills: ['SQL', 'Database Queries'],
    color: 'from-violet to-pink',
  },
  {
    name: 'Marketing Research and Analysis',
    issuer: 'NPTEL',
    year: 'Oct 2023',
    skills: ['Hypothesis Testing', 'Statistical Analysis'],
    color: 'from-pink-soft to-violet',
  },
  {
    name: 'Learning SQL Programming',
    issuer: 'LinkedIn Learning',
    year: 'July 2024',
    skills: ['SQL', 'Data science'],
    color: 'from-violet-soft to-pink',
  },
];

function CertBadge({ gradient }) {
  return (
    <div className="relative w-16 h-16 shrink-0">
      <div
        className={`absolute inset-0 rounded-full blur-md opacity-60 bg-gradient-to-br ${gradient}`}
      />
      <div
        className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${gradient} p-[2px]`}
      >
        <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <defs>
              <linearGradient id="cg" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#e879a0" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path
              d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.5L12 14.77 7.06 17.4 8 11.9 4 8l5.61-1.16L12 2z"
              fill="url(#cg)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-center"
        >
          // certifications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center font-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
        >
          Receipts, formally collected
        </motion.h2>
        <p className="text-center text-muted max-w-xl mx-auto mb-14">
          The little badges that say I sat through the modules and passed the
          tests. Useful, occasionally even fun.
        </p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {certs.map((c) => (
            <motion.div
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 24, rotate: -1 },
                show: {
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  transition: { type: 'spring', stiffness: 200, damping: 18 },
                },
              }}
              whileHover={{ y: -4, rotate: 0.5 }}
              className="card-glow rounded-2xl p-6 flex gap-5 items-start"
            >
              <CertBadge gradient={c.color} />
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg md:text-xl text-ink leading-snug">
                  {c.name}
                </h3>
                <p className="text-muted text-sm mt-1">{c.issuer}</p>
                {c.year.toLowerCase() === 'ongoing' ? (
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-full border border-emerald-400/30 bg-emerald-400/5 font-mono text-[11px] text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Ongoing
                  </span>
                ) : (
                  <p className="font-mono text-xs text-pink mt-2">{c.year}</p>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full text-xs font-mono text-pink-soft border border-pink/20 bg-pink/5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
