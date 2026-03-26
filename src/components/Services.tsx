"use client";

import { motion } from "framer-motion";
import { Laptop, Cpu, Database, Network } from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Desenvolvimento Sob Medida",
    description: "Criação de plataformas, portais e aplicativos desenhados exclusivamente para a lógica de negócio da sua empresa, sem amarras de sistemas de prateleira.",
  },
  {
    icon: Cpu,
    title: "Automações Empresariais",
    description: "Eliminação de tarefas manuais e repetitivas através de scripts, robôs (RPA) e rotinas em background. Mais produtividade, menos erro humano.",
  },
  {
    icon: Database,
    title: "Sistemas de Gestão (Lab/Corp)",
    description: "ERPs e CRMs customizados com foco em ambientes laboratoriais e corporativos. Controle total sobre amostras, fluxos, clientes e faturamento.",
  },
  {
    icon: Network,
    title: "Integrações de Sistemas",
    description: "Conectamos seus softwares legados, APIs de terceiros e bancos de dados para garantir que a informação flua em tempo real por toda a operação.",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-matzu-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Nossas Soluções
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-matzu-900 mb-4">
            Tecnologia construída para o seu cenário.
          </h3>
          <p className="text-slate-600 text-lg">
            Combinamos engenharia de software de ponta com visão de negócios para entregar ferramentas que resolvem problemas reais.
          </p>
        </div>

        {/* Grid de Serviços */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-xl bg-matzu-50 flex items-center justify-center text-matzu-600 mb-6 group-hover:bg-matzu-600 group-hover:text-white transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-matzu-900 mb-3">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}