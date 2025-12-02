import React from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Home } from './pages/Home';
import { Gallery } from './pages/Gallery';
import { WorkDetail } from './pages/WorkDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-paper text-black font-sans selection:bg-gray-900 selection:text-white flex flex-col">
      {/* Home Page Layout: Full Screen Hero with Navbar at bottom */}
      {isHome ? (
        <>
          <header className="relative w-full h-screen">
            <Hero />
            <div className="absolute bottom-0 left-0 w-full z-20">
              <Navbar />
            </div>
          </header>
          <main className="flex-1 w-full bg-paper">
            {children}
          </main>
        </>
      ) : (
        /* Other Pages: Sticky Navbar then Content */
        <>
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <main className="flex-1 w-full bg-paper pt-12">
            {children}
          </main>
        </>
      )}
      
      <footer className="py-12 text-center text-xs text-gray-400 font-mono uppercase tracking-widest border-t border-gray-100 mt-auto">
        &copy; {new Date().getFullYear()} Ingrid Aszkenasy. All rights reserved.
      </footer>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Gallery />} />
      <Route path="/works/:category" element={<Gallery />} />
      <Route path="/works/series/:seriesId" element={<Gallery />} />
      <Route path="/work/:id" element={<WorkDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </HashRouter>
  );
};

export default App;