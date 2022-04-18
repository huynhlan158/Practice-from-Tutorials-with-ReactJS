import { useState, useRef } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import './SearchBar.css'

function SearchBar ({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([])
    // const [wordEntered, setWordEntered] = useState('')
    const inputRef = useRef('')

    const handleFilter = (event) => {
        const searchWord = event.target.value

        const newFilter = data.filter(val => (val.title.toLowerCase().includes(searchWord.toLowerCase())))

        if (searchWord === '') {
            setFilteredData([])
        } else {
            setFilteredData(newFilter)
        }
    }
    const clearInput = () => {
        setFilteredData([])
        inputRef.current.value=''
        inputRef.current.focus()
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input 
                    type="text" 
                    placeholder={placeholder}
                    onChange={handleFilter}
                    ref={inputRef}
                />
                <div className="searchIcon">
                    {filteredData.length == 0 ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                </div>
            </div>
            {filteredData.length > 0 && (
                <div className="dataResult">
                    {filteredData.slice(0, 15).map((val, index) => (
                        <a key={index} className="dataItem" href={val.link} target="_blank">
                            <p>{val.title}</p>
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchBar