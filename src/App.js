import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import TX from './Components/TX';
import FormPatient from './Components/FormPatient';
import XRayFilm from './Components/XRayFilm';
import Opdcard from './Components/Opdcard';
import Appointment from './Components/Appointment.js';
import SearchPatient from './Components/SearchPatient';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormPatient />} />
        <Route path="/patient/:citizen_id" element={<TX />} />
        <Route path="/treatment/:citizen_id" element={<TX />} />
        <Route path="/calendar" element={<Appointment />} />
        <Route path="/picture/:citizen_id" element={<XRayFilm />} />
        <Route path="/searchPatients" element={<Opdcard />} />
      </Routes>

    </Router>
  );
}
export default App;
