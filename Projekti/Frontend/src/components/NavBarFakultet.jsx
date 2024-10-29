import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames, APP_URL } from '../constants';
import useAuth from '../hooks/useAuth';

export default function NavBarFakultet() {

const navigate = useNavigate();
const { logout, isLoggedIn } = useAuth();

function OpenSwaggerURL(){
  window.open(APP_URL + "/swagger/index.html", "_blank")
}

    return(
    <Navbar expand="lg" className="bg-body-tertiary pomakni">
        <Navbar.Brand href="/" className='logo'>Fakultet APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link className='okvir podebljano' onClick={()=>navigate(RouteNames.HOME)}>Početna</Nav.Link>
          {isLoggedIn ? (
            <>
            <Nav.Link className='okvir2 podebljano' onClick={()=>navigate(RouteNames.NADZORNA_PLOCA)}>Nadzorna ploča</Nav.Link>
            <NavDropdown title="Programi" id="basic-nav-dropdown" className='okvir3 podebljano'>
              <NavDropdown.Item onClick={()=> navigate(RouteNames.SMJER_PREGLED)}>Smjerovi</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate(RouteNames.KOLEGIJ_PREGLED)}>
                Kolegiji
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate(RouteNames.STUDENT_PREGLED)}>Studenti</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate(RouteNames.ISPITNI_ROK_PREGLED)}>
                Ispitni rokovi
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='okvir4 podebljano' onClick={()=>OpenSwaggerURL()}>Swagger</Nav.Link>
            <Nav.Link className='okvir5 podebljano' onClick={logout}>Odjava</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => navigate(RouteNames.LOGIN)}>
                  Prijava
                </Nav.Link>
          )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}