import React from "react"
import homeBanner from "../../assets/banner-home.png"
import { Banner } from "../../components/Banner"
import { Housing } from "../../components/Housing"


export const Homepage = () => {
   return <main>
   <Banner page="home" content="Chez vous, partout et ailleurs" banner={homeBanner}/>
   <Housing />
   </main>
}