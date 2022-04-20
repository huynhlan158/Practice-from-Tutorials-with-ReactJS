import { useState } from 'react'
import { useQuizContext } from '../helpers/hooks'
import { Questions } from '../helpers/Questions'

function Quiz () {
    const {score, setScore, setGameState} = useQuizContext()

    const [currQuestion, setCurrQuestion] = useState(0)
    const { prompt, optionA, optionB, optionC, optionD, answer } = Questions[currQuestion]
    const [optionChosen, setOptionChosen] = useState('')

    const nextQuestion = () => {
        if(answer == optionChosen) {
            setScore(score + 1)
        }
        console.log(answer, score);
        setCurrQuestion(currQuestion + 1)
    }
    
    const finishQuiz = () => {
        if(answer == optionChosen) {
            setScore(score + 1)
        }
        setGameState('endScreen')
    }

    return (
        <div className="Quiz">
            <h1>{prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen('A')}>{optionA}</button>
                <button onClick={() => setOptionChosen('B')}>{optionB}</button>
                <button onClick={() => setOptionChosen('C')}>{optionC}</button>
                <button onClick={() => setOptionChosen('D')}>{optionD}</button>
            </div>

            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}>Next Question</button>
            )}
        </div>
    )
}

export default Quiz