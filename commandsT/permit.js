module.exports = {
	name: 'permit',
	cooldown: 5,
	aliases: ['allow'],
	description: 'permit',
	use: '!permit',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		if (!permissions.Mod(userstate)) { console.log("User does not have permission"); return; } //Mod Permission
		console.log("User has permission");

		var fs = require('fs');
		if (!args[0]) {return;}
		const linkPermitName = JSON.stringify(args[0].toLowerCase().replace('@',''));

		function removePermit() {
			fs.writeFile('linkpermit.json', JSON.stringify(`aerilym_`, null, 4), 'utf8', (err) => {
			if (err) throw err
			})
		}

		fs.writeFile('linkpermit.json', JSON.stringify(linkPermitName, null, 4), 'utf8', (err) => {
		  if (err) throw err
		  clientT.say(target, `@${linkPermitName.slice(1,-1)} You have 30 seconds to post your link!`);
		  permitRemover = setTimeout(removePermit, 30000);
		})

	}

}