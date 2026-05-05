import { motion } from 'framer-motion';

const groups = [
  {
    name: 'Backend & Languages',
    pills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Node.js', 'Flask', 'Python', 'SQL', 'JavaScript'],
  },
  {
    name: 'Cloud, DevOps & Tools',
    pills: ['AWS', 'Docker', 'Git', 'Linux', 'CI/CD', 'Jira', 'ServiceNow', 'SonarQube', 'Prisma', 'Datadog'],
  },
  {
    name: 'Currently Learning',
    pills: ['Agentic Workflows', 'LLM Evals', 'Distributed Systems', 'Kubernetes', 'System Design'],
  },
];

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 18,
};

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow text-center"
        >
          // toolkit
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center font-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          What I work with
        </motion.h2>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.name}>
              <p className="font-mono text-xs text-muted uppercase tracking-[0.2em] mb-4">
                {g.name}
              </p>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={{ show: { transition: { staggerChildren: 0.04 } } }}
                className="flex flex-wrap gap-2"
              >
                {g.pills.map((p) => (
                  <motion.span
                    key={p}
                    variants={{
                      hidden: { opacity: 0, scale: 0.6, y: 8 },
                      show: { opacity: 1, scale: 1, y: 0, transition: spring },
                    }}
                    whileHover={{ scale: 1.06 }}
                    className="px-3.5 py-1.5 rounded-full text-sm border border-white/10 bg-card text-ink/90 hover:border-pink/50 hover:text-pink transition-colors"
                  >
                    {p}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
