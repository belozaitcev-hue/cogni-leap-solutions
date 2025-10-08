import { Settings, Bot, TrendingUp, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: Settings,
    title: "Оптимизация до 10× быстрее",
    description: "чем ручной труд",
  },
  {
    icon: Bot,
    title: "Интеграция без кода",
    description: "мы подключаем к вашим системам",
  },
  {
    icon: TrendingUp,
    title: "ROI растёт уже через 1 месяц",
    description: "измеримые результаты",
  },
  {
    icon: Brain,
    title: "AI-анализ данных",
    description: "для решений, а не догадок",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-accent-soft/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 animate-fade-in">
          Что делает нас эффективными
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-medium transition-all duration-300 border-0 animate-slide-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <benefit.icon className="w-10 h-10 mb-4 text-accent" />
              <h3 className="text-xl font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
