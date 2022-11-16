import Navbar  from './Components/Navbar';
import './App.css';
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
