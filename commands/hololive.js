// {name} as matched in js module will set {name} to matching module name
const {YoutubeAPIKey} = require('../config.json');

module.exports = {
	name: 'hololive',
	description: 'updates currently live vtubers',
	args: false,
	usage: '<command name>',
	async execute() {
        return gapi.client.youtube.search.list({})
            .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                },
            function(err) { console.error("Execute error", err); });
    }
}