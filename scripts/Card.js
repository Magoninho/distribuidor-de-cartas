class Card {
	constructor(number, suit) {
		this.number = number;
		this.suit = suit;
	}

	getCardName() {
		let name = "";

		if (this.suit < 4 && this.number < 14) {
			if (this.number == 0)
				return;
			else if (this.number == 1) 
				name = `Ás ${strings[this.suit]}`
			else if (this.number == 11)
				name = `Valete ${strings[this.suit]}`;
			else if (this.number == 12) 
				name = `Rainha ${strings[this.suit]}`;
			else if (this.number == 13)
				name = `Rei ${strings[this.suit]}`;
			else 
				name = `${this.number} ${strings[this.suit]}`;
		} else {
			if (this.suit == 4) name = "Joker Preto";
			if (this.suit == 5) name = "Joker Branco";
		}
		return name;
	}
}