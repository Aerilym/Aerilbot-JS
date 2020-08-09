module.exports = {
	name: 'update',
	cooldown: 5,
	aliases: ['changegame',`changegame`],
	description: 'game',
	use: '!game',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Mod(userstate)) { console.log("User does not have permission"); return; } //Mod Permission
		console.log("User has permission");

		const axios = require('axios');
		const config = require('../config.json');

		const soTarget = args[0].replace('@','');

		const twitchgetuser = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		  function putItem(status, game) {
			return request({
				baseUrl: 'https://api.twitch.tv/kraken/',
				url: 'channels/' + AERILYM_ID,
				method: 'PUT',
				headers: {
					Accept: 'application/vnd.twitchtv.v5+json',
					Authorization: 'OAuth ' + OAUTH_TOKEN,
					'Client-ID': CLIENT_ID
				},
				json: true,
				body: {
					channel: { status, game }
				}
			}, (err, { statusCode }, body) => {
				if(err) {
					console.log(err);
				}
				else if(statusCode !== 200) {
					console.log({ statusCode, body });
				}
				else {
					console.log(body);
				}
			});
		}

		streamTitle = args.join(` `);
		streamGame = args.join(` `);
		putItem(streamTitle, streamGame);
		
	}

}