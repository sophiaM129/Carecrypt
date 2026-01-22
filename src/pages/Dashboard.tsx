import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div className="container">
            <div className="dashboard">
                <h1>Medical Dashboard</h1>
                <p>Welcome to your medical dashboard. Here you can manage your medical data securely.</p>
                
                <div className="medical-forms">
                    <div className="medical-form">
                        <h3>Medical History</h3>
                        <p>Update your medical history and conditions</p>
                        <Link to="/medical-history" className="btn">Manage History</Link>
                    </div>
                    
                    <div className="medical-form">
                        <h3>Allergies</h3>
                        <p>Track your allergies and sensitivities</p>
                        <Link to="/allergies" className="btn">Manage Allergies</Link>
                    </div>
                    
                    <div className="medical-form">
                        <h3>Blood Group</h3>
                        <p>Update your blood group information</p>
                        <Link to="/blood-group" className="btn">Update Blood Group</Link>
                    </div>
                    
                    <div className="medical-form">
                        <h3>Insurance</h3>
                        <p>Manage your insurance details</p>
                        <Link to="/insurance" className="btn">Manage Insurance</Link>
                    </div>
                    
                    <div className="medical-form">
                        <h3>QR Code</h3>
                        <p>Generate QR code for your medical data</p>
                        <Link to="/qr-code" className="btn">Generate QR Code</Link>
                    </div>
                    
                    <div className="medical-form">
                        <h3>Profile</h3>
                        <p>Update your personal information</p>
                        <Link to="/profile" className="btn">Manage Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;