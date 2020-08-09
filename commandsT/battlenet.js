module.exports = {
	name: 'battlenet',
	cooldown: 5,
	aliases: ['bn', 'ow', 'overwatch', 'wow', `sc2`, `hearthstone`, `hots`],
	description: 'battlenet',
	use: '!battlenet',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} I'm on NA servers as Aerilym#1312`);

	}

}