import React from 'react';
import chefImg from '../assets/images/chef_camila_portrait_1793665569514.jpg';
import { Award, Heart, CheckCircle2, ChefHat, Sparkles } from 'lucide-react';

export const StoryAndMethod: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Emulsão Fria em 5 Minutos',
      desc: 'Bata os 3 ingredientes básicos na batedeira comum. A aeração cria a textura cremosa de gelato italiano sem precisar de fogão ou ovos.'
    },
    {
      num: '02',
      title: 'Saborização & Recheio Trufado',
      desc: 'Acrescente a pasta ou saborizante escolhido (Ninho, pistache, frutas) e encaixe o bastonete de recheio (Nutella, doce de leite ou ganache).'
    },
    {
      num: '03',
      title: 'Descanso no Freezer de Casa',
      desc: 'Distribua nas forminhas de silicone com o palito de madeira e deixe no congelador convencional. Desenforma liso e sem despedaçar.'
    },
    {
      num: '04',
      title: 'Banho de Casquinha Crocante',
      desc: 'Mergulhe rapidamente no chocolate temperado com castanhas. Ao encostar no picolé congelado, ele cristaliza em 30 segundos com estalo sonoro.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#f3d3e0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* The 4-Step Method */}
        <div>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full">
              Passo a Passo Descomplicado
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
              O método dos <em className="not-italic text-[#e6177a]">4 passos</em> para o picolé perfeito
            </h2>
            <p className="text-base text-[#6f5663]">
              Não existe mágica nem segredo guardado a sete chaves: existe processo correto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div 
                key={s.num} 
                className="bg-[#FFF5F8] border border-[#f3d3e0] rounded-2xl p-5 relative space-y-2 hover:border-[#e6177a]/40 transition-colors"
              >
                <span className="font-display font-black text-3xl text-[#e6177a]/30 block tabular-nums">
                  {s.num}
                </span>
                <h3 className="font-display font-bold text-base text-[#281520]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#6f5663] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who Teaches You (Author Section) */}
        <div className="bg-[#FFF5F8] border border-[#f3d3e0] rounded-3xl p-6 sm:p-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img
                    src={chefImg}
                    alt="Chef Camila Rezende na cozinha preparando picolés gourmet"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-3 -right-2 bg-white border border-[#f3d3e0] px-3 py-1.5 rounded-xl shadow-md text-xs font-bold text-[#e6177a] flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-[#e6177a]" />
                  <span>Chef Especialista</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-center md:text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a]">
                  Quem vai te ensinar
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#281520] tracking-tight">
                  Camila Rezende
                </h3>
                <p className="text-xs sm:text-sm text-[#846877] font-medium">
                  Confeiteira, pesquisadora em gelateria artesanal e mãe de dois
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#4d3240] leading-relaxed">
                <p>
                  &ldquo;Comecei na cozinha do meu apartamento em 2021 querendo fazer picolés de verdade pros meus filhos, sem aquela montanha de conservantes e corantes artificiais dos picolés industriais. Nos primeiros meses, quebrei muito a cabeça: ou o picolé ficava duro feito bloco de gelo, ou o chocolate derretia na hora de banhar.&rdquo;
                </p>
                <p>
                  &ldquo;Depois de mais de 60 testes de temperatura e proporção, cheguei na fórmula da <strong>Base Camaleão de Emulsão Fria</strong>: 3 ingredientes simples que criam uma textura aveludada sem precisar de máquinas profissionais de R$ 15 mil. As mães da escola começaram a encomendar, cheguei a vender 4.800 unidades no primeiro verão e hoje empacotei esse método para que você tenha o resultado perfeito logo na sua primeira tentativa.&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-[#6f5663]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>+2.400 alunas capacitadas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>8 anos de testes em confeitaria</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
