import React from 'react';
import { PageType } from '../types';
import { HeroSection } from './HeroSection';
import { KeyFeatures } from './KeyFeatures';
import { QuickVisitBanner } from './QuickVisitBanner';
import { FaqSection } from './FaqSection';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MainPageProps {
  onNavigate: (page: PageType) => void;
  onOpenDiagnostic: () => void;
}

export const MainPage: React.FC<MainPageProps> = ({ onNavigate, onOpenDiagnostic }) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection 
        onOpenDiagnostic={onOpenDiagnostic}
        onOpenReception={() => onNavigate('reception-contact')}
      />

      {/* 2. Key Features (3 Major Survey Types) */}
      <KeyFeatures 
        onSelectService={(serviceId) => {
          onNavigate(serviceId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 3. Interactive Diagnostic Banner */}
      <section className="px-4 sm:px-8 py-5 max-w-6xl mx-auto">
        <div className="bg-emerald-50/70 border border-emerald-200/70 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-lg bg-[#008352] text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">
                어떤 측량이 필요한지 잘 모르시겠나요?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                간단한 3가지 상황 선택으로 내 토지에 꼭 맞는 측량 종목을 즉시 찾아드립니다.
              </p>
            </div>
          </div>
          <button
            id="btn-main-open-diagnostic"
            onClick={onOpenDiagnostic}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#008352] hover:bg-[#006e45] text-white font-semibold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 shrink-0 cursor-pointer"
          >
            <span>3초 맞춤 측량 진단하기</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. Process Workflow (4단계 절차) */}
      <section className="py-10 sm:py-14 px-4 sm:px-8 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-sm font-bold text-[#008352] mb-2 flex items-center justify-center gap-2">
              <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
              간편하고 투명한 처리 프로세스
            </h3>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] tracking-tight mt-1 mb-2">
              지적측량 신청부터 완료까지 4단계
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              LX 순천지사는 신청부터 현장측량, 성과도 발급까지 신속하고 정밀하게 원스톱으로 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: '신청 및 수수료 납부',
                desc: '온라인(바로처리센터) 또는 순천시청 접수창구(061-749-5530)에서 간편 접수',
              },
              {
                step: '02',
                title: '일정 협의 및 배정',
                desc: '담당 측량팀 배정 후 신청인과 현장 입회 일정을 유선으로 조율',
              },
              {
                step: '03',
                title: '현장 정밀 측량',
                desc: '국가기준점 기반 첨단 장비로 현장 실측 및 붉은색 경계점 표지 설치',
              },
              {
                step: '04',
                title: '성과도 발급 및 검사',
                desc: '측량 성과 검사 완료 후 지적측량성과도 교부 (우편/온라인/방문)',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl bg-[#f8faf9] border border-gray-100 relative group hover:border-[#008352]/40 transition-colors">
                <div className="text-xl font-bold text-[#008352] mb-2">{item.step}</div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick Visit Banner */}
      <QuickVisitBanner 
        onNavigateToContact={() => {
          onNavigate('reception-contact');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 6. FAQ Section (Accordion) */}
      <FaqSection />
    </div>
  );
};
