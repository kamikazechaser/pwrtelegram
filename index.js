'use strict';

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

  constructor (opts) {
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
        }
        else {
          outputError(ctx);
        } 
      });
  };

  sendMessage(chatId, text) {
    const opts = {};
    opts.peer = chatId;
    opts.message = text;
    return this._request('messages.sendMessage', querystring.stringify(opts));
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
