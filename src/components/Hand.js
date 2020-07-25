import React, {useState} from 'react'
import Card from './Card'

function getHandValue(hand) {
  let handValue = 0;
  hand.map(
    (card, i) =>
      handValue = handValue + card.value
  )
  return handValue;
}

const Hand = ({hand}) => {

  const handValue = getHandValue(hand);
  
  return (
    <div className="hand js-hand">
      <div>
      {hand.map(
        (card, i) =>
          <Card
            key={i}
            card={card}
            hidden={card.hidden}
          />
        )}
      </div>
      <br/>
      <div>Handwaarde: {handValue}</div>
    </div>
  )
}

export default Hand;