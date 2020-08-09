module.exports = {
	name: 'cassie',
	cooldown: 5,
	aliases: ['sister', 'cass', 'cas', 'castastic'],
	description: 'cassie',
	use: '!cassie',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Go check out my sister's stuff! ${links.cassieYTT} <- YouTube ${links.cassieInsta} <- Instagram`);

	}

}