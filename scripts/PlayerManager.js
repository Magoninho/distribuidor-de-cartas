class PlayerManager {
	constructor() {
		this.players = {};
	}

	addPlayer(player) {
		this.players[player.name] = player.card.getCardName();
	}

	getPlayerList() {
		return this.players;
	}
}