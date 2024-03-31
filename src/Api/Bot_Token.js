const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.USER_TOKEN; // Replace with your own bot token

const bot = new TelegramBot(token, { polling: true });

module.exports=bot
 