const fetch = require('node-fetch');
const {prefix} = require('../config.json');
var fs = require('fs');

module.exports = {
	name: 'catgirl',
	args: false,
	description: 'Pulls random sfw catgirl image',
	usage: '[-nsfw]',
	guildOnly: true,
	cooldown: 1,
	async execute(msg, args, response){
		let page = 0;
		let [list] = [];
		if(!args.length || args[0].toLowerCase() != 'nsfw' ){
			page = Math.floor(Math.random()*6845);
			//api returns list of posts with tag
			[list] = await fetch(`https://yande.re/post.json?tags=nekomimi+rating%3As&&page=${page}&&limit=1`).then(response => response.json());
			fs.appendFile('../logs', `Cmd: SFW\nTags: ${list.tags}\nimg_url: ${list.file_url}\nRating: ${list.rating}\n--------------------------------------------------------------------\n`, function(err){
				if(err)throw err;
				console.log('saved');
			})
			console.log('safe');
		}else{
			console.log('explicit');
			page = Math.floor(Math.random()*8258)
			//[list] = await fetch(`https://yande.re/post.json?tags=nekomimi+rating%3As&&page=${page}&&limit=1`).then(response => response.json());
			//for whatever reason whichever list is in the else statement saves the fetch into the first element in the array.
			let [list] = await fetch(`https://yande.re/post.json?tags=nekomimi+-rating%3As&&page=${page}&&limit=1`).then(response => response.json());
			console.log(page);
			console.log(list);
			fs.appendFile('../logs', `Cmd: NSFW\nTags: ${list.tags}\nimg_url: ${list.file_url}\nRating: ${list.rating}\n--------------------------------------------------------------------\n`, function(err){
				if(err)throw err;
				console.log('saved');
			})
			return msg.channel.send(list.sample_url); 
			//const list = await fetch(`https://yande.re/post.xml?tags=nekomimi&&limit=1`).then(response => response.text());
			//let totalpost = list.getElementById('posts count');
			//console.log(totalpost);
		}
		console.log(page);
		console.log(list);
		msg.channel.send(list.sample_url);
	}
}