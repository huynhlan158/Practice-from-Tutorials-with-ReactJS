import { useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
import './App.css'

function App() {
  const [ searchTerm, setSearchTerm ] = useState('')

  return (
    <div className="App">
      <input type="text" placeholder="Search..." onChange={event => setSearchTerm(event.target.value)}/>
      {JSONDATA.filter(val => {
        if (searchTerm == '') return val
          else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) return val
      }).map(val => (
        <div className="user" key={val.id}>
          <h4>{`-${val.id}- ${val.first_name}`}</h4>
        </div>
      ))}
    </div>
  );
}

export default App;
