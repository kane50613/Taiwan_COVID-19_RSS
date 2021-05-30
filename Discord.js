const fetch = require("node-fetch");

class Discord {
    constructor() {
    }

    /**
     * Wake the bot
     * @param {String} token - Discord bot token
     * @param {String} channel - Channel id
     */
    awake = async (token, channel) => {
        if(!token) 
            throw new Error(`[ERROR] 機器人token需要提供`);
        if(!channel) 
            throw new Error(`[ERROR] 發送頻道需要提供`);
        fetch(`https://discord.com/api/channels/${channel}`)
        .then(async r => {

        })
    }

    /**
     * Send RSS object to channel
     * @param {Object} item - RSS object
     */
    createMessage(item) {
        fetch(`https://discord.com/api/channels/`)
        console.log(`[INFO] 訊息成功發送`)
    }
}

module.exports = Discord;
