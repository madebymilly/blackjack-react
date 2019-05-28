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

class Bank extends React.Component {
  render() {
    return (
      <div className="bank js-bank">
        <em>Bank:</em>
        <Hand />
      </div>
    )
  }
}

class Hand extends React.Component {
  render() {
    return (
      <div>
        <div className="hand js-hand">
          <Card suit="hearts" value="4" />
          <Card suit="clubs" value="10"/>
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
          <span>200</span>
        </div>
        <button>Bet 10</button>
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
    }
  }

  componentDidMount() {
		fetch('../data/deck.json')
			.then(data => data.json())
      .then(data => this.setState({data}))
	}

  render() {
    const cards = this.state.data;
    return (
      <div>
        <Deck deck={cards} />
        <hr/>
        <Bank />
        <hr/>
        <em>Player hand:</em>
        <Hand />
        <hr/>
        <Player />
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
