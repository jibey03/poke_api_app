import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.js';
import Quizz from './Qr.js';
import Pokedex from './Pokedex.js';

const App = () => {
  return (
    <Router>
      <div>
        <header class="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokedex">Pokedex</Link>
            </li>
            <li>
              <Link to="/quizz">Quizz</Link>
            </li>
          </ul>
        </nav>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/quizz" element={<Quizz />} />
        </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;