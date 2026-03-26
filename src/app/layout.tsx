import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuração da fonte Inter para um visual limpo e corporativo
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

// Configuração base de SEO
export const metadata: Metadata = {
  title: "Matzu | Inteligência e Automação para Escalar o seu Negócio",
  description: "Soluções digitais e softwares de gestão sob medida para otimizar processos em ambientes corporativos e laboratoriais. Sua parceira estratégica em tecnologia.",
  keywords: ["software de gestão", "automação empresarial", "desenvolvimento sob medida", "tecnologia laboratorial", "Matzu"],
  authors: [{ name: "Matzu" }],
  openGraph: {
    title: "Matzu | Inteligência e Automação",
    description: "Softwares de gestão e soluções digitais focadas em eficiência operacional.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col bg-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}