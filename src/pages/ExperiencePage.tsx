import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { EXPERIENCES_DATA } from '../data/experienceData';
import {
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Building,
} from 'lucide-react';
import clsx from 'clsx';

export const ExperiencePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Professional Experience & Industry Practice"
        description="Verified career milestones of Reegan Gladis P: Salesforce Administrator at ExcelR Edtech, Data Science Intern at Prinston Smart Engineers, and Data Analytics Trainee at Anudip Foundation."
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        <PageHeader
          tag="// 04 CAREER CHRONOLOGY"
          title="Professional Journey"
          titleHighlight="& Industry Practice"
          subtitle="Documented career history spanning enterprise CRM administration, predictive machine learning development, and business analytics. Verified factual records only."
        />

        {/* Verification Note Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-surface-elevated/80 border border-primary/30 flex items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <span>
              All positions, dates, and technical responsibilities are verified directly from documented records.
            </span>
          </div>
          <span className="hidden sm:inline text-emerald-400 font-semibold">100% FACTUAL</span>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Rule for Desktop */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {EXPERIENCES_DATA.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isOngoing = exp.status === 'Ongoing';

              return (
                <div
                  key={exp.id}
                  className={clsx(
                    'relative flex flex-col md:flex-row items-start gap-8',
                    isEven ? 'md:flex-row-reverse' : ''
                  )}
                >
                  {/* Timeline Center Node */}
                  <div
                    className={clsx(
                      'hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-surface-elevated border items-center justify-center z-10 shadow-subtle-card',
                      isOngoing
                        ? 'border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.25)]'
                        : 'border-primary shadow-glow-primary'
                    )}
                  >
                    <span
                      className={clsx(
                        'w-2.5 h-2.5 rounded-full',
                        isOngoing ? 'bg-emerald-400 animate-ping' : 'bg-primary'
                      )}
                    />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full md:w-[calc(50%-2rem)] p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-all duration-300 shadow-subtle-card hud-bracket">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-primary uppercase">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>

                      <span
                        className={clsx(
                          'text-[10px] font-mono px-2.5 py-0.5 rounded-full border',
                          isOngoing
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-surface-elevated text-text-muted border-surface-border'
                        )}
                      >
                        {exp.status}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-heading font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-text-secondary mt-1 mb-4 flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1.5 text-text-primary">
                        <Building className="w-3.5 h-3.5 text-secondary" />
                        {exp.company}
                      </span>
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-secondary" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                      <div className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                        KEY DELIVERABLES & RESPONSIBILITIES:
                      </div>
                      {exp.responsibilities.map((r, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-surface-border/60">
                      <div className="text-[10px] font-mono uppercase text-text-muted mb-2">
                        TOOLS & PLATFORMS UTILIZED:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-surface-elevated text-text-secondary border border-surface-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing Action */}
        <div className="mt-16 text-center">
          <Button
            to="/projects"
            variant="primary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Explore Projects Applied During Practice
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
};
