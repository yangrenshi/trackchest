export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  credits: number;
  plan: 'free' | 'pro' | 'lifetime';
  subscriptionEnd?: string;
  createdAt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  credits: number;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonHref?: string;
  paymentProvider?: 'creem' | 'waffo' | 'paypal' | 'stripe';
  productId?: string;
}

export interface FaqItem {
  q: string;
  a: string;
  question?: string;
  answer?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  us: string | boolean;
  competitors: string | boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  domain: string;
  url: string;
  author: string;
  dashboardStyle?: "pro" | "lite";
  databaseProvider?: "d1" | "supabase";
  contactEmail: string;
  refundEmail: string;
  companyAddress: string;
  gaMeasurementId?: string;
  googleClientId?: string;
  socials: {
    twitter?: string;
    github?: string;
    producthunt?: string;
    discord?: string;
  };
  features: FeatureItem[];
  pricing: PricingPlan[];
  faqs: FaqItem[];
  comparison: {
    title: string;
    description: string;
    rows: ComparisonRow[];
  };
}
