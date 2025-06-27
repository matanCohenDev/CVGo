import "./FeaturesSection.css";
import { FaMagic, FaUsersCog, FaChartLine } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaMagic size={40} color="#6366F1" />,
      title: "Generate stunning CVs",
      description: "Create personalized, AI-powered CVs tailored to job descriptions in seconds. No design or writing needed.",
    },
    {
      icon: <FaUsersCog size={40} color="#6366F1" />,
      title: "Manage your job search",
      description: "Track your applications, organize company responses, and get interview reminders – all in one place.",
    },
    {
      icon: <FaChartLine size={40} color="#6366F1" />,
      title: "Analyze your progress",
      description: "See which CVs work best, get feedback insights, and optimize your approach to land your dream job faster.",
    },
  ];

  return (
    <section className="features-section">
      {features.map((f, idx) => (
        <div className="feature-card" key={idx}>
          <div className="icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </section>
  );
}
