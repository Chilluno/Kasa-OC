import React from "react"
import {NavLink} from "react-router-dom"
import logo from "../assets/logo.svg"
import "../styles/Header.css"

export const Header = () => {
   return <div className="header">
      <img src={logo} alt="Kasa" className="kasa-logo"/>
   <ul>
      <li><NavLink to="/" className={(link) => (link.isActive ? "nav-active" : "")} >ACCUEIL</NavLink></li>
      <li><NavLink to="/about" className={(link) => (link.isActive ? "nav-active" : "")}>A PROPOS</NavLink></li>
   </ul> 
   </div>
}