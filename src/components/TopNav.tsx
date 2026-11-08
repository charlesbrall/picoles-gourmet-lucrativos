import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface TopNavProps {
  onOpenCheckout: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#f3d3e0] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Wordmark */}
        <a 
          href="#" 
          className="font-display font-extrabold text-lg sm:text-xl text-[#281520] hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-[#ffe4ee] text-[#e6177a] flex items-center justify-center font-black text-sm">
            🍦
          </span>
          <span>Picolé Gourmet em Casa</span>
        </a>

        {/* Zone 2: 4-5 Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6f5663]">
          <a href="#como-funciona" className="hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0">
            Como Funciona
          </a>
          <a href="#sabores" className="hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0">
            Vitrine de Sabores
          </a>
          <a href="#calculadora" className="hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0">
            Calculadora de Lucro
          </a>
          <a href="#bonus" className="hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0">
            5 Bônus Inclusos
          </a>
          <a href="#depoimentos" className="hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0">
            Alunos & Resultados
          </a>
          <a href="#duvidas" className="hover:text-[#e6177a] transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCheckout}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#ff5fa8] to-[#e6177a] hover:from-[#e6177a] hover:to-[#cb0c66] rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>Quero Fazer os Meus</span>
            <span className="hidden sm:inline bg-white/20 px-1.5 py-0.5 rounded text-[11px] tabular-nums">
              R$ 9,90
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
