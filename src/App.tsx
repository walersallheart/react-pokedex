import './App.css';
import { PokemonList } from './components/PokemonList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonDetail } from './components/PokemonDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/" element={<PokemonList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
