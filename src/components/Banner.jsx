import React from "react"
import "../styles/Banner.css"

export const Banner = ({page, content, banner}) => {


   return <div className={`banner-container_`+page}>
      <img src={banner} alt="Bannière" className={`banner-img_`+page}/>
      <h1 className={`banner-title_`+page}>{content}</h1>
   </div>
}