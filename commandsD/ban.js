module.exports = {
	name: 'ban',
	description: 'Bans a user with a reason.',
	use: '!ban @user {days} {reason}',

	//Actual Command
	execute(message, args) {
		if(message.member.hasPermission(['BAN_MEMBERS'])) {

			let member = message.mentions.members.first();

			if (!message.mentions.users.size) {
				return message.channel.send(`You need to tag a user to Ban!`);
			}

			//check variables used
			if(!isNaN(args[1])){

				var banDeleteTime = args[1];
				var banReason = args.slice(-(args.length-2)).join(" ");

			} else if(!isNaN(args[args.length-1])){

				var banDeleteTime = args[args.length-1];
				var banReason = args.slice(-(args.length-1),(args.length-1)).join(" ");

			} else {

				var banDeleteTime = 0;
				var banReason = args.slice(-(args.length-1)).join(" ");

			}

			member.ban({reason: banReason, days: parseInt(banDeleteTime)}).then((member) => {
			message.channel.send(":wave: " + member.displayName + " has been banned! " + " Reason: " + banReason);
			})
		}
	}
}