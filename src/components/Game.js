import React, { Component } from 'react'
import { without } from 'lodash'

import Deck from './Deck'
import Card from './Card'
import Hand from './Hand'
import Player from './Player'
import PlayerMoves from './PlayerMoves'

// Deck is geen state, want wordt uitgerekend op basis van state.round.bankHand & state.round.playerHand
let deckProp = []; // @TODO

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      deck: [], // is dit wel state? want kan steeds uitgerekend worden op basis van roundbankHand & playerHand
      playerName: 'Milly',
      stackSize: 200,
      changeName: false,
      changeStack: false,
      round: {
        id: 0,
        bet: 0,
        bankHand: [],
        playerHand: [],
      }
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.changePlayerName = this.changePlayerName.bind(this)
    // this.changePlayerStack = this.changePlayerStack.bind(this)
    this.startRound = this.startRound.bind(this)
    this.dealCard = this.dealCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
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

  toggleForm( form ) {
		this.setState({
			[form]: !this.state[form]
		})
}

  changePlayerName( name ) {
    this.setState({
      playerName: name
    })
	}

//   changePlayerStack( stackSize ) {
//     console.log(stackSize)
//     this.setState({
//       stackSize: stackSize
//     })
// 	}



  startRound( e ) {
    e.preventDefault();
    let tempRound = this.state.round;
    tempRound.bet = e.target.value;
    tempRound.id = this.state.round.id + 1;

    const card1 = this.dealCard( 0 );
    const card2 = this.dealCard( 1 );
    const card3 = this.dealCard( 2 );
    const card4 = this.dealCard( 3 );

    tempRound.playerHand = [ card1, card3 ];
    tempRound.bankHand = [ card2, card4 ];
    tempRound.bankHand[0].hidden = true;

    let tempDeck = this.state.deck;
    tempDeck = without( tempDeck, card1 );
    tempDeck = without( tempDeck, card2 );
    tempDeck = without( tempDeck, card3 );
		tempDeck = without( tempDeck, card4 );

    let tempStackSize = this.state.stackSize;
    tempStackSize -= e.target.value;

    // state veranderd nav van user input, in dit geval 'bet'
    this.setState({
      deck: tempDeck,
      stackSize: tempStackSize,
      round: tempRound,
    })
  }

  dealCard( i ) {
    // a functional approach,
    // Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
    const card = this.state.deck[i];
    return card;
  }

  // practice (functie wordt in echte spel niet gebruikt, nu allen via button)
  deleteCard( card ) {
    console.log(card)
		// always create temp variable
		let tempDeck = this.state.deck
		tempDeck = without(tempDeck, card);
		this.setState({
			deck: tempDeck
		})
	}

  render() {

    const bets = [10, 25, 50, 100];

    return (
      <div>
        <em>Round {this.state.round.id}</em>
        <div>Bet: {this.state.round.bet}</div>
        <hr/>
        <em>Bank hand:</em>
        <Hand hand={this.state.round.bankHand} />
        <hr/>
        <em>Player hand:</em>
        <Hand hand={this.state.round.playerHand} />
        <hr/>
        <Player
          name={this.state.playerName}
          stackSize={this.state.stackSize}
          bet={this.state.round.bet}
          startRound={this.startRound}
          toggleForm={this.toggleForm}
          changeName={this.state.changeName}
          // changeStack={this.state.changeStack}
          changePlayerName={this.changePlayerName}
          // changePlayerStack={this.changePlayerStack}
          bets={bets}
        />
        <Deck
          deck={this.state.deck}
          deleteCard={this.deleteCard}
        />
        <hr/>
      </div>
    )
  }
}

export default Game;
