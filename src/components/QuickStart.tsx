import { useState } from "react";
import { Calendar, Rocket, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import AuditModal from "./AuditModal";

const QuickStart = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const steps = [
    {
      number: 1,
      icon: Calendar,
      title: "Бесплатная консультация",
      description: "30-минутный разбор ваших процессов и определение точек автоматизации. Получите персональный план внедрения AI.",
      features: [
        "Анализ текущих процессов",
        "Выявление точек автоматизации", 
        "Расчет потенциальной экономии",
        "План внедрения"
      ],
      buttonText: "Записаться на консультацию",
      buttonVariant: "outline" as const,
      onClick: () => setIsContactModalOpen(true)
    },
    {
      number: 2,
      icon: Rocket,
      title: "Пилотный проект",
      description: "Внедрение AI в одном процессе за 2 недели с гарантией результата. Увидите реальный эффект от автоматизации.",
      features: [
        "Быстрое внедрение за 2 недели",
        "Автоматизация одного процесса",
        "Обучение команды",
        "Гарантия результата"
      ],
      buttonText: "Запустить пилот",
      buttonVariant: "outline" as const,
      onClick: () => setIsAuditModalOpen(true)
    },
    {
      number: 3,
      icon: Users,
      title: "Полное внедрение",
      description: "Масштабирование на все процессы с поддержкой и обучением команды. Полная автоматизация бизнеса.",
      features: [
        "Масштабирование на все процессы",
        "Интеграция с существующими системами",
        "Обучение и поддержка команды",
        "Мониторинг и оптимизация"
      ],
      buttonText: "Обсудить проект",
      buttonVariant: "default" as const,
      onClick: () => setIsContactModalOpen(true)
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">
            Начните уже сегодня
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Три простых шага к автоматизации вашего бизнеса с помощью искусственного интеллекта
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 text-center border-0 bg-card hover:shadow-medium transition-all duration-300 animate-slide-up group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Номер шага */}
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-2xl font-bold text-white">{step.number}</span>
                <step.icon className="w-8 h-8 text-white absolute opacity-20" />
              </div>
              
              {/* Стрелка между шагами (только на десктопе) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-accent transition-colors">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>
              
              {/* Список возможностей */}
              <ul className="text-left mb-8 space-y-2">
                {step.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={step.buttonVariant} 
                className="w-full group-hover:scale-105 transition-transform"
                onClick={step.onClick}
              >
                {step.buttonText}
              </Button>
            </Card>
          ))}
        </div>
        
        {/* Дополнительная информация */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold mb-2">Быстрый старт</h4>
            <p className="text-sm text-muted-foreground">
              Консультация уже завтра
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Гарантия результата</h4>
            <p className="text-sm text-muted-foreground">
              Или возврат денег
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">Поддержка 24/7</h4>
            <p className="text-sm text-muted-foreground">
              Помощь на каждом этапе
            </p>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </section>
  );
};

export default QuickStart;
