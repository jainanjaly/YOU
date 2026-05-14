import { motion } from 'framer-motion';

// Editorial spec-sheet style. Keep entries short — every line earns its place.
const facts = [
  { label: 'based in (rn)', value: 'Gurugram, IN' },
  { label: 'currently', value: 'Software Engineer @ BCG' },
  { label: 'tools', value: 'Java · Python · React · SQL' },
  { label: 'off-hours', value: 'Chess, table tennis, long books' },
  { label: 'fav book', value: 'Kite Runner' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-16 py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.p variants={item} className="eyebrow">
          // about
        </motion.p>
        <motion.h2
          variants={item}
          className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-14 text-ink"
        >
          A little about <span className="italic text-pink">me</span>.
        </motion.h2>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Left: intro */}
          <motion.div
            variants={item}
            className="md:col-span-7 relative pl-6"
          >
            <span
              className="absolute left-0 top-1 bottom-1 w-px bg-rule"
              aria-hidden
            />
            <p className="font-serif text-xl md:text-2xl text-ink leading-relaxed">
              I&apos;m a triple major in computer science, mathematics, and
              statistics — three fields that overlap just enough to be
              interesting.
            </p>
            <p className="text-muted leading-relaxed mt-5">
              Most of what I know came from building things first and reading
              the documentation later. 
            </p>
            <p className="text-muted leading-relaxed mt-4">
              Outside the editor: chess for the patience I'm still learning to
              have, table tennis for the patience I don't.
            </p>
          </motion.div>

          {/* Right: spec sheet */}
          <motion.div
            variants={item}
            className="md:col-span-5 relative rounded-2xl p-6 md:p-7 bg-card border border-rule"
          >
            <div className="flex items-center justify-between mb-5">
              <p className="eyebrow !mt-0">// spec sheet</p>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                available
              </span>
            </div>
            <dl className="relative divide-y divide-rule">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="grid grid-cols-[7rem_1fr] gap-4 py-2.5"
                >
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted pt-0.5">
                    {f.label}
                  </dt>
                  <dd className="text-ink text-sm leading-snug">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
