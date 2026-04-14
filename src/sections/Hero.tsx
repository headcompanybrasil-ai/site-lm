import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 md:py-32">
      <motion.div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-12 md:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={{
            hidden: { opacity: 0, scale: 0.5, filter: 'blur(20px)' },
            visible: { 
              opacity: 1, 
              scale: 1, 
              filter: 'blur(0px)',
              transition: { duration: 2.5, ease: "easeOut" }
            }
          }} 
          className="relative flex justify-center items-center mb-8 md:mb-12 w-full py-12 md:py-20"
        >
          {/* Portal Smoke Effects */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Deep portal core */}
            <div className="absolute w-32 md:w-48 h-32 md:h-48 bg-black rounded-full blur-2xl opacity-90"></div>
            
            {/* Swirling Smoke Layer 1 */}
            <motion.div 
              className="absolute w-80 md:w-[500px] h-80 md:h-[500px] rounded-full blur-3xl opacity-60"
              style={{
                background: 'conic-gradient(from 0deg, transparent, rgba(150,150,150,0.3), transparent, rgba(50,50,50,0.5), transparent)'
              }}
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            
            {/* Swirling Smoke Layer 2 */}
            <motion.div 
              className="absolute w-96 md:w-[600px] h-96 md:h-[600px] rounded-full blur-3xl opacity-40"
              style={{
                background: 'conic-gradient(from 180deg, transparent, rgba(200,200,200,0.2), transparent, rgba(100,100,100,0.4), transparent)'
              }}
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Inner glowing ring */}
            <motion.div 
              className="absolute w-48 md:w-72 h-48 md:h-72 rounded-full border-[20px] border-white/5 blur-2xl"
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.img
              src="https://lh3.googleusercontent.com/d/1FEG5owCcLRSM0vPXqBEncZT46JBzFd_X"
              alt="LMØRK Logo"
              className="w-[280px] md:w-[448px] lg:w-[576px] h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              referrerPolicy="no-referrer"
              animate={{ 
                scale: [1, 1.03, 1],
                rotate: [0, -1, 1, -1, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.img
              src="https://lh3.googleusercontent.com/d/1kJyILdyO-lKs6fCkpTLBGratvf3C2ge8"
              alt="Psyvision Crew"
              className="mt-8 md:mt-12 w-48 md:w-64 lg:w-80 h-auto object-contain"
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <a
            href="https://soundcloud.com/lmork-psy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark font-semibold rounded-full hover:bg-gray-200 transition-colors duration-300 group"
          >
            Descubra a Experiência
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
