require("dotenv").config()

const Discord = require('./Discord')
const RSS = require('./RSS')

Discord.awake(process.env.BOT_TOKEN, process.env.CHANNEL_ID)
.then(() => RSS.awake())

