import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';
import { SKILL_CATEGORIES, SKILLS_DATA } from '../data/skillsData';
import { SkillCategory } from '../types';
import {
  Search,
  Terminal,
  Filter,
  ArrowUpRight,
  Code2,
  Database,
  Cpu,
  Workflow,
  BarChart3,
  Wrench,
  Globe,
} from 'lucide-react';
import clsx from 'clsx';

// Icon map for categories
const CATEGORY_ICONS: Record<SkillCategory, React.ReactNode> = {
  'Programming Languages': <Code2 className="w-4 h-4 text-primary" />,
  'Frontend Development': <Globe className="w-4 h-4 text-secondary" />,
  'Backend Development': <Terminal className="w-4 h-4 text-primary" />,
  'Databases': <Database className="w-4 h-4 text-secondary" />,
  'Artificial Intelligence & Machine Learning': <Cpu className="w-4 h-4 text-primary" />,
  'Salesforce': <Workflow className="w-4 h-4 text-secondary" />,
  'Data Analytics': <BarChart3 className="w-4 h-4 text-primary" />,
  'DevOps & Development Tools': <Wrench className="w-4 h-4 text-secondary" />,
};

// Project slug mapping helper
const PROJECT_SLUG_MAP: Record<string, string> = {
  'VertexERP AI': 'vertexerp-ai',
  'ExcelR Track360': 'excelr-track360',
  'Learnova AI': 'learnova-ai',
  'Leo AI': 'leo-ai',
  'AI Healthcare Diagnosis': 'ai-healthcare-diagnosis',
};

export const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter skills
  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesCategory =
        selectedCategory === 'All' || skill.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        (skill.relatedProjects &&
          skill.relatedProjects.some((p) => p.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <SEO
        title="Technical Skills Matrix & Capabilities Explorer"
        description="Comprehensive technical capabilities of Reegan Gladis P across 8 verified domains: Programming Languages, Frontend, Backend, Databases, AI/ML, Salesforce CRM, Data Analytics, and DevOps."
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        <PageHeader
          tag="// 03 TECHNICAL DIRECTORY"
          title="Interactive Technology"
          titleHighlight="Explorer"
          subtitle="Explore verified capabilities across 8 technical domains. Factual implementations without arbitrary proficiency percentages or ratings."
        />

        {/* Search & Category Filter Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Search Box */}
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              placeholder="Search by technology (e.g. Python, FastAPI, React, SQL)..."
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
              Showing <strong className="text-primary">{filteredSkills.length}</strong> of{' '}
              {SKILLS_DATA.length} Verified Technologies
            </span>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={clsx(
              'px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5',
              selectedCategory === 'All'
                ? 'bg-primary text-[#07090E] border-primary font-semibold shadow-glow-primary'
                : 'bg-surface text-text-secondary border-surface-border hover:border-primary/40 hover:text-text-primary'
            )}
          >
            <span>All Categories</span>
            <span
              className={clsx(
                'text-[10px] px-1.5 py-0.2 rounded-full',
                selectedCategory === 'All'
                  ? 'bg-[#07090E]/20 text-[#07090E]'
                  : 'bg-surface-elevated text-text-muted'
              )}
            >
              {SKILLS_DATA.length}
            </span>
          </button>

          {SKILL_CATEGORIES.map((cat, idx) => {
            const count = SKILLS_DATA.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={clsx(
                  'px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer border flex items-center gap-1.5',
                  selectedCategory === cat
                    ? 'bg-primary text-[#07090E] border-primary font-semibold shadow-glow-primary'
                    : 'bg-surface text-text-secondary border-surface-border hover:border-primary/40 hover:text-text-primary'
                )}
              >
                <span>{CATEGORY_ICONS[cat]}</span>
                <span>
                  0{idx + 1} {cat}
                </span>
                <span
                  className={clsx(
                    'text-[10px] px-1.5 py-0.2 rounded-full',
                    selectedCategory === cat
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

        {/* Skills Grid */}
        {filteredSkills.length === 0 ? (
          <div className="p-12 rounded-2xl bg-surface border border-surface-border text-center max-w-lg mx-auto">
            <Filter className="w-8 h-8 text-text-muted mx-auto mb-3" />
            <h3 className="font-heading font-bold text-base text-text-primary mb-1">
              No matching technologies found
            </h3>
            <p className="text-xs text-text-secondary mb-4">
              No skills match "{searchQuery}" in category "{selectedCategory}".
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-surface border border-surface-border hover:border-primary/50 transition-all duration-300 group shadow-subtle-card flex flex-col justify-between hud-bracket"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-medium flex items-center gap-1.5">
                      {CATEGORY_ICONS[skill.category]}
                      <span>{skill.category}</span>
                    </span>
                    {skill.featured && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"
                        title="Core / Flagship Competency"
                      />
                    )}
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-heading font-bold text-base text-text-primary group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-text-secondary leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {skill.description}
                  </p>
                </div>

                {/* Related Projects */}
                {skill.relatedProjects && skill.relatedProjects.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-surface-border/50">
                    <div className="text-[10px] font-mono text-text-muted mb-1.5">
                      APPLIED IN PROJECTS:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skill.relatedProjects.map((p) => {
                        const slug = PROJECT_SLUG_MAP[p];
                        if (slug) {
                          return (
                            <Link
                              key={p}
                              to={`/projects/${slug}`}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-primary border border-surface-border hover:border-primary/50 transition-colors inline-flex items-center gap-1"
                            >
                              <span>{p}</span>
                              <ArrowUpRight className="w-2.5 h-2.5" />
                            </Link>
                          );
                        }
                        return (
                          <span
                            key={p}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-elevated text-primary border border-surface-border"
                          >
                            {p}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>
    </>
  );
};
