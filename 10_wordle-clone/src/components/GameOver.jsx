import { useBoard } from '../helpers'

function GameOver () {
    const { gameOver, correctWord, availableKey } = useBoard()

    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? 'You correctly guessed!' : 'You failed'}</h3>
            <h1>Correct word: {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed in {availableKey.attempt} attempt(s)</h3>)}
        </div>
    )
}

export default GameOver