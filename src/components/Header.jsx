import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../assets/logo.svg"
import "../styles/Header.css"

export const Header = () => {
   return <div className="header">
      <img src={logo} alt="Kasa" className="kasa-logo"/>
   <nav>
   <ul>
      <li><NavLink to="/" className={(link) => (link.isActive ? "nav-active" : "")} >Accueil</NavLink></li>
      <li><NavLink to="/about" className={(link) => (link.isActive ? "nav-active" : "")}>A propos</NavLink></li>
   </ul> 
   </nav>
   </div>
}