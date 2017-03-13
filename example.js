const User = require('.');

bot = new User({
  accessToken: ''
});

bot.sendMessage(237799109, "Well, *hello* there!", {parse_mode: 'markdown'})
   .then(res=>bot.sendMessage({chat_id: '237799109', text: 'The text succeeded, Master!'})
   .catch(err=>console.log(err))

bot.sendMessage({
  chatId: '',
  text: 'Hello world!'
}, (error, ctx) => {
  console.log(ctx)
});
