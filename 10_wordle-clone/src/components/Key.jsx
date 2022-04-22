import { memo } from 'react'
import { useBoard } from '../helpers'

function Key ({keyVal, bigKey, disabled}) { 
    const {onSelectLetter, onEnter, onDelete} = useBoard()
    const selectLetter = () => {
        if (keyVal === 'ENTER') {
            onEnter()
        } else if (keyVal === 'DELETE') {
            onDelete()
        } else {
            onSelectLetter(keyVal)
        }
    }

    return (
        <div
            className='key' 
            id={bigKey ? 'big' : disabled ? 'disabled' : undefined}
            onClick={selectLetter}
        >
            {keyVal}
        </div>
    )
}

export default memo(Key)