import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import About from './pages/About';
import List from './pages/List';

const App = () => (
  <>
    <Menu />
    <Routes>
      <Route path='/' element={<List />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <p>Hello world</p>
  </>
);

export default App;
