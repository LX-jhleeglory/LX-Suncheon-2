import React from 'react';
import { MapPin, Car, Clock, ChevronRight, Navigation } from 'lucide-react';
import { LX_CONTACT_INFO } from '../data/surveyData';

interface QuickVisitBannerProps {
  onNavigateToContact: () => void;
}

export const QuickVisitBanner: React.FC<QuickVisitBannerProps> = ({ onNavigateToContact }) => {
  return (
    <section className="px-4 sm:px-8 py-6 max-w-6xl mx-auto">
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-2xs">
        <div className="p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            {/* Header with pill indicator */}
            <h3 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
              <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
              오시는 길 & 사옥 방문 안내
            </h3>

            {/* Headline */}
            <h4 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight">
              LX 한국국토정보공사 순천지사
            </h4>

            {/* Address, parking & Hours */}
            <div className="space-y-1.5 text-xs sm:text-sm text-gray-600">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#008352] shrink-0" />
                <span className="font-medium text-gray-900">{LX_CONTACT_INFO.addressRoad} (조례동)</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>{LX_CONTACT_INFO.operatingHours} | 주말·공휴일 휴무</span>
              </p>
              <p className="flex items-center gap-2 text-emerald-800 font-semibold text-xs">
                <Car className="w-4 h-4 text-[#008352] shrink-0" />
                <span>사옥 내 민원인 전용 무료 주차장 완비 (지상 주차 공간 제공)</span>
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto shrink-0">
            <button
              id="btn-banner-visit-detail"
              onClick={onNavigateToContact}
              className="inline-flex items-center justify-center gap-2 bg-[#008352] hover:bg-[#006e45] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-2xs active:scale-98 cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>오시는 길 & 지도 상세 보기</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
