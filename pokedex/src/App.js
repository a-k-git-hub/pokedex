import React from 'react';
import Home from './Home/Home';
import PokeDetails from './Home/PokeDetails';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/PokeDetails' element={<PokeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
