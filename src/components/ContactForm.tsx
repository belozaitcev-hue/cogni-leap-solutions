import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { getTelegramConfig } from '@/config/telegram';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Формируем сообщение для Telegram
      const telegramMessage = `
🆕 Новая заявка с сайта!

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📞 Телефон: ${formData.phone}
${formData.message ? `💬 Сообщение: ${formData.message}` : ''}

🕐 Время: ${new Date().toLocaleString('ru-RU')}
      `.trim();

      // Получаем конфигурацию Telegram
      const { botToken, chatId } = getTelegramConfig();
      
      // Проверяем, что Chat ID настроен
      if (!chatId || chatId === 'YOUR_CHAT_ID') {
        throw new Error('Chat ID не настроен. Обратитесь к разработчику для настройки Telegram бота.');
      }
      
      const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
      
      const response = await fetch(telegramUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: 'HTML'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.description || 'Ошибка отправки сообщения');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setError(error instanceof Error ? error.message : 'Произошла ошибка при отправке сообщения. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-lg font-medium mb-2">
          ✅ Сообщение отправлено!
        </div>
        <p className="text-green-700 mb-4">
          Мы свяжемся с вами в ближайшее время
        </p>
        <Button 
          onClick={() => {
            setIsSubmitted(false);
            setError(null);
          }}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-100"
        >
          Отправить еще
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <div className="text-red-600 text-sm">
            ❌ {error}
          </div>
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Имя *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
          style={{ '--tw-ring-color': '#3646DE' } as React.CSSProperties}
          placeholder="Введите ваше имя"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
          style={{ '--tw-ring-color': '#3646DE' } as React.CSSProperties}
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Номер телефона *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
          style={{ '--tw-ring-color': '#3646DE' } as React.CSSProperties}
          placeholder="+7 (999) 123-45-67"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Сообщение (необязательно)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Расскажите о вашем проекте..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full text-white font-medium py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#3646DE' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2B3BC7'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3646DE'}
      >
        {isSubmitting ? 'Отправляем...' : 'Связаться с нами'}
      </Button>
    </form>
  );
};

export default ContactForm;
