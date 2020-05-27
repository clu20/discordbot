const {prefix} = require('../config.json');
const discord = require('discord.js');

// command structure (planned)is as follows: !yeet map callout ex: !yeet mirage jungle
// list of maps: mirage, etc, will add more once testing finishes

module.exports = {
    name: 'yeet',
    description: 'gives smoke lineup gifs for the map and callout given',

    execute(msg, args){
        //dont need to check for yeet this is done in main file
        //args would be used to check for args normally for anything after !<command> <args>
        if(msg === 'yeet') {
            //this is a discord constructor so need to require discord.js and do discord.MessageAttachment()
            //https://discord.js.org/ this is the docs I use.
            const attachment = new MessageAttachment('https://gfycat.com/tepidpolishedboutu');

            //below won't work need to use `` for string literals
            //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
            message.channel.send('${message.author},', attachment);
        }
        else {
            return message.channel.send('try the command again');
        }
        // return msg.channel.send('pls work');
	},
};
