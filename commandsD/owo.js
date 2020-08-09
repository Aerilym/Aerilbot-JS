module.exports = {
	name: 'owo',
	description: 'Kicks a user with a reason.',
	use: '!kick @user {reason}',

	//Actual Command
	execute(message, args) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			  .then(connection => { // Connection is an instance of VoiceConnection
				message.reply('I have successfully connected to the channel!');
				connection.playFile('./sounds/owo1.mp3');
			  })
			  .catch(console.log);
		  } else {
			message.reply('You need to join a voice channel first!');
		  }
	}
}