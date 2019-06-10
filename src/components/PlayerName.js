import React, { Component } from 'react'

class PlayerName extends React.Component {

  constructor() {
    super();
    this.state = {
      playerName: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange( e ) {
    const target = e.target,
      name = target.name,
      value = target.value;
    this.setState({
      [name]: value
    })
  }


  handleSubmit( e ) {
    e.preventDefault();
    let newName = this.state.playerName;
    if ( newName != '' ) {
      this.props.changePlayerName( newName );
      this.props.toggleForm( 'changeName' );
    }
  }

  render() {
    return (
      <div>
        <label>Playername: </label>
        <span>{this.props.name}</span><br/>
        <a className="changeName" href="#"
          onClick={ e => this.props.toggleForm( 'changeName' ) }
        >Change name</a>
        <form noValidate
          onSubmit={ e => this.handleSubmit(e) }
          className={this.props.changeName ? '' : 'is-hidden'}
        >
          <input type="text" name="playerName"
            onChange={this.handleChange}
          />
          <button type="submit">Change</button>
        </form>
      </div>
    )
  }
}

export default PlayerName;
