"use client";

import { motion } from "framer-motion";
import { TrendingDown, Zap, ShieldCheck, Expand } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Automação de processos manuais diminui horas trabalhadas em tarefas repetitivas e elimina desperdícios.",
  },
  {
    icon: Zap,
    title: "Alta Produtividade",
    description: "Sistemas integrados garantem que sua equipe foque no *core business*, acelerando a tomada de decisão.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de Dados",
    description: "Criptografia avançada e conformidade com LGPD para proteger o maior ativo do seu negócio.",
  },
  {
    icon: Expand,
    title: "Escalabilidade",
    description: "Arquitetura em nuvem preparada para crescer junto com sua empresa, sem necessidade de refatorações caras.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Lado Esquerdo: Autoridade / Garantia */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-matzu-900 rounded-3xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden"
          >
            {/* Efeito decorativo de fundo */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-matzu-600 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <ShieldCheck size={40} className="text-matzu-600 mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Garantia de Processo Matzu
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Construímos nossas soluções baseadas em princípios sólidos de engenharia de software. Nossas entregas são <strong className="text-white font-medium">100% auditáveis, seguras e testadas</strong>.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Você não precisa se preocupar com débitos técnicos ou sistemas engessados. Nós entregamos a base tecnológica robusta para que você possa liderar o seu mercado.
              </p>
            </div>
          </motion.div>

          {/* Lado Direito: Grid de Benefícios */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-lg bg-matzu-50 flex items-center justify-center text-matzu-600">
                    <benefit.icon size={24} strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-matzu-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}