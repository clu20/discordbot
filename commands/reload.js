module.exports = {
	name: 'reload',
	description: 'Reloads commands',
	args: true,
	usage: '<command name>',
	execute(msg, args){
		if(!args.length) return msg.channel.send("specify a command to reload");
		const commandName = args[0].toLowerCase();
		const command = msg.client.commands.get(commandName)
			|| msg.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if(!command) return msg.channel.send(`There currently is no command with name/alias \`${commandName}\``);

		delete require.cache[require.resolve(`./${command.name}.js`)];
		try{
			const newCommand = require(`./${command.name}.js`);
			msg.client.commands.set(newCommand.name, newCommand);
			return msg.channel.send(`Command \`${command.name}\` was reloaded!`);
		}catch (error){
			console.log(error);
			return msg.channel.send(`There was an error reloading command \`${command.name}\` : \n\`${error.message}\``);
		}
	}
}