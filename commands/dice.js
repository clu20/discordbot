const {prefix} = require('../config.json');
module.exports = {
	name: 'roll',
	description: 'Simple dice roll',
	execute(msg,args){
		return msg.channel.send('test');
	},
};