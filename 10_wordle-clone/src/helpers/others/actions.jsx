import { useBoard } from './hooks'

// const { board, setBoard, availableKey, setAvailableKey } = useBoard()
// export const selectLetter = (keyVal) => {

//     if (keyVal === 'ENTER') {
//         if (availableKey.letterPos !==5) return
        
//         setAvailableKey({...availableKey, attempt: availableKey.attempt + 1, letterPos: 0})
        
//     } else if (keyVal === 'DELETE') {
//         if (availableKey.letterPos === 0) return
        
//         const newBoard = [...board]
//         newBoard[availableKey.attempt][availableKey.letterPos - 1] = ''
//         setBoard(newBoard)

//         setAvailableKey({...availableKey, letterPos: availableKey.letterPos - 1})
//     } else {
//         if (availableKey.letterPos > 4) return

//         const newBoard = [...board]
//         newBoard[availableKey.attempt][availableKey.letterPos] = keyVal
//         setBoard(newBoard)

//         setAvailableKey({...availableKey, letterPos: availableKey.letterPos + 1})
//     }
// }