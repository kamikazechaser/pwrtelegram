const User = require('.');

const bot = new User({
  token: ''
});

bot.sendMessage(chatId, '**Telegram Core API** :https://core.telegram.org/api#getting-started', {
    parse_mode: 'Markdown',
    no_webpage: true
  })
  .then((ctx) => {
    console.log(ctx)
  });