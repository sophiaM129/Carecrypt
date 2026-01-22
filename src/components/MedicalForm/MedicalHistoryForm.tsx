import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitMedicalData } from '../../services/api';

const MedicalHistoryForm: React.FC = () => {
    const [medicalHistory, setMedicalHistory] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMedicalHistory(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        if (medicalHistory.trim() === '') {
            setError('Medical history is required.');
            setLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSuccess('Medical history updated successfully!');
            console.log('Medical History Submitted:', medicalHistory);
        } catch (error: any) {
            setError(error.message || 'Failed to update medical history');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Medical History</h2>
                <p>Please provide your medical history including any conditions, surgeries, or ongoing treatments.</p>
                
                <div className="form-group">
                    <label htmlFor="medicalHistory">Medical History:</label>
                    <textarea
                        id="medicalHistory"
                        value={medicalHistory}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Enter your medical history, including any conditions, surgeries, medications, or ongoing treatments..."
                        required
                        disabled={loading}
                    />
                </div>
                
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Medical History'}
                </button>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/dashboard" className="btn">Back to Dashboard</Link>
                </div>
            </form>
        </div>
    );
};

export default MedicalHistoryForm;