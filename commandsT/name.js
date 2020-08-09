module.exports = {
	name: 'name',
	cooldown: 5,
	aliases: ['nameadd', `addname`],
	description: 'name',
	use: '!name',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		const axios = require('axios');
		const config = require('../config.json');
		var fs = require('fs');
		if (!userstate['display-name']) { listname = userstate.username; } else { listname = userstate['display-name']; }
		if (!userstate.subscriber) { substate = (``); } else { substate = (` | Sub`) }

		if (!args[0]) {
			delete require.cache[require.resolve('../names.json')];
			const names = require('../names.json');
			fs.writeFile('./names.json', JSON.stringify(names.concat([`${listname}${substate}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
				clientT.say(target, `Your name has been added :)`);
				return;
			})
		} else if (args[0]==="add"||args[0]==="addme"||args[0]==="include") {
			args.shift();
			if (!args[0]) {
				delete require.cache[require.resolve('../names.json')];
				const names = require('../names.json');
				fs.writeFile('./names.json', JSON.stringify(names.concat([`${listname}${substate}`]), null, 4), 'utf8', (err) => {
					if (err) throw err
					clientT.say(target, `Your name has been added :)`);
					return;
				})
			} else {
			delete require.cache[require.resolve('../names.json')];
			const names = require('../names.json');
			fs.writeFile('./names.json', JSON.stringify(names.concat([`${args.join(' ')}, ${listname}${substate}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
				clientT.say(target, `Your name has been added :)`);
				return;
			})
			}
		} else { 
			delete require.cache[require.resolve('../names.json')];
			const names = require('../names.json');
			fs.writeFile('./names.json', JSON.stringify(names.concat([`${args.join(' ')}, ${listname}${substate}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
				clientT.say(target, `Your name has been added :)`);
				return;
			})
		 }
	}
}