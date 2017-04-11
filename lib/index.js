const request = require('request-promise');
const qs = require('querystring');
const pino = require('pino');

const pkg = require('../package.json');

const error = {
  noToken: 'You need to specify your access token',
  noParams: 'You need to specify the required parameters, consult the documentation for more details'
};

const logger = new pino({
  name: `${pkg.name} v${pkg.version}`,
  prettyPrint: true
});

class User {

/**
  * @class User
  * @constructor
  * @param {String} token Bot Token
  * @param {String} baseUrl (Optional) Custom pwetelegram API instance URL
  **/

  constructor(opts) {
    opts.token ? this.token = opts.token : outputError(error.noToken);
    this.baseUrl = opts.baseUrl || 'api.pwrtelegram.xyz';
  }

  _request(method, params) {
    const options = {};
    options.uri = `https://${this.baseUrl}/user${this.token}/${method}?${params}`;
    options.headers = {
      'content-type': 'application/json',
      'accept': 'application/x-www-form-urlencoded'
    };
    options.json = true;
    console.log(options)
    return request(options)
      .then(ctx => {;
        if (ctx.ok) {
          return ctx;
        } else {
          outputError(ctx);
        }
      });
  };

/**
  * Send text message.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} text Text of the message to be sent
  * @param  {Object} [options] Additional Telegram query options  
  * @return {Promise} Updates
  * @see https://core.telegram.org/method/messages.sendMessage
  **/
  sendMessage(chatId, message, opts = {}) {
    opts.peer = chatId;
    opts.message = message;
    return this._request('messages.sendMessage', qs.stringify(opts));
  };

/**
  * Send photo from url.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} url Input url
  * @param  {String} caption Media caption  
  * @param  {Object} [options] Additional Telegram query options  
  * @return {Promise} Updates
  * @see https://core.telegram.org/method/messages.sendMedia
  **/
  sendPhotoExternal(chatId, url, caption, opts = {}) {
    opts.peer = chatId;
    opts.media = JSON.stringify({
      '_': 'inputMediaPhotoExternal',
      'url': url,
      'caption': caption
    })
    return this._request('messages.sendMedia', qs.stringify(opts));
  };  

/**
  * Send gif from url.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} url Input url
  * @param  {String} caption Media caption  
  * @param  {Object} [options] Additional Telegram query options  
  * @return {Promise} Updates
  * @see https://core.telegram.org/method/messages.sendMedia
  **/
  sendGifExternal(chatId, url, caption, opts = {}) {
    opts.peer = chatId;
    opts.media = JSON.stringify({
      '_': 'inputMediaGifExternal',
      'url': url,
      'q': caption
    })
    return this._request('messages.sendMedia', qs.stringify(opts));
  };

/**
  * Send document from url.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} url Input url
  * @param  {String} caption Media caption  
  * @param  {Object} [options] Additional Telegram query options  
  * @return {Promise} Updates
  * @see https://core.telegram.org/method/messages.sendMedia
  **/
  sendDocumentExternal(chatId, url, caption, opts = {}) {
    opts.peer = chatId;
    opts.media = JSON.stringify({
      '_': 'inputMediaDocumentExternal',
      'url': url,
      'caption': caption
    })
    return this._request('messages.sendMedia', qs.stringify(opts));
  };   

/**
  * Set typing.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} action Type of action to be sent
  * @return {Promise} Boolean
  * @see https://core.telegram.org/method/messages.setTyping
  **/
  setTyping(chatId, chatAction, opts = {}) {
    opts.peer = chatId;
    opts.action = JSON.stringify({
      '_': chatAction
    })
    return this._request('messages.setTyping', qs.stringify(opts));
  };

/**
  * Set typing with uploads.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} action Type of action to be sent
  * @param  {Number} progress Upload progress  
  * @return {Promise} Boolean
  * @see https://core.telegram.org/method/messages.setTyping
  **/
  setUploadTyping(chatId, chatAction, progress, opts = {}) {
    opts.peer = chatId;
    opts.action = JSON.stringify({
      '_': chatAction,
      'progress': progress
    })
    return this._request('messages.setTyping', qs.stringify(opts));
  };  

/**
  * Forward text message.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {Number|String} messageId Unique identifier of the message to be forwarded
  * @return {Promise}
  * @see https://core.telegram.org/method/messages.forwardMessage
  **/
  forwardMessage(chatId, messageId, opts = {}) {
    opts.peer = chatId;
    opts.id = messageId;
    return this._request('messages.forwardMessage', qs.stringify(opts));
  };

/**
  * Invite user to a channel/supergroup.
  * @param  {Number|String} chatId Unique identifier for the channel/supergroup
  * @param  {String} userId Unique identifier for the user to be added
  * @return {Promise} Updates
  * @see https://tjhorner.com/tl-schema/method/channels.inviteToChannel
  **/
  inviteUser(chatId, users, opts = {}) {
    opts.channel = chatId;
    opts.users = JSON.stringify([users]);
    return this._request('channels.inviteToChannel', qs.stringify(opts));
  };

/**
  * Edit supergroup/channel title.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} title New title for the supergroup/channel
  * @return {Promise} Updates
  * @see https://tjhorner.com/tl-schema/method/channels.editTitle
  **/
  editTitle(chatId, title, opts = {}) {
    opts.channel = chatId;
    opts.title = title;
    return this._request('channels.editTitle', qs.stringify(opts));
  };

/**
  * Edit supergroup/channel about.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} about New about text for the supergroup/channel
  * @return {Promise} Updates
  * @see https://tjhorner.com/tl-schema/method/channels.editAbout
  **/
  editTitle(chatId, about, opts = {}) {
    opts.channel = chatId;
    opts.about = about;
    return this._request('channels.editAbout', qs.stringify(opts));
  };

/**
  * Get supergroup/channel participants.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} type Type of chat participants
  * @param  {Number} offset offset participants
  * @param  {Number} limit limit of participants
  * @return {Promise} channels_ChannelParticipant
  * @see https://tjhorner.com/tl-schema/method/channels.getParticipants
  **/
  getMembers(chatId, type, offset, limit, opts = {}) {
    opts.channel = chatId;
    opts.filter = JSON.stringify({
      '_': type
    });
    opts.offset = offset;
    opts.limit = limit;
    return this._request('channels.getParticipants', qs.stringify(opts));
  };      
  
}

const outputError = (function (err) {
  logger.error(err);
  return
})

module.exports = User;
