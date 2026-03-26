"use client";

import { motion } from "framer-motion";
import { Search, Code2, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Diagnóstico",
    description: "Mapeamento profundo da sua operação, identificação de gargalos e definição de arquitetura.",
  },
  {
    icon: Code2,
    title: "2. Desenvolvimento",
    description: "Construção ágil e transparente, com entregáveis frequentes e código limpo e testável.",
  },
  {
    icon: Rocket,
    title: "3. Implementação",
    description: "Deploy seguro em ambiente de produção, migração de dados e treinamento da sua equipe.",
  },
  {
    icon: RefreshCw,
    title: "4. Suporte Contínuo",
    description: "Monitoramento de performance, SLAs rigorosos e evolução constante da plataforma.",
  },
];

export default function Workflow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="metodologia" className="py-24 bg-matzu-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-matzu-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Nossa Metodologia
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-matzu-900 mb-4">
            Previsibilidade do início ao fim.
          </h3>
          <p className="text-slate-600 text-lg">
            Um processo estruturado para eliminar riscos, garantir prazos e entregar software que funciona desde o primeiro dia.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Linha conectora de fundo (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          {/* Grid de Passos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {/* Linha conectora de fundo (Mobile) */}
            <div className="md:hidden absolute top-0 left-[27px] w-0.5 h-full bg-slate-200 z-0" />

            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 group">
                
                {/* Ícone com Background */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-white border-4 border-matzu-50 shadow-md flex items-center justify-center text-matzu-600 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  <step.icon size={24} strokeWidth={2} />
                </div>

                {/* Conteúdo */}
                <div className="md:text-center mt-2 md:mt-0">
                  <h4 className="text-lg font-bold text-matzu-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}