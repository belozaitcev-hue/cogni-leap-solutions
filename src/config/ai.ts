// Конфигурация для AI сервисов
export const AI_CONFIG = {
  // Hugging Face API (бесплатный, но может быть медленным)
  huggingFace: {
    apiUrl: 'https://api-inference.huggingface.co/models',
    models: {
      dialogpt: 'microsoft/DialoGPT-medium',
      mistral: 'mistralai/Mistral-7B-Instruct-v0.1',
      llama: 'meta-llama/Llama-2-7b-chat-hf'
    },
    // Токен можно получить бесплатно на huggingface.co
    apiKey: process.env.VITE_HUGGINGFACE_TOKEN || ''
  },
  
  // OpenAI API (платный, но быстрый и качественный)
  openai: {
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    model: 'gpt-3.5-turbo',
    apiKey: process.env.VITE_OPENAI_API_KEY || ''
  },
  
  // Groq API (бесплатный и быстрый)
  groq: {
    apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'deepseek-r1-distill-llama-70b',
    apiKey: process.env.VITE_GROQ_API_KEY || ''
  }
};

// Функция для получения ответа от AI
export const getAIResponse = async (message: string): Promise<string> => {
  // Сначала пробуем бесплатные сервисы
  
  // 1. Пробуем Groq (если есть ключ)
  if (AI_CONFIG.groq.apiKey) {
    try {
      const response = await fetch(AI_CONFIG.groq.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AI_CONFIG.groq.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: AI_CONFIG.groq.model,
          messages: [
            {
              role: 'system',
              content: 'Ты AI-помощник компании CogniLeap Solutions, которая занимается автоматизацией бизнеса с помощью нейросетей. Отвечай на русском языке, будь дружелюбным и профессиональным. Если не знаешь ответа, предложи связаться с экспертами.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message) {
          return data.choices[0].message.content.trim();
        }
      }
    } catch (error) {
      console.error('Groq API error:', error);
    }
  }

  // 2. Пробуем OpenAI (если есть ключ)
  if (AI_CONFIG.openai.apiKey) {
    try {
      const response = await fetch(AI_CONFIG.openai.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AI_CONFIG.openai.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: AI_CONFIG.openai.model,
          messages: [
            {
              role: 'system',
              content: 'Ты AI-помощник компании CogniLeap Solutions, которая занимается автоматизацией бизнеса с помощью нейросетей. Отвечай на русском языке, будь дружелюбным и профессиональным.'
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 200,
          temperature: 0.7
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message) {
          return data.choices[0].message.content.trim();
        }
      }
    } catch (error) {
      console.error('OpenAI API error:', error);
    }
  }

  // 3. Fallback к предустановленным ответам
  return getFallbackResponse(message);
};

// Предустановленные ответы на основе ключевых слов
const getFallbackResponse = (message: string): string => {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('автоматизация') || lowerMessage.includes('нейросеть') || lowerMessage.includes('ии') || lowerMessage.includes('искусственный интеллект')) {
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
    return 'Привет! Я AI-помощник CogniLeap Solutions. Расскажу о наших услугах по автоматизации бизнеса с помощью нейросетей. Что вас интересует?';
  }
  
  if (lowerMessage.includes('кейс') || lowerMessage.includes('пример') || lowerMessage.includes('что умеет')) {
    return 'Мы автоматизируем обработку документов, анализ клиентских обращений, логистику, отчетность и многое другое. Посмотрите раздел "Примеры автоматизации" на нашем сайте!';
  }
  
  return 'Спасибо за ваш вопрос! Я передам его нашим специалистам, и мы свяжемся с вами в ближайшее время для подробного ответа. Можете также оставить заявку через форму на сайте.';
};
