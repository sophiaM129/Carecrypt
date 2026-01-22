import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn = false }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <div className="navbar-brand">
  <div className="navbar-title">
    <img src="/images/logo.png" alt="CareCrypt Logo" className="navbar-logo" />
    <span>CareCrypt</span>
  </div>
</div>

        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About Us</Link>
          <Link to="/medical-history" className="navbar-link">Medical History</Link>
          <Link to="/appointments" className="navbar-link">Appointments</Link>
          <Link to="/insurance" className="navbar-link">Insurance</Link>
          {isLoggedIn ? (
            <Link to="/profile" className="navbar-link">My Profile</Link>
          ) : (
            <>
              <Link to="/signup" className="navbar-auth-btn signup">Sign Up</Link>
              <Link to="/login" className="navbar-auth-btn login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
