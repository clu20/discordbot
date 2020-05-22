//Node.js Filesystem
const fs = require('fs');
//Adds all cmds from command folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const {prefix, token} = require('./config.json');

//grab all client commands
for (const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Executes client commands
client.on('message', msg =>{
	let args = msg.content.substring(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	//check if cmd.js file exists or if aliases found
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	if(!command) return;

	//Commands that have arg requirements.
	if(command.args && !args.length){
		let reply = 'Invalid usage';
		if(command.usage){
			reply += `\n${prefix}${command.name} ${command.usage}`;
		}
		return msg.channel.send(reply);
	}
	//Cooldown timer
	if(!cooldowns.has(command.name)){
		cooldowns.set(command.name, new Discord.Collection());
	}
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	//convert to miliseconds
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if(timestamps.has(msg.author.id)){
		const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

		if( now < expirationTime){
			const timeLeft = (expirationTime - now) / 1000;
			return msg.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing \`${command.name}\``);
		}
	}
	//For first time usage set timeout for author
	timestamps.set(msg.author.id, now);
	setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);

	//execute command if all previous conds satisfied
	try{
		command.execute(msg,args);
	} catch (error){
		console.error(error);
		msg.reply("there was an error complain pls");
	}
})

//client turned on
client.login(token);
client.once('ready', () =>{
	console.log('Bot is online')
});