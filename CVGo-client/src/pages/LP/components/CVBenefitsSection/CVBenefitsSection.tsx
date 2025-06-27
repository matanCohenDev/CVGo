import "./CVBenefitsSection.css";
// import analysisImage from "../assets/cv-analytics.png";
// import teamImage from "../assets/remote-team.png";

export default function CVBenefitsSection() {
  return (
    <section className="cv-benefits-section">
      <div className="benefit-row">
        <img src="src/assets/resume-dashboard.png" alt="Dashboard" className="benefit-image" />
        <div className="benefit-text">
          <h2>Create your professional CV in seconds</h2>
          <p>Just fill in your personal details and CVGo builds a polished, modern resume tailored to your industry.</p>
          <a href="#" className="benefit-link">Start a free trial <span className="arrow">→</span></a>
        </div>
      </div>

      <div className="benefit-row reverse">
        <div className="benefit-text">
          <h2>Apply to jobs automatically – even while you sleep</h2>
          <p>With CVGo, your resume is matched and submitted to the right roles instantly, boosting your chances without lifting a finger.</p>
          <a href="#" className="benefit-link">Start a free trial <span className="arrow">→</span></a>
        </div>
        <img src="src/assets/resume-dashboard.png" alt="Analytics" className="benefit-image" />
      </div>

      <div className="benefit-row">
        <img src="src/assets/resume-dashboard.png" alt="Teamwork" className="benefit-image" />
        <div className="benefit-text">
          <h2>Track every job you applied to in one place</h2>
          <p>Get notified when a recruiter opens your CV, schedules an interview, or gives feedback.</p>
          <a href="#" className="benefit-link">Start a free trial <span className="arrow">→</span></a>
        </div>
      </div>

      <div className="benefit-row reverse">
        <div className="benefit-text">
          <h2>Your professional portfolio, beautifully presented</h2>
          <p>Each user gets a personal profile page to showcase their CV, projects, skills and get noticed faster.</p>
          <a href="#" className="benefit-link">Start a free trial <span className="arrow">→</span></a>
        </div>
        <img src="src/assets/resume-dashboard.png" alt="Analytics" className="benefit-image" />
      </div>
    </section>
  );
}
