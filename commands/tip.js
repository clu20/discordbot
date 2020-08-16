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
		var total_tips = 0;
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

		db.collection('tipped_users').doc(user.id).get().then((user) =>{
			if(user.exists){
				total_tips = user.data().tips;
			}else{
				db.collection('tipped_users').doc(user.id).set({
					'user_id': user.id,
					'tips' : tip
				})
			}
		}).then(()=>{
			db.collection('tipped_users').doc(user.id).update({
				'tips': total_tips + tip
			}).then(()=>{
				return msg.channel.send(`tipping ${tipped} ${tip} coins`);
			});
		});

	},
};