module.exports = {
	name: 'tip',
	cooldown: 5,
	aliases: ['donate', 'streamlabs', 'slabs', 'tts'],
	description: 'tip',
	use: '!tip',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Want to support the stream? You can send a tip at ${links.streamlabs.substring(8)}`);

	}

}