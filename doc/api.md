<a name="User"></a>

## User
User

**Kind**: global class  

* [User](#User)
    * [new User(token, baseUrl)](#new_User_new)
    * [.sendMessage(chatId, text, [options])](#User+sendMessage) ⇒ <code>Promise</code>
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

<a name="User+setUploadTyping"></a>

### user.setUploadTyping(chatId, action, progress) ⇒ <code>Promise</code>
Set typing with uploads.

**Kind**: instance method of <code>[User](#User)</code>  
**Returns**: <code>Promise</code> - Boolean  
**See**: https://core.telegram.org/method/messages.setTyping  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> &#124; <code>String</code> | Unique identifier for the message recipient |
| action | <code>String</code> | Type of action to be sent |
| progress | <code>Number</code> | Upload progress |

<a name="User+forwardMessage"></a>

### user.forwardMessage(chatId, messageId) ⇒ <code>Promise</code>
Forward text message.

**Kind**: instance method of <code>[User](#User)</code>  
**See**: https://core.telegram.org/method/messages.forwardMessage  

| Param | Type | Description |
| --- | --- | --- |
| chatId | <code>Number</code> &#124; <code>String</code> | Unique identifier for the message recipient |
| messageId | <code>Number</code> &#124; <code>String</code> | Unique identifier of the message to be forwarded |

