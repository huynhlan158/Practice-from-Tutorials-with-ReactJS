import Letter from './Letter'
import { useBoard } from '../helpers'

function Board () {
    const { board } = useBoard()

    return (
        <div className="board">
            {board.map((row, attempt) => (
                <div key={attempt} className="row">
                    {row.map((cellVal, cellPos) => (
                        <Letter key={cellPos} letterPos={cellPos} attemptVal={attempt} letter={cellVal}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board