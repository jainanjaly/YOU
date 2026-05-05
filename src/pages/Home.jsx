import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Timeline from '../components/Timeline.jsx';
import Contact from '../components/Contact.jsx';

// "Pick a corner" grid — only the sections that aren't already rendered below.
const sections = [
  { to: '/projects', label: 'Projects', tag: '01', desc: "Things I've actually shipped." },
  { to: '/skills', label: 'Skills', tag: '02', desc: "What I work with, day to day." },
  { to: '/experience', label: 'Experience', tag: '03', desc: "Where I've been and what I did there." },
  { to: '/certifications', label: 'Certifications', tag: '04', desc: "Receipts, formally collected." },
  { to: '/awards', label: 'Awards', tag: '05', desc: "Trophies, honestly earned." },
  { to: '/publications', label: 'Publications', tag: '06', desc: "Things I've written down properly." },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow text-center"
          >
            // explore
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center font-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
          >
            Pick a corner of my brain
          </motion.h2>
          <p className="text-center text-muted max-w-xl mx-auto mb-14">
            Each room has its own door. Some are loud, some are quiet, all of
            them are honest.
          </p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sections.map((s) => (
              <motion.div
                key={s.to}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  to={s.to}
                  className="card-glow group block rounded-2xl p-6 h-full relative overflow-hidden"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(232,121,160,0.7), transparent)',
                    }}
                  />
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[11px] text-pink tracking-[0.2em]">
                      {s.tag}
                    </span>
                    <span className="font-mono text-xs text-muted group-hover:text-pink transition-colors">
                      open →
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-pink transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <About />
      <Timeline />
      <Contact />
    </>
  );
}
