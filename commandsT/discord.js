module.exports = {
	name: 'discord',
	cooldown: 5,
	aliases: ['disc', 'community', 'IRC', 'invite', `minecraft`, `server`, `ip`],
	description: 'discord',
	use: '!discord',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let specific = ``;
		if ( msg.includes(`server`)||msg.includes(`ip`)||msg.includes(`minecraft`)) { specific = `You'll be able to join through there!`}

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Join the community Discord! ${specific} ${links.discord.substring(8)}`);

	}

}