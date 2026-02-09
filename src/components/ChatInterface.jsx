import { useState, useEffect } from 'react';
import { performTriage, formatTriageOutput } from '../utils/triageEngine';
import { Send, AlertCircle, Activity, Settings, User } from 'lucide-react';
import TriageOutput from './TriageOutput';
import './ChatInterface.css';

function ChatInterface({ user, language, onOpenSettings }) {
    const [messages, setMessages] = useState([
        {
            id: 'welcome',
            type: 'system',
            content: language === 'ta'
                ? 'URIMAI MED-க்கு உங்களை வரவேற்கிறோம். நான் ஒரு மருத்துவ வகைப்பாடு ஆதரவு அமைப்பு. உங்கள் அறிகுறிகளை விவரிக்கவும், சரியான சிகிச்சை நிலைக்கு உங்களை வழிநடத்த உதவுவேன்.'
                : 'Welcome to URIMAI MED. I am a clinical triage support system. Please describe your symptoms, and I will help guide you to the appropriate level of care.',
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);

    // Reset messages when language changes to show translated welcome
    useEffect(() => {
        setMessages([
            {
                id: 'welcome-' + language,
                type: 'system',
                content: language === 'ta'
                    ? 'URIMAI MED-க்கு உங்களை வரவேற்கிறோம். நான் ஒரு மருத்துவ வகைப்பாடு ஆதரவு அமைப்பு. உங்கள் அறிகுறிகளை விவரிக்கவும், சரியான சிகிச்சை நிலைக்கு உங்களை வழிநடத்த உதவுவேன்.'
                    : 'Welcome to URIMAI MED. I am a clinical triage support system. Please describe your symptoms, and I will help guide you to the appropriate level of care.',
                timestamp: new Date()
            }
        ]);
    }, [language]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!input.trim() || isProcessing) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsProcessing(true);

        // Simulate processing delay for better UX
        setTimeout(() => {
            const triageResult = performTriage(input, language);
            const formattedResult = formatTriageOutput(triageResult, language);

            const botMessage = {
                id: Date.now() + 1,
                type: 'bot',
                content: formattedResult,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsProcessing(false);
        }, 800);
    };

    const handleNewConversation = () => {
        setMessages([
            {
                id: 'welcome-' + language,
                type: 'system',
                content: language === 'ta'
                    ? 'URIMAI MED-க்கு உங்களை வரவேற்கிறோம். நான் ஒரு மருத்துவ வகைப்பாடு ஆதரவு அமைப்பு. உங்கள் அறிகுறிகளை விவரிக்கவும், சரியான சிகிச்சை நிலைக்கு உங்களை வழிநடத்த உதவுவேன்.'
                    : 'Welcome to URIMAI MED. I am a clinical triage support system. Please describe your symptoms, and I will help guide you to the appropriate level of care.',
                timestamp: new Date()
            }
        ]);
        setInput('');
    };

    return (
        <div className="chat-interface">
            {/* Header */}
            <div className="chat-header glass">
                <div className="header-content">
                    <div className="logo-section" onClick={onOpenSettings} style={{ cursor: 'pointer' }}>
                        <div className="logo-icon">
                            <Activity size={32} strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="logo-text">URIMAI MED</h1>
                            <p className="tagline">{language === 'ta' ? 'மருத்துவ வகைப்பாடு உதவியாளர்' : 'Clinical Triage Assistant'}</p>
                        </div>
                    </div>

                    <div className="header-actions">
                        <button
                            className="btn btn-secondary"
                            onClick={handleNewConversation}
                        >
                            {language === 'ta' ? 'புதிய உரையாடல்' : 'New Conversation'}
                        </button>
                        <div className="profile-btn" onClick={onOpenSettings}>
                            <div className="user-avatar">
                                {user?.name?.charAt(0) || <User size={18} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Messages Container */}
            <div className="messages-container">
                <div className="messages-wrapper">
                    {messages.map((message, index) => (
                        <div
                            key={message.id}
                            className={`message-wrapper ${message.type}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {message.type === 'system' && (
                                <div className="message system-message glass">
                                    <AlertCircle size={20} />
                                    <p>{message.content}</p>
                                </div>
                            )}

                            {message.type === 'user' && (
                                <div className="message user-message">
                                    <p>{message.content}</p>
                                </div>
                            )}

                            {message.type === 'bot' && (
                                <div className="message bot-message glass">
                                    <TriageOutput result={message.content} language={language} />
                                </div>
                            )}
                        </div>
                    ))}

                    {isProcessing && (
                        <div className="message-wrapper bot">
                            <div className="message bot-message glass">
                                <div className="typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p className="processing-text">
                                    {language === 'ta' ? 'அறிகுறிகள் ஆராயப்படுகின்றன...' : 'Analyzing symptoms...'}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Input Area */}
            <div className="input-area glass">
                <form onSubmit={handleSubmit} className="input-form">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={language === 'ta' ? 'உங்கள் அறிகுறிகளை விவரிக்கவும்...' : 'Describe your symptoms...'}
                        disabled={isProcessing}
                        className="symptom-input"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary send-btn"
                        disabled={!input.trim() || isProcessing}
                    >
                        <Send size={20} />
                        {language === 'ta' ? 'அனுப்பு' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ChatInterface;
