import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <Navbar isLoggedIn={true} />
            
            {/* Top Login/Signup Buttons */}
            <div className="top-auth-buttons">
                <div className="container">
                    <div className="auth-buttons-wrapper">
                        <Link to="/login" className="top-auth-btn login">Login</Link>
                        <Link to="/signup" className="top-auth-btn signup">Sign Up</Link>
                    </div>
                </div>
            </div>
            
            {/* Hero Section with doctor image background */}
            <section className="hero-section">
                <div className="hero-background-image"></div>
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Simplify Your Hospital Visits with CareCrypt</h1>
                        <p>See your entire medical history from any hospital on one timeline.</p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="main-content-section">
                <div className="container">
                    <div className="content-header">
                        <h2>Simplify Your Medical Records with CareCrypt</h2>
                        <p>Experience the convenience of filling out one hospital form for a lifetime and accessing it anywhere.</p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Seamless Information Access</h3>
                            <ul className="feature-list">
                                <li>✔ Scan Your Information</li>
                                <li>✔ Find Nearby Hospitals</li>
                                <li>✔ Update Your Records</li>
                            </ul>
                        </div>

                        <div className="feature-card">
                            <h3>Effortless Record Management</h3>
                            <ul className="feature-list">
                                <li>✔ Access Your Medical History</li>
                                <li>✔ Share Records Securely</li>
                                <li>✔ Receive Appointment Reminders</li>
                            </ul>
                        </div>
                    </div>

                    <div className="how-it-helps">
                        <h3>How Does It Help You</h3>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <h4>Good for you and the planet</h4>
                                <p>It's digital, paperless and hassle-free.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Continuity of Care</h4>
                                <p>For any doctor, or any medical visit, it becomes easier to see your medical history.</p>
                            </div>
                            <div className="benefit-item">
                                <h4>Keeping it simple</h4>
                                <p>No need to carry, maintain or look for your records.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Subscribe Section - MOVED BELOW main content as requested */}
            <section className="subscribe-section">
                <div className="container">
                    <div className="subscribe-content">
                        <h2>Subscribe to CareCrypt</h2>
                        <form className="subscribe-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First</label>
                                    <input type="text" id="firstName" placeholder="First" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last</label>
                                    <input type="text" id="lastName" placeholder="Last" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="email@example.com" />
                            </div>
                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                        <p className="signup-text">Sign up now to simplify your medical records management with CareCrypt.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>CareCrypt</h3>
                            <p>Simplifying medical records management</p>
                        </div>
                        <div className="footer-section">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/medical-history">Medical History</Link></li>
                                <li><Link to="/insurance">Insurance</Link></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Support</h4>
                            <ul>
                                <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/help">Help Center</Link></li>
                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                <li><Link to="/terms">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 CareCrypt. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
