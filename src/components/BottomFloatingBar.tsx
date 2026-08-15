import React from 'react';
import { LX_CONTACT_INFO } from '../data/surveyData';

export const BottomFloatingBar: React.FC = () => {
  return (
    <aside aria-label="고정 문의 및 온라인 접수" className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 shadow-[0_-2px_12px_rgba(0,0,0,0.06)] py-2 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center gap-2 sm:gap-4 h-[58px] sm:h-[64px]">
        {/* Left: Phone Inquiry */}
        <a
          id="floating-btn-phone"
          href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
          className="flex-1 h-full flex items-center justify-center bg-[#008352] hover:bg-[#006e45] text-white rounded-lg gap-2.5 sm:gap-3 px-3 transition-colors active:scale-[0.99] cursor-pointer shadow-2xs"
        >
          <span className="text-lg sm:text-xl">📞</span>
          <div className="flex flex-col text-left leading-tight overflow-hidden">
            <span className="text-[10px] text-emerald-100 opacity-90 truncate font-medium">측량접수/인허가 문의 (순천시청)</span>
            <span className="text-xs sm:text-sm font-bold tracking-tight">061-749-5530</span>
          </div>
        </a>

        {/* Right: Online Reception */}
        <a
          id="floating-btn-online"
          href={LX_CONTACT_INFO.onlinePortalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-full flex items-center justify-center bg-[#68bb59] hover:bg-[#5aa84c] text-white rounded-lg gap-2.5 sm:gap-3 px-3 transition-colors active:scale-[0.99] cursor-pointer shadow-2xs"
        >
          <span className="text-lg sm:text-xl">💻</span>
          <div className="flex flex-col text-left leading-tight overflow-hidden">
            <span className="text-[10px] text-emerald-50 opacity-90 truncate font-medium">간편 온라인 접수 (24H)</span>
            <span className="text-xs sm:text-sm font-bold tracking-tight">지적측량바로처리센터</span>
          </div>
        </a>
      </div>
    </aside>
  );
};
