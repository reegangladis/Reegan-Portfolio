import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  Terminal,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { SectionWrapper } from '../components/common/SectionWrapper';
import { PageHeader } from '../components/common/PageHeader';
import { Button } from '../components/common/Button';

// Strict Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactPage: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionStatus('submitting');
    try {
      // Functional client-side dispatch via mailto URI scheme
      const mailtoUrl = `mailto:reegangladis.p@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${data.subject} - from ${data.name}`
      )}&body=${encodeURIComponent(
        `Sender Name: ${data.name}\nReply-To Email: ${data.email}\n\nMessage:\n${data.message}\n\n---\nSent via reegangladis.dev contact form`
      )}`;

      // Open email client
      window.location.href = mailtoUrl;

      setSubmissionStatus('success');
      reset();
    } catch {
      setSubmissionStatus('error');
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('reegangladis.p@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <>
      <SEO
        title="Direct Contact & Engineering Transmission"
        description="Connect directly with Reegan Gladis P for software development engineer roles, AI/ML engineering, and enterprise system consulting based in Bengaluru, India."
      />

      <SectionWrapper spacing="lg" withGlow withGrid className="pt-28 md:pt-36">
        <PageHeader
          tag="// 06 TRANSMISSION"
          title="Direct Contact"
          titleHighlight="& Opportunities"
          subtitle="Whether discussing software engineering roles, enterprise architecture consulting, or collaborative AI research, send a direct transmission."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Coordinates & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border hud-bracket shadow-subtle-card">
              <h2 className="text-base font-heading font-bold text-text-primary mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span>Verified Direct Channels</span>
              </h2>

              <ul className="space-y-5 text-sm">
                {/* Email with 1-click copy */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-mono text-text-muted">DIRECT INBOX</div>
                    <a
                      href="mailto:reegangladis.p@gmail.com"
                      className="text-text-primary hover:text-primary transition-colors font-mono text-xs sm:text-sm font-semibold break-all"
                    >
                      reegangladis.p@gmail.com
                    </a>
                    <div className="mt-1">
                      <button
                        onClick={copyEmailToClipboard}
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-primary hover:underline cursor-pointer"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied to clipboard</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy email address</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </li>

                {/* Base Location */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-muted">PRIMARY LOCATION</div>
                    <span className="text-text-primary font-mono text-xs sm:text-sm font-medium">
                      Bengaluru, Karnataka, India
                    </span>
                    <p className="text-[11px] font-mono text-text-muted mt-0.5">
                      Open to Bengaluru on-site, hybrid, and global remote positions
                    </p>
                  </div>
                </li>

                {/* GitHub */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-muted">VERSION CONTROL</div>
                    <a
                      href="https://github.com/reegangladis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-primary transition-colors font-mono text-xs sm:text-sm font-medium"
                    >
                      github.com/reegangladis
                    </a>
                  </div>
                </li>

                {/* LinkedIn */}
                <li className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-surface-elevated border border-surface-border flex items-center justify-center text-secondary shrink-0 mt-0.5">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-text-muted">PROFESSIONAL NETWORK</div>
                    <a
                      href="https://linkedin.com/in/reegangladis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-primary hover:text-primary transition-colors font-mono text-xs sm:text-sm font-medium"
                    >
                      linkedin.com/in/reegangladis
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Dispatch Architecture Note */}
            <div className="p-5 rounded-2xl bg-surface-elevated border border-surface-border text-xs text-text-secondary leading-relaxed">
              <div className="flex items-center gap-2 mb-2 font-mono text-text-primary font-semibold text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>DISPATCH INTEGRITY NOTICE</span>
              </div>
              <p>
                In alignment with verified accuracy guidelines, this form validates all required fields with Zod and launches your default email client (`mailto:`) with pre-composed parameters addressed directly to Reegan Gladis P.
              </p>
            </div>
          </div>

          {/* Right Column: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-surface-border shadow-subtle-card hud-bracket">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-xl font-heading font-bold text-text-primary flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <span>Send a Direct Message</span>
                </h2>
                <span className="text-[10px] font-mono text-text-muted">ALL FIELDS REQUIRED</span>
              </div>

              <p className="text-xs text-text-secondary mb-6 leading-relaxed">
                Fill in the details below. All inputs are validated client-side with strict Zod schemas before message dispatch.
              </p>

              {/* Success Notification */}
              {submissionStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>
                    Your message has been validated! Your default email client was opened to transmit the inquiry to reegangladis.p@gmail.com.
                  </span>
                </div>
              )}

              {/* Error Notification */}
              {submissionStatus === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>An error occurred preparing the transmission. Please email reegangladis.p@gmail.com directly.</span>
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-surface-elevated border border-surface-border rounded-lg px-3.5 py-2.5 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] font-mono text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="name@organization.com"
                      className="w-full bg-surface-elevated border border-surface-border rounded-lg px-3.5 py-2.5 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] font-mono text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                    Subject Line *
                  </label>
                  <input
                    type="text"
                    {...register('subject')}
                    placeholder="e.g. Software Development Engineer Role / Project Consultation"
                    className="w-full bg-surface-elevated border border-surface-border rounded-lg px-3.5 py-2.5 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-1.5 uppercase">
                    Message Details *
                  </label>
                  <textarea
                    rows={6}
                    {...register('message')}
                    placeholder="Describe your project requirements, opportunity scope, or inquiry..."
                    className="w-full bg-surface-elevated border border-surface-border rounded-lg px-3.5 py-2.5 text-xs font-mono text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    rightIcon={<Send className="w-4 h-4" />}
                    disabled={submissionStatus === 'submitting'}
                    className="w-full sm:w-auto"
                  >
                    {submissionStatus === 'submitting' ? 'Preparing Transmission...' : 'Transmit Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};
