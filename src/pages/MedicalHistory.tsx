import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './MedicalHistory.css';

const MedicalHistory: React.FC = () => {
  // Personal Information
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactRelation, setEmergencyContactRelation] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');

  // Blood & Vital Information
  const [bloodGroup, setBloodGroup] = useState('');
  const [height, setHeight] = useState('');
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weight, setWeight] = useState('');
  const [weightUnit, setWeightUnit] = useState('kg');

  // Allergies
  const [hasAllergies, setHasAllergies] = useState('');
  const [allergens, setAllergens] = useState<string[]>([]);
  const [otherAllergens, setOtherAllergens] = useState('');

  // Chronic & Past Medical Conditions
  const [medicalConditions, setMedicalConditions] = useState<string[]>([]);
  const [otherConditions, setOtherConditions] = useState('');

  // Medications
  const [takingMedications, setTakingMedications] = useState('');
  const [medications, setMedications] = useState([{ name: '', dosage: '' }]);

  // Surgeries & Hospitalizations
  const [hasSurgeries, setHasSurgeries] = useState('');
  const [surgeries, setSurgeries] = useState([{ name: '', date: '', hospital: '' }]);

  // Mental Health History (with toggle)
  const [mentalHealthPermission, setMentalHealthPermission] = useState(false);
  const [hasMentalHealthCondition, setHasMentalHealthCondition] = useState('');
  const [mentalHealthConditions, setMentalHealthConditions] = useState<string[]>([]);
  const [otherMentalHealth, setOtherMentalHealth] = useState('');

  // Infectious Diseases (with toggle)
  const [infectiousPermission, setInfectiousPermission] = useState(false);
  const [hivStatus, setHivStatus] = useState('');
  const [hepatitis, setHepatitis] = useState('');
  const [tuberculosis, setTuberculosis] = useState('');
  const [otherInfectious, setOtherInfectious] = useState('');

  // Immunization Records
  const [immunizations, setImmunizations] = useState<string[]>([]);
  const [otherImmunizations, setOtherImmunizations] = useState('');

  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const allergenOptions = ['Peanuts', 'Tree Nuts', 'Shellfish', 'Fish', 'Eggs', 'Milk', 'Soy', 'Wheat', 'Latex', 'Penicillin', 'Dust', 'Pollen'];
  const medicalConditionOptions = ['Diabetes Type 1', 'Diabetes Type 2', 'Hypertension', 'Asthma', 'Heart Disease', 'Kidney Disease'];
  const mentalHealthOptions = ['Depression', 'Anxiety Disorder', 'Bipolar Disorder', 'Schizophrenia'];
  const immunizationOptions = ['Tetanus', 'COVID-19', 'Influenza', 'Hepatitis B'];

  const handleAllergenChange = (allergen: string) => {
    setAllergens(prev => 
      prev.includes(allergen) 
        ? prev.filter(a => a !== allergen)
        : [...prev, allergen]
    );
  };

  const handleMedicalConditionChange = (condition: string) => {
    setMedicalConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handleMentalHealthChange = (condition: string) => {
    setMentalHealthConditions(prev => 
      prev.includes(condition) 
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );
  };

  const handleImmunizationChange = (immunization: string) => {
    setImmunizations(prev => 
      prev.includes(immunization) 
        ? prev.filter(i => i !== immunization)
        : [...prev, immunization]
    );
  };

  const addMedication = () => {
    setMedications([...medications, { name: '', dosage: '' }]);
  };

  const removeMedication = (index: number) => {
    setMedications(medications.filter((_, i) => i !== index));
  };

  const updateMedication = (index: number, field: 'name' | 'dosage', value: string) => {
    const updated = [...medications];
    updated[index][field] = value;
    setMedications(updated);
  };

  const addSurgery = () => {
    setSurgeries([...surgeries, { name: '', date: '', hospital: '' }]);
  };

  const removeSurgery = (index: number) => {
    setSurgeries(surgeries.filter((_, i) => i !== index));
  };

  const updateSurgery = (index: number, field: 'name' | 'date' | 'hospital', value: string) => {
    const updated = [...surgeries];
    updated[index][field] = value;
    setSurgeries(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess('Medical information updated successfully!');
      console.log('Medical Information Submitted:', {
        fullName, dateOfBirth, gender, contactNumber, emailAddress,
        emergencyContactName, emergencyContactRelation, emergencyContactPhone,
        bloodGroup, height, weight, 
        hasAllergies, allergens, otherAllergens,
        medicalConditions, otherConditions, 
        takingMedications, medications,
        hasSurgeries, surgeries, 
        mentalHealthPermission, hasMentalHealthCondition,
        mentalHealthConditions, otherMentalHealth, 
        infectiousPermission, hivStatus, hepatitis, tuberculosis, otherInfectious,
        immunizations, otherImmunizations
      });
    } catch (error: any) {
      setError(error.message || 'Failed to update medical information');
    } finally {
      setLoading(false);
    }
  };

  // Toggle switch component
  const ToggleSwitch = ({ isActive, onToggle, disabled }: { isActive: boolean; onToggle: () => void; disabled?: boolean }) => (
    <div 
      className={`toggle-switch ${isActive ? 'active' : ''}`}
      onClick={() => !disabled && onToggle()}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
    />
  );

  return (
    <div className="medical-history-page">
      <Navbar isLoggedIn={true} />
      
      <div className="page-header">
        <h1>Medical Information Form</h1>
        <p>See your entire medical history from any hospital in one timeline.</p>
      </div>
        
      <div className="medical-form-container">
        <div className="medical-form-card">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">👤</div>
                  <h3>Personal Information</h3>
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender *</label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                    disabled={loading}
                  >
                    <option value="">--Select Gender--</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number *</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address *</label>
                  <input
                    type="email"
                    id="emailAddress"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>
              </div>
              
              <div className="emergency-contact">
                <h4>Emergency Contact</h4>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="emergencyContactName">Name *</label>
                    <input
                      type="text"
                      id="emergencyContactName"
                      value={emergencyContactName}
                      onChange={(e) => setEmergencyContactName(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContactRelation">Relation *</label>
                    <input
                      type="text"
                      id="emergencyContactRelation"
                      value={emergencyContactRelation}
                      onChange={(e) => setEmergencyContactRelation(e.target.value)}
                      placeholder="e.g., Spouse, Parent, Sibling"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emergencyContactPhone">Phone *</label>
                    <input
                      type="tel"
                      id="emergencyContactPhone"
                      value={emergencyContactPhone}
                      onChange={(e) => setEmergencyContactPhone(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Blood & Vital Information */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">🩸</div>
                  <h3>Blood & Vital Information</h3>
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="bloodGroup">Blood Group *</label>
                  <select
                    id="bloodGroup"
                    value={bloodGroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                    required
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
                <div className="form-group">
                  <label htmlFor="height">Height *</label>
                  <div className="input-with-unit">
                    <input
                      type="number"
                      id="height"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <select
                      value={heightUnit}
                      onChange={(e) => setHeightUnit(e.target.value)}
                      disabled={loading}
                    >
                      <option value="cm">cm</option>
                      <option value="ft">ft</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="weight">Weight *</label>
                  <div className="input-with-unit">
                    <input
                      type="number"
                      id="weight"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <select
                      value={weightUnit}
                      onChange={(e) => setWeightUnit(e.target.value)}
                      disabled={loading}
                    >
                      <option value="kg">kg</option>
                      <option value="lbs">lbs</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Allergies */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">⚠️</div>
                  <h3>Allergies</h3>
                </div>
              </div>
              
              <div className="form-group">
                <label>Do you have any allergies? *</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="hasAllergies"
                      value="Yes"
                      checked={hasAllergies === 'Yes'}
                      onChange={(e) => setHasAllergies(e.target.value)}
                      disabled={loading}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hasAllergies"
                      value="No"
                      checked={hasAllergies === 'No'}
                      onChange={(e) => setHasAllergies(e.target.value)}
                      disabled={loading}
                    />
                    No
                  </label>
                </div>
              </div>
              
              {hasAllergies === 'Yes' && (
                <div className="allergens-section">
                  <label>Select Allergens:</label>
                  <div className="checkbox-grid">
                    {allergenOptions.map(allergen => (
                      <label key={allergen} className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={allergens.includes(allergen)}
                          onChange={() => handleAllergenChange(allergen)}
                          disabled={loading}
                        />
                        {allergen}
                      </label>
                    ))}
                  </div>
                  <div className="form-group">
                    <label htmlFor="otherAllergens">Other Allergens:</label>
                    <input
                      type="text"
                      id="otherAllergens"
                      value={otherAllergens}
                      onChange={(e) => setOtherAllergens(e.target.value)}
                      placeholder="Enter other allergens..."
                      disabled={loading}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Chronic & Past Medical Conditions */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">🏥</div>
                  <h3>Chronic & Past Medical Conditions</h3>
                </div>
              </div>
              
              <div className="checkbox-grid">
                {medicalConditionOptions.map(condition => (
                  <label key={condition} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={medicalConditions.includes(condition)}
                      onChange={() => handleMedicalConditionChange(condition)}
                      disabled={loading}
                    />
                    {condition}
                  </label>
                ))}
              </div>
              <div className="form-group">
                <label htmlFor="otherConditions">Other Conditions:</label>
                <input
                  type="text"
                  id="otherConditions"
                  value={otherConditions}
                  onChange={(e) => setOtherConditions(e.target.value)}
                  placeholder="Enter other medical conditions..."
                  disabled={loading}
                />
              </div>
            </div>

            {/* Medications */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">💊</div>
                  <h3>Medications</h3>
                </div>
              </div>
              
              <div className="form-group">
                <label>Are you currently taking any medications? *</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="takingMedications"
                      value="Yes"
                      checked={takingMedications === 'Yes'}
                      onChange={(e) => setTakingMedications(e.target.value)}
                      disabled={loading}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="takingMedications"
                      value="No"
                      checked={takingMedications === 'No'}
                      onChange={(e) => setTakingMedications(e.target.value)}
                      disabled={loading}
                    />
                    No
                  </label>
                </div>
              </div>
              
              {takingMedications === 'Yes' && (
                <div className="medications-section">
                  <label>Current Medications:</label>
                  {medications.map((med, index) => (
                    <div key={index} className="medication-item">
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Medication Name:</label>
                          <input
                            type="text"
                            value={med.name}
                            onChange={(e) => updateMedication(index, 'name', e.target.value)}
                            disabled={loading}
                          />
                        </div>
                        <div className="form-group">
                          <label>Dosage:</label>
                          <input
                            type="text"
                            value={med.dosage}
                            onChange={(e) => updateMedication(index, 'dosage', e.target.value)}
                            placeholder="e.g., 10mg twice daily"
                            disabled={loading}
                          />
                        </div>
                      </div>
                      {medications.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMedication(index)}
                          className="remove-btn"
                          disabled={loading}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addMedication}
                    className="add-btn"
                    disabled={loading}
                  >
                    + Add Medication
                  </button>
                </div>
              )}
            </div>

            {/* Surgeries & Hospitalizations */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">🔪</div>
                  <h3>Surgeries & Hospitalizations</h3>
                </div>
              </div>
              
              <div className="form-group">
                <label>Have you had any surgeries? *</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="hasSurgeries"
                      value="Yes"
                      checked={hasSurgeries === 'Yes'}
                      onChange={(e) => setHasSurgeries(e.target.value)}
                      disabled={loading}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hasSurgeries"
                      value="No"
                      checked={hasSurgeries === 'No'}
                      onChange={(e) => setHasSurgeries(e.target.value)}
                      disabled={loading}
                    />
                    No
                  </label>
                </div>
              </div>
              
              {hasSurgeries === 'Yes' && (
                <div className="surgeries-section">
                  <label>Surgeries:</label>
                  {surgeries.map((surgery, index) => (
                    <div key={index} className="surgery-item">
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Surgery Name:</label>
                          <input
                            type="text"
                            value={surgery.name}
                            onChange={(e) => updateSurgery(index, 'name', e.target.value)}
                            disabled={loading}
                          />
                        </div>
                        <div className="form-group">
                          <label>Date:</label>
                          <input
                            type="date"
                            value={surgery.date}
                            onChange={(e) => updateSurgery(index, 'date', e.target.value)}
                            disabled={loading}
                          />
                        </div>
                        <div className="form-group">
                          <label>Hospital:</label>
                          <input
                            type="text"
                            value={surgery.hospital}
                            onChange={(e) => updateSurgery(index, 'hospital', e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      {surgeries.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSurgery(index)}
                          className="remove-btn"
                          disabled={loading}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addSurgery}
                    className="add-btn"
                    disabled={loading}
                  >
                    + Add Surgery
                  </button>
                </div>
              )}
            </div>

            {/* Mental Health History - WITH TOGGLE */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">🧠</div>
                  <h3>Mental Health History</h3>
                </div>
                <ToggleSwitch 
                  isActive={mentalHealthPermission}
                  onToggle={() => setMentalHealthPermission(!mentalHealthPermission)}
                  disabled={loading}
                />
              </div>
              
              {mentalHealthPermission && (
                <>
                  <div className="form-group">
                    <label>Have you ever been diagnosed with a mental health condition? *</label>
                    <div className="radio-group">
                      <label>
                        <input
                          type="radio"
                          name="hasMentalHealthCondition"
                          value="Yes"
                          checked={hasMentalHealthCondition === 'Yes'}
                          onChange={(e) => setHasMentalHealthCondition(e.target.value)}
                          disabled={loading}
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="hasMentalHealthCondition"
                          value="No"
                          checked={hasMentalHealthCondition === 'No'}
                          onChange={(e) => setHasMentalHealthCondition(e.target.value)}
                          disabled={loading}
                        />
                        No
                      </label>
                    </div>
                  </div>
                  
                  {hasMentalHealthCondition === 'Yes' && (
                    <div className="mental-health-section">
                      <label>Specify Conditions:</label>
                      <div className="checkbox-grid">
                        {mentalHealthOptions.map(condition => (
                          <label key={condition} className="checkbox-item">
                            <input
                              type="checkbox"
                              checked={mentalHealthConditions.includes(condition)}
                              onChange={() => handleMentalHealthChange(condition)}
                              disabled={loading}
                            />
                            {condition}
                          </label>
                        ))}
                      </div>
                      <div className="form-group">
                        <label htmlFor="otherMentalHealth">Other:</label>
                        <input
                          type="text"
                          id="otherMentalHealth"
                          value={otherMentalHealth}
                          onChange={(e) => setOtherMentalHealth(e.target.value)}
                          placeholder="Enter other mental health conditions..."
                          disabled={loading}
                        />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Infectious Diseases - WITH TOGGLE */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">🦠</div>
                  <h3>Infectious Diseases</h3>
                </div>
                <ToggleSwitch 
                  isActive={infectiousPermission}
                  onToggle={() => setInfectiousPermission(!infectiousPermission)}
                  disabled={loading}
                />
              </div>
              
              {infectiousPermission && (
                <div className="infectious-section">
                  <div className="form-group">
                    <label htmlFor="hivStatus">HIV Status:</label>
                    <select
                      id="hivStatus"
                      value={hivStatus}
                      onChange={(e) => setHivStatus(e.target.value)}
                      disabled={loading}
                    >
                      <option value="">--Select Status--</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                      <option value="Prefer Not to Say">Prefer Not to Say</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="hepatitis">Hepatitis B or C:</label>
                    <select
                      id="hepatitis"
                      value={hepatitis}
                      onChange={(e) => setHepatitis(e.target.value)}
                      disabled={loading}
                    >
                      <option value="">--Select Status--</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                      <option value="Unknown">Unknown</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="tuberculosis">Tuberculosis:</label>
                    <select
                      id="tuberculosis"
                      value={tuberculosis}
                      onChange={(e) => setTuberculosis(e.target.value)}
                      disabled={loading}
                    >
                      <option value="">--Select Status--</option>
                      <option value="Positive">Positive</option>
                      <option value="Negative">Negative</option>
                      <option value="Unknown">Unknown</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="otherInfectious">Other Infectious Diseases:</label>
                    <input
                      type="text"
                      id="otherInfectious"
                      value={otherInfectious}
                      onChange={(e) => setOtherInfectious(e.target.value)}
                      placeholder="Enter other infectious diseases..."
                      disabled={loading}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Immunization Records */}
            <div className="form-section">
              <div className="section-header">
                <div className="section-header-content">
                  <div className="section-icon">💉</div>
                  <h3>Immunization Records</h3>
                </div>
              </div>
              
              <div className="checkbox-grid">
                {immunizationOptions.map(immunization => (
                  <label key={immunization} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={immunizations.includes(immunization)}
                      onChange={() => handleImmunizationChange(immunization)}
                      disabled={loading}
                    />
                    {immunization}
                  </label>
                ))}
              </div>
              <div className="form-group">
                <label htmlFor="otherImmunizations">Other Immunizations:</label>
                <input
                  type="text"
                  id="otherImmunizations"
                  value={otherImmunizations}
                  onChange={(e) => setOtherImmunizations(e.target.value)}
                  placeholder="Enter other immunizations..."
                  disabled={loading}
                />
              </div>
            </div>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <div className="form-actions">
              <button type="submit" disabled={loading} className="submit-btn">
                {loading ? 'Saving...' : 'Save All Medical Information'}
              </button>
              <Link to="/dashboard" className="back-btn">Back to Dashboard</Link>
            </div>
            
            {/* Continue to Insurance Section */}
            <div className="continue-section">
              <div className="continue-content">
                <h3>Ready to Complete Your Profile?</h3>
                <p>Don't forget to add your insurance information to complete your medical profile.</p>
                <Link to="/insurance" className="continue-btn">
                  Continue to Insurance
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
