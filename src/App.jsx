import React from "react"
import './App.css'
import Card from "./components/Card"
import Header from "./components/Header";

function App() {
    const [score, setScore] = React.useState(0);
    const [bestScore, setBestScore] = React.useState(0)
    const [cardData, setCardData] = React.useState([])

    function updateScore() {
        setScore(score + 1)
    }

    function resetScore() {
        setScore(0)
    }

    function updateBestScore() {
        if (score < bestScore) return;
        setBestScore(score)
    }

    function shuffleArray(array) {
        const shuffled = [...array]

        for (let i = 0; i < shuffled.length - 1; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }

        return shuffled;
    }

    function shuffleCards() {
        setCardData((prev) => shuffleArray(prev))
    }


    React.useEffect(() => {
        async function getData() {
            try {
               const response = await fetch("https://rickandmortyapi.com/api/character")
               if (!response.ok) throw new Error(`Response status: ${response.status}`)
                const result = await response.json()
                const data = result.results.slice(0, 16)
                setCardData(data)
           } catch(e) {
               console.error(e.message)
           }
        }

        getData()
    }, [])

    return (
        <>
            <Header score={score} bestScore={bestScore}/>
            <div className=" h-full w-full flex gap-7 flex-wrap justify-center mb-5">
                <Card 
                data={cardData} 
                updateScore={updateScore} 
                resetScore={resetScore}
                updateBestScore={updateBestScore}
                shuffleCards={shuffleCards}/>
            </div>
        </>
    )
}

export default App
