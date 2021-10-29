import fetch from "node-fetch"

import Parser from "fast-xml-parser"

export default class RSS {
    constructor() {
        this.rssCache = new Map();
        this.startTime = new Date();
    }

    awake(discord, targets=[], interval=5000) {
        if(!targets || !targets instanceof Array || targets.length === 0)
            throw new Error(`[ERROR] RSS目標未提供! (config.json)`)
        this.targets = targets;
        this.discord = discord;
        targets.forEach(t => this.rssCache.set(t, new Map()));

        this.fetch()

        setInterval(() => this.fetch(), interval)
    }

    fetch() {
        this.targets.forEach(t => {
            fetch(t)
            .then(r => r.text())
            .then(r => {
                let xml = Parser.parse(r)
                if(!xml?.rss?.channel?.item) return
                xml.rss.channel.item.forEach(item => {
                    if(this.rssCache.get(t).get(item?.link))
                        return;
                    this.rssCache.get(t).set(item?.link, item)
                    if(Date.parse(item['a10:updated']) < this.startTime)
                        return console.log(`[${xml.rss.channel.title}] 過去的訊息 - ${item.title}`);
                    console.log(`[${xml.rss.channel.title}] 有新的消息! - ${item.title}`)
                    this.discord.createMessage(xml.rss.channel, item);
                })
            })
        })
    }
}