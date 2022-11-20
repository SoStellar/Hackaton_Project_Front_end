import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import TX from './Components/TX';
import FormPatient from './Components/FormPatient';
import XRayFilm from './Components/XRayFilm';
import Opdcard from './Components/Opdcard';
import Appointment from './Components/Appointment';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<TX />} />
        {/* Routes Navbar */}
        <Route path="/registerPatient" element={<FormPatient />} />
        <Route path="/patient" element={<TX />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* Routes Service bar */}
        <Route path="/patient" element={<TX />} />
        <Route path="/picture" element={<XRayFilm />} />
        <Route path="/opdcard" element={<Opdcard />} />
      </Routes>

    </Router>
  );
}
export default App;
