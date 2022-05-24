import { map } from 'lodash'
import { Routes, Route, Redirect } from 'react-router-dom'
import Results from './Results'

function Contents () {
    return (
        <div className="p-4">
            <Routes>
                <Route exact path='/' />
                <Route exact path='/search' element={<Results />} />
                <Route exact path='/image' element={<Results />} />
                <Route exact path='/news' element={<Results />} />
                <Route exact path='/video' element={<Results />} />
            </Routes>
        </div>
    )
}

export default Contents