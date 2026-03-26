"use client";

import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare } from "lucide-react";

export default function Hero() {
  // Variantes de animação para manter o código limpo
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        // Adicionamos "as any" ou usamos uma string de easing padrão para evitar o erro de tipo
        ease: [0.16, 1, 0.3, 1] as any 
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-white"
    >
      {/* Background decorativo abstrato (sutil) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-matzu-50 blur-3xl opacity-60" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center flex flex-col items-center"
        >
          {/* Badge de Autoridade */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 tracking-wide uppercase">
              <TerminalSquare size={14} className="text-matzu-600" />
              Engenharia de Software & Negócios
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-matzu-900 tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Inteligência e Automação para <span className="text-transparent bg-clip-text bg-gradient-to-r from-matzu-600 to-matzu-800">Escalar o seu Negócio.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed"
          >
            Soluções digitais e softwares de gestão sob medida para otimizar processos operacionais em ambientes corporativos e laboratoriais. Transformamos gargalos em eficiência.
          </motion.p>

          {/* CTA Principal */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-matzu-600 text-white text-lg font-medium rounded-xl hover:bg-matzu-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Solicitar Demonstração
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 text-lg font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
            >
              Conhecer a Matzu
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}