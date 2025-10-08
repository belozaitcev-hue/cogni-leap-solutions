import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Results from "@/components/Results";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import QuickStart from "@/components/QuickStart";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif]">
      <Hero />
      <Benefits />
      <Results />
      <UseCases />
      <Process />
      <ROICalculator />
      <Testimonials />
      <FAQ />
      <QuickStart />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
