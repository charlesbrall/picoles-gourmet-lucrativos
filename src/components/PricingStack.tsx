import React from 'react';
import { ShieldCheck, Clock, Check, Sparkles, Lock, ArrowRight, Zap } from 'lucide-react';

interface PricingStackProps {
  onOpenCheckout: () => void;
}

export const PricingStack: React.FC<PricingStackProps> = ({ onOpenCheckout }) => {
  const items = [
    { name: 'Formação Completa Picolé Gourmet em Casa (Aulas em Vídeo + PDF)', val: 'R$ 47,00' },
    { name: '🎁 Bônus 1: Masterclass Morango Cravejado com Chocolate Branco', val: 'R$ 14,00' },
    { name: '🎁 Bônus 2: Lista Secreta de Fornecedores Nacionais no Atacado', val: 'R$ 19,00' },
    { name: '🎁 Bônus 3: Planilha Automática de Custos e Precificação', val: 'R$ 12,00' },
    { name: '🎁 Bônus 4: Guia de Bolso: Da Cozinha à Primeira Venda Rápida', val: 'R$ 19,00' },
    { name: '🎁 Bônus 5: Suporte Especializado no WhatsApp por 14 Dias', val: 'R$ 29,00' },
  ];

  return (
    <section id="comprar" className="py-16 sm:py-24 bg-[#FFF5F8] border-b border-[#f3d3e0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        
        <div className="text-center space-y-3 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full">
            Investimento Quase Simbólico
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Menos que <em className="not-italic text-[#e6177a]">um único picolé</em> na loja
          </h2>
          <p className="text-sm sm:text-base text-[#6f5663]">
            Veja tudo o que você recebe imediatamente ao garantir a sua vaga na turma promocional de lançamento.
          </p>
        </div>

        {/* The Stack Box */}
        <div className="bg-white border-3 border-[#e6177a] rounded-3xl p-6 sm:p-8 shadow-xl relative">
          
          {/* Top highlight ribbon */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#e6177a] text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
            Pacote Completo de Lançamento
          </div>

          <div className="divide-y divide-dashed divide-[#f3d3e0] text-xs sm:text-sm pt-2">
            {items.map((it, idx) => (
              <div key={idx} className="py-3 flex justify-between items-center gap-3">
                <span className="text-[#3c2230] font-medium leading-tight">
                  {it.name}
                </span>
                <b className="text-[#846677] whitespace-nowrap tabular-nums font-semibold">
                  {it.val}
                </b>
              </div>
            ))}
          </div>

          {/* Pricing Total Box */}
          <div className="mt-6 pt-6 border-t-2 border-[#f3d3e0] text-center space-y-2">
            <div className="text-xs sm:text-sm text-[#816574]">
              Valor total acumulado de todos os itens: <s className="text-red-500 font-bold">R$ 140,00</s>
            </div>
            
            <div className="py-2">
              <span className="text-xs uppercase font-extrabold text-[#16a34a] bg-[#ecfdf5] border border-[#a7f3d0] px-3 py-1 rounded-full">
                Desconto de mais de 92% apenas hoje
              </span>
              <div className="font-display font-black text-5xl sm:text-6xl text-[#e6177a] tracking-tight mt-2 tabular-nums">
                R$ 9,90
              </div>
              <p className="text-xs text-[#6f5663] font-medium mt-1">
                Pagamento único · Acesso vitalício · Sem mensalidades
              </p>
            </div>
          </div>

          {/* Warning Urgency Box filled with concrete logic */}
          <div className="bg-[#fffbeb] border border-[#fde68a] rounded-2xl p-3.5 my-5 text-center text-xs sm:text-sm text-[#92400e] font-semibold flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#d97706] shrink-0" />
            <span>
              Preço de lançamento válido até hoje às 23:59. Depois volta para R$ 97,00.
            </span>
          </div>

          {/* Primary CTA */}
          <button
            onClick={onOpenCheckout}
            className="w-full py-4.5 bg-gradient-to-b from-[#ff5fa8] via-[#e6177a] to-[#cb0c66] hover:brightness-105 active:scale-[0.98] text-white font-display font-black text-lg sm:text-xl rounded-2xl shadow-[0_5px_0_#9a0a4c] transition-all cursor-pointer flex flex-col items-center justify-center group"
          >
            <span className="flex items-center gap-2">
              <span>SIM, QUERO MEU ACESSO IMEDIATO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <small className="text-xs font-semibold text-white/90">
              7 dias de garantia incondicional · Compra 100% segura
            </small>
          </button>

          {/* Trust badges footer */}
          <div className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] text-[#785b6b] pt-2 border-t border-[#f3d3e0]">
            <div className="flex flex-col items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
              <span>Garantia 7 Dias</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Lock className="w-4 h-4 text-[#e6177a]" />
              <span>Dados Criptografados</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-4 h-4 text-[#ffb800]" />
              <span>Liberação Imediata</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
