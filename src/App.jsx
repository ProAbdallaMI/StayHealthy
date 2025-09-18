import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="App">hello this is / route</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
