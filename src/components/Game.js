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
      stack: 200,
      bankHand: [
        { suit: 'hearts', value: 4 }
      ],
      playerHand: [
          { suit: 'hearts', value: 10 },
          { suit: 'clubs', value: "A" }
      ],
      bet: 10,
      deck: []
    }
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
    return (
      <div>
        <em>Bank hand:</em>
        <Hand hand={this.state.bankHand} />
        <hr/>
        <em>Player hand:</em>
        <Hand hand={this.state.playerHand} />
        <hr/>
        <Player stack={this.state.stack} bet={this.state.bet}/>
        <Deck deck={this.state.deck} deleteCard={this.deleteCard} />
        <hr/>
      </div>
    )
  }
}

export default Game;
