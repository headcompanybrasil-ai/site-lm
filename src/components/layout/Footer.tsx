import React from 'react';
import { motion } from 'motion/react';

const revealVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Footer() {
  return (
    <footer
      id="contato"
      className="relative pt-32 pb-10 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_60%)]"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20px' }}
        variants={revealVariants}
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter mb-12 max-w-3xl mx-auto leading-tight">
          Disponível para bookings em festivais e núcleos focados na cultura
          Psytrance underground.
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="mailto:booking@lmork.com"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-dark font-bold text-lg rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
          >
            Contato Booking
          </a>
          <a
            href="https://drive.google.com/drive/folders/1E361NT-PEos1t5JGOmhPchncN86qiKYH?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-transparent border border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors duration-300 w-full sm:w-auto"
          >
            Download Presskit
          </a>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted uppercase tracking-widest">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://lh3.googleusercontent.com/d/1FEG5owCcLRSM0vPXqBEncZT46JBzFd_X" 
              alt="LMØRK Logo" 
              className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
            />
            <span className="font-display font-bold text-white text-lg tracking-widest hidden sm:inline-block">
              LMØRK
            </span>
          </div>
          <img 
            src="https://lh3.googleusercontent.com/d/1kJyILdyO-lKs6fCkpTLBGratvf3C2ge8" 
            alt="Psyvision Crew" 
            className="h-6 md:h-8 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex gap-6">
          <a href="https://soundcloud.com/lmork-psy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Soundcloud
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Spotify
          </a>
        </div>
        <div>&copy; 2026 LMØRK. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
