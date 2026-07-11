import { Heart, Brain, Zap, Sparkles, Pill, Leaf } from "lucide-react";

export interface SubTab {
  id: string;
  label: string;
  tabName: string;
  subcategory: string;
}

export interface TabConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  tabName?: string;
  subTabs?: SubTab[];
}

export const tabsConfig: TabConfig[] = [
  {
    id: "Nutraceuticals & Herbal Supplements",
    label: "Nutraceuticals & Herbal Supplements",
    icon: Leaf,
    color: "#f59e0b",
    subTabs: [
      {
        id: "Nutraceuticals",
        label: "Nutraceuticals",
        tabName: "Nutraceuticals & Herbal Supplements",
        subcategory: "Nutraceuticals",
      },
      {
        id: "Herbal",
        label: "Herbal",
        tabName: "Nutraceuticals & Herbal Supplements",
        subcategory: "Herbal",
      },
    ],
  },
  {
    id: "Cardiovascular System",
    label: "Cardiovascular System",
    icon: Heart,
    color: "#e8732a",
    tabName: "Cardiovascular System",
  },
  {
    id: "Central Nervous System",
    label: "Central Nervous System",
    icon: Zap,
    color: "#8b5cf6",
    tabName: "Central Nervous System",
  },
  {
    id: "Anti-diabetic - Tablets & Capsules",
    label: "Anti-diabetic - Tablets & Capsules",
    icon: Brain,
    color: "#1a3a6b",
    tabName: "Anti-diabetic - Tablets & Capsules",
  },
  {
    id: "Antibiotic & Anti-Infective",
    label: "Antibiotic & Anti-Infective",
    icon: Sparkles,
    color: "#ec4899",
    tabName: "Antibiotic & Anti-Infective",
  },
  {
    id: "Alimentary System",
    label: "Alimentary System",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Alimentary System",
  },
  {
    id: "Analgesics & Musculo Skeletal Disorders",
    label: "Analgesics & Musculo Skeletal Disorders",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Analgesics & Musculo Skeletal Disorders",
  },
  {
    id: "RI Tract & Anti-Allergic",
    label: "RI Tract & Anti-Allergic",
    icon: Pill,
    color: "#2ecc71",
    tabName: "RI Tract & Anti-Allergic",
  },
  {
    id: "Vitamins & Minerals",
    label: "Vitamins & Minerals",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Vitamins & Minerals",
  },
  {
    id: "Others Formulations",
    label: "Others Formulations",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Others Formulations",
  },
  {
    id: "Oral Dry Suspensions & Oral Liquids",
    label: "Oral Dry Suspensions & Oral Liquids",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Oral Dry Suspensions & Oral Liquids",
  },
  {
    id: "General Injections",
    label: "General Injections",
    icon: Pill,
    color: "#2ecc71",
    tabName: "General Injections",
  },
  {
    id: "Eye, Ear & Nasal Drops",
    label: "Eye, Ear & Nasal Drops",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Eye, Ear & Nasal Drops",
  },
  {
    id: "External Preparations",
    label: "External Preparations",
    icon: Pill,
    color: "#2ecc71",
    tabName: "External Preparations",
  },
  {
    id: "Oral Powders (Sachet)",
    label: "Oral Powders (Sachet)",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Oral Powders (Sachet)",
  },
  {
    id: "Products Under Development (Tablets & Capsules)",
    label: "Products Under Development (Tablets & Capsules)",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Products Under Development (Tablets & Capsules)",
  },
  {
    id: "Ointments, Cream, Gel, Lotion & Shampoo",
    label: "Ointments, Cream, Gel, Lotion & Shampoo",
    icon: Pill,
    color: "#2ecc71",
    tabName: "Ointments, Cream, Gel, Lotion & Shampoo",
  },
];
