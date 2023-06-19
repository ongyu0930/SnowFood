import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Yukimuro from './pages/Yukimuro';
import Navbar from './components/Navbar';
import Self from './pages/Self';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Yukimuro />} />

            <Route path="/self" element={<Self />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
