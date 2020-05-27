//Node.js Filesystem
const fs = require('fs');
//Adds all cmds from command folder
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();
const reactions = require('./roleconfig.json');

const {prefix, token} = require('./config.json');

//grab all client commands
for (const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//Executes client commands
client.on('message', msg =>{
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
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

function roleReaction(guild){
	//eventually will add command that saves this value in config file
	msgID = '715284973028114513';
	//eventually will add command that saves this value in config file
	let channel = guild.channels.cache.find(ch=> ch.name==='testreaction');
	//console.log(guild.channels.cache);
	//console.log(channel);
	channel.messages.fetch(msgID).then(msg =>{
		//console.log(msg);
		const filter = (reaction) =>{
			//fix this to pull list from an edited config file/DB
			return ['forest','shoot'].includes(reaction.emoji.name);
		}

		const collector = msg.createReactionCollector(filter, {});
		collector.on('collect', (reaction, reactionCollector) => {
			try{
				//console.log(`${reaction.emoji.name}`);
				//Roles name needs to be same as emoji name for ease of use and adding multiple roles later
				let role = guild.roles.cache.find(r => r.name === reaction.emoji.name);
				console.log(reaction.users.cache);
				reaction.users.cache.each(u =>{
					//don't add additional roles to client/bot
					if(u != client.user){
						try{
							let member = guild.members.cache.find(gm => gm.user.id === u.id);
							//console.log(member);
							let addedMember = member.roles.add(role);
							console.log(`${member.nickname} added to ${role.name}`);
						}catch(error){
							console.log(error);
						}
					}
				});
			}catch(error){
				console.log(error);
			}
		});
	});
}

//client turned on
client.login(token);
client.once('ready', () =>{
	console.log('Bot is online')
	let guild = client.guilds.cache.first();
	roleReaction(guild);
});