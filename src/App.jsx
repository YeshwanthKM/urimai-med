import { useState, useEffect } from 'react';
import ChatInterface from './components/ChatInterface';
import Home from './components/Home';
import Login from './components/Login';
import SettingsModal from './components/SettingsModal';
import { Moon, Sun, ArrowLeft } from 'lucide-react';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : true;
    }
    return localStorage.getItem('theme') === 'dark';
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('urimai_med_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('urimai_med_lang') || 'en';
  });

  const [showHome, setShowHome] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('urimai_med_user');
    setShowSettings(false);
    setShowHome(true);
  };

  const updateLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('urimai_med_lang', lang);
  };

  if (!user) {
    return (
      <div className="app">
        <button
          className="theme-toggle btn-icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="app">
      <div className="top-controls">
        {!showHome && (
          <button
            className="home-toggle btn-icon"
            onClick={() => setShowHome(true)}
            aria-label="Go to home"
          >
            <ArrowLeft size={20} />
          </button>
        )}

        <button
          className="theme-toggle btn-icon"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {showHome ? (
        <Home onStartTriage={() => setShowHome(false)} />
      ) : (
        <ChatInterface
          user={user}
          language={language}
          onOpenSettings={() => setShowSettings(true)}
        />
      )}

      {showSettings && (
        <SettingsModal
          user={user}
          language={language}
          onUpdateLanguage={updateLanguage}
          onLogout={handleLogout}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
