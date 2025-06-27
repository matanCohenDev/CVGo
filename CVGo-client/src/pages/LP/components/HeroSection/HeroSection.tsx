import React from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* טקסט צד שמאל */}
        <div className="hero-text">
          <h1>Your Smart Way <br /> to Get Hired</h1>
          <p>
            From resume creation to interview invitations,<br />
            CVGo helps you manage your entire job search process<br />
            with AI-driven insights and smart email integration.
          </p>
          <a href="#start" className="cta-button">
            Start a free trial <span className="arrow">→</span>
          </a>
        </div>

        {/* תמונה צד ימין */}
        <div className="hero-image">
          <img src="/src/assets/HeroPic.png" alt="Resume preview" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
