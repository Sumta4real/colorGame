import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import GameInstruction from './components/GameInstructions'
import GamePage from './components/GamePage'

function App() {
  return(
    <div className='guessGameContainer'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gameInstruction' element={<GameInstruction />} />
        <Route path='/gamePage' element={<GamePage />} />
      </Routes>
      </div>
  )
}

export default App