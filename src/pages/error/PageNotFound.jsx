import React from "react"
import {Link} from "react-router-dom"
import "../../styles/Error.css"

export const PageNotFound = () => {
   return <div className="error-container">
   <h1 className="error-heading">404</h1>
   <p className="error-msg">Oups, la page que vous demandez n'existe pas</p>
   <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
   </div>
}