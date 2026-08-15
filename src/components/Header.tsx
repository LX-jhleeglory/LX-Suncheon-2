import React, { useState } from 'react';
import { PageType } from '../types';
import { LX_CONTACT_INFO } from '../data/surveyData';
import { Phone, MapPin, Menu, X, Compass, FileText, Building2, Home, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; label: string; shortLabel: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'main', label: '메인', shortLabel: '메인', icon: Home },
    { id: 'boundary-restoration', label: '경계복원', shortLabel: '경계복원', icon: Compass },
    { id: 'cadastral-status', label: '지적현황', shortLabel: '지적현황', icon: Building2 },
    { id: 'cadastral-subdivision', label: '분할측량', shortLabel: '분할측량', icon: FileText },
    { id: 'reception-contact', label: '접수·문의', shortLabel: '오시는길', icon: MapPin },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-100 shadow-2xs">
      {/* Top institutional ticker / quick bar */}
      <div className="bg-[#005e3a] text-white text-xs py-1 px-4 hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2 font-medium tracking-tight opacity-95 text-[11px]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            국토교통부 산하 준정부기관 · LX 한국국토정보공사 순천지사
          </span>
          <div className="flex items-center gap-4 text-[11px]">
            <a 
              href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
              className="flex items-center gap-1 hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>접수창구 <strong>{LX_CONTACT_INFO.receptionPhone}</strong></span>
            </a>
            <span className="text-emerald-300/40">|</span>
            <a 
              href={LX_CONTACT_INFO.onlinePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-200 hover:text-white transition-colors"
            >
              <span>지적측량바로처리센터</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-[70px] flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="btn-header-logo"
          onClick={() => handleNavClick('main')}
          className="flex items-center gap-3 text-left group focus:outline-hidden cursor-pointer"
        >
          <div className="bg-[#008352] text-white font-bold px-3 py-1 rounded text-2xl tracking-tighter group-hover:bg-[#006e45] transition-colors">
            LX
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-[#008352] uppercase tracking-wider">
              한국국토정보공사
            </span>
            <span className="text-xs text-gray-500 font-medium">순천지사</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-all cursor-pointer ${
                  isActive
                    ? 'font-semibold text-[#008352] border-b-2 border-[#008352] pb-1'
                    : 'font-medium text-gray-500 hover:text-[#008352] pb-1 border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          <button
            id="btn-header-reception-quick"
            onClick={() => handleNavClick('reception-contact')}
            className="bg-[#008352] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#006e45] transition-colors shadow-2xs hidden sm:inline-flex items-center gap-1.5 cursor-pointer active:scale-98"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>측량 접수·문의</span>
          </button>

          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#008352] hover:bg-gray-50 rounded-lg transition-colors"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-3 pb-5 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1 mb-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#008352] font-semibold'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#008352]' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#008352]"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              id="mobile-call-cityhall"
              href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
              className="w-full flex items-center justify-center gap-2 bg-[#008352] text-white py-2.5 rounded-lg text-sm font-bold shadow-2xs active:scale-98"
            >
              <Phone className="w-4 h-4" />
              <span>접수창구 문의 (061-749-5530)</span>
            </a>
            <a
              id="mobile-open-baro"
              href={LX_CONTACT_INFO.onlinePortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-700 hover:bg-gray-100 py-2.5 rounded-lg text-xs font-semibold"
            >
              <span>지적측량바로처리센터 온라인 접수</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
