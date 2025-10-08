# Получение Chat ID для Telegram бота

## Токен бота уже настроен: ✅
`8226976444:AAF2DpVu4UKeKK4sENPqsjK1OGDkOTbVqxg`

## ⚠️ ВАЖНО: Нужен ваш личный Chat ID (число), а не username!

Username `@bezuglenko` не работает, потому что:
- Username может быть скрыт в настройках приватности
- Бот не может отправлять сообщения по username без предварительного контакта
- Нужен именно Chat ID - числовой идентификатор

## Шаги для получения Chat ID:

### 1. Найдите вашего бота в Telegram
- Откройте Telegram
- Найдите бота `@bkspaladin_bot` 
- Или перейдите по ссылке: `https://t.me/bkspaladin_bot`

### 2. Отправьте боту любое сообщение
- Напишите боту любое сообщение (например: "Привет")
- Нажмите "START" если это первое сообщение

### 3. Получите Chat ID
После отправки сообщения выполните команду в терминале:

```bash
curl "https://api.telegram.org/bot8226976444:AAF2DpVu4UKeKK4sENPqsjK1OGDkOTbVqxg/getUpdates"
```

### 4. Найдите Chat ID в ответе
В ответе найдите строку вида:
```json
"chat":{"id":123456789,"type":"private","username":"your_username"}
```

Скопируйте число после `"id":` (в примере это `123456789`)

### 5. Обновите конфигурацию
Замените `@bkspaladin_bot` в файле `src/config/telegram.ts` на ваш Chat ID:

```typescript
export const TELEGRAM_CONFIG = {
  botToken: '8226976444:AAF2DpVu4UKeKK4sENPqsjK1OGDkOTbVqxg',
  chatId: '123456789', // Замените на ваш личный Chat ID (не username бота!)
};
```

### 6. Тестирование
После настройки Chat ID:
1. Запустите проект: `npm run dev`
2. Откройте форму "Обсудить проект"
3. Заполните поля и отправьте
4. Проверьте, что сообщение пришло в Telegram

## Альтернативный способ через переменные окружения:

Создайте файл `.env` в корне проекта:
```
VITE_TELEGRAM_BOT_TOKEN=8226976444:AAF2DpVu4UKeKK4sENPqsjK1OGDkOTbVqxg
VITE_TELEGRAM_CHAT_ID=ваш_chat_id
```

## Пример успешного ответа:
```json
{
  "ok": true,
  "result": [
    {
      "update_id": 123456789,
      "message": {
        "message_id": 1,
        "from": {
          "id": 123456789,
          "is_bot": false,
          "first_name": "Иван",
          "username": "ivan_user"
        },
        "chat": {
          "id": 123456789,
          "first_name": "Иван",
          "username": "ivan_user",
          "type": "private"
        },
        "date": 1703123456,
        "text": "Привет"
      }
    }
  ]
}
```

В этом случае Chat ID = `123456789`
