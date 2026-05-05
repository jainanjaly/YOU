import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Who I Am',
    body: [
      "An engineering student with a triple-major brain (CS, Math, Stats) and a habit of building things before fully understanding them - then going back to understand them properly.",
      "Academics shaped how I think. Projects taught me how to actually do things.",
    ],
  },
  {
    title: 'What I Love',
    body: [
      "Chess, because it rewards patience I'm still learning to have. Table tennis, because it doesn't.",
      "Kite Runner changed something in me I haven't fully named yet.",
      "Also: sports in general, the smell of a new book, and the specific satisfaction of a bug that finally makes sense.",
    ],
  },
  {
    title: 'Also, For the Record',
    body: [
      "My friend once told me I can be dumb and smart at the same time - I think that's the most accurate thing anyone's said about me.",
      "Life, to me, is an endless list of activities - I just want to try most of them before I run out of time.",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
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
        <motion.p variants={item} className="eyebrow text-center">
          // about
        </motion.p>
        <motion.h2
          variants={item}
          className="text-center font-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          A few honest things
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              className="card-glow rounded-2xl p-6 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(232,121,160,0.7), transparent)',
                }}
              />
              <h3 className="font-serif text-xl text-ink mb-3">{c.title}</h3>
              <div className="space-y-3">
                {c.body.map((line, i) => (
                  <p key={i} className="text-muted leading-relaxed text-sm">
                    {line}
                  </p>
                ))}
              </div>
              {/* TODO: replace with real content */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
