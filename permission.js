module.exports = {
	Sub: function (userstate) {//Sub & Mod permission
		if(userstate.subscriber) { return true;
		} else if(userstate.mod) { return true;
		} else if(userstate.badges){ 
			if(userstate.badges.broadcaster) { return true;
			} else if(userstate.badges.founder) { return true;
			} else if (userstate.badges.subscriber) { return true;
			} else return false;
		} else { return false; }
	},

	SubOnly: function (userstate) {//Sub only permission
		if(userstate.subscriber) { return true;
		} else if(userstate.badges) { 
			if(userstate.badges.founder) { return true;
			} else if(userstate.badges.subscriber) { return true;
			} else { return false; }
		} else { return false; }
	},
		
	Mod: function (userstate) {//Mod only permission
		if(userstate.mod) { return true;
		} else if(userstate.badges) { 
			if(userstate.badges.broadcaster) { return true;
			} else { return false; }
		} else { return false; }
	},

	Broadcaster: function (userstate) {//Broadcaster only permission
		 if(userstate.badges) { 
			if(userstate.badges.broadcaster) { return true;
			} else { return false; }
		 } else { return false; }
	}
  };