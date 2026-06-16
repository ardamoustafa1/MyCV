import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  CheckCircle2,
  Code2,
  Command,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileText,
  Gauge,
  Globe2,
  Layers,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  X,
} from "lucide-react";
import { LanguageProvider, useTranslation } from "./i18n.jsx";
import "./styles.css";

/* ─── SVG Brand Icons ────────────────────────────────────── */
function Github({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7.01c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function Linkedin({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.98H3.75V20h3.19V8.98ZM7.2 5.58c0-1.03-.78-1.81-1.88-1.81-1.09 0-1.88.78-1.88 1.81 0 1.01.77 1.82 1.84 1.82h.02c1.12 0 1.9-.81 1.9-1.82ZM20.56 13.68c0-3.36-1.79-4.93-4.18-4.93-1.93 0-2.79 1.07-3.27 1.82V8.98H9.92c.04 1.03 0 11.02 0 11.02h3.19v-6.15c0-.33.02-.66.12-.89.26-.66.86-1.34 1.86-1.34 1.31 0 1.84 1.01 1.84 2.48V20h3.19v-6.32h.44Z" />
    </svg>
  );
}

/* ─── Constants ──────────────────────────────────────────── */
const links = {
  github: "https://github.com/ardamoustafa1",
  linkedin: "https://www.linkedin.com/in/arda-moustafa-746335335",
  email: "mailto:ardamoustafa_@hotmail.com",
  cv: "/ArdaMoustafa_CV_TR.pdf",
};

/* ─── Helpers ────────────────────────────────────────────── */
const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: springTransition
  }
};

/* ─── App Shell ──────────────────────────────────────────── */
function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      
      <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main>
        <Hero />
        <About />
        <Evidence />
        <CaseStudies />
        <Stack />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

/* ─── Navigation ─────────────────────────────────────────── */
function SiteNav({ menuOpen, setMenuOpen }) {
  const { t, lang, setLang } = useTranslation();
  
  const navItems = [
    ["home", t("nav.home")],
    ["about", t("nav.about")],
    ["evidence", t("nav.evidence")],
    ["work", t("nav.work")],
    ["stack", t("nav.stack")],
    ["contact", t("nav.contact")],
  ];

  return (
    <header className="site-nav">
      <a className="brand-mark" href="#home" aria-label="Arda Moustafa home">
        <div className="brand-icon"><Command size={16} /></div>
        Arda Moustafa
      </a>

      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
        {navItems.map(([id, label]) => (
          <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <button 
          className="lang-toggle" 
          onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
        >
          {lang === 'en' ? 'EN' : 'TR'}
        </button>
        <a className="icon-link" href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a className="icon-link" href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────────── */
function Hero() {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <img src="/ARKAPLAN.png" alt="Arda Moustafa Background" />
      </div>
      <div className="container hero-inner">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
            }
          }}
        >
          <motion.div className="eyebrow" variants={revealVariants}>
            {t("hero.eyebrow")}
          </motion.div>

          <motion.div className="hero-copy" variants={revealVariants}>
            <h1>
              <span>{t("hero.title_part1")}</span>
              <span className="text-highlight">{t("hero.title_part2")}</span>
            </h1>
            <p className="hero-lead">
              {t("hero.subtitle")}
            </p>
          </motion.div>

          <motion.div className="hero-actions" variants={revealVariants}>
            <a className="btn primary" href="#work">
              {t("hero.view_work")}
            </a>
            <a className="btn secondary" href={links.cv} download>
              {t("hero.download_cv")}
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        <ArrowDown size={24} />
      </div>
    </section>
  );
}

/* ─── About ──────────────────────────────────────────────── */
function About() {
  const { t } = useTranslation();
  return (
    <Section id="about" kicker={t("about.kicker")} title={t("about.title")} subtitle={t("about.subtitle")}>
      <div className="about-layout">
        <Reveal className="about-photo-wrapper">
          <img src="/ardaresmifoto.jpeg" alt="Arda Moustafa Portrait" className="about-photo" />
          <div className="about-photo-glow"></div>
        </Reveal>
        
        <div className="about-content">
          <Reveal delay={0.1}>
            <p className="about-text-lead" dangerouslySetInnerHTML={{ __html: t("about.text_lead") }} />
          </Reveal>
          
          <Reveal delay={0.15}>
            <p className="about-text" dangerouslySetInnerHTML={{ __html: t("about.text") }} />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="about-highlights">
              <div className="highlight-item">
                <CheckCircle2 size={20} className="highlight-icon" />
                <div>
                  <strong>{t("about.highlight1_title")}</strong>
                  <span>{t("about.highlight1_desc")}</span>
                </div>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={20} className="highlight-icon" />
                <div>
                  <strong>{t("about.highlight2_title")}</strong>
                  <span>{t("about.highlight2_desc")}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ─── Evidence ───────────────────────────────────────────── */
function Evidence() {
  const { t } = useTranslation();
  const [stats, setStats] = useState({ repos: "31", followers: "212" });

  useEffect(() => {
    fetch("https://api.github.com/users/ardamoustafa1")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.public_repos !== undefined) {
          setStats({
            repos: data.public_repos.toString(),
            followers: data.followers.toString(),
          });
        }
      })
      .catch((err) => console.error("Failed to fetch GitHub stats:", err));
  }, []);

  const dynamicEvidence = [
    { value: stats.repos, label: t("evidence.label1"), desc: t("evidence.desc1") },
    { value: stats.followers, label: t("evidence.label2"), desc: t("evidence.desc2") },
    { value: "<800ms", label: t("evidence.label3"), desc: t("evidence.desc3") },
    { value: "-60%", label: t("evidence.label4"), desc: t("evidence.desc4") },
    { value: "3-Layer", label: t("evidence.label5"), desc: t("evidence.desc5") },
    { value: "13", label: t("evidence.label6"), desc: t("evidence.desc6") },
  ];

  return (
    <Section id="evidence" kicker={t("evidence.kicker")} title={t("evidence.title")} subtitle={t("evidence.subtitle")}>
      <div className="evidence-grid">
        {dynamicEvidence.map((item, i) => (
          <Reveal className="evidence-card" key={item.label} delay={i * 0.05}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─── Case Studies ───────────────────────────────────────── */
function CaseStudies() {
  const { t } = useTranslation();

  const caseStudies = [
    {
      title: "MarketPulse AI",
      role: t("work.cases.marketpulse.role"),
      icon: Gauge,
      repo: "https://github.com/ardamoustafa1/MarketPulseAI",
      summary: t("work.cases.marketpulse.summary"),
      problem: t("work.cases.marketpulse.problem"),
      architecture: [
        t("work.cases.marketpulse.arch1"),
        t("work.cases.marketpulse.arch2"),
        t("work.cases.marketpulse.arch3"),
      ],
      result: [
        t("work.cases.marketpulse.result1"),
        t("work.cases.marketpulse.result2"),
        t("work.cases.marketpulse.result3")
      ],
      tech: ["FastAPI", "PostgreSQL", "Redis", "Terraform"],
    },
    {
      title: "SystemForge AI",
      role: t("work.cases.systemforge.role"),
      icon: FileText,
      repo: "https://github.com/ardamoustafa1/SystemForge-AI",
      summary: t("work.cases.systemforge.summary"),
      problem: t("work.cases.systemforge.problem"),
      architecture: [
        t("work.cases.systemforge.arch1"),
        t("work.cases.systemforge.arch2"),
        t("work.cases.systemforge.arch3"),
      ],
      result: [
        t("work.cases.systemforge.result1"),
        t("work.cases.systemforge.result2"),
        t("work.cases.systemforge.result3")
      ],
      tech: ["Next.js", "FastAPI", "Redis Streams", "Docker"],
    },
    {
      title: "TeamFlow",
      role: t("work.cases.teamflow.role"),
      icon: Layers,
      repo: "https://github.com/ardamoustafa1/TeamFlow",
      summary: t("work.cases.teamflow.summary"),
      problem: t("work.cases.teamflow.problem"),
      architecture: [
        t("work.cases.teamflow.arch1"),
        t("work.cases.teamflow.arch2"),
        t("work.cases.teamflow.arch3"),
      ],
      result: [
        t("work.cases.teamflow.result1"),
        t("work.cases.teamflow.result2"),
        t("work.cases.teamflow.result3")
      ],
      tech: ["Node.js", "PostgreSQL", "Kubernetes", "OpenTelemetry"],
    },
    {
      title: "FinCoach AI",
      role: t("work.cases.fincoach.role"),
      icon: LockKeyhole,
      repo: "https://github.com/ardamoustafa1/FinCoach-AI",
      summary: t("work.cases.fincoach.summary"),
      problem: t("work.cases.fincoach.problem"),
      architecture: [
        t("work.cases.fincoach.arch1"),
        t("work.cases.fincoach.arch2"),
        t("work.cases.fincoach.arch3"),
      ],
      result: [
        t("work.cases.fincoach.result1"),
        t("work.cases.fincoach.result2"),
        t("work.cases.fincoach.result3")
      ],
      tech: ["TensorFlow.js", "React", "Supabase", "WebCrypto"],
    },
  ];

  return (
    <Section id="work" kicker={t("work.kicker")} title={t("work.title")} subtitle={t("work.subtitle")}>
      <div className="case-list">
        {caseStudies.map((study, i) => (
          <Reveal className="study-card" key={study.title} delay={0.1}>
            <div className="study-main">
              <p className="study-role">{study.role}</p>
              <h3>{study.title}</h3>
              <p className="study-summary">{study.summary}</p>
              <div className="tech-row">
                {study.tech.map((tech) => (
                  <span className="tech-tag" key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="study-detail">
              <div className="detail-block">
                <h4>{t("work.arch_decisions")}</h4>
                <ul>
                  {study.architecture.map((pt, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="detail-block">
                <div className="result-grid">
                  {study.result.map((r) => (
                    <span className="result-tag" key={r}>{r}</span>
                  ))}
                </div>
                <a className="text-link" href={study.repo} target="_blank" rel="noreferrer">
                  <Github size={16} />
                  {t("work.view_repo")}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─── Stack ──────────────────────────────────────────────── */
function Stack() {
  const { t } = useTranslation();

  const stackGroups = [
    { title: t("stack.group1"), items: ["Python", "C++", "JavaScript", "React", "React Native", "HTML/CSS"] },
    { title: t("stack.group2"), items: ["FastAPI", "REST APIs", "Microservices", "WebSocket", "Node.js"] },
    { title: t("stack.group3"), items: ["PostgreSQL", "SQL", "Redis", "Firebase", "Supabase"] },
    { title: t("stack.group4"), items: ["AWS ECS", "Docker", "Terraform", "CI/CD", "Kubernetes"] },
  ];

  return (
    <Section id="stack" kicker={t("stack.kicker")} title={t("stack.title")} subtitle={t("stack.subtitle")}>
      <div className="stack-grid">
        {stackGroups.map((group, i) => (
          <Reveal className="stack-card" key={group.title} delay={i * 0.05}>
            <div className="stack-head">
              <h3>{group.title}</h3>
            </div>
            <div className="stack-items">
              {group.items.map((item) => (
                <span className="stack-tag" key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─── Contact ────────────────────────────────────────────── */
function Contact() {
  const { t } = useTranslation();

  const items = useMemo(() => [
    { icon: Mail, label: t("contact.location_label") === "Konum" ? "E-posta" : "Email", value: "ardamoustafa_@hotmail.com", href: links.email },
    { icon: MapPin, label: t("contact.location_label"), value: t("contact.location_value") },
    { icon: Linkedin, label: "LinkedIn", value: "in/arda-moustafa", href: links.linkedin },
  ], [t]);

  return (
    <Section id="contact" kicker={t("contact.kicker")} title={t("contact.title")} subtitle={t("contact.subtitle")}>
      <div className="contact-layout">
        <div className="contact-list">
          {items.map((item, i) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="contact-icon"><Icon size={20} /></div>
                <div className="contact-info">
                  <strong>{item.label}</strong>
                  <em>{item.value}</em>
                </div>
              </>
            );
            return item.href ? (
              <Reveal as="a" className="contact-item" href={item.href} target="_blank" rel="noreferrer" key={item.label} delay={i * 0.05}>
                {inner}
              </Reveal>
            ) : (
              <Reveal className="contact-item" key={item.label} delay={i * 0.05}>
                {inner}
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <form className="contact-form" action="https://formspree.io/f/xqadrlqg" method="POST">
            <div className="form-grid">
              <input type="text" name="name" placeholder={t("contact.placeholder_name")} required />
              <input type="email" name="email" placeholder={t("contact.placeholder_email")} required />
            </div>
            <input type="text" name="subject" placeholder={t("contact.placeholder_subject")} required />
            <textarea name="message" placeholder={t("contact.placeholder_message")} required />
            <button className="btn secondary" type="submit">
              {t("contact.send_message")}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* ─── Section Wrapper ────────────────────────────────────── */
function Section({ id, kicker, title, subtitle, children }) {
  return (
    <section id={id} className="content-section">
      <div className="container">
        <Reveal className="section-heading">
          <p className="section-kicker">
            {kicker}
          </p>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/* ─── Reveal Animation Component ─────────────────────────── */
function Reveal({ children, className = "", delay = 0, as: Component = "div", ...props }) {
  const MotionComponent = motion(Component);
  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { ...springTransition, delay } 
        }
      }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/* ─── Footer ─────────────────────────────────────────────── */
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Arda Moustafa.</p>
        <div className="footer-links">
          <a className="footer-link" href={links.cv} download>{t("footer.resume")}</a>
          <a className="footer-link" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="footer-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
