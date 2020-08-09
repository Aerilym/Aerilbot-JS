module.exports = {
	name: 'next',
	cooldown: 5,
	aliases: ['stream', 'nextstream', 'streams', 'schedule'],
	description: 'next',
	use: '!next',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {
		const links = require('../links.json');
		var fs = require('fs');
		//timezones
		var moment = require('moment-timezone');
		moment().tz("Australia/Melbourne").format();

		delete require.cache[require.resolve(`../streamlist.json`)];
		const streamlist = require('../streamlist.json');

		//checks if 1st item is in the past
		var nowTime = new Date();
		var nowUTC = nowTime.getTime();
		var melbourne = moment.tz(streamlist[0].substr(0,16), "Australia/Melbourne");
		var usertime = melbourne.clone().tz('Australia/Melbourne').format();
		const stYear = usertime.substr(0,4);
		const stMonth = usertime.substr(5,2)-1;
		const stDay = usertime.substr(8,2);
		const stHour = usertime.substr(11,2);
		const stMinute = usertime.substr(14,2);
		const utcFirst = Date.UTC(stYear, stMonth, stDay, stHour, stMinute, 0, 0)-39600000;

		if (utcFirst<nowUTC) {
			for (i=0; i<1;) {
				if (!datecheck) { var datecheck = streamlist; }
				var melbourne = moment.tz(datecheck[0].substr(0,16), "Australia/Melbourne");
				var usertime = melbourne.clone().tz('Australia/Melbourne').format();

				//time setup
				const stYear = usertime.substr(0,4);
				const stMonth = usertime.substr(5,2)-1;
				const stDay = usertime.substr(8,2);
				const stHour = usertime.substr(11,2);
				const stMinute = usertime.substr(14,2);
				const firstDate = Date.UTC(stYear, stMonth, stDay, stHour, stMinute, 0, 0)-39600000;

				if (firstDate<nowUTC) {
					datecheck.shift();
				} else {
					fs.writeFile('./streamlist.json', JSON.stringify(datecheck, null, 4), 'utf8', (err) => {
						if (err) throw err;
							clientT.commandsT.get('next').execute(target, userstate, msg, self, args);
					})
					i++;
					return;
				}
			}
		}

		//melb if no tz selection
		if (!args[0]) { 
			 var usertz = 'Australia/Melbourne';
		} else {
			var usertz = args.join(' '); 
		}

		//aborts if invalid tz
		if (!moment.tz.zone(usertz)) { clientT.say(target, `Sorry I can't find that zone, it needs to be like: America/Los_Angeles or EST`); return; }

		var timeformatted = ["", "", "", "", ""];
		var stringstream = ["", "", "", "", ""];

		if (streamlist.length > 5) { var lengthshow = 5; } else { var lengthshow = streamlist.length; }

		function tConvert (time) {
			// Check correct time format and split into components
			time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
		  
			if (time.length > 1) { // If time format correct
			  time = time.slice (1);  // Remove full string match value
			  time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
			  time[0] = +time[0] % 12 || 12; // Adjust hours
			}
			return time.join (''); // return adjusted time or original string
		  }


		for ( n=0; n < lengthshow; n++ ) {
			var melbourne = moment.tz(streamlist[n].substr(0,16), "Australia/Melbourne");
			var usertime = melbourne.clone().tz(usertz).format();

			//time setup
			const stYear = usertime.substr(0,4);
			const stMonth = usertime.substr(5,2)-1;
			const stDay = usertime.substr(8,2);
			const stHour = usertime.substr(11,2);
			const stMinute = usertime.substr(14,2);

			const dateowo = new Date(Date.UTC(stYear, stMonth, stDay, stHour, stMinute, 0, 0));

			const time12 = tConvert(`${stHour}:${stMinute}`);
			const timecut = `${time12.substring(0,time12.length-5)}${time12.substring(time12.length-2,time12.length)}`

			timeformatted[n] = `${dateowo.toUTCString().substr(0,3)} ${timecut}`;
			stringstream[n] = `| ${timeformatted[n]} - ${streamlist[n].substring(16)}`;
		
		}
		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} For ${usertz}: ${stringstream.join(` `)}`);
	}

}