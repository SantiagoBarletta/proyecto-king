import {Link} from 'react-router-dom';
import logo from '../../assets/imgKing/logo-nombre.png'; //comento
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
//import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';

//Probando otro header

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header (){
  return(

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
      <Navbar.Brand className="logo" href="/"><img src={logo}/></Navbar.Brand>
      <Navbar.Brand href="#"></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/contacto">Contacto</Link></Nav.Link>
              <Nav.Link><Link to="/informacion">Sobre King</Link></Nav.Link>
          
        </Nav>
        <Form id="buscar" className="d-flex">
          <Form.Control
            type="search"
            placeholder="Busca tu libro favorito..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  );
}

export default Header;

/*function Header () {

    return ( 
    
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          
          <Navbar.Brand className="logo" href="/"><img src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/contacto">Contacto</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
         
         
        
        </Container>
    </Navbar>
      
    );
    
}*/

//export default Header;

/*<Form id="buscar" className="d-flex">
<Form.Control
  type="search"
  placeholder="Busca tu libro favorito..."
  className="me-2"
  aria-label="Search"
/>
<Button variant="outline-danger" className="boton">Buscar</Button>
</Form>*/