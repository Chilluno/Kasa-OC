import React from "react"
import abouts from "../../../about.json"
import { Accordion } from "../../components/Accordion"
import "../../styles/About.css"
import { Banner } from "../../components/Banner"
import aboutBanner from "../../assets/banner-about.png"


export const About = () => {
   return <><Banner page="about" banner={aboutBanner}/>
   <div className="about-container">
      {
       abouts.map((about, index) => (
         <Accordion key={index} info={about}/>
       ))
      }
   </div>
   </>
}