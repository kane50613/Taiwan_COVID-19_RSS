require('dotenv').config();
const config = require('./config.json');

const Discord = require('./Discord');
const RSS = require('./RSS');

let discord = new Discord();
discord.awake(
    process.env.BOT_TOKEN || config?.discord?.token,
    process.env.CHANNEL_ID || config?.discord?.channel
)
.then(() => new RSS().awake(
    discord,
    config?.rss?.targets,
    config?.rss?.interval
));
