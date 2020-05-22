//Node.js Filesystem
const fs = require('fs');
//Adds all cmds from command folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const timeouts = new Discord.Collection();

const {prefix, token} = require('./config.json');
let timeoutstamp = '';
let now = Date.now();
let timeoutAmount = 0;

//grab all client commands
for (const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//On member join Voice Channel check to see if member is timed-out from kick cmd
client.on('voiceStateUpdate', (oldmember, newmember) =>{
	//checks if user is in a channel and/or was in a channel previously
	//console.log('in voicestate');
	if(timeoutstamp.has(oldmember.member.id)){
		console.log('in');
		now = Date.now();
		const expirationTime2 = timeoutstamp.get(oldmember.member.id) + timeoutAmount;

		if(now < expirationTime2){
			const timeLeft2 = (expirationTime2-now)/1000;
			//return msg.reply(`please wait ${timeLeft2.toFixed(1)} more second(s) before reusing \`${command.name}\``);
			oldmember.member.voice.kick('timedout');
			console.log(`please wait ${timeLeft2.toFixed(1)} more second(s) before reusing`)
		}
	}
	

	let oldvoice = oldmember.channelID;
	let newvoice = newmember.channelID;
	let member = oldmember.member;
	//console.log(member.nickname);
	//console.log(oldvoice);
	//console.log(newvoice);
	if(oldvoice != newvoice){
		if(oldvoice == null){
			//console.log("User Joined!");
		}else if (newvoice == null){
			//console.log("User Left!");
		}else{
			//console.log("User swapped Channels");
	}
	}
})




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
	now = Date.now();
	const timestamps = cooldowns.get(command.name);
	//convert to miliseconds
	const cooldownAmount = (command.cooldown || 3) * 1000;

	//Cooldown for user attempting to reuse cmd
	if(timestamps.has(msg.author.id)){
		const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;

		if( now < expirationTime){
			const timeLeft = (expirationTime - now) / 1000;
			return msg.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing \`${command.name}\``);
		}
	}
	//For first time usage set timeout for author
	timestamps.set(msg.author.id, now);
	console.log(timestamps);
	setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);
	//execute command if all previous conds satisfied
	try{
		command.execute(msg,args);
	} catch (error){
		console.error(error);
		msg.reply("there was an error complain pls");
	}

	if(!timeouts.has(command.name)){
		timeouts.set(command.name, new Discord.Collection());
	}

	timeoutstamp = timeouts.get(command.name);
	timeoutAmount = (command.timeout || 3) * 1000;
	const user = msg.mentions.users.first();
	timeoutstamp.set(user.id, now);
	setTimeout(() => timeoutstamp.delete(user.id), timeoutAmount);
	//console.log(msg.mentions.users.first());
	console.log(timeoutstamp);
	console.log(timeoutAmount);
	console.log(user.id);
})

//client turned on
client.login(token);
client.once('ready', () =>{
	console.log('Bot is online')
});