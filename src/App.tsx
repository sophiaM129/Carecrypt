import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MedicalHistory from './pages/MedicalHistory';
import Appointments from './pages/Appointments';
import Insurance from './pages/Insurance';
import Profile from './pages/Profile';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import MedicalHistoryForm from './components/MedicalForm/MedicalHistoryForm';
import AllergiesForm from './components/MedicalForm/AllergiesForm';
import BloodGroupForm from './components/MedicalForm/BloodGroupForm';
import InsuranceForm from './components/MedicalForm/InsuranceForm';
import QRCodeGenerator from './components/QRCode/QRCodeGenerator';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/medical-history" element={<MedicalHistory />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/medical-history-form" element={<MedicalHistoryForm />} />
        <Route path="/allergies" element={<AllergiesForm />} />
        <Route path="/blood-group" element={<BloodGroupForm />} />
        <Route path="/insurance-form" element={<InsuranceForm />} />
        <Route path="/qr-code" element={<QRCodeGenerator medicalData="Sample medical data" />} />
      </Routes>
    </Router>
  );
};

export default App;