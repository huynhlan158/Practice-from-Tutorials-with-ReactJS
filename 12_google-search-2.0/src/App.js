import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contents from './components/Contents'

function App () {
    const [darkTheme, setDarkTheme] = useState(false)

    return (
        <div className={darkTheme ? 'dark' : ''}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Router>
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    <Contents />
                    <Footer />
                </Router>
            </div>
        </div>
    )
}

export default App