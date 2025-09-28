import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Other from './pages/Other/Other'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='other' element={<Other />} />
      </Routes>
    </div>
  )
}

export default App
