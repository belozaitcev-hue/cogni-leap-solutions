import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, GraduationCap, Briefcase, Send } from "lucide-react";
import BezuglenkoPhoto from "@/assets/Bezuglenko.jpg";
import ZaikaPhoto from "@/assets/Zaika.jpg";

const founders = [
  {
    name: "Безугленко Валентин Викторович",
    position: "Основатель и генеральный директор",
    birthYear: "1983 г.",
    companies: ["БКС Системы", "Паладин Инжиниринг"],
    education: [
      "Санкт-Петербургский государственный университет аэрокосмического приборостроения — экономист-программист",
    ],
    experience: "Более 15 лет опыта в создании высокотехнологичных проектов",
    achievements: [
      "Реализация проектов федерального и регионального масштаба",
      "Управление командами инженеров, IT-специалистов и аналитиков",
      "Спикер на ключевых отраслевых форумах"
    ],
    forums: ["Иннопром", "ПМЭФ", "Российская энергетическая неделя"],
    programs: ["РИФ", "ИРИ", "Минпромторг", "АСИ"],
    telegram: "@bezuglenko",
    quote: "Мы создаем не просто автоматизацию, а комплексные инженерные решения, которые трансформируют производственные процессы и выводят бизнес на новый уровень эффективности."
  },
  {
    name: "Заика Климентий Сергеевич",
    position: "Основатель и исполнительный директор",
    birthYear: "1983 г.",
    companies: ["БКС Системы"],
    education: ["СПбГТУ"],
    experience: "Эксперт в области технологических решений и управления",
    achievements: [
        "Реализация проектов федерального и регионального масштаба",
        "Управление командами инженеров, IT-специалистов и аналитиков",
        "Спикер на ключевых отраслевых форумах"
      ],
    forums: ["Иннопром", "ПМЭФ", "Российская энергетическая неделя"],
    programs: ["РИФ", "ИРИ", "Минпромторг", "АСИ"],
    telegram: "@klimzaika",
    quote: "Наша миссия — сделать передовые технологии доступными для российского бизнеса, обеспечивая реальную экономию и рост эффективности."
  }
];

const Founders = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 animate-fade-in">
            Основатели компании
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Реальные эксперты с многолетним опытом в области автоматизации и цифровизации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="border-0 bg-card/80 backdrop-blur-sm hover:shadow-medium transition-all duration-300 animate-slide-up overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="space-y-0 flex-1 flex flex-col">
                {/* Фото */}
                <div className="w-full">
                  {founder.name === "Безугленко Валентин Викторович" ? (
                    <img 
                      src={BezuglenkoPhoto} 
                      alt={founder.name}
                      className="w-full object-cover object-center"
                      style={{ height: '650px' }}
                    />
                  ) : founder.name === "Заика Климентий Сергеевич" ? (
                    <img 
                      src={ZaikaPhoto} 
                      alt={founder.name}
                      className="w-full object-cover"
                      style={{ height: '650px', objectPosition: 'center -40px' }}
                    />
                  ) : (
                    <div className="w-full bg-accent flex items-center justify-center text-white font-bold text-4xl" style={{ height: '650px' }}>
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>

                {/* Информация */}
                <div className="p-8 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{founder.name}</h3>
                    <p className="text-accent text-sm font-semibold mb-1">{founder.position}</p>
                    <p className="text-xs text-muted-foreground">{founder.birthYear}</p>
                  </div>

                  {/* Компании */}
                  {founder.companies && (
                    <div className="flex flex-wrap gap-2">
                      {founder.companies.map((company, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          <Briefcase className="w-3 h-3 mr-1" />
                          {company}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Образование */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <GraduationCap className="w-3 h-3" />
                      Образование
                    </div>
                    <div className="space-y-1">
                      {founder.education.map((edu, idx) => (
                        <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Опыт */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Users className="w-3 h-3" />
                      Опыт
                    </div>
                    <p className="text-xs text-muted-foreground">{founder.experience}</p>
                  </div>

                  {/* Достижения */}
                  {founder.achievements && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                        <Award className="w-3 h-3" />
                        Достижения
                      </div>
                      <ul className="space-y-1">
                        {founder.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                         {/* Форумы и программы */}
                         {(founder.forums || founder.programs) && (
                           <div className="space-y-2">
                             <div className="text-xs font-semibold text-muted-foreground">
                               Участие в форумах и программах
                             </div>
                             <div className="flex flex-wrap gap-1 mb-2.5">
                               {founder.forums?.map((forum, idx) => (
                                 <Badge key={idx} variant="outline" className="text-xs">
                                   {forum}
                                 </Badge>
                               ))}
                               {founder.programs?.map((program, idx) => (
                                 <Badge key={idx} variant="outline" className="text-xs">
                                   {program}
                                 </Badge>
                               ))}
                             </div>
                           </div>
                         )}

                  {/* Цитата */}
                  <div className="pt-4 border-t border-border/50 flex-1">
                    <blockquote className="text-lg font-semibold text-black italic leading-relaxed">
                      "{founder.quote}"
                    </blockquote>
                  </div>
                  
                  {/* Telegram иконка внизу карточки */}
                  {founder.telegram && (
                    <div className="flex flex-col items-center mt-4 space-y-2">
                      <a 
                        href={`https://t.me/${founder.telegram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-accent rounded-full text-white hover:bg-accent-medium transition-colors"
                        title={`Связаться с ${founder.name.split(' ')[0]} в Telegram`}
                      >
                        <Send className="w-5 h-5" />
                      </a>
                      <span className="text-xs text-muted-foreground">Телеграм для связи</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Статистика */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card/50 rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Лет опыта</div>
          </div>
          <div className="text-center p-6 bg-card/50 rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">2</div>
            <div className="text-sm text-muted-foreground">Компании</div>
          </div>
          <div className="text-center p-6 bg-card/50 rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Проектов</div>
          </div>
          <div className="text-center p-6 bg-card/50 rounded-xl">
            <div className="text-3xl font-bold text-accent mb-2">Федеральные</div>
            <div className="text-sm text-muted-foreground">Программы</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
