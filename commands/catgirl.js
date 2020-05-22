const fetch = require('node-fetch');
module.exports = {
	name: 'catgirl',
	args: false,
	description: 'Pulls random catgirl image',
	guildOnly: true,
	cooldown: 1,
	async execute(msg, response){
		let page = Math.floor(Math.random()*(100));
		const list = await fetch(`https://yande.re/post.json?tags=nekomimi&&page=${page}&&limit=2`).then(response => response.json());
		console.log();
		//const [test] = list;
		//const test = list.;
		//console.log(test);
		console.log(page);
		//console.log(`https://yande.re/post.json?tags=nekomimi?tags=animalears?page=${page}`);
		console.log(list);
		msg.channel.send(list[1].preview_url);
		console.log();
		//const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		//msg.channel.send(file);
	}
}