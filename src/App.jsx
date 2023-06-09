import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Show from './show'
import Home from './Home';
import Singleshow from './Singleshow';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/show/:showId' Component={Singleshow}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
