import React from 'react';
import { SURVEY_SERVICES, LX_CONTACT_INFO } from '../data/surveyData';
import { 
  FileText, 
  ArrowRight, 
  Phone, 
  Globe, 
  AlertOctagon, 
  Clock,
  SplitSquareVertical
} from 'lucide-react';
import { PageType } from '../types';

interface PageProps {
  onNavigate: (page: PageType) => void;
}

export const CadastralSubdivisionPage: React.FC<PageProps> = ({ onNavigate }) => {
  const service = SURVEY_SERVICES['cadastral-subdivision'];

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <button onClick={() => onNavigate('main')} className="hover:text-[#008352] cursor-pointer">홈</button>
        <span>&gt;</span>
        <span className="text-[#008352] font-bold">분할측량</span>
      </nav>

      {/* Hero Header Box */}
      <div className="bg-[#008352] text-white rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xs">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/20 text-white px-2.5 py-0.5 rounded-full text-xs font-bold border border-white/20">
            <SplitSquareVertical className="w-3.5 h-3.5" />
            <span>토지를 나눌 때</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            하나의 땅을 여러 개로,<br className="hidden xs:inline" />
            토지 활용의 가치를 높입니다.
          </h1>

          <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed max-w-2xl">
            1필지의 토지를 2필지 이상으로 나누어 새로 등록하는 측량으로, 
            매매·증여·상속 및 건축 인허가를 위한 필수적인 절차입니다.
          </p>

          {/* Phone Call CTA in Header */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
            <a
              id="cta-subdiv-phone"
              href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#008352] hover:bg-emerald-50 font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#008352]" />
              <span>순천시청 접수창구 문의 (061-749-5530)</span>
            </a>

            <a
              id="cta-subdiv-online"
              href={LX_CONTACT_INFO.onlinePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#68bb59] hover:bg-[#5aa84c] text-white font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>온라인 바로처리 접수</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mandatory Caution Callout (필독 유의사항 - 개발행위허가 등 선행 인허가 안내) */}
      <section className="p-5 sm:p-6 rounded-xl bg-amber-50 border border-amber-300/80 text-amber-950 space-y-2.5 shadow-2xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
          <AlertOctagon className="w-5 h-5 text-amber-600 shrink-0" />
          <span>★ 필독 유의사항: 토지분할 사전 인허가 확인 필수</span>
        </div>
        <div className="text-xs sm:text-sm text-amber-900/95 space-y-2 leading-relaxed pl-1">
          <p>
            토지분할은 <strong>국토의 계획 및 이용에 관한 법률 및 순천시 도시계획 조례</strong>에 따라 엄격한 법적 제한(건축물이 있는 대지의 최소 분할 면적 제한, 진입도로 확보 등)과 <strong>개발행위허가</strong>가 수반됩니다.
          </p>
          <div className="bg-white/90 p-3 rounded-lg border border-amber-200/80 font-semibold text-emerald-950">
            📌 측량 신청 전 반드시 <span className="text-[#008352] underline font-bold">순천시청 접수창구(061-749-5530)</span>에 토지 지번을 알려주시고 분할 가능 여부 및 인허가 절차를 먼저 상담받으시기 바랍니다.
          </div>
        </div>
      </section>

      {/* What is Cadastral Subdivision? (분할측량이란?) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-3">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            분할측량이란?
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          {service.summary}
        </p>
      </section>

      {/* Target Cases (주요 대상) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            주요 신청 대상
          </h2>
          <p className="text-xs text-gray-500 mt-1">토지 분할이 필요한 대표적인 사례</p>
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

      {/* Required Docs (준비 서류) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            신청 시 구비 서류
          </h2>
          <p className="text-xs text-gray-500 mt-1">인허가 서류 구비 요건</p>
        </div>

        <div className="space-y-3">
          {service.requiredDocs.map((doc, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#f8faf9] border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-bold text-gray-900">{doc.title}</h4>
                  {doc.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-sm bg-emerald-100 text-[#008352]">
                      {doc.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Steps (처리 절차) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            분할측량 진행 절차
          </h2>
          <p className="text-xs text-gray-500 mt-1">사전 인허가부터 지적공부 정리까지</p>
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

      {/* Bottom CTA Box */}
      <div className="p-6 bg-[#f8faf9] rounded-xl border border-gray-100 text-center space-y-3">
        <h3 className="text-base sm:text-lg font-bold text-gray-900">
          토지 분할 인허가 및 측량 상담이 필요하신가요?
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
          순천시청 토지정보과 지적측량접수창구(061-749-5530)에서 인허가 요건과 측량 접수를 한 번에 상담받으세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
          <a
            id="btn-subdiv-call-cta"
            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#008352] hover:bg-[#006e45] text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm shadow-2xs transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            <span>순천시청 접수창구 문의 (061-749-5530)</span>
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
