import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-0 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-accent" />
            <span className="text-lg font-medium">AI Автоматизация</span>
          </div>
          
          {/* Contact & Social */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:info@ai-automation.ru" className="hover:text-accent transition-colors">
              info@ai-automation.ru
            </a>
            <a href="tel:+79991234567" className="hover:text-accent transition-colors">
              +7 (999) 123-45-67
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Telegram
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} AI Автоматизация. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
