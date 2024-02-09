import {Link} from 'react-router-dom';
import logo from '../../assets/imgKing/logo-nombre.png'; //comento
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Header () {

    return ( 
    
        <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand className="logo" href="/"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav><Link to="/">Home</Link></Nav>
              <Nav><Link to="/contacto">Contacto</Link></Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );


}

export default Header;