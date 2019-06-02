import React, { Component } from 'react'
import Card from './Card'

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

export default Hand;
