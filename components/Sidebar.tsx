import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on route change (mobile)
  const handleLinkClick = () => setIsOpen(false);

  const navClass = ({ isActive }: { isActive: boolean }) => 
    `block py-1 hover:text-gray-500 transition-colors ${isActive ? 'font-bold' : ''}`;

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <NavLink to="/" className="text-lg font-bold tracking-tight">ELENA VANCE</NavLink>
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Container */}
      <nav className={`
        fixed top-0 left-0 h-full bg-white z-40
        w-full md:w-64 md:block
        flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        pt-24 md:pt-12 px-8
        border-r border-gray-100
      `}>
        <div className="mb-12 hidden md:block">
          <NavLink to="/" className="text-xl font-bold tracking-tighter">ELENA VANCE</NavLink>
          <div className="text-xs text-gray-500 mt-2">Contemporary Artist</div>
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <div className="font-bold mb-2 text-gray-400 text-xs uppercase tracking-wider">Works</div>
            <ul className="space-y-1">
              <li><NavLink to="/" onClick={handleLinkClick} className={navClass}>All Works</NavLink></li>
              <li><NavLink to="/works/series/Silence" onClick={handleLinkClick} className={navClass}>Series: Silence</NavLink></li>
              <li><NavLink to="/works/series/Primary" onClick={handleLinkClick} className={navClass}>Series: Primary</NavLink></li>
              <li><NavLink to="/works/series/Elements" onClick={handleLinkClick} className={navClass}>Series: Elements</NavLink></li>
            </ul>
          </div>

          <div>
            <div className="font-bold mb-2 text-gray-400 text-xs uppercase tracking-wider">Information</div>
            <ul className="space-y-1">
              <li><NavLink to="/about" onClick={handleLinkClick} className={navClass}>Biography & CV</NavLink></li>
              <li><NavLink to="/contact" onClick={handleLinkClick} className={navClass}>Contact</NavLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-auto mb-12 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Elena Vance.
          <br />
          All rights reserved.
        </div>
      </nav>
    </>
  );
};