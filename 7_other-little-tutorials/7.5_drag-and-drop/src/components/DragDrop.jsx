import { useState } from 'react'
import { useDrop } from 'react-dnd'
import Picture from "./Picture"

const PictureList = [
    {
        id: 1,
        url: 'https://via.placeholder.com/600/771796'
    },
    {
        id: 2,
        url: 'https://via.placeholder.com/600/d32776'
    },
    {
        id: 3,
        url: 'https://via.placeholder.com/600/92c952'
    }
]

function DragDrop () {
    const [board, setBoard] = useState([])
    const [{isOver}, drop] = useDrop(() => ({
        accept: 'image',
        drop: item => addImageToBoard(item.id),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addImageToBoard = id => {
        const newPictureDrop = PictureList.filter(picture => picture.id === id)
        setBoard(currentBoard => {
            if (currentBoard.some(picture => picture.id === id)) {
                const newBoard = currentBoard.filter(picture => picture.id !== id)
                return [...newBoard, ...newPictureDrop]
            } else {
                return [...currentBoard, ...newPictureDrop]
            }
        })
    }

    return (
        <>
            <div className="Pictures">
                {PictureList.map(picture => <Picture key={picture.id} id={picture.id} url={picture.url} />)}
            </div>
            <div className="Board" ref={drop}>
                {board.map(picture => <Picture key={picture.id} id={picture.id} url={picture.url} />)}
            </div>
        </>
    )
}

export default DragDrop