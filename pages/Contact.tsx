import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in py-24 px-6 min-h-[60vh]">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
           <h2 className="text-3xl font-serif mb-8 italic">Get in Touch</h2>
           <p className="text-gray-600 mb-8 max-w-sm">
             For inquiries regarding artwork availability, commissions, or exhibitions, please contact the studio directly.
           </p>
        </div>
        
        <div className="space-y-12 border-l border-gray-100 pl-0 md:pl-12">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Studio</h3>
            <p className="text-xl md:text-2xl hover:text-gray-500 transition-colors font-light">
              <a href="mailto:studio@ingridaszkenasy.com">studio@ingridaszkenasy.com</a>
            </p>
            <p className="mt-4 text-gray-500 font-mono text-sm leading-relaxed">
              Unit 4B, The Old Factory<br/>
              Hackney Wick, London<br/>
              E9 5EN, UK
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Representation</h3>
            <p className="text-lg">
              <strong>White Cube</strong><br/>
              <a href="#" className="text-gray-500 hover:text-black hover:underline">london@whitecube.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};