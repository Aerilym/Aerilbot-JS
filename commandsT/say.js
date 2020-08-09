module.exports = {
	name: 'say',
	cooldown: 5,
	aliases: ['aerilybotsays'],
	description: 'say',
	use: '!say',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Broadcaster(userstate)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");
		
		const links = require('../links.json');


	clientT.say(target, args.join(' '));

	}

}