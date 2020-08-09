module.exports = {
	name: 'help',
	cooldown: 5,
	aliases: ['commands', 'command'],
	description: 'help',
	use: '!help',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		const config = require('../config.json');
		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
		if (target !== `#aerilbot`) { clientT.say(target, `${atted} Enjoy! tinyurl.com/AerilbotCommands`); return; }
}
}