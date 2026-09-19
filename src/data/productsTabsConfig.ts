import {
  Heart,
  Brain,
  Sparkles,
  Pill,
  Leaf,
  Activity,
  ShieldPlus,
  Bone,
  Baby,
  Syringe,
  Eye,
  FlaskConical,
  Hand,
  Package,
  TestTube2,
} from "lucide-react";

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
    color: "#276f4b",
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
    color: "#276f4b",
    tabName: "Cardiovascular System",
  },
  {
    id: "Central Nervous System",
    label: "Central Nervous System",
    icon: Brain,
    color: "#276f4b",
    tabName: "Central Nervous System",
  },
  {
    id: "Anti-diabetic - Tablets & Capsules",
    label: "Anti-diabetic - Tablets & Capsules",
    icon: Activity,
    color: "#276f4b",
    tabName: "Anti-diabetic - Tablets & Capsules",
  },
  {
    id: "Antibiotic & Anti-Infective",
    label: "Antibiotic & Anti-Infective",
    icon: ShieldPlus,
    color: "#276f4b",
    tabName: "Antibiotic & Anti-Infective",
  },
  {
    id: "Alimentary System",
    label: "Alimentary System",
    icon: Pill,
    color: "#276f4b",
    tabName: "Alimentary System",
  },
  {
    id: "Analgesics & Musculo Skeletal Disorders",
    label: "Analgesics & Musculo Skeletal Disorders",
    icon: Bone,
    color: "#276f4b",
    tabName: "Analgesics & Musculo Skeletal Disorders",
  },
  {
    id: "RI Tract & Anti-Allergic",
    label: "RI Tract & Anti-Allergic",
    icon: Pill,
    color: "#276f4b",
    tabName: "RI Tract & Anti-Allergic",
  },
  {
    id: "Vitamins & Minerals",
    label: "Vitamins & Minerals",
    icon: Sparkles,
    color: "#276f4b",
    tabName: "Vitamins & Minerals",
  },
  {
    id: "Others Formulations",
    label: "Others Formulations",
    icon: FlaskConical,
    color: "#276f4b",
    tabName: "Others Formulations",
  },
  {
    id: "Oral Dry Suspensions & Oral Liquids",
    label: "Oral Dry Suspensions & Oral Liquids",
    icon: Baby,
    color: "#276f4b",
    tabName: "Oral Dry Suspensions & Oral Liquids",
  },
  {
    id: "General Injections",
    label: "General Injections",
    icon: Syringe,
    color: "#276f4b",
    tabName: "General Injections",
  },
  {
    id: "Eye, Ear & Nasal Drops",
    label: "Eye, Ear & Nasal Drops",
    icon: Eye,
    color: "#276f4b",
    tabName: "Eye, Ear & Nasal Drops",
  },
  {
    id: "External Preparations",
    label: "External Preparations",
    icon: Hand,
    color: "#276f4b",
    tabName: "External Preparations",
  },
  {
    id: "Oral Powders (Sachet)",
    label: "Oral Powders (Sachet)",
    icon: Package,
    color: "#276f4b",
    tabName: "Oral Powders (Sachet)",
  },
  {
    id: "Products Under Development",
    label: "Products Under Development",
    icon: TestTube2,
    color: "#276f4b",
    tabName: "Products Under Development",
  },
  {
    id: "Ointments, Cream, Gel, Lotion & Shampoo",
    label: "Ointments, Cream, Gel, Lotion & Shampoo",
    icon: Sparkles,
    color: "#276f4b",
    tabName: "Ointments, Cream, Gel, Lotion & Shampoo",
  },
];
