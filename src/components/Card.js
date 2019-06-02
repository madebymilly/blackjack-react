import React, { Component } from 'react'
import { GiClubs, GiSpades, GiHearts, GiDiamonds } from 'react-icons/gi'

class Card extends React.Component {

  renderSwitch(param) {
    switch(param) {
      case 'hearts':
        return <GiHearts />;

      case 'spades':
       return <GiSpades />;

      case 'clubs':
        return <GiClubs />;

      case 'diamonds':
        return <GiDiamonds />;

      default:
        return '';
    }
  }

  render() {
    const card = this.props.card;
    const value = card.value;
    const suit = card.suit;
    return (
      <div className="card js-card">
        <span>{value} of {suit}</span>
        {this.renderSwitch(suit)}
      </div>
    )
  }
}

export default Card;
