import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Insurance.css';

const Insurance: React.FC = () => {
  return (
    <div className="insurance-page">
      <Navbar isLoggedIn={true} />
      
      <div className="page-header">
        <h1>Insurance Management</h1>
        <p>View and manage your insurance details and coverage information</p>
      </div>
      
      <div className="insurance-content">
        <div className="insurance-card">
          <div className="card-header">
            <div className="card-icon">🛡️</div>
            <h2>Insurance Details</h2>
          </div>
          
          <div className="insurance-info">
            <div className="info-section">
              <h3>Primary Insurance</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Provider:</span>
                  <span className="info-value">Blue Cross Blue Shield</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Policy Number:</span>
                  <span className="info-value">BCBS-123456789</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Group Number:</span>
                  <span className="info-value">GRP-987654</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Effective Date:</span>
                  <span className="info-value">01/01/2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Expiry Date:</span>
                  <span className="info-value">12/31/2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Coverage Type:</span>
                  <span className="info-value">Family Plan</span>
                </div>
              </div>
            </div>
            
            <div className="info-section">
              <h3>Secondary Insurance</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Provider:</span>
                  <span className="info-value">Aetna</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Policy Number:</span>
                  <span className="info-value">AET-987654321</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Group Number:</span>
                  <span className="info-value">GRP-456789</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Effective Date:</span>
                  <span className="info-value">01/01/2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Expiry Date:</span>
                  <span className="info-value">12/31/2024</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Coverage Type:</span>
                  <span className="info-value">Individual</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-actions">
            <Link to="/insurance" className="card-btn primary">Update Insurance</Link>
            <Link to="/insurance" className="card-btn secondary">View Documents</Link>
          </div>
        </div>
        
        <div className="insurance-tips">
          <h3>💡 Insurance Tips</h3>
          <ul>
            <li>Always carry a copy of your insurance card</li>
            <li>Keep your policy information updated</li>
            <li>Know your deductible and copay amounts</li>
            <li>Save all insurance-related documents</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
