import { FileText, MessageSquare, Truck, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const useCases = [
  {
    icon: FileText,
    title: "Автоматизация документооборота",
  },
  {
    icon: MessageSquare,
    title: "AI-анализ клиентских обращений",
  },
  {
    icon: Truck,
    title: "Интеллектуальная логистика и закупки",
  },
  {
    icon: BarChart3,
    title: "Автоматизация отчётности и аналитики",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 px-4 bg-accent-soft/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 animate-fade-in">
          Примеры автоматизации с нейросетями
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="group p-8 hover:shadow-medium transition-all duration-300 border-border cursor-pointer bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent-soft group-hover:bg-accent transition-colors duration-300">
                  <useCase.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="text-xl font-medium pt-2">{useCase.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
