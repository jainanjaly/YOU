import { motion } from 'framer-motion';

const awards = [
  {
    title: 'Runner — Hacktech 2023',
    org: 'IKST · Indo-Korea Science and Technology Centre',
    date: 'Dec 2023',
    note: "First real hackathon. My sibling helped me through the panic. Learned more than a whole semester.",
    icon: '🥈',
  },
  {
    title: 'Winner — Science Exhibition',
    org: 'School of Sciences, Christ University',
    date: 'Mar 2024',
    note: "Pulled the whole thing together in a week. Had way too much fun. Felt completely worth it in the end.",
    icon: '🔬',
  },
  {
    title: 'Winner — Pitch Please',
    org: 'FamJam 2.0, FamPay',
    date: 'Nov 2020',
    note: "A business pitch — fully outside my comfort zone. Got lucky with the best team of seniors who carried me through it.",
    icon: '🎤',
  },
  {
    title: 'Participant — Inspire Awards',
    org: 'Ministry of Science and Technology, Govt. of India (Mysore)',
    date: 'Dec 2019',
    note: "Learned that complex problems often have surprisingly simple solutions. Also, the trip to Mysore was a blast.",
    icon: '💡',
  },
  {
    title: 'Representative of Bangalore',
    org: 'Tata Energy Quiz · National level, Mumbai',
    date: 'May 2018',
    note: "A wild, lavish trip to Mumbai and one step short of the finals. I was in 8th grade. I'm still proud of it.",
    icon: '🧠',
  },
  // TODO: add additional awards / achievements as they come in
];

export default function Awards() {
  return (
    <section id="awards" className="relative px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // awards &amp; achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          Trophies, honestly earned
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                type: 'spring',
                stiffness: 160,
                damping: 18,
              }}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl p-7 overflow-hidden"
              style={{
                background:
                  'linear-gradient(135deg, rgba(232,121,160,0.08), rgba(124,58,237,0.06))',
                border: '0.5px solid rgba(232,121,160,0.3)',
                boxShadow: '0 10px 50px -20px rgba(232,121,160,0.4)',
              }}
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    'radial-gradient(circle, rgba(168,85,247,0.6), transparent 70%)',
                }}
              />
              <div className="relative flex items-start gap-5">
                <div
                  className="text-4xl md:text-5xl shrink-0 select-none"
                  aria-hidden
                >
                  {a.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl md:text-2xl text-ink leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-pink text-sm mt-1">{a.org}</p>
                  <p className="font-mono text-xs text-muted mt-1">{a.date}</p>
                  {a.note && (
                    <p className="text-muted text-sm mt-4 leading-relaxed italic">
                      “{a.note}”
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
