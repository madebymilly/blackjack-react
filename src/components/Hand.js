import React from 'react'
import Card from './Card'

const Hand = ({hand}) => (
    <div className="hand js-hand">
    {hand.map(
      (card, i) =>
      <Card
        key={i}
        card={card}
        hidden={card.hidden}
      />
    )}
    </div>
);

export default Hand;
