import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-neural.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30 animate-float"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-hero-sm md:text-hero font-medium leading-tight">
            Автоматизация, которая думает за вас.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
            Мы внедряем нейросети, чтобы бизнес работал быстрее, а люди — умнее.
          </p>
          
          <div className="pt-6">
            <Button 
              variant="hero" 
              size="xl"
              className="animate-slide-up"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
