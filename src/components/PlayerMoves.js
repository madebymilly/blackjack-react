import React, { Component } from 'react'

class PlayerMoves extends React.Component {
  render() {
    return (
      <div className="player-moves js-player-moves">
        <button className="hit">Hit</button>
        <button className="pass">Pass</button>
        <button className="double">Double</button>
        <button className="split">Split</button>
      </div>
    )
  }
}

export default PlayerMoves;
