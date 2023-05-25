import React from "react"
import logements from "../../../../logements.json"
import "../../../styles/Logement.css"
import {Card} from "./Card.jsx"


export const Logements = () => {
   return <div className="logements-container">
      {
         logements.map((logement) => ( 
            <Card key={logement.id} logement={logement}/>
         ))}
   </div>
}