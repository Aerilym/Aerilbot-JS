module.exports = {
	name: 'emote',
	cooldown: 5,
	aliases: ['fremotes', 'freemotes', 'emotes'],
	description: 'emote',
	use: '!emote',

	
	//Actual Command
	execute(target, userstate, msg, self, args) {

		const bttvemotes = `BabyYodaSip bongoTap Clap COGGERS gachiBASS gachiHYPER PartyParrot pepeD pepeJAMMER POGSLIDE POGSLIDECOGSLIDE ppOverheat `;
		const ffzemotes = `aerilyHazmat aerilyW AussieHands AustraliaBall AYAYA CatWhat ChooChoo CoffeeLove Dabchu dogeKek drinkWater FacePalm KEKW KEKWait monkaGIGA monkaGun monkaHmm monkaTOS OhISee OMEGALUL peepoClown peepoLook peepoLove peepoPoo peepoRIP Pepeg Pepega PepeHands PepeSad pepeScheme PepoHazmat pikachuS Pog POGGERS POGGIES SadCat widepeepoHappy YodaReee Yodasip `;

		let atted = ``;
		if ( msg.includes(`@`) ) { for (i = 0; i < args.length; i++) { if (args[i].includes(`@`)) { atted = (`${args[i]} -> `); } } }

		clientT.say(target, `${atted} Freemotes! ${ffzemotes} ${bttvemotes}`);

	}

}