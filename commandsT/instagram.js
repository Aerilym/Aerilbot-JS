module.exports = {
	name: 'instagram',
	cooldown: 5,
	aliases: ['ig', 'insta', 'photography'],
	description: 'instagram',
	use: '!instagram',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} I've got a whole load of hobbyist photography shiz on my Instagram ${links.instagram.substring(8)}`);

	}

}