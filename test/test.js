const should = require('should');
const User = require('../lib/index');

const timeout = 30 * 1000;

const bot = new User({
  token: process.env.TOKEN,
  baseUrl: process.env.BASE_URL
});

describe('module.exports', function() {
    it('Exposes a function', function() {
        should(User).be.a.Function();
    });
});

describe('bot', function() {
    it('Is an instance of user', function() {
        should(bot).be.an.instanceof(User);
    });
});

describe('Errors', function() {
    it('Undefined error', function(done) {
        bot.sendMessage('nouserexistswiththisaccount', 'ok').then(ctx => {
            should(ctx).eql(undefined)
            return done();
        })
    })
})

describe('Methods', function() {
    it('sendMessage', function(done) {
        this.timeout(timeout)
        bot.sendMessage('kamikazechaser', '**Test**', {parse_mode: 'Markdown'}).then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });
    it('setTyping', function(done) {
        this.timeout(timeout)
        bot.setTyping('kamikazechaser', 'sendMessageTypingAction').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });
    it('setUploadTyping', function(done) {
        this.timeout(timeout)
        bot.setUploadTyping('kamikazechaser', 'sendMessageUploadAudioAction', 25).then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });
    it('forwardMessage', function(done) {
        this.timeout(timeout)
        bot.forwardMessage('kamikazechaser', '72175').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });              
});
