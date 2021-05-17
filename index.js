require('dotenv').config();

const Discordcore = require('./Discord');
const RSScore = require('./RSS');

let Discord = new Discordcore();
let RSS = new RSScore();

Discord.awake(process.env.BOT_TOKEN, process.env.CHANNEL_ID)
    .then(() => RSS.awake());
