import Axios from 'axios'
import useRandomColor from './useRandomColor'
import useQuery from './useQuery'
import './App.css'

function App() {
  const {color, changeColor} = useRandomColor()
  const {response} = useQuery(Axios.get('https://jsonplaceholder.typicode.com/photos')) 

  console.log(response);

  return (
    <div
      style={{width: '100vw', height: '100vh', backgroundColor: '#' + color}}
    >
      <button
        onClick={changeColor}
      >
        Change Color
      </button>

      <div style={{display: 'flex', width: '100%'}}>
        <img width='400px' height='400px' src={response[0].url} alt={response[0].title}/>
        <img width='400px' height='400px' src={response[10].url} alt={response[10].title}/>
        <img width='400px' height='400px' src={response[100].url} alt={response[100].title}/>
      </div>

      <div style={{display: 'flex', width: '100%'}}>

      </div>
    </div>
  )
}

export default App;
