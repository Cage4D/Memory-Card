import React from "react";

function Card({ data, updateScore, updateBestScore, resetScore }) {
  const [current, setCurrent] = React.useState([])

  function handleClick(e) {
    const name = e.currentTarget.dataset.name
    if (current.includes(name)) {
      updateBestScore()
      resetScore()
      setCurrent([])
      return;
    }
    setCurrent([...current, name])
    updateScore()
    return;
  }

  return data ? (
    data.map((person, index) => (
     <button
     key={index}
     data-name={person.name} 
     className="h-max w-[20vw] border-blue-100 border-2 rounded-lg flex flex-col p-1 bg-blue-600 hover:cursor-pointer"
     onClick={handleClick}>
       <img src={person.image} alt={person.name} className="rounded-sm"/>
       <div className="flex justify-center py-3">
         <p>{person.name}</p>
       </div>
     </button>
   ))
  ) : ""
}

export default Card;
