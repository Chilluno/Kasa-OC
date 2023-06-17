import React from "react"
import "../styles/Rating.css"
import starOn from "../assets/star-rating-on.png"
import starOff from "../assets/star-rating-off.png"

export const Rating = (props) => {

const currentRating = props.rate;



   return (<div className="star-rating">{
      [...Array(5)].map((star, index) => {
         return (
            <img key={index} className="star" src={index < currentRating ?  starOn : starOff} alt="star"/>
         )
      })
   }
    </div>
   )
}