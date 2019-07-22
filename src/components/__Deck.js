import React, { Component } from 'react'
import Card from './Card'

class Deck extends React.Component {

  render() {
    const deck = this.props.deck;
    const deleteCard = this.props.deleteCard;

    return (
      <div className="deck js-deck">
        <em>Deck: </em>
        {deck.map(
          (card, i) =>
          <div key={i}>
            <Card
              card={card}
              deleteCard={deleteCard}
            />
            <button onClick={(e) => this.props.deleteCard(card)}>remove card from deck</button>
          </div>
        )}
      </div>
    )
  }
}

export default Deck;
