import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import About from './pages/About';
import List from './pages/List';
import apiServices from './services/boardgameatlas';

const App = () => {

  const [collection, setCollection] = useState([]);

  useEffect(() => {
    apiServices.getAll()
      .then(bgCollection => {
        setCollection(bgCollection);
      });
  }, []);

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<List data={collection} />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <p>Hello world</p>
    </>
  );
};

export default App;
