import React from "react"
import banner from "../../../assets/banner.png"
import "../../../styles/banner.css"

export const Banner = () => {
   return <div className="banner-container">
      <img src={banner} alt="Bannière" className="banner-img"/>
      <h1 className="banner-title">Chez vous,<br></br>
         partout et ailleurs</h1>
   </div>
}