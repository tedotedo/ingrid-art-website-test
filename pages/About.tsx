import React from 'react';
import { EXHIBITIONS } from '../data';

export const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto animate-fade-in py-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Bio Section */}
        <div className="lg:col-span-5 mb-8">
           {/* Profile Image */}
           <div className="w-full aspect-square bg-gray-200 mb-8 grayscale opacity-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544764200-d4029beeab85?q=80&w=2772&auto=format&fit=crop" alt="Artist Portrait" className="w-full h-full object-cover" />
           </div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-black pb-2">Biography</h2>
          <div className="text-base leading-relaxed space-y-4 font-light text-gray-800">
            <p>
              <strong>Ingrid Aszkenasy</strong> (b. 1992, Berlin) is a contemporary artist living and working in London. 
              Her work explores the quiet tension between architectural structure and organic decay. 
              Utilizing a minimalist vocabulary, she investigates how memory occupies physical space.
            </p>
            <p>
              Aszkenasy graduated from the Royal College of Art in 2020. Her works have been exhibited internationally,
              including solo shows in London and group exhibitions in New York, Berlin, and Paris.
            </p>
          </div>
        </div>

        {/* CV Section */}
        <div className="lg:col-span-7 lg:pl-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-black pb-2">Exhibitions</h2>
          
          <div className="space-y-0">
            {EXHIBITIONS.map((ex, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors text-sm">
                <div className="col-span-2 md:col-span-2 text-gray-500 font-mono text-xs pt-1">{ex.year}</div>
                <div className="col-span-10 md:col-span-10 grid md:grid-cols-2 gap-1 md:gap-4">
                  <div>
                    <span className="font-bold block">{ex.title}</span>
                  </div>
                  <div className="text-gray-600 md:text-right">
                    {ex.venue}, <span className="text-gray-400 italic">{ex.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-6 mt-16 border-b border-black pb-2">Education</h2>
          <div className="space-y-4 text-sm">
             <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2 md:col-span-2 text-gray-500 font-mono text-xs">2020</div>
                <div className="col-span-10 md:col-span-10">
                  <strong>MA Painting</strong>, Royal College of Art, London
                </div>
             </div>
             <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2 md:col-span-2 text-gray-500 font-mono text-xs">2016</div>
                <div className="col-span-10 md:col-span-10">
                  <strong>BA Fine Art</strong>, Chelsea College of Arts, London
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};