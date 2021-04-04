module.exports = {
	name: 'flight',
	cooldown: 5,
	aliases: ['equipment', 'hardware', 'setup'],
	description: 'flight',
	use: '!flight',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} I'm using a Flight Stick & Trust Block (Thrustmaster T-Flight HOTAS X) & Pedals (Logitech Driving Force EX)`);

	}

}