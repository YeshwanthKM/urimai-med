// Symptom Matcher - Normalize user input to dataset symptoms
// Uses string similarity and keyword matching

import { triageDataset, normalizedSymptoms } from './triageDataset';

/**
 * Calculate simple string similarity (Levenshtein-like)
 */
function stringSimilarity(str1, str2) {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    // Exact match
    if (s1 === s2) return 1.0;

    // Contains match
    if (s1.includes(s2) || s2.includes(s1)) return 0.8;

    // Word overlap
    const words1 = s1.split(/\s+/);
    const words2 = s2.split(/\s+/);
    const commonWords = words1.filter(w => words2.includes(w));

    if (commonWords.length > 0) {
        return commonWords.length / Math.max(words1.length, words2.length);
    }

    return 0;
}

/**
 * Keyword patterns for symptom matching
 */
const symptomPatterns = {
    'Chest Pain': ['chest', 'crushing', 'pressure chest', 'heart pain', 'chest hurt', 'crushing chest pain'],
    'Shortness of Breath': ['breath', 'breathing', 'cant breathe', 'short of breath', 'breathless', 'suffocating', 'catch my breath'],
    'Facial Droop': ['face droop', 'face sag', 'facial', 'face numb', 'face weak', 'face is drooping'],
    'Thunderclap Headache': ['worst headache', 'severe headache', 'sudden headache', 'thunderclap', 'headache of my life'],
    'Hemoptysis': ['cough blood', 'blood cough', 'coughing blood', 'bloody cough', 'coughed up a lot of blood'],
    'Anaphylaxis Signs': ['throat closing', 'throat swelling', 'cant swallow', 'allergic', 'anaphylaxis', 'my throat is closing up'],
    'Altered Mental State': ['confused', 'disoriented', 'confusion', 'mental', 'not thinking', 'feel confused and disoriented'],
    'DVT Suspicion': ['leg swollen', 'leg red', 'leg hot', 'calf pain', 'dvt', 'leg is hot, red, and swollen'],
    'Cough (Dry)': ['cough', 'coughing', 'dry cough', 'mild cough'],
    'Sore Throat': ['throat', 'scratchy throat', 'throat hurt', 'sore throat', 'slightly scratchy throat'],
    'Fatigue': ['tired', 'fatigue', 'exhausted', 'weak', 'no energy', 'feeling a bit tired'],
    'Nasal Congestion': ['runny nose', 'stuffy', 'congestion', 'sneezing', 'nose', 'minor runny nose'],
    'Skin Rash (Localized)': ['rash', 'itchy', 'skin patch', 'hives', 'small itchy patch'],
    'Back Pain (Mild)': ['back pain', 'back ache', 'lower back', 'dull ache in lower back'],
    'Pyrexia (Prolonged)': ['fever', 'high temperature', 'persistent fever'],
    'Dysuria': ['pain urinate', 'burning pee', 'painful urination', 'pain when i urinate'],
    'Vision Change': ['blurry vision', 'vision', 'cant see', 'eye problem', 'sudden blurry vision'],
    'Tinnitus': ['ringing', 'ear ringing', 'tinnitus', 'buzzing ear', 'hearing a constant ringing'],
    'Joint Pain (Acute)': ['joint pain', 'toe pain', 'finger pain', 'knee pain', 'sharp pain in my big toe'],
    'Lymphadenopathy': ['lump', 'swollen gland', 'lymph', 'neck lump', 'large lump on my neck'],
    'Orthostatic Vertigo': ['dizzy', 'lightheaded', 'vertigo', 'dizzy standing', 'dizzy when i stand up'],
    'Polydipsia/Polyuria': ['thirst', 'frequent urination', 'pee lot', 'drink lot', 'extreme thirst and frequent pee'],
    'Abdominal Pain': ['stomach', 'belly', 'abdomen', 'stomach pain', 'stomach hurts after eating'],
    'Sprain/Trauma': ['sprain', 'twisted', 'swollen ankle', 'injury', 'ankle is swollen and blue'],
    'Low Mood': ['sad', 'depressed', 'depression', 'down', 'hopeless', 'feeling very sad'],
    'Palpitations': ['heart skip', 'palpitation', 'irregular heartbeat', 'heart racing', 'heart is skipping beats'],
    'Skin Lesion': ['mole', 'skin spot', 'lesion', 'changing mole', 'weird mole changing color'],
    'Otalgia': ['earache', 'ear pain', 'ear fluid', 'severe earache'],
    'Dehydration Risk': ['vomiting', 'cant hold water', 'throwing up', 'nausea', 'constant vomiting'],
    'Vague Malaise': ['feel off', 'not right', 'unwell', 'something wrong', 'i just feel off']
};

/**
 * Match user input to normalized symptom
 */
export function matchSymptom(userInput) {
    // Strip punctuation and normalize for better matching
    const input = userInput.toLowerCase().trim().replace(/[.,/#!$%^&*;:{}=\-_`~()']/g, "");

    // Empty input
    if (!input) {
        return {
            matched: false,
            normalizedSymptom: 'Unclear',
            confidence: 0,
            reason: 'No input provided'
        };
    }

    let bestMatch = null;
    let bestScore = 0;

    // Try keyword pattern matching first
    for (const [symptom, patterns] of Object.entries(symptomPatterns)) {
        for (const pattern of patterns) {
            // Clean the pattern too just in case
            const cleanPattern = pattern.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()']/g, "");
            if (input.includes(cleanPattern)) {
                // Determine score based on how much of the input it covers
                const score = cleanPattern.length / input.length > 0.6 ? 0.95 : 0.85;
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = symptom;
                }
            }
        }
    }

    // If no keyword match, try similarity matching
    if (!bestMatch || bestScore < 0.8) {
        for (const symptom of normalizedSymptoms) {
            const score = stringSimilarity(input, symptom);
            if (score > bestScore) {
                bestScore = score;
                bestMatch = symptom;
            }
        }
    }

    // Confidence threshold
    if (bestScore < 0.3) {
        return {
            matched: false,
            normalizedSymptom: 'Unclear',
            confidence: bestScore,
            reason: 'Input does not clearly match known symptoms'
        };
    }

    return {
        matched: true,
        normalizedSymptom: bestMatch,
        confidence: bestScore,
        reason: `Matched to "${bestMatch}" with ${(bestScore * 100).toFixed(0)}% confidence`
    };
}

/**
 * Find triage data for a normalized symptom
 */
export function findTriageData(normalizedSymptom) {
    return triageDataset.find(item => item.normalizedSymptom === normalizedSymptom);
}
