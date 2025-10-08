// Настройки для Telegram бота
// Для получения токена бота:
// 1. Найдите @BotFather в Telegram
// 2. Отправьте команду /newbot
// 3. Следуйте инструкциям для создания бота
// 4. Скопируйте токен бота и замените YOUR_BOT_TOKEN

// Для получения chat_id:
// 1. Добавьте бота в чат или отправьте ему сообщение
// 2. Перейдите по ссылке: https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
// 3. Найдите "chat":{"id": и скопируйте число
// 4. Замените YOUR_CHAT_ID на это число

export const TELEGRAM_CONFIG = {
  botToken: '8226976444:AAF2DpVu4UKeKK4sENPqsjK1OGDkOTbVqxg', // Токен вашего бота
  chatId: '294173078',     // Ваш личный Chat ID
};

// Альтернативный способ - через переменные окружения
// Создайте файл .env в корне проекта и добавьте:
// VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
// VITE_TELEGRAM_CHAT_ID=your_chat_id_here

export const getTelegramConfig = () => {
  return {
    botToken: import.meta.env.VITE_TELEGRAM_BOT_TOKEN || TELEGRAM_CONFIG.botToken,
    chatId: import.meta.env.VITE_TELEGRAM_CHAT_ID || TELEGRAM_CONFIG.chatId,
  };
};
