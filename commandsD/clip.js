module.exports = {
	name: 'clip',
	aliases: ['addclip'],
	description: 'clip',
	use: '!clip',

	
	//Actual Command
	execute(message, args) {

		const permissions = require('../permission.js');
		const axios = require('axios');
		const config = require('../config.json');
		var fs = require('fs');

		if (!args[0]) {
			message.channel.send(`Please post a clip link so I can use it in a future compilation! <3`); return;
		} else if (args[0]==="add") {
			args.shift();
			if (args[0].includes("twitch.tv/aerilym_") || args[0].includes("twitch.tv/"&&"clip") || args[0].includes("clips.twitch.tv/")) {
				delete require.cache[require.resolve('../clips.json')];
				const sug = require('../clips.json');
				fs.writeFile('./clips.json', JSON.stringify(sug.concat([`${args[0]}`]), null, 4), 'utf8', (err) => {
					if (err) throw err
				})
				message.channel.send(`Thanks! Your clip has been added and might be used in a future compilation!`); return; 
			} else { message.channel.send(`Please post a valid clip link so I can use it in a future compilation! <3`); return; }
		} else if (args[0].includes("twitch.tv/aerilym_") || args[0].includes("twitch.tv/"&&"clip") || args[0].includes("clips.twitch.tv/")) {
			delete require.cache[require.resolve('../clips.json')];
			const sug = require('../clips.json');
			fs.writeFile('./clips.json', JSON.stringify(sug.concat([`${args[0]}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
			})
			message.channel.send(`Thanks! Your clip has been added and might be used in a future compilation!`); return; 
		} else { message.channel.send(`Please post a clip link so I can use it in a future compilation! <3`); return; }
	}
}