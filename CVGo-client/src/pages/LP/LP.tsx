import './LP.css';
import HeaderSection from './components/HeaderSection/HeaderSection';
import HeroSection from './components/HeroSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import CVBenefitsSection from './components/CVBenefitsSection/CVBenefitsSection';
import PricingSection from './components/PricingSection/PricingSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import FooterSection from './components/FooterSection/FooterSection';

export default function LP() {
    return (
        <div className="LP">
            <HeaderSection />
            <HeroSection />
            <FeaturesSection />
            <CVBenefitsSection />
            <PricingSection />
            <TestimonialsSection />
            <FooterSection />
        </div>
    );
}
