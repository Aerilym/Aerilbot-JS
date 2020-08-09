module.exports = {
	name: 'help',
	description: 'helpma',
	use: '!help',

	//Actual Command
	execute(message, args) {

		const { prefix } = require('../config.json');

		const data = [];
		const commandsD = message.clientD;
		
		if (!args.length) {
console.log("1");
			data.push('Here\'s a list of all my commands:');
			data.push(commandsD.map(commandD => commandD.name).join(', '));
			data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
			
			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('I\'ve sent you a DM with all my commands!');
				})
				.catch(error => {
					console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
					message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
				});
			// ...
		}

		const name = args[0].toLowerCase();
		const commandD = commandsD.get(name) || commandsD.find(c => c.aliases && c.aliases.includes(name));
		
		if (!commandD) {
			console.log("2");
			return message.reply('that\'s not a valid command!');
		}
		
		data.push(`**Name:** ${commandD.name}`);
		
		if (commandD.aliases) data.push(`**Aliases:** ${commandD.aliases.join(', ')}`);
		if (commandD.description) data.push(`**Description:** ${commandD.description}`);
		if (commandD.usage) data.push(`**Usage:** ${prefix}${commandD.name} ${commandD.usage}`);
		
		data.push(`**Cooldown:** ${commandD.cooldown || 3} second(s)`);
		
		message.channel.send(data, { split: true });
		
		// ...

	}

}