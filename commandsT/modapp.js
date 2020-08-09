module.exports = {
	name: 'modapp',
	cooldown: 5,
	aliases: ['apply'],
	description: 'modapp',
	use: '!modapp',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

	clientT.say(target, `${atted} So you think you have what it takes to be a Moderator? Apply at ${links.modapp.substring(8)}`);

	}

}