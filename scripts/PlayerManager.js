class PlayerManager {
	constructor() {
		this.players = {};
	}

	addPlayer(player) {
		this.players[player.name] = player.card.getCardName();
	}

	getPlayerFromName(player) {
		return this.players[player];
	}

	getPlayerList() {
		return this.players;
	}
}