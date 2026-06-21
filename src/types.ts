export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'admission' | 'event' | 'general';
  isUrgent?: boolean;
  content?: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  iconName: string;
  description: string;
}

export interface StreamDetail {
  name: string;
  description: string;
  subjects: string[];
}

export interface NoticeCategory {
  id: 'all' | 'academic' | 'admission' | 'event' | 'general';
  label: string;
}

export interface TrustIndicator {
  id: string;
  title: string;
  description: string;
  metric: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Alumni' | 'Parent' | 'Student';
  batch?: string;
  comment: string;
  rating: number;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
