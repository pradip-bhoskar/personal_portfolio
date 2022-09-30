import React from 'react'
import './Card.css'

const Card = ({ emoji, heading, detail, url }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={url} target="_blank">
        <button className="card_button">Live Preview</button>
      </a>
    </div>
  )
}

export default Card;