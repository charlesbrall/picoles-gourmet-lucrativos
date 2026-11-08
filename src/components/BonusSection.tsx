import React from 'react';
import { BONUSES } from '../data/bonuses';
import strawberryImg from '../assets/images/picole_morango_cravejado_1793665570139.jpg';
import { Gift, Check, Sparkles, ArrowRight } from 'lucide-react';

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="bonus" className="py-16 sm:py-20 bg-[#FFF5F8] border-b border-[#f3d3e0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#d97706] bg-[#fef3c7] border border-[#fde68a] px-3 py-1 rounded-full flex items-center justify-center gap-1.5 w-fit mx-auto">
            <Gift className="w-3.5 h-3.5 text-[#d97706]" />
            <span>Presentes Exclusivos de Lançamento</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Você leva também <em className="not-italic text-[#e6177a]">5 bônus especiais</em> sem pagar nada a mais
          </h2>
          <p className="text-base text-[#6f5663]">
            São R$ 93,00 em materiais complementares entregues 100% de graça junto com a sua inscrição promocional de R$ 9,90.
          </p>
        </div>

        {/* Featured Bonus 1 with Visual Image */}
        <div className="bg-white border-2 border-[#ffb800] rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
          <div className="grid md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-[#f3d3e0] shadow-md group relative">
                <img
                  src={strawberryImg}
                  alt="Picolé de Morango Cravejado com casquinha de chocolate branco crocante e amêndoas"
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2.5 left-2.5 bg-[#e6177a] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow-xs">
                  Bônus Marquee
                </span>
              </div>
            </div>

            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#b45309] bg-[#fffbeb] px-2.5 py-0.5 rounded-md border border-[#fde68a]">
                  🎁 Bônus 1 · Masterclass Exclusiva
                </span>
                <span className="text-xs text-[#8f7483] line-through font-semibold">
                  Valor: R$ 14,00
                </span>
              </div>

              <h3 className="font-display font-black text-xl text-[#281520]">
                O Segredo do Morango Cravejado com Chocolate Branco Gold
              </h3>

              <p className="text-xs sm:text-sm text-[#5f4855] leading-relaxed">
                O sabor mais viral do Instagram e TikTok ensinado em detalhes: como fazer a casquinha cravejada fininha com amêndoas laminadas que não racha, e o gelato de morango que não perde a cor nem cristaliza.
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="flex items-center gap-2 text-xs text-[#281520] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Proporção exata para o chocolate branco não ficar grosso</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#281520] font-medium">
                  <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                  <span>Técnica do choque térmico controlado</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Other 4 Bonuses in Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {BONUSES.slice(1).map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white border-2 border-[#ffd778] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-3 flex flex-col justify-between hover:border-[#ffb800] transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-[#b45309] bg-[#fffbeb] px-2.5 py-0.5 rounded-md border border-[#fde68a]">
                    🎁 Bônus {bonus.id} · {bonus.badge}
                  </span>
                  <span className="text-xs text-[#8f7483] line-through font-semibold">
                    Valor: R$ {bonus.realValue.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-[#281520]">
                  {bonus.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#6f5663] leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#f7e4b5] space-y-1">
                {bonus.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-[#4d3441]">
                    <Check className="w-3 h-3 text-[#16a34a] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bonus CTA banner */}
        <div className="mt-8 bg-gradient-to-r from-[#ffe4ee] via-white to-[#ffe4ee] border border-[#f3d3e0] rounded-2xl p-5 text-center space-y-3">
          <p className="text-xs sm:text-sm text-[#4d3240] font-medium">
            Todos os 5 bônus serão liberados instantaneamente dentro da sua área de membros.
          </p>
          <button
            onClick={onOpenCheckout}
            className="px-6 py-2.5 bg-[#e6177a] hover:bg-[#cb0c66] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Garantir Meus 5 Bônus Inclusos por R$ 9,90</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
