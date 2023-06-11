import React from "react"
import logements from "../../../../logements.json"
import "../../../styles/Housing.css"
import {Card} from "./Card.jsx"


export const Housing = () => {
   const housing = logements;

   return <div className="housing-container">
      {
         housing.map((home) => ( 
            <Card key={home.id} logement={home} />
         ))}
   </div>
}