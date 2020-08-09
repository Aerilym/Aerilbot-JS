module.exports = {
	name: 'time',
	cooldown: 5,
	aliases: ['tz', 'timezone'],
	description: 'time',
	use: '!time',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');

		//timezones
		var moment = require('moment-timezone');
		moment().tz("Australia/Melbourne").format();
		if (!args[0]) { 
			 var usertz = 'Australia/Melbourne';
		} else {
			var usertz = args.join(' '); 
		}

		const streamlist = require('../streamlist.json');
		var nowTime = new Date();
		var nowUTC = nowTime.getTime();
		var melbourne = moment.tz(nowUTC, "Australia/Melbourne");
		if (!moment.tz.zone(usertz)) { clientT.say(target, `Sorry I can't find that zone, it needs to be like: America/Los_Angeles`); return; }
		var usertime = melbourne.clone().tz(usertz).format();

		//time setup
		const stYear = usertime.substr(0,4);
		const stMonth = usertime.substr(5,2)-1;
		const stDay = usertime.substr(8,2);
		const stHour = usertime.substr(11,2);
		const stMinute = usertime.substr(14,2);
		const stSecond = usertime.substr(17,2);
		const tzstring = usertime.substr(19,6);

		const dateowo = new Date(Date.UTC(stYear, stMonth, stDay, stHour, stMinute, stSecond));
		var timeformatted = `${stHour}:${stMinute} ${dateowo.toUTCString().substr(0,11)}`;

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Time in ${usertz} is ${timeformatted}`);

	}

}