import React, { Component } from 'react'
import { without } from 'lodash'

import Hand from './Hand'
import Player from './Player'
import PlayerMoves from './PlayerMoves'

class Game extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      deck: [], // is dit wel state? want kan steeds uitgerekend worden op basis van roundbankHand & playerHand
      playerName: 'Milly',
      stackSize: 200,
      round: {
        id: 0,
        bet: 0,
        bankHand: [],
        //playerHand0: [],
        // playerHand1: [], na een split
        //hands: 1, // number of hands te player has
        playerHands: []
      },
      roundHasStarted: false,
    }
  }

  componentDidMount() {
		fetch('../data/deck.json')
			.then(data => data.json())
      .then(result => {
        const deck = result.map( card => {
          return card;
        } )
        // shuffle:
        .sort(function() {
      		return 0.5 - Math.random();
      	});
        this.setState( {
          deck: deck
        } )
      })
  }
  
  split = () => {
    // double the bet
    // ...

    // Create extra playerHand, based on numbers of hands:
    const total = this.state.round.playerHands.length;
    console.log(total);

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

  doMove = ( move ) => {
    //console.log(move.move);
    const m = move.move;
    if (m == 'pass') {
      console.log('pass');
      // check if players has more hands
      // finishRound:
      this.finishRound();
    } else if ( m == 'hit' ) {
      console.log('hit');
      // give player another card
      // check if 'dead'
      // check if more hands
    } else if ( m == 'double') {
      console.log('double');
      // double the bet
      // give player another card
      // check if 'dead'
      // finishRound
    } else if ( m == 'split' ) {
      console.log('split'); 
      this.split();
    } else {
      return false;
    }
  }

  finishRound = ( e ) => {
      // show bankcards
      // check if bank needs more cards
      // compare hands
      // finish round
      console.log('finishRound');
  }


  startRound = ( e ) => {
    e.preventDefault();
    let tempRound = this.state.round;
    tempRound.bet = e.target.value;
    tempRound.id = this.state.round.id + 1;

    // dit kan ook slimmer, apart fucntion voor dealCardFromDeck (en meten die kaart uit deck halen.)
    const card1 = this.dealCard( 0 );
    const card2 = this.dealCard( 1 );
    const card3 = this.dealCard( 2 );
    const card4 = this.dealCard( 3 );

    tempRound.playerHands[0] = [ card1, card3 ];
    tempRound.bankHand = [ card2, card4 ];
    tempRound.bankHand[0].hidden = true;

    let tempDeck = this.state.deck;
    tempDeck = without( tempDeck, card1 );
    tempDeck = without( tempDeck, card2 );
    tempDeck = without( tempDeck, card3 );
		tempDeck = without( tempDeck, card4 );

    let tempStackSize = this.state.stackSize;
    tempStackSize -= e.target.value;

    // TODO: make bets invisible (change state of 'roundHasStarted')

    // TODO: calculate possible player moves: with a getter and setter.
    // Based on outcome return React Component in this Game.js (so PlayerMoves.js can be removed.)
    // See App.js in react-text-editor files.

    // state veranderd nav van user input, in dit geval 'bet':
    this.setState(prevState => ({ // werk met prevState, zodat het asyncroon werkt.
      deck: tempDeck,
      round: tempRound,
      stackSize: tempStackSize,
      roundHasStarted: true
    }));
  }

  dealCard = ( i ) => {
    // a functional approach,
    // Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
    const card = this.state.deck[i];
    return card;
  }

  render() {

    const bets = [10, 25, 50, 100];
    let playermoves;

    if ( this.state.roundHasStarted ) {
      console.log('round has started!');
      playermoves = <PlayerMoves doMove={this.doMove}/>
    }

    return (
      <div>
        <em>Round {this.state.round.id}</em>
        <div>Bet: {this.state.round.bet}</div>
        <hr/>
        <em>Bank hand:</em>
        <Hand hand={this.state.round.bankHand} />
        <hr/>
        <em>Player hand:</em>
        {this.state.round.playerHands.map(
          (hand, i) => 
            <Hand key={i} hand={hand} />
        )}
        {
          // TODO: add playermoves to <Hand>:
        }
        {playermoves}
        <hr/>
        <Player
          name={this.state.playerName}
          stackSize={this.state.stackSize}
          bet={this.state.round.bet}
          startRound={this.startRound}
          bets={bets}
        />
      </div>
    )
  }
}

export default Game;
