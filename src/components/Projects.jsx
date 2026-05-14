import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// Each completed project has a detailed page view.
// TODO: replace placeholder media + copy with real content.
const completed = [
  {
    id: 'foodray',
    name: 'FoodRay — Food Redistribution App',
    year: 'Dec 2024 - Mar 2025',
    short:
      "A cross-platform Flutter + Firebase app connecting restaurants with NGOs to redistribute surplus food. Real-time, role-based, and built for tired restaurant managers at 11pm.",
    tags: ['Flutter', 'Firebase', 'GCP'],
    detail: {
      tagline: 'Less food in bins. More food on plates.',
      problem:
        "Restaurants throw away usable surplus every night. NGOs have demand, but no clean way to discover and claim it in time. The gap is logistics and trust, not goodwill.",
      build:
        "I designed a cross-platform Flutter app with Firebase as the backend — real-time updates so listings disappear the moment they're claimed, role-based auth (restaurant vs NGO vs admin), and a hand-rolled flow for verification.",
      stack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Cloud Functions'],
      links: [
        { label: 'Poster →', href: '#' /* TODO: add link */ },
        {label: 'Github ->', href: 'https://github.com/jainanjaly/FoodRAY'}
      ],
      images: [
        // TODO: add screenshot URLs (e.g. /projects/foodray/1.png)
        "/projects/foodray/foodray_1.jpg",
      ],
      achievements: [
        'Participated in science exitibition 2025, could not win a prize, but won hearts instead',
      ],
    },
  },
  {
    id: 'sentiment',
    name: 'Sentiment Analysis & Well-Being',
    year: '2024',
    short:
      "An NLP pipeline with statistical modeling (Chi-square) that analyzes sentiment across text and speech. Paired with a small interactive dashboard so the trends actually mean something.",
    tags: ['Python', 'NLP', 'Statistics', 'Dashboard'],
    detail: {
      tagline: 'Statistics, but actually useful.',
      problem:
        "Sentiment scores on their own are noise. The interesting question is whether a shift is statistically meaningful — and most dashboards don't bother to answer that.",
      build:
        "Built a Python NLP pipeline that ingests text and speech, scores sentiment, and runs Chi-square tests to flag genuine distribution shifts. Wired it to a small interactive dashboard so non-technical readers could explore trends without a stats degree.",
      stack: ['Python', 'NLTK', 'scikit-learn', 'pandas', 'Plotly / Streamlit'],
      links: [
        { label: 'Project Link →', href: 'https://github.com/jainanjaly/Sentiment-Analyser' /* TODO: add link */ },
      ],
      images: ["projects/sentiment/sentiment_1.jpg", "projects/sentiment/sentiment_2.jpg", "projects/sentiment/sentiment_3.jpg"],
      achievements: [
        'Winner, Science Exhibition — School of Sciences, Christ University (Mar 2024)',
        // TODO: add more if applicable
      ],
    },
  },
   {
    id: 'vehicle-speed-tracker',
    name: 'Vehicle Speed Estimation',
    year: '2023',
    short:
      "A computer vision project that estimates vehicle speed from video footage. Utilizes object detection and tracking algorithms to provide accurate speed measurements in real-time.",
    tags: ['Python', 'OpenCV', 'Machine Learning', 'Computer Vision'],
    detail: {
      tagline: 'Accurate vehicle speed estimation using computer vision.',
      problem:
        "Traditional speed measurement methods are either expensive or require manual intervention. There is a need for an automated, cost-effective solution that can provide real-time speed estimates.",
      build:
        "Developed a computer vision system using Python and OpenCV to detect and track vehicles in video footage. Implemented algorithms to calculate speed based on object movement and frame rate, providing real-time speed estimates.",
      stack: ['Python', 'OpenCV', 'NumPy', 'Pandas', 'Matplotlib'],
      links: [
        { label: 'Project Link →', href: 'https://github.com/jainanjaly/Vehicle_Speed_Estimation_Using_YOLO' /* TODO: add link */ },
      ],
      images: ["projects/vehicle/vehicle_1.jpg", "projects/vehicle/vehicle_2.jpg"],
      achievements: [
        'Runner — Hacktech 2023, IKST · Indo-Korea Science and Technology Centre',
        // TODO: add more if applicable
      ],
    },
  },
   {
    id: 'Convergence',
    name: 'Website Designing For Convergence 2024',
    year: '2023',
    short:
      "Convergence is an inter-collegiate fest of Christ University. Created a fully functional, user-interactive website using HTML, CSS, and JavaScript.",
    tags: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
    detail: {
      tagline: 'Creating interactive web experiences for Convergence 2024.',
      problem:
        "Many college fests lack a dedicated, interactive online presence. There was a need for a website that could engage participants and provide information effectively.",
      build:
        "Developed a fully functional, user-interactive website using HTML, CSS, and JavaScript. Implemented responsive design and interactive elements to enhance user experience and engagement.",
      stack: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      links: [
        { label: 'Project Link →', href: 'https://convergence-2024.netlify.app' /* TODO: add link */ },
        { label: 'Github →', href: 'https://github.com/jainanjaly/Convergence-24 '}
      ],
      images: [],
    },
  },
];

const ongoing = [
  {
    id: 'trailtales',
    name: 'TrailTales',
    year: '2026',
    short: "TrailTales is evolving from a functional travel diary into a fully customizable interactive memory book platform. The core vision is to empower users to create personalized, visually stunning digital memory lanes where each trip becomes a unique canvas for creativity, storytelling, and emotional connection.",
    tags: ['React', 'Node.js', 'AWS', 'MongoDB', 'LLMs'],
  },
  {
    id: 'data-agent',
    name: 'Data-Analysis Agent',
    year: '2026',
    short:
      "An AI tool that turns CSV or Excel files into clear, professional reports with insights and charts. It automates data analysis so you don’t have to do it manually.",
    tags: ['HTML', 'Agentic', 'LLMs', "Data Visualization"],
  },
];

function ProjectCard({ p, onOpen, isOngoing }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      onClick={isOngoing ? undefined : onOpen}
      className={`group rounded-2xl bg-card border border-rule p-6 md:p-7 flex flex-col h-full transition-colors hover:border-ink/30 ${
        isOngoing ? '' : 'cursor-pointer'
      }`}
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {p.year}
        </span>
        {isOngoing && (
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            in progress
          </span>
        )}
      </div>
      <h3 className="font-serif text-2xl text-ink leading-tight">{p.name}</h3>
      <p className="text-muted text-[15px] mt-3 leading-relaxed flex-1">
        {p.short}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-5">
        {p.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded text-[11px] font-mono text-ink-soft bg-warm border border-rule"
          >
            {t}
          </span>
        ))}
      </div>
      {!isOngoing && (
        <div className="mt-6 pt-5 border-t border-rule">
          <span className="inline-flex items-center gap-1.5 text-sm text-ink group-hover:text-pink transition-colors font-medium">
            Read case study
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </span>
        </div>
      )}
    </motion.article>
  );
}

function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const d = project.detail;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[120] bg-bg/95 backdrop-blur-md overflow-y-auto"
    >      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-6 md:px-10 py-12"
      >
        <button
          onClick={onClose}
          className="font-mono text-xs text-muted hover:text-pink transition-colors mb-10"
        >
          ← back to projects
        </button>

        <p className="eyebrow">// case study · {project.year}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 text-ink leading-tight">
          {project.name}
        </h1>
        <p className="font-serif italic text-xl md:text-2xl text-pink mt-6">
          {d.tagline}
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="eyebrow mb-3">// the problem</h2>
            <p className="text-ink/90 text-base md:text-lg leading-relaxed">
              {d.problem}
            </p>
          </section>

          <section>
            <h2 className="eyebrow mb-3">// what I built</h2>
            <p className="text-ink/90 text-base md:text-lg leading-relaxed">
              {d.build}
            </p>
          </section>

          <section>
            <h2 className="eyebrow mb-3">// stack</h2>
            <div className="flex flex-wrap gap-2">
              {d.stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-sm border border-rule bg-card text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {d.images && d.images.length > 0 && (
            <section>
              <h2 className="eyebrow mb-3">// glimpses</h2>
              <div
                className={`grid gap-3 ${
                  d.images.length === 1
                    ? 'grid-cols-1'
                    : d.images.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-2 md:grid-cols-3'
                }`}
              >
                {d.images.map((src, i) => (
                  <a
                    key={i}
                    href={src}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden rounded-xl border border-rule hover:border-ink/30 transition-colors"
                  >
                    <img
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </a>
                ))}
              </div>
            </section>
          )}

          {d.achievements && d.achievements.length > 0 && (
            <section>
              <h2 className="eyebrow mb-3">// achievements</h2>
              <ul className="space-y-3">
                {d.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="rounded-xl p-4 text-ink-soft text-sm md:text-base flex gap-3 bg-card border border-rule"
                  >
                    <span className="text-pink">★</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {d.links && d.links.length > 0 && (
            <section className="pt-4 flex flex-wrap gap-3">
              {d.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full text-sm font-medium bg-ink text-bg hover:bg-pink transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </section>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [openId, setOpenId] = useState(null);
  const openProject = completed.find((p) => p.id === openId);

  return (
    <section id="projects" className="relative px-6 md:px-16 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow"
        >
          // projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="display-serif text-4xl md:text-5xl font-semibold mt-3 mb-4 text-ink"
        >
          Projects
        </motion.h2>
        <p className="text-muted mb-14 max-w-xl text-[15px] leading-relaxed">
          A mix of shipped projects and things still in progress. Click any of
          the completed ones for the full write-up.
        </p>

        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
            In progress
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {ongoing.map((p) => (
              <ProjectCard key={p.id} p={p} isOngoing />
            ))}
          </div>
        </div>

        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted mb-5">
            Shipped
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {completed.map((p) => (
              <ProjectCard
                key={p.id}
                p={p}
                onOpen={() => setOpenId(p.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openProject && (
          <ProjectDetail
            key={openProject.id}
            project={openProject}
            onClose={() => setOpenId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
