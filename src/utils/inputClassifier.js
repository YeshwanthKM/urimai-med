// Input Classifier - Detect diagnosis-seeking vs symptom-based input
// CRITICAL: This runs BEFORE any triage logic

/**
 * Patterns that indicate diagnosis-seeking or opinion-based questions
 */
const diagnosisSeekingPatterns = [
    // Direct diagnosis questions
    'is this',
    'do i have',
    'what illness',
    'what disease',
    'what condition',
    'is it',
    'could this be',
    'might this be',
    'think this is',

    // Severity opinion questions
    'is this serious',
    'is this minor',
    'how serious',
    'how bad',
    'should i worry',
    'is this dangerous',

    // Disease name questions
    'asthma',
    'cancer',
    'diabetes',
    'covid',
    'flu',
    'infection',
    'pneumonia',
    'stroke',
    'heart attack',

    'what do you think',
    'in your opinion',
    'do you believe',
    'your assessment'
];

/**
 * Patterns for general greetings and non-medical conversation
 */
const greetingPatterns = [
    'hello', 'hi', 'hey', 'greetings', 'morning', 'afternoon', 'evening',
    'how are you', 'hows it going', 'supp', 'yo', 'thanks', 'thank you',
    'ok', 'okay', 'help', 'who are you', 'what can you do'
];

/**
 * Check if input is a general greeting or non-medical query
 */
export function isGeneralGreeting(userInput) {
    const input = userInput.toLowerCase().trim();

    // Check if input is just a greeting or very short conversational phrase
    if (greetingPatterns.includes(input)) {
        return true;
    }

    // Check if input STARTS with a greeting pattern but has no medical context
    // This is simple logic: if it's less than 20 chars and match greeting
    if (input.length < 20) {
        for (const pattern of greetingPatterns) {
            if (input.startsWith(pattern)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Check if input is seeking diagnosis rather than describing symptoms
 */
export function isDiagnosisSeekingInput(userInput) {
    const input = userInput.toLowerCase().trim();

    // Empty input
    if (!input) {
        return false;
    }

    // Check for diagnosis-seeking patterns
    for (const pattern of diagnosisSeekingPatterns) {
        if (input.includes(pattern)) {
            return true;
        }
    }

    // Check for question marks with disease/condition keywords
    if (input.includes('?')) {
        const diseaseKeywords = ['disease', 'illness', 'condition', 'diagnosis', 'sick', 'problem'];
        for (const keyword of diseaseKeywords) {
            if (input.includes(keyword)) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Generate response for general greetings
 */
export function getGreetingResponse() {
    return {
        type: 'greeting',
        message: 'Hello! I am URIMAI MED, your clinical triage assistant. I can help you determine the appropriate level of care based on your symptoms.',
        help: 'Please describe your symptoms (e.g., "I have a mild cough" or "My chest hurts") to begin the triage assessment.'
    };
}

/**
 * Generate response for diagnosis-seeking input
 */
export function getDiagnosisSeekingResponse() {
    return {
        type: 'diagnosis_seeking',
        message: 'I do not diagnose conditions or determine illnesses. I am designed only for symptom-based navigation and care guidance. If you would like assistance, please describe your symptoms.',
        disclaimer: 'If you believe this is an emergency, seek immediate medical help.'
    };
}
