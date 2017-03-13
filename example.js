const User = require('.');

bot = new User({
  accessToken: ''
});

bot.sendMessage({
  chatId: '',
  text: 'Hello world!'
}, (error, ctx) => {
  console.log(ctx)
});