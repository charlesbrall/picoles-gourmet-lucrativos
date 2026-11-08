import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/testimonials';
import { ChevronDown, HelpCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenCheckout: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenCheckout }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-[#FFF5F8] border-b border-[#f3d3e0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Ainda com alguma <em className="not-italic text-[#e6177a]">dúvida</em>?
          </h2>
          <p className="text-base text-[#6f5663]">
            Veja as respostas para as perguntas mais comuns de quem está começando hoje.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#f3d3e0] rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-[#281520] hover:text-[#e6177a] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#866879] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#e6177a]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5f4755] leading-relaxed border-t border-[#f3d3e0]/60 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA inside FAQ */}
        <div className="mt-12 text-center space-y-4">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-[#ff5fa8] via-[#e6177a] to-[#cb0c66] hover:brightness-105 active:scale-[0.98] text-white font-display font-black text-lg rounded-2xl shadow-[0_5px_0_#9a0a4c] transition-all cursor-pointer inline-flex flex-col items-center justify-center"
          >
            <span className="flex items-center gap-2">
              <span>QUERO COMEÇAR AGORA</span>
              <ArrowRight className="w-5 h-5" />
            </span>
            <small className="text-xs font-medium text-white/90">
              R$ 9,90 · Pagamento único · Acesso imediato
            </small>
          </button>

          <p className="text-xs text-[#846878]">
            Dúvidas específicas? Ao se inscrever você tem <strong>14 dias de suporte no WhatsApp</strong> direto com a nossa equipe.
          </p>
        </div>

      </div>
    </section>
  );
};
