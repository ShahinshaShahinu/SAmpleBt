const TelegramBot = require("node-telegram-bot-api");
const token = "7172116775:AAGk0WbEcjcg3HnjAGztD-Fin1TpTV-uGXA"; // Replace with your own bot token
const bot = new TelegramBot(token, { polling: true });

module.exports=bot
