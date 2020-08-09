module.exports = {
	name: 'submessage',
	aliases: ['freemessage', 'streammessage', 'submess'],
	description: 'submessage',
	use: '!submessage',

	
	//Actual Command
	execute(message, args) {

		
		const links = require('../links.json');

		clientD.channels.get("670545370979369005").send(`${args}`, {
			tts: true
		   })

	}

}