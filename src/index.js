import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import "./main.less"

console.log(`init blackjack`)

class Deck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const deck = this.props.deck;

    return (
      <div className="deck js-deck">
        <em>Deck: </em>
        {deck.map(
          (card, i) =>
          <Card
            key={i}
            suit={card.suit}
            value={card.value}
          />
        )}
      </div>
    )
  }
}

// class Bank extends React.Component {
//   render() {
//     const hand = this.props.hand;
//     console.log(hand);
//     return (
//       <div className="bank js-bank">
//         <em>Bank:</em>
//         <Hand hand={hand} />
//       </div>
//     )
//   }
// }

class Hand extends React.Component {

  render() {
    const hand = this.props.hand;
    console.log(hand);
    return (
      <div>
        <div className="hand js-hand">
        {hand.map(
          (card, i) =>
          <Card
            key={i}
            suit={card.suit}
            value={card.value}
          />
        )}
        </div>
      </div>
    )
  }
}

const Card = ({ suit, value }) => {
  return (
    <div className="card js-card">
      <span>{value} of {suit}</span>
    </div>
  )
}

class PlayerMoves extends React.Component {
  render() {
    return (
      <div className="player-moves js-player-moves">
        <button className="hit">Hit</button>
        <button className="pass">Pass</button>
        <button className="double">Double</button>
        <button className="split">Split</button>
      </div>
    )
  }
}

class Player extends React.Component {
  render() {
    return (
      <div className="player js-player">
        <em>Player:</em>
        <div>
          <label>Playername: </label>
          <span>Milly</span>
        </div>
        <div>
          <label>Stacksize: </label>
          <span>{this.props.stack}</span>
        </div>
        <button>Bet {this.props.bet}</button>
        <PlayerMoves />
      </div>
    )
  }
}

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
    }
  }

  componentDidMount() {
		fetch('../data/deck.json')
			.then(data => data.json())
      .then(data => this.setState({data}))
	}

  render() {
    return (
      <div>
        <Deck deck={this.state.data} />
        <hr/>
        <em>Bank hand:</em>
        <Hand hand={this.state.bankHand} />
        <hr/>
        <em>Player hand:</em>
        <Hand hand={this.state.playerHand} />
        <hr/>
        <Player stack={this.state.stack} bet={this.state.bet}/>
      </div>
    )
  }
}

ReactDOM.render(
	<div>
		<Game />
	</div>,
  document.getElementById('game')
);
