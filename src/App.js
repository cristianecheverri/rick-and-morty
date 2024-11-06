import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import RickAndMortyCharacters from './components/RickAndMortyCharacters';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={RickAndMortyCharacters}></Route>
        <Route path='/characters/:id' Component={CharacterDetails}></Route>
        <Route path='/prueba' element={<p>Prueba</p>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
