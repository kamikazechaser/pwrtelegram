 [![https://telegram.me/kamikazechaser](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-kamikazechaser-blue.svg?style=flat-square)](https://telegram.me/kamikazechaser)
 [![https://telegram.me/Bestulo](https://img.shields.io/badge/%F0%9F%92%AC_Telegram-Besatnias-blue.svg?style=flat-square)](https://telegram.me/Bestulo)
 >PWRTelegram User API

 A Node.js Library for the PWRTelegram User API

 > Powered by [PWRTelegram API](http://pwrtelegram.xyz/)

 ## About

This library allows you to invoke Telegram's core API methods, using PWRTelegram API as a mediator. This allows one to build user bots.

**Important Information**

- Based on [MadelineProto](https://daniil.it/MadelineProto/API_docs/) layer 62
- It is HIGHLY recommended to run [your own instance](https://github.com/pwrtelegram/pwrtelegram-backend) of PWRTelegram for speed
- The global instance is [under heavy load](https://t.me/daniilgentili/125), so requests may take upto 15 seconds
- This library is promised based
- This library returns actual server errors for debugging purposes


 ## Install

 ```bash
 $ npm install pwrtelegram --save
 ```

## API Reference

<a name="User"></a>

## User
User

**Kind**: global class  

* [User](#User)
    * [new User(token, baseUrl)](#new_User_new)
    * [.sendMessage(chatId, text, [options])](#User+sendMessage) ⇒ <code>Promise</code>
    * [.setTyping(chatId, action)](#User+setTyping) ⇒ <code>Promise</code>
    * [.forwardMessage(chatId, messageId)](#User+forwardMessage) ⇒ <code>Promise</code>

<a name="new_User_new"></a>

### new User(token, baseUrl)

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | Bot Token |
| baseUrl | <code>String</code> | (Optional) Custom pwetelegram API instance URL |

<a name="User+sendMessage"></a>

### user.sendMessage(chatId, text, [options]) ⇒ <code>Promise</code>
Send text message.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Updates  
**See**: https://core.telegram.org/method/messages.sendMessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> &#124; <code>String</code> | Unique identifier for the message recipient |
| text | <code>String</code> | Text of the message to be sent |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="User+setTyping"></a>

### user.setTyping(chatId, action) ⇒ <code>Promise</code>
Set typing.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Boolean  
**See**: https://core.telegram.org/method/messages.setTyping  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> &#124; <code>String</code> | Unique identifier for the message recipient |
| action | <code>String</code> | Type of action to be sent |

<a name="User+forwardMessage"></a>

### user.forwardMessage(chatId, messageId) ⇒ <code>Promise</code>
Forward text message.

**Kind**: instance method of <code>[User](#User)</code>  
**See**: https://core.telegram.org/method/messages.forwardMessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> &#124; <code>String</code> | Unique identifier for the message recipient |
| messageId | <code>Number</code> &#124; <code>String</code> | Unique identifier of the message to be forwarded |


## Issues And Contribution

Fork the repository and submit a pull request for whatever change you want to be added to this project. If you have any questions, just open an issue.