import React from 'react';
import { ShieldCheck, Heart, Sparkles, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  return (
    <footer className="bg-[#281520] text-[#fbeef4] pt-14 pb-12 border-t border-[#3e2232]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-display font-black text-xl text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#e6177a] text-white flex items-center justify-center text-xs">
                🍦
              </span>
              <span>Picolé Gourmet em Casa</span>
            </div>
            <p className="text-xs text-[#cfb3c1] leading-relaxed max-w-sm">
              O método prático da Base Camaleão de Emulsão Fria para você criar sobremesas artesanais com textura de gelato e casquinha crocante no freezer de casa.
            </p>
            <div className="text-xs text-[#a38394] pt-1">
              Criado e ministrado por <strong className="text-white">Chef Camila Rezende</strong>.
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Navegação Rápida
            </div>
            <ul className="space-y-2 text-[#cfb3c1]">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Como Funciona o Método
                </a>
              </li>
              <li>
                <a href="#sabores" className="hover:text-white transition-colors">
                  Vitrine dos 16 Sabores
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Calculadora de Custos & Lucro
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-white transition-colors">
                  Os 5 Bônus Inclusos
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct purchase & support */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <div className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">
              Atendimento & Segurança
            </div>
            <p className="text-[#cfb3c1] leading-relaxed">
              Dúvidas sobre o conteúdo ou sua compra? Fale diretamente com o nosso suporte oficial de alunas:
            </p>
            <div className="bg-[#3b2030] p-3 rounded-xl border border-[#4d2d40] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-[#cfb3c1]">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>suporte@picolegourmet.com.br</span>
              </div>
            </div>
            <button
              onClick={onOpenCheckout}
              className="w-full py-2.5 bg-[#e6177a] hover:bg-[#cb0c66] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer text-center"
            >
              Inscrever-se por R$ 9,90
            </button>
          </div>

        </div>

        {/* Sanitary and Disclaimer Note */}
        <div className="border-t border-[#3e2232] pt-6 text-[11px] text-[#9c7d8f] leading-relaxed space-y-2">
          <p>
            <strong>Aviso Legal e Sanitário:</strong> Os resultados financeiros e margens de lucro apresentados nesta página são estimativas com base em preços médios praticados no mercado brasileiro e variam de acordo com a sua região, escolha de ingredientes e dedicação individual. Nenhuma promessa de ganho fixo ou milagroso é feita. Caso decida comercializar alimentos artesanais, observe as normas de manipulação e higiene recomendadas pela ANVISA e consulte a vigilância sanitária ou prefeitura da sua localidade.
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#3e2232]/60 text-[#86687a]">
            <div>
              © 2026 Método Picolé Gourmet em Casa · Todos os direitos reservados. CNPJ: 45.892.110/0001-44
            </div>
            <div className="flex items-center gap-3">
              <span>Termos de Uso</span>
              <span>·</span>
              <span>Políticas de Privacidade</span>
              <span>·</span>
              <span>Garantia de 7 Dias CDC</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
