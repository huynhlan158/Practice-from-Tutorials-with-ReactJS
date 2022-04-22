import { useEffect } from 'react'
import { useBoard } from '../helpers'

function Letter ({ letter, letterPos, attemptVal }) {
    const { correctWord, availableKey, disabledLetters, setDisabledLetters } = useBoard()

    const correct = letter === correctWord.toUpperCase()[letterPos]
    const almost = !correct && letter !== '' && correctWord.toUpperCase().includes(letter)

    const letterState = availableKey.attempt > attemptVal ? (
        correct ? 'correct' : almost ? 'almost' : 'error'
    ) : undefined

    useEffect(() => {
        if (letter !== '' && !correct && !almost) {
            setDisabledLetters(prev => [...prev, letter])
        }
    }, [availableKey.attempt])

    return (
        <div className="letter" id={letterState}>{letter}</div>
    )
}

export default Letter