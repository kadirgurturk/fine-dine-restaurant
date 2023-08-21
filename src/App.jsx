import Booking from './components/pages/Booking'
import Home from './components/pages/Home'
import { Route,Routes } from 'react-router-dom'

import './css/app.css'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='booking' element={<Booking/>} />
     </Routes>
    </>
  )
}

export default App
