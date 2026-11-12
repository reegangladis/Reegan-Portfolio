import React from 'react';
import { X, FileText, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#07090E]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-surface border border-surface-border p-6 sm:p-8 shadow-2xl hud-bracket">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-border">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-elevated border border-primary/30 flex items-center justify-center text-primary">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base text-text-primary">
                Curriculum Vitae
              </h3>
              <p className="font-mono text-[10px] text-text-muted">
                REEGAN GLADIS P • SDE / AI-ML
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-elevated text-text-muted hover:text-text-primary hover:border-primary/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-6 space-y-4 text-xs text-text-secondary leading-relaxed">
          <div className="p-3.5 rounded-xl bg-surface-elevated border border-surface-border font-mono text-[11px]">
            <div className="text-primary font-bold mb-1">// CANDIDATE PROFILE SUMMARY</div>
            <div>Name: Reegan Gladis P</div>
            <div>Role: Software Development Engineer / AI-ML Practitioner</div>
            <div>Location: Bengaluru, India</div>
            <div>Education: MCA (JAIN University) • BCA (St. Francis College)</div>
          </div>

          <p>
            The official PDF resume contains documented details on enterprise architecture with FastAPI, full-stack React systems, local LLM agents (Leo AI), and industry roles at ExcelR Edtech, Prinston Smart Engineers, and Anudip Foundation.
          </p>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-text-primary font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full-Stack Development (React, TypeScript, FastAPI, PostgreSQL)</span>
            </div>
            <div className="flex items-center gap-2 text-text-primary font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Artificial Intelligence & RAG Orchestration (LangChain, Ollama)</span>
            </div>
            <div className="flex items-center gap-2 text-text-primary font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Salesforce CRM Operations & Automation (ExcelR Edtech)</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-surface-border flex flex-col sm:flex-row items-center gap-3">
          <Button
            href="mailto:reegangladis.p@gmail.com?subject=Resume%20Request%20-%20Reegan%20Gladis%20P&body=Hello%20Reegan,%0D%0A%0D%0AI%20would%20like%20to%20request%20your%20complete%20official%20resume%20for%20an%20engineering%20opportunity.%0D%0A%0D%0ABest%20regards,"
            variant="primary"
            size="md"
            leftIcon={<Mail className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Request Official PDF
          </Button>

          <Button
            to="/contact"
            variant="secondary"
            size="md"
            onClick={onClose}
            className="w-full sm:w-auto"
          >
            Direct Transmission
          </Button>
        </div>
      </div>
    </div>
  );
};
