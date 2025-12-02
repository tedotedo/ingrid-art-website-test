import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navClass = ({ isActive }: { isActive: boolean }) => 
    `text-sm font-normal tracking-wide hover:text-white transition-colors uppercase ${isActive ? 'text-white border-b border-white pb-0.5' : 'text-gray-400'}`;

  return (
    <nav className="bg-[#1a1a1a]/95 text-white w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 py-6 items-center font-sans">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/about" className={navClass}>Profile</NavLink>
          <NavLink to="/works" className={navClass} end>All Works</NavLink>
          <NavLink to="/works/Painting" className={navClass}>Painting</NavLink>
          <NavLink to="/works/Sculpture" className={navClass}>Sculpture</NavLink>
          <NavLink to="/contact" className={navClass}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
};