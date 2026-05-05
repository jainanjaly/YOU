import { motion } from 'framer-motion';

const events = [
  {
    year: '2022',
    title: 'Started at CHRIST University, Bangalore',
    note: "Triple major in CS, Math and Stats. Sounded fun on paper, was actually fun (mostly).",
  },
  {
    year: '2023',
    title: 'Runner-up at Hacktech 2023 (IKST)',
    note: "First real hackathon. Spent around three months. Learned more than a semester.",
  },
  {
    year: '2024',
    title: 'Won the Science Exhibition at Christ',
    note: "Realized I liked shipping things people could actually click on.",
  },
  {
    year: 'May 2025',
    title: 'First internship — ULAI, Bengaluru',
    note: "Underestimated how much I didn't know about real production code. Learned fast.",
  },
  {
    year: 'Aug 2025',
    title: 'Software Engineer at Boston Consulting Group',
    note: "Java, Spring Boot, GenAI services, and the polite chaos of an enterprise platform.",
  },
  {
    year: 'Now',
    title: 'still writing this chapter',
    note: '',
    italic: true,
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // timeline
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-14 text-ink"
        >
          The journey, unfiltered
        </motion.h2>

        <ol className="relative">
          {events.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-6 pb-10 relative"
            >
              <div
                className={`font-mono text-sm pt-1 ${
                  e.italic ? 'italic text-muted' : 'text-pink'
                }`}
              >
                {e.year}
              </div>
              <div className="relative pl-6 border-l border-white/10">
                <span
                  className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full"
                  style={{
                    background: e.italic
                      ? '#444'
                      : 'linear-gradient(135deg, #e879a0, #7c3aed)',
                    boxShadow: e.italic ? 'none' : '0 0 12px rgba(232,121,160,0.6)',
                  }}
                />
                <h3
                  className={`font-serif text-lg md:text-xl ${
                    e.italic ? 'italic text-muted' : 'text-ink'
                  }`}
                >
                  {e.title}
                </h3>
                {e.note && <p className="text-muted text-sm mt-1">{e.note}</p>}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
