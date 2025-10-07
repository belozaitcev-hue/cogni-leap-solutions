import { MessageSquare, Share2, Database, ShoppingBag, Globe, Mail } from "lucide-react";

const integrationIcons = [
  // Row 1
  { icon: MessageSquare, color: "bg-[#0088cc]", delay: "0s", animation: "animate-float-slow" },
  { icon: Share2, color: "bg-[#8b5cf6]", delay: "0.5s", animation: "animate-float-medium" },
  { icon: Database, color: "bg-[#10b981]", delay: "1s", animation: "animate-float-fast" },
  { icon: Mail, color: "bg-[#ea4335]", delay: "1.5s", animation: "animate-float-slow" },
  { icon: Globe, color: "bg-[#1877f2]", delay: "2s", animation: "animate-float-medium" },
  { icon: MessageSquare, color: "bg-[#25d366]", delay: "2.5s", animation: "animate-float-fast" },
  { icon: Share2, color: "bg-[#e4405f]", delay: "3s", animation: "animate-float-slow" },
  { icon: Database, color: "bg-[#ff6600]", delay: "3.5s", animation: "animate-float-medium" },
  
  // Row 2
  { icon: Mail, color: "bg-[#0077b5]", delay: "0.3s", animation: "animate-float-fast" },
  { icon: Globe, color: "bg-[#00b4d8]", delay: "0.8s", animation: "animate-float-slow" },
  { icon: MessageSquare, color: "bg-[#ffd700]", delay: "1.3s", animation: "animate-float-medium" },
  { icon: Share2, color: "bg-[#00d4ff]", delay: "1.8s", animation: "animate-float-fast" },
  { icon: Database, color: "bg-[#6366f1]", delay: "2.3s", animation: "animate-float-slow" },
  { icon: Mail, color: "bg-[#0088cc]", delay: "2.8s", animation: "animate-float-medium" },
  { icon: Globe, color: "bg-[#14b8a6]", delay: "3.3s", animation: "animate-float-fast" },
  
  // Row 3
  { icon: MessageSquare, color: "bg-[#d946ef]", delay: "0.6s", animation: "animate-float-medium" },
  { icon: Share2, color: "bg-[#334155]", delay: "1.1s", animation: "animate-float-slow" },
  { icon: Database, color: "bg-[#06b6d4]", delay: "1.6s", animation: "animate-float-fast" },
  { icon: Mail, color: "bg-[#f59e0b]", delay: "2.1s", animation: "animate-float-medium" },
  { icon: Globe, color: "bg-[#fbbf24]", delay: "2.6s", animation: "animate-float-slow" },
  { icon: MessageSquare, color: "bg-[#ef4444]", delay: "3.1s", animation: "animate-float-fast" },
  { icon: Share2, color: "bg-[#3b82f6]", delay: "3.6s", animation: "animate-float-medium" },
  { icon: Database, color: "bg-[#22c55e]", delay: "4s", animation: "animate-float-slow" },
];

const categories = [
  "Все интеграции",
  "Мессенджеры",
  "CRM",
  "Маркетплейсы",
  "Социальные сети",
  "Сервисы",
];

const Integrations = () => {
  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-8 animate-fade-in">
          Интеграции с мессенджерами,<br />чатами на сайте и CRM
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-foreground text-background"
                  : "bg-accent-soft/50 text-foreground hover:bg-accent-soft"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative h-[500px] flex flex-col justify-around">
          {/* Row 1 */}
          <div className="flex justify-center gap-8 px-4">
            {integrationIcons.slice(0, 8).map((item, index) => (
              <div
                key={`row1-${index}`}
                className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform`}
                style={{ animationDelay: item.delay }}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-8 px-4">
            {integrationIcons.slice(8, 15).map((item, index) => (
              <div
                key={`row2-${index}`}
                className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform`}
                style={{ animationDelay: item.delay }}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-8 px-4">
            {integrationIcons.slice(15).map((item, index) => (
              <div
                key={`row3-${index}`}
                className={`w-20 h-20 rounded-full ${item.color} flex items-center justify-center shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform`}
                style={{ animationDelay: item.delay }}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
