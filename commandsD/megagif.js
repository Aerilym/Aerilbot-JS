module.exports = {
	name: 'megagif',
	description: 'Searches giphy.com',
	use: '!megagif {Search}',

	//Actual Command

	execute(message, args) {
		if(message.member.hasPermission(['ADMINISTRATOR'])) {


		giphy.search('gifs', {"q": args.join(" ")})
		.then((response) => {
			var totalReponses = response.data.length;
console.log(totalReponses)

			for (totalReponses < 5; totalReponses--;) {
				console.log(totalReponses)
				var responseIndex = totalReponses;
				var responseFinal = response.data[responseIndex]

				message.channel.send("", {
					files: [responseFinal.images.fixed_height.url]
				})
			}




				}).catch(() => {
					message.channel.send('Sorry, no results!')
				})
	}
}
}