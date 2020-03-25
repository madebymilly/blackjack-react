import React from 'react'
import { GiClubs, GiSpades, GiHearts, GiDiamonds } from 'react-icons/gi'

const renderSwitch = (s) => {
  switch (s) {
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
};

const Card = ({ card, hidden }) => (
  <div className={`card js-card ${hidden ? 'is-hidden' : ''}`}>
    <span>{card.value} of {card.suit}</span>
    {renderSwitch(card.suit)}
  </div>
);

export default Card;
