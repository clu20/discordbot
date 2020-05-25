const {prefix} = require('../config.json');
const Discord = require('discord.js');
const rolemap = require('../roleconfig.json');

module.exports = {
	name: 'roleassgn',
	description: 'Creates message for users to react and assign their own roles',
	args: false,
	guildOnly: true,
	async execute(msg, args){
		const guildroles = await msg.guild.roles.cache;//.find(roles => roles.name === 'forest')
		//const test = guildroles.find(roles => roles.name === 'forest');

		//console.log(forest);
		//console.log(test);
		const roles = [];
		for(const [key, value] of Object.entries(rolemap)){
			let role = guildroles.find(roles=>roles.name==key);
			//console.log(key);
			if(!role){continue;}
			roles.push(role.name);
		}
		console.log(roles);
		/*const filter = (reaction, user) =>rolemap.includes(reaction.emoji.name);

		const embed = new Discord.MessageEmbed()
			.setTitle('Available Roles')
			.setDescription(`
				${rolemap}

			`)
			.setColor(0xdd9323);
		msg.channel.send(embed).then(async msg =>{
			await msg.react('709546693967872031');
		});

		//msg.awaitReaction(filter)
		//.then*/
	}
}

