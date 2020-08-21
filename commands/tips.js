const {prefix} = require('../config.json');
module.exports ={
	name: 'tips',
	description: 'Displays tips for user',
	cooldown: 0,
	guildOnly: true,
	dbAcc: true,
	async execute(msg,args, db){
		user = msg.guild.member(msg.author);
		authorName = user.nickname;
		if(authorName == null){ authorName = user.username;}
		if(!args.length){
			db.collection('tipped_users').doc(msg.author.id).get().then((id)=>{
				if(id.exists){
					return msg.channel.send(`\`${authorName}\` currently has \`${id.data().tips}\` coins`);
				}else{
					return msg.channel.send(` \`${authorName}\` has no simps`);
				}
			});
		}
	}
};