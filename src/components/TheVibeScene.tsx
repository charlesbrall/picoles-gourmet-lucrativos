import React from 'react';
import { IceCream, Sparkles, AlertCircle, CheckCircle, HeartHandshake } from 'lucide-react';

export const TheVibeScene: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#f3d3e0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full">
            Desejo Real do Dia a Dia
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Sabe aquela <em className="not-italic text-[#e6177a]">vontade incontrolável</em> de um doce de verdade?
          </h2>
          <p className="text-base text-[#6f5663]">
            Você passa na vitrine de uma gelateria ou cafeteria fina, vê aquele picolé reluzente, com casquinha de chocolate quebrando e recheio cremoso transbordando…
          </p>
        </div>

        {/* Narrative Box with refined border */}
        <div className="bg-[#FFF5F8] border border-[#f3d3e0] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
          <div className="space-y-3 text-base sm:text-lg text-[#3f2432] leading-relaxed">
            <p>
              Você olha a plaquinha com o preço: <strong>R$ 16,00, R$ 18,00 ou até R$ 22,00</strong>. Aí vem aquele pensamento: <em>&ldquo;Poxa, é só um picolé…&rdquo;</em>. Às vezes você paga com dor no bolso; outras vezes, vai embora com vontade reprimida.
            </p>
            <p className="text-lg sm:text-xl font-bold text-[#e6177a] pt-1">
              E se o freezer da sua casa tivesse esses mesmos picolés de vitrine sempre à mão, prontos para qualquer momento?
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-[#f3d3e0]">
            <div className="bg-white p-4 rounded-2xl border border-[#f3d3e0]/80 space-y-1.5">
              <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>O que acontece nas receitas de internet</span>
              </div>
              <p className="text-xs sm:text-sm text-[#735967] leading-normal">
                Você tenta fazer receitas soltas do YouTube. Ficam duras que nem pedra de gelo, cheias de cristais d&apos;água, exigem panelas quentes, ovos crus perigosos e você gasta ingredientes caros à toa.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-[#cbeed9] space-y-1.5">
              <div className="flex items-center gap-2 text-[#16a34a] font-bold text-sm">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>O Método Picolé Gourmet em Casa</span>
              </div>
              <p className="text-xs sm:text-sm text-[#735967] leading-normal">
                Uma proporção científica simples de 3 ingredientes frios que emulsifica na batedeira comum em 5 minutos. Congela sem cristalizar, mantém a maciez de sorvete de shopping e custa menos de R$ 2,50 por unidade.
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#6f5663] text-center pt-2">
            Com a base certa nas mãos, você controla o açúcar, inventa combinações dos sonhos e surpreende qualquer visita sem passar a tarde inteira suando na beira de um fogão.
          </p>
        </div>

      </div>
    </section>
  );
};
