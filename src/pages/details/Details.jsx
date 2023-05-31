import React from "react"
import { useParams } from "react-router-dom"

export const Details = () => {
   const homeId = useParams("homeId");
   console.log(homeId);

   return <div>Details</div>
} 