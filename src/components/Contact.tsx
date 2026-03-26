"use client";

import { useState } from "react";
import { Send, MessageCircle, Loader2 } from "lucide-react";
import { sendEmail } from "@/app/actions"; // Importando a ação de servidor

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Captura os dados do formulário
    const formData = new FormData(e.currentTarget);
    
    // Envia para o servidor via Resend
    const result = await sendEmail(formData);
    
    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset(); // Limpa o formulário após sucesso
      // Reseta a mensagem de sucesso após 5 segundos
      setTimeout(() => setIsSuccess(false), 5000);
    } else {
      // Caso ocorra algum erro no Resend
      alert("Houve um erro ao enviar sua mensagem. Por favor, tente novamente.");
    }
  };

  return (
    <section id="contato" className="py-24 bg-matzu-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Lado Esquerdo: Copy e Info */}
            <div className="p-10 md:p-16 bg-matzu-900 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-matzu-600 to-blue-400" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para escalar sua operação?
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  Preencha o formulário ao lado para agendar um diagnóstico gratuito. Nossos engenheiros analisarão seus gargalos e proporão a melhor arquitetura para o seu negócio.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MessageCircle size={24} className="text-matzu-400" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">Preferência por mensagem?</p>
                      <a 
                        href="https://wa.me/5511999999999" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white font-medium hover:text-matzu-400 transition-colors"
                      >
                        Falar agora no WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito: Formulário */}
            <div className="p-10 md:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Nome completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" // Adicionado para a Action
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-matzu-600 focus:ring-2 focus:ring-matzu-600/20 outline-none transition-all text-slate-800"
                      placeholder="João Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">E-mail corporativo</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" // Adicionado para a Action
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-matzu-600 focus:ring-2 focus:ring-matzu-600/20 outline-none transition-all text-slate-800"
                      placeholder="joao@empresa.com.br"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">Empresa</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" // Adicionado para a Action
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-matzu-600 focus:ring-2 focus:ring-matzu-600/20 outline-none transition-all text-slate-800"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="needs" className="text-sm font-medium text-slate-700">Sua necessidade</label>
                  <textarea 
                    id="needs" 
                    name="needs" // Adicionado para a Action
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-matzu-600 focus:ring-2 focus:ring-matzu-600/20 outline-none transition-all resize-none text-slate-800 break-words"
                    placeholder="Descreva brevemente o desafio ou processo que deseja otimizar..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting || isSuccess}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-matzu-600 text-white text-lg font-medium rounded-xl hover:bg-matzu-700 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : isSuccess ? (
                      "Solicitação Enviada!"
                    ) : (
                      <>
                        Solicitar Diagnóstico
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}