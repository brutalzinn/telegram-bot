const TelegramBot = require('node-telegram-bot-api');
const responses = require('./Models/response-model')
const sender = require('./Models/mail-model')

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});



  bot.onText(/\/ajuda/, function(msg, match){
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, responses.ajudaText);
  })
  bot.on('new_chat_members', async (msg) => {
    const chatId = msg.chat.id;
 bot.sendMessage(chatId, 'Bem-vindo', msg.username);
  });