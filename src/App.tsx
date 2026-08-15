/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { BoundaryRestorationPage } from './components/BoundaryRestorationPage';
import { CadastralStatusPage } from './components/CadastralStatusPage';
import { CadastralSubdivisionPage } from './components/CadastralSubdivisionPage';
import { ReceptionAndContactPage } from './components/ReceptionAndContactPage';
import { BottomFloatingBar } from './components/BottomFloatingBar';
import { DiagnosticModal } from './components/DiagnosticModal';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('main');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState<boolean>(false);

  // Sync with browser hash / path
  useEffect(() => {
    const handleHashChange = () => {
      const path = window.location.hash.replace('#/', '').replace('#', '');
      if (['boundary-restoration', 'cadastral-status', 'cadastral-subdivision', 'reception-contact'].includes(path)) {
        setCurrentPage(path as PageType);
      } else {
        setCurrentPage('main');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.location.hash = page === 'main' ? '' : `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'boundary-restoration':
        return <BoundaryRestorationPage onNavigate={navigateTo} />;
      case 'cadastral-status':
        return <CadastralStatusPage onNavigate={navigateTo} />;
      case 'cadastral-subdivision':
        return <CadastralSubdivisionPage onNavigate={navigateTo} />;
      case 'reception-contact':
        return <ReceptionAndContactPage onNavigate={navigateTo} />;
      case 'main':
      default:
        return (
          <MainPage 
            onNavigate={navigateTo} 
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#f8faf9] flex flex-col justify-between text-slate-800 antialiased selection:bg-[#008352]/20 selection:text-[#008352]">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Body */}
      <main className="flex-1 pb-16 sm:pb-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile-first Bottom Fixed CTA Bar */}
      <BottomFloatingBar />

      {/* 3-Second Quick Diagnostic Modal */}
      <DiagnosticModal 
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        onSelectService={(service) => {
          navigateTo(service);
          setIsDiagnosticOpen(false);
        }}
      />
    </div>
  );
}

