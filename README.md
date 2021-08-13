# blackjack-react
Blackjack game in React.
Work in progress.

## Code improvements:
- defaultProps?

### To do:
- Start first round.
  - Show only possible player moves
  - Pass
  - Hit
  - Split
  - Double
  - Bank moves
  - Check winner
  - Payout

- Create Deck JS class (no React, since no render)
  - XX Fetch only once, shuffle new Deck every round
  - check if currentDeck is in use.
  - use DealCard function from Deck.js
  - StartRound only when Deck is Ready! (check state)

- Deal card from deck function

- Make it possible to start a whole game, and keep playing after one round.
  - Keep track of roundno.
  - Also set name & stacksize on start game.
