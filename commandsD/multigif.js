module.exports = {
	name: 'multigif',
	description: 'Searches giphy.com',
	use: '!multigif {Search}',

	//Actual Command
	execute(message, args) {

		if(message.member.hasPermission(['ADMINISTRATOR'])) {

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

}