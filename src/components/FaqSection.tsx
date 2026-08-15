import React, { useState } from 'react';
import { MAIN_FAQS, LX_CONTACT_INFO } from '../data/surveyData';
import { ChevronDown, Phone, Search, FileCheck, CheckCircle2 } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['전체', '서류', '수수료', '처리절차', '경계분쟁', '방문안내'];

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = MAIN_FAQS.filter(faq => {
    const matchesCat = activeCategory === '전체' || faq.category === activeCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-8 bg-[#f8faf9] border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Section Header with Professional Polish pill indicator */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="text-sm font-bold text-[#008352] mb-2 flex items-center justify-center gap-2">
            <span className="w-1 h-4 bg-[#008352] rounded-full inline-block"></span>
            자주 묻는 질문 (FAQ)
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] tracking-tight mb-2">
            측량 신청 전 꼭 확인하세요
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">
            순천지사로 가장 많이 문의하시는 핵심 질문들을 모았습니다.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-6 space-y-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="input-faq-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="궁금한 내용을 검색해 보세요 (예: 서류, 수수료, 기간, 대리인 등)"
              className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-800 focus:outline-hidden focus:border-[#008352] focus:ring-1 focus:ring-[#008352] transition-colors"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#008352] text-white shadow-2xs'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <p className="text-gray-500 text-sm mb-3">검색된 질문이 없습니다.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('전체'); }}
                className="text-xs text-[#008352] font-bold underline cursor-pointer"
              >
                전체 질문 보기
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  id={`accordion-item-${faq.id}`}
                  className="border border-gray-100 rounded-xl overflow-hidden bg-white hover:border-[#008352]/40 transition-colors"
                >
                  <button
                    id={`btn-toggle-faq-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-4 sm:p-4.5 flex items-start justify-between gap-3 hover:bg-gray-50/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-md bg-emerald-50 text-[#008352] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                        Q
                      </span>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-[#008352] bg-emerald-50 px-1.5 py-0.2 rounded-sm border border-emerald-200/40">
                            {faq.category}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-gray-800 leading-snug">
                          {faq.question}
                        </h4>
                      </div>
                    </div>
                    <div className={`p-1 rounded-full text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#008352]' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-[13px] text-gray-600 leading-relaxed border-t border-gray-100 bg-[#fbfdfc]">
                      {/* Highlight Notice Box */}
                      {faq.highlight && (
                        <div className="my-2.5 p-3 rounded-lg bg-emerald-50/80 border border-emerald-200/80 text-emerald-950 font-semibold flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#008352] shrink-0 mt-0.5" />
                          <span className="text-xs">{faq.highlight}</span>
                        </div>
                      )}

                      <p className="mt-2 text-gray-700 whitespace-pre-line pl-8">
                        {faq.answer}
                      </p>

                      {/* If category is 수수료 or 서류, show direct call assistance */}
                      {faq.category === '수수료' && (
                        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between pl-8">
                          <span className="text-xs text-gray-500 font-medium">지번별 정확한 수수료 확인:</span>
                          <a
                            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
                            className="inline-flex items-center gap-1 text-xs text-[#008352] font-bold bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors"
                          >
                            <Phone className="w-3 h-3" />
                            <span>순천시청 접수창구 {LX_CONTACT_INFO.receptionPhone}</span>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-8 p-5 rounded-xl bg-white border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#008352] flex items-center justify-center shrink-0 border border-emerald-200/60">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-gray-900">찾으시는 질문이 없으신가요?</p>
              <p className="text-xs text-gray-500">순천시청 토지정보과 접수창구에서 전문 상담원이 친절하게 안내해 드립니다.</p>
            </div>
          </div>
          <a
            href={`tel:${LX_CONTACT_INFO.receptionPhoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#008352] hover:bg-[#006e45] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-lg transition-all shadow-2xs shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>061-749-5530 전화 상담</span>
          </a>
        </div>
      </div>
    </section>
  );
};
