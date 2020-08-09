module.exports = {
	name: 'label',
	cooldown: 5,
	aliases: ['labels','ticker','tickers'],
	description: 'label',
	use: '!label',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Mod(userstate)) { console.log("User does not have permission"); return; } //Mod Permission
		console.log("User has permission");

		var fs = require('fs');

		let textToWrite = ``;
		const labelFiles = fs.readdirSync('C:/Users/Ryan Miller/AppData/Roaming/slobs-client/Streamlabels').filter(file => file.endsWith('.txt'));
		
		for (const file of labelFiles) {
			var label = fs.readFileSync(`C:/Users/Ryan Miller/AppData/Roaming/slobs-client/Streamlabels/${file}`).toString();
			if (label.length > 40) { textToWrite = textToWrite + ` ` + label; }
		}
		fs.writeFile('ticker.txt', textToWrite, 'ascii', (err) => {
			if (err) throw err
			})
	}
}