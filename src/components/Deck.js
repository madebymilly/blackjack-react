import React, { Component } from 'react'
import Card from './Card'

class Deck extends React.Component {

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

export default Deck;
