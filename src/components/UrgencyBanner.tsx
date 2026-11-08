import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

export const UrgencyBanner: React.FC = () => {
  // Countdown to end of day
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 38,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 4, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (n: number) => n.toString().padStart(2, '0');

  return (
    <aside aria-label="Aviso de oferta especial" className="bg-[#281520] text-white py-2.5 px-4 text-xs sm:text-sm font-medium border-b border-[#3d2031]">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <div className="flex items-center gap-1.5 text-[#ff8ac0] font-semibold">
          <Flame className="w-4 h-4 text-[#ff5fa8] shrink-0" />
          <span>Lançamento Promocional Oficial:</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span>De <s className="text-[#a48a97]">R$ 140,00</s> por apenas <strong className="text-white font-bold bg-[#e6177a] px-2 py-0.5 rounded text-xs tabular-nums">R$ 9,90</strong></span>
          <span className="text-[#6d5160] hidden sm:inline">·</span>
          <div className="flex items-center gap-1 text-[#ffd7a8] tabular-nums font-mono text-xs">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>Encerra em:</span>
            <span className="font-bold bg-white/10 px-1 py-0.5 rounded text-white">
              {format(timeLeft.hours)}h {format(timeLeft.minutes)}m {format(timeLeft.seconds)}s
            </span>
          </div>
        </div>

        <span className="text-[#cfb3c1] text-[11px] hidden lg:inline">
          Restam apenas 12 vagas nesta turma com acesso vitalício
        </span>
      </div>
    </aside>
  );
};
