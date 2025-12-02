import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
      {/* Background Image - Full Screen Placeholder */}
      <img 
        src="https://images.unsplash.com/photo-1578321272176-b7bbc0679853?q=80&w=2670&auto=format&fit=crop" 
        alt="Oil Painting Background"
        className="w-full h-full object-cover opacity-90 brightness-90"
      />
      
      {/* Background Text Overlay - Serif Font (Subtle background layer) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-30">
        <span className="text-[10vw] md:text-[12vw] font-serif font-bold text-black tracking-tighter leading-none text-center select-none">
          INGRID ASZKENASY
        </span>
      </div>

      {/* Floating Logo Card - Hand Font (Main identity) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#fdfdfd] px-8 py-8 md:px-12 md:py-12 shadow-2xl z-10 max-w-[90vw] rotate-[-2deg]">
        <h1 className="text-5xl md:text-8xl text-brand-red text-center font-hand leading-none tracking-wide whitespace-nowrap">
          INGRID<br/>ASZKENASY
        </h1>
      </div>
    </div>
  );
};