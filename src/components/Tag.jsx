import React from "react";
import "../styles/Tag.css"

export const Tag = ({tags}) => {


   return <div className="tags-container">
   {
      tags.map((tag, index) => <div className="tag" key={index}>{tag}</div>)
   }
   </div>
}