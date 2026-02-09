import { useState } from 'react';
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Info, Stethoscope, Activity } from 'lucide-react';
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

            {/* What We Do Section */}
            <div className="info-section">
                <div className="section-header">
                    <Info size={24} />
                    <h2>What URIMAI MED Does</h2>
                </div>
                <p className="section-description">
                    URIMAI MED is a <strong>navigation and triage support system</strong> that helps you determine the appropriate level of care based on your symptoms. We use a rule-based approach to classify symptom severity and guide you to the right healthcare resource.
                </p>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon green">
                        <CheckCircle size={28} />
                    </div>
                    <h3>What We Provide</h3>
                    <ul className="feature-list">
                        <li>Symptom severity classification</li>
                        <li>Care level routing (Emergency, GP, Specialist, Home Care)</li>
                        <li>Safety-first escalation for unclear symptoms</li>
                        <li>Clear, rule-based reasoning</li>
                    </ul>
                </div>

                <div className="feature-card">
                    <div className="feature-icon red">
                        <AlertTriangle size={28} />
                    </div>
                    <h3>What We DO NOT Provide</h3>
                    <ul className="feature-list">
                        <li>Medical diagnoses or condition identification</li>
                        <li>Treatment or medication recommendations</li>
                        <li>Medical opinions or assessments</li>
                        <li>Replacement for professional medical care</li>
                    </ul>
                </div>

                <div className="feature-card">
                    <div className="feature-icon blue">
                        <Shield size={28} />
                    </div>
                    <h3>Safety-First Approach</h3>
                    <ul className="feature-list">
                        <li>Red-flag symptoms automatically route to Emergency</li>
                        <li>Conservative escalation for ambiguous inputs</li>
                        <li>Transparent decision-making process</li>
                        <li>Ethical disclaimers on all responses</li>
                    </ul>
                </div>
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
