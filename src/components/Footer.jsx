import React from "react"
import logo from "../assets/logo-footer.svg"
import "../styles/Footer.css"

export const Footer = () => {
   return <div className="footer-container">
   <img src={logo} className="footer-logo"></img>
   <p className="footer-rights">© 2020 Kasa. All rights reserved</p>
   </div>
}