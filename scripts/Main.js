// Generating normal cards
let allCards = [];
for (let suit = 0; suit < 4; suit++) {
	for (let card = 1; card < 14; card++) {
		allCards.push(new Card(card, suit));
	}
}

// Generating jokers
allCards.push(new Card(14, JOKER));
allCards.push(new Card(14, JOKER));

// Printing all cards
for (let i = 0; i < allCards.length; i++) {
	const element = allCards[i];
	console.log(element.getCardName());
}


let playerManager = new PlayerManager();

let players = {};

// testing
player1 = window.prompt('player1');
players[player1] = new Player(player1, allCards[52]);
window.open(`/Cartas/${players[player1].card.getSuit()}/${players[player1].card.getNumber()}.png`);

// console.log(playerManager.getPlayerList())