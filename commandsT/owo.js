module.exports = {
	name: 'owo',
	cooldown: 5,
	aliases: ['uwu', 'nuzzle'],
	description: 'owo',
	use: '!owo',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o:`);

	}

}