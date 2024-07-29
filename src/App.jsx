import React from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Detailes from './pages/Detailes'
import Error from './pages/Error'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/detailes/:id' element={<Detailes></Detailes>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  )
}

export default App;
