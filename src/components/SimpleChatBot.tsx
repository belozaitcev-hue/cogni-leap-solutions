import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const SimpleChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! Я AI-помощник CogniLeap Solutions. Могу рассказать о наших услугах по автоматизации бизнеса с помощью нейросетей. Задайте любой вопрос!',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getSimpleResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('автоматизация') || lowerMessage.includes('нейросеть') || lowerMessage.includes('ии')) {
      return 'Мы специализируемся на внедрении нейросетей для автоматизации бизнес-процессов. Наши решения помогают экономить время и увеличивать прибыль. Хотите узнать больше о конкретных кейсах?';
    }
    
    if (lowerMessage.includes('цена') || lowerMessage.includes('стоимость') || lowerMessage.includes('сколько')) {
      return 'Стоимость внедрения нейросетей зависит от сложности задач и объема данных. Мы предлагаем индивидуальные решения и гибкую систему оплаты. Давайте обсудим ваш проект подробнее!';
    }
    
    if (lowerMessage.includes('время') || lowerMessage.includes('срок') || lowerMessage.includes('быстро')) {
      return 'Сроки внедрения нейросетей варьируются от 2 недель до 3 месяцев в зависимости от сложности проекта. Мы всегда стремимся к быстрой реализации без потери качества.';
    }
    
    if (lowerMessage.includes('интеграция') || lowerMessage.includes('подключить') || lowerMessage.includes('crm')) {
      return 'Мы интегрируем нейросети с популярными CRM, мессенджерами, сайтами и другими системами. Поддерживаем более 30 различных платформ. Какие системы использует ваш бизнес?';
    }
    
    if (lowerMessage.includes('привет') || lowerMessage.includes('здравствуйте') || lowerMessage.includes('добрый')) {
      return 'Привет! Я помощник CogniLeap Solutions. Расскажу о наших услугах по автоматизации бизнеса с помощью нейросетей. Что вас интересует?';
    }
    
    if (lowerMessage.includes('кейс') || lowerMessage.includes('пример') || lowerMessage.includes('что умеет')) {
      return 'Мы автоматизируем обработку документов, анализ клиентских обращений, логистику, отчетность и многое другое. Посмотрите раздел "Примеры автоматизации" на нашем сайте!';
    }
    
    return 'Спасибо за ваш вопрос! Я передам его нашим специалистам, и мы свяжемся с вами в ближайшее время для подробного ответа. Можете также оставить заявку через форму на сайте.';
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    // Имитируем задержку обработки
    setTimeout(() => {
      const response = getSimpleResponse(currentInput);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Плавающая кнопка чата */}
      <button
        className="fixed bottom-6 right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg hover:bg-accent/90 transition-colors duration-300 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Чат окно */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 w-80 ${isMinimized ? 'h-12' : 'h-96'} bg-white rounded-lg shadow-2xl border transition-all duration-300`}>
          {/* Заголовок чата */}
          <div className="bg-accent text-accent-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              <span className="font-medium">AI-Помощник</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-accent-foreground/20 p-1 rounded transition-colors"
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent-foreground/20 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Область сообщений */}
              <div className="flex-1 p-4 overflow-y-auto h-64 space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-xs mt-1 block ${
                        message.isUser ? 'text-accent-foreground/70' : 'text-muted-foreground/70'
                      }`}>
                        {message.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-lg bg-muted text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-sm">Печатает...</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Поле ввода */}
              <div className="p-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1 border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Напишите сообщение..."
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-accent text-accent-foreground p-2 rounded-lg hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SimpleChatBot;
