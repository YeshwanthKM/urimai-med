import { useState } from 'react';
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Info, Stethoscope, Activity, Table } from 'lucide-react';
import { triageDataset } from '../utils/triageDataset';
import './Home.css';

function Home({ onStartTriage }) {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-icon">
                    <Activity size={48} />
                </div>
                <h1 className="hero-title">URIMAI MED</h1>
                <p className="hero-subtitle">Clinical Triage Assistant</p>
                <p className="hero-description">
                    Rule-based patient navigation and care guidance system
                </p>
                <button className="cta-button" onClick={onStartTriage}>
                    Start Triage Assessment
                    <ArrowRight size={20} />
                </button>
            </div>

            {/* Problem Statement Section */}
            <div className="info-section">
                <div className="section-header">
                    <Info size={24} />
                    <h2>Problem Statement</h2>
                </div>
                <p className="section-description">
                    Design a software-based <strong>MediGuide Bot</strong> that performs patient navigation and triage using rule-based logic. The system must interpret symptoms, classify severity conservatively, detect red flags, and guide users to appropriate care levels. All outputs must be dataset-driven and safety-focused. The bot must act only as a navigation and escalation tool — not a diagnostic or treatment system.
                </p>
            </div>

            {/* Mandatory Features & Restrictions Grid */}
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon blue">
                        <CheckCircle size={28} />
                    </div>
                    <h3>Mandatory Features</h3>
                    <ul className="feature-list">
                        <li>Symptom Normalization</li>
                        <li>Red-Flag Screening</li>
                        <li>Conservative Severity Logic</li>
                        <li>Care Routing (Home, GP, Specialist, Emergency)</li>
                        <li>Dataset-Only Reasoning</li>
                        <li>Non-Diagnostic Guidance</li>
                        <li>Ambiguity Handling</li>
                        <li>Ethical Safeguards</li>
                        <li>Structured Output</li>
                        <li>Fail-Safe Escalation</li>
                    </ul>
                </div>

                <div className="feature-card">
                    <div className="feature-icon red">
                        <AlertTriangle size={28} />
                    </div>
                    <h3>Absolute Restrictions</h3>
                    <ul className="feature-list">
                        <li>No diagnosis or disease naming</li>
                        <li>No treatment or medication advice</li>
                        <li>No external medical sources</li>
                        <li>No storing personal medical data</li>
                        <li>No suppressing red-flag escalation</li>
                        <li>No unexplained outputs</li>
                    </ul>
                </div>
            </div>

            {/* Expected Outcome */}
            <div className="info-section secondary">
                <div className="section-header">
                    <Activity size={24} />
                    <h2>Expected Outcome</h2>
                </div>
                <p className="section-description">
                    The system should convert symptoms into structured inputs, classify urgency conservatively, detect and escalate dangerous cases, guide users to correct care levels, and reduce unnecessary emergency visits.
                </p>
            </div>

            {/* How It Works Section */}
            <div className="info-section">
                <div className="section-header">
                    <Stethoscope size={24} />
                    <h2>How It Works</h2>
                </div>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <div className="step-content">
                            <h4>Describe Your Symptoms</h4>
                            <p>Enter a clear description of what you're experiencing (e.g., "crushing chest pain", "mild cough for two days")</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <div className="step-content">
                            <h4>Symptom Classification</h4>
                            <p>The system normalizes your input and checks for red-flag symptoms</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <div className="step-content">
                            <h4>Severity Assessment</h4>
                            <p>Symptoms are classified as High, Moderate, or Low severity</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <div className="step-content">
                            <h4>Care Navigation</h4>
                            <p>You receive guidance on the appropriate care level: Emergency, Specialist, GP, or Home Care</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Important Notice */}
            <div className="notice-card">
                <AlertTriangle size={24} />
                <div className="notice-content">
                    <h3>Important Notice</h3>
                    <p>
                        URIMAI MED is a <strong>navigation tool, not a diagnostic tool</strong>.
                        We do not diagnose conditions, identify illnesses, or provide medical treatment advice.
                        If you believe you are experiencing a medical emergency, call emergency services immediately
                        or go to the nearest emergency room.
                    </p>
                    <p className="notice-footer">
                        Always consult with qualified healthcare professionals for medical advice, diagnosis, and treatment.
                    </p>
                </div>
            </div>

            {/* Clinical Dataset Section */}
            <div className="info-section">
                <div className="section-header">
                    <Table size={24} />
                    <h2>Clinical Triage Dataset</h2>
                </div>
                <p className="section-description">
                    The following table contains the complete rule-based dataset used by URIMAI MED for triage navigation.
                </p>
                <div className="dataset-table-container">
                    <table className="dataset-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Input</th>
                                <th>Symptom</th>
                                <th>Red-Flag?</th>
                                <th>Severity</th>
                                <th>Routing</th>
                                <th>Guidance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {triageDataset
                                .slice()
                                .sort((a, b) => a.id - b.id)
                                .map((item) => (
                                    <tr key={item.id} className={item.isRedFlag ? 'red-flag-row' : ''}>
                                        <td>{item.id}</td>
                                        <td className="italic">"{item.userInput}"</td>
                                        <td>{item.normalizedSymptom}</td>
                                        <td className="center">{item.isRedFlag ? 'YES' : 'NO'}</td>
                                        <td>
                                            <span className={`severity-tag ${item.severity.toLowerCase()}`}>
                                                {item.severity}
                                            </span>
                                        </td>
                                        <td>{item.careRouting}</td>
                                        <td className="guidance-cell">{item.guidance}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* CTA Footer */}
            <div className="cta-footer">
                <button className="cta-button-secondary" onClick={onStartTriage}>
                    Begin Triage Assessment
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}

export default Home;
