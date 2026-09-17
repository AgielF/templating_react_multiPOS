import {
  CTASection,
  FeaturesSection,
  Footer,
  HeroSection,
  Navbar,
  PricingSection,
} from '../components/organisms';

/**
 * LandingPage - Page Component
 * Merangkai semua organisms menjadi landing page lengkap
 */
function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default LandingPage;
