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

export function Differentials() {
  return (
    <section id="diferenciais" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={revealVariants}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            A ARQUITETURA<br />
            DO SOM.
          </h2>
          <p className="text-muted max-w-md">
            Construindo atmosferas que desafiam a percepção e conectam a pista em
            uma única frequência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          {/* Bento Item 1 (Large) */}
          <motion.div
            className="glass-card rounded-3xl p-8 md:col-span-2 md:row-span-2 relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={revealVariants}
          >
            <div className="absolute inset-0 z-0 img-wrap">
              <img
                src="https://lh3.googleusercontent.com/d/10OOUcbQiRJk5cAYth-qVvFmRDCuA2Zfk"
                alt="Conceito"
                className="w-full h-full object-cover object-center opacity-80 md:opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-none">
                A ESSÊNCIA
              </h3>
              <p className="text-muted md:text-lg max-w-md">
                A fusão perfeita entre a escuridão ("Mørk") e a luz. Uma
                dualidade que guia apresentações que transitam de atmosferas
                densas e hipnóticas para momentos de pura euforia e expansão.
              </p>
            </div>
          </motion.div>

          {/* Bento Item 2 */}
          <motion.div
            className="glass-card rounded-3xl p-8 relative overflow-hidden md:row-span-2 group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={revealVariants}
          >
            <div className="absolute inset-0 z-0 img-wrap">
              <img
                src="https://lh3.googleusercontent.com/d/1IaCZLLf91Gckd50nWSpltgPN43rAhybV"
                alt="Curadoria Profunda"
                className="w-full h-full object-cover object-top opacity-80 md:opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 bg-black/30 backdrop-blur-sm">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-2">
                  Curadoria Profunda
                </h3>
                <p className="text-sm text-muted">
                  Pesquisa sonora incansável, buscando referências autênticas e
                  linhas pouco exploradas no cenário global.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bento Item 4 (Wide) */}
          <motion.div
            className="glass-card rounded-3xl p-8 md:col-span-3 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-20px' }}
            variants={revealVariants}
          >
            <div className="absolute inset-0 z-0 img-wrap">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c090be5f524?q=80&w=2940&auto=format&fit=crop"
                alt="Festival Connection"
                className="w-full h-full object-cover opacity-60 md:opacity-40"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-center max-w-2xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Conexão Real com a Pista
              </h3>
              <p className="text-muted">
                Cada set é um ritual construído com intenção. LMØRK valoriza a
                autenticidade, fugindo do óbvio para proporcionar uma sinergia
                verdadeira entre a música, o ambiente e a energia do público.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
