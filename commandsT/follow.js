module.exports = {
	name: 'follow',
	cooldown: 5,
	aliases: ['followers', 'followcount'],
	description: 'followers',
	use: '!followers',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		const axios = require('axios');
		const config = require('../config.json');

		const twitchget = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });


		twitchget.get('/helix/users/follows?to_id=107455709')
		.then((response) => {
		  let atted = ``;
		  if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
  
		  clientT.say(target, `${atted} Enjoying the stream? Want to know when I'm live? Why not follow & join the other ${JSON.stringify(response.data.total, null, 2)} beautiful people! peepoLove`);
		})
		.catch((err) => {
		  console.error(err);
		})





	}

}