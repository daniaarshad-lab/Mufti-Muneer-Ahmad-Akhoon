import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemData {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenId,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-[12px] border border-[#E5E0D6] bg-[#FFFFFF] transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-[#BFA36F]/40 rounded-[12px]"
            >
              <div className="pr-4">
                <span className="font-serif text-base sm:text-lg text-[#2E2E2E] font-medium block">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="text-xs text-[#7A7F6A] mt-0.5 block">
                    {item.subtitle}
                  </span>
                )}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#7A7F6A] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'transform rotate-180' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#2E2E2E]/90 leading-relaxed border-t border-[#E5E0D6]/60 mt-1">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
