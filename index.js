import {config} from "dotenv";
import configs from "./config.js"

import Discord from "./Discord.js";
import RSS from "./RSS.js";

let client = new Discord();
config();
client.awake(
    process.env.BOT_TOKEN || configs?.discord?.token,
    process.env.CHANNEL_ID || configs?.discord?.channel
)
.then(() => new RSS().awake(
    client,
    configs?.rss?.targets,
    configs?.rss?.interval
));