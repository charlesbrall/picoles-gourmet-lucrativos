import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Heart, Zap, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/hero_picole_gourmet_1793665567812.jpg';

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFE3EF] via-[#FFF0F6] to-[#FFF5F8] pt-10 pb-16 lg:py-20 border-b border-[#f3d3e0]">
      {/* Subtle organic dessert backdrop accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#ffd2e6]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#ffe8d6]/50 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#e6177a] text-white text-xs font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Para quem ama picolé gourmet artesanal</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#281520] leading-[1.12] tracking-tight text-balance">
              Faça em casa o picolé gourmet que você paga caro na loja…{' '}
              <em className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-[#e6177a] to-[#ff5fa8]">
                e se quiser, lucre alto.
              </em>
            </h1>

            <p className="text-base sm:text-lg text-[#6f5663] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Uma base aveludada que <strong className="text-[#281520] font-bold">não vai ao fogo, não leva ovos</strong> e se desdobra em mais de 15 sabores de vitrine com casquinha crocante que estala ao morder. Feito na sua <strong className="text-[#281520] font-bold">batedeira comum e freezer doméstico</strong>. Primeiro pra sua família saborear; depois, se der vontade, uma renda extra de R$ 1.500 a R$ 3.000 no mês.
            </p>

            {/* Key benefits list */}
            <div className="grid sm:grid-cols-2 gap-2.5 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#402332] font-semibold bg-white/70 backdrop-blur-sm border border-[#f3d3e0] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                <span>Sem fogão e sem panelas quentes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#402332] font-semibold bg-white/70 backdrop-blur-sm border border-[#f3d3e0] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                <span>Zero ovos: sem cheiro e seguro</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#402332] font-semibold bg-white/70 backdrop-blur-sm border border-[#f3d3e0] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                <span>Não forma pedras de gelo</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#402332] font-semibold bg-white/70 backdrop-blur-sm border border-[#f3d3e0] px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0" />
                <span>Casquinha crocante de 30 segundos</span>
              </div>
            </div>

            {/* Call to Action block */}
            <div className="pt-2 space-y-3">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-[#ff5fa8] via-[#e6177a] to-[#cb0c66] hover:brightness-105 active:scale-[0.98] text-white font-display font-black text-lg rounded-2xl shadow-[0_6px_0_#97084a] transition-all cursor-pointer inline-flex flex-col items-center justify-center gap-0.5 group"
              >
                <span className="flex items-center gap-2">
                  <span>QUERO FAZER OS MEUS AGORA</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xs font-medium text-white/90">
                  Acesso Imediato Vitalício · 7 Dias de Garantia · Por apenas R$ 9,90
                </span>
              </button>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#7d6271] font-medium pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
                  Compra 100% Segura
                </span>
                <span>·</span>
                <span>Aprovação Imediata no Pix</span>
                <span>·</span>
                <span className="text-[#e6177a] font-bold">5 Bônus Exclusivos Inclusos</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Real Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={heroImg}
                  alt="Picolés gourmet artesanais com casquinha crocante de chocolate belga, pistache e morango cravejado"
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge overlays */}
                <div className="absolute top-3 left-3 bg-[#281520]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/20 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80]" />
                  <span>Feito com batedeira comum</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-[#281520] text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-[#f3d3e0] text-right">
                  <div className="text-[10px] text-[#866879] uppercase font-semibold">Custo Médio / Preço de Loja</div>
                  <div className="text-[#16a34a] font-extrabold text-sm tabular-nums">
                    R$ 2,30 <span className="text-[#a48a97] font-normal text-xs line-through">R$ 16,00</span>
                  </div>
                </div>
              </div>

              {/* Decorative mini proof card */}
              <div className="mt-4 bg-white/90 backdrop-blur-sm border border-[#f3d3e0] rounded-2xl p-4 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffe4ee] text-[#e6177a] flex items-center justify-center font-bold text-lg shrink-0">
                  ✨
                </div>
                <div className="text-left text-xs text-[#5f4855]">
                  <strong className="block text-sm text-[#281520] font-bold">Base Camaleão de 3 Ingredientes</strong>
                  Maciez de gelato italiano sem maquinário caro e sem cristalização.
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
