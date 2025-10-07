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

const integrationIcons = [
  // Row 1
  { icon: iconAmoCRM, delay: "0s", animation: "animate-float-slow" },
  { icon: iconBitrix24, delay: "0.5s", animation: "animate-float-medium" },
  { icon: icon1c, delay: "1s", animation: "animate-float-fast" },
  { icon: iconGetcourse, delay: "1.5s", animation: "animate-float-slow" },
  { icon: iconAvito, delay: "2s", animation: "animate-float-medium" },
  { icon: iconAliexpress, delay: "2.5s", animation: "animate-float-fast" },
  { icon: iconMessenger, delay: "3s", animation: "animate-float-slow" },
  
  // Row 2
  { icon: iconFacebook, delay: "0.3s", animation: "animate-float-fast" },
  { icon: iconGmail, delay: "0.8s", animation: "animate-float-slow" },
  { icon: iconCalendar, delay: "1.3s", animation: "animate-float-medium" },
  { icon: iconAmoCRM, delay: "1.8s", animation: "animate-float-fast" },
  { icon: iconBitrix24, delay: "2.3s", animation: "animate-float-slow" },
  { icon: icon1c, delay: "2.8s", animation: "animate-float-medium" },
  { icon: iconGetcourse, delay: "3.3s", animation: "animate-float-fast" },
  
  // Row 3
  { icon: iconAvito, delay: "0.6s", animation: "animate-float-medium" },
  { icon: iconAliexpress, delay: "1.1s", animation: "animate-float-slow" },
  { icon: iconMessenger, delay: "1.6s", animation: "animate-float-fast" },
  { icon: iconFacebook, delay: "2.1s", animation: "animate-float-medium" },
  { icon: iconGmail, delay: "2.6s", animation: "animate-float-slow" },
  { icon: iconCalendar, delay: "3.1s", animation: "animate-float-fast" },
];

const Integrations = () => {
  return (
    <section className="py-24 px-4 bg-background overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 animate-fade-in">
          Интеграции с мессенджерами,<br />чатами на сайте и CRM
        </h2>

        <div className="relative h-[500px] flex flex-col justify-around">
          {/* Row 1 */}
          <div className="flex justify-center gap-8 px-4">
            {integrationIcons.slice(0, 7).map((item, index) => (
              <div
                key={`row1-${index}`}
                className={`w-20 h-20 rounded-full bg-white shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform overflow-hidden`}
                style={{ animationDelay: item.delay }}
              >
                <img src={item.icon} alt="Integration" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-8 px-4">
            {integrationIcons.slice(7, 14).map((item, index) => (
              <div
                key={`row2-${index}`}
                className={`w-20 h-20 rounded-full bg-white shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform overflow-hidden`}
                style={{ animationDelay: item.delay }}
              >
                <img src={item.icon} alt="Integration" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-8 px-4">
            {integrationIcons.slice(14).map((item, index) => (
              <div
                key={`row3-${index}`}
                className={`w-20 h-20 rounded-full bg-white shadow-lg ${item.animation} cursor-pointer hover:scale-110 transition-transform overflow-hidden`}
                style={{ animationDelay: item.delay }}
              >
                <img src={item.icon} alt="Integration" className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
