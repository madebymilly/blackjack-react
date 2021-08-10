import React from 'react'

import '../styling/Card.css'
import { renderSuitIcon } from '../js/helpers.js'

const Card = ({ card, hidden }) => (
  <div className={`Card ${hidden ? 'is-hidden' : ''}`}>
    <span>{card.rank} of {card.suit}</span>
    {renderSuitIcon(card.suit)}
  </div>
);

export default Card;
