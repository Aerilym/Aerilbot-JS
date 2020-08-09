module.exports = {
	name: 'listen',
	description: 'Kicks a user with a reason.',
	use: '!kick @user {reason}',

	//Actual Command
	execute(message, args) {
		if(message.member.hasPermission(['ADMINISTRATOR'])) {
		const fs = require('fs');
		// make a new stream for each time someone starts to talk
		function generateOutputFile(channel, member) {
			// use IDs instead of username cause some people have stupid emojis in their name
			const fileName = `./recordings/${member.id}-${Date.now()}.pcm`;
			return fs.createWriteStream(fileName);
		}

		if (message.member.voiceChannel) {
			message.member.voiceChannel.join()
			  .then(connection => { // Connection is an instance of VoiceConnection
				message.reply('I have successfully connected to the channel!');
				connection.playFile('./sounds/beep.mp3');
				const receiver = connection.createReceiver();

				connection.on('speaking', (user, speaking) => {
				  if (speaking) {
					message.channel.send(`I'm listening to ${user}`);
					// this creates a 16-bit signed PCM, stereo 48KHz PCM stream.
					const audioStream = receiver.createPCMStream(user);
					// create an output stream so we can dump our data in a file
					const outputStream = generateOutputFile(user.voiceChannel, user);
					// pipe our audio data into the file stream
					audioStream.pipe(outputStream);
					outputStream.on("data", console.log);
					// when the stream ends (the user stopped talking) tell the user
					audioStream.on('end', () => {
					  message.channel.send(`I'm no longer listening to ${user}`);
					});
				}
			  });

			  })
			  .catch(console.log);
		  } else {
			message.reply('You need to join a voice channel first!');
		  }
	}
}
}