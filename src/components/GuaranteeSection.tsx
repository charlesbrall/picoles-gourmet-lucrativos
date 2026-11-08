import React from 'react';
import { ShieldCheck, HeartHandshake, RefreshCw, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#f3d3e0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-[#FFF5F8] border border-[#f3d3e0] rounded-3xl p-6 sm:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          
          {/* Guarantee Badge */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#16a34a] to-[#15803d] text-white flex flex-col items-center justify-center p-3 shadow-xl border-4 border-white text-center">
              <ShieldCheck className="w-8 h-8 text-white mb-0.5" />
              <span className="font-display font-black text-xl sm:text-2xl leading-none">7 DIAS</span>
              <span className="text-[9px] font-bold tracking-wider uppercase opacity-95">Garantia Total</span>
            </div>
          </div>

          {/* Guarantee Description */}
          <div className="space-y-3">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#281520] tracking-tight">
              Garantia Incondicional de <em className="not-italic text-[#16a34a]">7 Dias</em>
            </h2>
            
            <p className="text-sm sm:text-base text-[#4c313f] leading-relaxed">
              O risco financeiro é 100% meu, não seu. Você entra agora, assiste às aulas, baixa as apostilas e faz sua primeira receita de picolé na cozinha da sua casa.
            </p>

            <p className="text-xs sm:text-sm text-[#6f5663] leading-relaxed">
              Se você não achar o picolé mais cremoso e gostoso que já provou, ou sentir que o curso não valeu pelo menos 10 vezes os <strong>R$ 9,90</strong> investidos, basta me mandar um único e-mail ou WhatsApp. Devolvo 100% do seu dinheiro, na mesma hora, sem perguntas e sem letras miúdas. Continuamos amigos.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-[#16a34a]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Reembolso direto e sem burocracia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Segurança protegida pelo Código de Defesa do Consumidor</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
