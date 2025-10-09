import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Bot } from 'lucide-react';
import { getTelegramConfig } from '@/config/telegram';
import { getAIResponse } from '@/config/ai';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! Я Дмитрий, AI-помощник. Могу рассказать о наших услугах по автоматизации бизнеса с помощью нейросетей. Задайте любой вопрос!',
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

    try {
      // Получаем ответ от нейросети
      const aiResponse = await getAIResponse(currentInput);
      
      // Создаем ответ бота
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

      // Отправляем сообщение в Telegram для уведомления
      const { botToken, chatId } = getTelegramConfig();
      
      if (chatId && chatId !== 'YOUR_CHAT_ID') {
        const telegramMessage = `
🤖 Чат-бот на сайте:

❓ Вопрос: ${currentInput}
🤖 Ответ: ${aiResponse}

🕐 Время: ${new Date().toLocaleString('ru-RU')}
        `.trim();
        
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        
        fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramMessage,
            parse_mode: 'HTML'
          })
        }).catch(console.error);
      }

    } catch (error) {
      console.error('Ошибка обработки сообщения:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Извините, произошла ошибка при обработке сообщения. Пожалуйста, попробуйте еще раз или воспользуйтесь формой обратной связи.',
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Кнопка открытия чата */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="sr-only">Открыть чат</span>
          </button>
        </div>
      )}

      {/* Чат окно */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 w-80 ${isMinimized ? 'h-12' : 'h-96'} bg-white rounded-lg shadow-2xl border transition-all duration-300`}>
          {/* Заголовок чата */}
          <div className="bg-accent text-accent-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-medium">Дмитрий</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-accent-foreground/20 p-1 rounded transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-accent-foreground/20 p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Область сообщений */}
          {!isMinimized && (
            <>
              <div className="h-64 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg ${
                        message.isUser
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString('ru-RU', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 max-w-xs px-3 py-2 rounded-lg">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Поле ввода */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Напишите ваш вопрос..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': '#3646DE' } as React.CSSProperties}
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-4 h-4" />
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

export default ChatBot;
