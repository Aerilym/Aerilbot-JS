module.exports = {
	name: 'redcross',
	cooldown: 5,
	aliases: ['fire', 'aus', 'australia', 'bushfire', 'charity'],
	description: 'redcross',
	use: '!redcross',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

	clientT.say(target, `Donate to the Australian Red Cross & help those affected by the Australian fires! ${links.streamlabs.substring(8)}`);

	}

}