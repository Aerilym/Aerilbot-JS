module.exports = {
	name: 'chattrack',
	aliases: ['chattracker'],
	description: 'chattrack',
	use: '!chattrack',

	
	//Actual Command
	execute(message, args) {

		clientD.channels.get("686222150058639455").send(`${args}`)
	}

}