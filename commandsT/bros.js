module.exports = {
	name: 'bros',
	cooldown: 5,
	aliases: ['costream', 'squad', 'squadstream', 'friends', `others`],
	description: 'discord',
	use: '!discord',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} I'm streaming with Manthello and Jinxed_Central give them some love! <3 <3 <3`);
		clientT.say(target, `https://www.twitch.tv/manthello`);
		clientT.say(target, `https://www.twitch.tv/jinxed_central`);

	}

}