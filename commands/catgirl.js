const fetch = require('node-fetch');
const {prefix} = require('../config.json');
module.exports = {
	name: 'catgirl',
	args: false,
	description: 'Pulls random catgirl image',
	guildOnly: true,
	cooldown: 1,
	async execute(msg, response){
		//around 1500 posts for nekomimi tag select a random one using limit search and page number params
		let page = Math.floor(Math.random()*1500);
		let max = -1;
		//actual number is around 8MB but this is easier to work with
		const discordmax = 1500000;
		//api returns list of posts with tag
		const [list] = await fetch(`https://yande.re/post.json?tags=nekomimi&&page=${page}&&limit=1`).then(response => response.json());
		//if all other images are larger than 7MB send preview
		let url = list.preview_url;
		if(list.file_size <= discordmax && list.file_size > max){
			max = list.file_size;
			url = list.file_url;
		}
		if(list.sample_file_size <= discordmax && list.sample_file_size > max){
			max = list.sample_file_size;
			url = list.sample_url;
		}
		if(list.jpeg_file_size <= discordmax && list.jpeg_file_size > max){
			max = list.jpeg_file_size;
			url = list.jpeg_url;
		}
		console.log(page);
		console.log(list);
		//console.log(url);
		//msg.channel.send(url);
		msg.channel.send(list.sample_url);
		console.log(page);
		console.log(list);
		//msg.channel.send(url);
		console.log();
		//const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		//msg.channel.send(file);
	}
}