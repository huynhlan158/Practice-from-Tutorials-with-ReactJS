import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ResultContextProvider from './contexts/ResultContextProvider'
import './styles/index.css'

ReactDOM.render(
    <StrictMode>
        <ResultContextProvider>
            <App />
        </ResultContextProvider>
    </StrictMode>,
    document.getElementById('root')
)