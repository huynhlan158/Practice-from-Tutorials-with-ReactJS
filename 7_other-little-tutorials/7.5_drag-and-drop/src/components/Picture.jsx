import { useDrag } from 'react-dnd'

function Picture ({ id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'image',
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <img 
            key={id}
            ref={drag}
            src={url}
            width='150px'
            style={{borderColor: isDragging ? 'pink' : 'transparent'}}
        />
    )
}

export default Picture