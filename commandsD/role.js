module.exports = {
	name: 'role',
	aliases: ['rank', `roles`],
	description: 'role',
	use: '!role',

	
	//Actual Command
	execute(message, args) {

		
		const links = require('../links.json');

		if ( !args[0] ) {
			message.channel.send(`The roles can be found in <#657507197894524949>`)
			return;
		}

		let checklength = args.length-1;
		for (n=0; n < checklength+1; n++) {
			if ( !args[n].includes(`@`) ) {
				var rolesaid = message.guild.roles.find(role => role.name === args[n].toLowerCase());
				if (!rolesaid) { message.channel.send(`This role could not be found!`); return; }
				var rolename = args[n].toLowerCase();
			}
		}

		if (args.includes(`@`)) {
			var member = message.mentions.members.first();
		} else { var member = message.member; }
		if (message.member.roles.some(role => role.name === rolename)) {
			try {
				member.removeRole(rolesaid);
				message.channel.send(`The role has been removed`);
				return;
			} catch (error) {
				message.reply(`You don't have access to this role!`);
				return;
			}
		}

		try {
			member.addRole(rolesaid);
			message.channel.send(`You've been given the role`);
			return;
		} catch (error) {
			message.reply(`You don't have access to this role!`);
			return;
		}



	}

}