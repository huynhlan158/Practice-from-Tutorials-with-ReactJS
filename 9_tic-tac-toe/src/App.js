import { useState, useEffect } from 'react'
import Square from './components/Square'
import { Patterns } from './Patterns'
import './App.css'

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState('X')
  const [result, setResult] = useState({winner: 'none', state: 'none'})

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx == square && val == '') {
        return player
      }
      return val
    }))
    
    if(player == 'X') {
      setPlayer('O')
    } else {
      setPlayer('X')
    }
  }

  const checkResult = () => {
    Patterns.forEach(currPattern => {
      const currPlayer = board[currPattern[0]]
      if (currPlayer == '') return
      let isWin = true
      currPattern.forEach(index => {
        if (board[index] != currPlayer) {
          isWin = false
        }
      })
      isWin && setResult({winner: currPlayer, state: 'won'})
    })

    let isTied = true
    board.forEach(square => {
      if (square == '') {
        isTied = false
      }
    })
    isTied && setResult({winner: 'No one', state: 'tie'})
  }

  useEffect(() => {
    checkResult()
  }, [board])

  useEffect(() => {
    if(result.winner != 'none') {
      alert(`Game Finished! The winner: ${result.winner}`)
      restart()
    }
  }, [result])

  const restart = () => {
    setBoard(['', '', '', '', '', '', '', '', ''])
    setPlayer('X')
    setResult({winner: 'none', state: 'none'})
  }

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <Square val={board[0]} chooseSquare={() => chooseSquare(0)} />
          <Square val={board[1]} chooseSquare={() => chooseSquare(1)} />
          <Square val={board[2]} chooseSquare={() => chooseSquare(2)} />
        </div>
        <div className="row">
          <Square val={board[3]} chooseSquare={() => chooseSquare(3)} />
          <Square val={board[4]} chooseSquare={() => chooseSquare(4)} />
          <Square val={board[5]} chooseSquare={() => chooseSquare(5)} />
        </div>
        <div className="row">
          <Square val={board[6]} chooseSquare={() => chooseSquare(6)} />
          <Square val={board[7]} chooseSquare={() => chooseSquare(7)} />
          <Square val={board[8]} chooseSquare={() => chooseSquare(8)} />
        </div>
      </div>
    </div>
  )
}

export default App;
