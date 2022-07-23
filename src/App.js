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
        setCollection(bgCollection.map(boardgame => {
          return {
            name: boardgame.name,
            players: boardgame.players,
            rating: boardgame.average_user_rating,
            rank: boardgame.rank,
            price: boardgame.price
          };

        }
        ));
      });
  }, []);

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<List rowData={collection} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
