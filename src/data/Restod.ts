export const RestoD = {
  product: {
    name: "RESTO-D",
    tagline:
      "Dual-Action Gastrointestinal Therapy with Acid Suppression and Gastroprokinetic Support",
    brand: "RESTO-D",
    category: "Prescription Gastrointestinal Medicine",
    website_classification:
      "Proton Pump Inhibitor + Gastroprokinetic/Antiemetic",
    dosage_form: "Hard Gelatin Capsule",
    target_group:
      "Adults requiring prescription treatment for acid-related gastrointestinal symptoms with associated nausea, vomiting or motility-related symptoms",
    primary_focus: [
      "Acid-related gastrointestinal symptoms",
      "Nausea and vomiting",
      "Gastrointestinal motility disturbances",
      "GERD with associated nausea or regurgitation",
      "Post-meal gastrointestinal discomfort",
    ],
    pack_size: {
      quantity: 100,
      unit: "Capsules",
    },
  },

  composition: {
    serving_size: {
      quantity: 1,
      unit: "Capsule",
      approx_weight: null,
    },
    servings_per_container: 100,
    ingredients: [
      {
        name: "Pantoprazole Sodium equivalent to Pantoprazole",
        quantity_per_tablet: "40 mg, as enteric-coated pellets",
        rda_percent: null,
      },
      {
        name: "Domperidone",
        quantity_per_tablet: "30 mg, as sustained-release pellets",
        rda_percent: null,
      },
    ],
    rda_note: null,
    other_ingredients: ["Excipients q.s.", "Approved colour"],
  },

  product_introduction:
    "RESTO-D combines Pantoprazole 40 mg, a proton pump inhibitor that suppresses gastric acid secretion, with Domperidone SR 30 mg, a peripheral dopamine D₂-receptor antagonist with gastroprokinetic and antiemetic activity. The combination is intended for appropriately selected patients in whom acid-related gastrointestinal symptoms are accompanied by nausea, vomiting or symptoms associated with delayed gastric emptying. Pantoprazole provides acid suppression, while domperidone promotes upper gastrointestinal motility and provides antiemetic activity.",

  key_highlights: [
    "Pantoprazole 40 mg + Domperidone SR 30 mg in a single capsule",
    "Dual approach combining acid suppression and gastrointestinal motility/antiemetic action",
    "Pantoprazole inhibits the gastric H⁺/K⁺-ATPase proton pump",
    "Domperidone acts predominantly through peripheral dopamine D₂-receptor blockade",
    "Enteric-coated pantoprazole pellets help deliver the acid-sensitive PPI beyond the stomach",
    "Sustained-release domperidone pellets provide prolonged release of the prokinetic component",
  ],

  intended_uses: [
    {
      area: "GERD or Acid-Related Symptoms with Nausea or Regurgitation",
      description:
        "May be prescribed when acid-related symptoms are accompanied by nausea or regurgitation and both components are clinically indicated.",
    },
    {
      area: "Dyspeptic Symptoms",
      description:
        "May be considered for dyspeptic symptoms associated with impaired upper gastrointestinal motility.",
    },
    {
      area: "Nausea, Vomiting or Post-Meal Discomfort",
      description:
        "May be prescribed when nausea, vomiting or post-meal discomfort accompanies acid-related gastrointestinal symptoms.",
    },
    {
      area: "Selected Short-Term Antiemetic/Prokinetic Treatment",
      description:
        "May be considered in selected patients requiring acid suppression together with short-term antiemetic or prokinetic treatment.",
    },
  ],

  key_benefits: [
    "Suppresses gastric acid secretion through proton pump inhibition",
    "Supports upper gastrointestinal motility through peripheral dopamine D₂-receptor blockade",
    "Provides antiemetic activity for appropriate short-term use",
    "Addresses gastric acid secretion and nausea/motility-related symptoms through complementary mechanisms",
    "Enteric-coated and sustained-release pellets provide differentiated drug delivery",
  ],

  claim_guidelines: {
    preferred_language: null,
    avoid_claims: [
      "Do not self-medicate for persistent or recurrent gastrointestinal symptoms",
      "Do not continue domperidone-containing treatment longer than prescribed",
      "Do not use domperidone with QT-prolonging or potent CYP3A4-inhibiting medicines without medical supervision",
    ],
  },

  why_this_combination: [
    {
      ingredient: "Pantoprazole",
      quantity: "40 mg",
      description:
        "Is activated in the acidic environment of gastric parietal cells and inhibits the H⁺/K⁺-ATPase proton pump, suppressing the final stage of gastric acid secretion.",
    },
    {
      ingredient: "Domperidone SR",
      quantity: "30 mg",
      description:
        "Blocks peripheral dopamine D₂ receptors, reducing dopamine-mediated inhibition of gastrointestinal motor activity and promoting upper gastrointestinal motility while contributing to its antiemetic effect.",
    },
  ],

  how_it_works: {
    description:
      "RESTO-D combines gastric acid suppression through Pantoprazole with gastroprokinetic and antiemetic activity through Domperidone.",
    steps: [
      {
        stage: 1,
        title: "Gastric Proton Pump Inhibition",
        ingredients: ["Pantoprazole"],
      },
      {
        stage: 2,
        title: "Peripheral Dopamine D₂-Receptor Blockade",
        ingredients: ["Domperidone"],
      },
      {
        stage: 3,
        title: "Complementary Gastrointestinal Symptom Control",
        ingredients: ["Pantoprazole", "Domperidone"],
      },
    ],
    outcome:
      "Supports control of acid-related gastrointestinal symptoms together with nausea, vomiting or motility-related symptoms when both require treatment.",
    disclaimer: null,
  },

  scientific_rationale:
    "GERD and upper gastrointestinal dyspeptic symptoms can involve gastric acid exposure together with impaired gastric motility, nausea or regurgitation. Pantoprazole provides sustained suppression of gastric acid secretion, while domperidone provides complementary pharmacological action through peripheral dopamine D₂-receptor antagonism. Domperidone has important cardiovascular precautions, including a small but clinically important risk of QT prolongation, serious ventricular arrhythmias and sudden cardiac death. It should therefore be used at the lowest effective dose for the shortest appropriate duration in carefully selected patients.",

  who_can_use_it: {
    target_group:
      "Adults requiring prescription treatment for acid-related gastrointestinal symptoms with associated nausea, vomiting or motility-related symptoms",
    suitable_for: [
      "Acid-related gastrointestinal symptoms with nausea or vomiting",
      "GERD with associated nausea or regurgitation",
      "Dyspeptic symptoms associated with impaired upper gastrointestinal motility",
      "Selected patients requiring PPI therapy together with an antiemetic/prokinetic agent",
    ],
    positioning:
      "May be considered when acid-related gastrointestinal symptoms coexist with nausea, vomiting or motility-related symptoms and the physician determines that both components are appropriate. Patient selection should consider cardiovascular status, concomitant medicines, liver function and the underlying cause of gastrointestinal symptoms.",
  },

  when_to_use: {
    recommended_situations: [
      "When acid-related symptoms coexist with nausea or vomiting and both require treatment",
      "When upper gastrointestinal symptoms are accompanied by motility-related complaints",
      "In selected patients requiring PPI therapy together with an antiemetic/prokinetic agent",
      "As directed by the treating physician",
    ],
    label_duration: null,
  },

  recommended_usage: {
    dosage: "As directed by physician",
    timing:
      "Generally administered before food when prescribed for acid-related symptoms",
    alternative: null,
    recommended_duration:
      "Follow the prescribed dose and duration; do not extend domperidone treatment without medical review",
    maximum_usage: null,
  },

  cautions: {
    consult_healthcare_professional_if: [
      "Have QT prolongation, cardiac conduction abnormalities or significant arrhythmias",
      "Have underlying cardiac disease, including congestive heart failure",
      "Have significant electrolyte disturbances such as hypokalaemia or hypomagnesaemia",
      "Have moderate or severe hepatic impairment",
      "Are taking QT-prolonging medicines",
      "Are taking potent CYP3A4 inhibitors",
      "Have significant renal impairment, particularly when repeated domperidone administration is required",
      "Are pregnant or breastfeeding",
    ],
    special_attention:
      "Domperidone-associated cardiac risk is greater in patients over 60 years of age, at doses above 30 mg/day and when combined with QT-prolonging medicines or potent CYP3A4 inhibitors. Domperidone should be used at the lowest effective dose for the shortest appropriate duration. Patients experiencing palpitations, fainting or other symptoms suggestive of an abnormal heart rhythm require prompt medical evaluation.",
  },

  possible_side_effects: {
    note: "Possible gastrointestinal, endocrine and cardiovascular adverse effects may occur during treatment with RESTO-D.",
    possible_effects: [
      "Headache",
      "Abdominal discomfort or cramps",
      "Diarrhea",
      "Constipation",
      "Dry mouth",
      "Nausea",
      "Dizziness",
      "Drowsiness",
      "Increased prolactin levels",
      "Breast tenderness",
      "Galactorrhoea",
      "Menstrual disturbances",
      "QT prolongation",
      "Torsade de pointes",
      "Serious ventricular arrhythmias",
    ],
    action:
      "Report palpitations, fainting or unusual dizziness promptly. Seek evaluation for persistent vomiting, gastrointestinal bleeding, difficulty swallowing or unexplained weight loss.",
  },

  dos_and_donts: {
    dos: [
      "Use only on medical advice.",
      "Take the capsule exactly as prescribed.",
      "Swallow the capsule whole.",
      "Inform the physician about cardiac disease and all current medicines.",
      "Inform the physician if taking medicines that affect cardiac rhythm.",
      "Report palpitations, fainting or unusual dizziness promptly.",
      "Seek evaluation for persistent vomiting, gastrointestinal bleeding, difficulty swallowing or unexplained weight loss.",
    ],
    donts: [
      "Do not chew, open or crush the capsule.",
      "Do not exceed the prescribed dose.",
      "Do not combine with other domperidone-containing medicines unless specifically advised.",
      "Do not use with QT-prolonging or potent CYP3A4-inhibiting medicines without medical supervision.",
      "Do not continue domperidone-containing treatment longer than prescribed.",
      "Do not self-medicate for persistent or recurrent gastrointestinal symptoms.",
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
    brand: "RESTO-D",
    product: "RESTO-D",
    category: "Prescription Gastrointestinal Medicine",
    health_area: "Gastrointestinal Disorders",
    product_focus:
      "Acid Suppression with Gastroprokinetic and Antiemetic Support",
    dosage_form: "Hard Gelatin Capsule",
    serving_size: "1 Capsule",
    pack_size: "10 × 10 Capsules",
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
      "Adults requiring prescription treatment for acid-related gastrointestinal symptoms with associated nausea, vomiting or motility-related symptoms",
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
    "RESTO-D — Pantoprazole 40 mg with Domperidone SR 30 mg for physician-directed management of acid-related gastrointestinal symptoms accompanied by nausea, vomiting or motility-related symptoms.",
};
