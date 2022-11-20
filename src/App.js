import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import TX from './Components/TX';
import FormPatient from './Components/FormPatient';
import XRayFilm from './Components/XRayFilm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TX />} />
        <Route path="/patient" element={<TX />} />
        <Route path="/picture" element={<XRayFilm />} />
        
      </Routes>

    </Router>
  );
}
export default App;
