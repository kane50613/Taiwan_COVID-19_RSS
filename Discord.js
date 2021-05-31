const fetch = require("node-fetch");

class Discord {

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
        this.token = token;
        fetch(`https://discord.com/api/channels/${channel}`, {
            headers: {
                Authorization: `Bot ${token}`,
                'User-Agent': 'Bot (https://github.com/Gary50613/Taiwan_COVID-19_RSS)'
            }
        })
        .then(async r => {
            if(r.status === 200) {
                this.channel = await r.json()
                return console.log(`[INFO] 發送頻道設置為 ${this.channel.name}`)
            }
            if(r.status === 401)
                throw new Error(`[ERROR] 錯誤的Token`)
            if(r.status === 404)
                throw new Error(`[ERROR] 錯誤的頻道`)
            throw new Error(`[ERROR] 未知的錯誤 (${r.status})`)
        })
    }

    /**
     * Send RSS object to channel
     * @param{Object} channel - rss channel info
     * @param {Object} item - RSS object
     */
    createMessage(channel, item) {
        fetch(`https://discord.com/api/channels/${this.channel?.id}`, {
            method: 'POST',
            headers: {
                Authorization: `Bot ${this.token}`,
                'User-Agent': 'Bot (https://github.com/Gary50613/Taiwan_COVID-19_RSS)',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                embed: {
                    author: {
                        name: channel?.title,
                        icon_url: 'https://antiflu.cdc.gov.tw/Image/head-logo2.png',
                        url: channel?.link
                    },
                    title: item?.title,
                    description: item?.description.replace(/&lt;br \/&gt;/gi, ''),
                    url: item?.link,
                    timestamp: new Date().getTime()
                }
            })
        })
        .then(async r => {
            if(r.status === 200)
                return this.channel = await r.json()
            if(r.status === 401)
                throw new Error(`[ERROR] 錯誤的Token`)
            if(r.status === 404)
                throw new Error(`[ERROR] 錯誤的頻道`)
            throw new Error(`[ERROR] 未知的錯誤 (${r.status})`)
        })
    }
}

module.exports = Discord;
