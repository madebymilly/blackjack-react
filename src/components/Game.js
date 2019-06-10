import React, { Component } from 'react'
import { without } from 'lodash'

import Deck from './Deck'
import Card from './Card'
import Hand from './Hand'
import Player from './Player'
import PlayerMoves from './PlayerMoves'

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      deck: [],
      playerName: 'Milly',
      stackSize: 200,
      changeName: false,
      changeStack: false,
      round: {
        bet: 0,
        bankHand: [
          { suit: 'hearts', value: 4 }
        ],

        playerHand: [
            { suit: 'hearts', value: 10 },
            { suit: 'clubs', value: "A" }
        ],
      }
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.changePlayerName = this.changePlayerName.bind(this)
    // this.changePlayerStack = this.changePlayerStack.bind(this)
    this.startRound = this.startRound.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
  }

  componentDidMount() {
		fetch('../data/deck.json')
			.then(data => data.json())
      .then(result => {
        const deck = result.map( card => {
          return card;
        } )
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
    this.setState({
      round: tempRound
    })
    // TO DO: deal cards
  }

  deleteCard(card) {
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
