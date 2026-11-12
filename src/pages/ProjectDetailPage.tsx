import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Terminal,
  Layers,
  AlertCircle,
  CheckCircle,
  Target,
  Award,
  Cpu,
  Code2,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { PROJECTS_DATA } from '../data/projectsData';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <SectionWrapper spacing="lg" className="pt-36 text-center">
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-surface border border-surface-border">
          <AlertCircle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold font-heading text-text-primary mb-2">
            Project Specification Missing
          </h2>
          <p className="text-xs text-text-secondary mb-6">
            The requested project slug "{slug}" does not exist in the verified project directory.
          </p>
          <Button
            to="/projects"
            variant="primary"
            size="md"
            leftIcon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to All Projects
          </Button>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} — Technical Architecture Case Study`}
        description={project.description}
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-text-muted hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>BACK TO ALL PROJECTS DIRECTORY</span>
        </Link>

        {/* Page Header */}
        <PageHeader
          tag={`// CASE STUDY: ${project.category.toUpperCase()}`}
          title={project.title}
          subtitle={project.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            {/* 1. Executive Overview */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hud-bracket shadow-subtle-card">
              <h2 className="text-lg font-heading font-bold text-text-primary mb-3 flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-primary" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* 2. Problem Statement & Engineering Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-heading font-bold text-red-400 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Engineering Problem</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-surface border border-surface-border flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-heading font-bold text-emerald-400 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>The Technical Solution</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Project Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2.5">
                  <Target className="w-4 h-4 text-secondary" />
                  <span>Technical Objectives</span>
                </h2>
                <ul className="space-y-3">
                  {project.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 4. Core Features & Architecture Highlights */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border">
              <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-primary" />
                <span>Core Implementation Highlights</span>
              </h2>
              <ul className="space-y-3.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. System Architecture Topology */}
            {project.architecture && (
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hud-bracket">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-2 flex items-center gap-2.5">
                  <Cpu className="w-4 h-4 text-secondary" />
                  <span>Architecture & Subsystems</span>
                </h2>
                <p className="text-xs font-mono text-text-muted mb-4">
                  Topology: {project.architecture.overview}
                </p>
                <div className="space-y-2.5">
                  {project.architecture.components.map((comp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-surface-elevated border border-surface-border font-mono text-xs text-text-primary flex items-start gap-2.5"
                    >
                      <span className="text-primary font-bold">0{i + 1}.</span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Engineering Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>Implementation Challenges Addressed</span>
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 7. Verified Outcomes */}
            {project.verifiedOutcomes && project.verifiedOutcomes.length > 0 && (
              <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Verified Outcomes & Impact</span>
                </h2>
                <ul className="space-y-3">
                  {project.verifiedOutcomes.map((vo, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{vo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Tech Stack Box */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border hud-bracket shadow-subtle-card">
              <h3 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-4 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-primary" />
                <span>Technology Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-surface-elevated text-primary border border-surface-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Verified Links */}
              <div className="mt-8 pt-6 border-t border-surface-border flex flex-col gap-3">
                {project.githubUrl ? (
                  <Button
                    href={project.githubUrl}
                    variant="primary"
                    size="md"
                    external
                    leftIcon={<Github className="w-4 h-4" />}
                    className="w-full"
                  >
                    View Source Repository
                  </Button>
                ) : (
                  <div className="p-3 rounded-lg bg-surface-elevated border border-surface-border text-center font-mono text-xs text-text-muted">
                    Proprietary / Enterprise Repository
                  </div>
                )}

                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="secondary"
                    size="md"
                    external
                    rightIcon={<ExternalLink className="w-4 h-4" />}
                    className="w-full"
                  >
                    Live Demo
                  </Button>
                )}

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="w-full text-xs"
                >
                  Inquire About This Architecture
                </Button>
              </div>
            </div>

            {/* Quick Metadata Box */}
            <div className="p-6 rounded-2xl bg-surface border border-surface-border font-mono text-xs text-text-secondary space-y-3">
              <div className="flex justify-between border-b border-surface-border pb-2">
                <span className="text-text-muted">SYSTEM ID:</span>
                <span className="text-text-primary">{project.id}</span>
              </div>
              <div className="flex justify-between border-b border-surface-border pb-2">
                <span className="text-text-muted">DOMAIN:</span>
                <span className="text-secondary">{project.category}</span>
              </div>
              <div className="flex justify-between border-b border-surface-border pb-2">
                <span className="text-text-muted">STATUS:</span>
                <span className="text-emerald-400">Verified Implementation</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-text-muted">DOCUMENTATION:</span>
                <span className="text-text-primary">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};
