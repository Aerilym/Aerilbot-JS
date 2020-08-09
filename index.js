const fs = require('fs');
const Discord = require('discord.js');
const tmi = require('tmi.js');
const axios = require('axios');
const config = require('./config.json');
var GphApiClient = require('giphy-js-sdk-core');
giphy = GphApiClient(config.giphyToken);
const opts = {
	options: {
		debug: true
	},
	connection: {
		reconnect: true
	},
	identity: {
		username: config.BOT_USERNAME,
		password: config.OAUTH_TOKEN
	},
	channels: [
		config.CHANNEL_NAME,
		config.BOT_USERNAME,
		`#manthello`,
		`#aboringbadger`,
		`#eeliser`,
		`#merketo`,
		`#yogscast`,
		`#SyberCeraph`,
		`#Tschuggz`
	]
};

const optsListen = {
	connection: {
		reconnect: true
	},
	identity: {
		username: config.CHANNEL_NAME,
		password: config.OAUTH_TOKEN_AERILYM
	},
	channels: [
		config.CHANNEL_NAME
	]
};

clientD = new Discord.Client();
clientT = new tmi.client(opts);
clientTListen = new tmi.client(optsListen);
clientD.commandsD = new Discord.Collection();
clientT.commandsT = new Discord.Collection();
const commandFilesD = fs.readdirSync('./commandsD').filter(file => file.endsWith('.js'));
const commandFilesT = fs.readdirSync('./commandsT').filter(file => file.endsWith('.js'));

//Discord command handle
for (const file of commandFilesD) {
	const commandD = require(`./commandsD/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	clientD.commandsD.set(commandD.name, commandD);
}

clientD.once('ready', () => {
	console.log(`* Connected Chat Bot to Discord`);
	clientD.user.setActivity(`YOU🔪`, { type: 'WATCHING' });
});

//Discord Message Handler
clientD.on('message', message => {
	//Creates args array which contains everything after the prefix split by strings
	const args = message.content.slice(config.prefix.length).split(/ +/);
	//Creates commad constant was first string after prefix, then removes it from the args string.
	const commandD = args.shift().toLowerCase();
	//Ignore if the text doesnt have any valid command
	if (!clientD.commandsD.has(commandD)) return;
	try {
		clientD.commandsD.get(commandD).execute(message, args);
		//Makes sure that if shit hits the fan the bot doesn't panic
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Create an event listener for new guild members
clientD.on('guildMemberAdd', member => {
	const userJoinChannel = member.guild.channels.find(ch => ch.name === '📝general');
	if (!userJoinChannel) return;
	userJoinChannel.send(`Welcome to **${member.guild.name}**, ${member} :partying_face:`);
});

//--------------------------------------Twitch--------------------------------------
clientT.on('message', onMessageHandler);
clientT.on('connected', onConnectedHandler);
clientTListen.on('connected', onConnectedHandler2);
clientT.connect();
clientTListen.connect();

//Twitch command handle
for (const file of commandFilesT) {
	const commandT = require(`./commandsT/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	clientT.commandsT.set(commandT.name, commandT);
}

//Event Listeners
clientTListen.on("anongiftpaidupgrade", (channel, username, userstate) => {
	if (!userstate['display-name']) { messagename = username; } else { messagename = userstate['display-name']; }
	clientT.say(channel, `${messagename} just continued their Gift Sub! Thanks so much for sticking with me!`);
});
clientTListen.on("cheer", (target, userstate, msg) => {
	if (!userstate['display-name']) { messagename = username; } else { messagename = userstate['display-name']; }
	clientT.say(target, `${messagename} just cheered ${userstate.bits} bits! Thank you so much!`);
	msg = 'cheer';
	self = false;
	args = [userstate.username];
	if (userstate.bits > 49) { clientT.commandsT.get('label').execute(target, require(`./givendata/aerilbot.json`), msg, self, args); }
	if (userstate.bits > 499 ) { clientTListen.say(target, `LuvSign LuvSign LuvSign LuvSign `); }
});
clientTListen.on("giftpaidupgrade", (channel, username, sender, userstate) => {
	clientT.say(channel, `${username} just continued their Gift Sub from ${sender}! Thanks so much for sticking with me!`);
});
clientTListen.on("hosted", (channel, username, viewers, autohost) => {
	setTimeout( function () {
		clientT.say(channel, `${username} is now hosting us with ${viewers} viewers! Welcome everyone!`);
		msg = 'host';
		self = false;
		args = [username];
		if (viewers > 1 ) { clientT.commandsT.get('shoutout').execute(channel, require(`./givendata/aerilbot.json`), msg, self, args); }
		if (viewers > 4 ) { clientTListen.say(channel, `LuvSign LuvSign LuvSign LuvSign `); }
	}, 5000)
});
clientTListen.on("hosting", (channel, target, viewers) => {
	clientT.say(channel, `${channel} is now hosting ${target} with ${viewers} viewers!`);
});
clientTListen.on("raided", (channel, username, viewers) => {
	setTimeout( function () {
		clientT.say(channel, `${username} is raiding with ${viewers} viewers! Welcome everyone!`);
		msg = 'raid';
		self = false;
		args = [username];
		if (viewers > 1 ) { clientT.commandsT.get('shoutout').execute(channel, require(`./givendata/aerilbot.json`), msg, self, args); }
		if (viewers > 4 ) { clientTListen.say(channel, `LuvSign LuvSign LuvSign LuvSign `); }
	}, 5000)
});
clientTListen.on("resub", (channel, username, months, message, userstate, methods) => {
	let cumulativeMonths = ~~userstate["msg-param-cumulative-months"];
	if (!message) {  subMessage = ``; } else { subMessage = ` They said: ${message}`}
	clientT.say(channel, `${username} Re-Subscribed for ${cumulativeMonths} months!!! Thanks for all the support! ${subMessage}`);
});
clientTListen.on("subgift", (channel, username, streakMonths, recipient, methods, userstate) => {
	let senderCount = ~~userstate["msg-param-sender-count"];
	clientT.say(channel, `Thanks for gifting a Sub to ${recipient}! You're a legend ${username}! ${username} has gifted ${senderCount} total Subs!`);
	msg = 'subgift';
	self = false;
	args = [username];
	clientT.commandsT.get('label').execute(channel, require(`./givendata/aerilbot.json`), msg, self, args);
});
clientTListen.on("submysterygift", (channel, username, numbOfSubs, methods, userstate) => {
	let senderCount = ~~userstate["msg-param-sender-count"];
	clientT.say(channel, `${username} is gifting ${numbOfSubs} subs to the community! ${username} has gifted ${senderCount} total Subs! What a legend!`);
	msg = 'submysterygift';
	self = false;
	args = [username];
	clientT.commandsT.get('label').execute(channel, require(`./givendata/aerilbot.json`), msg, self, args);
	if (numbOfSubs > 2 ) { clientTListen.say(channel, `LuvSign LuvSign LuvSign LuvSign `); }
});
clientTListen.on("subscription", (channel, username, method, message, userstate) => {
	clientT.say(channel, `${username} just Subscribed!!! Thanks for the support! <3`);
});

const permissions = require('./permission.js');
const linkhandle = require('./linkhandle.js');
const cooldowns = new Discord.Collection();
let msgTime = {};
let msgSender = {};
clientT.commandsT.get('timers').execute(`#aerilym_`, require(`./givendata/aerilbot.json`));
clientT.commandsT.get('who').execute(`#aerilym_`, require(`./givendata/aerilbot.json`), ``, false, [`reset`]);

function onMessageHandler (target, userstate, msg, self) {/*Message Handler*/
	if (msg.toLowerCase() === `aerilbot yes`) { var yesResponse = Math.random(); if (yesResponse >= 0 && yesResponse < 0.5 ) { clientT.say(target, `:)`); }	/*50%*/ if (yesResponse >= 0.5 && yesResponse < 0.75 ) { clientT.say(target, `:D`); } /*25%*/ if (yesResponse >= 0.75 && yesResponse < 0.9 ) { clientT.say(target, `LUL`); } /*15%*/ if (yesResponse >= 0.9 && yesResponse <= 1 ) { clientT.say(target, `aerilyPog `); } /*10%*/ }
	if (msg.toLowerCase() === `aerilbot no`) { var yesResponse = Math.random(); if (yesResponse >= 0 && yesResponse < 0.5 ) { clientT.say(target, `:(`); }	/*50%*/ if (yesResponse >= 0.5 && yesResponse < 0.75 ) { clientT.say(target, `D:`); } /*25%*/ if (yesResponse >= 0.75 && yesResponse < 0.9 ) { clientT.say(target, `FeelsBadMan`); } /*15%*/ if (yesResponse >= 0.9 && yesResponse <= 1 ) { clientT.say(target, `monkaGun `); } /*10%*/ }
	if (target !== `#aerilym_`) {
		if (userstate.username === `aerilym_` && msg.charAt(0) === `-`) { clientT.say(target, msg.substring(1,msg.length));
		}
		if (msg.toLowerCase().includes(`aerilym`) || msg.toLowerCase().includes(`aerilym_`) || msg.toLowerCase().includes(`@aerilym`) || msg.toLowerCase().includes(`@aerilym_`)) {
			const fullmessage = target + ` | ` + userstate.username + `: ` + msg;
			clientD.commandsD.get('chattrack').execute(msg, fullmessage);
		}
	}
	if (target !== `#aerilym_`&&target !== `#aerilbot`&&target !== `#aerilym`&&target !== `#aerilbot2`&&target !== `#aerilym2`) { return; }
	
	//Personal
	const now = Date.now();
	msgTime = now;
	msgSender = userstate.username;
	module.exports = {
		msgTime: msgTime,
		msgSender: msgSender
	}
	
	//Bot Identification
	if (self) { return; } // Ignore messages from the bot
	if (userstate.username === "buttsbot") { return; } // Ignore messages from buttsbot

	//Link handler
	if (msg.includes("www.") || msg.includes("http://") || msg.includes("https://") || msg.includes(".com") || msg.includes(".org") || msg.includes(".net") || msg.includes(".co") || msg.includes(".ru") || msg.includes(".tv") || msg.includes(".biz") || msg.includes(".gg")){
		delete require.cache[require.resolve('./linkpermit.json')];
		const linkPermit = require('./linkpermit.json');
		if (permissions.Mod(userstate)) { console.log('Mod link allowed'); } else if (userstate.badges) { if(userstate.badges.vip) { console.log('VIP link allowed'); }
		} else if (linkPermit.slice(1,-1)===userstate.username.toLowerCase()) {const linkPermitName = JSON.stringify("aerilym_"); fs.writeFile('linkpermit.json', JSON.stringify(linkPermitName, null, 4), 'utf8', (err) => { if (err) throw err })
		} else { linkhandle.scanLink(target, userstate, msg, self); }
	}

	if (msg.toLowerCase().includes(`poggers`) && !msg.includes(config.prefix)) { clientT.say(target, `POGGERS POGGERS POGGERS `)}
	if (msg.toLowerCase().includes(`poggies`) && !msg.includes(config.prefix)) { clientT.say(target, `POGGIES POGGIES POGGIES `)}
	if (msg.toLowerCase().includes(`pogslide`) && !msg.includes(config.prefix)) { clientT.say(target, `POGSLIDE POGSLIDE POGSLIDE `)}
	if (msg.toLowerCase().includes(`corona`) || msg.toLowerCase().includes(`sick`) || msg.toLowerCase().includes(`virus`) || msg.toLowerCase().includes(`quarantine`)) { clientT.say(target, `aerilyHazmat PepoHazmat `)}
	if ((msg.toLowerCase().includes(`how`) && msg.toLowerCase().includes(`join`)) || (msg.toLowerCase().includes(`ip`) && msg.toLowerCase().includes(`what`))) { clientT.commandsT.get('discord').execute(`#aerilym_`, require(`./givendata/aerilbot.json`), msg=`ip @${userstate.username}`, false, [`ip`, `@${userstate.username}`]); }
	

	if (userstate['custom-reward-id']) { /*Reward handler*/
		if (userstate['custom-reward-id']==='0aad94bd-aa90-4ee8-ba0d-bd87b420cb2f') { if(!userstate.mod) {try {clientT.timeout(target, userstate.username, 426, "They Redeemed Devil's Time Out"); } catch (error) { } } }
		if (userstate['custom-reward-id']==='1d25daa1-09f2-4c6c-9278-ab31d4f265eb') { clientT.say(target, `drinkWater drinkWater drinkWater`); }
		if (userstate['custom-reward-id']==='d090246b-cef2-4a93-865c-6f1ab2319fc6') { clientTListen.commercial("#aerilym_", 30).then((data) => {}).catch((error) => {}); clientT.say(target, `@${userstate.username} used their AerilCoins to run a 30s ad, If you're not a sub Aerilym is sorry about the interruption LuvSign maybe @${userstate.username} can gift you a sub :)`)}
		if (userstate['custom-reward-id']==='d04a790c-ea67-461b-9993-f6f9990eb0df') { if(!userstate.mod) { if (userstate.badges) { if(userstate.badges.vip) { return; } } { 
			try {clientTListen.say(target, `/vip ${userstate.username}`); 
			delete require.cache[require.resolve('./vipuse.json')];
			const vipuse = require(`./vipuse.json`)
			var nowTime = new Date();
			var nowUTC = nowTime.getTime();
			let checklength = vipuse.length-1;
			for (n=0; n < checklength+1; n++) {
				if ( vipuse[n].includes(`${userstate.username}`) ) {
					console.log(Number(vipuse[n].substring(0,13))+Number(2500000000));
					if ( nowUTC > Number(vipuse[n].substring(0,13))+Number(2500000000)) {
						vipuse[n] = `${nowUTC} | ${userstate.username}`;
						fs.writeFile('./vipuse.json', JSON.stringify(vipuse, null, 4), 'utf8', (err) => { if (err) throw err });
						return;
					}
				}
			}
			fs.writeFile('./vipuse.json', JSON.stringify(vipuse.concat([`${nowUTC} | ${userstate.username}`]), null, 4), 'utf8', (err) => { if (err) throw err });
			return;
		} catch (error) { } } } }
	}

	if (msg.charAt(0)!=config.prefix) { return; }  // Ignore messages with no prefix
	const args = msg.slice(config.prefix.length).split(/ +/);	//Creates args array which contains everything after the prefix split by strings
	const commandNameT = args.shift().toLowerCase();	//Creates commad constant was first string after prefix, then removes it from the args string.
	const commandT = clientT.commandsT.get(commandNameT) || clientT.commandsT.find(cmd => cmd.aliases && cmd.aliases.includes(commandNameT));
	if (!commandT) return;
	
	//Personal cooldown handler
	if (userstate.username != `aerilym_`) {
		if (!cooldowns.has(commandNameT)) {
			cooldowns.set(commandNameT, new Discord.Collection());
		}
		const timestamps = cooldowns.get(commandNameT);
		const cooldownAmount = (commandT.cooldown || 3) * 1000;
		if (timestamps.has(userstate.username)) {
			const expirationTime = timestamps.get(userstate.username) + cooldownAmount;
			if (now < expirationTime) {
				return;
			}
		}
		timestamps.set(userstate.username, now);
		setTimeout(() => timestamps.delete(userstate.username), cooldownAmount);
	}
	
	try { commandT.execute(target, userstate, msg, self, args);
	} catch (error) { console.error(error); console.log('there was an error trying to execute that command!'); }
};

//Connection Reporters
function onConnectedHandler (addr, port) { console.log(`* Connected Chat Bot to Twitch @ ${addr}:${port}`); }
function onConnectedHandler2 (addr, port) { console.log(`* Connected Listener to Twitch @ ${addr}:${port}`); }
clientD.login(config.token); //Don't touch this for the love of god and keep it at the end :)