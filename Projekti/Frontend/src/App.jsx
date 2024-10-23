import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import NavBarFakultet from './components/NavBarFakultet';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import SmjeroviPregled from './pages/smjerovi/SmjeroviPregled';
import SmjeroviDodaj from './pages/smjerovi/SmjeroviDodaj';
import SmjeroviPromjena from './pages/smjerovi/SmjeroviPromjena';
import StudentiPregled from './pages/studenti/StudentiPregled';
import StudentiDodaj from './pages/studenti/StudentiDodaj';
import StudentiPromjena from './pages/studenti/StudentiPromjena';
import KolegijiPregled from './pages/kolegiji/KolegijiPregled';
import KolegijiDodaj from './pages/kolegiji/KolegijiDodaj';
import KolegijiPromjena from './pages/kolegiji/KolegijiPromjena';
import RokoviPregled from './pages/rokovi/RokoviPregled';
import RokoviDodaj from './pages/rokovi/RokoviDodaj';
import RokoviPromjena from './pages/rokovi/RokoviPromjena';
import LoadingSpinner from './components/LoadingSpinner'
import Login from "./pages/Login"
import useAuth from "./hooks/useAuth"


function App() {

  const { isLoggedIn } = useAuth();

  function godina(){
    const pocenta = 2024;
    const trenutna = new Date().getFullYear();
    if(pocenta===trenutna){
      return trenutna;
    }
    return pocenta + ' - ' + trenutna;
  }
  
  return (
    <>
    <LoadingSpinner />
    <Container className="aplikacija">
      <NavBarFakultet />
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna />} />
        {isLoggedIn ? (
        <>
        <Route path={RouteNames.SMJER_PREGLED} element={<SmjeroviPregled />} />
        <Route path={RouteNames.SMJER_NOVI} element={<SmjeroviDodaj />} />
        <Route path={RouteNames.SMJER_PROMJENA} element={<SmjeroviPromjena />} />

        <Route path={RouteNames.STUDENT_PREGLED} element={<StudentiPregled />} />
        <Route path={RouteNames.STUDENT_NOVI} element={<StudentiDodaj />} />
        <Route path={RouteNames.STUDENT_PROMJENA} element={<StudentiPromjena />} />

        <Route path={RouteNames.KOLEGIJ_PREGLED} element={<KolegijiPregled />} />
        <Route path={RouteNames.KOLEGIJ_NOVI} element={<KolegijiDodaj />} />
        <Route path={RouteNames.KOLEGIJ_PROMJENA} element={<KolegijiPromjena />} />

        <Route path={RouteNames.ISPITNI_ROK_PREGLED} element={<RokoviPregled />} />
        <Route path={RouteNames.ISPITNI_ROK_NOVI} element={<RokoviDodaj />} />
        <Route path={RouteNames.ISPITNI_ROK_PROMJENA} element={<RokoviPromjena />} />
        </>
        ) : (
          <>
            <Route path={RouteNames.LOGIN} element={<Login />} />
          </>
        )}
      </Routes>
      </Container>
      <Container>
      <hr />
      <p className="logo">Fakultet &copy; {godina()}</p>
      </Container>
    </>
  )
}

export default App
