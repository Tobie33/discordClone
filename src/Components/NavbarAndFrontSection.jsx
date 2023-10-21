import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import discordLogo from "../../public/images/discordLogo.png"


const NavbarAndFrontSection = () => {
  return (
    <div id="center-page">
      <section className="center-page d-flex flex-column align-items-center">
        <Navbar>
          <Container className='justify-content-around'>
            <Navbar.Brand href="#home">
              <Image
                src={discordLogo}
                alt="discord logo"
                width={124}
                height={68}
              >
              </Image>
            </Navbar.Brand>
            <Nav>
              <Nav.Link href="#">Download</Nav.Link>
              <Nav.Link href="#">Nitro</Nav.Link>
              <Nav.Link href="#">Discover</Nav.Link>
              <Nav.Link href="#">Safety</Nav.Link>
              <Nav.Link href="#">Support</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Careers</Nav.Link>
            </Nav>
            <Button id="open-discord-button" href="#" variant='light'>Open Discord</Button>
          </Container>
        </Navbar>
        <div id="front-section-box" className='d-flex justify-content-center align-items-center'>
          <div id="front-slogan-and-buttons" className='text-center'>
            <h1 id="front-slogan">IMAGINE A PLACE...</h1>
            <p id="front-paragraph">...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
            <div id="front-buttons" className='d-flex justify-content-evenly'>
              <Button variant='light' className='front-buttons'>Download for Windows</Button>
              <Button variant='dark' className='front-buttons'>Open Discord in your browser</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NavbarAndFrontSection
