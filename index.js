require('dotenv').config();

const Discord = require('./Discord');
const RSS = require('./RSS');

new Discord().awake(process.env.BOT_TOKEN, process.env.CHANNEL_ID)
    .then(() => new RSS().awake());
