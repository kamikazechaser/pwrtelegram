// NPM installed modules
const request = require("request-promise");
const querystring = require("querystring");
const logger = require("pino")()

// Own modules
const package = require("./package.json");

// Lib
class User {
  constructor (opts) {
    opts.token ? this.token = opts.token : logger.error(new Error("You need to specify your access token"));
    this.baseUrl = opts.baseUrl || "https://api.pwrtelegram.xyz/user"
  }

  api (method, form) {
    opts = {
      method: "POST",
      uri: `${this.baseUrl}${this.token}/${method}`,
      body: form
    }
    return rp(opts).then(data=>{
      json = JSON.parse(data)
      if (json.ok) {
        return data.result
      } else {
        throw data
      }
    })
  }
  
  sendMessage (chatId, text, opts) {
    if (typeof chatId === "object") {
      opts = chatId
    } else {
      opts.chat_id = opts.chat_id || chatId
      opts.text = opts.text || text
    }
    if (!chatId) throw "No parameters were passed"
    return api("sendMessage", opts)
  }
}
