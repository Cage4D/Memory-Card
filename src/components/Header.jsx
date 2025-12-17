
function Header({ score, bestScore }) {
    return (
        <nav className="sticky top-0 flex flex-col items-center py-5 mb-10 gap-2 bg-blue-600 text-white">
            <h2 className="">Rick and Morty Memory Game</h2>
            <div className="flex justify-center gap-2 whitespace-nowrap">
                <p className="flex-1">Score: {score}</p>
                <p className="flex-1">Best Score: {bestScore}</p>
            </div>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
        </nav>
    )
}

export default Header;