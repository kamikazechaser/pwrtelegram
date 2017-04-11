const should = require('should');
const User = require('../lib/index');

const timeout = 60 * 1000;

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
    it('sendPhotoExternal', function(done) {
        this.timeout(timeout)
        bot.sendPhotoExternal('kamikazechaser', 'http://i.imgur.com/4AiXzf8.jpg', 'Cat got money!').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });
    it('sendDocumentExternal', function(done) {
        this.timeout(timeout)
        bot.sendDocumentExternal('kamikazechaser', 'http://www.jeanmariedekoninck.mat.ulaval.ca/fileadmin/jmdk/Documents/Publications/2007_on_the_index_of_composition_of_integers_from_various_sets.pdf', 'Maths!').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });
    it('sendGifExternal', function(done) {
        this.timeout(timeout)
        bot.sendGifExternal('kamikazechaser', 'http://i.imgur.com/W0JfyHW.gif', 'Surprise!').then(ctx => {
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
    it('inviteUser', function(done) {
        this.timeout(timeout)
        bot.inviteUser('ThorsHammerBot', '-1001034576532').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });
    it('editTitle', function(done) {
        this.timeout(timeout)
        bot.editTitle('-1001060527903', 'Genesis: Test From PWRTelegram').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });   
    it('editAbout', function(done) {
        this.timeout(timeout)
        bot.editAbout('-1001060527903', 'Genesis: Test From PWRTelegram').then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });      
    it('getMembers', function(done) {
        this.timeout(timeout)
        bot.editTitle('-1001060527903', 'channelParticipantsAdmins', 0, 3).then(ctx => {
            should(ctx.ok).eql(true);
            return done();
        })
    });                  
});
