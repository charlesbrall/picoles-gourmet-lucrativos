import React, { useState } from 'react';
import { Calculator, TrendingUp, PiggyBank, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProfitCalculatorProps {
  onOpenCheckout: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ onOpenCheckout }) => {
  const [mode, setMode] = useState<'vender' | 'consumo'>('vender');
  
  // State for Sales Mode
  const [weeklyPopsicles, setWeeklyPopsicles] = useState<number>(35);
  const [salePrice, setSalePrice] = useState<number>(9.50);
  const [unitCost, setUnitCost] = useState<number>(2.30);

  // State for Family Consumption Mode
  const [monthlyFamilyPopsicles, setMonthlyFamilyPopsicles] = useState<number>(20);
  const [storePrice, setStorePrice] = useState<number>(16.00);

  // Sales Calculations
  const monthlyQuantity = weeklyPopsicles * 4;
  const unitProfit = salePrice - unitCost;
  const monthlyRevenue = monthlyQuantity * salePrice;
  const monthlyCost = monthlyQuantity * unitCost;
  const monthlyProfit = monthlyQuantity * unitProfit;
  const profitMarginPercent = Math.round((unitProfit / unitCost) * 100);

  // Consumption Calculations
  const storeTotal = monthlyFamilyPopsicles * storePrice;
  const homeTotal = monthlyFamilyPopsicles * 2.30;
  const monthlySavings = storeTotal - homeTotal;
  const annualSavings = monthlySavings * 12;

  return (
    <section id="calculadora" className="py-16 sm:py-20 bg-[#FFF5F8] border-b border-[#f3d3e0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e6177a] bg-[#ffe4ee] px-3 py-1 rounded-full">
            Simulador Financeiro Transparente
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#281520] tracking-tight">
            Comece <em className="not-italic text-[#e6177a]">pra você</em>. Cresça se quiser.
          </h2>
          <p className="text-base text-[#6f5663]">
            Você não precisa decidir agora. Aprenda a fazer para a sua família e veja a reação das pessoas. Quando provarem, os pedidos surgem naturalmente.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-white border border-[#f3d3e0] rounded-2xl shadow-xs mt-3">
            <button
              onClick={() => setMode('vender')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                mode === 'vender'
                  ? 'bg-[#e6177a] text-white shadow-sm'
                  : 'text-[#6f5663] hover:text-[#281520]'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Simular Renda Extra (Vendas)</span>
            </button>
            <button
              onClick={() => setMode('consumo')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                mode === 'consumo'
                  ? 'bg-[#e6177a] text-white shadow-sm'
                  : 'text-[#6f5663] hover:text-[#281520]'
              }`}
            >
              <PiggyBank className="w-4 h-4" />
              <span>Simular Economia em Casa</span>
            </button>
          </div>
        </div>

        {mode === 'vender' ? (
          /* Sales Mode Simulator */
          <div className="bg-white border border-[#f3d3e0] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Sliders Side */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-[#281520]">
                      Produção semanal estimada:
                    </label>
                    <span className="text-base font-extrabold text-[#e6177a] bg-[#FFF5F8] px-2.5 py-0.5 rounded-lg border border-[#f3d3e0] tabular-nums">
                      {weeklyPopsicles} picolés/semana
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={weeklyPopsicles}
                    onChange={(e) => setWeeklyPopsicles(Number(e.target.value))}
                    className="w-full accent-[#e6177a] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#8e7482] mt-1">
                    <span>10 un (hobby fim de semana)</span>
                    <span>70 un (encomendas e festas)</span>
                    <span>150 un (mini fábrica caseira)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-[#281520]">
                      Preço de venda por picolé:
                    </label>
                    <span className="text-base font-extrabold text-[#281520] bg-[#FFF5F8] px-2.5 py-0.5 rounded-lg border border-[#f3d3e0] tabular-nums">
                      R$ {salePrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="7.00"
                    max="15.00"
                    step="0.50"
                    value={salePrice}
                    onChange={(e) => setSalePrice(Number(e.target.value))}
                    className="w-full accent-[#e6177a] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#8e7482] mt-1">
                    <span>R$ 7,00 (preço popular)</span>
                    <span>R$ 9,50 (média recomendada)</span>
                    <span>R$ 15,00 (padrão boutique)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-[#281520]">
                      Custo médio por picolé (insumos + embalagem):
                    </label>
                    <span className="text-sm font-bold text-[#16a34a] bg-[#ecfdf5] px-2.5 py-0.5 rounded-lg border border-[#a7f3d0] tabular-nums">
                      R$ {unitCost.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.80"
                    max="3.20"
                    step="0.10"
                    value={unitCost}
                    onChange={(e) => setUnitCost(Number(e.target.value))}
                    className="w-full accent-[#16a34a] cursor-pointer"
                  />
                </div>

                <div className="bg-[#FFF5F8] p-4 rounded-2xl border border-[#f3d3e0] text-xs text-[#6f5663] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a] shrink-0 mt-0.5" />
                  <span>
                    Comprando com a <strong>Lista de Fornecedores do Bônus 2</strong>, o custo de embalagens e formas cai ainda mais, garantindo margens superiores a 300%.
                  </span>
                </div>
              </div>

              {/* Profit Display Side */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF5F8] to-[#FFE3EF] border border-[#f3d3e0] rounded-2xl p-6 text-center space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#e6177a] bg-white border border-[#f3d3e0] px-3 py-1 rounded-full">
                  Resultado Mensal Estimado
                </span>

                <div>
                  <div className="text-xs text-[#816574] font-medium">Lucro Líquido no seu bolso:</div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#e6177a] tabular-nums tracking-tight">
                    R$ {monthlyProfit.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="text-xs text-[#16a34a] font-bold mt-1">
                    +{profitMarginPercent}% de margem sobre o custo
                  </div>
                </div>

                <div className="border-t border-[#f3d3e0] pt-3 grid grid-cols-2 gap-2 text-left text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-[#f3d3e0]">
                    <span className="text-[#8e7482] block text-[10px]">Faturamento Bruto:</span>
                    <strong className="text-sm text-[#281520] tabular-nums">R$ {monthlyRevenue.toFixed(2).replace('.', ',')}</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#f3d3e0]">
                    <span className="text-[#8e7482] block text-[10px]">Custo Ingredientes:</span>
                    <strong className="text-sm text-[#8e7482] tabular-nums">R$ {monthlyCost.toFixed(2).replace('.', ',')}</strong>
                  </div>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full py-3 bg-[#e6177a] hover:bg-[#cb0c66] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Garantir Método & Planilha por R$ 9,90</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        ) : (
          /* Consumption Mode Simulator */
          <div className="bg-white border border-[#f3d3e0] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-[#281520]">
                      Picolés consumidos pela família no mês:
                    </label>
                    <span className="text-base font-extrabold text-[#e6177a] bg-[#FFF5F8] px-2.5 py-0.5 rounded-lg border border-[#f3d3e0] tabular-nums">
                      {monthlyFamilyPopsicles} picolés/mês
                    </span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="60"
                    step="4"
                    value={monthlyFamilyPopsicles}
                    onChange={(e) => setMonthlyFamilyPopsicles(Number(e.target.value))}
                    className="w-full accent-[#e6177a] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#8e7482] mt-1">
                    <span>8 un (fim de semana)</span>
                    <span>24 un (família com filhos)</span>
                    <span>60 un (festas e visitas)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-[#281520]">
                      Preço médio que você paga na loja/gelateria:
                    </label>
                    <span className="text-base font-extrabold text-[#281520] bg-[#FFF5F8] px-2.5 py-0.5 rounded-lg border border-[#f3d3e0] tabular-nums">
                      R$ {storePrice.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10.00"
                    max="22.00"
                    step="1.00"
                    value={storePrice}
                    onChange={(e) => setStorePrice(Number(e.target.value))}
                    className="w-full accent-[#e6177a] cursor-pointer"
                  />
                </div>

                <div className="bg-[#FFF5F8] p-4 rounded-2xl border border-[#f3d3e0] text-xs text-[#6f5663]">
                  Fazendo em casa com a nossa base, cada picolé custa em média apenas <strong>R$ 2,30</strong>, com ingredientes de primeiríssima qualidade que você mesmo escolhe.
                </div>
              </div>

              <div className="lg:col-span-5 bg-gradient-to-br from-[#FFF5F8] to-[#FFE3EF] border border-[#f3d3e0] rounded-2xl p-6 text-center space-y-4">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#16a34a] bg-white border border-[#f3d3e0] px-3 py-1 rounded-full">
                  Economia no Orçamento da Família
                </span>

                <div>
                  <div className="text-xs text-[#816574] font-medium">Você economiza todo mês:</div>
                  <div className="font-display font-black text-3xl sm:text-4xl text-[#16a34a] tabular-nums tracking-tight">
                    R$ {monthlySavings.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="text-xs text-[#523d49] mt-1">
                    São <strong>R$ {annualSavings.toFixed(2).replace('.', ',')}</strong> economizados em um ano!
                  </div>
                </div>

                <div className="border-t border-[#f3d3e0] pt-3 grid grid-cols-2 gap-2 text-left text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-[#f3d3e0]">
                    <span className="text-[#8e7482] block text-[10px]">Gastaria na Rua:</span>
                    <strong className="text-sm text-red-600 line-through tabular-nums">R$ {storeTotal.toFixed(2).replace('.', ',')}</strong>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#f3d3e0]">
                    <span className="text-[#8e7482] block text-[10px]">Gasta em Casa:</span>
                    <strong className="text-sm text-[#16a34a] tabular-nums">R$ {homeTotal.toFixed(2).replace('.', ',')}</strong>
                  </div>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full py-3 bg-[#e6177a] hover:bg-[#cb0c66] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Garantir Meu Acesso por R$ 9,90</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        <p className="text-[11px] sm:text-xs text-center text-[#957c8b] mt-4">
          * Vender picolés depende do seu empenho, escolha de ingredientes e mercado regional. Não fazemos promessas de ganho fácil, mas você recebe o método exato já testado e validado.
        </p>

      </div>
    </section>
  );
};
