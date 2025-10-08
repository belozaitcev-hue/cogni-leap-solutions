import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactModal from "./ContactModal";
import { useState } from "react";

const testimonials = [
  {
    name: "Алексей Петров",
    position: "Директор по развитию, ООО «ТехноСервис»",
    text: "Внедрение AI для обработки документов сократило время на рутинные задачи на 80%. Теперь сотрудники занимаются стратегическими задачами, а не бумажной работой.",
    rating: 5,
    company: "ТехноСервис"
  },
  {
    name: "Мария Сидорова",
    position: "Руководитель отдела продаж, ИП «Торговый дом»",
    text: "Автоматизация клиентских обращений помогла увеличить скорость ответов в 3 раза. Клиенты стали получать помощь мгновенно, что значительно повысило их удовлетворенность.",
    rating: 5,
    company: "Торговый дом"
  },
  {
    name: "Дмитрий Козлов",
    position: "Генеральный директор, ООО «Логистик Плюс»",
    text: "AI-прогнозирование спроса и оптимизация закупок позволили снизить складские остатки на 35% и избежать дефицита товаров. Экономия составила более 2 млн рублей в год.",
    rating: 5,
    company: "Логистик Плюс"
  },
  {
    name: "Елена Волкова",
    position: "Финансовый директор, ООО «СтройИнвест»",
    text: "Автоматизация отчетности освободила 15 часов в неделю. Теперь мы получаем аналитику в реальном времени и можем принимать решения на основе актуальных данных.",
    rating: 5,
    company: "СтройИнвест"
  },
  {
    name: "Сергей Морозов",
    position: "IT-директор, ООО «Розничная сеть»",
    text: "Интеграция AI с нашей CRM системой прошла безболезненно. Система работает стабильно уже полгода, и мы планируем расширять автоматизацию на другие процессы.",
    rating: 5,
    company: "Розничная сеть"
  },
  {
    name: "Анна Новикова",
    position: "Операционный директор, ООО «МедиаГрупп»",
    text: "Результат превзошел ожидания. За 2 месяца внедрения мы автоматизировали 70% рутинных процессов. ROI составил 280% в первый год.",
    rating: 5,
    company: "МедиаГрупп"
  }
];

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Реальные отзывы от компаний, которые уже получили результат от внедрения AI-автоматизации
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 border-0 bg-card hover:shadow-medium transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-xs text-accent font-medium mt-1">{testimonial.company}</p>
                </div>
                <Quote className="w-6 h-6 text-accent/30 group-hover:text-accent/60 transition-colors" />
              </div>
              
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.rating}.0 из 5.0
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 p-6 bg-accent-soft/30 rounded-lg mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9</div>
              <div className="flex justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg">Средняя оценка клиентов</p>
              <p className="text-muted-foreground">на основе 47+ отзывов</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="animate-slide-up"
            onClick={() => setIsModalOpen(true)}
          >
            Получить такой же результат
          </Button>
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

export default Testimonials;
