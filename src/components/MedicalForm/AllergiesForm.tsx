import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllergiesForm: React.FC = () => {
    const [allergies, setAllergies] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        if (!allergies.trim()) {
            setError('Please enter your allergies.');
            setLoading(false);
            return;
        }

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSuccess('Allergies updated successfully!');
            console.log('Allergies submitted:', allergies);
        } catch (error: any) {
            setError(error.message || 'Failed to update allergies');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Allergies Information</h2>
                <p>Please list any allergies or sensitivities you have.</p>
                
                <div className="form-group">
                    <label htmlFor="allergies">Allergies (comma separated):</label>
                    <input
                        type="text"
                        id="allergies"
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        placeholder="e.g., Peanuts, Shellfish, Latex, Penicillin"
                        disabled={loading}
                    />
                </div>
                
                {error && <p className="error">{error}</p>}
                {success && <p className="success">{success}</p>}
                
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Allergies'}
                </button>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Link to="/dashboard" className="btn">Back to Dashboard</Link>
                </div>
            </form>
        </div>
    );
};

export default AllergiesForm;