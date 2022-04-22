import { Board, KeyBoard } from './components'
import { useBoard } from './helpers'
import { GameOver } from './components';

import './App.css'

function App() {
  const { gameOver } = useBoard()
  
  return (
    <div className="App">
        <nav>
          <h1>Wordle</h1>
        </nav>

        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <KeyBoard />}
        </div>
    </div>
  )
}

export default App;
