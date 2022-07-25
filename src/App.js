import { Routes, Route } from "react-router-dom";
import { useFetchCollection } from "./hooks/useFetchCollection";
import Menu from './components/Menu/Menu';
import List from './pages/List';
import About from './pages/About';

const App = () => {

  const { collection, error } = useFetchCollection();

  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<List rowData={collection} error={error} />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default App;
