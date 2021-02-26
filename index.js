const TelegramBot = require('node-telegram-bot-api');
const responses = require('./Models/response-model')
const messageModel = require('./Models/message-model');
const userModel = require('./Models/user-model');
process.env.TZ = 'America/Sao_Paulo'
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
  bot.onText(/\/ajuda/, (msg, match) =>{
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, responses.ajudaText);
  })
  bot.onText(/\/start/,  (msg, match) => {
      messageModel.handleMessage(true,bot,msg)
  })
  bot.onText(/\/recado/,  (msg, match) => {
    messageModel.handleMessage(true,bot,msg)
})
  bot.on('message', async (msg) => {
     messageModel.handleMessage(false,bot,msg)
  });
  
  userModel.priorityList()
