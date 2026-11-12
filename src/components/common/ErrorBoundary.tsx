import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from './Button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-text-primary flex items-center justify-center p-6">
          <div className="max-w-md w-full p-8 rounded-2xl bg-surface border border-red-500/30 text-center hud-bracket shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono text-red-400 bg-red-500/10 border border-red-500/20 mb-3">
              <span>SYSTEM INTERCEPTION</span>
            </div>

            <h2 className="text-xl font-heading font-bold text-text-primary mb-2">
              Runtime Exception Intercepted
            </h2>

            <p className="text-xs text-text-secondary leading-relaxed mb-6 font-mono">
              {this.state.error?.message || 'An unexpected state occurred within this module.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={this.handleReload}
                leftIcon={<RefreshCw className="w-3.5 h-3.5" />}
              >
                Reload Component
              </Button>
              <Button
                variant="secondary"
                size="sm"
                to="/"
                leftIcon={<Home className="w-3.5 h-3.5" />}
                onClick={() => this.setState({ hasError: false, error: null })}
              >
                Return to Hub
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
