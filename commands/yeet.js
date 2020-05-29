const {prefix} = require('../config.json');

// command structure (planned) is as follows: !yeet map callout ex: !yeet mirage jungle
// list of maps: mirage, etc, will add more once testing finishes
// will probably move all this to db later 

module.exports = {
    name: 'yeet',
    description: 'gives smoke lineup gifs for the map and callout given',

    execute(message, args){
        // LIST OF MIRAGE SMOKES
        var mirage = {
            jungle: 'https://gfycat.com/tepidpolishedboutu',
            ct: 'https://gfycat.com/amusedshinyhummingbird',
            stairs: 'https://gfycat.com/hideousdefinitiveherald',
            window: 'https://gfycat.com/blindsnarlingcusimanse',
            cat: 'https://gfycat.com/thirdimpeccablehoiho',
            bench: 'https://gfycat.com/jaggedthickbluebird',
            short: 'https://gfycat.com/thirdgrizzledhawk',
            connector: 'https://gfycat.com/blushingregalaffenpinscher',
            w_market: 'https://gfycat.com/darktalkativefieldmouse', // market window
            d_market: 'https://gfycat.com/colossaldefinitiveivorygull'    // market door 
        } 

        // LIST OF TRAIN SMOKES
        var train = {
            connector: 'https://gfycat.com/cooperativesnarlingattwatersprairiechicken',
            olaf: 'https://gfycat.com/rawinbornaustraliancattledog',
            sandwich: 'https://gfycat.com/brightweeaurochs',
            right: 'https://gfycat.com/portlykeybongo', // right bomb train
            left: 'https://gfycat.com/completeanotherdrake', // left bomb train
            back_ivy: 'https://gfycat.com/enviousspottedflee-csgonades-com',  
            old_bomb: 'https://gfycat.com/impartialamusingfritillarybutterfly',
            cat: 'https://gfycat.com/detailedcorruptafricanjacana',
            summit: 'https://gfycat.com/unrulyadolescentantarcticgiantpetrel'
        }

        // SMOKES FOR T SIDE MIRAGE
        if(message.content.includes('yeet mirage jungle')) {
            message.channel.send(`${message.author}, ` + mirage.jungle);
        }
        else if(message.content.includes('yeet mirage ct')) {
            message.channel.send(`${message.author}, ` + mirage.ct);
        }
        else if(message.content.includes('yeet mirage stairs')) {
            message.channel.send(`${message.author}, ` + mirage.stairs);
        }
        else if(message.content.includes('yeet mirage window')) {
            message.channel.send(`${message.author}, ` + mirage.window);
        }
        else if(message.content.includes('yeet mirage cat')) {
            message.channel.send(`${message.author}, ` + mirage.cat + ' stand on top of the garbage bin and aim at antenna');
        }
        else if(message.content.includes('yeet mirage bench')) {
            message.channel.send(`${message.author}, ` + mirage.bench);
        }
        else if(message.content.includes('yeet mirage short')) {
            message.channel.send(`${message.author}, ` + mirage.short);
        }
        else if(message.content.includes('yeet mirage connector')) {
            message.channel.send(`${message.author}, ` + mirage.connector);
        }
        else if(message.content.includes('yeet mirage market window')) {
            message.channel.send(`${message.author}, ` + mirage.w_market);
        }
        else if(message.content.includes('yeet mirage market door')) {
            message.channel.send(`${message.author}, ` + mirage.d_market);
        }


        // SMOKES FOR T SIDE TRAIN
        if(message.content.includes('yeet train a connector')) {
            message.channel.send(`${message.author}, ` + train.connector);
        }
        else if(message.content.includes('yeet train back ivy')) {
            message.channel.send(`${message.author}, ` + train.back_ivy);
        }
        else if(message.content.includes('yeet train olaf')) {
            message.channel.send(`${message.author}, ` + train.olaf);
        }
        else if(message.content.includes('yeet train sandwich')) {
            message.channel.send(`${message.author}, ` + train.sandwich);
        }
        else if(message.content.includes('yeet train right')) {
            message.channel.send(`${message.author}, ` + train.right);
        }
        else if(message.content.includes('yeet train left')) {
            message.channel.send(`${message.author}, ` + train.left);
        }
        else if(message.content.includes('yeet train old bomb')) {
            message.channel.send(`${message.author}, ` + train.old_bomb);
        }
        else if(message.content.includes('yeet train cat')) {
            message.channel.send(`${message.author}, ` + train.cat);
        }
        else if(message.content.includes('yeet train summit')) {
            message.channel.send(`${message.author}, ` + train.summit);
        }
	},
};
