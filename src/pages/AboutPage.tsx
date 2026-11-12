import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import {
  Code2,
  Cpu,
  Workflow,
  Database,
  GraduationCap,
  ArrowUpRight,
  Terminal,
  Shield,
  Layers,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { isReducedMotion } from '../utils/animations';

export const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (isReducedMotion()) return;

      gsap.from('.about-reveal', {
        opacity: 0,
        y: 25,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <SEO
        title="About Reegan Gladis P — Software Development & AI/ML Engineer"
        description="Detailed background of Reegan Gladis P: Software Development Engineer, Full Stack Developer, AI/ML practitioner, and Salesforce Administrator based in Bengaluru, India."
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        <PageHeader
          tag="// 01 BIOGRAPHY & PHILOSOPHY"
          title="Architecting Systems with"
          titleHighlight="Rigor & Intelligence"
          subtitle="Software Development Engineer and AI/ML practitioner combining academic computer science foundations with hands-on enterprise software implementation."
        />

        {/* Narrative & Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-8 space-y-6 text-text-secondary leading-relaxed text-sm sm:text-base about-reveal">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hud-bracket">
              <h2 className="text-xl font-heading font-bold text-text-primary mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span>Executive Introduction</span>
              </h2>
              <p className="text-text-primary text-base sm:text-lg font-medium mb-4 leading-relaxed">
                I am a Software Development Engineer, Full Stack Developer, and AI/ML Engineer based in Bengaluru, India. I specialize in designing high-throughput backend services in FastAPI, responsive strictly typed frontends in React and TypeScript, and contextual AI/ML integration.
              </p>
              <p className="mb-4">
                Currently pursuing my Master of Computer Applications (MCA) at JAIN University, Bengaluru, I bridge deep theoretical computer science with production-grade engineering principles. My work centers on creating decoupled microservices, eliminating operational bottlenecks through intelligent automation, and building maintainable software architectures.
              </p>
              <p>
                My professional experience includes serving as a Salesforce Administrator at ExcelR Edtech Private Limited, where I configured complex CRM operations and automated business workflows, as well as data science and analytics practicums at Prinston Smart Engineers and Anudip Foundation.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-heading font-bold text-text-primary flex items-center gap-2">
                <Layers className="w-4 h-4 text-secondary" />
                <span>Engineering Pillars & Specializations</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pillar 1 */}
                <div className="p-5 rounded-xl bg-surface border border-surface-border hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Code2 className="w-5 h-5 text-primary" />
                    <h4 className="font-heading font-bold text-sm text-text-primary">
                      Full-Stack & Backend Systems
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Engineering performant asynchronous RESTful APIs using FastAPI and Python, normalized relational databases with PostgreSQL and SQLAlchemy, in-memory caching with Redis, and typed React 18 single-page applications.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-5 rounded-xl bg-surface border border-surface-border hover:border-secondary/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Cpu className="w-5 h-5 text-secondary" />
                    <h4 className="font-heading font-bold text-sm text-text-primary">
                      AI, RAG & Machine Learning
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Building contextual Retrieval-Augmented Generation (RAG) pipelines using LangChain and vector embeddings, offline local LLM orchestration via Ollama, and predictive ML classification with Scikit-learn.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-5 rounded-xl bg-surface border border-surface-border hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Workflow className="w-5 h-5 text-primary" />
                    <h4 className="font-heading font-bold text-sm text-text-primary">
                      Salesforce CRM Administration
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    Configuring enterprise CRM operations, Salesforce Flow automation, lead distribution rules, custom report types, executive dashboards, profiles, permission sets, and bulk Data Loader operations at ExcelR Edtech.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-5 rounded-xl bg-surface border border-surface-border hover:border-secondary/40 transition-colors">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <Database className="w-5 h-5 text-secondary" />
                    <h4 className="font-heading font-bold text-sm text-text-primary">
                      Data Analytics & BI
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    196+ hours of rigorous industry training through Anudip Foundation: interactive Power BI business dashboards, multi-table SQL queries, and data cleaning and modeling in Excel.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info Card */}
          <div className="lg:col-span-4 space-y-6 about-reveal">
            <div className="p-6 rounded-2xl bg-surface border border-surface-border hud-bracket shadow-subtle-card">
              <h3 className="font-heading font-bold text-base text-text-primary mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Verified Coordinates</span>
              </h3>

              <ul className="space-y-3 font-mono text-xs text-text-secondary">
                <li className="flex justify-between border-b border-surface-border pb-2.5">
                  <span className="text-text-muted">NAME:</span>
                  <span className="text-text-primary font-semibold">Reegan Gladis P</span>
                </li>
                <li className="flex justify-between border-b border-surface-border pb-2.5">
                  <span className="text-text-muted">LOCATION:</span>
                  <span className="text-text-primary">Bengaluru, India</span>
                </li>
                <li className="flex justify-between border-b border-surface-border pb-2.5">
                  <span className="text-text-muted">ACADEMIC:</span>
                  <span className="text-text-primary">MCA (JAIN Univ)</span>
                </li>
                <li className="flex justify-between border-b border-surface-border pb-2.5">
                  <span className="text-text-muted">UNDERGRAD:</span>
                  <span className="text-text-primary">BCA (St. Francis)</span>
                </li>
                <li className="flex justify-between border-b border-surface-border pb-2.5">
                  <span className="text-text-muted">FOCUS:</span>
                  <span className="text-secondary font-medium">SDE / Full Stack / AI</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span className="text-text-muted">STATUS:</span>
                  <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-surface-border flex flex-col gap-2.5">
                <Button
                  to="/projects"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowUpRight className="w-4 h-4" />}
                  className="w-full"
                >
                  View Verified Projects
                </Button>
                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Academic Track Card */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-primary font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>
              <h4 className="font-heading font-bold text-sm text-text-primary">
                Master of Computer Applications
              </h4>
              <p className="text-xs text-text-secondary mt-1">
                JAIN (Deemed-to-be University), Bengaluru • Currently Pursuing
              </p>
              <div className="mt-4 pt-3 border-t border-surface-border text-xs text-text-secondary leading-relaxed">
                Prior BCA degree completed at St. Francis College, Bengaluru City University (2023–2026).
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
