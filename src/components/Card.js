import React, { Component } from 'react'

const Card = ({ suit, value }) => {
  return (
    <div className="card js-card">
      <span>{value} of {suit}</span>
    </div>
  )
}

export default Card;
