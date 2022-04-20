import { useQuizContext } from '../helpers/hooks'
import { Questions } from '../helpers/Questions'

function EndScreen () {
    const {score, setScore, setGameState} = useQuizContext()
    const restartQuiz = () => {
        setScore(0)
        setGameState('menu')
    }

    return (
        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen