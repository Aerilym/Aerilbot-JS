module.exports = {
	name: 'suggest',
	cooldown: 5,
	aliases: ['sug', `suggestion`],
	description: 'suggest',
	use: '!suggest',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		const axios = require('axios');
		const config = require('../config.json');
		var fs = require('fs');

		if (!args[0]) {
			 clientT.say(target, `Please specify a category: game, command or stream | eg. !suggest game {gamename}`); return;
		} else if (args[0]==="game") {
			args.shift();
			if (!args[0]) {clientT.say(target, `Just type the full name of a game you want me to try out and it'll be added to my list! | eg. !suggest game {gamename}`); return;}
			delete require.cache[require.resolve('../gameSug.json')];
			const sug = require('../gameSug.json');
			if (!userstate['display-name']) { suggester = userstate.username; } else { suggester = userstate['display-name']; }
			fs.writeFile('./gameSug.json', JSON.stringify(sug.concat([`${args.join(' ')}, ${suggester}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
			})
			clientT.say(target, `Thanks! Your game suggestion has been added to the list!`);
		} else if (args[0]==="command") {
			args.shift();
			if (!args[0]) {clientT.say(target, `Know of a handy command other streamers use or have an idea of your own? Le me know and I'll give it a look. | eg. !suggest command {suggestion}`); return;}
			delete require.cache[require.resolve('../commandSug.json')];
			const sug = require('../commandSug.json');
			if (!userstate['display-name']) { suggester = userstate.username; } else { suggester = userstate['display-name']; }
			fs.writeFile('./commandSug.json', JSON.stringify(sug.concat([`${args.join(' ')}, ${suggester}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
			})
			clientT.say(target, `Thanks! Your command suggestion has been noted!`);
		} else if (args[0]==="stream") {
			args.shift();
			if (!args[0]) {clientT.say(target, `Have any suggestions for my stream? Let me know, I'd love to hear what you think! | eg. !suggest stream {suggestion}`); return;}
			delete require.cache[require.resolve('../streamSug.json')];
			const sug = require('../streamSug.json');
			if (!userstate['display-name']) { suggester = userstate.username; } else { suggester = userstate['display-name']; }
			fs.writeFile('./streamSug.json', JSON.stringify(sug.concat([`${args.join(' ')}, ${suggester}`]), null, 4), 'utf8', (err) => {
				if (err) throw err
			})
			clientT.say(target, `Thanks, your suggestion has been noted!`);
		} else { clientT.say(target, `Please specify a category: game, command or stream | eg. !suggest game {gamename}`); return; }
	}
}