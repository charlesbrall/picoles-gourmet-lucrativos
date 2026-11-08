import React, { useState } from 'react';
import { FLAVORS, Flavor } from '../data/flavors';
import { Sparkles, Eye, Clock, DollarSign, Lightbulb, X, Check } from 'lucide-react';

interface FlavorExplorerProps {
  onOpenCheckout: () => void;
}

export const FlavorExplorer: React.FC<FlavorExplorerProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null);

  const filteredFlavors = activeCategory === 'todos' 
    ? FLAVORS 
    : FLAVORS.filter(f => f.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todos os Sabores (16)' },
    { id: 'mais-vendidos', label: 'Mais Vendidos' },
    { id: 'chocolatudos', label: 'Chocolatudos' },
    { id: 'frutados', label: 'Frutados Nobres' },
    { id: 'sofisticados', label: 'Linha Ouro & Sofisticados' },
  ];

  return (
    <section id="sabores" className="py-16 sm:py-20 bg-white border-b border-[#f3d3e0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full">
            Vitrine Completa de Criações
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Mais de <em className="not-italic text-[#e6177a]">15 sabores testados e aprovados</em>
          </h2>
          <p className="text-base text-[#6f5663]">
            Receitas balanceadas com medidas exatas em gramas e colheres. Clique em qualquer sabor para visualizar os detalhes, tempo de preparo e dicas da chef.
          </p>

          {/* Category Tabs (interactive controls) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#e6177a] text-white shadow-sm'
                    : 'bg-[#FFF5F8] text-[#6f5663] hover:bg-[#ffe4ee] hover:text-[#281520]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flavors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredFlavors.map((flavor) => (
            <div
              key={flavor.id}
              onClick={() => setSelectedFlavor(flavor)}
              className="bg-[#FFF5F8] border border-[#f3d3e0] hover:border-[#e6177a]/50 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-2xl p-2 rounded-xl bg-white border border-[#f3d3e0] shadow-2xs group-hover:scale-110 transition-transform">
                    {flavor.icon}
                  </span>
                  {flavor.badge && (
                    <span className="text-[10px] uppercase font-bold text-[#e6177a] bg-white border border-[#f3d3e0] px-2 py-0.5 rounded-full">
                      {flavor.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#281520] group-hover:text-[#e6177a] transition-colors">
                    {flavor.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6f5663] line-clamp-2 mt-1 leading-relaxed">
                    {flavor.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-[#f3d3e0] flex items-center justify-between text-xs">
                <div className="text-[#846777] font-medium">
                  Custo: <strong className="text-[#16a34a] tabular-nums font-bold">R$ {flavor.estimatedCost.toFixed(2).replace('.', ',')}</strong>
                  <span className="mx-1">·</span>
                  Venda: <strong className="text-[#281520] tabular-nums font-bold">R$ {flavor.suggestedPrice.toFixed(2).replace('.', ',')}</strong>
                </div>

                <span className="text-[#e6177a] font-bold inline-flex items-center gap-1 group-hover:underline">
                  Ver receita <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note below grid */}
        <div className="mt-8 text-center bg-[#FFF5F8] border border-[#f3d3e0] rounded-2xl p-4 max-w-xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-[#6f5663]">
            Além dos 16 sabores completos, a formação ensina a técnica mestra para você inventar novos sabores usando o que tem na geladeira.
          </p>
          <button
            onClick={onOpenCheckout}
            className="text-xs sm:text-sm font-bold text-[#e6177a] hover:underline cursor-pointer"
          >
            Quero ter acesso a todas as fichas técnicas por R$ 9,90 →
          </button>
        </div>

      </div>

      {/* Flavor Detail Modal */}
      {selectedFlavor && (
        <div className="fixed inset-0 z-50 bg-[#281520]/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#f3d3e0] relative animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedFlavor(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#FFF5F8] hover:bg-[#ffe4ee] text-[#281520] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl p-2.5 bg-[#FFF5F8] rounded-2xl border border-[#f3d3e0]">
                {selectedFlavor.icon}
              </span>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#e6177a]">
                  {selectedFlavor.categoryLabel}
                </span>
                <h3 className="font-display font-black text-xl text-[#281520]">
                  {selectedFlavor.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#5f4855] leading-relaxed mb-4">
              {selectedFlavor.description}
            </p>

            <div className="bg-[#FFF5F8] p-4 rounded-2xl border border-[#f3d3e0] space-y-2.5 mb-4 text-xs sm:text-sm">
              <div className="flex justify-between items-center">
                <span className="text-[#6f5663] font-medium">Acabamento & Casquinha:</span>
                <span className="font-semibold text-[#281520] text-right max-w-[240px]">{selectedFlavor.shell}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#f3d3e0] pt-2">
                <span className="text-[#6f5663] font-medium">Tempo de Preparo:</span>
                <span className="font-bold text-[#281520]">{selectedFlavor.prepTime}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#f3d3e0] pt-2">
                <span className="text-[#6f5663] font-medium">Dificuldade de Execução:</span>
                <span className="font-bold text-[#16a34a]">{selectedFlavor.difficulty}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#f3d3e0] pt-2">
                <span className="text-[#6f5663] font-medium">Custo Estimado por Unidade:</span>
                <span className="font-extrabold text-[#16a34a] tabular-nums">R$ {selectedFlavor.estimatedCost.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between items-center border-t border-[#f3d3e0] pt-2">
                <span className="text-[#6f5663] font-medium">Preço Sugerido de Venda:</span>
                <span className="font-extrabold text-[#e6177a] tabular-nums">R$ {selectedFlavor.suggestedPrice.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            {/* Secret Tip */}
            <div className="bg-[#fff9ea] border border-[#f3d578] rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-2 text-[#9a6700] font-bold text-xs uppercase mb-1">
                <Lightbulb className="w-4 h-4 shrink-0" />
                <span>Pulo do Gato da Chef</span>
              </div>
              <p className="text-xs text-[#6e4e08] leading-relaxed">
                {selectedFlavor.secretTip}
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => {
                  setSelectedFlavor(null);
                  onOpenCheckout();
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#ff5fa8] to-[#e6177a] hover:from-[#e6177a] hover:to-[#cb0c66] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Aprender Essa e Todas as Receitas por R$ 9,90</span>
              </button>
              <button
                onClick={() => setSelectedFlavor(null)}
                className="w-full py-2 text-xs text-[#7d6271] hover:text-[#281520] font-semibold cursor-pointer"
              >
                Voltar à vitrine de sabores
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
