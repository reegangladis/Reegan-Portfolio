import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp, Terminal, MapPin, Clock } from 'lucide-react';
import { NAV_ITEMS } from '../../data/navigation';

export const Footer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (Asia/Kolkata)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070A] border-t border-surface-border text-text-secondary pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-primary/5 via-secondary/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-surface-border/60">
          {/* Column 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-primary/30 flex items-center justify-center font-mono font-bold text-sm text-primary shadow-glow-primary">
                  RG
                </div>
                <span className="font-heading font-bold text-lg text-text-primary tracking-tight">
                  REEGAN GLADIS P
                </span>
              </div>
              <p className="text-sm text-text-secondary max-w-sm leading-relaxed mb-6">
                Software Development Engineer & AI/ML Engineer based in Bengaluru. Crafting enterprise full-stack systems, RAG-powered intelligence, and fluid interactive 3D web applications.
              </p>
            </div>

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-elevated border border-emerald-500/30 text-emerald-400 text-xs font-mono max-w-fit shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for SDE & AI/ML Opportunities</span>
            </div>
          </div>

          {/* Column 3: Site Directory */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>Navigation</span>
            </h2>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-surface-border group-hover:bg-primary transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Key Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-secondary" />
              <span>Verified Systems</span>
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/projects/vertexerp-ai" className="hover:text-primary transition-colors">
                  VertexERP AI
                </Link>
              </li>
              <li>
                <Link to="/projects/excelr-track360" className="hover:text-primary transition-colors">
                  ExcelR Track360
                </Link>
              </li>
              <li>
                <Link to="/projects/learnova-ai" className="hover:text-primary transition-colors">
                  Learnova AI LMS
                </Link>
              </li>
              <li>
                <Link to="/projects/leo-ai" className="hover:text-primary transition-colors">
                  Leo AI Assistant
                </Link>
              </li>
              <li>
                <Link to="/projects/ai-healthcare-diagnosis" className="hover:text-primary transition-colors">
                  Healthcare Diagnosis
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Channels & Location */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-text-primary font-semibold mb-4 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>Channels</span>
            </h2>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="https://github.com/reegangladis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4 text-text-muted" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/reegangladis"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-text-muted" />
                <span>LinkedIn Network</span>
              </a>
              <a
                href="mailto:reegangladis.p@gmail.com"
                className="flex items-center gap-2.5 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-text-muted" />
                <span>reegangladis.p@gmail.com</span>
              </a>

              <div className="mt-4 pt-4 border-t border-surface-border text-xs font-mono flex flex-col gap-1.5 text-text-muted">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Bengaluru, India (IST)</span>
                </div>
                {currentTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-secondary" />
                    <span>{currentTime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © {new Date().getFullYear()} Reegan Gladis P. Designed & Engineered with precision.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden md:inline">
              React 18 • TypeScript • Tailwind CSS • GSAP • Three.js
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface-elevated border border-surface-border hover:border-primary/50 text-text-primary hover:text-primary transition-colors flex items-center gap-1.5"
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
