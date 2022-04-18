import { createContext, useState } from 'react'
import Form from './components/Form'
import './App.css'

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Form />
        <div className="switch">
          <label>{theme === 'light' ? 'Light mode' : 'Dark mode'}</label>
          <button onClick={toggleTheme}>ToggleTheme</button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
export {ThemeContext}
