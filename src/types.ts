export type PageType = 
  | 'main'
  | 'boundary-restoration'
  | 'cadastral-status'
  | 'cadastral-subdivision'
  | 'reception-contact';

export interface SurveyService {
  id: PageType;
  title: string;
  badge: string;
  tagline: string;
  iconName: string;
  summary: string;
  targetCases: string[];
  expectedEffects: string[];
  requiredDocs: {
    title: string;
    description: string;
    badge?: string;
  }[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  cautions?: string[];
  faq: {
    q: string;
    a: string;
  }[];
}

export interface FaqItem {
  id: string;
  category: '서류' | '수수료' | '처리절차' | '경계분쟁' | '방문안내';
  question: string;
  answer: string;
  highlight?: string;
}
