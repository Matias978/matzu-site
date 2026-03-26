export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-2xl font-bold text-matzu-900 tracking-tighter">
            Matzu<span className="text-matzu-600">.</span>
          </a>
          <p className="text-sm text-slate-500">
            © {currentYear} Matzu. Todos os direitos reservados.
          </p>
        </div>

        {/* Links Rápidos */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
          <a href="#sobre" className="hover:text-matzu-600 transition-colors">Sobre</a>
          <a href="#solucoes" className="hover:text-matzu-600 transition-colors">Soluções</a>
          <a href="#metodologia" className="hover:text-matzu-600 transition-colors">Metodologia</a>
          <a href="#contato" className="hover:text-matzu-600 transition-colors">Contato</a>
        </div>
        
      </div>
    </footer>
  );
}