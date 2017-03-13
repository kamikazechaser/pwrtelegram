const User = require('.');

const bot = new User({
  token: ''
});

bot.sendMessage(chatId, 'Hello world');
