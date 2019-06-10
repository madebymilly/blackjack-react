import React, { Component } from 'react'

class Stack extends React.Component {

  constructor() {
    super();
    this.state = {
      stackSize: 0,
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
    let newStack = this.state.stackSize;
    if ( newStack != '' ) {
      this.props.changePlayerStack( newStack );
      this.props.toggleForm( 'changeStack' );
    }
  }

  render() {
    return (
      <div>
        <span>{this.props.stackSize}</span><br/>
        <a className="changeStack" href="#"
          onClick={ e => this.props.toggleForm( 'changeStack' ) }
        >Change stacksize</a>
        <form noValidate
          onSubmit={ e => this.handleSubmit(e) }
          className={this.props.changeStack ? '' : 'is-hidden'}
        >
          <input type="text" name="stackSize"
            onChange={this.handleChange}
          />
          <button type="submit">Change</button>
        </form>
      </div>
    )
  }
}

export default Stack;
