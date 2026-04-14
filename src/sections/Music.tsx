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

export function Music() {
  return (
    <section id="musica" className="py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={revealVariants}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            SONORIDADE
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Mergulhe nas frequências noturnas. Ouça os últimos sets e produções.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-20px' }}
          variants={revealVariants}
        >
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/lmork-psy&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
