import React from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import studentPhoto from '../assets/images/picole_aluna_resultado_1793665569292.jpg';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 bg-white border-b border-[#f3d3e0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#16a34a] bg-[#dcfce7] border border-[#bbf7d0] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Resultados Reais Comprovados</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Quem <em className="not-italic text-[#e6177a]">já colocou em prática</em> e aprovou
          </h2>
          <p className="text-base text-[#6f5663]">
            Veja fotos reais de produções feitas por alunas em cozinhas normais de casa, sem frescura e com muito sabor.
          </p>
        </div>

        {/* Featured Student Production Showcase */}
        <div className="bg-[#FFF5F8] border border-[#f3d3e0] rounded-3xl p-6 sm:p-8 shadow-sm mb-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6">
              <div className="rounded-2xl overflow-hidden border-2 border-white shadow-lg bg-white relative group">
                <img
                  src={studentPhoto}
                  alt="Produção real de picolés artesanais de aluna: Ninho com Nutella e Oreo sobre bancada de madeira"
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#281520]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/20">
                  📸 Foto enviada pela aluna Mariana (Curitiba/PR)
                </div>
              </div>
            </div>

            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-1 text-[#ffb800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#ffb800]" />
                ))}
                <span className="text-xs font-bold text-[#281520] ml-2">Nota 5.0 de 5.0</span>
              </div>

              <blockquote className="text-sm sm:text-base text-[#39212f] leading-relaxed italic">
                &ldquo;Fiz no sábado de manhã para o aniversário da minha afilhada. Fiz Ninho com Nutella e Oreo. Olhem a grossura dessa casquinha de chocolate crocante! As pessoas achavam que eu tinha comprado em doceria chique. Na mesma tarde fechei encomenda de 50 picolés para duas vizinhas.&rdquo;
              </blockquote>

              <div className="border-t border-[#f3d3e0] pt-3 flex items-center justify-between">
                <div>
                  <strong className="text-sm text-[#281520] block font-bold">Mariana Santos</strong>
                  <span className="text-xs text-[#7b5f6f]">Curitiba · PR · Aluna da Turma 1</span>
                </div>
                <div className="bg-[#ecfdf5] text-[#16a34a] text-xs font-bold px-2.5 py-1 rounded-full border border-[#a7f3d0] flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Compra Verificada</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.id}
              className="bg-[#FFF5F8] border border-[#f3d3e0] rounded-2xl p-5 sm:p-6 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#ffb800]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ffb800]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-[#16a34a] bg-white border border-[#bbf7d0] px-2 py-0.5 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#4d3240] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#f3d3e0] pt-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#e6177a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#281520]">{t.name}</h4>
                  <p className="text-[11px] text-[#785c6c]">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
