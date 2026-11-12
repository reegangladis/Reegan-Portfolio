import React from 'react';

export const RouteLoading: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8">
      <div className="relative w-14 h-14 flex items-center justify-center mb-4">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" />
        <div className="w-10 h-10 rounded-full border-2 border-t-primary border-r-secondary border-b-transparent border-l-transparent animate-spin" />
        <span className="font-mono text-[10px] text-primary font-bold">RG</span>
      </div>
      <div className="font-mono text-xs text-text-muted tracking-widest uppercase flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span>INITIALIZING ROUTE...</span>
      </div>
    </div>
  );
};

