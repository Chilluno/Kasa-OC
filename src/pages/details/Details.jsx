import React from "react"
import {useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import "../../styles/Details.css"
import homeDetails from "../../../logements.json"
import { Accordion } from "../../components/Accordion";
import { Slideshow } from "./components/Slideshow";
import { Tag } from "./components/Tag";
import { Rating } from "./components/Rating";

export const Details = () => {
   const {homeId} = useParams();
   const navigate = useNavigate();

   
   const currentHome = homeDetails.find(detail => detail.id === homeId)


if(currentHome == undefined){
      useEffect(() => {
         navigate("*");
      })
   }

if(currentHome != undefined){
   return <main>

      <Slideshow slides={currentHome.pictures}/>
      <div className="details-title-container">
         <div className="details-title">
         <h1>{currentHome.title}</h1> 
         <p>{currentHome.location}</p>
         <Tag tags={currentHome.tags}/>
         </div>
         <div className="details-host">
            <div className="host-container">
            <p>{currentHome.host.name}</p>
            <img className="details-host-image" src={currentHome.host.picture} alt={currentHome.host.name} />
            </div>
            <Rating rate={currentHome.rating}/>
         </div>
      </div>


      <div className="details-dropdown-container">
      <Accordion title="Description" description={currentHome.description}/>
      <Accordion title="Équipements" description={currentHome.equipments}/>
      </div>
      </main>
   }
} 