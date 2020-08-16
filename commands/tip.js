const {prefix} = require('../config.json');
module.exports ={
	name: 'tip',
	usage: '<user> <amount>',
	args: true,
	description: 'Tip a user in the guild',
	cooldown: 0,
	guildOnly: true,
	dbAcc: true,
	async execute(msg,args, db){
		tipped = null;
		const tip = Number(args[1]);
		if(!Number.isInteger(tip)){return msg.channel.send("Please use a whole number tip amount");}
		const user = msg.mentions.users.first();
		if(user){
			const member = msg.guild.member(user);
			if(member){
				tipped = member.nickname;
				if(tipped == null){
					tipped = user.tag;
				}
			}else{ return msg.channel.send("You're not in the same server as your Queen");}
		}else{return msg.channel.send("Must mention a Queen to simpo for");}
		return msg.channel.send(`tipping ${tipped} ${tip} coins`);

	},
};