import React, { Component } from 'react'
import PlayerMoves from './PlayerMoves'

const Player = ({name, stackSize, bet, startRound, roundHasStarted, bets}) => (
  <div className="player js-player">
    <label>Playername: </label>
    <span>{name}</span><br />
    <label>Stacksize: </label>
    <span>{stackSize}</span><br />
    {!roundHasStarted &&
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
    }
    <hr />
  </div>
);

export default Player;
