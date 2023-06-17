import React from "react"
import {Link} from "react-router-dom"
import "../styles/card.css"

export const Card = ({logement}) => {
   return <Link to={`/home/${logement.id}`}>
      <div className="card-container">
      <img src={logement.cover} alt={logement.title} className="card-img"/>
      <h2 className="card-title">{logement.title}</h2>
   </div>
   </Link>
}