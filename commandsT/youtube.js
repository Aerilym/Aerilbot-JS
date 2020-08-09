module.exports = {
	name: 'youtube',
	cooldown: 5,
	aliases: ['yt', 'vod', 'vid', 'past'],
	description: 'youtube',
	use: '!youtube',
	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Check out my YouTube channel :) ${links.youtube.substring(8)}`);

	}

}