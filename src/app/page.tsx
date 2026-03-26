import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Wrapper principal garantindo altura mínima da tela e comportamento flexível
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Navegação Fixa */}
      <Header />
      
      {/* O main agrupa o conteúdo principal da página (SEO e Acessibilidade) */}
      {/* flex-grow garante que o conteúdo empurre o footer para baixo caso falte conteúdo */}
      <main className="flex-grow flex flex-col w-full">
        <Hero />
        <About />
        <Services />
        <Workflow />
        <Benefits />
        <Contact />
      </main>

      {/* Rodapé da Aplicação */}
      <Footer />
      
    </div>
  );
}