const fetch = require('node-fetch');

const Parser = require('fast-xml-parser')
const Discord = require('./Discord');

class RSS {
    constructor() {
        this.rssCache = new Map();
        this.startTime = new Date();
    }

    awake(targets) {
        if(!targets || !targets instanceof Array || targets.length === 0)
            throw new Error(`[ERROR] RSS目標未提供!`)
        targets.forEach(t => this.rssCache.set(t, new Map()));

        setInterval(() => {
            targets.forEach(t => {
                fetch(t)
                .then(r => r.json())
                .then(r => {
                    Parser.parse(r).forEach(item => {
                        if(Date.parse(item['a10:updated']['#']) < this.startTime)
                            return console.log(`[INFO] 過去的訊息 - ${item.title}`);
                        console.log(`[INFO] 有新的消息! - ${item.title}`)
                        Discord.createMessage(item);
                    })
                })
            })
        })
    }
}

module.exports = RSS;