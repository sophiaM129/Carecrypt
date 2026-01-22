import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InsuranceForm: React.FC = () => {
    const [insuranceProvider, setInsuranceProvider] = useState('');
    const [policyNumber, setPolicyNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (!insuranceProvider || !policyNumber || !expiryDate) {
            setError('Please fill in all required fields.');
            setLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSuccess('Insurance information updated successfully!');
            console.log({ insuranceProvider, policyNumber, expiryDate });
        } catch (error: any) {
            setError(error.message || 'Failed to update insurance information');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Insurance Information</h2>
                <p>Please provide your insurance details for medical records.</p>
                
                <div className="form-group">
                    <label htmlFor="insuranceProvider">Insurance Provider:</label>
                    <input
                        type="text"
                        id="insuranceProvider"
                        value={insuranceProvider}
                        onChange={(e) => setInsuranceProvider(e.target.value)}
                        placeholder="e.g., Blue Cross, Aetna, UnitedHealth"
                        required
                        disabled={loading}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="policyNumber">Policy Number:</label>
                    <input
                        type="text"
                        id="policyNumber"
                        value={policyNumber}
                        onChange={(e) => setPolicyNumber(e.target.value)}
                        placeholder="Enter your policy number"
                        required
                        disabled={loading}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date:</label>
                    <input
                        type="date"
                        id="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
                
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Insurance Information'}
                </button>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/dashboard" className="btn">Back to Dashboard</Link>
                </div>
            </form>
        </div>
    );
};

export default InsuranceForm;