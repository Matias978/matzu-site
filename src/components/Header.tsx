"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Sobre", href: "#sobre" },
  { name: "Soluções", href: "#solucoes" },
  { name: "Metodologia", href: "#metodologia" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta o scroll para adicionar uma sombra sutil ao header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
        isScrolled ? "shadow-sm border-b border-matzu-100 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-bold text-matzu-900 tracking-tighter hover:opacity-80 transition-opacity"
          aria-label="Matzu Home"
        >
          Matzu<span className="text-matzu-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-matzu-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="px-5 py-2.5 bg-matzu-600 text-white text-sm font-medium rounded-lg hover:bg-matzu-700 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Falar com Especialista
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-matzu-900 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-matzu-100 overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-600 hover:text-matzu-600 py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center mt-2 px-5 py-3 bg-matzu-600 text-white text-base font-medium rounded-lg hover:bg-matzu-700 transition-colors shadow-sm"
              >
                Falar com Especialista
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}