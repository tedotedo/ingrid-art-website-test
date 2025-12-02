import React from 'react';
import { NEWS } from '../data';

export const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 animate-fade-in min-h-[50vh]">
      <div className="space-y-12">
        {NEWS.map((item) => (
          <div key={item.id} className="group border-b border-gray-100 pb-12 last:border-0">
            <div className="text-sm md:text-base font-bold text-gray-400 mb-3 font-mono tracking-wider">
              {item.date}
            </div>
            <div className="text-lg md:text-2xl text-gray-900 font-light leading-relaxed group-hover:text-gray-600 transition-colors">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};