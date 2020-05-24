const {prefix} = require('../config.json');

module.exports = {
	name: 'rolegen',
	description: 'Creates new role',
	usage: '<role name>',
	args: true,
	guildOnly: true,
	cooldown: 60,
	execute(msg, args){
		if(!msg.member.hasPermission('ADMINISTRATOR')){ return console.log(`${msg.author.username} is not an ADMINISTRATOR`); }
		let color = 'DEFAULT';
		let name = args[0];
		console.log(args.length);
		if(! args.length > 1){
			console.log(args.length);
			createRole(msg, name, color);

		}
		color = args[1].toUpperCase();
		createRole(msg, name, color);

	}
}
function createRole(msg, name, color){
	msg.guild.roles.create({
			data: {
				name: `${name}`,
				color: `${color}`,
		},
		reason: `New role to @people for ${name}`
	})
		.then(console.log)
		.then(msg.channel.send(`${name} role created!`))
		.catch(console.error);
		return;
}

