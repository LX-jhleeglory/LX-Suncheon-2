import React, { useState } from 'react';
import { LX_CONTACT_INFO } from '../data/surveyData';
import { 
  Globe, 
  Phone, 
  MapPin, 
  Clock, 
  Car, 
  Navigation, 
  ExternalLink, 
  Copy, 
  Check, 
  Bus
} from 'lucide-react';
import { PageType } from '../types';

interface PageProps {
  onNavigate: (page: PageType) => void;
}

export const ReceptionAndContactPage: React.FC<PageProps> = ({ onNavigate }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="py-6 sm:py-10 px-4 sm:px-8 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 font-medium">
        <button onClick={() => onNavigate('main')} className="hover:text-[#008352] cursor-pointer">홈</button>
        <span>&gt;</span>
        <span className="text-[#008352] font-bold">측량 접수 및 오시는 길</span>
      </nav>

      {/* Hero Header with dot grid */}
      <div className="bg-[#008352] text-white rounded-xl p-6 sm:p-8 relative overflow-hidden shadow-2xs">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }}
        />
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-1.5 bg-white/20 text-white px-2.5 py-0.5 rounded-full text-xs font-bold border border-white/20">
            <MapPin className="w-3.5 h-3.5" />
            <span>LX 순천지사 안내데스크</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            측량 접수 및 오시는 길
          </h1>

          <p className="text-emerald-50 text-xs sm:text-sm leading-relaxed max-w-2xl">
            온라인 24시간 간편 접수부터 전화 상담 창구, 지사 사옥 방문 오시는 길까지 
            가장 편리하고 신속한 방법을 안내해 드립니다.
          </p>
        </div>
      </div>

      {/* 1. 온라인 접수 (LX 지적측량바로처리센터 baro.lx.or.kr) */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            1. 온라인 지적측량 접수 (24시간)
          </h2>
        </div>

        <div className="p-5 rounded-xl bg-[#f8faf9] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-gray-900">LX 지적측량바로처리센터</span>
              <span className="text-[10px] bg-[#008352] text-white font-bold px-2 py-0.5 rounded-full">공식 포털</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              공인인증서 또는 간편인증으로 24시간 언제 어디서나 신청, 전자결제, 진행상황 조회가 가능합니다.
            </p>
            <p className="text-xs text-[#008352] font-semibold">
              🌐 웹사이트: <span className="underline">baro.lx.or.kr</span>
            </p>
          </div>

          <a
            id="btn-open-baro-portal"
            href={LX_CONTACT_INFO.onlinePortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#68bb59] hover:bg-[#5aa84c] text-white font-bold px-5 py-2.5 rounded-lg text-xs sm:text-sm shadow-2xs transition-all active:scale-98 shrink-0 cursor-pointer"
          >
            <span>온라인 바로접수 바로가기</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 2. 전화 상담 및 접수 창구 분리 */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-4">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            2. 전화 상담 및 접수 창구 안내
          </h2>
          <p className="text-xs text-gray-500 mt-1">업무 목적에 맞는 전용 창구로 전화하시면 더욱 신속히 안내받으실 수 있습니다</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Desk 1: 순천시청 접수창구 */}
          <div className="p-5 rounded-xl bg-[#f8faf9] border border-gray-100 hover:border-[#008352] transition-colors flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold bg-[#008352] text-white px-2 py-0.5 rounded-md">
                  신청 및 인허가 상담
                </span>
                <span className="text-xs text-gray-500">순천시청 토지정보과</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                측량 접수 및 인허가 문의 창구
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                측량 신규 접수, 예상 수수료 견적 산정, 일정 확인, 지자체 인허가(분할/지목변경 등) 전문 상담
              </p>
              <div className="mt-3 text-2xl font-bold text-[#008352] tracking-tight">
                {LX_CONTACT_INFO.receptionPhone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-gray-200/60">
              <a
                id="btn-call-reception-page"
                href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#008352] hover:bg-[#006e45] text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-2xs active:scale-98"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>전화 연결</span>
              </a>
              <button
                onClick={() => handleCopy(LX_CONTACT_INFO.receptionPhone, 'reception')}
                className="inline-flex items-center justify-center gap-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-3 rounded-lg text-xs border border-gray-200 cursor-pointer"
              >
                {copiedText === 'reception' ? <Check className="w-3.5 h-3.5 text-[#008352]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedText === 'reception' ? '복사됨' : '번호복사'}</span>
              </button>
            </div>
          </div>

          {/* Desk 2: 순천지사 일반 문의 */}
          <div className="p-5 rounded-xl bg-[#f8faf9] border border-gray-100 hover:border-gray-300 transition-colors flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold bg-gray-200 text-gray-700 px-2 py-0.5 rounded-md">
                  지사 대표 번호
                </span>
                <span className="text-xs text-gray-500">순천시 조례동 사옥</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                순천지사 일반 문의
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                측량 성과도 재발급, 지사 업무 안내, 기관 협력, 일반 행정 문의
              </p>
              <div className="mt-3 text-2xl font-bold text-gray-800 tracking-tight">
                {LX_CONTACT_INFO.branchPhone}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-gray-200/60">
              <a
                id="btn-call-branch-page"
                href={`tel:${LX_CONTACT_INFO.branchPhoneRaw}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gray-800 hover:bg-gray-900 text-white font-bold py-2.5 px-3 rounded-lg text-xs shadow-2xs active:scale-98"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>전화 연결</span>
              </a>
              <button
                onClick={() => handleCopy(LX_CONTACT_INFO.branchPhone, 'branch')}
                className="inline-flex items-center justify-center gap-1 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-3 rounded-lg text-xs border border-gray-200 cursor-pointer"
              >
                {copiedText === 'branch' ? <Check className="w-3.5 h-3.5 text-[#008352]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedText === 'branch' ? '복사됨' : '번호복사'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 오시는 길 & 주차 안내 */}
      <section className="bg-white rounded-xl p-5 sm:p-7 border border-gray-100 shadow-2xs space-y-5">
        <div className="pb-3 border-b border-gray-100">
          <h2 className="text-base sm:text-lg font-bold text-[#008352] flex items-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            3. 오시는 길 & 주차 안내
          </h2>
          <p className="text-xs text-gray-500 mt-1">LX 한국국토정보공사 순천지사 사옥 위치 및 주차</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* Address Box */}
          <div className="p-4 rounded-lg bg-[#f8faf9] border border-gray-100 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#008352]" />
                <span>지사 위치 주소</span>
              </span>
              <button
                onClick={() => handleCopy(LX_CONTACT_INFO.addressRoad, 'addr')}
                className="text-[11px] text-[#008352] hover:underline font-bold flex items-center gap-0.5 cursor-pointer"
              >
                {copiedText === 'addr' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copiedText === 'addr' ? '복사완료' : '주소복사'}</span>
              </button>
            </div>
            <p className="text-sm font-bold text-gray-900">{LX_CONTACT_INFO.addressRoad}</p>
            <p className="text-xs text-gray-500">(지번: {LX_CONTACT_INFO.addressJibun} / 우편번호 {LX_CONTACT_INFO.postalCode})</p>
          </div>

          {/* Operating Hours */}
          <div className="p-4 rounded-lg bg-[#f8faf9] border border-gray-100 space-y-1.5">
            <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#008352]" />
              <span>업무 운영시간</span>
            </span>
            <p className="text-sm font-bold text-gray-900">{LX_CONTACT_INFO.operatingHours}</p>
            <p className="text-xs text-gray-500">주말·공휴일 휴무 / 점심시간(12:00~13:00) 상시 접수 가능</p>
          </div>

          {/* Parking Notice Banner */}
          <div className="sm:col-span-2 p-4 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 flex items-start gap-3">
            <Car className="w-5 h-5 text-[#008352] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-0.5">사옥 내 민원인 전용 무료 주차장 완비</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                LX 순천지사 사옥 지상에 넓고 쾌적한 전용 주차 공간이 마련되어 있어, 주차 요금 없이 안심하고 편리하게 무료 주차를 이용하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Map Representation Card */}
        <div className="rounded-xl border border-gray-100 overflow-hidden bg-gray-900 text-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span className="font-bold text-sm sm:text-base text-white">
                LX 한국국토정보공사 순천지사
              </span>
            </div>
            <span className="text-xs text-gray-400">전남 순천시 충효로 145 (조례동)</span>
          </div>

          {/* Map Visual Graphic */}
          <div className="relative h-40 sm:h-48 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center p-4 border border-gray-700">
            {/* Styled Map Background */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="road-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 0 15 L 30 15 M 15 0 L 15 30" stroke="#94a3b8" strokeWidth="1" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#road-grid)" />
                <path d="M 0 80 Q 150 50 300 90 T 600 70" stroke="#008352" strokeWidth="3" fill="none" />
              </svg>
            </div>

            {/* Marker Card in Center */}
            <div className="relative z-10 bg-white text-gray-900 p-3 rounded-lg shadow-lg border-2 border-[#008352] text-center max-w-xs">
              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#008352] text-white font-bold text-xs mb-1">
                LX
              </div>
              <div className="font-bold text-xs sm:text-sm text-gray-900">LX 한국국토정보공사 순천지사</div>
              <div className="text-[11px] text-gray-500">순천시 충효로 145 (조례동)</div>
            </div>
          </div>

          {/* 1-Click Map Navigation Links (네이버 지도, 카카오맵, 티맵) */}
          <div className="pt-1">
            <div className="text-xs font-semibold text-gray-300 mb-2 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-emerald-400" />
              <span>모바일 지도 원클릭 길찾기 앱 열기:</span>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {/* Naver Map */}
              <a
                id="btn-open-naver-map"
                href={LX_CONTACT_INFO.naverMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#03C75A] hover:bg-[#02b350] text-white rounded-lg text-xs font-bold shadow-2xs transition-all active:scale-98"
              >
                <span className="text-sm font-bold">N</span>
                <span>네이버 지도</span>
              </a>

              {/* Kakao Map */}
              <a
                id="btn-open-kakao-map"
                href={LX_CONTACT_INFO.kakaoMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-[#FEE500] hover:bg-[#f0d800] text-gray-900 rounded-lg text-xs font-bold shadow-2xs transition-all active:scale-98"
              >
                <span className="text-sm font-bold text-gray-900">K</span>
                <span>카카오맵</span>
              </a>

              {/* Tmap */}
              <a
                id="btn-open-tmap"
                href={LX_CONTACT_INFO.tmapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center py-2.5 px-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-xs font-bold border border-gray-600 shadow-2xs transition-all active:scale-98"
              >
                <span className="text-sm font-bold text-rose-400">T</span>
                <span>티맵 길찾기</span>
              </a>
            </div>
          </div>
        </div>

        {/* Public Transport Guide */}
        <div className="p-4 rounded-lg bg-[#f8faf9] border border-gray-100 text-xs sm:text-sm text-gray-700 space-y-1.5">
          <div className="flex items-center gap-2 font-bold text-gray-900">
            <Bus className="w-4 h-4 text-[#008352]" />
            <span>대중교통 이용 시</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            • 시내버스: 조례동 충효로 방면 버스 노선 탑승 후 <strong>[한국국토정보공사]</strong> 또는 <strong>[조례초교]</strong> 정류장 하차 후 도보 2분 거리입니다.
          </p>
        </div>
      </section>
    </div>
  );
};
