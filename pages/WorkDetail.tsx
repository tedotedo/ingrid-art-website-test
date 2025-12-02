import React, { useLayoutEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ARTWORKS } from '../data';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

export const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const currentIndex = ARTWORKS.findIndex(a => a.id === id);
  const artwork = ARTWORKS[currentIndex];

  const prevWork = currentIndex > 0 ? ARTWORKS[currentIndex - 1] : null;
  const nextWork = currentIndex < ARTWORKS.length - 1 ? ARTWORKS[currentIndex + 1] : null;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!artwork) {
    return (
      <div className="h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-xl mb-4">Artwork not found</h2>
        <Link to="/works" className="text-sm underline">Return to works</Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-7xl mx-auto pb-20 px-6">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-8 pt-8 border-b border-gray-100 pb-4">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-black flex items-center gap-2 uppercase text-xs tracking-widest transition-colors">
          <X size={14} /> <span className="hidden sm:inline">Close</span>
        </button>
        <div className="flex gap-6 text-xs uppercase tracking-widest">
          {prevWork ? (
            <Link to={`/work/${prevWork.id}`} className="hover:text-black text-gray-400 flex items-center gap-2 transition-colors">
              <ArrowLeft size={14} /> <span className="hidden sm:inline">Previous</span>
            </Link>
          ) : (
            <span className="text-gray-200 flex items-center gap-2 cursor-not-allowed">
              <ArrowLeft size={14} /> <span className="hidden sm:inline">Previous</span>
            </span>
          )}
          {nextWork ? (
            <Link to={`/work/${nextWork.id}`} className="hover:text-black text-gray-400 flex items-center gap-2 transition-colors">
              <span className="hidden sm:inline">Next</span> <ArrowRight size={14} />
            </Link>
          ) : (
            <span className="text-gray-200 flex items-center gap-2 cursor-not-allowed">
              <span className="hidden sm:inline">Next</span> <ArrowRight size={14} />
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Image Container */}
        <div className="lg:w-3/5">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title}
            className="w-full h-auto object-contain max-h-[85vh] block shadow-sm" 
          />
        </div>

        {/* Info Container */}
        <div className="lg:w-2/5 lg:pt-8">
          <div className="sticky top-24">
            <h1 className="text-3xl font-serif font-light mb-2">{artwork.title}</h1>
            <div className="w-12 h-1 bg-gray-900 mb-8 mt-4"></div>
            
            <div className="space-y-6 text-sm font-light mt-8">
              <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                <span className="text-gray-400 uppercase tracking-wider text-xs pt-1">Year</span>
                <span className="col-span-2 text-lg">{artwork.year}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                <span className="text-gray-400 uppercase tracking-wider text-xs pt-1">Medium</span>
                <span className="col-span-2 text-lg">{artwork.medium}</span>
              </div>
              <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                <span className="text-gray-400 uppercase tracking-wider text-xs pt-1">Dimensions</span>
                <span className="col-span-2 text-lg">{artwork.dimensions}</span>
              </div>
            </div>

            <div className="mt-12 text-base leading-relaxed text-gray-600 max-w-prose">
              {artwork.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};