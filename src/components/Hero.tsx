import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-neural.jpg";
import ParticleBackground from "./ParticleBackground";
import icon1c from "@/assets/integrations/1c.png";
import iconAliexpress from "@/assets/integrations/aliexpress.png";
import iconAmoCRM from "@/assets/integrations/amoCRM.png";
import iconAvito from "@/assets/integrations/avito.png";
import iconBitrix24 from "@/assets/integrations/bitrix24.png";
import iconFacebook from "@/assets/integrations/facebook.png";
import iconMessenger from "@/assets/integrations/facebook-messenger.png";
import iconGetcourse from "@/assets/integrations/getcourse.png";
import iconGmail from "@/assets/integrations/gmail.png";
import iconCalendar from "@/assets/integrations/google-calendar.png";
import iconInstagram from "@/assets/integrations/instagram.png";
import iconJivo from "@/assets/integrations/jivo.png";
import iconLamoda from "@/assets/integrations/lamoda.png";
import iconMailru from "@/assets/integrations/mailru.png";
import iconMoysklad from "@/assets/integrations/moysklad.png";
import iconOzon from "@/assets/integrations/ozon.png";
import iconPlanfix from "@/assets/integrations/planfix.png";
import iconRetailCRM from "@/assets/integrations/retailCRM.png";
import iconSberMegamarket from "@/assets/integrations/sber-megamarket.png";
import iconSendpulse from "@/assets/integrations/sendpulse.png";
import iconTelegram from "@/assets/integrations/telegram.png";
import iconVk from "@/assets/integrations/vk.png";
import iconWb from "@/assets/integrations/wb.png";
import iconYandex360 from "@/assets/integrations/yandex360.png";
import iconYandexDzen from "@/assets/integrations/yandex-dzen.png";
import iconYandexMarket from "@/assets/integrations/yandex-market.png";
import iconYandexPochta from "@/assets/integrations/yandex-pochta.png";
import iconYclients from "@/assets/integrations/yclients.png";
import iconZoom from "@/assets/integrations/zoom.png";

const integrationIcons = [
  // Row 1
  { icon: iconTelegram, delay: "0s", animation: "animate-float-slow" },
  { icon: iconVk, delay: "0.4s", animation: "animate-float-medium" },
  { icon: iconWb, delay: "0.8s", animation: "animate-float-fast" },
  { icon: iconAmoCRM, delay: "1.2s", animation: "animate-float-slow" },
  { icon: iconBitrix24, delay: "1.6s", animation: "animate-float-medium" },
  { icon: icon1c, delay: "2s", animation: "animate-float-fast" },
  { icon: iconOzon, delay: "2.4s", animation: "animate-float-slow" },
  { icon: iconYandexMarket, delay: "2.8s", animation: "animate-float-medium" },
  { icon: iconGetcourse, delay: "0.2s", animation: "animate-float-fast" },
  { icon: iconAvito, delay: "0.6s", animation: "animate-float-slow" },
  { icon: iconAliexpress, delay: "1s", animation: "animate-float-medium" },
  { icon: iconMessenger, delay: "1.4s", animation: "animate-float-fast" },
  { icon: iconInstagram, delay: "1.8s", animation: "animate-float-slow" },
  { icon: iconJivo, delay: "2.2s", animation: "animate-float-medium" },
  { icon: iconYandex360, delay: "2.6s", animation: "animate-float-fast" },
  { icon: iconYandexDzen, delay: "3s", animation: "animate-float-slow" },
  
  // Row 2
  { icon: iconFacebook, delay: "0.3s", animation: "animate-float-medium" },
  { icon: iconGmail, delay: "0.7s", animation: "animate-float-fast" },
  { icon: iconYandexPochta, delay: "1.1s", animation: "animate-float-slow" },
  { icon: iconCalendar, delay: "1.5s", animation: "animate-float-medium" },
  { icon: iconLamoda, delay: "1.9s", animation: "animate-float-fast" },
  { icon: iconMailru, delay: "2.3s", animation: "animate-float-slow" },
  { icon: iconZoom, delay: "2.7s", animation: "animate-float-medium" },
  { icon: iconYclients, delay: "3.1s", animation: "animate-float-fast" },
  { icon: iconMoysklad, delay: "0.5s", animation: "animate-float-slow" },
  { icon: iconPlanfix, delay: "0.9s", animation: "animate-float-medium" },
  { icon: iconRetailCRM, delay: "1.3s", animation: "animate-float-fast" },
  { icon: iconSberMegamarket, delay: "1.7s", animation: "animate-float-slow" },
  { icon: iconSendpulse, delay: "2.1s", animation: "animate-float-medium" },
  { icon: iconRetailCRM, delay: "2.5s", animation: "animate-float-fast" },
  { icon: iconPlanfix, delay: "2.9s", animation: "animate-float-slow" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-20 animate-float"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-hero-sm md:text-hero font-medium leading-tight">
            Автоматизация, которая думает за вас.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
            Мы внедряем нейросети, чтобы бизнес работал быстрее, а люди — умнее.
          </p>
          
          <div className="pt-6">
            <Button 
              variant="hero" 
              size="xl"
              className="animate-slide-up"
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </div>

      {/* Integrations Section */}
      <div className="relative z-10 w-full px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-medium animate-fade-in">
            Доступные интеграции уже сейчас
          </h2>
        </div>

        <div className="flex flex-col gap-8 w-full">
          {/* Row 1 */}
          <div className="flex justify-center gap-6 flex-wrap">
            {integrationIcons.slice(0, 16).map((item, index) => (
              <div
                key={`row1-${index}`}
                className={`w-16 h-16 rounded-full bg-white shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform overflow-hidden`}
                style={{ animationDelay: item.delay }}
              >
                <img src={item.icon} alt="Integration" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-6 flex-wrap">
            {integrationIcons.slice(16).map((item, index) => (
              <div
                key={`row2-${index}`}
                className={`w-16 h-16 rounded-full bg-white shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform overflow-hidden`}
                style={{ animationDelay: item.delay }}
              >
                <img src={item.icon} alt="Integration" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
