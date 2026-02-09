import { useState } from 'react';
import { X, User, LogOut, Globe, Trash2, Shield } from 'lucide-react';
import './SettingsModal.css';

function SettingsModal({ user, language, onUpdateLanguage, onLogout, onClose }) {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="settings-modal" onClick={e => e.stopPropagation()}>
                <div className="settings-sidebar">
                    <div className="sidebar-header">
                        <h3>Settings</h3>
                    </div>
                    <div className="sidebar-menu">
                        <button
                            className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <User size={18} />
                            Profile
                        </button>
                        <button
                            className={`menu-item ${activeTab === 'language' ? 'active' : ''}`}
                            onClick={() => setActiveTab('language')}
                        >
                            <Globe size={18} />
                            Language
                        </button>
                        <button
                            className={`menu-item ${activeTab === 'security' ? 'active' : ''}`}
                            onClick={() => setActiveTab('security')}
                        >
                            <Shield size={18} />
                            Privacy
                        </button>
                    </div>
                    <button className="logout-button" onClick={onLogout}>
                        <LogOut size={18} />
                        Log Out
                    </button>
                </div>

                <div className="settings-content">
                    <button className="close-button" onClick={onClose}>
                        <X size={20} />
                    </button>

                    {activeTab === 'profile' && (
                        <div className="tab-content">
                            <h2>User Profile</h2>
                            <div className="profile-details">
                                <div className="avatar-large">
                                    {user?.name?.charAt(0) || 'U'}
                                </div>
                                <div className="profile-info">
                                    <div className="info-group">
                                        <label>Full Name</label>
                                        <p>{user?.name || 'User'}</p>
                                    </div>
                                    <div className="info-group">
                                        <label>Email Address</label>
                                        <p>{user?.email || 'user@example.com'}</p>
                                    </div>
                                    <div className="info-group">
                                        <label>Role</label>
                                        <p>Patient / User</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'language' && (
                        <div className="tab-content">
                            <h2>Language Settings</h2>
                            <p className="tab-description">Choose your preferred language for triage guidance and reasoning.</p>
                            <div className="language-options">
                                <button
                                    className={`language-card ${language === 'en' ? 'selected' : ''}`}
                                    onClick={() => onUpdateLanguage('en')}
                                >
                                    <div className="lang-code">EN</div>
                                    <div className="lang-name">English</div>
                                </button>
                                <button
                                    className={`language-card ${language === 'ta' ? 'selected' : ''}`}
                                    onClick={() => onUpdateLanguage('ta')}
                                >
                                    <div className="lang-code">TA</div>
                                    <div className="lang-name">தமிழ் (Tamil)</div>
                                </button>
                            </div>
                            {language === 'ta' && (
                                <div className="tamil-notice">
                                    <Globe size={16} />
                                    <p>System will now provide clinical guidance and reasoning in Tamil.</p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="tab-content">
                            <h2>Privacy & Data</h2>
                            <p className="tab-description">Manage your saved data and conversation history.</p>
                            <div className="actions-list">
                                <div className="action-item">
                                    <div className="action-info">
                                        <h4>Clear Chat History</h4>
                                        <p>Permanently delete all current conversation records.</p>
                                    </div>
                                    <button className="btn-secondary danger">
                                        <Trash2 size={16} />
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SettingsModal;
