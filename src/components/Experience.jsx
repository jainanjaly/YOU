import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Software Engineer',
    company: 'Boston Consulting Group',
    where: 'Gurugram, HR',
    duration: 'Aug 2025 — Present',
    points: [
      'Designed and maintained Java + Spring Boot microservices for BCG Research Vantage, supporting content sanitization and publishing workflows at enterprise scale.',
      'Lifted GenAI service reliability ~70% by introducing unit, integration, and regression test coverage across critical services.',
      'Cut service response times by 20–25% through Datadog-based performance analysis, bottleneck isolation, and targeted tuning.',
      'Integrated SonarQube and Prisma scans into repo workflows to surface code-quality and security issues earlier.',
      'Triaged and resolved production data issues via ServiceNow within an Agile/Scrum cadence.',
      'Automated multi-source data extraction in Python and built LLM-powered auto-tagging / auto-sanitization services that expanded AI-assisted workflows in production.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'ULAI',
    where: 'Bengaluru, KA',
    duration: 'May 2025 — Jul 2025',
    points: [
      'Developed backend APIs for DoxScribe, an AI-powered medical transcription SaaS, enabling structured clinical reports from unstructured audio and text via LLM pipelines.',
      'Designed and optimized Node.js REST APIs and SQL queries powering analytics data pipelines, improving retrieval performance and reporting reliability.',
      'Delivered full-stack features for a client analytics dashboard using React.js + Node.js, enabling real-time KPI tracking for business users.',
      'Integrated third-party APIs into backend services and supported deployment-ready releases through regular CI/CD participation.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 md:px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          Where I&apos;ve been
        </motion.h2>

        <ol className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12">
          {experience.map((e, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span
                className="absolute -left-[33px] md:-left-[41px] top-2 w-3.5 h-3.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #e879a0, #7c3aed)',
                  boxShadow: '0 0 12px rgba(232,121,160,0.6)',
                }}
              />
              <div className="card-glow rounded-2xl p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-xl md:text-2xl text-ink">
                    {e.role} <span className="text-muted">·</span>{' '}
                    <span className="text-pink">{e.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {e.duration} · {e.where}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {e.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-muted text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-pink mt-1.5 shrink-0">·</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
