import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BloodGroupForm: React.FC = () => {
    const [bloodGroup, setBloodGroup] = useState('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBloodGroup(event.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (!bloodGroup) {
            setError('Please select your blood group.');
            setLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSuccess('Blood group updated successfully!');
            console.log('Blood group submitted:', bloodGroup);
        } catch (error: any) {
            setError(error.message || 'Failed to update blood group');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Blood Group Information</h2>
                <p>Please select your blood group for emergency purposes.</p>
                
                <div className="form-group">
                    <label htmlFor="blood-group">Select Your Blood Group:</label>
                    <select 
                        id="blood-group" 
                        value={bloodGroup} 
                        onChange={handleChange}
                        disabled={loading}
                    >
                        <option value="">--Select Blood Group--</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Blood Group'}
                </button>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/dashboard" className="btn">Back to Dashboard</Link>
                </div>
            </form>
        </div>
    );
};

export default BloodGroupForm;