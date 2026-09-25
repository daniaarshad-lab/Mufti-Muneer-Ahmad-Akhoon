import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { PRAYER_TIMES } from '../data/schedule';

interface PrayerTimesWidgetProps {
  className?: string;
  variant?: 'card' | 'banner';
}

export const PrayerTimesWidget: React.FC<PrayerTimesWidgetProps> = ({
  className = '',
  variant = 'card',
}) => {
  return (
    <div
      className={`rounded-[12px] border border-[#E5E0D6] bg-[#FFFFFF] p-5 sm:p-6 shadow-xs ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E5E0D6] gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#7A7F6A] font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#BFA36F]" />
            <span>Daily Congregational Schedule</span>
          </div>
          <h3 className="font-serif text-lg text-[#2E2E2E] mt-0.5">
            Westchester Muslim Center
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-[#7A7F6A]">
          <MapPin className="w-3.5 h-3.5 shrink-0 text-[#BFA36F]" />
          <span>Mount Vernon, NY</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {PRAYER_TIMES.map((prayer) => {
          const isNext = prayer.isNext;
          return (
            <div
              key={prayer.name}
              className={`rounded-[8px] p-3 text-center transition-all border ${
                isNext
                  ? 'bg-[#D8C3A5]/25 border-[#BFA36F] text-[#2E2E2E] shadow-xs'
                  : 'bg-[#FAF8F5] border-[#E5E0D6] text-[#2E2E2E]'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="text-xs font-semibold text-[#2E2E2E]">
                  {prayer.name}
                </span>
                {prayer.arabicName && (
                  <span className="text-[11px] text-[#7A7F6A] font-serif">
                    {prayer.arabicName}
                  </span>
                )}
              </div>

              <div className="text-xs text-[#7A7F6A]">
                Athan: <span className="font-medium text-[#2E2E2E]">{prayer.athan}</span>
              </div>

              {prayer.iqamah !== '-' ? (
                <div className="text-xs mt-0.5">
                  <span className="text-[11px] text-[#7A7F6A]">Iqamah: </span>
                  <span className="font-semibold text-[#2E2E2E]">
                    {prayer.iqamah}
                  </span>
                </div>
              ) : (
                <div className="text-[11px] text-[#7A7F6A] mt-0.5 italic">
                  Sun rises
                </div>
              )}

              {isNext && (
                <span className="inline-block mt-1 text-[10px] uppercase tracking-wider font-bold text-[#BFA36F]">
                  Next Prayer
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-[#E5E0D6] flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#7A7F6A] gap-2">
        <p>
          <strong className="text-[#2E2E2E]">Friday Jumuah:</strong> First Khutbah 1:15 PM | Second Congregation 2:15 PM
        </p>
        <span className="text-[11px] text-[#7A7F6A] font-medium">
          Led by Mufti Muneer Ahmad Akhoon & Resident Imams
        </span>
      </div>
    </div>
  );
};
