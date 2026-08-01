import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Software Engineer',
    company: 'Boston Consulting Group',
    where: 'Gurugram, HR',
    duration: 'Aug 2025 — Present',
    points: [
    'Engineered an end-to-end GenAI workflow automation pipeline that retrieves case data from Snowflake, routes it by project type, and generates sanitized titles via Azure OpenAI with dynamic prompting; added human-in-the-loop approval through webhook-based forms and automated Outlook notifications', 'Built and maintained LLM-based auto-tagging and auto-sanitization services for BCG’s internal Research Vantage content platform, reducing manual content-processing effort and accelerating org-wide adoption of AI-assisted workflows in production', 'Increased GenAI service reliability by ~70% by authoring a comprehensive unit, integration, and regression test suite covering 14+ critical service paths, reducing production incidents to near-zero', 'Hardened security posture across 4 repositories by running SonarQube and Prisma scans, proactively identifying and resolving all critical- and high-severity vulnerabilities before production deployment', 'Automated 4+ recurring multi-source data extraction and reporting workflows in Python, eliminating 8 hrs/week of manual analyst effort and reducing turnaround times from days to minutes', 'Reduced API response latency by 20–25% through Datadog-driven performance profiling, identifying 3 key bottleneck endpoints and implementing targeted query optimization and caching improvements', 'Contributed to Java (Spring Boot) microservices for BCG Research Vantage’s internal content platform, supporting content sanitization and publish workflows at enterprise scale', 'Owned the end-to-end bug lifecycle through ServiceNow, triaging, prioritizing, and resolving 30+ production tickets while collaborating with cross-functional stakeholders to ensure timely issue resolution and platform stability'
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'ULAI',
    where: 'Bengaluru, KA',
    duration: 'May 2025 — Jul 2025',
    points: [
'Built backend APIs for DoxScribe, an AI-powered medical transcription SaaS, enabling automated generation of structured clinical reports from unstructured audio and text input using LLM pipelines', 'Designed and optimized Node.js REST APIs and SQL queries powering analytics data pipelines, improving data retrieval performance and reporting reliability for production workflows', 'Developed and shipped full-stack features for the ULAI client analytics dashboard using React.js (Vite) and Node.js, improving data visibility and enabling real-time KPI tracking for business users', 'Maintained CI/CD pipeline hygiene across 2 active repos, integrated 3rd-party APIs, enforced Git branching conventions, and maintained deployment-ready build status throughout the internship'
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
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-12 text-ink"
        >
          Experience
        </motion.h2>

        <ol className="relative border-l border-rule pl-6 md:pl-8 space-y-12">
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
                className="absolute -left-[33px] md:-left-[41px] top-2 w-3 h-3 rounded-full bg-pink ring-4 ring-bg"
              />
              <div className="rounded-2xl bg-card border border-rule p-6">
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
