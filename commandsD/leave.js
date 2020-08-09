module.exports = {
	name: 'leave',
	description: 'Kicks a user with a reason.',
	use: '!kick @user {reason}',

	//Actual Command
	execute(message, args) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.leave()
				message.reply('I have successfully left to the channel!');
		  } else {
			message.reply('You need to join a voice channel first!');
		  }
	}
}