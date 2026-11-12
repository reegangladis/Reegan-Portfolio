import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/educationData';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  MapPin,
  Calendar,
  Building,
  ShieldCheck,
  ArrowUpRight,
  BookOpen,
} from 'lucide-react';

export const EducationPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Academic Degrees & Verified Certifications"
        description="Formal academic qualifications and industry credentials of Reegan Gladis P: MCA at JAIN University, BCA at St. Francis College, and verified technical certificates."
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        <PageHeader
          tag="// 05 ACADEMIC & CREDENTIALS"
          title="Education"
          titleHighlight="& Certifications"
          subtitle="Formal computer applications degrees combined with specialized industry training credentials. Factual, un-fabricated records only."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Academic Degrees (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span>Academic Degrees</span>
            </h2>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-all shadow-subtle-card hud-bracket"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-primary uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>

                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-emerald-400 border border-emerald-500/30">
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary">
                    {edu.degree}
                  </h3>

                  <div className="text-sm text-text-secondary mt-1 mb-4 flex flex-wrap items-center gap-2 sm:gap-4">
                    <span className="font-medium text-text-primary flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-secondary" />
                      {edu.institution}
                    </span>
                    <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-secondary" />
                      {edu.location}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-mono uppercase text-text-muted">
                      CURRICULUM & HIGHLIGHTS:
                    </div>
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-1 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Verified Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2.5">
              <Award className="w-5 h-5 text-secondary" />
              <span>Verified Industry Credentials</span>
            </h2>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 sm:p-6 rounded-xl bg-surface border border-surface-border hover:border-secondary/40 transition-all shadow-subtle-card hud-bracket"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-elevated border border-secondary/30 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                          VERIFIED CREDENTIAL
                        </span>
                        {cert.date && (
                          <span className="text-[10px] font-mono text-text-muted">
                            {cert.date}
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm sm:text-base font-heading font-bold text-text-primary mt-1 leading-snug">
                        {cert.title}
                      </h3>

                      <p className="text-xs font-mono text-text-muted mt-1.5">
                        Issuing Authority: <span className="text-text-secondary">{cert.issuer}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Academic Philosophy Notice */}
            <div className="p-6 rounded-2xl bg-surface-elevated border border-surface-border">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-primary font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>INTEGRITY STANDARD</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Only documented academic degrees and verified training certifications are published. No fabricated credentials or unearned industry accolades are included.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button
            to="/contact"
            variant="primary"
            size="md"
            rightIcon={<ArrowUpRight className="w-4 h-4" />}
          >
            Inquire for Verification Records
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
};
