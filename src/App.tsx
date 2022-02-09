import './App.css';
import { PokemonList } from './components/PokemonList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetail } from './components/pokemon-detail/PokemonDetail';
import { About } from './components/pokemon-detail/About';
import { BaseStats } from './components/pokemon-detail/BaseStats';
import { Evolution } from './components/pokemon-detail/Evolution';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetail />}>
            <Route path="" element={<About />} />
            <Route path="stats" element={<BaseStats />} />
            <Route path="evolution" element={<Evolution />} />
          </Route>
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
