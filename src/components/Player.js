import React, { Component } from 'react'
import PlayerMoves from './PlayerMoves'

const Player = ({name, stackSize, bets, startRound}) => (
  <div className="player js-player">
    <label>Playername: </label>
    <span>{name}</span><br />
    <label>Stacksize: </label>
    <span>{stackSize}</span><br />
    <div>
      {bets.map(
        (bet, i) =>
          <button
            key={i}
            onClick={startRound}
            value={bet}
          >
            Bet {bet}
          </button>
      )}
    </div>
    <hr />
  </div>
);

export default Player;
