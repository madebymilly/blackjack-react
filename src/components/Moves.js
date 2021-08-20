import React, { Component } from 'react'
import Move from './Move'
class Moves extends Component {
  static defaultProps = {
    moves: ['hit', 'pass', 'double', 'split']
  }
  render() {
    const { moves, doMove } = this.props;
    return (
      <div className="player-moves">
        {moves.map(
          (move, i) =>
            <Move key={i} move={move} doMove={doMove}/>
        )}
      </div>
    )
  }
}

export default Moves;
