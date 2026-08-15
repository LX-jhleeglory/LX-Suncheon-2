import React from 'react';
import { Phone, Globe, ShieldCheck, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { LX_CONTACT_INFO } from '../data/surveyData';

interface HeroSectionProps {
  onOpenDiagnostic: () => void;
  onOpenReception: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDiagnostic, onOpenReception }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#008352] to-[#015e3c] text-white p-6 sm:p-10 md:p-12">
      {/* Background Dot Pattern Overlay from Professional Polish Design */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Institutional Pill Tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 text-emerald-100 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold mb-4 sm:mb-6 shadow-2xs backdrop-blur-xs">
          <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
          <span>공공기관 신뢰 보증 · LX 한국국토정보공사 순천지사</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4 max-w-3xl">
          내 땅의 정확한 기준,<br />
          <span className="text-white">완벽한 재산권 보호의 시작입니다.</span>
        </h1>

        {/* Subtext */}
        <p className="text-emerald-50 opacity-90 text-sm sm:text-lg mb-8 max-w-[560px] leading-relaxed">
          LX 한국국토정보공사 순천지사가 정확한 지적측량으로 안전한 토지 관리를 지원합니다.
        </p>

        {/* CTA Buttons - Professional Polish Style */}
        
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 w-full">
          <a
            id="hero-cta-online"
            href={LX_CONTACT_INFO.onlinePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 w-full bg-white text-[#008352] hover:bg-emerald-50 px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm sm:text-base shadow-sm transition-all active:scale-98 cursor-pointer"
          >
            <span>💻</span>
            <span>온라인 측량 접수</span>
          </a>

          <a
            id="hero-cta-phone-reception"
            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
            className="flex-1 w-full bg-emerald-900/40 border border-emerald-400/30 hover:bg-emerald-900/60 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm sm:text-base transition-all active:scale-98 cursor-pointer"
          >
            <span>📞</span>
            <span>접수창구 (061-749-5530)</span>
          </a>

          <a
            id="hero-cta-phone-branch"
            href={`tel:${LX_CONTACT_INFO.branchPhoneRaw}`}
            className="flex-1 w-full bg-emerald-900/40 border border-emerald-400/30 hover:bg-emerald-900/60 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm sm:text-base transition-all active:scale-98 cursor-pointer"
          > 
            <span>📞</span>
            <span>순천지사 직통 ({LX_CONTACT_INFO.branchPhone})</span>
          </a>
        </div>

        {/* Diagnostic Finder Hook */}
        <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-100">
          <div className="flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
            <span>어떤 측량이 필요한지 고민되시나요?</span>
          </div>
          <button
            id="btn-hero-diagnostic"
            onClick={onOpenDiagnostic}
            className="inline-flex items-center gap-1.5 text-white bg-white/20 hover:bg-white/30 px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer active:scale-98"
          >
            <HelpCircle className="w-3.5 h-3.5 text-emerald-200" />
            <span>3초 맞춤 측량 진단하기</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
