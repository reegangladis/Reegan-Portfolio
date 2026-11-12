import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import clsx from 'clsx';
import { NAV_ITEMS } from '../../data/navigation';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollDirection(15);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-[#07090E]/85 backdrop-blur-md border-b border-surface-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent border-b border-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            aria-label="Reegan Gladis P - Home"
          >
            <div className="relative w-9 h-9 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-subtle-card overflow-hidden">
              <span className="font-mono font-bold text-sm text-primary group-hover:scale-110 transition-transform">
                RG
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-text-primary group-hover:text-primary transition-colors">
                REEGAN GLADIS P
              </span>
              <span className="font-mono text-[10px] text-text-muted flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SDE / AI/ML
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-surface/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-surface-border shadow-inner"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 select-none flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                    isActive
                      ? 'text-primary bg-surface-elevated border border-primary/40 shadow-[0_0_15px_rgba(0,240,255,0.15)] font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/40'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span
                        className={clsx(
                          'text-[10px] px-1.5 py-0.2 rounded-full font-mono',
                          isActive
                            ? 'bg-primary/20 text-primary'
                            : 'bg-surface-elevated text-text-muted'
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              to="/contact"
              variant="secondary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
              magnetic
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative p-2 rounded-lg bg-surface-elevated border border-surface-border text-text-primary hover:text-primary hover:border-primary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-[#07090E]/90 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div className="relative z-10 flex flex-col h-full max-w-sm ml-auto bg-surface border-l border-surface-border p-6 pt-24 shadow-2xl justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6 px-2 text-xs font-mono text-text-muted uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5 text-primary" />
              <span>Navigation Systems</span>
            </div>

            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all',
                      isActive
                        ? 'bg-surface-elevated text-primary border border-primary/40 shadow-glow-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated/50'
                    )
                  }
                >
                  <span className="font-heading tracking-wide text-base">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-surface-elevated text-text-muted border border-surface-border">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-surface-border flex flex-col gap-3">
            <Button to="/contact" variant="primary" size="md" className="w-full">
              Let's Connect
            </Button>
            <p className="text-center font-mono text-[11px] text-text-muted">
              Bengaluru, India • Available for Opportunities
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
