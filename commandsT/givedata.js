module.exports = {
	name: 'givedata',
	cooldown: 5,
	aliases: ['givealldata'],
	description: 'givedata',
	use: '!givedata',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		const axios = require('axios');
		const config = require('../config.json');
		var fs = require('fs');

		fs.writeFile(`./givendata/${userstate.username}.json`, JSON.stringify(userstate, null, 4), 'utf8', (err) => {
			if (err) throw err
		  })
		  clientT.say(target,`/me Your userstate file has been saved`)
	}
}