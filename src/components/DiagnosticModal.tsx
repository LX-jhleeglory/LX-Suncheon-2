import React, { useState } from 'react';
import { PageType } from '../types';
import { SURVEY_SERVICES, LX_CONTACT_INFO } from '../data/surveyData';
import { X, CheckCircle, ArrowRight, Phone, HelpCircle } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: PageType) => void;
}

export const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose, onSelectService }) => {
  const [selectedCase, setSelectedCase] = useState<PageType | null>(null);

  if (!isOpen) return null;

  const diagnosticOptions: {
    id: PageType;
    icon: string;
    label: string;
    description: string;
    recommendation: string;
  }[] = [
    {
      id: 'boundary-restoration',
      icon: '🏡',
      label: '이웃과 경계 확인 / 담장·울타리 설치 / 신축 전 경계 확인',
      description: '내 땅의 정확한 경계선이 어디인지 실제 지표면에 붉은 말뚝으로 확인하고 싶습니다.',
      recommendation: '【경계복원측량】을 신청하셔야 합니다.',
    },
    {
      id: 'cadastral-status',
      icon: '🏗️',
      label: '건물 준공검사(사용승인) / 건축물 침범 여부 확인',
      description: '지어진 건물이 도면상 내 땅 안에 제대로 앉혀져 있는지 증빙 도면이 필요합니다.',
      recommendation: '【지적현황측량】을 신청하셔야 합니다.',
    },
    {
      id: 'cadastral-subdivision',
      icon: '📄',
      label: '토지 분할 / 1필지를 2필지 이상으로 나누기',
      description: '토지의 일부를 매매하거나 증여하기 위해 필지를 분할하여 새로 등록하고 싶습니다.',
      recommendation: '【지적분할측량】(순천시청 개발행위허가 등 사전 상담 필수)이 필요합니다.',
    },
  ];

  const handleSelect = (serviceId: PageType) => {
    setSelectedCase(serviceId);
  };

  const handleConfirmNavigate = () => {
    if (selectedCase) {
      onSelectService(selectedCase);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-xl border border-gray-100 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          id="btn-close-diagnostic"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-left mb-4">
          <div className="inline-flex items-center gap-1 bg-emerald-50 text-[#008352] text-xs font-bold px-2.5 py-0.5 rounded-full mb-2 border border-emerald-200/60">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>3초 맞춤 측량 진단</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
            현재 어떤 상황을 준비 중이신가요?
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            해당하는 항목을 선택하시면 최적의 지적측량 서비스와 절차를 안내해 드립니다.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 mb-5">
          {diagnosticOptions.map((opt) => {
            const isSelected = selectedCase === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'border-[#008352] bg-emerald-50/60 shadow-2xs'
                    : 'border-gray-100 hover:border-gray-300 bg-[#f8faf9]'
                }`}
              >
                <span className="text-xl shrink-0 mt-0.5 select-none">{opt.icon}</span>
                <div className="space-y-0.5">
                  <div className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{opt.label}</div>
                  <div className="text-[11px] text-gray-500 leading-relaxed">{opt.description}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommendation Result Box */}
        {selectedCase && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 mb-5 animate-in slide-in-from-bottom-2 duration-200 space-y-2">
            <div className="flex items-center gap-1.5 text-[#008352] font-bold text-xs">
              <CheckCircle className="w-4 h-4 text-[#008352]" />
              <span>진단 결과 추천 측량</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-900">
              {diagnosticOptions.find(o => o.id === selectedCase)?.recommendation}
            </div>
            <p className="text-xs text-gray-600">
              {SURVEY_SERVICES[selectedCase].tagline}
            </p>
          </div>
        )}

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
          {selectedCase ? (
            <button
              id="btn-confirm-diagnostic"
              onClick={handleConfirmNavigate}
              className="w-full flex-1 inline-flex items-center justify-center gap-2 bg-[#008352] hover:bg-[#006e45] text-white font-bold py-2.5 px-4 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 cursor-pointer"
            >
              <span>해당 측량 상세 안내 보기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <div className="text-xs text-gray-400 text-center w-full py-1">
              위 항목 중 하나를 선택해 주세요.
            </div>
          )}

          <a
            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-4 rounded-lg text-xs transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#008352]" />
            <span>전화 직접 문의</span>
          </a>
        </div>
      </div>
    </div>
  );
};
