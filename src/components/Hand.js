import React, { Component } from 'react'
import Card from './Card'

class Hand extends React.Component {

  render() {
    const hand = this.props.hand;
    return (
      <div>
        <div className="hand js-hand">
        {hand.map(
          (card, i) =>
          <Card
            key={i}
            card={card}
          />
        )}
        </div>
      </div>
    )
  }
}

export default Hand;
