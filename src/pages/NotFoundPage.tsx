import React from 'react';
import { Terminal, Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The requested route does not exist." />
      <SectionWrapper spacing="lg" withGlow withGrid className="min-h-[80vh] flex items-center justify-center pt-32">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full text-xs font-mono bg-surface-elevated border border-primary/40 text-primary shadow-glow-primary">
            <Terminal className="w-3.5 h-3.5" />
            <span>ERROR 404: ROUTE_NOT_RESOLVED</span>
          </div>

          <h1 className="text-7xl sm:text-9xl font-bold font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-text-primary via-text-primary/70 to-text-muted/20">
            404
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-heading font-medium text-text-primary">
            Dimension Coordinate Missing
          </p>

          <p className="mt-3 text-sm sm:text-base text-text-secondary leading-relaxed">
            The neural pathway or page component you requested has been moved, re-indexed, or does not exist in this sector.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return to Base Hub
            </Button>
            <Button to="/projects" variant="secondary" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Explore Projects
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

