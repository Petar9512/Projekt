import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../constants';

export default function NavBarFakultet() {

const navigate = useNavigate();

    return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className='ruka' onClick={()=> navigate(RouteNames.HOME)}>Fakultet APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://sandworm-001-site1.ftempurl.com/swagger/index.html" target="_blank">Swagger</Nav.Link>
            <NavDropdown title="Programi" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=> navigate(RouteNames.SMJER_PREGLED)}>Smjerovi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Kolegiji
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate(RouteNames.STUDENT_PREGLED)}>Studenti</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Ispitni rokovi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
    )
}