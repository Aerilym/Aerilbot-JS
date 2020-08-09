module.exports = {
	name: 'clip',
	cooldown: 5,
	aliases: ['addclip'],
	description: 'clip',
	use: '!clip',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		const axios = require('axios');
		const config = require('../config.json');
		var fs = require('fs');

		if (!args[0]) {
			 clientT.say(target, `Send your favourite clips in with !clip {link} I'd love to make a channel trailer! Yodasip`); return;
		} else if (args[0].charAt(0)==="@") {
			let atted = ``;
			if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
			clientT.say(target, `${atted} To send in your favorite clips do !clip {link}`);
		} else if (args[0]==="add") {
			args.shift();
			if (args[0].includes("twitch.tv/aerilym_") || args[0].includes("twitch.tv/"&&"clip") || args[0].includes("clips.twitch.tv/")) {
				delete require.cache[require.resolve('../clips.json')];
				const sug = require('../clips.json');
				fs.writeFile('./clips.json', JSON.stringify(sug.concat8, null, 4), 'utf8', (err) => {
					if (err) throw err
				})
				clientT.say(target, `Thanks! Your clip has been added and might be used in a future compilation!`); return; 
			} else { clientT.say(target, `Please post a valid clip link so I can use it in a future compilation! <3`); return; }
		} else if (args[0].includes("twitch.tv/aerilym_") || args[0].includes("twitch.tv/"&&"clip") || args[0].includes("clips.twitch.tv/")) {
			delete require.cache[require.resolve('../clips.json')];
			const sug = require('../clips.json');
			fs.writeFile('./clips.json', JSON.stringify(sug.concat([`${args[0]}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
			})
			clientT.say(target, `Thanks! Your clip has been added and might be used in a future compilation!`); return; 
		} else { clientT.say(target, `Please use a valid clip link & I might use it in a future compilation! <3`); return; }
	}
}