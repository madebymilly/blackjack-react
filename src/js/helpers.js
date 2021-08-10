import React from 'react'
import { GiClubs, GiSpades, GiHearts, GiDiamonds } from 'react-icons/gi'

const renderSuitIcon = (suit) => {
	switch (suit) {
		case 'hearts':
			return <GiHearts className="icon--red" />;

		case 'spades':
			return <GiSpades />;

		case 'clubs':
			return <GiClubs />;

		case 'diamonds':
			return <GiDiamonds className="icon--red" />;

		default:
			return '';
	}
};

export { renderSuitIcon }
