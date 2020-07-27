import React, { Component } from 'react'
import Hand from './Hand'
import Moves from './Moves'

const Player = ({ name, stackSize, bet, startRound, roundHasStarted, bets, hands, doMove }) => {

  let moves;

  if (roundHasStarted) {
    console.log('round has started!');
    moves = <Moves doMove={doMove} />
  }

  return (
    <div className="player js-player">
      <h3>Player:</h3>
      <label>Name: </label>
      <span>{name}</span><br />
      <label>Stacksize: </label>
      <span>{stackSize}</span><br />
      <div>Bet: {bet}</div><br />
      {!roundHasStarted &&
        <div>
          <label>Possible bets: </label>
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
      <div>
        {hands.map(
          (hand, i) =>
            <Hand key={i} hand={hand} moves={moves} />
        )}
      </div>
    </div>
  )
};

export default Player;
