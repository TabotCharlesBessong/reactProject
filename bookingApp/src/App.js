import React from 'react'
import {BrowserRouter  , Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import List from './pages/list/List'
import Single from './pages/single/Single'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<Single/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App