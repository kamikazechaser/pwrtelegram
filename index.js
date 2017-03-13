// NPM installed modules
const querystring = require('querystring');
const request = require('needle');
const rangi = require('rangi');

// Own modules
const package = require('./package.json');

// Error messages
const error = {
  noToken: 'You need to specify your access token',
  ownInstance: 'Custom base url set',
  notInitialized: 'Library is not initialized'
};

// Instance parameters
let api = {
  accessToken: '',
  baseUrl: 'api.pwrtelegram.xyz'
};

// Constructor
const User = function (opts) {
  if (typeof opts !== 'object' || !opts.hasOwnProperty('accessToken')) {
    danger(error.noToken);
    process.exit(1)
  }

  if (opts.hasOwnProperty('baseUrl')) {
    api.baseUrl = opts.baseUrl
    success(error.ownInstance);
  }

  if (!(this instanceof User)) {
    return new User(opts);
  }

  api.accessToken = opts.accessToken;
  api.baseUrl = api.baseUrl;
  api.initialized = true;
};

User.prototype = {

  sendMessage: function (opts, callback) {
  
    const data = {};

    data['peer'] = opts['chatId'];
    data['message'] = opts['text']

    fireRequest('messages.sendMessage', data, callback);
  }

}

// Send request
function fireRequest(method, data, callback) {

  if (!api.initialized) {
    danger(error.notInitialized)
  }

  const options = {
    json: true,
    // Hang up after 15 seconds
    timeout: 15000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

  const baseUrl = `https://${api.baseUrl}/user${api.accessToken}/`;

  if (data) {
    data = querystring.stringify(data);
  }

  method = `${baseUrl}${method}`;

  req = `${method}?${data}`

  request.get(req, options, (error, response, body) => {

    if (!error && response.statusCode == 200) {
      err = null;
      apiResponse = body;
      callback(err, apiResponse)
    }

    else {
      callback(error, danger(error));      
    }

  })
}

// STDOUT handlers
function danger(errorMsg) {
  const err = console.error(rangi.red(`[${package.name} v${package.version}]: ${errorMsg}`))
  return err
}

function success(errorMsg) {
  const err = console.log(rangi.green(`[${package.name} v${package.version}]: ${errorMsg}`))
  return err
}

module.exports = User;
