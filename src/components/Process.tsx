import { Search, Cog, TestTube, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Анализ бизнес-процессов",
  },
  {
    number: "02",
    icon: Cog,
    title: "Подбор моделей и инструментов",
  },
  {
    number: "03",
    icon: TestTube,
    title: "Тестирование и интеграция",
  },
  {
    number: "04",
    icon: Users,
    title: "Обучение команды и поддержка",
  },
];

const Process = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 animate-fade-in">
          Как мы внедряем AI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                className="p-6 h-full border-border hover:shadow-soft transition-all duration-300 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl font-light text-accent-soft mb-4">
                  {step.number}
                </div>
                <step.icon className="w-8 h-8 mb-4 text-accent" />
                <h3 className="text-lg font-medium leading-tight">{step.title}</h3>
              </Card>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-accent-soft">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
