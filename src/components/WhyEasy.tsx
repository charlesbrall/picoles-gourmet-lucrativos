import React from 'react';
import { Sparkles, Ban, Layers, Zap, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyEasy: React.FC = () => {
  const pillars = [
    {
      icon: Ban,
      title: 'Colocou na batedeira, começou: sem fogo',
      desc: 'Nada de panela quente, calda de açúcar fervendo ou medo de desandar o ponto. Em 5 minutos batendo na velocidade correta, a emulsão cremosa está montada e pronta para saborizar.'
    },
    {
      icon: ShieldCheck,
      title: '100% livre de ovos: segurança total',
      desc: 'Zero cheiro de ovo, zero gosto residual e zero risco de contaminação alimentar para crianças. Além disso, a ausência de ovos dá validade de até 90 dias intacto no freezer doméstico.'
    },
    {
      icon: Sparkles,
      title: 'Base neutra "Camaleão": dezenas de sabores',
      desc: 'Você aprende uma única base mestra e, ao acrescentar um saborizante (leite Ninho, pasta de pistache, morangos frescos, café ou cacau), você cria um picolé completamente novo e autoral.'
    },
    {
      icon: Zap,
      title: 'Casquinha mágica que cristaliza em 30 segundos',
      desc: 'O pulo do gato revelado: a mistura balanceada de chocolate nobre e gordura vegetal neutra que banha o picolé gelado e endurece no mesmo instante, dando aquele "crec" irresistível.'
    },
    {
      icon: Layers,
      title: 'Faça 6 para a família ou 100 para encomendas',
      desc: 'Flexibilidade absoluta de escala. Você pode preparar apenas meia dúzia de picolés para a sobremesa de sábado ou encher o freezer com dezenas de unidades para uma festa infantil ou festa da firma.'
    }
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-[#FFF5F8] border-b border-[#f3d3e0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full">
            Praticidade Absoluta
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Por que é <em className="not-italic text-[#e6177a]">tão simples e rápido</em> de fazer
          </h2>
          <p className="text-base text-[#6f5663]">
            Esqueça cursos complicados de confeitaria cheios de termos difíceis. O método foi desenhado para quem tem uma rotina corrida e quer resultados imediatos.
          </p>
        </div>

        <div className="space-y-3.5 max-w-3xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[#f3d3e0] hover:border-[#e6177a]/40 rounded-2xl p-5 sm:p-6 shadow-sm transition-all duration-200 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffe4ee] text-[#e6177a] flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#281520]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6f5663] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
