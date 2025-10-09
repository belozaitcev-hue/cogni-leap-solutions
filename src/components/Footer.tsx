import { Brain } from "lucide-react";
import BCSLogo from "@/assets/BCS logo.svg";

const Footer = () => {
  return (
    <footer className="border-t-0 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={BCSLogo} alt="BCS Logo" className="h-12" />
          </div>
          
          {/* Contact & Social */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:hello@blockchein-systems.ru" className="hover:text-accent transition-colors">
              hello@blockchein-systems.ru
            </a>
            <a href="tel:+79991234567" className="hover:text-accent transition-colors">
              +7 (999) 123-45-67
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Telegram
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              ВКонтакте
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground space-y-2">
          <div>© {new Date().getFullYear()} AI Автоматизация. Все права защищены.</div>
          <div>ООО "БКС СИСТЕМЫ" ИНН 7814760606</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
