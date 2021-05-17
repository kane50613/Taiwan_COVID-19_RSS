const DiscordJS = require('discord.js');


class Discord {
    constructor() {
        this.bot = new DiscordJS.Client();
    }

    /**
     * Wake the bot
     * @param {String} token - Discord bot token
     * @param {String} channel - Channel id
     */
    static awake = async (token, channel) => {
        if(!token) 
            throw new Error(`[ERROR] 機器人token需要提供`);
        if(!channel) 
            throw new Error(`[ERROR] 發送頻道需要提供`);

        await this.bot.login(token);
        await this.bot.channels.fetch(this.channel);

        if(!this.bot.channels.cache.get(this.channel)) 
            throw new Error(`[ERROR] 找不到頻道`);
        else 
            this.channel = this.bot.channels.cache.get(channel).id;

        console.log(`[INFO] 設置發送頻道 ${this.bot.channels.cache.get(this.channel).name}`);
        console.log(`[INFO] 機器人上線`);
    }

    /**
     * Send RSS object to channel
     * @param {Object} item - RSS object
     */
    createMessage(item) {
        if(!this.bot.channels.cache.get(this.channel))
            return console.log(`[ERROR] 找不到頻道`);

        this.bot.channels.cache.get(this.channel).send(
            new DiscordJS.MessageEmbed()
                .setAuthor("衛生福利部疾病管制署", 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/ROC_Centers_for_Disease_Control_Emblem.svg/1200px-ROC_Centers_for_Disease_Control_Emblem.svg.png')
                .setTitle(item.title)
                .setDescription(item.description.replace(/(<([^>]+)>)/ig, ''))
                .setURL(item.link)
                .setTimestamp(new Date())
                .setColor("RANDOM")
                .setFooter('台灣疫情資訊RSS')
        )
            .then(m => console.log(`[INFO] 訊息已發送 ${item.title}`))
            .catch(e => console.log(`[ERROR]訊息發送到頻道時出現了錯誤! ${e.message}`));
    }
}

module.exports = Discord;
