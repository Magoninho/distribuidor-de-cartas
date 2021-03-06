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


let players = {};


function addPlayer(playerName) {
	if (playerName) {
		// Checks if the player is not in the list before adding it
		if (!(playerName in players)) {
			let cardIndex = Math.floor(Math.random() * allCards.length);
			let card = allCards[cardIndex];
			allCards.splice(cardIndex, 1); // removing the card from the array because it can not be repeated

			// Generates a player with a random card
			players[playerName] = new Player(playerName, card);
			// window.open(`/Cartas/${players[playerName].card.getSuit()}/${players[playerName].card.getNumber()}.png`);

			// Adds the player name and the card image, according to the stuff inside the players dictionary
			document.getElementById('player-list').innerHTML += `
		${playerName}<br>
		<img width='100' src='/Cartas/${players[playerName].card.getSuit()}/${players[playerName].card.getNumber()}.png'><br>
		`;

		} else {
			alert('Já existe um jogador com esse nome na lista');
		}
	}

}

function removePlayer(playerName) {
	if (playerName in players) {
		delete players[playerName];
	}
}
