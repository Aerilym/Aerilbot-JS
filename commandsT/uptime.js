module.exports = {
	name: 'uptime',
	cooldown: 5,
	aliases: ['livetime'],
	description: 'uptime',
	use: '!uptime',

	
	//Actual Command
	execute(target, context, msg, self, args) {

		const axios = require('axios');
		const config = require('../config.json');
		const links = require('../links.json');

		const twitchgetuser = axios.create({
			baseURL: 'https://api.twitch.tv',
			headers: {'Client-ID': config.CLIENT_ID},
		  });

		twitchgetuser.get(`/helix/streams?user_login=${config.CHANNEL_NAME}`)
		.then((response) => {
			if (!response.data.data[0]) { clientT.say(target, `Aerilym_ is offline! Follow above & join the Discord to know when they're next live! ${links.discord.substring(8)}`); return;}
			const starttime = JSON.stringify(response.data.data[0].started_at);
			console.log(starttime);
			const stYear = starttime.substr(1,4);
			const stMonth = starttime.substr(6,2)-1;
			const stDay = starttime.substr(9,2);
			const stHour = starttime.substr(12,2);
			const stMinute = starttime.substr(15,2);
			const stSecond = starttime.substr(18,2);

			startUTC = Date.UTC(stYear, stMonth, stDay, stHour, stMinute, stSecond, 0);
			var nowTime = new Date();
			var nowUTC = nowTime.getTime();
			const uptime = nowUTC - startUTC;

			function msToHMS( ms ) {
				// 1- Convert to seconds:
				var seconds = ms / 1000;
				// 2- Extract hours:
				var hours = parseInt( seconds / 3600 ); // 3,600 seconds in 1 hour
				seconds = seconds % 3600; // seconds remaining after extracting hours
				// 3- Extract minutes:
				var minutes = parseInt( seconds / 60 ); // 60 seconds in 1 minute
				// 4- Keep only seconds not extracted to minutes:
				seconds = seconds % 60;
				var seconds = parseInt ( seconds );
				return `${hours} hours ${minutes} minutes and ${seconds} seconds`;
			}
			let atted = ``;
			if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
	
			clientT.say(target, `${atted} Aerilym_ has been live for ${msToHMS(uptime)}`);
		  })
		
	}

}