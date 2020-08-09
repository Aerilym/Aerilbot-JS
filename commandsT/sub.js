module.exports = {
	name: 'sub',
	cooldown: 5,
	aliases: ['subs', 'subscribers', 'subscribe', 'subscriber'],
	description: 'sub',
	use: '!sub',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		const axios = require('axios');
		const config = require('../config.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Subscribe for cool emotes and a fancy badge! You can also send a daily text to speech message with !submesssage aerilyPog aerilyLove ${links.subscribe.substring(8)}`);

	}

}