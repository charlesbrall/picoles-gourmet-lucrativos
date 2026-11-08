/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import chefImg from './assets/images/chef_camila_portrait_1793665569514.jpg';
import strawberryImg from './assets/images/picole_morango_cravejado_1793665570139.jpg';
import { CheckoutModal } from './components/CheckoutModal';
import { Play, Sparkles, X } from 'lucide-react';

// Feedback images
const feedback1 = '/assets/aistudio/Gemini_Generated_Image_sakp0msakp0msakp_02d11da0.jpg';
const feedback2 = '/assets/aistudio/Gemini_Generated_Image_khpx83khpx83khpx_4ac537d8.jpg';
const feedback3 = '/assets/aistudio/Gemini_Generated_Image_a15huda15huda15h_3a94f321.jpg';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('premium');
  const [activeFeedbackModal, setActiveFeedbackModal] = useState<string | null>(null);

  const openCheckout = (plan: 'basic' | 'premium' = 'premium', e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setSelectedPlan(plan);
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'InitiateCheckout', {
          value: plan === 'premium' ? 27.90 : 9.90,
          currency: 'BRL',
          content_name: plan === 'premium' ? 'Combo Premium - Sabor de Gelo' : 'Apostila Básica - Sabor de Gelo',
        });
      } catch (_) {}
    }
    setIsCheckoutOpen(true);
  };

  const scrollToPlans = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const elem = document.getElementById('planos');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--tx)] font-sans antialiased selection:bg-[var(--pri)] selection:text-white">
      
      {/* Top Banner */}
      <div className="top-bar">
        🍦 Oferta de lançamento: acesso imediato à apostila completa
      </div>

      {/* Hero Section */}
      <header className="hero-section w">
        <span className="tag-pill">NOVA TENDÊNCIA DA CONFEITARIA</span>
        <h1 className="template-h1">
          Aprenda a fazer <u>picolés gourmet</u> e comece a vender direto da sua cozinha
        </h1>
        <p className="sub-text">
          Receitas passo a passo, com ingredientes do dia a dia, para você montar sua linha própria e vender por delivery, retirada ou encomenda.
        </p>

        {/* Video Container */}
        <div className="vid-container relative">
          <iframe
            className="sproutvideo-player"
            src="https://videos.sproutvideo.com/embed/7299d9b71a18e5c0f8/707884f0a3d5068f?playerColor=eb8dd0&playerTheme=light"
            width="640"
            height="800"
            frameBorder="0"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Video Player"
            style={{ width: '100%', maxWidth: '640px', height: 'auto', aspectRatio: '640/800', borderRadius: '20px', boxShadow: '0 18px 40px rgba(224,48,95,.22)', margin: '0 auto', display: 'block' }}
          />
        </div>

        <button 
          onClick={scrollToPlans}
          className="template-btn"
        >
          QUERO COMEÇAR AGORA 🍓
        </button>
        <p className="note-text">📜 Certificado incluso · 🛡️ Garantia de 7 dias</p>
      </header>

      {/* Por que vender picolé gourmet? */}
      <section className="w">
        <h2 className="template-h2">Por que vender picolé gourmet?</h2>
        <div className="grid-cards">
          <div className="card-box">
            <h3>🔥 Alta procura</h3>
            <p>Refrescante e “instagramável”, vende muito em dias quentes e o ano todo com sabores diferentes.</p>
          </div>
          <div className="card-box">
            <h3>💸 Custo baixo</h3>
            <p>Ingredientes simples e acessíveis, o que permite boa margem por unidade.</p>
          </div>
          <div className="card-box">
            <h3>🧁 Fácil de fazer</h3>
            <p>Com uma única base você cria vários sabores, recheios e coberturas.</p>
          </div>
        </div>
      </section>

      {/* Veja a apostila por dentro */}
      <section className="w">
        <h2 className="template-h2">Veja a apostila por dentro</h2>
        <p className="sub-text text-center mb-6">Tudo organizado em módulos na área de membros:</p>
        
        <div className="space-y-3.5">
          <div className="mod-row">
            <div className="ph-box bg-[#fff0f4] flex-col p-4">
              <span className="text-2xl mb-1">📋</span>
              <strong className="text-[var(--pri)] text-xs uppercase tracking-wider">[ MÓDULO 1: ÁREA DE MEMBROS ]</strong>
              <span className="text-xs text-[var(--mut)] mt-1">Guia de utensílios, formas & insumos essenciais</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--tx)] mb-1">1. Início da produção</h3>
              <p className="text-[var(--mut)] text-sm">Utensílios, organização do espaço, armazenamento e ingredientes.</p>
            </div>
          </div>

          <div className="mod-row">
            <div className="ph-box overflow-hidden relative p-0 border-solid border-[var(--bd)] group">
              <img 
                src={strawberryImg} 
                alt="Picolé sendo banhado no chocolate nobre" 
                className="w-full h-full min-h-[150px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2 text-center text-white text-xs font-bold">
                🍫 Casquinha Crocante Cristalizada
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--tx)] mb-1">2. Chocolates e coberturas</h3>
              <p className="text-[var(--mut)] text-sm">Como banhar, temperar o chocolate e deixar o picolé com cara de profissional.</p>
            </div>
          </div>

          <div className="mod-row">
            <div className="ph-box bg-[#fffdf5] flex-col p-4">
              <span className="text-2xl mb-1">🍦</span>
              <strong className="text-[#b45309] text-xs uppercase tracking-wider">[ BASES ULTRA CREMOSAS ]</strong>
              <span className="text-xs text-[var(--mut)] mt-1">Base branca neutra, base chocolate e ponto perfeito</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--tx)] mb-1">3. Bases e recheios</h3>
              <p className="text-[var(--mut)] text-sm">Base cremosa, base de chocolate e variações recheadas para ampliar seu cardápio.</p>
            </div>
          </div>

          <div className="mod-row">
            <div className="ph-box bg-[#fff5f5] flex-col p-4">
              <span className="text-2xl mb-1">🍓</span>
              <strong className="text-[#e11d48] text-xs uppercase tracking-wider">[ CALDAS & REDUÇÕES ARTESANAIS ]</strong>
              <span className="text-xs text-[var(--mut)] mt-1">Frutas vermelhas, toffee, caramelo salgado e praliné</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--tx)] mb-1">4. Reduções, cremes e caldas</h3>
              <p className="text-[var(--mut)] text-sm">Maracujá, frutas vermelhas, abacaxi, caramelo salgado, praliné e mais.</p>
            </div>
          </div>

          <div className="mod-row">
            <div className="ph-box bg-[#f0fdf4] flex-col p-4">
              <span className="text-2xl mb-1">📊</span>
              <strong className="text-[#16a34a] text-xs uppercase tracking-wider">[ PLANILHA DE PRECIFICAÇÃO ]</strong>
              <span className="text-xs text-[var(--mut)] mt-1">Margem de lucro, custo unitário e tabela pronta</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--tx)] mb-1">5. Precificação</h3>
              <p className="text-[var(--mut)] text-sm">Calcule custo, defina o preço de venda e saiba quanto sobra em cada picolé.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sabores que você vai aprender */}
      <section className="w">
        <h2 className="template-h2">Sabores que você vai aprender</h2>
        <div className="grid-cards">
          <div className="ph-box flex-col justify-center gap-1.5 p-4 hover:border-[var(--pri)] transition-colors">
            <span className="text-2xl">🍫</span>
            <strong className="text-[var(--tx)] font-extrabold text-sm">Ninho com Nutella</strong>
            <span className="text-xs text-[var(--mut)]">Recheio generoso cremoso</span>
          </div>
          
          <div className="ph-box flex-col justify-center gap-1.5 p-4 hover:border-[var(--pri)] transition-colors">
            <span className="text-2xl">🍪</span>
            <strong className="text-[var(--tx)] font-extrabold text-sm">Oreo com Nutella</strong>
            <span className="text-xs text-[var(--mut)]">Biscoito crocante & calda</span>
          </div>

          <div className="ph-box flex-col justify-center gap-1.5 p-4 hover:border-[var(--pri)] transition-colors">
            <span className="text-2xl">🌰</span>
            <strong className="text-[var(--tx)] font-extrabold text-sm">Pistache com Frutas Vermelhas</strong>
            <span className="text-xs text-[var(--mut)]">Sofisticação e sabor nobre</span>
          </div>

          <div className="ph-box flex-col justify-center gap-1.5 p-4 hover:border-[var(--pri)] transition-colors">
            <span className="text-2xl">🍰</span>
            <strong className="text-[var(--tx)] font-extrabold text-sm">Cheesecake</strong>
            <span className="text-xs text-[var(--mut)]">Base queijo & calda artesanal</span>
          </div>

          <div className="ph-box flex-col justify-center gap-1.5 p-4 hover:border-[var(--pri)] transition-colors">
            <span className="text-2xl">🍍</span>
            <strong className="text-[var(--tx)] font-extrabold text-sm">Abacaxi com Coco</strong>
            <span className="text-xs text-[var(--mut)]">Cremosidade e frescor tropical</span>
          </div>

          <div className="ph-box flex-col justify-center gap-1.5 p-4 hover:border-[var(--pri)] transition-colors">
            <span className="text-2xl">🍮</span>
            <strong className="text-[var(--tx)] font-extrabold text-sm">Pudim</strong>
            <span className="text-xs text-[var(--mut)]">Com calda dourada de caramelo</span>
          </div>
        </div>
        <p className="note-text">Troque os espaços acima pelas fotos das SUAS receitas.</p>
      </section>

      {/* Para quem é? */}
      <section className="w">
        <h2 className="template-h2">Para quem é?</h2>
        <div className="card-box">
          <ul className="ck-list">
            <li>Quer uma renda extra trabalhando em casa;</li>
            <li>Tem filhos pequenos e quer ficar perto da família;</li>
            <li>Quer ser sua própria chefe e definir seus horários;</li>
            <li>Quer começar sem ponto fixo e sem funcionários;</li>
            <li>Quer criar uma marca de confeitaria com delivery e retirada.</li>
          </ul>
        </div>
      </section>

      {/* Bônus inclusos */}
      <section className="w">
        <h2 className="template-h2">Bônus inclusos</h2>
        <div className="card-box">
          <ul className="ck-list">
            <li>E-book picolés zero açúcar e zero lactose</li>
            <li>E-book picolés juninos (milho verde, paçoca, Romeu e Julieta…)</li>
            <li>E-book 15 receitas de picolés à base de água</li>
            <li>Reduções, cremes, caramelo salgado e praliné</li>
            <li>Atualizações com receitas novas</li>
          </ul>
        </div>
      </section>

      {/* Escolha seu plano */}
      <section className="w" id="planos">
        <h2 className="template-h2">Escolha seu plano</h2>
        <div className="plans-grid">
          
          {/* Combo Premium */}
          <div className="plan-card hot-plan">
            <span className="badge-tag">⭐ MAIS ESCOLHIDO</span>
            <h3>Combo Premium</h3>
            <div className="old-price">de R$ 67,00</div>
            <div className="price-text">R$ 27,90</div>
            <p className="note-text m-0">pagamento único</p>
            <ul className="ck-list">
              <li>Apostila completa “Picolés Gourmet”</li>
              <li>Todos os bônus (zero açúcar, juninos, picolés de água)</li>
              <li>Apostila de geladinhos gourmet</li>
              <li>Apostila de pudins e caldas premium</li>
              <li>Curso em vídeo de iogurtes caseiros</li>
              <li>Suporte pela área do aluno</li>
              <li>Certificado</li>
              <li>Acesso vitalício</li>
            </ul>
            <button 
              onClick={(e) => openCheckout('premium', e)}
              className="template-btn"
            >
              QUERO O COMBO PREMIUM
            </button>
          </div>

          {/* Apostila Básica */}
          <div className="plan-card">
            <h3>Apostila Básica</h3>
            <div className="old-price">de R$ 27,00</div>
            <div className="price-text">R$ 9,90</div>
            <p className="note-text m-0">pagamento único</p>
            <ul className="ck-list no-items">
              <li style={{ paddingLeft: 0 }}>&nbsp;</li>
            </ul>
            <ul className="ck-list">
              <li>Apostila completa “Picolés Gourmet”</li>
              <li>Bônus de bases e reduções</li>
              <li>Acesso por 1 ano</li>
              <li>Certificado</li>
            </ul>
            <button 
              onClick={(e) => openCheckout('basic', e)}
              className="template-btn"
              style={{ background: 'var(--tx)', boxShadow: '0 4px 0 var(--mut)' }}
            >
              QUERO A APOSTILA BÁSICA
            </button>
          </div>

        </div>
        <p className="note-text">🔧 Pagamento seguro via Pix ou Cartão com liberação imediata da área de membros.</p>
      </section>

      {/* Garantia */}
      <section className="w">
        <div className="gar-box">
          <h2 className="template-h2 text-[var(--ok)] mb-2">🛡️ Garantia incondicional de 7 dias</h2>
          <p className="text-[var(--mut)] max-w-lg mx-auto">
            Teste a apostila, leia, faça as receitas. Se achar que não valeu a pena, é só pedir e devolvemos 100% do valor, sem burocracia.
          </p>
        </div>
      </section>

      {/* Quem somos */}
      <section className="w">
        <h2 className="template-h2">Quem somos</h2>
        <div className="card-box">
          <div className="who-grid">
            <img 
              src={chefImg} 
              alt="Chef Camila - Sabor de Gelo" 
              className="who-img shadow-xs"
            />
            <p className="text-sm leading-relaxed m-0 text-[var(--mut)]">
              <b className="text-[var(--tx)]">Sabor de Gelo</b> nasceu da paixão por confeitaria artesanal. Aqui você encontra receitas testadas, explicadas de forma simples, para transformar a cozinha de casa em fonte de renda.
            </p>
          </div>
        </div>
      </section>

      {/* Alunas em produção */}
      <section className="w">
        <h2 className="template-h2">Alunas em produção</h2>
        <div className="grid-cards">
          
          <div 
            onClick={() => setActiveFeedbackModal(feedback1)}
            className="card-box p-2 cursor-pointer hover:border-[var(--pri)] transition-all flex flex-col items-center group"
          >
            <div className="w-full aspect-[9/16] max-h-[320px] rounded-lg overflow-hidden bg-black/5 flex items-center justify-center relative">
              <img 
                src={feedback1} 
                alt="Depoimento Aluna 1" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" 
              />
              <span className="absolute bottom-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                🔍 Ver ampliado
              </span>
            </div>
            <p className="text-xs text-center font-bold text-[var(--pri)] mt-2">
              WhatsApp da Aluna
            </p>
          </div>

          <div 
            onClick={() => setActiveFeedbackModal(feedback2)}
            className="card-box p-2 cursor-pointer hover:border-[var(--pri)] transition-all flex flex-col items-center group"
          >
            <div className="w-full aspect-[9/16] max-h-[320px] rounded-lg overflow-hidden bg-black/5 flex items-center justify-center relative">
              <img 
                src={feedback2} 
                alt="Depoimento Aluna 2" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" 
              />
              <span className="absolute bottom-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                🔍 Ver ampliado
              </span>
            </div>
            <p className="text-xs text-center font-bold text-[var(--pri)] mt-2">
              Casquinha Perfeita
            </p>
          </div>

          <div 
            onClick={() => setActiveFeedbackModal(feedback3)}
            className="card-box p-2 cursor-pointer hover:border-[var(--pri)] transition-all flex flex-col items-center group"
          >
            <div className="w-full aspect-[9/16] max-h-[320px] rounded-lg overflow-hidden bg-black/5 flex items-center justify-center relative">
              <img 
                src={feedback3} 
                alt="Depoimento Aluna 3" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform" 
              />
              <span className="absolute bottom-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                🔍 Ver ampliado
              </span>
            </div>
            <p className="text-xs text-center font-bold text-[var(--pri)] mt-2">
              Post no Instagram
            </p>
          </div>

        </div>
        <p className="note-text">Use apenas depoimentos reais, com autorização. Peça para alunas-teste experimentarem as receitas antes de publicar.</p>
      </section>

      {/* Perguntas frequentes */}
      <section className="w">
        <h2 className="template-h2">Perguntas frequentes</h2>
        
        <details className="faq-item">
          <summary>Como acesso o material?</summary>
          <p>Logo após a confirmação do pagamento você recebe o acesso à área de membros por e-mail.</p>
        </details>

        <details className="faq-item">
          <summary>Quais as formas de pagamento?</summary>
          <p>Pix e cartão de crédito, conforme o checkout.</p>
        </details>

        <details className="faq-item">
          <summary>Por quanto tempo tenho acesso?</summary>
          <p>Apostila Básica: 1 ano. Combo Premium: vitalício.</p>
        </details>

        <details className="faq-item">
          <summary>Preciso de equipamentos caros?</summary>
          <p>Não. As receitas usam utensílios e ingredientes comuns de cozinha, além de formas de picolé.</p>
        </details>

        <details className="faq-item">
          <summary>Tenho garantia?</summary>
          <p>Sim, 7 dias com devolução de 100% do valor.</p>
        </details>

        <details className="faq-item">
          <summary>Terei suporte?</summary>
          <p>Sim, pela área do aluno.</p>
        </details>

        <button 
          onClick={scrollToPlans}
          className="template-btn"
        >
          GARANTIR MEU ACESSO
        </button>
      </section>

      {/* Footer */}
      <footer className="template-footer">
        Política de Privacidade · Termos de Uso<br />
        © 2026 Sabor de Gelo · Todos os direitos reservados<br /><br />
        Os resultados dependem de dedicação, região e estratégia de vendas. Não há garantia de ganhos.
      </footer>

      {/* Lightbox Modal for Testimonial Images */}
      {activeFeedbackModal && (
        <div 
          onClick={() => setActiveFeedbackModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-sm w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
          >
            <button 
              onClick={() => setActiveFeedbackModal(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={activeFeedbackModal} 
              alt="Feedback da aluna ampliado" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialPlan={selectedPlan}
      />

    </div>
  );
}
