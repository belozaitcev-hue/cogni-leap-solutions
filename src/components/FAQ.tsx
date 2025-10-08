import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactModal from "./ContactModal";

const faqs = [
  {
    question: "Сколько времени занимает внедрение AI?",
    answer: "Пилотный проект занимает 2 недели, полное внедрение - от 1 до 3 месяцев в зависимости от сложности процессов. Мы начинаем с быстрого пилота, чтобы вы увидели результат уже через 2 недели."
  },
  {
    question: "Нужно ли менять существующие системы?",
    answer: "Нет, наши AI-решения интегрируются с вашими текущими CRM, ERP и другими системами без их замены. Мы работаем с 30+ популярными платформами и можем создать интеграцию с любой системой."
  },
  {
    question: "Какая гарантия на результат?",
    answer: "Мы гарантируем достижение заявленных показателей или возвращаем деньги. Гарантия прописана в договоре. Также предоставляем 6 месяцев бесплатной поддержки после внедрения."
  },
  {
    question: "Сколько стоит внедрение AI?",
    answer: "Стоимость зависит от сложности процессов и объема данных. Пилотный проект - от 150,000 ₽, полное внедрение - от 500,000 ₽. Обычно окупается за 3-6 месяцев."
  },
  {
    question: "Что если AI даст неправильный результат?",
    answer: "Наши системы имеют встроенные проверки и человеческий контроль. AI предлагает решения, но финальное решение всегда принимает человек. Система обучается на ваших данных и становится точнее со временем."
  },
  {
    question: "Можно ли начать с малого?",
    answer: "Да, мы рекомендуем начать с пилотного проекта на одном процессе. Это позволит оценить эффективность и масштабировать на другие процессы. Многие клиенты начинают с автоматизации документооборота."
  },
  {
    question: "Какие данные нужны для обучения AI?",
    answer: "Для обучения нужны примеры ваших документов, обращений клиентов или других данных, которые вы хотите автоматизировать. Чем больше качественных данных, тем точнее будет работать AI."
  },
  {
    question: "Что происходит после внедрения?",
    answer: "Мы предоставляем полную поддержку: обучение команды, техническая поддержка, мониторинг работы системы, обновления и доработки. Также помогаем масштабировать на новые процессы."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 px-4 bg-accent-soft/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">
            Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Ответы на самые популярные вопросы о внедрении AI в ваш бизнес
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="border-0 bg-card hover:shadow-soft transition-all duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/30 transition-colors rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-lg font-medium">{faq.question}</span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-8 border-l-2 border-accent/20">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <button 
            className="text-accent hover:text-accent/80 font-medium"
            onClick={() => setIsModalOpen(true)}
          >
            Задать вопрос специалисту →
          </button>
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

export default FAQ;
