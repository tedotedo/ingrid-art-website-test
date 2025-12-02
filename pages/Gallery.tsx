import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ARTWORKS } from '../data';
import { ViewMode } from '../types';
import { Grid, List } from 'lucide-react';

export const Gallery: React.FC = () => {
  const { category, seriesId } = useParams<{ category?: string; seriesId?: string }>();
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredArtworks = useMemo(() => {
    let filtered = ARTWORKS;
    if (category) {
      filtered = filtered.filter(art => art.category === category || (category === 'All' ? true : false));
    }
    if (seriesId) {
      filtered = filtered.filter(art => art.series === seriesId);
    }
    return filtered;
  }, [category, seriesId]);

  const title = category || (seriesId ? `Series: ${seriesId}` : 'All Works');

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-6 min-h-screen">
      <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold uppercase tracking-widest text-gray-800">
          {title}
          <span className="ml-3 text-gray-400 font-normal normal-case text-lg">({filteredArtworks.length})</span>
        </h1>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-2 transition-colors ${viewMode === 'grid' ? 'text-black' : 'text-gray-300 hover:text-gray-500'}`}
            aria-label="Grid view"
          >
            <Grid size={20} />
          </button>
          <button 
            onClick={() => setViewMode('list')}
            className={`p-2 transition-colors ${viewMode === 'list' ? 'text-black' : 'text-gray-300 hover:text-gray-500'}`}
            aria-label="List view"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {filteredArtworks.map((art) => (
            <Link key={art.id} to={`/work/${art.id}`} className="group block">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100 mb-4 relative shadow-sm">
                 <img 
                   src={art.imageUrl} 
                   alt={art.title}
                   className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                   loading="lazy"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-lg group-hover:text-gray-600 transition-colors">{art.title}</span>
                <span className="text-gray-500 text-sm font-mono">{art.year}, {art.medium}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="w-full">
          <div className="border-b border-gray-200 pb-2 mb-2 flex text-xs font-bold text-gray-400 uppercase tracking-wider">
            <div className="w-24">Year</div>
            <div className="flex-1">Title</div>
            <div className="hidden md:block w-1/4">Medium</div>
            <div className="hidden md:block w-32 text-right">Category</div>
          </div>
          <ul className="space-y-1">
            {filteredArtworks.map((art) => (
              <li key={art.id}>
                <Link to={`/work/${art.id}`} className="flex py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors items-baseline text-base group">
                  <div className="w-24 text-gray-500 font-mono text-sm">{art.year}</div>
                  <div className="flex-1 font-bold group-hover:underline decoration-1 underline-offset-4">{art.title}</div>
                  <div className="hidden md:block w-1/4 text-gray-500 text-sm truncate pr-4">{art.medium}</div>
                  <div className="hidden md:block w-32 text-right text-xs text-gray-400 uppercase tracking-wider">{art.category || '—'}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};