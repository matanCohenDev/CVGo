import "./PricingSection.css";

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Pricing & Plans</h2>
      <p className="pricing-subtitle">
        Choose the plan that fits your job search journey.
      </p>
      <div className="plans-container">
        <div className="plan-card">
          <h3 className="plan-name">Starter</h3>
          <p className="plan-price">$19<span>/month</span></p>
          <ul className="features">
            <li>Basic resume generator</li>
            <li>Track up to 5 job applications</li>
            <li>Limited design templates</li>
          </ul>
          <button className="plan-btn">Start Free Trial</button>
        </div>

        <div className="plan-card highlighted">
          <h3 className="plan-name">Pro</h3>
          <p className="plan-price">$49<span>/month</span></p>
          <ul className="features">
            <li>Full resume builder with AI suggestions</li>
            <li>Auto-apply to jobs</li>
            <li>Email job tracking & smart inbox</li>
            <li>Custom branding & portfolio profile</li>
          </ul>
          <button className="plan-btn primary">Start Free Trial</button>
        </div>

        <div className="plan-card">
          <h3 className="plan-name">Premium</h3>
          <p className="plan-price">$99<span>/month</span></p>
          <ul className="features">
            <li>All Pro features</li>
            <li>Unlimited job submissions</li>
            <li>Dedicated support</li>
            <li>Team collaboration features</li>
          </ul>
          <button className="plan-btn">Start Free Trial</button>
        </div>
      </div>
    </section>
  );
}
