import React from "react"
import { useState } from "react"
import arrowL from "../assets/arrow-left.png"
import arrowR from "../assets/arrow-right.png"
import "../styles/Slideshow.css"


export const Slideshow = ({slides}) => {
const [currentIndex, setCurrentIndex] = useState(0);
const isSingleImage =  slides.length === 1 ? true : false


const prevSlide = () =>{
const isFirstSlide = currentIndex === 0;   
const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;  
setCurrentIndex(newIndex);
}

const nextSlide = () =>{
   const isLastSlide = currentIndex === slides.length - 1;   
const newIndex = isLastSlide ? 0 : currentIndex + 1;  
setCurrentIndex(newIndex);
}


if(isSingleImage === false){
   return <div className="slideshow-container">
   <img className="slideshow-image" src={slides[currentIndex]}/>
   <div className="slideshow-arrow-left" onClick={prevSlide}><img className="slideshow-arrow" src={arrowL}/></div>
   <div className="slideshow-arrow-right" onClick={nextSlide}><img className="slideshow-arrow" src={arrowR}/></div>
   <div className={`${window.innerWidth > 375 ? "slideshow-index" : "index-hidden"}`}>{currentIndex + 1}/{slides.length}</div>
   </div>
   }

if(isSingleImage === true){
   return <div className="slideshow-container">
   <img className="slideshow-image" src={slides[currentIndex]}/>
   </div>
}
}
