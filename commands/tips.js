const {prefix} = require('../config.json');
module.exports ={
	name: 'tips',
	description: 'Displays tips for user',
	cooldown: 0,
	guildOnly: true,
	dbAcc: true,
	async execute(msg,args, db){
		if(!args.length){
			db.collection('tipped_users').doc(msg.author.id).get().then((id)=>{
				if(id.exists){
					return msg.channel.send(`You currently have \`${id.data().tips}\` coins`);
				}else{
					return msg.channel.send("You have no simps");
				}
			});
		}
	}
};