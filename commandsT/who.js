module.exports = {
	name: 'who',
	cooldown: 5,
	aliases: ['whois'],
	description: 'who',
	use: '!who',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const permissions = require('../permission.js');
		const axios = require('axios');
		const config = require('../config.json');
		var fs = require('fs');
		if (!args[0]) {
			delete require.cache[require.resolve('../whois.json')];
			const whois = require('../whois.json');
			if (!whois) { clientT.say(target, `A Moderator has to add the names first!`); return;
			} else { 
				let atted = ``;
				if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
				clientT.say(target,atted + whois.join(' | ')); return; }
		} else if (permissions.Mod(userstate)) {
			if (args[0]==="set"||args[0]==="full") {
				args.shift();
				fs.writeFile('./whois.json', JSON.stringify([`${args.join(' ')}`], null, 4), 'utf8', (err) => {
					if (err) throw err
					clientT.commandsT.get(`who`).execute(target, userstate, ``, false, [``]);
				  })
			} else if (args[0]==="add") {
				args.shift();
				commacheck = args.join(" ");
				if (commacheck.includes(",")) {
					args = commacheck.replace(/,/g," ").split(/ +/);
				}
				delete require.cache[require.resolve('../whois.json')];
				const whois = require('../whois.json');
				newnames = whois.filter(e => e !== `It's just good ol Aerilym monkaGun`);
				fs.writeFile('./whois.json', JSON.stringify(newnames.concat(args), null, 4), 'utf8', (err) => {
					if (err) throw err
					clientT.commandsT.get(`who`).execute(target, userstate, ``, false, [``]);
				  })
			} else if (args[0]==="remove") {
				args.shift();
				delete require.cache[require.resolve('../whois.json')];
				const whois = require('../whois.json');
				if (args[0]==="all") { return fs.writeFile('./whois.json', JSON.stringify(["It's just good ol Aerilym monkaGun"], null, 4), 'utf8', (err) => {
					if (err) throw err
					clientT.commandsT.get(`who`).execute(target, userstate, ``, false, [``]);
				  })}
				newnames = whois.filter(e => e !== args[0]);
				for (n=0; n < args.length+1; n++ ) {
					newnames = newnames.filter(e => e !== args[n]);
				}
				fs.writeFile('./whois.json', JSON.stringify(newnames, null, 4), 'utf8', (err) => {
					if (err) throw err
					clientT.commandsT.get(`who`).execute(target, userstate, ``, false, [``]);
				  })
			} else if (args[0]==="clear"||args[0]==="default"||args[0]==="reset") {
				fs.writeFile('./whois.json', JSON.stringify(["It's just good ol Aerilym monkaGun"], null, 4), 'utf8', (err) => {
					if (err) throw err
				  })
			} else {
				delete require.cache[require.resolve('../whois.json')];
				const whois = require('../whois.json');
				let atted = ``;
				if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
				clientT.say(target,atted + whois.join(' | ')); return; }
		} else { 
			delete require.cache[require.resolve('../whois.json')];
			const whois = require('../whois.json');
			let atted = ``;
			if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }
			clientT.say(target,atted + whois.join(' | ')); return; }
	}
}