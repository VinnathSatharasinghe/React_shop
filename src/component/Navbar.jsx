import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>

      <Navbar.Brand href="#home">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

        <Navbar.Brand href="#">Winny Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0" 
            style={{ maxHeight: '100px' }}
            navbarScroll >

            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          
  
          </Nav>
          
          
   
      <div className="buttons">
      
        
            <a href="#" className="btn btn-outline-light ms-2">
              <i class="fa fa-car me-2"></i> Login</a>
            
              <a href="#" className="btn btn-outline-light ms-2">
              <i class="fa fa-user me-2"></i> Login</a>

              <a href="#" className="btn btn-outline-light ms-2">
              <i class="fa fa-user me-2"></i> Login</a>
      
            
       </div>
       
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample; 