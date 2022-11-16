import Navbar  from './Components/Navbar';
import ServiceBar  from './Components/ServiceBar';
import Opdcard from './Components/opdCard';
import './App.css';
import { Row,Col } from 'react-bootstrap';

import Opdcard from './Components/Opdcard';
import SearchPatient from './Components/SearchPatient';
import XRayFilm from './Components/XRayFilm';

function App() {
  return (
    <>
    <Navbar />
    {/* <SearchPatient />
    <Opdcard /> */}
    <XRayFilm />
    </>
  );
}
export default App;
