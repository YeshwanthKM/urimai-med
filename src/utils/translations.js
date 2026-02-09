export const translations = {
    en: {
        normalized_symptoms: "Normalized Symptoms",
        red_flag_detected: "Red-Flag Detected",
        severity: "Severity Classification",
        care_navigation: "Care Navigation",
        reasoning: "Reasoning",
        guidance: "Guidance",
        emergency: "Emergency",
        specialist: "Specialist",
        gp: "GP",
        home_care: "Home Care",
        high: "High",
        moderate: "Moderate",
        low: "Low",
        yes: "Yes",
        no: "No",
        disclaimer: "I am a navigation and triage support system, not a medical professional. I do not provide diagnoses or treatment advice. If you believe this is an emergency, seek immediate medical help.",
        diagnosis_rejection_title: "Diagnosis Not Supported",
        diagnosis_rejection_help: "Please describe your symptoms if you would like navigation assistance.",
        greeting_title: "Hello! I am URIMAI MED",
        greeting_message: "I am a clinical triage assistant designed to help you navigate to the right level of care. I do not provide diagnoses.",
        greeting_help: "Please describe your symptoms to begin the triage assessment (e.g., 'I have a fever' or 'My head hurts').",
        unclear_general_guidance: "Symptoms not clearly identified. Professional assessment by a General Practitioner is recommended.",
        unclear_general_reasoning: "The symptoms described do not match predefined high-risk patterns. Routing to GP for a standard professional assessment as a precaution."
    },
    ta: {
        normalized_symptoms: "சீரமைக்கப்பட்ட அறிகுறிகள்",
        red_flag_detected: "அபாய எச்சரிக்கை கண்டறியப்பட்டது",
        severity: "தீவிர வகைப்பாடு",
        care_navigation: "சிகிச்சை வழிகாட்டுதல்",
        reasoning: "காரணம்",
        guidance: "வழிகாட்டுதல்",
        emergency: "அவசர சிகிச்சை",
        specialist: "நிபுணர்",
        gp: "பொது மருத்துவர்",
        home_care: "வீட்டு பராமரிப்பு",
        high: "அதிகம்",
        moderate: "மிதமான",
        low: "குறைவான",
        yes: "ஆம்",
        no: "இல்லை",
        disclaimer: "நான் ஒரு வழிகாட்டுதல் மற்றும் மருத்துவ உதவி அமைப்பு, மருத்துவ நிபுணர் அல்ல. நான் நோயறிதல் அல்லது சிகிச்சை ஆலோசனைகளை வழங்குவதில்லை. இது அவசரநிலை என்று நீங்கள் நம்பினால், உடனடியாக மருத்துவ உதவியை நாடுங்கள்.",
        diagnosis_rejection_title: "நோயறிதல் ஆதரிக்கப்படவில்லை",
        diagnosis_rejection_help: "வழிகாட்டுதல் உதவி தேவைப்பட்டால் உங்கள் அறிகுறிகளை விவரிக்கவும்.",
        greeting_title: "வணக்கம்! நான் URIMAI MED",
        greeting_message: "நான் ஒரு மருத்துவ வகைப்பாடு உதவியாளர். உங்கள் அறிகுறிகளின் அடிப்படையில் சரியான சிகிச்சை முறைக்கு உங்களை வழிநடத்த உதவுவேன். நான் நோயறிதல் செய்வதற்கு வடிவமைக்கப்படவில்லை.",
        greeting_help: "வகைப்பாட்டைத் தொடங்க உங்கள் அறிகுறிகளை விவரிக்கவும் (எ.கா. 'எனக்கு காய்ச்சல் உள்ளது' அல்லது 'எனக்கு தலைவலிக்கிறது').",
        unclear_general_guidance: "அறிகுறிகள் தெளிவாகக் கண்டறியப்படவில்லை. பொது மருத்துவரை அணுகி ஆலோசனை பெறுவது பரிந்துரைக்கப்படுகிறது.",
        unclear_general_reasoning: "விவரிக்கப்பட்ட அறிகுறிகள் முன்பே வரையறுக்கப்பட்ட அதிக அபாய வடிவங்களுடன் பொருந்தவில்லை. முன்னெச்சரிக்கையாக ஒரு பொது மருத்துவரிடம் ஆலோசனை பெற பரிந்துரைக்கப்படுகிறது."
    }
};

export const symptomTranslations = {
    "Chest Pain": "நெஞ்சு வலி",
    "Shortness of Breath": "மூச்சுத் திணறல்",
    "Facial Droop": "முகம் தளர்ச்சி",
    "Thunderclap Headache": "கடுமையான தலைவலி",
    "Hemoptysis": "இரத்தக் கசிவு (இருமல்)",
    "Anaphylaxis Signs": "ஒவ்வாமை அறிகுறிகள்",
    "Altered Mental State": "மனநிலை மாற்றம்",
    "DVT Suspicion": "இரத்த உறைதல் சந்தேகம்",
    "Cough (Dry)": "இருமல் (உலர்)",
    "Sore Throat": "தொண்டை வலி",
    "Fatigue": "சோர்வு",
    "Nasal Congestion": "மூக்கடைப்பு",
    "Skin Rash (Localized)": "தோலில் தடிப்புகள்",
    "Back Pain (Mild)": "முதுகு வலி (மிதமான)",
    "Pyrexia (Prolonged)": "நீடித்த காய்ச்சல்",
    "Dysuria": "சிறுநீர் கழிப்பதில் வலி",
    "Lymphadenopathy": "நிணநீர் சுரப்பி வீக்கம்",
    "Orthostatic Vertigo": "தலைசுற்றல்",
    "Polydipsia/Polyuria": "அதிக தாகம்/சிறுநீர்",
    "Abdominal Pain": "வயிற்று வலி",
    "Sprain/Trauma": "சுளுக்கு/காயம்",
    "Otalgia": "காது வலி",
    "Dehydration Risk": "நீர்ச்சத்து குறைபாடு அபாயம்",
    "Vague Malaise": "உடல்நலக்குறைவு (தெளிவற்ற)",
    "Vision Change": "பார்வை மாற்றம்",
    "Tinnitus": "காது இரைச்சல்",
    "Joint Pain (Acute)": "மூட்டு வலி",
    "Low Mood": "மனச்சோர்வு",
    "Palpitations": "இதயத் துடிப்பு",
    "Skin Lesion": "தோல் நோய்",
    "Unclear": "தெளிவற்றது"
};

export const guidanceTranslations = {
    // Emergency
    "Immediate cardiac evaluation required.": "உடனடி இருதய மதிப்பீடு தேவை.",
    "Urgent respiratory support needed.": "உடனடி சுவாச உதவி தேவை.",
    "Stroke protocol: Seek ER immediately.": "பக்கவாதம் நெறிமுறை: உடனடியாக அவசர சிகிச்சையை நாடவும்.",
    "Potential neurological emergency.": "சாத்தியமான நரம்பியல் அவசரநிலை.",
    "Severe internal irritation/bleeding risk.": "கடுமையான உட்புற எரிச்சல்/இரத்தப்போக்கு அபாயம்.",
    "Severe allergic reaction protocol.": "கடுமையான ஒவ்வாமை எதிர்வினை நெறிமுறை.",
    "Immediate safety and neuro check.": "உடனடி பாதுகாப்பு மற்றும் நரம்பியல் பரிசோதனை.",
    "Risk of vascular complication.": "இரத்த நாள சிக்கல் அபாயம்.",

    // Low / Home Care
    "Monitor rest, fluids, and temperature.": "ஓய்வு, திரவங்கள் மற்றும் வெப்பநிலையை கண்காணிக்கவும்.",
    "Warm liquids and rest recommended.": "வெதுவெதுப்பான திரவங்கள் மற்றும் ஓய்வு பரிந்துரைக்கப்படுகிறது.",
    "Track sleep patterns and nutrition.": "தூக்க முறைகள் மற்றும் ஊட்டச்சத்தை கண்காணிக்கவும்.",
    "Standard seasonal care; avoid irritants.": "நிலையான பருவகால பராமரிப்பு; எரிச்சலூட்டும் பொருட்களை தவிர்க்கவும்.",
    "Monitor for spreading or swelling.": "பரவுதல் அல்லது வீக்கத்தை கண்காணிக்கவும்.",
    "Gentle stretching and posture review.": "மென்மையான நீட்சி மற்றும் தோரணை ஆய்வு.",

    // Moderate / GP
    "Requires physical exam to find source.": "காரணத்தைக் கண்டறிய உடல் பரிசோதனை தேவை.",
    "Consultation for potential infection.": "சாத்தியமான தொற்றுக்கான ஆலோசனை.",
    "Clinical assessment of tissue growth.": "திசு வளர்ச்சியின் மருத்துவ மதிப்பீடு.",
    "Blood pressure and hydration review.": "இரத்த அழுத்தம் மற்றும் நீரேற்றம் ஆய்வு.",
    "Metabolic screening recommended.": "வளர்சிதை மாற்ற பரிசோதனை பரிந்துரைக்கப்படுகிறது.",
    "Digestive system review needed.": "செரிமான அமைப்பு ஆய்வு தேவை.",
    "X-ray/Physical assessment of injury.": "காயத்தின் எக்ஸ்ரே/உடல் மதிப்பீடு.",
    "Inspection of the ear canal required.": "காது கால்வாய் ஆய்வு தேவை.",
    "Fluid replacement and cause analysis.": "திரவ மாற்றீடு மற்றும் காரண பகுப்பாய்வு.",
    "Ambiguity Trigger: Consult for baseline.": "தெளிவற்ற நிலை: அடிப்படை மதிப்பீட்டிற்கு ஆலோசிக்கவும்.",

    // Specialist
    "Immediate Ophthalmologist referral.": "உடனடியாக கண் மருத்துவரிடம் பரிந்துரைக்கப்பட வேண்டும்.",
    "ENT evaluation for auditory health.": "கேள்வி ஆரோக்கியத்திற்கான ENT மதிப்பீடு.",
    "Podiatry or Rheumatology consultation.": "பாதவியல் அல்லது வாதவியல் ஆலோசனை.",
    "Mental health professional referral.": "மனநல நிபுணர் பரிந்துரை.",
    "Cardiology assessment for rhythm.": "துடிப்புக்கான இருதய மதிப்பீடு.",
    "Dermatology screening for skin health.": "தோல் ஆரோக்கியத்திற்கான தோல் மருத்துவ பரிசோதனை.",

    // Fallbacks
    "Seek emergency care immediately due to high-risk symptom presence.": "அதிக அபாய அறிகுறி இருப்பதால் உடனடியாக அவசர சிகிச்சையை நாடவும்.",
    "Consult with a General Practitioner for assessment.": "மதிப்பீட்டிற்கு பொது மருத்துவரை அணுகவும்.",
    "Home care with self-monitoring is appropriate for this symptom level.": "இந்த அறிகுறி நிலைக்கு சுய கண்காணிப்புடன் கூடிய வீட்டு பராமரிப்பு பொருத்தமானது.",
    "Consult with a Specialist for focused assessment.": "கவனம் செலுத்திய மதிப்பீட்டிற்கு ஒரு நிபுணரை அணுகவும்.",
    "Consult with a General Practitioner or Urgent Care for assessment.": "மதிப்பீட்டிற்கு பொது மருத்துவர் அல்லது அவசர சிகிச்சையை அணுகவும்.",
    "Unable to clearly identify symptoms from input.": "உள்ளீட்டிலிருந்து அறிகுறிகளைத் தெளிவாகக் கண்டறிய முடியவில்லை."
};

export const reasoningTranslations = {
    highRisk: (symptom) => `"${symptom}" என்பது அதிக அபாய அறிகுறியாக வகைப்படுத்தப்பட்டுள்ளது. அதிக அபாய அறிகுறிகள் அதிக தீவிரத்தன்மை மற்றும் அவசர சிகிச்சை வழிகாட்டுதலைத் தூண்டுகின்றன.`,
    moderate: (symptom, routing) => `"${symptom}" என்பது மிதமான தீவிரத்தன்மை என வகைப்படுத்தப்பட்டுள்ளது. மிதமான தீவிரத்தன்மை கொண்ட அறிகுறிகள் தொழில்முறை மதிப்பீட்டிற்கு ${routing} சிகிச்சைக்கு அனுப்பப்படுகின்றன.`,
    low: (symptom) => `"${symptom}" என்பது குறைந்த தீவிரத்தன்மை என வகைப்படுத்தப்பட்டுள்ளது. குறைந்த தீவிரத்தன்மை கொண்ட அறிகுறிகள் சுய கண்காணிப்புடன் கூடிய வீட்டு பராமரிப்பிற்கு ஏற்றவை.`,
    highSpecialist: (symptom) => `"${symptom}" என்பது அதிக தீவிரத்தன்மை என வகைப்படுத்தப்பட்டுள்ளது. இந்த அறிகுறிக்கு உடனடி நிபுணர் மட்டத்திலான மதிப்பீடு தேவைப்படுகிறது.`,
    unsupported: "நோயறிதல் தேடும் கேள்வியாக உள்ளீடு வகைப்படுத்தப்பட்டுள்ளது. இந்த அமைப்பு நோயறிதல்களை வழங்குவதில்லை அல்லது நோய்களைக் கண்டறிவதில்லை.",
    unclear: "அறிகுறிகளைத் தெளிவாகப் பொருத்த முடியவில்லை. பாதுகாப்பு முன்னெச்சரிக்கையாக அதிக தீவிரத்தன்மை மற்றும் அவசர சிகிச்சை வழிகாட்டுதலுக்கு அனுப்பப்படுகிறது."
};
