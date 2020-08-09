module.exports = {
	name: 'socials',
	cooldown: 5,
	aliases: ['social', 'socialmedia', 'link', 'links'],
	description: 'socials',
	use: '!socials',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} aerilyPog Here be the socials!!! aerilyPog ${links.youtubeT} <- YouTube ${links.instagram.substring(8)} <- Instagram ${links.twitter} <- Twitter ${links.steam.substring(8)} <- Steam`);

	}

}