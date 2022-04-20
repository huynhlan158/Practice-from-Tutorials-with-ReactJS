import { useQuizContext } from '../helpers/hooks'

function MainMenu () {
    const {gameState, setGameState} = useQuizContext()

    return (
        <div className="Menu">
            <button onClick={() => setGameState('quiz')}>Start Quiz</button>
        </div>
    )
}

export default MainMenu