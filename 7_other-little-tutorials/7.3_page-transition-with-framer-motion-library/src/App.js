import './App.css'
import Navbar from './components/Navbar'
import AnimatedRoutes from './components/AnimatedRoutes'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
