import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <Navbar isLoggedIn={true} />

      <section className="mission-section">
        {/* Left Content */}
        <div className="mission-left">
          <h1 className="mission-title">About Us</h1>

          <div className="mission-card">
            <div className="mission-text">
              <h3>Mission</h3>
              <p>
                CareCrypt is building India's first interoperable health record
                platform, unifying patient data across hospitals.
              </p>
              <p>
                It is the only platform connecting all hospitals with your
                entire medical history from any hospital in one timeline and
                partner with hospitals to connect their EHRs to our platform via
                APIs.
              </p>
            </div>
          </div>

          <div className="mission-card">
            <div className="mission-text">
              <h3>Our Technology Solutions</h3>
              <p>
                CareCrypt puts patients in control: a unified health profile
                that shares critical data instantly in emergencies while letting
                YOU decide exactly what doctors see and eliminates insurance
                delays.
              </p>
            </div>
          </div>

          <div className="mission-card">
            <div className="mission-text">
              <h3>Emergency-ready</h3>
              <p>
                Instantly access blood group, allergies, and life-saving history
                – even when families can't communicate.
              </p>
            </div>
          </div>

          <div className="mission-card">
            <div className="mission-text">
              <h3>Your data, your rules</h3>
              <p>
                Redact sensitive records (e.g., mental health, HIV status) or
                limit visibility – all permissions stay with you.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content (Image Card) */}
        <div className="mission-right">
          <div className="image-card">
            <img src="/images/about1.png" alt="Team working" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
