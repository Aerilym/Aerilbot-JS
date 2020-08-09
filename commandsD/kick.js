module.exports = {
	name: 'kick',
	description: 'Kicks a user with a reason.',
	use: '!kick @user {reason}',

	//Actual Command
	execute(message, args) {
		if(message.member.hasPermission(['KICK_MEMBERS'])) {

			let member = message.mentions.members.first();

			if (!message.mentions.users.size) {
				return message.channel.send(`You need to tag a user to kick!`);
			}
			member.kick(args.slice(-(args.length-1)).join(" ")).then((member) => {
				message.channel.send(":wave: " + member.displayName + " has been kicked!");
			})
		}
	}
}