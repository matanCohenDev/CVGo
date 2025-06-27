import React from "react";
import "./HeaderSection.css";

const HeaderSection: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">CVGo</div>


        <a href="#start" className="trial-button">
          Start a free trial
        </a>
      </div>
    </header>
  );
};

export default HeaderSection;
