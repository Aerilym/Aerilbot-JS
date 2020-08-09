module.exports = {
	name: 'steam',
	cooldown: 5,
	aliases: ['curator', 'steamgroup'],
	description: 'steam',
	use: '!steam',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Join the community Steam group & curator page! ${links.steam.substring(8)}`);

	}

}