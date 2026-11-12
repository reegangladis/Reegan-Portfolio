import React, { useState, useMemo } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectCategory } from '../types';
import {
  ArrowUpRight,
  Github,
  Search,
  Terminal,
  Filter,
  CheckCircle2,
} from 'lucide-react';
import clsx from 'clsx';

const CATEGORIES: ProjectCategory[] = [
  'All Projects',
  'Full Stack Development',
  'Artificial Intelligence',
  'Machine Learning',
  'Data Science',
  'Python Development',
  'Enterprise Applications',
];

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by both category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        activeCategory === 'All Projects' ||
        project.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Verified Projects & System Architectures"
        description="Comprehensive case studies for 5 verified enterprise platforms, AI microservices, desktop assistants, and deep learning systems engineered by Reegan Gladis P."
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        <PageHeader
          tag="// 02 ENGINEERING SHOWCASE"
          title="Verified Projects"
          titleHighlight="& System Architecture"
          subtitle="Explore production-grade software platforms, decoupled microservices, and AI models engineered with strict typing, clean design patterns, and factual implementations."
        />

        {/* Search & Active Counts Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search by title, technology (e.g. FastAPI, LangChain, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-surface-border rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors shadow-subtle-card"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-text-muted hover:text-text-primary"
              >
                CLEAR
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
            <Terminal className="w-3.5 h-3.5 text-primary" />
            <span>
              Displaying <strong className="text-primary">{filteredProjects.length}</strong> of{' '}
              {PROJECTS_DATA.length} Projects
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All Projects'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  'px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5',
                  activeCategory === cat
                    ? 'bg-primary text-[#07090E] border-primary font-semibold shadow-glow-primary'
                    : 'bg-surface text-text-secondary border-surface-border hover:border-primary/40 hover:text-text-primary'
                )}
              >
                <span>{cat}</span>
                <span
                  className={clsx(
                    'text-[10px] px-1.5 py-0.2 rounded-full',
                    activeCategory === cat
                      ? 'bg-[#07090E]/20 text-[#07090E]'
                      : 'bg-surface-elevated text-text-muted'
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 rounded-2xl bg-surface border border-surface-border text-center max-w-lg mx-auto">
            <Filter className="w-8 h-8 text-text-muted mx-auto mb-3" />
            <h3 className="font-heading font-bold text-base text-text-primary mb-1">
              No matching projects found
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              No systems match "{searchQuery}" in category "{activeCategory}".
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setActiveCategory('All Projects');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hover:border-primary/40 transition-all duration-300 group shadow-subtle-card hud-bracket"
              >
                <div>
                  {/* Top Badge Strip */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-primary tracking-wider uppercase">
                      SYSTEM 0{index + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-surface-elevated text-text-muted border border-surface-border">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-heading font-bold text-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-text-muted mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Project Overview */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                      ARCHITECTURE HIGHLIGHTS:
                    </div>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-surface-elevated text-primary border border-surface-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-5 border-t border-surface-border/60 flex items-center justify-between">
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
                      className="p-2 rounded-lg bg-surface-elevated border border-surface-border hover:text-primary hover:border-primary/40 transition-colors flex items-center gap-1.5 text-xs font-mono text-text-muted"
                      aria-label={`View ${project.title} repository`}
                    >
                      <Github className="w-4 h-4" />
                      <span className="hidden sm:inline">Repository</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
};
