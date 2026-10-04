export const Ometron = {
  product: {
    name: "OMETRON™",
    tagline:
      "Dual-Action Gastrointestinal Symptom Management with Acid Suppression and Antiemetic Action",
    brand: "OMETRON™",
    category: "Prescription Gastrointestinal Medicine",
    website_classification: "Proton Pump Inhibitor + 5-HT₃ Receptor Antagonist",
    dosage_form: "Film-Coated Tablet",
    target_group:
      "Adults and other patients when specifically prescribed by a qualified healthcare professional",
    primary_focus: [
      "Acid-related gastrointestinal symptoms",
      "Nausea and vomiting",
      "GERD and erosive esophagitis with associated nausea or vomiting",
      "Complementary acid suppression and antiemetic therapy",
    ],
    pack_size: {
      quantity: 100,
      unit: "Tablets",
    },
  },

  composition: {
    serving_size: {
      quantity: 1,
      unit: "Tablet",
      approx_weight: null,
    },
    servings_per_container: 100,
    ingredients: [
      {
        name: "Pantoprazole Sodium equivalent to Pantoprazole",
        quantity_per_tablet: "40 mg",
        rda_percent: null,
      },
      {
        name: "Ondansetron HCl equivalent to Ondansetron",
        quantity_per_tablet: "4 mg",
        rda_percent: null,
      },
    ],
    rda_note: null,
    other_ingredients: ["Excipients q.s.", "Red Oxide of Iron"],
  },

  product_introduction:
    "OMETRON™ combines Pantoprazole 40 mg, a proton pump inhibitor that suppresses gastric acid secretion, with Ondansetron 4 mg, a selective 5-HT₃ receptor antagonist used to prevent and control nausea and vomiting. The combination provides complementary gastrointestinal symptom management when acid-related symptoms and nausea or vomiting occur together, under medical supervision.",

  key_highlights: [
    "Pantoprazole 40 mg + Ondansetron 4 mg in a single tablet",
    "Dual therapeutic approach combining acid suppression and antiemetic action",
    "Pantoprazole provides sustained suppression of gastric acid secretion through inhibition of the gastric proton pump",
    "Ondansetron selectively blocks 5-HT₃ receptors involved in the vomiting reflex",
    "Useful when nausea or vomiting accompanies gastrointestinal symptoms requiring acid suppression, when prescribed by a physician",
  ],

  intended_uses: [
    {
      area: "Nausea and Vomiting Associated with Gastrointestinal Conditions",
      description:
        "May be prescribed when nausea or vomiting occurs with gastrointestinal conditions requiring acid suppression.",
    },
    {
      area: "Acid-Related Gastrointestinal Symptoms with Nausea or Vomiting",
      description:
        "May be considered when acid-related gastrointestinal symptoms and nausea or vomiting require pharmacological treatment.",
    },
    {
      area: "GERD and Erosive Esophagitis",
      description:
        "May be considered in selected patients with GERD, erosive esophagitis or other acid-related disorders who also require antiemetic therapy.",
    },
    {
      area: "Other Clinically Appropriate Nausea and Vomiting",
      description:
        "May be used for other nausea or vomiting situations where ondansetron is clinically appropriate, according to the treating physician.",
    },
  ],

  key_benefits: [
    "Suppresses gastric acid secretion through proton pump inhibition",
    "Provides antiemetic activity through selective 5-HT₃ receptor blockade",
    "Addresses acid-related symptoms and nausea or vomiting through complementary pharmacological actions",
    "Provides two therapeutic actions in a single prescription tablet",
  ],

  claim_guidelines: {
    preferred_language: null,
    avoid_claims: [
      "Do not use repeatedly for unexplained or persistent vomiting without medical evaluation",
      "Do not use as a substitute for identifying the underlying cause of persistent vomiting",
      "Use the fixed-dose combination only when both acid suppression and antiemetic therapy are clinically indicated",
    ],
  },

  why_this_combination: [
    {
      ingredient: "Pantoprazole",
      quantity: "40 mg",
      description:
        "Is converted to its active form in the acidic environment of gastric parietal cells and covalently inhibits the H⁺/K⁺-ATPase, suppressing the final step of gastric acid secretion.",
    },
    {
      ingredient: "Ondansetron",
      quantity: "4 mg",
      description:
        "Selectively blocks 5-HT₃ receptors involved in peripheral and central pathways of nausea and vomiting, reducing serotonin-mediated emetic signalling.",
    },
  ],

  how_it_works: {
    description:
      "OMETRON™ combines gastric acid suppression through Pantoprazole with targeted antiemetic activity through Ondansetron.",
    steps: [
      {
        stage: 1,
        title: "Gastric Proton Pump Inhibition",
        ingredients: ["Pantoprazole"],
      },
      {
        stage: 2,
        title: "5-HT₃ Receptor Blockade",
        ingredients: ["Ondansetron"],
      },
      {
        stage: 3,
        title: "Complementary Symptom Management",
        ingredients: ["Pantoprazole", "Ondansetron"],
      },
    ],
    outcome:
      "Provides complementary control of acid-related gastrointestinal symptoms and nausea or vomiting when both require treatment.",
    disclaimer: null,
  },

  scientific_rationale:
    "Acid-related gastrointestinal disorders are driven in part by excessive or inappropriate gastric acid exposure, while nausea and vomiting involve complex gastrointestinal and central emetic pathways. Pantoprazole directly suppresses gastric acid secretion and is established for GERD-associated erosive esophagitis and other acid-hypersecretory conditions. Ondansetron provides targeted antiemetic activity through 5-HT₃ receptor blockade. Combining the two agents can provide complementary symptom control in appropriately selected patients who require both acid suppression and antiemetic therapy.",

  who_can_use_it: {
    target_group:
      "Adults and other patients when specifically prescribed by a qualified healthcare professional",
    suitable_for: [
      "Acid-related gastrointestinal symptoms with nausea or vomiting",
      "Patients requiring pantoprazole therapy who also have a clinical indication for ondansetron",
      "Selected patients with GERD or erosive esophagitis who also require antiemetic therapy",
    ],
    positioning:
      "May be considered when acid-related gastrointestinal symptoms coexist with clinically significant nausea or vomiting. Selection should consider the underlying diagnosis, concomitant medicines and individual risk factors.",
  },

  when_to_use: {
    recommended_situations: [
      "When acid-related gastrointestinal symptoms and nausea or vomiting occur together and both require pharmacological treatment",
      "Patients requiring pantoprazole therapy who also have a clinical indication for ondansetron",
      "As directed by the treating physician for the diagnosed gastrointestinal condition",
    ],
    label_duration: null,
  },

  recommended_usage: {
    dosage: "As directed by physician",
    timing: null,
    alternative: null,
    recommended_duration: "Follow the prescribed dose and duration",
    maximum_usage: null,
  },

  cautions: {
    consult_healthcare_professional_if: [
      "Have significant hepatic impairment",
      "Have congenital long-QT syndrome, cardiac arrhythmias or electrolyte abnormalities",
      "Are taking other medicines known to prolong the QT interval",
      "Are taking serotonergic medicines",
      "Require long-term or repeated proton pump inhibitor therapy",
      "Are pregnant or breastfeeding",
    ],
    special_attention:
      "Ondansetron can prolong the QT interval, and caution is required in patients with cardiac risk factors or concomitant QT-prolonging medicines. Serotonin syndrome has been reported with ondansetron, particularly with other serotonergic medicines. Ondansetron exposure may increase in significant hepatic impairment. Pregnancy and breastfeeding should be discussed with the treating physician before use.",
  },

  possible_side_effects: {
    note: "Possible gastrointestinal and other adverse effects may occur during treatment with OMETRON™.",
    possible_effects: [
      "Headache",
      "Nausea",
      "Abdominal discomfort",
      "Diarrhea",
      "Constipation",
      "Flatulence",
      "Vomiting",
      "Dizziness",
      "Fatigue",
      "QT-interval prolongation",
      "Hypersensitivity reactions",
    ],
    action:
      "Seek medical attention for palpitations, fainting or other symptoms suggestive of an abnormal heart rhythm. Report persistent vomiting, severe abdominal pain, blood in vomit or stool, or unexplained weight loss.",
  },

  dos_and_donts: {
    dos: [
      "Use only on medical advice.",
      "Take the medicine exactly according to the prescribed schedule.",
      "Inform the physician about all current medicines, particularly cardiac and serotonergic medicines.",
      "Report persistent vomiting, severe abdominal pain, blood in vomit or stool, or unexplained weight loss.",
      "Seek medical attention for palpitations, fainting or other symptoms suggestive of an abnormal heart rhythm.",
    ],
    donts: [
      "Do not self-medicate for persistent or recurrent vomiting.",
      "Do not exceed the prescribed dose.",
      "Do not combine with other ondansetron-containing medicines unless advised.",
      "Do not ignore recurrent gastrointestinal symptoms simply because nausea improves.",
      "Do not discontinue long-term acid-suppressive therapy without medical advice.",
    ],
  },

  storage: {
    temperature: null,
    conditions: [],
    best_before: null,
  },

  regulatory_information: {
    fssai_licence_number: null,
  },

  fact_box: {
    brand: "OMETRON™",
    product: "OMETRON™",
    category: "Prescription Gastrointestinal Medicine",
    health_area: "Gastrointestinal Symptoms",
    product_focus: "Acid Suppression and Antiemetic Symptom Management",
    dosage_form: "Film-Coated Tablet",
    serving_size: "1 Tablet",
    pack_size: "10 × 10 Tablets",
    cissus_quadrangularis: null,
    calcium_citrate: null,
    magnesium_oxide: null,
    boswellia_serrata: null,
    undenatured_type_ii_collagen: null,
    boron: null,
    zinc: null,
    vitamin_d3: null,
    vitamin_k2_7: null,
    target_group:
      "Adults and other patients when specifically prescribed by a qualified healthcare professional",
    recommended_use: "As directed by physician",
    suggested_label_duration: null,
  },

  manufacturing_and_marketing: {
    marketed_by: {
      company: "Gamete Health Care Pvt. Ltd.",
      address: null,
      customer_care: null,
      email: null,
      website: null,
    },
    manufactured_by: {
      company: "Hiral Labs Ltd.",
      address: "Sison, Near Bhagwanpur, Roorkee, Uttarakhand",
    },
    fssai_licence_number: null,
  },

  short_website_listing:
    "OMETRON™ — Pantoprazole 40 mg with Ondansetron 4 mg for physician-directed management when acid-related gastrointestinal symptoms and nausea or vomiting require complementary therapy.",
};
