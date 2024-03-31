import { useState } from 'react'
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function NavBar() {
  const [showModal, setShowModal] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)


  const scrollToSection = (id) => {
    console.log("Scrolling to:", id);
    const section = document.getElementById(id);
    console.log("Section:", section);
    if (section) {
      setShowModal(false);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function checkScreenSize() {
    setIsSmallScreen(window.innerWidth < 994);
  }

  window.addEventListener('resize', checkScreenSize);

  return (
    <Navbar bg="light" expand="lg" className='fixed-top'>
      <Container fluid className='navbar'>
        <Navbar.Brand href="/" className='brand'>Alex Stocking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setShowModal(!showModal)}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          {isSmallScreen ? (
            <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static">
            <Modal.Body>
            <Nav className="me-auto links">
              <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('interests')}>Interests</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact')}>Contact Details</Nav.Link>
            </Nav>
            </Modal.Body>
            </Modal>
          ) : (
            <>
            <Nav className="mr-auto links">
              <Nav.Link onClick={() => scrollToSection('about')}>About Me</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('skills')}>Skills</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('interests')}>Interests</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact')}>Contact Details</Nav.Link>
            </Nav>
            <Nav className="icons">
              <Nav.Link href="https://www.linkedin.com/in/alex-stocking/" target="_blank"><FaLinkedin /></Nav.Link>
              <Nav.Link href="https://github.com/alexstocking" target="_blank"><FaGithub /></Nav.Link>
            </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
