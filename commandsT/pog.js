module.exports = {
	name: 'pog',
	cooldown: 5,
	aliases: ['pag', 'poggers'],
	description: 'pog',
	use: '!pog',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} PogChamp aerilyPog Pog PogU POGGERS POGGIES POGSLIDE POGSLIDECOGSLIDE `);

	}

}