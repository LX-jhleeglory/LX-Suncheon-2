import React from 'react';
import { SURVEY_SERVICES, LX_CONTACT_INFO } from '../data/surveyData';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Phone, 
  Globe, 
  Clock,
  Layers
} from 'lucide-react';
import { PageType } from '../types';

interface PageProps {
  onNavigate: (page: PageType) => void;
}

export const CadastralStatusPage: React.FC<PageProps> = ({ onNavigate }) => {
  const service = SURVEY_SERVICES['cadastral-status'];

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <button onClick={() => onNavigate('main')} className="hover:text-[#008352] cursor-pointer">홈</button>
        <span>&gt;</span>
        <span className="text-[#008352] font-bold">지적현황측량</span>
      </nav>

      {/* Hero Header Box */}
      <div className="bg-[#008352] text-white rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xs">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/20 text-white px-2.5 py-0.5 rounded-full text-xs font-bold border border-white/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>건축물 현황을 확인할 때</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            현재 위치 그대로,<br className="hidden xs:inline" />
            도면 위에 명확히 기록합니다.
          </h1>

          <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed max-w-2xl">
            지상 구조물(건축물, 담장, 옹벽, 시설물 등)이나 지형지물의 위치 점유 현황을 지적도와 정밀 대비하여, 
            건축물 사용승인(준공) 및 침범 여부를 객관적으로 입증합니다.
          </p>

          {/* Phone Call CTA in Header */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <a
              id="cta-status-phone"
              href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#008352] hover:bg-emerald-50 font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#008352]" />
              <span>접수창구 직통 연결 (061-749-5530)</span>
            </a>

            <a
              id="cta-status-online"
              href={LX_CONTACT_INFO.onlinePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#68bb59] hover:bg-[#5aa84c] text-white font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>온라인 바로처리센터 접수</span>
            </a>
          </div>
        </div>
      </div>

      {/* What is this survey? (어떤 측량인가요?) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            지적현황측량이란?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          {service.summary}
        </p>
      </section>

      {/* Target Cases (주요 신청 대상) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            주요 신청 대상
          </h2>
          <p className="text-xs text-gray-500 mt-1">건축 준공 및 현황 확인 시 필수</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.targetCases.map((target, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-[#f8faf9] border border-gray-100 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-md bg-emerald-50 text-[#008352] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                {idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-gray-800 font-medium leading-snug">{target}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Expected Effects (기대 효과) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            기대 효과 및 활용
          </h2>
          <p className="text-xs text-gray-500 mt-1">지자체 인허가 및 공인 증빙</p>
        </div>

        <div className="space-y-2.5">
          {service.expectedEffects.map((effect, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200/70 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#008352] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">{effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps (처리 절차) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            측량 처리 절차
          </h2>
          <p className="text-xs text-gray-500 mt-1">4단계 정밀 프로세스</p>
        </div>

        {/* Process Diagram */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2.5">
          {service.processSteps.map((step) => (
            <div key={step.step} className="p-3.5 rounded-lg bg-[#f8faf9] border border-gray-100 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="w-5 h-5 rounded-full bg-[#008352] text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">STEP 0{step.step}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-1">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents (준비 서류) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            신청 준비물
          </h2>
          <p className="text-xs text-gray-500 mt-1">간소화된 제출 서류</p>
        </div>

        <div className="space-y-2.5">
          {service.requiredDocs.map((doc, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-[#f8faf9] border border-gray-100 flex items-start justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-0.5">{doc.title}</h4>
                <p className="text-xs text-gray-600">{doc.description}</p>
              </div>
              {doc.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-gray-100 text-gray-700 shrink-0">
                  {doc.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <div className="p-6 bg-[#f8faf9] rounded-xl border border-gray-100 text-center space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          건축물 사용승인 및 현황 확인이 필요하신가요?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          순천시청 토지정보과 접수창구(061-749-5530)에서 신속한 일정 배정과 수수료를 상담받으실 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
          <a
            id="btn-status-call-cta"
            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#008352] hover:bg-[#006e45] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>접수창구 직통 연결 (061-749-5530)</span>
          </a>
          <button
            onClick={() => onNavigate('reception-contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-50 text-gray-700 font-bold px-5 py-3 rounded-lg text-xs sm:text-sm border border-gray-200 transition-all cursor-pointer"
          >
            <span>오시는 길 & 온라인 접수</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
