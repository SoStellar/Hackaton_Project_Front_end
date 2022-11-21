import Navbar from './Components/Navbar';
import ServiceBar from './Components/ServiceBar';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Opdcard from './Components/Opdcard';
import SearchPatient from './Components/SearchPatient';
import XRayFilm from './Components/XRayFilm';
import axios from 'axios';
import { React, useState } from 'react';
import TX from './Components/TX';
import Appointment from './Components/Appointment';
import FormPatient from './Components/FormPatient';

function App() {
  const [showOPDCard, setShowOPDcard] = useState(false);
  const SubmitSearch = () => setShowOPDcard(true)
  return (
    <>
      <Navbar />
      {/* <SearchPatient /> */}
      {/* <Opdcard /> */}
      {/* <XRayFilm /> */}
      <TX />
      {/* <Appointment /> */}
      <FormPatient />

    </>
  );
}
export default App;
