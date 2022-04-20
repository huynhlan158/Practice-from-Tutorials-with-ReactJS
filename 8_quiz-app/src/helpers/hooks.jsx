import { useContext } from 'react'
import { QuizContext } from './Contexts'

export const useQuizContext = () => {
    const {gameState, setGameState, score, setScore} = useContext(QuizContext)
    return {gameState, setGameState, score, setScore}
} 
