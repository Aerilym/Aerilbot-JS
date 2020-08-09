module.exports = {
	name: 'twitter',
	cooldown: 5,
	aliases: ['tweet'],
	description: 'twitter',
	use: '!twitter',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Follow me on Twitter for updates! ${links.twitter.substring(8)}`);

	}

}