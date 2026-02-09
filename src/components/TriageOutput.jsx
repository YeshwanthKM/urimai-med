import { AlertTriangle, Home, Stethoscope, Hospital, Activity } from 'lucide-react';
import { translations, symptomTranslations, guidanceTranslations } from '../utils/translations';
import './TriageOutput.css';

function TriageOutput({ result, language = 'en' }) {
    const t = translations[language] || translations.en;

    // Handle Greetings
    if (result.isGreeting) {
        return (
            <div className="triage-output">
                <div className="output-section diagnosis-rejection" style={{ border: '2px solid var(--medical-blue)' }}>
                    <Activity size={24} className="diagnosis-icon" style={{ color: 'var(--medical-blue)', animation: 'none' }} />
                    <h3 className="diagnosis-title" style={{ color: 'var(--medical-blue)' }}>{t.greeting_title}</h3>
                    <p className="diagnosis-message">{result.guidance}</p>
                    <p className="diagnosis-help" style={{ color: 'var(--gray-600)', background: 'var(--gray-50)', padding: '10px', borderRadius: '8px' }}>
                        {result.reasoning}
                    </p>
                </div>

                <div className="disclaimer">
                    <AlertTriangle size={16} />
                    <p>{t.disclaimer}</p>
                </div>
            </div>
        );
    }

    // Handle diagnosis-seeking input
    if (result.isDiagnosisSeeking) {
        return (
            <div className="triage-output">
                <div className="output-section diagnosis-rejection">
                    <AlertTriangle size={24} className="diagnosis-icon" />
                    <h3 className="diagnosis-title">{t.diagnosis_rejection_title}</h3>
                    <p className="diagnosis-message">{result.guidance}</p>
                    <p className="diagnosis-help">{t.diagnosis_rejection_help}</p>
                </div>

                <div className="disclaimer">
                    <AlertTriangle size={16} />
                    <p>{result.disclaimer || t.disclaimer}</p>
                </div>
            </div>
        );
    }

    // Normal triage output
    const getSeverityIcon = (severity) => {
        switch (severity) {
            case 'High':
            case 'அதிகம்':
                return <AlertTriangle size={20} />;
            case 'Moderate':
            case 'மிதமான':
                return <Stethoscope size={20} />;
            case 'Low':
            case 'குறைவான':
                return <Home size={20} />;
            default:
                return <Hospital size={20} />;
        }
    };

    const getSeverityClass = (severity) => {
        if (severity === 'High' || severity === 'அதிகம்') return 'emergency';
        if (severity === 'Moderate' || severity === 'மிதமான') return 'moderate';
        if (severity === 'Low' || severity === 'குறைவான') return 'low';
        return 'moderate';
    };

    const getCareIcon = (careRouting) => {
        if (careRouting.includes('Emergency') || careRouting.includes('அவசர')) return '🚨';
        if (careRouting.includes('Specialist') || careRouting.includes('நிபுணர்')) return '👨‍⚕️';
        if (careRouting.includes('GP') || careRouting.includes('பொது')) return '🏥';
        return '🏠';
    };

    // Translate routing for display if language is Tamil
    const translatedRouting = language === 'ta' ?
        (result.careRouting === 'Emergency' ? t.emergency :
            result.careRouting === 'Specialist' ? t.specialist :
                result.careRouting === 'GP' ? t.gp :
                    result.careRouting === 'Home Care' ? t.home_care : result.careRouting) : result.careRouting;

    const translatedSeverity = language === 'ta' ?
        (result.severity === 'High' ? t.high :
            result.severity === 'Moderate' ? t.moderate :
                result.severity === 'Low' ? t.low : result.severity) : result.severity;

    return (
        <div className="triage-output">
            {/* Normalized Symptoms */}
            <div className="output-section">
                <h3 className="section-title">{t.normalized_symptoms}</h3>
                <ul className="symptom-list">
                    {result.normalizedSymptoms.map((symptom, index) => (
                        <li key={index} className="symptom-item">
                            {language === 'ta' ? (symptomTranslations[symptom] || symptom) : symptom}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Red Flag & Severity */}
            <div className="output-section metrics">
                <div className="metric-card">
                    <span className="metric-label">{t.red_flag_detected}</span>
                    <span className={`metric-value ${result.redFlagDetected ? 'red-flag' : ''}`}>
                        {result.redFlagDetected ? t.yes : t.no}
                    </span>
                </div>

                <div className="metric-card">
                    <span className="metric-label">{t.severity}</span>
                    <div className={`badge badge-${getSeverityClass(result.severity)}`}>
                        {getSeverityIcon(result.severity)}
                        {translatedSeverity}
                    </div>
                </div>

                <div className="metric-card">
                    <span className="metric-label">{t.care_navigation}</span>
                    <span className="care-routing">
                        {getCareIcon(result.careRouting)} {translatedRouting}
                    </span>
                </div>
            </div>

            {/* Guidance */}
            {result.guidance && (
                <div className="output-section guidance-section">
                    <h3 className="section-title">{t.guidance}</h3>
                    <p className="guidance-text">
                        {language === 'ta' ? (guidanceTranslations[result.guidance] || result.guidance) : result.guidance}
                    </p>
                </div>
            )}

            {/* Reasoning */}
            <div className="output-section reasoning-section">
                <h3 className="section-title">{t.reasoning}</h3>
                <p className="reasoning-text">{result.reasoning}</p>
            </div>

            {/* Disclaimer */}
            <div className="disclaimer">
                <AlertTriangle size={16} />
                <p>{result.disclaimer || t.disclaimer}</p>
            </div>
        </div>
    );
}

export default TriageOutput;
