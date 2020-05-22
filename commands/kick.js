module.exports = {
	name: 'kick',
	description: 'kicks member from voice channel',
	args: true,
	usage: '<user>',
	guildOnly: true, //in servers
	cooldown: 30, //time before another usage in seconds
	aliases: ['test', 'timeout'], //multiple names for same command
	execute(msg,args){
		const user = msg.mentions.users.first();
			if(user){
				const member = msg.guild.member(user);
				if(member){
					kicked = member.nickname;
					if(kicked == null){
						kicked = user.tag;
					}
					member.voice.kick('Put on timeout')
					.then(() =>{
						return msg.channel.send(`${kicked} needs to think about his actions`);
					})
					.catch(err =>{
						return msg.channel.send(`${kicked} has too much power for me`);
						console.error(err);
					})
				}else{ return msg.channel.send("This user isn't even here bro");}
			}else{ return msg.channel.send ("You didn't mention who to shame");}
	},
};