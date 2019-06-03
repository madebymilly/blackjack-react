import React, { Component } from 'react'
import PlayerMoves from './PlayerMoves'

class Player extends React.Component {
  render() {
    return (
      <div className="player js-player">
        <em>Player:</em>
        <div>
          <label>Playername: </label>
          <span>Milly</span><br/>
          <a href="#">Change Playersname</a>
          <form className="" noValidate>
            <input type="text" name="playersname" value="" onChange="" />
            <button type="submit">Change</button>
          </form>
        </div>
        <div>
          <label>Stacksize: </label>
          <span>{this.props.stack}</span>
        </div>
        <button>Bet {this.props.bet}</button>
        <PlayerMoves />
      </div>
    )
  }
}

export default Player;
