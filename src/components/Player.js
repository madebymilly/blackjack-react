import React, { Component } from 'react'
import PlayerName from './PlayerName'
import PlayerMoves from './PlayerMoves'
import Stack from './Stack'

class Player extends React.Component {
  render() {
    return (
      <div className="player js-player">
        <em>Player:</em>
        <PlayerName
          name={this.props.name}
          changeName={this.props.changeName}
          changePlayerName={this.props.changePlayerName}
          toggleForm={this.props.toggleForm}
        />
        <em>Stacksize:</em>
        <Stack
          stackSize={this.props.stackSize}
          changeStack={this.props.changeStack}
          changePlayerStack={this.props.changePlayerStack}
          toggleForm={this.props.toggleForm}
        />
        <button>Bet {this.props.bet}</button>
        <PlayerMoves />
        <hr/>
      </div>
    )
  }
}

export default Player;
