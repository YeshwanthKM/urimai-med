import { useState } from 'react';
import { Mail, Lock, User, Activity } from 'lucide-react';
import './Login.css';

function Login({ onLogin }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate login for this rule-based bot
        const user = {
            name: formData.name || 'User',
            email: formData.email,
            avatar: null // Default avatar
        };
        localStorage.setItem('urimai_med_user', JSON.stringify(user));
        onLogin(user);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="login-logo">
                        <Activity size={32} />
                    </div>
                    <h1>URIMAI MED</h1>
                    <p>{isRegistering ? 'Create your account' : 'Welcome back'}</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    {isRegistering && (
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <div className="input-icon-wrapper">
                                <User size={18} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <div className="input-icon-wrapper">
                            <Mail size={18} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-icon-wrapper">
                            <Lock size={18} />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-button">
                        {isRegistering ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        {isRegistering ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button onClick={() => setIsRegistering(!isRegistering)}>
                            {isRegistering ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                    <button className="guest-button" onClick={() => onLogin({ name: 'Guest', email: 'guest@example.com' })}>
                        Continue as Guest
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
