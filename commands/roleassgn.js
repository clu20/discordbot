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
		const guildemojis = await msg.guild.emojis.cache;
		//const test = guildroles.find(roles => roles.name === 'forest');

		//console.log(forest);
		//console.log(test);
		let roles = [];
		let emojis = [];
		let desc = ``;
		for(const [key, value] of Object.entries(rolemap)){
			let role = guildroles.find(roles=>roles.name==key);
			let emojipng = guildemojis.find(emojis=> emojis.name == value);
			if(!emojipng){continue;}
			//sends associated Emoji and Role in chat
			//msg.channel.send(`${emojipng}`);
			//msg.channel.send(`${role}`);
			//console.log(key);
			if(!role){continue;}
			//roles.push(role.name);
			emojis.push(emojipng);
			desc = desc.concat(`${role.name}: `, `${emojipng}\n`);

		}
		const filter = (reaction, user) =>roles.includes(reaction.emoji.name);
		const embed = new Discord.MessageEmbed()
			.setTitle('Available Roles')
			.setDescription(`
				${desc}

			`)
			.setColor(0xdd9323);

		msg.channel.send(embed).then(async msg =>{
			for(let emoji of emojis){
				await msg.react(`${emoji.id}`);
			}
			

		});

		//msg.awaitReaction(filter)
		//.then
	}
}

