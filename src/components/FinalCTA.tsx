import { Button } from "@/components/ui/button";
import AuditModal from "./AuditModal";
import { useState } from "react";

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-medium leading-tight">
            Ваш бизнес уже готов к автоматизации
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Мы поможем понять, где нейросети принесут максимум пользы
          </p>
          
          <div className="pt-6">
            <Button 
              variant="hero" 
              size="xl"
              className="animate-slide-up"
              onClick={() => setIsModalOpen(true)}
            >
              Запросить аудит процессов
            </Button>
          </div>
        </div>
      </div>
      
      {/* Audit Modal */}
      <AuditModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default FinalCTA;
