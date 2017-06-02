/**
 * Mohammed Sohail <sohail@forfuture.tech>
 * 
 * Clean "Deleted Accounts" in a group with pwrtelegram.
 * 
 * Since the botAPI cannot get a comprehensive list of group users,
 * we will use pwr telegram to do that for us.
 * 
 * Issue #343 yagop/node-telegram-bot-api
 * 
 * Before running this examples:
 *  - Make sure you have both bot and user tokens available
 *  - Your bot is an administrator in the group
 *  - The user is a member of the group
 *  - You have set the roof limit
 *  - You have set the group id
 * 
 */

// npm installed modules
const _ = require("lodash");
const TelegramBot = require("node-telegram-bot-api");
const User = require("../lib/index");

// module variables
const BOT_TOKEN = process.env.BOT_TOKEN || "382303838:AAGZq_4iMM84D9OGNB_Qf8IrLkbOfe0sBuE";
// Check out the pwr telegram repo pwrtelegram/pwrtelegram, to see how to generate a user token,
// I will make a bot that makes the process simple in the future!
const USER_TOKEN = process.env.USER_TOKEN || "319384216:ADvk36MC1Y0nbabu0OK-zFybNukslSoY96W1-lrbJSg";

// We initialize the respective libraries
const bot = new TelegramBot(BOT_TOKEN, { polling: true });
// Any user in the group will be able to get the list, no previleges required!
const user = new User({ token: USER_TOKEN });

// roof limit: this is the approx amount of users in a group.
const roofLimit = process.env.ROOF_LIMIT || 100;
// groupid: unique identifier of the group.
const groupId = process.env.GROUP_ID || "-1001079843822";

// 1st step is to get the members of the group
// notice the type of filter we are using i.e channelParticipantsRecent
user.getMembers(groupId, "channelParticipantsRecent", 1, roofLimit).then(group => {
    const groupUsersArray = group.result.users;

    // we confirm the number of users in the group.
    console.log(`${groupUsersArray.length} members in this group`);
    // let us now filter for deleted users with lodash
    const deletedAccountsArray = _(groupUsersArray).filter(["deleted", true]).map("id").value();
    // The next step is to use a bot to "ban" them
    // Your bot must be an admin in the group!

    // We use a classic for loop to ban the users,
    // in most cases there are usually less than 10 deleted accounts, hence no
    // need to worry about rate limits
    for (i = 0; i < deletedAccountsArray.length; i++) {
        bot.kickChatMember(groupId, deletedAccountsArray[i]).then(result => {
            if (result === true) {
                console.log("Successfully cleaned the group.");
            }
        });
    }
});
