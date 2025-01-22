import React from 'react'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/homePage'
import HeroPage1 from './Pages/heroPage1'
import HeroPage2 from './Pages/heroPage2'

const App = () => {
  return (

      <Router>
        <section className='app'>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/hero1' element={<HeroPage1 />} />
          <Route path='/hero2' element={<HeroPage2 />} />
        </Routes>
        </section>
      </Router>
    
  )
}

export default App