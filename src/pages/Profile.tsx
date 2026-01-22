import React, { useEffect, useState } from 'react';
import { User } from '../types';
import Navbar from '../components/Navbar';
import QRCodeGenerator from '../components/QRCode/QRCodeGenerator';
import './Profile.css';

const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading user data
        setTimeout(() => {
            setUser({
                id: '1',
                username: 'John Doe',
                email: 'john@example.com',
                password: '',
                createdAt: new Date(),
                updatedAt: new Date()
            });
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return (
            <div className="profile-page">
                <Navbar isLoggedIn={true} />
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <h2>Loading profile...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-page">
            <Navbar isLoggedIn={true} />
            
            <div className="page-header">
                <h1>My Profile</h1>
                <p>Your personal information and medical QR code integrated in your profile avatar</p>
            </div>
            
            <div className="profile-content">
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="profile-avatar">
                            <div className="avatar-initial">J</div>
                            <div className="qr-code-overlay">
                                <QRCodeGenerator 
                                    medicalData={`User: ${user?.username}, ID: ${user?.id}`} 
                                    size={120}
                                    showTitle={false}
                                />
                            </div>
                        </div>
                        <div className="profile-info">
                            <h2>{user?.username}</h2>
                            <p className="profile-email">{user?.email}</p>
                            <p className="profile-member-since">Member since {user?.createdAt.toLocaleDateString()}</p>
                        </div>
                    </div>
                    
                    <div className="profile-details">
                        <div className="detail-section">
                            <h3>Personal Information</h3>
                            <div className="detail-grid">
                                <div className="detail-item">
                                    <span className="detail-label">Full Name:</span>
                                    <span className="detail-value">{user?.username}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Email:</span>
                                    <span className="detail-value">{user?.email}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">User ID:</span>
                                    <span className="detail-value">{user?.id}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Status:</span>
                                    <span className="detail-value active">Active</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="detail-section">
                            <h3>Medical QR Code</h3>
                            <p className="qr-description">
                                Your medical QR code is integrated into your profile avatar above. 
                                Scan it to access your medical information in emergency situations.
                            </p>
                            <p className="qr-note">
                                This QR code contains encrypted access to your medical records
                            </p>
                        </div>
                    </div>
                    
                    <div className="profile-actions">
                        <button className="profile-btn primary">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;