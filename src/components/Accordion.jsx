import React, { useState } from "react"
import "../styles/Accordion.css"

export const Accordion = ({title, description}) => {
 const [display, setDisplay] = useState(false);

   return <div className="accordion-container">
      <div className="accordion-title"><h3>{title}</h3><button onClick={() => setDisplay(!display)}>Click</button></div>
      {  display ?
         <div className="accordion-content">
      { 
         typeof description === "string" ? <p className="accordion-description">{description}</p>
         : description.map((desc, index) => {
            return <p className="accordion-description" key={index}>{desc}</p>
         })
      }
      </div> : null}
   </div>
}