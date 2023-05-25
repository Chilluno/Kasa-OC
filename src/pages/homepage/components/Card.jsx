import React from "react"
import "../../../styles/card.css"

export const Card = ({logement}) => {
   return <div className="card-container">
      <img src={logement.cover} alt={logement.title} className="card-img"/>
      <h2 className="card-title">{logement.title}</h2>
   </div>
}