import React from "react";

function Card({ data }) {
  return data ? (
    data.map((person, index) => (
     <div
     key={index} 
     className="h-max w-[20vw] border-blue-100 border-2 rounded-lg flex flex-col p-1">
       <img src={person.image} alt={person.name} className="rounded-sm"/>
       <div className="flex justify-center py-3">
         <p>{person.name}</p>
       </div>
     </div>
   ))
  ) : ""
}

export default Card;
