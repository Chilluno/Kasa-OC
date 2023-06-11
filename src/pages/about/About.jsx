import React from "react"
import abouts from "../../../about.json"
import { Accordion } from "../../components/Accordion"
import "../../styles/About.css"
import { Banner } from "../../components/Banner"
import aboutBanner from "../../assets/banner-about.png"


export const About = () => {
   return <main><Banner page="about" banner={aboutBanner}/>
   <div className="about-container">
      {
       abouts.map((about, index) => (
         <Accordion key={index} title={about.title} description={about.description}/>
       ))
      }
   </div>
   </main>
}