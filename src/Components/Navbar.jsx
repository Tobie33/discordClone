import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



const Navigation = () => {
  return(
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Discord</Navbar.Brand>
          <Nav>
            <Nav.Link href="#">Download</Nav.Link>
            <Nav.Link href="#">Nitro</Nav.Link>
            <Nav.Link href="#">Discover</Nav.Link>
            <Nav.Link href="#">Safety</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Careers</Nav.Link>
          </Nav>
          <Button href="#">Open Discord</Button>
        </Container>
      </Navbar>
  )

}

export default Navigation
