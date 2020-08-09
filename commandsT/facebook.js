module.exports = {
	name: 'facebook',
	cooldown: 5,
	aliases: ['fb', 'face'],
	description: 'facebook',
	use: '!facebook',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Like and follow the facebook page for clips! ${links.facebook.substring(8)}`);

	}

}