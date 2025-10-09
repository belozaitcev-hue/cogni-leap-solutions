import { TrendingUp, Clock, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import { useState } from "react";

const Results = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const metrics = [
    {
      icon: Clock,
      value: "85%",
      label: "Сокращение времени обработки документов",
      description: "Средний показатель по всем внедренным проектам",
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      value: "3x",
      label: "Увеличение скорости ответов клиентам",
      description: "Автоматизация обработки обращений",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      value: "40%",
      label: "Снижение операционных расходов",
      description: "Экономия на рутинных операциях",
      color: "text-purple-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">
            Результаты наших клиентов
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Реальные цифры от компаний, которые уже автоматизировали свои процессы с помощью наших AI-решений
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="p-8 text-center border-0 bg-card hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-5xl font-bold text-accent mb-4">
                {metric.value}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {metric.label}
              </h3>
              <p className="text-muted-foreground">
                {metric.description}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-accent-soft/30 rounded-lg">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="font-semibold">Средний ROI наших проектов</p>
              <p className="text-2xl font-bold text-accent">320%</p>
              <p className="text-sm text-muted-foreground">за первый год внедрения</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Button 
              size="lg" 
              className="animate-slide-up"
              onClick={() => setIsModalOpen(true)}
            >
              Получить такой же результат
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Results;
