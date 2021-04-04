module.exports = {
	name: 'timers',
	cooldown: 5,
	aliases: ['timer'],
	description: 'timer',
	use: '!timer',
	//Actual Command
	execute(target, userstate, msg, self, args) {
		
		const links = require('../links.json');
		const axios = require('axios');
		const permissions = require('../permission.js');
		if (!permissions.Mod(userstate)) { console.log("User does not have permission"); return; } //Broadcaster Permission
		console.log("User has permission");

		function mins(minutes) {
			return minutes*60000;
		}

		function timerX(adType) {
			function returnFunction() {
				const { msgTime, msgSender } = require(`../index.js`);
				const nowX = Date.now();
				if ( msgSender != `aerilbot` && nowX-msgTime < 60000*15 ) {
					let msg = ``;
					clientT.commandsT.get(adType).execute(target, userstate, ``, true, [``]);
				}
			}
			return returnFunction;
		}

		intervalDiscord = setInterval(timerX(`discord`), mins(63));
		intervalClip = setInterval(timerX(`bros`), mins(40));
		intervalSocials = setInterval(timerX(`socials`), mins(79));

		clearInterval(intervalDiscord);
		clearInterval(intervalClip);
		clearInterval(intervalSocials);

		intervalDiscord = setInterval(timerX(`discord`), mins(63));
		intervalClip = setInterval(timerX(`bros`), mins(40));
		intervalSocials = setInterval(timerX(`socials`), mins(79));
		
	}
}