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


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<TX />} />
        <Route path="/register" element={<FormPatient />} />
        <Route path="/patient" element={<TX />} />
        {/* <Route path="/treatment" element={<TX />} /> */}
        <Route path="/calendar" element={<Appointment />} />
        <Route path="/picture" element={<XRayFilm />} />
        <Route path="/searchPatients" element={<Opdcard />} />
      </Routes>

    </Router>
  );
}
export default App;
