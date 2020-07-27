import React, { Component } from 'react'
import Hand from './Hand'

const Bank = ({ hand }) => {

  return (
    <div className="player js-player">
      <h3>Bank:</h3>
      <div>
        <label>Hand: </label>
        <Hand hand={hand} />
      </div>
    </div>
  )
};

export default Bank;
