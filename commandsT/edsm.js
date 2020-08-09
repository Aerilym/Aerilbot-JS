module.exports = {
	name: 'edsm',
	cooldown: 5,
	aliases: ['elite', 'ed', 'edprofile', 'starmap'],
	description: 'edsm',
	use: '!edsm',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Check out my Elite Dangerous star map & profile! ${links.edsmT.substring(8)}`);

	}

}