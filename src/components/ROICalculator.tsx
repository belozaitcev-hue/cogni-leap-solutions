import { useState } from "react";
import { Calculator, TrendingUp, Users, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import ContactModal from "./ContactModal";

const ROICalculator = () => {
  const [employees, setEmployees] = useState([10]);
  const [salary, setSalary] = useState([50000]);
  const [hoursSaved, setHoursSaved] = useState([20]);
  const [efficiency, setEfficiency] = useState([30]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const monthlySavings = employees[0] * salary[0] * (hoursSaved[0] / 160) * (efficiency[0] / 100);
  const yearlySavings = monthlySavings * 12;
  const implementationCost = yearlySavings * 0.3; // 30% от годовой экономии
  const netSavings = yearlySavings - implementationCost;
  const roi = ((netSavings / implementationCost) * 100).toFixed(0);

  return (
    <section className="py-24 px-4 bg-accent-soft/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">
            Рассчитайте экономию для вашего бизнеса
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Узнайте, сколько вы сможете сэкономить с помощью автоматизации процессов
          </p>
        </div>
        
        <Card className="p-8 border-0 bg-card shadow-medium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Левая часть - настройки */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-semibold">Параметры расчета</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-accent" />
                    <label className="text-lg font-medium">
                      Количество сотрудников: {employees[0]}
                    </label>
                  </div>
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <label className="text-lg font-medium">
                      Средняя зарплата: {salary[0].toLocaleString()} ₽
                    </label>
                  </div>
                  <Slider
                    value={salary}
                    onValueChange={setSalary}
                    max={200000}
                    min={30000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>30,000 ₽</span>
                    <span>200,000 ₽</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <label className="text-lg font-medium">
                      Часов экономии в месяц: {hoursSaved[0]}
                    </label>
                  </div>
                  <Slider
                    value={hoursSaved}
                    onValueChange={setHoursSaved}
                    max={40}
                    min={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>5 часов</span>
                    <span>40 часов</span>
                  </div>
                </div>

                <div>
                  <label className="text-lg font-medium mb-3 block">
                    Эффективность автоматизации: {efficiency[0]}%
                  </label>
                  <Slider
                    value={efficiency}
                    onValueChange={setEfficiency}
                    max={50}
                    min={10}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая часть - результаты */}
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-accent mb-2">
                  {yearlySavings.toLocaleString()} ₽
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                  Экономия в год
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-accent-soft/30 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">
                    {monthlySavings.toLocaleString()} ₽
                  </div>
                  <p className="text-sm text-muted-foreground">В месяц</p>
                </div>
                <div className="p-4 bg-accent-soft/30 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {roi}%
                  </div>
                  <p className="text-sm text-muted-foreground">ROI</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-muted-foreground">Стоимость внедрения:</span>
                  <span className="font-semibold">{implementationCost.toLocaleString()} ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-700">Чистая экономия:</span>
                  <span className="font-bold text-green-600">{netSavings.toLocaleString()} ₽</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full mt-8"
                onClick={() => setIsModalOpen(true)}
              >
                Получить детальный расчёт
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Расчеты основаны на средних показателях наших клиентов
              </p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default ROICalculator;
