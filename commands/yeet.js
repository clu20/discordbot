const {prefix} = require('../config.json');

// command structure (planned)is as follows: !yeet map callout ex: !yeet mirage jungle
// list of maps: mirage, etc, will add more once testing finishes

module.exports = {
    name: 'yeet',
    description: 'gives smoke lineup gifs for the map and callout given',

    execute(message, args){
        if(message.content.includes('yeet mirage jungle')) {
            return message.channel.send('https://gfycat.com/tepidpolishedboutu');
        }
        else if(message.content.includes('yeet mirage window')){
            return message.channel.send('https://gfycat.com/accomplishedvastamazondolphin-mirage-smoke-csgo');
        }
        else {
            return message.channel.send('try again');
        }
        // return msg.channel.send('pls work');
	},
};
