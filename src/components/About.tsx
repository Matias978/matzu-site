"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Rocket, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: Code2,
    title: "Engenharia de Alto Padrão",
    description: "Código limpo, testável e arquiteturas escaláveis. Não criamos débito técnico, construímos fundações sólidas.",
  },
  {
    icon: Rocket,
    title: "Foco em Resultado",
    description: "Entregas ágeis guiadas por métricas de negócio. Nosso sucesso é medido pelo seu ganho de eficiência.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Conformidade",
    description: "Processos auditáveis e rigor com a segurança dos dados, essencial para ambientes corporativos e de saúde.",
  },
  {
    icon: CheckCircle2,
    title: "Parceria Estratégica",
    description: "Mergulhamos na sua operação para identificar gargalos reais antes de escrever a primeira linha de código.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-matzu-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Proposta de Valor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-matzu-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Muito além de uma dev shop
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-matzu-900 mb-6 leading-tight">
              Transformamos complexidade operacional em vantagem competitiva.
            </h3>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                A Matzu nasceu da compreensão de que softwares genéricos muitas vezes criam mais problemas do que resolvem. Em ambientes de alta precisão, como laboratórios e operações corporativas complexas, processos engessados custam tempo e dinheiro.
              </p>
              <p>
                Nós não apenas recebemos demandas e entregamos telas. Atuamos como seus <strong className="text-matzu-800 font-medium">parceiros estratégicos de tecnologia</strong>. Mapeamos seus gargalos operacionais e desenvolvemos soluções digitais sob medida que automatizam rotinas, integram sistemas isolados e preparam seu negócio para escalar com segurança.
              </p>
            </div>
          </motion.div>

          {/* Lado Direito: Diferenciais (Grid) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {differentiators.map((item, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-matzu-600 mb-2">
                  <item.icon size={24} strokeWidth={2} />
                </div>
                <h4 className="text-lg font-semibold text-matzu-900">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}