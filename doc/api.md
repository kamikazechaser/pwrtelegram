<a name="User"></a>

## User
User

**Kind**: global class  

* [User](#User)
    * [new User(token, baseUrl)](#new_User_new)
    * [.sendMessage(chatId, text, [options])](#User+sendMessage) ⇒ <code>Promise</code>
    * [.sendPhotoExternal(chatId, url, caption, [options])](#User+sendPhotoExternal) ⇒ <code>Promise</code>
    * [.sendGifExternal(chatId, url, caption, [options])](#User+sendGifExternal) ⇒ <code>Promise</code>
    * [.sendDocumentExternal(chatId, url, caption, [options])](#User+sendDocumentExternal) ⇒ <code>Promise</code>
    * [.setTyping(chatId, action)](#User+setTyping) ⇒ <code>Promise</code>
    * [.setUploadTyping(chatId, action, progress)](#User+setUploadTyping) ⇒ <code>Promise</code>
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
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| text | <code>String</code> | Text of the message to be sent |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="User+sendPhotoExternal"></a>

### user.sendPhotoExternal(chatId, url, caption, [options]) ⇒ <code>Promise</code>
Send photo from url.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Updates  
**See**: https://core.telegram.org/method/messages.sendMedia  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| url | <code>String</code> | Input url |
| caption | <code>String</code> | Media caption |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="User+sendGifExternal"></a>

### user.sendGifExternal(chatId, url, caption, [options]) ⇒ <code>Promise</code>
Send gif from url.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Updates  
**See**: https://core.telegram.org/method/messages.sendMedia  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| url | <code>String</code> | Input url |
| caption | <code>String</code> | Media caption |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="User+sendDocumentExternal"></a>

### user.sendDocumentExternal(chatId, url, caption, [options]) ⇒ <code>Promise</code>
Send document from url.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Updates  
**See**: https://core.telegram.org/method/messages.sendMedia  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| url | <code>String</code> | Input url |
| caption | <code>String</code> | Media caption |
| [options] | <code>Object</code> | Additional Telegram query options |

<a name="User+setTyping"></a>

### user.setTyping(chatId, action) ⇒ <code>Promise</code>
Set typing.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Boolean  
**See**: https://core.telegram.org/method/messages.setTyping  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| action | <code>String</code> | Type of action to be sent |

<a name="User+setUploadTyping"></a>

### user.setUploadTyping(chatId, action, progress) ⇒ <code>Promise</code>
Set typing with uploads.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Boolean  
**See**: https://core.telegram.org/method/messages.setTyping  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| action | <code>String</code> | Type of action to be sent |
| progress | <code>Number</code> | Upload progress |

<a name="User+forwardMessage"></a>

### user.forwardMessage(chatId, messageId) ⇒ <code>Promise</code>
Forward text message.

**Kind**: instance method of <code>[User](#User)</code>  
**See**: https://core.telegram.org/method/messages.forwardMessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> or <code>String</code> | Unique identifier for the message recipient |
| messageId | <code>Number</code> or <code>String</code> | Unique identifier of the message to be forwarded |

