import React, { useState } from "react"
import "../styles/Accordion.css"

export const Accordion = ({info}) => {
 const [display, setDisplay] = useState(false);

   return <div className="accordion-container">
      <div className="accordion-title"><h3>{info.title}</h3></div>
      <button onClick={() => setDisplay(!display)}>Click</button>
      {  display ?
         <div className="accordion-content">
      <p>{info.description}</p>
      </div> : null}
   </div>
}