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

export function About() {
  return (
    <section id="sobre" className="py-32 px-6 bg-surface/10 border-y border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={revealVariants}
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] glass-card p-2 group">
            <img
              src="https://lh3.googleusercontent.com/d/1Jz8K1yzKliJcqulQ2ARHDPlRaFzYl9dP"
              alt="Lucas de Moura - LMØRK"
              className="w-full h-full object-cover rounded-2xl transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl">
              <p className="font-display font-bold text-lg">Lucas de Moura</p>
              <p className="text-xs text-white/60 uppercase tracking-widest">
                Idealizador
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={revealVariants}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4 block">
            A Origem
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            FORJADO NA<br />
            CULTURA UNDERGROUND.
          </h2>

          <div className="space-y-6 text-muted text-lg font-light leading-relaxed">
            <p>
              Desde 2017 imerso na cultura dos festivais, Lucas desenvolveu uma
              conexão visceral com as vertentes noturnas do Psytrance. O que
              começou como uma paixão de ouvinte, evoluiu para uma pesquisa
              profunda e, no final de 2023, para a discotecagem.
            </p>
            <p>
              Sua identidade artística foi moldada pelas vivências intensas nos
              festivais da Aldeia Outro Mundo. A influência da sonoridade
              da gravadora Bom Shanka Music e a vivência em pistas sagradas não apenas inspiraram
              suas mixagens, mas foram eternizadas em sua própria pele.
            </p>
            <p>
              No final de 2024, essa bagagem sólida deu origem ao{' '}
              <strong className="text-white">LMØRK</strong>. Um projeto que não
              busca apenas tocar faixas, mas sim construir narrativas sonoras que
              respeitam a inteligência e a maturidade da pista.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
