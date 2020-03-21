import React, { Component } from 'react'
import PlayerMoves from './PlayerMoves'

class Player extends React.Component {
  render() {
    return (
      <div className="player js-player">
        <label>Playername: </label>
        <span>{this.props.name}</span><br/>
        <label>Stacksize: </label>
        <span>{this.props.stackSize}</span><br/>
        <div>
          {this.props.bets.map(
            (bet, i) =>
              <button
                key={i}
                onClick={this.props.startRound}
                value={bet}
              >Bet {bet}</button>
          )}
        </div>
        <hr/>
      </div>
    )
  }
}

export default Player;
