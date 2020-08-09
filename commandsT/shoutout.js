module.exports = {
	name: 'shoutout',
	cooldown: 5,
	aliases: ['so'],
	description: 'shoutout',
	use: '!shoutout',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Mod(userstate)) { console.log("User does not have permission"); return; } //Mod Permission
		console.log("User has permission");

		const axios = require('axios');
		const config = require('../config.json');
		if (!args[0]) { return; }
			
		const soTarget = args[0].replace('@','');

		const twitchgetuser = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		twitchgetuser.get(`/helix/streams?user_login=${soTarget.toLowerCase()}`)
		.then((response) => {
			if (!response.data.data[0]) { 
				clientT.say(target, `Go check out ${soTarget} over at https://www.twitch.tv/${soTarget}`); 
				return; 
			}
		  const soName = JSON.stringify(response.data.data[0].user_name).slice(1,-1)
		  const soUserID = JSON.stringify(response.data.data[0].user_id).slice(1,-1)
		  const soGameID = JSON.stringify(response.data.data[0].game_id).slice(1,-1)
		  
		  const twitchgetgame = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		twitchgetgame.get(`/helix/games?id=${soGameID}`)
		.then((response) => {
		  const soGame = JSON.stringify(response.data.data[0].name).slice(1,-1)
		  clientT.say(target, `Go check out ${soName} over at https://www.twitch.tv/${soName} they're playing ${soGame}! Give them some love LuvSign `);
		})
		.catch((err) => {
		  console.error(err);
		})

		})
		.catch((err) => {
		  console.error(err);
		})


		





	}

}