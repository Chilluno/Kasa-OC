import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/logo.svg"
import "../styles/Header.css"

export const Header = () => {
   return <div className="header">
      <img src={logo} alt="Kasa" className="kasa-logo"/>
   <ul>
      <li><Link to="/">ACCUEIL</Link></li>
      <li><Link to="/about">A PROPOS</Link></li>
   </ul> 
   </div>
}