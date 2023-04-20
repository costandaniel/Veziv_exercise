
import { Home,Form } from './components'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
       <Router>
      <div className="app">
        <Routes>
          <Route key='home' path="/" element={[<Home />]} />
          <Route key='form' path='/form' element={[<Form />]} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
