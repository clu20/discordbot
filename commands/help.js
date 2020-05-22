const {prefix} = require('../config.json');

module.exports = {
	name: 'help',
	description: 'List all ommands/info about commands',
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

		if (command.aliases) data.push(`Aliases: ${command.aliases.join(', ')}`);
		if (command.description) data.push(`Description: ${command.description}`);
		if (command.usage) data.push(`Usage: ${prefix}${command.name} ${command.usage}`);

		data.push(`Cooldown: ${command.cooldown || 3} second(s)`);

		return msg.channel.send(data, { split: true });
	}
}