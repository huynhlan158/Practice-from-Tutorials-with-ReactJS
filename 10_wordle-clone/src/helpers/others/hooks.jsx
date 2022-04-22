import { useContext } from 'react'
import { BoardContext } from '../store/Context'

export const useBoard = () => {
    const {board, setBoard, availableKey, setAvailableKey, correctWord, wordSet, setWordSet, disabledLetters, setDisabledLetters, gameOver, setGameOver} = useContext(BoardContext)

    const onSelectLetter = (keyVal) => {
        if (availableKey.letterPos > 4) return
    
        const newBoard = [...board]
        newBoard[availableKey.attempt][availableKey.letterPos] = keyVal
        setBoard(newBoard)

        setAvailableKey({...availableKey, letterPos: availableKey.letterPos + 1})
    }

    const onEnter = () => {
        if (availableKey.letterPos !==5) return
            
        let currWord = ''
        for (let i = 0; i < 5; i++) {
            currWord += board[availableKey.attempt][i]
        }
        if (wordSet.has(currWord.toLowerCase())) {
            setAvailableKey({...availableKey, attempt: availableKey.attempt + 1, letterPos: 0})
        } else {
            alert('Could not find the word!')
        }

        if (currWord.toLowerCase() === correctWord.toLowerCase()) {
            setGameOver({gameOver: true, guessedWord: true})
            return

        }

        if (availableKey.attempt === 5 && wordSet.has(currWord.toLowerCase())) {
            setGameOver({gameOver: true, guessedWord: false})
        }

    }

    const onDelete = () => {
        if (availableKey.letterPos === 0) return
            
        const newBoard = [...board]
        newBoard[availableKey.attempt][availableKey.letterPos - 1] = ''
        setBoard(newBoard)

        setAvailableKey({...availableKey, letterPos: availableKey.letterPos - 1})
    }

    return {board, setBoard, availableKey, setAvailableKey, correctWord,wordSet, setWordSet, disabledLetters, setDisabledLetters, gameOver, setGameOver, onSelectLetter, onEnter, onDelete}
}