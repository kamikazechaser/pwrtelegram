const querystring = require('querystring');
const request = require('request-promise');
const pino = require('pino');

const pkg = require('./package.json');

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
    opts.token ? this.token = opts.token : outputFatalError(error.noToken);
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
    return request(options)
      .then(ctx => {;
        if (ctx.ok) {
          return ctx;
        } else {
          outputError(ctx);
        }
      });
  };

  // Working with messages

/**
  * Send text message.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} text Text of the message to be sent
  * @return {Promise} Updates
  * @see https://core.telegram.org/method/messages.sendMessage
  **/
  sendMessage(chatId, text) {
    const opts = {};
    opts.peer = chatId;
    opts.message = text;
    return this._request('messages.sendMessage', querystring.stringify(opts));
  };

/**
  * Set typing.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {String} action Type of action to be sent
  * @return {Promise} Boolean
  * @see https://core.telegram.org/method/messages.setTyping
  **/
  setTyping(chatId, action) {
    const opts = {};
    opts.peer = chatId;
    opts.action = action;
    return this._request('messages.setTyping', querystring.stringify(opts));
  };


/**
  * Forward text message.
  * @param  {Number|String} chatId Unique identifier for the message recipient
  * @param  {Number|String} messageId Unique identifier of the message to be forwarded
  * @return {Promise}
  * @see https://core.telegram.org/method/messages.forwardMessage
  **/
  forwardMessage(chatId, messageId) {
    const opts = {};
    opts.peer = chatId;
    opts.id = messageId;
    return this._request('messages.forwardMessage', querystring.stringify(opts));
  };
  
}

const outputFatalError = (function (err) {
  logger.error(err);
  process.exit(1);
});

const outputError = (function (err) {
  logger.error(err);
  return
})

module.exports = User;
