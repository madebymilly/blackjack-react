import React from 'react'

const moves = ['hit', 'pass', 'double', 'split'];

const PlayerMoves = ({doMove}) => (
  <div className="player-moves js-player-moves">
    {moves.map(
      (move, i) =>
      <button key={i} className={move} onClick={() => doMove({move})}>{move}</button>
    )}
  </div>
);

export default PlayerMoves;
