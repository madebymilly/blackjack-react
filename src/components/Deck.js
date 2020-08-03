
// Regular JS class (no React):
class Deck {
    constructor() {
        this.currentDeck = [];
    }
    fetchCards() {

        // maak een nieuwe promise aan, wat eigenlijk puur een object is dat dat een 'wachtstatus' heeft
        let deckPromise = new Promise((resolve, reject) => {

            // haal de data op, en geef de promise deckPromise een seintje zodra je klaar bent.
            fetch('../data/deck.json') // TODO: deck fetchen hoeft maar 1x... shuffle wordt aparte functie, want dat moet welke elke ronde.
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
