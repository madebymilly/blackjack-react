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
      playerName: 'player1',
      playerHand: [
          { suit: 'hearts', value: 10 },
          { suit: 'clubs', value: "A" }
      ],
      bet: 10,
      deck: [],
      changeName: false,
      changeStack: false,
    }
    this.toggleForm = this.toggleForm.bind(this)
    this.changePlayerName = this.changePlayerName.bind(this)
    this.changePlayerStack = this.changePlayerStack.bind(this)
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

  toggleForm( e ) {
    //console.log(e);
    //if ( e != undefined ) {
      //console.log(e.target.className)
      const className = e.target.className;
  		this.setState({
  			[className]: !this.state[className]
  		})
    //}
	}

  changePlayerName( name ) {
    this.setState({
      playerName: name
    })
	}

  changePlayerStack( stack ) {
    this.setState({
      stack: stack
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
        <Player
          name={this.state.playerName}
          stack={this.state.stack}
          bet={this.state.bet}
          toggleForm={this.toggleForm}
          changeName={this.state.changeName}
          changeStack={this.state.changeStack}
          changePlayerName={this.changePlayerName}
          changePlayerStack={this.changePlayerStack}
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
