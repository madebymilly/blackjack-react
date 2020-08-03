// Bijv het Deck: een aparte file die de fetch doet, en een paar functies heeft:
// shuffle, dealCard, reset etc. Omdat die niks rendert naar het scherm,
// maar alleen bij hoeft te houden wat er in de deck zit hoeft het alleen geen React te zijn,
// maar kan het gewoon een js-class zijn.
// Die importeer je dan in je Game en doe je iets als:
// let currentDeck = new Deck();
// currentDeck.shuffle();
// let newCard = currentDeck.dealCard();
// Regular JS class (no React):
class Deck {
    constructor() {
        this.currentDeck = [];
    }
    fetchCards() {

        // maak een nieuwe promise aan, wat eigenlijk puur een object is dat dat een 'wachtstatus' heeft
        let deckPromise = new Promise((resolve, reject) => {

            // haal de data op, en geef de promise deckPromise een seintje zodra je klaar bent.
            fetch('../data/deck.json')
                .then(response => response.json())
                .then(result => {
                    this.currentDeck = result.sort(function () {
                        return 0.5 - Math.random();
                    })

                    // zodra je hier komt geef je aan dat de promise 'gelukt!' is
                    resolve();
                })
        });

        //return die promise aan diegene die hem aanroept
        return deckPromise;

    }
    dealCard() {
        return this.currentDeck.pop();
    }
}
export default Deck;
