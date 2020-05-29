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

        // LIST OF CACHE SMOKES AND MOLLIES
        var cache = {
            z: 'https://gfycat.com/fearfuloldirishwolfhound',
            boost: 'https://gfycat.com/weeklyfaroffguppy',
            headshot: 'https://gfycat.com/perfumedrewardingcommongonolek',
            vent: 'https://gfycat.com/vapidwarygeese-globaloffensive-csgo',
            triple: 'https://gfycat.com/whimsicalcourageousafricangoldencat',
            ct: 'https://gfycat.com/favorableunselfishaustraliansilkyterrier',
            default: 'https://gfycat.com/wickedagreeablebonobo'
        }

        // LIST OF INFERNO SMOKES, MOLLIES AND FLASHES
        var inferno = {
            banger: 'https://gfycat.com/tautimaginativejunebug-globaloffensive-csgo',
            coffin: 'https://gfycat.com/alarmingenormousdodobird',
            arches: 'https://gfycat.com/mediumdelectablecatbird',
            ct: 'https://gfycat.com/uncomfortableadoredgilamonster',
            truck: 'https://gfycat.com/selfreliantbriefdrever',
            library: 'https://gfycat.com/variabledismalbuck',
            moto: 'https://gfycat.com/graciousdecentanhinga',
            boiler: 'https://gfycat.com/infinitespecificabalone',
            quad: 'https://gfycat.com/detailedgratefulgoa',
            dark: 'https://gfycat.com/gregariousviciousdairycow',
            pit: 'https://gfycat.com/spitefulorganicbirdofparadise'
        }

        // LIST OF OVERPASS SMOKES AND MOLLIES 
        var overpass = {
            heaven: 'https://gfycat.com/consciouslighticefish',
            bridge: 'https://gfycat.com/illegalwavycrossbill',
            truck: 'https://gfycat.com/scratchythriftyalabamamapturtle',
            ct: 'https://gfycat.com/magnificentchillyangelfish',
            bank: 'https://gfycat.com/firmalienatedeyas',
            toxic: 'https://gfycat.com/dearconcreteelver'
        }

        if(message.content.includes('yeet')) { 
            // MIRAGE
            if(message.content.includes('mirage')) {
                if(message.content.includes('jungle')) {
                    message.channel.send(`${message.author}, ` + mirage.jungle);
                }
                if(message.content.includes('ct')) {
                    message.channel.send(`${message.author}, ` + mirage.ct);
                }
                if(message.content.includes('stairs')) {
                    message.channel.send(`${message.author}, ` + mirage.stairs);
                }
                if(message.content.includes('window')) {
                    message.channel.send(`${message.author}, ` + mirage.window);
                }
                if(message.content.includes('cat')) {
                    message.channel.send(`${message.author}, ` + mirage.cat + ' stand on top of the garbage bin and aim at antenna');
                }
                if(message.content.includes('bench')) {
                    message.channel.send(`${message.author}, ` + mirage.bench);
                }
                if(message.content.includes('short')) {
                    message.channel.send(`${message.author}, ` + mirage.short);
                }
                if(message.content.includes('connector')) {
                    message.channel.send(`${message.author}, ` + mirage.connector);
                }
                if(message.content.includes('market window')) {
                    message.channel.send(`${message.author}, ` + mirage.w_market);
                }
                if(message.content.includes('market door')) {
                    message.channel.send(`${message.author}, ` + mirage.d_market);
                }
            }
            // TRAIN
            else if(message.content.includes('train')) {
                if(message.content.includes('connector')) {
                    message.channel.send(`${message.author}, ` + train.connector);
                }
                if(message.content.includes('back ivy')) {
                    message.channel.send(`${message.author}, ` + train.back_ivy);
                }
                if(message.content.includes('olaf')) {
                    message.channel.send(`${message.author}, ` + train.olaf);
                }
                if(message.content.includes('sandwich')) {
                    message.channel.send(`${message.author}, ` + train.sandwich);
                }
                if(message.content.includes('right')) {
                    message.channel.send(`${message.author}, ` + train.right);
                }
                if(message.content.includes('left')) {
                    message.channel.send(`${message.author}, ` + train.left);
                }
                if(message.content.includes('old bomb')) {
                    message.channel.send(`${message.author}, ` + train.old_bomb);
                }
                if(message.content.includes('cat')) {
                    message.channel.send(`${message.author}, ` + train.cat);
                }
                if(message.content.includes('summit')) {
                    message.channel.send(`${message.author}, ` + train.summit);
                }
            }
            // CACHE
            else if(message.content.includes('cache')) {
                if(message.content.includes('z')) {
                    message.channel.send(`${message.author}, ` + cache.z);
                }
                if(message.content.includes('boost')) {
                    message.channel.send(`${message.author}, ` + cache.boost);
                }
                if(message.content.includes('headshot')) {
                    message.channel.send(`${message.author}, ` + cache.headshot);
                }
                if(message.content.includes('vent')) {
                    message.channel.send(`${message.author}, ` + cache.vent);
                }
                if(message.content.includes('triple')) {
                    message.channel.send(`${message.author}, ` + cache.triple);
                }
                if(message.content.includes('ct')) {
                    message.channel.send(`${message.author}, ` + cache.ct);
                }
                if(message.content.includes('default')) {
                    message.channel.send(`${message.author}, ` + cache.default);
                }
            }
            // INFERNO
            else if(message.content.includes('inferno')) {
                if(message.content.includes('banger')) {
                    message.channel.send(`${message.author}, ` + inferno.banger);
                }
                if(message.content.includes('coffin')) {
                    message.channel.send(`${message.author}, ` + inferno.coffin);
                }
                if(message.content.includes('arches')) {
                    message.channel.send(`${message.author}, ` + inferno.arches);
                }
                if(message.content.includes('ct')) {
                    message.channel.send(`${message.author}, ` + inferno.ct);
                }
                if(message.content.includes('truck')) {
                    message.channel.send(`${message.author}, ` + inferno.truck);
                }
                if(message.content.includes('library')) {
                    message.channel.send(`${message.author}, ` + inferno.library);
                }
                if(message.content.includes('moto')) {
                    message.channel.send(`${message.author}, ` + inferno.moto);
                }
                if(message.content.includes('boiler')) {
                    message.channel.send(`${message.author}, ` + inferno.boiler);
                }
                if(message.content.includes('quad')) {
                    message.channel.send(`${message.author}, ` + inferno.quad);
                }
                if(message.content.includes('dark')) {
                    message.channel.send(`${message.author}, ` + inferno.dark);
                }
                if(message.content.includes('pit')) {
                    message.channel.send(`${message.author}, ` + inferno.pit);
                }
            }
            // OVERPASS
            else if(message.content.includes('overpass')) {
                if(message.content.includes('heaven')) {
                    message.channel.send(`${message.author}, ` + overpass.heaven);
                }
                if(message.content.includes('bridge')) {
                    message.channel.send(`${message.author}, ` + overpass.bridge);
                }
                if(message.content.includes('truck')) {
                    message.channel.send(`${message.author}, ` + overpass.truck);
                }
                if(message.content.includes('ct')) {
                    message.channel.send(`${message.author}, ` + overpass.ct);
                }
                if(message.content.includes('bank')) {
                    message.channel.send(`${message.author}, ` + overpass.bank);
                }
                if(message.content.includes('toxic')) {
                    message.channel.send(`${message.author}, ` + overpass.toxic);
                }
            }
            else {
                message.channel.send('try map name again b');
            }
        }
        else {
            message.channel.send('try full command again b');
        }
    }
};