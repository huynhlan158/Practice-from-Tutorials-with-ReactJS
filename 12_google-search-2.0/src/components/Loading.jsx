import { Puff } from 'react-loader-spinner'

function Loading () {
    return (
        <div className="flex justify-center items-center">
            <Puff type="Puff" color="#00BFFF" height={550} width={80} />
        </div>
    )
}

export default Loading