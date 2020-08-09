module.exports = {
	name: 'submessage',
	cooldown: 5,
	aliases: ['freemessage', 'streammessage', 'submess'],
	description: 'submessage',
	use: '!submessage',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		const permissions = require('../permission.js');
		var fs = require('fs');
		if (!permissions.Sub(userstate)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");
		
		delete require.cache[require.resolve('../submessageuses.json')];
		const submessageuses = require(`../submessageuses.json`)
		var nowTime = new Date();
		var nowUTC = nowTime.getTime();

		let checklength = submessageuses.length-1;
		for (n=0; n < checklength+1; n++) {
			if ( submessageuses[n].includes(`${userstate.username}`) ) {
				console.log(Number(submessageuses[n].substring(0,13))+Number(50000000));
				if ( nowUTC > Number(submessageuses[n].substring(0,13))+Number(50000000)) {
					submessageuses[n] = `${nowUTC} | ${userstate.username}`;
					Smessage = userstate.username + ` says ` + args.join(` `);
					fs.writeFile('./submessageuses.json', JSON.stringify(submessageuses, null, 4), 'utf8', (err) => {
						if (err) throw err
						clientD.commandsD.get('submessage').execute(msg, Smessage);
					})
					return;
				} else {
					clientT.say(target, `You've already used your sub message this stream!`);
					return;
				}
			}
		}
		Smessage = userstate.username + ` says ` + args.join(` `);
		fs.writeFile('./submessageuses.json', JSON.stringify(submessageuses.concat([`${nowUTC} | ${userstate.username}`]), null, 4), 'utf8', (err) => {
			if (err) throw err
			clientD.commandsD.get('submessage').execute(msg, Smessage);
		})
		return;
	}

}