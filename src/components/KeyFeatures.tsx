import React from 'react';
import { PageType } from '../types';
import { SURVEY_SERVICES } from '../data/surveyData';
import { Home, Building2, FileText, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';

interface KeyFeaturesProps {
  onSelectService: (page: PageType) => void;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ onSelectService }) => {
  const cards = [
    {
      id: 'boundary-restoration' as PageType,
      title: '경계복원측량',
      iconEmoji: '🏡',
      iconComponent: Home,
      badge: '이웃과 경계가 모호할 때',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200/80',
      description: '이웃과 경계가 모호할 때 도면상 경계를 현장에 복원하여 분쟁을 예방합니다.',
      detailBullets: [
        '담장, 울타리 설치 전 정확한 경계 확인',
        '신축 건물 착공 전 인접 대지 침범 방지',
        '토지 매매·경매 시 실제 권리 범위 확인',
      ],
      tag: '가장 많이 신청하는 측량',
      popular: true,
    },
    {
      id: 'cadastral-status' as PageType,
      title: '지적현황측량',
      iconEmoji: '🏗️',
      iconComponent: Building2,
      badge: '건축물 현황을 확인할 때',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200/80',
      description: '건축물 신축 시 점유 현황을 확인하여 정확한 인허가를 지원합니다.',
      detailBullets: [
        '건축물 준공검사(사용승인) 필수 증빙 도면',
        '건축물의 인접 토지 침범 여부 정밀 검증',
        '국공유지 점용 현황 및 면적 확인',
      ],
      tag: '준공·사용승인 필수',
      popular: true,
    },
    {
      id: 'cadastral-subdivision' as PageType,
      title: '분할측량',
      iconEmoji: '📄',
      iconComponent: FileText,
      badge: '토지를 나눌 때',
      badgeColor: 'bg-green-50 text-green-700 border-green-200/80',
      description: '토지를 매매하거나 증여할 때 필지를 정확히 나누어 등록합니다.',
      detailBullets: [
        '토지 일부 매매, 증여, 상속을 위한 분할',
        '농지/임야 형질변경 및 개발행위허가 지원',
        '순천시청 개발행위허가 사전 상담 필수',
      ],
      tag: '사전 인허가 연계',
      popular: true,
    },
  ];

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#008352] px-3 py-1 rounded-full text-xs font-bold mb-2.5 border border-emerald-200/60">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LX 순천지사 핵심 지적측량 서비스</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] tracking-tight mb-2">
            상황에 꼭 맞는 맞춤 측량을 선택하세요
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            복잡한 토지 경계와 건축 인허가, LX 순천지사의 신뢰할 수 있는 기술력으로 확실하게 해결해 드립니다.
          </p>
        </div>

        {/* 3 Key Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                id={`card-service-${card.id}`}
                className="border border-gray-100 rounded-xl p-6 flex flex-col justify-between bg-[#f8faf9] hover:border-[#008352] transition-colors relative group"
              >
                {/* Popular Tag */}
                {card.popular && (
                  <div className="absolute -top-2.5 right-5 bg-[#008352] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-2xs flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-emerald-200" />
                  </div>
                )}

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="text-3xl mb-1 select-none" role="img" aria-label={card.title}>
                      {card.iconEmoji}
                    </div>
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-[#008352] mb-2 group-hover:text-[#006e45] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 pb-3 border-b border-gray-200/60">
                    {card.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 mb-6 text-left">
                    {card.detailBullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#008352] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <button
                  id={`btn-view-${card.id}`}
                  onClick={() => onSelectService(card.id)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    card.popular
                      ? 'bg-[#008352] hover:bg-[#006e45] text-white shadow-2xs active:scale-98'
                      : 'bg-white hover:bg-emerald-50 text-[#008352] border border-gray-200 hover:border-emerald-300 active:scale-98'
                  }`}
                >
                  <span>상세 안내 및 신청 방법</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
