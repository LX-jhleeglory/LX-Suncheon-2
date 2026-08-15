import React from 'react';
import { LX_CONTACT_INFO } from '../data/surveyData';
import { PageType } from '../types';
import { Phone, MapPin, Globe, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-800 text-gray-400 text-xs pt-8 pb-24 sm:pb-20 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6">
        {/* Top Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-gray-700">
          {/* Col 1: Brand Info */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="bg-[#008352] text-white font-bold text-xs px-2 py-0.5 rounded-sm">LX</span>
              <span className="font-bold text-white text-sm">LX 한국국토정보공사 광주전남지역본부 순천지사</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              LX 한국국토정보공사는 국민의 토지 재산권 보호와 스마트 국토정보 인프라를 구축하는 국토교통부 산하 준정부기관입니다.
            </p>
            <div className="text-[11px] text-[#68bb59] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>순천시 전 지역 정밀 지적측량 서비스 수행</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">지적측량 바로가기</h4>
            <ul className="space-y-1.5">
              <li>
                <button 
                  onClick={() => { onNavigate('boundary-restoration'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  경계복원측량 안내
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('cadastral-status'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  지적현황측량 안내
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('cadastral-subdivision'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  지적분할측량 안내
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('reception-contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  측량 접수 및 오시는 길
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Links */}
          <div className="space-y-2">
            <h4 className="font-bold text-white text-xs tracking-wider uppercase">고객 지원 & 접수 창구</h4>
            <div className="space-y-1 text-xs text-gray-300">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#68bb59]" />
                <span>측량접수·인허가(시청): <strong className="text-white">{LX_CONTACT_INFO.receptionPhone}</strong></span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gray-400" />
                <span>순천지사 일반문의: <strong className="text-white">{LX_CONTACT_INFO.branchPhone}</strong></span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{LX_CONTACT_INFO.addressRoad} (조례동)</span>
              </p>
            </div>
            <a
              href={LX_CONTACT_INFO.onlinePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#68bb59] hover:text-emerald-300 font-semibold pt-1 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>LX 지적측량바로처리센터 (baro.lx.or.kr)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Legal & Institutional Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
          <p>© 2024 LX 한국국토정보공사 광주전남지역본부 순천지사. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>개인정보처리방침</span>
            <span>·</span>
            <span>이용약관</span>
            <span>·</span>
            <span>고객헌장</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
