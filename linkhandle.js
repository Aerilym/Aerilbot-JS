module.exports = {
	scanLink: function (target, userstate, msg, self) {
		if (msg.includes("twitch.tv/aerilym_") || msg.includes("twitch.tv/"&&"clip") || msg.includes("clips.twitch.tv/")){ return; }
		else if (userstate['custom-reward-id']) {
			if (userstate['custom-reward-id']==='34fac2c7-fa58-4218-b3f9-ac747492d84b'&&msg.includes("youtube.com"||"youtu.be")) { return; }
		} else { 
			clientT.deletemessage(target, userstate['id']); 
		}
	}
};