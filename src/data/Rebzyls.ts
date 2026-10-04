export const RebzyLS = {
  product: {
    name: "REBZY-LS",
    tagline:
      "Dual-Action Gastrointestinal Therapy with Acid Suppression and Gastroprokinetic Support",
    brand: "REBZY-LS",
    category: "Prescription Gastrointestinal Medicine",
    website_classification: "Proton Pump Inhibitor + Gastroprokinetic",
    dosage_form: "Hard Gelatin Capsule",
    target_group:
      "Adults requiring prescription treatment for GERD or selected dyspeptic symptoms",
    primary_focus: [
      "Gastroesophageal reflux disease (GERD)",
      "Functional dyspepsia",
      "Acid-related dyspeptic symptoms",
      "Gastrointestinal motility disturbances",
      "Post-meal fullness, bloating and early satiety",
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
        name: "Rabeprazole Sodium",
        quantity_per_tablet: "20 mg, as enteric-coated pellets",
        rda_percent: null,
      },
      {
        name: "Levosulpiride",
        quantity_per_tablet: "75 mg, as sustained-release pellets",
        rda_percent: null,
      },
    ],
    rda_note: null,
    other_ingredients: ["Excipients q.s.", "Titanium Dioxide IP"],
  },

  product_introduction:
    "REBZY-LS combines Rabeprazole 20 mg, a proton pump inhibitor that suppresses gastric acid secretion, with Levosulpiride SR 75 mg, a dopamine D₂-receptor antagonist with gastroprokinetic activity. The combination is designed to address acid-related symptoms together with gastrointestinal motility disturbances, particularly in appropriately selected patients with GERD or dyspeptic symptoms.",

  key_highlights: [
    "Rabeprazole 20 mg + Levosulpiride SR 75 mg in a single capsule",
    "Dual approach combining acid suppression and improved gastrointestinal motility",
    "Rabeprazole provides potent suppression of gastric acid secretion",
    "Levosulpiride enhances gastrointestinal motility through dopamine D₂ receptor antagonism",
    "Enteric-coated rabeprazole pellets help protect the drug from gastric acid",
    "Sustained-release levosulpiride provides prolonged delivery of the prokinetic component",
  ],

  intended_uses: [
    {
      area: "Gastroesophageal Reflux Disease",
      description:
        "May be prescribed for GERD with associated dyspeptic or motility-related symptoms.",
    },
    {
      area: "Functional Dyspepsia",
      description:
        "May be considered particularly when symptoms such as post-meal fullness, bloating or early satiety are prominent.",
    },
    {
      area: "Acid-Related Dyspeptic Symptoms",
      description:
        "May be prescribed for acid-related dyspeptic symptoms associated with impaired gastric motility.",
    },
    {
      area: "Inadequately Controlled Reflux Symptoms",
      description:
        "May be considered in selected patients whose reflux symptoms are inadequately controlled with acid suppression alone.",
    },
  ],

  key_benefits: [
    "Suppresses gastric acid secretion through proton pump inhibition",
    "Supports gastrointestinal motility through levosulpiride's gastroprokinetic activity",
    "May help with postprandial fullness, bloating and early satiety",
    "Addresses acid secretion and gastrointestinal motility through complementary mechanisms",
    "Enteric-coated and sustained-release components provide differentiated drug delivery",
  ],

  claim_guidelines: {
    preferred_language: null,
    avoid_claims: [
      "Do not self-medicate for persistent acidity or recurrent dyspepsia",
      "Do not use for persistent or recurrent gastrointestinal symptoms without medical evaluation",
      "Do not use levosulpiride-containing medicines concurrently unless advised by a physician",
    ],
  },

  why_this_combination: [
    {
      ingredient: "Rabeprazole",
      quantity: "20 mg",
      description:
        "Is activated in the acidic environment of gastric parietal cells and inhibits the H⁺/K⁺-ATPase proton pump, suppressing the final stage of gastric acid secretion.",
    },
    {
      ingredient: "Levosulpiride SR",
      quantity: "75 mg",
      description:
        "Blocks dopamine D₂ receptors in the gastrointestinal tract, reducing inhibitory dopaminergic signalling and promoting coordinated gastrointestinal motility.",
    },
  ],

  how_it_works: {
    description:
      "REBZY-LS combines gastric acid suppression through Rabeprazole with gastroprokinetic activity through Levosulpiride.",
    steps: [
      {
        stage: 1,
        title: "Gastric Proton Pump Inhibition",
        ingredients: ["Rabeprazole"],
      },
      {
        stage: 2,
        title: "Dopamine D₂-Receptor Blockade",
        ingredients: ["Levosulpiride"],
      },
      {
        stage: 3,
        title: "Complementary Gastrointestinal Symptom Control",
        ingredients: ["Rabeprazole", "Levosulpiride"],
      },
    ],
    outcome:
      "Supports control of acid-related symptoms together with dyspeptic or motility-related symptoms when both require treatment.",
    disclaimer: null,
  },

  scientific_rationale:
    "GERD and functional dyspepsia may involve overlapping mechanisms including gastric acid exposure, impaired gastric emptying and altered upper gastrointestinal sensitivity. Rabeprazole is an established proton pump inhibitor for acid-related disorders, while clinical studies have shown levosulpiride can improve dyspeptic symptoms and gastric emptying in selected patients. Combining acid suppression with a prokinetic can therefore provide complementary symptom control in appropriately selected patients.",

  who_can_use_it: {
    target_group:
      "Adults requiring prescription treatment for GERD or selected dyspeptic symptoms",
    suitable_for: [
      "GERD with dyspeptic or motility-related symptoms",
      "Functional dyspepsia",
      "Acid-related dyspeptic symptoms associated with impaired gastric motility",
      "Patients with inadequate symptom control with acid suppression alone",
    ],
    positioning:
      "May be considered when acid-related symptoms coexist with symptoms suggestive of impaired gastrointestinal motility. Patient selection should take into account the underlying diagnosis, duration of symptoms, concomitant medicines and individual risk factors.",
  },

  when_to_use: {
    recommended_situations: [
      "When GERD or acid-related symptoms coexist with dyspeptic or motility-related symptoms",
      "When post-meal fullness, bloating or early satiety are clinically significant",
      "In selected patients with inadequate symptom control with acid suppression alone",
      "As directed by the treating physician",
    ],
    label_duration: null,
  },

  recommended_usage: {
    dosage: "As directed by physician",
    timing: "Commonly administered once daily before food when prescribed",
    alternative: null,
    recommended_duration: "Follow the prescribed duration of treatment",
    maximum_usage: null,
  },

  cautions: {
    consult_healthcare_professional_if: [
      "Have hyperprolactinemia, prolactin-dependent tumors or breast disorders",
      "Have epilepsy or seizure disorders",
      "Have pheochromocytoma",
      "Have gastrointestinal bleeding, mechanical obstruction or perforation",
      "Have significant renal impairment",
      "Have significant hepatic impairment",
      "Have conditions associated with cardiac rhythm abnormalities or medicines affecting cardiac conduction",
      "Are pregnant or breastfeeding",
      "Have unexplained weight loss, recurrent vomiting, dysphagia, gastrointestinal bleeding or anemia",
    ],
    special_attention:
      "Levosulpiride can increase prolactin levels and may cause galactorrhoea, menstrual abnormalities, breast tenderness or gynecomastia. Its antidopaminergic activity may also cause neurological adverse effects. Patients with alarm features should be medically evaluated before prolonged acid-suppressive treatment.",
  },

  possible_side_effects: {
    note: "Possible gastrointestinal, endocrine and neurological adverse effects may occur during treatment with REBZY-LS.",
    possible_effects: [
      "Abdominal discomfort",
      "Diarrhea",
      "Constipation",
      "Nausea",
      "Headache",
      "Dizziness",
      "Drowsiness",
      "Fatigue",
      "Increased prolactin levels",
      "Galactorrhoea",
      "Menstrual disturbances",
      "Extrapyramidal symptoms such as tremor or abnormal movements",
    ],
    action:
      "Report breast discharge, menstrual changes, breast enlargement or abnormal movements. Seek medical evaluation for persistent vomiting, gastrointestinal bleeding, difficulty swallowing or unexplained weight loss.",
  },

  dos_and_donts: {
    dos: [
      "Use only on medical advice.",
      "Take the capsule as prescribed, preferably before food when directed.",
      "Swallow the capsule whole.",
      "Inform the physician about all current medicines.",
      "Report breast discharge, menstrual changes, breast enlargement or abnormal movements.",
      "Seek medical evaluation for persistent vomiting, gastrointestinal bleeding, difficulty swallowing or unexplained weight loss.",
    ],
    donts: [
      "Do not chew, open or crush the capsule.",
      "Do not exceed the prescribed dose.",
      "Do not self-medicate for persistent acidity or recurrent dyspepsia.",
      "Do not use levosulpiride-containing medicines concurrently unless advised by the physician.",
      "Do not ignore persistent or recurrent gastrointestinal symptoms despite treatment.",
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
    brand: "REBZY-LS",
    product: "REBZY-LS",
    category: "Prescription Gastrointestinal Medicine",
    health_area: "Gastrointestinal Disorders",
    product_focus: "Acid Suppression and Gastrointestinal Motility Support",
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
      "Adults requiring prescription treatment for GERD or selected dyspeptic symptoms",
    recommended_use: "As directed by physician",
    suggested_label_duration: null,
  },

  manufacturing_and_marketing: {
    marketed_by: {
      company: null,
      address: null,
      customer_care: null,
      email: null,
      website: null,
    },
    manufactured_by: {
      company: "Hiral Labs Ltd.",
      address:
        "Khasra No. 138, Raipur Industrial Area, Selaqui, Dehradun, Uttarakhand",
    },
    fssai_licence_number: null,
  },

  short_website_listing:
    "REBZY-LS — Rabeprazole 20 mg with Levosulpiride SR 75 mg for physician-directed management of acid-related gastrointestinal symptoms with associated dyspeptic or motility-related symptoms.",
};
