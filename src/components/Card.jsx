import React from "react";

function Card({ data, updateScore, updateBestScore, resetScore, shuffleCards }) {
  const [current, setCurrent] = React.useState([])

  function handleClick(e) {
    const name = e.currentTarget.dataset.name
    if (current.includes(name)) {
      updateBestScore()
      resetScore()
      setCurrent([])
    } else {
      setCurrent([...current, name])
      updateScore()
    }

    shuffleCards()
    return;
  }

  return data ? (
    data.map((person) => (
     <button
     key={person.id}
     data-name={person.name} 
     className="h-max w-[20vw] rounded-lg flex flex-col p-1 bg-blue-600
     hover:cursor-pointer 
     hover:shadow-blue-500/75 
     hover:shadow-2xl 
     hover:-translate-y-2  
     transition-all duration-300 ease-in-out"
     onClick={handleClick}>
       <img src={person.image} alt={person.name} className="rounded-sm"/>
       <div className="flex justify-center py-3">
         <p className="text-white text-[1.2rem] font-lucky">{person.name}</p>
       </div>
     </button>
   ))
  ) : ""
}

export default Card;
