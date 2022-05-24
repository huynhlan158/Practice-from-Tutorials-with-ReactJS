import { createContext, useContext, useState } from 'react'
import axios from 'axios'

const ResultContext = createContext()
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

function ResultContextProvider ({ children }) {
    const [results, setResults] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('Elon Musk')

    // type: '/videos', '/search', '/images'
    const getResults = async(type) => {
        setIsLoading(true)
        
        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
                'X-RapidAPI-Key': 'd6130c8255msh5825b6012f3b5ffp19b40fjsn26797c8f21f2'
            }
        })

        const data = await response.json()

        if(type.includes('/news')) {
            setResults(data.entries)
        } else if (type.includes('/image')) {
            setResults(data.image_results)
        } else {
            setResults(data.results)
        }

        setIsLoading(false)
    }

    return (
        <ResultContext.Provider value={{results, isLoading, searchTerm, setSearchTerm, getResults}}>
            {children}
        </ResultContext.Provider>
    )
}

const useResultContext = () => useContext(ResultContext)

export default ResultContextProvider
export {useResultContext}