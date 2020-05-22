const fetch = require('node-fetch');
module.exports = {
	name: 'catgirl',
	args: false,
	description: 'Pulls random catgirl image',
	guildOnly: true,
	cooldown: 1,
	async execute(msg, response){
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		msg.channel.send(file);
	}
}