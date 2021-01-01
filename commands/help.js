// {name} as matched in js module will set {name} to matching module name
const {prefix} = require('../config.json');
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all commands/info about commands',
	aliases: ['commands'],
	usage: '<command name>',
	cooldown: 5,
	execute(msg, args){
		const data = [];
		const {commands} = msg.client;
		if(!args.length){
			data.push(commands.map(command => command.name).join(', '));
			return msg.channel.send(data,{split: true})
		}
		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if(!command){
			return msg.reply('not a valid command');
		}

		data.push(`Name: ${command.name}`);
		console.log(command.aliases? 'yes':'no');
		const embed = new Discord.MessageEmbed()
			.setColor('#EFF00')
			.setTitle(name)
			/*.addFields(
				{ name: 'Aliases', value: `${command.aliases.join(', ') || ' '}`},
				{ name: 'Description', value: `${command.description || ' '}`},
				{ name: 'Usage', value: `${prefix}${command.name} ${command.usage}` },
				{ name: 'Cooldown', value: `${command.cooldown || 3} second(s)`}

			);*/
			.addFields(
				//cooldown way or picking and string literal evaluate the same way, keeping both as reference
				{ name: 'Description', value: command.description? `${command.description}` : 'n/a'},
				{ name: 'Usage', value: `${prefix}${command.name} ${command.usage || ' '}`},
				{ name: 'Aliases', value: command.aliases? `${command.aliases.join(', ') || ' '}` : 'n/a'},
				{ name: 'Cooldown', value: `${command.cooldown || 3} second(s)`}
			);
		if (command.aliases) data.push(`Aliases: ${command.aliases.join(', ')}`);
		if (command.description) data.push(`Description: ${command.description}`);
		if (command.usage) data.push(`Usage: ${prefix}${command.name} ${command.usage}`);

		data.push(`Cooldown: ${command.cooldown || 3} second(s)`);

		return msg.channel.send(embed);
	}
}