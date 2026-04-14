import React, { useEffect, useState } from 'react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center relative z-50">
          <div 
            className="flex items-center cursor-pointer md:cursor-default" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img
              src="https://lh3.googleusercontent.com/d/1FEG5owCcLRSM0vPXqBEncZT46JBzFd_X"
              alt="LMØRK Logo"
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-muted">
            <a href="#diferenciais" className="hover:text-white transition-colors">
              Conceito
            </a>
            <a href="#sobre" className="hover:text-white transition-colors">
              Origem
            </a>
            <a href="#psyvision" className="hover:text-white transition-colors">
              Psyvision Crew
            </a>
            <a href="#musica" className="hover:text-white transition-colors">
              Sonoridade
            </a>
            <a href="https://drive.google.com/drive/folders/1E361NT-PEos1t5JGOmhPchncN86qiKYH?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Presskit
            </a>
          </nav>
          <a
            href="#contato"
            className="hidden md:inline-flex px-6 py-2.5 bg-white text-dark font-semibold text-sm rounded-full hover:scale-105 transition-transform duration-300"
          >
            Booking
          </a>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 text-center text-xl font-display tracking-widest">
          <a href="#diferenciais" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Conceito</a>
          <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Origem</a>
          <a href="#psyvision" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Psyvision Crew</a>
          <a href="#musica" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Sonoridade</a>
          <a href="https://drive.google.com/drive/folders/1E361NT-PEos1t5JGOmhPchncN86qiKYH?usp=drive_link" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">Presskit</a>
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-8 py-3 bg-white text-dark font-bold rounded-full hover:scale-105 transition-transform">Booking</a>
        </nav>
      </div>
    </>
  );
}
