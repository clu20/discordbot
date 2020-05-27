const {prefix} = require('../config.json');

// command structure (planned)is as follows: !yeet map callout ex: !yeet mirage jungle
// list of maps: mirage, etc, will add more once testing finishes

module.exports = {
    name: 'yeet',
    description: 'gives smoke lineup gifs for the map and callout given',

    execute(msg, args){
        if(msg === 'yeet') {
            const attachment = new MessageAttachment('https://gfycat.com/tepidpolishedboutu');
            message.channel.send('${message.author},', attachment);
        }
        else {
            return message.channel.send('try the command again');
        }
        // return msg.channel.send('pls work');
	},
};
