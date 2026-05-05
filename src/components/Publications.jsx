import { motion } from 'framer-motion';

// TODO: replace with real publication details + URL
const publications = [
  {
    title: 'Everything You Need to Know About Microsoft Copilot',
    venue: 'Medium',
    year: 'April 2026',
    summary:
      "A complete guide to Microsoft Copilot - what it is, how it works, and where it's headed. Written for everyone, from everyday users to developers, this article breaks down the technology behind Copilot in plain language, without the jargon.",
    href: 'https://medium.com/@jainanjaly08/everything-you-need-to-know-about-microsoft-copilot-20c565770c36', // TODO: add article link
    tags: ['LLM','Copilot', 'Generative AI'],
  },
];

export default function Publications() {
  return (
    <section id="publications" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // publications
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
        >
          Things I&apos;ve written down properly
        </motion.h2>
        <p className="text-muted max-w-2xl mb-12">
          A small but growing pile of work that lives outside this site. Each
          one took longer than I&apos;d like to admit.
        </p>

        <div className="space-y-6">
          {publications.map((p, i) => (
            <motion.a
              key={i}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="card-glow group rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden"
            >
              {/* paper-stack visual */}
              <div className="relative w-20 h-24 shrink-0">
                <div
                  className="absolute inset-0 rounded-md border border-white/10 bg-card translate-x-2 translate-y-2 opacity-60"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 rounded-md border border-pink/30 bg-card translate-x-1 translate-y-1 opacity-80"
                  aria-hidden
                />
                <div className="absolute inset-0 rounded-md border border-pink/40 bg-gradient-to-br from-pink/10 to-violet/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                      stroke="url(#pg)"
                      strokeWidth="1.4"
                    />
                    <path d="M14 3v6h6" stroke="url(#pg)" strokeWidth="1.4" />
                    <path
                      d="M8 13h8M8 16h8M8 19h5"
                      stroke="#a855f7"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="pg" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#e879a0" />
                        <stop offset="100%" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs text-pink uppercase tracking-[0.2em]">
                  {p.venue} · {p.year}
                </p>
                <h3 className="font-serif text-xl md:text-2xl text-ink mt-2 leading-snug group-hover:text-pink transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted text-sm mt-3 leading-relaxed">
                  {p.summary}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono text-pink-soft border border-pink/20 bg-pink/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="font-mono text-sm text-ink/80 group-hover:text-pink transition-colors shrink-0">
                Read article →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
