module.exports = {
	name: 'gif',
	description: 'Searches giphy.com',
	use: '!gif {Search}',

	//Actual Command
	execute(message, args) {



		giphy.search('gifs', {"q": args.join(" ")})
		.then((response) => {
			var totalReponses = response.data.length;
			var responseIndex = Math.floor((Math.random() * 10) + 1) % totalReponses;
			var responseFinal = response.data[responseIndex]

			message.channel.send("", {
				files: [responseFinal.images.fixed_height.url]
			})
			}).catch(() => {
				message.channel.send('Sorry, no results!')
			})
	}

}