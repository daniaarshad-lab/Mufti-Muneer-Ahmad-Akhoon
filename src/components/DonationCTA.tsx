import React from 'react';
import { Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface DonationCTAProps {
  className?: string;
  variant?: 'light' | 'primary';
  compact?: boolean;
}

export const DonationCTA: React.FC<DonationCTAProps> = ({
  className = '',
  variant = 'light',
  compact = false,
}) => {
  const isPrimary = variant === 'primary';

  return (
    <div
      className={`rounded-[16px] border ${
        isPrimary
          ? 'bg-[#EFECE5] border-[#D8C3A5] text-[#2E2E2E] shadow-sm'
          : 'bg-[#FFFFFF] border-[#E5E0D6] text-[#2E2E2E] shadow-xs'
      } p-6 sm:p-8 ${className}`}
    >
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-4 h-4 text-[#BFA36F]" />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#7A7F6A]">
            Support Sacred Education & Community Service
          </span>
        </div>

        <h3
          className="font-serif text-xl sm:text-2xl font-medium mb-3 text-[#2E2E2E]"
        >
          Invest in Preserving Islamic Knowledge for Generations
        </h3>

        <p
          className="text-sm sm:text-base leading-relaxed mb-6 text-[#5A5D54]"
        >
          Contributions directly sustain students of the Alimiyyah curriculum and Hifz at Jamia Zakariyya New York, support community welfare at Al-Muneer Foundation, and keep educational broadcasts on RahamTV accessible worldwide. Zakat and Sadaqah funds are maintained under strict separate accounts.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            to="/get-involved/donate"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            Make a Tax-Deductible Donation
          </Button>

          <Button
            to="/get-involved"
            variant="outline"
            size="md"
          >
            Ways to Support & Sponsor
          </Button>

          <div
            className="flex items-center gap-1.5 text-xs text-[#7A7F6A] ml-auto mt-2 sm:mt-0"
          >
            <ShieldCheck className="w-4 h-4 text-[#BFA36F]" />
            <span>501(c)(3) Eligible via Al-Muneer Foundation</span>
          </div>
        </div>
      </div>
    </div>
  );
};
