import { ReactNode } from "react";

export interface ServiceDetail {
  id: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  process: { step: string; desc: string }[];
  timeline: string;
  priceRange: string;
}

export interface WhyDetail {
  id: string;
  num: string;
  icon: ReactNode;
  title: string;
  tagline: string;
  description: string;
  highlights: { label: string; value: string }[];
  points: string[];
  caseStudy: { title: string; desc: string };
}

