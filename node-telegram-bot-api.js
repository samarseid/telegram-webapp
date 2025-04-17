// src/bot.js
import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';
dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const url = 'http://192.168.60.195:5173/';  // front‑ending URL
  const keyboard = {
    reply_markup: {
      inline_keyboard: [[
        { text: '📱 Ilovani ochish', web_app: { url } }
      ]]
    }
  };
  bot.sendMessage(chatId, 'Ilovamiz Telegram ichida ochilsinmi?', keyboard);
});
