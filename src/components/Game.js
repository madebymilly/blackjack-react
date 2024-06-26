import React, { Component } from 'react'
import { without } from 'lodash'

import Deck from './Deck'
import Player from './Player'
import Bank from './Bank'

class Game extends Component {

  constructor(props) {
    super(props)

    this.deck = new Deck();
    this.currentDeck = [];
    this.possibleBets = [10, 25, 50, 100];

    this.state = {
      data: [],
      deckReady: false,
      player: {
        name: 'Milly',
        stackSize: 1000,
      },
      round: {
        id: 0,
        bet: 0,
        bankHand: [],
        playerHands: []
      },
      roundHasStarted: false,
    }
  }

  componentDidMount() {

    // Promise for checking if deck is ready:
    let deckPromise = this.deck.fetchCards(); // de functie fetchCards geeft een promise terug. Die promise stoppen we in een variable. Dat doet verder nog niks.

    deckPromise.then(() => { // deze 'then' gebeurt pas zodra in de promise 'resolve()' is aangeroepen.

      this.setState(prevState => ({
        deckReady: !prevState.deckReady
      }));

      this.currentDeck = this.deck.currentDeck;

      // TODO: Dealcard
      // const newCard = this.deck.dealCard();
      // console.log(newCard);

    }, () => {
      // hier kun je eventueel neerzetten wat er gebeurt als de promise 'reject' heeft geroepen
    });

  }

  split = () => {
    // double the bet
    // ...

    // check welke hand er gesplit moet worden

    // Create extra playerHand, based on numbers of hands:
    const total = this.state.round.playerHands.length;
    //console.log(total);

    let tempRound = this.state.round;

    tempRound.playerHands[total] = [];

    let newHand = tempRound.playerHands[total];
    let firstHand = tempRound.playerHands[total-1];

    var card = firstHand.pop();
    newHand.push(card);

    this.setState(prevState => ({
      round: tempRound,
    }));

    // deal card on both hands
    // per hand go further
  }

  doMove = (move) => {
    //console.log(move);
    if (move == 'pass') {
      console.log('pass');
      // check welke hand er gepast moet worden
      // check if players has more hands
      // finishRound:
      this.finishRound();
    } else if ( move == 'hit' ) {
      console.log('hit');
      // check welke hand er gehit moet worden
      // give player another card
      // check if 'dead'
      // check if more hands
    } else if ( move == 'double') {
      console.log('double');
      // check welke hand er gedubbeld moet worden
      // double the bet
      // give player another card
      // check if 'dead'
      // finishRound
    } else if ( move== 'split' ) {
      console.log('split');
      this.split();
    } else {
      return false;
    }
  }

  finishRound = ( e ) => {

    const { round } = this.state; // (Destructing assignments)
    // show bankcards
    let tempRound = round;
    round.bankHand[0].hidden = false;
    // check handvalue and if bank needs more cards
    // compare hands
    // finish round
    console.log('finishRound');

    this.setState(prevState => ({ // werk met prevState, zodat het asyncroon werkt.
      round: tempRound,
      roundHasStarted: !prevState.roundHasStarted
    }));
  }

  startRound = ( e ) => {
    e.preventDefault();
    const { round, stackSize } = this.state; // (Destructing assignments)
    //console.log(this.currentDeck);

    let tempRound = round;
    tempRound.bet = e.target.value;
    tempRound.id = this.state.round.id + 1;

    // dit kan ook slimmer, apart fucntion voor dealCardFromDeck (en meteen die kaart uit deck halen.)
    const card1 = this.dealCard( 0 );
    const card2 = this.dealCard( 1 );
    const card3 = this.dealCard( 2 );
    const card4 = this.dealCard( 3 );

    tempRound.playerHands[0] = [ card1, card3 ];
    tempRound.bankHand = [ card2, card4 ];
    tempRound.bankHand[0].hidden = true;

    let tempDeck = this.currentDeck; // TODO: DIT IN APARTE FUNCTIE DOEN 'removeCard' of DealCard'
    tempDeck = without( tempDeck, card1 );
    tempDeck = without( tempDeck, card2 );
    tempDeck = without( tempDeck, card3 );
		tempDeck = without( tempDeck, card4 );

    let tempStackSize = stackSize;
    tempStackSize -= e.target.value;

    // TODO: calculate possible player moves: with a getter and setter.
    // Based on outcome return React Component in this Game.js (so PlayerMoves.js can be removed.)
    // See App.js in react-text-editor files.

    this.setState(prevState => ({ // werk met prevState, zodat het asyncroon werkt.
      round: tempRound,
      stackSize: tempStackSize,
      roundHasStarted: !prevState.roundHasStarted
    }));
  }

  dealCard = ( i ) => {
    // a functional approach,
    // Because this.props and this.state may be updated asynchronously,
    // you should not rely on their values for calculating the next state.
    const card = this.currentDeck[i];
    return card;
  }

  render() {

    return (
      <div>
        <h3>Game:</h3>
        <label>Round: </label>
        <span>{this.state.round.id}</span>
        <hr/>
        <Bank
          hand={this.state.round.bankHand}
        />
        <hr/>
        <Player
          name={this.state.player.name}
          stackSize={this.state.player.stackSize}
          bet={this.state.round.bet}
          startRound={this.startRound}
          roundHasStarted={this.state.roundHasStarted}
          bets={this.possibleBets}
          hands={this.state.round.playerHands}
          doMove={this.doMove}
        />
        <hr />
      </div>
    )
  }
}

export default Game;
