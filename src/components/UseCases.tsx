import { useState } from "react";
import { FileText, MessageSquare, Truck, BarChart3, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import documentsImg from "@/assets/usecase-documents.jpg";
import supportImg from "@/assets/usecase-support.jpg";
import logisticsImg from "@/assets/usecase-logistics.jpg";
import analyticsImg from "@/assets/usecase-analytics.jpg";

const useCases = [
  {
    icon: FileText,
    title: "Автоматизация документооборота",
    description: "Нейросети автоматически обрабатывают входящие документы, извлекают ключевые данные, классифицируют по категориям и направляют нужным специалистам. Система распознаёт тексты, таблицы и подписи, сокращая время обработки документов с часов до минут.",
    image: documentsImg,
  },
  {
    icon: MessageSquare,
    title: "AI-анализ клиентских обращений",
    description: "Искусственный интеллект анализирует тональность сообщений, автоматически категоризирует запросы по приоритету и теме, предлагает готовые ответы операторам. Система учится на истории обращений и помогает выявлять проблемные зоны в работе с клиентами.",
    image: supportImg,
  },
  {
    icon: Truck,
    title: "Интеллектуальная логистика и закупки",
    description: "AI прогнозирует спрос на товары, оптимизирует маршруты доставки и автоматически формирует заказы поставщикам. Система анализирует сезонность, тренды и внешние факторы, помогая минимизировать складские остатки и избежать дефицита.",
    image: logisticsImg,
  },
  {
    icon: BarChart3,
    title: "Автоматизация отчётности и аналитики",
    description: "Нейросети собирают данные из различных источников, формируют интерактивные отчёты и визуализации, выявляют аномалии и тренды. Система автоматически генерирует инсайты и рекомендации, позволяя руководству принимать решения на основе данных, а не интуиции.",
    image: analyticsImg,
  },
];

const UseCases = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCase = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-accent-soft/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 animate-fade-in">
          Примеры автоматизации с нейросетями
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-medium transition-all duration-300 border-0 cursor-pointer bg-background"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleCase(index)}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-accent-soft group-hover:bg-accent transition-colors duration-300">
                      <useCase.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-medium pt-2">{useCase.title}</h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 mt-2 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
