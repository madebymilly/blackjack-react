import React, { Component } from 'react'
import PlayerMoves from './PlayerMoves'

class Player extends React.Component {

  constructor() {
    super();
    this.state = {
      playerName: '',
      stack: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  handleSubmit( e ) {
    e.preventDefault();
    let newName = this.state.playerName;
    if ( newName != '' ) {
      this.props.changePlayerName( newName );
      //this.props.toggleForm();
    }
    let newStack = this.state.stack;
    if ( newStack != '' ) {
      this.props.changePlayerStack( newStack );
      //this.props.toggleForm();
    }
  }

  handleChange( e ) {
    const target = e.target,
      name = target.name,
      value = target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="player js-player">
        <em>Player:</em>
        <div>
          <label>Playername: </label>
          <span>{this.props.name}</span><br/>
          <a className="changeName" href="#"
            onClick={this.props.toggleForm}
          >Change name</a>
          <form noValidate
            onSubmit={this.handleSubmit}
            className={this.props.changeName ? '' : 'is-hidden'}
          >
            <input type="text" name="playerName"
              onChange={this.handleChange}
            />
            <button type="submit">Change</button>
          </form>
        </div>
        <div>
          <label>Stacksize: </label>
          <span>{this.props.stack}</span><br/>
          <a className="changeStack" href="#"
            onClick={this.props.toggleForm}
          >Change stacksize</a>
          <form noValidate
            onSubmit={this.handleSubmit}
            className={this.props.changeStack ? '' : 'is-hidden'}
          >
            <input type="text" name="stack"
              onChange={this.handleChange}
            />
            <button type="submit">Change</button>
          </form>
        </div>
        <button>Bet {this.props.bet}</button>
        <PlayerMoves />
      </div>
    )
  }
}

export default Player;
