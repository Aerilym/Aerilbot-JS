module.exports = {
	name: 'uni',
	cooldown: 5,
	aliases: ['university', 'study', 'school'],
	description: 'uni',
	use: '!uni',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} I'm in my 2nd year of a Bachelor of Science course majoring in Astrophysics and Physics (they're two different things Kappa ) Want to know more? I'm happy to answer and questions! `);

	}

}