import React from 'react';
import { SURVEY_SERVICES, LX_CONTACT_INFO } from '../data/surveyData';
import { 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  ArrowRight, 
  Phone, 
  Globe, 
  AlertTriangle, 
  Clock,
  Compass
} from 'lucide-react';
import { PageType } from '../types';

interface PageProps {
  onNavigate: (page: PageType) => void;
}

export const BoundaryRestorationPage: React.FC<PageProps> = ({ onNavigate }) => {
  const service = SURVEY_SERVICES['boundary-restoration'];

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <button onClick={() => onNavigate('main')} className="hover:text-[#008352] cursor-pointer">홈</button>
        <span>&gt;</span>
        <span className="text-[#008352] font-bold">경계복원측량</span>
      </nav>

      {/* Hero Header Box */}
      <div className="bg-[#008352] text-white rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xs">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/20 text-white px-2.5 py-0.5 rounded-full text-xs font-bold border border-white/20">
            <Compass className="w-3.5 h-3.5" />
            <span>이웃과 경계가 모호할 때</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            도면 속 내 땅의 경계,<br className="hidden xs:inline" />
            현실에 정확히 복원합니다.
          </h1>

          <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed max-w-2xl">
            지적공부(토지대장·지적도)에 등록된 공인 경계점을 실제 땅 위에 붉은색 경계점 표지로 표시하여, 
            이웃 간의 경계 다툼을 사전에 차단하고 소중한 토지 재산권을 확고하게 보호합니다.
          </p>

          {/* Phone Call CTA in Header */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <a
              id="cta-boundary-phone"
              href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#008352] hover:bg-emerald-50 font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#008352]" />
              <span>측량 접수 및 인허가 문의 (061-749-5530)</span>
            </a>

            <a
              id="cta-boundary-online"
              href={LX_CONTACT_INFO.onlinePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#68bb59] hover:bg-[#5aa84c] text-white font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>온라인 24시 바로 접수</span>
            </a>
          </div>
        </div>
      </div>

      {/* Target Cases (주요 신청 대상) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            주요 신청 대상
          </h2>
          <p className="text-xs text-gray-500 mt-1">이런 경우에 경계복원측량이 반드시 필요합니다</p>
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
            측량의 기대 효과
          </h2>
          <p className="text-xs text-gray-500 mt-1">정확한 경계 확인으로 얻는 확실한 이점</p>
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

      {/* Required Documents (준비 서류) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            신청 시 준비 서류
          </h2>
          <p className="text-xs text-gray-500 mt-1">방문 전 지참 서류를 간편하게 확인하세요</p>
        </div>

        <div className="space-y-3">
          {service.requiredDocs.map((doc, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#f8faf9] border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold text-gray-900">{doc.title}</h4>
                  {doc.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${
                      doc.badge.includes('필수') 
                        ? 'bg-rose-50 text-rose-600 border border-rose-200' 
                        : doc.badge.includes('불요') 
                        ? 'bg-emerald-50 text-[#008352] border border-emerald-200' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {doc.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Public Books */}
        <div className="p-3.5 rounded-lg bg-emerald-50/50 border border-emerald-100 text-xs text-gray-600 leading-relaxed">
          💡 <strong>참고사항:</strong> 토지대장, 임야대장, 지적도 등 공적장부는 LX 종합전산망에서 실시간으로 확인되므로 민원인께서 별도로 발급받아 오실 필요가 없습니다.
        </div>
      </section>

      {/* Process Steps (처리 절차) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            측량 진행 절차
          </h2>
          <p className="text-xs text-gray-500 mt-1">신청부터 성과도 수령까지 4단계</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {service.processSteps.map((step) => (
            <div key={step.step} className="p-4 rounded-lg bg-[#f8faf9] border border-gray-100 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#008352] text-white text-xs font-bold flex items-center justify-center">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold text-gray-900">{step.title}</h4>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pl-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Cautions (유의사항) */}
      {service.cautions && (
        <section className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 space-y-2">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>현장 입회 시 꼭 알아두세요</span>
          </div>
          <ul className="list-disc list-inside text-xs text-amber-900/90 space-y-1.5 leading-relaxed">
            {service.cautions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Bottom CTA Box */}
      <div className="p-6 bg-[#f8faf9] rounded-xl border border-gray-100 text-center space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          순천시 관내 경계복원측량이 필요하신가요?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          순천시청 토지정보과 지적측량접수창구에서 지번만 말씀해 주시면 예상 수수료와 일정을 즉시 안내해 드립니다.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
          <a
            id="sub-boundary-call"
            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#008352] hover:bg-[#006e45] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>측량 접수 및 인허가 문의 (061-749-5530)</span>
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
