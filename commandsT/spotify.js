module.exports = {
	name: 'spotify',
	cooldown: 5,
	aliases: ['music'],
	description: 'spotify',
	use: '!spotify',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} If you're curious about what I listen to, here's my Spotify I guess MiniK ${links.spotifyT.substring(8)}`);

	}

}