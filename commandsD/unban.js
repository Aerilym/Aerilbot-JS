module.exports = {
	name: 'unban',
	description: 'Unbans a user with a reason.',
	use: '!unban @user {reason}',

	//Actual Command
	execute(message, args) {
		if(message.member.hasPermission(['BAN_MEMBERS'])) {
//WIP
			let member = message.mentions.members.first();

			member.unban(args.slice(-(args.length-1)).join(" ")).then((member) => {
			message.channel.send(":wave: " + member.displayName + " has been unbanned! " + " Reason: " + unbanReason);
			})
		}
	}
}