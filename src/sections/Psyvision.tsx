import React from 'react';
import { motion } from 'motion/react';
import { Megaphone, Network, Lightbulb } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Psyvision() {
  return (
    <section id="psyvision" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex justify-center mb-8 px-4">
            <img 
              src="https://lh3.googleusercontent.com/d/1kJyILdyO-lKs6fCkpTLBGratvf3C2ge8" 
              alt="Psyvision Crew Logo" 
              className="w-48 sm:w-64 md:w-80 h-auto object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter mb-6">
            Psyvision Crew
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            A Psyvision Crew não é apenas um coletivo; é uma frente de colaboração mútua no cenário DJ underground, da qual Lucas é um dos fundadores.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
            className="space-y-6 text-muted text-lg leading-relaxed"
          >
            <p>
              O projeto nasceu da necessidade de unir forças em um mercado altamente competitivo, onde o talento técnico muitas vezes precisa de suporte estratégico para ganhar visibilidade.
            </p>
            <p>
              O foco da Crew é converter a união em crescimento profissional através de três pilares fundamentais de atuação:
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {[
              {
                title: 'Marketing Estratégico',
                desc: 'Desenvolvimento de identidade visual, gestão de redes sociais e criação de conteúdo para que o artista não seja apenas ouvido, mas também visto e lembrado.',
                icon: <Megaphone className="w-6 h-6 text-white" />
              },
              {
                title: 'Networking Ativo',
                desc: 'Ponte direta entre DJs, produtores e organizadores de eventos, facilitando o fluxo de convites e o acesso a novos palcos.',
                icon: <Network className="w-6 h-6 text-white" />
              },
              {
                title: 'Suporte Independente',
                desc: 'Um ecossistema de "ajuda mútua" onde a troca de experiências e ferramentas nivela o conhecimento técnico e profissional de todos os membros.',
                icon: <Lightbulb className="w-6 h-6 text-white" />
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex gap-6 p-6 bg-surface/30 border border-white/5 rounded-2xl hover:bg-surface/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
