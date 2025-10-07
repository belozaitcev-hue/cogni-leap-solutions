import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif]">
      <Hero />
      <Integrations />
      <Benefits />
      <UseCases />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
