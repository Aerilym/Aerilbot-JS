module.exports = {
	name: 'contact',
	cooldown: 5,
	aliases: ['appeal', 'report', 'contactform'],
	description: 'contact',
	use: '!contact',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} You can contact the mod team, report a user, or make an appeal at ${links.contact.substring(8)}`);

	}

}