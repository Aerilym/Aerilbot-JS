module.exports = {
	name: 'ffz',
	cooldown: 5,
	aliases: ['bttv', 'btv', 'extention', 'frankerfacez', 'betterttv', 'franker', 'frankerface', 'frankers', 'Xtra'],
	description: 'ffz',
	use: '!ffz',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} To view all the free emotes used in this chat you'll need the FrankerFaceZ or BTTV plugin for your browser - frankerfacez.com or betterttv.com (Xtra app for mobile users)`);

	}

}