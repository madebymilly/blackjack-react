import React, { Component } from 'react'

class Move extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(e) {
		this.props.doMove(this.props.move)
	}
	render() {
		const { move } = this.props;
		return (
			<button onClick={this.handleClick}>{move}</button>
		)
	}
}

export default Move;
