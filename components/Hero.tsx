import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
      {/* Background Image - Gallery Interior */}
      <img 
        src="https://images.unsplash.com/photo-1518135113689-c70e30dc9de2?q=80&w=2670&auto=format&fit=crop" 
        alt="Gallery Interior"
        className="w-full h-full object-cover opacity-100"
      />
      
      {/* Background Text Overlay - Big Serif Text (Simulating text on the wall/glass) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[10vw] md:text-[13vw] font-serif font-bold text-black opacity-80 tracking-tighter leading-none text-center select-none mix-blend-multiply">
          INGRID ASZKENASY
        </span>
      </div>

      {/* Floating Logo Card - White Box, Straight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-8 md:px-16 md:py-12 shadow-none z-10 w-[80vw] max-w-lg aspect-[4/3] flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl text-brand-red text-center font-hand leading-none tracking-wide">
          INGRID<br/>ASZKENASY
        </h1>
      </div>
    </div>
  );
};