// URIMAI MED - Clinical Triage Dataset (COMPLIANCE PATCH APPLIED)
// 30 symptom scenarios with red-flag detection and care routing
// ALL MEDICAL LANGUAGE REMOVED - NAVIGATION-ONLY OUTPUT

export const triageDataset = [
    // RED-FLAG SYMPTOMS (Emergency - 10 total including DVT/Mental State)
    {
        id: 1,
        userInput: "I have crushing chest pain",
        normalizedSymptom: "Chest Pain",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Immediate cardiac evaluation required."
    },
    {
        id: 2,
        userInput: "Can't catch my breath at all",
        normalizedSymptom: "Shortness of Breath",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Urgent respiratory support needed."
    },
    {
        id: 3,
        userInput: "Right side of my face is drooping",
        normalizedSymptom: "Facial Droop",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Stroke protocol: Seek ER immediately."
    },
    {
        id: 4,
        userInput: "Worst headache of my life",
        normalizedSymptom: "Thunderclap Headache",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Potential neurological emergency."
    },
    {
        id: 5,
        userInput: "Coughed up a lot of blood",
        normalizedSymptom: "Hemoptysis",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Severe internal irritation/bleeding risk."
    },
    {
        id: 6,
        userInput: "My throat is closing up",
        normalizedSymptom: "Anaphylaxis Signs",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Severe allergic reaction protocol."
    },
    {
        id: 27,
        userInput: "I feel confused and disoriented",
        normalizedSymptom: "Altered Mental State",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Immediate safety and neuro check."
    },
    {
        id: 29,
        userInput: "Leg is hot, red, and swollen",
        normalizedSymptom: "DVT Suspicion",
        isRedFlag: true,
        severity: "High",
        careRouting: "Emergency",
        guidance: "Risk of vascular complication."
    },

    // LOW SEVERITY (Home Care)
    {
        id: 7,
        userInput: "Mild cough for two days",
        normalizedSymptom: "Cough (Dry)",
        isRedFlag: false,
        severity: "Low",
        careRouting: "Home Care",
        guidance: "Monitor rest, fluids, and temperature."
    },
    {
        id: 8,
        userInput: "Slightly scratchy throat",
        normalizedSymptom: "Sore Throat",
        isRedFlag: false,
        severity: "Low",
        careRouting: "Home Care",
        guidance: "Warm liquids and rest recommended."
    },
    {
        id: 9,
        userInput: "Feeling a bit tired lately",
        normalizedSymptom: "Fatigue",
        isRedFlag: false,
        severity: "Low",
        careRouting: "Home Care",
        guidance: "Track sleep patterns and nutrition."
    },
    {
        id: 10,
        userInput: "Minor runny nose and sneezing",
        normalizedSymptom: "Nasal Congestion",
        isRedFlag: false,
        severity: "Low",
        careRouting: "Home Care",
        guidance: "Standard seasonal care; avoid irritants."
    },
    {
        id: 11,
        userInput: "Small itchy patch on my arm",
        normalizedSymptom: "Skin Rash (Localized)",
        isRedFlag: false,
        severity: "Low",
        careRouting: "Home Care",
        guidance: "Monitor for spreading or swelling."
    },
    {
        id: 12,
        userInput: "Dull ache in lower back",
        normalizedSymptom: "Back Pain (Mild)",
        isRedFlag: false,
        severity: "Low",
        careRouting: "Home Care",
        guidance: "Gentle stretching and posture review."
    },

    // MODERATE SEVERITY (GP)
    {
        id: 13,
        userInput: "Persistent fever for 4 days",
        normalizedSymptom: "Pyrexia (Prolonged)",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Requires physical exam to find source."
    },
    {
        id: 14,
        userInput: "Pain when I urinate",
        normalizedSymptom: "Dysuria",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Consultation for potential infection."
    },
    {
        id: 18,
        userInput: "Large lump on my neck",
        normalizedSymptom: "Lymphadenopathy",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Clinical assessment of tissue growth."
    },
    {
        id: 19,
        userInput: "I feel dizzy when I stand up",
        normalizedSymptom: "Orthostatic Vertigo",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Blood pressure and hydration review."
    },
    {
        id: 20,
        userInput: "Extreme thirst and frequent pee",
        normalizedSymptom: "Polydipsia/Polyuria",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Metabolic screening recommended."
    },
    {
        id: 21,
        userInput: "Stomach hurts after eating",
        normalizedSymptom: "Abdominal Pain",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Digestive system review needed."
    },
    {
        id: 22,
        userInput: "Ankle is swollen and blue",
        normalizedSymptom: "Sprain/Trauma",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "X-ray/Physical assessment of injury."
    },
    {
        id: 26,
        userInput: "Severe earache and fluid",
        normalizedSymptom: "Otalgia",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Inspection of the ear canal required."
    },
    {
        id: 28,
        userInput: "Constant vomiting, can't hold water",
        normalizedSymptom: "Dehydration Risk",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP/Urgent",
        guidance: "Fluid replacement and cause analysis."
    },
    {
        id: 30,
        userInput: "I don't know, I just feel 'off'",
        normalizedSymptom: "Vague Malaise",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "GP",
        guidance: "Ambiguity Trigger: Consult for baseline."
    },

    // MODERATE/HIGH SEVERITY (Specialist)
    {
        id: 15,
        userInput: "Sudden blurry vision in one eye",
        normalizedSymptom: "Vision Change",
        isRedFlag: false,
        severity: "High",
        careRouting: "Specialist",
        guidance: "Immediate Ophthalmologist referral."
    },
    {
        id: 16,
        userInput: "Hearing a constant ringing",
        normalizedSymptom: "Tinnitus",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "Specialist",
        guidance: "ENT evaluation for auditory health."
    },
    {
        id: 17,
        userInput: "Sharp pain in my big toe",
        normalizedSymptom: "Joint Pain (Acute)",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "Specialist",
        guidance: "Podiatry or Rheumatology consultation."
    },
    {
        id: 23,
        userInput: "Feeling very sad for weeks",
        normalizedSymptom: "Low Mood",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "Specialist",
        guidance: "Mental health professional referral."
    },
    {
        id: 24,
        userInput: "My heart is skipping beats",
        normalizedSymptom: "Palpitations",
        isRedFlag: false,
        severity: "High",
        careRouting: "Specialist",
        guidance: "Cardiology assessment for rhythm."
    },
    {
        id: 25,
        userInput: "I have a weird mole changing color",
        normalizedSymptom: "Skin Lesion",
        isRedFlag: false,
        severity: "Moderate",
        careRouting: "Specialist",
        guidance: "Dermatology screening for skin health."
    }
];

// Extract unique normalized symptoms for matching
export const normalizedSymptoms = [
    ...new Set(triageDataset.map(item => item.normalizedSymptom))
];

// Red-flag symptoms list
export const redFlagSymptoms = triageDataset
    .filter(item => item.isRedFlag)
    .map(item => item.normalizedSymptom);
