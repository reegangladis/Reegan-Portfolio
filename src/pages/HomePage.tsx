import React, { useRef, useState, lazy, Suspense } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  MapPin,
  Download,
  Github,
  Code2,
  Cpu,
  Workflow,
  Database,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { Button } from '../components/common/Button';
import { PageHeader } from '../components/common/PageHeader';
import { ResumeModal } from '../components/common/ResumeModal';
import { useMousePosition } from '../hooks/useMousePosition';
import { PROJECTS_DATA } from '../data/projectsData';
import { EXPERIENCES_DATA } from '../data/experienceData';
import { EDUCATION_DATA } from '../data/educationData';
import { isReducedMotion } from '../utils/animations';

// Lazy-load 3D Hero Canvas for high performance
const HeroCanvas = lazy(() =>
  import('../components/3d/HeroCanvas').then((m) => ({ default: m.HeroCanvas }))
);

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const HomePage: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const mousePosition = useMousePosition();

  // Animation Refs
  const heroRef = useRef<HTMLDivElement>(null);
  const introPillRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);

  // Featured 3 projects
  const featuredProjects = PROJECTS_DATA.filter((p) =>
    ['vertexerp-ai', 'excelr-track360', 'learnova-ai'].includes(p.slug)
  );

  // Hero Entrance Animations
  useGSAP(
    () => {
      if (isReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(introPillRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.2,
      })
        .from(
          headingRef.current,
          {
            opacity: 0,
            y: 35,
            duration: 0.9,
          },
          '-=0.3'
        )
        .from(
          roleRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.7,
          },
          '-=0.5'
        )
        .from(
          bioRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          ctaGroupRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          metricsRef.current,
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          '-=0.3'
        )
        .from(
          canvasWrapperRef.current,
          {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            ease: 'expo.out',
          },
          0.3
        );
    },
    { scope: heroRef }
  );

  return (
    <>
      <SEO
        title="Reegan Gladis P — Software Development Engineer & AI/ML Engineer"
        description="Official portfolio of Reegan Gladis P — Software Development Engineer, Full Stack Developer and AI/ML Engineer in Bengaluru, India. Building enterprise platforms, FastAPI backends, and 3D web systems."
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* =========================================================================
          1. 3D HERO SECTION
      ========================================================================= */}
      <div
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 ambient-glow bg-grid-pattern"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 flex flex-col justify-center z-10">
              {/* Introduction Pill */}
              <div
                ref={introPillRef}
                className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase bg-surface-elevated/90 border border-primary/30 text-primary shadow-[0_0_15px_rgba(0,240,255,0.15)] w-fit"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>HELLO, I'M</span>
              </div>

              {/* Large Animated Heading */}
              <h1
                ref={headingRef}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight text-text-primary leading-[1.05]"
              >
                REEGAN{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#55F7FF] to-secondary">
                  GLADIS P
                </span>
              </h1>

              {/* Roles & Location */}
              <div ref={roleRef} className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-lg sm:text-xl font-heading font-semibold text-text-primary">
                  Software Development Engineer
                </span>
                <span className="hidden sm:inline text-text-muted">•</span>
                <span className="text-sm sm:text-base font-mono text-secondary font-medium">
                  Full Stack Developer | AI/ML Engineer
                </span>
              </div>

              {/* Location Badge */}
              <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-text-muted">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Bengaluru, India</span>
              </div>

              {/* Professional Introduction */}
              <p
                ref={bioRef}
                className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl leading-relaxed"
              >
                Crafting robust enterprise backends with FastAPI and PostgreSQL, matched with highly responsive, strictly typed React interfaces. Specialized in decoupled microservices, contextual RAG intelligence, and Salesforce CRM automation.
              </p>

              {/* CTAs */}
              <div
                ref={ctaGroupRef}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  magnetic
                >
                  Explore My Work
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={<Download className="w-4 h-4 text-primary" />}
                  onClick={() => setResumeModalOpen(true)}
                  magnetic
                >
                  Download Resume
                </Button>
              </div>

              {/* Key Metrics Strip */}
              <div
                ref={metricsRef}
                className="mt-12 pt-6 border-t border-surface-border grid grid-cols-3 gap-6 font-mono text-xs text-text-muted"
              >
                <div>
                  <div className="text-primary font-bold text-xl sm:text-2xl font-heading">
                    5+
                  </div>
                  <div className="mt-0.5 text-[11px]">Enterprise Projects</div>
                </div>
                <div>
                  <div className="text-secondary font-bold text-xl sm:text-2xl font-heading">
                    8
                  </div>
                  <div className="mt-0.5 text-[11px]">Technical Domains</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold text-xl sm:text-2xl font-heading">
                    100%
                  </div>
                  <div className="mt-0.5 text-[11px]">Verified Credentials</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Cyber-Sphere */}
            <div
              ref={canvasWrapperRef}
              className="lg:col-span-5 relative flex items-center justify-center"
            >
              <Suspense
                fallback={
                  <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                  </div>
                }
              >
                <HeroCanvas mousePosition={mousePosition} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. BRIEF ABOUT ME SECTION
      ========================================================================= */}
      <SectionWrapper spacing="lg" className="border-t border-surface-border/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase text-primary bg-surface-elevated border border-primary/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>// 01 EXECUTIVE SUMMARY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text-primary tracking-tight">
              Engineering with Scalability,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Precision & AI
              </span>
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              I am a Software Development Engineer currently pursuing my Master of Computer Applications (MCA) at JAIN University, Bengaluru. My background blends academic computer science rigor with hands-on enterprise software implementation.
            </p>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Having served as a Salesforce Administrator at ExcelR Edtech and completed specialized data science & analytics practicums at Prinston Smart Engineers and Anudip Foundation, I bridge user-centric frontend experiences with high-throughput backend data pipelines.
            </p>

            <div className="pt-2">
              <Button
                to="/about"
                variant="outline"
                size="md"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
              >
                Read Full Developer Narrative
              </Button>
            </div>
          </div>

          {/* Quick Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-colors hud-bracket">
              <Code2 className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-bold text-sm text-text-primary">
                Full-Stack Architecture
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                React 18, TypeScript, FastAPI, PostgreSQL, and Redis caching.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-secondary/40 transition-colors hud-bracket">
              <Cpu className="w-6 h-6 text-secondary mb-3" />
              <h3 className="font-heading font-bold text-sm text-text-primary">
                AI & Machine Learning
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                LangChain RAG, Ollama local inference, and Scikit-learn pipelines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-colors hud-bracket">
              <Workflow className="w-6 h-6 text-primary mb-3" />
              <h3 className="font-heading font-bold text-sm text-text-primary">
                Salesforce CRM Admin
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                Salesforce Flow, Lead management, and custom object architectures.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-secondary/40 transition-colors hud-bracket">
              <Database className="w-6 h-6 text-secondary mb-3" />
              <h3 className="font-heading font-bold text-sm text-text-primary">
                Data Analytics
              </h3>
              <p className="text-xs text-text-secondary mt-1">
                196+ hours training in Power BI dashboards, SQL, and Excel.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          3. FEATURED PROJECTS SECTION
      ========================================================================= */}
      <SectionWrapper id="featured-projects" spacing="lg" withGrid className="border-t border-surface-border/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <PageHeader
            tag="// 02 FLAGSHIP WORK"
            title="Featured Engineering"
            titleHighlight="Projects"
            subtitle="Deep dive into production-grade systems engineered with decoupled microservices, automated workflows, and artificial intelligence."
            className="mb-0"
          />

          <Button
            to="/projects"
            variant="secondary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="shrink-0 self-start md:self-auto"
          >
            All 5 Projects
          </Button>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-all duration-300 group shadow-subtle-card hud-bracket"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-primary tracking-wider uppercase">
                    PROJECT 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-text-muted border border-surface-border">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-text-muted mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Architecture Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-surface-elevated text-primary border border-surface-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-surface-border/60 flex items-center justify-between">
                <Button
                  to={`/projects/${project.slug}`}
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  View Case Study
                </Button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface-elevated border border-surface-border text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          4. TECHNICAL SKILLS SNAPSHOT
      ========================================================================= */}
      <SectionWrapper spacing="lg" withGlow className="border-t border-surface-border/50">
        <PageHeader
          tag="// 03 CAPABILITIES MATRIX"
          title="Core Technical"
          titleHighlight="Competencies"
          subtitle="A focused look at primary programming languages, backend frameworks, AI orchestration tools, and enterprise databases."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {[
            { name: 'Python', role: 'FastAPI / ML / RAG' },
            { name: 'TypeScript', role: 'React / Strict Types' },
            { name: 'FastAPI', role: 'Async Microservices' },
            { name: 'PostgreSQL', role: 'SQLAlchemy / pgvector' },
            { name: 'LangChain', role: 'LLMs & AI Copilots' },
            { name: 'Salesforce', role: 'Flow / Lead Management' },
          ].map((item) => (
            <div
              key={item.name}
              className="p-4 rounded-xl bg-surface border border-surface-border hover:border-primary/40 transition-colors text-center group"
            >
              <div className="font-heading font-bold text-base text-text-primary group-hover:text-primary transition-colors">
                {item.name}
              </div>
              <div className="font-mono text-[10px] text-text-muted mt-1">
                {item.role}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-heading font-bold text-base text-text-primary">
              Looking for the Complete Technology Matrix?
            </h4>
            <p className="text-xs text-text-secondary mt-0.5">
              Explore 38+ technologies across 8 comprehensive domains with search and project cross-references.
            </p>
          </div>

          <Button
            to="/skills"
            variant="primary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="shrink-0"
          >
            Open Technology Explorer
          </Button>
        </div>
      </SectionWrapper>

      {/* =========================================================================
          5. PROFESSIONAL EXPERIENCE SNAPSHOT
      ========================================================================= */}
      <SectionWrapper spacing="lg" className="border-t border-surface-border/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <PageHeader
            tag="// 04 INDUSTRY TRACK"
            title="Professional"
            titleHighlight="Experience"
            subtitle="Verified career roles across enterprise CRM administration, predictive machine learning, and business intelligence."
            className="mb-0"
          />

          <Button
            to="/experience"
            variant="secondary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="shrink-0 self-start md:self-auto"
          >
            Full Chronology
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCES_DATA.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-colors flex flex-col justify-between hud-bracket"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-primary uppercase">
                    {exp.period}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-elevated text-text-muted border border-surface-border">
                    {exp.status}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-text-primary">
                  {exp.role}
                </h3>
                <p className="text-xs font-medium text-text-secondary mt-0.5 mb-3">
                  {exp.company}
                </p>

                <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                  {exp.responsibilities[0]}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-secondary" />
                  {exp.location}
                </span>
                <span className="text-primary font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          6. ACADEMIC EDUCATION PREVIEW
      ========================================================================= */}
      <SectionWrapper spacing="lg" withGrid className="border-t border-surface-border/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <PageHeader
            tag="// 05 ACADEMIC ROOTS"
            title="Education"
            titleHighlight="& Degrees"
            subtitle="Computer Applications background from renowned Bengaluru institutions."
            className="mb-0"
          />

          <Button
            to="/education"
            variant="secondary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
            className="shrink-0 self-start md:self-auto"
          >
            View Academic Credentials
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-colors hud-bracket"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-primary uppercase">
                  {edu.period}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-surface-elevated text-emerald-400 border border-emerald-500/30">
                  {edu.status}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold text-text-primary">
                {edu.degree}
              </h3>
              <p className="text-sm text-text-secondary mt-1 mb-4">
                {edu.institution}
              </p>

              <p className="text-xs text-text-secondary leading-relaxed">
                {edu.highlights[0]}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* =========================================================================
          7. HIGH-CONVERSION DIRECT CONTACT CTA
      ========================================================================= */}
      <SectionWrapper spacing="lg" withGlow className="border-t border-surface-border/50">
        <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-surface border border-surface-border overflow-hidden hud-bracket text-center max-w-4xl mx-auto shadow-2xl">
          {/* Background mesh glow */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-secondary/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase bg-surface-elevated border border-primary/30 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>DIRECT TRANSMISSION CHANNEL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-text-primary tracking-tight leading-tight">
              Ready to Architect Intelligent{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#55F7FF] to-secondary">
                Software Systems?
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
              Available for Software Development Engineer and AI/ML Engineer opportunities in Bengaluru or remote. Let's discuss your product roadmap and engineering challenges.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowUpRight className="w-4 h-4" />}
                magnetic
              >
                Initiate Transmission
              </Button>

              <Button
                href="https://github.com/reegangladis"
                variant="secondary"
                size="lg"
                external
                leftIcon={<Github className="w-4 h-4" />}
                magnetic
              >
                Explore GitHub Profile
              </Button>
            </div>

            <div className="mt-8 font-mono text-[11px] text-text-muted">
              Direct Mail: <span className="text-primary">reegangladis.p@gmail.com</span> • Location: Bengaluru, India
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};
