import { useEffect, useState } from 'react'
import { BoardContext } from './Context'
import { boardDefault, generateWordSet } from '../others/words'

function Provider ({ children }) {
    const [board, setBoard] = useState(boardDefault)
    const [availableKey, setAvailableKey] = useState({attempt: 0, letterPos: 0})
    const [wordSet, setWordSet] = useState(new Set())
    const [disabledLetters, setDisabledLetters] = useState([])
    const [correctWord, setCorrectWord] = useState('')
    const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false})

    useEffect(() => {
        generateWordSet()
            .then(words => {
                setWordSet(words.wordSet)
                setCorrectWord(words.todayWord)
            })
    }, [])

    return (
        <BoardContext.Provider value={{board, setBoard, availableKey, setAvailableKey, correctWord, wordSet, setWordSet, disabledLetters, setDisabledLetters, gameOver, setGameOver}}>
            {children}
        </BoardContext.Provider>
    )
}

export default Provider