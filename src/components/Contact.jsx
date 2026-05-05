import { motion } from 'framer-motion';

const links = [
  {
    label: 'Email',
    value: 'jainanjaly08@gmail.com',
    href: 'mailto:jainanjaly08@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anjaly-jain',
    href: 'https://linkedin.com/in/anjaly-jain',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v1.6c.7-1 1.9-1.9 3.6-1.9 3 0 3.4 2 3.4 4.5V20h-4v-5c0-1.4-.4-2.3-1.6-2.3S13 13.6 13 15v5h-3z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/jainanjaly',
    href: 'https://github.com/jainanjaly',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 md:px-16 py-28">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-6xl font-semibold mt-3 text-ink"
        >
          Say hi. I don&apos;t bite.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-muted text-base md:text-lg"
        >
          Always open to interesting conversations, new projects, and good
          coffee recommendations.
        </motion.p>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {links.map((l) => (
            <motion.li
              key={l.label}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 hover:border-pink/50 transition-colors"
              >
                <span className="text-pink">{l.icon}</span>
                <span className="font-mono text-sm text-ink/90 group-hover:text-pink transition-colors whitespace-nowrap">
                  {l.value}
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-ink bg-gradient-to-r from-pink to-violet shadow-[0_8px_30px_-10px_rgba(232,121,160,0.6)] hover:shadow-[0_12px_40px_-10px_rgba(168,85,247,0.7)] transition-shadow"
          >
            ↓ Download Resume
          </a>
        </motion.div>

        <p className="mt-20 font-mono text-[11px] text-muted/60">
          © 2025 Anjaly Jain. All rights reserved. (not really.)
        </p>
      </div>
    </section>
  );
}
