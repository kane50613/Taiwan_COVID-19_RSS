const RssFeedEmitter = require('rss-feed-emitter')
const Discord = require('./Discord')

class RSS {
    static feeder = new RssFeedEmitter()

    static awake = () => {
        this.feeder.add({
            url: 'https://www.cdc.gov.tw/RSS/RssXml/Hh094B49-DRwe2RR4eFfrQ?type=1',
            refresh: 10000
        })

        this.feeder.on('new-item', item => Discord.createMessage(item))
    }
}

module.exports = RSS