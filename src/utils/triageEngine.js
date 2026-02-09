// Triage Engine - Rule-based clinical triage logic (COMPLIANCE PATCH APPLIED)
// Safety-first, dataset-driven decision making
// ALL MEDICAL LANGUAGE REMOVED - NAVIGATION-ONLY OUTPUT

import { triageDataset, redFlagSymptoms } from './triageDataset';
import { matchSymptom, findTriageData } from './symptomMatcher';
import { isDiagnosisSeekingInput, getDiagnosisSeekingResponse, isGeneralGreeting, getGreetingResponse } from './inputClassifier';
import { translations, symptomTranslations, guidanceTranslations, reasoningTranslations } from './translations';

/**
 * Perform triage on user symptom input
 * Returns structured triage result with reasoning
 */
export function performTriage(userInput, language = 'en') {
    const t = translations[language] || translations.en;

    // STEP -1: HANDLE GREETINGS & GENERAL INPUT (REDIRECTION ONLY)
    if (isGeneralGreeting(userInput)) {
        const response = getGreetingResponse();
        return {
            normalizedSymptoms: ['N/A'],
            redFlagDetected: false,
            severity: 'N/A',
            careRouting: 'N/A',
            guidance: language === 'ta' ? t.greeting_message : response.message,
            reasoning: language === 'ta' ? t.greeting_help : response.help,
            rawInput: userInput,
            confidence: 1,
            isGreeting: true,
            disclaimer: t.disclaimer
        };
    }

    // STEP 0: MANDATORY INPUT CLASSIFICATION (BEFORE ANY TRIAGE LOGIC)
    if (isDiagnosisSeekingInput(userInput)) {
        const response = getDiagnosisSeekingResponse();
        let message = response.message;
        let reasoning = 'Input classified as diagnosis-seeking question. This system does not provide diagnoses or identify illnesses.';

        if (language === 'ta') {
            message = t.diagnosis_rejection_title + ": " + t.diagnosis_rejection_help;
            reasoning = reasoningTranslations.unsupported;
        }

        return {
            normalizedSymptoms: ['N/A'],
            redFlagDetected: false,
            severity: 'N/A',
            careRouting: 'N/A',
            guidance: message,
            reasoning: reasoning,
            rawInput: userInput,
            confidence: 0,
            isDiagnosisSeeking: true,
            disclaimer: t.disclaimer
        };
    }

    // Step 1: Normalize symptom
    const matchResult = matchSymptom(userInput);

    // Step 2: Handle unclear input (conservative escalation)
    if (!matchResult.matched) {
        const input = userInput.toLowerCase();
        // High-risk keywords that should still trigger Emergency even if not perfectly matched
        const highRiskKeywords = ['chest', 'heart', 'breath', 'blood', 'stroke', 'face', 'paralysis', 'choke', 'unconscious', 'pulse'];
        const hasHighRisk = highRiskKeywords.some(keyword => input.includes(keyword));

        if (hasHighRisk) {
            return {
                normalizedSymptoms: ['Unclear (Potential High Risk)'],
                redFlagDetected: true,
                severity: 'High',
                careRouting: 'Emergency',
                guidance: language === 'ta' ? guidanceTranslations["Unable to clearly identify symptoms from input."] : 'Unable to clearly identify symptoms from input.',
                reasoning: language === 'ta' ? reasoningTranslations.unclear : 'Input contains potentially high-risk keywords but does not match a specific scenario. Escalating to Emergency Care as a safety precaution.',
                rawInput: userInput,
                confidence: matchResult.confidence
            };
        } else {
            // General unclear symptoms (like "arm hurts") go to GP instead of Emergency
            return {
                normalizedSymptoms: ['Unclear'],
                redFlagDetected: false,
                severity: 'Moderate',
                careRouting: 'GP',
                guidance: language === 'ta' ? t.unclear_general_guidance : 'Symptoms not clearly identified. Professional assessment by a General Practitioner is recommended.',
                reasoning: language === 'ta' ? t.unclear_general_reasoning : 'Symptoms do not match high-risk patterns. Routing to GP for professional assessment as a standard precaution.',
                rawInput: userInput,
                confidence: matchResult.confidence
            };
        }
    }

    // Step 3: Find triage data
    const triageData = findTriageData(matchResult.normalizedSymptom);

    if (!triageData) {
        return {
            normalizedSymptoms: [matchResult.normalizedSymptom],
            redFlagDetected: false,
            severity: 'High',
            careRouting: 'Emergency',
            guidance: 'System error: Symptom recognized but not in dataset.',
            reasoning: 'Conservative escalation due to system uncertainty.',
            rawInput: userInput,
            confidence: matchResult.confidence
        };
    }

    // Step 4: Apply triage rules
    const isRedFlag = redFlagSymptoms.includes(triageData.normalizedSymptom);

    let reasoning = '';
    const symptomName = language === 'ta' ? (symptomTranslations[triageData.normalizedSymptom] || triageData.normalizedSymptom) : triageData.normalizedSymptom;
    const routingName = language === 'ta' ? (triageData.careRouting === 'Emergency' ? t.emergency : triageData.careRouting) : triageData.careRouting;

    if (isRedFlag) {
        reasoning = language === 'ta' ?
            reasoningTranslations.highRisk(symptomName) :
            `"${symptomName}" is classified as a high-risk symptom. High-risk symptoms trigger High severity and Emergency Care routing.`;
    } else if (triageData.severity === 'Moderate') {
        reasoning = language === 'ta' ?
            reasoningTranslations.moderate(symptomName, routingName) :
            `"${symptomName}" is classified as Moderate severity. Moderate-severity symptoms are routed to ${routingName} for professional assessment.`;
    } else if (triageData.severity === 'Low') {
        reasoning = language === 'ta' ?
            reasoningTranslations.low(symptomName) :
            `"${symptomName}" is classified as Low severity. Low-severity symptoms are suitable for Home Care with self-monitoring.`;
    } else if (triageData.severity === 'High' && !isRedFlag) {
        reasoning = language === 'ta' ?
            reasoningTranslations.highSpecialist(symptomName) :
            `"${symptomName}" is classified as High severity. This symptom requires prompt specialist-level assessment.`;
    }

    return {
        normalizedSymptoms: [triageData.normalizedSymptom],
        redFlagDetected: isRedFlag,
        severity: triageData.severity,
        careRouting: triageData.careRouting,
        guidance: triageData.guidance,
        reasoning: reasoning,
        rawInput: userInput,
        confidence: matchResult.confidence,
        matchReason: matchResult.reason
    };
}

/**
 * Format triage result for display
 */
export function formatTriageOutput(triageResult, language = 'en') {
    const t = translations[language] || translations.en;

    const symptomList = triageResult.normalizedSymptoms
        .map(s => `• ${language === 'ta' ? (symptomTranslations[s] || s) : s}`)
        .join('\n');

    return {
        ...triageResult,
        disclaimer: t.disclaimer,
        formattedOutput: `
---
${t.normalized_symptoms}:
${symptomList}

${t.red_flag_detected}:
${triageResult.redFlagDetected ? t.yes : t.no}

${t.severity}:
${language === 'ta' ? (triageResult.severity === 'High' ? t.high : triageResult.severity === 'Moderate' ? t.moderate : t.low) : triageResult.severity}

${t.care_navigation}:
${language === 'ta' ? (triageResult.careRouting === 'Emergency' ? t.emergency : triageResult.careRouting) : triageResult.careRouting}

${t.reasoning}:
${triageResult.reasoning}
---

${t.disclaimer}
    `.trim()
    };
}

export const ETHICAL_DISCLAIMER = translations.en.disclaimer;
