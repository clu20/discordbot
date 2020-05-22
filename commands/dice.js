module.exports = {
	name: 'roll',
	description: 'Simple dice roll',
	execute(msg,args){
		console.log('test');
		return msg.channel.send('test');
	},
};