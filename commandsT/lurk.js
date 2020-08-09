module.exports = {
	name: 'lurk',
	cooldown: 5,
	aliases: ['lurking'],
	description: 'lurk',
	use: '!lurk',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `/me CoolCat ${userstate.username} is now lurking, thx for hanging out! CoolCat `);

	}

}